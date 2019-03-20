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
  quill: any;
  options: any;

  static register() {
    Quill.register(CodeToken, true);
    Quill.register(InsSyntaxCodeBlock, true);
  }

  highlight() {
    // console.log(1111, this.quill.selection);
    // console.log(22222, document.querySelectorAll(':hover'));

    if (this.quill.selection.composing) return;
    this.quill.update(Quill.sources.USER);
    let range = this.quill.getSelection();

    // console.log(44444, this.quill.scroll.descendants(InsSyntaxCodeBlock));


    this.quill.scroll.descendants(InsSyntaxCodeBlock).forEach((code) => {
      code.highlight(this.options.highlight);
    });
    this.quill.update(Quill.sources.SILENT);

    // console.log(range);
    // console.log(111111, document.activeElement);
    // console.log(222222, this.quill.container);

    if (
      range != null
      && document.activeElement === this.quill.container.querySelector('[contenteditable]')
    ) {
      this.quill.setSelection(range, Quill.sources.SILENT);
    }
  }
}