import hyperHTML from 'hyperhtml/esm';
// import pell from 'pell';



export class EditorComponent extends HTMLElement {
    private _template: any;
    private _style: any;

    private _isCodeMode: boolean = false;

    public $style: any;
    public $editorContent: HTMLElement;

    constructor() {
        super();
        try {
            this._template = require('./editor.component.html');
            this._style = require('./editor.component.scss');
        } catch (error) {
            console.warn('Can not find the EditorComponent template!');
        }
    }


    connectedCallback() {
        this.$style = hyperHTML.wire() `<style>${this._style}</style>`;
        this.render();
        this.$editorContent = <HTMLElement>this.querySelector('#editorContent');
    }


    render() {
        this._template(this, hyperHTML.bind(this));
    }


    doRichEditCommand(event, aName, aArg?) {
        event.preventDefault();
        console.log(111111111111111)
        document.execCommand(aName, false, aArg);
        const selectedElement = window.getSelection().focusNode.parentElement;
        if (selectedElement) {

            switch (aName) {
                case 'formatBlock':
                    this._formatBlockClasses(aArg, selectedElement)
                    break;
            }

            // console.log(selectedElement)
            // selectedElement.classList.add("oder2");
        }
    }


    switchMode() {
        this._isCodeMode = !this._isCodeMode;
        this._setDocMode(this._isCodeMode, this.$editorContent.firstElementChild);
    }


    private _formatBlockClasses(aArg, selectedElement) {
        switch (aArg) {
            case 'h2':
                selectedElement.classList.add("entry-title");
                break;
        }
    }


    private _setDocMode(codeMode, oArticle) {
        let sArticleTxt = oArticle.innerHTML;
        let oContent;
        if (codeMode) {
            oContent = document.createTextNode(sArticleTxt);
            oArticle.innerHTML = "";

            let oPre = document.createElement("pre");
            oArticle.contentEditable = 'false';
            oPre.id = "sourceText";
            oPre.contentEditable = 'true';
            oPre.appendChild(oContent);

            oArticle.appendChild(oPre);
        }
        else {
            oContent = document.createRange();
            oContent.selectNodeContents(oArticle.firstChild);
            oArticle.innerHTML = oContent.toString();
            oArticle.contentEditable = 'true';
        }
    }

}