webpackJsonp([4],{32:function(e,t){(function(){"use strict";function e(e,t){return{index:e,j:[],m:t}}function t(t,o,r,i){var s=0,a=0,d=0,h=0,l=Math.min(o-s,i-a);if(0==s&&0==a)e:{for(d=0;d<l;d++)if(t[d]!==r[d])break e;d=l}if(o==t.length&&i==r.length){h=t.length;for(var u=r.length,c=0;c<l-d&&n(t[--h],r[--u]);)c++;h=c}if(s+=d,a+=d,o-=h,i-=h,0==o-s&&0==i-a)return[];if(s==o){for(o=e(s,0);a<i;)o.j.push(r[a++]);return[o]}if(a==i)return[e(s,o-s)];for(i=i-(d=a)+1,h=o-(l=s)+1,o=Array(i),u=0;u<i;u++)o[u]=Array(h),o[u][0]=u;for(u=0;u<h;u++)o[0][u]=u;for(u=1;u<i;u++)for(c=1;c<h;c++)if(t[l+c-1]===r[d+u-1])o[u][c]=o[u-1][c-1];else{var _=o[u-1][c]+1,f=o[u][c-1]+1;o[u][c]=_<f?_:f}for(l=o.length-1,d=o[0].length-1,i=o[l][d],t=[];0<l||0<d;)0==l?(t.push(2),d--):0==d?(t.push(3),l--):(h=o[l-1][d-1],u=o[l-1][d],c=o[l][d-1],(_=u<c?u<h?u:h:c<h?c:h)==h?(h==i?t.push(0):(t.push(1),i=h),l--,d--):_==u?(t.push(3),l--,i=u):(t.push(2),d--,i=c));for(t.reverse(),o=void 0,l=[],d=0;d<t.length;d++)switch(t[d]){case 0:o&&(l.push(o),o=void 0),s++,a++;break;case 1:o||(o=e(s,0)),o.m++,s++,o.j.push(r[a]),a++;break;case 2:o||(o=e(s,0)),o.m++,s++;break;case 3:o||(o=e(s,0)),o.j.push(r[a]),a++}return o&&l.push(o),l}function n(e,t){return e===t}function o(e){return e.__shady&&void 0!==e.__shady.firstChild}function r(e){return"ShadyRoot"===e.K}function i(e){if(e=e.getRootNode(),r(e))return e}function s(e,t){if(e&&t)for(var n,o=Object.getOwnPropertyNames(t),r=0;r<o.length&&(n=o[r]);r++){var i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i)}}function a(e,t){for(var n=[],o=1;o<arguments.length;++o)n[o-1]=arguments[o];for(o=0;o<n.length;o++)s(e,n[o]);return e}function d(e,t){for(var n in t)e[n]=t[n]}function h(e){ae.push(e),ie.textContent=se++}function l(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case" ":return"&nbsp;"}}function u(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}function c(e,t){"template"===e.localName&&(e=e.content);for(var n,o="",r=t?t(e):e.childNodes,i=0,s=r.length;i<s&&(n=r[i]);i++){e:{var a=n,d=e,h=t;switch(a.nodeType){case Node.ELEMENT_NODE:for(var u=a.localName,_="<"+u,f=a.attributes,p=0;d=f[p];p++)_+=" "+d.name+'="'+d.value.replace(de,l)+'"';_+=">",a=le[u]?_:_+c(a,h)+"</"+u+">";break e;case Node.TEXT_NODE:a=a.data,a=d&&ue[d.localName]?a:a.replace(he,l);break e;case Node.COMMENT_NODE:a="\x3c!--"+a.data+"--\x3e";break e;default:throw window.console.error(a),Error("not implemented")}}o+=a}return o}function _(e){var t=[];for(_e.currentNode=e,e=_e.firstChild();e;)t.push(e),e=_e.nextSibling();return t}function f(e,t,n){for(var o in t){var r=Object.getOwnPropertyDescriptor(e,o);r&&r.configurable||!r&&n?Object.defineProperty(e,o,t[o]):n&&console.warn("Could not define",o,"on",e)}}function p(e){f(e,ge),f(e,me),f(e,be)}function y(e,t,n){Ee(e),n=n||null,e.__shady=e.__shady||{},t.__shady=t.__shady||{},n&&(n.__shady=n.__shady||{}),e.__shady.previousSibling=n?n.__shady.previousSibling:t.lastChild;var o=e.__shady.previousSibling;o&&o.__shady&&(o.__shady.nextSibling=e),(o=e.__shady.nextSibling=n)&&o.__shady&&(o.__shady.previousSibling=e),e.__shady.parentNode=t,n?n===t.__shady.firstChild&&(t.__shady.firstChild=e):(t.__shady.lastChild=e,t.__shady.firstChild||(t.__shady.firstChild=e)),t.__shady.childNodes=null}function v(e){if(!e.__shady||void 0===e.__shady.firstChild){e.__shady=e.__shady||{},e.__shady.firstChild=ce.firstChild(e),e.__shady.lastChild=ce.lastChild(e),we(e);for(var t,n=e.__shady.childNodes=ce.childNodes(e),o=0;o<n.length&&(t=n[o]);o++)t.__shady=t.__shady||{},t.__shady.parentNode=e,t.__shady.nextSibling=n[o+1]||null,t.__shady.previousSibling=n[o-1]||null,Ee(t)}}function g(e,t,n){if(t===e)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(n){var s=n.__shady&&n.__shady.parentNode;if(void 0!==s&&s!==e||void 0===s&&ce.parentNode(n)!==e)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.")}if(n===t)return t;t.parentNode&&m(t.parentNode,t);var a;if(a=s=i(e))e:{if(!t.__noInsertionPoint){var d;if("slot"===t.localName?d=[t]:t.querySelectorAll&&(d=t.querySelectorAll("slot")),d&&d.length){a=d;break e}}a=void 0}if(d=a,s&&("slot"===e.localName||d)&&A(s),o(e)){if(a=n,we(e),e.__shady=e.__shady||{},void 0!==e.__shady.firstChild&&(e.__shady.childNodes=null),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE){for(var h=t.childNodes,l=0;l<h.length;l++)y(h[l],e,a);t.__shady=t.__shady||{},a=void 0!==t.__shady.firstChild?null:void 0,t.__shady.firstChild=t.__shady.lastChild=a,t.__shady.childNodes=a}else y(t,e,a);if(E(e)){A(e.__shady.root);var u=!0}else e.__shady.root&&(u=!0)}if(u||(u=r(e)?e.host:e,n?(n=b(n),Se.insertBefore.call(u,t,n)):Se.appendChild.call(u,t)),S(e,t),d){for(s.a=s.a||{},s.b=s.b||[],e=0;e<d.length;e++){if(n=d[e],n.__shady=n.__shady||{},v(n),v(n.parentNode),u=F(n),s.a[u]){var c=c||{};c[u]=!0,s.a[u].push(n)}else s.a[u]=[n];s.b.push(n)}if(c)for(var _ in c)s.a[_]=B(s.a[_])}return t}function m(e,t){if(t.parentNode!==e)throw Error("The node to be removed is not a child of this node: "+t);var n=i(t);if(o(e)){t.__shady=t.__shady||{},e.__shady=e.__shady||{},t===e.__shady.firstChild&&(e.__shady.firstChild=t.__shady.nextSibling),t===e.__shady.lastChild&&(e.__shady.lastChild=t.__shady.previousSibling);var s=t.__shady.previousSibling,a=t.__shady.nextSibling;if(s&&(s.__shady=s.__shady||{},s.__shady.nextSibling=a),a&&(a.__shady=a.__shady||{},a.__shady.previousSibling=s),t.__shady.parentNode=t.__shady.previousSibling=t.__shady.nextSibling=void 0,void 0!==e.__shady.childNodes&&(e.__shady.childNodes=null),E(e)){A(e.__shady.root);var d=!0}}if(N(t),n){(s=e&&"slot"===e.localName)&&(d=!0),n.a=n.a||{},n.b=n.b||[],a=n.a;for(var h in a)for(var l=a[h],u=0;u<l.length;u++){var c,_=l[u];e:{for(c=_;c;){if(c==t){c=!0;break e}c=c.parentNode}c=void 0}if(c){l.splice(u,1);var f=n.b.indexOf(_);if(0<=f&&n.b.splice(f,1),u--,f=_.__shady.g)for(_=0;_<f.length;_++){c=f[_];var p=ce.parentNode(c);p&&Se.removeChild.call(p,c)}f=!0}}(f||s)&&A(n)}return d||(d=r(e)?e.host:e,(!e.__shady.root&&"slot"!==t.localName||d===ce.parentNode(t))&&Se.removeChild.call(d,t)),S(e,null,t),t}function N(e){if(e.__shady&&void 0!==e.__shady.B)for(var t,n=e.childNodes,o=0,r=n.length;o<r&&(t=n[o]);o++)N(t);e.__shady&&(e.__shady.B=void 0)}function b(e){var t=e;return e&&"slot"===e.localName&&(t=(t=e.__shady&&e.__shady.g)&&t.length?t[0]:b(e.nextSibling)),t}function E(e){return(e=e&&e.__shady&&e.__shady.root)&&!!e.b.length}function w(e,t){if("slot"===t)e=e.parentNode,E(e)&&A(e.__shady.root);else if("slot"===e.localName&&"name"===t&&(t=i(e))){var n=e.M,o=F(e);if(o!==n){var r=(n=t.a[n]).indexOf(e);0<=r&&n.splice(r,1),(n=t.a[o]||(t.a[o]=[])).push(e),1<n.length&&(t.a[o]=B(n))}A(t)}}function S(e,t,n){(e=e.__shady&&e.__shady.i)&&(t&&e.addedNodes.push(t),n&&e.removedNodes.push(n),q(e))}function C(e){if(e&&e.nodeType){e.__shady=e.__shady||{};var t=e.__shady.B;return void 0===t&&(t=r(e)?e:(t=e.parentNode)?C(t):e,document.documentElement.contains(e)&&(e.__shady.B=t)),t}}function T(e,t,n){var o=[];return O(e.childNodes,t,n,o),o}function O(e,t,n,o){for(var r,i=0,s=e.length;i<s&&(r=e[i]);i++){var a;if(a=r.nodeType===Node.ELEMENT_NODE){var d=t,h=n,l=o,u=d(a=r);u&&l.push(a),h&&h(u)?a=u:(O(a.childNodes,d,h,l),a=void 0)}if(a)break}}function M(e,t,n){Be||(Be=window.ShadyCSS&&window.ShadyCSS.ScopingShim),Be&&"class"===t?Be.setElementClass(e,n):(Se.setAttribute.call(e,t,n),w(e,t))}function x(e,t){if(e.ownerDocument!==document)return Se.importNode.call(document,e,t);var n=Se.importNode.call(document,e,!1);if(t){e=e.childNodes,t=0;for(var o;t<e.length;t++)o=x(e[t],!0),n.appendChild(o)}return n}function D(e){Fe||(Fe=!0,h(L)),Ie.push(e)}function L(){Fe=!1;for(var e=!!Ie.length;Ie.length;)Ie.shift()();return e}function P(e,t,n){if(e!==We)throw new TypeError("Illegal constructor");(e=document.createDocumentFragment()).__proto__=P.prototype,e.K="ShadyRoot",v(t),v(e),e.host=t,e.c=n&&n.mode,t.__shady=t.__shady||{},t.__shady.root=e,t.__shady.S="closed"!==e.c?e:null,e.f=!1,e.b=[],e.a=null;for(var o=0,r=(n=ce.childNodes(t)).length;o<r;o++)Se.removeChild.call(t,n[o]);return e}function A(e){e.f||(e.f=!0,D(function(){return j(e)}))}function j(e){if(e.f){for(var t=e;e;){e.f&&(t=e);e:{var n=e;if(e=n.host.getRootNode(),r(e))for(var o=n.host.childNodes,i=0;i<o.length;i++)if("slot"==(n=o[i]).localName)break e;e=void 0}}t._renderRoot()}}function R(e,t,n){t.__shady=t.__shady||{};var o=t.__shady.w;t.__shady.w=null,n||(n=(e=e.a[t.slot||"__catchall"])&&e[0]),n?(n.__shady.assignedNodes.push(t),t.__shady.assignedSlot=n):t.__shady.assignedSlot=void 0,o!==t.__shady.assignedSlot&&t.__shady.assignedSlot&&(t.__shady.assignedSlot.__shady.A=!0)}function k(e,t,n){for(var o,r=0;r<n.length&&(o=n[r]);r++)"slot"==o.localName?k(e,t,o.__shady.assignedNodes):t.push(n[r])}function H(e,t){Se.dispatchEvent.call(t,new Event("slotchange")),t.__shady.assignedSlot&&H(e,t.__shady.assignedSlot)}function F(e){var t=e.name||e.getAttribute("name")||"__catchall";return e.M=t}function B(e){return e.sort(function(e,t){e=I(e);for(var n=I(t),o=0;o<e.length;o++){t=e[o];var r=n[o];if(t!==r)return(e=Array.from(t.parentNode.childNodes)).indexOf(t)-e.indexOf(r)}})}function I(e){var t=[];do{t.unshift(e)}while(e=e.parentNode);return t}function W(){this.c=!1,this.addedNodes=[],this.removedNodes=[],this.o=new Set}function q(e){e.c||(e.c=!0,h(function(){G(e)}))}function G(e){if(e.c){e.c=!1;var t=e.takeRecords();t.length&&e.o.forEach(function(e){e(t)})}}function U(e,t){var n=[],o=e;for(e=e===window?window:e.getRootNode();o;)n.push(o),o=o.assignedSlot?o.assignedSlot:o.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&o.host&&(t||o!==e)?o.host:o.parentNode;return n[n.length-1]===document&&n.push(window),n}function V(e,t){if(!r)return e;e=U(e,!0);for(var n,o,i,s,a=0;a<t.length;a++)if(n=t[a],(i=n===window?window:n.getRootNode())!==o&&(s=e.indexOf(i),o=i),!r(i)||-1<s)return n}function J(e){function t(t,n){return t=new e(t,n),t.s=n&&!!n.composed,t}return d(t,e),t.prototype=e.prototype,t}function z(e,t,n){if(n=t.__handlers&&t.__handlers[e.type]&&t.__handlers[e.type][n])for(var o,r=0;(o=n[r])&&e.target!==e.relatedTarget&&(o.call(t,e),!e.I);r++);}function K(e){var t=e.composedPath();Object.defineProperty(e,"currentTarget",{get:function(){return o},configurable:!0});for(var n=t.length-1;0<=n;n--){var o=t[n];if(z(e,o,"capture"),e.u)return}Object.defineProperty(e,"eventPhase",{get:function(){return Event.AT_TARGET}});var r;for(n=0;n<t.length;n++){var i=(o=t[n]).__shady&&o.__shady.root;if((0===n||i&&i===r)&&(z(e,o,"bubble"),o!==window&&(r=o.getRootNode()),e.u))break}}function X(e,t,n,o,r,i){for(var s=0;s<e.length;s++){var a=e[s],d=a.type,h=a.capture,l=a.once,u=a.passive;if(t===a.node&&n===d&&o===h&&r===l&&i===u)return s}return-1}function Q(e,t,n){if(t){if("object"==typeof n)var o=!!n.capture,r=!!n.once,i=!!n.passive;else o=!!n,i=r=!1;var s=n&&n.v||this,a=t.l;if(a){if(-1<X(a,s,e,o,r,i))return}else t.l=[];a=function(o){if(r&&this.removeEventListener(e,t,n),o.__target||Z(o),s!==this){var i=Object.getOwnPropertyDescriptor(o,"currentTarget");Object.defineProperty(o,"currentTarget",{get:function(){return s},configurable:!0})}if(o.composed||-1<o.composedPath().indexOf(s))if(o.target===o.relatedTarget)o.eventPhase===Event.BUBBLING_PHASE&&o.stopImmediatePropagation();else if(o.eventPhase===Event.CAPTURING_PHASE||o.bubbles||o.target===s){var a="object"==typeof t&&t.handleEvent?t.handleEvent(o):t.call(s,o);return s!==this&&(i?(Object.defineProperty(o,"currentTarget",i),i=null):delete o.currentTarget),a}},t.l.push({node:this,type:e,capture:o,once:r,passive:i,V:a}),Ve[e]?(this.__handlers=this.__handlers||{},this.__handlers[e]=this.__handlers[e]||{capture:[],bubble:[]},this.__handlers[e][o?"capture":"bubble"].push(a)):(this instanceof Window?Se.T:Se.addEventListener).call(this,e,a,n)}}function Y(e,t,n){if(t){if("object"==typeof n)var o=!!n.capture,r=!!n.once,i=!!n.passive;else o=!!n,i=r=!1;var s=n&&n.v||this,a=void 0,d=null;try{d=t.l}catch(e){}d&&-1<(r=X(d,s,e,o,r,i))&&(a=d.splice(r,1)[0].V,d.length||(t.l=void 0)),(this instanceof Window?Se.U:Se.removeEventListener).call(this,e,a||t,n),a&&Ve[e]&&this.__handlers&&this.__handlers[e]&&(e=this.__handlers[e][o?"capture":"bubble"],-1<(a=e.indexOf(a))&&e.splice(a,1))}}function Z(e){if(e.__target=e.target,e.D=e.relatedTarget,te.h){var t=Object.getPrototypeOf(e);if(!t.hasOwnProperty("__patchProto")){var n=Object.create(t);n.W=t,s(n,Ue),t.__patchProto=n}e.__proto__=t.__patchProto}else s(e,Ue)}function $(e){var t=e.getRootNode();return r(t)&&j(t),e.__shady&&e.__shady.assignedSlot||null}function ee(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var r=n[o],i=Object.getOwnPropertyDescriptor(t,r);i.value?e[r]=i.value:Object.defineProperty(e,r,i)}}var te=window.ShadyDOM||{};te.R=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var ne=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");te.h=!!(ne&&ne.configurable&&ne.get),te.H=te.force||!te.R;var oe=Element.prototype,re=oe.matches||oe.matchesSelector||oe.mozMatchesSelector||oe.msMatchesSelector||oe.oMatchesSelector||oe.webkitMatchesSelector,ie=document.createTextNode(""),se=0,ae=[];new MutationObserver(function(){for(;ae.length;)try{ae.shift()()}catch(e){throw ie.textContent=se++,e}}).observe(ie,{characterData:!0});var de=/[&\u00A0"]/g,he=/[&\u00A0<>]/g,le=u("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),ue=u("style script xmp iframe noembed noframes plaintext noscript".split(" ")),ce={},_e=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),fe=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1);ce.parentNode=function(e){return _e.currentNode=e,_e.parentNode()},ce.firstChild=function(e){return _e.currentNode=e,_e.firstChild()},ce.lastChild=function(e){return _e.currentNode=e,_e.lastChild()},ce.previousSibling=function(e){return _e.currentNode=e,_e.previousSibling()},ce.nextSibling=function(e){return _e.currentNode=e,_e.nextSibling()},ce.childNodes=_,ce.parentElement=function(e){return fe.currentNode=e,fe.parentNode()},ce.firstElementChild=function(e){return fe.currentNode=e,fe.firstChild()},ce.lastElementChild=function(e){return fe.currentNode=e,fe.lastChild()},ce.previousElementSibling=function(e){return fe.currentNode=e,fe.previousSibling()},ce.nextElementSibling=function(e){return fe.currentNode=e,fe.nextSibling()},ce.children=function(e){var t=[];for(fe.currentNode=e,e=fe.firstChild();e;)t.push(e),e=fe.nextSibling();return t},ce.innerHTML=function(e){return c(e,function(e){return _(e)})},ce.textContent=function(e){switch(e.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:e=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1);for(var t,n="";t=e.nextNode();)n+=t.nodeValue;return n;default:return e.nodeValue}};var pe=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML")||Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML"),ye=document.implementation.createHTMLDocument("inert").createElement("div"),ve=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),ge={parentElement:{get:function(){var e=this.__shady&&this.__shady.parentNode;return e&&e.nodeType!==Node.ELEMENT_NODE&&(e=null),void 0!==e?e:ce.parentElement(this)},configurable:!0},parentNode:{get:function(){var e=this.__shady&&this.__shady.parentNode;return void 0!==e?e:ce.parentNode(this)},configurable:!0},nextSibling:{get:function(){var e=this.__shady&&this.__shady.nextSibling;return void 0!==e?e:ce.nextSibling(this)},configurable:!0},previousSibling:{get:function(){var e=this.__shady&&this.__shady.previousSibling;return void 0!==e?e:ce.previousSibling(this)},configurable:!0},className:{get:function(){return this.getAttribute("class")||""},set:function(e){this.setAttribute("class",e)},configurable:!0},nextElementSibling:{get:function(){if(this.__shady&&void 0!==this.__shady.nextSibling){for(var e=this.nextSibling;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.nextSibling;return e}return ce.nextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){if(this.__shady&&void 0!==this.__shady.previousSibling){for(var e=this.previousSibling;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.previousSibling;return e}return ce.previousElementSibling(this)},configurable:!0}},me={childNodes:{get:function(){if(o(this)){if(!this.__shady.childNodes){this.__shady.childNodes=[];for(var e=this.firstChild;e;e=e.nextSibling)this.__shady.childNodes.push(e)}var t=this.__shady.childNodes}else t=ce.childNodes(this);return t.item=function(e){return t[e]},t},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var e=this.__shady&&this.__shady.firstChild;return void 0!==e?e:ce.firstChild(this)},configurable:!0},lastChild:{get:function(){var e=this.__shady&&this.__shady.lastChild;return void 0!==e?e:ce.lastChild(this)},configurable:!0},textContent:{get:function(){if(o(this)){for(var e,t=[],n=0,r=this.childNodes;e=r[n];n++)e.nodeType!==Node.COMMENT_NODE&&t.push(e.textContent);return t.join("")}return ce.textContent(this)},set:function(e){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(;this.firstChild;)this.removeChild(this.firstChild);(0<e.length||this.nodeType===Node.ELEMENT_NODE)&&this.appendChild(document.createTextNode(e));break;default:this.nodeValue=e}},configurable:!0},firstElementChild:{get:function(){if(this.__shady&&void 0!==this.__shady.firstChild){for(var e=this.firstChild;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.nextSibling;return e}return ce.firstElementChild(this)},configurable:!0},lastElementChild:{get:function(){if(this.__shady&&void 0!==this.__shady.lastChild){for(var e=this.lastChild;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.previousSibling;return e}return ce.lastElementChild(this)},configurable:!0},children:{get:function(){var e;return e=o(this)?Array.prototype.filter.call(this.childNodes,function(e){return e.nodeType===Node.ELEMENT_NODE}):ce.children(this),e.item=function(t){return e[t]},e},configurable:!0},innerHTML:{get:function(){var e="template"===this.localName?this.content:this;return o(this)?c(e):ce.innerHTML(e)},set:function(e){for(var t="template"===this.localName?this.content:this;t.firstChild;)t.removeChild(t.firstChild);for(pe&&pe.set?pe.set.call(ye,e):ye.innerHTML=e;ye.firstChild;)t.appendChild(ye.firstChild)},configurable:!0}},Ne={shadowRoot:{get:function(){return this.__shady&&this.__shady.S||null},configurable:!0}},be={activeElement:{get:function(){var e=ve&&ve.get?ve.get.call(document):te.h?void 0:document.activeElement;if(e&&e.nodeType){var t=!!r(this);if(this===document||t&&this.host!==e&&this.host.contains(e)){for(t=i(e);t&&t!==this;)e=t.host,t=i(e);e=this===document?t?null:e:t===this?e:null}else e=null}else e=null;return e},set:function(){},configurable:!0}},Ee=te.h?function(){}:function(e){e.__shady&&e.__shady.L||(e.__shady=e.__shady||{},e.__shady.L=!0,f(e,ge,!0))},we=te.h?function(){}:function(e){e.__shady&&e.__shady.J||(e.__shady=e.__shady||{},e.__shady.J=!0,f(e,me,!0),f(e,Ne,!0))},Se={},Ce=Element.prototype.insertBefore,Te=Element.prototype.removeChild,Oe=Element.prototype.setAttribute,Me=Element.prototype.removeAttribute,xe=Element.prototype.cloneNode,De=Document.prototype.importNode,Le=Element.prototype.addEventListener,Pe=Element.prototype.removeEventListener,Ae=Window.prototype.addEventListener,je=Window.prototype.removeEventListener,Re=Element.prototype.dispatchEvent,ke=Element.prototype.querySelector,He=Element.prototype.querySelectorAll;Se.appendChild=Element.prototype.appendChild,Se.insertBefore=Ce,Se.removeChild=Te,Se.setAttribute=Oe,Se.removeAttribute=Me,Se.cloneNode=xe,Se.importNode=De,Se.addEventListener=Le,Se.removeEventListener=Pe,Se.T=Ae,Se.U=je,Se.dispatchEvent=Re,Se.querySelector=ke,Se.querySelectorAll=He;var Fe,Be=null,Ie=[];L.list=Ie;var We={};P.prototype=Object.create(DocumentFragment.prototype),P.prototype._renderRoot=function(){this.f=!1;for(var e,n=0;n<this.b.length;n++){var o=(e=this.b[n]).__shady.assignedNodes;if(e.__shady.assignedNodes=[],e.__shady.g=[],e.__shady.G=o)for(var r=0;r<o.length;r++){var i=o[r];i.__shady.w=i.__shady.assignedSlot,i.__shady.assignedSlot===e&&(i.__shady.assignedSlot=null)}}for(e=this.host.firstChild;e;e=e.nextSibling)R(this,e);for(n=0;n<this.b.length;n++){if(!(e=this.b[n]).__shady.assignedNodes.length)for(o=e.firstChild;o;o=o.nextSibling)R(this,o,e);if(o=e.parentNode,(o=o.__shady&&o.__shady.root)&&o.b.length&&o._renderRoot(),k(this,e.__shady.g,e.__shady.assignedNodes),o=e.__shady.G){for(r=0;r<o.length;r++)o[r].__shady.w=null;e.__shady.G=null,o.length>e.__shady.assignedNodes.length&&(e.__shady.A=!0)}e.__shady.A&&(e.__shady.A=!1,H(this,e))}for(n=this.b,e=[],o=0;o<n.length;o++)(r=n[o].parentNode).__shady&&r.__shady.root||!(0>e.indexOf(r))||e.push(r);for(n=0;n<e.length;n++){r=(o=e[n])===this?this.host:o,i=[],o=o.childNodes;for(var s=0;s<o.length;s++){var a=o[s];if("slot"==a.localName){a=a.__shady.g;for(var d=0;d<a.length;d++)i.push(a[d])}else i.push(a)}o=void 0,s=ce.childNodes(r),a=t(i,i.length,s,s.length);for(var h=d=0;d<a.length&&(o=a[d]);d++){for(var l,u=0;u<o.j.length&&(l=o.j[u]);u++)ce.parentNode(l)===r&&Se.removeChild.call(r,l),s.splice(o.index+h,1);h-=o.m}for(h=0;h<a.length&&(o=a[h]);h++)for(d=s[o.index],u=o.index;u<o.index+o.m;u++)l=i[u],Se.insertBefore.call(r,l,d),s.splice(u,0,l)}},P.prototype.addEventListener=function(e,t,n){"object"!=typeof n&&(n={capture:!!n}),n.v=this,this.host.addEventListener(e,t,n)},P.prototype.removeEventListener=function(e,t,n){"object"!=typeof n&&(n={capture:!!n}),n.v=this,this.host.removeEventListener(e,t,n)},P.prototype.getElementById=function(e){return T(this,function(t){return t.id==e},function(e){return!!e})[0]||null};var qe=P.prototype;f(qe,me,!0),f(qe,be,!0),W.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var e=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];return this.addedNodes=[],this.removedNodes=[],e}return[]};var Ge={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},Ue={get composed(){return!1!==this.isTrusted&&void 0===this.s&&(this.s=Ge[this.type]),this.s||!1},composedPath:function(){return this.C||(this.C=U(this.__target,this.composed)),this.C},get target(){return V(this.currentTarget,this.composedPath())},get relatedTarget(){return this.D?(this.F||(this.F=U(this.D,!0)),V(this.currentTarget,this.F)):null},stopPropagation:function(){Event.prototype.stopPropagation.call(this),this.u=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this),this.u=this.I=!0}},Ve={focus:!0,blur:!0},Je=J(window.Event),ze=J(window.CustomEvent),Ke=J(window.MouseEvent),Xe={addEventListener:Q.bind(window),removeEventListener:Y.bind(window)},Qe={addEventListener:Q,removeEventListener:Y,appendChild:function(e){return g(this,e)},insertBefore:function(e,t){return g(this,e,t)},removeChild:function(e){return m(this,e)},replaceChild:function(e,t){return g(this,e,t),m(this,t),e},cloneNode:function(e){if("template"==this.localName)var t=Se.cloneNode.call(this,e);else if(t=Se.cloneNode.call(this,!1),e){e=this.childNodes;for(var n,o=0;o<e.length;o++)n=e[o].cloneNode(!0),t.appendChild(n)}return t},getRootNode:function(){return C(this)},get isConnected(){var e=this.ownerDocument;if(e&&e.contains&&e.contains(this)||(e=e.documentElement)&&e.contains&&e.contains(this))return!0;for(e=this;e&&!(e instanceof Document);)e=e.parentNode||(e instanceof P?e.host:void 0);return!!(e&&e instanceof Document)},dispatchEvent:function(e){return L(),Se.dispatchEvent.call(this,e)}},Ye={get assignedSlot(){return $(this)}},Ze={querySelector:function(e){return T(this,function(t){return re.call(t,e)},function(e){return!!e})[0]||null},querySelectorAll:function(e){return T(this,function(t){return re.call(t,e)})}},$e={assignedNodes:function(e){if("slot"===this.localName){var t=this.getRootNode();return r(t)&&j(t),this.__shady?(e&&e.flatten?this.__shady.g:this.__shady.assignedNodes)||[]:[]}}},et=a({setAttribute:function(e,t){M(this,e,t)},removeAttribute:function(e){Se.removeAttribute.call(this,e),w(this,e)},attachShadow:function(e){if(!this)throw"Must provide a host.";if(!e)throw"Not enough arguments.";return new P(We,this,e)},get slot(){return this.getAttribute("slot")},set slot(e){M(this,"slot",e)},get assignedSlot(){return $(this)}},Ze,$e);Object.defineProperties(et,Ne);var tt=a({importNode:function(e,t){return x(e,t)},getElementById:function(e){return T(this,function(t){return t.id==e},function(e){return!!e})[0]||null}},Ze);Object.defineProperties(tt,{_activeElement:be.activeElement});var nt=HTMLElement.prototype.blur,ot=a({blur:function(){var e=this.__shady&&this.__shady.root;(e=e&&e.activeElement)?e.blur():nt.call(this)}});if(te.H){window.ShadyDOM={inUse:te.H,patch:function(e){return e},isShadyRoot:r,enqueue:D,flush:L,settings:te,filterMutations:function(e,t){var n=t.getRootNode();return e.map(function(e){var t=n===e.target.getRootNode();if(t&&e.addedNodes){if((t=Array.from(e.addedNodes).filter(function(e){return n===e.getRootNode()})).length)return e=Object.create(e),Object.defineProperty(e,"addedNodes",{value:t,configurable:!0}),e}else if(t)return e}).filter(function(e){return e})},observeChildren:function(e,t){e.__shady=e.__shady||{},e.__shady.i||(e.__shady.i=new W),e.__shady.i.o.add(t);var n=e.__shady.i;return{N:t,P:n,O:e,takeRecords:function(){return n.takeRecords()}}},unobserveChildren:function(e){var t=e&&e.P;t&&(t.o.delete(e.N),t.o.size||(e.O.__shady.i=null))},nativeMethods:Se,nativeTree:ce},window.Event=Je,window.CustomEvent=ze,window.MouseEvent=Ke,function(){for(var e in Ve)window.addEventListener(e,function(e){e.__target||(Z(e),K(e))},!0)}();var rt=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;ee(window.Node.prototype,Qe),ee(window.Window.prototype,Xe),ee(window.Text.prototype,Ye),ee(window.DocumentFragment.prototype,Ze),ee(window.Element.prototype,et),ee(window.Document.prototype,tt),window.HTMLSlotElement&&ee(window.HTMLSlotElement.prototype,$e),ee(rt.prototype,ot),te.h&&(p(window.Node.prototype),p(window.Text.prototype),p(window.DocumentFragment.prototype),p(window.Element.prototype),p(rt.prototype),p(window.Document.prototype),window.HTMLSlotElement&&p(window.HTMLSlotElement.prototype)),window.ShadowRoot=P}}).call(this)}});