(window.webpackJsonp=window.webpackJsonp||[]).push([[16,63,64,92],{126:function(t,o,e){"use strict";e.r(o),o.default=(t,o)=>t`
${o.$style}

<!-- <div class="the-editor"> -->
<div class="the-editor-toolbar">

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"bold")}">
    <i class="fa fa-bold"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"italic")}">
    <i class="fa fa-italic"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"underline")}">
    <i class="fa fa-underline"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"strikethrough")}">
    <i class="fa fa-strikethrough"></i>
  </button>

  <div class="the-editor-toolbar-separator">|</div>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"createLink")}">
    <i class="fa fa-link"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"unlink")}">
    <i class="fa fa-unlink"></i>
  </button>


  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"insertUnorderedList")}">
    <i class="fa fa-list-ul"></i>
  </button>


  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"insertOrderedList")}">
    <i class="fa fa-list-ol"></i> 
  </button>


  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"indent")}">
    <i class="fa fa-indent"></i>
  </button>
  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"outdent")}">
    <i class="fa fa-outdent"></i>
  </button>


  <div class="the-editor-toolbar-separator">|</div>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"justifyLeft")}">
    <i class="fa fa-align-left"></i> 
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"justifyCenter")}">
    <i class="fa fa-align-center"></i> 
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"justifyRight")}">
    <i class="fa fa-align-right"></i> 
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"justifyFull")}">
    <i class="fa fa-align-justify"></i> 
  </button>

  <div class="the-editor-toolbar-separator">|</div>

  <div href="#"
       class="the-editor-toolbar-has-dropdown">
    <i class="fa fa-header"></i>
    <div class="the-editor-toolbar-dropdown">
      <button class="the-editor-toolbar-button"
              onclick="${t=>o.doRichEditCommand(t,"formatBlock","h1")}">
        <h1>Heading 1</h1>
      </button>
      <button class="the-editor-toolbar-button"
              onclick="${t=>o.doRichEditCommand(t,"formatBlock","h2")}">
        <h2>Heading 2</h2>
      </button>
      <button class="the-editor-toolbar-button"
              onclick="${t=>o.doRichEditCommand(t,"formatBlock","h3")}">
        <h3>Heading 3</h3>
      </button>
      <button class="the-editor-toolbar-button"
              onclick="${t=>o.doRichEditCommand(t,"formatBlock","h4")}">
        <h4>Heading 4</h4>
      </button>
      <button class="the-editor-toolbar-button"
              onclick="${t=>o.doRichEditCommand(t,"formatBlock","h5")}">
        <h5>Heading 5</h5>
      </button>
      <button class="the-editor-toolbar-button"
              onclick="${t=>o.doRichEditCommand(t,"formatBlock","h6")}">
        <h6>Heading 6</h6>
      </button>
    </div>
  </div>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"formatBlock","p")}">
     <i class="fa fa-paragraph"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"subscript")}">
    <i class="fa fa-subscript"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"superscript")}">
    <i class="fa fa-superscript"></i>
  </button>

  <div class="the-editor-toolbar-separator">|</div>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"undo")}">
    <i class="fa fa-undo"></i>
  </button>
  <button class="the-editor-toolbar-button"
          onclick="${t=>o.doRichEditCommand(t,"styleWithCSS")}">
    <i class="fa fa-undo"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${t=>o.switchMode()}">
    <i class="fa fa-code" aria-hidden="true"></i>
  </button>

  <button class="the-editor-toolbar-button"
          class="the-editor-toolbar-save">
    <i class="fa fa-save"></i>
  </button>

</div>



<div class="the-editor-content"
     id="editorContent">
  <article class="entry"
           contenteditable>

    <!-- Sample data -->
    <h1 style="text-align: center;">
      <font face="Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif">
        <font color="#1abc9c"><br></font>
      </font>
    </h1>
    <h1 style="text-align: center;">
      <font face="Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif">
        <font color="#1abc9c"><br></font>
      </font>
    </h1>
    <h1 style="text-align: center;">
      <font face="Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif">
        <font color="#1abc9c">S</font>
        <font color="#f39c12">W</font>
        <font color="#e74c3c">E</font>
        <font color="#95a5a6">ditor</font>
      </font>
      <font size="3"
            face="Consolas, monaco, monospace"
            color="#bdc3c7">v0.2.0</font><br></h1>
    <p style="text-align: center;">
      <font color="#d35400"
            face="Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif">Added more fonts and added flat colors</font>
    </p>
    <p style="text-align: center;">
      <a href="https://twitter.com/nakome">
        <font color="#c0392b">@</font>
        <font color="#3498db">nakome</font>
      </a>
    </p>
    <p style="text-align: center;"><br></p>
    <p></p>
    <div style="text-align: center;"><b>Note:</b></div>
    <div style="text-align: center;"><i><font color="#95a5a6">Text editor is responsive but for scope demo the class main have 800px&nbsp;</font></i></div>
    <div style="text-align: center;"><i><font color="#95a5a6">remove if you like.</font></i></div>
    <div style="text-align: center;"><i><font color="#1abc9c">Thanks</font><font color="#95a5a6">.</font></i></div>

  </article>

</div>
<!-- </div> -->



<!-- <div id="pell">
  
    </div>
    <div>
      Text output:
      <div id="text-output"></div>
      HTML output:
      <pre id="html-output"></pre>
    </div> -->

`},332:function(t,o){t.exports=".the-editor-toolbar{background:#fff;border-bottom:1px solid #f1f1f1;padding:0 9px;box-sizing:border-box}.the-editor-toolbar-button{position:relative;color:#444;padding:0 4px;text-decoration:none;height:40px;line-height:40px;background-color:transparent;margin:0;letter-spacing:0;text-transform:none;text-align:left}.the-editor-toolbar-button:hover{color:#444;background-color:transparent}.the-editor-toolbar-save{float:right}.the-editor-toolbar-has-dropdown{cursor:pointer;position:relative;display:inline-block;padding:0 4px;height:40px;line-height:40px}.the-editor-toolbar-has-dropdown:hover>.the-editor-toolbar-dropdown{display:block}.the-editor-toolbar-dropdown{display:none;position:absolute;left:0;padding:9px;width:220px;background:white;border:1px solid #e5e5e5;box-shadow:0px 1px 1px rgba(0,0,0,0.04);border-top:none}.the-editor-toolbar-dropdown a{display:block}.the-editor-toolbar-dropdown h1,.the-editor-toolbar-dropdown h2,.the-editor-toolbar-dropdown h3,.the-editor-toolbar-dropdown h4,.the-editor-toolbar-dropdown h5,.the-editor-toolbar-dropdown h6{margin:0;padding:5px 0;width:200px}.the-editor-toolbar-separator{display:inline;margin:0 6px;color:#fff}.the-editor-content{width:100%;min-height:400px;background:white;padding:1em}.the-editor-content:focus{outline:none}\n"},47:function(t,o,e){"use strict";e.r(o),e.d(o,"PreloaderService",(function(){return n}));var i=e(22);class n{}n.isAppLoading=new i.a},88:function(t,o,e){"use strict";e.r(o),e.d(o,"EditorComponent",(function(){return r}));var i=e(45),n=e(126),a=e(47),d=function(t,o,e,i){var n,a=arguments.length,d=a<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,o,e,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(d=(a<3?n(d):a>3?n(o,e,d):n(o,e))||d);return a>3&&d&&Object.defineProperty(o,e,d),d};let r=class extends i.UmWebComponent{constructor(){super(n.default,e(332)),this._isCodeMode=!1,a.PreloaderService.isAppLoading.next(!1)}connectedCallback(){super.connectedCallback(),this.$editorContent=this.querySelector("#editorContent"),this.$editorContent.addEventListener("paste",(function(t){if(t.preventDefault(),null!==t.clipboardData){const o=t.clipboardData&&t.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,o)}}))}doRichEditCommand(t,o,e){t.preventDefault(),document.execCommand(o,!1,e);const i=window.getSelection();if(i&&i.focusNode){const t=i.focusNode.parentElement;if(t)switch(o){case"formatBlock":this._formatBlockClasses(e,t)}}}switchMode(){this._isCodeMode=!this._isCodeMode,this._setDocMode(this._isCodeMode,this.$editorContent.firstElementChild)}_formatBlockClasses(t,o){switch(t){case"h2":o.classList.add("entry-title")}}_setDocMode(t,o){let e,i=o.innerHTML;if(t){e=document.createTextNode(i),o.innerHTML="";let t=document.createElement("pre");o.contentEditable="false",t.id="sourceText",t.contentEditable="true",t.appendChild(e),o.appendChild(t)}else e=document.createRange(),e.selectNodeContents(o.firstChild),o.innerHTML=e.toString(),o.contentEditable="true"}};r=d([Object(i.Define)("um-editor")],r)}}]);