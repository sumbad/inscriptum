(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{595:function(e,t,r){"use strict";r.r(t),r.d(t,"PostPreviewComponent",function(){return n});r(593);var a=r(675),i=r(554),c=r(632),n=class extends i.UmWebComponent{constructor(e,t,a){super(c.default,r(676),!0),this.articleTitle=e,this.articleName=t,this.articleDate=a}static get observedAttributes(){return["article-title","article-name","article-date"]}attributeChangedCallback(e,t,r){if(t!==r)switch(e){case"article-title":this.articleTitle=r;break;case"article-name":this.articleName=r;break;case"article-date":this.articleDate=a.a.formatDate(new Date(r),"dd MMMM YYYY г.")}}};n=function(e,t,r,a){var i,c=arguments.length,n=c<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(c<3?i(n):c>3?i(t,r,n):i(t,r))||n);return c>3&&n&&Object.defineProperty(t,r,n),n}([Object(i.Define)("inscriptum-post-preview")],n)}}]);