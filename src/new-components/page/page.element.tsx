import { EG, useCallback, useEffect, useState, useReducer } from '@web-companions/fc';
import { TypeConstructor } from '@web-companions/fc/common.model';
import { render } from 'lit-html';
import { Page } from 'models/page.model';
import type Delta from 'quill-delta';
import { editorElement } from '../editor/editor.element';
import { marginElement } from '../margin/margin.element';
import { foldingElement } from '../folding/folding.element';
import { addNewAfterNode } from './addNewAfter.node';
import { deletePageNode } from './deletePage.node';
import { createMargin } from '../../services/page.service';
import { DraftAction } from 'new-components/draft/draft.action';
import { PageAction, PAGE_ACTION } from './page.action';
import hub from 'hub';
import { addNewPage, deletePage } from 'services/draft.service';
import { PageState, page$, reducer } from './page.state';
import { iconNewMarginNode } from './iconNewMargin.node';

const css = String.raw;

const EditorElement = editorElement('inscriptum-editor');
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
  const [state, dispatch]: [PageState, (action: PageAction | DraftAction) => void] = useReducer(reducer, {
    data: props.page,
    isLoading: false,
  }) as any;

  const [content, setContent] = useState(props.page.content);
  const [isFolded, setFolded] = useState(props.page.isFolded);

  useEffect(() => {
    const sub = page$(props.page.id).subscribe((action) => dispatch(action as any));
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

  const textChangeCb = useCallback(
    (_changes: Delta, newContent: Delta) => {
      if (state.data != null) {
        hub.dispatch({
          type: PAGE_ACTION.SAVE,
          payload: {
            pageId: state.data.id,
            draftId: state.data.draftId,
            content: newContent,
          },
        });
      }
    },
    [state]
  );

  const onAddPageAfter = useCallback(
    (order: number) => () => {
      if (state.data?.draftId != null) {
        addNewPage(state.data.draftId, order, hub.dispatch);
      }
    },
    [state.data]
  );

  const onDeletePage = useCallback(() => {
    if (state.data != null) {
      deletePage(state.data.draftId, state.data.id, state.data.order, hub.dispatch);
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
              <EditorElement content={content} textChangeCb={textChangeCb} isTitle={state.data.order === 0}></EditorElement>
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
