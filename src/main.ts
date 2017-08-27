import './polyfills';

import './styles/main.scss';
import './public/font-awesome/scss/font-awesome.scss';


import { AppComponent } from './components/app/app.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticleComponent } from './components/articles/article.component';
import { GistComponent } from "components/gist/gist.component";



window.addEventListener('WebComponentsReady', function (e) {
    // Регистрация элемента с помощью Сustom Elements API
    window.customElements.define('app-component', AppComponent);
    window.customElements.define('articles-list', ArticlesListComponent);
    window.customElements.define('article-preview', ArticlePreviewComponent);
    window.customElements.define('um-article', ArticleComponent);
    window.customElements.define('um-gist', GistComponent);
});
