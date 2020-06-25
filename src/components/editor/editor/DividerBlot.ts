import { BlockEmbed } from 'quill/blots/block';

export class DividerBlot extends BlockEmbed {}
DividerBlot.blotName = 'blockDivider';
DividerBlot.tagName = 'hr';
