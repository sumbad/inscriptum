(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{587:function(n,o,s){"use strict";s.r(o),o.default=((n,o)=>n`
<div class="um-preloader">
  <slot></slot>
  ${function(n,o){return o.loading?n`
      <div
        class="${"um-preloader__loader "+o.loaderClass}"
        style="${{opacity:o.showSpinner?1:0}}"
      >
        <um-spinner-round></um-spinner-round>
      </div>
    `:""}(n,o)}
</div>
`)}}]);