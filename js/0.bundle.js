(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(t,e,o){"use strict";var n=o(62),r=o.n(n);class i extends r.a.Text{}e.a=i},62:function(t,e,o){var n;"undefined"!=typeof self&&self,n=function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}([function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e){var o=this;return e="[Parchment] "+e,(o=t.call(this,e)||this).message=e,o.name=o.constructor.name,o}return r(e,t),e}(Error);e.ParchmentError=i;var a,s={},u={},c={},l={};function p(t,e){var o;if(void 0===e&&(e=a.ANY),"string"==typeof t)o=l[t]||s[t];else if(t instanceof Text||t.nodeType===Node.TEXT_NODE)o=l.text;else if("number"==typeof t)t&a.LEVEL&a.BLOCK?o=l.block:t&a.LEVEL&a.INLINE&&(o=l.inline);else if(t instanceof HTMLElement){var n=(t.getAttribute("class")||"").split(/\s+/);for(var r in n)if(o=u[n[r]])break;o=o||c[t.tagName]}return null==o?null:e&a.LEVEL&o.scope&&e&a.TYPE&o.scope?o:null}e.DATA_KEY="__blot",function(t){t[t.TYPE=3]="TYPE",t[t.LEVEL=12]="LEVEL",t[t.ATTRIBUTE=13]="ATTRIBUTE",t[t.BLOT=14]="BLOT",t[t.INLINE=7]="INLINE",t[t.BLOCK=11]="BLOCK",t[t.BLOCK_BLOT=10]="BLOCK_BLOT",t[t.INLINE_BLOT=6]="INLINE_BLOT",t[t.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",t[t.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",t[t.ANY=15]="ANY"}(a=e.Scope||(e.Scope={})),e.create=function(t,e){var o=p(t);if(null==o)throw new i("Unable to create "+t+" blot");var n=o,r=t instanceof Node||t.nodeType===Node.TEXT_NODE?t:n.create(e);return new n(r,e)},e.find=function t(o,n){return void 0===n&&(n=!1),null==o?null:null!=o[e.DATA_KEY]?o[e.DATA_KEY].blot:n?t(o.parentNode,n):null},e.query=p,e.register=function t(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];if(e.length>1)return e.map((function(e){return t(e)}));var n=e[0];if("string"!=typeof n.blotName&&"string"!=typeof n.attrName)throw new i("Invalid definition");if("abstract"===n.blotName)throw new i("Cannot register abstract class");if(l[n.blotName||n.attrName]=n,"string"==typeof n.keyName)s[n.keyName]=n;else if(null!=n.className&&(u[n.className]=n),null!=n.tagName){Array.isArray(n.tagName)?n.tagName=n.tagName.map((function(t){return t.toUpperCase()})):n.tagName=n.tagName.toUpperCase();var r=Array.isArray(n.tagName)?n.tagName:[n.tagName];r.forEach((function(t){null!=c[t]&&null!=n.className||(c[t]=n)}))}return n}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(0),r=function(){function t(t,e,o){void 0===o&&(o={}),this.attrName=t,this.keyName=e;var r=n.Scope.TYPE&n.Scope.ATTRIBUTE;null!=o.scope?this.scope=o.scope&n.Scope.LEVEL|r:this.scope=n.Scope.ATTRIBUTE,null!=o.whitelist&&(this.whitelist=o.whitelist)}return t.keys=function(t){return[].map.call(t.attributes,(function(t){return t.name}))},t.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.setAttribute(this.keyName,e),!0)},t.prototype.canAdd=function(t,e){return null!=n.query(t,n.Scope.BLOT&(this.scope|n.Scope.TYPE))&&(null==this.whitelist||("string"==typeof e?this.whitelist.indexOf(e.replace(/["']/g,""))>-1:this.whitelist.indexOf(e)>-1))},t.prototype.remove=function(t){t.removeAttribute(this.keyName)},t.prototype.value=function(t){var e=t.getAttribute(this.keyName);return this.canAdd(t,e)&&e?e:""},t}();e.default=r},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=o(11),a=o(5),s=o(0),u=function(t){function e(e){var o=t.call(this,e)||this;return o.build(),o}return r(e,t),e.prototype.appendChild=function(t){this.insertBefore(t)},e.prototype.attach=function(){t.prototype.attach.call(this),this.children.forEach((function(t){t.attach()}))},e.prototype.build=function(){var t=this;this.children=new i.default,[].slice.call(this.domNode.childNodes).reverse().forEach((function(e){try{var o=c(e);t.insertBefore(o,t.children.head||void 0)}catch(t){if(t instanceof s.ParchmentError)return;throw t}}))},e.prototype.deleteAt=function(t,e){if(0===t&&e===this.length())return this.remove();this.children.forEachAt(t,e,(function(t,e,o){t.deleteAt(e,o)}))},e.prototype.descendant=function(t,o){var n=this.children.find(o),r=n[0],i=n[1];return null==t.blotName&&t(r)||null!=t.blotName&&r instanceof t?[r,i]:r instanceof e?r.descendant(t,i):[null,-1]},e.prototype.descendants=function(t,o,n){void 0===o&&(o=0),void 0===n&&(n=Number.MAX_VALUE);var r=[],i=n;return this.children.forEachAt(o,n,(function(o,n,a){(null==t.blotName&&t(o)||null!=t.blotName&&o instanceof t)&&r.push(o),o instanceof e&&(r=r.concat(o.descendants(t,n,i))),i-=a})),r},e.prototype.detach=function(){this.children.forEach((function(t){t.detach()})),t.prototype.detach.call(this)},e.prototype.formatAt=function(t,e,o,n){this.children.forEachAt(t,e,(function(t,e,r){t.formatAt(e,r,o,n)}))},e.prototype.insertAt=function(t,e,o){var n=this.children.find(t),r=n[0],i=n[1];if(r)r.insertAt(i,e,o);else{var a=null==o?s.create("text",e):s.create(e,o);this.appendChild(a)}},e.prototype.insertBefore=function(t,e){if(null!=this.statics.allowedChildren&&!this.statics.allowedChildren.some((function(e){return t instanceof e})))throw new s.ParchmentError("Cannot insert "+t.statics.blotName+" into "+this.statics.blotName);t.insertInto(this,e)},e.prototype.length=function(){return this.children.reduce((function(t,e){return t+e.length()}),0)},e.prototype.moveChildren=function(t,e){this.children.forEach((function(o){t.insertBefore(o,e)}))},e.prototype.optimize=function(e){if(t.prototype.optimize.call(this,e),0===this.children.length)if(null!=this.statics.defaultChild){var o=s.create(this.statics.defaultChild);this.appendChild(o),o.optimize(e)}else this.remove()},e.prototype.path=function(t,o){void 0===o&&(o=!1);var n=this.children.find(t,o),r=n[0],i=n[1],a=[[this,t]];return r instanceof e?a.concat(r.path(i,o)):(null!=r&&a.push([r,i]),a)},e.prototype.removeChild=function(t){this.children.remove(t)},e.prototype.replace=function(o){o instanceof e&&o.moveChildren(this),t.prototype.replace.call(this,o)},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var o=this.clone();return this.parent.insertBefore(o,this.next),this.children.forEachAt(t,this.length(),(function(t,n,r){t=t.split(n,e),o.appendChild(t)})),o},e.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},e.prototype.update=function(t,e){var o=this,n=[],r=[];t.forEach((function(t){t.target===o.domNode&&"childList"===t.type&&(n.push.apply(n,t.addedNodes),r.push.apply(r,t.removedNodes))})),r.forEach((function(t){if(!(null!=t.parentNode&&"IFRAME"!==t.tagName&&document.body.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var e=s.find(t);null!=e&&(null!=e.domNode.parentNode&&e.domNode.parentNode!==o.domNode||e.detach())}})),n.filter((function(t){return t.parentNode==o.domNode})).sort((function(t,e){return t===e?0:t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1})).forEach((function(t){var e=null;null!=t.nextSibling&&(e=s.find(t.nextSibling));var n=c(t);n.next==e&&null!=n.next||(null!=n.parent&&n.parent.removeChild(o),o.insertBefore(n,e||void 0))}))},e}(a.default);function c(t){var e=s.find(t);if(null==e)try{e=s.create(t)}catch(o){e=s.create(s.Scope.INLINE),[].slice.call(t.childNodes).forEach((function(t){e.domNode.appendChild(t)})),t.parentNode&&t.parentNode.replaceChild(e.domNode,t),e.attach()}return e}e.default=u},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=o(1),a=o(6),s=o(2),u=o(0),c=function(t){function e(e){var o=t.call(this,e)||this;return o.attributes=new a.default(o.domNode),o}return r(e,t),e.formats=function(t){return"string"==typeof this.tagName||(Array.isArray(this.tagName)?t.tagName.toLowerCase():void 0)},e.prototype.format=function(t,e){var o=u.query(t);o instanceof i.default?this.attributes.attribute(o,e):e&&(null==o||t===this.statics.blotName&&this.formats()[t]===e||this.replaceWith(t,e))},e.prototype.formats=function(){var t=this.attributes.values(),e=this.statics.formats(this.domNode);return null!=e&&(t[this.statics.blotName]=e),t},e.prototype.replaceWith=function(e,o){var n=t.prototype.replaceWith.call(this,e,o);return this.attributes.copy(n),n},e.prototype.update=function(e,o){var n=this;t.prototype.update.call(this,e,o),e.some((function(t){return t.target===n.domNode&&"attributes"===t.type}))&&this.attributes.build()},e.prototype.wrap=function(o,n){var r=t.prototype.wrap.call(this,o,n);return r instanceof e&&r.statics.scope===this.statics.scope&&this.attributes.move(r),r},e}(s.default);e.default=c},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=o(5),a=o(0),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.value=function(t){return!0},e.prototype.index=function(t,e){return this.domNode===t||this.domNode.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(e,1):-1},e.prototype.position=function(t,e){var o=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return t>0&&(o+=1),[this.parent.domNode,o]},e.prototype.value=function(){return(t={})[this.statics.blotName]=this.statics.value(this.domNode)||!0,t;var t},e.scope=a.Scope.INLINE_BLOT,e}(i.default);e.default=s},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(0),r=function(){function t(t){this.domNode=t,this.domNode[n.DATA_KEY]={blot:this}}return Object.defineProperty(t.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),t.create=function(t){if(null==this.tagName)throw new n.ParchmentError("Blot definition missing tagName");var e;return Array.isArray(this.tagName)?("string"==typeof t&&(t=t.toUpperCase(),parseInt(t).toString()===t&&(t=parseInt(t))),e="number"==typeof t?document.createElement(this.tagName[t-1]):this.tagName.indexOf(t)>-1?document.createElement(t):document.createElement(this.tagName[0])):e=document.createElement(this.tagName),this.className&&e.classList.add(this.className),e},t.prototype.attach=function(){null!=this.parent&&(this.scroll=this.parent.scroll)},t.prototype.clone=function(){var t=this.domNode.cloneNode(!1);return n.create(t)},t.prototype.detach=function(){null!=this.parent&&this.parent.removeChild(this),delete this.domNode[n.DATA_KEY]},t.prototype.deleteAt=function(t,e){this.isolate(t,e).remove()},t.prototype.formatAt=function(t,e,o,r){var i=this.isolate(t,e);if(null!=n.query(o,n.Scope.BLOT)&&r)i.wrap(o,r);else if(null!=n.query(o,n.Scope.ATTRIBUTE)){var a=n.create(this.statics.scope);i.wrap(a),a.format(o,r)}},t.prototype.insertAt=function(t,e,o){var r=null==o?n.create("text",e):n.create(e,o),i=this.split(t);this.parent.insertBefore(r,i)},t.prototype.insertInto=function(t,e){void 0===e&&(e=null),null!=this.parent&&this.parent.children.remove(this);var o=null;t.children.insertBefore(this,e),null!=e&&(o=e.domNode),this.domNode.parentNode==t.domNode&&this.domNode.nextSibling==o||t.domNode.insertBefore(this.domNode,o),this.parent=t,this.attach()},t.prototype.isolate=function(t,e){var o=this.split(t);return o.split(e),o},t.prototype.length=function(){return 1},t.prototype.offset=function(t){return void 0===t&&(t=this.parent),null==this.parent||this==t?0:this.parent.children.offset(this)+this.parent.offset(t)},t.prototype.optimize=function(t){null!=this.domNode[n.DATA_KEY]&&delete this.domNode[n.DATA_KEY].mutations},t.prototype.remove=function(){null!=this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},t.prototype.replace=function(t){null!=t.parent&&(t.parent.insertBefore(this,t.next),t.remove())},t.prototype.replaceWith=function(t,e){var o="string"==typeof t?n.create(t,e):t;return o.replace(this),o},t.prototype.split=function(t,e){return 0===t?this:this.next},t.prototype.update=function(t,e){},t.prototype.wrap=function(t,e){var o="string"==typeof t?n.create(t,e):t;return null!=this.parent&&this.parent.insertBefore(o,this.next),o.appendChild(this),o},t.blotName="abstract",t}();e.default=r},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),r=o(7),i=o(8),a=o(0),s=function(){function t(t){this.attributes={},this.domNode=t,this.build()}return t.prototype.attribute=function(t,e){e?t.add(this.domNode,e)&&(null!=t.value(this.domNode)?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),delete this.attributes[t.attrName])},t.prototype.build=function(){var t=this;this.attributes={};var e=n.default.keys(this.domNode),o=r.default.keys(this.domNode),s=i.default.keys(this.domNode);e.concat(o).concat(s).forEach((function(e){var o=a.query(e,a.Scope.ATTRIBUTE);o instanceof n.default&&(t.attributes[o.attrName]=o)}))},t.prototype.copy=function(t){var e=this;Object.keys(this.attributes).forEach((function(o){var n=e.attributes[o].value(e.domNode);t.format(o,n)}))},t.prototype.move=function(t){var e=this;this.copy(t),Object.keys(this.attributes).forEach((function(t){e.attributes[t].remove(e.domNode)})),this.attributes={}},t.prototype.values=function(){var t=this;return Object.keys(this.attributes).reduce((function(e,o){return e[o]=t.attributes[o].value(t.domNode),e}),{})},t}();e.default=s},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});function i(t,e){return(t.getAttribute("class")||"").split(/\s+/).filter((function(t){return 0===t.indexOf(e+"-")}))}Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.keys=function(t){return(t.getAttribute("class")||"").split(/\s+/).map((function(t){return t.split("-").slice(0,-1).join("-")}))},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(this.remove(t),t.classList.add(this.keyName+"-"+e),!0)},e.prototype.remove=function(t){i(t,this.keyName).forEach((function(e){t.classList.remove(e)})),0===t.classList.length&&t.removeAttribute("class")},e.prototype.value=function(t){var e=(i(t,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(t,e)?e:""},e}(o(1).default);e.default=a},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});function i(t){var e=t.split("-"),o=e.slice(1).map((function(t){return t[0].toUpperCase()+t.slice(1)})).join("");return e[0]+o}Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.keys=function(t){return(t.getAttribute("style")||"").split(";").map((function(t){return t.split(":")[0].trim()}))},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.style[i(this.keyName)]=e,!0)},e.prototype.remove=function(t){t.style[i(this.keyName)]="",t.getAttribute("style")||t.removeAttribute("style")},e.prototype.value=function(t){var e=t.style[i(this.keyName)];return this.canAdd(t,e)?e:""},e}(o(1).default);e.default=a},function(t,e,o){t.exports=o(10)},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(2),r=o(3),i=o(4),a=o(12),s=o(13),u=o(14),c=o(15),l=o(16),p=o(1),f=o(7),h=o(8),d=o(6),m=o(0),y={Scope:m.Scope,create:m.create,find:m.find,query:m.query,register:m.register,Container:n.default,Format:r.default,Leaf:i.default,Embed:c.default,Scroll:a.default,Block:u.default,Inline:s.default,Text:l.default,Attributor:{Attribute:p.default,Class:f.default,Style:h.default,Store:d.default}};e.default=y},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.head=this.tail=null,this.length=0}return t.prototype.append=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.insertBefore(t[0],null),t.length>1&&this.append.apply(this,t.slice(1))},t.prototype.contains=function(t){for(var e,o=this.iterator();e=o();)if(e===t)return!0;return!1},t.prototype.insertBefore=function(t,e){t&&(t.next=e,null!=e?(t.prev=e.prev,null!=e.prev&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):null!=this.tail?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=null,this.head=this.tail=t),this.length+=1)},t.prototype.offset=function(t){for(var e=0,o=this.head;null!=o;){if(o===t)return e;e+=o.length(),o=o.next}return-1},t.prototype.remove=function(t){this.contains(t)&&(null!=t.prev&&(t.prev.next=t.next),null!=t.next&&(t.next.prev=t.prev),t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)},t.prototype.iterator=function(t){return void 0===t&&(t=this.head),function(){var e=t;return null!=t&&(t=t.next),e}},t.prototype.find=function(t,e){void 0===e&&(e=!1);for(var o,n=this.iterator();o=n();){var r=o.length();if(t<r||e&&t===r&&(null==o.next||0!==o.next.length()))return[o,t];t-=r}return[null,0]},t.prototype.forEach=function(t){for(var e,o=this.iterator();e=o();)t(e)},t.prototype.forEachAt=function(t,e,o){if(!(e<=0))for(var n,r=this.find(t),i=r[0],a=t-r[1],s=this.iterator(i);(n=s())&&a<t+e;){var u=n.length();t>a?o(n,t-a,Math.min(e,a+u-t)):o(n,0,Math.min(u,t+e-a)),a+=u}},t.prototype.map=function(t){return this.reduce((function(e,o){return e.push(t(o)),e}),[])},t.prototype.reduce=function(t,e){for(var o,n=this.iterator();o=n();)e=t(e,o);return e},t}();e.default=n},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=o(2),a=o(0),s={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},u=function(t){function e(e){var o=t.call(this,e)||this;return o.scroll=o,o.observer=new MutationObserver((function(t){o.update(t)})),o.observer.observe(o.domNode,s),o.attach(),o}return r(e,t),e.prototype.detach=function(){t.prototype.detach.call(this),this.observer.disconnect()},e.prototype.deleteAt=function(e,o){this.update(),0===e&&o===this.length()?this.children.forEach((function(t){t.remove()})):t.prototype.deleteAt.call(this,e,o)},e.prototype.formatAt=function(e,o,n,r){this.update(),t.prototype.formatAt.call(this,e,o,n,r)},e.prototype.insertAt=function(e,o,n){this.update(),t.prototype.insertAt.call(this,e,o,n)},e.prototype.optimize=function(e,o){var n=this;void 0===e&&(e=[]),void 0===o&&(o={}),t.prototype.optimize.call(this,o);for(var r=[].slice.call(this.observer.takeRecords());r.length>0;)e.push(r.pop());for(var s=function(t,e){void 0===e&&(e=!0),null!=t&&t!==n&&null!=t.domNode.parentNode&&(null==t.domNode[a.DATA_KEY].mutations&&(t.domNode[a.DATA_KEY].mutations=[]),e&&s(t.parent))},u=function(t){null!=t.domNode[a.DATA_KEY]&&null!=t.domNode[a.DATA_KEY].mutations&&(t instanceof i.default&&t.children.forEach(u),t.optimize(o))},c=e,l=0;c.length>0;l+=1){if(l>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(c.forEach((function(t){var e=a.find(t.target,!0);null!=e&&(e.domNode===t.target&&("childList"===t.type?(s(a.find(t.previousSibling,!1)),[].forEach.call(t.addedNodes,(function(t){var e=a.find(t,!1);s(e,!1),e instanceof i.default&&e.children.forEach((function(t){s(t,!1)}))}))):"attributes"===t.type&&s(e.prev)),s(e))})),this.children.forEach(u),r=(c=[].slice.call(this.observer.takeRecords())).slice();r.length>0;)e.push(r.pop())}},e.prototype.update=function(e,o){var n=this;void 0===o&&(o={}),(e=e||this.observer.takeRecords()).map((function(t){var e=a.find(t.target,!0);return null==e?null:null==e.domNode[a.DATA_KEY].mutations?(e.domNode[a.DATA_KEY].mutations=[t],e):(e.domNode[a.DATA_KEY].mutations.push(t),null)})).forEach((function(t){null!=t&&t!==n&&null!=t.domNode[a.DATA_KEY]&&t.update(t.domNode[a.DATA_KEY].mutations||[],o)})),null!=this.domNode[a.DATA_KEY].mutations&&t.prototype.update.call(this,this.domNode[a.DATA_KEY].mutations,o),this.optimize(e,o)},e.blotName="scroll",e.defaultChild="block",e.scope=a.Scope.BLOCK_BLOT,e.tagName="DIV",e}(i.default);e.default=u},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=o(3),a=o(0),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.formats=function(o){if(o.tagName!==e.tagName)return t.formats.call(this,o)},e.prototype.format=function(o,n){var r=this;o!==this.statics.blotName||n?t.prototype.format.call(this,o,n):(this.children.forEach((function(t){t instanceof i.default||(t=t.wrap(e.blotName,!0)),r.attributes.copy(t)})),this.unwrap())},e.prototype.formatAt=function(e,o,n,r){null!=this.formats()[n]||a.query(n,a.Scope.ATTRIBUTE)?this.isolate(e,o).format(n,r):t.prototype.formatAt.call(this,e,o,n,r)},e.prototype.optimize=function(o){t.prototype.optimize.call(this,o);var n=this.formats();if(0===Object.keys(n).length)return this.unwrap();var r=this.next;r instanceof e&&r.prev===this&&function(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var o in t)if(t[o]!==e[o])return!1;return!0}(n,r.formats())&&(r.moveChildren(this),r.remove())},e.blotName="inline",e.scope=a.Scope.INLINE_BLOT,e.tagName="SPAN",e}(i.default);e.default=s},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=o(3),a=o(0),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.formats=function(o){var n=a.query(e.blotName).tagName;if(o.tagName!==n)return t.formats.call(this,o)},e.prototype.format=function(o,n){null!=a.query(o,a.Scope.BLOCK)&&(o!==this.statics.blotName||n?t.prototype.format.call(this,o,n):this.replaceWith(e.blotName))},e.prototype.formatAt=function(e,o,n,r){null!=a.query(n,a.Scope.BLOCK)?this.format(n,r):t.prototype.formatAt.call(this,e,o,n,r)},e.prototype.insertAt=function(e,o,n){if(null==n||null!=a.query(o,a.Scope.INLINE))t.prototype.insertAt.call(this,e,o,n);else{var r=this.split(e),i=a.create(o,n);r.parent.insertBefore(i,r)}},e.prototype.update=function(e,o){navigator.userAgent.match(/Trident/)?this.build():t.prototype.update.call(this,e,o)},e.blotName="block",e.scope=a.Scope.BLOCK_BLOT,e.tagName="P",e}(i.default);e.default=s},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.formats=function(t){},e.prototype.format=function(e,o){t.prototype.formatAt.call(this,0,this.length(),e,o)},e.prototype.formatAt=function(e,o,n,r){0===e&&o===this.length()?this.format(n,r):t.prototype.formatAt.call(this,e,o,n,r)},e.prototype.formats=function(){return this.statics.formats(this.domNode)},e}(o(4).default);e.default=i},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=o(4),a=o(0),s=function(t){function e(e){var o=t.call(this,e)||this;return o.text=o.statics.value(o.domNode),o}return r(e,t),e.create=function(t){return document.createTextNode(t)},e.value=function(t){var e=t.data;return e.normalize&&(e=e.normalize()),e},e.prototype.deleteAt=function(t,e){this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)},e.prototype.index=function(t,e){return this.domNode===t?e:-1},e.prototype.insertAt=function(e,o,n){null==n?(this.text=this.text.slice(0,e)+o+this.text.slice(e),this.domNode.data=this.text):t.prototype.insertAt.call(this,e,o,n)},e.prototype.length=function(){return this.text.length},e.prototype.optimize=function(o){t.prototype.optimize.call(this,o),this.text=this.statics.value(this.domNode),0===this.text.length?this.remove():this.next instanceof e&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},e.prototype.position=function(t,e){return void 0===e&&(e=!1),[this.domNode,t]},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var o=a.create(this.domNode.splitText(t));return this.parent.insertBefore(o,this.next),this.text=this.statics.value(this.domNode),o},e.prototype.update=function(t,e){var o=this;t.some((function(t){return"characterData"===t.type&&t.target===o.domNode}))&&(this.text=this.statics.value(this.domNode))},e.prototype.value=function(){return this.text},e.blotName="text",e.scope=a.Scope.INLINE_BLOT,e}(i.default);e.default=s}])},t.exports=n()},81:function(t,e,o){"use strict";var n=o(166),r=o(62),i=o.n(r);class a extends i.a.Inline{static compare(t,e){let o=a.order.indexOf(t),n=a.order.indexOf(e);return o>=0||n>=0?o-n:t===e?0:t<e?-1:1}formatAt(t,e,o,n){if(a.compare(this.statics.blotName,o)<0&&i.a.query(o,i.a.Scope.BLOT)){let r=this.isolate(t,e);n&&r.wrap(o,n)}else super.formatAt(t,e,o,n)}optimize(t){if(super.optimize(t),this.parent instanceof a&&a.compare(this.statics.blotName,this.parent.statics.blotName)>0){let t=this.parent.isolate(this.offset(),this.length());this.moveChildren(t),t.wrap(this)}}}a.allowedChildren=[a,i.a.Embed,n.a],a.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],e.a=a}}]);