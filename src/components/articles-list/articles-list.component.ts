import * as hyperHTML from 'hyperhtml';
import * as Navigo from 'navigo';
import 'whatwg-fetch';


import articles from '../../data/articles/articles';


declare const $: any;

export class ArticlesListComponent extends HTMLElement {
    private _template: any;
    public previews;

    constructor(public saying) {
        super();
        this._template = require('./articles-list.component.html');
    }


    connectedCallback() {
        const articlesList = articles.sort((a, b) => {
            return (b.datePublished.getTime() - a.datePublished.getTime());
        });

        this._loadPreviews(articlesList.map(a => a.name)).then(previews => {
            this.previews = previews.map((preview, index) => {
                return hyperHTML.wire() `
                <article-preview article-title="${articlesList[index].title}" 
                                 article-name="${articlesList[index].name}"
                                 article-date="${articlesList[index].datePublished}">
                    ${{ html: preview }}
                </article-preview>`;
            });
            this._render();
        });
    }


    _render() {
        return this._template(this, hyperHTML.bind(this));
    }


    async _loadPreviews(names: string[]) {
        // Promise.all() allows us to send all requests at the same time. 
        let results = await Promise.all(names.map(name => fetch(`/data/articles/${name}/preview.html`)));
        return await Promise.all(results.map(result => result.text()));
    }

}