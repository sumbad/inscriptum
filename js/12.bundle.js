webpackJsonp([12,16,17,26],{268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"UmWebComponent",function(){return u}),t.Define=function(e){return function(t){customElements.define(e,t)}};var r=n(706),o=n(269),i=n.n(o),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=l(["<style>","</style>"],["<style>","</style>"]),a=l(["","",""],["","",""]);function l(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u=function(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"open";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));c.wire=r.b,c.props={};try{c._template=e,c._style=n}catch(e){console.warn("Can not find a template!")}return c.html=o?Object(r.a)(c.attachShadow({mode:i})):Object(r.a)(c),c._style&&""!==c._style&&(c._style=Object(r.b)()(s,c._style)),c}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,HTMLElement),c(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this._initialProps(e),this.render()}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this.props[e]!==n&&(this.props[e]=n,this.render())}},{key:"_initialProps",value:function(e){var t=this;void 0!==e&&e.forEach(function(e){var n=t.getAttribute(e);void 0!==n&&null!==n&&(t.props[e]=n)})}},{key:"routing",value:function(e){e.forEach(function(e){i()(e.path,e.callback)}),i()()}},{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;this.html(a,this._style,this._template(Object(r.b)(this),e))}}]),t}()},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i=(r=['\n<div class="um-spinner-round">\n  <svg\n    class="circular"\n    viewBox="25 25 50 50"\n  >\n    <defs>\n      <linearGradient\n        x1="100%"\n        y1="10%"\n        x2="35%"\n        y2="100%"\n        id="','"\n      >\n        <stop\n          class="um-spinner-round__linear-gradient-stop"\n          offset="0%"\n        ></stop>\n        <stop\n          class="um-spinner-round__linear-gradient-stop"\n          stop-opacity="0.001"\n          offset="100%"\n        ></stop>\n      </linearGradient>\n    </defs>\n    <circle\n      class="path"\n      cx="50"\n      cy="50"\n      r="20"\n      fill="none"\n      stroke-width="3"\n      stroke="','"\n      stroke-miterlimit="10"\n    />\n  </svg>\n</div>\n'],o=['\n<div class="um-spinner-round">\n  <svg\n    class="circular"\n    viewBox="25 25 50 50"\n  >\n    <defs>\n      <linearGradient\n        x1="100%"\n        y1="10%"\n        x2="35%"\n        y2="100%"\n        id="','"\n      >\n        <stop\n          class="um-spinner-round__linear-gradient-stop"\n          offset="0%"\n        ></stop>\n        <stop\n          class="um-spinner-round__linear-gradient-stop"\n          stop-opacity="0.001"\n          offset="100%"\n        ></stop>\n      </linearGradient>\n    </defs>\n    <circle\n      class="path"\n      cx="50"\n      cy="50"\n      r="20"\n      fill="none"\n      stroke-width="3"\n      stroke="','"\n      stroke-miterlimit="10"\n    />\n  </svg>\n</div>\n'],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}})));t.default=function(e,t){return e(i,t.uuid,"url(#"+t.uuid+")")}},684:function(e,t){e.exports=":host{--um-spinner-round:#555}.um-spinner-round{position:relative;margin:0 auto;width:100px}.um-spinner-round:before{content:'';display:block;padding-top:100%}.um-spinner-round__linear-gradient-stop{stop-color:#a11919;stop-color:var(--um-spinner-round, #a11919)}.um-spinner-round .circular{animation:um-spinner-round__rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.um-spinner-round .path{stroke-dasharray:1, 50, 50;stroke-dashoffset:0;stroke-linecap:round}@keyframes um-spinner-round__rotate{100%{transform:rotate(360deg)}}\n"},696:function(e,t,n){"use strict";const r=document.defaultView;t.f=r;t.e=1;t.j=3;t.a=8;t.d=11;t.g="ownerSVGElement";t.i="http://www.w3.org/2000/svg";const o="connected";t.b=o;t.c="disconnected";t.h=/^style|textarea$/i;const i="_hyper: "+(Math.random()*new Date|0)+";";t.k=i;const c="\x3c!--"+i+"--\x3e";t.l=c},697:function(e,t,n){"use strict";t.a=((e,t)=>r(e).createElement(t));const r=e=>e.ownerDocument||e;t.b=r;t.c=(e=>r(e).createDocumentFragment());t.d=((e,t)=>r(e).createTextNode(t))},698:function(e,t,n){"use strict";var r=n(702),o=n(696),i=n(708),c=n(697);const s=i.a?(e,t)=>{e.append.apply(e,t)}:(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e.appendChild(t[r])};t.a=s;const a=new RegExp("("+r.a+"=)(['\"]?)"+o.l+"\\2","gi"),l=(e,t,n,r)=>"<"+t+n.replace(a,u)+r,u=(e,t,n)=>t+(n||'"')+o.k+(n||'"');t.b=((e,t)=>(o.g in e?m:b)(e,t.replace(r.b,l)));const f=i.c?e=>{const t=e.cloneNode(),n=e.childNodes||[],r=n.length;for(let e=0;e<r;e++)t.appendChild(f(n[e]));return t}:e=>e.cloneNode(!0),d=i.d?(e,t)=>e.importNode(t,!0):(e,t)=>f(t);t.c=d;const p=[].slice;t.d=p;t.e=(e=>h(e));let h=e=>{if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((o.f.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){const e={};h=(t=>{const n="_"+t.join(o.k);return e[n]||(e[n]=t)})}else h=(e=>e);return h(e)};const b=i.b?(e,t)=>{const n=Object(c.a)(e,"template");return n.innerHTML=t,n.content}:(e,t)=>{const n=Object(c.a)(e,"template"),r=Object(c.c)(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){const e=RegExp.$1;n.innerHTML="<table>"+t+"</table>",s(r,p.call(n.querySelectorAll(e)))}else n.innerHTML=t,s(r,p.call(n.childNodes));return r},m=i.b?(e,t)=>{const n=Object(c.c)(e),r=Object(c.b)(e).createElementNS(o.i,"svg");return r.innerHTML=t,s(n,p.call(r.childNodes)),n}:(e,t)=>{const n=Object(c.c)(e),r=Object(c.a)(e,"div");return r.innerHTML='<svg xmlns="'+o.i+'">'+t+"</svg>",s(n,p.call(r.firstChild.childNodes)),n}},699:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(696);let o=r.f.Event;try{new o("Event")}catch(e){o=function(e){const t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}const i=r.f.Map||function(){const e=[],t=[];return{get:n=>t[e.indexOf(n)],set(n,r){t[e.push(n)-1]=r}}};t.b=i;const c=r.f.WeakMap||function(){return{get:e=>e[r.k],set(e,t){Object.defineProperty(e,r.k,{configurable:!0,value:t})}}};t.c=c;const s=r.f.WeakSet||function(){const e=new c;return{add(t){e.set(t,!0)},has:t=>!0===e.get(t)}};t.d=s;const a=Array.isArray||(e=>t=>"[object Array]"===e.call(t))({}.toString);t.e=a;const l=r.k.trim||function(){return this.replace(/^\s+|\s+$/g,"")};t.f=l},700:function(e,t,n){"use strict";function r(){}t.a=r,t.b=function(e){Object.defineProperties(r.prototype,{handleEvent:{value(e){const t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:o("html",e),svg:o("svg",e),state:o("state",function(){return this.defaultState}),defaultState:{get:()=>({})},setState:{value(e){const t=this.state,n="function"==typeof e?e.call(this,t):e;for(const e in n)t[e]=n[e];this.render()}}})};const o=(e,t)=>{const n="_"+e+"$";return{get(){return this[n]||(this[e]=t.call(this,e))},set(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}}},701:function(e,t,n){"use strict";const r={},o=[],i=r.hasOwnProperty;let c=0;t.a={define:(e,t)=>{e in r||(c=o.push(e)),r[e]=t},invoke:(e,t)=>{for(let n=0;n<c;n++){let c=o[n];if(i.call(e,c))return r[c](e[c],t)}}}},702:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return s});const r="[^\\S]+[^ \\f\\n\\r\\t\\/>\"'=]+",o="<([a-z]+[a-z0-9:_-]*)((?:",i="(?:=(?:'.*?'|\".*?\"|<.+?>|\\S+))?)",c=new RegExp(o+r+i+"+)([^\\S]*/?>)","gi"),s=new RegExp(o+r+i+"*)([^\\S]*/>)","gi")},703:function(e,t,n){"use strict";t.a=i;var r=n(698),o=n(697);function i(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}i.prototype.insert=function(){const e=Object(o.c)(this.first);return Object(r.a)(e,this.childNodes),e},i.prototype.remove=function(){const e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{const n=Object(o.b)(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e}},704:function(e,t,n){"use strict";var r=n(699),o=n(696),i=n(709),c=n(698),s=n(702);const a=new r.c,l=new r.b;function u(){const e=arguments.length;for(let t=1;t<e;t++)this[t-1](arguments[t])}const f=s.c,d=(e,t,n)=>p.test(t)?e:"<"+t+n+"></"+t+">",p=/^area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr$/i;t.a=function(e){const t=a.get(this);return t&&t.template===Object(c.e)(e)?u.apply(t.updates,arguments):function(e){e=Object(c.e)(e);const t=l.get(e)||function(e){const t=[],n=e.join(o.l).replace(f,d),r=Object(c.b)(this,n);i.a.find(r,t,e.slice());const s={fragment:r,paths:t};return l.set(e,s),s}.call(this,e),n=Object(c.c)(this.ownerDocument,t.fragment),r=i.a.create(n,t.paths);a.set(this,{template:e,updates:r}),u.apply(r,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}},705:function(e,t,n){"use strict";const r=e=>e;t.a=((e,t,n,o,i)=>{const c=o||r,s=null==i?null:c(i,0);let a=0,l=0,u=t.length-1,f=t[0],d=t[u],p=n.length-1,h=n[0],b=n[p];for(;a<=u&&l<=p;)if(null==f)f=t[++a];else if(null==d)d=t[--u];else if(null==h)h=n[++l];else if(null==b)b=n[--p];else if(f==h)f=t[++a],h=n[++l];else if(d==b)d=t[--u],b=n[--p];else if(f==b)e.insertBefore(c(f,1),c(d,-0).nextSibling),f=t[++a],b=n[--p];else if(d==h)e.insertBefore(c(d,1),c(f,0)),d=t[--u],h=n[++l];else{let r=t.indexOf(h);if(r<0)e.insertBefore(c(h,1),c(f,0)),h=n[++l];else{let o=t[r];t[r]=null,e.insertBefore(c(o,1),c(f,0)),h=n[++l]}}if(a<=u||l<=p)if(a>u){const t=n[p+1],r=null==t?s:c(t,0);if(l===p)e.insertBefore(c(n[l],1),r);else{const t=e.ownerDocument.createDocumentFragment();for(;l<=p;)t.appendChild(c(n[l++],1));e.insertBefore(t,r)}}else if(null==t[a]&&a++,a===u)e.removeChild(c(t[a],-1));else{const n=e.ownerDocument.createRange();n.setStartBefore(c(t[a],-1)),n.setEndAfter(c(t[u],-1)),n.deleteContents()}return n})},706:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(700),o=n(701),i=n(707),c=n(704),s=n(705);n.d(t,"b",function(){return i.b});const a=e=>c.a.bind(e),l=o.a.define;function u(e){return arguments.length<2?null==e?Object(i.a)("html"):"string"==typeof e?Object(i.b)(null,e):"raw"in e?Object(i.a)("html")(e):"nodeType"in e?c.a.bind(e):Object(i.c)(e,"html"):("raw"in e?Object(i.a)("html"):i.b).apply(null,arguments)}u.Component=r.a,u.bind=a,u.define=l,u.diff=s.a,u.hyper=u,u.wire=i.b,Object(r.b)(i.a)},707:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"c",function(){return f});var r=n(696),o=n(699),i=n(697),c=n(698),s=n(703),a=n(704);const l=new o.c,u=e=>{let t,n,o,s,l;return function(u){u=Object(c.e)(u);let f=s!==u;return f&&(s=u,o=Object(i.c)(document),n="svg"===e?document.createElementNS(r.i,"svg"):o,l=a.a.bind(n)),l.apply(null,arguments),f&&("svg"===e&&Object(c.a)(o,c.d.call(n.childNodes)),t=d(o)),t}},f=(e,t)=>{const n=t.indexOf(":");let r=l.get(e),o=t;return-1<n&&(o=t.slice(n+1),t=t.slice(0,n)||"html"),r||l.set(e,r={}),r[o]||(r[o]=u(t))},d=e=>{const t=e.childNodes,n=t.length,i=[];for(let e=0;e<n;e++){let n=t[e];n.nodeType!==r.e&&0===o.f.call(n.textContent).length||i.push(n)}return 1===i.length?i[0]:new s.a(i)};t.b=((e,t)=>null==e?u(t||"html"):f(e,t||"html"))},708:function(e,t,n){"use strict";var r=n(697);const o=Object(r.c)(document),i="append"in o;t.a=i;const c="content"in Object(r.a)(document,"template");t.b=c,o.appendChild(Object(r.d)(o,"g")),o.appendChild(Object(r.d)(o,""));const s=1===o.cloneNode(!0).childNodes.length;t.c=s;const a="importNode"in document;t.d=a},709:function(e,t,n){"use strict";var r=n(696),o=n(700),i=n(703),c=n(710),s=n(711),a=n(701),l=n(705),u=n(697),f=n(699),d=n(698);const p=new f.d;function h(){}h.prototype=Object.create(null);const b=e=>({html:e}),m=(e,t)=>"ELEMENT_NODE"in e?e:e.constructor===i.a?1/t<0?t?e.remove():e.last:t?e.insert():e.first:m(e.render(),t),y=(e,t,n)=>{const o=e.childNodes,i=o.length;for(let s=0;s<i;s++){let i=o[s];switch(i.nodeType){case r.e:g(i,t,n),y(i,t,n);break;case r.a:i.textContent===r.k&&(n.shift(),t.push(r.h.test(e.nodeName)?c.a.create("text",e):c.a.create("any",i)));break;case r.j:r.h.test(e.nodeName)&&f.f.call(i.textContent)===r.l&&(n.shift(),t.push(c.a.create("text",e)))}}},g=(e,t,n)=>{const o=new h,i=e.attributes,s=d.d.call(i),a=[],l=s.length;for(let e=0;e<l;e++){const l=s[e];if(l.value===r.k){const e=l.name;if(!(e in o)){const r=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");o[e]=i[r]||i[r.toLowerCase()],t.push(c.a.create("attr",o[e],r))}a.push(l)}}const f=a.length;for(let t=0;t<f;t++)e.removeAttributeNode(a[t]);const p=e.nodeName;if(/^script$/i.test(p)){const t=Object(u.a)(e,p);for(let e=0;e<i.length;e++)t.setAttributeNode(i[e].cloneNode(!0));t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}},v=(e,t)=>{t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(b).then(t):Promise.resolve(a.a.invoke(e,t)).then(t)},j=e=>null!=e&&"then"in e,O=(e,t)=>{let n,c=!1;const s=p=>{switch(typeof p){case"string":case"number":case"boolean":c?n!==p&&(n=p,t[0].textContent=p):(c=!0,n=p,t=Object(l.a)(e.parentNode,t,[Object(u.d)(e,p)],m,e));break;case"object":case"undefined":if(null==p){c=!1,t=Object(l.a)(e.parentNode,t,[],m,e);break}default:if(c=!1,n=p,Object(f.e)(p))if(0===p.length)t.length&&(t=Object(l.a)(e.parentNode,t,[],m,e));else switch(typeof p[0]){case"string":case"number":case"boolean":s({html:p});break;case"object":if(Object(f.e)(p[0])&&(p=p.concat.apply([],p)),j(p[0])){Promise.all(p).then(s);break}default:t=Object(l.a)(e.parentNode,t,p,m,e)}else(e=>"ELEMENT_NODE"in e||e instanceof i.a||e instanceof o.a)(p)?t=Object(l.a)(e.parentNode,t,p.nodeType===r.d?d.d.call(p.childNodes):[p],m,e):j(p)?p.then(s):"placeholder"in p?v(p,s):"text"in p?s(String(p.text)):"any"in p?s(p.any):"html"in p?t=Object(l.a)(e.parentNode,t,d.d.call(Object(d.b)(e,[].concat(p.html).join("")).childNodes),m,e):s("length"in p?d.d.call(p):a.a.invoke(p,s))}};return s},w=(e,t,n)=>{const o=r.g in e;let i;if("style"===t)return Object(s.a)(e,n,o);if(/^on/.test(t)){let n=t.slice(2);return n===r.b||n===r.c?(k&&(k=!1,function(){const e=(e,n)=>{const o=new f.a(n),i=e.length;for(let n=0;n<i;n++){let i=e[n];i.nodeType===r.e&&t(i,o)}},t=(e,n)=>{if(p.has(e))e.dispatchEvent(n);else{const r=e.children,o=r.length;for(let e=0;e<o;e++)t(r[e],n)}};try{new MutationObserver(t=>{const n=t.length;for(let o=0;o<n;o++){let n=t[o];e(n.removedNodes,r.c),e(n.addedNodes,r.b)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",t=>{e([t.target],r.c)},!1),document.addEventListener("DOMNodeInserted",t=>{e([t.target],r.b)},!1)}}()),p.add(e)):t.toLowerCase()in e&&(n=n.toLowerCase()),t=>{i!==t&&(i&&e.removeEventListener(n,i,!1),i=t,t&&e.addEventListener(n,t,!1))}}if("data"===t||!o&&t in e)return n=>{i!==n&&(i=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};{let t=!1;const r=n.cloneNode(!0);return n=>{i!==n&&(i=n,r.value!==n&&(null==n?(t&&(t=!1,e.removeAttributeNode(r)),r.value=n):(r.value=n,t||(t=!0,e.setAttributeNode(r)))))}}},_=e=>{let t;const n=r=>{t!==r&&(t=r,"object"==typeof r&&r?j(r)?r.then(n):"placeholder"in r?v(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?d.d.call(r).join(""):a.a.invoke(r,n)):e.textContent=null==r?"":r)};return n};t.a={create:(e,t)=>{const n=[],r=t.length;for(let o=0;o<r;o++){const r=t[o],i=c.a.find(e,r.path);switch(r.type){case"any":n.push(O(i,[]));break;case"attr":n.push(w(i,r.name,r.node));break;case"text":n.push(_(i))}}return n},find:y};let k=!0},710:function(e,t,n){"use strict";var r=n(696);const o=(e,t,n)=>{e.unshift(e.indexOf.call(t.childNodes,n))};t.a={create:(e,t,n)=>({type:e,name:n,node:t,path:(e=>{const t=[];let n;switch(e.nodeType){case r.e:case r.d:n=e;break;case r.a:n=e.parentNode,o(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)o(t,n,e);return t})(t)}),find:(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e=e.childNodes[t[r]];return e}}},711:function(e,t,n){"use strict";const r=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;t.a=((e,t,n)=>{if(n){const r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),o(r,n)}return o(e.style,n)});const o=(e,t)=>{let n,o;return i=>{switch(typeof i){case"object":if(i){if("object"===n){if(!t&&o!==i)for(const t in o)t in i||(e[t]="")}else t?e.value="":e.cssText="";const c=t?{}:e;for(const e in i){const t=i[e];c[e]="number"!=typeof t||r.test(e)?t:t+"px"}n="object",t?e.value=s(o=c):o=i;break}default:o!=i&&(n="string",o=i,t?e.value=i||"":e.cssText=i||"")}}},i=/([^A-Z])([A-Z]+)/g,c=(e,t,n)=>t+"-"+n.toLowerCase(),s=e=>{const t=[];for(const n in e)t.push(n.replace(i,c),":",e[n],";");return t.join("")}},715:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"uuidv4",value:function(){var e=window.crypto||window.msCrypto;return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}}]),e}();t.a=o},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"SpinnerRound",function(){return l});var r=n(715),o=n(268),i=n(272),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var a=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,i.default,n(684),!0));return e._widthSpinner="30px",e.uuid=r.a.uuidv4(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["UmWebComponent"]),c(t,null,[{key:"observedAttributes",get:function(){return["width"]}}]),t}();l=a([Object(o.Define)("um-spinner-round")],l)}});