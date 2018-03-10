import page from 'page';
import HyperHTML from 'hyperhtml/esm';



export class Router {


  static initMainRouter(): void {
    const mainElement = document.querySelector('main');

    if (mainElement !== null) {

      const html = HyperHTML.bind(mainElement);

      const articles = (ctx, next) => {
        html`<um-app></um-app>`;
        next();
      };
      const presentation = async (ctx, next) => {
        await import('./components/presentation');
        html`
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
          <inscriptum-presentation></inscriptum-presentation>
        `;
      };

      const mainRouter = [
        {
          path: '/presentation',
          callback: presentation
        },
        {
          path: '/articles',
          callback: articles,
        },
        {
          path: '*',
          callback: articles,
        },
      ];

      Router.routing(mainRouter);
    }

  }


  static routing(routers: { path: string; callback: PageJS.Callback }[]) {
    page.stop();

    routers.forEach(router => {
      page(router.path, router.callback);
    });

    page.start();
  }

}