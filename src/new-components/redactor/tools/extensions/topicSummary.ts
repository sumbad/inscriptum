import { Command, Node, mergeAttributes } from '@tiptap/core'

export interface TopicSummaryOptions {
  HTMLAttributes: Record<string, any>,
}

export const TOPIC_SUMMARY_NODE_NAME = 'topicSummary';

export const TopicSummary = Node.create<TopicSummaryOptions>({
  name: TOPIC_SUMMARY_NODE_NAME,

  group: 'topicDoc',

  content: 'inline*',

  // priority: 1000,

  // defaultOptions: {
  //   HTMLAttributes: {},
  // },

  addAttributes() {
    return {
      'data-placeholder': {
        default: 'Summary of the text',
      },
      'data-label': {
        default: 'Summary',
      },
      'role': {
        default: 'definition',
      },
    };
  },



  parseHTML() {
    return [
      { tag: 'p' },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['p', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },

})
