/*! For license information please see 7466.bundle.js.LICENSE.txt */
(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[7466,9367,6136],{9367:function(e,t){var r,o,n;o=[e,t],void 0===(n="function"==typeof(r=function(e,t){"use strict";var r,o,n="function"==typeof Map?new Map:(r=[],o=[],{has:function(e){return r.indexOf(e)>-1},get:function(e){return o[r.indexOf(e)]},set:function(e,t){-1===r.indexOf(e)&&(r.push(e),o.push(t))},delete:function(e){var t=r.indexOf(e);t>-1&&(r.splice(t,1),o.splice(t,1))}}),a=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){a=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!n.has(e)){var t=null,r=null,o=null,i=function(){e.clientWidth!==r&&h()},l=function(t){window.removeEventListener("resize",i,!1),e.removeEventListener("input",h,!1),e.removeEventListener("keyup",h,!1),e.removeEventListener("autosize:destroy",l,!1),e.removeEventListener("autosize:update",h,!1),Object.keys(t).forEach((function(r){e.style[r]=t[r]})),n.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",l,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",h,!1),window.addEventListener("resize",i,!1),e.addEventListener("input",h,!1),e.addEventListener("autosize:update",h,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",n.set(e,{destroy:l,update:h}),s()}function s(){var r=window.getComputedStyle(e,null);"vertical"===r.resize?e.style.resize="none":"both"===r.resize&&(e.style.resize="horizontal"),t="content-box"===r.boxSizing?-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)):parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),isNaN(t)&&(t=0),h()}function u(t){var r=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=r,e.style.overflowY=t}function c(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function d(){if(0!==e.scrollHeight){var o=c(e),n=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+t+"px",r=e.clientWidth,o.forEach((function(e){e.node.scrollTop=e.scrollTop})),n&&(document.documentElement.scrollTop=n)}}function h(){d();var t=Math.round(parseFloat(e.style.height)),r=window.getComputedStyle(e,null),n="content-box"===r.boxSizing?Math.round(parseFloat(r.height)):e.offsetHeight;if(n<t?"hidden"===r.overflowY&&(u("scroll"),d(),n="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==r.overflowY&&(u("hidden"),d(),n="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),o!==n){o=n;var i=a("autosize:resized");try{e.dispatchEvent(i)}catch(e){}}}}function l(e){var t=n.get(e);t&&t.destroy()}function s(e){var t=n.get(e);t&&t.update()}var u=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((u=function(e){return e}).destroy=function(e){return e},u.update=function(e){return e}):((u=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return i(e,t)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],l),e},u.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],s),e}),t.default=u,e.exports=t.default})?r.apply(t,o):r)||(e.exports=n)},7466:(e,t,r)=>{"use strict";r.r(t),r.d(t,{LinkBlot:()=>a});var o=r(1154),n=r(6136);class a extends o.Z{constructor(e,t){super(e),this.value=t,e.addEventListener("mouseover",a.showLinkTooltip.bind(this,this),!1),e.addEventListener("mouseout",a.hideLinkTooltip,!1)}static create(e){let t=super.create(e);e=this.sanitize(e),t.setAttribute("href",e);var r=e.substr(0,1);return"/"!=r&&"#"!=r&&"tg://"!=e.substr(0,5)&&"mailto:"!=e.substr(0,7)&&t.setAttribute("target","_blank"),t}static formats(e){return e.getAttribute("href")}static sanitize(e){const t=a.relativeUrl(e);return(0,n.sanitize)(e,["http","https","tg","mailto"])?t:"about:blank"}detach(){this.domNode.removeEventListener("mouseover",a.showLinkTooltip.bind(this,this),!1),this.domNode.removeEventListener("mouseout",a.hideLinkTooltip,!1),super.detach(),a.hideLinkTooltip()}format(e,t){if(e!==this.statics.blotName||!t)return super.format(e,t);t=a.sanitize(t),this.domNode.setAttribute("href",t),this.domNode.setAttribute("data-title",t)}static relativeUrl(e){let t=location,r=document.createElement("a");return r.href=e,t.origin!==r.origin?r.href:t.pathname!==r.pathname||t.search!==r.search?r.pathname+r.search+r.hash:t.href===r.href?r.hash||r.pathname+r.search+r.hash:r.hash}}},6136:(e,t,r)=>{"use strict";r.r(t),r.d(t,{T:()=>a,draftSave:()=>i,getPageContent:()=>l,isEdit:()=>s,updateEditableText:()=>u,sanitize:()=>d,uploadDataToBlob:()=>h,showError:()=>f,updateEditable:()=>p,storageDelete:()=>m,draftClear:()=>v});var o=r(9367),n=r.n(o);let a={apiUrl:"https://inscriptum.js.org",datetime:0,pageId:0};function i(e,t){if(!e)return!1;if(!a.pageId){var r=l(!0,t);if(e!=r)return e=r,function(e,t){try{return localStorage.setItem(e,t),!!localStorage.getItem(e)}catch(e){return!1}}("draft",r)}return!1}function l(e,t){let r=t.scroll.domNode;r.querySelectorAll("textarea,input").forEach((e=>{e.setAttribute("data-value",e.value)}));let o=r.cloneNode(!0);r.querySelectorAll("textarea,input").forEach((e=>{e.removeAttribute("data-value")})),o.querySelectorAll("textarea,input").forEach((e=>{e.value=e.getAttribute("data-value")||"",e.removeAttribute("data-value")})),u(o,!1);o.querySelectorAll("[contenteditable]").forEach((e=>e.removeAttribute("contenteditable")));o.querySelectorAll("[data-placeholder]").forEach((e=>e.removeAttribute("data-placeholder")));o.querySelectorAll("[data-label]").forEach((e=>e.removeAttribute("data-label")));o.querySelectorAll("[data-title]").forEach((e=>e.removeAttribute("data-title")));o.querySelectorAll(".editable_text").forEach((e=>e.classList.remove("editable_text")));o.querySelectorAll(".focus").forEach((e=>e.classList.remove("focus")));o.querySelectorAll(".empty").forEach((e=>e.classList.remove("empty")));o.querySelectorAll('[class=""]').forEach((e=>e.removeAttribute("class")));o.querySelectorAll(".file_progress").forEach((e=>e.remove()));if(o.querySelectorAll(".cursor_wrapper").forEach((e=>e.remove())),!e){const e=o.querySelector("h1,address");e&&e.remove();const t=o.querySelector("br.inline");return t&&t.replaceWith("\n"),{data:JSON.stringify(c(o).children),length:o.innerHTML.length}}return o.querySelectorAll("h1").forEach((e=>{e.querySelector("br")||e.append(document.createElement("br"))})),o.querySelectorAll("address").forEach((e=>{e.querySelector("br")||e.append(document.createElement("br"))})),o.innerHTML}function s(){return document.getElementsByClassName("tl_article_edit").length>0}function u(e,t){void 0===t&&(t=s()),t?e.querySelectorAll(".editable_text").forEach((e=>{let t=!1;if(e.childNodes.forEach((e=>{!t&&e&&e.classList&&(t=e.classList.contains("editable_input"))})),!t){let t=e.textContent||"",r=document.createElement("textarea");r.classList.add("editable_input"),r.setAttribute("tabindex","-1"),r.setAttribute("rows","1"),r.value=t,t||e.classList.add("empty"),e.innerHTML="",e.append(r),n()(r)}})):e.querySelectorAll(".editable_text > .editable_input").forEach((e=>{let t=e.value,r=e.parentNode;r.innerHTML="",r.textContent=t}))}function c(e){if(!e.tagName)return e.data;let t={tag:e.tagName.toLowerCase()};if(e.attributes.length){t.attrs={};for(var r=0;r<e.attributes.length;r++){let o=e.attributes[r];t.attrs[o.name]=o.value}}if(e.childNodes.length){t.children=[];for(r=0;r<e.childNodes.length;r++)t.children.push(c(e.childNodes[r]))}return t}function d(e,t){let r=document.createElement("a");r.href=e;let o=r.href.slice(0,r.href.indexOf(":"));return t.indexOf(o)>-1}function h(e){for(var t=atob(e.base64_data),r=[],o=0;o<t.length;o++)r.push(t.charCodeAt(o));return new Blob([new Uint8Array(r)],{type:e.type})}function f(e){let t=document.querySelector("#_error_msg");t.textContent=e,clearTimeout(t.to),t.classList.add("shown"),t.to=setTimeout((()=>{t.classList.remove("shown")}),3e3)}function p(e,t,r,o,n,a){if(o&&o.classList.toggle("tl_article_edit",e),u(document.body),t&&(t.enable(e),e&&t.focus()),!e&&n&&a){const e=n.querySelector("h1"),o=e?e.textContent:"",i=n.querySelector("address"),l=i?i.textContent:"",s=n.querySelector("address a"),u=s&&s.getAttribute("href");a.querySelector("h1").textContent=o,a.querySelector("address a").textContent=l,u?a.querySelector("address a").setAttribute("href",u):a.querySelector("address a").removeAttribute("href"),r.hideFormatTooltip(t),r.hideBlocksTooltip()}}function m(e){try{return localStorage.removeItem(e),!0}catch(e){return!1}}function v(){m("draft")}!function(){var e=document.querySelector("time");if(e&&a.datetime){var t=new Date(1e3*a.datetime);let r="January February March April May June July August September October November December".split(" ")[t.getMonth()],o=t.getDate();e.textContent=r+" "+(10>o?"0":"")+o+", "+t.getFullYear()}}()}}]);