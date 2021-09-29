(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[3048,2701,3864,7880,7432,2396,352,4715,495,6381],{3048:(e,t,o)=>{"use strict";o.r(t),o.d(t,{DraftComponent:()=>f});var r=o(745),i=o(3445),n=o(1966),s=o(4615),a=o(6201),l=o(5161),p=o.n(l),d=o(8947),c=(o(3864),o(2701),o(3135)),m=function(e,t,o,r){var i,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,o,s):i(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s},u=function(e,t,o,r){return new(o||(o=Promise))((function(i,n){function s(e){try{l(r.next(e))}catch(e){n(e)}}function a(e){try{l(r.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))};var h;!function(e){e[e.edit=0]="edit",e[e.delete=1]="delete"}(h||(h={}));let f=class extends r.yB{constructor(e=new n.V,t){super(a.Z,!1),this._storageService=e,this._authService=t,this.$={isPreloader:!0,hasAuth:!1},this._authService=new s.e(this._storageService)}connectedCallback(){super.connectedCallback(),this._authService.$authenticated.subscribe((e=>{this.$=Object.assign(Object.assign({},this.$),{hasAuth:Boolean(e)})})),(()=>u(this,void 0,void 0,(function*(){try{return(yield o(9228)(`./${c.v.nodeListFileName}`)).default}catch(e){return yield this._storageService.api.note.getAll()}})))().then((e=>{const t=e.map((e=>({id:e.id,preview:e.preview,linkUrl:e.static_link+"",linkRel:"external",actions:()=>this.$.hasAuth?[{type:h.edit,label:"изменить"}]:[]})));this.$=Object.assign(Object.assign({},this.$),{isPreloader:!1,notes:t})})),d.vz.watch()}render(){return i.dy`
      <um-preloader ?loading=${this.$.isPreloader}>
        <inscriptum-list @action=${this.handleAction.bind(this)} .value=${this.$.notes}></inscriptum-list>
      </um-preloader>
    `}handleAction({detail:e}){switch(e.type){case h.edit:p()("/editor/"+e.id+"/posted")}}};m([(0,r.SB)()],f.prototype,"$",void 0),f=m([(0,r.Qr)("inscriptum-notes")],f)},3864:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ListComponent:()=>u});var r=o(745),i=o(3445),n=o(7157),s=o(6201),a=o(8947),l=o(1436),p=o(6024),d=o(577),c=o(1943),m=function(e,t,o,r){var i,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,o,s):i(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s};a.vI.add(l.gc2,p.r6);let u=class extends r.yB{constructor(){super(s.Z,!1),this.styles=i.dy`
    <style>
      ${o(7432)}
      ${o(7880)}
    </style>
  `,this._list=[]}set value(e){void 0!==e&&(this._list=e)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.closePopovers.bind(this))}disconnectedCallback(){document.removeEventListener("click",this.closePopovers.bind(this))}render(){if(this._list.length<1)return i.dy``;const e=(e,t=[])=>t.length>0?i.dy`
            <div class="um-drafts__item-actions">
              <span @click=${this.openPopover.bind(this)} class="um-drafts__item-subcontent" data-popover=${e}>
                ${e} <i class="fas fa-angle-down" style="color:#999"></i>
              </span>
              <div id=${e} class="popover popover_right">
                <ul class="popover-list">
                  ${t.map((t=>i.dy`
                      <li class="popover-item">
                        <a class="popover-link" @click=${this.dispatchAction.bind(this,{type:t.type,id:e})}>${t.label}</a>
                      </li>
                    `))}
                </ul>
              </div>
            </div>
          `:"",t=(0,n.r)(this._list,(e=>e.id),((t,o)=>{var r,n;return i.dy`
        <div class="um-drafts__item">
          ${(t.tags||[]).map((e=>null!=e.link?i.dy`<a href="/${e.link.href}" rel=${(0,d.o)(e.link.rel)}>${e.code}</a>`:e.code))}
          <h6 class="docs-header">${t.preview.title}</h6>
          <div class="row">
            ${(null===(r=t.preview.image)||void 0===r?void 0:r.length)>0?i.dy`
                  <div class="two columns draft-preview">
                    <img class="draft-preview__img" src="${t.preview.image}" />
                  </div>
                `:""}
            <div class=${(null===(n=t.preview.image)||void 0===n?void 0:n.length)>0?"ten columns":""}>
              <a class="um-drafts__item-link" href=${t.linkUrl} rel=${(0,d.o)(t.linkRel)}>
                <p class="docs-preview">${(0,c.A)(t.preview.description)}</p>
              </a>
              ${e(t.id,"function"==typeof t.actions?t.actions():t.actions)}
            </div>
          </div>
        </div>
      `}));return i.dy`
      ${this.styles}
      <div class="container">${t}</div>
    `}dispatchAction(e){this.dispatchEvent(new CustomEvent("action",{detail:e}))}openPopover(e){var t;e.preventDefault(),this.closePopovers();const o=null===(t=e.target)||void 0===t?void 0:t.dataset.popover,r=this.querySelector(`[id="${o}"]`);null!==r&&r.classList.add("open"),e.stopImmediatePropagation()}closePopovers(){this.querySelectorAll(".popover.open").forEach((e=>{e.classList.remove("open")}))}};m([(0,r.SB)()],u.prototype,"_list",void 0),u=m([(0,r.Qr)("inscriptum-list")],u)},2701:(e,t,o)=>{"use strict";o.r(t),o.d(t,{PreloaderComponent:()=>a});o(4715);var r=o(745),i=o(6201),n=o(3445),s=function(e,t,o,r){var i,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,o,s):i(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s};let a=class extends r.yB{constructor(){super(i.Z,!0),this.showSpinner=!0,this.loaderClass="um-preloader__loader_fixed",this.styles=n.dy`
    <style>
      ${o(352)}
    </style>
  `}render(){return this.loading?this.showSpinner=!0:setTimeout((()=>{this.showSpinner=!1}),600),n.dy`
      <div class="um-preloader">
        ${this.styles}
        ${this.showSpinner?n.dy`
              <div class=${"um-preloader__loader "+this.loaderClass} style=${"opacity:"+(this.loading?1:0)}>
                <um-spinner-round></um-spinner-round>
              </div>
            `:""}
        <slot></slot>
      </div>
    `}};s([(0,r.vg)({mapper:function(e,t,o){if((o="string"==typeof o||Boolean(o))!==e[t])return Object.assign(Object.assign({},e),{[t]:o})},attribute:"loading"})],a.prototype,"loading",void 0),s([(0,r.vg)()],a.prototype,"showSpinner",void 0),a=s([(0,r.Qr)("um-preloader")],a)},4715:(e,t,o)=>{"use strict";o.r(t),o.d(t,{SpinnerRound:()=>a});var r=o(4864),i=o(3625),n=o(6381),s=function(e,t,o,r){var i,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,o,s):i(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s};let a=class extends i.UmWebComponent{constructor(){super(n.default,o(495),!0),this._widthSpinner="30px",this.uuid=r.Z.uuidv4()}static get observedAttributes(){return["width"]}};a=s([(0,i.Define)("um-spinner-round")],a)},6381:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});const r=(e,t)=>e`
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
`},3135:(e,t,o)=>{"use strict";o.d(t,{v:()=>r});const r=Object.freeze({isDevMode:!1,isAuthDisabled:!1,nodeListFileName:"list.json"})},9228:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=9228,e.exports=t},7880:e=>{"use strict";e.exports=".um-drafts__item{border-bottom:1px solid #eee;padding:4rem 0;margin-bottom:0}.um-drafts__item-link{color:inherit;text-decoration:none}.um-drafts__item-link:hover{color:inherit}.um-drafts__item-actions{position:relative;float:right}.um-drafts__item-subcontent{font-size:1.1rem;color:#999;letter-spacing:normal;font-weight:normal;display:block;cursor:pointer}@media(min-width: 550px){.in-drafts__item{padding:20px 0}}.draft-preview{position:relative;min-height:150px}.draft-preview__img{box-shadow:6px 6px 8px -10px rgba(0,0,0,.7);position:absolute;right:0;max-height:150px;max-width:300px;object-fit:cover}"},7432:e=>{"use strict";e.exports='.header{margin-top:6rem;text-align:center}.value-prop{margin-top:1rem}.value-props{margin-top:4rem;margin-bottom:4rem}.docs-header{text-transform:uppercase;font-size:1.4rem;letter-spacing:.2rem;font-weight:250}.docs-section{border-top:1px solid #eee;padding:4rem 0;margin-bottom:0}.value-img{display:block;text-align:center;margin:2.5rem auto 0}.example-grid .column,.example-grid .columns{background:#eee;text-align:center;border-radius:4px;font-size:1rem;text-transform:uppercase;height:30px;line-height:30px;margin-bottom:.75rem;font-weight:600;letter-spacing:.1rem}.docs-preview{white-space:pre-line;font-weight:330}.docs-example .row,.docs-example.row,.docs-example form{margin-bottom:0}.docs-example h1,.docs-example h2,.docs-example h3,.docs-example h4,.docs-example h5,.docs-example h6{margin-bottom:1rem}.heading-font-size{font-size:1.2rem;color:#999;letter-spacing:normal}.code-example{margin-top:1.5rem;margin-bottom:0}.code-example-body{white-space:pre;word-wrap:break-word}.example{position:relative;margin-top:4rem}.example-header{font-weight:600;margin-top:1.5rem;margin-bottom:.5rem}.example-description{margin-bottom:1.5rem}.example-screenshot-wrapper{display:block;position:relative;overflow:hidden;border-radius:6px;border:1px solid #eee;height:250px}.example-screenshot{width:100%;height:auto}.example-screenshot.coming-soon{width:auto;position:absolute;background:#eee;top:5px;right:5px;bottom:5px;left:5px}@media(min-width: 550px){.header{margin-top:18rem}.value-props{margin-top:9rem;margin-bottom:7rem}.value-img{margin-bottom:1rem}.example-grid .column,.example-grid .columns{margin-bottom:1.5rem}.docs-section{padding:6rem 0}.example-send-yourself-copy{float:right;margin-top:12px}.example-screenshot-wrapper{position:absolute;width:48%;height:100%;left:0;max-height:none}}@media(min-width: 750px){.popover.open{display:block}.popover{display:none;position:absolute;top:0;left:0;background:#fff;border:1px solid #eee;border-radius:4px;top:92%;left:-50%;filter:drop-shadow(0 0 6px rgba(0, 0, 0, 0.1))}.popover_right{left:auto;right:0;top:calc(100% + 11px)}.popover-item:first-child .popover-link:after,.popover-item:first-child .popover-link:before{bottom:100%;left:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.popover-item:first-child .popover-link:after{border-color:rgba(255,255,255,0);border-bottom-color:#fff;border-width:10px;margin-left:-10px}.popover-item:first-child .popover-link:before{border-color:rgba(238,238,238,0);border-bottom-color:#eee;border-width:11px;margin-left:-11px}.popover-list{padding:0;margin:0;list-style:none}.popover-item{padding:0;margin:0}.popover-link{position:relative;color:#222;display:block;padding:8px 20px;border-bottom:1px solid #eee;text-decoration:none;text-transform:uppercase;font-size:1rem;font-weight:600;text-align:center;letter-spacing:.1rem}.popover-item:first-child .popover-link{border-radius:4px 4px 0 0}.popover-item:last-child .popover-link{border-radius:0 0 4px 4px;border-bottom-width:0}.popover-link:hover{color:#fff;background:#33c3f0}.popover-link:hover,.popover-item:first-child .popover-link:hover:after{border-bottom-color:#33c3f0}}'},352:e=>{"use strict";e.exports=".um-preloader__loader{z-index:3;top:0;left:0;width:100%;position:absolute;transition:opacity .5s ease,height .2s ease;background-color:rgba(255,255,255,.7);background-repeat:no-repeat;background-position:50% 50%;display:flex;justify-content:center;align-items:center}.um-preloader__loader_fixed{height:100vh;position:fixed}"},495:e=>{"use strict";e.exports=':host{--um-spinner-round: #555}.um-spinner-round{position:relative;margin:0 auto;width:100px}.um-spinner-round:before{content:"";display:block;padding-top:100%}.um-spinner-round__linear-gradient-stop{stop-color:#a11919;stop-color:var(--um-spinner-round, #a11919)}.um-spinner-round .circular{animation:um-spinner-round__rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.um-spinner-round .path{stroke-dasharray:1,50,50;stroke-dashoffset:0;stroke-linecap:round}@keyframes um-spinner-round__rotate{100%{transform:rotate(360deg)}}'}}]);