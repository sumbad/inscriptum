(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{67:function(e,t,r){"use strict";r.r(t),r.d(t,"T",(function(){return a})),r.d(t,"draftSave",(function(){return l})),r.d(t,"getPageContent",(function(){return i})),r.d(t,"isEdit",(function(){return u})),r.d(t,"updateEditableText",(function(){return c})),r.d(t,"sanitize",(function(){return s})),r.d(t,"uploadDataToBlob",(function(){return f})),r.d(t,"showError",(function(){return p})),r.d(t,"updateEditable",(function(){return h})),r.d(t,"transliterate",(function(){return y})),r.d(t,"storageDelete",(function(){return v})),r.d(t,"draftClear",(function(){return m}));var n=r(90),o=r.n(n);let a={apiUrl:"https://inscriptum.js.org",datetime:0,pageId:0};function l(e,t){if(!e)return!1;if(!a.pageId){var r=i(!0,t);if(e!=r)return e=r,function(e,t){try{return localStorage.setItem(e,t),!!localStorage.getItem(e)}catch(e){return!1}}("draft",r)}return!1}function i(e,t){let r=t.scroll.domNode;r.querySelectorAll("textarea,input").forEach(e=>{e.setAttribute("data-value",e.value)});let n=r.cloneNode(!0);r.querySelectorAll("textarea,input").forEach(e=>{e.removeAttribute("data-value")}),n.querySelectorAll("textarea,input").forEach(e=>{e.value=e.getAttribute("data-value")||"",e.removeAttribute("data-value")}),c(n,!1);n.querySelectorAll("[contenteditable]").forEach(e=>e.removeAttribute("contenteditable"));n.querySelectorAll("[data-placeholder]").forEach(e=>e.removeAttribute("data-placeholder"));n.querySelectorAll("[data-label]").forEach(e=>e.removeAttribute("data-label"));n.querySelectorAll("[data-title]").forEach(e=>e.removeAttribute("data-title"));n.querySelectorAll(".editable_text").forEach(e=>e.classList.remove("editable_text"));n.querySelectorAll(".focus").forEach(e=>e.classList.remove("focus"));n.querySelectorAll(".empty").forEach(e=>e.classList.remove("empty"));n.querySelectorAll('[class=""]').forEach(e=>e.removeAttribute("class"));n.querySelectorAll(".file_progress").forEach(e=>e.remove());if(n.querySelectorAll(".cursor_wrapper").forEach(e=>e.remove()),!e){const e=n.querySelector("h1,address");e&&e.remove();const t=n.querySelector("br.inline");return t&&t.replaceWith("\n"),{data:JSON.stringify(d(n).children),length:n.innerHTML.length}}return n.querySelectorAll("h1").forEach(e=>{e.querySelector("br")||e.append(document.createElement("br"))}),n.querySelectorAll("address").forEach(e=>{e.querySelector("br")||e.append(document.createElement("br"))}),n.innerHTML}function u(){return document.getElementsByClassName("tl_article_edit").length>0}function c(e,t){void 0===t&&(t=u()),t?e.querySelectorAll(".editable_text").forEach(e=>{let t=!1;if(e.childNodes.forEach(e=>{!t&&e&&e.classList&&(t=e.classList.contains("editable_input"))}),!t){let t=e.textContent||"",r=document.createElement("textarea");r.classList.add("editable_input"),r.setAttribute("tabindex","-1"),r.setAttribute("rows","1"),r.value=t,t||e.classList.add("empty"),e.innerHTML="",e.append(r),o()(r)}}):e.querySelectorAll(".editable_text > .editable_input").forEach(e=>{let t=e.value,r=e.parentNode;r.innerHTML="",r.textContent=t})}function d(e){if(!e.tagName)return e.data;let t={tag:e.tagName.toLowerCase()};if(e.attributes.length){t.attrs={};for(var r=0;r<e.attributes.length;r++){let n=e.attributes[r];t.attrs[n.name]=n.value}}if(e.childNodes.length){t.children=[];for(r=0;r<e.childNodes.length;r++)t.children.push(d(e.childNodes[r]))}return t}function s(e,t){let r=document.createElement("a");r.href=e;let n=r.href.slice(0,r.href.indexOf(":"));return t.indexOf(n)>-1}function f(e){for(var t=atob(e.base64_data),r=[],n=0;n<t.length;n++)r.push(t.charCodeAt(n));return new Blob([new Uint8Array(r)],{type:e.type})}function p(e){let t=document.querySelector("#_error_msg");t.textContent=e,clearTimeout(t.to),t.classList.add("shown"),t.to=setTimeout(()=>{t.classList.remove("shown")},3e3)}function h(e,t,r,n,o,a){if(n&&n.classList.toggle("tl_article_edit",e),c(document.body),t&&(t.enable(e),e&&t.focus()),!e&&o&&a){const e=o.querySelector("h1"),n=e?e.textContent:"",l=o.querySelector("address"),i=l?l.textContent:"",u=o.querySelector("address a"),c=u&&u.getAttribute("href");a.querySelector("h1").textContent=n,a.querySelector("address a").textContent=i,c?a.querySelector("address a").setAttribute("href",c):a.querySelector("address a").removeAttribute("href"),r.hideFormatTooltip(t),r.hideBlocksTooltip()}}function y(e,t=!1){const r="щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),n="shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g);for(let o=0;o<r.length;o++)e=(e=e.split(t?n[o]:r[o]).join(t?r[o]:n[o])).split(t?n[o].toUpperCase():r[o].toUpperCase()).join(t?r[o].toUpperCase():n[o].toUpperCase());return e}function v(e){try{return localStorage.removeItem(e),!0}catch(e){return!1}}function m(){v("draft")}!function(){var e=document.querySelector("time");if(e&&a.datetime){var t=new Date(1e3*a.datetime);let r="January February March April May June July August September October November December".split(" ")[t.getMonth()],n=t.getDate();e.textContent=r+" "+(10>n?"0":"")+n+", "+t.getFullYear()}}()},90:function(e,t,r){var n,o,a;
/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/o=[e,t],void 0===(a="function"==typeof(n=function(e,t){"use strict";var r,n,o="function"==typeof Map?new Map:(r=[],n=[],{has:function(e){return r.indexOf(e)>-1},get:function(e){return n[r.indexOf(e)]},set:function(e,t){-1===r.indexOf(e)&&(r.push(e),n.push(t))},delete:function(e){var t=r.indexOf(e);t>-1&&(r.splice(t,1),n.splice(t,1))}}),a=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){a=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function l(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!o.has(e)){var t,r=null,n=null,l=null,i=function(){e.clientWidth!==n&&s()},u=function(t){window.removeEventListener("resize",i,!1),e.removeEventListener("input",s,!1),e.removeEventListener("keyup",s,!1),e.removeEventListener("autosize:destroy",u,!1),e.removeEventListener("autosize:update",s,!1),Object.keys(t).forEach((function(r){e.style[r]=t[r]})),o.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",u,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",s,!1),window.addEventListener("resize",i,!1),e.addEventListener("input",s,!1),e.addEventListener("autosize:update",s,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",o.set(e,{destroy:u,update:s}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),r="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(r)&&(r=0),s()}function c(t){var r=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=r,e.style.overflowY=t}function d(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),o=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+r+"px",n=e.clientWidth,t.forEach((function(e){e.node.scrollTop=e.scrollTop})),o&&(document.documentElement.scrollTop=o)}}function s(){d();var t=Math.round(parseFloat(e.style.height)),r=window.getComputedStyle(e,null),n="content-box"===r.boxSizing?Math.round(parseFloat(r.height)):e.offsetHeight;if(n<t?"hidden"===r.overflowY&&(c("scroll"),d(),n="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==r.overflowY&&(c("hidden"),d(),n="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),l!==n){l=n;var o=a("autosize:resized");try{e.dispatchEvent(o)}catch(e){}}}}function i(e){var t=o.get(e);t&&t.destroy()}function u(e){var t=o.get(e);t&&t.update()}var c=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((c=function(e){return e}).destroy=function(e){return e},c.update=function(e){return e}):((c=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return l(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e},c.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],u),e}),t.default=c,e.exports=t.default})?n.apply(t,o):n)||(e.exports=a)}}]);