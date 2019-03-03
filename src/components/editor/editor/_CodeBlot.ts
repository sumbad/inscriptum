import Quill from 'quill/core';
import CodeBlock from 'quill/formats/code';
import { BreakBlot } from './BreakBlot';
import Parchment from 'parchment';


export class CodeBlot extends CodeBlock {
  replace(target) {
    target.children.forEach((blot) => {
      if (blot instanceof BreakBlot) {
        blot.replaceWith(Parchment.create('text', '\n'));
      }
    });
    super.replace(target);
  }
}
CodeBlot['blotName'] = 'code-block';
Quill.register(CodeBlot);