import { Extension, getHTMLFromFragment, Node } from '@tiptap/core';
import CodeBlock, { CodeBlockOptions } from '@tiptap/extension-code-block';
import { HljsMark } from './hljsMark';
import { RowNumber } from './rowNumberBlock';
import { Fragment } from 'prosemirror-model';
import { Plugin, PluginKey } from 'prosemirror-state';
import { DecorationSet, Decoration } from 'prosemirror-view';
import { DOMParser, DOMSerializer, Node as ProsemirrorNode, ResolvedPos, Slice, Schema, Mark } from 'prosemirror-model';
// import { generateJSON } from '@tiptap/html';
import Document from '@tiptap/extension-document';

import hljs from 'highlight.js/lib/core';
// Languages import
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import sql from 'highlight.js/lib/languages/sql';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import yaml from 'highlight.js/lib/languages/yaml';

// import { DOMParser } from 'prosemirror-model'
import { getSchema, Extensions } from '@tiptap/core';
// @ts-ignore
import { parseHTML } from 'hostic-dom';

export default function generateJSON(html: string, extensions: Extensions): Record<string, any> {
  // debugger;
  const schema = getSchema(extensions);
  const dom: any = parseHTML(html);
  // const dom = document.createElement('div');

  // dom.style.whiteSpace = 'pre';

  // dom.innerHTML = '  id';

  // const mmmm = dom.innerText;

  const a = DOMParser.fromSchema(schema);
  const b = a.parse(dom, { preserveWhitespace: "full" });
  const c = b.toJSON();

  return c;
}

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('yaml', yaml);

const HLJS_LANGUAGES = ['javascript', 'typescript', 'sql', 'xml', 'css', 'bash', 'yaml'];

export const Text = Node.create({
  name: 'text',
  group: 'inline',
  code: true,
  inline: true,

  // addProseMirrorPlugins() {
  //   return [
  //     new Plugin({
  //       key: new PluginKey('Text'),
  //       props: {
  //         decorations: ({ doc, selection }) => {
  //           debugger;
  //           const decorations: Decoration[] = [];
  //           const topicTitleNode = doc.content.child(0);
  //           const topicSummaryNode = doc.content.child(1);
  //           const topicFirstLine = doc.content.child(2);

  //           if (topicTitleNode.content.size === 0) {
  //             decorations.push(
  //               Decoration.node(0, topicTitleNode.nodeSize, {
  //                 class: `empty`,
  //               })
  //             );
  //           } else if (selection.to <= topicTitleNode.nodeSize + topicSummaryNode.nodeSize) {
  //             decorations.push(
  //               Decoration.node(0, topicTitleNode.nodeSize, {
  //                 class: `focused`,
  //               })
  //             );
  //           }

  //           if (topicSummaryNode.content.size === 0) {
  //             decorations.push(
  //               Decoration.node(topicTitleNode.nodeSize, topicTitleNode.nodeSize + topicSummaryNode.nodeSize, {
  //                 class: `empty`,
  //               })
  //             );
  //           } else if (selection.to <= topicTitleNode.nodeSize + topicSummaryNode.nodeSize) {
  //             decorations.push(
  //               Decoration.node(topicTitleNode.nodeSize, topicTitleNode.nodeSize + topicSummaryNode.nodeSize, {
  //                 class: `focused`,
  //               })
  //             );
  //           }

  //           if(doc.content.lastChild === topicFirstLine && topicFirstLine.content.size === 0) {
  //             decorations.push(
  //               Decoration.node(topicTitleNode.nodeSize + topicSummaryNode.nodeSize, topicTitleNode.nodeSize + topicSummaryNode.nodeSize + topicFirstLine.nodeSize, {
  //                 class: `empty`,
  //               })
  //             );
  //           }

  //           return DecorationSet.create(doc, decorations);
  //         },
  //         transformPastedHTML: (h) => {
  //           debugger
  //           console.log(h);
  //           return h;
  //         },
  //         domParser: {
  //           parse: (d, o) =>{
  //             debugger
  //             return this.editor.schema.text(' ');
  //           },
  //           rules: [],
  //           schema: null,
  //           parseSlice: ()=>{return {} as any}
  //         }
  //       }
  //     }),
  //   ];
  // },

  // parseHTML() {
  //   this.parent
  //   debugger
  //   return [
  //     {
  //       preserveWhitespace: true,
  //       getAttrs(p){
  //         debugger
  //         return {}
  //       },
  //       getContent(p, schema){
  //         debugger

  //         const textNode: Fragment<any> = Fragment.from(schema.text(' '));
  //         return textNode;
  //         // return Fragment.from(p);
  //       },
  //       tag: ''
  //     }
  //   ]
  // }
});

