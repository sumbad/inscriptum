(window.webpackJsonp=window.webpackJsonp||[]).push([[28,31],{529:function(t,e,r){"use strict";r.r(e),r.d(e,"AbstractRouter",function(){return s});var o=r(78);class s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.querySelector("main")||document.body;this.routerOutlet=t,this.page=o.a.page;const e=this.getRouter();o.a.routing(e.rootPath,e.routers)}}},584:function(t,e,r){"use strict";r.r(e),r.d(e,"postRouter",function(){return c});r(203);var o=r(201),s=r(529);const c=new class extends s.AbstractRouter{constructor(){super(...arguments),this.$routePost=new o.Subject,this.$routePostsList=new o.Subject,this.$routeDraft=new o.Subject}getRouter(){return{rootPath:"/articles",routers:[{path:"/draft/*",callback:(t,e)=>this.$routeDraft.next({ctx:t,next:e})},{path:"/:id",callback:(t,e)=>this.$routePost.next({ctx:t,next:e})},{path:"",callback:(t,e)=>this.$routePostsList.next({ctx:t,next:e})},{path:"*",callback:(t,e)=>{t.handled?(t.handled=!1,e()):this.page.replace("/articles")}}]}}}}}]);