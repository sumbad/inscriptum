(window.webpackJsonp=window.webpackJsonp||[]).push([[71,37,46,47],{106:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));class s{static async importWebComponent(e,t){return void 0===customElements.get(e)?(await o(129)("./"+t),await customElements.whenDefined(e)):void 0}static uuidv4(){const e=window.crypto||window.msCrypto;return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t=>(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16))}}},118:function(e,t,o){"use strict";o.r(t),o.d(t,"ConferenceComponent",(function(){return d}));var s=o(47),r=o(106),i=o(98),n=o(99);let d=class extends s.UmWebComponent{constructor(){super(i.default),this.routerView="",this.isPreloader=!0}connectedCallback(){const e=this.wire();this.sub=n.conferenceRouter.$routeConference.subscribe(t=>{this.routerView=e`<a href=${n.conferenceRouter.rootPath+"/presentation/webcomponents-common"}>Web Components</a>`,this.render(),t.ctx.handled=!0}),this.sub=n.conferenceRouter.$routePresentation.subscribe(async t=>{await r.a.importWebComponent("inscriptum-presentation","conference/presentation"),this.routerView=e`<inscriptum-presentation data-name=${t.ctx.params.id}></inscriptum-presentation>`,this.render(),t.ctx.handled=!0}),super.connectedCallback()}render(){super.render({isPreloader:this.isPreloader,routerView:this.routerView})}};d=function(e,t,o,s){var r,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,s);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(n=(i<3?r(n):i>3?r(t,o,n):r(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n}([Object(s.Define)("inscriptum-conference")],d)},129:function(e,t,o){var s={"./abstract.router":[33,9],"./abstract.router.ts":[33,9],"./conference/component":[118,9,37],"./conference/component.ts":[118,9,37],"./conference/presentation":[90,9,19,20],"./conference/presentation/":[90,9,19,20],"./conference/presentation/index":[90,9,19,20],"./conference/presentation/index.ts":[90,9,19,20],"./conference/presentation/template":[114,9,45],"./conference/presentation/template.ts":[114,9,45],"./conference/router":[99,9,46],"./conference/router.ts":[99,9,46],"./conference/template":[98,9,47],"./conference/template.ts":[98,9,47],"./editor":[89,9,0,1,2,3,7],"./editor/":[89,9,0,1,2,3,7],"./editor/core._js":[164,7,97],"./editor/core_editor.css":[165,7,96],"./editor/editor":[56,9,0,1,2,6,10],"./editor/editor/":[56,9,0,1,2,6,10],"./editor/editor/BlockquoteBlot":[72,9,0,1,2,48],"./editor/editor/BlockquoteBlot.ts":[72,9,0,1,2,48],"./editor/editor/BreakBlot":[45,9,0,1,2,49],"./editor/editor/BreakBlot.ts":[45,9,0,1,2,49],"./editor/editor/DescriptionBlot":[77,9,0,1,2,33],"./editor/editor/DescriptionBlot.ts":[77,9,0,1,2,33],"./editor/editor/DividerBlot":[125,9,0,1,2,50],"./editor/editor/DividerBlot.ts":[125,9,0,1,2,50],"./editor/editor/FieldBlot":[50,9,0,1,2,38],"./editor/editor/FieldBlot.ts":[50,9,0,1,2,38],"./editor/editor/FigureBlot":[76,9,0,1,2,32],"./editor/editor/FigureBlot.ts":[76,9,0,1,2,32],"./editor/editor/HeaderBlot":[54,9,0,1,2,39],"./editor/editor/HeaderBlot.ts":[54,9,0,1,2,39],"./editor/editor/InsSyntaxModule":[65,9,0,1,2,42],"./editor/editor/InsSyntaxModule.ts":[65,9,0,1,2,42],"./editor/editor/LinkBlot":[73,9,0,36],"./editor/editor/LinkBlot.ts":[73,9,0,36],"./editor/editor/ListContinuer":[71,9,0,1,41],"./editor/editor/ListContinuer.ts":[71,9,0,1,41],"./editor/editor/MyQuill":[74,9,0,1,2,51],"./editor/editor/MyQuill.ts":[74,9,0,1,2,51],"./editor/editor/PlainTextClipboard":[126,9,0,1,2,52],"./editor/editor/PlainTextClipboard.ts":[126,9,0,1,2,52],"./editor/editor/PullquoteBlot":[75,9,0,1,2,53],"./editor/editor/PullquoteBlot.ts":[75,9,0,1,2,53],"./editor/editor/SingleLineBlot":[46,9,0,1,2,43],"./editor/editor/SingleLineBlot.ts":[46,9,0,1,2,43],"./editor/editor/SubheaderBlot":[78,9,0,1,2,35],"./editor/editor/SubheaderBlot.ts":[78,9,0,1,2,35],"./editor/editor/TitleBlot":[68,9,0,1,2,34],"./editor/editor/TitleBlot.ts":[68,9,0,1,2,34],"./editor/editor/_CodeBlot":[127,9,0,1,2,44],"./editor/editor/_CodeBlot.ts":[127,9,0,1,2,44],"./editor/editor/highlightjs":[80,9,6,54],"./editor/editor/highlightjs.ts":[80,9,6,54],"./editor/editor/index":[56,9,0,1,2,6,10],"./editor/editor/index.ts":[56,9,0,1,2,6,10],"./editor/editor/quill-register":[128,9,0,1,2,27],"./editor/editor/quill-register.ts":[128,9,0,1,2,27],"./editor/editor/tooltip":[112,9,0,1,2,6,26],"./editor/editor/tooltip.ts":[112,9,0,1,2,6,26],"./editor/editor/utils":[49,9,40],"./editor/editor/utils.ts":[49,9,40],"./editor/image.service":[64,9,55],"./editor/image.service.ts":[64,9,55],"./editor/index":[89,9,0,1,2,3,7],"./editor/index.ts":[89,9,0,1,2,3,7],"./editor/style.scss":[149,7,85],"./editor/template":[113,9,56],"./editor/template.ts":[113,9,56],"./list":[58,9,3,4,17],"./list/":[58,9,3,4,17],"./list/index":[58,9,3,4,17],"./list/index.ts":[58,9,3,4,17],"./list/styles/$.less":[103,7,82],"./list/styles/custom.less":[102,7,83],"./menu":[69,9,8],"./menu/":[69,9,8],"./menu/index":[69,9,8],"./menu/index.ts":[69,9,8],"./menu/style.less":[130,7,84],"./posts/component":[117,9,3,24,22,29],"./posts/component.ts":[117,9,3,24,22,29],"./posts/draft":[66,9,9],"./posts/draft/":[66,9,9],"./posts/draft/index":[66,9,9],"./posts/draft/index.ts":[66,9,9],"./posts/draft/list":[122,9,25],"./posts/draft/list.ts":[122,9,25],"./posts/draft/router":[115,9,57],"./posts/draft/router.ts":[115,9,57],"./posts/list":[61,9,12],"./posts/list/":[61,9,12],"./posts/list/component":[81,9,30],"./posts/list/component.ts":[81,9,30],"./posts/list/index":[61,9,12],"./posts/list/index.ts":[61,9,12],"./posts/list/post-preview/component":[83,9,31],"./posts/list/post-preview/component.ts":[83,9,31],"./posts/list/post-preview/style.scss":[104,7,86],"./posts/list/post-preview/template":[84,9,58],"./posts/list/post-preview/template.ts":[84,9,58],"./posts/list/template":[82,9,59],"./posts/list/template.ts":[82,9,59],"./posts/post":[62,9,13],"./posts/post/":[62,9,13],"./posts/post/component":[85,9,28],"./posts/post/component.ts":[85,9,28],"./posts/post/index":[62,9,13],"./posts/post/index.ts":[62,9,13],"./posts/post/template":[86,9,60],"./posts/post/template.ts":[86,9,60],"./posts/post/um-gist":[52,9,21],"./posts/post/um-gist/":[52,9,21],"./posts/post/um-gist/index":[52,9,21],"./posts/post/um-gist/index.ts":[52,9,21],"./posts/post/um-gist/template":[87,9,61],"./posts/post/um-gist/template.ts":[87,9,61],"./posts/router":[96,9,62],"./posts/router.ts":[96,9,62],"./posts/styles/_entry.scss":[166,7,87],"./posts/styles/_links.scss":[167,7,88],"./posts/styles/default.scss":[168,7,89],"./posts/styles/fonts.scss":[169,7,90],"./posts/styles/layout.scss":[170,7,91],"./posts/styles/main.scss":[131,7,22],"./posts/styles/media-queries.scss":[171,7,92],"./posts/template":[97,9,63],"./posts/template.ts":[97,9,63],"./um-editor":[88,9,16],"./um-editor/":[88,9,16],"./um-editor/editor.component.scss":[150,7,93],"./um-editor/index":[88,9,16],"./um-editor/index.ts":[88,9,16],"./um-editor/template":[116,9,64],"./um-editor/template.ts":[116,9,64],"./um-preloader":[59,9,15],"./um-preloader/":[59,9,15],"./um-preloader/index":[59,9,15],"./um-preloader/index.ts":[59,9,15],"./um-preloader/service":[48,9,65],"./um-preloader/service.ts":[48,9,65],"./um-preloader/style.scss":[100,7,94],"./um-preloader/um-spinner-round":[51,9,18],"./um-preloader/um-spinner-round/":[51,9,18],"./um-preloader/um-spinner-round/index":[51,9,18],"./um-preloader/um-spinner-round/index.ts":[51,9,18],"./um-preloader/um-spinner-round/style.scss":[91,7,95],"./um-preloader/um-spinner-round/template":[63,9,66],"./um-preloader/um-spinner-round/template.ts":[63,9,66],"./um-web.component":[47,9],"./um-web.component.ts":[47,9]};function r(e){if(!o.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],r=t[0];return Promise.all(t.slice(2).map(o.e)).then((function(){return o.t(r,t[1])}))}r.keys=function(){return Object.keys(s)},r.id=129,e.exports=r},98:function(e,t,o){"use strict";o.r(t),t.default=(e,t)=>e`
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
  <div>${t.routerView}</div>
`},99:function(e,t,o){"use strict";o.r(t),o.d(t,"conferenceRouter",(function(){return n}));var s=o(22),r=o(33);class i extends r.AbstractRoute{constructor(){super(...arguments),this.$routePresentation=new s.a,this.$routeConference=new s.a}getRouter(){return this.rootPath="/conference",{rootPath:"/conference",routers:[{path:"/presentation/:id",callback:(e,t)=>this.$routePresentation.next({ctx:e,next:t})},{path:"/:id",callback:(e,t)=>this.$routeConference.next({ctx:e,next:t})},{path:"",callback:(e,t)=>{this.page.replace("/conference/presentation/webcomponents-common"),e.handled=!0}},{path:"*",callback:(e,t)=>{e.handled?(e.handled=!1,t()):this.page.replace("/conference")}}]}}}const n=new i}}]);