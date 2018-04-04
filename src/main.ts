import HyperHTML from 'hyperhtml/esm';

import polyfills from './polyfills';
import { Router } from './router';
import Tools from 'utils/tools';



let mainRouter;
const mainElement = document.querySelector('main');

if (mainElement !== null) {
  const html = HyperHTML.bind(mainElement);

  const articles = async (ctx, next) => {
    await Tools.importWebComponent('inscriptum-posts', 'posts');
    await Tools.importWebComponent('um-preloader', 'um-preloader');

    html`
      <link href="/css/fontawesome_all.css" rel="stylesheet" />
      <inscriptum-posts></inscriptum-posts>
    `;
    next();
  };

  const conference = async (ctx, next) => {
    await Tools.importWebComponent('inscriptum-conference', 'conference');
    html`
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
      <inscriptum-conference></inscriptum-conference>
    `;
  };
  
  mainRouter = [
    {
      path: '/conference',
      callback: conference
    },
    {
      path: '/conference/presentation',
      callback: conference
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

};


polyfills.then(
  async p => {
    Router.routing(mainRouter);
  }
).catch(e => {
  console.warn(e);
});