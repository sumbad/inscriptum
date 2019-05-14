import { AbstractElement, Define, state } from 'abstract-element';
import { html } from 'lit-html';
import litRender from 'abstract-element/render/lit';
import { AuthService } from 'auth';
import { StorageService } from 'storage/storage.service';



@Define('inscriptum-menu')
export class MenuComponent extends AbstractElement {
  styles = html`<style>${require('./style.less')}</style>`;

  @state()
  hasAuth = false;


  constructor(
    private _storageService: StorageService = new StorageService(),
    private _authService: AuthService = new AuthService(_storageService)
  ) {
    super(litRender, false);

    this._authService.$authenticated.subscribe(
      hasAuth => {
        this.hasAuth = hasAuth || this.hasAuth;
      }
    )
  }


  render() {
    return html`
      ${this.styles}
      <div class="navbar-spacer"></div>
      <nav class="navbar">
        <div class="container">
          <ul class="navbar-list">
            <li class="navbar-item"><a class="navbar-link" href="/notes">Конспекты</a></li>
            ${ this.hasAuth ? html`<li class="navbar-item"><a class="navbar-link" href="/drafts">Черновики</a></li>` : ''}
            <!-- <li class="navbar-item"><a class="navbar-link" href="#">Слайды</a></li> -->
          </ul>
        </div>
      </nav>
    `;
  }
}