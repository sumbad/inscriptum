webpackJsonp([0],{

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  /*
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var Ib = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
  (function () {
    function k() {
      var a = this;this.s = {};this.g = document.documentElement;var b = new Ja();b.rules = [];this.h = t.set(this.g, new t(b));this.i = !1;this.b = this.a = null;Jb(function () {
        a.c();
      });
    }function F() {
      this.customStyles = [];this.enqueued = !1;
    }function Kb() {}function oa(a) {
      this.cache = {};this.c = void 0 === a ? 100 : a;
    }function p() {}function t(a, b, c, d, e) {
      this.G = a || null;this.b = b || null;this.sa = c || [];this.P = null;this.Z = e || "";this.a = this.B = this.K = null;
    }function r() {}function Ja() {
      this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
    }function Hd(a) {
      function b(b, c) {
        Object.defineProperty(b, "innerHTML", { enumerable: c.enumerable, configurable: !0, get: c.get, set: function set(b) {
            var d = this,
                e = void 0;n(this) && (e = [], P(this, function (a) {
              a !== d && e.push(a);
            }));c.set.call(this, b);if (e) for (var f = 0; f < e.length; f++) {
              var g = e[f];1 === g.__CE_state && a.disconnectedCallback(g);
            }this.ownerDocument.__CE_hasRegistry ? a.c(this) : a.j(this);
            return b;
          } });
      }function c(b, c) {
        w(b, "insertAdjacentElement", function (b, d) {
          var e = n(d);b = c.call(this, b, d);e && a.a(d);n(b) && a.b(d);return b;
        });
      }Lb ? w(Element.prototype, "attachShadow", function (a) {
        return this.__CE_shadowRoot = a = Lb.call(this, a);
      }) : console.warn("Custom Elements: `Element#attachShadow` was not patched.");if (Ka && Ka.get) b(Element.prototype, Ka);else if (La && La.get) b(HTMLElement.prototype, La);else {
        var d = Ma.call(document, "div");a.u(function (a) {
          b(a, { enumerable: !0, configurable: !0, get: function get() {
              return Mb.call(this, !0).innerHTML;
            }, set: function set(a) {
              var b = "template" === this.localName ? this.content : this;for (d.innerHTML = a; 0 < b.childNodes.length;) {
                Na.call(b, b.childNodes[0]);
              }for (; 0 < d.childNodes.length;) {
                pa.call(b, d.childNodes[0]);
              }
            } });
        });
      }w(Element.prototype, "setAttribute", function (b, c) {
        if (1 !== this.__CE_state) return Nb.call(this, b, c);var d = Oa.call(this, b);Nb.call(this, b, c);c = Oa.call(this, b);a.attributeChangedCallback(this, b, d, c, null);
      });w(Element.prototype, "setAttributeNS", function (b, c, d) {
        if (1 !== this.__CE_state) return Ob.call(this, b, c, d);var e = qa.call(this, b, c);Ob.call(this, b, c, d);d = qa.call(this, b, c);a.attributeChangedCallback(this, c, e, d, b);
      });w(Element.prototype, "removeAttribute", function (b) {
        if (1 !== this.__CE_state) return Pb.call(this, b);var c = Oa.call(this, b);Pb.call(this, b);null !== c && a.attributeChangedCallback(this, b, c, null, null);
      });w(Element.prototype, "removeAttributeNS", function (b, c) {
        if (1 !== this.__CE_state) return Qb.call(this, b, c);var d = qa.call(this, b, c);Qb.call(this, b, c);var e = qa.call(this, b, c);d !== e && a.attributeChangedCallback(this, c, d, e, b);
      });Rb ? c(HTMLElement.prototype, Rb) : Sb ? c(Element.prototype, Sb) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");Tb(a, Element.prototype, { La: Id, append: Jd });Kd(a, { kb: Ld, jb: Md, replaceWith: Nd, remove: Od });
    }function Kd(a, b) {
      var c = Element.prototype;c.before = function (c) {
        for (var d = [], f = 0; f < arguments.length; ++f) {
          d[f - 0] = arguments[f];
        }f = d.filter(function (a) {
          return a instanceof Node && n(a);
        });b.kb.apply(this, d);for (var g = 0; g < f.length; g++) {
          a.a(f[g]);
        }if (n(this)) for (f = 0; f < d.length; f++) {
          g = d[f], g instanceof Element && a.b(g);
        }
      };c.after = function (c) {
        for (var d = [], f = 0; f < arguments.length; ++f) {
          d[f - 0] = arguments[f];
        }f = d.filter(function (a) {
          return a instanceof Node && n(a);
        });b.jb.apply(this, d);for (var g = 0; g < f.length; g++) {
          a.a(f[g]);
        }if (n(this)) for (f = 0; f < d.length; f++) {
          g = d[f], g instanceof Element && a.b(g);
        }
      };c.replaceWith = function (c) {
        for (var d = [], f = 0; f < arguments.length; ++f) {
          d[f - 0] = arguments[f];
        }f = d.filter(function (a) {
          return a instanceof Node && n(a);
        });var g = n(this);b.replaceWith.apply(this, d);for (var h = 0; h < f.length; h++) {
          a.a(f[h]);
        }if (g) for (a.a(this), f = 0; f < d.length; f++) {
          g = d[f], g instanceof Element && a.b(g);
        }
      };c.remove = function () {
        var c = n(this);b.remove.call(this);c && a.a(this);
      };
    }function Pd(a) {
      function b(b, d) {
        Object.defineProperty(b, "textContent", { enumerable: d.enumerable, configurable: !0, get: d.get, set: function set(b) {
            if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b);else {
              var c = void 0;if (this.firstChild) {
                var e = this.childNodes,
                    h = e.length;if (0 < h && n(this)) {
                  c = Array(h);for (var m = 0; m < h; m++) {
                    c[m] = e[m];
                  }
                }
              }d.set.call(this, b);if (c) for (b = 0; b < c.length; b++) {
                a.a(c[b]);
              }
            }
          } });
      }
      w(Node.prototype, "insertBefore", function (b, d) {
        if (b instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(b.childNodes);b = Ub.call(this, b, d);if (n(this)) for (d = 0; d < c.length; d++) {
            a.b(c[d]);
          }return b;
        }c = n(b);d = Ub.call(this, b, d);c && a.a(b);n(this) && a.b(b);return d;
      });w(Node.prototype, "appendChild", function (b) {
        if (b instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(b.childNodes);b = pa.call(this, b);if (n(this)) for (var e = 0; e < c.length; e++) {
            a.b(c[e]);
          }return b;
        }c = n(b);e = pa.call(this, b);c && a.a(b);n(this) && a.b(b);return e;
      });w(Node.prototype, "cloneNode", function (b) {
        b = Mb.call(this, b);this.ownerDocument.__CE_hasRegistry ? a.c(b) : a.j(b);return b;
      });w(Node.prototype, "removeChild", function (b) {
        var c = n(b),
            e = Na.call(this, b);c && a.a(b);return e;
      });w(Node.prototype, "replaceChild", function (b, d) {
        if (b instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(b.childNodes);b = Vb.call(this, b, d);if (n(this)) for (a.a(d), d = 0; d < c.length; d++) {
            a.b(c[d]);
          }return b;
        }c = n(b);var f = Vb.call(this, b, d),
            g = n(this);g && a.a(d);c && a.a(b);g && a.b(b);return f;
      });Pa && Pa.get ? b(Node.prototype, Pa) : a.u(function (a) {
        b(a, { enumerable: !0, configurable: !0, get: function get() {
            for (var a = [], b = 0; b < this.childNodes.length; b++) {
              a.push(this.childNodes[b].textContent);
            }return a.join("");
          }, set: function set(a) {
            for (; this.firstChild;) {
              Na.call(this, this.firstChild);
            }pa.call(this, document.createTextNode(a));
          } });
      });
    }function Qd(a) {
      w(Document.prototype, "createElement", function (b) {
        if (this.__CE_hasRegistry) {
          var c = a.f(b);if (c) return new c.constructor();
        }b = Ma.call(this, b);a.g(b);return b;
      });
      w(Document.prototype, "importNode", function (b, c) {
        b = Rd.call(this, b, c);this.__CE_hasRegistry ? a.c(b) : a.j(b);return b;
      });w(Document.prototype, "createElementNS", function (b, c) {
        if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
          var d = a.f(c);if (d) return new d.constructor();
        }b = Sd.call(this, b, c);a.g(b);return b;
      });Tb(a, Document.prototype, { La: Td, append: Ud });
    }function Tb(a, b, c) {
      b.prepend = function (b) {
        for (var d = [], f = 0; f < arguments.length; ++f) {
          d[f - 0] = arguments[f];
        }f = d.filter(function (a) {
          return a instanceof Node && n(a);
        });c.La.apply(this, d);for (var g = 0; g < f.length; g++) {
          a.a(f[g]);
        }if (n(this)) for (f = 0; f < d.length; f++) {
          g = d[f], g instanceof Element && a.b(g);
        }
      };b.append = function (b) {
        for (var d = [], f = 0; f < arguments.length; ++f) {
          d[f - 0] = arguments[f];
        }f = d.filter(function (a) {
          return a instanceof Node && n(a);
        });c.append.apply(this, d);for (var g = 0; g < f.length; g++) {
          a.a(f[g]);
        }if (n(this)) for (f = 0; f < d.length; f++) {
          g = d[f], g instanceof Element && a.b(g);
        }
      };
    }function Vd(a) {
      window.HTMLElement = function () {
        function b() {
          var b = this.constructor,
              d = a.C(b);if (!d) throw Error("The custom element being constructed was not registered with `customElements`.");
          var e = d.constructionStack;if (0 === e.length) return e = Ma.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = d, a.g(e), e;d = e.length - 1;var f = e[d];if (f === Wb) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");e[d] = Wb;Object.setPrototypeOf(f, b.prototype);a.g(f);return f;
        }b.prototype = Wd.prototype;return b;
      }();
    }function z(a) {
      this.f = !1;this.a = a;this.h = new Map();this.g = function (a) {
        return a();
      };this.b = !1;
      this.c = [];this.i = new Qa(a, document);
    }function Xb() {
      var a = this;this.b = this.a = void 0;this.c = new Promise(function (b) {
        a.b = b;a.a && b(a.a);
      });
    }function Qa(a, b) {
      this.b = a;this.a = b;this.N = void 0;this.b.c(this.a);"loading" === this.a.readyState && (this.N = new MutationObserver(this.f.bind(this)), this.N.observe(this.a, { childList: !0, subtree: !0 }));
    }function u() {
      this.s = new Map();this.l = new Map();this.i = [];this.h = !1;
    }function l(a, b, c) {
      if (a !== Yb) throw new TypeError("Illegal constructor");a = document.createDocumentFragment();a.__proto__ = l.prototype;a.D(b, c);return a;
    }function ra(a) {
      if (!a.__shady || void 0 === a.__shady.firstChild) {
        a.__shady = a.__shady || {};a.__shady.firstChild = Ra(a);a.__shady.lastChild = Sa(a);Zb(a);for (var b = a.__shady.childNodes = U(a), c = 0, d; c < b.length && (d = b[c]); c++) {
          d.__shady = d.__shady || {}, d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, $b(d);
        }
      }
    }function Xd(a) {
      var b = a && a.N;b && (b.ca.delete(a.ab), b.ca.size || (a.fb.__shady.X = null));
    }function Yd(a, b) {
      a.__shady = a.__shady || {};a.__shady.X || (a.__shady.X = new sa());a.__shady.X.ca.add(b);var c = a.__shady.X;return { ab: b, N: c, fb: a, takeRecords: function takeRecords() {
          return c.takeRecords();
        } };
    }function sa() {
      this.a = !1;this.addedNodes = [];this.removedNodes = [];this.ca = new Set();
    }function Q(a, b) {
      V[W] = a;V[W + 1] = b;W += 2;2 === W && (Ta ? Ta(X) : Zd());
    }function $d() {
      return function () {
        return process.Fb(X);
      };
    }function ae() {
      return "undefined" !== typeof Ua ? function () {
        Ua(X);
      } : Va();
    }function be() {
      var a = 0,
          b = new ac(X),
          c = document.createTextNode("");b.observe(c, { characterData: !0 });return function () {
        c.data = a = ++a % 2;
      };
    }function ce() {
      var a = new MessageChannel();a.port1.onmessage = X;return function () {
        return a.port2.postMessage(0);
      };
    }function Va() {
      var a = setTimeout;return function () {
        return a(X, 1);
      };
    }function X() {
      for (var a = 0; a < W; a += 2) {
        (0, V[a])(V[a + 1]), V[a] = void 0, V[a + 1] = void 0;
      }W = 0;
    }function de() {
      try {
        var a = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"vertx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));Ua = a.Hb || a.Gb;return ae();
      } catch (b) {
        return Va();
      }
    }function Wa(a, b) {
      var c = this,
          d = new this.constructor(Y);void 0 === d[ta] && bc(d);var e = c.o;if (e) {
        var f = arguments[e - 1];Q(function () {
          return cc(e, d, f, c.m);
        });
      } else Xa(c, d, a, b);return d;
    }function Ya(a) {
      if (a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && a.constructor === this) return a;var b = new this(Y);ea(b, a);return b;
    }function Y() {}function dc(a) {
      try {
        return a.then;
      } catch (b) {
        return fa.error = b, fa;
      }
    }function ee(a, b, c, d) {
      try {
        a.call(b, c, d);
      } catch (e) {
        return e;
      }
    }function fe(a, b, c) {
      Q(function (a) {
        var d = !1,
            f = ee(c, b, function (c) {
          d || (d = !0, b !== c ? ea(a, c) : J(a, c));
        }, function (b) {
          d || (d = !0, A(a, b));
        });!d && f && (d = !0, A(a, f));
      }, a);
    }function ge(a, b) {
      1 === b.o ? J(a, b.m) : 2 === b.o ? A(a, b.m) : Xa(b, void 0, function (b) {
        return ea(a, b);
      }, function (b) {
        return A(a, b);
      });
    }function ec(a, b, c) {
      b.constructor === a.constructor && c === Wa && b.constructor.resolve === Ya ? ge(a, b) : c === fa ? (A(a, fa.error), fa.error = null) : void 0 === c ? J(a, b) : "function" === typeof c ? fe(a, b, c) : J(a, b);
    }function ea(a, b) {
      if (a === b) A(a, new TypeError("You cannot resolve a promise with itself"));else {
        var c = typeof b === "undefined" ? "undefined" : _typeof(b);null === b || "object" !== c && "function" !== c ? J(a, b) : ec(a, b, dc(b));
      }
    }function he(a) {
      a.Ca && a.Ca(a.m);Za(a);
    }function J(a, b) {
      void 0 === a.o && (a.m = b, a.o = 1, 0 !== a.U.length && Q(Za, a));
    }function A(a, b) {
      void 0 === a.o && (a.o = 2, a.m = b, Q(he, a));
    }function Xa(a, b, c, d) {
      var e = a.U,
          f = e.length;a.Ca = null;e[f] = b;e[f + 1] = c;e[f + 2] = d;0 === f && a.o && Q(Za, a);
    }function Za(a) {
      var b = a.U,
          c = a.o;if (0 !== b.length) {
        for (var d, e, f = a.m, g = 0; g < b.length; g += 3) {
          d = b[g], e = b[g + c], d ? cc(c, d, e, f) : e(f);
        }a.U.length = 0;
      }
    }function fc() {
      this.error = null;
    }function cc(a, b, c, d) {
      var e = "function" === typeof c;if (e) {
        try {
          var f = c(d);
        } catch (L) {
          $a.error = L, f = $a;
        }if (f === $a) {
          var g = !0;var h = f.error;f.error = null;
        } else var m = !0;if (b === f) {
          A(b, new TypeError("A promises callback cannot return that same promise."));
          return;
        }
      } else f = d, m = !0;void 0 === b.o && (e && m ? ea(b, f) : g ? A(b, h) : 1 === a ? J(b, f) : 2 === a && A(b, f));
    }function ie(a, b) {
      try {
        b(function (b) {
          ea(a, b);
        }, function (b) {
          A(a, b);
        });
      } catch (c) {
        A(a, c);
      }
    }function bc(a) {
      a[ta] = gc++;a.o = void 0;a.m = void 0;a.U = [];
    }function ha(a, b) {
      this.eb = a;this.J = new a(Y);this.J[ta] || bc(this.J);hc(b) ? (this.aa = this.length = b.length, this.m = Array(this.length), 0 === this.length ? J(this.J, this.m) : (this.length = this.length || 0, this.cb(b), 0 === this.aa && J(this.J, this.m))) : A(this.J, Error("Array Methods must be provided an Array"));
    }
    function q(a) {
      this[ta] = gc++;this.m = this.o = void 0;this.U = [];if (Y !== a) {
        if ("function" !== typeof a) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if (this instanceof q) ie(this, a);else throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }
    }function Z(a) {
      return a.__shady && void 0 !== a.__shady.firstChild;
    }function H(a) {
      return "ShadyRoot" === a.Wa;
    }function ia(a) {
      a = a.getRootNode();
      if (H(a)) return a;
    }function ab(a, b) {
      if (a && b) for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length && (e = c[d]); d++) {
        var f = Object.getOwnPropertyDescriptor(b, e);f && Object.defineProperty(a, e, f);
      }
    }function bb(a, b) {
      for (var c = [], d = 1; d < arguments.length; ++d) {
        c[d - 1] = arguments[d];
      }for (d = 0; d < c.length; d++) {
        ab(a, c[d]);
      }return a;
    }function je(a, b) {
      for (var c in b) {
        a[c] = b[c];
      }
    }function ic(a) {
      cb.push(a);db.textContent = jc++;
    }function kc(a) {
      eb || (eb = !0, ic(ua));ja.push(a);
    }function ua() {
      eb = !1;for (var a = !!ja.length; ja.length;) {
        ja.shift()();
      }return a;
    }function ke(a, b) {
      var c = b.getRootNode();return a.map(function (a) {
        var b = c === a.target.getRootNode();if (b && a.addedNodes) {
          if (b = Array.from(a.addedNodes).filter(function (a) {
            return c === a.getRootNode();
          }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", { value: b, configurable: !0 }), a;
        } else if (b) return a;
      }).filter(function (a) {
        return a;
      });
    }function lc(a) {
      switch (a) {case "&":
          return "&amp;";case "<":
          return "&lt;";case ">":
          return "&gt;";case '"':
          return "&quot;";case "\xA0":
          return "&nbsp;";}
    }
    function mc(a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        b[a[c]] = !0;
      }return b;
    }function fb(a, b) {
      "template" === a.localName && (a = a.content);for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g; e < f && (g = d[e]); e++) {
        a: {
          var h = g;var m = a;var L = b;switch (h.nodeType) {case Node.ELEMENT_NODE:
              for (var k = h.localName, l = "<" + k, n = h.attributes, p = 0; m = n[p]; p++) {
                l += " " + m.name + '="' + m.value.replace(le, lc) + '"';
              }l += ">";h = me[k] ? l : l + fb(h, L) + "</" + k + ">";break a;case Node.TEXT_NODE:
              h = h.data;h = m && ne[m.localName] ? h : h.replace(oe, lc);break a;case Node.COMMENT_NODE:
              h = "\x3c!--" + h.data + "--\x3e";break a;default:
              throw window.console.error(h), Error("not implemented");}
        }c += h;
      }return c;
    }function aa(a) {
      B.currentNode = a;return B.parentNode();
    }function Ra(a) {
      B.currentNode = a;return B.firstChild();
    }function Sa(a) {
      B.currentNode = a;return B.lastChild();
    }function nc(a) {
      B.currentNode = a;return B.previousSibling();
    }function oc(a) {
      B.currentNode = a;return B.nextSibling();
    }function U(a) {
      var b = [];B.currentNode = a;for (a = B.firstChild(); a;) {
        b.push(a), a = B.nextSibling();
      }return b;
    }function pc(a) {
      C.currentNode = a;return C.parentNode();
    }function qc(a) {
      C.currentNode = a;return C.firstChild();
    }function rc(a) {
      C.currentNode = a;return C.lastChild();
    }function sc(a) {
      C.currentNode = a;return C.previousSibling();
    }function tc(a) {
      C.currentNode = a;return C.nextSibling();
    }function uc(a) {
      var b = [];C.currentNode = a;for (a = C.firstChild(); a;) {
        b.push(a), a = C.nextSibling();
      }return b;
    }function vc(a) {
      return fb(a, function (a) {
        return U(a);
      });
    }function wc(a) {
      switch (a.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
          a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);for (var b = "", c; c = a.nextNode();) {
            b += c.nodeValue;
          }return b;default:
          return a.nodeValue;}
    }function M(a, b, c) {
      for (var d in b) {
        var e = Object.getOwnPropertyDescriptor(a, d);e && e.configurable || !e && c ? Object.defineProperty(a, d, b[d]) : c && console.warn("Could not define", d, "on", a);
      }
    }function R(a) {
      M(a, xc);M(a, gb);M(a, hb);
    }function yc(a, b, c) {
      $b(a);c = c || null;a.__shady = a.__shady || {};b.__shady = b.__shady || {};c && (c.__shady = c.__shady || {});a.__shady.previousSibling = c ? c.__shady.previousSibling : b.lastChild;
      var d = a.__shady.previousSibling;d && d.__shady && (d.__shady.nextSibling = a);(d = a.__shady.nextSibling = c) && d.__shady && (d.__shady.previousSibling = a);a.__shady.parentNode = b;c ? c === b.__shady.firstChild && (b.__shady.firstChild = a) : (b.__shady.lastChild = a, b.__shady.firstChild || (b.__shady.firstChild = a));b.__shady.childNodes = null;
    }function ib(a, b, c) {
      if (b === a) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if (c) {
        var d = c.__shady && c.__shady.parentNode;if (void 0 !== d && d !== a || void 0 === d && aa(c) !== a) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
      }if (c === b) return b;b.parentNode && jb(b.parentNode, b);d = ia(a);var e;if (e = d) a: {
        if (!b.__noInsertionPoint) {
          var f;"slot" === b.localName ? f = [b] : b.querySelectorAll && (f = b.querySelectorAll("slot"));if (f && f.length) {
            e = f;break a;
          }
        }e = void 0;
      }f = e;d && ("slot" === a.localName || f) && d.M();if (Z(a)) {
        e = c;Zb(a);a.__shady = a.__shady || {};void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null);if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          for (var g = b.childNodes, h = 0; h < g.length; h++) {
            yc(g[h], a, e);
          }b.__shady = b.__shady || {};e = void 0 !== b.__shady.firstChild ? null : void 0;b.__shady.firstChild = b.__shady.lastChild = e;b.__shady.childNodes = e;
        } else yc(b, a, e);if (kb(a)) {
          a.__shady.root.M();var m = !0;
        } else a.__shady.root && (m = !0);
      }m || (m = H(a) ? a.host : a, c ? (c = zc(c), lb.call(m, b, c)) : Ac.call(m, b));Bc(a, b);f && d.$a(f);return b;
    }function jb(a, b) {
      if (b.parentNode !== a) throw Error("The node to be removed is not a child of this node: " + b);var c = ia(b);if (Z(a)) {
        b.__shady = b.__shady || {};a.__shady = a.__shady || {};b === a.__shady.firstChild && (a.__shady.firstChild = b.__shady.nextSibling);b === a.__shady.lastChild && (a.__shady.lastChild = b.__shady.previousSibling);var d = b.__shady.previousSibling;var e = b.__shady.nextSibling;d && (d.__shady = d.__shady || {}, d.__shady.nextSibling = e);e && (e.__shady = e.__shady || {}, e.__shady.previousSibling = d);b.__shady.parentNode = b.__shady.previousSibling = b.__shady.nextSibling = void 0;void 0 !== a.__shady.childNodes && (a.__shady.childNodes = null);if (kb(a)) {
          a.__shady.root.M();var f = !0;
        }
      }Cc(b);c && ((e = a && "slot" === a.localName) && (f = !0), ((d = c.gb(b)) || e) && c.M());f || (f = H(a) ? a.host : a, (!a.__shady.root && "slot" !== b.localName || f === aa(b)) && ka.call(f, b));Bc(a, null, b);return b;
    }function Cc(a) {
      if (a.__shady && void 0 !== a.__shady.ta) for (var b = a.childNodes, c = 0, d = b.length, e; c < d && (e = b[c]); c++) {
        Cc(e);
      }a.__shady && (a.__shady.ta = void 0);
    }function zc(a) {
      var b = a;a && "slot" === a.localName && (b = (b = a.__shady && a.__shady.V) && b.length ? b[0] : zc(a.nextSibling));return b;
    }function kb(a) {
      return (a = a && a.__shady && a.__shady.root) && a.Ba();
    }function Dc(a, b) {
      "slot" === b ? (a = a.parentNode, kb(a) && a.__shady.root.M()) : "slot" === a.localName && "name" === b && (b = ia(a)) && (b.ib(a), b.M());
    }function Bc(a, b, c) {
      if (a = a.__shady && a.__shady.X) b && a.addedNodes.push(b), c && a.removedNodes.push(c), a.vb();
    }function Ec(a) {
      if (a && a.nodeType) {
        a.__shady = a.__shady || {};var b = a.__shady.ta;void 0 === b && (H(a) ? b = a : b = (b = a.parentNode) ? Ec(b) : a, document.documentElement.contains(a) && (a.__shady.ta = b));return b;
      }
    }function va(a, b, c) {
      var d = [];Fc(a.childNodes, b, c, d);return d;
    }function Fc(a, b, c, d) {
      for (var e = 0, f = a.length, g; e < f && (g = a[e]); e++) {
        var h;if (h = g.nodeType === Node.ELEMENT_NODE) {
          h = g;var m = b,
              L = c,
              k = d,
              l = m(h);l && k.push(h);L && L(l) ? h = l : (Fc(h.childNodes, m, L, k), h = void 0);
        }if (h) break;
      }
    }function Gc(a) {
      a = a.getRootNode();H(a) && a.Ea();
    }function Hc(a, b, c) {
      wa || (wa = window.ShadyCSS && window.ShadyCSS.ScopingShim);wa && "class" === b ? wa.setElementClass(a, c) : (Ic.call(a, b, c), Dc(a, b));
    }function Jc(a, b) {
      if (a.ownerDocument !== document) return mb.call(document, a, b);var c = mb.call(document, a, !1);if (b) {
        a = a.childNodes;b = 0;for (var d; b < a.length; b++) {
          d = Jc(a[b], !0), c.appendChild(d);
        }
      }return c;
    }function nb(a, b) {
      var c = [],
          d = a;for (a = a === window ? window : a.getRootNode(); d;) {
        c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode;
      }c[c.length - 1] === document && c.push(window);return c;
    }function Kc(a, b) {
      if (!H) return a;a = nb(a, !0);for (var c = 0, d, e, f, g; c < b.length; c++) {
        if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (g = a.indexOf(f), e = f), !H(f) || -1 < g) return d;
      }
    }function ob(a) {
      function b(b, d) {
        b = new a(b, d);b.ja = d && !!d.composed;return b;
      }je(b, a);b.prototype = a.prototype;return b;
    }function Lc(a, b, c) {
      if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && a.target !== a.relatedTarget && (e.call(b, a), !a.Ua); d++) {}
    }function pe(a) {
      var b = a.composedPath();Object.defineProperty(a, "currentTarget", { get: function get() {
          return d;
        }, configurable: !0 });for (var c = b.length - 1; 0 <= c; c--) {
        var d = b[c];Lc(a, d, "capture");if (a.ka) return;
      }Object.defineProperty(a, "eventPhase", { get: function get() {
          return Event.AT_TARGET;
        } });var e;for (c = 0; c < b.length; c++) {
        d = b[c];var f = d.__shady && d.__shady.root;if (0 === c || f && f === e) if (Lc(a, d, "bubble"), d !== window && (e = d.getRootNode()), a.ka) break;
      }
    }function Mc(a, b, c, d, e, f) {
      for (var g = 0; g < a.length; g++) {
        var h = a[g],
            m = h.type,
            k = h.capture,
            l = h.once,
            n = h.passive;if (b === h.node && c === m && d === k && e === l && f === n) return g;
      }return -1;
    }function Nc(a, b, c) {
      if (b) {
        if ("object" === (typeof c === "undefined" ? "undefined" : _typeof(c))) {
          var d = !!c.capture;var e = !!c.once;var f = !!c.passive;
        } else d = !!c, f = e = !1;var g = c && c.la || this,
            h = b.$;if (h) {
          if (-1 < Mc(h, g, a, d, e, f)) return;
        } else b.$ = [];h = function h(d) {
          e && this.removeEventListener(a, b, c);d.__target || Oc(d);if (g !== this) {
            var f = Object.getOwnPropertyDescriptor(d, "currentTarget");Object.defineProperty(d, "currentTarget", { get: function get() {
                return g;
              }, configurable: !0 });
          }if (d.composed || -1 < d.composedPath().indexOf(g)) if (d.target === d.relatedTarget) d.eventPhase === Event.BUBBLING_PHASE && d.stopImmediatePropagation();else if (d.eventPhase === Event.CAPTURING_PHASE || d.bubbles || d.target === g) {
            var h = "object" === (typeof b === "undefined" ? "undefined" : _typeof(b)) && b.handleEvent ? b.handleEvent(d) : b.call(g, d);g !== this && (f ? (Object.defineProperty(d, "currentTarget", f), f = null) : delete d.currentTarget);return h;
          }
        };b.$.push({ node: this, type: a, capture: d, once: e, passive: f, yb: h });pb[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] }, this.__handlers[a][d ? "capture" : "bubble"].push(h)) : (this instanceof Window ? Pc : Qc).call(this, a, h, c);
      }
    }function Rc(a, b, c) {
      if (b) {
        if ("object" === (typeof c === "undefined" ? "undefined" : _typeof(c))) {
          var d = !!c.capture;var e = !!c.once;var f = !!c.passive;
        } else d = !!c, f = e = !1;var g = c && c.la || this,
            h = void 0;var m = null;try {
          m = b.$;
        } catch (L) {}m && (e = Mc(m, g, a, d, e, f), -1 < e && (h = m.splice(e, 1)[0].yb, m.length || (b.$ = void 0)));(this instanceof Window ? Sc : Tc).call(this, a, h || b, c);h && pb[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][d ? "capture" : "bubble"], h = a.indexOf(h), -1 < h && a.splice(h, 1));
      }
    }function qe() {
      for (var a in pb) {
        window.addEventListener(a, function (a) {
          a.__target || (Oc(a), pe(a));
        }, !0);
      }
    }function Oc(a) {
      a.__target = a.target;a.za = a.relatedTarget;if (D.W) {
        var b = Uc,
            c = Object.getPrototypeOf(a);if (!c.hasOwnProperty("__patchProto")) {
          var d = Object.create(c);d.Ab = c;ab(d, b);c.__patchProto = d;
        }a.__proto__ = c.__patchProto;
      } else ab(a, Uc);
    }function la(a, b) {
      return { index: a, Y: [], ba: b };
    }function re(a, b, c, d) {
      var e = 0,
          f = 0,
          g = 0,
          h = 0,
          m = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
        for (g = 0; g < m; g++) {
          if (a[g] !== c[g]) break a;
        }g = m;
      }if (b == a.length && d == c.length) {
        h = a.length;for (var k = c.length, l = 0; l < m - g && se(a[--h], c[--k]);) {
          l++;
        }h = l;
      }e += g;f += g;b -= h;d -= h;if (0 == b - e && 0 == d - f) return [];if (e == b) {
        for (b = la(e, 0); f < d;) {
          b.Y.push(c[f++]);
        }return [b];
      }if (f == d) return [la(e, b - e)];m = e;g = f;d = d - g + 1;h = b - m + 1;b = Array(d);for (k = 0; k < d; k++) {
        b[k] = Array(h), b[k][0] = k;
      }for (k = 0; k < h; k++) {
        b[0][k] = k;
      }for (k = 1; k < d; k++) {
        for (l = 1; l < h; l++) {
          if (a[m + l - 1] === c[g + k - 1]) b[k][l] = b[k - 1][l - 1];else {
            var n = b[k - 1][l] + 1,
                p = b[k][l - 1] + 1;b[k][l] = n < p ? n : p;
          }
        }
      }m = b.length - 1;g = b[0].length - 1;d = b[m][g];for (a = []; 0 < m || 0 < g;) {
        0 == m ? (a.push(2), g--) : 0 == g ? (a.push(3), m--) : (h = b[m - 1][g - 1], k = b[m - 1][g], l = b[m][g - 1], n = k < l ? k < h ? k : h : l < h ? l : h, n == h ? (h == d ? a.push(0) : (a.push(1), d = h), m--, g--) : n == k ? (a.push(3), m--, d = k) : (a.push(2), g--, d = l));
      }a.reverse();b = void 0;m = [];for (g = 0; g < a.length; g++) {
        switch (a[g]) {case 0:
            b && (m.push(b), b = void 0);e++;f++;break;case 1:
            b || (b = la(e, 0));b.ba++;e++;b.Y.push(c[f]);f++;break;case 2:
            b || (b = la(e, 0));b.ba++;e++;break;case 3:
            b || (b = la(e, 0)), b.Y.push(c[f]), f++;}
      }b && m.push(b);return m;
    }function se(a, b) {
      return a === b;
    }function Vc(a) {
      var b = [];do {
        b.unshift(a);
      } while (a = a.parentNode);return b;
    }function Wc(a) {
      Gc(a);return a.__shady && a.__shady.assignedSlot || null;
    }function N(a, b) {
      for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
        var e = c[d],
            f = Object.getOwnPropertyDescriptor(b, e);f.value ? a[e] = f.value : Object.defineProperty(a, e, f);
      }
    }function te() {
      var a = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;N(window.Node.prototype, ue);N(window.Window.prototype, ve);N(window.Text.prototype, we);N(window.DocumentFragment.prototype, qb);N(window.Element.prototype, Xc);N(window.Document.prototype, Yc);window.HTMLSlotElement && N(window.HTMLSlotElement.prototype, Zc);N(a.prototype, xe);D.W && (R(window.Node.prototype), R(window.Text.prototype), R(window.DocumentFragment.prototype), R(window.Element.prototype), R(a.prototype), R(window.Document.prototype), window.HTMLSlotElement && R(window.HTMLSlotElement.prototype));
    }function $c(a) {
      var b = ye.has(a);a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return !b && a;
    }function n(a) {
      var b = a.isConnected;if (void 0 !== b) return b;for (; a && !(a.__CE_isImportDocument || a instanceof Document);) {
        a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
      }return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
    }function rb(a, b) {
      for (; b && b !== a && !b.nextSibling;) {
        b = b.parentNode;
      }return b && b !== a ? b.nextSibling : null;
    }function P(a, b, c) {
      c = c ? c : new Set();for (var d = a; d;) {
        if (d.nodeType === Node.ELEMENT_NODE) {
          var e = d;b(e);var f = e.localName;if ("link" === f && "import" === e.getAttribute("rel")) {
            d = e.import;if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) {
              P(d, b, c);
            }d = rb(a, e);continue;
          } else if ("template" === f) {
            d = rb(a, e);continue;
          }if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) {
            P(e, b, c);
          }
        }d = d.firstChild ? d.firstChild : rb(a, d);
      }
    }function w(a, b, c) {
      a[b] = c;
    }function sb(a) {
      a = a.replace(G.mb, "").replace(G.port, "");var b = ad,
          c = a,
          d = new Ja();d.start = 0;d.end = c.length;for (var e = d, f = 0, g = c.length; f < g; f++) {
        if ("{" === c[f]) {
          e.rules || (e.rules = []);var h = e,
              m = h.rules[h.rules.length - 1] || null;e = new Ja();e.start = f + 1;e.parent = h;e.previous = m;h.rules.push(e);
        } else "}" === c[f] && (e.end = f + 1, e = e.parent || d);
      }return b(d, a);
    }function ad(a, b) {
      var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = ze(c), c = c.replace(G.Ka, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = K.MEDIA_RULE : c.match(G.rb) && (a.type = K.ia, a.keyframesName = a.selector.split(G.Ka).pop()) : a.type = 0 === c.indexOf("--") ? K.va : K.STYLE_RULE);if (c = a.rules) for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++) {
        ad(f, b);
      }return a;
    }function ze(a) {
      return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
        a = c;for (c = 6 - a.length; c--;) {
          a = "0" + a;
        }return "\\" + a;
      });
    }function bd(a, b, c) {
      c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
        var e = a.rules,
            f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
          f = 0;for (var g = e.length, h; f < g && (h = e[f]); f++) {
            d = bd(h, b, d);
          }
        } else b ? b = a.cssText : (b = a.cssText, b = b.replace(G.Fa, "").replace(G.Ja, ""), b = b.replace(G.sb, "").replace(G.xb, "")), (d = b.trim()) && (d = "  " + d + "\n");
      }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
    }function cd(a) {
      x = a && a.shimcssproperties ? !1 : y || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
    }function ba(a, b) {
      if (!a) return "";"string" === typeof a && (a = sb(a));b && ca(a, b);return bd(a, x);
    }function xa(a) {
      !a.__cssRules && a.textContent && (a.__cssRules = sb(a.textContent));return a.__cssRules || null;
    }function dd(a) {
      return !!a.parent && a.parent.type === K.ia;
    }function ca(a, b, c, d) {
      if (a) {
        var e = !1,
            f = a.type;if (d && f === K.MEDIA_RULE) {
          var g = a.selector.match(Ae);g && (window.matchMedia(g[1]).matches || (e = !0));
        }f === K.STYLE_RULE ? b(a) : c && f === K.ia ? c(a) : f === K.va && (e = !0);if ((a = a.rules) && !e) {
          e = 0;f = a.length;for (var h; e < f && (h = a[e]); e++) {
            ca(h, b, c, d);
          }
        }
      }
    }function tb(a, b, c, d) {
      var e = document.createElement("style");b && e.setAttribute("scope", b);e.textContent = a;ed(e, c, d);return e;
    }function ed(a, b, c) {
      b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);S ? a.compareDocumentPosition(S) === Node.DOCUMENT_POSITION_PRECEDING && (S = a) : S = a;
    }function fd(a, b) {
      var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");a: {
        var d = 0;var e = c + 3;for (var f = a.length; e < f; e++) {
          if ("(" === a[e]) d++;else if (")" === a[e] && 0 === --d) break a;
        }e = -1;
      }d = a.substring(c + 4, e);c = a.substring(0, c);a = fd(a.substring(e + 1), b);e = d.indexOf(",");return -1 === e ? b(c, d.trim(), "", a) : b(c, d.substring(0, e).trim(), d.substring(e + 1).trim(), a);
    }function ya(a, b) {
      y ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
    }function T(a) {
      var b = a.localName,
          c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);
      return { is: b, Z: c };
    }function gd(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
          var e = c.addedNodes[d];if (e.nodeType === Node.ELEMENT_NODE) {
            var f = e.getRootNode();var g = e;var h = [];g.classList ? h = Array.from(g.classList) : g instanceof window.SVGElement && g.hasAttribute("class") && (h = g.getAttribute("class").split(/\s+/));g = h;h = g.indexOf(v.c);(g = -1 < h ? g[h + 1] : "") && f === e.ownerDocument ? v.a(e, g, !0) : f.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (f = f.host) && (f = T(f).is, g !== f && (g && v.a(e, g, !0), v.a(e, f)));
          }
        }
      }
    }function Be(a) {
      if (a = za[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
    }function hd(a) {
      return a._applyShimCurrentVersion === a._applyShimNextVersion;
    }function Ce(a) {
      a._applyShimValidatingVersion = a._applyShimNextVersion;a.b || (a.b = !0, De.then(function () {
        a._applyShimCurrentVersion = a._applyShimNextVersion;a.b = !1;
      }));
    }function Jb(a) {
      requestAnimationFrame(function () {
        id ? id(a) : (ub || (ub = new Promise(function (a) {
          vb = a;
        }), "complete" === document.readyState ? vb() : document.addEventListener("readystatechange", function () {
          "complete" === document.readyState && vb();
        })), ub.then(function () {
          a && a();
        }));
      });
    }(function () {
      if (!function () {
        var a = document.createEvent("Event");a.initEvent("foo", !0, !0);a.preventDefault();return a.defaultPrevented;
      }()) {
        var a = Event.prototype.preventDefault;Event.prototype.preventDefault = function () {
          this.cancelable && (a.call(this), Object.defineProperty(this, "defaultPrevented", { get: function get() {
              return !0;
            }, configurable: !0 }));
        };
      }var b = /Trident/.test(navigator.userAgent);if (!window.CustomEvent || b && "function" !== typeof window.CustomEvent) window.CustomEvent = function (a, b) {
        b = b || {};var c = document.createEvent("CustomEvent");c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);return c;
      }, window.CustomEvent.prototype = window.Event.prototype;if (!window.Event || b && "function" !== typeof window.Event) {
        var c = window.Event;window.Event = function (a, b) {
          b = b || {};var c = document.createEvent("Event");
          c.initEvent(a, !!b.bubbles, !!b.cancelable);return c;
        };if (c) for (var d in c) {
          window.Event[d] = c[d];
        }window.Event.prototype = c.prototype;
      }if (!window.MouseEvent || b && "function" !== typeof window.MouseEvent) {
        b = window.MouseEvent;window.MouseEvent = function (a, b) {
          b = b || {};var c = document.createEvent("MouseEvent");c.initMouseEvent(a, !!b.bubbles, !!b.cancelable, b.view || window, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget);return c;
        };if (b) for (d in b) {
          window.MouseEvent[d] = b[d];
        }window.MouseEvent.prototype = b.prototype;
      }Array.from || (Array.from = function (a) {
        return [].slice.call(a);
      });Object.assign || (Object.assign = function (a, b) {
        for (var c = [].slice.call(arguments, 1), d = 0, e; d < c.length; d++) {
          if (e = c[d]) for (var f = a, k = e, l = Object.getOwnPropertyNames(k), n = 0; n < l.length; n++) {
            e = l[n], f[e] = k[e];
          }
        }return a;
      });
    })(window.WebComponents);(function () {
      function a() {}var b = "undefined" === typeof HTMLTemplateElement;/Trident/.test(navigator.userAgent) && function () {
        var a = Document.prototype.importNode;Document.prototype.importNode = function () {
          var b = a.apply(this, arguments);if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            var c = this.createDocumentFragment();c.appendChild(b);return c;
          }return b;
        };
      }();var c = Node.prototype.cloneNode,
          d = Document.prototype.createElement,
          e = Document.prototype.importNode,
          f = function () {
        if (!b) {
          var a = document.createElement("template"),
              c = document.createElement("template");c.content.appendChild(document.createElement("div"));a.content.appendChild(c);a = a.cloneNode(!0);return 0 === a.content.childNodes.length || 0 === a.content.firstChild.content.childNodes.length || !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment);
        }
      }();if (b) {
        var g = function g(a) {
          switch (a) {case "&":
              return "&amp;";case "<":
              return "&lt;";case ">":
              return "&gt;";case "\xA0":
              return "&nbsp;";}
        },
            h = function h(b) {
          Object.defineProperty(b, "innerHTML", { get: function get() {
              for (var a = "", b = this.content.firstChild; b; b = b.nextSibling) {
                a += b.outerHTML || b.data.replace(r, g);
              }return a;
            }, set: function set(b) {
              m.body.innerHTML = b;for (a.b(m); this.content.firstChild;) {
                this.content.removeChild(this.content.firstChild);
              }for (; m.body.firstChild;) {
                this.content.appendChild(m.body.firstChild);
              }
            }, configurable: !0 });
        },
            m = document.implementation.createHTMLDocument("template"),
            k = !0,
            l = document.createElement("style");l.textContent = "template{display:none;}";var n = document.head;n.insertBefore(l, n.firstElementChild);a.prototype = Object.create(HTMLElement.prototype);var p = !document.createElement("div").hasOwnProperty("innerHTML");a.O = function (b) {
          if (!b.content) {
            b.content = m.createDocumentFragment();for (var c; c = b.firstChild;) {
              b.content.appendChild(c);
            }if (p) b.__proto__ = a.prototype;else if (b.cloneNode = function (b) {
              return a.a(this, b);
            }, k) try {
              h(b);
            } catch (cf) {
              k = !1;
            }a.b(b.content);
          }
        };h(a.prototype);a.b = function (b) {
          b = b.querySelectorAll("template");for (var c = 0, d = b.length, e; c < d && (e = b[c]); c++) {
            a.O(e);
          }
        };document.addEventListener("DOMContentLoaded", function () {
          a.b(document);
        });Document.prototype.createElement = function () {
          var b = d.apply(this, arguments);"template" === b.localName && a.O(b);return b;
        };var r = /[&\u00A0<>]/g;
      }if (b || f) a.a = function (a, b) {
        var d = c.call(a, !1);this.O && this.O(d);b && (d.content.appendChild(c.call(a.content, !0)), this.ra(d.content, a.content));return d;
      }, a.prototype.cloneNode = function (b) {
        return a.a(this, b);
      }, a.ra = function (a, b) {
        if (b.querySelectorAll) {
          b = b.querySelectorAll("template");a = a.querySelectorAll("template");for (var c = 0, d = a.length, e, f; c < d; c++) {
            f = b[c], e = a[c], this.O && this.O(f), e.parentNode.replaceChild(f.cloneNode(!0), e);
          }
        }
      }, Node.prototype.cloneNode = function (b) {
        if (this instanceof DocumentFragment) {
          if (b) var d = this.ownerDocument.importNode(this, !0);else return this.ownerDocument.createDocumentFragment();
        } else d = c.call(this, b);b && a.ra(d, this);return d;
      }, Document.prototype.importNode = function (b, c) {
        if ("template" === b.localName) return a.a(b, c);var d = e.call(this, b, c);c && a.ra(d, b);return d;
      }, f && (window.HTMLTemplateElement.prototype.cloneNode = function (b) {
        return a.a(this, b);
      });b && (window.HTMLTemplateElement = a);
    })();var wb;Array.isArray ? wb = Array.isArray : wb = function wb(a) {
      return "[object Array]" === Object.prototype.toString.call(a);
    };var hc = wb,
        W = 0,
        Ua,
        Ta,
        jd = "undefined" !== typeof window ? window : void 0,
        kd = jd || {},
        ac = kd.MutationObserver || kd.WebKitMutationObserver,
        Ee = "undefined" !== typeof Uint8ClampedArray && "undefined" !== typeof importScripts && "undefined" !== typeof MessageChannel,
        V = Array(1E3);var Zd = "undefined" === typeof self && "undefined" !== typeof process && "[object process]" === {}.toString.call(process) ? $d() : ac ? be() : Ee ? ce() : jd || "function" !== "function" ? Va() : de();var ta = Math.random().toString(36).substring(16),
        fa = new fc(),
        $a = new fc(),
        gc = 0;ha.prototype.cb = function (a) {
      for (var b = 0; void 0 === this.o && b < a.length; b++) {
        this.bb(a[b], b);
      }
    };ha.prototype.bb = function (a, b) {
      var c = this.eb,
          d = c.resolve;d === Ya ? (d = dc(a), d === Wa && void 0 !== a.o ? this.oa(a.o, b, a.m) : "function" !== typeof d ? (this.aa--, this.m[b] = a) : c === q ? (c = new c(Y), ec(c, a, d), this.pa(c, b)) : this.pa(new c(function (b) {
        return b(a);
      }), b)) : this.pa(d(a), b);
    };ha.prototype.oa = function (a, b, c) {
      var d = this.J;void 0 === d.o && (this.aa--, 2 === a ? A(d, c) : this.m[b] = c);0 === this.aa && J(d, this.m);
    };ha.prototype.pa = function (a, b) {
      var c = this;Xa(a, void 0, function (a) {
        return c.oa(1, b, a);
      }, function (a) {
        return c.oa(2, b, a);
      });
    };q.g = function (a) {
      return new ha(this, a).J;
    };q.h = function (a) {
      var b = this;return hc(a) ? new b(function (c, d) {
        for (var e = a.length, f = 0; f < e; f++) {
          b.resolve(a[f]).then(c, d);
        }
      }) : new b(function (a, b) {
        return b(new TypeError("You must pass an array to race."));
      });
    };q.resolve = Ya;q.i = function (a) {
      var b = new this(Y);A(b, a);return b;
    };q.f = function (a) {
      Ta = a;
    };q.c = function (a) {
      Q = a;
    };q.b = Q;q.prototype = { constructor: q, then: Wa };q.a = function () {
      if ("undefined" !== typeof global) var a = global;else if ("undefined" !== typeof self) a = self;else try {
        a = Function("return this")();
      } catch (d) {
        throw Error("polyfill failed because global object is unavailable in this environment");
      }var b = a.Promise;if (b) {
        var c = null;try {
          c = Object.prototype.toString.call(b.resolve());
        } catch (d) {}if ("[object Promise]" === c && !b.Db) return;
      }a.Promise = q;
    };q.Promise = q;q.a();(function (a) {
      function b(a, b) {
        if ("function" === typeof window.CustomEvent) return new CustomEvent(a, b);var c = document.createEvent("CustomEvent");c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);return c;
      }function c(a) {
        if (n) return a.ownerDocument !== document ? a.ownerDocument : null;var b = a.__importDoc;if (!b && a.parentNode) {
          b = a.parentNode;
          if ("function" === typeof b.closest) b = b.closest("link[rel=import]");else for (; !h(b) && (b = b.parentNode);) {}a.__importDoc = b;
        }return b;
      }function d(a) {
        var b = document.querySelectorAll("link[rel=import]:not(import-dependency)"),
            c = b.length;c ? l(b, function (b) {
          return g(b, function () {
            0 === --c && a();
          });
        }) : a();
      }function e(a) {
        function b() {
          "loading" !== document.readyState && document.body && (document.removeEventListener("readystatechange", b), a());
        }document.addEventListener("readystatechange", b);b();
      }function f(a) {
        e(function () {
          return d(function () {
            return a && a();
          });
        });
      }function g(a, b) {
        if (a.__loaded) b && b();else if ("script" === a.localName && !a.src || "style" === a.localName && !a.firstChild) a.__loaded = !0, b && b();else {
          var c = function c(d) {
            a.removeEventListener(d.type, c);a.__loaded = !0;b && b();
          };a.addEventListener("load", c);x && "style" === a.localName || a.addEventListener("error", c);
        }
      }function h(a) {
        return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel;
      }function k() {
        var a = this;this.a = {};this.b = 0;this.f = new MutationObserver(function (b) {
          return a.l(b);
        });this.f.observe(document.head, { childList: !0, subtree: !0 });this.c(document);
      }function l(a, b, c) {
        var d = a ? a.length : 0,
            e = c ? -1 : 1;for (c = c ? d - 1 : 0; c < d && 0 <= c; c += e) {
          b(a[c], c);
        }
      }var n = "import" in document.createElement("link"),
          p = null;!1 === "currentScript" in document && Object.defineProperty(document, "currentScript", { get: function get() {
          return p || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null);
        }, configurable: !0 });var r = /(^\/)|(^#)|(^[\w-\d]*:)/,
          t = /(url\()([^)]*)(\))/g,
          v = /(@import[\s]+(?!url\())([^;]*)(;)/g,
          y = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,
          q = { nb: function nb(a, b) {
          a.href && a.setAttribute("href", q.ua(a.getAttribute("href"), b));a.src && a.setAttribute("src", q.ua(a.getAttribute("src"), b));if ("style" === a.localName) {
            var c = q.Ma(a.textContent, b, t);a.textContent = q.Ma(c, b, v);
          }
        }, Ma: function Ma(a, b, c) {
          return a.replace(c, function (a, c, d, e) {
            a = d.replace(/["']/g, "");b && (a = q.Na(a, b));return c + "'" + a + "'" + e;
          });
        }, ua: function ua(a, b) {
          return a && r.test(a) ? a : q.Na(a, b);
        }, Na: function Na(a, b) {
          if (void 0 === q.ma) {
            q.ma = !1;try {
              var c = new URL("b", "http://a");c.pathname = "c%20d";q.ma = "http://a/c%20d" === c.href;
            } catch (df) {}
          }if (q.ma) return new URL(a, b).href;c = q.Za;c || (c = document.implementation.createHTMLDocument("temp"), q.Za = c, c.xa = c.createElement("base"), c.head.appendChild(c.xa), c.wa = c.createElement("a"));c.xa.href = b;c.wa.href = a;return c.wa.href || a;
        } },
          z = { async: !0, load: function load(a, b, c) {
          if (a) {
            if (a.match(/^data:/)) {
              a = a.split(",");var d = a[1];d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d);b(d);
            } else {
              var e = new XMLHttpRequest();e.open("GET", a, z.async);e.onload = function () {
                var a = e.responseURL || e.getResponseHeader("Location");
                a && 0 === a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a);var d = e.response || e.responseText;304 === e.status || 0 === e.status || 200 <= e.status && 300 > e.status ? b(d, a) : c(d);
              };e.send();
            }
          } else c("error: href must be specified");
        } },
          x = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);k.prototype.c = function (a) {
        var b = this;a = a.querySelectorAll("link[rel=import]");l(a, function (a) {
          return b.h(a);
        });
      };k.prototype.h = function (a) {
        var b = this,
            c = a.href;if (void 0 !== this.a[c]) {
          var d = this.a[c];d && d.__loaded && (a.import = d, this.g(a));
        } else this.b++, this.a[c] = "pending", z.load(c, function (a, d) {
          a = b.s(a, d || c);b.a[c] = a;b.b--;b.c(a);b.i();
        }, function () {
          b.a[c] = null;b.b--;b.i();
        });
      };k.prototype.s = function (a, b) {
        if (!a) return document.createDocumentFragment();x && (a = a.replace(y, function (a, b, c) {
          return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a;
        }));var c = document.createElement("template");c.innerHTML = a;if (c.content) a = c.content;else for (a = document.createDocumentFragment(); c.firstChild;) {
          a.appendChild(c.firstChild);
        }if (c = a.querySelector("base")) b = q.ua(c.getAttribute("href"), b), c.removeAttribute("href");c = a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]');var d = 0;l(c, function (a) {
          g(a);q.nb(a, b);a.setAttribute("import-dependency", "");"script" === a.localName && !a.src && a.textContent && (a.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(a.textContent + ("\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n"))), a.textContent = "", d++);
        });return a;
      };k.prototype.i = function () {
        var a = this;if (!this.b) {
          this.f.disconnect();this.flatten(document);var b = !1,
              c = !1,
              d = function d() {
            c && b && (a.c(document), a.b || (a.f.observe(document.head, { childList: !0, subtree: !0 }), a.j()));
          };this.v(function () {
            c = !0;d();
          });this.u(function () {
            b = !0;d();
          });
        }
      };k.prototype.flatten = function (a) {
        var b = this;a = a.querySelectorAll("link[rel=import]");l(a, function (a) {
          var c = b.a[a.href];(a.import = c) && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (b.a[a.href] = a, a.readyState = "loading", a.import = a, b.flatten(c), a.appendChild(c));
        });
      };k.prototype.u = function (a) {
        function b(e) {
          if (e < d) {
            var f = c[e],
                h = document.createElement("script");f.removeAttribute("import-dependency");l(f.attributes, function (a) {
              return h.setAttribute(a.name, a.value);
            });p = h;f.parentNode.replaceChild(h, f);g(h, function () {
              p = null;b(e + 1);
            });
          } else a();
        }var c = document.querySelectorAll("script[import-dependency]"),
            d = c.length;b(0);
      };k.prototype.v = function (a) {
        var b = document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),
            d = b.length;if (d) {
          var e = x && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]");l(b, function (b) {
            g(b, function () {
              b.removeAttribute("import-dependency");0 === --d && a();
            });if (e && b.parentNode !== document.head) {
              var f = document.createElement(b.localName);f.__appliedElement = b;f.setAttribute("type", "import-placeholder");b.parentNode.insertBefore(f, b.nextSibling);for (f = c(b); f && c(f);) {
                f = c(f);
              }f.parentNode !== document.head && (f = null);document.head.insertBefore(b, f);b.removeAttribute("type");
            }
          });
        } else a();
      };k.prototype.j = function () {
        var a = this,
            b = document.querySelectorAll("link[rel=import]");l(b, function (b) {
          return a.g(b);
        }, !0);
      };k.prototype.g = function (a) {
        a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState = "complete"), a.dispatchEvent(b(a.import ? "load" : "error", { bubbles: !1, cancelable: !1, detail: void 0 })));
      };k.prototype.l = function (a) {
        var b = this;l(a, function (a) {
          return l(a.addedNodes, function (a) {
            a && a.nodeType === Node.ELEMENT_NODE && (h(a) ? b.h(a) : b.c(a));
          });
        });
      };if (n) {
        var w = document.querySelectorAll("link[rel=import]");l(w, function (a) {
          a.import && "loading" === a.import.readyState || (a.__loaded = !0);
        });w = function w(a) {
          a = a.target;h(a) && (a.__loaded = !0);
        };document.addEventListener("load", w, !0);document.addEventListener("error", w, !0);
      } else {
        var u = Object.getOwnPropertyDescriptor(Node.prototype, "baseURI");Object.defineProperty((!u || u.configurable ? Node : Element).prototype, "baseURI", { get: function get() {
            var a = h(this) ? this : c(this);return a ? a.href : u && u.get ? u.get.call(this) : (document.querySelector("base") || window.location).href;
          }, configurable: !0, enumerable: !0 });e(function () {
          return new k();
        });
      }f(function () {
        return document.dispatchEvent(b("HTMLImportsLoaded", { cancelable: !0, bubbles: !0, detail: void 0 }));
      });a.useNative = n;a.whenReady = f;a.importForElement = c;
    })(window.HTMLImports = window.HTMLImports || {});window.WebComponents = window.WebComponents || { flags: {} };var ld = document.querySelector('script[src*="webcomponents-lite.js"]'),
        Fe = /wc-(.+)/,
        E = {};if (!E.noOpts) {
      location.search.slice(1).split("&").forEach(function (a) {
        a = a.split("=");var b;a[0] && (b = a[0].match(Fe)) && (E[b[1]] = a[1] || !0);
      });if (ld) for (var md = 0, Aa; Aa = ld.attributes[md]; md++) {
        "src" !== Aa.name && (E[Aa.name] = Aa.value || !0);
      }if (E.log && E.log.split) {
        var Ge = E.log.split(",");E.log = {};Ge.forEach(function (a) {
          E.log[a] = !0;
        });
      } else E.log = {};
    }window.WebComponents.flags = E;var nd = E.shadydom;nd && (window.ShadyDOM = window.ShadyDOM || {}, window.ShadyDOM.force = nd);var od = E.register || E.ce;od && window.customElements && (window.customElements.forcePolyfill = od);var D = window.ShadyDOM || {};D.ob = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var xb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");D.W = !!(xb && xb.configurable && xb.get);D.Ia = D.force || !D.ob;var da = Element.prototype,
        pd = da.matches || da.matchesSelector || da.mozMatchesSelector || da.msMatchesSelector || da.oMatchesSelector || da.webkitMatchesSelector,
        db = document.createTextNode(""),
        jc = 0,
        cb = [];new MutationObserver(function () {
      for (; cb.length;) {
        try {
          cb.shift()();
        } catch (a) {
          throw db.textContent = jc++, a;
        }
      }
    }).observe(db, { characterData: !0 });
    var ja = [],
        eb;ua.list = ja;sa.prototype.vb = function () {
      var a = this;this.a || (this.a = !0, ic(function () {
        a.b();
      }));
    };sa.prototype.b = function () {
      if (this.a) {
        this.a = !1;var a = this.takeRecords();a.length && this.ca.forEach(function (b) {
          b(a);
        });
      }
    };sa.prototype.takeRecords = function () {
      if (this.addedNodes.length || this.removedNodes.length) {
        var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];this.addedNodes = [];this.removedNodes = [];return a;
      }return [];
    };var Ac = Element.prototype.appendChild,
        lb = Element.prototype.insertBefore,
        ka = Element.prototype.removeChild,
        Ic = Element.prototype.setAttribute,
        qd = Element.prototype.removeAttribute,
        yb = Element.prototype.cloneNode,
        mb = Document.prototype.importNode,
        Qc = Element.prototype.addEventListener,
        Tc = Element.prototype.removeEventListener,
        Pc = Window.prototype.addEventListener,
        Sc = Window.prototype.removeEventListener,
        zb = Element.prototype.dispatchEvent,
        He = Object.freeze({ appendChild: Ac, insertBefore: lb, removeChild: ka, setAttribute: Ic, removeAttribute: qd, cloneNode: yb, importNode: mb, addEventListener: Qc,
      removeEventListener: Tc, Ib: Pc, Jb: Sc, dispatchEvent: zb, querySelector: Element.prototype.querySelector, querySelectorAll: Element.prototype.querySelectorAll }),
        le = /[&\u00A0"]/g,
        oe = /[&\u00A0<>]/g,
        me = mc("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
        ne = mc("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
        B = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
        C = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
        Ie = Object.freeze({ parentNode: aa, firstChild: Ra, lastChild: Sa, previousSibling: nc, nextSibling: oc, childNodes: U, parentElement: pc, firstElementChild: qc, lastElementChild: rc, previousElementSibling: sc, nextElementSibling: tc, children: uc, innerHTML: vc, textContent: wc }),
        Ab = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"),
        Ba = document.implementation.createHTMLDocument("inert").createElement("div"),
        Bb = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"),
        xc = { parentElement: { get: function get() {
          var a = this.__shady && this.__shady.parentNode;a && a.nodeType !== Node.ELEMENT_NODE && (a = null);return void 0 !== a ? a : pc(this);
        }, configurable: !0 }, parentNode: { get: function get() {
          var a = this.__shady && this.__shady.parentNode;return void 0 !== a ? a : aa(this);
        }, configurable: !0 }, nextSibling: { get: function get() {
          var a = this.__shady && this.__shady.nextSibling;return void 0 !== a ? a : oc(this);
        }, configurable: !0 }, previousSibling: { get: function get() {
          var a = this.__shady && this.__shady.previousSibling;
          return void 0 !== a ? a : nc(this);
        }, configurable: !0 }, className: { get: function get() {
          return this.getAttribute("class") || "";
        }, set: function set(a) {
          this.setAttribute("class", a);
        }, configurable: !0 }, nextElementSibling: { get: function get() {
          if (this.__shady && void 0 !== this.__shady.nextSibling) {
            for (var a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) {
              a = a.nextSibling;
            }return a;
          }return tc(this);
        }, configurable: !0 }, previousElementSibling: { get: function get() {
          if (this.__shady && void 0 !== this.__shady.previousSibling) {
            for (var a = this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) {
              a = a.previousSibling;
            }return a;
          }return sc(this);
        }, configurable: !0 } },
        gb = { childNodes: { get: function get() {
          if (Z(this)) {
            if (!this.__shady.childNodes) {
              this.__shady.childNodes = [];for (var a = this.firstChild; a; a = a.nextSibling) {
                this.__shady.childNodes.push(a);
              }
            }var b = this.__shady.childNodes;
          } else b = U(this);b.item = function (a) {
            return b[a];
          };return b;
        }, configurable: !0 }, childElementCount: { get: function get() {
          return this.children.length;
        }, configurable: !0 }, firstChild: { get: function get() {
          var a = this.__shady && this.__shady.firstChild;return void 0 !== a ? a : Ra(this);
        }, configurable: !0 }, lastChild: { get: function get() {
          var a = this.__shady && this.__shady.lastChild;return void 0 !== a ? a : Sa(this);
        }, configurable: !0 }, textContent: { get: function get() {
          if (Z(this)) {
            for (var a = [], b = 0, c = this.childNodes, d; d = c[b]; b++) {
              d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);
            }return a.join("");
          }return wc(this);
        }, set: function set(a) {
          switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              for (; this.firstChild;) {
                this.removeChild(this.firstChild);
              }(0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.appendChild(document.createTextNode(a));break;default:
              this.nodeValue = a;}
        }, configurable: !0 }, firstElementChild: { get: function get() {
          if (this.__shady && void 0 !== this.__shady.firstChild) {
            for (var a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) {
              a = a.nextSibling;
            }return a;
          }return qc(this);
        }, configurable: !0 }, lastElementChild: { get: function get() {
          if (this.__shady && void 0 !== this.__shady.lastChild) {
            for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) {
              a = a.previousSibling;
            }return a;
          }return rc(this);
        }, configurable: !0 }, children: { get: function get() {
          var a;Z(this) ? a = Array.prototype.filter.call(this.childNodes, function (a) {
            return a.nodeType === Node.ELEMENT_NODE;
          }) : a = uc(this);a.item = function (b) {
            return a[b];
          };return a;
        }, configurable: !0 }, innerHTML: { get: function get() {
          var a = "template" === this.localName ? this.content : this;return Z(this) ? fb(a) : vc(a);
        }, set: function set(a) {
          for (var b = "template" === this.localName ? this.content : this; b.firstChild;) {
            b.removeChild(b.firstChild);
          }for (Ab && Ab.set ? Ab.set.call(Ba, a) : Ba.innerHTML = a; Ba.firstChild;) {
            b.appendChild(Ba.firstChild);
          }
        }, configurable: !0 } },
        rd = { shadowRoot: { get: function get() {
          return this.__shady && this.__shady.tb || null;
        }, configurable: !0 } },
        hb = { activeElement: { get: function get() {
          var a = Bb && Bb.get ? Bb.get.call(document) : D.W ? void 0 : document.activeElement;if (a && a.nodeType) {
            var b = !!H(this);if (this === document || b && this.host !== a && this.host.contains(a)) {
              for (b = ia(a); b && b !== this;) {
                a = b.host, b = ia(a);
              }a = this === document ? b ? null : a : b === this ? a : null;
            } else a = null;
          } else a = null;return a;
        }, set: function set() {},
        configurable: !0 } },
        $b = D.W ? function () {} : function (a) {
      a.__shady && a.__shady.Xa || (a.__shady = a.__shady || {}, a.__shady.Xa = !0, M(a, xc, !0));
    },
        Zb = D.W ? function () {} : function (a) {
      a.__shady && a.__shady.Va || (a.__shady = a.__shady || {}, a.__shady.Va = !0, M(a, gb, !0), M(a, rd, !0));
    },
        wa = null,
        Je = { blur: !0, focus: !0, focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0,
      compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0, touchcancel: !0, pointerover: !0, pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0, dragstart: !0, drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0 },
        Uc = { get composed() {
        !1 !== this.isTrusted && void 0 === this.ja && (this.ja = Je[this.type]);return this.ja || !1;
      }, composedPath: function composedPath() {
        this.ya || (this.ya = nb(this.__target, this.composed));return this.ya;
      }, get target() {
        return Kc(this.currentTarget, this.composedPath());
      }, get relatedTarget() {
        if (!this.za) return null;this.Aa || (this.Aa = nb(this.za, !0));return Kc(this.currentTarget, this.Aa);
      }, stopPropagation: function stopPropagation() {
        Event.prototype.stopPropagation.call(this);this.ka = !0;
      }, stopImmediatePropagation: function stopImmediatePropagation() {
        Event.prototype.stopImmediatePropagation.call(this);this.ka = this.Ua = !0;
      } },
        pb = { focus: !0, blur: !0 },
        Ke = ob(window.Event),
        Le = ob(window.CustomEvent),
        Me = ob(window.MouseEvent),
        Yb = {};l.prototype = Object.create(DocumentFragment.prototype);l.prototype.D = function (a, b) {
      this.Wa = "ShadyRoot";ra(a);ra(this);this.host = a;this.L = b && b.mode;a.__shady = a.__shady || {};a.__shady.root = this;a.__shady.tb = "closed" !== this.L ? this : null;this.T = !1;this.b = [];this.a = null;b = U(a);for (var c = 0, d = b.length; c < d; c++) {
        ka.call(a, b[c]);
      }
    };l.prototype.M = function () {
      var a = this;this.T || (this.T = !0, kc(function () {
        return a.Ea();
      }));
    };l.prototype.C = function () {
      for (var a = this, b = this; b;) {
        b.T && (a = b), b = b.hb();
      }return a;
    };l.prototype.hb = function () {
      var a = this.host.getRootNode();if (H(a)) for (var b = this.host.childNodes, c = 0, d; c < b.length; c++) {
        if (d = b[c], this.h(d)) return a;
      }
    };l.prototype.Ea = function () {
      this.T && this.C()._renderRoot();
    };l.prototype._renderRoot = function () {
      this.T = !1;this.v();this.s();
    };l.prototype.v = function () {
      for (var a = 0, b; a < this.b.length; a++) {
        b = this.b[a], this.l(b);
      }for (b = this.host.firstChild; b; b = b.nextSibling) {
        this.f(b);
      }for (a = 0; a < this.b.length; a++) {
        b = this.b[a];if (!b.__shady.assignedNodes.length) for (var c = b.firstChild; c; c = c.nextSibling) {
          this.f(c, b);
        }c = b.parentNode;(c = c.__shady && c.__shady.root) && c.Ba() && c._renderRoot();this.c(b.__shady.V, b.__shady.assignedNodes);if (c = b.__shady.Da) {
          for (var d = 0; d < c.length; d++) {
            c[d].__shady.na = null;
          }b.__shady.Da = null;c.length > b.__shady.assignedNodes.length && (b.__shady.qa = !0);
        }b.__shady.qa && (b.__shady.qa = !1, this.g(b));
      }
    };l.prototype.f = function (a, b) {
      a.__shady = a.__shady || {};var c = a.__shady.na;a.__shady.na = null;b || (b = (b = this.a[a.slot || "__catchall"]) && b[0]);b ? (b.__shady.assignedNodes.push(a), a.__shady.assignedSlot = b) : a.__shady.assignedSlot = void 0;c !== a.__shady.assignedSlot && a.__shady.assignedSlot && (a.__shady.assignedSlot.__shady.qa = !0);
    };l.prototype.l = function (a) {
      var b = a.__shady.assignedNodes;a.__shady.assignedNodes = [];a.__shady.V = [];if (a.__shady.Da = b) for (var c = 0; c < b.length; c++) {
        var d = b[c];d.__shady.na = d.__shady.assignedSlot;d.__shady.assignedSlot === a && (d.__shady.assignedSlot = null);
      }
    };l.prototype.c = function (a, b) {
      for (var c = 0, d; c < b.length && (d = b[c]); c++) {
        "slot" == d.localName ? this.c(a, d.__shady.assignedNodes) : a.push(b[c]);
      }
    };
    l.prototype.g = function (a) {
      zb.call(a, new Event("slotchange"));a.__shady.assignedSlot && this.g(a.__shady.assignedSlot);
    };l.prototype.s = function () {
      for (var a = this.b, b = [], c = 0; c < a.length; c++) {
        var d = a[c].parentNode;d.__shady && d.__shady.root || !(0 > b.indexOf(d)) || b.push(d);
      }for (a = 0; a < b.length; a++) {
        c = b[a], this.I(c === this ? this.host : c, this.u(c));
      }
    };l.prototype.u = function (a) {
      var b = [];a = a.childNodes;for (var c = 0; c < a.length; c++) {
        var d = a[c];if (this.h(d)) {
          d = d.__shady.V;for (var e = 0; e < d.length; e++) {
            b.push(d[e]);
          }
        } else b.push(d);
      }return b;
    };
    l.prototype.h = function (a) {
      return "slot" == a.localName;
    };l.prototype.I = function (a, b) {
      for (var c = U(a), d = re(b, b.length, c, c.length), e = 0, f = 0, g; e < d.length && (g = d[e]); e++) {
        for (var h = 0, k; h < g.Y.length && (k = g.Y[h]); h++) {
          aa(k) === a && ka.call(a, k), c.splice(g.index + f, 1);
        }f -= g.ba;
      }for (e = 0; e < d.length && (g = d[e]); e++) {
        for (f = c[g.index], h = g.index; h < g.index + g.ba; h++) {
          k = b[h], lb.call(a, k, f), c.splice(h, 0, k);
        }
      }
    };l.prototype.$a = function (a) {
      this.a = this.a || {};this.b = this.b || [];for (var b = 0; b < a.length; b++) {
        var c = a[b];c.__shady = c.__shady || {};
        ra(c);ra(c.parentNode);var d = this.i(c);if (this.a[d]) {
          var e = e || {};e[d] = !0;this.a[d].push(c);
        } else this.a[d] = [c];this.b.push(c);
      }if (e) for (var f in e) {
        this.a[f] = this.j(this.a[f]);
      }
    };l.prototype.i = function (a) {
      var b = a.name || a.getAttribute("name") || "__catchall";return a.Ya = b;
    };l.prototype.j = function (a) {
      return a.sort(function (a, c) {
        a = Vc(a);for (var b = Vc(c), e = 0; e < a.length; e++) {
          c = a[e];var f = b[e];if (c !== f) return a = Array.from(c.parentNode.childNodes), a.indexOf(c) - a.indexOf(f);
        }
      });
    };l.prototype.gb = function (a) {
      this.a = this.a || {};this.b = this.b || [];var b = this.a,
          c;for (c in b) {
        for (var d = b[c], e = 0; e < d.length; e++) {
          var f = d[e],
              g;a: {
            for (g = f; g;) {
              if (g == a) {
                g = !0;break a;
              }g = g.parentNode;
            }g = void 0;
          }if (g) {
            d.splice(e, 1);var h = this.b.indexOf(f);0 <= h && this.b.splice(h, 1);e--;this.H(f);h = !0;
          }
        }
      }return h;
    };l.prototype.ib = function (a) {
      var b = a.Ya,
          c = this.i(a);if (c !== b) {
        b = this.a[b];var d = b.indexOf(a);0 <= d && b.splice(d, 1);b = this.a[c] || (this.a[c] = []);b.push(a);1 < b.length && (this.a[c] = this.j(b));
      }
    };l.prototype.H = function (a) {
      if (a = a.__shady.V) for (var b = 0; b < a.length; b++) {
        var c = a[b],
            d = aa(c);d && ka.call(d, c);
      }
    };l.prototype.Ba = function () {
      return !!this.b.length;
    };l.prototype.addEventListener = function (a, b, c) {
      "object" !== (typeof c === "undefined" ? "undefined" : _typeof(c)) && (c = { capture: !!c });c.la = this;this.host.addEventListener(a, b, c);
    };l.prototype.removeEventListener = function (a, b, c) {
      "object" !== (typeof c === "undefined" ? "undefined" : _typeof(c)) && (c = { capture: !!c });c.la = this;this.host.removeEventListener(a, b, c);
    };l.prototype.getElementById = function (a) {
      return va(this, function (b) {
        return b.id == a;
      }, function (a) {
        return !!a;
      })[0] || null;
    };(function (a) {
      M(a, gb, !0);M(a, hb, !0);
    })(l.prototype);
    var ve = { addEventListener: Nc.bind(window), removeEventListener: Rc.bind(window) },
        ue = { addEventListener: Nc, removeEventListener: Rc, appendChild: function appendChild(a) {
        return ib(this, a);
      }, insertBefore: function insertBefore(a, b) {
        return ib(this, a, b);
      }, removeChild: function removeChild(a) {
        return jb(this, a);
      }, replaceChild: function replaceChild(a, b) {
        ib(this, a, b);jb(this, b);return a;
      }, cloneNode: function cloneNode(a) {
        if ("template" == this.localName) var b = yb.call(this, a);else if (b = yb.call(this, !1), a) {
          a = this.childNodes;for (var c = 0, d; c < a.length; c++) {
            d = a[c].cloneNode(!0), b.appendChild(d);
          }
        }return b;
      },
      getRootNode: function getRootNode() {
        return Ec(this);
      }, get isConnected() {
        var a = this.ownerDocument;if (a && a.contains && a.contains(this) || (a = a.documentElement) && a.contains && a.contains(this)) return !0;for (a = this; a && !(a instanceof Document);) {
          a = a.parentNode || (a instanceof l ? a.host : void 0);
        }return !!(a && a instanceof Document);
      }, dispatchEvent: function dispatchEvent(a) {
        ua();return zb.call(this, a);
      } },
        we = { get assignedSlot() {
        return Wc(this);
      } },
        qb = { querySelector: function querySelector(a) {
        return va(this, function (b) {
          return pd.call(b, a);
        }, function (a) {
          return !!a;
        })[0] || null;
      }, querySelectorAll: function querySelectorAll(a) {
        return va(this, function (b) {
          return pd.call(b, a);
        });
      } },
        Zc = { assignedNodes: function assignedNodes(a) {
        if ("slot" === this.localName) return Gc(this), this.__shady ? (a && a.flatten ? this.__shady.V : this.__shady.assignedNodes) || [] : [];
      } },
        Xc = bb({ setAttribute: function setAttribute(a, b) {
        Hc(this, a, b);
      }, removeAttribute: function removeAttribute(a) {
        qd.call(this, a);Dc(this, a);
      }, attachShadow: function attachShadow(a) {
        if (!this) throw "Must provide a host.";if (!a) throw "Not enough arguments.";return new l(Yb, this, a);
      }, get slot() {
        return this.getAttribute("slot");
      },
      set slot(a) {
        Hc(this, "slot", a);
      }, get assignedSlot() {
        return Wc(this);
      } }, qb, Zc);Object.defineProperties(Xc, rd);var Yc = bb({ importNode: function importNode(a, b) {
        return Jc(a, b);
      }, getElementById: function getElementById(a) {
        return va(this, function (b) {
          return b.id == a;
        }, function (a) {
          return !!a;
        })[0] || null;
      } }, qb);Object.defineProperties(Yc, { _activeElement: hb.activeElement });var Ne = HTMLElement.prototype.blur,
        xe = bb({ blur: function blur() {
        var a = this.__shady && this.__shady.root;(a = a && a.activeElement) ? a.blur() : Ne.call(this);
      } });D.Ia && (window.ShadyDOM = { inUse: D.Ia,
      patch: function patch(a) {
        return a;
      }, isShadyRoot: H, enqueue: kc, flush: ua, settings: D, filterMutations: ke, observeChildren: Yd, unobserveChildren: Xd, nativeMethods: He, nativeTree: Ie }, window.Event = Ke, window.CustomEvent = Le, window.MouseEvent = Me, qe(), te(), window.ShadowRoot = l);var ye = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));u.prototype.D = function (a, b) {
      this.s.set(a, b);this.l.set(b.constructor, b);
    };u.prototype.f = function (a) {
      return this.s.get(a);
    };
    u.prototype.C = function (a) {
      return this.l.get(a);
    };u.prototype.u = function (a) {
      this.h = !0;this.i.push(a);
    };u.prototype.j = function (a) {
      var b = this;this.h && P(a, function (a) {
        return b.g(a);
      });
    };u.prototype.g = function (a) {
      if (this.h && !a.__CE_patched) {
        a.__CE_patched = !0;for (var b = 0; b < this.i.length; b++) {
          this.i[b](a);
        }
      }
    };u.prototype.b = function (a) {
      var b = [];P(a, function (a) {
        return b.push(a);
      });for (a = 0; a < b.length; a++) {
        var c = b[a];1 === c.__CE_state ? this.connectedCallback(c) : this.v(c);
      }
    };u.prototype.a = function (a) {
      var b = [];P(a, function (a) {
        return b.push(a);
      });
      for (a = 0; a < b.length; a++) {
        var c = b[a];1 === c.__CE_state && this.disconnectedCallback(c);
      }
    };u.prototype.c = function (a, b) {
      var c = this;b = b ? b : new Set();var d = [];P(a, function (a) {
        if ("link" === a.localName && "import" === a.getAttribute("rel")) {
          var e = a.import;e instanceof Node && "complete" === e.readyState ? (e.__CE_isImportDocument = !0, e.__CE_hasRegistry = !0) : a.addEventListener("load", function () {
            var d = a.import;d.__CE_documentLoadHandled || (d.__CE_documentLoadHandled = !0, d.__CE_isImportDocument = !0, d.__CE_hasRegistry = !0, b.delete(d), c.c(d, b));
          });
        } else d.push(a);
      }, b);if (this.h) for (a = 0; a < d.length; a++) {
        this.g(d[a]);
      }for (a = 0; a < d.length; a++) {
        this.v(d[a]);
      }
    };u.prototype.v = function (a) {
      if (void 0 === a.__CE_state) {
        var b = this.f(a.localName);if (b) {
          b.constructionStack.push(a);var c = b.constructor;try {
            try {
              if (new c() !== a) throw Error("The custom element constructor did not produce the element being upgraded.");
            } finally {
              b.constructionStack.pop();
            }
          } catch (f) {
            throw a.__CE_state = 2, f;
          }a.__CE_state = 1;a.__CE_definition = b;if (b.attributeChangedCallback) for (b = b.observedAttributes, c = 0; c < b.length; c++) {
            var d = b[c],
                e = a.getAttribute(d);null !== e && this.attributeChangedCallback(a, d, null, e, null);
          }n(a) && this.connectedCallback(a);
        }
      }
    };u.prototype.connectedCallback = function (a) {
      var b = a.__CE_definition;b.connectedCallback && b.connectedCallback.call(a);
    };u.prototype.disconnectedCallback = function (a) {
      var b = a.__CE_definition;b.disconnectedCallback && b.disconnectedCallback.call(a);
    };u.prototype.attributeChangedCallback = function (a, b, c, d, e) {
      var f = a.__CE_definition;f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, c, d, e);
    };Qa.prototype.c = function () {
      this.N && this.N.disconnect();
    };Qa.prototype.f = function (a) {
      var b = this.a.readyState;"interactive" !== b && "complete" !== b || this.c();for (b = 0; b < a.length; b++) {
        for (var c = a[b].addedNodes, d = 0; d < c.length; d++) {
          this.b.c(c[d]);
        }
      }
    };Xb.prototype.resolve = function (a) {
      if (this.a) throw Error("Already resolved.");this.a = a;this.b && this.b(a);
    };z.prototype.define = function (a, b) {
      var c = this;if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
      if (!$c(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");if (this.a.f(a)) throw Error("A custom element with name '" + a + "' has already been defined.");if (this.f) throw Error("A custom element is already being defined.");this.f = !0;try {
        var d = function d(a) {
          var b = e[a];if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function.");return b;
        },
            e = b.prototype;if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
        var f = d("connectedCallback");var g = d("disconnectedCallback");var h = d("adoptedCallback");var k = d("attributeChangedCallback");var l = b.observedAttributes || [];
      } catch (bf) {
        return;
      } finally {
        this.f = !1;
      }this.a.D(a, { localName: a, constructor: b, connectedCallback: f, disconnectedCallback: g, adoptedCallback: h, attributeChangedCallback: k, observedAttributes: l, constructionStack: [] });this.c.push(a);this.b || (this.b = !0, this.g(function () {
        return c.j();
      }));
    };z.prototype.j = function () {
      if (!1 !== this.b) for (this.b = !1, this.a.c(document); 0 < this.c.length;) {
        var a = this.c.shift();(a = this.h.get(a)) && a.resolve(void 0);
      }
    };z.prototype.get = function (a) {
      if (a = this.a.f(a)) return a.constructor;
    };z.prototype.whenDefined = function (a) {
      if (!$c(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));var b = this.h.get(a);if (b) return b.c;b = new Xb();this.h.set(a, b);this.a.f(a) && -1 === this.c.indexOf(a) && b.resolve(void 0);return b.c;
    };z.prototype.l = function (a) {
      this.i.c();var b = this.g;this.g = function (c) {
        return a(function () {
          return b(c);
        });
      };
    };
    window.CustomElementRegistry = z;z.prototype.define = z.prototype.define;z.prototype.get = z.prototype.get;z.prototype.whenDefined = z.prototype.whenDefined;z.prototype.polyfillWrapFlushCallback = z.prototype.l;var Ma = window.Document.prototype.createElement,
        Sd = window.Document.prototype.createElementNS,
        Rd = window.Document.prototype.importNode,
        Td = window.Document.prototype.prepend,
        Ud = window.Document.prototype.append,
        Mb = window.Node.prototype.cloneNode,
        pa = window.Node.prototype.appendChild,
        Ub = window.Node.prototype.insertBefore,
        Na = window.Node.prototype.removeChild,
        Vb = window.Node.prototype.replaceChild,
        Pa = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
        Lb = window.Element.prototype.attachShadow,
        Ka = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
        Oa = window.Element.prototype.getAttribute,
        Nb = window.Element.prototype.setAttribute,
        Pb = window.Element.prototype.removeAttribute,
        qa = window.Element.prototype.getAttributeNS,
        Ob = window.Element.prototype.setAttributeNS,
        Qb = window.Element.prototype.removeAttributeNS,
        Sb = window.Element.prototype.insertAdjacentElement,
        Id = window.Element.prototype.prepend,
        Jd = window.Element.prototype.append,
        Ld = window.Element.prototype.before,
        Md = window.Element.prototype.after,
        Nd = window.Element.prototype.replaceWith,
        Od = window.Element.prototype.remove,
        Wd = window.HTMLElement,
        La = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
        Rb = window.HTMLElement.prototype.insertAdjacentElement,
        Wb = new function () {}(),
        Ca = window.customElements;if (!Ca || Ca.forcePolyfill || "function" != typeof Ca.define || "function" != typeof Ca.get) {
      var ma = new u();Vd(ma);Qd(ma);Pd(ma);Hd(ma);document.__CE_hasRegistry = !0;var Oe = new z(ma);Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: Oe });
    }var K = { STYLE_RULE: 1, ia: 7, MEDIA_RULE: 4, va: 1E3 },
        G = { mb: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, port: /@import[^;]*;/gim, Fa: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim, Ja: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim, sb: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, xb: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      rb: /^@[^\s]*keyframes/, Ka: /\s+/g },
        y = !(window.ShadyDOM && window.ShadyDOM.inUse);if (window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss) var x = window.ShadyCSS.nativeCss;else window.ShadyCSS ? (cd(window.ShadyCSS), window.ShadyCSS = void 0) : cd(window.WebComponents && window.WebComponents.flags);var Da = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
        Ea = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
        Pe = /(--[\w-]+)\s*([:,;)]|$)/gi,
        Qe = /(animation\s*:)|(animation-name\s*:)/,
        Ae = /@media\s(.*)/,
        Re = /\{[^}]*\}/g,
        S = null;r.prototype.a = function (a, b, c) {
      a.__styleScoped ? a.__styleScoped = null : this.i(a, b || "", c);
    };r.prototype.i = function (a, b, c) {
      a.nodeType === Node.ELEMENT_NODE && this.C(a, b, c);if (a = "template" === a.localName ? (a.content || a.Bb).childNodes : a.children || a.childNodes) for (var d = 0; d < a.length; d++) {
        this.i(a[d], b, c);
      }
    };r.prototype.C = function (a, b, c) {
      if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
        var d = a.getAttribute(Se);c ? d && (b = d.replace("style-scope", "").replace(b, ""), ya(a, b)) : ya(a, (d ? d + " " : "") + "style-scope " + b);
      }
    };r.prototype.b = function (a, b, c) {
      var d = a.__cssBuild;y || "shady" === d ? b = ba(b, c) : (a = T(a), b = this.I(b, a.is, a.Z, c) + "\n\n");return b.trim();
    };r.prototype.I = function (a, b, c, d) {
      var e = this.f(b, c);b = this.h(b);var f = this;return ba(a, function (a) {
        a.c || (f.S(a, b, e), a.c = !0);d && d(a, b, e);
      });
    };r.prototype.h = function (a) {
      return a ? Te + a : "";
    };r.prototype.f = function (a, b) {
      return b ? "[is=" + a + "]" : a;
    };r.prototype.S = function (a, b, c) {
      this.j(a, this.g, b, c);
    };r.prototype.j = function (a, b, c, d) {
      a.selector = a.A = this.l(a, b, c, d);
    };r.prototype.l = function (a, b, c, d) {
      var e = a.selector.split(sd);if (!dd(a)) {
        a = 0;for (var f = e.length, g; a < f && (g = e[a]); a++) {
          e[a] = b.call(this, g, c, d);
        }
      }return e.join(sd);
    };r.prototype.u = function (a) {
      return a.replace(Cb, function (a, c, d) {
        -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));return ":" + c + "(" + d + ")";
      });
    };r.prototype.g = function (a, b, c) {
      var d = this,
          e = !1;a = a.trim();var f = Cb.test(a);f && (a = a.replace(Cb, function (a, b, c) {
        return ":" + b + "(" + c.replace(/\s/g, "") + ")";
      }), a = this.u(a));a = a.replace(Ue, Db + " $1");a = a.replace(Ve, function (a, f, k) {
        e || (a = d.D(k, f, b, c), e = e || a.stop, f = a.lb, k = a.value);return f + k;
      });f && (a = this.u(a));return a;
    };r.prototype.D = function (a, b, c, d) {
      var e = a.indexOf(Eb);0 <= a.indexOf(Db) ? a = this.H(a, d) : 0 !== e && (a = c ? this.s(a, c) : a);c = !1;0 <= e && (b = "", c = !0);if (c) {
        var f = !0;c && (a = a.replace(We, function (a, b) {
          return " > " + b;
        }));
      }a = a.replace(Xe, function (a, b, c) {
        return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]';
      });return { value: a, lb: b, stop: f };
    };r.prototype.s = function (a, b) {
      a = a.split(td);a[0] += b;return a.join(td);
    };r.prototype.H = function (a, b) {
      var c = a.match(ud);return (c = c && c[2].trim() || "") ? c[0].match(vd) ? a.replace(ud, function (a, c, f) {
        return b + f;
      }) : c.split(vd)[0] === b ? c : Ye : a.replace(Db, b);
    };r.prototype.R = function (a) {
      a.selector = a.parsedSelector;this.v(a);this.j(a, this.L);
    };r.prototype.v = function (a) {
      a.selector === Ze && (a.selector = "html");
    };r.prototype.L = function (a) {
      return a.match(Eb) ? this.g(a, wd) : this.s(a.trim(), wd);
    };
    Ib.Object.defineProperties(r.prototype, { c: { configurable: !0, enumerable: !0, get: function get() {
          return "style-scope";
        } } });var Cb = /:(nth[-\w]+)\(([^)]+)\)/,
        wd = ":not(.style-scope)",
        sd = ",",
        Ve = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
        vd = /[[.:#*]/,
        Db = ":host",
        Ze = ":root",
        Eb = "::slotted",
        Ue = new RegExp("^(" + Eb + ")"),
        ud = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        We = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        Xe = /(.*):dir\((?:(ltr|rtl))\)/,
        Te = ".",
        td = ":",
        Se = "class",
        Ye = "should_not_match",
        v = new r();t.get = function (a) {
      return a ? a.__styleInfo : null;
    };t.set = function (a, b) {
      return a.__styleInfo = b;
    };t.prototype.c = function () {
      return this.G;
    };t.prototype._getStyleRules = t.prototype.c;var xd = function (a) {
      return a.matches || a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector;
    }(window.Element.prototype),
        $e = navigator.userAgent.match("Trident");p.prototype.R = function (a) {
      var b = this,
          c = {},
          d = [],
          e = 0;ca(a, function (a) {
        b.c(a);a.index = e++;b.I(a.w.cssText, c);
      }, function (a) {
        d.push(a);
      });a.b = d;a = [];for (var f in c) {
        a.push(f);
      }return a;
    };p.prototype.c = function (a) {
      if (!a.w) {
        var b = {},
            c = {};this.b(a, c) && (b.F = c, a.rules = null);b.cssText = this.H(a);a.w = b;
      }
    };p.prototype.b = function (a, b) {
      var c = a.w;if (c) {
        if (c.F) return Object.assign(b, c.F), !0;
      } else {
        c = a.parsedCssText;for (var d; a = Da.exec(c);) {
          d = (a[2] || a[3]).trim();if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;d = !0;
        }return d;
      }
    };p.prototype.H = function (a) {
      return this.L(a.parsedCssText);
    };p.prototype.L = function (a) {
      return a.replace(Re, "").replace(Da, "");
    };p.prototype.I = function (a, b) {
      for (var c; c = Pe.exec(a);) {
        var d = c[1];":" !== c[2] && (b[d] = !0);
      }
    };p.prototype.fa = function (a) {
      for (var b = Object.getOwnPropertyNames(a), c = 0, d; c < b.length; c++) {
        d = b[c], a[d] = this.a(a[d], a);
      }
    };p.prototype.a = function (a, b) {
      if (a) if (0 <= a.indexOf(";")) a = this.f(a, b);else {
        var c = this;a = fd(a, function (a, e, f, g) {
          if (!e) return a + g;(e = c.a(b[e], b)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = c.a(b[f] || f, b) || f;return a + (e || "") + g;
        });
      }return a && a.trim() || "";
    };p.prototype.f = function (a, b) {
      a = a.split(";");for (var c = 0, d, e; c < a.length; c++) {
        if (d = a[c]) {
          Ea.lastIndex = 0;if (e = Ea.exec(d)) d = this.a(b[e[1]], b);else if (e = d.indexOf(":"), -1 !== e) {
            var f = d.substring(e);f = f.trim();f = this.a(f, b) || f;d = d.substring(0, e) + f;
          }a[c] = d && d.lastIndexOf(";") === d.length - 1 ? d.slice(0, -1) : d || "";
        }
      }return a.join(";");
    };p.prototype.D = function (a, b) {
      var c = "";a.w || this.c(a);a.w.cssText && (c = this.f(a.w.cssText, b));a.cssText = c;
    };p.prototype.C = function (a, b) {
      var c = a.cssText,
          d = a.cssText;null == a.Ha && (a.Ha = Qe.test(c));if (a.Ha) if (null == a.da) {
        a.da = [];for (var e in b) {
          d = b[e], d = d(c), c !== d && (c = d, a.da.push(e));
        }
      } else {
        for (e = 0; e < a.da.length; ++e) {
          d = b[a.da[e]], c = d(c);
        }d = c;
      }a.cssText = d;
    };p.prototype.ea = function (a, b) {
      var c = {},
          d = this,
          e = [];ca(a, function (a) {
        a.w || d.c(a);var f = a.A || a.parsedSelector;b && a.w.F && f && xd.call(b, f) && (d.b(a, c), a = a.index, f = parseInt(a / 32, 10), e[f] = (e[f] || 0) | 1 << a % 32);
      }, null, !0);return { F: c, key: e };
    };p.prototype.ha = function (a, b, c, d) {
      b.w || this.c(b);if (b.w.F) {
        var e = T(a);a = e.is;e = e.Z;e = a ? v.f(a, e) : "html";var f = b.parsedSelector,
            g = ":host > *" === f || "html" === f,
            h = 0 === f.indexOf(":host") && !g;"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));"shadow" === c && (g = ":host > *" === f || "html" === f, h = h && !g);if (g || h) c = e, h && (y && !b.A && (b.A = v.l(b, v.g, v.h(a), e)), c = b.A || e), d({ wb: c, qb: h, Eb: g });
      }
    };p.prototype.S = function (a, b) {
      var c = {},
          d = {},
          e = this,
          f = b && b.__cssBuild;ca(b, function (b) {
        e.ha(a, b, f, function (f) {
          xd.call(a.Cb || a, f.wb) && (f.qb ? e.b(b, c) : e.b(b, d));
        });
      }, null, !0);return { ub: d, pb: c };
    };p.prototype.ga = function (a, b, c) {
      var d = this,
          e = T(a),
          f = v.f(e.is, e.Z),
          g = new RegExp("(?:^|[^.#[:])" + (a.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])");e = t.get(a).G;var h = this.h(e, c);return v.b(a, e, function (a) {
        d.D(a, b);y || dd(a) || !a.cssText || (d.C(a, h), d.l(a, g, f, c));
      });
    };p.prototype.h = function (a, b) {
      a = a.b;var c = {};if (!y && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
        this.j(e, b), c[e.keyframesName] = this.i(e);
      }return c;
    };p.prototype.i = function (a) {
      return function (b) {
        return b.replace(a.f, a.a);
      };
    };p.prototype.j = function (a, b) {
      a.f = new RegExp(a.keyframesName, "g");a.a = a.keyframesName + "-" + b;a.A = a.A || a.selector;a.selector = a.A.replace(a.keyframesName, a.a);
    };
    p.prototype.l = function (a, b, c, d) {
      a.A = a.A || a.selector;d = "." + d;for (var e = a.A.split(","), f = 0, g = e.length, h; f < g && (h = e[f]); f++) {
        e[f] = h.match(b) ? h.replace(c, d) : d + " " + h;
      }a.selector = e.join(",");
    };p.prototype.u = function (a, b, c) {
      var d = a.getAttribute("class") || "",
          e = d;c && (e = d.replace(new RegExp("\\s*x-scope\\s*" + c + "\\s*", "g"), " "));e += (e ? " " : "") + "x-scope " + b;d !== e && ya(a, e);
    };p.prototype.v = function (a, b, c, d) {
      b = d ? d.textContent || "" : this.ga(a, b, c);var e = t.get(a),
          f = e.a;f && !y && f !== d && (f._useCount--, 0 >= f._useCount && f.parentNode && f.parentNode.removeChild(f));y ? e.a ? (e.a.textContent = b, d = e.a) : b && (d = tb(b, c, a.shadowRoot, e.b)) : d ? d.parentNode || ($e && -1 < b.indexOf("@media") && (d.textContent = b), ed(d, null, e.b)) : b && (d = tb(b, c, null, e.b));d && (d._useCount = d._useCount || 0, e.a != d && d._useCount++, e.a = d);return d;
    };p.prototype.s = function (a, b) {
      var c = xa(a),
          d = this;a.textContent = ba(c, function (a) {
        var c = a.cssText = a.parsedCssText;a.w && a.w.cssText && (c = c.replace(G.Fa, "").replace(G.Ja, ""), a.cssText = d.f(c, b));
      });
    };Ib.Object.defineProperties(p.prototype, { g: { configurable: !0,
        enumerable: !0, get: function get() {
          return "x-scope";
        } } });var O = new p(),
        Fb = {},
        Fa = window.customElements;if (Fa && !y) {
      var af = Fa.define;Fa.define = function (a, b, c) {
        var d = document.createComment(" Shady DOM styles for " + a + " "),
            e = document.head;e.insertBefore(d, (S ? S.nextSibling : null) || e.firstChild);S = d;Fb[a] = d;return af.call(Fa, a, b, c);
      };
    }oa.prototype.a = function (a, b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d];if (a.F[e] !== b[e]) return !1;
      }return !0;
    };oa.prototype.b = function (a, b, c, d) {
      var e = this.cache[a] || [];e.push({ F: b, styleElement: c,
        B: d });e.length > this.c && e.shift();this.cache[a] = e;
    };oa.prototype.fetch = function (a, b, c) {
      if (a = this.cache[a]) for (var d = a.length - 1; 0 <= d; d--) {
        var e = a[d];if (this.a(e, b, c)) return e;
      }
    };if (!y) {
      var yd = new MutationObserver(gd),
          zd = function zd(a) {
        yd.observe(a, { childList: !0, subtree: !0 });
      };if (window.customElements && !window.customElements.polyfillWrapFlushCallback) zd(document);else {
        var Gb = function Gb() {
          zd(document.body);
        };window.HTMLImports ? window.HTMLImports.whenReady(Gb) : requestAnimationFrame(function () {
          if ("loading" === document.readyState) {
            var a = function a() {
              Gb();document.removeEventListener("readystatechange", a);
            };document.addEventListener("readystatechange", a);
          } else Gb();
        });
      }Kb = function Kb() {
        gd(yd.takeRecords());
      };
    }var za = {},
        De = Promise.resolve(),
        ub = null,
        id = window.HTMLImports && window.HTMLImports.whenReady || null,
        vb,
        Ga = null,
        na = null;F.prototype.Ga = function () {
      !this.enqueued && na && (this.enqueued = !0, Jb(na));
    };F.prototype.b = function (a) {
      a.__seenByShadyCSS || (a.__seenByShadyCSS = !0, this.customStyles.push(a), this.Ga());
    };F.prototype.a = function (a) {
      return a.__shadyCSSCachedStyle ? a.__shadyCSSCachedStyle : a.getStyle ? a.getStyle() : a;
    };F.prototype.c = function () {
      for (var a = this.customStyles, b = 0; b < a.length; b++) {
        var c = a[b];if (!c.__shadyCSSCachedStyle) {
          var d = this.a(c);d && (d = d.__appliedElement || d, Ga && Ga(d), c.__shadyCSSCachedStyle = d);
        }
      }return a;
    };F.prototype.addCustomStyle = F.prototype.b;F.prototype.getStyleForCustomStyle = F.prototype.a;F.prototype.processStyles = F.prototype.c;Object.defineProperties(F.prototype, { transformCallback: { get: function get() {
          return Ga;
        }, set: function set(a) {
          Ga = a;
        } }, validateCallback: { get: function get() {
          return na;
        },
        set: function set(a) {
          var b = !1;na || (b = !0);na = a;b && this.Ga();
        } } });var Ad = new oa();k.prototype.C = function () {
      Kb();
    };k.prototype.S = function (a) {
      var b = this.s[a] = (this.s[a] || 0) + 1;return a + "-" + b;
    };k.prototype.Ra = function (a) {
      return xa(a);
    };k.prototype.Ta = function (a) {
      return ba(a);
    };k.prototype.R = function (a) {
      a = a.content.querySelectorAll("style");for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];b.push(d.textContent);d.parentNode.removeChild(d);
      }return b.join("").trim();
    };k.prototype.fa = function (a) {
      return (a = a.content.querySelector("style")) ? a.getAttribute("css-build") || "" : "";
    };k.prototype.prepareTemplate = function (a, b, c) {
      if (!a.f) {
        a.f = !0;a.name = b;a.extends = c;za[b] = a;var d = this.fa(a),
            e = this.R(a);c = { is: b, extends: c, zb: d };y || v.a(a.content, b);this.c();var f = Ea.test(e) || Da.test(e);Ea.lastIndex = 0;Da.lastIndex = 0;e = sb(e);f && x && this.a && this.a.transformRules(e, b);a._styleAst = e;a.g = d;d = [];x || (d = O.R(a._styleAst));if (!d.length || x) b = this.ea(c, a._styleAst, y ? a.content : null, Fb[b]), a.a = b;a.c = d;
      }
    };k.prototype.ea = function (a, b, c, d) {
      b = v.b(a, b);if (b.length) return tb(b, a.is, c, d);
    };k.prototype.ha = function (a) {
      var b = T(a),
          c = b.is;b = b.Z;var d = Fb[c];c = za[c];if (c) {
        var e = c._styleAst;var f = c.c;
      }return t.set(a, new t(e, d, f, 0, b));
    };k.prototype.H = function () {
      !this.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (this.a = window.ShadyCSS.ApplyShim, this.a.invalidCallback = Be);
    };k.prototype.I = function () {
      var a = this;!this.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (this.b = window.ShadyCSS.CustomStyleInterface, this.b.transformCallback = function (b) {
        a.v(b);
      }, this.b.validateCallback = function () {
        requestAnimationFrame(function () {
          (a.b.enqueued || a.i) && a.f();
        });
      });
    };k.prototype.c = function () {
      this.H();this.I();
    };k.prototype.f = function () {
      this.c();if (this.b) {
        var a = this.b.processStyles();this.b.enqueued && (x ? this.Pa(a) : (this.u(this.g, this.h), this.D(a)), this.b.enqueued = !1, this.i && !x && this.styleDocument());
      }
    };k.prototype.styleElement = function (a, b) {
      var c = T(a).is,
          d = t.get(a);d || (d = this.ha(a));this.j(a) || (this.i = !0);b && (d.P = d.P || {}, Object.assign(d.P, b));if (x) {
        if (d.P) {
          b = d.P;for (var e in b) {
            null === e ? a.style.removeProperty(e) : a.style.setProperty(e, b[e]);
          }
        }if (((e = za[c]) || this.j(a)) && e && e.a && !hd(e)) {
          if (hd(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) this.c(), this.a && this.a.transformRules(e._styleAst, c), e.a.textContent = v.b(a, d.G), Ce(e);y && (c = a.shadowRoot) && (c.querySelector("style").textContent = v.b(a, d.G));d.G = e._styleAst;
        }
      } else this.u(a, d), d.sa && d.sa.length && this.L(a, d);
    };k.prototype.l = function (a) {
      return (a = a.getRootNode().host) ? t.get(a) ? a : this.l(a) : this.g;
    };k.prototype.j = function (a) {
      return a === this.g;
    };k.prototype.L = function (a, b) {
      var c = T(a).is,
          d = Ad.fetch(c, b.K, b.sa),
          e = d ? d.styleElement : null,
          f = b.B;b.B = d && d.B || this.S(c);e = O.v(a, b.K, b.B, e);y || O.u(a, b.B, f);d || Ad.b(c, b.K, e, b.B);
    };k.prototype.u = function (a, b) {
      var c = this.l(a),
          d = t.get(c);c = Object.create(d.K || null);var e = O.S(a, b.G);a = O.ea(d.G, a).F;Object.assign(c, e.pb, a, e.ub);this.ga(c, b.P);O.fa(c);b.K = c;
    };k.prototype.ga = function (a, b) {
      for (var c in b) {
        var d = b[c];if (d || 0 === d) a[c] = d;
      }
    };k.prototype.styleDocument = function (a) {
      this.styleSubtree(this.g, a);
    };k.prototype.styleSubtree = function (a, b) {
      var c = a.shadowRoot;(c || this.j(a)) && this.styleElement(a, b);if (b = c && (c.children || c.childNodes)) for (a = 0; a < b.length; a++) {
        this.styleSubtree(b[a]);
      } else if (a = a.children || a.childNodes) for (b = 0; b < a.length; b++) {
        this.styleSubtree(a[b]);
      }
    };k.prototype.Pa = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = this.b.getStyleForCustomStyle(a[b]);c && this.Oa(c);
      }
    };k.prototype.D = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = this.b.getStyleForCustomStyle(a[b]);c && O.s(c, this.h.K);
      }
    };k.prototype.v = function (a) {
      var b = this,
          c = xa(a);ca(c, function (a) {
        y ? v.v(a) : v.R(a);x && (b.c(), b.a && b.a.transformRule(a));
      });x ? a.textContent = ba(c) : this.h.G.rules.push(c);
    };k.prototype.Oa = function (a) {
      if (x && this.a) {
        var b = xa(a);this.c();this.a.transformRules(b);a.textContent = ba(b);
      }
    };k.prototype.getComputedStyleValue = function (a, b) {
      var c;x || (c = (t.get(a) || t.get(this.l(a))).K[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
    };k.prototype.Sa = function (a, b) {
      var c = a.getRootNode();b = b ? b.split(/\s/) : [];c = c.host && c.host.localName;
      if (!c) {
        var d = a.getAttribute("class");if (d) {
          d = d.split(/\s/);for (var e = 0; e < d.length; e++) {
            if (d[e] === v.c) {
              c = d[e + 1];break;
            }
          }
        }
      }c && b.push(v.c, c);x || (c = t.get(a)) && c.B && b.push(O.g, c.B);ya(a, b.join(" "));
    };k.prototype.Qa = function (a) {
      return t.get(a);
    };k.prototype.flush = k.prototype.C;k.prototype.prepareTemplate = k.prototype.prepareTemplate;k.prototype.styleElement = k.prototype.styleElement;k.prototype.styleDocument = k.prototype.styleDocument;k.prototype.styleSubtree = k.prototype.styleSubtree;k.prototype.getComputedStyleValue = k.prototype.getComputedStyleValue;k.prototype.setElementClass = k.prototype.Sa;k.prototype._styleInfoForNode = k.prototype.Qa;k.prototype.transformCustomStyleForDocument = k.prototype.v;k.prototype.getStyleAst = k.prototype.Ra;k.prototype.styleAstToString = k.prototype.Ta;k.prototype.flushCustomStyles = k.prototype.f;Object.defineProperties(k.prototype, { nativeShadow: { get: function get() {
          return y;
        } }, nativeCss: { get: function get() {
          return x;
        } } });var I = new k();if (window.ShadyCSS) {
      var Bd = window.ShadyCSS.ApplyShim;var Cd = window.ShadyCSS.CustomStyleInterface;
    }window.ShadyCSS = { ScopingShim: I, prepareTemplate: function prepareTemplate(a, b, c) {
        I.f();I.prepareTemplate(a, b, c);
      }, styleSubtree: function styleSubtree(a, b) {
        I.f();I.styleSubtree(a, b);
      }, styleElement: function styleElement(a) {
        I.f();I.styleElement(a);
      }, styleDocument: function styleDocument(a) {
        I.f();I.styleDocument(a);
      }, getComputedStyleValue: function getComputedStyleValue(a, b) {
        return I.getComputedStyleValue(a, b);
      }, nativeCss: x, nativeShadow: y };Bd && (window.ShadyCSS.ApplyShim = Bd);Cd && (window.ShadyCSS.CustomStyleInterface = Cd);var Hb = window.customElements,
        Ha = window.HTMLImports;window.WebComponents = window.WebComponents || {};if (Hb && Hb.polyfillWrapFlushCallback) {
      var Ia,
          Dd = function Dd() {
        if (Ia) {
          var a = Ia;Ia = null;a();return !0;
        }
      },
          Ed = Ha.whenReady;Hb.polyfillWrapFlushCallback(function (a) {
        Ia = a;Ed(Dd);
      });Ha.whenReady = function (a) {
        Ed(function () {
          Dd() ? Ha.whenReady(a) : a();
        });
      };
    }Ha.whenReady(function () {
      requestAnimationFrame(function () {
        window.WebComponents.ready = !0;document.dispatchEvent(new CustomEvent("WebComponentsReady", { bubbles: !0 }));
      });
    });var Fd = document.createElement("style");Fd.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
    var Gd = document.querySelector("head");Gd.insertBefore(Fd, Gd.firstChild);
  })();
}).call(undefined);

//# sourceMappingURL=webcomponents-lite.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(92), __webpack_require__(364)))

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ })

});
//# sourceMappingURL=0.bundle.js.map