import { Node, mergeAttributes } from '@tiptap/core'
import { Fragment } from 'prosemirror-model';

export interface RowNumberMarkOptions {
  HTMLAttributes: Record<string, any>,
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    rowNumber: {
      /**
       * Toggle
       */
       setRowNumber: () => ReturnType,
    }
  }
}

export interface RowNumberOptions {
  HTMLAttributes: Record<string, any>,
}

export const RowNumber = Node.create<RowNumberOptions>({
  name: 'rowNumber',

  // priority: 1000,

  defaultOptions: {
    HTMLAttributes: {},
  },

  group: 'block',

  content: 'inline*',

  marks: 'hljsMark',

  code: true,

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
        tag: 'div',
        preserveWhitespace: 'full',
        attrs: {
          'class': 'l'
        },
        // getAttrs(){
        //   debugger
        //   return {
        //     'class': 'l'
        //   }
        // },
        // getContent(p, schema){
        //   debugger
        //   const textNode: Fragment<any> = Fragment.from(schema.text(' '));
        //   return textNode;
        // }
      },
    ]
  },

  renderHTML({ HTMLAttributes, node }) {
    console.log(1111, HTMLAttributes);
    return ['div', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },

  addCommands() {
    return {
      setParagraph: () => ({ commands }) => {
        return commands.setRowNumber()
      },
    }
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Alt-l': () => this.editor.commands.setRowNumber(),
    }
  },
})
