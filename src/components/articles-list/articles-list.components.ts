import * as hyperHTML from 'hyperhtml';
import * as Navigo from 'navigo';
import 'whatwg-fetch';


import articles from '../../data/articles/articles';


declare const $: any;

export class ArticlesListComponent extends HTMLElement {
    private _template: any;
    public previews;
    // public articlePreview;

    constructor(public saying) {
        super();
        this._template = require('./articles-list.components.html');
    }


    connectedCallback() {
        const articlesList = articles.sort((a, b) => {
            return (b.datePublished.getTime() - a.datePublished.getTime());
        });

        // this.articlesWire = articlesList.map(article => {
        //     this._loadPreviews(article.name).then(r => {
        //         console.log(1111111111, r)
        //         return hyperHTML.wire() `${r}`;
        //     })
        // });


        this._loadPreviews(articlesList.map(a => a.name)).then(previews => {
            console.log(previews)
            this.previews = previews.map(preview=>{
                return hyperHTML.wire() `<article-preview>${{html:preview}}</article-preview>`;
            });
            this._render();
            // results.forEach(result => {
            //     result.text().then(body =>)
            // });
        });

        


    }


    _render() {
        return this._template(this, hyperHTML.bind(this));
    }


    async _loadPreviews(names: string[]) {

        // Promise.all() allows us to send all requests at the same time. 
        let results = await Promise.all(names.map(name => fetch(`/data/articles/${name}/preview.html`)));

        return await Promise.all(results.map(result => result.text()));

        // results.forEach(result => {
        //     result.text().then(body =>console.log(body));
        // });

        // The await keyword saves us from having to write a .then() block.
        // return await fetch(`/data/articles/${name}/preview.html`);

        // The result of the GET request is available in the json variable.
        // We return it just like in a regular synchronous function.
        // return json;
    }

}