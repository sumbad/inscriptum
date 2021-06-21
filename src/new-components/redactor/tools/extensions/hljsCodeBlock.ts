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
  // name: "hljsCodeBlock",
  // renderHTML(props) {
  //   if(typeof this.options.onRenderHTML === 'function') {
  //     this.options.onRenderHTML(props)
  //   }

  //   return ['a', mergeAttributes(this.options.HTMLAttributes, props.HTMLAttributes), 0];
  // },

  defaultOptions: {
    ...CodeBlock.options,
    codeText: '',
  },

  isolating: true,
  atom: true,
  allowGapCursor: true,
  // code: true,
  selectable: true,

  parseHTML() {
    console.log(4444);

    return [
      {
        tag: 'pre',
        preserveWhitespace: 'full',

        // getAttrs: (node: HTMLDivElement) => {
        //   const code = node.querySelector('code');

        //   // return {
        //   //   src: img?.getAttribute('src'),
        //   //   alt: img?.getAttribute('alt'),
        //   //   title: img?.getAttribute('title'),
        //   // };
        // },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    console.log(333);

    return ['pre', this.options.HTMLAttributes, ['code', HTMLAttributes, 0]];
  },

  // addProseMirrorPlugins() {
  //   return [
  //     new Plugin({
  //       key: new PluginKey('eventHandler'),
  //       props: {
  //         handleKeyDown(v,e){
  //           console.log(v,e);
  //           return true;
  //         }
  //         // handleClick(view, pos, event) { /* … */ },
  //         // handleDoubleClick(view, pos, event) { /* … */ },
  //         // handlePaste(view, event, slice) { /* … */ },
  //         // … and many, many more.
  //         // Here is the full list: https://prosemirror.net/docs/ref/#view.EditorProps
  //       }
  //     })
  //     // new Plugin({
  //     //   key: new PluginKey('TopicDoc Decorations'),
  //     //   props: {
  //     //     decorations: ({ doc, selection }) => {
  //     //       const decorations: Decoration[] = [];
  //     //       const topicTitleNode = doc.content.child(0);
  //     //       const topicSummaryNode = doc.content.child(1);
  //     //       const topicFirstLine = doc.content.child(2);

  //     //       if (topicTitleNode.content.size === 0) {
  //     //         decorations.push(
  //     //           Decoration.node(0, topicTitleNode.nodeSize, {
  //     //             class: `empty`,
  //     //           })
  //     //         );
  //     //       } else if (selection.to <= topicTitleNode.nodeSize + topicSummaryNode.nodeSize) {
  //     //         decorations.push(
  //     //           Decoration.node(0, topicTitleNode.nodeSize, {
  //     //             class: `focused`,
  //     //           })
  //     //         );
  //     //       }

  //     //       if (topicSummaryNode.content.size === 0) {
  //     //         decorations.push(
  //     //           Decoration.node(topicTitleNode.nodeSize, topicTitleNode.nodeSize + topicSummaryNode.nodeSize, {
  //     //             class: `empty`,
  //     //           })
  //     //         );
  //     //       } else if (selection.to <= topicTitleNode.nodeSize + topicSummaryNode.nodeSize) {
  //     //         decorations.push(
  //     //           Decoration.node(topicTitleNode.nodeSize, topicTitleNode.nodeSize + topicSummaryNode.nodeSize, {
  //     //             class: `focused`,
  //     //           })
  //     //         );
  //     //       }

  //     //       if(doc.content.lastChild === topicFirstLine && topicFirstLine.content.size === 0) {
  //     //         decorations.push(
  //     //           Decoration.node(topicTitleNode.nodeSize + topicSummaryNode.nodeSize, topicTitleNode.nodeSize + topicSummaryNode.nodeSize + topicFirstLine.nodeSize, {
  //     //             class: `empty`,
  //     //           })
  //     //         );
  //     //       }

  //     //       return DecorationSet.create(doc, decorations);
  //     //     },
  //     //   },
  //     // }),
  //   ];
  // },

  // addKeyboardShortcuts() {
  //   return {
  //     'Mod-Alt-c': () => this.editor.commands.toggleCodeBlock(),

  //     // remove code block when at start of document or code block is empty
  //     Backspace: () => {
  //       console.log(88888);
  //       return true;

  //       // const { empty, $anchor } = this.editor.state.selection;
  //       // const isAtStart = $anchor.pos === 1;

  //       // if (!empty || $anchor.parent.type.name !== this.name) {
  //       //   return false;
  //       // }

  //       // if (isAtStart || !$anchor.parent.textContent.length) {
  //       //   return this.editor.commands.clearNodes();
  //       // }

  //       // return false;
  //     },
  //   };
  // },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const container = document.createElement('pre');
      const domCodeEl = document.createElement('code');
      container.contentEditable = 'false';
      domCodeEl.contentEditable = 'true';

      const firstChild = node.content.firstChild;

      // debugger
      if (firstChild != null && firstChild.isText) {
        console.log(firstChild.text);

        let codeLines = '';

        const hljsResult = hljs.highlightAuto(firstChild.text ?? '', HLJS_LANGUAGES);
        const codeLineList = hljsResult.value.split('\n');

        for (let i = 0; i < codeLineList.length; i++) {
          codeLines += `<div class="l">${codeLineList[i] || ' '}</div>`;
          if (i < codeLineList.length - 1) {
            codeLines += '\n';
          }
        }

        // cachedCodeText = codeText;
        domCodeEl.innerHTML = codeLines; //`<code class="hljs">${codeLines}</code>`;
      }

      container.appendChild(domCodeEl);

      // let cachedCodeText = domCodeEl.innerText;

      // Callback function to execute when mutations are observed
      // const callback =

      // debugger;
      // Create an observer instance linked to the callback function
      // const observer = new MutationObserver((mutationsList, _observer) => {
      //   // _observer.disconnect();

      //   const codeText = domCodeEl.textContent ?? '';
      //   console.log(22222, mutationsList);

      //   // debugger;
      //   // if (cachedCodeText !== codeText) {
      //   //   if (codeText.trim().length > 0 || (cachedCodeText == null && f)) {
      //   //     let codeLines = '';
      //   //     const codeLine = hljs.highlightAuto(codeText).value.split('\n');

      //   //     console.log(22222, codeLine);

      //   //     for (let i = 0; i < codeLine.length - 1; i++) {
      //   //       codeLines += `<span class="l">${codeLine[i] || ' '}</span>\n`;
      //   //     }
      //   //     codeLines += `<span class="l">${codeLine[codeLine.length - 1]}</span>`;

      //   //     cachedCodeText = codeText;
      //   //     domCodeEl.innerHTML = `<code class="hljs">${codeLines}</code>`;
      //   //   }
      //   //   cachedCodeText = codeText;
      //   // }
      // });

      // // Start observing the target node for configured mutations
      // observer.observe(domCodeEl, { attributes: true, childList: true, subtree: true });

      // domCodeEl.addEventListener('change', (e) => {
      //   console.log('CHANGE', e);
      // });

      console.log(node);

      return {
        dom: container,
        // contentDOM: domCodeEl,
        setSelection: (anchor: number, head: number, root: Document) => {
          console.log('setSelection', anchor, head, root);
        },
        stopEvent(e) {
          // console.log('stopEvent', e);
          return true;
        },
        ignoreMutation: (p) => {
          console.log('ignoreMutation', p);

          if (['characterData', 'childList'].includes(p.type)) {
            debugger
            if (typeof getPos === 'function' && firstChild != null && firstChild.isText && domCodeEl.textContent !== firstChild.text) {
              // editor.schema.text(domCodeEl.textContent ?? '')
              editor.view.dispatch(
                editor.view.state.tr.replaceWith(
                  getPos() + 1,
                  // getPos() + (domCodeEl.textContent?.length || 1),
                  getPos() + (firstChild.nodeSize + 2),
                  editor.schema.text(domCodeEl.textContent || '')
                )
              );
              // return true;

              // editor.commands.focus(getPos() + firstChild.nodeSize);

              // console.log(firstChild.nodeSize, editor.view.domAtPos(firstChild.nodeSize));

              // … and set the focus back to the editor.

              // node.content[0] = editor.schema.text(domCodeEl.textContent ?? '')
              // domCodeEl.textContent;

              // cachedCodeText = codeText;
              // domCodeEl.innerHTML = codeLines; //`<code class="hljs">${codeLines}</code>`;
            }
          }

          // console.log('ignoreMutation', p);

          // const s = window.getSelection();
          // const oRange = s?.getRangeAt(0); //get the text range
          // const oRect = oRange?.getBoundingClientRect() as DOMRect;

          // if (typeof getPos === 'function') {
          //   console.log(getPos());

          //   if (p.type === 'selection') {

          //     // console.log(oRange);
          //     // console.log(this.editor.view.posAtDOM(p.target, 5));
          //     // console.log(p.target.getBoundingClientRect());
          //     // return false;
          //   }

          //   // const asProseMirrorSelection = (doc) => {
          //   //   let offset = getPos() + 1
          //   //   let anchor = this.cm.indexFromPos(this.cm.getCursor("anchor")) + offset
          //   //   let head = this.cm.indexFromPos(this.cm.getCursor("head")) + offset
          //   //   return TextSelection.create(doc, anchor, head)
          //   // }
          // }
          // console.log(oRect);

          // console.log(container.getBoundingClientRect());

          // console.log(`x ${oRect.x - container.getBoundingClientRect().x}`, `y ${oRect.y - container.getBoundingClientRect().y}`);

          // this.editor.commands.setTextSelection(80);

          // if( p.type ===  'attributes' && p.attributeName != null) {
          //   if(['src', 'title', 'alt'].includes(p.attributeName)) {
          //     node.attrs[p.attributeName] = (p.target as HTMLElement).getAttribute(p.attributeName);
          //   }
          return true;
          // }

          // return false;
        },
        // destroy() {
        //   console.log('destroy');
        // },
        update: (updatedNode) => {
          // observer.disconnect();
          console.log(11111, updatedNode);

          const firstChild = updatedNode.content.firstChild;

          // debugger
          if (firstChild != null && firstChild.isText && firstChild.text !== domCodeEl.textContent) {
            console.log(editor.state.selection);

            let codeLines = '';

            // hljs.highlightBlock(domCodeEl)

            const hljsResult = hljs.highlightAuto(firstChild.text ?? '', HLJS_LANGUAGES);
            const codeLineList = hljsResult.value.split('\n');

            for (let i = 0; i < codeLineList.length; i++) {
              codeLines += `<div class="l">${codeLineList[i] || ' '}</div>`;
              if (i < codeLineList.length - 1) {
                codeLines += '\n';
              }
            }


            // domCodeEl.childNodes.forEach((cn: HTMLDivElement, idx)=>{
            //   console.log(cn.innerHTML, codeLineList[idx], cn.innerHTML !== codeLineList[idx]);
            //   if(cn.innerHTML !== codeLineList[idx]) {
            //     cn.innerHTML = codeLineList[idx];
            //     // cn.focus();
            //     console.log(cn);
                
            //   }
            // });

            // cachedCodeText = codeText;
            // domCodeEl.innerHTML = codeLines; //`<code class="hljs">${codeLines}</code>`;
            // domCodeEl.focus();
          }

          // if (updatedNode.type !== this.type) {
          //   return false;
          // }

          // domCaption.classList.toggle('empty', updatedNode.content.size === 0);

          return true;
        },
      };
    };
  },
});
