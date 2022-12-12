import { Node } from '@tiptap/core';
import { Plugin, PluginKey } from 'prosemirror-state';
import { DecorationSet, Decoration } from 'prosemirror-view';

export const TopicDoc = Node.create({
  name: 'topicDoc',
  topNode: true,
  content: 'topicTitle topicSummary topicFirstLine block*',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('TopicDoc Decorations'),
        props: {
          decorations: ({ doc, selection }) => {
            const decorations: Decoration[] = [];
            const topicTitleNode = doc.content.child(0);
            const topicSummaryNode = doc.content.child(1);
            const topicFirstLine = doc.content.child(2);

            if (topicTitleNode.content.size === 0) {
              decorations.push(
                Decoration.node(0, topicTitleNode.nodeSize, {
                  class: `empty`,
                })
              );
            } else if (selection.to <= topicTitleNode.nodeSize + topicSummaryNode.nodeSize) {
              decorations.push(
                Decoration.node(0, topicTitleNode.nodeSize, {
                  class: `focused`,
                })
              );
            }

            if (topicSummaryNode.content.size === 0) {
              decorations.push(
                Decoration.node(topicTitleNode.nodeSize, topicTitleNode.nodeSize + topicSummaryNode.nodeSize, {
                  class: `empty`,
                })
              );
            } else if (selection.to <= topicTitleNode.nodeSize + topicSummaryNode.nodeSize) {
              decorations.push(
                Decoration.node(topicTitleNode.nodeSize, topicTitleNode.nodeSize + topicSummaryNode.nodeSize, {
                  class: `focused`,
                })
              );
            }
            
            if(doc.content.lastChild === topicFirstLine && topicFirstLine.content.size === 0) {
              decorations.push(
                Decoration.node(topicTitleNode.nodeSize + topicSummaryNode.nodeSize, topicTitleNode.nodeSize + topicSummaryNode.nodeSize + topicFirstLine.nodeSize, {
                  class: `empty`,
                })
              );              
            }
            

            return DecorationSet.create(doc, decorations);
          },
        },
      }),
    ];
  },
});
