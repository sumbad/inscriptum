(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{125:function(t,e,r){"use strict";r.r(e),r.d(e,"draftRouter",(function(){return c}));var a=r(22),s=r(32);class n extends s.AbstractRoute{constructor(){super(...arguments),this.$routeEdit=new a.a,this.$routeDraftsList=new a.a}getRouter(){return{rootPath:"/articles/draft",routers:[{path:"/list",callback:(t,e)=>this.$routeDraftsList.next({ctx:t,next:e})},{path:"/*",callback:(t,e)=>{t.handled?(t.handled=!1,e()):this.page.replace("/articles/draft/list")}}]}}}const c=new n}}]);