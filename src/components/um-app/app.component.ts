import { AppRouter } from "router";
import { BaseComponent } from 'components/base.component';

import { PreloaderService } from '../um-preloader/service';


import '../um-editor';


declare const $: any;

let template = require('./app.component.html');



export class AppComponent extends BaseComponent {
  public routerView: any = '';
  public isPreloader = true;

  constructor(public saying) {
    super(template);

    PreloaderService.isAppLoading.subscribe((flag: boolean) => {
      if (this.isPreloader !== flag) {
        this.isPreloader = flag;
        this.render();
      }
    });
  }


  connectedCallback() {
    console.log(new Date());
    const html = this.wire();

    const sayings: string[] = require('../../data/sayings.json');
    const randomIndexSay = Math.floor(Math.random() * sayings.length);
    this.saying = sayings[randomIndexSay];

    const info = {some: 'data'};
    
    AppRouter.router.on(
      {
        'articles/:id': (params) => {
          this.routerView = html`<um-article article-name=${params.id}></um-article>`;
          this.render(this);
        },
        'articles': (params) => {
          const html = this.wire(info);
          this.routerView = html`<um-articles-list></um-articles-list>`;
          this.render(this);
        },
        'editor': (params) => {
          this.routerView = html`<um-editor></um-editor>`;
          this.render(this);
        }
      }
    );

    // set the default route
    AppRouter.router.on(() => {
      // setTimeout(() => {
      this.routerView = html`<um-articles-list></um-articles-list>`;
      this.render(this);
      // }, 3000);

    });

    // set the 404 route
    AppRouter.router.notFound(() => {
      this.routerView = html`<um-articles-list></um-articles-list>`;
      this.render(this);
    });

    AppRouter.router.resolve();

    this.render(this);

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

}