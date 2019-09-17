import { AbstractElement, Define, state } from 'abstract-element';
import { TemplateResult, html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { StorageService } from 'storage/storage.service';
import { AuthService } from 'auth';
import litRender from 'abstract-element/render/lit';
import page from 'page';
import { takeWhile } from 'rxjs/operators';

import { dom } from '@fortawesome/fontawesome-svg-core';

import 'components/list';
import { IListItem } from 'components/list';
import { quillDelta2Preview } from 'utils/common';


const isDevMode = process.env.NODE_ENV === 'development';

enum NoteAction {
  edit,
  delete
}


@Define('inscriptum-notes')
export class DraftComponent extends AbstractElement {
  @state()
  $: {
    notes?: IListItem[];
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
      takeWhile(() => this.$.notes === undefined)
    )
    .subscribe(
      (hasAuth) => {
        if (hasAuth!==null) {
          this._storageService.allNotes().then(
            notes => {
              console.log(notes);
              const _notes = notes.allNotes.map(
                item => {
                  const { content, title, image } = quillDelta2Preview(item.content);
                  return {
                    id: item.id,
                    title,
                    content,
                    image,
                    linkUrl: '/note/' + item.name + (isDevMode ? '.html' : ''),
                    linkRel: 'external',
                    actions: this._authService.$authenticated.getValue()
                      ? [{
                        type: NoteAction.edit,
                        label: 'изменить'
                      }]
                      : []
                  }
                }
              );
              this.$ = {
                isPreloader: false,
                notes: _notes
              };
            }
          );
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
      <um-preloader loading=${this.$.isPreloader}>
        <inscriptum-list @action=${this.handleAction.bind(this)} .value=${ifDefined(this.$.notes)}></inscriptum-list>
      </um-preloader>
    `;
  }


  /**
   * Handle note actions
   * 
   * @param type - action type
   * @param id - note id
   */
  handleAction({ detail }: { detail: { type: NoteAction, id: string } }) {
    switch (detail.type) {
      case NoteAction.edit:
        page('/editor/' + detail.id + '/posted');
        break;
    }
  }
}