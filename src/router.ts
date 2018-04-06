import page from 'page';



export class Router {

  static routing(routers: { path: string; callback: PageJS.Callback }[]) {
    // scheduler will invoke it only after the current code is complete
    // this need to fixed many excutions when using async callback functions
    // https://javascript.info/settimeout-setinterval#splitting-cpu-hungry-tasks
    setTimeout(() => {
      page.stop();

      routers.forEach(router => {
        page(router.path, router.callback);
      });

      // console.log(33333, page.length)

      page.start();
    });
  }

}