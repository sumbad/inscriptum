(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{585:function(t,e,n){"use strict";n.r(e),n.d(e,"EditorComponent",function(){return P});n(535);var o=n(559),i=n(584),r=n(570),c=n(212),a=n(531),l=n(46),s=n(100),d=n.n(s),u=n(553),p=n.n(u),h=n(67),m=n(102),b=n(101),f=n(566),v=n(623),g=n(624),_=n(625),y=n(564),w=n(588);function q(t,e,n,o,i,r,c){try{var a=t[r](c),l=a.value}catch(t){return void n(t)}a.done?e(l):Promise.resolve(l).then(o,i)}function j(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var r=t.apply(e,n);function c(t){q(r,o,i,c,a,"next",t)}function a(t){q(r,o,i,c,a,"throw",t)}c(void 0)})}}function O(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["<style>","</style>"]);return O=function(){return t},t}var S=function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};o.b.add(r.g,r.c,r.i,r.j,r.n,r.h,r.d,r.l,i.b,r.k,r.m,r.f);var P=class extends c.a{constructor(){super(a.a,!1),this.styles=Object(l.e)(O(),n(661)),this.tooltip=new v.EditorTooltipComponent,this.isPreloader=!0,this.isPosted=!1,this.changedContent$=new h.BehaviorSubject(null),Object(_.a)("/css/custom_editor_fonts.css"),this._storageService=new m.a;var t=this.isPosted?"".concat(document.location.origin,"/notes"):"".concat(document.location.origin,"/drafts");this._authService=new b.a(this._storageService,t)}set flag(t){"posted"===t&&(this.isPosted=!0)}connectedCallback(){super.connectedCallback(),o.a.watch();var t=this.querySelector("#_tl_editor");this.quill=f.editor(this.tooltip,t),this._authService.$authenticated.getValue()?this.loadContent(this.quill):this._authService.$authenticated.subscribe(t=>{null!==t&&this.quill&&(t?this.loadContent(this.quill):this.isPosted?d()("/notes"):d()("/notes/drafts"))}),window.quill=this.quill;var e=new p.a;this.quill.on("text-change",t=>{e=e.compose(t),this.changedContent$.next(this.quill.getContents())}),this.changedContent$.skip(2).debounceTime(1e4).subscribe(t=>{null===t||this.isPosted||this._storageService.updateDraft(this.id,t).then(()=>{e=new p.a})})}disconnectedCallback(){window.onbeforeunload=null,this.quill=null}render(){return Object(g.default)({isPreloader:this.isPreloader,styles:this.styles,tooltip:this.tooltip},{publish:this.publish.bind(this)})}loadContent(t){var e=this;return j(function*(){var n;n=e.isPosted?(yield e._storageService.getNote(e.id)).Note.content:(yield e._storageService.getDraft(e.id)).Draft.contents,t.setContents(n),e.isPreloader=!1})()}publish(){var t=this;return j(function*(){if(void 0!==t.quill&&null!==t.quill){var e=document.querySelector(".tl_article"),n=document.querySelector(".tl_article_header"),o=document.querySelector(".tl_article_content");if(e.classList.contains("tl_article_saving"))return!1;var i=o.querySelector("h1").textContent||"",r=yield t._authService.userInfo,c=r.name||r.email||"";if(i.length<2){clearTimeout(e.to),e.classList.add("title_required"),e.to=setTimeout(()=>{e.classList.remove("title_required")},3e3),t.quill.focus();var[a]=t.quill.scroll.descendants(w.TitleBlot,0,t.quill.scroll.length());return t.quill.setSelection(a.offset(),a.length()-1),Object(y.showError)("Title is too small")}if(o.querySelectorAll('img[src^="data:"],video[src^="data:"]').length)return Object(y.showError)("Upload in progress.\nPlease wait...");if(Object(y.getPageContent)(!1,t.quill).length>65536)return Object(y.showError)("Content is too big");Object(y.updateEditable)(!1,t.quill,t.tooltip,e,o,n);var l="",s=t._removeElementsBySelectors(document.querySelector(".tl_page_wrap"),["article .ql-editor h1","article .ql-editor address","article .ql-clipboard","#_tl_link_tooltip","#_tl_tooltip","#_tl_blocks","inscriptum-editor-tooltip","aside .account_top","aside .publish_button","aside .account_bottom","aside .error_msg"]);if(e.classList.add("tl_article_saving"),null===s)return e.classList.remove("tl_article_saving"),Object(y.showError)("Content cannot be empty");var d,u=t.quill.getContents(),{content:p,image:h}=Object(_.b)(u),m=Object(y.transliterate)(i).replace(/[^a-zA-Z0-9-_]/g,"-");t.isPosted?d=(yield t._storageService.updateNote(t.id,c,m,i,u)).updateNote:(d=(yield t._storageService.createNote(c,m,i,u)).createNote,t._storageService.deleteDraft(t.id),Object(y.draftClear)()),t.isPosted=!0,t.id=d.id,window.history.pushState(d,document.title,"".concat(document.location.origin,"/editor/").concat(t.id,"/posted")),e.classList.remove("tl_article_saving"),Object(y.updateEditable)(!0,t.quill,t.tooltip,e,o,n),null!==s&&(s.querySelector("#_edit_button").href="/editor/".concat(t.id,"/posted"),l=s.outerHTML);var b='  \n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>'.concat(i,'</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">\n    <meta name="format-detection" content="telephone=no">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="MobileOptimized" content="176">\n    <meta name="HandheldFriendly" content="True">\n    <meta name="robots" content="index, follow">\n    <meta name="description" content="').concat(p,'">\n    <meta property="og:site_name" content="inscriptum">\n    <meta property="og:type" content="article">\n    <meta property="og:title" content="').concat(i,'">\n    <meta property="og:description" content="').concat(p,'">\n    <meta property="og:image" content="').concat(h,'">\n    <meta property="article:published_time" content="').concat(d.createdAt,'">\n    <meta property="article:modified_time" content="').concat(d.updatedAt,'">\n    <meta property="article:author" content="').concat(c,'">\n    <meta name="twitter:card" content="summary">\n    <meta name="twitter:title" content="').concat(i,'">\n    <meta name="twitter:description" content="').concat(p,'">\n    <meta name="twitter:image" content="').concat(h,'">\n    <link rel="shortcut icon" type="image/png" href="favicon.png">\n    <link href="/css/note.css" rel="stylesheet">\n    <link href="/css/custom_editor_fonts.css" rel="stylesheet">\n  </head>\n  <body>\n    ').concat(l,'\n  </body>\n  <script type="text/javascript" src="/js/vendor.js"><\/script>\n  <script type="text/javascript" src="/js/note.js"><\/script>\n</html>'),f=document.createElement("a"),v=new Blob([b],{type:"application/octet-stream"});f.href=window.URL.createObjectURL(v),f.download="".concat(m,".html"),f.click()}})()}_removeElementsBySelectors(t,e){if(null===t)return null;var n=t.cloneNode(!0);return e.forEach(t=>{var e=n.querySelector(t);e&&e.remove()}),n}};S([Object(c.d)()],P.prototype,"isPreloader",void 0),S([Object(c.d)()],P.prototype,"isPosted",void 0),S([Object(c.c)("data-id")],P.prototype,"id",void 0),S([Object(c.c)("data-flag")],P.prototype,"flag",null),P=S([Object(c.b)("inscriptum-editor")],P)}}]);