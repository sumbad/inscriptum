(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{201:function(t,e){(function(){"use strict";var t,e=null,n=window.HTMLImports&&window.HTMLImports.whenReady||null;function o(o){requestAnimationFrame((function(){n?n(o):(e||(e=new Promise((function(e){t=e})),"complete"===document.readyState?t():document.addEventListener("readystatechange",(function(){"complete"===document.readyState&&t()}))),e.then((function(){o&&o()})))}))}var S=null,i=null;function a(){this.customStyles=[],this.enqueued=!1,o((function(){window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()}))}function d(t){!t.enqueued&&i&&(t.enqueued=!0,o(i))}function s(t,e){for(var n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}a.prototype.c=function(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),d(this))},a.prototype.b=function(t){return t.__shadyCSSCachedStyle?t.__shadyCSSCachedStyle:t.getStyle?t.getStyle():t},a.prototype.a=function(){for(var t=this.customStyles,e=0;e<t.length;e++){var n=t[e];if(!n.__shadyCSSCachedStyle){var o=this.b(n);o&&(o=o.__appliedElement||o,S&&S(o),n.__shadyCSSCachedStyle=o)}}return t},a.prototype.addCustomStyle=a.prototype.c,a.prototype.getStyleForCustomStyle=a.prototype.b,a.prototype.processStyles=a.prototype.a,Object.defineProperties(a.prototype,{transformCallback:{get:function(){return S},set:function(t){S=t}},validateCallback:{get:function(){return i},set:function(t){var e=!1;i||(e=!0),i=t,e&&d(this)}}});var u,r,y=!(window.ShadyDOM&&window.ShadyDOM.inUse);function l(t){u=(!t||!t.shimcssproperties)&&(y||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(r=window.ShadyCSS.cssBuild);var w=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?u=window.ShadyCSS.nativeCss:window.ShadyCSS?(l(window.ShadyCSS),window.ShadyCSS=void 0):l(window.WebComponents&&window.WebComponents.flags);var c=u,p=new a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate:function(){},prepareTemplateDom:function(){},prepareTemplateStyles:function(){},styleSubtree:function(t,e){p.a(),s(t,e)},styleElement:function(){p.a()},styleDocument:function(t){p.a(),s(document.body,t)},getComputedStyleValue:function(t,e){return(t=window.getComputedStyle(t).getPropertyValue(e))?t.trim():""},flushCustomStyles:function(){},nativeCss:c,nativeShadow:y,cssBuild:r,disableRuntime:w}),window.ShadyCSS.CustomStyleInterface=p}).call(this)}}]);