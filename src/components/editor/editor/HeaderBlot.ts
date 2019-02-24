import Quill from 'quill/core';
import { SingleLineBlot } from './SingleLineBlot';



export class HeaderBlot extends SingleLineBlot {
  optimize(context: { [key: string]: any; }) {
    super.optimize(context);
    let anchor = this.domNode.innerText;
    anchor = anchor.replace(/[\s_]+/g, '-');
    anchor = anchor.replace(/(^-+|-+$)/g, '');
    if (this.domNode.id !== anchor) {
      this.domNode.setAttribute('id', anchor);
    }
  }

  
  formatAt(index, length, name, value) {
    if ((name !== 'bold' && name !== 'italic' && name !== 'code') || !value) {
      super.formatAt(index, length, name, value);
    }
  }
}
HeaderBlot.blotName = 'blockHeader';
HeaderBlot.tagName = 'h3';
Quill.register(HeaderBlot);