import Quill from 'quill/core';
import Block from 'quill/blots/block';



export class PullquoteBlot extends Block { }
PullquoteBlot.blotName = 'blockPullquote';
PullquoteBlot.tagName = 'aside';
Quill.register(PullquoteBlot);