import { Editor } from '@tiptap/core';
import { EG, p } from '@web-companions/gfc';
import { render } from 'lit-html2';

import { FloatingMenu, FloatingMenuPlugin } from '@tiptap/extension-floating-menu';

export const floatingMenuElement = EG({
  props: {
    editor: p.req<Editor>(),
  },
})(function* (this: HTMLElement, params) {
  requestAnimationFrame(() => {
    params.editor.registerPlugin(
      FloatingMenuPlugin({
        editor: params.editor,
        element: this.firstElementChild! as HTMLElement,
        pluginKey: FloatingMenu.options.pluginKey,
        shouldShow: ({ state }) => {
          const { selection } = state;
          const { $anchor, empty } = selection;
          const isRootDepth = $anchor.depth === 1;
          const isEmptyTextBlock = $anchor.parent.isTextblock && !$anchor.parent.type.spec.code && !$anchor.parent.textContent;

          if (!empty || !isRootDepth || !isEmptyTextBlock) {
            return false;
          }

          return true;
        },
        tippyOptions: {
          interactive: true,
          placement: 'left',
          arrow: false,
          zIndex: 0
        }
      })
    );

    this.style.zIndex = '0';
  });

  while (true) {
    yield render(
      <div>
        <button
          class="btn btn_icon"
          onclick={() => params.editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-table"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
            <line x1="4" y1="10" x2="20" y2="10"></line>
            <line x1="10" y1="4" x2="10" y2="20"></line>
          </svg>
        </button>
      </div>,
      this
    );
  }
});
