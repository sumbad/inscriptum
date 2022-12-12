import { EG, p } from '@web-companions/gfc';
import { render } from 'lit-html2';
import { createEditor } from './tools/redactor';
import { Editor, JSONContent } from '@tiptap/core';
import { bubbleMenuElement } from './components/bubbleMenu.element';
import { floatingMenuElement } from './components/floatingMenu.element';
import { createRef, ref } from 'lit-html2/directives/ref.js';

const BubbleMenuElement = bubbleMenuElement('inscriptum-redactor-bubble-menu');
const FloatingMenuElement = floatingMenuElement('inscriptum-redactor-floating-menu');

export const redactorElement = EG({
  props: {
    content: p.req<JSONContent | string | null>(),
    cbOnUpdateContent: p.req<(content: Record<string, unknown>) => void>(),
    isTitle: p.req<boolean>(),
    disable: p.req<boolean>(),
  },
})(function* (params) {
  const editorContainerEl = createRef<HTMLDivElement>();

  let rafId = 0;
  let editor: Editor | null = null;

  const afterUpdateCallback = () => {
    cancelAnimationFrame(rafId);

    rafId = requestAnimationFrame(() => {
      const editorEl = editorContainerEl.value;

      if (editorEl != null) {
        const content = params.content;

        editor = createEditor(editorEl, content, params.isTitle, {
          onUpdate: ({ editor }) => {
            params.cbOnUpdateContent(editor.getJSON());
          },
        });

        this.next();
      }
    });
  };

  try {
    let state = params;

    afterUpdateCallback();

    while (true) {
      if (!Object.is(params.content, state.content) || !Object.is(params.isTitle, state.isTitle)) {
        afterUpdateCallback();
      }

      if(editor != null && !Object.is(params.disable, state.disable)) {
        (editor as Editor).setEditable(!params.disable);
      }

      state = params;

      params = yield render(
        <div class="redactor">
          <style>{require('./style.scss')}</style>
          <article ref={ref(editorContainerEl)} class="redactor__article"></article>
          {editor != null ? (
            <>
              <FloatingMenuElement editor={editor as Editor}></FloatingMenuElement>
              <BubbleMenuElement editor={editor as Editor}></BubbleMenuElement>
            </>
          ) : (
            ''
          )}
        </div>,
        this
      );
    }
  } finally {
    console.log('DESTROY redactorElement');
    editorContainerEl.value?.firstChild?.remove();
    cancelAnimationFrame(rafId);

    if (editor != null) {
      (editor as Editor).destroy();
    }
  }
});
