(window.webpackJsonp=window.webpackJsonp||[]).push([[13,43,76],{549:function(e,t,n){"use strict";n.r(t),n.d(t,"SpinnerRound",function(){return s});var r=n(614),o=n(522),i=n(567);let s=class extends o.UmWebComponent{constructor(){super(i.default,n(586),!0),this._widthSpinner="30px",this.uuid=r.a.uuidv4()}static get observedAttributes(){return["width"]}};s=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([Object(o.Define)("um-spinner-round")],s)},567:function(e,t,n){"use strict";n.r(t),t.default=((e,t)=>e`
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
`)},586:function(e,t){e.exports=":host{--um-spinner-round:  #555}.um-spinner-round{position:relative;margin:0 auto;width:100px}.um-spinner-round:before{content:'';display:block;padding-top:100%}.um-spinner-round__linear-gradient-stop{stop-color:#a11919;stop-color:var(--um-spinner-round, #a11919)}.um-spinner-round .circular{animation:um-spinner-round__rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.um-spinner-round .path{stroke-dasharray:1, 50, 50;stroke-dashoffset:0;stroke-linecap:round}@keyframes um-spinner-round__rotate{100%{transform:rotate(360deg)}}\n"}}]);