(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{629:function(t,e,r){"use strict";r.r(e),r.d(e,"draftRouter",function(){return c});r(535);var a=r(67),s=r(532);var c=new class extends s.AbstractRoute{constructor(){super(...arguments),this.$routeEdit=new a.Subject,this.$routeDraftsList=new a.Subject}getRouter(){return{rootPath:"/articles/draft",routers:[{path:"/list",callback:(t,e)=>this.$routeDraftsList.next({ctx:t,next:e})},{path:"/*",callback:(t,e)=>{t.handled?(t.handled=!1,e()):this.page.replace("/articles/draft/list")}}]}}}}}]);