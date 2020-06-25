import { TemplateResult } from 'lit-html';
import { Define, AbstractElement, state } from 'abstract-element';
import * as litHtml from 'lit-html';
import litRender from 'abstract-element/render/lit';

import { Subscription } from 'rxjs';

import { StorageService } from 'storage/storage.service';
import { AuthService } from 'auth';
import { PreloaderService } from 'components/um-preloader/service';
import { DraftApi } from 'storage/api/draft';



@Define('inscriptum-draft-list')
export class DraftComponent extends AbstractElement {
  html = litHtml.html;

  @state()
  public draftList: DraftApi['Query']['DRAFT_GET_ALL']['drafts'] = [];


  private _subscriptions: Subscription[] = [];
  protected set sub(subscription: Subscription) {
    this._subscriptions.push(subscription);
  }


  constructor(
    private _storageService: StorageService = new StorageService(),
    private _authService: AuthService = new AuthService(_storageService),
  ) {
    super(litRender, false);

    this._authService.$authenticated.subscribe(
      (hasAuth) => {
        if (hasAuth) {
          this._storageService.api.draft.getAll().then(
            drafts => {
              this.draftList = drafts;
              PreloaderService.isAppLoading.next(false);
            }
          );
        }
      }
    );
  }



  render(): TemplateResult {
    const draftListEl = this.draftList.map(
      draft => this.html`
        <section class="entry">
        
          <header class="entry-header">
            <h2 class="entry-title">
              <a href=${'/editor/' + draft.id}> ${draft.content.ops[0].insert} </a> </h2>
            <div class="entry-meta">
              <ul>
                <li>${draft.id}</li>
              </ul>
            </div>
          </header>
        
          <div class="entry-content">
            <slot></slot>
          </div>
        
        </section>
    `);


    return this.html`${draftListEl}`;
  }

}