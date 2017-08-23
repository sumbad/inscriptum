import * as hyperHTML from 'hyperhtml';

import articles from '../../data/articles/articles';


declare const $: any;

export class AppComponent extends HTMLElement {
    private _template: any;
    public articlesWire: any[];

    constructor(public saying) {
        super();
        // this.html = hyperHTML.bind(this);
        this._template = require('./app.components.html');
    }


    connectedCallback() {
        const sayings: string[] = require('../../data/sayings.json');
        const randomIndexSay = Math.floor(Math.random() * sayings.length);
        this.saying = sayings[randomIndexSay];

        /*************************************************
      /* TODO: убрать jQuery */

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

        const articlesList = articles.sort((a, b) => {
            return (b.datePublished.getTime() - a.datePublished.getTime());
        });

        this.articlesWire = articlesList.map(article => {
            console.log(1111111111, article.name)
            return hyperHTML.wire() `<article-preview article-name="${article.name}"></article-preview>`
        });

        this._render();
    }


    _render() {
        console.log(this._template(this))
        return this._template(this, hyperHTML.bind(this));
    }
}