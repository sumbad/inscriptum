import Quill from 'quill/core';
import Block from 'quill/blots/block';



export class BlockquoteBlot extends Block { }
BlockquoteBlot.blotName = 'blockBlockquote';
BlockquoteBlot.tagName = 'blockquote';
Quill.register(BlockquoteBlot);