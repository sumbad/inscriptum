import Quill from 'quill/core';
import { BlockEmbed } from 'quill/blots/block';



export class BreakBlot extends BlockEmbed { }
BreakBlot.blotName = 'textBreak';
BreakBlot.tagName = 'br';
BreakBlot.className = 'inline';
Quill.register(BreakBlot);