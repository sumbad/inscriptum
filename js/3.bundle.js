webpackJsonp([3],{

/***/ 360:
/***/ (function(module, exports) {

(function(){/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';function n(a,b){return{index:a,j:[],m:b}}
function aa(a,b,c,d){var e=0,g=0,h=0,f=0,k=Math.min(b-e,d-g);if(0==e&&0==g)a:{for(h=0;h<k;h++)if(a[h]!==c[h])break a;h=k}if(b==a.length&&d==c.length){f=a.length;for(var l=c.length,m=0;m<k-h&&ba(a[--f],c[--l]);)m++;f=m}e+=h;g+=h;b-=f;d-=f;if(0==b-e&&0==d-g)return[];if(e==b){for(b=n(e,0);g<d;)b.j.push(c[g++]);return[b]}if(g==d)return[n(e,b-e)];k=e;h=g;d=d-h+1;f=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(f),b[l][0]=l;for(l=0;l<f;l++)b[0][l]=l;for(l=1;l<d;l++)for(m=1;m<f;m++)if(a[k+m-1]===c[h+l-1])b[l][m]=
b[l-1][m-1];else{var q=b[l-1][m]+1,z=b[l][m-1]+1;b[l][m]=q<z?q:z}k=b.length-1;h=b[0].length-1;d=b[k][h];for(a=[];0<k||0<h;)0==k?(a.push(2),h--):0==h?(a.push(3),k--):(f=b[k-1][h-1],l=b[k-1][h],m=b[k][h-1],q=l<m?l<f?l:f:m<f?m:f,q==f?(f==d?a.push(0):(a.push(1),d=f),k--,h--):q==l?(a.push(3),k--,d=l):(a.push(2),h--,d=m));a.reverse();b=void 0;k=[];for(h=0;h<a.length;h++)switch(a[h]){case 0:b&&(k.push(b),b=void 0);e++;g++;break;case 1:b||(b=n(e,0));b.m++;e++;b.j.push(c[g]);g++;break;case 2:b||(b=n(e,0));
b.m++;e++;break;case 3:b||(b=n(e,0)),b.j.push(c[g]),g++}b&&k.push(b);return k}function ba(a,b){return a===b};var p=window.ShadyDOM||{};p.R=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var r=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");p.h=!!(r&&r.configurable&&r.get);p.H=p.force||!p.R;function t(a){return a.__shady&&void 0!==a.__shady.firstChild}function u(a){return"ShadyRoot"===a.K}function v(a){a=a.getRootNode();if(u(a))return a}var w=Element.prototype,ca=w.matches||w.matchesSelector||w.mozMatchesSelector||w.msMatchesSelector||w.oMatchesSelector||w.webkitMatchesSelector;
function x(a,b){if(a&&b)for(var c=Object.getOwnPropertyNames(b),d=0,e;d<c.length&&(e=c[d]);d++){var g=Object.getOwnPropertyDescriptor(b,e);g&&Object.defineProperty(a,e,g)}}function y(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(d=0;d<c.length;d++)x(a,c[d]);return a}function da(a,b){for(var c in b)a[c]=b[c]}var A=document.createTextNode(""),ea=0,B=[];(new MutationObserver(function(){for(;B.length;)try{B.shift()()}catch(a){throw A.textContent=ea++,a;}})).observe(A,{characterData:!0});
function fa(a){B.push(a);A.textContent=ea++};var ha=/[&\u00A0"]/g,ia=/[&\u00A0<>]/g;function ja(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function ka(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var ma=ka("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),na=ka("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function C(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,g=d.length,h;e<g&&(h=d[e]);e++){a:{var f=h;var k=a;var l=b;switch(f.nodeType){case Node.ELEMENT_NODE:for(var m=f.localName,q="<"+m,z=f.attributes,la=0;k=z[la];la++)q+=" "+k.name+'="'+k.value.replace(ha,ja)+'"';q+=">";f=ma[m]?q:q+C(f,l)+"</"+m+">";break a;case Node.TEXT_NODE:f=f.data;f=k&&na[k.localName]?f:f.replace(ia,ja);break a;case Node.COMMENT_NODE:f="\x3c!--"+f.data+"--\x3e";break a;default:throw window.console.error(f),
Error("not implemented");}}c+=f}return c};var D={},E=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),F=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1);function oa(a){var b=[];E.currentNode=a;for(a=E.firstChild();a;)b.push(a),a=E.nextSibling();return b}D.parentNode=function(a){E.currentNode=a;return E.parentNode()};D.firstChild=function(a){E.currentNode=a;return E.firstChild()};D.lastChild=function(a){E.currentNode=a;return E.lastChild()};D.previousSibling=function(a){E.currentNode=a;return E.previousSibling()};
D.nextSibling=function(a){E.currentNode=a;return E.nextSibling()};D.childNodes=oa;D.parentElement=function(a){F.currentNode=a;return F.parentNode()};D.firstElementChild=function(a){F.currentNode=a;return F.firstChild()};D.lastElementChild=function(a){F.currentNode=a;return F.lastChild()};D.previousElementSibling=function(a){F.currentNode=a;return F.previousSibling()};D.nextElementSibling=function(a){F.currentNode=a;return F.nextSibling()};
D.children=function(a){var b=[];F.currentNode=a;for(a=F.firstChild();a;)b.push(a),a=F.nextSibling();return b};D.innerHTML=function(a){return C(a,function(a){return oa(a)})};D.textContent=function(a){switch(a.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:a=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();)b+=c.nodeValue;return b;default:return a.nodeValue}};var G=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML")||Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML"),H=document.implementation.createHTMLDocument("inert").createElement("div"),I=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),pa={parentElement:{get:function(){var a=this.__shady&&this.__shady.parentNode;a&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:D.parentElement(this)},configurable:!0},parentNode:{get:function(){var a=this.__shady&&
this.__shady.parentNode;return void 0!==a?a:D.parentNode(this)},configurable:!0},nextSibling:{get:function(){var a=this.__shady&&this.__shady.nextSibling;return void 0!==a?a:D.nextSibling(this)},configurable:!0},previousSibling:{get:function(){var a=this.__shady&&this.__shady.previousSibling;return void 0!==a?a:D.previousSibling(this)},configurable:!0},className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)},configurable:!0},nextElementSibling:{get:function(){if(this.__shady&&
void 0!==this.__shady.nextSibling){for(var a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return D.nextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){if(this.__shady&&void 0!==this.__shady.previousSibling){for(var a=this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return D.previousElementSibling(this)},configurable:!0}},J={childNodes:{get:function(){if(t(this)){if(!this.__shady.childNodes){this.__shady.childNodes=
[];for(var a=this.firstChild;a;a=a.nextSibling)this.__shady.childNodes.push(a)}var b=this.__shady.childNodes}else b=D.childNodes(this);b.item=function(a){return b[a]};return b},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var a=this.__shady&&this.__shady.firstChild;return void 0!==a?a:D.firstChild(this)},configurable:!0},lastChild:{get:function(){var a=this.__shady&&this.__shady.lastChild;return void 0!==a?a:D.lastChild(this)},
configurable:!0},textContent:{get:function(){if(t(this)){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&a.push(d.textContent);return a.join("")}return D.textContent(this)},set:function(a){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(;this.firstChild;)this.removeChild(this.firstChild);(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.appendChild(document.createTextNode(a));break;default:this.nodeValue=a}},configurable:!0},firstElementChild:{get:function(){if(this.__shady&&
void 0!==this.__shady.firstChild){for(var a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return D.firstElementChild(this)},configurable:!0},lastElementChild:{get:function(){if(this.__shady&&void 0!==this.__shady.lastChild){for(var a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return D.lastElementChild(this)},configurable:!0},children:{get:function(){var a;t(this)?a=Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===
Node.ELEMENT_NODE}):a=D.children(this);a.item=function(b){return a[b]};return a},configurable:!0},innerHTML:{get:function(){var a="template"===this.localName?this.content:this;return t(this)?C(a):D.innerHTML(a)},set:function(a){for(var b="template"===this.localName?this.content:this;b.firstChild;)b.removeChild(b.firstChild);for(G&&G.set?G.set.call(H,a):H.innerHTML=a;H.firstChild;)b.appendChild(H.firstChild)},configurable:!0}},qa={shadowRoot:{get:function(){return this.__shady&&this.__shady.S||null},
configurable:!0}},K={activeElement:{get:function(){var a=I&&I.get?I.get.call(document):p.h?void 0:document.activeElement;if(a&&a.nodeType){var b=!!u(this);if(this===document||b&&this.host!==a&&this.host.contains(a)){for(b=v(a);b&&b!==this;)a=b.host,b=v(a);a=this===document?b?null:a:b===this?a:null}else a=null}else a=null;return a},set:function(){},configurable:!0}};
function L(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a)}}function M(a){L(a,pa);L(a,J);L(a,K)}var ra=p.h?function(){}:function(a){a.__shady&&a.__shady.L||(a.__shady=a.__shady||{},a.__shady.L=!0,L(a,pa,!0))},sa=p.h?function(){}:function(a){a.__shady&&a.__shady.J||(a.__shady=a.__shady||{},a.__shady.J=!0,L(a,J,!0),L(a,qa,!0))};function ta(a,b,c){ra(a);c=c||null;a.__shady=a.__shady||{};b.__shady=b.__shady||{};c&&(c.__shady=c.__shady||{});a.__shady.previousSibling=c?c.__shady.previousSibling:b.lastChild;var d=a.__shady.previousSibling;d&&d.__shady&&(d.__shady.nextSibling=a);(d=a.__shady.nextSibling=c)&&d.__shady&&(d.__shady.previousSibling=a);a.__shady.parentNode=b;c?c===b.__shady.firstChild&&(b.__shady.firstChild=a):(b.__shady.lastChild=a,b.__shady.firstChild||(b.__shady.firstChild=a));b.__shady.childNodes=null}
function N(a){if(!a.__shady||void 0===a.__shady.firstChild){a.__shady=a.__shady||{};a.__shady.firstChild=D.firstChild(a);a.__shady.lastChild=D.lastChild(a);sa(a);for(var b=a.__shady.childNodes=D.childNodes(a),c=0,d;c<b.length&&(d=b[c]);c++)d.__shady=d.__shady||{},d.__shady.parentNode=a,d.__shady.nextSibling=b[c+1]||null,d.__shady.previousSibling=b[c-1]||null,ra(d)}};var O={},ua=Element.prototype.insertBefore,va=Element.prototype.removeChild,wa=Element.prototype.setAttribute,xa=Element.prototype.removeAttribute,ya=Element.prototype.cloneNode,za=Document.prototype.importNode,Aa=Element.prototype.addEventListener,Ba=Element.prototype.removeEventListener,Ca=Window.prototype.addEventListener,Da=Window.prototype.removeEventListener,Ea=Element.prototype.dispatchEvent,Fa=Element.prototype.querySelector,Ga=Element.prototype.querySelectorAll;O.appendChild=Element.prototype.appendChild;
O.insertBefore=ua;O.removeChild=va;O.setAttribute=wa;O.removeAttribute=xa;O.cloneNode=ya;O.importNode=za;O.addEventListener=Aa;O.removeEventListener=Ba;O.T=Ca;O.U=Da;O.dispatchEvent=Ea;O.querySelector=Fa;O.querySelectorAll=Ga;function P(a,b,c){if(b===a)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(c){var d=c.__shady&&c.__shady.parentNode;if(void 0!==d&&d!==a||void 0===d&&D.parentNode(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;b.parentNode&&Q(b.parentNode,b);d=v(a);var e;if(e=d)a:{if(!b.__noInsertionPoint){var g;"slot"===b.localName?g=[b]:b.querySelectorAll&&
(g=b.querySelectorAll("slot"));if(g&&g.length){e=g;break a}}e=void 0}g=e;d&&("slot"===a.localName||g)&&R(d);if(t(a)){e=c;sa(a);a.__shady=a.__shady||{};void 0!==a.__shady.firstChild&&(a.__shady.childNodes=null);if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE){for(var h=b.childNodes,f=0;f<h.length;f++)ta(h[f],a,e);b.__shady=b.__shady||{};e=void 0!==b.__shady.firstChild?null:void 0;b.__shady.firstChild=b.__shady.lastChild=e;b.__shady.childNodes=e}else ta(b,a,e);if(S(a)){R(a.__shady.root);var k=!0}else a.__shady.root&&
(k=!0)}k||(k=u(a)?a.host:a,c?(c=Ha(c),O.insertBefore.call(k,b,c)):O.appendChild.call(k,b));Ia(a,b);if(g){d.a=d.a||{};d.b=d.b||[];for(a=0;a<g.length;a++){c=g[a];c.__shady=c.__shady||{};N(c);N(c.parentNode);k=Ja(c);if(d.a[k]){var l=l||{};l[k]=!0;d.a[k].push(c)}else d.a[k]=[c];d.b.push(c)}if(l)for(var m in l)d.a[m]=Ka(d.a[m])}return b}
function Q(a,b){if(b.parentNode!==a)throw Error("The node to be removed is not a child of this node: "+b);var c=v(b);if(t(a)){b.__shady=b.__shady||{};a.__shady=a.__shady||{};b===a.__shady.firstChild&&(a.__shady.firstChild=b.__shady.nextSibling);b===a.__shady.lastChild&&(a.__shady.lastChild=b.__shady.previousSibling);var d=b.__shady.previousSibling,e=b.__shady.nextSibling;d&&(d.__shady=d.__shady||{},d.__shady.nextSibling=e);e&&(e.__shady=e.__shady||{},e.__shady.previousSibling=d);b.__shady.parentNode=
b.__shady.previousSibling=b.__shady.nextSibling=void 0;void 0!==a.__shady.childNodes&&(a.__shady.childNodes=null);if(S(a)){R(a.__shady.root);var g=!0}}La(b);if(c){(d=a&&"slot"===a.localName)&&(g=!0);c.a=c.a||{};c.b=c.b||[];e=c.a;for(var h in e)for(var f=e[h],k=0;k<f.length;k++){var l=f[k],m;a:{for(m=l;m;){if(m==b){m=!0;break a}m=m.parentNode}m=void 0}if(m){f.splice(k,1);var q=c.b.indexOf(l);0<=q&&c.b.splice(q,1);k--;if(q=l.__shady.g)for(l=0;l<q.length;l++){m=q[l];var z=D.parentNode(m);z&&O.removeChild.call(z,
m)}q=!0}}(q||d)&&R(c)}g||(g=u(a)?a.host:a,(!a.__shady.root&&"slot"!==b.localName||g===D.parentNode(b))&&O.removeChild.call(g,b));Ia(a,null,b);return b}function La(a){if(a.__shady&&void 0!==a.__shady.B)for(var b=a.childNodes,c=0,d=b.length,e;c<d&&(e=b[c]);c++)La(e);a.__shady&&(a.__shady.B=void 0)}function Ha(a){var b=a;a&&"slot"===a.localName&&(b=(b=a.__shady&&a.__shady.g)&&b.length?b[0]:Ha(a.nextSibling));return b}function S(a){return(a=a&&a.__shady&&a.__shady.root)&&!!a.b.length}
function Ma(a,b){if("slot"===b)a=a.parentNode,S(a)&&R(a.__shady.root);else if("slot"===a.localName&&"name"===b&&(b=v(a))){var c=a.M,d=Ja(a);if(d!==c){c=b.a[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.a[d]||(b.a[d]=[]);c.push(a);1<c.length&&(b.a[d]=Ka(c))}R(b)}}function Ia(a,b,c){if(a=a.__shady&&a.__shady.i)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Na(a)}
function Oa(a){if(a&&a.nodeType){a.__shady=a.__shady||{};var b=a.__shady.B;void 0===b&&(u(a)?b=a:b=(b=a.parentNode)?Oa(b):a,document.documentElement.contains(a)&&(a.__shady.B=b));return b}}function T(a,b,c){var d=[];Pa(a.childNodes,b,c,d);return d}function Pa(a,b,c,d){for(var e=0,g=a.length,h;e<g&&(h=a[e]);e++){var f;if(f=h.nodeType===Node.ELEMENT_NODE){f=h;var k=b,l=c,m=d,q=k(f);q&&m.push(f);l&&l(q)?f=q:(Pa(f.childNodes,k,l,m),f=void 0)}if(f)break}}var U=null;
function Qa(a,b,c){U||(U=window.ShadyCSS&&window.ShadyCSS.ScopingShim);U&&"class"===b?U.setElementClass(a,c):(O.setAttribute.call(a,b,c),Ma(a,b))}function Ra(a,b){if(a.ownerDocument!==document)return O.importNode.call(document,a,b);var c=O.importNode.call(document,a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++)d=Ra(a[b],!0),c.appendChild(d)}return c};var V=[],W;function Sa(a){W||(W=!0,fa(X));V.push(a)}function X(){W=!1;for(var a=!!V.length;V.length;)V.shift()();return a}X.list=V;var Ta={};function Y(a,b,c){if(a!==Ta)throw new TypeError("Illegal constructor");a=document.createDocumentFragment();a.__proto__=Y.prototype;a.K="ShadyRoot";N(b);N(a);a.host=b;a.c=c&&c.mode;b.__shady=b.__shady||{};b.__shady.root=a;b.__shady.S="closed"!==a.c?a:null;a.f=!1;a.b=[];a.a=null;c=D.childNodes(b);for(var d=0,e=c.length;d<e;d++)O.removeChild.call(b,c[d]);return a}Y.prototype=Object.create(DocumentFragment.prototype);function R(a){a.f||(a.f=!0,Sa(function(){return Ua(a)}))}
function Ua(a){if(a.f){for(var b=a;a;){a.f&&(b=a);a:{var c=a;a=c.host.getRootNode();if(u(a))for(var d=c.host.childNodes,e=0;e<d.length;e++)if(c=d[e],"slot"==c.localName)break a;a=void 0}}b._renderRoot()}}
Y.prototype._renderRoot=function(){this.f=!1;for(var a=0,b;a<this.b.length;a++){b=this.b[a];var c=b.__shady.assignedNodes;b.__shady.assignedNodes=[];b.__shady.g=[];if(b.__shady.G=c)for(var d=0;d<c.length;d++){var e=c[d];e.__shady.w=e.__shady.assignedSlot;e.__shady.assignedSlot===b&&(e.__shady.assignedSlot=null)}}for(b=this.host.firstChild;b;b=b.nextSibling)Va(this,b);for(a=0;a<this.b.length;a++){b=this.b[a];if(!b.__shady.assignedNodes.length)for(c=b.firstChild;c;c=c.nextSibling)Va(this,c,b);c=b.parentNode;
(c=c.__shady&&c.__shady.root)&&c.b.length&&c._renderRoot();Wa(this,b.__shady.g,b.__shady.assignedNodes);if(c=b.__shady.G){for(d=0;d<c.length;d++)c[d].__shady.w=null;b.__shady.G=null;c.length>b.__shady.assignedNodes.length&&(b.__shady.A=!0)}b.__shady.A&&(b.__shady.A=!1,Xa(this,b))}a=this.b;b=[];for(c=0;c<a.length;c++)d=a[c].parentNode,d.__shady&&d.__shady.root||!(0>b.indexOf(d))||b.push(d);for(a=0;a<b.length;a++){c=b[a];d=c===this?this.host:c;e=[];c=c.childNodes;for(var g=0;g<c.length;g++){var h=c[g];
if("slot"==h.localName){h=h.__shady.g;for(var f=0;f<h.length;f++)e.push(h[f])}else e.push(h)}c=void 0;g=D.childNodes(d);h=aa(e,e.length,g,g.length);for(var k=f=0;f<h.length&&(c=h[f]);f++){for(var l=0,m;l<c.j.length&&(m=c.j[l]);l++)D.parentNode(m)===d&&O.removeChild.call(d,m),g.splice(c.index+k,1);k-=c.m}for(k=0;k<h.length&&(c=h[k]);k++)for(f=g[c.index],l=c.index;l<c.index+c.m;l++)m=e[l],O.insertBefore.call(d,m,f),g.splice(l,0,m)}};
function Va(a,b,c){b.__shady=b.__shady||{};var d=b.__shady.w;b.__shady.w=null;c||(c=(a=a.a[b.slot||"__catchall"])&&a[0]);c?(c.__shady.assignedNodes.push(b),b.__shady.assignedSlot=c):b.__shady.assignedSlot=void 0;d!==b.__shady.assignedSlot&&b.__shady.assignedSlot&&(b.__shady.assignedSlot.__shady.A=!0)}function Wa(a,b,c){for(var d=0,e;d<c.length&&(e=c[d]);d++)"slot"==e.localName?Wa(a,b,e.__shady.assignedNodes):b.push(c[d])}
function Xa(a,b){O.dispatchEvent.call(b,new Event("slotchange"));b.__shady.assignedSlot&&Xa(a,b.__shady.assignedSlot)}function Ja(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.M=b}function Ka(a){return a.sort(function(a,c){a=Ya(a);for(var b=Ya(c),e=0;e<a.length;e++){c=a[e];var g=b[e];if(c!==g)return a=Array.from(c.parentNode.childNodes),a.indexOf(c)-a.indexOf(g)}})}function Ya(a){var b=[];do b.unshift(a);while(a=a.parentNode);return b}
Y.prototype.addEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.v=this;this.host.addEventListener(a,b,c)};Y.prototype.removeEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.v=this;this.host.removeEventListener(a,b,c)};Y.prototype.getElementById=function(a){return T(this,function(b){return b.id==a},function(a){return!!a})[0]||null};var Za=Y.prototype;L(Za,J,!0);L(Za,K,!0);function $a(){this.c=!1;this.addedNodes=[];this.removedNodes=[];this.o=new Set}function Na(a){a.c||(a.c=!0,fa(function(){ab(a)}))}function ab(a){if(a.c){a.c=!1;var b=a.takeRecords();b.length&&a.o.forEach(function(a){a(b)})}}$a.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function bb(a,b){a.__shady=a.__shady||{};a.__shady.i||(a.__shady.i=new $a);a.__shady.i.o.add(b);var c=a.__shady.i;return{N:b,P:c,O:a,takeRecords:function(){return c.takeRecords()}}}function cb(a){var b=a&&a.P;b&&(b.o.delete(a.N),b.o.size||(a.O.__shady.i=null))}
function db(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var eb={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,
drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0};function fb(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;)c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;c[c.length-1]===document&&c.push(window);return c}
function gb(a,b){if(!u)return a;a=fb(a,!0);for(var c=0,d,e,g,h;c<b.length;c++)if(d=b[c],g=d===window?window:d.getRootNode(),g!==e&&(h=a.indexOf(g),e=g),!u(g)||-1<h)return d}
var hb={get composed(){!1!==this.isTrusted&&void 0===this.s&&(this.s=eb[this.type]);return this.s||!1},composedPath:function(){this.C||(this.C=fb(this.__target,this.composed));return this.C},get target(){return gb(this.currentTarget,this.composedPath())},get relatedTarget(){if(!this.D)return null;this.F||(this.F=fb(this.D,!0));return gb(this.currentTarget,this.F)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.u=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);
this.u=this.I=!0}};function ib(a){function b(b,d){b=new a(b,d);b.s=d&&!!d.composed;return b}da(b,a);b.prototype=a.prototype;return b}var jb={focus:!0,blur:!0};function kb(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&a.target!==a.relatedTarget&&(e.call(b,a),!a.I);d++);}
function lb(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];kb(a,d,"capture");if(a.u)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var g=d.__shady&&d.__shady.root;if(0===c||g&&g===e)if(kb(a,d,"bubble"),d!==window&&(e=d.getRootNode()),a.u)break}}
function mb(a,b,c,d,e,g){for(var h=0;h<a.length;h++){var f=a[h],k=f.type,l=f.capture,m=f.once,q=f.passive;if(b===f.node&&c===k&&d===l&&e===m&&g===q)return h}return-1}
function nb(a,b,c){if(b){if("object"===typeof c){var d=!!c.capture;var e=!!c.once;var g=!!c.passive}else d=!!c,g=e=!1;var h=c&&c.v||this,f=b.l;if(f){if(-1<mb(f,h,a,d,e,g))return}else b.l=[];f=function(d){e&&this.removeEventListener(a,b,c);d.__target||ob(d);if(h!==this){var f=Object.getOwnPropertyDescriptor(d,"currentTarget");Object.defineProperty(d,"currentTarget",{get:function(){return h},configurable:!0})}if(d.composed||-1<d.composedPath().indexOf(h))if(d.target===d.relatedTarget)d.eventPhase===
Event.BUBBLING_PHASE&&d.stopImmediatePropagation();else if(d.eventPhase===Event.CAPTURING_PHASE||d.bubbles||d.target===h){var g="object"===typeof b&&b.handleEvent?b.handleEvent(d):b.call(h,d);h!==this&&(f?(Object.defineProperty(d,"currentTarget",f),f=null):delete d.currentTarget);return g}};b.l.push({node:this,type:a,capture:d,once:e,passive:g,V:f});jb[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][d?"capture":"bubble"].push(f)):
(this instanceof Window?O.T:O.addEventListener).call(this,a,f,c)}}
function pb(a,b,c){if(b){if("object"===typeof c){var d=!!c.capture;var e=!!c.once;var g=!!c.passive}else d=!!c,g=e=!1;var h=c&&c.v||this,f=void 0;var k=null;try{k=b.l}catch(l){}k&&(e=mb(k,h,a,d,e,g),-1<e&&(f=k.splice(e,1)[0].V,k.length||(b.l=void 0)));(this instanceof Window?O.U:O.removeEventListener).call(this,a,f||b,c);f&&jb[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][d?"capture":"bubble"],f=a.indexOf(f),-1<f&&a.splice(f,1))}}
function qb(){for(var a in jb)window.addEventListener(a,function(a){a.__target||(ob(a),lb(a))},!0)}function ob(a){a.__target=a.target;a.D=a.relatedTarget;if(p.h){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__patchProto")){var c=Object.create(b);c.W=b;x(c,hb);b.__patchProto=c}a.__proto__=b.__patchProto}else x(a,hb)}var rb=ib(window.Event),sb=ib(window.CustomEvent),tb=ib(window.MouseEvent);function ub(a){var b=a.getRootNode();u(b)&&Ua(b);return a.__shady&&a.__shady.assignedSlot||null}
var vb={addEventListener:nb.bind(window),removeEventListener:pb.bind(window)},wb={addEventListener:nb,removeEventListener:pb,appendChild:function(a){return P(this,a)},insertBefore:function(a,b){return P(this,a,b)},removeChild:function(a){return Q(this,a)},replaceChild:function(a,b){P(this,a,b);Q(this,b);return a},cloneNode:function(a){if("template"==this.localName)var b=O.cloneNode.call(this,a);else if(b=O.cloneNode.call(this,!1),a){a=this.childNodes;for(var c=0,d;c<a.length;c++)d=a[c].cloneNode(!0),
b.appendChild(d)}return b},getRootNode:function(){return Oa(this)},get isConnected(){var a=this.ownerDocument;if(a&&a.contains&&a.contains(this)||(a=a.documentElement)&&a.contains&&a.contains(this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.parentNode||(a instanceof Y?a.host:void 0);return!!(a&&a instanceof Document)},dispatchEvent:function(a){X();return O.dispatchEvent.call(this,a)}},xb={get assignedSlot(){return ub(this)}},yb={querySelector:function(a){return T(this,function(b){return ca.call(b,
a)},function(a){return!!a})[0]||null},querySelectorAll:function(a){return T(this,function(b){return ca.call(b,a)})}},zb={assignedNodes:function(a){if("slot"===this.localName){var b=this.getRootNode();u(b)&&Ua(b);return this.__shady?(a&&a.flatten?this.__shady.g:this.__shady.assignedNodes)||[]:[]}}},Ab=y({setAttribute:function(a,b){Qa(this,a,b)},removeAttribute:function(a){O.removeAttribute.call(this,a);Ma(this,a)},attachShadow:function(a){if(!this)throw"Must provide a host.";if(!a)throw"Not enough arguments.";
return new Y(Ta,this,a)},get slot(){return this.getAttribute("slot")},set slot(a){Qa(this,"slot",a)},get assignedSlot(){return ub(this)}},yb,zb);Object.defineProperties(Ab,qa);var Bb=y({importNode:function(a,b){return Ra(a,b)},getElementById:function(a){return T(this,function(b){return b.id==a},function(a){return!!a})[0]||null}},yb);Object.defineProperties(Bb,{_activeElement:K.activeElement});
var Cb=HTMLElement.prototype.blur,Db=y({blur:function(){var a=this.__shady&&this.__shady.root;(a=a&&a.activeElement)?a.blur():Cb.call(this)}});function Z(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],g=Object.getOwnPropertyDescriptor(b,e);g.value?a[e]=g.value:Object.defineProperty(a,e,g)}};if(p.H){window.ShadyDOM={inUse:p.H,patch:function(a){return a},isShadyRoot:u,enqueue:Sa,flush:X,settings:p,filterMutations:db,observeChildren:bb,unobserveChildren:cb,nativeMethods:O,nativeTree:D};window.Event=rb;window.CustomEvent=sb;window.MouseEvent=tb;qb();var Eb=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;Z(window.Node.prototype,wb);Z(window.Window.prototype,vb);Z(window.Text.prototype,xb);Z(window.DocumentFragment.prototype,yb);Z(window.Element.prototype,Ab);Z(window.Document.prototype,
Bb);window.HTMLSlotElement&&Z(window.HTMLSlotElement.prototype,zb);Z(Eb.prototype,Db);p.h&&(M(window.Node.prototype),M(window.Text.prototype),M(window.DocumentFragment.prototype),M(window.Element.prototype),M(Eb.prototype),M(window.Document.prototype),window.HTMLSlotElement&&M(window.HTMLSlotElement.prototype));window.ShadowRoot=Y};}).call(this);

//# sourceMappingURL=shadydom.min.js.map


/***/ })

});
//# sourceMappingURL=3.bundle.js.map