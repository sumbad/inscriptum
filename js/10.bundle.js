webpackJsonp([10,16,24,29],{267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"UmWebComponent",function(){return c}),t.Define=function(e){return function(t){customElements.define(e,t)}};var r=n(705),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(["<style>","</style>"],["<style>","</style>"]),a=s(["","",""],["","",""]);function s(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var c=function(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"open";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));s.wire=r.b,s.props={};try{s._template=e,s._style=n}catch(e){console.warn("Can not find a template!")}return s.html=o?Object(r.a)(s.attachShadow({mode:a})):Object(r.a)(s),s._style&&""!==s._style&&(s._style=Object(r.b)()(i,s._style)),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,HTMLElement),o(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this._initialProps(e),this.render()}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this.props[e]!==n&&(this.props[e]=n,this.render())}},{key:"_initialProps",value:function(e){var t=this;void 0!==e&&e.forEach(function(e){var n=t.getAttribute(e);void 0!==n&&null!==n&&(t.props[e]=n)})}},{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;this.html(a,this._style,this._template(Object(r.b)(this),e))}}]),t}()},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i=(r=['\n<section class="entry">\n\n  <header class="entry-header">\n    <h2 class="entry-title">\n      <a\n        onclick=',"\n        href=","\n      >\n        ",'\n      </a>\n    </h2>\n    <div class="entry-meta">\n      <ul>\n        <li>','</li>\n      </ul>\n    </div>\n  </header>\n\n  <div class="entry-content">\n    <slot></slot>\n  </div>\n\n</section>\n'],o=['\n<section class="entry">\n\n  <header class="entry-header">\n    <h2 class="entry-title">\n      <a\n        onclick=',"\n        href=","\n      >\n        ",'\n      </a>\n    </h2>\n    <div class="entry-meta">\n      <ul>\n        <li>','</li>\n      </ul>\n    </div>\n  </header>\n\n  <div class="entry-content">\n    <slot></slot>\n  </div>\n\n</section>\n'],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}})));t.default=function(e,t){return e(i,t.handleLink,"articles/"+t.articleName,t.articleTitle,t.articleDate)}},684:function(e,t){e.exports=".entry{padding-bottom:12px;margin-bottom:24px}.entry header{height:auto}.entry .entry-meta ul{margin:6px 0 18px;color:#B7B9BD;line-height:24px}.entry .entry-meta ul li{display:inline;margin:0;padding:0;font-size:14px;font-family:'merriweather-regular', sans-serif}.entry .entry-meta ul li a{color:#B7B9BD}.entry .entry-content-media{margin:24px 0 18px}.entry .tags{margin-top:18px;font-family:'opensans-regular', sans-serif;color:#888}.entry .tags a{font-family:'opensans-bold', sans-serif}.post-nav{margin:18px 0 6px;padding:12px 0 0 0;font:15px/30px 'opensans-light', sans-serif}.post-nav li{display:inline-block;margin:0;padding:0;width:49%;line-height:30px}.post-nav li a{color:#888}.post-nav li strong{font:16px/30px 'opensans-bold', sans-serif;text-transform:uppercase;color:#93B876;letter-spacing:0.5px;display:block}.post-nav li.next{float:right;text-align:right}.post-nav li.prev{float:left;text-align:left}.entry h2,.entry h2 a{font:31px/36px 'opensans-semibold', sans-serif;margin-bottom:0;letter-spacing:-.5px}.entry h2{color:#444;margin-bottom:18px}@media only screen and (max-width: 767px){.entry h2,.entry h2 a{font:28px/36px 'opensans-semibold', sans-serif;letter-spacing:-.5px}.entry h2,.entry .entry-meta{text-align:center}.entry .entry-meta ul{margin-top:9px}}a,a:visited{font-weight:bold;text-decoration:none;outline:0;color:#93B876;-webkit-transition:color .3s ease-in-out;-moz-transition:color .3s ease-in-out;-o-transition:color .3s ease-in-out;transition:color .3s ease-in-out}a:hover,a:focus{color:#34393A}p a,p a:visited{line-height:inherit}ul{padding:0}\n"},695:function(e,t,n){"use strict";const r=document.defaultView;t.f=r;t.e=1;t.j=3;t.a=8;t.d=11;t.g="ownerSVGElement";t.i="http://www.w3.org/2000/svg";const o="connected";t.b=o;t.c="disconnected";t.h=/^style|textarea$/i;const i="_hyper: "+(Math.random()*new Date|0)+";";t.k=i;const a="\x3c!--"+i+"--\x3e";t.l=a},696:function(e,t,n){"use strict";t.a=((e,t)=>r(e).createElement(t));const r=e=>e.ownerDocument||e;t.b=r;t.c=(e=>r(e).createDocumentFragment());t.d=((e,t)=>r(e).createTextNode(t))},697:function(e,t,n){"use strict";var r=n(701),o=n(695),i=n(707),a=n(696);const s=i.a?(e,t)=>{e.append.apply(e,t)}:(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e.appendChild(t[r])};t.a=s;const c=new RegExp("("+r.a+"=)(['\"]?)"+o.l+"\\2","gi"),l=(e,t,n,r)=>"<"+t+n.replace(c,u)+r,u=(e,t,n)=>t+(n||'"')+o.k+(n||'"');t.b=((e,t)=>(o.g in e?b:y)(e,t.replace(r.b,l)));const f=i.c?e=>{const t=e.cloneNode(),n=e.childNodes||[],r=n.length;for(let e=0;e<r;e++)t.appendChild(f(n[e]));return t}:e=>e.cloneNode(!0),d=i.d?(e,t)=>e.importNode(t,!0):(e,t)=>f(t);t.c=d;const h=[].slice;t.d=h;t.e=(e=>p(e));let p=e=>{if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((o.f.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){const e={};p=(t=>{const n="_"+t.join(o.k);return e[n]||(e[n]=t)})}else p=(e=>e);return p(e)};const y=i.b?(e,t)=>{const n=Object(a.a)(e,"template");return n.innerHTML=t,n.content}:(e,t)=>{const n=Object(a.a)(e,"template"),r=Object(a.c)(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){const e=RegExp.$1;n.innerHTML="<table>"+t+"</table>",s(r,h.call(n.querySelectorAll(e)))}else n.innerHTML=t,s(r,h.call(n.childNodes));return r},b=i.b?(e,t)=>{const n=Object(a.c)(e),r=Object(a.b)(e).createElementNS(o.i,"svg");return r.innerHTML=t,s(n,h.call(r.childNodes)),n}:(e,t)=>{const n=Object(a.c)(e),r=Object(a.a)(e,"div");return r.innerHTML='<svg xmlns="'+o.i+'">'+t+"</svg>",s(n,h.call(r.firstChild.childNodes)),n}},698:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(695);let o=r.f.Event;try{new o("Event")}catch(e){o=function(e){const t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}const i=r.f.Map||function(){const e=[],t=[];return{get:n=>t[e.indexOf(n)],set(n,r){t[e.push(n)-1]=r}}};t.b=i;const a=r.f.WeakMap||function(){return{get:e=>e[r.k],set(e,t){Object.defineProperty(e,r.k,{configurable:!0,value:t})}}};t.c=a;const s=r.f.WeakSet||function(){const e=new a;return{add(t){e.set(t,!0)},has:t=>!0===e.get(t)}};t.d=s;const c=Array.isArray||(e=>t=>"[object Array]"===e.call(t))({}.toString);t.e=c;const l=r.k.trim||function(){return this.replace(/^\s+|\s+$/g,"")};t.f=l},699:function(e,t,n){"use strict";function r(){}t.a=r,t.b=function(e){Object.defineProperties(r.prototype,{handleEvent:{value(e){const t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:o("html",e),svg:o("svg",e),state:o("state",function(){return this.defaultState}),defaultState:{get:()=>({})},setState:{value(e){const t=this.state,n="function"==typeof e?e.call(this,t):e;for(const e in n)t[e]=n[e];this.render()}}})};const o=(e,t)=>{const n="_"+e+"$";return{get(){return this[n]||(this[e]=t.call(this,e))},set(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}}},700:function(e,t,n){"use strict";const r={},o=[],i=r.hasOwnProperty;let a=0;t.a={define:(e,t)=>{e in r||(a=o.push(e)),r[e]=t},invoke:(e,t)=>{for(let n=0;n<a;n++){let a=o[n];if(i.call(e,a))return r[a](e[a],t)}}}},701:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s});const r="[^\\S]+[^ \\f\\n\\r\\t\\/>\"'=]+",o="<([a-z]+[a-z0-9:_-]*)((?:",i="(?:=(?:'.*?'|\".*?\"|<.+?>|\\S+))?)",a=new RegExp(o+r+i+"+)([^\\S]*/?>)","gi"),s=new RegExp(o+r+i+"*)([^\\S]*/>)","gi")},702:function(e,t,n){"use strict";t.a=i;var r=n(697),o=n(696);function i(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}i.prototype.insert=function(){const e=Object(o.c)(this.first);return Object(r.a)(e,this.childNodes),e},i.prototype.remove=function(){const e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{const n=Object(o.b)(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e}},703:function(e,t,n){"use strict";var r=n(698),o=n(695),i=n(708),a=n(697),s=n(701);const c=new r.c,l=new r.b;function u(){const e=arguments.length;for(let t=1;t<e;t++)this[t-1](arguments[t])}const f=s.c,d=(e,t,n)=>h.test(t)?e:"<"+t+n+"></"+t+">",h=/^area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr$/i;t.a=function(e){const t=c.get(this);return t&&t.template===Object(a.e)(e)?u.apply(t.updates,arguments):function(e){e=Object(a.e)(e);const t=l.get(e)||function(e){const t=[],n=e.join(o.l).replace(f,d),r=Object(a.b)(this,n);i.a.find(r,t,e.slice());const s={fragment:r,paths:t};return l.set(e,s),s}.call(this,e),n=Object(a.c)(this.ownerDocument,t.fragment),r=i.a.create(n,t.paths);c.set(this,{template:e,updates:r}),u.apply(r,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}},704:function(e,t,n){"use strict";const r=e=>e;t.a=((e,t,n,o,i)=>{const a=o||r,s=null==i?null:a(i,0);let c=0,l=0,u=t.length-1,f=t[0],d=t[u],h=n.length-1,p=n[0],y=n[h];for(;c<=u&&l<=h;)if(null==f)f=t[++c];else if(null==d)d=t[--u];else if(null==p)p=n[++l];else if(null==y)y=n[--h];else if(f==p)f=t[++c],p=n[++l];else if(d==y)d=t[--u],y=n[--h];else if(f==y)e.insertBefore(a(f,1),a(d,-0).nextSibling),f=t[++c],y=n[--h];else if(d==p)e.insertBefore(a(d,1),a(f,0)),d=t[--u],p=n[++l];else{let r=t.indexOf(p);if(r<0)e.insertBefore(a(p,1),a(f,0)),p=n[++l];else{let o=t[r];t[r]=null,e.insertBefore(a(o,1),a(f,0)),p=n[++l]}}if(c<=u||l<=h)if(c>u){const t=n[h+1],r=null==t?s:a(t,0);if(l===h)e.insertBefore(a(n[l],1),r);else{const t=e.ownerDocument.createDocumentFragment();for(;l<=h;)t.appendChild(a(n[l++],1));e.insertBefore(t,r)}}else if(null==t[c]&&c++,c===u)e.removeChild(a(t[c],-1));else{const n=e.ownerDocument.createRange();n.setStartBefore(a(t[c],-1)),n.setEndAfter(a(t[u],-1)),n.deleteContents()}return n})},705:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(699),o=n(700),i=n(706),a=n(703),s=n(704);n.d(t,"b",function(){return i.b});const c=e=>a.a.bind(e),l=o.a.define;function u(e){return arguments.length<2?null==e?Object(i.a)("html"):"string"==typeof e?Object(i.b)(null,e):"raw"in e?Object(i.a)("html")(e):"nodeType"in e?a.a.bind(e):Object(i.c)(e,"html"):("raw"in e?Object(i.a)("html"):i.b).apply(null,arguments)}u.Component=r.a,u.bind=c,u.define=l,u.diff=s.a,u.hyper=u,u.wire=i.b,Object(r.b)(i.a)},706:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"c",function(){return f});var r=n(695),o=n(698),i=n(696),a=n(697),s=n(702),c=n(703);const l=new o.c,u=e=>{let t,n,o,s,l;return function(u){u=Object(a.e)(u);let f=s!==u;return f&&(s=u,o=Object(i.c)(document),n="svg"===e?document.createElementNS(r.i,"svg"):o,l=c.a.bind(n)),l.apply(null,arguments),f&&("svg"===e&&Object(a.a)(o,a.d.call(n.childNodes)),t=d(o)),t}},f=(e,t)=>{const n=t.indexOf(":");let r=l.get(e),o=t;return-1<n&&(o=t.slice(n+1),t=t.slice(0,n)||"html"),r||l.set(e,r={}),r[o]||(r[o]=u(t))},d=e=>{const t=e.childNodes,n=t.length,i=[];for(let e=0;e<n;e++){let n=t[e];n.nodeType!==r.e&&0===o.f.call(n.textContent).length||i.push(n)}return 1===i.length?i[0]:new s.a(i)};t.b=((e,t)=>null==e?u(t||"html"):f(e,t||"html"))},707:function(e,t,n){"use strict";var r=n(696);const o=Object(r.c)(document),i="append"in o;t.a=i;const a="content"in Object(r.a)(document,"template");t.b=a,o.appendChild(Object(r.d)(o,"g")),o.appendChild(Object(r.d)(o,""));const s=1===o.cloneNode(!0).childNodes.length;t.c=s;const c="importNode"in document;t.d=c},708:function(e,t,n){"use strict";var r=n(695),o=n(699),i=n(702),a=n(709),s=n(710),c=n(700),l=n(704),u=n(696),f=n(698),d=n(697);const h=new f.d;function p(){}p.prototype=Object.create(null);const y=e=>({html:e}),b=(e,t)=>"ELEMENT_NODE"in e?e:e.constructor===i.a?1/t<0?t?e.remove():e.last:t?e.insert():e.first:b(e.render(),t),m=(e,t,n)=>{const o=e.childNodes,i=o.length;for(let s=0;s<i;s++){let i=o[s];switch(i.nodeType){case r.e:g(i,t,n),m(i,t,n);break;case r.a:i.textContent===r.k&&(n.shift(),t.push(r.h.test(e.nodeName)?a.a.create("text",e):a.a.create("any",i)));break;case r.j:r.h.test(e.nodeName)&&f.f.call(i.textContent)===r.l&&(n.shift(),t.push(a.a.create("text",e)))}}},g=(e,t,n)=>{const o=new p,i=e.attributes,s=d.d.call(i),c=[],l=s.length;for(let e=0;e<l;e++){const l=s[e];if(l.value===r.k){const e=l.name;if(!(e in o)){const r=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");o[e]=i[r]||i[r.toLowerCase()],t.push(a.a.create("attr",o[e],r))}c.push(l)}}const f=c.length;for(let t=0;t<f;t++)e.removeAttributeNode(c[t]);const h=e.nodeName;if(/^script$/i.test(h)){const t=Object(u.a)(e,h);for(let e=0;e<i.length;e++)t.setAttributeNode(i[e].cloneNode(!0));t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}},v=(e,t)=>{t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(y).then(t):Promise.resolve(c.a.invoke(e,t)).then(t)},w=e=>null!=e&&"then"in e,O=(e,t)=>{let n,a=!1;const s=h=>{switch(typeof h){case"string":case"number":case"boolean":a?n!==h&&(n=h,t[0].textContent=h):(a=!0,n=h,t=Object(l.a)(e.parentNode,t,[Object(u.d)(e,h)],b,e));break;case"object":case"undefined":if(null==h){a=!1,t=Object(l.a)(e.parentNode,t,[],b,e);break}default:if(a=!1,n=h,Object(f.e)(h))if(0===h.length)t.length&&(t=Object(l.a)(e.parentNode,t,[],b,e));else switch(typeof h[0]){case"string":case"number":case"boolean":s({html:h});break;case"object":if(Object(f.e)(h[0])&&(h=h.concat.apply([],h)),w(h[0])){Promise.all(h).then(s);break}default:t=Object(l.a)(e.parentNode,t,h,b,e)}else(e=>"ELEMENT_NODE"in e||e instanceof i.a||e instanceof o.a)(h)?t=Object(l.a)(e.parentNode,t,h.nodeType===r.d?d.d.call(h.childNodes):[h],b,e):w(h)?h.then(s):"placeholder"in h?v(h,s):"text"in h?s(String(h.text)):"any"in h?s(h.any):"html"in h?t=Object(l.a)(e.parentNode,t,d.d.call(Object(d.b)(e,[].concat(h.html).join("")).childNodes),b,e):s("length"in h?d.d.call(h):c.a.invoke(h,s))}};return s},j=(e,t,n)=>{const o=r.g in e;let i;if("style"===t)return Object(s.a)(e,n,o);if(/^on/.test(t)){let n=t.slice(2);return n===r.b||n===r.c?(_&&(_=!1,function(){const e=(e,n)=>{const o=new f.a(n),i=e.length;for(let n=0;n<i;n++){let i=e[n];i.nodeType===r.e&&t(i,o)}},t=(e,n)=>{if(h.has(e))e.dispatchEvent(n);else{const r=e.children,o=r.length;for(let e=0;e<o;e++)t(r[e],n)}};try{new MutationObserver(t=>{const n=t.length;for(let o=0;o<n;o++){let n=t[o];e(n.removedNodes,r.c),e(n.addedNodes,r.b)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",t=>{e([t.target],r.c)},!1),document.addEventListener("DOMNodeInserted",t=>{e([t.target],r.b)},!1)}}()),h.add(e)):t.toLowerCase()in e&&(n=n.toLowerCase()),t=>{i!==t&&(i&&e.removeEventListener(n,i,!1),i=t,t&&e.addEventListener(n,t,!1))}}if("data"===t||!o&&t in e)return n=>{i!==n&&(i=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};{let t=!1;const r=n.cloneNode(!0);return n=>{i!==n&&(i=n,r.value!==n&&(null==n?(t&&(t=!1,e.removeAttributeNode(r)),r.value=n):(r.value=n,t||(t=!0,e.setAttributeNode(r)))))}}},x=e=>{let t;const n=r=>{t!==r&&(t=r,"object"==typeof r&&r?w(r)?r.then(n):"placeholder"in r?v(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?d.d.call(r).join(""):c.a.invoke(r,n)):e.textContent=null==r?"":r)};return n};t.a={create:(e,t)=>{const n=[],r=t.length;for(let o=0;o<r;o++){const r=t[o],i=a.a.find(e,r.path);switch(r.type){case"any":n.push(O(i,[]));break;case"attr":n.push(j(i,r.name,r.node));break;case"text":n.push(x(i))}}return n},find:m};let _=!0},709:function(e,t,n){"use strict";var r=n(695);const o=(e,t,n)=>{e.unshift(e.indexOf.call(t.childNodes,n))};t.a={create:(e,t,n)=>({type:e,name:n,node:t,path:(e=>{const t=[];let n;switch(e.nodeType){case r.e:case r.d:n=e;break;case r.a:n=e.parentNode,o(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)o(t,n,e);return t})(t)}),find:(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e=e.childNodes[t[r]];return e}}},710:function(e,t,n){"use strict";const r=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;t.a=((e,t,n)=>{if(n){const r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),o(r,n)}return o(e.style,n)});const o=(e,t)=>{let n,o;return i=>{switch(typeof i){case"object":if(i){if("object"===n){if(!t&&o!==i)for(const t in o)t in i||(e[t]="")}else t?e.value="":e.cssText="";const a=t?{}:e;for(const e in i){const t=i[e];a[e]="number"!=typeof t||r.test(e)?t:t+"px"}n="object",t?e.value=s(o=a):o=i;break}default:o!=i&&(n="string",o=i,t?e.value=i||"":e.cssText=i||"")}}},i=/([^A-Z])([A-Z]+)/g,a=(e,t,n)=>t+"-"+n.toLowerCase(),s=e=>{const t=[];for(const n in e)t.push(n.replace(i,a),":",e[n],";");return t.join("")}},711:function(e,t){!function(e){"use strict";if(!e.fetch){var t={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(t.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=function(e){return e&&DataView.prototype.isPrototypeOf(e)},o=ArrayBuffer.isView||function(e){return e&&n.indexOf(Object.prototype.toString.call(e))>-1};u.prototype.append=function(e,t){e=s(e),t=c(t);var n=this.map[e];this.map[e]=n?n+","+t:t},u.prototype.delete=function(e){delete this.map[s(e)]},u.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},u.prototype.set=function(e,t){this.map[s(e)]=c(t)},u.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},u.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),l(e)},u.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),l(e)},u.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),l(e)},t.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},y.call(b.prototype),y.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},g.error=function(){var e=new g(null,{status:0,statusText:""});return e.type="error",e};var a=[301,302,303,307,308];g.redirect=function(e,t){if(-1===a.indexOf(t))throw new RangeError("Invalid status code");return new g(null,{status:t,headers:{location:e}})},e.Headers=u,e.Request=b,e.Response=g,e.fetch=function(e,n){return new Promise(function(r,o){var i=new b(e,n),a=new XMLHttpRequest;a.onload=function(){var e,t,n={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new u,e.split(/\r?\n/).forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}}),t)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;r(new g(o,n))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials&&(a.withCredentials=!0),"responseType"in a&&t.blob&&(a.responseType="blob"),i.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function c(e){return"string"!=typeof e&&(e=String(e)),e}function l(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(n[Symbol.iterator]=function(){return n}),n}function u(e){this.map={},e instanceof u?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function h(e){var t=new FileReader,n=d(t);return t.readAsArrayBuffer(e),n}function p(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(t.arrayBuffer&&t.blob&&r(e))this._bodyArrayBuffer=p(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!t.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!o(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,n,r=f(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=d(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}function b(e,t){var n,r,o=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),i.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function g(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)},712:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(279);n.n(r);var o=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)};o.router=new r(null)},714:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"formatDate",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd.MM.YYYY HH:mm";return n=(n=(n=(n=(n=(n=n.replace(/dd/g,e.pad(t.getDate().toString(),2))).replace("MMMM",["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][t.getMonth()])).replace("MM",e.pad((t.getMonth()+1).toString(),2))).replace("YYYY",t.getFullYear().toString())).replace("HH",e.pad(t.getHours().toString(),2))).replace("mm",e.pad(t.getMinutes().toString(),2))}},{key:"pad",value:function(e,t){for(;e.length<t;)e="0"+e;return e}}]),e}()},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"ArticlePreviewComponent",function(){return f});var r=n(711),o=(n.n(r),n(714)),i=n(712),a=n(267),s=n(273),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var u=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},f=function(e){function t(e,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,s.default,n(684),!0));return i.articleTitle=e,i.articleName=r,i.articleDate=o,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["UmWebComponent"]),c(t,[{key:"handleLink",value:function(e){e.preventDefault();var t=e.currentTarget.getAttribute("href");i.a.router.navigate(t)}},{key:"attributeChangedCallback",value:function(e,t,n){if(t!==n)switch(e){case"article-title":this.articleTitle=n;break;case"article-name":this.articleName=n;break;case"article-date":this.articleDate=o.a.formatDate(new Date(n),"dd MMMM YYYY г.")}}}],[{key:"observedAttributes",get:function(){return["article-title","article-name","article-date"]}}]),t}();f=u([Object(a.Define)("um-article-preview")],f)}});