import { TemplateResult } from 'lit-html';
import { Define, AbstractElement } from 'abstract-element';
import * as litHtml from 'lit-html';
import litRender from 'abstract-element/render/lit';

import Quill from './quill-register';


/**
 * The demo web component with lit-html render engine
 */
@Define('inscriptum-editor')
export class DemoLitComponent extends AbstractElement {
  html = litHtml.html;
  css = require('./style.scss');

  state = {
    time: new Date().toLocaleTimeString()
  };


  constructor() {
    super(litRender, false);
  }


  connectedCallback() {
    super.connectedCallback();
    console.log(this.querySelector('#editor'), 'connectedCallback');

    var quill = new Quill(this.querySelector('#editor'), {
      theme: 'snow'
    });

    console.log(quill.getContents());
    console.log(quill.getText(0, quill.getLength()));
  }


  render(): TemplateResult {
    console.log(111, this.css);
    
    return this.html`
      <style>
        ${this.css}
      </style>
      
      <div id="editor">
        <p>Hello World!</p>
        <p>Some initial <strong>bold</strong> text</p>
        <p><br></p>
      </div>
    `;
  }
}