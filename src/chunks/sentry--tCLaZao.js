var Dt = Object.defineProperty;
var Mt = (t, e, n) =>
  e in t
    ? Dt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var R = (t, e, n) => Mt(t, typeof e != "symbol" ? e + "" : e, n);
import {
  b as Vt,
  n as Bt,
  c as zt,
  d as Ht,
  e as qt,
  f as Kt,
} from "./vendor-utils-bU8bXqsc.js";
import { a as Jt, r as Te } from "./vendor-ui-Piys8gOI.js";
import { i as Wt, b as Gt, c as Yt } from "./vendor-sentry-B3P1rFJ6.js";
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
    t.SENTRY_RELEASE = { id: "bookmarksync-extension@dev" };
    var e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "80971923-5d49-44fb-8a88-046ee58ab060"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-80971923-5d49-44fb-8a88-046ee58ab060"));
  } catch {}
})();
var Xt = Vt();
const x = Jt(Xt);
function _e() {
  return Bt();
}
function ot() {
  return x.runtime.getManifest().version;
}
async function Qt() {
  try {
    const { appSettings: t } = await x.storage.local.get("appSettings");
    return t.deviceId;
  } catch (t) {
    return console.error("Failed to get client id:", t), _e();
  }
}
async function Zt() {
  var t, e;
  try {
    const { appSettings: n } = await x.storage.local.get("appSettings"),
      s = n;
    if (s != null && s.deviceName) return s.deviceName;
    {
      const o = await ((e = (t = x.runtime).getBrowserInfo) == null
          ? void 0
          : e.call(t)),
        i = await x.runtime.getPlatformInfo(),
        r = (o == null ? void 0 : o.name) || "Chrome",
        a = (i == null ? void 0 : i.os) || "Unknown",
        l = `${r}@${a}`;
      return (
        await x.storage.local.set({
          appSettings: { ...it, ...s, deviceName: l },
        }),
        l
      );
    }
  } catch (n) {
    return console.error("Failed to get client name:", n), "Unknown";
  }
}
function en(t) {
  const e = t.getFullYear(),
    n = String(t.getMonth() + 1).padStart(2, "0"),
    s = String(t.getDate()).padStart(2, "0");
  return `${e}-${n}-${s}`;
}
function tn() {
  const t = (e, n) => {
    if (!/\{\s*\[native code\]\s*\}/.test(e.toString()))
      throw (
        (console.error(
          `[SecurityViolation] Native function '${n}' has been tampered with!`,
        ),
        new Error(
          "The plugin runtime environment is abnormal; the security core refuses to initialize",
        ))
      );
  };
  t(fetch, "fetch"),
    t(JSON.parse, "JSON.parse"),
    t(JSON.stringify, "JSON.stringify"),
    t(atob, "atob"),
    t(btoa, "btoa"),
    typeof crypto < "u" &&
      (t(crypto.subtle.encrypt, "crypto.subtle.encrypt"),
      t(crypto.subtle.decrypt, "crypto.subtle.decrypt"));
}
const it = {
    language: "en",
    theme: "system",
    enableNotifications: !0,
    enableTelemetry: !0,
    deviceName: "my browser@mac",
    deviceId: _e(),
    enableAutoSync: !1,
    syncInterval: 60,
    conflictStrategy: "merge",
    enableEncryption: !1,
    encryptionKey: "",
    formatJson: !1,
    enableSafeMode: !0,
    safeModeThreshold: 20,
    storageType: "gist",
    storageConfigs: {
      github: {
        token: "",
        owner: "",
        repo: "",
        branch: "main",
        filePath: "bookmarksync.json",
      },
      webdav: {
        url: "",
        username: "",
        password: "",
        filePath: "bookmarksync.json",
      },
      gist: { token: "", gistId: "", fileName: "bookmarksync.json" },
      gitee: {
        token: "",
        owner: "",
        repo: "",
        branch: "master",
        filePath: "bookmarksync.json",
      },
      gitlab: {
        token: "",
        projectId: "",
        branch: "main",
        filePath: "bookmarksync.json",
        baseUrl: "https://gitlab.com",
      },
      googledrive: { accessToken: "", fileName: "bookmarksync.json" },
      dropbox: { accessToken: "", filePath: "/bookmarksync.json" },
      onedrive: { accessToken: "", filePath: "bookmarksync.json" },
      s3: {
        accessKeyId: "",
        secretAccessKey: "",
        bucket: "",
        region: "us-east-1",
        endpoint: "",
        filePath: "bookmarksync.json",
        forcePathStyle: !1,
      },
    },
    maxSnapshotsToKeep: 15,
  },
  nn = "BookmarkSync",
  sn = "\u4E66\u7B7E\u540C\u6B65",
  on = "https://bh.memoload.com",
  rn = "https://github.com/xxue-z/BookmarkSync",
  an = "https://bh.memoload.com",
  ln =
    "841468457533-1u5l56hiog2duo3301mbfnr5bm6lnni4.apps.googleusercontent.com",
  cn = "vly5m7i9m9m7m7m",
  un = "7ea4e1e5-4b7c-4e54-9911-b7533bdaac41",
  be = {
    APP_NAME: nn,
    APP_TITLE: sn,
    APP_URL: on,
    APP_GITHUB_URL: rn,
    API_BASE_URL: an,
    GOOGLE_CLIENT_ID: ln,
    DROPBOX_CLIENT_ID: cn,
    ONEDRIVE_CLIENT_ID: un,
    ACTIVITY_JSON_URL:
      "https://raw.githubusercontent.com/xxue-z/BookmarkSync/refs/heads/main/assets/data/activities.json",
  },
  N = {
    BAR: "root_____bar",
    OTHER: "root_____other",
    MOBILE: "root_____mobile",
    ROOT: "root_____",
  },
  Ne = [N.BAR, N.OTHER];
let te = { 1: N.BAR, 2: N.OTHER, 3: N.MOBILE, 0: N.ROOT };
const $e = {
  mobile______: N.MOBILE,
  toolbar_____: N.BAR,
  unfiled_____: N.OTHER,
  root________: N.ROOT,
};
let Ie = ["1", "2", "toolbar_____", "unfiled_____"];
async function hn() {
  if (ie()) return $e;
  try {
    const t = (await x.bookmarks.getTree())[0];
    if (!t || !t.children) return te;
    const e = { 0: N.ROOT },
      n = [];
    return (
      t.children.forEach((s, o) => {
        const i = s.folderType;
        let r = null;
        i === "bookmarks-bar"
          ? (r = N.BAR)
          : i === "other"
            ? (r = N.OTHER)
            : i === "mobile"
              ? (r = N.MOBILE)
              : i ||
                (o === 0
                  ? (r = N.BAR)
                  : o === 1
                    ? (r = N.OTHER)
                    : o === 2 && (r = N.MOBILE)),
          r && ((e[s.id] = r), Ne.includes(r) && n.push(s.id));
      }),
      (te = e),
      (Ie = Array.from(new Set([...n, "toolbar_____", "unfiled_____"]))),
      te
    );
  } catch (t) {
    return console.error("[BookmarkSync] Failed to init system IDs:", t), te;
  }
}
function dn() {
  return ie() ? $e : te;
}
function ie() {
  return /Firefox/.test(navigator.userAgent);
}
function rt() {
  return ie() ? $e : te;
}
function at(t) {
  return rt()[t] || t;
}
function pn(t) {
  const e = rt();
  return Object.entries(e).reduce((n, [s, o]) => ((n[o] = s), n), {})[t] || t;
}
function gn(t, e = {}) {
  var r;
  const n = [],
    s = {};
  function o(a) {
    if (s[a]) return s[a];
    if (e[a]) {
      const u = e[a];
      return (s[a] = u), u;
    }
    const l = at(a);
    if (l !== a) return (s[a] = l), l;
    const c = _e();
    return (s[a] = c), c;
  }
  function i(a, l) {
    const c = o(a.id),
      u = {
        id: c,
        type: a.url ? "url" : "folder",
        parentId: l,
        title: a.title || "",
        dateModified: a.dateGroupModified || a.dateAdded || Date.now(),
      };
    a.url && (u.url = a.url),
      a.children && (u.children = a.children.map((h) => o(h.id))),
      n.push(u),
      a.children && a.children.forEach((h) => i(h, c));
  }
  return (
    (r = t[0].children) == null ||
      r
        .filter((a) => Ie.includes(a.id))
        .sort((a, l) => (a.id > l.id ? 1 : -1))
        .forEach((a) => i(a, at(t[0].id))),
    { nodes: n, idMapping: s }
  );
}
function fn(t) {
  const e = new Map();
  t.forEach((s) => e.set(s.id, s));
  const n = (s) => {
    const o = e.get(s);
    if (!o) return null;
    const i = { id: o.id, title: o.title, dateModified: o.dateModified };
    return (
      o.url && (i.url = o.url),
      o.children &&
        o.children.length > 0 &&
        (i.children = o.children.map((r) => n(r)).filter((r) => r !== null)),
      i
    );
  };
  return t
    .filter((s) => Ne.includes(s.id))
    .sort((s, o) => (s.id > o.id ? 1 : -1))
    .map((s) => n(s.id))
    .filter((s) => s !== null);
}
function _n(t) {
  const e = [];
  if (!t || t.length === 0) return e;
  function n(s, o) {
    const i = {
      id: s.id,
      type: s.url ? "url" : "folder",
      parentId: o,
      title: s.title,
      dateModified: s.dateModified,
    };
    s.url && (i.url = s.url),
      s.children && (i.children = s.children.map((r) => r.id)),
      e.push(i),
      s.children && s.children.forEach((r) => n(r, s.id));
  }
  return t.forEach((s) => n(s, N.ROOT)), e;
}
function bn(t = "") {
  const e = be.APP_URL,
    n = t.includes("?") ? "&" : "?",
    s = `${e}${t}${n}utm_source=ext`;
  window.open(s, "_blank");
}
const yn = (t) => {
  window.open(t, "_blank");
};
async function mn(t) {
  if (!t) return !1;
  try {
    const e = new URL(t),
      n = `${e.protocol}//${e.host}/*`;
    return await x.permissions.request({ origins: [n] });
  } catch (e) {
    return console.error("Failed to request host permission:", e), !1;
  }
}
async function wn() {
  try {
    if (ie()) return !0;
    const t = await x.permissions.request({ permissions: ["identity"] });
    return (
      t || console.warn("[AuthUtils] Identity permission was denied by user"), t
    );
  } catch (t) {
    return (
      console.error("[AuthUtils] Error requesting identity permission:", t), !1
    );
  }
}
const lt = () => (typeof x < "u" && x.i18n ? x.i18n.getUILanguage() : "en");
async function vn() {
  try {
    if (typeof x < "u" && x.runtime && x.runtime.openOptionsPage)
      await x.runtime.openOptionsPage();
    else throw new Error("browser.runtime.openOptionsPage is not available");
  } catch (t) {
    console.warn(
      "[BrowserUtils] openOptionsPage API failed, falling back to tabs.create:",
      t,
    );
    try {
      const e = x.runtime.getURL("src/options/index.html"),
        n = await x.tabs.query({ url: e + "*" });
      n.length > 0 && n[0].id
        ? (await x.tabs.update(n[0].id, { active: !0 }),
          n[0].windowId &&
            (await x.windows.update(n[0].windowId, { focused: !0 })))
        : await x.tabs.create({ url: e });
    } catch (e) {
      console.error(
        "[BrowserUtils] All attempts to open options page failed:",
        e,
      );
    }
  }
}
const Sn = {
    proto:
      /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    constructor:
      /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    protoShort: /"__proto__"\s*:/,
    constructorShort: /"constructor"\s*:/,
  },
  kn = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,
  ct = {
    true: !0,
    false: !1,
    null: null,
    undefined: void 0,
    nan: NaN,
    infinity: Number.POSITIVE_INFINITY,
    "-infinity": Number.NEGATIVE_INFINITY,
  },
  xn =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;
function On(t) {
  return t instanceof Date && !isNaN(t.getTime());
}
function Ln(t) {
  const e = xn.exec(t);
  if (!e) return null;
  const [, n, s, o, i, r, a, l, c, u, h] = e,
    p = new Date(
      Date.UTC(
        parseInt(n, 10),
        parseInt(s, 10) - 1,
        parseInt(o, 10),
        parseInt(i, 10),
        parseInt(r, 10),
        parseInt(a, 10),
        l ? parseInt(l.padEnd(3, "0"), 10) : 0,
      ),
    );
  if (c) {
    const f = (parseInt(u, 10) * 60 + parseInt(h, 10)) * (c === "+" ? -1 : 1);
    p.setUTCMinutes(p.getUTCMinutes() + f);
  }
  return On(p) ? p : null;
}
function Rn(t, e = {}) {
  const {
    strict: n = !1,
    warnings: s = !1,
    reviver: o,
    parseDates: i = !0,
  } = e;
  if (typeof t != "string") return t;
  const r = t.trim();
  if (
    r.length > 0 &&
    r[0] === '"' &&
    r.endsWith('"') &&
    !r.slice(1, -1).includes('"')
  )
    return r.slice(1, -1);
  const a = r.toLowerCase();
  if (a.length <= 9 && a in ct) return ct[a];
  if (!kn.test(r)) {
    if (n) throw new SyntaxError("[better-json] Invalid JSON");
    return t;
  }
  if (
    Object.entries(Sn).some(([l, c]) => {
      const u = c.test(r);
      return (
        u &&
          s &&
          console.warn(
            `[better-json] Detected potential prototype pollution attempt using ${l} pattern`,
          ),
        u
      );
    }) &&
    n
  )
    throw new Error(
      "[better-json] Potential prototype pollution attempt detected",
    );
  try {
    return JSON.parse(r, (l, c) => {
      if (
        l === "__proto__" ||
        (l === "constructor" && c && typeof c == "object" && "prototype" in c)
      ) {
        s &&
          console.warn(
            `[better-json] Dropping "${l}" key to prevent prototype pollution`,
          );
        return;
      }
      if (i && typeof c == "string") {
        const u = Ln(c);
        if (u) return u;
      }
      return o ? o(l, c) : c;
    });
  } catch (l) {
    if (n) throw l;
    return t;
  }
}
function Pn(t, e = { strict: !0 }) {
  return Rn(t, e);
}
const En = {
  id: "redirect",
  name: "Redirect",
  hooks: {
    onSuccess(t) {
      var e, n;
      if (
        (e = t.data) != null &&
        e.url &&
        (n = t.data) != null &&
        n.redirect &&
        typeof window < "u" &&
        window.location &&
        window.location
      )
        try {
          window.location.href = t.data.url;
        } catch {}
    },
  },
};
let z = [],
  G = 0;
const ye = 4,
  ut = (t) => {
    let e = [],
      n = {
        get() {
          return n.lc || n.listen(() => {})(), n.value;
        },
        init: t,
        lc: 0,
        listen(s) {
          return (
            (n.lc = e.push(s)),
            () => {
              for (let i = G + ye; i < z.length; )
                z[i] === s ? z.splice(i, ye) : (i += ye);
              let o = e.indexOf(s);
              ~o && (e.splice(o, 1), --n.lc || n.off());
            }
          );
        },
        notify(s, o) {
          let i = !z.length;
          for (let r of e) z.push(r, n.value, s, o);
          if (i) {
            for (G = 0; G < z.length; G += ye)
              z[G](z[G + 1], z[G + 2], z[G + 3]);
            z.length = 0;
          }
        },
        off() {},
        set(s) {
          let o = n.value;
          o !== s && ((n.value = s), n.notify(o));
        },
        subscribe(s) {
          let o = n.listen(s);
          return s(n.value), o;
        },
        value: t,
      };
    return n;
  },
  Tn = 5,
  me = 6,
  we = 10;
