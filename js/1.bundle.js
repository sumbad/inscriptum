(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{119:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,i=Object.prototype.toString,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,u=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===i.call(t)},a=function(t){if(!t||"[object Object]"!==i.call(t))return!1;var e,r=n.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!r&&!o)return!1;for(e in t);return void 0===e||n.call(t,e)},c=function(t,e){o&&"__proto__"===e.name?o(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},l=function(t,e){if("__proto__"===e){if(!n.call(t,e))return;if(s)return s(t,e).value}return t[e]};t.exports=function t(){var e,r,n,i,o,s,p=arguments[0],f=1,h=arguments.length,g=!1;for("boolean"==typeof p&&(g=p,p=arguments[1]||{},f=2),(null==p||"object"!=typeof p&&"function"!=typeof p)&&(p={});f<h;++f)if(null!=(e=arguments[f]))for(r in e)n=l(p,r),p!==(i=l(e,r))&&(g&&i&&(a(i)||(o=u(i)))?(o?(o=!1,s=n&&u(n)?n:[]):s=n&&a(n)?n:{},c(p,{name:r,newValue:t(g,s,i)})):void 0!==i&&c(p,{name:r,newValue:i}));return p}},120:function(t,e,r){"use strict";var n=r(43),i=r.n(n),o=r(42);class s extends i.a.Container{}s.allowedChildren=[o.c,o.a,s],e.a=s},132:function(t,e,r){var n=r(172),i=r(180),o=r(181),s=r(182),u=r(186),a=r(188),c=Date.prototype.getTime;function l(t,e,r){var h=r||{};return!(h.strict?!o(t,e):t!==e)||(!t||!e||"object"!=typeof t&&"object"!=typeof e?h.strict?o(t,e):t==e:function(t,e,r){var o,h;if(typeof t!=typeof e)return!1;if(p(t)||p(e))return!1;if(t.prototype!==e.prototype)return!1;if(i(t)!==i(e))return!1;var g=s(t),y=s(e);if(g!==y)return!1;if(g||y)return t.source===e.source&&u(t)===u(e);if(a(t)&&a(e))return c.call(t)===c.call(e);var b=f(t),v=f(e);if(b!==v)return!1;if(b||v){if(t.length!==e.length)return!1;for(o=0;o<t.length;o++)if(t[o]!==e[o])return!1;return!0}if(typeof t!=typeof e)return!1;try{var d=n(t),m=n(e)}catch(t){return!1}if(d.length!==m.length)return!1;for(d.sort(),m.sort(),o=d.length-1;o>=0;o--)if(d[o]!=m[o])return!1;for(o=d.length-1;o>=0;o--)if(h=d[o],!l(t[h],e[h],r))return!1;return!0}(t,e,h))}function p(t){return null==t}function f(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}t.exports=l},152:function(t,e,r){"use strict";var n=r(43),i=r.n(n);class o extends i.a.Embed{static value(){}insertInto(t,e){0===t.children.length?super.insertInto(t,e):this.remove()}length(){return 0}value(){return""}}o.blotName="break",o.tagName="BR",e.a=o},159:function(t,e,r){"use strict";var n=r(172),i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,s=Array.prototype.concat,u=Object.defineProperty,a=u&&function(){var t={};try{for(var e in u(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),c=function(t,e,r,n){var i;e in t&&("function"!=typeof(i=n)||"[object Function]"!==o.call(i)||!n())||(a?u(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r)},l=function(t,e){var r=arguments.length>2?arguments[2]:{},o=n(e);i&&(o=s.call(o,Object.getOwnPropertySymbols(e)));for(var u=0;u<o.length;u+=1)c(t,o[u],e[o[u]],r[o[u]])};l.supportsDescriptors=!!a,t.exports=l},160:function(t,e,r){var n=r(132),i=r(119),o={attributes:{compose:function(t,e,r){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var n=i(!0,{},e);for(var o in r||(n=Object.keys(n).reduce((function(t,e){return null!=n[e]&&(t[e]=n[e]),t}),{})),t)void 0!==t[o]&&void 0===e[o]&&(n[o]=t[o]);return Object.keys(n).length>0?n:void 0},diff:function(t,e){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var r=Object.keys(t).concat(Object.keys(e)).reduce((function(r,i){return n(t[i],e[i])||(r[i]=void 0===e[i]?null:e[i]),r}),{});return Object.keys(r).length>0?r:void 0},transform:function(t,e,r){if("object"!=typeof t)return e;if("object"==typeof e){if(!r)return e;var n=Object.keys(e).reduce((function(r,n){return void 0===t[n]&&(r[n]=e[n]),r}),{});return Object.keys(n).length>0?n:void 0}}},iterator:function(t){return new s(t)},length:function(t){return"number"==typeof t.delete?t.delete:"number"==typeof t.retain?t.retain:"string"==typeof t.insert?t.insert.length:1}};function s(t){this.ops=t,this.index=0,this.offset=0}s.prototype.hasNext=function(){return this.peekLength()<1/0},s.prototype.next=function(t){t||(t=1/0);var e=this.ops[this.index];if(e){var r=this.offset,n=o.length(e);if(t>=n-r?(t=n-r,this.index+=1,this.offset=0):this.offset+=t,"number"==typeof e.delete)return{delete:t};var i={};return e.attributes&&(i.attributes=e.attributes),"number"==typeof e.retain?i.retain=t:"string"==typeof e.insert?i.insert=e.insert.substr(r,t):i.insert=e.insert,i}return{retain:1/0}},s.prototype.peek=function(){return this.ops[this.index]},s.prototype.peekLength=function(){return this.ops[this.index]?o.length(this.ops[this.index])-this.offset:1/0},s.prototype.peekType=function(){return this.ops[this.index]?"number"==typeof this.ops[this.index].delete?"delete":"number"==typeof this.ops[this.index].retain?"retain":"insert":"retain"},s.prototype.rest=function(){if(this.hasNext()){if(0===this.offset)return this.ops.slice(this.index);var t=this.offset,e=this.index,r=this.next(),n=this.ops.slice(this.index);return this.offset=t,this.index=e,[r].concat(n)}return[]},t.exports=o},172:function(t,e,r){"use strict";var n=Array.prototype.slice,i=r(173),o=Object.keys,s=o?function(t){return o(t)}:r(179),u=Object.keys;s.shim=function(){Object.keys?function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2)||(Object.keys=function(t){return i(t)?u(n.call(t)):u(t)}):Object.keys=s;return Object.keys||s},t.exports=s},173:function(t,e,r){"use strict";var n=Object.prototype.toString;t.exports=function(t){var e=n.call(t),r="[object Arguments]"===e;return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee)),r}},174:function(t,e,r){"use strict";var n=Object,i=TypeError;t.exports=function(){if(null!=this&&this!==n(this))throw new i("RegExp.prototype.flags getter called on non-object");var t="";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),this.dotAll&&(t+="s"),this.unicode&&(t+="u"),this.sticky&&(t+="y"),t}},175:function(t,e,r){"use strict";var n=r(174),i=r(159).supportsDescriptors,o=Object.getOwnPropertyDescriptor,s=TypeError;t.exports=function(){if(!i)throw new s("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");if("gim"===/a/gim.flags){var t=o(RegExp.prototype,"flags");if(t&&"function"==typeof t.get&&"boolean"==typeof/a/.dotAll)return t.get}return n}},178:function(t,e){function r(t,e,s){if(t==e)return t?[[0,t]]:[];(s<0||t.length<s)&&(s=null);var a=i(t,e),c=t.substring(0,a);a=o(t=t.substring(a),e=e.substring(a));var l=t.substring(t.length-a),p=function(t,e){var s;if(!t)return[[1,e]];if(!e)return[[-1,t]];var u=t.length>e.length?t:e,a=t.length>e.length?e:t,c=u.indexOf(a);if(-1!=c)return s=[[1,u.substring(0,c)],[0,a],[1,u.substring(c+a.length)]],t.length>e.length&&(s[0][0]=s[2][0]=-1),s;if(1==a.length)return[[-1,t],[1,e]];var l=function(t,e){var r=t.length>e.length?t:e,n=t.length>e.length?e:t;if(r.length<4||2*n.length<r.length)return null;function s(t,e,r){for(var n,s,u,a,c=t.substring(r,r+Math.floor(t.length/4)),l=-1,p="";-1!=(l=e.indexOf(c,l+1));){var f=i(t.substring(r),e.substring(l)),h=o(t.substring(0,r),e.substring(0,l));p.length<h+f&&(p=e.substring(l-h,l)+e.substring(l,l+f),n=t.substring(0,r-h),s=t.substring(r+f),u=e.substring(0,l-h),a=e.substring(l+f))}return 2*p.length>=t.length?[n,s,u,a,p]:null}var u,a,c,l,p,f=s(r,n,Math.ceil(r.length/4)),h=s(r,n,Math.ceil(r.length/2));if(!f&&!h)return null;u=h?f&&f[4].length>h[4].length?f:h:f;t.length>e.length?(a=u[0],c=u[1],l=u[2],p=u[3]):(l=u[0],p=u[1],a=u[2],c=u[3]);var g=u[4];return[a,c,l,p,g]}(t,e);if(l){var p=l[0],f=l[1],h=l[2],g=l[3],y=l[4],b=r(p,h),v=r(f,g);return b.concat([[0,y]],v)}return function(t,e){for(var r=t.length,i=e.length,o=Math.ceil((r+i)/2),s=o,u=2*o,a=new Array(u),c=new Array(u),l=0;l<u;l++)a[l]=-1,c[l]=-1;a[s+1]=0,c[s+1]=0;for(var p=r-i,f=p%2!=0,h=0,g=0,y=0,b=0,v=0;v<o;v++){for(var d=-v+h;d<=v-g;d+=2){for(var m=s+d,x=(A=d==-v||d!=v&&a[m-1]<a[m+1]?a[m+1]:a[m-1]+1)-d;A<r&&x<i&&t.charAt(A)==e.charAt(x);)A++,x++;if(a[m]=A,A>r)g+=2;else if(x>i)h+=2;else if(f){if((O=s+p-d)>=0&&O<u&&-1!=c[O]){var j=r-c[O];if(A>=j)return n(t,e,A,x)}}}for(var w=-v+y;w<=v-b;w+=2){for(var O=s+w,k=(j=w==-v||w!=v&&c[O-1]<c[O+1]?c[O+1]:c[O-1]+1)-w;j<r&&k<i&&t.charAt(r-j-1)==e.charAt(i-k-1);)j++,k++;if(c[O]=j,j>r)b+=2;else if(k>i)y+=2;else if(!f){if((m=s+p-w)>=0&&m<u&&-1!=a[m]){var A=a[m];x=s+A-m;if(A>=(j=r-j))return n(t,e,A,x)}}}}return[[-1,t],[1,e]]}(t,e)}(t=t.substring(0,t.length-a),e=e.substring(0,e.length-a));return c&&p.unshift([0,c]),l&&p.push([0,l]),function t(e){e.push([0,""]);var r,n=0,s=0,u=0,a="",c="";for(;n<e.length;)switch(e[n][0]){case 1:u++,c+=e[n][1],n++;break;case-1:s++,a+=e[n][1],n++;break;case 0:s+u>1?(0!==s&&0!==u&&(0!==(r=i(c,a))&&(n-s-u>0&&0==e[n-s-u-1][0]?e[n-s-u-1][1]+=c.substring(0,r):(e.splice(0,0,[0,c.substring(0,r)]),n++),c=c.substring(r),a=a.substring(r)),0!==(r=o(c,a))&&(e[n][1]=c.substring(c.length-r)+e[n][1],c=c.substring(0,c.length-r),a=a.substring(0,a.length-r))),0===s?e.splice(n-u,s+u,[1,c]):0===u?e.splice(n-s,s+u,[-1,a]):e.splice(n-s-u,s+u,[-1,a],[1,c]),n=n-s-u+(s?1:0)+(u?1:0)+1):0!==n&&0==e[n-1][0]?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,u=0,s=0,a="",c=""}""===e[e.length-1][1]&&e.pop();var l=!1;n=1;for(;n<e.length-1;)0==e[n-1][0]&&0==e[n+1][0]&&(e[n][1].substring(e[n][1].length-e[n-1][1].length)==e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),l=!0):e[n][1].substring(0,e[n+1][1].length)==e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),l=!0)),n++;l&&t(e)}(p),null!=s&&(p=function(t,e){var r=function(t,e){if(0===e)return[0,t];for(var r=0,n=0;n<t.length;n++){var i=t[n];if(-1===i[0]||0===i[0]){var o=r+i[1].length;if(e===o)return[n+1,t];if(e<o){t=t.slice();var s=e-r,u=[i[0],i[1].slice(0,s)],a=[i[0],i[1].slice(s)];return t.splice(n,1,u,a),[n+1,t]}r=o}}throw new Error("cursor_pos is out of bounds!")}(t,e),n=r[1],i=r[0],o=n[i],s=n[i+1];if(null==o)return t;if(0!==o[0])return t;if(null!=s&&o[1]+s[1]===s[1]+o[1])return n.splice(i,2,s,o),u(n,i,2);if(null!=s&&0===s[1].indexOf(o[1])){n.splice(i,2,[s[0],o[1]],[0,o[1]]);var a=s[1].slice(o[1].length);return a.length>0&&n.splice(i+2,0,[s[0],a]),u(n,i,3)}return t}(p,s)),p=function(t){for(var e=!1,r=function(t){return t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343},n=2;n<t.length;n+=1)0===t[n-2][0]&&((i=t[n-2][1]).charCodeAt(i.length-1)>=55296&&i.charCodeAt(i.length-1)<=56319)&&-1===t[n-1][0]&&r(t[n-1][1])&&1===t[n][0]&&r(t[n][1])&&(e=!0,t[n-1][1]=t[n-2][1].slice(-1)+t[n-1][1],t[n][1]=t[n-2][1].slice(-1)+t[n][1],t[n-2][1]=t[n-2][1].slice(0,-1));var i;if(!e)return t;var o=[];for(n=0;n<t.length;n+=1)t[n][1].length>0&&o.push(t[n]);return o}(p)}function n(t,e,n,i){var o=t.substring(0,n),s=e.substring(0,i),u=t.substring(n),a=e.substring(i),c=r(o,s),l=r(u,a);return c.concat(l)}function i(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var r=0,n=Math.min(t.length,e.length),i=n,o=0;r<i;)t.substring(o,i)==e.substring(o,i)?o=r=i:n=i,i=Math.floor((n-r)/2+r);return i}function o(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var r=0,n=Math.min(t.length,e.length),i=n,o=0;r<i;)t.substring(t.length-i,t.length-o)==e.substring(e.length-i,e.length-o)?o=r=i:n=i,i=Math.floor((n-r)/2+r);return i}var s=r;function u(t,e,r){for(var n=e+r-1;n>=0&&n>=e-1;n--)if(n+1<t.length){var i=t[n],o=t[n+1];i[0]===o[1]&&t.splice(n,2,[i[0],i[1]+o[1]])}return t}s.INSERT=1,s.DELETE=-1,s.EQUAL=0,t.exports=s},179:function(t,e,r){"use strict";var n;if(!Object.keys){var i=Object.prototype.hasOwnProperty,o=Object.prototype.toString,s=r(173),u=Object.prototype.propertyIsEnumerable,a=!u.call({toString:null},"toString"),c=u.call((function(){}),"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(t){var e=t.constructor;return e&&e.prototype===t},f={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},h=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!f["$"+t]&&i.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{p(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();n=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===o.call(t),n=s(t),u=e&&"[object String]"===o.call(t),f=[];if(!e&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var g=c&&r;if(u&&t.length>0&&!i.call(t,0))for(var y=0;y<t.length;++y)f.push(String(y));if(n&&t.length>0)for(var b=0;b<t.length;++b)f.push(String(b));else for(var v in t)g&&"prototype"===v||!i.call(t,v)||f.push(String(v));if(a)for(var d=function(t){if("undefined"==typeof window||!h)return p(t);try{return p(t)}catch(t){return!1}}(t),m=0;m<l.length;++m)d&&"constructor"===l[m]||!i.call(t,l[m])||f.push(l[m]);return f}}t.exports=n},180:function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,i=Object.prototype.toString,o=function(t){return!(n&&t&&"object"==typeof t&&Symbol.toStringTag in t)&&"[object Arguments]"===i.call(t)},s=function(t){return!!o(t)||null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==i.call(t)&&"[object Function]"===i.call(t.callee)},u=function(){return o(arguments)}();o.isLegacyArguments=s,t.exports=u?o:s},181:function(t,e,r){"use strict";var n=function(t){return t!=t};t.exports=function(t,e){return 0===t&&0===e?1/t==1/e:t===e||!(!n(t)||!n(e))}},182:function(t,e,r){"use strict";var n=r(183),i=RegExp.prototype.exec,o=Object.getOwnPropertyDescriptor,s=Object.prototype.toString,u="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;t.exports=function(t){if(!t||"object"!=typeof t)return!1;if(!u)return"[object RegExp]"===s.call(t);var e=o(t,"lastIndex");return!(!e||!n(e,"value"))&&function(t){try{var e=t.lastIndex;return t.lastIndex=0,i.call(t),!0}catch(t){return!1}finally{t.lastIndex=e}}(t)}},183:function(t,e,r){"use strict";var n=r(184);t.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},184:function(t,e,r){"use strict";var n=r(185);t.exports=Function.prototype.bind||n},185:function(t,e,r){"use strict";var n="Function.prototype.bind called on incompatible ",i=Array.prototype.slice,o=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==o.call(e))throw new TypeError(n+e);for(var r,s=i.call(arguments,1),u=function(){if(this instanceof r){var n=e.apply(this,s.concat(i.call(arguments)));return Object(n)===n?n:this}return e.apply(t,s.concat(i.call(arguments)))},a=Math.max(0,e.length-s.length),c=[],l=0;l<a;l++)c.push("$"+l);if(r=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")(u),e.prototype){var p=function(){};p.prototype=e.prototype,r.prototype=new p,p.prototype=null}return r}},186:function(t,e,r){"use strict";var n=r(159),i=r(174),o=r(175),s=r(187),u=Function.call.bind(i);n(u,{getPolyfill:o,implementation:i,shim:s}),t.exports=u},187:function(t,e,r){"use strict";var n=r(159).supportsDescriptors,i=r(175),o=Object.getOwnPropertyDescriptor,s=Object.defineProperty,u=TypeError,a=Object.getPrototypeOf,c=/a/;t.exports=function(){if(!n||!a)throw new u("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var t=i(),e=a(c),r=o(e,"flags");return r&&r.get===t||s(e,"flags",{configurable:!0,enumerable:!1,get:t}),t}},188:function(t,e,r){"use strict";var n=Date.prototype.getDay,i=Object.prototype.toString,o="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;t.exports=function(t){return"object"==typeof t&&null!==t&&(o?function(t){try{return n.call(t),!0}catch(t){return!1}}(t):"[object Date]"===i.call(t))}},42:function(t,e,r){"use strict";r.d(e,"b",(function(){return g})),r.d(e,"a",(function(){return f})),r.d(e,"c",(function(){return h}));var n=r(119),i=r.n(n),o=r(92),s=r.n(o),u=r(43),a=r.n(u),c=r(152),l=r(57),p=r(124);class f extends a.a.Embed{attach(){super.attach(),this.attributes=new a.a.Attributor.Store(this.domNode)}delta(){return(new s.a).insert(this.value(),i()(this.formats(),this.attributes.values()))}format(t,e){let r=a.a.query(t,a.a.Scope.BLOCK_ATTRIBUTE);null!=r&&this.attributes.attribute(r,e)}formatAt(t,e,r,n){this.format(r,n)}insertAt(t,e,r){if("string"==typeof e&&e.endsWith("\n")){let r=a.a.create(h.blotName);this.parent.insertBefore(r,0===t?this:this.next),r.insertAt(0,e.slice(0,-1))}else super.insertAt(t,e,r)}}f.scope=a.a.Scope.BLOCK_BLOT;class h extends a.a.Block{constructor(t){super(t),this.cache={}}delta(){return null==this.cache.delta&&(this.cache.delta=this.descendants(a.a.Leaf).reduce((t,e)=>0===e.length()?t:t.insert(e.value(),g(e)),new s.a).insert("\n",g(this))),this.cache.delta}deleteAt(t,e){super.deleteAt(t,e),this.cache={}}formatAt(t,e,r,n){e<=0||(a.a.query(r,a.a.Scope.BLOCK)?t+e===this.length()&&this.format(r,n):super.formatAt(t,Math.min(e,this.length()-t-1),r,n),this.cache={})}insertAt(t,e,r){if(null!=r)return super.insertAt(t,e,r);if(0===e.length)return;let n=e.split("\n"),i=n.shift();i.length>0&&(t<this.length()-1||null==this.children.tail?super.insertAt(Math.min(t,this.length()-1),i):this.children.tail.insertAt(this.children.tail.length(),i),this.cache={});let o=this;n.reduce((function(t,e){return o=o.split(t,!0),o.insertAt(0,e),e.length}),t+i.length)}insertBefore(t,e){let r=this.children.head;super.insertBefore(t,e),r instanceof c.a&&r.remove(),this.cache={}}length(){return null==this.cache.length&&(this.cache.length=super.length()+1),this.cache.length}moveChildren(t,e){super.moveChildren(t,e),this.cache={}}optimize(t){super.optimize(t),this.cache={}}path(t){return super.path(t,!0)}removeChild(t){super.removeChild(t),this.cache={}}split(t,e=!1){if(e&&(0===t||t>=this.length()-1)){let e=this.clone();return 0===t?(this.parent.insertBefore(e,this),this):(this.parent.insertBefore(e,this.next),e)}{let r=super.split(t,e);return this.cache={},r}}}function g(t,e={}){return null==t?e:("function"==typeof t.formats&&(e=i()(e,t.formats())),null==t.parent||"scroll"==t.parent.blotName||t.parent.statics.scope!==t.statics.scope?e:g(t.parent,e))}h.blotName="block",h.tagName="P",h.defaultChild="break",h.allowedChildren=[l.a,a.a.Embed,p.a]},92:function(t,e,r){var n=r(178),i=r(132),o=r(119),s=r(160),u=String.fromCharCode(0),a=function(t){Array.isArray(t)?this.ops=t:null!=t&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]};a.prototype.insert=function(t,e){var r={};return 0===t.length?this:(r.insert=t,null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(r.attributes=e),this.push(r))},a.prototype.delete=function(t){return t<=0?this:this.push({delete:t})},a.prototype.retain=function(t,e){if(t<=0)return this;var r={retain:t};return null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(r.attributes=e),this.push(r)},a.prototype.push=function(t){var e=this.ops.length,r=this.ops[e-1];if(t=o(!0,{},t),"object"==typeof r){if("number"==typeof t.delete&&"number"==typeof r.delete)return this.ops[e-1]={delete:r.delete+t.delete},this;if("number"==typeof r.delete&&null!=t.insert&&(e-=1,"object"!=typeof(r=this.ops[e-1])))return this.ops.unshift(t),this;if(i(t.attributes,r.attributes)){if("string"==typeof t.insert&&"string"==typeof r.insert)return this.ops[e-1]={insert:r.insert+t.insert},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this;if("number"==typeof t.retain&&"number"==typeof r.retain)return this.ops[e-1]={retain:r.retain+t.retain},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this},a.prototype.chop=function(){var t=this.ops[this.ops.length-1];return t&&t.retain&&!t.attributes&&this.ops.pop(),this},a.prototype.filter=function(t){return this.ops.filter(t)},a.prototype.forEach=function(t){this.ops.forEach(t)},a.prototype.map=function(t){return this.ops.map(t)},a.prototype.partition=function(t){var e=[],r=[];return this.forEach((function(n){(t(n)?e:r).push(n)})),[e,r]},a.prototype.reduce=function(t,e){return this.ops.reduce(t,e)},a.prototype.changeLength=function(){return this.reduce((function(t,e){return e.insert?t+s.length(e):e.delete?t-e.delete:t}),0)},a.prototype.length=function(){return this.reduce((function(t,e){return t+s.length(e)}),0)},a.prototype.slice=function(t,e){t=t||0,"number"!=typeof e&&(e=1/0);for(var r=[],n=s.iterator(this.ops),i=0;i<e&&n.hasNext();){var o;i<t?o=n.next(t-i):(o=n.next(e-i),r.push(o)),i+=s.length(o)}return new a(r)},a.prototype.compose=function(t){var e=s.iterator(this.ops),r=s.iterator(t.ops),n=[],o=r.peek();if(null!=o&&"number"==typeof o.retain&&null==o.attributes){for(var u=o.retain;"insert"===e.peekType()&&e.peekLength()<=u;)u-=e.peekLength(),n.push(e.next());o.retain-u>0&&r.next(o.retain-u)}for(var c=new a(n);e.hasNext()||r.hasNext();)if("insert"===r.peekType())c.push(r.next());else if("delete"===e.peekType())c.push(e.next());else{var l=Math.min(e.peekLength(),r.peekLength()),p=e.next(l),f=r.next(l);if("number"==typeof f.retain){var h={};"number"==typeof p.retain?h.retain=l:h.insert=p.insert;var g=s.attributes.compose(p.attributes,f.attributes,"number"==typeof p.retain);if(g&&(h.attributes=g),c.push(h),!r.hasNext()&&i(c.ops[c.ops.length-1],h)){var y=new a(e.rest());return c.concat(y).chop()}}else"number"==typeof f.delete&&"number"==typeof p.retain&&c.push(f)}return c.chop()},a.prototype.concat=function(t){var e=new a(this.ops.slice());return t.ops.length>0&&(e.push(t.ops[0]),e.ops=e.ops.concat(t.ops.slice(1))),e},a.prototype.diff=function(t,e){if(this.ops===t.ops)return new a;var r=[this,t].map((function(e){return e.map((function(r){if(null!=r.insert)return"string"==typeof r.insert?r.insert:u;throw new Error("diff() called "+(e===t?"on":"with")+" non-document")})).join("")})),o=new a,c=n(r[0],r[1],e),l=s.iterator(this.ops),p=s.iterator(t.ops);return c.forEach((function(t){for(var e=t[1].length;e>0;){var r=0;switch(t[0]){case n.INSERT:r=Math.min(p.peekLength(),e),o.push(p.next(r));break;case n.DELETE:r=Math.min(e,l.peekLength()),l.next(r),o.delete(r);break;case n.EQUAL:r=Math.min(l.peekLength(),p.peekLength(),e);var u=l.next(r),a=p.next(r);i(u.insert,a.insert)?o.retain(r,s.attributes.diff(u.attributes,a.attributes)):o.push(a).delete(r)}e-=r}})),o.chop()},a.prototype.eachLine=function(t,e){e=e||"\n";for(var r=s.iterator(this.ops),n=new a,i=0;r.hasNext();){if("insert"!==r.peekType())return;var o=r.peek(),u=s.length(o)-r.peekLength(),c="string"==typeof o.insert?o.insert.indexOf(e,u)-u:-1;if(c<0)n.push(r.next());else if(c>0)n.push(r.next(c));else{if(!1===t(n,r.next(1).attributes||{},i))return;i+=1,n=new a}}n.length()>0&&t(n,{},i)},a.prototype.transform=function(t,e){if(e=!!e,"number"==typeof t)return this.transformPosition(t,e);for(var r=s.iterator(this.ops),n=s.iterator(t.ops),i=new a;r.hasNext()||n.hasNext();)if("insert"!==r.peekType()||!e&&"insert"===n.peekType())if("insert"===n.peekType())i.push(n.next());else{var o=Math.min(r.peekLength(),n.peekLength()),u=r.next(o),c=n.next(o);if(u.delete)continue;c.delete?i.push(c):i.retain(o,s.attributes.transform(u.attributes,c.attributes,e))}else i.retain(s.length(r.next()));return i.chop()},a.prototype.transformPosition=function(t,e){e=!!e;for(var r=s.iterator(this.ops),n=0;r.hasNext()&&n<=t;){var i=r.peekLength(),o=r.peekType();r.next(),"delete"!==o?("insert"===o&&(n<t||!e)&&(t+=i),n+=i):t-=Math.min(i,t-n)}return t},t.exports=a}}]);