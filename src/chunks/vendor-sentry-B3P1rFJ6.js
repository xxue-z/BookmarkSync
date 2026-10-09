import { r as wi } from "./vendor-ui-Piys8gOI.js";
(function () {
  try {
    var t =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    t.SENTRY_RELEASE = { id: "bookmarkhub-extension@dev" };
    var e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "57f5d6f3-1a56-48c4-811d-0a972908cc55"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-57f5d6f3-1a56-48c4-811d-0a972908cc55"));
  } catch {}
})();
const g = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  b = globalThis,
  Dt = "10.47.0";
function Mt() {
  return je(b), b;
}
function je(t) {
  const e = (t.__SENTRY__ = t.__SENTRY__ || {});
  return (e.version = e.version || Dt), (e[Dt] = e[Dt] || {});
}
function Yt(t, e, n = b) {
  const r = (n.__SENTRY__ = n.__SENTRY__ || {}),
    s = (r[Dt] = r[Dt] || {});
  return s[t] || (s[t] = e());
}
const Cr = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  Ti = "Sentry Logger ",
  qe = {};
function vt(t) {
  if (!("console" in b)) return t();
  const e = b.console,
    n = {},
    r = Object.keys(qe);
  r.forEach((s) => {
    const o = qe[s];
    (n[s] = e[s]), (e[s] = o);
  });
  try {
    return t();
  } finally {
    r.forEach((s) => {
      e[s] = n[s];
    });
  }
}
function xi() {
  Sn().enabled = !0;
}
function ki() {
  Sn().enabled = !1;
}
function Pr() {
  return Sn().enabled;
}
function Ii(...t) {
  bn("log", ...t);
}
function $i(...t) {
  bn("warn", ...t);
}
function Ci(...t) {
  bn("error", ...t);
}
function bn(t, ...e) {
  g &&
    Pr() &&
    vt(() => {
      b.console[t](`${Ti}[${t}]:`, ...e);
    });
}
function Sn() {
  return g ? Yt("loggerSettings", () => ({ enabled: !1 })) : { enabled: !1 };
}
const h = {
    enable: xi,
    disable: ki,
    isEnabled: Pr,
    log: Ii,
    warn: $i,
    error: Ci,
  },
  Or = 50,
  jt = "?",
  Ar = /\(error: (.*)\)/,
  Lr = /captureMessage|captureException/;
function Rr(...t) {
  const e = t.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
  return (n, r = 0, s = 0) => {
    const o = [],
      i = n.split(`
`);
    for (let a = r; a < i.length; a++) {
      let c = i[a];
      c.length > 1024 && (c = c.slice(0, 1024));
      const u = Ar.test(c) ? c.replace(Ar, "$1") : c;
      if (!u.match(/\S*Error: /)) {
        for (const d of e) {
          const p = d(u);
          if (p) {
            o.push(p);
            break;
          }
        }
        if (o.length >= Or + s) break;
      }
    }
    return Oi(o.slice(s));
  };
}
function Pi(t) {
  return Array.isArray(t) ? Rr(...t) : t;
}
function Oi(t) {
  if (!t.length) return [];
  const e = Array.from(t);
  return (
    /sentryWrapped/.test(Ue(e).function || "") && e.pop(),
    e.reverse(),
    Lr.test(Ue(e).function || "") &&
      (e.pop(), Lr.test(Ue(e).function || "") && e.pop()),
    e
      .slice(0, Or)
      .map((n) => ({
        ...n,
        filename: n.filename || Ue(e).filename,
        function: n.function || jt,
      }))
  );
}
function Ue(t) {
  return t[t.length - 1] || {};
}
const En = "<anonymous>";
function ut(t) {
  try {
    return !t || typeof t != "function" ? En : t.name || En;
  } catch {
    return En;
  }
}
function Nr(t) {
  const e = t.exception;
  if (e) {
    const n = [];
    try {
      return (
        e.values.forEach((r) => {
          r.stacktrace.frames && n.push(...r.stacktrace.frames);
        }),
        n
      );
    } catch {
      return;
    }
  }
}
function Dr(t) {
  return "__v_isVNode" in t && t.__v_isVNode ? "[VueVNode]" : "[VueViewModel]";
}
const Fe = {},
  Mr = {};
