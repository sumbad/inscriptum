import 'whatwg-fetch';

// import articles from '../../data/articles/articles';

import 'presentarium';

import { DateUtilities } from 'utils';
import { PreloaderService } from 'components/um-preloader/service';
import { Define, UmWebComponent } from 'components/um-web.component';


import template from './template';


@Define('inscriptum-presentation')
export class PresentationComponent extends UmWebComponent {
  // static attributes = ['data-name'];
  // static get observedAttributes() { return this.attributes; }

  constructor() {
    super(template, require('./style.scss'));
    // PreloaderService.isAppLoading.next(true);    
  }


  // connectedCallback() {
  //   super.connectedCallback(SlideComponent.attributes);
  //   const article = articles.find(a => a.name === this.props['data-name']);

  //   if (typeof article !== 'undefined') {


  //     this.articleTitle = article.title;
  //     this.articleDate = DateUtilities.formatDate(new Date(article.datePublished), 'dd MMMM YYYY г.');

  //     this._loadHTML(article.name).then(body => {
  //       this.articleContent = body;
  //       this.render();
  //       PreloaderService.isAppLoading.next(false);
  //     });
  //   }
  // }


  // async _loadHTML(name: string) {
  //   return (await fetch(`/data/articles/${name}/template.html`)).text();
  // }

}