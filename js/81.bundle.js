(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{597:function(e,t,o){"use strict";o.r(t),o.d(t,"EditorComponent",function(){return c});o(582);var n=o(554),i=o(635),r=o(558),c=class extends n.UmWebComponent{constructor(){super(i.default,o(677)),this._isCodeMode=!1,r.PreloaderService.isAppLoading.next(!1)}connectedCallback(){super.connectedCallback(),this.$editorContent=this.querySelector("#editorContent"),this.$editorContent.addEventListener("paste",function(e){if(e.preventDefault(),null!==e.clipboardData){var t=e.clipboardData&&e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)}})}doRichEditCommand(e,t,o){e.preventDefault(),document.execCommand(t,!1,o);var n=window.getSelection();if(n&&n.focusNode){var i=n.focusNode.parentElement;if(i)switch(t){case"formatBlock":this._formatBlockClasses(o,i)}}}switchMode(){this._isCodeMode=!this._isCodeMode,this._setDocMode(this._isCodeMode,this.$editorContent.firstElementChild)}_formatBlockClasses(e,t){switch(e){case"h2":t.classList.add("entry-title")}}_setDocMode(e,t){var o,n=t.innerHTML;if(e){o=document.createTextNode(n),t.innerHTML="";var i=document.createElement("pre");t.contentEditable="false",i.id="sourceText",i.contentEditable="true",i.appendChild(o),t.appendChild(i)}else(o=document.createRange()).selectNodeContents(t.firstChild),t.innerHTML=o.toString(),t.contentEditable="true"}};c=function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c}([Object(n.Define)("um-editor")],c)}}]);