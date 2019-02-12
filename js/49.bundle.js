(window.webpackJsonp=window.webpackJsonp||[]).push([[49,25,26,31,33],{522:function(t,e,s){"use strict";s.r(e),s.d(e,"UmWebComponent",function(){return r}),s.d(e,"Define",function(){return n});s(202);var o=s(189);class r extends HTMLElement{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"open";super(),this.wire=o.c,this.props={},this._subscriptions=[];try{this._template=t,this._style=e}catch(t){console.warn("Can not find a template!")}this.html=s?Object(o.a)(this.attachShadow({mode:r})):Object(o.a)(this),this._style&&""!==this._style&&(this._style=Object(o.c)()`<style>${this._style}</style>`)}set sub(t){this._subscriptions.push(t)}connectedCallback(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this._initialProps(t),this.render()}attributeChangedCallback(t,e,s){e!==s&&this.props[t]!==s&&(this.props[t]=s,this.render())}disconnectedCallback(){this._subscriptions.forEach(t=>t.unsubscribe())}_initialProps(t){void 0!==t&&t.forEach(t=>{const e=this.getAttribute(t);null!=e&&(this.props[t]=e)})}render(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;this.html`${this._style}${this._template(Object(o.c)(this),t)}`}}function n(t){return e=>{customElements.define(t,e)}}},529:function(t,e,s){"use strict";s.r(e),s.d(e,"AbstractRouter",function(){return r});var o=s(78);class r{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.querySelector("main")||document.body;this.routerOutlet=t,this.page=o.a.page;const e=this.getRouter();o.a.routing(e.rootPath,e.routers)}}},550:function(t,e,s){"use strict";s(606);var o=s(19),r=s(204),n=s(30),i=/./.toString,c=function(t){s(32)(RegExp.prototype,"toString",t,!0)};s(51)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?c(function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!n&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=i.name&&c(function(){return i.call(this)})},588:function(t,e,s){"use strict";s.r(e),e.default=((t,e)=>t`
  <div>${e.routerView}</div>
`)},589:function(t,e,s){"use strict";s.r(e),s.d(e,"conferenceRouter",function(){return n});s(203);var o=s(201),r=s(529);const n=new class extends r.AbstractRouter{constructor(){super(...arguments),this.$routePresentation=new o.Subject,this.$routeConference=new o.Subject}getRouter(){return this.rootPath="/conference",{rootPath:"/conference",routers:[{path:"/presentation/:id",callback:(t,e)=>this.$routePresentation.next({ctx:t,next:e})},{path:"/:id",callback:(t,e)=>this.$routeConference.next({ctx:t,next:e})},{path:"",callback:(t,e)=>{this.page.replace("/conference/presentation/webcomponents-common"),t.handled=!0}},{path:"*",callback:(t,e)=>{t.handled?(t.handled=!1,e()):this.page.replace("/conference")}}]}}}},606:function(t,e,s){s(30)&&"g"!=/./g.flags&&s(52).f(RegExp.prototype,"flags",{configurable:!0,get:s(204)})},614:function(t,e,s){"use strict";s.d(e,"a",function(){return o});s(550);class o{static async importWebComponent(t,e){return void 0===customElements.get(t)?(await s(725)("./"+e),await customElements.whenDefined(t)):void 0}static uuidv4(){const t=window.crypto||window.msCrypto;return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))}}},632:function(t,e,s){"use strict";s.r(e),s.d(e,"ConferenceComponent",function(){return c});var o=s(522),r=s(614),n=s(588),i=s(589);let c=class extends o.UmWebComponent{constructor(){super(n.default),this.routerView="",this.isPreloader=!0}connectedCallback(){const t=this.wire();this.sub=i.conferenceRouter.$routeConference.subscribe(e=>{this.routerView=t`<a href=${i.conferenceRouter.rootPath+"/presentation/webcomponents-common"}>Web Components</a>`,this.render(),e.ctx.handled=!0}),this.sub=i.conferenceRouter.$routePresentation.subscribe(async e=>{await r.a.importWebComponent("inscriptum-presentation","conference/presentation"),this.routerView=t`<inscriptum-presentation data-name=${e.ctx.params.id}></inscriptum-presentation>`,this.render(),e.ctx.handled=!0}),super.connectedCallback()}render(){super.render({isPreloader:this.isPreloader,routerView:this.routerView})}};c=function(t,e,s,o){var r,n=arguments.length,i=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,s,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(n<3?r(i):n>3?r(e,s,i):r(e,s))||i);return n>3&&i&&Object.defineProperty(e,s,i),i}([Object(o.Define)("inscriptum-conference")],c)},725:function(t,e,s){var o={"./abstract.router":[529,9,31],"./abstract.router.ts":[529,9,31],"./conference/component":[632,9,0,25],"./conference/component.ts":[632,9,0,25],"./conference/presentation":[605,9,16,14],"./conference/presentation/":[605,9,16,14],"./conference/presentation/index":[605,9,16,14],"./conference/presentation/index.ts":[605,9,16,14],"./conference/presentation/template":[626,9,32],"./conference/presentation/template.ts":[626,9,32],"./conference/router":[589,9,0,26],"./conference/router.ts":[589,9,0,26],"./conference/template":[588,9,33],"./conference/template.ts":[588,9,33],"./drafts":[583,9,0,1,2,5,6],"./drafts/":[583,9,0,1,2,5,6],"./drafts/index":[583,9,0,1,2,5,6],"./drafts/index.ts":[583,9,0,1,2,5,6],"./drafts/styles/_variables.less":[810,7,62],"./drafts/styles/custom.less":[718,7,63],"./drafts/styles/drafts.less":[719,7,64],"./drafts/styles/normalize.css":[716,7,77],"./drafts/styles/skeleton.less":[717,7,65],"./editor":[590,9,0,1,2,3,4],"./editor/":[590,9,0,1,2,3,4],"./editor/_index":[720,9,0,1,2,3,18],"./editor/_index.ts":[720,9,0,1,2,3,18],"./editor/_quill-register":[721,9,7,29],"./editor/_quill-register.ts":[721,9,7,29],"./editor/index":[590,9,0,1,2,3,4],"./editor/index.ts":[590,9,0,1,2,3,4],"./editor/quill-register":[595,9,7,19,30],"./editor/quill-register.ts":[595,9,7,19,30],"./editor/style.scss":[625,7,66],"./editor/template":[722,9,34],"./editor/template.ts":[722,9,34],"./posts/component":[629,9,0,2,3,17,21],"./posts/component.ts":[629,9,0,2,3,17,21],"./posts/draft":[562,9,0,1,11],"./posts/draft/":[562,9,0,1,11],"./posts/draft/index":[562,9,0,1,11],"./posts/draft/index.ts":[562,9,0,1,11],"./posts/draft/list":[612,9,0,1,24],"./posts/draft/list.ts":[612,9,0,1,24],"./posts/draft/router":[602,9,0,27],"./posts/draft/router.ts":[602,9,0,27],"./posts/list":[563,9,0,8],"./posts/list/":[563,9,0,8],"./posts/list/component":[571,9,0,20],"./posts/list/component.ts":[571,9,0,20],"./posts/list/index":[563,9,0,8],"./posts/list/index.ts":[563,9,0,8],"./posts/list/post-preview/component":[573,9,23],"./posts/list/post-preview/component.ts":[573,9,23],"./posts/list/post-preview/style.scss":[603,7,67],"./posts/list/post-preview/template":[574,9,35],"./posts/list/post-preview/template.ts":[574,9,35],"./posts/list/template":[572,9,36],"./posts/list/template.ts":[572,9,36],"./posts/post":[566,9,0,9],"./posts/post/":[566,9,0,9],"./posts/post/component":[575,9,0,22],"./posts/post/component.ts":[575,9,0,22],"./posts/post/index":[566,9,0,9],"./posts/post/index.ts":[566,9,0,9],"./posts/post/template":[576,9,37],"./posts/post/template.ts":[576,9,37],"./posts/post/um-gist":[547,9,15],"./posts/post/um-gist/":[547,9,15],"./posts/post/um-gist/index":[547,9,15],"./posts/post/um-gist/index.ts":[547,9,15],"./posts/post/um-gist/template":[577,9,38],"./posts/post/um-gist/template.ts":[577,9,38],"./posts/router":[584,9,0,28],"./posts/router.ts":[584,9,0,28],"./posts/styles/_entry.scss":[811,7,68],"./posts/styles/_links.scss":[812,7,69],"./posts/styles/default.scss":[813,7,70],"./posts/styles/fonts.scss":[814,7,71],"./posts/styles/layout.scss":[815,7,72],"./posts/styles/main.scss":[698,7,17],"./posts/styles/media-queries.scss":[816,7,73],"./posts/template":[585,9,39],"./posts/template.ts":[585,9,39],"./um-editor":[604,9,0,12],"./um-editor/":[604,9,0,12],"./um-editor/editor.component.scss":[723,7,74],"./um-editor/index":[604,9,0,12],"./um-editor/index.ts":[604,9,0,12],"./um-editor/template":[627,9,40],"./um-editor/template.ts":[627,9,40],"./um-preloader":[578,9,10],"./um-preloader/":[578,9,10],"./um-preloader/index":[578,9,10],"./um-preloader/index.ts":[578,9,10],"./um-preloader/service":[528,9,0,41],"./um-preloader/service.ts":[528,9,0,41],"./um-preloader/style.scss":[615,7,75],"./um-preloader/template":[587,9,42],"./um-preloader/template.ts":[587,9,42],"./um-preloader/um-spinner-round":[549,9,13],"./um-preloader/um-spinner-round/":[549,9,13],"./um-preloader/um-spinner-round/index":[549,9,13],"./um-preloader/um-spinner-round/index.ts":[549,9,13],"./um-preloader/um-spinner-round/style.scss":[586,7,76],"./um-preloader/um-spinner-round/template":[567,9,43],"./um-preloader/um-spinner-round/template.ts":[567,9,43],"./um-web.component":[522,9],"./um-web.component.ts":[522,9]};function r(t){var e=o[t];return e?Promise.all(e.slice(2).map(s.e)).then(function(){var t=e[0];return s.t(t,e[1])}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}r.keys=function(){return Object.keys(o)},r.id=725,t.exports=r}}]);