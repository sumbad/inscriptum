(window.webpackJsonp=window.webpackJsonp||[]).push([[9,56],{117:function(t,e,r){"use strict";r.r(e),r.d(e,"draftRouter",(function(){return c}));var n=r(22),i=r(32);class s extends i.AbstractRoute{constructor(){super(...arguments),this.$routeEdit=new n.a,this.$routeDraftsList=new n.a}getRouter(){return{rootPath:"/articles/draft",routers:[{path:"/list",callback:(t,e)=>this.$routeDraftsList.next({ctx:t,next:e})},{path:"/*",callback:(t,e)=>{t.handled?(t.handled=!1,e()):this.page.replace("/articles/draft/list")}}]}}}const c=new s},65:function(t,e,r){"use strict";r.r(e),r.d(e,"DraftComponent",(function(){return h}));var n=r(23),i=r(13),s=r(31),c=r(17),o=r(16),a=r(117),u=function(t,e,r,n){var i,s=arguments.length,c=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(c=(s<3?i(c):s>3?i(e,r,c):i(e,r))||c);return s>3&&c&&Object.defineProperty(e,r,c),c},l=function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function c(t){try{a(n.next(t))}catch(t){s(t)}}function o(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(c,o)}a((n=n.apply(t,e||[])).next())}))};let h=class extends n.a{constructor(t=new c.a,e=new o.a(t)){super(s.a,!1),this._storageService=t,this._authService=e,this.html=i.e,this.state={time:(new Date).toLocaleTimeString()},this._subscriptions=[]}set sub(t){this._subscriptions.push(t)}connectedCallback(){super.connectedCallback(),this.sub=a.draftRouter.$routeDraftsList.subscribe(t=>l(this,void 0,void 0,(function*(){yield r.e(25).then(r.bind(null,123)),this.routerView=this.html`<inscriptum-draft-list></inscriptum-draft-list>`,this.render(),t.ctx.handled=!0})))}disconnectedCallback(){this._subscriptions.forEach(t=>t.unsubscribe())}render(){return this.html`
      ${this.routerView}
    `}};u([Object(n.e)()],h.prototype,"routerView",void 0),h=u([Object(n.b)("inscriptum-draft")],h)}}]);