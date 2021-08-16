"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[4715,495,6381],{14715:(e,t,r)=>{r.r(t),r.d(t,{SpinnerRound:()=>s});var n=r(14864),i=r(93625),o=r(96381);let s=class extends i.UmWebComponent{constructor(){super(o.default,r(10495),!0),this._widthSpinner="30px",this.uuid=n.Z.uuidv4()}static get observedAttributes(){return["width"]}};s=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}([(0,i.Define)("um-spinner-round")],s)},96381:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=(e,t)=>e`
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
`},10495:e=>{e.exports=':host{--um-spinner-round: #555}.um-spinner-round{position:relative;margin:0 auto;width:100px}.um-spinner-round:before{content:"";display:block;padding-top:100%}.um-spinner-round__linear-gradient-stop{stop-color:#a11919;stop-color:var(--um-spinner-round, #a11919)}.um-spinner-round .circular{animation:um-spinner-round__rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.um-spinner-round .path{stroke-dasharray:1,50,50;stroke-dashoffset:0;stroke-linecap:round}@keyframes um-spinner-round__rotate{100%{transform:rotate(360deg)}}'}}]);