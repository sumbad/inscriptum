import polyfills from './polyfills';
import { Router } from './router';



const components = [
  'um-app',
  'um-gist',
  'um-preloader',
  'um-articles-list',
  'um-article-preview',
  'um-article',
  'um-editor',
];


polyfills.then(
  async p => {

    Router.initMainRouter();    

    // import all required sub components
    await Promise.all(components.map(
      c => import('./components/' + c)
    ));

    // await all definitions
    await Promise.all(components.map(
      c => customElements.whenDefined(c)
    ));
  }
).catch(e => {
  console.warn(e);
});
