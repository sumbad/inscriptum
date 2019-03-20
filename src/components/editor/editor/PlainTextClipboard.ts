import Quill from 'quill/core'
import Delta from 'quill-delta'
import Clipboard from 'quill/modules/clipboard';


// const Clipboard = Quill.import('modules/clipboard')

/**
 * https://github.com/quilljs/quill/issues/1374
 * https://quilljs.com/docs/modules/
 */
export class PlainTextClipboard extends (Clipboard as any) {
  onPaste(e) {
    if (e.defaultPrevented || !this.quill.isEnabled()) return;
    let range = this.quill.getSelection();
    let delta = new Delta().retain(range.index);
    this.container.style.top = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0).toString() + 'px';
    this.container.focus();
    setTimeout(() => {
      this.quill.selection.update(Quill.sources.SILENT);
      delta = delta.concat(this.convert()).delete(range.length);
      this.quill.updateContents(delta, Quill.sources.USER);
      this.quill.setSelection(delta.length() - range.length, Quill.sources.SILENT);
      let bounds = this.quill.getBounds(delta.length() - range.length, Quill.sources.SILENT);
      this.quill.scrollingContainer.scrollTop = bounds.top;
    }, 1);
  }

  // onPaste (e) {
  //   if (e.defaultPrevented || !this.quill.isEnabled()) return
  //   let range = this.quill.getSelection()
  //   let delta = new Delta().retain(range.index)

  //   if (e && e.clipboardData && e.clipboardData.types && e.clipboardData.getData) {
  //     let text = (e.originalEvent || e).clipboardData.getData('text/plain')
  //     let cleanedText = this.convert(text)

  //     // Stop the data from actually being pasted
  //     e.stopPropagation()
  //     e.preventDefault()

  //     // Process cleaned text
  //     delta = delta.concat(cleanedText).delete(range.length)
  //     this.quill.updateContents(delta, Quill.sources.USER)
  //     // range.length contributes to delta.length()
  //     this.quill.setSelection(delta.length() - range.length, Quill.sources.SILENT)

  //     return false
  //   }
  // }
}

// Quill.register('modules/clipboard', PlainTextClipboard)