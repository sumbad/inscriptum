(window.webpackJsonp=window.webpackJsonp||[]).push([[27,42],{122:function(t,e,s){"use strict";var i=s(93);class a extends i.a{}a.blotName="italic",a.tagName=["EM","I"],e.a=a},135:function(t,e,s){"use strict";s.r(e);var i=s(40),a=s(69),r=s(68),l=s(93),n=s(122),o=s(64);i.a.register({"modules/syntax":o.InsSyntaxModule,"formats/bold":l.a,"formats/italic":n.a,"formats/list":a.b,"formats/list-item":a.a,"formats/code":r.a}),e.default=i.a},64:function(t,e,s){"use strict";s.r(e),s.d(e,"CodeEndLineFlag",(function(){return l})),s.d(e,"InsSyntaxCodeBlock",(function(){return n})),s.d(e,"InsSyntaxModule",(function(){return o}));var i=s(40),a=s(50),r=s(78);class l extends a.a{static formats(){return{}}}l.blotName="code-end",l.className="l",l.tagName="SPAN",i.a.register(l);class n extends r.a{highlight(t){let e=this.domNode.textContent||"";if(this.cachedText!==e){if(e.trim().length>0||null==this.cachedText){let s="";const i=t(e).split("\n");for(let t=0;t<i.length-1;t++)s+=`<span class="l">${i[t]||" "}</span>\n`;s+=`<span class="l">${i[i.length-1]}</span>`,this.domNode.innerHTML=`<code class="hljs">${s}</code>`}this.cachedText=e}}}class o extends r.c{static register(){i.a.register(r.b,!0),i.a.register(n,!0)}highlight(){if(this.quill.selection.composing)return;this.quill.update(i.a.sources.USER);let t=this.quill.getSelection();this.quill.scroll.descendants(n).forEach(t=>{t.highlight(this.options.highlight)}),this.quill.update(i.a.sources.SILENT),null!=t&&document.activeElement===this.quill.container.querySelector("[contenteditable]")&&this.quill.setSelection(t,i.a.sources.SILENT)}}},69:function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return o}));var i=s(42),a=s.n(i),r=s(41),l=s(112);class n extends r.c{static formats(t){return t.tagName===this.tagName?void 0:super.formats(t)}format(t,e){t!==o.blotName||e?super.format(t,e):this.replaceWith(a.a.create(this.statics.scope))}remove(){null==this.prev&&null==this.next?this.parent.remove():super.remove()}replaceWith(t,e){return this.parent.isolate(this.offset(this.parent),this.length()),t===this.parent.statics.blotName?(this.parent.replaceWith(t,e),this):(this.parent.unwrap(),super.replaceWith(t,e))}}n.blotName="list-item",n.tagName="LI";class o extends l.a{static create(t){let e="ordered"===t?"OL":"UL",s=super.create(e);return"checked"!==t&&"unchecked"!==t||s.setAttribute("data-checked","checked"===t),s}static formats(t){return"OL"===t.tagName?"ordered":"UL"===t.tagName?t.hasAttribute("data-checked")?"true"===t.getAttribute("data-checked")?"checked":"unchecked":"bullet":void 0}constructor(t){super(t);const e=e=>{if(e.target.parentNode!==t)return;let s=this.statics.formats(t),i=a.a.find(e.target);"checked"===s?i.format("list","unchecked"):"unchecked"===s&&i.format("list","checked")};t.addEventListener("touchstart",e),t.addEventListener("mousedown",e)}format(t,e){this.children.length>0&&this.children.tail.format(t,e)}formats(){return{[this.statics.blotName]:this.statics.formats(this.domNode)}}insertBefore(t,e){if(t instanceof n)super.insertBefore(t,e);else{let s=null==e?this.length():e.offset(this),i=this.split(s);i.parent.insertBefore(t,i)}}optimize(t){super.optimize(t);let e=this.next;null!=e&&e.prev===this&&e.statics.blotName===this.statics.blotName&&e.domNode.tagName===this.domNode.tagName&&e.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(e.moveChildren(this),e.remove())}replace(t){if(t.statics.blotName!==this.statics.blotName){let e=a.a.create(this.statics.defaultChild);t.moveChildren(e),this.appendChild(e)}super.replace(t)}}o.blotName="list",o.scope=a.a.Scope.BLOCK_BLOT,o.tagName=["OL","UL"],o.defaultChild="list-item",o.allowedChildren=[n]},78:function(t,e,s){"use strict";s.d(e,"a",(function(){return o})),s.d(e,"b",(function(){return h})),s.d(e,"c",(function(){return c}));var i=s(42),a=s.n(i),r=s(106),l=s(102),n=s(68);class o extends n.b{replaceWith(t){this.domNode.textContent=this.domNode.textContent,this.attach(),super.replaceWith(t)}highlight(t){let e=this.domNode.textContent;this.cachedText!==e&&((e.trim().length>0||null==this.cachedText)&&(this.domNode.innerHTML=t(e),this.domNode.normalize(),this.attach()),this.cachedText=e)}}o.className="ql-syntax";let h=new a.a.Attributor.Class("token","hljs",{scope:a.a.Scope.INLINE});class c extends l.a{static register(){r.a.register(h,!0),r.a.register(o,!0)}constructor(t,e){if(super(t,e),"function"!=typeof this.options.highlight)throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");let s=null;this.quill.on(r.a.events.SCROLL_OPTIMIZE,()=>{clearTimeout(s),s=setTimeout(()=>{this.highlight(),s=null},this.options.interval)}),this.highlight()}highlight(){if(this.quill.selection.composing)return;this.quill.update(r.a.sources.USER);let t=this.quill.getSelection();this.quill.scroll.descendants(o).forEach(t=>{t.highlight(this.options.highlight)}),this.quill.update(r.a.sources.SILENT),null!=t&&this.quill.setSelection(t,r.a.sources.SILENT)}}c.DEFAULTS={highlight:null==window.hljs?null:function(t){return window.hljs.highlightAuto(t).value},interval:1e3}},93:function(t,e,s){"use strict";var i=s(50);class a extends i.a{static create(){return super.create()}static formats(){return!0}optimize(t){super.optimize(t),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}a.blotName="bold",a.tagName=["STRONG","B"],e.a=a}}]);