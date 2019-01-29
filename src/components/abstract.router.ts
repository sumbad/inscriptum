import { Router } from 'router';



export interface IRouter {
  path: string;
  callback: PageJS.Callback
}



export interface IRouters {
  rootPath: string;
  routers: IRouter[];
}



export abstract class AbstractRouter {
  page = Router.page;


  constructor(public routerOutlet: Element = document.querySelector('main') || document.body) {
    const router = this.getRouter();
    Router.routing(router.rootPath, router.routers);

    // console.log(this.page['current']);
    // console.log(this.page['callbacks']);
  }


  abstract getRouter(): IRouters;
}
