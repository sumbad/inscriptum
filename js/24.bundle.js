(window.webpackJsonp=window.webpackJsonp||[]).push([[24,14,17,62,91,92],{116:function(t,e){t.exports=":host{--um-spinner-round:  #555}.um-spinner-round{position:relative;margin:0 auto;width:100px}.um-spinner-round:before{content:'';display:block;padding-top:100%}.um-spinner-round__linear-gradient-stop{stop-color:#a11919;stop-color:var(--um-spinner-round, #a11919)}.um-spinner-round .circular{animation:um-spinner-round__rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.um-spinner-round .path{stroke-dasharray:1, 50, 50;stroke-dashoffset:0;stroke-linecap:round}@keyframes um-spinner-round__rotate{100%{transform:rotate(360deg)}}\n"},131:function(t,e){t.exports=".um-preloader__loader{z-index:3;top:0;left:0;width:100%;position:absolute;transition:opacity 0.5s ease, height 0.2s ease;background-color:rgba(255,255,255,0.7);background-repeat:no-repeat;background-position:50% 50%;display:flex;justify-content:center;align-items:center}.um-preloader__loader_fixed{height:100vh;position:fixed}\n"},139:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var s=function(t,e,o,s){return new(o||(o=Promise))((function(r,i){function n(t){try{l(s.next(t))}catch(t){i(t)}}function d(t){try{l(s.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(n,d)}l((s=s.apply(t,e||[])).next())}))};class r{static importWebComponent(t,e){return s(this,void 0,void 0,(function*(){return void 0===customElements.get(t)?(yield o(163)("./"+e),yield customElements.whenDefined(t)):void 0}))}static uuidv4(){const t=window.crypto||window.msCrypto;return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))}}},163:function(t,e,o){var s={"./abstract.router":[50,9],"./abstract.router.ts":[50,9],"./conference/component":[127,9,36],"./conference/component.ts":[127,9,36],"./conference/presentation":[82,9,18,19],"./conference/presentation/":[82,9,18,19],"./conference/presentation/index":[82,9,18,19],"./conference/presentation/index.ts":[82,9,18,19],"./conference/presentation/template":[122,9,42],"./conference/presentation/template.ts":[122,9,42],"./conference/router":[113,9,43],"./conference/router.ts":[113,9,43],"./conference/template":[112,9,44],"./conference/template.ts":[112,9,44],"./editor":[81,9,0,1,2,3,7],"./editor/":[81,9,0,1,2,3,7],"./editor/core._js":[368,7,94],"./editor/core_editor.css":[369,7,93],"./editor/editor":[68,9,0,1,2,5,9],"./editor/editor/":[68,9,0,1,2,5,9],"./editor/editor/BlockquoteBlot":[88,9,0,1,2,45],"./editor/editor/BlockquoteBlot.ts":[88,9,0,1,2,45],"./editor/editor/BreakBlot":[64,9,0,1,2,46],"./editor/editor/BreakBlot.ts":[64,9,0,1,2,46],"./editor/editor/DescriptionBlot":[93,9,0,1,2,31],"./editor/editor/DescriptionBlot.ts":[93,9,0,1,2,31],"./editor/editor/DividerBlot":[96,9,0,1,47],"./editor/editor/DividerBlot.ts":[96,9,0,1,47],"./editor/editor/FieldBlot":[66,9,0,1,2,37],"./editor/editor/FieldBlot.ts":[66,9,0,1,2,37],"./editor/editor/FigureBlot":[85,9,0,1,2,30],"./editor/editor/FigureBlot.ts":[85,9,0,1,2,30],"./editor/editor/HeaderBlot":[74,9,0,1,2,38],"./editor/editor/HeaderBlot.ts":[74,9,0,1,2,38],"./editor/editor/InsSyntaxModule":[84,9,0,1,2,40],"./editor/editor/InsSyntaxModule.ts":[84,9,0,1,2,40],"./editor/editor/LinkBlot":[89,9,0,34],"./editor/editor/LinkBlot.ts":[89,9,0,34],"./editor/editor/ListContinuer":[87,9,0,1,35],"./editor/editor/ListContinuer.ts":[87,9,0,1,35],"./editor/editor/MyQuill":[91,9,0,1,2,48],"./editor/editor/MyQuill.ts":[91,9,0,1,2,48],"./editor/editor/PlainTextClipboard":[135,9,0,1,2,49],"./editor/editor/PlainTextClipboard.ts":[135,9,0,1,2,49],"./editor/editor/PullquoteBlot":[92,9,0,1,2,50],"./editor/editor/PullquoteBlot.ts":[92,9,0,1,2,50],"./editor/editor/SingleLineBlot":[63,9,0,1,2,41],"./editor/editor/SingleLineBlot.ts":[63,9,0,1,2,41],"./editor/editor/SubheaderBlot":[94,9,0,1,2,33],"./editor/editor/SubheaderBlot.ts":[94,9,0,1,2,33],"./editor/editor/TitleBlot":[83,9,0,1,2,32],"./editor/editor/TitleBlot.ts":[83,9,0,1,2,32],"./editor/editor/hljs":[95,9,5,51],"./editor/editor/hljs.ts":[95,9,5,51],"./editor/editor/index":[68,9,0,1,2,5,9],"./editor/editor/index.ts":[68,9,0,1,2,5,9],"./editor/editor/quill-register":[136,9,0,1,2,25],"./editor/editor/quill-register.ts":[136,9,0,1,2,25],"./editor/editor/tooltip":[115,9,0,1,2,5,23],"./editor/editor/tooltip.ts":[115,9,0,1,2,5,23],"./editor/editor/utils":[65,9,39],"./editor/editor/utils.ts":[65,9,39],"./editor/image.service":[86,9,52],"./editor/image.service.ts":[86,9,52],"./editor/index":[81,9,0,1,2,3,7],"./editor/index.ts":[81,9,0,1,2,3,7],"./editor/style.scss":[168,7,82],"./editor/template":[121,9,53],"./editor/template.ts":[121,9,53],"./list":[72,9,3,4,16],"./list/":[72,9,3,4,16],"./list/index":[72,9,3,4,16],"./list/index.ts":[72,9,3,4,16],"./list/styles/$.less":[134,7,79],"./list/styles/custom.less":[133,7,80],"./menu":[79,9,8],"./menu/":[79,9,8],"./menu/index":[79,9,8],"./menu/index.ts":[79,9,8],"./menu/style.less":[164,7,81],"./posts/component":[126,9,3,22,21,27],"./posts/component.ts":[126,9,3,22,21,27],"./posts/list":[75,9,11],"./posts/list/":[75,9,11],"./posts/list/component":[103,9,28],"./posts/list/component.ts":[103,9,28],"./posts/list/index":[75,9,11],"./posts/list/index.ts":[75,9,11],"./posts/list/post-preview/component":[105,9,29],"./posts/list/post-preview/component.ts":[105,9,29],"./posts/list/post-preview/style.scss":[137,7,83],"./posts/list/post-preview/template":[106,9,54],"./posts/list/post-preview/template.ts":[106,9,54],"./posts/list/template":[104,9,55],"./posts/list/template.ts":[104,9,55],"./posts/post":[76,9,12],"./posts/post/":[76,9,12],"./posts/post/component":[107,9,26],"./posts/post/component.ts":[107,9,26],"./posts/post/index":[76,9,12],"./posts/post/index.ts":[76,9,12],"./posts/post/template":[108,9,56],"./posts/post/template.ts":[108,9,56],"./posts/post/um-gist":[70,9,20],"./posts/post/um-gist/":[70,9,20],"./posts/post/um-gist/index":[70,9,20],"./posts/post/um-gist/index.ts":[70,9,20],"./posts/post/um-gist/template":[109,9,57],"./posts/post/um-gist/template.ts":[109,9,57],"./posts/router":[110,9,58],"./posts/router.ts":[110,9,58],"./posts/styles/_entry.scss":[370,7,84],"./posts/styles/_links.scss":[371,7,85],"./posts/styles/default.scss":[372,7,86],"./posts/styles/fonts.scss":[373,7,87],"./posts/styles/layout.scss":[374,7,88],"./posts/styles/main.scss":[165,7,21],"./posts/styles/media-queries.scss":[375,7,89],"./posts/template":[111,9,59],"./posts/template.ts":[111,9,59],"./um-editor":[80,9,15],"./um-editor/":[80,9,15],"./um-editor/editor.component.scss":[170,7,90],"./um-editor/index":[80,9,15],"./um-editor/index.ts":[80,9,15],"./um-editor/template":[125,9,60],"./um-editor/template.ts":[125,9,60],"./um-preloader":[73,9,14],"./um-preloader/":[73,9,14],"./um-preloader/index":[73,9,14],"./um-preloader/index.ts":[73,9,14],"./um-preloader/service":[71,9,61],"./um-preloader/service.ts":[71,9,61],"./um-preloader/style.scss":[131,7,91],"./um-preloader/um-spinner-round":[69,9,17],"./um-preloader/um-spinner-round/":[69,9,17],"./um-preloader/um-spinner-round/index":[69,9,17],"./um-preloader/um-spinner-round/index.ts":[69,9,17],"./um-preloader/um-spinner-round/style.scss":[116,7,92],"./um-preloader/um-spinner-round/template":[97,9,62],"./um-preloader/um-spinner-round/template.ts":[97,9,62],"./um-web.component":[67,9],"./um-web.component.ts":[67,9]};function r(t){if(!o.o(s,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=s[t],r=e[0];return Promise.all(e.slice(2).map(o.e)).then((function(){return o.t(r,e[1])}))}r.keys=function(){return Object.keys(s)},r.id=163,t.exports=r},69:function(t,e,o){"use strict";o.r(e),o.d(e,"SpinnerRound",(function(){return d}));var s=o(139),r=o(67),i=o(97),n=function(t,e,o,s){var r,i=arguments.length,n=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,s);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(n=(i<3?r(n):i>3?r(e,o,n):r(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};let d=class extends r.UmWebComponent{constructor(){super(i.default,o(116),!0),this._widthSpinner="30px",this.uuid=s.a.uuidv4()}static get observedAttributes(){return["width"]}};d=n([Object(r.Define)("um-spinner-round")],d)},73:function(t,e,o){"use strict";o.r(e),o.d(e,"PreloaderComponent",(function(){return d}));o(69);var s=o(32),r=o(51),i=o(13),n=function(t,e,o,s){var r,i=arguments.length,n=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,s);else for(var d=t.length-1;d>=0;d--)(r=t[d])&&(n=(i<3?r(n):i>3?r(e,o,n):r(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};let d=class extends s.a{constructor(){super(r.a,!0),this.showSpinner=!0,this.loaderClass="um-preloader__loader_fixed",this.styles=i.e`
    <style>
      ${o(131)}
    </style>
  `}render(){return this.loading?this.showSpinner=!0:setTimeout(()=>{this.showSpinner=!1},600),i.e`
      <div class="um-preloader">
        ${this.styles}
        ${this.showSpinner?i.e`
              <div class=${"um-preloader__loader "+this.loaderClass} style=${"opacity:"+(this.loading?1:0)}>
                <um-spinner-round></um-spinner-round>
              </div>
            `:""}
        <slot></slot>
      </div>
    `}};n([Object(s.d)({mapper:function(t,e,o){if((o="string"==typeof o||Boolean(o))!==t[e])return Object.assign(Object.assign({},t),{[e]:o})},attribute:"loading"})],d.prototype,"loading",void 0),n([Object(s.d)()],d.prototype,"showSpinner",void 0),d=n([Object(s.b)("um-preloader")],d)},97:function(t,e,o){"use strict";o.r(e),e.default=(t,e)=>t`
<div class="um-spinner-round">
  <svg
    class="circular"
    viewBox="25 25 50 50"
  >
    <defs>
      <linearGradient
        x1="100%"
        y1="10%"
        x2="35%"
        y2="100%"
        id="${e.uuid}"
      >
        <stop
          class="um-spinner-round__linear-gradient-stop"
          offset="0%"
        ></stop>
        <stop
          class="um-spinner-round__linear-gradient-stop"
          stop-opacity="0.001"
          offset="100%"
        ></stop>
      </linearGradient>
    </defs>
    <circle
      class="path"
      cx="50"
      cy="50"
      r="20"
      fill="none"
      stroke-width="1"
      stroke="${"url(#"+e.uuid+")"}"
      stroke-miterlimit="10"
    />
  </svg>
</div>
`}}]);