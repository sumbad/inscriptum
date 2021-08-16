import { AbstractElement, Define, state } from 'abstract-element';
import { TemplateResult, html } from 'lit-html';
import { StorageService } from 'storage/storage.service';
import { AuthService } from 'auth';
import litRender from 'abstract-element/render/lit';
import page from 'page';
import { takeWhile } from 'rxjs/operators';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faSave } from '@fortawesome/free-regular-svg-icons';

library.add(
  faSave
);

import 'components/list';
import { IListItem } from 'components/list';
import { quillDelta2Preview, redactorContent2Preview } from 'utils/common';
import Delta from 'quill-delta';


enum DraftAction {
  delete,
  publish
}


@Define('inscriptum-drafts')
export class DraftComponent extends AbstractElement {
  styles = html`
  <style>
    ${require('./style.scss')}
  </style>
`;

  @state()
  $: {
    drafts?: IListItem[];
    isPreloader: boolean;
  } = {
      isPreloader: true
    }


  constructor(
    private _storageService: StorageService = new StorageService(),
    private _authService: AuthService,
  ) {
    super(litRender, false);

    this._authService = new AuthService(this._storageService);
  }


  /**
   * LIFECYCLE
   * Create Custom element on page
   */
  connectedCallback() {
    super.connectedCallback();

    this._authService.$authenticated
      .pipe(
        takeWhile(() => this.$.drafts === undefined)
      )
      .subscribe(
        (hasAuth) => {
          if (hasAuth) {
            this._storageService.api.draft.getAll().then(
              drafts => {
                const _drafts = drafts.map(
                  item => {
                    const content = item.pages[0].content;
                    const { description, title, image } = content != null && 'ops' in content ? quillDelta2Preview(content as Delta) : redactorContent2Preview(content);
                    
                    return {
                      id: item.id,
                      preview: {
                        title,
                        description,
                        image
                      },
                      linkUrl: '/draft/' + item.id,
                      actions: [
                        {
                          label: 'удалить',
                          type: DraftAction.delete
                        }
                      ]
                    }
                  }
                );

                this.$ = {
                  isPreloader: false,
                  drafts: _drafts
                };
              }
            );
          } else if (hasAuth !== null) {
            this._authService.login();
          }
        }
      );

    // For fontawesome icons. Replace any existing <i> tags with <svg> and set up a MutationObserver to
    // continue doing this as the DOM changes.
    dom.watch();
  }


  /**
   * RENDER
   */
  render(): TemplateResult {
    return html`
    ${this.styles}
    <um-preloader ?loading=${this.$.isPreloader}>
      <div class="row">
        <div class="twelve columns um-drafts__submenu">
          <span @click=${this.handleBtnExportAllDrafts.bind(this)} class="um-drafts__export-all">
            <i class="far fa-save fa-2x"></i>
          </span>
          <button class="button" @click=${this.handleBtnCreateNewDraft.bind(this)}>Новый черновик</button>
        </div>
      </div>
    
      <inscriptum-list @action=${this.handleAction.bind(this)} .value=${this.$.drafts}></inscriptum-list>
    </um-preloader>
    `;
  }


  /**
   * Create new draft
   */
  async handleBtnCreateNewDraft() {
    const newDraftId = await this._storageService.api.draft.create(this._storageService.author.id);
    page('/draft/' + newDraftId.id);
  }


  /**
   * Save all drafts as JSON file
   * 
   * @param event 
   */
  handleBtnExportAllDrafts(event: MouseEvent) {
    event.preventDefault();

    const content = JSON.stringify(this.$.drafts);
    const a = document.createElement('a');
    const blob = new Blob([content], { type: 'application/octet-stream' });

    a.href = window.URL.createObjectURL(blob);
    a.download = 'drafts.json';
    a.click();
  }


  /**
   * Handle draft actions
   * 
   * @param type - action type
   * @param id - draft id
   */
  handleAction({ detail }: { detail: { type: DraftAction, id: string } }) {
    switch (detail.type) {
      case DraftAction.delete:
        this._deleteDraft(detail.id);
        break;
    }
  }


  /**
   * Delete a draft
   * 
   * @param id - draft id
   */
  private _deleteDraft(id: string) {
    this._storageService.api.draft.deleteById({id})
      .then(
        (deletedDraft) => {
          this.$ = {
            ...this.$,
            drafts: this.$.drafts && this.$.drafts.filter(d => d.id !== deletedDraft.id)
          }
        }
      );
  }
}