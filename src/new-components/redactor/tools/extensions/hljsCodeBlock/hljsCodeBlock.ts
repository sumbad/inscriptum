import { Mark, mergeAttributes } from '@tiptap/core';
import { CodeBlock, CodeBlockOptions } from '@tiptap/extension-code-block';
import { Mark as ProseMirrorMark } from 'prosemirror-model';
import { Plugin, PluginKey } from 'prosemirror-state';
import { Commands } from '@tiptap/core/dist/packages/core/src/extensions';

import hljs from 'highlight.js/lib/core';
// Languages import
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import sql from 'highlight.js/lib/languages/sql';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import yaml from 'highlight.js/lib/languages/yaml';
import generateJSON, { HljsMark, RowNumber } from './codeBlockNode';
import { DOMParser, DOMSerializer, Node as ProsemirrorNode, ResolvedPos, Slice, Schema, Fragment } from 'prosemirror-model';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('yaml', yaml);

const HLJS_LANGUAGES = ['javascript', 'typescript', 'sql', 'xml', 'css', 'bash', 'yaml'];

interface HljsCodeBlockOptions extends CodeBlockOptions {
  codeText: string;
}

export const HljsCodeBlock = CodeBlock.extend<HljsCodeBlockOptions>({
  name: 'hljsCodeBlock',
  content: 'rowNumber+',
  code: true,

  parseHTML() {
    console.log(4444);

    return [
      {
        preserveWhitespace: 'full',
        tag: 'pre',
      },
    ];
  },

  renderText({ node }) {
    debugger;
    return node.textContent;
  },

  renderHTML({ HTMLAttributes }) {
    return ['pre', this.options.HTMLAttributes, ['code', HTMLAttributes, 0]];
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const container = document.createElement('pre');
      const domCodeEl = document.createElement('code');
      container.appendChild(domCodeEl);

      return {
        dom: container,
        contentDOM: domCodeEl,
        update: (updatedNode, decorations) => {
          let text = '';

          updatedNode.content.forEach((c, point) => {
            text += c.textContent;
            // debugger
            if (point + c.nodeSize < updatedNode.nodeSize - 2) {
              text += '\n';
            }
          });

          const hljsResult = hljs.highlightAuto(text ?? '', HLJS_LANGUAGES);
          const codeLineList = hljsResult.value.split('\n');

          const textNodes: ProsemirrorNode<any>[] = [];

          for (const line of codeLineList) {
            const res = generateJSON(line, [Document, Text, RowNumber, HljsMark]);

            const row: {
              attrs: Record<string, unknown>;
              content?: {
                text: string;
                marks?: {
                  type: string;
                  attrs: Record<string, unknown>;
                }[];
              }[];
            } = res.content[0];
            const rowContent: ProsemirrorNode<any>[] = [];

            for (const textObj of row.content || []) {
              rowContent.push(
                editor.schema.text(
                  textObj.text,
                  textObj.marks?.map((m) => editor.schema.mark(m.type, m.attrs))
                )
              );
            }

            textNodes.push(editor.schema.node('rowNumber', row.attrs, rowContent));
          }

          const newFragment = Fragment.fromArray(textNodes);

          // debugger;

          updatedNode.content = newFragment;
        },
        // ignoreMutation: (p) => {
        //   debugger;
        // },
      };
    };
  },
});
