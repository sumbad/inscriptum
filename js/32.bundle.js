(window.webpackJsonp=window.webpackJsonp||[]).push([[32,37,41,46],{63:function(e,t,r){"use strict";r.r(t),r.d(t,"SingleLineBlot",(function(){return l}));var a=r(60),n=r(64),s=r(61),i=r.n(s);class l extends a.c{replace(e){e.children.forEach(e=>{e instanceof n.BreakBlot&&e.replaceWith(i.a.create("text"," "))}),super.replace(e)}insertAt(e,t,r){void 0!==r&&"textBreak"==t?super.insertAt(e,"\n"):super.insertAt(e,t,r)}}},64:function(e,t,r){"use strict";r.r(t),r.d(t,"BreakBlot",(function(){return s}));var a=r(59),n=r(60);class s extends n.a{}s.blotName="textBreak",s.tagName="br",s.className="inline",a.a.register(s)},66:function(e,t,r){"use strict";r.r(t),r.d(t,"FieldBlot",(function(){return n}));var a=r(63);class n extends a.SingleLineBlot{}},83:function(e,t,r){"use strict";r.r(t),r.d(t,"TitleBlot",(function(){return s}));var a=r(59),n=r(66);class s extends n.FieldBlot{static create(e){let t=super.create(e);return t.setAttribute("data-placeholder","Title"),t.setAttribute("data-label","Title"),t}formatAt(e,t,r,a){r===s.blotName&&super.formatAt(e,t,r,a)}}s.blotName="blockTitle",s.tagName="h1",a.a.register(s)}}]);