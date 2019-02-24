import Block from 'quill/blots/block';
import { BreakBlot } from './BreakBlot';
import Parchment from 'parchment';


export class SingleLineBlot extends Block {
  replace(target) {
    target.children.forEach((blot) => {
      if (blot instanceof BreakBlot) {
        blot.replaceWith(Parchment.create('text', ' '));
      }
    })
    super.replace(target);
  }
  insertAt(index, text, value) {
    if (typeof value !== 'undefined' && text == 'textBreak') {
      super.insertAt(index, '\n');
    } else {
      super.insertAt(index, text, value);
    }
  }
}