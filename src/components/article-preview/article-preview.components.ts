import * as hyperHTML from 'hyperhtml';
import 'whatwg-fetch';


import articles from '../../data/articles/articles';



export class ArticlePreviewComponent extends HTMLElement {
    private _template: any;
    private _articleName: string;


    constructor(public article) {
        super();
        this._template = require('./article-preview.components.html'); //(scope, tag) => { return tag`<div>${this.articleName}</div><br/>` }//
    }


    connectedCallback() {
        this._render();
    }


    _render() {
        // console.log(1111111, this._template)
        if (typeof this._template !== 'undefined' && typeof this._template === 'function') {
            // console.log(this._template);
            this._template(this, hyperHTML.bind(this.attachShadow({mode: 'open'})));
        }
        // console.log(this._template(this, hyperHTML.bind(this)))
        // hyperHTML.bind(this) `<div>_${ this.name }_</div><br/>`;
        // return this._template(this, hyperHTML.bind(this));
    }


    // _loadHTML(url, id) {
    //     let req = new XMLHttpRequest();
    //     req.open('GET', url);
    //     req.send();
    //     req.onload = () => {
    //         $id(id).innerHTML = req.responseText;
    //     }
    // }


    // async _loadPreview(name) {
    //     // The await keyword saves us from having to write a .then() block.
    //     return await fetch(`/${name}/preview.html`);

    //     // The result of the GET request is available in the json variable.
    //     // We return it just like in a regular synchronous function.
    //     // return json;
    // }


    /**
     * LIFECYCLE
     * Отслеживаемые параметры
     * изменения в данных атрибутах будут непосредственно отслеживаться компонентом
     */
    // static get observedAttributes() { return ['article-name']; }
    // attributeChangedCallback(name, oldValue, newValue) {
    //     if (oldValue !== newValue) {
    //         switch (name) {
    //             case 'article-name':
    //                 this.articleName = newValue;
    //                 break;
    //         }
    //     }
    // }


    // set articleName(val) {
    //     if (this.articleName !== val) {
    //         this._articleName = val;
    //         this.article = articles.find(article => article.name === this.articleName);
    //         if (this.article) {
    //             this._template = this._loadPreview(this.article.name).then(
    //                 r => {
    //                     this._template = r;
    //                     this._render();
    //                 }
    //             );
    //         }
    //     }
    // }
    // get articleName() {
    //     return this._articleName;
    // }
}