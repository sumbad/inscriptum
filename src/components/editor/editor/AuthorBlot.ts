import Quill from 'quill/core';
import { FieldBlot } from './FieldBlot';



export class AuthorBlot extends FieldBlot {
  static create(value) {
    console.log('AuthorBlot create ', value);
    let domNode = super.create(value) as Element;
    domNode.setAttribute('data-placeholder', 'Your name');
    domNode.setAttribute('data-label', 'Author');
    return domNode;
  }


  formatAt(index, length, name, value) {
    console.log('AuthorBlot formatAt ', index, length, name, value);
    if (name === AuthorBlot.blotName) {
      super.formatAt(index, length, name, value);
    } else if (name === 'link') {
      super.formatAt(0, this.length(), name, value);
    }
  }


  format(name, value) {
    console.log('AuthorBlot format ', name, value);
    
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
    console.log('AuthorBlot replace ', target);
    super.replace(target);
  }
  insertAt(index, text, value) {
    console.log('AuthorBlot insertAt ', index, text, value);
    super.insertAt(index, text, value);
  }
}
AuthorBlot.blotName = 'blockAuthor';
AuthorBlot.tagName = 'address';
Quill.register(AuthorBlot);