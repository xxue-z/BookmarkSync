import {
  a_ as Mg,
  a$ as jg,
  a as Ug,
  b0 as $g,
  b1 as Bg,
  r as L,
  j as T,
  aU as Hg,
  w as iu,
  b2 as pf,
  b3 as Wg,
  b4 as mf,
  b5 as gf,
  b6 as hf,
  b7 as vf,
  b8 as yf,
  ar as qg,
  b9 as bf,
  ba as Vg,
  bb as kf,
  bc as wf,
  bd as Sf,
  be as xf,
  Q as Qg,
  bf as Ef,
  bg as Kg,
  bh as Nf,
  bi as Cf,
  bj as Xg,
  bk as Yg,
  bl as Gg,
  aG as Pf,
  aH as Jg,
  aI as Lf,
  aJ as Zg,
  aK as eh,
  aL as zf,
  aM as _f,
  aN as nh,
  bm as th,
  a0 as rh,
} from "./vendor-ui-Piys8gOI.js";
import {
  D as Df,
  b as kt,
  l as ah,
  a as Tf,
  m as oh,
  s as Cr,
  p as ih,
  q as sh,
  d as uh,
  A as Ff,
  g as lh,
  u as su,
} from "./sentry--tCLaZao.js";
(function () {
  try {
    var d =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    d.SENTRY_RELEASE = { id: "bookmarksync-extension@dev" };
    var h = new d.Error().stack;
    h &&
      ((d._sentryDebugIds = d._sentryDebugIds || {}),
      (d._sentryDebugIds[h] = "5df070d2-d356-4a36-8b78-a0408d65b81b"),
      (d._sentryDebugIdIdentifier =
        "sentry-dbid-5df070d2-d356-4a36-8b78-a0408d65b81b"));
  } catch {}
})(),
  (function () {
    const d = document.createElement("link").relList;
    if (d && d.supports && d.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
      k(c);
    new MutationObserver((c) => {
      for (const C of c)
        if (C.type === "childList")
          for (const x of C.addedNodes)
            x.tagName === "LINK" && x.rel === "modulepreload" && k(x);
    }).observe(document, { childList: !0, subtree: !0 });
    function h(c) {
      const C = {};
      return (
        c.integrity && (C.integrity = c.integrity),
        c.referrerPolicy && (C.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials"
          ? (C.credentials = "include")
          : c.crossOrigin === "anonymous"
            ? (C.credentials = "omit")
            : (C.credentials = "same-origin"),
        C
      );
    }
    function k(c) {
      if (c.ep) return;
      c.ep = !0;
      const C = h(c);
      fetch(c.href, C);
    }
  })();
var uu = { exports: {} },
  ba = {},
  Af = { exports: {} },
  Of = {},
  If;
function ch() {
  return (
    If ||
      ((If = 1),
      (function (d) {
        function h(y, E) {
          var F = y.length;
          y.push(E);
          e: for (; 0 < F; ) {
            var ie = (F - 1) >>> 1,
              se = y[ie];
            if (0 < C(se, E)) (y[ie] = E), (y[F] = se), (F = ie);
            else break e;
          }
        }
        function k(y) {
          return y.length === 0 ? null : y[0];
        }
        function c(y) {
          if (y.length === 0) return null;
          var E = y[0],
            F = y.pop();
          if (F !== E) {
            y[0] = F;
            e: for (var ie = 0, se = y.length, je = se >>> 1; ie < je; ) {
              var ve = 2 * (ie + 1) - 1,
                X = y[ve],
                ze = ve + 1,
                Sn = y[ze];
              if (0 > C(X, F))
                ze < se && 0 > C(Sn, X)
                  ? ((y[ie] = Sn), (y[ze] = F), (ie = ze))
                  : ((y[ie] = X), (y[ve] = F), (ie = ve));
              else if (ze < se && 0 > C(Sn, F))
                (y[ie] = Sn), (y[ze] = F), (ie = ze);
              else break e;
            }
          }
          return E;
        }
        function C(y, E) {
          var F = y.sortIndex - E.sortIndex;
          return F !== 0 ? F : y.id - E.id;
        }
        if (
          ((d.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var x = performance;
          d.unstable_now = function () {
            return x.now();
          };
        } else {
          var I = Date,
            ce = I.now();
          d.unstable_now = function () {
            return I.now() - ce;
          };
        }
        var W = [],
          U = [],
          hn = 1,
          _ = null,
          de = 3,
          fe = !1,
          re = !1,
          pe = !1,
          Re = !1,
          Le = typeof setTimeout == "function" ? setTimeout : null,
          Se = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function he(y) {
          for (var E = k(U); E !== null; ) {
            if (E.callback === null) c(U);
            else if (E.startTime <= y)
              c(U), (E.sortIndex = E.expirationTime), h(W, E);
            else break;
            E = k(U);
          }
        }
        function Me(y) {
          if (((pe = !1), he(y), !re))
            if (k(W) !== null) (re = !0), $e || (($e = !0), R());
            else {
              var E = k(U);
              E !== null && me(Me, E.startTime - y);
            }
        }
        var $e = !1,
          sn = -1,
          Xe = 5,
          Pn = -1;
        function Ln() {
          return Re ? !0 : !(d.unstable_now() - Pn < Xe);
        }
        function zn() {
          if (((Re = !1), $e)) {
            var y = d.unstable_now();
            Pn = y;
            var E = !0;
            try {
              e: {
                (re = !1), pe && ((pe = !1), Se(sn), (sn = -1)), (fe = !0);
                var F = de;
                try {
                  n: {
                    for (
                      he(y), _ = k(W);
                      _ !== null && !(_.expirationTime > y && Ln());

                    ) {
                      var ie = _.callback;
                      if (typeof ie == "function") {
                        (_.callback = null), (de = _.priorityLevel);
                        var se = ie(_.expirationTime <= y);
                        if (((y = d.unstable_now()), typeof se == "function")) {
                          (_.callback = se), he(y), (E = !0);
                          break n;
                        }
                        _ === k(W) && c(W), he(y);
                      } else c(W);
                      _ = k(W);
                    }
                    if (_ !== null) E = !0;
                    else {
                      var je = k(U);
                      je !== null && me(Me, je.startTime - y), (E = !1);
                    }
                  }
                  break e;
                } finally {
                  (_ = null), (de = F), (fe = !1);
                }
                E = void 0;
              }
            } finally {
              E ? R() : ($e = !1);
            }
          }
        }
        var R;
        if (typeof K == "function")
          R = function () {
            K(zn);
          };
        else if (typeof MessageChannel < "u") {
          var ae = new MessageChannel(),
            oe = ae.port2;
          (ae.port1.onmessage = zn),
            (R = function () {
              oe.postMessage(null);
            });
        } else
          R = function () {
            Le(zn, 0);
          };
        function me(y, E) {
          sn = Le(function () {
            y(d.unstable_now());
          }, E);
        }
        (d.unstable_IdlePriority = 5),
          (d.unstable_ImmediatePriority = 1),
          (d.unstable_LowPriority = 4),
          (d.unstable_NormalPriority = 3),
          (d.unstable_Profiling = null),
          (d.unstable_UserBlockingPriority = 2),
          (d.unstable_cancelCallback = function (y) {
            y.callback = null;
          }),
          (d.unstable_forceFrameRate = function (y) {
            0 > y || 125 < y
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Xe = 0 < y ? Math.floor(1e3 / y) : 5);
          }),
          (d.unstable_getCurrentPriorityLevel = function () {
            return de;
          }),
          (d.unstable_next = function (y) {
            switch (de) {
              case 1:
              case 2:
              case 3:
                var E = 3;
                break;
              default:
                E = de;
            }
            var F = de;
            de = E;
            try {
              return y();
            } finally {
              de = F;
            }
          }),
          (d.unstable_requestPaint = function () {
            Re = !0;
          }),
          (d.unstable_runWithPriority = function (y, E) {
            switch (y) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                y = 3;
            }
            var F = de;
            de = y;
            try {
              return E();
            } finally {
              de = F;
            }
          }),
          (d.unstable_scheduleCallback = function (y, E, F) {
            var ie = d.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay),
                  (F = typeof F == "number" && 0 < F ? ie + F : ie))
                : (F = ie),
              y)
            ) {
              case 1:
                var se = -1;
                break;
              case 2:
                se = 250;
                break;
              case 5:
                se = 1073741823;
                break;
              case 4:
                se = 1e4;
                break;
              default:
                se = 5e3;
            }
            return (
              (se = F + se),
              (y = {
                id: hn++,
                callback: E,
                priorityLevel: y,
                startTime: F,
                expirationTime: se,
                sortIndex: -1,
              }),
              F > ie
                ? ((y.sortIndex = F),
                  h(U, y),
                  k(W) === null &&
                    y === k(U) &&
                    (pe ? (Se(sn), (sn = -1)) : (pe = !0), me(Me, F - ie)))
                : ((y.sortIndex = se),
                  h(W, y),
                  re || fe || ((re = !0), $e || (($e = !0), R()))),
              y
            );
          }),
          (d.unstable_shouldYield = Ln),
          (d.unstable_wrapCallback = function (y) {
            var E = de;
            return function () {
              var F = de;
              de = E;
              try {
                return y.apply(this, arguments);
              } finally {
                de = F;
              }
            };
          });
      })(Of)),
    Of
  );
}
var Rf;
function dh() {
  return Rf || ((Rf = 1), (Af.exports = ch())), Af.exports;
}
var Mf;
function fh() {
  if (Mf) return ba;
  Mf = 1;
  var d = dh(),
    h = Mg(),
    k = jg();
  function c(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        n += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function C(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function x(e) {
    var n = e,
      t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), (n.flags & 4098) !== 0 && (t = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function I(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function ce(e) {
    if (e.tag === 31) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function W(e) {
    if (x(e) !== e) throw Error(c(188));
  }
  function U(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = x(e)), n === null)) throw Error(c(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var a = t.return;
      if (a === null) break;
      var o = a.alternate;
      if (o === null) {
        if (((r = a.return), r !== null)) {
          t = r;
          continue;
        }
        break;
      }
      if (a.child === o.child) {
        for (o = a.child; o; ) {
          if (o === t) return W(a), e;
          if (o === r) return W(a), n;
          o = o.sibling;
        }
        throw Error(c(188));
      }
      if (t.return !== r.return) (t = a), (r = o);
      else {
        for (var i = !1, s = a.child; s; ) {
          if (s === t) {
            (i = !0), (t = a), (r = o);
            break;
          }
          if (s === r) {
            (i = !0), (r = a), (t = o);
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = o.child; s; ) {
            if (s === t) {
              (i = !0), (t = o), (r = a);
              break;
            }
            if (s === r) {
              (i = !0), (r = o), (t = a);
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(c(189));
        }
      }
      if (t.alternate !== r) throw Error(c(190));
    }
    if (t.tag !== 3) throw Error(c(188));
    return t.stateNode.current === t ? e : n;
  }
  function hn(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = hn(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var _ = Object.assign,
    de = Symbol.for("react.element"),
    fe = Symbol.for("react.transitional.element"),
    re = Symbol.for("react.portal"),
    pe = Symbol.for("react.fragment"),
    Re = Symbol.for("react.strict_mode"),
    Le = Symbol.for("react.profiler"),
    Se = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    he = Symbol.for("react.forward_ref"),
    Me = Symbol.for("react.suspense"),
    $e = Symbol.for("react.suspense_list"),
    sn = Symbol.for("react.memo"),
    Xe = Symbol.for("react.lazy"),
    Pn = Symbol.for("react.activity"),
    Ln = Symbol.for("react.memo_cache_sentinel"),
    zn = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (zn && e[zn]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ae = Symbol.for("react.client.reference");
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ae ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case pe:
        return "Fragment";
      case Le:
        return "Profiler";
      case Re:
        return "StrictMode";
      case Me:
        return "Suspense";
      case $e:
        return "SuspenseList";
      case Pn:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case re:
          return "Portal";
        case K:
          return e.displayName || "Context";
        case Se:
          return (e._context.displayName || "Context") + ".Consumer";
        case he:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case sn:
          return (
            (n = e.displayName || null), n !== null ? n : oe(e.type) || "Memo"
          );
        case Xe:
          (n = e._payload), (e = e._init);
          try {
            return oe(e(n));
          } catch {}
      }
    return null;
  }
  var me = Array.isArray,
    y = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    E = k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = { pending: !1, data: null, method: null, action: null },
    ie = [],
    se = -1;
  function je(e) {
    return { current: e };
  }
  function ve(e) {
    0 > se || ((e.current = ie[se]), (ie[se] = null), se--);
  }
  function X(e, n) {
    se++, (ie[se] = e.current), (e.current = n);
  }
  var ze = je(null),
    Sn = je(null),
    Kn = je(null),
    ka = je(null);
  function wa(e, n) {
    switch ((X(Kn, n), X(Sn, e), X(ze, null), n.nodeType)) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Od(e) : 0;
        break;
      default:
        if (((e = n.tagName), (n = n.namespaceURI)))
          (n = Od(n)), (e = Id(n, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ve(ze), X(ze, e);
  }
  function $t() {
    ve(ze), ve(Sn), ve(Kn);
  }
  function $o(e) {
    e.memoizedState !== null && X(ka, e);
    var n = ze.current,
      t = Id(n, e.type);
    n !== t && (X(Sn, e), X(ze, t));
  }
  function Sa(e) {
    Sn.current === e && (ve(ze), ve(Sn)),
      ka.current === e && (ve(ka), (ga._currentValue = F));
  }
  var Bo, du;
  function wt(e) {
    if (Bo === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        (Bo = (n && n[1]) || ""),
          (du =
            -1 <
            t.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < t.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      Bo +
      e +
      du
    );
  }
  var Ho = !1;
  function Wo(e, n) {
    if (!e || Ho) return "";
    Ho = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var S = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(S.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(S, []);
                } catch (v) {
                  var g = v;
                }
                Reflect.construct(e, [], S);
              } else {
                try {
                  S.call();
                } catch (v) {
                  g = v;
                }
                e.call(S.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (v) {
                g = v;
              }
              (S = e()) &&
                typeof S.catch == "function" &&
                S.catch(function () {});
            }
          } catch (v) {
            if (v && g && typeof v.stack == "string") return [v.stack, g.stack];
          }
          return [null, null];
        },
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        "name",
      );
      a &&
        a.configurable &&
        Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = r.DetermineComponentFrameRoot(),
        i = o[0],
        s = o[1];
      if (i && s) {
        var u = i.split(`
`),
          m = s.split(`
`);
        for (
          a = r = 0;
          r < u.length && !u[r].includes("DetermineComponentFrameRoot");

        )
          r++;
        for (; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        if (r === u.length || a === m.length)
          for (
            r = u.length - 1, a = m.length - 1;
            1 <= r && 0 <= a && u[r] !== m[a];

          )
            a--;
        for (; 1 <= r && 0 <= a; r--, a--)
          if (u[r] !== m[a]) {
            if (r !== 1 || a !== 1)
              do
                if ((r--, a--, 0 > a || u[r] !== m[a])) {
                  var b =
                    `
` + u[r].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      b.includes("<anonymous>") &&
                      (b = b.replace("<anonymous>", e.displayName)),
                    b
                  );
                }
              while (1 <= r && 0 <= a);
            break;
          }
      }
    } finally {
      (Ho = !1), (Error.prepareStackTrace = t);
    }
    return (t = e ? e.displayName || e.name : "") ? wt(t) : "";
  }
  function gp(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return wt(e.type);
      case 16:
        return wt("Lazy");
      case 13:
        return e.child !== n && n !== null
          ? wt("Suspense Fallback")
          : wt("Suspense");
      case 19:
        return wt("SuspenseList");
      case 0:
      case 15:
        return Wo(e.type, !1);
      case 11:
        return Wo(e.type.render, !1);
      case 1:
        return Wo(e.type, !0);
      case 31:
        return wt("Activity");
      default:
        return "";
    }
  }
  function fu(e) {
    try {
      var n = "",
        t = null;
      do (n += gp(e, t)), (t = e), (e = e.return);
      while (e);
      return n;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  var qo = Object.prototype.hasOwnProperty,
    Vo = d.unstable_scheduleCallback,
    Qo = d.unstable_cancelCallback,
    hp = d.unstable_shouldYield,
    vp = d.unstable_requestPaint,
    Ye = d.unstable_now,
    yp = d.unstable_getCurrentPriorityLevel,
    pu = d.unstable_ImmediatePriority,
    mu = d.unstable_UserBlockingPriority,
    xa = d.unstable_NormalPriority,
    bp = d.unstable_LowPriority,
    gu = d.unstable_IdlePriority,
    kp = d.log,
    wp = d.unstable_setDisableYieldValue,
    Pr = null,
    Ge = null;
  function Xn(e) {
    if (
      (typeof kp == "function" && wp(e),
      Ge && typeof Ge.setStrictMode == "function")
    )
      try {
        Ge.setStrictMode(Pr, e);
      } catch {}
  }
  var Je = Math.clz32 ? Math.clz32 : Ep,
    Sp = Math.log,
    xp = Math.LN2;
  function Ep(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Sp(e) / xp) | 0)) | 0;
  }
  var Ea = 256,
    Na = 262144,
    Ca = 4194304;
  function St(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Pa(e, n, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var a = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes;
    e = e.warmLanes;
    var s = r & 134217727;
    return (
      s !== 0
        ? ((r = s & ~o),
          r !== 0
            ? (a = St(r))
            : ((i &= s),
              i !== 0
                ? (a = St(i))
                : t || ((t = s & ~e), t !== 0 && (a = St(t)))))
        : ((s = r & ~o),
          s !== 0
            ? (a = St(s))
            : i !== 0
              ? (a = St(i))
              : t || ((t = r & ~e), t !== 0 && (a = St(t)))),
      a === 0
        ? 0
        : n !== 0 &&
            n !== a &&
            (n & o) === 0 &&
            ((o = a & -a),
            (t = n & -n),
            o >= t || (o === 32 && (t & 4194048) !== 0))
          ? n
          : a
    );
  }
  function Lr(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Np(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hu() {
    var e = Ca;
    return (Ca <<= 1), (Ca & 62914560) === 0 && (Ca = 4194304), e;
  }
  function Ko(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function zr(e, n) {
    (e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Cp(e, n, t, r, a, o) {
    var i = e.pendingLanes;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= t),
      (e.entangledLanes &= t),
      (e.errorRecoveryDisabledLanes &= t),
      (e.shellSuspendCounter = 0);
    var s = e.entanglements,
      u = e.expirationTimes,
      m = e.hiddenUpdates;
    for (t = i & ~t; 0 < t; ) {
      var b = 31 - Je(t),
        S = 1 << b;
      (s[b] = 0), (u[b] = -1);
      var g = m[b];
      if (g !== null)
        for (m[b] = null, b = 0; b < g.length; b++) {
          var v = g[b];
          v !== null && (v.lane &= -536870913);
        }
      t &= ~S;
    }
    r !== 0 && vu(e, r, 0),
      o !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(i & ~n));
  }
  function vu(e, n, t) {
    (e.pendingLanes |= n), (e.suspendedLanes &= ~n);
    var r = 31 - Je(n);
    (e.entangledLanes |= n),
      (e.entanglements[r] = e.entanglements[r] | 1073741824 | (t & 261930));
  }
  function yu(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
      var r = 31 - Je(t),
        a = 1 << r;
      (a & n) | (e[r] & n) && (e[r] |= n), (t &= ~a);
    }
  }
  function bu(e, n) {
    var t = n & -n;
    return (
      (t = (t & 42) !== 0 ? 1 : Xo(t)),
      (t & (e.suspendedLanes | n)) !== 0 ? 0 : t
    );
  }
  function Xo(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Yo(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ku() {
    var e = E.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : of(e.type));
  }
  function wu(e, n) {
    var t = E.p;
    try {
      return (E.p = e), n();
    } finally {
      E.p = t;
    }
  }
  var Yn = Math.random().toString(36).slice(2),
    Te = "__reactFiber$" + Yn,
    Be = "__reactProps$" + Yn,
    Bt = "__reactContainer$" + Yn,
    Go = "__reactEvents$" + Yn,
    Pp = "__reactListeners$" + Yn,
    Lp = "__reactHandles$" + Yn,
    Su = "__reactResources$" + Yn,
    _r = "__reactMarker$" + Yn;
  function Jo(e) {
    delete e[Te], delete e[Be], delete e[Go], delete e[Pp], delete e[Lp];
  }
  function Ht(e) {
    var n = e[Te];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if ((n = t[Bt] || t[Te])) {
        if (
          ((t = n.alternate),
          n.child !== null || (t !== null && t.child !== null))
        )
          for (e = Hd(e); e !== null; ) {
            if ((t = e[Te])) return t;
            e = Hd(e);
          }
        return n;
      }
      (e = t), (t = e.parentNode);
    }
    return null;
  }
  function Wt(e) {
    if ((e = e[Te] || e[Bt])) {
      var n = e.tag;
      if (
        n === 5 ||
        n === 6 ||
        n === 13 ||
        n === 31 ||
        n === 26 ||
        n === 27 ||
        n === 3
      )
        return e;
    }
    return null;
  }
  function Dr(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(c(33));
  }
  function qt(e) {
    var n = e[Su];
    return (
      n ||
        (n = e[Su] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function _e(e) {
    e[_r] = !0;
  }
  var xu = new Set(),
    Eu = {};
  function xt(e, n) {
    Vt(e, n), Vt(e + "Capture", n);
  }
  function Vt(e, n) {
    for (Eu[e] = n, e = 0; e < n.length; e++) xu.add(n[e]);
  }
  var zp = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Nu = {},
    Cu = {};
  function _p(e) {
    return qo.call(Cu, e)
      ? !0
      : qo.call(Nu, e)
        ? !1
        : zp.test(e)
          ? (Cu[e] = !0)
          : ((Nu[e] = !0), !1);
  }
  function La(e, n, t) {
    if (_p(n))
      if (t === null) e.removeAttribute(n);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var r = n.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + t);
      }
  }
  function za(e, n, t) {
    if (t === null) e.removeAttribute(n);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + t);
    }
  }
  function _n(e, n, t, r) {
    if (r === null) e.removeAttribute(t);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttributeNS(n, t, "" + r);
    }
  }
  function un(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Pu(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Dp(e, n, t) {
    var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
    if (
      !e.hasOwnProperty(n) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var a = r.get,
        o = r.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (i) {
            (t = "" + i), o.call(this, i);
          },
        }),
        Object.defineProperty(e, n, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return t;
          },
          setValue: function (i) {
            t = "" + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function Zo(e) {
    if (!e._valueTracker) {
      var n = Pu(e) ? "checked" : "value";
      e._valueTracker = Dp(e, n, "" + e[n]);
    }
  }
  function Lu(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
      r = "";
    return (
      e && (r = Pu(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== t ? (n.setValue(e), !0) : !1
    );
  }
  function _a(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Tp = /[\n"\\]/g;
  function vn(e) {
    return e.replace(Tp, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function ei(e, n, t, r, a, o, i, s) {
    (e.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (e.type = i)
        : e.removeAttribute("type"),
      n != null
        ? i === "number"
          ? ((n === 0 && e.value === "") || e.value != n) &&
            (e.value = "" + un(n))
          : e.value !== "" + un(n) && (e.value = "" + un(n))
        : (i !== "submit" && i !== "reset") || e.removeAttribute("value"),
      n != null
        ? ni(e, i, un(n))
        : t != null
          ? ni(e, i, un(t))
          : r != null && e.removeAttribute("value"),
      a == null && o != null && (e.defaultChecked = !!o),
      a != null &&
        (e.checked = a && typeof a != "function" && typeof a != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (e.name = "" + un(s))
        : e.removeAttribute("name");
  }
  function zu(e, n, t, r, a, o, i, s) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.type = o),
      n != null || t != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || n != null)) {
        Zo(e);
        return;
      }
      (t = t != null ? "" + un(t) : ""),
        (n = n != null ? "" + un(n) : t),
        s || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (r = r ?? a),
      (r = typeof r != "function" && typeof r != "symbol" && !!r),
      (e.checked = s ? e.checked : !!r),
      (e.defaultChecked = !!r),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.name = i),
      Zo(e);
  }
  function ni(e, n, t) {
    (n === "number" && _a(e.ownerDocument) === e) ||
      e.defaultValue === "" + t ||
      (e.defaultValue = "" + t);
  }
  function Qt(e, n, t, r) {
    if (((e = e.options), n)) {
      n = {};
      for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
      for (t = 0; t < e.length; t++)
        (a = n.hasOwnProperty("$" + e[t].value)),
          e[t].selected !== a && (e[t].selected = a),
          a && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + un(t), n = null, a = 0; a < e.length; a++) {
        if (e[a].value === t) {
          (e[a].selected = !0), r && (e[a].defaultSelected = !0);
          return;
        }
        n !== null || e[a].disabled || (n = e[a]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function _u(e, n, t) {
    if (
      n != null &&
      ((n = "" + un(n)), n !== e.value && (e.value = n), t == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = t != null ? "" + un(t) : "";
  }
  function Du(e, n, t, r) {
    if (n == null) {
      if (r != null) {
        if (t != null) throw Error(c(92));
        if (me(r)) {
          if (1 < r.length) throw Error(c(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (n = t);
    }
    (t = un(n)),
      (e.defaultValue = t),
      (r = e.textContent),
      r === t && r !== "" && r !== null && (e.value = r),
      Zo(e);
  }
  function Kt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Fp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Tu(e, n, t) {
    var r = n.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === ""
      ? r
        ? e.setProperty(n, "")
        : n === "float"
          ? (e.cssFloat = "")
          : (e[n] = "")
      : r
        ? e.setProperty(n, t)
        : typeof t != "number" || t === 0 || Fp.has(n)
          ? n === "float"
            ? (e.cssFloat = t)
            : (e[n] = ("" + t).trim())
          : (e[n] = t + "px");
  }
  function Fu(e, n, t) {
    if (n != null && typeof n != "object") throw Error(c(62));
    if (((e = e.style), t != null)) {
      for (var r in t)
        !t.hasOwnProperty(r) ||
          (n != null && n.hasOwnProperty(r)) ||
          (r.indexOf("--") === 0
            ? e.setProperty(r, "")
            : r === "float"
              ? (e.cssFloat = "")
              : (e[r] = ""));
      for (var a in n)
        (r = n[a]), n.hasOwnProperty(a) && t[a] !== r && Tu(e, a, r);
    } else for (var o in n) n.hasOwnProperty(o) && Tu(e, o, n[o]);
  }
  function ti(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ap = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Op =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Da(e) {
    return Op.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Dn() {}
  var ri = null;
  function ai(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Xt = null,
    Yt = null;
  function Au(e) {
    var n = Wt(e);
    if (n && (e = n.stateNode)) {
      var t = e[Be] || null;
      e: switch (((e = n.stateNode), n.type)) {
        case "input":
          if (
            (ei(
              e,
              t.value,
              t.defaultValue,
              t.defaultValue,
              t.checked,
              t.defaultChecked,
              t.type,
              t.name,
            ),
            (n = t.name),
            t.type === "radio" && n != null)
          ) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                'input[name="' + vn("" + n) + '"][type="radio"]',
              ),
                n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n];
              if (r !== e && r.form === e.form) {
                var a = r[Be] || null;
                if (!a) throw Error(c(90));
                ei(
                  r,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name,
                );
              }
            }
            for (n = 0; n < t.length; n++)
              (r = t[n]), r.form === e.form && Lu(r);
          }
          break e;
        case "textarea":
          _u(e, t.value, t.defaultValue);
          break e;
        case "select":
          (n = t.value), n != null && Qt(e, !!t.multiple, n, !1);
      }
    }
  }
  var oi = !1;
  function Ou(e, n, t) {
    if (oi) return e(n, t);
    oi = !0;
    try {
      var r = e(n);
      return r;
    } finally {
      if (
        ((oi = !1),
        (Xt !== null || Yt !== null) &&
          (bo(), Xt && ((n = Xt), (e = Yt), (Yt = Xt = null), Au(n), e)))
      )
        for (n = 0; n < e.length; n++) Au(e[n]);
    }
  }
  function Tr(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = t[Be] || null;
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(c(231, n, typeof t));
    return t;
  }
  var Tn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ii = !1;
  if (Tn)
    try {
      var Fr = {};
      Object.defineProperty(Fr, "passive", {
        get: function () {
          ii = !0;
        },
      }),
        window.addEventListener("test", Fr, Fr),
        window.removeEventListener("test", Fr, Fr);
    } catch {
      ii = !1;
    }
  var Gn = null,
    si = null,
    Ta = null;
  function Iu() {
    if (Ta) return Ta;
    var e,
      n = si,
      t = n.length,
      r,
      a = "value" in Gn ? Gn.value : Gn.textContent,
      o = a.length;
    for (e = 0; e < t && n[e] === a[e]; e++);
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === a[o - r]; r++);
    return (Ta = a.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Fa(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Aa() {
    return !0;
  }
  function Ru() {
    return !1;
  }
  function He(e) {
    function n(t, r, a, o, i) {
      (this._reactName = t),
        (this._targetInst = a),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((t = e[s]), (this[s] = t ? t(o) : o[s]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Aa
          : Ru),
        (this.isPropagationStopped = Ru),
        this
      );
    }
    return (
      _(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = Aa));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = Aa));
        },
        persist: function () {},
        isPersistent: Aa,
      }),
      n
    );
  }
  var Et = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Oa = He(Et),
    Ar = _({}, Et, { view: 0, detail: 0 }),
    Ip = He(Ar),
    ui,
    li,
    Or,
    Ia = _({}, Ar, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: di,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Or &&
              (Or && e.type === "mousemove"
                ? ((ui = e.screenX - Or.screenX), (li = e.screenY - Or.screenY))
                : (li = ui = 0),
              (Or = e)),
            ui);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : li;
      },
    }),
    Mu = He(Ia),
    Rp = _({}, Ia, { dataTransfer: 0 }),
    Mp = He(Rp),
    jp = _({}, Ar, { relatedTarget: 0 }),
    ci = He(jp),
    Up = _({}, Et, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $p = He(Up),
    Bp = _({}, Et, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Hp = He(Bp),
    Wp = _({}, Et, { data: 0 }),
    ju = He(Wp),
    qp = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Vp = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Qp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Kp(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = Qp[e])
        ? !!n[e]
        : !1;
  }
  function di() {
    return Kp;
  }
  var Xp = _({}, Ar, {
      key: function (e) {
        if (e.key) {
          var n = qp[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Fa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Vp[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: di,
      charCode: function (e) {
        return e.type === "keypress" ? Fa(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fa(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Yp = He(Xp),
    Gp = _({}, Ia, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Uu = He(Gp),
    Jp = _({}, Ar, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: di,
    }),
    Zp = He(Jp),
    em = _({}, Et, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nm = He(em),
    tm = _({}, Ia, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    rm = He(tm),
    am = _({}, Et, { newState: 0, oldState: 0 }),
    om = He(am),
    im = [9, 13, 27, 32],
    fi = Tn && "CompositionEvent" in window,
    Ir = null;
  Tn && "documentMode" in document && (Ir = document.documentMode);
  var sm = Tn && "TextEvent" in window && !Ir,
    $u = Tn && (!fi || (Ir && 8 < Ir && 11 >= Ir)),
    Bu = " ",
    Hu = !1;
  function Wu(e, n) {
    switch (e) {
      case "keyup":
        return im.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Gt = !1;
  function um(e, n) {
    switch (e) {
      case "compositionend":
        return qu(n);
      case "keypress":
        return n.which !== 32 ? null : ((Hu = !0), Bu);
      case "textInput":
        return (e = n.data), e === Bu && Hu ? null : e;
      default:
        return null;
    }
  }
  function lm(e, n) {
    if (Gt)
      return e === "compositionend" || (!fi && Wu(e, n))
        ? ((e = Iu()), (Ta = si = Gn = null), (Gt = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return $u && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var cm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Vu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!cm[e.type] : n === "textarea";
  }
  function Qu(e, n, t, r) {
    Xt ? (Yt ? Yt.push(r) : (Yt = [r])) : (Xt = r),
      (n = Co(n, "onChange")),
      0 < n.length &&
        ((t = new Oa("onChange", "change", null, t, r)),
        e.push({ event: t, listeners: n }));
  }
  var Rr = null,
    Mr = null;
  function dm(e) {
    zd(e, 0);
  }
  function Ra(e) {
    var n = Dr(e);
    if (Lu(n)) return e;
  }
  function Ku(e, n) {
    if (e === "change") return n;
  }
  var Xu = !1;
  if (Tn) {
    var pi;
    if (Tn) {
      var mi = "oninput" in document;
      if (!mi) {
        var Yu = document.createElement("div");
        Yu.setAttribute("oninput", "return;"),
          (mi = typeof Yu.oninput == "function");
      }
      pi = mi;
    } else pi = !1;
    Xu = pi && (!document.documentMode || 9 < document.documentMode);
  }
  function Gu() {
    Rr && (Rr.detachEvent("onpropertychange", Ju), (Mr = Rr = null));
  }
  function Ju(e) {
    if (e.propertyName === "value" && Ra(Mr)) {
      var n = [];
      Qu(n, Mr, e, ai(e)), Ou(dm, n);
    }
  }
  function fm(e, n, t) {
    e === "focusin"
      ? (Gu(), (Rr = n), (Mr = t), Rr.attachEvent("onpropertychange", Ju))
      : e === "focusout" && Gu();
  }
  function pm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ra(Mr);
  }
  function mm(e, n) {
    if (e === "click") return Ra(n);
  }
  function gm(e, n) {
    if (e === "input" || e === "change") return Ra(n);
  }
  function hm(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Ze = typeof Object.is == "function" ? Object.is : hm;
  function jr(e, n) {
    if (Ze(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var t = Object.keys(e),
      r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var a = t[r];
      if (!qo.call(n, a) || !Ze(e[a], n[a])) return !1;
    }
    return !0;
  }
  function Zu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function el(e, n) {
    var t = Zu(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (((r = e + t.textContent.length), e <= n && r >= n))
          return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Zu(t);
    }
  }
  function nl(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? nl(e, n.parentNode)
            : "contains" in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function tl(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = _a(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = _a(e.document);
    }
    return n;
  }
  function gi(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var vm = Tn && "documentMode" in document && 11 >= document.documentMode,
    Jt = null,
    hi = null,
    Ur = null,
    vi = !1;
  function rl(e, n, t) {
    var r =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    vi ||
      Jt == null ||
      Jt !== _a(r) ||
      ((r = Jt),
      "selectionStart" in r && gi(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Ur && jr(Ur, r)) ||
        ((Ur = r),
        (r = Co(hi, "onSelect")),
        0 < r.length &&
          ((n = new Oa("onSelect", "select", null, n, t)),
          e.push({ event: n, listeners: r }),
          (n.target = Jt))));
  }
  function Nt(e, n) {
    var t = {};
    return (
      (t[e.toLowerCase()] = n.toLowerCase()),
      (t["Webkit" + e] = "webkit" + n),
      (t["Moz" + e] = "moz" + n),
      t
    );
  }
  var Zt = {
      animationend: Nt("Animation", "AnimationEnd"),
      animationiteration: Nt("Animation", "AnimationIteration"),
      animationstart: Nt("Animation", "AnimationStart"),
      transitionrun: Nt("Transition", "TransitionRun"),
      transitionstart: Nt("Transition", "TransitionStart"),
      transitioncancel: Nt("Transition", "TransitionCancel"),
      transitionend: Nt("Transition", "TransitionEnd"),
    },
    yi = {},
    al = {};
  Tn &&
    ((al = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Zt.animationend.animation,
      delete Zt.animationiteration.animation,
      delete Zt.animationstart.animation),
    "TransitionEvent" in window || delete Zt.transitionend.transition);
  function Ct(e) {
    if (yi[e]) return yi[e];
    if (!Zt[e]) return e;
    var n = Zt[e],
      t;
    for (t in n) if (n.hasOwnProperty(t) && t in al) return (yi[e] = n[t]);
    return e;
  }
  var ol = Ct("animationend"),
    il = Ct("animationiteration"),
    sl = Ct("animationstart"),
    ym = Ct("transitionrun"),
    bm = Ct("transitionstart"),
    km = Ct("transitioncancel"),
    ul = Ct("transitionend"),
    ll = new Map(),
    bi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  bi.push("scrollEnd");
  function yn(e, n) {
    ll.set(e, n), xt(n, [e]);
  }
  var Ma =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var n = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(n)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    ln = [],
    er = 0,
    ki = 0;
  function ja() {
    for (var e = er, n = (ki = er = 0); n < e; ) {
      var t = ln[n];
      ln[n++] = null;
      var r = ln[n];
      ln[n++] = null;
      var a = ln[n];
      ln[n++] = null;
      var o = ln[n];
      if (((ln[n++] = null), r !== null && a !== null)) {
        var i = r.pending;
        i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)),
          (r.pending = a);
      }
      o !== 0 && cl(t, a, o);
    }
  }
  function Ua(e, n, t, r) {
    (ln[er++] = e),
      (ln[er++] = n),
      (ln[er++] = t),
      (ln[er++] = r),
      (ki |= r),
      (e.lanes |= r),
      (e = e.alternate),
      e !== null && (e.lanes |= r);
  }
  function wi(e, n, t, r) {
    return Ua(e, n, t, r), $a(e);
  }
  function Pt(e, n) {
    return Ua(e, null, null, n), $a(e);
  }
  function cl(e, n, t) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t);
    for (var a = !1, o = e.return; o !== null; )
      (o.childLanes |= t),
        (r = o.alternate),
        r !== null && (r.childLanes |= t),
        o.tag === 22 &&
          ((e = o.stateNode), e === null || e._visibility & 1 || (a = !0)),
        (e = o),
        (o = o.return);
    return e.tag === 3
      ? ((o = e.stateNode),
        a &&
          n !== null &&
          ((a = 31 - Je(t)),
          (e = o.hiddenUpdates),
          (r = e[a]),
          r === null ? (e[a] = [n]) : r.push(n),
          (n.lane = t | 536870912)),
        o)
      : null;
  }
  function $a(e) {
    if (50 < ua) throw ((ua = 0), (_s = null), Error(c(185)));
    for (var n = e.return; n !== null; ) (e = n), (n = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var nr = {};
  function wm(e, n, t, r) {
    (this.tag = e),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function en(e, n, t, r) {
    return new wm(e, n, t, r);
  }
  function Si(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Fn(e, n) {
    var t = e.alternate;
    return (
      t === null
        ? ((t = en(e.tag, n, e.key, e.mode)),
          (t.elementType = e.elementType),
          (t.type = e.type),
          (t.stateNode = e.stateNode),
          (t.alternate = e),
          (e.alternate = t))
        : ((t.pendingProps = n),
          (t.type = e.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = e.flags & 65011712),
      (t.childLanes = e.childLanes),
      (t.lanes = e.lanes),
      (t.child = e.child),
      (t.memoizedProps = e.memoizedProps),
      (t.memoizedState = e.memoizedState),
      (t.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (t.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (t.sibling = e.sibling),
      (t.index = e.index),
      (t.ref = e.ref),
      (t.refCleanup = e.refCleanup),
      t
    );
  }
  function dl(e, n) {
    e.flags &= 65011714;
    var t = e.alternate;
    return (
      t === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = t.childLanes),
          (e.lanes = t.lanes),
          (e.child = t.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = t.memoizedProps),
          (e.memoizedState = t.memoizedState),
          (e.updateQueue = t.updateQueue),
          (e.type = t.type),
          (n = t.dependencies),
          (e.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function Ba(e, n, t, r, a, o) {
    var i = 0;
    if (((r = e), typeof e == "function")) Si(e) && (i = 1);
    else if (typeof e == "string")
      i = Cg(e, t, ze.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Pn:
          return (e = en(31, t, n, a)), (e.elementType = Pn), (e.lanes = o), e;
        case pe:
          return Lt(t.children, a, o, n);
        case Re:
          (i = 8), (a |= 24);
          break;
        case Le:
          return (
            (e = en(12, t, n, a | 2)), (e.elementType = Le), (e.lanes = o), e
          );
        case Me:
          return (e = en(13, t, n, a)), (e.elementType = Me), (e.lanes = o), e;
        case $e:
          return (e = en(19, t, n, a)), (e.elementType = $e), (e.lanes = o), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case K:
                i = 10;
                break e;
              case Se:
                i = 9;
                break e;
              case he:
                i = 11;
                break e;
              case sn:
                i = 14;
                break e;
              case Xe:
                (i = 16), (r = null);
                break e;
            }
          (i = 29),
            (t = Error(c(130, e === null ? "null" : typeof e, ""))),
            (r = null);
      }
    return (
      (n = en(i, t, n, a)), (n.elementType = e), (n.type = r), (n.lanes = o), n
    );
  }
  function Lt(e, n, t, r) {
    return (e = en(7, e, r, n)), (e.lanes = t), e;
  }
  function xi(e, n, t) {
    return (e = en(6, e, null, n)), (e.lanes = t), e;
  }
  function fl(e) {
    var n = en(18, null, null, 0);
    return (n.stateNode = e), n;
  }
  function Ei(e, n, t) {
    return (
      (n = en(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = t),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  var pl = new WeakMap();
  function cn(e, n) {
    if (typeof e == "object" && e !== null) {
      var t = pl.get(e);
      return t !== void 0
        ? t
        : ((n = { value: e, source: n, stack: fu(n) }), pl.set(e, n), n);
    }
    return { value: e, source: n, stack: fu(n) };
  }
  var tr = [],
    rr = 0,
    Ha = null,
    $r = 0,
    dn = [],
    fn = 0,
    Jn = null,
    xn = 1,
    En = "";
  function An(e, n) {
    (tr[rr++] = $r), (tr[rr++] = Ha), (Ha = e), ($r = n);
  }
  function ml(e, n, t) {
    (dn[fn++] = xn), (dn[fn++] = En), (dn[fn++] = Jn), (Jn = e);
    var r = xn;
    e = En;
    var a = 32 - Je(r) - 1;
    (r &= ~(1 << a)), (t += 1);
    var o = 32 - Je(n) + a;
    if (30 < o) {
      var i = a - (a % 5);
      (o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (a -= i),
        (xn = (1 << (32 - Je(n) + a)) | (t << a) | r),
        (En = o + e);
    } else (xn = (1 << o) | (t << a) | r), (En = e);
  }
  function Ni(e) {
    e.return !== null && (An(e, 1), ml(e, 1, 0));
  }
  function Ci(e) {
    for (; e === Ha; )
      (Ha = tr[--rr]), (tr[rr] = null), ($r = tr[--rr]), (tr[rr] = null);
    for (; e === Jn; )
      (Jn = dn[--fn]),
        (dn[fn] = null),
        (En = dn[--fn]),
        (dn[fn] = null),
        (xn = dn[--fn]),
        (dn[fn] = null);
  }
  function gl(e, n) {
    (dn[fn++] = xn),
      (dn[fn++] = En),
      (dn[fn++] = Jn),
      (xn = n.id),
      (En = n.overflow),
      (Jn = e);
  }
  var Fe = null,
    ue = null,
    H = !1,
    Zn = null,
    pn = !1,
    Pi = Error(c(519));
  function et(e) {
    var n = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Br(cn(n, e)), Pi);
  }
  function hl(e) {
    var n = e.stateNode,
      t = e.type,
      r = e.memoizedProps;
    switch (((n[Te] = e), (n[Be] = r), t)) {
      case "dialog":
        j("cancel", n), j("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        j("load", n);
        break;
      case "video":
      case "audio":
        for (t = 0; t < ca.length; t++) j(ca[t], n);
        break;
      case "source":
        j("error", n);
        break;
      case "img":
      case "image":
      case "link":
        j("error", n), j("load", n);
        break;
      case "details":
        j("toggle", n);
        break;
      case "input":
        j("invalid", n),
          zu(
            n,
            r.value,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name,
            !0,
          );
        break;
      case "select":
        j("invalid", n);
        break;
      case "textarea":
        j("invalid", n), Du(n, r.value, r.defaultValue, r.children);
    }
    (t = r.children),
      (typeof t != "string" && typeof t != "number" && typeof t != "bigint") ||
      n.textContent === "" + t ||
      r.suppressHydrationWarning === !0 ||
      Fd(n.textContent, t)
        ? (r.popover != null && (j("beforetoggle", n), j("toggle", n)),
          r.onScroll != null && j("scroll", n),
          r.onScrollEnd != null && j("scrollend", n),
          r.onClick != null && (n.onclick = Dn),
          (n = !0))
        : (n = !1),
      n || et(e, !0);
  }
  function vl(e) {
    for (Fe = e.return; Fe; )
      switch (Fe.tag) {
        case 5:
        case 31:
        case 13:
          pn = !1;
          return;
        case 27:
        case 3:
          pn = !0;
          return;
        default:
          Fe = Fe.return;
      }
  }
  function ar(e) {
    if (e !== Fe) return !1;
    if (!H) return vl(e), (H = !0), !1;
    var n = e.tag,
      t;
    if (
      ((t = n !== 3 && n !== 27) &&
        ((t = n === 5) &&
          ((t = e.type),
          (t =
            !(t !== "form" && t !== "button") || qs(e.type, e.memoizedProps))),
        (t = !t)),
      t && ue && et(e),
      vl(e),
      n === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      ue = Bd(e);
    } else if (n === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      ue = Bd(e);
    } else
      n === 27
        ? ((n = ue), mt(e.type) ? ((e = Ys), (Ys = null), (ue = e)) : (ue = n))
        : (ue = Fe ? mn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function zt() {
    (ue = Fe = null), (H = !1);
  }
  function Li() {
    var e = Zn;
    return (
      e !== null &&
        (Qe === null ? (Qe = e) : Qe.push.apply(Qe, e), (Zn = null)),
      e
    );
  }
  function Br(e) {
    Zn === null ? (Zn = [e]) : Zn.push(e);
  }
  var zi = je(null),
    _t = null,
    On = null;
  function nt(e, n, t) {
    X(zi, n._currentValue), (n._currentValue = t);
  }
  function In(e) {
    (e._currentValue = zi.current), ve(zi);
  }
  function _i(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
          : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        e === t)
      )
        break;
      e = e.return;
    }
  }
  function Di(e, n, t, r) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var o = a.dependencies;
      if (o !== null) {
        var i = a.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var s = o;
          o = a;
          for (var u = 0; u < n.length; u++)
            if (s.context === n[u]) {
              (o.lanes |= t),
                (s = o.alternate),
                s !== null && (s.lanes |= t),
                _i(o.return, t, e),
                r || (i = null);
              break e;
            }
          o = s.next;
        }
      } else if (a.tag === 18) {
        if (((i = a.return), i === null)) throw Error(c(341));
        (i.lanes |= t),
          (o = i.alternate),
          o !== null && (o.lanes |= t),
          _i(i, t, e),
          (i = null);
      } else i = a.child;
      if (i !== null) i.return = a;
      else
        for (i = a; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (((a = i.sibling), a !== null)) {
            (a.return = i.return), (i = a);
            break;
          }
          i = i.return;
        }
      a = i;
    }
  }
  function or(e, n, t, r) {
    e = null;
    for (var a = n, o = !1; a !== null; ) {
      if (!o) {
        if ((a.flags & 524288) !== 0) o = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var i = a.alternate;
        if (i === null) throw Error(c(387));
        if (((i = i.memoizedProps), i !== null)) {
          var s = a.type;
          Ze(a.pendingProps.value, i.value) ||
            (e !== null ? e.push(s) : (e = [s]));
        }
      } else if (a === ka.current) {
        if (((i = a.alternate), i === null)) throw Error(c(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (e !== null ? e.push(ga) : (e = [ga]));
      }
      a = a.return;
    }
    e !== null && Di(n, e, t, r), (n.flags |= 262144);
  }
  function Wa(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ze(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Dt(e) {
    (_t = e),
      (On = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Ae(e) {
    return yl(_t, e);
  }
  function qa(e, n) {
    return _t === null && Dt(e), yl(e, n);
  }
  function yl(e, n) {
    var t = n._currentValue;
    if (((n = { context: n, memoizedValue: t, next: null }), On === null)) {
      if (e === null) throw Error(c(308));
      (On = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288);
    } else On = On.next = n;
    return t;
  }
  var Sm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (t, r) {
                  e.push(r);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                e.forEach(function (t) {
                  return t();
                });
            };
          },
    xm = d.unstable_scheduleCallback,
    Em = d.unstable_NormalPriority,
    xe = {
      $$typeof: K,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ti() {
    return { controller: new Sm(), data: new Map(), refCount: 0 };
  }
  function Hr(e) {
    e.refCount--,
      e.refCount === 0 &&
        xm(Em, function () {
          e.controller.abort();
        });
  }
  var Wr = null,
    Fi = 0,
    ir = 0,
    sr = null;
  function Nm(e, n) {
    if (Wr === null) {
      var t = (Wr = []);
      (Fi = 0),
        (ir = Is()),
        (sr = {
          status: "pending",
          value: void 0,
          then: function (r) {
            t.push(r);
          },
        });
    }
    return Fi++, n.then(bl, bl), n;
  }
  function bl() {
    if (--Fi === 0 && Wr !== null) {
      sr !== null && (sr.status = "fulfilled");
      var e = Wr;
      (Wr = null), (ir = 0), (sr = null);
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Cm(e, n) {
    var t = [],
      r = {
        status: "pending",
        value: null,
        reason: null,
        then: function (a) {
          t.push(a);
        },
      };
    return (
      e.then(
        function () {
          (r.status = "fulfilled"), (r.value = n);
          for (var a = 0; a < t.length; a++) (0, t[a])(n);
        },
        function (a) {
          for (r.status = "rejected", r.reason = a, a = 0; a < t.length; a++)
            (0, t[a])(void 0);
        },
      ),
      r
    );
  }
  var kl = y.S;
  y.S = function (e, n) {
    (rd = Ye()),
      typeof n == "object" &&
        n !== null &&
        typeof n.then == "function" &&
        Nm(e, n),
      kl !== null && kl(e, n);
  };
  var Tt = je(null);
  function Ai() {
    var e = Tt.current;
    return e !== null ? e : te.pooledCache;
  }
  function Va(e, n) {
    n === null ? X(Tt, Tt.current) : X(Tt, n.pool);
  }
  function wl() {
    var e = Ai();
    return e === null ? null : { parent: xe._currentValue, pool: e };
  }
  var ur = Error(c(460)),
    Oi = Error(c(474)),
    Qa = Error(c(542)),
    Ka = { then: function () {} };
  function Sl(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function xl(e, n, t) {
    switch (
      ((t = e[t]),
      t === void 0 ? e.push(n) : t !== n && (n.then(Dn, Dn), (n = t)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((e = n.reason), Nl(e), e);
      default:
        if (typeof n.status == "string") n.then(Dn, Dn);
        else {
          if (((e = te), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482));
          (e = n),
            (e.status = "pending"),
            e.then(
              function (r) {
                if (n.status === "pending") {
                  var a = n;
                  (a.status = "fulfilled"), (a.value = r);
                }
              },
              function (r) {
                if (n.status === "pending") {
                  var a = n;
                  (a.status = "rejected"), (a.reason = r);
                }
              },
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((e = n.reason), Nl(e), e);
        }
        throw ((At = n), ur);
    }
  }
  function Ft(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function"
        ? ((At = t), ur)
        : t;
    }
  }
  var At = null;
  function El() {
    if (At === null) throw Error(c(459));
    var e = At;
    return (At = null), e;
  }
  function Nl(e) {
    if (e === ur || e === Qa) throw Error(c(483));
  }
  var lr = null,
    qr = 0;
  function Xa(e) {
    var n = qr;
    return (qr += 1), lr === null && (lr = []), xl(lr, e, n);
  }
  function Vr(e, n) {
    (n = n.props.ref), (e.ref = n !== void 0 ? n : null);
  }
  function Ya(e, n) {
    throw n.$$typeof === de
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          c(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Cl(e) {
    function n(f, l) {
      if (e) {
        var p = f.deletions;
        p === null ? ((f.deletions = [l]), (f.flags |= 16)) : p.push(l);
      }
    }
    function t(f, l) {
      if (!e) return null;
      for (; l !== null; ) n(f, l), (l = l.sibling);
      return null;
    }
    function r(f) {
      for (var l = new Map(); f !== null; )
        f.key !== null ? l.set(f.key, f) : l.set(f.index, f), (f = f.sibling);
      return l;
    }
    function a(f, l) {
      return (f = Fn(f, l)), (f.index = 0), (f.sibling = null), f;
    }
    function o(f, l, p) {
      return (
        (f.index = p),
        e
          ? ((p = f.alternate),
            p !== null
              ? ((p = p.index), p < l ? ((f.flags |= 67108866), l) : p)
              : ((f.flags |= 67108866), l))
          : ((f.flags |= 1048576), l)
      );
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 67108866), f;
    }
    function s(f, l, p, w) {
      return l === null || l.tag !== 6
        ? ((l = xi(p, f.mode, w)), (l.return = f), l)
        : ((l = a(l, p)), (l.return = f), l);
    }
    function u(f, l, p, w) {
      var z = p.type;
      return z === pe
        ? b(f, l, p.props.children, w, p.key)
        : l !== null &&
            (l.elementType === z ||
              (typeof z == "object" &&
                z !== null &&
                z.$$typeof === Xe &&
                Ft(z) === l.type))
          ? ((l = a(l, p.props)), Vr(l, p), (l.return = f), l)
          : ((l = Ba(p.type, p.key, p.props, null, f.mode, w)),
            Vr(l, p),
            (l.return = f),
            l);
    }
    function m(f, l, p, w) {
      return l === null ||
        l.tag !== 4 ||
        l.stateNode.containerInfo !== p.containerInfo ||
        l.stateNode.implementation !== p.implementation
        ? ((l = Ei(p, f.mode, w)), (l.return = f), l)
        : ((l = a(l, p.children || [])), (l.return = f), l);
    }
    function b(f, l, p, w, z) {
      return l === null || l.tag !== 7
        ? ((l = Lt(p, f.mode, w, z)), (l.return = f), l)
        : ((l = a(l, p)), (l.return = f), l);
    }
    function S(f, l, p) {
      if (
        (typeof l == "string" && l !== "") ||
        typeof l == "number" ||
        typeof l == "bigint"
      )
        return (l = xi("" + l, f.mode, p)), (l.return = f), l;
      if (typeof l == "object" && l !== null) {
        switch (l.$$typeof) {
          case fe:
            return (
              (p = Ba(l.type, l.key, l.props, null, f.mode, p)),
              Vr(p, l),
              (p.return = f),
              p
            );
          case re:
            return (l = Ei(l, f.mode, p)), (l.return = f), l;
          case Xe:
            return (l = Ft(l)), S(f, l, p);
        }
        if (me(l) || R(l))
          return (l = Lt(l, f.mode, p, null)), (l.return = f), l;
        if (typeof l.then == "function") return S(f, Xa(l), p);
        if (l.$$typeof === K) return S(f, qa(f, l), p);
        Ya(f, l);
      }
      return null;
    }
    function g(f, l, p, w) {
      var z = l !== null ? l.key : null;
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return z !== null ? null : s(f, l, "" + p, w);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case fe:
            return p.key === z ? u(f, l, p, w) : null;
          case re:
            return p.key === z ? m(f, l, p, w) : null;
          case Xe:
            return (p = Ft(p)), g(f, l, p, w);
        }
        if (me(p) || R(p)) return z !== null ? null : b(f, l, p, w, null);
        if (typeof p.then == "function") return g(f, l, Xa(p), w);
        if (p.$$typeof === K) return g(f, l, qa(f, p), w);
        Ya(f, p);
      }
      return null;
    }
    function v(f, l, p, w, z) {
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return (f = f.get(p) || null), s(l, f, "" + w, z);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case fe:
            return (
              (f = f.get(w.key === null ? p : w.key) || null), u(l, f, w, z)
            );
          case re:
            return (
              (f = f.get(w.key === null ? p : w.key) || null), m(l, f, w, z)
            );
          case Xe:
            return (w = Ft(w)), v(f, l, p, w, z);
        }
        if (me(w) || R(w)) return (f = f.get(p) || null), b(l, f, w, z, null);
        if (typeof w.then == "function") return v(f, l, p, Xa(w), z);
        if (w.$$typeof === K) return v(f, l, p, qa(l, w), z);
        Ya(l, w);
      }
      return null;
    }
    function N(f, l, p, w) {
      for (
        var z = null, q = null, P = l, O = (l = 0), B = null;
        P !== null && O < p.length;
        O++
      ) {
        P.index > O ? ((B = P), (P = null)) : (B = P.sibling);
        var V = g(f, P, p[O], w);
        if (V === null) {
          P === null && (P = B);
          break;
        }
        e && P && V.alternate === null && n(f, P),
          (l = o(V, l, O)),
          q === null ? (z = V) : (q.sibling = V),
          (q = V),
          (P = B);
      }
      if (O === p.length) return t(f, P), H && An(f, O), z;
      if (P === null) {
        for (; O < p.length; O++)
          (P = S(f, p[O], w)),
            P !== null &&
              ((l = o(P, l, O)),
              q === null ? (z = P) : (q.sibling = P),
              (q = P));
        return H && An(f, O), z;
      }
      for (P = r(P); O < p.length; O++)
        (B = v(P, f, O, p[O], w)),
          B !== null &&
            (e && B.alternate !== null && P.delete(B.key === null ? O : B.key),
            (l = o(B, l, O)),
            q === null ? (z = B) : (q.sibling = B),
            (q = B));
      return (
        e &&
          P.forEach(function (bt) {
            return n(f, bt);
          }),
        H && An(f, O),
        z
      );
    }
    function D(f, l, p, w) {
      if (p == null) throw Error(c(151));
      for (
        var z = null, q = null, P = l, O = (l = 0), B = null, V = p.next();
        P !== null && !V.done;
        O++, V = p.next()
      ) {
        P.index > O ? ((B = P), (P = null)) : (B = P.sibling);
        var bt = g(f, P, V.value, w);
        if (bt === null) {
          P === null && (P = B);
          break;
        }
        e && P && bt.alternate === null && n(f, P),
          (l = o(bt, l, O)),
          q === null ? (z = bt) : (q.sibling = bt),
          (q = bt),
          (P = B);
      }
      if (V.done) return t(f, P), H && An(f, O), z;
      if (P === null) {
        for (; !V.done; O++, V = p.next())
          (V = S(f, V.value, w)),
            V !== null &&
              ((l = o(V, l, O)),
              q === null ? (z = V) : (q.sibling = V),
              (q = V));
        return H && An(f, O), z;
      }
      for (P = r(P); !V.done; O++, V = p.next())
        (V = v(P, f, O, V.value, w)),
          V !== null &&
            (e && V.alternate !== null && P.delete(V.key === null ? O : V.key),
            (l = o(V, l, O)),
            q === null ? (z = V) : (q.sibling = V),
            (q = V));
      return (
        e &&
          P.forEach(function (Rg) {
            return n(f, Rg);
          }),
        H && An(f, O),
        z
      );
    }
    function ne(f, l, p, w) {
      if (
        (typeof p == "object" &&
          p !== null &&
          p.type === pe &&
          p.key === null &&
          (p = p.props.children),
        typeof p == "object" && p !== null)
      ) {
        switch (p.$$typeof) {
          case fe:
            e: {
              for (var z = p.key; l !== null; ) {
                if (l.key === z) {
                  if (((z = p.type), z === pe)) {
                    if (l.tag === 7) {
                      t(f, l.sibling),
                        (w = a(l, p.props.children)),
                        (w.return = f),
                        (f = w);
                      break e;
                    }
                  } else if (
                    l.elementType === z ||
                    (typeof z == "object" &&
                      z !== null &&
                      z.$$typeof === Xe &&
                      Ft(z) === l.type)
                  ) {
                    t(f, l.sibling),
                      (w = a(l, p.props)),
                      Vr(w, p),
                      (w.return = f),
                      (f = w);
                    break e;
                  }
                  t(f, l);
                  break;
                } else n(f, l);
                l = l.sibling;
              }
              p.type === pe
                ? ((w = Lt(p.props.children, f.mode, w, p.key)),
                  (w.return = f),
                  (f = w))
                : ((w = Ba(p.type, p.key, p.props, null, f.mode, w)),
                  Vr(w, p),
                  (w.return = f),
                  (f = w));
            }
            return i(f);
          case re:
            e: {
              for (z = p.key; l !== null; ) {
                if (l.key === z)
                  if (
                    l.tag === 4 &&
                    l.stateNode.containerInfo === p.containerInfo &&
                    l.stateNode.implementation === p.implementation
                  ) {
                    t(f, l.sibling),
                      (w = a(l, p.children || [])),
                      (w.return = f),
                      (f = w);
                    break e;
                  } else {
                    t(f, l);
                    break;
                  }
                else n(f, l);
                l = l.sibling;
              }
              (w = Ei(p, f.mode, w)), (w.return = f), (f = w);
            }
            return i(f);
          case Xe:
            return (p = Ft(p)), ne(f, l, p, w);
        }
        if (me(p)) return N(f, l, p, w);
        if (R(p)) {
          if (((z = R(p)), typeof z != "function")) throw Error(c(150));
          return (p = z.call(p)), D(f, l, p, w);
        }
        if (typeof p.then == "function") return ne(f, l, Xa(p), w);
        if (p.$$typeof === K) return ne(f, l, qa(f, p), w);
        Ya(f, p);
      }
      return (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
        ? ((p = "" + p),
          l !== null && l.tag === 6
            ? (t(f, l.sibling), (w = a(l, p)), (w.return = f), (f = w))
            : (t(f, l), (w = xi(p, f.mode, w)), (w.return = f), (f = w)),
          i(f))
        : t(f, l);
    }
    return function (f, l, p, w) {
      try {
        qr = 0;
        var z = ne(f, l, p, w);
        return (lr = null), z;
      } catch (P) {
        if (P === ur || P === Qa) throw P;
        var q = en(29, P, null, f.mode);
        return (q.lanes = w), (q.return = f), q;
      }
    };
  }
  var Ot = Cl(!0),
    Pl = Cl(!1),
    tt = !1;
  function Ii(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ri(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function rt(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function at(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Q & 2) !== 0)) {
      var a = r.pending;
      return (
        a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
        (r.pending = n),
        (n = $a(e)),
        cl(e, null, t),
        n
      );
    }
    return Ua(e, r, n, t), $a(e);
  }
  function Qr(e, n, t) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194048) !== 0))
    ) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), yu(e, t);
    }
  }
  function Mi(e, n) {
    var t = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
      var a = null,
        o = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var i = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null,
          };
          o === null ? (a = o = i) : (o = o.next = i), (t = t.next);
        } while (t !== null);
        o === null ? (a = o = n) : (o = o.next = n);
      } else a = o = n;
      (t = {
        baseState: r.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: o,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (e.updateQueue = t);
      return;
    }
    (e = t.lastBaseUpdate),
      e === null ? (t.firstBaseUpdate = n) : (e.next = n),
      (t.lastBaseUpdate = n);
  }
  var ji = !1;
  function Kr() {
    if (ji) {
      var e = sr;
      if (e !== null) throw e;
    }
  }
  function Xr(e, n, t, r) {
    ji = !1;
    var a = e.updateQueue;
    tt = !1;
    var o = a.firstBaseUpdate,
      i = a.lastBaseUpdate,
      s = a.shared.pending;
    if (s !== null) {
      a.shared.pending = null;
      var u = s,
        m = u.next;
      (u.next = null), i === null ? (o = m) : (i.next = m), (i = u);
      var b = e.alternate;
      b !== null &&
        ((b = b.updateQueue),
        (s = b.lastBaseUpdate),
        s !== i &&
          (s === null ? (b.firstBaseUpdate = m) : (s.next = m),
          (b.lastBaseUpdate = u)));
    }
    if (o !== null) {
      var S = a.baseState;
      (i = 0), (b = m = u = null), (s = o);
      do {
        var g = s.lane & -536870913,
          v = g !== s.lane;
        if (v ? ($ & g) === g : (r & g) === g) {
          g !== 0 && g === ir && (ji = !0),
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var N = e,
              D = s;
            g = n;
            var ne = t;
            switch (D.tag) {
              case 1:
                if (((N = D.payload), typeof N == "function")) {
                  S = N.call(ne, S, g);
                  break e;
                }
                S = N;
                break e;
              case 3:
                N.flags = (N.flags & -65537) | 128;
              case 0:
                if (
                  ((N = D.payload),
                  (g = typeof N == "function" ? N.call(ne, S, g) : N),
                  g == null)
                )
                  break e;
                S = _({}, S, g);
                break e;
              case 2:
                tt = !0;
            }
          }
          (g = s.callback),
            g !== null &&
              ((e.flags |= 64),
              v && (e.flags |= 8192),
              (v = a.callbacks),
              v === null ? (a.callbacks = [g]) : v.push(g));
        } else
          (v = {
            lane: g,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            b === null ? ((m = b = v), (u = S)) : (b = b.next = v),
            (i |= g);
        if (((s = s.next), s === null)) {
          if (((s = a.shared.pending), s === null)) break;
          (v = s),
            (s = v.next),
            (v.next = null),
            (a.lastBaseUpdate = v),
            (a.shared.pending = null);
        }
      } while (!0);
      b === null && (u = S),
        (a.baseState = u),
        (a.firstBaseUpdate = m),
        (a.lastBaseUpdate = b),
        o === null && (a.shared.lanes = 0),
        (lt |= i),
        (e.lanes = i),
        (e.memoizedState = S);
    }
  }
  function Ll(e, n) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(n);
  }
  function zl(e, n) {
    var t = e.callbacks;
    if (t !== null)
      for (e.callbacks = null, e = 0; e < t.length; e++) Ll(t[e], n);
  }
  var cr = je(null),
    Ga = je(0);
  function _l(e, n) {
    (e = qn), X(Ga, e), X(cr, n), (qn = e | n.baseLanes);
  }
  function Ui() {
    X(Ga, qn), X(cr, cr.current);
  }
  function $i() {
    (qn = Ga.current), ve(cr), ve(Ga);
  }
  var nn = je(null),
    bn = null;
  function ot(e) {
    var n = e.alternate;
    X(ke, ke.current & 1),
      X(nn, e),
      bn === null &&
        (n === null || cr.current !== null || n.memoizedState !== null) &&
        (bn = e);
  }
  function Bi(e) {
    X(ke, ke.current), X(nn, e), bn === null && (bn = e);
  }
  function Dl(e) {
    e.tag === 22
      ? (X(ke, ke.current), X(nn, e), bn === null && (bn = e))
      : it();
  }
  function it() {
    X(ke, ke.current), X(nn, nn.current);
  }
  function tn(e) {
    ve(nn), bn === e && (bn = null), ve(ke);
  }
  var ke = je(0);
  function Ja(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && ((t = t.dehydrated), t === null || Ks(t) || Xs(t)))
          return n;
      } else if (
        n.tag === 19 &&
        (n.memoizedProps.revealOrder === "forwards" ||
          n.memoizedProps.revealOrder === "backwards" ||
          n.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          n.memoizedProps.revealOrder === "together")
      ) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Rn = 0,
    A = null,
    Z = null,
    Ee = null,
    Za = !1,
    dr = !1,
    It = !1,
    eo = 0,
    Yr = 0,
    fr = null,
    Pm = 0;
  function ye() {
    throw Error(c(321));
  }
  function Hi(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!Ze(e[t], n[t])) return !1;
    return !0;
  }
  function Wi(e, n, t, r, a, o) {
    return (
      (Rn = o),
      (A = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (y.H = e === null || e.memoizedState === null ? mc : os),
      (It = !1),
      (o = t(r, a)),
      (It = !1),
      dr && (o = Fl(n, t, r, a)),
      Tl(e),
      o
    );
  }
  function Tl(e) {
    y.H = Zr;
    var n = Z !== null && Z.next !== null;
    if (((Rn = 0), (Ee = Z = A = null), (Za = !1), (Yr = 0), (fr = null), n))
      throw Error(c(300));
    e === null ||
      Ne ||
      ((e = e.dependencies), e !== null && Wa(e) && (Ne = !0));
  }
  function Fl(e, n, t, r) {
    A = e;
    var a = 0;
    do {
      if ((dr && (fr = null), (Yr = 0), (dr = !1), 25 <= a))
        throw Error(c(301));
      if (((a += 1), (Ee = Z = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        (o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0);
      }
      (y.H = gc), (o = n(t, r));
    } while (dr);
    return o;
  }
  function Lm() {
    var e = y.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == "function" ? Gr(n) : n),
      (e = e.useState()[0]),
      (Z !== null ? Z.memoizedState : null) !== e && (A.flags |= 1024),
      n
    );
  }
  function qi() {
    var e = eo !== 0;
    return (eo = 0), e;
  }
  function Vi(e, n, t) {
    (n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~t);
  }
  function Qi(e) {
    if (Za) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), (e = e.next);
      }
      Za = !1;
    }
    (Rn = 0), (Ee = Z = A = null), (dr = !1), (Yr = eo = 0), (fr = null);
  }
  function Ue() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ee === null ? (A.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee;
  }
  function we() {
    if (Z === null) {
      var e = A.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Z.next;
    var n = Ee === null ? A.memoizedState : Ee.next;
    if (n !== null) (Ee = n), (Z = e);
    else {
      if (e === null)
        throw A.alternate === null ? Error(c(467)) : Error(c(310));
      (Z = e),
        (e = {
          memoizedState: Z.memoizedState,
          baseState: Z.baseState,
          baseQueue: Z.baseQueue,
          queue: Z.queue,
          next: null,
        }),
        Ee === null ? (A.memoizedState = Ee = e) : (Ee = Ee.next = e);
    }
    return Ee;
  }
  function no() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Gr(e) {
    var n = Yr;
    return (
      (Yr += 1),
      fr === null && (fr = []),
      (e = xl(fr, e, n)),
      (n = A),
      (Ee === null ? n.memoizedState : Ee.next) === null &&
        ((n = n.alternate),
        (y.H = n === null || n.memoizedState === null ? mc : os)),
      e
    );
  }
  function to(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Gr(e);
      if (e.$$typeof === K) return Ae(e);
    }
    throw Error(c(438, String(e)));
  }
  function Ki(e) {
    var n = null,
      t = A.updateQueue;
    if ((t !== null && (n = t.memoCache), n == null)) {
      var r = A.alternate;
      r !== null &&
        ((r = r.updateQueue),
        r !== null &&
          ((r = r.memoCache),
          r != null &&
            (n = {
              data: r.data.map(function (a) {
                return a.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      t === null && ((t = no()), (A.updateQueue = t)),
      (t.memoCache = n),
      (t = n.data[n.index]),
      t === void 0)
    )
      for (t = n.data[n.index] = Array(e), r = 0; r < e; r++) t[r] = Ln;
    return n.index++, t;
  }
  function Mn(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function ro(e) {
    var n = we();
    return Xi(n, Z, e);
  }
  function Xi(e, n, t) {
    var r = e.queue;
    if (r === null) throw Error(c(311));
    r.lastRenderedReducer = t;
    var a = e.baseQueue,
      o = r.pending;
    if (o !== null) {
      if (a !== null) {
        var i = a.next;
        (a.next = o.next), (o.next = i);
      }
      (n.baseQueue = a = o), (r.pending = null);
    }
    if (((o = e.baseState), a === null)) e.memoizedState = o;
    else {
      n = a.next;
      var s = (i = null),
        u = null,
        m = n,
        b = !1;
      do {
        var S = m.lane & -536870913;
        if (S !== m.lane ? ($ & S) === S : (Rn & S) === S) {
          var g = m.revertLane;
          if (g === 0)
            u !== null &&
              (u = u.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              S === ir && (b = !0);
          else if ((Rn & g) === g) {
            (m = m.next), g === ir && (b = !0);
            continue;
          } else
            (S = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              u === null ? ((s = u = S), (i = o)) : (u = u.next = S),
              (A.lanes |= g),
              (lt |= g);
          (S = m.action),
            It && t(o, S),
            (o = m.hasEagerState ? m.eagerState : t(o, S));
        } else
          (g = {
            lane: S,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            u === null ? ((s = u = g), (i = o)) : (u = u.next = g),
            (A.lanes |= S),
            (lt |= S);
        m = m.next;
      } while (m !== null && m !== n);
      if (
        (u === null ? (i = o) : (u.next = s),
        !Ze(o, e.memoizedState) && ((Ne = !0), b && ((t = sr), t !== null)))
      )
        throw t;
      (e.memoizedState = o),
        (e.baseState = i),
        (e.baseQueue = u),
        (r.lastRenderedState = o);
    }
    return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function Yi(e) {
    var n = we(),
      t = n.queue;
    if (t === null) throw Error(c(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
      a = t.pending,
      o = n.memoizedState;
    if (a !== null) {
      t.pending = null;
      var i = (a = a.next);
      do (o = e(o, i.action)), (i = i.next);
      while (i !== a);
      Ze(o, n.memoizedState) || (Ne = !0),
        (n.memoizedState = o),
        n.baseQueue === null && (n.baseState = o),
        (t.lastRenderedState = o);
    }
    return [o, r];
  }
  function Al(e, n, t) {
    var r = A,
      a = we(),
      o = H;
    if (o) {
      if (t === void 0) throw Error(c(407));
      t = t();
    } else t = n();
    var i = !Ze((Z || a).memoizedState, t);
    if (
      (i && ((a.memoizedState = t), (Ne = !0)),
      (a = a.queue),
      Zi(Rl.bind(null, r, a, e), [e]),
      a.getSnapshot !== n || i || (Ee !== null && Ee.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        pr(9, { destroy: void 0 }, Il.bind(null, r, a, t, n), null),
        te === null)
      )
        throw Error(c(349));
      o || (Rn & 127) !== 0 || Ol(r, n, t);
    }
    return t;
  }
  function Ol(e, n, t) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: t }),
      (n = A.updateQueue),
      n === null
        ? ((n = no()), (A.updateQueue = n), (n.stores = [e]))
        : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
  }
  function Il(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), Ml(n) && jl(e);
  }
  function Rl(e, n, t) {
    return t(function () {
      Ml(n) && jl(e);
    });
  }
  function Ml(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !Ze(e, t);
    } catch {
      return !0;
    }
  }
  function jl(e) {
    var n = Pt(e, 2);
    n !== null && Ke(n, e, 2);
  }
  function Gi(e) {
    var n = Ue();
    if (typeof e == "function") {
      var t = e;
      if (((e = t()), It)) {
        Xn(!0);
        try {
          t();
        } finally {
          Xn(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mn,
        lastRenderedState: e,
      }),
      n
    );
  }
  function Ul(e, n, t, r) {
    return (e.baseState = t), Xi(e, Z, typeof r == "function" ? r : Mn);
  }
  function zm(e, n, t, r, a) {
    if (io(e)) throw Error(c(485));
    if (((e = n.action), e !== null)) {
      var o = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          o.listeners.push(i);
        },
      };
      y.T !== null ? t(!0) : (o.isTransition = !1),
        r(o),
        (t = n.pending),
        t === null
          ? ((o.next = n.pending = o), $l(n, o))
          : ((o.next = t.next), (n.pending = t.next = o));
    }
  }
  function $l(e, n) {
    var t = n.action,
      r = n.payload,
      a = e.state;
    if (n.isTransition) {
      var o = y.T,
        i = {};
      y.T = i;
      try {
        var s = t(a, r),
          u = y.S;
        u !== null && u(i, s), Bl(e, n, s);
      } catch (m) {
        Ji(e, n, m);
      } finally {
        o !== null && i.types !== null && (o.types = i.types), (y.T = o);
      }
    } else
      try {
        (o = t(a, r)), Bl(e, n, o);
      } catch (m) {
        Ji(e, n, m);
      }
  }
  function Bl(e, n, t) {
    t !== null && typeof t == "object" && typeof t.then == "function"
      ? t.then(
          function (r) {
            Hl(e, n, r);
          },
          function (r) {
            return Ji(e, n, r);
          },
        )
      : Hl(e, n, t);
  }
  function Hl(e, n, t) {
    (n.status = "fulfilled"),
      (n.value = t),
      Wl(n),
      (e.state = t),
      (n = e.pending),
      n !== null &&
        ((t = n.next),
        t === n ? (e.pending = null) : ((t = t.next), (n.next = t), $l(e, t)));
  }
  function Ji(e, n, t) {
    var r = e.pending;
    if (((e.pending = null), r !== null)) {
      r = r.next;
      do (n.status = "rejected"), (n.reason = t), Wl(n), (n = n.next);
      while (n !== r);
    }
    e.action = null;
  }
  function Wl(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function ql(e, n) {
    return n;
  }
  function Vl(e, n) {
    if (H) {
      var t = te.formState;
      if (t !== null) {
        e: {
          var r = A;
          if (H) {
            if (ue) {
              n: {
                for (var a = ue, o = pn; a.nodeType !== 8; ) {
                  if (!o) {
                    a = null;
                    break n;
                  }
                  if (((a = mn(a.nextSibling)), a === null)) {
                    a = null;
                    break n;
                  }
                }
                (o = a.data), (a = o === "F!" || o === "F" ? a : null);
              }
              if (a) {
                (ue = mn(a.nextSibling)), (r = a.data === "F!");
                break e;
              }
            }
            et(r);
          }
          r = !1;
        }
        r && (n = t[0]);
      }
    }
    return (
      (t = Ue()),
      (t.memoizedState = t.baseState = n),
      (r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ql,
        lastRenderedState: n,
      }),
      (t.queue = r),
      (t = dc.bind(null, A, r)),
      (r.dispatch = t),
      (r = Gi(!1)),
      (o = as.bind(null, A, !1, r.queue)),
      (r = Ue()),
      (a = { state: n, dispatch: null, action: e, pending: null }),
      (r.queue = a),
      (t = zm.bind(null, A, a, o, t)),
      (a.dispatch = t),
      (r.memoizedState = e),
      [n, t, !1]
    );
  }
  function Ql(e) {
    var n = we();
    return Kl(n, Z, e);
  }
  function Kl(e, n, t) {
    if (
      ((n = Xi(e, n, ql)[0]),
      (e = ro(Mn)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var r = Gr(n);
      } catch (i) {
        throw i === ur ? Qa : i;
      }
    else r = n;
    n = we();
    var a = n.queue,
      o = a.dispatch;
    return (
      t !== n.memoizedState &&
        ((A.flags |= 2048),
        pr(9, { destroy: void 0 }, _m.bind(null, a, t), null)),
      [r, o, e]
    );
  }
  function _m(e, n) {
    e.action = n;
  }
  function Xl(e) {
    var n = we(),
      t = Z;
    if (t !== null) return Kl(n, t, e);
    we(), (n = n.memoizedState), (t = we());
    var r = t.queue.dispatch;
    return (t.memoizedState = e), [n, r, !1];
  }
  function pr(e, n, t, r) {
    return (
      (e = { tag: e, create: t, deps: r, inst: n, next: null }),
      (n = A.updateQueue),
      n === null && ((n = no()), (A.updateQueue = n)),
      (t = n.lastEffect),
      t === null
        ? (n.lastEffect = e.next = e)
        : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
      e
    );
  }
  function Yl() {
    return we().memoizedState;
  }
  function ao(e, n, t, r) {
    var a = Ue();
    (A.flags |= e),
      (a.memoizedState = pr(
        1 | n,
        { destroy: void 0 },
        t,
        r === void 0 ? null : r,
      ));
  }
  function oo(e, n, t, r) {
    var a = we();
    r = r === void 0 ? null : r;
    var o = a.memoizedState.inst;
    Z !== null && r !== null && Hi(r, Z.memoizedState.deps)
      ? (a.memoizedState = pr(n, o, t, r))
      : ((A.flags |= e), (a.memoizedState = pr(1 | n, o, t, r)));
  }
  function Gl(e, n) {
    ao(8390656, 8, e, n);
  }
  function Zi(e, n) {
    oo(2048, 8, e, n);
  }
  function Dm(e) {
    A.flags |= 4;
    var n = A.updateQueue;
    if (n === null) (n = no()), (A.updateQueue = n), (n.events = [e]);
    else {
      var t = n.events;
      t === null ? (n.events = [e]) : t.push(e);
    }
  }
  function Jl(e) {
    var n = we().memoizedState;
    return (
      Dm({ ref: n, nextImpl: e }),
      function () {
        if ((Q & 2) !== 0) throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      }
    );
  }
  function Zl(e, n) {
    return oo(4, 2, e, n);
  }
  function ec(e, n) {
    return oo(4, 4, e, n);
  }
  function nc(e, n) {
    if (typeof n == "function") {
      e = e();
      var t = n(e);
      return function () {
        typeof t == "function" ? t() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function tc(e, n, t) {
    (t = t != null ? t.concat([e]) : null), oo(4, 4, nc.bind(null, n, e), t);
  }
  function es() {}
  function rc(e, n) {
    var t = we();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return n !== null && Hi(n, r[1]) ? r[0] : ((t.memoizedState = [e, n]), e);
  }
  function ac(e, n) {
    var t = we();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    if (n !== null && Hi(n, r[1])) return r[0];
    if (((r = e()), It)) {
      Xn(!0);
      try {
        e();
      } finally {
        Xn(!1);
      }
    }
    return (t.memoizedState = [r, n]), r;
  }
  function ns(e, n, t) {
    return t === void 0 || ((Rn & 1073741824) !== 0 && ($ & 261930) === 0)
      ? (e.memoizedState = n)
      : ((e.memoizedState = t), (e = od()), (A.lanes |= e), (lt |= e), t);
  }
  function oc(e, n, t, r) {
    return Ze(t, n)
      ? t
      : cr.current !== null
        ? ((e = ns(e, t, r)), Ze(e, n) || (Ne = !0), e)
        : (Rn & 42) === 0 || ((Rn & 1073741824) !== 0 && ($ & 261930) === 0)
          ? ((Ne = !0), (e.memoizedState = t))
          : ((e = od()), (A.lanes |= e), (lt |= e), n);
  }
  function ic(e, n, t, r, a) {
    var o = E.p;
    E.p = o !== 0 && 8 > o ? o : 8;
    var i = y.T,
      s = {};
    (y.T = s), as(e, !1, n, t);
    try {
      var u = a(),
        m = y.S;
      if (
        (m !== null && m(s, u),
        u !== null && typeof u == "object" && typeof u.then == "function")
      ) {
        var b = Cm(u, r);
        Jr(e, n, b, on(e));
      } else Jr(e, n, r, on(e));
    } catch (S) {
      Jr(e, n, { then: function () {}, status: "rejected", reason: S }, on());
    } finally {
      (E.p = o),
        i !== null && s.types !== null && (i.types = s.types),
        (y.T = i);
    }
  }
  function Tm() {}
  function ts(e, n, t, r) {
    if (e.tag !== 5) throw Error(c(476));
    var a = sc(e).queue;
    ic(
      e,
      a,
      n,
      F,
      t === null
        ? Tm
        : function () {
            return uc(e), t(r);
          },
    );
  }
  function sc(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mn,
        lastRenderedState: F,
      },
      next: null,
    };
    var t = {};
    return (
      (n.next = {
        memoizedState: t,
        baseState: t,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Mn,
          lastRenderedState: t,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function uc(e) {
    var n = sc(e);
    n.next === null && (n = e.alternate.memoizedState),
      Jr(e, n.next.queue, {}, on());
  }
  function rs() {
    return Ae(ga);
  }
  function lc() {
    return we().memoizedState;
  }
  function cc() {
    return we().memoizedState;
  }
  function Fm(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var t = on();
          e = rt(t);
          var r = at(n, e, t);
          r !== null && (Ke(r, n, t), Qr(r, n, t)),
            (n = { cache: Ti() }),
            (e.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function Am(e, n, t) {
    var r = on();
    (t = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      io(e)
        ? fc(n, t)
        : ((t = wi(e, n, t, r)), t !== null && (Ke(t, e, r), pc(t, n, r)));
  }
  function dc(e, n, t) {
    var r = on();
    Jr(e, n, t, r);
  }
  function Jr(e, n, t, r) {
    var a = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (io(e)) fc(n, a);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = n.lastRenderedReducer), o !== null)
      )
        try {
          var i = n.lastRenderedState,
            s = o(i, t);
          if (((a.hasEagerState = !0), (a.eagerState = s), Ze(s, i)))
            return Ua(e, n, a, 0), te === null && ja(), !1;
        } catch {}
      if (((t = wi(e, n, a, r)), t !== null))
        return Ke(t, e, r), pc(t, n, r), !0;
    }
    return !1;
  }
  function as(e, n, t, r) {
    if (
      ((r = {
        lane: 2,
        revertLane: Is(),
        gesture: null,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      io(e))
    ) {
      if (n) throw Error(c(479));
    } else (n = wi(e, t, r, 2)), n !== null && Ke(n, e, 2);
  }
  function io(e) {
    var n = e.alternate;
    return e === A || (n !== null && n === A);
  }
  function fc(e, n) {
    dr = Za = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
      (e.pending = n);
  }
  function pc(e, n, t) {
    if ((t & 4194048) !== 0) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), yu(e, t);
    }
  }
  var Zr = {
    readContext: Ae,
    use: to,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useLayoutEffect: ye,
    useInsertionEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useSyncExternalStore: ye,
    useId: ye,
    useHostTransitionStatus: ye,
    useFormState: ye,
    useActionState: ye,
    useOptimistic: ye,
    useMemoCache: ye,
    useCacheRefresh: ye,
  };
  Zr.useEffectEvent = ye;
  var mc = {
      readContext: Ae,
      use: to,
      useCallback: function (e, n) {
        return (Ue().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Ae,
      useEffect: Gl,
      useImperativeHandle: function (e, n, t) {
        (t = t != null ? t.concat([e]) : null),
          ao(4194308, 4, nc.bind(null, n, e), t);
      },
      useLayoutEffect: function (e, n) {
        return ao(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        ao(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var t = Ue();
        n = n === void 0 ? null : n;
        var r = e();
        if (It) {
          Xn(!0);
          try {
            e();
          } finally {
            Xn(!1);
          }
        }
        return (t.memoizedState = [r, n]), r;
      },
      useReducer: function (e, n, t) {
        var r = Ue();
        if (t !== void 0) {
          var a = t(n);
          if (It) {
            Xn(!0);
            try {
              t(n);
            } finally {
              Xn(!1);
            }
          }
        } else a = n;
        return (
          (r.memoizedState = r.baseState = a),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: a,
          }),
          (r.queue = e),
          (e = e.dispatch = Am.bind(null, A, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = Ue();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: function (e) {
        e = Gi(e);
        var n = e.queue,
          t = dc.bind(null, A, n);
        return (n.dispatch = t), [e.memoizedState, t];
      },
      useDebugValue: es,
      useDeferredValue: function (e, n) {
        var t = Ue();
        return ns(t, e, n);
      },
      useTransition: function () {
        var e = Gi(!1);
        return (
          (e = ic.bind(null, A, e.queue, !0, !1)),
          (Ue().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, n, t) {
        var r = A,
          a = Ue();
        if (H) {
          if (t === void 0) throw Error(c(407));
          t = t();
        } else {
          if (((t = n()), te === null)) throw Error(c(349));
          ($ & 127) !== 0 || Ol(r, n, t);
        }
        a.memoizedState = t;
        var o = { value: t, getSnapshot: n };
        return (
          (a.queue = o),
          Gl(Rl.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          pr(9, { destroy: void 0 }, Il.bind(null, r, o, t, n), null),
          t
        );
      },
      useId: function () {
        var e = Ue(),
          n = te.identifierPrefix;
        if (H) {
          var t = En,
            r = xn;
          (t = (r & ~(1 << (32 - Je(r) - 1))).toString(32) + t),
            (n = "_" + n + "R_" + t),
            (t = eo++),
            0 < t && (n += "H" + t.toString(32)),
            (n += "_");
        } else (t = Pm++), (n = "_" + n + "r_" + t.toString(32) + "_");
        return (e.memoizedState = n);
      },
      useHostTransitionStatus: rs,
      useFormState: Vl,
      useActionState: Vl,
      useOptimistic: function (e) {
        var n = Ue();
        n.memoizedState = n.baseState = e;
        var t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = t), (n = as.bind(null, A, !0, t)), (t.dispatch = n), [e, n]
        );
      },
      useMemoCache: Ki,
      useCacheRefresh: function () {
        return (Ue().memoizedState = Fm.bind(null, A));
      },
      useEffectEvent: function (e) {
        var n = Ue(),
          t = { impl: e };
        return (
          (n.memoizedState = t),
          function () {
            if ((Q & 2) !== 0) throw Error(c(440));
            return t.impl.apply(void 0, arguments);
          }
        );
      },
    },
    os = {
      readContext: Ae,
      use: to,
      useCallback: rc,
      useContext: Ae,
      useEffect: Zi,
      useImperativeHandle: tc,
      useInsertionEffect: Zl,
      useLayoutEffect: ec,
      useMemo: ac,
      useReducer: ro,
      useRef: Yl,
      useState: function () {
        return ro(Mn);
      },
      useDebugValue: es,
      useDeferredValue: function (e, n) {
        var t = we();
        return oc(t, Z.memoizedState, e, n);
      },
      useTransition: function () {
        var e = ro(Mn)[0],
          n = we().memoizedState;
        return [typeof e == "boolean" ? e : Gr(e), n];
      },
      useSyncExternalStore: Al,
      useId: lc,
      useHostTransitionStatus: rs,
      useFormState: Ql,
      useActionState: Ql,
      useOptimistic: function (e, n) {
        var t = we();
        return Ul(t, Z, e, n);
      },
      useMemoCache: Ki,
      useCacheRefresh: cc,
    };
  os.useEffectEvent = Jl;
  var gc = {
    readContext: Ae,
    use: to,
    useCallback: rc,
    useContext: Ae,
    useEffect: Zi,
    useImperativeHandle: tc,
    useInsertionEffect: Zl,
    useLayoutEffect: ec,
    useMemo: ac,
    useReducer: Yi,
    useRef: Yl,
    useState: function () {
      return Yi(Mn);
    },
    useDebugValue: es,
    useDeferredValue: function (e, n) {
      var t = we();
      return Z === null ? ns(t, e, n) : oc(t, Z.memoizedState, e, n);
    },
    useTransition: function () {
      var e = Yi(Mn)[0],
        n = we().memoizedState;
      return [typeof e == "boolean" ? e : Gr(e), n];
    },
    useSyncExternalStore: Al,
    useId: lc,
    useHostTransitionStatus: rs,
    useFormState: Xl,
    useActionState: Xl,
    useOptimistic: function (e, n) {
      var t = we();
      return Z !== null
        ? Ul(t, Z, e, n)
        : ((t.baseState = e), [e, t.queue.dispatch]);
    },
    useMemoCache: Ki,
    useCacheRefresh: cc,
  };
  gc.useEffectEvent = Jl;
  function is(e, n, t, r) {
    (n = e.memoizedState),
      (t = t(r, n)),
      (t = t == null ? n : _({}, n, t)),
      (e.memoizedState = t),
      e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var ss = {
    enqueueSetState: function (e, n, t) {
      e = e._reactInternals;
      var r = on(),
        a = rt(r);
      (a.payload = n),
        t != null && (a.callback = t),
        (n = at(e, a, r)),
        n !== null && (Ke(n, e, r), Qr(n, e, r));
    },
    enqueueReplaceState: function (e, n, t) {
      e = e._reactInternals;
      var r = on(),
        a = rt(r);
      (a.tag = 1),
        (a.payload = n),
        t != null && (a.callback = t),
        (n = at(e, a, r)),
        n !== null && (Ke(n, e, r), Qr(n, e, r));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var t = on(),
        r = rt(t);
      (r.tag = 2),
        n != null && (r.callback = n),
        (n = at(e, r, t)),
        n !== null && (Ke(n, e, t), Qr(n, e, t));
    },
  };
  function hc(e, n, t, r, a, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, i)
        : n.prototype && n.prototype.isPureReactComponent
          ? !jr(t, r) || !jr(a, o)
          : !0
    );
  }
  function vc(e, n, t, r) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(t, r),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(t, r),
      n.state !== e && ss.enqueueReplaceState(n, n.state, null);
  }
  function Rt(e, n) {
    var t = n;
    if ("ref" in n) {
      t = {};
      for (var r in n) r !== "ref" && (t[r] = n[r]);
    }
    if ((e = e.defaultProps)) {
      t === n && (t = _({}, t));
      for (var a in e) t[a] === void 0 && (t[a] = e[a]);
    }
    return t;
  }
  function yc(e) {
    Ma(e);
  }
  function bc(e) {
    console.error(e);
  }
  function kc(e) {
    Ma(e);
  }
  function so(e, n) {
    try {
      var t = e.onUncaughtError;
      t(n.value, { componentStack: n.stack });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function wc(e, n, t) {
    try {
      var r = e.onCaughtError;
      r(t.value, {
        componentStack: t.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function us(e, n, t) {
    return (
      (t = rt(t)),
      (t.tag = 3),
      (t.payload = { element: null }),
      (t.callback = function () {
        so(e, n);
      }),
      t
    );
  }
  function Sc(e) {
    return (e = rt(e)), (e.tag = 3), e;
  }
  function xc(e, n, t, r) {
    var a = t.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var o = r.value;
      (e.payload = function () {
        return a(o);
      }),
        (e.callback = function () {
          wc(n, t, r);
        });
    }
    var i = t.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (e.callback = function () {
        wc(n, t, r),
          typeof a != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var s = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function Om(e, n, t, r, a) {
    if (
      ((t.flags |= 32768),
      r !== null && typeof r == "object" && typeof r.then == "function")
    ) {
      if (
        ((n = t.alternate),
        n !== null && or(n, t, a, !0),
        (t = nn.current),
        t !== null)
      ) {
        switch (t.tag) {
          case 31:
          case 13:
            return (
              bn === null ? ko() : t.alternate === null && be === 0 && (be = 3),
              (t.flags &= -257),
              (t.flags |= 65536),
              (t.lanes = a),
              r === Ka
                ? (t.flags |= 16384)
                : ((n = t.updateQueue),
                  n === null ? (t.updateQueue = new Set([r])) : n.add(r),
                  Fs(e, r, a)),
              !1
            );
          case 22:
            return (
              (t.flags |= 65536),
              r === Ka
                ? (t.flags |= 16384)
                : ((n = t.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r]),
                      }),
                      (t.updateQueue = n))
                    : ((t = n.retryQueue),
                      t === null ? (n.retryQueue = new Set([r])) : t.add(r)),
                  Fs(e, r, a)),
              !1
            );
        }
        throw Error(c(435, t.tag));
      }
      return Fs(e, r, a), ko(), !1;
    }
    if (H)
      return (
        (n = nn.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = a),
            r !== Pi && ((e = Error(c(422), { cause: r })), Br(cn(e, t))))
          : (r !== Pi && ((n = Error(c(423), { cause: r })), Br(cn(n, t))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (a &= -a),
            (e.lanes |= a),
            (r = cn(r, t)),
            (a = us(e.stateNode, r, a)),
            Mi(e, a),
            be !== 4 && (be = 2)),
        !1
      );
    var o = Error(c(520), { cause: r });
    if (
      ((o = cn(o, t)),
      sa === null ? (sa = [o]) : sa.push(o),
      be !== 4 && (be = 2),
      n === null)
    )
      return !0;
    (r = cn(r, t)), (t = n);
    do {
      switch (t.tag) {
        case 3:
          return (
            (t.flags |= 65536),
            (e = a & -a),
            (t.lanes |= e),
            (e = us(t.stateNode, r, e)),
            Mi(t, e),
            !1
          );
        case 1:
          if (
            ((n = t.type),
            (o = t.stateNode),
            (t.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (ct === null || !ct.has(o)))))
          )
            return (
              (t.flags |= 65536),
              (a &= -a),
              (t.lanes |= a),
              (a = Sc(a)),
              xc(a, e, t, r),
              Mi(t, a),
              !1
            );
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var ls = Error(c(461)),
    Ne = !1;
  function Oe(e, n, t, r) {
    n.child = e === null ? Pl(n, null, t, r) : Ot(n, e.child, t, r);
  }
  function Ec(e, n, t, r, a) {
    t = t.render;
    var o = n.ref;
    if ("ref" in r) {
      var i = {};
      for (var s in r) s !== "ref" && (i[s] = r[s]);
    } else i = r;
    return (
      Dt(n),
      (r = Wi(e, n, t, i, o, a)),
      (s = qi()),
      e !== null && !Ne
        ? (Vi(e, n, a), jn(e, n, a))
        : (H && s && Ni(n), (n.flags |= 1), Oe(e, n, r, a), n.child)
    );
  }
  function Nc(e, n, t, r, a) {
    if (e === null) {
      var o = t.type;
      return typeof o == "function" &&
        !Si(o) &&
        o.defaultProps === void 0 &&
        t.compare === null
        ? ((n.tag = 15), (n.type = o), Cc(e, n, o, r, a))
        : ((e = Ba(t.type, null, r, n, n.mode, a)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((o = e.child), !vs(e, a))) {
      var i = o.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : jr), t(i, r) && e.ref === n.ref)
      )
        return jn(e, n, a);
    }
    return (
      (n.flags |= 1),
      (e = Fn(o, r)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Cc(e, n, t, r, a) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (jr(o, r) && e.ref === n.ref)
        if (((Ne = !1), (n.pendingProps = r = o), vs(e, a)))
          (e.flags & 131072) !== 0 && (Ne = !0);
        else return (n.lanes = e.lanes), jn(e, n, a);
    }
    return cs(e, n, t, r, a);
  }
  function Pc(e, n, t, r) {
    var a = r.children,
      o = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        n.stateNode === null &&
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      r.mode === "hidden")
    ) {
      if ((n.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | t : t), e !== null)) {
          for (r = n.child = e.child, a = 0; r !== null; )
            (a = a | r.lanes | r.childLanes), (r = r.sibling);
          r = a & ~o;
        } else (r = 0), (n.child = null);
        return Lc(e, n, o, t, r);
      }
      if ((t & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Va(n, o !== null ? o.cachePool : null),
          o !== null ? _l(n, o) : Ui(),
          Dl(n);
      else
        return (
          (r = n.lanes = 536870912),
          Lc(e, n, o !== null ? o.baseLanes | t : t, t, r)
        );
    } else
      o !== null
        ? (Va(n, o.cachePool), _l(n, o), it(), (n.memoizedState = null))
        : (e !== null && Va(n, null), Ui(), it());
    return Oe(e, n, a, t), n.child;
  }
  function ea(e, n) {
    return (
      (e !== null && e.tag === 22) ||
        n.stateNode !== null ||
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.sibling
    );
  }
  function Lc(e, n, t, r, a) {
    var o = Ai();
    return (
      (o = o === null ? null : { parent: xe._currentValue, pool: o }),
      (n.memoizedState = { baseLanes: t, cachePool: o }),
      e !== null && Va(n, null),
      Ui(),
      Dl(n),
      e !== null && or(e, n, r, !0),
      (n.childLanes = a),
      null
    );
  }
  function uo(e, n) {
    return (
      (n = co({ mode: n.mode, children: n.children }, e.mode)),
      (n.ref = e.ref),
      (e.child = n),
      (n.return = e),
      n
    );
  }
  function zc(e, n, t) {
    return (
      Ot(n, e.child, null, t),
      (e = uo(n, n.pendingProps)),
      (e.flags |= 2),
      tn(n),
      (n.memoizedState = null),
      e
    );
  }
  function Im(e, n, t) {
    var r = n.pendingProps,
      a = (n.flags & 128) !== 0;
    if (((n.flags &= -129), e === null)) {
      if (H) {
        if (r.mode === "hidden")
          return (e = uo(n, r)), (n.lanes = 536870912), ea(null, e);
        if (
          (Bi(n),
          (e = ue)
            ? ((e = $d(e, pn)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((n.memoizedState = {
                  dehydrated: e,
                  treeContext: Jn !== null ? { id: xn, overflow: En } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t = fl(e)),
                (t.return = n),
                (n.child = t),
                (Fe = n),
                (ue = null)))
            : (e = null),
          e === null)
        )
          throw et(n);
        return (n.lanes = 536870912), null;
      }
      return uo(n, r);
    }
    var o = e.memoizedState;
    if (o !== null) {
      var i = o.dehydrated;
      if ((Bi(n), a))
        if (n.flags & 256) (n.flags &= -257), (n = zc(e, n, t));
        else if (n.memoizedState !== null)
          (n.child = e.child), (n.flags |= 128), (n = null);
        else throw Error(c(558));
      else if (
        (Ne || or(e, n, t, !1), (a = (t & e.childLanes) !== 0), Ne || a)
      ) {
        if (
          ((r = te),
          r !== null && ((i = bu(r, t)), i !== 0 && i !== o.retryLane))
        )
          throw ((o.retryLane = i), Pt(e, i), Ke(r, e, i), ls);
        ko(), (n = zc(e, n, t));
      } else
        (e = o.treeContext),
          (ue = mn(i.nextSibling)),
          (Fe = n),
          (H = !0),
          (Zn = null),
          (pn = !1),
          e !== null && gl(n, e),
          (n = uo(n, r)),
          (n.flags |= 4096);
      return n;
    }
    return (
      (e = Fn(e.child, { mode: r.mode, children: r.children })),
      (e.ref = n.ref),
      (n.child = e),
      (e.return = n),
      e
    );
  }
  function lo(e, n) {
    var t = n.ref;
    if (t === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object") throw Error(c(284));
      (e === null || e.ref !== t) && (n.flags |= 4194816);
    }
  }
  function cs(e, n, t, r, a) {
    return (
      Dt(n),
      (t = Wi(e, n, t, r, void 0, a)),
      (r = qi()),
      e !== null && !Ne
        ? (Vi(e, n, a), jn(e, n, a))
        : (H && r && Ni(n), (n.flags |= 1), Oe(e, n, t, a), n.child)
    );
  }
  function _c(e, n, t, r, a, o) {
    return (
      Dt(n),
      (n.updateQueue = null),
      (t = Fl(n, r, t, a)),
      Tl(e),
      (r = qi()),
      e !== null && !Ne
        ? (Vi(e, n, o), jn(e, n, o))
        : (H && r && Ni(n), (n.flags |= 1), Oe(e, n, t, o), n.child)
    );
  }
  function Dc(e, n, t, r, a) {
    if ((Dt(n), n.stateNode === null)) {
      var o = nr,
        i = t.contextType;
      typeof i == "object" && i !== null && (o = Ae(i)),
        (o = new t(r, o)),
        (n.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = ss),
        (n.stateNode = o),
        (o._reactInternals = n),
        (o = n.stateNode),
        (o.props = r),
        (o.state = n.memoizedState),
        (o.refs = {}),
        Ii(n),
        (i = t.contextType),
        (o.context = typeof i == "object" && i !== null ? Ae(i) : nr),
        (o.state = n.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (is(n, t, i, r), (o.state = n.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((i = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          i !== o.state && ss.enqueueReplaceState(o, o.state, null),
          Xr(n, r, o, a),
          Kr(),
          (o.state = n.memoizedState)),
        typeof o.componentDidMount == "function" && (n.flags |= 4194308),
        (r = !0);
    } else if (e === null) {
      o = n.stateNode;
      var s = n.memoizedProps,
        u = Rt(t, s);
      o.props = u;
      var m = o.context,
        b = t.contextType;
      (i = nr), typeof b == "object" && b !== null && (i = Ae(b));
      var S = t.getDerivedStateFromProps;
      (b =
        typeof S == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (s = n.pendingProps !== s),
        b ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((s || m !== i) && vc(n, o, r, i)),
        (tt = !1);
      var g = n.memoizedState;
      (o.state = g),
        Xr(n, r, o, a),
        Kr(),
        (m = n.memoizedState),
        s || g !== m || tt
          ? (typeof S == "function" && (is(n, t, S, r), (m = n.memoizedState)),
            (u = tt || hc(n, t, u, r, g, m, i))
              ? (b ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = m)),
            (o.props = r),
            (o.state = m),
            (o.context = i),
            (r = u))
          : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
            (r = !1));
    } else {
      (o = n.stateNode),
        Ri(e, n),
        (i = n.memoizedProps),
        (b = Rt(t, i)),
        (o.props = b),
        (S = n.pendingProps),
        (g = o.context),
        (m = t.contextType),
        (u = nr),
        typeof m == "object" && m !== null && (u = Ae(m)),
        (s = t.getDerivedStateFromProps),
        (m =
          typeof s == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((i !== S || g !== u) && vc(n, o, r, u)),
        (tt = !1),
        (g = n.memoizedState),
        (o.state = g),
        Xr(n, r, o, a),
        Kr();
      var v = n.memoizedState;
      i !== S ||
      g !== v ||
      tt ||
      (e !== null && e.dependencies !== null && Wa(e.dependencies))
        ? (typeof s == "function" && (is(n, t, s, r), (v = n.memoizedState)),
          (b =
            tt ||
            hc(n, t, b, r, g, v, u) ||
            (e !== null && e.dependencies !== null && Wa(e.dependencies)))
            ? (m ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, v, u),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, v, u)),
              typeof o.componentDidUpdate == "function" && (n.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (i === e.memoizedProps && g === e.memoizedState) ||
                (n.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && g === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = v)),
          (o.props = r),
          (o.state = v),
          (o.context = u),
          (r = b))
        : (typeof o.componentDidUpdate != "function" ||
            (i === e.memoizedProps && g === e.memoizedState) ||
            (n.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (i === e.memoizedProps && g === e.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return (
      (o = r),
      lo(e, n),
      (r = (n.flags & 128) !== 0),
      o || r
        ? ((o = n.stateNode),
          (t =
            r && typeof t.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (n.flags |= 1),
          e !== null && r
            ? ((n.child = Ot(n, e.child, null, a)),
              (n.child = Ot(n, null, t, a)))
            : Oe(e, n, t, a),
          (n.memoizedState = o.state),
          (e = n.child))
        : (e = jn(e, n, a)),
      e
    );
  }
  function Tc(e, n, t, r) {
    return zt(), (n.flags |= 256), Oe(e, n, t, r), n.child;
  }
  var ds = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function fs(e) {
    return { baseLanes: e, cachePool: wl() };
  }
  function ps(e, n, t) {
    return (e = e !== null ? e.childLanes & ~t : 0), n && (e |= an), e;
  }
  function Fc(e, n, t) {
    var r = n.pendingProps,
      a = !1,
      o = (n.flags & 128) !== 0,
      i;
    if (
      ((i = o) ||
        (i =
          e !== null && e.memoizedState === null ? !1 : (ke.current & 2) !== 0),
      i && ((a = !0), (n.flags &= -129)),
      (i = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (H) {
        if (
          (a ? ot(n) : it(),
          (e = ue)
            ? ((e = $d(e, pn)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((n.memoizedState = {
                  dehydrated: e,
                  treeContext: Jn !== null ? { id: xn, overflow: En } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t = fl(e)),
                (t.return = n),
                (n.child = t),
                (Fe = n),
                (ue = null)))
            : (e = null),
          e === null)
        )
          throw et(n);
        return Xs(e) ? (n.lanes = 32) : (n.lanes = 536870912), null;
      }
      var s = r.children;
      return (
        (r = r.fallback),
        a
          ? (it(),
            (a = n.mode),
            (s = co({ mode: "hidden", children: s }, a)),
            (r = Lt(r, a, t, null)),
            (s.return = n),
            (r.return = n),
            (s.sibling = r),
            (n.child = s),
            (r = n.child),
            (r.memoizedState = fs(t)),
            (r.childLanes = ps(e, i, t)),
            (n.memoizedState = ds),
            ea(null, r))
          : (ot(n), ms(n, s))
      );
    }
    var u = e.memoizedState;
    if (u !== null && ((s = u.dehydrated), s !== null)) {
      if (o)
        n.flags & 256
          ? (ot(n), (n.flags &= -257), (n = gs(e, n, t)))
          : n.memoizedState !== null
            ? (it(), (n.child = e.child), (n.flags |= 128), (n = null))
            : (it(),
              (s = r.fallback),
              (a = n.mode),
              (r = co({ mode: "visible", children: r.children }, a)),
              (s = Lt(s, a, t, null)),
              (s.flags |= 2),
              (r.return = n),
              (s.return = n),
              (r.sibling = s),
              (n.child = r),
              Ot(n, e.child, null, t),
              (r = n.child),
              (r.memoizedState = fs(t)),
              (r.childLanes = ps(e, i, t)),
              (n.memoizedState = ds),
              (n = ea(null, r)));
      else if ((ot(n), Xs(s))) {
        if (((i = s.nextSibling && s.nextSibling.dataset), i)) var m = i.dgst;
        (i = m),
          (r = Error(c(419))),
          (r.stack = ""),
          (r.digest = i),
          Br({ value: r, source: null, stack: null }),
          (n = gs(e, n, t));
      } else if (
        (Ne || or(e, n, t, !1), (i = (t & e.childLanes) !== 0), Ne || i)
      ) {
        if (
          ((i = te),
          i !== null && ((r = bu(i, t)), r !== 0 && r !== u.retryLane))
        )
          throw ((u.retryLane = r), Pt(e, r), Ke(i, e, r), ls);
        Ks(s) || ko(), (n = gs(e, n, t));
      } else
        Ks(s)
          ? ((n.flags |= 192), (n.child = e.child), (n = null))
          : ((e = u.treeContext),
            (ue = mn(s.nextSibling)),
            (Fe = n),
            (H = !0),
            (Zn = null),
            (pn = !1),
            e !== null && gl(n, e),
            (n = ms(n, r.children)),
            (n.flags |= 4096));
      return n;
    }
    return a
      ? (it(),
        (s = r.fallback),
        (a = n.mode),
        (u = e.child),
        (m = u.sibling),
        (r = Fn(u, { mode: "hidden", children: r.children })),
        (r.subtreeFlags = u.subtreeFlags & 65011712),
        m !== null ? (s = Fn(m, s)) : ((s = Lt(s, a, t, null)), (s.flags |= 2)),
        (s.return = n),
        (r.return = n),
        (r.sibling = s),
        (n.child = r),
        ea(null, r),
        (r = n.child),
        (s = e.child.memoizedState),
        s === null
          ? (s = fs(t))
          : ((a = s.cachePool),
            a !== null
              ? ((u = xe._currentValue),
                (a = a.parent !== u ? { parent: u, pool: u } : a))
              : (a = wl()),
            (s = { baseLanes: s.baseLanes | t, cachePool: a })),
        (r.memoizedState = s),
        (r.childLanes = ps(e, i, t)),
        (n.memoizedState = ds),
        ea(e.child, r))
      : (ot(n),
        (t = e.child),
        (e = t.sibling),
        (t = Fn(t, { mode: "visible", children: r.children })),
        (t.return = n),
        (t.sibling = null),
        e !== null &&
          ((i = n.deletions),
          i === null ? ((n.deletions = [e]), (n.flags |= 16)) : i.push(e)),
        (n.child = t),
        (n.memoizedState = null),
        t);
  }
  function ms(e, n) {
    return (
      (n = co({ mode: "visible", children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function co(e, n) {
    return (e = en(22, e, null, n)), (e.lanes = 0), e;
  }
  function gs(e, n, t) {
    return (
      Ot(n, e.child, null, t),
      (e = ms(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function Ac(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), _i(e.return, n, t);
  }
  function hs(e, n, t, r, a, o) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: t,
          tailMode: a,
          treeForkCount: o,
        })
      : ((i.isBackwards = n),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = t),
        (i.tailMode = a),
        (i.treeForkCount = o));
  }
  function Oc(e, n, t) {
    var r = n.pendingProps,
      a = r.revealOrder,
      o = r.tail;
    r = r.children;
    var i = ke.current,
      s = (i & 2) !== 0;
    if (
      (s ? ((i = (i & 1) | 2), (n.flags |= 128)) : (i &= 1),
      X(ke, i),
      Oe(e, n, r, t),
      (r = H ? $r : 0),
      !s && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ac(e, t, n);
        else if (e.tag === 19) Ac(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    switch (a) {
      case "forwards":
        for (t = n.child, a = null; t !== null; )
          (e = t.alternate),
            e !== null && Ja(e) === null && (a = t),
            (t = t.sibling);
        (t = a),
          t === null
            ? ((a = n.child), (n.child = null))
            : ((a = t.sibling), (t.sibling = null)),
          hs(n, !1, a, t, o, r);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, a = n.child, n.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && Ja(e) === null)) {
            n.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = t), (t = a), (a = e);
        }
        hs(n, !0, t, null, o, r);
        break;
      case "together":
        hs(n, !1, null, null, void 0, r);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function jn(e, n, t) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (lt |= n.lanes),
      (t & n.childLanes) === 0)
    )
      if (e !== null) {
        if ((or(e, n, t, !1), (t & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(c(153));
    if (n.child !== null) {
      for (
        e = n.child, t = Fn(e, e.pendingProps), n.child = t, t.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (t = t.sibling = Fn(e, e.pendingProps)),
          (t.return = n);
      t.sibling = null;
    }
    return n.child;
  }
  function vs(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Wa(e)));
  }
  function Rm(e, n, t) {
    switch (n.tag) {
      case 3:
        wa(n, n.stateNode.containerInfo),
          nt(n, xe, e.memoizedState.cache),
          zt();
        break;
      case 27:
      case 5:
        $o(n);
        break;
      case 4:
        wa(n, n.stateNode.containerInfo);
        break;
      case 10:
        nt(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return (n.flags |= 128), Bi(n), null;
        break;
      case 13:
        var r = n.memoizedState;
        if (r !== null)
          return r.dehydrated !== null
            ? (ot(n), (n.flags |= 128), null)
            : (t & n.child.childLanes) !== 0
              ? Fc(e, n, t)
              : (ot(n), (e = jn(e, n, t)), e !== null ? e.sibling : null);
        ot(n);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (
          ((r = (t & n.childLanes) !== 0),
          r || (or(e, n, t, !1), (r = (t & n.childLanes) !== 0)),
          a)
        ) {
          if (r) return Oc(e, n, t);
          n.flags |= 128;
        }
        if (
          ((a = n.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          X(ke, ke.current),
          r)
        )
          break;
        return null;
      case 22:
        return (n.lanes = 0), Pc(e, n, t, n.pendingProps);
      case 24:
        nt(n, xe, e.memoizedState.cache);
    }
    return jn(e, n, t);
  }
  function Ic(e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) Ne = !0;
      else {
        if (!vs(e, t) && (n.flags & 128) === 0) return (Ne = !1), Rm(e, n, t);
        Ne = (e.flags & 131072) !== 0;
      }
    else (Ne = !1), H && (n.flags & 1048576) !== 0 && ml(n, $r, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          var r = n.pendingProps;
          if (((e = Ft(n.elementType)), (n.type = e), typeof e == "function"))
            Si(e)
              ? ((r = Rt(e, r)), (n.tag = 1), (n = Dc(null, n, e, r, t)))
              : ((n.tag = 0), (n = cs(null, n, e, r, t)));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === he) {
                (n.tag = 11), (n = Ec(null, n, e, r, t));
                break e;
              } else if (a === sn) {
                (n.tag = 14), (n = Nc(null, n, e, r, t));
                break e;
              }
            }
            throw ((n = oe(e) || e), Error(c(306, n, "")));
          }
        }
        return n;
      case 0:
        return cs(e, n, n.type, n.pendingProps, t);
      case 1:
        return (r = n.type), (a = Rt(r, n.pendingProps)), Dc(e, n, r, a, t);
      case 3:
        e: {
          if ((wa(n, n.stateNode.containerInfo), e === null))
            throw Error(c(387));
          r = n.pendingProps;
          var o = n.memoizedState;
          (a = o.element), Ri(e, n), Xr(n, r, null, t);
          var i = n.memoizedState;
          if (
            ((r = i.cache),
            nt(n, xe, r),
            r !== o.cache && Di(n, [xe], t, !0),
            Kr(),
            (r = i.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: r, isDehydrated: !1, cache: i.cache }),
              (n.updateQueue.baseState = o),
              (n.memoizedState = o),
              n.flags & 256)
            ) {
              n = Tc(e, n, r, t);
              break e;
            } else if (r !== a) {
              (a = cn(Error(c(424)), n)), Br(a), (n = Tc(e, n, r, t));
              break e;
            } else
              for (
                e = n.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  ue = mn(e.firstChild),
                  Fe = n,
                  H = !0,
                  Zn = null,
                  pn = !0,
                  t = Pl(n, null, r, t),
                  n.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
          else {
            if ((zt(), r === a)) {
              n = jn(e, n, t);
              break e;
            }
            Oe(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          lo(e, n),
          e === null
            ? (t = Qd(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = t)
              : H ||
                ((t = n.type),
                (e = n.pendingProps),
                (r = Po(Kn.current).createElement(t)),
                (r[Te] = n),
                (r[Be] = e),
                Ie(r, t, e),
                _e(r),
                (n.stateNode = r))
            : (n.memoizedState = Qd(
                n.type,
                e.memoizedProps,
                n.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          $o(n),
          e === null &&
            H &&
            ((r = n.stateNode = Wd(n.type, n.pendingProps, Kn.current)),
            (Fe = n),
            (pn = !0),
            (a = ue),
            mt(n.type) ? ((Ys = a), (ue = mn(r.firstChild))) : (ue = a)),
          Oe(e, n, n.pendingProps.children, t),
          lo(e, n),
          e === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          e === null &&
            H &&
            ((a = r = ue) &&
              ((r = pg(r, n.type, n.pendingProps, pn)),
              r !== null
                ? ((n.stateNode = r),
                  (Fe = n),
                  (ue = mn(r.firstChild)),
                  (pn = !1),
                  (a = !0))
                : (a = !1)),
            a || et(n)),
          $o(n),
          (a = n.type),
          (o = n.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (r = o.children),
          qs(a, o) ? (r = null) : i !== null && qs(a, i) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((a = Wi(e, n, Lm, null, null, t)), (ga._currentValue = a)),
          lo(e, n),
          Oe(e, n, r, t),
          n.child
        );
      case 6:
        return (
          e === null &&
            H &&
            ((e = t = ue) &&
              ((t = mg(t, n.pendingProps, pn)),
              t !== null
                ? ((n.stateNode = t), (Fe = n), (ue = null), (e = !0))
                : (e = !1)),
            e || et(n)),
          null
        );
      case 13:
        return Fc(e, n, t);
      case 4:
        return (
          wa(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = Ot(n, null, r, t)) : Oe(e, n, r, t),
          n.child
        );
      case 11:
        return Ec(e, n, n.type, n.pendingProps, t);
      case 7:
        return Oe(e, n, n.pendingProps, t), n.child;
      case 8:
        return Oe(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Oe(e, n, n.pendingProps.children, t), n.child;
      case 10:
        return (
          (r = n.pendingProps),
          nt(n, n.type, r.value),
          Oe(e, n, r.children, t),
          n.child
        );
      case 9:
        return (
          (a = n.type._context),
          (r = n.pendingProps.children),
          Dt(n),
          (a = Ae(a)),
          (r = r(a)),
          (n.flags |= 1),
          Oe(e, n, r, t),
          n.child
        );
      case 14:
        return Nc(e, n, n.type, n.pendingProps, t);
      case 15:
        return Cc(e, n, n.type, n.pendingProps, t);
      case 19:
        return Oc(e, n, t);
      case 31:
        return Im(e, n, t);
      case 22:
        return Pc(e, n, t, n.pendingProps);
      case 24:
        return (
          Dt(n),
          (r = Ae(xe)),
          e === null
            ? ((a = Ai()),
              a === null &&
                ((a = te),
                (o = Ti()),
                (a.pooledCache = o),
                o.refCount++,
                o !== null && (a.pooledCacheLanes |= t),
                (a = o)),
              (n.memoizedState = { parent: r, cache: a }),
              Ii(n),
              nt(n, xe, a))
            : ((e.lanes & t) !== 0 && (Ri(e, n), Xr(n, null, null, t), Kr()),
              (a = e.memoizedState),
              (o = n.memoizedState),
              a.parent !== r
                ? ((a = { parent: r, cache: r }),
                  (n.memoizedState = a),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = a),
                  nt(n, xe, r))
                : ((r = o.cache),
                  nt(n, xe, r),
                  r !== a.cache && Di(n, [xe], t, !0))),
          Oe(e, n, n.pendingProps.children, t),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(c(156, n.tag));
  }
  function Un(e) {
    e.flags |= 4;
  }
  function ys(e, n, t, r, a) {
    if (((n = (e.mode & 32) !== 0) && (n = !1), n)) {
      if (((e.flags |= 16777216), (a & 335544128) === a))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (ld()) e.flags |= 8192;
        else throw ((At = Ka), Oi);
    } else e.flags &= -16777217;
  }
  function Rc(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Jd(n)))
      if (ld()) e.flags |= 8192;
      else throw ((At = Ka), Oi);
  }
  function fo(e, n) {
    n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? hu() : 536870912), (e.lanes |= n), (vr |= n));
  }
  function na(e, n) {
    if (!H)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), (n = n.sibling);
          t === null ? (e.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function le(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      t = 0,
      r = 0;
    if (n)
      for (var a = e.child; a !== null; )
        (t |= a.lanes | a.childLanes),
          (r |= a.subtreeFlags & 65011712),
          (r |= a.flags & 65011712),
          (a.return = e),
          (a = a.sibling);
    else
      for (a = e.child; a !== null; )
        (t |= a.lanes | a.childLanes),
          (r |= a.subtreeFlags),
          (r |= a.flags),
          (a.return = e),
          (a = a.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
  }
  function Mm(e, n, t) {
    var r = n.pendingProps;
    switch ((Ci(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return le(n), null;
      case 1:
        return le(n), null;
      case 3:
        return (
          (t = n.stateNode),
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          n.memoizedState.cache !== r && (n.flags |= 2048),
          In(xe),
          $t(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (e === null || e.child === null) &&
            (ar(n)
              ? Un(n)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Li())),
          le(n),
          null
        );
      case 26:
        var a = n.type,
          o = n.memoizedState;
        return (
          e === null
            ? (Un(n),
              o !== null ? (le(n), Rc(n, o)) : (le(n), ys(n, a, null, r, t)))
            : o
              ? o !== e.memoizedState
                ? (Un(n), le(n), Rc(n, o))
                : (le(n), (n.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== r && Un(n),
                le(n),
                ys(n, a, e, r, t)),
          null
        );
      case 27:
        if (
          (Sa(n),
          (t = Kn.current),
          (a = n.type),
          e !== null && n.stateNode != null)
        )
          e.memoizedProps !== r && Un(n);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(c(166));
            return le(n), null;
          }
          (e = ze.current),
            ar(n) ? hl(n) : ((e = Wd(a, r, t)), (n.stateNode = e), Un(n));
        }
        return le(n), null;
      case 5:
        if ((Sa(n), (a = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== r && Un(n);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(c(166));
            return le(n), null;
          }
          if (((o = ze.current), ar(n))) hl(n);
          else {
            var i = Po(Kn.current);
            switch (o) {
              case 1:
                o = i.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                o = i.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    o = i.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    o = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  case "script":
                    (o = i.createElement("div")),
                      (o.innerHTML = "<script></script>"),
                      (o = o.removeChild(o.firstChild));
                    break;
                  case "select":
                    (o =
                      typeof r.is == "string"
                        ? i.createElement("select", { is: r.is })
                        : i.createElement("select")),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size);
                    break;
                  default:
                    o =
                      typeof r.is == "string"
                        ? i.createElement(a, { is: r.is })
                        : i.createElement(a);
                }
            }
            (o[Te] = n), (o[Be] = r);
            e: for (i = n.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) o.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === n) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === n) break e;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
            n.stateNode = o;
            e: switch ((Ie(o, a, r), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
            r && Un(n);
          }
        }
        return (
          le(n),
          ys(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, t),
          null
        );
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== r && Un(n);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(c(166));
          if (((e = Kn.current), ar(n))) {
            if (
              ((e = n.stateNode),
              (t = n.memoizedProps),
              (r = null),
              (a = Fe),
              a !== null)
            )
              switch (a.tag) {
                case 27:
                case 5:
                  r = a.memoizedProps;
              }
            (e[Te] = n),
              (e = !!(
                e.nodeValue === t ||
                (r !== null && r.suppressHydrationWarning === !0) ||
                Fd(e.nodeValue, t)
              )),
              e || et(n, !0);
          } else (e = Po(e).createTextNode(r)), (e[Te] = n), (n.stateNode = e);
        }
        return le(n), null;
      case 31:
        if (((t = n.memoizedState), e === null || e.memoizedState !== null)) {
          if (((r = ar(n)), t !== null)) {
            if (e === null) {
              if (!r) throw Error(c(318));
              if (
                ((e = n.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(c(557));
              e[Te] = n;
            } else
              zt(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            le(n), (e = !1);
          } else
            (t = Li()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = t),
              (e = !0);
          if (!e) return n.flags & 256 ? (tn(n), n) : (tn(n), null);
          if ((n.flags & 128) !== 0) throw Error(c(558));
        }
        return le(n), null;
      case 13:
        if (
          ((r = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((a = ar(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (
                ((a = n.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(c(317));
              a[Te] = n;
            } else
              zt(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            le(n), (a = !1);
          } else
            (a = Li()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (a = !0);
          if (!a) return n.flags & 256 ? (tn(n), n) : (tn(n), null);
        }
        return (
          tn(n),
          (n.flags & 128) !== 0
            ? ((n.lanes = t), n)
            : ((t = r !== null),
              (e = e !== null && e.memoizedState !== null),
              t &&
                ((r = n.child),
                (a = null),
                r.alternate !== null &&
                  r.alternate.memoizedState !== null &&
                  r.alternate.memoizedState.cachePool !== null &&
                  (a = r.alternate.memoizedState.cachePool.pool),
                (o = null),
                r.memoizedState !== null &&
                  r.memoizedState.cachePool !== null &&
                  (o = r.memoizedState.cachePool.pool),
                o !== a && (r.flags |= 2048)),
              t !== e && t && (n.child.flags |= 8192),
              fo(n, n.updateQueue),
              le(n),
              null)
        );
      case 4:
        return $t(), e === null && Us(n.stateNode.containerInfo), le(n), null;
      case 10:
        return In(n.type), le(n), null;
      case 19:
        if ((ve(ke), (r = n.memoizedState), r === null)) return le(n), null;
        if (((a = (n.flags & 128) !== 0), (o = r.rendering), o === null))
          if (a) na(r, !1);
          else {
            if (be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((o = Ja(e)), o !== null)) {
                  for (
                    n.flags |= 128,
                      na(r, !1),
                      e = o.updateQueue,
                      n.updateQueue = e,
                      fo(n, e),
                      n.subtreeFlags = 0,
                      e = t,
                      t = n.child;
                    t !== null;

                  )
                    dl(t, e), (t = t.sibling);
                  return (
                    X(ke, (ke.current & 1) | 2),
                    H && An(n, r.treeForkCount),
                    n.child
                  );
                }
                e = e.sibling;
              }
            r.tail !== null &&
              Ye() > vo &&
              ((n.flags |= 128), (a = !0), na(r, !1), (n.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Ja(o)), e !== null)) {
              if (
                ((n.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                fo(n, e),
                na(r, !0),
                r.tail === null &&
                  r.tailMode === "hidden" &&
                  !o.alternate &&
                  !H)
              )
                return le(n), null;
            } else
              2 * Ye() - r.renderingStartTime > vo &&
                t !== 536870912 &&
                ((n.flags |= 128), (a = !0), na(r, !1), (n.lanes = 4194304));
          r.isBackwards
            ? ((o.sibling = n.child), (n.child = o))
            : ((e = r.last),
              e !== null ? (e.sibling = o) : (n.child = o),
              (r.last = o));
        }
        return r.tail !== null
          ? ((e = r.tail),
            (r.rendering = e),
            (r.tail = e.sibling),
            (r.renderingStartTime = Ye()),
            (e.sibling = null),
            (t = ke.current),
            X(ke, a ? (t & 1) | 2 : t & 1),
            H && An(n, r.treeForkCount),
            e)
          : (le(n), null);
      case 22:
      case 23:
        return (
          tn(n),
          $i(),
          (r = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== r && (n.flags |= 8192)
            : r && (n.flags |= 8192),
          r
            ? (t & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (le(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : le(n),
          (t = n.updateQueue),
          t !== null && fo(n, t.retryQueue),
          (t = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (t = e.memoizedState.cachePool.pool),
          (r = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (r = n.memoizedState.cachePool.pool),
          r !== t && (n.flags |= 2048),
          e !== null && ve(Tt),
          null
        );
      case 24:
        return (
          (t = null),
          e !== null && (t = e.memoizedState.cache),
          n.memoizedState.cache !== t && (n.flags |= 2048),
          In(xe),
          le(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, n.tag));
  }
  function jm(e, n) {
    switch ((Ci(n), n.tag)) {
      case 1:
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          In(xe),
          $t(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Sa(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if ((tn(n), n.alternate === null)) throw Error(c(340));
          zt();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 13:
        if (
          (tn(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(c(340));
          zt();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return ve(ke), null;
      case 4:
        return $t(), null;
      case 10:
        return In(n.type), null;
      case 22:
      case 23:
        return (
          tn(n),
          $i(),
          e !== null && ve(Tt),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return In(xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Mc(e, n) {
    switch ((Ci(n), n.tag)) {
      case 3:
        In(xe), $t();
        break;
      case 26:
      case 27:
      case 5:
        Sa(n);
        break;
      case 4:
        $t();
        break;
      case 31:
        n.memoizedState !== null && tn(n);
        break;
      case 13:
        tn(n);
        break;
      case 19:
        ve(ke);
        break;
      case 10:
        In(n.type);
        break;
      case 22:
      case 23:
        tn(n), $i(), e !== null && ve(Tt);
        break;
      case 24:
        In(xe);
    }
  }
  function ta(e, n) {
    try {
      var t = n.updateQueue,
        r = t !== null ? t.lastEffect : null;
      if (r !== null) {
        var a = r.next;
        t = a;
        do {
          if ((t.tag & e) === e) {
            r = void 0;
            var o = t.create,
              i = t.inst;
            (r = o()), (i.destroy = r);
          }
          t = t.next;
        } while (t !== a);
      }
    } catch (s) {
      J(n, n.return, s);
    }
  }
  function st(e, n, t) {
    try {
      var r = n.updateQueue,
        a = r !== null ? r.lastEffect : null;
      if (a !== null) {
        var o = a.next;
        r = o;
        do {
          if ((r.tag & e) === e) {
            var i = r.inst,
              s = i.destroy;
            if (s !== void 0) {
              (i.destroy = void 0), (a = n);
              var u = t,
                m = s;
              try {
                m();
              } catch (b) {
                J(a, u, b);
              }
            }
          }
          r = r.next;
        } while (r !== o);
      }
    } catch (b) {
      J(n, n.return, b);
    }
  }
  function jc(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var t = e.stateNode;
      try {
        zl(n, t);
      } catch (r) {
        J(e, e.return, r);
      }
    }
  }
  function Uc(e, n, t) {
    (t.props = Rt(e.type, e.memoizedProps)), (t.state = e.memoizedState);
    try {
      t.componentWillUnmount();
    } catch (r) {
      J(e, n, r);
    }
  }
  function ra(e, n) {
    try {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof t == "function" ? (e.refCleanup = t(r)) : (t.current = r);
      }
    } catch (a) {
      J(e, n, a);
    }
  }
  function Nn(e, n) {
    var t = e.ref,
      r = e.refCleanup;
    if (t !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (a) {
          J(e, n, a);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (a) {
          J(e, n, a);
        }
      else t.current = null;
  }
  function $c(e) {
    var n = e.type,
      t = e.memoizedProps,
      r = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && r.focus();
          break e;
        case "img":
          t.src ? (r.src = t.src) : t.srcSet && (r.srcset = t.srcSet);
      }
    } catch (a) {
      J(e, e.return, a);
    }
  }
  function bs(e, n, t) {
    try {
      var r = e.stateNode;
      sg(r, e.type, t, n), (r[Be] = n);
    } catch (a) {
      J(e, e.return, a);
    }
  }
  function Bc(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && mt(e.type)) ||
      e.tag === 4
    );
  }
  function ks(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && mt(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ws(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        n
          ? (t.nodeType === 9
              ? t.body
              : t.nodeName === "HTML"
                ? t.ownerDocument.body
                : t
            ).insertBefore(e, n)
          : ((n =
              t.nodeType === 9
                ? t.body
                : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t),
            n.appendChild(e),
            (t = t._reactRootContainer),
            t != null || n.onclick !== null || (n.onclick = Dn));
    else if (
      r !== 4 &&
      (r === 27 && mt(e.type) && ((t = e.stateNode), (n = null)),
      (e = e.child),
      e !== null)
    )
      for (ws(e, n, t), e = e.sibling; e !== null; )
        ws(e, n, t), (e = e.sibling);
  }
  function po(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (
      r !== 4 &&
      (r === 27 && mt(e.type) && (t = e.stateNode), (e = e.child), e !== null)
    )
      for (po(e, n, t), e = e.sibling; e !== null; )
        po(e, n, t), (e = e.sibling);
  }
  function Hc(e) {
    var n = e.stateNode,
      t = e.memoizedProps;
    try {
      for (var r = e.type, a = n.attributes; a.length; )
        n.removeAttributeNode(a[0]);
      Ie(n, r, t), (n[Te] = e), (n[Be] = t);
    } catch (o) {
      J(e, e.return, o);
    }
  }
  var $n = !1,
    Ce = !1,
    Ss = !1,
    Wc = typeof WeakSet == "function" ? WeakSet : Set,
    De = null;
  function Um(e, n) {
    if (((e = e.containerInfo), (Hs = Ao), (e = tl(e)), gi(e))) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = ((t = e.ownerDocument) && t.defaultView) || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var a = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, o.nodeType;
            } catch {
              t = null;
              break e;
            }
            var i = 0,
              s = -1,
              u = -1,
              m = 0,
              b = 0,
              S = e,
              g = null;
            n: for (;;) {
              for (
                var v;
                S !== t || (a !== 0 && S.nodeType !== 3) || (s = i + a),
                  S !== o || (r !== 0 && S.nodeType !== 3) || (u = i + r),
                  S.nodeType === 3 && (i += S.nodeValue.length),
                  (v = S.firstChild) !== null;

              )
                (g = S), (S = v);
              for (;;) {
                if (S === e) break n;
                if (
                  (g === t && ++m === a && (s = i),
                  g === o && ++b === r && (u = i),
                  (v = S.nextSibling) !== null)
                )
                  break;
                (S = g), (g = S.parentNode);
              }
              S = v;
            }
            t = s === -1 || u === -1 ? null : { start: s, end: u };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      Ws = { focusedElem: e, selectionRange: t }, Ao = !1, De = n;
      De !== null;

    )
      if (
        ((n = De), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = n), (De = e);
      else
        for (; De !== null; ) {
          switch (((n = De), (o = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = n.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (t = 0; t < e.length; t++)
                  (a = e[t]), (a.ref.impl = a.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && o !== null) {
                (e = void 0),
                  (t = n),
                  (a = o.memoizedProps),
                  (o = o.memoizedState),
                  (r = t.stateNode);
                try {
                  var N = Rt(t.type, a);
                  (e = r.getSnapshotBeforeUpdate(N, o)),
                    (r.__reactInternalSnapshotBeforeUpdate = e);
                } catch (D) {
                  J(t, t.return, D);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (t = e.nodeType), t === 9)
                )
                  Qs(e);
                else if (t === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qs(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (De = e);
            break;
          }
          De = n.return;
        }
  }
  function qc(e, n, t) {
    var r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Hn(e, t), r & 4 && ta(5, t);
        break;
      case 1:
        if ((Hn(e, t), r & 4))
          if (((e = t.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (i) {
              J(t, t.return, i);
            }
          else {
            var a = Rt(t.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(a, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              J(t, t.return, i);
            }
          }
        r & 64 && jc(t), r & 512 && ra(t, t.return);
        break;
      case 3:
        if ((Hn(e, t), r & 64 && ((e = t.updateQueue), e !== null))) {
          if (((n = null), t.child !== null))
            switch (t.child.tag) {
              case 27:
              case 5:
                n = t.child.stateNode;
                break;
              case 1:
                n = t.child.stateNode;
            }
          try {
            zl(e, n);
          } catch (i) {
            J(t, t.return, i);
          }
        }
        break;
      case 27:
        n === null && r & 4 && Hc(t);
      case 26:
      case 5:
        Hn(e, t), n === null && r & 4 && $c(t), r & 512 && ra(t, t.return);
        break;
      case 12:
        Hn(e, t);
        break;
      case 31:
        Hn(e, t), r & 4 && Kc(e, t);
        break;
      case 13:
        Hn(e, t),
          r & 4 && Xc(e, t),
          r & 64 &&
            ((e = t.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((t = Xm.bind(null, t)), gg(e, t))));
        break;
      case 22:
        if (((r = t.memoizedState !== null || $n), !r)) {
          (n = (n !== null && n.memoizedState !== null) || Ce), (a = $n);
          var o = Ce;
          ($n = r),
            (Ce = n) && !o ? Wn(e, t, (t.subtreeFlags & 8772) !== 0) : Hn(e, t),
            ($n = a),
            (Ce = o);
        }
        break;
      case 30:
        break;
      default:
        Hn(e, t);
    }
  }
  function Vc(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), Vc(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && Jo(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var ge = null,
    We = !1;
  function Bn(e, n, t) {
    for (t = t.child; t !== null; ) Qc(e, n, t), (t = t.sibling);
  }
  function Qc(e, n, t) {
    if (Ge && typeof Ge.onCommitFiberUnmount == "function")
      try {
        Ge.onCommitFiberUnmount(Pr, t);
      } catch {}
    switch (t.tag) {
      case 26:
        Ce || Nn(t, n),
          Bn(e, n, t),
          t.memoizedState
            ? t.memoizedState.count--
            : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t));
        break;
      case 27:
        Ce || Nn(t, n);
        var r = ge,
          a = We;
        mt(t.type) && ((ge = t.stateNode), (We = !1)),
          Bn(e, n, t),
          fa(t.stateNode),
          (ge = r),
          (We = a);
        break;
      case 5:
        Ce || Nn(t, n);
      case 6:
        if (
          ((r = ge),
          (a = We),
          (ge = null),
          Bn(e, n, t),
          (ge = r),
          (We = a),
          ge !== null)
        )
          if (We)
            try {
              (ge.nodeType === 9
                ? ge.body
                : ge.nodeName === "HTML"
                  ? ge.ownerDocument.body
                  : ge
              ).removeChild(t.stateNode);
            } catch (o) {
              J(t, n, o);
            }
          else
            try {
              ge.removeChild(t.stateNode);
            } catch (o) {
              J(t, n, o);
            }
        break;
      case 18:
        ge !== null &&
          (We
            ? ((e = ge),
              jd(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                t.stateNode,
              ),
              Nr(e))
            : jd(ge, t.stateNode));
        break;
      case 4:
        (r = ge),
          (a = We),
          (ge = t.stateNode.containerInfo),
          (We = !0),
          Bn(e, n, t),
          (ge = r),
          (We = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        st(2, t, n), Ce || st(4, t, n), Bn(e, n, t);
        break;
      case 1:
        Ce ||
          (Nn(t, n),
          (r = t.stateNode),
          typeof r.componentWillUnmount == "function" && Uc(t, n, r)),
          Bn(e, n, t);
        break;
      case 21:
        Bn(e, n, t);
        break;
      case 22:
        (Ce = (r = Ce) || t.memoizedState !== null), Bn(e, n, t), (Ce = r);
        break;
      default:
        Bn(e, n, t);
    }
  }
  function Kc(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Nr(e);
      } catch (t) {
        J(n, n.return, t);
      }
    }
  }
  function Xc(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Nr(e);
      } catch (t) {
        J(n, n.return, t);
      }
  }
  function $m(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Wc()), n;
      case 22:
        return (
          (e = e.stateNode),
          (n = e._retryCache),
          n === null && (n = e._retryCache = new Wc()),
          n
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function mo(e, n) {
    var t = $m(e);
    n.forEach(function (r) {
      if (!t.has(r)) {
        t.add(r);
        var a = Ym.bind(null, e, r);
        r.then(a, a);
      }
    });
  }
  function qe(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var a = t[r],
          o = e,
          i = n,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (mt(s.type)) {
                (ge = s.stateNode), (We = !1);
                break e;
              }
              break;
            case 5:
              (ge = s.stateNode), (We = !1);
              break e;
            case 3:
            case 4:
              (ge = s.stateNode.containerInfo), (We = !0);
              break e;
          }
          s = s.return;
        }
        if (ge === null) throw Error(c(160));
        Qc(o, i, a),
          (ge = null),
          (We = !1),
          (o = a.alternate),
          o !== null && (o.return = null),
          (a.return = null);
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; ) Yc(n, e), (n = n.sibling);
  }
  var kn = null;
  function Yc(e, n) {
    var t = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        qe(n, e),
          Ve(e),
          r & 4 && (st(3, e, e.return), ta(3, e), st(5, e, e.return));
        break;
      case 1:
        qe(n, e),
          Ve(e),
          r & 512 && (Ce || t === null || Nn(t, t.return)),
          r & 64 &&
            $n &&
            ((e = e.updateQueue),
            e !== null &&
              ((r = e.callbacks),
              r !== null &&
                ((t = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = t === null ? r : t.concat(r)))));
        break;
      case 26:
        var a = kn;
        if (
          (qe(n, e),
          Ve(e),
          r & 512 && (Ce || t === null || Nn(t, t.return)),
          r & 4)
        ) {
          var o = t !== null ? t.memoizedState : null;
          if (((r = e.memoizedState), t === null))
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  (r = e.type),
                    (t = e.memoizedProps),
                    (a = a.ownerDocument || a);
                  n: switch (r) {
                    case "title":
                      (o = a.getElementsByTagName("title")[0]),
                        (!o ||
                          o[_r] ||
                          o[Te] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = a.createElement(r)),
                          a.head.insertBefore(
                            o,
                            a.querySelector("head > title"),
                          )),
                        Ie(o, r, t),
                        (o[Te] = e),
                        _e(o),
                        (r = o);
                      break e;
                    case "link":
                      var i = Yd("link", "href", a).get(r + (t.href || ""));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (
                            ((o = i[s]),
                            o.getAttribute("href") ===
                              (t.href == null || t.href === ""
                                ? null
                                : t.href) &&
                              o.getAttribute("rel") ===
                                (t.rel == null ? null : t.rel) &&
                              o.getAttribute("title") ===
                                (t.title == null ? null : t.title) &&
                              o.getAttribute("crossorigin") ===
                                (t.crossOrigin == null ? null : t.crossOrigin))
                          ) {
                            i.splice(s, 1);
                            break n;
                          }
                      }
                      (o = a.createElement(r)),
                        Ie(o, r, t),
                        a.head.appendChild(o);
                      break;
                    case "meta":
                      if (
                        (i = Yd("meta", "content", a).get(
                          r + (t.content || ""),
                        ))
                      ) {
                        for (s = 0; s < i.length; s++)
                          if (
                            ((o = i[s]),
                            o.getAttribute("content") ===
                              (t.content == null ? null : "" + t.content) &&
                              o.getAttribute("name") ===
                                (t.name == null ? null : t.name) &&
                              o.getAttribute("property") ===
                                (t.property == null ? null : t.property) &&
                              o.getAttribute("http-equiv") ===
                                (t.httpEquiv == null ? null : t.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (t.charSet == null ? null : t.charSet))
                          ) {
                            i.splice(s, 1);
                            break n;
                          }
                      }
                      (o = a.createElement(r)),
                        Ie(o, r, t),
                        a.head.appendChild(o);
                      break;
                    default:
                      throw Error(c(468, r));
                  }
                  (o[Te] = e), _e(o), (r = o);
                }
                e.stateNode = r;
              } else Gd(a, e.type, e.stateNode);
            else e.stateNode = Xd(a, r, e.memoizedProps);
          else
            o !== r
              ? (o === null
                  ? t.stateNode !== null &&
                    ((t = t.stateNode), t.parentNode.removeChild(t))
                  : o.count--,
                r === null
                  ? Gd(a, e.type, e.stateNode)
                  : Xd(a, r, e.memoizedProps))
              : r === null &&
                e.stateNode !== null &&
                bs(e, e.memoizedProps, t.memoizedProps);
        }
        break;
      case 27:
        qe(n, e),
          Ve(e),
          r & 512 && (Ce || t === null || Nn(t, t.return)),
          t !== null && r & 4 && bs(e, e.memoizedProps, t.memoizedProps);
        break;
      case 5:
        if (
          (qe(n, e),
          Ve(e),
          r & 512 && (Ce || t === null || Nn(t, t.return)),
          e.flags & 32)
        ) {
          a = e.stateNode;
          try {
            Kt(a, "");
          } catch (N) {
            J(e, e.return, N);
          }
        }
        r & 4 &&
          e.stateNode != null &&
          ((a = e.memoizedProps), bs(e, a, t !== null ? t.memoizedProps : a)),
          r & 1024 && (Ss = !0);
        break;
      case 6:
        if ((qe(n, e), Ve(e), r & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          (r = e.memoizedProps), (t = e.stateNode);
          try {
            t.nodeValue = r;
          } catch (N) {
            J(e, e.return, N);
          }
        }
        break;
      case 3:
        if (
          ((_o = null),
          (a = kn),
          (kn = Lo(n.containerInfo)),
          qe(n, e),
          (kn = a),
          Ve(e),
          r & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Nr(n.containerInfo);
          } catch (N) {
            J(e, e.return, N);
          }
        Ss && ((Ss = !1), Gc(e));
        break;
      case 4:
        (r = kn),
          (kn = Lo(e.stateNode.containerInfo)),
          qe(n, e),
          Ve(e),
          (kn = r);
        break;
      case 12:
        qe(n, e), Ve(e);
        break;
      case 31:
        qe(n, e),
          Ve(e),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), mo(e, r)));
        break;
      case 13:
        qe(n, e),
          Ve(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (t !== null && t.memoizedState !== null) &&
            (ho = Ye()),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), mo(e, r)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var u = t !== null && t.memoizedState !== null,
          m = $n,
          b = Ce;
        if (
          (($n = m || a),
          (Ce = b || u),
          qe(n, e),
          (Ce = b),
          ($n = m),
          Ve(e),
          r & 8192)
        )
          e: for (
            n = e.stateNode,
              n._visibility = a ? n._visibility & -2 : n._visibility | 1,
              a && (t === null || u || $n || Ce || Mt(e)),
              t = null,
              n = e;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (t === null) {
                u = t = n;
                try {
                  if (((o = u.stateNode), a))
                    (i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    s = u.stateNode;
                    var S = u.memoizedProps.style,
                      g =
                        S != null && S.hasOwnProperty("display")
                          ? S.display
                          : null;
                    s.style.display =
                      g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (N) {
                  J(u, u.return, N);
                }
              }
            } else if (n.tag === 6) {
              if (t === null) {
                u = n;
                try {
                  u.stateNode.nodeValue = a ? "" : u.memoizedProps;
                } catch (N) {
                  J(u, u.return, N);
                }
              }
            } else if (n.tag === 18) {
              if (t === null) {
                u = n;
                try {
                  var v = u.stateNode;
                  a ? Ud(v, !0) : Ud(u.stateNode, !1);
                } catch (N) {
                  J(u, u.return, N);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === e) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              t === n && (t = null), (n = n.return);
            }
            t === n && (t = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        r & 4 &&
          ((r = e.updateQueue),
          r !== null &&
            ((t = r.retryQueue),
            t !== null && ((r.retryQueue = null), mo(e, t))));
        break;
      case 19:
        qe(n, e),
          Ve(e),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), mo(e, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        qe(n, e), Ve(e);
    }
  }
  function Ve(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var t, r = e.return; r !== null; ) {
          if (Bc(r)) {
            t = r;
            break;
          }
          r = r.return;
        }
        if (t == null) throw Error(c(160));
        switch (t.tag) {
          case 27:
            var a = t.stateNode,
              o = ks(e);
            po(e, o, a);
            break;
          case 5:
            var i = t.stateNode;
            t.flags & 32 && (Kt(i, ""), (t.flags &= -33));
            var s = ks(e);
            po(e, s, i);
            break;
          case 3:
          case 4:
            var u = t.stateNode.containerInfo,
              m = ks(e);
            ws(e, m, u);
            break;
          default:
            throw Error(c(161));
        }
      } catch (b) {
        J(e, e.return, b);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Gc(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Gc(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Hn(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) qc(e, n.alternate, n), (n = n.sibling);
  }
  function Mt(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          st(4, n, n.return), Mt(n);
          break;
        case 1:
          Nn(n, n.return);
          var t = n.stateNode;
          typeof t.componentWillUnmount == "function" && Uc(n, n.return, t),
            Mt(n);
          break;
        case 27:
          fa(n.stateNode);
        case 26:
        case 5:
          Nn(n, n.return), Mt(n);
          break;
        case 22:
          n.memoizedState === null && Mt(n);
          break;
        case 30:
          Mt(n);
          break;
        default:
          Mt(n);
      }
      e = e.sibling;
    }
  }
  function Wn(e, n, t) {
    for (t = t && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var r = n.alternate,
        a = e,
        o = n,
        i = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Wn(a, o, t), ta(4, o);
          break;
        case 1:
          if (
            (Wn(a, o, t),
            (r = o),
            (a = r.stateNode),
            typeof a.componentDidMount == "function")
          )
            try {
              a.componentDidMount();
            } catch (m) {
              J(r, r.return, m);
            }
          if (((r = o), (a = r.updateQueue), a !== null)) {
            var s = r.stateNode;
            try {
              var u = a.shared.hiddenCallbacks;
              if (u !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < u.length; a++)
                  Ll(u[a], s);
            } catch (m) {
              J(r, r.return, m);
            }
          }
          t && i & 64 && jc(o), ra(o, o.return);
          break;
        case 27:
          Hc(o);
        case 26:
        case 5:
          Wn(a, o, t), t && r === null && i & 4 && $c(o), ra(o, o.return);
          break;
        case 12:
          Wn(a, o, t);
          break;
        case 31:
          Wn(a, o, t), t && i & 4 && Kc(a, o);
          break;
        case 13:
          Wn(a, o, t), t && i & 4 && Xc(a, o);
          break;
        case 22:
          o.memoizedState === null && Wn(a, o, t), ra(o, o.return);
          break;
        case 30:
          break;
        default:
          Wn(a, o, t);
      }
      n = n.sibling;
    }
  }
  function xs(e, n) {
    var t = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (t = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== t && (e != null && e.refCount++, t != null && Hr(t));
  }
  function Es(e, n) {
    (e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && Hr(e));
  }
  function wn(e, n, t, r) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) Jc(e, n, t, r), (n = n.sibling);
  }
  function Jc(e, n, t, r) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        wn(e, n, t, r), a & 2048 && ta(9, n);
        break;
      case 1:
        wn(e, n, t, r);
        break;
      case 3:
        wn(e, n, t, r),
          a & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && Hr(e)));
        break;
      case 12:
        if (a & 2048) {
          wn(e, n, t, r), (e = n.stateNode);
          try {
            var o = n.memoizedProps,
              i = o.id,
              s = o.onPostCommit;
            typeof s == "function" &&
              s(
                i,
                n.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (u) {
            J(n, n.return, u);
          }
        } else wn(e, n, t, r);
        break;
      case 31:
        wn(e, n, t, r);
        break;
      case 13:
        wn(e, n, t, r);
        break;
      case 23:
        break;
      case 22:
        (o = n.stateNode),
          (i = n.alternate),
          n.memoizedState !== null
            ? o._visibility & 2
              ? wn(e, n, t, r)
              : aa(e, n)
            : o._visibility & 2
              ? wn(e, n, t, r)
              : ((o._visibility |= 2),
                mr(e, n, t, r, (n.subtreeFlags & 10256) !== 0 || !1)),
          a & 2048 && xs(i, n);
        break;
      case 24:
        wn(e, n, t, r), a & 2048 && Es(n.alternate, n);
        break;
      default:
        wn(e, n, t, r);
    }
  }
  function mr(e, n, t, r, a) {
    for (
      a = a && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child;
      n !== null;

    ) {
      var o = e,
        i = n,
        s = t,
        u = r,
        m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          mr(o, i, s, u, a), ta(8, i);
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          i.memoizedState !== null
            ? b._visibility & 2
              ? mr(o, i, s, u, a)
              : aa(o, i)
            : ((b._visibility |= 2), mr(o, i, s, u, a)),
            a && m & 2048 && xs(i.alternate, i);
          break;
        case 24:
          mr(o, i, s, u, a), a && m & 2048 && Es(i.alternate, i);
          break;
        default:
          mr(o, i, s, u, a);
      }
      n = n.sibling;
    }
  }
  function aa(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var t = e,
          r = n,
          a = r.flags;
        switch (r.tag) {
          case 22:
            aa(t, r), a & 2048 && xs(r.alternate, r);
            break;
          case 24:
            aa(t, r), a & 2048 && Es(r.alternate, r);
            break;
          default:
            aa(t, r);
        }
        n = n.sibling;
      }
  }
  var oa = 8192;
  function gr(e, n, t) {
    if (e.subtreeFlags & oa)
      for (e = e.child; e !== null; ) Zc(e, n, t), (e = e.sibling);
  }
  function Zc(e, n, t) {
    switch (e.tag) {
      case 26:
        gr(e, n, t),
          e.flags & oa &&
            e.memoizedState !== null &&
            Pg(t, kn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        gr(e, n, t);
        break;
      case 3:
      case 4:
        var r = kn;
        (kn = Lo(e.stateNode.containerInfo)), gr(e, n, t), (kn = r);
        break;
      case 22:
        e.memoizedState === null &&
          ((r = e.alternate),
          r !== null && r.memoizedState !== null
            ? ((r = oa), (oa = 16777216), gr(e, n, t), (oa = r))
            : gr(e, n, t));
        break;
      default:
        gr(e, n, t);
    }
  }
  function ed(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do (n = e.sibling), (e.sibling = null), (e = n);
      while (e !== null);
    }
  }
  function ia(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (De = r), td(r, e);
        }
      ed(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) nd(e), (e = e.sibling);
  }
  function nd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ia(e), e.flags & 2048 && st(9, e, e.return);
        break;
      case 3:
        ia(e);
        break;
      case 12:
        ia(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -3), go(e))
          : ia(e);
        break;
      default:
        ia(e);
    }
  }
  function go(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (De = r), td(r, e);
        }
      ed(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          st(8, n, n.return), go(n);
          break;
        case 22:
          (t = n.stateNode),
            t._visibility & 2 && ((t._visibility &= -3), go(n));
          break;
        default:
          go(n);
      }
      e = e.sibling;
    }
  }
  function td(e, n) {
    for (; De !== null; ) {
      var t = De;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          st(8, t, n);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var r = t.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Hr(t.memoizedState.cache);
      }
      if (((r = t.child), r !== null)) (r.return = t), (De = r);
      else
        e: for (t = e; De !== null; ) {
          r = De;
          var a = r.sibling,
            o = r.return;
          if ((Vc(r), r === t)) {
            De = null;
            break e;
          }
          if (a !== null) {
            (a.return = o), (De = a);
            break e;
          }
          De = o;
        }
    }
  }
  var Bm = {
      getCacheForType: function (e) {
        var n = Ae(xe),
          t = n.data.get(e);
        return t === void 0 && ((t = e()), n.data.set(e, t)), t;
      },
      cacheSignal: function () {
        return Ae(xe).controller.signal;
      },
    },
    Hm = typeof WeakMap == "function" ? WeakMap : Map,
    Q = 0,
    te = null,
    M = null,
    $ = 0,
    G = 0,
    rn = null,
    ut = !1,
    hr = !1,
    Ns = !1,
    qn = 0,
    be = 0,
    lt = 0,
    jt = 0,
    Cs = 0,
    an = 0,
    vr = 0,
    sa = null,
    Qe = null,
    Ps = !1,
    ho = 0,
    rd = 0,
    vo = 1 / 0,
    yo = null,
    ct = null,
    Pe = 0,
    dt = null,
    yr = null,
    Vn = 0,
    Ls = 0,
    zs = null,
    ad = null,
    ua = 0,
    _s = null;
  function on() {
    return (Q & 2) !== 0 && $ !== 0 ? $ & -$ : y.T !== null ? Is() : ku();
  }
  function od() {
    if (an === 0)
      if (($ & 536870912) === 0 || H) {
        var e = Na;
        (Na <<= 1), (Na & 3932160) === 0 && (Na = 262144), (an = e);
      } else an = 536870912;
    return (e = nn.current), e !== null && (e.flags |= 32), an;
  }
  function Ke(e, n, t) {
    ((e === te && (G === 2 || G === 9)) || e.cancelPendingCommit !== null) &&
      (br(e, 0), ft(e, $, an, !1)),
      zr(e, t),
      ((Q & 2) === 0 || e !== te) &&
        (e === te && ((Q & 2) === 0 && (jt |= t), be === 4 && ft(e, $, an, !1)),
        Cn(e));
  }
  function id(e, n, t) {
    if ((Q & 6) !== 0) throw Error(c(327));
    var r = (!t && (n & 127) === 0 && (n & e.expiredLanes) === 0) || Lr(e, n),
      a = r ? Vm(e, n) : Ts(e, n, !0),
      o = r;
    do {
      if (a === 0) {
        hr && !r && ft(e, n, 0, !1);
        break;
      } else {
        if (((t = e.current.alternate), o && !Wm(t))) {
          (a = Ts(e, n, !1)), (o = !1);
          continue;
        }
        if (a === 2) {
          if (((o = n), e.errorRecoveryDisabledLanes & o)) var i = 0;
          else
            (i = e.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            n = i;
            e: {
              var s = e;
              a = sa;
              var u = s.current.memoizedState.isDehydrated;
              if ((u && (br(s, i).flags |= 256), (i = Ts(s, i, !1)), i !== 2)) {
                if (Ns && !u) {
                  (s.errorRecoveryDisabledLanes |= o), (jt |= o), (a = 4);
                  break e;
                }
                (o = Qe),
                  (Qe = a),
                  o !== null && (Qe === null ? (Qe = o) : Qe.push.apply(Qe, o));
              }
              a = i;
            }
            if (((o = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          br(e, 0), ft(e, n, 0, !0);
          break;
        }
        e: {
          switch (((r = e), (o = a), o)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              ft(r, n, an, !ut);
              break e;
            case 2:
              Qe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((n & 62914560) === n && ((a = ho + 300 - Ye()), 10 < a)) {
            if ((ft(r, n, an, !ut), Pa(r, 0, !0) !== 0)) break e;
            (Vn = n),
              (r.timeoutHandle = Rd(
                sd.bind(
                  null,
                  r,
                  t,
                  Qe,
                  yo,
                  Ps,
                  n,
                  an,
                  jt,
                  vr,
                  ut,
                  o,
                  "Throttled",
                  -0,
                  0,
                ),
                a,
              ));
            break e;
          }
          sd(r, t, Qe, yo, Ps, n, an, jt, vr, ut, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Cn(e);
  }
  function sd(e, n, t, r, a, o, i, s, u, m, b, S, g, v) {
    if (
      ((e.timeoutHandle = -1),
      (S = n.subtreeFlags),
      S & 8192 || (S & 16785408) === 16785408)
    ) {
      (S = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Dn,
      }),
        Zc(n, o, S);
      var N =
        (o & 62914560) === o ? ho - Ye() : (o & 4194048) === o ? rd - Ye() : 0;
      if (((N = Lg(S, N)), N !== null)) {
        (Vn = o),
          (e.cancelPendingCommit = N(
            gd.bind(null, e, n, o, t, r, a, i, s, u, b, S, null, g, v),
          )),
          ft(e, o, i, !m);
        return;
      }
    }
    gd(e, n, o, t, r, a, i, s, u);
  }
  function Wm(e) {
    for (var n = e; ; ) {
      var t = n.tag;
      if (
        (t === 0 || t === 11 || t === 15) &&
        n.flags & 16384 &&
        ((t = n.updateQueue), t !== null && ((t = t.stores), t !== null))
      )
        for (var r = 0; r < t.length; r++) {
          var a = t[r],
            o = a.getSnapshot;
          a = a.value;
          try {
            if (!Ze(o(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
        (t.return = n), (n = t);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function ft(e, n, t, r) {
    (n &= ~Cs),
      (n &= ~jt),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      r && (e.warmLanes |= n),
      (r = e.expirationTimes);
    for (var a = n; 0 < a; ) {
      var o = 31 - Je(a),
        i = 1 << o;
      (r[o] = -1), (a &= ~i);
    }
    t !== 0 && vu(e, t, n);
  }
  function bo() {
    return (Q & 6) === 0 ? (la(0), !1) : !0;
  }
  function Ds() {
    if (M !== null) {
      if (G === 0) var e = M.return;
      else (e = M), (On = _t = null), Qi(e), (lr = null), (qr = 0), (e = M);
      for (; e !== null; ) Mc(e.alternate, e), (e = e.return);
      M = null;
    }
  }
  function br(e, n) {
    var t = e.timeoutHandle;
    t !== -1 && ((e.timeoutHandle = -1), cg(t)),
      (t = e.cancelPendingCommit),
      t !== null && ((e.cancelPendingCommit = null), t()),
      (Vn = 0),
      Ds(),
      (te = e),
      (M = t = Fn(e.current, null)),
      ($ = n),
      (G = 0),
      (rn = null),
      (ut = !1),
      (hr = Lr(e, n)),
      (Ns = !1),
      (vr = an = Cs = jt = lt = be = 0),
      (Qe = sa = null),
      (Ps = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= n; 0 < r; ) {
        var a = 31 - Je(r),
          o = 1 << a;
        (n |= e[a]), (r &= ~o);
      }
    return (qn = n), ja(), t;
  }
  function ud(e, n) {
    (A = null),
      (y.H = Zr),
      n === ur || n === Qa
        ? ((n = El()), (G = 3))
        : n === Oi
          ? ((n = El()), (G = 4))
          : (G =
              n === ls
                ? 8
                : n !== null &&
                    typeof n == "object" &&
                    typeof n.then == "function"
                  ? 6
                  : 1),
      (rn = n),
      M === null && ((be = 1), so(e, cn(n, e.current)));
  }
  function ld() {
    var e = nn.current;
    return e === null
      ? !0
      : ($ & 4194048) === $
        ? bn === null
        : ($ & 62914560) === $ || ($ & 536870912) !== 0
          ? e === bn
          : !1;
  }
  function cd() {
    var e = y.H;
    return (y.H = Zr), e === null ? Zr : e;
  }
  function dd() {
    var e = y.A;
    return (y.A = Bm), e;
  }
  function ko() {
    (be = 4),
      ut || (($ & 4194048) !== $ && nn.current !== null) || (hr = !0),
      ((lt & 134217727) === 0 && (jt & 134217727) === 0) ||
        te === null ||
        ft(te, $, an, !1);
  }
  function Ts(e, n, t) {
    var r = Q;
    Q |= 2;
    var a = cd(),
      o = dd();
    (te !== e || $ !== n) && ((yo = null), br(e, n)), (n = !1);
    var i = be;
    e: do
      try {
        if (G !== 0 && M !== null) {
          var s = M,
            u = rn;
          switch (G) {
            case 8:
              Ds(), (i = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              nn.current === null && (n = !0);
              var m = G;
              if (((G = 0), (rn = null), kr(e, s, u, m), t && hr)) {
                i = 0;
                break e;
              }
              break;
            default:
              (m = G), (G = 0), (rn = null), kr(e, s, u, m);
          }
        }
        qm(), (i = be);
        break;
      } catch (b) {
        ud(e, b);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (On = _t = null),
      (Q = r),
      (y.H = a),
      (y.A = o),
      M === null && ((te = null), ($ = 0), ja()),
      i
    );
  }
  function qm() {
    for (; M !== null; ) fd(M);
  }
  function Vm(e, n) {
    var t = Q;
    Q |= 2;
    var r = cd(),
      a = dd();
    te !== e || $ !== n
      ? ((yo = null), (vo = Ye() + 500), br(e, n))
      : (hr = Lr(e, n));
    e: do
      try {
        if (G !== 0 && M !== null) {
          n = M;
          var o = rn;
          n: switch (G) {
            case 1:
              (G = 0), (rn = null), kr(e, n, o, 1);
              break;
            case 2:
            case 9:
              if (Sl(o)) {
                (G = 0), (rn = null), pd(n);
                break;
              }
              (n = function () {
                (G !== 2 && G !== 9) || te !== e || (G = 7), Cn(e);
              }),
                o.then(n, n);
              break e;
            case 3:
              G = 7;
              break e;
            case 4:
              G = 5;
              break e;
            case 7:
              Sl(o)
                ? ((G = 0), (rn = null), pd(n))
                : ((G = 0), (rn = null), kr(e, n, o, 7));
              break;
            case 5:
              var i = null;
              switch (M.tag) {
                case 26:
                  i = M.memoizedState;
                case 5:
                case 27:
                  var s = M;
                  if (i ? Jd(i) : s.stateNode.complete) {
                    (G = 0), (rn = null);
                    var u = s.sibling;
                    if (u !== null) M = u;
                    else {
                      var m = s.return;
                      m !== null ? ((M = m), wo(m)) : (M = null);
                    }
                    break n;
                  }
              }
              (G = 0), (rn = null), kr(e, n, o, 5);
              break;
            case 6:
              (G = 0), (rn = null), kr(e, n, o, 6);
              break;
            case 8:
              Ds(), (be = 6);
              break e;
            default:
              throw Error(c(462));
          }
        }
        Qm();
        break;
      } catch (b) {
        ud(e, b);
      }
    while (!0);
    return (
      (On = _t = null),
      (y.H = r),
      (y.A = a),
      (Q = t),
      M !== null ? 0 : ((te = null), ($ = 0), ja(), be)
    );
  }
  function Qm() {
    for (; M !== null && !hp(); ) fd(M);
  }
  function fd(e) {
    var n = Ic(e.alternate, e, qn);
    (e.memoizedProps = e.pendingProps), n === null ? wo(e) : (M = n);
  }
  function pd(e) {
    var n = e,
      t = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = _c(t, n, n.pendingProps, n.type, void 0, $);
        break;
      case 11:
        n = _c(t, n, n.pendingProps, n.type.render, n.ref, $);
        break;
      case 5:
        Qi(n);
      default:
        Mc(t, n), (n = M = dl(n, qn)), (n = Ic(t, n, qn));
    }
    (e.memoizedProps = e.pendingProps), n === null ? wo(e) : (M = n);
  }
  function kr(e, n, t, r) {
    (On = _t = null), Qi(n), (lr = null), (qr = 0);
    var a = n.return;
    try {
      if (Om(e, a, n, t, $)) {
        (be = 1), so(e, cn(t, e.current)), (M = null);
        return;
      }
    } catch (o) {
      if (a !== null) throw ((M = a), o);
      (be = 1), so(e, cn(t, e.current)), (M = null);
      return;
    }
    n.flags & 32768
      ? (H || r === 1
          ? (e = !0)
          : hr || ($ & 536870912) !== 0
            ? (e = !1)
            : ((ut = e = !0),
              (r === 2 || r === 9 || r === 3 || r === 6) &&
                ((r = nn.current),
                r !== null && r.tag === 13 && (r.flags |= 16384))),
        md(n, e))
      : wo(n);
  }
  function wo(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        md(n, ut);
        return;
      }
      e = n.return;
      var t = Mm(n.alternate, n, qn);
      if (t !== null) {
        M = t;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        M = n;
        return;
      }
      M = n = e;
    } while (n !== null);
    be === 0 && (be = 5);
  }
  function md(e, n) {
    do {
      var t = jm(e.alternate, e);
      if (t !== null) {
        (t.flags &= 32767), (M = t);
        return;
      }
      if (
        ((t = e.return),
        t !== null &&
          ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        M = e;
        return;
      }
      M = e = t;
    } while (e !== null);
    (be = 6), (M = null);
  }
  function gd(e, n, t, r, a, o, i, s, u) {
    e.cancelPendingCommit = null;
    do So();
    while (Pe !== 0);
    if ((Q & 6) !== 0) throw Error(c(327));
    if (n !== null) {
      if (n === e.current) throw Error(c(177));
      if (
        ((o = n.lanes | n.childLanes),
        (o |= ki),
        Cp(e, t, o, i, s, u),
        e === te && ((M = te = null), ($ = 0)),
        (yr = n),
        (dt = e),
        (Vn = t),
        (Ls = o),
        (zs = a),
        (ad = r),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Gm(xa, function () {
              return kd(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (r = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || r)
      ) {
        (r = y.T), (y.T = null), (a = E.p), (E.p = 2), (i = Q), (Q |= 4);
        try {
          Um(e, n, t);
        } finally {
          (Q = i), (E.p = a), (y.T = r);
        }
      }
      (Pe = 1), hd(), vd(), yd();
    }
  }
  function hd() {
    if (Pe === 1) {
      Pe = 0;
      var e = dt,
        n = yr,
        t = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || t) {
        (t = y.T), (y.T = null);
        var r = E.p;
        E.p = 2;
        var a = Q;
        Q |= 4;
        try {
          Yc(n, e);
          var o = Ws,
            i = tl(e.containerInfo),
            s = o.focusedElem,
            u = o.selectionRange;
          if (
            i !== s &&
            s &&
            s.ownerDocument &&
            nl(s.ownerDocument.documentElement, s)
          ) {
            if (u !== null && gi(s)) {
              var m = u.start,
                b = u.end;
              if ((b === void 0 && (b = m), "selectionStart" in s))
                (s.selectionStart = m),
                  (s.selectionEnd = Math.min(b, s.value.length));
              else {
                var S = s.ownerDocument || document,
                  g = (S && S.defaultView) || window;
                if (g.getSelection) {
                  var v = g.getSelection(),
                    N = s.textContent.length,
                    D = Math.min(u.start, N),
                    ne = u.end === void 0 ? D : Math.min(u.end, N);
                  !v.extend && D > ne && ((i = ne), (ne = D), (D = i));
                  var f = el(s, D),
                    l = el(s, ne);
                  if (
                    f &&
                    l &&
                    (v.rangeCount !== 1 ||
                      v.anchorNode !== f.node ||
                      v.anchorOffset !== f.offset ||
                      v.focusNode !== l.node ||
                      v.focusOffset !== l.offset)
                  ) {
                    var p = S.createRange();
                    p.setStart(f.node, f.offset),
                      v.removeAllRanges(),
                      D > ne
                        ? (v.addRange(p), v.extend(l.node, l.offset))
                        : (p.setEnd(l.node, l.offset), v.addRange(p));
                  }
                }
              }
            }
            for (S = [], v = s; (v = v.parentNode); )
              v.nodeType === 1 &&
                S.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < S.length;
              s++
            ) {
              var w = S[s];
              (w.element.scrollLeft = w.left), (w.element.scrollTop = w.top);
            }
          }
          (Ao = !!Hs), (Ws = Hs = null);
        } finally {
          (Q = a), (E.p = r), (y.T = t);
        }
      }
      (e.current = n), (Pe = 2);
    }
  }
  function vd() {
    if (Pe === 2) {
      Pe = 0;
      var e = dt,
        n = yr,
        t = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || t) {
        (t = y.T), (y.T = null);
        var r = E.p;
        E.p = 2;
        var a = Q;
        Q |= 4;
        try {
          qc(e, n.alternate, n);
        } finally {
          (Q = a), (E.p = r), (y.T = t);
        }
      }
      Pe = 3;
    }
  }
  function yd() {
    if (Pe === 4 || Pe === 3) {
      (Pe = 0), vp();
      var e = dt,
        n = yr,
        t = Vn,
        r = ad;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (Pe = 5)
        : ((Pe = 0), (yr = dt = null), bd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (
        (a === 0 && (ct = null),
        Yo(t),
        (n = n.stateNode),
        Ge && typeof Ge.onCommitFiberRoot == "function")
      )
        try {
          Ge.onCommitFiberRoot(Pr, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (r !== null) {
        (n = y.T), (a = E.p), (E.p = 2), (y.T = null);
        try {
          for (var o = e.onRecoverableError, i = 0; i < r.length; i++) {
            var s = r[i];
            o(s.value, { componentStack: s.stack });
          }
        } finally {
          (y.T = n), (E.p = a);
        }
      }
      (Vn & 3) !== 0 && So(),
        Cn(e),
        (a = e.pendingLanes),
        (t & 261930) !== 0 && (a & 42) !== 0
          ? e === _s
            ? ua++
            : ((ua = 0), (_s = e))
          : (ua = 0),
        la(0);
    }
  }
  function bd(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), Hr(n)));
  }
  function So() {
    return hd(), vd(), yd(), kd();
  }
  function kd() {
    if (Pe !== 5) return !1;
    var e = dt,
      n = Ls;
    Ls = 0;
    var t = Yo(Vn),
      r = y.T,
      a = E.p;
    try {
      (E.p = 32 > t ? 32 : t), (y.T = null), (t = zs), (zs = null);
      var o = dt,
        i = Vn;
      if (((Pe = 0), (yr = dt = null), (Vn = 0), (Q & 6) !== 0))
        throw Error(c(331));
      var s = Q;
      if (
        ((Q |= 4),
        nd(o.current),
        Jc(o, o.current, i, t),
        (Q = s),
        la(0, !1),
        Ge && typeof Ge.onPostCommitFiberRoot == "function")
      )
        try {
          Ge.onPostCommitFiberRoot(Pr, o);
        } catch {}
      return !0;
    } finally {
      (E.p = a), (y.T = r), bd(e, n);
    }
  }
  function wd(e, n, t) {
    (n = cn(t, n)),
      (n = us(e.stateNode, n, 2)),
      (e = at(e, n, 2)),
      e !== null && (zr(e, 2), Cn(e));
  }
  function J(e, n, t) {
    if (e.tag === 3) wd(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          wd(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (ct === null || !ct.has(r)))
          ) {
            (e = cn(t, e)),
              (t = Sc(2)),
              (r = at(n, t, 2)),
              r !== null && (xc(t, r, n, e), zr(r, 2), Cn(r));
            break;
          }
        }
        n = n.return;
      }
  }
  function Fs(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Hm();
      var a = new Set();
      r.set(n, a);
    } else (a = r.get(n)), a === void 0 && ((a = new Set()), r.set(n, a));
    a.has(t) ||
      ((Ns = !0), a.add(t), (e = Km.bind(null, e, n, t)), n.then(e, e));
  }
  function Km(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
      (e.pingedLanes |= e.suspendedLanes & t),
      (e.warmLanes &= ~t),
      te === e &&
        ($ & t) === t &&
        (be === 4 || (be === 3 && ($ & 62914560) === $ && 300 > Ye() - ho)
          ? (Q & 2) === 0 && br(e, 0)
          : (Cs |= t),
        vr === $ && (vr = 0)),
      Cn(e);
  }
  function Sd(e, n) {
    n === 0 && (n = hu()), (e = Pt(e, n)), e !== null && (zr(e, n), Cn(e));
  }
  function Xm(e) {
    var n = e.memoizedState,
      t = 0;
    n !== null && (t = n.retryLane), Sd(e, t);
  }
  function Ym(e, n) {
    var t = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode,
          a = e.memoizedState;
        a !== null && (t = a.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    r !== null && r.delete(n), Sd(e, t);
  }
  function Gm(e, n) {
    return Vo(e, n);
  }
  var xo = null,
    wr = null,
    As = !1,
    Eo = !1,
    Os = !1,
    pt = 0;
  function Cn(e) {
    e !== wr &&
      e.next === null &&
      (wr === null ? (xo = wr = e) : (wr = wr.next = e)),
      (Eo = !0),
      As || ((As = !0), Zm());
  }
  function la(e, n) {
    if (!Os && Eo) {
      Os = !0;
      do
        for (var t = !1, r = xo; r !== null; ) {
          if (e !== 0) {
            var a = r.pendingLanes;
            if (a === 0) var o = 0;
            else {
              var i = r.suspendedLanes,
                s = r.pingedLanes;
              (o = (1 << (31 - Je(42 | e) + 1)) - 1),
                (o &= a & ~(i & ~s)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((t = !0), Cd(r, o));
          } else
            (o = $),
              (o = Pa(
                r,
                r === te ? o : 0,
                r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || Lr(r, o) || ((t = !0), Cd(r, o));
          r = r.next;
        }
      while (t);
      Os = !1;
    }
  }
  function Jm() {
    xd();
  }
  function xd() {
    Eo = As = !1;
    var e = 0;
    pt !== 0 && lg() && (e = pt);
    for (var n = Ye(), t = null, r = xo; r !== null; ) {
      var a = r.next,
        o = Ed(r, n);
      o === 0
        ? ((r.next = null),
          t === null ? (xo = a) : (t.next = a),
          a === null && (wr = t))
        : ((t = r), (e !== 0 || (o & 3) !== 0) && (Eo = !0)),
        (r = a);
    }
    (Pe !== 0 && Pe !== 5) || la(e), pt !== 0 && (pt = 0);
  }
  function Ed(e, n) {
    for (
      var t = e.suspendedLanes,
        r = e.pingedLanes,
        a = e.expirationTimes,
        o = e.pendingLanes & -62914561;
      0 < o;

    ) {
      var i = 31 - Je(o),
        s = 1 << i,
        u = a[i];
      u === -1
        ? ((s & t) === 0 || (s & r) !== 0) && (a[i] = Np(s, n))
        : u <= n && (e.expiredLanes |= s),
        (o &= ~s);
    }
    if (
      ((n = te),
      (t = $),
      (t = Pa(
        e,
        e === n ? t : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (r = e.callbackNode),
      t === 0 ||
        (e === n && (G === 2 || G === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        r !== null && r !== null && Qo(r),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((t & 3) === 0 || Lr(e, t)) {
      if (((n = t & -t), n === e.callbackPriority)) return n;
      switch ((r !== null && Qo(r), Yo(t))) {
        case 2:
        case 8:
          t = mu;
          break;
        case 32:
          t = xa;
          break;
        case 268435456:
          t = gu;
          break;
        default:
          t = xa;
      }
      return (
        (r = Nd.bind(null, e)),
        (t = Vo(t, r)),
        (e.callbackPriority = n),
        (e.callbackNode = t),
        n
      );
    }
    return (
      r !== null && r !== null && Qo(r),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Nd(e, n) {
    if (Pe !== 0 && Pe !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var t = e.callbackNode;
    if (So() && e.callbackNode !== t) return null;
    var r = $;
    return (
      (r = Pa(
        e,
        e === te ? r : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      r === 0
        ? null
        : (id(e, r, n),
          Ed(e, Ye()),
          e.callbackNode != null && e.callbackNode === t
            ? Nd.bind(null, e)
            : null)
    );
  }
  function Cd(e, n) {
    if (So()) return null;
    id(e, n, !0);
  }
  function Zm() {
    dg(function () {
      (Q & 6) !== 0 ? Vo(pu, Jm) : xd();
    });
  }
  function Is() {
    if (pt === 0) {
      var e = ir;
      e === 0 && ((e = Ea), (Ea <<= 1), (Ea & 261888) === 0 && (Ea = 256)),
        (pt = e);
    }
    return pt;
  }
  function Pd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Da("" + e);
  }
  function Ld(e, n) {
    var t = n.ownerDocument.createElement("input");
    return (
      (t.name = n.name),
      (t.value = n.value),
      e.id && t.setAttribute("form", e.id),
      n.parentNode.insertBefore(t, n),
      (e = new FormData(e)),
      t.parentNode.removeChild(t),
      e
    );
  }
  function eg(e, n, t, r, a) {
    if (n === "submit" && t && t.stateNode === a) {
      var o = Pd((a[Be] || null).action),
        i = r.submitter;
      i &&
        ((n = (n = i[Be] || null)
          ? Pd(n.formAction)
          : i.getAttribute("formAction")),
        n !== null && ((o = n), (i = null)));
      var s = new Oa("action", "action", null, r, a);
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (pt !== 0) {
                  var u = i ? Ld(a, i) : new FormData(a);
                  ts(
                    t,
                    { pending: !0, data: u, method: a.method, action: o },
                    null,
                    u,
                  );
                }
              } else
                typeof o == "function" &&
                  (s.preventDefault(),
                  (u = i ? Ld(a, i) : new FormData(a)),
                  ts(
                    t,
                    { pending: !0, data: u, method: a.method, action: o },
                    o,
                    u,
                  ));
            },
            currentTarget: a,
          },
        ],
      });
    }
  }
  for (var Rs = 0; Rs < bi.length; Rs++) {
    var Ms = bi[Rs],
      ng = Ms.toLowerCase(),
      tg = Ms[0].toUpperCase() + Ms.slice(1);
    yn(ng, "on" + tg);
  }
  yn(ol, "onAnimationEnd"),
    yn(il, "onAnimationIteration"),
    yn(sl, "onAnimationStart"),
    yn("dblclick", "onDoubleClick"),
    yn("focusin", "onFocus"),
    yn("focusout", "onBlur"),
    yn(ym, "onTransitionRun"),
    yn(bm, "onTransitionStart"),
    yn(km, "onTransitionCancel"),
    yn(ul, "onTransitionEnd"),
    Vt("onMouseEnter", ["mouseout", "mouseover"]),
    Vt("onMouseLeave", ["mouseout", "mouseover"]),
    Vt("onPointerEnter", ["pointerout", "pointerover"]),
    Vt("onPointerLeave", ["pointerout", "pointerover"]),
    xt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    xt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    xt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    xt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    xt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var ca =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    rg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ca),
    );
  function zd(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (n)
          for (var i = r.length - 1; 0 <= i; i--) {
            var s = r[i],
              u = s.instance,
              m = s.currentTarget;
            if (((s = s.listener), u !== o && a.isPropagationStopped()))
              break e;
            (o = s), (a.currentTarget = m);
            try {
              o(a);
            } catch (b) {
              Ma(b);
            }
            (a.currentTarget = null), (o = u);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((s = r[i]),
              (u = s.instance),
              (m = s.currentTarget),
              (s = s.listener),
              u !== o && a.isPropagationStopped())
            )
              break e;
            (o = s), (a.currentTarget = m);
            try {
              o(a);
            } catch (b) {
              Ma(b);
            }
            (a.currentTarget = null), (o = u);
          }
      }
    }
  }
  function j(e, n) {
    var t = n[Go];
    t === void 0 && (t = n[Go] = new Set());
    var r = e + "__bubble";
    t.has(r) || (_d(n, e, 2, !1), t.add(r));
  }
  function js(e, n, t) {
    var r = 0;
    n && (r |= 4), _d(t, e, r, n);
  }
  var No = "_reactListening" + Math.random().toString(36).slice(2);
  function Us(e) {
    if (!e[No]) {
      (e[No] = !0),
        xu.forEach(function (t) {
          t !== "selectionchange" && (rg.has(t) || js(t, !1, e), js(t, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[No] || ((n[No] = !0), js("selectionchange", !1, n));
    }
  }
  function _d(e, n, t, r) {
    switch (of(n)) {
      case 2:
        var a = Dg;
        break;
      case 8:
        a = Tg;
        break;
      default:
        a = nu;
    }
    (t = a.bind(null, n, t, e)),
      (a = void 0),
      !ii ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (a = !0),
      r
        ? a !== void 0
          ? e.addEventListener(n, t, { capture: !0, passive: a })
          : e.addEventListener(n, t, !0)
        : a !== void 0
          ? e.addEventListener(n, t, { passive: a })
          : e.addEventListener(n, t, !1);
  }
  function $s(e, n, t, r, a) {
    var o = r;
    if ((n & 1) === 0 && (n & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var s = r.stateNode.containerInfo;
          if (s === a) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var u = i.tag;
              if ((u === 3 || u === 4) && i.stateNode.containerInfo === a)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (((i = Ht(s)), i === null)) return;
            if (((u = i.tag), u === 5 || u === 6 || u === 26 || u === 27)) {
              r = o = i;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    Ou(function () {
      var m = o,
        b = ai(t),
        S = [];
      e: {
        var g = ll.get(e);
        if (g !== void 0) {
          var v = Oa,
            N = e;
          switch (e) {
            case "keypress":
              if (Fa(t) === 0) break e;
            case "keydown":
            case "keyup":
              v = Yp;
              break;
            case "focusin":
              (N = "focus"), (v = ci);
              break;
            case "focusout":
              (N = "blur"), (v = ci);
              break;
            case "beforeblur":
            case "afterblur":
              v = ci;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              v = Mu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = Mp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = Zp;
              break;
            case ol:
            case il:
            case sl:
              v = $p;
              break;
            case ul:
              v = nm;
              break;
            case "scroll":
            case "scrollend":
              v = Ip;
              break;
            case "wheel":
              v = rm;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = Hp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = Uu;
              break;
            case "toggle":
            case "beforetoggle":
              v = om;
          }
          var D = (n & 4) !== 0,
            ne = !D && (e === "scroll" || e === "scrollend"),
            f = D ? (g !== null ? g + "Capture" : null) : g;
          D = [];
          for (var l = m, p; l !== null; ) {
            var w = l;
            if (
              ((p = w.stateNode),
              (w = w.tag),
              (w !== 5 && w !== 26 && w !== 27) ||
                p === null ||
                f === null ||
                ((w = Tr(l, f)), w != null && D.push(da(l, w, p))),
              ne)
            )
              break;
            l = l.return;
          }
          0 < D.length &&
            ((g = new v(g, N, null, t, b)), S.push({ event: g, listeners: D }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((g = e === "mouseover" || e === "pointerover"),
            (v = e === "mouseout" || e === "pointerout"),
            g &&
              t !== ri &&
              (N = t.relatedTarget || t.fromElement) &&
              (Ht(N) || N[Bt]))
          )
            break e;
          if (
            (v || g) &&
            ((g =
              b.window === b
                ? b
                : (g = b.ownerDocument)
                  ? g.defaultView || g.parentWindow
                  : window),
            v
              ? ((N = t.relatedTarget || t.toElement),
                (v = m),
                (N = N ? Ht(N) : null),
                N !== null &&
                  ((ne = x(N)),
                  (D = N.tag),
                  N !== ne || (D !== 5 && D !== 27 && D !== 6)) &&
                  (N = null))
              : ((v = null), (N = m)),
            v !== N)
          ) {
            if (
              ((D = Mu),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (l = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((D = Uu),
                (w = "onPointerLeave"),
                (f = "onPointerEnter"),
                (l = "pointer")),
              (ne = v == null ? g : Dr(v)),
              (p = N == null ? g : Dr(N)),
              (g = new D(w, l + "leave", v, t, b)),
              (g.target = ne),
              (g.relatedTarget = p),
              (w = null),
              Ht(b) === m &&
                ((D = new D(f, l + "enter", N, t, b)),
                (D.target = p),
                (D.relatedTarget = ne),
                (w = D)),
              (ne = w),
              v && N)
            )
              n: {
                for (D = ag, f = v, l = N, p = 0, w = f; w; w = D(w)) p++;
                w = 0;
                for (var z = l; z; z = D(z)) w++;
                for (; 0 < p - w; ) (f = D(f)), p--;
                for (; 0 < w - p; ) (l = D(l)), w--;
                for (; p--; ) {
                  if (f === l || (l !== null && f === l.alternate)) {
                    D = f;
                    break n;
                  }
                  (f = D(f)), (l = D(l));
                }
                D = null;
              }
            else D = null;
            v !== null && Dd(S, g, v, D, !1),
              N !== null && ne !== null && Dd(S, ne, N, D, !0);
          }
        }
        e: {
          if (
            ((g = m ? Dr(m) : window),
            (v = g.nodeName && g.nodeName.toLowerCase()),
            v === "select" || (v === "input" && g.type === "file"))
          )
            var q = Ku;
          else if (Vu(g))
            if (Xu) q = gm;
            else {
              q = pm;
              var P = fm;
            }
          else
            (v = g.nodeName),
              !v ||
              v.toLowerCase() !== "input" ||
              (g.type !== "checkbox" && g.type !== "radio")
                ? m && ti(m.elementType) && (q = Ku)
                : (q = mm);
          if (q && (q = q(e, m))) {
            Qu(S, q, t, b);
            break e;
          }
          P && P(e, g, m),
            e === "focusout" &&
              m &&
              g.type === "number" &&
              m.memoizedProps.value != null &&
              ni(g, "number", g.value);
        }
        switch (((P = m ? Dr(m) : window), e)) {
          case "focusin":
            (Vu(P) || P.contentEditable === "true") &&
              ((Jt = P), (hi = m), (Ur = null));
            break;
          case "focusout":
            Ur = hi = Jt = null;
            break;
          case "mousedown":
            vi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (vi = !1), rl(S, t, b);
            break;
          case "selectionchange":
            if (vm) break;
          case "keydown":
          case "keyup":
            rl(S, t, b);
        }
        var O;
        if (fi)
          e: {
            switch (e) {
              case "compositionstart":
                var B = "onCompositionStart";
                break e;
              case "compositionend":
                B = "onCompositionEnd";
                break e;
              case "compositionupdate":
                B = "onCompositionUpdate";
                break e;
            }
            B = void 0;
          }
        else
          Gt
            ? Wu(e, t) && (B = "onCompositionEnd")
            : e === "keydown" &&
              t.keyCode === 229 &&
              (B = "onCompositionStart");
        B &&
          ($u &&
            t.locale !== "ko" &&
            (Gt || B !== "onCompositionStart"
              ? B === "onCompositionEnd" && Gt && (O = Iu())
              : ((Gn = b),
                (si = "value" in Gn ? Gn.value : Gn.textContent),
                (Gt = !0))),
          (P = Co(m, B)),
          0 < P.length &&
            ((B = new ju(B, e, null, t, b)),
            S.push({ event: B, listeners: P }),
            O ? (B.data = O) : ((O = qu(t)), O !== null && (B.data = O)))),
          (O = sm ? um(e, t) : lm(e, t)) &&
            ((B = Co(m, "onBeforeInput")),
            0 < B.length &&
              ((P = new ju("onBeforeInput", "beforeinput", null, t, b)),
              S.push({ event: P, listeners: B }),
              (P.data = O))),
          eg(S, e, m, t, b);
      }
      zd(S, n);
    });
  }
  function da(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Co(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var a = e,
        o = a.stateNode;
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          o === null ||
          ((a = Tr(e, t)),
          a != null && r.unshift(da(e, a, o)),
          (a = Tr(e, n)),
          a != null && r.push(da(e, a, o))),
        e.tag === 3)
      )
        return r;
      e = e.return;
    }
    return [];
  }
  function ag(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Dd(e, n, t, r, a) {
    for (var o = n._reactName, i = []; t !== null && t !== r; ) {
      var s = t,
        u = s.alternate,
        m = s.stateNode;
      if (((s = s.tag), u !== null && u === r)) break;
      (s !== 5 && s !== 26 && s !== 27) ||
        m === null ||
        ((u = m),
        a
          ? ((m = Tr(t, o)), m != null && i.unshift(da(t, m, u)))
          : a || ((m = Tr(t, o)), m != null && i.push(da(t, m, u)))),
        (t = t.return);
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var og = /\r\n?/g,
    ig = /\u0000|\uFFFD/g;
  function Td(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        og,
        `
`,
      )
      .replace(ig, "");
  }
  function Fd(e, n) {
    return (n = Td(n)), Td(e) === n;
  }
  function ee(e, n, t, r, a, o) {
    switch (t) {
      case "children":
        typeof r == "string"
          ? n === "body" || (n === "textarea" && r === "") || Kt(e, r)
          : (typeof r == "number" || typeof r == "bigint") &&
            n !== "body" &&
            Kt(e, "" + r);
        break;
      case "className":
        za(e, "class", r);
        break;
      case "tabIndex":
        za(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        za(e, t, r);
        break;
      case "style":
        Fu(e, r, o);
        break;
      case "data":
        if (n !== "object") {
          za(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (n !== "a" || t !== "href")) {
          e.removeAttribute(t);
          break;
        }
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "symbol" ||
          typeof r == "boolean"
        ) {
          e.removeAttribute(t);
          break;
        }
        (r = Da("" + r)), e.setAttribute(t, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == "function" &&
            (t === "formAction"
              ? (n !== "input" && ee(e, n, "name", a.name, a, null),
                ee(e, n, "formEncType", a.formEncType, a, null),
                ee(e, n, "formMethod", a.formMethod, a, null),
                ee(e, n, "formTarget", a.formTarget, a, null))
              : (ee(e, n, "encType", a.encType, a, null),
                ee(e, n, "method", a.method, a, null),
                ee(e, n, "target", a.target, a, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(t);
          break;
        }
        (r = Da("" + r)), e.setAttribute(t, r);
        break;
      case "onClick":
        r != null && (e.onclick = Dn);
        break;
      case "onScroll":
        r != null && j("scroll", e);
        break;
      case "onScrollEnd":
        r != null && j("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(c(61));
          if (((t = r.__html), t != null)) {
            if (a.children != null) throw Error(c(60));
            e.innerHTML = t;
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          r == null ||
          typeof r == "function" ||
          typeof r == "boolean" ||
          typeof r == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (t = Da("" + r)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(t, "" + r)
          : e.removeAttribute(t);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol"
          ? e.setAttribute(t, "")
          : e.removeAttribute(t);
        break;
      case "capture":
      case "download":
        r === !0
          ? e.setAttribute(t, "")
          : r !== !1 &&
              r != null &&
              typeof r != "function" &&
              typeof r != "symbol"
            ? e.setAttribute(t, r)
            : e.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        !isNaN(r) &&
        1 <= r
          ? e.setAttribute(t, r)
          : e.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r)
          ? e.removeAttribute(t)
          : e.setAttribute(t, r);
        break;
      case "popover":
        j("beforetoggle", e), j("toggle", e), La(e, "popover", r);
        break;
      case "xlinkActuate":
        _n(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        _n(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        _n(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        _n(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        _n(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        _n(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        _n(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        _n(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        _n(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        La(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
          ((t = Ap.get(t) || t), La(e, t, r));
    }
  }
  function Bs(e, n, t, r, a, o) {
    switch (t) {
      case "style":
        Fu(e, r, o);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(c(61));
          if (((t = r.__html), t != null)) {
            if (a.children != null) throw Error(c(60));
            e.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof r == "string"
          ? Kt(e, r)
          : (typeof r == "number" || typeof r == "bigint") && Kt(e, "" + r);
        break;
      case "onScroll":
        r != null && j("scroll", e);
        break;
      case "onScrollEnd":
        r != null && j("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = Dn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Eu.hasOwnProperty(t))
          e: {
            if (
              t[0] === "o" &&
              t[1] === "n" &&
              ((a = t.endsWith("Capture")),
              (n = t.slice(2, a ? t.length - 7 : void 0)),
              (o = e[Be] || null),
              (o = o != null ? o[t] : null),
              typeof o == "function" && e.removeEventListener(n, o, a),
              typeof r == "function")
            ) {
              typeof o != "function" &&
                o !== null &&
                (t in e
                  ? (e[t] = null)
                  : e.hasAttribute(t) && e.removeAttribute(t)),
                e.addEventListener(n, r, a);
              break e;
            }
            t in e
              ? (e[t] = r)
              : r === !0
                ? e.setAttribute(t, "")
                : La(e, t, r);
          }
    }
  }
  function Ie(e, n, t) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        j("error", e), j("load", e);
        var r = !1,
          a = !1,
          o;
        for (o in t)
          if (t.hasOwnProperty(o)) {
            var i = t[o];
            if (i != null)
              switch (o) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, n));
                default:
                  ee(e, n, o, i, t, null);
              }
          }
        a && ee(e, n, "srcSet", t.srcSet, t, null),
          r && ee(e, n, "src", t.src, t, null);
        return;
      case "input":
        j("invalid", e);
        var s = (o = i = a = null),
          u = null,
          m = null;
        for (r in t)
          if (t.hasOwnProperty(r)) {
            var b = t[r];
            if (b != null)
              switch (r) {
                case "name":
                  a = b;
                  break;
                case "type":
                  i = b;
                  break;
                case "checked":
                  u = b;
                  break;
                case "defaultChecked":
                  m = b;
                  break;
                case "value":
                  o = b;
                  break;
                case "defaultValue":
                  s = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null) throw Error(c(137, n));
                  break;
                default:
                  ee(e, n, r, b, t, null);
              }
          }
        zu(e, o, s, u, m, i, a, !1);
        return;
      case "select":
        j("invalid", e), (r = i = o = null);
        for (a in t)
          if (t.hasOwnProperty(a) && ((s = t[a]), s != null))
            switch (a) {
              case "value":
                o = s;
                break;
              case "defaultValue":
                i = s;
                break;
              case "multiple":
                r = s;
              default:
                ee(e, n, a, s, t, null);
            }
        (n = o),
          (t = i),
          (e.multiple = !!r),
          n != null ? Qt(e, !!r, n, !1) : t != null && Qt(e, !!r, t, !0);
        return;
      case "textarea":
        j("invalid", e), (o = a = r = null);
        for (i in t)
          if (t.hasOwnProperty(i) && ((s = t[i]), s != null))
            switch (i) {
              case "value":
                r = s;
                break;
              case "defaultValue":
                a = s;
                break;
              case "children":
                o = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(c(91));
                break;
              default:
                ee(e, n, i, s, t, null);
            }
        Du(e, r, a, o);
        return;
      case "option":
        for (u in t)
          t.hasOwnProperty(u) &&
            ((r = t[u]), r != null) &&
            (u === "selected"
              ? (e.selected =
                  r && typeof r != "function" && typeof r != "symbol")
              : ee(e, n, u, r, t, null));
        return;
      case "dialog":
        j("beforetoggle", e), j("toggle", e), j("cancel", e), j("close", e);
        break;
      case "iframe":
      case "object":
        j("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < ca.length; r++) j(ca[r], e);
        break;
      case "image":
        j("error", e), j("load", e);
        break;
      case "details":
        j("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        j("error", e), j("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in t)
          if (t.hasOwnProperty(m) && ((r = t[m]), r != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, n));
              default:
                ee(e, n, m, r, t, null);
            }
        return;
      default:
        if (ti(n)) {
          for (b in t)
            t.hasOwnProperty(b) &&
              ((r = t[b]), r !== void 0 && Bs(e, n, b, r, t, void 0));
          return;
        }
    }
    for (s in t)
      t.hasOwnProperty(s) && ((r = t[s]), r != null && ee(e, n, s, r, t, null));
  }
  function sg(e, n, t, r) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null,
          o = null,
          i = null,
          s = null,
          u = null,
          m = null,
          b = null;
        for (v in t) {
          var S = t[v];
          if (t.hasOwnProperty(v) && S != null)
            switch (v) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                u = S;
              default:
                r.hasOwnProperty(v) || ee(e, n, v, null, r, S);
            }
        }
        for (var g in r) {
          var v = r[g];
          if (((S = t[g]), r.hasOwnProperty(g) && (v != null || S != null)))
            switch (g) {
              case "type":
                o = v;
                break;
              case "name":
                a = v;
                break;
              case "checked":
                m = v;
                break;
              case "defaultChecked":
                b = v;
                break;
              case "value":
                i = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(c(137, n));
                break;
              default:
                v !== S && ee(e, n, g, v, r, S);
            }
        }
        ei(e, i, s, u, m, b, o, a);
        return;
      case "select":
        v = i = s = g = null;
        for (o in t)
          if (((u = t[o]), t.hasOwnProperty(o) && u != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                v = u;
              default:
                r.hasOwnProperty(o) || ee(e, n, o, null, r, u);
            }
        for (a in r)
          if (
            ((o = r[a]),
            (u = t[a]),
            r.hasOwnProperty(a) && (o != null || u != null))
          )
            switch (a) {
              case "value":
                g = o;
                break;
              case "defaultValue":
                s = o;
                break;
              case "multiple":
                i = o;
              default:
                o !== u && ee(e, n, a, o, r, u);
            }
        (n = s),
          (t = i),
          (r = v),
          g != null
            ? Qt(e, !!t, g, !1)
            : !!r != !!t &&
              (n != null ? Qt(e, !!t, n, !0) : Qt(e, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        v = g = null;
        for (s in t)
          if (
            ((a = t[s]),
            t.hasOwnProperty(s) && a != null && !r.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                ee(e, n, s, null, r, a);
            }
        for (i in r)
          if (
            ((a = r[i]),
            (o = t[i]),
            r.hasOwnProperty(i) && (a != null || o != null))
          )
            switch (i) {
              case "value":
                g = a;
                break;
              case "defaultValue":
                v = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(c(91));
                break;
              default:
                a !== o && ee(e, n, i, a, r, o);
            }
        _u(e, g, v);
        return;
      case "option":
        for (var N in t)
          (g = t[N]),
            t.hasOwnProperty(N) &&
              g != null &&
              !r.hasOwnProperty(N) &&
              (N === "selected" ? (e.selected = !1) : ee(e, n, N, null, r, g));
        for (u in r)
          (g = r[u]),
            (v = t[u]),
            r.hasOwnProperty(u) &&
              g !== v &&
              (g != null || v != null) &&
              (u === "selected"
                ? (e.selected =
                    g && typeof g != "function" && typeof g != "symbol")
                : ee(e, n, u, g, r, v));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var D in t)
          (g = t[D]),
            t.hasOwnProperty(D) &&
              g != null &&
              !r.hasOwnProperty(D) &&
              ee(e, n, D, null, r, g);
        for (m in r)
          if (
            ((g = r[m]),
            (v = t[m]),
            r.hasOwnProperty(m) && g !== v && (g != null || v != null))
          )
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(c(137, n));
                break;
              default:
                ee(e, n, m, g, r, v);
            }
        return;
      default:
        if (ti(n)) {
          for (var ne in t)
            (g = t[ne]),
              t.hasOwnProperty(ne) &&
                g !== void 0 &&
                !r.hasOwnProperty(ne) &&
                Bs(e, n, ne, void 0, r, g);
          for (b in r)
            (g = r[b]),
              (v = t[b]),
              !r.hasOwnProperty(b) ||
                g === v ||
                (g === void 0 && v === void 0) ||
                Bs(e, n, b, g, r, v);
          return;
        }
    }
    for (var f in t)
      (g = t[f]),
        t.hasOwnProperty(f) &&
          g != null &&
          !r.hasOwnProperty(f) &&
          ee(e, n, f, null, r, g);
    for (S in r)
      (g = r[S]),
        (v = t[S]),
        !r.hasOwnProperty(S) ||
          g === v ||
          (g == null && v == null) ||
          ee(e, n, S, g, r, v);
  }
  function Ad(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function ug() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, n = 0, t = performance.getEntriesByType("resource"), r = 0;
        r < t.length;
        r++
      ) {
        var a = t[r],
          o = a.transferSize,
          i = a.initiatorType,
          s = a.duration;
        if (o && s && Ad(i)) {
          for (i = 0, s = a.responseEnd, r += 1; r < t.length; r++) {
            var u = t[r],
              m = u.startTime;
            if (m > s) break;
            var b = u.transferSize,
              S = u.initiatorType;
            b &&
              Ad(S) &&
              ((u = u.responseEnd), (i += b * (u < s ? 1 : (s - m) / (u - m))));
          }
          if ((--r, (n += (8 * (o + i)) / (a.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return n / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Hs = null,
    Ws = null;
  function Po(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Od(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Id(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function qs(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Vs = null;
  function lg() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Vs
        ? !1
        : ((Vs = e), !0)
      : ((Vs = null), !1);
  }
  var Rd = typeof setTimeout == "function" ? setTimeout : void 0,
    cg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Md = typeof Promise == "function" ? Promise : void 0,
    dg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Md < "u"
          ? function (e) {
              return Md.resolve(null).then(e).catch(fg);
            }
          : Rd;
  function fg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function mt(e) {
    return e === "head";
  }
  function jd(e, n) {
    var t = n,
      r = 0;
    do {
      var a = t.nextSibling;
      if ((e.removeChild(t), a && a.nodeType === 8))
        if (((t = a.data), t === "/$" || t === "/&")) {
          if (r === 0) {
            e.removeChild(a), Nr(n);
            return;
          }
          r--;
        } else if (
          t === "$" ||
          t === "$?" ||
          t === "$~" ||
          t === "$!" ||
          t === "&"
        )
          r++;
        else if (t === "html") fa(e.ownerDocument.documentElement);
        else if (t === "head") {
          (t = e.ownerDocument.head), fa(t);
          for (var o = t.firstChild; o; ) {
            var i = o.nextSibling,
              s = o.nodeName;
            o[_r] ||
              s === "SCRIPT" ||
              s === "STYLE" ||
              (s === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              t.removeChild(o),
              (o = i);
          }
        } else t === "body" && fa(e.ownerDocument.body);
      t = a;
    } while (t);
    Nr(n);
  }
  function Ud(e, n) {
    var t = e;
    e = 0;
    do {
      var r = t.nextSibling;
      if (
        (t.nodeType === 1
          ? n
            ? ((t._stashedDisplay = t.style.display),
              (t.style.display = "none"))
            : ((t.style.display = t._stashedDisplay || ""),
              t.getAttribute("style") === "" && t.removeAttribute("style"))
          : t.nodeType === 3 &&
            (n
              ? ((t._stashedText = t.nodeValue), (t.nodeValue = ""))
              : (t.nodeValue = t._stashedText || "")),
        r && r.nodeType === 8)
      )
        if (((t = r.data), t === "/$")) {
          if (e === 0) break;
          e--;
        } else (t !== "$" && t !== "$?" && t !== "$~" && t !== "$!") || e++;
      t = r;
    } while (t);
  }
  function Qs(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var t = n;
      switch (((n = n.nextSibling), t.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qs(t), Jo(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(t);
    }
  }
  function pg(e, n, t, r) {
    for (; e.nodeType === 1; ) {
      var a = t;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (r) {
        if (!e[_r])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((o = e.getAttribute("rel")),
                (o === "stylesheet" && e.hasAttribute("data-precedence")) ||
                  o !== a.rel ||
                  e.getAttribute("href") !==
                    (a.href == null || a.href === "" ? null : a.href) ||
                  e.getAttribute("crossorigin") !==
                    (a.crossOrigin == null ? null : a.crossOrigin) ||
                  e.getAttribute("title") !==
                    (a.title == null ? null : a.title))
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((o = e.getAttribute("src")),
                (o !== (a.src == null ? null : a.src) ||
                  e.getAttribute("type") !== (a.type == null ? null : a.type) ||
                  e.getAttribute("crossorigin") !==
                    (a.crossOrigin == null ? null : a.crossOrigin)) &&
                  o &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var o = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === o) return e;
      } else return e;
      if (((e = mn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function mg(e, n, t) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = mn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function $d(e, n) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = mn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ks(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Xs(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function gg(e, n) {
    var t = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = n;
    else if (e.data !== "$?" || t.readyState !== "loading") n();
    else {
      var r = function () {
        n(), t.removeEventListener("DOMContentLoaded", r);
      };
      t.addEventListener("DOMContentLoaded", r), (e._reactRetry = r);
    }
  }
  function mn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = e.data),
          n === "$" ||
            n === "$!" ||
            n === "$?" ||
            n === "$~" ||
            n === "&" ||
            n === "F!" ||
            n === "F")
        )
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return e;
  }
  var Ys = null;
  function Bd(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "/$" || t === "/&") {
          if (n === 0) return mn(e.nextSibling);
          n--;
        } else
          (t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&") ||
            n++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Hd(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
          if (n === 0) return e;
          n--;
        } else (t !== "/$" && t !== "/&") || n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Wd(e, n, t) {
    switch (((n = Po(t)), e)) {
      case "html":
        if (((e = n.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = n.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = n.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function fa(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    Jo(e);
  }
  var gn = new Map(),
    qd = new Set();
  function Lo(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Qn = E.d;
  E.d = { f: hg, r: vg, D: yg, C: bg, L: kg, m: wg, X: xg, S: Sg, M: Eg };
  function hg() {
    var e = Qn.f(),
      n = bo();
    return e || n;
  }
  function vg(e) {
    var n = Wt(e);
    n !== null && n.tag === 5 && n.type === "form" ? uc(n) : Qn.r(e);
  }
  var Sr = typeof document > "u" ? null : document;
  function Vd(e, n, t) {
    var r = Sr;
    if (r && typeof n == "string" && n) {
      var a = vn(n);
      (a = 'link[rel="' + e + '"][href="' + a + '"]'),
        typeof t == "string" && (a += '[crossorigin="' + t + '"]'),
        qd.has(a) ||
          (qd.add(a),
          (e = { rel: e, crossOrigin: t, href: n }),
          r.querySelector(a) === null &&
            ((n = r.createElement("link")),
            Ie(n, "link", e),
            _e(n),
            r.head.appendChild(n)));
    }
  }
  function yg(e) {
    Qn.D(e), Vd("dns-prefetch", e, null);
  }
  function bg(e, n) {
    Qn.C(e, n), Vd("preconnect", e, n);
  }
  function kg(e, n, t) {
    Qn.L(e, n, t);
    var r = Sr;
    if (r && e && n) {
      var a = 'link[rel="preload"][as="' + vn(n) + '"]';
      n === "image" && t && t.imageSrcSet
        ? ((a += '[imagesrcset="' + vn(t.imageSrcSet) + '"]'),
          typeof t.imageSizes == "string" &&
            (a += '[imagesizes="' + vn(t.imageSizes) + '"]'))
        : (a += '[href="' + vn(e) + '"]');
      var o = a;
      switch (n) {
        case "style":
          o = xr(e);
          break;
        case "script":
          o = Er(e);
      }
      gn.has(o) ||
        ((e = _(
          {
            rel: "preload",
            href: n === "image" && t && t.imageSrcSet ? void 0 : e,
            as: n,
          },
          t,
        )),
        gn.set(o, e),
        r.querySelector(a) !== null ||
          (n === "style" && r.querySelector(pa(o))) ||
          (n === "script" && r.querySelector(ma(o))) ||
          ((n = r.createElement("link")),
          Ie(n, "link", e),
          _e(n),
          r.head.appendChild(n)));
    }
  }
  function wg(e, n) {
    Qn.m(e, n);
    var t = Sr;
    if (t && e) {
      var r = n && typeof n.as == "string" ? n.as : "script",
        a =
          'link[rel="modulepreload"][as="' + vn(r) + '"][href="' + vn(e) + '"]',
        o = a;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = Er(e);
      }
      if (
        !gn.has(o) &&
        ((e = _({ rel: "modulepreload", href: e }, n)),
        gn.set(o, e),
        t.querySelector(a) === null)
      ) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(ma(o))) return;
        }
        (r = t.createElement("link")),
          Ie(r, "link", e),
          _e(r),
          t.head.appendChild(r);
      }
    }
  }
  function Sg(e, n, t) {
    Qn.S(e, n, t);
    var r = Sr;
    if (r && e) {
      var a = qt(r).hoistableStyles,
        o = xr(e);
      n = n || "default";
      var i = a.get(o);
      if (!i) {
        var s = { loading: 0, preload: null };
        if ((i = r.querySelector(pa(o)))) s.loading = 5;
        else {
          (e = _({ rel: "stylesheet", href: e, "data-precedence": n }, t)),
            (t = gn.get(o)) && Gs(e, t);
          var u = (i = r.createElement("link"));
          _e(u),
            Ie(u, "link", e),
            (u._p = new Promise(function (m, b) {
              (u.onload = m), (u.onerror = b);
            })),
            u.addEventListener("load", function () {
              s.loading |= 1;
            }),
            u.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            zo(i, n, r);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: s }),
          a.set(o, i);
      }
    }
  }
  function xg(e, n) {
    Qn.X(e, n);
    var t = Sr;
    if (t && e) {
      var r = qt(t).hoistableScripts,
        a = Er(e),
        o = r.get(a);
      o ||
        ((o = t.querySelector(ma(a))),
        o ||
          ((e = _({ src: e, async: !0 }, n)),
          (n = gn.get(a)) && Js(e, n),
          (o = t.createElement("script")),
          _e(o),
          Ie(o, "link", e),
          t.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        r.set(a, o));
    }
  }
  function Eg(e, n) {
    Qn.M(e, n);
    var t = Sr;
    if (t && e) {
      var r = qt(t).hoistableScripts,
        a = Er(e),
        o = r.get(a);
      o ||
        ((o = t.querySelector(ma(a))),
        o ||
          ((e = _({ src: e, async: !0, type: "module" }, n)),
          (n = gn.get(a)) && Js(e, n),
          (o = t.createElement("script")),
          _e(o),
          Ie(o, "link", e),
          t.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        r.set(a, o));
    }
  }
  function Qd(e, n, t, r) {
    var a = (a = Kn.current) ? Lo(a) : null;
    if (!a) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string"
          ? ((n = xr(t.href)),
            (t = qt(a).hoistableStyles),
            (r = t.get(n)),
            r ||
              ((r = { type: "style", instance: null, count: 0, state: null }),
              t.set(n, r)),
            r)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          t.rel === "stylesheet" &&
          typeof t.href == "string" &&
          typeof t.precedence == "string"
        ) {
          e = xr(t.href);
          var o = qt(a).hoistableStyles,
            i = o.get(e);
          if (
            (i ||
              ((a = a.ownerDocument || a),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(e, i),
              (o = a.querySelector(pa(e))) &&
                !o._p &&
                ((i.instance = o), (i.state.loading = 5)),
              gn.has(e) ||
                ((t = {
                  rel: "preload",
                  as: "style",
                  href: t.href,
                  crossOrigin: t.crossOrigin,
                  integrity: t.integrity,
                  media: t.media,
                  hrefLang: t.hrefLang,
                  referrerPolicy: t.referrerPolicy,
                }),
                gn.set(e, t),
                o || Ng(a, e, t, i.state))),
            n && r === null)
          )
            throw Error(c(528, ""));
          return i;
        }
        if (n && r !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (n = t.async),
          (t = t.src),
          typeof t == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = Er(t)),
              (t = qt(a).hoistableScripts),
              (r = t.get(n)),
              r ||
                ((r = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(n, r)),
              r)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, e));
    }
  }
  function xr(e) {
    return 'href="' + vn(e) + '"';
  }
  function pa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Kd(e) {
    return _({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Ng(e, n, t, r) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (r.loading = 1)
      : ((n = e.createElement("link")),
        (r.preload = n),
        n.addEventListener("load", function () {
          return (r.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (r.loading |= 2);
        }),
        Ie(n, "link", t),
        _e(n),
        e.head.appendChild(n));
  }
  function Er(e) {
    return '[src="' + vn(e) + '"]';
  }
  function ma(e) {
    return "script[async]" + e;
  }
  function Xd(e, n, t) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var r = e.querySelector('style[data-href~="' + vn(t.href) + '"]');
          if (r) return (n.instance = r), _e(r), r;
          var a = _({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null,
          });
          return (
            (r = (e.ownerDocument || e).createElement("style")),
            _e(r),
            Ie(r, "style", a),
            zo(r, t.precedence, e),
            (n.instance = r)
          );
        case "stylesheet":
          a = xr(t.href);
          var o = e.querySelector(pa(a));
          if (o) return (n.state.loading |= 4), (n.instance = o), _e(o), o;
          (r = Kd(t)),
            (a = gn.get(a)) && Gs(r, a),
            (o = (e.ownerDocument || e).createElement("link")),
            _e(o);
          var i = o;
          return (
            (i._p = new Promise(function (s, u) {
              (i.onload = s), (i.onerror = u);
            })),
            Ie(o, "link", r),
            (n.state.loading |= 4),
            zo(o, t.precedence, e),
            (n.instance = o)
          );
        case "script":
          return (
            (o = Er(t.src)),
            (a = e.querySelector(ma(o)))
              ? ((n.instance = a), _e(a), a)
              : ((r = t),
                (a = gn.get(o)) && ((r = _({}, t)), Js(r, a)),
                (e = e.ownerDocument || e),
                (a = e.createElement("script")),
                _e(a),
                Ie(a, "link", r),
                e.head.appendChild(a),
                (n.instance = a))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((r = n.instance), (n.state.loading |= 4), zo(r, t.precedence, e));
    return n.instance;
  }
  function zo(e, n, t) {
    for (
      var r = t.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        a = r.length ? r[r.length - 1] : null,
        o = a,
        i = 0;
      i < r.length;
      i++
    ) {
      var s = r[i];
      if (s.dataset.precedence === n) o = s;
      else if (o !== a) break;
    }
    o
      ? o.parentNode.insertBefore(e, o.nextSibling)
      : ((n = t.nodeType === 9 ? t.head : t), n.insertBefore(e, n.firstChild));
  }
  function Gs(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title);
  }
  function Js(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity);
  }
  var _o = null;
  function Yd(e, n, t) {
    if (_o === null) {
      var r = new Map(),
        a = (_o = new Map());
      a.set(t, r);
    } else (a = _o), (r = a.get(t)), r || ((r = new Map()), a.set(t, r));
    if (r.has(e)) return r;
    for (
      r.set(e, null), t = t.getElementsByTagName(e), a = 0;
      a < t.length;
      a++
    ) {
      var o = t[a];
      if (
        !(
          o[_r] ||
          o[Te] ||
          (e === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = o.getAttribute(n) || "";
        i = e + i;
        var s = r.get(i);
        s ? s.push(o) : r.set(i, [o]);
      }
    }
    return r;
  }
  function Gd(e, n, t) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        t,
        n === "title" ? e.querySelector("head > title") : null,
      );
  }
  function Cg(e, n, t) {
    if (t === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        return n.rel === "stylesheet"
          ? ((e = n.disabled), typeof n.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Jd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Pg(e, n, t, r) {
    if (
      t.type === "stylesheet" &&
      (typeof r.media != "string" || matchMedia(r.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var a = xr(r.href),
          o = n.querySelector(pa(a));
        if (o) {
          (n = o._p),
            n !== null &&
              typeof n == "object" &&
              typeof n.then == "function" &&
              (e.count++, (e = Do.bind(e)), n.then(e, e)),
            (t.state.loading |= 4),
            (t.instance = o),
            _e(o);
          return;
        }
        (o = n.ownerDocument || n),
          (r = Kd(r)),
          (a = gn.get(a)) && Gs(r, a),
          (o = o.createElement("link")),
          _e(o);
        var i = o;
        (i._p = new Promise(function (s, u) {
          (i.onload = s), (i.onerror = u);
        })),
          Ie(o, "link", r),
          (t.instance = o);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(t, n),
        (n = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (e.count++,
          (t = Do.bind(e)),
          n.addEventListener("load", t),
          n.addEventListener("error", t));
    }
  }
  var Zs = 0;
  function Lg(e, n) {
    return (
      e.stylesheets && e.count === 0 && Fo(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (t) {
            var r = setTimeout(function () {
              if ((e.stylesheets && Fo(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                (e.unsuspend = null), o();
              }
            }, 6e4 + n);
            0 < e.imgBytes && Zs === 0 && (Zs = 62500 * ug());
            var a = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Fo(e, e.stylesheets), e.unsuspend))
                ) {
                  var o = e.unsuspend;
                  (e.unsuspend = null), o();
                }
              },
              (e.imgBytes > Zs ? 50 : 800) + n,
            );
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(r), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function Do() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Fo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var To = null;
  function Fo(e, n) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (To = new Map()),
        n.forEach(zg, e),
        (To = null),
        Do.call(e));
  }
  function zg(e, n) {
    if (!(n.state.loading & 4)) {
      var t = To.get(e);
      if (t) var r = t.get(null);
      else {
        (t = new Map()), To.set(e, t);
        for (
          var a = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            o = 0;
          o < a.length;
          o++
        ) {
          var i = a[o];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (t.set(i.dataset.precedence, i), (r = i));
        }
        r && t.set(null, r);
      }
      (a = n.instance),
        (i = a.getAttribute("data-precedence")),
        (o = t.get(i) || r),
        o === r && t.set(null, a),
        t.set(i, a),
        this.count++,
        (r = Do.bind(this)),
        a.addEventListener("load", r),
        a.addEventListener("error", r),
        o
          ? o.parentNode.insertBefore(a, o.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(a, e.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var ga = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0,
  };
  function _g(e, n, t, r, a, o, i, s, u) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ko(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ko(0)),
      (this.hiddenUpdates = Ko(null)),
      (this.identifierPrefix = r),
      (this.onUncaughtError = a),
      (this.onCaughtError = o),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = u),
      (this.incompleteTransitions = new Map());
  }
  function Zd(e, n, t, r, a, o, i, s, u, m, b, S) {
    return (
      (e = new _g(e, n, t, i, u, m, b, S, s)),
      (n = 1),
      o === !0 && (n |= 24),
      (o = en(3, null, null, n)),
      (e.current = o),
      (o.stateNode = e),
      (n = Ti()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (o.memoizedState = { element: r, isDehydrated: t, cache: n }),
      Ii(o),
      e
    );
  }
  function ef(e) {
    return e ? ((e = nr), e) : nr;
  }
  function nf(e, n, t, r, a, o) {
    (a = ef(a)),
      r.context === null ? (r.context = a) : (r.pendingContext = a),
      (r = rt(n)),
      (r.payload = { element: t }),
      (o = o === void 0 ? null : o),
      o !== null && (r.callback = o),
      (t = at(e, r, n)),
      t !== null && (Ke(t, e, n), Qr(t, e, n));
  }
  function tf(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function eu(e, n) {
    tf(e, n), (e = e.alternate) && tf(e, n);
  }
  function rf(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = Pt(e, 67108864);
      n !== null && Ke(n, e, 67108864), eu(e, 67108864);
    }
  }
  function af(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = on();
      n = Xo(n);
      var t = Pt(e, n);
      t !== null && Ke(t, e, n), eu(e, n);
    }
  }
  var Ao = !0;
  function Dg(e, n, t, r) {
    var a = y.T;
    y.T = null;
    var o = E.p;
    try {
      (E.p = 2), nu(e, n, t, r);
    } finally {
      (E.p = o), (y.T = a);
    }
  }
  function Tg(e, n, t, r) {
    var a = y.T;
    y.T = null;
    var o = E.p;
    try {
      (E.p = 8), nu(e, n, t, r);
    } finally {
      (E.p = o), (y.T = a);
    }
  }
  function nu(e, n, t, r) {
    if (Ao) {
      var a = tu(r);
      if (a === null) $s(e, n, r, Oo, t), sf(e, r);
      else if (Ag(a, e, n, t, r)) r.stopPropagation();
      else if ((sf(e, r), n & 4 && -1 < Fg.indexOf(e))) {
        for (; a !== null; ) {
          var o = Wt(a);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var i = St(o.pendingLanes);
                  if (i !== 0) {
                    var s = o;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var u = 1 << (31 - Je(i));
                      (s.entanglements[1] |= u), (i &= ~u);
                    }
                    Cn(o), (Q & 6) === 0 && ((vo = Ye() + 500), la(0));
                  }
                }
                break;
              case 31:
              case 13:
                (s = Pt(o, 2)), s !== null && Ke(s, o, 2), bo(), eu(o, 2);
            }
          if (((o = tu(r)), o === null && $s(e, n, r, Oo, t), o === a)) break;
          a = o;
        }
        a !== null && r.stopPropagation();
      } else $s(e, n, r, null, t);
    }
  }
  function tu(e) {
    return (e = ai(e)), ru(e);
  }
  var Oo = null;
  function ru(e) {
    if (((Oo = null), (e = Ht(e)), e !== null)) {
      var n = x(e);
      if (n === null) e = null;
      else {
        var t = n.tag;
        if (t === 13) {
          if (((e = I(n)), e !== null)) return e;
          e = null;
        } else if (t === 31) {
          if (((e = ce(n)), e !== null)) return e;
          e = null;
        } else if (t === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return (Oo = e), null;
  }
  function of(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (yp()) {
          case pu:
            return 2;
          case mu:
            return 8;
          case xa:
          case bp:
            return 32;
          case gu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var au = !1,
    gt = null,
    ht = null,
    vt = null,
    ha = new Map(),
    va = new Map(),
    yt = [],
    Fg =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function sf(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        gt = null;
        break;
      case "dragenter":
      case "dragleave":
        ht = null;
        break;
      case "mouseover":
      case "mouseout":
        vt = null;
        break;
      case "pointerover":
      case "pointerout":
        ha.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        va.delete(n.pointerId);
    }
  }
  function ya(e, n, t, r, a, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: n,
          domEventName: t,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [a],
        }),
        n !== null && ((n = Wt(n)), n !== null && rf(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        a !== null && n.indexOf(a) === -1 && n.push(a),
        e);
  }
  function Ag(e, n, t, r, a) {
    switch (n) {
      case "focusin":
        return (gt = ya(gt, e, n, t, r, a)), !0;
      case "dragenter":
        return (ht = ya(ht, e, n, t, r, a)), !0;
      case "mouseover":
        return (vt = ya(vt, e, n, t, r, a)), !0;
      case "pointerover":
        var o = a.pointerId;
        return ha.set(o, ya(ha.get(o) || null, e, n, t, r, a)), !0;
      case "gotpointercapture":
        return (
          (o = a.pointerId), va.set(o, ya(va.get(o) || null, e, n, t, r, a)), !0
        );
    }
    return !1;
  }
  function uf(e) {
    var n = Ht(e.target);
    if (n !== null) {
      var t = x(n);
      if (t !== null) {
        if (((n = t.tag), n === 13)) {
          if (((n = I(t)), n !== null)) {
            (e.blockedOn = n),
              wu(e.priority, function () {
                af(t);
              });
            return;
          }
        } else if (n === 31) {
          if (((n = ce(t)), n !== null)) {
            (e.blockedOn = n),
              wu(e.priority, function () {
                af(t);
              });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Io(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = tu(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        (ri = r), t.target.dispatchEvent(r), (ri = null);
      } else return (n = Wt(t)), n !== null && rf(n), (e.blockedOn = t), !1;
      n.shift();
    }
    return !0;
  }
  function lf(e, n, t) {
    Io(e) && t.delete(n);
  }
  function Og() {
    (au = !1),
      gt !== null && Io(gt) && (gt = null),
      ht !== null && Io(ht) && (ht = null),
      vt !== null && Io(vt) && (vt = null),
      ha.forEach(lf),
      va.forEach(lf);
  }
  function Ro(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      au ||
        ((au = !0),
        d.unstable_scheduleCallback(d.unstable_NormalPriority, Og)));
  }
  var Mo = null;
  function cf(e) {
    Mo !== e &&
      ((Mo = e),
      d.unstable_scheduleCallback(d.unstable_NormalPriority, function () {
        Mo === e && (Mo = null);
        for (var n = 0; n < e.length; n += 3) {
          var t = e[n],
            r = e[n + 1],
            a = e[n + 2];
          if (typeof r != "function") {
            if (ru(r || t) === null) continue;
            break;
          }
          var o = Wt(t);
          o !== null &&
            (e.splice(n, 3),
            (n -= 3),
            ts(o, { pending: !0, data: a, method: t.method, action: r }, r, a));
        }
      }));
  }
  function Nr(e) {
    function n(u) {
      return Ro(u, e);
    }
    gt !== null && Ro(gt, e),
      ht !== null && Ro(ht, e),
      vt !== null && Ro(vt, e),
      ha.forEach(n),
      va.forEach(n);
    for (var t = 0; t < yt.length; t++) {
      var r = yt[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < yt.length && ((t = yt[0]), t.blockedOn === null); )
      uf(t), t.blockedOn === null && yt.shift();
    if (((t = (e.ownerDocument || e).$$reactFormReplay), t != null))
      for (r = 0; r < t.length; r += 3) {
        var a = t[r],
          o = t[r + 1],
          i = a[Be] || null;
        if (typeof o == "function") i || cf(t);
        else if (i) {
          var s = null;
          if (o && o.hasAttribute("formAction")) {
            if (((a = o), (i = o[Be] || null))) s = i.formAction;
            else if (ru(a) !== null) continue;
          } else s = i.action;
          typeof s == "function" ? (t[r + 1] = s) : (t.splice(r, 3), (r -= 3)),
            cf(t);
        }
      }
  }
  function df() {
    function e(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (a = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function n() {
      a !== null && (a(), (a = null)), r || setTimeout(t, 20);
    }
    function t() {
      if (!r && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var r = !1,
        a = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", n),
        navigation.addEventListener("navigateerror", n),
        setTimeout(t, 100),
        function () {
          (r = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", n),
            navigation.removeEventListener("navigateerror", n),
            a !== null && (a(), (a = null));
        }
      );
    }
  }
  function ou(e) {
    this._internalRoot = e;
  }
  (jo.prototype.render = ou.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(c(409));
      var t = n.current,
        r = on();
      nf(t, r, e, n, null, null);
    }),
    (jo.prototype.unmount = ou.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          nf(e.current, 2, null, e, null, null), bo(), (n[Bt] = null);
        }
      });
  function jo(e) {
    this._internalRoot = e;
  }
  jo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = ku();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < yt.length && n !== 0 && n < yt[t].priority; t++);
      yt.splice(t, 0, e), t === 0 && uf(e);
    }
  };
  var ff = h.version;
  if (ff !== "19.2.3") throw Error(c(527, ff, "19.2.3"));
  E.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function"
        ? Error(c(188))
        : ((e = Object.keys(e).join(",")), Error(c(268, e)));
    return (
      (e = U(n)),
      (e = e !== null ? hn(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Ig = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: y,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uo.isDisabled && Uo.supportsFiber)
      try {
        (Pr = Uo.inject(Ig)), (Ge = Uo);
      } catch {}
  }
  return (
    (ba.createRoot = function (e, n) {
      if (!C(e)) throw Error(c(299));
      var t = !1,
        r = "",
        a = yc,
        o = bc,
        i = kc;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (t = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (a = n.onUncaughtError),
          n.onCaughtError !== void 0 && (o = n.onCaughtError),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (n = Zd(e, 1, !1, null, null, t, r, null, a, o, i, df)),
        (e[Bt] = n.current),
        Us(e),
        new ou(n)
      );
    }),
    (ba.hydrateRoot = function (e, n, t) {
      if (!C(e)) throw Error(c(299));
      var r = !1,
        a = "",
        o = yc,
        i = bc,
        s = kc,
        u = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError),
          t.formState !== void 0 && (u = t.formState)),
        (n = Zd(e, 1, !0, n, t ?? null, r, a, u, o, i, s, df)),
        (n.context = ef(null)),
        (t = n.current),
        (r = on()),
        (r = Xo(r)),
        (a = rt(r)),
        (a.callback = null),
        at(t, a, r),
        (t = r),
        (n.current.lanes = t),
        zr(n, t),
        Cn(n),
        (e[Bt] = n.current),
        Us(e),
        new jo(n)
      );
    }),
    (ba.version = "19.2.3"),
    ba
  );
}
var jf;
function ph() {
  if (jf) return uu.exports;
  jf = 1;
  function d() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (h) {
        console.error(h);
      }
  }
  return d(), (uu.exports = fh()), uu.exports;
}
var mh = ph();
const gh = Ug(mh);
function Y(...d) {
  return $g(Bg(d));
}
const Uf = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx("div", {
    ref: k,
    className: Y("rounded-xl border bg-card text-card-foreground shadow", d),
    ...h,
  }),
);
Uf.displayName = "Card";
const $f = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx("div", {
    ref: k,
    className: Y("flex flex-col space-y-1.5 p-6", d),
    ...h,
  }),
);
$f.displayName = "CardHeader";
const Bf = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx("div", {
    ref: k,
    className: Y("font-semibold leading-none tracking-tight", d),
    ...h,
  }),
);
Bf.displayName = "CardTitle";
const Hf = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx("div", {
    ref: k,
    className: Y("text-sm text-muted-foreground", d),
    ...h,
  }),
);
Hf.displayName = "CardDescription";
const Wf = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx("div", { ref: k, className: Y("p-6 pt-0", d), ...h }),
);
Wf.displayName = "CardContent";
const qf = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx("div", { ref: k, className: Y("flex items-center p-6 pt-0", d), ...h }),
);
qf.displayName = "CardFooter";
const hh = iu(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Vf = L.forwardRef(
    ({ className: d, variant: h, size: k, asChild: c = !1, ...C }, x) => {
      const I = c ? Hg : "button";
      return T.jsx(I, {
        className: Y(hh({ variant: h, size: k, className: d })),
        ref: x,
        ...C,
      });
    },
  );
Vf.displayName = "Button";
const Qf = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx(pf, {
    className: Y(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      d,
    ),
    ...h,
    ref: k,
    children: T.jsx(Wg, {
      className: Y(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      ),
    }),
  }),
);
Qf.displayName = pf.displayName;
const vh = iu(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  Kf = L.forwardRef(({ className: d, ...h }, k) =>
    T.jsx(mf, { ref: k, className: Y(vh(), d), ...h }),
  );
Kf.displayName = mf.displayName;
const yh = iu(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        success:
          "border-transparent bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700",
        outline: "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
function bh({ className: d, variant: h, ...k }) {
  return T.jsx("div", { className: Y(yh({ variant: h }), d), ...k });
}
const Xf = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx(gf, {
    ref: k,
    className: Y(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      d,
    ),
    ...h,
  }),
);
Xf.displayName = gf.displayName;
const Yf = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx(hf, { ref: k, className: Y("aspect-square h-full w-full", d), ...h }),
);
Yf.displayName = hf.displayName;
const Gf = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx(vf, {
    ref: k,
    className: Y(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      d,
    ),
    ...h,
  }),
);
Gf.displayName = vf.displayName;
const kh = Xg,
  wh = Yg,
  Sh = Gg,
  xh = L.forwardRef(({ className: d, inset: h, children: k, ...c }, C) =>
    T.jsxs(yf, {
      ref: C,
      className: Y(
        "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        h && "pl-8",
        d,
      ),
      ...c,
      children: [k, T.jsx(qg, { className: "ml-auto" })],
    }),
  );
xh.displayName = yf.displayName;
const Eh = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx(bf, {
    ref: k,
    className: Y(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      d,
    ),
    ...h,
  }),
);
Eh.displayName = bf.displayName;
const Jf = L.forwardRef(({ className: d, sideOffset: h = 4, ...k }, c) =>
  T.jsx(Vg, {
    children: T.jsx(kf, {
      ref: c,
      sideOffset: h,
      className: Y(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        d,
      ),
      ...k,
    }),
  }),
);
Jf.displayName = kf.displayName;
const Zf = L.forwardRef(({ className: d, inset: h, ...k }, c) =>
  T.jsx(wf, {
    ref: c,
    className: Y(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      h && "pl-8",
      d,
    ),
    ...k,
  }),
);
Zf.displayName = wf.displayName;
const Nh = L.forwardRef(({ className: d, children: h, checked: k, ...c }, C) =>
  T.jsxs(Sf, {
    ref: C,
    className: Y(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      d,
    ),
    checked: k,
    ...c,
    children: [
      T.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: T.jsx(xf, { children: T.jsx(Qg, { className: "h-4 w-4" }) }),
      }),
      h,
    ],
  }),
);
Nh.displayName = Sf.displayName;
const Ch = L.forwardRef(({ className: d, children: h, ...k }, c) =>
  T.jsxs(Ef, {
    ref: c,
    className: Y(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      d,
    ),
    ...k,
    children: [
      T.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: T.jsx(xf, {
          children: T.jsx(Kg, { className: "h-2 w-2 fill-current" }),
        }),
      }),
      h,
    ],
  }),
);
Ch.displayName = Ef.displayName;
const ep = L.forwardRef(({ className: d, inset: h, ...k }, c) =>
  T.jsx(Nf, {
    ref: c,
    className: Y("px-2 py-1.5 text-sm font-semibold", h && "pl-8", d),
    ...k,
  }),
);
ep.displayName = Nf.displayName;
const np = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx(Cf, { ref: k, className: Y("-mx-1 my-1 h-px bg-muted", d), ...h }),
);
np.displayName = Cf.displayName;
function tp() {
  const [d, h] = L.useState(Df),
    [k, c] = L.useState(!0),
    C = L.useRef(null);
  return (
    L.useEffect(() => {
      (async () => {
        try {
          const I = await kt.storage.local.get("appSettings");
          I.appSettings && h({ ...Df, ...I.appSettings });
        } catch (I) {
          console.error("Failed to load settings:", I);
        } finally {
          c(!1);
        }
      })();
      const x = (I, ce) => {
        ce === "local" && I.appSettings && h(I.appSettings.newValue);
      };
      return (
        kt.storage.onChanged.addListener(x),
        () => kt.storage.onChanged.removeListener(x)
      );
    }, []),
    L.useEffect(() => {
      const x = window.document.documentElement,
        I = async (W) => {
          try {
            const U = W ? "/icons/light" : "/icons/dark";
            await kt.action.setIcon({
              path: {
                16: `${U}/16.png`,
                32: `${U}/32.png`,
                48: `${U}/48.png`,
                64: `${U}/64.png`,
                128: `${U}/128.png`,
                256: `${U}/256.png`,
              },
            });
          } catch (U) {
            console.error(
              "Failed to update action icon (ignore if not in extension context):",
              U,
            );
          }
        },
        ce = (W) => {
          let U = W === "dark";
          W === "system" &&
            ((U = window.matchMedia("(prefers-color-scheme: dark)").matches),
            ah() || I(U)),
            U ? x.classList.add("dark") : x.classList.remove("dark");
        };
      if ((ce(d.theme), d.theme === "system")) {
        const W = window.matchMedia("(prefers-color-scheme: dark)"),
          U = () => ce("system");
        return (
          W.addEventListener("change", U),
          () => W.removeEventListener("change", U)
        );
      }
    }, [d.theme]),
    {
      settings: d,
      updateSettings: async (x, I = !1) => {
        const ce = { ...d, ...x };
        h(ce), C.current && (clearTimeout(C.current), (C.current = null));
        const W = async () => {
          try {
            return await kt.storage.local.set({ appSettings: ce }), !0;
          } catch (U) {
            return console.error("Failed to save settings:", U), !1;
          }
        };
        return I
          ? await W()
          : new Promise((U) => {
              C.current = window.setTimeout(async () => {
                const hn = await W();
                U(hn);
              }, 500);
            });
      },
      loading: k,
    }
  );
}
function Ph() {
  const [d, h] = L.useState({}),
    [k, c] = L.useState(!0);
  return (
    L.useEffect(() => {
      (async () => {
        try {
          const x = await kt.storage.local.get("syncState");
          x.syncState && h(x.syncState);
        } catch (x) {
          console.error("Failed to load sync state:", x);
        } finally {
          c(!1);
        }
      })();
      const C = (x, I) => {
        I === "local" && x.syncState && h(x.syncState.newValue);
      };
      return (
        kt.storage.onChanged.addListener(C),
        () => kt.storage.onChanged.removeListener(C)
      );
    }, []),
    { syncState: d, loading: k }
  );
}
const Lh = [
  {
    id: "storage_github",
    name: "GitHub \u4ED3\u5E93\u5B58\u50A8",
    description:
      "\u4F7F\u7528 GitHub \u4ED3\u5E93\u5B58\u50A8\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "free",
  },
  {
    id: "storage_gist",
    name: "Gist \u5B58\u50A8",
    description:
      "\u4F7F\u7528 GitHub Gist \u5B58\u50A8\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "free",
  },
  {
    id: "storage_gitee",
    name: "Gitee \u5B58\u50A8",
    description:
      "\u4F7F\u7528 Gitee \u4ED3\u5E93\u5B58\u50A8\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "free",
  },
  {
    id: "storage_gitlab",
    name: "GitLab \u5B58\u50A8",
    description:
      "\u4F7F\u7528 GitLab \u4ED3\u5E93\u5B58\u50A8\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "free",
  },
  {
    id: "storage_googledrive",
    name: "Google Drive \u5B58\u50A8",
    description:
      "\u4F7F\u7528 Google Drive \u5B58\u50A8\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "free",
  },
  {
    id: "storage_dropbox",
    name: "Dropbox \u5B58\u50A8",
    description: "\u4F7F\u7528 Dropbox \u5B58\u50A8\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "free",
  },
  {
    id: "storage_onedrive",
    name: "OneDrive \u5B58\u50A8",
    description: "\u4F7F\u7528 OneDrive \u5B58\u50A8\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "free",
  },
  {
    id: "storage_s3",
    name: "S3 \u517C\u5BB9\u5B58\u50A8",
    description:
      "\u4F7F\u7528 S3 \u517C\u5BB9\u534F\u8BAE (R2, MinIO \u7B49) \u5B58\u50A8\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "free",
  },
  {
    id: "encryption",
    name: "\u6570\u636E\u52A0\u5BC6",
    description:
      "\u4F7F\u7528 AES-256-GCM \u52A0\u5BC6\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "free",
  },
  {
    id: "force_sync",
    name: "\u5F3A\u5236\u540C\u6B65",
    description:
      "\u5F3A\u5236\u4E0A\u4F20\u6216\u4E0B\u8F7D\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "free",
  },
  {
    id: "manual_sync",
    name: "\u624B\u52A8\u540C\u6B65",
    description: "\u624B\u52A8\u89E6\u53D1\u4E66\u7B7E\u540C\u6B65",
    requiredLicense: "free",
  },
  {
    id: "import_export",
    name: "\u5BFC\u5165\u5BFC\u51FA\u4E66\u7B7E",
    description: "\u5BFC\u5165\u548C\u5BFC\u51FA\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "free",
  },
  {
    id: "sync_history",
    name: "\u540C\u6B65\u5386\u53F2",
    description: "\u67E5\u770B\u540C\u6B65\u5386\u53F2\u8BB0\u5F55",
    requiredLicense: "free",
  },
  {
    id: "storage_webdav",
    name: "WebDAV \u5B58\u50A8",
    description:
      "\u4F7F\u7528 WebDAV \u534F\u8BAE\u5B58\u50A8\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "free",
  },
  {
    id: "delete_remote",
    name: "\u5220\u9664\u4E91\u7AEF\u6587\u4EF6",
    description:
      "\u5220\u9664\u8FDC\u7A0B\u5B58\u50A8\u7684\u4E66\u7B7E\u6587\u4EF6",
    requiredLicense: "pro",
  },
  {
    id: "auto_sync",
    name: "\u81EA\u52A8\u540C\u6B65",
    description: "\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65\u4E66\u7B7E\u6570\u636E",
    requiredLicense: "pro",
  },
  {
    id: "time_machine",
    name: "\u4E66\u7B7E\u65F6\u5149\u673A",
    description:
      "\u5229\u7528 GitHub \u5386\u53F2\u8BB0\u5F55\u56DE\u6EDA\u4E66\u7B7E\u5230\u4EFB\u610F\u7248\u672C",
    requiredLicense: "pro",
  },
  {
    id: "sync_config",
    name: "\u914D\u7F6E\u4E91\u7AEF\u540C\u6B65",
    description:
      "\u540C\u6B65\u63D2\u4EF6\u7684\u914D\u7F6E\u9009\u9879\u5230\u4E91\u7AEF",
    requiredLicense: "pro",
  },
];
function zh(d, h) {
  var k;
  return h.features && Array.isArray(h.features)
    ? h.features.includes(d)
    : !(
        ((k = Lh.find((c) => c.id == d)) == null
          ? void 0
          : k.requiredLicense) === "pro" && h.type !== "pro"
      );
}
const rp = L.createContext(void 0);
function _h({ children: d }) {
  var _, de;
  const h = Tf.useSession(),
    [k, c] = L.useState({ type: "free" }),
    [C, x] = L.useState(!0);
  L.useEffect(() => {
    let fe = !0;
    return (
      (async () => {
        var Re, Le;
        let re = k.type;
        try {
          const Se = await Cr.getValidToken(),
            K = await Cr.validateLicense(Se);
          if (fe && K)
            if (K) {
              re = typeof K.pro == "boolean" && K.pro ? "pro" : "free";
              const he = {
                type: re,
                expiresAt: K.exp * 1e3,
                userId: K.uid,
                features: K.feat,
              };
              c(he);
            } else (re = "free"), c({ type: re });
        } catch (Se) {
          console.error("[AuthProvider] Failed to load stored license:", Se);
        }
        if (h.isPending) {
          x(!0);
          return;
        }
        const pe =
          ((Le = (Re = h.data) == null ? void 0 : Re.user) == null
            ? void 0
            : Le.isPro) || !1;
        try {
          let Se = !1;
          pe && re === "free" && (Se = !0);
          const K = await Cr.getValidToken(Se),
            he = await Cr.validateLicense(K);
          if (fe)
            if (he) {
              const Me = {
                type: (typeof he.pro == "boolean" ? he.pro : pe)
                  ? "pro"
                  : "free",
                expiresAt: he.exp * 1e3,
                userId: he.uid,
                features: he.feat,
              };
              c(Me);
            } else c({ type: "free" });
        } catch (Se) {
          console.error("[AuthProvider] Security validation failed:", Se),
            fe && c({ type: "free" });
        } finally {
          fe && x(!1);
        }
      })(),
      () => {
        fe = !1;
      }
    );
  }, [h.data, h.isPending]);
  const I = L.useRef(void 0);
  L.useEffect(() => {
    var re, pe;
    const fe =
      (pe = (re = h.data) == null ? void 0 : re.user) == null ? void 0 : pe.id;
    I.current !== void 0 && I.current !== fe && oh(), (I.current = fe);
  }, [(de = (_ = h.data) == null ? void 0 : _.user) == null ? void 0 : de.id]);
  const ce = L.useCallback(() => !0, [k]),
    W = L.useCallback(() => !0, [k]),
    U = L.useCallback(async () => {
      var re, pe;
      h.refetch ? await h.refetch() : await Tf.getSession();
      const fe =
        ((pe = (re = h.data) == null ? void 0 : re.user) == null
          ? void 0
          : pe.isPro) || !1;
      if (fe && k.type === "free")
        try {
          const Re = await Cr.getValidToken(!0),
            Le = await Cr.validateLicense(Re);
          if (Le) {
            const Se = {
              type: (typeof Le.pro == "boolean" ? Le.pro : fe) ? "pro" : "free",
              expiresAt: Le.exp * 1e3,
              userId: Le.uid,
              features: Le.feat,
            };
            c(Se);
          }
        } catch (Re) {
          console.error(
            "[AuthProvider] Failed to force refresh license token:",
            Re,
          );
        }
    }, [h, k]),
    hn = {
      session: h,
      licenseInfo: k,
      isLoading: C,
      isPro: ce,
      hasPermission: W,
      refreshLicense: U,
    };
  return T.jsx(rp.Provider, { value: hn, children: d });
}
function Dh() {
  const d = L.useContext(rp);
  if (d === void 0)
    throw new Error("useLicense must be used within an AuthProvider");
  return d;
}
const Th = nh,
  Fh = Jg,
  ap = L.forwardRef(({ className: d, ...h }, k) =>
    T.jsx(Pf, {
      ref: k,
      className: Y(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        d,
      ),
      ...h,
    }),
  );
ap.displayName = Pf.displayName;
const op = L.forwardRef(({ className: d, children: h, ...k }, c) =>
  T.jsxs(Fh, {
    children: [
      T.jsx(ap, {}),
      T.jsxs(Lf, {
        ref: c,
        className: Y(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          d,
        ),
        ...k,
        children: [
          h,
          T.jsxs(Zg, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              T.jsx(eh, { className: "h-4 w-4" }),
              T.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  }),
);
op.displayName = Lf.displayName;
const ip = ({ className: d, ...h }) =>
  T.jsx("div", {
    className: Y("flex flex-col space-y-1.5 text-center sm:text-left", d),
    ...h,
  });
ip.displayName = "DialogHeader";
const sp = ({ className: d, ...h }) =>
  T.jsx("div", {
    className: Y(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      d,
    ),
    ...h,
  });
sp.displayName = "DialogFooter";
const up = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx(zf, {
    ref: k,
    className: Y("text-lg font-semibold leading-none tracking-tight", d),
    ...h,
  }),
);
up.displayName = zf.displayName;
const lp = L.forwardRef(({ className: d, ...h }, k) =>
  T.jsx(_f, { ref: k, className: Y("text-sm text-muted-foreground", d), ...h }),
);
lp.displayName = _f.displayName;
const Ah = (d, h, k, c) => {
    var x, I, ce, W;
    const C = [k, { code: h, ...(c || {}) }];
    if (
      (I = (x = d == null ? void 0 : d.services) == null ? void 0 : x.logger) !=
        null &&
      I.forward
    )
      return d.services.logger.forward(C, "warn", "react-i18next::", !0);
    Ut(C[0]) && (C[0] = `react-i18next:: ${C[0]}`),
      (W =
        (ce = d == null ? void 0 : d.services) == null ? void 0 : ce.logger) !=
        null && W.warn
        ? d.services.logger.warn(...C)
        : console != null && console.warn && console.warn(...C);
  },
  cp = {},
  lu = (d, h, k, c) => {
    (Ut(k) && cp[k]) || (Ut(k) && (cp[k] = new Date()), Ah(d, h, k, c));
  },
  dp = (d, h) => () => {
    if (d.isInitialized) h();
    else {
      const k = () => {
        setTimeout(() => {
          d.off("initialized", k);
        }, 0),
          h();
      };
      d.on("initialized", k);
    }
  },
  cu = (d, h, k) => {
    d.loadNamespaces(h, dp(d, k));
  },
  fp = (d, h, k, c) => {
    if (
      (Ut(k) && (k = [k]),
      d.options.preload && d.options.preload.indexOf(h) > -1)
    )
      return cu(d, k, c);
    k.forEach((C) => {
      d.options.ns.indexOf(C) < 0 && d.options.ns.push(C);
    }),
      d.loadLanguages(h, dp(d, c));
  },
  Oh = (d, h, k = {}) =>
    !h.languages || !h.languages.length
      ? (lu(h, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: h.languages,
        }),
        !0)
      : h.hasLoadedNamespace(d, {
          lng: k.lng,
          precheck: (c, C) => {
            if (
              k.bindI18n &&
              k.bindI18n.indexOf("languageChanging") > -1 &&
              c.services.backendConnector.backend &&
              c.isLanguageChangingTo &&
              !C(c.isLanguageChangingTo, d)
            )
              return !1;
          },
        }),
  Ut = (d) => typeof d == "string",
  Ih = (d) => typeof d == "object" && d !== null,
  pp = L.createContext();
class Rh {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(h) {
    h.forEach((k) => {
      this.usedNamespaces[k] || (this.usedNamespaces[k] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Mh = (d, h) => {
    if (Ut(h)) return h;
    if (Ih(h) && Ut(h.defaultValue)) return h.defaultValue;
    if (typeof d == "function") return "";
    if (Array.isArray(d)) {
      const k = d[d.length - 1];
      return typeof k == "function" ? "" : k;
    }
    return d;
  },
  jh = { t: Mh, ready: !1 },
  Uh = () => () => {},
  $h = (d, h = {}) => {
    var Pn, Ln, zn;
    const { i18n: k } = h,
      { i18n: c, defaultNS: C } = L.useContext(pp) || {},
      x = k || c || sh();
    x && !x.reportNamespaces && (x.reportNamespaces = new Rh()),
      x ||
        lu(
          x,
          "NO_I18NEXT_INSTANCE",
          "useTranslation: You will need to pass in an i18next instance by using initReactI18next",
        );
    const I = L.useMemo(() => {
        var R;
        return {
          ...ih(),
          ...((R = x == null ? void 0 : x.options) == null ? void 0 : R.react),
          ...h,
        };
      }, [x, h]),
      { useSuspense: ce, keyPrefix: W } = I,
      U =
        d ||
        C ||
        ((Pn = x == null ? void 0 : x.options) == null ? void 0 : Pn.defaultNS),
      hn = Ut(U) ? [U] : U || ["translation"],
      _ = L.useMemo(() => hn, hn);
    (zn =
      (Ln = x == null ? void 0 : x.reportNamespaces) == null
        ? void 0
        : Ln.addUsedNamespaces) == null || zn.call(Ln, _);
    const de = L.useRef(0),
      fe = L.useCallback(
        (R) => {
          if (!x) return Uh;
          const { bindI18n: ae, bindI18nStore: oe } = I,
            me = () => {
              (de.current += 1), R();
            };
          return (
            ae && x.on(ae, me),
            oe && x.store.on(oe, me),
            () => {
              ae && ae.split(" ").forEach((y) => x.off(y, me)),
                oe && oe.split(" ").forEach((y) => x.store.off(y, me));
            }
          );
        },
        [x, I],
      ),
      re = L.useRef(),
      pe = L.useCallback(() => {
        if (!x) return jh;
        const R =
            !!(x.isInitialized || x.initializedStoreOnce) &&
            _.every((E) => Oh(E, x, I)),
          ae = h.lng || x.language,
          oe = de.current,
          me = re.current;
        if (
          me &&
          me.ready === R &&
          me.lng === ae &&
          me.keyPrefix === W &&
          me.revision === oe
        )
          return me;
        const y = {
          t: x.getFixedT(ae, I.nsMode === "fallback" ? _ : _[0], W),
          ready: R,
          lng: ae,
          keyPrefix: W,
          revision: oe,
        };
        return (re.current = y), y;
      }, [x, _, W, I, h.lng]),
      [Re, Le] = L.useState(0),
      { t: Se, ready: K } = th.useSyncExternalStore(fe, pe, pe);
    L.useEffect(() => {
      if (x && !K && !ce) {
        const R = () => Le((ae) => ae + 1);
        h.lng ? fp(x, h.lng, _, R) : cu(x, _, R);
      }
    }, [x, h.lng, _, K, ce, Re]);
    const he = x || {},
      Me = L.useRef(null),
      $e = L.useRef(),
      sn = (R) => {
        const ae = Object.getOwnPropertyDescriptors(R);
        ae.__original && delete ae.__original;
        const oe = Object.create(Object.getPrototypeOf(R), ae);
        if (!Object.prototype.hasOwnProperty.call(oe, "__original"))
          try {
            Object.defineProperty(oe, "__original", {
              value: R,
              writable: !1,
              enumerable: !1,
              configurable: !1,
            });
          } catch {}
        return oe;
      },
      Xe = L.useMemo(() => {
        const R = he,
          ae = R == null ? void 0 : R.language;
        let oe = R;
        R &&
          (Me.current && Me.current.__original === R
            ? $e.current !== ae
              ? ((oe = sn(R)), (Me.current = oe), ($e.current = ae))
              : (oe = Me.current)
            : ((oe = sn(R)), (Me.current = oe), ($e.current = ae)));
        const me =
            !K && !ce
              ? (...E) => (
                  lu(
                    x,
                    "USE_T_BEFORE_READY",
                    "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t.",
                  ),
                  Se(...E)
                )
              : Se,
          y = [me, oe, K];
        return (y.t = me), (y.i18n = oe), (y.ready = K), y;
      }, [Se, he, K, he.resolvedLanguage, he.language, he.languages]);
    if (x && ce && !K)
      throw new Promise((R) => {
        const ae = () => R();
        h.lng ? fp(x, h.lng, _, ae) : cu(x, _, ae);
      });
    return Xe;
  };
function Bh({ i18n: d, defaultNS: h, children: k }) {
  const c = L.useMemo(() => ({ i18n: d, defaultNS: h }), [d, h]);
  return L.createElement(pp.Provider, { value: c }, k);
}
function mp(d) {
  return $h(d);
}
function Hh({ className: d, onClick: h, size: k = "sm" }) {
  const { t: c } = mp(["common"]),
    C = {
      xs: "h-3 w-3 text-xs",
      sm: "h-4 w-4 text-xs",
      md: "h-5 w-5 text-sm",
      lg: "h-6 w-6 text-base",
    };
  return T.jsxs("div", {
    className: Y(
      "inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium cursor-pointer hover:from-purple-600 hover:to-pink-600 transition-all",
      h && "hover:scale-105 active:scale-95",
      d,
    ),
    onClick: h,
    title: c("common:labels.pro"),
    children: [
      T.jsx(rh, { className: C[k] }),
      T.jsx("span", {
        className: "text-xs font-semibold uppercase",
        children: c("common:labels.pro"),
      }),
    ],
  });
}
function Wh() {
  const [d, h] = L.useState(null),
    [k, c] = L.useState(!1);
  return (
    L.useEffect(() => {
      (async () => {
        c(!0);
        try {
          const C = await uh(`${Ff.API_BASE_URL}/api/version`);
          if (C.ok) {
            const x = await C.json(),
              I = lh(),
              ce = qh(x.version, I) > 0;
            h({
              version: x.version,
              changelogUrl: `${Ff.API_BASE_URL}${x.changelogUrl}`,
              hasUpdate: ce,
            });
          }
        } catch (C) {
          console.error("Failed to check version:", C);
        } finally {
          c(!1);
        }
      })();
    }, []),
    { versionInfo: d, loading: k }
  );
}
function qh(d, h) {
  const k = d.split(".").map(Number),
    c = h.split(".").map(Number);
  for (let C = 0; C < Math.max(k.length, c.length); C++) {
    const x = k[C] || 0,
      I = c[C] || 0;
    if (x > I) return 1;
    if (x < I) return -1;
  }
  return 0;
}
const Vh = ({ size: d = 24, width: h, height: k, ...c }) => {
  const C = d;
  return T.jsxs("svg", {
    width: h || C,
    height: k || C,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...c,
    children: [
      T.jsx("path", {
        d: "M120 60H392V452L256 364L120 452V60Z",
        stroke: "currentColor",
        strokeWidth: "60",
        strokeLinecap: "square",
        strokeLinejoin: "miter",
      }),
      T.jsx("path", {
        d: "M256,125 L278,188 L345,188 L291,227 L312,290 L256,252 L200,290 L221,227 L167,188 L234,188 Z",
        fill: "currentColor",
      }),
    ],
  });
};
function Qh({ children: d }) {
  const { settings: h } = tp();
  return (
    L.useEffect(() => {
      h.language && su.language !== h.language && su.changeLanguage(h.language);
    }, [h.language]),
    T.jsx(Bh, { i18n: su, children: d })
  );
}
export {
  Xf as A,
  Vf as B,
  Uf as C,
  Th as D,
  Hf as E,
  Sh as F,
  Qh as I,
  Vh as L,
  Hh as P,
  gh as R,
  Qf as S,
  op as a,
  ip as b,
  up as c,
  lp as d,
  sp as e,
  tp as f,
  Ph as g,
  Dh as h,
  Wh as i,
  $f as j,
  Bf as k,
  kh as l,
  wh as m,
  Yf as n,
  Gf as o,
  Jf as p,
  ep as q,
  np as r,
  Zf as s,
  Wf as t,
  mp as u,
  bh as v,
  Kf as w,
  qf as x,
  _h as y,
  Y as z,
};
