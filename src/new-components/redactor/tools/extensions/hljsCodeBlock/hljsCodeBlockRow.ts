import { Node, mergeAttributes } from '@tiptap/core';

export interface HljsCodeBlockRowOptions {
  HTMLAttributes: Record<string, any>,
}

export const HljsCodeBlockRow = Node.create<HljsCodeBlockRowOptions>({
  name: 'hljsCodeBlockRow',

  group: 'hljsCodeBlock',

  content: 'inline*',

  marks: 'hljsMark',

  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },

  addAttributes() {
    return {
      class: {
        default: 'l',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div.l',
        preserveWhitespace: 'full',
        attrs: {
          'class': 'l'
        },
      },
    ]
  },

  renderHTML({ HTMLAttributes, node }) {
    return ['div', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },
})