let Nn = (t, e, n, s) => (
    (t.events = t.events || {}),
    t.events[n + we] ||
      (t.events[n + we] = s((o) => {
        t.events[n].reduceRight((i, r) => (r(i), i), { shared: {}, ...o });
      })),
    (t.events[n] = t.events[n] || []),
    t.events[n].push(e),
    () => {
      let o = t.events[n],
        i = o.indexOf(e);
      o.splice(i, 1),
        o.length ||
          (delete t.events[n], t.events[n + we](), delete t.events[n + we]);
    }
  ),
  $n = 1e3,
  ht = (t, e) =>
    Nn(
      t,
      (n) => {
        let s = e(n);
        s && t.events[me].push(s);
      },
      Tn,
      (n) => {
        let s = t.listen;
        t.listen = (...i) => (
          !t.lc && !t.active && ((t.active = !0), n()), s(...i)
        );
        let o = t.off;
        return (
          (t.events[me] = []),
          (t.off = () => {
            o(),
              setTimeout(() => {
                if (t.active && !t.lc) {
                  t.active = !1;
                  for (let i of t.events[me]) i();
                  t.events[me] = [];
                }
              }, $n);
          }),
          () => {
            (t.listen = s), (t.off = o);
          }
        );
      },
    );
function In(t, e, n) {
  let s = new Set(e).add(void 0);
  return t.listen((o, i, r) => {
    s.has(r) && n(o, i, r);
  });
}
const jn = () => typeof window > "u",
  Cn = (t, e, n, s) => {
    const o = ut({
        data: null,
        error: null,
        isPending: !0,
        isRefetching: !1,
        refetch: (a) => i(a),
      }),
      i = async (a) =>
        new Promise((l) => {
          const c =
            typeof s == "function"
              ? s({
                  data: o.get().data,
                  error: o.get().error,
                  isPending: o.get().isPending,
                })
              : s;
          n(e, {
            ...c,
            query: {
              ...(c == null ? void 0 : c.query),
              ...(a == null ? void 0 : a.query),
            },
            async onSuccess(u) {
              var h;
              o.set({
                data: u.data,
                error: null,
                isPending: !1,
                isRefetching: !1,
                refetch: o.value.refetch,
              }),
                await ((h = c == null ? void 0 : c.onSuccess) == null
                  ? void 0
                  : h.call(c, u));
            },
            async onError(u) {
              var m, b;
              const { request: h } = u,
                p =
                  typeof h.retry == "number"
                    ? h.retry
                    : (m = h.retry) == null
                      ? void 0
                      : m.attempts,
                f = h.retryAttempt || 0;
              if (p && f < p) return;
              const g = u.error.status === 401;
              o.set({
                error: u.error,
                data: g ? null : o.get().data,
                isPending: !1,
                isRefetching: !1,
                refetch: o.value.refetch,
              }),
                await ((b = c == null ? void 0 : c.onError) == null
                  ? void 0
                  : b.call(c, u));
            },
            async onRequest(u) {
              var p;
              const h = o.get();
              o.set({
                isPending: h.data === null,
                data: h.data,
                error: null,
                isRefetching: !0,
                refetch: o.value.refetch,
              }),
                await ((p = c == null ? void 0 : c.onRequest) == null
                  ? void 0
                  : p.call(c, u));
            },
          })
            .catch((u) => {
              o.set({
                error: u,
                data: o.get().data,
                isPending: !1,
                isRefetching: !1,
                refetch: o.value.refetch,
              });
            })
            .finally(() => {
              l(void 0);
            });
        });
    t = Array.isArray(t) ? t : [t];
    let r = !1;
    for (const a of t)
      a.subscribe(async () => {
        jn() ||
          (r
            ? await i()
            : ht(o, () => {
                const l = setTimeout(async () => {
                  r || (await i(), (r = !0));
                }, 0);
                return () => {
                  o.off(), a.off(), clearTimeout(l);
                };
              }));
      });
    return o;
  },
  je = Symbol.for("better-auth:broadcast-channel"),
  An = () => Math.floor(Date.now() / 1e3);
var Fn = class {
  constructor(t = "better-auth.message") {
    R(this, "listeners", new Set());
    R(this, "name");
    this.name = t;
  }
  subscribe(t) {
    return (
      this.listeners.add(t),
      () => {
        this.listeners.delete(t);
      }
    );
  }
  post(t) {
    if (!(typeof window > "u"))
      try {
        localStorage.setItem(
          this.name,
          JSON.stringify({ ...t, timestamp: An() }),
        );
      } catch {}
  }
  setup() {
    if (typeof window > "u" || typeof window.addEventListener > "u")
      return () => {};
    const t = (e) => {
      if (e.key !== this.name) return;
      const n = JSON.parse(e.newValue ?? "{}");
      (n == null ? void 0 : n.event) !== "session" ||
        !(n != null && n.data) ||
        this.listeners.forEach((s) => s(n));
    };
    return (
      window.addEventListener("storage", t),
      () => {
        window.removeEventListener("storage", t);
      }
    );
  }
};
function Ce(t = "better-auth.message") {
  return globalThis[je] || (globalThis[je] = new Fn(t)), globalThis[je];
}
const Ae = Symbol.for("better-auth:focus-manager");
var Un = class {
  constructor() {
    R(this, "listeners", new Set());
  }
  subscribe(t) {
    return (
      this.listeners.add(t),
      () => {
        this.listeners.delete(t);
      }
    );
  }
  setFocused(t) {
    this.listeners.forEach((e) => e(t));
  }
  setup() {
    if (
      typeof window > "u" ||
      typeof document > "u" ||
      typeof window.addEventListener > "u"
    )
      return () => {};
    const t = () => {
      document.visibilityState === "visible" && this.setFocused(!0);
    };
    return (
      document.addEventListener("visibilitychange", t, !1),
      () => {
        document.removeEventListener("visibilitychange", t, !1);
      }
    );
  }
};
function dt() {
  return globalThis[Ae] || (globalThis[Ae] = new Un()), globalThis[Ae];
}
const Fe = Symbol.for("better-auth:online-manager");
var Dn = class {
  constructor() {
    R(this, "listeners", new Set());
    R(this, "isOnline", typeof navigator < "u" ? navigator.onLine : !0);
  }
  subscribe(t) {
    return (
      this.listeners.add(t),
      () => {
        this.listeners.delete(t);
      }
    );
  }
  setOnline(t) {
    (this.isOnline = t), this.listeners.forEach((e) => e(t));
  }
  setup() {
    if (typeof window > "u" || typeof window.addEventListener > "u")
      return () => {};
    const t = () => this.setOnline(!0),
      e = () => this.setOnline(!1);
    return (
      window.addEventListener("online", t, !1),
      window.addEventListener("offline", e, !1),
      () => {
        window.removeEventListener("online", t, !1),
          window.removeEventListener("offline", e, !1);
      }
    );
  }
};
function Ue() {
  return globalThis[Fe] || (globalThis[Fe] = new Dn()), globalThis[Fe];
}
const ne = () => Math.floor(Date.now() / 1e3);
function pt(t) {
  return typeof t == "object" && t !== null && "data" in t && "error" in t
    ? t
    : { data: t, error: null };
}
const Mn = 5;
function Vn(t) {
  var b, S, T;
  const { sessionAtom: e, sessionSignal: n, $fetch: s, options: o = {} } = t,
    i = ((b = o.sessionOptions) == null ? void 0 : b.refetchInterval) ?? 0,
    r =
      ((S = o.sessionOptions) == null ? void 0 : S.refetchOnWindowFocus) ?? !0,
    a = ((T = o.sessionOptions) == null ? void 0 : T.refetchWhenOffline) ?? !1,
    l = { lastSync: 0, lastSessionRequest: 0, cachedSession: void 0 },
    c = () => a || Ue().isOnline,
    u = (w) => {
      if (!c()) return;
      if ((w == null ? void 0 : w.event) === "storage") {
        (l.lastSync = ne()), n.set(!n.get());
        return;
      }
      const k = e.get(),
        $ = () => {
          (l.lastSessionRequest = ne()),
            s("/get-session")
              .then(async (M) => {
                let { data: v, error: A } = pt(M);
                if (v != null && v.needsRefresh)
                  try {
                    const E = await s("/get-session", { method: "POST" });
                    ({ data: v, error: A } = pt(E));
                  } catch {}
                const P =
                  v != null && v.session && v != null && v.user ? v : null;
                e.set({ ...k, data: P, error: A }),
                  (l.lastSync = ne()),
                  n.set(!n.get());
              })
              .catch(() => {});
        };
      if ((w == null ? void 0 : w.event) === "poll") {
        $();
        return;
      }
      if ((w == null ? void 0 : w.event) === "visibilitychange") {
        if (ne() - l.lastSessionRequest < Mn) return;
        l.lastSessionRequest = ne();
      }
      if ((w == null ? void 0 : w.event) === "visibilitychange") {
        $();
        return;
      }
      ((k == null ? void 0 : k.data) === null ||
        (k == null ? void 0 : k.data) === void 0) &&
        ((l.lastSync = ne()), n.set(!n.get()));
    },
    h = (w) => {
      Ce().post({
        event: "session",
        data: { trigger: w },
        clientId: Math.random().toString(36).substring(7),
      });
    },
    p = () => {
      i &&
        i > 0 &&
        (l.pollInterval = setInterval(() => {
          var w;
          (w = e.get()) != null && w.data && u({ event: "poll" });
        }, i * 1e3));
    },
    f = () => {
      l.unsubscribeBroadcast = Ce().subscribe(() => {
        u({ event: "storage" });
      });
    },
    g = () => {
      r &&
        (l.unsubscribeFocus = dt().subscribe(() => {
          u({ event: "visibilitychange" });
        }));
    },
    m = () => {
      l.unsubscribeOnline = Ue().subscribe((w) => {
        w && u({ event: "visibilitychange" });
      });
    };
  return {
    init: () => {
      p(), f(), g(), m(), Ce().setup(), dt().setup(), Ue().setup();
    },
    cleanup: () => {
      l.pollInterval &&
        (clearInterval(l.pollInterval), (l.pollInterval = void 0)),
        l.unsubscribeBroadcast &&
          (l.unsubscribeBroadcast(), (l.unsubscribeBroadcast = void 0)),
        l.unsubscribeFocus &&
          (l.unsubscribeFocus(), (l.unsubscribeFocus = void 0)),
        l.unsubscribeOnline &&
          (l.unsubscribeOnline(), (l.unsubscribeOnline = void 0)),
        (l.lastSync = 0),
        (l.lastSessionRequest = 0),
        (l.cachedSession = void 0);
    },
    triggerRefetch: u,
    broadcastSessionUpdate: h,
  };
}
function Bn(t, e) {
  const n = ut(!1),
    s = Cn(n, "/get-session", t, { method: "GET" });
  let o = () => {};
  return (
    ht(s, () => {
      const i = Vn({ sessionAtom: s, sessionSignal: n, $fetch: t, options: e });
      return (
        i.init(),
        (o = i.broadcastSessionUpdate),
        () => {
          i.cleanup();
        }
      );
    }),
    { session: s, $sessionSignal: n, broadcastSessionUpdate: (i) => o(i) }
  );
}
var X = {};
const zn = (t) => {
    if (typeof process > "u") return;
    const e = t ?? "/api/auth";
    if (X.NEXT_PUBLIC_AUTH_URL) return X.NEXT_PUBLIC_AUTH_URL;
    if (typeof window > "u") {
      if (X.NEXTAUTH_URL)
        try {
          return X.NEXTAUTH_URL;
        } catch {}
      if (X.VERCEL_URL)
        try {
          const n = X.VERCEL_URL.startsWith("http") ? "" : "https://";
          return `${new URL(`${n}${X.VERCEL_URL}`).origin}${e}`;
        } catch {}
    }
  },
  Hn = (t, e) => {
    var $, M, v, A, P, E, ge;
    const n = "credentials" in Request.prototype,
      s =
        zt(t == null ? void 0 : t.baseURL, t == null ? void 0 : t.basePath) ??
        zn(t == null ? void 0 : t.basePath) ??
        "/api/auth",
      o =
        (($ = t == null ? void 0 : t.plugins) == null
          ? void 0
          : $.flatMap((y) => y.fetchPlugins).filter((y) => y !== void 0)) || [],
      i = {
        id: "lifecycle-hooks",
        name: "lifecycle-hooks",
        hooks: {
          onSuccess:
            (M = t == null ? void 0 : t.fetchOptions) == null
              ? void 0
              : M.onSuccess,
          onError:
            (v = t == null ? void 0 : t.fetchOptions) == null
              ? void 0
              : v.onError,
          onRequest:
            (A = t == null ? void 0 : t.fetchOptions) == null
              ? void 0
              : A.onRequest,
          onResponse:
            (P = t == null ? void 0 : t.fetchOptions) == null
              ? void 0
              : P.onResponse,
        },
      },
      {
        onSuccess: r,
        onError: a,
        onRequest: l,
        onResponse: c,
        ...u
      } = (t == null ? void 0 : t.fetchOptions) || {},
      h = Ht({
        baseURL: s,
        ...(n ? { credentials: "include" } : {}),
        method: "GET",
        jsonParser(y) {
          return y ? Pn(y, { strict: !1 }) : null;
        },
        customFetchImpl: fetch,
        ...u,
        plugins: [
          i,
          ...(u.plugins || []),
          ...(t != null && t.disableDefaultFetchPlugins ? [] : [En]),
          ...o,
        ],
      }),
      { $sessionSignal: p, session: f, broadcastSessionUpdate: g } = Bn(h, t),
      m = (t == null ? void 0 : t.plugins) || [];
    let b = {};
    const S = { $sessionSignal: p, session: f },
      T = {
        "/sign-out": "POST",
        "/revoke-sessions": "POST",
        "/revoke-other-sessions": "POST",
        "/delete-user": "POST",
      },
      w = [
        {
          signal: "$sessionSignal",
          matcher(y) {
            return (
              y === "/sign-out" ||
              y === "/update-user" ||
              y === "/update-session" ||
              y === "/sign-up/email" ||
              y === "/sign-in/email" ||
              y === "/delete-user" ||
              y === "/verify-email" ||
              y === "/revoke-sessions" ||
              y === "/revoke-session" ||
              y === "/change-email"
            );
          },
          callback(y) {
            y === "/sign-out"
              ? g("signout")
              : (y === "/update-user" || y === "/update-session") &&
                g("updateUser");
          },
        },
      ];
    for (const y of m)
      y.getAtoms &&
        Object.assign(S, (E = y.getAtoms) == null ? void 0 : E.call(y, h)),
        y.pathMethods && Object.assign(T, y.pathMethods),
        y.atomListeners && w.push(...y.atomListeners);
    const k = {
      notify: (y) => {
        S[y].set(!S[y].get());
      },
      listen: (y, j) => {
        S[y].subscribe(j);
      },
      atoms: S,
    };
    for (const y of m)
      y.getActions &&
        (b = qt(
          ((ge = y.getActions) == null ? void 0 : ge.call(y, h, k, t)) ?? {},
          b,
        ));
    return {
      get baseURL() {
        return s;
      },
      pluginsActions: b,
      pluginsAtoms: S,
      pluginPathMethods: T,
      atomListeners: w,
      $fetch: h,
      $store: k,
    };
  };
