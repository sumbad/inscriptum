"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[4158,2542,2533,7860,8570,298],{72542:(e,t,i)=>{i.r(t),i.d(t,{PostsComponent:()=>p});var s=i(93625),o=i(72533),a=i(17860),n=i(68570),r=i(78947),l=i(51436),c=i(51417),d=i(83507),u=function(e,t,i,s){var o,a=arguments.length,n=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n},h=function(e,t,i,s){return new(i||(i=Promise))((function(o,a){function n(e){try{l(s.next(e))}catch(e){a(e)}}function r(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,r)}l((s=s.apply(e,t||[])).next())}))};r.vI.add(c.pUg,l.mTx,l.xiG);let p=class extends s.UmWebComponent{constructor(e){super(n.default,i(15857)),this.saying=e,this.routerView="",this.isPreloader=!0,o.PreloaderService.isAppLoading.pipe((0,d.b)(500)).subscribe((e=>{this.isPreloader!==e&&(this.isPreloader=e,this.render())}))}connectedCallback(){const e=this.wire(this,":articles");this.sub=a.postRouter.$routePostsList.subscribe((t=>h(this,void 0,void 0,(function*(){yield Promise.all([i.e(5912),i.e(3693)]).then(i.bind(i,63693)),this.routerView=e`
        <inscriptum-posts-list></inscriptum-posts-list>
      `,this.render(),t.ctx.handled=!0})))),this.sub=a.postRouter.$routePost.subscribe((t=>h(this,void 0,void 0,(function*(){yield Promise.all([i.e(4606),i.e(2855)]).then(i.bind(i,22855)),this.routerView=e`
        <inscriptum-post article-name=${t.ctx.params.id}></inscriptum-post>
      `,this.render(),t.ctx.handled=!0}))));const t=i(83015),s=Math.floor(Math.random()*t.length);this.saying=t[s];this.render();var o=$("<a>",{id:"toggle-btn",html:'<i class="fas fa-bars"></i>',title:"Menu",href:"#"}),n=$("nav#nav-wrap"),l=$("ul#nav");n.find("a.mobile-btn").remove(),n.prepend(o),o.on("click",(function(e){e.preventDefault(),l.slideToggle("fast")})),o.is(":visible")&&l.addClass("mobile"),$(window).resize((function(){o.is(":visible")?l.addClass("mobile"):l.removeClass("mobile")})),$("ul#nav li a").on("click",(function(){l.hasClass("mobile")&&l.fadeOut("fast")})),function(e){e(".smoothscroll").on("click",(function(t){t.preventDefault();var i=this.hash,s=e(i);e("html, body").stop().animate({scrollTop:s.offset().top},800,"swing",(function(){window.location.hash=i}))}));e(window).scroll((function(){e(window).scrollTop()>=300?e("#go-top").fadeIn(400):e("#go-top").fadeOut(400)}))}(jQuery),r.vz.watch()}render(){super.render({isPreloader:this.isPreloader,routerView:this.routerView,handleClick:this.handleClick.bind(this)})}handleClick(e){}};p=u([(0,s.Define)("inscriptum-posts")],p)},17860:(e,t,i)=>{i.r(t),i.d(t,{postRouter:()=>n});var s=i(70211),o=i(88201);class a extends o.AbstractRoute{constructor(){super(...arguments),this.$routePost=new s.xQ,this.$routePostsList=new s.xQ}getRouter(){const e="/articles";return{rootPath:e,routers:[{path:"/:id",callback:(e,t)=>this.$routePost.next({ctx:e,next:t})},{path:"",callback:(e,t)=>this.$routePostsList.next({ctx:e,next:t})},{path:"*",callback:(t,i)=>{t.handled?(t.handled=!1,i()):this.page.replace(e)}}]}}}const n=new a},68570:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const s=(e,t)=>e`

<um-preloader loading=${t.isPreloader}>
  <!-- <template> -->
  <div id="app">
    <!-- Header ================================================== -->
    <header id="top">
      <div class="row">
        <div class="header-content twelve columns">
          <h1 id="logo-text">
            <a href="/" onclick=${t.handleClick} title="">inscriptum</a>
          </h1>
          <p id="intro" v-html="saying"></p>
        </div>
      </div>

      <nav id="nav-wrap">
        <a class="mobile-btn fas fa-bars" href="#nav-wrap" title="Show navigation">Show Menu</a>
        <a class="mobile-btn" href="#" title="Hide navigation">Hide Menu</a>

        <!--<a class="mobile-btn" href="#nav-wrap" title="Показать меню">Показать меню</a>
                        <a class="mobile-btn" href="#" title="Скрыть меню">Скрыть меню</a>-->
        <div class="row">
          <ul id="nav" class="nav">
            <li class="current">
              <a href="/articles">Статьи</a>
            </li>
            <li>
              <a href="/conference">Слайды</a>
            </li>
          </ul>
          <!-- end #nav -->
        </div>
      </nav>
      <!-- end #nav-wrap -->
    </header>
    <!-- Header End -->

    <!-- Content ================================================== -->
    <div id="content-wrap">
      <div class="row">
        <div id="main" class="twelve columns">
          ${t.routerView}
        </div>
      </div>
    </div>
    <!-- end content-wrap -->
  </div>
  <!-- </template> -->

  <!-- Footer
      ================================================== -->
  <footer>

    <div class="row">
      <div class="twelve columns">
        <ul class="social-links">
          <li>
            <a href="https://github.com/sumbad/">
              <i class="fab fa-github-square"></i>
            </a>
          </li>
        </ul>
      </div>
      <p class="copyright">&copy; Copyright 2017 Денис Сумбаев
      </p>
    </div>
    <!-- End row -->

    <div id="go-top">
      <a class="smoothscroll" title="Back to Top" href="#top">
        <i class="fas fa-chevron-up"></i>
      </a>
    </div>

  </footer>
  <!-- End Footer-->

</um-preloader>
`},72533:(e,t,i)=>{i.r(t),i.d(t,{PreloaderService:()=>o});var s=i(70211);class o{}o.isAppLoading=new s.xQ},83015:e=>{e.exports=JSON.parse('["Лучше износиться, чем заржаветь...<br> (Джордж Уойфилд, англ. проповедник-методист)","Best friends come in all sizes.","DO YOUR WORK. DON\'T BE STUPID"]')}}]);