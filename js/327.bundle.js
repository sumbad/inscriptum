/*! For license information please see 327.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[327],{577:(e,t,n)=>{n.d(t,{o:()=>r});var o=n(3445);const s=new WeakMap,r=(0,o.XM)((e=>t=>{const n=s.get(t);if(void 0===e&&t instanceof o._l){if(void 0!==n||!s.has(t)){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else e!==n&&t.setValue(e);s.set(t,e)}))},7157:(e,t,n)=>{n.d(t,{r:()=>f});var o=n(3445);const s=(e,t)=>{const n=e.startNode.parentNode,s=void 0===t?e.endNode:t.startNode,r=n.insertBefore((0,o.IW)(),s);n.insertBefore((0,o.IW)(),s);const i=new o.nt(e.options);return i.insertAfterNode(r),i},r=(e,t)=>(e.setValue(t),e.commit(),e),i=(e,t,n)=>{const s=e.startNode.parentNode,r=n?n.startNode:e.endNode,i=t.endNode.nextSibling;i!==r&&(0,o.V)(s,t.startNode,i,r)},a=e=>{(0,o.r4)(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},l=(e,t,n)=>{const o=new Map;for(let s=t;s<=n;s++)o.set(e[s],s);return o},d=new WeakMap,c=new WeakMap,f=(0,o.XM)(((e,t,n)=>{let f;return void 0===n?n=t:void 0!==t&&(f=t),t=>{if(!(t instanceof o.nt))throw new Error("repeat can only be used in text bindings");const u=d.get(t)||[],m=c.get(t)||[],p=[],N=[],v=[];let g,w,h=0;for(const t of e)v[h]=f?f(t,h):h,N[h]=n(t,h),h++;let M=0,b=u.length-1,k=0,W=N.length-1;for(;M<=b&&k<=W;)if(null===u[M])M++;else if(null===u[b])b--;else if(m[M]===v[k])p[k]=r(u[M],N[k]),M++,k++;else if(m[b]===v[W])p[W]=r(u[b],N[W]),b--,W--;else if(m[M]===v[W])p[W]=r(u[M],N[W]),i(t,u[M],p[W+1]),M++,W--;else if(m[b]===v[k])p[k]=r(u[b],N[k]),i(t,u[b],u[M]),b--,k++;else if(void 0===g&&(g=l(v,k,W),w=l(m,M,b)),g.has(m[M]))if(g.has(m[b])){const e=w.get(v[k]),n=void 0!==e?u[e]:null;if(null===n){const e=s(t,u[M]);r(e,N[k]),p[k]=e}else p[k]=r(n,N[k]),i(t,n,u[M]),u[e]=null;k++}else a(u[b]),b--;else a(u[M]),M++;for(;k<=W;){const e=s(t,p[W+1]);r(e,N[k]),p[k++]=e}for(;M<=b;){const e=u[M++];null!==e&&a(e)}d.set(t,p),c.set(t,v)}}))},1943:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(3602),s=n(3445);const r=new WeakMap,i=(0,s.XM)((e=>t=>{if(!(t instanceof s.nt))throw new Error("unsafeHTML can only be used in text bindings");const n=r.get(t);if(void 0!==n&&(0,o.pt)(e)&&e===n.value&&t.value===n.fragment)return;const i=document.createElement("template");i.innerHTML=e;const a=document.importNode(i.content,!0);t.setValue(a),r.set(t,{value:e,fragment:a})}))}}]);