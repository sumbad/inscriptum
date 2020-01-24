import './um-spinner-round';

import { Define, AbstractElement, prop } from 'abstract-element';
import litRender from 'abstract-element/render/lit';
import { html } from 'lit-html';

function boolAttr(state, key: string, value: any) {
  value = typeof value === 'string' ? true : Boolean(value);

  if (value !== state[key]) {
    return { ...state, [key]: value };
  }
}

@Define('um-preloader')
export class PreloaderComponent extends AbstractElement {
  @prop({ mapper: boolAttr, attribute: 'loading' })
  loading: boolean;
  @prop()
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
