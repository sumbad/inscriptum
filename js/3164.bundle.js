"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[3164,8926,9731,9022],{18926:(e,t,r)=>{r.r(t),r.d(t,{BreakBlot:()=>a});var s=r(25039),l=r(53691);class a extends l.i2{}a.blotName="textBreak",a.tagName="br",a.className="inline",s.Z.register(a)},63164:(e,t,r)=>{r.r(t),r.d(t,{DescriptionBlot:()=>a});var s=r(25039),l=r(49731);class a extends l.FieldBlot{static create(e){console.log("DescriptionBlot create ",e);let t=super.create(e);return t.setAttribute("data-placeholder","Summary of the text"),t.setAttribute("data-label","Description"),t}formatAt(e,t,r,s){console.log("DescriptionBlot formatAt ",e,t,r,s),r===a.blotName?super.formatAt(e,t,r,s):"link"===r&&super.formatAt(0,this.length(),r,s)}format(e,t){console.log("DescriptionBlot format ",e,t),super.format(e,t)}replace(e){console.log("DescriptionBlot replace ",e),super.replace(e)}insertAt(e,t,r){console.log("DescriptionBlot insertAt ",e,t,r),super.insertAt(e,t,r)}}a.blotName="blockDescription",a.tagName="address",s.Z.register(a)},49731:(e,t,r)=>{r.r(t),r.d(t,{FieldBlot:()=>l});var s=r(69022);class l extends s.SingleLineBlot{}},69022:(e,t,r)=>{r.r(t),r.d(t,{SingleLineBlot:()=>i});var s=r(53691),l=r(18926),a=r(70347),o=r.n(a);class i extends s.ZP{replace(e){e.children.forEach((e=>{e instanceof l.BreakBlot&&e.replaceWith(o().create("text"," "))})),super.replace(e)}insertAt(e,t,r){void 0!==r&&"textBreak"==t?super.insertAt(e,"\n"):super.insertAt(e,t,r)}}}}]);