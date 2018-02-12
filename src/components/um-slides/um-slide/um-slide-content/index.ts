import 'whatwg-fetch';

import { Define, UmWebComponent } from "components/um-web.component";

declare const $: any;

import template from './template';


@Define('um-slide-content')
export class SlideContentComponent extends UmWebComponent {
  // static attributes = ['content'];
  // static get observedAttributes() { return this.attributes; }

  constructor() {
    super(template, require('./style.scss'), true);
  }


  // connectedCallback() {
    // super.connectedCallback(SlideComponent.attributes);
  // }

}