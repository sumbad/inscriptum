export default (html, scope) => html`
<template id="umArticlePreview">
  <um-article-preview></um-article-preview>
</template>

<div id="umArticlePrevieList">
  ${scope.previews}
</div>
`;