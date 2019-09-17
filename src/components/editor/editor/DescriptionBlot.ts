import Quill from 'quill/core';
import { FieldBlot } from './FieldBlot';



export class DescriptionBlot extends FieldBlot {
  static create(value) {
    console.log('DescriptionBlot create ', value);
    let domNode = super.create(value) as Element;
    domNode.setAttribute('data-placeholder', 'Summary of the text');
    domNode.setAttribute('data-label', 'Description');
    return domNode;
  }


  formatAt(index, length, name, value) {
    console.log('DescriptionBlot formatAt ', index, length, name, value);
    if (name === DescriptionBlot.blotName) {
      super.formatAt(index, length, name, value);
    } else if (name === 'link') {
      super.formatAt(0, this.length(), name, value);
    }
  }


  format(name, value) {
    console.log('DescriptionBlot format ', name, value);
    
    // if (name === 'height' || name === 'width') {
    //   if (value) {
    //     this.domNode.setAttribute(name, value);
    //   } else {
    //     this.domNode.removeAttribute(name, value);
    //   }
    // } else {
      super.format(name, value);
    // }
  }


  replace(target) {
    console.log('DescriptionBlot replace ', target);
    super.replace(target);
  }
  insertAt(index, text, value) {
    console.log('DescriptionBlot insertAt ', index, text, value);
    super.insertAt(index, text, value);
  }
}
DescriptionBlot.blotName = 'blockDescription';
DescriptionBlot.tagName = 'address';
Quill.register(DescriptionBlot);