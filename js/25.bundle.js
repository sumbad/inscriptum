(window.webpackJsonp=window.webpackJsonp||[]).push([[25,26,31,33],{529:function(e,t,n){"use strict";n.r(t),n.d(t,"AbstractRouter",function(){return o});var r=n(78);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.querySelector("main")||document.body;this.routerOutlet=e,this.page=r.a.page;const t=this.getRouter();r.a.routing(t.rootPath,t.routers)}}},588:function(e,t,n){"use strict";n.r(t),t.default=((e,t)=>e`
  <div>${t.routerView}</div>
`)},589:function(e,t,n){"use strict";n.r(t),n.d(t,"conferenceRouter",function(){return c});n(203);var r=n(201),o=n(529);const c=new class extends o.AbstractRouter{constructor(){super(...arguments),this.$routePresentation=new r.Subject,this.$routeConference=new r.Subject}getRouter(){return this.rootPath="/conference",{rootPath:"/conference",routers:[{path:"/presentation/:id",callback:(e,t)=>this.$routePresentation.next({ctx:e,next:t})},{path:"/:id",callback:(e,t)=>this.$routeConference.next({ctx:e,next:t})},{path:"",callback:(e,t)=>{this.page.replace("/conference/presentation/webcomponents-common"),e.handled=!0}},{path:"*",callback:(e,t)=>{e.handled?(e.handled=!1,t()):this.page.replace("/conference")}}]}}}},632:function(e,t,n){"use strict";n.r(t),n.d(t,"ConferenceComponent",function(){return i});var r=n(522),o=n(614),c=n(588),s=n(589);let i=class extends r.UmWebComponent{constructor(){super(c.default),this.routerView="",this.isPreloader=!0}connectedCallback(){const e=this.wire();this.sub=s.conferenceRouter.$routeConference.subscribe(t=>{this.routerView=e`<a href=${s.conferenceRouter.rootPath+"/presentation/webcomponents-common"}>Web Components</a>`,this.render(),t.ctx.handled=!0}),this.sub=s.conferenceRouter.$routePresentation.subscribe(async t=>{await o.a.importWebComponent("inscriptum-presentation","conference/presentation"),this.routerView=e`<inscriptum-presentation data-name=${t.ctx.params.id}></inscriptum-presentation>`,this.render(),t.ctx.handled=!0}),super.connectedCallback()}render(){super.render({isPreloader:this.isPreloader,routerView:this.routerView})}};i=function(e,t,n,r){var o,c=arguments.length,s=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(c<3?o(s):c>3?o(t,n,s):o(t,n))||s);return c>3&&s&&Object.defineProperty(t,n,s),s}([Object(r.Define)("inscriptum-conference")],i)}}]);