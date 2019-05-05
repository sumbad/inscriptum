import page from 'page';
import { html, render } from 'lit-html';

import { AbstractRoute, IRouters } from 'components/abstract.router';



class RootRoute extends AbstractRoute {
  getRouter(): IRouters {
    const rootPath: string = '';

    return {
      rootPath,
      routers: [
        {
          path: '/articles*',
          callback: async (ctx: PageJS.Context, next) => {
            if (!this.routerOutlet.hasChildNodes()) {
              await import('../components/um-preloader');
              const posts = await import('../components/posts/component');
              this.routerOutlet.appendChild(new posts.PostsComponent());
            }
            ctx.handled = true;
            next();
          }
        },
        {
          path: '/conference*',
          callback: async (ctx: PageJS.Context, next) => {
            if (!this.routerOutlet.hasChildNodes()) {
              const conference = await import('../components/conference/component');
              this.routerOutlet.appendChild(new conference.ConferenceComponent());
            }

            ctx.handled = true;
            next();
          }
        },
        {
          path: '/editor/:id/:flag?',
          // path: '/editor*',
          callback: async (ctx: PageJS.Context, next) => {
            if (!this.routerOutlet.hasChildNodes()) {
              await import('../components/um-preloader');
              const editor = await import('../components/editor');
              const editorComponent = new editor.EditorComponent();

              editorComponent.dataset['id'] = ctx.params.id;
              editorComponent.dataset['flag'] = ctx.params.flag;
              this.routerOutlet.appendChild(editorComponent);
            }

            ctx.handled = true;
            next();
          }
        },
        {
          path: '/notes*',
          callback: async (ctx, next) => {
            if (!this.routerOutlet.hasChildNodes()) {
              await import('../components/um-preloader');
              await import('./notes');
            }

            ctx.handled = true;
            next();
          },
        },
        // {
        //   path: '/note*',
        //   callback: async (ctx, next) => {

        //     // if (!this.routerOutlet.hasChildNodes()) {
        //     //   await import('../components/um-preloader');
        //     //   await import('./notes');
        //     // }
        //     await import('../note');
        //     ctx.handled = true;
        //     next();
        //   },
        // },
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
      ]
    }
  }

}

export const rootRoute = new RootRoute();
