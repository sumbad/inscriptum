"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[8345,5924],{28345:(e,t,n)=>{n.r(t),n.d(t,{PresentationComponent:()=>c});var r=n(93625);const a=[{name:"webcomponents-common",title:"Web components",datePublished:new Date("2018-02-17")},{name:"mobile",title:"Выбор инструментов создания мобильной версии",datePublished:new Date("2018-06-08")},{name:"graphql-server",title:"API Service - GraphQL Server",datePublished:new Date("2021-03-05")}];n(30968),n(57147);var o,i=n(5924);let c=o=class extends r.UmWebComponent{constructor(){super(i.default)}static get observedAttributes(){return this.attributes}connectedCallback(){super.connectedCallback(o.attributes);const e=a.find((e=>e.name===this.props["data-name"]));void 0!==e&&this._loadHTML(e.name).then((e=>{this.presentationContent=e,this.render()}))}_loadHTML(e){return t=this,n=void 0,a=function*(){return(yield fetch(`/data/presentations/${e}/template.html`)).text()},new((r=void 0)||(r=Promise))((function(e,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function c(e){try{s(a.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,c)}s((a=a.apply(t,n||[])).next())}));var t,n,r,a}};c.attributes=["data-name"],c=o=function(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}([(0,r.Define)("inscriptum-presentation")],c)},5924:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=(e,t)=>e`
  <div>${{html:t.presentationContent}}</div>
`}}]);