(window.webpackJsonp=window.webpackJsonp||[]).push([[70,38,45,46],{124:function(e,t,o){"use strict";o.r(t),t.default=(e,t)=>e`
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
  <div>${t.routerView}</div>
`},125:function(e,t,o){"use strict";o.r(t),o.d(t,"conferenceRouter",(function(){return n}));var s=o(22),r=o(51);class i extends r.AbstractRoute{constructor(){super(...arguments),this.$routePresentation=new s.a,this.$routeConference=new s.a}getRouter(){return this.rootPath="/conference",{rootPath:"/conference",routers:[{path:"/presentation/:id",callback:(e,t)=>this.$routePresentation.next({ctx:e,next:t})},{path:"/:id",callback:(e,t)=>this.$routeConference.next({ctx:e,next:t})},{path:"",callback:(e,t)=>{this.page.replace("/conference/presentation/webcomponents-common"),e.handled=!0}},{path:"*",callback:(e,t)=>{e.handled?(e.handled=!1,t()):this.page.replace("/conference")}}]}}}const n=new i},138:function(e,t,o){"use strict";o.r(t),o.d(t,"ConferenceComponent",(function(){return l}));var s=o(69),r=o(161),i=o(124),n=o(125),d=function(e,t,o,s){var r,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,s);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(n=(i<3?r(n):i>3?r(t,o,n):r(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n},c=function(e,t,o,s){return new(o||(o=Promise))((function(r,i){function n(e){try{c(s.next(e))}catch(e){i(e)}}function d(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,d)}c((s=s.apply(e,t||[])).next())}))};let l=class extends s.UmWebComponent{constructor(){super(i.default),this.routerView="",this.isPreloader=!0}connectedCallback(){const e=this.wire();this.sub=n.conferenceRouter.$routeConference.subscribe(t=>{this.routerView=e`<a href=${n.conferenceRouter.rootPath+"/presentation/webcomponents-common"}>Web Components</a>`,this.render(),t.ctx.handled=!0}),this.sub=n.conferenceRouter.$routePresentation.subscribe(t=>c(this,void 0,void 0,(function*(){yield r.a.importWebComponent("inscriptum-presentation","conference/presentation"),this.routerView=e`<inscriptum-presentation data-name=${t.ctx.params.id}></inscriptum-presentation>`,this.render(),t.ctx.handled=!0}))),super.connectedCallback()}render(){super.render({isPreloader:this.isPreloader,routerView:this.routerView})}};l=d([Object(s.Define)("inscriptum-conference")],l)},161:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var s=function(e,t,o,s){return new(o||(o=Promise))((function(r,i){function n(e){try{c(s.next(e))}catch(e){i(e)}}function d(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,d)}c((s=s.apply(e,t||[])).next())}))};class r{static importWebComponent(e,t){return s(this,void 0,void 0,(function*(){return void 0===customElements.get(e)?(yield o(183)("./"+t),yield customElements.whenDefined(e)):void 0}))}static uuidv4(){const e=window.crypto||window.msCrypto;return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t=>(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16))}}},183:function(e,t,o){var s={"./abstract.router":[51,9],"./abstract.router.ts":[51,9],"./conference/component":[138,9,38],"./conference/component.ts":[138,9,38],"./conference/presentation":[89,9,19,20],"./conference/presentation/":[89,9,19,20],"./conference/presentation/index":[89,9,19,20],"./conference/presentation/index.ts":[89,9,19,20],"./conference/presentation/template":[133,9,44],"./conference/presentation/template.ts":[133,9,44],"./conference/router":[125,9,45],"./conference/router.ts":[125,9,45],"./conference/template":[124,9,46],"./conference/template.ts":[124,9,46],"./editor":[88,9,0,1,2,3,7],"./editor/":[88,9,0,1,2,3,7],"./editor/core._js":[390,7,96],"./editor/core_editor.css":[391,7,95],"./editor/editor":[74,9,0,1,2,5,9],"./editor/editor/":[74,9,0,1,2,5,9],"./editor/editor/BlockquoteBlot":[95,9,0,1,2,47],"./editor/editor/BlockquoteBlot.ts":[95,9,0,1,2,47],"./editor/editor/BreakBlot":[68,9,0,1,2,48],"./editor/editor/BreakBlot.ts":[68,9,0,1,2,48],"./editor/editor/DescriptionBlot":[100,9,0,1,2,33],"./editor/editor/DescriptionBlot.ts":[100,9,0,1,2,33],"./editor/editor/DividerBlot":[103,9,0,1,49],"./editor/editor/DividerBlot.ts":[103,9,0,1,49],"./editor/editor/FieldBlot":[70,9,0,1,2,39],"./editor/editor/FieldBlot.ts":[70,9,0,1,2,39],"./editor/editor/FigureBlot":[99,9,0,1,2,32],"./editor/editor/FigureBlot.ts":[99,9,0,1,2,32],"./editor/editor/HeaderBlot":[84,9,0,1,2,40],"./editor/editor/HeaderBlot.ts":[84,9,0,1,2,40],"./editor/editor/InsSyntaxModule":[92,9,0,1,2,42],"./editor/editor/InsSyntaxModule.ts":[92,9,0,1,2,42],"./editor/editor/LinkBlot":[96,9,0,36],"./editor/editor/LinkBlot.ts":[96,9,0,36],"./editor/editor/ListContinuer":[94,9,0,1,37],"./editor/editor/ListContinuer.ts":[94,9,0,1,37],"./editor/editor/MyQuill":[97,9,0,1,2,50],"./editor/editor/MyQuill.ts":[97,9,0,1,2,50],"./editor/editor/PlainTextClipboard":[158,9,0,1,2,25,51],"./editor/editor/PlainTextClipboard.ts":[158,9,0,1,2,25,51],"./editor/editor/PullquoteBlot":[98,9,0,1,2,52],"./editor/editor/PullquoteBlot.ts":[98,9,0,1,2,52],"./editor/editor/SingleLineBlot":[66,9,0,1,2,43],"./editor/editor/SingleLineBlot.ts":[66,9,0,1,2,43],"./editor/editor/SubheaderBlot":[101,9,0,1,2,35],"./editor/editor/SubheaderBlot.ts":[101,9,0,1,2,35],"./editor/editor/TitleBlot":[91,9,0,1,2,34],"./editor/editor/TitleBlot.ts":[91,9,0,1,2,34],"./editor/editor/hljs":[102,9,5,53],"./editor/editor/hljs.ts":[102,9,5,53],"./editor/editor/index":[74,9,0,1,2,5,9],"./editor/editor/index.ts":[74,9,0,1,2,5,9],"./editor/editor/quill-register":[159,9,0,1,2,27],"./editor/editor/quill-register.ts":[159,9,0,1,2,27],"./editor/editor/tooltip":[131,9,0,1,2,5,24],"./editor/editor/tooltip.ts":[131,9,0,1,2,5,24],"./editor/editor/utils":[67,9,41],"./editor/editor/utils.ts":[67,9,41],"./editor/image.service":[83,9,54],"./editor/image.service.ts":[83,9,54],"./editor/index":[88,9,0,1,2,3,7],"./editor/index.ts":[88,9,0,1,2,3,7],"./editor/style.scss":[189,7,84],"./editor/template":[132,9,55],"./editor/template.ts":[132,9,55],"./list":[76,9,3,4,17],"./list/":[76,9,3,4,17],"./list/index":[76,9,3,4,17],"./list/index.ts":[76,9,3,4,17],"./list/styles/$.less":[157,7,81],"./list/styles/custom.less":[156,7,82],"./menu":[86,9,8],"./menu/":[86,9,8],"./menu/index":[86,9,8],"./menu/index.ts":[86,9,8],"./menu/style.less":[184,7,83],"./posts/component":[137,9,3,23,22,29],"./posts/component.ts":[137,9,3,23,22,29],"./posts/list":[79,9,12],"./posts/list/":[79,9,12],"./posts/list/component":[107,9,30],"./posts/list/component.ts":[107,9,30],"./posts/list/index":[79,9,12],"./posts/list/index.ts":[79,9,12],"./posts/list/post-preview/component":[109,9,31],"./posts/list/post-preview/component.ts":[109,9,31],"./posts/list/post-preview/style.scss":[160,7,85],"./posts/list/post-preview/template":[110,9,56],"./posts/list/post-preview/template.ts":[110,9,56],"./posts/list/template":[108,9,57],"./posts/list/template.ts":[108,9,57],"./posts/post":[80,9,14],"./posts/post/":[80,9,14],"./posts/post/component":[111,9,28],"./posts/post/component.ts":[111,9,28],"./posts/post/index":[80,9,14],"./posts/post/index.ts":[80,9,14],"./posts/post/template":[112,9,58],"./posts/post/template.ts":[112,9,58],"./posts/post/um-gist":[73,9,21],"./posts/post/um-gist/":[73,9,21],"./posts/post/um-gist/index":[73,9,21],"./posts/post/um-gist/index.ts":[73,9,21],"./posts/post/um-gist/template":[113,9,59],"./posts/post/um-gist/template.ts":[113,9,59],"./posts/router":[122,9,60],"./posts/router.ts":[122,9,60],"./posts/styles/_entry.scss":[392,7,86],"./posts/styles/_links.scss":[393,7,87],"./posts/styles/default.scss":[394,7,88],"./posts/styles/fonts.scss":[395,7,89],"./posts/styles/layout.scss":[396,7,90],"./posts/styles/main.scss":[185,7,22],"./posts/styles/media-queries.scss":[397,7,91],"./posts/template":[123,9,61],"./posts/template.ts":[123,9,61],"./um-editor":[87,9,16],"./um-editor/":[87,9,16],"./um-editor/editor.component.scss":[191,7,92],"./um-editor/index":[87,9,16],"./um-editor/index.ts":[87,9,16],"./um-editor/template":[136,9,62],"./um-editor/template.ts":[136,9,62],"./um-preloader":[78,9,15],"./um-preloader/":[78,9,15],"./um-preloader/index":[78,9,15],"./um-preloader/index.ts":[78,9,15],"./um-preloader/service":[75,9,63],"./um-preloader/service.ts":[75,9,63],"./um-preloader/style.scss":[143,7,93],"./um-preloader/um-spinner-round":[71,9,18],"./um-preloader/um-spinner-round/":[71,9,18],"./um-preloader/um-spinner-round/index":[71,9,18],"./um-preloader/um-spinner-round/index.ts":[71,9,18],"./um-preloader/um-spinner-round/style.scss":[127,7,94],"./um-preloader/um-spinner-round/template":[93,9,64],"./um-preloader/um-spinner-round/template.ts":[93,9,64],"./um-web.component":[69,9],"./um-web.component.ts":[69,9]};function r(e){if(!o.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],r=t[0];return Promise.all(t.slice(2).map(o.e)).then((function(){return o.t(r,t[1])}))}r.keys=function(){return Object.keys(s)},r.id=183,e.exports=r}}]);