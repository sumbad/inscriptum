import { initQuillEditor } from 'new-components/editor/utils';
import Delta from 'quill-delta';import { Blot } from 'parchment/dist/src/blot/abstract/blot';
import Block from 'quill/blots/block';
import { BlockquoteBlot } from 'components/editor/editor/BlockquoteBlot';
import { FieldBlot } from 'components/editor/editor/FieldBlot';
import { PullquoteBlot } from 'components/editor/editor/PullquoteBlot';
import { TitleBlot } from 'components/editor/editor/TitleBlot';
import { CodeBlock } from 'quill/modules/syntax';
import { ListItem } from 'quill/formats/list';

export function quillInnerHtml(content: Delta) {
  const quillEl = document.createElement('div');
  const template = document.createElement('template');

  template.append(quillEl);
  document.body.append(template);

  const quill = initQuillEditor(null, quillEl);

  FieldBlot;
  BlockquoteBlot;
  PullquoteBlot;
  CodeBlock;
  ListItem;
  TitleBlot;
  Block;

  quill.setContents(content);
  const htmlContent = quill.root.innerHTML;

  quillEl.remove();
  template.remove();

  if (typeof quill['destroy'] === 'function') {
    quill['destroy']();
  }

  return htmlContent;
}
