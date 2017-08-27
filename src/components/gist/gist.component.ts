export class GistComponent extends HTMLElement {
    private _template: any;


    constructor(public iframeid) {
        super();
        this._template = require('./gist.component.html');
        this.innerHTML = this._template(this);
    }


    connectedCallback() {
        const iframeEl = <HTMLIFrameElement>this.querySelector('iframe');
        let doc = iframeEl['contentDocument'] || iframeEl['contentWindow'];
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
        iframeEl['contentWindow'].onload = () => {
            iframeEl.style.height = doc.body.scrollHeight + "px";
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