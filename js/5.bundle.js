webpackJsonp([5],{364:function(t,e){(function(){"use strict";function t(t){i=(!t||!t.shimcssproperties)&&(S||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)")))}function e(t,e){for(var n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function n(){var t=c;requestAnimationFrame(function(){u?u(t):(d||(d=new Promise(function(t){r=t}),"complete"===document.readyState?r():document.addEventListener("readystatechange",function(){"complete"===document.readyState&&r()})),d.then(function(){t&&t()}))})}function o(){this.customStyles=[],this.enqueued=!1}function a(t){!t.enqueued&&c&&(t.enqueued=!0,n())}var i,S=!(window.ShadyDOM&&window.ShadyDOM.inUse);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?i=window.ShadyCSS.nativeCss:window.ShadyCSS?(t(window.ShadyCSS),window.ShadyCSS=void 0):t(window.WebComponents&&window.WebComponents.flags);var r,s=i,d=null,u=window.HTMLImports&&window.HTMLImports.whenReady||null,y=null,c=null;o.prototype.c=function(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),a(this))},o.prototype.b=function(t){if(t.__shadyCSSCachedStyle)return t.__shadyCSSCachedStyle;return t.getStyle?t.getStyle():t},o.prototype.a=function(){for(var t=this.customStyles,e=0;e<t.length;e++){var n=t[e];if(!n.__shadyCSSCachedStyle){var o=this.b(n);o&&(o=o.__appliedElement||o,y&&y(o),n.__shadyCSSCachedStyle=o)}}return t},o.prototype.addCustomStyle=o.prototype.c,o.prototype.getStyleForCustomStyle=o.prototype.b,o.prototype.processStyles=o.prototype.a,Object.defineProperties(o.prototype,{transformCallback:{get:function(){return y},set:function(t){y=t}},validateCallback:{get:function(){return c},set:function(t){var e=!1;c||(e=!0),c=t,e&&a(this)}}});var l=new o;window.ShadyCSS||(window.ShadyCSS={prepareTemplate:function(){},styleSubtree:function(t,n){l.a(),e(t,n)},styleElement:function(){l.a()},styleDocument:function(t){l.a(),e(document.body,t)},getComputedStyleValue:function(t,e){return(t=window.getComputedStyle(t).getPropertyValue(e))?t.trim():""},nativeCss:s,nativeShadow:S}),window.ShadyCSS.CustomStyleInterface=l}).call(this)}});