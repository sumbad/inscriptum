webpackJsonp([41],{140:function(e,t,n){"use strict";t.a=s,t.b=function(e){const t=new r.c,n=Object.create;Object.defineProperties(s,{for:{configurable:!0,value(e,s){const o=t.get(e)||(e=>{const n={w:null,p:null};return t.set(e,n),n})(e);return((e,t,s)=>{switch(typeof s){case"object":case"function":const o=t.w||(t.w=new r.c);return o.get(s)||((e,t,n)=>(e.set(t,n),n))(o,s,new e);default:const i=t.p||(t.p=n(null));return i[s]||(i[s]=new e)}})(this,o,null==s?"default":s)}}}),Object.defineProperties(s.prototype,{handleEvent:{value(e){const t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:o("html",e),svg:o("svg",e),state:o("state",function(){return this.defaultState}),defaultState:{get:()=>({})},setState:{value(e,t){const n=this.state,r="function"==typeof e?e.call(this,n):e;for(const e in r)n[e]=r[e];return!1!==t&&this.render(),this}}})};n(35);var r=n(69);function s(){}const o=(e,t)=>{const n="_"+e+"$";return{get(){return this[n]||(this[e]=t.call(this,e))},set(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}}},141:function(e,t,n){"use strict";const r={},s=[],o=r.hasOwnProperty;let i=0;t.a={define:(e,t)=>{e in r||(i=s.push(e)),r[e]=t},invoke:(e,t)=>{for(let n=0;n<i;n++){let i=s[n];if(o.call(e,i))return r[i](e[i],t)}}}},142:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return a});const r=" \\f\\n\\r\\t",s="[ "+r+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",o="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",i="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",c=new RegExp(o+s+i+"+)([ "+r+"]*/?>)","g"),a=new RegExp(o+s+i+"*)([ "+r+"]*/>)","g")},143:function(e,t,n){"use strict";t.a=o;var r=n(70),s=n(52);function o(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}o.prototype.insert=function(){const e=Object(s.c)(this.first);return Object(r.a)(e,this.childNodes),e},o.prototype.remove=function(){const e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{const n=Object(s.b)(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e}},144:function(e,t,n){"use strict";var r=n(69),s=n(35),o=n(298),i=n(70),c=n(142);const a=new r.c,l=new r.b;function u(){const e=arguments.length;for(let t=1;t<e;t++)this[t-1](arguments[t])}const p=c.c,d=(e,t,n)=>s.m.test(t)?e:"<"+t+n+"></"+t+">";t.a=function(e){const t=a.get(this);return t&&t.template===Object(i.e)(e)?u.apply(t.updates,arguments):function(e){e=Object(i.e)(e);const t=l.get(e)||function(e){const t=[],n=e.join(s.l).replace(p,d),r=Object(i.b)(this,n);o.a.find(r,t,e.slice());const c={fragment:r,paths:t};return l.set(e,c),c}.call(this,e),n=Object(i.c)(this.ownerDocument,t.fragment),r=o.a.create(n,t.paths);a.set(this,{template:e,updates:r}),u.apply(r,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}},145:function(e,t,n){"use strict";
/*! (c) 2017 Andrea Giammarchi (ISC) */const r=e=>e;t.a=((e,t,n,s,o)=>{const i=s||r,c=null==o?null:i(o,0);let a=0,l=0,u=t.length-1,p=t[0],d=t[u],f=n.length-1,m=n[0],h=n[f];for(;a<=u&&l<=f;)if(null==p)p=t[++a];else if(null==d)d=t[--u];else if(null==m)m=n[++l];else if(null==h)h=n[--f];else if(p==m)p=t[++a],m=n[++l];else if(d==h)d=t[--u],h=n[--f];else if(p==h)e.insertBefore(i(p,1),i(d,-0).nextSibling),p=t[++a],h=n[--f];else if(d==m)e.insertBefore(i(d,1),i(p,0)),d=t[--u],m=n[++l];else{let r=t.indexOf(m);if(r<0)e.insertBefore(i(m,1),i(p,0)),m=n[++l];else{let s=t[r];t[r]=null,e.insertBefore(i(s,1),i(p,0)),m=n[++l]}}if(a<=u||l<=f)if(a>u){const t=n[f+1],r=null==t?c:i(t,0);if(l===f)e.insertBefore(i(n[l],1),r);else{const t=e.ownerDocument.createDocumentFragment();for(;l<=f;)t.appendChild(i(n[l++],1));e.insertBefore(t,r)}}else if(null==t[a]&&a++,a===u)e.removeChild(i(t[a],-1));else{const n=e.ownerDocument.createRange();n.setStartBefore(i(t[a],-1)),n.setEndAfter(i(t[u],-1)),n.deleteContents()}return n})},281:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),t.b=u;var r=n(140),s=n(141),o=n(296),i=n(144),c=n(145);n.d(t,"c",function(){return o.b});
/*! (c) Andrea Giammarchi (ISC) */
const a=e=>i.a.bind(e),l=s.a.define;function u(e){return arguments.length<2?null==e?Object(o.a)("html"):"string"==typeof e?u.wire(null,e):"raw"in e?Object(o.a)("html")(e):"nodeType"in e?u.bind(e):Object(o.c)(e,"html"):("raw"in e?Object(o.a)("html"):u.wire).apply(null,arguments)}u.Component=r.a,u.bind=a,u.define=l,u.diff=c.a,u.hyper=u,u.wire=o.b,Object(r.b)(o.a)},285:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"importWebComponent",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==customElements.get(t)){e.next=8;break}return e.next=3,n(414)("./"+r);case 3:return e.next=5,customElements.whenDefined(t);case 5:return e.abrupt("return",e.sent);case 8:return e.abrupt("return");case 9:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(s,o){try{var i=t[s](o),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}("next")})});return function(e,n){return t.apply(this,arguments)}}()},{key:"uuidv4",value:function(){var e=window.crypto||window.msCrypto;return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}}]),e}();t.a=s},294:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(170),s=n.n(r),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,null,[{key:"routing",value:function(e){setTimeout(function(){s.a.stop(),e.forEach(function(e){s()(e.path,e.callback)}),s.a.start()})}}]),e}()},295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(281),s=n(146),o=n(294),i=n(285),c=this,a=u(['\n<link href="/css/fontawesome_all.css" rel="stylesheet" />\n<inscriptum-posts></inscriptum-posts>\n    '],['\n<link href="/css/fontawesome_all.css" rel="stylesheet" />\n<inscriptum-posts></inscriptum-posts>\n    ']),l=u(['\n<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />\n<inscriptum-presentation></inscriptum-presentation>\n    '],['\n<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />\n<inscriptum-presentation></inscriptum-presentation>\n    ']);function u(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(s,o){try{var i=t[s](o),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}("next")})}}var d,f,m,h=void 0,b=document.querySelector("main");if(null!==b){var g=r.b.bind(b),v=(f=p(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.importWebComponent("inscriptum-posts","posts");case 2:return e.next=4,i.a.importWebComponent("um-preloader","um-preloader");case 4:g(a),n();case 6:case"end":return e.stop()}},e,c)})),function(e,t){return f.apply(this,arguments)}),y=(d=p(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.importWebComponent("inscriptum-presentation","presentation");case 2:g(l);case 3:case"end":return e.stop()}},e,c)})),function(e,t){return d.apply(this,arguments)});h=[{path:"/presentation",callback:y},{path:"/articles",callback:v},{path:"*",callback:v}]}s.default.then((m=p(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o.a.routing(h);case 1:case"end":return e.stop()}},e,c)})),function(e){return m.apply(this,arguments)})).catch(function(e){console.warn(e)})},296:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"c",function(){return p});var r=n(35),s=n(69),o=n(52),i=n(70),c=n(143),a=n(144);const l=new s.c,u=e=>{let t,n,s,c,l;return function(u){u=Object(i.e)(u);let p=c!==u;return p&&(c=u,s=Object(o.c)(document),n="svg"===e?document.createElementNS(r.i,"svg"):s,l=a.a.bind(n)),l.apply(null,arguments),p&&("svg"===e&&Object(i.a)(s,i.d.call(n.childNodes)),t=d(s)),t}},p=(e,t)=>{const n=t.indexOf(":");let r=l.get(e),s=t;return-1<n&&(s=t.slice(n+1),t=t.slice(0,n)||"html"),r||l.set(e,r={}),r[s]||(r[s]=u(t))},d=e=>{const t=e.childNodes,n=t.length,o=[];for(let e=0;e<n;e++){let n=t[e];n.nodeType!==r.e&&0===s.f.call(n.textContent).length||o.push(n)}return 1===o.length?o[0]:new c.a(o)};t.b=((e,t)=>null==e?u(t||"html"):p(e,t||"html"))},297:function(e,t,n){"use strict";var r=n(52);const s=Object(r.c)(document),o="append"in s;t.a=o;const i="content"in Object(r.a)(document,"template");t.b=i,s.appendChild(Object(r.d)(s,"g")),s.appendChild(Object(r.d)(s,""));const c=1===s.cloneNode(!0).childNodes.length;t.c=c;const a="importNode"in document;t.d=a},298:function(e,t,n){"use strict";var r=n(35),s=n(140),o=n(143),i=n(299),c=n(300),a=n(141),l=n(145),u=n(52),p=n(69),d=n(70);const f=new p.d;function m(){}m.prototype=Object.create(null);const h=e=>({html:e}),b=(e,t)=>"ELEMENT_NODE"in e?e:e.constructor===o.a?1/t<0?t?e.remove():e.last:t?e.insert():e.first:b(e.render(),t),g=(e,t,n)=>{const s=e.childNodes,o=s.length;for(let c=0;c<o;c++){let o=s[c];switch(o.nodeType){case r.e:v(o,t,n),g(o,t,n);break;case r.a:o.textContent===r.k&&(n.shift(),t.push(r.h.test(e.nodeName)?i.a.create("text",e):i.a.create("any",o)));break;case r.j:r.h.test(e.nodeName)&&p.f.call(o.textContent)===r.l&&(n.shift(),t.push(i.a.create("text",e)))}}},v=(e,t,n)=>{const s=new m,o=e.attributes,c=d.d.call(o),a=[],l=c.length;for(let e=0;e<l;e++){const l=c[e];if(l.value===r.k){const e=l.name;if(!(e in s)){const r=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");s[e]=o[r]||o[r.toLowerCase()],t.push(i.a.create("attr",s[e],r))}a.push(l)}}const p=a.length;for(let t=0;t<p;t++)e.removeAttributeNode(a[t]);const f=e.nodeName;if(/^script$/i.test(f)){const t=Object(u.a)(e,f);for(let e=0;e<o.length;e++)t.setAttributeNode(o[e].cloneNode(!0));t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}},y=(e,t)=>{t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(h).then(t):Promise.resolve(a.a.invoke(e,t)).then(t)},w=e=>null!=e&&"then"in e,j=(e,t)=>{let n,i=!1;const c=f=>{switch(typeof f){case"string":case"number":case"boolean":i?n!==f&&(n=f,t[0].textContent=f):(i=!0,n=f,t=Object(l.a)(e.parentNode,t,[Object(u.d)(e,f)],b,e));break;case"object":case"undefined":if(null==f){i=!1,t=Object(l.a)(e.parentNode,t,[],b,e);break}default:if(i=!1,n=f,Object(p.e)(f))if(0===f.length)t.length&&(t=Object(l.a)(e.parentNode,t,[],b,e));else switch(typeof f[0]){case"string":case"number":case"boolean":c({html:f});break;case"object":if(Object(p.e)(f[0])&&(f=f.concat.apply([],f)),w(f[0])){Promise.all(f).then(c);break}default:t=Object(l.a)(e.parentNode,t,f,b,e)}else(e=>"ELEMENT_NODE"in e||e instanceof o.a||e instanceof s.a)(f)?t=Object(l.a)(e.parentNode,t,f.nodeType===r.d?d.d.call(f.childNodes):[f],b,e):w(f)?f.then(c):"placeholder"in f?y(f,c):"text"in f?c(String(f.text)):"any"in f?c(f.any):"html"in f?t=Object(l.a)(e.parentNode,t,d.d.call(Object(d.b)(e,[].concat(f.html).join("")).childNodes),b,e):c("length"in f?d.d.call(f):a.a.invoke(f,c))}};return c},x=(e,t,n)=>{const s=r.g in e;let o;if("style"===t)return Object(c.a)(e,n,s);if(/^on/.test(t)){let n=t.slice(2);return n===r.b||n===r.c?(k&&(k=!1,function(){const e=(e,n)=>{const s=new p.a(n),o=e.length;for(let n=0;n<o;n++){let o=e[n];o.nodeType===r.e&&t(o,s)}},t=(e,n)=>{f.has(e)&&e.dispatchEvent(n);const r=e.children,s=r.length;for(let e=0;e<s;e++)t(r[e],n)};try{new MutationObserver(t=>{const n=t.length;for(let s=0;s<n;s++){let n=t[s];e(n.removedNodes,r.c),e(n.addedNodes,r.b)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",t=>{e([t.target],r.c)},!1),document.addEventListener("DOMNodeInserted",t=>{e([t.target],r.b)},!1)}}()),f.add(e)):t.toLowerCase()in e&&(n=n.toLowerCase()),t=>{o!==t&&(o&&e.removeEventListener(n,o,!1),o=t,t&&e.addEventListener(n,t,!1))}}if("data"===t||!s&&t in e)return n=>{o!==n&&(o=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};{let t=!1;const r=n.cloneNode(!0);return n=>{o!==n&&(o=n,r.value!==n&&(null==n?(t&&(t=!1,e.removeAttributeNode(r)),r.value=n):(r.value=n,t||(t=!0,e.setAttributeNode(r)))))}}},O=e=>{let t="";const n=r=>{t!==r&&(t=r,"object"==typeof r&&r?w(r)?r.then(n):"placeholder"in r?y(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?d.d.call(r).join(""):a.a.invoke(r,n)):e.textContent=null==r?"":r)};return n};t.a={create:(e,t)=>{const n=[],r=t.length;for(let s=0;s<r;s++){const r=t[s],o=i.a.find(e,r.path);switch(r.type){case"any":n.push(j(o,[]));break;case"attr":n.push(x(o,r.name,r.node));break;case"text":n.push(O(o))}}return n},find:g};let k=!0},299:function(e,t,n){"use strict";var r=n(35);const s=(e,t,n)=>{e.unshift(e.indexOf.call(t.childNodes,n))};t.a={create:(e,t,n)=>({type:e,name:n,node:t,path:(e=>{const t=[];let n;switch(e.nodeType){case r.e:case r.d:n=e;break;case r.a:n=e.parentNode,s(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)s(t,n,e);return t})(t)}),find:(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e=e.childNodes[t[r]];return e}}},300:function(e,t,n){"use strict";const r=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;t.a=((e,t,n)=>{if(n){const r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),s(r,n)}return s(e.style,n)});const s=(e,t)=>{let n,s;return o=>{switch(typeof o){case"object":if(o){if("object"===n){if(!t&&s!==o)for(const t in s)t in o||(e[t]="")}else t?e.value="":e.cssText="";const i=t?{}:e;for(const e in o){const t=o[e];i[e]="number"!=typeof t||r.test(e)?t:t+"px"}n="object",t?e.value=c(s=i):s=o;break}default:s!=o&&(n="string",s=o,t?e.value=o||"":e.cssText=o||"")}}},o=/([^A-Z])([A-Z]+)/g,i=(e,t,n)=>t+"-"+n.toLowerCase(),c=e=>{const t=[];for(const n in e)t.push(n.replace(o,i),":",e[n],";");return t.join("")}},35:function(e,t,n){"use strict";const r=document.defaultView;t.f=r;t.e=1;t.j=3;t.a=8;t.d=11;t.m=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i;t.g="ownerSVGElement";t.i="http://www.w3.org/2000/svg";t.b="connected";t.c="disconnected";t.h=/^style|textarea$/i;const s="_hyper: "+(Math.random()*new Date|0)+";";t.k=s;const o="\x3c!--"+s+"--\x3e";t.l=o},414:function(e,t,n){var r={"./posts":[93,8],"./posts/":[93,8],"./posts/index":[93,8],"./posts/index.ts":[93,8],"./posts/styles/_entry.scss":[716,39],"./posts/styles/_links.scss":[717,38],"./posts/styles/default.scss":[718,37],"./posts/styles/fonts.scss":[719,36],"./posts/styles/layout.scss":[720,35],"./posts/styles/main.scss":[703,34],"./posts/styles/media-queries.scss":[721,33],"./posts/template":[286,27],"./posts/template.ts":[286,27],"./posts/um-article":[94,10],"./posts/um-article/":[94,10],"./posts/um-article/index":[94,10],"./posts/um-article/index.ts":[94,10],"./posts/um-article/template":[287,26],"./posts/um-article/template.ts":[287,26],"./posts/um-article/um-gist":[95,16],"./posts/um-article/um-gist/":[95,16],"./posts/um-article/um-gist/index":[95,16],"./posts/um-article/um-gist/index.ts":[95,16],"./posts/um-article/um-gist/template":[288,25],"./posts/um-article/um-gist/template.ts":[288,25],"./posts/um-articles-list":[96,13],"./posts/um-articles-list/":[96,13],"./posts/um-articles-list/index":[96,13],"./posts/um-articles-list/index.ts":[96,13],"./posts/um-articles-list/template":[289,24],"./posts/um-articles-list/template.ts":[289,24],"./posts/um-articles-list/um-article-preview":[97,12],"./posts/um-articles-list/um-article-preview/":[97,12],"./posts/um-articles-list/um-article-preview/index":[97,12],"./posts/um-articles-list/um-article-preview/index.ts":[97,12],"./posts/um-articles-list/um-article-preview/style.scss":[704,32],"./posts/um-articles-list/um-article-preview/template":[290,23],"./posts/um-articles-list/um-article-preview/template.ts":[290,23],"./presentation":[98,11],"./presentation/":[98,11],"./presentation/index":[98,11],"./presentation/index.ts":[98,11],"./presentation/style.scss":[705,31],"./presentation/template":[291,22],"./presentation/template.ts":[291,22],"./um-editor":[99,14],"./um-editor/":[99,14],"./um-editor/editor.component.scss":[706,30],"./um-editor/index":[99,14],"./um-editor/index.ts":[99,14],"./um-editor/template":[292,21],"./um-editor/template.ts":[292,21],"./um-preloader":[100,9],"./um-preloader/":[100,9],"./um-preloader/index":[100,9],"./um-preloader/index.ts":[100,9],"./um-preloader/service":[282,20],"./um-preloader/service.ts":[282,20],"./um-preloader/style.scss":[707,29],"./um-preloader/template":[293,19],"./um-preloader/template.ts":[293,19],"./um-preloader/um-spinner-round":[92,15],"./um-preloader/um-spinner-round/":[92,15],"./um-preloader/um-spinner-round/index":[92,15],"./um-preloader/um-spinner-round/index.ts":[92,15],"./um-preloader/um-spinner-round/style.scss":[702,28],"./um-preloader/um-spinner-round/template":[284,18],"./um-preloader/um-spinner-round/template.ts":[284,18],"./um-web.component":[280,17],"./um-web.component.ts":[280,17]};function s(e){var t=r[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}s.keys=function(){return Object.keys(r)},s.id=414,e.exports=s},52:function(e,t,n){"use strict";t.a=((e,t)=>r(e).createElement(t));const r=e=>e.ownerDocument||e;t.b=r;t.c=(e=>r(e).createDocumentFragment());t.d=((e,t)=>r(e).createTextNode(t))},69:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(35);let s=r.f.Event;try{new s("Event")}catch(e){s=function(e){const t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}const o=r.f.Map||function(){const e=[],t=[];return{get:n=>t[e.indexOf(n)],set(n,r){t[e.push(n)-1]=r}}};t.b=o;const i=r.f.WeakMap||function(){return{get:e=>e[r.k],set(e,t){Object.defineProperty(e,r.k,{configurable:!0,value:t})}}};t.c=i;const c=r.f.WeakSet||function(){const e=new i;return{add(t){e.set(t,!0)},has:t=>!0===e.get(t)}};t.d=c;const a=Array.isArray||(e=>t=>"[object Array]"===e.call(t))({}.toString);t.e=a;const l=r.k.trim||function(){return this.replace(/^\s+|\s+$/g,"")};t.f=l},70:function(e,t,n){"use strict";var r=n(142),s=n(35),o=n(297),i=n(52);const c=o.a?(e,t)=>{e.append.apply(e,t)}:(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e.appendChild(t[r])};t.a=c;const a=new RegExp("("+r.a+"=)(['\"]?)"+s.l+"\\2","gi"),l=(e,t,n,r)=>"<"+t+n.replace(a,u)+r,u=(e,t,n)=>t+(n||'"')+s.k+(n||'"');t.b=((e,t)=>(s.g in e?b:h)(e,t.replace(r.b,l)));const p=o.c?e=>{const t=e.cloneNode(),n=e.childNodes||[],r=n.length;for(let e=0;e<r;e++)t.appendChild(p(n[e]));return t}:e=>e.cloneNode(!0),d=o.d?(e,t)=>e.importNode(t,!0):(e,t)=>p(t);t.c=d;const f=[].slice;t.d=f;t.e=(e=>m(e));let m=e=>{if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((s.f.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){const e={};m=(t=>{const n="_"+t.join(s.k);return e[n]||(e[n]=t)})}else m=(e=>e);return m(e)};const h=o.b?(e,t)=>{const n=Object(i.a)(e,"template");return n.innerHTML=t,n.content}:(e,t)=>{const n=Object(i.a)(e,"template"),r=Object(i.c)(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){const e=RegExp.$1;n.innerHTML="<table>"+t+"</table>",c(r,f.call(n.querySelectorAll(e)))}else n.innerHTML=t,c(r,f.call(n.childNodes));return r},b=o.b?(e,t)=>{const n=Object(i.c)(e),r=Object(i.b)(e).createElementNS(s.i,"svg");return r.innerHTML=t,c(n,f.call(r.childNodes)),n}:(e,t)=>{const n=Object(i.c)(e),r=Object(i.a)(e,"div");return r.innerHTML='<svg xmlns="'+s.i+'">'+t+"</svg>",c(n,f.call(r.firstChild.childNodes)),n}}},[295]);