import { AbstractElement, Define, state } from 'abstract-element';
import { TemplateResult, html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import litRender from 'abstract-element/render/lit';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

library.add(faAngleDown, faSave);

export interface IListItem {
  id: string;
  title: string;
  content: string;
  image: string;
  linkUrl: string;
  linkRel?: string;
  actions?: IListItemAction[];
  author?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IListItemAction {
  type: number;
  label: string;
}

@Define('inscriptum-list')
export class ListComponent extends AbstractElement {
  styles = html`
    <style>
      ${require('./styles/custom.less')}
      ${require('./styles/$.less')}
    </style>
  `;

  set value(list) {
    console.log(list);
    if (list !== undefined) {
      this._list = list;
    }
  }

  @state()
  private _list: IListItem[] = [];

  constructor() {
    super(litRender, false);
  }

  /**
   * LIFECYCLE
   * Create Custom element on page
   */
  connectedCallback() {
    super.connectedCallback();

    document.addEventListener('click', this.closePopovers.bind(this));
  }

  /**
   * LIFECYCLE
   * Remove Custom element from page
   */
  disconnectedCallback() {
    document.removeEventListener('click', this.closePopovers.bind(this));
  }

  /**
   * RENDER
   */
  render(): TemplateResult {
    if (this._list.length < 1) {
      return html``;
    }

    const menuElemFunc = (id: string, actions: IListItemAction[] = []) =>
      actions.length > 0
        ? html`
            <div class="um-drafts__item-actions">
              <span @click=${this.openPopover.bind(this)} class="um-drafts__item-subcontent" data-popover=${id}>
                ${id} <i class="fas fa-angle-down" style="color:#999"></i>
              </span>
              <div id=${id} class="popover popover_right">
                <ul class="popover-list">
                  ${actions.map(
                    action => html`
                      <li class="popover-item">
                        <a class="popover-link" @click=${this.dispatchAction.bind(this, { type: action.type, id })}>${action.label}</a>
                      </li>
                    `
                  )}
                </ul>
              </div>
            </div>
          `
        : ``;

    const listElements = repeat(
      this._list,
      i => i.id,
      (i, index) => html`
        <div class="um-drafts__item">
          <h6 class="docs-header">
            ${i.title}
          </h6>
          <div class="row">
            ${i.image.length > 0
              ? html`
                  <div class="two columns draft-preview">
                    <img class="draft-preview__img" src="${i.image}"/>
                  </div>
                `
              : ''}
            <div class=${i.image.length > 0 ? 'ten columns' : ''}>
              <a class="um-drafts__item-link" href=${i.linkUrl} rel=${ifDefined(i.linkRel)}>
                <p class="docs-preview">${unsafeHTML(i.content)}</p>
              </a>
              ${menuElemFunc(i.id, i.actions)}
            </div>
          </div>
        </div>
      `
    );

    return html`
      ${this.styles}
      <div class="container">
        ${listElements}
      </div>
    `;
  }

  /**
   * Dispatch a list item action
   *
   * @param detail - action id and type
   */
  dispatchAction(detail) {
    this.dispatchEvent(new CustomEvent('action', { detail }));
  }

  /**
   * Open a popover with actions on a draft
   *
   * @param event - click event
   */
  openPopover(event: MouseEvent) {
    event.preventDefault();
    this.closePopovers();
    const element = this.querySelector<Element>('#' + (event.target || { popover: {} })['dataset'].popover);
    if (element !== null) {
      element.classList.add('open');
    }
    event.stopImmediatePropagation();
  }

  /**
   * Close all opened popovers
   */
  closePopovers() {
    this.querySelectorAll('.popover.open').forEach(el => {
      el.classList.remove('open');
    });
  }
}
