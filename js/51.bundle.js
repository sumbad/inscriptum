(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"PlainTextClipboard",(function(){return c}));var l=n(40),s=n(92),o=n.n(s),i=n(175);class c extends i.a{onPaste(e){if(e.defaultPrevented||!this.quill.isEnabled())return;let t=this.quill.getSelection(),n=(new o.a).retain(t.index);this.container.style.top=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0).toString()+"px",this.container.focus(),setTimeout(()=>{this.quill.selection.update(l.a.sources.SILENT),n=n.concat(this.convert()).delete(t.length),this.quill.updateContents(n,l.a.sources.USER),this.quill.setSelection(n.length()-t.length,l.a.sources.SILENT);let e=this.quill.getBounds(n.length()-t.length,l.a.sources.SILENT);this.quill.scrollingContainer.scrollTop=e.top},1)}}}}]);