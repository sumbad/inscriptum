webpackJsonp([2],{

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  'use strict';

  (function () {
    'use strict';
    if (!window.customElements) return;var a = window.HTMLElement,
        b = window.customElements.define,
        c = window.customElements.get,
        d = new Map(),
        e = new Map();var f = !1,
        g = !1;window.HTMLElement = function () {
      if (!f) {
        var _a = d.get(this.constructor),
            _b = c.call(window.customElements, _a);g = !0;var _e = new _b();return _e;
      }f = !1;
    }, window.HTMLElement.prototype = a.prototype;Object.defineProperty(window, 'customElements', { value: window.customElements, configurable: !0, writable: !0 }), Object.defineProperty(window.customElements, 'define', { value: function value(c, h) {
        var i = h.prototype,
            j = function (_a2) {
          _inherits(j, _a2);

          function j() {
            var _this;

            _classCallCheck(this, j);

            (_this = _possibleConstructorReturn(this, (j.__proto__ || Object.getPrototypeOf(j)).call(this)), _this), Object.setPrototypeOf(_this, i), g || (f = !0, h.call(_this)), g = !1;return _this;
          }

          return j;
        }(a),
            k = j.prototype;j.observedAttributes = h.observedAttributes, k.connectedCallback = i.connectedCallback, k.disconnectedCallback = i.disconnectedCallback, k.attributeChangedCallback = i.attributeChangedCallback, k.adoptedCallback = i.adoptedCallback, d.set(h, c), e.set(c, h), b.call(window.customElements, c, j);
      }, configurable: !0, writable: !0 }), Object.defineProperty(window.customElements, 'get', { value: function value(a) {
        return e.get(a);
      }, configurable: !0, writable: !0 });
  })();

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
})();

/***/ })

});
//# sourceMappingURL=2.bundle.js.map