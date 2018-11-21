import { Subject } from 'rxjs';
import { AbstractRouter, IRouters } from 'components/abstract.router';



class ConferenceRouter extends AbstractRouter {
  rootPath: string;

  $routePresentation = new Subject();
  $routeConference = new Subject();

  getRouter(): IRouters {
    const rootPath = '/conference';
    this.rootPath = rootPath;

    return {
      rootPath,
      routers: [
        {
          path: '/presentation/:id',
          callback: (ctx, next) => this.$routePresentation.next({ ctx, next })
        },
        {
          path: '/:id',
          callback: (ctx, next) => this.$routeConference.next({ ctx, next })
        },
        {
          path: '',
          callback: (ctx, next) => {
            this.page.replace(rootPath+'/presentation/webcomponents-common');
            // this.$routeConference.next({ ctx, next });
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

export const conferenceRouter = new ConferenceRouter();