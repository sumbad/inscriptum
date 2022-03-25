"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[479,864,880,432],{2114:(e,t,a)=>{a.d(t,{S:()=>G});var i,r,d,n,o,s,p,c,l,u,_,m,g,h,f,b,v,$=a(8687),x=a(6608),y=a(5196),k=a(3135),w=a(2900);!function(e){e.AuthorAuth0UserIdKey="author_auth0UserId_key",e.AuthorPkey="author_pkey"}(i||(i={})),function(e){e.Auth0Id="auth0_id",e.CreatedAt="created_at",e.Email="email",e.Id="id",e.LastSeen="last_seen",e.Name="name"}(r||(r={})),function(e){e.Auth0Id="auth0_id",e.CreatedAt="created_at",e.Email="email",e.Id="id",e.LastSeen="last_seen",e.Name="name"}(d||(d={})),function(e){e.DraftPkey="draft_pkey"}(n||(n={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.TableOfContents="table_of_contents",e.UpdatedAt="updated_at"}(o||(o={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.TableOfContents="table_of_contents",e.UpdatedAt="updated_at"}(s||(s={})),function(e){e.MarginPkey="margin_pkey"}(p||(p={})),function(e){e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.Img="img",e.Name="name",e.Options="options",e.PageId="page_id",e.UpdatedAt="updated_at"}(c||(c={})),function(e){e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.Img="img",e.Name="name",e.Options="options",e.PageId="page_id",e.UpdatedAt="updated_at"}(l||(l={})),function(e){e.NotePkey="note_pkey",e.UqNoteDraftIdEndedAt="uq_note_draft_id_ended_at"}(u||(u={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Name="name",e.Preview="preview",e.StaticLink="static_link",e.UpdatedAt="updated_at"}(_||(_={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Name="name",e.Preview="preview",e.StaticLink="static_link",e.UpdatedAt="updated_at"}(m||(m={})),function(e){e.LastSeen="last_seen",e.Name="name"}(g||(g={})),function(e){e.Asc="asc",e.AscNullsFirst="asc_nulls_first",e.AscNullsLast="asc_nulls_last",e.Desc="desc",e.DescNullsFirst="desc_nulls_first",e.DescNullsLast="desc_nulls_last"}(h||(h={})),function(e){e.PagePkey="page_pkey"}(f||(f={})),function(e){e.Content="content",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Order="order",e.UpdatedAt="updated_at"}(b||(b={})),function(e){e.Content="content",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Order="order",e.UpdatedAt="updated_at"}(v||(v={}));const A=w.ZP`
    query findAuthorByAuth0($auth0_id: String!) {
  author(where: {auth0_id: {_eq: $auth0_id}}) {
    id
    email
    name
    last_seen
    created_at
  }
}
    `,O=w.ZP`
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
    `,j=w.ZP`
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
    `,P=w.ZP`
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
    `,I=w.ZP`
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
    `,D=w.ZP`
    mutation deleteDraftById($id: uuid!, $ended_at: timestamptz) {
  update_draft_by_pk(pk_columns: {id: $id}, _set: {ended_at: $ended_at}) {
    id
  }
}
    `,C=w.ZP`
    query getMarginById($id: uuid!) {
  margin: margin_by_pk(id: $id) {
    id
    pageId: page_id
    img
    imgBase64
    options
  }
}
    `,q=w.ZP`
    mutation createMargin($page_id: uuid!, $created_at: timestamptz!) {
  insert_margin_one(object: {page_id: $page_id, created_at: $created_at}) {
    id
  }
}
    `,N=w.ZP`
    mutation saveMargin($id: uuid!, $updated_at: timestamptz!, $options: jsonb!, $img: bytea!, $name: String) {
  update_margin_by_pk(
    pk_columns: {id: $id}
    _set: {updated_at: $updated_at, options: $options, img: $img, name: $name}
  ) {
    updated_at
    id
  }
}
    `,z=w.ZP`
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
    `,B=w.ZP`
    mutation createNode($author_id: uuid!, $created_at: timestamptz, $draft_id: uuid!, $ended_at: timestamptz, $name: String!, $preview: jsonb, $static_link: String) {
  insert_note_one(
    object: {author_id: $author_id, created_at: $created_at, draft_id: $draft_id, ended_at: $ended_at, name: $name, preview: $preview, static_link: $static_link}
  ) {
    id
    updated_at
    created_at
  }
}
    `,E=w.ZP`
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
    `,S=w.ZP`
    mutation updatePageById($id: uuid!, $content: jsonb!, $updated_at: timestamptz!) {
  update_page_by_pk(
    pk_columns: {id: $id}
    _set: {content: $content, updated_at: $updated_at}
  ) {
    id
  }
}
    `,L=w.ZP`
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
    `,T=w.ZP`
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
    `,Z=(e,t)=>e();const U="https://inscriptum-hasura.herokuapp.com/v1/graphql";let M={credentials:"include",mode:"cors",cache:"no-cache",method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}},R=new $.GraphQLClient(U,M);x.f.pipe((0,y.P)((e=>{var t;return null!=(null===(t=e.data)||void 0===t?void 0:t.accessToken)&&!e.isLoading}))).subscribe((e=>{var t,a;console.log("API AUTH_ACTION.AUTH_DONE"),M=k.v.isAuthDisabled?Object.assign(Object.assign({},M),{headers:Object.assign(Object.assign({},M.headers),{"x-hasura-user-id":String(null===(t=e.data)||void 0===t?void 0:t.userInfo.uid)})}):Object.assign(Object.assign({},M),{headers:Object.assign(Object.assign({},M.headers),{Authorization:`Bearer ${null===(a=e.data)||void 0===a?void 0:a.accessToken}`})}),R=new $.GraphQLClient(U,M)}));const G=()=>function(e,t=Z){return{findAuthorByAuth0:(a,i)=>t((t=>e.request(A,a,Object.assign(Object.assign({},i),t))),"findAuthorByAuth0"),getAllDrafts:(a,i)=>t((t=>e.request(O,a,Object.assign(Object.assign({},i),t))),"getAllDrafts"),getDraftById:(a,i)=>t((t=>e.request(j,a,Object.assign(Object.assign({},i),t))),"getDraftById"),updateDraftTOC:(a,i)=>t((t=>e.request(P,a,Object.assign(Object.assign({},i),t))),"updateDraftTOC"),createNewDraft:(a,i)=>t((t=>e.request(I,a,Object.assign(Object.assign({},i),t))),"createNewDraft"),deleteDraftById:(a,i)=>t((t=>e.request(D,a,Object.assign(Object.assign({},i),t))),"deleteDraftById"),getMarginById:(a,i)=>t((t=>e.request(C,a,Object.assign(Object.assign({},i),t))),"getMarginById"),createMargin:(a,i)=>t((t=>e.request(q,a,Object.assign(Object.assign({},i),t))),"createMargin"),saveMargin:(a,i)=>t((t=>e.request(N,a,Object.assign(Object.assign({},i),t))),"saveMargin"),getAllNotes:(a,i)=>t((t=>e.request(z,a,Object.assign(Object.assign({},i),t))),"getAllNotes"),createNode:(a,i)=>t((t=>e.request(B,a,Object.assign(Object.assign({},i),t))),"createNode"),updateNode:(a,i)=>t((t=>e.request(E,a,Object.assign(Object.assign({},i),t))),"updateNode"),updatePageById:(a,i)=>t((t=>e.request(S,a,Object.assign(Object.assign({},i),t))),"updatePageById"),addPageToDraft:(a,i)=>t((t=>e.request(L,a,Object.assign(Object.assign({},i),t))),"addPageToDraft"),deletePage:(a,i)=>t((t=>e.request(T,a,Object.assign(Object.assign({},i),t))),"deletePage")}}(R)},3864:(e,t,a)=>{a.r(t),a.d(t,{ListComponent:()=>c});var i=a(745),r=a(3445),d=a(7157),n=a(6201),o=a(577),s=a(1943),p=function(e,t,a,i){var r,d=arguments.length,n=d<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(n=(d<3?r(n):d>3?r(t,a,n):r(t,a))||n);return d>3&&n&&Object.defineProperty(t,a,n),n};let c=class extends i.yB{constructor(){super(n.Z,!1),this.styles=r.dy`
    <style>
      ${a(7432)}
      ${a(7880)}
    </style>
  `,this._list=[]}set value(e){void 0!==e&&(this._list=e)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.closePopovers.bind(this))}disconnectedCallback(){document.removeEventListener("click",this.closePopovers.bind(this))}render(){if(this._list.length<1)return r.dy``;const e=(e,t=[])=>t.length>0?r.dy`
            <div class="um-drafts__item-actions">
              <span @click=${this.openPopover.bind(this)} class="um-drafts__item-subcontent" data-popover=${e}>
                ${e} <i class="fas fa-angle-down" style="color:#999"></i>
              </span>
              <div id=${e} class="popover popover_right">
                <ul class="popover-list">
                  ${t.map((t=>r.dy`
                      <li class="popover-item">
                        <a class="popover-link" @click=${this.dispatchAction.bind(this,{type:t.type,id:e})}>${t.label}</a>
                      </li>
                    `))}
                </ul>
              </div>
            </div>
          `:"",t=(0,d.r)(this._list,(e=>e.id),((t,a)=>{var i,d;return r.dy`
        <div class="um-drafts__item">
          ${(t.tags||[]).map((e=>null!=e.link?r.dy`<a href="/${e.link.href}" rel=${(0,o.o)(e.link.rel)}>${e.code}</a>`:e.code))}
          <h6 class="docs-header">${t.preview.title}</h6>
          <div class="row">
            ${(null===(i=t.preview.image)||void 0===i?void 0:i.length)>0?r.dy`
                  <div class="two columns draft-preview">
                    <img class="draft-preview__img" src="${t.preview.image}" />
                  </div>
                `:""}
            <div class=${(null===(d=t.preview.image)||void 0===d?void 0:d.length)>0?"ten columns":""}>
              <a class="um-drafts__item-link" href=${t.linkUrl} rel=${(0,o.o)(t.linkRel)}>
                <p class="docs-preview">${(0,s.A)(t.preview.description)}</p>
              </a>
              ${e(t.id,"function"==typeof t.actions?t.actions():t.actions)}
            </div>
          </div>
        </div>
      `}));return r.dy`
      ${this.styles}
      <div class="container">${t}</div>
    `}dispatchAction(e){this.dispatchEvent(new CustomEvent("action",{detail:e}))}openPopover(e){var t;e.preventDefault(),this.closePopovers();const a=null===(t=e.target)||void 0===t?void 0:t.dataset.popover,i=this.querySelector(`[id="${a}"]`);null!==i&&i.classList.add("open"),e.stopImmediatePropagation()}closePopovers(){this.querySelectorAll(".popover.open").forEach((e=>{e.classList.remove("open")}))}};p([(0,i.SB)()],c.prototype,"_list",void 0),c=p([(0,i.Qr)("inscriptum-list")],c)},998:(e,t,a)=>{a.d(t,{i:()=>o});var i=a(1640),r=a(3584),d=a(6608),n=a(5196);const o=(0,r.EG)()((function*(){let e=!1;for(d.f.pipe((0,n.P)((e=>{var t;return null!=(null===(t=e.data)||void 0===t?void 0:t.accessToken)&&!e.isLoading}))).subscribe((()=>{e=!0,this.next()}));;)yield(0,i.sY)(i.dy`
        <style>${a(169)}</style>

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
      `,this)}))},667:(e,t,a)=>{a.d(t,{p:()=>d});var i=a(9248),r=a(1954);function d(e){const t=new i.x;return{$:t,_:(...a)=>(0,r.D)(e(...a)).subscribe({next:e=>t.next(e),error:e=>t.error(e)})}}},7880:e=>{e.exports=".um-drafts__item{border-bottom:1px solid #eee;padding:4rem 0;margin-bottom:0}.um-drafts__item-link{color:inherit;text-decoration:none}.um-drafts__item-link:hover{color:inherit}.um-drafts__item-actions{position:relative;float:right}.um-drafts__item-subcontent{font-size:1.1rem;color:#999;letter-spacing:normal;font-weight:normal;display:block;cursor:pointer}@media(min-width: 550px){.in-drafts__item{padding:20px 0}}.draft-preview{position:relative;min-height:150px}.draft-preview__img{box-shadow:6px 6px 8px -10px rgba(0,0,0,.7);position:absolute;right:0;max-height:150px;max-width:300px;object-fit:cover}"},7432:e=>{e.exports='.header{margin-top:6rem;text-align:center}.value-prop{margin-top:1rem}.value-props{margin-top:4rem;margin-bottom:4rem}.docs-header{text-transform:uppercase;font-size:1.4rem;letter-spacing:.2rem;font-weight:250}.docs-section{border-top:1px solid #eee;padding:4rem 0;margin-bottom:0}.value-img{display:block;text-align:center;margin:2.5rem auto 0}.example-grid .column,.example-grid .columns{background:#eee;text-align:center;border-radius:4px;font-size:1rem;text-transform:uppercase;height:30px;line-height:30px;margin-bottom:.75rem;font-weight:600;letter-spacing:.1rem}.docs-preview{white-space:pre-line;font-weight:330}.docs-example .row,.docs-example.row,.docs-example form{margin-bottom:0}.docs-example h1,.docs-example h2,.docs-example h3,.docs-example h4,.docs-example h5,.docs-example h6{margin-bottom:1rem}.heading-font-size{font-size:1.2rem;color:#999;letter-spacing:normal}.code-example{margin-top:1.5rem;margin-bottom:0}.code-example-body{white-space:pre;word-wrap:break-word}.example{position:relative;margin-top:4rem}.example-header{font-weight:600;margin-top:1.5rem;margin-bottom:.5rem}.example-description{margin-bottom:1.5rem}.example-screenshot-wrapper{display:block;position:relative;overflow:hidden;border-radius:6px;border:1px solid #eee;height:250px}.example-screenshot{width:100%;height:auto}.example-screenshot.coming-soon{width:auto;position:absolute;background:#eee;top:5px;right:5px;bottom:5px;left:5px}@media(min-width: 550px){.header{margin-top:18rem}.value-props{margin-top:9rem;margin-bottom:7rem}.value-img{margin-bottom:1rem}.example-grid .column,.example-grid .columns{margin-bottom:1.5rem}.docs-section{padding:6rem 0}.example-send-yourself-copy{float:right;margin-top:12px}.example-screenshot-wrapper{position:absolute;width:48%;height:100%;left:0;max-height:none}}@media(min-width: 750px){.popover.open{display:block}.popover{display:none;position:absolute;top:0;left:0;background:#fff;border:1px solid #eee;border-radius:4px;top:92%;left:-50%;filter:drop-shadow(0 0 6px rgba(0, 0, 0, 0.1))}.popover_right{left:auto;right:0;top:calc(100% + 11px)}.popover-item:first-child .popover-link:after,.popover-item:first-child .popover-link:before{bottom:100%;left:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.popover-item:first-child .popover-link:after{border-color:rgba(255,255,255,0);border-bottom-color:#fff;border-width:10px;margin-left:-10px}.popover-item:first-child .popover-link:before{border-color:rgba(238,238,238,0);border-bottom-color:#eee;border-width:11px;margin-left:-11px}.popover-list{padding:0;margin:0;list-style:none}.popover-item{padding:0;margin:0}.popover-link{position:relative;color:#222;display:block;padding:8px 20px;border-bottom:1px solid #eee;text-decoration:none;text-transform:uppercase;font-size:1rem;font-weight:600;text-align:center;letter-spacing:.1rem}.popover-item:first-child .popover-link{border-radius:4px 4px 0 0}.popover-item:last-child .popover-link{border-radius:0 0 4px 4px;border-bottom-width:0}.popover-link:hover{color:#fff;background:#33c3f0}.popover-link:hover,.popover-item:first-child .popover-link:hover:after{border-bottom-color:#33c3f0}}'},169:e=>{e.exports=".navbar{display:none}@media(min-width: 750px){.navbar+.docs-section{border-top-width:0}.navbar,.navbar-spacer{display:block;width:100%;height:6.5rem;background:#fff;z-index:99;border-top:1px solid #eee;border-bottom:1px solid #eee}.navbar-spacer{display:none}.navbar>.container{width:100%}.navbar-list{list-style:none;margin-bottom:0}.navbar-item{position:relative;float:left;margin-bottom:0}.navbar-link{text-transform:uppercase;font-size:11px;font-weight:600;letter-spacing:.2rem;margin-right:35px;text-decoration:none;line-height:6.5rem;color:#222}.navbar-link.active{color:#33c3f0}.has-docked-nav .navbar{position:fixed;top:0;left:0}.has-docked-nav .navbar-spacer{display:block}.has-docked-nav .navbar>.container{width:80%}}"}}]);