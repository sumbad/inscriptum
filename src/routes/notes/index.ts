import {html, render} from 'lit-html';
import { Subject } from 'rxjs';

import { AbstractRouter, IRouters } from 'components/abstract.router';



class NotesRouter extends AbstractRouter {
  $routeDrafts = new Subject();

  i = 0

  getRouter(): IRouters {
    const rootPath: string = '/notes';

    return {
      rootPath,
      routers: [
        {
          path: '',
          callback: (ctx, next) => //this.$routeDrafts.next({ ctx, next })
          {
            console.log(111111);
            ctx.handled = true;
          }
        },
        {
          path: '/drafts',
          callback: (ctx, next) => //this.$routeDrafts.next({ ctx, next })
          {
            console.log(222222, this.page['current'], this.i);
            console.log(222222, this.routerOutlet);
            
            // const html = bind(this.routerOutlet);
            // html`<inscriptum-drafts>${this.i++}</inscriptum-drafts>`;

            render(html`<inscriptum-drafts>${this.i++}</inscriptum-drafts>`, this.routerOutlet);

            // this.routerOutlet.innerHTML = '<inscriptum-drafts></inscriptum-drafts>';
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
