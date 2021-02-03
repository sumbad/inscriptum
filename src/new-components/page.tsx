import { EG, useCallback, useEffect, useState } from '@web-companions/fc';
import { TypeConstructor } from '@web-companions/fc/common.model';
import { render } from 'lit-html';
import { Page } from 'models/page.model';
import type Delta from 'quill-delta';
import { editorElement } from './editor';
import { PageSubjectService } from 'services/PageSubject.service';
import { useSubjectService } from 'hooks/useSubjectService';

const EditorElement = editorElement('inscriptum-editor');
const css = String.raw;

export const pageElement = EG({
  props: {
    page: {
      type: {} as TypeConstructor<Page>,
    },
  },
  render,
})(function (props) {
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
    (changes: Delta, newContent: Delta) => {
      service?.changeContent(newContent);
    },
    [service]
  );

  if (model?.data != null) {
    if (isFolded) {
      return (
        <span
          style={css`
            display: flex;
            justify-content: center;
            font-size: 1.6em;
            line-height: 0.1em;
          `}
        >
          ...
        </span>
      );
    }

    return <EditorElement content={content} textChangeCb={textChangeCb} isTitle={model.data.order === 0}></EditorElement>;
  }
});
