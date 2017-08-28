import * as hyperHTML from 'hyperhtml';
import 'whatwg-fetch';

import { DateUtilities } from 'utils';

import articles from '../../data/articles/articles';
import { AppRouter } from "router";



export class ArticlePreviewComponent extends HTMLElement {
    private _template: any;
    private _style: any;
    private _shadowRoot: any;
    private _shadowContent: any;
    private _shadowStyle: any;


    constructor(public articleTitle, public articleName, public articleDate) {
        super();
        this._template = require('./article-preview.component.html'); //(scope, tag) => { return tag`<div>${this.articleName}</div><br/>` }//
        this._style = require('./article-preview.component.scss');
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }


    connectedCallback() {
        this._shadowContent = document.createElement('div');
        this._shadowStyle = document.createElement('style');
        this._shadowStyle.textContent = this._style;

        this._shadowRoot.appendChild(this._shadowStyle);
        this._shadowRoot.appendChild(this._shadowContent);

        this._render();
    }


    _render() {
        if (typeof this._template !== 'undefined' && typeof this._template === 'function') {
            this._template(this, hyperHTML.bind(this._shadowContent));
        }
    }

    // href=${`articles/${this.articleName}`}


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