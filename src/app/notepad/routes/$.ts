import page from 'page';

import { AbstractRoute, IRouters } from 'components/abstract.router';
import hub from 'hub';
import { AUTH_ACTION } from 'hub/auth/auth.action';
import 'hub/auth/auth.state';

export type TRootPath =
  | '/articles*'
  | '/conference*'
  | '/editor/:id/:flag?'
  | '/draft/:id'
  | '/drafts'
  | '/notes'
  | '/login'
  | '/logout'
  | '*';

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
          path: '/draft/:id',
          callback: async (ctx: PageJS.Context) => {
            const tag = 'inscriptum-draft';
            let ElConstructor = customElements.get(tag);

            if (ElConstructor == null) {
              const { draftElement } = await import('new-components/draft/draft.element');
              ElConstructor = draftElement(tag);
            }

            const draftHTMLElement = new ElConstructor();
            draftHTMLElement.dataset['id'] = ctx.params.id;

            this.routerOutlet.replaceChildren(draftHTMLElement);
          },
        },
        {
          path: '/drafts',
          callback: async () => {
            const tag = 'inscriptum-drafts';
            let ElConstructor = customElements.get(tag);

            if (ElConstructor == null) {
              const { draftListElement } = await import('app/notepad/modules/drafts/draftList.element');
              ElConstructor = draftListElement(tag);
            }

            this.routerOutlet.replaceChildren(new ElConstructor());
          },
        },
        {
          path: '/notes',
          callback: async () => {
            const tag = 'inscriptum-notes';
            let ElConstructor = customElements.get(tag);

            if (ElConstructor == null) {
              const { noteListElement } = await import('app/notepad/modules/notes/noteList.element');
              ElConstructor = noteListElement(tag);
            }

            this.routerOutlet.replaceChildren(new ElConstructor());
          },
        },
        {
          path: '/login',
          callback: async (ctx, next) => {
            hub.dispatch({
              type: AUTH_ACTION.AUTH,
              payload: {},
            });
            ctx.handled = true;
            next();
          },
        },
        {
          path: '/logout',
          callback: async (ctx, next) => {
            hub.dispatch({
              type: AUTH_ACTION.LOGOUT,
              payload: {
                redirectUri: `${document.location.origin}/notes`
              },
            });
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
