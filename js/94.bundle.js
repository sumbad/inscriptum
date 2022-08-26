"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[94],{5094:(t,e,o)=>{o.r(e),o.d(e,{draftElement:()=>ro});var n=o(1640),i=o(7165),r=o(3619),a=o(9491),l=o(9725),s=o(4860),c=o(7012),d=o(3435),p=o(669);const u=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
          <polyline points="7 11 12 16 17 11"></polyline>
          <line x1="12" y1="4" x2="12" y2="16"></line>
        </svg>
    `,this)}))(),h=(0,i.EG)({props:{draftId:i.p.req("draft-id")}})((function*(t){function e(){l.Z.dispatch({type:s.u.DRAFT_PUBLISH,payload:{draftId:t.draftId}})}for(;;)yield(0,n.sY)(n.dy`<div style=${d.iv`
          display: flex;
          flex-direction: row;
        `}>
        <button class="btn btn_icon" @click=${e}>
          ${u({})}
        </button>
      </div>`,this)}));var f=o(5720),g=o(4975),b=o(2114),m=o(3964),v=o(6444),y=o(8481),w=o(6856),x=o(128),_=o(7082),k=o(54),$=o(9302),M=o(4334),P=o(7191),E=o(1769),C=o(3142),z=o(6829),A=o(9802),L=o(3427),T=o(5961),j=o(9457),O=o(3418),S=o(9068),I=o(4746),H=o(6667),D=o(4524),N=o(5112),B=o(157),Z=o(9467),R=o(2992),G=o(1760),F=o(6922),q=o(8780);const Y=v.NB.create({name:"topicDoc",topNode:!0,content:"topicTitle topicSummary topicFirstLine block*",addProseMirrorPlugins:()=>[new F.Sy({key:new F.H$("TopicDoc Decorations"),props:{decorations:({doc:t,selection:e})=>{const o=[],n=t.content.child(0),i=t.content.child(1),r=t.content.child(2);return 0===n.content.size?o.push(q.p.node(0,n.nodeSize,{class:"empty"})):e.to<=n.nodeSize+i.nodeSize&&o.push(q.p.node(0,n.nodeSize,{class:"focused"})),0===i.content.size?o.push(q.p.node(n.nodeSize,n.nodeSize+i.nodeSize,{class:"empty"})):e.to<=n.nodeSize+i.nodeSize&&o.push(q.p.node(n.nodeSize,n.nodeSize+i.nodeSize,{class:"focused"})),t.content.lastChild===r&&0===r.content.size&&o.push(q.p.node(n.nodeSize+i.nodeSize,n.nodeSize+i.nodeSize+r.nodeSize,{class:"empty"})),q.EH.create(t,o)}}})]});var U=o(9059),W=o(9586);const V=v.NB.create({name:"topicFirstLine",group:"topicDoc",content:"inline*",addAttributes:()=>({"data-placeholder":{default:"Take a notes"}}),parseHTML:()=>[{tag:"p"}],renderHTML({HTMLAttributes:t}){return["p",(0,v.P1)(this.options.HTMLAttributes,t),0]}});const J=o(8872).r.extend({renderHTML(t){return"function"==typeof this.options.onRenderHTML&&this.options.onRenderHTML(t),["a",(0,v.P1)(this.options.HTMLAttributes,t.HTMLAttributes),0]}});var K=o(3861);const X=v.NB.create({name:"aside",content:"block*",group:"block",defining:!0,addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"aside"}],renderHTML({HTMLAttributes:t}){return["aside",(0,v.P1)(this.options.HTMLAttributes,t),0]},addCommands:()=>({setAside:()=>({commands:t})=>t.wrapIn("aside"),toggleAside:()=>({commands:t})=>t.toggleWrap("aside"),unsetAside:()=>({commands:t})=>t.lift("aside")})});var Q=o(8638);const tt=o(9889).dn.extend({name:"hljsCodeBlock",content:"hljsCodeBlockRow+",topNode:!0,parseHTML:()=>[{preserveWhitespace:"full",tag:"pre"}],renderHTML({HTMLAttributes:t}){return["pre",this.options.HTMLAttributes,["code",t,0]]}}),et=v.vc.create({name:"hljsMark",spanning:!1,group:"hljsCodeBlock hljsCodeBlockRow",addOptions:()=>({HTMLAttributes:{}}),addAttributes:()=>({class:{default:void 0}}),parseHTML:()=>[{tag:"span",preserveWhitespace:!0}],renderHTML({HTMLAttributes:t}){return["span",(0,v.P1)(this.options.HTMLAttributes,t),0]}}),ot=v.NB.create({name:"hljsCodeBlockRow",group:"hljsCodeBlock",content:"inline*",marks:"hljsMark",addOptions:()=>({HTMLAttributes:{}}),addAttributes:()=>({class:{default:"l"}}),parseHTML:()=>[{tag:"div.l",preserveWhitespace:"full",attrs:{class:"l"}}],renderHTML({HTMLAttributes:t,node:e}){return["div",(0,v.P1)(this.options.HTMLAttributes,t),0]}});var nt=o(837),it=o(9622),rt=o(2247),at=o(4085),lt=o(1042),st=o(836),ct=o(6167),dt=o(5688),pt=o(8274);nt.Z.registerLanguage("javascript",it.Z),nt.Z.registerLanguage("typescript",rt.Z),nt.Z.registerLanguage("sql",at.Z),nt.Z.registerLanguage("xml",lt.Z),nt.Z.registerLanguage("css",st.Z),nt.Z.registerLanguage("bash",ct.Z),nt.Z.registerLanguage("yaml",dt.Z),nt.Z.registerLanguage("plaintext",pt.Z);const ut=["javascript","typescript","sql","xml","css","bash","yaml","plaintext"];function ht(t,e){let o;o="string"==typeof e?nt.Z.highlight(t,{language:e}):nt.Z.highlightAuto(t,ut);const n=o.value.split("\n");let i="";const r=[tt,S.Z,ot,et],a=document.createElement("pre");for(const t of n)i+=`<div class="l">${t||""}</div>`;a.innerHTML=i;const l=function(t,e){const o=(0,v.J1)(e);return Q.aw.fromSchema(o).parse(t,{preserveWhitespace:"full"})}(a,r);return a.remove(),r.length=0,l.toJSON()}function ft(t,e,o){return new v.VK({find:t,handler:t=>{const n=o instanceof Function?o(t.match):o,{tr:i}=t.state;t.match[0]&&(i.replaceWith(t.range.from-1,t.range.to,e.create(n,t.state.schema.node("hljsCodeBlockRow"))),i.setSelection(F.Bs.create(i.doc,t.range.to-1)))}})}function gt(t){let e="";return t.content.forEach(((o,n)=>{e+=o.textContent,n+o.nodeSize<t.nodeSize-2&&(e+="\n")})),e}const bt=(0,i.EG)({props:{domCodeEl:i.p.req(),selectedLanguage:i.p.req(),onChange:i.p.req()}})((function*(t){const e=e=>{const o=e.target;t.onChange("null"===o.value?null:o.value)};for(;;)yield(0,n.sY)(n.dy`
        <pre>${t.domCodeEl}</pre>
        <select class="hljs-codeblock__select" .contentEditable=${!1} .value=${t.selectedLanguage} @change=${e}>
          <option value="null" .selected=${null==t.selectedLanguage}>
            auto
          </option>
          <option .disabled=${!0}>—</option>
          ${ut.map((e=>n.dy`<option .key=${e} .value=${e} .selected=${t.selectedLanguage===e}>
              ${e}
            </option>`))}
        </select>
      `,this)}))("code-block-select-lang"),mt=/^```(?<language>[a-z]*)? $/,vt=/^~~~(?<language>[a-z]*)? $/,yt=v.NB.create({name:"hljsCodeBlock",content:"(hljsCodeBlockRow|paragraph?)+",isolating:!0,marks:"",group:"block",defining:!0,addOptions:()=>({languageClassPrefix:"language-",HTMLAttributes:{},printContentAsHTML:!1}),addAttributes:()=>({autocomplete:{default:"off"},autocorrect:{default:"off"},autocapitalize:{default:"off"},spellcheck:{default:"false"},language:{default:null,parseHTML:t=>{var e;const o=null===(e=t.firstElementChild)||void 0===e?void 0:e.getAttribute("language");return null==o||ut.includes(o)?o:null}}}),parseHTML:()=>[{preserveWhitespace:"full",tag:"pre",getContent(t,e){var o;let n,i="";const r=t.querySelector("code");n=null!==(o=null==r?void 0:r.getAttribute("language"))&&void 0!==o?o:n,t.childNodes.forEach((t=>{i+=t.textContent,"BR"===t.nodeName&&(i+="\n")}));const a=ht(i,n);return e.nodeFromJSON(a).content}},{tag:"div",preserveWhitespace:"full",getAttrs:t=>"pre"===t.style.whiteSpace&&null,getContent(t,e){var o;let n,i="";t.childNodes.forEach((t=>{i+=t.textContent+"\n"}));const r=t.querySelector("code");n=null!==(o=null==r?void 0:r.getAttribute("language"))&&void 0!==o?o:n;const a=ht(i,n);return e.nodeFromJSON(a).content}}],renderHTML({HTMLAttributes:t,node:e}){const o=this.options.printContentAsHTML?0:gt(e);return["pre",this.options.HTMLAttributes,["code",t,o]]},addCommands(){return{setHljsCodeBlock:t=>e=>{const o=e.state.selection.content();let n="";o.content.forEach(((t,e)=>{n+=t.textContent,e+t.nodeSize<o.content.size-2&&(n+="\n")}));const i=ht(n,null==t?void 0:t.language),r=e.editor.schema.nodeFromJSON(i).content.toJSON()||[];return e.chain().insertContent({type:this.name,attrs:t,content:r}).setTextSelection(e.state.selection.$to.end()-1).run()},toggleHljsCodeBlock:t=>e=>{const o=e.state.selection.content().content;if(null!=o.firstChild&&o.firstChild.type===this.type){let t="";return o.forEach(((e,n)=>{e.type===this.type?t+=gt(e):t+=e.textContent,n+e.nodeSize<o.size-2&&(t+="\n")})),e.chain().deleteRange({from:e.state.selection.from-2,to:e.state.selection.to}).insertContent({type:"paragraph",content:[{type:"text",text:t}]}).setTextSelection(e.state.selection.$to.end()).run()}return e.commands.setHljsCodeBlock(t)}}},addKeyboardShortcuts(){return{"Mod-Alt-c":()=>this.editor.commands.toggleHljsCodeBlock(),"Mod-Enter":()=>{const{$anchor:t}=this.editor.state.selection;if("hljsCodeBlockRow"!==t.parent.type.name)return!1;const{tr:e}=this.editor.state;return this.editor.view.dispatch(e.insert(t.pos,this.editor.schema.node("paragraph",{})).split(t.pos+1,1).replaceWith(t.pos+2,t.pos+4,this.editor.schema.node("paragraph",{})).setSelection(F.Bs.create(e.doc,t.pos+2))),!0},Tab:()=>{const{$anchor:t,from:e,to:o}=this.editor.state.selection;if("hljsCodeBlockRow"!==t.parent.type.name)return!1;const{tr:n}=this.editor.state;let i=0;return this.editor.state.doc.nodesBetween(e,o,((t,e)=>{if("hljsCodeBlockRow"===t.type.name){const o=t.firstChild;null!=o&&o.isText&&(n.insertText("  ",e+1+i),i+=2)}})),this.editor.view.dispatch(n),!0},Backspace:()=>{const{empty:t,$anchor:e}=this.editor.state.selection,o=this.editor.state.doc.nodeAt(e.pos-2);return!((null==o?void 0:o.type)!==this.type||1!==o.content.childCount||!t)&&this.editor.commands.insertContentAt({from:e.pos-2,to:e.pos-2+o.nodeSize},{type:"paragraph"})}}},addInputRules(){return[ft(mt,this.type,(({groups:t})=>t)),ft(vt,this.type,(({groups:t})=>t))]},addNodeView(){const t=new bt,e=document.createElement("code");return t.props.domCodeEl=e,t.classList.add("hljs-codeblock"),({editor:o,node:n,getPos:i})=>{for(const t in n.attrs)"string"==typeof n.attrs[t]&&e.setAttribute(t,n.attrs[t]);return"string"==typeof n.attrs.language?(t.props.selectedLanguage=n.attrs.language,e.setAttribute("class",this.options.languageClassPrefix+n.attrs.language)):n.attrs.language=null,"function"==typeof i&&(t.props.onChange=t=>{o.view.dispatch(o.view.state.tr.setNodeMarkup(i(),void 0,{language:t}))},0===n.content.size&&requestAnimationFrame((()=>{o.view.dispatch(o.view.state.tr.insert(i()+1,o.schema.node("hljsCodeBlockRow")))}))),{dom:t,contentDOM:e,update:t=>{if(t.type!==this.type)return!1;const e=ht(gt(t),t.attrs.language),n=o.schema.nodeFromJSON(e);t.content=n.content}}}}}),wt=v.NB.create({name:"codeBlock",content:"text*",marks:"",group:"block",code:!0,defining:!0,addOptions:()=>({languageClassPrefix:"language-",HTMLAttributes:{}}),parseHTML:()=>[{preserveWhitespace:"full",tag:"pre"}],renderHTML({HTMLAttributes:t}){return["pre",this.options.HTMLAttributes,["code",t,0]]},addNodeView:()=>({editor:t,node:e,getPos:o})=>{const n=e.content.firstChild;if(1===e.content.childCount&&null!=n&&"function"==typeof o)return requestAnimationFrame((()=>{const i=ht(n.text||""),r=t.schema.nodeFromJSON(i);t.view.dispatch(t.view.state.tr.deleteRange(o(),o()+e.nodeSize-1).insert(o(),r))})),{ignoreMutation:!0,update:!1};{const t=document.createElement("pre"),e=document.createElement("code");return t.appendChild(e),{dom:t,contentDOM:e}}}});function xt(t,e=!1){return(0,v.ar)(t,_t(e,!0))}function _t(t=!1,e=!1){return[...t?[Y,U.l,W.V,V]:[y.Z],j.Z,S.Z,x.ZP,A.ZP,k.ZP,O.ZP,P.Z,E.Z,w.ZP,_.ZP,T.ZP,L.Z,z.Z,C.Z,$.Z,M.Z,I.Z,H.ZP,D.ZP,N.ZP.configure({resizable:!0}),B.Z,R.Z,Z.Z,yt.configure({printContentAsHTML:e}),et,ot,wt,G.Bc,X,J.configure({onRenderHTML:()=>{setTimeout((()=>{document.querySelectorAll("a[href]").forEach((t=>{null==t._tippy&&(0,K.ZP)(t,{delay:[300,200],placement:"bottom",content:t=>t.href})}))}),1)}})]}var kt=o(3135),$t=o(4938),Mt=o(7848),Pt=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{s(n.next(t))}catch(t){r(t)}}function l(t){try{s(n.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}s((n=n.apply(t,e||[])).next())}))};function Et(t){return Pt(this,void 0,void 0,(function*(){return l.Z.dispatch({type:m.v.LOADING,payload:{id:t}}),(0,Mt.G)((()=>Pt(this,void 0,void 0,(function*(){const{draft:e}=yield(0,b.S)().getDraftById({id:t});null!=e&&l.Z.dispatch({type:m.v.LOAD_DONE,payload:{id:e.id,created_at:e.created_at,updated_at:e.updated_at,table_of_contents:e.table_of_contents,notes:e.notes,pages:e.pages.sort(((t,e)=>t.order-e.order)).map(((e,o)=>{var n;return Object.assign(Object.assign({},e),{content:e.content,draftId:t,isFolded:0!==o,margins:null!==(n=e.margins)&&void 0!==n?n:[]})}))}})}))))}))}function Ct(t,e){return Pt(this,void 0,void 0,(function*(){return(0,Mt.G)((()=>Pt(this,void 0,void 0,(function*(){try{const{update_draft_by_pk:o}=yield(0,b.S)().updateDraftTOC({id:e,table_of_contents:t,updated_at:(new Date).toISOString()});null!=o&&l.Z.dispatch({type:m.v.UPDATE_TOC_DONE,payload:{id:e,toc:o.table_of_contents}})}catch(t){l.Z.dispatch({type:m.v.UPDATE_TOC_ERROR,payload:{id:e,error:t}})}}))))}))}function zt(t){return Pt(this,void 0,void 0,(function*(){(0,Mt.G)((e=>Pt(this,void 0,void 0,(function*(){var o,n;const i="Title is too small",r="Content cannot be empty",a="Title was not found",l="Author was not found";let s,c="",d="",p="";for(const e of t.pages||[]){const t=0===e.order,o=e.content;if(null==(null==o?void 0:o.content))throw alert(r),new Error(r);p+=`<section>${xt(o,t)}</section>`,t&&(s=(0,$t.WV)(o),c=s.title.trim(),d=(0,$t.Ro)(c).replace(/[^a-zA-Z0-9-_]/g,"-"))}if(null==s)throw alert(a),new Error(a);if(c.length<2)throw alert(i),new Error(i);const u=(yield(0,b.S)().findAuthorByAuth0({auth0_id:e.userInfo.uid})).author[0];if(null==u)throw alert(l),new Error(l);const h={created_at:(new Date).toISOString(),updated_at:(new Date).toISOString()};if(null!=t.notes&&t.notes.length>0){const e=t.notes[0],o=(yield(0,b.S)().updateNode({id:e.id,name:d,preview:s,static_link:`note/${d}`,updated_at:h.updated_at})).update_note_by_pk;h.created_at=null==o?void 0:o.created_at,h.created_at=null==o?void 0:o.created_at}else{const e=(yield(0,b.S)().createNode({draft_id:t.id,author_id:u.id,name:d,preview:s,static_link:`note/${d}`,created_at:(new Date).toISOString()})).insert_note_one;h.created_at=null==e?void 0:e.created_at,h.created_at=null==e?void 0:e.created_at}const f=(yield(0,b.S)().getAllNotes()).notes;let g=(null===(n=null===(o=document.styleSheets.item(0))||void 0===o?void 0:o.ownerNode)||void 0===n?void 0:n.outerHTML)||"";g=g.replaceAll(/(\/\*).*(\*\/)/g,"");!function(t){const e=document.createElement("a");t.forEach((t=>{const o=new Blob([t.content],{type:t.type||"application/octet-stream"});e.href=window.URL.createObjectURL(o),e.download=t.name,e.click()})),e.remove()}([{content:`  \n    <html>\n      <head>\n        <meta charset="utf-8">\n        <title>${c}</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">\n        <meta name="format-detection" content="telephone=no">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="MobileOptimized" content="176">\n        <meta name="HandheldFriendly" content="True">\n        <meta name="robots" content="index, follow">\n        <meta name="description" content="${s.description}">\n        <meta property="og:site_name" content="inscriptum">\n        <meta property="og:type" content="article">\n        <meta property="og:title" content="${c}">\n        <meta property="og:description" content="${s.description}">\n        <meta property="og:image" content="${s.image}">\n        <meta property="article:published_time" content="${h.created_at}">\n        <meta property="article:modified_time" content="${h.updated_at}">\n        <meta property="article:author" content="${u.name||u.email}">\n        <meta name="twitter:card" content="summary">\n        <meta name="twitter:title" content="${c}">\n        <meta name="twitter:description" content="${s.description}">\n        <meta name="twitter:image" content="${s.image}">\n        ${g}\n        <link rel="shortcut icon" type="image/png" href="favicon.png">\n        <link href="/css/note.css" rel="stylesheet">\n        <link href="/css/custom_editor_fonts.css" rel="stylesheet">\n      </head>\n      <body>\n        <article>\n          ${p}\n        </article>\n      </body>\n      <script type="text/javascript" src="/js/note.js"><\/script>\n    </html>`,name:`${d}.html`},{content:JSON.stringify(f,null,2),name:kt.v.nodeListFileName}])}))))}))}var At=o(272),Lt=o(78),Tt=o(4877),jt=o(3921),Ot=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{s(n.next(t))}catch(t){r(t)}}function l(t){try{s(n.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}s((n=n.apply(t,e||[])).next())}))};function St(t){return Ot(this,void 0,void 0,(function*(){return yield(0,Mt.G)((()=>Ot(this,void 0,void 0,(function*(){const{margin:e}=yield(0,b.S)().getMarginById({id:t});if(null!=e)return l.Z.dispatch({type:jt.o.LOAD_DONE,payload:e}),e;throw l.Z.dispatch({type:jt.o.LOAD_FAIL,payload:{id:t,error:{message:`The Margin ${t} not found!`}}}),new Error(`The Margin ${t} not found!`)}))))}))}const It={data:void 0,isLoading:!1};function Ht(t,e){switch(e.type){case jt.o.LOAD_DONE:return{data:e.payload,isLoading:!1,error:null};case jt.o.LOAD_FAIL:return Object.assign(Object.assign({},t),{isLoading:!1,error:e.payload.error});case jt.o.SAVE_FAIL:return Object.assign(Object.assign({},t),{error:e.payload.error});default:return t}}const Dt=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
        <svg xmlns="http://www.w3.org/2000/svg" 
          class="icon icon-tabler icon-tabler-arrow-bar-left" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          stroke-width="1" 
          stroke="currentColor" 
          fill="none" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="4" y1="12" x2="14" y2="12"></line>
          <line x1="4" y1="12" x2="8" y2="16"></line>
          <line x1="4" y1="12" x2="8" y2="8"></line>
          <line x1="20" y1="4" x2="20" y2="20"></line>
        </svg>
    `,this)})),Nt=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
        <svg xmlns="http://www.w3.org/2000/svg" 
          class="icon icon-tabler icon-tabler-arrow-bar-right" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          stroke-width="1" 
          stroke="currentColor" 
          fill="none" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="20" y1="12" x2="10" y2="12"></line>
          <line x1="20" y1="12" x2="16" y2="16"></line>
          <line x1="20" y1="12" x2="16" y2="8"></line>
          <line x1="4" y1="4" x2="4" y2="20"></line>
        </svg>
    `,this)})),Bt=(0,i.NG)((function*(t){var e;const o=n.YP`
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulb" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path>
      <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path>
      <line x1="9.7" y1="17" x2="14.3" y2="17"></line>
    </svg>
`,i=n.YP`
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulb-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path>
      <line x1="9.7" y1="17" x2="14.3" y2="17"></line>
    </svg>
`;for(;;){let n=null!==(e=t.isOn)&&void 0!==e&&e;t=yield(0,p.$)(n?o:i,this)}})),Zt=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-maximize" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="16 4 20 4 20 8"></polyline>
          <line x1="14" y1="10" x2="20" y2="4"></line>
          <polyline points="8 20 4 20 4 16"></polyline>
          <line x1="4" y1="20" x2="10" y2="14"></line>
          <polyline points="16 20 20 20 20 16"></polyline>
          <line x1="14" y1="14" x2="20" y2="20"></line>
          <polyline points="8 4 4 4 4 8"></polyline>
          <line x1="4" y1="4" x2="10" y2="10"></line>
        </svg>
      `,this)})),Rt=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-minimize" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="5 9 9 9 9 5"></polyline>
          <line x1="3" y1="3" x2="9" y2="9"></line>
          <polyline points="5 15 9 15 9 19"></polyline>
          <line x1="3" y1="21" x2="9" y2="15"></line>
          <polyline points="19 9 15 9 15 5"></polyline>
          <line x1="15" y1="9" x2="21" y2="3"></line>
          <polyline points="19 15 15 15 15 19"></polyline>
          <line x1="15" y1="15" x2="21" y2="21"></line>
        </svg>
      `,this)}));o(8960);const Gt=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
        <line x1="12" y1="11" x2="12" y2="17"></line>
        <polyline points="9 14 12 17 15 14"></polyline>
      </svg>
    `,this)})),Ft=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eraser" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9"></path>
        <line x1="18" y1="12.3" x2="11.7" y2="6"></line>
      </svg>
    `,this)})),qt=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
        <circle cx="12" cy="14" r="2"></circle>
        <polyline points="14 4 14 8 8 8 8 4"></polyline>
      </svg>
    `,this)})),Yt=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
      </svg>
    `,this)}));var Ut=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{s(n.next(t))}catch(t){r(t)}}function l(t){try{s(n.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}s((n=n.apply(t,e||[])).next())}))};window.requestIdleCallback=window.requestIdleCallback||function(t){setTimeout(t,1)};class Wt{constructor(t,e){this.canvas=t,this.canvasRect=this.canvas.getBoundingClientRect(),this.isMousedown=!1,this.points=[],this.strokeHistory=[],this._defaultOptions={backgroundColor:"rgba(0,0,0,0)"},this.lineWidth=0,this._penColor="black",this._penSize=1,this._mouseout=()=>{this.penEl.style.left="-100px",this.penEl.style.top="-100px"},this._startDraw=t=>{const e=this._prepareEvent(t);null!=e&&(t.preventDefault(),this.isMousedown=!0,this.lineWidth=8*Math.log(e.pressure*this._penSize+1),this.context.lineWidth=this.lineWidth,this.canvasRect=this.canvas.getBoundingClientRect(),this.points.push(this._createPoint(e.drawEvent,this.lineWidth)),this._draw(this.points))},this._continueDraw=t=>{const e=this._prepareEvent(t);if(null==e)return;let o=8*Math.log(e.pressure*this._penSize+1);o+=.5*this.lineWidth,this.lineWidth=o;const n=this._createPoint(e.drawEvent,o);this.penEl.style.left=n.x-this._penSize/2-1+"px",this.penEl.style.top=n.y-this._penSize/2-1+"px",this.isMousedown&&(this.points.push(n),this._draw(this.points))},this._stopDraw=()=>{this.isMousedown=!1,this.lineWidth=0,requestIdleCallback((()=>{this.points.length>0&&(this.strokeHistory.push([...this.points]),this.points=[])}))},this.context=t.getContext("2d"),this._options=Object.assign(Object.assign({},this._defaultOptions),e),this.context.fillStyle=this._options.backgroundColor,this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillRect(0,0,this.canvas.width,this.canvas.height);const o="ontouchstart"in document,n=/Macintosh/.test(navigator.userAgent)&&o;null==window.PointerEvent||n?(this._handleMouseEvents(),o&&this._handleTouchEvents()):this._handlePointerEvents(),this.canvas.addEventListener("mouseout",this._mouseout);const i=Math.floor(this._penSize);this.penEl=document.createElement("div"),this.penEl.style.width=`${i}px`,this.penEl.style.height=`${i}px`,this.penEl.style.border="1px solid gray",this.penEl.style.borderRadius="50%",this.penEl.style.position="absolute",this.penEl.style.pointerEvents="none",this.penEl.style.backgroundColor=this._penColor,this.penEl.style.left="-100px",this.penEl.style.top="-100px",t.after(this.penEl),this.setMode("pencil")}set penColor(t){this._penColor=t,null!=this.penEl&&(this.penEl.style.backgroundColor=this._penColor)}set penSize(t){if(this._penSize=t,null!=this.penEl){const t=Math.floor(this._penSize);this.penEl.style.width=`${t}px`,this.penEl.style.height=`${t}px`}}get isEmpty(){return 0===this.strokeHistory.length}restore(t=this.strokeHistory){for(const e of t){this.context.beginPath();let t=[];e.map((e=>{t.push(e),this._draw(t)}))}}setMode(t){switch(t){case"erase":this.context.globalCompositeOperation="destination-out",this.penEl.style.backgroundColor=this._defaultOptions.backgroundColor,this.canvas.style.cursor="none";break;case"pencil":this.context.globalCompositeOperation="source-over",this.penEl.style.backgroundColor=this._penColor,this.canvas.style.cursor="crosshair"}}clear(){this.dataUrlImage=null,this.context.fillStyle=this._options.backgroundColor,this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillRect(0,0,this.canvas.width,this.canvas.height)}reset(){this.lineWidth=0,this.isMousedown=!1,this.points=[],this.strokeHistory=[]}toDataURL(t="image/png",e){return this.canvas.toDataURL(t,e)}fromDataURL(t,e={}){return Ut(this,void 0,void 0,(function*(){this._options=Object.assign(Object.assign({},this._options),{backgroundColor:this._defaultOptions.backgroundColor}),this.clear(),yield new Promise(((o,n)=>{const i=new Image,r=e.ratio||window.devicePixelRatio||1,a=e.width||this.canvas.width/r,l=e.height||this.canvas.height/r,s=e.xOffset||0,c=e.yOffset||0;i.onload=()=>{const t=this.context.globalCompositeOperation;this.context.globalCompositeOperation="source-over",this.context.drawImage(i,s,c,a,l),this.context.globalCompositeOperation=t,o()},i.onerror=t=>{n(t)},i.crossOrigin="anonymous",i.src=t})),this.dataUrlImage={dataUrl:t,options:e}}))}undoDraw(){return Ut(this,void 0,void 0,(function*(){const t=this.context.globalCompositeOperation;this.strokeHistory.pop(),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),null!=this.dataUrlImage&&(yield this.fromDataURL(this.dataUrlImage.dataUrl,this.dataUrlImage.options)),this.strokeHistory.map((t=>{this.context.beginPath();let e=[];t.map((t=>{e.push(t),this._draw(e)}))})),this.context.globalCompositeOperation=t}))}_draw(t){this.context.lineCap="round",this.context.lineJoin="round";const e=t.length-1,o=t[e-1],n=t[e];if(this.context.strokeStyle=n.color,this.context.globalCompositeOperation=n.globalCompositeOperation,t.length>=3){const t=(n.x+o.x)/2,e=(n.y+o.y)/2;this.context.lineWidth=o.lineWidth,this.context.quadraticCurveTo(o.x,o.y,t,e),this.context.stroke(),this.context.beginPath(),this.context.moveTo(t,e)}else this.context.lineWidth=n.lineWidth,this.context.beginPath(),this.context.moveTo(n.x,n.y),this.context.stroke()}_prepareEvent(t){let e,o=0,n="mouse";if("touches"in t){if(1!==t.touches.length)return null;{t.preventDefault();const i=t.touches[0];o=i.force,n=i.touchType,e=i}}else"pressure"in t&&(o=t.pressure/2.5,n=t.pointerType),e=t;if(["direct","mouse",void 0].includes(n)&&0===o&&(o=this._penSize/5),null==this.inputType||["pen","stylus"].includes(n))this.inputType=n,"stylus"===n&&"source-over"===this.context.globalCompositeOperation?this.penEl.style.display="none":this.penEl.style.display="block";else if(this.inputType!=n)return null;return{pressure:o,drawEvent:e,inputType:n}}_createPoint(t,e){return{x:t.clientX-this.canvasRect.left,y:t.clientY-this.canvasRect.top,lineWidth:e,color:this._penColor,globalCompositeOperation:this.context.globalCompositeOperation}}_handlePointerEvents(){this.canvas.addEventListener("pointerdown",this._startDraw),this.canvas.addEventListener("pointermove",this._continueDraw),document.addEventListener("pointerup",this._stopDraw)}_handleMouseEvents(){this.canvas.addEventListener("mousedown",this._startDraw),this.canvas.addEventListener("mousemove",this._continueDraw),document.addEventListener("mouseup",this._stopDraw)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._startDraw),this.canvas.addEventListener("touchmove",this._continueDraw),this.canvas.addEventListener("touchend",this._stopDraw)}destroy(){this.canvas.removeEventListener("mouseout",this._mouseout),this.canvas.removeEventListener("pointerdown",this._startDraw),this.canvas.removeEventListener("pointermove",this._continueDraw),document.removeEventListener("pointerup",this._stopDraw),this.canvas.removeEventListener("mousedown",this._startDraw),this.canvas.removeEventListener("mousemove",this._continueDraw),document.removeEventListener("mouseup",this._stopDraw),this.canvas.removeEventListener("touchstart",this._startDraw),this.canvas.removeEventListener("touchmove",this._continueDraw),this.canvas.removeEventListener("touchend",this._stopDraw)}}const Vt=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
          <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
        </svg>
      `,this)})),Jt=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"></path>
          <circle cx="7.5" cy="10.5" r=".5" fill="currentColor"></circle>
          <circle cx="12" cy="7.5" r=".5" fill="currentColor"></circle>
          <circle cx="16.5" cy="10.5" r=".5" fill="currentColor"></circle>
        </svg>
      `,this)})),Kt=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
          <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
          <polyline points="12 8 7 3 3 7 8 12"></polyline>
          <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
          <polyline points="16 12 21 17 17 21 12 16"></polyline>
          <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
        </svg>
      `,this)})),Xt=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      `,this)})),Qt=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"></path>
        </svg>
      `,this)}));var te=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{s(n.next(t))}catch(t){r(t)}}function l(t){try{s(n.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}s((n=n.apply(t,e||[])).next())}))};const ee=Gt(),oe=qt(),ne=Ft(),ie=Yt(),re=Vt(),ae=Jt(),le=Kt(),se=Xt(),ce=Qt(),de=(0,i.EG)({props:{data:i.p.req(),mode:i.p.opt()}})((function*(t){var e,o,i,r;const s=(0,a.V)(),c=(0,a.V)();let p,u,h=t.data,f=t.mode,g=Math.max(window.devicePixelRatio||1,1),m=null!==(o=null===(e=h.options)||void 0===e?void 0:e.height)&&void 0!==o?o:0,v=null!==(r=null===(i=h.options)||void 0===i?void 0:i.width)&&void 0!==r?r:0,y=1,w=1.2,x="#878787",_="#f0eade";const k=()=>{const t=s.value,e=c.value;if(null==t||null==e)throw new Error("Can not find a canvas element!");if(p=e.getContext("2d"),null==p)throw new Error("Can not find a canvas context!");const o=v,n=m;m=Math.max(t.getBoundingClientRect().height,window.innerHeight,n),v=Math.max(t.getBoundingClientRect().width,o),e.height=m,e.width=v,e.style.height=`${m}px`,e.style.width=`${v}px`,t.style.height=`${m}px`,this.style.height=`${m}px`,g=Math.max(window.devicePixelRatio||1,1),e.width=e.offsetWidth*g,e.height=e.offsetHeight*g,p.scale(g,g),null==u&&(u=new Wt(e),u.penColor=x,u.penSize=w)},$=(t=!0)=>te(this,void 0,void 0,(function*(){if(null!=u){if(u.setMode("pencil"),null!=(null==h?void 0:h.imgBase64)&&null!=(null==h?void 0:h.options)){const t=h.options,e=`${t.type},${h.imgBase64}`;u.context.globalAlpha=y,yield u.fromDataURL(e,{height:t.height,width:t.width,ratio:g})}else u.clear();u.context.globalAlpha=1,t?u.restore():u.reset()}})),M=()=>{if(null==u||u.isEmpty)return alert("Please draw something.");null!=(null==h?void 0:h.id)&&function(t,e,o){Ot(this,void 0,void 0,(function*(){const[n,i]=e.split(",");return yield(0,Mt.G)((()=>Ot(this,void 0,void 0,(function*(){const{update_margin_by_pk:e}=yield(0,b.S)().saveMargin({id:t,options:Object.assign(Object.assign({},o),{type:n}),img:i,updated_at:(new Date).toISOString()});if(null!=e)return l.Z.dispatch({type:jt.o.SAVE_DONE,payload:e}),l.Z.dispatch({type:Tt.C.SHOW,payload:{status:"success",type:"top-right",message:"Successfully saved"}}),e;l.Z.dispatch({type:jt.o.SAVE_FAIL,payload:{id:t,error:{message:`The Margin ${t} has not been saved!`}}})}))))}))}(h.id,u.toDataURL(),{height:m,width:v,ratio:g})},P=()=>{null!=h.id&&St(h.id),null!=u&&u.clear(),null!=p&&(p.font="26px sans-serif",p.fillStyle="#CCCCCC",p.fillText("loading...",50,100))};function E(){null!=u&&u.setMode("erase")}const C=()=>{!function(t){Ot(this,void 0,void 0,(function*(){l.Z.dispatch({type:jt.o.LOAD_DONE,payload:{id:t.id,pageId:t.pageId}})}))}(h)};function z(t){if(null!=(null==t?void 0:t.currentTarget)&&null!=u){const e=t.currentTarget;y=Number(e.value)}}function A(){null!=u&&u.undoDraw()}const L=t=>{null!=u&&(u.penColor=t.detail.value,u.setMode("pencil"),this.next())},T=t=>{if(null!=u&&null!=(null==t?void 0:t.currentTarget)){const e=t.currentTarget;w=Number(e.value),u.penSize=w}},j=()=>{null!=u&&u.setMode("pencil")};window.onresize=()=>{k(),$()},requestAnimationFrame((()=>{k(),$()}));try{for(;;)Object.is(h,t.data)||(h=t.data,$(!1)),f!==t.mode&&("full"!=t.mode&&"full"!=f&&(k(),$()),f=t.mode),t=yield(0,n.sY)(n.dy`
          <div .ref=${(0,a.i)(s)} class="sketch-pad_frame" style=${d.iv`
              background-color: ${"full"===f?_:"#f0eade30"};
            `}>
            <canvas .ref=${(0,a.i)(c)} class="signature-pad"></canvas>
          </div>

          <div style=${d.iv`
              display: flex;
              flex-direction: column;
              position: sticky;
              top: 20px;
              width: 60px;
              margin-top: 44px;
              margin-left: ${"expand"===f?"-70px":0};
            `}>
            <div class="fab-container fab-container_main">
              <div class="fab-container fab-container_vertical">
                <button class="fab-button fab-button_empty" @click=${$}>
                  <div class="sub-button">
                    <input type="range" .value=${y} min="0" max="1" step="0.01" @input=${z}>
                    <div class="sub-button__back">
                      <div style=${d.iv`
                          width: 100%;
                          height: 20px;
                          background: linear-gradient(to right, rgba(255, 128, 0, 0), ${x});
                        `}></div>
                    </div>
                  </div>
                </button>
                <button class="fab-button" @click=${C}>
                  ${ie({})}
                </button>
                <button class="fab-button" @click=${P}>
                  ${ee({})}
                </button>
                <button class="fab-button fab-button_lg">
                  ${se({})}
                </button>
              </div>

              <div class="fab-container fab-container_vertical">
                <button class="fab-button fab-button_empty" style=${d.iv`
                    bottom: -7px;
                    width: 20px;
                    height: 20px;
                  `}>
                  <div class="sub-button">
                    <input type="range" .value=${w} min="0.5" max="10" step="0.5" @input=${T}>
                  </div>
                </button>
                <button class="fab-button" @click=${E}>
                  ${ne({})}
                </button>
                <button class="fab-button" @click=${j}>
                  ${re({})}
                </button>
                <button class="fab-button fab-button_lg">
                  ${le({})}
                </button>
              </div>

              <div class="fab-container fab-container_vertical">
                <hex-color-picker class="fab-button_static" id=${`${h.id}_colorPicker`} name="colorPicker" style=${d.iv`
                    cursor: pointer;
                  `} .value=${x} @color-changed=${L}></hex-color-picker>
              </div>

              <div class="fab-container fab-container_vertical">
                <button class="fab-button fab-button_lg fab-button_static">
                  ${ae({})}
                </button>
              </div>
            </div>
            <button class="fab-button" @click=${M} style=${d.iv`
                margin-top: 0.7rem;
              `}>
              ${oe({})}
            </button>

            <button class="fab-button" @click=${A} style=${d.iv`
                margin-top: 0.7rem;
              `}>
              ${ce({})}
            </button>
          </div>
        `,this)}finally{null==u||u.destroy()}}));var pe=o(6925);const ue=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-writing" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z"></path>
          <path d="M16 7h4"></path>
          <path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3"></path>
        </svg>
      `,this)}));var he=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{s(n.next(t))}catch(t){r(t)}}function l(t){try{s(n.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}s((n=n.apply(t,e||[])).next())}))};de("sketch-pad");const fe=Dt(),ge=Nt(),be=Bt(),me=Zt(),ve=Rt(),ye=ue(),we=(0,i.EG)({props:{pageId:i.p.req(),marginId:i.p.opt(),onchangeMarginMode:i.p.opt()}})((function*(t){var e;const i=this.attachShadow({mode:"open"}),r=[];let a,c=It,p=null!=t.marginId?"hide":"empty";const u=l.Z.$.pipe((0,pe.Z)(jt.o),(0,g.h)((e=>e.type!==jt.o.CREATE_FAIL&&e.payload.id===t.marginId))),h=t=>()=>he(this,void 0,void 0,(function*(){const e=i.host;switch(t){case"expand":e.style.position="absolute",e.style.borderLeft="none";break;case"full":e.style.borderLeft="none",yield function(t){return he(this,void 0,void 0,(function*(){"requestFullscreen"in t&&null==document.fullscreenElement?yield t.requestFullscreen():"webkitRequestFullscreen"in t&&(yield t.webkitRequestFullscreen())}))}(e);break;case"collapse":e.style.position="relative",e.style.borderLeft="solid 1px var(--light-grey)",yield xe();break;default:e.style.borderLeft="none",e.style.position="relative",yield xe()}p=t,this.dispatchEvent(new CustomEvent("changeMarginMode",{detail:{mode:p}})),this.next()})),f=()=>{var e;null==(null===(e=null==c?void 0:c.data)||void 0===e?void 0:e.id)&&function(t){Ot(this,void 0,void 0,(function*(){return yield(0,Mt.G)((()=>Ot(this,void 0,void 0,(function*(){const{insert_margin_one:e}=yield(0,b.S)().createMargin({page_id:t,created_at:(new Date).toISOString()});if(null!=(null==e?void 0:e.id))return l.Z.dispatch({type:jt.o.CREATE_DONE,payload:{id:e.id,pageId:t}}),e;l.Z.dispatch({type:jt.o.CREATE_FAIL,payload:{pageId:t,error:{massage:`Can not create a new Margin for Page ${t}!`}}})}))))}))}(t.pageId)};r.push(l.Z.$.pipe((0,g.h)((t=>t.type===s.u.FULLSCREEN_CHANGED))).subscribe((t=>{t.type===s.u.FULLSCREEN_CHANGED&&(t.payload.isFullscreen&&"full"!==p&&(p="full",this.next()),t.payload.isFullscreen||"full"!==p||(p="collapse",this.next()))})));try{for(;;){null!=t.marginId&&t.marginId!==(null===(e=c.data)||void 0===e?void 0:e.id)&&(null==a||a.unsubscribe(),a=u.subscribe((t=>{c=Ht(c,t),this.next()})),"empty"===p&&h("collapse")(),St(t.marginId));let r=n.dy``;switch(p){case"empty":r=n.dy`<button class="btn btn_icon btn__first" title="create new margin" @click=${f}>
              ${ye({})}
            </button>`;break;case"hide":r=n.dy`<button class="btn btn_icon btn__first" @click=${h("collapse")}>
              ${be({isOn:!1})}
            </button>`;break;case"collapse":r=n.dy`
              <button class="btn btn_icon btn__first" @click=${h("hide")}>
                ${be({isOn:!0})}
              </button>
              <button class="btn btn_icon btn__second" title="expand" @click=${h("expand")}>
                ${fe({})}
              </button>
              <button class="btn btn_icon btn__third" title="full" @click=${h("full")}>
                ${me({})}
              </button>
            `;break;case"expand":r=n.dy`
              <button class="btn btn_icon btn__first" title="expand" @click=${h("collapse")}>
                ${ge({})}
              </button>
              <button class="btn btn_icon btn__second" title="full" @click=${h("full")}>
                ${me({})}
              </button>
            `;break;case"full":r=n.dy`<button class="btn btn_icon btn__first" title="minimize" @click=${h("collapse")}>
              ${ve({})}
            </button>`}t=yield(0,n.sY)(n.dy`
          <style>${o(8608)}</style>

          ${r}

          ${c.data?n.dy`<sketch-pad style=${d.iv`
                visibility: ${"hide"!==p?"visible":"hidden"};
              `} .data=${c.data} .mode=${p}></sketch-pad>`:""}
        `,i)}}finally{r.forEach((t=>t.unsubscribe())),null==a||a.unsubscribe()}}));function xe(){return he(this,void 0,void 0,(function*(){"exitFullscreen"in document&&null!=document.fullscreenElement?yield document.exitFullscreen():"webkitExitFullscreen"in document&&(yield document.webkitExitFullscreen())}))}const _e=d.iv`
  :host {
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    position: absolute;
    right: 100%;
    font-family: var(--font-family);
  }
  button,
  label {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  button:focus {
    outline: 0;
  }
  .icon-tabler,
  label {
    stroke: var(--border-color);
    color: var(--border-color);
    transition: 0.2s;
  }

  :host(:hover) .icon-tabler {
    stroke: var(--dark-grey);
  }
  :host(:hover) label {
    color: var(--dark-grey);
  }
`,ke=(0,i.EG)({props:{label:i.p.req(),value:i.p.req(),isFolded:i.p.req(),change:i.p.req()}})((function*(t){const e=this.attachShadow({mode:"open"});let o=t;(0,d.A_)(_e,e);const i=()=>{t.change(t.value,!o.isFolded)};for(;;)Object.is(t,o)||(o=t),t=yield(0,n.sY)(n.dy`
        <label for=${o.value}>${o.label}</label>
        <button id=${o.value} @click=${i}>
          ${n.YP`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-left"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="0.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points=${o.isFolded?"9 6 15 12 9 18":"6 9 12 15 18 9"} />
          </svg>        
        `}
        </button>
      `,e)})),$e=(0,At.XM)(((t,e)=>(null!=e.current&&(e.current.setValue(t),e.current.commit()),o=>{e.current=o,e.current.setValue(t)}))),Me=(0,Lt.NG)({render:$e})((()=>At.YP`
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
      <line x1="12" y1="11" x2="12" y2="17"></line>
      <line x1="9" y1="14" x2="15" y2="14"></line>
    </svg>
  `)),Pe=(0,Lt.NG)({render:$e})((()=>At.YP`
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
      <path d="M10 12l4 4m0 -4l-4 4"></path>
    </svg>
  `));var Ee=o(9917),Ce=o(1545),ze=o(2006),Ae=o(2965),Le=o(4978),Te=o(2237),je=o(9878),Oe=o(8225),Se=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{s(n.next(t))}catch(t){r(t)}}function l(t){try{s(n.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}s((n=n.apply(t,e||[])).next())}))};function Ie(t){return t.pipe((0,ze.b)((t=>{l.Z.dispatch({type:s.u.PAGE_SAVE,payload:{pageId:t.pageId,draftId:t.draftId}})})),(0,Ae.b)(kt.v.isDevMode?3e3:1e4),(0,ze.b)((t=>{l.Z.dispatch({type:s.u.PAGE_SAVING,payload:{pageId:t.pageId,draftId:t.draftId}})})),(0,Le.w)((t=>(0,Ee.P)((()=>function(t,e,o){return Se(this,void 0,void 0,(function*(){return yield(0,Mt.G)((()=>Se(this,void 0,void 0,(function*(){return yield(0,b.S)().updatePageById({id:t,content:o,updated_at:(new Date).toISOString()}),{pageId:t,draftId:e,content:o}}))))}))}(t.pageId,t.draftId,t.content))).pipe((0,ze.b)((t=>{l.Z.dispatch({type:s.u.PAGE_SAVE_DONE,payload:t})})),(0,Te.a)((0,Oe.W)()),(0,je.K)((e=>(l.Z.dispatch({type:s.u.PAGE_SAVE_FAIL,payload:{draftId:t.draftId,pageId:t.pageId,error:e}}),Ce.E)))))))}function He(t){return t.pipe((0,Le.w)((t=>(0,Ee.P)((()=>Se(this,void 0,void 0,(function*(){return(0,Mt.G)((()=>Se(this,void 0,void 0,(function*(){var e;const{insert_page_one:o,update_page:n}=yield(0,b.S)().addPageToDraft({draft_id:t.draftId,order:t.order,created_at:(new Date).toISOString()});if(null==o)throw new Error("newPage == null");const i=null!==(e=null==n?void 0:n.returning)&&void 0!==e?e:[];return{draftId:t.draftId,newPage:o,updatedPages:i}}))))})))))),(0,ze.b)((t=>{const{draftId:e,updatedPages:o,newPage:n}=t;l.Z.dispatch({type:s.u.DRAFT_ADD_PAGE_DONE,payload:{draftId:e,newPage:Object.assign(Object.assign({},n),{content:null==n?void 0:n.content,draftId:e}),updatedPages:o}})})))}function De(t){return t.pipe((0,Le.w)((t=>(0,Ee.P)((()=>Se(this,void 0,void 0,(function*(){return(0,Mt.G)((()=>Se(this,void 0,void 0,(function*(){var e;const{update_page_by_pk:o,update_page:n}=yield(0,b.S)().deletePage({id:t.pageId,ended_at:(new Date).toISOString(),draft_id:t.draftId,order:t.order}),i=null!==(e=null==n?void 0:n.returning)&&void 0!==e?e:[],r={id:null==o?void 0:o.id,order:t.order};return{draftId:t.draftId,deletedPage:r,updatedPages:i}}))))})))))),(0,ze.b)((t=>{l.Z.dispatch({type:s.u.DRAFT_DELETE_PAGE_DONE,payload:{draftId:t.draftId,deletedPage:t.deletedPage,updatedPages:t.updatedPages}})})))}function Ne(t,e){return e.type===jt.o.CREATE_DONE?(null!=t.data&&(t.data.margins=[{id:e.payload.id},...t.data.margins]),t):t}var Be=o(6716);function Ze(t){const[e,o]=(0,Lt.eJ)();return(0,Lt.d4)((()=>{const e=new Be.x;return o([t(e),t=>e.next(t)]),()=>e.unsubscribe()}),[]),e}function Re(){const[t]=(0,Lt.eJ)((()=>{let t;return{get current(){var e;return null===(e=null==t?void 0:t.committer)||void 0===e?void 0:e.element},ref:(0,At.XM)((()=>e=>{t=e}))}}));return t}var Ge=o(7072);const Fe=(0,Lt.EG)({props:{editor:{},className:String,tippyOptions:{},pluginKey:{type:String,default:Ge.NM.options.pluginKey},shouldShow:{type:{},default:null}},render:At.sY})((function(t){const[e,o]=(0,Lt.eJ)(0),n=Re(),[i,r]=(0,Lt.eJ)(null);return(0,Lt.d4)((()=>{console.log("useEffect bubbleMenuElement"),cancelAnimationFrame(e);const{editor:i,tippyOptions:a}=t;o(requestAnimationFrame((()=>{null!=n.current&&i.registerPlugin((0,Ge.q3)({editor:i,element:n.current,pluginKey:t.pluginKey,shouldShow:t.shouldShow}))})));const l=new Be.x,s=({transaction:t})=>{t.steps.length>0?r(Ue(i)):t.selection.empty?r(null):l.next()};return i.on("transaction",s),l.pipe((0,Ae.b)(700)).subscribe((()=>{r(Ue(i))})),()=>{console.log("DESTROY bubbleMenuElement"),l.unsubscribe(),i.off("transaction",s),cancelAnimationFrame(e),i.unregisterPlugin(Ge.NM.options.pluginKey)}}),[n.current]),At.dy`<div .ref=${n.ref()} class=${t.className} style=${d.iv`
        visibility: 'hidden';
      `}>
      ${i}
    </div>`})),qe=["figure"],Ye=["topicTitle"];function Ue(t){const e=t.state.selection;return e instanceof F.qv&&qe.includes(e.node.type.name)||e instanceof F.Bs&&(Ye.includes(e.$from.parent.type.name)||Ye.includes(e.$to.parent.type.name))?null:[N.ZP.name,B.Z.name,R.Z.name,Z.Z.name].includes(e.$from.parent.type.name)?At.dy`
        <button @click=${()=>t.chain().focus().addColumnBefore().run()}>addColumnBefore</button>
        <button @click=${()=>t.chain().focus().addColumnAfter().run()}>addColumnAfter</button>
        <button @click=${()=>t.chain().focus().deleteColumn().run()}>deleteColumn</button>
        <button @click=${()=>t.chain().focus().addRowBefore().run()}>addRowBefore</button>
        <button @click=${()=>t.chain().focus().addRowAfter().run()}>addRowAfter</button>
        <button @click=${()=>t.chain().focus().deleteRow().run()}>deleteRow</button>
        <button @click=${()=>t.chain().focus().deleteTable().run()}>deleteTable</button>
        <button @click=${()=>t.chain().focus().mergeCells().run()}>mergeCells</button>
        <button @click=${()=>t.chain().focus().splitCell().run()}>splitCell</button>
        <button @click=${()=>t.chain().focus().toggleHeaderColumn().run()}>toggleHeaderColumn</button>
        <button @click=${()=>t.chain().focus().toggleHeaderRow().run()}>toggleHeaderRow</button>
        <button @click=${()=>t.chain().focus().toggleHeaderCell().run()}>toggleHeaderCell</button>
        <button @click=${()=>t.chain().focus().mergeOrSplit().run()}>mergeOrSplit</button>
        <button @click=${()=>t.chain().focus().setCellAttribute("colspan",2).run()}>setCellAttribute</button>
        <button @click=${()=>t.chain().focus().fixTables().run()}>fixTables</button>
        <button @click=${()=>t.chain().focus().goToNextCell().run()}>goToNextCell</button>
        <button @click=${()=>t.chain().focus().goToPreviousCell().run()}>goToPreviousCell</button>
      `:At.dy`
      <button @click=${()=>t.chain().focus().toggleBold().run()} class=${t.isActive("bold")?"is-active":""}>
        bold
      </button>
      <button @click=${()=>t.chain().focus().toggleItalic().run()} class=${t.isActive("italic")?"is-active":""}>
        italic
      </button>
      <button @click=${()=>t.chain().focus().toggleStrike().run()} class=${t.isActive("strike")?"is-active":""}>
        strike
      </button>
      <button @click=${()=>t.chain().focus().toggleHighlight().run()} class=${t.isActive("highlight")?"is-active":""}>
        highlight
      </button>
      <button @click=${()=>{var e;const o=null!==(e=window.prompt("URL"))&&void 0!==e?e:"";t.chain().focus().toggleLink({href:o}).run()}} class=${t.isActive("link")?"is-active":""}>
        link
      </button>
      <button @click=${()=>t.chain().focus().toggleBlockquote().run()} class=${t.isActive("blockquote")?"is-active":""}>
        blockquote
      </button>
      <button @click=${()=>t.chain().focus().toggleAside().run()} class=${t.isActive("aside")?"is-active":""}>
        aside
      </button>

      <button @click=${()=>t.chain().focus().toggleHeading({level:2}).run()} class=${t.isActive("heading",{level:2})?"is-active":""}>
        h2
      </button>
      <button @click=${()=>t.chain().focus().toggleHeading({level:3}).run()} class=${t.isActive("heading",{level:3})?"is-active":""}>
        h3
      </button>
      <button @click=${()=>t.chain().focus().toggleHeading({level:4}).run()} class=${t.isActive("heading",{level:4})?"is-active":""}>
        h4
      </button>
      <button @click=${()=>t.chain().focus().toggleHljsCodeBlock().run()} class=${t.isActive("hljsCodeBlock")?"is-active":""}>
        ${"<>"}
      </button>
    `}var We=o(5394);const Ve=(0,i.EG)({props:{editor:i.p.req()}})((function*(t){for(requestAnimationFrame((()=>{t.editor.registerPlugin((0,We.JF)({editor:t.editor,element:this.firstElementChild,pluginKey:We.AH.options.pluginKey,shouldShow:({state:t})=>{const{selection:e}=t,{$anchor:o,empty:n}=e,i=1===o.depth,r=o.parent.isTextblock&&!o.parent.type.spec.code&&!o.parent.textContent;return!!(n&&i&&r)},tippyOptions:{interactive:!0,placement:"left",arrow:!1,zIndex:0}})),this.style.zIndex="0"}));;)yield(0,n.sY)(n.dy`<div>
        <button class="btn btn_icon" @click=${()=>t.editor.chain().focus().insertTable({rows:3,cols:3,withHeaderRow:!0}).run()}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-table" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
            <line x1="4" y1="10" x2="20" y2="10"></line>
            <line x1="10" y1="4" x2="10" y2="20"></line>
          </svg>
        </button>
      </div>`,this)})),Je=(Fe("inscriptum-redactor-bubble-menu"),Ve("inscriptum-redactor-floating-menu"),(0,Lt.EG)({props:{content:{type:{},default:null},cbOnUpdateContent:{type:{},default:()=>{}},isTitle:Boolean,disable:Boolean},render:At.sY})((function(t){const[e,n]=(0,Lt.eJ)(0),[i,r]=(0,Lt.eJ)(),a=Re();return(0,Lt.d4)((()=>(cancelAnimationFrame(e),n(requestAnimationFrame((()=>{const e=a.current;if(null!=e){const o=t.content;r(function(t,e,o=!1,n){return new v.ML({element:t,content:e,onUpdate:null==n?void 0:n.onUpdate,extensions:_t(o)})}(e,o,t.isTitle,{onUpdate:({editor:e})=>{t.cbOnUpdateContent(e.getJSON())}}))}}))),()=>{var t,o;console.log("DESTROY redactorElement"),null===(o=null===(t=a.current)||void 0===t?void 0:t.firstChild)||void 0===o||o.remove(),cancelAnimationFrame(e),null!=i&&i.destroy()})),[a.current,t.content,t.isTitle,t.cbOnUpdateContent]),null!=i&&i.setEditable(!t.disable),At.dy`<div class="redactor">
      <style>${o(5257)}</style>
      <article .ref=${a.ref()} class="redactor__article"></article>
      ${null!=i&&At.dy`
          <inscriptum-redactor-floating-menu .editor=${i}></inscriptum-redactor-floating-menu>
          <inscriptum-redactor-bubble-menu .editor=${i}></inscriptum-redactor-bubble-menu>
        `}
    </div>`}))("inscriptum-redactor"),we("inscriptum-margin"),ke("inscriptum-folding"),Me()),Ke=Pe(),Xe=(0,Lt.EG)({props:{page:{type:{}},header:{type:{}}},render:At.sY})((function(t){const[e,n]=(0,Lt._Y)(Ne,{data:t.page,isLoading:!1});let[i,r]=(0,Lt.eJ)(t.page.content);const[a,s]=(0,Lt.eJ)(t.page.isFolded),[c,p]=(0,Lt.eJ)("hide"),[u,h]=Ze(Ie),[f,b]=Ze(He),[m,v]=Ze(De);(0,Lt.d4)((()=>{const o=(i=t.page.id,l.Z.$.pipe((0,pe.Z)(jt.o),(0,g.h)((t=>t.type===jt.o.CREATE_DONE&&t.payload.pageId===i)))).subscribe((t=>n(t)));var i;return o.add(u.subscribe((t=>{null!=e.data&&(e.data.content=t.content)}))),o.add(f.subscribe()),o.add(m.subscribe()),()=>{o.unsubscribe()}}),[]),(0,Lt.d4)((()=>{var t;null!=(null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.content)&&(null==i&&null!=e.data.content&&r(e.data.content),null!=e.data.isFolded&&a!==e.data.isFolded&&(e.data.isFolded||r(e.data.content)))}),[e,i,a,r,s]);const y=(0,Lt.I4)((t=>{null!=e.data&&(h({pageId:e.data.id,draftId:e.data.draftId,content:t}),null!=i?i.content=t.content:i=t)}),[e,h,i]),w=(0,Lt.I4)((t=>()=>{var o;null!=(null===(o=e.data)||void 0===o?void 0:o.draftId)&&b({draftId:e.data.draftId,order:t})}),[e.data,h]),x=(0,Lt.I4)((()=>{null!=e.data&&v({draftId:e.data.draftId,pageId:e.data.id,order:e.data.order})}),[e.data]),_=(0,Lt.I4)((t=>{p(t.detail.mode)}),[e]);if(null!=(null==e?void 0:e.data)){const n=At.dy`<div class="page__controls">
        <div>
          <button class="btn btn_icon" title="add a new page" @click=${w(e.data.order+1)}>
            ${Je({})}
          </button>
          ${e.data.order>0?At.dy`<button class="btn btn_icon" title="delete this page" @click=${x}>
              ${Ke({})}
            </button>`:null}
        </div>
      </div>`;return At.dy`
        <style>${o(1384)}</style>
        <inscriptum-folding .label=${e.data.order>0?String(e.data.order):""} .value=${e.data.id} .isFolded=${a} .change=${(t,e)=>s(e)}></inscriptum-folding>
        ${a?At.dy`
            <span class="pageContent_collapsed" @click=${()=>s(!1)}>
              ${t.header&&t.header.trim().length>0?t.header:"..."}
            </span>
            ${n}
          `:At.dy`<div class="row" style=${d.iv`
              display: flex;
              width: 100%;
              min-height: ${e.data.margins.length>0?"100vh":"auto"};
            `}>
            <div style=${d.iv`
                min-width: 732px;
                padding: 1rem 0 0 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}>
              
              <inscriptum-redactor .disable=${["expand","full"].includes(c)} .content=${i} .cbOnUpdateContent=${y} .isTitle=${0===e.data.order}></inscriptum-redactor>
              ${n}
            </div>

            <inscriptum-margin .pageId=${e.data.id} .marginId=${e.data.margins.length>0?e.data.margins[0].id:void 0} @changeMarginMode=${_}></inscriptum-margin>
          </div>`}
      `}})),Qe=(0,i.EG)({props:{items:i.p.req()}})((function*(t){var e,n;for(;;)t=yield(0,At.sY)(At.dy`
        <style>${o(7135)}</style>
        <nav class="toc-panel">
          <ul class="toc-panel__list">
            <li class="toc-panel__title">${null!==(n=null===(e=t.items[0])||void 0===e?void 0:e.header)&&void 0!==n?n:"In this article"}</li>
            ${t.items.slice(1).map(((t,e)=>{var o;return At.dy`<li class="toc-panel__item">
                <span class="toc-panel__page-numb">${e+1}</span>
                <a class=${"toc-panel__header "+(e+1===0?"toc-panel__header_selected":"")}>${null!==(o=null==t?void 0:t.header)&&void 0!==o?o:"..."}</a>
              </li>`}))}

            
          </ul>
        </nav>
      `,this)}));var to=o(3071);function eo(t){var e;let o="...";return null==t||("ops"in t&&(o=t.ops[0].insert),"type"in t&&Array.isArray(t.content)&&Array.isArray(t.content[0].content)&&"text"===t.content[0].content[0].type&&(o=null!==(e=t.content[0].content[0].text)&&void 0!==e?e:o)),o}const oo=(0,i.NG)((function*(){for(;;)yield(0,p.$)(n.YP`
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="38" height="38" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>      
      `,this)}))(),no=(0,i.EG)()((function*(){var t;const e=window.innerWidth<=Number(null!==(t=getComputedStyle(this).getPropertyValue("--ipad-min-width"))&&void 0!==t?t:0);for(;;)yield(0,n.sY)(n.dy`
        <style>${o(6599)}</style>
        <input type="checkbox" id="sidebar" name="sidebar" class="sidebar-checkbox" .checked=${!e}>
        <div class="sidebar">
          <label class="btn btn_icon sidebar-toggle" for="sidebar">
            ${oo({})}
          </label>
          <div class="sidebar-content">
            <slot></slot>
          </div>
        </div>
      `,this.attachShadow({mode:"open"}))}));var io=o(7296);Xe("inscriptum-page"),(0,c.s)("loading-progress-bar"),Qe("inscriptum-table-of-content"),h("inscriptum-controls-panel"),no("inscriptum-sidebar"),(0,io.z)("inscriptum-preloader");const ro=(0,i.EG)({props:{id:i.p.req("data-id")}})((function*(t){var e,i,c,p,u;const h=[],b=(0,a.V)();let v={isLoading:!1},y=null===(e=v.data)||void 0===e?void 0:e.table_of_contents[0],w=0;h.push(function(t){const e=l.Z.$.pipe(),o=l.Z.$.pipe((0,g.h)((e=>e.type===s.u.PAGE_SAVE_DONE&&e.payload.draftId===t)));return(0,to.T)(e,o)}(t.id).subscribe((t=>{v=function(t,e){var o,n,i,r,a,l,c,d;switch(e.type){case m.v.LOAD:case m.v.LOADING:return Object.assign(Object.assign({},t),{isLoading:!0});case m.v.LOAD_DONE:if((null===(o=e.payload.pages)||void 0===o?void 0:o.length)!==e.payload.table_of_contents.length){e.payload.table_of_contents=[];for(const t of null!==(n=e.payload.pages)&&void 0!==n?n:[])e.payload.table_of_contents.push({header:eo(t.content),pageId:t.id});Ct(e.payload.table_of_contents,e.payload.id)}return Object.assign(Object.assign({},t),{data:e.payload,isLoading:!1});case s.u.DRAFT_ADD_PAGE_DONE:if(null!=t.data&&null!=e.payload.newPage){const o=null!==(i=t.data.pages)&&void 0!==i?i:[];for(const t of o){const o=e.payload.updatedPages.find((e=>e.id===t.id));null!=o&&(t.order=o.order)}o.push(e.payload.newPage);const n=t.data.table_of_contents;return Ct([...n.slice(0,e.payload.newPage.order),{header:"...",pageId:e.payload.newPage.id},...n.slice(e.payload.newPage.order)],t.data.id),Object.assign(Object.assign({},t),{data:Object.assign(Object.assign({},t.data),{pages:o.sort(((t,e)=>t.order-e.order))})})}return t;case s.u.DRAFT_DELETE_PAGE_DONE:if(null!=t.data){const o=(null!==(r=t.data.pages)&&void 0!==r?r:[]).filter((t=>t.id!==e.payload.deletedPage.id));for(const t of o){const o=e.payload.updatedPages.find((e=>e.id===t.id));null!=o&&(t.order=o.order)}const n=t.data.table_of_contents;return Ct([...n.slice(0,e.payload.deletedPage.order),...n.slice(e.payload.deletedPage.order+1)],t.data.id),Object.assign(Object.assign({},t),{data:Object.assign(Object.assign({},t.data),{pages:o.sort(((t,e)=>t.order-e.order))})})}return t;case m.v.UPDATE_TOC_DONE:return null!=t.data?Object.assign(Object.assign({},t),{data:Object.assign(Object.assign({},t.data),{table_of_contents:e.payload.toc})}):t;case m.v.UPDATE_TOC_ERROR:return console.warn(e.payload.error),t;case s.u.PAGE_SAVE_DONE:if(null!=t.data){const o=null!==(c=null===(l=null===(a=t.data.pages)||void 0===a?void 0:a.find((t=>t.id===e.payload.pageId)))||void 0===l?void 0:l.order)&&void 0!==c?c:-1,n=t.data.table_of_contents;let i=eo(e.payload.content);n[o]=null!==(d=n[o])&&void 0!==d?d:{},o>-1&&n[o].header!==String(i)&&(n[o]={header:String(i),pageId:e.payload.pageId},Ct(n,t.data.id))}return t;case s.u.DRAFT_PUBLISH:return null!=t.data?zt(t.data):alert("Error: the draft cannot be published. The draft state is null."),t;default:return t}}(v,t),this.next()}))),w=requestAnimationFrame((()=>{null!=b.value&&h.push(function(t){var e,o;const n=new f.w0;let i=document.title;const r=null===(e=t.value)||void 0===e?void 0:e.togglePause,a=null===(o=t.value)||void 0===o?void 0:o.generateProgress;if(null!=r&&null!=a){let t=2e3,e=!1,o=!1;n.add(l.Z.$.pipe((0,g.h)((t=>t.type===s.u.PAGE_SAVE))).subscribe((()=>{o||(i=document.title,document.title=`*${i}`,o=!0)}))),n.add(l.Z.$.pipe((0,g.h)((t=>t.type===s.u.PAGE_SAVING))).subscribe((()=>{e&&a.next(),t=2e3,e=!0;const o=a.next();void 0!==o&&1===o.value&&(setTimeout((()=>{e&&(r(!0),t-=300)}),300),setTimeout((()=>{e&&r(!1)}),1e3),setTimeout((()=>{e&&(r(!0),t-=1e3)}),2e3),setTimeout((()=>{e&&(t-=1e3)}),3e3))}))),n.add(l.Z.$.pipe((0,g.h)((t=>t.type===s.u.PAGE_SAVE_DONE))).subscribe((n=>{e=!1,r(!1),setTimeout((()=>{a.next()}),t>0?t:0),document.title=i,o=!1}))),n.add(l.Z.$.pipe((0,g.h)((t=>t.type===s.u.PAGE_SAVE_FAIL))).subscribe((()=>{e=!1,r(!1),setTimeout((()=>{a.next()}),t>0?t:0)})))}return n}(b))})),Et(t.id);try{let e=t;for(;;)(null==e?void 0:e.id)!==t.id&&Et(t.id),null!=v.data&&y!==v.data.table_of_contents[0]&&(y=v.data.table_of_contents[0],document.title=y.header),e=yield(0,n.sY)(n.dy`
          <style>${o(6061)}</style>
          <loading-progress-bar .ref=${(0,a.i)(b)}></loading-progress-bar>

          <inscriptum-preloader .loading=${v.isLoading}>
            <div class="draft-content">
              <inscriptum-sidebar>
                <inscriptum-controls-panel .draftId=${t.id}></inscriptum-controls-panel>
                <inscriptum-table-of-content .items=${null!==(c=null===(i=v.data)||void 0===i?void 0:i.table_of_contents)&&void 0!==c?c:[]}></inscriptum-table-of-content>
              </inscriptum-sidebar>
              <div style=${d.iv`
                  width: 100%;
                `}>
                ${(0,r.r)(null!==(u=null===(p=v.data)||void 0===p?void 0:p.pages)&&void 0!==u?u:[],(t=>`${t.id}_${t.order}`),(t=>{var e,o;return n.dy`<inscriptum-page .page=${t} style=${d.iv`
                        position: relative;
                        display: block;
                        border-bottom: 1px solid #eee;
                        margin-left: 150px;
                      `} .header=${null===(o=null===(e=v.data)||void 0===e?void 0:e.table_of_contents[t.order])||void 0===o?void 0:o.header}></inscriptum-page>`}))}
              </div>
            </div>
          </inscriptum-preloader>
        `,this)}finally{cancelAnimationFrame(w),h.forEach((t=>t.unsubscribe()))}}))},7848:(t,e,o)=>{o.d(e,{G:()=>c});var n=o(5467),i=o(9725),r=o(6608),a=o(4727),l=o(5196),s=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{s(n.next(t))}catch(t){r(t)}}function l(t){try{s(n.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}s((n=n.apply(t,e||[])).next())}))};function c(t,e=`${document.location.origin}/drafts`){return s(this,void 0,void 0,(function*(){return new Promise((o=>{r.f.pipe((0,a.q)(1)).subscribe((t=>{var o;null!=(null===(o=t.data)||void 0===o?void 0:o.accessToken)||t.isLoading||i.Z.dispatch({type:n.C.AUTH,payload:{redirectUri:e}})})),r.f.pipe((0,l.P)((t=>null!=t.data&&!t.isLoading))).subscribe((e=>{console.log("Make authorized work"),o(t(e.data))}))}))}))}},6061:t=>{t.exports='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:root{--light-grey: #e1e1e1;--dark-grey: #333;--primary-color: #33c3f0;--secondary-color: #555555;--border-color: #bbb;--link-color: #1eaedb;--font-color: #222;--color-contrast-low: hsl(240, 1%, 83%);--color-contrast-medium: hsl(240, 1%, 48%);--color-contrast-high: hsl(240, 4%, 20%);--font-family: Inter, sans-serif;--ipad-min-width: 1366}.container{position:relative;width:100%;max-width:960px;margin:0 auto;padding:0 20px;box-sizing:border-box}.column,.columns{width:100%;float:left;box-sizing:border-box}@media(min-width: 400px){.container{width:85%;padding:0}}@media(min-width: 550px){.container{width:80%}.column,.columns{margin-left:4%}.column:first-child,.columns:first-child{margin-left:0}.one.column,.one.columns{width:grid-column-width(1)}.two.columns{width:grid-column-width(2)}.three.columns{width:grid-column-width(3)}.four.columns{width:grid-column-width(4)}.five.columns{width:grid-column-width(5)}.six.columns{width:grid-column-width(6)}.seven.columns{width:grid-column-width(7)}.eight.columns{width:grid-column-width(8)}.nine.columns{width:grid-column-width(9)}.ten.columns{width:grid-column-width(10)}.eleven.columns{width:grid-column-width(11)}.twelve.columns{width:100%;margin-left:0}.one-third.column{width:grid-column-width(4)}.two-thirds.column{width:grid-column-width(8)}.one-half.column{width:grid-column-width(6)}.offset-by-one.column,.offset-by-one.columns{margin-left:grid-offset-length(1)}.offset-by-two.column,.offset-by-two.columns{margin-left:grid-offset-length(2)}.offset-by-three.column,.offset-by-three.columns{margin-left:grid-offset-length(3)}.offset-by-four.column,.offset-by-four.columns{margin-left:grid-offset-length(4)}.offset-by-five.column,.offset-by-five.columns{margin-left:grid-offset-length(5)}.offset-by-six.column,.offset-by-six.columns{margin-left:grid-offset-length(6)}.offset-by-seven.column,.offset-by-seven.columns{margin-left:grid-offset-length(7)}.offset-by-eight.column,.offset-by-eight.columns{margin-left:grid-offset-length(8)}.offset-by-nine.column,.offset-by-nine.columns{margin-left:grid-offset-length(9)}.offset-by-ten.column,.offset-by-ten.columns{margin-left:grid-offset-length(10)}.offset-by-eleven.column,.offset-by-eleven.columns{margin-left:grid-offset-length(11)}.offset-by-one-third.column,.offset-by-one-third.columns{margin-left:grid-offset-length(4)}.offset-by-two-thirds.column,.offset-by-two-thirds.columns{margin-left:grid-offset-length(8)}.offset-by-one-half.column,.offset-by-one-half.column{margin-left:grid-offset-length(6)}}.container:after,.row:after,.u-cf{content:"";display:table;clear:both}:root{--light-grey: #e1e1e1;--dark-grey: #333;--primary-color: #33c3f0;--secondary-color: #555555;--border-color: #bbb;--link-color: #1eaedb;--font-color: #222;--color-contrast-low: hsl(240, 1%, 83%);--color-contrast-medium: hsl(240, 1%, 48%);--color-contrast-high: hsl(240, 4%, 20%);--font-family: Inter, sans-serif;--ipad-min-width: 1366}.btn{cursor:pointer}.btn.btn_icon{background:transparent;border:none}.btn.btn_icon .icon-tabler{transition:.2s;stroke:#bbb;stroke:var(--border-color);color:#bbb;color:var(--border-color)}.btn.btn_icon .icon-tabler:hover{stroke:#333;stroke:var(--dark-grey)}.um-drafts__submenu{display:flex;flex-direction:row-reverse;padding-top:10px;border-bottom:1px solid #eee}.um-drafts__export-all{margin:0 0 10px 10px;stroke:#fff;stroke-width:30px;color:#bbb}.um-drafts__export-all:hover{color:#888;cursor:pointer}.draft-content{display:flex;flex-direction:column}@media(min-width: 400px){.draft-content{flex-direction:row}}.page__controls{display:flex;justify-content:space-between;align-items:start;opacity:.3;transition:.2s}.page__controls:hover{opacity:1}'},8608:t=>{t.exports=":root{--light-grey: #e1e1e1;--dark-grey: #333;--primary-color: #33c3f0;--secondary-color: #555555;--border-color: #bbb;--link-color: #1eaedb;--font-color: #222;--color-contrast-low: hsl(240, 1%, 83%);--color-contrast-medium: hsl(240, 1%, 48%);--color-contrast-high: hsl(240, 4%, 20%);--font-family: Inter, sans-serif;--ipad-min-width: 1366}:root{--light-grey: #e1e1e1;--dark-grey: #333;--primary-color: #33c3f0;--secondary-color: #555555;--border-color: #bbb;--link-color: #1eaedb;--font-color: #222;--color-contrast-low: hsl(240, 1%, 83%);--color-contrast-medium: hsl(240, 1%, 48%);--color-contrast-high: hsl(240, 4%, 20%);--font-family: Inter, sans-serif;--ipad-min-width: 1366}.btn{cursor:pointer}.btn.btn_icon{background:transparent;border:none}.btn.btn_icon .icon-tabler{transition:.2s;stroke:#bbb;stroke:var(--border-color);color:#bbb;color:var(--border-color)}.btn.btn_icon .icon-tabler:hover{stroke:#333;stroke:var(--dark-grey)}:host{position:relative;width:100%;display:flex;flex-direction:row;user-select:none;-webkit-user-select:none}sketch-pad{width:100%;display:block}.sketch-pad_frame{flex-grow:1;position:absolute;height:100%;width:100%;overflow:auto;user-select:none;-webkit-user-select:none}.signature-pad{position:absolute;user-select:none;-webkit-user-select:none}.fab-container{display:inline-flex;align-items:flex-start;justify-content:flex-end}.fab-container_main{display:flex;flex-direction:row-reverse}.fab-container_main>*:not(:last-child){display:none;margin-left:0;transform:translateX(10px)}.fab-container_main>*:last-child{display:flex}.fab-container_main:hover{height:60px;width:500px}.fab-container_main:hover>*{display:flex;transform:none;transition:margin .08s;margin-right:12px}.fab-container [tooltip]:before{bottom:115%;border-radius:2px;background:rgba(88,88,88,.16);content:attr(tooltip);font-size:12px;visibility:hidden;opacity:0;padding:5px 7px;margin-right:12px;position:absolute;white-space:nowrap}.fab-container [tooltip]:hover:before,.fab-container [tooltip]:hover:after{visibility:visible;opacity:1}.fab-container_horizontal{flex-direction:row;position:relative;margin:0;display:none}.fab-container_horizontal>*:not(:last-child){opacity:0;margin-left:0;transform:translateX(10px)}.fab-container_horizontal:hover>*{display:inherit;opacity:1;transform:none;margin-left:10px}.fab-container_vertical{flex-direction:column-reverse;position:relative;margin:0;display:none}.fab-container_vertical>*:not(:last-child){opacity:0;margin-top:0;transform:translateY(-10px);z-index:0}.fab-container_vertical:hover>*{z-index:1;opacity:1;margin-top:10px;transform:none}.fab-container_vertical:hover>.fab-button_static{margin-top:0}.fab-container:nth-last-child(1){transition-delay:25ms;background-size:contain}.fab-container:not(:last-child):nth-last-child(2){transition-delay:20ms;background-size:contain}.fab-container:not(:last-child):nth-last-child(3){transition-delay:40ms;background-size:contain}.fab-container:not(:last-child):nth-last-child(4){transition-delay:60ms;background-size:contain}.fab-container{opacity:1;margin-top:10px}.fab-button{border:none;background-color:#fff;cursor:pointer;box-shadow:2px 2px 2px 0px rgba(0,0,0,.18),0px 4px 7px -7px rgba(0,0,0,.15);border-radius:50%;display:block;width:40px;height:40px;margin:5px;position:relative;transition:all .1s ease-out;text-decoration:none;display:flex;justify-content:center;align-items:center;color:#bbb}.fab-button:active,.fab-button:focus,.fab-button:hover{box-shadow:3px 2px 2px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);color:#bbb}.fab-button_lg{width:50px;height:50px;margin:0}.fab-button_empty{box-shadow:none}.fab-button_empty:hover{box-shadow:none}.btn__first{position:absolute;z-index:2}.btn__second{position:absolute;z-index:2;left:2rem}.btn__third{position:absolute;z-index:2;left:4rem}.sub-button{display:block;position:absolute;background:#fff;border:1px solid #eee;border-radius:4px;filter:drop-shadow(0 0 6px rgba(0, 0, 0, 0.1));padding:5px;left:0px}.sub-button__back{position:relative;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==)}"},1384:t=>{t.exports=":root{--light-grey: #e1e1e1;--dark-grey: #333;--primary-color: #33c3f0;--secondary-color: #555555;--border-color: #bbb;--link-color: #1eaedb;--font-color: #222;--color-contrast-low: hsl(240, 1%, 83%);--color-contrast-medium: hsl(240, 1%, 48%);--color-contrast-high: hsl(240, 4%, 20%);--font-family: Inter, sans-serif;--ipad-min-width: 1366}.pageContent_collapsed{display:flex;cursor:pointer;font-size:15px;line-height:18px;color:hsl(240, 1%, 48%);color:var(--color-contrast-medium);padding:10px 0;margin-left:1rem}"},5257:t=>{t.exports='pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#23241f;color:#f8f8f2}.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params,.hljs-title.class_{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}.redactor{max-width:732px;margin:0 auto}.redactor__article{font-family:Georgia,Times,Times New Roman,serif;font-weight:400;font-style:normal;font-size:18px;line-height:30px;color:rgba(12,10,10,.8);padding:0;margin:0}.redactor__article .ProseMirror{outline:0}.redactor__article .ProseMirror>*+*{margin-top:.75em}.redactor__article .ProseMirror>::selection,.redactor__article .ProseMirror>:not(pre) ::selection{background:#5f5f5f2f}.redactor__article .ProseMirror h1,.redactor__article .ProseMirror h2,.redactor__article .ProseMirror h3,.redactor__article .ProseMirror h4{font-family:Inter,sans-serif;font-weight:600;font-style:normal;letter-spacing:initial}.redactor__article .ProseMirror h1{font-size:32px;margin:21px 21px 12px;line-height:34px}.redactor__article .ProseMirror h2{font-size:30px;margin:21px 21px 12px;line-height:34px}.redactor__article .ProseMirror h3{font-size:28px;margin:18px 21px 9px}.redactor__article .ProseMirror h4{font-size:24px;margin:18px 21px 7px}.redactor__article .ProseMirror p{margin:0 21px 12px;word-wrap:break-word;white-space:pre-wrap}.redactor__article .ProseMirror blockquote{margin:18px 21px 16px 0;padding-left:15px;position:relative;font-style:italic;word-wrap:break-word;border-left:3px solid #000}.redactor__article .ProseMirror aside{font-size:21px;color:rgba(0,0,0,.6);margin:18px 21px 16px;padding:0 18px;text-align:center;font-style:italic}.redactor__article .ProseMirror hr{width:50%;margin:30px auto;border:none;font-size:2px;text-align:right;overflow:visible}.redactor__article .ProseMirror hr:after{content:"";display:block;border-top:1px solid #c9cdd1;margin:0 3px;position:relative;top:1px}.redactor__article .ProseMirror [contenteditable=false]{white-space:normal}.redactor__article .ProseMirror ul[data-type=taskList]{list-style:none;padding:0;margin:0 21px 12px}.redactor__article .ProseMirror ul[data-type=taskList] li{display:block}.redactor__article .ProseMirror ul[data-type=taskList] li>label{float:left;margin-right:.5rem}.redactor__article .ProseMirror ul[data-type=taskList] li>div{display:contents}.redactor__article .ProseMirror ul[data-type=taskList] li p{margin:0}.redactor__article .ProseMirror mark{background-color:#faf594b4}.redactor__article .ProseMirror :not(pre)>code{background-color:rgba(97,97,97,.1);color:#616161;font-family:JetBrainsMono,monospace;font-variant-ligatures:normal;padding:.1rem .3rem;border-radius:.4rem;font-size:.9rem}.redactor__article .ProseMirror a[href]{text-decoration:none;transition:all .2s ease-in-out;color:rgba(0,0,0,.8);border-bottom:.1rem rgba(0,0,0,.425) solid}.redactor__article .ProseMirror a[href]:hover,.redactor__article .ProseMirror a[href]:focus{border-bottom:.1rem rgba(0,0,0,.8) solid}.redactor__article .ProseMirror *[data-placeholder].empty{position:relative}.redactor__article .ProseMirror *[data-placeholder].empty:before{position:absolute;left:0;right:0;content:attr(data-placeholder);color:rgba(0,0,0,.44);font-weight:normal;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;pointer-events:none}.redactor__article .ProseMirror *[data-label]{position:relative}.redactor__article .ProseMirror *[data-label]:after{position:absolute;content:attr(data-label);color:rgba(0,0,0,.44);border-right:1px solid rgba(0,0,0,.15);right:100%;top:-6px;bottom:-6px;padding:6px 12px;font-weight:normal;margin:0 21px;opacity:0;visibility:hidden;transition:opacity .15s ease}.redactor__article .ProseMirror .focused *[data-label].empty:after{position:absolute;content:attr(data-label);color:rgba(0,0,0,.44);border-right:1px solid rgba(0,0,0,.15);right:100%;top:-6px;bottom:-6px;padding:6px 12px;font-weight:normal;margin:0 21px;opacity:0;visibility:hidden;transition:opacity .15s ease}.redactor__article .ProseMirror *[data-label].focused:after{opacity:1;visibility:visible}.redactor__article .ProseMirror *[role=definition]{font-family:Inter,sans-serif;font-size:15px;line-height:18px;color:#79828b;margin:12px 21px;font-style:normal}.redactor__article .ProseMirror *[role=definition] a{color:#79828b}.redactor__article .ProseMirror *[role=definition] a[href]{border-bottom:none;border-bottom:.1em solid rgba(0,0,0,.4)}.redactor__article .ProseMirror *[role=definition].empty{display:block}.redactor__article .ProseMirror *[role=definition] time:before{content:"•";padding:0 7px}.redactor__article .ProseMirror img{max-width:100%;vertical-align:top}.redactor__article .ProseMirror .iframe_wrap{max-width:100%;vertical-align:top;max-width:100%;vertical-align:top;position:relative}.redactor__article .ProseMirror .iframe_wrap iframe{position:absolute;width:1px;height:1px;min-width:100%;min-height:100%;*width:100%;*height:100%;top:0;left:0}.redactor__article .ProseMirror figure{margin:0 21px 16px;padding:0;text-align:center;position:relative;user-select:inherit}.redactor__article .ProseMirror figure.ProseMirror-selectednode img{box-shadow:0 0 0 3px rgba(0,0,0,.4)}.redactor__article .ProseMirror figure.ProseMirror-selectednode img:hover{box-shadow:0 0 0 3px rgba(0,0,0,.4)}.redactor__article .ProseMirror figure img:hover{box-shadow:0 0 0 3px rgba(0,0,0,.2)}.redactor__article .ProseMirror figcaption{font-family:Inter,sans-serif;font-size:15px;color:#79828b;padding:12px 21px 0;line-height:18px;vertical-align:top;text-align:center}.redactor__article .ProseMirror .figure_wrapper{position:relative}.redactor__article .ProseMirror .figure_wrapper img{opacity:1;transition:opacity .15s ease;max-height:690px}.redactor__article .ProseMirror .figure_wrapper.loading img{opacity:.3}.redactor__article .ProseMirror .figure_wrapper .file_progress{position:absolute;z-index:1;bottom:0;left:0;right:0;padding:3px;background-color:rgba(255,255,255,.7);transition:opacity .15s ease;visibility:hidden;opacity:0}.redactor__article .ProseMirror .figure_wrapper.loading .file_progress{visibility:visible;opacity:1}.redactor__article .ProseMirror .figure_wrapper .file_progress_bar{height:2px;background-color:#333;transition:width .1s linear;width:0}.redactor__article .ProseMirror figcaption[data-placeholder].empty{position:relative;overflow:hidden;width:calc(100% - 170px)}.redactor__article .ProseMirror figcaption[data-placeholder].empty:before{display:none}.redactor__article .ProseMirror figcaption[data-placeholder].empty:after{position:absolute;content:attr(data-placeholder);color:rgba(0,0,0,.44);font-weight:normal;font-style:italic;top:0px;padding-top:12px}.redactor__article .ProseMirror pre{background:#232b2b;border-radius:.3rem;box-shadow:0 .5rem 1rem rgba(0,0,0,.4);border-left:6px solid #516363;margin:1rem auto;white-space:pre-wrap;color:#c7d3de;counter-reset:step;counter-increment:step 0;position:relative;font-family:JetBrainsMono,monospace;font-variant-ligatures:normal;font-size:.9rem;padding:.75rem 1rem}.redactor__article .ProseMirror pre code{font-family:JetBrainsMono,monospace;font-variant-ligatures:normal;font-size:.9rem;line-height:1.5rem;white-space:pre;margin-left:2.5rem;display:block;overflow-x:auto;scrollbar-color:#516363}.redactor__article .ProseMirror pre code::-webkit-scrollbar{height:.4rem}.redactor__article .ProseMirror pre code::-webkit-scrollbar-thumb{cursor:pointer;background:#516363;border-radius:.3rem}.redactor__article .ProseMirror pre code::-webkit-scrollbar-thumb:hover{background:#465555}.redactor__article .ProseMirror pre ::selection{background:#dbdbdb2d}.redactor__article .ProseMirror pre div.l:before{color:#516363;position:absolute;left:15px;content:counter(step);counter-increment:step}.redactor__article .ProseMirror table{font-family:Georgia,Times,Times New Roman,serif;font-weight:400;font-style:normal;font-size:18px;line-height:30px;color:rgba(12,10,10,.8);border-collapse:collapse;margin:0;overflow:hidden;table-layout:fixed;width:100%;margin:1rem 0}.redactor__article .ProseMirror table td,.redactor__article .ProseMirror table th{border:2px solid #ced4da;box-sizing:border-box;min-width:1em;padding:3px 5px;position:relative;vertical-align:top}.redactor__article .ProseMirror table td>*,.redactor__article .ProseMirror table th>*{margin-bottom:0}.redactor__article .ProseMirror table th{background-color:#f1f3f5;font-weight:bold;text-align:left}.redactor__article .ProseMirror table .selectedCell:after{background:rgba(200,200,255,.4);content:"";left:0;right:0;top:0;bottom:0;pointer-events:none;position:absolute;z-index:2}.redactor__article .ProseMirror table .column-resize-handle{background-color:#adf;bottom:-2px;position:absolute;right:-2px;pointer-events:none;top:0;width:4px}.redactor__article .ProseMirror table p{margin:0}.redactor__article .ProseMirror .hljs-codeblock{position:relative;display:block;margin:0;padding:0;white-space:nowrap;font-family:JetBrainsMono,monospace;font-variant-ligatures:normal;font-size:.8rem}.redactor__article .ProseMirror .hljs-codeblock__select{position:absolute;right:.5rem;top:.5rem;opacity:.5}.redactor__article .ProseMirror .hljs-codeblock pre{display:block}@media(max-width: 960px){.redactor__article .ProseMirror *[data-label]:after{display:none}}.is-active{background:#000;color:#fff}.tableWrapper{overflow-x:auto}.resize-cursor{cursor:ew-resize;cursor:col-resize}'},6599:t=>{t.exports=":root{--light-grey: #e1e1e1;--dark-grey: #333;--primary-color: #33c3f0;--secondary-color: #555555;--border-color: #bbb;--link-color: #1eaedb;--font-color: #222;--color-contrast-low: hsl(240, 1%, 83%);--color-contrast-medium: hsl(240, 1%, 48%);--color-contrast-high: hsl(240, 4%, 20%);--font-family: Inter, sans-serif;--ipad-min-width: 1366}:root{--light-grey: #e1e1e1;--dark-grey: #333;--primary-color: #33c3f0;--secondary-color: #555555;--border-color: #bbb;--link-color: #1eaedb;--font-color: #222;--color-contrast-low: hsl(240, 1%, 83%);--color-contrast-medium: hsl(240, 1%, 48%);--color-contrast-high: hsl(240, 4%, 20%);--font-family: Inter, sans-serif;--ipad-min-width: 1366}.btn{cursor:pointer}.btn.btn_icon{background:transparent;border:none}.btn.btn_icon .icon-tabler{transition:.2s;stroke:#bbb;stroke:var(--border-color);color:#bbb;color:var(--border-color)}.btn.btn_icon .icon-tabler:hover{stroke:#333;stroke:var(--dark-grey)}:host{--width: 300px;--toggle-size: 38px}:host .sidebar{position:fixed;border-right:solid 1px #e1e1e1;width:0;visibility:hidden;height:100%;background:#fff;z-index:1;transition:all .35s}@media(min-width: 1367px){:host .sidebar{position:relative;border-right:none}}:host .sidebar .sidebar-content{height:100%;overflow-y:scroll;transition:all .2s;transform:translateX(calc(300px * -1));transform:translateX(calc(var(--width) * -1))}@media(min-width: 1367px){:host .sidebar .sidebar-content{overflow:initial}}:host .sidebar .sidebar-toggle{position:absolute;right:calc(38px*-1 - 10px);right:calc(var(--toggle-size)*-1 - 10px);padding-top:8px;visibility:visible}:host .sidebar .sidebar-toggle :checked{right:0}:host .sidebar-checkbox{display:none}:host .sidebar-checkbox:checked+.sidebar{width:300px;width:var(--width);visibility:visible}:host .sidebar-checkbox:checked+.sidebar .sidebar-content{transform:translateX(0)}"},7135:t=>{t.exports='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:root{--light-grey: #e1e1e1;--dark-grey: #333;--primary-color: #33c3f0;--secondary-color: #555555;--border-color: #bbb;--link-color: #1eaedb;--font-color: #222;--color-contrast-low: hsl(240, 1%, 83%);--color-contrast-medium: hsl(240, 1%, 48%);--color-contrast-high: hsl(240, 4%, 20%);--font-family: Inter, sans-serif;--ipad-min-width: 1366}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:2rem;font-weight:300}h1{font-size:4rem;line-height:1.2;letter-spacing:-0.1rem}h2{font-size:3.6rem;line-height:1.25;letter-spacing:-0.1rem}h3{font-size:3rem;line-height:1.3;letter-spacing:-0.1rem}h4{font-size:2.4rem;line-height:1.35;letter-spacing:-0.08rem}h5{font-size:1.8rem;line-height:1.5;letter-spacing:-0.05rem}h6{font-size:1.5rem;line-height:1.6;letter-spacing:0}@media(min-width: 550px){h1{font-size:5rem}h2{font-size:4.2rem}h3{font-size:3.6rem}h4{font-size:3rem}h5{font-size:2.4rem}h6{font-size:1.5rem}}p{margin-top:0}.toc-panel{--toc-border-width: 1px;--text-unit: 1em;--text-scale-ratio: 1.2;--text-xs: calc((1em / 1.2) / 1.2);--text-xs: calc((var(--text-unit) / var(--text-scale-ratio)) / var(--text-scale-ratio));--text-sm: calc(calc((1em / 1.2) / 1.2) * 1.2);--text-sm: calc(var(--text-xs) * var(--text-scale-ratio));box-shadow:inset 1px 0 0 hsl(240, 1%, 83%);box-shadow:inset var(--toc-border-width) 0 0 var(--color-contrast-low);font-family:"Inter",sans-serif;top:1.25rem;max-height:calc(100vh - 1.25rem);overflow:visible;padding-left:2.5rem}.toc-panel ol,.toc-panel ul{list-style:none;margin:0;padding:0;border:0}.toc-panel .toc-panel__list{padding-bottom:1rem;position:relative}.toc-panel .toc-panel__list .toc-panel__list .toc-panel__header{padding-left:2.5rem}.toc-panel .toc-panel__title{padding:.25rem 1.25rem;text-transform:uppercase;letter-spacing:.1em;font-size:calc(calc((1em / 1.2) / 1.2) * 1.2);font-size:var(--text-sm)}.toc-panel .toc-panel__header{padding:.25rem 1.25rem;position:relative;display:inline-flex;color:hsl(240, 1%, 48%);color:var(--color-contrast-medium);text-decoration:none;overflow:hidden;text-overflow:ellipsis}.toc-panel .toc-panel__header::before{content:"";width:1px;width:var(--toc-border-width);height:100%;position:absolute;left:0;top:0}.toc-panel .toc-panel__header:hover{color:hsl(240, 4%, 20%);color:var(--color-contrast-high)}.toc-panel .toc-panel__header_selected{color:#2a6df4}.toc-panel .toc-panel__header_selected::before{background-color:#2a6df4}.toc-panel .toc-panel__page-numb{width:2rem;text-align:right;padding-top:.25rem;padding-right:.5rem;flex-shrink:0;white-space:nowrap}.toc-panel .toc-panel__item{display:flex;margin-left:-2.5rem;color:hsl(240, 1%, 48%);color:var(--color-contrast-medium)}.toc-panel .toc-panel__item:hover{color:hsl(240, 4%, 20%);color:var(--color-contrast-high)}'}}]);