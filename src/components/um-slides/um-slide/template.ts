export default (html, scope) => html`
<section>
  <um-slide-content>${{ html: scope.content }}</um-slide-content>
</section>
`;