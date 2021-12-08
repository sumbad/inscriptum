"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[2261],{32114:(e,t,a)=>{a.d(t,{S:()=>z});var n,d,i,r,s,o,u,c,_,l,p,g,f,m,A,b,h,y=a(28687),$=a(3e3),O=a(29514),I=a(63135),v=a(52972);!function(e){e.AuthorAuth0UserIdKey="author_auth0UserId_key",e.AuthorPkey="author_pkey"}(n||(n={})),function(e){e.Auth0Id="auth0_id",e.CreatedAt="created_at",e.Email="email",e.Id="id",e.LastSeen="last_seen",e.Name="name"}(d||(d={})),function(e){e.Auth0Id="auth0_id",e.CreatedAt="created_at",e.Email="email",e.Id="id",e.LastSeen="last_seen",e.Name="name"}(i||(i={})),function(e){e.DraftPkey="draft_pkey"}(r||(r={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.TableOfContents="table_of_contents",e.UpdatedAt="updated_at"}(s||(s={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.TableOfContents="table_of_contents",e.UpdatedAt="updated_at"}(o||(o={})),function(e){e.MarginPkey="margin_pkey"}(u||(u={})),function(e){e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.Img="img",e.Name="name",e.Options="options",e.PageId="page_id",e.UpdatedAt="updated_at"}(c||(c={})),function(e){e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.Img="img",e.Name="name",e.Options="options",e.PageId="page_id",e.UpdatedAt="updated_at"}(_||(_={})),function(e){e.NotePkey="note_pkey",e.UqNoteDraftIdEndedAt="uq_note_draft_id_ended_at"}(l||(l={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Name="name",e.Preview="preview",e.StaticLink="static_link",e.UpdatedAt="updated_at"}(p||(p={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Name="name",e.Preview="preview",e.StaticLink="static_link",e.UpdatedAt="updated_at"}(g||(g={})),function(e){e.LastSeen="last_seen",e.Name="name"}(f||(f={})),function(e){e.Asc="asc",e.AscNullsFirst="asc_nulls_first",e.AscNullsLast="asc_nulls_last",e.Desc="desc",e.DescNullsFirst="desc_nulls_first",e.DescNullsLast="desc_nulls_last"}(m||(m={})),function(e){e.PagePkey="page_pkey"}(A||(A={})),function(e){e.Content="content",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Order="order",e.UpdatedAt="updated_at"}(b||(b={})),function(e){e.Content="content",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Order="order",e.UpdatedAt="updated_at"}(h||(h={}));const E=v.ZP`
    query findAuthorByAuth0($auth0_id: String!) {
  author(where: {auth0_id: {_eq: $auth0_id}}) {
    id
    email
    name
    last_seen
    created_at
  }
}
    `,D=v.ZP`
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
    `,N=v.ZP`
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
    `,T=v.ZP`
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
    `,j=v.ZP`
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
    `,C=v.ZP`
    mutation deleteDraftById($id: uuid!, $ended_at: timestamptz) {
  update_draft_by_pk(pk_columns: {id: $id}, _set: {ended_at: $ended_at}) {
    id
  }
}
    `,w=v.ZP`
    query getMarginById($id: uuid!) {
  margin: margin_by_pk(id: $id) {
    id
    pageId: page_id
    img
    imgBase64
    options
  }
}
    `,P=v.ZP`
    mutation createMargin($page_id: uuid!, $created_at: timestamptz!) {
  insert_margin_one(object: {page_id: $page_id, created_at: $created_at}) {
    id
  }
}
    `,k=v.ZP`
    mutation saveMargin($id: uuid!, $updated_at: timestamptz!, $options: jsonb!, $img: bytea!, $name: String) {
  update_margin_by_pk(
    pk_columns: {id: $id}
    _set: {updated_at: $updated_at, options: $options, img: $img, name: $name}
  ) {
    updated_at
    id
  }
}
    `,S=v.ZP`
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
    `,U=v.ZP`
    mutation createNode($author_id: uuid!, $created_at: timestamptz, $draft_id: uuid!, $ended_at: timestamptz, $name: String!, $preview: jsonb, $static_link: String) {
  insert_note_one(
    object: {author_id: $author_id, created_at: $created_at, draft_id: $draft_id, ended_at: $ended_at, name: $name, preview: $preview, static_link: $static_link}
  ) {
    id
    updated_at
    created_at
  }
}
    `,L=v.ZP`
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
    `,H=v.ZP`
    mutation updatePageById($id: uuid!, $content: jsonb!, $updated_at: timestamptz!) {
  update_page_by_pk(
    pk_columns: {id: $id}
    _set: {content: $content, updated_at: $updated_at}
  ) {
    id
  }
}
    `,q=v.ZP`
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
    `,B=v.ZP`
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
    `,F=(e,t)=>e();const G="https://inscriptum-hasura.herokuapp.com/v1/graphql";let Z={credentials:"include",mode:"cors",cache:"no-cache",method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}},x=new y.GraphQLClient(G,Z);$.f.pipe((0,O.P)((e=>{var t;return null!=(null===(t=e.data)||void 0===t?void 0:t.accessToken)&&!e.isLoading}))).subscribe((e=>{var t,a;console.log("API AUTH_ACTION.AUTH_DONE"),Z=I.v.isAuthDisabled?Object.assign(Object.assign({},Z),{headers:Object.assign(Object.assign({},Z.headers),{"x-hasura-user-id":String(null===(t=e.data)||void 0===t?void 0:t.userInfo.auth0Id)})}):Object.assign(Object.assign({},Z),{headers:Object.assign(Object.assign({},Z.headers),{Authorization:`Bearer ${null===(a=e.data)||void 0===a?void 0:a.accessToken}`})}),x=new y.GraphQLClient(G,Z)}));const z=()=>function(e,t=F){return{findAuthorByAuth0:(a,n)=>t((t=>e.request(E,a,Object.assign(Object.assign({},n),t))),"findAuthorByAuth0"),getAllDrafts:(a,n)=>t((t=>e.request(D,a,Object.assign(Object.assign({},n),t))),"getAllDrafts"),getDraftById:(a,n)=>t((t=>e.request(N,a,Object.assign(Object.assign({},n),t))),"getDraftById"),updateDraftTOC:(a,n)=>t((t=>e.request(T,a,Object.assign(Object.assign({},n),t))),"updateDraftTOC"),createNewDraft:(a,n)=>t((t=>e.request(j,a,Object.assign(Object.assign({},n),t))),"createNewDraft"),deleteDraftById:(a,n)=>t((t=>e.request(C,a,Object.assign(Object.assign({},n),t))),"deleteDraftById"),getMarginById:(a,n)=>t((t=>e.request(w,a,Object.assign(Object.assign({},n),t))),"getMarginById"),createMargin:(a,n)=>t((t=>e.request(P,a,Object.assign(Object.assign({},n),t))),"createMargin"),saveMargin:(a,n)=>t((t=>e.request(k,a,Object.assign(Object.assign({},n),t))),"saveMargin"),getAllNotes:(a,n)=>t((t=>e.request(S,a,Object.assign(Object.assign({},n),t))),"getAllNotes"),createNode:(a,n)=>t((t=>e.request(U,a,Object.assign(Object.assign({},n),t))),"createNode"),updateNode:(a,n)=>t((t=>e.request(L,a,Object.assign(Object.assign({},n),t))),"updateNode"),updatePageById:(a,n)=>t((t=>e.request(H,a,Object.assign(Object.assign({},n),t))),"updatePageById"),addPageToDraft:(a,n)=>t((t=>e.request(q,a,Object.assign(Object.assign({},n),t))),"addPageToDraft"),deletePage:(a,n)=>t((t=>e.request(B,a,Object.assign(Object.assign({},n),t))),"deletePage")}}(x)},44860:(e,t,a)=>{a.d(t,{u:()=>n});const n={PAGE_SAVE:Symbol("[HUB_ACTION] PAGE_SAVE"),PAGE_SAVING:Symbol("[HUB_ACTION] PAGE_SAVING"),PAGE_SAVE_DONE:Symbol("[HUB_ACTION] PAGE_SAVE_DONE"),PAGE_SAVE_FAIL:Symbol("[HUB_ACTION] PAGE_SAVE_FAIL"),DRAFT_ADD_PAGE_DONE:Symbol("[HUB_ACTION] DRAFT_ADD_PAGE_DONE"),DRAFT_DELETE_PAGE_DONE:Symbol("[HUB_ACTION] DRAFT_DELETE_PAGE_DONE"),DRAFT_PUBLISH:Symbol("[HUB_ACTION] DRAFT_PUBLISH"),FULLSCREEN_CHANGED:Symbol("[HUB_ACTION] FULLSCREEN_CHANGED")}},65467:(e,t,a)=>{a.d(t,{C:()=>d});const n="AUTH_ACTION",d={AUTH:Symbol(`[${n}] AUTH`),AUTH_DONE:Symbol(`[${n}] AUTH_DONE`),AUTH_FAIL:Symbol(`[${n}] AUTH_FAIL`)}},3e3:(e,t,a)=>{a.d(t,{f:()=>T});var n=a(65467),d=a(27948),i=a(51410),r=a(18170),s=a(66008),o=a(34035),u=a(55709),c=a(40486),_=a(54713),l=a(63135),p=function(e,t,a,n){return new(a||(a=Promise))((function(d,i){function r(e){try{o(n.next(e))}catch(e){i(e)}}function s(e){try{o(n.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?d(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,s)}o((n=n.apply(e,t||[])).next())}))};let g=null;function f(){return p(this,void 0,void 0,(function*(){return null!=g?g:g=yield(0,_.ZP)({domain:"inscriptum.auth0.com",client_id:"sSGAFDwnRqJUsJw7v12KV8SAeuYtl3Cd",audience:"https://inscriptum.js.org"})}))}function m(e){return p(this,void 0,void 0,(function*(){if(l.v.isAuthDisabled)return h();const t=window.location.search;return t.includes("code=")&&t.includes("state=")?function(e){return p(this,void 0,void 0,(function*(){const t=yield f();try{(yield t.isAuthenticated())||(yield t.handleRedirectCallback()),window.history.replaceState({},document.title,e)}catch(e){throw new Error(e)}return b()}))}(e):A(e)}))}function A(e,t=!1){return p(this,void 0,void 0,(function*(){const a=sessionStorage.getItem("accessToken"),n=sessionStorage.getItem("userInfo"),d=Number(sessionStorage.getItem("expiresAt"));if(null!=a&&null!=n&&d>Date.now()){return{accessToken:a,userInfo:JSON.parse(n),expiresAt:d}}const i=yield f();return(yield i.isAuthenticated())||t||(yield i.loginWithRedirect({redirect_uri:e})),b()}))}function b(){return p(this,void 0,void 0,(function*(){const e=yield f(),t=yield e.getTokenSilently(),a=yield e.getUser();if(null==a)throw new Error("Can't find user info");const n={auth0Id:a.sub,email:a.email},d=new Date,i=d.setDate(d.getDate()+1);return sessionStorage.setItem("accessToken",t),sessionStorage.setItem("userInfo",JSON.stringify(n)),sessionStorage.setItem("expiresAt",JSON.stringify(i)),{accessToken:t,userInfo:n,expiresAt:i}}))}function h(){const e=new Date;return{accessToken:"",expiresAt:e.setDate(e.getDate()+1),userInfo:{auth0Id:"auth0|5c2b3430c12e3e5be73e5b35",email:"test@test.test"}}}const y=d.Z.$.pipe((0,s.h)((e=>n.C.AUTH===e.type)),(0,o.w)((e=>{var t;const a=null!==(t=e.payload.redirectUri)&&void 0!==t?t:`${document.location.origin}/drafts`;return(0,i.P)((()=>e.payload.silent?function(){return p(this,void 0,void 0,(function*(){return l.v.isAuthDisabled?h():A(void 0,!0)}))}():m(a))).pipe((0,u.U)((e=>({type:n.C.AUTH_DONE,payload:e}))),(0,c.K)((e=>(console.warn(e),(0,r.of)({type:n.C.AUTH_FAIL,payload:e})))))})));var $=a(14370),O=a(21993),I=a(22807),v=a(34181),E=a(59857),D=a(3018),N=a(36925);const T=(0,$.T)(d.Z.$,y).pipe((0,N.Z)(n.C),(0,O.O)({isLoading:!1}),(0,I.R)((function(e,t){switch(t.type){case n.C.AUTH:return Object.assign(Object.assign({},e),{error:null,isLoading:!0});case n.C.AUTH_DONE:return Object.assign(Object.assign({},e),{data:t.payload,isLoading:!1});case n.C.AUTH_FAIL:return Object.assign(Object.assign({},e),{error:t.payload,isLoading:!1});default:return e}})),(0,v.E)(),(0,E._)(1),(0,D.x)())},27948:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(70211),d=a(65467);var i=a(44860);const r=new n.xQ;function s(e){console.log(e),function(e){var t,a;"error"in e.payload&&Array.isArray(null===(a=null===(t=e.payload.error)||void 0===t?void 0:t.response)||void 0===a?void 0:a.errors)&&e.payload.error.response.errors.some((e=>{var t;return null===(t=e.message)||void 0===t?void 0:t.startWith("Could not verify JWT: JWTExpired")}))&&o.dispatch({type:d.C.AUTH,payload:{redirectUri:`${document.location.origin}/drafts`}})}(e),r.next(e)}const o={$:r.asObservable(),dispatch:s};!function(e){document.addEventListener("fullscreenchange",(()=>{e({type:i.u.FULLSCREEN_CHANGED,payload:{isFullscreen:null!=document.fullscreenElement,element:document.fullscreenElement}}),null!=document.fullscreenElement?console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`):console.log("Leaving full-screen mode.")})),document.addEventListener("webkitfullscreenchange",(()=>{e({type:i.u.FULLSCREEN_CHANGED,payload:{isFullscreen:null!=document.webkitIsFullScreen,element:document.fullscreenElement}}),document.webkitIsFullScreen?console.log("Element: entered full-screen mode."):console.log("Leaving full-screen mode.")}))}(s)},63135:(e,t,a)=>{a.d(t,{v:()=>n});const n=Object.freeze({isDevMode:!1,isAuthDisabled:!1,nodeListFileName:"list.json"})},67848:(e,t,a)=>{a.d(t,{G:()=>u});var n=a(65467),d=a(27948),i=a(3e3),r=a(84217),s=a(29514),o=function(e,t,a,n){return new(a||(a=Promise))((function(d,i){function r(e){try{o(n.next(e))}catch(e){i(e)}}function s(e){try{o(n.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?d(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,s)}o((n=n.apply(e,t||[])).next())}))};function u(e,t=`${document.location.origin}/drafts`){return o(this,void 0,void 0,(function*(){return new Promise((a=>{i.f.pipe((0,r.q)(1)).subscribe((e=>{var a;null!=(null===(a=e.data)||void 0===a?void 0:a.accessToken)||e.isLoading||d.Z.dispatch({type:n.C.AUTH,payload:{redirectUri:t}})})),i.f.pipe((0,s.P)((e=>null!=e.data&&!e.isLoading))).subscribe((t=>{console.log("authorizedWork AUTH_ACTION.AUTH_DONE"),a(e(t.data))}))}))}))}},36925:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(66008);function d(e){return(0,n.h)((t=>Object.values(e).includes(t.type)))}}}]);