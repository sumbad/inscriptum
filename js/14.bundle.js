(window.webpackJsonp=window.webpackJsonp||[]).push([[14,17,80,81,82],{103:function(e,t){e.exports='.header{margin-top:6rem;text-align:center}.value-prop{margin-top:1rem}.value-props{margin-top:4rem;margin-bottom:4rem}.docs-header{text-transform:uppercase;font-size:1.4rem;letter-spacing:.2rem;font-weight:600}.docs-section{border-top:1px solid #eee;padding:4rem 0;margin-bottom:0}.value-img{display:block;text-align:center;margin:2.5rem auto 0}.example-grid .column,.example-grid .columns{background:#EEE;text-align:center;border-radius:4px;font-size:1rem;text-transform:uppercase;height:30px;line-height:30px;margin-bottom:.75rem;font-weight:600;letter-spacing:.1rem}.docs-preview{white-space:pre-line}.docs-example .row,.docs-example.row,.docs-example form{margin-bottom:0}.docs-example h1,.docs-example h2,.docs-example h3,.docs-example h4,.docs-example h5,.docs-example h6{margin-bottom:1rem}.heading-font-size{font-size:1.2rem;color:#999;letter-spacing:normal}.code-example{margin-top:1.5rem;margin-bottom:0}.code-example-body{white-space:pre;word-wrap:break-word}.example{position:relative;margin-top:4rem}.example-header{font-weight:600;margin-top:1.5rem;margin-bottom:.5rem}.example-description{margin-bottom:1.5rem}.example-screenshot-wrapper{display:block;position:relative;overflow:hidden;border-radius:6px;border:1px solid #eee;height:250px}.example-screenshot{width:100%;height:auto}.example-screenshot.coming-soon{width:auto;position:absolute;background:#eee;top:5px;right:5px;bottom:5px;left:5px}@media (min-width:550px){.header{margin-top:18rem}.value-props{margin-top:9rem;margin-bottom:7rem}.value-img{margin-bottom:1rem}.example-grid .column,.example-grid .columns{margin-bottom:1.5rem}.docs-section{padding:6rem 0}.example-send-yourself-copy{float:right;margin-top:12px}.example-screenshot-wrapper{position:absolute;width:48%;height:100%;left:0;max-height:none}}@media (min-width:750px){.popover.open{display:block}.popover{display:none;position:absolute;top:0;left:0;background:#fff;border:1px solid #eee;border-radius:4px;top:92%;left:-50%;-webkit-filter:drop-shadow(0 0 6px rgba(0,0,0,0.1));-moz-filter:drop-shadow(0 0 6px rgba(0,0,0,0.1));filter:drop-shadow(0 0 6px rgba(0,0,0,0.1))}.popover_right{left:auto;right:0;top:calc(100% + 11px)}.popover-item:first-child .popover-link:after,.popover-item:first-child .popover-link:before{bottom:100%;left:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.popover-item:first-child .popover-link:after{border-color:rgba(255,255,255,0);border-bottom-color:#fff;border-width:10px;margin-left:-10px}.popover-item:first-child .popover-link:before{border-color:rgba(238,238,238,0);border-bottom-color:#eee;border-width:11px;margin-left:-11px}.popover-list{padding:0;margin:0;list-style:none}.popover-item{padding:0;margin:0}.popover-link{position:relative;color:#222;display:block;padding:8px 20px;border-bottom:1px solid #eee;text-decoration:none;text-transform:uppercase;font-size:1rem;font-weight:600;text-align:center;letter-spacing:.1rem}.popover-item:first-child .popover-link{border-radius:4px 4px 0 0}.popover-item:last-child .popover-link{border-radius:0 0 4px 4px;border-bottom-width:0}.popover-link:hover{color:#fff;background:#33C3F0}.popover-link:hover,.popover-item:first-child .popover-link:hover:after{border-bottom-color:#33C3F0}}'},104:function(e,t){e.exports=".um-drafts__item{border-bottom:1px solid #eee;padding:4rem 0;margin-bottom:0}.um-drafts__item-link{color:inherit;text-decoration:none}.um-drafts__item-link:hover{color:inherit}.um-drafts__item-actions{position:relative;float:right}.um-drafts__item-subcontent{font-size:1.1rem;color:#999;letter-spacing:normal;font-weight:normal;display:block;cursor:pointer}@media (min-width:550px){.in-drafts__item{padding:20px 0}}.draft-preview{position:relative;min-height:150px}.draft-preview__img{box-shadow:6px 6px 8px -10px rgba(0,0,0,0.7);position:absolute;right:0;max-height:150px;max-width:300px;object-fit:cover}"},146:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return r}));function o(e){if(!document.getElementById(e)){var t=document.getElementsByTagName("head")[0],i=document.createElement("link");i.id=e,i.rel="stylesheet",i.type="text/css",i.href=document.location.origin+e,i.media="all",t.appendChild(i)}}function r(e){let t="",i="",o="";if(void 0!==e&&void 0!==e.ops&&e.ops.length>0){t=String(e.ops[0].insert),i=String(e.ops[2].insert);const r=e.ops.find(e=>void 0!==n(e,["insert","blockFigure","image"]));if(void 0!==r&&(o=n(r,["insert","blockFigure","image"])),i.length<3){for(const[t,r]of e.ops.entries())if(t>2){if(i.length>100)break;void 0!==n(r,["insert","blockFigure","image"])?o=n(r,["insert","blockFigure","image"]):i+=" "+r.insert}i+="..."}}return i=i.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/`/g,"&DiacriticalGrave;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),{title:t,content:i,image:o}}function n(e,t){return t.reduce((e,t)=>e&&"undefined"!==e[t]?e[t]:void 0,e)}},28:function(e,t,i){"use strict";i.r(t),i.d(t,"DraftComponent",(function(){return w}));var o=i(23),r=i(13),n=i(17),a=i(16),s=i(31),l=i(25),p=i.n(l),c=i(1),d=i(4);var m,h=function(){function e(e,t){this.predicate=e,this.inclusive=t}return e.prototype.call=function(e,t){return t.subscribe(new f(e,this.predicate,this.inclusive))},e}(),f=function(e){function t(t,i,o){var r=e.call(this,t)||this;return r.predicate=i,r.inclusive=o,r.index=0,r}return c.a(t,e),t.prototype._next=function(e){var t,i=this.destination;try{t=this.predicate(e,this.index++)}catch(e){return void i.error(e)}this.nextOrComplete(e,t)},t.prototype.nextOrComplete=function(e,t){var i=this.destination;Boolean(t)?i.next(e):(this.inclusive&&i.next(e),i.complete())},t}(d.a),u=i(98),g=i(151),v=(i(57),i(146)),b=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},x=function(e,t,i,o){return new(i||(i=Promise))((function(r,n){function a(e){try{l(o.next(e))}catch(e){n(e)}}function s(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}l((o=o.apply(e,t||[])).next())}))};u.b.add(g.a),function(e){e[e.delete=0]="delete",e[e.publish=1]="publish"}(m||(m={}));let w=class extends o.a{constructor(e=new n.a,t){super(s.a,!1),this._storageService=e,this._authService=t,this.styles=r.e`
  <style>
    ${i(39)}
  </style>
`,this.$={isPreloader:!0},this._authService=new a.a(this._storageService)}connectedCallback(){var e,t;super.connectedCallback(),this._authService.$authenticated.pipe((e=()=>void 0===this.$.drafts,void 0===t&&(t=!1),function(i){return i.lift(new h(e,t))})).subscribe(e=>{e?this._storageService.api.draft.getAll().then(e=>{const t=e.map(e=>{const{content:t,title:i,image:o}=Object(v.b)(e.content);return{id:e.id,title:i,image:o,content:t,linkUrl:"/editor/"+e.id,actions:[{label:"удалить",type:m.delete}]}});this.$={isPreloader:!1,drafts:t}}):null!==e&&(console.log(2222222222,e),this._authService.login())}),u.a.watch()}render(){return r.e`
    ${this.styles}
    <um-preloader ?loading=${this.$.isPreloader}>
      <div class="row">
        <div class="twelve columns um-drafts__submenu">
          <span @click=${this.handleBtnExportAllDrafts.bind(this)} class="um-drafts__export-all">
            <i class="far fa-save fa-2x"></i>
          </span>
          <button @click=${this.handleBtnCreateNewDraft.bind(this)}>Новый черновик</button>
        </div>
      </div>
    
      <inscriptum-list @action=${this.handleAction.bind(this)} .value=${this.$.drafts}></inscriptum-list>
    </um-preloader>
    `}handleBtnCreateNewDraft(){return x(this,void 0,void 0,(function*(){const e=yield this._storageService.api.draft.create({author_id:this._storageService.author.id});p()("/editor/"+e.id)}))}handleBtnExportAllDrafts(e){e.preventDefault();const t=JSON.stringify(this.$.drafts),i=document.createElement("a"),o=new Blob([t],{type:"application/octet-stream"});i.href=window.URL.createObjectURL(o),i.download="drafts.json",i.click()}handleAction({detail:e}){switch(e.type){case m.delete:this._deleteDraft(e.id)}}_deleteDraft(e){this._storageService.api.draft.deleteById({id:e}).then(e=>{this.$=Object.assign(Object.assign({},this.$),{drafts:this.$.drafts&&this.$.drafts.filter(t=>t.id!==e.id)})})}};b([Object(o.e)()],w.prototype,"$",void 0),w=b([Object(o.b)("inscriptum-drafts")],w)},39:function(e,t){e.exports=".um-drafts__submenu{display:flex;flex-direction:row-reverse;padding-top:10px;border-bottom:1px solid #eee}.um-drafts__export-all{margin:0 0 10px 10px;stroke:#ffffff;stroke-width:30px;color:#bbb}.um-drafts__export-all:hover{color:#888;cursor:pointer}"},57:function(e,t,i){"use strict";i.r(t),i.d(t,"ListComponent",(function(){return h}));var o=i(23),r=i(13),n=i(160),a=i(31),s=i(98),l=i(108),p=i(151),c=i(161),d=i(33),m=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};s.b.add(l.a,p.a);let h=class extends o.a{constructor(){super(a.a,!1),this.styles=r.e`
    <style>
      ${i(103)}
      ${i(104)}
    </style>
  `,this._list=[]}set value(e){void 0!==e&&(this._list=e)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.closePopovers.bind(this))}disconnectedCallback(){document.removeEventListener("click",this.closePopovers.bind(this))}render(){if(this._list.length<1)return r.e``;const e=(e,t=[])=>t.length>0?r.e`
            <div class="um-drafts__item-actions">
              <span @click=${this.openPopover.bind(this)} class="um-drafts__item-subcontent" data-popover=${e}>
                ${e} <i class="fas fa-angle-down" style="color:#999"></i>
              </span>
              <div id=${e} class="popover popover_right">
                <ul class="popover-list">
                  ${t.map(t=>r.e`
                      <li class="popover-item">
                        <a class="popover-link" @click=${this.dispatchAction.bind(this,{type:t.type,id:e})}>${t.label}</a>
                      </li>
                    `)}
                </ul>
              </div>
            </div>
          `:"",t=Object(n.a)(this._list,e=>e.id,(t,i)=>r.e`
        <div class="um-drafts__item">
          <h6 class="docs-header">
            ${t.title}
          </h6>
          <div class="row">
            ${t.image.length>0?r.e`
                  <div class="two columns draft-preview">
                    <img class="draft-preview__img" src="${t.image}" />
                  </div>
                `:""}
            <div class=${t.image.length>0?"ten columns":""}>
              <a class="um-drafts__item-link" href=${t.linkUrl} rel=${Object(c.a)(t.linkRel)}>
                <p class="docs-preview">${Object(d.a)(t.content)}</p>
              </a>
              ${e(t.id,"function"==typeof t.actions?t.actions():t.actions)}
            </div>
          </div>
        </div>
      `);return r.e`
      ${this.styles}
      <div class="container">
        ${t}
      </div>
    `}dispatchAction(e){this.dispatchEvent(new CustomEvent("action",{detail:e}))}openPopover(e){var t;e.preventDefault(),this.closePopovers();const i=null===(t=e.target)||void 0===t?void 0:t.dataset.popover,o=this.querySelector(`[id="${i}"]`);null!==o&&o.classList.add("open"),e.stopImmediatePropagation()}closePopovers(){this.querySelectorAll(".popover.open").forEach(e=>{e.classList.remove("open")})}};m([Object(o.e)()],h.prototype,"_list",void 0),h=m([Object(o.b)("inscriptum-list")],h)}}]);