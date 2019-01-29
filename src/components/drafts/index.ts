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
    </style>
  `;

  // private _subscriptions: Subscription[] = [];
  // protected set sub(subscription: Subscription) {
  //   this._subscriptions.push(subscription);
  // }


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
              // PreloaderService.isAppLoading.next(false);
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
            previewContent += '\n' + value.insert;
          }
        }

        previewContent = previewContent.trim() + '...';

        return html`
          <div class="docs-section" id="intro">
            <h6 class="docs-header">${draft.contents.ops[0].insert}</h6>
            <p class="docs-preview">${previewContent}</p>
            <p>
              <code>${draft.id}</code> <a class="button" href=${'/editor/' + draft.id}>Редактировать</a>
            </p>
          </div>
      `}
    );


    return html`
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
      ${this.styles}
      
      <div class="container">
      
        <div class="navbar-spacer"></div>
        <nav class="navbar">
          <div class="container">
            <ul class="navbar-list">
              <li class="navbar-item"><a class="navbar-link" href="#intro">Intro</a></li>
              <li class="navbar-item">
                <a class="navbar-link" href="#" data-popover="#codeNavPopover">Code</a>
                <div id="codeNavPopover" class="popover">
                  <ul class="popover-list">
                    <li class="popover-item">
                      <a class="popover-link" href="#grid">Grid</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="#typography">Typography</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="#buttons">Buttons</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="#forms">Forms</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="#lists">Lists</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="#code">Code</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="#tables">Tables</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="#queries">Queries</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="#utilities">Utilities</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="navbar-item"><a class="navbar-link" href="#examples">Examples</a></li>
              <li class="navbar-item">
                <a class="navbar-link" href="#" data-popover="#moreNavPopover">More</a>
                <div id="moreNavPopover" class="popover">
                  <ul class="popover-list">
                    <li class="popover-item">
                      <a class="popover-link" href="https://github.com/dhg/Skeleton">On Github</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="https://github.com/dhg/Skeleton#browser-support">Browsers</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="https://github.com/dhg/Skeleton#license">License</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="https://github.com/dhg/Skeleton#extensions">Extensions</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="https://github.com/dhg/Skeleton/releases">Versions</a>
                    </li>
                    <li class="popover-item">
                      <a class="popover-link" href="https://github.com/dhg/Skeleton#colophon">Colophon</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      
        ${draftListEl}
      
      </div>
    `;
  }
}