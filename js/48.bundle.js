(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{598:function(t,e,s){"use strict";s.d(e,"a",function(){return o}),s.d(e,"b",function(){return n});var r=s(534),a=s.n(r),i=s(532),c=s(743);class o extends i.c{static formats(t){return t.tagName===this.tagName?void 0:super.formats(t)}format(t,e){t!==n.blotName||e?super.format(t,e):this.replaceWith(a.a.create(this.statics.scope))}remove(){null==this.prev&&null==this.next?this.parent.remove():super.remove()}replaceWith(t,e){return this.parent.isolate(this.offset(this.parent),this.length()),t===this.parent.statics.blotName?(this.parent.replaceWith(t,e),this):(this.parent.unwrap(),super.replaceWith(t,e))}}o.blotName="list-item",o.tagName="LI";class n extends c.a{static create(t){let e="ordered"===t?"OL":"UL",s=super.create(e);return"checked"!==t&&"unchecked"!==t||s.setAttribute("data-checked","checked"===t),s}static formats(t){return"OL"===t.tagName?"ordered":"UL"===t.tagName?t.hasAttribute("data-checked")?"true"===t.getAttribute("data-checked")?"checked":"unchecked":"bullet":void 0}constructor(t){super(t);const e=e=>{if(e.target.parentNode!==t)return;let s=this.statics.formats(t),r=a.a.find(e.target);"checked"===s?r.format("list","unchecked"):"unchecked"===s&&r.format("list","checked")};t.addEventListener("touchstart",e),t.addEventListener("mousedown",e)}format(t,e){this.children.length>0&&this.children.tail.format(t,e)}formats(){return{[this.statics.blotName]:this.statics.formats(this.domNode)}}insertBefore(t,e){if(t instanceof o)super.insertBefore(t,e);else{let s=null==e?this.length():e.offset(this),r=this.split(s);r.parent.insertBefore(t,r)}}optimize(t){super.optimize(t);let e=this.next;null!=e&&e.prev===this&&e.statics.blotName===this.statics.blotName&&e.domNode.tagName===this.domNode.tagName&&e.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(e.moveChildren(this),e.remove())}replace(t){if(t.statics.blotName!==this.statics.blotName){let e=a.a.create(this.statics.defaultChild);t.moveChildren(e),this.appendChild(e)}super.replace(t)}}n.blotName="list",n.scope=a.a.Scope.BLOCK_BLOT,n.tagName=["OL","UL"],n.defaultChild="list-item",n.allowedChildren=[o]},722:function(t,e,s){"use strict";s.r(e),s.d(e,"ListContinuer",function(){return a});var r=s(598);class a extends r.b{static create(t){let e;return"string"==typeof t?e=super.create(t):(e=super.create(t.type),void 0!==t.start&&(e.setAttribute("start",t.start),e.style["counter-reset"]=`list-0 ${t.start}`)),e}static formats(t){let e=super.formats(t);return console.log("MyList-static.formats",e,t.getAttribute("start")),{type:e,start:t.getAttribute("start")}}}}}]);