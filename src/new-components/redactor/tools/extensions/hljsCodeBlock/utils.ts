import Text from '@tiptap/extension-text';
import { generateNodeByDOM } from 'utils/tiptap.tools';
import { StubHljsCodeBlock } from './stubHljsCodeBlock';
import { HljsMark } from './hljsMark';
import { HljsCodeBlockRow } from './hljsCodeBlockRow';

import { TextSelection } from 'prosemirror-state';
import { InputRule } from '@tiptap/core';
import { NodeType, Node as ProsemirrorNode } from 'prosemirror-model';

import hljs from 'highlight.js/lib/core';
// Languages import
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import sql from 'highlight.js/lib/languages/sql';
import graphql from 'highlight.js/lib/languages/graphql';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import yaml from 'highlight.js/lib/languages/yaml';
import plaintext from 'highlight.js/lib/languages/plaintext';
import { HighlightResult } from 'highlight.js';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml/html', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('graphql', graphql);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('plaintext', plaintext);

export const HLJS_LANGUAGES = ['javascript', 'typescript', 'xml/html', 'css', 'sql', 'graphql', 'bash', 'yaml', 'plaintext'];

export function generateHljsNodeJson(codeText: string, language?: string) {
  let hljsResult: HighlightResult;

  if (typeof language === 'string') {
    hljsResult = hljs.highlight(codeText, { language });
  } else {
    hljsResult = hljs.highlightAuto(codeText, HLJS_LANGUAGES);
  }

  const codeLineList = hljsResult.value.split('\n');

  let codeRows: string = '';
  const stubSchema = [StubHljsCodeBlock, Text, HljsCodeBlockRow, HljsMark];
  const stubHljsCodeBlock = document.createElement('pre');

  const openedTagsReg = /<\w+/gi;
  const closedTagsReg = /\/\w*>/gi;

  let cachedLines: {
    lines: string[];
    openedTagsCount: number;
    closedTagsCount: number;
  } | null = null;
  let openedTagsCount = 0;
  let closedTagsCount = 0;
  let lines: string[] = [];

  for (let codeLine of codeLineList) {
    codeLine = codeLine || '';
    // If there is something in cached lines use it
    if (cachedLines != null) {
      openedTagsCount = cachedLines.openedTagsCount;
      closedTagsCount = cachedLines.closedTagsCount;
      cachedLines.lines.push(codeLine);
    } else {
      openedTagsCount = 0;
      closedTagsCount = 0;
      lines = [codeLine];
    }

    // Count open tags in the line
    openedTagsCount += codeLine.match(openedTagsReg)?.length ?? 0;
    // Count close tags in the line
    closedTagsCount += codeLine.match(closedTagsReg)?.length ?? 0;

    // If count of open tags is gether than closest, then cache current line and opened and closed counts
    if (openedTagsCount > closedTagsCount) {
      cachedLines = {
        openedTagsCount,
        closedTagsCount,
        lines,
      };
    } else {
      // Clear the cache and create a new code row
      const line = lines.join('\n');
      const openTag = line.match(/<[^<>/]*?>/i)?.[0];
      const closeTag = line.match(/<\/[^<>/]*?>/i)?.[0];

      if (cachedLines != null && openTag != null && closeTag != null) {
        lines.forEach((it, i) => {
          if (i === 0) {
            codeRows += `<div class="l">${it}${closeTag}</div>`;
          } else if (i === lines.length - 1) {
            codeRows += `<div class="l">${openTag}${it}</div>`;
          } else {
            codeRows += `<div class="l">${openTag}${it}${closeTag}</div>`;
          }
        });
      } else {
        codeRows += `<div class="l">${line}</div>`;
      }

      cachedLines = null;
    }
  }

  stubHljsCodeBlock.innerHTML = codeRows;
  const codeNode = generateNodeByDOM(stubHljsCodeBlock, stubSchema);

  stubHljsCodeBlock.remove();
  stubSchema.length = 0;

  return codeNode.toJSON();
}

/**
 * Create new hljsCodeBlock with one row
 *
 * TODO: PR with content option for nodeInputRule from '@tiptap/core';
 *
 * @param regexp
 * @param type
 * @param getAttributes
 * @returns
 */
export function hljsNodeInputRule(regexp: RegExp, type: NodeType, getAttributes?: (match: any) => any): InputRule {
  return new InputRule({
    find: regexp,
    handler: (props) => {
      const attributes = getAttributes instanceof Function ? getAttributes(props.match) : getAttributes;
      const { tr } = props.state;

      if (props.match[0]) {
        tr.replaceWith(props.range.from - 1, props.range.to, type.create(attributes, props.state.schema.node('hljsCodeBlockRow')));
        tr.setSelection(TextSelection.create(tr.doc, props.range.to - 1));
      }

      // return tr;
    },
  });
}

export function getHljsBlockContentAsText(node: ProsemirrorNode) {
  let codeText = '';

  node.content.forEach((c, point) => {
    codeText += c.textContent;
    if (point + c.nodeSize < node.nodeSize - 2) {
      codeText += '\n';
    }
  });

  return codeText;
}
