"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[620],{2114:(t,e,a)=>{a.d(e,{S:()=>Z});var n,i,d,r,s,o,u,c,l,p,_,g,m,f,h,b,y,$=a(8687),A=a(4890),v=a(3135),k=a(2900);!function(t){t.AuthorAuth0UserIdKey="author_auth0UserId_key",t.AuthorPkey="author_pkey"}(n||(n={})),function(t){t.Auth0Id="auth0_id",t.CreatedAt="created_at",t.Email="email",t.Id="id",t.LastSeen="last_seen",t.Name="name"}(i||(i={})),function(t){t.Auth0Id="auth0_id",t.CreatedAt="created_at",t.Email="email",t.Id="id",t.LastSeen="last_seen",t.Name="name"}(d||(d={})),function(t){t.DraftPkey="draft_pkey"}(r||(r={})),function(t){t.AuthorId="author_id",t.CreatedAt="created_at",t.EndedAt="ended_at",t.Id="id",t.TableOfContents="table_of_contents",t.UpdatedAt="updated_at"}(s||(s={})),function(t){t.AuthorId="author_id",t.CreatedAt="created_at",t.EndedAt="ended_at",t.Id="id",t.TableOfContents="table_of_contents",t.UpdatedAt="updated_at"}(o||(o={})),function(t){t.MarginPkey="margin_pkey"}(u||(u={})),function(t){t.CreatedAt="created_at",t.EndedAt="ended_at",t.Id="id",t.Img="img",t.Name="name",t.Options="options",t.PageId="page_id",t.UpdatedAt="updated_at"}(c||(c={})),function(t){t.CreatedAt="created_at",t.EndedAt="ended_at",t.Id="id",t.Img="img",t.Name="name",t.Options="options",t.PageId="page_id",t.UpdatedAt="updated_at"}(l||(l={})),function(t){t.NotePkey="note_pkey",t.UqNoteDraftIdEndedAt="uq_note_draft_id_ended_at"}(p||(p={})),function(t){t.AuthorId="author_id",t.CreatedAt="created_at",t.DraftId="draft_id",t.EndedAt="ended_at",t.Id="id",t.Name="name",t.Preview="preview",t.StaticLink="static_link",t.UpdatedAt="updated_at"}(_||(_={})),function(t){t.AuthorId="author_id",t.CreatedAt="created_at",t.DraftId="draft_id",t.EndedAt="ended_at",t.Id="id",t.Name="name",t.Preview="preview",t.StaticLink="static_link",t.UpdatedAt="updated_at"}(g||(g={})),function(t){t.LastSeen="last_seen",t.Name="name"}(m||(m={})),function(t){t.Asc="asc",t.AscNullsFirst="asc_nulls_first",t.AscNullsLast="asc_nulls_last",t.Desc="desc",t.DescNullsFirst="desc_nulls_first",t.DescNullsLast="desc_nulls_last"}(f||(f={})),function(t){t.PagePkey="page_pkey"}(h||(h={})),function(t){t.Content="content",t.CreatedAt="created_at",t.DraftId="draft_id",t.EndedAt="ended_at",t.Id="id",t.Order="order",t.UpdatedAt="updated_at"}(b||(b={})),function(t){t.Content="content",t.CreatedAt="created_at",t.DraftId="draft_id",t.EndedAt="ended_at",t.Id="id",t.Order="order",t.UpdatedAt="updated_at"}(y||(y={}));const j=k.ZP`
    query findAuthorByAuth0($auth0_id: String!) {
  author(where: {auth0_id: {_eq: $auth0_id}}) {
    id
    email
    name
    last_seen
    created_at
  }
}
    `,w=k.ZP`
    query getAllDrafts {
  drafts: draft(order_by: {updated_at: desc}, where: {ended_at: {_is_null: true}}) {
    id
    pages(order_by: {created_at: asc}, where: {ended_at: {_is_null: true}}) {
      content
    }
    created_at
    updated_at
    author {
      id
      email
      name
    }
    notes(order_by: {created_at: asc}, where: {ended_at: {_is_null: true}}) {
      static_link
    }
  }
}
    `,O=k.ZP`
    query getDraftById($id: uuid!) {
  draft: draft_by_pk(id: $id) {
    id
    created_at
    updated_at
    table_of_contents
    notes(order_by: {created_at: asc}, where: {ended_at: {_is_null: true}}) {
      id
    }
    pages(order_by: {created_at: asc}, where: {ended_at: {_is_null: true}}) {
      id
      content
      order
      margins(order_by: {created_at: asc}, where: {ended_at: {_is_null: true}}) {
        id
        name
      }
    }
  }
}
    `,C=k.ZP`
    mutation updateDraftTOC($id: uuid!, $table_of_contents: jsonb!, $updated_at: timestamptz!) {
  update_draft_by_pk(
    pk_columns: {id: $id}
    _set: {table_of_contents: $table_of_contents, updated_at: $updated_at}
  ) {
    table_of_contents
    updated_at
    id
  }
}
    `,I=k.ZP`
    mutation createNewDraft($author_id: uuid, $content: jsonb) {
  insert_draft_one(
    object: {author_id: $author_id, pages: {data: {content: $content}}}
  ) {
    id
    pages {
      id
      content
    }
  }
}
    `,P=k.ZP`
    mutation deleteDraftById($id: uuid!, $ended_at: timestamptz) {
  update_draft_by_pk(pk_columns: {id: $id}, _set: {ended_at: $ended_at}) {
    id
  }
}
    `,q=k.ZP`
    query getMarginById($id: uuid!) {
  margin: margin_by_pk(id: $id) {
    id
    pageId: page_id
    img
    imgBase64
    options
  }
}
    `,N=k.ZP`
    mutation createMargin($page_id: uuid!, $created_at: timestamptz!) {
  insert_margin_one(object: {page_id: $page_id, created_at: $created_at}) {
    id
  }
}
    `,L=k.ZP`
    mutation saveMargin($id: uuid!, $updated_at: timestamptz!, $options: jsonb!, $img: bytea!, $name: String) {
  update_margin_by_pk(
    pk_columns: {id: $id}
    _set: {updated_at: $updated_at, options: $options, img: $img, name: $name}
  ) {
    updated_at
    id
  }
}
    `,D=k.ZP`
    query getAllNotes {
  notes: note(order_by: {created_at: desc}, where: {ended_at: {_is_null: true}}) {
    id
    name
    preview
    draft_id
    static_link
    updated_at
    created_at
    author {
      id
      name
      email
    }
  }
}
    `,T=k.ZP`
    mutation createNode($author_id: uuid!, $created_at: timestamptz, $draft_id: uuid!, $ended_at: timestamptz, $name: String!, $preview: jsonb, $static_link: String) {
  insert_note_one(
    object: {author_id: $author_id, created_at: $created_at, draft_id: $draft_id, ended_at: $ended_at, name: $name, preview: $preview, static_link: $static_link}
  ) {
    id
    updated_at
    created_at
  }
}
    `,x=k.ZP`
    mutation updateNode($id: uuid!, $ended_at: timestamptz, $name: String, $preview: jsonb, $static_link: String, $updated_at: timestamptz!) {
  update_note_by_pk(
    pk_columns: {id: $id}
    _set: {ended_at: $ended_at, name: $name, preview: $preview, static_link: $static_link, updated_at: $updated_at}
  ) {
    id
    updated_at
    created_at
  }
}
    `,M=k.ZP`
    mutation updatePageById($id: uuid!, $content: jsonb!, $updated_at: timestamptz!) {
  update_page_by_pk(
    pk_columns: {id: $id}
    _set: {content: $content, updated_at: $updated_at}
  ) {
    id
  }
}
    `,S=k.ZP`
    mutation addPageToDraft($created_at: timestamptz!, $draft_id: uuid!, $order: Int!) {
  update_page(
    where: {draft_id: {_eq: $draft_id}, ended_at: {_is_null: true}, order: {_gte: $order}}
    _inc: {order: 1}
  ) {
    returning {
      id
      order
    }
  }
  insert_page_one(
    object: {created_at: $created_at, draft_id: $draft_id, order: $order}
  ) {
    id
    order
    content
    margins {
      id
    }
  }
}
    `,E=k.ZP`
    mutation deletePage($id: uuid!, $ended_at: timestamptz!, $draft_id: uuid!, $order: Int!) {
  update_page_by_pk(pk_columns: {id: $id}, _set: {ended_at: $ended_at}) {
    id
  }
  update_page(
    where: {draft_id: {_eq: $draft_id}, ended_at: {_is_null: true}, order: {_gte: $order}}
    _inc: {order: -1}
  ) {
    returning {
      id
      order
    }
  }
}
    `,B=(t,e,a)=>t();const H="https://inscriptum.gq/v1/graphql";let z={credentials:"include",mode:"cors",cache:"no-cache",method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}},U=new $.GraphQLClient(H,z);A.f.subscribe((t=>{var e,a,n;null==(null===(e=t.data)||void 0===e?void 0:e.accessToken)||t.isLoading||(z=v.v.isAuthDisabled?Object.assign(Object.assign({},z),{headers:Object.assign(Object.assign({},z.headers),{"x-hasura-user-id":String(null===(a=t.data)||void 0===a?void 0:a.userInfo.uid)})}):Object.assign(Object.assign({},z),{headers:Object.assign(Object.assign({},z.headers),{Authorization:`Bearer ${null===(n=t.data)||void 0===n?void 0:n.accessToken}`})}),U=new $.GraphQLClient(H,z))}));const Z=()=>function(t,e=B){return{findAuthorByAuth0:(a,n)=>e((e=>t.request(j,a,Object.assign(Object.assign({},n),e))),"findAuthorByAuth0","query"),getAllDrafts:(a,n)=>e((e=>t.request(w,a,Object.assign(Object.assign({},n),e))),"getAllDrafts","query"),getDraftById:(a,n)=>e((e=>t.request(O,a,Object.assign(Object.assign({},n),e))),"getDraftById","query"),updateDraftTOC:(a,n)=>e((e=>t.request(C,a,Object.assign(Object.assign({},n),e))),"updateDraftTOC","mutation"),createNewDraft:(a,n)=>e((e=>t.request(I,a,Object.assign(Object.assign({},n),e))),"createNewDraft","mutation"),deleteDraftById:(a,n)=>e((e=>t.request(P,a,Object.assign(Object.assign({},n),e))),"deleteDraftById","mutation"),getMarginById:(a,n)=>e((e=>t.request(q,a,Object.assign(Object.assign({},n),e))),"getMarginById","query"),createMargin:(a,n)=>e((e=>t.request(N,a,Object.assign(Object.assign({},n),e))),"createMargin","mutation"),saveMargin:(a,n)=>e((e=>t.request(L,a,Object.assign(Object.assign({},n),e))),"saveMargin","mutation"),getAllNotes:(a,n)=>e((e=>t.request(D,a,Object.assign(Object.assign({},n),e))),"getAllNotes","query"),createNode:(a,n)=>e((e=>t.request(T,a,Object.assign(Object.assign({},n),e))),"createNode","mutation"),updateNode:(a,n)=>e((e=>t.request(x,a,Object.assign(Object.assign({},n),e))),"updateNode","mutation"),updatePageById:(a,n)=>e((e=>t.request(M,a,Object.assign(Object.assign({},n),e))),"updatePageById","mutation"),addPageToDraft:(a,n)=>e((e=>t.request(S,a,Object.assign(Object.assign({},n),e))),"addPageToDraft","mutation"),deletePage:(a,n)=>e((e=>t.request(E,a,Object.assign(Object.assign({},n),e))),"deletePage","mutation")}}(U)},2384:(t,e,a)=>{a.d(e,{z:()=>l});var n=a(1640),i=a(9890),d=a(5819),r=a(3853),s=a(669),o=a(9491),u=a(4938);const c=(0,i.NG)((function*(){const t=(0,o.V)(),e=(0,u.k$)(),i=`url(#${e})`;for(;;)requestAnimationFrame((()=>{t.value&&(0,r.A_)(a(2221),t.value)})),yield(0,s.$)(n.dy`<div .ref=${(0,o.i)(t)}>
        <div class="um-spinner-round">
          ${n.YP`
            <svg class="circular" viewBox="25 25 50 50">
              <defs>
                <linearGradient x1="100%" y1="10%" x2="35%" y2="100%" id=${e}>
                  <stop class="um-spinner-round__linear-gradient-stop" offset="0%"></stop>
                  <stop class="um-spinner-round__linear-gradient-stop" stop-opacity="0.001" offset="100%"></stop>
                </linearGradient>
              </defs>
              <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="1" stroke=${i} stroke-miterlimit="10" />
            </svg>
        `}
        </div>
      </div>`,this)}))(),l=(0,i.EG)({props:{loading:i.p.opt("loading")},mapper:function(t,e){"loading"===t&&(e="string"==typeof e||Boolean(e));return d.t.apply(this,[t,e])}})((function*(t){const e=this.attachShadow({mode:"open"});let i=t.loading,d=!0;for((0,r.A_)(a(580),e);;)i!==t.loading&&(i=t.loading,i?d=!0:setTimeout((()=>{d=!1,this.next()}),600)),t=yield(0,n.sY)(n.dy`<div class="um-preloader">
        ${d?n.dy`<div class="um-preloader__loader um-preloader__loader_fixed" style=${r.iv`
              opacity: ${i?1:0};
            `}>
            ${c({})}
          </div>`:""}
        <slot></slot>
      </div>`,e)}))},3733:(t,e,a)=>{a.d(e,{j7:()=>s,Bc:()=>o});var n=a(9958);var i=a(7823),d=function(t,e,a,n){return new(a||(a=Promise))((function(i,d){function r(t){try{o(n.next(t))}catch(t){d(t)}}function s(t){try{o(n.throw(t))}catch(t){d(t)}}function o(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(r,s)}o((n=n.apply(t,e||[])).next())}))};const r=/!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/,s="figure",o=n.NB.create({name:s,draggable:!0,defining:!0,selectable:!0,content:"text*",marks:"",isolating:!0,addOptions:()=>({inline:!1,HTMLAttributes:{}}),inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},addAttributes:()=>({src:{default:null},alt:{default:null},title:{default:null},figure:{default:{style:null}}}),parseHTML:()=>[{tag:"figure",contentElement:"figcaption",getAttrs:t=>{const e=t.querySelector("img");return{src:null==e?void 0:e.getAttribute("src"),alt:null==e?void 0:e.getAttribute("alt"),title:null==e?void 0:e.getAttribute("title")}}},{tag:"img[src]",getContent(t,e){let a;return t.alt.length>0?(a=i.HY.from(e.text(t.alt)),a):i.HY.empty},getAttrs:t=>({src:t.getAttribute("src")})}],renderHTML({HTMLAttributes:t}){const{src:e,alt:a,title:i,figure:d}=t;return["figure",{style:d.style},["img",(0,n.P1)(this.options.HTMLAttributes,{src:e},{alt:a},{title:i})],["figcaption",0]]},addCommands(){return{setFigure:t=>({commands:e})=>e.insertContent({type:this.name,attrs:t}),changeFigure:t=>e=>{const{node:a}=e.state.selection,n=Object.assign(Object.assign({},a.attrs),{figure:{style:t.figureStyle}});return e.chain().updateAttributes(this.name,n).run()}}},addInputRules(){return[(0,n.x2)({find:r,type:this.type,getAttributes:t=>{const[,e,a,n]=t;return{src:a,alt:e,title:n}}})]},addNodeView(){return({node:t,getPos:e,editor:a})=>{const{view:n}=a;let{src:i,alt:r,title:s,figure:o}=t.attrs;const c=document.createElement("figure");c.setAttribute("draggable","true"),"string"==typeof o.style&&c.setAttribute("style",o.style);const l=document.createElement("div"),p=document.createElement("figcaption");l.classList.add("figure_wrapper"),l.contentEditable="false",p.classList.add("editable_text"),p.setAttribute("data-placeholder","Caption (optional)");t.content.firstChild;0===t.childCount&&p.classList.add("empty"),c.appendChild(l),c.appendChild(p);const _=function(t,e){const a=document.createElement("img");return a.setAttribute("src",u(t)),e.appendChild(a),a}(i,l);r&&_.setAttribute("alt",r),s&&_.setAttribute("title",s);const g=function(t){if("string"!=typeof t)return;const e=t.match(/^data:(image\/gif|image\/jpe?g|image\/png|video\/mp4);base64,(.*)$/);if(null!=e)return{type:e[1],base64_data:e[2]}}(i);if(null!=g){const t=document.createElement("div"),e=document.createElement("div");t.classList.add("file_progress"),e.classList.add("file_progress_bar"),l.classList.add("loading"),t.appendChild(e),l.appendChild(t),function(t,e,a){!function(t,e,a,n){d(this,void 0,void 0,(function*(){try{const n=yield function(t,e){return new Promise(((a,n)=>{var i=new XMLHttpRequest,d=new FormData;i.open("POST","https://api.cloudinary.com/v1_1/inscriptum/upload",!0),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.upload.addEventListener("progress",(function(t){t.lengthComputable&&e&&e(t.loaded,t.total)})),e&&e(0,1),d.append("upload_preset","cz5pibn5"),d.append("tags","browser_upload"),d.append("file",t),i.send(d),i.onreadystatechange=t=>{if(4==i.readyState&&200==i.status){var e=JSON.parse(i.responseText);console.log(1111,e),e.src=e.secure_url,a(e)}},i.onerror=function(){n(new Error("Network Error"))}}))}(function(t){for(var e=atob(t.base64_data),a=[],n=0;n<e.length;n++)a.push(e.charCodeAt(n));return new Blob([new Uint8Array(a)],{type:t.type})}(t),e);a&&a(n)}catch(t){n&&n(t)}}))}(t,((t,e)=>{let n=0;e&&t&&(n=100*t/e,n=Math.min(100,n)),a.style.width=n+"%"}),(t=>{if(t){const a=u(t.src),n=e.querySelector("img");null!=n&&(n.src=a),e.classList.remove("loading")}}),(t=>function(t){let e=document.querySelector("#_error_msg");e.textContent=t,clearTimeout(e.to),e.classList.add("shown"),e.to=setTimeout((()=>{e.classList.remove("shown")}),3e3)}(t)))}(g,l,e)}return _.onclick=()=>{"function"==typeof e&&this.editor.commands.setNodeSelection(e())},{dom:c,contentDOM:p,ignoreMutation:t=>"attributes"===t.type&&null!=t.attributeName&&(["src","title","alt"].includes(t.attributeName)&&"function"==typeof e&&n.dispatch(n.state.tr.setNodeMarkup(e(),void 0,{[t.attributeName]:t.target.getAttribute(t.attributeName)})),!0),update:t=>t.type===this.type&&(o=t.attrs.figure,"string"==typeof o.style&&c.setAttribute("style",o.style),p.classList.toggle("empty",0===t.content.size),!0)}}}});function u(t){return function(t,e){const a=document.createElement("a");a.href=t;const n=a.href.slice(0,a.href.indexOf(":"));return e.indexOf(n)>-1}(t,["http","https","data"])?t:"//:0"}},8690:(t,e,a)=>{a.d(e,{W:()=>i,V:()=>d});var n=a(9958);const i="topicSummary",d=n.NB.create({name:i,group:"topicDoc",content:"inline*",addAttributes:()=>({"data-placeholder":{default:"Summary of the text"},"data-label":{default:"Summary"},role:{default:"definition"}}),parseHTML:()=>[{tag:"p"}],renderHTML({HTMLAttributes:t}){return["p",(0,n.P1)(this.options.HTMLAttributes,t),0]}})},5810:(t,e,a)=>{a.d(e,{H:()=>i,l:()=>d});var n=a(9958);const i="topicTitle",d=n.NB.create({name:i,content:"inline*",group:"topicDoc",defining:!0,selectable:!0,addAttributes:()=>({"data-placeholder":{default:"Title"},"data-label":{default:"Title"}}),parseHTML:()=>[{tag:"h1"}],renderHTML({HTMLAttributes:t}){return["h1",(0,n.P1)(this.options.HTMLAttributes,t),0]}})},4938:(t,e,a)=>{a.d(e,{WV:()=>r,Ro:()=>o,k$:()=>u});var n=a(3733),i=a(8690),d=a(5810);function r(t){var e,a;let r="<noname>",o="...",u="";if(null!=t){const c=s(t,d.H);null!=(null==c?void 0:c.content)&&(r=null!==(e=c.content[0].text)&&void 0!==e?e:r);const l=s(t,i.W);if(null!=(null==l?void 0:l.content)){let t="";l.content.forEach((e=>{null!=e.text&&(t+=e.text)})),o=t.length>0?t:o}const p=s(t,n.j7);null!=(null==p?void 0:p.attrs)&&(u=null!==(a=p.attrs.src)&&void 0!==a?a:u)}return o=o.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/`/g,"&DiacriticalGrave;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),{title:r,description:o,image:u}}function s(t,e){if(t.type===e)return t;if(Array.isArray(t.content))for(const a of t.content){const t=s(a,e);if(null!=t)return t}return null}function o(t,e=!1){const a="щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),n="shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g);for(let i=0;i<a.length;i++)t=(t=t.split(e?n[i]:a[i]).join(e?a[i]:n[i])).split(e?n[i].toUpperCase():a[i].toUpperCase()).join(e?a[i].toUpperCase():n[i].toUpperCase());return t}function u(){const t=window.crypto||window.msCrypto;return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},2221:t=>{t.exports=':host{--um-spinner-round: #555}.um-spinner-round{position:relative;margin:0 auto;width:100px}.um-spinner-round:before{content:"";display:block;padding-top:100%}.um-spinner-round__linear-gradient-stop{stop-color:#a11919;stop-color:var(--um-spinner-round, #a11919)}.um-spinner-round .circular{animation:um-spinner-round__rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.um-spinner-round .path{stroke-dasharray:1,50,50;stroke-dashoffset:0;stroke-linecap:round}@keyframes um-spinner-round__rotate{100%{transform:rotate(360deg)}}'},580:t=>{t.exports=".um-preloader__loader{z-index:3;top:0;left:0;width:100%;position:absolute;transition:opacity .5s ease,height .2s ease;background-color:rgba(255,255,255,.7);background-repeat:no-repeat;background-position:50% 50%;display:flex;justify-content:center;align-items:center}.um-preloader__loader_fixed{height:100vh;position:fixed}"}}]);