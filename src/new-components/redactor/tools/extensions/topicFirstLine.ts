import { Node, mergeAttributes } from '@tiptap/core';

export interface TopicFirstLineOptions {
  HTMLAttributes: Record<string, any>;
}

export const TopicFirstLine = Node.create<TopicFirstLineOptions>({
  name: 'topicFirstLine',

  group: 'topicDoc',

  content: 'inline*',

  addAttributes() {
    return {
      'data-placeholder': {
        default: 'Take a notes',
      },
    };
  },

  parseHTML() {
    return [{ tag: 'p' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['p', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
});
