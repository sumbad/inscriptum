(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{96:function(t,e,s){"use strict";s.r(e),s.d(e,"postRouter",(function(){return n}));var a=s(22),r=s(33);class o extends r.AbstractRoute{constructor(){super(...arguments),this.$routePost=new a.a,this.$routePostsList=new a.a,this.$routeDraft=new a.a}getRouter(){return{rootPath:"/articles",routers:[{path:"/draft/*",callback:(t,e)=>this.$routeDraft.next({ctx:t,next:e})},{path:"/:id",callback:(t,e)=>this.$routePost.next({ctx:t,next:e})},{path:"",callback:(t,e)=>this.$routePostsList.next({ctx:t,next:e})},{path:"*",callback:(t,e)=>{t.handled?(t.handled=!1,e()):this.page.replace("/articles")}}]}}}const n=new o}}]);