(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{115:function(t,a,s){"use strict";s.r(a);var e=s(13);a.default=(t,a)=>e.e`
${t.styles}

<um-preloader ?loading=${t.isPreloader}>
  <div class="tl_page_wrap">

    <div class="tl_page">
      <section class="tl_article">
        <header class="tl_article_header">
          <h1 dir="auto"></h1>
          <address dir="auto">
            <a rel="author"></a>
            <time datetime=""></time>
          </address>
        </header>
        <article id="_tl_editor" class="tl_article_content">
          <h1><br></h1>
          <address><br></address>
          <p><br></p>
        </article>
        ${t.tooltip}
        <aside class="tl_article_buttons">
          <div class="account account_top"></div>
          <a id="_edit_button" class="button edit_button">Edit</a>
          <button @click=${a.publish} class="button publish_button">Publish</button>
          <div class="account account_bottom"></div>
          <div id="_error_msg" class="error_msg"></div>
        </aside>
      </section>
    </div>
  </div>
</um-preloader>

<div id="_tl_alerts" class="tl_alerts"></div>
`}}]);