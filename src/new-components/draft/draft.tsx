import { EG, useCallback, useEffect, useRef } from '@web-companions/fc';
import { useSubjectService } from 'hooks/useSubjectService';
import { render } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { loadingProgressBar, LoadingProgressBarHTMLElement } from 'loading-progress-bar';
import { DraftSubjectService } from 'services/DraftSubject.service';
import { pageElement } from '../page/page';
import { tableOfContent } from '../tableOfContent/tableOfContent';

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
  const [model, service] = useSubjectService(DraftSubjectService);

  const loadingRef = useRef<LoadingProgressBarHTMLElement | null>(null);

  useEffect(() => {
    service?.getById(props.id);
  }, [props.id, service]);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (service != null && loadingRef.current != null) {
        service.savingProcess({ current: loadingRef.current });
      }
    });
  }, [service, loadingRef.current]);

  return (
    <>
      <style>{require('./draft.scss')}</style>
      <LoadingProgressBarElement ref={loadingRef}></LoadingProgressBarElement>

      <um-preloader loading={model?.isLoading}>
        <div class="draft-content">
          <TableOfContentElement
            items={model?.data?.table_of_contents ?? []}
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
              model?.data?.pages ?? [],
              (p) => p.id,
              (page, idx) => (
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
