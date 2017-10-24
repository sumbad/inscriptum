// import * as hyperHTML from 'hyperhtml';
// import * as Navigo from 'navigo';
// import 'whatwg-fetch';


// import articles from '../../data/articles/articles';
// import { DateUtilities } from "utils";


// declare const $: any;

// export class ArticleComponent extends HTMLElement {
//     private _template: any;

//     constructor(public articleName, public articleContent, public articleTitle, public articleDate) {
//         super();
//         this._template = require('./article.component.html');
//     }


//     connectedCallback() {
//         const article = articles.find(a => a.name === this.articleName);

//         if (typeof article !== 'undefined') {
//             this.articleTitle = article.title;
//             this.articleDate = DateUtilities.formatDate(new Date(article.datePublished), 'dd MMMM YYYY г.');
//         }


//         this._loadHTML(this.articleName).then(body => {
//             // console.log(body)
//             // const content = <HTMLElement>this.querySelector('.entry-content');
//             this.articleContent = body;
//             // content.innerHTML = this.articleContent;
//             this._render();
//         });
//     }


//     _render() {
//         return this._template(this, hyperHTML.bind(this));
//     }


//     async _loadHTML(name: string[]) {
//         // Promise.all() allows us to send all requests at the same time. 
//         let result = await fetch(`/data/articles/${name}/template.html`);

//         return await result.text();
//     }


//     /**
//      * LIFECYCLE
//      * Отслеживаемые параметры
//      * изменения в данных атрибутах будут непосредственно отслеживаться компонентом
//      */
//     static get observedAttributes() { return ['article-name']; }
//     attributeChangedCallback(name, oldValue, newValue) {
//         if (oldValue !== newValue) {
//             switch (name) {
//                 case 'article-name':
//                     this.articleName = newValue;
//                     break;
//             }
//         }
//     }

// }