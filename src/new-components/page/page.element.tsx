import { EG, useCallback, useEffect, useState, useReducer, useMemo } from '@web-companions/fc';
import { TypeConstructor } from '@web-companions/fc/common.model';
import { render } from 'lit-html';
import { Page } from 'models/page.model';
import type Delta from 'quill-delta';
import { editorElement } from '../editor/editor.element';
import { marginElement } from '../margin/margin.element';
import { foldingElement } from '../folding/folding.element';
import { addNewAfterNode } from './addNewAfter.node';
import { deletePageNode } from './deletePage.node';
import { addNewPageEffect, createMargin, deletePageEffect, savePageEffect } from './page.service';
import { PageAction } from './page.action';
import { page$, PageState, reducer } from './page.state';
import { iconNewMarginNode } from './iconNewMargin.node';
import { useSubjectEffect } from 'hooks/useSubjectEffect';
import { redactorElement } from 'new-components/redactor/redactor.element';
import { JSONContent } from '@tiptap/core';

const css = String.raw;

const RedactorElement = redactorElement('inscriptum-redactor');
// const EditorElement = editorElement('inscriptum-editor');
const MarginElement = marginElement('inscriptum-margin');
const FoldingElement = foldingElement('inscriptum-folding');
const AddNewAfterNode = addNewAfterNode();
const DeletePageNode = deletePageNode();
const IconNewMarginNode = iconNewMarginNode();

export const pageElement = EG({
  props: {
    page: {
      type: {} as TypeConstructor<Page>,
    },
  },
  render,
})(function (this: HTMLElement, props) {
  // TODO: fix types for useReducer
  const [state, dispatch]: [PageState, (action: PageAction) => void] = useReducer(reducer, {
    data: props.page,
    isLoading: false,
  }) as any;

  const [content, setContent] = useState(props.page.content);
  const [isFolded, setFolded] = useState(props.page.isFolded);

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

  // const textChangeCb = useCallback(
  //   (_changes: Delta, newContent: Delta) => {
  //     if (state.data != null) {
  //       savePage({
  //         pageId: state.data.id,
  //         draftId: state.data.draftId,
  //         content: newContent,
  //       });
  //     }
  //   },
  //   [state, savePage]
  // );

  const cbOnUpdateContent = useCallback(
    (content: JSONContent) => {
      if (state.data != null) {
        savePage({
          pageId: state.data.id,
          draftId: state.data.draftId,
          content,
        });
      }
    },
    [state, savePage]
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

  const onCreateMargin = useCallback(() => {
    if (state?.data?.id != null) {
      createMargin(state.data.id, dispatch);
    }
  }, [state]);

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
        <div>
          {isFolded ? null : (
            <button class="btn btn_icon" title="create new margin" onclick={onCreateMargin}>
              <IconNewMarginNode></IconNewMarginNode>
            </button>
          )}
        </div>
      </div>
    );

    return (
      <>
        <FoldingElement
          label={state.data.order > 0 ? String(state.data.order) : ''}
          value={state.data.id}
          isFolded={isFolded}
          change={(_, flag) => setFolded(flag)}
        ></FoldingElement>
        {isFolded ? (
          <>
            <span
              style={css`
                display: flex;
                justify-content: center;
                font-size: 1.6rem;
              `}
            >
              ...
            </span>
            {pageControls}
          </>
        ) : (
          <div
            class="row"
            style={css`
              display: flex;
              width: 100%;
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
              <RedactorElement content={content} cbOnUpdateContent={cbOnUpdateContent} isTitle={state.data.order === 0}></RedactorElement>
              {pageControls}
            </div>
            {state.data.margins.length > 0 ? (
              <MarginElement pageId={state.data.id} marginId={state.data.margins[0].id}></MarginElement>
            ) : null}
          </div>
        )}
      </>
    );
  }
});
