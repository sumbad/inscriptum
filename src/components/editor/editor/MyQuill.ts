import Quill from 'quill/core';



export class MyQuill extends Quill {
  formatLine(...args: [number, number, ...any[]]) {
    super.formatLine(...args);
    this.updateSelection();
  }

  /**
   * https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
   * https://github.com/Microsoft/TypeScript/pull/24897
   * @param args 
   */
  formatText(...args: [any, any, ...any[]]) {
    super.formatText(...args);
    this.updateSelection();
  }

  updateSelection(source?) {
    if (this.hasFocus()) {
      source = source || MyQuill.sources.SILENT;
      let range = this.getSelection(true);
      this.setSelection(++range.index, range.length, source);
      this.setSelection(--range.index, range.length, source);
    }

    
  }
}