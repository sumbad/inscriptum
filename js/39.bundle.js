(window.webpackJsonp=window.webpackJsonp||[]).push([[39,43,48],{44:function(e,t,n){"use strict";n.r(t),n.d(t,"SingleLineBlot",(function(){return c}));var r=n(41),s=n(46),a=n(42),i=n.n(a);class c extends r.c{replace(e){e.children.forEach(e=>{e instanceof s.BreakBlot&&e.replaceWith(i.a.create("text"," "))}),super.replace(e)}insertAt(e,t,n){void 0!==n&&"textBreak"==t?super.insertAt(e,"\n"):super.insertAt(e,t,n)}}},46:function(e,t,n){"use strict";n.r(t),n.d(t,"BreakBlot",(function(){return a}));var r=n(40),s=n(41);class a extends s.a{}a.blotName="textBreak",a.tagName="br",a.className="inline",r.a.register(a)},49:function(e,t,n){"use strict";n.r(t),n.d(t,"FieldBlot",(function(){return s}));var r=n(44);class s extends r.SingleLineBlot{}}}]);