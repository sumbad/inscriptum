import page from 'page';

export class Router {
  static page = page;

  static routing<T>(rootRouter: string, routers: { path: T; callback: PageJS.Callback }[]) {
    // scheduler will invoke it only after the current code is complete
    // this is needed to fixed many executions when using async callback functions
    // https://javascript.info/settimeout-setinterval#splitting-cpu-hungry-tasks
    setTimeout(() => {
      Router.page.stop();

      routers.forEach((router) => {
        Router.page(rootRouter + router.path, router.callback);
      });

      Router.page.start();
    });
  }
}