function qn(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    "get" in t &&
    typeof t.get == "function" &&
    "lc" in t &&
    typeof t.lc == "number"
  );
}
function Kn(t, e, n) {
  const s = e[t],
    { fetchOptions: o, query: i, ...r } = n || {};
  return (
    s ||
    (o != null && o.method
      ? o.method
      : r && Object.keys(r).length > 0
        ? "POST"
        : "GET")
  );
}
function Jn(t, e, n, s, o) {
  function i(r = []) {
    return new Proxy(function () {}, {
      get(a, l) {
        if (
          typeof l != "string" ||
          l === "then" ||
          l === "catch" ||
          l === "finally"
        )
          return;
        const c = [...r, l];
        let u = t;
        for (const h of c)
          if (u && typeof u == "object" && h in u) u = u[h];
          else {
            u = void 0;
            break;
          }
        return typeof u == "function" || qn(u) ? u : i(c);
      },
      apply: async (a, l, c) => {
        const u =
            "/" +
            r
              .map((T) => T.replace(/[A-Z]/g, (w) => `-${w.toLowerCase()}`))
              .join("/"),
          h = c[0] || {},
          p = c[1] || {},
          { query: f, fetchOptions: g, ...m } = h,
          b = { ...p, ...g },
          S = Kn(u, n, h);
        return await e(u, {
          ...b,
          body:
            S === "GET"
              ? void 0
              : { ...m, ...((b == null ? void 0 : b.body) || {}) },
          query: f || (b == null ? void 0 : b.query),
          method: S,
          async onSuccess(T) {
            var $, M;
            if (
              (await (($ = b == null ? void 0 : b.onSuccess) == null
                ? void 0
                : $.call(b, T)),
              !o || b.disableSignal)
            )
              return;
            const w = o.filter((v) => v.matcher(u));
            if (!w.length) return;
            const k = new Set();
            for (const v of w) {
              const A = s[v.signal];
              if (!A) return;
              if (k.has(v.signal)) continue;
              k.add(v.signal);
              const P = A.get();
              setTimeout(() => {
                A.set(!P);
              }, 10),
                (M = v.callback) == null || M.call(v, u);
            }
          },
        });
      },
    });
  }
  return i();
}
function Wn(t, e = {}) {
  const n = Te.useRef(t.get()),
    { keys: s, deps: o = [t, s] } = e,
    i = Te.useCallback((a) => {
      const l = (c) => {
        n.current !== c && ((n.current = c), a());
      };
      return l(t.value), s != null && s.length ? In(t, s, l) : t.listen(l);
    }, o),
    r = () => n.current;
  return Te.useSyncExternalStore(i, r, r);
}
function Gn(t) {
  return `use${Kt(t)}`;
}
function Yn(t) {
  const {
      pluginPathMethods: e,
      pluginsActions: n,
      pluginsAtoms: s,
      $fetch: o,
      $store: i,
      atomListeners: r,
    } = Hn(t),
    a = {};
  for (const [l, c] of Object.entries(s)) a[Gn(l)] = () => Wn(c);
  return Jn({ ...n, ...a, $fetch: o, $store: i }, o, e, s, r);
}
const Xn = Yn({ baseURL: be.APP_URL }),
  ve = "licenseToken";
