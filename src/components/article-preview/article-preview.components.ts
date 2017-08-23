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
        if (typeof this._template !== 'undefined') {
            console.log(this._template);
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
            console.log(22222222, this.articleName)
            this.article = articles.find(article => article.name===this.articleName);
            if (this.article) {
                this._template = this.article.preview;
            }
            this._render();
        }
    }
    get articleName() {
        return this._articleName;
    }
}