(window.webpackJsonp=window.webpackJsonp||[]).push([[10,13,42,43,75,76],{549:function(e,t,r){"use strict";r.r(t),r.d(t,"SpinnerRound",function(){return s});var n=r(614),o=r(522),i=r(567);let s=class extends o.UmWebComponent{constructor(){super(i.default,r(586),!0),this._widthSpinner="30px",this.uuid=n.a.uuidv4()}static get observedAttributes(){return["width"]}};s=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s}([Object(o.Define)("um-spinner-round")],s)},567:function(e,t,r){"use strict";r.r(t),t.default=((e,t)=>e`
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
      stroke-width="3"
      stroke="${"url(#"+t.uuid+")"}"
      stroke-miterlimit="10"
    />
  </svg>
</div>
`)},578:function(e,t,r){"use strict";r.r(t),r.d(t,"PreloaderComponent",function(){return s});var n=r(522),o=(r(549),r(587)),i=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};let s=class extends n.UmWebComponent{constructor(){super(o.default,r(615),!0),this.showSpinner=!0,this.loaderClass=""}static get observedAttributes(){return this.attributes}render(){this.loaderClass="um-preloader__loader_fixed";let e=!0;const t=()=>super.render({loading:e,loaderClass:this.loaderClass,showSpinner:this.showSpinner});"true"===this.props.loading?(e=!0,this.showSpinner=!0):(this.showSpinner=!1,setTimeout(()=>{e=!1,t()},600)),t()}};s.attributes=["loading"],s=i([Object(n.Define)("um-preloader")],s)},586:function(e,t){e.exports=":host{--um-spinner-round:  #555}.um-spinner-round{position:relative;margin:0 auto;width:100px}.um-spinner-round:before{content:'';display:block;padding-top:100%}.um-spinner-round__linear-gradient-stop{stop-color:#a11919;stop-color:var(--um-spinner-round, #a11919)}.um-spinner-round .circular{animation:um-spinner-round__rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.um-spinner-round .path{stroke-dasharray:1, 50, 50;stroke-dashoffset:0;stroke-linecap:round}@keyframes um-spinner-round__rotate{100%{transform:rotate(360deg)}}\n"},587:function(e,t,r){"use strict";r.r(t),t.default=((e,t)=>e`
<div class="um-preloader">
  <slot></slot>
  ${function(e,t){return t.loading?e`
      <div
        class="${"um-preloader__loader "+t.loaderClass}"
        style="${{opacity:t.showSpinner?1:0}}"
      >
        <um-spinner-round></um-spinner-round>
      </div>
    `:""}(e,t)}
</div>
`)},615:function(e,t){e.exports=".um-preloader__loader{z-index:3;top:0;left:0;width:100%;position:absolute;transition:opacity 0.5s ease, height 0.2s ease;background-color:rgba(255,255,255,0.7);background-repeat:no-repeat;background-position:50% 50%;display:flex;justify-content:center;align-items:center}.um-preloader__loader_fixed{height:100vh;position:fixed}\n"}}]);