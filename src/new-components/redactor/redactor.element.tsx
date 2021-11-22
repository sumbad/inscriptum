import { EG, useEffect, useState } from '@web-companions/fc';
import { TypeConstructor } from '@web-companions/fc/common.model';
import Delta from 'quill-delta';
import { render } from 'lit-html';
import { useLitRef } from 'hooks/useLitRef';
import { createEditor } from './tools/redactor';
import { Editor, JSONContent } from '@tiptap/core';
import { bubbleMenuElement } from './bubbleMenu.element';
import { quillInnerHtml } from './tools/fromQuill';

const BubbleMenuElement = bubbleMenuElement('inscriptum-redactor-bubble-menu');

export const redactorElement = EG({
  props: {
    content: {
      type: {} as TypeConstructor<Delta | JSONContent | string | null>,
      default: null,
    },
    cbOnUpdateContent: {
      type: {} as TypeConstructor<(content: Record<string, unknown>) => void>,
      default: () => {},
    },
    isTitle: Boolean,
    disable: Boolean,
  },
  render,
})(function (props) {
  const [rafId, setRafId] = useState(0);
  const [editor, setEditor] = useState<Editor | undefined>();

  const editorContainerEl = useLitRef();

  useEffect(() => {
    cancelAnimationFrame(rafId);

    setRafId(
      requestAnimationFrame(() => {
        const editorEl = editorContainerEl.current;

        if (editorEl != null) {
          let content: JSONContent | string | null = null;

          if (props.content != null && typeof props.content === 'object' && 'ops' in props.content) {
            content = quillInnerHtml(props.content as Delta);
          } else {
            content = props.content;
          }

          setEditor(
            createEditor(editorEl, content, props.isTitle, {
              onUpdate: ({ editor }) => {
                props.cbOnUpdateContent(editor.getJSON());
              },
            })
          );
        }
      })
    );

    return () => {
      console.log('DESTROY redactorElement');
      editorContainerEl.current?.firstChild?.remove();
      cancelAnimationFrame(rafId);
      if (editor != null) {
        editor.destroy();
      }
    };
  }, [editorContainerEl.current, props.content, props.isTitle, props.cbOnUpdateContent]);

  if (editor != null) {
    editor.setEditable(!props.disable);
    console.log(editor, 'editor?.setEditable(false)');
  }

  return (
    <div class="redactor">
      <style>{require('./style.scss')}</style>
      <article ref={editorContainerEl.ref()} class="redactor__article"></article>
      {editor != null && <BubbleMenuElement editor={editor}></BubbleMenuElement>}
    </div>
  );
});
