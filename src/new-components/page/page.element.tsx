import { EG, useCallback, useEffect, useState, useReducer, useMemo } from '@web-companions/fc';
import { TypeConstructor } from '@web-companions/fc/common.model';
import { render } from 'lit-html';
import { Page } from 'models/page.model';
import { marginElement, MarginElementMode } from 'new-components/margin/margin.element';
import { foldingElement } from '../folding/folding.element';
import { addNewAfterNode } from './addNewAfter.node';
import { deletePageNode } from './deletePage.node';
import { addNewPageEffect, deletePageEffect, savePageEffect } from './page.service';
import { PageAction } from './page.action';
import { page$, PageState, reducer } from './page.state';
import { useSubjectEffect } from 'hooks/useSubjectEffect';
import { redactorElement } from 'new-components/redactor/redactor.element';
import { JSONContent } from '@tiptap/core';
import { css } from '@web-companions/h';

const RedactorElement = redactorElement('inscriptum-redactor');
// const EditorElement = editorElement('inscriptum-editor');
const MarginElement = marginElement('inscriptum-margin');
const FoldingElement = foldingElement('inscriptum-folding');
const AddNewAfterNode = addNewAfterNode();
const DeletePageNode = deletePageNode();

// TODO: rewrite to gfc as a component with Shadow Dom
export const pageElement = EG({
  props: {
    page: {
      type: {} as TypeConstructor<Page>,
    },
    header: {
      type: {} as TypeConstructor<string | undefined>,
    },
  },
  render,
})(function (this: HTMLElement, props) {
  // TODO: fix types for useReducer
  const [state, dispatch]: [PageState, (action: PageAction) => void] = useReducer(reducer, {
    data: props.page,
    isLoading: false,
  }) as any;

  let [content, setContent] = useState(props.page.content);
  const [isFolded, setFolded] = useState(props.page.isFolded);
  const [marginElementMode, setMarginElementMode] = useState<MarginElementMode>('hide');

  const [savePage$, savePage] = useSubjectEffect(savePageEffect);
  const [addNewPage$, addNewPage] = useSubjectEffect(addNewPageEffect);
  const [deletePage$, deletePage] = useSubjectEffect(deletePageEffect);

  useEffect(() => {
    const sub = page$(props.page.id).subscribe((action) => dispatch(action as any));

    sub.add(
      savePage$.subscribe((d) => {
        if (state.data != null) {
          state.data.content = d.content;
        }
      })
    );

    sub.add(addNewPage$.subscribe());
    sub.add(deletePage$.subscribe());

    return () => {
      sub.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (state?.data?.content != null) {
      // first set content
      if (content == null && state.data.content != null) {
        setContent(state.data.content);
      }

      if (state.data.isFolded != null && isFolded !== state.data.isFolded) {
        // unfold a page's content
        if (!state.data.isFolded) {
          setContent(state.data.content);
        }
      }
    }
  }, [state, content, isFolded, setContent, setFolded]);

  const cbOnUpdateContent = useCallback(
    (newContent: JSONContent) => {
      if (state.data != null) {
        savePage({
          pageId: state.data.id,
          draftId: state.data.draftId,
          content: newContent,
        });

        if (content != null) {
          content['content'] = newContent.content;
        } else {
          content = newContent;
        }
      }
    },
    [state, savePage, content]
  );

  const onAddPageAfter = useCallback(
    (order: number) => () => {
      if (state.data?.draftId != null) {
        addNewPage({ draftId: state.data.draftId, order });
      }
    },
    [state.data, savePage]
  );

  const onDeletePage = useCallback(() => {
    if (state.data != null) {
      deletePage({ draftId: state.data.draftId, pageId: state.data.id, order: state.data.order });
    }
  }, [state.data]);


  const onChangeMarginMode = useCallback(
    (
      event: CustomEvent<{
        mode: MarginElementMode;
      }>
    ) => {
      setMarginElementMode(event.detail.mode);
    },
    [state]
  );

  if (state?.data != null) {
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

    return (
      <>
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
              {props.header && props.header.trim().length > 0 ? props.header : '...'}
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
              {/* <EditorElement content={content} textChangeCb={textChangeCb} isTitle={state.data.order === 0}></EditorElement> */}
              <RedactorElement
                disable={['expand', 'full'].includes(marginElementMode)}
                content={content}
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
      </>
    );
  }
});
