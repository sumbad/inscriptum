"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[54],{2114:(t,e,a)=>{a.d(e,{S:()=>Z});var n,d,r,i,s,o,u,c,l,p,_,g,m,f,h,b,y,$=a(8687),A=a(6608),v=a(3135),k=a(2900);!function(t){t.AuthorAuth0UserIdKey="author_auth0UserId_key",t.AuthorPkey="author_pkey"}(n||(n={})),function(t){t.Auth0Id="auth0_id",t.CreatedAt="created_at",t.Email="email",t.Id="id",t.LastSeen="last_seen",t.Name="name"}(d||(d={})),function(t){t.Auth0Id="auth0_id",t.CreatedAt="created_at",t.Email="email",t.Id="id",t.LastSeen="last_seen",t.Name="name"}(r||(r={})),function(t){t.DraftPkey="draft_pkey"}(i||(i={})),function(t){t.AuthorId="author_id",t.CreatedAt="created_at",t.EndedAt="ended_at",t.Id="id",t.TableOfContents="table_of_contents",t.UpdatedAt="updated_at"}(s||(s={})),function(t){t.AuthorId="author_id",t.CreatedAt="created_at",t.EndedAt="ended_at",t.Id="id",t.TableOfContents="table_of_contents",t.UpdatedAt="updated_at"}(o||(o={})),function(t){t.MarginPkey="margin_pkey"}(u||(u={})),function(t){t.CreatedAt="created_at",t.EndedAt="ended_at",t.Id="id",t.Img="img",t.Name="name",t.Options="options",t.PageId="page_id",t.UpdatedAt="updated_at"}(c||(c={})),function(t){t.CreatedAt="created_at",t.EndedAt="ended_at",t.Id="id",t.Img="img",t.Name="name",t.Options="options",t.PageId="page_id",t.UpdatedAt="updated_at"}(l||(l={})),function(t){t.NotePkey="note_pkey",t.UqNoteDraftIdEndedAt="uq_note_draft_id_ended_at"}(p||(p={})),function(t){t.AuthorId="author_id",t.CreatedAt="created_at",t.DraftId="draft_id",t.EndedAt="ended_at",t.Id="id",t.Name="name",t.Preview="preview",t.StaticLink="static_link",t.UpdatedAt="updated_at"}(_||(_={})),function(t){t.AuthorId="author_id",t.CreatedAt="created_at",t.DraftId="draft_id",t.EndedAt="ended_at",t.Id="id",t.Name="name",t.Preview="preview",t.StaticLink="static_link",t.UpdatedAt="updated_at"}(g||(g={})),function(t){t.LastSeen="last_seen",t.Name="name"}(m||(m={})),function(t){t.Asc="asc",t.AscNullsFirst="asc_nulls_first",t.AscNullsLast="asc_nulls_last",t.Desc="desc",t.DescNullsFirst="desc_nulls_first",t.DescNullsLast="desc_nulls_last"}(f||(f={})),function(t){t.PagePkey="page_pkey"}(h||(h={})),function(t){t.Content="content",t.CreatedAt="created_at",t.DraftId="draft_id",t.EndedAt="ended_at",t.Id="id",t.Order="order",t.UpdatedAt="updated_at"}(b||(b={})),function(t){t.Content="content",t.CreatedAt="created_at",t.DraftId="draft_id",t.EndedAt="ended_at",t.Id="id",t.Order="order",t.UpdatedAt="updated_at"}(y||(y={}));const w=k.ZP`
    query findAuthorByAuth0($auth0_id: String!) {
  author(where: {auth0_id: {_eq: $auth0_id}}) {
    id
    email
    name
    last_seen
    created_at
  }
}
    `,j=k.ZP`
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
    `,I=k.ZP`
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
    `,C=k.ZP`
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
    `,L=k.ZP`
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
    `,T=k.ZP`
    mutation saveMargin($id: uuid!, $updated_at: timestamptz!, $options: jsonb!, $img: bytea!, $name: String) {
  update_margin_by_pk(
    pk_columns: {id: $id}
    _set: {updated_at: $updated_at, options: $options, img: $img, name: $name}
  ) {
    updated_at
    id
  }
}
    `,q=k.ZP`
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
    `,x=k.ZP`
    mutation createNode($author_id: uuid!, $created_at: timestamptz, $draft_id: uuid!, $ended_at: timestamptz, $name: String!, $preview: jsonb, $static_link: String) {
  insert_note_one(
    object: {author_id: $author_id, created_at: $created_at, draft_id: $draft_id, ended_at: $ended_at, name: $name, preview: $preview, static_link: $static_link}
  ) {
    id
    updated_at
    created_at
  }
}
    `,D=k.ZP`
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
    `,B=(t,e)=>t();const H="https://inscriptum-hasura.herokuapp.com/v1/graphql";let z={credentials:"include",mode:"cors",cache:"no-cache",method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}},U=new $.GraphQLClient(H,z);A.f.subscribe((t=>{var e,a,n;null==(null===(e=t.data)||void 0===e?void 0:e.accessToken)||t.isLoading||(z=v.v.isAuthDisabled?Object.assign(Object.assign({},z),{headers:Object.assign(Object.assign({},z.headers),{"x-hasura-user-id":String(null===(a=t.data)||void 0===a?void 0:a.userInfo.uid)})}):Object.assign(Object.assign({},z),{headers:Object.assign(Object.assign({},z.headers),{Authorization:`Bearer ${null===(n=t.data)||void 0===n?void 0:n.accessToken}`})}),U=new $.GraphQLClient(H,z))}));const Z=()=>function(t,e=B){return{findAuthorByAuth0:(a,n)=>e((e=>t.request(w,a,Object.assign(Object.assign({},n),e))),"findAuthorByAuth0"),getAllDrafts:(a,n)=>e((e=>t.request(j,a,Object.assign(Object.assign({},n),e))),"getAllDrafts"),getDraftById:(a,n)=>e((e=>t.request(O,a,Object.assign(Object.assign({},n),e))),"getDraftById"),updateDraftTOC:(a,n)=>e((e=>t.request(I,a,Object.assign(Object.assign({},n),e))),"updateDraftTOC"),createNewDraft:(a,n)=>e((e=>t.request(C,a,Object.assign(Object.assign({},n),e))),"createNewDraft"),deleteDraftById:(a,n)=>e((e=>t.request(P,a,Object.assign(Object.assign({},n),e))),"deleteDraftById"),getMarginById:(a,n)=>e((e=>t.request(L,a,Object.assign(Object.assign({},n),e))),"getMarginById"),createMargin:(a,n)=>e((e=>t.request(N,a,Object.assign(Object.assign({},n),e))),"createMargin"),saveMargin:(a,n)=>e((e=>t.request(T,a,Object.assign(Object.assign({},n),e))),"saveMargin"),getAllNotes:(a,n)=>e((e=>t.request(q,a,Object.assign(Object.assign({},n),e))),"getAllNotes"),createNode:(a,n)=>e((e=>t.request(x,a,Object.assign(Object.assign({},n),e))),"createNode"),updateNode:(a,n)=>e((e=>t.request(D,a,Object.assign(Object.assign({},n),e))),"updateNode"),updatePageById:(a,n)=>e((e=>t.request(M,a,Object.assign(Object.assign({},n),e))),"updatePageById"),addPageToDraft:(a,n)=>e((e=>t.request(S,a,Object.assign(Object.assign({},n),e))),"addPageToDraft"),deletePage:(a,n)=>e((e=>t.request(E,a,Object.assign(Object.assign({},n),e))),"deletePage")}}(U)},7296:(t,e,a)=>{a.d(e,{z:()=>l});var n=a(1640),d=a(7165),r=a(5819),i=a(3435),s=a(669),o=a(9491),u=a(4938);const c=(0,d.NG)((function*(){const t=(0,o.V)(),e=(0,u.k$)(),d=`url(#${e})`;for(requestAnimationFrame((()=>{(0,i.A_)(a(65),t.value)}));;)yield(0,s.$)(n.dy`<div .ref=${(0,o.i)(t)}>
        <div class="um-spinner-round">
          ${n.YP`
            <svg class="circular" viewBox="25 25 50 50">
              <defs>
                <linearGradient x1="100%" y1="10%" x2="35%" y2="100%" id=${e}>
                  <stop class="um-spinner-round__linear-gradient-stop" offset="0%"></stop>
                  <stop class="um-spinner-round__linear-gradient-stop" stop-opacity="0.001" offset="100%"></stop>
                </linearGradient>
              </defs>
              <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="1" stroke=${d} stroke-miterlimit="10" />
            </svg>
        `}
        </div>
      </div>`,this)}))(),l=(0,d.EG)({props:{loading:d.p.opt("loading")},mapper:function(t,e){"loading"===t&&(e="string"==typeof e||Boolean(e));return r.t.apply(this,[t,e])}})((function*(t){const e=this.attachShadow({mode:"open"});let d=t.loading,r=!0;for((0,i.A_)(a(235),e);;)d!==t.loading&&(d=t.loading,d?r=!0:setTimeout((()=>{r=!1,this.next()}),600)),t=yield(0,n.sY)(n.dy`<div class="um-preloader">
        ${r?n.dy`<div class="um-preloader__loader um-preloader__loader_fixed" style=${i.iv`
              opacity: ${d?1:0};
            `}>
            ${c({})}
          </div>`:""}
        <slot></slot>
      </div>`,e)}))},1760:(t,e,a)=>{a.d(e,{j7:()=>s,Bc:()=>o});var n=a(6444);var d=a(8638),r=function(t,e,a,n){return new(a||(a=Promise))((function(d,r){function i(t){try{o(n.next(t))}catch(t){r(t)}}function s(t){try{o(n.throw(t))}catch(t){r(t)}}function o(t){var e;t.done?d(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(i,s)}o((n=n.apply(t,e||[])).next())}))};const i=/!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/,s="figure",o=n.NB.create({name:s,draggable:!0,defining:!0,selectable:!0,content:()=>"text*",addOptions:()=>({inline:!1,HTMLAttributes:{}}),inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},addAttributes:()=>({src:{default:null},alt:{default:null},title:{default:null}}),parseHTML:()=>[{tag:"figure",contentElement:"figcaption",getAttrs:t=>{const e=t.querySelector("img");return{src:null==e?void 0:e.getAttribute("src"),alt:null==e?void 0:e.getAttribute("alt"),title:null==e?void 0:e.getAttribute("title")}}},{tag:"img[src]",preserveWhitespace:!0,getContent:(t,e)=>d.HY.from(e.text(t.alt.length>0?t.alt:" ")),getAttrs:t=>({src:t.getAttribute("src")})}],renderHTML({HTMLAttributes:t}){return["figure",["img",(0,n.P1)(this.options.HTMLAttributes,t)],["figcaption",0]]},addCommands(){return{setFigure:t=>({commands:e})=>e.insertContent({type:this.name,attrs:t})}},addInputRules(){return[(0,n.x2)({find:i,type:this.type,getAttributes:t=>{const[,e,a,n]=t;return{src:a,alt:e,title:n}}})]},addNodeView(){return({node:t,HTMLAttributes:e,getPos:a,editor:n})=>{const d=document.createElement("figure");d.setAttribute("draggable","true");const i=document.createElement("div"),s=document.createElement("figcaption");i.classList.add("figure_wrapper"),i.contentEditable="false",s.classList.add("editable_text"),s.classList.add("empty"),s.setAttribute("data-placeholder","Caption (optional)");const o=t.content.firstChild;(null==o?void 0:o.isText)&&null!=o.text&&o.text.trim().length>0&&s.classList.remove("empty"),d.appendChild(i),d.appendChild(s);const c=function(t,e){const a=document.createElement("img");return a.setAttribute("src",u(t)),e.appendChild(a),a}(t.attrs.src,i);t.attrs.alt&&c.setAttribute("alt",t.attrs.alt),t.attrs.title&&c.setAttribute("title",t.attrs.title);const l=function(t){const e=t.match(/^data:(image\/gif|image\/jpe?g|image\/png|video\/mp4);base64,(.*)$/);if(null!=e)return{type:e[1],base64_data:e[2]}}(t.attrs.src);if(null!=l){const t=document.createElement("div"),e=document.createElement("div");t.classList.add("file_progress"),e.classList.add("file_progress_bar"),i.classList.add("loading"),t.appendChild(e),i.appendChild(t),function(t,e,a){!function(t,e,a,n){r(this,void 0,void 0,(function*(){try{const n=yield function(t,e){return new Promise(((a,n)=>{var d=new XMLHttpRequest,r=new FormData;d.open("POST","https://api.cloudinary.com/v1_1/inscriptum/upload",!0),d.setRequestHeader("X-Requested-With","XMLHttpRequest"),d.upload.addEventListener("progress",(function(t){t.lengthComputable&&e&&e(t.loaded,t.total)})),e&&e(0,1),r.append("upload_preset","cz5pibn5"),r.append("tags","browser_upload"),r.append("file",t),d.send(r),d.onreadystatechange=t=>{if(4==d.readyState&&200==d.status){var e=JSON.parse(d.responseText);console.log(1111,e),e.src=e.secure_url,a(e)}},d.onerror=function(){n(new Error("Network Error"))}}))}(function(t){for(var e=atob(t.base64_data),a=[],n=0;n<e.length;n++)a.push(e.charCodeAt(n));return new Blob([new Uint8Array(a)],{type:t.type})}(t),e);a&&a(n)}catch(t){n&&n(t)}}))}(t,((t,e)=>{let n=0;e&&t&&(n=100*t/e,n=Math.min(100,n)),a.style.width=n+"%"}),(t=>{if(t){const a=u(t.src),n=e.querySelector("img");null!=n&&(n.src=a),e.classList.remove("loading")}}),(t=>function(t){let e=document.querySelector("#_error_msg");e.textContent=t,clearTimeout(e.to),e.classList.add("shown"),e.to=setTimeout((()=>{e.classList.remove("shown")}),3e3)}(t)))}(l,i,e)}return c.onclick=()=>{"function"==typeof a&&this.editor.commands.setNodeSelection(a())},{dom:d,contentDOM:s,ignoreMutation:e=>"attributes"===e.type&&null!=e.attributeName&&(["src","title","alt"].includes(e.attributeName)&&(t.attrs[e.attributeName]=e.target.getAttribute(e.attributeName)),!0),update:t=>t.type===this.type&&(s.classList.toggle("empty",0===t.content.size),!0)}}}});function u(t){return function(t,e){const a=document.createElement("a");a.href=t;const n=a.href.slice(0,a.href.indexOf(":"));return e.indexOf(n)>-1}(t,["http","https","data"])?t:"//:0"}},9586:(t,e,a)=>{a.d(e,{W:()=>d,V:()=>r});var n=a(6444);const d="topicSummary",r=n.NB.create({name:d,group:"topicDoc",content:"inline*",addAttributes:()=>({"data-placeholder":{default:"Summary of the text"},"data-label":{default:"Summary"},role:{default:"definition"}}),parseHTML:()=>[{tag:"p"}],renderHTML({HTMLAttributes:t}){return["p",(0,n.P1)(this.options.HTMLAttributes,t),0]}})},9059:(t,e,a)=>{a.d(e,{H:()=>d,l:()=>r});var n=a(6444);const d="topicTitle",r=n.NB.create({name:d,content:"inline*",group:"topicDoc",defining:!0,selectable:!0,addAttributes:()=>({"data-placeholder":{default:"Title"},"data-label":{default:"Title"}}),parseHTML:()=>[{tag:"h1"}],renderHTML({HTMLAttributes:t}){return["h1",(0,n.P1)(this.options.HTMLAttributes,t),0]}})},4938:(t,e,a)=>{a.d(e,{WV:()=>i,Ro:()=>o,k$:()=>u});var n=a(1760),d=a(9586),r=a(9059);function i(t){var e,a;let i="<noname>",o="...",u="";if(null!=t){const c=s(t,r.H);null!=(null==c?void 0:c.content)&&(i=null!==(e=c.content[0].text)&&void 0!==e?e:i);const l=s(t,d.W);if(null!=(null==l?void 0:l.content)){let t="";l.content.forEach((e=>{null!=e.text&&(t+=e.text)})),o=t.length>0?t:o}const p=s(t,n.j7);null!=(null==p?void 0:p.attrs)&&(u=null!==(a=p.attrs.src)&&void 0!==a?a:u)}return o=o.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/`/g,"&DiacriticalGrave;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),{title:i,description:o,image:u}}function s(t,e){if(t.type===e)return t;if(Array.isArray(t.content))for(const a of t.content){const t=s(a,e);if(null!=t)return t}return null}function o(t,e=!1){const a="щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),n="shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g);for(let d=0;d<a.length;d++)t=(t=t.split(e?n[d]:a[d]).join(e?a[d]:n[d])).split(e?n[d].toUpperCase():a[d].toUpperCase()).join(e?a[d].toUpperCase():n[d].toUpperCase());return t}function u(){const t=window.crypto||window.msCrypto;return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},669:(t,e,a)=>{a.d(e,{$:()=>o});var n=a(1640),d=a(7167),r=a(3255);class i extends d.s{render(t,e){return e.current=this,t}}const s=(0,r.XM)(i);function o(t,e){if(!(e.current instanceof HTMLElement))return e.current instanceof i&&e.current.setValue(t),s(t,e);(0,n.sY)(t,e.current)}},65:t=>{t.exports=':host{--um-spinner-round: #555}.um-spinner-round{position:relative;margin:0 auto;width:100px}.um-spinner-round:before{content:"";display:block;padding-top:100%}.um-spinner-round__linear-gradient-stop{stop-color:#a11919;stop-color:var(--um-spinner-round, #a11919)}.um-spinner-round .circular{animation:um-spinner-round__rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.um-spinner-round .path{stroke-dasharray:1,50,50;stroke-dashoffset:0;stroke-linecap:round}@keyframes um-spinner-round__rotate{100%{transform:rotate(360deg)}}'},235:t=>{t.exports=".um-preloader__loader{z-index:3;top:0;left:0;width:100%;position:absolute;transition:opacity .5s ease,height .2s ease;background-color:rgba(255,255,255,.7);background-repeat:no-repeat;background-position:50% 50%;display:flex;justify-content:center;align-items:center}.um-preloader__loader_fixed{height:100vh;position:fixed}"}}]);