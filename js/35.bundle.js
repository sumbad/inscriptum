(window.webpackJsonp=window.webpackJsonp||[]).push([[35,41,54,56],{50:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},563:function(e,t,n){"use strict";n.r(t),n.d(t,"AbstractRouter",function(){return o});var r=n(85);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.querySelector("main")||document.body;this.routerOutlet=e,this.page=r.a.page;const t=this.getRouter();r.a.routing(t.rootPath,t.routers)}}},750:function(e,t,n){"use strict";n.r(t),t.default=((e,t)=>e`
  <div>${t.routerView}</div>
`)},751:function(e,t,n){"use strict";n.r(t),n.d(t,"conferenceRouter",function(){return c});n(202);var r=n(203),o=n(563);const c=new class extends o.AbstractRouter{constructor(){super(...arguments),this.$routePresentation=new r.Subject,this.$routeConference=new r.Subject}getRouter(){return this.rootPath="/conference",{rootPath:"/conference",routers:[{path:"/presentation/:id",callback:(e,t)=>this.$routePresentation.next({ctx:e,next:t})},{path:"/:id",callback:(e,t)=>this.$routeConference.next({ctx:e,next:t})},{path:"",callback:(e,t)=>{this.page.replace("/conference/presentation/webcomponents-common"),e.handled=!0}},{path:"*",callback:(e,t)=>{e.handled?(e.handled=!1,t()):this.page.replace("/conference")}}]}}}},953:function(e,t,n){"use strict";n.r(t),n.d(t,"ConferenceComponent",function(){return s});var r=n(550),o=n(941),c=n(750),i=n(751);let s=class extends r.UmWebComponent{constructor(){super(c.default),this.routerView="",this.isPreloader=!0}connectedCallback(){const e=this.wire();this.sub=i.conferenceRouter.$routeConference.subscribe(t=>{this.routerView=e`<a href=${i.conferenceRouter.rootPath+"/presentation/webcomponents-common"}>Web Components</a>`,this.render(),t.ctx.handled=!0}),this.sub=i.conferenceRouter.$routePresentation.subscribe(async t=>{await o.a.importWebComponent("inscriptum-presentation","conference/presentation"),this.routerView=e`<inscriptum-presentation data-name=${t.ctx.params.id}></inscriptum-presentation>`,this.render(),t.ctx.handled=!0}),super.connectedCallback()}render(){super.render({isPreloader:this.isPreloader,routerView:this.routerView})}};s=function(e,t,n,r){var o,c=arguments.length,i=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(c<3?o(i):c>3?o(t,n,i):o(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i}([Object(r.Define)("inscriptum-conference")],s)}}]);