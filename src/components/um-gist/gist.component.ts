import hyperHTML from 'hyperhtml/esm';

export class GistComponent extends HTMLElement {
    private _template: any;
    public iframeEl: any;


    constructor(public iframeid) {
        super();
        this._template = require('./gist.component.html');
        //this._template(this);
    }


    connectedCallback() {
        this._render();
        
        this.iframeEl = <HTMLIFrameElement>this.querySelector('iframe');
        let doc = this.iframeEl['contentDocument'] || this.iframeEl['contentWindow'];
        doc.open();
        doc.write(`
        <html>
          <style>
            .gist-meta {
              display: none;
            } 
            .gist .blob-code {
              line-height: 25px !important; 
              font-size: 14px !important;
            }
          </style>
          <body>
            <link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-9f0a4ad9c85ca776e669003688baa9d55f9db315562ce4d231d37dab2714c70a.css">
            <scr`+ `ipt type="text/javascript" src="https://gist.github.com/sumbad/${this.iframeid}.js"></sc` + `ript>
          </body>
        </html>`);
        doc.close();
        this.iframeEl['contentWindow'].onload = () => {
            this.iframeEl.style.height = doc.body.scrollHeight + "px";
        }
    }


    _render() {
        if (typeof this._template !== 'undefined' && typeof this._template === 'function') {
            this._template(this, hyperHTML.bind(this));
        }
    }


    /**
     * LIFECYCLE
     * Отслеживаемые параметры
     * изменения в данных атрибутах будут непосредственно отслеживаться компонентом
     */
    static get observedAttributes() { return ['iframeid']; }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            switch (name) {
                case 'iframeid':
                    this.iframeid = newValue;
                    break;
            }
        }
    }
}