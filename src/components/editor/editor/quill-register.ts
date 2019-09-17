import loadImage from 'blueimp-load-image';
import autosize from 'autosize';

import Delta from 'quill-delta';
import Block, { BlockEmbed } from 'quill/blots/block';
import Quill from 'quill/core';

import List, { ListItem } from 'quill/formats/list';
import { Code } from 'quill/formats/code';
import Keyboard from 'quill/modules/keyboard';
import { Blot } from 'parchment/dist/src/blot/abstract/blot';

import { BlockquoteBlot } from './BlockquoteBlot';
import { BreakBlot } from './BreakBlot';
import { FieldBlot } from './FieldBlot';
import { LinkBlot } from './LinkBlot';
import { MyQuill } from './MyQuill';
import { PullquoteBlot } from './PullquoteBlot';
import { SingleLineBlot } from './SingleLineBlot';
import { TitleBlot } from './TitleBlot';
import { FigureBlot } from './FigureBlot';
import { DescriptionBlot } from './DescriptionBlot';
import BlockBlot from 'parchment/dist/src/blot/block';
import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import { HeaderBlot } from './HeaderBlot';
import { SubheaderBlot } from './SubheaderBlot';
import { uploadFileService } from '../image.service';
import hljs from 'highlight.js';
import { InsSyntaxModule } from './InsSyntaxModule';
import { CodeBlock } from 'quill/modules/syntax';
import { PlainTextClipboard } from './PlainTextClipboard';



Quill.register({
  'modules/syntax': InsSyntaxModule,
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/list': List,
  'formats/list-item': ListItem,
  'formats/code': Code
});

export default Quill;