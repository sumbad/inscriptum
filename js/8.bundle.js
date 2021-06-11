(window.webpackJsonp=window.webpackJsonp||[]).push([[8,83],{184:function(e,a){e.exports=".navbar{display:none}@media (min-width:750px){.navbar+.docs-section{border-top-width:0}.navbar,.navbar-spacer{display:block;width:100%;height:6.5rem;background:#fff;z-index:99;border-top:1px solid #eee;border-bottom:1px solid #eee}.navbar-spacer{display:none}.navbar>.container{width:100%}.navbar-list{list-style:none;margin-bottom:0}.navbar-item{position:relative;float:left;margin-bottom:0}.navbar-link{text-transform:uppercase;font-size:11px;font-weight:600;letter-spacing:.2rem;margin-right:35px;text-decoration:none;line-height:6.5rem;color:#222}.navbar-link.active{color:#33C3F0}.has-docked-nav .navbar{position:fixed;top:0;left:0}.has-docked-nav .navbar-spacer{display:block}.has-docked-nav .navbar>.container{width:80%}}"},85:function(e,a,t){"use strict";t.r(a),t.d(a,"MenuComponent",(function(){return l}));var n=t(33),r=t(13),i=t(52),s=t(20),o=t(21),c=function(e,a,t,n){var r,i=arguments.length,s=i<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,a,t,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(i<3?r(s):i>3?r(a,t,s):r(a,t))||s);return i>3&&s&&Object.defineProperty(a,t,s),s};let l=class extends n.a{constructor(e=new o.a,a=new s.a(e,document.location.origin)){super(i.a,!1),this._storageService=e,this._authService=a,this.styles=r.e`<style>${t(184)}</style>`,this.hasAuth=!1,this._authService.$authenticated.subscribe(e=>{this.hasAuth=e||this.hasAuth})}render(){return r.e`
      ${this.styles}
      <div class="navbar-spacer"></div>
      <nav class="navbar">
        <div class="container">
          <ul class="navbar-list">
            <li class="navbar-item"><a class="navbar-link" href="/notes">Конспекты</a></li>
            <li class="navbar-item"><a class="navbar-link" href="/conference">Слайды</a></li>
            ${this.hasAuth?r.e`<li class="navbar-item"><a class="navbar-link" href="/drafts">Черновики</a></li>`:""}
          </ul>
        </div>
      </nav>
    `}};c([Object(n.e)()],l.prototype,"hasAuth",void 0),l=c([Object(n.b)("inscriptum-menu")],l)}}]);