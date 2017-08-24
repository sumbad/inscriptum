import * as hyperHTML from 'hyperhtml';

import articles from '../../data/articles/articles';



export class ArticlePreviewComponent extends HTMLElement {
    private _template: any;
    private _articleName: string;


    constructor(public article) {
        super();
        // this._template = (scope, tag) => { return tag`<div>${this.articleName}</div><br/>` }//require('./article-preview.components.html');
    }


    connectedCallback() {
        this._render();
    }


    _render() {
        // console.log(1111111, this._template)
        if (typeof this._template !== 'undefined' && typeof this._template === 'function') {
            // console.log(this._template);
            this._template(this, hyperHTML.bind(this));
        }
        // console.log(this._template(this, hyperHTML.bind(this)))
        // hyperHTML.bind(this) `<div>_${ this.name }_</div><br/>`;
        // return this._template(this, hyperHTML.bind(this));
    }



    /**
     * LIFECYCLE
     * Отслеживаемые параметры
     * изменения в данных атрибутах будут непосредственно отслеживаться компонентом
     */
    static get observedAttributes() { return ['article-name']; }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            switch (name) {
                case 'article-name':
                    this.articleName = newValue;
                    break;
            }
        }
    }


    set articleName(val) {
        if (this.articleName !== val) {
            this._articleName = val;
            this.article = articles.find(article => article.name === this.articleName);
            if (this.article) {
                this._template = new Promise((resolve, reject) => { resolve(this.article.preview) }).then(
                    r => {
                        this._template = r;
                        this._render();
                    }
                );
            }
        }
    }
    get articleName() {
        return this._articleName;
    }
}