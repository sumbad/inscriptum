export default (html, scope) => html`
<template id="umArticlePreview">
  <inscriptum-post-preview></inscriptum-post-preview>
</template>

<div id="umArticlePrevieList">
  ${scope.previews}
</div>
`;