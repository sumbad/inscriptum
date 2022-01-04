import { AbstractElement, Define, state } from 'abstract-element';
import { TemplateResult, html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import litRender from 'abstract-element/render/lit';

import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

export interface IListItem {
  id: string;
  preview: {
    title: string;
    description: string;
    image: string;
  };
  linkUrl: string;
  linkRel?: string;
  actions?: IListItemAction[] | (() => IListItemAction[]);
  author?: string;
  createdAt?: string;
  updatedAt?: string;
  tags?: {
    code: string;
    link?: {
      href: string;
      rel?: string;
    };
  }[];
}

export interface IListItemAction {
  type: number;
  label: string;
}

@Define('inscriptum-list')
export class ListComponent extends AbstractElement {
  styles = html`
    <style>
      ${require('./styles/custom.scss')}
      ${require('./styles/$.scss')}
    </style>
  `;

  set value(list) {
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
                    (action) => html`
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
      (i) => i.id,
      (i, index) => html`
        <div class="um-drafts__item">
          ${(i.tags || []).map((t) =>
            t.link != null ? html`<a href="/${t.link.href}" rel=${ifDefined(t.link.rel)}>${t.code}</a>` : t.code
          )}
          <h6 class="docs-header">${i.preview.title}</h6>
          <div class="row">
            ${i.preview.image?.length > 0
              ? html`
                  <div class="two columns draft-preview">
                    <img class="draft-preview__img" src="${i.preview.image}" />
                  </div>
                `
              : ''}
            <div class=${i.preview.image?.length > 0 ? 'ten columns' : ''}>
              <a class="um-drafts__item-link" href=${i.linkUrl} rel=${ifDefined(i.linkRel)}>
                <p class="docs-preview">${unsafeHTML(i.preview.description)}</p>
              </a>
              ${menuElemFunc(i.id, typeof i.actions === 'function' ? i.actions() : i.actions)}
            </div>
          </div>
        </div>
      `
    );

    return html`
      ${this.styles}
      <div class="container">${listElements}</div>
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
    const popoverDataset: string = event.target?.['dataset'].popover;
    const element = this.querySelector<Element>(`[id="${popoverDataset}"]`);
    if (element !== null) {
      element.classList.add('open');
    }
    event.stopImmediatePropagation();
  }

  /**
   * Close all opened popovers
   */
  closePopovers() {
    this.querySelectorAll('.popover.open').forEach((el) => {
      el.classList.remove('open');
    });
  }
}
