import polyfills from '../../polyfills';
import { AbstractElement, Define, state } from 'abstract-element';
import litRender from 'abstract-element/render/lit';
import { html, TemplateResult } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { TRootPath, RootRoute } from './routes/$';

/**
 * Start app after load polyfills
 */
polyfills
  .then(async () => {
    const rootRoute = new RootRoute();
    await import('components/um-preloader');
    await import('components/menu');
    const main = document.querySelector('main');
    const notepad = new NotepadModule(rootRoute);

    main && main.appendChild(notepad);
  })
  .catch(e => {
    console.warn(e);
  });

/**
 * NotepadModule - main element
 */
@Define('inscriptum-notepad')
class NotepadModule extends AbstractElement<TemplateResult> {
  styles = html`
    <style>
      ${require('./style.less')}
    </style>
  `;

  @state()
  path: TRootPath;

  /**
   * NotepadModule constructor
   *
   * @param _router - notepad router
   */
  constructor(_router: RootRoute) {
    super(litRender, false);
    const rEvent = _router.runCallbackEvent.getValue();
    if (rEvent) {
      this.path = rEvent.path;
    }

    _router.runCallbackEvent.subscribe(
      rEvent => {
        if (rEvent) {
          this.path = rEvent.path;
        }
      },
      e => {
        console.warn(e);
      }
    );
  }

  /**
   * Render template
   */
  render() {
    console.log(this.path);

    switch (this.path) {
      case '/drafts':
      case '/notes':
        return html`
          ${this.styles}
          <div class="container">
            <inscriptum-menu></inscriptum-menu>
            ${this._renderList(this.path.slice(1))}
          </div>
        `;
      default:
        return html``;
    }
  }

  /**
   * Render list drafts or notes
   */
  _renderList(type: string) {
    import(`../notepad/modules/${type}`);

    return unsafeHTML(`<inscriptum-${type}></inscriptum-${type}>`);
  }
}
