import { Define, UmWebComponent } from 'components/um-web.component';

import { PreloaderService } from '../um-preloader/service';
import { postRouter } from './router';
import template from './template';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { debounceTime } from 'rxjs/operators';

library.add(faGithubSquare, faChevronUp, faBars);

declare const $: any;
declare const jQuery: any;

@Define('inscriptum-posts')
export class PostsComponent extends UmWebComponent {
  public routerView: any = '';
  public isPreloader = true;

  constructor(public saying?) {
    super(template, require('./styles/main.scss'));

    PreloaderService.isAppLoading.pipe(debounceTime(500)).subscribe((flag: boolean) => {
      if (this.isPreloader !== flag) {
        this.isPreloader = flag;
        this.render();
      }
    });
  }

  connectedCallback() {
    const html = this.wire(this, ':articles');

    this.sub = postRouter.$routePostsList.subscribe(async (d: { ctx; next }) => {
      await import('./list');
      this.routerView = html`
        <inscriptum-posts-list></inscriptum-posts-list>
      `;
      this.render();

      d.ctx.handled = true;
    });

    this.sub = postRouter.$routePost.subscribe(async (d: { ctx; next }) => {
      await import('./post');
      this.routerView = html`
        <inscriptum-post article-name=${d.ctx.params.id}></inscriptum-post>
      `;
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
      html: '<i class="fas fa-bars"></i>',
      title: 'Menu',
      href: '#'
    });

    var nav_wrap = $('nav#nav-wrap');
    var nav = $('ul#nav');

    /* if JS is enabled, remove the two a.mobile-btns 
    and dynamically prepend a.toggle-btn to #nav-wrap */
    nav_wrap.find('a.mobile-btn').remove();
    nav_wrap.prepend(toggle_button);

    toggle_button.on('click', function(e) {
      e.preventDefault();
      nav.slideToggle('fast');
    });

    if (toggle_button.is(':visible')) nav.addClass('mobile');
    $(window).resize(function() {
      if (toggle_button.is(':visible')) nav.addClass('mobile');
      else nav.removeClass('mobile');
    });

    $('ul#nav li a').on('click', function() {
      if (nav.hasClass('mobile')) nav.fadeOut('fast');
    });

    /*-----------------------------------------------------------------------------------
    /*
    /* Main JS
    /*
    ----------------------------------------------------------------------------------- */

    (function($) {
      /* Smooth Scrolling
      ------------------------------------------------------ */
      $('.smoothscroll').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
          $target = $(target);

        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top
            },
            800,
            'swing',
            function() {
              window.location.hash = target;
            }
          );
      });

      /*	Back To Top Button
    ------------------------------------------------------- */
      var pxShow = 300; //height on which the button will show
      var fadeInTime = 400; //how slow/fast you want the button to show
      var fadeOutTime = 400; //how slow/fast you want the button to hide
      var scrollSpeed = 300; //how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

      // Show or hide the sticky footer button
      $(window).scroll(function() {
        if ($(window).scrollTop() >= pxShow) {
          $('#go-top').fadeIn(fadeInTime);
        } else {
          $('#go-top').fadeOut(fadeOutTime);
        }
      });
    })(jQuery);
    //#endregion

    // Replace any existing <i> tags with <svg> and set up a MutationObserver to
    // continue doing this as the DOM changes.
    dom.watch();
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
