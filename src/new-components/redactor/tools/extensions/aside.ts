import { Command, Node, mergeAttributes } from '@tiptap/core';

export interface AsideOptions {
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    aside: {
     /**
       * Set a aside node
       */
      setAside: () => ReturnType,
      /**
       * Toggle a aside node
       */
       toggleAside: () => ReturnType,
      /**
       * Unset a aside node
       */
       unsetAside: () => ReturnType,
    }
  }
}

export const Aside = Node.create<AsideOptions>({
  name: 'aside',

  defaultOptions: {
    HTMLAttributes: {},
  },

  content: 'block*',

  group: 'block',

  defining: true,

  parseHTML() {
    return [{ tag: 'aside' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['aside', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setAside:
        () =>
        ({ commands }) => {
          return commands.wrapIn('aside');
        },
      toggleAside:
        () =>
        ({ commands }) => {
          return commands.toggleWrap('aside');
        },
      unsetAside:
        () =>
        ({ commands }) => {
          return commands.lift('aside');
        },
    };
  },
});
