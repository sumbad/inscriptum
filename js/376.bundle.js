/*! For license information please see 376.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[376],{43:(e,t,o)=>{o.r(t),o.d(t,{draftListElement:()=>I});var i=o(1640),r=o(7165),n=o(5161),a=o.n(n),l=o(2114),s=o(3135),p=o(4938),d=o(7848),c=function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function a(e){try{s(i.next(e))}catch(e){n(e)}}function l(e){try{s(i.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,l)}s((i=i.apply(e,t||[])).next())}))};const m="Can't find ID for a new draft",u="Author was not found",f=e=>`Can't delete draft ${e}`;var b;function h(){return c(this,void 0,void 0,(function*(){return yield(0,d.G)((()=>c(this,void 0,void 0,(function*(){const{drafts:e}=yield(0,l.S)().getAllDrafts();return e.map((e=>{const t=e.pages[0].content,{description:o,title:i,image:r}=(0,p.WV)(t),n=e.notes.length>0?[{code:"note",link:null!=e.notes[0].static_link?{href:e.notes[0].static_link+(s.v.isDevMode?".html":""),rel:"external"}:void 0}]:void 0;return{id:e.id,preview:{title:i,description:o,image:r},linkUrl:"/draft/"+e.id,actions:[{label:"delete",type:b.delete}],tags:n}}))}))))}))}function g(){return c(this,void 0,void 0,(function*(){return yield(0,d.G)((e=>c(this,void 0,void 0,(function*(){const t=(yield(0,l.S)().findAuthorByAuth0({auth0_id:e.userInfo.uid})).author[0];if(null==t)throw alert(u),new Error(u);const{insert_draft_one:o}=yield(0,l.S)().createNewDraft({author_id:t.id});if(null==o)throw alert(m),new Error(m);return o}))))}))}function v(e){return c(this,void 0,void 0,(function*(){return yield(0,d.G)((()=>c(this,void 0,void 0,(function*(){const{update_draft_by_pk:t}=yield(0,l.S)().deleteDraftById({id:e,ended_at:(new Date).toISOString()});if(null==t)throw alert(m),new Error(f(e));return t}))))}))}!function(e){e[e.delete=0]="delete",e[e.publish=1]="publish"}(b||(b={}));var y=o(669);const x=(0,r.NG)((function*(){for(;;)yield(0,y.$)(i.YP`
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-text" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
          <line x1="9" y1="9" x2="10" y2="9"></line>
          <line x1="9" y1="13" x2="15" y2="13"></line>
          <line x1="9" y1="17" x2="15" y2="17"></line>
        </svg>
      `,this)})),w=(0,r.NG)((function*(){for(;;)yield(0,y.$)(i.YP`
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
          <circle cx="12" cy="14" r="2"></circle>
          <polyline points="14 4 14 8 8 8 8 4"></polyline>
        </svg>
      `,this)}));var k=o(998),z=o(667),_=o(1775),$=o(7296);const E=x(),L=w(),I=((0,k.i)("inscriptum-menu"),(0,_.t)("inscriptum-list"),(0,$.z)("inscriptum-preloader"),(0,r.EG)()((function*(){let e=[],t=!0;const r=t=>{t.preventDefault();const o=JSON.stringify(e),i=document.createElement("a"),r=new Blob([o],{type:"application/octet-stream"});i.href=window.URL.createObjectURL(r),i.download="drafts.json",i.click()},n=({detail:e})=>{if(e.type===b.delete)m(e.id)},{$:l,_:s}=(0,z.p)(h),{$:p,_:d}=(0,z.p)(g),{$:c,_:m}=(0,z.p)(v);l.subscribe((o=>{e=o,t=!1,this.next()})),p.subscribe((e=>{a()("/draft/"+e.id)})),c.subscribe((t=>{e=e.filter((e=>e.id!==t.id)),this.next()})),s();try{for(;;)yield(0,i.sY)(i.dy`<div class="container">
          <style>$${o(3510)}</style>

          <inscriptum-menu></inscriptum-menu>

          <inscriptum-preloader .loading=${t}>
            <div class="row">
              <div class="twelve columns um-drafts__submenu">
                <button class="btn btn_icon" title="Export all drafts" @click=${r}>
                  ${L({})}
                </button>
                <button class="btn btn_icon" title="Create a new draft" @click=${d}>
                  ${E({})}
                </button>
              </div>
            </div>

            <inscriptum-list .list=${e} @action=${n}></inscriptum-list>
          </inscriptum-preloader>
        </div>`,this)}finally{l.complete(),p.complete(),c.complete()}})))},1775:(e,t,o)=>{o.d(t,{t:()=>c});var i=o(1640),r=o(7165),n=o(3619);const a=e=>null!=e?e:i.Ld;var l=o(3255);class s extends l.Xe{constructor(e){if(super(e),this.it=i.Ld,e.type!==l.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===i.Ld||null==e)return this.vt=void 0,this.it=e;if(e===i.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.vt;this.it=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}s.directiveName="unsafeHTML",s.resultType=1;const p=(0,l.XM)(s);var d=o(3435);const c=(0,r.EG)({props:{list:r.p.req(),onaction:r.p.opt()}})((function*(e){const t=e=>t=>this.dispatchEvent(new CustomEvent("action",{detail:e})),r=()=>{this.querySelectorAll(".popover.open").forEach((e=>{e.classList.remove("open")}))},l=e=>{var t;e.preventDefault(),r();const o=null===(t=e.target)||void 0===t?void 0:t.dataset.popover,i=this.querySelector(`[id="${o}"]`);null!==i&&i.classList.add("open"),e.stopImmediatePropagation()};try{for(requestAnimationFrame((()=>{document.addEventListener("click",r)}));;){const r=(e,o=[])=>o.length>0?i.dy`<div class="um-drafts__item-actions">
            <span @click=${l} class="um-drafts__item-subcontent" data-popover=${e}>
              ${e}${" "}
              <i class="fas fa-angle-down" style=${d.iv`
                  color: #999;
                `}></i>
            </span>
            <div id=${e} class="popover popover_right">
              <ul class="popover-list">
                ${o.map((o=>i.dy`<li class="popover-item">
                    <a class="popover-link" @click=${t({type:o.type,id:e})}>
                      ${o.label}
                    </a>
                  </li>`))}
              </ul>
            </div>
          </div>`:"",s=({listItem:e})=>(e.tags||[]).map((e=>null!=e.link?i.dy`<a .href=${`/${e.link.href}`} .rel=${a(e.link.rel)}>
              ${e.code}
            </a>`:e.code)),c=({img:e})=>null!=e?i.dy`<div class="two columns draft-preview">
            <img class="draft-preview__img" .src=${e}>
          </div>`:"";e=yield(0,i.sY)(i.dy`
          <style>
            ${o(431)}
            ${o(7187)}
          </style>
          <div class="container">
            ${(0,n.r)(e.list,(e=>e.id),((e,t)=>{var o;return i.dy`<div class="um-drafts__item">
                  ${s({listItem:e})}
                  <a class="um-drafts__item-link" .href=${e.linkUrl} .rel=${a(e.linkRel)}>
                    <h6 class="docs-header">${e.preview.title}</h6>
                    <div class="row">
                      ${c({img:e.preview.image})}
                      <div class=${(null===(o=e.preview.image)||void 0===o?void 0:o.length)>0?"ten columns":""}>
                        <p class="docs-preview">${p(e.preview.description)}</p>
                        ${r(e.id,"function"==typeof e.actions?e.actions():e.actions)}
                      </div>
                    </div>
                  </a>
                </div>`}))}
          </div>
        `,this)}}finally{document.removeEventListener("click",r)}}))},998:(e,t,o)=>{o.d(t,{i:()=>l});var i=o(1640),r=o(7165),n=o(2182),a=o(5196);const l=(0,r.EG)()((function*(){let e=!1;for(n.f.pipe((0,a.P)((e=>{var t;return null!=(null===(t=e.data)||void 0===t?void 0:t.accessToken)&&!e.isLoading}))).subscribe((()=>{e=!0,this.next()}));;)yield(0,i.sY)(i.dy`
        <style>${o(169)}</style>

        <div class="navbar-spacer"></div>
        <nav class="navbar">
          <div class="container">
            <ul class="navbar-list">
              <li class="navbar-item">
                <a class="navbar-link" href="/notes">
                  Notes
                </a>
              </li>
              <li class="navbar-item">
                <a class="navbar-link" href="/conference">
                  Slides
                </a>
              </li>
              ${e?i.dy`<li class="navbar-item">
                  <a class="navbar-link" href="/drafts">
                    Drafts
                  </a>
                </li>`:""}
            </ul>
          </div>
        </nav>
      `,this)}))},667:(e,t,o)=>{o.d(t,{p:()=>n});var i=o(6716),r=o(1954);function n(e){const t=new i.x;return{$:t,_:(...o)=>(0,r.D)(e(...o)).subscribe({next:e=>t.next(e),error:e=>t.error(e)})}}},7848:(e,t,o)=>{o.d(t,{G:()=>p});var i=o(5467),r=o(9725),n=o(2182),a=o(4727),l=o(5196),s=function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function a(e){try{s(i.next(e))}catch(e){n(e)}}function l(e){try{s(i.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,l)}s((i=i.apply(e,t||[])).next())}))};function p(e,t=`${document.location.origin}/drafts`){return s(this,void 0,void 0,(function*(){return new Promise((o=>{n.f.pipe((0,a.q)(1)).subscribe((e=>{var o;null!=(null===(o=e.data)||void 0===o?void 0:o.accessToken)||e.isLoading||r.Z.dispatch({type:i.C.AUTH,payload:{redirectUri:t}})})),n.f.pipe((0,l.P)((e=>null!=e.data&&!e.isLoading))).subscribe((t=>{console.log("Make authorized work"),o(e(t.data))}))}))}))}},3510:e=>{e.exports='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:rgba(0,0,0,0)}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:root{--light-grey: #e1e1e1;--dark-grey: #333;--primary-color: #33c3f0;--secondary-color: #555555;--border-color: #bbb;--link-color: #1eaedb;--font-color: #222;--color-contrast-low: hsl(240, 1%, 83%);--color-contrast-medium: hsl(240, 1%, 48%);--color-contrast-high: hsl(240, 4%, 20%);--font-family: Inter, sans-serif;--ipad-min-width: 1366}html{font-size:62.5%}body{font-size:1.5em;line-height:1.6;font-weight:400;font-family:"Inter",sans-serif;color:#222}a{color:#1eaedb}a:hover{color:#1b9cc5}hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #e1e1e1}.u-full-width{width:100%;box-sizing:border-box}.u-max-full-width{max-width:100%;box-sizing:border-box}.u-pull-right{float:right}.u-pull-left{float:left}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:2rem;font-weight:300}h1{font-size:4rem;line-height:1.2;letter-spacing:-0.1rem}h2{font-size:3.6rem;line-height:1.25;letter-spacing:-0.1rem}h3{font-size:3rem;line-height:1.3;letter-spacing:-0.1rem}h4{font-size:2.4rem;line-height:1.35;letter-spacing:-0.08rem}h5{font-size:1.8rem;line-height:1.5;letter-spacing:-0.05rem}h6{font-size:1.5rem;line-height:1.6;letter-spacing:0}@media(min-width: 550px){h1{font-size:5rem}h2{font-size:4.2rem}h3{font-size:3.6rem}h4{font-size:3rem}h5{font-size:2.4rem}h6{font-size:1.5rem}}p{margin-top:0}.container{position:relative;width:100%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box}.column,.columns{width:100%;float:left;box-sizing:border-box}@media(min-width: 400px){.container{width:85%;padding:0}}@media(min-width: 550px){.container{width:80%}.column,.columns{margin-left:4%}.column:first-child,.columns:first-child{margin-left:0}.one.column,.one.columns{width:4.6666666667%}.two.columns{width:13.3333333333%}.three.columns{width:22%}.four.columns{width:30.6666666667%}.five.columns{width:39.3333333333%}.six.columns{width:48%}.seven.columns{width:56.6666666667%}.eight.columns{width:65.3333333333%}.nine.columns{width:74%}.ten.columns{width:82.6666666667%}.eleven.columns{width:91.3333333333%}.twelve.columns{width:100%;margin-left:0}.one-third.column{width:30.6666666667%}.two-thirds.column{width:65.3333333333%}.one-half.column{width:48%}.offset-by-one.column,.offset-by-one.columns{margin-left:8.6666666667%}.offset-by-two.column,.offset-by-two.columns{margin-left:17.3333333333%}.offset-by-three.column,.offset-by-three.columns{margin-left:26%}.offset-by-four.column,.offset-by-four.columns{margin-left:34.6666666667%}.offset-by-five.column,.offset-by-five.columns{margin-left:43.3333333333%}.offset-by-six.column,.offset-by-six.columns{margin-left:52%}.offset-by-seven.column,.offset-by-seven.columns{margin-left:60.6666666667%}.offset-by-eight.column,.offset-by-eight.columns{margin-left:69.3333333333%}.offset-by-nine.column,.offset-by-nine.columns{margin-left:78%}.offset-by-ten.column,.offset-by-ten.columns{margin-left:86.6666666667%}.offset-by-eleven.column,.offset-by-eleven.columns{margin-left:95.3333333333%}.offset-by-one-third.column,.offset-by-one-third.columns{margin-left:34.6666666667%}.offset-by-two-thirds.column,.offset-by-two-thirds.columns{margin-left:69.3333333333%}.offset-by-one-half.column,.offset-by-one-half.column{margin-left:52%}}.container:after,.row:after,.u-cf{content:"";display:table;clear:both}.button{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:11px;font-weight:600;line-height:38px;letter-spacing:.1rem;text-transform:uppercase;text-decoration:none;white-space:nowrap;background-color:rgba(0,0,0,0);border-radius:4px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}input[type=submit],input[type=reset],input[type=button]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:11px;font-weight:600;line-height:38px;letter-spacing:.1rem;text-transform:uppercase;text-decoration:none;white-space:nowrap;background-color:rgba(0,0,0,0);border-radius:4px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}.button:hover{color:#333;border-color:#888;outline:0}input[type=submit]:hover,input[type=reset]:hover,input[type=button]:hover{color:#333;border-color:#888;outline:0}.button:focus{color:#333;border-color:#888;outline:0}input[type=submit]:focus,input[type=reset]:focus{color:#333;border-color:#888;outline:0}.button.button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}input[type=submit].button-primary,input[type=reset].button-primary,input[type=button].button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}.button.button-primary:hover{color:#fff;background-color:#1eaedb;border-color:#1eaedb}input[type=submit].button-primary:hover,input[type=reset].button-primary:hover,input[type=button].button-primary:hover{color:#fff;background-color:#1eaedb;border-color:#1eaedb}.button.button-primary:focus{color:#fff;background-color:#1eaedb;border-color:#1eaedb}input[type=submit].button-primary:focus,input[type=reset].button-primary:focus,input[type=button].button-primary:focus{color:#fff;background-color:#1eaedb;border-color:#1eaedb}input[type=email],input[type=number],input[type=search],input[type=text],input[type=tel],input[type=url],input[type=password]{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}input[type=email],input[type=number],input[type=search],input[type=text],input[type=tel],input[type=url],input[type=password],textarea,select{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}input[type=email],input[type=number],input[type=search],input[type=text],input[type=tel],input[type=url],input[type=password]{-webkit-appearance:none;-moz-appearance:none;appearance:none}textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-height:65px;padding-top:6px;padding-bottom:6px}input[type=email]:focus,input[type=number]:focus,input[type=search]:focus,input[type=text]:focus,input[type=tel]:focus,input[type=url]:focus,input[type=password]:focus{border:1px solid #33c3f0;outline:0}textarea:focus,select:focus{border:1px solid #33c3f0;outline:0}label,legend{display:block;margin-bottom:.5rem;font-weight:600}fieldset{padding:0;border-width:0}input[type=checkbox],input[type=radio]{display:inline}label>.label-body{display:inline-block;margin-left:.5rem;font-weight:normal}ul{list-style:circle inside}ol{list-style:decimal inside;padding-left:0;margin-top:0}ul{padding-left:0;margin-top:0}ul ul,ul ol{margin:1.5rem 0 1.5rem 3rem;font-size:90%}ol ol,ol ul{margin:1.5rem 0 1.5rem 3rem;font-size:90%}li{margin-bottom:1rem}code{padding:.2rem .5rem;margin:0 .2rem;font-size:90%;white-space:nowrap;background:#f1f1f1;border:1px solid #e1e1e1;border-radius:4px}pre>code{display:block;padding:1rem 1.5rem;white-space:pre}th,td{padding:12px 15px;text-align:left;border-bottom:1px solid #e1e1e1}th:first-child,td:first-child{padding-left:0}th:last-child,td:last-child{padding-right:0}button,.button{margin-bottom:1rem}input,textarea,select,fieldset{margin-bottom:1.5rem}pre,blockquote,dl,figure,table,p,ul,ol,form{margin-bottom:2.5rem}:root{--light-grey: #e1e1e1;--dark-grey: #333;--primary-color: #33c3f0;--secondary-color: #555555;--border-color: #bbb;--link-color: #1eaedb;--font-color: #222;--color-contrast-low: hsl(240, 1%, 83%);--color-contrast-medium: hsl(240, 1%, 48%);--color-contrast-high: hsl(240, 4%, 20%);--font-family: Inter, sans-serif;--ipad-min-width: 1366}.btn{cursor:pointer}.btn.btn_icon{background:rgba(0,0,0,0);border:none}.btn.btn_icon .icon-tabler{transition:.2s;stroke:#bbb;stroke:var(--border-color);color:#bbb;color:var(--border-color)}.btn.btn_icon .icon-tabler:hover{stroke:#333;stroke:var(--dark-grey)}.um-drafts__submenu{display:flex;flex-direction:row-reverse;padding-top:10px;border-bottom:1px solid #eee}.um-drafts__export-all{margin:0 0 10px 10px;stroke:#fff;stroke-width:30px;color:#bbb}.um-drafts__export-all:hover{color:#888;cursor:pointer}'},7187:e=>{e.exports=".um-drafts__item{border-bottom:1px solid #eee;padding:4rem 0;margin-bottom:0}.um-drafts__item-link{color:inherit;text-decoration:none}.um-drafts__item-link:hover{color:inherit}.um-drafts__item-actions{position:relative;float:right}.um-drafts__item-subcontent{font-size:1.1rem;color:#999;letter-spacing:normal;font-weight:normal;display:block;cursor:pointer}@media(min-width: 550px){.in-drafts__item{padding:20px 0}}.draft-preview{position:relative;min-height:150px}.draft-preview__img{box-shadow:6px 6px 8px -10px rgba(0,0,0,.7);position:absolute;right:0;max-height:150px;max-width:300px;object-fit:cover}"},431:e=>{e.exports='.header{margin-top:6rem;text-align:center}.value-prop{margin-top:1rem}.value-props{margin-top:4rem;margin-bottom:4rem}.docs-header{text-transform:uppercase;font-size:1.4rem;letter-spacing:.2rem;font-weight:250}.docs-section{border-top:1px solid #eee;padding:4rem 0;margin-bottom:0}.value-img{display:block;text-align:center;margin:2.5rem auto 0}.example-grid .column,.example-grid .columns{background:#eee;text-align:center;border-radius:4px;font-size:1rem;text-transform:uppercase;height:30px;line-height:30px;margin-bottom:.75rem;font-weight:600;letter-spacing:.1rem}.docs-preview{white-space:pre-line;font-weight:330}.docs-example .row,.docs-example.row,.docs-example form{margin-bottom:0}.docs-example h1,.docs-example h2,.docs-example h3,.docs-example h4,.docs-example h5,.docs-example h6{margin-bottom:1rem}.heading-font-size{font-size:1.2rem;color:#999;letter-spacing:normal}.code-example{margin-top:1.5rem;margin-bottom:0}.code-example-body{white-space:pre;word-wrap:break-word}.example{position:relative;margin-top:4rem}.example-header{font-weight:600;margin-top:1.5rem;margin-bottom:.5rem}.example-description{margin-bottom:1.5rem}.example-screenshot-wrapper{display:block;position:relative;overflow:hidden;border-radius:6px;border:1px solid #eee;height:250px}.example-screenshot{width:100%;height:auto}.example-screenshot.coming-soon{width:auto;position:absolute;background:#eee;top:5px;right:5px;bottom:5px;left:5px}@media(min-width: 550px){.header{margin-top:18rem}.value-props{margin-top:9rem;margin-bottom:7rem}.value-img{margin-bottom:1rem}.example-grid .column,.example-grid .columns{margin-bottom:1.5rem}.docs-section{padding:6rem 0}.example-send-yourself-copy{float:right;margin-top:12px}.example-screenshot-wrapper{position:absolute;width:48%;height:100%;left:0;max-height:none}}@media(min-width: 750px){.popover.open{display:block}.popover{display:none;position:absolute;top:0;left:0;background:#fff;border:1px solid #eee;border-radius:4px;top:92%;left:-50%;filter:drop-shadow(0 0 6px rgba(0, 0, 0, 0.1))}.popover_right{left:auto;right:0;top:calc(100% + 11px)}.popover-item:first-child .popover-link:after,.popover-item:first-child .popover-link:before{bottom:100%;left:50%;border:solid rgba(0,0,0,0);content:" ";height:0;width:0;position:absolute;pointer-events:none}.popover-item:first-child .popover-link:after{border-color:rgba(255,255,255,0);border-bottom-color:#fff;border-width:10px;margin-left:-10px}.popover-item:first-child .popover-link:before{border-color:rgba(238,238,238,0);border-bottom-color:#eee;border-width:11px;margin-left:-11px}.popover-list{padding:0;margin:0;list-style:none}.popover-item{padding:0;margin:0}.popover-link{position:relative;color:#222;display:block;padding:8px 20px;border-bottom:1px solid #eee;text-decoration:none;text-transform:uppercase;font-size:1rem;font-weight:600;text-align:center;letter-spacing:.1rem}.popover-item:first-child .popover-link{border-radius:4px 4px 0 0}.popover-item:last-child .popover-link{border-radius:0 0 4px 4px;border-bottom-width:0}.popover-link:hover{color:#fff;background:#33c3f0}.popover-link:hover,.popover-item:first-child .popover-link:hover:after{border-bottom-color:#33c3f0}}'},169:e=>{e.exports=".navbar{display:none}@media(min-width: 750px){.navbar+.docs-section{border-top-width:0}.navbar,.navbar-spacer{display:block;width:100%;height:6.5rem;background:#fff;z-index:99;border-top:1px solid #eee;border-bottom:1px solid #eee}.navbar-spacer{display:none}.navbar>.container{width:100%}.navbar-list{list-style:none;margin-bottom:0}.navbar-item{position:relative;float:left;margin-bottom:0}.navbar-link{text-transform:uppercase;font-size:11px;font-weight:600;letter-spacing:.2rem;margin-right:35px;text-decoration:none;line-height:6.5rem;color:#222}.navbar-link.active{color:#33c3f0}.has-docked-nav .navbar{position:fixed;top:0;left:0}.has-docked-nav .navbar-spacer{display:block}.has-docked-nav .navbar>.container{width:80%}}"}}]);