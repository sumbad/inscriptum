import 'whatwg-fetch';

import { Define, UmWebComponent } from "components/um-web.component";

declare const $: any;

import template from './template';


@Define('um-slide')
export class SlideComponent extends UmWebComponent {
  static attributes = ['content'];
  static get observedAttributes() { return this.attributes; }

  constructor() {
    super(template, require('./style.scss'));
  }


  connectedCallback() {
    super.connectedCallback(SlideComponent.attributes);
  }

}