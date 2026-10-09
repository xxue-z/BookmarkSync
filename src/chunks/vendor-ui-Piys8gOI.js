(function () {
  try {
    var e =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    e.SENTRY_RELEASE = { id: "bookmarkhub-extension@dev" };
    var t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "d2e6a2f1-80ad-463e-96f1-3afa0855c41b"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d2e6a2f1-80ad-463e-96f1-3afa0855c41b"));
  } catch {}
})();
function I2(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => n[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
var Xn =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function be(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function N2(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      var o = !1;
      try {
        o = this instanceof n;
      } catch {}
      return o
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (n) {
      var o = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        r,
        n,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            },
      );
    }),
    r
  );
}
var Cy = { exports: {} },
  Kn = {},
  Dy;
function R2() {
  if (Dy) return Kn;
  Dy = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var a = null;
    if (
      (i !== void 0 && (a = "" + i),
      o.key !== void 0 && (a = "" + o.key),
      "key" in o)
    ) {
      i = {};
      for (var c in o) c !== "key" && (i[c] = o[c]);
    } else i = o;
    return (
      (o = i.ref),
      { $$typeof: e, type: n, key: a, ref: o !== void 0 ? o : null, props: i }
    );
  }
  return (Kn.Fragment = t), (Kn.jsx = r), (Kn.jsxs = r), Kn;
}
var Iy;
function L2() {
  return Iy || ((Iy = 1), (Cy.exports = R2())), Cy.exports;
}
var E = L2(),
  Ny = { exports: {} },
  ue = {},
  Ry;
function B2() {
  if (Ry) return ue;
  Ry = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    n = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    i = Symbol.for("react.consumer"),
    a = Symbol.for("react.context"),
    c = Symbol.for("react.forward_ref"),
    u = Symbol.for("react.suspense"),
    s = Symbol.for("react.memo"),
    l = Symbol.for("react.lazy"),
    f = Symbol.for("react.activity"),
    p = Symbol.iterator;
  function h(P) {
    return P === null || typeof P != "object"
      ? null
      : ((P = (p && P[p]) || P["@@iterator"]),
        typeof P == "function" ? P : null);
  }
  var v = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    d = Object.assign,
    y = {};
  function m(P, L, X) {
    (this.props = P),
      (this.context = L),
      (this.refs = y),
      (this.updater = X || v);
  }
  (m.prototype.isReactComponent = {}),
    (m.prototype.setState = function (P, L) {
      if (typeof P != "object" && typeof P != "function" && P != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, P, L, "setState");
    }),
    (m.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, "forceUpdate");
    });
  function b() {}
  b.prototype = m.prototype;
  function x(P, L, X) {
    (this.props = P),
      (this.context = L),
      (this.refs = y),
      (this.updater = X || v);
  }
  var g = (x.prototype = new b());
  (g.constructor = x), d(g, m.prototype), (g.isPureReactComponent = !0);
  var O = Array.isArray;
  function S() {}
  var j = { H: null, A: null, T: null, S: null },
    k = Object.prototype.hasOwnProperty;
  function A(P, L, X) {
    var K = X.ref;
    return {
      $$typeof: e,
      type: P,
      key: L,
      ref: K !== void 0 ? K : null,
      props: X,
    };
  }
  function D(P, L) {
    return A(P.type, L, P.props);
  }
  function M(P) {
    return typeof P == "object" && P !== null && P.$$typeof === e;
  }
  function _(P) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      P.replace(/[=:]/g, function (X) {
        return L[X];
      })
    );
  }
  var C = /\/+/g;
  function T(P, L) {
    return typeof P == "object" && P !== null && P.key != null
      ? _("" + P.key)
      : L.toString(36);
  }
  function R(P) {
    switch (P.status) {
      case "fulfilled":
        return P.value;
      case "rejected":
        throw P.reason;
      default:
        switch (
          (typeof P.status == "string"
            ? P.then(S, S)
            : ((P.status = "pending"),
              P.then(
                function (L) {
                  P.status === "pending" &&
                    ((P.status = "fulfilled"), (P.value = L));
                },
                function (L) {
                  P.status === "pending" &&
                    ((P.status = "rejected"), (P.reason = L));
                },
              )),
          P.status)
        ) {
          case "fulfilled":
            return P.value;
          case "rejected":
            throw P.reason;
        }
    }
    throw P;
  }
  function N(P, L, X, K, Y) {
    var Q = typeof P;
    (Q === "undefined" || Q === "boolean") && (P = null);
    var q = !1;
    if (P === null) q = !0;
    else
      switch (Q) {
        case "bigint":
        case "string":
        case "number":
          q = !0;
          break;
        case "object":
          switch (P.$$typeof) {
            case e:
            case t:
              q = !0;
              break;
            case l:
              return (q = P._init), N(q(P._payload), L, X, K, Y);
          }
      }
    if (q)
      return (
        (Y = Y(P)),
        (q = K === "" ? "." + T(P, 0) : K),
        O(Y)
          ? ((X = ""),
            q != null && (X = q.replace(C, "$&/") + "/"),
            N(Y, L, X, "", function (G) {
              return G;
            }))
          : Y != null &&
            (M(Y) &&
              (Y = D(
                Y,
                X +
                  (Y.key == null || (P && P.key === Y.key)
                    ? ""
                    : ("" + Y.key).replace(C, "$&/") + "/") +
                  q,
              )),
            L.push(Y)),
        1
      );
    q = 0;
    var oe = K === "" ? "." : K + ":";
    if (O(P))
      for (var F = 0; F < P.length; F++)
        (K = P[F]), (Q = oe + T(K, F)), (q += N(K, L, X, Q, Y));
    else if (((F = h(P)), typeof F == "function"))
      for (P = F.call(P), F = 0; !(K = P.next()).done; )
        (K = K.value), (Q = oe + T(K, F++)), (q += N(K, L, X, Q, Y));
    else if (Q === "object") {
      if (typeof P.then == "function") return N(R(P), L, X, K, Y);
      throw (
        ((L = String(P)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(P).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return q;
  }
  function z(P, L, X) {
    if (P == null) return P;
    var K = [],
      Y = 0;
    return (
      N(P, K, "", "", function (Q) {
        return L.call(X, Q, Y++);
      }),
      K
    );
  }
  function W(P) {
    if (P._status === -1) {
      var L = P._result;
      (L = L()),
        L.then(
          function (X) {
            (P._status === 0 || P._status === -1) &&
              ((P._status = 1), (P._result = X));
          },
          function (X) {
            (P._status === 0 || P._status === -1) &&
              ((P._status = 2), (P._result = X));
          },
        ),
        P._status === -1 && ((P._status = 0), (P._result = L));
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var U =
      typeof reportError == "function"
        ? reportError
        : function (P) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var L = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof P == "object" &&
                  P !== null &&
                  typeof P.message == "string"
                    ? String(P.message)
                    : String(P),
                error: P,
              });
              if (!window.dispatchEvent(L)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", P);
              return;
            }
            console.error(P);
          },
    B = {
      map: z,
      forEach: function (P, L, X) {
        z(
          P,
          function () {
            L.apply(this, arguments);
          },
          X,
        );
      },
      count: function (P) {
        var L = 0;
        return (
          z(P, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (P) {
        return (
          z(P, function (L) {
            return L;
          }) || []
        );
      },
      only: function (P) {
        if (!M(P))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return P;
      },
    };
  return (
    (ue.Activity = f),
    (ue.Children = B),
    (ue.Component = m),
    (ue.Fragment = r),
    (ue.Profiler = o),
    (ue.PureComponent = x),
    (ue.StrictMode = n),
    (ue.Suspense = u),
    (ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j),
    (ue.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (P) {
        return j.H.useMemoCache(P);
      },
    }),
    (ue.cache = function (P) {
      return function () {
        return P.apply(null, arguments);
      };
    }),
    (ue.cacheSignal = function () {
      return null;
    }),
    (ue.cloneElement = function (P, L, X) {
      if (P == null)
        throw Error(
          "The argument must be a React element, but you passed " + P + ".",
        );
      var K = d({}, P.props),
        Y = P.key;
      if (L != null)
        for (Q in (L.key !== void 0 && (Y = "" + L.key), L))
          !k.call(L, Q) ||
            Q === "key" ||
            Q === "__self" ||
            Q === "__source" ||
            (Q === "ref" && L.ref === void 0) ||
            (K[Q] = L[Q]);
      var Q = arguments.length - 2;
      if (Q === 1) K.children = X;
      else if (1 < Q) {
        for (var q = Array(Q), oe = 0; oe < Q; oe++) q[oe] = arguments[oe + 2];
        K.children = q;
      }
      return A(P.type, Y, K);
    }),
    (ue.createContext = function (P) {
      return (
        (P = {
          $$typeof: a,
          _currentValue: P,
          _currentValue2: P,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (P.Provider = P),
        (P.Consumer = { $$typeof: i, _context: P }),
        P
      );
    }),
    (ue.createElement = function (P, L, X) {
      var K,
        Y = {},
        Q = null;
      if (L != null)
        for (K in (L.key !== void 0 && (Q = "" + L.key), L))
          k.call(L, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (Y[K] = L[K]);
      var q = arguments.length - 2;
      if (q === 1) Y.children = X;
      else if (1 < q) {
        for (var oe = Array(q), F = 0; F < q; F++) oe[F] = arguments[F + 2];
        Y.children = oe;
      }
      if (P && P.defaultProps)
        for (K in ((q = P.defaultProps), q)) Y[K] === void 0 && (Y[K] = q[K]);
      return A(P, Q, Y);
    }),
    (ue.createRef = function () {
      return { current: null };
    }),
    (ue.forwardRef = function (P) {
      return { $$typeof: c, render: P };
    }),
    (ue.isValidElement = M),
    (ue.lazy = function (P) {
      return { $$typeof: l, _payload: { _status: -1, _result: P }, _init: W };
    }),
    (ue.memo = function (P, L) {
      return { $$typeof: s, type: P, compare: L === void 0 ? null : L };
    }),
    (ue.startTransition = function (P) {
      var L = j.T,
        X = {};
      j.T = X;
      try {
        var K = P(),
          Y = j.S;
        Y !== null && Y(X, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(S, U);
      } catch (Q) {
        U(Q);
      } finally {
        L !== null && X.types !== null && (L.types = X.types), (j.T = L);
      }
    }),
    (ue.unstable_useCacheRefresh = function () {
      return j.H.useCacheRefresh();
    }),
    (ue.use = function (P) {
      return j.H.use(P);
    }),
    (ue.useActionState = function (P, L, X) {
      return j.H.useActionState(P, L, X);
    }),
    (ue.useCallback = function (P, L) {
      return j.H.useCallback(P, L);
    }),
    (ue.useContext = function (P) {
      return j.H.useContext(P);
    }),
    (ue.useDebugValue = function () {}),
    (ue.useDeferredValue = function (P, L) {
      return j.H.useDeferredValue(P, L);
    }),
    (ue.useEffect = function (P, L) {
      return j.H.useEffect(P, L);
    }),
    (ue.useEffectEvent = function (P) {
      return j.H.useEffectEvent(P);
    }),
    (ue.useId = function () {
      return j.H.useId();
    }),
    (ue.useImperativeHandle = function (P, L, X) {
      return j.H.useImperativeHandle(P, L, X);
    }),
    (ue.useInsertionEffect = function (P, L) {
      return j.H.useInsertionEffect(P, L);
    }),
    (ue.useLayoutEffect = function (P, L) {
      return j.H.useLayoutEffect(P, L);
    }),
    (ue.useMemo = function (P, L) {
      return j.H.useMemo(P, L);
    }),
    (ue.useOptimistic = function (P, L) {
      return j.H.useOptimistic(P, L);
    }),
    (ue.useReducer = function (P, L, X) {
      return j.H.useReducer(P, L, X);
    }),
    (ue.useRef = function (P) {
      return j.H.useRef(P);
    }),
    (ue.useState = function (P) {
      return j.H.useState(P);
    }),
    (ue.useSyncExternalStore = function (P, L, X) {
      return j.H.useSyncExternalStore(P, L, X);
    }),
    (ue.useTransition = function () {
      return j.H.useTransition();
    }),
    (ue.version = "19.2.3"),
    ue
  );
}
var Ly;
function vi() {
  return Ly || ((Ly = 1), (Ny.exports = B2())), Ny.exports;
}
var w = vi();
const I = be(w),
  Jc = I2({ __proto__: null, default: I }, [w]);
var Qc = { exports: {} },
  $e = {},
  By;
function z2() {
  if (By) return $e;
  By = 1;
  var e = vi();
  function t(u) {
    var s = "https://react.dev/errors/" + u;
    if (1 < arguments.length) {
      s += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        s += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      u +
      "; visit " +
      s +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var n = {
      d: {
        f: r,
        r: function () {
          throw Error(t(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function i(u, s, l) {
    var f =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: f == null ? null : "" + f,
      children: u,
      containerInfo: s,
      implementation: l,
    };
  }
  var a = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function c(u, s) {
    if (u === "font") return "";
    if (typeof s == "string") return s === "use-credentials" ? s : "";
  }
  return (
    ($e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n),
    ($e.createPortal = function (u, s) {
      var l =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!s || (s.nodeType !== 1 && s.nodeType !== 9 && s.nodeType !== 11))
        throw Error(t(299));
      return i(u, s, null, l);
    }),
    ($e.flushSync = function (u) {
      var s = a.T,
        l = n.p;
      try {
        if (((a.T = null), (n.p = 2), u)) return u();
      } finally {
        (a.T = s), (n.p = l), n.d.f();
      }
    }),
    ($e.preconnect = function (u, s) {
      typeof u == "string" &&
        (s
          ? ((s = s.crossOrigin),
            (s =
              typeof s == "string"
                ? s === "use-credentials"
                  ? s
                  : ""
                : void 0))
          : (s = null),
        n.d.C(u, s));
    }),
    ($e.prefetchDNS = function (u) {
      typeof u == "string" && n.d.D(u);
    }),
    ($e.preinit = function (u, s) {
      if (typeof u == "string" && s && typeof s.as == "string") {
        var l = s.as,
          f = c(l, s.crossOrigin),
          p = typeof s.integrity == "string" ? s.integrity : void 0,
          h = typeof s.fetchPriority == "string" ? s.fetchPriority : void 0;
        l === "style"
          ? n.d.S(u, typeof s.precedence == "string" ? s.precedence : void 0, {
              crossOrigin: f,
              integrity: p,
              fetchPriority: h,
            })
          : l === "script" &&
            n.d.X(u, {
              crossOrigin: f,
              integrity: p,
              fetchPriority: h,
              nonce: typeof s.nonce == "string" ? s.nonce : void 0,
            });
      }
    }),
    ($e.preinitModule = function (u, s) {
      if (typeof u == "string")
        if (typeof s == "object" && s !== null) {
          if (s.as == null || s.as === "script") {
            var l = c(s.as, s.crossOrigin);
            n.d.M(u, {
              crossOrigin: l,
              integrity: typeof s.integrity == "string" ? s.integrity : void 0,
              nonce: typeof s.nonce == "string" ? s.nonce : void 0,
            });
          }
        } else s == null && n.d.M(u);
    }),
    ($e.preload = function (u, s) {
      if (
        typeof u == "string" &&
        typeof s == "object" &&
        s !== null &&
        typeof s.as == "string"
      ) {
        var l = s.as,
          f = c(l, s.crossOrigin);
        n.d.L(u, l, {
          crossOrigin: f,
          integrity: typeof s.integrity == "string" ? s.integrity : void 0,
          nonce: typeof s.nonce == "string" ? s.nonce : void 0,
          type: typeof s.type == "string" ? s.type : void 0,
          fetchPriority:
            typeof s.fetchPriority == "string" ? s.fetchPriority : void 0,
          referrerPolicy:
            typeof s.referrerPolicy == "string" ? s.referrerPolicy : void 0,
          imageSrcSet:
            typeof s.imageSrcSet == "string" ? s.imageSrcSet : void 0,
          imageSizes: typeof s.imageSizes == "string" ? s.imageSizes : void 0,
          media: typeof s.media == "string" ? s.media : void 0,
        });
      }
    }),
    ($e.preloadModule = function (u, s) {
      if (typeof u == "string")
        if (s) {
          var l = c(s.as, s.crossOrigin);
          n.d.m(u, {
            as: typeof s.as == "string" && s.as !== "script" ? s.as : void 0,
            crossOrigin: l,
            integrity: typeof s.integrity == "string" ? s.integrity : void 0,
          });
        } else n.d.m(u);
    }),
    ($e.requestFormReset = function (u) {
      n.d.r(u);
    }),
    ($e.unstable_batchedUpdates = function (u, s) {
      return u(s);
    }),
    ($e.useFormState = function (u, s, l) {
      return a.H.useFormState(u, s, l);
    }),
    ($e.useFormStatus = function () {
      return a.H.useHostTransitionStatus();
    }),
    ($e.version = "19.2.3"),
    $e
  );
}
var zy;
function Fy() {
  if (zy) return Qc.exports;
  zy = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), (Qc.exports = z2()), Qc.exports;
}
function Uy(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Uy(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function de() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Uy(e)) && (n && (n += " "), (n += t));
  return n;
}
const F2 = (e, t) => {
    const r = new Array(e.length + t.length);
    for (let n = 0; n < e.length; n++) r[n] = e[n];
    for (let n = 0; n < t.length; n++) r[e.length + n] = t[n];
    return r;
  },
  U2 = (e, t) => ({ classGroupId: e, validator: t }),
  $y = (e = new Map(), t = null, r) => ({
    nextPart: e,
    validators: t,
    classGroupId: r,
  }),
  mi = "-",
  Hy = [],
  $2 = "arbitrary..",
  H2 = (e) => {
    const t = q2(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
    return {
      getClassGroupId: (o) => {
        if (o.startsWith("[") && o.endsWith("]")) return W2(o);
        const i = o.split(mi),
          a = i[0] === "" && i.length > 1 ? 1 : 0;
        return Wy(i, a, t);
      },
      getConflictingClassGroupIds: (o, i) => {
        if (i) {
          const a = n[o],
            c = r[o];
          return a ? (c ? F2(c, a) : a) : c || Hy;
        }
        return r[o] || Hy;
      },
    };
  },
  Wy = (e, t, r) => {
    if (e.length - t === 0) return r.classGroupId;
    const n = e[t],
      o = r.nextPart.get(n);
    if (o) {
      const u = Wy(e, t + 1, o);
      if (u) return u;
    }
    const i = r.validators;
    if (i === null) return;
    const a = t === 0 ? e.join(mi) : e.slice(t).join(mi),
      c = i.length;
    for (let u = 0; u < c; u++) {
      const s = i[u];
      if (s.validator(a)) return s.classGroupId;
    }
  },
  W2 = (e) =>
    e.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const t = e.slice(1, -1),
            r = t.indexOf(":"),
            n = t.slice(0, r);
          return n ? $2 + n : void 0;
        })(),
  q2 = (e) => {
    const { theme: t, classGroups: r } = e;
    return G2(r, t);
  },
  G2 = (e, t) => {
    const r = $y();
    for (const n in e) {
      const o = e[n];
      eu(o, r, n, t);
    }
    return r;
  },
  eu = (e, t, r, n) => {
    const o = e.length;
    for (let i = 0; i < o; i++) {
      const a = e[i];
      V2(a, t, r, n);
    }
  },
  V2 = (e, t, r, n) => {
    if (typeof e == "string") {
      X2(e, t, r);
      return;
    }
    if (typeof e == "function") {
      K2(e, t, r, n);
      return;
    }
    Y2(e, t, r, n);
  },
  X2 = (e, t, r) => {
    const n = e === "" ? t : qy(t, e);
    n.classGroupId = r;
  },
  K2 = (e, t, r, n) => {
    if (Z2(e)) {
      eu(e(n), t, r, n);
      return;
    }
    t.validators === null && (t.validators = []), t.validators.push(U2(r, e));
  },
  Y2 = (e, t, r, n) => {
    const o = Object.entries(e),
      i = o.length;
    for (let a = 0; a < i; a++) {
      const [c, u] = o[a];
      eu(u, qy(t, c), r, n);
    }
  },
  qy = (e, t) => {
    let r = e;
    const n = t.split(mi),
      o = n.length;
    for (let i = 0; i < o; i++) {
      const a = n[i];
      let c = r.nextPart.get(a);
      c || ((c = $y()), r.nextPart.set(a, c)), (r = c);
    }
    return r;
  },
  Z2 = (e) => "isThemeGetter" in e && e.isThemeGetter === !0,
  J2 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = Object.create(null),
      n = Object.create(null);
    const o = (i, a) => {
      (r[i] = a), t++, t > e && ((t = 0), (n = r), (r = Object.create(null)));
    };
    return {
      get(i) {
        let a = r[i];
        if (a !== void 0) return a;
        if ((a = n[i]) !== void 0) return o(i, a), a;
      },
      set(i, a) {
        i in r ? (r[i] = a) : o(i, a);
      },
    };
  },
  tu = "!",
  Gy = ":",
  Q2 = [],
  Vy = (e, t, r, n, o) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: r,
    maybePostfixModifierPosition: n,
    isExternal: o,
  }),
  eE = (e) => {
    const { prefix: t, experimentalParseClassName: r } = e;
    let n = (o) => {
      const i = [];
      let a = 0,
        c = 0,
        u = 0,
        s;
      const l = o.length;
      for (let d = 0; d < l; d++) {
        const y = o[d];
        if (a === 0 && c === 0) {
          if (y === Gy) {
            i.push(o.slice(u, d)), (u = d + 1);
            continue;
          }
          if (y === "/") {
            s = d;
            continue;
          }
        }
        y === "[" ? a++ : y === "]" ? a-- : y === "(" ? c++ : y === ")" && c--;
      }
      const f = i.length === 0 ? o : o.slice(u);
      let p = f,
        h = !1;
      f.endsWith(tu)
        ? ((p = f.slice(0, -1)), (h = !0))
        : f.startsWith(tu) && ((p = f.slice(1)), (h = !0));
      const v = s && s > u ? s - u : void 0;
      return Vy(i, h, p, v);
    };
    if (t) {
      const o = t + Gy,
        i = n;
      n = (a) =>
        a.startsWith(o) ? i(a.slice(o.length)) : Vy(Q2, !1, a, void 0, !0);
    }
    if (r) {
      const o = n;
      n = (i) => r({ className: i, parseClassName: o });
    }
    return n;
  },
  tE = (e) => {
    const t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((r, n) => {
        t.set(r, 1e6 + n);
      }),
      (r) => {
        const n = [];
        let o = [];
        for (let i = 0; i < r.length; i++) {
          const a = r[i],
            c = a[0] === "[",
            u = t.has(a);
          c || u
            ? (o.length > 0 && (o.sort(), n.push(...o), (o = [])), n.push(a))
            : o.push(a);
        }
        return o.length > 0 && (o.sort(), n.push(...o)), n;
      }
    );
  },
  rE = (e) => ({
    cache: J2(e.cacheSize),
    parseClassName: eE(e),
    sortModifiers: tE(e),
    ...H2(e),
  }),
  nE = /\s+/,
  oE = (e, t) => {
    const {
        parseClassName: r,
        getClassGroupId: n,
        getConflictingClassGroupIds: o,
        sortModifiers: i,
      } = t,
      a = [],
      c = e.trim().split(nE);
    let u = "";
    for (let s = c.length - 1; s >= 0; s -= 1) {
      const l = c[s],
        {
          isExternal: f,
          modifiers: p,
          hasImportantModifier: h,
          baseClassName: v,
          maybePostfixModifierPosition: d,
        } = r(l);
      if (f) {
        u = l + (u.length > 0 ? " " + u : u);
        continue;
      }
      let y = !!d,
        m = n(y ? v.substring(0, d) : v);
      if (!m) {
        if (!y) {
          u = l + (u.length > 0 ? " " + u : u);
          continue;
        }
        if (((m = n(v)), !m)) {
          u = l + (u.length > 0 ? " " + u : u);
          continue;
        }
        y = !1;
      }
      const b = p.length === 0 ? "" : p.length === 1 ? p[0] : i(p).join(":"),
        x = h ? b + tu : b,
        g = x + m;
      if (a.indexOf(g) > -1) continue;
      a.push(g);
      const O = o(m, y);
      for (let S = 0; S < O.length; ++S) {
        const j = O[S];
        a.push(x + j);
      }
      u = l + (u.length > 0 ? " " + u : u);
    }
    return u;
  },
  iE = (...e) => {
    let t = 0,
      r,
      n,
      o = "";
    for (; t < e.length; )
      (r = e[t++]) && (n = Xy(r)) && (o && (o += " "), (o += n));
    return o;
  },
  Xy = (e) => {
    if (typeof e == "string") return e;
    let t,
      r = "";
    for (let n = 0; n < e.length; n++)
      e[n] && (t = Xy(e[n])) && (r && (r += " "), (r += t));
    return r;
  },
  aE = (e, ...t) => {
    let r, n, o, i;
    const a = (u) => {
        const s = t.reduce((l, f) => f(l), e());
        return (r = rE(s)), (n = r.cache.get), (o = r.cache.set), (i = c), c(u);
      },
      c = (u) => {
        const s = n(u);
        if (s) return s;
        const l = oE(u, r);
        return o(u, l), l;
      };
    return (i = a), (...u) => i(iE(...u));
  },
  cE = [],
  Te = (e) => {
    const t = (r) => r[e] || cE;
    return (t.isThemeGetter = !0), t;
  },
  Ky = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Yy = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  uE = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  sE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  lE =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  fE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  pE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  dE =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  er = (e) => uE.test(e),
  se = (e) => !!e && !Number.isNaN(Number(e)),
  tr = (e) => !!e && Number.isInteger(Number(e)),
  ru = (e) => e.endsWith("%") && se(e.slice(0, -1)),
  Rt = (e) => sE.test(e),
  Zy = () => !0,
  hE = (e) => lE.test(e) && !fE.test(e),
  nu = () => !1,
  yE = (e) => pE.test(e),
  vE = (e) => dE.test(e),
  mE = (e) => !re(e) && !ne(e),
  gE = (e) => rr(e, nv, nu),
  re = (e) => Ky.test(e),
  br = (e) => rr(e, ov, hE),
  Jy = (e) => rr(e, PE, se),
  bE = (e) => rr(e, av, Zy),
  wE = (e) => rr(e, iv, nu),
  Qy = (e) => rr(e, tv, nu),
  xE = (e) => rr(e, rv, vE),
  gi = (e) => rr(e, cv, yE),
  ne = (e) => Yy.test(e),
  Yn = (e) => wr(e, ov),
  OE = (e) => wr(e, iv),
  ev = (e) => wr(e, tv),
  SE = (e) => wr(e, nv),
  jE = (e) => wr(e, rv),
  bi = (e) => wr(e, cv, !0),
  kE = (e) => wr(e, av, !0),
  rr = (e, t, r) => {
    const n = Ky.exec(e);
    return n ? (n[1] ? t(n[1]) : r(n[2])) : !1;
  },
  wr = (e, t, r = !1) => {
    const n = Yy.exec(e);
    return n ? (n[1] ? t(n[1]) : r) : !1;
  },
  tv = (e) => e === "position" || e === "percentage",
  rv = (e) => e === "image" || e === "url",
  nv = (e) => e === "length" || e === "size" || e === "bg-size",
  ov = (e) => e === "length",
  PE = (e) => e === "number",
  iv = (e) => e === "family-name",
  av = (e) => e === "number" || e === "weight",
  cv = (e) => e === "shadow",
  EE = () => {
    const e = Te("color"),
      t = Te("font"),
      r = Te("text"),
      n = Te("font-weight"),
      o = Te("tracking"),
      i = Te("leading"),
      a = Te("breakpoint"),
      c = Te("container"),
      u = Te("spacing"),
      s = Te("radius"),
      l = Te("shadow"),
      f = Te("inset-shadow"),
      p = Te("text-shadow"),
      h = Te("drop-shadow"),
      v = Te("blur"),
      d = Te("perspective"),
      y = Te("aspect"),
      m = Te("ease"),
      b = Te("animate"),
      x = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      g = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      O = () => [...g(), ne, re],
      S = () => ["auto", "hidden", "clip", "visible", "scroll"],
      j = () => ["auto", "contain", "none"],
      k = () => [ne, re, u],
      A = () => [er, "full", "auto", ...k()],
      D = () => [tr, "none", "subgrid", ne, re],
      M = () => ["auto", { span: ["full", tr, ne, re] }, tr, ne, re],
      _ = () => [tr, "auto", ne, re],
      C = () => ["auto", "min", "max", "fr", ne, re],
      T = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      R = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      N = () => ["auto", ...k()],
      z = () => [
        er,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...k(),
      ],
      W = () => [
        er,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...k(),
      ],
      U = () => [
        er,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...k(),
      ],
      B = () => [e, ne, re],
      P = () => [...g(), ev, Qy, { position: [ne, re] }],
      L = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      X = () => ["auto", "cover", "contain", SE, gE, { size: [ne, re] }],
      K = () => [ru, Yn, br],
      Y = () => ["", "none", "full", s, ne, re],
      Q = () => ["", se, Yn, br],
      q = () => ["solid", "dashed", "dotted", "double"],
      oe = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      F = () => [se, ru, ev, Qy],
      G = () => ["", "none", v, ne, re],
      Z = () => ["none", se, ne, re],
      $ = () => ["none", se, ne, re],
      pe = () => [se, ne, re],
      ae = () => [er, "full", ...k()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Rt],
        breakpoint: [Rt],
        color: [Zy],
        container: [Rt],
        "drop-shadow": [Rt],
        ease: ["in", "out", "in-out"],
        font: [mE],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Rt],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Rt],
        shadow: [Rt],
        spacing: ["px", se],
        text: [Rt],
        "text-shadow": [Rt],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", er, re, ne, y] }],
        container: ["container"],
        columns: [{ columns: [se, re, ne, c] }],
        "break-after": [{ "break-after": x() }],
        "break-before": [{ "break-before": x() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: O() }],
        overflow: [{ overflow: S() }],
        "overflow-x": [{ "overflow-x": S() }],
        "overflow-y": [{ "overflow-y": S() }],
        overscroll: [{ overscroll: j() }],
        "overscroll-x": [{ "overscroll-x": j() }],
        "overscroll-y": [{ "overscroll-y": j() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: A() }],
        "inset-x": [{ "inset-x": A() }],
        "inset-y": [{ "inset-y": A() }],
        start: [{ "inset-s": A(), start: A() }],
        end: [{ "inset-e": A(), end: A() }],
        "inset-bs": [{ "inset-bs": A() }],
        "inset-be": [{ "inset-be": A() }],
        top: [{ top: A() }],
        right: [{ right: A() }],
        bottom: [{ bottom: A() }],
        left: [{ left: A() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [tr, "auto", ne, re] }],
        basis: [{ basis: [er, "full", "auto", c, ...k()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [se, er, "auto", "initial", "none", re] }],
        grow: [{ grow: ["", se, ne, re] }],
        shrink: [{ shrink: ["", se, ne, re] }],
        order: [{ order: [tr, "first", "last", "none", ne, re] }],
        "grid-cols": [{ "grid-cols": D() }],
        "col-start-end": [{ col: M() }],
        "col-start": [{ "col-start": _() }],
        "col-end": [{ "col-end": _() }],
        "grid-rows": [{ "grid-rows": D() }],
        "row-start-end": [{ row: M() }],
        "row-start": [{ "row-start": _() }],
        "row-end": [{ "row-end": _() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": C() }],
        "auto-rows": [{ "auto-rows": C() }],
        gap: [{ gap: k() }],
        "gap-x": [{ "gap-x": k() }],
        "gap-y": [{ "gap-y": k() }],
        "justify-content": [{ justify: [...T(), "normal"] }],
        "justify-items": [{ "justify-items": [...R(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...R()] }],
        "align-content": [{ content: ["normal", ...T()] }],
        "align-items": [{ items: [...R(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...R(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": T() }],
        "place-items": [{ "place-items": [...R(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...R()] }],
        p: [{ p: k() }],
        px: [{ px: k() }],
        py: [{ py: k() }],
        ps: [{ ps: k() }],
        pe: [{ pe: k() }],
        pbs: [{ pbs: k() }],
        pbe: [{ pbe: k() }],
        pt: [{ pt: k() }],
        pr: [{ pr: k() }],
        pb: [{ pb: k() }],
        pl: [{ pl: k() }],
        m: [{ m: N() }],
        mx: [{ mx: N() }],
        my: [{ my: N() }],
        ms: [{ ms: N() }],
        me: [{ me: N() }],
        mbs: [{ mbs: N() }],
        mbe: [{ mbe: N() }],
        mt: [{ mt: N() }],
        mr: [{ mr: N() }],
        mb: [{ mb: N() }],
        ml: [{ ml: N() }],
        "space-x": [{ "space-x": k() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": k() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: z() }],
        "inline-size": [{ inline: ["auto", ...W()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...W()] }],
        "max-inline-size": [{ "max-inline": ["none", ...W()] }],
        "block-size": [{ block: ["auto", ...U()] }],
        "min-block-size": [{ "min-block": ["auto", ...U()] }],
        "max-block-size": [{ "max-block": ["none", ...U()] }],
        w: [{ w: [c, "screen", ...z()] }],
        "min-w": [{ "min-w": [c, "screen", "none", ...z()] }],
        "max-w": [
          { "max-w": [c, "screen", "none", "prose", { screen: [a] }, ...z()] },
        ],
        h: [{ h: ["screen", "lh", ...z()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...z()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...z()] }],
        "font-size": [{ text: ["base", r, Yn, br] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [n, kE, bE] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              ru,
              re,
            ],
          },
        ],
        "font-family": [{ font: [OE, wE, t] }],
        "font-features": [{ "font-features": [re] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [o, ne, re] }],
        "line-clamp": [{ "line-clamp": [se, "none", ne, Jy] }],
        leading: [{ leading: [i, ...k()] }],
        "list-image": [{ "list-image": ["none", ne, re] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ne, re] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: B() }],
        "text-color": [{ text: B() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...q(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [se, "from-font", "auto", ne, br] },
        ],
        "text-decoration-color": [{ decoration: B() }],
        "underline-offset": [{ "underline-offset": [se, "auto", ne, re] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: k() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ne,
              re,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ne, re] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: P() }],
        "bg-repeat": [{ bg: L() }],
        "bg-size": [{ bg: X() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  tr,
                  ne,
                  re,
                ],
                radial: ["", ne, re],
                conic: [tr, ne, re],
              },
              jE,
              xE,
            ],
          },
        ],
        "bg-color": [{ bg: B() }],
        "gradient-from-pos": [{ from: K() }],
        "gradient-via-pos": [{ via: K() }],
        "gradient-to-pos": [{ to: K() }],
        "gradient-from": [{ from: B() }],
        "gradient-via": [{ via: B() }],
        "gradient-to": [{ to: B() }],
        rounded: [{ rounded: Y() }],
        "rounded-s": [{ "rounded-s": Y() }],
        "rounded-e": [{ "rounded-e": Y() }],
        "rounded-t": [{ "rounded-t": Y() }],
        "rounded-r": [{ "rounded-r": Y() }],
        "rounded-b": [{ "rounded-b": Y() }],
        "rounded-l": [{ "rounded-l": Y() }],
        "rounded-ss": [{ "rounded-ss": Y() }],
        "rounded-se": [{ "rounded-se": Y() }],
        "rounded-ee": [{ "rounded-ee": Y() }],
        "rounded-es": [{ "rounded-es": Y() }],
        "rounded-tl": [{ "rounded-tl": Y() }],
        "rounded-tr": [{ "rounded-tr": Y() }],
        "rounded-br": [{ "rounded-br": Y() }],
        "rounded-bl": [{ "rounded-bl": Y() }],
        "border-w": [{ border: Q() }],
        "border-w-x": [{ "border-x": Q() }],
        "border-w-y": [{ "border-y": Q() }],
        "border-w-s": [{ "border-s": Q() }],
        "border-w-e": [{ "border-e": Q() }],
        "border-w-bs": [{ "border-bs": Q() }],
        "border-w-be": [{ "border-be": Q() }],
        "border-w-t": [{ "border-t": Q() }],
        "border-w-r": [{ "border-r": Q() }],
        "border-w-b": [{ "border-b": Q() }],
        "border-w-l": [{ "border-l": Q() }],
        "divide-x": [{ "divide-x": Q() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": Q() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...q(), "hidden", "none"] }],
        "divide-style": [{ divide: [...q(), "hidden", "none"] }],
        "border-color": [{ border: B() }],
        "border-color-x": [{ "border-x": B() }],
        "border-color-y": [{ "border-y": B() }],
        "border-color-s": [{ "border-s": B() }],
        "border-color-e": [{ "border-e": B() }],
        "border-color-bs": [{ "border-bs": B() }],
        "border-color-be": [{ "border-be": B() }],
        "border-color-t": [{ "border-t": B() }],
        "border-color-r": [{ "border-r": B() }],
        "border-color-b": [{ "border-b": B() }],
        "border-color-l": [{ "border-l": B() }],
        "divide-color": [{ divide: B() }],
        "outline-style": [{ outline: [...q(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [se, ne, re] }],
        "outline-w": [{ outline: ["", se, Yn, br] }],
        "outline-color": [{ outline: B() }],
        shadow: [{ shadow: ["", "none", l, bi, gi] }],
        "shadow-color": [{ shadow: B() }],
        "inset-shadow": [{ "inset-shadow": ["none", f, bi, gi] }],
        "inset-shadow-color": [{ "inset-shadow": B() }],
        "ring-w": [{ ring: Q() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: B() }],
        "ring-offset-w": [{ "ring-offset": [se, br] }],
        "ring-offset-color": [{ "ring-offset": B() }],
        "inset-ring-w": [{ "inset-ring": Q() }],
        "inset-ring-color": [{ "inset-ring": B() }],
        "text-shadow": [{ "text-shadow": ["none", p, bi, gi] }],
        "text-shadow-color": [{ "text-shadow": B() }],
        opacity: [{ opacity: [se, ne, re] }],
        "mix-blend": [
          { "mix-blend": [...oe(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": oe() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [se] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": F() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": F() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": B() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": B() }],
        "mask-image-t-from-pos": [{ "mask-t-from": F() }],
        "mask-image-t-to-pos": [{ "mask-t-to": F() }],
        "mask-image-t-from-color": [{ "mask-t-from": B() }],
        "mask-image-t-to-color": [{ "mask-t-to": B() }],
        "mask-image-r-from-pos": [{ "mask-r-from": F() }],
        "mask-image-r-to-pos": [{ "mask-r-to": F() }],
        "mask-image-r-from-color": [{ "mask-r-from": B() }],
        "mask-image-r-to-color": [{ "mask-r-to": B() }],
        "mask-image-b-from-pos": [{ "mask-b-from": F() }],
        "mask-image-b-to-pos": [{ "mask-b-to": F() }],
        "mask-image-b-from-color": [{ "mask-b-from": B() }],
        "mask-image-b-to-color": [{ "mask-b-to": B() }],
        "mask-image-l-from-pos": [{ "mask-l-from": F() }],
        "mask-image-l-to-pos": [{ "mask-l-to": F() }],
        "mask-image-l-from-color": [{ "mask-l-from": B() }],
        "mask-image-l-to-color": [{ "mask-l-to": B() }],
        "mask-image-x-from-pos": [{ "mask-x-from": F() }],
        "mask-image-x-to-pos": [{ "mask-x-to": F() }],
        "mask-image-x-from-color": [{ "mask-x-from": B() }],
        "mask-image-x-to-color": [{ "mask-x-to": B() }],
        "mask-image-y-from-pos": [{ "mask-y-from": F() }],
        "mask-image-y-to-pos": [{ "mask-y-to": F() }],
        "mask-image-y-from-color": [{ "mask-y-from": B() }],
        "mask-image-y-to-color": [{ "mask-y-to": B() }],
        "mask-image-radial": [{ "mask-radial": [ne, re] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": F() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": F() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": B() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": B() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": g() }],
        "mask-image-conic-pos": [{ "mask-conic": [se] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": F() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": F() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": B() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": B() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: P() }],
        "mask-repeat": [{ mask: L() }],
        "mask-size": [{ mask: X() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ne, re] }],
        filter: [{ filter: ["", "none", ne, re] }],
        blur: [{ blur: G() }],
        brightness: [{ brightness: [se, ne, re] }],
        contrast: [{ contrast: [se, ne, re] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", h, bi, gi] }],
        "drop-shadow-color": [{ "drop-shadow": B() }],
        grayscale: [{ grayscale: ["", se, ne, re] }],
        "hue-rotate": [{ "hue-rotate": [se, ne, re] }],
        invert: [{ invert: ["", se, ne, re] }],
        saturate: [{ saturate: [se, ne, re] }],
        sepia: [{ sepia: ["", se, ne, re] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ne, re] }],
        "backdrop-blur": [{ "backdrop-blur": G() }],
        "backdrop-brightness": [{ "backdrop-brightness": [se, ne, re] }],
        "backdrop-contrast": [{ "backdrop-contrast": [se, ne, re] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", se, ne, re] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [se, ne, re] }],
        "backdrop-invert": [{ "backdrop-invert": ["", se, ne, re] }],
        "backdrop-opacity": [{ "backdrop-opacity": [se, ne, re] }],
        "backdrop-saturate": [{ "backdrop-saturate": [se, ne, re] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", se, ne, re] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": k() }],
        "border-spacing-x": [{ "border-spacing-x": k() }],
        "border-spacing-y": [{ "border-spacing-y": k() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ne,
              re,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [se, "initial", ne, re] }],
        ease: [{ ease: ["linear", "initial", m, ne, re] }],
        delay: [{ delay: [se, ne, re] }],
        animate: [{ animate: ["none", b, ne, re] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [d, ne, re] }],
        "perspective-origin": [{ "perspective-origin": O() }],
        rotate: [{ rotate: Z() }],
        "rotate-x": [{ "rotate-x": Z() }],
        "rotate-y": [{ "rotate-y": Z() }],
        "rotate-z": [{ "rotate-z": Z() }],
        scale: [{ scale: $() }],
        "scale-x": [{ "scale-x": $() }],
        "scale-y": [{ "scale-y": $() }],
        "scale-z": [{ "scale-z": $() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: pe() }],
        "skew-x": [{ "skew-x": pe() }],
        "skew-y": [{ "skew-y": pe() }],
        transform: [{ transform: [ne, re, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: O() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: ae() }],
        "translate-x": [{ "translate-x": ae() }],
        "translate-y": [{ "translate-y": ae() }],
        "translate-z": [{ "translate-z": ae() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: B() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: B() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ne,
              re,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": k() }],
        "scroll-mx": [{ "scroll-mx": k() }],
        "scroll-my": [{ "scroll-my": k() }],
        "scroll-ms": [{ "scroll-ms": k() }],
        "scroll-me": [{ "scroll-me": k() }],
        "scroll-mbs": [{ "scroll-mbs": k() }],
        "scroll-mbe": [{ "scroll-mbe": k() }],
        "scroll-mt": [{ "scroll-mt": k() }],
        "scroll-mr": [{ "scroll-mr": k() }],
        "scroll-mb": [{ "scroll-mb": k() }],
        "scroll-ml": [{ "scroll-ml": k() }],
        "scroll-p": [{ "scroll-p": k() }],
        "scroll-px": [{ "scroll-px": k() }],
        "scroll-py": [{ "scroll-py": k() }],
        "scroll-ps": [{ "scroll-ps": k() }],
        "scroll-pe": [{ "scroll-pe": k() }],
        "scroll-pbs": [{ "scroll-pbs": k() }],
        "scroll-pbe": [{ "scroll-pbe": k() }],
        "scroll-pt": [{ "scroll-pt": k() }],
        "scroll-pr": [{ "scroll-pr": k() }],
        "scroll-pb": [{ "scroll-pb": k() }],
        "scroll-pl": [{ "scroll-pl": k() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", ne, re],
          },
        ],
        fill: [{ fill: ["none", ...B()] }],
        "stroke-w": [{ stroke: [se, Yn, br, Jy] }],
        stroke: [{ stroke: ["none", ...B()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  ME = aE(EE);
function uv(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Zn(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const i = uv(o, t);
      return !r && typeof i == "function" && (r = !0), i;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const i = n[o];
          typeof i == "function" ? i() : uv(e[o], null);
        }
      };
  };
}
function le(...e) {
  return w.useCallback(Zn(...e), e);
}
var _E = Symbol.for("react.lazy"),
  wi = Jc[" use ".trim().toString()];
function AE(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function sv(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "$$typeof" in e &&
    e.$$typeof === _E &&
    "_payload" in e &&
    AE(e._payload)
  );
}
function lv(e) {
  const t = CE(e),
    r = w.forwardRef((n, o) => {
      let { children: i, ...a } = n;
      sv(i) && typeof wi == "function" && (i = wi(i._payload));
      const c = w.Children.toArray(i),
        u = c.find(IE);
      if (u) {
        const s = u.props.children,
          l = c.map((f) =>
            f === u
              ? w.Children.count(s) > 1
                ? w.Children.only(null)
                : w.isValidElement(s)
                  ? s.props.children
                  : null
              : f,
          );
        return E.jsx(t, {
          ...a,
          ref: o,
          children: w.isValidElement(s) ? w.cloneElement(s, void 0, l) : null,
        });
      }
      return E.jsx(t, { ...a, ref: o, children: i });
    });
  return (r.displayName = `${e}.Slot`), r;
}
var TE = lv("Slot");
function CE(e) {
  const t = w.forwardRef((r, n) => {
    let { children: o, ...i } = r;
    if (
      (sv(o) && typeof wi == "function" && (o = wi(o._payload)),
      w.isValidElement(o))
    ) {
      const a = RE(o),
        c = NE(i, o.props);
      return (
        o.type !== w.Fragment && (c.ref = n ? Zn(n, a) : a),
        w.cloneElement(o, c)
      );
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var DE = Symbol("radix.slottable");
function IE(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === DE
  );
}
function NE(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n],
      i = t[n];
    /^on[A-Z]/.test(n)
      ? o && i
        ? (r[n] = (...a) => {
            const c = i(...a);
            return o(...a), c;
          })
        : o && (r[n] = o)
      : n === "style"
        ? (r[n] = { ...o, ...i })
        : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function RE(e) {
  var n, o;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
const fv = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  pv = de,
  LE = (e, t) => (r) => {
    var n;
    if ((t == null ? void 0 : t.variants) == null)
      return pv(
        e,
        r == null ? void 0 : r.class,
        r == null ? void 0 : r.className,
      );
    const { variants: o, defaultVariants: i } = t,
      a = Object.keys(o).map((s) => {
        const l = r == null ? void 0 : r[s],
          f = i == null ? void 0 : i[s];
        if (l === null) return null;
        const p = fv(l) || fv(f);
        return o[s][p];
      }),
      c =
        r &&
        Object.entries(r).reduce((s, l) => {
          let [f, p] = l;
          return p === void 0 || (s[f] = p), s;
        }, {}),
      u =
        t == null || (n = t.compoundVariants) === null || n === void 0
          ? void 0
          : n.reduce((s, l) => {
              let { class: f, className: p, ...h } = l;
              return Object.entries(h).every((v) => {
                let [d, y] = v;
                return Array.isArray(y)
                  ? y.includes({ ...i, ...c }[d])
                  : { ...i, ...c }[d] === y;
              })
                ? [...s, f, p]
                : s;
            }, []);
    return pv(
      e,
      a,
      u,
      r == null ? void 0 : r.class,
      r == null ? void 0 : r.className,
    );
  };
function J(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (n) {
    if ((e == null || e(n), r === !1 || !n.defaultPrevented))
      return t == null ? void 0 : t(n);
  };
}
function BE(e, t) {
  const r = w.createContext(t),
    n = (i) => {
      const { children: a, ...c } = i,
        u = w.useMemo(() => c, Object.values(c));
      return E.jsx(r.Provider, { value: u, children: a });
    };
  n.displayName = e + "Provider";
  function o(i) {
    const a = w.useContext(r);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function lt(e, t = []) {
  let r = [];
  function n(i, a) {
    const c = w.createContext(a),
      u = r.length;
    r = [...r, a];
    const s = (f) => {
      var m;
      const { scope: p, children: h, ...v } = f,
        d = ((m = p == null ? void 0 : p[e]) == null ? void 0 : m[u]) || c,
        y = w.useMemo(() => v, Object.values(v));
      return E.jsx(d.Provider, { value: y, children: h });
    };
    s.displayName = i + "Provider";
    function l(f, p) {
      var d;
      const h = ((d = p == null ? void 0 : p[e]) == null ? void 0 : d[u]) || c,
        v = w.useContext(h);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [s, l];
  }
  const o = () => {
    const i = r.map((a) => w.createContext(a));
    return function (a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: c } }), [a, c]);
    };
  };
  return (o.scopeName = e), [n, zE(o, ...t)];
}
function zE(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (o) {
      const i = n.reduce((a, { useScope: c, scopeName: u }) => {
        const s = c(o)[`__scope${u}`];
        return { ...a, ...s };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
var Me =
    globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
  FE = Jc[" useInsertionEffect ".trim().toString()] || Me;
function Lt({ prop: e, defaultProp: t, onChange: r = () => {}, caller: n }) {
  const [o, i, a] = UE({ defaultProp: t, onChange: r }),
    c = e !== void 0,
    u = c ? e : o;
  {
    const l = w.useRef(e !== void 0);
    w.useEffect(() => {
      const f = l.current;
      f !== c &&
        console.warn(
          `${n} is changing from ${f ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (l.current = c);
    }, [c, n]);
  }
  const s = w.useCallback(
    (l) => {
      var f;
      if (c) {
        const p = $E(l) ? l(e) : l;
        p !== e && ((f = a.current) == null || f.call(a, p));
      } else i(l);
    },
    [c, e, i, a],
  );
  return [u, s];
}
function UE({ defaultProp: e, onChange: t }) {
  const [r, n] = w.useState(e),
    o = w.useRef(r),
    i = w.useRef(t);
  return (
    FE(() => {
      i.current = t;
    }, [t]),
    w.useEffect(() => {
      var a;
      o.current !== r &&
        ((a = i.current) == null || a.call(i, r), (o.current = r));
    }, [r, o]),
    [r, n, i]
  );
}
function $E(e) {
  return typeof e == "function";
}
function ou(e) {
  const t = w.useRef({ value: e, previous: e });
  return w.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
function iu(e) {
  const [t, r] = w.useState(void 0);
  return (
    Me(() => {
      if (e) {
        r({ width: e.offsetWidth, height: e.offsetHeight });
        const n = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let a, c;
          if ("borderBoxSize" in i) {
            const u = i.borderBoxSize,
              s = Array.isArray(u) ? u[0] : u;
            (a = s.inlineSize), (c = s.blockSize);
          } else (a = e.offsetWidth), (c = e.offsetHeight);
          r({ width: a, height: c });
        });
        return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
      } else r(void 0);
    }, [e]),
    t
  );
}
var Jn = Fy();
const HE = be(Jn);
function Kr(e) {
  const t = WE(e),
    r = w.forwardRef((n, o) => {
      const { children: i, ...a } = n,
        c = w.Children.toArray(i),
        u = c.find(GE);
      if (u) {
        const s = u.props.children,
          l = c.map((f) =>
            f === u
              ? w.Children.count(s) > 1
                ? w.Children.only(null)
                : w.isValidElement(s)
                  ? s.props.children
                  : null
              : f,
          );
        return E.jsx(t, {
          ...a,
          ref: o,
          children: w.isValidElement(s) ? w.cloneElement(s, void 0, l) : null,
        });
      }
      return E.jsx(t, { ...a, ref: o, children: i });
    });
  return (r.displayName = `${e}.Slot`), r;
}
function WE(e) {
  const t = w.forwardRef((r, n) => {
    const { children: o, ...i } = r;
    if (w.isValidElement(o)) {
      const a = XE(o),
        c = VE(i, o.props);
      return (
        o.type !== w.Fragment && (c.ref = n ? Zn(n, a) : a),
        w.cloneElement(o, c)
      );
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var dv = Symbol("radix.slottable");
function qE(e) {
  const t = ({ children: r }) => E.jsx(E.Fragment, { children: r });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = dv), t;
}
function GE(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === dv
  );
}
function VE(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n],
      i = t[n];
    /^on[A-Z]/.test(n)
      ? o && i
        ? (r[n] = (...a) => {
            const c = i(...a);
            return o(...a), c;
          })
        : o && (r[n] = o)
      : n === "style"
        ? (r[n] = { ...o, ...i })
        : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function XE(e) {
  var n, o;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var KE = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ce = KE.reduce((e, t) => {
    const r = Kr(`Primitive.${t}`),
      n = w.forwardRef((o, i) => {
        const { asChild: a, ...c } = o,
          u = a ? r : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          E.jsx(u, { ...c, ref: i })
        );
      });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function hv(e, t) {
  e && Jn.flushSync(() => e.dispatchEvent(t));
}
var xi = "Switch",
  [YE] = lt(xi),
  [ZE, JE] = YE(xi),
  yv = w.forwardRef((e, t) => {
    const {
        __scopeSwitch: r,
        name: n,
        checked: o,
        defaultChecked: i,
        required: a,
        disabled: c,
        value: u = "on",
        onCheckedChange: s,
        form: l,
        ...f
      } = e,
      [p, h] = w.useState(null),
      v = le(t, (x) => h(x)),
      d = w.useRef(!1),
      y = p ? l || !!p.closest("form") : !0,
      [m, b] = Lt({ prop: o, defaultProp: i ?? !1, onChange: s, caller: xi });
    return E.jsxs(ZE, {
      scope: r,
      checked: m,
      disabled: c,
      children: [
        E.jsx(ce.button, {
          type: "button",
          role: "switch",
          "aria-checked": m,
          "aria-required": a,
          "data-state": bv(m),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: u,
          ...f,
          ref: v,
          onClick: J(e.onClick, (x) => {
            b((g) => !g),
              y &&
                ((d.current = x.isPropagationStopped()),
                d.current || x.stopPropagation());
          }),
        }),
        y &&
          E.jsx(gv, {
            control: p,
            bubbles: !d.current,
            name: n,
            value: u,
            checked: m,
            required: a,
            disabled: c,
            form: l,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
yv.displayName = xi;
var vv = "SwitchThumb",
  mv = w.forwardRef((e, t) => {
    const { __scopeSwitch: r, ...n } = e,
      o = JE(vv, r);
    return E.jsx(ce.span, {
      "data-state": bv(o.checked),
      "data-disabled": o.disabled ? "" : void 0,
      ...n,
      ref: t,
    });
  });
mv.displayName = vv;
var QE = "SwitchBubbleInput",
  gv = w.forwardRef(
    (
      { __scopeSwitch: e, control: t, checked: r, bubbles: n = !0, ...o },
      i,
    ) => {
      const a = w.useRef(null),
        c = le(a, i),
        u = ou(r),
        s = iu(t);
      return (
        w.useEffect(() => {
          const l = a.current;
          if (!l) return;
          const f = window.HTMLInputElement.prototype,
            p = Object.getOwnPropertyDescriptor(f, "checked").set;
          if (u !== r && p) {
            const h = new Event("click", { bubbles: n });
            p.call(l, r), l.dispatchEvent(h);
          }
        }, [u, r, n]),
        E.jsx("input", {
          type: "checkbox",
          "aria-hidden": !0,
          defaultChecked: r,
          ...o,
          tabIndex: -1,
          ref: c,
          style: {
            ...o.style,
            ...s,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      );
    },
  );
gv.displayName = QE;
function bv(e) {
  return e ? "checked" : "unchecked";
}
var eM = yv,
  tM = mv,
  rM = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Qn = rM.reduce((e, t) => {
    const r = lv(`Primitive.${t}`),
      n = w.forwardRef((o, i) => {
        const { asChild: a, ...c } = o,
          u = a ? r : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          E.jsx(u, { ...c, ref: i })
        );
      });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {}),
  nM = "Label",
  wv = w.forwardRef((e, t) =>
    E.jsx(Qn.label, {
      ...e,
      ref: t,
      onMouseDown: (r) => {
        var n;
        r.target.closest("button, input, select, textarea") ||
          ((n = e.onMouseDown) == null || n.call(e, r),
          !r.defaultPrevented && r.detail > 1 && r.preventDefault());
      },
    }),
  );
wv.displayName = nM;
var oM = wv;
function iM(e, t = []) {
  let r = [];
  function n(i, a) {
    const c = w.createContext(a);
    c.displayName = i + "Context";
    const u = r.length;
    r = [...r, a];
    const s = (f) => {
      var m;
      const { scope: p, children: h, ...v } = f,
        d = ((m = p == null ? void 0 : p[e]) == null ? void 0 : m[u]) || c,
        y = w.useMemo(() => v, Object.values(v));
      return E.jsx(d.Provider, { value: y, children: h });
    };
    s.displayName = i + "Provider";
    function l(f, p) {
      var d;
      const h = ((d = p == null ? void 0 : p[e]) == null ? void 0 : d[u]) || c,
        v = w.useContext(h);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [s, l];
  }
  const o = () => {
    const i = r.map((a) => w.createContext(a));
    return function (a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: c } }), [a, c]);
    };
  };
  return (o.scopeName = e), [n, aM(o, ...t)];
}
function aM(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (o) {
      const i = n.reduce((a, { useScope: c, scopeName: u }) => {
        const s = c(o)[`__scope${u}`];
        return { ...a, ...s };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function ft(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...r) => {
          var n;
          return (n = t.current) == null ? void 0 : n.call(t, ...r);
        },
      [],
    )
  );
}
var xv = { exports: {} },
  au = {},
  Ov;
function cM() {
  if (Ov) return au;
  Ov = 1;
  var e = vi();
  function t(f, p) {
    return (f === p && (f !== 0 || 1 / f === 1 / p)) || (f !== f && p !== p);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    o = e.useEffect,
    i = e.useLayoutEffect,
    a = e.useDebugValue;
  function c(f, p) {
    var h = p(),
      v = n({ inst: { value: h, getSnapshot: p } }),
      d = v[0].inst,
      y = v[1];
    return (
      i(
        function () {
          (d.value = h), (d.getSnapshot = p), u(d) && y({ inst: d });
        },
        [f, h, p],
      ),
      o(
        function () {
          return (
            u(d) && y({ inst: d }),
            f(function () {
              u(d) && y({ inst: d });
            })
          );
        },
        [f],
      ),
      a(h),
      h
    );
  }
  function u(f) {
    var p = f.getSnapshot;
    f = f.value;
    try {
      var h = p();
      return !r(f, h);
    } catch {
      return !0;
    }
  }
  function s(f, p) {
    return p();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? s
      : c;
  return (
    (au.useSyncExternalStore =
      e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    au
  );
}
var Sv;
function uM() {
  return Sv || ((Sv = 1), (xv.exports = cM())), xv.exports;
}
var jv = uM();
function sM() {
  return jv.useSyncExternalStore(
    lM,
    () => !0,
    () => !1,
  );
}
function lM() {
  return () => {};
}
var cu = "Avatar",
  [fM] = iM(cu),
  [pM, kv] = fM(cu),
  Pv = w.forwardRef((e, t) => {
    const { __scopeAvatar: r, ...n } = e,
      [o, i] = w.useState("idle");
    return E.jsx(pM, {
      scope: r,
      imageLoadingStatus: o,
      onImageLoadingStatusChange: i,
      children: E.jsx(Qn.span, { ...n, ref: t }),
    });
  });
Pv.displayName = cu;
var Ev = "AvatarImage",
  Mv = w.forwardRef((e, t) => {
    const {
        __scopeAvatar: r,
        src: n,
        onLoadingStatusChange: o = () => {},
        ...i
      } = e,
      a = kv(Ev, r),
      c = dM(n, i),
      u = ft((s) => {
        o(s), a.onImageLoadingStatusChange(s);
      });
    return (
      Me(() => {
        c !== "idle" && u(c);
      }, [c, u]),
      c === "loaded" ? E.jsx(Qn.img, { ...i, ref: t, src: n }) : null
    );
  });
Mv.displayName = Ev;
var _v = "AvatarFallback",
  Av = w.forwardRef((e, t) => {
    const { __scopeAvatar: r, delayMs: n, ...o } = e,
      i = kv(_v, r),
      [a, c] = w.useState(n === void 0);
    return (
      w.useEffect(() => {
        if (n !== void 0) {
          const u = window.setTimeout(() => c(!0), n);
          return () => window.clearTimeout(u);
        }
      }, [n]),
      a && i.imageLoadingStatus !== "loaded"
        ? E.jsx(Qn.span, { ...o, ref: t })
        : null
    );
  });
Av.displayName = _v;
function Tv(e, t) {
  return e
    ? t
      ? (e.src !== t && (e.src = t),
        e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
      : "error"
    : "idle";
}
function dM(e, { referrerPolicy: t, crossOrigin: r }) {
  const n = sM(),
    o = w.useRef(null),
    i = n ? (o.current || (o.current = new window.Image()), o.current) : null,
    [a, c] = w.useState(() => Tv(i, e));
  return (
    Me(() => {
      c(Tv(i, e));
    }, [i, e]),
    Me(() => {
      const u = (f) => () => {
        c(f);
      };
      if (!i) return;
      const s = u("loaded"),
        l = u("error");
      return (
        i.addEventListener("load", s),
        i.addEventListener("error", l),
        t && (i.referrerPolicy = t),
        typeof r == "string" && (i.crossOrigin = r),
        () => {
          i.removeEventListener("load", s), i.removeEventListener("error", l);
        }
      );
    }, [i, r, t]),
    a
  );
}
var hM = Pv,
  yM = Mv,
  vM = Av;
function Oi(e) {
  const t = e + "CollectionProvider",
    [r, n] = lt(t),
    [o, i] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
    a = (d) => {
      const { scope: y, children: m } = d,
        b = I.useRef(null),
        x = I.useRef(new Map()).current;
      return E.jsx(o, { scope: y, itemMap: x, collectionRef: b, children: m });
    };
  a.displayName = t;
  const c = e + "CollectionSlot",
    u = Kr(c),
    s = I.forwardRef((d, y) => {
      const { scope: m, children: b } = d,
        x = i(c, m),
        g = le(y, x.collectionRef);
      return E.jsx(u, { ref: g, children: b });
    });
  s.displayName = c;
  const l = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    p = Kr(l),
    h = I.forwardRef((d, y) => {
      const { scope: m, children: b, ...x } = d,
        g = I.useRef(null),
        O = le(y, g),
        S = i(l, m);
      return (
        I.useEffect(
          () => (
            S.itemMap.set(g, { ref: g, ...x }),
            () => {
              S.itemMap.delete(g);
            }
          ),
        ),
        E.jsx(p, { [f]: "", ref: O, children: b })
      );
    });
  h.displayName = l;
  function v(d) {
    const y = i(e + "CollectionConsumer", d);
    return I.useCallback(() => {
      const m = y.collectionRef.current;
      if (!m) return [];
      const b = Array.from(m.querySelectorAll(`[${f}]`));
      return Array.from(y.itemMap.values()).sort(
        (x, g) => b.indexOf(x.ref.current) - b.indexOf(g.ref.current),
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [{ Provider: a, Slot: s, ItemSlot: h }, v, n];
}
var mM = w.createContext(void 0);
function Si(e) {
  const t = w.useContext(mM);
  return e || t || "ltr";
}
function gM(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ft(e);
  w.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return (
      t.addEventListener("keydown", n, { capture: !0 }),
      () => t.removeEventListener("keydown", n, { capture: !0 })
    );
  }, [r, t]);
}
var bM = "DismissableLayer",
  uu = "dismissableLayer.update",
  wM = "dismissableLayer.pointerDownOutside",
  xM = "dismissableLayer.focusOutside",
  Cv,
  Dv = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  eo = w.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: n,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: a,
        onDismiss: c,
        ...u
      } = e,
      s = w.useContext(Dv),
      [l, f] = w.useState(null),
      p =
        (l == null ? void 0 : l.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = w.useState({}),
      v = le(t, (j) => f(j)),
      d = Array.from(s.layers),
      [y] = [...s.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = d.indexOf(y),
      b = l ? d.indexOf(l) : -1,
      x = s.layersWithOutsidePointerEventsDisabled.size > 0,
      g = b >= m,
      O = jM((j) => {
        const k = j.target,
          A = [...s.branches].some((D) => D.contains(k));
        !g ||
          A ||
          (o == null || o(j),
          a == null || a(j),
          j.defaultPrevented || c == null || c());
      }, p),
      S = kM((j) => {
        const k = j.target;
        [...s.branches].some((A) => A.contains(k)) ||
          (i == null || i(j),
          a == null || a(j),
          j.defaultPrevented || c == null || c());
      }, p);
    return (
      gM((j) => {
        b === s.layers.size - 1 &&
          (n == null || n(j),
          !j.defaultPrevented && c && (j.preventDefault(), c()));
      }, p),
      w.useEffect(() => {
        if (l)
          return (
            r &&
              (s.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Cv = p.body.style.pointerEvents),
                (p.body.style.pointerEvents = "none")),
              s.layersWithOutsidePointerEventsDisabled.add(l)),
            s.layers.add(l),
            Iv(),
            () => {
              r &&
                s.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (p.body.style.pointerEvents = Cv);
            }
          );
      }, [l, p, r, s]),
      w.useEffect(
        () => () => {
          l &&
            (s.layers.delete(l),
            s.layersWithOutsidePointerEventsDisabled.delete(l),
            Iv());
        },
        [l, s],
      ),
      w.useEffect(() => {
        const j = () => h({});
        return (
          document.addEventListener(uu, j),
          () => document.removeEventListener(uu, j)
        );
      }, []),
      E.jsx(ce.div, {
        ...u,
        ref: v,
        style: {
          pointerEvents: x ? (g ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: J(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: J(e.onPointerDownCapture, O.onPointerDownCapture),
      })
    );
  });
eo.displayName = bM;
var OM = "DismissableLayerBranch",
  SM = w.forwardRef((e, t) => {
    const r = w.useContext(Dv),
      n = w.useRef(null),
      o = le(t, n);
    return (
      w.useEffect(() => {
        const i = n.current;
        if (i)
          return (
            r.branches.add(i),
            () => {
              r.branches.delete(i);
            }
          );
      }, [r.branches]),
      E.jsx(ce.div, { ...e, ref: o })
    );
  });
SM.displayName = OM;
function jM(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ft(e),
    n = w.useRef(!1),
    o = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const i = (c) => {
          if (c.target && !n.current) {
            let u = function () {
              Nv(wM, r, s, { discrete: !0 });
            };
            const s = { originalEvent: c };
            c.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = u),
                t.addEventListener("click", o.current, { once: !0 }))
              : u();
          } else t.removeEventListener("click", o.current);
          n.current = !1;
        },
        a = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(a),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, r]),
    { onPointerDownCapture: () => (n.current = !0) }
  );
}
function kM(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ft(e),
    n = w.useRef(!1);
  return (
    w.useEffect(() => {
      const o = (i) => {
        i.target &&
          !n.current &&
          Nv(xM, r, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, r]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  );
}
function Iv() {
  const e = new CustomEvent(uu);
  document.dispatchEvent(e);
}
function Nv(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }),
    n ? hv(o, i) : o.dispatchEvent(i);
}
var su = 0;
function lu() {
  w.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Rv()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Rv()),
      su++,
      () => {
        su === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          su--;
      }
    );
  }, []);
}
function Rv() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var fu = "focusScope.autoFocusOnMount",
  pu = "focusScope.autoFocusOnUnmount",
  Lv = { bubbles: !1, cancelable: !0 },
  PM = "FocusScope",
  ji = w.forwardRef((e, t) => {
    const {
        loop: r = !1,
        trapped: n = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...a
      } = e,
      [c, u] = w.useState(null),
      s = ft(o),
      l = ft(i),
      f = w.useRef(null),
      p = le(t, (d) => u(d)),
      h = w.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    w.useEffect(() => {
      if (n) {
        let d = function (x) {
            if (h.paused || !c) return;
            const g = x.target;
            c.contains(g) ? (f.current = g) : nr(f.current, { select: !0 });
          },
          y = function (x) {
            if (h.paused || !c) return;
            const g = x.relatedTarget;
            g !== null && (c.contains(g) || nr(f.current, { select: !0 }));
          },
          m = function (x) {
            if (document.activeElement === document.body)
              for (const g of x) g.removedNodes.length > 0 && nr(c);
          };
        document.addEventListener("focusin", d),
          document.addEventListener("focusout", y);
        const b = new MutationObserver(m);
        return (
          c && b.observe(c, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", d),
              document.removeEventListener("focusout", y),
              b.disconnect();
          }
        );
      }
    }, [n, c, h.paused]),
      w.useEffect(() => {
        if (c) {
          Fv.add(h);
          const d = document.activeElement;
          if (!c.contains(d)) {
            const y = new CustomEvent(fu, Lv);
            c.addEventListener(fu, s),
              c.dispatchEvent(y),
              y.defaultPrevented ||
                (EM(CM(Bv(c)), { select: !0 }),
                document.activeElement === d && nr(c));
          }
          return () => {
            c.removeEventListener(fu, s),
              setTimeout(() => {
                const y = new CustomEvent(pu, Lv);
                c.addEventListener(pu, l),
                  c.dispatchEvent(y),
                  y.defaultPrevented || nr(d ?? document.body, { select: !0 }),
                  c.removeEventListener(pu, l),
                  Fv.remove(h);
              }, 0);
          };
        }
      }, [c, s, l, h]);
    const v = w.useCallback(
      (d) => {
        if ((!r && !n) || h.paused) return;
        const y = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey,
          m = document.activeElement;
        if (y && m) {
          const b = d.currentTarget,
            [x, g] = MM(b);
          x && g
            ? !d.shiftKey && m === g
              ? (d.preventDefault(), r && nr(x, { select: !0 }))
              : d.shiftKey &&
                m === x &&
                (d.preventDefault(), r && nr(g, { select: !0 }))
            : m === b && d.preventDefault();
        }
      },
      [r, n, h.paused],
    );
    return E.jsx(ce.div, { tabIndex: -1, ...a, ref: p, onKeyDown: v });
  });
ji.displayName = PM;
function EM(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if ((nr(n, { select: t }), document.activeElement !== r)) return;
}
function MM(e) {
  const t = Bv(e),
    r = zv(t, e),
    n = zv(t.reverse(), e);
  return [r, n];
}
function Bv(e) {
  const t = [],
    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const o = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || o
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function zv(e, t) {
  for (const r of e) if (!_M(r, { upTo: t })) return r;
}
function _M(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function AM(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function nr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && AM(e) && t && e.select();
  }
}
var Fv = TM();
function TM() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), (e = Uv(e, t)), e.unshift(t);
    },
    remove(t) {
      var r;
      (e = Uv(e, t)), (r = e[0]) == null || r.resume();
    },
  };
}
function Uv(e, t) {
  const r = [...e],
    n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function CM(e) {
  return e.filter((t) => t.tagName !== "A");
}
var DM = Jc[" useId ".trim().toString()] || (() => {}),
  IM = 0;
function pt(e) {
  const [t, r] = w.useState(DM());
  return (
    Me(() => {
      r((n) => n ?? String(IM++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const NM = ["top", "right", "bottom", "left"],
  or = Math.min,
  Ye = Math.max,
  ki = Math.round,
  Pi = Math.floor,
  jt = (e) => ({ x: e, y: e }),
  RM = { left: "right", right: "left", bottom: "top", top: "bottom" };
function du(e, t, r) {
  return Ye(e, or(t, r));
}
function Bt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zt(e) {
  return e.split("-")[0];
}
function Yr(e) {
  return e.split("-")[1];
}
function hu(e) {
  return e === "x" ? "y" : "x";
}
function yu(e) {
  return e === "y" ? "height" : "width";
}
function kt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function vu(e) {
  return hu(kt(e));
}
function LM(e, t, r) {
  r === void 0 && (r = !1);
  const n = Yr(e),
    o = vu(e),
    i = yu(o);
  let a =
    o === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
        ? "bottom"
        : "top";
  return t.reference[i] > t.floating[i] && (a = Ei(a)), [a, Ei(a)];
}
function BM(e) {
  const t = Ei(e);
  return [mu(e), t, mu(t)];
}
function mu(e) {
  return e.includes("start")
    ? e.replace("start", "end")
    : e.replace("end", "start");
}
const $v = ["left", "right"],
  Hv = ["right", "left"],
  zM = ["top", "bottom"],
  FM = ["bottom", "top"];
function UM(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? Hv : $v) : t ? $v : Hv;
    case "left":
    case "right":
      return t ? zM : FM;
    default:
      return [];
  }
}
function $M(e, t, r, n) {
  const o = Yr(e);
  let i = UM(zt(e), r === "start", n);
  return (
    o && ((i = i.map((a) => a + "-" + o)), t && (i = i.concat(i.map(mu)))), i
  );
}
function Ei(e) {
  const t = zt(e);
  return RM[t] + e.slice(t.length);
}
function HM(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Wv(e) {
  return typeof e != "number"
    ? HM(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Mi(e) {
  const { x: t, y: r, width: n, height: o } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r,
  };
}
function qv(e, t, r) {
  let { reference: n, floating: o } = e;
  const i = kt(t),
    a = vu(t),
    c = yu(a),
    u = zt(t),
    s = i === "y",
    l = n.x + n.width / 2 - o.width / 2,
    f = n.y + n.height / 2 - o.height / 2,
    p = n[c] / 2 - o[c] / 2;
  let h;
  switch (u) {
    case "top":
      h = { x: l, y: n.y - o.height };
      break;
    case "bottom":
      h = { x: l, y: n.y + n.height };
      break;
    case "right":
      h = { x: n.x + n.width, y: f };
      break;
    case "left":
      h = { x: n.x - o.width, y: f };
      break;
    default:
      h = { x: n.x, y: n.y };
  }
  switch (Yr(t)) {
    case "start":
      h[a] -= p * (r && s ? -1 : 1);
      break;
    case "end":
      h[a] += p * (r && s ? -1 : 1);
      break;
  }
  return h;
}
async function WM(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: o, platform: i, rects: a, elements: c, strategy: u } = e,
    {
      boundary: s = "clippingAncestors",
      rootBoundary: l = "viewport",
      elementContext: f = "floating",
      altBoundary: p = !1,
      padding: h = 0,
    } = Bt(t, e),
    v = Wv(h),
    d = c[p ? (f === "floating" ? "reference" : "floating") : f],
    y = Mi(
      await i.getClippingRect({
        element:
          (r = await (i.isElement == null ? void 0 : i.isElement(d))) == null ||
          r
            ? d
            : d.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(c.floating))),
        boundary: s,
        rootBoundary: l,
        strategy: u,
      }),
    ),
    m =
      f === "floating"
        ? { x: n, y: o, width: a.floating.width, height: a.floating.height }
        : a.reference,
    b = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(c.floating)),
    x = (await (i.isElement == null ? void 0 : i.isElement(b)))
      ? (await (i.getScale == null ? void 0 : i.getScale(b))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    g = Mi(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: c,
            rect: m,
            offsetParent: b,
            strategy: u,
          })
        : m,
    );
  return {
    top: (y.top - g.top + v.top) / x.y,
    bottom: (g.bottom - y.bottom + v.bottom) / x.y,
    left: (y.left - g.left + v.left) / x.x,
    right: (g.right - y.right + v.right) / x.x,
  };
}
const qM = 50,
  GM = async (e, t, r) => {
    const {
        placement: n = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: a,
      } = r,
      c = a.detectOverflow ? a : { ...a, detectOverflow: WM },
      u = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let s = await a.getElementRects({ reference: e, floating: t, strategy: o }),
      { x: l, y: f } = qv(s, n, u),
      p = n,
      h = 0;
    const v = {};
    for (let d = 0; d < i.length; d++) {
      const y = i[d];
      if (!y) continue;
      const { name: m, fn: b } = y,
        {
          x,
          y: g,
          data: O,
          reset: S,
        } = await b({
          x: l,
          y: f,
          initialPlacement: n,
          placement: p,
          strategy: o,
          middlewareData: v,
          rects: s,
          platform: c,
          elements: { reference: e, floating: t },
        });
      (l = x ?? l),
        (f = g ?? f),
        (v[m] = { ...v[m], ...O }),
        S &&
          h < qM &&
          (h++,
          typeof S == "object" &&
            (S.placement && (p = S.placement),
            S.rects &&
              (s =
                S.rects === !0
                  ? await a.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: o,
                    })
                  : S.rects),
            ({ x: l, y: f } = qv(s, p, u))),
          (d = -1));
    }
    return { x: l, y: f, placement: p, strategy: o, middlewareData: v };
  },
  VM = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: r,
          y: n,
          placement: o,
          rects: i,
          platform: a,
          elements: c,
          middlewareData: u,
        } = t,
        { element: s, padding: l = 0 } = Bt(e, t) || {};
      if (s == null) return {};
      const f = Wv(l),
        p = { x: r, y: n },
        h = vu(o),
        v = yu(h),
        d = await a.getDimensions(s),
        y = h === "y",
        m = y ? "top" : "left",
        b = y ? "bottom" : "right",
        x = y ? "clientHeight" : "clientWidth",
        g = i.reference[v] + i.reference[h] - p[h] - i.floating[v],
        O = p[h] - i.reference[h],
        S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s));
      let j = S ? S[x] : 0;
      (!j || !(await (a.isElement == null ? void 0 : a.isElement(S)))) &&
        (j = c.floating[x] || i.floating[v]);
      const k = g / 2 - O / 2,
        A = j / 2 - d[v] / 2 - 1,
        D = or(f[m], A),
        M = or(f[b], A),
        _ = D,
        C = j - d[v] - M,
        T = j / 2 - d[v] / 2 + k,
        R = du(_, T, C),
        N =
          !u.arrow &&
          Yr(o) != null &&
          T !== R &&
          i.reference[v] / 2 - (T < _ ? D : M) - d[v] / 2 < 0,
        z = N ? (T < _ ? T - _ : T - C) : 0;
      return {
        [h]: p[h] + z,
        data: {
          [h]: R,
          centerOffset: T - R - z,
          ...(N && { alignmentOffset: z }),
        },
        reset: N,
      };
    },
  }),
  XM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r, n;
          const {
              placement: o,
              middlewareData: i,
              rects: a,
              initialPlacement: c,
              platform: u,
              elements: s,
            } = t,
            {
              mainAxis: l = !0,
              crossAxis: f = !0,
              fallbackPlacements: p,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: d = !0,
              ...y
            } = Bt(e, t);
          if ((r = i.arrow) != null && r.alignmentOffset) return {};
          const m = zt(o),
            b = kt(c),
            x = zt(c) === c,
            g = await (u.isRTL == null ? void 0 : u.isRTL(s.floating)),
            O = p || (x || !d ? [Ei(c)] : BM(c)),
            S = v !== "none";
          !p && S && O.push(...$M(c, d, v, g));
          const j = [c, ...O],
            k = await u.detectOverflow(t, y),
            A = [];
          let D = ((n = i.flip) == null ? void 0 : n.overflows) || [];
          if ((l && A.push(k[m]), f)) {
            const T = LM(o, a, g);
            A.push(k[T[0]], k[T[1]]);
          }
          if (
            ((D = [...D, { placement: o, overflows: A }]),
            !A.every((T) => T <= 0))
          ) {
            var M, _;
            const T = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1,
              R = j[T];
            if (
              R &&
              (!(f === "alignment" && b !== kt(R)) ||
                D.every((z) =>
                  kt(z.placement) === b ? z.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: T, overflows: D },
                reset: { placement: R },
              };
            let N =
              (_ = D.filter((z) => z.overflows[0] <= 0).sort(
                (z, W) => z.overflows[1] - W.overflows[1],
              )[0]) == null
                ? void 0
                : _.placement;
            if (!N)
              switch (h) {
                case "bestFit": {
                  var C;
                  const z =
                    (C = D.filter((W) => {
                      if (S) {
                        const U = kt(W.placement);
                        return U === b || U === "y";
                      }
                      return !0;
                    })
                      .map((W) => [
                        W.placement,
                        W.overflows
                          .filter((U) => U > 0)
                          .reduce((U, B) => U + B, 0),
                      ])
                      .sort((W, U) => W[1] - U[1])[0]) == null
                      ? void 0
                      : C[0];
                  z && (N = z);
                  break;
                }
                case "initialPlacement":
                  N = c;
                  break;
              }
            if (o !== N) return { reset: { placement: N } };
          }
          return {};
        },
      }
    );
  };
function Gv(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Vv(e) {
  return NM.some((t) => e[t] >= 0);
}
const KM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: r, platform: n } = t,
            { strategy: o = "referenceHidden", ...i } = Bt(e, t);
          switch (o) {
            case "referenceHidden": {
              const a = await n.detectOverflow(t, {
                  ...i,
                  elementContext: "reference",
                }),
                c = Gv(a, r.reference);
              return {
                data: { referenceHiddenOffsets: c, referenceHidden: Vv(c) },
              };
            }
            case "escaped": {
              const a = await n.detectOverflow(t, { ...i, altBoundary: !0 }),
                c = Gv(a, r.floating);
              return { data: { escapedOffsets: c, escaped: Vv(c) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Xv = new Set(["left", "top"]);
async function YM(e, t) {
  const { placement: r, platform: n, elements: o } = e,
    i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)),
    a = zt(r),
    c = Yr(r),
    u = kt(r) === "y",
    s = Xv.has(a) ? -1 : 1,
    l = i && u ? -1 : 1,
    f = Bt(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: v,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    c && typeof v == "number" && (h = c === "end" ? v * -1 : v),
    u ? { x: h * l, y: p * s } : { x: p * s, y: h * l }
  );
}
const ZM = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, n;
          const { x: o, y: i, placement: a, middlewareData: c } = t,
            u = await YM(t, e);
          return a === ((r = c.offset) == null ? void 0 : r.placement) &&
            (n = c.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: o + u.x, y: i + u.y, data: { ...u, placement: a } };
        },
      }
    );
  },
  JM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: n, placement: o, platform: i } = t,
            {
              mainAxis: a = !0,
              crossAxis: c = !1,
              limiter: u = {
                fn: (m) => {
                  let { x: b, y: x } = m;
                  return { x: b, y: x };
                },
              },
              ...s
            } = Bt(e, t),
            l = { x: r, y: n },
            f = await i.detectOverflow(t, s),
            p = kt(zt(o)),
            h = hu(p);
          let v = l[h],
            d = l[p];
          if (a) {
            const m = h === "y" ? "top" : "left",
              b = h === "y" ? "bottom" : "right",
              x = v + f[m],
              g = v - f[b];
            v = du(x, v, g);
          }
          if (c) {
            const m = p === "y" ? "top" : "left",
              b = p === "y" ? "bottom" : "right",
              x = d + f[m],
              g = d - f[b];
            d = du(x, d, g);
          }
          const y = u.fn({ ...t, [h]: v, [p]: d });
          return {
            ...y,
            data: { x: y.x - r, y: y.y - n, enabled: { [h]: a, [p]: c } },
          };
        },
      }
    );
  },
  QM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: r, y: n, placement: o, rects: i, middlewareData: a } = t,
            { offset: c = 0, mainAxis: u = !0, crossAxis: s = !0 } = Bt(e, t),
            l = { x: r, y: n },
            f = kt(o),
            p = hu(f);
          let h = l[p],
            v = l[f];
          const d = Bt(c, t),
            y =
              typeof d == "number"
                ? { mainAxis: d, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...d };
          if (u) {
            const x = p === "y" ? "height" : "width",
              g = i.reference[p] - i.floating[x] + y.mainAxis,
              O = i.reference[p] + i.reference[x] - y.mainAxis;
            h < g ? (h = g) : h > O && (h = O);
          }
          if (s) {
            var m, b;
            const x = p === "y" ? "width" : "height",
              g = Xv.has(zt(o)),
              O =
                i.reference[f] -
                i.floating[x] +
                ((g && ((m = a.offset) == null ? void 0 : m[f])) || 0) +
                (g ? 0 : y.crossAxis),
              S =
                i.reference[f] +
                i.reference[x] +
                (g ? 0 : ((b = a.offset) == null ? void 0 : b[f]) || 0) -
                (g ? y.crossAxis : 0);
            v < O ? (v = O) : v > S && (v = S);
          }
          return { [p]: h, [f]: v };
        },
      }
    );
  },
  e_ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var r, n;
          const { placement: o, rects: i, platform: a, elements: c } = t,
            { apply: u = () => {}, ...s } = Bt(e, t),
            l = await a.detectOverflow(t, s),
            f = zt(o),
            p = Yr(o),
            h = kt(o) === "y",
            { width: v, height: d } = i.floating;
          let y, m;
          f === "top" || f === "bottom"
            ? ((y = f),
              (m =
                p ===
                ((await (a.isRTL == null ? void 0 : a.isRTL(c.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = f), (y = p === "end" ? "top" : "bottom"));
          const b = d - l.top - l.bottom,
            x = v - l.left - l.right,
            g = or(d - l[y], b),
            O = or(v - l[m], x),
            S = !t.middlewareData.shift;
          let j = g,
            k = O;
          if (
            ((r = t.middlewareData.shift) != null && r.enabled.x && (k = x),
            (n = t.middlewareData.shift) != null && n.enabled.y && (j = b),
            S && !p)
          ) {
            const D = Ye(l.left, 0),
              M = Ye(l.right, 0),
              _ = Ye(l.top, 0),
              C = Ye(l.bottom, 0);
            h
              ? (k = v - 2 * (D !== 0 || M !== 0 ? D + M : Ye(l.left, l.right)))
              : (j =
                  d - 2 * (_ !== 0 || C !== 0 ? _ + C : Ye(l.top, l.bottom)));
          }
          await u({ ...t, availableWidth: k, availableHeight: j });
          const A = await a.getDimensions(c.floating);
          return v !== A.width || d !== A.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function _i() {
  return typeof window < "u";
}
function Zr(e) {
  return Kv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ze(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Pt(e) {
  var t;
  return (t = (Kv(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Kv(e) {
  return _i() ? e instanceof Node || e instanceof Ze(e).Node : !1;
}
function dt(e) {
  return _i() ? e instanceof Element || e instanceof Ze(e).Element : !1;
}
function Ft(e) {
  return _i() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1;
}
function Yv(e) {
  return !_i() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot;
}
function to(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: o } = ht(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
    o !== "inline" &&
    o !== "contents"
  );
}
function t_(e) {
  return /^(table|td|th)$/.test(Zr(e));
}
function Ai(e) {
  try {
    if (e.matches(":popover-open")) return !0;
  } catch {}
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const r_ = /transform|translate|scale|rotate|perspective|filter/,
  n_ = /paint|layout|strict|content/,
  xr = (e) => !!e && e !== "none";
let gu;
function bu(e) {
  const t = dt(e) ? ht(e) : e;
  return (
    xr(t.transform) ||
    xr(t.translate) ||
    xr(t.scale) ||
    xr(t.rotate) ||
    xr(t.perspective) ||
    (!wu() && (xr(t.backdropFilter) || xr(t.filter))) ||
    r_.test(t.willChange || "") ||
    n_.test(t.contain || "")
  );
}
function o_(e) {
  let t = ir(e);
  for (; Ft(t) && !Jr(t); ) {
    if (bu(t)) return t;
    if (Ai(t)) return null;
    t = ir(t);
  }
  return null;
}
function wu() {
  return (
    gu == null &&
      (gu =
        typeof CSS < "u" &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    gu
  );
}
function Jr(e) {
  return /^(html|body|#document)$/.test(Zr(e));
}
function ht(e) {
  return Ze(e).getComputedStyle(e);
}
function Ti(e) {
  return dt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function ir(e) {
  if (Zr(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Yv(e) && e.host) || Pt(e);
  return Yv(t) ? t.host : t;
}
function Zv(e) {
  const t = ir(e);
  return Jr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Ft(t) && to(t)
      ? t
      : Zv(t);
}
function ro(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Zv(e),
    i = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
    a = Ze(o);
  if (i) {
    const c = xu(a);
    return t.concat(
      a,
      a.visualViewport || [],
      to(o) ? o : [],
      c && r ? ro(c) : [],
    );
  } else return t.concat(o, ro(o, [], r));
}
function xu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Jv(e) {
  const t = ht(e);
  let r = parseFloat(t.width) || 0,
    n = parseFloat(t.height) || 0;
  const o = Ft(e),
    i = o ? e.offsetWidth : r,
    a = o ? e.offsetHeight : n,
    c = ki(r) !== i || ki(n) !== a;
  return c && ((r = i), (n = a)), { width: r, height: n, $: c };
}
function Ou(e) {
  return dt(e) ? e : e.contextElement;
}
function Qr(e) {
  const t = Ou(e);
  if (!Ft(t)) return jt(1);
  const r = t.getBoundingClientRect(),
    { width: n, height: o, $: i } = Jv(t);
  let a = (i ? ki(r.width) : r.width) / n,
    c = (i ? ki(r.height) : r.height) / o;
  return (
    (!a || !Number.isFinite(a)) && (a = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    { x: a, y: c }
  );
}
const i_ = jt(0);
function Qv(e) {
  const t = Ze(e);
  return !wu() || !t.visualViewport
    ? i_
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function a_(e, t, r) {
  return t === void 0 && (t = !1), !r || (t && r !== Ze(e)) ? !1 : t;
}
function Or(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(),
    i = Ou(e);
  let a = jt(1);
  t && (n ? dt(n) && (a = Qr(n)) : (a = Qr(e)));
  const c = a_(i, r, n) ? Qv(i) : jt(0);
  let u = (o.left + c.x) / a.x,
    s = (o.top + c.y) / a.y,
    l = o.width / a.x,
    f = o.height / a.y;
  if (i) {
    const p = Ze(i),
      h = n && dt(n) ? Ze(n) : n;
    let v = p,
      d = xu(v);
    for (; d && n && h !== v; ) {
      const y = Qr(d),
        m = d.getBoundingClientRect(),
        b = ht(d),
        x = m.left + (d.clientLeft + parseFloat(b.paddingLeft)) * y.x,
        g = m.top + (d.clientTop + parseFloat(b.paddingTop)) * y.y;
      (u *= y.x),
        (s *= y.y),
        (l *= y.x),
        (f *= y.y),
        (u += x),
        (s += g),
        (v = Ze(d)),
        (d = xu(v));
    }
  }
  return Mi({ width: l, height: f, x: u, y: s });
}
function Ci(e, t) {
  const r = Ti(e).scrollLeft;
  return t ? t.left + r : Or(Pt(e)).left + r;
}
function em(e, t) {
  const r = e.getBoundingClientRect(),
    n = r.left + t.scrollLeft - Ci(e, r),
    o = r.top + t.scrollTop;
  return { x: n, y: o };
}
function c_(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: o } = e;
  const i = o === "fixed",
    a = Pt(n),
    c = t ? Ai(t.floating) : !1;
  if (n === a || (c && i)) return r;
  let u = { scrollLeft: 0, scrollTop: 0 },
    s = jt(1);
  const l = jt(0),
    f = Ft(n);
  if ((f || (!f && !i)) && ((Zr(n) !== "body" || to(a)) && (u = Ti(n)), f)) {
    const h = Or(n);
    (s = Qr(n)), (l.x = h.x + n.clientLeft), (l.y = h.y + n.clientTop);
  }
  const p = a && !f && !i ? em(a, u) : jt(0);
  return {
    width: r.width * s.x,
    height: r.height * s.y,
    x: r.x * s.x - u.scrollLeft * s.x + l.x + p.x,
    y: r.y * s.y - u.scrollTop * s.y + l.y + p.y,
  };
}
function u_(e) {
  return Array.from(e.getClientRects());
}
function s_(e) {
  const t = Pt(e),
    r = Ti(e),
    n = e.ownerDocument.body,
    o = Ye(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
    i = Ye(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + Ci(e);
  const c = -r.scrollTop;
  return (
    ht(n).direction === "rtl" && (a += Ye(t.clientWidth, n.clientWidth) - o),
    { width: o, height: i, x: a, y: c }
  );
}
const tm = 25;
function l_(e, t) {
  const r = Ze(e),
    n = Pt(e),
    o = r.visualViewport;
  let i = n.clientWidth,
    a = n.clientHeight,
    c = 0,
    u = 0;
  if (o) {
    (i = o.width), (a = o.height);
    const l = wu();
    (!l || (l && t === "fixed")) && ((c = o.offsetLeft), (u = o.offsetTop));
  }
  const s = Ci(n);
  if (s <= 0) {
    const l = n.ownerDocument,
      f = l.body,
      p = getComputedStyle(f),
      h =
        (l.compatMode === "CSS1Compat" &&
          parseFloat(p.marginLeft) + parseFloat(p.marginRight)) ||
        0,
      v = Math.abs(n.clientWidth - f.clientWidth - h);
    v <= tm && (i -= v);
  } else s <= tm && (i += s);
  return { width: i, height: a, x: c, y: u };
}
function f_(e, t) {
  const r = Or(e, !0, t === "fixed"),
    n = r.top + e.clientTop,
    o = r.left + e.clientLeft,
    i = Ft(e) ? Qr(e) : jt(1),
    a = e.clientWidth * i.x,
    c = e.clientHeight * i.y,
    u = o * i.x,
    s = n * i.y;
  return { width: a, height: c, x: u, y: s };
}
function rm(e, t, r) {
  let n;
  if (t === "viewport") n = l_(e, r);
  else if (t === "document") n = s_(Pt(e));
  else if (dt(t)) n = f_(t, r);
  else {
    const o = Qv(e);
    n = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Mi(n);
}
function nm(e, t) {
  const r = ir(e);
  return r === t || !dt(r) || Jr(r)
    ? !1
    : ht(r).position === "fixed" || nm(r, t);
}
function p_(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = ro(e, [], !1).filter((c) => dt(c) && Zr(c) !== "body"),
    o = null;
  const i = ht(e).position === "fixed";
  let a = i ? ir(e) : e;
  for (; dt(a) && !Jr(a); ) {
    const c = ht(a),
      u = bu(a);
    !u && c.position === "fixed" && (o = null),
      (
        i
          ? !u && !o
          : (!u &&
              c.position === "static" &&
              o &&
              (o.position === "absolute" || o.position === "fixed")) ||
            (to(a) && !u && nm(e, a))
      )
        ? (n = n.filter((s) => s !== a))
        : (o = c),
      (a = ir(a));
  }
  return t.set(e, n), n;
}
function d_(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: o } = e;
  const i = [
      ...(r === "clippingAncestors"
        ? Ai(t)
          ? []
          : p_(t, this._c)
        : [].concat(r)),
      n,
    ],
    a = rm(t, i[0], o);
  let c = a.top,
    u = a.right,
    s = a.bottom,
    l = a.left;
  for (let f = 1; f < i.length; f++) {
    const p = rm(t, i[f], o);
    (c = Ye(p.top, c)),
      (u = or(p.right, u)),
      (s = or(p.bottom, s)),
      (l = Ye(p.left, l));
  }
  return { width: u - l, height: s - c, x: l, y: c };
}
function h_(e) {
  const { width: t, height: r } = Jv(e);
  return { width: t, height: r };
}
function y_(e, t, r) {
  const n = Ft(t),
    o = Pt(t),
    i = r === "fixed",
    a = Or(e, !0, i, t);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const u = jt(0);
  function s() {
    u.x = Ci(o);
  }
  if (n || (!n && !i))
    if (((Zr(t) !== "body" || to(o)) && (c = Ti(t)), n)) {
      const h = Or(t, !0, i, t);
      (u.x = h.x + t.clientLeft), (u.y = h.y + t.clientTop);
    } else o && s();
  i && !n && o && s();
  const l = o && !n && !i ? em(o, c) : jt(0),
    f = a.left + c.scrollLeft - u.x - l.x,
    p = a.top + c.scrollTop - u.y - l.y;
  return { x: f, y: p, width: a.width, height: a.height };
}
function Su(e) {
  return ht(e).position === "static";
}
function om(e, t) {
  if (!Ft(e) || ht(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return Pt(e) === r && (r = r.ownerDocument.body), r;
}
function im(e, t) {
  const r = Ze(e);
  if (Ai(e)) return r;
  if (!Ft(e)) {
    let o = ir(e);
    for (; o && !Jr(o); ) {
      if (dt(o) && !Su(o)) return o;
      o = ir(o);
    }
    return r;
  }
  let n = om(e, t);
  for (; n && t_(n) && Su(n); ) n = om(n, t);
  return n && Jr(n) && Su(n) && !bu(n) ? r : n || o_(e) || r;
}
const v_ = async function (e) {
  const t = this.getOffsetParent || im,
    r = this.getDimensions,
    n = await r(e.floating);
  return {
    reference: y_(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: n.width, height: n.height },
  };
};
function m_(e) {
  return ht(e).direction === "rtl";
}
const g_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: c_,
  getDocumentElement: Pt,
  getClippingRect: d_,
  getOffsetParent: im,
  getElementRects: v_,
  getClientRects: u_,
  getDimensions: h_,
  getScale: Qr,
  isElement: dt,
  isRTL: m_,
};
function am(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function b_(e, t) {
  let r = null,
    n;
  const o = Pt(e);
  function i() {
    var c;
    clearTimeout(n), (c = r) == null || c.disconnect(), (r = null);
  }
  function a(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), i();
    const s = e.getBoundingClientRect(),
      { left: l, top: f, width: p, height: h } = s;
    if ((c || t(), !p || !h)) return;
    const v = Pi(f),
      d = Pi(o.clientWidth - (l + p)),
      y = Pi(o.clientHeight - (f + h)),
      m = Pi(l),
      b = {
        rootMargin: -v + "px " + -d + "px " + -y + "px " + -m + "px",
        threshold: Ye(0, or(1, u)) || 1,
      };
    let x = !0;
    function g(O) {
      const S = O[0].intersectionRatio;
      if (S !== u) {
        if (!x) return a();
        S
          ? a(!1, S)
          : (n = setTimeout(() => {
              a(!1, 1e-7);
            }, 1e3));
      }
      S === 1 && !am(s, e.getBoundingClientRect()) && a(), (x = !1);
    }
    try {
      r = new IntersectionObserver(g, { ...b, root: o.ownerDocument });
    } catch {
      r = new IntersectionObserver(g, b);
    }
    r.observe(e);
  }
  return a(!0), i;
}
function w_(e, t, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: a = typeof ResizeObserver == "function",
      layoutShift: c = typeof IntersectionObserver == "function",
      animationFrame: u = !1,
    } = n,
    s = Ou(e),
    l = o || i ? [...(s ? ro(s) : []), ...(t ? ro(t) : [])] : [];
  l.forEach((m) => {
    o && m.addEventListener("scroll", r, { passive: !0 }),
      i && m.addEventListener("resize", r);
  });
  const f = s && c ? b_(s, r) : null;
  let p = -1,
    h = null;
  a &&
    ((h = new ResizeObserver((m) => {
      let [b] = m;
      b &&
        b.target === s &&
        h &&
        t &&
        (h.unobserve(t),
        cancelAnimationFrame(p),
        (p = requestAnimationFrame(() => {
          var x;
          (x = h) == null || x.observe(t);
        }))),
        r();
    })),
    s && !u && h.observe(s),
    t && h.observe(t));
  let v,
    d = u ? Or(e) : null;
  u && y();
  function y() {
    const m = Or(e);
    d && !am(d, m) && r(), (d = m), (v = requestAnimationFrame(y));
  }
  return (
    r(),
    () => {
      var m;
      l.forEach((b) => {
        o && b.removeEventListener("scroll", r),
          i && b.removeEventListener("resize", r);
      }),
        f == null || f(),
        (m = h) == null || m.disconnect(),
        (h = null),
        u && cancelAnimationFrame(v);
    }
  );
}
const x_ = ZM,
  O_ = JM,
  S_ = XM,
  j_ = e_,
  k_ = KM,
  cm = VM,
  P_ = QM,
  E_ = (e, t, r) => {
    const n = new Map(),
      o = { platform: g_, ...r },
      i = { ...o.platform, _c: n };
    return GM(e, t, { ...o, platform: i });
  };
var M_ = typeof document < "u",
  __ = function () {},
  Di = M_ ? w.useLayoutEffect : __;
function Ii(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r !== t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!Ii(e[n], t[n])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && e.$$typeof) && !Ii(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function um(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sm(e, t) {
  const r = um(e);
  return Math.round(t * r) / r;
}
function ju(e) {
  const t = w.useRef(e);
  return (
    Di(() => {
      t.current = e;
    }),
    t
  );
}
function A_(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: r = "absolute",
      middleware: n = [],
      platform: o,
      elements: { reference: i, floating: a } = {},
      transform: c = !0,
      whileElementsMounted: u,
      open: s,
    } = e,
    [l, f] = w.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [p, h] = w.useState(n);
  Ii(p, n) || h(n);
  const [v, d] = w.useState(null),
    [y, m] = w.useState(null),
    b = w.useCallback((W) => {
      W !== S.current && ((S.current = W), d(W));
    }, []),
    x = w.useCallback((W) => {
      W !== j.current && ((j.current = W), m(W));
    }, []),
    g = i || v,
    O = a || y,
    S = w.useRef(null),
    j = w.useRef(null),
    k = w.useRef(l),
    A = u != null,
    D = ju(u),
    M = ju(o),
    _ = ju(s),
    C = w.useCallback(() => {
      if (!S.current || !j.current) return;
      const W = { placement: t, strategy: r, middleware: p };
      M.current && (W.platform = M.current),
        E_(S.current, j.current, W).then((U) => {
          const B = { ...U, isPositioned: _.current !== !1 };
          T.current &&
            !Ii(k.current, B) &&
            ((k.current = B),
            Jn.flushSync(() => {
              f(B);
            }));
        });
    }, [p, t, r, M, _]);
  Di(() => {
    s === !1 &&
      k.current.isPositioned &&
      ((k.current.isPositioned = !1), f((W) => ({ ...W, isPositioned: !1 })));
  }, [s]);
  const T = w.useRef(!1);
  Di(
    () => (
      (T.current = !0),
      () => {
        T.current = !1;
      }
    ),
    [],
  ),
    Di(() => {
      if ((g && (S.current = g), O && (j.current = O), g && O)) {
        if (D.current) return D.current(g, O, C);
        C();
      }
    }, [g, O, C, D, A]);
  const R = w.useMemo(
      () => ({ reference: S, floating: j, setReference: b, setFloating: x }),
      [b, x],
    ),
    N = w.useMemo(() => ({ reference: g, floating: O }), [g, O]),
    z = w.useMemo(() => {
      const W = { position: r, left: 0, top: 0 };
      if (!N.floating) return W;
      const U = sm(N.floating, l.x),
        B = sm(N.floating, l.y);
      return c
        ? {
            ...W,
            transform: "translate(" + U + "px, " + B + "px)",
            ...(um(N.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: U, top: B };
    }, [r, c, N.floating, l.x, l.y]);
  return w.useMemo(
    () => ({ ...l, update: C, refs: R, elements: N, floatingStyles: z }),
    [l, C, R, N, z],
  );
}
const T_ = (e) => {
    function t(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(r) {
        const { element: n, padding: o } = typeof e == "function" ? e(r) : e;
        return n && t(n)
          ? n.current != null
            ? cm({ element: n.current, padding: o }).fn(r)
            : {}
          : n
            ? cm({ element: n, padding: o }).fn(r)
            : {};
      },
    };
  },
  C_ = (e, t) => {
    const r = x_(e);
    return { name: r.name, fn: r.fn, options: [e, t] };
  },
  D_ = (e, t) => {
    const r = O_(e);
    return { name: r.name, fn: r.fn, options: [e, t] };
  },
  I_ = (e, t) => ({ fn: P_(e).fn, options: [e, t] }),
  N_ = (e, t) => {
    const r = S_(e);
    return { name: r.name, fn: r.fn, options: [e, t] };
  },
  R_ = (e, t) => {
    const r = j_(e);
    return { name: r.name, fn: r.fn, options: [e, t] };
  },
  L_ = (e, t) => {
    const r = k_(e);
    return { name: r.name, fn: r.fn, options: [e, t] };
  },
  B_ = (e, t) => {
    const r = T_(e);
    return { name: r.name, fn: r.fn, options: [e, t] };
  };
var z_ = "Arrow",
  lm = w.forwardRef((e, t) => {
    const { children: r, width: n = 10, height: o = 5, ...i } = e;
    return E.jsx(ce.svg, {
      ...i,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : E.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
lm.displayName = z_;
var F_ = lm,
  ku = "Popper",
  [fm, en] = lt(ku),
  [U_, pm] = fm(ku),
  dm = (e) => {
    const { __scopePopper: t, children: r } = e,
      [n, o] = w.useState(null);
    return E.jsx(U_, { scope: t, anchor: n, onAnchorChange: o, children: r });
  };
dm.displayName = ku;
var hm = "PopperAnchor",
  ym = w.forwardRef((e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e,
      i = pm(hm, r),
      a = w.useRef(null),
      c = le(t, a),
      u = w.useRef(null);
    return (
      w.useEffect(() => {
        const s = u.current;
        (u.current = (n == null ? void 0 : n.current) || a.current),
          s !== u.current && i.onAnchorChange(u.current);
      }),
      n ? null : E.jsx(ce.div, { ...o, ref: c })
    );
  });
ym.displayName = hm;
var Pu = "PopperContent",
  [$_, H_] = fm(Pu),
  vm = w.forwardRef((e, t) => {
    var q, oe, F, G, Z, $;
    const {
        __scopePopper: r,
        side: n = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: a = 0,
        arrowPadding: c = 0,
        avoidCollisions: u = !0,
        collisionBoundary: s = [],
        collisionPadding: l = 0,
        sticky: f = "partial",
        hideWhenDetached: p = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: v,
        ...d
      } = e,
      y = pm(Pu, r),
      [m, b] = w.useState(null),
      x = le(t, (pe) => b(pe)),
      [g, O] = w.useState(null),
      S = iu(g),
      j = (S == null ? void 0 : S.width) ?? 0,
      k = (S == null ? void 0 : S.height) ?? 0,
      A = n + (i !== "center" ? "-" + i : ""),
      D =
        typeof l == "number"
          ? l
          : { top: 0, right: 0, bottom: 0, left: 0, ...l },
      M = Array.isArray(s) ? s : [s],
      _ = M.length > 0,
      C = { padding: D, boundary: M.filter(q_), altBoundary: _ },
      {
        refs: T,
        floatingStyles: R,
        placement: N,
        isPositioned: z,
        middlewareData: W,
      } = A_({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...pe) =>
          w_(...pe, { animationFrame: h === "always" }),
        elements: { reference: y.anchor },
        middleware: [
          C_({ mainAxis: o + k, alignmentAxis: a }),
          u &&
            D_({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? I_() : void 0,
              ...C,
            }),
          u && N_({ ...C }),
          R_({
            ...C,
            apply: ({
              elements: pe,
              rects: ae,
              availableWidth: Oe,
              availableHeight: Se,
            }) => {
              const { width: ze, height: Nt } = ae.reference,
                tt = pe.floating.style;
              tt.setProperty("--radix-popper-available-width", `${Oe}px`),
                tt.setProperty("--radix-popper-available-height", `${Se}px`),
                tt.setProperty("--radix-popper-anchor-width", `${ze}px`),
                tt.setProperty("--radix-popper-anchor-height", `${Nt}px`);
            },
          }),
          g && B_({ element: g, padding: c }),
          G_({ arrowWidth: j, arrowHeight: k }),
          p && L_({ strategy: "referenceHidden", ...C }),
        ],
      }),
      [U, B] = bm(N),
      P = ft(v);
    Me(() => {
      z && (P == null || P());
    }, [z, P]);
    const L = (q = W.arrow) == null ? void 0 : q.x,
      X = (oe = W.arrow) == null ? void 0 : oe.y,
      K = ((F = W.arrow) == null ? void 0 : F.centerOffset) !== 0,
      [Y, Q] = w.useState();
    return (
      Me(() => {
        m && Q(window.getComputedStyle(m).zIndex);
      }, [m]),
      E.jsx("div", {
        ref: T.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...R,
          transform: z ? R.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Y,
          "--radix-popper-transform-origin": [
            (G = W.transformOrigin) == null ? void 0 : G.x,
            (Z = W.transformOrigin) == null ? void 0 : Z.y,
          ].join(" "),
          ...((($ = W.hide) == null ? void 0 : $.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: E.jsx($_, {
          scope: r,
          placedSide: U,
          onArrowChange: O,
          arrowX: L,
          arrowY: X,
          shouldHideArrow: K,
          children: E.jsx(ce.div, {
            "data-side": U,
            "data-align": B,
            ...d,
            ref: x,
            style: { ...d.style, animation: z ? void 0 : "none" },
          }),
        }),
      })
    );
  });
vm.displayName = Pu;
var mm = "PopperArrow",
  W_ = { top: "bottom", right: "left", bottom: "top", left: "right" },
  gm = w.forwardRef(function (e, t) {
    const { __scopePopper: r, ...n } = e,
      o = H_(mm, r),
      i = W_[o.placedSide];
    return E.jsx("span", {
      ref: o.onArrowChange,
      style: {
        position: "absolute",
        left: o.arrowX,
        top: o.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[o.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[o.placedSide],
        visibility: o.shouldHideArrow ? "hidden" : void 0,
      },
      children: E.jsx(F_, {
        ...n,
        ref: t,
        style: { ...n.style, display: "block" },
      }),
    });
  });
gm.displayName = mm;
function q_(e) {
  return e !== null;
}
var G_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var d, y, m;
    const { placement: r, rects: n, middlewareData: o } = t,
      i = ((d = o.arrow) == null ? void 0 : d.centerOffset) !== 0,
      a = i ? 0 : e.arrowWidth,
      c = i ? 0 : e.arrowHeight,
      [u, s] = bm(r),
      l = { start: "0%", center: "50%", end: "100%" }[s],
      f = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + a / 2,
      p = (((m = o.arrow) == null ? void 0 : m.y) ?? 0) + c / 2;
    let h = "",
      v = "";
    return (
      u === "bottom"
        ? ((h = i ? l : `${f}px`), (v = `${-c}px`))
        : u === "top"
          ? ((h = i ? l : `${f}px`), (v = `${n.floating.height + c}px`))
          : u === "right"
            ? ((h = `${-c}px`), (v = i ? l : `${p}px`))
            : u === "left" &&
              ((h = `${n.floating.width + c}px`), (v = i ? l : `${p}px`)),
      { data: { x: h, y: v } }
    );
  },
});
function bm(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var Eu = dm,
  Mu = ym,
  _u = vm,
  Au = gm,
  V_ = "Portal",
  no = w.forwardRef((e, t) => {
    var c;
    const { container: r, ...n } = e,
      [o, i] = w.useState(!1);
    Me(() => i(!0), []);
    const a =
      r ||
      (o &&
        ((c = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : c.body));
    return a ? HE.createPortal(E.jsx(ce.div, { ...n, ref: t }), a) : null;
  });
no.displayName = V_;
function X_(e, t) {
  return w.useReducer((r, n) => t[r][n] ?? r, e);
}
var yt = (e) => {
  const { present: t, children: r } = e,
    n = K_(t),
    o =
      typeof r == "function" ? r({ present: n.isPresent }) : w.Children.only(r),
    i = le(n.ref, Y_(o));
  return typeof r == "function" || n.isPresent
    ? w.cloneElement(o, { ref: i })
    : null;
};
yt.displayName = "Presence";
function K_(e) {
  const [t, r] = w.useState(),
    n = w.useRef(null),
    o = w.useRef(e),
    i = w.useRef("none"),
    a = e ? "mounted" : "unmounted",
    [c, u] = X_(a, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const s = Ni(n.current);
      i.current = c === "mounted" ? s : "none";
    }, [c]),
    Me(() => {
      const s = n.current,
        l = o.current;
      if (l !== e) {
        const f = i.current,
          p = Ni(s);
        e
          ? u("MOUNT")
          : p === "none" || (s == null ? void 0 : s.display) === "none"
            ? u("UNMOUNT")
            : u(l && f !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, u]),
    Me(() => {
      if (t) {
        let s;
        const l = t.ownerDocument.defaultView ?? window,
          f = (h) => {
            const v = Ni(n.current).includes(CSS.escape(h.animationName));
            if (h.target === t && v && (u("ANIMATION_END"), !o.current)) {
              const d = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (s = l.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = d);
                }));
            }
          },
          p = (h) => {
            h.target === t && (i.current = Ni(n.current));
          };
        return (
          t.addEventListener("animationstart", p),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            l.clearTimeout(s),
              t.removeEventListener("animationstart", p),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else u("ANIMATION_END");
    }, [t, u]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(c),
      ref: w.useCallback((s) => {
        (n.current = s ? getComputedStyle(s) : null), r(s);
      }, []),
    }
  );
}
function Ni(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Y_(e) {
  var n, o;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var Tu = "rovingFocusGroup.onEntryFocus",
  Z_ = { bubbles: !1, cancelable: !0 },
  oo = "RovingFocusGroup",
  [Cu, wm, J_] = Oi(oo),
  [Q_, xm] = lt(oo, [J_]),
  [eA, tA] = Q_(oo),
  Om = w.forwardRef((e, t) =>
    E.jsx(Cu.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: E.jsx(Cu.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: E.jsx(rA, { ...e, ref: t }),
      }),
    }),
  );
Om.displayName = oo;
var rA = w.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: r,
        orientation: n,
        loop: o = !1,
        dir: i,
        currentTabStopId: a,
        defaultCurrentTabStopId: c,
        onCurrentTabStopIdChange: u,
        onEntryFocus: s,
        preventScrollOnEntryFocus: l = !1,
        ...f
      } = e,
      p = w.useRef(null),
      h = le(t, p),
      v = Si(i),
      [d, y] = Lt({ prop: a, defaultProp: c ?? null, onChange: u, caller: oo }),
      [m, b] = w.useState(!1),
      x = ft(s),
      g = wm(r),
      O = w.useRef(!1),
      [S, j] = w.useState(0);
    return (
      w.useEffect(() => {
        const k = p.current;
        if (k)
          return k.addEventListener(Tu, x), () => k.removeEventListener(Tu, x);
      }, [x]),
      E.jsx(eA, {
        scope: r,
        orientation: n,
        dir: v,
        loop: o,
        currentTabStopId: d,
        onItemFocus: w.useCallback((k) => y(k), [y]),
        onItemShiftTab: w.useCallback(() => b(!0), []),
        onFocusableItemAdd: w.useCallback(() => j((k) => k + 1), []),
        onFocusableItemRemove: w.useCallback(() => j((k) => k - 1), []),
        children: E.jsx(ce.div, {
          tabIndex: m || S === 0 ? -1 : 0,
          "data-orientation": n,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: J(e.onMouseDown, () => {
            O.current = !0;
          }),
          onFocus: J(e.onFocus, (k) => {
            const A = !O.current;
            if (k.target === k.currentTarget && A && !m) {
              const D = new CustomEvent(Tu, Z_);
              if ((k.currentTarget.dispatchEvent(D), !D.defaultPrevented)) {
                const M = g().filter((R) => R.focusable),
                  _ = M.find((R) => R.active),
                  C = M.find((R) => R.id === d),
                  T = [_, C, ...M].filter(Boolean).map((R) => R.ref.current);
                km(T, l);
              }
            }
            O.current = !1;
          }),
          onBlur: J(e.onBlur, () => b(!1)),
        }),
      })
    );
  }),
  Sm = "RovingFocusGroupItem",
  jm = w.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: r,
        focusable: n = !0,
        active: o = !1,
        tabStopId: i,
        children: a,
        ...c
      } = e,
      u = pt(),
      s = i || u,
      l = tA(Sm, r),
      f = l.currentTabStopId === s,
      p = wm(r),
      {
        onFocusableItemAdd: h,
        onFocusableItemRemove: v,
        currentTabStopId: d,
      } = l;
    return (
      w.useEffect(() => {
        if (n) return h(), () => v();
      }, [n, h, v]),
      E.jsx(Cu.ItemSlot, {
        scope: r,
        id: s,
        focusable: n,
        active: o,
        children: E.jsx(ce.span, {
          tabIndex: f ? 0 : -1,
          "data-orientation": l.orientation,
          ...c,
          ref: t,
          onMouseDown: J(e.onMouseDown, (y) => {
            n ? l.onItemFocus(s) : y.preventDefault();
          }),
          onFocus: J(e.onFocus, () => l.onItemFocus(s)),
          onKeyDown: J(e.onKeyDown, (y) => {
            if (y.key === "Tab" && y.shiftKey) {
              l.onItemShiftTab();
              return;
            }
            if (y.target !== y.currentTarget) return;
            const m = iA(y, l.orientation, l.dir);
            if (m !== void 0) {
              if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
              y.preventDefault();
              let b = p()
                .filter((x) => x.focusable)
                .map((x) => x.ref.current);
              if (m === "last") b.reverse();
              else if (m === "prev" || m === "next") {
                m === "prev" && b.reverse();
                const x = b.indexOf(y.currentTarget);
                b = l.loop ? aA(b, x + 1) : b.slice(x + 1);
              }
              setTimeout(() => km(b));
            }
          }),
          children:
            typeof a == "function"
              ? a({ isCurrentTabStop: f, hasTabStop: d != null })
              : a,
        }),
      })
    );
  });
jm.displayName = Sm;
var nA = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function oA(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function iA(e, t, r) {
  const n = oA(e.key, r);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n))
  )
    return nA[n];
}
function km(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (
      n === r ||
      (n.focus({ preventScroll: t }), document.activeElement !== r)
    )
      return;
}
function aA(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var cA = Om,
  uA = jm,
  sA = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  tn = new WeakMap(),
  Ri = new WeakMap(),
  Li = {},
  Du = 0,
  Pm = function (e) {
    return e && (e.host || Pm(e.parentNode));
  },
  lA = function (e, t) {
    return t
      .map(function (r) {
        if (e.contains(r)) return r;
        var n = Pm(r);
        return n && e.contains(n)
          ? n
          : (console.error(
              "aria-hidden",
              r,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (r) {
        return !!r;
      });
  },
  fA = function (e, t, r, n) {
    var o = lA(t, Array.isArray(e) ? e : [e]);
    Li[r] || (Li[r] = new WeakMap());
    var i = Li[r],
      a = [],
      c = new Set(),
      u = new Set(o),
      s = function (f) {
        !f || c.has(f) || (c.add(f), s(f.parentNode));
      };
    o.forEach(s);
    var l = function (f) {
      !f ||
        u.has(f) ||
        Array.prototype.forEach.call(f.children, function (p) {
          if (c.has(p)) l(p);
          else
            try {
              var h = p.getAttribute(n),
                v = h !== null && h !== "false",
                d = (tn.get(p) || 0) + 1,
                y = (i.get(p) || 0) + 1;
              tn.set(p, d),
                i.set(p, y),
                a.push(p),
                d === 1 && v && Ri.set(p, !0),
                y === 1 && p.setAttribute(r, "true"),
                v || p.setAttribute(n, "true");
            } catch (m) {
              console.error("aria-hidden: cannot operate on ", p, m);
            }
        });
    };
    return (
      l(t),
      c.clear(),
      Du++,
      function () {
        a.forEach(function (f) {
          var p = tn.get(f) - 1,
            h = i.get(f) - 1;
          tn.set(f, p),
            i.set(f, h),
            p || (Ri.has(f) || f.removeAttribute(n), Ri.delete(f)),
            h || f.removeAttribute(r);
        }),
          Du--,
          Du ||
            ((tn = new WeakMap()),
            (tn = new WeakMap()),
            (Ri = new WeakMap()),
            (Li = {}));
      }
    );
  },
  Iu = function (e, t, r) {
    r === void 0 && (r = "data-aria-hidden");
    var n = Array.from(Array.isArray(e) ? e : [e]),
      o = sA(e);
    return o
      ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))),
        fA(n, o, r, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Et = function () {
    return (
      (Et =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
          return e;
        }),
      Et.apply(this, arguments)
    );
  };
function Em(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]]);
  return r;
}
function pA(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Bi = "right-scroll-bar-position",
  zi = "width-before-scroll-bar",
  dA = "with-scroll-bars-hidden",
  hA = "--removed-body-scroll-bar-size";
function Nu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function yA(e, t) {
  var r = w.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && ((r.value = n), r.callback(n, o));
        },
      },
    };
  })[0];
  return (r.callback = t), r.facade;
}
var vA = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  Mm = new WeakMap();
function mA(e, t) {
  var r = yA(null, function (n) {
    return e.forEach(function (o) {
      return Nu(o, n);
    });
  });
  return (
    vA(
      function () {
        var n = Mm.get(r);
        if (n) {
          var o = new Set(n),
            i = new Set(e),
            a = r.current;
          o.forEach(function (c) {
            i.has(c) || Nu(c, null);
          }),
            i.forEach(function (c) {
              o.has(c) || Nu(c, a);
            });
        }
        Mm.set(r, e);
      },
      [e],
    ),
    r
  );
}
function gA(e) {
  return e;
}
function bA(e, t) {
  t === void 0 && (t = gA);
  var r = [],
    n = !1,
    o = {
      read: function () {
        if (n)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return r.length ? r[r.length - 1] : e;
      },
      useMedium: function (i) {
        var a = t(i, n);
        return (
          r.push(a),
          function () {
            r = r.filter(function (c) {
              return c !== a;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (n = !0; r.length; ) {
          var a = r;
          (r = []), a.forEach(i);
        }
        r = {
          push: function (c) {
            return i(c);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (i) {
        n = !0;
        var a = [];
        if (r.length) {
          var c = r;
          (r = []), c.forEach(i), (a = r);
        }
        var u = function () {
            var l = a;
            (a = []), l.forEach(i);
          },
          s = function () {
            return Promise.resolve().then(u);
          };
        s(),
          (r = {
            push: function (l) {
              a.push(l), s();
            },
            filter: function (l) {
              return (a = a.filter(l)), r;
            },
          });
      },
    };
  return o;
}
function wA(e) {
  e === void 0 && (e = {});
  var t = bA(null);
  return (t.options = Et({ async: !0, ssr: !1 }, e)), t;
}
var _m = function (e) {
  var t = e.sideCar,
    r = Em(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var n = t.read();
  if (!n) throw new Error("Sidecar medium not found");
  return w.createElement(n, Et({}, r));
};
_m.isSideCarExport = !0;
function xA(e, t) {
  return e.useMedium(t), _m;
}
var Am = wA(),
  Ru = function () {},
  Fi = w.forwardRef(function (e, t) {
    var r = w.useRef(null),
      n = w.useState({
        onScrollCapture: Ru,
        onWheelCapture: Ru,
        onTouchMoveCapture: Ru,
      }),
      o = n[0],
      i = n[1],
      a = e.forwardProps,
      c = e.children,
      u = e.className,
      s = e.removeScrollBar,
      l = e.enabled,
      f = e.shards,
      p = e.sideCar,
      h = e.noRelative,
      v = e.noIsolation,
      d = e.inert,
      y = e.allowPinchZoom,
      m = e.as,
      b = m === void 0 ? "div" : m,
      x = e.gapMode,
      g = Em(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      O = p,
      S = mA([r, t]),
      j = Et(Et({}, g), o);
    return w.createElement(
      w.Fragment,
      null,
      l &&
        w.createElement(O, {
          sideCar: Am,
          removeScrollBar: s,
          shards: f,
          noRelative: h,
          noIsolation: v,
          inert: d,
          setCallbacks: i,
          allowPinchZoom: !!y,
          lockRef: r,
          gapMode: x,
        }),
      a
        ? w.cloneElement(w.Children.only(c), Et(Et({}, j), { ref: S }))
        : w.createElement(b, Et({}, j, { className: u, ref: S }), c),
    );
  });
(Fi.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (Fi.classNames = { fullWidth: zi, zeroRight: Bi });
var OA = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function SA() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = OA();
  return t && e.setAttribute("nonce", t), e;
}
function jA(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function kA(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var PA = function () {
    var e = 0,
      t = null;
    return {
      add: function (r) {
        e == 0 && (t = SA()) && (jA(t, r), kA(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  EA = function () {
    var e = PA();
    return function (t, r) {
      w.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && r],
      );
    };
  },
  Tm = function () {
    var e = EA(),
      t = function (r) {
        var n = r.styles,
          o = r.dynamic;
        return e(n, o), null;
      };
    return t;
  },
  MA = { left: 0, top: 0, right: 0, gap: 0 },
  Lu = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  _A = function (e) {
    var t = window.getComputedStyle(document.body),
      r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      n = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Lu(r), Lu(n), Lu(o)];
  },
  AA = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return MA;
    var t = _A(e),
      r = document.documentElement.clientWidth,
      n = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, n - r + t[2] - t[0]),
    };
  },
  TA = Tm(),
  rn = "data-scroll-locked",
  CA = function (e, t, r, n) {
    var o = e.left,
      i = e.top,
      a = e.right,
      c = e.gap;
    return (
      r === void 0 && (r = "margin"),
      `
  .`
        .concat(
          dA,
          ` {
   overflow: hidden `,
        )
        .concat(
          n,
          `;
   padding-right: `,
        )
        .concat(c, "px ")
        .concat(
          n,
          `;
  }
  body[`,
        )
        .concat(
          rn,
          `] {
    overflow: hidden `,
        )
        .concat(
          n,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(n, ";"),
            r === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  a,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(c, "px ")
                .concat(
                  n,
                  `;
    `,
                ),
            r === "padding" &&
              "padding-right: ".concat(c, "px ").concat(n, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Bi,
          ` {
    right: `,
        )
        .concat(c, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(
          zi,
          ` {
    margin-right: `,
        )
        .concat(c, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(Bi, " .")
        .concat(
          Bi,
          ` {
    right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(zi, " .")
        .concat(
          zi,
          ` {
    margin-right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  body[`,
        )
        .concat(
          rn,
          `] {
    `,
        )
        .concat(hA, ": ")
        .concat(
          c,
          `px;
  }
`,
        )
    );
  },
  Cm = function () {
    var e = parseInt(document.body.getAttribute(rn) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  DA = function () {
    w.useEffect(function () {
      return (
        document.body.setAttribute(rn, (Cm() + 1).toString()),
        function () {
          var e = Cm() - 1;
          e <= 0
            ? document.body.removeAttribute(rn)
            : document.body.setAttribute(rn, e.toString());
        }
      );
    }, []);
  },
  IA = function (e) {
    var t = e.noRelative,
      r = e.noImportant,
      n = e.gapMode,
      o = n === void 0 ? "margin" : n;
    DA();
    var i = w.useMemo(
      function () {
        return AA(o);
      },
      [o],
    );
    return w.createElement(TA, { styles: CA(i, !t, o, r ? "" : "!important") });
  },
  Bu = !1;
if (typeof window < "u")
  try {
    var Ui = Object.defineProperty({}, "passive", {
      get: function () {
        return (Bu = !0), !0;
      },
    });
    window.addEventListener("test", Ui, Ui),
      window.removeEventListener("test", Ui, Ui);
  } catch {
    Bu = !1;
  }
var nn = Bu ? { passive: !1 } : !1,
  NA = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Dm = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var r = window.getComputedStyle(e);
    return (
      r[t] !== "hidden" &&
      !(r.overflowY === r.overflowX && !NA(e) && r[t] === "visible")
    );
  },
  RA = function (e) {
    return Dm(e, "overflowY");
  },
  LA = function (e) {
    return Dm(e, "overflowX");
  },
  Im = function (e, t) {
    var r = t.ownerDocument,
      n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var o = Nm(e, n);
      if (o) {
        var i = Rm(e, n),
          a = i[1],
          c = i[2];
        if (a > c) return !0;
      }
      n = n.parentNode;
    } while (n && n !== r.body);
    return !1;
  },
  BA = function (e) {
    var t = e.scrollTop,
      r = e.scrollHeight,
      n = e.clientHeight;
    return [t, r, n];
  },
  zA = function (e) {
    var t = e.scrollLeft,
      r = e.scrollWidth,
      n = e.clientWidth;
    return [t, r, n];
  },
  Nm = function (e, t) {
    return e === "v" ? RA(t) : LA(t);
  },
  Rm = function (e, t) {
    return e === "v" ? BA(t) : zA(t);
  },
  FA = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  UA = function (e, t, r, n, o) {
    var i = FA(e, window.getComputedStyle(t).direction),
      a = i * n,
      c = r.target,
      u = t.contains(c),
      s = !1,
      l = a > 0,
      f = 0,
      p = 0;
    do {
      if (!c) break;
      var h = Rm(e, c),
        v = h[0],
        d = h[1],
        y = h[2],
        m = d - y - i * v;
      (v || m) && Nm(e, c) && ((f += m), (p += v));
      var b = c.parentNode;
      c = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
    } while ((!u && c !== document.body) || (u && (t.contains(c) || t === c)));
    return ((l && Math.abs(f) < 1) || (!l && Math.abs(p) < 1)) && (s = !0), s;
  },
  $i = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Lm = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Bm = function (e) {
    return e && "current" in e ? e.current : e;
  },
  $A = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  HA = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  WA = 0,
  on = [];
function qA(e) {
  var t = w.useRef([]),
    r = w.useRef([0, 0]),
    n = w.useRef(),
    o = w.useState(WA++)[0],
    i = w.useState(Tm)[0],
    a = w.useRef(e);
  w.useEffect(
    function () {
      a.current = e;
    },
    [e],
  ),
    w.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var d = pA([e.lockRef.current], (e.shards || []).map(Bm), !0).filter(
            Boolean,
          );
          return (
            d.forEach(function (y) {
              return y.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                d.forEach(function (y) {
                  return y.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var c = w.useCallback(function (d, y) {
      if (
        ("touches" in d && d.touches.length === 2) ||
        (d.type === "wheel" && d.ctrlKey)
      )
        return !a.current.allowPinchZoom;
      var m = $i(d),
        b = r.current,
        x = "deltaX" in d ? d.deltaX : b[0] - m[0],
        g = "deltaY" in d ? d.deltaY : b[1] - m[1],
        O,
        S = d.target,
        j = Math.abs(x) > Math.abs(g) ? "h" : "v";
      if ("touches" in d && j === "h" && S.type === "range") return !1;
      var k = window.getSelection(),
        A = k && k.anchorNode,
        D = A ? A === S || A.contains(S) : !1;
      if (D) return !1;
      var M = Im(j, S);
      if (!M) return !0;
      if ((M ? (O = j) : ((O = j === "v" ? "h" : "v"), (M = Im(j, S))), !M))
        return !1;
      if (
        (!n.current && "changedTouches" in d && (x || g) && (n.current = O), !O)
      )
        return !0;
      var _ = n.current || O;
      return UA(_, y, d, _ === "h" ? x : g);
    }, []),
    u = w.useCallback(function (d) {
      var y = d;
      if (!(!on.length || on[on.length - 1] !== i)) {
        var m = "deltaY" in y ? Lm(y) : $i(y),
          b = t.current.filter(function (O) {
            return (
              O.name === y.type &&
              (O.target === y.target || y.target === O.shadowParent) &&
              $A(O.delta, m)
            );
          })[0];
        if (b && b.should) {
          y.cancelable && y.preventDefault();
          return;
        }
        if (!b) {
          var x = (a.current.shards || [])
              .map(Bm)
              .filter(Boolean)
              .filter(function (O) {
                return O.contains(y.target);
              }),
            g = x.length > 0 ? c(y, x[0]) : !a.current.noIsolation;
          g && y.cancelable && y.preventDefault();
        }
      }
    }, []),
    s = w.useCallback(function (d, y, m, b) {
      var x = { name: d, delta: y, target: m, should: b, shadowParent: GA(m) };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (g) {
            return g !== x;
          });
        }, 1);
    }, []),
    l = w.useCallback(function (d) {
      (r.current = $i(d)), (n.current = void 0);
    }, []),
    f = w.useCallback(function (d) {
      s(d.type, Lm(d), d.target, c(d, e.lockRef.current));
    }, []),
    p = w.useCallback(function (d) {
      s(d.type, $i(d), d.target, c(d, e.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      on.push(i),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: p,
      }),
      document.addEventListener("wheel", u, nn),
      document.addEventListener("touchmove", u, nn),
      document.addEventListener("touchstart", l, nn),
      function () {
        (on = on.filter(function (d) {
          return d !== i;
        })),
          document.removeEventListener("wheel", u, nn),
          document.removeEventListener("touchmove", u, nn),
          document.removeEventListener("touchstart", l, nn);
      }
    );
  }, []);
  var h = e.removeScrollBar,
    v = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    v ? w.createElement(i, { styles: HA(o) }) : null,
    h
      ? w.createElement(IA, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function GA(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const VA = xA(Am, qA);
var Hi = w.forwardRef(function (e, t) {
  return w.createElement(Fi, Et({}, e, { ref: t, sideCar: VA }));
});
Hi.classNames = Fi.classNames;
var zu = ["Enter", " "],
  XA = ["ArrowDown", "PageUp", "Home"],
  zm = ["ArrowUp", "PageDown", "End"],
  KA = [...XA, ...zm],
  YA = { ltr: [...zu, "ArrowRight"], rtl: [...zu, "ArrowLeft"] },
  ZA = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  io = "Menu",
  [ao, JA, QA] = Oi(io),
  [Sr, Fm] = lt(io, [QA, en, xm]),
  Wi = en(),
  Um = xm(),
  [eT, jr] = Sr(io),
  [tT, co] = Sr(io),
  $m = (e) => {
    const {
        __scopeMenu: t,
        open: r = !1,
        children: n,
        dir: o,
        onOpenChange: i,
        modal: a = !0,
      } = e,
      c = Wi(t),
      [u, s] = w.useState(null),
      l = w.useRef(!1),
      f = ft(i),
      p = Si(o);
    return (
      w.useEffect(() => {
        const h = () => {
            (l.current = !0),
              document.addEventListener("pointerdown", v, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", v, {
                capture: !0,
                once: !0,
              });
          },
          v = () => (l.current = !1);
        return (
          document.addEventListener("keydown", h, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", h, { capture: !0 }),
              document.removeEventListener("pointerdown", v, { capture: !0 }),
              document.removeEventListener("pointermove", v, { capture: !0 });
          }
        );
      }, []),
      E.jsx(Eu, {
        ...c,
        children: E.jsx(eT, {
          scope: t,
          open: r,
          onOpenChange: f,
          content: u,
          onContentChange: s,
          children: E.jsx(tT, {
            scope: t,
            onClose: w.useCallback(() => f(!1), [f]),
            isUsingKeyboardRef: l,
            dir: p,
            modal: a,
            children: n,
          }),
        }),
      })
    );
  };
$m.displayName = io;
var rT = "MenuAnchor",
  Fu = w.forwardRef((e, t) => {
    const { __scopeMenu: r, ...n } = e,
      o = Wi(r);
    return E.jsx(Mu, { ...o, ...n, ref: t });
  });
Fu.displayName = rT;
var Uu = "MenuPortal",
  [nT, Hm] = Sr(Uu, { forceMount: void 0 }),
  Wm = (e) => {
    const { __scopeMenu: t, forceMount: r, children: n, container: o } = e,
      i = jr(Uu, t);
    return E.jsx(nT, {
      scope: t,
      forceMount: r,
      children: E.jsx(yt, {
        present: r || i.open,
        children: E.jsx(no, { asChild: !0, container: o, children: n }),
      }),
    });
  };
Wm.displayName = Uu;
var rt = "MenuContent",
  [oT, $u] = Sr(rt),
  qm = w.forwardRef((e, t) => {
    const r = Hm(rt, e.__scopeMenu),
      { forceMount: n = r.forceMount, ...o } = e,
      i = jr(rt, e.__scopeMenu),
      a = co(rt, e.__scopeMenu);
    return E.jsx(ao.Provider, {
      scope: e.__scopeMenu,
      children: E.jsx(yt, {
        present: n || i.open,
        children: E.jsx(ao.Slot, {
          scope: e.__scopeMenu,
          children: a.modal
            ? E.jsx(iT, { ...o, ref: t })
            : E.jsx(aT, { ...o, ref: t }),
        }),
      }),
    });
  }),
  iT = w.forwardRef((e, t) => {
    const r = jr(rt, e.__scopeMenu),
      n = w.useRef(null),
      o = le(t, n);
    return (
      w.useEffect(() => {
        const i = n.current;
        if (i) return Iu(i);
      }, []),
      E.jsx(Hu, {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: J(e.onFocusOutside, (i) => i.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => r.onOpenChange(!1),
      })
    );
  }),
  aT = w.forwardRef((e, t) => {
    const r = jr(rt, e.__scopeMenu);
    return E.jsx(Hu, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1),
    });
  }),
  cT = Kr("MenuContent.ScrollLock"),
  Hu = w.forwardRef((e, t) => {
    const {
        __scopeMenu: r,
        loop: n = !1,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: a,
        disableOutsidePointerEvents: c,
        onEntryFocus: u,
        onEscapeKeyDown: s,
        onPointerDownOutside: l,
        onFocusOutside: f,
        onInteractOutside: p,
        onDismiss: h,
        disableOutsideScroll: v,
        ...d
      } = e,
      y = jr(rt, r),
      m = co(rt, r),
      b = Wi(r),
      x = Um(r),
      g = JA(r),
      [O, S] = w.useState(null),
      j = w.useRef(null),
      k = le(t, j, y.onContentChange),
      A = w.useRef(0),
      D = w.useRef(""),
      M = w.useRef(0),
      _ = w.useRef(null),
      C = w.useRef("right"),
      T = w.useRef(0),
      R = v ? Hi : w.Fragment,
      N = v ? { as: cT, allowPinchZoom: !0 } : void 0,
      z = (U) => {
        var q, oe;
        const B = D.current + U,
          P = g().filter((F) => !F.disabled),
          L = document.activeElement,
          X =
            (q = P.find((F) => F.ref.current === L)) == null
              ? void 0
              : q.textValue,
          K = P.map((F) => F.textValue),
          Y = bT(K, B, X),
          Q =
            (oe = P.find((F) => F.textValue === Y)) == null
              ? void 0
              : oe.ref.current;
        (function F(G) {
          (D.current = G),
            window.clearTimeout(A.current),
            G !== "" && (A.current = window.setTimeout(() => F(""), 1e3));
        })(B),
          Q && setTimeout(() => Q.focus());
      };
    w.useEffect(() => () => window.clearTimeout(A.current), []), lu();
    const W = w.useCallback((U) => {
      var B, P;
      return (
        C.current === ((B = _.current) == null ? void 0 : B.side) &&
        xT(U, (P = _.current) == null ? void 0 : P.area)
      );
    }, []);
    return E.jsx(oT, {
      scope: r,
      searchRef: D,
      onItemEnter: w.useCallback(
        (U) => {
          W(U) && U.preventDefault();
        },
        [W],
      ),
      onItemLeave: w.useCallback(
        (U) => {
          var B;
          W(U) || ((B = j.current) == null || B.focus(), S(null));
        },
        [W],
      ),
      onTriggerLeave: w.useCallback(
        (U) => {
          W(U) && U.preventDefault();
        },
        [W],
      ),
      pointerGraceTimerRef: M,
      onPointerGraceIntentChange: w.useCallback((U) => {
        _.current = U;
      }, []),
      children: E.jsx(R, {
        ...N,
        children: E.jsx(ji, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: J(i, (U) => {
            var B;
            U.preventDefault(),
              (B = j.current) == null || B.focus({ preventScroll: !0 });
          }),
          onUnmountAutoFocus: a,
          children: E.jsx(eo, {
            asChild: !0,
            disableOutsidePointerEvents: c,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: f,
            onInteractOutside: p,
            onDismiss: h,
            children: E.jsx(cA, {
              asChild: !0,
              ...x,
              dir: m.dir,
              orientation: "vertical",
              loop: n,
              currentTabStopId: O,
              onCurrentTabStopIdChange: S,
              onEntryFocus: J(u, (U) => {
                m.isUsingKeyboardRef.current || U.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: E.jsx(_u, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": ug(y.open),
                "data-radix-menu-content": "",
                dir: m.dir,
                ...b,
                ...d,
                ref: k,
                style: { outline: "none", ...d.style },
                onKeyDown: J(d.onKeyDown, (U) => {
                  const B =
                      U.target.closest("[data-radix-menu-content]") ===
                      U.currentTarget,
                    P = U.ctrlKey || U.altKey || U.metaKey,
                    L = U.key.length === 1;
                  B &&
                    (U.key === "Tab" && U.preventDefault(),
                    !P && L && z(U.key));
                  const X = j.current;
                  if (U.target !== X || !KA.includes(U.key)) return;
                  U.preventDefault();
                  const K = g()
                    .filter((Y) => !Y.disabled)
                    .map((Y) => Y.ref.current);
                  zm.includes(U.key) && K.reverse(), mT(K);
                }),
                onBlur: J(e.onBlur, (U) => {
                  U.currentTarget.contains(U.target) ||
                    (window.clearTimeout(A.current), (D.current = ""));
                }),
                onPointerMove: J(
                  e.onPointerMove,
                  so((U) => {
                    const B = U.target,
                      P = T.current !== U.clientX;
                    if (U.currentTarget.contains(B) && P) {
                      const L = U.clientX > T.current ? "right" : "left";
                      (C.current = L), (T.current = U.clientX);
                    }
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
qm.displayName = rt;
var uT = "MenuGroup",
  Wu = w.forwardRef((e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return E.jsx(ce.div, { role: "group", ...n, ref: t });
  });
Wu.displayName = uT;
var sT = "MenuLabel",
  Gm = w.forwardRef((e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return E.jsx(ce.div, { ...n, ref: t });
  });
Gm.displayName = sT;
var qi = "MenuItem",
  Vm = "menu.itemSelect",
  Gi = w.forwardRef((e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e,
      i = w.useRef(null),
      a = co(qi, e.__scopeMenu),
      c = $u(qi, e.__scopeMenu),
      u = le(t, i),
      s = w.useRef(!1),
      l = () => {
        const f = i.current;
        if (!r && f) {
          const p = new CustomEvent(Vm, { bubbles: !0, cancelable: !0 });
          f.addEventListener(Vm, (h) => (n == null ? void 0 : n(h)), {
            once: !0,
          }),
            hv(f, p),
            p.defaultPrevented ? (s.current = !1) : a.onClose();
        }
      };
    return E.jsx(Xm, {
      ...o,
      ref: u,
      disabled: r,
      onClick: J(e.onClick, l),
      onPointerDown: (f) => {
        var p;
        (p = e.onPointerDown) == null || p.call(e, f), (s.current = !0);
      },
      onPointerUp: J(e.onPointerUp, (f) => {
        var p;
        s.current || (p = f.currentTarget) == null || p.click();
      }),
      onKeyDown: J(e.onKeyDown, (f) => {
        const p = c.searchRef.current !== "";
        r ||
          (p && f.key === " ") ||
          (zu.includes(f.key) && (f.currentTarget.click(), f.preventDefault()));
      }),
    });
  });
Gi.displayName = qi;
var Xm = w.forwardRef((e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...i } = e,
      a = $u(qi, r),
      c = Um(r),
      u = w.useRef(null),
      s = le(t, u),
      [l, f] = w.useState(!1),
      [p, h] = w.useState("");
    return (
      w.useEffect(() => {
        const v = u.current;
        v && h((v.textContent ?? "").trim());
      }, [i.children]),
      E.jsx(ao.ItemSlot, {
        scope: r,
        disabled: n,
        textValue: o ?? p,
        children: E.jsx(uA, {
          asChild: !0,
          ...c,
          focusable: !n,
          children: E.jsx(ce.div, {
            role: "menuitem",
            "data-highlighted": l ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...i,
            ref: s,
            onPointerMove: J(
              e.onPointerMove,
              so((v) => {
                n
                  ? a.onItemLeave(v)
                  : (a.onItemEnter(v),
                    v.defaultPrevented ||
                      v.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: J(
              e.onPointerLeave,
              so((v) => a.onItemLeave(v)),
            ),
            onFocus: J(e.onFocus, () => f(!0)),
            onBlur: J(e.onBlur, () => f(!1)),
          }),
        }),
      })
    );
  }),
  lT = "MenuCheckboxItem",
  Km = w.forwardRef((e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return E.jsx(eg, {
      scope: e.__scopeMenu,
      checked: r,
      children: E.jsx(Gi, {
        role: "menuitemcheckbox",
        "aria-checked": Vi(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": Gu(r),
        onSelect: J(
          o.onSelect,
          () => (n == null ? void 0 : n(Vi(r) ? !0 : !r)),
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
Km.displayName = lT;
var Ym = "MenuRadioGroup",
  [fT, pT] = Sr(Ym, { value: void 0, onValueChange: () => {} }),
  Zm = w.forwardRef((e, t) => {
    const { value: r, onValueChange: n, ...o } = e,
      i = ft(n);
    return E.jsx(fT, {
      scope: e.__scopeMenu,
      value: r,
      onValueChange: i,
      children: E.jsx(Wu, { ...o, ref: t }),
    });
  });
Zm.displayName = Ym;
var Jm = "MenuRadioItem",
  Qm = w.forwardRef((e, t) => {
    const { value: r, ...n } = e,
      o = pT(Jm, e.__scopeMenu),
      i = r === o.value;
    return E.jsx(eg, {
      scope: e.__scopeMenu,
      checked: i,
      children: E.jsx(Gi, {
        role: "menuitemradio",
        "aria-checked": i,
        ...n,
        ref: t,
        "data-state": Gu(i),
        onSelect: J(
          n.onSelect,
          () => {
            var a;
            return (a = o.onValueChange) == null ? void 0 : a.call(o, r);
          },
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
Qm.displayName = Jm;
var qu = "MenuItemIndicator",
  [eg, dT] = Sr(qu, { checked: !1 }),
  tg = w.forwardRef((e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e,
      i = dT(qu, r);
    return E.jsx(yt, {
      present: n || Vi(i.checked) || i.checked === !0,
      children: E.jsx(ce.span, { ...o, ref: t, "data-state": Gu(i.checked) }),
    });
  });
tg.displayName = qu;
var hT = "MenuSeparator",
  rg = w.forwardRef((e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return E.jsx(ce.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...n,
      ref: t,
    });
  });
rg.displayName = hT;
var yT = "MenuArrow",
  ng = w.forwardRef((e, t) => {
    const { __scopeMenu: r, ...n } = e,
      o = Wi(r);
    return E.jsx(Au, { ...o, ...n, ref: t });
  });
ng.displayName = yT;
var vT = "MenuSub",
  [xG, og] = Sr(vT),
  uo = "MenuSubTrigger",
  ig = w.forwardRef((e, t) => {
    const r = jr(uo, e.__scopeMenu),
      n = co(uo, e.__scopeMenu),
      o = og(uo, e.__scopeMenu),
      i = $u(uo, e.__scopeMenu),
      a = w.useRef(null),
      { pointerGraceTimerRef: c, onPointerGraceIntentChange: u } = i,
      s = { __scopeMenu: e.__scopeMenu },
      l = w.useCallback(() => {
        a.current && window.clearTimeout(a.current), (a.current = null);
      }, []);
    return (
      w.useEffect(() => l, [l]),
      w.useEffect(() => {
        const f = c.current;
        return () => {
          window.clearTimeout(f), u(null);
        };
      }, [c, u]),
      E.jsx(Fu, {
        asChild: !0,
        ...s,
        children: E.jsx(Xm, {
          id: o.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": r.open,
          "aria-controls": o.contentId,
          "data-state": ug(r.open),
          ...e,
          ref: Zn(t, o.onTriggerChange),
          onClick: (f) => {
            var p;
            (p = e.onClick) == null || p.call(e, f),
              !(e.disabled || f.defaultPrevented) &&
                (f.currentTarget.focus(), r.open || r.onOpenChange(!0));
          },
          onPointerMove: J(
            e.onPointerMove,
            so((f) => {
              i.onItemEnter(f),
                !f.defaultPrevented &&
                  !e.disabled &&
                  !r.open &&
                  !a.current &&
                  (i.onPointerGraceIntentChange(null),
                  (a.current = window.setTimeout(() => {
                    r.onOpenChange(!0), l();
                  }, 100)));
            }),
          ),
          onPointerLeave: J(
            e.onPointerLeave,
            so((f) => {
              var h, v;
              l();
              const p =
                (h = r.content) == null ? void 0 : h.getBoundingClientRect();
              if (p) {
                const d = (v = r.content) == null ? void 0 : v.dataset.side,
                  y = d === "right",
                  m = y ? -5 : 5,
                  b = p[y ? "left" : "right"],
                  x = p[y ? "right" : "left"];
                i.onPointerGraceIntentChange({
                  area: [
                    { x: f.clientX + m, y: f.clientY },
                    { x: b, y: p.top },
                    { x, y: p.top },
                    { x, y: p.bottom },
                    { x: b, y: p.bottom },
                  ],
                  side: d,
                }),
                  window.clearTimeout(c.current),
                  (c.current = window.setTimeout(
                    () => i.onPointerGraceIntentChange(null),
                    300,
                  ));
              } else {
                if ((i.onTriggerLeave(f), f.defaultPrevented)) return;
                i.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: J(e.onKeyDown, (f) => {
            var h;
            const p = i.searchRef.current !== "";
            e.disabled ||
              (p && f.key === " ") ||
              (YA[n.dir].includes(f.key) &&
                (r.onOpenChange(!0),
                (h = r.content) == null || h.focus(),
                f.preventDefault()));
          }),
        }),
      })
    );
  });
ig.displayName = uo;
var ag = "MenuSubContent",
  cg = w.forwardRef((e, t) => {
    const r = Hm(rt, e.__scopeMenu),
      { forceMount: n = r.forceMount, ...o } = e,
      i = jr(rt, e.__scopeMenu),
      a = co(rt, e.__scopeMenu),
      c = og(ag, e.__scopeMenu),
      u = w.useRef(null),
      s = le(t, u);
    return E.jsx(ao.Provider, {
      scope: e.__scopeMenu,
      children: E.jsx(yt, {
        present: n || i.open,
        children: E.jsx(ao.Slot, {
          scope: e.__scopeMenu,
          children: E.jsx(Hu, {
            id: c.contentId,
            "aria-labelledby": c.triggerId,
            ...o,
            ref: s,
            align: "start",
            side: a.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (l) => {
              var f;
              a.isUsingKeyboardRef.current &&
                ((f = u.current) == null || f.focus()),
                l.preventDefault();
            },
            onCloseAutoFocus: (l) => l.preventDefault(),
            onFocusOutside: J(e.onFocusOutside, (l) => {
              l.target !== c.trigger && i.onOpenChange(!1);
            }),
            onEscapeKeyDown: J(e.onEscapeKeyDown, (l) => {
              a.onClose(), l.preventDefault();
            }),
            onKeyDown: J(e.onKeyDown, (l) => {
              var h;
              const f = l.currentTarget.contains(l.target),
                p = ZA[a.dir].includes(l.key);
              f &&
                p &&
                (i.onOpenChange(!1),
                (h = c.trigger) == null || h.focus(),
                l.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
cg.displayName = ag;
function ug(e) {
  return e ? "open" : "closed";
}
function Vi(e) {
  return e === "indeterminate";
}
function Gu(e) {
  return Vi(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function mT(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function gT(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function bT(e, t, r) {
  const n = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t,
    o = r ? e.indexOf(r) : -1;
  let i = gT(e, Math.max(o, 0));
  n.length === 1 && (i = i.filter((c) => c !== r));
  const a = i.find((c) => c.toLowerCase().startsWith(n.toLowerCase()));
  return a !== r ? a : void 0;
}
function wT(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const c = t[i],
      u = t[a],
      s = c.x,
      l = c.y,
      f = u.x,
      p = u.y;
    l > n != p > n && r < ((f - s) * (n - l)) / (p - l) + s && (o = !o);
  }
  return o;
}
function xT(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return wT(r, t);
}
function so(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var OT = $m,
  ST = Fu,
  jT = Wm,
  kT = qm,
  PT = Wu,
  ET = Gm,
  MT = Gi,
  _T = Km,
  AT = Zm,
  TT = Qm,
  CT = tg,
  DT = rg,
  IT = ng,
  NT = ig,
  RT = cg,
  Xi = "DropdownMenu",
  [LT] = lt(Xi, [Fm]),
  Ge = Fm(),
  [BT, sg] = LT(Xi),
  lg = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: r,
        dir: n,
        open: o,
        defaultOpen: i,
        onOpenChange: a,
        modal: c = !0,
      } = e,
      u = Ge(t),
      s = w.useRef(null),
      [l, f] = Lt({ prop: o, defaultProp: i ?? !1, onChange: a, caller: Xi });
    return E.jsx(BT, {
      scope: t,
      triggerId: pt(),
      triggerRef: s,
      contentId: pt(),
      open: l,
      onOpenChange: f,
      onOpenToggle: w.useCallback(() => f((p) => !p), [f]),
      modal: c,
      children: E.jsx(OT, {
        ...u,
        open: l,
        onOpenChange: f,
        dir: n,
        modal: c,
        children: r,
      }),
    });
  };
lg.displayName = Xi;
var fg = "DropdownMenuTrigger",
  pg = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e,
      i = sg(fg, r),
      a = Ge(r);
    return E.jsx(ST, {
      asChild: !0,
      ...a,
      children: E.jsx(ce.button, {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": n ? "" : void 0,
        disabled: n,
        ...o,
        ref: Zn(t, i.triggerRef),
        onPointerDown: J(e.onPointerDown, (c) => {
          !n &&
            c.button === 0 &&
            c.ctrlKey === !1 &&
            (i.onOpenToggle(), i.open || c.preventDefault());
        }),
        onKeyDown: J(e.onKeyDown, (c) => {
          n ||
            (["Enter", " "].includes(c.key) && i.onOpenToggle(),
            c.key === "ArrowDown" && i.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        }),
      }),
    });
  });
pg.displayName = fg;
var zT = "DropdownMenuPortal",
  dg = (e) => {
    const { __scopeDropdownMenu: t, ...r } = e,
      n = Ge(t);
    return E.jsx(jT, { ...n, ...r });
  };
dg.displayName = zT;
var hg = "DropdownMenuContent",
  yg = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e,
      o = sg(hg, r),
      i = Ge(r),
      a = w.useRef(!1);
    return E.jsx(kT, {
      id: o.contentId,
      "aria-labelledby": o.triggerId,
      ...i,
      ...n,
      ref: t,
      onCloseAutoFocus: J(e.onCloseAutoFocus, (c) => {
        var u;
        a.current || (u = o.triggerRef.current) == null || u.focus(),
          (a.current = !1),
          c.preventDefault();
      }),
      onInteractOutside: J(e.onInteractOutside, (c) => {
        const u = c.detail.originalEvent,
          s = u.button === 0 && u.ctrlKey === !0,
          l = u.button === 2 || s;
        (!o.modal || l) && (a.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
yg.displayName = hg;
var FT = "DropdownMenuGroup",
  vg = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e,
      o = Ge(r);
    return E.jsx(PT, { ...o, ...n, ref: t });
  });
vg.displayName = FT;
var UT = "DropdownMenuLabel",
  mg = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e,
      o = Ge(r);
    return E.jsx(ET, { ...o, ...n, ref: t });
  });
mg.displayName = UT;
var $T = "DropdownMenuItem",
  gg = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e,
      o = Ge(r);
    return E.jsx(MT, { ...o, ...n, ref: t });
  });
gg.displayName = $T;
var HT = "DropdownMenuCheckboxItem",
  bg = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e,
      o = Ge(r);
    return E.jsx(_T, { ...o, ...n, ref: t });
  });
bg.displayName = HT;
var WT = "DropdownMenuRadioGroup",
  qT = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e,
      o = Ge(r);
    return E.jsx(AT, { ...o, ...n, ref: t });
  });
qT.displayName = WT;
var GT = "DropdownMenuRadioItem",
  wg = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e,
      o = Ge(r);
    return E.jsx(TT, { ...o, ...n, ref: t });
  });
wg.displayName = GT;
var VT = "DropdownMenuItemIndicator",
  xg = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e,
      o = Ge(r);
    return E.jsx(CT, { ...o, ...n, ref: t });
  });
xg.displayName = VT;
var XT = "DropdownMenuSeparator",
  Og = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e,
      o = Ge(r);
    return E.jsx(DT, { ...o, ...n, ref: t });
  });
Og.displayName = XT;
var KT = "DropdownMenuArrow",
  YT = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e,
      o = Ge(r);
    return E.jsx(IT, { ...o, ...n, ref: t });
  });
YT.displayName = KT;
var ZT = "DropdownMenuSubTrigger",
  Sg = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e,
      o = Ge(r);
    return E.jsx(NT, { ...o, ...n, ref: t });
  });
Sg.displayName = ZT;
var JT = "DropdownMenuSubContent",
  jg = w.forwardRef((e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e,
      o = Ge(r);
    return E.jsx(RT, {
      ...o,
      ...n,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
jg.displayName = JT;
var QT = lg,
  eC = pg,
  tC = dg,
  rC = yg,
  nC = vg,
  oC = mg,
  iC = gg,
  aC = bg,
  cC = wg,
  uC = xg,
  sC = Og,
  lC = Sg,
  fC = jg;
const pC = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  dC = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, r, n) =>
      n ? n.toUpperCase() : r.toLowerCase(),
    ),
  kg = (e) => {
    const t = dC(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Pg = (...e) =>
    e
      .filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r)
      .join(" ")
      .trim(),
  hC = (e) => {
    for (const t in e)
      if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  };
var yC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const vC = w.forwardRef(
    (
      {
        color: e = "currentColor",
        size: t = 24,
        strokeWidth: r = 2,
        absoluteStrokeWidth: n,
        className: o = "",
        children: i,
        iconNode: a,
        ...c
      },
      u,
    ) =>
      w.createElement(
        "svg",
        {
          ref: u,
          ...yC,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: n ? (Number(r) * 24) / Number(t) : r,
          className: Pg("lucide", o),
          ...(!i && !hC(c) && { "aria-hidden": "true" }),
          ...c,
        },
        [
          ...a.map(([s, l]) => w.createElement(s, l)),
          ...(Array.isArray(i) ? i : [i]),
        ],
      ),
  ),
  ee = (e, t) => {
    const r = w.forwardRef(({ className: n, ...o }, i) =>
      w.createElement(vC, {
        ref: i,
        iconNode: t,
        className: Pg(`lucide-${pC(kg(e))}`, `lucide-${e}`, n),
        ...o,
      }),
    );
    return (r.displayName = kg(e)), r;
  },
  mC = [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
        key: "3c2336",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  gC = ee("badge-check", mC),
  bC = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  wC = ee("book-open", bC),
  xC = [
    [
      "path",
      {
        d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
        key: "1fy3hk",
      },
    ],
  ],
  OC = ee("bookmark", xC),
  SC = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  jC = ee("check", SC),
  kC = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  PC = ee("chevron-down", kC),
  EC = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  MC = ee("chevron-right", EC),
  _C = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  AC = ee("chevron-up", _C),
  TC = [
    ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
    ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }],
  ],
  CC = ee("chevrons-up-down", TC),
  DC = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  IC = ee("circle-alert", DC),
  NC = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
    ["path", { d: "M12 16V8", key: "1sbj14" }],
  ],
  RC = ee("circle-arrow-up", NC),
  LC = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  BC = ee("circle-check", LC),
  zC = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  FC = ee("circle-question-mark", zC),
  UC = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]],
  $C = ee("circle", UC),
  HC = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  WC = ee("clock", HC),
  qC = [
    ["path", { d: "M12 13v8l-4-4", key: "1f5nwf" }],
    ["path", { d: "m12 21 4-4", key: "1lfcce" }],
    [
      "path",
      {
        d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",
        key: "ui1hmy",
      },
    ],
  ],
  GC = ee("cloud-download", qC),
  VC = [
    ["path", { d: "M12 13v8", key: "1l5pq0" }],
    [
      "path",
      {
        d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
        key: "1pljnt",
      },
    ],
    ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }],
  ],
  XC = ee("cloud-upload", VC),
  KC = [
    [
      "path",
      {
        d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
        key: "p7xjir",
      },
    ],
  ],
  YC = ee("cloud", KC),
  ZC = [
    ["path", { d: "M10 2v2", key: "7u0qdc" }],
    ["path", { d: "M14 2v2", key: "6buw04" }],
    [
      "path",
      {
        d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
        key: "pwadti",
      },
    ],
    ["path", { d: "M6 2v2", key: "colzsn" }],
  ],
  JC = ee("coffee", ZC),
  QC = [
    ["line", { x1: "12", x2: "18", y1: "12", y2: "18", key: "1rg63v" }],
    ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  eD = ee("copy-x", QC),
  tD = [
    [
      "path",
      {
        d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
        key: "1vdc57",
      },
    ],
    ["path", { d: "M5 21h14", key: "11awu3" }],
  ],
  rD = ee("crown", tD),
  nD = [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
  ],
  oD = ee("database", nD),
  iD = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  aD = ee("download", iD),
  cD = [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
    ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
  ],
  uD = ee("ellipsis", cD),
  sD = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  lD = ee("external-link", sD),
  fD = [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f",
      },
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  pD = ee("eye-off", fD),
  dD = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  hD = ee("eye", dD),
  yD = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    [
      "path",
      {
        d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
        key: "1oajmo",
      },
    ],
    [
      "path",
      {
        d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
        key: "mpwhp6",
      },
    ],
  ],
  vD = ee("file-braces", yD),
  mD = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  gD = ee("file-text", mD),
  bD = [
    [
      "path",
      {
        d: "M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417",
        key: "10r6g4",
      },
    ],
    [
      "path",
      {
        d: "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",
        key: "15cy7q",
      },
    ],
  ],
  wD = ee("folder-heart", bD),
  xD = [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
        key: "1kt360",
      },
    ],
    ["path", { d: "m9.5 10.5 5 5", key: "ra9qjz" }],
    ["path", { d: "m14.5 10.5-5 5", key: "l2rkpq" }],
  ],
  OD = ee("folder-x", xD),
  SD = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ],
  jD = ee("github", SD),
  kD = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  PD = ee("globe", kD),
  ED = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  MD = ee("heart", ED),
  _D = [
    [
      "path",
      { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
    ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
  ],
  AD = ee("history", _D),
  TD = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ],
  CD = ee("info", TD),
  DD = [
    [
      "rect",
      { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
    ],
    [
      "rect",
      { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
    ],
  ],
  ID = ee("layout-dashboard", DD),
  ND = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
    ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
    ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
    ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ],
  RD = ee("life-buoy", ND),
  LD = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  BD = ee("loader-circle", LD),
  zD = [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
  FD = ee("lock", zD),
  UD = [
    ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
    ["path", { d: "M15 12H3", key: "6jk70r" }],
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ],
  $D = ee("log-in", UD),
  HD = [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ],
  WD = ee("log-out", HD),
  qD = [
    [
      "path",
      {
        d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
        key: "q8bfy3",
      },
    ],
    [
      "path",
      {
        d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
        key: "1853fq",
      },
    ],
    ["path", { d: "M8 6v8", key: "15ugcq" }],
  ],
  GD = ee("megaphone", qD),
  VD = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  XD = ee("message-circle", VD),
  KD = [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p",
      },
    ],
  ],
  YD = ee("message-square", KD),
  ZD = [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" },
    ],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
  ],
  JD = ee("monitor", ZD),
  QD = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ],
  eI = ee("panel-left", QD),
  tI = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M9 21V9", key: "1oto5p" }],
  ],
  rI = ee("panels-top-left", tI),
  nI = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  oI = ee("plus", nI),
  iI = [
    [
      "path",
      {
        d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        key: "14sxne",
      },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
    [
      "path",
      {
        d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
        key: "1hlbsb",
      },
    ],
    ["path", { d: "M16 16h5v5", key: "ccwih5" }],
  ],
  aI = ee("refresh-ccw", iI),
  cI = [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
  uI = ee("refresh-cw", cI),
  sI = [
    [
      "path",
      { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ],
  lI = ee("rotate-ccw", sI),
  fI = [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
        key: "1i5ecw",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  pI = ee("settings", fI),
  dI = [
    ["path", { d: "M14 17H5", key: "gfn3mx" }],
    ["path", { d: "M19 7h-9", key: "6i9tg" }],
    ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
    ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
  ],
  hI = ee("settings-2", dI),
  yI = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "M12 8v4", key: "1got3b" }],
    ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ],
  vI = ee("shield-alert", yI),
  mI = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  gI = ee("shield-check", mI),
  bI = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  wI = ee("shield", bI),
  xI = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  OI = ee("sparkles", xI),
  SI = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  jI = ee("trash-2", SI),
  kI = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  PI = ee("trending-up", kI),
  EI = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  MI = ee("triangle-alert", EI),
  _I = [
    ["path", { d: "M12 3v12", key: "1x0j5s" }],
    ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ],
  AI = ee("upload", _I),
  TI = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
    ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
  ],
  CI = ee("user-plus", TI),
  DI = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  II = ee("user", DI),
  NI = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  RI = ee("users", NI),
  LI = [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
        key: "1ngwbx",
      },
    ],
  ],
  BI = ee("wrench", LI),
  zI = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  FI = ee("x", zI),
  UI = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  $I = ee("zap", UI);
var Ki = "Dialog",
  [Eg] = lt(Ki),
  [HI, vt] = Eg(Ki),
  Mg = (e) => {
    const {
        __scopeDialog: t,
        children: r,
        open: n,
        defaultOpen: o,
        onOpenChange: i,
        modal: a = !0,
      } = e,
      c = w.useRef(null),
      u = w.useRef(null),
      [s, l] = Lt({ prop: n, defaultProp: o ?? !1, onChange: i, caller: Ki });
    return E.jsx(HI, {
      scope: t,
      triggerRef: c,
      contentRef: u,
      contentId: pt(),
      titleId: pt(),
      descriptionId: pt(),
      open: s,
      onOpenChange: l,
      onOpenToggle: w.useCallback(() => l((f) => !f), [l]),
      modal: a,
      children: r,
    });
  };
Mg.displayName = Ki;
var _g = "DialogTrigger",
  WI = w.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = vt(_g, r),
      i = le(t, o.triggerRef);
    return E.jsx(ce.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Ku(o.open),
      ...n,
      ref: i,
      onClick: J(e.onClick, o.onOpenToggle),
    });
  });
WI.displayName = _g;
var Vu = "DialogPortal",
  [qI, Ag] = Eg(Vu, { forceMount: void 0 }),
  Tg = (e) => {
    const { __scopeDialog: t, forceMount: r, children: n, container: o } = e,
      i = vt(Vu, t);
    return E.jsx(qI, {
      scope: t,
      forceMount: r,
      children: w.Children.map(n, (a) =>
        E.jsx(yt, {
          present: r || i.open,
          children: E.jsx(no, { asChild: !0, container: o, children: a }),
        }),
      ),
    });
  };
Tg.displayName = Vu;
var Yi = "DialogOverlay",
  Cg = w.forwardRef((e, t) => {
    const r = Ag(Yi, e.__scopeDialog),
      { forceMount: n = r.forceMount, ...o } = e,
      i = vt(Yi, e.__scopeDialog);
    return i.modal
      ? E.jsx(yt, {
          present: n || i.open,
          children: E.jsx(VI, { ...o, ref: t }),
        })
      : null;
  });
Cg.displayName = Yi;
var GI = Kr("DialogOverlay.RemoveScroll"),
  VI = w.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = vt(Yi, r);
    return E.jsx(Hi, {
      as: GI,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: E.jsx(ce.div, {
        "data-state": Ku(o.open),
        ...n,
        ref: t,
        style: { pointerEvents: "auto", ...n.style },
      }),
    });
  }),
  kr = "DialogContent",
  Dg = w.forwardRef((e, t) => {
    const r = Ag(kr, e.__scopeDialog),
      { forceMount: n = r.forceMount, ...o } = e,
      i = vt(kr, e.__scopeDialog);
    return E.jsx(yt, {
      present: n || i.open,
      children: i.modal
        ? E.jsx(XI, { ...o, ref: t })
        : E.jsx(KI, { ...o, ref: t }),
    });
  });
Dg.displayName = kr;
var XI = w.forwardRef((e, t) => {
    const r = vt(kr, e.__scopeDialog),
      n = w.useRef(null),
      o = le(t, r.contentRef, n);
    return (
      w.useEffect(() => {
        const i = n.current;
        if (i) return Iu(i);
      }, []),
      E.jsx(Ig, {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: J(e.onCloseAutoFocus, (i) => {
          var a;
          i.preventDefault(), (a = r.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: J(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent,
            c = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || c) && i.preventDefault();
        }),
        onFocusOutside: J(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  KI = w.forwardRef((e, t) => {
    const r = vt(kr, e.__scopeDialog),
      n = w.useRef(!1),
      o = w.useRef(!1);
    return E.jsx(Ig, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var a, c;
        (a = e.onCloseAutoFocus) == null || a.call(e, i),
          i.defaultPrevented ||
            (n.current || (c = r.triggerRef.current) == null || c.focus(),
            i.preventDefault()),
          (n.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (i) => {
        var c, u;
        (c = e.onInteractOutside) == null || c.call(e, i),
          i.defaultPrevented ||
            ((n.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const a = i.target;
        (u = r.triggerRef.current) != null &&
          u.contains(a) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            o.current &&
            i.preventDefault();
      },
    });
  }),
  Ig = w.forwardRef((e, t) => {
    const {
        __scopeDialog: r,
        trapFocus: n,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...a
      } = e,
      c = vt(kr, r),
      u = w.useRef(null),
      s = le(t, u);
    return (
      lu(),
      E.jsxs(E.Fragment, {
        children: [
          E.jsx(ji, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: E.jsx(eo, {
              role: "dialog",
              id: c.contentId,
              "aria-describedby": c.descriptionId,
              "aria-labelledby": c.titleId,
              "data-state": Ku(c.open),
              ...a,
              ref: s,
              onDismiss: () => c.onOpenChange(!1),
            }),
          }),
          E.jsxs(E.Fragment, {
            children: [
              E.jsx(YI, { titleId: c.titleId }),
              E.jsx(JI, { contentRef: u, descriptionId: c.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Xu = "DialogTitle",
  Ng = w.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = vt(Xu, r);
    return E.jsx(ce.h2, { id: o.titleId, ...n, ref: t });
  });
Ng.displayName = Xu;
var Rg = "DialogDescription",
  Lg = w.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = vt(Rg, r);
    return E.jsx(ce.p, { id: o.descriptionId, ...n, ref: t });
  });
Lg.displayName = Rg;
var Bg = "DialogClose",
  zg = w.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = vt(Bg, r);
    return E.jsx(ce.button, {
      type: "button",
      ...n,
      ref: t,
      onClick: J(e.onClick, () => o.onOpenChange(!1)),
    });
  });
zg.displayName = Bg;
function Ku(e) {
  return e ? "open" : "closed";
}
var Fg = "DialogTitleWarning",
  [OG, Ug] = BE(Fg, { contentName: kr, titleName: Xu, docsSlug: "dialog" }),
  YI = ({ titleId: e }) => {
    const t = Ug(Fg),
      r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      w.useEffect(() => {
        e && (document.getElementById(e) || console.error(r));
      }, [r, e]),
      null
    );
  },
  ZI = "DialogDescriptionWarning",
  JI = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ug(ZI).contentName}}.`;
    return (
      w.useEffect(() => {
        var o;
        const n =
          (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
        t && n && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  QI = Mg,
  eN = Tg,
  tN = Cg,
  rN = Dg,
  nN = Ng,
  oN = Lg,
  iN = zg;
function Zi(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
var $g = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  aN = "VisuallyHidden",
  Hg = w.forwardRef((e, t) =>
    E.jsx(ce.span, { ...e, ref: t, style: { ...$g, ...e.style } }),
  );
Hg.displayName = aN;
var cN = Hg,
  uN = [" ", "Enter", "ArrowUp", "ArrowDown"],
  sN = [" ", "Enter"],
  Pr = "Select",
  [Ji, Qi, lN] = Oi(Pr),
  [an] = lt(Pr, [lN, en]),
  ea = en(),
  [fN, ar] = an(Pr),
  [pN, dN] = an(Pr),
  Wg = (e) => {
    const {
        __scopeSelect: t,
        children: r,
        open: n,
        defaultOpen: o,
        onOpenChange: i,
        value: a,
        defaultValue: c,
        onValueChange: u,
        dir: s,
        name: l,
        autoComplete: f,
        disabled: p,
        required: h,
        form: v,
      } = e,
      d = ea(t),
      [y, m] = w.useState(null),
      [b, x] = w.useState(null),
      [g, O] = w.useState(!1),
      S = Si(s),
      [j, k] = Lt({ prop: n, defaultProp: o ?? !1, onChange: i, caller: Pr }),
      [A, D] = Lt({ prop: a, defaultProp: c, onChange: u, caller: Pr }),
      M = w.useRef(null),
      _ = y ? v || !!y.closest("form") : !0,
      [C, T] = w.useState(new Set()),
      R = Array.from(C)
        .map((N) => N.props.value)
        .join(";");
    return E.jsx(Eu, {
      ...d,
      children: E.jsxs(fN, {
        required: h,
        scope: t,
        trigger: y,
        onTriggerChange: m,
        valueNode: b,
        onValueNodeChange: x,
        valueNodeHasChildren: g,
        onValueNodeHasChildrenChange: O,
        contentId: pt(),
        value: A,
        onValueChange: D,
        open: j,
        onOpenChange: k,
        dir: S,
        triggerPointerDownPosRef: M,
        disabled: p,
        children: [
          E.jsx(Ji.Provider, {
            scope: t,
            children: E.jsx(pN, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: w.useCallback((N) => {
                T((z) => new Set(z).add(N));
              }, []),
              onNativeOptionRemove: w.useCallback((N) => {
                T((z) => {
                  const W = new Set(z);
                  return W.delete(N), W;
                });
              }, []),
              children: r,
            }),
          }),
          _
            ? E.jsxs(
                h0,
                {
                  "aria-hidden": !0,
                  required: h,
                  tabIndex: -1,
                  name: l,
                  autoComplete: f,
                  value: A,
                  onChange: (N) => D(N.target.value),
                  disabled: p,
                  form: v,
                  children: [
                    A === void 0 ? E.jsx("option", { value: "" }) : null,
                    Array.from(C),
                  ],
                },
                R,
              )
            : null,
        ],
      }),
    });
  };
Wg.displayName = Pr;
var qg = "SelectTrigger",
  Gg = w.forwardRef((e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e,
      i = ea(r),
      a = ar(qg, r),
      c = a.disabled || n,
      u = le(t, a.onTriggerChange),
      s = Qi(r),
      l = w.useRef("touch"),
      [f, p, h] = v0((d) => {
        const y = s().filter((x) => !x.disabled),
          m = y.find((x) => x.value === a.value),
          b = m0(y, d, m);
        b !== void 0 && a.onValueChange(b.value);
      }),
      v = (d) => {
        c || (a.onOpenChange(!0), h()),
          d &&
            (a.triggerPointerDownPosRef.current = {
              x: Math.round(d.pageX),
              y: Math.round(d.pageY),
            });
      };
    return E.jsx(Mu, {
      asChild: !0,
      ...i,
      children: E.jsx(ce.button, {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: c,
        "data-disabled": c ? "" : void 0,
        "data-placeholder": y0(a.value) ? "" : void 0,
        ...o,
        ref: u,
        onClick: J(o.onClick, (d) => {
          d.currentTarget.focus(), l.current !== "mouse" && v(d);
        }),
        onPointerDown: J(o.onPointerDown, (d) => {
          l.current = d.pointerType;
          const y = d.target;
          y.hasPointerCapture(d.pointerId) &&
            y.releasePointerCapture(d.pointerId),
            d.button === 0 &&
              d.ctrlKey === !1 &&
              d.pointerType === "mouse" &&
              (v(d), d.preventDefault());
        }),
        onKeyDown: J(o.onKeyDown, (d) => {
          const y = f.current !== "";
          !(d.ctrlKey || d.altKey || d.metaKey) &&
            d.key.length === 1 &&
            p(d.key),
            !(y && d.key === " ") &&
              uN.includes(d.key) &&
              (v(), d.preventDefault());
        }),
      }),
    });
  });
Gg.displayName = qg;
var Vg = "SelectValue",
  Xg = w.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        className: n,
        style: o,
        children: i,
        placeholder: a = "",
        ...c
      } = e,
      u = ar(Vg, r),
      { onValueNodeHasChildrenChange: s } = u,
      l = i !== void 0,
      f = le(t, u.onValueNodeChange);
    return (
      Me(() => {
        s(l);
      }, [s, l]),
      E.jsx(ce.span, {
        ...c,
        ref: f,
        style: { pointerEvents: "none" },
        children: y0(u.value) ? E.jsx(E.Fragment, { children: a }) : i,
      })
    );
  });
Xg.displayName = Vg;
var hN = "SelectIcon",
  Kg = w.forwardRef((e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return E.jsx(ce.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: n || "\u25BC",
    });
  });
Kg.displayName = hN;
var yN = "SelectPortal",
  Yg = (e) => E.jsx(no, { asChild: !0, ...e });
Yg.displayName = yN;
var Er = "SelectContent",
  Zg = w.forwardRef((e, t) => {
    const r = ar(Er, e.__scopeSelect),
      [n, o] = w.useState();
    if (
      (Me(() => {
        o(new DocumentFragment());
      }, []),
      !r.open)
    ) {
      const i = n;
      return i
        ? Jn.createPortal(
            E.jsx(Jg, {
              scope: e.__scopeSelect,
              children: E.jsx(Ji.Slot, {
                scope: e.__scopeSelect,
                children: E.jsx("div", { children: e.children }),
              }),
            }),
            i,
          )
        : null;
    }
    return E.jsx(Qg, { ...e, ref: t });
  });
Zg.displayName = Er;
var mt = 10,
  [Jg, cr] = an(Er),
  vN = "SelectContentImpl",
  mN = Kr("SelectContent.RemoveScroll"),
  Qg = w.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        position: n = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        side: c,
        sideOffset: u,
        align: s,
        alignOffset: l,
        arrowPadding: f,
        collisionBoundary: p,
        collisionPadding: h,
        sticky: v,
        hideWhenDetached: d,
        avoidCollisions: y,
        ...m
      } = e,
      b = ar(Er, r),
      [x, g] = w.useState(null),
      [O, S] = w.useState(null),
      j = le(t, (q) => g(q)),
      [k, A] = w.useState(null),
      [D, M] = w.useState(null),
      _ = Qi(r),
      [C, T] = w.useState(!1),
      R = w.useRef(!1);
    w.useEffect(() => {
      if (x) return Iu(x);
    }, [x]),
      lu();
    const N = w.useCallback(
        (q) => {
          const [oe, ...F] = _().map(($) => $.ref.current),
            [G] = F.slice(-1),
            Z = document.activeElement;
          for (const $ of q)
            if (
              $ === Z ||
              ($ == null || $.scrollIntoView({ block: "nearest" }),
              $ === oe && O && (O.scrollTop = 0),
              $ === G && O && (O.scrollTop = O.scrollHeight),
              $ == null || $.focus(),
              document.activeElement !== Z)
            )
              return;
        },
        [_, O],
      ),
      z = w.useCallback(() => N([k, x]), [N, k, x]);
    w.useEffect(() => {
      C && z();
    }, [C, z]);
    const { onOpenChange: W, triggerPointerDownPosRef: U } = b;
    w.useEffect(() => {
      if (x) {
        let q = { x: 0, y: 0 };
        const oe = (G) => {
            var Z, $;
            q = {
              x: Math.abs(
                Math.round(G.pageX) -
                  (((Z = U.current) == null ? void 0 : Z.x) ?? 0),
              ),
              y: Math.abs(
                Math.round(G.pageY) -
                  ((($ = U.current) == null ? void 0 : $.y) ?? 0),
              ),
            };
          },
          F = (G) => {
            q.x <= 10 && q.y <= 10
              ? G.preventDefault()
              : x.contains(G.target) || W(!1),
              document.removeEventListener("pointermove", oe),
              (U.current = null);
          };
        return (
          U.current !== null &&
            (document.addEventListener("pointermove", oe),
            document.addEventListener("pointerup", F, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", oe),
              document.removeEventListener("pointerup", F, { capture: !0 });
          }
        );
      }
    }, [x, W, U]),
      w.useEffect(() => {
        const q = () => W(!1);
        return (
          window.addEventListener("blur", q),
          window.addEventListener("resize", q),
          () => {
            window.removeEventListener("blur", q),
              window.removeEventListener("resize", q);
          }
        );
      }, [W]);
    const [B, P] = v0((q) => {
        const oe = _().filter((Z) => !Z.disabled),
          F = oe.find((Z) => Z.ref.current === document.activeElement),
          G = m0(oe, q, F);
        G && setTimeout(() => G.ref.current.focus());
      }),
      L = w.useCallback(
        (q, oe, F) => {
          const G = !R.current && !F;
          ((b.value !== void 0 && b.value === oe) || G) &&
            (A(q), G && (R.current = !0));
        },
        [b.value],
      ),
      X = w.useCallback(() => (x == null ? void 0 : x.focus()), [x]),
      K = w.useCallback(
        (q, oe, F) => {
          const G = !R.current && !F;
          ((b.value !== void 0 && b.value === oe) || G) && M(q);
        },
        [b.value],
      ),
      Y = n === "popper" ? Yu : e0,
      Q =
        Y === Yu
          ? {
              side: c,
              sideOffset: u,
              align: s,
              alignOffset: l,
              arrowPadding: f,
              collisionBoundary: p,
              collisionPadding: h,
              sticky: v,
              hideWhenDetached: d,
              avoidCollisions: y,
            }
          : {};
    return E.jsx(Jg, {
      scope: r,
      content: x,
      viewport: O,
      onViewportChange: S,
      itemRefCallback: L,
      selectedItem: k,
      onItemLeave: X,
      itemTextRefCallback: K,
      focusSelectedItem: z,
      selectedItemText: D,
      position: n,
      isPositioned: C,
      searchRef: B,
      children: E.jsx(Hi, {
        as: mN,
        allowPinchZoom: !0,
        children: E.jsx(ji, {
          asChild: !0,
          trapped: b.open,
          onMountAutoFocus: (q) => {
            q.preventDefault();
          },
          onUnmountAutoFocus: J(o, (q) => {
            var oe;
            (oe = b.trigger) == null || oe.focus({ preventScroll: !0 }),
              q.preventDefault();
          }),
          children: E.jsx(eo, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: (q) => q.preventDefault(),
            onDismiss: () => b.onOpenChange(!1),
            children: E.jsx(Y, {
              role: "listbox",
              id: b.contentId,
              "data-state": b.open ? "open" : "closed",
              dir: b.dir,
              onContextMenu: (q) => q.preventDefault(),
              ...m,
              ...Q,
              onPlaced: () => T(!0),
              ref: j,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...m.style,
              },
              onKeyDown: J(m.onKeyDown, (q) => {
                const oe = q.ctrlKey || q.altKey || q.metaKey;
                if (
                  (q.key === "Tab" && q.preventDefault(),
                  !oe && q.key.length === 1 && P(q.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(q.key))
                ) {
                  let F = _()
                    .filter((G) => !G.disabled)
                    .map((G) => G.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(q.key) &&
                      (F = F.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(q.key))
                  ) {
                    const G = q.target,
                      Z = F.indexOf(G);
                    F = F.slice(Z + 1);
                  }
                  setTimeout(() => N(F)), q.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
Qg.displayName = vN;
var gN = "SelectItemAlignedPosition",
  e0 = w.forwardRef((e, t) => {
    const { __scopeSelect: r, onPlaced: n, ...o } = e,
      i = ar(Er, r),
      a = cr(Er, r),
      [c, u] = w.useState(null),
      [s, l] = w.useState(null),
      f = le(t, (j) => l(j)),
      p = Qi(r),
      h = w.useRef(!1),
      v = w.useRef(!0),
      {
        viewport: d,
        selectedItem: y,
        selectedItemText: m,
        focusSelectedItem: b,
      } = a,
      x = w.useCallback(() => {
        if (i.trigger && i.valueNode && c && s && d && y && m) {
          const j = i.trigger.getBoundingClientRect(),
            k = s.getBoundingClientRect(),
            A = i.valueNode.getBoundingClientRect(),
            D = m.getBoundingClientRect();
          if (i.dir !== "rtl") {
            const G = D.left - k.left,
              Z = A.left - G,
              $ = j.left - Z,
              pe = j.width + $,
              ae = Math.max(pe, k.width),
              Oe = window.innerWidth - mt,
              Se = Zi(Z, [mt, Math.max(mt, Oe - ae)]);
            (c.style.minWidth = pe + "px"), (c.style.left = Se + "px");
          } else {
            const G = k.right - D.right,
              Z = window.innerWidth - A.right - G,
              $ = window.innerWidth - j.right - Z,
              pe = j.width + $,
              ae = Math.max(pe, k.width),
              Oe = window.innerWidth - mt,
              Se = Zi(Z, [mt, Math.max(mt, Oe - ae)]);
            (c.style.minWidth = pe + "px"), (c.style.right = Se + "px");
          }
          const M = p(),
            _ = window.innerHeight - mt * 2,
            C = d.scrollHeight,
            T = window.getComputedStyle(s),
            R = parseInt(T.borderTopWidth, 10),
            N = parseInt(T.paddingTop, 10),
            z = parseInt(T.borderBottomWidth, 10),
            W = parseInt(T.paddingBottom, 10),
            U = R + N + C + W + z,
            B = Math.min(y.offsetHeight * 5, U),
            P = window.getComputedStyle(d),
            L = parseInt(P.paddingTop, 10),
            X = parseInt(P.paddingBottom, 10),
            K = j.top + j.height / 2 - mt,
            Y = _ - K,
            Q = y.offsetHeight / 2,
            q = y.offsetTop + Q,
            oe = R + N + q,
            F = U - oe;
          if (oe <= K) {
            const G = M.length > 0 && y === M[M.length - 1].ref.current;
            c.style.bottom = "0px";
            const Z = s.clientHeight - d.offsetTop - d.offsetHeight,
              $ = Math.max(Y, Q + (G ? X : 0) + Z + z),
              pe = oe + $;
            c.style.height = pe + "px";
          } else {
            const G = M.length > 0 && y === M[0].ref.current;
            c.style.top = "0px";
            const Z = Math.max(K, R + d.offsetTop + (G ? L : 0) + Q) + F;
            (c.style.height = Z + "px"), (d.scrollTop = oe - K + d.offsetTop);
          }
          (c.style.margin = `${mt}px 0`),
            (c.style.minHeight = B + "px"),
            (c.style.maxHeight = _ + "px"),
            n == null || n(),
            requestAnimationFrame(() => (h.current = !0));
        }
      }, [p, i.trigger, i.valueNode, c, s, d, y, m, i.dir, n]);
    Me(() => x(), [x]);
    const [g, O] = w.useState();
    Me(() => {
      s && O(window.getComputedStyle(s).zIndex);
    }, [s]);
    const S = w.useCallback(
      (j) => {
        j && v.current === !0 && (x(), b == null || b(), (v.current = !1));
      },
      [x, b],
    );
    return E.jsx(wN, {
      scope: r,
      contentWrapper: c,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: S,
      children: E.jsx("div", {
        ref: u,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: g,
        },
        children: E.jsx(ce.div, {
          ...o,
          ref: f,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
e0.displayName = gN;
var bN = "SelectPopperPosition",
  Yu = w.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        align: n = "start",
        collisionPadding: o = mt,
        ...i
      } = e,
      a = ea(r);
    return E.jsx(_u, {
      ...a,
      ...i,
      ref: t,
      align: n,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Yu.displayName = bN;
var [wN, Zu] = an(Er, {}),
  Ju = "SelectViewport",
  t0 = w.forwardRef((e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e,
      i = cr(Ju, r),
      a = Zu(Ju, r),
      c = le(t, i.onViewportChange),
      u = w.useRef(0);
    return E.jsxs(E.Fragment, {
      children: [
        E.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: n,
        }),
        E.jsx(Ji.Slot, {
          scope: r,
          children: E.jsx(ce.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: c,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...o.style,
            },
            onScroll: J(o.onScroll, (s) => {
              const l = s.currentTarget,
                { contentWrapper: f, shouldExpandOnScrollRef: p } = a;
              if (p != null && p.current && f) {
                const h = Math.abs(u.current - l.scrollTop);
                if (h > 0) {
                  const v = window.innerHeight - mt * 2,
                    d = parseFloat(f.style.minHeight),
                    y = parseFloat(f.style.height),
                    m = Math.max(d, y);
                  if (m < v) {
                    const b = m + h,
                      x = Math.min(v, b),
                      g = b - x;
                    (f.style.height = x + "px"),
                      f.style.bottom === "0px" &&
                        ((l.scrollTop = g > 0 ? g : 0),
                        (f.style.justifyContent = "flex-end"));
                  }
                }
              }
              u.current = l.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
t0.displayName = Ju;
var r0 = "SelectGroup",
  [xN, ON] = an(r0),
  SN = w.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      o = pt();
    return E.jsx(xN, {
      scope: r,
      id: o,
      children: E.jsx(ce.div, {
        role: "group",
        "aria-labelledby": o,
        ...n,
        ref: t,
      }),
    });
  });
SN.displayName = r0;
var n0 = "SelectLabel",
  o0 = w.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      o = ON(n0, r);
    return E.jsx(ce.div, { id: o.id, ...n, ref: t });
  });
o0.displayName = n0;
var ta = "SelectItem",
  [jN, i0] = an(ta),
  a0 = w.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        value: n,
        disabled: o = !1,
        textValue: i,
        ...a
      } = e,
      c = ar(ta, r),
      u = cr(ta, r),
      s = c.value === n,
      [l, f] = w.useState(i ?? ""),
      [p, h] = w.useState(!1),
      v = le(t, (b) => {
        var x;
        return (x = u.itemRefCallback) == null ? void 0 : x.call(u, b, n, o);
      }),
      d = pt(),
      y = w.useRef("touch"),
      m = () => {
        o || (c.onValueChange(n), c.onOpenChange(!1));
      };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return E.jsx(jN, {
      scope: r,
      value: n,
      disabled: o,
      textId: d,
      isSelected: s,
      onItemTextChange: w.useCallback((b) => {
        f((x) => x || ((b == null ? void 0 : b.textContent) ?? "").trim());
      }, []),
      children: E.jsx(Ji.ItemSlot, {
        scope: r,
        value: n,
        disabled: o,
        textValue: l,
        children: E.jsx(ce.div, {
          role: "option",
          "aria-labelledby": d,
          "data-highlighted": p ? "" : void 0,
          "aria-selected": s && p,
          "data-state": s ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...a,
          ref: v,
          onFocus: J(a.onFocus, () => h(!0)),
          onBlur: J(a.onBlur, () => h(!1)),
          onClick: J(a.onClick, () => {
            y.current !== "mouse" && m();
          }),
          onPointerUp: J(a.onPointerUp, () => {
            y.current === "mouse" && m();
          }),
          onPointerDown: J(a.onPointerDown, (b) => {
            y.current = b.pointerType;
          }),
          onPointerMove: J(a.onPointerMove, (b) => {
            var x;
            (y.current = b.pointerType),
              o
                ? (x = u.onItemLeave) == null || x.call(u)
                : y.current === "mouse" &&
                  b.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: J(a.onPointerLeave, (b) => {
            var x;
            b.currentTarget === document.activeElement &&
              ((x = u.onItemLeave) == null || x.call(u));
          }),
          onKeyDown: J(a.onKeyDown, (b) => {
            var x;
            (((x = u.searchRef) == null ? void 0 : x.current) !== "" &&
              b.key === " ") ||
              (sN.includes(b.key) && m(), b.key === " " && b.preventDefault());
          }),
        }),
      }),
    });
  });
a0.displayName = ta;
var lo = "SelectItemText",
  c0 = w.forwardRef((e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...i } = e,
      a = ar(lo, r),
      c = cr(lo, r),
      u = i0(lo, r),
      s = dN(lo, r),
      [l, f] = w.useState(null),
      p = le(
        t,
        (m) => f(m),
        u.onItemTextChange,
        (m) => {
          var b;
          return (b = c.itemTextRefCallback) == null
            ? void 0
            : b.call(c, m, u.value, u.disabled);
        },
      ),
      h = l == null ? void 0 : l.textContent,
      v = w.useMemo(
        () =>
          E.jsx(
            "option",
            { value: u.value, disabled: u.disabled, children: h },
            u.value,
          ),
        [u.disabled, u.value, h],
      ),
      { onNativeOptionAdd: d, onNativeOptionRemove: y } = s;
    return (
      Me(() => (d(v), () => y(v)), [d, y, v]),
      E.jsxs(E.Fragment, {
        children: [
          E.jsx(ce.span, { id: u.textId, ...i, ref: p }),
          u.isSelected && a.valueNode && !a.valueNodeHasChildren
            ? Jn.createPortal(i.children, a.valueNode)
            : null,
        ],
      })
    );
  });
c0.displayName = lo;
var u0 = "SelectItemIndicator",
  s0 = w.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return i0(u0, r).isSelected
      ? E.jsx(ce.span, { "aria-hidden": !0, ...n, ref: t })
      : null;
  });
s0.displayName = u0;
var Qu = "SelectScrollUpButton",
  l0 = w.forwardRef((e, t) => {
    const r = cr(Qu, e.__scopeSelect),
      n = Zu(Qu, e.__scopeSelect),
      [o, i] = w.useState(!1),
      a = le(t, n.onScrollButtonChange);
    return (
      Me(() => {
        if (r.viewport && r.isPositioned) {
          let c = function () {
            const s = u.scrollTop > 0;
            i(s);
          };
          const u = r.viewport;
          return (
            c(),
            u.addEventListener("scroll", c),
            () => u.removeEventListener("scroll", c)
          );
        }
      }, [r.viewport, r.isPositioned]),
      o
        ? E.jsx(p0, {
            ...e,
            ref: a,
            onAutoScroll: () => {
              const { viewport: c, selectedItem: u } = r;
              c && u && (c.scrollTop = c.scrollTop - u.offsetHeight);
            },
          })
        : null
    );
  });
l0.displayName = Qu;
var es = "SelectScrollDownButton",
  f0 = w.forwardRef((e, t) => {
    const r = cr(es, e.__scopeSelect),
      n = Zu(es, e.__scopeSelect),
      [o, i] = w.useState(!1),
      a = le(t, n.onScrollButtonChange);
    return (
      Me(() => {
        if (r.viewport && r.isPositioned) {
          let c = function () {
            const s = u.scrollHeight - u.clientHeight,
              l = Math.ceil(u.scrollTop) < s;
            i(l);
          };
          const u = r.viewport;
          return (
            c(),
            u.addEventListener("scroll", c),
            () => u.removeEventListener("scroll", c)
          );
        }
      }, [r.viewport, r.isPositioned]),
      o
        ? E.jsx(p0, {
            ...e,
            ref: a,
            onAutoScroll: () => {
              const { viewport: c, selectedItem: u } = r;
              c && u && (c.scrollTop = c.scrollTop + u.offsetHeight);
            },
          })
        : null
    );
  });
f0.displayName = es;
var p0 = w.forwardRef((e, t) => {
    const { __scopeSelect: r, onAutoScroll: n, ...o } = e,
      i = cr("SelectScrollButton", r),
      a = w.useRef(null),
      c = Qi(r),
      u = w.useCallback(() => {
        a.current !== null &&
          (window.clearInterval(a.current), (a.current = null));
      }, []);
    return (
      w.useEffect(() => () => u(), [u]),
      Me(() => {
        var s, l;
        (l =
          (s = c().find((f) => f.ref.current === document.activeElement)) ==
          null
            ? void 0
            : s.ref.current) == null || l.scrollIntoView({ block: "nearest" });
      }, [c]),
      E.jsx(ce.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: J(o.onPointerDown, () => {
          a.current === null && (a.current = window.setInterval(n, 50));
        }),
        onPointerMove: J(o.onPointerMove, () => {
          var s;
          (s = i.onItemLeave) == null || s.call(i),
            a.current === null && (a.current = window.setInterval(n, 50));
        }),
        onPointerLeave: J(o.onPointerLeave, () => {
          u();
        }),
      })
    );
  }),
  kN = "SelectSeparator",
  d0 = w.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return E.jsx(ce.div, { "aria-hidden": !0, ...n, ref: t });
  });
d0.displayName = kN;
var ts = "SelectArrow",
  PN = w.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      o = ea(r),
      i = ar(ts, r),
      a = cr(ts, r);
    return i.open && a.position === "popper"
      ? E.jsx(Au, { ...o, ...n, ref: t })
      : null;
  });
PN.displayName = ts;
var EN = "SelectBubbleInput",
  h0 = w.forwardRef(({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = w.useRef(null),
      i = le(n, o),
      a = ou(t);
    return (
      w.useEffect(() => {
        const c = o.current;
        if (!c) return;
        const u = window.HTMLSelectElement.prototype,
          s = Object.getOwnPropertyDescriptor(u, "value").set;
        if (a !== t && s) {
          const l = new Event("change", { bubbles: !0 });
          s.call(c, t), c.dispatchEvent(l);
        }
      }, [a, t]),
      E.jsx(ce.select, {
        ...r,
        style: { ...$g, ...r.style },
        ref: i,
        defaultValue: t,
      })
    );
  });
h0.displayName = EN;
function y0(e) {
  return e === "" || e === void 0;
}
function v0(e) {
  const t = ft(e),
    r = w.useRef(""),
    n = w.useRef(0),
    o = w.useCallback(
      (a) => {
        const c = r.current + a;
        t(c),
          (function u(s) {
            (r.current = s),
              window.clearTimeout(n.current),
              s !== "" && (n.current = window.setTimeout(() => u(""), 1e3));
          })(c);
      },
      [t],
    ),
    i = w.useCallback(() => {
      (r.current = ""), window.clearTimeout(n.current);
    }, []);
  return w.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, i];
}
function m0(e, t, r) {
  const n = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t,
    o = r ? e.indexOf(r) : -1;
  let i = MN(e, Math.max(o, 0));
  n.length === 1 && (i = i.filter((c) => c !== r));
  const a = i.find((c) =>
    c.textValue.toLowerCase().startsWith(n.toLowerCase()),
  );
  return a !== r ? a : void 0;
}
function MN(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var _N = Wg,
  AN = Gg,
  TN = Xg,
  CN = Kg,
  DN = Yg,
  IN = Zg,
  NN = t0,
  RN = o0,
  LN = a0,
  BN = c0,
  zN = s0,
  FN = l0,
  UN = f0,
  $N = d0,
  g0 = ["PageUp", "PageDown"],
  b0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  w0 = {
    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
  },
  cn = "Slider",
  [rs, HN, WN] = Oi(cn),
  [x0] = lt(cn, [WN]),
  [qN, ra] = x0(cn),
  O0 = w.forwardRef((e, t) => {
    const {
        name: r,
        min: n = 0,
        max: o = 100,
        step: i = 1,
        orientation: a = "horizontal",
        disabled: c = !1,
        minStepsBetweenThumbs: u = 0,
        defaultValue: s = [n],
        value: l,
        onValueChange: f = () => {},
        onValueCommit: p = () => {},
        inverted: h = !1,
        form: v,
        ...d
      } = e,
      y = w.useRef(new Set()),
      m = w.useRef(0),
      b = a === "horizontal" ? GN : VN,
      [x = [], g] = Lt({
        prop: l,
        defaultProp: s,
        onChange: (D) => {
          var M;
          (M = [...y.current][m.current]) == null || M.focus(), f(D);
        },
      }),
      O = w.useRef(x);
    function S(D) {
      const M = JN(x, D);
      A(D, M);
    }
    function j(D) {
      A(D, m.current);
    }
    function k() {
      const D = O.current[m.current];
      x[m.current] !== D && p(x);
    }
    function A(D, M, { commit: _ } = { commit: !1 }) {
      const C = rR(i),
        T = nR(Math.round((D - n) / i) * i + n, C),
        R = Zi(T, [n, o]);
      g((N = []) => {
        const z = YN(N, R, M);
        if (tR(z, u * i)) {
          m.current = z.indexOf(R);
          const W = String(z) !== String(N);
          return W && _ && p(z), W ? z : N;
        } else return N;
      });
    }
    return E.jsx(qN, {
      scope: e.__scopeSlider,
      name: r,
      disabled: c,
      min: n,
      max: o,
      valueIndexToChangeRef: m,
      thumbs: y.current,
      values: x,
      orientation: a,
      form: v,
      children: E.jsx(rs.Provider, {
        scope: e.__scopeSlider,
        children: E.jsx(rs.Slot, {
          scope: e.__scopeSlider,
          children: E.jsx(b, {
            "aria-disabled": c,
            "data-disabled": c ? "" : void 0,
            ...d,
            ref: t,
            onPointerDown: J(d.onPointerDown, () => {
              c || (O.current = x);
            }),
            min: n,
            max: o,
            inverted: h,
            onSlideStart: c ? void 0 : S,
            onSlideMove: c ? void 0 : j,
            onSlideEnd: c ? void 0 : k,
            onHomeKeyDown: () => !c && A(n, 0, { commit: !0 }),
            onEndKeyDown: () => !c && A(o, x.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: D, direction: M }) => {
              if (!c) {
                const _ =
                    g0.includes(D.key) || (D.shiftKey && b0.includes(D.key))
                      ? 10
                      : 1,
                  C = m.current,
                  T = x[C],
                  R = i * _ * M;
                A(T + R, C, { commit: !0 });
              }
            },
          }),
        }),
      }),
    });
  });
O0.displayName = cn;
var [S0, j0] = x0(cn, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1,
  }),
  GN = w.forwardRef((e, t) => {
    const {
        min: r,
        max: n,
        dir: o,
        inverted: i,
        onSlideStart: a,
        onSlideMove: c,
        onSlideEnd: u,
        onStepKeyDown: s,
        ...l
      } = e,
      [f, p] = w.useState(null),
      h = le(t, (x) => p(x)),
      v = w.useRef(void 0),
      d = Si(o),
      y = d === "ltr",
      m = (y && !i) || (!y && i);
    function b(x) {
      const g = v.current || f.getBoundingClientRect(),
        O = [0, g.width],
        S = is(O, m ? [r, n] : [n, r]);
      return (v.current = g), S(x - g.left);
    }
    return E.jsx(S0, {
      scope: e.__scopeSlider,
      startEdge: m ? "left" : "right",
      endEdge: m ? "right" : "left",
      direction: m ? 1 : -1,
      size: "width",
      children: E.jsx(k0, {
        dir: d,
        "data-orientation": "horizontal",
        ...l,
        ref: h,
        style: {
          ...l.style,
          "--radix-slider-thumb-transform": "translateX(-50%)",
        },
        onSlideStart: (x) => {
          const g = b(x.clientX);
          a == null || a(g);
        },
        onSlideMove: (x) => {
          const g = b(x.clientX);
          c == null || c(g);
        },
        onSlideEnd: () => {
          (v.current = void 0), u == null || u();
        },
        onStepKeyDown: (x) => {
          const g = w0[m ? "from-left" : "from-right"].includes(x.key);
          s == null || s({ event: x, direction: g ? -1 : 1 });
        },
      }),
    });
  }),
  VN = w.forwardRef((e, t) => {
    const {
        min: r,
        max: n,
        inverted: o,
        onSlideStart: i,
        onSlideMove: a,
        onSlideEnd: c,
        onStepKeyDown: u,
        ...s
      } = e,
      l = w.useRef(null),
      f = le(t, l),
      p = w.useRef(void 0),
      h = !o;
    function v(d) {
      const y = p.current || l.current.getBoundingClientRect(),
        m = [0, y.height],
        b = is(m, h ? [n, r] : [r, n]);
      return (p.current = y), b(d - y.top);
    }
    return E.jsx(S0, {
      scope: e.__scopeSlider,
      startEdge: h ? "bottom" : "top",
      endEdge: h ? "top" : "bottom",
      size: "height",
      direction: h ? 1 : -1,
      children: E.jsx(k0, {
        "data-orientation": "vertical",
        ...s,
        ref: f,
        style: {
          ...s.style,
          "--radix-slider-thumb-transform": "translateY(50%)",
        },
        onSlideStart: (d) => {
          const y = v(d.clientY);
          i == null || i(y);
        },
        onSlideMove: (d) => {
          const y = v(d.clientY);
          a == null || a(y);
        },
        onSlideEnd: () => {
          (p.current = void 0), c == null || c();
        },
        onStepKeyDown: (d) => {
          const y = w0[h ? "from-bottom" : "from-top"].includes(d.key);
          u == null || u({ event: d, direction: y ? -1 : 1 });
        },
      }),
    });
  }),
  k0 = w.forwardRef((e, t) => {
    const {
        __scopeSlider: r,
        onSlideStart: n,
        onSlideMove: o,
        onSlideEnd: i,
        onHomeKeyDown: a,
        onEndKeyDown: c,
        onStepKeyDown: u,
        ...s
      } = e,
      l = ra(cn, r);
    return E.jsx(ce.span, {
      ...s,
      ref: t,
      onKeyDown: J(e.onKeyDown, (f) => {
        f.key === "Home"
          ? (a(f), f.preventDefault())
          : f.key === "End"
            ? (c(f), f.preventDefault())
            : g0.concat(b0).includes(f.key) && (u(f), f.preventDefault());
      }),
      onPointerDown: J(e.onPointerDown, (f) => {
        const p = f.target;
        p.setPointerCapture(f.pointerId),
          f.preventDefault(),
          l.thumbs.has(p) ? p.focus() : n(f);
      }),
      onPointerMove: J(e.onPointerMove, (f) => {
        f.target.hasPointerCapture(f.pointerId) && o(f);
      }),
      onPointerUp: J(e.onPointerUp, (f) => {
        const p = f.target;
        p.hasPointerCapture(f.pointerId) &&
          (p.releasePointerCapture(f.pointerId), i(f));
      }),
    });
  }),
  P0 = "SliderTrack",
  E0 = w.forwardRef((e, t) => {
    const { __scopeSlider: r, ...n } = e,
      o = ra(P0, r);
    return E.jsx(ce.span, {
      "data-disabled": o.disabled ? "" : void 0,
      "data-orientation": o.orientation,
      ...n,
      ref: t,
    });
  });
E0.displayName = P0;
var ns = "SliderRange",
  M0 = w.forwardRef((e, t) => {
    const { __scopeSlider: r, ...n } = e,
      o = ra(ns, r),
      i = j0(ns, r),
      a = w.useRef(null),
      c = le(t, a),
      u = o.values.length,
      s = o.values.map((p) => T0(p, o.min, o.max)),
      l = u > 1 ? Math.min(...s) : 0,
      f = 100 - Math.max(...s);
    return E.jsx(ce.span, {
      "data-orientation": o.orientation,
      "data-disabled": o.disabled ? "" : void 0,
      ...n,
      ref: c,
      style: { ...e.style, [i.startEdge]: l + "%", [i.endEdge]: f + "%" },
    });
  });
M0.displayName = ns;
var os = "SliderThumb",
  _0 = w.forwardRef((e, t) => {
    const r = HN(e.__scopeSlider),
      [n, o] = w.useState(null),
      i = le(t, (c) => o(c)),
      a = w.useMemo(
        () => (n ? r().findIndex((c) => c.ref.current === n) : -1),
        [r, n],
      );
    return E.jsx(XN, { ...e, ref: i, index: a });
  }),
  XN = w.forwardRef((e, t) => {
    const { __scopeSlider: r, index: n, name: o, ...i } = e,
      a = ra(os, r),
      c = j0(os, r),
      [u, s] = w.useState(null),
      l = le(t, (b) => s(b)),
      f = u ? a.form || !!u.closest("form") : !0,
      p = iu(u),
      h = a.values[n],
      v = h === void 0 ? 0 : T0(h, a.min, a.max),
      d = ZN(n, a.values.length),
      y = p == null ? void 0 : p[c.size],
      m = y ? QN(y, v, c.direction) : 0;
    return (
      w.useEffect(() => {
        if (u)
          return (
            a.thumbs.add(u),
            () => {
              a.thumbs.delete(u);
            }
          );
      }, [u, a.thumbs]),
      E.jsxs("span", {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [c.startEdge]: `calc(${v}% + ${m}px)`,
        },
        children: [
          E.jsx(rs.ItemSlot, {
            scope: e.__scopeSlider,
            children: E.jsx(ce.span, {
              role: "slider",
              "aria-label": e["aria-label"] || d,
              "aria-valuemin": a.min,
              "aria-valuenow": h,
              "aria-valuemax": a.max,
              "aria-orientation": a.orientation,
              "data-orientation": a.orientation,
              "data-disabled": a.disabled ? "" : void 0,
              tabIndex: a.disabled ? void 0 : 0,
              ...i,
              ref: l,
              style: h === void 0 ? { display: "none" } : e.style,
              onFocus: J(e.onFocus, () => {
                a.valueIndexToChangeRef.current = n;
              }),
            }),
          }),
          f &&
            E.jsx(
              A0,
              {
                name:
                  o ??
                  (a.name
                    ? a.name + (a.values.length > 1 ? "[]" : "")
                    : void 0),
                form: a.form,
                value: h,
              },
              n,
            ),
        ],
      })
    );
  });
_0.displayName = os;
var KN = "RadioBubbleInput",
  A0 = w.forwardRef(({ __scopeSlider: e, value: t, ...r }, n) => {
    const o = w.useRef(null),
      i = le(o, n),
      a = ou(t);
    return (
      w.useEffect(() => {
        const c = o.current;
        if (!c) return;
        const u = window.HTMLInputElement.prototype,
          s = Object.getOwnPropertyDescriptor(u, "value").set;
        if (a !== t && s) {
          const l = new Event("input", { bubbles: !0 });
          s.call(c, t), c.dispatchEvent(l);
        }
      }, [a, t]),
      E.jsx(ce.input, {
        style: { display: "none" },
        ...r,
        ref: i,
        defaultValue: t,
      })
    );
  });
A0.displayName = KN;
function YN(e = [], t, r) {
  const n = [...e];
  return (n[r] = t), n.sort((o, i) => o - i);
}
function T0(e, t, r) {
  const n = (100 / (r - t)) * (e - t);
  return Zi(n, [0, 100]);
}
function ZN(e, t) {
  return t > 2
    ? `Value ${e + 1} of ${t}`
    : t === 2
      ? ["Minimum", "Maximum"][e]
      : void 0;
}
function JN(e, t) {
  if (e.length === 1) return 0;
  const r = e.map((o) => Math.abs(o - t)),
    n = Math.min(...r);
  return r.indexOf(n);
}
function QN(e, t, r) {
  const n = e / 2,
    o = is([0, 50], [0, n]);
  return (n - o(t) * r) * r;
}
function eR(e) {
  return e.slice(0, -1).map((t, r) => e[r + 1] - t);
}
function tR(e, t) {
  if (t > 0) {
    const r = eR(e);
    return Math.min(...r) >= t;
  }
  return !0;
}
function is(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function rR(e) {
  return (String(e).split(".")[1] || "").length;
}
function nR(e, t) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
var oR = O0,
  iR = E0,
  aR = M0,
  cR = _0,
  uR = "Separator",
  C0 = "horizontal",
  sR = ["horizontal", "vertical"],
  D0 = w.forwardRef((e, t) => {
    const { decorative: r, orientation: n = C0, ...o } = e,
      i = lR(n) ? n : C0,
      a = r
        ? { role: "none" }
        : {
            "aria-orientation": i === "vertical" ? i : void 0,
            role: "separator",
          };
    return E.jsx(Qn.div, { "data-orientation": i, ...a, ...o, ref: t });
  });
D0.displayName = uR;
function lR(e) {
  return sR.includes(e);
}
var fR = D0,
  as,
  I0;
function Xe() {
  if (I0) return as;
  I0 = 1;
  var e = Array.isArray;
  return (as = e), as;
}
var cs, N0;
function R0() {
  if (N0) return cs;
  N0 = 1;
  var e = typeof Xn == "object" && Xn && Xn.Object === Object && Xn;
  return (cs = e), cs;
}
var us, L0;
function Mt() {
  if (L0) return us;
  L0 = 1;
  var e = R0(),
    t = typeof self == "object" && self && self.Object === Object && self,
    r = e || t || Function("return this")();
  return (us = r), us;
}
var ss, B0;
function fo() {
  if (B0) return ss;
  B0 = 1;
  var e = Mt(),
    t = e.Symbol;
  return (ss = t), ss;
}
var ls, z0;
function pR() {
  if (z0) return ls;
  z0 = 1;
  var e = fo(),
    t = Object.prototype,
    r = t.hasOwnProperty,
    n = t.toString,
    o = e ? e.toStringTag : void 0;
  function i(a) {
    var c = r.call(a, o),
      u = a[o];
    try {
      a[o] = void 0;
      var s = !0;
    } catch {}
    var l = n.call(a);
    return s && (c ? (a[o] = u) : delete a[o]), l;
  }
  return (ls = i), ls;
}
var fs, F0;
function dR() {
  if (F0) return fs;
  F0 = 1;
  var e = Object.prototype,
    t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return (fs = r), fs;
}
var ps, U0;
function Ut() {
  if (U0) return ps;
  U0 = 1;
  var e = fo(),
    t = pR(),
    r = dR(),
    n = "[object Null]",
    o = "[object Undefined]",
    i = e ? e.toStringTag : void 0;
  function a(c) {
    return c == null
      ? c === void 0
        ? o
        : n
      : i && i in Object(c)
        ? t(c)
        : r(c);
  }
  return (ps = a), ps;
}
var ds, $0;
function $t() {
  if ($0) return ds;
  $0 = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return (ds = e), ds;
}
var hs, H0;
function un() {
  if (H0) return hs;
  H0 = 1;
  var e = Ut(),
    t = $t(),
    r = "[object Symbol]";
  function n(o) {
    return typeof o == "symbol" || (t(o) && e(o) == r);
  }
  return (hs = n), hs;
}
var ys, W0;
function vs() {
  if (W0) return ys;
  W0 = 1;
  var e = Xe(),
    t = un(),
    r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    n = /^\w*$/;
  function o(i, a) {
    if (e(i)) return !1;
    var c = typeof i;
    return c == "number" || c == "symbol" || c == "boolean" || i == null || t(i)
      ? !0
      : n.test(i) || !r.test(i) || (a != null && i in Object(a));
  }
  return (ys = o), ys;
}
var ms, q0;
function ur() {
  if (q0) return ms;
  q0 = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return (ms = e), ms;
}
var gs, G0;
function bs() {
  if (G0) return gs;
  G0 = 1;
  var e = Ut(),
    t = ur(),
    r = "[object AsyncFunction]",
    n = "[object Function]",
    o = "[object GeneratorFunction]",
    i = "[object Proxy]";
  function a(c) {
    if (!t(c)) return !1;
    var u = e(c);
    return u == n || u == o || u == r || u == i;
  }
  return (gs = a), gs;
}
var ws, V0;
function hR() {
  if (V0) return ws;
  V0 = 1;
  var e = Mt(),
    t = e["__core-js_shared__"];
  return (ws = t), ws;
}
var xs, X0;
function yR() {
  if (X0) return xs;
  X0 = 1;
  var e = hR(),
    t = (function () {
      var n = /[^.]+$/.exec((e && e.keys && e.keys.IE_PROTO) || "");
      return n ? "Symbol(src)_1." + n : "";
    })();
  function r(n) {
    return !!t && t in n;
  }
  return (xs = r), xs;
}
var Os, K0;
function Y0() {
  if (K0) return Os;
  K0 = 1;
  var e = Function.prototype,
    t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {}
      try {
        return n + "";
      } catch {}
    }
    return "";
  }
  return (Os = r), Os;
}
var Ss, Z0;
function vR() {
  if (Z0) return Ss;
  Z0 = 1;
  var e = bs(),
    t = yR(),
    r = ur(),
    n = Y0(),
    o = /[\\^$.*+?()[\]{}|]/g,
    i = /^\[object .+?Constructor\]$/,
    a = Function.prototype,
    c = Object.prototype,
    u = a.toString,
    s = c.hasOwnProperty,
    l = RegExp(
      "^" +
        u
          .call(s)
          .replace(o, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) +
        "$",
    );
  function f(p) {
    if (!r(p) || t(p)) return !1;
    var h = e(p) ? l : i;
    return h.test(n(p));
  }
  return (Ss = f), Ss;
}
var js, J0;
function mR() {
  if (J0) return js;
  J0 = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return (js = e), js;
}
var ks, Q0;
function Mr() {
  if (Q0) return ks;
  Q0 = 1;
  var e = vR(),
    t = mR();
  function r(n, o) {
    var i = t(n, o);
    return e(i) ? i : void 0;
  }
  return (ks = r), ks;
}
var Ps, eb;
function na() {
  if (eb) return Ps;
  eb = 1;
  var e = Mr(),
    t = e(Object, "create");
  return (Ps = t), Ps;
}
var Es, tb;
function gR() {
  if (tb) return Es;
  tb = 1;
  var e = na();
  function t() {
    (this.__data__ = e ? e(null) : {}), (this.size = 0);
  }
  return (Es = t), Es;
}
var Ms, rb;
function bR() {
  if (rb) return Ms;
  rb = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return (this.size -= r ? 1 : 0), r;
  }
  return (Ms = e), Ms;
}
var _s, nb;
function wR() {
  if (nb) return _s;
  nb = 1;
  var e = na(),
    t = "__lodash_hash_undefined__",
    r = Object.prototype,
    n = r.hasOwnProperty;
  function o(i) {
    var a = this.__data__;
    if (e) {
      var c = a[i];
      return c === t ? void 0 : c;
    }
    return n.call(a, i) ? a[i] : void 0;
  }
  return (_s = o), _s;
}
var As, ob;
function xR() {
  if (ob) return As;
  ob = 1;
  var e = na(),
    t = Object.prototype,
    r = t.hasOwnProperty;
  function n(o) {
    var i = this.__data__;
    return e ? i[o] !== void 0 : r.call(i, o);
  }
  return (As = n), As;
}
var Ts, ib;
function OR() {
  if (ib) return Ts;
  ib = 1;
  var e = na(),
    t = "__lodash_hash_undefined__";
  function r(n, o) {
    var i = this.__data__;
    return (
      (this.size += this.has(n) ? 0 : 1),
      (i[n] = e && o === void 0 ? t : o),
      this
    );
  }
  return (Ts = r), Ts;
}
var Cs, ab;
function SR() {
  if (ab) return Cs;
  ab = 1;
  var e = gR(),
    t = bR(),
    r = wR(),
    n = xR(),
    o = OR();
  function i(a) {
    var c = -1,
      u = a == null ? 0 : a.length;
    for (this.clear(); ++c < u; ) {
      var s = a[c];
      this.set(s[0], s[1]);
    }
  }
  return (
    (i.prototype.clear = e),
    (i.prototype.delete = t),
    (i.prototype.get = r),
    (i.prototype.has = n),
    (i.prototype.set = o),
    (Cs = i),
    Cs
  );
}
var Ds, cb;
function jR() {
  if (cb) return Ds;
  cb = 1;
  function e() {
    (this.__data__ = []), (this.size = 0);
  }
  return (Ds = e), Ds;
}
var Is, ub;
function Ns() {
  if (ub) return Is;
  ub = 1;
  function e(t, r) {
    return t === r || (t !== t && r !== r);
  }
  return (Is = e), Is;
}
var Rs, sb;
function oa() {
  if (sb) return Rs;
  sb = 1;
  var e = Ns();
  function t(r, n) {
    for (var o = r.length; o--; ) if (e(r[o][0], n)) return o;
    return -1;
  }
  return (Rs = t), Rs;
}
var Ls, lb;
function kR() {
  if (lb) return Ls;
  lb = 1;
  var e = oa(),
    t = Array.prototype,
    r = t.splice;
  function n(o) {
    var i = this.__data__,
      a = e(i, o);
    if (a < 0) return !1;
    var c = i.length - 1;
    return a == c ? i.pop() : r.call(i, a, 1), --this.size, !0;
  }
  return (Ls = n), Ls;
}
var Bs, fb;
function PR() {
  if (fb) return Bs;
  fb = 1;
  var e = oa();
  function t(r) {
    var n = this.__data__,
      o = e(n, r);
    return o < 0 ? void 0 : n[o][1];
  }
  return (Bs = t), Bs;
}
var zs, pb;
function ER() {
  if (pb) return zs;
  pb = 1;
  var e = oa();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return (zs = t), zs;
}
var Fs, db;
function MR() {
  if (db) return Fs;
  db = 1;
  var e = oa();
  function t(r, n) {
    var o = this.__data__,
      i = e(o, r);
    return i < 0 ? (++this.size, o.push([r, n])) : (o[i][1] = n), this;
  }
  return (Fs = t), Fs;
}
var Us, hb;
function ia() {
  if (hb) return Us;
  hb = 1;
  var e = jR(),
    t = kR(),
    r = PR(),
    n = ER(),
    o = MR();
  function i(a) {
    var c = -1,
      u = a == null ? 0 : a.length;
    for (this.clear(); ++c < u; ) {
      var s = a[c];
      this.set(s[0], s[1]);
    }
  }
  return (
    (i.prototype.clear = e),
    (i.prototype.delete = t),
    (i.prototype.get = r),
    (i.prototype.has = n),
    (i.prototype.set = o),
    (Us = i),
    Us
  );
}
var $s, yb;
function Hs() {
  if (yb) return $s;
  yb = 1;
  var e = Mr(),
    t = Mt(),
    r = e(t, "Map");
  return ($s = r), $s;
}
var Ws, vb;
function _R() {
  if (vb) return Ws;
  vb = 1;
  var e = SR(),
    t = ia(),
    r = Hs();
  function n() {
    (this.size = 0),
      (this.__data__ = { hash: new e(), map: new (r || t)(), string: new e() });
  }
  return (Ws = n), Ws;
}
var qs, mb;
function AR() {
  if (mb) return qs;
  mb = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean"
      ? t !== "__proto__"
      : t === null;
  }
  return (qs = e), qs;
}
var Gs, gb;
function aa() {
  if (gb) return Gs;
  gb = 1;
  var e = AR();
  function t(r, n) {
    var o = r.__data__;
    return e(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
  }
  return (Gs = t), Gs;
}
var Vs, bb;
function TR() {
  if (bb) return Vs;
  bb = 1;
  var e = aa();
  function t(r) {
    var n = e(this, r).delete(r);
    return (this.size -= n ? 1 : 0), n;
  }
  return (Vs = t), Vs;
}
var Xs, wb;
function CR() {
  if (wb) return Xs;
  wb = 1;
  var e = aa();
  function t(r) {
    return e(this, r).get(r);
  }
  return (Xs = t), Xs;
}
var Ks, xb;
function DR() {
  if (xb) return Ks;
  xb = 1;
  var e = aa();
  function t(r) {
    return e(this, r).has(r);
  }
  return (Ks = t), Ks;
}
var Ys, Ob;
function IR() {
  if (Ob) return Ys;
  Ob = 1;
  var e = aa();
  function t(r, n) {
    var o = e(this, r),
      i = o.size;
    return o.set(r, n), (this.size += o.size == i ? 0 : 1), this;
  }
  return (Ys = t), Ys;
}
var Zs, Sb;
function Js() {
  if (Sb) return Zs;
  Sb = 1;
  var e = _R(),
    t = TR(),
    r = CR(),
    n = DR(),
    o = IR();
  function i(a) {
    var c = -1,
      u = a == null ? 0 : a.length;
    for (this.clear(); ++c < u; ) {
      var s = a[c];
      this.set(s[0], s[1]);
    }
  }
  return (
    (i.prototype.clear = e),
    (i.prototype.delete = t),
    (i.prototype.get = r),
    (i.prototype.has = n),
    (i.prototype.set = o),
    (Zs = i),
    Zs
  );
}
var Qs, jb;
function kb() {
  if (jb) return Qs;
  jb = 1;
  var e = Js(),
    t = "Expected a function";
  function r(n, o) {
    if (typeof n != "function" || (o != null && typeof o != "function"))
      throw new TypeError(t);
    var i = function () {
      var a = arguments,
        c = o ? o.apply(this, a) : a[0],
        u = i.cache;
      if (u.has(c)) return u.get(c);
      var s = n.apply(this, a);
      return (i.cache = u.set(c, s) || u), s;
    };
    return (i.cache = new (r.Cache || e)()), i;
  }
  return (r.Cache = e), (Qs = r), Qs;
}
var el, Pb;
function NR() {
  if (Pb) return el;
  Pb = 1;
  var e = kb(),
    t = 500;
  function r(n) {
    var o = e(n, function (a) {
        return i.size === t && i.clear(), a;
      }),
      i = o.cache;
    return o;
  }
  return (el = r), el;
}
var tl, Eb;
function RR() {
  if (Eb) return tl;
  Eb = 1;
  var e = NR(),
    t =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    r = /\\(\\)?/g,
    n = e(function (o) {
      var i = [];
      return (
        o.charCodeAt(0) === 46 && i.push(""),
        o.replace(t, function (a, c, u, s) {
          i.push(u ? s.replace(r, "$1") : c || a);
        }),
        i
      );
    });
  return (tl = n), tl;
}
var rl, Mb;
function nl() {
  if (Mb) return rl;
  Mb = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, i = Array(o); ++n < o; )
      i[n] = r(t[n], n, t);
    return i;
  }
  return (rl = e), rl;
}
var ol, _b;
function LR() {
  if (_b) return ol;
  _b = 1;
  var e = fo(),
    t = nl(),
    r = Xe(),
    n = un(),
    o = e ? e.prototype : void 0,
    i = o ? o.toString : void 0;
  function a(c) {
    if (typeof c == "string") return c;
    if (r(c)) return t(c, a) + "";
    if (n(c)) return i ? i.call(c) : "";
    var u = c + "";
    return u == "0" && 1 / c == -1 / 0 ? "-0" : u;
  }
  return (ol = a), ol;
}
var il, Ab;
function Tb() {
  if (Ab) return il;
  Ab = 1;
  var e = LR();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return (il = t), il;
}
var al, Cb;
function Db() {
  if (Cb) return al;
  Cb = 1;
  var e = Xe(),
    t = vs(),
    r = RR(),
    n = Tb();
  function o(i, a) {
    return e(i) ? i : t(i, a) ? [i] : r(n(i));
  }
  return (al = o), al;
}
var cl, Ib;
function ca() {
  if (Ib) return cl;
  Ib = 1;
  var e = un();
  function t(r) {
    if (typeof r == "string" || e(r)) return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return (cl = t), cl;
}
var ul, Nb;
function sl() {
  if (Nb) return ul;
  Nb = 1;
  var e = Db(),
    t = ca();
  function r(n, o) {
    o = e(o, n);
    for (var i = 0, a = o.length; n != null && i < a; ) n = n[t(o[i++])];
    return i && i == a ? n : void 0;
  }
  return (ul = r), ul;
}
var ll, Rb;
function Lb() {
  if (Rb) return ll;
  Rb = 1;
  var e = sl();
  function t(r, n, o) {
    var i = r == null ? void 0 : e(r, n);
    return i === void 0 ? o : i;
  }
  return (ll = t), ll;
}
var BR = Lb();
const nt = be(BR);
var fl, Bb;
function zR() {
  if (Bb) return fl;
  Bb = 1;
  function e(t) {
    return t == null;
  }
  return (fl = e), fl;
}
var FR = zR();
const ye = be(FR);
var pl, zb;
function UR() {
  if (zb) return pl;
  zb = 1;
  var e = Ut(),
    t = Xe(),
    r = $t(),
    n = "[object String]";
  function o(i) {
    return typeof i == "string" || (!t(i) && r(i) && e(i) == n);
  }
  return (pl = o), pl;
}
var $R = UR();
const _r = be($R);
var HR = bs();
const fe = be(HR);
var WR = ur();
const sn = be(WR);
var Fb = { exports: {} },
  me = {},
  Ub;
function qR() {
  if (Ub) return me;
  Ub = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    n = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    i = Symbol.for("react.provider"),
    a = Symbol.for("react.context"),
    c = Symbol.for("react.server_context"),
    u = Symbol.for("react.forward_ref"),
    s = Symbol.for("react.suspense"),
    l = Symbol.for("react.suspense_list"),
    f = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    h = Symbol.for("react.offscreen"),
    v;
  v = Symbol.for("react.module.reference");
  function d(y) {
    if (typeof y == "object" && y !== null) {
      var m = y.$$typeof;
      switch (m) {
        case e:
          switch (((y = y.type), y)) {
            case r:
            case o:
            case n:
            case s:
            case l:
              return y;
            default:
              switch (((y = y && y.$$typeof), y)) {
                case c:
                case a:
                case u:
                case p:
                case f:
                case i:
                  return y;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return (
    (me.ContextConsumer = a),
    (me.ContextProvider = i),
    (me.Element = e),
    (me.ForwardRef = u),
    (me.Fragment = r),
    (me.Lazy = p),
    (me.Memo = f),
    (me.Portal = t),
    (me.Profiler = o),
    (me.StrictMode = n),
    (me.Suspense = s),
    (me.SuspenseList = l),
    (me.isAsyncMode = function () {
      return !1;
    }),
    (me.isConcurrentMode = function () {
      return !1;
    }),
    (me.isContextConsumer = function (y) {
      return d(y) === a;
    }),
    (me.isContextProvider = function (y) {
      return d(y) === i;
    }),
    (me.isElement = function (y) {
      return typeof y == "object" && y !== null && y.$$typeof === e;
    }),
    (me.isForwardRef = function (y) {
      return d(y) === u;
    }),
    (me.isFragment = function (y) {
      return d(y) === r;
    }),
    (me.isLazy = function (y) {
      return d(y) === p;
    }),
    (me.isMemo = function (y) {
      return d(y) === f;
    }),
    (me.isPortal = function (y) {
      return d(y) === t;
    }),
    (me.isProfiler = function (y) {
      return d(y) === o;
    }),
    (me.isStrictMode = function (y) {
      return d(y) === n;
    }),
    (me.isSuspense = function (y) {
      return d(y) === s;
    }),
    (me.isSuspenseList = function (y) {
      return d(y) === l;
    }),
    (me.isValidElementType = function (y) {
      return (
        typeof y == "string" ||
        typeof y == "function" ||
        y === r ||
        y === o ||
        y === n ||
        y === s ||
        y === l ||
        y === h ||
        (typeof y == "object" &&
          y !== null &&
          (y.$$typeof === p ||
            y.$$typeof === f ||
            y.$$typeof === i ||
            y.$$typeof === a ||
            y.$$typeof === u ||
            y.$$typeof === v ||
            y.getModuleId !== void 0))
      );
    }),
    (me.typeOf = d),
    me
  );
}
var $b;
function GR() {
  return $b || (($b = 1), (Fb.exports = qR())), Fb.exports;
}
var VR = GR(),
  dl,
  Hb;
function Wb() {
  if (Hb) return dl;
  Hb = 1;
  var e = Ut(),
    t = $t(),
    r = "[object Number]";
  function n(o) {
    return typeof o == "number" || (t(o) && e(o) == r);
  }
  return (dl = n), dl;
}
var hl, qb;
function XR() {
  if (qb) return hl;
  qb = 1;
  var e = Wb();
  function t(r) {
    return e(r) && r != +r;
  }
  return (hl = t), hl;
}
var KR = XR();
const po = be(KR);
var YR = Wb();
const ZR = be(YR);
var gt = function (e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1;
  },
  Ar = function (e) {
    return _r(e) && e.indexOf("%") === e.length - 1;
  },
  V = function (e) {
    return ZR(e) && !po(e);
  },
  JR = function (e) {
    return ye(e);
  },
  Ce = function (e) {
    return V(e) || _r(e);
  },
  QR = 0,
  ua = function (e) {
    var t = ++QR;
    return "".concat(e || "").concat(t);
  },
  Tr = function (e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!V(e) && !_r(e)) return r;
    var o;
    if (Ar(e)) {
      var i = e.indexOf("%");
      o = (t * parseFloat(e.slice(0, i))) / 100;
    } else o = +e;
    return po(o) && (o = r), n && o > t && (o = t), o;
  },
  sr = function (e) {
    if (!e) return null;
    var t = Object.keys(e);
    return t && t.length ? e[t[0]] : null;
  },
  e5 = function (e) {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, r = {}, n = 0; n < t; n++)
      if (!r[e[n]]) r[e[n]] = !0;
      else return !0;
    return !1;
  },
  ln = function (e, t) {
    return V(e) && V(t)
      ? function (r) {
          return e + r * (t - e);
        }
      : function () {
          return t;
        };
  };
function yl(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == "function" ? t(n) : nt(n, t)) === r;
      });
}
var t5 = function (e, t) {
  return V(e) && V(t)
    ? e - t
    : _r(e) && _r(t)
      ? e.localeCompare(t)
      : e instanceof Date && t instanceof Date
        ? e.getTime() - t.getTime()
        : String(e).localeCompare(String(t));
};
function fn(e, t) {
  for (var r in e)
    if (
      {}.hasOwnProperty.call(e, r) &&
      (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
    )
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function vl(e) {
  "@babel/helpers - typeof";
  return (
    (vl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    vl(e)
  );
}
var r5 = ["viewBox", "children"],
  n5 = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  Gb = ["points", "pathLength"],
  ml = { svg: r5, polygon: Gb, polyline: Gb },
  gl = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  sa = function (e, t) {
    if (!e || typeof e == "function" || typeof e == "boolean") return null;
    var r = e;
    if ((w.isValidElement(e) && (r = e.props), !sn(r))) return null;
    var n = {};
    return (
      Object.keys(r).forEach(function (o) {
        gl.includes(o) &&
          (n[o] =
            t ||
            function (i) {
              return r[o](r, i);
            });
      }),
      n
    );
  },
  o5 = function (e, t, r) {
    return function (n) {
      return e(t, r, n), null;
    };
  },
  la = function (e, t, r) {
    if (!sn(e) || vl(e) !== "object") return null;
    var n = null;
    return (
      Object.keys(e).forEach(function (o) {
        var i = e[o];
        gl.includes(o) &&
          typeof i == "function" &&
          (n || (n = {}), (n[o] = o5(i, t, r)));
      }),
      n
    );
  },
  i5 = ["children"],
  a5 = ["children"];
function Vb(e, t) {
  if (e == null) return {};
  var r = c5(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function c5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Xb = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    contextmenu: "onContextMenu",
    dblclick: "onDoubleClick",
  },
  Ht = function (e) {
    return typeof e == "string"
      ? e
      : e
        ? e.displayName || e.name || "Component"
        : "";
  },
  Kb = null,
  bl = null,
  wl = function e(t) {
    if (t === Kb && Array.isArray(bl)) return bl;
    var r = [];
    return (
      w.Children.forEach(t, function (n) {
        ye(n) ||
          (VR.isFragment(n) ? (r = r.concat(e(n.props.children))) : r.push(n));
      }),
      (bl = r),
      (Kb = t),
      r
    );
  };
function bt(e, t) {
  var r = [],
    n = [];
  return (
    Array.isArray(t)
      ? (n = t.map(function (o) {
          return Ht(o);
        }))
      : (n = [Ht(t)]),
    wl(e).forEach(function (o) {
      var i = nt(o, "type.displayName") || nt(o, "type.name");
      n.indexOf(i) !== -1 && r.push(o);
    }),
    r
  );
}
function Je(e, t) {
  var r = bt(e, t);
  return r && r[0];
}
var Yb = function (e) {
    if (!e || !e.props) return !1;
    var t = e.props,
      r = t.width,
      n = t.height;
    return !(!V(r) || r <= 0 || !V(n) || n <= 0);
  },
  u5 = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  s5 = function (e) {
    return e && e.type && _r(e.type) && u5.indexOf(e.type) >= 0;
  },
  l5 = function (e, t, r, n) {
    var o,
      i = (o = ml == null ? void 0 : ml[n]) !== null && o !== void 0 ? o : [];
    return (
      t.startsWith("data-") ||
      (!fe(e) && ((n && i.includes(t)) || n5.includes(t))) ||
      (r && gl.includes(t))
    );
  },
  ve = function (e, t, r) {
    if (!e || typeof e == "function" || typeof e == "boolean") return null;
    var n = e;
    if ((w.isValidElement(e) && (n = e.props), !sn(n))) return null;
    var o = {};
    return (
      Object.keys(n).forEach(function (i) {
        var a;
        l5((a = n) === null || a === void 0 ? void 0 : a[i], i, t, r) &&
          (o[i] = n[i]);
      }),
      o
    );
  },
  xl = function e(t, r) {
    if (t === r) return !0;
    var n = w.Children.count(t);
    if (n !== w.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1)
      return Zb(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
    for (var o = 0; o < n; o++) {
      var i = t[o],
        a = r[o];
      if (Array.isArray(i) || Array.isArray(a)) {
        if (!e(i, a)) return !1;
      } else if (!Zb(i, a)) return !1;
    }
    return !0;
  },
  Zb = function (e, t) {
    if (ye(e) && ye(t)) return !0;
    if (!ye(e) && !ye(t)) {
      var r = e.props || {},
        n = r.children,
        o = Vb(r, i5),
        i = t.props || {},
        a = i.children,
        c = Vb(i, a5);
      return n && a ? fn(o, c) && xl(n, a) : !n && !a ? fn(o, c) : !1;
    }
    return !1;
  },
  Jb = function (e, t) {
    var r = [],
      n = {};
    return (
      wl(e).forEach(function (o, i) {
        if (s5(o)) r.push(o);
        else if (o) {
          var a = Ht(o.type),
            c = t[a] || {},
            u = c.handler,
            s = c.once;
          if (u && (!s || !n[a])) {
            var l = u(o, a, i);
            r.push(l), (n[a] = !0);
          }
        }
      }),
      r
    );
  },
  f5 = function (e) {
    var t = e && e.type;
    return t && Xb[t] ? Xb[t] : null;
  },
  p5 = function (e, t) {
    return wl(t).indexOf(e);
  },
  d5 = [
    "children",
    "width",
    "height",
    "viewBox",
    "className",
    "style",
    "title",
    "desc",
  ];
function Ol() {
  return (
    (Ol = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ol.apply(this, arguments)
  );
}
function h5(e, t) {
  if (e == null) return {};
  var r = y5(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function y5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Sl(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    o = e.viewBox,
    i = e.className,
    a = e.style,
    c = e.title,
    u = e.desc,
    s = h5(e, d5),
    l = o || { width: r, height: n, x: 0, y: 0 },
    f = de("recharts-surface", i);
  return I.createElement(
    "svg",
    Ol({}, ve(s, !0, "svg"), {
      className: f,
      width: r,
      height: n,
      style: a,
      viewBox: ""
        .concat(l.x, " ")
        .concat(l.y, " ")
        .concat(l.width, " ")
        .concat(l.height),
    }),
    I.createElement("title", null, c),
    I.createElement("desc", null, u),
    t,
  );
}
var v5 = ["children", "className"];
function jl() {
  return (
    (jl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    jl.apply(this, arguments)
  );
}
function m5(e, t) {
  if (e == null) return {};
  var r = g5(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function g5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Re = I.forwardRef(function (e, t) {
    var r = e.children,
      n = e.className,
      o = m5(e, v5),
      i = de("recharts-layer", n);
    return I.createElement("g", jl({ className: i }, ve(o, !0), { ref: t }), r);
  }),
  Wt = function (e, t) {
    for (
      var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2;
      o < r;
      o++
    )
      n[o - 2] = arguments[o];
  },
  kl,
  Qb;
function b5() {
  if (Qb) return kl;
  Qb = 1;
  function e(t, r, n) {
    var o = -1,
      i = t.length;
    r < 0 && (r = -r > i ? 0 : i + r),
      (n = n > i ? i : n),
      n < 0 && (n += i),
      (i = r > n ? 0 : (n - r) >>> 0),
      (r >>>= 0);
    for (var a = Array(i); ++o < i; ) a[o] = t[o + r];
    return a;
  }
  return (kl = e), kl;
}
var Pl, e1;
function w5() {
  if (e1) return Pl;
  e1 = 1;
  var e = b5();
  function t(r, n, o) {
    var i = r.length;
    return (o = o === void 0 ? i : o), !n && o >= i ? r : e(r, n, o);
  }
  return (Pl = t), Pl;
}
var El, t1;
function r1() {
  if (t1) return El;
  t1 = 1;
  var e = "\\ud800-\\udfff",
    t = "\\u0300-\\u036f",
    r = "\\ufe20-\\ufe2f",
    n = "\\u20d0-\\u20ff",
    o = t + r + n,
    i = "\\ufe0e\\ufe0f",
    a = "\\u200d",
    c = RegExp("[" + a + e + o + i + "]");
  function u(s) {
    return c.test(s);
  }
  return (El = u), El;
}
var Ml, n1;
function x5() {
  if (n1) return Ml;
  n1 = 1;
  function e(t) {
    return t.split("");
  }
  return (Ml = e), Ml;
}
var _l, o1;
function O5() {
  if (o1) return _l;
  o1 = 1;
  var e = "\\ud800-\\udfff",
    t = "\\u0300-\\u036f",
    r = "\\ufe20-\\ufe2f",
    n = "\\u20d0-\\u20ff",
    o = t + r + n,
    i = "\\ufe0e\\ufe0f",
    a = "[" + e + "]",
    c = "[" + o + "]",
    u = "\\ud83c[\\udffb-\\udfff]",
    s = "(?:" + c + "|" + u + ")",
    l = "[^" + e + "]",
    f = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    p = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    h = "\\u200d",
    v = s + "?",
    d = "[" + i + "]?",
    y = "(?:" + h + "(?:" + [l, f, p].join("|") + ")" + d + v + ")*",
    m = d + v + y,
    b = "(?:" + [l + c + "?", c, f, p, a].join("|") + ")",
    x = RegExp(u + "(?=" + u + ")|" + b + m, "g");
  function g(O) {
    return O.match(x) || [];
  }
  return (_l = g), _l;
}
var Al, i1;
function S5() {
  if (i1) return Al;
  i1 = 1;
  var e = x5(),
    t = r1(),
    r = O5();
  function n(o) {
    return t(o) ? r(o) : e(o);
  }
  return (Al = n), Al;
}
var Tl, a1;
function j5() {
  if (a1) return Tl;
  a1 = 1;
  var e = w5(),
    t = r1(),
    r = S5(),
    n = Tb();
  function o(i) {
    return function (a) {
      a = n(a);
      var c = t(a) ? r(a) : void 0,
        u = c ? c[0] : a.charAt(0),
        s = c ? e(c, 1).join("") : a.slice(1);
      return u[i]() + s;
    };
  }
  return (Tl = o), Tl;
}
var Cl, c1;
function k5() {
  if (c1) return Cl;
  c1 = 1;
  var e = j5(),
    t = e("toUpperCase");
  return (Cl = t), Cl;
}
var P5 = k5();
const fa = be(P5);
function je(e) {
  return function () {
    return e;
  };
}
const u1 = Math.cos,
  pa = Math.sin,
  wt = Math.sqrt,
  da = Math.PI,
  ha = 2 * da,
  Dl = Math.PI,
  Il = 2 * Dl,
  Cr = 1e-6,
  E5 = Il - Cr;
function s1(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
}
function M5(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return s1;
  const r = 10 ** t;
  return function (n) {
    this._ += n[0];
    for (let o = 1, i = n.length; o < i; ++o)
      this._ += Math.round(arguments[o] * r) / r + n[o];
  };
}
class _5 {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? s1 : M5(t));
  }
  moveTo(t, r) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`;
  }
  quadraticCurveTo(t, r, n, o) {
    this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +o)}`;
  }
  bezierCurveTo(t, r, n, o, i, a) {
    this
      ._append`C${+t},${+r},${+n},${+o},${(this._x1 = +i)},${(this._y1 = +a)}`;
  }
  arcTo(t, r, n, o, i) {
    if (((t = +t), (r = +r), (n = +n), (o = +o), (i = +i), i < 0))
      throw new Error(`negative radius: ${i}`);
    let a = this._x1,
      c = this._y1,
      u = n - t,
      s = o - r,
      l = a - t,
      f = c - r,
      p = l * l + f * f;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`;
    else if (p > Cr)
      if (!(Math.abs(f * u - s * l) > Cr) || !i)
        this._append`L${(this._x1 = t)},${(this._y1 = r)}`;
      else {
        let h = n - a,
          v = o - c,
          d = u * u + s * s,
          y = h * h + v * v,
          m = Math.sqrt(d),
          b = Math.sqrt(p),
          x = i * Math.tan((Dl - Math.acos((d + p - y) / (2 * m * b))) / 2),
          g = x / b,
          O = x / m;
        Math.abs(g - 1) > Cr && this._append`L${t + g * l},${r + g * f}`,
          this
            ._append`A${i},${i},0,0,${+(f * h > l * v)},${(this._x1 = t + O * u)},${(this._y1 = r + O * s)}`;
      }
  }
  arc(t, r, n, o, i, a) {
    if (((t = +t), (r = +r), (n = +n), (a = !!a), n < 0))
      throw new Error(`negative radius: ${n}`);
    let c = n * Math.cos(o),
      u = n * Math.sin(o),
      s = t + c,
      l = r + u,
      f = 1 ^ a,
      p = a ? o - i : i - o;
    this._x1 === null
      ? this._append`M${s},${l}`
      : (Math.abs(this._x1 - s) > Cr || Math.abs(this._y1 - l) > Cr) &&
        this._append`L${s},${l}`,
      n &&
        (p < 0 && (p = (p % Il) + Il),
        p > E5
          ? this
              ._append`A${n},${n},0,1,${f},${t - c},${r - u}A${n},${n},0,1,${f},${(this._x1 = s)},${(this._y1 = l)}`
          : p > Cr &&
            this
              ._append`A${n},${n},0,${+(p >= Dl)},${f},${(this._x1 = t + n * Math.cos(i))},${(this._y1 = r + n * Math.sin(i))}`);
  }
  rect(t, r, n, o) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(n = +n)}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Nl(e) {
  let t = 3;
  return (
    (e.digits = function (r) {
      if (!arguments.length) return t;
      if (r == null) t = null;
      else {
        const n = Math.floor(r);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
        t = n;
      }
      return e;
    }),
    () => new _5(t)
  );
}
function Rl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function l1(e) {
  this._context = e;
}
l1.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function ya(e) {
  return new l1(e);
}
function f1(e) {
  return e[0];
}
function p1(e) {
  return e[1];
}
function d1(e, t) {
  var r = je(!0),
    n = null,
    o = ya,
    i = null,
    a = Nl(c);
  (e = typeof e == "function" ? e : e === void 0 ? f1 : je(e)),
    (t = typeof t == "function" ? t : t === void 0 ? p1 : je(t));
  function c(u) {
    var s,
      l = (u = Rl(u)).length,
      f,
      p = !1,
      h;
    for (n == null && (i = o((h = a()))), s = 0; s <= l; ++s)
      !(s < l && r((f = u[s]), s, u)) === p &&
        ((p = !p) ? i.lineStart() : i.lineEnd()),
        p && i.point(+e(f, s, u), +t(f, s, u));
    if (h) return (i = null), h + "" || null;
  }
  return (
    (c.x = function (u) {
      return arguments.length
        ? ((e = typeof u == "function" ? u : je(+u)), c)
        : e;
    }),
    (c.y = function (u) {
      return arguments.length
        ? ((t = typeof u == "function" ? u : je(+u)), c)
        : t;
    }),
    (c.defined = function (u) {
      return arguments.length
        ? ((r = typeof u == "function" ? u : je(!!u)), c)
        : r;
    }),
    (c.curve = function (u) {
      return arguments.length ? ((o = u), n != null && (i = o(n)), c) : o;
    }),
    (c.context = function (u) {
      return arguments.length
        ? (u == null ? (n = i = null) : (i = o((n = u))), c)
        : n;
    }),
    c
  );
}
function va(e, t, r) {
  var n = null,
    o = je(!0),
    i = null,
    a = ya,
    c = null,
    u = Nl(s);
  (e = typeof e == "function" ? e : e === void 0 ? f1 : je(+e)),
    (t = typeof t == "function" ? t : je(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? p1 : je(+r));
  function s(f) {
    var p,
      h,
      v,
      d = (f = Rl(f)).length,
      y,
      m = !1,
      b,
      x = new Array(d),
      g = new Array(d);
    for (i == null && (c = a((b = u()))), p = 0; p <= d; ++p) {
      if (!(p < d && o((y = f[p]), p, f)) === m)
        if ((m = !m)) (h = p), c.areaStart(), c.lineStart();
        else {
          for (c.lineEnd(), c.lineStart(), v = p - 1; v >= h; --v)
            c.point(x[v], g[v]);
          c.lineEnd(), c.areaEnd();
        }
      m &&
        ((x[p] = +e(y, p, f)),
        (g[p] = +t(y, p, f)),
        c.point(n ? +n(y, p, f) : x[p], r ? +r(y, p, f) : g[p]));
    }
    if (b) return (c = null), b + "" || null;
  }
  function l() {
    return d1().defined(o).curve(a).context(i);
  }
  return (
    (s.x = function (f) {
      return arguments.length
        ? ((e = typeof f == "function" ? f : je(+f)), (n = null), s)
        : e;
    }),
    (s.x0 = function (f) {
      return arguments.length
        ? ((e = typeof f == "function" ? f : je(+f)), s)
        : e;
    }),
    (s.x1 = function (f) {
      return arguments.length
        ? ((n = f == null ? null : typeof f == "function" ? f : je(+f)), s)
        : n;
    }),
    (s.y = function (f) {
      return arguments.length
        ? ((t = typeof f == "function" ? f : je(+f)), (r = null), s)
        : t;
    }),
    (s.y0 = function (f) {
      return arguments.length
        ? ((t = typeof f == "function" ? f : je(+f)), s)
        : t;
    }),
    (s.y1 = function (f) {
      return arguments.length
        ? ((r = f == null ? null : typeof f == "function" ? f : je(+f)), s)
        : r;
    }),
    (s.lineX0 = s.lineY0 =
      function () {
        return l().x(e).y(t);
      }),
    (s.lineY1 = function () {
      return l().x(e).y(r);
    }),
    (s.lineX1 = function () {
      return l().x(n).y(t);
    }),
    (s.defined = function (f) {
      return arguments.length
        ? ((o = typeof f == "function" ? f : je(!!f)), s)
        : o;
    }),
    (s.curve = function (f) {
      return arguments.length ? ((a = f), i != null && (c = a(i)), s) : a;
    }),
    (s.context = function (f) {
      return arguments.length
        ? (f == null ? (i = c = null) : (c = a((i = f))), s)
        : i;
    }),
    s
  );
}
class h1 {
  constructor(t, r) {
    (this._context = t), (this._x = r);
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  }
  point(t, r) {
    switch (((t = +t), (r = +r), this._point)) {
      case 0: {
        (this._point = 1),
          this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              r,
              t,
              r,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + r) / 2),
              t,
              this._y0,
              t,
              r,
            );
        break;
      }
    }
    (this._x0 = t), (this._y0 = r);
  }
}
function A5(e) {
  return new h1(e, !0);
}
function T5(e) {
  return new h1(e, !1);
}
const Ll = {
    draw(e, t) {
      const r = wt(t / da);
      e.moveTo(r, 0), e.arc(0, 0, r, 0, ha);
    },
  },
  C5 = {
    draw(e, t) {
      const r = wt(t / 5) / 2;
      e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath();
    },
  },
  y1 = wt(1 / 3),
  D5 = y1 * 2,
  I5 = {
    draw(e, t) {
      const r = wt(t / D5),
        n = r * y1;
      e.moveTo(0, -r),
        e.lineTo(n, 0),
        e.lineTo(0, r),
        e.lineTo(-n, 0),
        e.closePath();
    },
  },
  N5 = {
    draw(e, t) {
      const r = wt(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  },
  R5 = 0.8908130915292852,
  v1 = pa(da / 10) / pa((7 * da) / 10),
  L5 = pa(ha / 10) * v1,
  B5 = -u1(ha / 10) * v1,
  z5 = {
    draw(e, t) {
      const r = wt(t * R5),
        n = L5 * r,
        o = B5 * r;
      e.moveTo(0, -r), e.lineTo(n, o);
      for (let i = 1; i < 5; ++i) {
        const a = (ha * i) / 5,
          c = u1(a),
          u = pa(a);
        e.lineTo(u * r, -c * r), e.lineTo(c * n - u * o, u * n + c * o);
      }
      e.closePath();
    },
  },
  Bl = wt(3),
  F5 = {
    draw(e, t) {
      const r = -wt(t / (Bl * 3));
      e.moveTo(0, r * 2),
        e.lineTo(-Bl * r, -r),
        e.lineTo(Bl * r, -r),
        e.closePath();
    },
  },
  ot = -0.5,
  it = wt(3) / 2,
  zl = 1 / wt(12),
  U5 = (zl / 2 + 1) * 3,
  $5 = {
    draw(e, t) {
      const r = wt(t / U5),
        n = r / 2,
        o = r * zl,
        i = n,
        a = r * zl + r,
        c = -i,
        u = a;
      e.moveTo(n, o),
        e.lineTo(i, a),
        e.lineTo(c, u),
        e.lineTo(ot * n - it * o, it * n + ot * o),
        e.lineTo(ot * i - it * a, it * i + ot * a),
        e.lineTo(ot * c - it * u, it * c + ot * u),
        e.lineTo(ot * n + it * o, ot * o - it * n),
        e.lineTo(ot * i + it * a, ot * a - it * i),
        e.lineTo(ot * c + it * u, ot * u - it * c),
        e.closePath();
    },
  };
function H5(e, t) {
  let r = null,
    n = Nl(o);
  (e = typeof e == "function" ? e : je(e || Ll)),
    (t = typeof t == "function" ? t : je(t === void 0 ? 64 : +t));
  function o() {
    let i;
    if (
      (r || (r = i = n()),
      e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
      i)
    )
      return (r = null), i + "" || null;
  }
  return (
    (o.type = function (i) {
      return arguments.length
        ? ((e = typeof i == "function" ? i : je(i)), o)
        : e;
    }),
    (o.size = function (i) {
      return arguments.length
        ? ((t = typeof i == "function" ? i : je(+i)), o)
        : t;
    }),
    (o.context = function (i) {
      return arguments.length ? ((r = i ?? null), o) : r;
    }),
    o
  );
}
function ma() {}
function ga(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6,
  );
}
function m1(e) {
  this._context = e;
}
m1.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        ga(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          );
      default:
        ga(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function W5(e) {
  return new m1(e);
}
function g1(e) {
  this._context = e;
}
g1.prototype = {
  areaStart: ma,
  areaEnd: ma,
  lineStart: function () {
    (this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1), (this._x2 = e), (this._y2 = t);
        break;
      case 1:
        (this._point = 2), (this._x3 = e), (this._y3 = t);
        break;
      case 2:
        (this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          );
        break;
      default:
        ga(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function q5(e) {
  return new g1(e);
}
function b1(e) {
  this._context = e;
}
b1.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        ga(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function G5(e) {
  return new b1(e);
}
function w1(e) {
  this._context = e;
}
w1.prototype = {
  areaStart: ma,
  areaEnd: ma,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    (e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t));
  },
};
function V5(e) {
  return new w1(e);
}
function x1(e) {
  return e < 0 ? -1 : 1;
}
function O1(e, t, r) {
  var n = e._x1 - e._x0,
    o = t - e._x1,
    i = (e._y1 - e._y0) / (n || (o < 0 && -0)),
    a = (r - e._y1) / (o || (n < 0 && -0)),
    c = (i * o + a * n) / (n + o);
  return (
    (x1(i) + x1(a)) * Math.min(Math.abs(i), Math.abs(a), 0.5 * Math.abs(c)) || 0
  );
}
function S1(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function Fl(e, t, r) {
  var n = e._x0,
    o = e._y0,
    i = e._x1,
    a = e._y1,
    c = (i - n) / 3;
  e._context.bezierCurveTo(n + c, o + c * t, i - c, a - c * r, i, a);
}
function ba(e) {
  this._context = e;
}
ba.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Fl(this, this._t0, S1(this, this._t0));
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3), Fl(this, S1(this, (r = O1(this, e, t))), r);
          break;
        default:
          Fl(this, this._t0, (r = O1(this, e, t)));
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r);
    }
  },
};
function j1(e) {
  this._context = new k1(e);
}
(j1.prototype = Object.create(ba.prototype)).point = function (e, t) {
  ba.prototype.point.call(this, t, e);
};
function k1(e) {
  this._context = e;
}
k1.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, o, i) {
    this._context.bezierCurveTo(t, e, n, r, i, o);
  },
};
function X5(e) {
  return new ba(e);
}
function K5(e) {
  return new j1(e);
}
function P1(e) {
  this._context = e;
}
P1.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = []), (this._y = []);
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = E1(e), o = E1(t), i = 0, a = 1; a < r; ++i, ++a)
          this._context.bezierCurveTo(
            n[0][i],
            o[0][i],
            n[1][i],
            o[1][i],
            e[a],
            t[a],
          );
    (this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null);
  },
  point: function (e, t) {
    this._x.push(+e), this._y.push(+t);
  },
};
function E1(e) {
  var t,
    r = e.length - 1,
    n,
    o = new Array(r),
    i = new Array(r),
    a = new Array(r);
  for (o[0] = 0, i[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    (o[t] = 1), (i[t] = 4), (a[t] = 4 * e[t] + 2 * e[t + 1]);
  for (
    o[r - 1] = 2, i[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1;
    t < r;
    ++t
  )
    (n = o[t] / i[t - 1]), (i[t] -= n), (a[t] -= n * a[t - 1]);
  for (o[r - 1] = a[r - 1] / i[r - 1], t = r - 2; t >= 0; --t)
    o[t] = (a[t] - o[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + o[r - 1]) / 2, t = 0; t < r - 1; ++t)
    i[t] = 2 * e[t + 1] - o[t + 1];
  return [o, i];
}
function Y5(e) {
  return new P1(e);
}
function wa(e, t) {
  (this._context = e), (this._t = t);
}
wa.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = this._y = NaN), (this._point = 0);
  },
  lineEnd: function () {
    0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    (this._x = e), (this._y = t);
  },
};
function Z5(e) {
  return new wa(e, 0.5);
}
function J5(e) {
  return new wa(e, 0);
}
function Q5(e) {
  return new wa(e, 1);
}
function pn(e, t) {
  if ((a = e.length) > 1)
    for (var r = 1, n, o, i = e[t[0]], a, c = i.length; r < a; ++r)
      for (o = i, i = e[t[r]], n = 0; n < c; ++n)
        i[n][1] += i[n][0] = isNaN(o[n][1]) ? o[n][0] : o[n][1];
}
function Ul(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function e3(e, t) {
  return e[t];
}
function t3(e) {
  const t = [];
  return (t.key = e), t;
}
function r3() {
  var e = je([]),
    t = Ul,
    r = pn,
    n = e3;
  function o(i) {
    var a = Array.from(e.apply(this, arguments), t3),
      c,
      u = a.length,
      s = -1,
      l;
    for (const f of i)
      for (c = 0, ++s; c < u; ++c)
        (a[c][s] = [0, +n(f, a[c].key, s, i)]).data = f;
    for (c = 0, l = Rl(t(a)); c < u; ++c) a[l[c]].index = c;
    return r(a, l), a;
  }
  return (
    (o.keys = function (i) {
      return arguments.length
        ? ((e = typeof i == "function" ? i : je(Array.from(i))), o)
        : e;
    }),
    (o.value = function (i) {
      return arguments.length
        ? ((n = typeof i == "function" ? i : je(+i)), o)
        : n;
    }),
    (o.order = function (i) {
      return arguments.length
        ? ((t =
            i == null ? Ul : typeof i == "function" ? i : je(Array.from(i))),
          o)
        : t;
    }),
    (o.offset = function (i) {
      return arguments.length ? ((r = i ?? pn), o) : r;
    }),
    o
  );
}
function n3(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, o = 0, i = e[0].length, a; o < i; ++o) {
      for (a = r = 0; r < n; ++r) a += e[r][o][1] || 0;
      if (a) for (r = 0; r < n; ++r) e[r][o][1] /= a;
    }
    pn(e, t);
  }
}
function o3(e, t) {
  if ((o = e.length) > 0) {
    for (var r = 0, n = e[t[0]], o, i = n.length; r < i; ++r) {
      for (var a = 0, c = 0; a < o; ++a) c += e[a][r][1] || 0;
      n[r][1] += n[r][0] = -c / 2;
    }
    pn(e, t);
  }
}
function i3(e, t) {
  if (!(!((a = e.length) > 0) || !((i = (o = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, o, i, a; n < i; ++n) {
      for (var c = 0, u = 0, s = 0; c < a; ++c) {
        for (
          var l = e[t[c]],
            f = l[n][1] || 0,
            p = l[n - 1][1] || 0,
            h = (f - p) / 2,
            v = 0;
          v < c;
          ++v
        ) {
          var d = e[t[v]],
            y = d[n][1] || 0,
            m = d[n - 1][1] || 0;
          h += y - m;
        }
        (u += f), (s += h * f);
      }
      (o[n - 1][1] += o[n - 1][0] = r), u && (r -= s / u);
    }
    (o[n - 1][1] += o[n - 1][0] = r), pn(e, t);
  }
}
function ho(e) {
  "@babel/helpers - typeof";
  return (
    (ho =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ho(e)
  );
}
var a3 = ["type", "size", "sizeType"];
function $l() {
  return (
    ($l = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $l.apply(this, arguments)
  );
}
function M1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function _1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? M1(Object(r), !0).forEach(function (n) {
          c3(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : M1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function c3(e, t, r) {
  return (
    (t = u3(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function u3(e) {
  var t = s3(e, "string");
  return ho(t) == "symbol" ? t : t + "";
}
function s3(e, t) {
  if (ho(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ho(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function l3(e, t) {
  if (e == null) return {};
  var r = f3(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function f3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var A1 = {
    symbolCircle: Ll,
    symbolCross: C5,
    symbolDiamond: I5,
    symbolSquare: N5,
    symbolStar: z5,
    symbolTriangle: F5,
    symbolWye: $5,
  },
  p3 = Math.PI / 180,
  d3 = function (e) {
    var t = "symbol".concat(fa(e));
    return A1[t] || Ll;
  },
  h3 = function (e, t, r) {
    if (t === "area") return e;
    switch (r) {
      case "cross":
        return (5 * e * e) / 9;
      case "diamond":
        return (0.5 * e * e) / Math.sqrt(3);
      case "square":
        return e * e;
      case "star": {
        var n = 18 * p3;
        return (
          1.25 *
          e *
          e *
          (Math.tan(n) - Math.tan(n * 2) * Math.pow(Math.tan(n), 2))
        );
      }
      case "triangle":
        return (Math.sqrt(3) * e * e) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
      default:
        return (Math.PI * e * e) / 4;
    }
  },
  y3 = function (e, t) {
    A1["symbol".concat(fa(e))] = t;
  },
  Hl = function (e) {
    var t = e.type,
      r = t === void 0 ? "circle" : t,
      n = e.size,
      o = n === void 0 ? 64 : n,
      i = e.sizeType,
      a = i === void 0 ? "area" : i,
      c = l3(e, a3),
      u = _1(_1({}, c), {}, { type: r, size: o, sizeType: a }),
      s = function () {
        var v = d3(r),
          d = H5()
            .type(v)
            .size(h3(o, a, r));
        return d();
      },
      l = u.className,
      f = u.cx,
      p = u.cy,
      h = ve(u, !0);
    return f === +f && p === +p && o === +o
      ? I.createElement(
          "path",
          $l({}, h, {
            className: de("recharts-symbols", l),
            transform: "translate(".concat(f, ", ").concat(p, ")"),
            d: s(),
          }),
        )
      : null;
  };
Hl.registerSymbol = y3;
function dn(e) {
  "@babel/helpers - typeof";
  return (
    (dn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    dn(e)
  );
}
function Wl() {
  return (
    (Wl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Wl.apply(this, arguments)
  );
}
function T1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function v3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? T1(Object(r), !0).forEach(function (n) {
          yo(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : T1(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function m3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function g3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, D1(n.key), n);
  }
}
function b3(e, t, r) {
  return (
    t && g3(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function w3(e, t, r) {
  return (
    (t = xa(t)),
    x3(
      e,
      C1() ? Reflect.construct(t, r || [], xa(e).constructor) : t.apply(e, r),
    )
  );
}
function x3(e, t) {
  if (t && (dn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return O3(e);
}
function O3(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function C1() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (C1 = function () {
    return !!e;
  })();
}
function xa(e) {
  return (
    (xa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    xa(e)
  );
}
function S3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ql(e, t);
}
function ql(e, t) {
  return (
    (ql = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    ql(e, t)
  );
}
function yo(e, t, r) {
  return (
    (t = D1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function D1(e) {
  var t = j3(e, "string");
  return dn(t) == "symbol" ? t : t + "";
}
function j3(e, t) {
  if (dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var at = 32,
  Gl = (function (e) {
    function t() {
      return m3(this, t), w3(this, t, arguments);
    }
    return (
      S3(t, e),
      b3(t, [
        {
          key: "renderIcon",
          value: function (r) {
            var n = this.props.inactiveColor,
              o = at / 2,
              i = at / 6,
              a = at / 3,
              c = r.inactive ? n : r.color;
            if (r.type === "plainline")
              return I.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: c,
                strokeDasharray: r.payload.strokeDasharray,
                x1: 0,
                y1: o,
                x2: at,
                y2: o,
                className: "recharts-legend-icon",
              });
            if (r.type === "line")
              return I.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: c,
                d: "M0,"
                  .concat(o, "h")
                  .concat(
                    a,
                    `
            A`,
                  )
                  .concat(i, ",")
                  .concat(i, ",0,1,1,")
                  .concat(2 * a, ",")
                  .concat(
                    o,
                    `
            H`,
                  )
                  .concat(at, "M")
                  .concat(2 * a, ",")
                  .concat(
                    o,
                    `
            A`,
                  )
                  .concat(i, ",")
                  .concat(i, ",0,1,1,")
                  .concat(a, ",")
                  .concat(o),
                className: "recharts-legend-icon",
              });
            if (r.type === "rect")
              return I.createElement("path", {
                stroke: "none",
                fill: c,
                d: "M0,"
                  .concat(at / 8, "h")
                  .concat(at, "v")
                  .concat((at * 3) / 4, "h")
                  .concat(-at, "z"),
                className: "recharts-legend-icon",
              });
            if (I.isValidElement(r.legendIcon)) {
              var u = v3({}, r);
              return delete u.legendIcon, I.cloneElement(r.legendIcon, u);
            }
            return I.createElement(Hl, {
              fill: c,
              cx: o,
              cy: o,
              size: at,
              sizeType: "diameter",
              type: r.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var r = this,
              n = this.props,
              o = n.payload,
              i = n.iconSize,
              a = n.layout,
              c = n.formatter,
              u = n.inactiveColor,
              s = { x: 0, y: 0, width: at, height: at },
              l = {
                display: a === "horizontal" ? "inline-block" : "block",
                marginRight: 10,
              },
              f = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4,
              };
            return o.map(function (p, h) {
              var v = p.formatter || c,
                d = de(
                  yo(
                    yo(
                      { "recharts-legend-item": !0 },
                      "legend-item-".concat(h),
                      !0,
                    ),
                    "inactive",
                    p.inactive,
                  ),
                );
              if (p.type === "none") return null;
              var y = fe(p.value) ? null : p.value;
              Wt(
                !fe(p.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
              );
              var m = p.inactive ? u : p.color;
              return I.createElement(
                "li",
                Wl(
                  { className: d, style: l, key: "legend-item-".concat(h) },
                  la(r.props, p, h),
                ),
                I.createElement(
                  Sl,
                  { width: i, height: i, viewBox: s, style: f },
                  r.renderIcon(p),
                ),
                I.createElement(
                  "span",
                  {
                    className: "recharts-legend-item-text",
                    style: { color: m },
                  },
                  v ? v(y, p, h) : y,
                ),
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var r = this.props,
              n = r.payload,
              o = r.layout,
              i = r.align;
            if (!n || !n.length) return null;
            var a = {
              padding: 0,
              margin: 0,
              textAlign: o === "horizontal" ? i : "left",
            };
            return I.createElement(
              "ul",
              { className: "recharts-default-legend", style: a },
              this.renderItems(),
            );
          },
        },
      ])
    );
  })(w.PureComponent);
yo(Gl, "displayName", "Legend"),
  yo(Gl, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    inactiveColor: "#ccc",
  });
var Vl, I1;
function k3() {
  if (I1) return Vl;
  I1 = 1;
  var e = ia();
  function t() {
    (this.__data__ = new e()), (this.size = 0);
  }
  return (Vl = t), Vl;
}
var Xl, N1;
function P3() {
  if (N1) return Xl;
  N1 = 1;
  function e(t) {
    var r = this.__data__,
      n = r.delete(t);
    return (this.size = r.size), n;
  }
  return (Xl = e), Xl;
}
var Kl, R1;
function E3() {
  if (R1) return Kl;
  R1 = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return (Kl = e), Kl;
}
var Yl, L1;
function M3() {
  if (L1) return Yl;
  L1 = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return (Yl = e), Yl;
}
var Zl, B1;
function _3() {
  if (B1) return Zl;
  B1 = 1;
  var e = ia(),
    t = Hs(),
    r = Js(),
    n = 200;
  function o(i, a) {
    var c = this.__data__;
    if (c instanceof e) {
      var u = c.__data__;
      if (!t || u.length < n - 1)
        return u.push([i, a]), (this.size = ++c.size), this;
      c = this.__data__ = new r(u);
    }
    return c.set(i, a), (this.size = c.size), this;
  }
  return (Zl = o), Zl;
}
var Jl, z1;
function F1() {
  if (z1) return Jl;
  z1 = 1;
  var e = ia(),
    t = k3(),
    r = P3(),
    n = E3(),
    o = M3(),
    i = _3();
  function a(c) {
    var u = (this.__data__ = new e(c));
    this.size = u.size;
  }
  return (
    (a.prototype.clear = t),
    (a.prototype.delete = r),
    (a.prototype.get = n),
    (a.prototype.has = o),
    (a.prototype.set = i),
    (Jl = a),
    Jl
  );
}
var Ql, U1;
function A3() {
  if (U1) return Ql;
  U1 = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return (Ql = t), Ql;
}
var ef, $1;
function T3() {
  if ($1) return ef;
  $1 = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return (ef = e), ef;
}
var tf, H1;
function W1() {
  if (H1) return tf;
  H1 = 1;
  var e = Js(),
    t = A3(),
    r = T3();
  function n(o) {
    var i = -1,
      a = o == null ? 0 : o.length;
    for (this.__data__ = new e(); ++i < a; ) this.add(o[i]);
  }
  return (
    (n.prototype.add = n.prototype.push = t),
    (n.prototype.has = r),
    (tf = n),
    tf
  );
}
var rf, q1;
function G1() {
  if (q1) return rf;
  q1 = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (r(t[n], n, t)) return !0;
    return !1;
  }
  return (rf = e), rf;
}
var nf, V1;
function X1() {
  if (V1) return nf;
  V1 = 1;
  function e(t, r) {
    return t.has(r);
  }
  return (nf = e), nf;
}
var of, K1;
function Y1() {
  if (K1) return of;
  K1 = 1;
  var e = W1(),
    t = G1(),
    r = X1(),
    n = 1,
    o = 2;
  function i(a, c, u, s, l, f) {
    var p = u & n,
      h = a.length,
      v = c.length;
    if (h != v && !(p && v > h)) return !1;
    var d = f.get(a),
      y = f.get(c);
    if (d && y) return d == c && y == a;
    var m = -1,
      b = !0,
      x = u & o ? new e() : void 0;
    for (f.set(a, c), f.set(c, a); ++m < h; ) {
      var g = a[m],
        O = c[m];
      if (s) var S = p ? s(O, g, m, c, a, f) : s(g, O, m, a, c, f);
      if (S !== void 0) {
        if (S) continue;
        b = !1;
        break;
      }
      if (x) {
        if (
          !t(c, function (j, k) {
            if (!r(x, k) && (g === j || l(g, j, u, s, f))) return x.push(k);
          })
        ) {
          b = !1;
          break;
        }
      } else if (!(g === O || l(g, O, u, s, f))) {
        b = !1;
        break;
      }
    }
    return f.delete(a), f.delete(c), b;
  }
  return (of = i), of;
}
var af, Z1;
function C3() {
  if (Z1) return af;
  Z1 = 1;
  var e = Mt(),
    t = e.Uint8Array;
  return (af = t), af;
}
var cf, J1;
function D3() {
  if (J1) return cf;
  J1 = 1;
  function e(t) {
    var r = -1,
      n = Array(t.size);
    return (
      t.forEach(function (o, i) {
        n[++r] = [i, o];
      }),
      n
    );
  }
  return (cf = e), cf;
}
var uf, Q1;
function sf() {
  if (Q1) return uf;
  Q1 = 1;
  function e(t) {
    var r = -1,
      n = Array(t.size);
    return (
      t.forEach(function (o) {
        n[++r] = o;
      }),
      n
    );
  }
  return (uf = e), uf;
}
var lf, ew;
function I3() {
  if (ew) return lf;
  ew = 1;
  var e = fo(),
    t = C3(),
    r = Ns(),
    n = Y1(),
    o = D3(),
    i = sf(),
    a = 1,
    c = 2,
    u = "[object Boolean]",
    s = "[object Date]",
    l = "[object Error]",
    f = "[object Map]",
    p = "[object Number]",
    h = "[object RegExp]",
    v = "[object Set]",
    d = "[object String]",
    y = "[object Symbol]",
    m = "[object ArrayBuffer]",
    b = "[object DataView]",
    x = e ? e.prototype : void 0,
    g = x ? x.valueOf : void 0;
  function O(S, j, k, A, D, M, _) {
    switch (k) {
      case b:
        if (S.byteLength != j.byteLength || S.byteOffset != j.byteOffset)
          return !1;
        (S = S.buffer), (j = j.buffer);
      case m:
        return !(S.byteLength != j.byteLength || !M(new t(S), new t(j)));
      case u:
      case s:
      case p:
        return r(+S, +j);
      case l:
        return S.name == j.name && S.message == j.message;
      case h:
      case d:
        return S == j + "";
      case f:
        var C = o;
      case v:
        var T = A & a;
        if ((C || (C = i), S.size != j.size && !T)) return !1;
        var R = _.get(S);
        if (R) return R == j;
        (A |= c), _.set(S, j);
        var N = n(C(S), C(j), A, D, M, _);
        return _.delete(S), N;
      case y:
        if (g) return g.call(S) == g.call(j);
    }
    return !1;
  }
  return (lf = O), lf;
}
var ff, tw;
function rw() {
  if (tw) return ff;
  tw = 1;
  function e(t, r) {
    for (var n = -1, o = r.length, i = t.length; ++n < o; ) t[i + n] = r[n];
    return t;
  }
  return (ff = e), ff;
}
var pf, nw;
function N3() {
  if (nw) return pf;
  nw = 1;
  var e = rw(),
    t = Xe();
  function r(n, o, i) {
    var a = o(n);
    return t(n) ? a : e(a, i(n));
  }
  return (pf = r), pf;
}
var df, ow;
function R3() {
  if (ow) return df;
  ow = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, i = 0, a = []; ++n < o; ) {
      var c = t[n];
      r(c, n, t) && (a[i++] = c);
    }
    return a;
  }
  return (df = e), df;
}
var hf, iw;
function L3() {
  if (iw) return hf;
  iw = 1;
  function e() {
    return [];
  }
  return (hf = e), hf;
}
var yf, aw;
function B3() {
  if (aw) return yf;
  aw = 1;
  var e = R3(),
    t = L3(),
    r = Object.prototype,
    n = r.propertyIsEnumerable,
    o = Object.getOwnPropertySymbols,
    i = o
      ? function (a) {
          return a == null
            ? []
            : ((a = Object(a)),
              e(o(a), function (c) {
                return n.call(a, c);
              }));
        }
      : t;
  return (yf = i), yf;
}
var vf, cw;
function z3() {
  if (cw) return vf;
  cw = 1;
  function e(t, r) {
    for (var n = -1, o = Array(t); ++n < t; ) o[n] = r(n);
    return o;
  }
  return (vf = e), vf;
}
var mf, uw;
function F3() {
  if (uw) return mf;
  uw = 1;
  var e = Ut(),
    t = $t(),
    r = "[object Arguments]";
  function n(o) {
    return t(o) && e(o) == r;
  }
  return (mf = n), mf;
}
var gf, sw;
function bf() {
  if (sw) return gf;
  sw = 1;
  var e = F3(),
    t = $t(),
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = r.propertyIsEnumerable,
    i = e(
      (function () {
        return arguments;
      })(),
    )
      ? e
      : function (a) {
          return t(a) && n.call(a, "callee") && !o.call(a, "callee");
        };
  return (gf = i), gf;
}
var Oa = { exports: {} },
  wf,
  lw;
function U3() {
  if (lw) return wf;
  lw = 1;
  function e() {
    return !1;
  }
  return (wf = e), wf;
}
Oa.exports;
var fw;
function pw() {
  return (
    fw ||
      ((fw = 1),
      (function (e, t) {
        var r = Mt(),
          n = U3(),
          o = t && !t.nodeType && t,
          i = o && !0 && e && !e.nodeType && e,
          a = i && i.exports === o,
          c = a ? r.Buffer : void 0,
          u = c ? c.isBuffer : void 0,
          s = u || n;
        e.exports = s;
      })(Oa, Oa.exports)),
    Oa.exports
  );
}
var xf, dw;
function Of() {
  if (dw) return xf;
  dw = 1;
  var e = 9007199254740991,
    t = /^(?:0|[1-9]\d*)$/;
  function r(n, o) {
    var i = typeof n;
    return (
      (o = o ?? e),
      !!o &&
        (i == "number" || (i != "symbol" && t.test(n))) &&
        n > -1 &&
        n % 1 == 0 &&
        n < o
    );
  }
  return (xf = r), xf;
}
var Sf, hw;
function jf() {
  if (hw) return Sf;
  hw = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return (Sf = t), Sf;
}
var kf, yw;
function $3() {
  if (yw) return kf;
  yw = 1;
  var e = Ut(),
    t = jf(),
    r = $t(),
    n = "[object Arguments]",
    o = "[object Array]",
    i = "[object Boolean]",
    a = "[object Date]",
    c = "[object Error]",
    u = "[object Function]",
    s = "[object Map]",
    l = "[object Number]",
    f = "[object Object]",
    p = "[object RegExp]",
    h = "[object Set]",
    v = "[object String]",
    d = "[object WeakMap]",
    y = "[object ArrayBuffer]",
    m = "[object DataView]",
    b = "[object Float32Array]",
    x = "[object Float64Array]",
    g = "[object Int8Array]",
    O = "[object Int16Array]",
    S = "[object Int32Array]",
    j = "[object Uint8Array]",
    k = "[object Uint8ClampedArray]",
    A = "[object Uint16Array]",
    D = "[object Uint32Array]",
    M = {};
  (M[b] = M[x] = M[g] = M[O] = M[S] = M[j] = M[k] = M[A] = M[D] = !0),
    (M[n] =
      M[o] =
      M[y] =
      M[i] =
      M[m] =
      M[a] =
      M[c] =
      M[u] =
      M[s] =
      M[l] =
      M[f] =
      M[p] =
      M[h] =
      M[v] =
      M[d] =
        !1);
  function _(C) {
    return r(C) && t(C.length) && !!M[e(C)];
  }
  return (kf = _), kf;
}
var Pf, vw;
function mw() {
  if (vw) return Pf;
  vw = 1;
  function e(t) {
    return function (r) {
      return t(r);
    };
  }
  return (Pf = e), Pf;
}
var Sa = { exports: {} };
Sa.exports;
var gw;
function H3() {
  return (
    gw ||
      ((gw = 1),
      (function (e, t) {
        var r = R0(),
          n = t && !t.nodeType && t,
          o = n && !0 && e && !e.nodeType && e,
          i = o && o.exports === n,
          a = i && r.process,
          c = (function () {
            try {
              var u = o && o.require && o.require("util").types;
              return u || (a && a.binding && a.binding("util"));
            } catch {}
          })();
        e.exports = c;
      })(Sa, Sa.exports)),
    Sa.exports
  );
}
var Ef, bw;
function ww() {
  if (bw) return Ef;
  bw = 1;
  var e = $3(),
    t = mw(),
    r = H3(),
    n = r && r.isTypedArray,
    o = n ? t(n) : e;
  return (Ef = o), Ef;
}
var Mf, xw;
function W3() {
  if (xw) return Mf;
  xw = 1;
  var e = z3(),
    t = bf(),
    r = Xe(),
    n = pw(),
    o = Of(),
    i = ww(),
    a = Object.prototype,
    c = a.hasOwnProperty;
  function u(s, l) {
    var f = r(s),
      p = !f && t(s),
      h = !f && !p && n(s),
      v = !f && !p && !h && i(s),
      d = f || p || h || v,
      y = d ? e(s.length, String) : [],
      m = y.length;
    for (var b in s)
      (l || c.call(s, b)) &&
        !(
          d &&
          (b == "length" ||
            (h && (b == "offset" || b == "parent")) ||
            (v && (b == "buffer" || b == "byteLength" || b == "byteOffset")) ||
            o(b, m))
        ) &&
        y.push(b);
    return y;
  }
  return (Mf = u), Mf;
}
var _f, Ow;
function q3() {
  if (Ow) return _f;
  Ow = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor,
      o = (typeof n == "function" && n.prototype) || e;
    return r === o;
  }
  return (_f = t), _f;
}
var Af, Sw;
function jw() {
  if (Sw) return Af;
  Sw = 1;
  function e(t, r) {
    return function (n) {
      return t(r(n));
    };
  }
  return (Af = e), Af;
}
var Tf, kw;
function G3() {
  if (kw) return Tf;
  kw = 1;
  var e = jw(),
    t = e(Object.keys, Object);
  return (Tf = t), Tf;
}
var Cf, Pw;
function V3() {
  if (Pw) return Cf;
  Pw = 1;
  var e = q3(),
    t = G3(),
    r = Object.prototype,
    n = r.hasOwnProperty;
  function o(i) {
    if (!e(i)) return t(i);
    var a = [];
    for (var c in Object(i)) n.call(i, c) && c != "constructor" && a.push(c);
    return a;
  }
  return (Cf = o), Cf;
}
var Df, Ew;
function vo() {
  if (Ew) return Df;
  Ew = 1;
  var e = bs(),
    t = jf();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return (Df = r), Df;
}
var If, Mw;
function ja() {
  if (Mw) return If;
  Mw = 1;
  var e = W3(),
    t = V3(),
    r = vo();
  function n(o) {
    return r(o) ? e(o) : t(o);
  }
  return (If = n), If;
}
var Nf, _w;
function X3() {
  if (_w) return Nf;
  _w = 1;
  var e = N3(),
    t = B3(),
    r = ja();
  function n(o) {
    return e(o, r, t);
  }
  return (Nf = n), Nf;
}
var Rf, Aw;
function K3() {
  if (Aw) return Rf;
  Aw = 1;
  var e = X3(),
    t = 1,
    r = Object.prototype,
    n = r.hasOwnProperty;
  function o(i, a, c, u, s, l) {
    var f = c & t,
      p = e(i),
      h = p.length,
      v = e(a),
      d = v.length;
    if (h != d && !f) return !1;
    for (var y = h; y--; ) {
      var m = p[y];
      if (!(f ? m in a : n.call(a, m))) return !1;
    }
    var b = l.get(i),
      x = l.get(a);
    if (b && x) return b == a && x == i;
    var g = !0;
    l.set(i, a), l.set(a, i);
    for (var O = f; ++y < h; ) {
      m = p[y];
      var S = i[m],
        j = a[m];
      if (u) var k = f ? u(j, S, m, a, i, l) : u(S, j, m, i, a, l);
      if (!(k === void 0 ? S === j || s(S, j, c, u, l) : k)) {
        g = !1;
        break;
      }
      O || (O = m == "constructor");
    }
    if (g && !O) {
      var A = i.constructor,
        D = a.constructor;
      A != D &&
        "constructor" in i &&
        "constructor" in a &&
        !(
          typeof A == "function" &&
          A instanceof A &&
          typeof D == "function" &&
          D instanceof D
        ) &&
        (g = !1);
    }
    return l.delete(i), l.delete(a), g;
  }
  return (Rf = o), Rf;
}
var Lf, Tw;
function Y3() {
  if (Tw) return Lf;
  Tw = 1;
  var e = Mr(),
    t = Mt(),
    r = e(t, "DataView");
  return (Lf = r), Lf;
}
var Bf, Cw;
function Z3() {
  if (Cw) return Bf;
  Cw = 1;
  var e = Mr(),
    t = Mt(),
    r = e(t, "Promise");
  return (Bf = r), Bf;
}
var zf, Dw;
function Iw() {
  if (Dw) return zf;
  Dw = 1;
  var e = Mr(),
    t = Mt(),
    r = e(t, "Set");
  return (zf = r), zf;
}
var Ff, Nw;
function J3() {
  if (Nw) return Ff;
  Nw = 1;
  var e = Mr(),
    t = Mt(),
    r = e(t, "WeakMap");
  return (Ff = r), Ff;
}
var Uf, Rw;
function Q3() {
  if (Rw) return Uf;
  Rw = 1;
  var e = Y3(),
    t = Hs(),
    r = Z3(),
    n = Iw(),
    o = J3(),
    i = Ut(),
    a = Y0(),
    c = "[object Map]",
    u = "[object Object]",
    s = "[object Promise]",
    l = "[object Set]",
    f = "[object WeakMap]",
    p = "[object DataView]",
    h = a(e),
    v = a(t),
    d = a(r),
    y = a(n),
    m = a(o),
    b = i;
  return (
    ((e && b(new e(new ArrayBuffer(1))) != p) ||
      (t && b(new t()) != c) ||
      (r && b(r.resolve()) != s) ||
      (n && b(new n()) != l) ||
      (o && b(new o()) != f)) &&
      (b = function (x) {
        var g = i(x),
          O = g == u ? x.constructor : void 0,
          S = O ? a(O) : "";
        if (S)
          switch (S) {
            case h:
              return p;
            case v:
              return c;
            case d:
              return s;
            case y:
              return l;
            case m:
              return f;
          }
        return g;
      }),
    (Uf = b),
    Uf
  );
}
var $f, Lw;
function e4() {
  if (Lw) return $f;
  Lw = 1;
  var e = F1(),
    t = Y1(),
    r = I3(),
    n = K3(),
    o = Q3(),
    i = Xe(),
    a = pw(),
    c = ww(),
    u = 1,
    s = "[object Arguments]",
    l = "[object Array]",
    f = "[object Object]",
    p = Object.prototype,
    h = p.hasOwnProperty;
  function v(d, y, m, b, x, g) {
    var O = i(d),
      S = i(y),
      j = O ? l : o(d),
      k = S ? l : o(y);
    (j = j == s ? f : j), (k = k == s ? f : k);
    var A = j == f,
      D = k == f,
      M = j == k;
    if (M && a(d)) {
      if (!a(y)) return !1;
      (O = !0), (A = !1);
    }
    if (M && !A)
      return (
        g || (g = new e()),
        O || c(d) ? t(d, y, m, b, x, g) : r(d, y, j, m, b, x, g)
      );
    if (!(m & u)) {
      var _ = A && h.call(d, "__wrapped__"),
        C = D && h.call(y, "__wrapped__");
      if (_ || C) {
        var T = _ ? d.value() : d,
          R = C ? y.value() : y;
        return g || (g = new e()), x(T, R, m, b, g);
      }
    }
    return M ? (g || (g = new e()), n(d, y, m, b, x, g)) : !1;
  }
  return ($f = v), $f;
}
var Hf, Bw;
function Wf() {
  if (Bw) return Hf;
  Bw = 1;
  var e = e4(),
    t = $t();
  function r(n, o, i, a, c) {
    return n === o
      ? !0
      : n == null || o == null || (!t(n) && !t(o))
        ? n !== n && o !== o
        : e(n, o, i, a, r, c);
  }
  return (Hf = r), Hf;
}
var qf, zw;
function t4() {
  if (zw) return qf;
  zw = 1;
  var e = F1(),
    t = Wf(),
    r = 1,
    n = 2;
  function o(i, a, c, u) {
    var s = c.length,
      l = s,
      f = !u;
    if (i == null) return !l;
    for (i = Object(i); s--; ) {
      var p = c[s];
      if (f && p[2] ? p[1] !== i[p[0]] : !(p[0] in i)) return !1;
    }
    for (; ++s < l; ) {
      p = c[s];
      var h = p[0],
        v = i[h],
        d = p[1];
      if (f && p[2]) {
        if (v === void 0 && !(h in i)) return !1;
      } else {
        var y = new e();
        if (u) var m = u(v, d, h, i, a, y);
        if (!(m === void 0 ? t(d, v, r | n, u, y) : m)) return !1;
      }
    }
    return !0;
  }
  return (qf = o), qf;
}
var Gf, Fw;
function Uw() {
  if (Fw) return Gf;
  Fw = 1;
  var e = ur();
  function t(r) {
    return r === r && !e(r);
  }
  return (Gf = t), Gf;
}
var Vf, $w;
function r4() {
  if ($w) return Vf;
  $w = 1;
  var e = Uw(),
    t = ja();
  function r(n) {
    for (var o = t(n), i = o.length; i--; ) {
      var a = o[i],
        c = n[a];
      o[i] = [a, c, e(c)];
    }
    return o;
  }
  return (Vf = r), Vf;
}
var Xf, Hw;
function Ww() {
  if (Hw) return Xf;
  Hw = 1;
  function e(t, r) {
    return function (n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return (Xf = e), Xf;
}
var Kf, qw;
function n4() {
  if (qw) return Kf;
  qw = 1;
  var e = t4(),
    t = r4(),
    r = Ww();
  function n(o) {
    var i = t(o);
    return i.length == 1 && i[0][2]
      ? r(i[0][0], i[0][1])
      : function (a) {
          return a === o || e(a, o, i);
        };
  }
  return (Kf = n), Kf;
}
var Yf, Gw;
function o4() {
  if (Gw) return Yf;
  Gw = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return (Yf = e), Yf;
}
var Zf, Vw;
function i4() {
  if (Vw) return Zf;
  Vw = 1;
  var e = Db(),
    t = bf(),
    r = Xe(),
    n = Of(),
    o = jf(),
    i = ca();
  function a(c, u, s) {
    u = e(u, c);
    for (var l = -1, f = u.length, p = !1; ++l < f; ) {
      var h = i(u[l]);
      if (!(p = c != null && s(c, h))) break;
      c = c[h];
    }
    return p || ++l != f
      ? p
      : ((f = c == null ? 0 : c.length),
        !!f && o(f) && n(h, f) && (r(c) || t(c)));
  }
  return (Zf = a), Zf;
}
var Jf, Xw;
function a4() {
  if (Xw) return Jf;
  Xw = 1;
  var e = o4(),
    t = i4();
  function r(n, o) {
    return n != null && t(n, o, e);
  }
  return (Jf = r), Jf;
}
var Qf, Kw;
function c4() {
  if (Kw) return Qf;
  Kw = 1;
  var e = Wf(),
    t = Lb(),
    r = a4(),
    n = vs(),
    o = Uw(),
    i = Ww(),
    a = ca(),
    c = 1,
    u = 2;
  function s(l, f) {
    return n(l) && o(f)
      ? i(a(l), f)
      : function (p) {
          var h = t(p, l);
          return h === void 0 && h === f ? r(p, l) : e(f, h, c | u);
        };
  }
  return (Qf = s), Qf;
}
var ep, Yw;
function hn() {
  if (Yw) return ep;
  Yw = 1;
  function e(t) {
    return t;
  }
  return (ep = e), ep;
}
var tp, Zw;
function u4() {
  if (Zw) return tp;
  Zw = 1;
  function e(t) {
    return function (r) {
      return r == null ? void 0 : r[t];
    };
  }
  return (tp = e), tp;
}
var rp, Jw;
function s4() {
  if (Jw) return rp;
  Jw = 1;
  var e = sl();
  function t(r) {
    return function (n) {
      return e(n, r);
    };
  }
  return (rp = t), rp;
}
var np, Qw;
function l4() {
  if (Qw) return np;
  Qw = 1;
  var e = u4(),
    t = s4(),
    r = vs(),
    n = ca();
  function o(i) {
    return r(i) ? e(n(i)) : t(i);
  }
  return (np = o), np;
}
var op, ex;
function lr() {
  if (ex) return op;
  ex = 1;
  var e = n4(),
    t = c4(),
    r = hn(),
    n = Xe(),
    o = l4();
  function i(a) {
    return typeof a == "function"
      ? a
      : a == null
        ? r
        : typeof a == "object"
          ? n(a)
            ? t(a[0], a[1])
            : e(a)
          : o(a);
  }
  return (op = i), op;
}
var ip, tx;
function rx() {
  if (tx) return ip;
  tx = 1;
  function e(t, r, n, o) {
    for (var i = t.length, a = n + (o ? 1 : -1); o ? a-- : ++a < i; )
      if (r(t[a], a, t)) return a;
    return -1;
  }
  return (ip = e), ip;
}
var ap, nx;
function f4() {
  if (nx) return ap;
  nx = 1;
  function e(t) {
    return t !== t;
  }
  return (ap = e), ap;
}
var cp, ox;
function p4() {
  if (ox) return cp;
  ox = 1;
  function e(t, r, n) {
    for (var o = n - 1, i = t.length; ++o < i; ) if (t[o] === r) return o;
    return -1;
  }
  return (cp = e), cp;
}
var up, ix;
function d4() {
  if (ix) return up;
  ix = 1;
  var e = rx(),
    t = f4(),
    r = p4();
  function n(o, i, a) {
    return i === i ? r(o, i, a) : e(o, t, a);
  }
  return (up = n), up;
}
var sp, ax;
function h4() {
  if (ax) return sp;
  ax = 1;
  var e = d4();
  function t(r, n) {
    var o = r == null ? 0 : r.length;
    return !!o && e(r, n, 0) > -1;
  }
  return (sp = t), sp;
}
var lp, cx;
function y4() {
  if (cx) return lp;
  cx = 1;
  function e(t, r, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i; )
      if (n(r, t[o])) return !0;
    return !1;
  }
  return (lp = e), lp;
}
var fp, ux;
function v4() {
  if (ux) return fp;
  ux = 1;
  function e() {}
  return (fp = e), fp;
}
var pp, sx;
function m4() {
  if (sx) return pp;
  sx = 1;
  var e = Iw(),
    t = v4(),
    r = sf(),
    n = 1 / 0,
    o =
      e && 1 / r(new e([, -0]))[1] == n
        ? function (i) {
            return new e(i);
          }
        : t;
  return (pp = o), pp;
}
var dp, lx;
function g4() {
  if (lx) return dp;
  lx = 1;
  var e = W1(),
    t = h4(),
    r = y4(),
    n = X1(),
    o = m4(),
    i = sf(),
    a = 200;
  function c(u, s, l) {
    var f = -1,
      p = t,
      h = u.length,
      v = !0,
      d = [],
      y = d;
    if (l) (v = !1), (p = r);
    else if (h >= a) {
      var m = s ? null : o(u);
      if (m) return i(m);
      (v = !1), (p = n), (y = new e());
    } else y = s ? [] : d;
    e: for (; ++f < h; ) {
      var b = u[f],
        x = s ? s(b) : b;
      if (((b = l || b !== 0 ? b : 0), v && x === x)) {
        for (var g = y.length; g--; ) if (y[g] === x) continue e;
        s && y.push(x), d.push(b);
      } else p(y, x, l) || (y !== d && y.push(x), d.push(b));
    }
    return d;
  }
  return (dp = c), dp;
}
var hp, fx;
function b4() {
  if (fx) return hp;
  fx = 1;
  var e = lr(),
    t = g4();
  function r(n, o) {
    return n && n.length ? t(n, e(o, 2)) : [];
  }
  return (hp = r), hp;
}
var w4 = b4();
const px = be(w4);
function dx(e, t, r) {
  return t === !0 ? px(e, r) : fe(t) ? px(e, t) : e;
}
function yn(e) {
  "@babel/helpers - typeof";
  return (
    (yn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    yn(e)
  );
}
var x4 = ["ref"];
function hx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hx(Object(r), !0).forEach(function (n) {
          Pa(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hx(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function O4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yx(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, mx(n.key), n);
  }
}
function S4(e, t, r) {
  return (
    t && yx(e.prototype, t),
    r && yx(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function j4(e, t, r) {
  return (
    (t = ka(t)),
    k4(
      e,
      vx() ? Reflect.construct(t, r || [], ka(e).constructor) : t.apply(e, r),
    )
  );
}
function k4(e, t) {
  if (t && (yn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return P4(e);
}
function P4(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function vx() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (vx = function () {
    return !!e;
  })();
}
function ka(e) {
  return (
    (ka = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    ka(e)
  );
}
function E4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && yp(e, t);
}
function yp(e, t) {
  return (
    (yp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    yp(e, t)
  );
}
function Pa(e, t, r) {
  return (
    (t = mx(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function mx(e) {
  var t = M4(e, "string");
  return yn(t) == "symbol" ? t : t + "";
}
function M4(e, t) {
  if (yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function _4(e, t) {
  if (e == null) return {};
  var r = A4(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function A4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function T4(e) {
  return e.value;
}
function C4(e, t) {
  if (I.isValidElement(e)) return I.cloneElement(e, t);
  if (typeof e == "function") return I.createElement(e, t);
  t.ref;
  var r = _4(t, x4);
  return I.createElement(Gl, r);
}
var gx = 1,
  Dr = (function (e) {
    function t() {
      var r;
      O4(this, t);
      for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
        o[i] = arguments[i];
      return (
        (r = j4(this, t, [].concat(o))),
        Pa(r, "lastBoundingBox", { width: -1, height: -1 }),
        r
      );
    }
    return (
      E4(t, e),
      S4(
        t,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var r = this.wrapperNode.getBoundingClientRect();
                return (
                  (r.height = this.wrapperNode.offsetHeight),
                  (r.width = this.wrapperNode.offsetWidth),
                  r
                );
              }
              return null;
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var r = this.props.onBBoxUpdate,
                n = this.getBBox();
              n
                ? (Math.abs(n.width - this.lastBoundingBox.width) > gx ||
                    Math.abs(n.height - this.lastBoundingBox.height) > gx) &&
                  ((this.lastBoundingBox.width = n.width),
                  (this.lastBoundingBox.height = n.height),
                  r && r(n))
                : (this.lastBoundingBox.width !== -1 ||
                    this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  r && r(null));
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              return this.lastBoundingBox.width >= 0 &&
                this.lastBoundingBox.height >= 0
                ? qt({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: "getDefaultPosition",
            value: function (r) {
              var n = this.props,
                o = n.layout,
                i = n.align,
                a = n.verticalAlign,
                c = n.margin,
                u = n.chartWidth,
                s = n.chartHeight,
                l,
                f;
              if (
                !r ||
                ((r.left === void 0 || r.left === null) &&
                  (r.right === void 0 || r.right === null))
              )
                if (i === "center" && o === "vertical") {
                  var p = this.getBBoxSnapshot();
                  l = { left: ((u || 0) - p.width) / 2 };
                } else
                  l =
                    i === "right"
                      ? { right: (c && c.right) || 0 }
                      : { left: (c && c.left) || 0 };
              if (
                !r ||
                ((r.top === void 0 || r.top === null) &&
                  (r.bottom === void 0 || r.bottom === null))
              )
                if (a === "middle") {
                  var h = this.getBBoxSnapshot();
                  f = { top: ((s || 0) - h.height) / 2 };
                } else
                  f =
                    a === "bottom"
                      ? { bottom: (c && c.bottom) || 0 }
                      : { top: (c && c.top) || 0 };
              return qt(qt({}, l), f);
            },
          },
          {
            key: "render",
            value: function () {
              var r = this,
                n = this.props,
                o = n.content,
                i = n.width,
                a = n.height,
                c = n.wrapperStyle,
                u = n.payloadUniqBy,
                s = n.payload,
                l = qt(
                  qt(
                    {
                      position: "absolute",
                      width: i || "auto",
                      height: a || "auto",
                    },
                    this.getDefaultPosition(c),
                  ),
                  c,
                );
              return I.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: l,
                  ref: function (f) {
                    r.wrapperNode = f;
                  },
                },
                C4(o, qt(qt({}, this.props), {}, { payload: dx(s, u, T4) })),
              );
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (r, n) {
              var o = qt(qt({}, this.defaultProps), r.props),
                i = o.layout;
              return i === "vertical" && V(r.props.height)
                ? { height: r.props.height }
                : i === "horizontal"
                  ? { width: r.props.width || n }
                  : null;
            },
          },
        ],
      )
    );
  })(w.PureComponent);
Pa(Dr, "displayName", "Legend"),
  Pa(Dr, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom",
  });
var vp, bx;
function D4() {
  if (bx) return vp;
  bx = 1;
  var e = fo(),
    t = bf(),
    r = Xe(),
    n = e ? e.isConcatSpreadable : void 0;
  function o(i) {
    return r(i) || t(i) || !!(n && i && i[n]);
  }
  return (vp = o), vp;
}
var mp, wx;
function xx() {
  if (wx) return mp;
  wx = 1;
  var e = rw(),
    t = D4();
  function r(n, o, i, a, c) {
    var u = -1,
      s = n.length;
    for (i || (i = t), c || (c = []); ++u < s; ) {
      var l = n[u];
      o > 0 && i(l)
        ? o > 1
          ? r(l, o - 1, i, a, c)
          : e(c, l)
        : a || (c[c.length] = l);
    }
    return c;
  }
  return (mp = r), mp;
}
var gp, Ox;
function I4() {
  if (Ox) return gp;
  Ox = 1;
  function e(t) {
    return function (r, n, o) {
      for (var i = -1, a = Object(r), c = o(r), u = c.length; u--; ) {
        var s = c[t ? u : ++i];
        if (n(a[s], s, a) === !1) break;
      }
      return r;
    };
  }
  return (gp = e), gp;
}
var bp, Sx;
function N4() {
  if (Sx) return bp;
  Sx = 1;
  var e = I4(),
    t = e();
  return (bp = t), bp;
}
var wp, jx;
function kx() {
  if (jx) return wp;
  jx = 1;
  var e = N4(),
    t = ja();
  function r(n, o) {
    return n && e(n, o, t);
  }
  return (wp = r), wp;
}
var xp, Px;
function R4() {
  if (Px) return xp;
  Px = 1;
  var e = vo();
  function t(r, n) {
    return function (o, i) {
      if (o == null) return o;
      if (!e(o)) return r(o, i);
      for (
        var a = o.length, c = n ? a : -1, u = Object(o);
        (n ? c-- : ++c < a) && i(u[c], c, u) !== !1;

      );
      return o;
    };
  }
  return (xp = t), xp;
}
var Op, Ex;
function Sp() {
  if (Ex) return Op;
  Ex = 1;
  var e = kx(),
    t = R4(),
    r = t(e);
  return (Op = r), Op;
}
var jp, Mx;
function _x() {
  if (Mx) return jp;
  Mx = 1;
  var e = Sp(),
    t = vo();
  function r(n, o) {
    var i = -1,
      a = t(n) ? Array(n.length) : [];
    return (
      e(n, function (c, u, s) {
        a[++i] = o(c, u, s);
      }),
      a
    );
  }
  return (jp = r), jp;
}
var kp, Ax;
function L4() {
  if (Ax) return kp;
  Ax = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; ) t[n] = t[n].value;
    return t;
  }
  return (kp = e), kp;
}
var Pp, Tx;
function B4() {
  if (Tx) return Pp;
  Tx = 1;
  var e = un();
  function t(r, n) {
    if (r !== n) {
      var o = r !== void 0,
        i = r === null,
        a = r === r,
        c = e(r),
        u = n !== void 0,
        s = n === null,
        l = n === n,
        f = e(n);
      if (
        (!s && !f && !c && r > n) ||
        (c && u && l && !s && !f) ||
        (i && u && l) ||
        (!o && l) ||
        !a
      )
        return 1;
      if (
        (!i && !c && !f && r < n) ||
        (f && o && a && !i && !c) ||
        (s && o && a) ||
        (!u && a) ||
        !l
      )
        return -1;
    }
    return 0;
  }
  return (Pp = t), Pp;
}
var Ep, Cx;
function z4() {
  if (Cx) return Ep;
  Cx = 1;
  var e = B4();
  function t(r, n, o) {
    for (
      var i = -1, a = r.criteria, c = n.criteria, u = a.length, s = o.length;
      ++i < u;

    ) {
      var l = e(a[i], c[i]);
      if (l) {
        if (i >= s) return l;
        var f = o[i];
        return l * (f == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return (Ep = t), Ep;
}
var Mp, Dx;
function F4() {
  if (Dx) return Mp;
  Dx = 1;
  var e = nl(),
    t = sl(),
    r = lr(),
    n = _x(),
    o = L4(),
    i = mw(),
    a = z4(),
    c = hn(),
    u = Xe();
  function s(l, f, p) {
    f.length
      ? (f = e(f, function (d) {
          return u(d)
            ? function (y) {
                return t(y, d.length === 1 ? d[0] : d);
              }
            : d;
        }))
      : (f = [c]);
    var h = -1;
    f = e(f, i(r));
    var v = n(l, function (d, y, m) {
      var b = e(f, function (x) {
        return x(d);
      });
      return { criteria: b, index: ++h, value: d };
    });
    return o(v, function (d, y) {
      return a(d, y, p);
    });
  }
  return (Mp = s), Mp;
}
var _p, Ix;
function U4() {
  if (Ix) return _p;
  Ix = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return (_p = e), _p;
}
var Ap, Nx;
function $4() {
  if (Nx) return Ap;
  Nx = 1;
  var e = U4(),
    t = Math.max;
  function r(n, o, i) {
    return (
      (o = t(o === void 0 ? n.length - 1 : o, 0)),
      function () {
        for (
          var a = arguments, c = -1, u = t(a.length - o, 0), s = Array(u);
          ++c < u;

        )
          s[c] = a[o + c];
        c = -1;
        for (var l = Array(o + 1); ++c < o; ) l[c] = a[c];
        return (l[o] = i(s)), e(n, this, l);
      }
    );
  }
  return (Ap = r), Ap;
}
var Tp, Rx;
function H4() {
  if (Rx) return Tp;
  Rx = 1;
  function e(t) {
    return function () {
      return t;
    };
  }
  return (Tp = e), Tp;
}
var Cp, Lx;
function Bx() {
  if (Lx) return Cp;
  Lx = 1;
  var e = Mr(),
    t = (function () {
      try {
        var r = e(Object, "defineProperty");
        return r({}, "", {}), r;
      } catch {}
    })();
  return (Cp = t), Cp;
}
var Dp, zx;
function W4() {
  if (zx) return Dp;
  zx = 1;
  var e = H4(),
    t = Bx(),
    r = hn(),
    n = t
      ? function (o, i) {
          return t(o, "toString", {
            configurable: !0,
            enumerable: !1,
            value: e(i),
            writable: !0,
          });
        }
      : r;
  return (Dp = n), Dp;
}
var Ip, Fx;
function q4() {
  if (Fx) return Ip;
  Fx = 1;
  var e = 800,
    t = 16,
    r = Date.now;
  function n(o) {
    var i = 0,
      a = 0;
    return function () {
      var c = r(),
        u = t - (c - a);
      if (((a = c), u > 0)) {
        if (++i >= e) return arguments[0];
      } else i = 0;
      return o.apply(void 0, arguments);
    };
  }
  return (Ip = n), Ip;
}
var Np, Ux;
function G4() {
  if (Ux) return Np;
  Ux = 1;
  var e = W4(),
    t = q4(),
    r = t(e);
  return (Np = r), Np;
}
var Rp, $x;
function V4() {
  if ($x) return Rp;
  $x = 1;
  var e = hn(),
    t = $4(),
    r = G4();
  function n(o, i) {
    return r(t(o, i, e), o + "");
  }
  return (Rp = n), Rp;
}
var Lp, Hx;
function Ea() {
  if (Hx) return Lp;
  Hx = 1;
  var e = Ns(),
    t = vo(),
    r = Of(),
    n = ur();
  function o(i, a, c) {
    if (!n(c)) return !1;
    var u = typeof a;
    return (u == "number" ? t(c) && r(a, c.length) : u == "string" && a in c)
      ? e(c[a], i)
      : !1;
  }
  return (Lp = o), Lp;
}
var Bp, Wx;
function X4() {
  if (Wx) return Bp;
  Wx = 1;
  var e = xx(),
    t = F4(),
    r = V4(),
    n = Ea(),
    o = r(function (i, a) {
      if (i == null) return [];
      var c = a.length;
      return (
        c > 1 && n(i, a[0], a[1])
          ? (a = [])
          : c > 2 && n(a[0], a[1], a[2]) && (a = [a[0]]),
        t(i, e(a, 1), [])
      );
    });
  return (Bp = o), Bp;
}
var K4 = X4();
const zp = be(K4);
function mo(e) {
  "@babel/helpers - typeof";
  return (
    (mo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    mo(e)
  );
}
function Fp() {
  return (
    (Fp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fp.apply(this, arguments)
  );
}
function Y4(e, t) {
  return eL(e) || Q4(e, t) || J4(e, t) || Z4();
}
function Z4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J4(e, t) {
  if (e) {
    if (typeof e == "string") return qx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qx(e, t);
  }
}
function qx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Q4(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      c = [],
      u = !0,
      s = !1;
    try {
      if (((i = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t);
          u = !0
        );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function eL(e) {
  if (Array.isArray(e)) return e;
}
function Gx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Up(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gx(Object(r), !0).forEach(function (n) {
          tL(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Gx(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function tL(e, t, r) {
  return (
    (t = rL(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function rL(e) {
  var t = nL(e, "string");
  return mo(t) == "symbol" ? t : t + "";
}
function nL(e, t) {
  if (mo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function oL(e) {
  return Array.isArray(e) && Ce(e[0]) && Ce(e[1]) ? e.join(" ~ ") : e;
}
var iL = function (e) {
  var t = e.separator,
    r = t === void 0 ? " : " : t,
    n = e.contentStyle,
    o = n === void 0 ? {} : n,
    i = e.itemStyle,
    a = i === void 0 ? {} : i,
    c = e.labelStyle,
    u = c === void 0 ? {} : c,
    s = e.payload,
    l = e.formatter,
    f = e.itemSorter,
    p = e.wrapperClassName,
    h = e.labelClassName,
    v = e.label,
    d = e.labelFormatter,
    y = e.accessibilityLayer,
    m = y === void 0 ? !1 : y,
    b = function () {
      if (s && s.length) {
        var D = { padding: 0, margin: 0 },
          M = (f ? zp(s, f) : s).map(function (_, C) {
            if (_.type === "none") return null;
            var T = Up(
                {
                  display: "block",
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: _.color || "#000",
                },
                a,
              ),
              R = _.formatter || l || oL,
              N = _.value,
              z = _.name,
              W = N,
              U = z;
            if (R && W != null && U != null) {
              var B = R(N, z, _, C, s);
              if (Array.isArray(B)) {
                var P = Y4(B, 2);
                (W = P[0]), (U = P[1]);
              } else W = B;
            }
            return I.createElement(
              "li",
              {
                className: "recharts-tooltip-item",
                key: "tooltip-item-".concat(C),
                style: T,
              },
              Ce(U)
                ? I.createElement(
                    "span",
                    { className: "recharts-tooltip-item-name" },
                    U,
                  )
                : null,
              Ce(U)
                ? I.createElement(
                    "span",
                    { className: "recharts-tooltip-item-separator" },
                    r,
                  )
                : null,
              I.createElement(
                "span",
                { className: "recharts-tooltip-item-value" },
                W,
              ),
              I.createElement(
                "span",
                { className: "recharts-tooltip-item-unit" },
                _.unit || "",
              ),
            );
          });
        return I.createElement(
          "ul",
          { className: "recharts-tooltip-item-list", style: D },
          M,
        );
      }
      return null;
    },
    x = Up(
      {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      o,
    ),
    g = Up({ margin: 0 }, u),
    O = !ye(v),
    S = O ? v : "",
    j = de("recharts-default-tooltip", p),
    k = de("recharts-tooltip-label", h);
  O && d && s !== void 0 && s !== null && (S = d(v, s));
  var A = m ? { role: "status", "aria-live": "assertive" } : {};
  return I.createElement(
    "div",
    Fp({ className: j, style: x }, A),
    I.createElement(
      "p",
      { className: k, style: g },
      I.isValidElement(S) ? S : "".concat(S),
    ),
    b(),
  );
};
function go(e) {
  "@babel/helpers - typeof";
  return (
    (go =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    go(e)
  );
}
function Ma(e, t, r) {
  return (
    (t = aL(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function aL(e) {
  var t = cL(e, "string");
  return go(t) == "symbol" ? t : t + "";
}
function cL(e, t) {
  if (go(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (go(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bo = "recharts-tooltip-wrapper",
  uL = { visibility: "hidden" };
function sL(e) {
  var t = e.coordinate,
    r = e.translateX,
    n = e.translateY;
  return de(
    bo,
    Ma(
      Ma(
        Ma(
          Ma({}, "".concat(bo, "-right"), V(r) && t && V(t.x) && r >= t.x),
          "".concat(bo, "-left"),
          V(r) && t && V(t.x) && r < t.x,
        ),
        "".concat(bo, "-bottom"),
        V(n) && t && V(t.y) && n >= t.y,
      ),
      "".concat(bo, "-top"),
      V(n) && t && V(t.y) && n < t.y,
    ),
  );
}
function Vx(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.key,
    o = e.offsetTopLeft,
    i = e.position,
    a = e.reverseDirection,
    c = e.tooltipDimension,
    u = e.viewBox,
    s = e.viewBoxDimension;
  if (i && V(i[n])) return i[n];
  var l = r[n] - c - o,
    f = r[n] + o;
  if (t[n]) return a[n] ? l : f;
  if (a[n]) {
    var p = l,
      h = u[n];
    return p < h ? Math.max(f, u[n]) : Math.max(l, u[n]);
  }
  var v = f + c,
    d = u[n] + s;
  return v > d ? Math.max(l, u[n]) : Math.max(f, u[n]);
}
function lL(e) {
  var t = e.translateX,
    r = e.translateY,
    n = e.useTranslate3d;
  return {
    transform: n
      ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
      : "translate(".concat(t, "px, ").concat(r, "px)"),
  };
}
function fL(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.offsetTopLeft,
    o = e.position,
    i = e.reverseDirection,
    a = e.tooltipBox,
    c = e.useTranslate3d,
    u = e.viewBox,
    s,
    l,
    f;
  return (
    a.height > 0 && a.width > 0 && r
      ? ((l = Vx({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "x",
          offsetTopLeft: n,
          position: o,
          reverseDirection: i,
          tooltipDimension: a.width,
          viewBox: u,
          viewBoxDimension: u.width,
        })),
        (f = Vx({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "y",
          offsetTopLeft: n,
          position: o,
          reverseDirection: i,
          tooltipDimension: a.height,
          viewBox: u,
          viewBoxDimension: u.height,
        })),
        (s = lL({ translateX: l, translateY: f, useTranslate3d: c })))
      : (s = uL),
    {
      cssProperties: s,
      cssClasses: sL({ translateX: l, translateY: f, coordinate: r }),
    }
  );
}
function vn(e) {
  "@babel/helpers - typeof";
  return (
    (vn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    vn(e)
  );
}
function Xx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Kx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xx(Object(r), !0).forEach(function (n) {
          Hp(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xx(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function pL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Zx(n.key), n);
  }
}
function hL(e, t, r) {
  return (
    t && dL(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function yL(e, t, r) {
  return (
    (t = _a(t)),
    vL(
      e,
      Yx() ? Reflect.construct(t, r || [], _a(e).constructor) : t.apply(e, r),
    )
  );
}
function vL(e, t) {
  if (t && (vn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return mL(e);
}
function mL(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Yx() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Yx = function () {
    return !!e;
  })();
}
function _a(e) {
  return (
    (_a = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _a(e)
  );
}
function gL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && $p(e, t);
}
function $p(e, t) {
  return (
    ($p = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    $p(e, t)
  );
}
function Hp(e, t, r) {
  return (
    (t = Zx(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Zx(e) {
  var t = bL(e, "string");
  return vn(t) == "symbol" ? t : t + "";
}
function bL(e, t) {
  if (vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Jx = 1,
  wL = (function (e) {
    function t() {
      var r;
      pL(this, t);
      for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
        o[i] = arguments[i];
      return (
        (r = yL(this, t, [].concat(o))),
        Hp(r, "state", {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        Hp(r, "handleKeyDown", function (a) {
          if (a.key === "Escape") {
            var c, u, s, l;
            r.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (c =
                    (u = r.props.coordinate) === null || u === void 0
                      ? void 0
                      : u.x) !== null && c !== void 0
                    ? c
                    : 0,
                y:
                  (s =
                    (l = r.props.coordinate) === null || l === void 0
                      ? void 0
                      : l.y) !== null && s !== void 0
                    ? s
                    : 0,
              },
            });
          }
        }),
        r
      );
    }
    return (
      gL(t, e),
      hL(t, [
        {
          key: "updateBBox",
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var r = this.wrapperNode.getBoundingClientRect();
              (Math.abs(r.width - this.state.lastBoundingBox.width) > Jx ||
                Math.abs(r.height - this.state.lastBoundingBox.height) > Jx) &&
                this.setState({
                  lastBoundingBox: { width: r.width, height: r.height },
                });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            document.addEventListener("keydown", this.handleKeyDown),
              this.updateBBox();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.handleKeyDown);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var r, n;
            this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((r = this.props.coordinate) === null || r === void 0
                  ? void 0
                  : r.x) !== this.state.dismissedAtCoordinate.x ||
                  ((n = this.props.coordinate) === null || n === void 0
                    ? void 0
                    : n.y) !== this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1);
          },
        },
        {
          key: "render",
          value: function () {
            var r = this,
              n = this.props,
              o = n.active,
              i = n.allowEscapeViewBox,
              a = n.animationDuration,
              c = n.animationEasing,
              u = n.children,
              s = n.coordinate,
              l = n.hasPayload,
              f = n.isAnimationActive,
              p = n.offset,
              h = n.position,
              v = n.reverseDirection,
              d = n.useTranslate3d,
              y = n.viewBox,
              m = n.wrapperStyle,
              b = fL({
                allowEscapeViewBox: i,
                coordinate: s,
                offsetTopLeft: p,
                position: h,
                reverseDirection: v,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: d,
                viewBox: y,
              }),
              x = b.cssClasses,
              g = b.cssProperties,
              O = Kx(
                Kx(
                  {
                    transition:
                      f && o ? "transform ".concat(a, "ms ").concat(c) : void 0,
                  },
                  g,
                ),
                {},
                {
                  pointerEvents: "none",
                  visibility:
                    !this.state.dismissed && o && l ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                m,
              );
            return I.createElement(
              "div",
              {
                tabIndex: -1,
                className: x,
                style: O,
                ref: function (S) {
                  r.wrapperNode = S;
                },
              },
              u,
            );
          },
        },
      ])
    );
  })(w.PureComponent),
  xL = function () {
    return !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  wo = { isSsr: xL() };
function mn(e) {
  "@babel/helpers - typeof";
  return (
    (mn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    mn(e)
  );
}
function Qx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function eO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qx(Object(r), !0).forEach(function (n) {
          qp(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qx(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function OL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function SL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, rO(n.key), n);
  }
}
function jL(e, t, r) {
  return (
    t && SL(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function kL(e, t, r) {
  return (
    (t = Aa(t)),
    PL(
      e,
      tO() ? Reflect.construct(t, r || [], Aa(e).constructor) : t.apply(e, r),
    )
  );
}
function PL(e, t) {
  if (t && (mn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return EL(e);
}
function EL(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function tO() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (tO = function () {
    return !!e;
  })();
}
function Aa(e) {
  return (
    (Aa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Aa(e)
  );
}
function ML(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Wp(e, t);
}
function Wp(e, t) {
  return (
    (Wp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Wp(e, t)
  );
}
function qp(e, t, r) {
  return (
    (t = rO(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function rO(e) {
  var t = _L(e, "string");
  return mn(t) == "symbol" ? t : t + "";
}
function _L(e, t) {
  if (mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function AL(e) {
  return e.dataKey;
}
function TL(e, t) {
  return I.isValidElement(e)
    ? I.cloneElement(e, t)
    : typeof e == "function"
      ? I.createElement(e, t)
      : I.createElement(iL, t);
}
var _t = (function (e) {
  function t() {
    return OL(this, t), kL(this, t, arguments);
  }
  return (
    ML(t, e),
    jL(t, [
      {
        key: "render",
        value: function () {
          var r = this,
            n = this.props,
            o = n.active,
            i = n.allowEscapeViewBox,
            a = n.animationDuration,
            c = n.animationEasing,
            u = n.content,
            s = n.coordinate,
            l = n.filterNull,
            f = n.isAnimationActive,
            p = n.offset,
            h = n.payload,
            v = n.payloadUniqBy,
            d = n.position,
            y = n.reverseDirection,
            m = n.useTranslate3d,
            b = n.viewBox,
            x = n.wrapperStyle,
            g = h ?? [];
          l &&
            g.length &&
            (g = dx(
              h.filter(function (S) {
                return (
                  S.value != null && (S.hide !== !0 || r.props.includeHidden)
                );
              }),
              v,
              AL,
            ));
          var O = g.length > 0;
          return I.createElement(
            wL,
            {
              allowEscapeViewBox: i,
              animationDuration: a,
              animationEasing: c,
              isAnimationActive: f,
              active: o,
              coordinate: s,
              hasPayload: O,
              offset: p,
              position: d,
              reverseDirection: y,
              useTranslate3d: m,
              viewBox: b,
              wrapperStyle: x,
            },
            TL(u, eO(eO({}, this.props), {}, { payload: g })),
          );
        },
      },
    ])
  );
})(w.PureComponent);
qp(_t, "displayName", "Tooltip"),
  qp(_t, "defaultProps", {
    accessibilityLayer: !1,
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: "ease",
    contentStyle: {},
    coordinate: { x: 0, y: 0 },
    cursor: !0,
    cursorStyle: {},
    filterNull: !0,
    isAnimationActive: !wo.isSsr,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: !1, y: !1 },
    separator: " : ",
    trigger: "hover",
    useTranslate3d: !1,
    viewBox: { x: 0, y: 0, height: 0, width: 0 },
    wrapperStyle: {},
  });
var Gp, nO;
function CL() {
  if (nO) return Gp;
  nO = 1;
  var e = Mt(),
    t = function () {
      return e.Date.now();
    };
  return (Gp = t), Gp;
}
var Vp, oO;
function DL() {
  if (oO) return Vp;
  oO = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); );
    return n;
  }
  return (Vp = t), Vp;
}
var Xp, iO;
function IL() {
  if (iO) return Xp;
  iO = 1;
  var e = DL(),
    t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return (Xp = r), Xp;
}
var Kp, aO;
function cO() {
  if (aO) return Kp;
  aO = 1;
  var e = IL(),
    t = ur(),
    r = un(),
    n = NaN,
    o = /^[-+]0x[0-9a-f]+$/i,
    i = /^0b[01]+$/i,
    a = /^0o[0-7]+$/i,
    c = parseInt;
  function u(s) {
    if (typeof s == "number") return s;
    if (r(s)) return n;
    if (t(s)) {
      var l = typeof s.valueOf == "function" ? s.valueOf() : s;
      s = t(l) ? l + "" : l;
    }
    if (typeof s != "string") return s === 0 ? s : +s;
    s = e(s);
    var f = i.test(s);
    return f || a.test(s) ? c(s.slice(2), f ? 2 : 8) : o.test(s) ? n : +s;
  }
  return (Kp = u), Kp;
}
var Yp, uO;
function NL() {
  if (uO) return Yp;
  uO = 1;
  var e = ur(),
    t = CL(),
    r = cO(),
    n = "Expected a function",
    o = Math.max,
    i = Math.min;
  function a(c, u, s) {
    var l,
      f,
      p,
      h,
      v,
      d,
      y = 0,
      m = !1,
      b = !1,
      x = !0;
    if (typeof c != "function") throw new TypeError(n);
    (u = r(u) || 0),
      e(s) &&
        ((m = !!s.leading),
        (b = "maxWait" in s),
        (p = b ? o(r(s.maxWait) || 0, u) : p),
        (x = "trailing" in s ? !!s.trailing : x));
    function g(C) {
      var T = l,
        R = f;
      return (l = f = void 0), (y = C), (h = c.apply(R, T)), h;
    }
    function O(C) {
      return (y = C), (v = setTimeout(k, u)), m ? g(C) : h;
    }
    function S(C) {
      var T = C - d,
        R = C - y,
        N = u - T;
      return b ? i(N, p - R) : N;
    }
    function j(C) {
      var T = C - d,
        R = C - y;
      return d === void 0 || T >= u || T < 0 || (b && R >= p);
    }
    function k() {
      var C = t();
      if (j(C)) return A(C);
      v = setTimeout(k, S(C));
    }
    function A(C) {
      return (v = void 0), x && l ? g(C) : ((l = f = void 0), h);
    }
    function D() {
      v !== void 0 && clearTimeout(v), (y = 0), (l = d = f = v = void 0);
    }
    function M() {
      return v === void 0 ? h : A(t());
    }
    function _() {
      var C = t(),
        T = j(C);
      if (((l = arguments), (f = this), (d = C), T)) {
        if (v === void 0) return O(d);
        if (b) return clearTimeout(v), (v = setTimeout(k, u)), g(d);
      }
      return v === void 0 && (v = setTimeout(k, u)), h;
    }
    return (_.cancel = D), (_.flush = M), _;
  }
  return (Yp = a), Yp;
}
var Zp, sO;
function RL() {
  if (sO) return Zp;
  sO = 1;
  var e = NL(),
    t = ur(),
    r = "Expected a function";
  function n(o, i, a) {
    var c = !0,
      u = !0;
    if (typeof o != "function") throw new TypeError(r);
    return (
      t(a) &&
        ((c = "leading" in a ? !!a.leading : c),
        (u = "trailing" in a ? !!a.trailing : u)),
      e(o, i, { leading: c, maxWait: i, trailing: u })
    );
  }
  return (Zp = n), Zp;
}
var LL = RL();
const lO = be(LL);
function xo(e) {
  "@babel/helpers - typeof";
  return (
    (xo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    xo(e)
  );
}
function fO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ta(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fO(Object(r), !0).forEach(function (n) {
          BL(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fO(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function BL(e, t, r) {
  return (
    (t = zL(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function zL(e) {
  var t = FL(e, "string");
  return xo(t) == "symbol" ? t : t + "";
}
function FL(e, t) {
  if (xo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UL(e, t) {
  return qL(e) || WL(e, t) || HL(e, t) || $L();
}
function $L() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HL(e, t) {
  if (e) {
    if (typeof e == "string") return pO(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return pO(e, t);
  }
}
function pO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function WL(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      c = [],
      u = !0,
      s = !1;
    try {
      if (((i = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t);
          u = !0
        );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function qL(e) {
  if (Array.isArray(e)) return e;
}
var GL = w.forwardRef(function (e, t) {
    var r = e.aspect,
      n = e.initialDimension,
      o = n === void 0 ? { width: -1, height: -1 } : n,
      i = e.width,
      a = i === void 0 ? "100%" : i,
      c = e.height,
      u = c === void 0 ? "100%" : c,
      s = e.minWidth,
      l = s === void 0 ? 0 : s,
      f = e.minHeight,
      p = e.maxHeight,
      h = e.children,
      v = e.debounce,
      d = v === void 0 ? 0 : v,
      y = e.id,
      m = e.className,
      b = e.onResize,
      x = e.style,
      g = x === void 0 ? {} : x,
      O = w.useRef(null),
      S = w.useRef();
    (S.current = b),
      w.useImperativeHandle(t, function () {
        return Object.defineProperty(O.current, "current", {
          get: function () {
            return (
              console.warn(
                "The usage of ref.current.current is deprecated and will no longer be supported.",
              ),
              O.current
            );
          },
          configurable: !0,
        });
      });
    var j = w.useState({ containerWidth: o.width, containerHeight: o.height }),
      k = UL(j, 2),
      A = k[0],
      D = k[1],
      M = w.useCallback(function (C, T) {
        D(function (R) {
          var N = Math.round(C),
            z = Math.round(T);
          return R.containerWidth === N && R.containerHeight === z
            ? R
            : { containerWidth: N, containerHeight: z };
        });
      }, []);
    w.useEffect(
      function () {
        var C = function (W) {
          var U,
            B = W[0].contentRect,
            P = B.width,
            L = B.height;
          M(P, L), (U = S.current) === null || U === void 0 || U.call(S, P, L);
        };
        d > 0 && (C = lO(C, d, { trailing: !0, leading: !1 }));
        var T = new ResizeObserver(C),
          R = O.current.getBoundingClientRect(),
          N = R.width,
          z = R.height;
        return (
          M(N, z),
          T.observe(O.current),
          function () {
            T.disconnect();
          }
        );
      },
      [M, d],
    );
    var _ = w.useMemo(
      function () {
        var C = A.containerWidth,
          T = A.containerHeight;
        if (C < 0 || T < 0) return null;
        Wt(
          Ar(a) || Ar(u),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          a,
          u,
        ),
          Wt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
        var R = Ar(a) ? C : a,
          N = Ar(u) ? T : u;
        r &&
          r > 0 &&
          (R ? (N = R / r) : N && (R = N * r), p && N > p && (N = p)),
          Wt(
            R > 0 || N > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            R,
            N,
            a,
            u,
            l,
            f,
            r,
          );
        var z = !Array.isArray(h) && Ht(h.type).endsWith("Chart");
        return I.Children.map(h, function (W) {
          return I.isValidElement(W)
            ? w.cloneElement(
                W,
                Ta(
                  { width: R, height: N },
                  z
                    ? {
                        style: Ta(
                          {
                            height: "100%",
                            width: "100%",
                            maxHeight: N,
                            maxWidth: R,
                          },
                          W.props.style,
                        ),
                      }
                    : {},
                ),
              )
            : W;
        });
      },
      [r, h, u, p, f, l, A, a],
    );
    return I.createElement(
      "div",
      {
        id: y ? "".concat(y) : void 0,
        className: de("recharts-responsive-container", m),
        style: Ta(
          Ta({}, g),
          {},
          { width: a, height: u, minWidth: l, minHeight: f, maxHeight: p },
        ),
        ref: O,
      },
      _,
    );
  }),
  dO = function (e) {
    return null;
  };
dO.displayName = "Cell";
function Oo(e) {
  "@babel/helpers - typeof";
  return (
    (Oo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Oo(e)
  );
}
function hO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Jp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hO(Object(r), !0).forEach(function (n) {
          VL(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hO(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function VL(e, t, r) {
  return (
    (t = XL(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function XL(e) {
  var t = KL(e, "string");
  return Oo(t) == "symbol" ? t : t + "";
}
function KL(e, t) {
  if (Oo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Oo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gn = { widthCache: {}, cacheCount: 0 },
  YL = 2e3,
  ZL = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  yO = "recharts_measurement_span";
function JL(e) {
  var t = Jp({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      t[r] || delete t[r];
    }),
    t
  );
}
var So = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || wo.isSsr) return { width: 0, height: 0 };
    var r = JL(t),
      n = JSON.stringify({ text: e, copyStyle: r });
    if (gn.widthCache[n]) return gn.widthCache[n];
    try {
      var o = document.getElementById(yO);
      o ||
        ((o = document.createElement("span")),
        o.setAttribute("id", yO),
        o.setAttribute("aria-hidden", "true"),
        document.body.appendChild(o));
      var i = Jp(Jp({}, ZL), r);
      Object.assign(o.style, i), (o.textContent = "".concat(e));
      var a = o.getBoundingClientRect(),
        c = { width: a.width, height: a.height };
      return (
        (gn.widthCache[n] = c),
        ++gn.cacheCount > YL && ((gn.cacheCount = 0), (gn.widthCache = {})),
        c
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  QL = function (e) {
    return {
      top: e.top + window.scrollY - document.documentElement.clientTop,
      left: e.left + window.scrollX - document.documentElement.clientLeft,
    };
  };
function jo(e) {
  "@babel/helpers - typeof";
  return (
    (jo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jo(e)
  );
}
function Ca(e, t) {
  return n6(e) || r6(e, t) || t6(e, t) || e6();
}
function e6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function t6(e, t) {
  if (e) {
    if (typeof e == "string") return vO(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vO(e, t);
  }
}
function vO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function r6(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      c = [],
      u = !0,
      s = !1;
    try {
      if (((i = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else
        for (
          ;
          !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t);
          u = !0
        );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function n6(e) {
  if (Array.isArray(e)) return e;
}
function o6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, a6(n.key), n);
  }
}
function i6(e, t, r) {
  return (
    t && mO(e.prototype, t),
    r && mO(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function a6(e) {
  var t = c6(e, "string");
  return jo(t) == "symbol" ? t : t + "";
}
function c6(e, t) {
  if (jo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var gO = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  bO = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  u6 = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  s6 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  wO = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  l6 = Object.keys(wO),
  bn = "NaN";
function f6(e, t) {
  return e * wO[t];
}
var Da = (function () {
  function e(t, r) {
    o6(this, e),
      (this.num = t),
      (this.unit = r),
      (this.num = t),
      (this.unit = r),
      Number.isNaN(t) && (this.unit = ""),
      r !== "" && !u6.test(r) && ((this.num = NaN), (this.unit = "")),
      l6.includes(r) && ((this.num = f6(t, r)), (this.unit = "px"));
  }
  return i6(
    e,
    [
      {
        key: "add",
        value: function (t) {
          return this.unit !== t.unit
            ? new e(NaN, "")
            : new e(this.num + t.num, this.unit);
        },
      },
      {
        key: "subtract",
        value: function (t) {
          return this.unit !== t.unit
            ? new e(NaN, "")
            : new e(this.num - t.num, this.unit);
        },
      },
      {
        key: "multiply",
        value: function (t) {
          return this.unit !== "" && t.unit !== "" && this.unit !== t.unit
            ? new e(NaN, "")
            : new e(this.num * t.num, this.unit || t.unit);
        },
      },
      {
        key: "divide",
        value: function (t) {
          return this.unit !== "" && t.unit !== "" && this.unit !== t.unit
            ? new e(NaN, "")
            : new e(this.num / t.num, this.unit || t.unit);
        },
      },
      {
        key: "toString",
        value: function () {
          return "".concat(this.num).concat(this.unit);
        },
      },
      {
        key: "isNaN",
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ],
    [
      {
        key: "parse",
        value: function (t) {
          var r,
            n = (r = s6.exec(t)) !== null && r !== void 0 ? r : [],
            o = Ca(n, 3),
            i = o[1],
            a = o[2];
          return new e(parseFloat(i), a ?? "");
        },
      },
    ],
  );
})();
function xO(e) {
  if (e.includes(bn)) return bn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r,
      n = (r = gO.exec(t)) !== null && r !== void 0 ? r : [],
      o = Ca(n, 4),
      i = o[1],
      a = o[2],
      c = o[3],
      u = Da.parse(i ?? ""),
      s = Da.parse(c ?? ""),
      l = a === "*" ? u.multiply(s) : u.divide(s);
    if (l.isNaN()) return bn;
    t = t.replace(gO, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f,
      p = (f = bO.exec(t)) !== null && f !== void 0 ? f : [],
      h = Ca(p, 4),
      v = h[1],
      d = h[2],
      y = h[3],
      m = Da.parse(v ?? ""),
      b = Da.parse(y ?? ""),
      x = d === "+" ? m.add(b) : m.subtract(b);
    if (x.isNaN()) return bn;
    t = t.replace(bO, x.toString());
  }
  return t;
}
var OO = /\(([^()]*)\)/;
function p6(e) {
  for (var t = e; t.includes("("); ) {
    var r = OO.exec(t),
      n = Ca(r, 2),
      o = n[1];
    t = t.replace(OO, xO(o));
  }
  return t;
}
function d6(e) {
  var t = e.replace(/\s+/g, "");
  return (t = p6(t)), (t = xO(t)), t;
}
function h6(e) {
  try {
    return d6(e);
  } catch {
    return bn;
  }
}
function Qp(e) {
  var t = h6(e.slice(5, -1));
  return t === bn ? "" : t;
}
var y6 = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  v6 = ["dx", "dy", "angle", "className", "breakAll"];
function ed() {
  return (
    (ed = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ed.apply(this, arguments)
  );
}
function SO(e, t) {
  if (e == null) return {};
  var r = m6(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function m6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function jO(e, t) {
  return x6(e) || w6(e, t) || b6(e, t) || g6();
}
function g6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function b6(e, t) {
  if (e) {
    if (typeof e == "string") return kO(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return kO(e, t);
  }
}
function kO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function w6(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      c = [],
      u = !0,
      s = !1;
    try {
      if (((i = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else
        for (
          ;
          !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t);
          u = !0
        );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function x6(e) {
  if (Array.isArray(e)) return e;
}
var PO = /[ \f\n\r\t\v\u2028\u2029]+/,
  EO = function (e) {
    var t = e.children,
      r = e.breakAll,
      n = e.style;
    try {
      var o = [];
      ye(t) ||
        (r ? (o = t.toString().split("")) : (o = t.toString().split(PO)));
      var i = o.map(function (c) {
          return { word: c, width: So(c, n).width };
        }),
        a = r ? 0 : So("\xA0", n).width;
      return { wordsWithComputedWidth: i, spaceWidth: a };
    } catch {
      return null;
    }
  },
  O6 = function (e, t, r, n, o) {
    var i = e.maxLines,
      a = e.children,
      c = e.style,
      u = e.breakAll,
      s = V(i),
      l = a,
      f = function () {
        var C =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return C.reduce(function (T, R) {
          var N = R.word,
            z = R.width,
            W = T[T.length - 1];
          if (W && (n == null || o || W.width + z + r < Number(n)))
            W.words.push(N), (W.width += z + r);
          else {
            var U = { words: [N], width: z };
            T.push(U);
          }
          return T;
        }, []);
      },
      p = f(t),
      h = function (C) {
        return C.reduce(function (T, R) {
          return T.width > R.width ? T : R;
        });
      };
    if (!s) return p;
    for (
      var v = "\u2026",
        d = function (C) {
          var T = l.slice(0, C),
            R = EO({
              breakAll: u,
              style: c,
              children: T + v,
            }).wordsWithComputedWidth,
            N = f(R),
            z = N.length > i || h(N).width > Number(n);
          return [z, N];
        },
        y = 0,
        m = l.length - 1,
        b = 0,
        x;
      y <= m && b <= l.length - 1;

    ) {
      var g = Math.floor((y + m) / 2),
        O = g - 1,
        S = d(O),
        j = jO(S, 2),
        k = j[0],
        A = j[1],
        D = d(g),
        M = jO(D, 1),
        _ = M[0];
      if ((!k && !_ && (y = g + 1), k && _ && (m = g - 1), !k && _)) {
        x = A;
        break;
      }
      b++;
    }
    return x || p;
  },
  MO = function (e) {
    var t = ye(e) ? [] : e.toString().split(PO);
    return [{ words: t }];
  },
  S6 = function (e) {
    var t = e.width,
      r = e.scaleToFit,
      n = e.children,
      o = e.style,
      i = e.breakAll,
      a = e.maxLines;
    if ((t || r) && !wo.isSsr) {
      var c,
        u,
        s = EO({ breakAll: i, children: n, style: o });
      if (s) {
        var l = s.wordsWithComputedWidth,
          f = s.spaceWidth;
        (c = l), (u = f);
      } else return MO(n);
      return O6(
        { breakAll: i, children: n, maxLines: a, style: o },
        c,
        u,
        t,
        r,
      );
    }
    return MO(n);
  },
  _O = "#808080",
  Ia = function (e) {
    var t = e.x,
      r = t === void 0 ? 0 : t,
      n = e.y,
      o = n === void 0 ? 0 : n,
      i = e.lineHeight,
      a = i === void 0 ? "1em" : i,
      c = e.capHeight,
      u = c === void 0 ? "0.71em" : c,
      s = e.scaleToFit,
      l = s === void 0 ? !1 : s,
      f = e.textAnchor,
      p = f === void 0 ? "start" : f,
      h = e.verticalAnchor,
      v = h === void 0 ? "end" : h,
      d = e.fill,
      y = d === void 0 ? _O : d,
      m = SO(e, y6),
      b = w.useMemo(
        function () {
          return S6({
            breakAll: m.breakAll,
            children: m.children,
            maxLines: m.maxLines,
            scaleToFit: l,
            style: m.style,
            width: m.width,
          });
        },
        [m.breakAll, m.children, m.maxLines, l, m.style, m.width],
      ),
      x = m.dx,
      g = m.dy,
      O = m.angle,
      S = m.className,
      j = m.breakAll,
      k = SO(m, v6);
    if (!Ce(r) || !Ce(o)) return null;
    var A = r + (V(x) ? x : 0),
      D = o + (V(g) ? g : 0),
      M;
    switch (v) {
      case "start":
        M = Qp("calc(".concat(u, ")"));
        break;
      case "middle":
        M = Qp(
          "calc("
            .concat((b.length - 1) / 2, " * -")
            .concat(a, " + (")
            .concat(u, " / 2))"),
        );
        break;
      default:
        M = Qp("calc(".concat(b.length - 1, " * -").concat(a, ")"));
        break;
    }
    var _ = [];
    if (l) {
      var C = b[0].width,
        T = m.width;
      _.push("scale(".concat((V(T) ? T / C : 1) / C, ")"));
    }
    return (
      O && _.push("rotate(".concat(O, ", ").concat(A, ", ").concat(D, ")")),
      _.length && (k.transform = _.join(" ")),
      I.createElement(
        "text",
        ed({}, ve(k, !0), {
          x: A,
          y: D,
          className: de("recharts-text", S),
          textAnchor: p,
          fill: y.includes("url") ? _O : y,
        }),
        b.map(function (R, N) {
          var z = R.words.join(j ? "" : " ");
          return I.createElement(
            "tspan",
            { x: A, dy: N === 0 ? M : a, key: "".concat(z, "-").concat(N) },
            z,
          );
        }),
      )
    );
  };
function fr(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function j6(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function td(e) {
  let t, r, n;
  e.length !== 2
    ? ((t = fr), (r = (c, u) => fr(e(c), u)), (n = (c, u) => e(c) - u))
    : ((t = e === fr || e === j6 ? e : k6), (r = e), (n = e));
  function o(c, u, s = 0, l = c.length) {
    if (s < l) {
      if (t(u, u) !== 0) return l;
      do {
        const f = (s + l) >>> 1;
        r(c[f], u) < 0 ? (s = f + 1) : (l = f);
      } while (s < l);
    }
    return s;
  }
  function i(c, u, s = 0, l = c.length) {
    if (s < l) {
      if (t(u, u) !== 0) return l;
      do {
        const f = (s + l) >>> 1;
        r(c[f], u) <= 0 ? (s = f + 1) : (l = f);
      } while (s < l);
    }
    return s;
  }
  function a(c, u, s = 0, l = c.length) {
    const f = o(c, u, s, l - 1);
    return f > s && n(c[f - 1], u) > -n(c[f], u) ? f - 1 : f;
  }
  return { left: o, center: a, right: i };
}
function k6() {
  return 0;
}
function AO(e) {
  return e === null ? NaN : +e;
}
function* P6(e, t) {
  for (let r of e) r != null && (r = +r) >= r && (yield r);
}
const E6 = td(fr),
  ko = E6.right;
td(AO).center;
class TO extends Map {
  constructor(t, r = A6) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: r },
      }),
      t != null)
    )
      for (const [n, o] of t) this.set(n, o);
  }
  get(t) {
    return super.get(CO(this, t));
  }
  has(t) {
    return super.has(CO(this, t));
  }
  set(t, r) {
    return super.set(M6(this, t), r);
  }
  delete(t) {
    return super.delete(_6(this, t));
  }
}
function CO({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function M6({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function _6({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && ((r = e.get(n)), e.delete(n)), r;
}
function A6(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function T6(e = fr) {
  if (e === fr) return DO;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function DO(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : e > t ? 1 : 0)
  );
}
const C6 = Math.sqrt(50),
  D6 = Math.sqrt(10),
  I6 = Math.sqrt(2);
function Na(e, t, r) {
  const n = (t - e) / Math.max(0, r),
    o = Math.floor(Math.log10(n)),
    i = n / Math.pow(10, o),
    a = i >= C6 ? 10 : i >= D6 ? 5 : i >= I6 ? 2 : 1;
  let c, u, s;
  return (
    o < 0
      ? ((s = Math.pow(10, -o) / a),
        (c = Math.round(e * s)),
        (u = Math.round(t * s)),
        c / s < e && ++c,
        u / s > t && --u,
        (s = -s))
      : ((s = Math.pow(10, o) * a),
        (c = Math.round(e / s)),
        (u = Math.round(t / s)),
        c * s < e && ++c,
        u * s > t && --u),
    u < c && 0.5 <= r && r < 2 ? Na(e, t, r * 2) : [c, u, s]
  );
}
function rd(e, t, r) {
  if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
  if (e === t) return [e];
  const n = t < e,
    [o, i, a] = n ? Na(t, e, r) : Na(e, t, r);
  if (!(i >= o)) return [];
  const c = i - o + 1,
    u = new Array(c);
  if (n)
    if (a < 0) for (let s = 0; s < c; ++s) u[s] = (i - s) / -a;
    else for (let s = 0; s < c; ++s) u[s] = (i - s) * a;
  else if (a < 0) for (let s = 0; s < c; ++s) u[s] = (o + s) / -a;
  else for (let s = 0; s < c; ++s) u[s] = (o + s) * a;
  return u;
}
function nd(e, t, r) {
  return (t = +t), (e = +e), (r = +r), Na(e, t, r)[2];
}
function od(e, t, r) {
  (t = +t), (e = +e), (r = +r);
  const n = t < e,
    o = n ? nd(t, e, r) : nd(e, t, r);
  return (n ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function IO(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function NO(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function RO(e, t, r = 0, n = 1 / 0, o) {
  if (
    ((t = Math.floor(t)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(e.length - 1, n))),
    !(r <= t && t <= n))
  )
    return e;
  for (o = o === void 0 ? DO : T6(o); n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1,
        s = t - r + 1,
        l = Math.log(u),
        f = 0.5 * Math.exp((2 * l) / 3),
        p = 0.5 * Math.sqrt((l * f * (u - f)) / u) * (s - u / 2 < 0 ? -1 : 1),
        h = Math.max(r, Math.floor(t - (s * f) / u + p)),
        v = Math.min(n, Math.floor(t + ((u - s) * f) / u + p));
      RO(e, t, h, v, o);
    }
    const i = e[t];
    let a = r,
      c = n;
    for (Po(e, r, t), o(e[n], i) > 0 && Po(e, r, n); a < c; ) {
      for (Po(e, a, c), ++a, --c; o(e[a], i) < 0; ) ++a;
      for (; o(e[c], i) > 0; ) --c;
    }
    o(e[r], i) === 0 ? Po(e, r, c) : (++c, Po(e, c, n)),
      c <= t && (r = c + 1),
      t <= c && (n = c - 1);
  }
  return e;
}
function Po(e, t, r) {
  const n = e[t];
  (e[t] = e[r]), (e[r] = n);
}
function N6(e, t, r) {
  if (((e = Float64Array.from(P6(e))), !(!(n = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || n < 2) return NO(e);
    if (t >= 1) return IO(e);
    var n,
      o = (n - 1) * t,
      i = Math.floor(o),
      a = IO(RO(e, i).subarray(0, i + 1)),
      c = NO(e.subarray(i + 1));
    return a + (c - a) * (o - i);
  }
}
function R6(e, t, r = AO) {
  if (!(!(n = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      o = (n - 1) * t,
      i = Math.floor(o),
      a = +r(e[i], i, e),
      c = +r(e[i + 1], i + 1, e);
    return a + (c - a) * (o - i);
  }
}
function L6(e, t, r) {
  (e = +e),
    (t = +t),
    (r = (o = arguments.length) < 2 ? ((t = e), (e = 0), 1) : o < 3 ? 1 : +r);
  for (
    var n = -1, o = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(o);
    ++n < o;

  )
    i[n] = e + n * r;
  return i;
}
function ct(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Gt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e),
        typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const id = Symbol("implicit");
function ad() {
  var e = new TO(),
    t = [],
    r = [],
    n = id;
  function o(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (n !== id) return n;
      e.set(i, (a = t.push(i) - 1));
    }
    return r[a % r.length];
  }
  return (
    (o.domain = function (i) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new TO());
      for (const a of i) e.has(a) || e.set(a, t.push(a) - 1);
      return o;
    }),
    (o.range = function (i) {
      return arguments.length ? ((r = Array.from(i)), o) : r.slice();
    }),
    (o.unknown = function (i) {
      return arguments.length ? ((n = i), o) : n;
    }),
    (o.copy = function () {
      return ad(t, r).unknown(n);
    }),
    ct.apply(o, arguments),
    o
  );
}
function Eo() {
  var e = ad().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    o = 1,
    i,
    a,
    c = !1,
    u = 0,
    s = 0,
    l = 0.5;
  delete e.unknown;
  function f() {
    var p = t().length,
      h = o < n,
      v = h ? o : n,
      d = h ? n : o;
    (i = (d - v) / Math.max(1, p - u + s * 2)),
      c && (i = Math.floor(i)),
      (v += (d - v - i * (p - u)) * l),
      (a = i * (1 - u)),
      c && ((v = Math.round(v)), (a = Math.round(a)));
    var y = L6(p).map(function (m) {
      return v + i * m;
    });
    return r(h ? y.reverse() : y);
  }
  return (
    (e.domain = function (p) {
      return arguments.length ? (t(p), f()) : t();
    }),
    (e.range = function (p) {
      return arguments.length
        ? (([n, o] = p), (n = +n), (o = +o), f())
        : [n, o];
    }),
    (e.rangeRound = function (p) {
      return ([n, o] = p), (n = +n), (o = +o), (c = !0), f();
    }),
    (e.bandwidth = function () {
      return a;
    }),
    (e.step = function () {
      return i;
    }),
    (e.round = function (p) {
      return arguments.length ? ((c = !!p), f()) : c;
    }),
    (e.padding = function (p) {
      return arguments.length ? ((u = Math.min(1, (s = +p))), f()) : u;
    }),
    (e.paddingInner = function (p) {
      return arguments.length ? ((u = Math.min(1, p)), f()) : u;
    }),
    (e.paddingOuter = function (p) {
      return arguments.length ? ((s = +p), f()) : s;
    }),
    (e.align = function (p) {
      return arguments.length ? ((l = Math.max(0, Math.min(1, p))), f()) : l;
    }),
    (e.copy = function () {
      return Eo(t(), [n, o]).round(c).paddingInner(u).paddingOuter(s).align(l);
    }),
    ct.apply(f(), arguments)
  );
}
function LO(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return LO(t());
    }),
    e
  );
}
function Mo() {
  return LO(Eo.apply(null, arguments).paddingInner(1));
}
function cd(e, t, r) {
  (e.prototype = t.prototype = r), (r.constructor = e);
}
function BO(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function _o() {}
var Ao = 0.7,
  Ra = 1 / Ao,
  wn = "\\s*([+-]?\\d+)\\s*",
  To = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  At = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  B6 = /^#([0-9a-f]{3,8})$/,
  z6 = new RegExp(`^rgb\\(${wn},${wn},${wn}\\)$`),
  F6 = new RegExp(`^rgb\\(${At},${At},${At}\\)$`),
  U6 = new RegExp(`^rgba\\(${wn},${wn},${wn},${To}\\)$`),
  $6 = new RegExp(`^rgba\\(${At},${At},${At},${To}\\)$`),
  H6 = new RegExp(`^hsl\\(${To},${At},${At}\\)$`),
  W6 = new RegExp(`^hsla\\(${To},${At},${At},${To}\\)$`),
  zO = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
cd(_o, Co, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: FO,
  formatHex: FO,
  formatHex8: q6,
  formatHsl: G6,
  formatRgb: UO,
  toString: UO,
});
function FO() {
  return this.rgb().formatHex();
}
function q6() {
  return this.rgb().formatHex8();
}
function G6() {
  return GO(this).formatHsl();
}
function UO() {
  return this.rgb().formatRgb();
}
function Co(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = B6.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? $O(t)
          : r === 3
            ? new Ke(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : r === 8
              ? La(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : r === 4
                ? La(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = z6.exec(e))
        ? new Ke(t[1], t[2], t[3], 1)
        : (t = F6.exec(e))
          ? new Ke(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = U6.exec(e))
            ? La(t[1], t[2], t[3], t[4])
            : (t = $6.exec(e))
              ? La(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = H6.exec(e))
                ? qO(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = W6.exec(e))
                  ? qO(t[1], t[2] / 100, t[3] / 100, t[4])
                  : zO.hasOwnProperty(e)
                    ? $O(zO[e])
                    : e === "transparent"
                      ? new Ke(NaN, NaN, NaN, 0)
                      : null
  );
}
function $O(e) {
  return new Ke((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function La(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ke(e, t, r, n);
}
function V6(e) {
  return (
    e instanceof _o || (e = Co(e)),
    e ? ((e = e.rgb()), new Ke(e.r, e.g, e.b, e.opacity)) : new Ke()
  );
}
function ud(e, t, r, n) {
  return arguments.length === 1 ? V6(e) : new Ke(e, t, r, n ?? 1);
}
function Ke(e, t, r, n) {
  (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
}
cd(
  Ke,
  ud,
  BO(_o, {
    brighter(e) {
      return (
        (e = e == null ? Ra : Math.pow(Ra, e)),
        new Ke(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Ao : Math.pow(Ao, e)),
        new Ke(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Ke(Ir(this.r), Ir(this.g), Ir(this.b), Ba(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: HO,
    formatHex: HO,
    formatHex8: X6,
    formatRgb: WO,
    toString: WO,
  }),
);
function HO() {
  return `#${Nr(this.r)}${Nr(this.g)}${Nr(this.b)}`;
}
function X6() {
  return `#${Nr(this.r)}${Nr(this.g)}${Nr(this.b)}${Nr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function WO() {
  const e = Ba(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ir(this.r)}, ${Ir(this.g)}, ${Ir(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ba(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ir(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Nr(e) {
  return (e = Ir(e)), (e < 16 ? "0" : "") + e.toString(16);
}
function qO(e, t, r, n) {
  return (
    n <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new xt(e, t, r, n)
  );
}
function GO(e) {
  if (e instanceof xt) return new xt(e.h, e.s, e.l, e.opacity);
  if ((e instanceof _o || (e = Co(e)), !e)) return new xt();
  if (e instanceof xt) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    o = Math.min(t, r, n),
    i = Math.max(t, r, n),
    a = NaN,
    c = i - o,
    u = (i + o) / 2;
  return (
    c
      ? (t === i
          ? (a = (r - n) / c + (r < n) * 6)
          : r === i
            ? (a = (n - t) / c + 2)
            : (a = (t - r) / c + 4),
        (c /= u < 0.5 ? i + o : 2 - i - o),
        (a *= 60))
      : (c = u > 0 && u < 1 ? 0 : a),
    new xt(a, c, u, e.opacity)
  );
}
function K6(e, t, r, n) {
  return arguments.length === 1 ? GO(e) : new xt(e, t, r, n ?? 1);
}
function xt(e, t, r, n) {
  (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
}
cd(
  xt,
  K6,
  BO(_o, {
    brighter(e) {
      return (
        (e = e == null ? Ra : Math.pow(Ra, e)),
        new xt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Ao : Math.pow(Ao, e)),
        new xt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        o = 2 * r - n;
      return new Ke(
        sd(e >= 240 ? e - 240 : e + 120, o, n),
        sd(e, o, n),
        sd(e < 120 ? e + 240 : e - 120, o, n),
        this.opacity,
      );
    },
    clamp() {
      return new xt(VO(this.h), za(this.s), za(this.l), Ba(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = Ba(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${VO(this.h)}, ${za(this.s) * 100}%, ${za(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function VO(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function za(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function sd(e, t, r) {
  return (
    (e < 60
      ? t + ((r - t) * e) / 60
      : e < 180
        ? r
        : e < 240
          ? t + ((r - t) * (240 - e)) / 60
          : t) * 255
  );
}
const ld = (e) => () => e;
function Y6(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function Z6(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function J6(e) {
  return (e = +e) == 1
    ? XO
    : function (t, r) {
        return r - t ? Z6(t, r, e) : ld(isNaN(t) ? r : t);
      };
}
function XO(e, t) {
  var r = t - e;
  return r ? Y6(e, r) : ld(isNaN(e) ? t : e);
}
const KO = (function e(t) {
  var r = J6(t);
  function n(o, i) {
    var a = r((o = ud(o)).r, (i = ud(i)).r),
      c = r(o.g, i.g),
      u = r(o.b, i.b),
      s = XO(o.opacity, i.opacity);
    return function (l) {
      return (
        (o.r = a(l)), (o.g = c(l)), (o.b = u(l)), (o.opacity = s(l)), o + ""
      );
    };
  }
  return (n.gamma = e), n;
})(1);
function Q6(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    o;
  return function (i) {
    for (o = 0; o < r; ++o) n[o] = e[o] * (1 - i) + t[o] * i;
    return n;
  };
}
function eB(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function tB(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    o = new Array(n),
    i = new Array(r),
    a;
  for (a = 0; a < n; ++a) o[a] = xn(e[a], t[a]);
  for (; a < r; ++a) i[a] = t[a];
  return function (c) {
    for (a = 0; a < n; ++a) i[a] = o[a](c);
    return i;
  };
}
function rB(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return r.setTime(e * (1 - n) + t * n), r;
    }
  );
}
function Fa(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function nB(e, t) {
  var r = {},
    n = {},
    o;
  (e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {});
  for (o in t) o in e ? (r[o] = xn(e[o], t[o])) : (n[o] = t[o]);
  return function (i) {
    for (o in r) n[o] = r[o](i);
    return n;
  };
}
var fd = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  pd = new RegExp(fd.source, "g");
function oB(e) {
  return function () {
    return e;
  };
}
function iB(e) {
  return function (t) {
    return e(t) + "";
  };
}
function aB(e, t) {
  var r = (fd.lastIndex = pd.lastIndex = 0),
    n,
    o,
    i,
    a = -1,
    c = [],
    u = [];
  for (e = e + "", t = t + ""; (n = fd.exec(e)) && (o = pd.exec(t)); )
    (i = o.index) > r &&
      ((i = t.slice(r, i)), c[a] ? (c[a] += i) : (c[++a] = i)),
      (n = n[0]) === (o = o[0])
        ? c[a]
          ? (c[a] += o)
          : (c[++a] = o)
        : ((c[++a] = null), u.push({ i: a, x: Fa(n, o) })),
      (r = pd.lastIndex);
  return (
    r < t.length && ((i = t.slice(r)), c[a] ? (c[a] += i) : (c[++a] = i)),
    c.length < 2
      ? u[0]
        ? iB(u[0].x)
        : oB(t)
      : ((t = u.length),
        function (s) {
          for (var l = 0, f; l < t; ++l) c[(f = u[l]).i] = f.x(s);
          return c.join("");
        })
  );
}
function xn(e, t) {
  var r = typeof t,
    n;
  return t == null || r === "boolean"
    ? ld(t)
    : (r === "number"
        ? Fa
        : r === "string"
          ? (n = Co(t))
            ? ((t = n), KO)
            : aB
          : t instanceof Co
            ? KO
            : t instanceof Date
              ? rB
              : eB(t)
                ? Q6
                : Array.isArray(t)
                  ? tB
                  : (typeof t.valueOf != "function" &&
                        typeof t.toString != "function") ||
                      isNaN(t)
                    ? nB
                    : Fa)(e, t);
}
function dd(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function cB(e, t) {
  t === void 0 && ((t = e), (e = xn));
  for (
    var r = 0, n = t.length - 1, o = t[0], i = new Array(n < 0 ? 0 : n);
    r < n;

  )
    i[r] = e(o, (o = t[++r]));
  return function (a) {
    var c = Math.max(0, Math.min(n - 1, Math.floor((a *= n))));
    return i[c](a - c);
  };
}
function uB(e) {
  return function () {
    return e;
  };
}
function Ua(e) {
  return +e;
}
var YO = [0, 1];
function Ve(e) {
  return e;
}
function hd(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : uB(isNaN(t) ? NaN : 0.5);
}
function sB(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function lB(e, t, r) {
  var n = e[0],
    o = e[1],
    i = t[0],
    a = t[1];
  return (
    o < n ? ((n = hd(o, n)), (i = r(a, i))) : ((n = hd(n, o)), (i = r(i, a))),
    function (c) {
      return i(n(c));
    }
  );
}
function fB(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    o = new Array(n),
    i = new Array(n),
    a = -1;
  for (
    e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++a < n;

  )
    (o[a] = hd(e[a], e[a + 1])), (i[a] = r(t[a], t[a + 1]));
  return function (c) {
    var u = ko(e, c, 1, n) - 1;
    return i[u](o[u](c));
  };
}
function Do(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function $a() {
  var e = YO,
    t = YO,
    r = xn,
    n,
    o,
    i,
    a = Ve,
    c,
    u,
    s;
  function l() {
    var p = Math.min(e.length, t.length);
    return (
      a !== Ve && (a = sB(e[0], e[p - 1])),
      (c = p > 2 ? fB : lB),
      (u = s = null),
      f
    );
  }
  function f(p) {
    return p == null || isNaN((p = +p))
      ? i
      : (u || (u = c(e.map(n), t, r)))(n(a(p)));
  }
  return (
    (f.invert = function (p) {
      return a(o((s || (s = c(t, e.map(n), Fa)))(p)));
    }),
    (f.domain = function (p) {
      return arguments.length ? ((e = Array.from(p, Ua)), l()) : e.slice();
    }),
    (f.range = function (p) {
      return arguments.length ? ((t = Array.from(p)), l()) : t.slice();
    }),
    (f.rangeRound = function (p) {
      return (t = Array.from(p)), (r = dd), l();
    }),
    (f.clamp = function (p) {
      return arguments.length ? ((a = p ? !0 : Ve), l()) : a !== Ve;
    }),
    (f.interpolate = function (p) {
      return arguments.length ? ((r = p), l()) : r;
    }),
    (f.unknown = function (p) {
      return arguments.length ? ((i = p), f) : i;
    }),
    function (p, h) {
      return (n = p), (o = h), l();
    }
  );
}
function yd() {
  return $a()(Ve, Ve);
}
function pB(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function Ha(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"),
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function On(e) {
  return (e = Ha(Math.abs(e))), e ? e[1] : NaN;
}
function dB(e, t) {
  return function (r, n) {
    for (
      var o = r.length, i = [], a = 0, c = e[0], u = 0;
      o > 0 &&
      c > 0 &&
      (u + c + 1 > n && (c = Math.max(1, n - u)),
      i.push(r.substring((o -= c), o + c)),
      !((u += c + 1) > n));

    )
      c = e[(a = (a + 1) % e.length)];
    return i.reverse().join(t);
  };
}
function hB(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var yB =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Io(e) {
  if (!(t = yB.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new vd({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
Io.prototype = vd.prototype;
function vd(e) {
  (this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + "");
}
vd.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function vB(e) {
  e: for (var t = e.length, r = 1, n = -1, o; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = o = r;
        break;
      case "0":
        n === 0 && (n = r), (o = r);
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(o + 1) : e;
}
var Wa;
function mB(e, t) {
  var r = Ha(e, t);
  if (!r) return (Wa = void 0), e.toPrecision(t);
  var n = r[0],
    o = r[1],
    i = o - (Wa = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1,
    a = n.length;
  return i === a
    ? n
    : i > a
      ? n + new Array(i - a + 1).join("0")
      : i > 0
        ? n.slice(0, i) + "." + n.slice(i)
        : "0." + new Array(1 - i).join("0") + Ha(e, Math.max(0, t + i - 1))[0];
}
function ZO(e, t) {
  var r = Ha(e, t);
  if (!r) return e + "";
  var n = r[0],
    o = r[1];
  return o < 0
    ? "0." + new Array(-o).join("0") + n
    : n.length > o + 1
      ? n.slice(0, o + 1) + "." + n.slice(o + 1)
      : n + new Array(o - n.length + 2).join("0");
}
const JO = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: pB,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ZO(e * 100, t),
  r: ZO,
  s: mB,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function QO(e) {
  return e;
}
var eS = Array.prototype.map,
  tS = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xB5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function gB(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? QO
        : dB(eS.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    n = e.currency === void 0 ? "" : e.currency[1] + "",
    o = e.decimal === void 0 ? "." : e.decimal + "",
    i = e.numerals === void 0 ? QO : hB(eS.call(e.numerals, String)),
    a = e.percent === void 0 ? "%" : e.percent + "",
    c = e.minus === void 0 ? "\u2212" : e.minus + "",
    u = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(f, p) {
    f = Io(f);
    var h = f.fill,
      v = f.align,
      d = f.sign,
      y = f.symbol,
      m = f.zero,
      b = f.width,
      x = f.comma,
      g = f.precision,
      O = f.trim,
      S = f.type;
    S === "n"
      ? ((x = !0), (S = "g"))
      : JO[S] || (g === void 0 && (g = 12), (O = !0), (S = "g")),
      (m || (h === "0" && v === "=")) && ((m = !0), (h = "0"), (v = "="));
    var j =
        (p && p.prefix !== void 0 ? p.prefix : "") +
        (y === "$"
          ? r
          : y === "#" && /[boxX]/.test(S)
            ? "0" + S.toLowerCase()
            : ""),
      k =
        (y === "$" ? n : /[%p]/.test(S) ? a : "") +
        (p && p.suffix !== void 0 ? p.suffix : ""),
      A = JO[S],
      D = /[defgprs%]/.test(S);
    g =
      g === void 0
        ? 6
        : /[gprs]/.test(S)
          ? Math.max(1, Math.min(21, g))
          : Math.max(0, Math.min(20, g));
    function M(_) {
      var C = j,
        T = k,
        R,
        N,
        z;
      if (S === "c") (T = A(_) + T), (_ = "");
      else {
        _ = +_;
        var W = _ < 0 || 1 / _ < 0;
        if (
          ((_ = isNaN(_) ? u : A(Math.abs(_), g)),
          O && (_ = vB(_)),
          W && +_ == 0 && d !== "+" && (W = !1),
          (C = (W ? (d === "(" ? d : c) : d === "-" || d === "(" ? "" : d) + C),
          (T =
            (S === "s" && !isNaN(_) && Wa !== void 0 ? tS[8 + Wa / 3] : "") +
            T +
            (W && d === "(" ? ")" : "")),
          D)
        ) {
          for (R = -1, N = _.length; ++R < N; )
            if (((z = _.charCodeAt(R)), 48 > z || z > 57)) {
              (T = (z === 46 ? o + _.slice(R + 1) : _.slice(R)) + T),
                (_ = _.slice(0, R));
              break;
            }
        }
      }
      x && !m && (_ = t(_, 1 / 0));
      var U = C.length + _.length + T.length,
        B = U < b ? new Array(b - U + 1).join(h) : "";
      switch (
        (x && m && ((_ = t(B + _, B.length ? b - T.length : 1 / 0)), (B = "")),
        v)
      ) {
        case "<":
          _ = C + _ + T + B;
          break;
        case "=":
          _ = C + B + _ + T;
          break;
        case "^":
          _ = B.slice(0, (U = B.length >> 1)) + C + _ + T + B.slice(U);
          break;
        default:
          _ = B + C + _ + T;
          break;
      }
      return i(_);
    }
    return (
      (M.toString = function () {
        return f + "";
      }),
      M
    );
  }
  function l(f, p) {
    var h = Math.max(-8, Math.min(8, Math.floor(On(p) / 3))) * 3,
      v = Math.pow(10, -h),
      d = s(((f = Io(f)), (f.type = "f"), f), { suffix: tS[8 + h / 3] });
    return function (y) {
      return d(v * y);
    };
  }
  return { format: s, formatPrefix: l };
}
var qa, md, rS;
bB({ thousands: ",", grouping: [3], currency: ["$", ""] });
function bB(e) {
  return (qa = gB(e)), (md = qa.format), (rS = qa.formatPrefix), qa;
}
function wB(e) {
  return Math.max(0, -On(Math.abs(e)));
}
function xB(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(On(t) / 3))) * 3 - On(Math.abs(e)),
  );
}
function OB(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, On(t) - On(e)) + 1
  );
}
function nS(e, t, r, n) {
  var o = od(e, t, r),
    i;
  switch (((n = Io(n ?? ",f")), n.type)) {
    case "s": {
      var a = Math.max(Math.abs(e), Math.abs(t));
      return (
        n.precision == null && !isNaN((i = xB(o, a))) && (n.precision = i),
        rS(n, a)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((i = OB(o, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null &&
        !isNaN((i = wB(o))) &&
        (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return md(n);
}
function pr(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return rd(n[0], n[n.length - 1], r ?? 10);
    }),
    (e.tickFormat = function (r, n) {
      var o = t();
      return nS(o[0], o[o.length - 1], r ?? 10, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        o = 0,
        i = n.length - 1,
        a = n[o],
        c = n[i],
        u,
        s,
        l = 10;
      for (
        c < a && ((s = a), (a = c), (c = s), (s = o), (o = i), (i = s));
        l-- > 0;

      ) {
        if (((s = nd(a, c, r)), s === u)) return (n[o] = a), (n[i] = c), t(n);
        if (s > 0) (a = Math.floor(a / s) * s), (c = Math.ceil(c / s) * s);
        else if (s < 0) (a = Math.ceil(a * s) / s), (c = Math.floor(c * s) / s);
        else break;
        u = s;
      }
      return e;
    }),
    e
  );
}
function Ga() {
  var e = yd();
  return (
    (e.copy = function () {
      return Do(e, Ga());
    }),
    ct.apply(e, arguments),
    pr(e)
  );
}
function oS(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, Ua)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return oS(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, Ua) : [0, 1]),
    pr(r)
  );
}
function iS(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    o = e[r],
    i = e[n],
    a;
  return (
    i < o && ((a = r), (r = n), (n = a), (a = o), (o = i), (i = a)),
    (e[r] = t.floor(o)),
    (e[n] = t.ceil(i)),
    e
  );
}
function aS(e) {
  return Math.log(e);
}
function cS(e) {
  return Math.exp(e);
}
function SB(e) {
  return -Math.log(-e);
}
function jB(e) {
  return -Math.exp(-e);
}
function kB(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function PB(e) {
  return e === 10 ? kB : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function EB(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function uS(e) {
  return (t, r) => -e(-t, r);
}
function gd(e) {
  const t = e(aS, cS),
    r = t.domain;
  let n = 10,
    o,
    i;
  function a() {
    return (
      (o = EB(n)),
      (i = PB(n)),
      r()[0] < 0 ? ((o = uS(o)), (i = uS(i)), e(SB, jB)) : e(aS, cS),
      t
    );
  }
  return (
    (t.base = function (c) {
      return arguments.length ? ((n = +c), a()) : n;
    }),
    (t.domain = function (c) {
      return arguments.length ? (r(c), a()) : r();
    }),
    (t.ticks = (c) => {
      const u = r();
      let s = u[0],
        l = u[u.length - 1];
      const f = l < s;
      f && ([s, l] = [l, s]);
      let p = o(s),
        h = o(l),
        v,
        d;
      const y = c == null ? 10 : +c;
      let m = [];
      if (!(n % 1) && h - p < y) {
        if (((p = Math.floor(p)), (h = Math.ceil(h)), s > 0)) {
          for (; p <= h; ++p)
            for (v = 1; v < n; ++v)
              if (((d = p < 0 ? v / i(-p) : v * i(p)), !(d < s))) {
                if (d > l) break;
                m.push(d);
              }
        } else
          for (; p <= h; ++p)
            for (v = n - 1; v >= 1; --v)
              if (((d = p > 0 ? v / i(-p) : v * i(p)), !(d < s))) {
                if (d > l) break;
                m.push(d);
              }
        m.length * 2 < y && (m = rd(s, l, y));
      } else m = rd(p, h, Math.min(h - p, y)).map(i);
      return f ? m.reverse() : m;
    }),
    (t.tickFormat = (c, u) => {
      if (
        (c == null && (c = 10),
        u == null && (u = n === 10 ? "s" : ","),
        typeof u != "function" &&
          (!(n % 1) && (u = Io(u)).precision == null && (u.trim = !0),
          (u = md(u))),
        c === 1 / 0)
      )
        return u;
      const s = Math.max(1, (n * c) / t.ticks().length);
      return (l) => {
        let f = l / i(Math.round(o(l)));
        return f * n < n - 0.5 && (f *= n), f <= s ? u(l) : "";
      };
    }),
    (t.nice = () =>
      r(
        iS(r(), {
          floor: (c) => i(Math.floor(o(c))),
          ceil: (c) => i(Math.ceil(o(c))),
        }),
      )),
    t
  );
}
function sS() {
  const e = gd($a()).domain([1, 10]);
  return (e.copy = () => Do(e, sS()).base(e.base())), ct.apply(e, arguments), e;
}
function lS(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function fS(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function bd(e) {
  var t = 1,
    r = e(lS(t), fS(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(lS((t = +n)), fS(t)) : t;
    }),
    pr(r)
  );
}
function pS() {
  var e = bd($a());
  return (
    (e.copy = function () {
      return Do(e, pS()).constant(e.constant());
    }),
    ct.apply(e, arguments)
  );
}
function dS(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function MB(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function _B(e) {
  return e < 0 ? -e * e : e * e;
}
function wd(e) {
  var t = e(Ve, Ve),
    r = 1;
  function n() {
    return r === 1 ? e(Ve, Ve) : r === 0.5 ? e(MB, _B) : e(dS(r), dS(1 / r));
  }
  return (
    (t.exponent = function (o) {
      return arguments.length ? ((r = +o), n()) : r;
    }),
    pr(t)
  );
}
function xd() {
  var e = wd($a());
  return (
    (e.copy = function () {
      return Do(e, xd()).exponent(e.exponent());
    }),
    ct.apply(e, arguments),
    e
  );
}
function AB() {
  return xd.apply(null, arguments).exponent(0.5);
}
function hS(e) {
  return Math.sign(e) * e * e;
}
function TB(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function yS() {
  var e = yd(),
    t = [0, 1],
    r = !1,
    n;
  function o(i) {
    var a = TB(e(i));
    return isNaN(a) ? n : r ? Math.round(a) : a;
  }
  return (
    (o.invert = function (i) {
      return e.invert(hS(i));
    }),
    (o.domain = function (i) {
      return arguments.length ? (e.domain(i), o) : e.domain();
    }),
    (o.range = function (i) {
      return arguments.length
        ? (e.range((t = Array.from(i, Ua)).map(hS)), o)
        : t.slice();
    }),
    (o.rangeRound = function (i) {
      return o.range(i).round(!0);
    }),
    (o.round = function (i) {
      return arguments.length ? ((r = !!i), o) : r;
    }),
    (o.clamp = function (i) {
      return arguments.length ? (e.clamp(i), o) : e.clamp();
    }),
    (o.unknown = function (i) {
      return arguments.length ? ((n = i), o) : n;
    }),
    (o.copy = function () {
      return yS(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    ct.apply(o, arguments),
    pr(o)
  );
}
function vS() {
  var e = [],
    t = [],
    r = [],
    n;
  function o() {
    var a = 0,
      c = Math.max(1, t.length);
    for (r = new Array(c - 1); ++a < c; ) r[a - 1] = R6(e, a / c);
    return i;
  }
  function i(a) {
    return a == null || isNaN((a = +a)) ? n : t[ko(r, a)];
  }
  return (
    (i.invertExtent = function (a) {
      var c = t.indexOf(a);
      return c < 0
        ? [NaN, NaN]
        : [c > 0 ? r[c - 1] : e[0], c < r.length ? r[c] : e[e.length - 1]];
    }),
    (i.domain = function (a) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let c of a) c != null && !isNaN((c = +c)) && e.push(c);
      return e.sort(fr), o();
    }),
    (i.range = function (a) {
      return arguments.length ? ((t = Array.from(a)), o()) : t.slice();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.quantiles = function () {
      return r.slice();
    }),
    (i.copy = function () {
      return vS().domain(e).range(t).unknown(n);
    }),
    ct.apply(i, arguments)
  );
}
function mS() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    o = [0, 1],
    i;
  function a(u) {
    return u != null && u <= u ? o[ko(n, u, 0, r)] : i;
  }
  function c() {
    var u = -1;
    for (n = new Array(r); ++u < r; )
      n[u] = ((u + 1) * t - (u - r) * e) / (r + 1);
    return a;
  }
  return (
    (a.domain = function (u) {
      return arguments.length
        ? (([e, t] = u), (e = +e), (t = +t), c())
        : [e, t];
    }),
    (a.range = function (u) {
      return arguments.length
        ? ((r = (o = Array.from(u)).length - 1), c())
        : o.slice();
    }),
    (a.invertExtent = function (u) {
      var s = o.indexOf(u);
      return s < 0
        ? [NaN, NaN]
        : s < 1
          ? [e, n[0]]
          : s >= r
            ? [n[r - 1], t]
            : [n[s - 1], n[s]];
    }),
    (a.unknown = function (u) {
      return arguments.length && (i = u), a;
    }),
    (a.thresholds = function () {
      return n.slice();
    }),
    (a.copy = function () {
      return mS().domain([e, t]).range(o).unknown(i);
    }),
    ct.apply(pr(a), arguments)
  );
}
function gS() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function o(i) {
    return i != null && i <= i ? t[ko(e, i, 0, n)] : r;
  }
  return (
    (o.domain = function (i) {
      return arguments.length
        ? ((e = Array.from(i)), (n = Math.min(e.length, t.length - 1)), o)
        : e.slice();
    }),
    (o.range = function (i) {
      return arguments.length
        ? ((t = Array.from(i)), (n = Math.min(e.length, t.length - 1)), o)
        : t.slice();
    }),
    (o.invertExtent = function (i) {
      var a = t.indexOf(i);
      return [e[a - 1], e[a]];
    }),
    (o.unknown = function (i) {
      return arguments.length ? ((r = i), o) : r;
    }),
    (o.copy = function () {
      return gS().domain(e).range(t).unknown(r);
    }),
    ct.apply(o, arguments)
  );
}
const Od = new Date(),
  Sd = new Date();
function De(e, t, r, n) {
  function o(i) {
    return e((i = arguments.length === 0 ? new Date() : new Date(+i))), i;
  }
  return (
    (o.floor = (i) => (e((i = new Date(+i))), i)),
    (o.ceil = (i) => (e((i = new Date(i - 1))), t(i, 1), e(i), i)),
    (o.round = (i) => {
      const a = o(i),
        c = o.ceil(i);
      return i - a < c - i ? a : c;
    }),
    (o.offset = (i, a) => (
      t((i = new Date(+i)), a == null ? 1 : Math.floor(a)), i
    )),
    (o.range = (i, a, c) => {
      const u = [];
      if (
        ((i = o.ceil(i)),
        (c = c == null ? 1 : Math.floor(c)),
        !(i < a) || !(c > 0))
      )
        return u;
      let s;
      do u.push((s = new Date(+i))), t(i, c), e(i);
      while (s < i && i < a);
      return u;
    }),
    (o.filter = (i) =>
      De(
        (a) => {
          if (a >= a) for (; e(a), !i(a); ) a.setTime(a - 1);
        },
        (a, c) => {
          if (a >= a)
            if (c < 0) for (; ++c <= 0; ) for (; t(a, -1), !i(a); );
            else for (; --c >= 0; ) for (; t(a, 1), !i(a); );
        },
      )),
    r &&
      ((o.count = (i, a) => (
        Od.setTime(+i), Sd.setTime(+a), e(Od), e(Sd), Math.floor(r(Od, Sd))
      )),
      (o.every = (i) => (
        (i = Math.floor(i)),
        !isFinite(i) || !(i > 0)
          ? null
          : i > 1
            ? o.filter(
                n ? (a) => n(a) % i === 0 : (a) => o.count(0, a) % i === 0,
              )
            : o
      ))),
    o
  );
}
const Va = De(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
(Va.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? De(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, r) => {
            t.setTime(+t + r * e);
          },
          (t, r) => (r - t) / e,
        )
      : Va
)),
  Va.range;
const Vt = 1e3,
  ut = Vt * 60,
  Xt = ut * 60,
  Kt = Xt * 24,
  jd = Kt * 7,
  bS = Kt * 30,
  kd = Kt * 365,
  Rr = De(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * Vt);
    },
    (e, t) => (t - e) / Vt,
    (e) => e.getUTCSeconds(),
  );
Rr.range;
const Pd = De(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Vt);
  },
  (e, t) => {
    e.setTime(+e + t * ut);
  },
  (e, t) => (t - e) / ut,
  (e) => e.getMinutes(),
);
Pd.range;
const Ed = De(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * ut);
  },
  (e, t) => (t - e) / ut,
  (e) => e.getUTCMinutes(),
);
Ed.range;
const Md = De(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * Vt - e.getMinutes() * ut,
    );
  },
  (e, t) => {
    e.setTime(+e + t * Xt);
  },
  (e, t) => (t - e) / Xt,
  (e) => e.getHours(),
);
Md.range;
const _d = De(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Xt);
  },
  (e, t) => (t - e) / Xt,
  (e) => e.getUTCHours(),
);
_d.range;
const No = De(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ut) / Kt,
  (e) => e.getDate() - 1,
);
No.range;
const Xa = De(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Kt,
  (e) => e.getUTCDate() - 1,
);
Xa.range;
const wS = De(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Kt,
  (e) => Math.floor(e / Kt),
);
wS.range;
function Lr(e) {
  return De(
    (t) => {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    (t, r) => {
      t.setDate(t.getDate() + r * 7);
    },
    (t, r) =>
      (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * ut) / jd,
  );
}
const Ka = Lr(0),
  Ya = Lr(1),
  CB = Lr(2),
  DB = Lr(3),
  Sn = Lr(4),
  IB = Lr(5),
  NB = Lr(6);
Ka.range, Ya.range, CB.range, DB.range, Sn.range, IB.range, NB.range;
function Br(e) {
  return De(
    (t) => {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    (t, r) => (r - t) / jd,
  );
}
const Za = Br(0),
  Ja = Br(1),
  RB = Br(2),
  LB = Br(3),
  jn = Br(4),
  BB = Br(5),
  zB = Br(6);
Za.range, Ja.range, RB.range, LB.range, jn.range, BB.range, zB.range;
const Ad = De(
  (e) => {
    e.setDate(1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
Ad.range;
const Td = De(
  (e) => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
Td.range;
const Yt = De(
  (e) => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
(Yt.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : De(
        (t) => {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0);
        },
        (t, r) => {
          t.setFullYear(t.getFullYear() + r * e);
        },
      )),
  Yt.range;
const Zt = De(
  (e) => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
(Zt.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : De(
        (t) => {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0);
        },
        (t, r) => {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        },
      )),
  Zt.range;
function xS(e, t, r, n, o, i) {
  const a = [
    [Rr, 1, Vt],
    [Rr, 5, 5 * Vt],
    [Rr, 15, 15 * Vt],
    [Rr, 30, 30 * Vt],
    [i, 1, ut],
    [i, 5, 5 * ut],
    [i, 15, 15 * ut],
    [i, 30, 30 * ut],
    [o, 1, Xt],
    [o, 3, 3 * Xt],
    [o, 6, 6 * Xt],
    [o, 12, 12 * Xt],
    [n, 1, Kt],
    [n, 2, 2 * Kt],
    [r, 1, jd],
    [t, 1, bS],
    [t, 3, 3 * bS],
    [e, 1, kd],
  ];
  function c(s, l, f) {
    const p = l < s;
    p && ([s, l] = [l, s]);
    const h = f && typeof f.range == "function" ? f : u(s, l, f),
      v = h ? h.range(s, +l + 1) : [];
    return p ? v.reverse() : v;
  }
  function u(s, l, f) {
    const p = Math.abs(l - s) / f,
      h = td(([, , y]) => y).right(a, p);
    if (h === a.length) return e.every(od(s / kd, l / kd, f));
    if (h === 0) return Va.every(Math.max(od(s, l, f), 1));
    const [v, d] = a[p / a[h - 1][2] < a[h][2] / p ? h - 1 : h];
    return v.every(d);
  }
  return [c, u];
}
const [FB, UB] = xS(Zt, Td, Za, wS, _d, Ed),
  [$B, HB] = xS(Yt, Ad, Ka, No, Md, Pd);
function Cd(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Dd(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Ro(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function WB(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    o = e.periods,
    i = e.days,
    a = e.shortDays,
    c = e.months,
    u = e.shortMonths,
    s = Lo(o),
    l = Bo(o),
    f = Lo(i),
    p = Bo(i),
    h = Lo(a),
    v = Bo(a),
    d = Lo(c),
    y = Bo(c),
    m = Lo(u),
    b = Bo(u),
    x = {
      a: z,
      A: W,
      b: U,
      B,
      c: null,
      d: ES,
      e: ES,
      f: d8,
      g: S8,
      G: k8,
      H: l8,
      I: f8,
      j: p8,
      L: MS,
      m: h8,
      M: y8,
      p: P,
      q: L,
      Q: IS,
      s: NS,
      S: v8,
      u: m8,
      U: g8,
      V: b8,
      w: w8,
      W: x8,
      x: null,
      X: null,
      y: O8,
      Y: j8,
      Z: P8,
      "%": DS,
    },
    g = {
      a: X,
      A: K,
      b: Y,
      B: Q,
      c: null,
      d: AS,
      e: AS,
      f: A8,
      g: F8,
      G: $8,
      H: E8,
      I: M8,
      j: _8,
      L: TS,
      m: T8,
      M: C8,
      p: q,
      q: oe,
      Q: IS,
      s: NS,
      S: D8,
      u: I8,
      U: N8,
      V: R8,
      w: L8,
      W: B8,
      x: null,
      X: null,
      y: z8,
      Y: U8,
      Z: H8,
      "%": DS,
    },
    O = {
      a: D,
      A: M,
      b: _,
      B: C,
      c: T,
      d: kS,
      e: kS,
      f: a8,
      g: jS,
      G: SS,
      H: PS,
      I: PS,
      j: r8,
      L: i8,
      m: t8,
      M: n8,
      p: A,
      q: e8,
      Q: u8,
      s: s8,
      S: o8,
      u: KB,
      U: YB,
      V: ZB,
      w: XB,
      W: JB,
      x: R,
      X: N,
      y: jS,
      Y: SS,
      Z: QB,
      "%": c8,
    };
  (x.x = S(r, x)),
    (x.X = S(n, x)),
    (x.c = S(t, x)),
    (g.x = S(r, g)),
    (g.X = S(n, g)),
    (g.c = S(t, g));
  function S(F, G) {
    return function (Z) {
      var $ = [],
        pe = -1,
        ae = 0,
        Oe = F.length,
        Se,
        ze,
        Nt;
      for (Z instanceof Date || (Z = new Date(+Z)); ++pe < Oe; )
        F.charCodeAt(pe) === 37 &&
          ($.push(F.slice(ae, pe)),
          (ze = OS[(Se = F.charAt(++pe))]) != null
            ? (Se = F.charAt(++pe))
            : (ze = Se === "e" ? " " : "0"),
          (Nt = G[Se]) && (Se = Nt(Z, ze)),
          $.push(Se),
          (ae = pe + 1));
      return $.push(F.slice(ae, pe)), $.join("");
    };
  }
  function j(F, G) {
    return function (Z) {
      var $ = Ro(1900, void 0, 1),
        pe = k($, F, (Z += ""), 0),
        ae,
        Oe;
      if (pe != Z.length) return null;
      if ("Q" in $) return new Date($.Q);
      if ("s" in $) return new Date($.s * 1e3 + ("L" in $ ? $.L : 0));
      if (
        (G && !("Z" in $) && ($.Z = 0),
        "p" in $ && ($.H = ($.H % 12) + $.p * 12),
        $.m === void 0 && ($.m = "q" in $ ? $.q : 0),
        "V" in $)
      ) {
        if ($.V < 1 || $.V > 53) return null;
        "w" in $ || ($.w = 1),
          "Z" in $
            ? ((ae = Dd(Ro($.y, 0, 1))),
              (Oe = ae.getUTCDay()),
              (ae = Oe > 4 || Oe === 0 ? Ja.ceil(ae) : Ja(ae)),
              (ae = Xa.offset(ae, ($.V - 1) * 7)),
              ($.y = ae.getUTCFullYear()),
              ($.m = ae.getUTCMonth()),
              ($.d = ae.getUTCDate() + (($.w + 6) % 7)))
            : ((ae = Cd(Ro($.y, 0, 1))),
              (Oe = ae.getDay()),
              (ae = Oe > 4 || Oe === 0 ? Ya.ceil(ae) : Ya(ae)),
              (ae = No.offset(ae, ($.V - 1) * 7)),
              ($.y = ae.getFullYear()),
              ($.m = ae.getMonth()),
              ($.d = ae.getDate() + (($.w + 6) % 7)));
      } else
        ("W" in $ || "U" in $) &&
          ("w" in $ || ($.w = "u" in $ ? $.u % 7 : "W" in $ ? 1 : 0),
          (Oe =
            "Z" in $
              ? Dd(Ro($.y, 0, 1)).getUTCDay()
              : Cd(Ro($.y, 0, 1)).getDay()),
          ($.m = 0),
          ($.d =
            "W" in $
              ? (($.w + 6) % 7) + $.W * 7 - ((Oe + 5) % 7)
              : $.w + $.U * 7 - ((Oe + 6) % 7)));
      return "Z" in $
        ? (($.H += ($.Z / 100) | 0), ($.M += $.Z % 100), Dd($))
        : Cd($);
    };
  }
  function k(F, G, Z, $) {
    for (var pe = 0, ae = G.length, Oe = Z.length, Se, ze; pe < ae; ) {
      if ($ >= Oe) return -1;
      if (((Se = G.charCodeAt(pe++)), Se === 37)) {
        if (
          ((Se = G.charAt(pe++)),
          (ze = O[Se in OS ? G.charAt(pe++) : Se]),
          !ze || ($ = ze(F, Z, $)) < 0)
        )
          return -1;
      } else if (Se != Z.charCodeAt($++)) return -1;
    }
    return $;
  }
  function A(F, G, Z) {
    var $ = s.exec(G.slice(Z));
    return $ ? ((F.p = l.get($[0].toLowerCase())), Z + $[0].length) : -1;
  }
  function D(F, G, Z) {
    var $ = h.exec(G.slice(Z));
    return $ ? ((F.w = v.get($[0].toLowerCase())), Z + $[0].length) : -1;
  }
  function M(F, G, Z) {
    var $ = f.exec(G.slice(Z));
    return $ ? ((F.w = p.get($[0].toLowerCase())), Z + $[0].length) : -1;
  }
  function _(F, G, Z) {
    var $ = m.exec(G.slice(Z));
    return $ ? ((F.m = b.get($[0].toLowerCase())), Z + $[0].length) : -1;
  }
  function C(F, G, Z) {
    var $ = d.exec(G.slice(Z));
    return $ ? ((F.m = y.get($[0].toLowerCase())), Z + $[0].length) : -1;
  }
  function T(F, G, Z) {
    return k(F, t, G, Z);
  }
  function R(F, G, Z) {
    return k(F, r, G, Z);
  }
  function N(F, G, Z) {
    return k(F, n, G, Z);
  }
  function z(F) {
    return a[F.getDay()];
  }
  function W(F) {
    return i[F.getDay()];
  }
  function U(F) {
    return u[F.getMonth()];
  }
  function B(F) {
    return c[F.getMonth()];
  }
  function P(F) {
    return o[+(F.getHours() >= 12)];
  }
  function L(F) {
    return 1 + ~~(F.getMonth() / 3);
  }
  function X(F) {
    return a[F.getUTCDay()];
  }
  function K(F) {
    return i[F.getUTCDay()];
  }
  function Y(F) {
    return u[F.getUTCMonth()];
  }
  function Q(F) {
    return c[F.getUTCMonth()];
  }
  function q(F) {
    return o[+(F.getUTCHours() >= 12)];
  }
  function oe(F) {
    return 1 + ~~(F.getUTCMonth() / 3);
  }
  return {
    format: function (F) {
      var G = S((F += ""), x);
      return (
        (G.toString = function () {
          return F;
        }),
        G
      );
    },
    parse: function (F) {
      var G = j((F += ""), !1);
      return (
        (G.toString = function () {
          return F;
        }),
        G
      );
    },
    utcFormat: function (F) {
      var G = S((F += ""), g);
      return (
        (G.toString = function () {
          return F;
        }),
        G
      );
    },
    utcParse: function (F) {
      var G = j((F += ""), !0);
      return (
        (G.toString = function () {
          return F;
        }),
        G
      );
    },
  };
}
var OS = { "-": "", _: " ", 0: "0" },
  Le = /^\s*\d+/,
  qB = /^%/,
  GB = /[\\^$*+?|[\]().{}]/g;
function he(e, t, r) {
  var n = e < 0 ? "-" : "",
    o = (n ? -e : e) + "",
    i = o.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + o : o);
}
function VB(e) {
  return e.replace(GB, "\\$&");
}
function Lo(e) {
  return new RegExp("^(?:" + e.map(VB).join("|") + ")", "i");
}
function Bo(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function XB(e, t, r) {
  var n = Le.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function KB(e, t, r) {
  var n = Le.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function YB(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function ZB(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function JB(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function SS(e, t, r) {
  var n = Le.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function jS(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function QB(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n
    ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
    : -1;
}
function e8(e, t, r) {
  var n = Le.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function t8(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function kS(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function r8(e, t, r) {
  var n = Le.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function PS(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function n8(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function o8(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function i8(e, t, r) {
  var n = Le.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function a8(e, t, r) {
  var n = Le.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function c8(e, t, r) {
  var n = qB.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function u8(e, t, r) {
  var n = Le.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function s8(e, t, r) {
  var n = Le.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function ES(e, t) {
  return he(e.getDate(), t, 2);
}
function l8(e, t) {
  return he(e.getHours(), t, 2);
}
function f8(e, t) {
  return he(e.getHours() % 12 || 12, t, 2);
}
function p8(e, t) {
  return he(1 + No.count(Yt(e), e), t, 3);
}
function MS(e, t) {
  return he(e.getMilliseconds(), t, 3);
}
function d8(e, t) {
  return MS(e, t) + "000";
}
function h8(e, t) {
  return he(e.getMonth() + 1, t, 2);
}
function y8(e, t) {
  return he(e.getMinutes(), t, 2);
}
function v8(e, t) {
  return he(e.getSeconds(), t, 2);
}
function m8(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function g8(e, t) {
  return he(Ka.count(Yt(e) - 1, e), t, 2);
}
function _S(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Sn(e) : Sn.ceil(e);
}
function b8(e, t) {
  return (e = _S(e)), he(Sn.count(Yt(e), e) + (Yt(e).getDay() === 4), t, 2);
}
function w8(e) {
  return e.getDay();
}
function x8(e, t) {
  return he(Ya.count(Yt(e) - 1, e), t, 2);
}
function O8(e, t) {
  return he(e.getFullYear() % 100, t, 2);
}
function S8(e, t) {
  return (e = _S(e)), he(e.getFullYear() % 100, t, 2);
}
function j8(e, t) {
  return he(e.getFullYear() % 1e4, t, 4);
}
function k8(e, t) {
  var r = e.getDay();
  return (
    (e = r >= 4 || r === 0 ? Sn(e) : Sn.ceil(e)),
    he(e.getFullYear() % 1e4, t, 4)
  );
}
function P8(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    he((t / 60) | 0, "0", 2) +
    he(t % 60, "0", 2)
  );
}
function AS(e, t) {
  return he(e.getUTCDate(), t, 2);
}
function E8(e, t) {
  return he(e.getUTCHours(), t, 2);
}
function M8(e, t) {
  return he(e.getUTCHours() % 12 || 12, t, 2);
}
function _8(e, t) {
  return he(1 + Xa.count(Zt(e), e), t, 3);
}
function TS(e, t) {
  return he(e.getUTCMilliseconds(), t, 3);
}
function A8(e, t) {
  return TS(e, t) + "000";
}
function T8(e, t) {
  return he(e.getUTCMonth() + 1, t, 2);
}
function C8(e, t) {
  return he(e.getUTCMinutes(), t, 2);
}
function D8(e, t) {
  return he(e.getUTCSeconds(), t, 2);
}
function I8(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function N8(e, t) {
  return he(Za.count(Zt(e) - 1, e), t, 2);
}
function CS(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? jn(e) : jn.ceil(e);
}
function R8(e, t) {
  return (e = CS(e)), he(jn.count(Zt(e), e) + (Zt(e).getUTCDay() === 4), t, 2);
}
function L8(e) {
  return e.getUTCDay();
}
function B8(e, t) {
  return he(Ja.count(Zt(e) - 1, e), t, 2);
}
function z8(e, t) {
  return he(e.getUTCFullYear() % 100, t, 2);
}
function F8(e, t) {
  return (e = CS(e)), he(e.getUTCFullYear() % 100, t, 2);
}
function U8(e, t) {
  return he(e.getUTCFullYear() % 1e4, t, 4);
}
function $8(e, t) {
  var r = e.getUTCDay();
  return (
    (e = r >= 4 || r === 0 ? jn(e) : jn.ceil(e)),
    he(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function H8() {
  return "+0000";
}
function DS() {
  return "%";
}
function IS(e) {
  return +e;
}
function NS(e) {
  return Math.floor(+e / 1e3);
}
var kn, RS, LS;
W8({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
function W8(e) {
  return (
    (kn = WB(e)),
    (RS = kn.format),
    kn.parse,
    (LS = kn.utcFormat),
    kn.utcParse,
    kn
  );
}
function q8(e) {
  return new Date(e);
}
function G8(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Id(e, t, r, n, o, i, a, c, u, s) {
  var l = yd(),
    f = l.invert,
    p = l.domain,
    h = s(".%L"),
    v = s(":%S"),
    d = s("%I:%M"),
    y = s("%I %p"),
    m = s("%a %d"),
    b = s("%b %d"),
    x = s("%B"),
    g = s("%Y");
  function O(S) {
    return (
      u(S) < S
        ? h
        : c(S) < S
          ? v
          : a(S) < S
            ? d
            : i(S) < S
              ? y
              : n(S) < S
                ? o(S) < S
                  ? m
                  : b
                : r(S) < S
                  ? x
                  : g
    )(S);
  }
  return (
    (l.invert = function (S) {
      return new Date(f(S));
    }),
    (l.domain = function (S) {
      return arguments.length ? p(Array.from(S, G8)) : p().map(q8);
    }),
    (l.ticks = function (S) {
      var j = p();
      return e(j[0], j[j.length - 1], S ?? 10);
    }),
    (l.tickFormat = function (S, j) {
      return j == null ? O : s(j);
    }),
    (l.nice = function (S) {
      var j = p();
      return (
        (!S || typeof S.range != "function") &&
          (S = t(j[0], j[j.length - 1], S ?? 10)),
        S ? p(iS(j, S)) : l
      );
    }),
    (l.copy = function () {
      return Do(l, Id(e, t, r, n, o, i, a, c, u, s));
    }),
    l
  );
}
function V8() {
  return ct.apply(
    Id($B, HB, Yt, Ad, Ka, No, Md, Pd, Rr, RS).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function X8() {
  return ct.apply(
    Id(FB, UB, Zt, Td, Za, Xa, _d, Ed, Rr, LS).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Qa() {
  var e = 0,
    t = 1,
    r,
    n,
    o,
    i,
    a = Ve,
    c = !1,
    u;
  function s(f) {
    return f == null || isNaN((f = +f))
      ? u
      : a(
          o === 0
            ? 0.5
            : ((f = (i(f) - r) * o), c ? Math.max(0, Math.min(1, f)) : f),
        );
  }
  (s.domain = function (f) {
    return arguments.length
      ? (([e, t] = f),
        (r = i((e = +e))),
        (n = i((t = +t))),
        (o = r === n ? 0 : 1 / (n - r)),
        s)
      : [e, t];
  }),
    (s.clamp = function (f) {
      return arguments.length ? ((c = !!f), s) : c;
    }),
    (s.interpolator = function (f) {
      return arguments.length ? ((a = f), s) : a;
    });
  function l(f) {
    return function (p) {
      var h, v;
      return arguments.length ? (([h, v] = p), (a = f(h, v)), s) : [a(0), a(1)];
    };
  }
  return (
    (s.range = l(xn)),
    (s.rangeRound = l(dd)),
    (s.unknown = function (f) {
      return arguments.length ? ((u = f), s) : u;
    }),
    function (f) {
      return (
        (i = f), (r = f(e)), (n = f(t)), (o = r === n ? 0 : 1 / (n - r)), s
      );
    }
  );
}
function dr(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function BS() {
  var e = pr(Qa()(Ve));
  return (
    (e.copy = function () {
      return dr(e, BS());
    }),
    Gt.apply(e, arguments)
  );
}
function zS() {
  var e = gd(Qa()).domain([1, 10]);
  return (
    (e.copy = function () {
      return dr(e, zS()).base(e.base());
    }),
    Gt.apply(e, arguments)
  );
}
function FS() {
  var e = bd(Qa());
  return (
    (e.copy = function () {
      return dr(e, FS()).constant(e.constant());
    }),
    Gt.apply(e, arguments)
  );
}
function Nd() {
  var e = wd(Qa());
  return (
    (e.copy = function () {
      return dr(e, Nd()).exponent(e.exponent());
    }),
    Gt.apply(e, arguments)
  );
}
function K8() {
  return Nd.apply(null, arguments).exponent(0.5);
}
function US() {
  var e = [],
    t = Ve;
  function r(n) {
    if (n != null && !isNaN((n = +n)))
      return t((ko(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let o of n) o != null && !isNaN((o = +o)) && e.push(o);
      return e.sort(fr), r;
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, o) => t(o / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (o, i) => N6(e, i / n));
    }),
    (r.copy = function () {
      return US(t).domain(e);
    }),
    Gt.apply(r, arguments)
  );
}
function ec() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    o,
    i,
    a,
    c,
    u,
    s = Ve,
    l,
    f = !1,
    p;
  function h(d) {
    return isNaN((d = +d))
      ? p
      : ((d = 0.5 + ((d = +l(d)) - i) * (n * d < n * i ? c : u)),
        s(f ? Math.max(0, Math.min(1, d)) : d));
  }
  (h.domain = function (d) {
    return arguments.length
      ? (([e, t, r] = d),
        (o = l((e = +e))),
        (i = l((t = +t))),
        (a = l((r = +r))),
        (c = o === i ? 0 : 0.5 / (i - o)),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (n = i < o ? -1 : 1),
        h)
      : [e, t, r];
  }),
    (h.clamp = function (d) {
      return arguments.length ? ((f = !!d), h) : f;
    }),
    (h.interpolator = function (d) {
      return arguments.length ? ((s = d), h) : s;
    });
  function v(d) {
    return function (y) {
      var m, b, x;
      return arguments.length
        ? (([m, b, x] = y), (s = cB(d, [m, b, x])), h)
        : [s(0), s(0.5), s(1)];
    };
  }
  return (
    (h.range = v(xn)),
    (h.rangeRound = v(dd)),
    (h.unknown = function (d) {
      return arguments.length ? ((p = d), h) : p;
    }),
    function (d) {
      return (
        (l = d),
        (o = d(e)),
        (i = d(t)),
        (a = d(r)),
        (c = o === i ? 0 : 0.5 / (i - o)),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (n = i < o ? -1 : 1),
        h
      );
    }
  );
}
function $S() {
  var e = pr(ec()(Ve));
  return (
    (e.copy = function () {
      return dr(e, $S());
    }),
    Gt.apply(e, arguments)
  );
}
function HS() {
  var e = gd(ec()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return dr(e, HS()).base(e.base());
    }),
    Gt.apply(e, arguments)
  );
}
function WS() {
  var e = bd(ec());
  return (
    (e.copy = function () {
      return dr(e, WS()).constant(e.constant());
    }),
    Gt.apply(e, arguments)
  );
}
function Rd() {
  var e = wd(ec());
  return (
    (e.copy = function () {
      return dr(e, Rd()).exponent(e.exponent());
    }),
    Gt.apply(e, arguments)
  );
}
function Y8() {
  return Rd.apply(null, arguments).exponent(0.5);
}
const qS = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: Eo,
      scaleDiverging: $S,
      scaleDivergingLog: HS,
      scaleDivergingPow: Rd,
      scaleDivergingSqrt: Y8,
      scaleDivergingSymlog: WS,
      scaleIdentity: oS,
      scaleImplicit: id,
      scaleLinear: Ga,
      scaleLog: sS,
      scaleOrdinal: ad,
      scalePoint: Mo,
      scalePow: xd,
      scaleQuantile: vS,
      scaleQuantize: mS,
      scaleRadial: yS,
      scaleSequential: BS,
      scaleSequentialLog: zS,
      scaleSequentialPow: Nd,
      scaleSequentialQuantile: US,
      scaleSequentialSqrt: K8,
      scaleSequentialSymlog: FS,
      scaleSqrt: AB,
      scaleSymlog: pS,
      scaleThreshold: gS,
      scaleTime: V8,
      scaleUtc: X8,
      tickFormat: nS,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var Ld, GS;
function VS() {
  if (GS) return Ld;
  GS = 1;
  var e = un();
  function t(r, n, o) {
    for (var i = -1, a = r.length; ++i < a; ) {
      var c = r[i],
        u = n(c);
      if (u != null && (s === void 0 ? u === u && !e(u) : o(u, s)))
        var s = u,
          l = c;
    }
    return l;
  }
  return (Ld = t), Ld;
}
var Bd, XS;
function Z8() {
  if (XS) return Bd;
  XS = 1;
  function e(t, r) {
    return t > r;
  }
  return (Bd = e), Bd;
}
var zd, KS;
function J8() {
  if (KS) return zd;
  KS = 1;
  var e = VS(),
    t = Z8(),
    r = hn();
  function n(o) {
    return o && o.length ? e(o, r, t) : void 0;
  }
  return (zd = n), zd;
}
var Q8 = J8();
const tc = be(Q8);
var Fd, YS;
function ez() {
  if (YS) return Fd;
  YS = 1;
  function e(t, r) {
    return t < r;
  }
  return (Fd = e), Fd;
}
var Ud, ZS;
function tz() {
  if (ZS) return Ud;
  ZS = 1;
  var e = VS(),
    t = ez(),
    r = hn();
  function n(o) {
    return o && o.length ? e(o, r, t) : void 0;
  }
  return (Ud = n), Ud;
}
var rz = tz();
const rc = be(rz);
var $d, JS;
function nz() {
  if (JS) return $d;
  JS = 1;
  var e = nl(),
    t = lr(),
    r = _x(),
    n = Xe();
  function o(i, a) {
    var c = n(i) ? e : r;
    return c(i, t(a, 3));
  }
  return ($d = o), $d;
}
var Hd, QS;
function oz() {
  if (QS) return Hd;
  QS = 1;
  var e = xx(),
    t = nz();
  function r(n, o) {
    return e(t(n, o), 1);
  }
  return (Hd = r), Hd;
}
var iz = oz();
const az = be(iz);
var Wd, ej;
function cz() {
  if (ej) return Wd;
  ej = 1;
  var e = Wf();
  function t(r, n) {
    return e(r, n);
  }
  return (Wd = t), Wd;
}
var uz = cz();
const qd = be(uz);
var Pn = 1e9,
  sz = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  _y,
  Pe = !0,
  st = "[DecimalError] ",
  zr = st + "Invalid argument: ",
  Gd = st + "Exponent out of range: ",
  En = Math.floor,
  Fr = Math.pow,
  lz = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Qe,
  Be = 1e7,
  ke = 7,
  tj = 9007199254740991,
  nc = En(tj / ke),
  te = {};
(te.absoluteValue = te.abs =
  function () {
    var e = new this.constructor(this);
    return e.s && (e.s = 1), e;
  }),
  (te.comparedTo = te.cmp =
    function (e) {
      var t,
        r,
        n,
        o,
        i = this;
      if (((e = new i.constructor(e)), i.s !== e.s)) return i.s || -e.s;
      if (i.e !== e.e) return (i.e > e.e) ^ (i.s < 0) ? 1 : -1;
      for (n = i.d.length, o = e.d.length, t = 0, r = n < o ? n : o; t < r; ++t)
        if (i.d[t] !== e.d[t]) return (i.d[t] > e.d[t]) ^ (i.s < 0) ? 1 : -1;
      return n === o ? 0 : (n > o) ^ (i.s < 0) ? 1 : -1;
    }),
  (te.decimalPlaces = te.dp =
    function () {
      var e = this,
        t = e.d.length - 1,
        r = (t - e.e) * ke;
      if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
      return r < 0 ? 0 : r;
    }),
  (te.dividedBy = te.div =
    function (e) {
      return Jt(this, new this.constructor(e));
    }),
  (te.dividedToIntegerBy = te.idiv =
    function (e) {
      var t = this,
        r = t.constructor;
      return xe(Jt(t, new r(e), 0, 1), r.precision);
    }),
  (te.equals = te.eq =
    function (e) {
      return !this.cmp(e);
    }),
  (te.exponent = function () {
    return _e(this);
  }),
  (te.greaterThan = te.gt =
    function (e) {
      return this.cmp(e) > 0;
    }),
  (te.greaterThanOrEqualTo = te.gte =
    function (e) {
      return this.cmp(e) >= 0;
    }),
  (te.isInteger = te.isint =
    function () {
      return this.e > this.d.length - 2;
    }),
  (te.isNegative = te.isneg =
    function () {
      return this.s < 0;
    }),
  (te.isPositive = te.ispos =
    function () {
      return this.s > 0;
    }),
  (te.isZero = function () {
    return this.s === 0;
  }),
  (te.lessThan = te.lt =
    function (e) {
      return this.cmp(e) < 0;
    }),
  (te.lessThanOrEqualTo = te.lte =
    function (e) {
      return this.cmp(e) < 1;
    }),
  (te.logarithm = te.log =
    function (e) {
      var t,
        r = this,
        n = r.constructor,
        o = n.precision,
        i = o + 5;
      if (e === void 0) e = new n(10);
      else if (((e = new n(e)), e.s < 1 || e.eq(Qe))) throw Error(st + "NaN");
      if (r.s < 1) throw Error(st + (r.s ? "NaN" : "-Infinity"));
      return r.eq(Qe)
        ? new n(0)
        : ((Pe = !1), (t = Jt(zo(r, i), zo(e, i), i)), (Pe = !0), xe(t, o));
    }),
  (te.minus = te.sub =
    function (e) {
      var t = this;
      return (
        (e = new t.constructor(e)),
        t.s == e.s ? ij(t, e) : rj(t, ((e.s = -e.s), e))
      );
    }),
  (te.modulo = te.mod =
    function (e) {
      var t,
        r = this,
        n = r.constructor,
        o = n.precision;
      if (((e = new n(e)), !e.s)) throw Error(st + "NaN");
      return r.s
        ? ((Pe = !1), (t = Jt(r, e, 0, 1).times(e)), (Pe = !0), r.minus(t))
        : xe(new n(r), o);
    }),
  (te.naturalExponential = te.exp =
    function () {
      return nj(this);
    }),
  (te.naturalLogarithm = te.ln =
    function () {
      return zo(this);
    }),
  (te.negated = te.neg =
    function () {
      var e = new this.constructor(this);
      return (e.s = -e.s || 0), e;
    }),
  (te.plus = te.add =
    function (e) {
      var t = this;
      return (
        (e = new t.constructor(e)),
        t.s == e.s ? rj(t, e) : ij(t, ((e.s = -e.s), e))
      );
    }),
  (te.precision = te.sd =
    function (e) {
      var t,
        r,
        n,
        o = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(zr + e);
      if (
        ((t = _e(o) + 1),
        (n = o.d.length - 1),
        (r = n * ke + 1),
        (n = o.d[n]),
        n)
      ) {
        for (; n % 10 == 0; n /= 10) r--;
        for (n = o.d[0]; n >= 10; n /= 10) r++;
      }
      return e && t > r ? t : r;
    }),
  (te.squareRoot = te.sqrt =
    function () {
      var e,
        t,
        r,
        n,
        o,
        i,
        a,
        c = this,
        u = c.constructor;
      if (c.s < 1) {
        if (!c.s) return new u(0);
        throw Error(st + "NaN");
      }
      for (
        e = _e(c),
          Pe = !1,
          o = Math.sqrt(+c),
          o == 0 || o == 1 / 0
            ? ((t = Ct(c.d)),
              (t.length + e) % 2 == 0 && (t += "0"),
              (o = Math.sqrt(t)),
              (e = En((e + 1) / 2) - (e < 0 || e % 2)),
              o == 1 / 0
                ? (t = "5e" + e)
                : ((t = o.toExponential()),
                  (t = t.slice(0, t.indexOf("e") + 1) + e)),
              (n = new u(t)))
            : (n = new u(o.toString())),
          r = u.precision,
          o = a = r + 3;
        ;

      )
        if (
          ((i = n),
          (n = i.plus(Jt(c, i, a + 2)).times(0.5)),
          Ct(i.d).slice(0, a) === (t = Ct(n.d)).slice(0, a))
        ) {
          if (((t = t.slice(a - 3, a + 1)), o == a && t == "4999")) {
            if ((xe(i, r + 1, 0), i.times(i).eq(c))) {
              n = i;
              break;
            }
          } else if (t != "9999") break;
          a += 4;
        }
      return (Pe = !0), xe(n, r);
    }),
  (te.times = te.mul =
    function (e) {
      var t,
        r,
        n,
        o,
        i,
        a,
        c,
        u,
        s,
        l = this,
        f = l.constructor,
        p = l.d,
        h = (e = new f(e)).d;
      if (!l.s || !e.s) return new f(0);
      for (
        e.s *= l.s,
          r = l.e + e.e,
          u = p.length,
          s = h.length,
          u < s && ((i = p), (p = h), (h = i), (a = u), (u = s), (s = a)),
          i = [],
          a = u + s,
          n = a;
        n--;

      )
        i.push(0);
      for (n = s; --n >= 0; ) {
        for (t = 0, o = u + n; o > n; )
          (c = i[o] + h[n] * p[o - n - 1] + t),
            (i[o--] = c % Be | 0),
            (t = (c / Be) | 0);
        i[o] = (i[o] + t) % Be | 0;
      }
      for (; !i[--a]; ) i.pop();
      return (
        t ? ++r : i.shift(), (e.d = i), (e.e = r), Pe ? xe(e, f.precision) : e
      );
    }),
  (te.toDecimalPlaces = te.todp =
    function (e, t) {
      var r = this,
        n = r.constructor;
      return (
        (r = new n(r)),
        e === void 0
          ? r
          : (Tt(e, 0, Pn),
            t === void 0 ? (t = n.rounding) : Tt(t, 0, 8),
            xe(r, e + _e(r) + 1, t))
      );
    }),
  (te.toExponential = function (e, t) {
    var r,
      n = this,
      o = n.constructor;
    return (
      e === void 0
        ? (r = Ur(n, !0))
        : (Tt(e, 0, Pn),
          t === void 0 ? (t = o.rounding) : Tt(t, 0, 8),
          (n = xe(new o(n), e + 1, t)),
          (r = Ur(n, !0, e + 1))),
      r
    );
  }),
  (te.toFixed = function (e, t) {
    var r,
      n,
      o = this,
      i = o.constructor;
    return e === void 0
      ? Ur(o)
      : (Tt(e, 0, Pn),
        t === void 0 ? (t = i.rounding) : Tt(t, 0, 8),
        (n = xe(new i(o), e + _e(o) + 1, t)),
        (r = Ur(n.abs(), !1, e + _e(n) + 1)),
        o.isneg() && !o.isZero() ? "-" + r : r);
  }),
  (te.toInteger = te.toint =
    function () {
      var e = this,
        t = e.constructor;
      return xe(new t(e), _e(e) + 1, t.rounding);
    }),
  (te.toNumber = function () {
    return +this;
  }),
  (te.toPower = te.pow =
    function (e) {
      var t,
        r,
        n,
        o,
        i,
        a,
        c = this,
        u = c.constructor,
        s = 12,
        l = +(e = new u(e));
      if (!e.s) return new u(Qe);
      if (((c = new u(c)), !c.s)) {
        if (e.s < 1) throw Error(st + "Infinity");
        return c;
      }
      if (c.eq(Qe)) return c;
      if (((n = u.precision), e.eq(Qe))) return xe(c, n);
      if (((t = e.e), (r = e.d.length - 1), (a = t >= r), (i = c.s), a)) {
        if ((r = l < 0 ? -l : l) <= tj) {
          for (
            o = new u(Qe), t = Math.ceil(n / ke + 4), Pe = !1;
            r % 2 && ((o = o.times(c)), aj(o.d, t)), (r = En(r / 2)), r !== 0;

          )
            (c = c.times(c)), aj(c.d, t);
          return (Pe = !0), e.s < 0 ? new u(Qe).div(o) : xe(o, n);
        }
      } else if (i < 0) throw Error(st + "NaN");
      return (
        (i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
        (c.s = 1),
        (Pe = !1),
        (o = e.times(zo(c, n + s))),
        (Pe = !0),
        (o = nj(o)),
        (o.s = i),
        o
      );
    }),
  (te.toPrecision = function (e, t) {
    var r,
      n,
      o = this,
      i = o.constructor;
    return (
      e === void 0
        ? ((r = _e(o)), (n = Ur(o, r <= i.toExpNeg || r >= i.toExpPos)))
        : (Tt(e, 1, Pn),
          t === void 0 ? (t = i.rounding) : Tt(t, 0, 8),
          (o = xe(new i(o), e, t)),
          (r = _e(o)),
          (n = Ur(o, e <= r || r <= i.toExpNeg, e))),
      n
    );
  }),
  (te.toSignificantDigits = te.tosd =
    function (e, t) {
      var r = this,
        n = r.constructor;
      return (
        e === void 0
          ? ((e = n.precision), (t = n.rounding))
          : (Tt(e, 1, Pn), t === void 0 ? (t = n.rounding) : Tt(t, 0, 8)),
        xe(new n(r), e, t)
      );
    }),
  (te.toString =
    te.valueOf =
    te.val =
    te.toJSON =
    te[Symbol.for("nodejs.util.inspect.custom")] =
      function () {
        var e = this,
          t = _e(e),
          r = e.constructor;
        return Ur(e, t <= r.toExpNeg || t >= r.toExpPos);
      });
function rj(e, t) {
  var r,
    n,
    o,
    i,
    a,
    c,
    u,
    s,
    l = e.constructor,
    f = l.precision;
  if (!e.s || !t.s) return t.s || (t = new l(e)), Pe ? xe(t, f) : t;
  if (
    ((u = e.d),
    (s = t.d),
    (a = e.e),
    (o = t.e),
    (u = u.slice()),
    (i = a - o),
    i)
  ) {
    for (
      i < 0
        ? ((n = u), (i = -i), (c = s.length))
        : ((n = s), (o = a), (c = u.length)),
        a = Math.ceil(f / ke),
        c = a > c ? a + 1 : c + 1,
        i > c && ((i = c), (n.length = 1)),
        n.reverse();
      i--;

    )
      n.push(0);
    n.reverse();
  }
  for (
    c = u.length,
      i = s.length,
      c - i < 0 && ((i = c), (n = s), (s = u), (u = n)),
      r = 0;
    i;

  )
    (r = ((u[--i] = u[i] + s[i] + r) / Be) | 0), (u[i] %= Be);
  for (r && (u.unshift(r), ++o), c = u.length; u[--c] == 0; ) u.pop();
  return (t.d = u), (t.e = o), Pe ? xe(t, f) : t;
}
function Tt(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(zr + e);
}
function Ct(e) {
  var t,
    r,
    n,
    o = e.length - 1,
    i = "",
    a = e[0];
  if (o > 0) {
    for (i += a, t = 1; t < o; t++)
      (n = e[t] + ""), (r = ke - n.length), r && (i += hr(r)), (i += n);
    (a = e[t]), (n = a + ""), (r = ke - n.length), r && (i += hr(r));
  } else if (a === 0) return "0";
  for (; a % 10 === 0; ) a /= 10;
  return i + a;
}
var Jt = (function () {
  function e(n, o) {
    var i,
      a = 0,
      c = n.length;
    for (n = n.slice(); c--; )
      (i = n[c] * o + a), (n[c] = i % Be | 0), (a = (i / Be) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, o, i, a) {
    var c, u;
    if (i != a) u = i > a ? 1 : -1;
    else
      for (c = u = 0; c < i; c++)
        if (n[c] != o[c]) {
          u = n[c] > o[c] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, o, i) {
    for (var a = 0; i--; )
      (n[i] -= a), (a = n[i] < o[i] ? 1 : 0), (n[i] = a * Be + n[i] - o[i]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, o, i, a) {
    var c,
      u,
      s,
      l,
      f,
      p,
      h,
      v,
      d,
      y,
      m,
      b,
      x,
      g,
      O,
      S,
      j,
      k,
      A = n.constructor,
      D = n.s == o.s ? 1 : -1,
      M = n.d,
      _ = o.d;
    if (!n.s) return new A(n);
    if (!o.s) throw Error(st + "Division by zero");
    for (
      u = n.e - o.e,
        j = _.length,
        O = M.length,
        h = new A(D),
        v = h.d = [],
        s = 0;
      _[s] == (M[s] || 0);

    )
      ++s;
    if (
      (_[s] > (M[s] || 0) && --u,
      i == null
        ? (b = i = A.precision)
        : a
          ? (b = i + (_e(n) - _e(o)) + 1)
          : (b = i),
      b < 0)
    )
      return new A(0);
    if (((b = (b / ke + 2) | 0), (s = 0), j == 1))
      for (l = 0, _ = _[0], b++; (s < O || l) && b--; s++)
        (x = l * Be + (M[s] || 0)), (v[s] = (x / _) | 0), (l = x % _ | 0);
    else {
      for (
        l = (Be / (_[0] + 1)) | 0,
          l > 1 &&
            ((_ = e(_, l)), (M = e(M, l)), (j = _.length), (O = M.length)),
          g = j,
          d = M.slice(0, j),
          y = d.length;
        y < j;

      )
        d[y++] = 0;
      (k = _.slice()), k.unshift(0), (S = _[0]), _[1] >= Be / 2 && ++S;
      do
        (l = 0),
          (c = t(_, d, j, y)),
          c < 0
            ? ((m = d[0]),
              j != y && (m = m * Be + (d[1] || 0)),
              (l = (m / S) | 0),
              l > 1
                ? (l >= Be && (l = Be - 1),
                  (f = e(_, l)),
                  (p = f.length),
                  (y = d.length),
                  (c = t(f, d, p, y)),
                  c == 1 && (l--, r(f, j < p ? k : _, p)))
                : (l == 0 && (c = l = 1), (f = _.slice())),
              (p = f.length),
              p < y && f.unshift(0),
              r(d, f, y),
              c == -1 &&
                ((y = d.length),
                (c = t(_, d, j, y)),
                c < 1 && (l++, r(d, j < y ? k : _, y))),
              (y = d.length))
            : c === 0 && (l++, (d = [0])),
          (v[s++] = l),
          c && d[0] ? (d[y++] = M[g] || 0) : ((d = [M[g]]), (y = 1));
      while ((g++ < O || d[0] !== void 0) && b--);
    }
    return v[0] || v.shift(), (h.e = u), xe(h, a ? i + _e(h) + 1 : i);
  };
})();
function nj(e, t) {
  var r,
    n,
    o,
    i,
    a,
    c,
    u = 0,
    s = 0,
    l = e.constructor,
    f = l.precision;
  if (_e(e) > 16) throw Error(Gd + _e(e));
  if (!e.s) return new l(Qe);
  for (Pe = !1, c = f, a = new l(0.03125); e.abs().gte(0.1); )
    (e = e.times(a)), (s += 5);
  for (
    n = ((Math.log(Fr(2, s)) / Math.LN10) * 2 + 5) | 0,
      c += n,
      r = o = i = new l(Qe),
      l.precision = c;
    ;

  ) {
    if (
      ((o = xe(o.times(e), c)),
      (r = r.times(++u)),
      (a = i.plus(Jt(o, r, c))),
      Ct(a.d).slice(0, c) === Ct(i.d).slice(0, c))
    ) {
      for (; s--; ) i = xe(i.times(i), c);
      return (l.precision = f), t == null ? ((Pe = !0), xe(i, f)) : i;
    }
    i = a;
  }
}
function _e(e) {
  for (var t = e.e * ke, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Vd(e, t, r) {
  if (t > e.LN10.sd())
    throw (
      ((Pe = !0),
      r && (e.precision = r),
      Error(st + "LN10 precision limit exceeded"))
    );
  return xe(new e(e.LN10), t);
}
function hr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function zo(e, t) {
  var r,
    n,
    o,
    i,
    a,
    c,
    u,
    s,
    l,
    f = 1,
    p = 10,
    h = e,
    v = h.d,
    d = h.constructor,
    y = d.precision;
  if (h.s < 1) throw Error(st + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Qe)) return new d(0);
  if ((t == null ? ((Pe = !1), (s = y)) : (s = t), h.eq(10)))
    return t == null && (Pe = !0), Vd(d, s);
  if (
    ((s += p),
    (d.precision = s),
    (r = Ct(v)),
    (n = r.charAt(0)),
    (i = _e(h)),
    Math.abs(i) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (h = h.times(e)), (r = Ct(h.d)), (n = r.charAt(0)), f++;
    (i = _e(h)),
      n > 1 ? ((h = new d("0." + r)), i++) : (h = new d(n + "." + r.slice(1)));
  } else
    return (
      (u = Vd(d, s + 2, y).times(i + "")),
      (h = zo(new d(n + "." + r.slice(1)), s - p).plus(u)),
      (d.precision = y),
      t == null ? ((Pe = !0), xe(h, y)) : h
    );
  for (
    c = a = h = Jt(h.minus(Qe), h.plus(Qe), s), l = xe(h.times(h), s), o = 3;
    ;

  ) {
    if (
      ((a = xe(a.times(l), s)),
      (u = c.plus(Jt(a, new d(o), s))),
      Ct(u.d).slice(0, s) === Ct(c.d).slice(0, s))
    )
      return (
        (c = c.times(2)),
        i !== 0 && (c = c.plus(Vd(d, s + 2, y).times(i + ""))),
        (c = Jt(c, new d(f), s)),
        (d.precision = y),
        t == null ? ((Pe = !0), xe(c, y)) : c
      );
    (c = u), (o += 2);
  }
}
function oj(e, t) {
  var r, n, o;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;

  )
    ++n;
  for (o = t.length; t.charCodeAt(o - 1) === 48; ) --o;
  if (((t = t.slice(n, o)), t)) {
    if (
      ((o -= n),
      (r = r - n - 1),
      (e.e = En(r / ke)),
      (e.d = []),
      (n = (r + 1) % ke),
      r < 0 && (n += ke),
      n < o)
    ) {
      for (n && e.d.push(+t.slice(0, n)), o -= ke; n < o; )
        e.d.push(+t.slice(n, (n += ke)));
      (t = t.slice(n)), (n = ke - t.length);
    } else n -= o;
    for (; n--; ) t += "0";
    if ((e.d.push(+t), Pe && (e.e > nc || e.e < -nc))) throw Error(Gd + r);
  } else (e.s = 0), (e.e = 0), (e.d = [0]);
  return e;
}
function xe(e, t, r) {
  var n,
    o,
    i,
    a,
    c,
    u,
    s,
    l,
    f = e.d;
  for (a = 1, i = f[0]; i >= 10; i /= 10) a++;
  if (((n = t - a), n < 0)) (n += ke), (o = t), (s = f[(l = 0)]);
  else {
    if (((l = Math.ceil((n + 1) / ke)), (i = f.length), l >= i)) return e;
    for (s = i = f[l], a = 1; i >= 10; i /= 10) a++;
    (n %= ke), (o = n - ke + a);
  }
  if (
    (r !== void 0 &&
      ((i = Fr(10, a - o - 1)),
      (c = (s / i) % 10 | 0),
      (u = t < 0 || f[l + 1] !== void 0 || s % i),
      (u =
        r < 4
          ? (c || u) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : c > 5 ||
            (c == 5 &&
              (r == 4 ||
                u ||
                (r == 6 &&
                  (n > 0 ? (o > 0 ? s / Fr(10, a - o) : 0) : f[l - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !f[0])
  )
    return (
      u
        ? ((i = _e(e)),
          (f.length = 1),
          (t = t - i - 1),
          (f[0] = Fr(10, (ke - (t % ke)) % ke)),
          (e.e = En(-t / ke) || 0))
        : ((f.length = 1), (f[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((f.length = l), (i = 1), l--)
      : ((f.length = l + 1),
        (i = Fr(10, ke - n)),
        (f[l] = o > 0 ? ((s / Fr(10, a - o)) % Fr(10, o) | 0) * i : 0)),
    u)
  )
    for (;;)
      if (l == 0) {
        (f[0] += i) == Be && ((f[0] = 1), ++e.e);
        break;
      } else {
        if (((f[l] += i), f[l] != Be)) break;
        (f[l--] = 0), (i = 1);
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Pe && (e.e > nc || e.e < -nc)) throw Error(Gd + _e(e));
  return e;
}
function ij(e, t) {
  var r,
    n,
    o,
    i,
    a,
    c,
    u,
    s,
    l,
    f,
    p = e.constructor,
    h = p.precision;
  if (!e.s || !t.s)
    return t.s ? (t.s = -t.s) : (t = new p(e)), Pe ? xe(t, h) : t;
  if (
    ((u = e.d),
    (f = t.d),
    (n = t.e),
    (s = e.e),
    (u = u.slice()),
    (a = s - n),
    a)
  ) {
    for (
      l = a < 0,
        l
          ? ((r = u), (a = -a), (c = f.length))
          : ((r = f), (n = s), (c = u.length)),
        o = Math.max(Math.ceil(h / ke), c) + 2,
        a > o && ((a = o), (r.length = 1)),
        r.reverse(),
        o = a;
      o--;

    )
      r.push(0);
    r.reverse();
  } else {
    for (o = u.length, c = f.length, l = o < c, l && (c = o), o = 0; o < c; o++)
      if (u[o] != f[o]) {
        l = u[o] < f[o];
        break;
      }
    a = 0;
  }
  for (
    l && ((r = u), (u = f), (f = r), (t.s = -t.s)),
      c = u.length,
      o = f.length - c;
    o > 0;
    --o
  )
    u[c++] = 0;
  for (o = f.length; o > a; ) {
    if (u[--o] < f[o]) {
      for (i = o; i && u[--i] === 0; ) u[i] = Be - 1;
      --u[i], (u[o] += Be);
    }
    u[o] -= f[o];
  }
  for (; u[--c] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --n;
  return u[0] ? ((t.d = u), (t.e = n), Pe ? xe(t, h) : t) : new p(0);
}
function Ur(e, t, r) {
  var n,
    o = _e(e),
    i = Ct(e.d),
    a = i.length;
  return (
    t
      ? (r && (n = r - a) > 0
          ? (i = i.charAt(0) + "." + i.slice(1) + hr(n))
          : a > 1 && (i = i.charAt(0) + "." + i.slice(1)),
        (i = i + (o < 0 ? "e" : "e+") + o))
      : o < 0
        ? ((i = "0." + hr(-o - 1) + i), r && (n = r - a) > 0 && (i += hr(n)))
        : o >= a
          ? ((i += hr(o + 1 - a)),
            r && (n = r - o - 1) > 0 && (i = i + "." + hr(n)))
          : ((n = o + 1) < a && (i = i.slice(0, n) + "." + i.slice(n)),
            r && (n = r - a) > 0 && (o + 1 === a && (i += "."), (i += hr(n)))),
    e.s < 0 ? "-" + i : i
  );
}
function aj(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function cj(e) {
  var t, r, n;
  function o(i) {
    var a = this;
    if (!(a instanceof o)) return new o(i);
    if (((a.constructor = o), i instanceof o)) {
      (a.s = i.s), (a.e = i.e), (a.d = (i = i.d) ? i.slice() : i);
      return;
    }
    if (typeof i == "number") {
      if (i * 0 !== 0) throw Error(zr + i);
      if (i > 0) a.s = 1;
      else if (i < 0) (i = -i), (a.s = -1);
      else {
        (a.s = 0), (a.e = 0), (a.d = [0]);
        return;
      }
      if (i === ~~i && i < 1e7) {
        (a.e = 0), (a.d = [i]);
        return;
      }
      return oj(a, i.toString());
    } else if (typeof i != "string") throw Error(zr + i);
    if (
      (i.charCodeAt(0) === 45 ? ((i = i.slice(1)), (a.s = -1)) : (a.s = 1),
      lz.test(i))
    )
      oj(a, i);
    else throw Error(zr + i);
  }
  if (
    ((o.prototype = te),
    (o.ROUND_UP = 0),
    (o.ROUND_DOWN = 1),
    (o.ROUND_CEIL = 2),
    (o.ROUND_FLOOR = 3),
    (o.ROUND_HALF_UP = 4),
    (o.ROUND_HALF_DOWN = 5),
    (o.ROUND_HALF_EVEN = 6),
    (o.ROUND_HALF_CEIL = 7),
    (o.ROUND_HALF_FLOOR = 8),
    (o.clone = cj),
    (o.config = o.set = fz),
    e === void 0 && (e = {}),
    e)
  )
    for (
      n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return o.config(e), o;
}
function fz(e) {
  if (!e || typeof e != "object") throw Error(st + "Object expected");
  var t,
    r,
    n,
    o = [
      "precision",
      1,
      Pn,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0,
    ];
  for (t = 0; t < o.length; t += 3)
    if ((n = e[(r = o[t])]) !== void 0)
      if (En(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(zr + r + ": " + n);
  if ((n = e[(r = "LN10")]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(zr + r + ": " + n);
  return this;
}
var _y = cj(sz);
Qe = new _y(1);
const we = _y;
function pz(e) {
  return vz(e) || yz(e) || hz(e) || dz();
}
function dz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hz(e, t) {
  if (e) {
    if (typeof e == "string") return Xd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Xd(e, t);
  }
}
function yz(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function vz(e) {
  if (Array.isArray(e)) return Xd(e);
}
function Xd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var mz = function (e) {
    return e;
  },
  uj = {},
  sj = function (e) {
    return e === uj;
  },
  lj = function (e) {
    return function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          sj(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e.apply(void 0, arguments);
    };
  },
  gz = function e(t, r) {
    return t === 1
      ? r
      : lj(function () {
          for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          var a = o.filter(function (c) {
            return c !== uj;
          }).length;
          return a >= t
            ? r.apply(void 0, o)
            : e(
                t - a,
                lj(function () {
                  for (
                    var c = arguments.length, u = new Array(c), s = 0;
                    s < c;
                    s++
                  )
                    u[s] = arguments[s];
                  var l = o.map(function (f) {
                    return sj(f) ? u.shift() : f;
                  });
                  return r.apply(void 0, pz(l).concat(u));
                }),
              );
        });
  },
  oc = function (e) {
    return gz(e.length, e);
  },
  Kd = function (e, t) {
    for (var r = [], n = e; n < t; ++n) r[n - e] = n;
    return r;
  },
  bz = oc(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  wz = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    if (!t.length) return mz;
    var n = t.reverse(),
      o = n[0],
      i = n.slice(1);
    return function () {
      return i.reduce(
        function (a, c) {
          return c(a);
        },
        o.apply(void 0, arguments),
      );
    };
  },
  Yd = function (e) {
    return Array.isArray(e) ? e.reverse() : e.split("").reverse.join("");
  },
  fj = function (e) {
    var t = null,
      r = null;
    return function () {
      for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
        o[i] = arguments[i];
      return (
        (t &&
          o.every(function (a, c) {
            return a === t[c];
          })) ||
          ((t = o), (r = e.apply(void 0, o))),
        r
      );
    };
  };
function xz(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new we(e).abs().log(10).toNumber()) + 1),
    t
  );
}
function Oz(e, t, r) {
  for (var n = new we(e), o = 0, i = []; n.lt(t) && o < 1e5; )
    i.push(n.toNumber()), (n = n.add(r)), o++;
  return i;
}
var Sz = oc(function (e, t, r) {
    var n = +e,
      o = +t;
    return n + r * (o - n);
  }),
  jz = oc(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), (r - e) / n;
  }),
  kz = oc(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n));
  });
const ic = {
  rangeStep: Oz,
  getDigitCount: xz,
  interpolateNumber: Sz,
  uninterpolateNumber: jz,
  uninterpolateTruncation: kz,
};
function Zd(e) {
  return Mz(e) || Ez(e) || pj(e) || Pz();
}
function Pz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ez(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function Mz(e) {
  if (Array.isArray(e)) return Jd(e);
}
function Fo(e, t) {
  return Tz(e) || Az(e, t) || pj(e, t) || _z();
}
function _z() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pj(e, t) {
  if (e) {
    if (typeof e == "string") return Jd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Jd(e, t);
  }
}
function Jd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Az(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      o = !1,
      i = void 0;
    try {
      for (
        var a = e[Symbol.iterator](), c;
        !(n = (c = a.next()).done) && (r.push(c.value), !(t && r.length === t));
        n = !0
      );
    } catch (u) {
      (o = !0), (i = u);
    } finally {
      try {
        !n && a.return != null && a.return();
      } finally {
        if (o) throw i;
      }
    }
    return r;
  }
}
function Tz(e) {
  if (Array.isArray(e)) return e;
}
function dj(e) {
  var t = Fo(e, 2),
    r = t[0],
    n = t[1],
    o = r,
    i = n;
  return r > n && ((o = n), (i = r)), [o, i];
}
function hj(e, t, r) {
  if (e.lte(0)) return new we(0);
  var n = ic.getDigitCount(e.toNumber()),
    o = new we(10).pow(n),
    i = e.div(o),
    a = n !== 1 ? 0.05 : 0.1,
    c = new we(Math.ceil(i.div(a).toNumber())).add(r).mul(a),
    u = c.mul(o);
  return t ? u : new we(Math.ceil(u));
}
function Cz(e, t, r) {
  var n = 1,
    o = new we(e);
  if (!o.isint() && r) {
    var i = Math.abs(e);
    i < 1
      ? ((n = new we(10).pow(ic.getDigitCount(e) - 1)),
        (o = new we(Math.floor(o.div(n).toNumber())).mul(n)))
      : i > 1 && (o = new we(Math.floor(e)));
  } else
    e === 0
      ? (o = new we(Math.floor((t - 1) / 2)))
      : r || (o = new we(Math.floor(e)));
  var a = Math.floor((t - 1) / 2),
    c = wz(
      bz(function (u) {
        return o.add(new we(u - a).mul(n)).toNumber();
      }),
      Kd,
    );
  return c(0, t);
}
function yj(e, t, r, n) {
  var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return { step: new we(0), tickMin: new we(0), tickMax: new we(0) };
  var i = hj(new we(t).sub(e).div(r - 1), n, o),
    a;
  e <= 0 && t >= 0
    ? (a = new we(0))
    : ((a = new we(e).add(t).div(2)), (a = a.sub(new we(a).mod(i))));
  var c = Math.ceil(a.sub(e).div(i).toNumber()),
    u = Math.ceil(new we(t).sub(a).div(i).toNumber()),
    s = c + u + 1;
  return s > r
    ? yj(e, t, r, n, o + 1)
    : (s < r && ((u = t > 0 ? u + (r - s) : u), (c = t > 0 ? c : c + (r - s))),
      {
        step: i,
        tickMin: a.sub(new we(c).mul(i)),
        tickMax: a.add(new we(u).mul(i)),
      });
}
function Dz(e) {
  var t = Fo(e, 2),
    r = t[0],
    n = t[1],
    o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    a = Math.max(o, 2),
    c = dj([r, n]),
    u = Fo(c, 2),
    s = u[0],
    l = u[1];
  if (s === -1 / 0 || l === 1 / 0) {
    var f =
      l === 1 / 0
        ? [s].concat(
            Zd(
              Kd(0, o - 1).map(function () {
                return 1 / 0;
              }),
            ),
          )
        : [].concat(
            Zd(
              Kd(0, o - 1).map(function () {
                return -1 / 0;
              }),
            ),
            [l],
          );
    return r > n ? Yd(f) : f;
  }
  if (s === l) return Cz(s, o, i);
  var p = yj(s, l, a, i),
    h = p.step,
    v = p.tickMin,
    d = p.tickMax,
    y = ic.rangeStep(v, d.add(new we(0.1).mul(h)), h);
  return r > n ? Yd(y) : y;
}
function Iz(e, t) {
  var r = Fo(e, 2),
    n = r[0],
    o = r[1],
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    a = dj([n, o]),
    c = Fo(a, 2),
    u = c[0],
    s = c[1];
  if (u === -1 / 0 || s === 1 / 0) return [n, o];
  if (u === s) return [u];
  var l = Math.max(t, 2),
    f = hj(new we(s).sub(u).div(l - 1), i, 0),
    p = [].concat(
      Zd(ic.rangeStep(new we(u), new we(s).sub(new we(0.99).mul(f)), f)),
      [s],
    );
  return n > o ? Yd(p) : p;
}
var Nz = fj(Dz),
  Rz = fj(Iz),
  Lz = "Invariant failed";
function $r(e, t) {
  throw new Error(Lz);
}
var Bz = [
  "offset",
  "layout",
  "width",
  "dataKey",
  "data",
  "dataPointFormatter",
  "xAxis",
  "yAxis",
];
function Mn(e) {
  "@babel/helpers - typeof";
  return (
    (Mn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Mn(e)
  );
}
function ac() {
  return (
    (ac = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ac.apply(this, arguments)
  );
}
function zz(e, t) {
  return Hz(e) || $z(e, t) || Uz(e, t) || Fz();
}
function Fz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uz(e, t) {
  if (e) {
    if (typeof e == "string") return vj(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vj(e, t);
  }
}
function vj(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $z(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      c = [],
      u = !0,
      s = !1;
    try {
      if (((i = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t);
          u = !0
        );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function Hz(e) {
  if (Array.isArray(e)) return e;
}
function Wz(e, t) {
  if (e == null) return {};
  var r = qz(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function qz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Gz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vz(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, bj(n.key), n);
  }
}
function Xz(e, t, r) {
  return (
    t && Vz(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Kz(e, t, r) {
  return (
    (t = cc(t)),
    Yz(
      e,
      mj() ? Reflect.construct(t, r || [], cc(e).constructor) : t.apply(e, r),
    )
  );
}
function Yz(e, t) {
  if (t && (Mn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Zz(e);
}
function Zz(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function mj() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (mj = function () {
    return !!e;
  })();
}
function cc(e) {
  return (
    (cc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    cc(e)
  );
}
function Jz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Qd(e, t);
}
function Qd(e, t) {
  return (
    (Qd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Qd(e, t)
  );
}
function gj(e, t, r) {
  return (
    (t = bj(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function bj(e) {
  var t = Qz(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function Qz(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var uc = (function (e) {
  function t() {
    return Gz(this, t), Kz(this, t, arguments);
  }
  return (
    Jz(t, e),
    Xz(t, [
      {
        key: "render",
        value: function () {
          var r = this.props,
            n = r.offset,
            o = r.layout,
            i = r.width,
            a = r.dataKey,
            c = r.data,
            u = r.dataPointFormatter,
            s = r.xAxis,
            l = r.yAxis,
            f = Wz(r, Bz),
            p = ve(f, !1);
          this.props.direction === "x" && s.type !== "number" && $r();
          var h = c.map(function (v) {
            var d = u(v, a),
              y = d.x,
              m = d.y,
              b = d.value,
              x = d.errorVal;
            if (!x) return null;
            var g = [],
              O,
              S;
            if (Array.isArray(x)) {
              var j = zz(x, 2);
              (O = j[0]), (S = j[1]);
            } else O = S = x;
            if (o === "vertical") {
              var k = s.scale,
                A = m + n,
                D = A + i,
                M = A - i,
                _ = k(b - O),
                C = k(b + S);
              g.push({ x1: C, y1: D, x2: C, y2: M }),
                g.push({ x1: _, y1: A, x2: C, y2: A }),
                g.push({ x1: _, y1: D, x2: _, y2: M });
            } else if (o === "horizontal") {
              var T = l.scale,
                R = y + n,
                N = R - i,
                z = R + i,
                W = T(b - O),
                U = T(b + S);
              g.push({ x1: N, y1: U, x2: z, y2: U }),
                g.push({ x1: R, y1: W, x2: R, y2: U }),
                g.push({ x1: N, y1: W, x2: z, y2: W });
            }
            return I.createElement(
              Re,
              ac(
                {
                  className: "recharts-errorBar",
                  key: "bar-".concat(
                    g.map(function (B) {
                      return ""
                        .concat(B.x1, "-")
                        .concat(B.x2, "-")
                        .concat(B.y1, "-")
                        .concat(B.y2);
                    }),
                  ),
                },
                p,
              ),
              g.map(function (B) {
                return I.createElement(
                  "line",
                  ac({}, B, {
                    key: "line-"
                      .concat(B.x1, "-")
                      .concat(B.x2, "-")
                      .concat(B.y1, "-")
                      .concat(B.y2),
                  }),
                );
              }),
            );
          });
          return I.createElement(Re, { className: "recharts-errorBars" }, h);
        },
      },
    ])
  );
})(I.Component);
gj(uc, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
}),
  gj(uc, "displayName", "ErrorBar");
function Uo(e) {
  "@babel/helpers - typeof";
  return (
    (Uo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Uo(e)
  );
}
function wj(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wj(Object(r), !0).forEach(function (n) {
          e9(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wj(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function e9(e, t, r) {
  return (
    (t = t9(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function t9(e) {
  var t = r9(e, "string");
  return Uo(t) == "symbol" ? t : t + "";
}
function r9(e, t) {
  if (Uo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Uo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xj = function (e) {
  var t = e.children,
    r = e.formattedGraphicalItems,
    n = e.legendWidth,
    o = e.legendContent,
    i = Je(t, Dr);
  if (!i) return null;
  var a = Dr.defaultProps,
    c = a !== void 0 ? Hr(Hr({}, a), i.props) : {},
    u;
  return (
    i.props && i.props.payload
      ? (u = i.props && i.props.payload)
      : o === "children"
        ? (u = (r || []).reduce(function (s, l) {
            var f = l.item,
              p = l.props,
              h = p.sectors || p.data || [];
            return s.concat(
              h.map(function (v) {
                return {
                  type: i.props.iconType || f.props.legendType,
                  value: v.name,
                  color: v.fill,
                  payload: v,
                };
              }),
            );
          }, []))
        : (u = (r || []).map(function (s) {
            var l = s.item,
              f = l.type.defaultProps,
              p = f !== void 0 ? Hr(Hr({}, f), l.props) : {},
              h = p.dataKey,
              v = p.name,
              d = p.legendType,
              y = p.hide;
            return {
              inactive: y,
              dataKey: h,
              type: c.iconType || d || "square",
              color: th(l),
              value: v || h,
              payload: p,
            };
          })),
    Hr(Hr(Hr({}, c), Dr.getWithHeight(i, n)), {}, { payload: u, item: i })
  );
};
function $o(e) {
  "@babel/helpers - typeof";
  return (
    ($o =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $o(e)
  );
}
function Oj(e) {
  return a9(e) || i9(e) || o9(e) || n9();
}
function n9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function o9(e, t) {
  if (e) {
    if (typeof e == "string") return eh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return eh(e, t);
  }
}
function i9(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function a9(e) {
  if (Array.isArray(e)) return eh(e);
}
function eh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Sj(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sj(Object(r), !0).forEach(function (n) {
          _n(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sj(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function _n(e, t, r) {
  return (
    (t = c9(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function c9(e) {
  var t = u9(e, "string");
  return $o(t) == "symbol" ? t : t + "";
}
function u9(e, t) {
  if ($o(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($o(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dt(e, t, r) {
  return ye(e) || ye(t) ? r : Ce(t) ? nt(e, t, r) : fe(t) ? t(e) : r;
}
function sc(e, t, r, n) {
  var o = az(e, function (c) {
    return Dt(c, t);
  });
  if (r === "number") {
    var i = o.filter(function (c) {
      return V(c) || parseFloat(c);
    });
    return i.length ? [rc(i), tc(i)] : [1 / 0, -1 / 0];
  }
  var a = n
    ? o.filter(function (c) {
        return !ye(c);
      })
    : o;
  return a.map(function (c) {
    return Ce(c) || c instanceof Date ? c : "";
  });
}
var s9 = function (e) {
    var t,
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      n = arguments.length > 2 ? arguments[2] : void 0,
      o = arguments.length > 3 ? arguments[3] : void 0,
      i = -1,
      a = (t = r == null ? void 0 : r.length) !== null && t !== void 0 ? t : 0;
    if (a <= 1) return 0;
    if (
      o &&
      o.axisType === "angleAxis" &&
      Math.abs(Math.abs(o.range[1] - o.range[0]) - 360) <= 1e-6
    )
      for (var c = o.range, u = 0; u < a; u++) {
        var s = u > 0 ? n[u - 1].coordinate : n[a - 1].coordinate,
          l = n[u].coordinate,
          f = u >= a - 1 ? n[0].coordinate : n[u + 1].coordinate,
          p = void 0;
        if (gt(l - s) !== gt(f - l)) {
          var h = [];
          if (gt(f - l) === gt(c[1] - c[0])) {
            p = f;
            var v = l + c[1] - c[0];
            (h[0] = Math.min(v, (v + s) / 2)),
              (h[1] = Math.max(v, (v + s) / 2));
          } else {
            p = s;
            var d = f + c[1] - c[0];
            (h[0] = Math.min(l, (d + l) / 2)),
              (h[1] = Math.max(l, (d + l) / 2));
          }
          var y = [Math.min(l, (p + l) / 2), Math.max(l, (p + l) / 2)];
          if ((e > y[0] && e <= y[1]) || (e >= h[0] && e <= h[1])) {
            i = n[u].index;
            break;
          }
        } else {
          var m = Math.min(s, f),
            b = Math.max(s, f);
          if (e > (m + l) / 2 && e <= (b + l) / 2) {
            i = n[u].index;
            break;
          }
        }
      }
    else
      for (var x = 0; x < a; x++)
        if (
          (x === 0 && e <= (r[x].coordinate + r[x + 1].coordinate) / 2) ||
          (x > 0 &&
            x < a - 1 &&
            e > (r[x].coordinate + r[x - 1].coordinate) / 2 &&
            e <= (r[x].coordinate + r[x + 1].coordinate) / 2) ||
          (x === a - 1 && e > (r[x].coordinate + r[x - 1].coordinate) / 2)
        ) {
          i = r[x].index;
          break;
        }
    return i;
  },
  th = function (e) {
    var t,
      r = e,
      n = r.type.displayName,
      o =
        (t = e.type) !== null && t !== void 0 && t.defaultProps
          ? Ee(Ee({}, e.type.defaultProps), e.props)
          : e.props,
      i = o.stroke,
      a = o.fill,
      c;
    switch (n) {
      case "Line":
        c = i;
        break;
      case "Area":
      case "Radar":
        c = i && i !== "none" ? i : a;
        break;
      default:
        c = a;
        break;
    }
    return c;
  },
  l9 = function (e) {
    var t = e.barSize,
      r = e.totalSize,
      n = e.stackGroups,
      o = n === void 0 ? {} : n;
    if (!o) return {};
    for (var i = {}, a = Object.keys(o), c = 0, u = a.length; c < u; c++)
      for (
        var s = o[a[c]].stackGroups, l = Object.keys(s), f = 0, p = l.length;
        f < p;
        f++
      ) {
        var h = s[l[f]],
          v = h.items,
          d = h.cateAxisId,
          y = v.filter(function (S) {
            return Ht(S.type).indexOf("Bar") >= 0;
          });
        if (y && y.length) {
          var m = y[0].type.defaultProps,
            b = m !== void 0 ? Ee(Ee({}, m), y[0].props) : y[0].props,
            x = b.barSize,
            g = b[d];
          i[g] || (i[g] = []);
          var O = ye(x) ? t : x;
          i[g].push({
            item: y[0],
            stackList: y.slice(1),
            barSize: ye(O) ? void 0 : Tr(O, r, 0),
          });
        }
      }
    return i;
  },
  f9 = function (e) {
    var t = e.barGap,
      r = e.barCategoryGap,
      n = e.bandSize,
      o = e.sizeList,
      i = o === void 0 ? [] : o,
      a = e.maxBarSize,
      c = i.length;
    if (c < 1) return null;
    var u = Tr(t, n, 0, !0),
      s,
      l = [];
    if (i[0].barSize === +i[0].barSize) {
      var f = !1,
        p = n / c,
        h = i.reduce(function (x, g) {
          return x + g.barSize || 0;
        }, 0);
      (h += (c - 1) * u),
        h >= n && ((h -= (c - 1) * u), (u = 0)),
        h >= n && p > 0 && ((f = !0), (p *= 0.9), (h = c * p));
      var v = ((n - h) / 2) >> 0,
        d = { offset: v - u, size: 0 };
      s = i.reduce(function (x, g) {
        var O = {
            item: g.item,
            position: {
              offset: d.offset + d.size + u,
              size: f ? p : g.barSize,
            },
          },
          S = [].concat(Oj(x), [O]);
        return (
          (d = S[S.length - 1].position),
          g.stackList &&
            g.stackList.length &&
            g.stackList.forEach(function (j) {
              S.push({ item: j, position: d });
            }),
          S
        );
      }, l);
    } else {
      var y = Tr(r, n, 0, !0);
      n - 2 * y - (c - 1) * u <= 0 && (u = 0);
      var m = (n - 2 * y - (c - 1) * u) / c;
      m > 1 && (m >>= 0);
      var b = a === +a ? Math.min(m, a) : m;
      s = i.reduce(function (x, g, O) {
        var S = [].concat(Oj(x), [
          {
            item: g.item,
            position: { offset: y + (m + u) * O + (m - b) / 2, size: b },
          },
        ]);
        return (
          g.stackList &&
            g.stackList.length &&
            g.stackList.forEach(function (j) {
              S.push({ item: j, position: S[S.length - 1].position });
            }),
          S
        );
      }, l);
    }
    return s;
  },
  p9 = function (e, t, r, n) {
    var o = r.children,
      i = r.width,
      a = r.margin,
      c = i - (a.left || 0) - (a.right || 0),
      u = xj({ children: o, legendWidth: c });
    if (u) {
      var s = n || {},
        l = s.width,
        f = s.height,
        p = u.align,
        h = u.verticalAlign,
        v = u.layout;
      if (
        (v === "vertical" || (v === "horizontal" && h === "middle")) &&
        p !== "center" &&
        V(e[p])
      )
        return Ee(Ee({}, e), {}, _n({}, p, e[p] + (l || 0)));
      if (
        (v === "horizontal" || (v === "vertical" && p === "center")) &&
        h !== "middle" &&
        V(e[h])
      )
        return Ee(Ee({}, e), {}, _n({}, h, e[h] + (f || 0)));
    }
    return e;
  },
  d9 = function (e, t, r) {
    return ye(t)
      ? !0
      : e === "horizontal"
        ? t === "yAxis"
        : e === "vertical" || r === "x"
          ? t === "xAxis"
          : r === "y"
            ? t === "yAxis"
            : !0;
  },
  jj = function (e, t, r, n, o) {
    var i = t.props.children,
      a = bt(i, uc).filter(function (u) {
        return d9(n, o, u.props.direction);
      });
    if (a && a.length) {
      var c = a.map(function (u) {
        return u.props.dataKey;
      });
      return e.reduce(
        function (u, s) {
          var l = Dt(s, r);
          if (ye(l)) return u;
          var f = Array.isArray(l) ? [rc(l), tc(l)] : [l, l],
            p = c.reduce(
              function (h, v) {
                var d = Dt(s, v, 0),
                  y = f[0] - Math.abs(Array.isArray(d) ? d[0] : d),
                  m = f[1] + Math.abs(Array.isArray(d) ? d[1] : d);
                return [Math.min(y, h[0]), Math.max(m, h[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(p[0], u[0]), Math.max(p[1], u[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  h9 = function (e, t, r, n, o) {
    var i = t
      .map(function (a) {
        return jj(e, a, r, o, n);
      })
      .filter(function (a) {
        return !ye(a);
      });
    return i && i.length
      ? i.reduce(
          function (a, c) {
            return [Math.min(a[0], c[0]), Math.max(a[1], c[1])];
          },
          [1 / 0, -1 / 0],
        )
      : null;
  },
  kj = function (e, t, r, n, o) {
    var i = t.map(function (c) {
      var u = c.props.dataKey;
      return (r === "number" && u && jj(e, c, u, n)) || sc(e, u, r, o);
    });
    if (r === "number")
      return i.reduce(
        function (c, u) {
          return [Math.min(c[0], u[0]), Math.max(c[1], u[1])];
        },
        [1 / 0, -1 / 0],
      );
    var a = {};
    return i.reduce(function (c, u) {
      for (var s = 0, l = u.length; s < l; s++)
        a[u[s]] || ((a[u[s]] = !0), c.push(u[s]));
      return c;
    }, []);
  },
  Pj = function (e, t) {
    return (
      (e === "horizontal" && t === "xAxis") ||
      (e === "vertical" && t === "yAxis") ||
      (e === "centric" && t === "angleAxis") ||
      (e === "radial" && t === "radiusAxis")
    );
  },
  Ej = function (e, t, r, n) {
    if (n)
      return e.map(function (c) {
        return c.coordinate;
      });
    var o,
      i,
      a = e.map(function (c) {
        return (
          c.coordinate === t && (o = !0),
          c.coordinate === r && (i = !0),
          c.coordinate
        );
      });
    return o || a.push(t), i || a.push(r), a;
  },
  Qt = function (e, t, r) {
    if (!e) return null;
    var n = e.scale,
      o = e.duplicateDomain,
      i = e.type,
      a = e.range,
      c = e.realScaleType === "scaleBand" ? n.bandwidth() / 2 : 2,
      u = (t || r) && i === "category" && n.bandwidth ? n.bandwidth() / c : 0;
    if (
      ((u =
        e.axisType === "angleAxis" && (a == null ? void 0 : a.length) >= 2
          ? gt(a[0] - a[1]) * 2 * u
          : u),
      t && (e.ticks || e.niceTicks))
    ) {
      var s = (e.ticks || e.niceTicks).map(function (l) {
        var f = o ? o.indexOf(l) : l;
        return { coordinate: n(f) + u, value: l, offset: u };
      });
      return s.filter(function (l) {
        return !po(l.coordinate);
      });
    }
    return e.isCategorical && e.categoricalDomain
      ? e.categoricalDomain.map(function (l, f) {
          return { coordinate: n(l) + u, value: l, index: f, offset: u };
        })
      : n.ticks && !r
        ? n.ticks(e.tickCount).map(function (l) {
            return { coordinate: n(l) + u, value: l, offset: u };
          })
        : n.domain().map(function (l, f) {
            return {
              coordinate: n(l) + u,
              value: o ? o[l] : l,
              index: f,
              offset: u,
            };
          });
  },
  rh = new WeakMap(),
  lc = function (e, t) {
    if (typeof t != "function") return e;
    rh.has(e) || rh.set(e, new WeakMap());
    var r = rh.get(e);
    if (r.has(t)) return r.get(t);
    var n = function () {
      e.apply(void 0, arguments), t.apply(void 0, arguments);
    };
    return r.set(t, n), n;
  },
  y9 = function (e, t, r) {
    var n = e.scale,
      o = e.type,
      i = e.layout,
      a = e.axisType;
    if (n === "auto")
      return i === "radial" && a === "radiusAxis"
        ? { scale: Eo(), realScaleType: "band" }
        : i === "radial" && a === "angleAxis"
          ? { scale: Ga(), realScaleType: "linear" }
          : o === "category" &&
              t &&
              (t.indexOf("LineChart") >= 0 ||
                t.indexOf("AreaChart") >= 0 ||
                (t.indexOf("ComposedChart") >= 0 && !r))
            ? { scale: Mo(), realScaleType: "point" }
            : o === "category"
              ? { scale: Eo(), realScaleType: "band" }
              : { scale: Ga(), realScaleType: "linear" };
    if (_r(n)) {
      var c = "scale".concat(fa(n));
      return { scale: (qS[c] || Mo)(), realScaleType: qS[c] ? c : "point" };
    }
    return fe(n) ? { scale: n } : { scale: Mo(), realScaleType: "point" };
  },
  Mj = 1e-4,
  v9 = function (e) {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var r = t.length,
        n = e.range(),
        o = Math.min(n[0], n[1]) - Mj,
        i = Math.max(n[0], n[1]) + Mj,
        a = e(t[0]),
        c = e(t[r - 1]);
      (a < o || a > i || c < o || c > i) && e.domain([t[0], t[r - 1]]);
    }
  },
  m9 = function (e, t) {
    if (!e) return null;
    for (var r = 0, n = e.length; r < n; r++)
      if (e[r].item === t) return e[r].position;
    return null;
  },
  g9 = function (e, t) {
    if (!t || t.length !== 2 || !V(t[0]) || !V(t[1])) return e;
    var r = Math.min(t[0], t[1]),
      n = Math.max(t[0], t[1]),
      o = [e[0], e[1]];
    return (
      (!V(e[0]) || e[0] < r) && (o[0] = r),
      (!V(e[1]) || e[1] > n) && (o[1] = n),
      o[0] > n && (o[0] = n),
      o[1] < r && (o[1] = r),
      o
    );
  },
  b9 = function (e) {
    var t = e.length;
    if (!(t <= 0))
      for (var r = 0, n = e[0].length; r < n; ++r)
        for (var o = 0, i = 0, a = 0; a < t; ++a) {
          var c = po(e[a][r][1]) ? e[a][r][0] : e[a][r][1];
          c >= 0
            ? ((e[a][r][0] = o), (e[a][r][1] = o + c), (o = e[a][r][1]))
            : ((e[a][r][0] = i), (e[a][r][1] = i + c), (i = e[a][r][1]));
        }
  },
  w9 = function (e) {
    var t = e.length;
    if (!(t <= 0))
      for (var r = 0, n = e[0].length; r < n; ++r)
        for (var o = 0, i = 0; i < t; ++i) {
          var a = po(e[i][r][1]) ? e[i][r][0] : e[i][r][1];
          a >= 0
            ? ((e[i][r][0] = o), (e[i][r][1] = o + a), (o = e[i][r][1]))
            : ((e[i][r][0] = 0), (e[i][r][1] = 0));
        }
  },
  x9 = {
    sign: b9,
    expand: n3,
    none: pn,
    silhouette: o3,
    wiggle: i3,
    positive: w9,
  },
  O9 = function (e, t, r) {
    var n = t.map(function (a) {
        return a.props.dataKey;
      }),
      o = x9[r],
      i = r3()
        .keys(n)
        .value(function (a, c) {
          return +Dt(a, c, 0);
        })
        .order(Ul)
        .offset(o);
    return i(e);
  },
  S9 = function (e, t, r, n, o, i) {
    if (!e) return null;
    var a = i ? t.reverse() : t,
      c = {},
      u = a.reduce(function (l, f) {
        var p,
          h =
            (p = f.type) !== null && p !== void 0 && p.defaultProps
              ? Ee(Ee({}, f.type.defaultProps), f.props)
              : f.props,
          v = h.stackId,
          d = h.hide;
        if (d) return l;
        var y = h[r],
          m = l[y] || { hasStack: !1, stackGroups: {} };
        if (Ce(v)) {
          var b = m.stackGroups[v] || {
            numericAxisId: r,
            cateAxisId: n,
            items: [],
          };
          b.items.push(f), (m.hasStack = !0), (m.stackGroups[v] = b);
        } else
          m.stackGroups[ua("_stackId_")] = {
            numericAxisId: r,
            cateAxisId: n,
            items: [f],
          };
        return Ee(Ee({}, l), {}, _n({}, y, m));
      }, c),
      s = {};
    return Object.keys(u).reduce(function (l, f) {
      var p = u[f];
      if (p.hasStack) {
        var h = {};
        p.stackGroups = Object.keys(p.stackGroups).reduce(function (v, d) {
          var y = p.stackGroups[d];
          return Ee(
            Ee({}, v),
            {},
            _n({}, d, {
              numericAxisId: r,
              cateAxisId: n,
              items: y.items,
              stackedData: O9(e, y.items, o),
            }),
          );
        }, h);
      }
      return Ee(Ee({}, l), {}, _n({}, f, p));
    }, s);
  },
  j9 = function (e, t) {
    var r = t.realScaleType,
      n = t.type,
      o = t.tickCount,
      i = t.originalDomain,
      a = t.allowDecimals,
      c = r || t.scale;
    if (c !== "auto" && c !== "linear") return null;
    if (o && n === "number" && i && (i[0] === "auto" || i[1] === "auto")) {
      var u = e.domain();
      if (!u.length) return null;
      var s = Nz(u, o, a);
      return e.domain([rc(s), tc(s)]), { niceTicks: s };
    }
    if (o && n === "number") {
      var l = e.domain(),
        f = Rz(l, o, a);
      return { niceTicks: f };
    }
    return null;
  },
  _j = function (e) {
    var t = e.axis,
      r = e.ticks,
      n = e.offset,
      o = e.bandSize,
      i = e.entry,
      a = e.index;
    if (t.type === "category") return r[a] ? r[a].coordinate + n : null;
    var c = Dt(i, t.dataKey, t.domain[a]);
    return ye(c) ? null : t.scale(c) - o / 2 + n;
  },
  k9 = function (e) {
    var t = e.numericAxis,
      r = t.scale.domain();
    if (t.type === "number") {
      var n = Math.min(r[0], r[1]),
        o = Math.max(r[0], r[1]);
      return n <= 0 && o >= 0 ? 0 : o < 0 ? o : n;
    }
    return r[0];
  },
  P9 = function (e, t) {
    var r,
      n =
        (r = e.type) !== null && r !== void 0 && r.defaultProps
          ? Ee(Ee({}, e.type.defaultProps), e.props)
          : e.props,
      o = n.stackId;
    if (Ce(o)) {
      var i = t[o];
      if (i) {
        var a = i.items.indexOf(e);
        return a >= 0 ? i.stackedData[a] : null;
      }
    }
    return null;
  },
  E9 = function (e) {
    return e.reduce(
      function (t, r) {
        return [rc(r.concat([t[0]]).filter(V)), tc(r.concat([t[1]]).filter(V))];
      },
      [1 / 0, -1 / 0],
    );
  },
  Aj = function (e, t, r) {
    return Object.keys(e)
      .reduce(
        function (n, o) {
          var i = e[o],
            a = i.stackedData,
            c = a.reduce(
              function (u, s) {
                var l = E9(s.slice(t, r + 1));
                return [Math.min(u[0], l[0]), Math.max(u[1], l[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(c[0], n[0]), Math.max(c[1], n[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (n) {
        return n === 1 / 0 || n === -1 / 0 ? 0 : n;
      });
  },
  Tj = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Cj = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  nh = function (e, t, r) {
    if (fe(e)) return e(t, r);
    if (!Array.isArray(e)) return t;
    var n = [];
    if (V(e[0])) n[0] = r ? e[0] : Math.min(e[0], t[0]);
    else if (Tj.test(e[0])) {
      var o = +Tj.exec(e[0])[1];
      n[0] = t[0] - o;
    } else fe(e[0]) ? (n[0] = e[0](t[0])) : (n[0] = t[0]);
    if (V(e[1])) n[1] = r ? e[1] : Math.max(e[1], t[1]);
    else if (Cj.test(e[1])) {
      var i = +Cj.exec(e[1])[1];
      n[1] = t[1] + i;
    } else fe(e[1]) ? (n[1] = e[1](t[1])) : (n[1] = t[1]);
    return n;
  },
  fc = function (e, t, r) {
    if (e && e.scale && e.scale.bandwidth) {
      var n = e.scale.bandwidth();
      if (!r || n > 0) return n;
    }
    if (e && t && t.length >= 2) {
      for (
        var o = zp(t, function (l) {
            return l.coordinate;
          }),
          i = 1 / 0,
          a = 1,
          c = o.length;
        a < c;
        a++
      ) {
        var u = o[a],
          s = o[a - 1];
        i = Math.min((u.coordinate || 0) - (s.coordinate || 0), i);
      }
      return i === 1 / 0 ? 0 : i;
    }
    return r ? void 0 : 0;
  },
  Dj = function (e, t, r) {
    return !e || !e.length || qd(e, nt(r, "type.defaultProps.domain")) ? t : e;
  },
  Ij = function (e, t) {
    var r = e.type.defaultProps
        ? Ee(Ee({}, e.type.defaultProps), e.props)
        : e.props,
      n = r.dataKey,
      o = r.name,
      i = r.unit,
      a = r.formatter,
      c = r.tooltipType,
      u = r.chartType,
      s = r.hide;
    return Ee(
      Ee({}, ve(e, !1)),
      {},
      {
        dataKey: n,
        unit: i,
        formatter: a,
        name: o || n,
        color: th(e),
        value: Dt(t, n),
        type: c,
        payload: t,
        chartType: u,
        hide: s,
      },
    );
  };
function Ho(e) {
  "@babel/helpers - typeof";
  return (
    (Ho =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ho(e)
  );
}
function Nj(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Rj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nj(Object(r), !0).forEach(function (n) {
          M9(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nj(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function M9(e, t, r) {
  return (
    (t = _9(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function _9(e) {
  var t = A9(e, "string");
  return Ho(t) == "symbol" ? t : t + "";
}
function A9(e, t) {
  if (Ho(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ho(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pc = Math.PI / 180,
  T9 = function (e) {
    return (e * 180) / Math.PI;
  },
  Fe = function (e, t, r, n) {
    return { x: e + Math.cos(-pc * n) * r, y: t + Math.sin(-pc * n) * r };
  },
  C9 = function (e, t) {
    var r = e.x,
      n = e.y,
      o = t.x,
      i = t.y;
    return Math.sqrt(Math.pow(r - o, 2) + Math.pow(n - i, 2));
  },
  D9 = function (e, t) {
    var r = e.x,
      n = e.y,
      o = t.cx,
      i = t.cy,
      a = C9({ x: r, y: n }, { x: o, y: i });
    if (a <= 0) return { radius: a };
    var c = (r - o) / a,
      u = Math.acos(c);
    return (
      n > i && (u = 2 * Math.PI - u),
      { radius: a, angle: T9(u), angleInRadian: u }
    );
  },
  I9 = function (e) {
    var t = e.startAngle,
      r = e.endAngle,
      n = Math.floor(t / 360),
      o = Math.floor(r / 360),
      i = Math.min(n, o);
    return { startAngle: t - i * 360, endAngle: r - i * 360 };
  },
  N9 = function (e, t) {
    var r = t.startAngle,
      n = t.endAngle,
      o = Math.floor(r / 360),
      i = Math.floor(n / 360),
      a = Math.min(o, i);
    return e + a * 360;
  },
  Lj = function (e, t) {
    var r = e.x,
      n = e.y,
      o = D9({ x: r, y: n }, t),
      i = o.radius,
      a = o.angle,
      c = t.innerRadius,
      u = t.outerRadius;
    if (i < c || i > u) return !1;
    if (i === 0) return !0;
    var s = I9(t),
      l = s.startAngle,
      f = s.endAngle,
      p = a,
      h;
    if (l <= f) {
      for (; p > f; ) p -= 360;
      for (; p < l; ) p += 360;
      h = p >= l && p <= f;
    } else {
      for (; p > l; ) p -= 360;
      for (; p < f; ) p += 360;
      h = p >= f && p <= l;
    }
    return h ? Rj(Rj({}, t), {}, { radius: i, angle: N9(p, t) }) : null;
  };
function Wo(e) {
  "@babel/helpers - typeof";
  return (
    (Wo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wo(e)
  );
}
var R9 = ["offset"];
function L9(e) {
  return U9(e) || F9(e) || z9(e) || B9();
}
function B9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z9(e, t) {
  if (e) {
    if (typeof e == "string") return oh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return oh(e, t);
  }
}
function F9(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function U9(e) {
  if (Array.isArray(e)) return oh(e);
}
function oh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $9(e, t) {
  if (e == null) return {};
  var r = H9(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function H9(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Bj(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bj(Object(r), !0).forEach(function (n) {
          W9(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bj(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function W9(e, t, r) {
  return (
    (t = q9(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function q9(e) {
  var t = G9(e, "string");
  return Wo(t) == "symbol" ? t : t + "";
}
function G9(e, t) {
  if (Wo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qo() {
  return (
    (qo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    qo.apply(this, arguments)
  );
}
var V9 = function (e) {
    var t = e.value,
      r = e.formatter,
      n = ye(e.children) ? t : e.children;
    return fe(r) ? r(n) : n;
  },
  X9 = function (e, t) {
    var r = gt(t - e),
      n = Math.min(Math.abs(t - e), 360);
    return r * n;
  },
  K9 = function (e, t, r) {
    var n = e.position,
      o = e.viewBox,
      i = e.offset,
      a = e.className,
      c = o,
      u = c.cx,
      s = c.cy,
      l = c.innerRadius,
      f = c.outerRadius,
      p = c.startAngle,
      h = c.endAngle,
      v = c.clockWise,
      d = (l + f) / 2,
      y = X9(p, h),
      m = y >= 0 ? 1 : -1,
      b,
      x;
    n === "insideStart"
      ? ((b = p + m * i), (x = v))
      : n === "insideEnd"
        ? ((b = h - m * i), (x = !v))
        : n === "end" && ((b = h + m * i), (x = v)),
      (x = y <= 0 ? x : !x);
    var g = Fe(u, s, d, b),
      O = Fe(u, s, d, b + (x ? 1 : -1) * 359),
      S = "M"
        .concat(g.x, ",")
        .concat(
          g.y,
          `
    A`,
        )
        .concat(d, ",")
        .concat(d, ",0,1,")
        .concat(
          x ? 0 : 1,
          `,
    `,
        )
        .concat(O.x, ",")
        .concat(O.y),
      j = ye(e.id) ? ua("recharts-radial-line-") : e.id;
    return I.createElement(
      "text",
      qo({}, r, {
        dominantBaseline: "central",
        className: de("recharts-radial-bar-label", a),
      }),
      I.createElement("defs", null, I.createElement("path", { id: j, d: S })),
      I.createElement("textPath", { xlinkHref: "#".concat(j) }, t),
    );
  },
  Y9 = function (e) {
    var t = e.viewBox,
      r = e.offset,
      n = e.position,
      o = t,
      i = o.cx,
      a = o.cy,
      c = o.innerRadius,
      u = o.outerRadius,
      s = o.startAngle,
      l = o.endAngle,
      f = (s + l) / 2;
    if (n === "outside") {
      var p = Fe(i, a, u + r, f),
        h = p.x,
        v = p.y;
      return {
        x: h,
        y: v,
        textAnchor: h >= i ? "start" : "end",
        verticalAnchor: "middle",
      };
    }
    if (n === "center")
      return { x: i, y: a, textAnchor: "middle", verticalAnchor: "middle" };
    if (n === "centerTop")
      return { x: i, y: a, textAnchor: "middle", verticalAnchor: "start" };
    if (n === "centerBottom")
      return { x: i, y: a, textAnchor: "middle", verticalAnchor: "end" };
    var d = (c + u) / 2,
      y = Fe(i, a, d, f),
      m = y.x,
      b = y.y;
    return { x: m, y: b, textAnchor: "middle", verticalAnchor: "middle" };
  },
  Z9 = function (e) {
    var t = e.viewBox,
      r = e.parentViewBox,
      n = e.offset,
      o = e.position,
      i = t,
      a = i.x,
      c = i.y,
      u = i.width,
      s = i.height,
      l = s >= 0 ? 1 : -1,
      f = l * n,
      p = l > 0 ? "end" : "start",
      h = l > 0 ? "start" : "end",
      v = u >= 0 ? 1 : -1,
      d = v * n,
      y = v > 0 ? "end" : "start",
      m = v > 0 ? "start" : "end";
    if (o === "top") {
      var b = {
        x: a + u / 2,
        y: c - l * n,
        textAnchor: "middle",
        verticalAnchor: p,
      };
      return Ie(Ie({}, b), r ? { height: Math.max(c - r.y, 0), width: u } : {});
    }
    if (o === "bottom") {
      var x = {
        x: a + u / 2,
        y: c + s + f,
        textAnchor: "middle",
        verticalAnchor: h,
      };
      return Ie(
        Ie({}, x),
        r ? { height: Math.max(r.y + r.height - (c + s), 0), width: u } : {},
      );
    }
    if (o === "left") {
      var g = {
        x: a - d,
        y: c + s / 2,
        textAnchor: y,
        verticalAnchor: "middle",
      };
      return Ie(
        Ie({}, g),
        r ? { width: Math.max(g.x - r.x, 0), height: s } : {},
      );
    }
    if (o === "right") {
      var O = {
        x: a + u + d,
        y: c + s / 2,
        textAnchor: m,
        verticalAnchor: "middle",
      };
      return Ie(
        Ie({}, O),
        r ? { width: Math.max(r.x + r.width - O.x, 0), height: s } : {},
      );
    }
    var S = r ? { width: u, height: s } : {};
    return o === "insideLeft"
      ? Ie(
          { x: a + d, y: c + s / 2, textAnchor: m, verticalAnchor: "middle" },
          S,
        )
      : o === "insideRight"
        ? Ie(
            {
              x: a + u - d,
              y: c + s / 2,
              textAnchor: y,
              verticalAnchor: "middle",
            },
            S,
          )
        : o === "insideTop"
          ? Ie(
              {
                x: a + u / 2,
                y: c + f,
                textAnchor: "middle",
                verticalAnchor: h,
              },
              S,
            )
          : o === "insideBottom"
            ? Ie(
                {
                  x: a + u / 2,
                  y: c + s - f,
                  textAnchor: "middle",
                  verticalAnchor: p,
                },
                S,
              )
            : o === "insideTopLeft"
              ? Ie({ x: a + d, y: c + f, textAnchor: m, verticalAnchor: h }, S)
              : o === "insideTopRight"
                ? Ie(
                    {
                      x: a + u - d,
                      y: c + f,
                      textAnchor: y,
                      verticalAnchor: h,
                    },
                    S,
                  )
                : o === "insideBottomLeft"
                  ? Ie(
                      {
                        x: a + d,
                        y: c + s - f,
                        textAnchor: m,
                        verticalAnchor: p,
                      },
                      S,
                    )
                  : o === "insideBottomRight"
                    ? Ie(
                        {
                          x: a + u - d,
                          y: c + s - f,
                          textAnchor: y,
                          verticalAnchor: p,
                        },
                        S,
                      )
                    : sn(o) && (V(o.x) || Ar(o.x)) && (V(o.y) || Ar(o.y))
                      ? Ie(
                          {
                            x: a + Tr(o.x, u),
                            y: c + Tr(o.y, s),
                            textAnchor: "end",
                            verticalAnchor: "end",
                          },
                          S,
                        )
                      : Ie(
                          {
                            x: a + u / 2,
                            y: c + s / 2,
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                          },
                          S,
                        );
  },
  J9 = function (e) {
    return "cx" in e && V(e.cx);
  };
function He(e) {
  var t = e.offset,
    r = t === void 0 ? 5 : t,
    n = $9(e, R9),
    o = Ie({ offset: r }, n),
    i = o.viewBox,
    a = o.position,
    c = o.value,
    u = o.children,
    s = o.content,
    l = o.className,
    f = l === void 0 ? "" : l,
    p = o.textBreakAll;
  if (!i || (ye(c) && ye(u) && !w.isValidElement(s) && !fe(s))) return null;
  if (w.isValidElement(s)) return w.cloneElement(s, o);
  var h;
  if (fe(s)) {
    if (((h = w.createElement(s, o)), w.isValidElement(h))) return h;
  } else h = V9(o);
  var v = J9(i),
    d = ve(o, !0);
  if (v && (a === "insideStart" || a === "insideEnd" || a === "end"))
    return K9(o, h, d);
  var y = v ? Y9(o) : Z9(o);
  return I.createElement(
    Ia,
    qo({ className: de("recharts-label", f) }, d, y, { breakAll: p }),
    h,
  );
}
He.displayName = "Label";
var zj = function (e) {
    var t = e.cx,
      r = e.cy,
      n = e.angle,
      o = e.startAngle,
      i = e.endAngle,
      a = e.r,
      c = e.radius,
      u = e.innerRadius,
      s = e.outerRadius,
      l = e.x,
      f = e.y,
      p = e.top,
      h = e.left,
      v = e.width,
      d = e.height,
      y = e.clockWise,
      m = e.labelViewBox;
    if (m) return m;
    if (V(v) && V(d)) {
      if (V(l) && V(f)) return { x: l, y: f, width: v, height: d };
      if (V(p) && V(h)) return { x: p, y: h, width: v, height: d };
    }
    return V(l) && V(f)
      ? { x: l, y: f, width: 0, height: 0 }
      : V(t) && V(r)
        ? {
            cx: t,
            cy: r,
            startAngle: o || n || 0,
            endAngle: i || n || 0,
            innerRadius: u || 0,
            outerRadius: s || c || a || 0,
            clockWise: y,
          }
        : e.viewBox
          ? e.viewBox
          : {};
  },
  Q9 = function (e, t) {
    return e
      ? e === !0
        ? I.createElement(He, { key: "label-implicit", viewBox: t })
        : Ce(e)
          ? I.createElement(He, { key: "label-implicit", viewBox: t, value: e })
          : w.isValidElement(e)
            ? e.type === He
              ? w.cloneElement(e, { key: "label-implicit", viewBox: t })
              : I.createElement(He, {
                  key: "label-implicit",
                  content: e,
                  viewBox: t,
                })
            : fe(e)
              ? I.createElement(He, {
                  key: "label-implicit",
                  content: e,
                  viewBox: t,
                })
              : sn(e)
                ? I.createElement(
                    He,
                    qo({ viewBox: t }, e, { key: "label-implicit" }),
                  )
                : null
      : null;
  },
  e7 = function (e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!e || (!e.children && r && !e.label)) return null;
    var n = e.children,
      o = zj(e),
      i = bt(n, He).map(function (c, u) {
        return w.cloneElement(c, { viewBox: t || o, key: "label-".concat(u) });
      });
    if (!r) return i;
    var a = Q9(e.label, t || o);
    return [a].concat(L9(i));
  };
(He.parseViewBox = zj), (He.renderCallByParent = e7);
var ih, Fj;
function t7() {
  if (Fj) return ih;
  Fj = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return (ih = e), ih;
}
var r7 = t7();
const n7 = be(r7);
function Go(e) {
  "@babel/helpers - typeof";
  return (
    (Go =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Go(e)
  );
}
var o7 = ["valueAccessor"],
  i7 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function a7(e) {
  return l7(e) || s7(e) || u7(e) || c7();
}
function c7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u7(e, t) {
  if (e) {
    if (typeof e == "string") return ah(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ah(e, t);
  }
}
function s7(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function l7(e) {
  if (Array.isArray(e)) return ah(e);
}
function ah(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dc() {
  return (
    (dc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    dc.apply(this, arguments)
  );
}
function Uj(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function $j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Uj(Object(r), !0).forEach(function (n) {
          f7(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Uj(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function f7(e, t, r) {
  return (
    (t = p7(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function p7(e) {
  var t = d7(e, "string");
  return Go(t) == "symbol" ? t : t + "";
}
function d7(e, t) {
  if (Go(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Go(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hj(e, t) {
  if (e == null) return {};
  var r = h7(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function h7(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var y7 = function (e) {
  return Array.isArray(e.value) ? n7(e.value) : e.value;
};
function Wr(e) {
  var t = e.valueAccessor,
    r = t === void 0 ? y7 : t,
    n = Hj(e, o7),
    o = n.data,
    i = n.dataKey,
    a = n.clockWise,
    c = n.id,
    u = n.textBreakAll,
    s = Hj(n, i7);
  return !o || !o.length
    ? null
    : I.createElement(
        Re,
        { className: "recharts-label-list" },
        o.map(function (l, f) {
          var p = ye(i) ? r(l, f) : Dt(l && l.payload, i),
            h = ye(c) ? {} : { id: "".concat(c, "-").concat(f) };
          return I.createElement(
            He,
            dc({}, ve(l, !0), s, h, {
              parentViewBox: l.parentViewBox,
              value: p,
              textBreakAll: u,
              viewBox: He.parseViewBox(
                ye(a) ? l : $j($j({}, l), {}, { clockWise: a }),
              ),
              key: "label-".concat(f),
              index: f,
            }),
          );
        }),
      );
}
Wr.displayName = "LabelList";
function v7(e, t) {
  return e
    ? e === !0
      ? I.createElement(Wr, { key: "labelList-implicit", data: t })
      : I.isValidElement(e) || fe(e)
        ? I.createElement(Wr, {
            key: "labelList-implicit",
            data: t,
            content: e,
          })
        : sn(e)
          ? I.createElement(
              Wr,
              dc({ data: t }, e, { key: "labelList-implicit" }),
            )
          : null
    : null;
}
function m7(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    o = bt(n, Wr).map(function (a, c) {
      return w.cloneElement(a, { data: t, key: "labelList-".concat(c) });
    });
  if (!r) return o;
  var i = v7(e.label, t);
  return [i].concat(a7(o));
}
Wr.renderCallByParent = m7;
function Vo(e) {
  "@babel/helpers - typeof";
  return (
    (Vo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vo(e)
  );
}
function ch() {
  return (
    (ch = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ch.apply(this, arguments)
  );
}
function Wj(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function qj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wj(Object(r), !0).forEach(function (n) {
          g7(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wj(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function g7(e, t, r) {
  return (
    (t = b7(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function b7(e) {
  var t = w7(e, "string");
  return Vo(t) == "symbol" ? t : t + "";
}
function w7(e, t) {
  if (Vo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var x7 = function (e, t) {
    var r = gt(t - e),
      n = Math.min(Math.abs(t - e), 359.999);
    return r * n;
  },
  hc = function (e) {
    var t = e.cx,
      r = e.cy,
      n = e.radius,
      o = e.angle,
      i = e.sign,
      a = e.isExternal,
      c = e.cornerRadius,
      u = e.cornerIsExternal,
      s = c * (a ? 1 : -1) + n,
      l = Math.asin(c / s) / pc,
      f = u ? o : o + i * l,
      p = Fe(t, r, s, f),
      h = Fe(t, r, n, f),
      v = u ? o - i * l : o,
      d = Fe(t, r, s * Math.cos(l * pc), v);
    return { center: p, circleTangency: h, lineTangency: d, theta: l };
  },
  Gj = function (e) {
    var t = e.cx,
      r = e.cy,
      n = e.innerRadius,
      o = e.outerRadius,
      i = e.startAngle,
      a = e.endAngle,
      c = x7(i, a),
      u = i + c,
      s = Fe(t, r, o, i),
      l = Fe(t, r, o, u),
      f = "M "
        .concat(s.x, ",")
        .concat(
          s.y,
          `
    A `,
        )
        .concat(o, ",")
        .concat(
          o,
          `,0,
    `,
        )
        .concat(+(Math.abs(c) > 180), ",")
        .concat(
          +(i > u),
          `,
    `,
        )
        .concat(l.x, ",")
        .concat(
          l.y,
          `
  `,
        );
    if (n > 0) {
      var p = Fe(t, r, n, i),
        h = Fe(t, r, n, u);
      f += "L "
        .concat(h.x, ",")
        .concat(
          h.y,
          `
            A `,
        )
        .concat(n, ",")
        .concat(
          n,
          `,0,
            `,
        )
        .concat(+(Math.abs(c) > 180), ",")
        .concat(
          +(i <= u),
          `,
            `,
        )
        .concat(p.x, ",")
        .concat(p.y, " Z");
    } else f += "L ".concat(t, ",").concat(r, " Z");
    return f;
  },
  O7 = function (e) {
    var t = e.cx,
      r = e.cy,
      n = e.innerRadius,
      o = e.outerRadius,
      i = e.cornerRadius,
      a = e.forceCornerRadius,
      c = e.cornerIsExternal,
      u = e.startAngle,
      s = e.endAngle,
      l = gt(s - u),
      f = hc({
        cx: t,
        cy: r,
        radius: o,
        angle: u,
        sign: l,
        cornerRadius: i,
        cornerIsExternal: c,
      }),
      p = f.circleTangency,
      h = f.lineTangency,
      v = f.theta,
      d = hc({
        cx: t,
        cy: r,
        radius: o,
        angle: s,
        sign: -l,
        cornerRadius: i,
        cornerIsExternal: c,
      }),
      y = d.circleTangency,
      m = d.lineTangency,
      b = d.theta,
      x = c ? Math.abs(u - s) : Math.abs(u - s) - v - b;
    if (x < 0)
      return a
        ? "M "
            .concat(h.x, ",")
            .concat(
              h.y,
              `
        a`,
            )
            .concat(i, ",")
            .concat(i, ",0,0,1,")
            .concat(
              i * 2,
              `,0
        a`,
            )
            .concat(i, ",")
            .concat(i, ",0,0,1,")
            .concat(
              -i * 2,
              `,0
      `,
            )
        : Gj({
            cx: t,
            cy: r,
            innerRadius: n,
            outerRadius: o,
            startAngle: u,
            endAngle: s,
          });
    var g = "M "
      .concat(h.x, ",")
      .concat(
        h.y,
        `
    A`,
      )
      .concat(i, ",")
      .concat(i, ",0,0,")
      .concat(+(l < 0), ",")
      .concat(p.x, ",")
      .concat(
        p.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,")
      .concat(+(x > 180), ",")
      .concat(+(l < 0), ",")
      .concat(y.x, ",")
      .concat(
        y.y,
        `
    A`,
      )
      .concat(i, ",")
      .concat(i, ",0,0,")
      .concat(+(l < 0), ",")
      .concat(m.x, ",")
      .concat(
        m.y,
        `
  `,
      );
    if (n > 0) {
      var O = hc({
          cx: t,
          cy: r,
          radius: n,
          angle: u,
          sign: l,
          isExternal: !0,
          cornerRadius: i,
          cornerIsExternal: c,
        }),
        S = O.circleTangency,
        j = O.lineTangency,
        k = O.theta,
        A = hc({
          cx: t,
          cy: r,
          radius: n,
          angle: s,
          sign: -l,
          isExternal: !0,
          cornerRadius: i,
          cornerIsExternal: c,
        }),
        D = A.circleTangency,
        M = A.lineTangency,
        _ = A.theta,
        C = c ? Math.abs(u - s) : Math.abs(u - s) - k - _;
      if (C < 0 && i === 0)
        return "".concat(g, "L").concat(t, ",").concat(r, "Z");
      g += "L"
        .concat(M.x, ",")
        .concat(
          M.y,
          `
      A`,
        )
        .concat(i, ",")
        .concat(i, ",0,0,")
        .concat(+(l < 0), ",")
        .concat(D.x, ",")
        .concat(
          D.y,
          `
      A`,
        )
        .concat(n, ",")
        .concat(n, ",0,")
        .concat(+(C > 180), ",")
        .concat(+(l > 0), ",")
        .concat(S.x, ",")
        .concat(
          S.y,
          `
      A`,
        )
        .concat(i, ",")
        .concat(i, ",0,0,")
        .concat(+(l < 0), ",")
        .concat(j.x, ",")
        .concat(j.y, "Z");
    } else g += "L".concat(t, ",").concat(r, "Z");
    return g;
  },
  S7 = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  Vj = function (e) {
    var t = qj(qj({}, S7), e),
      r = t.cx,
      n = t.cy,
      o = t.innerRadius,
      i = t.outerRadius,
      a = t.cornerRadius,
      c = t.forceCornerRadius,
      u = t.cornerIsExternal,
      s = t.startAngle,
      l = t.endAngle,
      f = t.className;
    if (i < o || s === l) return null;
    var p = de("recharts-sector", f),
      h = i - o,
      v = Tr(a, h, 0, !0),
      d;
    return (
      v > 0 && Math.abs(s - l) < 360
        ? (d = O7({
            cx: r,
            cy: n,
            innerRadius: o,
            outerRadius: i,
            cornerRadius: Math.min(v, h / 2),
            forceCornerRadius: c,
            cornerIsExternal: u,
            startAngle: s,
            endAngle: l,
          }))
        : (d = Gj({
            cx: r,
            cy: n,
            innerRadius: o,
            outerRadius: i,
            startAngle: s,
            endAngle: l,
          })),
      I.createElement(
        "path",
        ch({}, ve(t, !0), { className: p, d, role: "img" }),
      )
    );
  };
function Xo(e) {
  "@babel/helpers - typeof";
  return (
    (Xo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Xo(e)
  );
}
function uh() {
  return (
    (uh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    uh.apply(this, arguments)
  );
}
function Xj(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Kj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xj(Object(r), !0).forEach(function (n) {
          j7(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xj(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function j7(e, t, r) {
  return (
    (t = k7(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function k7(e) {
  var t = P7(e, "string");
  return Xo(t) == "symbol" ? t : t + "";
}
function P7(e, t) {
  if (Xo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Yj = {
    curveBasisClosed: q5,
    curveBasisOpen: G5,
    curveBasis: W5,
    curveBumpX: A5,
    curveBumpY: T5,
    curveLinearClosed: V5,
    curveLinear: ya,
    curveMonotoneX: X5,
    curveMonotoneY: K5,
    curveNatural: Y5,
    curveStep: Z5,
    curveStepAfter: Q5,
    curveStepBefore: J5,
  },
  yc = function (e) {
    return e.x === +e.x && e.y === +e.y;
  },
  Ko = function (e) {
    return e.x;
  },
  Yo = function (e) {
    return e.y;
  },
  E7 = function (e, t) {
    if (fe(e)) return e;
    var r = "curve".concat(fa(e));
    return (r === "curveMonotone" || r === "curveBump") && t
      ? Yj["".concat(r).concat(t === "vertical" ? "Y" : "X")]
      : Yj[r] || ya;
  },
  M7 = function (e) {
    var t = e.type,
      r = t === void 0 ? "linear" : t,
      n = e.points,
      o = n === void 0 ? [] : n,
      i = e.baseLine,
      a = e.layout,
      c = e.connectNulls,
      u = c === void 0 ? !1 : c,
      s = E7(r, a),
      l = u
        ? o.filter(function (v) {
            return yc(v);
          })
        : o,
      f;
    if (Array.isArray(i)) {
      var p = u
          ? i.filter(function (v) {
              return yc(v);
            })
          : i,
        h = l.map(function (v, d) {
          return Kj(Kj({}, v), {}, { base: p[d] });
        });
      return (
        a === "vertical"
          ? (f = va()
              .y(Yo)
              .x1(Ko)
              .x0(function (v) {
                return v.base.x;
              }))
          : (f = va()
              .x(Ko)
              .y1(Yo)
              .y0(function (v) {
                return v.base.y;
              })),
        f.defined(yc).curve(s),
        f(h)
      );
    }
    return (
      a === "vertical" && V(i)
        ? (f = va().y(Yo).x1(Ko).x0(i))
        : V(i)
          ? (f = va().x(Ko).y1(Yo).y0(i))
          : (f = d1().x(Ko).y(Yo)),
      f.defined(yc).curve(s),
      f(l)
    );
  },
  Zj = function (e) {
    var t = e.className,
      r = e.points,
      n = e.path,
      o = e.pathRef;
    if ((!r || !r.length) && !n) return null;
    var i = r && r.length ? M7(e) : n;
    return w.createElement(
      "path",
      uh({}, ve(e, !1), sa(e), {
        className: de("recharts-curve", t),
        d: i,
        ref: o,
      }),
    );
  },
  Jj = { exports: {} },
  sh,
  Qj;
function _7() {
  if (Qj) return sh;
  Qj = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (sh = e), sh;
}
var lh, ek;
function A7() {
  if (ek) return lh;
  ek = 1;
  var e = _7();
  function t() {}
  function r() {}
  return (
    (r.resetWarningCache = t),
    (lh = function () {
      function n(a, c, u, s, l, f) {
        if (f !== e) {
          var p = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
          throw ((p.name = "Invariant Violation"), p);
        }
      }
      n.isRequired = n;
      function o() {
        return n;
      }
      var i = {
        array: n,
        bigint: n,
        bool: n,
        func: n,
        number: n,
        object: n,
        string: n,
        symbol: n,
        any: n,
        arrayOf: o,
        element: n,
        elementType: n,
        instanceOf: o,
        node: n,
        objectOf: o,
        oneOf: o,
        oneOfType: o,
        shape: o,
        exact: o,
        checkPropTypes: r,
        resetWarningCache: t,
      };
      return (i.PropTypes = i), i;
    }),
    lh
  );
}
var tk;
function T7() {
  return tk || ((tk = 1), (Jj.exports = A7()())), Jj.exports;
}
var C7 = T7();
const ge = be(C7),
  { getOwnPropertyNames: D7, getOwnPropertySymbols: I7 } = Object,
  { hasOwnProperty: N7 } = Object.prototype;
function fh(e, t) {
  return function (r, n, o) {
    return e(r, n, o) && t(r, n, o);
  };
}
function vc(e) {
  return function (t, r, n) {
    if (!t || !r || typeof t != "object" || typeof r != "object")
      return e(t, r, n);
    const { cache: o } = n,
      i = o.get(t),
      a = o.get(r);
    if (i && a) return i === r && a === t;
    o.set(t, r), o.set(r, t);
    const c = e(t, r, n);
    return o.delete(t), o.delete(r), c;
  };
}
function R7(e) {
  return e == null ? void 0 : e[Symbol.toStringTag];
}
function rk(e) {
  return D7(e).concat(I7(e));
}
const L7 = Object.hasOwn || ((e, t) => N7.call(e, t));
function qr(e, t) {
  return e === t || (!e && !t && e !== e && t !== t);
}
const B7 = "__v",
  z7 = "__o",
  F7 = "_owner",
  { getOwnPropertyDescriptor: nk, keys: ok } = Object;
function U7(e, t) {
  return (
    e.byteLength === t.byteLength && mc(new Uint8Array(e), new Uint8Array(t))
  );
}
function $7(e, t, r) {
  let n = e.length;
  if (t.length !== n) return !1;
  for (; n-- > 0; ) if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
  return !0;
}
function H7(e, t) {
  return (
    e.byteLength === t.byteLength &&
    mc(
      new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
      new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
    )
  );
}
function W7(e, t) {
  return qr(e.getTime(), t.getTime());
}
function q7(e, t) {
  return (
    e.name === t.name &&
    e.message === t.message &&
    e.cause === t.cause &&
    e.stack === t.stack
  );
}
function G7(e, t) {
  return e === t;
}
function ik(e, t, r) {
  const n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  const o = new Array(n),
    i = e.entries();
  let a,
    c,
    u = 0;
  for (; (a = i.next()) && !a.done; ) {
    const s = t.entries();
    let l = !1,
      f = 0;
    for (; (c = s.next()) && !c.done; ) {
      if (o[f]) {
        f++;
        continue;
      }
      const p = a.value,
        h = c.value;
      if (
        r.equals(p[0], h[0], u, f, e, t, r) &&
        r.equals(p[1], h[1], p[0], h[0], e, t, r)
      ) {
        l = o[f] = !0;
        break;
      }
      f++;
    }
    if (!l) return !1;
    u++;
  }
  return !0;
}
const V7 = qr;
function X7(e, t, r) {
  const n = ok(e);
  let o = n.length;
  if (ok(t).length !== o) return !1;
  for (; o-- > 0; ) if (!ck(e, t, r, n[o])) return !1;
  return !0;
}
function Zo(e, t, r) {
  const n = rk(e);
  let o = n.length;
  if (rk(t).length !== o) return !1;
  let i, a, c;
  for (; o-- > 0; )
    if (
      ((i = n[o]),
      !ck(e, t, r, i) ||
        ((a = nk(e, i)),
        (c = nk(t, i)),
        (a || c) &&
          (!a ||
            !c ||
            a.configurable !== c.configurable ||
            a.enumerable !== c.enumerable ||
            a.writable !== c.writable)))
    )
      return !1;
  return !0;
}
function K7(e, t) {
  return qr(e.valueOf(), t.valueOf());
}
function Y7(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function ak(e, t, r) {
  const n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  const o = new Array(n),
    i = e.values();
  let a, c;
  for (; (a = i.next()) && !a.done; ) {
    const u = t.values();
    let s = !1,
      l = 0;
    for (; (c = u.next()) && !c.done; ) {
      if (!o[l] && r.equals(a.value, c.value, a.value, c.value, e, t, r)) {
        s = o[l] = !0;
        break;
      }
      l++;
    }
    if (!s) return !1;
  }
  return !0;
}
function mc(e, t) {
  let r = e.byteLength;
  if (t.byteLength !== r || e.byteOffset !== t.byteOffset) return !1;
  for (; r-- > 0; ) if (e[r] !== t[r]) return !1;
  return !0;
}
function Z7(e, t) {
  return (
    e.hostname === t.hostname &&
    e.pathname === t.pathname &&
    e.protocol === t.protocol &&
    e.port === t.port &&
    e.hash === t.hash &&
    e.username === t.username &&
    e.password === t.password
  );
}
function ck(e, t, r, n) {
  return (n === F7 || n === z7 || n === B7) && (e.$$typeof || t.$$typeof)
    ? !0
    : L7(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
const J7 = "[object ArrayBuffer]",
  Q7 = "[object Arguments]",
  eF = "[object Boolean]",
  tF = "[object DataView]",
  rF = "[object Date]",
  nF = "[object Error]",
  oF = "[object Map]",
  iF = "[object Number]",
  aF = "[object Object]",
  cF = "[object RegExp]",
  uF = "[object Set]",
  sF = "[object String]",
  lF = {
    "[object Int8Array]": !0,
    "[object Uint8Array]": !0,
    "[object Uint8ClampedArray]": !0,
    "[object Int16Array]": !0,
    "[object Uint16Array]": !0,
    "[object Int32Array]": !0,
    "[object Uint32Array]": !0,
    "[object Float16Array]": !0,
    "[object Float32Array]": !0,
    "[object Float64Array]": !0,
    "[object BigInt64Array]": !0,
    "[object BigUint64Array]": !0,
  },
  fF = "[object URL]",
  pF = Object.prototype.toString;
function dF({
  areArrayBuffersEqual: e,
  areArraysEqual: t,
  areDataViewsEqual: r,
  areDatesEqual: n,
  areErrorsEqual: o,
  areFunctionsEqual: i,
  areMapsEqual: a,
  areNumbersEqual: c,
  areObjectsEqual: u,
  arePrimitiveWrappersEqual: s,
  areRegExpsEqual: l,
  areSetsEqual: f,
  areTypedArraysEqual: p,
  areUrlsEqual: h,
  unknownTagComparators: v,
}) {
  return function (d, y, m) {
    if (d === y) return !0;
    if (d == null || y == null) return !1;
    const b = typeof d;
    if (b !== typeof y) return !1;
    if (b !== "object")
      return b === "number" ? c(d, y, m) : b === "function" ? i(d, y, m) : !1;
    const x = d.constructor;
    if (x !== y.constructor) return !1;
    if (x === Object) return u(d, y, m);
    if (Array.isArray(d)) return t(d, y, m);
    if (x === Date) return n(d, y, m);
    if (x === RegExp) return l(d, y, m);
    if (x === Map) return a(d, y, m);
    if (x === Set) return f(d, y, m);
    const g = pF.call(d);
    if (g === rF) return n(d, y, m);
    if (g === cF) return l(d, y, m);
    if (g === oF) return a(d, y, m);
    if (g === uF) return f(d, y, m);
    if (g === aF)
      return (
        typeof d.then != "function" && typeof y.then != "function" && u(d, y, m)
      );
    if (g === fF) return h(d, y, m);
    if (g === nF) return o(d, y, m);
    if (g === Q7) return u(d, y, m);
    if (lF[g]) return p(d, y, m);
    if (g === J7) return e(d, y, m);
    if (g === tF) return r(d, y, m);
    if (g === eF || g === iF || g === sF) return s(d, y, m);
    if (v) {
      let O = v[g];
      if (!O) {
        const S = R7(d);
        S && (O = v[S]);
      }
      if (O) return O(d, y, m);
    }
    return !1;
  };
}
function hF({ circular: e, createCustomConfig: t, strict: r }) {
  let n = {
    areArrayBuffersEqual: U7,
    areArraysEqual: r ? Zo : $7,
    areDataViewsEqual: H7,
    areDatesEqual: W7,
    areErrorsEqual: q7,
    areFunctionsEqual: G7,
    areMapsEqual: r ? fh(ik, Zo) : ik,
    areNumbersEqual: V7,
    areObjectsEqual: r ? Zo : X7,
    arePrimitiveWrappersEqual: K7,
    areRegExpsEqual: Y7,
    areSetsEqual: r ? fh(ak, Zo) : ak,
    areTypedArraysEqual: r ? fh(mc, Zo) : mc,
    areUrlsEqual: Z7,
    unknownTagComparators: void 0,
  };
  if ((t && (n = Object.assign({}, n, t(n))), e)) {
    const o = vc(n.areArraysEqual),
      i = vc(n.areMapsEqual),
      a = vc(n.areObjectsEqual),
      c = vc(n.areSetsEqual);
    n = Object.assign({}, n, {
      areArraysEqual: o,
      areMapsEqual: i,
      areObjectsEqual: a,
      areSetsEqual: c,
    });
  }
  return n;
}
function yF(e) {
  return function (t, r, n, o, i, a, c) {
    return e(t, r, c);
  };
}
function vF({
  circular: e,
  comparator: t,
  createState: r,
  equals: n,
  strict: o,
}) {
  if (r)
    return function (a, c) {
      const { cache: u = e ? new WeakMap() : void 0, meta: s } = r();
      return t(a, c, { cache: u, equals: n, meta: s, strict: o });
    };
  if (e)
    return function (a, c) {
      return t(a, c, {
        cache: new WeakMap(),
        equals: n,
        meta: void 0,
        strict: o,
      });
    };
  const i = { cache: void 0, equals: n, meta: void 0, strict: o };
  return function (a, c) {
    return t(a, c, i);
  };
}
const mF = yr();
yr({ strict: !0 }),
  yr({ circular: !0 }),
  yr({ circular: !0, strict: !0 }),
  yr({ createInternalComparator: () => qr }),
  yr({ strict: !0, createInternalComparator: () => qr }),
  yr({ circular: !0, createInternalComparator: () => qr }),
  yr({ circular: !0, createInternalComparator: () => qr, strict: !0 });
function yr(e = {}) {
  const {
      circular: t = !1,
      createInternalComparator: r,
      createState: n,
      strict: o = !1,
    } = e,
    i = hF(e),
    a = dF(i),
    c = r ? r(a) : yF(a);
  return vF({
    circular: t,
    comparator: a,
    createState: n,
    equals: c,
    strict: o,
  });
}
function gF(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function uk(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function o(i) {
      r < 0 && (r = i), i - r > t ? (e(i), (r = -1)) : gF(o);
    };
  requestAnimationFrame(n);
}
function ph(e) {
  "@babel/helpers - typeof";
  return (
    (ph =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ph(e)
  );
}
function bF(e) {
  return SF(e) || OF(e) || xF(e) || wF();
}
function wF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xF(e, t) {
  if (e) {
    if (typeof e == "string") return sk(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return sk(e, t);
  }
}
function sk(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function OF(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function SF(e) {
  if (Array.isArray(e)) return e;
}
function jF() {
  var e = {},
    t = function () {
      return null;
    },
    r = !1,
    n = function o(i) {
      if (!r) {
        if (Array.isArray(i)) {
          if (!i.length) return;
          var a = i,
            c = bF(a),
            u = c[0],
            s = c.slice(1);
          if (typeof u == "number") {
            uk(o.bind(null, s), u);
            return;
          }
          o(u), uk(o.bind(null, s));
          return;
        }
        ph(i) === "object" && ((e = i), t(e)), typeof i == "function" && i();
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (o) {
      (r = !1), n(o);
    },
    subscribe: function (o) {
      return (
        (t = o),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function Jo(e) {
  "@babel/helpers - typeof";
  return (
    (Jo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Jo(e)
  );
}
function lk(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function fk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lk(Object(r), !0).forEach(function (n) {
          pk(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : lk(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function pk(e, t, r) {
  return (
    (t = kF(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function kF(e) {
  var t = PF(e, "string");
  return Jo(t) === "symbol" ? t : String(t);
}
function PF(e, t) {
  if (Jo(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jo(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var EF = function (e, t) {
    return [Object.keys(e), Object.keys(t)].reduce(function (r, n) {
      return r.filter(function (o) {
        return n.includes(o);
      });
    });
  },
  MF = function (e) {
    return e;
  },
  _F = function (e) {
    return e.replace(/([A-Z])/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  },
  Qo = function (e, t) {
    return Object.keys(t).reduce(function (r, n) {
      return fk(fk({}, r), {}, pk({}, n, e(n, t[n])));
    }, {});
  },
  dk = function (e, t, r) {
    return e
      .map(function (n) {
        return "".concat(_F(n), " ").concat(t, "ms ").concat(r);
      })
      .join(",");
  };
function AF(e, t) {
  return DF(e) || CF(e, t) || hk(e, t) || TF();
}
function TF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CF(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      c = [],
      u = !0,
      s = !1;
    try {
      if (((i = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t);
          u = !0
        );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function DF(e) {
  if (Array.isArray(e)) return e;
}
function IF(e) {
  return LF(e) || RF(e) || hk(e) || NF();
}
function NF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hk(e, t) {
  if (e) {
    if (typeof e == "string") return dh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return dh(e, t);
  }
}
function RF(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function LF(e) {
  if (Array.isArray(e)) return dh(e);
}
function dh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var gc = 1e-4,
  yk = function (e, t) {
    return [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1];
  },
  vk = function (e, t) {
    return e
      .map(function (r, n) {
        return r * Math.pow(t, n);
      })
      .reduce(function (r, n) {
        return r + n;
      });
  },
  mk = function (e, t) {
    return function (r) {
      var n = yk(e, t);
      return vk(n, r);
    };
  },
  BF = function (e, t) {
    return function (r) {
      var n = yk(e, t),
        o = [].concat(
          IF(
            n
              .map(function (i, a) {
                return i * a;
              })
              .slice(1),
          ),
          [0],
        );
      return vk(o, r);
    };
  },
  gk = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    var n = t[0],
      o = t[1],
      i = t[2],
      a = t[3];
    if (t.length === 1)
      switch (t[0]) {
        case "linear":
          (n = 0), (o = 0), (i = 1), (a = 1);
          break;
        case "ease":
          (n = 0.25), (o = 0.1), (i = 0.25), (a = 1);
          break;
        case "ease-in":
          (n = 0.42), (o = 0), (i = 1), (a = 1);
          break;
        case "ease-out":
          (n = 0.42), (o = 0), (i = 0.58), (a = 1);
          break;
        case "ease-in-out":
          (n = 0), (o = 0), (i = 0.58), (a = 1);
          break;
        default: {
          var c = t[0].split("(");
          if (
            c[0] === "cubic-bezier" &&
            c[1].split(")")[0].split(",").length === 4
          ) {
            var u = c[1]
                .split(")")[0]
                .split(",")
                .map(function (d) {
                  return parseFloat(d);
                }),
              s = AF(u, 4);
            (n = s[0]), (o = s[1]), (i = s[2]), (a = s[3]);
          }
        }
      }
    var l = mk(n, i),
      f = mk(o, a),
      p = BF(n, i),
      h = function (d) {
        return d > 1 ? 1 : d < 0 ? 0 : d;
      },
      v = function (d) {
        for (var y = d > 1 ? 1 : d, m = y, b = 0; b < 8; ++b) {
          var x = l(m) - y,
            g = p(m);
          if (Math.abs(x - y) < gc || g < gc) return f(m);
          m = h(m - x / g);
        }
        return f(m);
      };
    return (v.isStepper = !1), v;
  },
  zF = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = e.stiff,
      r = t === void 0 ? 100 : t,
      n = e.damping,
      o = n === void 0 ? 8 : n,
      i = e.dt,
      a = i === void 0 ? 17 : i,
      c = function (u, s, l) {
        var f = -(u - s) * r,
          p = l * o,
          h = l + ((f - p) * a) / 1e3,
          v = (l * a) / 1e3 + u;
        return Math.abs(v - s) < gc && Math.abs(h) < gc ? [s, 0] : [v, h];
      };
    return (c.isStepper = !0), (c.dt = a), c;
  },
  FF = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    var n = t[0];
    if (typeof n == "string")
      switch (n) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return gk(n);
        case "spring":
          return zF();
        default:
          if (n.split("(")[0] === "cubic-bezier") return gk(n);
      }
    return typeof n == "function" ? n : null;
  };
function ei(e) {
  "@babel/helpers - typeof";
  return (
    (ei =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ei(e)
  );
}
function bk(e) {
  return HF(e) || $F(e) || xk(e) || UF();
}
function UF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $F(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function HF(e) {
  if (Array.isArray(e)) return yh(e);
}
function wk(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wk(Object(r), !0).forEach(function (n) {
          hh(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wk(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function hh(e, t, r) {
  return (
    (t = WF(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function WF(e) {
  var t = qF(e, "string");
  return ei(t) === "symbol" ? t : String(t);
}
function qF(e, t) {
  if (ei(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ei(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function GF(e, t) {
  return KF(e) || XF(e, t) || xk(e, t) || VF();
}
function VF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xk(e, t) {
  if (e) {
    if (typeof e == "string") return yh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return yh(e, t);
  }
}
function yh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function XF(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      c = [],
      u = !0,
      s = !1;
    try {
      if (((i = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t);
          u = !0
        );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function KF(e) {
  if (Array.isArray(e)) return e;
}
var bc = function (e, t, r) {
    return e + (t - e) * r;
  },
  vh = function (e) {
    var t = e.from,
      r = e.to;
    return t !== r;
  },
  YF = function e(t, r, n) {
    var o = Qo(function (i, a) {
      if (vh(a)) {
        var c = t(a.from, a.to, a.velocity),
          u = GF(c, 2),
          s = u[0],
          l = u[1];
        return Ue(Ue({}, a), {}, { from: s, velocity: l });
      }
      return a;
    }, r);
    return n < 1
      ? Qo(function (i, a) {
          return vh(a)
            ? Ue(
                Ue({}, a),
                {},
                {
                  velocity: bc(a.velocity, o[i].velocity, n),
                  from: bc(a.from, o[i].from, n),
                },
              )
            : a;
        }, r)
      : e(t, o, n - 1);
  };
const ZF = function (e, t, r, n, o) {
  var i = EF(e, t),
    a = i.reduce(function (y, m) {
      return Ue(Ue({}, y), {}, hh({}, m, [e[m], t[m]]));
    }, {}),
    c = i.reduce(function (y, m) {
      return Ue(
        Ue({}, y),
        {},
        hh({}, m, { from: e[m], velocity: 0, to: t[m] }),
      );
    }, {}),
    u = -1,
    s,
    l,
    f = function () {
      return null;
    },
    p = function () {
      return Qo(function (y, m) {
        return m.from;
      }, c);
    },
    h = function () {
      return !Object.values(c).filter(vh).length;
    },
    v = function (y) {
      s || (s = y);
      var m = y - s,
        b = m / r.dt;
      (c = YF(r, c, b)),
        o(Ue(Ue(Ue({}, e), t), p())),
        (s = y),
        h() || (u = requestAnimationFrame(f));
    },
    d = function (y) {
      l || (l = y);
      var m = (y - l) / n,
        b = Qo(function (g, O) {
          return bc.apply(void 0, bk(O).concat([r(m)]));
        }, a);
      if ((o(Ue(Ue(Ue({}, e), t), b)), m < 1)) u = requestAnimationFrame(f);
      else {
        var x = Qo(function (g, O) {
          return bc.apply(void 0, bk(O).concat([r(1)]));
        }, a);
        o(Ue(Ue(Ue({}, e), t), x));
      }
    };
  return (
    (f = r.isStepper ? v : d),
    function () {
      return (
        requestAnimationFrame(f),
        function () {
          cancelAnimationFrame(u);
        }
      );
    }
  );
};
function An(e) {
  "@babel/helpers - typeof";
  return (
    (An =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    An(e)
  );
}
var JF = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];
function QF(e, t) {
  if (e == null) return {};
  var r = eU(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function eU(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function mh(e) {
  return oU(e) || nU(e) || rU(e) || tU();
}
function tU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rU(e, t) {
  if (e) {
    if (typeof e == "string") return gh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gh(e, t);
  }
}
function nU(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function oU(e) {
  if (Array.isArray(e)) return gh(e);
}
function gh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ok(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ok(Object(r), !0).forEach(function (n) {
          ti(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ok(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ti(e, t, r) {
  return (
    (t = Sk(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function iU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function aU(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Sk(n.key), n);
  }
}
function cU(e, t, r) {
  return (
    t && aU(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Sk(e) {
  var t = uU(e, "string");
  return An(t) === "symbol" ? t : String(t);
}
function uU(e, t) {
  if (An(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (An(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && bh(e, t);
}
function bh(e, t) {
  return (
    (bh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    bh(e, t)
  );
}
function lU(e) {
  var t = fU();
  return function () {
    var r = wc(e),
      n;
    if (t) {
      var o = wc(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return wh(this, n);
  };
}
function wh(e, t) {
  if (t && (An(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return xh(e);
}
function xh(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function fU() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function wc(e) {
  return (
    (wc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    wc(e)
  );
}
var vr = (function (e) {
  sU(r, e);
  var t = lU(r);
  function r(n, o) {
    var i;
    iU(this, r), (i = t.call(this, n, o));
    var a = i.props,
      c = a.isActive,
      u = a.attributeName,
      s = a.from,
      l = a.to,
      f = a.steps,
      p = a.children,
      h = a.duration;
    if (
      ((i.handleStyleChange = i.handleStyleChange.bind(xh(i))),
      (i.changeStyle = i.changeStyle.bind(xh(i))),
      !c || h <= 0)
    )
      return (
        (i.state = { style: {} }),
        typeof p == "function" && (i.state = { style: l }),
        wh(i)
      );
    if (f && f.length) i.state = { style: f[0].style };
    else if (s) {
      if (typeof p == "function") return (i.state = { style: s }), wh(i);
      i.state = { style: u ? ti({}, u, s) : s };
    } else i.state = { style: {} };
    return i;
  }
  return (
    cU(r, [
      {
        key: "componentDidMount",
        value: function () {
          var n = this.props,
            o = n.isActive,
            i = n.canBegin;
          (this.mounted = !0), !(!o || !i) && this.runAnimation(this.props);
        },
      },
      {
        key: "componentDidUpdate",
        value: function (n) {
          var o = this.props,
            i = o.isActive,
            a = o.canBegin,
            c = o.attributeName,
            u = o.shouldReAnimate,
            s = o.to,
            l = o.from,
            f = this.state.style;
          if (a) {
            if (!i) {
              var p = { style: c ? ti({}, c, s) : s };
              this.state &&
                f &&
                ((c && f[c] !== s) || (!c && f !== s)) &&
                this.setState(p);
              return;
            }
            if (!(mF(n.to, s) && n.canBegin && n.isActive)) {
              var h = !n.canBegin || !n.isActive;
              this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation();
              var v = h || u ? l : n.to;
              if (this.state && f) {
                var d = { style: c ? ti({}, c, v) : v };
                ((c && f[c] !== v) || (!c && f !== v)) && this.setState(d);
              }
              this.runAnimation(
                Ot(Ot({}, this.props), {}, { from: v, begin: 0 }),
              );
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.mounted = !1;
          var n = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            n && n();
        },
      },
      {
        key: "handleStyleChange",
        value: function (n) {
          this.changeStyle(n);
        },
      },
      {
        key: "changeStyle",
        value: function (n) {
          this.mounted && this.setState({ style: n });
        },
      },
      {
        key: "runJSAnimation",
        value: function (n) {
          var o = this,
            i = n.from,
            a = n.to,
            c = n.duration,
            u = n.easing,
            s = n.begin,
            l = n.onAnimationEnd,
            f = n.onAnimationStart,
            p = ZF(i, a, FF(u), c, this.changeStyle),
            h = function () {
              o.stopJSAnimation = p();
            };
          this.manager.start([f, s, h, c, l]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (n) {
          var o = this,
            i = n.steps,
            a = n.begin,
            c = n.onAnimationStart,
            u = i[0],
            s = u.style,
            l = u.duration,
            f = l === void 0 ? 0 : l,
            p = function (h, v, d) {
              if (d === 0) return h;
              var y = v.duration,
                m = v.easing,
                b = m === void 0 ? "ease" : m,
                x = v.style,
                g = v.properties,
                O = v.onAnimationEnd,
                S = d > 0 ? i[d - 1] : v,
                j = g || Object.keys(x);
              if (typeof b == "function" || b === "spring")
                return [].concat(mh(h), [
                  o.runJSAnimation.bind(o, {
                    from: S.style,
                    to: x,
                    duration: y,
                    easing: b,
                  }),
                  y,
                ]);
              var k = dk(j, y, b),
                A = Ot(Ot(Ot({}, S.style), x), {}, { transition: k });
              return [].concat(mh(h), [A, y, O]).filter(MF);
            };
          return this.manager.start(
            [c].concat(mh(i.reduce(p, [s, Math.max(f, a)])), [
              n.onAnimationEnd,
            ]),
          );
        },
      },
      {
        key: "runAnimation",
        value: function (n) {
          this.manager || (this.manager = jF());
          var o = n.begin,
            i = n.duration,
            a = n.attributeName,
            c = n.to,
            u = n.easing,
            s = n.onAnimationStart,
            l = n.onAnimationEnd,
            f = n.steps,
            p = n.children,
            h = this.manager;
          if (
            ((this.unSubscribe = h.subscribe(this.handleStyleChange)),
            typeof u == "function" || typeof p == "function" || u === "spring")
          ) {
            this.runJSAnimation(n);
            return;
          }
          if (f.length > 1) {
            this.runStepAnimation(n);
            return;
          }
          var v = a ? ti({}, a, c) : c,
            d = dk(Object.keys(v), i, u);
          h.start([s, o, Ot(Ot({}, v), {}, { transition: d }), i, l]);
        },
      },
      {
        key: "render",
        value: function () {
          var n = this.props,
            o = n.children;
          n.begin;
          var i = n.duration;
          n.attributeName, n.easing;
          var a = n.isActive;
          n.steps,
            n.from,
            n.to,
            n.canBegin,
            n.onAnimationEnd,
            n.shouldReAnimate,
            n.onAnimationReStart;
          var c = QF(n, JF),
            u = w.Children.count(o),
            s = this.state.style;
          if (typeof o == "function") return o(s);
          if (!a || u === 0 || i <= 0) return o;
          var l = function (f) {
            var p = f.props,
              h = p.style,
              v = h === void 0 ? {} : h,
              d = p.className,
              y = w.cloneElement(
                f,
                Ot(Ot({}, c), {}, { style: Ot(Ot({}, v), s), className: d }),
              );
            return y;
          };
          return u === 1
            ? l(w.Children.only(o))
            : I.createElement(
                "div",
                null,
                w.Children.map(o, function (f) {
                  return l(f);
                }),
              );
        },
      },
    ]),
    r
  );
})(w.PureComponent);
(vr.displayName = "Animate"),
  (vr.defaultProps = {
    begin: 0,
    duration: 1e3,
    from: "",
    to: "",
    attributeName: "",
    easing: "ease",
    isActive: !0,
    canBegin: !0,
    steps: [],
    onAnimationEnd: function () {},
    onAnimationStart: function () {},
  }),
  (vr.propTypes = {
    from: ge.oneOfType([ge.object, ge.string]),
    to: ge.oneOfType([ge.object, ge.string]),
    attributeName: ge.string,
    duration: ge.number,
    begin: ge.number,
    easing: ge.oneOfType([ge.string, ge.func]),
    steps: ge.arrayOf(
      ge.shape({
        duration: ge.number.isRequired,
        style: ge.object.isRequired,
        easing: ge.oneOfType([
          ge.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
          ge.func,
        ]),
        properties: ge.arrayOf("string"),
        onAnimationEnd: ge.func,
      }),
    ),
    children: ge.oneOfType([ge.node, ge.func]),
    isActive: ge.bool,
    canBegin: ge.bool,
    onAnimationEnd: ge.func,
    shouldReAnimate: ge.bool,
    onAnimationStart: ge.func,
    onAnimationReStart: ge.func,
  });
function ri(e) {
  "@babel/helpers - typeof";
  return (
    (ri =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ri(e)
  );
}
function xc() {
  return (
    (xc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xc.apply(this, arguments)
  );
}
function pU(e, t) {
  return vU(e) || yU(e, t) || hU(e, t) || dU();
}
function dU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hU(e, t) {
  if (e) {
    if (typeof e == "string") return jk(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return jk(e, t);
  }
}
function jk(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yU(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      c = [],
      u = !0,
      s = !1;
    try {
      if (((i = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t);
          u = !0
        );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function vU(e) {
  if (Array.isArray(e)) return e;
}
function kk(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Pk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kk(Object(r), !0).forEach(function (n) {
          mU(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kk(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function mU(e, t, r) {
  return (
    (t = gU(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function gU(e) {
  var t = bU(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function bU(e, t) {
  if (ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ek = function (e, t, r, n, o) {
    var i = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
      a = n >= 0 ? 1 : -1,
      c = r >= 0 ? 1 : -1,
      u = (n >= 0 && r >= 0) || (n < 0 && r < 0) ? 1 : 0,
      s;
    if (i > 0 && o instanceof Array) {
      for (var l = [0, 0, 0, 0], f = 0, p = 4; f < p; f++)
        l[f] = o[f] > i ? i : o[f];
      (s = "M".concat(e, ",").concat(t + a * l[0])),
        l[0] > 0 &&
          (s += "A "
            .concat(l[0], ",")
            .concat(l[0], ",0,0,")
            .concat(u, ",")
            .concat(e + c * l[0], ",")
            .concat(t)),
        (s += "L ".concat(e + r - c * l[1], ",").concat(t)),
        l[1] > 0 &&
          (s += "A "
            .concat(l[1], ",")
            .concat(l[1], ",0,0,")
            .concat(
              u,
              `,
        `,
            )
            .concat(e + r, ",")
            .concat(t + a * l[1])),
        (s += "L ".concat(e + r, ",").concat(t + n - a * l[2])),
        l[2] > 0 &&
          (s += "A "
            .concat(l[2], ",")
            .concat(l[2], ",0,0,")
            .concat(
              u,
              `,
        `,
            )
            .concat(e + r - c * l[2], ",")
            .concat(t + n)),
        (s += "L ".concat(e + c * l[3], ",").concat(t + n)),
        l[3] > 0 &&
          (s += "A "
            .concat(l[3], ",")
            .concat(l[3], ",0,0,")
            .concat(
              u,
              `,
        `,
            )
            .concat(e, ",")
            .concat(t + n - a * l[3])),
        (s += "Z");
    } else if (i > 0 && o === +o && o > 0) {
      var h = Math.min(i, o);
      s = "M "
        .concat(e, ",")
        .concat(
          t + a * h,
          `
            A `,
        )
        .concat(h, ",")
        .concat(h, ",0,0,")
        .concat(u, ",")
        .concat(e + c * h, ",")
        .concat(
          t,
          `
            L `,
        )
        .concat(e + r - c * h, ",")
        .concat(
          t,
          `
            A `,
        )
        .concat(h, ",")
        .concat(h, ",0,0,")
        .concat(u, ",")
        .concat(e + r, ",")
        .concat(
          t + a * h,
          `
            L `,
        )
        .concat(e + r, ",")
        .concat(
          t + n - a * h,
          `
            A `,
        )
        .concat(h, ",")
        .concat(h, ",0,0,")
        .concat(u, ",")
        .concat(e + r - c * h, ",")
        .concat(
          t + n,
          `
            L `,
        )
        .concat(e + c * h, ",")
        .concat(
          t + n,
          `
            A `,
        )
        .concat(h, ",")
        .concat(h, ",0,0,")
        .concat(u, ",")
        .concat(e, ",")
        .concat(t + n - a * h, " Z");
    } else
      s = "M "
        .concat(e, ",")
        .concat(t, " h ")
        .concat(r, " v ")
        .concat(n, " h ")
        .concat(-r, " Z");
    return s;
  },
  wU = function (e, t) {
    if (!e || !t) return !1;
    var r = e.x,
      n = e.y,
      o = t.x,
      i = t.y,
      a = t.width,
      c = t.height;
    if (Math.abs(a) > 0 && Math.abs(c) > 0) {
      var u = Math.min(o, o + a),
        s = Math.max(o, o + a),
        l = Math.min(i, i + c),
        f = Math.max(i, i + c);
      return r >= u && r <= s && n >= l && n <= f;
    }
    return !1;
  },
  xU = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  Oh = function (e) {
    var t = Pk(Pk({}, xU), e),
      r = w.useRef(),
      n = w.useState(-1),
      o = pU(n, 2),
      i = o[0],
      a = o[1];
    w.useEffect(function () {
      if (r.current && r.current.getTotalLength)
        try {
          var x = r.current.getTotalLength();
          x && a(x);
        } catch {}
    }, []);
    var c = t.x,
      u = t.y,
      s = t.width,
      l = t.height,
      f = t.radius,
      p = t.className,
      h = t.animationEasing,
      v = t.animationDuration,
      d = t.animationBegin,
      y = t.isAnimationActive,
      m = t.isUpdateAnimationActive;
    if (c !== +c || u !== +u || s !== +s || l !== +l || s === 0 || l === 0)
      return null;
    var b = de("recharts-rectangle", p);
    return m
      ? I.createElement(
          vr,
          {
            canBegin: i > 0,
            from: { width: s, height: l, x: c, y: u },
            to: { width: s, height: l, x: c, y: u },
            duration: v,
            animationEasing: h,
            isActive: m,
          },
          function (x) {
            var g = x.width,
              O = x.height,
              S = x.x,
              j = x.y;
            return I.createElement(
              vr,
              {
                canBegin: i > 0,
                from: "0px ".concat(i === -1 ? 1 : i, "px"),
                to: "".concat(i, "px 0px"),
                attributeName: "strokeDasharray",
                begin: d,
                duration: v,
                isActive: y,
                easing: h,
              },
              I.createElement(
                "path",
                xc({}, ve(t, !0), {
                  className: b,
                  d: Ek(S, j, g, O, f),
                  ref: r,
                }),
              ),
            );
          },
        )
      : I.createElement(
          "path",
          xc({}, ve(t, !0), { className: b, d: Ek(c, u, s, l, f) }),
        );
  };
function Sh() {
  return (
    (Sh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Sh.apply(this, arguments)
  );
}
var Mk = function (e) {
  var t = e.cx,
    r = e.cy,
    n = e.r,
    o = e.className,
    i = de("recharts-dot", o);
  return t === +t && r === +r && n === +n
    ? w.createElement(
        "circle",
        Sh({}, ve(e, !1), sa(e), { className: i, cx: t, cy: r, r: n }),
      )
    : null;
};
function ni(e) {
  "@babel/helpers - typeof";
  return (
    (ni =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ni(e)
  );
}
var OU = ["x", "y", "top", "left", "width", "height", "className"];
function jh() {
  return (
    (jh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    jh.apply(this, arguments)
  );
}
function _k(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function SU(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _k(Object(r), !0).forEach(function (n) {
          jU(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _k(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function jU(e, t, r) {
  return (
    (t = kU(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function kU(e) {
  var t = PU(e, "string");
  return ni(t) == "symbol" ? t : t + "";
}
function PU(e, t) {
  if (ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function EU(e, t) {
  if (e == null) return {};
  var r = MU(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function MU(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var _U = function (e, t, r, n, o, i) {
    return "M"
      .concat(e, ",")
      .concat(o, "v")
      .concat(n, "M")
      .concat(i, ",")
      .concat(t, "h")
      .concat(r);
  },
  AU = function (e) {
    var t = e.x,
      r = t === void 0 ? 0 : t,
      n = e.y,
      o = n === void 0 ? 0 : n,
      i = e.top,
      a = i === void 0 ? 0 : i,
      c = e.left,
      u = c === void 0 ? 0 : c,
      s = e.width,
      l = s === void 0 ? 0 : s,
      f = e.height,
      p = f === void 0 ? 0 : f,
      h = e.className,
      v = EU(e, OU),
      d = SU({ x: r, y: o, top: a, left: u, width: l, height: p }, v);
    return !V(r) || !V(o) || !V(l) || !V(p) || !V(a) || !V(u)
      ? null
      : I.createElement(
          "path",
          jh({}, ve(d, !0), {
            className: de("recharts-cross", h),
            d: _U(r, o, l, p, a, u),
          }),
        );
  },
  kh,
  Ak;
function TU() {
  if (Ak) return kh;
  Ak = 1;
  var e = jw(),
    t = e(Object.getPrototypeOf, Object);
  return (kh = t), kh;
}
var Ph, Tk;
function CU() {
  if (Tk) return Ph;
  Tk = 1;
  var e = Ut(),
    t = TU(),
    r = $t(),
    n = "[object Object]",
    o = Function.prototype,
    i = Object.prototype,
    a = o.toString,
    c = i.hasOwnProperty,
    u = a.call(Object);
  function s(l) {
    if (!r(l) || e(l) != n) return !1;
    var f = t(l);
    if (f === null) return !0;
    var p = c.call(f, "constructor") && f.constructor;
    return typeof p == "function" && p instanceof p && a.call(p) == u;
  }
  return (Ph = s), Ph;
}
var DU = CU();
const IU = be(DU);
var Eh, Ck;
function NU() {
  if (Ck) return Eh;
  Ck = 1;
  var e = Ut(),
    t = $t(),
    r = "[object Boolean]";
  function n(o) {
    return o === !0 || o === !1 || (t(o) && e(o) == r);
  }
  return (Eh = n), Eh;
}
var RU = NU();
const LU = be(RU);
function oi(e) {
  "@babel/helpers - typeof";
  return (
    (oi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    oi(e)
  );
}
function Oc() {
  return (
    (Oc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Oc.apply(this, arguments)
  );
}
function BU(e, t) {
  return $U(e) || UU(e, t) || FU(e, t) || zU();
}
function zU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FU(e, t) {
  if (e) {
    if (typeof e == "string") return Dk(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Dk(e, t);
  }
}
function Dk(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function UU(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      c = [],
      u = !0,
      s = !1;
    try {
      if (((i = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t);
          u = !0
        );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function $U(e) {
  if (Array.isArray(e)) return e;
}
function Ik(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Nk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ik(Object(r), !0).forEach(function (n) {
          HU(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ik(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function HU(e, t, r) {
  return (
    (t = WU(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function WU(e) {
  var t = qU(e, "string");
  return oi(t) == "symbol" ? t : t + "";
}
function qU(e, t) {
  if (oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rk = function (e, t, r, n, o) {
    var i = r - n,
      a;
    return (
      (a = "M ".concat(e, ",").concat(t)),
      (a += "L ".concat(e + r, ",").concat(t)),
      (a += "L ".concat(e + r - i / 2, ",").concat(t + o)),
      (a += "L ".concat(e + r - i / 2 - n, ",").concat(t + o)),
      (a += "L ".concat(e, ",").concat(t, " Z")),
      a
    );
  },
  GU = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  VU = function (e) {
    var t = Nk(Nk({}, GU), e),
      r = w.useRef(),
      n = w.useState(-1),
      o = BU(n, 2),
      i = o[0],
      a = o[1];
    w.useEffect(function () {
      if (r.current && r.current.getTotalLength)
        try {
          var b = r.current.getTotalLength();
          b && a(b);
        } catch {}
    }, []);
    var c = t.x,
      u = t.y,
      s = t.upperWidth,
      l = t.lowerWidth,
      f = t.height,
      p = t.className,
      h = t.animationEasing,
      v = t.animationDuration,
      d = t.animationBegin,
      y = t.isUpdateAnimationActive;
    if (
      c !== +c ||
      u !== +u ||
      s !== +s ||
      l !== +l ||
      f !== +f ||
      (s === 0 && l === 0) ||
      f === 0
    )
      return null;
    var m = de("recharts-trapezoid", p);
    return y
      ? I.createElement(
          vr,
          {
            canBegin: i > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: f, x: c, y: u },
            to: { upperWidth: s, lowerWidth: l, height: f, x: c, y: u },
            duration: v,
            animationEasing: h,
            isActive: y,
          },
          function (b) {
            var x = b.upperWidth,
              g = b.lowerWidth,
              O = b.height,
              S = b.x,
              j = b.y;
            return I.createElement(
              vr,
              {
                canBegin: i > 0,
                from: "0px ".concat(i === -1 ? 1 : i, "px"),
                to: "".concat(i, "px 0px"),
                attributeName: "strokeDasharray",
                begin: d,
                duration: v,
                easing: h,
              },
              I.createElement(
                "path",
                Oc({}, ve(t, !0), {
                  className: m,
                  d: Rk(S, j, x, g, O),
                  ref: r,
                }),
              ),
            );
          },
        )
      : I.createElement(
          "g",
          null,
          I.createElement(
            "path",
            Oc({}, ve(t, !0), { className: m, d: Rk(c, u, s, l, f) }),
          ),
        );
  },
  XU = [
    "option",
    "shapeType",
    "propTransformer",
    "activeClassName",
    "isActive",
  ];
function ii(e) {
  "@babel/helpers - typeof";
  return (
    (ii =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ii(e)
  );
}
function KU(e, t) {
  if (e == null) return {};
  var r = YU(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function YU(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Lk(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Sc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lk(Object(r), !0).forEach(function (n) {
          ZU(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lk(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ZU(e, t, r) {
  return (
    (t = JU(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function JU(e) {
  var t = QU(e, "string");
  return ii(t) == "symbol" ? t : t + "";
}
function QU(e, t) {
  if (ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function e$(e, t) {
  return Sc(Sc({}, t), e);
}
function t$(e, t) {
  return e === "symbols";
}
function Bk(e) {
  var t = e.shapeType,
    r = e.elementProps;
  switch (t) {
    case "rectangle":
      return I.createElement(Oh, r);
    case "trapezoid":
      return I.createElement(VU, r);
    case "sector":
      return I.createElement(Vj, r);
    case "symbols":
      if (t$(t)) return I.createElement(Hl, r);
      break;
    default:
      return null;
  }
}
function r$(e) {
  return w.isValidElement(e) ? e.props : e;
}
function n$(e) {
  var t = e.option,
    r = e.shapeType,
    n = e.propTransformer,
    o = n === void 0 ? e$ : n,
    i = e.activeClassName,
    a = i === void 0 ? "recharts-active-shape" : i,
    c = e.isActive,
    u = KU(e, XU),
    s;
  if (w.isValidElement(t)) s = w.cloneElement(t, Sc(Sc({}, u), r$(t)));
  else if (fe(t)) s = t(u);
  else if (IU(t) && !LU(t)) {
    var l = o(t, u);
    s = I.createElement(Bk, { shapeType: r, elementProps: l });
  } else {
    var f = u;
    s = I.createElement(Bk, { shapeType: r, elementProps: f });
  }
  return c ? I.createElement(Re, { className: a }, s) : s;
}
function jc(e, t) {
  return t != null && "trapezoids" in e.props;
}
function kc(e, t) {
  return t != null && "sectors" in e.props;
}
function ai(e, t) {
  return t != null && "points" in e.props;
}
function o$(e, t) {
  var r,
    n,
    o =
      e.x ===
        (t == null || (r = t.labelViewBox) === null || r === void 0
          ? void 0
          : r.x) || e.x === t.x,
    i =
      e.y ===
        (t == null || (n = t.labelViewBox) === null || n === void 0
          ? void 0
          : n.y) || e.y === t.y;
  return o && i;
}
function i$(e, t) {
  var r = e.endAngle === t.endAngle,
    n = e.startAngle === t.startAngle;
  return r && n;
}
function a$(e, t) {
  var r = e.x === t.x,
    n = e.y === t.y,
    o = e.z === t.z;
  return r && n && o;
}
function c$(e, t) {
  var r;
  return jc(e, t) ? (r = o$) : kc(e, t) ? (r = i$) : ai(e, t) && (r = a$), r;
}
function u$(e, t) {
  var r;
  return (
    jc(e, t)
      ? (r = "trapezoids")
      : kc(e, t)
        ? (r = "sectors")
        : ai(e, t) && (r = "points"),
    r
  );
}
function s$(e, t) {
  if (jc(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload;
  }
  if (kc(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload;
  }
  return ai(e, t) ? t.payload : {};
}
function l$(e) {
  var t = e.activeTooltipItem,
    r = e.graphicalItem,
    n = e.itemData,
    o = u$(r, t),
    i = s$(r, t),
    a = n.filter(function (u, s) {
      var l = qd(i, u),
        f = r.props[o].filter(function (v) {
          var d = c$(r, t);
          return d(v, t);
        }),
        p = r.props[o].indexOf(f[f.length - 1]),
        h = s === p;
      return l && h;
    }),
    c = n.indexOf(a[a.length - 1]);
  return c;
}
var Mh, zk;
function f$() {
  if (zk) return Mh;
  zk = 1;
  var e = Math.ceil,
    t = Math.max;
  function r(n, o, i, a) {
    for (var c = -1, u = t(e((o - n) / (i || 1)), 0), s = Array(u); u--; )
      (s[a ? u : ++c] = n), (n += i);
    return s;
  }
  return (Mh = r), Mh;
}
var _h, Fk;
function Uk() {
  if (Fk) return _h;
  Fk = 1;
  var e = cO(),
    t = 1 / 0,
    r = 17976931348623157e292;
  function n(o) {
    if (!o) return o === 0 ? o : 0;
    if (((o = e(o)), o === t || o === -t)) {
      var i = o < 0 ? -1 : 1;
      return i * r;
    }
    return o === o ? o : 0;
  }
  return (_h = n), _h;
}
var Ah, $k;
function p$() {
  if ($k) return Ah;
  $k = 1;
  var e = f$(),
    t = Ea(),
    r = Uk();
  function n(o) {
    return function (i, a, c) {
      return (
        c && typeof c != "number" && t(i, a, c) && (a = c = void 0),
        (i = r(i)),
        a === void 0 ? ((a = i), (i = 0)) : (a = r(a)),
        (c = c === void 0 ? (i < a ? 1 : -1) : r(c)),
        e(i, a, c, o)
      );
    };
  }
  return (Ah = n), Ah;
}
var Th, Hk;
function d$() {
  if (Hk) return Th;
  Hk = 1;
  var e = p$(),
    t = e();
  return (Th = t), Th;
}
var h$ = d$();
const Pc = be(h$);
function ci(e) {
  "@babel/helpers - typeof";
  return (
    (ci =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ci(e)
  );
}
function Wk(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function qk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wk(Object(r), !0).forEach(function (n) {
          Gk(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wk(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Gk(e, t, r) {
  return (
    (t = y$(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function y$(e) {
  var t = v$(e, "string");
  return ci(t) == "symbol" ? t : t + "";
}
function v$(e, t) {
  if (ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var m$ = ["Webkit", "Moz", "O", "ms"],
  g$ = function (e, t) {
    var r = e.replace(/(\w)/, function (o) {
        return o.toUpperCase();
      }),
      n = m$.reduce(function (o, i) {
        return qk(qk({}, o), {}, Gk({}, i + r, t));
      }, {});
    return (n[e] = t), n;
  };
function Tn(e) {
  "@babel/helpers - typeof";
  return (
    (Tn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Tn(e)
  );
}
function Ec() {
  return (
    (Ec = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ec.apply(this, arguments)
  );
}
function Vk(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ch(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vk(Object(r), !0).forEach(function (n) {
          et(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vk(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function b$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Yk(n.key), n);
  }
}
function w$(e, t, r) {
  return (
    t && Xk(e.prototype, t),
    r && Xk(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function x$(e, t, r) {
  return (
    (t = Mc(t)),
    O$(
      e,
      Kk() ? Reflect.construct(t, r || [], Mc(e).constructor) : t.apply(e, r),
    )
  );
}
function O$(e, t) {
  if (t && (Tn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return S$(e);
}
function S$(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Kk() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Kk = function () {
    return !!e;
  })();
}
function Mc(e) {
  return (
    (Mc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Mc(e)
  );
}
function j$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Dh(e, t);
}
function Dh(e, t) {
  return (
    (Dh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Dh(e, t)
  );
}
function et(e, t, r) {
  return (
    (t = Yk(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Yk(e) {
  var t = k$(e, "string");
  return Tn(t) == "symbol" ? t : t + "";
}
function k$(e, t) {
  if (Tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var P$ = function (e) {
    var t = e.data,
      r = e.startIndex,
      n = e.endIndex,
      o = e.x,
      i = e.width,
      a = e.travellerWidth;
    if (!t || !t.length) return {};
    var c = t.length,
      u = Mo()
        .domain(Pc(0, c))
        .range([o, o + i - a]),
      s = u.domain().map(function (l) {
        return u(l);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: u(r),
      endX: u(n),
      scale: u,
      scaleValues: s,
    };
  },
  Zk = function (e) {
    return e.changedTouches && !!e.changedTouches.length;
  },
  Cn = (function (e) {
    function t(r) {
      var n;
      return (
        b$(this, t),
        (n = x$(this, t, [r])),
        et(n, "handleDrag", function (o) {
          n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving
              ? n.handleTravellerMove(o)
              : n.state.isSlideMoving && n.handleSlideDrag(o);
        }),
        et(n, "handleTouchMove", function (o) {
          o.changedTouches != null &&
            o.changedTouches.length > 0 &&
            n.handleDrag(o.changedTouches[0]);
        }),
        et(n, "handleDragEnd", function () {
          n.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
            var o = n.props,
              i = o.endIndex,
              a = o.onDragEnd,
              c = o.startIndex;
            a == null || a({ endIndex: i, startIndex: c });
          }),
            n.detachDragEndListener();
        }),
        et(n, "handleLeaveWrapper", function () {
          (n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(
              n.handleDragEnd,
              n.props.leaveTimeOut,
            ));
        }),
        et(n, "handleEnterSlideOrTraveller", function () {
          n.setState({ isTextActive: !0 });
        }),
        et(n, "handleLeaveSlideOrTraveller", function () {
          n.setState({ isTextActive: !1 });
        }),
        et(n, "handleSlideDragStart", function (o) {
          var i = Zk(o) ? o.changedTouches[0] : o;
          n.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: i.pageX,
          }),
            n.attachDragEndListener();
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(n, "startX"),
          endX: n.handleTravellerDragStart.bind(n, "endX"),
        }),
        (n.state = {}),
        n
      );
    }
    return (
      j$(t, e),
      w$(
        t,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              this.leaveTimer &&
                (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener();
            },
          },
          {
            key: "getIndex",
            value: function (r) {
              var n = r.startX,
                o = r.endX,
                i = this.state.scaleValues,
                a = this.props,
                c = a.gap,
                u = a.data,
                s = u.length - 1,
                l = Math.min(n, o),
                f = Math.max(n, o),
                p = t.getIndexInRange(i, l),
                h = t.getIndexInRange(i, f);
              return {
                startIndex: p - (p % c),
                endIndex: h === s ? s : h - (h % c),
              };
            },
          },
          {
            key: "getTextOfTick",
            value: function (r) {
              var n = this.props,
                o = n.data,
                i = n.tickFormatter,
                a = n.dataKey,
                c = Dt(o[r], a, r);
              return fe(i) ? i(c, r) : c;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0),
                window.addEventListener("mousemove", this.handleDrag, !0);
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0),
                window.removeEventListener("mousemove", this.handleDrag, !0);
            },
          },
          {
            key: "handleSlideDrag",
            value: function (r) {
              var n = this.state,
                o = n.slideMoveStartX,
                i = n.startX,
                a = n.endX,
                c = this.props,
                u = c.x,
                s = c.width,
                l = c.travellerWidth,
                f = c.startIndex,
                p = c.endIndex,
                h = c.onChange,
                v = r.pageX - o;
              v > 0
                ? (v = Math.min(v, u + s - l - a, u + s - l - i))
                : v < 0 && (v = Math.max(v, u - i, u - a));
              var d = this.getIndex({ startX: i + v, endX: a + v });
              (d.startIndex !== f || d.endIndex !== p) && h && h(d),
                this.setState({
                  startX: i + v,
                  endX: a + v,
                  slideMoveStartX: r.pageX,
                });
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (r, n) {
              var o = Zk(n) ? n.changedTouches[0] : n;
              this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: r,
                brushMoveStartX: o.pageX,
              }),
                this.attachDragEndListener();
            },
          },
          {
            key: "handleTravellerMove",
            value: function (r) {
              var n = this.state,
                o = n.brushMoveStartX,
                i = n.movingTravellerId,
                a = n.endX,
                c = n.startX,
                u = this.state[i],
                s = this.props,
                l = s.x,
                f = s.width,
                p = s.travellerWidth,
                h = s.onChange,
                v = s.gap,
                d = s.data,
                y = { startX: this.state.startX, endX: this.state.endX },
                m = r.pageX - o;
              m > 0
                ? (m = Math.min(m, l + f - p - u))
                : m < 0 && (m = Math.max(m, l - u)),
                (y[i] = u + m);
              var b = this.getIndex(y),
                x = b.startIndex,
                g = b.endIndex,
                O = function () {
                  var S = d.length - 1;
                  return (
                    (i === "startX" && (a > c ? x % v === 0 : g % v === 0)) ||
                    (a < c && g === S) ||
                    (i === "endX" && (a > c ? g % v === 0 : x % v === 0)) ||
                    (a > c && g === S)
                  );
                };
              this.setState(
                et(et({}, i, u + m), "brushMoveStartX", r.pageX),
                function () {
                  h && O() && h(b);
                },
              );
            },
          },
          {
            key: "handleTravellerMoveKeyboard",
            value: function (r, n) {
              var o = this,
                i = this.state,
                a = i.scaleValues,
                c = i.startX,
                u = i.endX,
                s = this.state[n],
                l = a.indexOf(s);
              if (l !== -1) {
                var f = l + r;
                if (!(f === -1 || f >= a.length)) {
                  var p = a[f];
                  (n === "startX" && p >= u) ||
                    (n === "endX" && p <= c) ||
                    this.setState(et({}, n, p), function () {
                      o.props.onChange(
                        o.getIndex({
                          startX: o.state.startX,
                          endX: o.state.endX,
                        }),
                      );
                    });
                }
              }
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var r = this.props,
                n = r.x,
                o = r.y,
                i = r.width,
                a = r.height,
                c = r.fill,
                u = r.stroke;
              return I.createElement("rect", {
                stroke: u,
                fill: c,
                x: n,
                y: o,
                width: i,
                height: a,
              });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var r = this.props,
                n = r.x,
                o = r.y,
                i = r.width,
                a = r.height,
                c = r.data,
                u = r.children,
                s = r.padding,
                l = w.Children.only(u);
              return l
                ? I.cloneElement(l, {
                    x: n,
                    y: o,
                    width: i,
                    height: a,
                    margin: s,
                    compact: !0,
                    data: c,
                  })
                : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (r, n) {
              var o,
                i,
                a = this,
                c = this.props,
                u = c.y,
                s = c.travellerWidth,
                l = c.height,
                f = c.traveller,
                p = c.ariaLabel,
                h = c.data,
                v = c.startIndex,
                d = c.endIndex,
                y = Math.max(r, this.props.x),
                m = Ch(
                  Ch({}, ve(this.props, !1)),
                  {},
                  { x: y, y: u, width: s, height: l },
                ),
                b =
                  p ||
                  "Min value: "
                    .concat(
                      (o = h[v]) === null || o === void 0 ? void 0 : o.name,
                      ", Max value: ",
                    )
                    .concat(
                      (i = h[d]) === null || i === void 0 ? void 0 : i.name,
                    );
              return I.createElement(
                Re,
                {
                  tabIndex: 0,
                  role: "slider",
                  "aria-label": b,
                  "aria-valuenow": r,
                  className: "recharts-brush-traveller",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[n],
                  onTouchStart: this.travellerDragStartHandlers[n],
                  onKeyDown: function (x) {
                    ["ArrowLeft", "ArrowRight"].includes(x.key) &&
                      (x.preventDefault(),
                      x.stopPropagation(),
                      a.handleTravellerMoveKeyboard(
                        x.key === "ArrowRight" ? 1 : -1,
                        n,
                      ));
                  },
                  onFocus: function () {
                    a.setState({ isTravellerFocused: !0 });
                  },
                  onBlur: function () {
                    a.setState({ isTravellerFocused: !1 });
                  },
                  style: { cursor: "col-resize" },
                },
                t.renderTraveller(f, m),
              );
            },
          },
          {
            key: "renderSlide",
            value: function (r, n) {
              var o = this.props,
                i = o.y,
                a = o.height,
                c = o.stroke,
                u = o.travellerWidth,
                s = Math.min(r, n) + u,
                l = Math.max(Math.abs(n - r) - u, 0);
              return I.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: "move" },
                stroke: "none",
                fill: c,
                fillOpacity: 0.2,
                x: s,
                y: i,
                width: l,
                height: a,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var r = this.props,
                n = r.startIndex,
                o = r.endIndex,
                i = r.y,
                a = r.height,
                c = r.travellerWidth,
                u = r.stroke,
                s = this.state,
                l = s.startX,
                f = s.endX,
                p = 5,
                h = { pointerEvents: "none", fill: u };
              return I.createElement(
                Re,
                { className: "recharts-brush-texts" },
                I.createElement(
                  Ia,
                  Ec(
                    {
                      textAnchor: "end",
                      verticalAnchor: "middle",
                      x: Math.min(l, f) - p,
                      y: i + a / 2,
                    },
                    h,
                  ),
                  this.getTextOfTick(n),
                ),
                I.createElement(
                  Ia,
                  Ec(
                    {
                      textAnchor: "start",
                      verticalAnchor: "middle",
                      x: Math.max(l, f) + c + p,
                      y: i + a / 2,
                    },
                    h,
                  ),
                  this.getTextOfTick(o),
                ),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                n = r.data,
                o = r.className,
                i = r.children,
                a = r.x,
                c = r.y,
                u = r.width,
                s = r.height,
                l = r.alwaysShowText,
                f = this.state,
                p = f.startX,
                h = f.endX,
                v = f.isTextActive,
                d = f.isSlideMoving,
                y = f.isTravellerMoving,
                m = f.isTravellerFocused;
              if (
                !n ||
                !n.length ||
                !V(a) ||
                !V(c) ||
                !V(u) ||
                !V(s) ||
                u <= 0 ||
                s <= 0
              )
                return null;
              var b = de("recharts-brush", o),
                x = I.Children.count(i) === 1,
                g = g$("userSelect", "none");
              return I.createElement(
                Re,
                {
                  className: b,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: g,
                },
                this.renderBackground(),
                x && this.renderPanorama(),
                this.renderSlide(p, h),
                this.renderTravellerLayer(p, "startX"),
                this.renderTravellerLayer(h, "endX"),
                (v || d || y || m || l) && this.renderText(),
              );
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (r) {
              var n = r.x,
                o = r.y,
                i = r.width,
                a = r.height,
                c = r.stroke,
                u = Math.floor(o + a / 2) - 1;
              return I.createElement(
                I.Fragment,
                null,
                I.createElement("rect", {
                  x: n,
                  y: o,
                  width: i,
                  height: a,
                  fill: c,
                  stroke: "none",
                }),
                I.createElement("line", {
                  x1: n + 1,
                  y1: u,
                  x2: n + i - 1,
                  y2: u,
                  fill: "none",
                  stroke: "#fff",
                }),
                I.createElement("line", {
                  x1: n + 1,
                  y1: u + 2,
                  x2: n + i - 1,
                  y2: u + 2,
                  fill: "none",
                  stroke: "#fff",
                }),
              );
            },
          },
          {
            key: "renderTraveller",
            value: function (r, n) {
              var o;
              return (
                I.isValidElement(r)
                  ? (o = I.cloneElement(r, n))
                  : fe(r)
                    ? (o = r(n))
                    : (o = t.renderDefaultTraveller(n)),
                o
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (r, n) {
              var o = r.data,
                i = r.width,
                a = r.x,
                c = r.travellerWidth,
                u = r.updateId,
                s = r.startIndex,
                l = r.endIndex;
              if (o !== n.prevData || u !== n.prevUpdateId)
                return Ch(
                  {
                    prevData: o,
                    prevTravellerWidth: c,
                    prevUpdateId: u,
                    prevX: a,
                    prevWidth: i,
                  },
                  o && o.length
                    ? P$({
                        data: o,
                        width: i,
                        x: a,
                        travellerWidth: c,
                        startIndex: s,
                        endIndex: l,
                      })
                    : { scale: null, scaleValues: null },
                );
              if (
                n.scale &&
                (i !== n.prevWidth ||
                  a !== n.prevX ||
                  c !== n.prevTravellerWidth)
              ) {
                n.scale.range([a, a + i - c]);
                var f = n.scale.domain().map(function (p) {
                  return n.scale(p);
                });
                return {
                  prevData: o,
                  prevTravellerWidth: c,
                  prevUpdateId: u,
                  prevX: a,
                  prevWidth: i,
                  startX: n.scale(r.startIndex),
                  endX: n.scale(r.endIndex),
                  scaleValues: f,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (r, n) {
              for (var o = r.length, i = 0, a = o - 1; a - i > 1; ) {
                var c = Math.floor((i + a) / 2);
                r[c] > n ? (a = c) : (i = c);
              }
              return n >= r[a] ? a : i;
            },
          },
        ],
      )
    );
  })(w.PureComponent);
et(Cn, "displayName", "Brush"),
  et(Cn, "defaultProps", {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: "#fff",
    stroke: "#666",
    padding: { top: 1, right: 1, bottom: 1, left: 1 },
    leaveTimeOut: 1e3,
    alwaysShowText: !1,
  });
var Ih, Jk;
function E$() {
  if (Jk) return Ih;
  Jk = 1;
  var e = Sp();
  function t(r, n) {
    var o;
    return (
      e(r, function (i, a, c) {
        return (o = n(i, a, c)), !o;
      }),
      !!o
    );
  }
  return (Ih = t), Ih;
}
var Nh, Qk;
function M$() {
  if (Qk) return Nh;
  Qk = 1;
  var e = G1(),
    t = lr(),
    r = E$(),
    n = Xe(),
    o = Ea();
  function i(a, c, u) {
    var s = n(a) ? e : r;
    return u && o(a, c, u) && (c = void 0), s(a, t(c, 3));
  }
  return (Nh = i), Nh;
}
var _$ = M$();
const A$ = be(_$);
var It = function (e, t) {
    var r = e.alwaysShow,
      n = e.ifOverflow;
    return r && (n = "extendDomain"), n === t;
  },
  Rh,
  eP;
function T$() {
  if (eP) return Rh;
  eP = 1;
  var e = Bx();
  function t(r, n, o) {
    n == "__proto__" && e
      ? e(r, n, { configurable: !0, enumerable: !0, value: o, writable: !0 })
      : (r[n] = o);
  }
  return (Rh = t), Rh;
}
var Lh, tP;
function C$() {
  if (tP) return Lh;
  tP = 1;
  var e = T$(),
    t = kx(),
    r = lr();
  function n(o, i) {
    var a = {};
    return (
      (i = r(i, 3)),
      t(o, function (c, u, s) {
        e(a, u, i(c, u, s));
      }),
      a
    );
  }
  return (Lh = n), Lh;
}
var D$ = C$();
const I$ = be(D$);
var Bh, rP;
function N$() {
  if (rP) return Bh;
  rP = 1;
  function e(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (!r(t[n], n, t)) return !1;
    return !0;
  }
  return (Bh = e), Bh;
}
var zh, nP;
function R$() {
  if (nP) return zh;
  nP = 1;
  var e = Sp();
  function t(r, n) {
    var o = !0;
    return (
      e(r, function (i, a, c) {
        return (o = !!n(i, a, c)), o;
      }),
      o
    );
  }
  return (zh = t), zh;
}
var Fh, oP;
function L$() {
  if (oP) return Fh;
  oP = 1;
  var e = N$(),
    t = R$(),
    r = lr(),
    n = Xe(),
    o = Ea();
  function i(a, c, u) {
    var s = n(a) ? e : t;
    return u && o(a, c, u) && (c = void 0), s(a, r(c, 3));
  }
  return (Fh = i), Fh;
}
var B$ = L$();
const iP = be(B$);
var z$ = ["x", "y"];
function ui(e) {
  "@babel/helpers - typeof";
  return (
    (ui =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ui(e)
  );
}
function Uh() {
  return (
    (Uh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Uh.apply(this, arguments)
  );
}
function aP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? aP(Object(r), !0).forEach(function (n) {
          F$(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : aP(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function F$(e, t, r) {
  return (
    (t = U$(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function U$(e) {
  var t = $$(e, "string");
  return ui(t) == "symbol" ? t : t + "";
}
function $$(e, t) {
  if (ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function H$(e, t) {
  if (e == null) return {};
  var r = W$(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function W$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function q$(e, t) {
  var r = e.x,
    n = e.y,
    o = H$(e, z$),
    i = "".concat(r),
    a = parseInt(i, 10),
    c = "".concat(n),
    u = parseInt(c, 10),
    s = "".concat(t.height || o.height),
    l = parseInt(s, 10),
    f = "".concat(t.width || o.width),
    p = parseInt(f, 10);
  return si(
    si(si(si(si({}, t), o), a ? { x: a } : {}), u ? { y: u } : {}),
    {},
    { height: l, width: p, name: t.name, radius: t.radius },
  );
}
function cP(e) {
  return I.createElement(
    n$,
    Uh(
      {
        shapeType: "rectangle",
        propTransformer: q$,
        activeClassName: "recharts-active-bar",
      },
      e,
    ),
  );
}
var G$ = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function (r, n) {
      if (typeof e == "number") return e;
      var o = V(r) || JR(r);
      return o ? e(r, n) : (o || $r(), t);
    };
  },
  V$ = ["value", "background"],
  uP;
function Dn(e) {
  "@babel/helpers - typeof";
  return (
    (Dn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Dn(e)
  );
}
function X$(e, t) {
  if (e == null) return {};
  var r = K$(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function K$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function _c() {
  return (
    (_c = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _c.apply(this, arguments)
  );
}
function sP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sP(Object(r), !0).forEach(function (n) {
          mr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sP(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Y$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, pP(n.key), n);
  }
}
function Z$(e, t, r) {
  return (
    t && lP(e.prototype, t),
    r && lP(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function J$(e, t, r) {
  return (
    (t = Ac(t)),
    Q$(
      e,
      fP() ? Reflect.construct(t, r || [], Ac(e).constructor) : t.apply(e, r),
    )
  );
}
function Q$(e, t) {
  if (t && (Dn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return eH(e);
}
function eH(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function fP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (fP = function () {
    return !!e;
  })();
}
function Ac(e) {
  return (
    (Ac = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Ac(e)
  );
}
function tH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && $h(e, t);
}
function $h(e, t) {
  return (
    ($h = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    $h(e, t)
  );
}
function mr(e, t, r) {
  return (
    (t = pP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function pP(e) {
  var t = rH(e, "string");
  return Dn(t) == "symbol" ? t : t + "";
}
function rH(e, t) {
  if (Dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Gr = (function (e) {
  function t() {
    var r;
    Y$(this, t);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return (
      (r = J$(this, t, [].concat(o))),
      mr(r, "state", { isAnimationFinished: !1 }),
      mr(r, "id", ua("recharts-bar-")),
      mr(r, "handleAnimationEnd", function () {
        var a = r.props.onAnimationEnd;
        r.setState({ isAnimationFinished: !0 }), a && a();
      }),
      mr(r, "handleAnimationStart", function () {
        var a = r.props.onAnimationStart;
        r.setState({ isAnimationFinished: !1 }), a && a();
      }),
      r
    );
  }
  return (
    tH(t, e),
    Z$(
      t,
      [
        {
          key: "renderRectanglesStatically",
          value: function (r) {
            var n = this,
              o = this.props,
              i = o.shape,
              a = o.dataKey,
              c = o.activeIndex,
              u = o.activeBar,
              s = ve(this.props, !1);
            return (
              r &&
              r.map(function (l, f) {
                var p = f === c,
                  h = p ? u : i,
                  v = Ae(
                    Ae(Ae({}, s), l),
                    {},
                    {
                      isActive: p,
                      option: h,
                      index: f,
                      dataKey: a,
                      onAnimationStart: n.handleAnimationStart,
                      onAnimationEnd: n.handleAnimationEnd,
                    },
                  );
                return I.createElement(
                  Re,
                  _c(
                    { className: "recharts-bar-rectangle" },
                    la(n.props, l, f),
                    {
                      key: "rectangle-"
                        .concat(l == null ? void 0 : l.x, "-")
                        .concat(l == null ? void 0 : l.y, "-")
                        .concat(l == null ? void 0 : l.value, "-")
                        .concat(f),
                    },
                  ),
                  I.createElement(cP, v),
                );
              })
            );
          },
        },
        {
          key: "renderRectanglesWithAnimation",
          value: function () {
            var r = this,
              n = this.props,
              o = n.data,
              i = n.layout,
              a = n.isAnimationActive,
              c = n.animationBegin,
              u = n.animationDuration,
              s = n.animationEasing,
              l = n.animationId,
              f = this.state.prevData;
            return I.createElement(
              vr,
              {
                begin: c,
                duration: u,
                isActive: a,
                easing: s,
                from: { t: 0 },
                to: { t: 1 },
                key: "bar-".concat(l),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (p) {
                var h = p.t,
                  v = o.map(function (d, y) {
                    var m = f && f[y];
                    if (m) {
                      var b = ln(m.x, d.x),
                        x = ln(m.y, d.y),
                        g = ln(m.width, d.width),
                        O = ln(m.height, d.height);
                      return Ae(
                        Ae({}, d),
                        {},
                        { x: b(h), y: x(h), width: g(h), height: O(h) },
                      );
                    }
                    if (i === "horizontal") {
                      var S = ln(0, d.height),
                        j = S(h);
                      return Ae(
                        Ae({}, d),
                        {},
                        { y: d.y + d.height - j, height: j },
                      );
                    }
                    var k = ln(0, d.width),
                      A = k(h);
                    return Ae(Ae({}, d), {}, { width: A });
                  });
                return I.createElement(
                  Re,
                  null,
                  r.renderRectanglesStatically(v),
                );
              },
            );
          },
        },
        {
          key: "renderRectangles",
          value: function () {
            var r = this.props,
              n = r.data,
              o = r.isAnimationActive,
              i = this.state.prevData;
            return o && n && n.length && (!i || !qd(i, n))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(n);
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var r = this,
              n = this.props,
              o = n.data,
              i = n.dataKey,
              a = n.activeIndex,
              c = ve(this.props.background, !1);
            return o.map(function (u, s) {
              u.value;
              var l = u.background,
                f = X$(u, V$);
              if (!l) return null;
              var p = Ae(
                Ae(
                  Ae(Ae(Ae({}, f), {}, { fill: "#eee" }, l), c),
                  la(r.props, u, s),
                ),
                {},
                {
                  onAnimationStart: r.handleAnimationStart,
                  onAnimationEnd: r.handleAnimationEnd,
                  dataKey: i,
                  index: s,
                  className: "recharts-bar-background-rectangle",
                },
              );
              return I.createElement(
                cP,
                _c(
                  {
                    key: "background-bar-".concat(s),
                    option: r.props.background,
                    isActive: s === a,
                  },
                  p,
                ),
              );
            });
          },
        },
        {
          key: "renderErrorBar",
          value: function (r, n) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var o = this.props,
              i = o.data,
              a = o.xAxis,
              c = o.yAxis,
              u = o.layout,
              s = o.children,
              l = bt(s, uc);
            if (!l) return null;
            var f = u === "vertical" ? i[0].height / 2 : i[0].width / 2,
              p = function (v, d) {
                var y = Array.isArray(v.value) ? v.value[1] : v.value;
                return { x: v.x, y: v.y, value: y, errorVal: Dt(v, d) };
              },
              h = { clipPath: r ? "url(#clipPath-".concat(n, ")") : null };
            return I.createElement(
              Re,
              h,
              l.map(function (v) {
                return I.cloneElement(v, {
                  key: "error-bar-".concat(n, "-").concat(v.props.dataKey),
                  data: i,
                  xAxis: a,
                  yAxis: c,
                  layout: u,
                  offset: f,
                  dataPointFormatter: p,
                });
              }),
            );
          },
        },
        {
          key: "render",
          value: function () {
            var r = this.props,
              n = r.hide,
              o = r.data,
              i = r.className,
              a = r.xAxis,
              c = r.yAxis,
              u = r.left,
              s = r.top,
              l = r.width,
              f = r.height,
              p = r.isAnimationActive,
              h = r.background,
              v = r.id;
            if (n || !o || !o.length) return null;
            var d = this.state.isAnimationFinished,
              y = de("recharts-bar", i),
              m = a && a.allowDataOverflow,
              b = c && c.allowDataOverflow,
              x = m || b,
              g = ye(v) ? this.id : v;
            return I.createElement(
              Re,
              { className: y },
              m || b
                ? I.createElement(
                    "defs",
                    null,
                    I.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(g) },
                      I.createElement("rect", {
                        x: m ? u : u - l / 2,
                        y: b ? s : s - f / 2,
                        width: m ? l : l * 2,
                        height: b ? f : f * 2,
                      }),
                    ),
                  )
                : null,
              I.createElement(
                Re,
                {
                  className: "recharts-bar-rectangles",
                  clipPath: x ? "url(#clipPath-".concat(g, ")") : null,
                },
                h ? this.renderBackground() : null,
                this.renderRectangles(),
              ),
              this.renderErrorBar(x, g),
              (!p || d) && Wr.renderCallByParent(this.props, o),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (r, n) {
            return r.animationId !== n.prevAnimationId
              ? {
                  prevAnimationId: r.animationId,
                  curData: r.data,
                  prevData: n.curData,
                }
              : r.data !== n.curData
                ? { curData: r.data }
                : null;
          },
        },
      ],
    )
  );
})(w.PureComponent);
(uP = Gr),
  mr(Gr, "displayName", "Bar"),
  mr(Gr, "defaultProps", {
    xAxisId: 0,
    yAxisId: 0,
    legendType: "rect",
    minPointSize: 0,
    hide: !1,
    data: [],
    layout: "vertical",
    activeBar: !1,
    isAnimationActive: !wo.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: "ease",
  }),
  mr(Gr, "getComposedData", function (e) {
    var t = e.props,
      r = e.item,
      n = e.barPosition,
      o = e.bandSize,
      i = e.xAxis,
      a = e.yAxis,
      c = e.xAxisTicks,
      u = e.yAxisTicks,
      s = e.stackedData,
      l = e.dataStartIndex,
      f = e.displayedData,
      p = e.offset,
      h = m9(n, r);
    if (!h) return null;
    var v = t.layout,
      d = r.type.defaultProps,
      y = d !== void 0 ? Ae(Ae({}, d), r.props) : r.props,
      m = y.dataKey,
      b = y.children,
      x = y.minPointSize,
      g = v === "horizontal" ? a : i,
      O = s ? g.scale.domain() : null,
      S = k9({ numericAxis: g }),
      j = bt(b, dO),
      k = f.map(function (A, D) {
        var M, _, C, T, R, N;
        s
          ? (M = g9(s[l + D], O))
          : ((M = Dt(A, m)), Array.isArray(M) || (M = [S, M]));
        var z = G$(x, uP.defaultProps.minPointSize)(M[1], D);
        if (v === "horizontal") {
          var W,
            U = [a.scale(M[0]), a.scale(M[1])],
            B = U[0],
            P = U[1];
          (_ = _j({
            axis: i,
            ticks: c,
            bandSize: o,
            offset: h.offset,
            entry: A,
            index: D,
          })),
            (C = (W = P ?? B) !== null && W !== void 0 ? W : void 0),
            (T = h.size);
          var L = B - P;
          if (
            ((R = Number.isNaN(L) ? 0 : L),
            (N = { x: _, y: a.y, width: T, height: a.height }),
            Math.abs(z) > 0 && Math.abs(R) < Math.abs(z))
          ) {
            var X = gt(R || z) * (Math.abs(z) - Math.abs(R));
            (C -= X), (R += X);
          }
        } else {
          var K = [i.scale(M[0]), i.scale(M[1])],
            Y = K[0],
            Q = K[1];
          if (
            ((_ = Y),
            (C = _j({
              axis: a,
              ticks: u,
              bandSize: o,
              offset: h.offset,
              entry: A,
              index: D,
            })),
            (T = Q - Y),
            (R = h.size),
            (N = { x: i.x, y: C, width: i.width, height: R }),
            Math.abs(z) > 0 && Math.abs(T) < Math.abs(z))
          ) {
            var q = gt(T || z) * (Math.abs(z) - Math.abs(T));
            T += q;
          }
        }
        return Ae(
          Ae(
            Ae({}, A),
            {},
            {
              x: _,
              y: C,
              width: T,
              height: R,
              value: s ? M : M[1],
              payload: A,
              background: N,
            },
            j && j[D] && j[D].props,
          ),
          {},
          {
            tooltipPayload: [Ij(r, A)],
            tooltipPosition: { x: _ + T / 2, y: C + R / 2 },
          },
        );
      });
    return Ae({ data: k, layout: v }, p);
  });
function li(e) {
  "@babel/helpers - typeof";
  return (
    (li =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    li(e)
  );
}
function nH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, yP(n.key), n);
  }
}
function oH(e, t, r) {
  return (
    t && dP(e.prototype, t),
    r && dP(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function hP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function St(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hP(Object(r), !0).forEach(function (n) {
          Tc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hP(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Tc(e, t, r) {
  return (
    (t = yP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function yP(e) {
  var t = iH(e, "string");
  return li(t) == "symbol" ? t : t + "";
}
function iH(e, t) {
  if (li(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var aH = function (e, t, r, n, o) {
    var i = e.width,
      a = e.height,
      c = e.layout,
      u = e.children,
      s = Object.keys(t),
      l = {
        left: r.left,
        leftMirror: r.left,
        right: i - r.right,
        rightMirror: i - r.right,
        top: r.top,
        topMirror: r.top,
        bottom: a - r.bottom,
        bottomMirror: a - r.bottom,
      },
      f = !!Je(u, Gr);
    return s.reduce(function (p, h) {
      var v = t[h],
        d = v.orientation,
        y = v.domain,
        m = v.padding,
        b = m === void 0 ? {} : m,
        x = v.mirror,
        g = v.reversed,
        O = "".concat(d).concat(x ? "Mirror" : ""),
        S,
        j,
        k,
        A,
        D;
      if (
        v.type === "number" &&
        (v.padding === "gap" || v.padding === "no-gap")
      ) {
        var M = y[1] - y[0],
          _ = 1 / 0,
          C = v.categoricalDomain.sort(t5);
        if (
          (C.forEach(function (X, K) {
            K > 0 && (_ = Math.min((X || 0) - (C[K - 1] || 0), _));
          }),
          Number.isFinite(_))
        ) {
          var T = _ / M,
            R = v.layout === "vertical" ? r.height : r.width;
          if (
            (v.padding === "gap" && (S = (T * R) / 2), v.padding === "no-gap")
          ) {
            var N = Tr(e.barCategoryGap, T * R),
              z = (T * R) / 2;
            S = z - N - ((z - N) / R) * N;
          }
        }
      }
      n === "xAxis"
        ? (j = [
            r.left + (b.left || 0) + (S || 0),
            r.left + r.width - (b.right || 0) - (S || 0),
          ])
        : n === "yAxis"
          ? (j =
              c === "horizontal"
                ? [r.top + r.height - (b.bottom || 0), r.top + (b.top || 0)]
                : [
                    r.top + (b.top || 0) + (S || 0),
                    r.top + r.height - (b.bottom || 0) - (S || 0),
                  ])
          : (j = v.range),
        g && (j = [j[1], j[0]]);
      var W = y9(v, o, f),
        U = W.scale,
        B = W.realScaleType;
      U.domain(y).range(j), v9(U);
      var P = j9(U, St(St({}, v), {}, { realScaleType: B }));
      n === "xAxis"
        ? ((D = (d === "top" && !x) || (d === "bottom" && x)),
          (k = r.left),
          (A = l[O] - D * v.height))
        : n === "yAxis" &&
          ((D = (d === "left" && !x) || (d === "right" && x)),
          (k = l[O] - D * v.width),
          (A = r.top));
      var L = St(
        St(St({}, v), P),
        {},
        {
          realScaleType: B,
          x: k,
          y: A,
          scale: U,
          width: n === "xAxis" ? r.width : v.width,
          height: n === "yAxis" ? r.height : v.height,
        },
      );
      return (
        (L.bandSize = fc(L, P)),
        !v.hide && n === "xAxis"
          ? (l[O] += (D ? -1 : 1) * L.height)
          : v.hide || (l[O] += (D ? -1 : 1) * L.width),
        St(St({}, p), {}, Tc({}, h, L))
      );
    }, {});
  },
  vP = function (e, t) {
    var r = e.x,
      n = e.y,
      o = t.x,
      i = t.y;
    return {
      x: Math.min(r, o),
      y: Math.min(n, i),
      width: Math.abs(o - r),
      height: Math.abs(i - n),
    };
  },
  cH = function (e) {
    var t = e.x1,
      r = e.y1,
      n = e.x2,
      o = e.y2;
    return vP({ x: t, y: r }, { x: n, y: o });
  },
  mP = (function () {
    function e(t) {
      nH(this, e), (this.scale = t);
    }
    return oH(
      e,
      [
        {
          key: "domain",
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: "range",
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: "rangeMin",
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: "rangeMax",
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: "bandwidth",
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: "apply",
          value: function (t) {
            var r =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              n = r.bandAware,
              o = r.position;
            if (t !== void 0) {
              if (o)
                switch (o) {
                  case "start":
                    return this.scale(t);
                  case "middle": {
                    var i = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(t) + i;
                  }
                  case "end": {
                    var a = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(t) + a;
                  }
                  default:
                    return this.scale(t);
                }
              if (n) {
                var c = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(t) + c;
              }
              return this.scale(t);
            }
          },
        },
        {
          key: "isInRange",
          value: function (t) {
            var r = this.range(),
              n = r[0],
              o = r[r.length - 1];
            return n <= o ? t >= n && t <= o : t >= o && t <= n;
          },
        },
      ],
      [
        {
          key: "create",
          value: function (t) {
            return new e(t);
          },
        },
      ],
    );
  })();
Tc(mP, "EPS", 1e-4);
var Hh = function (e) {
  var t = Object.keys(e).reduce(function (r, n) {
    return St(St({}, r), {}, Tc({}, n, mP.create(e[n])));
  }, {});
  return St(
    St({}, t),
    {},
    {
      apply: function (r) {
        var n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = n.bandAware,
          i = n.position;
        return I$(r, function (a, c) {
          return t[c].apply(a, { bandAware: o, position: i });
        });
      },
      isInRange: function (r) {
        return iP(r, function (n, o) {
          return t[o].isInRange(n);
        });
      },
    },
  );
};
function uH(e) {
  return ((e % 180) + 180) % 180;
}
var sH = function (e) {
    var t = e.width,
      r = e.height,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      o = uH(n),
      i = (o * Math.PI) / 180,
      a = Math.atan(r / t),
      c = i > a && i < Math.PI - a ? r / Math.sin(i) : t / Math.cos(i);
    return Math.abs(c);
  },
  Wh,
  gP;
function lH() {
  if (gP) return Wh;
  gP = 1;
  var e = lr(),
    t = vo(),
    r = ja();
  function n(o) {
    return function (i, a, c) {
      var u = Object(i);
      if (!t(i)) {
        var s = e(a, 3);
        (i = r(i)),
          (a = function (f) {
            return s(u[f], f, u);
          });
      }
      var l = o(i, a, c);
      return l > -1 ? u[s ? i[l] : l] : void 0;
    };
  }
  return (Wh = n), Wh;
}
var qh, bP;
function fH() {
  if (bP) return qh;
  bP = 1;
  var e = Uk();
  function t(r) {
    var n = e(r),
      o = n % 1;
    return n === n ? (o ? n - o : n) : 0;
  }
  return (qh = t), qh;
}
var Gh, wP;
function pH() {
  if (wP) return Gh;
  wP = 1;
  var e = rx(),
    t = lr(),
    r = fH(),
    n = Math.max;
  function o(i, a, c) {
    var u = i == null ? 0 : i.length;
    if (!u) return -1;
    var s = c == null ? 0 : r(c);
    return s < 0 && (s = n(u + s, 0)), e(i, t(a, 3), s);
  }
  return (Gh = o), Gh;
}
var Vh, xP;
function dH() {
  if (xP) return Vh;
  xP = 1;
  var e = lH(),
    t = pH(),
    r = e(t);
  return (Vh = r), Vh;
}
var hH = dH();
const yH = be(hH);
var vH = kb();
const mH = be(vH);
var gH = mH(
    function (e) {
      return { x: e.left, y: e.top, width: e.width, height: e.height };
    },
    function (e) {
      return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
    },
  ),
  Xh = w.createContext(void 0),
  Kh = w.createContext(void 0),
  OP = w.createContext(void 0),
  SP = w.createContext({}),
  jP = w.createContext(void 0),
  kP = w.createContext(0),
  PP = w.createContext(0),
  EP = function (e) {
    var t = e.state,
      r = t.xAxisMap,
      n = t.yAxisMap,
      o = t.offset,
      i = e.clipPathId,
      a = e.children,
      c = e.width,
      u = e.height,
      s = gH(o);
    return I.createElement(
      Xh.Provider,
      { value: r },
      I.createElement(
        Kh.Provider,
        { value: n },
        I.createElement(
          SP.Provider,
          { value: o },
          I.createElement(
            OP.Provider,
            { value: s },
            I.createElement(
              jP.Provider,
              { value: i },
              I.createElement(
                kP.Provider,
                { value: u },
                I.createElement(PP.Provider, { value: c }, a),
              ),
            ),
          ),
        ),
      ),
    );
  },
  bH = function () {
    return w.useContext(jP);
  },
  MP = function (e) {
    var t = w.useContext(Xh);
    t == null && $r();
    var r = t[e];
    return r == null && $r(), r;
  },
  wH = function () {
    var e = w.useContext(Xh);
    return sr(e);
  },
  xH = function () {
    var e = w.useContext(Kh),
      t = yH(e, function (r) {
        return iP(r.domain, Number.isFinite);
      });
    return t || sr(e);
  },
  _P = function (e) {
    var t = w.useContext(Kh);
    t == null && $r();
    var r = t[e];
    return r == null && $r(), r;
  },
  OH = function () {
    var e = w.useContext(OP);
    return e;
  },
  SH = function () {
    return w.useContext(SP);
  },
  Yh = function () {
    return w.useContext(PP);
  },
  Zh = function () {
    return w.useContext(kP);
  };
function In(e) {
  "@babel/helpers - typeof";
  return (
    (In =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    In(e)
  );
}
function jH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kH(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, DP(n.key), n);
  }
}
function PH(e, t, r) {
  return (
    t && kH(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function EH(e, t, r) {
  return (
    (t = Cc(t)),
    MH(
      e,
      AP() ? Reflect.construct(t, r || [], Cc(e).constructor) : t.apply(e, r),
    )
  );
}
function MH(e, t) {
  if (t && (In(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return _H(e);
}
function _H(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function AP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (AP = function () {
    return !!e;
  })();
}
function Cc(e) {
  return (
    (Cc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Cc(e)
  );
}
function AH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Jh(e, t);
}
function Jh(e, t) {
  return (
    (Jh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Jh(e, t)
  );
}
function TP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function CP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? TP(Object(r), !0).forEach(function (n) {
          Qh(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : TP(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Qh(e, t, r) {
  return (
    (t = DP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function DP(e) {
  var t = TH(e, "string");
  return In(t) == "symbol" ? t : t + "";
}
function TH(e, t) {
  if (In(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (In(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function CH(e, t) {
  return RH(e) || NH(e, t) || IH(e, t) || DH();
}
function DH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IH(e, t) {
  if (e) {
    if (typeof e == "string") return IP(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return IP(e, t);
  }
}
function IP(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function NH(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      c = [],
      u = !0,
      s = !1;
    try {
      if (((i = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t);
          u = !0
        );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function RH(e) {
  if (Array.isArray(e)) return e;
}
function ey() {
  return (
    (ey = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ey.apply(this, arguments)
  );
}
var LH = function (e, t) {
    var r;
    return (
      I.isValidElement(e)
        ? (r = I.cloneElement(e, t))
        : fe(e)
          ? (r = e(t))
          : (r = I.createElement(
              "line",
              ey({}, t, { className: "recharts-reference-line-line" }),
            )),
      r
    );
  },
  BH = function (e, t, r, n, o, i, a, c, u) {
    var s = o.x,
      l = o.y,
      f = o.width,
      p = o.height;
    if (r) {
      var h = u.y,
        v = e.y.apply(h, { position: i });
      if (It(u, "discard") && !e.y.isInRange(v)) return null;
      var d = [
        { x: s + f, y: v },
        { x: s, y: v },
      ];
      return c === "left" ? d.reverse() : d;
    }
    if (t) {
      var y = u.x,
        m = e.x.apply(y, { position: i });
      if (It(u, "discard") && !e.x.isInRange(m)) return null;
      var b = [
        { x: m, y: l + p },
        { x: m, y: l },
      ];
      return a === "top" ? b.reverse() : b;
    }
    if (n) {
      var x = u.segment,
        g = x.map(function (O) {
          return e.apply(O, { position: i });
        });
      return It(u, "discard") &&
        A$(g, function (O) {
          return !e.isInRange(O);
        })
        ? null
        : g;
    }
    return null;
  };
function zH(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    o = e.xAxisId,
    i = e.yAxisId,
    a = e.shape,
    c = e.className,
    u = e.alwaysShow,
    s = bH(),
    l = MP(o),
    f = _P(i),
    p = OH();
  if (!s || !p) return null;
  Wt(
    u === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var h = Hh({ x: l.scale, y: f.scale }),
    v = Ce(t),
    d = Ce(r),
    y = n && n.length === 2,
    m = BH(h, v, d, y, p, e.position, l.orientation, f.orientation, e);
  if (!m) return null;
  var b = CH(m, 2),
    x = b[0],
    g = x.x,
    O = x.y,
    S = b[1],
    j = S.x,
    k = S.y,
    A = It(e, "hidden") ? "url(#".concat(s, ")") : void 0,
    D = CP(CP({ clipPath: A }, ve(e, !0)), {}, { x1: g, y1: O, x2: j, y2: k });
  return I.createElement(
    Re,
    { className: de("recharts-reference-line", c) },
    LH(a, D),
    He.renderCallByParent(e, cH({ x1: g, y1: O, x2: j, y2: k })),
  );
}
var ty = (function (e) {
  function t() {
    return jH(this, t), EH(this, t, arguments);
  }
  return (
    AH(t, e),
    PH(t, [
      {
        key: "render",
        value: function () {
          return I.createElement(zH, this.props);
        },
      },
    ])
  );
})(I.Component);
Qh(ty, "displayName", "ReferenceLine"),
  Qh(ty, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    fill: "none",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
    position: "middle",
  });
function ry() {
  return (
    (ry = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ry.apply(this, arguments)
  );
}
function Nn(e) {
  "@babel/helpers - typeof";
  return (
    (Nn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Nn(e)
  );
}
function NP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function RP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? NP(Object(r), !0).forEach(function (n) {
          Ic(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : NP(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function FH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function UH(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, BP(n.key), n);
  }
}
function $H(e, t, r) {
  return (
    t && UH(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function HH(e, t, r) {
  return (
    (t = Dc(t)),
    WH(
      e,
      LP() ? Reflect.construct(t, r || [], Dc(e).constructor) : t.apply(e, r),
    )
  );
}
function WH(e, t) {
  if (t && (Nn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return qH(e);
}
function qH(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function LP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (LP = function () {
    return !!e;
  })();
}
function Dc(e) {
  return (
    (Dc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Dc(e)
  );
}
function GH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ny(e, t);
}
function ny(e, t) {
  return (
    (ny = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    ny(e, t)
  );
}
function Ic(e, t, r) {
  return (
    (t = BP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function BP(e) {
  var t = VH(e, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function VH(e, t) {
  if (Nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var XH = function (e) {
    var t = e.x,
      r = e.y,
      n = e.xAxis,
      o = e.yAxis,
      i = Hh({ x: n.scale, y: o.scale }),
      a = i.apply({ x: t, y: r }, { bandAware: !0 });
    return It(e, "discard") && !i.isInRange(a) ? null : a;
  },
  Nc = (function (e) {
    function t() {
      return FH(this, t), HH(this, t, arguments);
    }
    return (
      GH(t, e),
      $H(t, [
        {
          key: "render",
          value: function () {
            var r = this.props,
              n = r.x,
              o = r.y,
              i = r.r,
              a = r.alwaysShow,
              c = r.clipPathId,
              u = Ce(n),
              s = Ce(o);
            if (
              (Wt(
                a === void 0,
                'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
              ),
              !u || !s)
            )
              return null;
            var l = XH(this.props);
            if (!l) return null;
            var f = l.x,
              p = l.y,
              h = this.props,
              v = h.shape,
              d = h.className,
              y = It(this.props, "hidden") ? "url(#".concat(c, ")") : void 0,
              m = RP(
                RP({ clipPath: y }, ve(this.props, !0)),
                {},
                { cx: f, cy: p },
              );
            return I.createElement(
              Re,
              { className: de("recharts-reference-dot", d) },
              t.renderDot(v, m),
              He.renderCallByParent(this.props, {
                x: f - i,
                y: p - i,
                width: 2 * i,
                height: 2 * i,
              }),
            );
          },
        },
      ])
    );
  })(I.Component);
Ic(Nc, "displayName", "ReferenceDot"),
  Ic(Nc, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#fff",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
  }),
  Ic(Nc, "renderDot", function (e, t) {
    var r;
    return (
      I.isValidElement(e)
        ? (r = I.cloneElement(e, t))
        : fe(e)
          ? (r = e(t))
          : (r = I.createElement(
              Mk,
              ry({}, t, {
                cx: t.cx,
                cy: t.cy,
                className: "recharts-reference-dot-dot",
              }),
            )),
      r
    );
  });
function oy() {
  return (
    (oy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    oy.apply(this, arguments)
  );
}
function Rn(e) {
  "@babel/helpers - typeof";
  return (
    (Rn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Rn(e)
  );
}
function zP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function FP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zP(Object(r), !0).forEach(function (n) {
          Lc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zP(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function KH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function YH(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, $P(n.key), n);
  }
}
function ZH(e, t, r) {
  return (
    t && YH(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function JH(e, t, r) {
  return (
    (t = Rc(t)),
    QH(
      e,
      UP() ? Reflect.construct(t, r || [], Rc(e).constructor) : t.apply(e, r),
    )
  );
}
function QH(e, t) {
  if (t && (Rn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return eW(e);
}
function eW(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function UP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (UP = function () {
    return !!e;
  })();
}
function Rc(e) {
  return (
    (Rc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Rc(e)
  );
}
function tW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && iy(e, t);
}
function iy(e, t) {
  return (
    (iy = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    iy(e, t)
  );
}
function Lc(e, t, r) {
  return (
    (t = $P(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function $P(e) {
  var t = rW(e, "string");
  return Rn(t) == "symbol" ? t : t + "";
}
function rW(e, t) {
  if (Rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var nW = function (e, t, r, n, o) {
    var i = o.x1,
      a = o.x2,
      c = o.y1,
      u = o.y2,
      s = o.xAxis,
      l = o.yAxis;
    if (!s || !l) return null;
    var f = Hh({ x: s.scale, y: l.scale }),
      p = {
        x: e ? f.x.apply(i, { position: "start" }) : f.x.rangeMin,
        y: r ? f.y.apply(c, { position: "start" }) : f.y.rangeMin,
      },
      h = {
        x: t ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
        y: n ? f.y.apply(u, { position: "end" }) : f.y.rangeMax,
      };
    return It(o, "discard") && (!f.isInRange(p) || !f.isInRange(h))
      ? null
      : vP(p, h);
  },
  Bc = (function (e) {
    function t() {
      return KH(this, t), JH(this, t, arguments);
    }
    return (
      tW(t, e),
      ZH(t, [
        {
          key: "render",
          value: function () {
            var r = this.props,
              n = r.x1,
              o = r.x2,
              i = r.y1,
              a = r.y2,
              c = r.className,
              u = r.alwaysShow,
              s = r.clipPathId;
            Wt(
              u === void 0,
              'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
            );
            var l = Ce(n),
              f = Ce(o),
              p = Ce(i),
              h = Ce(a),
              v = this.props.shape;
            if (!l && !f && !p && !h && !v) return null;
            var d = nW(l, f, p, h, this.props);
            if (!d && !v) return null;
            var y = It(this.props, "hidden") ? "url(#".concat(s, ")") : void 0;
            return I.createElement(
              Re,
              { className: de("recharts-reference-area", c) },
              t.renderRect(v, FP(FP({ clipPath: y }, ve(this.props, !0)), d)),
              He.renderCallByParent(this.props, d),
            );
          },
        },
      ])
    );
  })(I.Component);
Lc(Bc, "displayName", "ReferenceArea"),
  Lc(Bc, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#ccc",
    fillOpacity: 0.5,
    stroke: "none",
    strokeWidth: 1,
  }),
  Lc(Bc, "renderRect", function (e, t) {
    var r;
    return (
      I.isValidElement(e)
        ? (r = I.cloneElement(e, t))
        : fe(e)
          ? (r = e(t))
          : (r = I.createElement(
              Oh,
              oy({}, t, { className: "recharts-reference-area-rect" }),
            )),
      r
    );
  });
function HP(e, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e;
  for (var n = [], o = 0; o < e.length; o += t) n.push(e[o]);
  return n;
}
function oW(e, t, r) {
  var n = { width: e.width + t.width, height: e.height + t.height };
  return sH(n, r);
}
function iW(e, t, r) {
  var n = r === "width",
    o = e.x,
    i = e.y,
    a = e.width,
    c = e.height;
  return t === 1
    ? { start: n ? o : i, end: n ? o + a : i + c }
    : { start: n ? o + a : i + c, end: n ? o : i };
}
function zc(e, t, r, n, o) {
  if (e * t < e * n || e * t > e * o) return !1;
  var i = r();
  return e * (t - (e * i) / 2 - n) >= 0 && e * (t + (e * i) / 2 - o) <= 0;
}
function aW(e, t) {
  return HP(e, t + 1);
}
function cW(e, t, r, n, o) {
  for (
    var i = (n || []).slice(),
      a = t.start,
      c = t.end,
      u = 0,
      s = 1,
      l = a,
      f = function () {
        var h = n == null ? void 0 : n[u];
        if (h === void 0) return { v: HP(n, s) };
        var v = u,
          d,
          y = function () {
            return d === void 0 && (d = r(h, v)), d;
          },
          m = h.coordinate,
          b = u === 0 || zc(e, m, y, l, c);
        b || ((u = 0), (l = a), (s += 1)),
          b && ((l = m + e * (y() / 2 + o)), (u += s));
      },
      p;
    s <= i.length;

  )
    if (((p = f()), p)) return p.v;
  return [];
}
function fi(e) {
  "@babel/helpers - typeof";
  return (
    (fi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    fi(e)
  );
}
function WP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? WP(Object(r), !0).forEach(function (n) {
          uW(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : WP(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function uW(e, t, r) {
  return (
    (t = sW(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function sW(e) {
  var t = lW(e, "string");
  return fi(t) == "symbol" ? t : t + "";
}
function lW(e, t) {
  if (fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fW(e, t, r, n, o) {
  for (
    var i = (n || []).slice(),
      a = i.length,
      c = t.start,
      u = t.end,
      s = function (f) {
        var p = i[f],
          h,
          v = function () {
            return h === void 0 && (h = r(p, f)), h;
          };
        if (f === a - 1) {
          var d = e * (p.coordinate + (e * v()) / 2 - u);
          i[f] = p = We(
            We({}, p),
            {},
            { tickCoord: d > 0 ? p.coordinate - d * e : p.coordinate },
          );
        } else i[f] = p = We(We({}, p), {}, { tickCoord: p.coordinate });
        var y = zc(e, p.tickCoord, v, c, u);
        y &&
          ((u = p.tickCoord - e * (v() / 2 + o)),
          (i[f] = We(We({}, p), {}, { isShow: !0 })));
      },
      l = a - 1;
    l >= 0;
    l--
  )
    s(l);
  return i;
}
function pW(e, t, r, n, o, i) {
  var a = (n || []).slice(),
    c = a.length,
    u = t.start,
    s = t.end;
  if (i) {
    var l = n[c - 1],
      f = r(l, c - 1),
      p = e * (l.coordinate + (e * f) / 2 - s);
    a[c - 1] = l = We(
      We({}, l),
      {},
      { tickCoord: p > 0 ? l.coordinate - p * e : l.coordinate },
    );
    var h = zc(
      e,
      l.tickCoord,
      function () {
        return f;
      },
      u,
      s,
    );
    h &&
      ((s = l.tickCoord - e * (f / 2 + o)),
      (a[c - 1] = We(We({}, l), {}, { isShow: !0 })));
  }
  for (
    var v = i ? c - 1 : c,
      d = function (m) {
        var b = a[m],
          x,
          g = function () {
            return x === void 0 && (x = r(b, m)), x;
          };
        if (m === 0) {
          var O = e * (b.coordinate - (e * g()) / 2 - u);
          a[m] = b = We(
            We({}, b),
            {},
            { tickCoord: O < 0 ? b.coordinate - O * e : b.coordinate },
          );
        } else a[m] = b = We(We({}, b), {}, { tickCoord: b.coordinate });
        var S = zc(e, b.tickCoord, g, u, s);
        S &&
          ((u = b.tickCoord + e * (g() / 2 + o)),
          (a[m] = We(We({}, b), {}, { isShow: !0 })));
      },
      y = 0;
    y < v;
    y++
  )
    d(y);
  return a;
}
function ay(e, t, r) {
  var n = e.tick,
    o = e.ticks,
    i = e.viewBox,
    a = e.minTickGap,
    c = e.orientation,
    u = e.interval,
    s = e.tickFormatter,
    l = e.unit,
    f = e.angle;
  if (!o || !o.length || !n) return [];
  if (V(u) || wo.isSsr) return aW(o, typeof u == "number" && V(u) ? u : 0);
  var p = [],
    h = c === "top" || c === "bottom" ? "width" : "height",
    v =
      l && h === "width"
        ? So(l, { fontSize: t, letterSpacing: r })
        : { width: 0, height: 0 },
    d = function (b, x) {
      var g = fe(s) ? s(b.value, x) : b.value;
      return h === "width"
        ? oW(So(g, { fontSize: t, letterSpacing: r }), v, f)
        : So(g, { fontSize: t, letterSpacing: r })[h];
    },
    y = o.length >= 2 ? gt(o[1].coordinate - o[0].coordinate) : 1,
    m = iW(i, y, h);
  return u === "equidistantPreserveStart"
    ? cW(y, m, d, o, a)
    : (u === "preserveStart" || u === "preserveStartEnd"
        ? (p = pW(y, m, d, o, a, u === "preserveStartEnd"))
        : (p = fW(y, m, d, o, a)),
      p.filter(function (b) {
        return b.isShow;
      }));
}
var dW = ["viewBox"],
  hW = ["viewBox"],
  yW = ["ticks"];
function Ln(e) {
  "@babel/helpers - typeof";
  return (
    (Ln =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ln(e)
  );
}
function Bn() {
  return (
    (Bn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Bn.apply(this, arguments)
  );
}
function qP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qP(Object(r), !0).forEach(function (n) {
          sy(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qP(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cy(e, t) {
  if (e == null) return {};
  var r = vW(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function vW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function mW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function GP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, XP(n.key), n);
  }
}
function gW(e, t, r) {
  return (
    t && GP(e.prototype, t),
    r && GP(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function bW(e, t, r) {
  return (
    (t = Fc(t)),
    wW(
      e,
      VP() ? Reflect.construct(t, r || [], Fc(e).constructor) : t.apply(e, r),
    )
  );
}
function wW(e, t) {
  if (t && (Ln(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return xW(e);
}
function xW(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function VP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (VP = function () {
    return !!e;
  })();
}
function Fc(e) {
  return (
    (Fc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Fc(e)
  );
}
function OW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && uy(e, t);
}
function uy(e, t) {
  return (
    (uy = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    uy(e, t)
  );
}
function sy(e, t, r) {
  return (
    (t = XP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function XP(e) {
  var t = SW(e, "string");
  return Ln(t) == "symbol" ? t : t + "";
}
function SW(e, t) {
  if (Ln(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ln(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var zn = (function (e) {
  function t(r) {
    var n;
    return (
      mW(this, t),
      (n = bW(this, t, [r])),
      (n.state = { fontSize: "", letterSpacing: "" }),
      n
    );
  }
  return (
    OW(t, e),
    gW(
      t,
      [
        {
          key: "shouldComponentUpdate",
          value: function (r, n) {
            var o = r.viewBox,
              i = cy(r, dW),
              a = this.props,
              c = a.viewBox,
              u = cy(a, hW);
            return !fn(o, c) || !fn(i, u) || !fn(n, this.state);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var r = this.layerReference;
            if (r) {
              var n = r.getElementsByClassName(
                "recharts-cartesian-axis-tick-value",
              )[0];
              n &&
                this.setState({
                  fontSize: window.getComputedStyle(n).fontSize,
                  letterSpacing: window.getComputedStyle(n).letterSpacing,
                });
            }
          },
        },
        {
          key: "getTickLineCoord",
          value: function (r) {
            var n = this.props,
              o = n.x,
              i = n.y,
              a = n.width,
              c = n.height,
              u = n.orientation,
              s = n.tickSize,
              l = n.mirror,
              f = n.tickMargin,
              p,
              h,
              v,
              d,
              y,
              m,
              b = l ? -1 : 1,
              x = r.tickSize || s,
              g = V(r.tickCoord) ? r.tickCoord : r.coordinate;
            switch (u) {
              case "top":
                (p = h = r.coordinate),
                  (d = i + +!l * c),
                  (v = d - b * x),
                  (m = v - b * f),
                  (y = g);
                break;
              case "left":
                (v = d = r.coordinate),
                  (h = o + +!l * a),
                  (p = h - b * x),
                  (y = p - b * f),
                  (m = g);
                break;
              case "right":
                (v = d = r.coordinate),
                  (h = o + +l * a),
                  (p = h + b * x),
                  (y = p + b * f),
                  (m = g);
                break;
              default:
                (p = h = r.coordinate),
                  (d = i + +l * c),
                  (v = d + b * x),
                  (m = v + b * f),
                  (y = g);
                break;
            }
            return {
              line: { x1: p, y1: v, x2: h, y2: d },
              tick: { x: y, y: m },
            };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var r = this.props,
              n = r.orientation,
              o = r.mirror,
              i;
            switch (n) {
              case "left":
                i = o ? "start" : "end";
                break;
              case "right":
                i = o ? "end" : "start";
                break;
              default:
                i = "middle";
                break;
            }
            return i;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var r = this.props,
              n = r.orientation,
              o = r.mirror,
              i = "end";
            switch (n) {
              case "left":
              case "right":
                i = "middle";
                break;
              case "top":
                i = o ? "start" : "end";
                break;
              default:
                i = o ? "end" : "start";
                break;
            }
            return i;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var r = this.props,
              n = r.x,
              o = r.y,
              i = r.width,
              a = r.height,
              c = r.orientation,
              u = r.mirror,
              s = r.axisLine,
              l = Ne(
                Ne(Ne({}, ve(this.props, !1)), ve(s, !1)),
                {},
                { fill: "none" },
              );
            if (c === "top" || c === "bottom") {
              var f = +((c === "top" && !u) || (c === "bottom" && u));
              l = Ne(
                Ne({}, l),
                {},
                { x1: n, y1: o + f * a, x2: n + i, y2: o + f * a },
              );
            } else {
              var p = +((c === "left" && !u) || (c === "right" && u));
              l = Ne(
                Ne({}, l),
                {},
                { x1: n + p * i, y1: o, x2: n + p * i, y2: o + a },
              );
            }
            return I.createElement(
              "line",
              Bn({}, l, {
                className: de(
                  "recharts-cartesian-axis-line",
                  nt(s, "className"),
                ),
              }),
            );
          },
        },
        {
          key: "renderTicks",
          value: function (r, n, o) {
            var i = this,
              a = this.props,
              c = a.tickLine,
              u = a.stroke,
              s = a.tick,
              l = a.tickFormatter,
              f = a.unit,
              p = ay(Ne(Ne({}, this.props), {}, { ticks: r }), n, o),
              h = this.getTickTextAnchor(),
              v = this.getTickVerticalAnchor(),
              d = ve(this.props, !1),
              y = ve(s, !1),
              m = Ne(Ne({}, d), {}, { fill: "none" }, ve(c, !1)),
              b = p.map(function (x, g) {
                var O = i.getTickLineCoord(x),
                  S = O.line,
                  j = O.tick,
                  k = Ne(
                    Ne(
                      Ne(
                        Ne({ textAnchor: h, verticalAnchor: v }, d),
                        {},
                        { stroke: "none", fill: u },
                        y,
                      ),
                      j,
                    ),
                    {},
                    {
                      index: g,
                      payload: x,
                      visibleTicksCount: p.length,
                      tickFormatter: l,
                    },
                  );
                return I.createElement(
                  Re,
                  Bn(
                    {
                      className: "recharts-cartesian-axis-tick",
                      key: "tick-"
                        .concat(x.value, "-")
                        .concat(x.coordinate, "-")
                        .concat(x.tickCoord),
                    },
                    la(i.props, x, g),
                  ),
                  c &&
                    I.createElement(
                      "line",
                      Bn({}, m, S, {
                        className: de(
                          "recharts-cartesian-axis-tick-line",
                          nt(c, "className"),
                        ),
                      }),
                    ),
                  s &&
                    t.renderTickItem(
                      s,
                      k,
                      ""
                        .concat(fe(l) ? l(x.value, g) : x.value)
                        .concat(f || ""),
                    ),
                );
              });
            return I.createElement(
              "g",
              { className: "recharts-cartesian-axis-ticks" },
              b,
            );
          },
        },
        {
          key: "render",
          value: function () {
            var r = this,
              n = this.props,
              o = n.axisLine,
              i = n.width,
              a = n.height,
              c = n.ticksGenerator,
              u = n.className,
              s = n.hide;
            if (s) return null;
            var l = this.props,
              f = l.ticks,
              p = cy(l, yW),
              h = f;
            return (
              fe(c) && (h = f && f.length > 0 ? c(this.props) : c(p)),
              i <= 0 || a <= 0 || !h || !h.length
                ? null
                : I.createElement(
                    Re,
                    {
                      className: de("recharts-cartesian-axis", u),
                      ref: function (v) {
                        r.layerReference = v;
                      },
                    },
                    o && this.renderAxisLine(),
                    this.renderTicks(
                      h,
                      this.state.fontSize,
                      this.state.letterSpacing,
                    ),
                    He.renderCallByParent(this.props),
                  )
            );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (r, n, o) {
            var i,
              a = de(n.className, "recharts-cartesian-axis-tick-value");
            return (
              I.isValidElement(r)
                ? (i = I.cloneElement(r, Ne(Ne({}, n), {}, { className: a })))
                : fe(r)
                  ? (i = r(Ne(Ne({}, n), {}, { className: a })))
                  : (i = I.createElement(
                      Ia,
                      Bn({}, n, {
                        className: "recharts-cartesian-axis-tick-value",
                      }),
                      o,
                    )),
              i
            );
          },
        },
      ],
    )
  );
})(w.Component);
sy(zn, "displayName", "CartesianAxis"),
  sy(zn, "defaultProps", {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: { x: 0, y: 0, width: 0, height: 0 },
    orientation: "bottom",
    ticks: [],
    stroke: "#666",
    tickLine: !0,
    axisLine: !0,
    tick: !0,
    mirror: !1,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: "preserveEnd",
  });
var jW = ["x1", "y1", "x2", "y2", "key"],
  kW = ["offset"];
function Vr(e) {
  "@babel/helpers - typeof";
  return (
    (Vr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vr(e)
  );
}
function KP(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? KP(Object(r), !0).forEach(function (n) {
          PW(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : KP(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function PW(e, t, r) {
  return (
    (t = EW(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function EW(e) {
  var t = MW(e, "string");
  return Vr(t) == "symbol" ? t : t + "";
}
function MW(e, t) {
  if (Vr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xr() {
  return (
    (Xr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Xr.apply(this, arguments)
  );
}
function YP(e, t) {
  if (e == null) return {};
  var r = _W(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function _W(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var AW = function (e) {
  var t = e.fill;
  if (!t || t === "none") return null;
  var r = e.fillOpacity,
    n = e.x,
    o = e.y,
    i = e.width,
    a = e.height,
    c = e.ry;
  return I.createElement("rect", {
    x: n,
    y: o,
    ry: c,
    width: i,
    height: a,
    stroke: "none",
    fill: t,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg",
  });
};
function ZP(e, t) {
  var r;
  if (I.isValidElement(e)) r = I.cloneElement(e, t);
  else if (fe(e)) r = e(t);
  else {
    var n = t.x1,
      o = t.y1,
      i = t.x2,
      a = t.y2,
      c = t.key,
      u = YP(t, jW),
      s = ve(u, !1);
    s.offset;
    var l = YP(s, kW);
    r = I.createElement(
      "line",
      Xr({}, l, { x1: n, y1: o, x2: i, y2: a, fill: "none", key: c }),
    );
  }
  return r;
}
function TW(e) {
  var t = e.x,
    r = e.width,
    n = e.horizontal,
    o = n === void 0 ? !0 : n,
    i = e.horizontalPoints;
  if (!o || !i || !i.length) return null;
  var a = i.map(function (c, u) {
    var s = qe(
      qe({}, e),
      {},
      { x1: t, y1: c, x2: t + r, y2: c, key: "line-".concat(u), index: u },
    );
    return ZP(o, s);
  });
  return I.createElement(
    "g",
    { className: "recharts-cartesian-grid-horizontal" },
    a,
  );
}
function CW(e) {
  var t = e.y,
    r = e.height,
    n = e.vertical,
    o = n === void 0 ? !0 : n,
    i = e.verticalPoints;
  if (!o || !i || !i.length) return null;
  var a = i.map(function (c, u) {
    var s = qe(
      qe({}, e),
      {},
      { x1: c, y1: t, x2: c, y2: t + r, key: "line-".concat(u), index: u },
    );
    return ZP(o, s);
  });
  return I.createElement(
    "g",
    { className: "recharts-cartesian-grid-vertical" },
    a,
  );
}
function DW(e) {
  var t = e.horizontalFill,
    r = e.fillOpacity,
    n = e.x,
    o = e.y,
    i = e.width,
    a = e.height,
    c = e.horizontalPoints,
    u = e.horizontal,
    s = u === void 0 ? !0 : u;
  if (!s || !t || !t.length) return null;
  var l = c
    .map(function (p) {
      return Math.round(p + o - o);
    })
    .sort(function (p, h) {
      return p - h;
    });
  o !== l[0] && l.unshift(0);
  var f = l.map(function (p, h) {
    var v = !l[h + 1],
      d = v ? o + a - p : l[h + 1] - p;
    if (d <= 0) return null;
    var y = h % t.length;
    return I.createElement("rect", {
      key: "react-".concat(h),
      y: p,
      x: n,
      height: d,
      width: i,
      stroke: "none",
      fill: t[y],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return I.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-horizontal" },
    f,
  );
}
function IW(e) {
  var t = e.vertical,
    r = t === void 0 ? !0 : t,
    n = e.verticalFill,
    o = e.fillOpacity,
    i = e.x,
    a = e.y,
    c = e.width,
    u = e.height,
    s = e.verticalPoints;
  if (!r || !n || !n.length) return null;
  var l = s
    .map(function (p) {
      return Math.round(p + i - i);
    })
    .sort(function (p, h) {
      return p - h;
    });
  i !== l[0] && l.unshift(0);
  var f = l.map(function (p, h) {
    var v = !l[h + 1],
      d = v ? i + c - p : l[h + 1] - p;
    if (d <= 0) return null;
    var y = h % n.length;
    return I.createElement("rect", {
      key: "react-".concat(h),
      x: p,
      y: a,
      width: d,
      height: u,
      stroke: "none",
      fill: n[y],
      fillOpacity: o,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return I.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-vertical" },
    f,
  );
}
var NW = function (e, t) {
    var r = e.xAxis,
      n = e.width,
      o = e.height,
      i = e.offset;
    return Ej(
      ay(
        qe(
          qe(qe({}, zn.defaultProps), r),
          {},
          { ticks: Qt(r, !0), viewBox: { x: 0, y: 0, width: n, height: o } },
        ),
      ),
      i.left,
      i.left + i.width,
      t,
    );
  },
  RW = function (e, t) {
    var r = e.yAxis,
      n = e.width,
      o = e.height,
      i = e.offset;
    return Ej(
      ay(
        qe(
          qe(qe({}, zn.defaultProps), r),
          {},
          { ticks: Qt(r, !0), viewBox: { x: 0, y: 0, width: n, height: o } },
        ),
      ),
      i.top,
      i.top + i.height,
      t,
    );
  },
  Fn = {
    horizontal: !0,
    vertical: !0,
    stroke: "#ccc",
    fill: "none",
    verticalFill: [],
    horizontalFill: [],
  };
function JP(e) {
  var t,
    r,
    n,
    o,
    i,
    a,
    c = Yh(),
    u = Zh(),
    s = SH(),
    l = qe(
      qe({}, e),
      {},
      {
        stroke: (t = e.stroke) !== null && t !== void 0 ? t : Fn.stroke,
        fill: (r = e.fill) !== null && r !== void 0 ? r : Fn.fill,
        horizontal:
          (n = e.horizontal) !== null && n !== void 0 ? n : Fn.horizontal,
        horizontalFill:
          (o = e.horizontalFill) !== null && o !== void 0
            ? o
            : Fn.horizontalFill,
        vertical: (i = e.vertical) !== null && i !== void 0 ? i : Fn.vertical,
        verticalFill:
          (a = e.verticalFill) !== null && a !== void 0 ? a : Fn.verticalFill,
        x: V(e.x) ? e.x : s.left,
        y: V(e.y) ? e.y : s.top,
        width: V(e.width) ? e.width : s.width,
        height: V(e.height) ? e.height : s.height,
      },
    ),
    f = l.x,
    p = l.y,
    h = l.width,
    v = l.height,
    d = l.syncWithTicks,
    y = l.horizontalValues,
    m = l.verticalValues,
    b = wH(),
    x = xH();
  if (
    !V(h) ||
    h <= 0 ||
    !V(v) ||
    v <= 0 ||
    !V(f) ||
    f !== +f ||
    !V(p) ||
    p !== +p
  )
    return null;
  var g = l.verticalCoordinatesGenerator || NW,
    O = l.horizontalCoordinatesGenerator || RW,
    S = l.horizontalPoints,
    j = l.verticalPoints;
  if ((!S || !S.length) && fe(O)) {
    var k = y && y.length,
      A = O(
        {
          yAxis: x ? qe(qe({}, x), {}, { ticks: k ? y : x.ticks }) : void 0,
          width: c,
          height: u,
          offset: s,
        },
        k ? !0 : d,
      );
    Wt(
      Array.isArray(A),
      "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
        Vr(A),
        "]",
      ),
    ),
      Array.isArray(A) && (S = A);
  }
  if ((!j || !j.length) && fe(g)) {
    var D = m && m.length,
      M = g(
        {
          xAxis: b ? qe(qe({}, b), {}, { ticks: D ? m : b.ticks }) : void 0,
          width: c,
          height: u,
          offset: s,
        },
        D ? !0 : d,
      );
    Wt(
      Array.isArray(M),
      "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
        Vr(M),
        "]",
      ),
    ),
      Array.isArray(M) && (j = M);
  }
  return I.createElement(
    "g",
    { className: "recharts-cartesian-grid" },
    I.createElement(AW, {
      fill: l.fill,
      fillOpacity: l.fillOpacity,
      x: l.x,
      y: l.y,
      width: l.width,
      height: l.height,
      ry: l.ry,
    }),
    I.createElement(
      TW,
      Xr({}, l, { offset: s, horizontalPoints: S, xAxis: b, yAxis: x }),
    ),
    I.createElement(
      CW,
      Xr({}, l, { offset: s, verticalPoints: j, xAxis: b, yAxis: x }),
    ),
    I.createElement(DW, Xr({}, l, { horizontalPoints: S })),
    I.createElement(IW, Xr({}, l, { verticalPoints: j })),
  );
}
JP.displayName = "CartesianGrid";
function Un(e) {
  "@babel/helpers - typeof";
  return (
    (Un =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Un(e)
  );
}
function LW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function BW(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, t2(n.key), n);
  }
}
function zW(e, t, r) {
  return (
    t && BW(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function FW(e, t, r) {
  return (
    (t = Uc(t)),
    UW(
      e,
      QP() ? Reflect.construct(t, r || [], Uc(e).constructor) : t.apply(e, r),
    )
  );
}
function UW(e, t) {
  if (t && (Un(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return $W(e);
}
function $W(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function QP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (QP = function () {
    return !!e;
  })();
}
function Uc(e) {
  return (
    (Uc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Uc(e)
  );
}
function HW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ly(e, t);
}
function ly(e, t) {
  return (
    (ly = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    ly(e, t)
  );
}
function e2(e, t, r) {
  return (
    (t = t2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function t2(e) {
  var t = WW(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function WW(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function fy() {
  return (
    (fy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    fy.apply(this, arguments)
  );
}
function qW(e) {
  var t = e.xAxisId,
    r = Yh(),
    n = Zh(),
    o = MP(t);
  return o == null
    ? null
    : w.createElement(
        zn,
        fy({}, o, {
          className: de(
            "recharts-".concat(o.axisType, " ").concat(o.axisType),
            o.className,
          ),
          viewBox: { x: 0, y: 0, width: r, height: n },
          ticksGenerator: function (i) {
            return Qt(i, !0);
          },
        }),
      );
}
var $c = (function (e) {
  function t() {
    return LW(this, t), FW(this, t, arguments);
  }
  return (
    HW(t, e),
    zW(t, [
      {
        key: "render",
        value: function () {
          return w.createElement(qW, this.props);
        },
      },
    ])
  );
})(w.Component);
e2($c, "displayName", "XAxis"),
  e2($c, "defaultProps", {
    allowDecimals: !0,
    hide: !1,
    orientation: "bottom",
    width: 0,
    height: 30,
    mirror: !1,
    xAxisId: 0,
    tickCount: 5,
    type: "category",
    padding: { left: 0, right: 0 },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1,
    allowDuplicatedCategory: !0,
  });
function $n(e) {
  "@babel/helpers - typeof";
  return (
    ($n =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $n(e)
  );
}
function GW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VW(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, o2(n.key), n);
  }
}
function XW(e, t, r) {
  return (
    t && VW(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function KW(e, t, r) {
  return (
    (t = Hc(t)),
    YW(
      e,
      r2() ? Reflect.construct(t, r || [], Hc(e).constructor) : t.apply(e, r),
    )
  );
}
function YW(e, t) {
  if (t && ($n(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return ZW(e);
}
function ZW(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function r2() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (r2 = function () {
    return !!e;
  })();
}
function Hc(e) {
  return (
    (Hc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Hc(e)
  );
}
function JW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && py(e, t);
}
function py(e, t) {
  return (
    (py = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    py(e, t)
  );
}
function n2(e, t, r) {
  return (
    (t = o2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function o2(e) {
  var t = QW(e, "string");
  return $n(t) == "symbol" ? t : t + "";
}
function QW(e, t) {
  if ($n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function dy() {
  return (
    (dy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    dy.apply(this, arguments)
  );
}
var eq = function (e) {
    var t = e.yAxisId,
      r = Yh(),
      n = Zh(),
      o = _P(t);
    return o == null
      ? null
      : w.createElement(
          zn,
          dy({}, o, {
            className: de(
              "recharts-".concat(o.axisType, " ").concat(o.axisType),
              o.className,
            ),
            viewBox: { x: 0, y: 0, width: r, height: n },
            ticksGenerator: function (i) {
              return Qt(i, !0);
            },
          }),
        );
  },
  Wc = (function (e) {
    function t() {
      return GW(this, t), KW(this, t, arguments);
    }
    return (
      JW(t, e),
      XW(t, [
        {
          key: "render",
          value: function () {
            return w.createElement(eq, this.props);
          },
        },
      ])
    );
  })(w.Component);
n2(Wc, "displayName", "YAxis"),
  n2(Wc, "defaultProps", {
    allowDuplicatedCategory: !0,
    allowDecimals: !0,
    hide: !1,
    orientation: "left",
    width: 60,
    height: 0,
    mirror: !1,
    yAxisId: 0,
    tickCount: 5,
    type: "number",
    padding: { top: 0, bottom: 0 },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1,
  });
function i2(e) {
  return oq(e) || nq(e) || rq(e) || tq();
}
function tq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rq(e, t) {
  if (e) {
    if (typeof e == "string") return hy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return hy(e, t);
  }
}
function nq(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function oq(e) {
  if (Array.isArray(e)) return hy(e);
}
function hy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var yy = function (e, t, r, n, o) {
    var i = bt(e, ty),
      a = bt(e, Nc),
      c = [].concat(i2(i), i2(a)),
      u = bt(e, Bc),
      s = "".concat(n, "Id"),
      l = n[0],
      f = t;
    if (
      (c.length &&
        (f = c.reduce(function (v, d) {
          if (
            d.props[s] === r &&
            It(d.props, "extendDomain") &&
            V(d.props[l])
          ) {
            var y = d.props[l];
            return [Math.min(v[0], y), Math.max(v[1], y)];
          }
          return v;
        }, f)),
      u.length)
    ) {
      var p = "".concat(l, "1"),
        h = "".concat(l, "2");
      f = u.reduce(function (v, d) {
        if (
          d.props[s] === r &&
          It(d.props, "extendDomain") &&
          V(d.props[p]) &&
          V(d.props[h])
        ) {
          var y = d.props[p],
            m = d.props[h];
          return [Math.min(v[0], y, m), Math.max(v[1], y, m)];
        }
        return v;
      }, f);
    }
    return (
      o &&
        o.length &&
        (f = o.reduce(function (v, d) {
          return V(d) ? [Math.min(v[0], d), Math.max(v[1], d)] : v;
        }, f)),
      f
    );
  },
  a2 = { exports: {} },
  c2;
function iq() {
  return (
    c2 ||
      ((c2 = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create &&
          ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function o(u, s, l) {
          (this.fn = u), (this.context = s), (this.once = l || !1);
        }
        function i(u, s, l, f, p) {
          if (typeof l != "function")
            throw new TypeError("The listener must be a function");
          var h = new o(l, f || u, p),
            v = r ? r + s : s;
          return (
            u._events[v]
              ? u._events[v].fn
                ? (u._events[v] = [u._events[v], h])
                : u._events[v].push(h)
              : ((u._events[v] = h), u._eventsCount++),
            u
          );
        }
        function a(u, s) {
          --u._eventsCount === 0 ? (u._events = new n()) : delete u._events[s];
        }
        function c() {
          (this._events = new n()), (this._eventsCount = 0);
        }
        (c.prototype.eventNames = function () {
          var u = [],
            s,
            l;
          if (this._eventsCount === 0) return u;
          for (l in (s = this._events))
            t.call(s, l) && u.push(r ? l.slice(1) : l);
          return Object.getOwnPropertySymbols
            ? u.concat(Object.getOwnPropertySymbols(s))
            : u;
        }),
          (c.prototype.listeners = function (u) {
            var s = r ? r + u : u,
              l = this._events[s];
            if (!l) return [];
            if (l.fn) return [l.fn];
            for (var f = 0, p = l.length, h = new Array(p); f < p; f++)
              h[f] = l[f].fn;
            return h;
          }),
          (c.prototype.listenerCount = function (u) {
            var s = r ? r + u : u,
              l = this._events[s];
            return l ? (l.fn ? 1 : l.length) : 0;
          }),
          (c.prototype.emit = function (u, s, l, f, p, h) {
            var v = r ? r + u : u;
            if (!this._events[v]) return !1;
            var d = this._events[v],
              y = arguments.length,
              m,
              b;
            if (d.fn) {
              switch ((d.once && this.removeListener(u, d.fn, void 0, !0), y)) {
                case 1:
                  return d.fn.call(d.context), !0;
                case 2:
                  return d.fn.call(d.context, s), !0;
                case 3:
                  return d.fn.call(d.context, s, l), !0;
                case 4:
                  return d.fn.call(d.context, s, l, f), !0;
                case 5:
                  return d.fn.call(d.context, s, l, f, p), !0;
                case 6:
                  return d.fn.call(d.context, s, l, f, p, h), !0;
              }
              for (b = 1, m = new Array(y - 1); b < y; b++)
                m[b - 1] = arguments[b];
              d.fn.apply(d.context, m);
            } else {
              var x = d.length,
                g;
              for (b = 0; b < x; b++)
                switch (
                  (d[b].once && this.removeListener(u, d[b].fn, void 0, !0), y)
                ) {
                  case 1:
                    d[b].fn.call(d[b].context);
                    break;
                  case 2:
                    d[b].fn.call(d[b].context, s);
                    break;
                  case 3:
                    d[b].fn.call(d[b].context, s, l);
                    break;
                  case 4:
                    d[b].fn.call(d[b].context, s, l, f);
                    break;
                  default:
                    if (!m)
                      for (g = 1, m = new Array(y - 1); g < y; g++)
                        m[g - 1] = arguments[g];
                    d[b].fn.apply(d[b].context, m);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (u, s, l) {
            return i(this, u, s, l, !1);
          }),
          (c.prototype.once = function (u, s, l) {
            return i(this, u, s, l, !0);
          }),
          (c.prototype.removeListener = function (u, s, l, f) {
            var p = r ? r + u : u;
            if (!this._events[p]) return this;
            if (!s) return a(this, p), this;
            var h = this._events[p];
            if (h.fn)
              h.fn === s &&
                (!f || h.once) &&
                (!l || h.context === l) &&
                a(this, p);
            else {
              for (var v = 0, d = [], y = h.length; v < y; v++)
                (h[v].fn !== s ||
                  (f && !h[v].once) ||
                  (l && h[v].context !== l)) &&
                  d.push(h[v]);
              d.length
                ? (this._events[p] = d.length === 1 ? d[0] : d)
                : a(this, p);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (u) {
            var s;
            return (
              u
                ? ((s = r ? r + u : u), this._events[s] && a(this, s))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = r),
          (c.EventEmitter = c),
          (e.exports = c);
      })(a2)),
    a2.exports
  );
}
var aq = iq();
const cq = be(aq);
var vy = new cq(),
  my = "recharts.syncMouseEvents";
function pi(e) {
  "@babel/helpers - typeof";
  return (
    (pi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    pi(e)
  );
}
function uq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, u2(n.key), n);
  }
}
function lq(e, t, r) {
  return (
    t && sq(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function gy(e, t, r) {
  return (
    (t = u2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function u2(e) {
  var t = fq(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function fq(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var pq = (function () {
  function e() {
    uq(this, e),
      gy(this, "activeIndex", 0),
      gy(this, "coordinateList", []),
      gy(this, "layout", "horizontal");
  }
  return lq(e, [
    {
      key: "setDetails",
      value: function (t) {
        var r,
          n = t.coordinateList,
          o = n === void 0 ? null : n,
          i = t.container,
          a = i === void 0 ? null : i,
          c = t.layout,
          u = c === void 0 ? null : c,
          s = t.offset,
          l = s === void 0 ? null : s,
          f = t.mouseHandlerCallback,
          p = f === void 0 ? null : f;
        (this.coordinateList =
          (r = o ?? this.coordinateList) !== null && r !== void 0 ? r : []),
          (this.container = a ?? this.container),
          (this.layout = u ?? this.layout),
          (this.offset = l ?? this.offset),
          (this.mouseHandlerCallback = p ?? this.mouseHandlerCallback),
          (this.activeIndex = Math.min(
            Math.max(this.activeIndex, 0),
            this.coordinateList.length - 1,
          ));
      },
    },
    {
      key: "focus",
      value: function () {
        this.spoofMouse();
      },
    },
    {
      key: "keyboardEvent",
      value: function (t) {
        if (this.coordinateList.length !== 0)
          switch (t.key) {
            case "ArrowRight": {
              if (this.layout !== "horizontal") return;
              (this.activeIndex = Math.min(
                this.activeIndex + 1,
                this.coordinateList.length - 1,
              )),
                this.spoofMouse();
              break;
            }
            case "ArrowLeft": {
              if (this.layout !== "horizontal") return;
              (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                this.spoofMouse();
              break;
            }
          }
      },
    },
    {
      key: "setIndex",
      value: function (t) {
        this.activeIndex = t;
      },
    },
    {
      key: "spoofMouse",
      value: function () {
        var t, r;
        if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
          var n = this.container.getBoundingClientRect(),
            o = n.x,
            i = n.y,
            a = n.height,
            c = this.coordinateList[this.activeIndex].coordinate,
            u =
              ((t = window) === null || t === void 0 ? void 0 : t.scrollX) || 0,
            s =
              ((r = window) === null || r === void 0 ? void 0 : r.scrollY) || 0,
            l = o + c + u,
            f = i + this.offset.top + a / 2 + s;
          this.mouseHandlerCallback({ pageX: l, pageY: f });
        }
      },
    },
  ]);
})();
function dq(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0],
      o = e == null ? void 0 : e[1];
    if (n && o && V(n) && V(o)) return !0;
  }
  return !1;
}
function hq(e, t, r, n) {
  var o = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - o : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - o,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n,
  };
}
function s2(e) {
  var t = e.cx,
    r = e.cy,
    n = e.radius,
    o = e.startAngle,
    i = e.endAngle,
    a = Fe(t, r, n, o),
    c = Fe(t, r, n, i);
  return {
    points: [a, c],
    cx: t,
    cy: r,
    radius: n,
    startAngle: o,
    endAngle: i,
  };
}
function yq(e, t, r) {
  var n, o, i, a;
  if (e === "horizontal")
    (n = t.x), (i = n), (o = r.top), (a = r.top + r.height);
  else if (e === "vertical")
    (o = t.y), (a = o), (n = r.left), (i = r.left + r.width);
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var c = t.cx,
        u = t.cy,
        s = t.innerRadius,
        l = t.outerRadius,
        f = t.angle,
        p = Fe(c, u, s, f),
        h = Fe(c, u, l, f);
      (n = p.x), (o = p.y), (i = h.x), (a = h.y);
    } else return s2(t);
  return [
    { x: n, y: o },
    { x: i, y: a },
  ];
}
function di(e) {
  "@babel/helpers - typeof";
  return (
    (di =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    di(e)
  );
}
function l2(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function qc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? l2(Object(r), !0).forEach(function (n) {
          vq(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : l2(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function vq(e, t, r) {
  return (
    (t = mq(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function mq(e) {
  var t = gq(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function gq(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bq(e) {
  var t,
    r,
    n = e.element,
    o = e.tooltipEventType,
    i = e.isActive,
    a = e.activeCoordinate,
    c = e.activePayload,
    u = e.offset,
    s = e.activeTooltipIndex,
    l = e.tooltipAxisBandSize,
    f = e.layout,
    p = e.chartName,
    h =
      (t = n.props.cursor) !== null && t !== void 0
        ? t
        : (r = n.type.defaultProps) === null || r === void 0
          ? void 0
          : r.cursor;
  if (!n || !h || !i || !a || (p !== "ScatterChart" && o !== "axis"))
    return null;
  var v,
    d = Zj;
  if (p === "ScatterChart") (v = a), (d = AU);
  else if (p === "BarChart") (v = hq(f, a, u, l)), (d = Oh);
  else if (f === "radial") {
    var y = s2(a),
      m = y.cx,
      b = y.cy,
      x = y.radius,
      g = y.startAngle,
      O = y.endAngle;
    (v = {
      cx: m,
      cy: b,
      startAngle: g,
      endAngle: O,
      innerRadius: x,
      outerRadius: x,
    }),
      (d = Vj);
  } else (v = { points: yq(f, a, u) }), (d = Zj);
  var S = qc(
    qc(qc(qc({ stroke: "#ccc", pointerEvents: "none" }, u), v), ve(h, !1)),
    {},
    {
      payload: c,
      payloadIndex: s,
      className: de("recharts-tooltip-cursor", h.className),
    },
  );
  return w.isValidElement(h) ? w.cloneElement(h, S) : w.createElement(d, S);
}
var wq = ["item"],
  xq = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc",
  ];
function Hn(e) {
  "@babel/helpers - typeof";
  return (
    (Hn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Hn(e)
  );
}
function Wn() {
  return (
    (Wn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Wn.apply(this, arguments)
  );
}
function f2(e, t) {
  return jq(e) || Sq(e, t) || h2(e, t) || Oq();
}
function Oq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sq(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      c = [],
      u = !0,
      s = !1;
    try {
      if (((i = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t);
          u = !0
        );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw o;
      }
    }
    return c;
  }
}
function jq(e) {
  if (Array.isArray(e)) return e;
}
function p2(e, t) {
  if (e == null) return {};
  var r = kq(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function kq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Pq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Eq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, v2(n.key), n);
  }
}
function Mq(e, t, r) {
  return (
    t && Eq(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _q(e, t, r) {
  return (
    (t = Gc(t)),
    Aq(
      e,
      d2() ? Reflect.construct(t, r || [], Gc(e).constructor) : t.apply(e, r),
    )
  );
}
function Aq(e, t) {
  if (t && (Hn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Tq(e);
}
function Tq(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function d2() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (d2 = function () {
    return !!e;
  })();
}
function Gc(e) {
  return (
    (Gc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Gc(e)
  );
}
function Cq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && by(e, t);
}
function by(e, t) {
  return (
    (by = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    by(e, t)
  );
}
function qn(e) {
  return Nq(e) || Iq(e) || h2(e) || Dq();
}
function Dq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function h2(e, t) {
  if (e) {
    if (typeof e == "string") return wy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return wy(e, t);
  }
}
function Iq(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Nq(e) {
  if (Array.isArray(e)) return wy(e);
}
function wy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function y2(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? y2(Object(r), !0).forEach(function (n) {
          ie(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : y2(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ie(e, t, r) {
  return (
    (t = v2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function v2(e) {
  var t = Rq(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function Rq(e, t) {
  if (Hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Lq = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  Bq = { width: "100%", height: "100%" },
  m2 = { x: 0, y: 0 };
function Vc(e) {
  return e;
}
var zq = function (e, t) {
    return t === "horizontal"
      ? e.x
      : t === "vertical"
        ? e.y
        : t === "centric"
          ? e.angle
          : e.radius;
  },
  Fq = function (e, t, r, n) {
    var o = t.find(function (s) {
      return s && s.index === r;
    });
    if (o) {
      if (e === "horizontal") return { x: o.coordinate, y: n.y };
      if (e === "vertical") return { x: n.x, y: o.coordinate };
      if (e === "centric") {
        var i = o.coordinate,
          a = n.radius;
        return H(
          H(H({}, n), Fe(n.cx, n.cy, a, i)),
          {},
          { angle: i, radius: a },
        );
      }
      var c = o.coordinate,
        u = n.angle;
      return H(H(H({}, n), Fe(n.cx, n.cy, c, u)), {}, { angle: u, radius: c });
    }
    return m2;
  },
  Xc = function (e, t) {
    var r = t.graphicalItems,
      n = t.dataStartIndex,
      o = t.dataEndIndex,
      i = (r ?? []).reduce(function (a, c) {
        var u = c.props.data;
        return u && u.length ? [].concat(qn(a), qn(u)) : a;
      }, []);
    return i.length > 0
      ? i
      : e && e.length && V(n) && V(o)
        ? e.slice(n, o + 1)
        : [];
  };
function g2(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var xy = function (e, t, r, n) {
    var o = e.graphicalItems,
      i = e.tooltipAxis,
      a = Xc(t, e);
    return r < 0 || !o || !o.length || r >= a.length
      ? null
      : o.reduce(function (c, u) {
          var s,
            l = (s = u.props.data) !== null && s !== void 0 ? s : t;
          l &&
            e.dataStartIndex + e.dataEndIndex !== 0 &&
            e.dataEndIndex - e.dataStartIndex >= r &&
            (l = l.slice(e.dataStartIndex, e.dataEndIndex + 1));
          var f;
          if (i.dataKey && !i.allowDuplicatedCategory) {
            var p = l === void 0 ? a : l;
            f = yl(p, i.dataKey, n);
          } else f = (l && l[r]) || a[r];
          return f ? [].concat(qn(c), [Ij(u, f)]) : c;
        }, []);
  },
  b2 = function (e, t, r, n) {
    var o = n || { x: e.chartX, y: e.chartY },
      i = zq(o, r),
      a = e.orderedTooltipTicks,
      c = e.tooltipAxis,
      u = e.tooltipTicks,
      s = s9(i, a, u, c);
    if (s >= 0 && u) {
      var l = u[s] && u[s].value,
        f = xy(e, t, s, l),
        p = Fq(r, a, s, o);
      return {
        activeTooltipIndex: s,
        activeLabel: l,
        activePayload: f,
        activeCoordinate: p,
      };
    }
    return null;
  },
  Uq = function (e, t) {
    var r = t.axes,
      n = t.graphicalItems,
      o = t.axisType,
      i = t.axisIdKey,
      a = t.stackGroups,
      c = t.dataStartIndex,
      u = t.dataEndIndex,
      s = e.layout,
      l = e.children,
      f = e.stackOffset,
      p = Pj(s, o);
    return r.reduce(function (h, v) {
      var d,
        y =
          v.type.defaultProps !== void 0
            ? H(H({}, v.type.defaultProps), v.props)
            : v.props,
        m = y.type,
        b = y.dataKey,
        x = y.allowDataOverflow,
        g = y.allowDuplicatedCategory,
        O = y.scale,
        S = y.ticks,
        j = y.includeHidden,
        k = y[i];
      if (h[k]) return h;
      var A = Xc(e.data, {
          graphicalItems: n.filter(function (P) {
            var L,
              X =
                i in P.props
                  ? P.props[i]
                  : (L = P.type.defaultProps) === null || L === void 0
                    ? void 0
                    : L[i];
            return X === k;
          }),
          dataStartIndex: c,
          dataEndIndex: u,
        }),
        D = A.length,
        M,
        _,
        C;
      dq(y.domain, x, m) &&
        ((M = nh(y.domain, null, x)),
        p && (m === "number" || O !== "auto") && (C = sc(A, b, "category")));
      var T = g2(m);
      if (!M || M.length === 0) {
        var R,
          N = (R = y.domain) !== null && R !== void 0 ? R : T;
        if (b) {
          if (((M = sc(A, b, m)), m === "category" && p)) {
            var z = e5(M);
            g && z
              ? ((_ = M), (M = Pc(0, D)))
              : g ||
                (M = Dj(N, M, v).reduce(function (P, L) {
                  return P.indexOf(L) >= 0 ? P : [].concat(qn(P), [L]);
                }, []));
          } else if (m === "category")
            g
              ? (M = M.filter(function (P) {
                  return P !== "" && !ye(P);
                }))
              : (M = Dj(N, M, v).reduce(function (P, L) {
                  return P.indexOf(L) >= 0 || L === "" || ye(L)
                    ? P
                    : [].concat(qn(P), [L]);
                }, []));
          else if (m === "number") {
            var W = h9(
              A,
              n.filter(function (P) {
                var L,
                  X,
                  K =
                    i in P.props
                      ? P.props[i]
                      : (L = P.type.defaultProps) === null || L === void 0
                        ? void 0
                        : L[i],
                  Y =
                    "hide" in P.props
                      ? P.props.hide
                      : (X = P.type.defaultProps) === null || X === void 0
                        ? void 0
                        : X.hide;
                return K === k && (j || !Y);
              }),
              b,
              o,
              s,
            );
            W && (M = W);
          }
          p && (m === "number" || O !== "auto") && (C = sc(A, b, "category"));
        } else
          p
            ? (M = Pc(0, D))
            : a && a[k] && a[k].hasStack && m === "number"
              ? (M = f === "expand" ? [0, 1] : Aj(a[k].stackGroups, c, u))
              : (M = kj(
                  A,
                  n.filter(function (P) {
                    var L = i in P.props ? P.props[i] : P.type.defaultProps[i],
                      X =
                        "hide" in P.props
                          ? P.props.hide
                          : P.type.defaultProps.hide;
                    return L === k && (j || !X);
                  }),
                  m,
                  s,
                  !0,
                ));
        if (m === "number") (M = yy(l, M, k, o, S)), N && (M = nh(N, M, x));
        else if (m === "category" && N) {
          var U = N,
            B = M.every(function (P) {
              return U.indexOf(P) >= 0;
            });
          B && (M = U);
        }
      }
      return H(
        H({}, h),
        {},
        ie(
          {},
          k,
          H(
            H({}, y),
            {},
            {
              axisType: o,
              domain: M,
              categoricalDomain: C,
              duplicateDomain: _,
              originalDomain: (d = y.domain) !== null && d !== void 0 ? d : T,
              isCategorical: p,
              layout: s,
            },
          ),
        ),
      );
    }, {});
  },
  $q = function (e, t) {
    var r = t.graphicalItems,
      n = t.Axis,
      o = t.axisType,
      i = t.axisIdKey,
      a = t.stackGroups,
      c = t.dataStartIndex,
      u = t.dataEndIndex,
      s = e.layout,
      l = e.children,
      f = Xc(e.data, { graphicalItems: r, dataStartIndex: c, dataEndIndex: u }),
      p = f.length,
      h = Pj(s, o),
      v = -1;
    return r.reduce(function (d, y) {
      var m =
          y.type.defaultProps !== void 0
            ? H(H({}, y.type.defaultProps), y.props)
            : y.props,
        b = m[i],
        x = g2("number");
      if (!d[b]) {
        v++;
        var g;
        return (
          h
            ? (g = Pc(0, p))
            : a && a[b] && a[b].hasStack
              ? ((g = Aj(a[b].stackGroups, c, u)), (g = yy(l, g, b, o)))
              : ((g = nh(
                  x,
                  kj(
                    f,
                    r.filter(function (O) {
                      var S,
                        j,
                        k =
                          i in O.props
                            ? O.props[i]
                            : (S = O.type.defaultProps) === null || S === void 0
                              ? void 0
                              : S[i],
                        A =
                          "hide" in O.props
                            ? O.props.hide
                            : (j = O.type.defaultProps) === null || j === void 0
                              ? void 0
                              : j.hide;
                      return k === b && !A;
                    }),
                    "number",
                    s,
                  ),
                  n.defaultProps.allowDataOverflow,
                )),
                (g = yy(l, g, b, o))),
          H(
            H({}, d),
            {},
            ie(
              {},
              b,
              H(
                H({ axisType: o }, n.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: nt(Lq, "".concat(o, ".").concat(v % 2), null),
                  domain: g,
                  originalDomain: x,
                  isCategorical: h,
                  layout: s,
                },
              ),
            ),
          )
        );
      }
      return d;
    }, {});
  },
  Hq = function (e, t) {
    var r = t.axisType,
      n = r === void 0 ? "xAxis" : r,
      o = t.AxisComp,
      i = t.graphicalItems,
      a = t.stackGroups,
      c = t.dataStartIndex,
      u = t.dataEndIndex,
      s = e.children,
      l = "".concat(n, "Id"),
      f = bt(s, o),
      p = {};
    return (
      f && f.length
        ? (p = Uq(e, {
            axes: f,
            graphicalItems: i,
            axisType: n,
            axisIdKey: l,
            stackGroups: a,
            dataStartIndex: c,
            dataEndIndex: u,
          }))
        : i &&
          i.length &&
          (p = $q(e, {
            Axis: o,
            graphicalItems: i,
            axisType: n,
            axisIdKey: l,
            stackGroups: a,
            dataStartIndex: c,
            dataEndIndex: u,
          })),
      p
    );
  },
  Wq = function (e) {
    var t = sr(e),
      r = Qt(t, !1, !0);
    return {
      tooltipTicks: r,
      orderedTooltipTicks: zp(r, function (n) {
        return n.coordinate;
      }),
      tooltipAxis: t,
      tooltipAxisBandSize: fc(t, r),
    };
  },
  w2 = function (e) {
    var t = e.children,
      r = e.defaultShowTooltip,
      n = Je(t, Cn),
      o = 0,
      i = 0;
    return (
      e.data && e.data.length !== 0 && (i = e.data.length - 1),
      n &&
        n.props &&
        (n.props.startIndex >= 0 && (o = n.props.startIndex),
        n.props.endIndex >= 0 && (i = n.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: o,
        dataEndIndex: i,
        activeTooltipIndex: -1,
        isTooltipActive: !!r,
      }
    );
  },
  qq = function (e) {
    return !e || !e.length
      ? !1
      : e.some(function (t) {
          var r = Ht(t && t.type);
          return r && r.indexOf("Bar") >= 0;
        });
  },
  x2 = function (e) {
    return e === "horizontal"
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : e === "vertical"
        ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
        : e === "centric"
          ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
          : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  Gq = function (e, t) {
    var r = e.props,
      n = e.graphicalItems,
      o = e.xAxisMap,
      i = o === void 0 ? {} : o,
      a = e.yAxisMap,
      c = a === void 0 ? {} : a,
      u = r.width,
      s = r.height,
      l = r.children,
      f = r.margin || {},
      p = Je(l, Cn),
      h = Je(l, Dr),
      v = Object.keys(c).reduce(
        function (g, O) {
          var S = c[O],
            j = S.orientation;
          return !S.mirror && !S.hide
            ? H(H({}, g), {}, ie({}, j, g[j] + S.width))
            : g;
        },
        { left: f.left || 0, right: f.right || 0 },
      ),
      d = Object.keys(i).reduce(
        function (g, O) {
          var S = i[O],
            j = S.orientation;
          return !S.mirror && !S.hide
            ? H(H({}, g), {}, ie({}, j, nt(g, "".concat(j)) + S.height))
            : g;
        },
        { top: f.top || 0, bottom: f.bottom || 0 },
      ),
      y = H(H({}, d), v),
      m = y.bottom;
    p && (y.bottom += p.props.height || Cn.defaultProps.height),
      h && t && (y = p9(y, n, r, t));
    var b = u - y.left - y.right,
      x = s - y.top - y.bottom;
    return H(
      H({ brushBottom: m }, y),
      {},
      { width: Math.max(b, 0), height: Math.max(x, 0) },
    );
  },
  Vq = function (e, t) {
    if (t === "xAxis") return e[t].width;
    if (t === "yAxis") return e[t].height;
  },
  Xq = function (e) {
    var t = e.chartName,
      r = e.GraphicalChild,
      n = e.defaultTooltipEventType,
      o = n === void 0 ? "axis" : n,
      i = e.validateTooltipEventTypes,
      a = i === void 0 ? ["axis"] : i,
      c = e.axisComponents,
      u = e.legendContent,
      s = e.formatAxisMap,
      l = e.defaultProps,
      f = function (d, y) {
        var m = y.graphicalItems,
          b = y.stackGroups,
          x = y.offset,
          g = y.updateId,
          O = y.dataStartIndex,
          S = y.dataEndIndex,
          j = d.barSize,
          k = d.layout,
          A = d.barGap,
          D = d.barCategoryGap,
          M = d.maxBarSize,
          _ = x2(k),
          C = _.numericAxisName,
          T = _.cateAxisName,
          R = qq(m),
          N = [];
        return (
          m.forEach(function (z, W) {
            var U = Xc(d.data, {
                graphicalItems: [z],
                dataStartIndex: O,
                dataEndIndex: S,
              }),
              B =
                z.type.defaultProps !== void 0
                  ? H(H({}, z.type.defaultProps), z.props)
                  : z.props,
              P = B.dataKey,
              L = B.maxBarSize,
              X = B["".concat(C, "Id")],
              K = B["".concat(T, "Id")],
              Y = {},
              Q = c.reduce(function (tt, gr) {
                var Vn = y["".concat(gr.axisType, "Map")],
                  Ay = B["".concat(gr.axisType, "Id")];
                (Vn && Vn[Ay]) || gr.axisType === "zAxis" || $r();
                var Ty = Vn[Ay];
                return H(
                  H({}, tt),
                  {},
                  ie(
                    ie({}, gr.axisType, Ty),
                    "".concat(gr.axisType, "Ticks"),
                    Qt(Ty),
                  ),
                );
              }, Y),
              q = Q[T],
              oe = Q["".concat(T, "Ticks")],
              F = b && b[X] && b[X].hasStack && P9(z, b[X].stackGroups),
              G = Ht(z.type).indexOf("Bar") >= 0,
              Z = fc(q, oe),
              $ = [],
              pe = R && l9({ barSize: j, stackGroups: b, totalSize: Vq(Q, T) });
            if (G) {
              var ae,
                Oe,
                Se = ye(L) ? M : L,
                ze =
                  (ae =
                    (Oe = fc(q, oe, !0)) !== null && Oe !== void 0
                      ? Oe
                      : Se) !== null && ae !== void 0
                    ? ae
                    : 0;
              ($ = f9({
                barGap: A,
                barCategoryGap: D,
                bandSize: ze !== Z ? ze : Z,
                sizeList: pe[K],
                maxBarSize: Se,
              })),
                ze !== Z &&
                  ($ = $.map(function (tt) {
                    return H(
                      H({}, tt),
                      {},
                      {
                        position: H(
                          H({}, tt.position),
                          {},
                          { offset: tt.position.offset - ze / 2 },
                        ),
                      },
                    );
                  }));
            }
            var Nt = z && z.type && z.type.getComposedData;
            Nt &&
              N.push({
                props: H(
                  H(
                    {},
                    Nt(
                      H(
                        H({}, Q),
                        {},
                        {
                          displayedData: U,
                          props: d,
                          dataKey: P,
                          item: z,
                          bandSize: Z,
                          barPosition: $,
                          offset: x,
                          stackedData: F,
                          layout: k,
                          dataStartIndex: O,
                          dataEndIndex: S,
                        },
                      ),
                    ),
                  ),
                  {},
                  ie(
                    ie(
                      ie({ key: z.key || "item-".concat(W) }, C, Q[C]),
                      T,
                      Q[T],
                    ),
                    "animationId",
                    g,
                  ),
                ),
                childIndex: p5(z, d.children),
                item: z,
              });
          }),
          N
        );
      },
      p = function (d, y) {
        var m = d.props,
          b = d.dataStartIndex,
          x = d.dataEndIndex,
          g = d.updateId;
        if (!Yb({ props: m })) return null;
        var O = m.children,
          S = m.layout,
          j = m.stackOffset,
          k = m.data,
          A = m.reverseStackOrder,
          D = x2(S),
          M = D.numericAxisName,
          _ = D.cateAxisName,
          C = bt(O, r),
          T = S9(k, C, "".concat(M, "Id"), "".concat(_, "Id"), j, A),
          R = c.reduce(function (B, P) {
            var L = "".concat(P.axisType, "Map");
            return H(
              H({}, B),
              {},
              ie(
                {},
                L,
                Hq(
                  m,
                  H(
                    H({}, P),
                    {},
                    {
                      graphicalItems: C,
                      stackGroups: P.axisType === M && T,
                      dataStartIndex: b,
                      dataEndIndex: x,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          N = Gq(
            H(H({}, R), {}, { props: m, graphicalItems: C }),
            y == null ? void 0 : y.legendBBox,
          );
        Object.keys(R).forEach(function (B) {
          R[B] = s(m, R[B], N, B.replace("Map", ""), t);
        });
        var z = R["".concat(_, "Map")],
          W = Wq(z),
          U = f(
            m,
            H(
              H({}, R),
              {},
              {
                dataStartIndex: b,
                dataEndIndex: x,
                updateId: g,
                graphicalItems: C,
                stackGroups: T,
                offset: N,
              },
            ),
          );
        return H(
          H(
            {
              formattedGraphicalItems: U,
              graphicalItems: C,
              offset: N,
              stackGroups: T,
            },
            W,
          ),
          R,
        );
      },
      h = (function (d) {
        function y(m) {
          var b, x, g;
          return (
            Pq(this, y),
            (g = _q(this, y, [m])),
            ie(g, "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            ie(g, "accessibilityManager", new pq()),
            ie(g, "handleLegendBBoxUpdate", function (O) {
              if (O) {
                var S = g.state,
                  j = S.dataStartIndex,
                  k = S.dataEndIndex,
                  A = S.updateId;
                g.setState(
                  H(
                    { legendBBox: O },
                    p(
                      {
                        props: g.props,
                        dataStartIndex: j,
                        dataEndIndex: k,
                        updateId: A,
                      },
                      H(H({}, g.state), {}, { legendBBox: O }),
                    ),
                  ),
                );
              }
            }),
            ie(g, "handleReceiveSyncEvent", function (O, S, j) {
              if (g.props.syncId === O) {
                if (
                  j === g.eventEmitterSymbol &&
                  typeof g.props.syncMethod != "function"
                )
                  return;
                g.applySyncEvent(S);
              }
            }),
            ie(g, "handleBrushChange", function (O) {
              var S = O.startIndex,
                j = O.endIndex;
              if (S !== g.state.dataStartIndex || j !== g.state.dataEndIndex) {
                var k = g.state.updateId;
                g.setState(function () {
                  return H(
                    { dataStartIndex: S, dataEndIndex: j },
                    p(
                      {
                        props: g.props,
                        dataStartIndex: S,
                        dataEndIndex: j,
                        updateId: k,
                      },
                      g.state,
                    ),
                  );
                }),
                  g.triggerSyncEvent({ dataStartIndex: S, dataEndIndex: j });
              }
            }),
            ie(g, "handleMouseEnter", function (O) {
              var S = g.getMouseInfo(O);
              if (S) {
                var j = H(H({}, S), {}, { isTooltipActive: !0 });
                g.setState(j), g.triggerSyncEvent(j);
                var k = g.props.onMouseEnter;
                fe(k) && k(j, O);
              }
            }),
            ie(g, "triggeredAfterMouseMove", function (O) {
              var S = g.getMouseInfo(O),
                j = S
                  ? H(H({}, S), {}, { isTooltipActive: !0 })
                  : { isTooltipActive: !1 };
              g.setState(j), g.triggerSyncEvent(j);
              var k = g.props.onMouseMove;
              fe(k) && k(j, O);
            }),
            ie(g, "handleItemMouseEnter", function (O) {
              g.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: O,
                  activePayload: O.tooltipPayload,
                  activeCoordinate: O.tooltipPosition || { x: O.cx, y: O.cy },
                };
              });
            }),
            ie(g, "handleItemMouseLeave", function () {
              g.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            ie(g, "handleMouseMove", function (O) {
              O.persist(), g.throttleTriggeredAfterMouseMove(O);
            }),
            ie(g, "handleMouseLeave", function (O) {
              g.throttleTriggeredAfterMouseMove.cancel();
              var S = { isTooltipActive: !1 };
              g.setState(S), g.triggerSyncEvent(S);
              var j = g.props.onMouseLeave;
              fe(j) && j(S, O);
            }),
            ie(g, "handleOuterEvent", function (O) {
              var S = f5(O),
                j = nt(g.props, "".concat(S));
              if (S && fe(j)) {
                var k, A;
                /.*touch.*/i.test(S)
                  ? (A = g.getMouseInfo(O.changedTouches[0]))
                  : (A = g.getMouseInfo(O)),
                  j((k = A) !== null && k !== void 0 ? k : {}, O);
              }
            }),
            ie(g, "handleClick", function (O) {
              var S = g.getMouseInfo(O);
              if (S) {
                var j = H(H({}, S), {}, { isTooltipActive: !0 });
                g.setState(j), g.triggerSyncEvent(j);
                var k = g.props.onClick;
                fe(k) && k(j, O);
              }
            }),
            ie(g, "handleMouseDown", function (O) {
              var S = g.props.onMouseDown;
              if (fe(S)) {
                var j = g.getMouseInfo(O);
                S(j, O);
              }
            }),
            ie(g, "handleMouseUp", function (O) {
              var S = g.props.onMouseUp;
              if (fe(S)) {
                var j = g.getMouseInfo(O);
                S(j, O);
              }
            }),
            ie(g, "handleTouchMove", function (O) {
              O.changedTouches != null &&
                O.changedTouches.length > 0 &&
                g.throttleTriggeredAfterMouseMove(O.changedTouches[0]);
            }),
            ie(g, "handleTouchStart", function (O) {
              O.changedTouches != null &&
                O.changedTouches.length > 0 &&
                g.handleMouseDown(O.changedTouches[0]);
            }),
            ie(g, "handleTouchEnd", function (O) {
              O.changedTouches != null &&
                O.changedTouches.length > 0 &&
                g.handleMouseUp(O.changedTouches[0]);
            }),
            ie(g, "handleDoubleClick", function (O) {
              var S = g.props.onDoubleClick;
              if (fe(S)) {
                var j = g.getMouseInfo(O);
                S(j, O);
              }
            }),
            ie(g, "handleContextMenu", function (O) {
              var S = g.props.onContextMenu;
              if (fe(S)) {
                var j = g.getMouseInfo(O);
                S(j, O);
              }
            }),
            ie(g, "triggerSyncEvent", function (O) {
              g.props.syncId !== void 0 &&
                vy.emit(my, g.props.syncId, O, g.eventEmitterSymbol);
            }),
            ie(g, "applySyncEvent", function (O) {
              var S = g.props,
                j = S.layout,
                k = S.syncMethod,
                A = g.state.updateId,
                D = O.dataStartIndex,
                M = O.dataEndIndex;
              if (O.dataStartIndex !== void 0 || O.dataEndIndex !== void 0)
                g.setState(
                  H(
                    { dataStartIndex: D, dataEndIndex: M },
                    p(
                      {
                        props: g.props,
                        dataStartIndex: D,
                        dataEndIndex: M,
                        updateId: A,
                      },
                      g.state,
                    ),
                  ),
                );
              else if (O.activeTooltipIndex !== void 0) {
                var _ = O.chartX,
                  C = O.chartY,
                  T = O.activeTooltipIndex,
                  R = g.state,
                  N = R.offset,
                  z = R.tooltipTicks;
                if (!N) return;
                if (typeof k == "function") T = k(z, O);
                else if (k === "value") {
                  T = -1;
                  for (var W = 0; W < z.length; W++)
                    if (z[W].value === O.activeLabel) {
                      T = W;
                      break;
                    }
                }
                var U = H(H({}, N), {}, { x: N.left, y: N.top }),
                  B = Math.min(_, U.x + U.width),
                  P = Math.min(C, U.y + U.height),
                  L = z[T] && z[T].value,
                  X = xy(g.state, g.props.data, T),
                  K = z[T]
                    ? {
                        x: j === "horizontal" ? z[T].coordinate : B,
                        y: j === "horizontal" ? P : z[T].coordinate,
                      }
                    : m2;
                g.setState(
                  H(
                    H({}, O),
                    {},
                    {
                      activeLabel: L,
                      activeCoordinate: K,
                      activePayload: X,
                      activeTooltipIndex: T,
                    },
                  ),
                );
              } else g.setState(O);
            }),
            ie(g, "renderCursor", function (O) {
              var S,
                j = g.state,
                k = j.isTooltipActive,
                A = j.activeCoordinate,
                D = j.activePayload,
                M = j.offset,
                _ = j.activeTooltipIndex,
                C = j.tooltipAxisBandSize,
                T = g.getTooltipEventType(),
                R = (S = O.props.active) !== null && S !== void 0 ? S : k,
                N = g.props.layout,
                z = O.key || "_recharts-cursor";
              return I.createElement(bq, {
                key: z,
                activeCoordinate: A,
                activePayload: D,
                activeTooltipIndex: _,
                chartName: t,
                element: O,
                isActive: R,
                layout: N,
                offset: M,
                tooltipAxisBandSize: C,
                tooltipEventType: T,
              });
            }),
            ie(g, "renderPolarAxis", function (O, S, j) {
              var k = nt(O, "type.axisType"),
                A = nt(g.state, "".concat(k, "Map")),
                D = O.type.defaultProps,
                M = D !== void 0 ? H(H({}, D), O.props) : O.props,
                _ = A && A[M["".concat(k, "Id")]];
              return w.cloneElement(
                O,
                H(
                  H({}, _),
                  {},
                  {
                    className: de(k, _.className),
                    key: O.key || "".concat(S, "-").concat(j),
                    ticks: Qt(_, !0),
                  },
                ),
              );
            }),
            ie(g, "renderPolarGrid", function (O) {
              var S = O.props,
                j = S.radialLines,
                k = S.polarAngles,
                A = S.polarRadius,
                D = g.state,
                M = D.radiusAxisMap,
                _ = D.angleAxisMap,
                C = sr(M),
                T = sr(_),
                R = T.cx,
                N = T.cy,
                z = T.innerRadius,
                W = T.outerRadius;
              return w.cloneElement(O, {
                polarAngles: Array.isArray(k)
                  ? k
                  : Qt(T, !0).map(function (U) {
                      return U.coordinate;
                    }),
                polarRadius: Array.isArray(A)
                  ? A
                  : Qt(C, !0).map(function (U) {
                      return U.coordinate;
                    }),
                cx: R,
                cy: N,
                innerRadius: z,
                outerRadius: W,
                key: O.key || "polar-grid",
                radialLines: j,
              });
            }),
            ie(g, "renderLegend", function () {
              var O = g.state.formattedGraphicalItems,
                S = g.props,
                j = S.children,
                k = S.width,
                A = S.height,
                D = g.props.margin || {},
                M = k - (D.left || 0) - (D.right || 0),
                _ = xj({
                  children: j,
                  formattedGraphicalItems: O,
                  legendWidth: M,
                  legendContent: u,
                });
              if (!_) return null;
              var C = _.item,
                T = p2(_, wq);
              return w.cloneElement(
                C,
                H(
                  H({}, T),
                  {},
                  {
                    chartWidth: k,
                    chartHeight: A,
                    margin: D,
                    onBBoxUpdate: g.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            ie(g, "renderTooltip", function () {
              var O,
                S = g.props,
                j = S.children,
                k = S.accessibilityLayer,
                A = Je(j, _t);
              if (!A) return null;
              var D = g.state,
                M = D.isTooltipActive,
                _ = D.activeCoordinate,
                C = D.activePayload,
                T = D.activeLabel,
                R = D.offset,
                N = (O = A.props.active) !== null && O !== void 0 ? O : M;
              return w.cloneElement(A, {
                viewBox: H(H({}, R), {}, { x: R.left, y: R.top }),
                active: N,
                label: T,
                payload: N ? C : [],
                coordinate: _,
                accessibilityLayer: k,
              });
            }),
            ie(g, "renderBrush", function (O) {
              var S = g.props,
                j = S.margin,
                k = S.data,
                A = g.state,
                D = A.offset,
                M = A.dataStartIndex,
                _ = A.dataEndIndex,
                C = A.updateId;
              return w.cloneElement(O, {
                key: O.key || "_recharts-brush",
                onChange: lc(g.handleBrushChange, O.props.onChange),
                data: k,
                x: V(O.props.x) ? O.props.x : D.left,
                y: V(O.props.y)
                  ? O.props.y
                  : D.top + D.height + D.brushBottom - (j.bottom || 0),
                width: V(O.props.width) ? O.props.width : D.width,
                startIndex: M,
                endIndex: _,
                updateId: "brush-".concat(C),
              });
            }),
            ie(g, "renderReferenceElement", function (O, S, j) {
              if (!O) return null;
              var k = g,
                A = k.clipPathId,
                D = g.state,
                M = D.xAxisMap,
                _ = D.yAxisMap,
                C = D.offset,
                T = O.type.defaultProps || {},
                R = O.props,
                N = R.xAxisId,
                z = N === void 0 ? T.xAxisId : N,
                W = R.yAxisId,
                U = W === void 0 ? T.yAxisId : W;
              return w.cloneElement(O, {
                key: O.key || "".concat(S, "-").concat(j),
                xAxis: M[z],
                yAxis: _[U],
                viewBox: {
                  x: C.left,
                  y: C.top,
                  width: C.width,
                  height: C.height,
                },
                clipPathId: A,
              });
            }),
            ie(g, "renderActivePoints", function (O) {
              var S = O.item,
                j = O.activePoint,
                k = O.basePoint,
                A = O.childIndex,
                D = O.isRange,
                M = [],
                _ = S.props.key,
                C =
                  S.item.type.defaultProps !== void 0
                    ? H(H({}, S.item.type.defaultProps), S.item.props)
                    : S.item.props,
                T = C.activeDot,
                R = C.dataKey,
                N = H(
                  H(
                    {
                      index: A,
                      dataKey: R,
                      cx: j.x,
                      cy: j.y,
                      r: 4,
                      fill: th(S.item),
                      strokeWidth: 2,
                      stroke: "#fff",
                      payload: j.payload,
                      value: j.value,
                    },
                    ve(T, !1),
                  ),
                  sa(T),
                );
              return (
                M.push(
                  y.renderActiveDot(
                    T,
                    N,
                    "".concat(_, "-activePoint-").concat(A),
                  ),
                ),
                k
                  ? M.push(
                      y.renderActiveDot(
                        T,
                        H(H({}, N), {}, { cx: k.x, cy: k.y }),
                        "".concat(_, "-basePoint-").concat(A),
                      ),
                    )
                  : D && M.push(null),
                M
              );
            }),
            ie(g, "renderGraphicChild", function (O, S, j) {
              var k = g.filterFormatItem(O, S, j);
              if (!k) return null;
              var A = g.getTooltipEventType(),
                D = g.state,
                M = D.isTooltipActive,
                _ = D.tooltipAxis,
                C = D.activeTooltipIndex,
                T = D.activeLabel,
                R = g.props.children,
                N = Je(R, _t),
                z = k.props,
                W = z.points,
                U = z.isRange,
                B = z.baseLine,
                P =
                  k.item.type.defaultProps !== void 0
                    ? H(H({}, k.item.type.defaultProps), k.item.props)
                    : k.item.props,
                L = P.activeDot,
                X = P.hide,
                K = P.activeBar,
                Y = P.activeShape,
                Q = !!(!X && M && N && (L || K || Y)),
                q = {};
              A !== "axis" && N && N.props.trigger === "click"
                ? (q = { onClick: lc(g.handleItemMouseEnter, O.props.onClick) })
                : A !== "axis" &&
                  (q = {
                    onMouseLeave: lc(
                      g.handleItemMouseLeave,
                      O.props.onMouseLeave,
                    ),
                    onMouseEnter: lc(
                      g.handleItemMouseEnter,
                      O.props.onMouseEnter,
                    ),
                  });
              var oe = w.cloneElement(O, H(H({}, k.props), q));
              function F(Vn) {
                return typeof _.dataKey == "function"
                  ? _.dataKey(Vn.payload)
                  : null;
              }
              if (Q)
                if (C >= 0) {
                  var G, Z;
                  if (_.dataKey && !_.allowDuplicatedCategory) {
                    var $ =
                      typeof _.dataKey == "function"
                        ? F
                        : "payload.".concat(_.dataKey.toString());
                    (G = yl(W, $, T)), (Z = U && B && yl(B, $, T));
                  } else (G = W == null ? void 0 : W[C]), (Z = U && B && B[C]);
                  if (Y || K) {
                    var pe =
                      O.props.activeIndex !== void 0 ? O.props.activeIndex : C;
                    return [
                      w.cloneElement(
                        O,
                        H(H(H({}, k.props), q), {}, { activeIndex: pe }),
                      ),
                      null,
                      null,
                    ];
                  }
                  if (!ye(G))
                    return [oe].concat(
                      qn(
                        g.renderActivePoints({
                          item: k,
                          activePoint: G,
                          basePoint: Z,
                          childIndex: C,
                          isRange: U,
                        }),
                      ),
                    );
                } else {
                  var ae,
                    Oe =
                      (ae = g.getItemByXY(g.state.activeCoordinate)) !== null &&
                      ae !== void 0
                        ? ae
                        : { graphicalItem: oe },
                    Se = Oe.graphicalItem,
                    ze = Se.item,
                    Nt = ze === void 0 ? O : ze,
                    tt = Se.childIndex,
                    gr = H(H(H({}, k.props), q), {}, { activeIndex: tt });
                  return [w.cloneElement(Nt, gr), null, null];
                }
              return U ? [oe, null, null] : [oe, null];
            }),
            ie(g, "renderCustomized", function (O, S, j) {
              return w.cloneElement(
                O,
                H(
                  H({ key: "recharts-customized-".concat(j) }, g.props),
                  g.state,
                ),
              );
            }),
            ie(g, "renderMap", {
              CartesianGrid: { handler: Vc, once: !0 },
              ReferenceArea: { handler: g.renderReferenceElement },
              ReferenceLine: { handler: Vc },
              ReferenceDot: { handler: g.renderReferenceElement },
              XAxis: { handler: Vc },
              YAxis: { handler: Vc },
              Brush: { handler: g.renderBrush, once: !0 },
              Bar: { handler: g.renderGraphicChild },
              Line: { handler: g.renderGraphicChild },
              Area: { handler: g.renderGraphicChild },
              Radar: { handler: g.renderGraphicChild },
              RadialBar: { handler: g.renderGraphicChild },
              Scatter: { handler: g.renderGraphicChild },
              Pie: { handler: g.renderGraphicChild },
              Funnel: { handler: g.renderGraphicChild },
              Tooltip: { handler: g.renderCursor, once: !0 },
              PolarGrid: { handler: g.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: g.renderPolarAxis },
              PolarRadiusAxis: { handler: g.renderPolarAxis },
              Customized: { handler: g.renderCustomized },
            }),
            (g.clipPathId = "".concat(
              (b = m.id) !== null && b !== void 0 ? b : ua("recharts"),
              "-clip",
            )),
            (g.throttleTriggeredAfterMouseMove = lO(
              g.triggeredAfterMouseMove,
              (x = m.throttleDelay) !== null && x !== void 0 ? x : 1e3 / 60,
            )),
            (g.state = {}),
            g
          );
        }
        return (
          Cq(y, d),
          Mq(y, [
            {
              key: "componentDidMount",
              value: function () {
                var m, b;
                this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left:
                        (m = this.props.margin.left) !== null && m !== void 0
                          ? m
                          : 0,
                      top:
                        (b = this.props.margin.top) !== null && b !== void 0
                          ? b
                          : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "displayDefaultTooltip",
              value: function () {
                var m = this.props,
                  b = m.children,
                  x = m.data,
                  g = m.height,
                  O = m.layout,
                  S = Je(b, _t);
                if (S) {
                  var j = S.props.defaultIndex;
                  if (
                    !(
                      typeof j != "number" ||
                      j < 0 ||
                      j > this.state.tooltipTicks.length - 1
                    )
                  ) {
                    var k =
                        this.state.tooltipTicks[j] &&
                        this.state.tooltipTicks[j].value,
                      A = xy(this.state, x, j, k),
                      D = this.state.tooltipTicks[j].coordinate,
                      M = (this.state.offset.top + g) / 2,
                      _ = O === "horizontal",
                      C = _ ? { x: D, y: M } : { y: D, x: M },
                      T = this.state.formattedGraphicalItems.find(function (N) {
                        var z = N.item;
                        return z.type.name === "Scatter";
                      });
                    T &&
                      ((C = H(H({}, C), T.props.points[j].tooltipPosition)),
                      (A = T.props.points[j].tooltipPayload));
                    var R = {
                      activeTooltipIndex: j,
                      isTooltipActive: !0,
                      activeLabel: k,
                      activePayload: A,
                      activeCoordinate: C,
                    };
                    this.setState(R),
                      this.renderCursor(S),
                      this.accessibilityManager.setIndex(j);
                  }
                }
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function (m, b) {
                if (!this.props.accessibilityLayer) return null;
                if (
                  (this.state.tooltipTicks !== b.tooltipTicks &&
                    this.accessibilityManager.setDetails({
                      coordinateList: this.state.tooltipTicks,
                    }),
                  this.props.layout !== m.layout &&
                    this.accessibilityManager.setDetails({
                      layout: this.props.layout,
                    }),
                  this.props.margin !== m.margin)
                ) {
                  var x, g;
                  this.accessibilityManager.setDetails({
                    offset: {
                      left:
                        (x = this.props.margin.left) !== null && x !== void 0
                          ? x
                          : 0,
                      top:
                        (g = this.props.margin.top) !== null && g !== void 0
                          ? g
                          : 0,
                    },
                  });
                }
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function (m) {
                xl([Je(m.children, _t)], [Je(this.props.children, _t)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeListener(),
                  this.throttleTriggeredAfterMouseMove.cancel();
              },
            },
            {
              key: "getTooltipEventType",
              value: function () {
                var m = Je(this.props.children, _t);
                if (m && typeof m.props.shared == "boolean") {
                  var b = m.props.shared ? "axis" : "item";
                  return a.indexOf(b) >= 0 ? b : o;
                }
                return o;
              },
            },
            {
              key: "getMouseInfo",
              value: function (m) {
                if (!this.container) return null;
                var b = this.container,
                  x = b.getBoundingClientRect(),
                  g = QL(x),
                  O = {
                    chartX: Math.round(m.pageX - g.left),
                    chartY: Math.round(m.pageY - g.top),
                  },
                  S = x.width / b.offsetWidth || 1,
                  j = this.inRange(O.chartX, O.chartY, S);
                if (!j) return null;
                var k = this.state,
                  A = k.xAxisMap,
                  D = k.yAxisMap,
                  M = this.getTooltipEventType(),
                  _ = b2(this.state, this.props.data, this.props.layout, j);
                if (M !== "axis" && A && D) {
                  var C = sr(A).scale,
                    T = sr(D).scale,
                    R = C && C.invert ? C.invert(O.chartX) : null,
                    N = T && T.invert ? T.invert(O.chartY) : null;
                  return H(H({}, O), {}, { xValue: R, yValue: N }, _);
                }
                return _ ? H(H({}, O), _) : null;
              },
            },
            {
              key: "inRange",
              value: function (m, b) {
                var x =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : 1,
                  g = this.props.layout,
                  O = m / x,
                  S = b / x;
                if (g === "horizontal" || g === "vertical") {
                  var j = this.state.offset,
                    k =
                      O >= j.left &&
                      O <= j.left + j.width &&
                      S >= j.top &&
                      S <= j.top + j.height;
                  return k ? { x: O, y: S } : null;
                }
                var A = this.state,
                  D = A.angleAxisMap,
                  M = A.radiusAxisMap;
                if (D && M) {
                  var _ = sr(D);
                  return Lj({ x: O, y: S }, _);
                }
                return null;
              },
            },
            {
              key: "parseEventsOfWrapper",
              value: function () {
                var m = this.props.children,
                  b = this.getTooltipEventType(),
                  x = Je(m, _t),
                  g = {};
                x &&
                  b === "axis" &&
                  (x.props.trigger === "click"
                    ? (g = { onClick: this.handleClick })
                    : (g = {
                        onMouseEnter: this.handleMouseEnter,
                        onDoubleClick: this.handleDoubleClick,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                        onContextMenu: this.handleContextMenu,
                      }));
                var O = sa(this.props, this.handleOuterEvent);
                return H(H({}, O), g);
              },
            },
            {
              key: "addListener",
              value: function () {
                vy.on(my, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "removeListener",
              value: function () {
                vy.removeListener(my, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "filterFormatItem",
              value: function (m, b, x) {
                for (
                  var g = this.state.formattedGraphicalItems,
                    O = 0,
                    S = g.length;
                  O < S;
                  O++
                ) {
                  var j = g[O];
                  if (
                    j.item === m ||
                    j.props.key === m.key ||
                    (b === Ht(j.item.type) && x === j.childIndex)
                  )
                    return j;
                }
                return null;
              },
            },
            {
              key: "renderClipPath",
              value: function () {
                var m = this.clipPathId,
                  b = this.state.offset,
                  x = b.left,
                  g = b.top,
                  O = b.height,
                  S = b.width;
                return I.createElement(
                  "defs",
                  null,
                  I.createElement(
                    "clipPath",
                    { id: m },
                    I.createElement("rect", { x, y: g, height: O, width: S }),
                  ),
                );
              },
            },
            {
              key: "getXScales",
              value: function () {
                var m = this.state.xAxisMap;
                return m
                  ? Object.entries(m).reduce(function (b, x) {
                      var g = f2(x, 2),
                        O = g[0],
                        S = g[1];
                      return H(H({}, b), {}, ie({}, O, S.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getYScales",
              value: function () {
                var m = this.state.yAxisMap;
                return m
                  ? Object.entries(m).reduce(function (b, x) {
                      var g = f2(x, 2),
                        O = g[0],
                        S = g[1];
                      return H(H({}, b), {}, ie({}, O, S.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getXScaleByAxisId",
              value: function (m) {
                var b;
                return (b = this.state.xAxisMap) === null ||
                  b === void 0 ||
                  (b = b[m]) === null ||
                  b === void 0
                  ? void 0
                  : b.scale;
              },
            },
            {
              key: "getYScaleByAxisId",
              value: function (m) {
                var b;
                return (b = this.state.yAxisMap) === null ||
                  b === void 0 ||
                  (b = b[m]) === null ||
                  b === void 0
                  ? void 0
                  : b.scale;
              },
            },
            {
              key: "getItemByXY",
              value: function (m) {
                var b = this.state,
                  x = b.formattedGraphicalItems,
                  g = b.activeItem;
                if (x && x.length)
                  for (var O = 0, S = x.length; O < S; O++) {
                    var j = x[O],
                      k = j.props,
                      A = j.item,
                      D =
                        A.type.defaultProps !== void 0
                          ? H(H({}, A.type.defaultProps), A.props)
                          : A.props,
                      M = Ht(A.type);
                    if (M === "Bar") {
                      var _ = (k.data || []).find(function (N) {
                        return wU(m, N);
                      });
                      if (_) return { graphicalItem: j, payload: _ };
                    } else if (M === "RadialBar") {
                      var C = (k.data || []).find(function (N) {
                        return Lj(m, N);
                      });
                      if (C) return { graphicalItem: j, payload: C };
                    } else if (jc(j, g) || kc(j, g) || ai(j, g)) {
                      var T = l$({
                          graphicalItem: j,
                          activeTooltipItem: g,
                          itemData: D.data,
                        }),
                        R = D.activeIndex === void 0 ? T : D.activeIndex;
                      return {
                        graphicalItem: H(H({}, j), {}, { childIndex: R }),
                        payload: ai(j, g) ? D.data[T] : j.props.data[T],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var m = this;
                if (!Yb(this)) return null;
                var b = this.props,
                  x = b.children,
                  g = b.className,
                  O = b.width,
                  S = b.height,
                  j = b.style,
                  k = b.compact,
                  A = b.title,
                  D = b.desc,
                  M = p2(b, xq),
                  _ = ve(M, !1);
                if (k)
                  return I.createElement(
                    EP,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    I.createElement(
                      Sl,
                      Wn({}, _, { width: O, height: S, title: A, desc: D }),
                      this.renderClipPath(),
                      Jb(x, this.renderMap),
                    ),
                  );
                if (this.props.accessibilityLayer) {
                  var C, T;
                  (_.tabIndex =
                    (C = this.props.tabIndex) !== null && C !== void 0 ? C : 0),
                    (_.role =
                      (T = this.props.role) !== null && T !== void 0
                        ? T
                        : "application"),
                    (_.onKeyDown = function (N) {
                      m.accessibilityManager.keyboardEvent(N);
                    }),
                    (_.onFocus = function () {
                      m.accessibilityManager.focus();
                    });
                }
                var R = this.parseEventsOfWrapper();
                return I.createElement(
                  EP,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  I.createElement(
                    "div",
                    Wn(
                      {
                        className: de("recharts-wrapper", g),
                        style: H(
                          {
                            position: "relative",
                            cursor: "default",
                            width: O,
                            height: S,
                          },
                          j,
                        ),
                      },
                      R,
                      {
                        ref: function (N) {
                          m.container = N;
                        },
                      },
                    ),
                    I.createElement(
                      Sl,
                      Wn({}, _, {
                        width: O,
                        height: S,
                        title: A,
                        desc: D,
                        style: Bq,
                      }),
                      this.renderClipPath(),
                      Jb(x, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                );
              },
            },
          ])
        );
      })(w.Component);
    ie(h, "displayName", t),
      ie(
        h,
        "defaultProps",
        H(
          {
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: "index",
          },
          l,
        ),
      ),
      ie(h, "getDerivedStateFromProps", function (d, y) {
        var m = d.dataKey,
          b = d.data,
          x = d.children,
          g = d.width,
          O = d.height,
          S = d.layout,
          j = d.stackOffset,
          k = d.margin,
          A = y.dataStartIndex,
          D = y.dataEndIndex;
        if (y.updateId === void 0) {
          var M = w2(d);
          return H(
            H(
              H({}, M),
              {},
              { updateId: 0 },
              p(H(H({ props: d }, M), {}, { updateId: 0 }), y),
            ),
            {},
            {
              prevDataKey: m,
              prevData: b,
              prevWidth: g,
              prevHeight: O,
              prevLayout: S,
              prevStackOffset: j,
              prevMargin: k,
              prevChildren: x,
            },
          );
        }
        if (
          m !== y.prevDataKey ||
          b !== y.prevData ||
          g !== y.prevWidth ||
          O !== y.prevHeight ||
          S !== y.prevLayout ||
          j !== y.prevStackOffset ||
          !fn(k, y.prevMargin)
        ) {
          var _ = w2(d),
            C = {
              chartX: y.chartX,
              chartY: y.chartY,
              isTooltipActive: y.isTooltipActive,
            },
            T = H(H({}, b2(y, b, S)), {}, { updateId: y.updateId + 1 }),
            R = H(H(H({}, _), C), T);
          return H(
            H(H({}, R), p(H({ props: d }, R), y)),
            {},
            {
              prevDataKey: m,
              prevData: b,
              prevWidth: g,
              prevHeight: O,
              prevLayout: S,
              prevStackOffset: j,
              prevMargin: k,
              prevChildren: x,
            },
          );
        }
        if (!xl(x, y.prevChildren)) {
          var N,
            z,
            W,
            U,
            B = Je(x, Cn),
            P =
              B &&
              (N =
                (z = B.props) === null || z === void 0
                  ? void 0
                  : z.startIndex) !== null &&
              N !== void 0
                ? N
                : A,
            L =
              B &&
              (W =
                (U = B.props) === null || U === void 0
                  ? void 0
                  : U.endIndex) !== null &&
              W !== void 0
                ? W
                : D,
            X = P !== A || L !== D,
            K = !ye(b),
            Y = K && !X ? y.updateId : y.updateId + 1;
          return H(
            H(
              { updateId: Y },
              p(
                H(
                  H({ props: d }, y),
                  {},
                  { updateId: Y, dataStartIndex: P, dataEndIndex: L },
                ),
                y,
              ),
            ),
            {},
            { prevChildren: x, dataStartIndex: P, dataEndIndex: L },
          );
        }
        return null;
      }),
      ie(h, "renderActiveDot", function (d, y, m) {
        var b;
        return (
          w.isValidElement(d)
            ? (b = w.cloneElement(d, y))
            : fe(d)
              ? (b = d(y))
              : (b = I.createElement(Mk, y)),
          I.createElement(Re, { className: "recharts-active-dot", key: m }, b)
        );
      });
    var v = w.forwardRef(function (d, y) {
      return I.createElement(h, Wn({}, d, { ref: y }));
    });
    return (v.displayName = h.displayName), v;
  },
  Kq = Xq({
    chartName: "BarChart",
    GraphicalChild: Gr,
    defaultTooltipEventType: "axis",
    validateTooltipEventTypes: ["axis", "item"],
    axisComponents: [
      { axisType: "xAxis", AxisComp: $c },
      { axisType: "yAxis", AxisComp: Wc },
    ],
    formatAxisMap: aH,
  }),
  Kc = "Collapsible",
  [Yq] = lt(Kc),
  [Zq, Oy] = Yq(Kc),
  O2 = w.forwardRef((e, t) => {
    const {
        __scopeCollapsible: r,
        open: n,
        defaultOpen: o,
        disabled: i,
        onOpenChange: a,
        ...c
      } = e,
      [u, s] = Lt({ prop: n, defaultProp: o ?? !1, onChange: a, caller: Kc });
    return E.jsx(Zq, {
      scope: r,
      disabled: i,
      contentId: pt(),
      open: u,
      onOpenToggle: w.useCallback(() => s((l) => !l), [s]),
      children: E.jsx(ce.div, {
        "data-state": jy(u),
        "data-disabled": i ? "" : void 0,
        ...c,
        ref: t,
      }),
    });
  });
O2.displayName = Kc;
var S2 = "CollapsibleTrigger",
  j2 = w.forwardRef((e, t) => {
    const { __scopeCollapsible: r, ...n } = e,
      o = Oy(S2, r);
    return E.jsx(ce.button, {
      type: "button",
      "aria-controls": o.contentId,
      "aria-expanded": o.open || !1,
      "data-state": jy(o.open),
      "data-disabled": o.disabled ? "" : void 0,
      disabled: o.disabled,
      ...n,
      ref: t,
      onClick: J(e.onClick, o.onOpenToggle),
    });
  });
j2.displayName = S2;
var Sy = "CollapsibleContent",
  k2 = w.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = Oy(Sy, e.__scopeCollapsible);
    return E.jsx(yt, {
      present: r || o.open,
      children: ({ present: i }) => E.jsx(Jq, { ...n, ref: t, present: i }),
    });
  });
k2.displayName = Sy;
var Jq = w.forwardRef((e, t) => {
  const { __scopeCollapsible: r, present: n, children: o, ...i } = e,
    a = Oy(Sy, r),
    [c, u] = w.useState(n),
    s = w.useRef(null),
    l = le(t, s),
    f = w.useRef(0),
    p = f.current,
    h = w.useRef(0),
    v = h.current,
    d = a.open || c,
    y = w.useRef(d),
    m = w.useRef(void 0);
  return (
    w.useEffect(() => {
      const b = requestAnimationFrame(() => (y.current = !1));
      return () => cancelAnimationFrame(b);
    }, []),
    Me(() => {
      const b = s.current;
      if (b) {
        (m.current = m.current || {
          transitionDuration: b.style.transitionDuration,
          animationName: b.style.animationName,
        }),
          (b.style.transitionDuration = "0s"),
          (b.style.animationName = "none");
        const x = b.getBoundingClientRect();
        (f.current = x.height),
          (h.current = x.width),
          y.current ||
            ((b.style.transitionDuration = m.current.transitionDuration),
            (b.style.animationName = m.current.animationName)),
          u(n);
      }
    }, [a.open, n]),
    E.jsx(ce.div, {
      "data-state": jy(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !d,
      ...i,
      ref: l,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...e.style,
      },
      children: d && o,
    })
  );
});
function jy(e) {
  return e ? "open" : "closed";
}
var Qq = O2,
  [Yc] = lt("Tooltip", [en]),
  Zc = en(),
  P2 = "TooltipProvider",
  eG = 700,
  ky = "tooltip.open",
  [tG, Py] = Yc(P2),
  E2 = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: r = eG,
        skipDelayDuration: n = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      a = w.useRef(!0),
      c = w.useRef(!1),
      u = w.useRef(0);
    return (
      w.useEffect(() => {
        const s = u.current;
        return () => window.clearTimeout(s);
      }, []),
      E.jsx(tG, {
        scope: t,
        isOpenDelayedRef: a,
        delayDuration: r,
        onOpen: w.useCallback(() => {
          window.clearTimeout(u.current), (a.current = !1);
        }, []),
        onClose: w.useCallback(() => {
          window.clearTimeout(u.current),
            (u.current = window.setTimeout(() => (a.current = !0), n));
        }, [n]),
        isPointerInTransitRef: c,
        onPointerInTransitChange: w.useCallback((s) => {
          c.current = s;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
E2.displayName = P2;
var hi = "Tooltip",
  [rG, yi] = Yc(hi),
  M2 = (e) => {
    const {
        __scopeTooltip: t,
        children: r,
        open: n,
        defaultOpen: o,
        onOpenChange: i,
        disableHoverableContent: a,
        delayDuration: c,
      } = e,
      u = Py(hi, e.__scopeTooltip),
      s = Zc(t),
      [l, f] = w.useState(null),
      p = pt(),
      h = w.useRef(0),
      v = a ?? u.disableHoverableContent,
      d = c ?? u.delayDuration,
      y = w.useRef(!1),
      [m, b] = Lt({
        prop: n,
        defaultProp: o ?? !1,
        onChange: (j) => {
          j
            ? (u.onOpen(), document.dispatchEvent(new CustomEvent(ky)))
            : u.onClose(),
            i == null || i(j);
        },
        caller: hi,
      }),
      x = w.useMemo(
        () => (m ? (y.current ? "delayed-open" : "instant-open") : "closed"),
        [m],
      ),
      g = w.useCallback(() => {
        window.clearTimeout(h.current),
          (h.current = 0),
          (y.current = !1),
          b(!0);
      }, [b]),
      O = w.useCallback(() => {
        window.clearTimeout(h.current), (h.current = 0), b(!1);
      }, [b]),
      S = w.useCallback(() => {
        window.clearTimeout(h.current),
          (h.current = window.setTimeout(() => {
            (y.current = !0), b(!0), (h.current = 0);
          }, d));
      }, [d, b]);
    return (
      w.useEffect(
        () => () => {
          h.current && (window.clearTimeout(h.current), (h.current = 0));
        },
        [],
      ),
      E.jsx(Eu, {
        ...s,
        children: E.jsx(rG, {
          scope: t,
          contentId: p,
          open: m,
          stateAttribute: x,
          trigger: l,
          onTriggerChange: f,
          onTriggerEnter: w.useCallback(() => {
            u.isOpenDelayedRef.current ? S() : g();
          }, [u.isOpenDelayedRef, S, g]),
          onTriggerLeave: w.useCallback(() => {
            v ? O() : (window.clearTimeout(h.current), (h.current = 0));
          }, [O, v]),
          onOpen: g,
          onClose: O,
          disableHoverableContent: v,
          children: r,
        }),
      })
    );
  };
M2.displayName = hi;
var Ey = "TooltipTrigger",
  _2 = w.forwardRef((e, t) => {
    const { __scopeTooltip: r, ...n } = e,
      o = yi(Ey, r),
      i = Py(Ey, r),
      a = Zc(r),
      c = w.useRef(null),
      u = le(t, c, o.onTriggerChange),
      s = w.useRef(!1),
      l = w.useRef(!1),
      f = w.useCallback(() => (s.current = !1), []);
    return (
      w.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f],
      ),
      E.jsx(Mu, {
        asChild: !0,
        ...a,
        children: E.jsx(ce.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...n,
          ref: u,
          onPointerMove: J(e.onPointerMove, (p) => {
            p.pointerType !== "touch" &&
              !l.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (l.current = !0));
          }),
          onPointerLeave: J(e.onPointerLeave, () => {
            o.onTriggerLeave(), (l.current = !1);
          }),
          onPointerDown: J(e.onPointerDown, () => {
            o.open && o.onClose(),
              (s.current = !0),
              document.addEventListener("pointerup", f, { once: !0 });
          }),
          onFocus: J(e.onFocus, () => {
            s.current || o.onOpen();
          }),
          onBlur: J(e.onBlur, o.onClose),
          onClick: J(e.onClick, o.onClose),
        }),
      })
    );
  });
_2.displayName = Ey;
var My = "TooltipPortal",
  [nG, oG] = Yc(My, { forceMount: void 0 }),
  A2 = (e) => {
    const { __scopeTooltip: t, forceMount: r, children: n, container: o } = e,
      i = yi(My, t);
    return E.jsx(nG, {
      scope: t,
      forceMount: r,
      children: E.jsx(yt, {
        present: r || i.open,
        children: E.jsx(no, { asChild: !0, container: o, children: n }),
      }),
    });
  };
A2.displayName = My;
var Gn = "TooltipContent",
  T2 = w.forwardRef((e, t) => {
    const r = oG(Gn, e.__scopeTooltip),
      { forceMount: n = r.forceMount, side: o = "top", ...i } = e,
      a = yi(Gn, e.__scopeTooltip);
    return E.jsx(yt, {
      present: n || a.open,
      children: a.disableHoverableContent
        ? E.jsx(C2, { side: o, ...i, ref: t })
        : E.jsx(iG, { side: o, ...i, ref: t }),
    });
  }),
  iG = w.forwardRef((e, t) => {
    const r = yi(Gn, e.__scopeTooltip),
      n = Py(Gn, e.__scopeTooltip),
      o = w.useRef(null),
      i = le(t, o),
      [a, c] = w.useState(null),
      { trigger: u, onClose: s } = r,
      l = o.current,
      { onPointerInTransitChange: f } = n,
      p = w.useCallback(() => {
        c(null), f(!1);
      }, [f]),
      h = w.useCallback(
        (v, d) => {
          const y = v.currentTarget,
            m = { x: v.clientX, y: v.clientY },
            b = lG(m, y.getBoundingClientRect()),
            x = fG(m, b),
            g = pG(d.getBoundingClientRect()),
            O = hG([...x, ...g]);
          c(O), f(!0);
        },
        [f],
      );
    return (
      w.useEffect(() => () => p(), [p]),
      w.useEffect(() => {
        if (u && l) {
          const v = (y) => h(y, l),
            d = (y) => h(y, u);
          return (
            u.addEventListener("pointerleave", v),
            l.addEventListener("pointerleave", d),
            () => {
              u.removeEventListener("pointerleave", v),
                l.removeEventListener("pointerleave", d);
            }
          );
        }
      }, [u, l, h, p]),
      w.useEffect(() => {
        if (a) {
          const v = (d) => {
            const y = d.target,
              m = { x: d.clientX, y: d.clientY },
              b =
                (u == null ? void 0 : u.contains(y)) ||
                (l == null ? void 0 : l.contains(y)),
              x = !dG(m, a);
            b ? p() : x && (p(), s());
          };
          return (
            document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
          );
        }
      }, [u, l, a, s, p]),
      E.jsx(C2, { ...e, ref: i })
    );
  }),
  [aG, cG] = Yc(hi, { isInside: !1 }),
  uG = qE("TooltipContent"),
  C2 = w.forwardRef((e, t) => {
    const {
        __scopeTooltip: r,
        children: n,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        ...c
      } = e,
      u = yi(Gn, r),
      s = Zc(r),
      { onClose: l } = u;
    return (
      w.useEffect(
        () => (
          document.addEventListener(ky, l),
          () => document.removeEventListener(ky, l)
        ),
        [l],
      ),
      w.useEffect(() => {
        if (u.trigger) {
          const f = (p) => {
            var h;
            (h = p.target) != null && h.contains(u.trigger) && l();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [u.trigger, l]),
      E.jsx(eo, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: l,
        children: E.jsxs(_u, {
          "data-state": u.stateAttribute,
          ...s,
          ...c,
          ref: t,
          style: {
            ...c.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            E.jsx(uG, { children: n }),
            E.jsx(aG, {
              scope: r,
              isInside: !0,
              children: E.jsx(cN, {
                id: u.contentId,
                role: "tooltip",
                children: o || n,
              }),
            }),
          ],
        }),
      })
    );
  });
T2.displayName = Gn;
var D2 = "TooltipArrow",
  sG = w.forwardRef((e, t) => {
    const { __scopeTooltip: r, ...n } = e,
      o = Zc(r);
    return cG(D2, r).isInside ? null : E.jsx(Au, { ...o, ...n, ref: t });
  });
sG.displayName = D2;
function lG(e, t) {
  const r = Math.abs(t.top - e.y),
    n = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(r, n, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function fG(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push({ x: e.x - r, y: e.y + r }, { x: e.x + r, y: e.y + r });
      break;
    case "bottom":
      n.push({ x: e.x - r, y: e.y - r }, { x: e.x + r, y: e.y - r });
      break;
    case "left":
      n.push({ x: e.x + r, y: e.y - r }, { x: e.x + r, y: e.y + r });
      break;
    case "right":
      n.push({ x: e.x - r, y: e.y - r }, { x: e.x - r, y: e.y + r });
      break;
  }
  return n;
}
function pG(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n },
  ];
}
function dG(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const c = t[i],
      u = t[a],
      s = c.x,
      l = c.y,
      f = u.x,
      p = u.y;
    l > n != p > n && r < ((f - s) * (n - l)) / (p - l) + s && (o = !o);
  }
  return o;
}
function hG(e) {
  const t = e.slice();
  return (
    t.sort((r, n) =>
      r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0,
    ),
    yG(t)
  );
}
function yG(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        a = t[t.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const o = e[n];
    for (; r.length >= 2; ) {
      const i = r[r.length - 1],
        a = r[r.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) r.pop();
      else break;
    }
    r.push(o);
  }
  return (
    r.pop(),
    t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y
      ? t
      : t.concat(r)
  );
}
var vG = E2,
  mG = M2,
  gG = _2,
  bG = A2,
  wG = T2;
export {
  wI as $,
  AC as A,
  UN as B,
  WC as C,
  oD as D,
  uD as E,
  wD as F,
  PD as G,
  AD as H,
  CD as I,
  IN as J,
  RN as K,
  FD as L,
  YD as M,
  LN as N,
  zN as O,
  DN as P,
  jC as Q,
  uI as R,
  gI as S,
  AN as T,
  CI as U,
  NN as V,
  BN as W,
  $N as X,
  _N as Y,
  TN as Z,
  YC as _,
  be as a,
  Fy as a$,
  rD as a0,
  lD as a1,
  hD as a2,
  pD as a3,
  BD as a4,
  oI as a5,
  oR as a6,
  iR as a7,
  aR as a8,
  cR as a9,
  aI as aA,
  _t as aB,
  Dr as aC,
  Qq as aD,
  j2 as aE,
  k2 as aF,
  tN as aG,
  eN as aH,
  rN as aI,
  iN as aJ,
  FI as aK,
  nN as aL,
  oN as aM,
  QI as aN,
  bG as aO,
  wG as aP,
  vG as aQ,
  mG as aR,
  gG as aS,
  eI as aT,
  TE as aU,
  GD as aV,
  CC as aW,
  gC as aX,
  OI as aY,
  wC as aZ,
  vi as a_,
  fR as aa,
  $I as ab,
  rI as ac,
  jD as ad,
  XD as ae,
  JC as af,
  OC as ag,
  BI as ah,
  vD as ai,
  aD as aj,
  AI as ak,
  hI as al,
  jI as am,
  OD as an,
  eD as ao,
  lI as ap,
  MI as aq,
  MC as ar,
  PI as as,
  GL as at,
  Kq as au,
  JP as av,
  $c as aw,
  Wc as ax,
  Gr as ay,
  JD as az,
  II as b,
  ME as b0,
  de as b1,
  eM as b2,
  tM as b3,
  oM as b4,
  hM as b5,
  yM as b6,
  vM as b7,
  lC as b8,
  fC as b9,
  tC as ba,
  rC as bb,
  iC as bc,
  aC as bd,
  uC as be,
  cC as bf,
  $C as bg,
  oC as bh,
  sC as bi,
  QT as bj,
  eC as bk,
  nC as bl,
  jv as bm,
  Xn as c,
  ID as d,
  WD as e,
  $D as f,
  N2 as g,
  vI as h,
  BC as i,
  E as j,
  IC as k,
  XC as l,
  GC as m,
  pI as n,
  RC as o,
  FC as p,
  MD as q,
  w as r,
  RI as s,
  RD as t,
  gD as u,
  I as v,
  LE as w,
  CN as x,
  PC as y,
  FN as z,
};
