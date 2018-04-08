import page from 'page';



export class Router {
  static page = page;

  static routing(rootRouter: string, routers: { path: string; callback: PageJS.Callback }[]) {
    // scheduler will invoke it only after the current code is complete
    // this need to fixed many excutions when using async callback functions
    // https://javascript.info/settimeout-setinterval#splitting-cpu-hungry-tasks
    setTimeout(() => {
      Router.page.stop();

      routers.forEach(router => {
        Router.page(rootRouter + router.path, router.callback);
      });

      Router.page.start();
    });
  }
}
