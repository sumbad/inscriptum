import { EG, useEffect, useState } from '@web-companions/fc';
import { TypeConstructor } from '@web-companions/fc/common.model';
import { render } from 'lit-html';
import { BubbleMenuPlugin, BubbleMenuPluginProps, BubbleMenu } from '@tiptap/extension-bubble-menu';
import { useLitRef } from 'hooks/useLitRef';
import { css } from 'utils/component.tools';
import { Editor } from '@tiptap/core';
import { Props as TippyProps } from 'tippy.js';
import { Transaction, NodeSelection, TextSelection } from 'prosemirror-state';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';

export type BubbleMenuProps = Omit<BubbleMenuPluginProps, 'element'> & {
  className?: string;
};

/**
 * NOTE: Shadow Dom:
 * https://github.com/atomiks/tippyjs/pull/915
 */
export const bubbleMenuElement = EG<Partial<BubbleMenuProps> & { editor: BubbleMenuProps['editor'] }>({
  props: {
    editor: {} as TypeConstructor<Editor>,
    className: String,
    tippyOptions: {} as TypeConstructor<Partial<TippyProps> | undefined> | undefined,
    pluginKey: {
      type: String,
      default: BubbleMenu.options.pluginKey,
    },
    shouldShow: {
      type: {} as TypeConstructor<BubbleMenuProps['shouldShow']>,
      default: null,
    },
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
              pluginKey: props.pluginKey!,
              shouldShow: props.shouldShow!,
              // tippyOptions,
              // tippyOptions: {
              //   onShow
              // }
            })
          );
        }
      })
    );

    const transaction$ = new Subject<void>();

    const updateEditorState = ({ transaction }: { editor: Editor; transaction: Transaction }) => {
      if (transaction.steps.length > 0) {
        setMenuContent(prepareMenuContent(editor));
      } else if (transaction.selection.empty) {
        setMenuContent(null);
      } else {
        transaction$.next();
      }
    };

    editor.on('transaction', updateEditorState);

    transaction$.pipe(debounceTime(700)).subscribe(() => {
      setMenuContent(prepareMenuContent(editor));
    });

    return () => {
      console.log('DESTROY bubbleMenuElement');
      transaction$.unsubscribe();
      editor.off('transaction', updateEditorState);
      cancelAnimationFrame(rafId);
      editor.unregisterPlugin(BubbleMenu.options.pluginKey);
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
const NODE_PARENT_WITHOUT_MENU = ['topicTitle'];

/**
 * Prepare Menu Content based on rules
 *
 * @param editor
 * @returns
 */
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

  if ([Table.name, TableRow.name, TableHeader.name, TableCell.name].includes(selection.$from.parent.type.name)) {
    return (
      <>
        <button onclick={() => editor.chain().focus().addColumnBefore().run()}>addColumnBefore</button>
        <button onclick={() => editor.chain().focus().addColumnAfter().run()}>addColumnAfter</button>
        <button onclick={() => editor.chain().focus().deleteColumn().run()}>deleteColumn</button>
        <button onclick={() => editor.chain().focus().addRowBefore().run()}>addRowBefore</button>
        <button onclick={() => editor.chain().focus().addRowAfter().run()}>addRowAfter</button>
        <button onclick={() => editor.chain().focus().deleteRow().run()}>deleteRow</button>
        <button onclick={() => editor.chain().focus().deleteTable().run()}>deleteTable</button>
        <button onclick={() => editor.chain().focus().mergeCells().run()}>mergeCells</button>
        <button onclick={() => editor.chain().focus().splitCell().run()}>splitCell</button>
        <button onclick={() => editor.chain().focus().toggleHeaderColumn().run()}>toggleHeaderColumn</button>
        <button onclick={() => editor.chain().focus().toggleHeaderRow().run()}>toggleHeaderRow</button>
        <button onclick={() => editor.chain().focus().toggleHeaderCell().run()}>toggleHeaderCell</button>
        <button onclick={() => editor.chain().focus().mergeOrSplit().run()}>mergeOrSplit</button>
        <button onclick={() => editor.chain().focus().setCellAttribute('colspan', 2).run()}>setCellAttribute</button>
        <button onclick={() => editor.chain().focus().fixTables().run()}>fixTables</button>
        <button onclick={() => editor.chain().focus().goToNextCell().run()}>goToNextCell</button>
        <button onclick={() => editor.chain().focus().goToPreviousCell().run()}>goToPreviousCell</button>
      </>
    );
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
      <button onclick={() => editor.chain().focus().toggleAside().run()} class={editor.isActive('aside') ? 'is-active' : ''}>
        aside
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
      <button
        onclick={() => editor.chain().focus().toggleHljsCodeBlock().run()}
        class={editor.isActive('hljsCodeBlock') ? 'is-active' : ''}
      >
        {'<>'}
      </button>
    </>
  );
}
