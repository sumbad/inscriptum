import { EG, p } from '@web-companions/gfc';
import { render } from 'lit-html2';
import { repeat } from 'lit-html2/directives/repeat.js';
import { ifDefined } from 'lit-html2/directives/if-defined.js';
import { unsafeHTML } from 'lit-html2/directives/unsafe-html.js';
import { css } from '@web-companions/h';

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

export const listElement = EG({
  props: {
    list: p.req<IListItem[]>(),
    onaction: p.opt<(event: CustomEvent<{ type: IListItemAction['type']; id: string }>) => any>(),
  },
})(function* (params) {
  
  /**
   * Dispatch a list item action
   *
   * @param detail - action id and type
   */
  const dispatchAction = (detail: { type: IListItemAction['type']; id: string }) => {
    return () => this.dispatchEvent(new CustomEvent('action', { detail }));
  };

  /**
   * Close all opened popovers
   */
  const closePopovers = () => {
    this.querySelectorAll('.popover.open').forEach((el) => {
      el.classList.remove('open');
    });
  };

  /**
   * Open a popover with actions on a draft
   *
   * @param event - click event
   */
  const openPopover = (event: MouseEvent) => {
    event.preventDefault();
    closePopovers();
    const popoverDataset: string = event.target?.['dataset'].popover;
    const element = this.querySelector(`[id="${popoverDataset}"]`);
    if (element !== null) {
      element.classList.add('open');
    }
    event.stopImmediatePropagation();
  };

  try {
    requestAnimationFrame(() => {
      document.addEventListener('click', closePopovers);
    });

    while (true) {
      const menuElemFunc = (id: string, actions: IListItemAction[] = []) =>
        actions.length > 0 ? (
          <div class="um-drafts__item-actions">
            <span onclick={openPopover} class="um-drafts__item-subcontent" data-popover={id}>
              {id}{' '}
              <i
                class="fas fa-angle-down"
                style={css`
                  color: #999;
                `}
              ></i>
            </span>
            <div id={id} class="popover popover_right">
              <ul class="popover-list">
                {actions.map((action) => (
                  <li class="popover-item">
                    <a class="popover-link" onclick={dispatchAction({ type: action.type, id })}>
                      {action.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          ''
        );

      const Tags = ({ listItem }: { listItem: IListItem }) =>
        (listItem.tags || []).map((t) =>
          t.link != null ? (
            <a href={`/${t.link.href}`} rel={ifDefined(t.link.rel) as string}>
              {t.code}
            </a>
          ) : (
            t.code
          )
        );

      const Image = ({ img }: { img?: string }) =>
        img != null && img.length > 0 ? (
          <div class="two columns draft-preview">
            <img class="draft-preview__img" src={img} />
          </div>
        ) : (
          ''
        );

      params = yield render(
        <>
          <style>
            {require('./styles/custom.scss')}
            {require('./styles/$.scss')}
          </style>
          <div class="container">
            {repeat(
              params.list,
              (it) => it.id,
              (it) => (
                <div class="um-drafts__item">
                  <Tags listItem={it}></Tags>
                  <a class="um-drafts__item-link" href={it.linkUrl} rel={ifDefined(it.linkRel) as string}>
                    <h6 class="docs-header">{it.preview.title}</h6>
                    <div class="row">
                      <Image img={it.preview.image}></Image>
                      <div class={it.preview.image?.length > 0 ? 'ten columns' : ''}>
                        <p class="docs-preview">{unsafeHTML(it.preview.description)}</p>
                        {menuElemFunc(it.id, typeof it.actions === 'function' ? it.actions() : it.actions)}
                      </div>
                    </div>
                    <div class="row item-caption">{it.createdAt}{it.updatedAt != null ? ` · ${it.updatedAt}` : ''}</div>
                  </a>
                </div>
              )
            )}
          </div>
        </>,
        this
      );
    }
  } finally {
    document.removeEventListener('click', closePopovers);
  }
});
