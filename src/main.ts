import polyfills from './polyfills';

import './styles/main.scss';
import './public/font-awesome/scss/font-awesome.scss';

const components = [
    'um-app',
    'um-articles-list',
    'um-article-preview',
    'um-article',
    'um-gist',
];


// window.addEventListener('WebComponentsReady', (e) => {
polyfills.then(
    async p => {


        // await import('./components/um-app').then(
        //     c => {
        //         customElements.whenDefined('um-app');
        //     }
        // );
        // await import('./components/um-articles-list').then(
        //     c => {
        //         customElements.whenDefined('um-articles-list');
        //     }
        // );
        // await import('./components/um-article-preview').then(
        //     c => {
        //         customElements.whenDefined('um-article-preview');
        //     }
        // );
        // await import('./components/um-article').then(
        //     c => {
        //         customElements.whenDefined('um-article');
        //     }
        // );
        // await import('./components/um-gist').then(
        //     c => {
        //         customElements.whenDefined('um-gist');
        //     }
        // );

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
    console.log(e);
});
// });


// import { AppComponent } from './components/app/app.component';
// import { ArticlesListComponent } from './components/articles-list/articles-list.component';
// import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
// import { ArticleComponent } from './components/articles/article.component';
// import { GistComponent } from "components/gist/gist.component";



// window.addEventListener('WebComponentsReady', function (e) {
//     // Регистрация элемента с помощью Сustom Elements API
//     window.customElements.define('app-component', AppComponent);
//     window.customElements.define('articles-list', ArticlesListComponent);
//     window.customElements.define('article-preview', ArticlePreviewComponent);
//     window.customElements.define('um-article', ArticleComponent);
//     window.customElements.define('um-gist', GistComponent);
// });





//////////////////////////////////////////////////////////////////////////////////
// v1
//
// import('@webcomponents/webcomponentsjs/custom-elements-es5-adapter').then(
//     async p => {
//         const AppComponent = await (await import('./components/app/app.component')).AppComponent;
//         const ArticlesListComponent = await (await import('./components/articles-list/articles-list.component')).ArticlesListComponent;
//         const ArticlePreviewComponent = await (await import('./components/article-preview/article-preview.component')).ArticlePreviewComponent;
//         const ArticleComponent = await (await import('./components/articles/article.component')).ArticleComponent;
//         const GistComponent = await (await import("components/gist/gist.component")).GistComponent;

//         window.addEventListener('WebComponentsReady', function (e) {
//             // Регистрация элемента с помощью Сustom Elements API
//             window.customElements.define('app-component', AppComponent);
//             window.customElements.define('articles-list', ArticlesListComponent);
//             window.customElements.define('article-preview', ArticlePreviewComponent);
//             window.customElements.define('um-article', ArticleComponent);
//             window.customElements.define('um-gist', GistComponent);
//         });
//     }
// );


////////////////////////////////////////////////////////////////////////////////////
// v2
//
// const components = [
//     'um-app',
//     'um-articles-list',
//     'um-article-preview',
//     'um-article',
//     'um-gist',
// ];

// import('@webcomponents/webcomponentsjs/custom-elements-es5-adapter').then(
//     async p => {

//         // import all required sub components
//         await Promise.all(components.map(
//             c => import('./components/' + c)
//         ));

//         // await all definitions
//         await Promise.all(components.map(
//             c => customElements.whenDefined(c)
//         ));
//     }
// );