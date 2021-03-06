import { Define, UmWebComponent } from 'components/um-web.component';
import template from './template';
import { PreloaderService } from 'components/um-preloader/service';

@Define('um-editor')
export class EditorComponent extends UmWebComponent {
  private _isCodeMode: boolean = false;

  public $style: any;
  public $editorContent: HTMLElement;

  constructor() {
    super(template, require('./editor.component.scss'));
    PreloaderService.isAppLoading.next(false);
  }

  connectedCallback() {
    super.connectedCallback();

    this.$editorContent = <HTMLElement>this.querySelector('#editorContent');

    this.$editorContent.addEventListener('paste', function(e) {
      // cancel paste
      e.preventDefault();

      // get text representation of clipboard
      if (e.clipboardData !== null) {
        const text = e.clipboardData && e.clipboardData.getData('text/plain');

        // insert text manually
        document.execCommand('insertHTML', false, text);
      }
    });
  }

  doRichEditCommand(event, aName, aArg?) {
    event.preventDefault();
    document.execCommand(aName, false, aArg);

    const selection = window.getSelection();
    if (selection && selection.focusNode) {
      const selectedElement = selection.focusNode.parentElement;
      if (selectedElement) {
        switch (aName) {
          case 'formatBlock':
            this._formatBlockClasses(aArg, selectedElement);
            break;
        }

        // console.log(selectedElement)
        // selectedElement.classList.add("oder2");
      }
    }
  }

  switchMode() {
    this._isCodeMode = !this._isCodeMode;
    this._setDocMode(this._isCodeMode, this.$editorContent.firstElementChild);
  }

  private _formatBlockClasses(aArg, selectedElement) {
    switch (aArg) {
      case 'h2':
        selectedElement.classList.add('entry-title');
        break;
    }
  }

  private _setDocMode(codeMode, oArticle) {
    let sArticleTxt = oArticle.innerHTML;
    let oContent;
    if (codeMode) {
      oContent = document.createTextNode(sArticleTxt);
      oArticle.innerHTML = '';

      let oPre = document.createElement('pre');
      oArticle.contentEditable = 'false';
      oPre.id = 'sourceText';
      oPre.contentEditable = 'true';
      oPre.appendChild(oContent);

      oArticle.appendChild(oPre);
    } else {
      oContent = document.createRange();
      oContent.selectNodeContents(oArticle.firstChild);
      oArticle.innerHTML = oContent.toString();
      oArticle.contentEditable = 'true';
    }
  }
}
