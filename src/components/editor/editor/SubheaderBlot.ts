import Quill from 'quill/core';
import { HeaderBlot } from './HeaderBlot';



export class SubheaderBlot extends HeaderBlot { }
SubheaderBlot.blotName = 'blockSubheader';
SubheaderBlot.tagName = 'h4';
Quill.register(SubheaderBlot);