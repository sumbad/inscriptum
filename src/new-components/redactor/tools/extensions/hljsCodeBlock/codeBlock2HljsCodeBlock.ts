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
    return ({ editor, node, getPos }) => {
      const firstChild = node.content.firstChild;

      if (node.content.childCount === 1 && firstChild != null && typeof getPos === 'function') {
        const codeNodeJson = generateHljsNodeJson(firstChild.text || '');
        const newNode = editor.schema.nodeFromJSON(codeNodeJson);

        editor.view.dispatch(
          editor.view.state.tr //
            .deleteRange(getPos(), getPos() + node.nodeSize + 1)
            .insert(getPos(), newNode)
        );

        return {
          ignoreMutation: true,
          update: false,
        };
      } else {
        const container = document.createElement('pre');
        const domCodeEl = document.createElement('code');
        container.appendChild(domCodeEl);

        return {
          dom: container,
          contentDOM: domCodeEl,
        };
      }
    };
  },
});
