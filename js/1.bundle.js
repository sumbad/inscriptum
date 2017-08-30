webpackJsonp([1],{

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  (function () {
    (function (h) {
      function l(a, b) {
        if ("function" === typeof window.CustomEvent) return new CustomEvent(a, b);var c = document.createEvent("CustomEvent");c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);return c;
      }function q(a) {
        if (y) return a.ownerDocument !== document ? a.ownerDocument : null;var b = a.__importDoc;if (!b && a.parentNode) {
          b = a.parentNode;if ("function" === typeof b.closest) b = b.closest("link[rel=import]");else for (; !u(b) && (b = b.parentNode);) {}a.__importDoc = b;
        }return b;
      }function p(a) {
        var b = document.querySelectorAll("link[rel=import]:not(import-dependency)"),
            c = b.length;c ? k(b, function (b) {
          return v(b, function () {
            0 === --c && a();
          });
        }) : a();
      }function m(a) {
        function b() {
          "loading" !== document.readyState && document.body && (document.removeEventListener("readystatechange", b), a());
        }document.addEventListener("readystatechange", b);b();
      }function t(a) {
        m(function () {
          return p(function () {
            return a && a();
          });
        });
      }function v(a, b) {
        if (a.__loaded) b && b();else if ("script" === a.localName && !a.src || "style" === a.localName && !a.firstChild) a.__loaded = !0, b && b();else {
          var c = function c(e) {
            a.removeEventListener(e.type, c);a.__loaded = !0;b && b();
          };a.addEventListener("load", c);z && "style" === a.localName || a.addEventListener("error", c);
        }
      }function u(a) {
        return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel;
      }function g() {
        var a = this;this.a = {};this.b = 0;this.g = new MutationObserver(function (b) {
          return a.B(b);
        });this.g.observe(document.head, { childList: !0, subtree: !0 });this.c(document);
      }function k(a, b, c) {
        var e = a ? a.length : 0,
            f = c ? -1 : 1;for (c = c ? e - 1 : 0; c < e && 0 <= c; c += f) {
          b(a[c], c);
        }
      }var y = "import" in document.createElement("link"),
          A = null;!1 === "currentScript" in document && Object.defineProperty(document, "currentScript", { get: function get() {
          return A || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null);
        }, configurable: !0 });var w = /(^\/)|(^#)|(^[\w-\d]*:)/,
          x = /(url\()([^)]*)(\))/g,
          D = /(@import[\s]+(?!url\())([^;]*)(;)/g,
          E = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,
          d = { w: function w(a, b) {
          a.href && a.setAttribute("href", d.h(a.getAttribute("href"), b));a.src && a.setAttribute("src", d.h(a.getAttribute("src"), b));if ("style" === a.localName) {
            var c = d.s(a.textContent, b, x);a.textContent = d.s(c, b, D);
          }
        }, s: function s(a, b, c) {
          return a.replace(c, function (a, c, n, g) {
            a = n.replace(/["']/g, "");b && (a = d.u(a, b));return c + "'" + a + "'" + g;
          });
        }, h: function h(a, b) {
          return a && w.test(a) ? a : d.u(a, b);
        }, u: function u(a, b) {
          if (void 0 === d.f) {
            d.f = !1;try {
              var c = new URL("b", "http://a");c.pathname = "c%20d";d.f = "http://a/c%20d" === c.href;
            } catch (e) {}
          }if (d.f) return new URL(a, b).href;c = d.v;c || (c = document.implementation.createHTMLDocument("temp"), d.v = c, c.j = c.createElement("base"), c.head.appendChild(c.j), c.i = c.createElement("a"));c.j.href = b;c.i.href = a;return c.i.href || a;
        } },
          B = { async: !0, load: function load(a, b, c) {
          if (a) {
            if (a.match(/^data:/)) {
              a = a.split(",");var e = a[1];e = -1 < a[0].indexOf(";base64") ? atob(e) : decodeURIComponent(e);b(e);
            } else {
              var f = new XMLHttpRequest();f.open("GET", a, B.async);f.onload = function () {
                var a = f.responseURL || f.getResponseHeader("Location");a && 0 === a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a);var e = f.response || f.responseText;304 === f.status || 0 === f.status || 200 <= f.status && 300 > f.status ? b(e, a) : c(e);
              };f.send();
            }
          } else c("error: href must be specified");
        } },
          z = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);g.prototype.c = function (a) {
        var b = this;k(a.querySelectorAll("link[rel=import]"), function (a) {
          return b.m(a);
        });
      };g.prototype.m = function (a) {
        var b = this,
            c = a.href;if (void 0 !== this.a[c]) {
          var e = this.a[c];e && e.__loaded && (a.import = e, this.l(a));
        } else this.b++, this.a[c] = "pending", B.load(c, function (a, e) {
          a = b.C(a, e || c);b.a[c] = a;b.b--;b.c(a);b.o();
        }, function () {
          b.a[c] = null;b.b--;b.o();
        });
      };g.prototype.C = function (a, b) {
        if (!a) return document.createDocumentFragment();z && (a = a.replace(E, function (a, b, c) {
          return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a;
        }));var c = document.createElement("template");c.innerHTML = a;if (c.content) a = c.content;else for (a = document.createDocumentFragment(); c.firstChild;) {
          a.appendChild(c.firstChild);
        }if (c = a.querySelector("base")) b = d.h(c.getAttribute("href"), b), c.removeAttribute("href");
        var e = 0;k(a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]'), function (a) {
          v(a);d.w(a, b);a.setAttribute("import-dependency", "");"script" === a.localName && !a.src && a.textContent && (a.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(a.textContent + ("\n//# sourceURL=" + b + (e ? "-" + e : "") + ".js\n"))), a.textContent = "", e++);
        });return a;
      };g.prototype.o = function () {
        var a = this;if (!this.b) {
          this.g.disconnect();this.flatten(document);var b = !1,
              c = !1,
              e = function e() {
            c && b && (a.c(document), a.b || (a.g.observe(document.head, { childList: !0, subtree: !0 }), a.A()));
          };this.F(function () {
            c = !0;e();
          });this.D(function () {
            b = !0;e();
          });
        }
      };g.prototype.flatten = function (a) {
        var b = this;k(a.querySelectorAll("link[rel=import]"), function (a) {
          var c = b.a[a.href];(a.import = c) && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (b.a[a.href] = a, a.readyState = "loading", a.import = a, b.flatten(c), a.appendChild(c));
        });
      };g.prototype.D = function (a) {
        function b(f) {
          if (f < e) {
            var n = c[f],
                d = document.createElement("script");n.removeAttribute("import-dependency");k(n.attributes, function (a) {
              return d.setAttribute(a.name, a.value);
            });A = d;n.parentNode.replaceChild(d, n);v(d, function () {
              A = null;b(f + 1);
            });
          } else a();
        }var c = document.querySelectorAll("script[import-dependency]"),
            e = c.length;b(0);
      };g.prototype.F = function (a) {
        var b = document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),
            c = b.length;if (c) {
          var e = z && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]");k(b, function (b) {
            v(b, function () {
              b.removeAttribute("import-dependency");0 === --c && a();
            });if (e && b.parentNode !== document.head) {
              var d = document.createElement(b.localName);d.__appliedElement = b;d.setAttribute("type", "import-placeholder");b.parentNode.insertBefore(d, b.nextSibling);for (d = q(b); d && q(d);) {
                d = q(d);
              }d.parentNode !== document.head && (d = null);document.head.insertBefore(b, d);b.removeAttribute("type");
            }
          });
        } else a();
      };
      g.prototype.A = function () {
        var a = this;k(document.querySelectorAll("link[rel=import]"), function (b) {
          return a.l(b);
        }, !0);
      };g.prototype.l = function (a) {
        a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState = "complete"), a.dispatchEvent(l(a.import ? "load" : "error", { bubbles: !1, cancelable: !1, detail: void 0 })));
      };g.prototype.B = function (a) {
        var b = this;k(a, function (a) {
          return k(a.addedNodes, function (a) {
            a && a.nodeType === Node.ELEMENT_NODE && (u(a) ? b.m(a) : b.c(a));
          });
        });
      };if (y) {
        k(document.querySelectorAll("link[rel=import]"), function (a) {
          a.import && "loading" === a.import.readyState || (a.__loaded = !0);
        });var C = function C(a) {
          a = a.target;u(a) && (a.__loaded = !0);
        };document.addEventListener("load", C, !0);document.addEventListener("error", C, !0);
      } else {
        var r = Object.getOwnPropertyDescriptor(Node.prototype, "baseURI");Object.defineProperty((!r || r.configurable ? Node : Element).prototype, "baseURI", { get: function get() {
            var a = u(this) ? this : q(this);return a ? a.href : r && r.get ? r.get.call(this) : (document.querySelector("base") || window.location).href;
          }, configurable: !0,
          enumerable: !0 });m(function () {
          return new g();
        });
      }t(function () {
        return document.dispatchEvent(l("HTMLImportsLoaded", { cancelable: !0, bubbles: !0, detail: void 0 }));
      });h.useNative = y;h.whenReady = t;h.importForElement = q;
    })(window.HTMLImports = window.HTMLImports || {});var l = window.customElements,
        p = window.HTMLImports;window.WebComponents = window.WebComponents || {};if (l && l.polyfillWrapFlushCallback) {
      var m,
          t = function t() {
        if (m) {
          var h = m;m = null;h();return !0;
        }
      },
          w = p.whenReady;l.polyfillWrapFlushCallback(function (h) {
        m = h;w(t);
      });p.whenReady = function (h) {
        w(function () {
          t() ? p.whenReady(h) : h();
        });
      };
    }p.whenReady(function () {
      requestAnimationFrame(function () {
        window.WebComponents.ready = !0;document.dispatchEvent(new CustomEvent("WebComponentsReady", { bubbles: !0 }));
      });
    });l = document.createElement("style");l.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var x = document.querySelector("head");x.insertBefore(l, x.firstChild);
  })();
}).call(undefined);

//# sourceMappingURL=webcomponents-hi.js.map

/***/ })

});
//# sourceMappingURL=1.bundle.js.map