import page from 'page';

import { AbstractRoute, IRouters } from 'components/abstract.router';
import { AuthService } from 'auth';
import { StorageService } from 'storage/storage.service';

export type TRootPath = '/articles*' | '/conference*' | '/editor/:id/:flag?' | '/draft/:id' | '/drafts' | '/notes' | '/login' | '*';

export class RootRoute extends AbstractRoute<TRootPath> {
  getRouter(): IRouters<TRootPath> {
    const rootPath: string = '';

    return {
      rootPath,
      routers: [
        {
          path: '/conference*',
          callback: async (ctx: PageJS.Context, next) => {
            if (!this.routerOutlet.hasChildNodes()) {
              const conference = await import('components/conference/component');
              this.routerOutlet.appendChild(new conference.ConferenceComponent());
            }

            ctx.handled = true;
            next();
          },
        },
        {
          /**
           * @deprecated
           */
          path: '/editor/:id/:flag?',
          // path: '/editor*',
          callback: async (ctx: PageJS.Context, next) => {
            if (!this.routerOutlet.hasChildNodes()) {
              await import('components/um-preloader');
              const editor = await import('components/editor');
              const editorComponent = new editor.EditorComponent();

              editorComponent.dataset['id'] = ctx.params.id;
              editorComponent.dataset['flag'] = ctx.params.flag;
              this.routerOutlet.appendChild(editorComponent);
            }

            ctx.handled = true;
            next();
          },
        },
        {
          path: '/draft/:id',
          callback: async (ctx: PageJS.Context) => {
            const tag = 'inscriptum-draft';
            let elConstructor = customElements.get(tag);

            if (elConstructor == null) {
              const { draftElement } = await import('new-components/draft/draft.element');
              elConstructor = draftElement(tag).element as unknown as CustomElementConstructor;
            }

            const draftHTMLElement = new elConstructor();
            draftHTMLElement.dataset['id'] = ctx.params.id;

            this.routerOutlet.replaceChildren(draftHTMLElement);
          },
        },
        {
          path: '/drafts',
          callback: async () => {
            const tag = 'inscriptum-drafts';
            let elConstructor = customElements.get(tag);

            if (elConstructor == null) {
              const { draftListElement } = await import('app/notepad/modules/drafts/draftList.element');
              elConstructor = draftListElement(tag);
            }

            this.routerOutlet.replaceChildren(new elConstructor());
          },
        },
        {
          path: '/notes',
          callback: async () => {
            const tag = 'inscriptum-notes';
            let elConstructor = customElements.get(tag);

            if (elConstructor == null) {
              const { noteListElement } = await import('app/notepad/modules/notes/noteList.element');
              elConstructor = noteListElement(tag);
            }

            this.routerOutlet.replaceChildren(new elConstructor());
          },
        },
        {
          path: '/login',
          callback: async (ctx, next) => {
            const _storageService = new StorageService();
            const _authService = new AuthService(_storageService, `${document.location.origin}/notes`);
            _authService.login();
            ctx.handled = true;
            next();
          },
        },
        {
          path: '*',
          callback: (ctx, next) => {
            if (ctx.handled) {
              ctx.handled = false;
              next();
            } else {
              page.replace('/notes');
            }
          },
        },
      ],
    };
  }
}
