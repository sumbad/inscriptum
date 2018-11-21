import fontawesome from '@fortawesome/fontawesome';
import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faChevronUp from '@fortawesome/fontawesome-free-solid/faChevronUp';

import { Define, UmWebComponent } from 'components/um-web.component';
import page from 'page';
import { Router } from 'router';
import Tools from 'utils/tools';

import { PreloaderService } from '../um-preloader/service';
import { postRouter } from './router';
import template from './template';
import { hasCustomElement, importWebComponent } from 'utils/common';


fontawesome.library.add(
  faGithubSquare,
  faChevronUp,
  faBars
);


declare const $: any;



@Define('inscriptum-posts')
export class PostsComponent extends UmWebComponent {
  public routerView: any = '';
  public isPreloader = true;


  constructor(public saying) {
    super(template, require('./styles/main.scss'));

    PreloaderService.isAppLoading.debounceTime(500).subscribe((flag: boolean) => {
      if (this.isPreloader !== flag) {
        this.isPreloader = flag;
        this.render();
      }
    });
  }


  connectedCallback() {
    const html = this.wire(this, ':articles');

    this.sub = postRouter.$routePostsList.subscribe(async (d: { ctx, next }) => {
      await import('./list');
      this.routerView = html`<inscriptum-posts-list></inscriptum-posts-list>`;
      this.render();

      d.ctx.handled = true;
    });

    this.sub = postRouter.$routePost.subscribe(async (d: { ctx, next }) => {
      await import('./post');
      this.routerView = html`<inscriptum-post article-name=${d.ctx.params.id}></inscriptum-post>`;
      this.render();

      d.ctx.handled = true;
    });

    const sayings: string[] = require('../../data/sayings.json');
    const randomIndexSay = Math.floor(Math.random() * sayings.length);
    this.saying = sayings[randomIndexSay];

    const info = { some: 'data' };


    this.render();

    // TODO: убрать jQuery
    //#region 
    /* Mobile Menu ------------------------------------------------------ */
    var toggle_button = $('<a>', {
      id: 'toggle-btn',
      html: 'Menu',
      title: 'Menu',
      href: '#'
    }
    );
    var nav_wrap = $('nav#nav-wrap')
    var nav = $('ul#nav');

    /* if JS is enabled, remove the two a.mobile-btns 
    and dynamically prepend a.toggle-btn to #nav-wrap */
    nav_wrap.find('a.mobile-btn').remove();
    nav_wrap.prepend(toggle_button);

    toggle_button.on('click', function (e) {
      e.preventDefault();
      nav.slideToggle('fast');
    });

    if (toggle_button.is(':visible')) nav.addClass('mobile');
    $(window).resize(function () {
      if (toggle_button.is(':visible')) nav.addClass('mobile');
      else nav.removeClass('mobile');
    });

    $('ul#nav li a').on('click', function () {
      if (nav.hasClass('mobile')) nav.fadeOut('fast');
    });
    //#endregion
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