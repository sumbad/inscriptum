import {html, render} from 'lit-html';

import { AbstractRouter, IRouters } from 'components/abstract.router';



class NotesRouter extends AbstractRouter {
  getRouter(): IRouters {
    const rootPath: string = '/notes';

    return {
      rootPath,
      routers: [
        {
          path: '',
          callback: (ctx, next) => //this.$routeDrafts.next({ ctx, next })
          {
            ctx.handled = true;
          }
        },
        {
          path: '/drafts',
          callback: (ctx, next) => //this.$routeDrafts.next({ ctx, next })
          { 
            // this.routerOutlet.innerHTML = '<inscriptum-drafts></inscriptum-drafts>';
            render(html`<inscriptum-drafts></inscriptum-drafts>`, this.routerOutlet);

            import('components/drafts');
            ctx.handled = true;
          }
        },
        {
          path: '*',
          callback: (ctx, next) => {
            if (ctx.handled) {
              ctx.handled = false;
              next();
            } else {
              this.page.replace(rootPath);
            }
          },
        },
      ]
    }
  }

}

export const notesRouter = new NotesRouter();