interface CodeBlockNodeOptions extends CodeBlockOptions {
  wasReformatted: boolean;
}

const CodeBlockNode = CodeBlock.extend<CodeBlockNodeOptions>({
  defaultOptions: {
    ...CodeBlock.options,
    wasReformatted: false,
  },

  parseHTML() {
    console.log(111, this);

    return [
      {
        // contentElement(p) {
        //   console.log(2222, p);
        //   return p;
        // },
        tag: 'pre',
        preserveWhitespace: 'full',
        // getContent(pre: HTMLPreElement, schema) {
        //   console.log(pre, 11111);

        //   const textNode: Fragment<any> = Fragment.from(schema.text(pre.innerHTML));
        //   return textNode;
        // },
      },
    ];
  },

  // addProseMirrorPlugins() {
  //   return [
  //     new Plugin({
  //       key: new PluginKey('RowNumberMark'),
  //       props: {
  //         domParser(a) {
  //           return a;
  //         }
  //       }
  //     }),
  //   ];
  // },

  // parseHTML() {
  //   return [
  //     {
  //       tag: 'figure',
  //       contentElement: 'figcaption',
  //       getAttrs: (node: HTMLDivElement) => {
  //         const img = node.querySelector('img');

  //         return {
  //           src: img?.getAttribute('src'),
  //           alt: img?.getAttribute('alt'),
  //           title: img?.getAttribute('title'),
  //         };
  //       },
  //     },
  //     {
  //       tag: 'img[src]',
  //       preserveWhitespace: true,
  //       getContent(img: HTMLImageElement, schema) {
  //         const textNode: Fragment<any> = Fragment.from(schema.text(img.alt.length > 0 ? img.alt : ' '));
  //         return textNode;
  //       },
  //       getAttrs: (node: HTMLDivElement) => {
  //         return {
  //           src: node.getAttribute('src'),
  //         };
  //       },
  //     },
  //   ];
  // },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const container = document.createElement('pre');
      const domCodeEl = document.createElement('code');

      const firstChild = node.content.firstChild;

      if (!this.options.wasReformatted && node.content.childCount === 1 && firstChild != null && typeof getPos === 'function') {
        const textNodes: ProsemirrorNode<any>[] = [];

        const hljsResult = hljs.highlightAuto(firstChild.text ?? '', HLJS_LANGUAGES);
        const codeLineList = hljsResult.value.split('\n');

        // for (let i = 0; i < codeLineList.length; i++) {
        //   codeLines += `<div class="l">${codeLineList[i] || ' '}</div>`;
        //   if (i < codeLineList.length - 1) {
        //     codeLines += '\n';
        //   }
        // }

        // let newFragment = Fragment.empty;
        let i = 0;
        // for (const line of (firstChild.text || '').split('\n')) {
        for (const line of codeLineList) {
          // codeLines += `<div class="l">${line || ' '}</div>`;

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

          // debugger;
          for (const textObj of row.content || []) {
            rowContent.push(
              editor.schema.text(
                textObj.text,
                textObj.marks?.map((m) => editor.schema.mark(m.type, m.attrs))
              )
            );
          }

          // const json = editor.schema.text(line).toJSON();

          textNodes.push(editor.schema.node('rowNumber', row.attrs, rowContent));

          // textNodes.push(editor.schema.node('rowNumber', {}, editor.schema.text(line || ' ' /*, [editor.schema.mark('rowNumberMark')]*/)));

          // newFragment = newFragment.append(Fragment.from(editor.schema.text(line || ' ', [editor.schema.mark('rowNumberMark')])));
          // newFragment = newFragment.replaceChild(i, editor.schema.text(line || ' '));

          // node.content[i] = editor.schema.text(line || ' ');
          //(i, editor.schema.text(line || ' '));

          // node.content.replaceChild(i, editor.schema.node('rowNumber', {}, editor.schema.text(line || ' '/*, [editor.schema.mark('rowNumberMark')]*/)))

          i++;
        }

        // const textNode: Fragment<any> = Fragment.from(schema.text(img.alt.length > 0 ? img.alt : ' '));

        // const newFragment = Fragment.from(textNodes);

        // newFragment.append

        // debugger;
        const newFragment = Fragment.fromArray(textNodes);
        console.log(newFragment);
        console.log(getHTMLFromFragment(textNodes[0], editor.schema));

        this.options.wasReformatted = true;

        const a = getPos();

        // editor.view.dispatch(
        //   editor.view.state.tr.replaceWith(
        //     getPos() + 1,
        //     firstChild.nodeSize,
        //     // node
        //     newFragment
        //     // [editor.schema.text(domCodeEl.textContent || ''), ]
        //   )
        // );

        // node.content.replaceChild(0, textNodes[0]);
        // for (let i = 1; i < textNodes.length; i++) {
        //   node.content.append(Fragment.from(textNodes[i]));
        // }

        // node.content = newFragment;

        // editor.view.dispatch(editor.view.state.tr.delete(getPos(), getPos() + firstChild.nodeSize + 1));

        const newNode = editor.schema.node('hljsCodeBlock', node.attrs, newFragment); //node.copy(newFragment);
        editor.view.dispatch(
          editor.view.state.tr.replaceWith(getPos(), getPos() + firstChild.nodeSize + 1, newNode)
          // .delete(getPos(), getPos() + firstChild.nodeSize + 1) //
          // .insert(getPos(), newNode)
        );

        // node = newNode;

        // debugger;
        // let {state, transactions} = editor.view.state.applyTransaction(
        //   editor.view.state.tr
        //   .delete(getPos(), getPos() + firstChild.nodeSize + 1) //
        //   .insert(getPos(), newNode)
        // );

        // editor.view.updateState(state)

        // return {};

        // editor.view.updateState(editor.state);

        // node.content.replaceChild(
        //       getPos() + 1,
        //       getPos() + (firstChild.nodeSize -1 ),
        //       newFragment
        // );
      }

      // debugger
      // if (firstChild != null && firstChild.isText) {
      //   console.log(firstChild.text);

      //   let codeLines = '';

      //   for (const line of (firstChild.text || '').split('\n')) {
      //     codeLines += `<div class="l">${line || ' '}</div>`;
      //   }

      //   // const hljsResult = hljs.highlightAuto(firstChild.text ?? '', HLJS_LANGUAGES);
      //   // const codeLineList = hljsResult.value.split('\n');

      //   // for (let i = 0; i < codeLineList.length; i++) {
      //   //   codeLines += `<div class="l">${codeLineList[i] || ' '}</div>`;
      //   //   if (i < codeLineList.length - 1) {
      //   //     codeLines += '\n';
      //   //   }
      //   // }

      //   // cachedCodeText = codeText;
      //   domCodeEl.innerHTML = codeLines; //`<code class="hljs">${codeLines}</code>`;
      // }

      container.appendChild(domCodeEl);

      // console.log(node);

      return {
        dom: container,
        contentDOM: domCodeEl,
        // update: (updatedNode) => {
        //   debugger;
        // },
        // ignoreMutation: (p) => {
        //   debugger;
        // },
      };
    };
  },
});

export { HljsMark, RowNumber, CodeBlockNode };
