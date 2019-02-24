export default (html, scope) => html`
${scope.style}
<div class="tl_page_wrap">
  <div class="tl_page">
    <main class="tl_article">
      <header class="tl_article_header">
        <h1 dir="auto"></h1>
        <address dir="auto">
          <a rel="author"></a>
          <!--
            --><time datetime=""></time>
        </address>
      </header>
      <article id="_tl_editor" class="tl_article_content">
        <h1><br></h1><address><br></address>
        <p><br></p>
      </article>
      <div id="_tl_link_tooltip" class="tl_link_tooltip"></div>
      <div id="_tl_tooltip" class="tl_tooltip">
        <div class="buttons">
          <span class="button_hover"></span>
          <div class="button_group">
            <button id="_bold_button"></button>
            <button id="_italic_button"></button>
            <button id="_link_button"></button>
          </div>
          <div class="button_group">
            <button id="_header_button"></button>
            <button id="_subheader_button"></button>
            <button id="_quote_button"></button>
          </div>
        </div>
        <div class="prompt">
          <span class="close"></span>
          <div class="prompt_input_wrap"><input type="url" class="prompt_input" /></div>
        </div>
      </div>
      <div id="_tl_blocks" class="tl_blocks">
        <div class="buttons">
          <button id="_image_button"></button>
          <!--
            --><button id="_embed_button"></button>
        </div>
      </div>
      <aside class="tl_article_buttons">
        <div class="account account_top"></div>
        <button id="_edit_button" class="button edit_button">Edit</button>
        <!--
          --><button id="_publish_button" class="button publish_button">Publish</button>
        <div class="account account_bottom"></div>
        <div id="_error_msg" class="error_msg"></div>
      </aside>
    </main>
  </div>
</div>
<div id="_tl_alerts" class="tl_alerts"></div>
`;