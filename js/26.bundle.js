webpackJsonp([26,38],{694:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"AbstractRouter",function(){return o});var r=n(272);var o=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.page=r.a.page;var t=this.getRouter();r.a.routing(t.rootPath,t.routers)}},713:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"conferenceRouter",function(){return a});var r=n(271),o=(n.n(r),n(694)),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=new(function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.$routePresentation=new r.Subject,e.$routeConference=new r.Subject,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["AbstractRouter"]),c(t,[{key:"getRouter",value:function(){var e=this;return this.rootPath="/conference",{rootPath:"/conference",routers:[{path:"/presentation/:id",callback:function(t,n){return e.$routePresentation.next({ctx:t,next:n})}},{path:"/:id",callback:function(t,n){return e.$routeConference.next({ctx:t,next:n})}},{path:"",callback:function(t,n){e.page.replace("/conference/presentation/webcomponents-common"),t.handled=!0}},{path:"*",callback:function(t,n){t.handled?(t.handled=!1,n()):e.page.replace("/conference")}}]}}}]),t}())}});