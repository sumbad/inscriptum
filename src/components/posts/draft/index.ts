import { TemplateResult } from 'lit-html';
import { Define, AbstractElement, state } from 'abstract-element';
import * as litHtml from 'lit-html';
import litRender from 'abstract-element/render/lit';

import { Subscription } from 'rxjs';

import { StorageService } from 'storage/storage.service';
import { AuthService } from 'auth';

import { draftRouter } from './router';



@Define('inscriptum-draft')
export class DraftComponent extends AbstractElement {
  html = litHtml.html;

  state = {
    time: new Date().toLocaleTimeString()
  };

  @state()
  public routerView: TemplateResult;


  private _subscriptions: Subscription[] = [];
  protected set sub(subscription: Subscription) {
    this._subscriptions.push(subscription);
  }


  constructor(
    private _storageService: StorageService = new StorageService(),
    private _authService: AuthService = new AuthService(_storageService, 'http://localhost:3000/articles/draft/list'),
  ) {
    super(litRender, false);
  }


  connectedCallback() {
    super.connectedCallback();

    this.sub = draftRouter.$routeDraftsList.subscribe(async (d: { ctx, next }) => {      
      await import('./list');
      this.routerView = this.html`<inscriptum-draft-list></inscriptum-draft-list>`;
      this.render();

      d.ctx.handled = true;
    });
  }


  /**
   * LIFECYCLE
   * Remove Custom element from page
   */
  disconnectedCallback() {
    this._subscriptions.forEach(s => s.unsubscribe());
  }



  render(): TemplateResult {
    return this.html`
      ${this.routerView}
    `;
  }
}