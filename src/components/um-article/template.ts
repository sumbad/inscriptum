export default (html, scope) => html`
<article id="article" class="entry">

    <header class="entry-header">
        <h1 class="entry-title">
            ${scope.articleTitle}
        </h1>
        <div class="entry-meta">
            <ul>
                <li>${scope.articleDate}</li>
            </ul>
        </div>
    </header>

    <div class="entry-content">
        ${{ html: scope.articleContent }}
    </div>

</article>
`;