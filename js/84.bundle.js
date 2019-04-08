(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{562:function(t,e,s){"use strict";s.r(e),s.d(e,"PreloaderService",function(){return i});var r=s(203);class i{}i.isAppLoading=new r.Subject},940:function(t,e,s){"use strict";s.r(e),s.d(e,"DraftComponent",function(){return d});var r=s(646),i=s(55),n=s(638),c=s(645),o=s(639),a=s(562),l=function(t,e,s,r){var i,n=arguments.length,c=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,s,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(c=(n<3?i(c):n>3?i(e,s,c):i(e,s))||c);return n>3&&c&&Object.defineProperty(e,s,c),c};let d=class extends r.a{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new c.a,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new o.a(t);super(n.a,!1),this._storageService=t,this._authService=e,this.html=i.a,this.draftList=[],this._subscriptions=[],this._authService.$authenticated.subscribe(t=>{t&&this._storageService.allDrafts().then(t=>{console.log(t),this.draftList=t.allDrafts,a.PreloaderService.isAppLoading.next(!1)})})}set sub(t){this._subscriptions.push(t)}render(){const t=this.draftList.map(t=>this.html`
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
    `);return this.html`${t}`}};l([Object(r.d)()],d.prototype,"draftList",void 0),d=l([Object(r.b)("inscriptum-draft-list")],d)}}]);