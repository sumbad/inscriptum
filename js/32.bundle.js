(window.webpackJsonp=window.webpackJsonp||[]).push([[32,41,54],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"FigureBlot",(function(){return c}));var o=r(61),n=r(62),i=r(141),a=r(90),s=r.n(a),l=r(83),d=r(67),u=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((o=o.apply(e,t||[])).next())}))};class c extends n.a{constructor(e,t){super(e),this.domNode=e,this.domWrapper=document.createElement("div"),this.domCursor=document.createElement("span"),this.domCaption=document.createElement("figcaption"),this.domWrapper.classList.add("figure_wrapper"),this.domCursor.classList.add("cursor_wrapper"),this.domCursor.setAttribute("contenteditable","true"),this.domCaption.classList.add("editable_text"),this.domCaption.setAttribute("data-placeholder","Caption (optional)"),t.caption&&(this.domCaption.innerText=t.caption),this.domNode.appendChild(this.domWrapper),this.domNode.appendChild(this.domCursor),this.domNode.appendChild(this.domCaption),setTimeout(()=>{Object(d.updateEditableText)(this.domNode)},1);let r=!1;t.image?(this.appendImgNode(t.image),r=this.uploadData(t.image)):t.video?(this.appendVideoNode(t.video),r=this.uploadData(t.video)):t.embed&&this.appendIframeNode(t.embed),r&&(this.domProgress=document.createElement("div"),this.domProgressBar=document.createElement("div"),this.domProgress.classList.add("file_progress"),this.domProgressBar.classList.add("file_progress_bar"),this.domWrapper.classList.add("loading"),this.domProgress.appendChild(this.domProgressBar),this.domWrapper.appendChild(this.domProgress),this.uploadFile(r)),this.domWrapper.onclick=()=>{if(!this.domNode.classList.contains("focus")){let e=this.offset(this.scroll);this.focus(),c.quillSetSelection(e)}},this.domCursor.onkeydown=e=>{let t=e.which||e.keyCode;if(t==i.a.keys.BACKSPACE){let t=this.offset(this.scroll);c.quillDeleteText(t,this.length()),c.quillSetSelection(t-1),e.preventDefault()}else if(t==i.a.keys.ENTER){let t=this.offset(this.scroll)+this.length();this.focus(),c.quillInsertText(t,"\n"),c.quillSetSelection(t),e.preventDefault()}},this.domCursor.onpaste=e=>{e.stopPropagation(),e.preventDefault()},this.domCaption.onkeydown=e=>{let t=e.which||e.keyCode,r=e.target;if(t==i.a.keys.ENTER){if(e.shiftKey)return;let t={start:r.selectionStart,end:r.selectionEnd},o=r.value;if(t.start!=t.end)o=o.substr(0,t.start)+o.substr(t.end),r.setSelectionRange(o.length,o.length);else if(t.end==o.length){let e=this.offset(this.scroll)+this.length();this.focus(),c.quillInsertText(e,"\n"),c.quillSetSelection(e)}e.preventDefault()}else if(t==i.a.keys.DOWN||t==i.a.keys.TAB||t==i.a.keys.RIGHT){let t={start:r.selectionStart,end:r.selectionEnd},o=r.value;if(t.start==t.end&&t.end==o.length){let t=this.offset(this.scroll)+this.length();this.focus(),c.quillSetSelection(t,0),e.preventDefault()}}else if(t==i.a.keys.LEFT||t==i.a.keys.UP){let t={start:r.selectionStart,end:r.selectionEnd};if(t.start==t.end&&0===t.start){let t=this.offset(this.scroll)-1;this.focus(),c.quillSetSelection(t,0),e.preventDefault()}}};const o=e=>{null!==e&&null!==e.target&&(this.domCaption.classList.toggle("empty",!e.target.value),s.a.update(e.target),c.draftSave())};this.domCaption.onpaste=e=>{e.stopPropagation(),o(e)},this.domCaption.onkeyup=o,this.domCaption.ondrop=o,this.domCaption.onchange=o,this.domCaption.oninput=o,this.domCaption.oncut=o,this.domCaption.onclick=e=>{e.target&&e.target.focus()}}static create(e){let t=super.create(e);return t.setAttribute("contenteditable","false"),t}appendImgNode(e){let t=document.createElement("img");return t.setAttribute("src",this.sanitize(e)),this.domWrapper.appendChild(t),t}appendVideoNode(e){let t=document.createElement("video");return t.setAttribute("src",this.sanitize(e)),t.setAttribute("preload","auto"),t.setAttribute("controls","controls"),t.addEventListener("loadeddata",(function(){this.mozHasAudio||this.webkitAudioDecodedByteCount||this.audioTracks&&this.audioTracks.length||(this.setAttribute("autoplay","autoplay"),this.setAttribute("loop","loop"),this.setAttribute("muted","muted"),this.removeAttribute("controls"),this.play())})),this.domWrapper.appendChild(t),t}appendIframeNode(e){let t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("iframe");return t.classList.add("iframe_wrap"),t.appendChild(r),r.classList.add("iframe_helper"),r.style.paddingTop="56.25%",r.appendChild(o),o.setAttribute("src",this.sanitize(e)),o.setAttribute("width","640"),o.setAttribute("height","360"),o.setAttribute("frameborder","0"),o.setAttribute("allowtransparency","true"),o.setAttribute("allowfullscreen","true"),o.setAttribute("scrolling","no"),this.domWrapper.appendChild(t),t}uploadFile(e){this.uploadFileStart(e,(e,t)=>{let r=0;t&&e&&(r=100*e/t,r=Math.min(100,r)),this.domProgressBar.style.width=r+"%"},t=>{if(t){let r=this.sanitize(t.src);if("video/"==e.type.substr(0,6)){let e=this.domWrapper.querySelector("video");e&&e.setAttribute("src",r)}else{let e=this.domWrapper.querySelector("img");e&&e.setAttribute("src",r)}this.domWrapper.classList.remove("loading"),c.draftSave()}},e=>(c.quillDeleteText(this.offset(this.scroll),this.length(),o.a.sources.SILENT),c.draftSave(),Object(d.showError)(e)))}uploadData(e){let t=null;return!!(t=e.match(/^data:(image\/gif|image\/jpe?g|image\/png|video\/mp4);base64,(.*)$/))&&{type:t[1],base64_data:t[2]}}sanitize(e){return Object(d.sanitize)(e,["http","https","data"])?e:"//:0"}static value(e){let t={caption:""},r=e.querySelector("img");r&&(t.image=r.src);let o=e.querySelector("video");o&&(t.video=o.src);let n=e.querySelector("iframe");n&&(t.embed=n.src);let i=e.querySelector("figcaption");if(i){let e=i.querySelector(".editable_input");t.caption=e?e.value:i.innerText}return t}focus(){this.domNode.classList.add("focus")}blur(){this.domNode.classList.remove("focus")}_index(e,t){if(e===this.domCaption)return 0;let r=0;return e.nodeType==e.TEXT_NODE&&(r+=t>=0?t:e.data.length),e.previousSibling?r+this._index(e.previousSibling,-1):e.parentNode?r+this._index(e.parentNode,-1):0}_position(e,t){if(e.nodeType==e.TEXT_NODE)return t<=e.data.length?[e,t]:[null,t-=e.data.length];{let r=e.firstChild;for(;r;){let e=null;if([e,t]=this._position(r,t),e)return[e,t];r=r.nextSibling}return[e,t]}}update(e){this.domCursor.innerHTML=""}index(e,t){return 0}position(e,t){return[this.domCursor,0]}uploadFileStart(e,t,r,o){return u(this,void 0,void 0,(function*(){try{const o=yield Object(l.uploadFileService)(Object(d.uploadDataToBlob)(e),t);r&&r(o)}catch(e){o&&o("Network error")}}))}}},67:function(e,t,r){"use strict";r.r(t),r.d(t,"T",(function(){return i})),r.d(t,"draftSave",(function(){return a})),r.d(t,"getPageContent",(function(){return s})),r.d(t,"isEdit",(function(){return l})),r.d(t,"updateEditableText",(function(){return d})),r.d(t,"sanitize",(function(){return c})),r.d(t,"uploadDataToBlob",(function(){return p})),r.d(t,"showError",(function(){return h})),r.d(t,"updateEditable",(function(){return f})),r.d(t,"transliterate",(function(){return m})),r.d(t,"storageDelete",(function(){return g})),r.d(t,"draftClear",(function(){return y}));var o=r(90),n=r.n(o);let i={apiUrl:"https://inscriptum.js.org",datetime:0,pageId:0};function a(e,t){if(!e)return!1;if(!i.pageId){var r=s(!0,t);if(e!=r)return e=r,function(e,t){try{return localStorage.setItem(e,t),!!localStorage.getItem(e)}catch(e){return!1}}("draft",r)}return!1}function s(e,t){let r=t.scroll.domNode;r.querySelectorAll("textarea,input").forEach(e=>{e.setAttribute("data-value",e.value)});let o=r.cloneNode(!0);r.querySelectorAll("textarea,input").forEach(e=>{e.removeAttribute("data-value")}),o.querySelectorAll("textarea,input").forEach(e=>{e.value=e.getAttribute("data-value")||"",e.removeAttribute("data-value")}),d(o,!1);o.querySelectorAll("[contenteditable]").forEach(e=>e.removeAttribute("contenteditable"));o.querySelectorAll("[data-placeholder]").forEach(e=>e.removeAttribute("data-placeholder"));o.querySelectorAll("[data-label]").forEach(e=>e.removeAttribute("data-label"));o.querySelectorAll("[data-title]").forEach(e=>e.removeAttribute("data-title"));o.querySelectorAll(".editable_text").forEach(e=>e.classList.remove("editable_text"));o.querySelectorAll(".focus").forEach(e=>e.classList.remove("focus"));o.querySelectorAll(".empty").forEach(e=>e.classList.remove("empty"));o.querySelectorAll('[class=""]').forEach(e=>e.removeAttribute("class"));o.querySelectorAll(".file_progress").forEach(e=>e.remove());if(o.querySelectorAll(".cursor_wrapper").forEach(e=>e.remove()),!e){const e=o.querySelector("h1,address");e&&e.remove();const t=o.querySelector("br.inline");return t&&t.replaceWith("\n"),{data:JSON.stringify(u(o).children),length:o.innerHTML.length}}return o.querySelectorAll("h1").forEach(e=>{e.querySelector("br")||e.append(document.createElement("br"))}),o.querySelectorAll("address").forEach(e=>{e.querySelector("br")||e.append(document.createElement("br"))}),o.innerHTML}function l(){return document.getElementsByClassName("tl_article_edit").length>0}function d(e,t){void 0===t&&(t=l()),t?e.querySelectorAll(".editable_text").forEach(e=>{let t=!1;if(e.childNodes.forEach(e=>{!t&&e&&e.classList&&(t=e.classList.contains("editable_input"))}),!t){let t=e.textContent||"",r=document.createElement("textarea");r.classList.add("editable_input"),r.setAttribute("tabindex","-1"),r.setAttribute("rows","1"),r.value=t,t||e.classList.add("empty"),e.innerHTML="",e.append(r),n()(r)}}):e.querySelectorAll(".editable_text > .editable_input").forEach(e=>{let t=e.value,r=e.parentNode;r.innerHTML="",r.textContent=t})}function u(e){if(!e.tagName)return e.data;let t={tag:e.tagName.toLowerCase()};if(e.attributes.length){t.attrs={};for(var r=0;r<e.attributes.length;r++){let o=e.attributes[r];t.attrs[o.name]=o.value}}if(e.childNodes.length){t.children=[];for(r=0;r<e.childNodes.length;r++)t.children.push(u(e.childNodes[r]))}return t}function c(e,t){let r=document.createElement("a");r.href=e;let o=r.href.slice(0,r.href.indexOf(":"));return t.indexOf(o)>-1}function p(e){for(var t=atob(e.base64_data),r=[],o=0;o<t.length;o++)r.push(t.charCodeAt(o));return new Blob([new Uint8Array(r)],{type:e.type})}function h(e){let t=document.querySelector("#_error_msg");t.textContent=e,clearTimeout(t.to),t.classList.add("shown"),t.to=setTimeout(()=>{t.classList.remove("shown")},3e3)}function f(e,t,r,o,n,i){if(o&&o.classList.toggle("tl_article_edit",e),d(document.body),t&&(t.enable(e),e&&t.focus()),!e&&n&&i){const e=n.querySelector("h1"),o=e?e.textContent:"",a=n.querySelector("address"),s=a?a.textContent:"",l=n.querySelector("address a"),d=l&&l.getAttribute("href");i.querySelector("h1").textContent=o,i.querySelector("address a").textContent=s,d?i.querySelector("address a").setAttribute("href",d):i.querySelector("address a").removeAttribute("href"),r.hideFormatTooltip(t),r.hideBlocksTooltip()}}function m(e,t=!1){const r="щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),o="shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g);for(let n=0;n<r.length;n++)e=(e=e.split(t?o[n]:r[n]).join(t?r[n]:o[n])).split(t?o[n].toUpperCase():r[n].toUpperCase()).join(t?r[n].toUpperCase():o[n].toUpperCase());return e}function g(e){try{return localStorage.removeItem(e),!0}catch(e){return!1}}function y(){g("draft")}!function(){var e=document.querySelector("time");if(e&&i.datetime){var t=new Date(1e3*i.datetime);let r="January February March April May June July August September October November December".split(" ")[t.getMonth()],o=t.getDate();e.textContent=r+" "+(10>o?"0":"")+o+", "+t.getFullYear()}}()},83:function(e,t,r){"use strict";r.r(t),r.d(t,"uploadFileService",(function(){return o}));function o(e,t){return new Promise((r,o)=>{var n=new XMLHttpRequest,i=new FormData;n.open("POST","https://api.cloudinary.com/v1_1/inscriptum/upload",!0),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.upload.addEventListener("progress",(function(e){e.lengthComputable&&t&&t(e.loaded,e.total)})),t&&t(0,1),i.append("upload_preset","cz5pibn5"),i.append("tags","browser_upload"),i.append("file",e),n.send(i),n.onreadystatechange=e=>{if(4==n.readyState&&200==n.status){var t=JSON.parse(n.responseText);console.log(1111,t),t.src=t.secure_url,r(t)}},n.onerror=function(){o(new Error("Network Error"))}})}},90:function(e,t,r){var o,n,i;
/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/n=[e,t],void 0===(i="function"==typeof(o=function(e,t){"use strict";var r,o,n="function"==typeof Map?new Map:(r=[],o=[],{has:function(e){return r.indexOf(e)>-1},get:function(e){return o[r.indexOf(e)]},set:function(e,t){-1===r.indexOf(e)&&(r.push(e),o.push(t))},delete:function(e){var t=r.indexOf(e);t>-1&&(r.splice(t,1),o.splice(t,1))}}),i=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){i=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function a(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!n.has(e)){var t,r=null,o=null,a=null,s=function(){e.clientWidth!==o&&c()},l=function(t){window.removeEventListener("resize",s,!1),e.removeEventListener("input",c,!1),e.removeEventListener("keyup",c,!1),e.removeEventListener("autosize:destroy",l,!1),e.removeEventListener("autosize:update",c,!1),Object.keys(t).forEach((function(r){e.style[r]=t[r]})),n.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",l,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",c,!1),window.addEventListener("resize",s,!1),e.addEventListener("input",c,!1),e.addEventListener("autosize:update",c,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",n.set(e,{destroy:l,update:c}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),r="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(r)&&(r=0),c()}function d(t){var r=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=r,e.style.overflowY=t}function u(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),n=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+r+"px",o=e.clientWidth,t.forEach((function(e){e.node.scrollTop=e.scrollTop})),n&&(document.documentElement.scrollTop=n)}}function c(){u();var t=Math.round(parseFloat(e.style.height)),r=window.getComputedStyle(e,null),o="content-box"===r.boxSizing?Math.round(parseFloat(r.height)):e.offsetHeight;if(o<t?"hidden"===r.overflowY&&(d("scroll"),u(),o="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==r.overflowY&&(d("hidden"),u(),o="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),a!==o){a=o;var n=i("autosize:resized");try{e.dispatchEvent(n)}catch(e){}}}}function s(e){var t=n.get(e);t&&t.destroy()}function l(e){var t=n.get(e);t&&t.update()}var d=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((d=function(e){return e}).destroy=function(e){return e},d.update=function(e){return e}):((d=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return a(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],s),e},d.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],l),e}),t.default=d,e.exports=t.default})?o.apply(t,n):o)||(e.exports=i)}}]);