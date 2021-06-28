import { getSchema, Extensions } from '@tiptap/core';
import { Schema, DOMParser, Node as ProsemirrorNode } from 'prosemirror-model'


/**
 * Generate a new ProsemirrorNode from HTML element by schema
 * 
 * @param dom - HTML Element
 * @param extensions - schema extensions
 * @returns ProsemirrorNode
 */
export function generateNodeByDOM(dom: HTMLElement, extensions: Extensions): ProsemirrorNode<Schema<any, any>> {
  const schema = getSchema(extensions);

  const parser = DOMParser.fromSchema(schema);
  return parser.parse(dom, { preserveWhitespace: 'full' });
}
