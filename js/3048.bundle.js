(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[3048,2701,2396,352,4715,495,6381],{3048:(e,t,r)=>{"use strict";r.r(t),r.d(t,{DraftComponent:()=>m});var n=r(745),i=r(3445),o=r(1966),s=r(4615),a=r(6201),c=r(5161),d=r.n(c),l=r(8947),u=(r(5090),r(2701),r(3135)),p=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},h=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};var f;!function(e){e[e.edit=0]="edit",e[e.delete=1]="delete"}(f||(f={}));let m=class extends n.yB{constructor(e=new o.V,t){super(a.Z,!1),this._storageService=e,this._authService=t,this.$={isPreloader:!0,hasAuth:!1},this._authService=new s.e(this._storageService)}connectedCallback(){super.connectedCallback(),this._authService.$authenticated.subscribe((e=>{this.$=Object.assign(Object.assign({},this.$),{hasAuth:Boolean(e)})})),(()=>h(this,void 0,void 0,(function*(){try{return(yield r(9228)(`./${u.v.nodeListFileName}`)).default}catch(e){return yield this._storageService.api.note.getAll()}})))().then((e=>{const t=e.map((e=>({id:e.id,preview:e.preview,linkUrl:e.static_link+"",linkRel:"external",actions:()=>this.$.hasAuth?[{type:f.edit,label:"изменить"}]:[]})));this.$=Object.assign(Object.assign({},this.$),{isPreloader:!1,notes:t})})),l.vz.watch()}render(){return i.dy`
      <um-preloader ?loading=${this.$.isPreloader}>
        <inscriptum-list @action=${this.handleAction.bind(this)} .value=${this.$.notes}></inscriptum-list>
      </um-preloader>
    `}handleAction({detail:e}){switch(e.type){case f.edit:d()("/editor/"+e.id+"/posted")}}};p([(0,n.SB)()],m.prototype,"$",void 0),m=p([(0,n.Qr)("inscriptum-notes")],m)},2701:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PreloaderComponent:()=>a});r(4715);var n=r(745),i=r(6201),o=r(3445),s=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let a=class extends n.yB{constructor(){super(i.Z,!0),this.showSpinner=!0,this.loaderClass="um-preloader__loader_fixed",this.styles=o.dy`
    <style>
      ${r(352)}
    </style>
  `}render(){return this.loading?this.showSpinner=!0:setTimeout((()=>{this.showSpinner=!1}),600),o.dy`
      <div class="um-preloader">
        ${this.styles}
        ${this.showSpinner?o.dy`
              <div class=${"um-preloader__loader "+this.loaderClass} style=${"opacity:"+(this.loading?1:0)}>
                <um-spinner-round></um-spinner-round>
              </div>
            `:""}
        <slot></slot>
      </div>
    `}};s([(0,n.vg)({mapper:function(e,t,r){if((r="string"==typeof r||Boolean(r))!==e[t])return Object.assign(Object.assign({},e),{[t]:r})},attribute:"loading"})],a.prototype,"loading",void 0),s([(0,n.vg)()],a.prototype,"showSpinner",void 0),a=s([(0,n.Qr)("um-preloader")],a)},4715:(e,t,r)=>{"use strict";r.r(t),r.d(t,{SpinnerRound:()=>a});var n=r(4864),i=r(3625),o=r(9740),s=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let a=class extends i.UmWebComponent{constructor(){super(o.default,r(495),!0),this._widthSpinner="30px",this.uuid=n.Z.uuidv4()}static get observedAttributes(){return["width"]}};a=s([(0,i.Define)("um-spinner-round")],a)},9740:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=(e,t)=>e`
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
        id="${t.uuid}"
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
      stroke="${"url(#"+t.uuid+")"}"
      stroke-miterlimit="10"
    />
  </svg>
</div>
`},9228:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=9228,e.exports=t},352:e=>{"use strict";e.exports=".um-preloader__loader{z-index:3;top:0;left:0;width:100%;position:absolute;transition:opacity .5s ease,height .2s ease;background-color:rgba(255,255,255,.7);background-repeat:no-repeat;background-position:50% 50%;display:flex;justify-content:center;align-items:center}.um-preloader__loader_fixed{height:100vh;position:fixed}"},495:e=>{"use strict";e.exports=':host{--um-spinner-round: #555}.um-spinner-round{position:relative;margin:0 auto;width:100px}.um-spinner-round:before{content:"";display:block;padding-top:100%}.um-spinner-round__linear-gradient-stop{stop-color:#a11919;stop-color:var(--um-spinner-round, #a11919)}.um-spinner-round .circular{animation:um-spinner-round__rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.um-spinner-round .path{stroke-dasharray:1,50,50;stroke-dashoffset:0;stroke-linecap:round}@keyframes um-spinner-round__rotate{100%{transform:rotate(360deg)}}'}}]);