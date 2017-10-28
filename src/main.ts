import polyfills from './polyfills';

import './styles/main.scss';


const components = [
    'um-app',
    'um-articles-list',
    'um-article-preview',
    // 'um-article',
    // 'um-gist',
    // 'um-editor',
    // 'um-spinner-round',
];


polyfills.then(
    async p => {
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