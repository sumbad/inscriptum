import { Subject } from 'rxjs';
import { AbstractRoute, IRouters } from 'components/abstract.router';



class PostRouter extends AbstractRoute {
  $routePost = new Subject();
  $routePostsList = new Subject();
  $routeDraft = new Subject();


  getRouter(): IRouters {
    const rootPath: string = '/articles';

    return {
      rootPath,
      routers: [
        {
          path: '/draft/*',
          callback: (ctx, next) => this.$routeDraft.next({ ctx, next })
        },
        {
          path: '/:id',
          callback: (ctx, next) => this.$routePost.next({ ctx, next })
        },
        {
          path: '',
          callback: (ctx, next) => this.$routePostsList.next({ ctx, next })
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

export const postRouter = new PostRouter();