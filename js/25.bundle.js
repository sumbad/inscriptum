(window.webpackJsonp=window.webpackJsonp||[]).push([[25,65],{122:function(t,e,s){"use strict";s.r(e),s.d(e,"DraftComponent",(function(){return d}));var r=s(23),i=s(13),n=s(32),a=s(18),c=s(17),o=s(48),l=function(t,e,s,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,r);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(n<3?i(a):n>3?i(e,s,a):i(e,s))||a);return n>3&&a&&Object.defineProperty(e,s,a),a};let d=class extends r.a{constructor(t=new a.a,e=new c.a(t)){super(n.a,!1),this._storageService=t,this._authService=e,this.html=i.e,this.draftList=[],this._subscriptions=[],this._authService.$authenticated.subscribe(t=>{t&&this._storageService.allDrafts().then(t=>{this.draftList=t.allDrafts,o.PreloaderService.isAppLoading.next(!1)})})}set sub(t){this._subscriptions.push(t)}render(){const t=this.draftList.map(t=>this.html`
        <section class="entry">
        
          <header class="entry-header">
            <h2 class="entry-title">
              <a href=${"/editor/"+t.id}> ${t.contents.ops[0].insert} </a> </h2>
            <div class="entry-meta">
              <ul>
                <li>${t.id}</li>
              </ul>
            </div>
          </header>
        
          <div class="entry-content">
            <slot></slot>
          </div>
        
        </section>
    `);return this.html`${t}`}};l([Object(r.e)()],d.prototype,"draftList",void 0),d=l([Object(r.b)("inscriptum-draft-list")],d)},48:function(t,e,s){"use strict";s.r(e),s.d(e,"PreloaderService",(function(){return i}));var r=s(22);class i{}i.isAppLoading=new r.a}}]);