(window.webpackJsonp=window.webpackJsonp||[]).push([[38,45,46],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"conferenceRouter",(function(){return s}));var r=n(22),o=n(32);class c extends o.AbstractRoute{constructor(){super(...arguments),this.$routePresentation=new r.a,this.$routeConference=new r.a}getRouter(){return this.rootPath="/conference",{rootPath:"/conference",routers:[{path:"/presentation/:id",callback:(e,t)=>this.$routePresentation.next({ctx:e,next:t})},{path:"/:id",callback:(e,t)=>this.$routeConference.next({ctx:e,next:t})},{path:"",callback:(e,t)=>{this.page.replace("/conference/presentation/webcomponents-common"),e.handled=!0}},{path:"*",callback:(e,t)=>{e.handled?(e.handled=!1,t()):this.page.replace("/conference")}}]}}}const s=new c},120:function(e,t,n){"use strict";n.r(t),n.d(t,"ConferenceComponent",(function(){return u}));var r=n(45),o=n(107),c=n(99),s=n(100),i=function(e,t,n,r){var o,c=arguments.length,s=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(c<3?o(s):c>3?o(t,n,s):o(t,n))||s);return c>3&&s&&Object.defineProperty(t,n,s),s},a=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function s(e){try{a(r.next(e))}catch(e){c(e)}}function i(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((r=r.apply(e,t||[])).next())}))};let u=class extends r.UmWebComponent{constructor(){super(c.default),this.routerView="",this.isPreloader=!0}connectedCallback(){const e=this.wire();this.sub=s.conferenceRouter.$routeConference.subscribe(t=>{this.routerView=e`<a href=${s.conferenceRouter.rootPath+"/presentation/webcomponents-common"}>Web Components</a>`,this.render(),t.ctx.handled=!0}),this.sub=s.conferenceRouter.$routePresentation.subscribe(t=>a(this,void 0,void 0,(function*(){yield o.a.importWebComponent("inscriptum-presentation","conference/presentation"),this.routerView=e`<inscriptum-presentation data-name=${t.ctx.params.id}></inscriptum-presentation>`,this.render(),t.ctx.handled=!0}))),super.connectedCallback()}render(){super.render({isPreloader:this.isPreloader,routerView:this.routerView})}};u=i([Object(r.Define)("inscriptum-conference")],u)},99:function(e,t,n){"use strict";n.r(t),t.default=(e,t)=>e`
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
  <div>${t.routerView}</div>
`}}]);