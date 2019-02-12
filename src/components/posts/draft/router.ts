import { Subject } from 'rxjs';
import { AbstractRouter, IRouters } from 'components/abstract.router';



class DraftRouter extends AbstractRouter {
  $routeEdit = new Subject();
  $routeDraftsList = new Subject();


  getRouter(): IRouters {
    const rootPath = '/articles/draft';

    return {
      rootPath,
      routers: [
        {
          path: '/list',
          callback: (ctx, next) => this.$routeDraftsList.next({ ctx, next })
        },
        {
          path: '/*',
          callback: (ctx, next) => {
            if (ctx.handled) {
              ctx.handled = false;
              next();
            } else {
              this.page.replace(rootPath + '/list');
            }
          },
        },
      ]
    }
  }

}

export const draftRouter = new DraftRouter();