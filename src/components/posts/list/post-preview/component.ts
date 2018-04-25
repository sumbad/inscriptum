import 'whatwg-fetch';

import { DateUtilities } from 'utils';
import { Define, UmWebComponent } from 'components/um-web.component';

import articles from 'data/articles/articles';
import template from './template';



@Define('inscriptum-post-preview')
export class PostPreviewComponent extends UmWebComponent {
  public green: 'green';

  
  constructor(public articleTitle, public articleName, public articleDate) {
    super(
      template,
      require('./style.scss'),
      true
    );
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
