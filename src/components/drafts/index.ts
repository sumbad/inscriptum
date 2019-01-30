import { AbstractElement, Define, state } from 'abstract-element';
import { TemplateResult, html } from 'lit-html';
import { StorageService } from 'storage/storage.service';
import { AuthService } from 'auth';
import litRender from 'abstract-element/render/lit';


@Define('inscriptum-drafts')
export class DraftsComponent extends AbstractElement {
  @state()
  public draftList: any[] = [];

  styles = html`
    <style>
      ${require('./styles/normalize.css')}
      ${require('./styles/skeleton.css')}
      ${require('./styles/custom.css')}
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


  connectedCallback() {
    super.connectedCallback();

    this._authService.$authenticated.subscribe(
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
    )
  }


  render(): TemplateResult {
    const draftListEl = this.draftList.map(
      draft => {
        let previewContent: string = draft.contents.ops[1].insert;

        for (const [index, value] of draft.contents.ops.entries()) {
          if (index > 1) {
            if (previewContent.length > 100) {
              break;
            }
            previewContent += ' ' + value.insert;
          }
        }

        previewContent = previewContent.trim() + '...';

        return html`
          <div class="um-drafts__item">
            <a class="um-drafts__item-link" href=${'/editor/' + draft.id}>
              <h6 class="docs-header">${draft.contents.ops[0].insert}</h6>
              <p class="docs-preview">${previewContent}</p>
            </a>
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
            <button>Новый черновик</button>
          </div>
        </div>
      
        ${draftListEl}
      
      </div>
    `;
  }
}