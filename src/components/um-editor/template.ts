export default (html, scope) => html`
${scope.$style}

<!-- <div class="the-editor"> -->
<div class="the-editor-toolbar">

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'bold')}">
    <i class="fa fa-bold"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'italic')}">
    <i class="fa fa-italic"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'underline')}">
    <i class="fa fa-underline"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'strikethrough')}">
    <i class="fa fa-strikethrough"></i>
  </button>

  <div class="the-editor-toolbar-separator">|</div>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'createLink')}">
    <i class="fa fa-link"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'unlink')}">
    <i class="fa fa-unlink"></i>
  </button>


  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'insertUnorderedList')}">
    <i class="fa fa-list-ul"></i>
  </button>


  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'insertOrderedList')}">
    <i class="fa fa-list-ol"></i> 
  </button>


  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'indent')}">
    <i class="fa fa-indent"></i>
  </button>
  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'outdent')}">
    <i class="fa fa-outdent"></i>
  </button>


  <div class="the-editor-toolbar-separator">|</div>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'justifyLeft')}">
    <i class="fa fa-align-left"></i> 
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'justifyCenter')}">
    <i class="fa fa-align-center"></i> 
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'justifyRight')}">
    <i class="fa fa-align-right"></i> 
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event,'justifyFull')}">
    <i class="fa fa-align-justify"></i> 
  </button>

  <div class="the-editor-toolbar-separator">|</div>

  <div href="#"
       class="the-editor-toolbar-has-dropdown">
    <i class="fa fa-header"></i>
    <div class="the-editor-toolbar-dropdown">
      <button class="the-editor-toolbar-button"
              onclick="${($event)=>scope.doRichEditCommand($event, 'formatBlock', 'h1')}">
        <h1>Heading 1</h1>
      </button>
      <button class="the-editor-toolbar-button"
              onclick="${($event)=>scope.doRichEditCommand($event, 'formatBlock', 'h2')}">
        <h2>Heading 2</h2>
      </button>
      <button class="the-editor-toolbar-button"
              onclick="${($event)=>scope.doRichEditCommand($event, 'formatBlock', 'h3')}">
        <h3>Heading 3</h3>
      </button>
      <button class="the-editor-toolbar-button"
              onclick="${($event)=>scope.doRichEditCommand($event, 'formatBlock', 'h4')}">
        <h4>Heading 4</h4>
      </button>
      <button class="the-editor-toolbar-button"
              onclick="${($event)=>scope.doRichEditCommand($event, 'formatBlock', 'h5')}">
        <h5>Heading 5</h5>
      </button>
      <button class="the-editor-toolbar-button"
              onclick="${($event)=>scope.doRichEditCommand($event, 'formatBlock', 'h6')}">
        <h6>Heading 6</h6>
      </button>
    </div>
  </div>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event, 'formatBlock', 'p')}">
     <i class="fa fa-paragraph"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event, 'subscript')}">
    <i class="fa fa-subscript"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event, 'superscript')}">
    <i class="fa fa-superscript"></i>
  </button>

  <div class="the-editor-toolbar-separator">|</div>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event, 'undo')}">
    <i class="fa fa-undo"></i>
  </button>
  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.doRichEditCommand($event, 'styleWithCSS')}">
    <i class="fa fa-undo"></i>
  </button>

  <button class="the-editor-toolbar-button"
          onclick="${($event)=>scope.switchMode()}">
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

`;