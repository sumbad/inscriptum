(window.webpackJsonp=window.webpackJsonp||[]).push([[18,55],{761:function(e,t,n){"use strict";n.r(t);var a=n(550),o=[{name:"webcomponents-common",title:"Web components",datePublished:new Date("2018-02-17")},{name:"mobile",title:"Выбор инструментов создания мобильной версии",datePublished:new Date("2018-06-08")},{name:"mobile-sp3",title:"Спринт 3",datePublished:new Date("2018-08-23")}],i=(n(1234),n(600),n(950));n.d(t,"PresentationComponent",function(){return c});var r,s=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let c=r=class extends a.UmWebComponent{constructor(){super(i.default)}static get observedAttributes(){return this.attributes}connectedCallback(){super.connectedCallback(r.attributes);const e=o.find(e=>e.name===this.props["data-name"]);void 0!==e&&this._loadHTML(e.name).then(e=>{this.presentationContent=e,this.render()})}async _loadHTML(e){return(await fetch(`/data/presentations/${e}/template.html`)).text()}};c.attributes=["data-name"],c=r=s([Object(a.Define)("inscriptum-presentation")],c)},950:function(e,t,n){"use strict";n.r(t),t.default=((e,t)=>e`
  <div>${{html:t.presentationContent}}</div>
`)}}]);