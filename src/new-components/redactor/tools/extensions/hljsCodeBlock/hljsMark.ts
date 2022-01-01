import { Mark, mergeAttributes } from '@tiptap/core';

export interface HljsMarkOptions {
  HTMLAttributes: Record<string, any>;
}

export const HljsMark = Mark.create<HljsMarkOptions>({
  name: 'hljsMark',
  spanning: false,

  group: 'hljsCodeBlock hljsCodeBlockRow',

  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },

  addAttributes() {
    return {
      class: {
        default: undefined,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span',
        preserveWhitespace: true,
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
});
