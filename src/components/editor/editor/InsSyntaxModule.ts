import Quill from 'quill/core';

import Inline from 'quill/blots/inline';
import Syntax, { CodeToken, CodeBlock } from 'quill/modules/syntax';



export class CodeEndLineFlag extends Inline {
  static formats() { return {}; }
}
CodeEndLineFlag.blotName = 'code-end';
CodeEndLineFlag.className = 'l';
CodeEndLineFlag.tagName = 'SPAN';
Quill.register(CodeEndLineFlag);



export class InsSyntaxCodeBlock extends CodeBlock {
  [x: string]: any;
  cachedText: string;


  highlight(highlight) {
    let text: string = (this.domNode.textContent || '');
    if (this.cachedText !== text) {
      if (text.trim().length > 0 || this.cachedText == null) {

        let codeLines = '';
        const codeLine = highlight(text).split('\n');

        for (let i = 0; i < codeLine.length - 1; i++) {
          codeLines += `<span class="l">${codeLine[i] || ' '}</span>\n`;
        }
        codeLines += `<span class="l">${codeLine[codeLine.length - 1]}</span>`;

        this.domNode.innerHTML = `<code class="hljs">${codeLines}</code>`;
      }
      this.cachedText = text;
    }
  }
}


export class InsSyntaxModule extends Syntax {
  static register() {
    Quill.register(CodeToken, true);
    Quill.register(InsSyntaxCodeBlock, true);
  }
}