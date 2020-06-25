(window.webpackJsonp=window.webpackJsonp||[]).push([[25,64],{123:function(t,e,s){"use strict";s.r(e),s.d(e,"DraftComponent",(function(){return l}));var r=s(23),i=s(13),n=s(31),c=s(17),a=s(16),o=s(47),d=function(t,e,s,r){var i,n=arguments.length,c=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,s,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(n<3?i(c):n>3?i(e,s,c):i(e,s))||c);return n>3&&c&&Object.defineProperty(e,s,c),c};let l=class extends r.a{constructor(t=new c.a,e=new a.a(t)){super(n.a,!1),this._storageService=t,this._authService=e,this.html=i.e,this.draftList=[],this._subscriptions=[],this._authService.$authenticated.subscribe(t=>{t&&this._storageService.api.draft.getAll().then(t=>{this.draftList=t,o.PreloaderService.isAppLoading.next(!1)})})}set sub(t){this._subscriptions.push(t)}render(){const t=this.draftList.map(t=>this.html`
        <section class="entry">
        
          <header class="entry-header">
            <h2 class="entry-title">
              <a href=${"/editor/"+t.id}> ${t.content.ops[0].insert} </a> </h2>
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
    `);return this.html`${t}`}};d([Object(r.e)()],l.prototype,"draftList",void 0),l=d([Object(r.b)("inscriptum-draft-list")],l)},47:function(t,e,s){"use strict";s.r(e),s.d(e,"PreloaderService",(function(){return i}));var r=s(22);class i{}i.isAppLoading=new r.a}}]);