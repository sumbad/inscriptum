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


  constructor() {
    const router = this.getRouter();
    Router.routing(router.rootPath, router.routers);

    // console.log(this.page['callbacks']);
  }


  abstract getRouter(): IRouters;
}
