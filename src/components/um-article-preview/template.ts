export default (html, scope) => html`
<section class="entry">

  <header class="entry-header">
    <h2 class="entry-title">
      <a href=${`articles/${scope.articleName}`}>
        ${scope.articleTitle}
      </a>
    </h2>
    <div class="entry-meta">
      <ul>
        <li>${scope.articleDate}</li>
      </ul>
    </div>
  </header>

  <div class="entry-content">
    <slot></slot>
  </div>

</section>
`;