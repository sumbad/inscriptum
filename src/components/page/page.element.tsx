import { EG, p } from '@web-companions/gfc';
import { css } from '@web-companions/h';
import { render } from 'lit-html2';
import { Page } from 'models/page.model';
import { marginElement, MarginElementMode } from 'components/margin/margin.element';
import { foldingElement } from '../../components/folding/folding.element';
import { addNewAfterNode } from './addNewAfter.node';
import { deletePageNode } from './deletePage.node';
import { addNewPageEffect, deletePageEffect, savePageEffect } from './page.service';
import { PageActionSave } from './page.action';
import { page$, PageState, reducer } from './page.state';
import { redactorElement } from 'redactor/redactor.element';
import { JSONContent } from '@tiptap/core';
import hub from 'hub';
import { filter, scan, Subject } from 'rxjs';
import { HUB_ACTION } from 'hub/actions';

const RedactorElement = redactorElement('inscriptum-redactor');
const MarginElement = marginElement('inscriptum-margin');
const FoldingElement = foldingElement('inscriptum-folding');
const AddNewAfterNode = addNewAfterNode();
const DeletePageNode = deletePageNode();

// TODO: use Shadow Dom
export const pageElement = EG({
  props: {
    page: p.req<Page>(),
    header: p.opt<string>(),
  },
})(function* (params) {
  let state: PageState = {
    data: params.page,
    isLoading: false,
  };

  let content = params.page.content;
  let isFolded = !!params.page.isFolded;
  let marginElementMode: MarginElementMode = 'hide';

  const savePage = new Subject<PageActionSave>();
  const savePage$ = savePageEffect(savePage);

  const addNewPage = new Subject<{ draftId: string; order: number }>();
  const addNewPage$ = addNewPageEffect(addNewPage);

  const deletePage = new Subject<{
    draftId: string;
    pageId: string;
    order: number;
  }>();
  const deletePage$ = deletePageEffect(deletePage);

  const subs = page$(params.page.id)
    .pipe(
      scan(reducer, {
        data: params.page,
        isLoading: false,
      })
    )
    .subscribe((pageState) => {
      state = pageState;
      this.next();
    });

  const subFold = hub.$.pipe(filter((it) => it.type === HUB_ACTION.PAGE_FOLDED && it.payload.pageId === state.data?.id)).subscribe(
    (action) => {
      if (action.type === HUB_ACTION.PAGE_FOLDED) {
        isFolded = action.payload.folded;
      }
    }
  );

  subs.add(
    savePage$.subscribe((d) => {
      if (state.data != null) {
        state.data.content = d.content;
      }
    })
  );

  subs.add(addNewPage$.subscribe());
  subs.add(deletePage$.subscribe());
  subs.add(subFold);

  const cbOnUpdateContent = (newContent: JSONContent) => {
    if (state.data != null) {
      savePage.next({
        pageId: state.data.id,
        draftId: state.data.draftId,
        content: newContent,
      });
    }
  };

  const onAddPageAfter = (order: number) => () => {
    if (state.data?.draftId != null) {
      addNewPage.next({ draftId: state.data.draftId, order });
    }
  };

  const onDeletePage = () => {
    if (state.data != null) {
      deletePage.next({ draftId: state.data.draftId, pageId: state.data.id, order: state.data.order });
    }
  };

  const onChangeMarginMode = (
    event: CustomEvent<{
      mode: MarginElementMode;
    }>
  ) => {
    marginElementMode = event.detail.mode;
    this.next();
  };

  const setFolded = (value: boolean) => {
    isFolded = value;

    if (state.data) {
      content = state.data.content;
    }

    this.next();
  };

  try {
    while (true) {
      let Content = <></>;

      if (state.data != null) {
        const pageControls = (
          <div class="page__controls">
            <div>
              <button class="btn btn_icon" title="add a new page" onclick={onAddPageAfter(state.data.order + 1)}>
                <AddNewAfterNode></AddNewAfterNode>
              </button>
              {state.data.order > 0 ? (
                <button class="btn btn_icon" title="delete this page" onclick={onDeletePage}>
                  <DeletePageNode></DeletePageNode>
                </button>
              ) : null}
            </div>
          </div>
        );

        Content = (
          <div id={`page_${state.data.id}`}>
            <style>{require('./page.style.scss')}</style>
            <FoldingElement
              label={state.data.order > 0 ? String(state.data.order) : ''}
              value={state.data.id}
              isFolded={isFolded}
              change={(_, flag) => setFolded(flag)}
            ></FoldingElement>
            {isFolded ? (
              <>
                <span class="pageContent_collapsed" onclick={() => setFolded(false)}>
                  {params.header && params.header.trim().length > 0 ? params.header : '...'}
                </span>
                {pageControls}
              </>
            ) : (
              <div
                class="row"
                style={css`
                  display: flex;
                  width: 100%;
                  min-height: ${state.data.margins.length > 0 ? '100vh' : 'auto'};
                `}
              >
                <div
                  style={css`
                    min-width: 732px;
                    padding: 1rem 0 0 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                  `}
                >
                  <RedactorElement
                    disable={['expand', 'full'].includes(marginElementMode)}
                    content={content ?? null}
                    cbOnUpdateContent={cbOnUpdateContent}
                    isTitle={state.data.order === 0}
                  ></RedactorElement>
                  {pageControls}
                </div>

                <MarginElement
                  pageId={state.data.id}
                  marginId={state.data.margins.length > 0 ? state.data.margins[0].id : undefined}
                  onchangeMarginMode={onChangeMarginMode}
                ></MarginElement>
              </div>
            )}
          </div>
        );
      }

      params = yield render(Content, this);
    }
  } finally {
    subs.unsubscribe();
  }
});
