(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{587:function(t,e,s){"use strict";s.d(e,"a",function(){return o}),s.d(e,"b",function(){return h});var a=s(550),i=s.n(a),r=s(551),c=s(610);class o extends r.c{static formats(t){return t.tagName===this.tagName?void 0:super.formats(t)}format(t,e){t!==h.blotName||e?super.format(t,e):this.replaceWith(i.a.create(this.statics.scope))}remove(){null==this.prev&&null==this.next?this.parent.remove():super.remove()}replaceWith(t,e){return this.parent.isolate(this.offset(this.parent),this.length()),t===this.parent.statics.blotName?(this.parent.replaceWith(t,e),this):(this.parent.unwrap(),super.replaceWith(t,e))}}o.blotName="list-item",o.tagName="LI";class h extends c.a{static create(t){let e="ordered"===t?"OL":"UL",s=super.create(e);return"checked"!==t&&"unchecked"!==t||s.setAttribute("data-checked","checked"===t),s}static formats(t){return"OL"===t.tagName?"ordered":"UL"===t.tagName?t.hasAttribute("data-checked")?"true"===t.getAttribute("data-checked")?"checked":"unchecked":"bullet":void 0}constructor(t){super(t);const e=e=>{if(e.target.parentNode!==t)return;let s=this.statics.formats(t),a=i.a.find(e.target);"checked"===s?a.format("list","unchecked"):"unchecked"===s&&a.format("list","checked")};t.addEventListener("touchstart",e),t.addEventListener("mousedown",e)}format(t,e){this.children.length>0&&this.children.tail.format(t,e)}formats(){return{[this.statics.blotName]:this.statics.formats(this.domNode)}}insertBefore(t,e){if(t instanceof o)super.insertBefore(t,e);else{let s=null==e?this.length():e.offset(this),a=this.split(s);a.parent.insertBefore(t,a)}}optimize(t){super.optimize(t);let e=this.next;null!=e&&e.prev===this&&e.statics.blotName===this.statics.blotName&&e.domNode.tagName===this.domNode.tagName&&e.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(e.moveChildren(this),e.remove())}replace(t){if(t.statics.blotName!==this.statics.blotName){let e=i.a.create(this.statics.defaultChild);t.moveChildren(e),this.appendChild(e)}super.replace(t)}}h.blotName="list",h.scope=i.a.Scope.BLOCK_BLOT,h.tagName=["OL","UL"],h.defaultChild="list-item",h.allowedChildren=[o]}}]);