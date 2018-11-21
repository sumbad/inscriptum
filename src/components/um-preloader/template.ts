export default (html, scope) => html`
<div class="um-preloader">
  <slot></slot>
  ${ getSpinner(html, scope) }
</div>
`;


function getSpinner(html, scope) {
  if (scope.loading) {
    return html`
      <div
        class="${'um-preloader__loader ' + scope.loaderClass}"
        style="${{ opacity: scope.showSpinner ? 1 : 0 }}"
      >
        <um-spinner-round></um-spinner-round>
      </div>
    `;
  } else {
    return '';
  }
} 