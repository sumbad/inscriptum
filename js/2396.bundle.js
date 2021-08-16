"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[2396,2701,352,4715,495,6381],{62701:(e,t,r)=>{r.r(t),r.d(t,{PreloaderComponent:()=>a}),r(14715);var n=r(60745),o=r(36201),i=r(35306),s=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};let a=class extends n.yB{constructor(){super(o.Z,!0),this.showSpinner=!0,this.loaderClass="um-preloader__loader_fixed",this.styles=i.dy`
    <style>
      ${r(10352)}
    </style>
  `}render(){return this.loading?this.showSpinner=!0:setTimeout((()=>{this.showSpinner=!1}),600),i.dy`
      <div class="um-preloader">
        ${this.styles}
        ${this.showSpinner?i.dy`
              <div class=${"um-preloader__loader "+this.loaderClass} style=${"opacity:"+(this.loading?1:0)}>
                <um-spinner-round></um-spinner-round>
              </div>
            `:""}
        <slot></slot>
      </div>
    `}};s([(0,n.vg)({mapper:function(e,t,r){if((r="string"==typeof r||Boolean(r))!==e[t])return Object.assign(Object.assign({},e),{[t]:r})},attribute:"loading"})],a.prototype,"loading",void 0),s([(0,n.vg)()],a.prototype,"showSpinner",void 0),a=s([(0,n.Qr)("um-preloader")],a)},14715:(e,t,r)=>{r.r(t),r.d(t,{SpinnerRound:()=>s});var n=r(14864),o=r(93625),i=r(96381);let s=class extends o.UmWebComponent{constructor(){super(i.default,r(10495),!0),this._widthSpinner="30px",this.uuid=n.Z.uuidv4()}static get observedAttributes(){return["width"]}};s=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s}([(0,o.Define)("um-spinner-round")],s)},96381:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=(e,t)=>e`
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
`},10352:e=>{e.exports=".um-preloader__loader{z-index:3;top:0;left:0;width:100%;position:absolute;transition:opacity .5s ease,height .2s ease;background-color:rgba(255,255,255,.7);background-repeat:no-repeat;background-position:50% 50%;display:flex;justify-content:center;align-items:center}.um-preloader__loader_fixed{height:100vh;position:fixed}"},10495:e=>{e.exports=':host{--um-spinner-round: #555}.um-spinner-round{position:relative;margin:0 auto;width:100px}.um-spinner-round:before{content:"";display:block;padding-top:100%}.um-spinner-round__linear-gradient-stop{stop-color:#a11919;stop-color:var(--um-spinner-round, #a11919)}.um-spinner-round .circular{animation:um-spinner-round__rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.um-spinner-round .path{stroke-dasharray:1,50,50;stroke-dashoffset:0;stroke-linecap:round}@keyframes um-spinner-round__rotate{100%{transform:rotate(360deg)}}'}}]);