import Quill from 'quill/core';
import { FieldBlot } from './FieldBlot';



export class TitleBlot extends FieldBlot {
  static create(value) {
    let domNode = super.create(value) as Element;
    domNode.setAttribute('data-placeholder', 'Title');
    domNode.setAttribute('data-label', 'Title');
    return domNode;
  }
  formatAt(index, length, name, value) {
    if (name === TitleBlot.blotName) {
      super.formatAt(index, length, name, value);
    }
  }
}
TitleBlot.blotName = 'blockTitle';
TitleBlot.tagName = 'h1';
Quill.register(TitleBlot);