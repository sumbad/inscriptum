import HyperHTML from 'hyperhtml/esm';

import polyfills from './polyfills';
import { Router } from './router';
import Tools from 'utils/tools';
import page from 'page';


let mainRouter;
const mainElement = document.querySelector('main');

if (mainElement !== null) {
  const html = HyperHTML.bind(mainElement);

  const articles = async (ctx: PageJS.Context, next) => {
    await import('./components/posts/component');
    await import('./components/um-preloader');

    html`
      <link href="/css/fontawesome_all.css" rel="stylesheet" />
      <inscriptum-posts></inscriptum-posts>
    `;

    ctx.handled = true;
    next();
  };

  const conference = async (ctx, next) => {
    await import('./components/conference/component');

    html`
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
      <inscriptum-conference></inscriptum-conference>
    `;

    ctx.handled = true;
    next();
  };

  mainRouter = [
    {
      path: '/conference*',
      callback: conference
    },
    {
      path: '/articles*',
      callback: articles,
    },
    {
      path: '*',
      callback: (ctx, next) => {
        if (ctx.handled) {
          ctx.handled = false;
          next();
        } else {
          page.replace('/articles');
        }
      },
    },
  ];

};


polyfills.then(
  async p => {
    Router.routing('', mainRouter);
  }
).catch(e => {
  console.warn(e);
});