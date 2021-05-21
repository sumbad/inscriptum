import { Node, mergeAttributes } from '@tiptap/core';

export interface TopicTitleOptions {
  HTMLAttributes: Record<string, any>;
}

export const TOPIC_TITLE_NODE_NAME = 'topicTitle';

export const TopicTitle = Node.create<TopicTitleOptions>({
  name: TOPIC_TITLE_NODE_NAME,

  content: 'inline*',

  group: 'topicDoc',

  defining: true,
  selectable: true,

  addAttributes() {
    return {
      'data-placeholder': {
        default: 'Title',
      },
      'data-label': {
        default: 'Title',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'h1',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['h1', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
});
