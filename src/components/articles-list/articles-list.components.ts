import * as hyperHTML from 'hyperhtml';
import * as Navigo from 'navigo';

import articles from '../../data/articles/articles';


declare const $: any;

export class ArticlesListComponent extends HTMLElement {
    private _template: any;
    public articlesWire: any[];

    constructor(public saying) {
        super();
        this._template = require('./articles-list.components.html');
    }


    connectedCallback() {
        const articlesList = articles.sort((a, b) => {
            return (b.datePublished.getTime() - a.datePublished.getTime());
        });

        this.articlesWire = articlesList.map(article => {
            return this, hyperHTML.wire() `<article-preview article-name="${article.name}"></article-preview>`;
        });

        this._render();
    }


    _render() {
        return this._template(this, hyperHTML.bind(this));
    }
}