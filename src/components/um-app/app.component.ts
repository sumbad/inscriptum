import * as hyperHTML from 'hyperhtml';
import { AppRouter } from "router";
import { BaseComponent } from 'components/base.component';




let template = require('./app.component.html');

function templateInterpolatesParser(strings, ...interpolations) {
  let routerView = 1233333;
  // interpolations = Object.keys(interpolatedValues);
  // for(key in interpolatedValues) {
  //   console.log(1111111111111, key)
  // }
  console.log(999999999999, arguments)
}

// template({routerView:1111111111111}, templateInterpolatesParser);

declare const $: any;

export class AppComponent extends BaseComponent {
    // private _template: any;
    public routerView: any;

    constructor(public saying) {
        super(template);
    }


    connectedCallback() {
        const sayings: string[] = require('../../data/sayings.json');
        const randomIndexSay = Math.floor(Math.random() * sayings.length);
        this.saying = sayings[randomIndexSay];

        AppRouter.router.on(
            {
                'articles/:id': (params) => {
                    this.routerView = hyperHTML.wire() `<um-article article-name=${params.id}></um-article>`;
                    this.render(this);
                },
                'articles': (params) => {
                    this.routerView = hyperHTML.wire() `<um-articles-list></um-articles-list>`;
                    this.render(this);
                },
                'editor': (params) => {
                    this.routerView = hyperHTML.wire() `<um-editor></um-editor>`;
                    this.render(this);
                }
            }
        );

        // set the default route
        AppRouter.router.on(() => {
            this.routerView = hyperHTML.wire() `<um-articles-list></um-articles-list>`;
            this.render(this);
        });

        // set the 404 route
        AppRouter.router.notFound(() => {
            this.routerView = hyperHTML.wire() `<um-articles-list></um-articles-list>`;
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


    // _render() {
    //     return this._template(this, hyperHTML.bind(this));
    // }
}