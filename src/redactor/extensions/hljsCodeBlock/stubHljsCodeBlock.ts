import { CodeBlock, CodeBlockOptions } from '@tiptap/extension-code-block';

interface HljsCodeBlockOptions extends CodeBlockOptions {
  codeText: string;
}

export const StubHljsCodeBlock = CodeBlock.extend<HljsCodeBlockOptions>({
  name: 'hljsCodeBlock',
  content: 'hljsCodeBlockRow+',
  topNode: true,

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
});
