/*! For license information please see 300.bundle.js.LICENSE.txt */
(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[300],{3300:(e,t,o)=>{"use strict";o.r(t),o.d(t,{noteListElement:()=>v});var i,r=o(1640),n=o(9890),l=o(667),s=o(2114),a=o(9725),p=o(5467),d=o(2182),c=o(5196),m=o(3135),u=function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function l(e){try{a(i.next(e))}catch(e){n(e)}}function s(e){try{a(i.throw(e))}catch(e){n(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(l,s)}a((i=i.apply(e,t||[])).next())}))};function f(){return u(this,void 0,void 0,(function*(){let e=[];try{e=(yield o(9228)(`./${m.v.nodeListFileName}`)).default}catch(t){e=(yield(0,s.S)().getAllNotes()).notes}let t=yield d.f.pipe((0,c.P)()).toPromise();const r=null!=(null==t?void 0:t.data);return!r&&(null==t?void 0:t.isLoading)&&(a.Z.dispatch({type:p.C.AUTH,payload:{silent:!0}}),t=yield d.f.pipe((0,c.P)((e=>!e.isLoading))).toPromise()),e.map((e=>({id:e.id,preview:e.preview,linkUrl:e.static_link+(m.v.isDevMode?".html":""),linkRel:"external",actions:()=>r?[{type:i.edit,label:"edit"}]:[]})))}))}!function(e){e[e.edit=0]="edit",e[e.delete=1]="delete"}(i||(i={}));var b=o(5161),h=o.n(b),g=o(998),y=o(1775),x=o(7296);(0,g.i)("inscriptum-menu"),(0,y.t)("inscriptum-list"),(0,x.z)("inscriptum-preloader");const v=(0,n.EG)()((function*(){let e=!0,t=[];const{_:n,$:s}=(0,l.p)(f);n(),s.subscribe((o=>{t=o,e=!1,this.next()}));const a=({detail:e})=>{if(e.type===i.edit)h()("/draft/"+e.id)};try{for(;;)yield(0,r.sY)(r.dy`
          <style>${o(1691)}</style>
          <div class="container">
            <inscriptum-menu></inscriptum-menu>

            

            <inscriptum-preloader .loading=${e}>
              <inscriptum-list .list=${t} @action=${a}></inscriptum-list>
            </inscriptum-preloader>
          </div>
        `,this)}finally{s.complete()}}))},1775:(e,t,o)=>{"use strict";o.d(t,{t:()=>c});var i=o(1640),r=o(9890),n=o(3619);const l=e=>null!=e?e:i.Ld;var s=o(3255);class a extends s.Xe{constructor(e){if(super(e),this.it=i.Ld,e.type!==s.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===i.Ld||null==e)return this.vt=void 0,this.it=e;if(e===i.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.vt;this.it=e;const t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;const p=(0,s.XM)(a);var d=o(3853);const c=(0,r.EG)({props:{list:r.p.req(),onaction:r.p.opt()}})((function*(e){const t=e=>t=>this.dispatchEvent(new CustomEvent("action",{detail:e})),r=()=>{this.querySelectorAll(".popover.open").forEach((e=>{e.classList.remove("open")}))},s=e=>{var t;e.preventDefault(),r();const o=null===(t=e.target)||void 0===t?void 0:t.dataset.popover,i=this.querySelector(`[id="${o}"]`);null!==i&&i.classList.add("open"),e.stopImmediatePropagation()};try{for(requestAnimationFrame((()=>{document.addEventListener("click",r)}));;){const r=(e,o=[])=>o.length>0?i.dy`<div class="um-drafts__item-actions">
            <span @click=${s} class="um-drafts__item-subcontent" data-popover=${e}>
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
          </div>`:"",a=({listItem:e})=>(e.tags||[]).map((e=>null!=e.link?i.dy`<a .href=${`/${e.link.href}`} .rel=${l(e.link.rel)}>
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
                  ${a({listItem:e})}
                  <a class="um-drafts__item-link" .href=${e.linkUrl} .rel=${l(e.linkRel)}>
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
        `,this)}}finally{document.removeEventListener("click",r)}}))},998:(e,t,o)=>{"use strict";o.d(t,{i:()=>s});var i=o(1640),r=o(9890),n=o(2182),l=o(5196);const s=(0,r.EG)()((function*(){let e=!1;for(n.f.pipe((0,l.P)((e=>{var t;return null!=(null===(t=e.data)||void 0===t?void 0:t.accessToken)&&!e.isLoading}))).subscribe((()=>{e=!0,this.next()}));;)yield(0,i.sY)(i.dy`
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
      `,this)}))},667:(e,t,o)=>{"use strict";o.d(t,{p:()=>n});var i=o(6716),r=o(1954);function n(e){const t=new i.x;return{$:t,_:(...o)=>(0,r.D)(e(...o)).subscribe({next:e=>t.next(e),error:e=>t.error(e)})}}},9228:(e,t,o)=>{var i={"./list":[1362,889],"./list.json":[1362,889]};function r(e){if(!o.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return o.e(t[1]).then((()=>o.t(r,19)))}r.keys=()=>Object.keys(i),r.id=9228,e.exports=r},7187:e=>{"use strict";e.exports=".um-drafts__item{padding:4rem 0;margin-bottom:0}.um-drafts__item:not(:nth-last-child(1)){border-bottom:1px solid #eee}.um-drafts__item-link{color:inherit;text-decoration:none}.um-drafts__item-link:hover{color:inherit}.um-drafts__item-actions{position:relative;float:right}.um-drafts__item-subcontent{font-size:1.1rem;color:#999;letter-spacing:normal;font-weight:normal;display:block;cursor:pointer}@media(min-width: 550px){.in-drafts__item{padding:20px 0}}.draft-preview{position:relative;min-height:150px}.draft-preview__img{box-shadow:6px 6px 8px -10px rgba(0,0,0,.7);position:absolute;right:0;max-height:150px;max-width:300px;object-fit:cover}"},431:e=>{"use strict";e.exports='.header{margin-top:6rem;text-align:center}.value-prop{margin-top:1rem}.value-props{margin-top:4rem;margin-bottom:4rem}.docs-header{text-transform:uppercase;font-size:1.4rem;letter-spacing:.2rem;font-weight:250}.docs-section{border-top:1px solid #eee;padding:4rem 0;margin-bottom:0}.value-img{display:block;text-align:center;margin:2.5rem auto 0}.example-grid .column,.example-grid .columns{background:#eee;text-align:center;border-radius:4px;font-size:1rem;text-transform:uppercase;height:30px;line-height:30px;margin-bottom:.75rem;font-weight:600;letter-spacing:.1rem}.docs-preview{white-space:pre-line;font-weight:330}.docs-example .row,.docs-example.row,.docs-example form{margin-bottom:0}.docs-example h1,.docs-example h2,.docs-example h3,.docs-example h4,.docs-example h5,.docs-example h6{margin-bottom:1rem}.heading-font-size{font-size:1.2rem;color:#999;letter-spacing:normal}.code-example{margin-top:1.5rem;margin-bottom:0}.code-example-body{white-space:pre;word-wrap:break-word}.example{position:relative;margin-top:4rem}.example-header{font-weight:600;margin-top:1.5rem;margin-bottom:.5rem}.example-description{margin-bottom:1.5rem}.example-screenshot-wrapper{display:block;position:relative;overflow:hidden;border-radius:6px;border:1px solid #eee;height:250px}.example-screenshot{width:100%;height:auto}.example-screenshot.coming-soon{width:auto;position:absolute;background:#eee;top:5px;right:5px;bottom:5px;left:5px}@media(min-width: 550px){.header{margin-top:18rem}.value-props{margin-top:9rem;margin-bottom:7rem}.value-img{margin-bottom:1rem}.example-grid .column,.example-grid .columns{margin-bottom:1.5rem}.docs-section{padding:6rem 0}.example-send-yourself-copy{float:right;margin-top:12px}.example-screenshot-wrapper{position:absolute;width:48%;height:100%;left:0;max-height:none}}@media(min-width: 750px){.popover.open{display:block}.popover{display:none;position:absolute;top:0;left:0;background:#fff;border:1px solid #eee;border-radius:4px;top:92%;left:-50%;filter:drop-shadow(0 0 6px rgba(0, 0, 0, 0.1))}.popover_right{left:auto;right:0;top:calc(100% + 11px)}.popover-item:first-child .popover-link:after,.popover-item:first-child .popover-link:before{bottom:100%;left:50%;border:solid rgba(0,0,0,0);content:" ";height:0;width:0;position:absolute;pointer-events:none}.popover-item:first-child .popover-link:after{border-color:rgba(255,255,255,0);border-bottom-color:#fff;border-width:10px;margin-left:-10px}.popover-item:first-child .popover-link:before{border-color:rgba(238,238,238,0);border-bottom-color:#eee;border-width:11px;margin-left:-11px}.popover-list{padding:0;margin:0;list-style:none}.popover-item{padding:0;margin:0}.popover-link{position:relative;color:#222;display:block;padding:8px 20px;border-bottom:1px solid #eee;text-decoration:none;text-transform:uppercase;font-size:1rem;font-weight:600;text-align:center;letter-spacing:.1rem}.popover-item:first-child .popover-link{border-radius:4px 4px 0 0}.popover-item:last-child .popover-link{border-radius:0 0 4px 4px;border-bottom-width:0}.popover-link:hover{color:#fff;background:#33c3f0}.popover-link:hover,.popover-item:first-child .popover-link:hover:after{border-bottom-color:#33c3f0}}'},1691:e=>{"use strict";e.exports='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:rgba(0,0,0,0)}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:root{--light-grey: #e1e1e1;--dark-grey: #333;--primary-color: #33c3f0;--secondary-color: #555555;--border-color: #bbb;--link-color: #1eaedb;--font-color: #222;--color-contrast-low: hsl(240, 1%, 83%);--color-contrast-medium: hsl(240, 1%, 48%);--color-contrast-high: hsl(240, 4%, 20%);--font-family: Inter, sans-serif;--ipad-min-width: 1366;--container-width: 960px}html{font-size:62.5%}body{font-size:1.5em;line-height:1.6;font-weight:400;font-family:"Inter",sans-serif;color:#222}a{color:#1eaedb}a:hover{color:#1b9cc5}hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #e1e1e1}.u-full-width{width:100%;box-sizing:border-box}.u-max-full-width{max-width:100%;box-sizing:border-box}.u-pull-right{float:right}.u-pull-left{float:left}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:2rem;font-weight:300}h1{font-size:4rem;line-height:1.2;letter-spacing:-0.1rem}h2{font-size:3.6rem;line-height:1.25;letter-spacing:-0.1rem}h3{font-size:3rem;line-height:1.3;letter-spacing:-0.1rem}h4{font-size:2.4rem;line-height:1.35;letter-spacing:-0.08rem}h5{font-size:1.8rem;line-height:1.5;letter-spacing:-0.05rem}h6{font-size:1.5rem;line-height:1.6;letter-spacing:0}@media(min-width: 550px){h1{font-size:5rem}h2{font-size:4.2rem}h3{font-size:3.6rem}h4{font-size:3rem}h5{font-size:2.4rem}h6{font-size:1.5rem}}p{margin-top:0}.container{position:relative;width:100%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box}.column,.columns{width:100%;float:left;box-sizing:border-box}@media(min-width: 400px){.container{width:85%;padding:0}}@media(min-width: 550px){.container{width:80%}.column,.columns{margin-left:4%}.column:first-child,.columns:first-child{margin-left:0}.one.column,.one.columns{width:4.6666666667%}.two.columns{width:13.3333333333%}.three.columns{width:22%}.four.columns{width:30.6666666667%}.five.columns{width:39.3333333333%}.six.columns{width:48%}.seven.columns{width:56.6666666667%}.eight.columns{width:65.3333333333%}.nine.columns{width:74%}.ten.columns{width:82.6666666667%}.eleven.columns{width:91.3333333333%}.twelve.columns{width:100%;margin-left:0}.one-third.column{width:30.6666666667%}.two-thirds.column{width:65.3333333333%}.one-half.column{width:48%}.offset-by-one.column,.offset-by-one.columns{margin-left:8.6666666667%}.offset-by-two.column,.offset-by-two.columns{margin-left:17.3333333333%}.offset-by-three.column,.offset-by-three.columns{margin-left:26%}.offset-by-four.column,.offset-by-four.columns{margin-left:34.6666666667%}.offset-by-five.column,.offset-by-five.columns{margin-left:43.3333333333%}.offset-by-six.column,.offset-by-six.columns{margin-left:52%}.offset-by-seven.column,.offset-by-seven.columns{margin-left:60.6666666667%}.offset-by-eight.column,.offset-by-eight.columns{margin-left:69.3333333333%}.offset-by-nine.column,.offset-by-nine.columns{margin-left:78%}.offset-by-ten.column,.offset-by-ten.columns{margin-left:86.6666666667%}.offset-by-eleven.column,.offset-by-eleven.columns{margin-left:95.3333333333%}.offset-by-one-third.column,.offset-by-one-third.columns{margin-left:34.6666666667%}.offset-by-two-thirds.column,.offset-by-two-thirds.columns{margin-left:69.3333333333%}.offset-by-one-half.column,.offset-by-one-half.column{margin-left:52%}}.container:after,.row:after,.u-cf{content:"";display:table;clear:both}.button{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:11px;font-weight:600;line-height:38px;letter-spacing:.1rem;text-transform:uppercase;text-decoration:none;white-space:nowrap;background-color:rgba(0,0,0,0);border-radius:4px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}input[type=submit],input[type=reset],input[type=button]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:11px;font-weight:600;line-height:38px;letter-spacing:.1rem;text-transform:uppercase;text-decoration:none;white-space:nowrap;background-color:rgba(0,0,0,0);border-radius:4px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}.button:hover{color:#333;border-color:#888;outline:0}input[type=submit]:hover,input[type=reset]:hover,input[type=button]:hover{color:#333;border-color:#888;outline:0}.button:focus{color:#333;border-color:#888;outline:0}input[type=submit]:focus,input[type=reset]:focus{color:#333;border-color:#888;outline:0}.button.button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}input[type=submit].button-primary,input[type=reset].button-primary,input[type=button].button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}.button.button-primary:hover{color:#fff;background-color:#1eaedb;border-color:#1eaedb}input[type=submit].button-primary:hover,input[type=reset].button-primary:hover,input[type=button].button-primary:hover{color:#fff;background-color:#1eaedb;border-color:#1eaedb}.button.button-primary:focus{color:#fff;background-color:#1eaedb;border-color:#1eaedb}input[type=submit].button-primary:focus,input[type=reset].button-primary:focus,input[type=button].button-primary:focus{color:#fff;background-color:#1eaedb;border-color:#1eaedb}input[type=email],input[type=number],input[type=search],input[type=text],input[type=tel],input[type=url],input[type=password]{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}input[type=email],input[type=number],input[type=search],input[type=text],input[type=tel],input[type=url],input[type=password],textarea,select{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}input[type=email],input[type=number],input[type=search],input[type=text],input[type=tel],input[type=url],input[type=password]{-webkit-appearance:none;-moz-appearance:none;appearance:none}textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-height:65px;padding-top:6px;padding-bottom:6px}input[type=email]:focus,input[type=number]:focus,input[type=search]:focus,input[type=text]:focus,input[type=tel]:focus,input[type=url]:focus,input[type=password]:focus{border:1px solid #33c3f0;outline:0}textarea:focus,select:focus{border:1px solid #33c3f0;outline:0}label,legend{display:block;margin-bottom:.5rem;font-weight:600}fieldset{padding:0;border-width:0}input[type=checkbox],input[type=radio]{display:inline}label>.label-body{display:inline-block;margin-left:.5rem;font-weight:normal}ul{list-style:circle inside}ol{list-style:decimal inside;padding-left:0;margin-top:0}ul{padding-left:0;margin-top:0}ul ul,ul ol{margin:1.5rem 0 1.5rem 3rem;font-size:90%}ol ol,ol ul{margin:1.5rem 0 1.5rem 3rem;font-size:90%}li{margin-bottom:1rem}code{padding:.2rem .5rem;margin:0 .2rem;font-size:90%;white-space:nowrap;background:#f1f1f1;border:1px solid #e1e1e1;border-radius:4px}pre>code{display:block;padding:1rem 1.5rem;white-space:pre}th,td{padding:12px 15px;text-align:left;border-bottom:1px solid #e1e1e1}th:first-child,td:first-child{padding-left:0}th:last-child,td:last-child{padding-right:0}button,.button{margin-bottom:1rem}input,textarea,select,fieldset{margin-bottom:1.5rem}pre,blockquote,dl,figure,table,p,ul,ol,form{margin-bottom:2.5rem}'}}]);