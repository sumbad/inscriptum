(window.webpackJsonp=window.webpackJsonp||[]).push([[17,80,81],{141:function(e,o){e.exports='.header{margin-top:6rem;text-align:center}.value-prop{margin-top:1rem}.value-props{margin-top:4rem;margin-bottom:4rem}.docs-header{text-transform:uppercase;font-size:1.4rem;letter-spacing:.2rem;font-weight:600}.docs-section{border-top:1px solid #eee;padding:4rem 0;margin-bottom:0}.value-img{display:block;text-align:center;margin:2.5rem auto 0}.example-grid .column,.example-grid .columns{background:#EEE;text-align:center;border-radius:4px;font-size:1rem;text-transform:uppercase;height:30px;line-height:30px;margin-bottom:.75rem;font-weight:600;letter-spacing:.1rem}.docs-preview{white-space:pre-line}.docs-example .row,.docs-example.row,.docs-example form{margin-bottom:0}.docs-example h1,.docs-example h2,.docs-example h3,.docs-example h4,.docs-example h5,.docs-example h6{margin-bottom:1rem}.heading-font-size{font-size:1.2rem;color:#999;letter-spacing:normal}.code-example{margin-top:1.5rem;margin-bottom:0}.code-example-body{white-space:pre;word-wrap:break-word}.example{position:relative;margin-top:4rem}.example-header{font-weight:600;margin-top:1.5rem;margin-bottom:.5rem}.example-description{margin-bottom:1.5rem}.example-screenshot-wrapper{display:block;position:relative;overflow:hidden;border-radius:6px;border:1px solid #eee;height:250px}.example-screenshot{width:100%;height:auto}.example-screenshot.coming-soon{width:auto;position:absolute;background:#eee;top:5px;right:5px;bottom:5px;left:5px}@media (min-width:550px){.header{margin-top:18rem}.value-props{margin-top:9rem;margin-bottom:7rem}.value-img{margin-bottom:1rem}.example-grid .column,.example-grid .columns{margin-bottom:1.5rem}.docs-section{padding:6rem 0}.example-send-yourself-copy{float:right;margin-top:12px}.example-screenshot-wrapper{position:absolute;width:48%;height:100%;left:0;max-height:none}}@media (min-width:750px){.popover.open{display:block}.popover{display:none;position:absolute;top:0;left:0;background:#fff;border:1px solid #eee;border-radius:4px;top:92%;left:-50%;-webkit-filter:drop-shadow(0 0 6px rgba(0,0,0,0.1));-moz-filter:drop-shadow(0 0 6px rgba(0,0,0,0.1));filter:drop-shadow(0 0 6px rgba(0,0,0,0.1))}.popover_right{left:auto;right:0;top:calc(100% + 11px)}.popover-item:first-child .popover-link:after,.popover-item:first-child .popover-link:before{bottom:100%;left:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.popover-item:first-child .popover-link:after{border-color:rgba(255,255,255,0);border-bottom-color:#fff;border-width:10px;margin-left:-10px}.popover-item:first-child .popover-link:before{border-color:rgba(238,238,238,0);border-bottom-color:#eee;border-width:11px;margin-left:-11px}.popover-list{padding:0;margin:0;list-style:none}.popover-item{padding:0;margin:0}.popover-link{position:relative;color:#222;display:block;padding:8px 20px;border-bottom:1px solid #eee;text-decoration:none;text-transform:uppercase;font-size:1rem;font-weight:600;text-align:center;letter-spacing:.1rem}.popover-item:first-child .popover-link{border-radius:4px 4px 0 0}.popover-item:last-child .popover-link{border-radius:0 0 4px 4px;border-bottom-width:0}.popover-link:hover{color:#fff;background:#33C3F0}.popover-link:hover,.popover-item:first-child .popover-link:hover:after{border-bottom-color:#33C3F0}}'},142:function(e,o){e.exports=".um-drafts__item{border-bottom:1px solid #eee;padding:4rem 0;margin-bottom:0}.um-drafts__item-link{color:inherit;text-decoration:none}.um-drafts__item-link:hover{color:inherit}.um-drafts__item-actions{position:relative;float:right}.um-drafts__item-subcontent{font-size:1.1rem;color:#999;letter-spacing:normal;font-weight:normal;display:block;cursor:pointer}@media (min-width:550px){.in-drafts__item{padding:20px 0}}.draft-preview{position:relative;min-height:150px}.draft-preview__img{box-shadow:6px 6px 8px -10px rgba(0,0,0,0.7);position:absolute;right:0;max-height:150px;max-width:300px;object-fit:cover}"},75:function(e,o,t){"use strict";t.r(o),t.d(o,"ListComponent",(function(){return h}));var r=t(33),i=t(13),p=t(181),a=t(52),n=t(147),s=t(165),l=t(185),d=t(378),c=t(53),m=function(e,o,t,r){var i,p=arguments.length,a=p<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,o,t,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(a=(p<3?i(a):p>3?i(o,t,a):i(o,t))||a);return p>3&&a&&Object.defineProperty(o,t,a),a};n.b.add(s.a,l.a);let h=class extends r.a{constructor(){super(a.a,!1),this.styles=i.e`
    <style>
      ${t(141)}
      ${t(142)}
    </style>
  `,this._list=[]}set value(e){void 0!==e&&(this._list=e)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.closePopovers.bind(this))}disconnectedCallback(){document.removeEventListener("click",this.closePopovers.bind(this))}render(){if(this._list.length<1)return i.e``;const e=(e,o=[])=>o.length>0?i.e`
            <div class="um-drafts__item-actions">
              <span @click=${this.openPopover.bind(this)} class="um-drafts__item-subcontent" data-popover=${e}>
                ${e} <i class="fas fa-angle-down" style="color:#999"></i>
              </span>
              <div id=${e} class="popover popover_right">
                <ul class="popover-list">
                  ${o.map(o=>i.e`
                      <li class="popover-item">
                        <a class="popover-link" @click=${this.dispatchAction.bind(this,{type:o.type,id:e})}>${o.label}</a>
                      </li>
                    `)}
                </ul>
              </div>
            </div>
          `:"",o=Object(p.a)(this._list,e=>e.id,(o,t)=>{var r,p;return i.e`
        <div class="um-drafts__item">
          <h6 class="docs-header">
            ${o.preview.title}
          </h6>
          <div class="row">
            ${(null===(r=o.preview.image)||void 0===r?void 0:r.length)>0?i.e`
                  <div class="two columns draft-preview">
                    <img class="draft-preview__img" src="${o.preview.image}" />
                  </div>
                `:""}
            <div class=${(null===(p=o.preview.image)||void 0===p?void 0:p.length)>0?"ten columns":""}>
              <a class="um-drafts__item-link" href=${o.linkUrl} rel=${Object(d.a)(o.linkRel)}>
                <p class="docs-preview">${Object(c.a)(o.preview.description)}</p>
              </a>
              ${e(o.id,"function"==typeof o.actions?o.actions():o.actions)}
            </div>
          </div>
        </div>
      `});return i.e`
      ${this.styles}
      <div class="container">
        ${o}
      </div>
    `}dispatchAction(e){this.dispatchEvent(new CustomEvent("action",{detail:e}))}openPopover(e){var o;e.preventDefault(),this.closePopovers();const t=null===(o=e.target)||void 0===o?void 0:o.dataset.popover,r=this.querySelector(`[id="${t}"]`);null!==r&&r.classList.add("open"),e.stopImmediatePropagation()}closePopovers(){this.querySelectorAll(".popover.open").forEach(e=>{e.classList.remove("open")})}};m([Object(r.e)()],h.prototype,"_list",void 0),h=m([Object(r.b)("inscriptum-list")],h)}}]);