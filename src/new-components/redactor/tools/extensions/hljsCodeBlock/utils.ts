import Text from '@tiptap/extension-text';
import { generateNodeByDOM } from 'utils/tiptap.tools';
import { StubHljsCodeBlock } from './stubHljsCodeBlock';
import { HljsMark } from './hljsMark';
import { HljsCodeBlockRow } from './hljsCodeBlockRow';

import { TextSelection } from 'prosemirror-state';
import { InputRule } from 'prosemirror-inputrules';
import { NodeType, Node as ProsemirrorNode } from 'prosemirror-model';

import hljs from 'highlight.js/lib/core';
// Languages import
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import sql from 'highlight.js/lib/languages/sql';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import yaml from 'highlight.js/lib/languages/yaml';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('yaml', yaml);

const HLJS_LANGUAGES = ['javascript', 'typescript', 'sql', 'xml', 'css', 'bash', 'yaml'];

export function generateHljsNodeJson(codeText: string) {
  const hljsResult = hljs.highlightAuto(codeText, HLJS_LANGUAGES);
  const codeLineList = hljsResult.value.split('\n');

  let codeRows: string = '';
  const stubSchema = [StubHljsCodeBlock, Text, HljsCodeBlockRow, HljsMark];
  const stubHljsCodeBlock = document.createElement('pre');

  for (const line of codeLineList) {
    codeRows += `<div class="l">${line || ''}</div>`;
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
 * @param regexp
 * @param type
 * @param getAttributes
 * @returns
 */
export function hljsNodeInputRule(regexp: RegExp, type: NodeType, getAttributes?: (match: any) => any): InputRule {
  return new InputRule(regexp, (state, match, start, end) => {
    const attributes = getAttributes instanceof Function ? getAttributes(match) : getAttributes;
    const { tr } = state;

    if (match[0]) {
      tr.replaceWith(start - 1, end, type.create(attributes, state.schema.node('hljsCodeBlockRow')));
      tr.setSelection(TextSelection.create(tr.doc, end - 1));
    }

    return tr;
  });
}

export function getHljsBlockContentAsText(node: ProsemirrorNode<any>) {
  let codeText = '';

  node.content.forEach((c, point) => {
    codeText += c.textContent;
    if (point + c.nodeSize < node.nodeSize - 2) {
      codeText += '\n';
    }
  });

  return codeText;
}
