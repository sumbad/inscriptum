import { EG, useEffect, useRef, useState } from '@web-companions/fc';
import { TypeConstructor } from '@web-companions/fc/common.model';
import { render } from 'lit-html';
import { BubbleMenuPlugin, BubbleMenuPluginKey, BubbleMenuPluginProps } from '@tiptap/extension-bubble-menu';
import { useLitRef } from 'hooks/useLitRef';
import { css } from 'utils/common';
import { Editor } from '@tiptap/core';
import { Props as TippyProps } from 'tippy.js';
import { PluginKey, Transaction, NodeSelection, TextSelection } from 'prosemirror-state';
import { DOMOutputSpec, NodeSpec, Node as ProsemirrorNode, NodeType } from 'prosemirror-model';

export type BubbleMenuProps = Omit<BubbleMenuPluginProps, 'element'> & {
  className?: string;
};

/**
 * NOTE: Shadow Dom:
 * https://github.com/atomiks/tippyjs/pull/915
 */
export const bubbleMenuElement = EG<BubbleMenuProps>({
  props: {
    editor: {} as TypeConstructor<Editor>,
    className: String,
    tippyOptions: {} as TypeConstructor<Partial<TippyProps> | undefined> | undefined,
  },
  render,
  // shadow: {
  //   mode: 'open',
  // },
})(function (this: HTMLElement, props) {
  const [rafId, setRafId] = useState(0);
  const element = useLitRef();
  const [menuContent, setMenuContent] = useState(null);

  useEffect(() => {
    console.log('useEffect bubbleMenuElement');

    cancelAnimationFrame(rafId);
    const { editor, tippyOptions } = props;

    setRafId(
      requestAnimationFrame(() => {
        if (element.current != null) {
          editor.registerPlugin(
            BubbleMenuPlugin({
              editor,
              element: element.current,
              // tippyOptions,
              // tippyOptions: {
              //   onShow
              // }
            })
          );
        }
      })
    );

    const updateEditorState = ({ editor, transaction }: { editor: Editor; transaction: Transaction }) => {
      setMenuContent(prepareMenuContent(editor));
    };

    editor.on('transaction', updateEditorState);

    return () => {
      console.log('DESTROY bubbleMenuElement');
      editor.off('transaction', updateEditorState);
      cancelAnimationFrame(rafId);
      editor.unregisterPlugin(BubbleMenuPluginKey);
    };
  }, [element.current]);

  return (
    <div
      ref={element.ref()}
      class={props.className}
      style={css`
        visibility: 'hidden';
      `}
    >
      {menuContent}
    </div>
  );
});

const NODE_WITHOUT_MENU = ['figure'];
const NODE_PARENT_WITHOUT_MENU = ['codeBlock', 'topicTitle'];

function prepareMenuContent(editor: Editor) {
  const selection = editor.state.selection;

  if (selection instanceof NodeSelection) {
    if (NODE_WITHOUT_MENU.includes(selection.node.type.name)) {
      return null;
    }
  }

  if (selection instanceof TextSelection) {
    if (
      NODE_PARENT_WITHOUT_MENU.includes(selection.$from.parent.type.name) ||
      NODE_PARENT_WITHOUT_MENU.includes(selection.$to.parent.type.name)
    ) {
      return null;
    }
  }

  return (
    <>
      <button onclick={() => editor.chain().focus().toggleBold().run()} class={editor.isActive('bold') ? 'is-active' : ''}>
        bold
      </button>
      <button onclick={() => editor.chain().focus().toggleItalic().run()} class={editor.isActive('italic') ? 'is-active' : ''}>
        italic
      </button>
      <button onclick={() => editor.chain().focus().toggleStrike().run()} class={editor.isActive('strike') ? 'is-active' : ''}>
        strike
      </button>
      <button onclick={() => editor.chain().focus().toggleHighlight().run()} class={editor.isActive('highlight') ? 'is-active' : ''}>
        highlight
      </button>
      <button
        onclick={() => {
          const url = window.prompt('URL') ?? '';
          editor.chain().focus().toggleLink({ href: url }).run();
        }}
        class={editor.isActive('link') ? 'is-active' : ''}
      >
        link
      </button>
      <button onclick={() => editor.chain().focus().toggleBlockquote().run()} class={editor.isActive('blockquote') ? 'is-active' : ''}>
        blockquote
      </button>

      <button
        onclick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        class={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </button>
      <button
        onclick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        class={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </button>
      <button
        onclick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        class={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </button>
    </>
  );
}
