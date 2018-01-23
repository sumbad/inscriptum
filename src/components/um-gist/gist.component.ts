import { BaseComponent } from "components/base.component";



export class GistComponent extends BaseComponent {
  static attributes = ['iframeid'];
  static get observedAttributes() { return this.attributes; }

  public iframeEl: any;


  constructor() {
    super(require('./gist.component.html'));
  }


  connectedCallback() {
    super.connectedCallback(GistComponent.attributes);

    console.log(this.props.iframeid)

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
          <scr`+ `ipt type="text/javascript" src="https://gist.github.com/sumbad/${this.props.iframeid}.js"></sc` + `ript>
        </body>
      </html>`);
    doc.close();
    this.iframeEl['contentWindow'].onload = () => {
      this.iframeEl.style.height = doc.body.scrollHeight + "px";
    }
  }

}