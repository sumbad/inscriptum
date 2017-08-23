import './polyfills';

import './styles/main.scss';
import './public/font-awesome/scss/font-awesome.scss';


import { AppComponent } from './components/app/app.components';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.components';



window.addEventListener('WebComponentsReady', function (e) {
    // Регистрация элемента с помощью Сustom Elements API
    window.customElements.define('app-component', AppComponent);
    window.customElements.define('article-preview', ArticlePreviewComponent);
});
