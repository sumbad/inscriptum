(window.webpackJsonp=window.webpackJsonp||[]).push([[20,43],{129:function(e,t,n){"use strict";n.r(t),t.default=(e,t)=>e`
  <div>${{html:t.presentationContent}}</div>
`},88:function(e,t,n){"use strict";n.r(t),n.d(t,"PresentationComponent",(function(){return u}));var o,r=n(68),i=[{name:"webcomponents-common",title:"Web components",datePublished:new Date("2018-02-17")},{name:"mobile",title:"Выбор инструментов создания мобильной версии",datePublished:new Date("2018-06-08")},{name:"graphql-server",title:"API Service - GraphQL Server",datePublished:new Date("2021-03-05")}],a=(n(432),n(102),n(129)),c=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},s=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};let u=o=class extends r.UmWebComponent{constructor(){super(a.default)}static get observedAttributes(){return this.attributes}connectedCallback(){super.connectedCallback(o.attributes);const e=i.find(e=>e.name===this.props["data-name"]);void 0!==e&&this._loadHTML(e.name).then(e=>{this.presentationContent=e,this.render()})}_loadHTML(e){return s(this,void 0,void 0,(function*(){return(yield fetch(`/data/presentations/${e}/template.html`)).text()}))}};u.attributes=["data-name"],u=o=c([Object(r.Define)("inscriptum-presentation")],u)}}]);