"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[2261],{2114:(e,t,a)=>{a.d(t,{S:()=>F});var d,n,i,r,s,o,u,c,_,l,p,g,f,m,h,b,A,y=a(8687),$=a(3e3),v=a(9514),O=a(3135),I=a(2972);!function(e){e.AuthorAuth0UserIdKey="author_auth0UserId_key",e.AuthorPkey="author_pkey"}(d||(d={})),function(e){e.Auth0Id="auth0_id",e.CreatedAt="created_at",e.Email="email",e.Id="id",e.LastSeen="last_seen",e.Name="name"}(n||(n={})),function(e){e.Auth0Id="auth0_id",e.CreatedAt="created_at",e.Email="email",e.Id="id",e.LastSeen="last_seen",e.Name="name"}(i||(i={})),function(e){e.DraftPkey="draft_pkey"}(r||(r={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.TableOfContents="table_of_contents",e.UpdatedAt="updated_at"}(s||(s={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.TableOfContents="table_of_contents",e.UpdatedAt="updated_at"}(o||(o={})),function(e){e.MarginPkey="margin_pkey"}(u||(u={})),function(e){e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.Img="img",e.Name="name",e.Options="options",e.PageId="page_id",e.UpdatedAt="updated_at"}(c||(c={})),function(e){e.CreatedAt="created_at",e.EndedAt="ended_at",e.Id="id",e.Img="img",e.Name="name",e.Options="options",e.PageId="page_id",e.UpdatedAt="updated_at"}(_||(_={})),function(e){e.NotePkey="note_pkey",e.UqNoteDraftIdEndedAt="uq_note_draft_id_ended_at"}(l||(l={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Name="name",e.Preview="preview",e.StaticLink="static_link",e.UpdatedAt="updated_at"}(p||(p={})),function(e){e.AuthorId="author_id",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Name="name",e.Preview="preview",e.StaticLink="static_link",e.UpdatedAt="updated_at"}(g||(g={})),function(e){e.LastSeen="last_seen",e.Name="name"}(f||(f={})),function(e){e.Asc="asc",e.AscNullsFirst="asc_nulls_first",e.AscNullsLast="asc_nulls_last",e.Desc="desc",e.DescNullsFirst="desc_nulls_first",e.DescNullsLast="desc_nulls_last"}(m||(m={})),function(e){e.PagePkey="page_pkey"}(h||(h={})),function(e){e.Content="content",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Order="order",e.UpdatedAt="updated_at"}(b||(b={})),function(e){e.Content="content",e.CreatedAt="created_at",e.DraftId="draft_id",e.EndedAt="ended_at",e.Id="id",e.Order="order",e.UpdatedAt="updated_at"}(A||(A={}));const j=I.ZP`
    query findAuthorByAuth0($auth0_id: String!) {
  author(where: {auth0_id: {_eq: $auth0_id}}) {
    id
    email
    name
    last_seen
    created_at
  }
}
    `,w=I.ZP`
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
    `,k=I.ZP`
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
    `,D=I.ZP`
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
    `,T=I.ZP`
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
    `,P=I.ZP`
    mutation deleteDraftById($id: uuid!, $ended_at: timestamptz) {
  update_draft_by_pk(pk_columns: {id: $id}, _set: {ended_at: $ended_at}) {
    id
  }
}
    `,C=I.ZP`
    query getMarginById($id: uuid!) {
  margin: margin_by_pk(id: $id) {
    id
    pageId: page_id
    img
    imgBase64
    options
  }
}
    `,N=I.ZP`
    mutation createMargin($page_id: uuid!, $created_at: timestamptz!) {
  insert_margin_one(object: {page_id: $page_id, created_at: $created_at}) {
    id
  }
}
    `,U=I.ZP`
    mutation saveMargin($id: uuid!, $updated_at: timestamptz!, $options: jsonb!, $img: bytea!, $name: String) {
  update_margin_by_pk(
    pk_columns: {id: $id}
    _set: {updated_at: $updated_at, options: $options, img: $img, name: $name}
  ) {
    updated_at
    id
  }
}
    `,S=I.ZP`
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
    `,q=I.ZP`
    mutation createNode($author_id: uuid!, $created_at: timestamptz, $draft_id: uuid!, $ended_at: timestamptz, $name: String!, $preview: jsonb, $static_link: String) {
  insert_note_one(
    object: {author_id: $author_id, created_at: $created_at, draft_id: $draft_id, ended_at: $ended_at, name: $name, preview: $preview, static_link: $static_link}
  ) {
    id
    updated_at
    created_at
  }
}
    `,Z=I.ZP`
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
    `,E=I.ZP`
    mutation updatePageById($id: uuid!, $content: jsonb!, $updated_at: timestamptz!) {
  update_page_by_pk(
    pk_columns: {id: $id}
    _set: {content: $content, updated_at: $updated_at}
  ) {
    id
  }
}
    `,L=I.ZP`
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
    `,H=I.ZP`
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
    `,B=(e,t)=>e();const x="https://inscriptum-hasura.herokuapp.com/v1/graphql";let z={credentials:"include",mode:"cors",cache:"no-cache",method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}},M=new y.GraphQLClient(x,z);$.f.pipe((0,v.P)((e=>{var t;return null!=(null===(t=e.data)||void 0===t?void 0:t.accessToken)&&!e.isLoading}))).subscribe((e=>{var t,a;console.log("API AUTH_ACTION.AUTH_DONE"),z=O.v.isAuthDisabled?Object.assign(Object.assign({},z),{headers:Object.assign(Object.assign({},z.headers),{"x-hasura-user-id":String(null===(t=e.data)||void 0===t?void 0:t.userInfo.auth0Id)})}):Object.assign(Object.assign({},z),{headers:Object.assign(Object.assign({},z.headers),{Authorization:`Bearer ${null===(a=e.data)||void 0===a?void 0:a.accessToken}`})}),M=new y.GraphQLClient(x,z)}));const F=()=>function(e,t=B){return{findAuthorByAuth0:(a,d)=>t((t=>e.request(j,a,Object.assign(Object.assign({},d),t))),"findAuthorByAuth0"),getAllDrafts:(a,d)=>t((t=>e.request(w,a,Object.assign(Object.assign({},d),t))),"getAllDrafts"),getDraftById:(a,d)=>t((t=>e.request(k,a,Object.assign(Object.assign({},d),t))),"getDraftById"),updateDraftTOC:(a,d)=>t((t=>e.request(D,a,Object.assign(Object.assign({},d),t))),"updateDraftTOC"),createNewDraft:(a,d)=>t((t=>e.request(T,a,Object.assign(Object.assign({},d),t))),"createNewDraft"),deleteDraftById:(a,d)=>t((t=>e.request(P,a,Object.assign(Object.assign({},d),t))),"deleteDraftById"),getMarginById:(a,d)=>t((t=>e.request(C,a,Object.assign(Object.assign({},d),t))),"getMarginById"),createMargin:(a,d)=>t((t=>e.request(N,a,Object.assign(Object.assign({},d),t))),"createMargin"),saveMargin:(a,d)=>t((t=>e.request(U,a,Object.assign(Object.assign({},d),t))),"saveMargin"),getAllNotes:(a,d)=>t((t=>e.request(S,a,Object.assign(Object.assign({},d),t))),"getAllNotes"),createNode:(a,d)=>t((t=>e.request(q,a,Object.assign(Object.assign({},d),t))),"createNode"),updateNode:(a,d)=>t((t=>e.request(Z,a,Object.assign(Object.assign({},d),t))),"updateNode"),updatePageById:(a,d)=>t((t=>e.request(E,a,Object.assign(Object.assign({},d),t))),"updatePageById"),addPageToDraft:(a,d)=>t((t=>e.request(L,a,Object.assign(Object.assign({},d),t))),"addPageToDraft"),deletePage:(a,d)=>t((t=>e.request(H,a,Object.assign(Object.assign({},d),t))),"deletePage")}}(M)},5467:(e,t,a)=>{a.d(t,{C:()=>n});const d="AUTH_ACTION",n={AUTH:Symbol(`[${d}] AUTH`),AUTH_DONE:Symbol(`[${d}] AUTH_DONE`),AUTH_FAIL:Symbol(`[${d}] AUTH_FAIL`)}},3e3:(e,t,a)=>{a.d(t,{f:()=>D});var d=a(5467),n=a(9048),i=a(1410),r=a(8170),s=a(6008),o=a(4035),u=a(5709),c=a(486),_=a(4713),l=a(3135),p=function(e,t,a,d){return new(a||(a=Promise))((function(n,i){function r(e){try{o(d.next(e))}catch(e){i(e)}}function s(e){try{o(d.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,s)}o((d=d.apply(e,t||[])).next())}))};let g=null;function f(){return p(this,void 0,void 0,(function*(){return null!=g?g:g=yield(0,_.ZP)({domain:"inscriptum.auth0.com",client_id:"sSGAFDwnRqJUsJw7v12KV8SAeuYtl3Cd",audience:"https://inscriptum.js.org"})}))}function m(e){return p(this,void 0,void 0,(function*(){if(l.v.isAuthDisabled)return A();const t=window.location.search;return t.includes("code=")&&t.includes("state=")?function(e){return p(this,void 0,void 0,(function*(){const t=yield f();try{(yield t.isAuthenticated())||(yield t.handleRedirectCallback()),window.history.replaceState({},document.title,e)}catch(e){throw new Error(e)}return b()}))}(e):h(e)}))}function h(e,t=!1){return p(this,void 0,void 0,(function*(){const a=sessionStorage.getItem("accessToken"),d=sessionStorage.getItem("userInfo"),n=Number(sessionStorage.getItem("expiresAt"));if(null!=a&&null!=d&&n>Date.now()){return{accessToken:a,userInfo:JSON.parse(d),expiresAt:n}}const i=yield f();return(yield i.isAuthenticated())||t||(yield i.loginWithRedirect({redirect_uri:e})),b()}))}function b(){return p(this,void 0,void 0,(function*(){const e=yield f(),t=yield e.getTokenSilently(),a=yield e.getUser();if(null==a)throw new Error("Can't find user info");const d={auth0Id:a.sub,email:a.email},n=new Date,i=n.setDate(n.getDate()+1);return sessionStorage.setItem("accessToken",t),sessionStorage.setItem("userInfo",JSON.stringify(d)),sessionStorage.setItem("expiresAt",JSON.stringify(i)),{accessToken:t,userInfo:d,expiresAt:i}}))}function A(){const e=new Date;return{accessToken:"",expiresAt:e.setDate(e.getDate()+1),userInfo:{auth0Id:"auth0|5c2b3430c12e3e5be73e5b35",email:"test@test.test"}}}const y=n.Z.$.pipe((0,s.h)((e=>d.C.AUTH===e.type)),(0,o.w)((e=>{var t;const a=null!==(t=e.payload.redirectUri)&&void 0!==t?t:`${document.location.origin}/drafts`;return(0,i.P)((()=>e.payload.silent?function(){return p(this,void 0,void 0,(function*(){return l.v.isAuthDisabled?A():h(void 0,!0)}))}():m(a))).pipe((0,u.U)((e=>({type:d.C.AUTH_DONE,payload:e}))),(0,c.K)((e=>(console.warn(e),(0,r.of)({type:d.C.AUTH_FAIL,payload:e})))))})));var $=a(4370),v=a(1993),O=a(2807),I=a(4181),j=a(9857),w=a(3018),k=a(6925);const D=(0,$.T)(n.Z.$,y).pipe((0,k.Z)(d.C),(0,v.O)({isLoading:!1}),(0,O.R)((function(e,t){switch(t.type){case d.C.AUTH:return Object.assign(Object.assign({},e),{error:null,isLoading:!0});case d.C.AUTH_DONE:return Object.assign(Object.assign({},e),{data:t.payload,isLoading:!1});case d.C.AUTH_FAIL:return Object.assign(Object.assign({},e),{error:t.payload,isLoading:!1});default:return e}})),(0,I.E)(),(0,j._)(1),(0,w.x)())},9048:(e,t,a)=>{a.d(t,{Z:()=>r});var d=a(211),n=a(5467);const i=new d.xQ;const r={$:i.asObservable(),dispatch:function(e){console.log(e),function(e){var t,a;"error"in e.payload&&Array.isArray(null===(a=null===(t=e.payload.error)||void 0===t?void 0:t.response)||void 0===a?void 0:a.errors)&&e.payload.error.response.errors.some((e=>{var t;return null===(t=e.message)||void 0===t?void 0:t.startWith("Could not verify JWT: JWTExpired")}))&&r.dispatch({type:n.C.AUTH,payload:{redirectUri:`${document.location.origin}/drafts`}})}(e),i.next(e)}}},3135:(e,t,a)=>{a.d(t,{v:()=>d});const d=Object.freeze({isDevMode:!1,isAuthDisabled:!1,nodeListFileName:"list.json"})},7848:(e,t,a)=>{a.d(t,{G:()=>u});var d=a(5467),n=a(9048),i=a(3e3),r=a(4217),s=a(9514),o=function(e,t,a,d){return new(a||(a=Promise))((function(n,i){function r(e){try{o(d.next(e))}catch(e){i(e)}}function s(e){try{o(d.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,s)}o((d=d.apply(e,t||[])).next())}))};function u(e,t=`${document.location.origin}/drafts`){return o(this,void 0,void 0,(function*(){return new Promise((a=>{i.f.pipe((0,r.q)(1)).subscribe((e=>{var a;null!=(null===(a=e.data)||void 0===a?void 0:a.accessToken)||e.isLoading||n.Z.dispatch({type:d.C.AUTH,payload:{redirectUri:t}})})),i.f.pipe((0,s.P)((e=>null!=e.data&&!e.isLoading))).subscribe((t=>{console.log("authorizedWork AUTH_ACTION.AUTH_DONE"),a(e(t.data))}))}))}))}},6925:(e,t,a)=>{a.d(t,{Z:()=>n});var d=a(6008);function n(e){return(0,d.h)((t=>Object.values(e).includes(t.type)))}}}]);