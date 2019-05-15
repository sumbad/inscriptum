import { Router } from 'router';
import { Subject, BehaviorSubject } from 'rxjs';



export interface IRouter<T> {
  path: T;
  callback?: PageJS.Callback
}


export interface IRouters<T> {
  rootPath: string;
  routers: IRouter<T>[];
}



export abstract class AbstractRoute<T=string> {
  page = Router.page;
  runCallbackEvent = new BehaviorSubject<{ path: T, ctx: PageJS.Context, next: () => any } | undefined>(undefined);


  constructor(public routerOutlet: Element = document.querySelector('main') || document.body) {
    const router = this.getRouter();

    const defaultCallback = (ctx: PageJS.Context, next: () => any) => {
      this.runCallbackEvent.next({ path: ctx.path as unknown as T, ctx, next });
      ctx.handled = true;
    };

    const routers = router.routers.map(
      router => ({
        path: router.path,
        callback: router.callback || defaultCallback
      })
    );
    Router.routing(router.rootPath, routers);

    // console.log(this.page['current']);
    // console.log(this.page['callbacks']);
  }


  abstract getRouter(): IRouters<T>;
}
