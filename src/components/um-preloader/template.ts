export default (html, scope) => html`
<div class="um-preloader">
  <slot></slot>
  <div
    class="${'um-preloader__loader ' + scope.loaderClass}"
    style="${{ opacity: scope.loading ? 1 : 0 }}"
  >
    <um-spinner-round></um-spinner-round>
  </div>
</div>
`;