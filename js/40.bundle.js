(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{84:function(t,e,i){"use strict";i.r(e),i.d(e,"CodeEndLineFlag",(function(){return h})),i.d(e,"InsSyntaxCodeBlock",(function(){return o})),i.d(e,"InsSyntaxModule",(function(){return a}));var s=i(59),l=i(78),n=i(99);class h extends l.a{static formats(){return{}}}h.blotName="code-end",h.className="l",h.tagName="SPAN",s.a.register(h);class o extends n.a{highlight(t){let e=this.domNode.textContent||"";if(this.cachedText!==e){if(e.trim().length>0||null==this.cachedText){let i="";const s=t(e).split("\n");for(let t=0;t<s.length-1;t++)i+=`<span class="l">${s[t]||" "}</span>\n`;i+=`<span class="l">${s[s.length-1]}</span>`,this.domNode.innerHTML=`<code class="hljs">${i}</code>`}this.cachedText=e}}}class a extends n.c{static register(){s.a.register(n.b,!0),s.a.register(o,!0)}highlight(){if(this.quill.selection.composing)return;this.quill.update(s.a.sources.USER);let t=this.quill.getSelection();this.quill.scroll.descendants(o).forEach(t=>{t.highlight(this.options.highlight)}),this.quill.update(s.a.sources.SILENT),null!=t&&document.activeElement===this.quill.container.querySelector("[contenteditable]")&&this.quill.setSelection(t,s.a.sources.SILENT)}}},99:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return r}));var s=i(61),l=i.n(s),n=i(131),h=i(128),o=i(101);class a extends o.b{replaceWith(t){this.domNode.textContent=this.domNode.textContent,this.attach(),super.replaceWith(t)}highlight(t){let e=this.domNode.textContent;this.cachedText!==e&&((e.trim().length>0||null==this.cachedText)&&(this.domNode.innerHTML=t(e),this.domNode.normalize(),this.attach()),this.cachedText=e)}}a.className="ql-syntax";let c=new l.a.Attributor.Class("token","hljs",{scope:l.a.Scope.INLINE});class r extends h.a{static register(){n.a.register(c,!0),n.a.register(a,!0)}constructor(t,e){if(super(t,e),"function"!=typeof this.options.highlight)throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");let i=null;this.quill.on(n.a.events.SCROLL_OPTIMIZE,()=>{clearTimeout(i),i=setTimeout(()=>{this.highlight(),i=null},this.options.interval)}),this.highlight()}highlight(){if(this.quill.selection.composing)return;this.quill.update(n.a.sources.USER);let t=this.quill.getSelection();this.quill.scroll.descendants(a).forEach(t=>{t.highlight(this.options.highlight)}),this.quill.update(n.a.sources.SILENT),null!=t&&this.quill.setSelection(t,n.a.sources.SILENT)}}r.DEFAULTS={highlight:null==window.hljs?null:function(t){return window.hljs.highlightAuto(t).value},interval:1e3}}}]);