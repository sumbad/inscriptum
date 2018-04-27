import { Define, UmWebComponent } from 'components/um-web.component';
import presentations from 'data/presentations';

import 'presentarium';
import 'whatwg-fetch';

import template from './template';



@Define('inscriptum-presentation')
export class PresentationComponent extends UmWebComponent {
  presentationContent: string;
  static attributes = ['data-name'];
  static get observedAttributes() { return this.attributes; }

  
  constructor() {
    super(template);
  }


  connectedCallback() {
    super.connectedCallback(PresentationComponent.attributes);
    const presentation = presentations.find(a => a.name === this.props['data-name']);

    if (typeof presentation !== 'undefined') {
      this._loadHTML(presentation.name).then(body => {
        this.presentationContent = body;
        this.render();
      });
    }
  }


  async _loadHTML(name: string) {
    return (await fetch(`/data/presentations/${name}/template.html`)).text();
  }

}