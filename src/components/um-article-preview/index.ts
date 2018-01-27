import hyperHTML from 'hyperhtml/esm';
import 'whatwg-fetch';

import { DateUtilities } from 'utils';

import articles from '../../data/articles/articles';
import { AppRouter } from "router";
import { Define, UmWebComponent } from "components/um-web.component";

import template from './template';



@Define('um-article-preview')
export class ArticlePreviewComponent extends UmWebComponent {
  public green: 'green';

  
  constructor(public articleTitle, public articleName, public articleDate) {
    super(
      template,
      require('./style.scss'),
      true
    );
  }


  handleLink(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    AppRouter.router.navigate(href);
  }


  /**
   * LIFECYCLE
   * Отслеживаемые параметры
   * изменения в данных атрибутах будут непосредственно отслеживаться компонентом
   */
  static get observedAttributes() { return ['article-title', 'article-name', 'article-date']; }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case 'article-title':
          this.articleTitle = newValue;
          break;
        case 'article-name':
          this.articleName = newValue;
          break;
        case 'article-date':
          this.articleDate = DateUtilities.formatDate(new Date(newValue), 'dd MMMM YYYY г.');
          break;
      }
    }
  }
}