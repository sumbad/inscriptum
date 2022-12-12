import { EG, p } from '@web-companions/gfc';
import { render } from 'lit-html2';
import { BubbleMenuPlugin, BubbleMenuPluginProps, BubbleMenu } from '@tiptap/extension-bubble-menu';
import { Editor } from '@tiptap/core';
import { Props as TippyProps } from 'tippy.js';
import { Transaction, NodeSelection, TextSelection } from 'prosemirror-state';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';
import { css } from '@web-companions/h';
import { createRef, ref } from 'lit-html2/directives/ref.js';

export type BubbleMenuProps = Omit<BubbleMenuPluginProps, 'element'> & {
  className?: string;
};

/**
 * NOTE: Shadow Dom:
 * https://github.com/atomiks/tippyjs/pull/915
 */
export const bubbleMenuElement = EG<Partial<BubbleMenuProps> & { editor: BubbleMenuProps['editor'] }>({
  props: {
    editor: p.req<Editor>(),
    className: p.opt<string>(),
    tippyOptions: p.opt<Partial<TippyProps>>(),
    pluginKey: p.opt<string>(),
    shouldShow: p.opt<BubbleMenuProps['shouldShow']>(),
  },
})(function* (params) {
  const element = createRef<HTMLDivElement>();
  const pluginKey = params.pluginKey ?? BubbleMenu.options.pluginKey;
  const transaction$ = new Subject<void>();

  let rafId = 0;
  let menuContent = null;
  let editor = params.editor;

  const updateEditorState = ({ transaction }: { editor: Editor; transaction: Transaction }) => {
    if (transaction.steps.length > 0) {
      menuContent = prepareMenuContent(editor);
      this.next();
    } else if (transaction.selection.empty) {
      menuContent = null;
      this.next();
    } else {
      transaction$.next();
    }
  };

  const updateParamsCb = () => {
    console.log('useEffect bubbleMenuElement');

    cancelAnimationFrame(rafId);

    rafId = requestAnimationFrame(() => {
      if (element.value != null) {
        editor.registerPlugin(
          BubbleMenuPlugin({
            editor,
            pluginKey,
            element: element.value,
            shouldShow: params.shouldShow!,
            // tippyOptions,
            // tippyOptions: {
            //   onShow
            // }
          })
        );
      }
    });

    editor.on('transaction', updateEditorState);

    transaction$.pipe(debounceTime(700)).subscribe(() => {
      menuContent = prepareMenuContent(editor);

      this.next();
    });
  };

  try {
    const state = params;

    updateParamsCb();

    while (true) {
      if (!Object.is(state, params)) {
        updateParamsCb();
      }

      params = yield render(
        <div
          ref={ref(element)}
          class={params.className}
          style={css`
            visibility: 'hidden';
          `}
        >
          {menuContent}
        </div>,
        this
      );
    }
  } finally {
    console.log('DESTROY bubbleMenuElement');
    transaction$.unsubscribe();
    editor.off('transaction', updateEditorState);
    cancelAnimationFrame(rafId);
    editor.unregisterPlugin(pluginKey);
  }
});

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
    if (selection.node.type.name === 'figure') {
      return (
        <>
          <textarea
            value={(editor.state.selection as NodeSelection).node.attrs.figure.style}
            onchange={(e) => {
              const value = (e.currentTarget as HTMLTextAreaElement).value;
              editor.chain().focus().changeFigure({ figureStyle: value }).run();
            }}
          ></textarea>
        </>
      );
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
        {'</>'}
      </button>
      <button onclick={() => editor.chain().focus().toggleCode().run()} class={editor.isActive('code') ? 'is-active' : ''}>
        {'{}'}
      </button>

      <button onclick={() => editor.chain().focus().toggleSubscript().run()} class={editor.isActive('subscript') ? 'is-active' : ''}>
        <span
          style={css`
            vertical-align: sub;
            font-size: smaller;
          `}
        >
          s
        </span>
      </button>
      <button onclick={() => editor.chain().focus().toggleSuperscript().run()} class={editor.isActive('superscript') ? 'is-active' : ''}>
        <span
          style={css`
            vertical-align: super;
            font-size: smaller;
          `}
        >
          s
        </span>
      </button>
    </>
  );
}
