import { AbstractElement, Define, state } from 'abstract-element';
import { TemplateResult, html } from 'lit-html';
import { StorageService } from 'storage/storage.service';
import { AuthService } from 'auth';
import litRender from 'abstract-element/render/lit';
import page from 'page';
import { takeWhile } from 'rxjs/operators';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSave
} from '@fortawesome/free-regular-svg-icons';

library.add(
  faAngleDown,
  faSave
);


@Define('inscriptum-drafts')
export class DraftsComponent extends AbstractElement {
  @state()
  public draftList: any[] = [];

  styles = html`
    <style>
      ${require('./styles/normalize.css')}
      ${require('./styles/skeleton.less')}
      ${require('./styles/custom.less')}
      ${require('./styles/drafts.less')}
    </style>
  `;


  constructor(
    private _storageService: StorageService = new StorageService(),
    private _authService: AuthService,
  ) {
    super(litRender, false);

    this._authService = new AuthService(this._storageService, document.URL);
  }


  /**
   * LIFECYCLE
   * Create Custom element on page
   */
  connectedCallback() {
    super.connectedCallback();

    this._authService.$authenticated
      .pipe(
        takeWhile(() => this.draftList.length === 0)
      )
      .subscribe(
        (hasAuth) => {
          if (hasAuth) {
            this._storageService.allDrafts().then(
              drafts => {
                console.log(drafts);
                this.draftList = drafts.allDrafts;
              }
            );
          }
        }
      );

    // For fontawesome icons. Replace any existing <i> tags with <svg> and set up a MutationObserver to
    // continue doing this as the DOM changes.
    dom.watch();

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
    const draftListEl = this.draftList.map(
      draft => {
        let previewTitle = '';
        let previewContent = '';
        if (
          draft !== undefined
          && draft.contents !== undefined
          && draft.contents.ops !== undefined
          && draft.contents.ops.length > 0
        ) {
          previewTitle = draft.contents.ops[0].insert;

          for (const [index, value] of draft.contents.ops.entries()) {
            if (index > 0) {
              if (previewContent.length > 100) {
                break;
              }
              previewContent += ' ' + value.insert;
            }
          }
        }
        previewContent = previewContent.trim() + '...';

        return html`
          <div class="um-drafts__item">
            <a class="um-drafts__item-link" href=${'/editor/' + draft.id}>
              <h6 class="docs-header">
                ${previewTitle}
              </h6>
              <p class="docs-preview">${previewContent}</p>
            </a>
            <div class="um-drafts__item-actions">
              <span @click=${this.openPopover.bind(this)} class="um-drafts__item-subcontent" data-popover=${draft.id}>
                ${draft.id} <i class="fas fa-angle-down" style="color:#999"></i>
              </span>
              <div id=${draft.id} class="popover popover_right">
                <ul class="popover-list">
                  <li class="popover-item">
                    <a class="popover-link" @click=${()=> this.handleBtnDeleteDraft(draft.id)} href="#grid">удалить</a>
                  </li>
                  <li class="popover-item">
                    <a class="popover-link" href="#typography">опубликовать</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      `}
    );


    return html`
      ${this.styles}
      
      <div class="container">
      
        <div class="navbar-spacer"></div>
        <nav class="navbar">
          <div class="container">
            <ul class="navbar-list">
              <li class="navbar-item"><a class="navbar-link" href="/notes">Конспекты</a></li>
              <li class="navbar-item"><a class="navbar-link" href="/notes/drafts">Черновики</a></li>
              <li class="navbar-item"><a class="navbar-link" href="#">Слайды</a></li>
            </ul>
          </div>
        </nav>
      
        <div class="row">
          <div class="twelve columns um-drafts__submenu">
            <span @click=${this.handleBtnExportAllDrafts.bind(this)} class="um-drafts__export-all">
              <i class="far fa-save fa-2x"></i>
            </span>
      
            <button @click=${this.handleBtnCreateNewDraft.bind(this)}>Новый черновик</button>
          </div>
        </div>
      
        ${draftListEl}
      
      </div>
    `;
  }


  /**
   * Create new draft
   */
  async handleBtnCreateNewDraft() {
    const newDraftId = (await this._storageService.createDraft()).createDraft.id;
    page('/editor/' + newDraftId);
  }


  /**
   * Delete a draft
   * 
   * @param id - draft id
   */
  handleBtnDeleteDraft(id: string) {
    this._storageService.deleteDraft(id)
      .then(
        (d) => {
          this.draftList = this.draftList.filter(draft => draft.id !== d.deleteDraft.id);
        }
      );
  }


  /**
   * Save all drafts as JSON file
   * @param event 
   */
  handleBtnExportAllDrafts(event: MouseEvent) {
    event.preventDefault();

    const content = JSON.stringify(this.draftList);
    const a = document.createElement('a');
    const blob = new Blob([content], { type: 'application/octet-stream' });

    a.href = window.URL.createObjectURL(blob);
    a.download = 'drafts.json';
    a.click();
  }


  /**
   * Open a popover with actions on a draft
   * 
   * @param event - click event
   */
  openPopover(event: MouseEvent) {
    event.preventDefault()
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
    this.querySelectorAll('.popover.open').forEach(
      el => {
        el.classList.remove('open');
      }
    );
  }
}