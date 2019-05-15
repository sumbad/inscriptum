import polyfills from '../../polyfills';
import { AbstractElement, Define, state } from 'abstract-element';
import litRender from 'abstract-element/render/lit';
import { html, TemplateResult } from 'lit-html';
import { TRootPath, RootRoute } from './routes/$';



polyfills.then(
  async () => {
    const rootRoute = new RootRoute();
    await import('components/um-preloader');
    await import('components/menu');
    const main = document.querySelector('main');
    const notepad = new NotepadModule(rootRoute);

    main && main.appendChild(notepad);
  }
).catch(e => {
  console.warn(e);
});


@Define('inscriptum-notepad')
class NotepadModule extends AbstractElement {
  styles = html`
    <style>${require('./skeleton.less')}</style>
  `;

  @state()
  routerOutletTemplate: TemplateResult;


  constructor(_router: RootRoute) {
    super(litRender, false);
    const rEvent = _router.runCallbackEvent.getValue();

    if (rEvent) {
      this._setRouterOutlet(rEvent.path);
    }

    _router.runCallbackEvent.subscribe(
      rEvent => {
        if (rEvent) {
          this._setRouterOutlet(rEvent.path);
        }
      },
      e => {
        console.warn(e);
      }
    );
  }


  render() {
    return html`
      ${this.styles}
      <div class="container">
        <inscriptum-menu></inscriptum-menu>
        ${this.routerOutletTemplate}
      </div>
    `;
  }


  _setRouterOutlet(path: TRootPath) {
    switch (path) {
      case '/drafts':
        import('../notepad/modules/drafts');
        this.routerOutletTemplate = html`<inscriptum-drafts></inscriptum-drafts>`;
        break;
      case '/notes':
        import('../notepad/modules/notes');
        this.routerOutletTemplate = html`<inscriptum-notes></inscriptum-notes>`;
        break;
    }
  }
}