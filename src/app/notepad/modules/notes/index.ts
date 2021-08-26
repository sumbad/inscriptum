import { AbstractElement, Define, state } from 'abstract-element';
import { TemplateResult, html } from 'lit-html';
import { StorageService } from 'storage/storage.service';
import { AuthService } from 'auth';
import litRender from 'abstract-element/render/lit';
import page from 'page';

import { dom } from '@fortawesome/fontawesome-svg-core';

import 'components/list';
import 'components/um-preloader';
import { IListItem } from 'components/list';
import { config } from 'settings';
import { Note } from 'storage/api/note';

const isDevMode = process.env.NODE_ENV === 'development';

enum NoteAction {
  edit,
  delete,
}

@Define('inscriptum-notes')
export class DraftComponent extends AbstractElement {
  @state()
  $: {
    notes?: IListItem[];
    isPreloader: boolean;
    hasAuth: boolean;
  } = {
    isPreloader: true,
    hasAuth: false,
  };

  constructor(private _storageService: StorageService = new StorageService(), private _authService: AuthService) {
    super(litRender, false);

    this._authService = new AuthService(this._storageService);
  }

  /**
   * LIFECYCLE
   * Create Custom element on page
   */
  connectedCallback() {
    super.connectedCallback();

    this._authService.$authenticated.subscribe((hasAuth) => {
      this.$ = {
        ...this.$,
        hasAuth: Boolean(hasAuth),
      };
    });

    (async () => {
      try {
        debugger;
        const noteList = (
          process.env.NODE_ENV === 'development'
            ? await import(
                /* webpackInclude: /\.json$/ */
                /* webpackChunkName: "notes-list" */
                `public/note/${config.nodeListFileName}`
              )
            : await import(
                /* webpackInclude: /\.json$/ */
                /* webpackExclude: /\.dev\.json$/ */
                /* webpackChunkName: "notes-list" */
                `public/note/${config.nodeListFileName}`
              )
        ).default;
        return noteList;
      } catch (error) {
        return await this._storageService.api.note.getAll();
      }
    })().then((notes: Note[]) => {
      const _notes = notes.map((item) => {
        return {
          id: item.id,
          preview: item.preview,
          linkUrl: item.static_link + (isDevMode ? '.html' : ''),
          linkRel: 'external',
          actions: () =>
            this.$.hasAuth
              ? [
                  {
                    type: NoteAction.edit,
                    label: 'изменить',
                  },
                ]
              : [],
        };
      });

      this.$ = {
        ...this.$,
        isPreloader: false,
        notes: _notes,
      };
    });

    // For fontawesome icons. Replace any existing <i> tags with <svg> and set up a MutationObserver to
    // continue doing this as the DOM changes.
    dom.watch();
  }

  /**
   * RENDER
   */
  render(): TemplateResult {
    return html`
      <um-preloader ?loading=${this.$.isPreloader}>
        <inscriptum-list @action=${this.handleAction.bind(this)} .value=${this.$.notes}></inscriptum-list>
      </um-preloader>
    `;
  }

  /**
   * Handle note actions
   *
   * @param type - action type
   * @param id - note id
   */
  handleAction({ detail }: { detail: { type: NoteAction; id: string } }) {
    switch (detail.type) {
      case NoteAction.edit:
        page('/editor/' + detail.id + '/posted');
        break;
    }
  }
}
