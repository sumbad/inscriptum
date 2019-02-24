import Quill from 'quill/core';
import { BlockEmbed } from 'quill/blots/block';



class DividerBlot extends BlockEmbed { }
DividerBlot.blotName = 'blockDivider';
DividerBlot.tagName = 'hr';
Quill.register(DividerBlot);