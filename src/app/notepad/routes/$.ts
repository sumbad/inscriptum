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
          path: '/articles*',
          callback: async (ctx: PageJS.Context, next) => {
            if (!this.routerOutlet.hasChildNodes()) {
              await import('components/um-preloader');
              const posts = await import('components/posts/component');
              this.routerOutlet.appendChild(new posts.PostsComponent());
            }
            ctx.handled = true;
            next();
          },
        },
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
          callback: async (ctx: PageJS.Context, next) => {
            if (!this.routerOutlet.hasChildNodes()) {
              const { draftElement } = await import('new-components/draft/draft');
              const draftHTMLElement = new (draftElement('inscriptum-draft').element)();
              draftHTMLElement.dataset['id'] = ctx.params.id;

              this.routerOutlet.appendChild(draftHTMLElement);
            }

            ctx.handled = true;
            next();
          },
        },
        {
          path: '/drafts',
          // callback: async (ctx, next) => {
          //   this.runCallback.next({ path: '/drafts', ctx });
          //   // // if (!this.routerOutlet.hasChildNodes()) {
          //   //   await import('components/um-preloader');
          //   //   import('../modules/drafts');
          //   //   render(html`<inscriptum-drafts></inscriptum-drafts>`, this.routerOutlet);
          //   // // }

          //   ctx.handled = true;
          //   // // next();
          // },
        },
        {
          path: '/notes',
          // callback: async (ctx, next) => {
          //   // if (!this.routerOutlet.hasChildNodes()) {
          //   await import('../../../components/um-preloader');
          //   await import('../modules/notes');
          //   render(html`<inscriptum-notes></inscriptum-notes>`, this.routerOutlet);
          //   // }

          //   ctx.handled = true;
          //   // next();
          // },
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
              page.replace('/articles');
            }
          },
        },
      ],
    };
  }
}

// export const rootRoute = new RootRoute();
