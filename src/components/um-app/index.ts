import page from 'page';
import { Define, UmWebComponent } from "components/um-web.component";

import { PreloaderService } from '../um-preloader/service';
import template from './template';


declare const $: any;



@Define('um-app')
export class AppComponent extends UmWebComponent {
  public routerView: any = '';
  public isPreloader = true;

  constructor(public saying) {
    super(template);

    PreloaderService.isAppLoading.debounceTime(500).subscribe((flag: boolean) => {
      if (this.isPreloader !== flag) {
        this.isPreloader = flag;
        this.render();
      }
    });
  }


  connectedCallback() {
    const sayings: string[] = require('../../data/sayings.json');
    const randomIndexSay = Math.floor(Math.random() * sayings.length);
    this.saying = sayings[randomIndexSay];

    const info = { some: 'data' };

    this.routing();

    this.render();

    /*************************************************
   /************* TODO: убрать jQuery **************/

    /* Mobile Menu ------------------------------------------------------ */
    var toggle_button = $("<a>", {
      id: "toggle-btn",
      html: "Menu",
      title: "Menu",
      href: "#"
    }
    );
    var nav_wrap = $('nav#nav-wrap')
    var nav = $("ul#nav");

    /* if JS is enabled, remove the two a.mobile-btns 
    and dynamically prepend a.toggle-btn to #nav-wrap */
    nav_wrap.find('a.mobile-btn').remove();
    nav_wrap.prepend(toggle_button);

    toggle_button.on("click", function (e) {
      e.preventDefault();
      nav.slideToggle("fast");
    });

    if (toggle_button.is(':visible')) nav.addClass('mobile');
    $(window).resize(function () {
      if (toggle_button.is(':visible')) nav.addClass('mobile');
      else nav.removeClass('mobile');
    });

    $('ul#nav li a').on("click", function () {
      if (nav.hasClass('mobile')) nav.fadeOut('fast');
    });
    /*************************************************
  */
  }


  routing() {
    const html = this.wire();

    const articles = (ctx, next) => { 
      this.routerView = html`<um-articles-list></um-articles-list>`;
      this.render();
    };

    const article = (ctx, next) => {
      this.routerView = html`<um-article article-name=${ctx.params.id}></um-article>`;
      this.render();
    };

    const editor = (ctx, next) => {
      this.routerView = html`<um-editor></um-editor>`;
      this.render();
    };

    const slide = (ctx, next) => {
      window.location.href = '/slide.html';
    };

    const router = [
      {
        path: '/',
        callback: articles,
      },
      {
        path: '/articles/:id',
        callback: article
      },
      {
        path: '/articles',
        callback: articles
      },
      {
        path: '/editor',
        callback: editor
      },
      {
        path: '/slide',
        callback: slide,
        dispatch: false
      },
      {
        path: '*',
        callback: articles
      },
    ];

    super.routing(router);
  }


  render() {
    super.render({
      isPreloader: this.isPreloader,
      routerView: this.routerView,
      handleClick: this.handleClick.bind(this)
    });
  }



  handleClick(ev) {
    // this.isPreloader = !this.isPreloader;
  }

}