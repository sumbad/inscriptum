webpackJsonp([14,16,21,28],{267:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"UmWebComponent",function(){return l}),n.Define=function(t){return function(n){customElements.define(t,n)}};var o=e(705),i=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}(),r=c(["<style>","</style>"],["<style>","</style>"]),a=c(["","",""],["","",""]);function c(t,n){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}var l=function(t){function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"open";!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var c=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));c.wire=o.b,c.props={};try{c._template=t,c._style=e}catch(t){console.warn("Can not find a template!")}return c.html=i?Object(o.a)(c.attachShadow({mode:a})):Object(o.a)(c),c._style&&""!==c._style&&(c._style=Object(o.b)()(r,c._style)),c}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,HTMLElement),i(n,[{key:"connectedCallback",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this._initialProps(t),this.render()}},{key:"attributeChangedCallback",value:function(t,n,e){n!==e&&this.props[t]!==e&&(this.props[t]=e,this.render())}},{key:"_initialProps",value:function(t){var n=this;void 0!==t&&t.forEach(function(t){var e=n.getAttribute(t);void 0!==e&&null!==e&&(n.props[t]=e)})}},{key:"render",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;this.html(a,this._style,this._template(Object(o.b)(this),t))}}]),n}()},275:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,i,r=(o=["\n",'\n\n\x3c!-- <div class="the-editor"> --\x3e\n<div class="the-editor-toolbar">\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-bold"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-italic"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-underline"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-strikethrough"></i>\n  </button>\n\n  <div class="the-editor-toolbar-separator">|</div>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-link"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-unlink"></i>\n  </button>\n\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-list-ul"></i>\n  </button>\n\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-list-ol"></i> \n  </button>\n\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-indent"></i>\n  </button>\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-outdent"></i>\n  </button>\n\n\n  <div class="the-editor-toolbar-separator">|</div>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-align-left"></i> \n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-align-center"></i> \n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-align-right"></i> \n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-align-justify"></i> \n  </button>\n\n  <div class="the-editor-toolbar-separator">|</div>\n\n  <div href="#"\n       class="the-editor-toolbar-has-dropdown">\n    <i class="fa fa-header"></i>\n    <div class="the-editor-toolbar-dropdown">\n      <button class="the-editor-toolbar-button"\n              onclick="','">\n        <h1>Heading 1</h1>\n      </button>\n      <button class="the-editor-toolbar-button"\n              onclick="','">\n        <h2>Heading 2</h2>\n      </button>\n      <button class="the-editor-toolbar-button"\n              onclick="','">\n        <h3>Heading 3</h3>\n      </button>\n      <button class="the-editor-toolbar-button"\n              onclick="','">\n        <h4>Heading 4</h4>\n      </button>\n      <button class="the-editor-toolbar-button"\n              onclick="','">\n        <h5>Heading 5</h5>\n      </button>\n      <button class="the-editor-toolbar-button"\n              onclick="','">\n        <h6>Heading 6</h6>\n      </button>\n    </div>\n  </div>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n     <i class="fa fa-paragraph"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-subscript"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-superscript"></i>\n  </button>\n\n  <div class="the-editor-toolbar-separator">|</div>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-undo"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-code" aria-hidden="true"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          class="the-editor-toolbar-save">\n    <i class="fa fa-save"></i>\n  </button>\n\n</div>\n\n\n\n<div class="the-editor-content"\n     id="editorContent">\n  <article class="entry"\n           contenteditable>\n\n    \x3c!-- Sample data --\x3e\n    <h1 style="text-align: center;">\n      <font face="Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif">\n        <font color="#1abc9c"><br></font>\n      </font>\n    </h1>\n    <h1 style="text-align: center;">\n      <font face="Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif">\n        <font color="#1abc9c"><br></font>\n      </font>\n    </h1>\n    <h1 style="text-align: center;">\n      <font face="Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif">\n        <font color="#1abc9c">S</font>\n        <font color="#f39c12">W</font>\n        <font color="#e74c3c">E</font>\n        <font color="#95a5a6">ditor</font>\n      </font>\n      <font size="3"\n            face="Consolas, monaco, monospace"\n            color="#bdc3c7">v0.2.0</font><br></h1>\n    <p style="text-align: center;">\n      <font color="#d35400"\n            face="Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif">Added more fonts and added flat colors</font>\n    </p>\n    <p style="text-align: center;">\n      <a href="https://twitter.com/nakome">\n        <font color="#c0392b">@</font>\n        <font color="#3498db">nakome</font>\n      </a>\n    </p>\n    <p style="text-align: center;"><br></p>\n    <p></p>\n    <div style="text-align: center;"><b>Note:</b></div>\n    <div style="text-align: center;"><i><font color="#95a5a6">Text editor is responsive but for scope demo the class main have 800px&nbsp;</font></i></div>\n    <div style="text-align: center;"><i><font color="#95a5a6">remove if you like.</font></i></div>\n    <div style="text-align: center;"><i><font color="#1abc9c">Thanks</font><font color="#95a5a6">.</font></i></div>\n\n  </article>\n\n</div>\n\x3c!-- </div> --\x3e\n\n\n\n\x3c!-- <div id="pell">\n  \n    </div>\n    <div>\n      Text output:\n      <div id="text-output"></div>\n      HTML output:\n      <pre id="html-output"></pre>\n    </div> --\x3e\n\n'],i=["\n",'\n\n\x3c!-- <div class="the-editor"> --\x3e\n<div class="the-editor-toolbar">\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-bold"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-italic"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-underline"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-strikethrough"></i>\n  </button>\n\n  <div class="the-editor-toolbar-separator">|</div>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-link"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-unlink"></i>\n  </button>\n\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-list-ul"></i>\n  </button>\n\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-list-ol"></i> \n  </button>\n\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-indent"></i>\n  </button>\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-outdent"></i>\n  </button>\n\n\n  <div class="the-editor-toolbar-separator">|</div>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-align-left"></i> \n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-align-center"></i> \n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-align-right"></i> \n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-align-justify"></i> \n  </button>\n\n  <div class="the-editor-toolbar-separator">|</div>\n\n  <div href="#"\n       class="the-editor-toolbar-has-dropdown">\n    <i class="fa fa-header"></i>\n    <div class="the-editor-toolbar-dropdown">\n      <button class="the-editor-toolbar-button"\n              onclick="','">\n        <h1>Heading 1</h1>\n      </button>\n      <button class="the-editor-toolbar-button"\n              onclick="','">\n        <h2>Heading 2</h2>\n      </button>\n      <button class="the-editor-toolbar-button"\n              onclick="','">\n        <h3>Heading 3</h3>\n      </button>\n      <button class="the-editor-toolbar-button"\n              onclick="','">\n        <h4>Heading 4</h4>\n      </button>\n      <button class="the-editor-toolbar-button"\n              onclick="','">\n        <h5>Heading 5</h5>\n      </button>\n      <button class="the-editor-toolbar-button"\n              onclick="','">\n        <h6>Heading 6</h6>\n      </button>\n    </div>\n  </div>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n     <i class="fa fa-paragraph"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-subscript"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-superscript"></i>\n  </button>\n\n  <div class="the-editor-toolbar-separator">|</div>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-undo"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          onclick="','">\n    <i class="fa fa-code" aria-hidden="true"></i>\n  </button>\n\n  <button class="the-editor-toolbar-button"\n          class="the-editor-toolbar-save">\n    <i class="fa fa-save"></i>\n  </button>\n\n</div>\n\n\n\n<div class="the-editor-content"\n     id="editorContent">\n  <article class="entry"\n           contenteditable>\n\n    \x3c!-- Sample data --\x3e\n    <h1 style="text-align: center;">\n      <font face="Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif">\n        <font color="#1abc9c"><br></font>\n      </font>\n    </h1>\n    <h1 style="text-align: center;">\n      <font face="Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif">\n        <font color="#1abc9c"><br></font>\n      </font>\n    </h1>\n    <h1 style="text-align: center;">\n      <font face="Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif">\n        <font color="#1abc9c">S</font>\n        <font color="#f39c12">W</font>\n        <font color="#e74c3c">E</font>\n        <font color="#95a5a6">ditor</font>\n      </font>\n      <font size="3"\n            face="Consolas, monaco, monospace"\n            color="#bdc3c7">v0.2.0</font><br></h1>\n    <p style="text-align: center;">\n      <font color="#d35400"\n            face="Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif">Added more fonts and added flat colors</font>\n    </p>\n    <p style="text-align: center;">\n      <a href="https://twitter.com/nakome">\n        <font color="#c0392b">@</font>\n        <font color="#3498db">nakome</font>\n      </a>\n    </p>\n    <p style="text-align: center;"><br></p>\n    <p></p>\n    <div style="text-align: center;"><b>Note:</b></div>\n    <div style="text-align: center;"><i><font color="#95a5a6">Text editor is responsive but for scope demo the class main have 800px&nbsp;</font></i></div>\n    <div style="text-align: center;"><i><font color="#95a5a6">remove if you like.</font></i></div>\n    <div style="text-align: center;"><i><font color="#1abc9c">Thanks</font><font color="#95a5a6">.</font></i></div>\n\n  </article>\n\n</div>\n\x3c!-- </div> --\x3e\n\n\n\n\x3c!-- <div id="pell">\n  \n    </div>\n    <div>\n      Text output:\n      <div id="text-output"></div>\n      HTML output:\n      <pre id="html-output"></pre>\n    </div> --\x3e\n\n'],Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(i)}})));n.default=function(t,n){return t(r,n.$style,function(t){return n.doRichEditCommand(t,"bold")},function(t){return n.doRichEditCommand(t,"italic")},function(t){return n.doRichEditCommand(t,"underline")},function(t){return n.doRichEditCommand(t,"strikethrough")},function(t){return n.doRichEditCommand(t,"createLink")},function(t){return n.doRichEditCommand(t,"unlink")},function(t){return n.doRichEditCommand(t,"insertUnorderedList")},function(t){return n.doRichEditCommand(t,"insertOrderedList")},function(t){return n.doRichEditCommand(t,"indent")},function(t){return n.doRichEditCommand(t,"outdent")},function(t){return n.doRichEditCommand(t,"justifyLeft")},function(t){return n.doRichEditCommand(t,"justifyCenter")},function(t){return n.doRichEditCommand(t,"justifyRight")},function(t){return n.doRichEditCommand(t,"justifyFull")},function(t){return n.doRichEditCommand(t,"formatBlock","h1")},function(t){return n.doRichEditCommand(t,"formatBlock","h2")},function(t){return n.doRichEditCommand(t,"formatBlock","h3")},function(t){return n.doRichEditCommand(t,"formatBlock","h4")},function(t){return n.doRichEditCommand(t,"formatBlock","h5")},function(t){return n.doRichEditCommand(t,"formatBlock","h6")},function(t){return n.doRichEditCommand(t,"formatBlock","p")},function(t){return n.doRichEditCommand(t,"subscript")},function(t){return n.doRichEditCommand(t,"superscript")},function(t){return n.doRichEditCommand(t,"undo")},function(t){return n.switchMode()})}},685:function(t,n){t.exports=".the-editor-toolbar{background:#fff;border-bottom:1px solid #f1f1f1;padding:0 9px;box-sizing:border-box}.the-editor-toolbar-button{position:relative;color:#444;padding:0 4px;text-decoration:none;height:40px;line-height:40px;background-color:transparent;margin:0;letter-spacing:0;text-transform:none;text-align:left}.the-editor-toolbar-button:hover{color:#444;background-color:transparent}.the-editor-toolbar-save{float:right}.the-editor-toolbar-has-dropdown{cursor:pointer;position:relative;display:inline-block;padding:0 4px;height:40px;line-height:40px}.the-editor-toolbar-has-dropdown:hover>.the-editor-toolbar-dropdown{display:block}.the-editor-toolbar-dropdown{display:none;position:absolute;left:0;padding:9px;width:220px;background:white;border:1px solid #e5e5e5;box-shadow:0px 1px 1px rgba(0,0,0,0.04);border-top:none}.the-editor-toolbar-dropdown a{display:block}.the-editor-toolbar-dropdown h1,.the-editor-toolbar-dropdown h2,.the-editor-toolbar-dropdown h3,.the-editor-toolbar-dropdown h4,.the-editor-toolbar-dropdown h5,.the-editor-toolbar-dropdown h6{margin:0;padding:5px 0;width:200px}.the-editor-toolbar-separator{display:inline;margin:0 6px;color:#fff}.the-editor-content{width:100%;min-height:400px;background:white;padding:1em}.the-editor-content:focus{outline:none}\n"},695:function(t,n,e){"use strict";const o=document.defaultView;n.f=o;n.e=1;n.j=3;n.a=8;n.d=11;n.g="ownerSVGElement";n.i="http://www.w3.org/2000/svg";const i="connected";n.b=i;n.c="disconnected";n.h=/^style|textarea$/i;const r="_hyper: "+(Math.random()*new Date|0)+";";n.k=r;const a="\x3c!--"+r+"--\x3e";n.l=a},696:function(t,n,e){"use strict";n.a=((t,n)=>o(t).createElement(n));const o=t=>t.ownerDocument||t;n.b=o;n.c=(t=>o(t).createDocumentFragment());n.d=((t,n)=>o(t).createTextNode(n))},697:function(t,n,e){"use strict";var o=e(701),i=e(695),r=e(707),a=e(696);const c=r.a?(t,n)=>{t.append.apply(t,n)}:(t,n)=>{const e=n.length;for(let o=0;o<e;o++)t.appendChild(n[o])};n.a=c;const l=new RegExp("("+o.a+"=)(['\"]?)"+i.l+"\\2","gi"),s=(t,n,e,o)=>"<"+n+e.replace(l,d)+o,d=(t,n,e)=>n+(e||'"')+i.k+(e||'"');n.b=((t,n)=>(i.g in t?m:p)(t,n.replace(o.b,s)));const u=r.c?t=>{const n=t.cloneNode(),e=t.childNodes||[],o=e.length;for(let t=0;t<o;t++)n.appendChild(u(e[t]));return n}:t=>t.cloneNode(!0),f=r.d?(t,n)=>t.importNode(n,!0):(t,n)=>u(n);n.c=f;const b=[].slice;n.d=b;n.e=(t=>h(t));let h=t=>{if(t.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((i.f.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){const t={};h=(n=>{const e="_"+n.join(i.k);return t[e]||(t[e]=n)})}else h=(t=>t);return h(t)};const p=r.b?(t,n)=>{const e=Object(a.a)(t,"template");return e.innerHTML=n,e.content}:(t,n)=>{const e=Object(a.a)(t,"template"),o=Object(a.c)(t);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(n)){const t=RegExp.$1;e.innerHTML="<table>"+n+"</table>",c(o,b.call(e.querySelectorAll(t)))}else e.innerHTML=n,c(o,b.call(e.childNodes));return o},m=r.b?(t,n)=>{const e=Object(a.c)(t),o=Object(a.b)(t).createElementNS(i.i,"svg");return o.innerHTML=n,c(e,b.call(o.childNodes)),e}:(t,n)=>{const e=Object(a.c)(t),o=Object(a.a)(t,"div");return o.innerHTML='<svg xmlns="'+i.i+'">'+n+"</svg>",c(e,b.call(o.firstChild.childNodes)),e}},698:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var o=e(695);let i=o.f.Event;try{new i("Event")}catch(t){i=function(t){const n=document.createEvent("Event");return n.initEvent(t,!1,!1),n}}const r=o.f.Map||function(){const t=[],n=[];return{get:e=>n[t.indexOf(e)],set(e,o){n[t.push(e)-1]=o}}};n.b=r;const a=o.f.WeakMap||function(){return{get:t=>t[o.k],set(t,n){Object.defineProperty(t,o.k,{configurable:!0,value:n})}}};n.c=a;const c=o.f.WeakSet||function(){const t=new a;return{add(n){t.set(n,!0)},has:n=>!0===t.get(n)}};n.d=c;const l=Array.isArray||(t=>n=>"[object Array]"===t.call(n))({}.toString);n.e=l;const s=o.k.trim||function(){return this.replace(/^\s+|\s+$/g,"")};n.f=s},699:function(t,n,e){"use strict";function o(){}n.a=o,n.b=function(t){Object.defineProperties(o.prototype,{handleEvent:{value(t){const n=t.currentTarget;this["getAttribute"in n&&n.getAttribute("data-call")||"on"+t.type](t)}},html:i("html",t),svg:i("svg",t),state:i("state",function(){return this.defaultState}),defaultState:{get:()=>({})},setState:{value(t){const n=this.state,e="function"==typeof t?t.call(this,n):t;for(const t in e)n[t]=e[t];this.render()}}})};const i=(t,n)=>{const e="_"+t+"$";return{get(){return this[e]||(this[t]=n.call(this,t))},set(t){Object.defineProperty(this,e,{configurable:!0,value:t})}}}},700:function(t,n,e){"use strict";const o={},i=[],r=o.hasOwnProperty;let a=0;n.a={define:(t,n)=>{t in o||(a=i.push(t)),o[t]=n},invoke:(t,n)=>{for(let e=0;e<a;e++){let a=i[e];if(r.call(t,a))return o[a](t[a],n)}}}},701:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a}),e.d(n,"c",function(){return c});const o="[^\\S]+[^ \\f\\n\\r\\t\\/>\"'=]+",i="<([a-z]+[a-z0-9:_-]*)((?:",r="(?:=(?:'.*?'|\".*?\"|<.+?>|\\S+))?)",a=new RegExp(i+o+r+"+)([^\\S]*/?>)","gi"),c=new RegExp(i+o+r+"*)([^\\S]*/>)","gi")},702:function(t,n,e){"use strict";n.a=r;var o=e(697),i=e(696);function r(t){this.childNodes=t,this.length=t.length,this.first=t[0],this.last=t[this.length-1]}r.prototype.insert=function(){const t=Object(i.c)(this.first);return Object(o.a)(t,this.childNodes),t},r.prototype.remove=function(){const t=this.first,n=this.last;if(2===this.length)n.parentNode.removeChild(n);else{const e=Object(i.b)(t).createRange();e.setStartBefore(this.childNodes[1]),e.setEndAfter(n),e.deleteContents()}return t}},703:function(t,n,e){"use strict";var o=e(698),i=e(695),r=e(708),a=e(697),c=e(701);const l=new o.c,s=new o.b;function d(){const t=arguments.length;for(let n=1;n<t;n++)this[n-1](arguments[n])}const u=c.c,f=(t,n,e)=>b.test(n)?t:"<"+n+e+"></"+n+">",b=/^area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr$/i;n.a=function(t){const n=l.get(this);return n&&n.template===Object(a.e)(t)?d.apply(n.updates,arguments):function(t){t=Object(a.e)(t);const n=s.get(t)||function(t){const n=[],e=t.join(i.l).replace(u,f),o=Object(a.b)(this,e);r.a.find(o,n,t.slice());const c={fragment:o,paths:n};return s.set(t,c),c}.call(this,t),e=Object(a.c)(this.ownerDocument,n.fragment),o=r.a.create(e,n.paths);l.set(this,{template:t,updates:o}),d.apply(o,arguments),this.textContent="",this.appendChild(e)}.apply(this,arguments),this}},704:function(t,n,e){"use strict";const o=t=>t;n.a=((t,n,e,i,r)=>{const a=i||o,c=null==r?null:a(r,0);let l=0,s=0,d=n.length-1,u=n[0],f=n[d],b=e.length-1,h=e[0],p=e[b];for(;l<=d&&s<=b;)if(null==u)u=n[++l];else if(null==f)f=n[--d];else if(null==h)h=e[++s];else if(null==p)p=e[--b];else if(u==h)u=n[++l],h=e[++s];else if(f==p)f=n[--d],p=e[--b];else if(u==p)t.insertBefore(a(u,1),a(f,-0).nextSibling),u=n[++l],p=e[--b];else if(f==h)t.insertBefore(a(f,1),a(u,0)),f=n[--d],h=e[++s];else{let o=n.indexOf(h);if(o<0)t.insertBefore(a(h,1),a(u,0)),h=e[++s];else{let i=n[o];n[o]=null,t.insertBefore(a(i,1),a(u,0)),h=e[++s]}}if(l<=d||s<=b)if(l>d){const n=e[b+1],o=null==n?c:a(n,0);if(s===b)t.insertBefore(a(e[s],1),o);else{const n=t.ownerDocument.createDocumentFragment();for(;s<=b;)n.appendChild(a(e[s++],1));t.insertBefore(n,o)}}else if(null==n[l]&&l++,l===d)t.removeChild(a(n[l],-1));else{const e=t.ownerDocument.createRange();e.setStartBefore(a(n[l],-1)),e.setEndAfter(a(n[d],-1)),e.deleteContents()}return e})},705:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var o=e(699),i=e(700),r=e(706),a=e(703),c=e(704);e.d(n,"b",function(){return r.b});const l=t=>a.a.bind(t),s=i.a.define;function d(t){return arguments.length<2?null==t?Object(r.a)("html"):"string"==typeof t?Object(r.b)(null,t):"raw"in t?Object(r.a)("html")(t):"nodeType"in t?a.a.bind(t):Object(r.c)(t,"html"):("raw"in t?Object(r.a)("html"):r.b).apply(null,arguments)}d.Component=o.a,d.bind=l,d.define=s,d.diff=c.a,d.hyper=d,d.wire=r.b,Object(o.b)(r.a)},706:function(t,n,e){"use strict";e.d(n,"a",function(){return d}),e.d(n,"c",function(){return u});var o=e(695),i=e(698),r=e(696),a=e(697),c=e(702),l=e(703);const s=new i.c,d=t=>{let n,e,i,c,s;return function(d){d=Object(a.e)(d);let u=c!==d;return u&&(c=d,i=Object(r.c)(document),e="svg"===t?document.createElementNS(o.i,"svg"):i,s=l.a.bind(e)),s.apply(null,arguments),u&&("svg"===t&&Object(a.a)(i,a.d.call(e.childNodes)),n=f(i)),n}},u=(t,n)=>{const e=n.indexOf(":");let o=s.get(t),i=n;return-1<e&&(i=n.slice(e+1),n=n.slice(0,e)||"html"),o||s.set(t,o={}),o[i]||(o[i]=d(n))},f=t=>{const n=t.childNodes,e=n.length,r=[];for(let t=0;t<e;t++){let e=n[t];e.nodeType!==o.e&&0===i.f.call(e.textContent).length||r.push(e)}return 1===r.length?r[0]:new c.a(r)};n.b=((t,n)=>null==t?d(n||"html"):u(t,n||"html"))},707:function(t,n,e){"use strict";var o=e(696);const i=Object(o.c)(document),r="append"in i;n.a=r;const a="content"in Object(o.a)(document,"template");n.b=a,i.appendChild(Object(o.d)(i,"g")),i.appendChild(Object(o.d)(i,""));const c=1===i.cloneNode(!0).childNodes.length;n.c=c;const l="importNode"in document;n.d=l},708:function(t,n,e){"use strict";var o=e(695),i=e(699),r=e(702),a=e(709),c=e(710),l=e(700),s=e(704),d=e(696),u=e(698),f=e(697);const b=new u.d;function h(){}h.prototype=Object.create(null);const p=t=>({html:t}),m=(t,n)=>"ELEMENT_NODE"in t?t:t.constructor===r.a?1/n<0?n?t.remove():t.last:n?t.insert():t.first:m(t.render(),n),v=(t,n,e)=>{const i=t.childNodes,r=i.length;for(let c=0;c<r;c++){let r=i[c];switch(r.nodeType){case o.e:g(r,n,e),v(r,n,e);break;case o.a:r.textContent===o.k&&(e.shift(),n.push(o.h.test(t.nodeName)?a.a.create("text",t):a.a.create("any",r)));break;case o.j:o.h.test(t.nodeName)&&u.f.call(r.textContent)===o.l&&(e.shift(),n.push(a.a.create("text",t)))}}},g=(t,n,e)=>{const i=new h,r=t.attributes,c=f.d.call(r),l=[],s=c.length;for(let t=0;t<s;t++){const s=c[t];if(s.value===o.k){const t=s.name;if(!(t in i)){const o=e.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[t]=r[o]||r[o.toLowerCase()],n.push(a.a.create("attr",i[t],o))}l.push(s)}}const u=l.length;for(let n=0;n<u;n++)t.removeAttributeNode(l[n]);const b=t.nodeName;if(/^script$/i.test(b)){const n=Object(d.a)(t,b);for(let t=0;t<r.length;t++)n.setAttributeNode(r[t].cloneNode(!0));n.textContent=t.textContent,t.parentNode.replaceChild(n,t)}},y=(t,n)=>{n(t.placeholder),"text"in t?Promise.resolve(t.text).then(String).then(n):"any"in t?Promise.resolve(t.any).then(n):"html"in t?Promise.resolve(t.html).then(p).then(n):Promise.resolve(l.a.invoke(t,n)).then(n)},k=t=>null!=t&&"then"in t,x=(t,n)=>{let e,a=!1;const c=b=>{switch(typeof b){case"string":case"number":case"boolean":a?e!==b&&(e=b,n[0].textContent=b):(a=!0,e=b,n=Object(s.a)(t.parentNode,n,[Object(d.d)(t,b)],m,t));break;case"object":case"undefined":if(null==b){a=!1,n=Object(s.a)(t.parentNode,n,[],m,t);break}default:if(a=!1,e=b,Object(u.e)(b))if(0===b.length)n.length&&(n=Object(s.a)(t.parentNode,n,[],m,t));else switch(typeof b[0]){case"string":case"number":case"boolean":c({html:b});break;case"object":if(Object(u.e)(b[0])&&(b=b.concat.apply([],b)),k(b[0])){Promise.all(b).then(c);break}default:n=Object(s.a)(t.parentNode,n,b,m,t)}else(t=>"ELEMENT_NODE"in t||t instanceof r.a||t instanceof i.a)(b)?n=Object(s.a)(t.parentNode,n,b.nodeType===o.d?f.d.call(b.childNodes):[b],m,t):k(b)?b.then(c):"placeholder"in b?y(b,c):"text"in b?c(String(b.text)):"any"in b?c(b.any):"html"in b?n=Object(s.a)(t.parentNode,n,f.d.call(Object(f.b)(t,[].concat(b.html).join("")).childNodes),m,t):c("length"in b?f.d.call(b):l.a.invoke(b,c))}};return c},O=(t,n,e)=>{const i=o.g in t;let r;if("style"===n)return Object(c.a)(t,e,i);if(/^on/.test(n)){let e=n.slice(2);return e===o.b||e===o.c?(j&&(j=!1,function(){const t=(t,e)=>{const i=new u.a(e),r=t.length;for(let e=0;e<r;e++){let r=t[e];r.nodeType===o.e&&n(r,i)}},n=(t,e)=>{if(b.has(t))t.dispatchEvent(e);else{const o=t.children,i=o.length;for(let t=0;t<i;t++)n(o[t],e)}};try{new MutationObserver(n=>{const e=n.length;for(let i=0;i<e;i++){let e=n[i];t(e.removedNodes,o.c),t(e.addedNodes,o.b)}}).observe(document,{subtree:!0,childList:!0})}catch(n){document.addEventListener("DOMNodeRemoved",n=>{t([n.target],o.c)},!1),document.addEventListener("DOMNodeInserted",n=>{t([n.target],o.b)},!1)}}()),b.add(t)):n.toLowerCase()in t&&(e=e.toLowerCase()),n=>{r!==n&&(r&&t.removeEventListener(e,r,!1),r=n,n&&t.addEventListener(e,n,!1))}}if("data"===n||!i&&n in t)return e=>{r!==e&&(r=e,t[n]!==e&&(t[n]=e,null==e&&t.removeAttribute(n)))};{let n=!1;const o=e.cloneNode(!0);return e=>{r!==e&&(r=e,o.value!==e&&(null==e?(n&&(n=!1,t.removeAttributeNode(o)),o.value=e):(o.value=e,n||(n=!0,t.setAttributeNode(o)))))}}},C=t=>{let n;const e=o=>{n!==o&&(n=o,"object"==typeof o&&o?k(o)?o.then(e):"placeholder"in o?y(o,e):e("text"in o?String(o.text):"any"in o?o.any:"html"in o?[].concat(o.html).join(""):"length"in o?f.d.call(o).join(""):l.a.invoke(o,e)):t.textContent=null==o?"":o)};return e};n.a={create:(t,n)=>{const e=[],o=n.length;for(let i=0;i<o;i++){const o=n[i],r=a.a.find(t,o.path);switch(o.type){case"any":e.push(x(r,[]));break;case"attr":e.push(O(r,o.name,o.node));break;case"text":e.push(C(r))}}return e},find:v};let j=!0},709:function(t,n,e){"use strict";var o=e(695);const i=(t,n,e)=>{t.unshift(t.indexOf.call(n.childNodes,e))};n.a={create:(t,n,e)=>({type:t,name:e,node:n,path:(t=>{const n=[];let e;switch(t.nodeType){case o.e:case o.d:e=t;break;case o.a:e=t.parentNode,i(n,e,t);break;default:e=t.ownerElement}for(t=e;e=e.parentNode;t=e)i(n,e,t);return n})(n)}),find:(t,n)=>{const e=n.length;for(let o=0;o<e;o++)t=t.childNodes[n[o]];return t}}},710:function(t,n,e){"use strict";const o=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;n.a=((t,n,e)=>{if(e){const o=n.cloneNode(!0);return o.value="",t.setAttributeNode(o),i(o,e)}return i(t.style,e)});const i=(t,n)=>{let e,i;return r=>{switch(typeof r){case"object":if(r){if("object"===e){if(!n&&i!==r)for(const n in i)n in r||(t[n]="")}else n?t.value="":t.cssText="";const a=n?{}:t;for(const t in r){const n=r[t];a[t]="number"!=typeof n||o.test(t)?n:n+"px"}e="object",n?t.value=c(i=a):i=r;break}default:i!=r&&(e="string",i=r,n?t.value=r||"":t.cssText=r||"")}}},r=/([^A-Z])([A-Z]+)/g,a=(t,n,e)=>n+"-"+e.toLowerCase(),c=t=>{const n=[];for(const e in t)n.push(e.replace(r,a),":",t[e],";");return n.join("")}},93:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"EditorComponent",function(){return l});var o=e(267),i=e(275),r=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var c=this&&this.__decorate||function(t,n,e,o){var i,r=arguments.length,c=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,n,e,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(c=(r<3?i(c):r>3?i(n,e,c):i(n,e))||c);return r>3&&c&&Object.defineProperty(n,e,c),c},l=function(t){function n(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i.default,e(685)));return t._isCodeMode=!1,t}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,o["UmWebComponent"]),r(n,[{key:"connectedCallback",value:function(){(function t(n,e,o){null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,e);if(void 0===i){var r=Object.getPrototypeOf(n);return null===r?void 0:t(r,e,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.$editorContent=this.querySelector("#editorContent")}},{key:"doRichEditCommand",value:function(t,n,e){t.preventDefault(),document.execCommand(n,!1,e);var o=window.getSelection().focusNode.parentElement;if(o)switch(n){case"formatBlock":this._formatBlockClasses(e,o)}}},{key:"switchMode",value:function(){this._isCodeMode=!this._isCodeMode,this._setDocMode(this._isCodeMode,this.$editorContent.firstElementChild)}},{key:"_formatBlockClasses",value:function(t,n){switch(t){case"h2":n.classList.add("entry-title")}}},{key:"_setDocMode",value:function(t,n){var e=n.innerHTML,o=void 0;if(t){o=document.createTextNode(e),n.innerHTML="";var i=document.createElement("pre");n.contentEditable="false",i.id="sourceText",i.contentEditable="true",i.appendChild(o),n.appendChild(i)}else(o=document.createRange()).selectNodeContents(n.firstChild),n.innerHTML=o.toString(),n.contentEditable="true"}}]),n}();l=c([Object(o.Define)("um-editor")],l)}});