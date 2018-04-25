import { Define, UmWebComponent } from 'components/um-web.component';

import 'whatwg-fetch';

import articles from 'data/articles/articles';
import { PreloaderService } from 'components/um-preloader/service';

import template from './template';



@Define('inscriptum-posts-list')
export class PostsListComponent extends UmWebComponent {
  public articlesList: { name: string; title: string; datePublished: Date; }[] = [];
  public previews: any[] = [];


  constructor(public saying) {
    super(template);
    
    this.articlesList = articles.sort((a, b) => {
      return (b.datePublished.getTime() - a.datePublished.getTime());
    });   
  }


  connectedCallback() {
    super.connectedCallback();

    const $umArticlePrevie = <HTMLTemplateElement>this.querySelector('#umArticlePreview');
    this._loadPreviews(this.articlesList.map(a => a.name)).then(previews => {

      this.previews = previews.map((body, index) => {
        const $articlePreview = <Element>document.importNode($umArticlePrevie.content, true).querySelector('inscriptum-post-preview');
        $articlePreview.setAttribute('article-title', this.articlesList[index].title);
        $articlePreview.setAttribute('article-name', this.articlesList[index].name);
        $articlePreview.setAttribute('article-date', this.articlesList[index].datePublished.toDateString());
        $articlePreview.innerHTML = body;

        return $articlePreview;
      })

      this.render();

      PreloaderService.isAppLoading.next(false);
    });
  }


  async _loadPreviews(names: string[]) {    
    // Promise.all() allows us to send all requests at the same time. 
    let results = await Promise.all(names.map(name => fetch(`/data/articles/${name}/preview.html`)));
    return await Promise.all(results.map(result => result.text()));
  }

}