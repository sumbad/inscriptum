import { EG, p } from '@web-companions/gfc';
import { render } from 'lit-html2';
import { repeat } from 'lit-html2/directives/repeat.js';
import { ref, createRef, Ref } from 'lit-html2/directives/ref.js';

import hub from 'hub';
import { HUB_ACTION } from 'hub/actions';

import { loadingProgressBar, LoadingProgressBarHTMLElement } from 'loading-progress-bar';
import { controlsPanelElement } from 'new-components/controls-panel/controlsPanel.element';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { getById } from 'new-components/draft/draft.service';
import { pageElement } from '../page/page.element';
import { tableOfContent } from '../tableOfContent/tableOfContent';
import { draft$, DraftState, reducer } from './draft.state';
import { sidebarElement } from 'new-components/sidebar/sidebar.element';
import { css } from 'utils/common';

const PageElement = pageElement('inscriptum-page');
const LoadingProgressBarElement = loadingProgressBar('loading-progress-bar');
const TableOfContentElement = tableOfContent('inscriptum-table-of-content');
const ControlsPanelElement = controlsPanelElement('inscriptum-controls-panel');
const SidebarElement = sidebarElement('inscriptum-sidebar');

export const draftElement = EG({
  props: {
    id: p.req<string>('data-id'),
  },
})(function* (props) {
  const subs: Subscription[] = [];
  const loadingRef: Ref<LoadingProgressBarHTMLElement> = createRef();
  let state: DraftState = {
    isLoading: false
  };
  let title = state.data?.table_of_contents[0];
  let rafId = 0;

  getById(props.id);

  subs.push(
    draft$(props.id).subscribe(
      (action) => {
        state = reducer(state, action);

        this.next();
      }
    )
  );

  rafId = requestAnimationFrame(() => {
    if (loadingRef.value != null) {
      subs.push(savingProcessSubs(loadingRef))
    }
  })

  try {
    let _props = props;
    
    while (true) {
      if (_props?.id !== props.id) {
        getById(props.id);
      }

      if (state.data != null && title !== state.data.table_of_contents[0]) {
        title = state.data.table_of_contents[0];
        document.title = title.header;
      }

      _props = yield render(
        <>
          <style>{require('./draft.scss')}</style>
          <LoadingProgressBarElement ref={ref(loadingRef)}></LoadingProgressBarElement>

          <um-preloader loading={state.isLoading}>
            <div class="draft-content">
              <SidebarElement>
                <ControlsPanelElement draftId={props.id}></ControlsPanelElement>
                <TableOfContentElement items={state.data?.table_of_contents ?? []}></TableOfContentElement>
              </SidebarElement>
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
                        margin-left: 150px;
                      `}
                      header={state.data?.table_of_contents[page.order]?.header}
                    ></PageElement>
                  )
                )}
              </div>
            </div>
          </um-preloader>
        </>,
        this
      );
    }
  } finally {
    cancelAnimationFrame(rafId);

    subs.forEach(it=>it.unsubscribe());
  }
});

function savingProcessSubs(loadingRef: Ref<LoadingProgressBarHTMLElement>): Subscription {
  const subs: Subscription = new Subscription();
  let originDocumentTitle = document.title;

  const togglePause = loadingRef.value?.togglePause;
  const generateProgress = loadingRef.value?.generateProgress;

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
