import { Define, UmWebComponent } from "components/um-web.component";

import hyperHTML from 'hyperhtml/esm';
import * as Navigo from 'navigo';
import 'whatwg-fetch';

import articles from '../../data/articles/articles';
import { PreloaderService } from 'components/um-preloader/service';

import template from './template';

declare const $: any;



@Define('um-articles-list')
export class ArticlesListComponent extends UmWebComponent {
  // private _template: any;
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
        const $articlePreview = <Element>document.importNode($umArticlePrevie.content, true).querySelector('um-article-preview');
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


  // render() {
  //   let tempaleConfig = { tag: hyperHTML.bind(this) };
  //   return this._template(tempaleConfig);
  // }


  async _loadPreviews(names: string[]) {
    // Promise.all() allows us to send all requests at the same time. 
    let results = await Promise.all(names.map(name => fetch(`/data/articles/${name}/preview.html`)));
    return await Promise.all(results.map(result => result.text()));
  }

}



// ${this.previews.map((preview, index)=>{console.log(preview); return `
// <um-article-preview id="${this.articlesList[index].name}"
//                     article-title="${this.articlesList[index].title}" 
//                     article-name="${this.articlesList[index].name}" 
//                     article-date="${this.articlesList[index].datePublished}">
//     <div>${preview}</div>
// </um-article-preview>
// `;})}