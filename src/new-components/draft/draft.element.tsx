import { EG, useEffect, useReducer, useRef, useState } from '@web-companions/fc';
import hub from 'hub';
import { HUB_ACTION } from 'hub/actions';
import { render } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { loadingProgressBar, LoadingProgressBarHTMLElement } from 'loading-progress-bar';
import { PageAction } from 'new-components/page/page.action';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { getById } from 'services/draft.service';
import { pageElement } from '../page/page.element';
import { tableOfContent } from '../tableOfContent/tableOfContent';
import { DraftAction } from './draft.action';
import { draft$, DraftState, reducer } from './draft.state';

const css = String.raw;

const PageElement = pageElement('inscriptum-page');
const LoadingProgressBarElement = loadingProgressBar('loading-progress-bar');
const TableOfContentElement = tableOfContent('inscriptum-table-of-content');

export const draftElement = EG({
  props: {
    id: {
      type: String,
      attribute: 'data-id',
    },
  },
  render,
})(function (props) {
  // TODO: fix types for useReducer
  const [state, dispatch]: [DraftState, (action: DraftAction | PageAction) => void] = useReducer(reducer, {
    isLoading: false,
  }) as any;

  const [subs, setSubs] = useState(new Subscription());
  const [rafId, setRafId] = useState(0);

  const loadingRef = useRef<LoadingProgressBarHTMLElement | null>(null);

  useEffect(() => {
    const sub = draft$(props.id).subscribe((action) => dispatch(action as any));
    return () => {
      sub.unsubscribe();
    };
  }, []);

  useEffect(() => {
    getById(props.id);
  }, [props.id]);

  useEffect(() => {
    cancelAnimationFrame(rafId);
    setRafId(
      requestAnimationFrame(() => {
        if (loadingRef.current != null) {
          subs.unsubscribe();
          setSubs(savingProcessSubs(loadingRef));
        }
      })
    );
    return () => {
      cancelAnimationFrame(rafId);
      subs.unsubscribe();
    };
  }, [loadingRef.current]);

  useEffect(() => {
    const title = state.data?.table_of_contents[0];
    if (title != null) {
      document.title = title.header;
    }
  }, [state]);

  return (
    <>
      <style>{require('./draft.scss')}</style>
      <LoadingProgressBarElement ref={loadingRef}></LoadingProgressBarElement>

      <um-preloader loading={state.isLoading}>
        <div class="draft-content">
          <TableOfContentElement
            items={state.data?.table_of_contents ?? []}
            style={css`
              margin-right: 7rem;
              margin-left: 3rem;
              min-width: 15rem;
            `}
          ></TableOfContentElement>
          <div
            style={css`
              width: 100%;
            `}
          >
            {repeat(
              state.data?.pages ?? [],
              (p) => `${p.id}_${p.order}`,
              (page) => (
                <PageElement
                  page={page}
                  style={css`
                    position: relative;
                    display: block;
                    border-bottom: 1px solid #eee;
                  `}
                ></PageElement>
              )
            )}
          </div>
        </div>
      </um-preloader>
    </>
  );
});

function savingProcessSubs(loadingRef: { current: LoadingProgressBarHTMLElement | null }): Subscription {
  const subs: Subscription = new Subscription();
  let originDocumentTitle = document.title;

  const togglePause = loadingRef.current?.togglePause;
  const generateProgress = loadingRef.current?.generateProgress;

  if (togglePause != null && generateProgress != null) {
    let savingTime = 2000;
    let isProgressing = false;
    let needToSave = false;

    // new unsaved changes
    subs.add(
      hub.$.pipe(filter((a) => a.type === HUB_ACTION.PAGE_SAVE)).subscribe(() => {
        if (!needToSave) {
          originDocumentTitle = document.title;
          document.title = `*${originDocumentTitle}`;
          needToSave = true;
        }
      })
    );

    subs.add(
      // is saving
      hub.$.pipe(filter((a) => a.type === HUB_ACTION.PAGE_SAVING)).subscribe(() => {
        // finish a previous process
        if (isProgressing) {
          generateProgress.next();
        }

        savingTime = 2000;
        isProgressing = true;

        const generateResult = generateProgress.next();

        if (generateResult !== undefined && generateResult.value === 1) {
          setTimeout(() => {
            if (isProgressing) {
              togglePause(true);
              savingTime -= 300;
            }
          }, 300);
          setTimeout(() => {
            if (isProgressing) {
              togglePause(false);
            }
          }, 1000);
          setTimeout(() => {
            if (isProgressing) {
              togglePause(true);
              savingTime -= 1000;
            }
          }, 2000);
          setTimeout(() => {
            if (isProgressing) {
              savingTime -= 1000;
            }
          }, 3000);
        }
      })
    );

    subs.add(
      hub.$.pipe(filter((a) => a.type === HUB_ACTION.PAGE_SAVE_DONE)).subscribe((d) => {
        isProgressing = false;
        togglePause(false);

        setTimeout(
          () => {
            generateProgress.next();
          },
          savingTime > 0 ? savingTime : 0
        );

        document.title = originDocumentTitle;
        needToSave = false;
      })
    );

    subs.add(
      hub.$.pipe(filter((a) => a.type === HUB_ACTION.PAGE_SAVE_FAIL)).subscribe(() => {
        isProgressing = false;
        togglePause(false);

        setTimeout(
          () => {
            generateProgress.next();
          },
          savingTime > 0 ? savingTime : 0
        );
      })
    );
  }

  return subs;
}
