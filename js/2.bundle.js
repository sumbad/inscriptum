webpackJsonp([2],{358:function(e,t){!function(){"use strict";(()=>{if(!window.customElements)return;const e=window.HTMLElement,t=window.customElements.define,n=window.customElements.get,o=new Map,c=new Map;let l=!1,s=!1;window.HTMLElement=function(){if(!l){const e=o.get(this.constructor),t=n.call(window.customElements,e);return s=!0,new t}l=!1},window.HTMLElement.prototype=e.prototype,Object.defineProperty(window,"customElements",{value:window.customElements,configurable:!0,writable:!0}),Object.defineProperty(window.customElements,"define",{value:(n,a)=>{const i=a.prototype,r=class extends e{constructor(){super(),Object.setPrototypeOf(this,i),s||(l=!0,a.call(this)),s=!1}},d=r.prototype;r.observedAttributes=a.observedAttributes,d.connectedCallback=i.connectedCallback,d.disconnectedCallback=i.disconnectedCallback,d.attributeChangedCallback=i.attributeChangedCallback,d.adoptedCallback=i.adoptedCallback,o.set(a,n),c.set(n,a),t.call(window.customElements,n,r)},configurable:!0,writable:!0}),Object.defineProperty(window.customElements,"get",{value:e=>c.get(e),configurable:!0,writable:!0})})()}()}});