import 'whatwg-fetch';

import articles from '../../data/articles/articles';
import { DateUtilities } from "utils";
import { PreloaderService } from 'components/um-preloader/service';
import { Define, UmWebComponent } from "components/um-web.component";

declare const $: any;

import template from './template';


@Define('um-article')
export class ArticleComponent extends UmWebComponent {
  static attributes = ['article-name'];
  static get observedAttributes() { return this.attributes; }

  constructor(
    public articleContent,
    public articleTitle,
    public articleDate
  ) {
    super(template);
  }


  connectedCallback() {
    const article = articles.find(a => a.name === this.props['article-name']);

    if (typeof article !== 'undefined') {
      this.articleTitle = article.title;
      this.articleDate = DateUtilities.formatDate(new Date(article.datePublished), 'dd MMMM YYYY г.');

      this._loadHTML(article.name).then(body => {
        // const content = <HTMLElement>this.querySelector('.entry-content');
        this.articleContent = body;
        // content.innerHTML = this.articleContent;
        this.render();
        PreloaderService.isAppLoading.next(false);
      });
    }
  }


  async _loadHTML(name: string) {
    return (await fetch(`/data/articles/${name}/template.html`)).text();

    // return await result.text();
  }

}