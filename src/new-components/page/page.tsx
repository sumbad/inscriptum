import { EG, useCallback, useEffect, useState } from '@web-companions/fc';
import { TypeConstructor } from '@web-companions/fc/common.model';
import { render } from 'lit-html';
import { Page } from 'models/page.model';
import type Delta from 'quill-delta';
import { editorElement } from '../editor';
import { PageSubjectService } from 'services/PageSubject.service';
import { useSubjectService } from 'hooks/useSubjectService';
import { marginElement } from '../margin/margin';
import { foldingElement } from '../folding/folding';
import { addNewAfterNode } from './addNewAfterNode';
import { deletePageNode } from './deletePageNode';

const css = String.raw;

const EditorElement = editorElement('inscriptum-editor');
const MarginElement = marginElement('inscriptum-margin');
const FoldingElement = foldingElement('inscriptum-folding');
const AddNewAfterNode = addNewAfterNode();
const DeletePageNode = deletePageNode();

export const pageElement = EG({
  props: {
    page: {
      type: {} as TypeConstructor<Page>,
    },
  },
  render,
})(function (this: HTMLElement, props) {
  const [model, service] = useSubjectService(PageSubjectService, [{ data: props.page, isLoading: false }]);
  const [content, setContent] = useState(props.page.content);
  const [isFolded, setFolded] = useState(props.page.isFolded);

  useEffect(() => {
    if (model?.data?.content != null) {
      // first set content
      if (content == null && model.data.content != null) {
        setContent(model.data.content);
      }

      if (model.data.isFolded != null && isFolded !== model.data.isFolded) {
        setFolded(model.data.isFolded);

        // unfold a page's content
        if (!model.data.isFolded) {
          setContent(model.data.content);
        }
      }
    }
  }, [model, content, isFolded, setContent, setFolded]);

  const textChangeCb = useCallback(
    (_changes: Delta, newContent: Delta) => {
      service?.changeContent(newContent);
    },
    [service]
  );

  const onAddPageAfter = useCallback(
    (order: number) => () => {
      service?.addNewPage(order);
    },
    [service]
  );

  const onDeletePage = useCallback(() => {
    service?.deletePage();
  }, [service]);

  if (model?.data != null && service != null) {
    const pageControls = (
      <div class="row page__controls">
        <button class="btn btn_icon" title="add a new page" onclick={onAddPageAfter(model.data.order + 1)}>
          <AddNewAfterNode></AddNewAfterNode>
        </button>
        {model.data.order > 0 ? (
          <button class="btn btn_icon" title="delete this page" onclick={onDeletePage}>
            <DeletePageNode></DeletePageNode>
          </button>
        ) : null}
      </div>
    );

    return (
      <>
        <FoldingElement
          label={model.data.order > 0 ? String(model.data.order) : ''}
          value={String(model.data.id)}
          isFolded={isFolded}
          change={service.foldPage}
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
              <EditorElement content={content} textChangeCb={textChangeCb} isTitle={model.data.order === 0}></EditorElement>
              {pageControls}
            </div>
            <MarginElement></MarginElement>
          </div>
        )}
      </>
    );
  }
});
