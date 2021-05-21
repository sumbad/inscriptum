import { initQuillEditor } from 'new-components/editor/utils';
import Delta from 'quill-delta';

export function quillInnerHtml(content: Delta) {
  const quillEl = document.createElement('div');
  const template = document.createElement('template');

  template.append(quillEl);
  document.body.append(template);

  const quill = initQuillEditor(null, quillEl);

  quill.setContents(content);
  const htmlContent = quill.root.innerHTML;

  quillEl.remove();
  template.remove();

  if (typeof quill['destroy'] === 'function') {
    quill['destroy']();
  }

  return htmlContent;
}