function bt(t, e) {
  (Fe[t] = Fe[t] || []), Fe[t].push(e);
}
function St(t, e) {
  if (!Mr[t]) {
    Mr[t] = !0;
    try {
      e();
    } catch (n) {
      g && h.error(`Error while instrumenting ${t}`, n);
    }
  }
}
function K(t, e) {
  const n = t && Fe[t];
  if (n)
    for (const r of n)
      try {
        r(e);
      } catch (s) {
        g &&
          h.error(
            `Error while triggering instrumentation handler.
Type: ${t}
Name: ${ut(r)}
Error:`,
            s,
          );
      }
}
let wn = null;
function jr(t) {
  const e = "error";
  bt(e, t), St(e, Ai);
}
function Ai() {
  (wn = b.onerror),
    (b.onerror = function (t, e, n, r, s) {
      return (
        K("error", { column: r, error: s, line: n, msg: t, url: e }),
        wn ? wn.apply(this, arguments) : !1
      );
    }),
    (b.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
let Tn = null;
function qr(t) {
  const e = "unhandledrejection";
  bt(e, t), St(e, Li);
}
function Li() {
  (Tn = b.onunhandledrejection),
    (b.onunhandledrejection = function (t) {
      return K("unhandledrejection", t), Tn ? Tn.apply(this, arguments) : !0;
    }),
    (b.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
const Ur = Object.prototype.toString;
function Be(t) {
  switch (Ur.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return dt(t, Error);
  }
}
function Vt(t, e) {
  return Ur.call(t) === `[object ${e}]`;
}
function Fr(t) {
  return Vt(t, "ErrorEvent");
}
function Br(t) {
  return Vt(t, "DOMError");
}
function Ri(t) {
  return Vt(t, "DOMException");
}
function pt(t) {
  return Vt(t, "String");
}
function He(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    "__sentry_template_string__" in t &&
    "__sentry_template_values__" in t
  );
}
function qt(t) {
  return (
    t === null || He(t) || (typeof t != "object" && typeof t != "function")
  );
}
function fe(t) {
  return Vt(t, "Object");
}
function ze(t) {
  return typeof Event < "u" && dt(t, Event);
}
function Ni(t) {
  return typeof Element < "u" && dt(t, Element);
}
function Di(t) {
  return Vt(t, "RegExp");
}
function he(t) {
  return !!(t != null && t.then && typeof t.then == "function");
}
function Mi(t) {
  return (
    fe(t) &&
    "nativeEvent" in t &&
    "preventDefault" in t &&
    "stopPropagation" in t
  );
}
function dt(t, e) {
  try {
    return t instanceof e;
  } catch {
    return !1;
  }
}
function Hr(t) {
  return !!(
    typeof t == "object" &&
    t !== null &&
    (t.__isVue || t._isVue || t.__v_isVNode)
  );
}
function xn(t) {
  return typeof Request < "u" && dt(t, Request);
}
const kn = b,
  ji = 80;
function X(t, e = {}) {
  if (!t) return "<unknown>";
  try {
    let n = t;
    const r = 5,
      s = [];
    let o = 0,
      i = 0;
    const a = " > ",
      c = a.length;
    let u;
    const d = Array.isArray(e) ? e : e.keyAttrs,
      p = (!Array.isArray(e) && e.maxStringLength) || ji;
    for (
      ;
      n &&
      o++ < r &&
      ((u = qi(n, d)),
      !(u === "html" || (o > 1 && i + s.length * c + u.length >= p)));

    )
      s.push(u), (i += u.length), (n = n.parentNode);
    return s.reverse().join(a);
  } catch {
    return "<unknown>";
  }
}
function qi(t, e) {
  const n = t,
    r = [];
  if (!(n != null && n.tagName)) return "";
  if (kn.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement;
  }
  r.push(n.tagName.toLowerCase());
  const s =
    e != null && e.length
      ? e.filter((o) => n.getAttribute(o)).map((o) => [o, n.getAttribute(o)])
      : null;
  if (s != null && s.length)
    s.forEach((o) => {
      r.push(`[${o[0]}="${o[1]}"]`);
    });
  else {
    n.id && r.push(`#${n.id}`);
    const o = n.className;
    if (o && pt(o)) {
      const i = o.split(/\s+/);
      for (const a of i) r.push(`.${a}`);
    }
  }
  for (const o of ["aria-label", "type", "name", "title", "alt"]) {
    const i = n.getAttribute(o);
    i && r.push(`[${o}="${i}"]`);
  }
  return r.join("");
}
function me() {
  try {
    return kn.document.location.href;
  } catch {
    return "";
  }
}
function zr(t) {
  if (!kn.HTMLElement) return null;
  let e = t;
  const n = 5;
  for (let r = 0; r < n; r++) {
    if (!e) return null;
    if (e instanceof HTMLElement) {
      if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
      if (e.dataset.sentryElement) return e.dataset.sentryElement;
    }
    e = e.parentNode;
  }
  return null;
}
function W(t, e, n) {
  if (!(e in t)) return;
  const r = t[e];
  if (typeof r != "function") return;
  const s = n(r);
  typeof s == "function" && Wr(s, r);
  try {
    t[e] = s;
  } catch {
    g && h.log(`Failed to replace method "${e}" in object`, t);
  }
}
function U(t, e, n) {
  try {
    Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
  } catch {
    g && h.log(`Failed to add non-enumerable property "${e}" to object`, t);
  }
}
function Wr(t, e) {
  try {
    const n = e.prototype || {};
    (t.prototype = e.prototype = n), U(t, "__sentry_original__", e);
  } catch {}
}
function In(t) {
  return t.__sentry_original__;
}
function Jr(t) {
  if (Be(t))
    return { message: t.message, name: t.name, stack: t.stack, ...Yr(t) };
  if (ze(t)) {
    const e = {
      type: t.type,
      target: Gr(t.target),
      currentTarget: Gr(t.currentTarget),
      ...Yr(t),
    };
    return (
      typeof CustomEvent < "u" && dt(t, CustomEvent) && (e.detail = t.detail), e
    );
  } else return t;
}
function Gr(t) {
  try {
    return Ni(t) ? X(t) : Object.prototype.toString.call(t);
  } catch {
    return "<unknown>";
  }
}
function Yr(t) {
  return typeof t == "object" && t !== null
    ? Object.fromEntries(Object.entries(t))
    : {};
}
function Ui(t) {
  const e = Object.keys(Jr(t));
  return e.sort(), e[0] ? e.join(", ") : "[object has no keys]";
}
let Kt;
function ge(t) {
  if (Kt !== void 0) return Kt ? Kt(t) : t();
  const e = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    n = b;
  return e in n && typeof n[e] == "function"
    ? ((Kt = n[e]), Kt(t))
    : ((Kt = null), t());
}
function Et() {
  return ge(() => Math.random());
}
function _e() {
  return ge(() => Date.now());
}
function $n(t, e = 0) {
  return typeof t != "string" || e === 0 || t.length <= e
    ? t
    : `${t.slice(0, e)}...`;
}
function Vr(t, e) {
  if (!Array.isArray(t)) return "";
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    try {
      Hr(s) ? n.push(Dr(s)) : n.push(String(s));
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(e);
}
function We(t, e, n = !1) {
  return pt(t)
    ? Di(e)
      ? e.test(t)
      : pt(e)
        ? n
          ? t === e
          : t.includes(e)
        : !1
    : !1;
}
function wt(t, e = [], n = !1) {
  return e.some((r) => We(t, r, n));
}
function Fi() {
  const t = b;
  return t.crypto || t.msCrypto;
}
let Cn;
function Bi() {
  return Et() * 16;
}
function Z(t = Fi()) {
  try {
    if (t != null && t.randomUUID)
      return ge(() => t.randomUUID()).replace(/-/g, "");
  } catch {}
  return (
    Cn || (Cn = "10000000100040008000" + 1e11),
    Cn.replace(/[018]/g, (e) => (e ^ ((Bi() & 15) >> (e / 4))).toString(16))
  );
}
function Kr(t) {
  var e, n;
  return (n = (e = t.exception) == null ? void 0 : e.values) == null
    ? void 0
    : n[0];
}
function Ut(t) {
  const { message: e, event_id: n } = t;
  if (e) return e;
  const r = Kr(t);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || "<unknown>"
    : n || "<unknown>";
}
function Pn(t, e, n) {
  const r = (t.exception = t.exception || {}),
    s = (r.values = r.values || []),
    o = (s[0] = s[0] || {});
  o.value || (o.value = e || ""), o.type || (o.type = "Error");
}
function Xt(t, e) {
  const n = Kr(t);
  if (!n) return;
  const r = { type: "generic", handled: !0 },
    s = n.mechanism;
  if (((n.mechanism = { ...r, ...s, ...e }), e && "data" in e)) {
    const o = { ...(s == null ? void 0 : s.data), ...e.data };
    n.mechanism.data = o;
  }
}
function Xr(t) {
  if (Hi(t)) return !0;
  try {
    U(t, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function Hi(t) {
  try {
    return t.__sentry_captured__;
  } catch {}
}
const Zr = 1e3;
function Ft() {
  return _e() / Zr;
}
function zi() {
  const { performance: t } = b;
  if (!(t != null && t.now) || !t.timeOrigin) return Ft;
  const e = t.timeOrigin;
  return () => (e + ge(() => t.now())) / Zr;
}
let Qr;
function R() {
  return (Qr ?? (Qr = zi()))();
}
let On = null;
function Wi() {
  var i;
  const { performance: t } = b;
  if (!(t != null && t.now)) return;
  const e = 3e5,
    n = ge(() => t.now()),
    r = _e(),
    s = t.timeOrigin;
  if (typeof s == "number" && Math.abs(s + n - r) < e) return s;
  const o = (i = t.timing) == null ? void 0 : i.navigationStart;
  return typeof o == "number" && Math.abs(o + n - r) < e ? o : r - n;
}
function Q() {
  return On === null && (On = Wi()), On;
}
function Ji(t) {
  const e = R(),
    n = {
      sid: Z(),
      init: !0,
      timestamp: e,
      started: e,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => Yi(n),
    };
  return t && Zt(n, t), n;
}
function Zt(t, e = {}) {
  if (
    (e.user &&
      (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
      !t.did &&
        !e.did &&
        (t.did = e.user.id || e.user.email || e.user.username)),
    (t.timestamp = e.timestamp || R()),
    e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
    e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
    e.sid && (t.sid = e.sid.length === 32 ? e.sid : Z()),
    e.init !== void 0 && (t.init = e.init),
    !t.did && e.did && (t.did = `${e.did}`),
    typeof e.started == "number" && (t.started = e.started),
    t.ignoreDuration)
  )
    t.duration = void 0;
  else if (typeof e.duration == "number") t.duration = e.duration;
  else {
    const n = t.timestamp - t.started;
    t.duration = n >= 0 ? n : 0;
  }
  e.release && (t.release = e.release),
    e.environment && (t.environment = e.environment),
    !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
    !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
    typeof e.errors == "number" && (t.errors = e.errors),
    e.status && (t.status = e.status);
}
function Gi(t, e) {
  let n = {};
  t.status === "ok" && (n = { status: "exited" }), Zt(t, n);
}
function Yi(t) {
  return {
    sid: `${t.sid}`,
    init: t.init,
    started: new Date(t.started * 1e3).toISOString(),
    timestamp: new Date(t.timestamp * 1e3).toISOString(),
    status: t.status,
    errors: t.errors,
    did:
      typeof t.did == "number" || typeof t.did == "string"
        ? `${t.did}`
        : void 0,
    duration: t.duration,
    abnormal_mechanism: t.abnormal_mechanism,
    attrs: {
      release: t.release,
      environment: t.environment,
      ip_address: t.ipAddress,
      user_agent: t.userAgent,
    },
  };
}
function ye(t, e, n = 2) {
  if (!e || typeof e != "object" || n <= 0) return e;
  if (t && Object.keys(e).length === 0) return t;
  const r = { ...t };
  for (const s in e)
    Object.prototype.hasOwnProperty.call(e, s) &&
      (r[s] = ye(r[s], e[s], n - 1));
  return r;
}
function lt() {
  return Z();
}
function ft() {
  return Z().substring(16);
}
const An = "_sentrySpan";
function ve(t, e) {
  e ? U(t, An, e) : delete t[An];
}
function be(t) {
  return t[An];
}
const Vi = 100;
class _t {
  constructor() {
    (this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._attributes = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = { traceId: lt(), sampleRand: Et() });
  }
  clone() {
    const e = new _t();
    return (
      (e._breadcrumbs = [...this._breadcrumbs]),
      (e._tags = { ...this._tags }),
      (e._attributes = { ...this._attributes }),
      (e._extra = { ...this._extra }),
      (e._contexts = { ...this._contexts }),
      this._contexts.flags &&
        (e._contexts.flags = { values: [...this._contexts.flags.values] }),
      (e._user = this._user),
      (e._level = this._level),
      (e._session = this._session),
      (e._transactionName = this._transactionName),
      (e._fingerprint = this._fingerprint),
      (e._eventProcessors = [...this._eventProcessors]),
      (e._attachments = [...this._attachments]),
      (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
      (e._propagationContext = { ...this._propagationContext }),
      (e._client = this._client),
      (e._lastEventId = this._lastEventId),
      (e._conversationId = this._conversationId),
      ve(e, be(this)),
      e
    );
  }
  setClient(e) {
    this._client = e;
  }
  setLastEventId(e) {
    this._lastEventId = e;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(e) {
    this._scopeListeners.push(e);
  }
  addEventProcessor(e) {
    return this._eventProcessors.push(e), this;
  }
  setUser(e) {
    return (
      (this._user = e || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        username: void 0,
      }),
      this._session && Zt(this._session, { user: e }),
      this._notifyScopeListeners(),
      this
    );
  }
  getUser() {
    return this._user;
  }
  setConversationId(e) {
    return (
      (this._conversationId = e || void 0), this._notifyScopeListeners(), this
    );
  }
  setTags(e) {
    return (
      (this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this
    );
  }
  setTag(e, n) {
    return this.setTags({ [e]: n });
  }
  setAttributes(e) {
    return (
      (this._attributes = { ...this._attributes, ...e }),
      this._notifyScopeListeners(),
      this
    );
  }
  setAttribute(e, n) {
    return this.setAttributes({ [e]: n });
  }
  removeAttribute(e) {
    return (
      e in this._attributes &&
        (delete this._attributes[e], this._notifyScopeListeners()),
      this
    );
  }
  setExtras(e) {
    return (
      (this._extra = { ...this._extra, ...e }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtra(e, n) {
    return (
      (this._extra = { ...this._extra, [e]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setFingerprint(e) {
    return (this._fingerprint = e), this._notifyScopeListeners(), this;
  }
  setLevel(e) {
    return (this._level = e), this._notifyScopeListeners(), this;
  }
  setTransactionName(e) {
    return (this._transactionName = e), this._notifyScopeListeners(), this;
  }
  setContext(e, n) {
    return (
      n === null ? delete this._contexts[e] : (this._contexts[e] = n),
      this._notifyScopeListeners(),
      this
    );
  }
  setSession(e) {
    return (
      e ? (this._session = e) : delete this._session,
      this._notifyScopeListeners(),
      this
    );
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) return this;
    const n = typeof e == "function" ? e(this) : e,
      r = n instanceof _t ? n.getScopeData() : fe(n) ? e : void 0,
      {
        tags: s,
        attributes: o,
        extra: i,
        user: a,
        contexts: c,
        level: u,
        fingerprint: d = [],
        propagationContext: p,
        conversationId: l,
      } = r || {};
    return (
      (this._tags = { ...this._tags, ...s }),
      (this._attributes = { ...this._attributes, ...o }),
      (this._extra = { ...this._extra, ...i }),
      (this._contexts = { ...this._contexts, ...c }),
      a && Object.keys(a).length && (this._user = a),
      u && (this._level = u),
      d.length && (this._fingerprint = d),
      p && (this._propagationContext = p),
      l && (this._conversationId = l),
      this
    );
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._attributes = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._session = void 0),
      (this._conversationId = void 0),
      ve(this, void 0),
      (this._attachments = []),
      this.setPropagationContext({ traceId: lt(), sampleRand: Et() }),
      this._notifyScopeListeners(),
      this
    );
  }
  addBreadcrumb(e, n) {
    var o;
    const r = typeof n == "number" ? n : Vi;
    if (r <= 0) return this;
    const s = {
      timestamp: Ft(),
      ...e,
      message: e.message ? $n(e.message, 2048) : e.message,
    };
    return (
      this._breadcrumbs.push(s),
      this._breadcrumbs.length > r &&
        ((this._breadcrumbs = this._breadcrumbs.slice(-r)),
        (o = this._client) == null ||
          o.recordDroppedEvent("buffer_overflow", "log_item")),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
  }
  addAttachment(e) {
    return this._attachments.push(e), this;
  }
  clearAttachments() {
    return (this._attachments = []), this;
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      attributes: this._attributes,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: be(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(e) {
    return (
      (this._sdkProcessingMetadata = ye(this._sdkProcessingMetadata, e, 2)),
      this
    );
  }
  setPropagationContext(e) {
    return (this._propagationContext = e), this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e, n) {
    const r = (n == null ? void 0 : n.event_id) || Z();
    if (!this._client)
      return (
        g &&
          h.warn("No client configured on scope - will not capture exception!"),
        r
      );
    const s = new Error("Sentry syntheticException");
    return (
      this._client.captureException(
        e,
        { originalException: e, syntheticException: s, ...n, event_id: r },
        this,
      ),
      r
    );
  }
  captureMessage(e, n, r) {
    const s = (r == null ? void 0 : r.event_id) || Z();
    if (!this._client)
      return (
        g &&
          h.warn("No client configured on scope - will not capture message!"),
        s
      );
    const o = (r == null ? void 0 : r.syntheticException) ?? new Error(e);
    return (
      this._client.captureMessage(
        e,
        n,
        { originalException: e, syntheticException: o, ...r, event_id: s },
        this,
      ),
      s
    );
  }
  captureEvent(e, n) {
    const r = e.event_id || (n == null ? void 0 : n.event_id) || Z();
    return this._client
      ? (this._client.captureEvent(e, { ...n, event_id: r }, this), r)
      : (g && h.warn("No client configured on scope - will not capture event!"),
        r);
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((e) => {
        e(this);
      }),
      (this._notifyingListeners = !1));
  }
}
function Ki() {
  return Yt("defaultCurrentScope", () => new _t());
}
function Xi() {
  return Yt("defaultIsolationScope", () => new _t());
}
const ts = (t) => t instanceof Promise && !t[es],
  es = Symbol("chained PromiseLike"),
  Zi = (t, e, n) => {
    const r = t.then(
      (s) => (e(s), s),
      (s) => {
        throw (n(s), s);
      },
    );
    return ts(r) && ts(t) ? r : Qi(t, r);
  },
  Qi = (t, e) => {
    let n = !1;
    for (const r in t) {
      if (r in e) continue;
      n = !0;
      const s = t[r];
      typeof s == "function"
        ? Object.defineProperty(e, r, {
            value: (...o) => s.apply(t, o),
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[r] = s);
    }
    return n && Object.assign(e, { [es]: !0 }), e;
  };
class ta {
  constructor(e, n) {
    let r;
    e ? (r = e) : (r = new _t());
    let s;
    n ? (s = n) : (s = new _t()),
      (this._stack = [{ scope: r }]),
      (this._isolationScope = s);
  }
  withScope(e) {
    const n = this._pushScope();
    let r;
    try {
      r = e(n);
    } catch (s) {
      throw (this._popScope(), s);
    }
    return he(r)
      ? Zi(
          r,
          () => this._popScope(),
          () => this._popScope(),
        )
      : (this._popScope(), r);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const e = this.getScope().clone();
    return this._stack.push({ client: this.getClient(), scope: e }), e;
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop();
  }
}
function Qt() {
  const t = Mt(),
    e = je(t);
  return (e.stack = e.stack || new ta(Ki(), Xi()));
}
function ea(t) {
  return Qt().withScope(t);
}
function na(t, e) {
  const n = Qt();
  return n.withScope(() => ((n.getStackTop().scope = t), e(t)));
}
function ns(t) {
  return Qt().withScope(() => t(Qt().getIsolationScope()));
}
function ra() {
  return {
    withIsolationScope: ns,
    withScope: ea,
    withSetScope: na,
    withSetIsolationScope: (t, e) => ns(e),
    getCurrentScope: () => Qt().getScope(),
    getIsolationScope: () => Qt().getIsolationScope(),
  };
}
function te(t) {
  const e = je(t);
  return e.acs ? e.acs : ra();
}
function k() {
  const t = Mt();
  return te(t).getCurrentScope();
}
function et() {
  const t = Mt();
  return te(t).getIsolationScope();
}
function sa() {
  return Yt("globalScope", () => new _t());
}
function Je(...t) {
  const e = Mt(),
    n = te(e);
  if (t.length === 2) {
    const [r, s] = t;
    return r ? n.withSetScope(r, s) : n.withScope(s);
  }
  return n.withScope(t[0]);
}
function w() {
  return k().getClient();
}
function rs(t) {
  const e = t.getPropagationContext(),
    { traceId: n, parentSpanId: r, propagationSpanId: s } = e,
    o = { trace_id: n, span_id: s || ft() };
  return r && (o.parent_span_id = r), o;
}
const ht = "sentry.source",
  Ln = "sentry.sample_rate",
  ss = "sentry.previous_trace_sample_rate",
  Tt = "sentry.op",
  A = "sentry.origin",
  Se = "sentry.idle_span_finish_reason",
  Ee = "sentry.measurement_unit",
  we = "sentry.measurement_value",
  os = "sentry.custom_span_name",
  Rn = "sentry.profile_id",
  ee = "sentry.exclusive_time",
  oa = "sentry.link.type",
  ia = "gen_ai.conversation.id",
  aa = 0,
  Nn = 1,
  N = 2;
function ca(t) {
  if (t < 400 && t >= 100) return { code: Nn };
  if (t >= 400 && t < 500)
    switch (t) {
      case 401:
        return { code: N, message: "unauthenticated" };
      case 403:
        return { code: N, message: "permission_denied" };
      case 404:
        return { code: N, message: "not_found" };
      case 409:
        return { code: N, message: "already_exists" };
      case 413:
        return { code: N, message: "failed_precondition" };
      case 429:
        return { code: N, message: "resource_exhausted" };
      case 499:
        return { code: N, message: "cancelled" };
      default:
        return { code: N, message: "invalid_argument" };
    }
  if (t >= 500 && t < 600)
    switch (t) {
      case 501:
        return { code: N, message: "unimplemented" };
      case 503:
        return { code: N, message: "unavailable" };
      case 504:
        return { code: N, message: "deadline_exceeded" };
      default:
        return { code: N, message: "internal_error" };
    }
  return { code: N, message: "internal_error" };
}
function is(t, e) {
  t.setAttribute("http.response.status_code", e);
  const n = ca(e);
  n.message !== "unknown_error" && t.setStatus(n);
}
const as = "_sentryScope",
  cs = "_sentryIsolationScope";
function ua(t) {
  try {
    const e = b.WeakRef;
    if (typeof e == "function") return new e(t);
  } catch {}
  return t;
}
function pa(t) {
  if (t) {
    if (typeof t == "object" && "deref" in t && typeof t.deref == "function")
      try {
        return t.deref();
      } catch {
        return;
      }
    return t;
  }
}
function da(t, e, n) {
  t && (U(t, cs, ua(n)), U(t, as, e));
}
function Ge(t) {
  const e = t;
  return { scope: e[as], isolationScope: pa(e[cs]) };
}
const Ye = "sentry-",
  la = 8192;
function us(t) {
  const e = ha(t);
  if (!e) return;
  const n = Object.entries(e).reduce((r, [s, o]) => {
    if (s.startsWith(Ye)) {
      const i = s.slice(Ye.length);
      r[i] = o;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function fa(t) {
  if (!t) return;
  const e = Object.entries(t).reduce(
    (n, [r, s]) => (s && (n[`${Ye}${r}`] = s), n),
    {},
  );
  return ma(e);
}
function ha(t) {
  if (!(!t || (!pt(t) && !Array.isArray(t))))
    return Array.isArray(t)
      ? t.reduce((e, n) => {
          const r = ps(n);
          return (
            Object.entries(r).forEach(([s, o]) => {
              e[s] = o;
            }),
            e
          );
        }, {})
      : ps(t);
}
function ps(t) {
  return t
    .split(",")
    .map((e) => {
      const n = e.indexOf("=");
      if (n === -1) return [];
      const r = e.slice(0, n),
        s = e.slice(n + 1);
      return [r, s].map((o) => {
        try {
          return decodeURIComponent(o.trim());
        } catch {
          return;
        }
      });
    })
    .reduce((e, [n, r]) => (n && r && (e[n] = r), e), {});
}
function ma(t) {
  if (Object.keys(t).length !== 0)
    return Object.entries(t).reduce((e, [n, r], s) => {
      const o = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
        i = s === 0 ? o : `${e},${o}`;
      return i.length > la
        ? (g &&
            h.warn(
              `Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`,
            ),
          e)
        : i;
    }, "");
}
const ga = /^o(\d+)\./,
  _a =
    /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
function ya(t) {
  return t === "http" || t === "https";
}
function ne(t, e = !1) {
  const {
    host: n,
    path: r,
    pass: s,
    port: o,
    projectId: i,
    protocol: a,
    publicKey: c,
  } = t;
  return `${a}://${c}${e && s ? `:${s}` : ""}@${n}${o ? `:${o}` : ""}/${r && `${r}/`}${i}`;
}
function va(t) {
  const e = _a.exec(t);
  if (!e) {
    vt(() => {
      console.error(`Invalid Sentry Dsn: ${t}`);
    });
    return;
  }
  const [n, r, s = "", o = "", i = "", a = ""] = e.slice(1);
  let c = "",
    u = a;
  const d = u.split("/");
  if ((d.length > 1 && ((c = d.slice(0, -1).join("/")), (u = d.pop())), u)) {
    const p = u.match(/^\d+/);
    p && (u = p[0]);
  }
  return ds({
    host: o,
    pass: s,
    path: c,
    projectId: u,
    port: i,
    protocol: n,
    publicKey: r,
  });
}
function ds(t) {
  return {
    protocol: t.protocol,
    publicKey: t.publicKey || "",
    pass: t.pass || "",
    host: t.host,
    port: t.port || "",
    path: t.path || "",
    projectId: t.projectId,
  };
}
function ba(t) {
  if (!g) return !0;
  const { port: e, projectId: n, protocol: r } = t;
  return ["protocol", "publicKey", "host", "projectId"].find((s) =>
    t[s] ? !1 : (h.error(`Invalid Sentry Dsn: ${s} missing`), !0),
  )
    ? !1
    : n.match(/^\d+$/)
      ? ya(r)
        ? e && isNaN(parseInt(e, 10))
          ? (h.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1)
          : !0
        : (h.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
      : (h.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function Sa(t) {
  var e;
  return (e = t.match(ga)) == null ? void 0 : e[1];
}
function Ea(t) {
  const e = t.getOptions(),
    { host: n } = t.getDsn() || {};
  let r;
  return e.orgId ? (r = String(e.orgId)) : n && (r = Sa(n)), r;
}
function wa(t) {
  const e = typeof t == "string" ? va(t) : ds(t);
  if (!(!e || !ba(e))) return e;
}
function Te(t) {
  if (typeof t == "boolean") return Number(t);
  const e = typeof t == "string" ? parseFloat(t) : t;
  if (!(typeof e != "number" || isNaN(e) || e < 0 || e > 1)) return e;
}
const ls = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$",
);
function Ta(t) {
  if (!t) return;
  const e = t.match(ls);
  if (!e) return;
  let n;
  return (
    e[3] === "1" ? (n = !0) : e[3] === "0" && (n = !1),
    { traceId: e[1], parentSampled: n, parentSpanId: e[2] }
  );
}
function xa(t, e) {
  const n = Ta(t),
    r = us(e);
  if (!(n != null && n.traceId)) return { traceId: lt(), sampleRand: Et() };
  const s = ka(n, r);
  r && (r.sample_rand = s.toString());
  const { traceId: o, parentSpanId: i, parentSampled: a } = n;
  return {
    traceId: o,
    parentSpanId: i,
    sampled: a,
    dsc: r || {},
    sampleRand: s,
  };
}
function fs(t = lt(), e = ft(), n) {
  let r = "";
  return n !== void 0 && (r = n ? "-1" : "-0"), `${t}-${e}${r}`;
}
function hs(t = lt(), e = ft(), n) {
  return `00-${t}-${e}-${n ? "01" : "00"}`;
}
function ka(t, e) {
  const n = Te(e == null ? void 0 : e.sample_rand);
  if (n !== void 0) return n;
  const r = Te(e == null ? void 0 : e.sample_rate);
  return r && (t == null ? void 0 : t.parentSampled) !== void 0
    ? t.parentSampled
      ? Et() * r
      : r + Et() * (1 - r)
    : Et();
}
const ms = 0,
  Dn = 1;
let gs = !1;
function Ia(t) {
  const { spanId: e, traceId: n } = t.spanContext(),
    {
      data: r,
      op: s,
      parent_span_id: o,
      status: i,
      origin: a,
      links: c,
    } = T(t);
  return {
    parent_span_id: o,
    span_id: e,
    trace_id: n,
    data: r,
    op: s,
    status: i,
    origin: a,
    links: c,
  };
}
function _s(t) {
  const { spanId: e, traceId: n, isRemote: r } = t.spanContext(),
    s = r ? e : T(t).parent_span_id,
    o = Ge(t).scope,
    i = r
      ? (o == null ? void 0 : o.getPropagationContext().propagationSpanId) ||
        ft()
      : e;
  return { parent_span_id: s, span_id: i, trace_id: n };
}
function $a(t) {
  const { traceId: e, spanId: n } = t.spanContext(),
    r = xt(t);
  return fs(e, n, r);
}
function Ca(t) {
  const { traceId: e, spanId: n } = t.spanContext(),
    r = xt(t);
  return hs(e, n, r);
}
function ys(t) {
  if (t && t.length > 0)
    return t.map(
      ({
        context: { spanId: e, traceId: n, traceFlags: r, ...s },
        attributes: o,
      }) => ({
        span_id: e,
        trace_id: n,
        sampled: r === Dn,
        attributes: o,
        ...s,
      }),
    );
}
function Bt(t) {
  return typeof t == "number"
    ? vs(t)
    : Array.isArray(t)
      ? t[0] + t[1] / 1e9
      : t instanceof Date
        ? vs(t.getTime())
        : R();
}
function vs(t) {
  return t > 9999999999 ? t / 1e3 : t;
}
function T(t) {
  var r;
  if (Oa(t)) return t.getSpanJSON();
  const { spanId: e, traceId: n } = t.spanContext();
  if (Pa(t)) {
    const {
        attributes: s,
        startTime: o,
        name: i,
        endTime: a,
        status: c,
        links: u,
      } = t,
      d =
        "parentSpanId" in t
          ? t.parentSpanId
          : "parentSpanContext" in t
            ? (r = t.parentSpanContext) == null
              ? void 0
              : r.spanId
            : void 0;
    return {
      span_id: e,
      trace_id: n,
      data: s,
      description: i,
      parent_span_id: d,
      start_timestamp: Bt(o),
      timestamp: Bt(a) || void 0,
      status: bs(c),
      op: s[Tt],
      origin: s[A],
      links: ys(u),
    };
  }
  return { span_id: e, trace_id: n, start_timestamp: 0, data: {} };
}
function Pa(t) {
  const e = t;
  return (
    !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
  );
}
function Oa(t) {
  return typeof t.getSpanJSON == "function";
}
function xt(t) {
  const { traceFlags: e } = t.spanContext();
  return e === Dn;
}
function bs(t) {
  if (!(!t || t.code === aa))
    return t.code === Nn ? "ok" : t.message || "internal_error";
}
const Ht = "_sentryChildSpans",
  Mn = "_sentryRootSpan";
function Ss(t, e) {
  const n = t[Mn] || t;
  U(e, Mn, n), t[Ht] ? t[Ht].add(e) : U(t, Ht, new Set([e]));
}
function Aa(t, e) {
  t[Ht] && t[Ht].delete(e);
}
function Ve(t) {
  const e = new Set();
  function n(r) {
    if (!e.has(r) && xt(r)) {
      e.add(r);
      const s = r[Ht] ? Array.from(r[Ht]) : [];
      for (const o of s) n(o);
    }
  }
  return n(t), Array.from(e);
}
function F(t) {
  return t[Mn] || t;
}
function J() {
  const t = Mt(),
    e = te(t);
  return e.getActiveSpan ? e.getActiveSpan() : be(k());
}
function jn() {
  gs ||
    (vt(() => {
      console.warn(
        "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.",
      );
    }),
    (gs = !0));
}
let Es = !1;
function La() {
  if (Es) return;
  function t() {
    const e = J(),
      n = e && F(e);
    if (n) {
      const r = "internal_error";
      g && h.log(`[Tracing] Root span: ${r} -> Global error occurred`),
        n.setStatus({ code: N, message: r });
    }
  }
  (t.tag = "sentry_tracingErrorCallback"), (Es = !0), jr(t), qr(t);
}
function nt(t) {
  var n;
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const e = t || ((n = w()) == null ? void 0 : n.getOptions());
  return !!e && (e.tracesSampleRate != null || !!e.tracesSampler);
}
function ws(t) {
  h.log(
    `Ignoring span ${t.op} - ${t.description} because it matches \`ignoreSpans\`.`,
  );
}
function Ke(t, e) {
  if (!(e != null && e.length) || !t.description) return !1;
  for (const n of e) {
    if (Na(n)) {
      if (We(t.description, n)) return g && ws(t), !0;
      continue;
    }
    if (!n.name && !n.op) continue;
    const r = n.name ? We(t.description, n.name) : !0,
      s = n.op ? t.op && We(t.op, n.op) : !0;
    if (r && s) return g && ws(t), !0;
  }
  return !1;
}
function Ra(t, e) {
  const n = e.parent_span_id,
    r = e.span_id;
  if (n) for (const s of t) s.parent_span_id === r && (s.parent_span_id = n);
}
function Na(t) {
  return typeof t == "string" || t instanceof RegExp;
}
const qn = "production",
  Ts = "_frozenDsc";
function Xe(t, e) {
  U(t, Ts, e);
}
function xs(t, e) {
  const n = e.getOptions(),
    { publicKey: r } = e.getDsn() || {},
    s = {
      environment: n.environment || qn,
      release: n.release,
      public_key: r,
      trace_id: t,
      org_id: Ea(e),
    };
  return e.emit("createDsc", s), s;
}
function Un(t, e) {
  const n = e.getPropagationContext();
  return n.dsc || xs(n.traceId, t);
}
function mt(t) {
  var m;
  const e = w();
  if (!e) return {};
  const n = F(t),
    r = T(n),
    s = r.data,
    o = n.spanContext().traceState,
    i = (o == null ? void 0 : o.get("sentry.sample_rate")) ?? s[Ln] ?? s[ss];
  function a(_) {
    return (
      (typeof i == "number" || typeof i == "string") &&
        (_.sample_rate = `${i}`),
      _
    );
  }
  const c = n[Ts];
  if (c) return a(c);
  const u = o == null ? void 0 : o.get("sentry.dsc"),
    d = u && us(u);
  if (d) return a(d);
  const p = xs(t.spanContext().traceId, e),
    l = s[ht],
    f = r.description;
  return (
    l !== "url" && f && (p.transaction = f),
    nt() &&
      ((p.sampled = String(xt(n))),
      (p.sample_rand =
        (o == null ? void 0 : o.get("sentry.sample_rand")) ??
        ((m = Ge(n).scope) == null
          ? void 0
          : m.getPropagationContext().sampleRand.toString()))),
    a(p),
    e.emit("createDsc", p, n),
    p
  );
}
class zt {
  constructor(e = {}) {
    (this._traceId = e.traceId || lt()), (this._spanId = e.spanId || ft());
  }
  spanContext() {
    return { spanId: this._spanId, traceId: this._traceId, traceFlags: ms };
  }
  end(e) {}
  setAttribute(e, n) {
    return this;
  }
  setAttributes(e) {
    return this;
  }
  setStatus(e) {
    return this;
  }
  updateName(e) {
    return this;
  }
  isRecording() {
    return !1;
  }
  addEvent(e, n, r) {
    return this;
  }
  addLink(e) {
    return this;
  }
  addLinks(e) {
    return this;
  }
  recordException(e, n) {}
}
function ot(t, e = 100, n = 1 / 0) {
  try {
    return Fn("", t, e, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function ks(t, e = 3, n = 100 * 1024) {
  const r = ot(t, e);
  return qa(r) > n ? ks(t, e - 1, n) : r;
}
function Fn(t, e, n = 1 / 0, r = 1 / 0, s = Ua()) {
  const [o, i] = s;
  if (
    e == null ||
    ["boolean", "string"].includes(typeof e) ||
    (typeof e == "number" && Number.isFinite(e))
  )
    return e;
  const a = Da(t, e);
  if (!a.startsWith("[object ")) return a;
  if (e.__sentry_skip_normalization__) return e;
  const c =
    typeof e.__sentry_override_normalization_depth__ == "number"
      ? e.__sentry_override_normalization_depth__
      : n;
  if (c === 0) return a.replace("object ", "");
  if (o(e)) return "[Circular ~]";
  const u = e;
  if (u && typeof u.toJSON == "function")
    try {
      const f = u.toJSON();
      return Fn("", f, c - 1, r, s);
    } catch {}
  const d = Array.isArray(e) ? [] : {};
  let p = 0;
  const l = Jr(e);
  for (const f in l) {
    if (!Object.prototype.hasOwnProperty.call(l, f)) continue;
    if (p >= r) {
      d[f] = "[MaxProperties ~]";
      break;
    }
    const m = l[f];
    (d[f] = Fn(f, m, c - 1, r, s)), p++;
  }
  return i(e), d;
}
function Da(t, e) {
  try {
    if (t === "domain" && e && typeof e == "object" && e._events)
      return "[Domain]";
    if (t === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && e === global) return "[Global]";
    if (typeof window < "u" && e === window) return "[Window]";
    if (typeof document < "u" && e === document) return "[Document]";
    if (Hr(e)) return Dr(e);
    if (Mi(e)) return "[SyntheticEvent]";
    if (typeof e == "number" && !Number.isFinite(e)) return `[${e}]`;
    if (typeof e == "function") return `[Function: ${ut(e)}]`;
    if (typeof e == "symbol") return `[${String(e)}]`;
    if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
    const n = Ma(e);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function Ma(t) {
  const e = Object.getPrototypeOf(t);
  return e != null && e.constructor ? e.constructor.name : "null prototype";
}
function ja(t) {
  return ~-encodeURI(t).split(/%..|./).length;
}
function qa(t) {
  return ja(JSON.stringify(t));
}
function Ua() {
  const t = new WeakSet();
  function e(r) {
    return t.has(r) ? !0 : (t.add(r), !1);
  }
  function n(r) {
    t.delete(r);
  }
  return [e, n];
}
function Wt(t, e = []) {
  return [t, e];
}
function Fa(t, e) {
  const [n, r] = t;
  return [n, [...r, e]];
}
function Bn(t, e) {
  const n = t[1];
  for (const r of n) {
    const s = r[0].type;
    if (e(r, s)) return !0;
  }
  return !1;
}
function Ba(t, e) {
  return Bn(t, (n, r) => e.includes(r));
}
function Hn(t) {
  const e = je(b);
  return e.encodePolyfill ? e.encodePolyfill(t) : new TextEncoder().encode(t);
}
function Ha(t) {
  const [e, n] = t;
  let r = JSON.stringify(e);
  function s(o) {
    typeof r == "string"
      ? (r = typeof o == "string" ? r + o : [Hn(r), o])
      : r.push(typeof o == "string" ? Hn(o) : o);
  }
  for (const o of n) {
    const [i, a] = o;
    if (
      (s(`
${JSON.stringify(i)}
`),
      typeof a == "string" || a instanceof Uint8Array)
    )
      s(a);
    else {
      let c;
      try {
        c = JSON.stringify(a);
      } catch {
        c = JSON.stringify(ot(a));
      }
      s(c);
    }
  }
  return typeof r == "string" ? r : za(r);
}
function za(t) {
  const e = t.reduce((s, o) => s + o.length, 0),
    n = new Uint8Array(e);
  let r = 0;
  for (const s of t) n.set(s, r), (r += s.length);
  return n;
}
function Wa(t) {
  return [{ type: "span" }, t];
}
function Ja(t) {
  const e = typeof t.data == "string" ? Hn(t.data) : t.data;
  return [
    {
      type: "attachment",
      length: e.length,
      filename: t.filename,
      content_type: t.contentType,
      attachment_type: t.attachmentType,
    },
    e,
  ];
}
const Is = {
  sessions: "session",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  raw_security: "security",
  log: "log_item",
  trace_metric: "metric",
};
function Ga(t) {
  return t in Is;
}
function $s(t) {
  return Ga(t) ? Is[t] : t;
}
function Cs(t) {
  if (!(t != null && t.sdk)) return;
  const { name: e, version: n } = t.sdk;
  return { name: e, version: n };
}
function Ya(t, e, n, r) {
  var o;
  const s =
    (o = t.sdkProcessingMetadata) == null ? void 0 : o.dynamicSamplingContext;
  return {
    event_id: t.event_id,
    sent_at: new Date().toISOString(),
    ...(e && { sdk: e }),
    ...(!!n && r && { dsn: ne(r) }),
    ...(s && { trace: s }),
  };
}
function Va(t, e) {
  var r, s, o, i;
  if (!e) return t;
  const n = t.sdk || {};
  return (
    (t.sdk = {
      ...n,
      name: n.name || e.name,
      version: n.version || e.version,
      integrations: [
        ...(((r = t.sdk) == null ? void 0 : r.integrations) || []),
        ...(e.integrations || []),
      ],
      packages: [
        ...(((s = t.sdk) == null ? void 0 : s.packages) || []),
        ...(e.packages || []),
      ],
      settings:
        ((o = t.sdk) != null && o.settings) || e.settings
          ? { ...((i = t.sdk) == null ? void 0 : i.settings), ...e.settings }
          : void 0,
    }),
    t
  );
}
function Ka(t, e, n, r) {
  const s = Cs(n),
    o = {
      sent_at: new Date().toISOString(),
      ...(s && { sdk: s }),
      ...(!!r && e && { dsn: ne(e) }),
    },
    i =
      "aggregates" in t
        ? [{ type: "sessions" }, t]
        : [{ type: "session" }, t.toJSON()];
  return Wt(o, [i]);
}
function Xa(t, e, n, r) {
  const s = Cs(n),
    o = t.type && t.type !== "replay_event" ? t.type : "event";
  Va(t, n == null ? void 0 : n.sdk);
  const i = Ya(t, s, r, e);
  return delete t.sdkProcessingMetadata, Wt(i, [[{ type: o }, t]]);
}
function Za(t, e) {
  function n(f) {
    return !!f.trace_id && !!f.public_key;
  }
  const r = mt(t[0]),
    s = e == null ? void 0 : e.getDsn(),
    o = e == null ? void 0 : e.getOptions().tunnel,
    i = {
      sent_at: new Date().toISOString(),
      ...(n(r) && { trace: r }),
      ...(!!o && s && { dsn: ne(s) }),
    },
    { beforeSendSpan: a, ignoreSpans: c } =
      (e == null ? void 0 : e.getOptions()) || {},
    u = c != null && c.length ? t.filter((f) => !Ke(T(f), c)) : t,
    d = t.length - u.length;
  d && (e == null || e.recordDroppedEvent("before_send", "span", d));
  const p = a
      ? (f) => {
          const m = T(f);
          return a(m) || (jn(), m);
        }
      : T,
    l = [];
  for (const f of u) {
    const m = p(f);
    m && l.push(Wa(m));
  }
  return Wt(i, l);
}
function Qa(t) {
  if (!g) return;
  const {
      description: e = "< unknown name >",
      op: n = "< unknown op >",
      parent_span_id: r,
    } = T(t),
    { spanId: s } = t.spanContext(),
    o = xt(t),
    i = F(t),
    a = i === t,
    c = `[Tracing] Starting ${o ? "sampled" : "unsampled"} ${a ? "root " : ""}span`,
    u = [`op: ${n}`, `name: ${e}`, `ID: ${s}`];
  if ((r && u.push(`parent ID: ${r}`), !a)) {
    const { op: d, description: p } = T(i);
    u.push(`root ID: ${i.spanContext().spanId}`),
      d && u.push(`root op: ${d}`),
      p && u.push(`root description: ${p}`);
  }
  h.log(`${c}
  ${u.join(`
  `)}`);
}
function tc(t) {
  if (!g) return;
  const { description: e = "< unknown name >", op: n = "< unknown op >" } =
      T(t),
    { spanId: r } = t.spanContext(),
    s = F(t) === t,
    o = `[Tracing] Finishing "${n}" ${s ? "root " : ""}span "${e}" with ID ${r}`;
  h.log(o);
}
function ec(t, e, n, r = J()) {
  const s = r && F(r);
  s &&
    (g &&
      h.log(`[Measurement] Setting measurement on root span: ${t} = ${e} ${n}`),
    s.addEvent(t, { [we]: e, [Ee]: n }));
}
function Ps(t) {
  if (!t || t.length === 0) return;
  const e = {};
  return (
    t.forEach((n) => {
      const r = n.attributes || {},
        s = r[Ee],
        o = r[we];
      typeof s == "string" &&
        typeof o == "number" &&
        (e[n.name] = { value: o, unit: s });
    }),
    e
  );
}
const Os = 1e3;
class Ze {
  constructor(e = {}) {
    (this._traceId = e.traceId || lt()),
      (this._spanId = e.spanId || ft()),
      (this._startTime = e.startTimestamp || R()),
      (this._links = e.links),
      (this._attributes = {}),
      this.setAttributes({ [A]: "manual", [Tt]: e.op, ...e.attributes }),
      (this._name = e.name),
      e.parentSpanId && (this._parentSpanId = e.parentSpanId),
      "sampled" in e && (this._sampled = e.sampled),
      e.endTimestamp && (this._endTime = e.endTimestamp),
      (this._events = []),
      (this._isStandaloneSpan = e.isStandalone),
      this._endTime && this._onSpanEnded();
  }
  addLink(e) {
    return this._links ? this._links.push(e) : (this._links = [e]), this;
  }
  addLinks(e) {
    return this._links ? this._links.push(...e) : (this._links = e), this;
  }
  recordException(e, n) {}
  spanContext() {
    const { _spanId: e, _traceId: n, _sampled: r } = this;
    return { spanId: e, traceId: n, traceFlags: r ? Dn : ms };
  }
  setAttribute(e, n) {
    return (
      n === void 0 ? delete this._attributes[e] : (this._attributes[e] = n),
      this
    );
  }
  setAttributes(e) {
    return Object.keys(e).forEach((n) => this.setAttribute(n, e[n])), this;
  }
  updateStartTime(e) {
    this._startTime = Bt(e);
  }
  setStatus(e) {
    return (this._status = e), this;
  }
  updateName(e) {
    return (this._name = e), this.setAttribute(ht, "custom"), this;
  }
  end(e) {
    this._endTime || ((this._endTime = Bt(e)), tc(this), this._onSpanEnded());
  }
  getSpanJSON() {
    return {
      data: this._attributes,
      description: this._name,
      op: this._attributes[Tt],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: bs(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[A],
      profile_id: this._attributes[Rn],
      exclusive_time: this._attributes[ee],
      measurements: Ps(this._events),
      is_segment: (this._isStandaloneSpan && F(this) === this) || void 0,
      segment_id: this._isStandaloneSpan
        ? F(this).spanContext().spanId
        : void 0,
      links: ys(this._links),
    };
  }
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  addEvent(e, n, r) {
    g && h.log("[Tracing] Adding an event to span:", e);
    const s = As(n) ? n : r || R(),
      o = As(n) ? {} : n || {},
      i = { name: e, time: Bt(s), attributes: o };
    return this._events.push(i), this;
  }
  isStandaloneSpan() {
    return !!this._isStandaloneSpan;
  }
  _onSpanEnded() {
    const e = w();
    if (
      (e && e.emit("spanEnd", this),
      !(this._isStandaloneSpan || this === F(this)))
    )
      return;
    if (this._isStandaloneSpan) {
      this._sampled
        ? rc(Za([this], e))
        : (g &&
            h.log(
              "[Tracing] Discarding standalone span because its trace was not chosen to be sampled.",
            ),
          e && e.recordDroppedEvent("sample_rate", "span"));
      return;
    }
    const n = this._convertSpanToTransaction();
    n && (Ge(this).scope || k()).captureEvent(n);
  }
  _convertSpanToTransaction() {
    var c;
    if (!Ls(T(this))) return;
    this._name ||
      (g &&
        h.warn(
          "Transaction has no name, falling back to `<unlabeled transaction>`.",
        ),
      (this._name = "<unlabeled transaction>"));
    const { scope: e, isolationScope: n } = Ge(this),
      r =
        (c = e == null ? void 0 : e.getScopeData().sdkProcessingMetadata) ==
        null
          ? void 0
          : c.normalizedRequest;
    if (this._sampled !== !0) return;
    const s = Ve(this)
        .filter((u) => u !== this && !nc(u))
        .map((u) => T(u))
        .filter(Ls),
      o = this._attributes[ht];
    delete this._attributes[os],
      s.forEach((u) => {
        delete u.data[os];
      });
    const i = {
        contexts: { trace: Ia(this) },
        spans:
          s.length > Os
            ? s
                .sort((u, d) => u.start_timestamp - d.start_timestamp)
                .slice(0, Os)
            : s,
        start_timestamp: this._startTime,
        timestamp: this._endTime,
        transaction: this._name,
        type: "transaction",
        sdkProcessingMetadata: {
          capturedSpanScope: e,
          capturedSpanIsolationScope: n,
          dynamicSamplingContext: mt(this),
        },
        request: r,
        ...(o && { transaction_info: { source: o } }),
      },
      a = Ps(this._events);
    return (
      a &&
        Object.keys(a).length &&
        (g &&
          h.log(
            "[Measurements] Adding measurements to transaction event",
            JSON.stringify(a, void 0, 2),
          ),
        (i.measurements = a)),
      i
    );
  }
}
function As(t) {
  return (t && typeof t == "number") || t instanceof Date || Array.isArray(t);
}
function Ls(t) {
  return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id;
}
function nc(t) {
  return t instanceof Ze && t.isStandaloneSpan();
}
function rc(t) {
  const e = w();
  if (!e) return;
  const n = t[1];
  if (!n || n.length === 0) {
    e.recordDroppedEvent("before_send", "span");
    return;
  }
  e.sendEnvelope(t);
}
function sc(t, e, n) {
  if (!nt(t)) return [!1];
  let r, s;
  typeof t.tracesSampler == "function"
    ? ((s = t.tracesSampler({
        ...e,
        inheritOrSampleWith: (a) =>
          typeof e.parentSampleRate == "number"
            ? e.parentSampleRate
            : typeof e.parentSampled == "boolean"
              ? Number(e.parentSampled)
              : a,
      })),
      (r = !0))
    : e.parentSampled !== void 0
      ? (s = e.parentSampled)
      : typeof t.tracesSampleRate < "u" && ((s = t.tracesSampleRate), (r = !0));
  const o = Te(s);
  if (o === void 0)
    return (
      g &&
        h.warn(
          `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(s)} of type ${JSON.stringify(typeof s)}.`,
        ),
      [!1]
    );
  if (!o)
    return (
      g &&
        h.log(
          `[Tracing] Discarding transaction because ${typeof t.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`,
        ),
      [!1, o, r]
    );
  const i = n < o;
  return (
    i ||
      (g &&
        h.log(
          `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`,
        )),
    [i, o, r]
  );
}
const Rs = "__SENTRY_SUPPRESS_TRACING__";
function re(t) {
  const e = Ds();
  if (e.startInactiveSpan) return e.startInactiveSpan(t);
  const n = ic(t),
    { forceTransaction: r, parentSpan: s } = t;
  return (
    t.scope
      ? (o) => Je(t.scope, o)
      : s !== void 0
        ? (o) => Ns(s, o)
        : (o) => o()
  )(() => {
    const o = k(),
      i = cc(o, s);
    return t.onlyIfParent && !i
      ? new zt()
      : oc({ parentSpan: i, spanArguments: n, forceTransaction: r, scope: o });
  });
}
function Ns(t, e) {
  const n = Ds();
  return n.withActiveSpan
    ? n.withActiveSpan(t, e)
    : Je((r) => (ve(r, t || void 0), e(r)));
}
function oc({
  parentSpan: t,
  spanArguments: e,
  forceTransaction: n,
  scope: r,
}) {
  if (!nt()) {
    const i = new zt();
    if (n || !t) {
      const a = {
        sampled: "false",
        sample_rate: "0",
        transaction: e.name,
        ...mt(i),
      };
      Xe(i, a);
    }
    return i;
  }
  const s = et();
  let o;
  if (t && !n) (o = ac(t, r, e)), Ss(t, o);
  else if (t) {
    const i = mt(t),
      { traceId: a, spanId: c } = t.spanContext(),
      u = xt(t);
    (o = Ms({ traceId: a, parentSpanId: c, ...e }, r, u)), Xe(o, i);
  } else {
    const {
      traceId: i,
      dsc: a,
      parentSpanId: c,
      sampled: u,
    } = { ...s.getPropagationContext(), ...r.getPropagationContext() };
    (o = Ms({ traceId: i, parentSpanId: c, ...e }, r, u)), a && Xe(o, a);
  }
  return Qa(o), da(o, r, s), o;
}
function ic(t) {
  const e = { isStandalone: (t.experimental || {}).standalone, ...t };
  if (t.startTime) {
    const n = { ...e };
    return (n.startTimestamp = Bt(t.startTime)), delete n.startTime, n;
  }
  return e;
}
function Ds() {
  const t = Mt();
  return te(t);
}
function Ms(t, e, n) {
  var m;
  const r = w(),
    s = (r == null ? void 0 : r.getOptions()) || {},
    { name: o = "" } = t,
    i = { spanAttributes: { ...t.attributes }, spanName: o, parentSampled: n };
  r == null || r.emit("beforeSampling", i, { decision: !1 });
  const a = i.parentSampled ?? n,
    c = i.spanAttributes,
    u = e.getPropagationContext(),
    [d, p, l] = e.getScopeData().sdkProcessingMetadata[Rs]
      ? [!1]
      : sc(
          s,
          {
            name: o,
            parentSampled: a,
            attributes: c,
            parentSampleRate: Te((m = u.dsc) == null ? void 0 : m.sample_rate),
          },
          u.sampleRand,
        ),
    f = new Ze({
      ...t,
      attributes: {
        [ht]: "custom",
        [Ln]: p !== void 0 && l ? p : void 0,
        ...c,
      },
      sampled: d,
    });
  return (
    !d &&
      r &&
      (g &&
        h.log(
          "[Tracing] Discarding root span because its trace was not chosen to be sampled.",
        ),
      r.recordDroppedEvent("sample_rate", "transaction")),
    r && r.emit("spanStart", f),
    f
  );
}
function ac(t, e, n) {
  const { spanId: r, traceId: s } = t.spanContext(),
    o = e.getScopeData().sdkProcessingMetadata[Rs] ? !1 : xt(t),
    i = o
      ? new Ze({ ...n, parentSpanId: r, traceId: s, sampled: o })
      : new zt({ traceId: s });
  Ss(t, i);
  const a = w();
  return (
    a && (a.emit("spanStart", i), n.endTimestamp && a.emit("spanEnd", i)), i
  );
}
function cc(t, e) {
  if (e) return e;
  if (e === null) return;
  const n = be(t);
  if (!n) return;
  const r = w();
  return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? F(n) : n;
}
const Qe = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 },
  uc = "heartbeatFailed",
  pc = "idleTimeout",
  dc = "finalTimeout",
  lc = "externalFinish";
function js(t, e = {}) {
  const n = new Map();
  let r = !1,
    s,
    o = lc,
    i = !e.disableAutoFinish;
  const a = [],
    {
      idleTimeout: c = Qe.idleTimeout,
      finalTimeout: u = Qe.finalTimeout,
      childSpanTimeout: d = Qe.childSpanTimeout,
      beforeSpanEnd: p,
      trimIdleSpanEndTimestamp: l = !0,
    } = e,
    f = w();
  if (!f || !nt()) {
    const E = new zt(),
      P = { sample_rate: "0", sampled: "false", ...mt(E) };
    return Xe(E, P), E;
  }
  const m = k(),
    _ = J(),
    y = fc(t);
  y.end = new Proxy(y.end, {
    apply(E, P, Lt) {
      if ((p && p(y), P instanceof zt)) return;
      const [Y, ...at] = Lt,
        ct = Y || R(),
        $ = Bt(ct),
        H = Ve(y).filter((C) => C !== y),
        V = T(y);
      if (!H.length || !l) return At($), Reflect.apply(E, P, [$, ...at]);
      const z = f.getOptions().ignoreSpans,
        st =
          H == null
            ? void 0
            : H.reduce(
                (C, I) => {
                  const D = T(I);
                  return !D.timestamp || (z && Ke(D, z))
                    ? C
                    : C
                      ? Math.max(C, D.timestamp)
                      : D.timestamp;
                },
                void 0,
              ),
        x = V.start_timestamp,
        O = Math.min(
          x ? x + u / 1e3 : 1 / 0,
          Math.max(x || -1 / 0, Math.min($, st || 1 / 0)),
        );
      return At(O), Reflect.apply(E, P, [O, ...at]);
    },
  });
  function j() {
    s && (clearTimeout(s), (s = void 0));
  }
  function M(E) {
    j(),
      (s = setTimeout(() => {
        !r && n.size === 0 && i && ((o = pc), y.end(E));
      }, c));
  }
  function yt(E) {
    s = setTimeout(() => {
      !r && i && ((o = uc), y.end(E));
    }, d);
  }
  function Pt(E) {
    j(), n.set(E, !0);
    const P = R();
    yt(P + d / 1e3);
  }
  function Ot(E) {
    if ((n.has(E) && n.delete(E), n.size === 0)) {
      const P = R();
      M(P + c / 1e3);
    }
  }
  function At(E) {
    (r = !0), n.clear(), a.forEach(($) => $()), ve(m, _);
    const P = T(y),
      { start_timestamp: Lt } = P;
    if (!Lt) return;
    P.data[Se] || y.setAttribute(Se, o);
    const Y = P.status;
    (!Y || Y === "unknown") && y.setStatus({ code: Nn }),
      h.log(`[Tracing] Idle span "${P.op}" finished`);
    const at = Ve(y).filter(($) => $ !== y);
    let ct = 0;
    at.forEach(($) => {
      $.isRecording() &&
        ($.setStatus({ code: N, message: "cancelled" }),
        $.end(E),
        g &&
          h.log(
            "[Tracing] Cancelling span since span ended early",
            JSON.stringify($, void 0, 2),
          ));
      const H = T($),
        { timestamp: V = 0, start_timestamp: z = 0 } = H,
        st = z <= E,
        x = (u + c) / 1e3,
        O = V - z <= x;
      if (g) {
        const C = JSON.stringify($, void 0, 2);
        st
          ? O ||
            h.log(
              "[Tracing] Discarding span since it finished after idle span final timeout",
              C,
            )
          : h.log(
              "[Tracing] Discarding span since it happened after idle span was finished",
              C,
            );
      }
      (!O || !st) && (Aa(y, $), ct++);
    }),
      ct > 0 && y.setAttribute("sentry.idle_span_discarded_spans", ct);
  }
  return (
    a.push(
      f.on("spanStart", (E) => {
        r ||
          E === y ||
          T(E).timestamp ||
          (E instanceof Ze && E.isStandaloneSpan()) ||
          (Ve(y).includes(E) && Pt(E.spanContext().spanId));
      }),
    ),
    a.push(
      f.on("spanEnd", (E) => {
        r || Ot(E.spanContext().spanId);
      }),
    ),
    a.push(
      f.on("idleSpanEnableAutoFinish", (E) => {
        E === y && ((i = !0), M(), n.size && yt());
      }),
    ),
    e.disableAutoFinish || M(),
    setTimeout(() => {
      r ||
        (y.setStatus({ code: N, message: "deadline_exceeded" }),
        (o = dc),
        y.end());
    }, u),
    y
  );
}
function fc(t) {
  const e = re(t);
  return ve(k(), e), g && h.log("[Tracing] Started span is an idle span"), e;
}
const zn = 0,
  qs = 1,
  Us = 2;
function xe(t) {
  return new Me((e) => {
    e(t);
  });
}
function Wn(t) {
  return new Me((e, n) => {
    n(t);
  });
}
class Me {
  constructor(e) {
    (this._state = zn), (this._handlers = []), this._runExecutor(e);
  }
  then(e, n) {
    return new Me((r, s) => {
      this._handlers.push([
        !1,
        (o) => {
          if (!e) r(o);
          else
            try {
              r(e(o));
            } catch (i) {
              s(i);
            }
        },
        (o) => {
          if (!n) s(o);
          else
            try {
              r(n(o));
            } catch (i) {
              s(i);
            }
        },
      ]),
        this._executeHandlers();
    });
  }
  catch(e) {
    return this.then((n) => n, e);
  }
  finally(e) {
    return new Me((n, r) => {
      let s, o;
      return this.then(
        (i) => {
          (o = !1), (s = i), e && e();
        },
        (i) => {
          (o = !0), (s = i), e && e();
        },
      ).then(() => {
        if (o) {
          r(s);
          return;
        }
        n(s);
      });
    });
  }
  _executeHandlers() {
    if (this._state === zn) return;
    const e = this._handlers.slice();
    (this._handlers = []),
      e.forEach((n) => {
        n[0] ||
          (this._state === qs && n[1](this._value),
          this._state === Us && n[2](this._value),
          (n[0] = !0));
      });
  }
  _runExecutor(e) {
    const n = (o, i) => {
        if (this._state === zn) {
          if (he(i)) {
            i.then(r, s);
            return;
          }
          (this._state = o), (this._value = i), this._executeHandlers();
        }
      },
      r = (o) => {
        n(qs, o);
      },
      s = (o) => {
        n(Us, o);
      };
    try {
      e(r, s);
    } catch (o) {
      s(o);
    }
  }
}
function hc(t, e, n, r = 0) {
  try {
    const s = Jn(e, n, t, r);
    return he(s) ? s : xe(s);
  } catch (s) {
    return Wn(s);
  }
}
function Jn(t, e, n, r) {
  const s = n[r];
  if (!t || !s) return t;
  const o = s({ ...t }, e);
  return (
    g && o === null && h.log(`Event processor "${s.id || "?"}" dropped event`),
    he(o) ? o.then((i) => Jn(i, e, n, r + 1)) : Jn(o, e, n, r + 1)
  );
}
let gt, Fs, Bs, kt;
function mc(t) {
  const e = b._sentryDebugIds,
    n = b._debugIds;
  if (!e && !n) return {};
  const r = e ? Object.keys(e) : [],
    s = n ? Object.keys(n) : [];
  if (kt && r.length === Fs && s.length === Bs) return kt;
  (Fs = r.length), (Bs = s.length), (kt = {}), gt || (gt = {});
  const o = (i, a) => {
    var c;
    for (const u of i) {
      const d = a[u],
        p = gt == null ? void 0 : gt[u];
      if (p && kt && d) (kt[p[0]] = d), gt && (gt[u] = [p[0], d]);
      else if (d) {
        const l = t(u);
        for (let f = l.length - 1; f >= 0; f--) {
          const m = (c = l[f]) == null ? void 0 : c.filename;
          if (m && kt && gt) {
            (kt[m] = d), (gt[u] = [m, d]);
            break;
          }
        }
      }
    }
  };
  return e && o(r, e), n && o(s, n), kt;
}
function gc(t, e) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: s,
    sdkProcessingMetadata: o,
  } = e;
  _c(t, e), r && bc(t, r), Sc(t, n), yc(t, s), vc(t, o);
}
function Hs(t, e) {
  const {
    extra: n,
    tags: r,
    attributes: s,
    user: o,
    contexts: i,
    level: a,
    sdkProcessingMetadata: c,
    breadcrumbs: u,
    fingerprint: d,
    eventProcessors: p,
    attachments: l,
    propagationContext: f,
    transactionName: m,
    span: _,
  } = e;
  ke(t, "extra", n),
    ke(t, "tags", r),
    ke(t, "attributes", s),
    ke(t, "user", o),
    ke(t, "contexts", i),
    (t.sdkProcessingMetadata = ye(t.sdkProcessingMetadata, c, 2)),
    a && (t.level = a),
    m && (t.transactionName = m),
    _ && (t.span = _),
    u.length && (t.breadcrumbs = [...t.breadcrumbs, ...u]),
    d.length && (t.fingerprint = [...t.fingerprint, ...d]),
    p.length && (t.eventProcessors = [...t.eventProcessors, ...p]),
    l.length && (t.attachments = [...t.attachments, ...l]),
    (t.propagationContext = { ...t.propagationContext, ...f });
}
function ke(t, e, n) {
  t[e] = ye(t[e], n, 1);
}
function Gn(t, e) {
  const n = sa().getScopeData();
  return t && Hs(n, t.getScopeData()), e && Hs(n, e.getScopeData()), n;
}
function _c(t, e) {
  const {
    extra: n,
    tags: r,
    user: s,
    contexts: o,
    level: i,
    transactionName: a,
  } = e;
  Object.keys(n).length && (t.extra = { ...n, ...t.extra }),
    Object.keys(r).length && (t.tags = { ...r, ...t.tags }),
    Object.keys(s).length && (t.user = { ...s, ...t.user }),
    Object.keys(o).length && (t.contexts = { ...o, ...t.contexts }),
    i && (t.level = i),
    a && t.type !== "transaction" && (t.transaction = a);
}
function yc(t, e) {
  const n = [...(t.breadcrumbs || []), ...e];
  t.breadcrumbs = n.length ? n : void 0;
}
function vc(t, e) {
  t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, ...e };
}
function bc(t, e) {
  (t.contexts = { trace: _s(e), ...t.contexts }),
    (t.sdkProcessingMetadata = {
      dynamicSamplingContext: mt(e),
      ...t.sdkProcessingMetadata,
    });
  const n = F(e),
    r = T(n).description;
  r && !t.transaction && t.type === "transaction" && (t.transaction = r);
}
function Sc(t, e) {
  (t.fingerprint = t.fingerprint
    ? Array.isArray(t.fingerprint)
      ? t.fingerprint
      : [t.fingerprint]
    : []),
    e && (t.fingerprint = t.fingerprint.concat(e)),
    t.fingerprint.length || delete t.fingerprint;
}
function Ec(t, e, n, r, s, o) {
  const { normalizeDepth: i = 3, normalizeMaxBreadth: a = 1e3 } = t,
    c = {
      ...e,
      event_id: e.event_id || n.event_id || Z(),
      timestamp: e.timestamp || Ft(),
    },
    u = n.integrations || t.integrations.map((_) => _.name);
  wc(c, t),
    kc(c, u),
    s && s.emit("applyFrameMetadata", e),
    e.type === void 0 && Tc(c, t.stackParser);
  const d = $c(r, n.captureContext);
  n.mechanism && Xt(c, n.mechanism);
  const p = s ? s.getEventProcessors() : [],
    l = Gn(o, d),
    f = [...(n.attachments || []), ...l.attachments];
  f.length && (n.attachments = f), gc(c, l);
  const m = [...p, ...l.eventProcessors];
  return (n.data && n.data.__sentry__ === !0 ? xe(c) : hc(m, c, n)).then(
    (_) => (_ && xc(_), typeof i == "number" && i > 0 ? Ic(_, i, a) : _),
  );
}
function wc(t, e) {
  var a, c;
  const { environment: n, release: r, dist: s, maxValueLength: o } = e;
  (t.environment = t.environment || n || qn),
    !t.release && r && (t.release = r),
    !t.dist && s && (t.dist = s);
  const i = t.request;
  i != null && i.url && o && (i.url = $n(i.url, o)),
    o &&
      ((c = (a = t.exception) == null ? void 0 : a.values) == null ||
        c.forEach((u) => {
          u.value && (u.value = $n(u.value, o));
        }));
}
function Tc(t, e) {
  var r, s;
  const n = mc(e);
  (s = (r = t.exception) == null ? void 0 : r.values) == null ||
    s.forEach((o) => {
      var i, a;
      (a = (i = o.stacktrace) == null ? void 0 : i.frames) == null ||
        a.forEach((c) => {
          c.filename && (c.debug_id = n[c.filename]);
        });
    });
}
function xc(t) {
  var r, s;
  const e = {};
  if (
    ((s = (r = t.exception) == null ? void 0 : r.values) == null ||
      s.forEach((o) => {
        var i, a;
        (a = (i = o.stacktrace) == null ? void 0 : i.frames) == null ||
          a.forEach((c) => {
            c.debug_id &&
              (c.abs_path
                ? (e[c.abs_path] = c.debug_id)
                : c.filename && (e[c.filename] = c.debug_id),
              delete c.debug_id);
          });
      }),
    Object.keys(e).length === 0)
  )
    return;
  (t.debug_meta = t.debug_meta || {}),
    (t.debug_meta.images = t.debug_meta.images || []);
  const n = t.debug_meta.images;
  Object.entries(e).forEach(([o, i]) => {
    n.push({ type: "sourcemap", code_file: o, debug_id: i });
  });
}
function kc(t, e) {
  e.length > 0 &&
    ((t.sdk = t.sdk || {}),
    (t.sdk.integrations = [...(t.sdk.integrations || []), ...e]));
}
function Ic(t, e, n) {
  var s, o;
  if (!t) return null;
  const r = {
    ...t,
    ...(t.breadcrumbs && {
      breadcrumbs: t.breadcrumbs.map((i) => ({
        ...i,
        ...(i.data && { data: ot(i.data, e, n) }),
      })),
    }),
    ...(t.user && { user: ot(t.user, e, n) }),
    ...(t.contexts && { contexts: ot(t.contexts, e, n) }),
    ...(t.extra && { extra: ot(t.extra, e, n) }),
  };
  return (
    (s = t.contexts) != null &&
      s.trace &&
      r.contexts &&
      ((r.contexts.trace = t.contexts.trace),
      t.contexts.trace.data &&
        (r.contexts.trace.data = ot(t.contexts.trace.data, e, n))),
    t.spans &&
      (r.spans = t.spans.map((i) => ({
        ...i,
        ...(i.data && { data: ot(i.data, e, n) }),
      }))),
    (o = t.contexts) != null &&
      o.flags &&
      r.contexts &&
      (r.contexts.flags = ot(t.contexts.flags, 3, n)),
    r
  );
}
function $c(t, e) {
  if (!e) return t;
  const n = t ? t.clone() : new _t();
  return n.update(e), n;
}
function Cc(t, e) {
  return k().captureException(t, void 0);
}
function zs(t, e) {
  return k().captureEvent(t, e);
}
function Pc(t, e) {
  et().setContext(t, e);
}
function Oc() {
  const t = w();
  return (
    (t == null ? void 0 : t.getOptions().enabled) !== !1 &&
    !!(t != null && t.getTransport())
  );
}
function Ws(t) {
  const e = et(),
    { user: n } = Gn(e, k()),
    { userAgent: r } = b.navigator || {},
    s = Ji({ user: n, ...(r && { userAgent: r }), ...t }),
    o = e.getSession();
  return (
    (o == null ? void 0 : o.status) === "ok" && Zt(o, { status: "exited" }),
    Js(),
    e.setSession(s),
    s
  );
}
function Js() {
  const t = et(),
    e = k().getSession() || t.getSession();
  e && Gi(e), Gs(), t.setSession();
}
function Gs() {
  const t = et(),
    e = w(),
    n = t.getSession();
  n && e && e.captureSession(n);
}
function Yn(t = !1) {
  if (t) {
    Js();
    return;
  }
  Gs();
}
const Ac = "7";
function Lc(t) {
  const e = t.protocol ? `${t.protocol}:` : "",
    n = t.port ? `:${t.port}` : "";
  return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
}
function Rc(t) {
  return `${Lc(t)}${t.projectId}/envelope/`;
}
function Nc(t, e) {
  const n = { sentry_version: Ac };
  return (
    t.publicKey && (n.sentry_key = t.publicKey),
    e && (n.sentry_client = `${e.name}/${e.version}`),
    new URLSearchParams(n).toString()
  );
}
function Dc(t, e, n) {
  return e || `${Rc(t)}?${Nc(t, n)}`;
}
const Ys = [];
function Mc(t) {
  const e = {};
  return (
    t.forEach((n) => {
      const { name: r } = n,
        s = e[r];
      (s && !s.isDefaultInstance && n.isDefaultInstance) || (e[r] = n);
    }),
    Object.values(e)
  );
}
function jc(t) {
  const e = t.defaultIntegrations || [],
    n = t.integrations;
  e.forEach((s) => {
    s.isDefaultInstance = !0;
  });
  let r;
  if (Array.isArray(n)) r = [...e, ...n];
  else if (typeof n == "function") {
    const s = n(e);
    r = Array.isArray(s) ? s : [s];
  } else r = e;
  return Mc(r);
}
function qc(t, e) {
  const n = {};
  return (
    e.forEach((r) => {
      r && Ks(t, r, n);
    }),
    n
  );
}
function Vs(t, e) {
  for (const n of e) n != null && n.afterAllSetup && n.afterAllSetup(t);
}
function Ks(t, e, n) {
  if (n[e.name]) {
    g &&
      h.log(`Integration skipped because it was already installed: ${e.name}`);
    return;
  }
  if (
    ((n[e.name] = e),
    !Ys.includes(e.name) &&
      typeof e.setupOnce == "function" &&
      (e.setupOnce(), Ys.push(e.name)),
    e.setup && typeof e.setup == "function" && e.setup(t),
    typeof e.preprocessEvent == "function")
  ) {
    const r = e.preprocessEvent.bind(e);
    t.on("preprocessEvent", (s, o) => r(s, o, t));
  }
  if (typeof e.processEvent == "function") {
    const r = e.processEvent.bind(e),
      s = Object.assign((o, i) => r(o, i, t), { id: e.name });
    t.addEventProcessor(s);
  }
  g && h.log(`Integration installed: ${e.name}`);
}
function Uc(t) {
  return (
    typeof t == "object" &&
    t != null &&
    !Array.isArray(t) &&
    Object.keys(t).includes("value")
  );
}
function Fc(t, e) {
  const { value: n, unit: r } = Uc(t) ? t : { value: t, unit: void 0 },
    s = Bc(n),
    o = r && typeof r == "string" ? { unit: r } : {};
  if (s) return { ...s, ...o };
  if (!e || (e === "skip-undefined" && n === void 0)) return;
  let i = "";
  try {
    i = JSON.stringify(n) ?? "";
  } catch {}
  return { value: i, type: "string", ...o };
}
function Xs(t, e = !1) {
  const n = {};
  for (const [r, s] of Object.entries(t ?? {})) {
    const o = Fc(s, e);
    o && (n[r] = o);
  }
  return n;
}
function Bc(t) {
  const e =
    typeof t == "string"
      ? "string"
      : typeof t == "boolean"
        ? "boolean"
        : typeof t == "number" && !Number.isNaN(t)
          ? Number.isInteger(t)
            ? "integer"
            : "double"
          : null;
  if (e) return { value: t, type: e };
}
const Hc = "sentry.timestamp.sequence";
let Vn = 0,
  Kn;
function zc(t) {
  const e = Math.floor(t * 1e3);
  Kn !== void 0 && e !== Kn && (Vn = 0);
  const n = Vn;
  return Vn++, (Kn = e), { key: Hc, value: { value: n, type: "integer" } };
}
function Wc(t, e) {
  return e
    ? Je(e, () => {
        const n = J(),
          r = n ? _s(n) : rs(e);
        return [n ? mt(n) : Un(t, e), r];
      })
    : [void 0, void 0];
}
const Jc = { trace: 1, debug: 5, info: 9, warn: 13, error: 17, fatal: 21 };
function Gc(t) {
  return [
    {
      type: "log",
      item_count: t.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    { items: t },
  ];
}
function Yc(t, e, n, r) {
  const s = {};
  return (
    e != null &&
      e.sdk &&
      (s.sdk = { name: e.sdk.name, version: e.sdk.version }),
    n && r && (s.dsn = ne(r)),
    Wt(s, [Gc(t)])
  );
}
const Vc = 100;
function it(t, e, n, r = !0) {
  n && (!t[e] || r) && (t[e] = n);
}
function Kc(t, e) {
  const n = Xn(),
    r = Qs(t);
  r === void 0
    ? n.set(t, [e])
    : r.length >= Vc
      ? (tn(t, r), n.set(t, [e]))
      : n.set(t, [...r, e]);
}
function Zs(t, e = k(), n = Kc) {
  var $;
  const r = (e == null ? void 0 : e.getClient()) ?? w();
  if (!r) {
    g && h.warn("No client available to capture log.");
    return;
  }
  const {
    release: s,
    environment: o,
    enableLogs: i = !1,
    beforeSendLog: a,
  } = r.getOptions();
  if (!i) {
    g && h.warn("logging option not enabled, log will not be captured.");
    return;
  }
  const [, c] = Wc(r, e),
    u = { ...t.attributes },
    {
      user: { id: d, email: p, username: l },
      attributes: f = {},
    } = Gn(et(), e);
  it(u, "user.id", d, !1),
    it(u, "user.email", p, !1),
    it(u, "user.name", l, !1),
    it(u, "sentry.release", s),
    it(u, "sentry.environment", o);
  const { name: m, version: _ } =
    (($ = r.getSdkMetadata()) == null ? void 0 : $.sdk) ?? {};
  it(u, "sentry.sdk.name", m), it(u, "sentry.sdk.version", _);
  const y = r.getIntegrationByName("Replay"),
    j = y == null ? void 0 : y.getReplayId(!0);
  it(u, "sentry.replay_id", j),
    j &&
      (y == null ? void 0 : y.getRecordingMode()) === "buffer" &&
      it(u, "sentry._internal.replay_is_buffering", !0);
  const M = t.message;
  if (He(M)) {
    const {
      __sentry_template_string__: H,
      __sentry_template_values__: V = [],
    } = M;
    V != null && V.length && (u["sentry.message.template"] = H),
      V.forEach((z, st) => {
        u[`sentry.message.parameter.${st}`] = z;
      });
  }
  const yt = be(e);
  it(
    u,
    "sentry.trace.parent_span_id",
    yt == null ? void 0 : yt.spanContext().spanId,
  );
  const Pt = { ...t, attributes: u };
  r.emit("beforeCaptureLog", Pt);
  const Ot = a ? vt(() => a(Pt)) : Pt;
  if (!Ot) {
    r.recordDroppedEvent("before_send", "log_item", 1),
      g && h.warn("beforeSendLog returned null, log will not be captured.");
    return;
  }
  const { level: At, message: E, attributes: P = {}, severityNumber: Lt } = Ot,
    Y = R(),
    at = zc(Y),
    ct = {
      timestamp: Y,
      level: At,
      body: E,
      trace_id: c == null ? void 0 : c.trace_id,
      severity_number: Lt ?? Jc[At],
      attributes: { ...Xs(f), ...Xs(P, !0), [at.key]: at.value },
    };
  n(r, ct), r.emit("afterCaptureLog", Ot);
}
function tn(t, e) {
  const n = e ?? Qs(t) ?? [];
  if (n.length === 0) return;
  const r = t.getOptions(),
    s = Yc(n, r._metadata, r.tunnel, t.getDsn());
  Xn().set(t, []), t.emit("flushLogs"), t.sendEnvelope(s);
}
function Qs(t) {
  return Xn().get(t);
}
function Xn() {
  return Yt("clientToLogBufferMap", () => new WeakMap());
}
function Xc(t) {
  return [
    {
      type: "trace_metric",
      item_count: t.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    { items: t },
  ];
}
function Zc(t, e, n, r) {
  const s = {};
  return (
    e != null &&
      e.sdk &&
      (s.sdk = { name: e.sdk.name, version: e.sdk.version }),
    n && r && (s.dsn = ne(r)),
    Wt(s, [Xc(t)])
  );
}
function to(t, e) {
  const n = e ?? Qc(t) ?? [];
  if (n.length === 0) return;
  const r = t.getOptions(),
    s = Zc(n, r._metadata, r.tunnel, t.getDsn());
  eo().set(t, []), t.emit("flushMetrics"), t.sendEnvelope(s);
}
function Qc(t) {
  return eo().get(t);
}
function eo() {
  return Yt("clientToMetricBufferMap", () => new WeakMap());
}
function no(t) {
  return typeof t == "object" && typeof t.unref == "function" && t.unref(), t;
}
const Zn = Symbol.for("SentryBufferFullError");
function Qn(t = 100) {
  const e = new Set();
  function n() {
    return e.size < t;
  }
  function r(i) {
    e.delete(i);
  }
  function s(i) {
    if (!n()) return Wn(Zn);
    const a = i();
    return (
      e.add(a),
      a.then(
        () => r(a),
        () => r(a),
      ),
      a
    );
  }
  function o(i) {
    if (!e.size) return xe(!0);
    const a = Promise.allSettled(Array.from(e)).then(() => !0);
    if (!i) return a;
    const c = [a, new Promise((u) => no(setTimeout(() => u(!1), i)))];
    return Promise.race(c);
  }
  return {
    get $() {
      return Array.from(e);
    },
    add: s,
    drain: o,
  };
}
const tu = 60 * 1e3;
function eu(t, e = _e()) {
  const n = parseInt(`${t}`, 10);
  if (!isNaN(n)) return n * 1e3;
  const r = Date.parse(`${t}`);
  return isNaN(r) ? tu : r - e;
}
function nu(t, e) {
  return t[e] || t.all || 0;
}
function ru(t, e, n = _e()) {
  return nu(t, e) > n;
}
function su(t, { statusCode: e, headers: n }, r = _e()) {
  const s = { ...t },
    o = n == null ? void 0 : n["x-sentry-rate-limits"],
    i = n == null ? void 0 : n["retry-after"];
  if (o)
    for (const a of o.trim().split(",")) {
      const [c, u, , , d] = a.split(":", 5),
        p = parseInt(c, 10),
        l = (isNaN(p) ? 60 : p) * 1e3;
      if (!u) s.all = r + l;
      else
        for (const f of u.split(";"))
          f === "metric_bucket"
            ? (!d || d.split(";").includes("custom")) && (s[f] = r + l)
            : (s[f] = r + l);
    }
  else i ? (s.all = r + eu(i, r)) : e === 429 && (s.all = r + 60 * 1e3);
  return s;
}
const ro = 64;
function ou(t, e, n = Qn(t.bufferSize || ro)) {
  let r = {};
  const s = (i) => n.drain(i);
  function o(i) {
    const a = [];
    if (
      (Bn(i, (p, l) => {
        const f = $s(l);
        ru(r, f) ? t.recordDroppedEvent("ratelimit_backoff", f) : a.push(p);
      }),
      a.length === 0)
    )
      return Promise.resolve({});
    const c = Wt(i[0], a),
      u = (p) => {
        if (Ba(c, ["client_report"])) {
          g &&
            h.warn(
              `Dropping client report. Will not send outcomes (reason: ${p}).`,
            );
          return;
        }
        Bn(c, (l, f) => {
          t.recordDroppedEvent(p, $s(f));
        });
      },
      d = () =>
        e({ body: Ha(c) }).then(
          (p) =>
            p.statusCode === 413
              ? (g &&
                  h.error(
                    "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits.",
                  ),
                u("send_error"),
                p)
              : (g &&
                  p.statusCode !== void 0 &&
                  (p.statusCode < 200 || p.statusCode >= 300) &&
                  h.warn(
                    `Sentry responded with status code ${p.statusCode} to sent event.`,
                  ),
                (r = su(r, p)),
                p),
          (p) => {
            throw (
              (u("network_error"),
              g && h.error("Encountered error running transport request:", p),
              p)
            );
          },
        );
    return n.add(d).then(
      (p) => p,
      (p) => {
        if (p === Zn)
          return (
            g && h.error("Skipped sending event because buffer is full."),
            u("queue_overflow"),
            Promise.resolve({})
          );
        throw p;
      },
    );
  }
  return { send: o, flush: s };
}
function iu(t, e, n) {
  const r = [
    { type: "client_report" },
    { timestamp: Ft(), discarded_events: t },
  ];
  return Wt(e ? { dsn: e } : {}, [r]);
}
function so(t) {
  const e = [];
  t.message && e.push(t.message);
  try {
    const n = t.exception.values[t.exception.values.length - 1];
    n != null &&
      n.value &&
      (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`));
  } catch {}
  return e;
}
function au(t) {
  var c;
  const {
    trace_id: e,
    parent_span_id: n,
    span_id: r,
    status: s,
    origin: o,
    data: i,
    op: a,
  } = ((c = t.contexts) == null ? void 0 : c.trace) ?? {};
  return {
    data: i ?? {},
    description: t.transaction,
    op: a,
    parent_span_id: n,
    span_id: r ?? "",
    start_timestamp: t.start_timestamp ?? 0,
    status: s,
    timestamp: t.timestamp,
    trace_id: e ?? "",
    origin: o,
    profile_id: i == null ? void 0 : i[Rn],
    exclusive_time: i == null ? void 0 : i[ee],
    measurements: t.measurements,
    is_segment: !0,
  };
}
function cu(t) {
  return {
    type: "transaction",
    timestamp: t.timestamp,
    start_timestamp: t.start_timestamp,
    transaction: t.description,
    contexts: {
      trace: {
        trace_id: t.trace_id,
        span_id: t.span_id,
        parent_span_id: t.parent_span_id,
        op: t.op,
        status: t.status,
        origin: t.origin,
        data: {
          ...t.data,
          ...(t.profile_id && { [Rn]: t.profile_id }),
          ...(t.exclusive_time && { [ee]: t.exclusive_time }),
        },
      },
    },
    measurements: t.measurements,
  };
}
const oo = "Not capturing exception because it's already been captured.",
  io = "Discarded session because of missing or non-string release",
  ao = Symbol.for("SentryInternalError"),
  co = Symbol.for("SentryDoNotSendEventError"),
  uu = 5e3;
function en(t) {
  return { message: t, [ao]: !0 };
}
function tr(t) {
  return { message: t, [co]: !0 };
}
function uo(t) {
  return !!t && typeof t == "object" && ao in t;
}
function po(t) {
  return !!t && typeof t == "object" && co in t;
}
function lo(t, e, n, r, s) {
  let o = 0,
    i,
    a = !1;
  t.on(n, () => {
    (o = 0), clearTimeout(i), (a = !1);
  }),
    t.on(e, (c) => {
      (o += r(c)),
        o >= 8e5
          ? s(t)
          : a ||
            ((a = !0),
            (i = no(
              setTimeout(() => {
                s(t);
              }, uu),
            )));
    }),
    t.on("flush", () => {
      s(t);
    });
}
class pu {
  constructor(e) {
    var n, r, s;
    if (
      ((this._options = e),
      (this._integrations = {}),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      (this._promiseBuffer = Qn(
        ((n = e.transportOptions) == null ? void 0 : n.bufferSize) ?? ro,
      )),
      e.dsn
        ? (this._dsn = wa(e.dsn))
        : g && h.warn("No DSN provided, client will not send events."),
      this._dsn)
    ) {
      const o = Dc(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
      this._transport = e.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: o,
      });
    }
    (this._options.enableLogs =
      this._options.enableLogs ??
      ((r = this._options._experiments) == null ? void 0 : r.enableLogs)),
      this._options.enableLogs &&
        lo(this, "afterCaptureLog", "flushLogs", hu, tn),
      (this._options.enableMetrics ??
        ((s = this._options._experiments) == null ? void 0 : s.enableMetrics) ??
        !0) &&
        lo(this, "afterCaptureMetric", "flushMetrics", fu, to);
  }
  captureException(e, n, r) {
    const s = Z();
    if (Xr(e)) return g && h.log(oo), s;
    const o = { event_id: s, ...n };
    return (
      this._process(
        () =>
          this.eventFromException(e, o)
            .then((i) => this._captureEvent(i, o, r))
            .then((i) => i),
        "error",
      ),
      o.event_id
    );
  }
  captureMessage(e, n, r, s) {
    const o = { event_id: Z(), ...r },
      i = He(e) ? e : String(e),
      a = qt(e),
      c = a ? this.eventFromMessage(i, n, o) : this.eventFromException(e, o);
    return (
      this._process(
        () => c.then((u) => this._captureEvent(u, o, s)),
        a ? "unknown" : "error",
      ),
      o.event_id
    );
  }
  captureEvent(e, n, r) {
    const s = Z();
    if (n != null && n.originalException && Xr(n.originalException))
      return g && h.log(oo), s;
    const o = { event_id: s, ...n },
      i = e.sdkProcessingMetadata || {},
      a = i.capturedSpanScope,
      c = i.capturedSpanIsolationScope,
      u = fo(e.type);
    return (
      this._process(() => this._captureEvent(e, o, a || r, c), u), o.event_id
    );
  }
  captureSession(e) {
    this.sendSession(e), Zt(e, { init: !1 });
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  async flush(e) {
    const n = this._transport;
    if (!n) return !0;
    this.emit("flush");
    const r = await this._isClientDoneProcessing(e),
      s = await n.flush(e);
    return r && s;
  }
  async close(e) {
    tn(this);
    const n = await this.flush(e);
    return (this.getOptions().enabled = !1), this.emit("close"), n;
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
  }
  init() {
    (this._isEnabled() ||
      this._options.integrations.some(({ name: e }) =>
        e.startsWith("Spotlight"),
      )) &&
      this._setupIntegrations();
  }
  getIntegrationByName(e) {
    return this._integrations[e];
  }
  addIntegration(e) {
    const n = this._integrations[e.name];
    Ks(this, e, this._integrations), n || Vs(this, [e]);
  }
  sendEvent(e, n = {}) {
    this.emit("beforeSendEvent", e, n);
    let r = Xa(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) r = Fa(r, Ja(s));
    this.sendEnvelope(r).then((s) => this.emit("afterSendEvent", e, s));
  }
  sendSession(e) {
    const { release: n, environment: r = qn } = this._options;
    if ("aggregates" in e) {
      const o = e.attrs || {};
      if (!o.release && !n) {
        g && h.warn(io);
        return;
      }
      (o.release = o.release || n),
        (o.environment = o.environment || r),
        (e.attrs = o);
    } else {
      if (!e.release && !n) {
        g && h.warn(io);
        return;
      }
      (e.release = e.release || n), (e.environment = e.environment || r);
    }
    this.emit("beforeSendSession", e);
    const s = Ka(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(s);
  }
  recordDroppedEvent(e, n, r = 1) {
    if (this._options.sendClientReports) {
      const s = `${e}:${n}`;
      g && h.log(`Recording outcome: "${s}"${r > 1 ? ` (${r} times)` : ""}`),
        (this._outcomes[s] = (this._outcomes[s] || 0) + r);
    }
  }
  on(e, n) {
    const r = (this._hooks[e] = this._hooks[e] || new Set()),
      s = (...o) => n(...o);
    return (
      r.add(s),
      () => {
        r.delete(s);
      }
    );
  }
  emit(e, ...n) {
    const r = this._hooks[e];
    r && r.forEach((s) => s(...n));
  }
  async sendEnvelope(e) {
    if ((this.emit("beforeEnvelope", e), this._isEnabled() && this._transport))
      try {
        return await this._transport.send(e);
      } catch (n) {
        return g && h.error("Error while sending envelope:", n), {};
      }
    return g && h.error("Transport disabled"), {};
  }
  dispose() {}
  _setupIntegrations() {
    const { integrations: e } = this._options;
    (this._integrations = qc(this, e)), Vs(this, e);
  }
  _updateSessionFromEvent(e, n) {
    var a, c;
    let r = n.level === "fatal",
      s = !1;
    const o = (a = n.exception) == null ? void 0 : a.values;
    if (o) {
      (s = !0), (r = !1);
      for (const u of o)
        if (((c = u.mechanism) == null ? void 0 : c.handled) === !1) {
          r = !0;
          break;
        }
    }
    const i = e.status === "ok";
    ((i && e.errors === 0) || (i && r)) &&
      (Zt(e, {
        ...(r && { status: "crashed" }),
        errors: e.errors || Number(s || r),
      }),
      this.captureSession(e));
  }
  async _isClientDoneProcessing(e) {
    let n = 0;
    for (; !e || n < e; ) {
      if ((await new Promise((r) => setTimeout(r, 1)), !this._numProcessing))
        return !0;
      n++;
    }
    return !1;
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(e, n, r, s) {
    const o = this.getOptions(),
      i = Object.keys(this._integrations);
    return (
      !n.integrations && i != null && i.length && (n.integrations = i),
      this.emit("preprocessEvent", e, n),
      e.type || s.setLastEventId(e.event_id || n.event_id),
      Ec(o, e, n, r, this, s).then((a) => {
        var u;
        if (a === null) return a;
        this.emit("postprocessEvent", a, n),
          (a.contexts = {
            trace: {
              ...((u = a.contexts) == null ? void 0 : u.trace),
              ...rs(r),
            },
            ...a.contexts,
          });
        const c = Un(this, r);
        return (
          (a.sdkProcessingMetadata = {
            dynamicSamplingContext: c,
            ...a.sdkProcessingMetadata,
          }),
          a
        );
      })
    );
  }
  _captureEvent(e, n = {}, r = k(), s = et()) {
    return (
      g &&
        er(e) &&
        h.log(`Captured error event \`${so(e)[0] || "<unknown>"}\``),
      this._processEvent(e, n, r, s).then(
        (o) => o.event_id,
        (o) => {
          g &&
            (po(o) ? h.log(o.message) : uo(o) ? h.warn(o.message) : h.warn(o));
        },
      )
    );
  }
  _processEvent(e, n, r, s) {
    const o = this.getOptions(),
      { sampleRate: i } = o,
      a = ho(e),
      c = er(e),
      u = `before send for type \`${e.type || "error"}\``,
      d = typeof i > "u" ? void 0 : Te(i);
    if (c && typeof d == "number" && Et() > d)
      return (
        this.recordDroppedEvent("sample_rate", "error"),
        Wn(
          tr(
            `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
          ),
        )
      );
    const p = fo(e.type);
    return this._prepareEvent(e, n, r, s)
      .then((l) => {
        var m;
        if (l === null)
          throw (
            (this.recordDroppedEvent("event_processor", p),
            tr("An event processor returned `null`, will not send event."))
          );
        if (((m = n.data) == null ? void 0 : m.__sentry__) === !0) return l;
        const f = lu(this, o, l, n);
        return du(f, u);
      })
      .then((l) => {
        var _;
        if (l === null) {
          if ((this.recordDroppedEvent("before_send", p), a)) {
            const y = 1 + (e.spans || []).length;
            this.recordDroppedEvent("before_send", "span", y);
          }
          throw tr(`${u} returned \`null\`, will not send event.`);
        }
        const f = r.getSession() || s.getSession();
        if ((c && f && this._updateSessionFromEvent(f, l), a)) {
          const y =
              ((_ = l.sdkProcessingMetadata) == null
                ? void 0
                : _.spanCountBeforeProcessing) || 0,
            j = l.spans ? l.spans.length : 0,
            M = y - j;
          M > 0 && this.recordDroppedEvent("before_send", "span", M);
        }
        const m = l.transaction_info;
        if (a && m && l.transaction !== e.transaction) {
          const y = "custom";
          l.transaction_info = { ...m, source: y };
        }
        return this.sendEvent(l, n), l;
      })
      .then(null, (l) => {
        throw po(l) || uo(l)
          ? l
          : (this.captureException(l, {
              mechanism: { handled: !1, type: "internal" },
              data: { __sentry__: !0 },
              originalException: l,
            }),
            en(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${l}`));
      });
  }
  _process(e, n) {
    this._numProcessing++,
      this._promiseBuffer.add(e).then(
        (r) => (this._numProcessing--, r),
        (r) => (
          this._numProcessing--,
          r === Zn && this.recordDroppedEvent("queue_overflow", n),
          r
        ),
      );
  }
  _clearOutcomes() {
    const e = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.entries(e).map(([n, r]) => {
        const [s, o] = n.split(":");
        return { reason: s, category: o, quantity: r };
      })
    );
  }
  _flushOutcomes() {
    g && h.log("Flushing outcomes...");
    const e = this._clearOutcomes();
    if (e.length === 0) {
      g && h.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      g && h.log("No dsn provided, will not send outcomes");
      return;
    }
    g && h.log("Sending outcomes:", e);
    const n = iu(e, this._options.tunnel && ne(this._dsn));
    this.sendEnvelope(n);
  }
}
function fo(t) {
  return t === "replay_event" ? "replay" : t || "error";
}
function du(t, e) {
  const n = `${e} must return \`null\` or a valid event.`;
  if (he(t))
    return t.then(
      (r) => {
        if (!fe(r) && r !== null) throw en(n);
        return r;
      },
      (r) => {
        throw en(`${e} rejected with ${r}`);
      },
    );
  if (!fe(t) && t !== null) throw en(n);
  return t;
}
function lu(t, e, n, r) {
  const {
    beforeSend: s,
    beforeSendTransaction: o,
    beforeSendSpan: i,
    ignoreSpans: a,
  } = e;
  let c = n;
  if (er(c) && s) return s(c, r);
  if (ho(c)) {
    if (i || a) {
      const u = au(c);
      if (a != null && a.length && Ke(u, a)) return null;
      if (i) {
        const d = i(u);
        d ? (c = ye(n, cu(d))) : jn();
      }
      if (c.spans) {
        const d = [],
          p = c.spans;
        for (const f of p) {
          if (a != null && a.length && Ke(f, a)) {
            Ra(p, f);
            continue;
          }
          if (i) {
            const m = i(f);
            m ? d.push(m) : (jn(), d.push(f));
          } else d.push(f);
        }
        const l = c.spans.length - d.length;
        l && t.recordDroppedEvent("before_send", "span", l), (c.spans = d);
      }
    }
    if (o) {
      if (c.spans) {
        const u = c.spans.length;
        c.sdkProcessingMetadata = {
          ...n.sdkProcessingMetadata,
          spanCountBeforeProcessing: u,
        };
      }
      return o(c, r);
    }
  }
  return c;
}
function er(t) {
  return t.type === void 0;
}
function ho(t) {
  return t.type === "transaction";
}
function fu(t) {
  let e = 0;
  return t.name && (e += t.name.length * 2), (e += 8), e + mo(t.attributes);
}
function hu(t) {
  let e = 0;
  return t.message && (e += t.message.length * 2), e + mo(t.attributes);
}
function mo(t) {
  if (!t) return 0;
  let e = 0;
  return (
    Object.values(t).forEach((n) => {
      Array.isArray(n)
        ? (e += n.length * go(n[0]))
        : qt(n)
          ? (e += go(n))
          : (e += 100);
    }),
    e
  );
}
function go(t) {
  return typeof t == "string"
    ? t.length * 2
    : typeof t == "number"
      ? 8
      : typeof t == "boolean"
        ? 4
        : 0;
}
function mu(t) {
  return (
    Be(t) &&
    "__sentry_fetch_url_host__" in t &&
    typeof t.__sentry_fetch_url_host__ == "string"
  );
}
function _o(t) {
  return mu(t) ? `${t.message} (${t.__sentry_fetch_url_host__})` : t.message;
}
function gu(t, e) {
  e.debug === !0 &&
    (g
      ? h.enable()
      : vt(() => {
          console.warn(
            "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
          );
        })),
    k().update(e.initialScope);
  const n = new t(e);
  return _u(n), n.init(), n;
}
function _u(t) {
  k().setClient(t);
}
const yu = "thismessage:/";
function yo(t) {
  return "isRelative" in t;
}
function vo(t, e) {
  const n = t.indexOf("://") <= 0 && t.indexOf("//") !== 0,
    r = n ? yu : void 0;
  try {
    if ("canParse" in URL && !URL.canParse(t, r)) return;
    const s = new URL(t, r);
    return n
      ? { isRelative: n, pathname: s.pathname, search: s.search, hash: s.hash }
      : s;
  } catch {}
}
function vu(t) {
  if (yo(t)) return t.pathname;
  const e = new URL(t);
  return (
    (e.search = ""),
    (e.hash = ""),
    ["80", "443"].includes(e.port) && (e.port = ""),
    e.password && (e.password = "%filtered%"),
    e.username && (e.username = "%filtered%"),
    e.toString()
  );
}
function se(t) {
  if (!t) return {};
  const e = t.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
  );
  if (!e) return {};
  const n = e[6] || "",
    r = e[8] || "";
  return {
    host: e[4],
    path: e[5],
    protocol: e[2],
    search: n,
    hash: r,
    relative: e[5] + n + r,
  };
}
function bu(t) {
  return t.split(/[?#]/, 1)[0];
}
function It(t, e = !0) {
  if (t.startsWith("data:")) {
    const n = t.match(/^data:([^;,]+)/),
      r = n ? n[1] : "text/plain",
      s = t.includes(";base64,"),
      o = t.indexOf(",");
    let i = "";
    if (e && o !== -1) {
      const a = t.slice(o + 1);
      i = a.length > 10 ? `${a.slice(0, 10)}... [truncated]` : a;
    }
    return `data:${r}${s ? ",base64" : ""}${i ? `,${i}` : ""}`;
  }
  return t;
}
function Su(t) {
  var e;
  "aggregates" in t
    ? ((e = t.attrs) == null ? void 0 : e.ip_address) === void 0 &&
      (t.attrs = { ...t.attrs, ip_address: "{{auto}}" })
    : t.ipAddress === void 0 && (t.ipAddress = "{{auto}}");
}
function bo(t, e, n = [e], r = "npm") {
  const s = ((t._metadata = t._metadata || {}).sdk = t._metadata.sdk || {});
  s.name ||
    ((s.name = `sentry.javascript.${e}`),
    (s.packages = n.map((o) => ({ name: `${r}:@sentry/${o}`, version: Dt }))),
    (s.version = Dt));
}
function So(t = {}) {
  const e = t.client || w();
  if (!Oc() || !e) return {};
  const n = Mt(),
    r = te(n);
  if (r.getTraceData) return r.getTraceData(t);
  const s = t.scope || k(),
    o = t.span || J(),
    i = o ? $a(o) : Eu(s),
    a = o ? mt(o) : Un(e, s),
    c = fa(a);
  if (!ls.test(i))
    return h.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
  const u = { "sentry-trace": i, baggage: c };
  return t.propagateTraceparent && (u.traceparent = o ? Ca(o) : wu(s)), u;
}
function Eu(t) {
  const {
    traceId: e,
    sampled: n,
    propagationSpanId: r,
  } = t.getPropagationContext();
  return fs(e, r, n);
}
function wu(t) {
  const {
    traceId: e,
    sampled: n,
    propagationSpanId: r,
  } = t.getPropagationContext();
  return hs(e, r, n);
}
const Tu = 100;
function Jt(t, e) {
  const n = w(),
    r = et();
  if (!n) return;
  const { beforeBreadcrumb: s = null, maxBreadcrumbs: o = Tu } = n.getOptions();
  if (o <= 0) return;
  const i = { timestamp: Ft(), ...t },
    a = s ? vt(() => s(i, e)) : i;
  a !== null &&
    (n.emit && n.emit("beforeAddBreadcrumb", a, e), r.addBreadcrumb(a, o));
}
let Eo;
const xu = "FunctionToString",
  wo = new WeakMap(),
  ku = () => ({
    name: xu,
    setupOnce() {
      Eo = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...t) {
          const e = In(this),
            n = wo.has(w()) && e !== void 0 ? e : this;
          return Eo.apply(n, t);
        };
      } catch {}
    },
    setup(t) {
      wo.set(t, !0);
    },
  }),
  Iu = ku,
  $u = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    /^Can't find variable: gmo$/,
    /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
    /can't redefine non-configurable property "solana"/,
    /vv\(\)\.getRestrictions is not a function/,
    /Can't find variable: _AutofillCallbackHandler/,
    /Object Not Found Matching Id:\d+, MethodName:simulateEvent/,
    /^Java exception was raised during method invocation$/,
  ],
  Cu = "EventFilters",
  Pu = (t = {}) => {
    let e;
    return {
      name: Cu,
      setup(n) {
        const r = n.getOptions();
        e = To(t, r);
      },
      processEvent(n, r, s) {
        if (!e) {
          const o = s.getOptions();
          e = To(t, o);
        }
        return Au(n, e) ? null : n;
      },
    };
  },
  Ou = (t = {}) => ({ ...Pu(t), name: "InboundFilters" });
function To(t = {}, e = {}) {
  return {
    allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
    denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
    ignoreErrors: [
      ...(t.ignoreErrors || []),
      ...(e.ignoreErrors || []),
      ...(t.disableErrorDefaults ? [] : $u),
    ],
    ignoreTransactions: [
      ...(t.ignoreTransactions || []),
      ...(e.ignoreTransactions || []),
    ],
  };
}
function Au(t, e) {
  if (t.type) {
    if (t.type === "transaction" && Ru(t, e.ignoreTransactions))
      return (
        g &&
          h.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Ut(t)}`),
        !0
      );
  } else {
    if (Lu(t, e.ignoreErrors))
      return (
        g &&
          h.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ut(t)}`),
        !0
      );
    if (ju(t))
      return (
        g &&
          h.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Ut(t)}`),
        !0
      );
    if (Nu(t, e.denyUrls))
      return (
        g &&
          h.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ut(t)}.
Url: ${nn(t)}`),
        !0
      );
    if (!Du(t, e.allowUrls))
      return (
        g &&
          h.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ut(t)}.
Url: ${nn(t)}`),
        !0
      );
  }
  return !1;
}
function Lu(t, e) {
  return e != null && e.length ? so(t).some((n) => wt(n, e)) : !1;
}
function Ru(t, e) {
  if (!(e != null && e.length)) return !1;
  const n = t.transaction;
  return n ? wt(n, e) : !1;
}
function Nu(t, e) {
  if (!(e != null && e.length)) return !1;
  const n = nn(t);
  return n ? wt(n, e) : !1;
}
function Du(t, e) {
  if (!(e != null && e.length)) return !0;
  const n = nn(t);
  return n ? wt(n, e) : !0;
}
function Mu(t = []) {
  for (let e = t.length - 1; e >= 0; e--) {
    const n = t[e];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null;
  }
  return null;
}
function nn(t) {
  var e, n, r;
  try {
    const s =
      (r =
        (n = [...(((e = t.exception) == null ? void 0 : e.values) ?? [])]
          .reverse()
          .find((o) => {
            var i, a, c;
            return (
              ((i = o.mechanism) == null ? void 0 : i.parent_id) === void 0 &&
              ((c = (a = o.stacktrace) == null ? void 0 : a.frames) == null
                ? void 0
                : c.length)
            );
          })) == null
          ? void 0
          : n.stacktrace) == null
        ? void 0
        : r.frames;
    return s ? Mu(s) : null;
  } catch {
    return g && h.error(`Cannot extract url for event ${Ut(t)}`), null;
  }
}
function ju(t) {
  var e, n;
  return (n = (e = t.exception) == null ? void 0 : e.values) != null && n.length
    ? !t.message &&
        !t.exception.values.some(
          (r) => r.stacktrace || (r.type && r.type !== "Error") || r.value,
        )
    : !1;
}
function qu(t, e, n, r, s, o) {
  var a;
  if (
    !((a = s.exception) != null && a.values) ||
    !o ||
    !dt(o.originalException, Error)
  )
    return;
  const i =
    s.exception.values.length > 0
      ? s.exception.values[s.exception.values.length - 1]
      : void 0;
  i &&
    (s.exception.values = nr(
      t,
      e,
      r,
      o.originalException,
      n,
      s.exception.values,
      i,
      0,
    ));
}
function nr(t, e, n, r, s, o, i, a) {
  if (o.length >= n + 1) return o;
  let c = [...o];
  if (dt(r[s], Error)) {
    ko(i, a, r);
    const u = t(e, r[s]),
      d = c.length;
    Io(u, s, d, a), (c = nr(t, e, n, r[s], s, [u, ...c], u, d));
  }
  return (
    xo(r) &&
      r.errors.forEach((u, d) => {
        if (dt(u, Error)) {
          ko(i, a, r);
          const p = t(e, u),
            l = c.length;
          Io(p, `errors[${d}]`, l, a), (c = nr(t, e, n, u, s, [p, ...c], p, l));
        }
      }),
    c
  );
}
function xo(t) {
  return Array.isArray(t.errors);
}
function ko(t, e, n) {
  t.mechanism = {
    handled: !0,
    type: "auto.core.linked_errors",
    ...(xo(n) && { is_exception_group: !0 }),
    ...t.mechanism,
    exception_id: e,
  };
}
function Io(t, e, n, r) {
  t.mechanism = {
    handled: !0,
    ...t.mechanism,
    type: "chained",
    source: e,
    exception_id: n,
    parent_id: r,
  };
}
function $o(t) {
  const e = "console";
  bt(e, t), St(e, Uu);
}
function Uu() {
  "console" in b &&
    Cr.forEach(function (t) {
      t in b.console &&
        W(b.console, t, function (e) {
          return (
            (qe[t] = e),
            function (...n) {
              var r;
              K("console", { args: n, level: t }),
                (r = qe[t]) == null || r.apply(b.console, n);
            }
          );
        });
    });
}
function Fu(t) {
  return t === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(t)
      ? t
      : "log";
}
const Bu = "Dedupe",
  Hu = () => {
    let t;
    return {
      name: Bu,
      processEvent(e) {
        if (e.type) return e;
        try {
          if (Wu(e, t))
            return (
              g &&
                h.warn(
                  "Event dropped due to being a duplicate of previously captured event.",
                ),
              null
            );
        } catch {}
        return (t = e);
      },
    };
  },
  zu = Hu;
function Wu(t, e) {
  return e ? !!(Ju(t, e) || Gu(t, e)) : !1;
}
function Ju(t, e) {
  const n = t.message,
    r = e.message;
  return !(
    (!n && !r) ||
    (n && !r) ||
    (!n && r) ||
    n !== r ||
    !Po(t, e) ||
    !Co(t, e)
  );
}
function Gu(t, e) {
  const n = Oo(e),
    r = Oo(t);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !Po(t, e) ||
    !Co(t, e)
  );
}
function Co(t, e) {
  let n = Nr(t),
    r = Nr(e);
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length))
    return !1;
  for (let s = 0; s < r.length; s++) {
    const o = r[s],
      i = n[s];
    if (
      o.filename !== i.filename ||
      o.lineno !== i.lineno ||
      o.colno !== i.colno ||
      o.function !== i.function
    )
      return !1;
  }
  return !0;
}
function Po(t, e) {
  let n = t.fingerprint,
    r = e.fingerprint;
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r)) return !1;
  (n = n), (r = r);
  try {
    return n.join("") === r.join("");
  } catch {
    return !1;
  }
}
function Oo(t) {
  var e, n;
  return (n = (e = t.exception) == null ? void 0 : e.values) == null
    ? void 0
    : n[0];
}
const Yu = "ConversationId",
  Vu = () => ({
    name: Yu,
    setup(t) {
      t.on("spanStart", (e) => {
        const n = k().getScopeData(),
          r = et().getScopeData(),
          s = n.conversationId || r.conversationId;
        s && e.setAttribute(ia, s);
      });
    },
  }),
  Ku = Vu;
function Xu(t, e, n, r, s) {
  if (!t.fetchData) return;
  const { method: o, url: i } = t.fetchData,
    a = nt() && e(i);
  if (t.endTimestamp) {
    const f = t.fetchData.__span;
    if (!f) return;
    const m = r[f];
    m && (a && (tp(m, t), Zu(m, t, s)), delete r[f]);
    return;
  }
  const { spanOrigin: c = "auto.http.browser", propagateTraceparent: u = !1 } =
      typeof s == "object" ? s : { spanOrigin: s },
    d = !!J(),
    p = a && d ? re(np(i, o, c)) : new zt();
  if (
    ((t.fetchData.__span = p.spanContext().spanId),
    (r[p.spanContext().spanId] = p),
    n(t.fetchData.url))
  ) {
    const f = t.args[0],
      m = { ...(t.args[1] || {}) },
      _ = Qu(f, m, nt() && d ? p : void 0, u);
    _ && ((t.args[1] = m), (m.headers = _));
  }
  const l = w();
  if (l) {
    const f = {
      input: t.args,
      response: t.response,
      startTimestamp: t.startTimestamp,
      endTimestamp: t.endTimestamp,
    };
    l.emit("beforeOutgoingRequestSpan", p, f);
  }
  return p;
}
function Zu(t, e, n) {
  var r, s;
  (s = typeof n == "object" && n !== null ? n.onRequestSpanEnd : void 0) ==
    null ||
    s(t, {
      headers: (r = e.response) == null ? void 0 : r.headers,
      error: e.error,
    });
}
function Qu(t, e, n, r) {
  const s = So({ span: n, propagateTraceparent: r }),
    o = s["sentry-trace"],
    i = s.baggage,
    a = s.traceparent;
  if (!o) return;
  const c = e.headers || (xn(t) ? t.headers : void 0);
  if (c)
    if (ep(c)) {
      const u = new Headers(c);
      if (
        (u.get("sentry-trace") || u.set("sentry-trace", o),
        r && a && !u.get("traceparent") && u.set("traceparent", a),
        i)
      ) {
        const d = u.get("baggage");
        d ? rn(d) || u.set("baggage", `${d},${i}`) : u.set("baggage", i);
      }
      return u;
    } else if (Array.isArray(c)) {
      const u = [...c];
      c.find((p) => p[0] === "sentry-trace") || u.push(["sentry-trace", o]),
        r &&
          a &&
          !c.find((p) => p[0] === "traceparent") &&
          u.push(["traceparent", a]);
      const d = c.find((p) => p[0] === "baggage" && rn(p[1]));
      return i && !d && u.push(["baggage", i]), u;
    } else {
      const u = "sentry-trace" in c ? c["sentry-trace"] : void 0,
        d = "traceparent" in c ? c.traceparent : void 0,
        p = "baggage" in c ? c.baggage : void 0,
        l = p ? (Array.isArray(p) ? [...p] : [p]) : [],
        f = p && (Array.isArray(p) ? p.find((_) => rn(_)) : rn(p));
      i && !f && l.push(i);
      const m = {
        ...c,
        "sentry-trace": u ?? o,
        baggage: l.length > 0 ? l.join(",") : void 0,
      };
      return r && a && !d && (m.traceparent = a), m;
    }
  else return { ...s };
}
function tp(t, e) {
  var n, r;
  if (e.response) {
    is(t, e.response.status);
    const s =
      (r = (n = e.response) == null ? void 0 : n.headers) == null
        ? void 0
        : r.get("content-length");
    if (s) {
      const o = parseInt(s);
      o > 0 && t.setAttribute("http.response_content_length", o);
    }
  } else e.error && t.setStatus({ code: N, message: "internal_error" });
  t.end();
}
function rn(t) {
  return t.split(",").some((e) => e.trim().startsWith(Ye));
}
function ep(t) {
  return typeof Headers < "u" && dt(t, Headers);
}
function np(t, e, n) {
  if (t.startsWith("data:")) {
    const o = It(t);
    return { name: `${e} ${o}`, attributes: Ao(t, void 0, e, n) };
  }
  const r = vo(t),
    s = r ? vu(r) : t;
  return { name: `${e} ${s}`, attributes: Ao(t, r, e, n) };
}
function Ao(t, e, n, r) {
  const s = {
    url: It(t),
    type: "fetch",
    "http.method": n,
    [A]: r,
    [Tt]: "http.client",
  };
  return (
    e &&
      (yo(e) || ((s["http.url"] = It(e.href)), (s["server.address"] = e.host)),
      e.search && (s["http.query"] = e.search),
      e.hash && (s["http.fragment"] = e.hash)),
    s
  );
}
function Lo(t, e, n) {
  return "util" in b && typeof b.util.format == "function"
    ? b.util.format(...t)
    : rp(t, e, n);
}
function rp(t, e, n) {
  return t
    .map((r) => (qt(r) ? String(r) : JSON.stringify(ot(r, e, n))))
    .join(" ");
}
function sp(t) {
  return /%[sdifocO]/.test(t);
}
function op(t, e) {
  const n = {},
    r = new Array(e.length).fill("{}").join(" ");
  return (
    (n["sentry.message.template"] = `${t} ${r}`),
    e.forEach((s, o) => {
      n[`sentry.message.parameter.${o}`] = s;
    }),
    n
  );
}
const ip = "ConsoleLogs",
  Ro = { [A]: "auto.log.console" },
  ap = (t = {}) => {
    const e = t.levels || Cr;
    return {
      name: ip,
      setup(n) {
        const {
          enableLogs: r,
          normalizeDepth: s = 3,
          normalizeMaxBreadth: o = 1e3,
        } = n.getOptions();
        if (!r) {
          g &&
            h.warn(
              "`enableLogs` is not enabled, ConsoleLogs integration disabled",
            );
          return;
        }
        $o(({ args: i, level: a }) => {
          if (w() !== n || !e.includes(a)) return;
          const c = i[0],
            u = i.slice(1);
          if (a === "assert") {
            if (!c) {
              const f =
                u.length > 0
                  ? `Assertion failed: ${Lo(u, s, o)}`
                  : "Assertion failed";
              Zs({ level: "error", message: f, attributes: Ro });
            }
            return;
          }
          const d = a === "log",
            p = i.length > 1 && typeof i[0] == "string" && !sp(i[0]),
            l = { ...Ro, ...(p ? op(c, u) : {}) };
          Zs({
            level: d ? "info" : a,
            message: Lo(i, s, o),
            severityNumber: d ? 10 : void 0,
            attributes: l,
          });
        });
      },
    };
  },
  cp = ap;
function No(t) {
  if (t !== void 0)
    return t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0;
}
const Ie = b;
function up() {
  return "history" in Ie && !!Ie.history;
}
function pp() {
  if (!("fetch" in Ie)) return !1;
  try {
    return new Headers(), new Request("data:,"), new Response(), !0;
  } catch {
    return !1;
  }
}
function rr(t) {
  return (
    t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
  );
}
function dp() {
  var n;
  if (typeof EdgeRuntime == "string") return !0;
  if (!pp()) return !1;
  if (rr(Ie.fetch)) return !0;
  let t = !1;
  const e = Ie.document;
  if (e && typeof e.createElement == "function")
    try {
      const r = e.createElement("iframe");
      (r.hidden = !0),
        e.head.appendChild(r),
        (n = r.contentWindow) != null &&
          n.fetch &&
          (t = rr(r.contentWindow.fetch)),
        e.head.removeChild(r);
    } catch (r) {
      g &&
        h.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          r,
        );
    }
  return t;
}
function Do(t, e) {
  const n = "fetch";
  bt(n, t), St(n, () => Mo(void 0, e));
}
function lp(t) {
  const e = "fetch-body-resolved";
  bt(e, t), St(e, () => Mo(hp));
}
function Mo(t, e = !1) {
  (e && !dp()) ||
    W(b, "fetch", function (n) {
      return function (...r) {
        const s = new Error(),
          { method: o, url: i } = mp(r),
          a = {
            args: r,
            fetchData: { method: o, url: i },
            startTimestamp: R() * 1e3,
            virtualError: s,
            headers: gp(r),
          };
        return (
          t || K("fetch", { ...a }),
          n.apply(b, r).then(
            async (c) => (
              t
                ? t(c)
                : K("fetch", { ...a, endTimestamp: R() * 1e3, response: c }),
              c
            ),
            (c) => {
              var d;
              K("fetch", { ...a, endTimestamp: R() * 1e3, error: c }),
                Be(c) &&
                  c.stack === void 0 &&
                  ((c.stack = s.stack), U(c, "framesToPop", 1));
              const u =
                ((d = w()) == null
                  ? void 0
                  : d.getOptions().enhanceFetchErrorMessages) ?? "always";
              if (
                u !== !1 &&
                c instanceof TypeError &&
                (c.message === "Failed to fetch" ||
                  c.message === "Load failed" ||
                  c.message ===
                    "NetworkError when attempting to fetch resource.")
              )
                try {
                  const p = new URL(a.fetchData.url).host;
                  u === "always"
                    ? (c.message = `${c.message} (${p})`)
                    : U(c, "__sentry_fetch_url_host__", p);
                } catch {}
              throw c;
            },
          )
        );
      };
    });
}
async function fp(t, e) {
  if (t != null && t.body) {
    const n = t.body,
      r = n.getReader(),
      s = setTimeout(() => {
        n.cancel().then(null, () => {});
      }, 90 * 1e3);
    let o = !0;
    for (; o; ) {
      let i;
      try {
        i = setTimeout(() => {
          n.cancel().then(null, () => {});
        }, 5e3);
        const { done: a } = await r.read();
        clearTimeout(i), a && (e(), (o = !1));
      } catch {
        o = !1;
      } finally {
        clearTimeout(i);
      }
    }
    clearTimeout(s), r.releaseLock(), n.cancel().then(null, () => {});
  }
}
function hp(t) {
  let e;
  try {
    e = t.clone();
  } catch {
    return;
  }
  fp(e, () => {
    K("fetch-body-resolved", { endTimestamp: R() * 1e3, response: t });
  });
}
function sn(t, e) {
  return !!t && typeof t == "object" && !!t[e];
}
function jo(t) {
  return typeof t == "string"
    ? t
    : t
      ? sn(t, "url")
        ? t.url
        : t.toString
          ? t.toString()
          : ""
      : "";
}
function mp(t) {
  if (t.length === 0) return { method: "GET", url: "" };
  if (t.length === 2) {
    const [n, r] = t;
    return {
      url: jo(n),
      method: sn(r, "method")
        ? String(r.method).toUpperCase()
        : xn(n) && sn(n, "method")
          ? String(n.method).toUpperCase()
          : "GET",
    };
  }
  const e = t[0];
  return {
    url: jo(e),
    method: sn(e, "method") ? String(e.method).toUpperCase() : "GET",
  };
}
function gp(t) {
  const [e, n] = t;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers)
      return new Headers(n.headers);
    if (xn(e)) return new Headers(e.headers);
  } catch {}
}
function _p() {
  return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
function yp() {
  return "npm";
}
function vp() {
  return (
    !_p() &&
    Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
      "[object process]"
  );
}
function bp() {
  return typeof window < "u" && (!vp() || Sp());
}
function Sp() {
  var t;
  return ((t = b.process) == null ? void 0 : t.type) === "renderer";
}
const S = b;
let sr = 0;
function qo() {
  return sr > 0;
}
function Ep() {
  sr++,
    setTimeout(() => {
      sr--;
    });
}
function oe(t, e = {}) {
  function n(s) {
    return typeof s == "function";
  }
  if (!n(t)) return t;
  try {
    const s = t.__sentry_wrapped__;
    if (s) return typeof s == "function" ? s : t;
    if (In(t)) return t;
  } catch {
    return t;
  }
  const r = function (...s) {
    try {
      const o = s.map((i) => oe(i, e));
      return t.apply(this, o);
    } catch (o) {
      throw (
        (Ep(),
        Je((i) => {
          i.addEventProcessor(
            (a) => (
              e.mechanism && (Pn(a, void 0), Xt(a, e.mechanism)),
              (a.extra = { ...a.extra, arguments: s }),
              a
            ),
          ),
            Cc(o);
        }),
        o)
      );
    }
  };
  try {
    for (const s in t)
      Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s]);
  } catch {}
  Wr(r, t), U(t, "__sentry_wrapped__", r);
  try {
    Object.getOwnPropertyDescriptor(r, "name").configurable &&
      Object.defineProperty(r, "name", {
        get() {
          return t.name;
        },
      });
  } catch {}
  return r;
}
function or() {
  const t = me(),
    { referrer: e } = S.document || {},
    { userAgent: n } = S.navigator || {},
    r = { ...(e && { Referer: e }), ...(n && { "User-Agent": n }) };
  return { url: t, headers: r };
}
function ir(t, e) {
  const n = cr(t, e),
    r = { type: Ip(e), value: $p(e) };
  return (
    n.length && (r.stacktrace = { frames: n }),
    r.type === void 0 &&
      r.value === "" &&
      (r.value = "Unrecoverable error caught"),
    r
  );
}
function wp(t, e, n, r) {
  var c;
  const s = (c = w()) == null ? void 0 : c.getOptions().normalizeDepth,
    o = Lp(e),
    i = { __serialized__: ks(e, s) };
  if (o) return { exception: { values: [ir(t, o)] }, extra: i };
  const a = {
    exception: {
      values: [
        {
          type: ze(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
          value: Op(e, { isUnhandledRejection: r }),
        },
      ],
    },
    extra: i,
  };
  if (n) {
    const u = cr(t, n);
    u.length && (a.exception.values[0].stacktrace = { frames: u });
  }
  return a;
}
function ar(t, e) {
  return { exception: { values: [ir(t, e)] } };
}
function cr(t, e) {
  const n = e.stacktrace || e.stack || "",
    r = xp(e),
    s = kp(e);
  try {
    return t(n, r, s);
  } catch {}
  return [];
}
const Tp = /Minified React error #\d+;/i;
function xp(t) {
  return t && Tp.test(t.message) ? 1 : 0;
}
function kp(t) {
  return typeof t.framesToPop == "number" ? t.framesToPop : 0;
}
function Uo(t) {
  return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u"
    ? t instanceof WebAssembly.Exception
    : !1;
}
function Ip(t) {
  const e = t == null ? void 0 : t.name;
  return !e && Uo(t)
    ? t.message && Array.isArray(t.message) && t.message.length == 2
      ? t.message[0]
      : "WebAssembly.Exception"
    : e;
}
function $p(t) {
  const e = t == null ? void 0 : t.message;
  return Uo(t)
    ? Array.isArray(t.message) && t.message.length == 2
      ? t.message[1]
      : "wasm exception"
    : e
      ? e.error && typeof e.error.message == "string"
        ? _o(e.error)
        : _o(t)
      : "No error message";
}
function Cp(t, e, n, r) {
  const s = (n == null ? void 0 : n.syntheticException) || void 0,
    o = ur(t, e, s, r);
  return (
    Xt(o),
    (o.level = "error"),
    n != null && n.event_id && (o.event_id = n.event_id),
    xe(o)
  );
}
function Pp(t, e, n = "info", r, s) {
  const o = (r == null ? void 0 : r.syntheticException) || void 0,
    i = pr(t, e, o, s);
  return (
    (i.level = n), r != null && r.event_id && (i.event_id = r.event_id), xe(i)
  );
}
function ur(t, e, n, r, s) {
  let o;
  if (Fr(e) && e.error) return ar(t, e.error);
  if (Br(e) || Ri(e)) {
    const i = e;
    if ("stack" in e) o = ar(t, e);
    else {
      const a = i.name || (Br(i) ? "DOMError" : "DOMException"),
        c = i.message ? `${a}: ${i.message}` : a;
      (o = pr(t, c, n, r)), Pn(o, c);
    }
    return (
      "code" in i && (o.tags = { ...o.tags, "DOMException.code": `${i.code}` }),
      o
    );
  }
  return Be(e)
    ? ar(t, e)
    : fe(e) || ze(e)
      ? ((o = wp(t, e, n, s)), Xt(o, { synthetic: !0 }), o)
      : ((o = pr(t, e, n, r)), Pn(o, `${e}`), Xt(o, { synthetic: !0 }), o);
}
function pr(t, e, n, r) {
  const s = {};
  if (r && n) {
    const o = cr(t, n);
    o.length &&
      (s.exception = { values: [{ value: e, stacktrace: { frames: o } }] }),
      Xt(s, { synthetic: !0 });
  }
  if (He(e)) {
    const { __sentry_template_string__: o, __sentry_template_values__: i } = e;
    return (s.logentry = { message: o, params: i }), s;
  }
  return (s.message = e), s;
}
function Op(t, { isUnhandledRejection: e }) {
  const n = Ui(t),
    r = e ? "promise rejection" : "exception";
  return Fr(t)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``
    : ze(t)
      ? `Event \`${Ap(t)}\` (type=${t.type}) captured as ${r}`
      : `Object captured as ${r} with keys: ${n}`;
}
function Ap(t) {
  try {
    const e = Object.getPrototypeOf(t);
    return e ? e.constructor.name : void 0;
  } catch {}
}
function Lp(t) {
  return Object.values(t).find((e) => e instanceof Error);
}
class Rp extends pu {
  constructor(e) {
    var d;
    const n = Np(e),
      r = S.SENTRY_SDK_SOURCE || yp();
    bo(n, "browser", ["browser"], r),
      (d = n._metadata) != null &&
        d.sdk &&
        (n._metadata.sdk.settings = {
          infer_ip: n.sendDefaultPii ? "auto" : "never",
          ...n._metadata.sdk.settings,
        }),
      super(n);
    const {
        sendDefaultPii: s,
        sendClientReports: o,
        enableLogs: i,
        _experiments: a,
        enableMetrics: c,
      } = this._options,
      u = c ?? (a == null ? void 0 : a.enableMetrics) ?? !0;
    S.document &&
      (o || i || u) &&
      S.document.addEventListener("visibilitychange", () => {
        S.document.visibilityState === "hidden" &&
          (o && this._flushOutcomes(), i && tn(this), u && to(this));
      }),
      s && this.on("beforeSendSession", Su);
  }
  eventFromException(e, n) {
    return Cp(this._options.stackParser, e, n, this._options.attachStacktrace);
  }
  eventFromMessage(e, n = "info", r) {
    return Pp(
      this._options.stackParser,
      e,
      n,
      r,
      this._options.attachStacktrace,
    );
  }
  _prepareEvent(e, n, r, s) {
    return (
      (e.platform = e.platform || "javascript"), super._prepareEvent(e, n, r, s)
    );
  }
}
function Np(t) {
  var e;
  return {
    release:
      typeof __SENTRY_RELEASE__ == "string"
        ? __SENTRY_RELEASE__
        : (e = S.SENTRY_RELEASE) == null
          ? void 0
          : e.id,
    sendClientReports: !0,
    parentSpanIsAlwaysRootSpan: !0,
    ...t,
  };
}
const $e = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  v = b,
  Dp = (t, e) => (t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good"),
  Ce = (t, e, n, r) => {
    let s, o;
    return (i) => {
      e.value >= 0 &&
        (i || r) &&
        ((o = e.value - (s ?? 0)),
        (o || s === void 0) &&
          ((s = e.value), (e.delta = o), (e.rating = Dp(e.value, n)), t(e)));
    };
  },
  Pe = (t = !0) => {
    var n, r;
    const e =
      (r = (n = v.performance) == null ? void 0 : n.getEntriesByType) == null
        ? void 0
        : r.call(n, "navigation")[0];
    if (!t || (e && e.responseStart > 0 && e.responseStart < performance.now()))
      return e;
  },
  ie = () => {
    var t;
    return ((t = Pe()) == null ? void 0 : t.activationStart) ?? 0;
  };
function $t(t, e, n) {
  v.document && v.addEventListener(t, e, n);
}
function on(t, e, n) {
  v.document && v.removeEventListener(t, e, n);
}
let ae = -1;
const Fo = new Set(),
  Mp = () => {
    var t, e;
    return ((t = v.document) == null ? void 0 : t.visibilityState) ===
      "hidden" && !((e = v.document) != null && e.prerendering)
      ? 0
      : 1 / 0;
  },
  an = (t) => {
    if (jp(t) && ae > -1) {
      if (t.type === "visibilitychange" || t.type === "pagehide")
        for (const e of Fo) e();
      isFinite(ae) ||
        ((ae = t.type === "visibilitychange" ? t.timeStamp : 0),
        on("prerenderingchange", an, !0));
    }
  },
  Oe = () => {
    var t;
    if (v.document && ae < 0) {
      const e = ie();
      (ae =
        (v.document.prerendering ||
        (t = globalThis.performance
          .getEntriesByType("visibility-state")
          .filter((n) => n.name === "hidden" && n.startTime > e)[0]) == null
          ? void 0
          : t.startTime) ?? Mp()),
        $t("visibilitychange", an, !0),
        $t("pagehide", an, !0),
        $t("prerenderingchange", an, !0);
    }
    return {
      get firstHiddenTime() {
        return ae;
      },
      onHidden(e) {
        Fo.add(e);
      },
    };
  };
function jp(t) {
  var e;
  return (
    t.type === "pagehide" ||
    ((e = v.document) == null ? void 0 : e.visibilityState) === "hidden"
  );
}
const qp = () =>
    `v5-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
  Ae = (t, e = -1) => {
    var s, o;
    const n = Pe();
    let r = "navigate";
    return (
      n &&
        (((s = v.document) != null && s.prerendering) || ie() > 0
          ? (r = "prerender")
          : (o = v.document) != null && o.wasDiscarded
            ? (r = "restore")
            : n.type && (r = n.type.replace(/_/g, "-"))),
      {
        name: t,
        value: e,
        rating: "good",
        delta: 0,
        entries: [],
        id: qp(),
        navigationType: r,
      }
    );
  },
  dr = new WeakMap();
function lr(t, e) {
  try {
    return dr.get(t) || dr.set(t, new e()), dr.get(t);
  } catch {
    return new e();
  }
}
class yn {
  constructor() {
    yn.prototype.__init.call(this), yn.prototype.__init2.call(this);
  }
  __init() {
    this._sessionValue = 0;
  }
  __init2() {
    this._sessionEntries = [];
  }
  _processEntry(e) {
    var s;
    if (e.hadRecentInput) return;
    const n = this._sessionEntries[0],
      r = this._sessionEntries[this._sessionEntries.length - 1];
    this._sessionValue &&
    n &&
    r &&
    e.startTime - r.startTime < 1e3 &&
    e.startTime - n.startTime < 5e3
      ? ((this._sessionValue += e.value), this._sessionEntries.push(e))
      : ((this._sessionValue = e.value), (this._sessionEntries = [e])),
      (s = this._onAfterProcessingUnexpectedShift) == null || s.call(this, e);
  }
}
const ce = (t, e, n = {}) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(t)) {
        const r = new PerformanceObserver((s) => {
          Promise.resolve().then(() => {
            e(s.getEntries());
          });
        });
        return r.observe({ type: t, buffered: !0, ...n }), r;
      }
    } catch {}
  },
  fr = (t) => {
    let e = !1;
    return () => {
      e || (t(), (e = !0));
    };
  },
  cn = (t) => {
    var e;
    (e = v.document) != null && e.prerendering
      ? addEventListener("prerenderingchange", () => t(), !0)
      : t();
  },
  Up = [1800, 3e3],
  Fp = (t, e = {}) => {
    cn(() => {
      const n = Oe(),
        r = Ae("FCP");
      let s;
      const o = ce("paint", (i) => {
        for (const a of i)
          a.name === "first-contentful-paint" &&
            (o.disconnect(),
            a.startTime < n.firstHiddenTime &&
              ((r.value = Math.max(a.startTime - ie(), 0)),
              r.entries.push(a),
              s(!0)));
      });
      o && (s = Ce(t, r, Up, e.reportAllChanges));
    });
  },
  Bp = [0.1, 0.25],
  Hp = (t, e = {}) => {
    Fp(
      fr(() => {
        var c;
        const n = Ae("CLS", 0);
        let r;
        const s = Oe(),
          o = lr(e, yn),
          i = (u) => {
            for (const d of u) o._processEntry(d);
            o._sessionValue > n.value &&
              ((n.value = o._sessionValue),
              (n.entries = o._sessionEntries),
              r());
          },
          a = ce("layout-shift", i);
        a &&
          ((r = Ce(t, n, Bp, e.reportAllChanges)),
          s.onHidden(() => {
            i(a.takeRecords()), r(!0);
          }),
          (c = v == null ? void 0 : v.setTimeout) == null || c.call(v, r));
      }),
    );
  };
let Bo = 0,
  hr = 1 / 0,
  un = 0;
const zp = (t) => {
  t.forEach((e) => {
    e.interactionId &&
      ((hr = Math.min(hr, e.interactionId)),
      (un = Math.max(un, e.interactionId)),
      (Bo = un ? (un - hr) / 7 + 1 : 0));
  });
};
let mr;
const Ho = () => (mr ? Bo : performance.interactionCount || 0),
  Wp = () => {
    "interactionCount" in performance ||
      mr ||
      (mr = ce("event", zp, {
        type: "event",
        buffered: !0,
        durationThreshold: 0,
      }));
  },
  gr = 10;
let zo = 0;
const Jp = () => Ho() - zo;
class vn {
  constructor() {
    vn.prototype.__init.call(this), vn.prototype.__init2.call(this);
  }
  __init() {
    this._longestInteractionList = [];
  }
  __init2() {
    this._longestInteractionMap = new Map();
  }
  _resetInteractions() {
    (zo = Ho()),
      (this._longestInteractionList.length = 0),
      this._longestInteractionMap.clear();
  }
  _estimateP98LongestInteraction() {
    const e = Math.min(
      this._longestInteractionList.length - 1,
      Math.floor(Jp() / 50),
    );
    return this._longestInteractionList[e];
  }
  _processEntry(e) {
    var s, o;
    if (
      ((s = this._onBeforeProcessingEntry) == null || s.call(this, e),
      !(e.interactionId || e.entryType === "first-input"))
    )
      return;
    const n = this._longestInteractionList.at(-1);
    let r = this._longestInteractionMap.get(e.interactionId);
    if (
      r ||
      this._longestInteractionList.length < gr ||
      e.duration > n._latency
    ) {
      if (
        (r
          ? e.duration > r._latency
            ? ((r.entries = [e]), (r._latency = e.duration))
            : e.duration === r._latency &&
              e.startTime === r.entries[0].startTime &&
              r.entries.push(e)
          : ((r = { id: e.interactionId, entries: [e], _latency: e.duration }),
            this._longestInteractionMap.set(r.id, r),
            this._longestInteractionList.push(r)),
        this._longestInteractionList.sort((i, a) => a._latency - i._latency),
        this._longestInteractionList.length > gr)
      ) {
        const i = this._longestInteractionList.splice(gr);
        for (const a of i) this._longestInteractionMap.delete(a.id);
      }
      (o = this._onAfterProcessingINPCandidate) == null || o.call(this, r);
    }
  }
}
const Wo = (t) => {
    var n;
    const e = v.requestIdleCallback || v.setTimeout;
    ((n = v.document) == null ? void 0 : n.visibilityState) === "hidden"
      ? t()
      : ((t = fr(t)),
        $t("visibilitychange", t, { once: !0, capture: !0 }),
        $t("pagehide", t, { once: !0, capture: !0 }),
        e(() => {
          t(),
            on("visibilitychange", t, { capture: !0 }),
            on("pagehide", t, { capture: !0 });
        }));
  },
  Gp = [200, 500],
  Yp = 40,
  Vp = (t, e = {}) => {
    if (
      !(
        globalThis.PerformanceEventTiming &&
        "interactionId" in PerformanceEventTiming.prototype
      )
    )
      return;
    const n = Oe();
    cn(() => {
      Wp();
      const r = Ae("INP");
      let s;
      const o = lr(e, vn),
        i = (c) => {
          Wo(() => {
            for (const d of c) o._processEntry(d);
            const u = o._estimateP98LongestInteraction();
            u &&
              u._latency !== r.value &&
              ((r.value = u._latency), (r.entries = u.entries), s());
          });
        },
        a = ce("event", i, { durationThreshold: e.durationThreshold ?? Yp });
      (s = Ce(t, r, Gp, e.reportAllChanges)),
        a &&
          (a.observe({ type: "first-input", buffered: !0 }),
          n.onHidden(() => {
            i(a.takeRecords()), s(!0);
          }));
    });
  };
class Kp {
  _processEntry(e) {
    var n;
    (n = this._onBeforeProcessingEntry) == null || n.call(this, e);
  }
}
const Xp = [2500, 4e3],
  Zp = (t, e = {}) => {
    cn(() => {
      const n = Oe(),
        r = Ae("LCP");
      let s;
      const o = lr(e, Kp),
        i = (c) => {
          e.reportAllChanges || (c = c.slice(-1));
          for (const u of c)
            o._processEntry(u),
              u.startTime < n.firstHiddenTime &&
                ((r.value = Math.max(u.startTime - ie(), 0)),
                (r.entries = [u]),
                s());
        },
        a = ce("largest-contentful-paint", i);
      if (a) {
        s = Ce(t, r, Xp, e.reportAllChanges);
        const c = fr(() => {
            i(a.takeRecords()), a.disconnect(), s(!0);
          }),
          u = (d) => {
            d.isTrusted && (Wo(c), on(d.type, u, { capture: !0 }));
          };
        for (const d of ["keydown", "click", "visibilitychange"])
          $t(d, u, { capture: !0 });
      }
    });
  },
  Qp = [800, 1800],
  _r = (t) => {
    var e, n;
    (e = v.document) != null && e.prerendering
      ? cn(() => _r(t))
      : ((n = v.document) == null ? void 0 : n.readyState) !== "complete"
        ? addEventListener("load", () => _r(t), !0)
        : setTimeout(t);
  },
  td = (t, e = {}) => {
    const n = Ae("TTFB"),
      r = Ce(t, n, Qp, e.reportAllChanges);
    _r(() => {
      const s = Pe();
      s &&
        ((n.value = Math.max(s.responseStart - ie(), 0)),
        (n.entries = [s]),
        r(!0));
    });
  },
  Le = {},
  pn = {};
let Jo, Go, Yo, Vo;
function Ko(t, e = !1) {
  return dn("cls", t, rd, Jo, e);
}
function Xo(t, e = !1) {
  return dn("lcp", t, sd, Go, e);
}
function ed(t) {
  return dn("ttfb", t, od, Yo);
}
function nd(t) {
  return dn("inp", t, id, Vo);
}
function Re(t, e) {
  return Zo(t, e), pn[t] || (ad(t), (pn[t] = !0)), Qo(t, e);
}
function Ne(t, e) {
  const n = Le[t];
  if (n != null && n.length)
    for (const r of n)
      try {
        r(e);
      } catch (s) {
        $e &&
          h.error(
            `Error while triggering instrumentation handler.
Type: ${t}
Name: ${ut(r)}
Error:`,
            s,
          );
      }
}
function rd() {
  return Hp(
    (t) => {
      Ne("cls", { metric: t }), (Jo = t);
    },
    { reportAllChanges: !0 },
  );
}
function sd() {
  return Zp(
    (t) => {
      Ne("lcp", { metric: t }), (Go = t);
    },
    { reportAllChanges: !0 },
  );
}
function od() {
  return td((t) => {
    Ne("ttfb", { metric: t }), (Yo = t);
  });
}
function id() {
  return Vp((t) => {
    Ne("inp", { metric: t }), (Vo = t);
  });
}
function dn(t, e, n, r, s = !1) {
  Zo(t, e);
  let o;
  return (
    pn[t] || ((o = n()), (pn[t] = !0)),
    r && e({ metric: r }),
    Qo(t, e, s ? o : void 0)
  );
}
function ad(t) {
  const e = {};
  t === "event" && (e.durationThreshold = 0),
    ce(
      t,
      (n) => {
        Ne(t, { entries: n });
      },
      e,
    );
}
function Zo(t, e) {
  (Le[t] = Le[t] || []), Le[t].push(e);
}
function Qo(t, e, n) {
  return () => {
    n && n();
    const r = Le[t];
    if (!r) return;
    const s = r.indexOf(e);
    s !== -1 && r.splice(s, 1);
  };
}
function cd(t) {
  return "duration" in t;
}
const ud = (t) => {
  const e = (n) => {
    var r;
    (n.type === "pagehide" ||
      ((r = v.document) == null ? void 0 : r.visibilityState) === "hidden") &&
      t(n);
  };
  $t("visibilitychange", e, { capture: !0, once: !0 }),
    $t("pagehide", e, { capture: !0, once: !0 });
};
function yr(t) {
  return typeof t == "number" && isFinite(t);
}
function Ct(t, e, n, { ...r }) {
  const s = T(t).start_timestamp;
  return (
    s &&
      s > e &&
      typeof t.updateStartTime == "function" &&
      t.updateStartTime(e),
    Ns(t, () => {
      const o = re({ startTime: e, ...r });
      return o && o.end(n), o;
    })
  );
}
function vr(t) {
  var _, y;
  const e = w();
  if (!e) return;
  const { name: n, transaction: r, attributes: s, startTime: o } = t,
    { release: i, environment: a, sendDefaultPii: c } = e.getOptions(),
    u =
      (_ = e.getIntegrationByName("Replay")) == null ? void 0 : _.getReplayId(),
    d = k(),
    p = d.getUser(),
    l = p !== void 0 ? p.email || p.id || p.ip_address : void 0;
  let f;
  try {
    f = d.getScopeData().contexts.profile.profile_id;
  } catch {}
  const m = {
    release: i,
    environment: a,
    user: l || void 0,
    profile_id: f || void 0,
    replay_id: u || void 0,
    transaction: r,
    "user_agent.original": (y = v.navigator) == null ? void 0 : y.userAgent,
    "client.address": c ? "{{auto}}" : void 0,
    ...s,
  };
  return re({
    name: n,
    attributes: m,
    startTime: o,
    experimental: { standalone: !0 },
  });
}
function ln() {
  return v.addEventListener && v.performance;
}
function L(t) {
  return t / 1e3;
}
function pd(t) {
  let e = "unknown",
    n = "unknown",
    r = "";
  for (const s of t) {
    if (s === "/") {
      [e, n] = t.split("/");
      break;
    }
    if (!isNaN(Number(s))) {
      (e = r === "h" ? "http" : r), (n = t.split(r)[1]);
      break;
    }
    r += s;
  }
  return r === t && (e = r), { name: e, version: n };
}
function ti(t) {
  try {
    return PerformanceObserver.supportedEntryTypes.includes(t);
  } catch {
    return !1;
  }
}
function ei(t, e) {
  let n,
    r = !1;
  function s(a) {
    !r && n && e(a, n), (r = !0);
  }
  ud(() => {
    s("pagehide");
  });
  const o = t.on("beforeStartNavigationSpan", (a, c) => {
      (c != null && c.isRedirect) || (s("navigation"), o(), i());
    }),
    i = t.on("afterStartPageLoadSpan", (a) => {
      (n = a.spanContext().spanId), i();
    });
}
function dd(t) {
  let e = 0,
    n;
  if (!ti("layout-shift")) return;
  const r = Ko(({ metric: s }) => {
    const o = s.entries[s.entries.length - 1];
    o && ((e = s.value), (n = o));
  }, !0);
  ei(t, (s, o) => {
    ld(e, n, o, s), r();
  });
}
function ld(t, e, n, r) {
  var u;
  $e && h.log(`Sending CLS span (${t})`);
  const s = e ? L((Q() || 0) + e.startTime) : R(),
    o = k().getScopeData().transactionName,
    i = e ? X((u = e.sources[0]) == null ? void 0 : u.node) : "Layout shift",
    a = {
      [A]: "auto.http.browser.cls",
      [Tt]: "ui.webvital.cls",
      [ee]: 0,
      "sentry.pageload.span_id": n,
      "sentry.report_event": r,
    };
  e != null &&
    e.sources &&
    e.sources.forEach((d, p) => {
      a[`cls.source.${p + 1}`] = X(d.node);
    });
  const c = vr({ name: i, transaction: o, attributes: a, startTime: s });
  c && (c.addEvent("cls", { [Ee]: "", [we]: t }), c.end(s));
}
function fd(t) {
  let e = 0,
    n;
  if (!ti("largest-contentful-paint")) return;
  const r = Xo(({ metric: s }) => {
    const o = s.entries[s.entries.length - 1];
    o && ((e = s.value), (n = o));
  }, !0);
  ei(t, (s, o) => {
    hd(e, n, o, s), r();
  });
}
function hd(t, e, n, r) {
  $e && h.log(`Sending LCP span (${t})`);
  const s = L((Q() || 0) + ((e == null ? void 0 : e.startTime) || 0)),
    o = k().getScopeData().transactionName,
    i = e ? X(e.element) : "Largest contentful paint",
    a = {
      [A]: "auto.http.browser.lcp",
      [Tt]: "ui.webvital.lcp",
      [ee]: 0,
      "sentry.pageload.span_id": n,
      "sentry.report_event": r,
    };
  e &&
    (e.element && (a["lcp.element"] = X(e.element)),
    e.id && (a["lcp.id"] = e.id),
    e.url && (a["lcp.url"] = e.url),
    e.loadTime != null && (a["lcp.loadTime"] = e.loadTime),
    e.renderTime != null && (a["lcp.renderTime"] = e.renderTime),
    e.size != null && (a["lcp.size"] = e.size));
  const c = vr({ name: i, transaction: o, attributes: a, startTime: s });
  c && (c.addEvent("lcp", { [Ee]: "millisecond", [we]: t }), c.end(s));
}
function tt(t) {
  return t && ((Q() || performance.timeOrigin) + t) / 1e3;
}
function ni(t) {
  var n;
  const e = {};
  if (t.nextHopProtocol != null) {
    const { name: r, version: s } = pd(t.nextHopProtocol);
    (e["network.protocol.version"] = s), (e["network.protocol.name"] = r);
  }
  return Q() || ((n = ln()) != null && n.timeOrigin)
    ? md({
        ...e,
        "http.request.redirect_start": tt(t.redirectStart),
        "http.request.redirect_end": tt(t.redirectEnd),
        "http.request.worker_start": tt(t.workerStart),
        "http.request.fetch_start": tt(t.fetchStart),
        "http.request.domain_lookup_start": tt(t.domainLookupStart),
        "http.request.domain_lookup_end": tt(t.domainLookupEnd),
        "http.request.connect_start": tt(t.connectStart),
        "http.request.secure_connection_start": tt(t.secureConnectionStart),
        "http.request.connection_end": tt(t.connectEnd),
        "http.request.request_start": tt(t.requestStart),
        "http.request.response_start": tt(t.responseStart),
        "http.request.response_end": tt(t.responseEnd),
        "http.request.time_to_first_byte":
          t.responseStart != null ? t.responseStart / 1e3 : void 0,
      })
    : e;
}
function md(t) {
  return Object.fromEntries(Object.entries(t).filter(([, e]) => e != null));
}
const gd = 2147483647;
let ri = 0,
  rt = {},
  B,
  ue;
function _d({
  recordClsStandaloneSpans: t,
  recordLcpStandaloneSpans: e,
  client: n,
}) {
  const r = ln();
  if (r && Q()) {
    r.mark && v.performance.mark("sentry-tracing-init");
    const s = e ? fd(n) : Ed(),
      o = wd(),
      i = t ? dd(n) : Sd();
    return () => {
      s == null || s(), o(), i == null || i();
    };
  }
  return () => {};
}
function yd() {
  Re("longtask", ({ entries: t }) => {
    const e = J();
    if (!e) return;
    const { op: n, start_timestamp: r } = T(e);
    for (const s of t) {
      const o = L(Q() + s.startTime),
        i = L(s.duration);
      (n === "navigation" && r && o < r) ||
        Ct(e, o, o + i, {
          name: "Main UI thread blocked",
          op: "ui.long-task",
          attributes: { [A]: "auto.ui.browser.metrics" },
        });
    }
  });
}
function vd() {
  new PerformanceObserver((t) => {
    const e = J();
    if (e)
      for (const n of t.getEntries()) {
        if (!n.scripts[0]) continue;
        const r = L(Q() + n.startTime),
          { start_timestamp: s, op: o } = T(e);
        if (o === "navigation" && s && r < s) continue;
        const i = L(n.duration),
          a = { [A]: "auto.ui.browser.metrics" },
          c = n.scripts[0],
          {
            invoker: u,
            invokerType: d,
            sourceURL: p,
            sourceFunctionName: l,
            sourceCharPosition: f,
          } = c;
        (a["browser.script.invoker"] = u),
          (a["browser.script.invoker_type"] = d),
          p && (a["code.filepath"] = p),
          l && (a["code.function"] = l),
          f !== -1 && (a["browser.script.source_char_position"] = f),
          Ct(e, r, r + i, {
            name: "Main UI thread blocked",
            op: "ui.long-animation-frame",
            attributes: a,
          });
      }
  }).observe({ type: "long-animation-frame", buffered: !0 });
}
function bd() {
  Re("event", ({ entries: t }) => {
    const e = J();
    if (e) {
      for (const n of t)
        if (n.name === "click") {
          const r = L(Q() + n.startTime),
            s = L(n.duration),
            o = {
              name: X(n.target),
              op: `ui.interaction.${n.name}`,
              startTime: r,
              attributes: { [A]: "auto.ui.browser.metrics" },
            },
            i = zr(n.target);
          i && (o.attributes["ui.component_name"] = i), Ct(e, r, r + s, o);
        }
    }
  });
}
function Sd() {
  return Ko(({ metric: t }) => {
    const e = t.entries[t.entries.length - 1];
    e && ((rt.cls = { value: t.value, unit: "" }), (ue = e));
  }, !0);
}
function Ed() {
  return Xo(({ metric: t }) => {
    const e = t.entries[t.entries.length - 1];
    e && ((rt.lcp = { value: t.value, unit: "millisecond" }), (B = e));
  }, !0);
}
function wd() {
  return ed(({ metric: t }) => {
    t.entries[t.entries.length - 1] &&
      (rt.ttfb = { value: t.value, unit: "millisecond" });
  });
}
function Td(t, e) {
  const n = ln(),
    r = Q();
  if (!(n != null && n.getEntries) || !r) return;
  const s = L(r),
    o = n.getEntries(),
    { op: i, start_timestamp: a } = T(t);
  o.slice(ri).forEach((c) => {
    const u = L(c.startTime),
      d = L(Math.max(0, c.duration));
    if (!(i === "navigation" && a && s + u < a))
      switch (c.entryType) {
        case "navigation": {
          $d(t, c, s);
          break;
        }
        case "mark":
        case "paint":
        case "measure": {
          kd(t, c, u, d, s, e.ignorePerformanceApiSpans);
          const p = Oe(),
            l = c.startTime < p.firstHiddenTime;
          c.name === "first-paint" &&
            l &&
            (rt.fp = { value: c.startTime, unit: "millisecond" }),
            c.name === "first-contentful-paint" &&
              l &&
              (rt.fcp = { value: c.startTime, unit: "millisecond" });
          break;
        }
        case "resource": {
          Od(t, c, c.name, u, d, s, e.ignoreResourceSpans);
          break;
        }
      }
  }),
    (ri = Math.max(o.length - 1, 0)),
    Ad(t),
    i === "pageload" &&
      (Nd(rt),
      e.recordClsOnPageloadSpan || delete rt.cls,
      e.recordLcpOnPageloadSpan || delete rt.lcp,
      Object.entries(rt).forEach(([c, u]) => {
        ec(c, u.value, u.unit);
      }),
      t.setAttribute("performance.timeOrigin", s),
      t.setAttribute("performance.activationStart", ie()),
      Ld(t, e)),
    (B = void 0),
    (ue = void 0),
    (rt = {});
}
function xd(t) {
  if ((t == null ? void 0 : t.entryType) === "measure")
    try {
      return t.detail.devtools.track === "Components \u269B";
    } catch {
      return;
    }
}
function kd(t, e, n, r, s, o) {
  if (xd(e) || (["mark", "measure"].includes(e.entryType) && wt(e.name, o)))
    return;
  const i = Pe(!1),
    a = L(i ? i.requestStart : 0),
    c = s + Math.max(n, a),
    u = s + n,
    d = u + r,
    p = { [A]: "auto.resource.browser.metrics" };
  c !== u &&
    ((p["sentry.browser.measure_happened_before_request"] = !0),
    (p["sentry.browser.measure_start_time"] = c)),
    Id(p, e),
    c <= d && Ct(t, c, d, { name: e.name, op: e.entryType, attributes: p });
}
function Id(t, e) {
  try {
    const n = e.detail;
    if (!n) return;
    if (typeof n == "object") {
      for (const [r, s] of Object.entries(n))
        if (s && qt(s)) t[`sentry.browser.measure.detail.${r}`] = s;
        else if (s !== void 0)
          try {
            t[`sentry.browser.measure.detail.${r}`] = JSON.stringify(s);
          } catch {}
      return;
    }
    if (qt(n)) {
      t["sentry.browser.measure.detail"] = n;
      return;
    }
    try {
      t["sentry.browser.measure.detail"] = JSON.stringify(n);
    } catch {}
  } catch {}
}
function $d(t, e, n) {
  [
    "unloadEvent",
    "redirect",
    "domContentLoadedEvent",
    "loadEvent",
    "connect",
  ].forEach((r) => {
    fn(t, e, r, n);
  }),
    fn(t, e, "secureConnection", n, "TLS/SSL"),
    fn(t, e, "fetch", n, "cache"),
    fn(t, e, "domainLookup", n, "DNS"),
    Pd(t, e, n);
}
function fn(t, e, n, r, s = n) {
  const o = Cd(n),
    i = e[o],
    a = e[`${n}Start`];
  !a ||
    !i ||
    Ct(t, r + L(a), r + L(i), {
      op: `browser.${s}`,
      name: e.name,
      attributes: {
        [A]: "auto.ui.browser.metrics",
        ...(n === "redirect" && e.redirectCount != null
          ? { "http.redirect_count": e.redirectCount }
          : {}),
      },
    });
}
function Cd(t) {
  return t === "secureConnection"
    ? "connectEnd"
    : t === "fetch"
      ? "domainLookupStart"
      : `${t}End`;
}
function Pd(t, e, n) {
  const r = n + L(e.requestStart),
    s = n + L(e.responseEnd),
    o = n + L(e.responseStart);
  e.responseEnd &&
    (Ct(t, r, s, {
      op: "browser.request",
      name: e.name,
      attributes: { [A]: "auto.ui.browser.metrics" },
    }),
    Ct(t, o, s, {
      op: "browser.response",
      name: e.name,
      attributes: { [A]: "auto.ui.browser.metrics" },
    }));
}
function Od(t, e, n, r, s, o, i) {
  if (e.initiatorType === "xmlhttprequest" || e.initiatorType === "fetch")
    return;
  const a = e.initiatorType ? `resource.${e.initiatorType}` : "resource.other";
  if (i != null && i.includes(a)) return;
  const c = { [A]: "auto.resource.browser.metrics" },
    u = se(n);
  u.protocol && (c["url.scheme"] = u.protocol.split(":").pop()),
    u.host && (c["server.address"] = u.host),
    (c["url.same_origin"] = n.includes(v.location.origin)),
    Rd(e, c, [
      ["responseStatus", "http.response.status_code"],
      ["transferSize", "http.response_transfer_size"],
      ["encodedBodySize", "http.response_content_length"],
      ["decodedBodySize", "http.decoded_response_content_length"],
      ["renderBlockingStatus", "resource.render_blocking_status"],
      ["deliveryType", "http.response_delivery_type"],
    ]);
  const d = { ...c, ...ni(e) },
    p = o + r,
    l = p + s;
  Ct(t, p, l, { name: n.replace(v.location.origin, ""), op: a, attributes: d });
}
function Ad(t) {
  const e = v.navigator;
  if (!e) return;
  const n = e.connection;
  n &&
    (n.effectiveType &&
      t.setAttribute("effectiveConnectionType", n.effectiveType),
    n.type && t.setAttribute("connectionType", n.type),
    yr(n.rtt) &&
      (rt["connection.rtt"] = { value: n.rtt, unit: "millisecond" })),
    yr(e.deviceMemory) &&
      t.setAttribute("deviceMemory", `${e.deviceMemory} GB`),
    yr(e.hardwareConcurrency) &&
      t.setAttribute("hardwareConcurrency", String(e.hardwareConcurrency));
}
function Ld(t, e) {
  B &&
    e.recordLcpOnPageloadSpan &&
    (B.element && t.setAttribute("lcp.element", X(B.element)),
    B.id && t.setAttribute("lcp.id", B.id),
    B.url && t.setAttribute("lcp.url", B.url.trim().slice(0, 200)),
    B.loadTime != null && t.setAttribute("lcp.loadTime", B.loadTime),
    B.renderTime != null && t.setAttribute("lcp.renderTime", B.renderTime),
    t.setAttribute("lcp.size", B.size)),
    ue != null &&
      ue.sources &&
      e.recordClsOnPageloadSpan &&
      ue.sources.forEach((n, r) =>
        t.setAttribute(`cls.source.${r + 1}`, X(n.node)),
      );
}
function Rd(t, e, n) {
  n.forEach(([r, s]) => {
    const o = t[r];
    o != null &&
      ((typeof o == "number" && o < gd) || typeof o == "string") &&
      (e[s] = o);
  });
}
function Nd(t) {
  const e = Pe(!1);
  if (!e) return;
  const { responseStart: n, requestStart: r } = e;
  r <= n && (t["ttfb.requestTime"] = { value: n - r, unit: "millisecond" });
}
const Dd = 1e3;
let si, br, Sr;
function Md(t) {
  bt("dom", t), St("dom", jd);
}
function jd() {
  if (!v.document) return;
  const t = K.bind(null, "dom"),
    e = oi(t, !0);
  v.document.addEventListener("click", e, !1),
    v.document.addEventListener("keypress", e, !1),
    ["EventTarget", "Node"].forEach((n) => {
      var s, o;
      const r = (s = v[n]) == null ? void 0 : s.prototype;
      (o = r == null ? void 0 : r.hasOwnProperty) != null &&
        o.call(r, "addEventListener") &&
        (W(r, "addEventListener", function (i) {
          return function (a, c, u) {
            if (a === "click" || a == "keypress")
              try {
                const d = (this.__sentry_instrumentation_handlers__ =
                    this.__sentry_instrumentation_handlers__ || {}),
                  p = (d[a] = d[a] || { refCount: 0 });
                if (!p.handler) {
                  const l = oi(t);
                  (p.handler = l), i.call(this, a, l, u);
                }
                p.refCount++;
              } catch {}
            return i.call(this, a, c, u);
          };
        }),
        W(r, "removeEventListener", function (i) {
          return function (a, c, u) {
            if (a === "click" || a == "keypress")
              try {
                const d = this.__sentry_instrumentation_handlers__ || {},
                  p = d[a];
                p &&
                  (p.refCount--,
                  p.refCount <= 0 &&
                    (i.call(this, a, p.handler, u),
                    (p.handler = void 0),
                    delete d[a]),
                  Object.keys(d).length === 0 &&
                    delete this.__sentry_instrumentation_handlers__);
              } catch {}
            return i.call(this, a, c, u);
          };
        }));
    });
}
function qd(t) {
  if (t.type !== br) return !1;
  try {
    if (!t.target || t.target._sentryId !== Sr) return !1;
  } catch {}
  return !0;
}
function Ud(t, e) {
  return t !== "keypress"
    ? !1
    : e != null && e.tagName
      ? !(
          e.tagName === "INPUT" ||
          e.tagName === "TEXTAREA" ||
          e.isContentEditable
        )
      : !0;
}
function oi(t, e = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    const r = Fd(n);
    if (Ud(n.type, r)) return;
    U(n, "_sentryCaptured", !0), r && !r._sentryId && U(r, "_sentryId", Z());
    const s = n.type === "keypress" ? "input" : n.type;
    qd(n) ||
      (t({ event: n, name: s, global: e }),
      (br = n.type),
      (Sr = r ? r._sentryId : void 0)),
      clearTimeout(si),
      (si = v.setTimeout(() => {
        (Sr = void 0), (br = void 0);
      }, Dd));
  };
}
function Fd(t) {
  try {
    return t.target;
  } catch {
    return null;
  }
}
let hn;
function Er(t) {
  const e = "history";
  bt(e, t), St(e, Bd);
}
function Bd() {
  if (
    (v.addEventListener("popstate", () => {
      const e = v.location.href,
        n = hn;
      (hn = e), n !== e && K("history", { from: n, to: e });
    }),
    !up())
  )
    return;
  function t(e) {
    return function (...n) {
      const r = n.length > 2 ? n[2] : void 0;
      if (r) {
        const s = hn,
          o = Hd(String(r));
        if (((hn = o), s === o)) return e.apply(this, n);
        K("history", { from: s, to: o });
      }
      return e.apply(this, n);
    };
  }
  W(v.history, "pushState", t), W(v.history, "replaceState", t);
}
function Hd(t) {
  try {
    return new URL(t, v.location.origin).toString();
  } catch {
    return t;
  }
}
const mn = {};
function zd(t) {
  const e = mn[t];
  if (e) return e;
  let n = v[t];
  if (rr(n)) return (mn[t] = n.bind(v));
  const r = v.document;
  if (r && typeof r.createElement == "function")
    try {
      const s = r.createElement("iframe");
      (s.hidden = !0), r.head.appendChild(s);
      const o = s.contentWindow;
      o != null && o[t] && (n = o[t]), r.head.removeChild(s);
    } catch (s) {
      $e &&
        h.warn(
          `Could not create sandbox iframe for ${t} check, bailing to window.${t}: `,
          s,
        );
    }
  return n && (mn[t] = n.bind(v));
}
function Wd(t) {
  mn[t] = void 0;
}
const pe = "__sentry_xhr_v3__";
function ii(t) {
  bt("xhr", t), St("xhr", Jd);
}
function Jd() {
  if (!v.XMLHttpRequest) return;
  const t = XMLHttpRequest.prototype;
  (t.open = new Proxy(t.open, {
    apply(e, n, r) {
      const s = new Error(),
        o = R() * 1e3,
        i = pt(r[0]) ? r[0].toUpperCase() : void 0,
        a = Gd(r[1]);
      if (!i || !a) return e.apply(n, r);
      (n[pe] = { method: i, url: a, request_headers: {} }),
        i === "POST" &&
          a.match(/sentry_key/) &&
          (n.__sentry_own_request__ = !0);
      const c = () => {
        const u = n[pe];
        if (u && n.readyState === 4) {
          try {
            u.status_code = n.status;
          } catch {}
          const d = {
            endTimestamp: R() * 1e3,
            startTimestamp: o,
            xhr: n,
            virtualError: s,
          };
          K("xhr", d);
        }
      };
      return (
        "onreadystatechange" in n && typeof n.onreadystatechange == "function"
          ? (n.onreadystatechange = new Proxy(n.onreadystatechange, {
              apply(u, d, p) {
                return c(), u.apply(d, p);
              },
            }))
          : n.addEventListener("readystatechange", c),
        (n.setRequestHeader = new Proxy(n.setRequestHeader, {
          apply(u, d, p) {
            const [l, f] = p,
              m = d[pe];
            return (
              m && pt(l) && pt(f) && (m.request_headers[l.toLowerCase()] = f),
              u.apply(d, p)
            );
          },
        })),
        e.apply(n, r)
      );
    },
  })),
    (t.send = new Proxy(t.send, {
      apply(e, n, r) {
        const s = n[pe];
        if (!s) return e.apply(n, r);
        r[0] !== void 0 && (s.body = r[0]);
        const o = { startTimestamp: R() * 1e3, xhr: n };
        return K("xhr", o), e.apply(n, r);
      },
    }));
}
function Gd(t) {
  if (pt(t)) return t;
  try {
    return t.toString();
  } catch {}
}
function Yd(t) {
  let e;
  try {
    e = t.getAllResponseHeaders();
  } catch (n) {
    return $e && h.error(n, "Failed to get xhr response headers", t), {};
  }
  return e
    ? e
        .split(
          `\r
`,
        )
        .reduce((n, r) => {
          const [s, o] = r.split(": ");
          return o && (n[s.toLowerCase()] = o), n;
        }, {})
    : {};
}
const wr = [],
  gn = new Map(),
  de = new Map(),
  Vd = 60;
function Kd() {
  if (ln() && Q()) {
    const t = Xd();
    return () => {
      t();
    };
  }
  return () => {};
}
const Tr = {
  click: "click",
  pointerdown: "click",
  pointerup: "click",
  mousedown: "click",
  mouseup: "click",
  touchstart: "click",
  touchend: "click",
  mouseover: "hover",
  mouseout: "hover",
  mouseenter: "hover",
  mouseleave: "hover",
  pointerover: "hover",
  pointerout: "hover",
  pointerenter: "hover",
  pointerleave: "hover",
  dragstart: "drag",
  dragend: "drag",
  drag: "drag",
  dragenter: "drag",
  dragleave: "drag",
  dragover: "drag",
  drop: "drag",
  keydown: "press",
  keyup: "press",
  keypress: "press",
  input: "press",
};
function Xd() {
  return nd(Zd);
}
const Zd = ({ metric: t }) => {
  if (t.value == null) return;
  const e = L(t.value);
  if (e > Vd) return;
  const n = t.entries.find((m) => m.duration === t.value && Tr[m.name]);
  if (!n) return;
  const { interactionId: r } = n,
    s = Tr[n.name],
    o = L(Q() + n.startTime),
    i = J(),
    a = i ? F(i) : void 0,
    c = r != null ? gn.get(r) : void 0,
    u = (c == null ? void 0 : c.span) || a,
    d = u ? T(u).description : k().getScopeData().transactionName,
    p = (c == null ? void 0 : c.elementName) || X(n.target),
    l = {
      [A]: "auto.http.browser.inp",
      [Tt]: `ui.interaction.${s}`,
      [ee]: n.duration,
    },
    f = vr({ name: p, transaction: d, attributes: l, startTime: o });
  f &&
    (f.addEvent("inp", { [Ee]: "millisecond", [we]: t.value }), f.end(o + e));
};
function Qd() {
  const t = Object.keys(Tr);
  bp() &&
    t.forEach((s) => {
      v.addEventListener(s, e, { capture: !0, passive: !0 });
    });
  function e(s) {
    const o = s.target;
    if (!o) return;
    const i = X(o),
      a = Math.round(s.timeStamp);
    if ((de.set(a, i), de.size > 50)) {
      const c = de.keys().next().value;
      c !== void 0 && de.delete(c);
    }
  }
  function n(s) {
    const o = Math.round(s.startTime);
    let i = de.get(o);
    if (!i)
      for (let a = -5; a <= 5; a++) {
        const c = de.get(o + a);
        if (c) {
          i = c;
          break;
        }
      }
    return i || "<unknown>";
  }
  const r = ({ entries: s }) => {
    const o = J(),
      i = o && F(o);
    s.forEach((a) => {
      if (!cd(a)) return;
      const c = a.interactionId;
      if (c == null || gn.has(c)) return;
      const u = a.target ? X(a.target) : n(a);
      if (wr.length > 10) {
        const d = wr.shift();
        gn.delete(d);
      }
      wr.push(c), gn.set(c, { span: i, elementName: u });
    });
  };
  Re("event", r), Re("first-input", r);
}
const tl = 40;
function el(t, e = zd("fetch")) {
  let n = 0,
    r = 0;
  async function s(o) {
    const i = o.body.length;
    (n += i), r++;
    const a = {
      body: o.body,
      method: "POST",
      referrerPolicy: "strict-origin",
      headers: t.headers,
      keepalive: n <= 6e4 && r < 15,
      ...t.fetchOptions,
    };
    try {
      const c = await e(t.url, a);
      return {
        statusCode: c.status,
        headers: {
          "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": c.headers.get("Retry-After"),
        },
      };
    } catch (c) {
      throw (Wd("fetch"), c);
    } finally {
      (n -= i), r--;
    }
  }
  return ou(t, s, Qn(t.bufferSize || tl));
}
const G = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  nl = 30,
  rl = 50;
function xr(t, e, n, r) {
  const s = { filename: t, function: e === "<anonymous>" ? jt : e, in_app: !0 };
  return n !== void 0 && (s.lineno = n), r !== void 0 && (s.colno = r), s;
}
const sl = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  ol =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  il = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  al = /at (.+?) ?\(data:(.+?),/,
  cl = (t) => {
    var s;
    const e = t.match(al);
    if (e) return { filename: `<data:${e[2]}>`, function: e[1] };
    const n = sl.exec(t);
    if (n) {
      const [, o, i, a] = n;
      return xr(o, jt, +i, +a);
    }
    const r = ol.exec(t);
    if (r) {
      if (((s = r[2]) == null ? void 0 : s.indexOf("eval")) === 0) {
        const a = il.exec(r[2]);
        a && ((r[2] = a[1]), (r[3] = a[2]), (r[4] = a[3]));
      }
      const [o, i] = ai(r[1] || jt, r[2]);
      return xr(i, o, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
    }
  },
  ul = [nl, cl],
  pl =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  dl = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  ll = (t) => {
    const e = pl.exec(t);
    if (e) {
      if (e[3] && e[3].indexOf(" > eval") > -1) {
        const s = dl.exec(e[3]);
        s &&
          ((e[1] = e[1] || "eval"), (e[3] = s[1]), (e[4] = s[2]), (e[5] = ""));
      }
      let n = e[3],
        r = e[1] || jt;
      return (
        ([r, n] = ai(r, n)),
        xr(n, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
      );
    }
  },
  fl = [rl, ll],
  hl = [ul, fl],
  ml = Rr(...hl),
  ai = (t, e) => {
    const n = t.indexOf("safari-extension") !== -1,
      r = t.indexOf("safari-web-extension") !== -1;
    return n || r
      ? [
          t.indexOf("@") !== -1 ? t.split("@")[0] : jt,
          n ? `safari-extension:${e}` : `safari-web-extension:${e}`,
        ]
      : [t, e];
  },
  _n = 1024,
  gl = "Breadcrumbs",
  _l = (t = {}) => {
    const e = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...t,
    };
    return {
      name: gl,
      setup(n) {
        e.console && $o(Sl(n)),
          e.dom && Md(bl(n, e.dom)),
          e.xhr && ii(El(n)),
          e.fetch && Do(wl(n)),
          e.history && Er(Tl(n)),
          e.sentry && n.on("beforeSendEvent", vl(n));
      },
    };
  },
  yl = _l;
function vl(t) {
  return function (e) {
    w() === t &&
      Jt(
        {
          category: `sentry.${e.type === "transaction" ? "transaction" : "event"}`,
          event_id: e.event_id,
          level: e.level,
          message: Ut(e),
        },
        { event: e },
      );
  };
}
function bl(t, e) {
  return function (n) {
    if (w() !== t) return;
    let r,
      s,
      o = typeof e == "object" ? e.serializeAttribute : void 0,
      i =
        typeof e == "object" && typeof e.maxStringLength == "number"
          ? e.maxStringLength
          : void 0;
    i &&
      i > _n &&
      (G &&
        h.warn(
          `\`dom.maxStringLength\` cannot exceed ${_n}, but a value of ${i} was configured. Sentry will use ${_n} instead.`,
        ),
      (i = _n)),
      typeof o == "string" && (o = [o]);
    try {
      const c = n.event,
        u = xl(c) ? c.target : c;
      (r = X(u, { keyAttrs: o, maxStringLength: i })), (s = zr(u));
    } catch {
      r = "<unknown>";
    }
    if (r.length === 0) return;
    const a = { category: `ui.${n.name}`, message: r };
    s && (a.data = { "ui.component_name": s }),
      Jt(a, { event: n.event, name: n.name, global: n.global });
  };
}
function Sl(t) {
  return function (e) {
    if (w() !== t) return;
    const n = {
      category: "console",
      data: { arguments: e.args, logger: "console" },
      level: Fu(e.level),
      message: Vr(e.args, " "),
    };
    if (e.level === "assert")
      if (e.args[0] === !1)
        (n.message = `Assertion failed: ${Vr(e.args.slice(1), " ") || "console.assert"}`),
          (n.data.arguments = e.args.slice(1));
      else return;
    Jt(n, { input: e.args, level: e.level });
  };
}
function El(t) {
  return function (e) {
    if (w() !== t) return;
    const { startTimestamp: n, endTimestamp: r } = e,
      s = e.xhr[pe];
    if (!n || !r || !s) return;
    const { method: o, url: i, status_code: a, body: c } = s,
      u = { method: o, url: i, status_code: a },
      d = { xhr: e.xhr, input: c, startTimestamp: n, endTimestamp: r },
      p = { category: "xhr", data: u, type: "http", level: No(a) };
    t.emit("beforeOutgoingRequestBreadcrumb", p, d), Jt(p, d);
  };
}
function wl(t) {
  return function (e) {
    if (w() !== t) return;
    const { startTimestamp: n, endTimestamp: r } = e;
    if (
      r &&
      !(e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST")
    )
      if (e.error) {
        const s = {
            data: e.error,
            input: e.args,
            startTimestamp: n,
            endTimestamp: r,
          },
          o = {
            category: "fetch",
            data: e.fetchData,
            level: "error",
            type: "http",
          };
        t.emit("beforeOutgoingRequestBreadcrumb", o, s), Jt(o, s);
      } else {
        const s = e.response,
          o = { ...e.fetchData, status_code: s == null ? void 0 : s.status },
          i = {
            input: e.args,
            response: s,
            startTimestamp: n,
            endTimestamp: r,
          },
          a = {
            category: "fetch",
            data: o,
            type: "http",
            level: No(o.status_code),
          };
        t.emit("beforeOutgoingRequestBreadcrumb", a, i), Jt(a, i);
      }
  };
}
function Tl(t) {
  return function (e) {
    if (w() !== t) return;
    let n = e.from,
      r = e.to;
    const s = se(S.location.href);
    let o = n ? se(n) : void 0;
    const i = se(r);
    (o != null && o.path) || (o = s),
      s.protocol === i.protocol && s.host === i.host && (r = i.relative),
      s.protocol === o.protocol && s.host === o.host && (n = o.relative),
      Jt({ category: "navigation", data: { from: n, to: r } });
  };
}
function xl(t) {
  return !!t && !!t.target;
}
const kl =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ",",
    ),
  Il = "BrowserApiErrors",
  $l = (t = {}) => {
    const e = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      unregisterOriginalCallbacks: !1,
      ...t,
    };
    return {
      name: Il,
      setupOnce() {
        e.setTimeout && W(S, "setTimeout", ci),
          e.setInterval && W(S, "setInterval", ci),
          e.requestAnimationFrame && W(S, "requestAnimationFrame", Pl),
          e.XMLHttpRequest &&
            "XMLHttpRequest" in S &&
            W(XMLHttpRequest.prototype, "send", Ol);
        const n = e.eventTarget;
        n && (Array.isArray(n) ? n : kl).forEach((r) => Al(r, e));
      },
    };
  },
  Cl = $l;
function ci(t) {
  return function (...e) {
    const n = e[0];
    return (
      (e[0] = oe(n, {
        mechanism: {
          handled: !1,
          type: `auto.browser.browserapierrors.${ut(t)}`,
        },
      })),
      t.apply(this, e)
    );
  };
}
function Pl(t) {
  return function (e) {
    return t.apply(this, [
      oe(e, {
        mechanism: {
          data: { handler: ut(t) },
          handled: !1,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function Ol(t) {
  return function (...e) {
    const n = this;
    return (
      ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
        r in n &&
          typeof n[r] == "function" &&
          W(n, r, function (s) {
            const o = {
                mechanism: {
                  data: { handler: ut(s) },
                  handled: !1,
                  type: `auto.browser.browserapierrors.xhr.${r}`,
                },
              },
              i = In(s);
            return i && (o.mechanism.data.handler = ut(i)), oe(s, o);
          });
      }),
      t.apply(this, e)
    );
  };
}
function Al(t, e) {
  var r, s;
  const n = (r = S[t]) == null ? void 0 : r.prototype;
  (s = n == null ? void 0 : n.hasOwnProperty) != null &&
    s.call(n, "addEventListener") &&
    (W(n, "addEventListener", function (o) {
      return function (i, a, c) {
        try {
          Ll(a) &&
            (a.handleEvent = oe(a.handleEvent, {
              mechanism: {
                data: { handler: ut(a), target: t },
                handled: !1,
                type: "auto.browser.browserapierrors.handleEvent",
              },
            }));
        } catch {}
        return (
          e.unregisterOriginalCallbacks && Rl(this, i, a),
          o.apply(this, [
            i,
            oe(a, {
              mechanism: {
                data: { handler: ut(a), target: t },
                handled: !1,
                type: "auto.browser.browserapierrors.addEventListener",
              },
            }),
            c,
          ])
        );
      };
    }),
    W(n, "removeEventListener", function (o) {
      return function (i, a, c) {
        try {
          const u = a.__sentry_wrapped__;
          u && o.call(this, i, u, c);
        } catch {}
        return o.call(this, i, a, c);
      };
    }));
}
function Ll(t) {
  return typeof t.handleEvent == "function";
}
function Rl(t, e, n) {
  t &&
    typeof t == "object" &&
    "removeEventListener" in t &&
    typeof t.removeEventListener == "function" &&
    t.removeEventListener(e, n);
}
const Nl = (t = {}) => {
    const e = t.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (typeof S.document > "u") {
          G &&
            h.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported.",
            );
          return;
        }
        Ws({ ignoreDuration: !0 }), Yn();
        const n = et();
        let r = n.getUser();
        n.addScopeListener((s) => {
          const o = s.getUser();
          ((r == null ? void 0 : r.id) !== (o == null ? void 0 : o.id) ||
            (r == null ? void 0 : r.ip_address) !==
              (o == null ? void 0 : o.ip_address)) &&
            (Yn(), (r = o));
        }),
          e === "route" &&
            Er(({ from: s, to: o }) => {
              s !== o && (Ws({ ignoreDuration: !0 }), Yn());
            });
      },
    };
  },
  Dl = "CultureContext",
  Ml = () => ({
    name: Dl,
    preprocessEvent(t) {
      var n;
      const e = ql();
      e &&
        (t.contexts = {
          ...t.contexts,
          culture: { ...e, ...((n = t.contexts) == null ? void 0 : n.culture) },
        });
    },
  }),
  jl = Ml;
function ql() {
  try {
    const t = S.Intl;
    if (!t) return;
    const e = t.DateTimeFormat().resolvedOptions();
    return { locale: e.locale, timezone: e.timeZone, calendar: e.calendar };
  } catch {
    return;
  }
}
const Ul = "GlobalHandlers",
  Fl = (t = {}) => {
    const e = { onerror: !0, onunhandledrejection: !0, ...t };
    return {
      name: Ul,
      setupOnce() {
        Error.stackTraceLimit = 50;
      },
      setup(n) {
        e.onerror && (Hl(n), ui("onerror")),
          e.onunhandledrejection && (zl(n), ui("onunhandledrejection"));
      },
    };
  },
  Bl = Fl;
function Hl(t) {
  jr((e) => {
    const { stackParser: n, attachStacktrace: r } = pi();
    if (w() !== t || qo()) return;
    const { msg: s, url: o, line: i, column: a, error: c } = e,
      u = Gl(ur(n, c || s, void 0, r, !1), o, i, a);
    (u.level = "error"),
      zs(u, {
        originalException: c,
        mechanism: {
          handled: !1,
          type: "auto.browser.global_handlers.onerror",
        },
      });
  });
}
function zl(t) {
  qr((e) => {
    const { stackParser: n, attachStacktrace: r } = pi();
    if (w() !== t || qo()) return;
    const s = Wl(e),
      o = qt(s) ? Jl(s) : ur(n, s, void 0, r, !0);
    (o.level = "error"),
      zs(o, {
        originalException: s,
        mechanism: {
          handled: !1,
          type: "auto.browser.global_handlers.onunhandledrejection",
        },
      });
  });
}
function Wl(t) {
  if (qt(t)) return t;
  try {
    if ("reason" in t) return t.reason;
    if ("detail" in t && "reason" in t.detail) return t.detail.reason;
  } catch {}
  return t;
}
function Jl(t) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(t)}`,
        },
      ],
    },
  };
}
function Gl(t, e, n, r) {
  const s = (t.exception = t.exception || {}),
    o = (s.values = s.values || []),
    i = (o[0] = o[0] || {}),
    a = (i.stacktrace = i.stacktrace || {}),
    c = (a.frames = a.frames || []);
  return (
    c.length === 0 &&
      c.push({
        colno: r,
        lineno: n,
        filename: Yl(e) ?? me(),
        function: jt,
        in_app: !0,
      }),
    t
  );
}
function ui(t) {
  G && h.log(`Global Handler attached: ${t}`);
}
function pi() {
  var t;
  return (
    ((t = w()) == null ? void 0 : t.getOptions()) || {
      stackParser: () => [],
      attachStacktrace: !1,
    }
  );
}
function Yl(t) {
  if (!(!pt(t) || t.length === 0))
    return t.startsWith("data:") ? `<${It(t, !1)}>` : t;
}
const Vl = () => ({
    name: "HttpContext",
    preprocessEvent(t) {
      var r;
      if (!S.navigator && !S.location && !S.document) return;
      const e = or(),
        n = { ...e.headers, ...((r = t.request) == null ? void 0 : r.headers) };
      t.request = { ...e, ...t.request, headers: n };
    },
  }),
  Kl = "cause",
  Xl = 5,
  Zl = "LinkedErrors",
  Ql = (t = {}) => {
    const e = t.limit || Xl,
      n = t.key || Kl;
    return {
      name: Zl,
      preprocessEvent(r, s, o) {
        const i = o.getOptions();
        qu(ir, i.stackParser, n, e, r, s);
      },
    };
  },
  tf = Ql;
function ef() {
  return nf()
    ? (G &&
        vt(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
          );
        }),
      !0)
    : !1;
}
function nf() {
  var n, r;
  if (typeof S.window > "u") return !1;
  const t = S;
  if (
    t.nw ||
    !(
      (r = (n = t.chrome || t.browser) == null ? void 0 : n.runtime) != null &&
      r.id
    )
  )
    return !1;
  const e = me();
  return !(
    S === S.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      e,
    )
  );
}
function rf(t) {
  return [Ou(), Iu(), Ku(), Cl(), yl(), Bl(), tf(), zu(), Vl(), jl(), Nl()];
}
function sf(t = {}) {
  const e = !t.skipBrowserExtensionCheck && ef();
  let n = t.defaultIntegrations == null ? rf() : t.defaultIntegrations;
  const r = {
    ...t,
    enabled: e ? !1 : t.enabled,
    stackParser: Pi(t.stackParser || ml),
    integrations: jc({ integrations: t.integrations, defaultIntegrations: n }),
    transport: t.transport || el,
  };
  return gu(Rp, r);
}
function of(t) {
  return t.split(",").some((e) => e.trim().startsWith("sentry-"));
}
function di(t) {
  try {
    return new URL(t, S.location.origin).href;
  } catch {
    return;
  }
}
function af(t) {
  return (
    t.entryType === "resource" &&
    "initiatorType" in t &&
    typeof t.nextHopProtocol == "string" &&
    (t.initiatorType === "fetch" || t.initiatorType === "xmlhttprequest")
  );
}
function li(t) {
  try {
    return new Headers(t);
  } catch {
    return;
  }
}
const fi = new WeakMap(),
  kr = new Map(),
  hi = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    trackFetchStreamPerformance: !1,
  };
function cf(t, e) {
  const {
      traceFetch: n,
      traceXHR: r,
      trackFetchStreamPerformance: s,
      shouldCreateSpanForRequest: o,
      enableHTTPTimings: i,
      tracePropagationTargets: a,
      onRequestSpanStart: c,
      onRequestSpanEnd: u,
    } = { ...hi, ...e },
    d = typeof o == "function" ? o : (m) => !0,
    p = (m) => uf(m, a),
    l = {},
    f = t.getOptions().propagateTraceparent;
  n &&
    (t.addEventProcessor(
      (m) => (
        m.type === "transaction" &&
          m.spans &&
          m.spans.forEach((_) => {
            if (_.op === "http.client") {
              const y = kr.get(_.span_id);
              y && ((_.timestamp = y / 1e3), kr.delete(_.span_id));
            }
          }),
        m
      ),
    ),
    s &&
      lp((m) => {
        if (m.response) {
          const _ = fi.get(m.response);
          _ && m.endTimestamp && kr.set(_, m.endTimestamp);
        }
      }),
    Do((m) => {
      const _ = Xu(m, d, p, l, {
        propagateTraceparent: f,
        onRequestSpanEnd: u,
      });
      if (
        (m.response &&
          m.fetchData.__span &&
          fi.set(m.response, m.fetchData.__span),
        _)
      ) {
        const y = di(m.fetchData.url),
          j = y ? se(y).host : void 0;
        _.setAttributes({
          "http.url": y ? It(y) : void 0,
          "server.address": j,
        }),
          i && mi(_),
          c == null || c(_, { headers: m.headers });
      }
    })),
    r &&
      ii((m) => {
        var y;
        const _ = pf(m, d, p, l, f, u);
        _ &&
          (i && mi(_),
          c == null ||
            c(_, {
              headers: li(
                (y = m.xhr.__sentry_xhr_v3__) == null
                  ? void 0
                  : y.request_headers,
              ),
            }));
      });
}
function mi(t) {
  const { url: e } = T(t).data;
  if (!e || typeof e != "string") return;
  const n = Re("resource", ({ entries: r }) => {
    r.forEach((s) => {
      af(s) && s.name.endsWith(e) && (t.setAttributes(ni(s)), setTimeout(n));
    });
  });
}
function uf(t, e) {
  const n = me();
  if (n) {
    let r, s;
    try {
      (r = new URL(t, n)), (s = new URL(n).origin);
    } catch {
      return !1;
    }
    const o = r.origin === s;
    return e ? wt(r.toString(), e) || (o && wt(r.pathname, e)) : o;
  } else {
    const r = !!t.match(/^\/(?!\/)/);
    return e ? wt(t, e) : r;
  }
}
function pf(t, e, n, r, s, o) {
  const i = t.xhr,
    a = i == null ? void 0 : i[pe];
  if (!i || i.__sentry_own_request__ || !a) return;
  const { url: c, method: u } = a,
    d = nt() && e(c);
  if (t.endTimestamp) {
    const j = i.__sentry_xhr_span_id__;
    if (!j) return;
    const M = r[j];
    M &&
      (d &&
        a.status_code !== void 0 &&
        (is(M, a.status_code),
        M.end(),
        o == null || o(M, { headers: li(Yd(i)), error: t.error })),
      delete r[j]);
    return;
  }
  const p = di(c),
    l = se(p || c),
    f = It(bu(c)),
    m = !!J(),
    _ =
      d && m
        ? re({
            name: `${u} ${f}`,
            attributes: {
              url: It(c),
              type: "xhr",
              "http.method": u,
              "http.url": p ? It(p) : void 0,
              "server.address": l == null ? void 0 : l.host,
              [A]: "auto.http.browser",
              [Tt]: "http.client",
              ...((l == null ? void 0 : l.search) && {
                "http.query": l == null ? void 0 : l.search,
              }),
              ...((l == null ? void 0 : l.hash) && {
                "http.fragment": l == null ? void 0 : l.hash,
              }),
            },
          })
        : new zt();
  (i.__sentry_xhr_span_id__ = _.spanContext().spanId),
    (r[i.__sentry_xhr_span_id__] = _),
    n(c) && df(i, nt() && m ? _ : void 0, s);
  const y = w();
  return y && y.emit("beforeOutgoingRequestSpan", _, t), _;
}
function df(t, e, n) {
  const {
    "sentry-trace": r,
    baggage: s,
    traceparent: o,
  } = So({ span: e, propagateTraceparent: n });
  r && lf(t, r, s, o);
}
function lf(t, e, n, r) {
  var o;
  const s = (o = t.__sentry_xhr_v3__) == null ? void 0 : o.request_headers;
  if (!((s != null && s["sentry-trace"]) || !t.setRequestHeader))
    try {
      if (
        (t.setRequestHeader("sentry-trace", e),
        r &&
          !(s != null && s.traceparent) &&
          t.setRequestHeader("traceparent", r),
        n)
      ) {
        const i = s == null ? void 0 : s.baggage;
        (!i || !of(i)) && t.setRequestHeader("baggage", n);
      }
    } catch {}
}
function ff() {
  S.document
    ? S.document.addEventListener("visibilitychange", () => {
        const t = J();
        if (!t) return;
        const e = F(t);
        if (S.document.hidden && e) {
          const n = "cancelled",
            { op: r, status: s } = T(e);
          G &&
            h.log(
              `[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${r}`,
            ),
            s || e.setStatus({ code: N, message: n }),
            e.setAttribute("sentry.cancellation_reason", "document.hidden"),
            e.end();
        }
      })
    : G &&
      h.warn(
        "[Tracing] Could not set up background tab detection due to lack of global document",
      );
}
const hf = 3600,
  gi = "sentry_previous_trace",
  mf = "sentry.previous_trace";
function gf(t, { linkPreviousTrace: e, consistentTraceSampling: n }) {
  const r = e === "session-storage";
  let s = r ? vf() : void 0;
  t.on("spanStart", (i) => {
    if (F(i) !== i) return;
    const a = k().getPropagationContext();
    (s = _f(s, i, a)), r && yf(s);
  });
  let o = !0;
  n &&
    t.on("beforeSampling", (i) => {
      if (!s) return;
      const a = k(),
        c = a.getPropagationContext();
      if (o && c.parentSpanId) {
        o = !1;
        return;
      }
      a.setPropagationContext({
        ...c,
        dsc: {
          ...c.dsc,
          sample_rate: String(s.sampleRate),
          sampled: String(Ir(s.spanContext)),
        },
        sampleRand: s.sampleRand,
      }),
        (i.parentSampled = Ir(s.spanContext)),
        (i.parentSampleRate = s.sampleRate),
        (i.spanAttributes = { ...i.spanAttributes, [ss]: s.sampleRate });
    });
}
function _f(t, e, n) {
  const r = T(e);
  function s() {
    var a, c;
    try {
      return (
        Number((a = n.dsc) == null ? void 0 : a.sample_rate) ??
        Number((c = r.data) == null ? void 0 : c[Ln])
      );
    } catch {
      return 0;
    }
  }
  const o = {
    spanContext: e.spanContext(),
    startTimestamp: r.start_timestamp,
    sampleRate: s(),
    sampleRand: n.sampleRand,
  };
  if (!t) return o;
  const i = t.spanContext;
  return i.traceId === r.trace_id
    ? t
    : (Date.now() / 1e3 - t.startTimestamp <= hf &&
        (G &&
          h.log(
            `Adding previous_trace \`${JSON.stringify(i)}\` link to span \`${JSON.stringify({ op: r.op, ...e.spanContext() })}\``,
          ),
        e.addLink({ context: i, attributes: { [oa]: "previous_trace" } }),
        e.setAttribute(mf, `${i.traceId}-${i.spanId}-${Ir(i) ? 1 : 0}`)),
      o);
}
function yf(t) {
  try {
    S.sessionStorage.setItem(gi, JSON.stringify(t));
  } catch (e) {
    G && h.warn("Could not store previous trace in sessionStorage", e);
  }
}
function vf() {
  var t;
  try {
    const e = (t = S.sessionStorage) == null ? void 0 : t.getItem(gi);
    return JSON.parse(e);
  } catch {
    return;
  }
}
function Ir(t) {
  return t.traceFlags === 1;
}
const bf = "BrowserTracing",
  Sf =
    /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;
function Ef() {
  const t = S.navigator;
  return t != null && t.userAgent ? Sf.test(t.userAgent) : !1;
}
const wf = {
    ...Qe,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableLongAnimationFrame: !0,
    enableInp: !0,
    ignoreResourceSpans: [],
    ignorePerformanceApiSpans: [],
    detectRedirects: !0,
    linkPreviousTrace: "in-memory",
    consistentTraceSampling: !1,
    enableReportPageLoaded: !1,
    _experiments: {},
    ...hi,
  },
  Tf = (t = {}) => {
    "enableElementTiming" in t &&
      vt(() => {
        console.warn(
          "[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead.",
        );
      });
    const e = { name: void 0, source: void 0 },
      n = S.document,
      {
        enableInp: r,
        enableLongTask: s,
        enableLongAnimationFrame: o,
        _experiments: {
          enableInteractions: i,
          enableStandaloneClsSpans: a,
          enableStandaloneLcpSpans: c,
        },
        beforeStartSpan: u,
        idleTimeout: d,
        finalTimeout: p,
        childSpanTimeout: l,
        markBackgroundSpan: f,
        traceFetch: m,
        traceXHR: _,
        trackFetchStreamPerformance: y,
        shouldCreateSpanForRequest: j,
        enableHTTPTimings: M,
        ignoreResourceSpans: yt,
        ignorePerformanceApiSpans: Pt,
        instrumentPageLoad: Ot,
        instrumentNavigation: At,
        detectRedirects: E,
        linkPreviousTrace: P,
        consistentTraceSampling: Lt,
        enableReportPageLoaded: Y,
        onRequestSpanStart: at,
        onRequestSpanEnd: ct,
      } = { ...wf, ...t },
      $ = Ef();
    let H, V, z;
    function st(x, O, C = !0) {
      const I = O.op === "pageload",
        D = O.name,
        q = u ? u(O) : O,
        Rt = q.attributes || {};
      if ((D !== q.name && ((Rt[ht] = "custom"), (q.attributes = Rt)), !C)) {
        const le = Ft();
        re({ ...q, startTime: le }).end(le);
        return;
      }
      (e.name = q.name), (e.source = Rt[ht]);
      const Nt = js(q, {
        idleTimeout: d,
        finalTimeout: p,
        childSpanTimeout: l,
        disableAutoFinish: I,
        beforeSpanEnd: (le) => {
          H == null || H(),
            Td(le, {
              recordClsOnPageloadSpan: !a,
              recordLcpOnPageloadSpan: !c,
              ignoreResourceSpans: yt,
              ignorePerformanceApiSpans: Pt,
            }),
            bi(x, void 0);
          const $r = k(),
            Ei = $r.getPropagationContext();
          $r.setPropagationContext({
            ...Ei,
            traceId: Nt.spanContext().traceId,
            sampled: xt(Nt),
            dsc: mt(le),
          }),
            I && (z = void 0);
        },
        trimIdleSpanEndTimestamp: !Y,
      });
      I && Y && (z = Nt), bi(x, Nt);
      function Gt() {
        n &&
          ["interactive", "complete"].includes(n.readyState) &&
          x.emit("idleSpanEnableAutoFinish", Nt);
      }
      I &&
        !Y &&
        n &&
        (n.addEventListener("readystatechange", () => {
          Gt();
        }),
        Gt());
    }
    return {
      name: bf,
      setup(x) {
        var C;
        if ($) {
          G &&
            h.log(
              "[Tracing] Skipping browserTracingIntegration setup for bot user agent.",
            );
          return;
        }
        if (
          (La(),
          (H = _d({
            recordClsStandaloneSpans: a || !1,
            recordLcpStandaloneSpans: c || !1,
            client: x,
          })),
          r && Kd(),
          o &&
          b.PerformanceObserver &&
          (C = PerformanceObserver.supportedEntryTypes) != null &&
          C.includes("long-animation-frame")
            ? vd()
            : s && yd(),
          i && bd(),
          E && n)
        ) {
          const I = () => {
            V = R();
          };
          addEventListener("click", I, { capture: !0 }),
            addEventListener("keydown", I, { capture: !0, passive: !0 });
        }
        function O() {
          const I = De(x);
          I &&
            !T(I).timestamp &&
            (G &&
              h.log(
                `[Tracing] Finishing current active span with op: ${T(I).op}`,
              ),
            I.setAttribute(Se, "cancelled"),
            I.end());
        }
        x.on("startNavigationSpan", (I, D) => {
          if (w() !== x) return;
          if (D != null && D.isRedirect) {
            G &&
              h.warn(
                "[Tracing] Detected redirect, navigation span will not be the root span, but a child span.",
              ),
              st(x, { op: "navigation.redirect", ...I }, !1);
            return;
          }
          (V = void 0),
            O(),
            et().setPropagationContext({
              traceId: lt(),
              sampleRand: Math.random(),
              propagationSpanId: nt() ? void 0 : ft(),
            });
          const q = k();
          q.setPropagationContext({
            traceId: lt(),
            sampleRand: Math.random(),
            propagationSpanId: nt() ? void 0 : ft(),
          }),
            q.setSDKProcessingMetadata({ normalizedRequest: void 0 }),
            st(x, {
              op: "navigation",
              ...I,
              parentSpan: null,
              forceTransaction: !0,
            });
        }),
          x.on("startPageLoadSpan", (I, D = {}) => {
            if (w() !== x) return;
            O();
            const q = D.sentryTrace || _i("sentry-trace") || yi("sentry-trace"),
              Rt = D.baggage || _i("baggage") || yi("baggage"),
              Nt = xa(q, Rt),
              Gt = k();
            Gt.setPropagationContext(Nt),
              nt() || (Gt.getPropagationContext().propagationSpanId = ft()),
              Gt.setSDKProcessingMetadata({ normalizedRequest: or() }),
              st(x, { op: "pageload", ...I });
          }),
          x.on("endPageloadSpan", () => {
            Y && z && (z.setAttribute(Se, "reportPageLoaded"), z.end());
          });
      },
      afterAllSetup(x) {
        if ($) return;
        let O = me();
        if (
          (P !== "off" &&
            gf(x, { linkPreviousTrace: P, consistentTraceSampling: Lt }),
          S.location)
        ) {
          if (Ot) {
            const C = Q();
            xf(x, {
              name: S.location.pathname,
              startTime: C ? C / 1e3 : void 0,
              attributes: { [ht]: "url", [A]: "auto.pageload.browser" },
            });
          }
          At &&
            Er(({ to: C, from: I }) => {
              if (I === void 0 && (O == null ? void 0 : O.indexOf(C)) !== -1) {
                O = void 0;
                return;
              }
              O = void 0;
              const D = vo(C),
                q = De(x),
                Rt = q && E && $f(q, V);
              kf(
                x,
                {
                  name:
                    (D == null ? void 0 : D.pathname) || S.location.pathname,
                  attributes: { [ht]: "url", [A]: "auto.navigation.browser" },
                },
                { url: C, isRedirect: Rt },
              );
            });
        }
        f && ff(),
          i && If(x, d, p, l, e),
          r && Qd(),
          cf(x, {
            traceFetch: m,
            traceXHR: _,
            trackFetchStreamPerformance: y,
            tracePropagationTargets: x.getOptions().tracePropagationTargets,
            shouldCreateSpanForRequest: j,
            enableHTTPTimings: M,
            onRequestSpanStart: at,
            onRequestSpanEnd: ct,
          });
      },
    };
  };
function xf(t, e, n) {
  t.emit("startPageLoadSpan", e, n), k().setTransactionName(e.name);
  const r = De(t);
  return r && t.emit("afterStartPageLoadSpan", r), r;
}
function kf(t, e, n) {
  const { url: r, isRedirect: s } = n || {};
  t.emit("beforeStartNavigationSpan", e, { isRedirect: s }),
    t.emit("startNavigationSpan", e, { isRedirect: s });
  const o = k();
  return (
    o.setTransactionName(e.name),
    r &&
      !s &&
      o.setSDKProcessingMetadata({ normalizedRequest: { ...or(), url: r } }),
    De(t)
  );
}
function _i(t) {
  var e, n;
  return (
    ((n =
      (e = S.document) == null ? void 0 : e.querySelector(`meta[name=${t}]`)) ==
    null
      ? void 0
      : n.getAttribute("content")) || void 0
  );
}
function yi(t) {
  var e, n, r, s, o;
  return (o =
    (s =
      (r =
        (n = (e = S.performance) == null ? void 0 : e.getEntriesByType) == null
          ? void 0
          : n.call(e, "navigation")[0]) == null
        ? void 0
        : r.serverTiming) == null
      ? void 0
      : s.find((i) => i.name === t)) == null
    ? void 0
    : o.description;
}
function If(t, e, n, r, s) {
  const o = S.document;
  let i;
  const a = () => {
    const c = "ui.action.click",
      u = De(t);
    if (u) {
      const d = T(u).op;
      if (["navigation", "pageload"].includes(d)) {
        G &&
          h.warn(
            `[Tracing] Did not create ${c} span because a pageload or navigation span is in progress.`,
          );
        return;
      }
    }
    if (
      (i &&
        (i.setAttribute(Se, "interactionInterrupted"), i.end(), (i = void 0)),
      !s.name)
    ) {
      G &&
        h.warn(
          `[Tracing] Did not create ${c} transaction because _latestRouteName is missing.`,
        );
      return;
    }
    i = js(
      { name: s.name, op: c, attributes: { [ht]: s.source || "url" } },
      { idleTimeout: e, finalTimeout: n, childSpanTimeout: r },
    );
  };
  o && addEventListener("click", a, { capture: !0 });
}
const vi = "_sentry_idleSpan";
function De(t) {
  return t[vi];
}
function bi(t, e) {
  U(t, vi, e);
}
const Si = 1.5;
function $f(t, e) {
  const n = T(t),
    r = Ft(),
    s = n.start_timestamp;
  return !(r - s > Si || (e && r - e <= Si));
}
function Cf(t) {
  const e = { ...t };
  return bo(e, "react"), Pc("react", { version: wi.version }), sf(e);
}
export { Tf as b, cp as c, Cf as i };
