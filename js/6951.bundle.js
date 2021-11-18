"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[6951],{6951:(t,e,i)=>{i.r(e),i.d(e,{DraftComponent:()=>b});var n,s=i(745),r=i(3445),a=i(1966),l=i(6201),c=i(5161),o=i.n(c),d=i(8947),h=i(6024),f=(i(8383),i(4938)),u=i(3135),p=i(7848),v=function(t,e,i,n){var s,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(a=(r<3?s(a):r>3?s(e,i,a):s(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},y=function(t,e,i,n){return new(i||(i=Promise))((function(s,r){function a(t){try{c(n.next(t))}catch(t){r(t)}}function l(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,l)}c((n=n.apply(t,e||[])).next())}))};d.vI.add(h.r6),function(t){t[t.delete=0]="delete",t[t.publish=1]="publish"}(n||(n={}));let b=class extends s.yB{constructor(t=new a.V,e){super(l.Z,!1),this._storageService=t,this._authService=e,this.styles=r.dy`
    <style>
      ${i(3510)}
    </style>
  `,this.$={isPreloader:!0}}connectedCallback(){super.connectedCallback(),(0,p.G)((()=>y(this,void 0,void 0,(function*(){try{this._storageService.api.draft.getAll().then((t=>{const e=t.map((t=>{const e=t.pages[0].content,{description:i,title:s,image:r}=null!=e&&"ops"in e?(0,f.Ro)(e):(0,f.WV)(e),a=t.notes.length>0?[{code:"note",link:null!=t.notes[0].static_link?{href:t.notes[0].static_link+(u.v.isDevMode?".html":""),rel:"external"}:void 0}]:void 0;return{id:t.id,preview:{title:s,description:i,image:r},linkUrl:"/draft/"+t.id,actions:[{label:"удалить",type:n.delete}],tags:a}}));this.$={isPreloader:!1,drafts:e}}))}catch(t){}})))),d.vz.watch()}render(){return r.dy`
      ${this.styles}
      <um-preloader ?loading=${this.$.isPreloader}>
        <div class="row">
          <div class="twelve columns um-drafts__submenu">
            <span @click=${this.handleBtnExportAllDrafts.bind(this)} class="um-drafts__export-all">
              <i class="far fa-save fa-2x"></i>
            </span>
            <button class="button" @click=${this.handleBtnCreateNewDraft.bind(this)}>Новый черновик</button>
          </div>
        </div>

        <inscriptum-list @action=${this.handleAction.bind(this)} .value=${this.$.drafts}></inscriptum-list>
      </um-preloader>
    `}handleBtnCreateNewDraft(){return y(this,void 0,void 0,(function*(){const t=yield this._storageService.api.draft.create(this._storageService.author.id);o()("/draft/"+t.id)}))}handleBtnExportAllDrafts(t){t.preventDefault();const e=JSON.stringify(this.$.drafts),i=document.createElement("a"),n=new Blob([e],{type:"application/octet-stream"});i.href=window.URL.createObjectURL(n),i.download="drafts.json",i.click()}handleAction({detail:t}){switch(t.type){case n.delete:this._deleteDraft(t.id)}}_deleteDraft(t){this._storageService.api.draft.deleteById({id:t}).then((t=>{this.$=Object.assign(Object.assign({},this.$),{drafts:this.$.drafts&&this.$.drafts.filter((e=>e.id!==t.id))})}))}};v([(0,s.SB)()],b.prototype,"$",void 0),b=v([(0,s.Qr)("inscriptum-drafts")],b)}}]);