import { EG, useCallback, useEffect, useRef } from '@web-companions/fc';
import { useSubjectService } from 'hooks/useSubjectService';
import { render } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { loadingProgressBar, LoadingProgressBarHTMLElement } from 'loading-progress-bar';
import { DraftSubjectService } from 'services/DraftSubject.service';
import { foldingElement } from '../folding';
import { pageElement } from '../page';
import { tableOfContent } from '../tableOfContent/tableOfContent';

const css = String.raw;

const FoldingElement = foldingElement('inscriptum-icon');
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

  const onAddPageAfter = useCallback(
    (order: number) => () => {
      service?.addNewPage(order);
    },
    [service]
  );

  const onDeletePage = useCallback(
    (pageId: string, pageOrder: number) => () => {
      service?.deletePage(pageId, pageOrder);
    },
    [service]
  );

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
              width: 15rem;
            `}
          ></TableOfContentElement>
          <div>
            {repeat(
              model?.data?.pages ?? [],
              (p) => p.id,
              (page, idx) => (
                <>
                  {service && page.order > 0 ? <FoldingElement page={page} foldPage={service.foldPage}></FoldingElement> : null}
                  <div class="row">
                    <PageElement page={page}></PageElement>
                  </div>
                  <div
                    class="row"
                    style={css`
                      border-bottom: 1px solid #eee;
                    `}
                  >
                    <div class="fab-container">
                      {idx > 0 ? (
                        <button onclick={onDeletePage(page.id, page.order)} class="fab-buttons" tooltip="delete">
                          -
                        </button>
                      ) : null}
                      <button onclick={onAddPageAfter(page.order + 1)} class="fab-buttons" tooltip="add new after">
                        +
                      </button>
                      <button class="fab-buttons">{page.order}</button>
                    </div>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </um-preloader>
    </>
  );
});
