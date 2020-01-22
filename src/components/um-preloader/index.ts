import './um-spinner-round';

import { Define, AbstractElement, attr, state } from 'abstract-element';
import litRender from 'abstract-element/render/lit';
import { html } from 'lit-html';

function boolAttr(val: string) {
  return typeof val === 'string';
}

@Define('um-preloader')
export class PreloaderComponent extends AbstractElement {
  @attr({ converter: boolAttr })
  loading: boolean;

  @state()
  showSpinner: boolean = true;

  loaderClass: string = 'um-preloader__loader_fixed';

  styles = html`
    <style>
      ${require('./style.scss')}
    </style>
  `;

  constructor() {
    super(litRender, true);
  }

  render() {
    // remove spinner after an animation from DOM
    if (!this.loading) {
      setTimeout(() => {
        this.showSpinner = false;
      }, 600);
    } else {
      this.showSpinner = true;
    }

    return html`
      <div class="um-preloader">
        ${this.styles}
        ${this.showSpinner
          ? html`
              <div class=${'um-preloader__loader ' + this.loaderClass} style=${'opacity:' + (this.loading ? 1 : 0)}>
                <um-spinner-round></um-spinner-round>
              </div>
            `
          : ''}
        <slot></slot>
      </div>
    `;
  }
}