class De {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), gt.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    d.__wbg_coreengine_free(e, 0);
  }
  calculate_change_stats(e, n, s) {
    const o = L(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      i = O,
      r = L(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
      a = O,
      l = L(s, d.__wbindgen_malloc, d.__wbindgen_realloc),
      c = O,
      u = d.coreengine_calculate_change_stats(this.__wbg_ptr, o, i, r, a, l, c);
    if (u[2]) throw V(u[1]);
    return V(u[0]);
  }
  decrypt_user_nodes(e, n) {
    let s, o;
    try {
      const a = L(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
        l = O,
        c = L(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
        u = O,
        h = d.coreengine_decrypt_user_nodes(this.__wbg_ptr, a, l, c, u);
      var i = h[0],
        r = h[1];
      if (h[3]) throw ((i = 0), (r = 0), V(h[2]));
      return (s = i), (o = r), W(i, r);
    } finally {
      d.__wbindgen_free(s, o, 1);
    }
  }
  encrypt_data(e) {
    let n, s;
    try {
      const r = L(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
        a = O,
        l = d.coreengine_encrypt_data(this.__wbg_ptr, r, a);
      var o = l[0],
        i = l[1];
      if (l[3]) throw ((o = 0), (i = 0), V(l[2]));
      return (n = o), (s = i), W(o, i);
    } finally {
      d.__wbindgen_free(n, s, 1);
    }
  }
  encrypt_user_nodes(e, n) {
    let s, o;
    try {
      const a = L(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
        l = O,
        c = L(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
        u = O,
        h = d.coreengine_encrypt_user_nodes(this.__wbg_ptr, a, l, c, u);
      var i = h[0],
        r = h[1];
      if (h[3]) throw ((i = 0), (r = 0), V(h[2]));
      return (s = i), (o = r), W(i, r);
    } finally {
      d.__wbindgen_free(s, o, 1);
    }
  }
  has_permission(e, n) {
    const s = L(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      o = O,
      i = L(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
      r = O;
    return d.coreengine_has_permission(this.__wbg_ptr, s, o, i, r) !== 0;
  }
  merge_nodes(e, n, s, o) {
    let i, r;
    try {
      const c = L(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
        u = O,
        h = L(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
        p = O,
        f = L(s, d.__wbindgen_malloc, d.__wbindgen_realloc),
        g = O,
        m = L(o, d.__wbindgen_malloc, d.__wbindgen_realloc),
        b = O,
        S = d.coreengine_merge_nodes(this.__wbg_ptr, c, u, h, p, f, g, m, b);
      var a = S[0],
        l = S[1];
      if (S[3]) throw ((a = 0), (l = 0), V(S[2]));
      return (i = a), (r = l), W(a, l);
    } finally {
      d.__wbindgen_free(i, r, 1);
    }
  }
  constructor() {
    const e = d.coreengine_new();
    if (e[2]) throw V(e[1]);
    return (
      (this.__wbg_ptr = e[0] >>> 0),
      gt.register(this, this.__wbg_ptr, this),
      this
    );
  }
  register(e, n) {
    const s = L(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      o = O;
    d.coreengine_register(this.__wbg_ptr, s, o, n);
  }
  smart_merge_new_device(e, n) {
    let s, o;
    try {
      const a = L(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
        l = O,
        c = L(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
        u = O,
        h = d.coreengine_smart_merge_new_device(this.__wbg_ptr, a, l, c, u);
      var i = h[0],
        r = h[1];
      if (h[3]) throw ((i = 0), (r = 0), V(h[2]));
      return (s = i), (o = r), W(i, r);
    } finally {
      d.__wbindgen_free(s, o, 1);
    }
  }
  trigger(e, n) {
    const s = L(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      o = O,
      i = L(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
      r = O,
      a = d.coreengine_trigger(this.__wbg_ptr, s, o, i, r);
    if (a[2]) throw V(a[1]);
    return V(a[0]);
  }
  validate_license_token(e) {
    const n = L(e, d.__wbindgen_malloc, d.__wbindgen_realloc),
      s = O,
      o = d.coreengine_validate_license_token(this.__wbg_ptr, n, s);
    if (o[2]) throw V(o[1]);
    return V(o[0]);
  }
}
Symbol.dispose && (De.prototype[Symbol.dispose] = De.prototype.free);
function Qn() {
  return {
    __proto__: null,
    "./bookmarksync_core_bg.js": {
      __proto__: null,
      __wbg_Error_8c4e43fe74559d73: function (t, e) {
        return Error(W(t, e));
      },
      __wbg_Number_04624de7d0e8332d: function (t) {
        return Number(t);
      },
      __wbg_String_8f0eb39a4a4c2f66: function (t, e) {
        const n = String(e),
          s = L(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
          o = O;
        H().setInt32(t + 4, o, !0), H().setInt32(t + 0, s, !0);
      },
      __wbg___wbindgen_bigint_get_as_i64_8fcf4ce7f1ca72a2: function (t, e) {
        const n = e,
          s = typeof n == "bigint" ? n : void 0;
        H().setBigInt64(t + 8, q(s) ? BigInt(0) : s, !0),
          H().setInt32(t + 0, !q(s), !0);
      },
      __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: function (t) {
        const e = t,
          n = typeof e == "boolean" ? e : void 0;
        return q(n) ? 16777215 : n ? 1 : 0;
      },
      __wbg___wbindgen_debug_string_0bc8482c6e3508ae: function (t, e) {
        const n = Me(e),
          s = L(n, d.__wbindgen_malloc, d.__wbindgen_realloc),
          o = O;
        H().setInt32(t + 4, o, !0), H().setInt32(t + 0, s, !0);
      },
      __wbg___wbindgen_in_47fa6863be6f2f25: function (t, e) {
        return t in e;
      },
      __wbg___wbindgen_is_bigint_31b12575b56f32fc: function (t) {
        return typeof t == "bigint";
      },
      __wbg___wbindgen_is_function_0095a73b8b156f76: function (t) {
        return typeof t == "function";
      },
      __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: function (t) {
        const e = t;
        return typeof e == "object" && e !== null;
      },
      __wbg___wbindgen_is_string_cd444516edc5b180: function (t) {
        return typeof t == "string";
      },
      __wbg___wbindgen_is_undefined_9e4d92534c42d778: function (t) {
        return t === void 0;
      },
      __wbg___wbindgen_jsval_eq_11888390b0186270: function (t, e) {
        return t === e;
      },
      __wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811: function (t, e) {
        return t == e;
      },
      __wbg___wbindgen_number_get_8ff4255516ccad3e: function (t, e) {
        const n = e,
          s = typeof n == "number" ? n : void 0;
        H().setFloat64(t + 8, q(s) ? 0 : s, !0), H().setInt32(t + 0, !q(s), !0);
      },
      __wbg___wbindgen_string_get_72fb696202c56729: function (t, e) {
        const n = e,
          s = typeof n == "string" ? n : void 0;
        var o = q(s) ? 0 : L(s, d.__wbindgen_malloc, d.__wbindgen_realloc),
          i = O;
        H().setInt32(t + 4, i, !0), H().setInt32(t + 0, o, !0);
      },
      __wbg___wbindgen_throw_be289d5034ed271b: function (t, e) {
        throw new Error(W(t, e));
      },
      __wbg_call_389efe28435a9388: function () {
        return Z(function (t, e) {
          return t.call(e);
        }, arguments);
      },
      __wbg_call_4708e0c13bdc8e95: function () {
        return Z(function (t, e, n) {
          return t.call(e, n);
        }, arguments);
      },
      __wbg_crypto_86f2631e91b51511: function (t) {
        return t.crypto;
      },
      __wbg_done_57b39ecd9addfe81: function (t) {
        return t.done;
      },
      __wbg_getRandomValues_b3f15fcbfabb0f8b: function () {
        return Z(function (t, e) {
          t.getRandomValues(e);
        }, arguments);
      },
      __wbg_get_9b94d73e6221f75c: function (t, e) {
        return t[e >>> 0];
      },
      __wbg_get_b3ed3ad4be2bc8ac: function () {
        return Z(function (t, e) {
          return Reflect.get(t, e);
        }, arguments);
      },
      __wbg_get_with_ref_key_1dc361bd10053bfe: function (t, e) {
        return t[e];
      },
      __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04: function (t) {
        let e;
        try {
          e = t instanceof ArrayBuffer;
        } catch {
          e = !1;
        }
        return e;
      },
      __wbg_instanceof_Uint8Array_9b9075935c74707c: function (t) {
        let e;
        try {
          e = t instanceof Uint8Array;
        } catch {
          e = !1;
        }
        return e;
      },
      __wbg_isArray_d314bb98fcf08331: function (t) {
        return Array.isArray(t);
      },
      __wbg_isSafeInteger_bfbc7332a9768d2a: function (t) {
        return Number.isSafeInteger(t);
      },
      __wbg_iterator_6ff6560ca1568e55: function () {
        return Symbol.iterator;
      },
      __wbg_length_32ed9a279acd054c: function (t) {
        return t.length;
      },
      __wbg_length_35a7bace40f36eac: function (t) {
        return t.length;
      },
      __wbg_msCrypto_d562bbe83e0d4b91: function (t) {
        return t.msCrypto;
      },
      __wbg_new_361308b2356cecd0: function () {
        return new Object();
      },
      __wbg_new_3eb36ae241fe6f44: function () {
        return new Array();
      },
      __wbg_new_dd2b680c8bf6ae29: function (t) {
        return new Uint8Array(t);
      },
      __wbg_new_no_args_1c7c842f08d00ebb: function (t, e) {
        return new Function(W(t, e));
      },
      __wbg_new_with_length_a2c39cbe88fd8ff1: function (t) {
        return new Uint8Array(t >>> 0);
      },
      __wbg_next_3482f54c49e8af19: function () {
        return Z(function (t) {
          return t.next();
        }, arguments);
      },
      __wbg_next_418f80d8f5303233: function (t) {
        return t.next;
      },
      __wbg_node_e1f24f89a7336c2e: function (t) {
        return t.node;
      },
      __wbg_now_a3af9a2f4bbaa4d1: function () {
        return Date.now();
      },
      __wbg_process_3975fd6c72f520aa: function (t) {
        return t.process;
      },
      __wbg_prototypesetcall_bdcdcc5842e4d77d: function (t, e, n) {
        Uint8Array.prototype.set.call(ft(t, e), n);
      },
      __wbg_randomFillSync_f8c153b79f285817: function () {
        return Z(function (t, e) {
          t.randomFillSync(e);
        }, arguments);
      },
      __wbg_require_b74f47fc2d022fd6: function () {
        return Z(function () {
          return module.require;
        }, arguments);
      },
      __wbg_set_3f1d0b984ed272ed: function (t, e, n) {
        t[e] = n;
      },
      __wbg_set_f43e577aea94465b: function (t, e, n) {
        t[e >>> 0] = n;
      },
      __wbg_static_accessor_GLOBAL_12837167ad935116: function () {
        const t = typeof global > "u" ? null : global;
        return q(t) ? 0 : re(t);
      },
      __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: function () {
        const t = typeof globalThis > "u" ? null : globalThis;
        return q(t) ? 0 : re(t);
      },
      __wbg_static_accessor_SELF_a621d3dfbb60d0ce: function () {
        const t = typeof self > "u" ? null : self;
        return q(t) ? 0 : re(t);
      },
      __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: function () {
        const t = typeof window > "u" ? null : window;
        return q(t) ? 0 : re(t);
      },
      __wbg_subarray_a96e1fef17ed23cb: function (t, e, n) {
        return t.subarray(e >>> 0, n >>> 0);
      },
      __wbg_value_0546255b415e96c1: function (t) {
        return t.value;
      },
      __wbg_versions_4e31226f5e8dc909: function (t) {
        return t.versions;
      },
      __wbindgen_cast_0000000000000001: function (t) {
        return t;
      },
      __wbindgen_cast_0000000000000002: function (t, e) {
        return ft(t, e);
      },
      __wbindgen_cast_0000000000000003: function (t, e) {
        return W(t, e);
      },
      __wbindgen_cast_0000000000000004: function (t) {
        return BigInt.asUintN(64, t);
      },
      __wbindgen_init_externref_table: function () {
        const t = d.__wbindgen_externrefs,
          e = t.grow(4);
        t.set(0, void 0),
          t.set(e + 0, void 0),
          t.set(e + 1, null),
          t.set(e + 2, !0),
          t.set(e + 3, !1);
      },
    },
  };
}
const gt =
  typeof FinalizationRegistry > "u"
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((t) => d.__wbg_coreengine_free(t >>> 0, 1));
function re(t) {
  const e = d.__externref_table_alloc();
  return d.__wbindgen_externrefs.set(e, t), e;
}
function Me(t) {
  const e = typeof t;
  if (e == "number" || e == "boolean" || t == null) return `${t}`;
  if (e == "string") return `"${t}"`;
  if (e == "symbol") {
    const o = t.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (e == "function") {
    const o = t.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(t)) {
    const o = t.length;
    let i = "[";
    o > 0 && (i += Me(t[0]));
    for (let r = 1; r < o; r++) i += ", " + Me(t[r]);
    return (i += "]"), i;
  }
  const n = /\[object ([^\]]+)\]/.exec(toString.call(t));
  let s;
  if (n && n.length > 1) s = n[1];
  else return toString.call(t);
  if (s == "Object")
    try {
      return "Object(" + JSON.stringify(t) + ")";
    } catch {
      return "Object";
    }
  return t instanceof Error
    ? `${t.name}: ${t.message}
${t.stack}`
    : s;
}
function ft(t, e) {
  return (t = t >>> 0), le().subarray(t / 1, t / 1 + e);
}
let Q = null;
function H() {
  return (
    (Q === null ||
      Q.buffer.detached === !0 ||
      (Q.buffer.detached === void 0 && Q.buffer !== d.memory.buffer)) &&
      (Q = new DataView(d.memory.buffer)),
    Q
  );
}
function W(t, e) {
  return (t = t >>> 0), es(t, e);
}
let ae = null;
function le() {
  return (
    (ae === null || ae.byteLength === 0) &&
      (ae = new Uint8Array(d.memory.buffer)),
    ae
  );
}
function Z(t, e) {
  try {
    return t.apply(this, e);
  } catch (n) {
    const s = re(n);
    d.__wbindgen_exn_store(s);
  }
}
function q(t) {
  return t == null;
}
function L(t, e, n) {
  if (n === void 0) {
    const a = ce.encode(t),
      l = e(a.length, 1) >>> 0;
    return (
      le()
        .subarray(l, l + a.length)
        .set(a),
      (O = a.length),
      l
    );
  }
  let s = t.length,
    o = e(s, 1) >>> 0;
  const i = le();
  let r = 0;
  for (; r < s; r++) {
    const a = t.charCodeAt(r);
    if (a > 127) break;
    i[o + r] = a;
  }
  if (r !== s) {
    r !== 0 && (t = t.slice(r)), (o = n(o, s, (s = r + t.length * 3), 1) >>> 0);
    const a = le().subarray(o + r, o + s),
      l = ce.encodeInto(t, a);
    (r += l.written), (o = n(o, s, r, 1) >>> 0);
  }
  return (O = r), o;
}
function V(t) {
  const e = d.__wbindgen_externrefs.get(t);
  return d.__externref_table_dealloc(t), e;
}
let Se = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
Se.decode();
const Zn = 2146435072;
let Ve = 0;
function es(t, e) {
  return (
    (Ve += e),
    Ve >= Zn &&
      ((Se = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })),
      Se.decode(),
      (Ve = e)),
    Se.decode(le().subarray(t, t + e))
  );
}
const ce = new TextEncoder();
"encodeInto" in ce ||
  (ce.encodeInto = function (t, e) {
    const n = ce.encode(t);
    return e.set(n), { read: t.length, written: n.length };
  });
let O = 0,
  d;
function ts(t, e) {
  return (d = t.exports), (Q = null), (ae = null), d.__wbindgen_start(), d;
}
async function ns(t, e) {
  if (typeof Response == "function" && t instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function")
      try {
        return await WebAssembly.instantiateStreaming(t, e);
      } catch (o) {
        if (
          t.ok &&
          n(t.type) &&
          t.headers.get("Content-Type") !== "application/wasm"
        )
          console.warn(
            "`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
            o,
          );
        else throw o;
      }
    const s = await t.arrayBuffer();
    return await WebAssembly.instantiate(s, e);
  } else {
    const s = await WebAssembly.instantiate(t, e);
    return s instanceof WebAssembly.Instance ? { instance: s, module: t } : s;
  }
  function n(s) {
    switch (s) {
      case "basic":
      case "cors":
      case "default":
        return !0;
    }
    return !1;
  }
}
async function ss(t) {
  if (d !== void 0) return d;
  t !== void 0 &&
    (Object.getPrototypeOf(t) === Object.prototype
      ? ({ module_or_path: t } = t)
      : console.warn(
          "using deprecated parameters for the initialization function; pass a single object instead",
        )),
    t === void 0 &&
      (t = new URL(
        "/assets/bookmarksync_core_bg-Cl4sWNse.wasm",
        import.meta.url,
      ));
  const e = Qn();
  (typeof t == "string" ||
    (typeof Request == "function" && t instanceof Request) ||
    (typeof URL == "function" && t instanceof URL)) &&
    (t = fetch(t));
  const { instance: n, module: s } = await ns(await t, e);
  return ts(n);
}
async function _t(t, e = {}) {
  var r;
  const n = new URL(t),
    s = await Qt(),
    o = new Headers(e.headers || {});
  o.set("X-Extension-Version", ot()), o.set("X-Extension-Cid", s);
  const i = ((r = e.method) == null ? void 0 : r.toUpperCase()) || "GET";
  return (
    (i === "GET" || i === "PROPFIND") &&
      (o.set("Cache-Control", "no-cache, no-store, must-revalidate"),
      o.set("Pragma", "no-cache"),
      o.set("Expires", "0"),
      (e.cache = "no-store")),
    (e.headers = o),
    fetch(n.toString(), e)
  );
}
class os {
  constructor() {
    R(this, "engine", null);
    R(this, "initPromise", null);
    R(this, "fetchTokenPromise", null);
  }
  async ensureInitialized() {
    if (!this.engine)
      return this.initPromise
        ? this.initPromise
        : ((this.initPromise = (async () => {
            try {
              tn(), await ss(), (this.engine = new De());
            } catch (e) {
              throw (
                (console.error("Failed to initialize core:", e),
                (this.initPromise = null),
                e)
              );
            }
          })()),
          this.initPromise);
  }
  async register(e, n) {
    (this.__handlers || (this.__handlers = new Map())).set(e, n);
    await this.ensureInitialized();
    try {
      if (!this.engine) throw new Error("Security engine not ready");
      this.engine.register(e, n);
    } catch (s) {
      throw (
        (console.error(`Failed to register feature '${e}':`, s),
        new Error(String(s)))
      );
    }
  }
  async trigger(e) {
    const r = (this.__handlers || new Map()).get(e);
    if (r) return r();
    await this.ensureInitialized();
    try {
      return void 0;
    } catch (s) {
      throw (
        (console.error(`Security Violation for feature '${e}':`, s),
        new Error(String(s)))
      );
    }
  }
  async validateLicense(e) {
    await this.ensureInitialized();
    try {
      return this.engine.validate_license_token(e);
    } catch (n) {
      return console.warn("License validation failed:", n), null;
    }
  }
  async hasPermission(e, n) {
    return !0;
  }
  async secureMergeNodes(e, n, s) {
    await this.ensureInitialized();
    const o = await this.getValidToken();
    try {
      const i = await this.engine.merge_nodes(
        JSON.stringify(e),
        JSON.stringify(n),
        JSON.stringify(s),
        o,
      );
      return JSON.parse(i);
    } catch (i) {
      throw (
        (console.error("Secure merge failed:", i),
        new Error("Data merge failed, security core detected an exception"))
      );
    }
  }
  async secureCalculateStats(e, n) {
    await this.ensureInitialized();
    const s = await this.getValidToken();
    try {
      return await this.engine.calculate_change_stats(
        JSON.stringify(e),
        JSON.stringify(n),
        s,
      );
    } catch (o) {
      throw (
        (console.error("Secure stats calculation failed:", o),
        new Error(
          "Statistics calculation failed, license expired or modified by an exception",
        ))
      );
    }
  }
  async smartMergeNewDevice(e, n) {
    await this.ensureInitialized();
    try {
      const s = this.engine.smart_merge_new_device(
        JSON.stringify(e),
        JSON.stringify(n),
      );
      return JSON.parse(s);
    } catch (s) {
      throw (console.error("Smart merge failed:", s), new Error(String(s)));
    }
  }
  async encryptData(e) {
    await this.ensureInitialized();
    try {
      return this.engine.encrypt_data(e);
    } catch (n) {
      throw (
        (console.error("Symmetric encryption failed:", n),
        new Error("Encryption failed: " + String(n)))
      );
    }
  }
  async encryptUserNodes(e, n) {
    await this.ensureInitialized();
    try {
      return this.engine.encrypt_user_nodes(e, n);
    } catch (s) {
      throw (
        (console.error("User nodes encryption failed:", s),
        new Error(String(s)))
      );
    }
  }
  async decryptUserNodes(e, n) {
    await this.ensureInitialized();
    try {
      return this.engine.decrypt_user_nodes(e, n);
    } catch (s) {
      throw (
        (console.error("User nodes decryption failed:", s),
        new Error(String(s)))
      );
    }
  }
  async fetchNewToken() {
    return this.fetchTokenPromise
      ? this.fetchTokenPromise
      : ((this.fetchTokenPromise = (async () => {
          try {
            const e = await _t(`${be.APP_URL}/api/license`, { method: "POST" });
            if (!e.ok)
              throw new Error(
                "Authorization center access failed, please try again later",
              );
            const n = await e.text();
            return await x.storage.local.set({ [ve]: n }), n;
          } catch (e) {
            throw (console.error("Failed to fetch new token:", e), e);
          } finally {
            this.fetchTokenPromise = null;
          }
        })()),
        this.fetchTokenPromise);
  }
  async getValidToken(e = !1) {
    if (!e) {
      const n = (await x.storage.local.get(ve))[ve];
      if (n)
        try {
          const s = this.decodeJwtPayload(n),
            o = Math.floor(Date.now() / 1e3);
          if (s.exp > o + 30) return n;
        } catch (s) {
          console.error("Failed to parse stored token:", s);
        }
    }
    return this.fetchNewToken();
  }
  decodeJwtPayload(e) {
    const n = e.split(".")[1];
    if (!n) throw new Error("Invalid JWT format");
    const s = n.replace(/-/g, "+").replace(/_/g, "/"),
      o = decodeURIComponent(
        atob(s)
          .split("")
          .map((i) => "%" + ("00" + i.charCodeAt(0).toString(16)).slice(-2))
          .join(""),
      );
    return JSON.parse(o);
  }
}
const Be = new os();
async function is() {
  return {
    type: "pro",
    expiresAt: Date.now() + 31536e9,
    userId: "local-user",
    features: [],
  };
}
async function rs() {
  await x.storage.local.remove(ve);
}
var ze = {};
const _ = (t) => typeof t == "string",
  ue = () => {
    let t, e;
    const n = new Promise((s, o) => {
      (t = s), (e = o);
    });
    return (n.resolve = t), (n.reject = e), n;
  },
  bt = (t) => (t == null ? "" : "" + t),
  as = (t, e, n) => {
    t.forEach((s) => {
      e[s] && (n[s] = e[s]);
    });
  },
  ls = /###/g,
  yt = (t) => (t && t.indexOf("###") > -1 ? t.replace(ls, ".") : t),
  mt = (t) => !t || _(t),
  he = (t, e, n) => {
    const s = _(e) ? e.split(".") : e;
    let o = 0;
    for (; o < s.length - 1; ) {
      if (mt(t)) return {};
      const i = yt(s[o]);
      !t[i] && n && (t[i] = new n()),
        Object.prototype.hasOwnProperty.call(t, i) ? (t = t[i]) : (t = {}),
        ++o;
    }
    return mt(t) ? {} : { obj: t, k: yt(s[o]) };
  },
  wt = (t, e, n) => {
    const { obj: s, k: o } = he(t, e, Object);
    if (s !== void 0 || e.length === 1) {
      s[o] = n;
      return;
    }
    let i = e[e.length - 1],
      r = e.slice(0, e.length - 1),
      a = he(t, r, Object);
    for (; a.obj === void 0 && r.length; )
      (i = `${r[r.length - 1]}.${i}`),
        (r = r.slice(0, r.length - 1)),
        (a = he(t, r, Object)),
        a != null &&
          a.obj &&
          typeof a.obj[`${a.k}.${i}`] < "u" &&
          (a.obj = void 0);
    a.obj[`${a.k}.${i}`] = n;
  },
  cs = (t, e, n, s) => {
    const { obj: o, k: i } = he(t, e, Object);
    (o[i] = o[i] || []), o[i].push(n);
  },
  ke = (t, e) => {
    const { obj: n, k: s } = he(t, e);
    if (n && Object.prototype.hasOwnProperty.call(n, s)) return n[s];
  },
  us = (t, e, n) => {
    const s = ke(t, n);
    return s !== void 0 ? s : ke(e, n);
  },
  vt = (t, e, n) => {
    for (const s in e)
      s !== "__proto__" &&
        s !== "constructor" &&
        (s in t
          ? _(t[s]) ||
            t[s] instanceof String ||
            _(e[s]) ||
            e[s] instanceof String
            ? n && (t[s] = e[s])
            : vt(t[s], e[s], n)
          : (t[s] = e[s]));
    return t;
  },
  ee = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var hs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const ds = (t) => (_(t) ? t.replace(/[&<>"'\/]/g, (e) => hs[e]) : t);
class ps {
  constructor(e) {
    (this.capacity = e), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(e) {
    const n = this.regExpMap.get(e);
    if (n !== void 0) return n;
    const s = new RegExp(e);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(e, s),
      this.regExpQueue.push(e),
      s
    );
  }
}
const gs = [" ", ",", "?", "!", ";"],
  fs = new ps(20),
  _s = (t, e, n) => {
    (e = e || ""), (n = n || "");
    const s = gs.filter((r) => e.indexOf(r) < 0 && n.indexOf(r) < 0);
    if (s.length === 0) return !0;
    const o = fs.getRegExp(
      `(${s.map((r) => (r === "?" ? "\\?" : r)).join("|")})`,
    );
    let i = !o.test(t);
    if (!i) {
      const r = t.indexOf(n);
      r > 0 && !o.test(t.substring(0, r)) && (i = !0);
    }
    return i;
  },
  He = (t, e, n = ".") => {
    if (!t) return;
    if (t[e]) return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
    const s = e.split(n);
    let o = t;
    for (let i = 0; i < s.length; ) {
      if (!o || typeof o != "object") return;
      let r,
        a = "";
      for (let l = i; l < s.length; ++l)
        if ((l !== i && (a += n), (a += s[l]), (r = o[a]), r !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof r) > -1 &&
            l < s.length - 1
          )
            continue;
          i += l - i + 1;
          break;
        }
      o = r;
    }
    return o;
  },
  de = (t) => (t == null ? void 0 : t.replace(/_/g, "-")),
  bs = {
    type: "logger",
    log(t) {
      this.output("log", t);
    },
    warn(t) {
      this.output("warn", t);
    },
    error(t) {
      this.output("error", t);
    },
    output(t, e) {
      var n, s;
      (s =
        (n = console == null ? void 0 : console[t]) == null
          ? void 0
          : n.apply) == null || s.call(n, console, e);
    },
  };
let ys = class Ze {
  constructor(e, n = {}) {
    this.init(e, n);
  }
  init(e, n = {}) {
    (this.prefix = n.prefix || "i18next:"),
      (this.logger = e || bs),
      (this.options = n),
      (this.debug = n.debug);
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, n, s, o) {
    return o && !this.debug
      ? null
      : (_(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[n](e));
  }
  create(e) {
    return new Ze(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options,
    });
  }
  clone(e) {
    return (
      (e = e || this.options),
      (e.prefix = e.prefix || this.prefix),
      new Ze(this.logger, e)
    );
  }
};
var K = new ys();
class xe {
  constructor() {
    this.observers = {};
  }
  on(e, n) {
    return (
      e.split(" ").forEach((s) => {
        this.observers[s] || (this.observers[s] = new Map());
        const o = this.observers[s].get(n) || 0;
        this.observers[s].set(n, o + 1);
      }),
      this
    );
  }
  off(e, n) {
    if (this.observers[e]) {
      if (!n) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(n);
    }
  }
  emit(e, ...n) {
    this.observers[e] &&
      Array.from(this.observers[e].entries()).forEach(([s, o]) => {
        for (let i = 0; i < o; i++) s(...n);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach(([s, o]) => {
          for (let i = 0; i < o; i++) s.apply(s, [e, ...n]);
        });
  }
}
class St extends xe {
  constructor(e, n = { ns: ["translation"], defaultNS: "translation" }) {
    super(),
      (this.data = e || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const n = this.options.ns.indexOf(e);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(e, n, s, o = {}) {
    var c, u;
    const i =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      r =
        o.ignoreJSONStructure !== void 0
          ? o.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1
      ? (a = e.split("."))
      : ((a = [e, n]),
        s &&
          (Array.isArray(s)
            ? a.push(...s)
            : _(s) && i
              ? a.push(...s.split(i))
              : a.push(s)));
    const l = ke(this.data, a);
    return (
      !l &&
        !n &&
        !s &&
        e.indexOf(".") > -1 &&
        ((e = a[0]), (n = a[1]), (s = a.slice(2).join("."))),
      l || !r || !_(s)
        ? l
        : He(
            (u = (c = this.data) == null ? void 0 : c[e]) == null
              ? void 0
              : u[n],
            s,
            i,
          )
    );
  }
  addResource(e, n, s, o, i = { silent: !1 }) {
    const r =
      i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [e, n];
    s && (a = a.concat(r ? s.split(r) : s)),
      e.indexOf(".") > -1 && ((a = e.split(".")), (o = n), (n = a[1])),
      this.addNamespaces(n),
      wt(this.data, a, o),
      i.silent || this.emit("added", e, n, s, o);
  }
  addResources(e, n, s, o = { silent: !1 }) {
    for (const i in s)
      (_(s[i]) || Array.isArray(s[i])) &&
        this.addResource(e, n, i, s[i], { silent: !0 });
    o.silent || this.emit("added", e, n, s);
  }
  addResourceBundle(e, n, s, o, i, r = { silent: !1, skipCopy: !1 }) {
    let a = [e, n];
    e.indexOf(".") > -1 && ((a = e.split(".")), (o = s), (s = n), (n = a[1])),
      this.addNamespaces(n);
    let l = ke(this.data, a) || {};
    r.skipCopy || (s = JSON.parse(JSON.stringify(s))),
      o ? vt(l, s, i) : (l = { ...l, ...s }),
      wt(this.data, a, l),
      r.silent || this.emit("added", e, n, s);
  }
  removeResourceBundle(e, n) {
    this.hasResourceBundle(e, n) && delete this.data[e][n],
      this.removeNamespaces(n),
      this.emit("removed", e, n);
  }
  hasResourceBundle(e, n) {
    return this.getResource(e, n) !== void 0;
  }
  getResourceBundle(e, n) {
    return n || (n = this.options.defaultNS), this.getResource(e, n);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const n = this.getDataByLanguage(e);
    return !!((n && Object.keys(n)) || []).find(
      (s) => n[s] && Object.keys(n[s]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var kt = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, n, s, o) {
    return (
      t.forEach((i) => {
        var r;
        e =
          ((r = this.processors[i]) == null ? void 0 : r.process(e, n, s, o)) ??
          e;
      }),
      e
    );
  },
};
const xt = Symbol("i18next/PATH_KEY");
function ms() {
  const t = [],
    e = Object.create(null);
  let n;
  return (
    (e.get = (s, o) => {
      var i;
      return (
        (i = n == null ? void 0 : n.revoke) == null || i.call(n),
        o === xt ? t : (t.push(o), (n = Proxy.revocable(s, e)), n.proxy)
      );
    }),
    Proxy.revocable(Object.create(null), e).proxy
  );
}
function se(t, e) {
  const { [xt]: n } = t(ms()),
    s = (e == null ? void 0 : e.keySeparator) ?? ".",
    o = (e == null ? void 0 : e.nsSeparator) ?? ":";
  if (n.length > 1 && o) {
    const i = e == null ? void 0 : e.ns,
      r = Array.isArray(i) ? i : null;
    if (r && r.length > 1 && r.slice(1).includes(n[0]))
      return `${n[0]}${o}${n.slice(1).join(s)}`;
  }
  return n.join(s);
}
const Ot = {},
  qe = (t) => !_(t) && typeof t != "boolean" && typeof t != "number";
class Pe extends xe {
  constructor(e, n = {}) {
    super(),
      as(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        e,
        this,
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = K.create("translator"));
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, n = { interpolation: {} }) {
    const s = { ...n };
    if (e == null) return !1;
    const o = this.resolve(e, s);
    if ((o == null ? void 0 : o.res) === void 0) return !1;
    const i = qe(o.res);
    return !(s.returnObjects === !1 && i);
  }
  extractFromKey(e, n) {
    let s = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const o =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const r = s && e.indexOf(s) > -1,
      a =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !_s(e, s, o);
    if (r && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: e, namespaces: _(i) ? [i] : i };
      const c = e.split(s);
      (s !== o || (s === o && this.options.ns.indexOf(c[0]) > -1)) &&
        (i = c.shift()),
        (e = c.join(o));
    }
    return { key: e, namespaces: _(i) ? [i] : i };
  }
  translate(e, n, s) {
    let o = typeof n == "object" ? { ...n } : n;
    if (
      (typeof o != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (o = this.options.overloadTranslationOptionHandler(arguments)),
      typeof o == "object" && (o = { ...o }),
      o || (o = {}),
      e == null)
    )
      return "";
    typeof e == "function" && (e = se(e, { ...this.options, ...o })),
      Array.isArray(e) || (e = [String(e)]),
      (e = e.map((j) =>
        typeof j == "function" ? se(j, { ...this.options, ...o }) : String(j),
      ));
    const i =
        o.returnDetails !== void 0
          ? o.returnDetails
          : this.options.returnDetails,
      r =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      { key: a, namespaces: l } = this.extractFromKey(e[e.length - 1], o),
      c = l[l.length - 1];
    let u = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ":");
    const h = o.lng || this.language,
      p = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((h == null ? void 0 : h.toLowerCase()) === "cimode")
      return p
        ? i
          ? {
              res: `${c}${u}${a}`,
              usedKey: a,
              exactUsedKey: a,
              usedLng: h,
              usedNS: c,
              usedParams: this.getUsedParamsDetails(o),
            }
          : `${c}${u}${a}`
        : i
          ? {
              res: a,
              usedKey: a,
              exactUsedKey: a,
              usedLng: h,
              usedNS: c,
              usedParams: this.getUsedParamsDetails(o),
            }
          : a;
    const f = this.resolve(e, o);
    let g = f == null ? void 0 : f.res;
    const m = (f == null ? void 0 : f.usedKey) || a,
      b = (f == null ? void 0 : f.exactUsedKey) || a,
      S = ["[object Number]", "[object Function]", "[object RegExp]"],
      T = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays,
      w = !this.i18nFormat || this.i18nFormat.handleAsObject,
      k = o.count !== void 0 && !_(o.count),
      $ = Pe.hasDefaultValue(o),
      M = k ? this.pluralResolver.getSuffix(h, o.count, o) : "",
      v =
        o.ordinal && k
          ? this.pluralResolver.getSuffix(h, o.count, { ordinal: !1 })
          : "",
      A = k && !o.ordinal && o.count === 0,
      P =
        (A && o[`defaultValue${this.options.pluralSeparator}zero`]) ||
        o[`defaultValue${M}`] ||
        o[`defaultValue${v}`] ||
        o.defaultValue;
    let E = g;
    w && !g && $ && (E = P);
    const ge = qe(E),
      y = Object.prototype.toString.apply(E);
    if (w && E && ge && S.indexOf(y) < 0 && !(_(T) && Array.isArray(E))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!",
          );
        const j = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(m, E, { ...o, ns: l })
          : `key '${a} (${this.language})' returned an object instead of string.`;
        return i
          ? ((f.res = j), (f.usedParams = this.getUsedParamsDetails(o)), f)
          : j;
      }
      if (r) {
        const j = Array.isArray(E),
          B = j ? [] : {},
          Ee = j ? b : m;
        for (const F in E)
          if (Object.prototype.hasOwnProperty.call(E, F)) {
            const J = `${Ee}${r}${F}`;
            $ && !g
              ? (B[F] = this.translate(J, {
                  ...o,
                  defaultValue: qe(P) ? P[F] : void 0,
                  joinArrays: !1,
                  ns: l,
                }))
              : (B[F] = this.translate(J, { ...o, joinArrays: !1, ns: l })),
              B[F] === J && (B[F] = E[F]);
          }
        g = B;
      }
    } else if (w && _(T) && Array.isArray(g))
      (g = g.join(T)), g && (g = this.extendTranslation(g, e, o, s));
    else {
      let j = !1,
        B = !1;
      !this.isValidLookup(g) && $ && ((j = !0), (g = P)),
        this.isValidLookup(g) || ((B = !0), (g = a));
      const Ee =
          (o.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          B
            ? void 0
            : g,
        F = $ && P !== g && this.options.updateMissing;
      if (B || j || F) {
        if (
          (this.logger.log(F ? "updateKey" : "missingKey", h, c, a, F ? P : g),
          r)
        ) {
          const U = this.resolve(a, { ...o, keySeparator: !1 });
          U &&
            U.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
            );
        }
        let J = [];
        const fe = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          o.lng || this.language,
        );
        if (this.options.saveMissingTo === "fallback" && fe && fe[0])
          for (let U = 0; U < fe.length; U++) J.push(fe[U]);
        else
          this.options.saveMissingTo === "all"
            ? (J = this.languageUtils.toResolveHierarchy(
                o.lng || this.language,
              ))
            : J.push(o.lng || this.language);
        const tt = (U, Y, oe) => {
          var st;
          const nt = $ && oe !== g ? oe : Ee;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(U, c, Y, nt, F, o)
            : (st = this.backendConnector) != null &&
              st.saveMissing &&
              this.backendConnector.saveMissing(U, c, Y, nt, F, o),
            this.emit("missingKey", U, c, Y, g);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && k
            ? J.forEach((U) => {
                const Y = this.pluralResolver.getSuffixes(U, o);
                A &&
                  o[`defaultValue${this.options.pluralSeparator}zero`] &&
                  Y.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  Y.push(`${this.options.pluralSeparator}zero`),
                  Y.forEach((oe) => {
                    tt([U], a + oe, o[`defaultValue${oe}`] || P);
                  });
              })
            : tt(J, a, P));
      }
      (g = this.extendTranslation(g, e, o, f, s)),
        B &&
          g === a &&
          this.options.appendNamespaceToMissingKey &&
          (g = `${c}${u}${a}`),
        (B || j) &&
          this.options.parseMissingKeyHandler &&
          (g = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${c}${u}${a}` : a,
            j ? g : void 0,
            o,
          ));
    }
    return i
      ? ((f.res = g), (f.usedParams = this.getUsedParamsDetails(o)), f)
      : g;
  }
  extendTranslation(e, n, s, o, i) {
    var l, c;
    if ((l = this.i18nFormat) != null && l.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...s },
        s.lng || this.language || o.usedLng,
        o.usedNS,
        o.usedKey,
        { resolved: o },
      );
    else if (!s.skipInterpolation) {
      s.interpolation &&
        this.interpolator.init({
          ...s,
          interpolation: { ...this.options.interpolation, ...s.interpolation },
        });
      const u =
        _(e) &&
        (((c = s == null ? void 0 : s.interpolation) == null
          ? void 0
          : c.skipOnVariables) !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let h;
      if (u) {
        const f = e.match(this.interpolator.nestingRegexp);
        h = f && f.length;
      }
      let p = s.replace && !_(s.replace) ? s.replace : s;
      if (
        (this.options.interpolation.defaultVariables &&
          (p = { ...this.options.interpolation.defaultVariables, ...p }),
        (e = this.interpolator.interpolate(
          e,
          p,
          s.lng || this.language || o.usedLng,
          s,
        )),
        u)
      ) {
        const f = e.match(this.interpolator.nestingRegexp),
          g = f && f.length;
        h < g && (s.nest = !1);
      }
      !s.lng && o && o.res && (s.lng = this.language || o.usedLng),
        s.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            (...f) =>
              (i == null ? void 0 : i[0]) === f[0] && !s.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${f[0]} in key: ${n[0]}`,
                  ),
                  null)
                : this.translate(...f, n),
            s,
          )),
        s.interpolation && this.interpolator.reset();
    }
    const r = s.postProcess || this.options.postProcess,
      a = _(r) ? [r] : r;
    return (
      e != null &&
        a != null &&
        a.length &&
        s.applyPostProcessor !== !1 &&
        (e = kt.handle(
          a,
          e,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...o,
                  usedParams: this.getUsedParamsDetails(s),
                },
                ...s,
              }
            : s,
          this,
        )),
      e
    );
  }
  resolve(e, n = {}) {
    let s, o, i, r, a;
    return (
      _(e) && (e = [e]),
      Array.isArray(e) &&
        (e = e.map((l) =>
          typeof l == "function" ? se(l, { ...this.options, ...n }) : l,
        )),
      e.forEach((l) => {
        if (this.isValidLookup(s)) return;
        const c = this.extractFromKey(l, n),
          u = c.key;
        o = u;
        let h = c.namespaces;
        this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
        const p = n.count !== void 0 && !_(n.count),
          f = p && !n.ordinal && n.count === 0,
          g =
            n.context !== void 0 &&
            (_(n.context) || typeof n.context == "number") &&
            n.context !== "",
          m = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng,
              );
        h.forEach((b) => {
          var S, T;
          this.isValidLookup(s) ||
            ((a = b),
            !Ot[`${m[0]}-${b}`] &&
              (S = this.utils) != null &&
              S.hasLoadedNamespace &&
              !((T = this.utils) != null && T.hasLoadedNamespace(a)) &&
              ((Ot[`${m[0]}-${b}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
              )),
            m.forEach((w) => {
              var M;
              if (this.isValidLookup(s)) return;
              r = w;
              const k = [u];
              if ((M = this.i18nFormat) != null && M.addLookupKeys)
                this.i18nFormat.addLookupKeys(k, u, w, b, n);
              else {
                let v;
                p && (v = this.pluralResolver.getSuffix(w, n.count, n));
                const A = `${this.options.pluralSeparator}zero`,
                  P = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (p &&
                    (n.ordinal &&
                      v.indexOf(P) === 0 &&
                      k.push(u + v.replace(P, this.options.pluralSeparator)),
                    k.push(u + v),
                    f && k.push(u + A)),
                  g)
                ) {
                  const E = `${u}${this.options.contextSeparator || "_"}${n.context}`;
                  k.push(E),
                    p &&
                      (n.ordinal &&
                        v.indexOf(P) === 0 &&
                        k.push(E + v.replace(P, this.options.pluralSeparator)),
                      k.push(E + v),
                      f && k.push(E + A));
                }
              }
              let $;
              for (; ($ = k.pop()); )
                this.isValidLookup(s) ||
                  ((i = $), (s = this.getResource(w, b, $, n)));
            }));
        });
      }),
      { res: s, usedKey: o, exactUsedKey: i, usedLng: r, usedNS: a }
    );
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === "")
    );
  }
  getResource(e, n, s, o = {}) {
    var i;
    return (i = this.i18nFormat) != null && i.getResource
      ? this.i18nFormat.getResource(e, n, s, o)
      : this.resourceStore.getResource(e, n, s, o);
  }
  getUsedParamsDetails(e = {}) {
    const n = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      s = e.replace && !_(e.replace);
    let o = s ? e.replace : e;
    if (
      (s && typeof e.count < "u" && (o.count = e.count),
      this.options.interpolation.defaultVariables &&
        (o = { ...this.options.interpolation.defaultVariables, ...o }),
      !s)
    ) {
      o = { ...o };
      for (const i of n) delete o[i];
    }
    return o;
  }
  static hasDefaultValue(e) {
    const n = "defaultValue";
    for (const s in e)
      if (
        Object.prototype.hasOwnProperty.call(e, s) &&
        n === s.substring(0, n.length) &&
        e[s] !== void 0
      )
        return !0;
    return !1;
  }
}
class Lt {
  constructor(e) {
    (this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = K.create("languageUtils"));
  }
  getScriptPartFromCode(e) {
    if (((e = de(e)), !e || e.indexOf("-") < 0)) return null;
    const n = e.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (((e = de(e)), !e || e.indexOf("-") < 0)) return e;
    const n = e.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(e) {
    if (_(e) && e.indexOf("-") > -1) {
      let n;
      try {
        n = Intl.getCanonicalLocales(e)[0];
      } catch {}
      return (
        n && this.options.lowerCaseLng && (n = n.toLowerCase()),
        n || (this.options.lowerCaseLng ? e.toLowerCase() : e)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? e.toLowerCase()
      : e;
  }
  isSupportedCode(e) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (e = this.getLanguagePartFromCode(e)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(e) > -1
    );
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let n;
    return (
      e.forEach((s) => {
        if (n) return;
        const o = this.formatLanguageCode(s);
        (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o);
      }),
      !n &&
        this.options.supportedLngs &&
        e.forEach((s) => {
          if (n) return;
          const o = this.getScriptPartFromCode(s);
          if (this.isSupportedCode(o)) return (n = o);
          const i = this.getLanguagePartFromCode(s);
          if (this.isSupportedCode(i)) return (n = i);
          n = this.options.supportedLngs.find((r) => {
            if (
              r === i ||
              (!(r.indexOf("-") < 0 && i.indexOf("-") < 0) &&
                ((r.indexOf("-") > 0 &&
                  i.indexOf("-") < 0 &&
                  r.substring(0, r.indexOf("-")) === i) ||
                  (r.indexOf(i) === 0 && i.length > 1)))
            )
              return r;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(e, n) {
    if (!e) return [];
    if (
      (typeof e == "function" && (e = e(n)),
      _(e) && (e = [e]),
      Array.isArray(e))
    )
      return e;
    if (!n) return e.default || [];
    let s = e[n];
    return (
      s || (s = e[this.getScriptPartFromCode(n)]),
      s || (s = e[this.formatLanguageCode(n)]),
      s || (s = e[this.getLanguagePartFromCode(n)]),
      s || (s = e.default),
      s || []
    );
  }
  toResolveHierarchy(e, n) {
    const s = this.getFallbackCodes(
        (n === !1 ? [] : n) || this.options.fallbackLng || [],
        e,
      ),
      o = [],
      i = (r) => {
        r &&
          (this.isSupportedCode(r)
            ? o.push(r)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${r}`,
              ));
      };
    return (
      _(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            i(this.formatLanguageCode(e)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            i(this.getScriptPartFromCode(e)),
          this.options.load !== "currentOnly" &&
            i(this.getLanguagePartFromCode(e)))
        : _(e) && i(this.formatLanguageCode(e)),
      s.forEach((r) => {
        o.indexOf(r) < 0 && i(this.formatLanguageCode(r));
      }),
      o
    );
  }
}
const Rt = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Pt = {
    select: (t) => (t === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class ws {
  constructor(e, n = {}) {
    (this.languageUtils = e),
      (this.options = n),
      (this.logger = K.create("pluralResolver")),
      (this.pluralRulesCache = {});
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, n = {}) {
    const s = de(e === "dev" ? "en" : e),
      o = n.ordinal ? "ordinal" : "cardinal",
      i = JSON.stringify({ cleanedCode: s, type: o });
    if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
    let r;
    try {
      r = new Intl.PluralRules(s, { type: o });
    } catch {
      if (typeof Intl > "u")
        return (
          this.logger.error("No Intl support, please use an Intl polyfill!"), Pt
        );
      if (!e.match(/-|_/)) return Pt;
      const a = this.languageUtils.getLanguagePartFromCode(e);
      r = this.getRule(a, n);
    }
    return (this.pluralRulesCache[i] = r), r;
  }
  needsPlural(e, n = {}) {
    let s = this.getRule(e, n);
    return (
      s || (s = this.getRule("dev", n)),
      (s == null ? void 0 : s.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(e, n, s = {}) {
    return this.getSuffixes(e, s).map((o) => `${n}${o}`);
  }
  getSuffixes(e, n = {}) {
    let s = this.getRule(e, n);
    return (
      s || (s = this.getRule("dev", n)),
      s
        ? s
            .resolvedOptions()
            .pluralCategories.sort((o, i) => Rt[o] - Rt[i])
            .map(
              (o) =>
                `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`,
            )
        : []
    );
  }
  getSuffix(e, n, s = {}) {
    const o = this.getRule(e, s);
    return o
      ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(n)}`
      : (this.logger.warn(`no plural rule found for: ${e}`),
        this.getSuffix("dev", n, s));
  }
}
const Et = (t, e, n, s = ".", o = !0) => {
    let i = us(t, e, n);
    return (
      !i && o && _(n) && ((i = He(t, n, s)), i === void 0 && (i = He(e, n, s))),
      i
    );
  },
  Ke = (t) => t.replace(/\$/g, "$$$$");
class Tt {
  constructor(e = {}) {
    var n;
    (this.logger = K.create("interpolator")),
      (this.options = e),
      (this.format =
        ((n = e == null ? void 0 : e.interpolation) == null
          ? void 0
          : n.format) || ((s) => s)),
      this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: s,
      useRawValueToEscape: o,
      prefix: i,
      prefixEscaped: r,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: u,
      unescapePrefix: h,
      nestingPrefix: p,
      nestingPrefixEscaped: f,
      nestingSuffix: g,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: b,
      maxReplaces: S,
      alwaysFormat: T,
    } = e.interpolation;
    (this.escape = n !== void 0 ? n : ds),
      (this.escapeValue = s !== void 0 ? s : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = i ? ee(i) : r || "{{"),
      (this.suffix = a ? ee(a) : l || "}}"),
      (this.formatSeparator = c || ","),
      (this.unescapePrefix = u ? "" : h || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : u || ""),
      (this.nestingPrefix = p ? ee(p) : f || ee("$t(")),
      (this.nestingSuffix = g ? ee(g) : m || ee(")")),
      (this.nestingOptionsSeparator = b || ","),
      (this.maxReplaces = S || 1e3),
      (this.alwaysFormat = T !== void 0 ? T : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (n, s) =>
      (n == null ? void 0 : n.source) === s
        ? ((n.lastIndex = 0), n)
        : new RegExp(s, "g");
    (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = e(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = e(
        this.nestingRegexp,
        `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`,
      ));
  }
  interpolate(e, n, s, o) {
    var p;
    let i, r, a;
    const l =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      c = (f) => {
        if (f.indexOf(this.formatSeparator) < 0) {
          const S = Et(
            n,
            l,
            f,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(S, void 0, s, { ...o, ...n, interpolationkey: f })
            : S;
        }
        const g = f.split(this.formatSeparator),
          m = g.shift().trim(),
          b = g.join(this.formatSeparator).trim();
        return this.format(
          Et(
            n,
            l,
            m,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          b,
          s,
          { ...o, ...n, interpolationkey: m },
        );
      };
    this.resetRegExp();
    const u =
        (o == null ? void 0 : o.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      h =
        ((p = o == null ? void 0 : o.interpolation) == null
          ? void 0
          : p.skipOnVariables) !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (f) => Ke(f) },
        {
          regex: this.regexp,
          safeValue: (f) => (this.escapeValue ? Ke(this.escape(f)) : Ke(f)),
        },
      ].forEach((f) => {
        for (a = 0; (i = f.regex.exec(e)); ) {
          const g = i[1].trim();
          if (((r = c(g)), r === void 0))
            if (typeof u == "function") {
              const b = u(e, i, o);
              r = _(b) ? b : "";
            } else if (o && Object.prototype.hasOwnProperty.call(o, g)) r = "";
            else if (h) {
              r = i[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${g} for interpolating ${e}`,
              ),
                (r = "");
          else !_(r) && !this.useRawValueToEscape && (r = bt(r));
          const m = f.safeValue(r);
          if (
            ((e = e.replace(i[0], m)),
            h
              ? ((f.regex.lastIndex += r.length),
                (f.regex.lastIndex -= i[0].length))
              : (f.regex.lastIndex = 0),
            a++,
            a >= this.maxReplaces)
          )
            break;
        }
      }),
      e
    );
  }
  nest(e, n, s = {}) {
    let o, i, r;
    const a = (l, c) => {
      const u = this.nestingOptionsSeparator;
      if (l.indexOf(u) < 0) return l;
      const h = l.split(new RegExp(`${ee(u)}[ ]*{`));
      let p = `{${h[1]}`;
      (l = h[0]), (p = this.interpolate(p, r));
      const f = p.match(/'/g),
        g = p.match(/"/g);
      ((((f == null ? void 0 : f.length) ?? 0) % 2 === 0 && !g) ||
        ((g == null ? void 0 : g.length) ?? 0) % 2 !== 0) &&
        (p = p.replace(/'/g, '"'));
      try {
        (r = JSON.parse(p)), c && (r = { ...c, ...r });
      } catch (m) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            m,
          ),
          `${l}${u}${p}`
        );
      }
      return (
        r.defaultValue &&
          r.defaultValue.indexOf(this.prefix) > -1 &&
          delete r.defaultValue,
        l
      );
    };
    for (; (o = this.nestingRegexp.exec(e)); ) {
      let l = [];
      (r = { ...s }),
        (r = r.replace && !_(r.replace) ? r.replace : r),
        (r.applyPostProcessor = !1),
        delete r.defaultValue;
      const c = /{.*}/.test(o[1])
        ? o[1].lastIndexOf("}") + 1
        : o[1].indexOf(this.formatSeparator);
      if (
        (c !== -1 &&
          ((l = o[1]
            .slice(c)
            .split(this.formatSeparator)
            .map((u) => u.trim())
            .filter(Boolean)),
          (o[1] = o[1].slice(0, c))),
        (i = n(a.call(this, o[1].trim(), r), r)),
        i && o[0] === e && !_(i))
      )
        return i;
      _(i) || (i = bt(i)),
        i ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),
          (i = "")),
        l.length &&
          (i = l.reduce(
            (u, h) =>
              this.format(u, h, s.lng, { ...s, interpolationkey: o[1].trim() }),
            i.trim(),
          )),
        (e = e.replace(o[0], i)),
        (this.regexp.lastIndex = 0);
    }
    return e;
  }
}
const vs = (t) => {
    let e = t.toLowerCase().trim();
    const n = {};
    if (t.indexOf("(") > -1) {
      const s = t.split("(");
      e = s[0].toLowerCase().trim();
      const o = s[1].substring(0, s[1].length - 1);
      e === "currency" && o.indexOf(":") < 0
        ? n.currency || (n.currency = o.trim())
        : e === "relativetime" && o.indexOf(":") < 0
          ? n.range || (n.range = o.trim())
          : o.split(";").forEach((i) => {
              if (i) {
                const [r, ...a] = i.split(":"),
                  l = a
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, ""),
                  c = r.trim();
                n[c] || (n[c] = l),
                  l === "false" && (n[c] = !1),
                  l === "true" && (n[c] = !0),
                  isNaN(l) || (n[c] = parseInt(l, 10));
              }
            });
    }
    return { formatName: e, formatOptions: n };
  },
  Nt = (t) => {
    const e = {};
    return (n, s, o) => {
      let i = o;
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (i = { ...i, [o.interpolationkey]: void 0 });
      const r = s + JSON.stringify(i);
      let a = e[r];
      return a || ((a = t(de(s), o)), (e[r] = a)), a(n);
    };
  },
  Ss = (t) => (e, n, s) => t(de(n), s)(e);
class ks {
  constructor(e = {}) {
    (this.logger = K.create("formatter")), (this.options = e), this.init(e);
  }
  init(e, n = { interpolation: {} }) {
    this.formatSeparator = n.interpolation.formatSeparator || ",";
    const s = n.cacheInBuiltFormats ? Nt : Ss;
    this.formats = {
      number: s((o, i) => {
        const r = new Intl.NumberFormat(o, { ...i });
        return (a) => r.format(a);
      }),
      currency: s((o, i) => {
        const r = new Intl.NumberFormat(o, { ...i, style: "currency" });
        return (a) => r.format(a);
      }),
      datetime: s((o, i) => {
        const r = new Intl.DateTimeFormat(o, { ...i });
        return (a) => r.format(a);
      }),
      relativetime: s((o, i) => {
        const r = new Intl.RelativeTimeFormat(o, { ...i });
        return (a) => r.format(a, i.range || "day");
      }),
      list: s((o, i) => {
        const r = new Intl.ListFormat(o, { ...i });
        return (a) => r.format(a);
      }),
    };
  }
  add(e, n) {
    this.formats[e.toLowerCase().trim()] = n;
  }
  addCached(e, n) {
    this.formats[e.toLowerCase().trim()] = Nt(n);
  }
  format(e, n, s, o = {}) {
    const i = n.split(this.formatSeparator);
    if (
      i.length > 1 &&
      i[0].indexOf("(") > 1 &&
      i[0].indexOf(")") < 0 &&
      i.find((r) => r.indexOf(")") > -1)
    ) {
      const r = i.findIndex((a) => a.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, r)].join(this.formatSeparator);
    }
    return i.reduce((r, a) => {
      var u;
      const { formatName: l, formatOptions: c } = vs(a);
      if (this.formats[l]) {
        let h = r;
        try {
          const p =
              ((u = o == null ? void 0 : o.formatParams) == null
                ? void 0
                : u[o.interpolationkey]) || {},
            f = p.locale || p.lng || o.locale || o.lng || s;
          h = this.formats[l](r, f, { ...c, ...o, ...p });
        } catch (p) {
          this.logger.warn(p);
        }
        return h;
      } else this.logger.warn(`there was no format function for ${l}`);
      return r;
    }, e);
  }
}
const xs = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
};
class Os extends xe {
  constructor(e, n, s, o = {}) {
    var i, r;
    super(),
      (this.backend = e),
      (this.store = n),
      (this.services = s),
      (this.languageUtils = s.languageUtils),
      (this.options = o),
      (this.logger = K.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (r = (i = this.backend) == null ? void 0 : i.init) == null ||
        r.call(i, s, o.backend, o);
  }
  queueLoad(e, n, s, o) {
    const i = {},
      r = {},
      a = {},
      l = {};
    return (
      e.forEach((c) => {
        let u = !0;
        n.forEach((h) => {
          const p = `${c}|${h}`;
          !s.reload && this.store.hasResourceBundle(c, h)
            ? (this.state[p] = 2)
            : this.state[p] < 0 ||
              (this.state[p] === 1
                ? r[p] === void 0 && (r[p] = !0)
                : ((this.state[p] = 1),
                  (u = !1),
                  r[p] === void 0 && (r[p] = !0),
                  i[p] === void 0 && (i[p] = !0),
                  l[h] === void 0 && (l[h] = !0)));
        }),
          u || (a[c] = !0);
      }),
      (Object.keys(i).length || Object.keys(r).length) &&
        this.queue.push({
          pending: r,
          pendingCount: Object.keys(r).length,
          loaded: {},
          errors: [],
          callback: o,
        }),
      {
        toLoad: Object.keys(i),
        pending: Object.keys(r),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(e, n, s) {
    const o = e.split("|"),
      i = o[0],
      r = o[1];
    n && this.emit("failedLoading", i, r, n),
      !n &&
        s &&
        this.store.addResourceBundle(i, r, s, void 0, void 0, { skipCopy: !0 }),
      (this.state[e] = n ? -1 : 2),
      n && s && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((l) => {
      cs(l.loaded, [i], r),
        xs(l, e),
        n && l.errors.push(n),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((c) => {
            a[c] || (a[c] = {});
            const u = l.loaded[c];
            u.length &&
              u.forEach((h) => {
                a[c][h] === void 0 && (a[c][h] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit("loaded", a),
      (this.queue = this.queue.filter((l) => !l.done));
  }
  read(e, n, s, o = 0, i = this.retryTimeout, r) {
    if (!e.length) return r(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: n,
        fcName: s,
        tried: o,
        wait: i,
        callback: r,
      });
      return;
    }
    this.readingCalls++;
    const a = (c, u) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const h = this.waitingReads.shift();
          this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
        }
        if (c && u && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, n, s, o + 1, i * 2, r);
          }, i);
          return;
        }
        r(c, u);
      },
      l = this.backend[s].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(e, n);
        c && typeof c.then == "function"
          ? c.then((u) => a(null, u)).catch(a)
          : a(null, c);
      } catch (c) {
        a(c);
      }
      return;
    }
    return l(e, n, a);
  }
  prepareLoading(e, n, s = {}, o) {
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources.",
        ),
        o && o()
      );
    _(e) && (e = this.languageUtils.toResolveHierarchy(e)), _(n) && (n = [n]);
    const i = this.queueLoad(e, n, s, o);
    if (!i.toLoad.length) return i.pending.length || o(), null;
    i.toLoad.forEach((r) => {
      this.loadOne(r);
    });
  }
  load(e, n, s) {
    this.prepareLoading(e, n, {}, s);
  }
  reload(e, n, s) {
    this.prepareLoading(e, n, { reload: !0 }, s);
  }
  loadOne(e, n = "") {
    const s = e.split("|"),
      o = s[0],
      i = s[1];
    this.read(o, i, "read", void 0, void 0, (r, a) => {
      r &&
        this.logger.warn(
          `${n}loading namespace ${i} for language ${o} failed`,
          r,
        ),
        !r &&
          a &&
          this.logger.log(`${n}loaded namespace ${i} for language ${o}`, a),
        this.loaded(e, r, a);
    });
  }
  saveMissing(e, n, s, o, i, r = {}, a = () => {}) {
    var l, c, u, h, p;
    if (
      (c = (l = this.services) == null ? void 0 : l.utils) != null &&
      c.hasLoadedNamespace &&
      !(
        (h = (u = this.services) == null ? void 0 : u.utils) != null &&
        h.hasLoadedNamespace(n)
      )
    ) {
      this.logger.warn(
        `did not save key "${s}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
      );
      return;
    }
    if (!(s == null || s === "")) {
      if ((p = this.backend) != null && p.create) {
        const f = { ...r, isUpdate: i },
          g = this.backend.create.bind(this.backend);
        if (g.length < 6)
          try {
            let m;
            g.length === 5 ? (m = g(e, n, s, o, f)) : (m = g(e, n, s, o)),
              m && typeof m.then == "function"
                ? m.then((b) => a(null, b)).catch(a)
                : a(null, m);
          } catch (m) {
            a(m);
          }
        else g(e, n, s, o, a, f);
      }
      !e || !e[0] || this.store.addResource(e[0], n, s, o);
    }
  }
}
const Je = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (t) => {
      let e = {};
      if (
        (typeof t[1] == "object" && (e = t[1]),
        _(t[1]) && (e.defaultValue = t[1]),
        _(t[2]) && (e.tDescription = t[2]),
        typeof t[2] == "object" || typeof t[3] == "object")
      ) {
        const n = t[3] || t[2];
        Object.keys(n).forEach((s) => {
          e[s] = n[s];
        });
      }
      return e;
    },
    interpolation: {
      escapeValue: !0,
      format: (t) => t,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
    cacheInBuiltFormats: !0,
  }),
  $t = (t) => {
    var e, n;
    return (
      _(t.ns) && (t.ns = [t.ns]),
      _(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]),
      _(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]),
      ((n = (e = t.supportedLngs) == null ? void 0 : e.indexOf) == null
        ? void 0
        : n.call(e, "cimode")) < 0 &&
        (t.supportedLngs = t.supportedLngs.concat(["cimode"])),
      typeof t.initImmediate == "boolean" && (t.initAsync = t.initImmediate),
      t
    );
  },
  Oe = () => {},
  Ls = (t) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((e) => {
      typeof t[e] == "function" && (t[e] = t[e].bind(t));
    });
  },
  It = "__i18next_supportNoticeShown",
  Rs = () =>
    !!(
      (typeof globalThis < "u" && globalThis[It]) ||
      (typeof process < "u" && ze && ze.I18NEXT_NO_SUPPORT_NOTICE) ||
      (typeof process < "u" && ze)
    ),
  Ps = () => {
    typeof globalThis < "u" && (globalThis[It] = !0);
  },
  Es = (t) => {
    var e, n, s, o, i, r, a, l, c, u, h, p, f;
    return !!(
      ((s =
        (n =
          (e = t == null ? void 0 : t.modules) == null ? void 0 : e.backend) ==
        null
          ? void 0
          : n.name) == null
        ? void 0
        : s.indexOf("Locize")) > 0 ||
      ((a =
        (r =
          (i =
            (o = t == null ? void 0 : t.modules) == null
              ? void 0
              : o.backend) == null
            ? void 0
            : i.constructor) == null
          ? void 0
          : r.name) == null
        ? void 0
        : a.indexOf("Locize")) > 0 ||
      ((c =
        (l = t == null ? void 0 : t.options) == null ? void 0 : l.backend) !=
        null &&
        c.backends &&
        t.options.backend.backends.some((g) => {
          var m, b, S;
          return (
            ((m = g == null ? void 0 : g.name) == null
              ? void 0
              : m.indexOf("Locize")) > 0 ||
            ((S =
              (b = g == null ? void 0 : g.constructor) == null
                ? void 0
                : b.name) == null
              ? void 0
              : S.indexOf("Locize")) > 0
          );
        })) ||
      ((h =
        (u = t == null ? void 0 : t.options) == null ? void 0 : u.backend) !=
        null &&
        h.projectId) ||
      ((f =
        (p = t == null ? void 0 : t.options) == null ? void 0 : p.backend) !=
        null &&
        f.backendOptions &&
        t.options.backend.backendOptions.some((g) =>
          g == null ? void 0 : g.projectId,
        ))
    );
  };
class pe extends xe {
  constructor(e = {}, n) {
    if (
      (super(),
      (this.options = $t(e)),
      (this.services = {}),
      (this.logger = K),
      (this.modules = { external: [] }),
      Ls(this),
      n && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initAsync) return this.init(e, n), this;
      setTimeout(() => {
        this.init(e, n);
      }, 0);
    }
  }
  init(e = {}, n) {
    (this.isInitializing = !0),
      typeof e == "function" && ((n = e), (e = {})),
      e.defaultNS == null &&
        e.ns &&
        (_(e.ns)
          ? (e.defaultNS = e.ns)
          : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const s = Je();
    (this.options = { ...s, ...this.options, ...$t(e) }),
      (this.options.interpolation = {
        ...s.interpolation,
        ...this.options.interpolation,
      }),
      e.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = e.keySeparator),
      e.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = e.nsSeparator),
      typeof this.options.overloadTranslationOptionHandler != "function" &&
        (this.options.overloadTranslationOptionHandler =
          s.overloadTranslationOptionHandler),
      this.options.showSupportNotice !== !1 &&
        !Es(this) &&
        !Rs() &&
        (typeof console < "u" &&
          typeof console.info < "u" &&
          console.info(
            "\u{1F310} i18next is made possible by our own product, Locize \u2014 consider powering your project with managed localization (AI, CDN, integrations): https://locize.com \u{1F499}",
          ),
        Ps());
    const o = (a) => (a ? (typeof a == "function" ? new a() : a) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? K.init(o(this.modules.logger), this.options)
        : K.init(null, this.options);
      let a;
      this.modules.formatter ? (a = this.modules.formatter) : (a = ks);
      const l = new Lt(this.options);
      this.store = new St(this.options.resources, this.options);
      const c = this.services;
      (c.logger = K),
        (c.resourceStore = this.store),
        (c.languageUtils = l),
        (c.pluralResolver = new ws(l, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        this.options.interpolation.format &&
          this.options.interpolation.format !== s.interpolation.format &&
          this.logger.deprecate(
            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting",
          ),
        a &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === s.interpolation.format) &&
          ((c.formatter = o(a)),
          c.formatter.init && c.formatter.init(c, this.options),
          (this.options.interpolation.format = c.formatter.format.bind(
            c.formatter,
          ))),
        (c.interpolator = new Tt(this.options)),
        (c.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (c.backendConnector = new Os(
          o(this.modules.backend),
          c.resourceStore,
          c,
          this.options,
        )),
        c.backendConnector.on("*", (u, ...h) => {
          this.emit(u, ...h);
        }),
        this.modules.languageDetector &&
          ((c.languageDetector = o(this.modules.languageDetector)),
          c.languageDetector.init &&
            c.languageDetector.init(c, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((c.i18nFormat = o(this.modules.i18nFormat)),
          c.i18nFormat.init && c.i18nFormat.init(this)),
        (this.translator = new Pe(this.services, this.options)),
        this.translator.on("*", (u, ...h) => {
          this.emit(u, ...h);
        }),
        this.modules.external.forEach((u) => {
          u.init && u.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      n || (n = Oe),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const a = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      a.length > 0 && a[0] !== "dev" && (this.options.lng = a[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined",
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((a) => {
        this[a] = (...l) => this.store[a](...l);
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((a) => {
        this[a] = (...l) => (this.store[a](...l), this);
      });
    const i = ue(),
      r = () => {
        const a = (l, c) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!",
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            i.resolve(c),
            n(l, c);
        };
        if (this.languages && !this.isInitialized)
          return a(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, a);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? r()
        : setTimeout(r, 0),
      i
    );
  }
  loadResources(e, n = Oe) {
    var i, r;
    let s = n;
    const o = _(e) ? e : this.language;
    if (
      (typeof e == "function" && (s = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (o == null ? void 0 : o.toLowerCase()) === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return s();
      const a = [],
        l = (c) => {
          !c ||
            c === "cimode" ||
            this.services.languageUtils.toResolveHierarchy(c).forEach((u) => {
              u !== "cimode" && a.indexOf(u) < 0 && a.push(u);
            });
        };
      o
        ? l(o)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((c) => l(c)),
        (r = (i = this.options.preload) == null ? void 0 : i.forEach) == null ||
          r.call(i, (c) => l(c)),
        this.services.backendConnector.load(a, this.options.ns, (c) => {
          !c &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            s(c);
        });
    } else s(null);
  }
  reloadResources(e, n, s) {
    const o = ue();
    return (
      typeof e == "function" && ((s = e), (e = void 0)),
      typeof n == "function" && ((s = n), (n = void 0)),
      e || (e = this.languages),
      n || (n = this.options.ns),
      s || (s = Oe),
      this.services.backendConnector.reload(e, n, (i) => {
        o.resolve(), s(i);
      }),
      o
    );
  }
  use(e) {
    if (!e)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()",
      );
    if (!e.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()",
      );
    return (
      e.type === "backend" && (this.modules.backend = e),
      (e.type === "logger" || (e.log && e.warn && e.error)) &&
        (this.modules.logger = e),
      e.type === "languageDetector" && (this.modules.languageDetector = e),
      e.type === "i18nFormat" && (this.modules.i18nFormat = e),
      e.type === "postProcessor" && kt.addPostProcessor(e),
      e.type === "formatter" && (this.modules.formatter = e),
      e.type === "3rdParty" && this.modules.external.push(e),
      this
    );
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let n = 0; n < this.languages.length; n++) {
        const s = this.languages[n];
        if (
          !(["cimode", "dev"].indexOf(s) > -1) &&
          this.store.hasLanguageSomeTranslations(s)
        ) {
          this.resolvedLanguage = s;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(e) < 0 &&
        this.store.hasLanguageSomeTranslations(e) &&
        ((this.resolvedLanguage = e), this.languages.unshift(e));
    }
  }
  changeLanguage(e, n) {
    this.isLanguageChangingTo = e;
    const s = ue();
    this.emit("languageChanging", e);
    const o = (a) => {
        (this.language = a),
          (this.languages = this.services.languageUtils.toResolveHierarchy(a)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(a);
      },
      i = (a, l) => {
        l
          ? this.isLanguageChangingTo === e &&
            (o(l),
            this.translator.changeLanguage(l),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", l),
            this.logger.log("languageChanged", l))
          : (this.isLanguageChangingTo = void 0),
          s.resolve((...c) => this.t(...c)),
          n && n(a, (...c) => this.t(...c));
      },
      r = (a) => {
        var u, h;
        !e && !a && this.services.languageDetector && (a = []);
        const l = _(a) ? a : a && a[0],
          c = this.store.hasLanguageSomeTranslations(l)
            ? l
            : this.services.languageUtils.getBestMatchFromCodes(_(a) ? [a] : a);
        c &&
          (this.language || o(c),
          this.translator.language || this.translator.changeLanguage(c),
          (h =
            (u = this.services.languageDetector) == null
              ? void 0
              : u.cacheUserLanguage) == null || h.call(u, c)),
          this.loadResources(c, (p) => {
            i(p, c);
          });
      };
    return (
      !e &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? r(this.services.languageDetector.detect())
        : !e &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(r)
            : this.services.languageDetector.detect(r)
          : r(e),
      s
    );
  }
  getFixedT(e, n, s) {
    const o = (i, r, ...a) => {
      let l;
      typeof r != "object"
        ? (l = this.options.overloadTranslationOptionHandler([i, r].concat(a)))
        : (l = { ...r }),
        (l.lng = l.lng || o.lng),
        (l.lngs = l.lngs || o.lngs),
        (l.ns = l.ns || o.ns),
        l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || s || o.keyPrefix);
      const c = { ...this.options, ...l };
      typeof l.keyPrefix == "function" && (l.keyPrefix = se(l.keyPrefix, c));
      const u = this.options.keySeparator || ".";
      let h;
      return (
        l.keyPrefix && Array.isArray(i)
          ? (h = i.map(
              (p) => (
                typeof p == "function" && (p = se(p, c)),
                `${l.keyPrefix}${u}${p}`
              ),
            ))
          : (typeof i == "function" && (i = se(i, c)),
            (h = l.keyPrefix ? `${l.keyPrefix}${u}${i}` : i)),
        this.t(h, l)
      );
    };
    return _(e) ? (o.lng = e) : (o.lngs = e), (o.ns = n), (o.keyPrefix = s), o;
  }
  t(...e) {
    var n;
    return (n = this.translator) == null ? void 0 : n.translate(...e);
  }
  exists(...e) {
    var n;
    return (n = this.translator) == null ? void 0 : n.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, n = {}) {
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages,
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages,
        ),
        !1
      );
    const s = n.lng || this.resolvedLanguage || this.languages[0],
      o = this.options ? this.options.fallbackLng : !1,
      i = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const r = (a, l) => {
      const c = this.services.backendConnector.state[`${a}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, r);
      if (a !== void 0) return a;
    }
    return !!(
      this.hasResourceBundle(s, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (r(s, e) && (!o || r(i, e)))
    );
  }
  loadNamespaces(e, n) {
    const s = ue();
    return this.options.ns
      ? (_(e) && (e = [e]),
        e.forEach((o) => {
          this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
        }),
        this.loadResources((o) => {
          s.resolve(), n && n(o);
        }),
        s)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(e, n) {
    const s = ue();
    _(e) && (e = [e]);
    const o = this.options.preload || [],
      i = e.filter(
        (r) =>
          o.indexOf(r) < 0 && this.services.languageUtils.isSupportedCode(r),
      );
    return i.length
      ? ((this.options.preload = o.concat(i)),
        this.loadResources((r) => {
          s.resolve(), n && n(r);
        }),
        s)
      : (n && n(), Promise.resolve());
  }
  dir(e) {
    var o, i;
    if (
      (e ||
        (e =
          this.resolvedLanguage ||
          (((o = this.languages) == null ? void 0 : o.length) > 0
            ? this.languages[0]
            : this.language)),
      !e)
    )
      return "rtl";
    try {
      const r = new Intl.Locale(e);
      if (r && r.getTextInfo) {
        const a = r.getTextInfo();
        if (a && a.direction) return a.direction;
      }
    } catch {}
    const n = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      s =
        ((i = this.services) == null ? void 0 : i.languageUtils) ||
        new Lt(Je());
    return e.toLowerCase().indexOf("-latn") > 1
      ? "ltr"
      : n.indexOf(s.getLanguagePartFromCode(e)) > -1 ||
          e.toLowerCase().indexOf("-arab") > 1
        ? "rtl"
        : "ltr";
  }
  static createInstance(e = {}, n) {
    const s = new pe(e, n);
    return (s.createInstance = pe.createInstance), s;
  }
  cloneInstance(e = {}, n = Oe) {
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const o = { ...this.options, ...e, isClone: !0 },
      i = new pe(o);
    if (
      ((e.debug !== void 0 || e.prefix !== void 0) &&
        (i.logger = i.logger.clone(e)),
      ["store", "services", "language"].forEach((r) => {
        i[r] = this[r];
      }),
      (i.services = { ...this.services }),
      (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
      s)
    ) {
      const r = Object.keys(this.store.data).reduce(
        (a, l) => (
          (a[l] = { ...this.store.data[l] }),
          (a[l] = Object.keys(a[l]).reduce(
            (c, u) => ((c[u] = { ...a[l][u] }), c),
            a[l],
          )),
          a
        ),
        {},
      );
      (i.store = new St(r, o)), (i.services.resourceStore = i.store);
    }
    if (e.interpolation) {
      const r = {
          ...Je().interpolation,
          ...this.options.interpolation,
          ...e.interpolation,
        },
        a = { ...o, interpolation: r };
      i.services.interpolator = new Tt(a);
    }
    return (
      (i.translator = new Pe(i.services, o)),
      i.translator.on("*", (r, ...a) => {
        i.emit(r, ...a);
      }),
      i.init(o, n),
      (i.translator.options = o),
      (i.translator.backendConnector.services.utils = {
        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
      }),
      i
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const C = pe.createInstance();
C.createInstance,
  C.dir,
  C.init,
  C.loadResources,
  C.reloadResources,
  C.use,
  C.changeLanguage,
  C.getFixedT,
  C.t,
  C.exists,
  C.setDefaultNamespace,
  C.hasLoadedNamespace,
  C.loadNamespaces,
  C.loadLanguages;
const Ts =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Ns = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "\xA9",
    "&#169;": "\xA9",
    "&reg;": "\xAE",
    "&#174;": "\xAE",
    "&hellip;": "\u2026",
    "&#8230;": "\u2026",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  $s = (t) => Ns[t],
  Is = (t) => t.replace(Ts, $s);
let We = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Is,
  transDefaultProps: void 0,
};
const js = (t = {}) => {
    We = { ...We, ...t };
  },
  Cs = () => We;
let jt;
const As = (t) => {
    jt = t;
  },
  Fs = () => jt,
  Us = {
    type: "3rdParty",
    init(t) {
      js(t.options.react), As(t);
    },
  },
  Ds = {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    multiSeparator: "+",
    allowMultiLoading: !1,
    fetch: typeof fetch > "u" ? void 0 : fetch,
    parse: JSON.parse,
    stringify: JSON.stringify,
    requestOptions: {},
  },
  Ms = (t) => (Array.isArray(t) ? t : [t]),
  Vs = (t, ...e) => (typeof t == "function" ? t(...e) : t);
class Le extends Error {
  constructor(n, s = !1) {
    super(n);
    R(this, "retry", null);
    this.retry = s;
  }
}
class Ct {
  constructor(e, n) {
    R(this, "type", "backend");
    this.init(e, n);
  }
  init(e, n = {}) {
    (this.services = e), (this.options = { ...Ds, ...this.options, ...n });
  }
  getLoadPath(e, n) {
    return Vs(this.options.loadPath, e, n);
  }
  read(e, n, s) {
    const o = this.getLoadPath(e, n),
      i = this.services.interpolator.interpolate(o, { lng: e, ns: n });
    this.loadUrl(i, s);
  }
  readMulti(e, n, s) {
    const o = this.getLoadPath(e, n),
      { multiSeparator: i } = this.options,
      r = this.services.interpolator.interpolate(o, {
        lng: e.join(i),
        ns: n.join(i),
      });
    this.loadUrl(r, s);
  }
  loadUrl(e, n) {
    const { fetch: s, requestOptions: o, parse: i } = this.options;
    s(e, o)
      .then(
        (r) => {
          const { ok: a, status: l } = r;
          if (!a) {
            const c = l >= 500 && l < 600;
            throw new Le(`failed loading ${e}`, c);
          }
          return r.text();
        },
        () => {
          throw new Le(`failed loading ${e}`);
        },
      )
      .then((r) => {
        try {
          return n(null, i(r, e));
        } catch {
          throw new Le(`failed parsing ${e} to json`, !1);
        }
      })
      .catch((r) => {
        r instanceof Le && n(r.message, r.retry);
      });
  }
  create(e, n, s, o) {
    const i = { [s]: o || "" };
    Ms(e).forEach((r) => {
      const {
          addPath: a,
          requestOptions: l,
          fetch: c,
          stringify: u,
        } = this.options,
        h = this.services.interpolator.interpolate(a, { lng: r, ns: n });
      try {
        c(h, { method: "POST", body: u(i), ...l });
      } catch (p) {
        console.error(p);
      }
    });
  }
}
R(Ct, "type", "backend");
const Bs = ["common", "popup", "settings", "sync"],
  zs = lt();
C.use(Ct)
  .use(Us)
  .init({
    fallbackLng: "en",
    fallbackNS: "common",
    lng: zs,
    ns: Bs,
    defaultNS: "common",
    backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
    interpolation: { escapeValue: !1 },
    debug: !1,
  });
const D = {
    fatal: 0,
    error: 0,
    warn: 1,
    log: 2,
    info: 3,
    success: 3,
    fail: 3,
    debug: 4,
    trace: 5,
    verbose: Number.POSITIVE_INFINITY,
  },
  At = {
    silent: { level: -1 },
    fatal: { level: D.fatal },
    error: { level: D.error },
    warn: { level: D.warn },
    log: { level: D.log },
    info: { level: D.info },
    success: { level: D.success },
    fail: { level: D.fail },
    ready: { level: D.info },
    start: { level: D.info },
    box: { level: D.info },
    debug: { level: D.debug },
    trace: { level: D.trace },
    verbose: { level: D.verbose },
  };
function Ge(t) {
  if (t === null || typeof t != "object") return !1;
  const e = Object.getPrototypeOf(t);
  return (e !== null &&
    e !== Object.prototype &&
    Object.getPrototypeOf(e) !== null) ||
    Symbol.iterator in t
    ? !1
    : Symbol.toStringTag in t
      ? Object.prototype.toString.call(t) === "[object Module]"
      : !0;
}
function Ye(t, e, n = ".", s) {
  if (!Ge(e)) return Ye(t, {}, n);
  const o = Object.assign({}, e);
  for (const i in t) {
    if (i === "__proto__" || i === "constructor") continue;
    const r = t[i];
    r != null &&
      (Array.isArray(r) && Array.isArray(o[i])
        ? (o[i] = [...r, ...o[i]])
        : Ge(r) && Ge(o[i])
          ? (o[i] = Ye(r, o[i], (n ? `${n}.` : "") + i.toString()))
          : (o[i] = r));
  }
  return o;
}
function Hs(t) {
  return (...e) => e.reduce((n, s) => Ye(n, s, ""), {});
}
const qs = Hs();
function Ks(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Js(t) {
  return !(!Ks(t) || (!t.message && !t.args) || t.stack);
}
let Xe = !1;
const Ft = [];
class I {
  constructor(e = {}) {
    R(this, "options");
    R(this, "_lastLog");
    R(this, "_mockFn");
    const n = e.types || At;
    this.options = qs(
      {
        ...e,
        defaults: { ...e.defaults },
        level: Qe(e.level, n),
        reporters: [...(e.reporters || [])],
      },
      {
        types: At,
        throttle: 1e3,
        throttleMin: 5,
        formatOptions: { date: !0, colors: !1, compact: !0 },
      },
    );
    for (const s in n) {
      const o = { type: s, ...this.options.defaults, ...n[s] };
      (this[s] = this._wrapLogFn(o)), (this[s].raw = this._wrapLogFn(o, !0));
    }
    this.options.mockFn && this.mockTypes(), (this._lastLog = {});
  }
  get level() {
    return this.options.level;
  }
  set level(e) {
    this.options.level = Qe(e, this.options.types, this.options.level);
  }
  prompt(e, n) {
    if (!this.options.prompt) throw new Error("prompt is not supported!");
    return this.options.prompt(e, n);
  }
  create(e) {
    const n = new I({ ...this.options, ...e });
    return this._mockFn && n.mockTypes(this._mockFn), n;
  }
  withDefaults(e) {
    return this.create({
      ...this.options,
      defaults: { ...this.options.defaults, ...e },
    });
  }
  withTag(e) {
    return this.withDefaults({
      tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + e : e,
    });
  }
  addReporter(e) {
    return this.options.reporters.push(e), this;
  }
  removeReporter(e) {
    if (e) {
      const n = this.options.reporters.indexOf(e);
      if (n !== -1) return this.options.reporters.splice(n, 1);
    } else this.options.reporters.splice(0);
    return this;
  }
  setReporters(e) {
    return (this.options.reporters = Array.isArray(e) ? e : [e]), this;
  }
  wrapAll() {
    this.wrapConsole(), this.wrapStd();
  }
  restoreAll() {
    this.restoreConsole(), this.restoreStd();
  }
  wrapConsole() {
    for (const e in this.options.types)
      console["__" + e] || (console["__" + e] = console[e]),
        (console[e] = this[e].raw);
  }
  restoreConsole() {
    for (const e in this.options.types)
      console["__" + e] &&
        ((console[e] = console["__" + e]), delete console["__" + e]);
  }
  wrapStd() {
    this._wrapStream(this.options.stdout, "log"),
      this._wrapStream(this.options.stderr, "log");
  }
  _wrapStream(e, n) {
    e &&
      (e.__write || (e.__write = e.write),
      (e.write = (s) => {
        this[n].raw(String(s).trim());
      }));
  }
  restoreStd() {
    this._restoreStream(this.options.stdout),
      this._restoreStream(this.options.stderr);
  }
  _restoreStream(e) {
    e && e.__write && ((e.write = e.__write), delete e.__write);
  }
  pauseLogs() {
    Xe = !0;
  }
  resumeLogs() {
    Xe = !1;
    const e = Ft.splice(0);
    for (const n of e) n[0]._logFn(n[1], n[2]);
  }
  mockTypes(e) {
    const n = e || this.options.mockFn;
    if (((this._mockFn = n), typeof n == "function"))
      for (const s in this.options.types)
        (this[s] = n(s, this.options.types[s]) || this[s]),
          (this[s].raw = this[s]);
  }
  _wrapLogFn(e, n) {
    return (...s) => {
      if (Xe) {
        Ft.push([this, e, s, n]);
        return;
      }
      return this._logFn(e, s, n);
    };
  }
  _logFn(e, n, s) {
    if ((e.level || 0) > this.level) return !1;
    const o = {
      date: new Date(),
      args: [],
      ...e,
      level: Qe(e.level, this.options.types),
    };
    !s && n.length === 1 && Js(n[0])
      ? Object.assign(o, n[0])
      : (o.args = [...n]),
      o.message && (o.args.unshift(o.message), delete o.message),
      o.additional &&
        (Array.isArray(o.additional) ||
          (o.additional = o.additional.split(`
`)),
        o.args.push(
          `
` +
            o.additional.join(`
`),
        ),
        delete o.additional),
      (o.type = typeof o.type == "string" ? o.type.toLowerCase() : "log"),
      (o.tag = typeof o.tag == "string" ? o.tag : "");
    const i = (a = !1) => {
      const l = (this._lastLog.count || 0) - this.options.throttleMin;
      if (this._lastLog.object && l > 0) {
        const c = [...this._lastLog.object.args];
        l > 1 && c.push(`(repeated ${l} times)`),
          this._log({ ...this._lastLog.object, args: c }),
          (this._lastLog.count = 1);
      }
      a && ((this._lastLog.object = o), this._log(o));
    };
    clearTimeout(this._lastLog.timeout);
    const r =
      this._lastLog.time && o.date
        ? o.date.getTime() - this._lastLog.time.getTime()
        : 0;
    if (((this._lastLog.time = o.date), r < this.options.throttle))
      try {
        const a = JSON.stringify([o.type, o.tag, o.args]),
          l = this._lastLog.serialized === a;
        if (
          ((this._lastLog.serialized = a),
          l &&
            ((this._lastLog.count = (this._lastLog.count || 0) + 1),
            this._lastLog.count > this.options.throttleMin))
        ) {
          this._lastLog.timeout = setTimeout(i, this.options.throttle);
          return;
        }
      } catch {}
    i(!0);
  }
  _log(e) {
    for (const n of this.options.reporters) n.log(e, { options: this.options });
  }
}
function Qe(t, e = {}, n = 3) {
  return t === void 0
    ? n
    : typeof t == "number"
      ? t
      : e[t] && e[t].level !== void 0
        ? e[t].level
        : n;
}
(I.prototype.add = I.prototype.addReporter),
  (I.prototype.remove = I.prototype.removeReporter),
  (I.prototype.clear = I.prototype.removeReporter),
  (I.prototype.withScope = I.prototype.withTag),
  (I.prototype.mock = I.prototype.mockTypes),
  (I.prototype.pause = I.prototype.pauseLogs),
  (I.prototype.resume = I.prototype.resumeLogs);
function Ws(t = {}) {
  return new I(t);
}
class Gs {
  constructor(e) {
    R(this, "options");
    R(this, "defaultColor");
    R(this, "levelColorMap");
    R(this, "typeColorMap");
    (this.options = { ...e }),
      (this.defaultColor = "#7f8c8d"),
      (this.levelColorMap = { 0: "#c0392b", 1: "#f39c12", 3: "#00BCD4" }),
      (this.typeColorMap = { success: "#2ecc71" });
  }
  _getLogFn(e) {
    return e < 1
      ? console.__error || console.error
      : e === 1
        ? console.__warn || console.warn
        : console.__log || console.log;
  }
  log(e) {
    const n = this._getLogFn(e.level),
      s = e.type === "log" ? "" : e.type,
      o = e.tag || "",
      i = `
      background: ${this.typeColorMap[e.type] || this.levelColorMap[e.level] || this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,
      r = `%c${[o, s].filter(Boolean).join(":")}`;
    typeof e.args[0] == "string"
      ? n(`${r}%c ${e.args[0]}`, i, "", ...e.args.slice(1))
      : n(r, i, ...e.args);
  }
}
function Ut(t = {}) {
  return Ws({
    reporters: t.reporters || [new Gs({})],
    prompt(e, n = {}) {
      return n.type === "confirm"
        ? Promise.resolve(confirm(e))
        : Promise.resolve(prompt(e));
    },
    ...t,
  });
}
Ut();
class Re {
  constructor() {
    R(this, "logKey", "app_logs");
    R(this, "maxLogs", 500);
  }
  async log(e) {
    if (!(typeof chrome > "u" || !chrome.storage))
      try {
        const n =
            (await chrome.storage.local.get(this.logKey))[this.logKey] || [],
          s = {
            time: new Date().toISOString(),
            level: e.level,
            tag: e.tag,
            args: e.args
              .map((o) =>
                typeof o == "object" ? JSON.stringify(o) : String(o),
              )
              .join(" "),
          };
        n.push(s),
          n.length > this.maxLogs && n.splice(0, n.length - this.maxLogs),
          await chrome.storage.local.set({ [this.logKey]: n });
      } catch (n) {
        console.error("Failed to save log to storage", n);
      }
  }
}
class et {
  constructor(e) {
    R(this, "consola");
    (this.consola = Ut({ level: 1, defaults: { tag: e || "BookmarkSync" } })),
      this.consola.wrapConsole();
  }
  trace(e, ...n) {
    this.consola.trace(e, ...n);
  }
  debug(e, ...n) {
    this.consola.debug(e, ...n);
  }
  info(e, ...n) {
    this.consola.info(e, ...n);
  }
  success(e, ...n) {
    this.consola.success(e, ...n);
  }
  warn(e, ...n) {
    this.consola.warn(e, ...n);
  }
  error(e, ...n) {
    this.consola.error(e, ...n);
  }
  togglePersistence(e) {
    if (e) {
      const n = this.consola.options;
      n && n.reporters
        ? n.reporters.some((s) => s instanceof Re) ||
          this.consola.addReporter(new Re())
        : this.consola.addReporter(new Re());
    } else
      this.consola.setReporters(
        (this.consola.options.reporters || []).filter(
          (n) => !(n instanceof Re),
        ),
      );
  }
  withScope(e) {
    return new et(e);
  }
  setLevel(e) {
    this.consola.level = e;
  }
}
const Ys = new et("BookmarkSync");
async function Xs() {
  Ys.trace("initSentry");
  try {
    const { appSettings: t } = await x.storage.local.get("appSettings");
    if (t && t.enableTelemetry === !1) return;
  } catch (t) {
    console.warn("Failed to get appSettings for Sentry init:", t);
  }
  Wt({
    dsn: "https://15b68f229e8d754b33a58989175701a5@o4511034645413888.ingest.us.sentry.io/4511034651901952",
    integrations: [Gt(), Yt({ levels: ["warn", "error"] })],
    tracesSampleRate: 0.5,
    sendDefaultPii: !0,
    release: "bookmarksync-extension@1.0.3",
    enableLogs: !0,
  });
}
export {
  be as A,
  pn as B,
  Ne as C,
  it as D,
  Ie as E,
  N as S,
  Xn as a,
  x as b,
  vn as c,
  _t as d,
  wn as e,
  en as f,
  ot as g,
  gn as h,
  Xs as i,
  fn as j,
  _e as k,
  ie as l,
  rs as m,
  bn as n,
  yn as o,
  Cs as p,
  Fs as q,
  mn as r,
  Be as s,
  _n as t,
  C as u,
  hn as v,
  Zt as w,
  dn as x,
  is as y,
  lt as z,
};
