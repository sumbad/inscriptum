"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[114],{2114:(e,t,a)=>{a.d(t,{S:()=>z});var d,n,i,r,s,o,u,c,_,l,p,g,m,f,A,b,h,y=a(8687),$=a(3e3),O=a(5196),I=a(3135),E=a(2900);!function(e){e.AuthorAuth0UserIdKey="author_auth0UserId_key",e.AuthorPkey="author_pkey"}(d||(d={})),function(e){e.Auth0Id="auth0_id",e.CreatedAt="created_at",e.Email="email",e.Id="id",e.LastSeen="last_seen",e.Name="name"}(n||(n={})),function(e){e.Auth0Id="auth0_id",e.CreatedAt="created_at",e.Email="email",e.Id="id",e.LastSeen="last_seen",e.Name="name"}(i||(i={})),function(e){e.DraftPkey="draft_pkey"}(r||(r={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.TableOfContents="table_of_contents",e.UpdatedAt="updated_at"}(s||(s={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.TableOfContents="table_of_contents",e.UpdatedAt="updated_at"}(o||(o={})),function(e){e.MarginPkey="margin_pkey"}(u||(u={})),function(e){e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.Img="img",e.Name="name",e.Options="options",e.PageId="page_id",e.UpdatedAt="updated_at"}(c||(c={})),function(e){e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.Img="img",e.Name="name",e.Options="options",e.PageId="page_id",e.UpdatedAt="updated_at"}(_||(_={})),function(e){e.NotePkey="note_pkey",e.UqNoteDraftIdEndedAt="uq_note_draft_id_ended_at"}(l||(l={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Name="name",e.Preview="preview",e.StaticLink="static_link",e.UpdatedAt="updated_at"}(p||(p={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Name="name",e.Preview="preview",e.StaticLink="static_link",e.UpdatedAt="updated_at"}(g||(g={})),function(e){e.LastSeen="last_seen",e.Name="name"}(m||(m={})),function(e){e.Asc="asc",e.AscNullsFirst="asc_nulls_first",e.AscNullsLast="asc_nulls_last",e.Desc="desc",e.DescNullsFirst="desc_nulls_first",e.DescNullsLast="desc_nulls_last"}(f||(f={})),function(e){e.PagePkey="page_pkey"}(A||(A={})),function(e){e.Content="content",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Order="order",e.UpdatedAt="updated_at"}(b||(b={})),function(e){e.Content="content",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Order="order",e.UpdatedAt="updated_at"}(h||(h={}));const v=E.ZP`
    query findAuthorByAuth0($auth0_id: String!) {
  author(where: {auth0_id: {_eq: $auth0_id}}) {
    id
    email
    name
    last_seen
    created_at
  }
}
    `,D=E.ZP`
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
    `,N=E.ZP`
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
    `,j=E.ZP`
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
    `,C=E.ZP`
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
    `,T=E.ZP`
    mutation deleteDraftById($id: uuid!, $ended_at: timestamptz) {
  update_draft_by_pk(pk_columns: {id: $id}, _set: {ended_at: $ended_at}) {
    id
  }
}
    `,k=E.ZP`
    query getMarginById($id: uuid!) {
  margin: margin_by_pk(id: $id) {
    id
    pageId: page_id
    img
    imgBase64
    options
  }
}
    `,P=E.ZP`
    mutation createMargin($page_id: uuid!, $created_at: timestamptz!) {
  insert_margin_one(object: {page_id: $page_id, created_at: $created_at}) {
    id
  }
}
    `,S=E.ZP`
    mutation saveMargin($id: uuid!, $updated_at: timestamptz!, $options: jsonb!, $img: bytea!, $name: String) {
  update_margin_by_pk(
    pk_columns: {id: $id}
    _set: {updated_at: $updated_at, options: $options, img: $img, name: $name}
  ) {
    updated_at
    id
  }
}
    `,w=E.ZP`
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
    `,U=E.ZP`
    mutation createNode($author_id: uuid!, $created_at: timestamptz, $draft_id: uuid!, $ended_at: timestamptz, $name: String!, $preview: jsonb, $static_link: String) {
  insert_note_one(
    object: {author_id: $author_id, created_at: $created_at, draft_id: $draft_id, ended_at: $ended_at, name: $name, preview: $preview, static_link: $static_link}
  ) {
    id
    updated_at
    created_at
  }
}
    `,L=E.ZP`
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
    `,H=E.ZP`
    mutation updatePageById($id: uuid!, $content: jsonb!, $updated_at: timestamptz!) {
  update_page_by_pk(
    pk_columns: {id: $id}
    _set: {content: $content, updated_at: $updated_at}
  ) {
    id
  }
}
    `,q=E.ZP`
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
    `,B=E.ZP`
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
    `,F=(e,t)=>e();const G="https://inscriptum-hasura.herokuapp.com/v1/graphql";let Z={credentials:"include",mode:"cors",cache:"no-cache",method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}},R=new y.GraphQLClient(G,Z);$.f.pipe((0,O.P)((e=>{var t;return null!=(null===(t=e.data)||void 0===t?void 0:t.accessToken)&&!e.isLoading}))).subscribe((e=>{var t,a;console.log("API AUTH_ACTION.AUTH_DONE"),Z=I.v.isAuthDisabled?Object.assign(Object.assign({},Z),{headers:Object.assign(Object.assign({},Z.headers),{"x-hasura-user-id":String(null===(t=e.data)||void 0===t?void 0:t.userInfo.auth0Id)})}):Object.assign(Object.assign({},Z),{headers:Object.assign(Object.assign({},Z.headers),{Authorization:`Bearer ${null===(a=e.data)||void 0===a?void 0:a.accessToken}`})}),R=new y.GraphQLClient(G,Z)}));const z=()=>function(e,t=F){return{findAuthorByAuth0:(a,d)=>t((t=>e.request(v,a,Object.assign(Object.assign({},d),t))),"findAuthorByAuth0"),getAllDrafts:(a,d)=>t((t=>e.request(D,a,Object.assign(Object.assign({},d),t))),"getAllDrafts"),getDraftById:(a,d)=>t((t=>e.request(N,a,Object.assign(Object.assign({},d),t))),"getDraftById"),updateDraftTOC:(a,d)=>t((t=>e.request(j,a,Object.assign(Object.assign({},d),t))),"updateDraftTOC"),createNewDraft:(a,d)=>t((t=>e.request(C,a,Object.assign(Object.assign({},d),t))),"createNewDraft"),deleteDraftById:(a,d)=>t((t=>e.request(T,a,Object.assign(Object.assign({},d),t))),"deleteDraftById"),getMarginById:(a,d)=>t((t=>e.request(k,a,Object.assign(Object.assign({},d),t))),"getMarginById"),createMargin:(a,d)=>t((t=>e.request(P,a,Object.assign(Object.assign({},d),t))),"createMargin"),saveMargin:(a,d)=>t((t=>e.request(S,a,Object.assign(Object.assign({},d),t))),"saveMargin"),getAllNotes:(a,d)=>t((t=>e.request(w,a,Object.assign(Object.assign({},d),t))),"getAllNotes"),createNode:(a,d)=>t((t=>e.request(U,a,Object.assign(Object.assign({},d),t))),"createNode"),updateNode:(a,d)=>t((t=>e.request(L,a,Object.assign(Object.assign({},d),t))),"updateNode"),updatePageById:(a,d)=>t((t=>e.request(H,a,Object.assign(Object.assign({},d),t))),"updatePageById"),addPageToDraft:(a,d)=>t((t=>e.request(q,a,Object.assign(Object.assign({},d),t))),"addPageToDraft"),deletePage:(a,d)=>t((t=>e.request(B,a,Object.assign(Object.assign({},d),t))),"deletePage")}}(R)},4860:(e,t,a)=>{a.d(t,{u:()=>d});const d={PAGE_SAVE:Symbol("[HUB_ACTION] PAGE_SAVE"),PAGE_SAVING:Symbol("[HUB_ACTION] PAGE_SAVING"),PAGE_SAVE_DONE:Symbol("[HUB_ACTION] PAGE_SAVE_DONE"),PAGE_SAVE_FAIL:Symbol("[HUB_ACTION] PAGE_SAVE_FAIL"),DRAFT_ADD_PAGE_DONE:Symbol("[HUB_ACTION] DRAFT_ADD_PAGE_DONE"),DRAFT_DELETE_PAGE_DONE:Symbol("[HUB_ACTION] DRAFT_DELETE_PAGE_DONE"),DRAFT_PUBLISH:Symbol("[HUB_ACTION] DRAFT_PUBLISH"),FULLSCREEN_CHANGED:Symbol("[HUB_ACTION] FULLSCREEN_CHANGED")}},5467:(e,t,a)=>{a.d(t,{C:()=>n});const d="AUTH_ACTION",n={AUTH:Symbol(`[${d}] AUTH`),AUTH_DONE:Symbol(`[${d}] AUTH_DONE`),AUTH_FAIL:Symbol(`[${d}] AUTH_FAIL`)}},3e3:(e,t,a)=>{a.d(t,{f:()=>j});var d=a(5467),n=a(7948),i=a(9917),r=a(2817),s=a(4975),o=a(4978),u=a(9127),c=a(9878),_=a(4713),l=a(3135),p=function(e,t,a,d){return new(a||(a=Promise))((function(n,i){function r(e){try{o(d.next(e))}catch(e){i(e)}}function s(e){try{o(d.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,s)}o((d=d.apply(e,t||[])).next())}))};let g=null;function m(){return p(this,void 0,void 0,(function*(){return null!=g?g:g=yield(0,_.ZP)({domain:"inscriptum.auth0.com",client_id:"sSGAFDwnRqJUsJw7v12KV8SAeuYtl3Cd",audience:"https://inscriptum.js.org"})}))}function f(e){return p(this,void 0,void 0,(function*(){if(l.v.isAuthDisabled)return h();const t=window.location.search;return t.includes("code=")&&t.includes("state=")?function(e){return p(this,void 0,void 0,(function*(){const t=yield m();try{(yield t.isAuthenticated())||(yield t.handleRedirectCallback()),window.history.replaceState({},document.title,e)}catch(e){throw new Error(e)}return b()}))}(e):A(e)}))}function A(e,t=!1){return p(this,void 0,void 0,(function*(){const a=sessionStorage.getItem("accessToken"),d=sessionStorage.getItem("userInfo"),n=Number(sessionStorage.getItem("expiresAt"));if(null!=a&&null!=d&&n>Date.now()){return{accessToken:a,userInfo:JSON.parse(d),expiresAt:n}}const i=yield m();return(yield i.isAuthenticated())||t||(yield i.loginWithRedirect({redirect_uri:e})),b()}))}function b(){return p(this,void 0,void 0,(function*(){const e=yield m(),t=yield e.getTokenSilently(),a=yield e.getUser();if(null==a)throw new Error("Can't find user info");const d={auth0Id:a.sub,email:a.email},n=new Date,i=n.setDate(n.getDate()+1);return sessionStorage.setItem("accessToken",t),sessionStorage.setItem("userInfo",JSON.stringify(d)),sessionStorage.setItem("expiresAt",JSON.stringify(i)),{accessToken:t,userInfo:d,expiresAt:i}}))}function h(){const e=new Date;return{accessToken:"",expiresAt:e.setDate(e.getDate()+1),userInfo:{auth0Id:"auth0|5c2b3430c12e3e5be73e5b35",email:"test@test.test"}}}const y=n.Z.$.pipe((0,s.h)((e=>d.C.AUTH===e.type)),(0,o.w)((e=>{var t;const a=null!==(t=e.payload.redirectUri)&&void 0!==t?t:`${document.location.origin}/drafts`;return(0,i.P)((()=>e.payload.silent?function(){return p(this,void 0,void 0,(function*(){return l.v.isAuthDisabled?h():A(void 0,!0)}))}():f(a))).pipe((0,u.U)((e=>({type:d.C.AUTH_DONE,payload:e}))),(0,c.K)((e=>(console.warn(e),(0,r.of)({type:d.C.AUTH_FAIL,payload:e})))))})));var $=a(3071),O=a(8536),I=a(3074),E=a(5631),v=a(6874),D=a(218),N=a(6925);const j=(0,$.T)(n.Z.$,y).pipe((0,N.Z)(d.C),(0,O.O)({isLoading:!1}),(0,I.R)((function(e,t){switch(t.type){case d.C.AUTH:return Object.assign(Object.assign({},e),{error:null,isLoading:!0});case d.C.AUTH_DONE:return Object.assign(Object.assign({},e),{data:t.payload,isLoading:!1});case d.C.AUTH_FAIL:return Object.assign(Object.assign({},e),{error:t.payload,isLoading:!1});default:return e}})),(0,E.E)(),(0,v._)(1),(0,D.x)())},7948:(e,t,a)=>{a.d(t,{Z:()=>o});var d=a(9248),n=a(5467);var i=a(4860);const r=new d.x;function s(e){console.log(e),function(e){var t,a;"error"in e.payload&&Array.isArray(null===(a=null===(t=e.payload.error)||void 0===t?void 0:t.response)||void 0===a?void 0:a.errors)&&e.payload.error.response.errors.some((e=>{var t;return null===(t=e.message)||void 0===t?void 0:t.startWith("Could not verify JWT: JWTExpired")}))&&o.dispatch({type:n.C.AUTH,payload:{redirectUri:`${document.location.origin}/drafts`}})}(e),r.next(e)}const o={$:r.asObservable(),dispatch:s};!function(e){document.addEventListener("fullscreenchange",(()=>{e({type:i.u.FULLSCREEN_CHANGED,payload:{isFullscreen:null!=document.fullscreenElement,element:document.fullscreenElement}}),null!=document.fullscreenElement?console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`):console.log("Leaving full-screen mode.")})),document.addEventListener("webkitfullscreenchange",(()=>{e({type:i.u.FULLSCREEN_CHANGED,payload:{isFullscreen:null!=document.webkitIsFullScreen,element:document.fullscreenElement}}),document.webkitIsFullScreen?console.log("Element: entered full-screen mode."):console.log("Leaving full-screen mode.")}))}(s)},3135:(e,t,a)=>{a.d(t,{v:()=>d});const d=Object.freeze({isDevMode:!1,isAuthDisabled:!1,nodeListFileName:"list.json"})},6925:(e,t,a)=>{a.d(t,{Z:()=>n});var d=a(4975);function n(e){return(0,d.h)((t=>Object.values(e).includes(t.type)))}}}]);