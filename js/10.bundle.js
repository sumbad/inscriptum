(window.webpackJsonp=window.webpackJsonp||[]).push([[10,17,54,80,81,82],{156:function(e,t){e.exports=".header{margin-top:6rem;text-align:center}.value-prop{margin-top:1rem}.value-props{margin-top:4rem;margin-bottom:4rem}.docs-header{text-transform:uppercase;font-size:1.4rem;letter-spacing:.2rem;font-weight:250}.docs-section{border-top:1px solid #eee;padding:4rem 0;margin-bottom:0}.value-img{display:block;text-align:center;margin:2.5rem auto 0}.example-grid .column,.example-grid .columns{background:#eee;text-align:center;border-radius:4px;font-size:1rem;text-transform:uppercase;height:30px;line-height:30px;margin-bottom:.75rem;font-weight:600;letter-spacing:.1rem}.docs-preview{white-space:pre-line;font-weight:330}.docs-example .row,.docs-example.row,.docs-example form{margin-bottom:0}.docs-example h1,.docs-example h2,.docs-example h3,.docs-example h4,.docs-example h5,.docs-example h6{margin-bottom:1rem}.heading-font-size{font-size:1.2rem;color:#999;letter-spacing:normal}.code-example{margin-top:1.5rem;margin-bottom:0}.code-example-body{white-space:pre;word-wrap:break-word}.example{position:relative;margin-top:4rem}.example-header{font-weight:600;margin-top:1.5rem;margin-bottom:.5rem}.example-description{margin-bottom:1.5rem}.example-screenshot-wrapper{display:block;position:relative;overflow:hidden;border-radius:6px;border:1px solid #eee;height:250px}.example-screenshot{width:100%;height:auto}.example-screenshot.coming-soon{width:auto;position:absolute;background:#eee;top:5px;right:5px;bottom:5px;left:5px}@media (min-width:550px){.header{margin-top:18rem}.value-props{margin-top:9rem;margin-bottom:7rem}.value-img{margin-bottom:1rem}.example-grid .column,.example-grid .columns{margin-bottom:1.5rem}.docs-section{padding:6rem 0}.example-send-yourself-copy{float:right;margin-top:12px}.example-screenshot-wrapper{position:absolute;width:48%;height:100%;left:0;max-height:none}}@media (min-width:750px){.popover.open{display:block}.popover{display:none;position:absolute;top:0;left:0;background:#fff;border:1px solid #eee;border-radius:4px;top:92%;left:-50%;-webkit-filter:drop-shadow(0 0 6px rgba(0,0,0,0.1));-moz-filter:drop-shadow(0 0 6px rgba(0,0,0,0.1));filter:drop-shadow(0 0 6px rgba(0,0,0,0.1))}.popover_right{left:auto;right:0;top:calc(100% + 11px)}.popover-item:first-child .popover-link:after,.popover-item:first-child .popover-link:before{bottom:100%;left:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}.popover-item:first-child .popover-link:after{border-color:rgba(255,255,255,0);border-bottom-color:#fff;border-width:10px;margin-left:-10px}.popover-item:first-child .popover-link:before{border-color:rgba(238,238,238,0);border-bottom-color:#eee;border-width:11px;margin-left:-11px}.popover-list{padding:0;margin:0;list-style:none}.popover-item{padding:0;margin:0}.popover-link{position:relative;color:#222;display:block;padding:8px 20px;border-bottom:1px solid #eee;text-decoration:none;text-transform:uppercase;font-size:1rem;font-weight:600;text-align:center;letter-spacing:.1rem}.popover-item:first-child .popover-link{border-radius:4px 4px 0 0}.popover-item:last-child .popover-link{border-radius:0 0 4px 4px;border-bottom-width:0}.popover-link:hover{color:#fff;background:#33c3f0}.popover-link:hover,.popover-item:first-child .popover-link:hover:after{border-bottom-color:#33c3f0}}"},157:function(e,t){e.exports=".um-drafts__item{border-bottom:1px solid #eee;padding:4rem 0;margin-bottom:0}.um-drafts__item-link{color:inherit;text-decoration:none}.um-drafts__item-link:hover{color:inherit}.um-drafts__item-actions{position:relative;float:right}.um-drafts__item-subcontent{font-size:1.1rem;color:#999;letter-spacing:normal;font-weight:normal;display:block;cursor:pointer}@media (min-width:550px){.in-drafts__item{padding:20px 0}}.draft-preview{position:relative;min-height:150px}.draft-preview__img{box-shadow:6px 6px 8px -10px rgba(0,0,0,0.7);position:absolute;right:0;max-height:150px;max-width:300px;object-fit:cover}"},17:function(e,t,r){"use strict";r.r(t),r.d(t,"DraftComponent",(function(){return b}));var o,i=r(33),n=r(13),a=r(21),l=r(20),s=r(52),c=r(35),d=r.n(c),u=r(447),p=r(162),m=r(195),f=(r(76),r(171)),h=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a},g=function(e,t,r,o){return new(r||(r=Promise))((function(i,n){function a(e){try{s(o.next(e))}catch(e){n(e)}}function l(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))};p.b.add(m.a),function(e){e[e.delete=0]="delete",e[e.publish=1]="publish"}(o||(o={}));let b=class extends i.a{constructor(e=new a.a,t){super(s.a,!1),this._storageService=e,this._authService=t,this.styles=n.e`
  <style>
    ${r(60)}
  </style>
`,this.$={isPreloader:!0},this._authService=new l.a(this._storageService)}connectedCallback(){super.connectedCallback(),this._authService.$authenticated.pipe(Object(u.a)(()=>void 0===this.$.drafts)).subscribe(e=>{e?this._storageService.api.draft.getAll().then(e=>{const t=e.map(e=>{const t=e.pages[0].content,{description:r,title:i,image:n}=null!=t&&"ops"in t?Object(f.c)(t):Object(f.d)(t);return{id:e.id,preview:{title:i,description:r,image:n},linkUrl:"/draft/"+e.id,actions:[{label:"удалить",type:o.delete}]}});this.$={isPreloader:!1,drafts:t}}):null!==e&&this._authService.login()}),p.a.watch()}render(){return n.e`
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
    `}handleBtnCreateNewDraft(){return g(this,void 0,void 0,(function*(){const e=yield this._storageService.api.draft.create(this._storageService.author.id);d()("/draft/"+e.id)}))}handleBtnExportAllDrafts(e){e.preventDefault();const t=JSON.stringify(this.$.drafts),r=document.createElement("a"),o=new Blob([t],{type:"application/octet-stream"});r.href=window.URL.createObjectURL(o),r.download="drafts.json",r.click()}handleAction({detail:e}){switch(e.type){case o.delete:this._deleteDraft(e.id)}}_deleteDraft(e){this._storageService.api.draft.deleteById({id:e}).then(e=>{this.$=Object.assign(Object.assign({},this.$),{drafts:this.$.drafts&&this.$.drafts.filter(t=>t.id!==e.id)})})}};h([Object(i.e)()],b.prototype,"$",void 0),b=h([Object(i.b)("inscriptum-drafts")],b)},171:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return s})),r.d(t,"a",(function(){return u}));var o=r(177),i=r(178),n=r(179);function a(e){if(!document.getElementById(e)){var t=document.getElementsByTagName("head")[0],r=document.createElement("link");r.id=e,r.rel="stylesheet",r.type="text/css",r.href=document.location.origin+e,r.media="all",t.appendChild(r)}}function l(e){let t="<noname>",r="...",o="";if(Array.isArray(null==e?void 0:e.ops)&&e.ops.length>0){t=String(e.ops[0].insert),r=String(e.ops[2].insert);const i=e.ops.find(e=>void 0!==d(e,["insert","blockFigure","image"]));if(null!=i&&(o=d(i,["insert","blockFigure","image"])),r.length<3){for(const[t,i]of e.ops.entries())if(t>2){if(r.length>100)break;void 0!==d(i,["insert","blockFigure","image"])?o=d(i,["insert","blockFigure","image"]):r+=" "+i.insert}r+="..."}}return r=r.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/`/g,"&DiacriticalGrave;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),{title:t,description:r,image:o}}function s(e){var t,r,a;let l="<noname>",s="...",d="";if(null!=e){const u=c(e,n.a);null!=(null==u?void 0:u.content)&&(l=null!==(t=u.content[0].text)&&void 0!==t?t:l);const p=c(e,i.a);null!=(null==p?void 0:p.content)&&(s=null!==(r=p.content[0].text)&&void 0!==r?r:s);const m=c(e,o.a);null!=(null==m?void 0:m.attrs)&&(d=null!==(a=m.attrs.src)&&void 0!==a?a:d)}return s=s.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/`/g,"&DiacriticalGrave;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),{title:l,description:s,image:d}}function c(e,t){if(e.type===t)return e;if(Array.isArray(e.content))for(const r of e.content){const e=c(r,t);if(null!=e)return e}return null}function d(e,t){return t.reduce((e,t)=>e&&"undefined"!==e[t]?e[t]:void 0,e)}const u=String.raw},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));var o=r(64),i=r(67),n=r(83),a=r(77),l=function(e,t,r,o){return new(r||(r=Promise))((function(i,n){function a(e){try{s(o.next(e))}catch(e){n(e)}}function l(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))};const s=/!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/,c="figure",d=o.d.create({name:c,draggable:!0,defining:!0,selectable:!0,content:()=>"text*",defaultOptions:{inline:!1,HTMLAttributes:{}},inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},addAttributes:()=>({src:{default:null},alt:{default:null},title:{default:null}}),parseHTML:()=>[{tag:"figure",contentElement:"figcaption",getAttrs:e=>{const t=e.querySelector("img");return{src:null==t?void 0:t.getAttribute("src"),alt:null==t?void 0:t.getAttribute("alt"),title:null==t?void 0:t.getAttribute("title")}}},{tag:"img[src]",preserveWhitespace:!0,getContent:(e,t)=>a.c.from(t.text(e.alt.length>0?e.alt:" ")),getAttrs:e=>({src:e.getAttribute("src")})}],renderHTML({HTMLAttributes:e}){return["figure",["img",Object(o.l)(this.options.HTMLAttributes,e)],["figcaption",0]]},addCommands(){return{setFigure:e=>({commands:t})=>t.insertContent({type:this.name,attrs:e})}},addInputRules(){return[Object(o.m)(s,this.type,e=>{const[,t,r,o]=e;return{src:r,alt:t,title:o}})]},addNodeView(){return({node:e,HTMLAttributes:t,getPos:r,editor:o})=>{const a=document.createElement("figure");a.setAttribute("draggable","true");const s=document.createElement("div"),c=document.createElement("figcaption");s.classList.add("figure_wrapper"),s.contentEditable="false",c.classList.add("editable_text"),c.classList.add("empty"),c.setAttribute("data-placeholder","Caption (optional)");const d=e.content.firstChild;(null==d?void 0:d.isText)&&null!=d.text&&d.text.trim().length>0&&c.classList.remove("empty"),a.appendChild(s),a.appendChild(c);const p=function(e,t){const r=document.createElement("img");return r.setAttribute("src",u(e)),t.appendChild(r),r}(e.attrs.src,s);e.attrs.alt&&p.setAttribute("alt",e.attrs.alt),e.attrs.title&&p.setAttribute("title",e.attrs.title);const m=function(e){const t=e.match(/^data:(image\/gif|image\/jpe?g|image\/png|video\/mp4);base64,(.*)$/);if(null!=t)return{type:t[1],base64_data:t[2]}}(e.attrs.src);if(null!=m){const e=document.createElement("div"),t=document.createElement("div");e.classList.add("file_progress"),t.classList.add("file_progress_bar"),s.classList.add("loading"),e.appendChild(t),s.appendChild(e),function(e,t,r){!function(e,t,r,o){l(this,void 0,void 0,(function*(){try{const o=yield Object(n.uploadFileService)(Object(i.uploadDataToBlob)(e),t);r&&r(o)}catch(e){o&&o(e)}}))}(e,(e,t)=>{let o=0;t&&e&&(o=100*e/t,o=Math.min(100,o)),r.style.width=o+"%"},e=>{if(e){const r=u(e.src),o=t.querySelector("img");null!=o&&(o.src=r),t.classList.remove("loading")}},e=>Object(i.showError)(e))}(m,s,t)}return p.onclick=()=>{"function"==typeof r&&this.editor.commands.setNodeSelection(r())},{dom:a,contentDOM:c,ignoreMutation:t=>"attributes"===t.type&&null!=t.attributeName&&(["src","title","alt"].includes(t.attributeName)&&(e.attrs[t.attributeName]=t.target.getAttribute(t.attributeName)),!0),update:e=>e.type===this.type&&(c.classList.toggle("empty",0===e.content.size),!0)}}}});function u(e){return function(e,t){const r=document.createElement("a");r.href=e;const o=r.href.slice(0,r.href.indexOf(":"));return t.indexOf(o)>-1}(e,["http","https","data"])?e:"//:0"}},178:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));var o=r(64);const i="topicSummary",n=o.d.create({name:i,group:"topicDoc",content:"inline*",addAttributes:()=>({"data-placeholder":{default:"Summary of the text"},"data-label":{default:"Summary"},role:{default:"definition"}}),parseHTML:()=>[{tag:"p"}],renderHTML({HTMLAttributes:e}){return["p",Object(o.l)(this.options.HTMLAttributes,e),0]}})},179:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));var o=r(64);const i="topicTitle",n=o.d.create({name:i,content:"inline*",group:"topicDoc",defining:!0,selectable:!0,addAttributes:()=>({"data-placeholder":{default:"Title"},"data-label":{default:"Title"}}),parseHTML:()=>[{tag:"h1"}],renderHTML({HTMLAttributes:e}){return["h1",Object(o.l)(this.options.HTMLAttributes,e),0]}})},60:function(e,t){e.exports=".um-drafts__submenu{display:flex;flex-direction:row-reverse;padding-top:10px;border-bottom:1px solid #eee}.um-drafts__export-all{margin:0 0 10px 10px;stroke:#ffffff;stroke-width:30px;color:#bbb}.um-drafts__export-all:hover{color:#888;cursor:pointer}"},67:function(e,t,r){"use strict";r.r(t),r.d(t,"T",(function(){return n})),r.d(t,"draftSave",(function(){return a})),r.d(t,"getPageContent",(function(){return l})),r.d(t,"isEdit",(function(){return s})),r.d(t,"updateEditableText",(function(){return c})),r.d(t,"sanitize",(function(){return u})),r.d(t,"uploadDataToBlob",(function(){return p})),r.d(t,"showError",(function(){return m})),r.d(t,"updateEditable",(function(){return f})),r.d(t,"transliterate",(function(){return h})),r.d(t,"storageDelete",(function(){return g})),r.d(t,"draftClear",(function(){return b}));var o=r(90),i=r.n(o);let n={apiUrl:"https://inscriptum.js.org",datetime:0,pageId:0};function a(e,t){if(!e)return!1;if(!n.pageId){var r=l(!0,t);if(e!=r)return e=r,function(e,t){try{return localStorage.setItem(e,t),!!localStorage.getItem(e)}catch(e){return!1}}("draft",r)}return!1}function l(e,t){let r=t.scroll.domNode;r.querySelectorAll("textarea,input").forEach(e=>{e.setAttribute("data-value",e.value)});let o=r.cloneNode(!0);r.querySelectorAll("textarea,input").forEach(e=>{e.removeAttribute("data-value")}),o.querySelectorAll("textarea,input").forEach(e=>{e.value=e.getAttribute("data-value")||"",e.removeAttribute("data-value")}),c(o,!1);o.querySelectorAll("[contenteditable]").forEach(e=>e.removeAttribute("contenteditable"));o.querySelectorAll("[data-placeholder]").forEach(e=>e.removeAttribute("data-placeholder"));o.querySelectorAll("[data-label]").forEach(e=>e.removeAttribute("data-label"));o.querySelectorAll("[data-title]").forEach(e=>e.removeAttribute("data-title"));o.querySelectorAll(".editable_text").forEach(e=>e.classList.remove("editable_text"));o.querySelectorAll(".focus").forEach(e=>e.classList.remove("focus"));o.querySelectorAll(".empty").forEach(e=>e.classList.remove("empty"));o.querySelectorAll('[class=""]').forEach(e=>e.removeAttribute("class"));o.querySelectorAll(".file_progress").forEach(e=>e.remove());if(o.querySelectorAll(".cursor_wrapper").forEach(e=>e.remove()),!e){const e=o.querySelector("h1,address");e&&e.remove();const t=o.querySelector("br.inline");return t&&t.replaceWith("\n"),{data:JSON.stringify(d(o).children),length:o.innerHTML.length}}return o.querySelectorAll("h1").forEach(e=>{e.querySelector("br")||e.append(document.createElement("br"))}),o.querySelectorAll("address").forEach(e=>{e.querySelector("br")||e.append(document.createElement("br"))}),o.innerHTML}function s(){return document.getElementsByClassName("tl_article_edit").length>0}function c(e,t){void 0===t&&(t=s()),t?e.querySelectorAll(".editable_text").forEach(e=>{let t=!1;if(e.childNodes.forEach(e=>{!t&&e&&e.classList&&(t=e.classList.contains("editable_input"))}),!t){let t=e.textContent||"",r=document.createElement("textarea");r.classList.add("editable_input"),r.setAttribute("tabindex","-1"),r.setAttribute("rows","1"),r.value=t,t||e.classList.add("empty"),e.innerHTML="",e.append(r),i()(r)}}):e.querySelectorAll(".editable_text > .editable_input").forEach(e=>{let t=e.value,r=e.parentNode;r.innerHTML="",r.textContent=t})}function d(e){if(!e.tagName)return e.data;let t={tag:e.tagName.toLowerCase()};if(e.attributes.length){t.attrs={};for(var r=0;r<e.attributes.length;r++){let o=e.attributes[r];t.attrs[o.name]=o.value}}if(e.childNodes.length){t.children=[];for(r=0;r<e.childNodes.length;r++)t.children.push(d(e.childNodes[r]))}return t}function u(e,t){let r=document.createElement("a");r.href=e;let o=r.href.slice(0,r.href.indexOf(":"));return t.indexOf(o)>-1}function p(e){for(var t=atob(e.base64_data),r=[],o=0;o<t.length;o++)r.push(t.charCodeAt(o));return new Blob([new Uint8Array(r)],{type:e.type})}function m(e){let t=document.querySelector("#_error_msg");t.textContent=e,clearTimeout(t.to),t.classList.add("shown"),t.to=setTimeout(()=>{t.classList.remove("shown")},3e3)}function f(e,t,r,o,i,n){if(o&&o.classList.toggle("tl_article_edit",e),c(document.body),t&&(t.enable(e),e&&t.focus()),!e&&i&&n){const e=i.querySelector("h1"),o=e?e.textContent:"",a=i.querySelector("address"),l=a?a.textContent:"",s=i.querySelector("address a"),c=s&&s.getAttribute("href");n.querySelector("h1").textContent=o,n.querySelector("address a").textContent=l,c?n.querySelector("address a").setAttribute("href",c):n.querySelector("address a").removeAttribute("href"),r.hideFormatTooltip(t),r.hideBlocksTooltip()}}function h(e,t=!1){const r="щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),o="shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g);for(let i=0;i<r.length;i++)e=(e=e.split(t?o[i]:r[i]).join(t?r[i]:o[i])).split(t?o[i].toUpperCase():r[i].toUpperCase()).join(t?r[i].toUpperCase():o[i].toUpperCase());return e}function g(e){try{return localStorage.removeItem(e),!0}catch(e){return!1}}function b(){g("draft")}!function(){var e=document.querySelector("time");if(e&&n.datetime){var t=new Date(1e3*n.datetime);let r="January February March April May June July August September October November December".split(" ")[t.getMonth()],o=t.getDate();e.textContent=r+" "+(10>o?"0":"")+o+", "+t.getFullYear()}}()},76:function(e,t,r){"use strict";r.r(t),r.d(t,"ListComponent",(function(){return m}));var o=r(33),i=r(13),n=r(190),a=r(52),l=r(162),s=r(173),c=r(195),d=r(389),u=r(53),p=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};l.b.add(s.a,c.a);let m=class extends o.a{constructor(){super(a.a,!1),this.styles=i.e`
    <style>
      ${r(156)}
      ${r(157)}
    </style>
  `,this._list=[]}set value(e){void 0!==e&&(this._list=e)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.closePopovers.bind(this))}disconnectedCallback(){document.removeEventListener("click",this.closePopovers.bind(this))}render(){if(this._list.length<1)return i.e``;const e=(e,t=[])=>t.length>0?i.e`
            <div class="um-drafts__item-actions">
              <span @click=${this.openPopover.bind(this)} class="um-drafts__item-subcontent" data-popover=${e}>
                ${e} <i class="fas fa-angle-down" style="color:#999"></i>
              </span>
              <div id=${e} class="popover popover_right">
                <ul class="popover-list">
                  ${t.map(t=>i.e`
                      <li class="popover-item">
                        <a class="popover-link" @click=${this.dispatchAction.bind(this,{type:t.type,id:e})}>${t.label}</a>
                      </li>
                    `)}
                </ul>
              </div>
            </div>
          `:"",t=Object(n.a)(this._list,e=>e.id,(t,r)=>{var o,n;return i.e`
        <div class="um-drafts__item">
          <h6 class="docs-header">
            ${t.preview.title}
          </h6>
          <div class="row">
            ${(null===(o=t.preview.image)||void 0===o?void 0:o.length)>0?i.e`
                  <div class="two columns draft-preview">
                    <img class="draft-preview__img" src="${t.preview.image}" />
                  </div>
                `:""}
            <div class=${(null===(n=t.preview.image)||void 0===n?void 0:n.length)>0?"ten columns":""}>
              <a class="um-drafts__item-link" href=${t.linkUrl} rel=${Object(d.a)(t.linkRel)}>
                <p class="docs-preview">${Object(u.a)(t.preview.description)}</p>
              </a>
              ${e(t.id,"function"==typeof t.actions?t.actions():t.actions)}
            </div>
          </div>
        </div>
      `});return i.e`
      ${this.styles}
      <div class="container">
        ${t}
      </div>
    `}dispatchAction(e){this.dispatchEvent(new CustomEvent("action",{detail:e}))}openPopover(e){var t;e.preventDefault(),this.closePopovers();const r=null===(t=e.target)||void 0===t?void 0:t.dataset.popover,o=this.querySelector(`[id="${r}"]`);null!==o&&o.classList.add("open"),e.stopImmediatePropagation()}closePopovers(){this.querySelectorAll(".popover.open").forEach(e=>{e.classList.remove("open")})}};p([Object(o.e)()],m.prototype,"_list",void 0),m=p([Object(o.b)("inscriptum-list")],m)},83:function(e,t,r){"use strict";r.r(t),r.d(t,"uploadFileService",(function(){return o}));function o(e,t){return new Promise((r,o)=>{var i=new XMLHttpRequest,n=new FormData;i.open("POST","https://api.cloudinary.com/v1_1/inscriptum/upload",!0),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.upload.addEventListener("progress",(function(e){e.lengthComputable&&t&&t(e.loaded,e.total)})),t&&t(0,1),n.append("upload_preset","cz5pibn5"),n.append("tags","browser_upload"),n.append("file",e),i.send(n),i.onreadystatechange=e=>{if(4==i.readyState&&200==i.status){var t=JSON.parse(i.responseText);console.log(1111,t),t.src=t.secure_url,r(t)}},i.onerror=function(){o(new Error("Network Error"))}})}}}]);