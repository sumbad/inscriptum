(window.webpackJsonp=window.webpackJsonp||[]).push([[33,39,43,48],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"DescriptionBlot",(function(){return n}));var o=r(61),s=r(70);class n extends s.FieldBlot{static create(e){console.log("DescriptionBlot create ",e);let t=super.create(e);return t.setAttribute("data-placeholder","Summary of the text"),t.setAttribute("data-label","Description"),t}formatAt(e,t,r,o){console.log("DescriptionBlot formatAt ",e,t,r,o),r===n.blotName?super.formatAt(e,t,r,o):"link"===r&&super.formatAt(0,this.length(),r,o)}format(e,t){console.log("DescriptionBlot format ",e,t),super.format(e,t)}replace(e){console.log("DescriptionBlot replace ",e),super.replace(e)}insertAt(e,t,r){console.log("DescriptionBlot insertAt ",e,t,r),super.insertAt(e,t,r)}}n.blotName="blockDescription",n.tagName="address",o.a.register(n)},66:function(e,t,r){"use strict";r.r(t),r.d(t,"SingleLineBlot",(function(){return i}));var o=r(62),s=r(68),n=r(63),a=r.n(n);class i extends o.c{replace(e){e.children.forEach(e=>{e instanceof s.BreakBlot&&e.replaceWith(a.a.create("text"," "))}),super.replace(e)}insertAt(e,t,r){void 0!==r&&"textBreak"==t?super.insertAt(e,"\n"):super.insertAt(e,t,r)}}},68:function(e,t,r){"use strict";r.r(t),r.d(t,"BreakBlot",(function(){return n}));var o=r(61),s=r(62);class n extends s.a{}n.blotName="textBreak",n.tagName="br",n.className="inline",o.a.register(n)},70:function(e,t,r){"use strict";r.r(t),r.d(t,"FieldBlot",(function(){return s}));var o=r(66);class s extends o.SingleLineBlot{}}}]);