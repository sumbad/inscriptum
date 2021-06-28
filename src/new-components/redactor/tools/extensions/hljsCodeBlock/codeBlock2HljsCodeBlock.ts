import { Node } from '@tiptap/core';
import { generateHljsNodeJson } from './utils';

interface CodeBlockNodeOptions {
  languageClassPrefix: string;
  HTMLAttributes: Record<string, any>;
}

/**
 * This Node needs only for preventing bugs with already existing 'codeBlock'
 */
export const CodeBlock2HljsCodeBlock = Node.create<CodeBlockNodeOptions>({
  name: 'codeBlock',

  defaultOptions: {
    languageClassPrefix: 'language-',
    HTMLAttributes: {},
  },

  content: 'text*',

  marks: '',

  group: 'block',

  code: true,

  defining: true,

  parseHTML() {
    return [
      {
        preserveWhitespace: 'full',
        tag: 'pre',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['pre', this.options.HTMLAttributes, ['code', HTMLAttributes, 0]];
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const container = document.createElement('pre');
      const domCodeEl = document.createElement('code');

      const firstChild = node.content.firstChild;

      if (node.content.childCount === 1 && firstChild != null && typeof getPos === 'function') {
        const codeNodeJson = generateHljsNodeJson(firstChild.text || '');
        const newNode = editor.schema.nodeFromJSON(codeNodeJson);

        editor.view.dispatch(editor.view.state.tr.replaceWith(getPos(), getPos() + firstChild.nodeSize + 1, newNode));
      }

      container.appendChild(domCodeEl);

      return {
        dom: container,
        contentDOM: domCodeEl,
      };
    };
  },
});
