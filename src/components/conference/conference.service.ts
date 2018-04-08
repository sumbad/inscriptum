import { Subject } from 'rxjs';
import { AbstractRouter, IRouters } from 'components/abstract.router';



export class ConferenceService extends AbstractRouter {
  goPresentation = new Subject();
  goConference = new Subject();


  getRouter(): IRouters {
    const rootPath: string = '/conference';

    return {
      rootPath,
      routers: [
        {
          path: '/presentation/:id',
          callback: (ctx, next) => this.goPresentation.next({ ctx, next })
        },
        {
          path: '/:id',
          callback: (ctx, next) => this.goConference.next({ ctx, next })
        },
        {
          path: '',
          callback: (ctx, next) => {
            this.goConference.next({ ctx, next });
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