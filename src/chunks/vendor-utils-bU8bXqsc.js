import { g as qa, c as Vn, a as Ha } from "./vendor-ui-Piys8gOI.js";
(function () {
  try {
    var i =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    i.SENTRY_RELEASE = { id: "bookmarksync-extension@dev" };
    var p = new i.Error().stack;
    p &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[p] = "c4cb2564-b416-420f-bb94-014d822ad801"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-c4cb2564-b416-420f-bb94-014d822ad801"));
  } catch {}
})();
var Rr = { exports: {} },
  za = Rr.exports,
  oi;
function Wa() {
  return (
    oi ||
      ((oi = 1),
      (function (i, p) {
        (function (m, u) {
          u(i);
        })(
          typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : za,
          function (m) {
            if (
              !(
                globalThis.chrome &&
                globalThis.chrome.runtime &&
                globalThis.chrome.runtime.id
              )
            )
              throw new Error(
                "This script should only be loaded in a browser extension.",
              );
            if (
              globalThis.browser &&
              globalThis.browser.runtime &&
              globalThis.browser.runtime.id
            )
              m.exports = globalThis.browser;
            else {
              const u =
                  "The message port closed before a response was received.",
                P = (S) => {
                  const H = {
                    alarms: {
                      clear: { minArgs: 0, maxArgs: 1 },
                      clearAll: { minArgs: 0, maxArgs: 0 },
                      get: { minArgs: 0, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                    },
                    bookmarks: {
                      create: { minArgs: 1, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 1 },
                      getChildren: { minArgs: 1, maxArgs: 1 },
                      getRecent: { minArgs: 1, maxArgs: 1 },
                      getSubTree: { minArgs: 1, maxArgs: 1 },
                      getTree: { minArgs: 0, maxArgs: 0 },
                      move: { minArgs: 2, maxArgs: 2 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeTree: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                    browserAction: {
                      disable: {
                        minArgs: 0,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      enable: {
                        minArgs: 0,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                      getBadgeText: { minArgs: 1, maxArgs: 1 },
                      getPopup: { minArgs: 1, maxArgs: 1 },
                      getTitle: { minArgs: 1, maxArgs: 1 },
                      openPopup: { minArgs: 0, maxArgs: 0 },
                      setBadgeBackgroundColor: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setBadgeText: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setIcon: { minArgs: 1, maxArgs: 1 },
                      setPopup: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setTitle: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                    },
                    browsingData: {
                      remove: { minArgs: 2, maxArgs: 2 },
                      removeCache: { minArgs: 1, maxArgs: 1 },
                      removeCookies: { minArgs: 1, maxArgs: 1 },
                      removeDownloads: { minArgs: 1, maxArgs: 1 },
                      removeFormData: { minArgs: 1, maxArgs: 1 },
                      removeHistory: { minArgs: 1, maxArgs: 1 },
                      removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                      removePasswords: { minArgs: 1, maxArgs: 1 },
                      removePluginData: { minArgs: 1, maxArgs: 1 },
                      settings: { minArgs: 0, maxArgs: 0 },
                    },
                    commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                    contextMenus: {
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeAll: { minArgs: 0, maxArgs: 0 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                    cookies: {
                      get: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 1, maxArgs: 1 },
                      getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      set: { minArgs: 1, maxArgs: 1 },
                    },
                    devtools: {
                      inspectedWindow: {
                        eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                      },
                      panels: {
                        create: {
                          minArgs: 3,
                          maxArgs: 3,
                          singleCallbackArg: !0,
                        },
                        elements: {
                          createSidebarPane: { minArgs: 1, maxArgs: 1 },
                        },
                      },
                    },
                    downloads: {
                      cancel: { minArgs: 1, maxArgs: 1 },
                      download: { minArgs: 1, maxArgs: 1 },
                      erase: { minArgs: 1, maxArgs: 1 },
                      getFileIcon: { minArgs: 1, maxArgs: 2 },
                      open: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      pause: { minArgs: 1, maxArgs: 1 },
                      removeFile: { minArgs: 1, maxArgs: 1 },
                      resume: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                      show: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                    },
                    extension: {
                      isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                      isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                    },
                    history: {
                      addUrl: { minArgs: 1, maxArgs: 1 },
                      deleteAll: { minArgs: 0, maxArgs: 0 },
                      deleteRange: { minArgs: 1, maxArgs: 1 },
                      deleteUrl: { minArgs: 1, maxArgs: 1 },
                      getVisits: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                    },
                    i18n: {
                      detectLanguage: { minArgs: 1, maxArgs: 1 },
                      getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                    },
                    identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                    idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                    management: {
                      get: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      getSelf: { minArgs: 0, maxArgs: 0 },
                      setEnabled: { minArgs: 2, maxArgs: 2 },
                      uninstallSelf: { minArgs: 0, maxArgs: 1 },
                    },
                    notifications: {
                      clear: { minArgs: 1, maxArgs: 1 },
                      create: { minArgs: 1, maxArgs: 2 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                    pageAction: {
                      getPopup: { minArgs: 1, maxArgs: 1 },
                      getTitle: { minArgs: 1, maxArgs: 1 },
                      hide: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setIcon: { minArgs: 1, maxArgs: 1 },
                      setPopup: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setTitle: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      show: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                    },
                    permissions: {
                      contains: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      request: { minArgs: 1, maxArgs: 1 },
                    },
                    runtime: {
                      getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                      getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                      openOptionsPage: { minArgs: 0, maxArgs: 0 },
                      requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                      sendMessage: { minArgs: 1, maxArgs: 3 },
                      sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                      setUninstallURL: { minArgs: 1, maxArgs: 1 },
                    },
                    sessions: {
                      getDevices: { minArgs: 0, maxArgs: 1 },
                      getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                      restore: { minArgs: 0, maxArgs: 1 },
                    },
                    storage: {
                      local: {
                        clear: { minArgs: 0, maxArgs: 0 },
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 },
                      },
                      managed: {
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                      },
                      sync: {
                        clear: { minArgs: 0, maxArgs: 0 },
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 },
                      },
                    },
                    tabs: {
                      captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                      create: { minArgs: 1, maxArgs: 1 },
                      detectLanguage: { minArgs: 0, maxArgs: 1 },
                      discard: { minArgs: 0, maxArgs: 1 },
                      duplicate: { minArgs: 1, maxArgs: 1 },
                      executeScript: { minArgs: 1, maxArgs: 2 },
                      get: { minArgs: 1, maxArgs: 1 },
                      getCurrent: { minArgs: 0, maxArgs: 0 },
                      getZoom: { minArgs: 0, maxArgs: 1 },
                      getZoomSettings: { minArgs: 0, maxArgs: 1 },
                      goBack: { minArgs: 0, maxArgs: 1 },
                      goForward: { minArgs: 0, maxArgs: 1 },
                      highlight: { minArgs: 1, maxArgs: 1 },
                      insertCSS: { minArgs: 1, maxArgs: 2 },
                      move: { minArgs: 2, maxArgs: 2 },
                      query: { minArgs: 1, maxArgs: 1 },
                      reload: { minArgs: 0, maxArgs: 2 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeCSS: { minArgs: 1, maxArgs: 2 },
                      sendMessage: { minArgs: 2, maxArgs: 3 },
                      setZoom: { minArgs: 1, maxArgs: 2 },
                      setZoomSettings: { minArgs: 1, maxArgs: 2 },
                      update: { minArgs: 1, maxArgs: 2 },
                    },
                    topSites: { get: { minArgs: 0, maxArgs: 0 } },
                    webNavigation: {
                      getAllFrames: { minArgs: 1, maxArgs: 1 },
                      getFrame: { minArgs: 1, maxArgs: 1 },
                    },
                    webRequest: {
                      handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                    },
                    windows: {
                      create: { minArgs: 0, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 2 },
                      getAll: { minArgs: 0, maxArgs: 1 },
                      getCurrent: { minArgs: 0, maxArgs: 1 },
                      getLastFocused: { minArgs: 0, maxArgs: 1 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                  };
                  if (Object.keys(H).length === 0)
                    throw new Error(
                      "api-metadata.json has not been included in browser-polyfill",
                    );
                  class O extends WeakMap {
                    constructor(y, B = void 0) {
                      super(B), (this.createItem = y);
                    }
                    get(y) {
                      return (
                        this.has(y) || this.set(y, this.createItem(y)),
                        super.get(y)
                      );
                    }
                  }
                  const _ = (f) =>
                      f && typeof f == "object" && typeof f.then == "function",
                    s =
                      (f, y) =>
                      (...B) => {
                        S.runtime.lastError
                          ? f.reject(new Error(S.runtime.lastError.message))
                          : y.singleCallbackArg ||
                              (B.length <= 1 && y.singleCallbackArg !== !1)
                            ? f.resolve(B[0])
                            : f.resolve(B);
                      },
                    h = (f) => (f == 1 ? "argument" : "arguments"),
                    w = (f, y) =>
                      function (B, ...Y) {
                        if (Y.length < y.minArgs)
                          throw new Error(
                            `Expected at least ${y.minArgs} ${h(y.minArgs)} for ${f}(), got ${Y.length}`,
                          );
                        if (Y.length > y.maxArgs)
                          throw new Error(
                            `Expected at most ${y.maxArgs} ${h(y.maxArgs)} for ${f}(), got ${Y.length}`,
                          );
                        return new Promise((M, W) => {
                          if (y.fallbackToNoCallback)
                            try {
                              B[f](...Y, s({ resolve: M, reject: W }, y));
                            } catch (Q) {
                              console.warn(
                                `${f} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                                Q,
                              ),
                                B[f](...Y),
                                (y.fallbackToNoCallback = !1),
                                (y.noCallback = !0),
                                M();
                            }
                          else
                            y.noCallback
                              ? (B[f](...Y), M())
                              : B[f](...Y, s({ resolve: M, reject: W }, y));
                        });
                      },
                    l = (f, y, B) =>
                      new Proxy(y, {
                        apply(Y, M, W) {
                          return B.call(M, f, ...W);
                        },
                      });
                  let A = Function.call.bind(Object.prototype.hasOwnProperty);
                  const x = (f, y = {}, B = {}) => {
                      let Y = Object.create(null),
                        M = {
                          has(Q, F) {
                            return F in f || F in Y;
                          },
                          get(Q, F, ot) {
                            if (F in Y) return Y[F];
                            if (!(F in f)) return;
                            let st = f[F];
                            if (typeof st == "function")
                              if (typeof y[F] == "function")
                                st = l(f, f[F], y[F]);
                              else if (A(B, F)) {
                                let ht = w(F, B[F]);
                                st = l(f, f[F], ht);
                              } else st = st.bind(f);
                            else if (
                              typeof st == "object" &&
                              st !== null &&
                              (A(y, F) || A(B, F))
                            )
                              st = x(st, y[F], B[F]);
                            else if (A(B, "*")) st = x(st, y[F], B["*"]);
                            else
                              return (
                                Object.defineProperty(Y, F, {
                                  configurable: !0,
                                  enumerable: !0,
                                  get() {
                                    return f[F];
                                  },
                                  set(ht) {
                                    f[F] = ht;
                                  },
                                }),
                                st
                              );
                            return (Y[F] = st), st;
                          },
                          set(Q, F, ot, st) {
                            return F in Y ? (Y[F] = ot) : (f[F] = ot), !0;
                          },
                          defineProperty(Q, F, ot) {
                            return Reflect.defineProperty(Y, F, ot);
                          },
                          deleteProperty(Q, F) {
                            return Reflect.deleteProperty(Y, F);
                          },
                        },
                        W = Object.create(f);
                      return new Proxy(W, M);
                    },
                    E = (f) => ({
                      addListener(y, B, ...Y) {
                        y.addListener(f.get(B), ...Y);
                      },
                      hasListener(y, B) {
                        return y.hasListener(f.get(B));
                      },
                      removeListener(y, B) {
                        y.removeListener(f.get(B));
                      },
                    }),
                    k = new O((f) =>
                      typeof f != "function"
                        ? f
                        : function (y) {
                            const B = x(
                              y,
                              {},
                              { getContent: { minArgs: 0, maxArgs: 0 } },
                            );
                            f(B);
                          },
                    ),
                    N = new O((f) =>
                      typeof f != "function"
                        ? f
                        : function (y, B, Y) {
                            let M = !1,
                              W,
                              Q = new Promise((ht) => {
                                W = function (_t) {
                                  (M = !0), ht(_t);
                                };
                              }),
                              F;
                            try {
                              F = f(y, B, W);
                            } catch (ht) {
                              F = Promise.reject(ht);
                            }
                            const ot = F !== !0 && _(F);
                            return F !== !0 && !ot && !M
                              ? !1
                              : (((ht) => {
                                  ht.then(
                                    (_t) => {
                                      Y(_t);
                                    },
                                    (_t) => {
                                      let bt;
                                      _t &&
                                      (_t instanceof Error ||
                                        typeof _t.message == "string")
                                        ? (bt = _t.message)
                                        : (bt = "An unexpected error occurred"),
                                        Y({
                                          __mozWebExtensionPolyfillReject__: !0,
                                          message: bt,
                                        });
                                    },
                                  ).catch((_t) => {
                                    console.error(
                                      "Failed to send onMessage rejected reply",
                                      _t,
                                    );
                                  });
                                })(ot ? F : Q),
                                !0);
                          },
                    ),
                    v = ({ reject: f, resolve: y }, B) => {
                      S.runtime.lastError
                        ? S.runtime.lastError.message === u
                          ? y()
                          : f(new Error(S.runtime.lastError.message))
                        : B && B.__mozWebExtensionPolyfillReject__
                          ? f(new Error(B.message))
                          : y(B);
                    },
                    b = (f, y, B, ...Y) => {
                      if (Y.length < y.minArgs)
                        throw new Error(
                          `Expected at least ${y.minArgs} ${h(y.minArgs)} for ${f}(), got ${Y.length}`,
                        );
                      if (Y.length > y.maxArgs)
                        throw new Error(
                          `Expected at most ${y.maxArgs} ${h(y.maxArgs)} for ${f}(), got ${Y.length}`,
                        );
                      return new Promise((M, W) => {
                        const Q = v.bind(null, { resolve: M, reject: W });
                        Y.push(Q), B.sendMessage(...Y);
                      });
                    },
                    g = {
                      devtools: { network: { onRequestFinished: E(k) } },
                      runtime: {
                        onMessage: E(N),
                        onMessageExternal: E(N),
                        sendMessage: b.bind(null, "sendMessage", {
                          minArgs: 1,
                          maxArgs: 3,
                        }),
                      },
                      tabs: {
                        sendMessage: b.bind(null, "sendMessage", {
                          minArgs: 2,
                          maxArgs: 3,
                        }),
                      },
                    },
                    U = {
                      clear: { minArgs: 1, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 1 },
                      set: { minArgs: 1, maxArgs: 1 },
                    };
                  return (
                    (H.privacy = {
                      network: { "*": U },
                      services: { "*": U },
                      websites: { "*": U },
                    }),
                    x(S, g, H)
                  );
                };
              m.exports = P(chrome);
            }
          },
        );
      })(Rr)),
    Rr.exports
  );
}
let $a = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
  Va = (i = 21) => {
    let p = "",
      m = crypto.getRandomValues(new Uint8Array((i |= 0)));
    for (; i--; ) p += $a[m[i] & 63];
    return p;
  };
var Ya = {},
  ii = {};
const Yn = Object.create(null),
  _n = (i) => {
    var p;
    return (
      Ya ||
      ((p = globalThis.Deno) == null ? void 0 : p.env.toObject()) ||
      globalThis.__env__ ||
      (i ? Yn : globalThis)
    );
  },
  oe = new Proxy(Yn, {
    get(i, p) {
      return _n()[p] ?? Yn[p];
    },
    has(i, p) {
      return p in _n() || p in Yn;
    },
    set(i, p, m) {
      const u = _n(!0);
      return (u[p] = m), !0;
    },
    deleteProperty(i, p) {
      if (!p) return !1;
      const m = _n(!0);
      return delete m[p], !0;
    },
    ownKeys() {
      const i = _n(!0);
      return Object.keys(i);
    },
  });
function Ut(i, p) {
  return typeof process < "u" && ii
    ? (ii[i] ?? p)
    : typeof Deno < "u"
      ? (Deno.env.get(i) ?? p)
      : typeof Bun < "u"
        ? (Bun.env[i] ?? p)
        : p;
}
const wn = 1,
  Lt = 4,
  le = 8,
  ee = 24,
  ai = {
    eterm: Lt,
    cons25: Lt,
    console: Lt,
    cygwin: Lt,
    dtterm: Lt,
    gnome: Lt,
    hurd: Lt,
    jfbterm: Lt,
    konsole: Lt,
    kterm: Lt,
    mlterm: Lt,
    mosh: ee,
    putty: Lt,
    st: Lt,
    "rxvt-unicode-24bit": ee,
    terminator: ee,
    "xterm-kitty": ee,
  },
  Qa = new Map(
    Object.entries({
      APPVEYOR: le,
      BUILDKITE: le,
      CIRCLECI: ee,
      DRONE: le,
      GITEA_ACTIONS: ee,
      GITHUB_ACTIONS: ee,
      GITLAB_CI: le,
      TRAVIS: le,
    }),
  ),
  Za = [
    /ansi/,
    /color/,
    /linux/,
    /direct/,
    /^con[0-9]*x[0-9]/,
    /^rxvt/,
    /^screen/,
    /^xterm/,
    /^vt100/,
    /^vt220/,
  ];
function Xa() {
  if (Ut("FORCE_COLOR") !== void 0)
    switch (Ut("FORCE_COLOR")) {
      case "":
      case "1":
      case "true":
        return Lt;
      case "2":
        return le;
      case "3":
        return ee;
      default:
        return wn;
    }
  if (
    (Ut("NODE_DISABLE_COLORS") !== void 0 &&
      Ut("NODE_DISABLE_COLORS") !== "") ||
    (Ut("NO_COLOR") !== void 0 && Ut("NO_COLOR") !== "") ||
    Ut("TERM") === "dumb"
  )
    return wn;
  if (Ut("TMUX")) return ee;
  if ("TF_BUILD" in oe && "AGENT_NAME" in oe) return Lt;
  if ("CI" in oe) {
    for (const { 0: i, 1: p } of Qa) if (i in oe) return p;
    return Ut("CI_NAME") === "codeship" ? le : wn;
  }
  if ("TEAMCITY_VERSION" in oe)
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.exec(Ut("TEAMCITY_VERSION")) !== null
      ? Lt
      : wn;
  switch (Ut("TERM_PROGRAM")) {
    case "iTerm.app":
      return !Ut("TERM_PROGRAM_VERSION") ||
        /^[0-2]\./.exec(Ut("TERM_PROGRAM_VERSION")) !== null
        ? le
        : ee;
    case "HyperTerm":
    case "MacTerm":
      return ee;
    case "Apple_Terminal":
      return le;
  }
  if (Ut("COLORTERM") === "truecolor" || Ut("COLORTERM") === "24bit") return ee;
  if (Ut("TERM")) {
    if (/truecolor/.exec(Ut("TERM")) !== null) return ee;
    if (/^xterm-256/.exec(Ut("TERM")) !== null) return le;
    const i = Ut("TERM").toLowerCase();
    if (ai[i]) return ai[i];
    if (Za.some((p) => p.exec(i) !== null)) return Lt;
  }
  return Ut("COLORTERM") ? Lt : wn;
}
const fe = {
    reset: "\x1B[0m",
    bright: "\x1B[1m",
    dim: "\x1B[2m",
    fg: {
      red: "\x1B[31m",
      green: "\x1B[32m",
      yellow: "\x1B[33m",
      blue: "\x1B[34m",
      magenta: "\x1B[35m",
    },
  },
  Tr = ["debug", "info", "success", "warn", "error"];
function Ga(i, p) {
  return Tr.indexOf(p) >= Tr.indexOf(i);
}
const Ja = {
    info: fe.fg.blue,
    success: fe.fg.green,
    warn: fe.fg.yellow,
    error: fe.fg.red,
    debug: fe.fg.magenta,
  },
  ts = (i, p, m) => {
    const u = new Date().toISOString();
    return m
      ? `${fe.dim}${u}${fe.reset} ${Ja[i]}${i.toUpperCase()}${fe.reset} ${fe.bright}[Better Auth]:${fe.reset} ${p}`
      : `${u} ${i.toUpperCase()} [Better Auth]: ${p}`;
  },
  es = (i) => {
    const p = "warn",
      m = Xa() !== 1,
      u = (P, S, H = []) => {
        if (!Ga(p, P)) return;
        const O = ts(P, S, m);
        {
          P === "error"
            ? console.error(O, ...H)
            : P === "warn"
              ? console.warn(O, ...H)
              : console.log(O, ...H);
          return;
        }
      };
    return {
      ...Object.fromEntries(Tr.map((P) => [P, (...[S, ...H]) => u(P, S, H)])),
      get level() {
        return p;
      },
    };
  };
es();
function ns(i) {
  return Object.fromEntries(
    Object.entries(i).map(([p, m]) => [
      p,
      { code: p, message: m, toString: () => p },
    ]),
  );
}
ns({
  USER_NOT_FOUND: "User not found",
  FAILED_TO_CREATE_USER: "Failed to create user",
  FAILED_TO_CREATE_SESSION: "Failed to create session",
  FAILED_TO_UPDATE_USER: "Failed to update user",
  FAILED_TO_GET_SESSION: "Failed to get session",
  INVALID_PASSWORD: "Invalid password",
  INVALID_EMAIL: "Invalid email",
  INVALID_EMAIL_OR_PASSWORD: "Invalid email or password",
  INVALID_USER: "Invalid user",
  SOCIAL_ACCOUNT_ALREADY_LINKED: "Social account already linked",
  PROVIDER_NOT_FOUND: "Provider not found",
  INVALID_TOKEN: "Invalid token",
  TOKEN_EXPIRED: "Token expired",
  ID_TOKEN_NOT_SUPPORTED: "id_token not supported",
  FAILED_TO_GET_USER_INFO: "Failed to get user info",
  USER_EMAIL_NOT_FOUND: "User email not found",
  EMAIL_NOT_VERIFIED: "Email not verified",
  PASSWORD_TOO_SHORT: "Password too short",
  PASSWORD_TOO_LONG: "Password too long",
  USER_ALREADY_EXISTS: "User already exists.",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
    "User already exists. Use another email.",
  EMAIL_CAN_NOT_BE_UPDATED: "Email can not be updated",
  CREDENTIAL_ACCOUNT_NOT_FOUND: "Credential account not found",
  SESSION_EXPIRED: "Session expired. Re-authenticate to perform this action.",
  FAILED_TO_UNLINK_LAST_ACCOUNT: "You can't unlink your last account",
  ACCOUNT_NOT_FOUND: "Account not found",
  USER_ALREADY_HAS_PASSWORD:
    "User already has a password. Provide that to delete the account.",
  CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
    "Cross-site navigation login blocked. This request appears to be a CSRF attack.",
  VERIFICATION_EMAIL_NOT_ENABLED: "Verification email isn't enabled",
  EMAIL_ALREADY_VERIFIED: "Email is already verified",
  EMAIL_MISMATCH: "Email mismatch",
  SESSION_NOT_FRESH: "Session is not fresh",
  LINKED_ACCOUNT_ALREADY_EXISTS: "Linked account already exists",
  INVALID_ORIGIN: "Invalid origin",
  INVALID_CALLBACK_URL: "Invalid callbackURL",
  INVALID_REDIRECT_URL: "Invalid redirectURL",
  INVALID_ERROR_CALLBACK_URL: "Invalid errorCallbackURL",
  INVALID_NEW_USER_CALLBACK_URL: "Invalid newUserCallbackURL",
  MISSING_OR_NULL_ORIGIN: "Missing or null Origin",
  CALLBACK_URL_REQUIRED: "callbackURL is required",
  FAILED_TO_CREATE_VERIFICATION: "Unable to create verification",
  FIELD_NOT_ALLOWED: "Field not allowed to be set",
  ASYNC_VALIDATION_NOT_SUPPORTED: "Async validation is not supported",
  VALIDATION_ERROR: "Validation Error",
  MISSING_FIELD: "Field is required",
  METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
    "POST method requires deferSessionRefresh to be enabled in session config",
  BODY_MUST_BE_AN_OBJECT: "Body must be an object",
  PASSWORD_ALREADY_SET: "User already has a password set",
});
var Qn = class extends Error {
  constructor(i, p) {
    super(i, p),
      (this.name = "BetterAuthError"),
      (this.message = i),
      (this.stack = "");
  }
};
function rs(i) {
  try {
    return (new URL(i).pathname.replace(/\/+$/, "") || "/") !== "/";
  } catch {
    throw new Qn(`Invalid base URL: ${i}. Please provide a valid base URL.`);
  }
}
function os(i) {
  try {
    const p = new URL(i);
    if (p.protocol !== "http:" && p.protocol !== "https:")
      throw new Qn(
        `Invalid base URL: ${i}. URL must include 'http://' or 'https://'`,
      );
  } catch (p) {
    throw p instanceof Qn
      ? p
      : new Qn(`Invalid base URL: ${i}. Please provide a valid base URL.`, {
          cause: p,
        });
  }
}
function Cr(i, p = "/api/auth") {
  if ((os(i), rs(i))) return i;
  const m = i.replace(/\/+$/, "");
  return !p || p === "/"
    ? m
    : ((p = p.startsWith("/") ? p : `/${p}`), `${m}${p}`);
}
function is(i, p, m, u, P) {
  if (i) return Cr(i, p);
  {
    const S =
      oe.BETTER_AUTH_URL ||
      oe.NEXT_PUBLIC_BETTER_AUTH_URL ||
      oe.PUBLIC_BETTER_AUTH_URL ||
      oe.NUXT_PUBLIC_BETTER_AUTH_URL ||
      oe.NUXT_PUBLIC_AUTH_URL ||
      (oe.BASE_URL !== "/" ? oe.BASE_URL : void 0);
    if (S) return Cr(S, p);
  }
  if (typeof window < "u" && window.location)
    return Cr(window.location.origin, p);
}
function Pr(i) {
  if (i === null || typeof i != "object") return !1;
  const p = Object.getPrototypeOf(i);
  return (p !== null &&
    p !== Object.prototype &&
    Object.getPrototypeOf(p) !== null) ||
    Symbol.iterator in i
    ? !1
    : Symbol.toStringTag in i
      ? Object.prototype.toString.call(i) === "[object Module]"
      : !0;
}
function Ir(i, p, m = ".", u) {
  if (!Pr(p)) return Ir(i, {}, m, u);
  const P = { ...p };
  for (const S of Object.keys(i)) {
    if (S === "__proto__" || S === "constructor") continue;
    const H = i[S];
    H != null &&
      ((u && u(P, S, H, m)) ||
        (Array.isArray(H) && Array.isArray(P[S])
          ? (P[S] = [...H, ...P[S]])
          : Pr(H) && Pr(P[S])
            ? (P[S] = Ir(H, P[S], (m ? `${m}.` : "") + S.toString(), u))
            : (P[S] = H)));
  }
  return P;
}
function as(i) {
  return (...p) => p.reduce((m, u) => Ir(m, u, "", i), {});
}
const ss = as();
var us = Object.defineProperty,
  cs = Object.defineProperties,
  ls = Object.getOwnPropertyDescriptors,
  si = Object.getOwnPropertySymbols,
  fs = Object.prototype.hasOwnProperty,
  hs = Object.prototype.propertyIsEnumerable,
  ui = (i, p, m) =>
    p in i
      ? us(i, p, { enumerable: !0, configurable: !0, writable: !0, value: m })
      : (i[p] = m),
  se = (i, p) => {
    for (var m in p || (p = {})) fs.call(p, m) && ui(i, m, p[m]);
    if (si) for (var m of si(p)) hs.call(p, m) && ui(i, m, p[m]);
    return i;
  },
  he = (i, p) => cs(i, ls(p)),
  ps = class extends Error {
    constructor(i, p, m) {
      super(p || i.toString(), { cause: m }),
        (this.status = i),
        (this.statusText = p),
        (this.error = m),
        Error.captureStackTrace(this, this.constructor);
    }
  },
  ds = async (i, p) => {
    var m, u, P, S, H, O;
    let _ = p || {};
    const s = {
      onRequest: [p == null ? void 0 : p.onRequest],
      onResponse: [p == null ? void 0 : p.onResponse],
      onSuccess: [p == null ? void 0 : p.onSuccess],
      onError: [p == null ? void 0 : p.onError],
      onRetry: [p == null ? void 0 : p.onRetry],
    };
    if (!p || !(p != null && p.plugins))
      return { url: i, options: _, hooks: s };
    for (const h of (p == null ? void 0 : p.plugins) || []) {
      if (h.init) {
        const w = await ((m = h.init) == null
          ? void 0
          : m.call(h, i.toString(), p));
        (_ = w.options || _), (i = w.url);
      }
      s.onRequest.push((u = h.hooks) == null ? void 0 : u.onRequest),
        s.onResponse.push((P = h.hooks) == null ? void 0 : P.onResponse),
        s.onSuccess.push((S = h.hooks) == null ? void 0 : S.onSuccess),
        s.onError.push((H = h.hooks) == null ? void 0 : H.onError),
        s.onRetry.push((O = h.hooks) == null ? void 0 : O.onRetry);
    }
    return { url: i, options: _, hooks: s };
  },
  ci = class {
    constructor(i) {
      this.options = i;
    }
    shouldAttemptRetry(i, p) {
      return this.options.shouldRetry
        ? Promise.resolve(
            i < this.options.attempts && this.options.shouldRetry(p),
          )
        : Promise.resolve(i < this.options.attempts);
    }
    getDelay() {
      return this.options.delay;
    }
  },
  ms = class {
    constructor(i) {
      this.options = i;
    }
    shouldAttemptRetry(i, p) {
      return this.options.shouldRetry
        ? Promise.resolve(
            i < this.options.attempts && this.options.shouldRetry(p),
          )
        : Promise.resolve(i < this.options.attempts);
    }
    getDelay(i) {
      return Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** i);
    }
  };
function gs(i) {
  if (typeof i == "number")
    return new ci({ type: "linear", attempts: i, delay: 1e3 });
  switch (i.type) {
    case "linear":
      return new ci(i);
    case "exponential":
      return new ms(i);
    default:
      throw new Error("Invalid retry strategy");
  }
}
var ys = async (i) => {
    const p = {},
      m = async (u) => (typeof u == "function" ? await u() : u);
    if (i != null && i.auth) {
      if (i.auth.type === "Bearer") {
        const u = await m(i.auth.token);
        if (!u) return p;
        p.authorization = `Bearer ${u}`;
      } else if (i.auth.type === "Basic") {
        const [u, P] = await Promise.all([
          m(i.auth.username),
          m(i.auth.password),
        ]);
        if (!u || !P) return p;
        p.authorization = `Basic ${btoa(`${u}:${P}`)}`;
      } else if (i.auth.type === "Custom") {
        const [u, P] = await Promise.all([m(i.auth.prefix), m(i.auth.value)]);
        if (!P) return p;
        p.authorization = `${u ?? ""} ${P}`;
      }
    }
    return p;
  },
  vs = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function bs(i) {
  const p = i.headers.get("content-type"),
    m = new Set([
      "image/svg",
      "application/xml",
      "application/xhtml",
      "application/html",
    ]);
  if (!p) return "json";
  const u = p.split(";").shift() || "";
  return vs.test(u)
    ? "json"
    : m.has(u) || u.startsWith("text/")
      ? "text"
      : "blob";
}
function _s(i) {
  try {
    return JSON.parse(i), !0;
  } catch {
    return !1;
  }
}
function jr(i) {
  if (i === void 0) return !1;
  const p = typeof i;
  return p === "string" || p === "number" || p === "boolean" || p === null
    ? !0
    : p !== "object"
      ? !1
      : Array.isArray(i)
        ? !0
        : i.buffer
          ? !1
          : (i.constructor && i.constructor.name === "Object") ||
            typeof i.toJSON == "function";
}
function li(i) {
  try {
    return JSON.parse(i);
  } catch {
    return i;
  }
}
function fi(i) {
  return typeof i == "function";
}
function ws(i) {
  if (i != null && i.customFetchImpl) return i.customFetchImpl;
  if (typeof globalThis < "u" && fi(globalThis.fetch)) return globalThis.fetch;
  if (typeof window < "u" && fi(window.fetch)) return window.fetch;
  throw new Error("No fetch implementation found");
}
async function xs(i) {
  const p = new Headers(i == null ? void 0 : i.headers),
    m = await ys(i);
  for (const [u, P] of Object.entries(m || {})) p.set(u, P);
  if (!p.has("content-type")) {
    const u = As(i == null ? void 0 : i.body);
    u && p.set("content-type", u);
  }
  return p;
}
function As(i) {
  return jr(i) ? "application/json" : null;
}
function Os(i) {
  if (!(i != null && i.body)) return null;
  const p = new Headers(i == null ? void 0 : i.headers);
  if (jr(i.body) && !p.has("content-type")) {
    for (const [m, u] of Object.entries(i == null ? void 0 : i.body))
      u instanceof Date && (i.body[m] = u.toISOString());
    return JSON.stringify(i.body);
  }
  return p.has("content-type") &&
    p.get("content-type") === "application/x-www-form-urlencoded" &&
    jr(i.body)
    ? new URLSearchParams(i.body).toString()
    : i.body;
}
function ks(i, p) {
  var m;
  if (p != null && p.method) return p.method.toUpperCase();
  if (i.startsWith("@")) {
    const u = (m = i.split("@")[1]) == null ? void 0 : m.split("/")[0];
    return hi.includes(u)
      ? u.toUpperCase()
      : p != null && p.body
        ? "POST"
        : "GET";
  }
  return p != null && p.body ? "POST" : "GET";
}
function Ss(i, p) {
  let m;
  return (
    !(i != null && i.signal) &&
      i != null &&
      i.timeout &&
      (m = setTimeout(
        () => (p == null ? void 0 : p.abort()),
        i == null ? void 0 : i.timeout,
      )),
    {
      abortTimeout: m,
      clearTimeout: () => {
        m && clearTimeout(m);
      },
    }
  );
}
var Bs = class ba extends Error {
  constructor(p, m) {
    super(m || JSON.stringify(p, null, 2)),
      (this.issues = p),
      Object.setPrototypeOf(this, ba.prototype);
  }
};
async function Zn(i, p) {
  const m = await i["~standard"].validate(p);
  if (m.issues) throw new Bs(m.issues);
  return m.value;
}
var hi = ["get", "post", "put", "patch", "delete"],
  Es = (i) => ({
    id: "apply-schema",
    name: "Apply Schema",
    version: "1.0.0",
    async init(p, m) {
      var u, P, S, H;
      const O =
        ((P =
          (u = i.plugins) == null
            ? void 0
            : u.find((_) => {
                var s;
                return (s = _.schema) != null && s.config
                  ? p.startsWith(_.schema.config.baseURL || "") ||
                      p.startsWith(_.schema.config.prefix || "")
                  : !1;
              })) == null
          ? void 0
          : P.schema) || i.schema;
      if (O) {
        let _ = p;
        (S = O.config) != null &&
          S.prefix &&
          _.startsWith(O.config.prefix) &&
          ((_ = _.replace(O.config.prefix, "")),
          O.config.baseURL &&
            (p = p.replace(O.config.prefix, O.config.baseURL))),
          (H = O.config) != null &&
            H.baseURL &&
            _.startsWith(O.config.baseURL) &&
            (_ = _.replace(O.config.baseURL, ""));
        const s = O.schema[_];
        if (s) {
          let h = he(se({}, m), { method: s.method, output: s.output });
          return (
            (m != null && m.disableValidation) ||
              (h = he(se({}, h), {
                body: s.input
                  ? await Zn(s.input, m == null ? void 0 : m.body)
                  : m == null
                    ? void 0
                    : m.body,
                params: s.params
                  ? await Zn(s.params, m == null ? void 0 : m.params)
                  : m == null
                    ? void 0
                    : m.params,
                query: s.query
                  ? await Zn(s.query, m == null ? void 0 : m.query)
                  : m == null
                    ? void 0
                    : m.query,
              })),
            { url: p, options: h }
          );
        }
      }
      return { url: p, options: m };
    },
  }),
  Rs = (i) => {
    async function p(m, u) {
      const P = he(se(se({}, i), u), {
        plugins: [
          ...((i == null ? void 0 : i.plugins) || []),
          Es(i || {}),
          ...((u == null ? void 0 : u.plugins) || []),
        ],
      });
      if (i != null && i.catchAllError)
        try {
          return await Dr(m, P);
        } catch (S) {
          return {
            data: null,
            error: {
              status: 500,
              statusText: "Fetch Error",
              message:
                "Fetch related error. Captured by catchAllError option. See error property for more details.",
              error: S,
            },
          };
        }
      return await Dr(m, P);
    }
    return p;
  };
function Ts(i, p) {
  const {
    baseURL: m,
    params: u,
    query: P,
  } = p || { query: {}, params: {}, baseURL: "" };
  let S = i.startsWith("http") ? i.split("/").slice(0, 3).join("/") : m || "";
  if (i.startsWith("@")) {
    const h = i.toString().split("@")[1].split("/")[0];
    hi.includes(h) && (i = i.replace(`@${h}/`, "/"));
  }
  S.endsWith("/") || (S += "/");
  let [H, O] = i.replace(S, "").split("?");
  const _ = new URLSearchParams(O);
  for (const [h, w] of Object.entries(P || {})) {
    if (w == null) continue;
    let l;
    if (typeof w == "string") l = w;
    else if (Array.isArray(w)) {
      for (const A of w) _.append(h, A);
      continue;
    } else l = JSON.stringify(w);
    _.set(h, l);
  }
  if (u)
    if (Array.isArray(u)) {
      const h = H.split("/").filter((w) => w.startsWith(":"));
      for (const [w, l] of h.entries()) {
        const A = u[w];
        H = H.replace(l, A);
      }
    } else
      for (const [h, w] of Object.entries(u)) H = H.replace(`:${h}`, String(w));
  (H = H.split("/").map(encodeURIComponent).join("/")),
    H.startsWith("/") && (H = H.slice(1));
  let s = _.toString();
  return (
    (s = s.length > 0 ? `?${s}`.replace(/\+/g, "%20") : ""),
    S.startsWith("http") ? new URL(`${H}${s}`, S) : `${S}${H}${s}`
  );
}
var Dr = async (i, p) => {
  var m, u, P, S, H, O, _, s;
  const { hooks: h, url: w, options: l } = await ds(i, p),
    A = ws(l),
    x = new AbortController(),
    E = (m = l.signal) != null ? m : x.signal,
    k = Ts(w, l),
    N = Os(l),
    v = await xs(l),
    b = ks(w, l);
  let g = he(se({}, l), { url: k, headers: v, body: N, method: b, signal: E });
  for (const F of h.onRequest)
    if (F) {
      const ot = await F(g);
      typeof ot == "object" && ot !== null && (g = ot);
    }
  (("pipeTo" in g && typeof g.pipeTo == "function") ||
    typeof ((u = p == null ? void 0 : p.body) == null ? void 0 : u.pipe) ==
      "function") &&
    ("duplex" in g || (g.duplex = "half"));
  const { clearTimeout: U } = Ss(l, x);
  let f = await A(g.url, g);
  U();
  const y = { response: f, request: g };
  for (const F of h.onResponse)
    if (F) {
      const ot = await F(
        he(se({}, y), {
          response:
            (P = p == null ? void 0 : p.hookOptions) != null && P.cloneResponse
              ? f.clone()
              : f,
        }),
      );
      ot instanceof Response
        ? (f = ot)
        : typeof ot == "object" && ot !== null && (f = ot.response);
    }
  if (f.ok) {
    if (g.method === "HEAD") return { data: "", error: null };
    const F = bs(f),
      ot = { data: null, response: f, request: g };
    if (F === "json" || F === "text") {
      const st = await f.text(),
        ht = (S = g.jsonParser) != null ? S : li;
      ot.data = await ht(st);
    } else ot.data = await f[F]();
    g != null &&
      g.output &&
      g.output &&
      !g.disableValidation &&
      (ot.data = await Zn(g.output, ot.data));
    for (const st of h.onSuccess)
      st &&
        (await st(
          he(se({}, ot), {
            response:
              (H = p == null ? void 0 : p.hookOptions) != null &&
              H.cloneResponse
                ? f.clone()
                : f,
          }),
        ));
    return p != null && p.throw ? ot.data : { data: ot.data, error: null };
  }
  const B = (O = p == null ? void 0 : p.jsonParser) != null ? O : li,
    Y = await f.text(),
    M = _s(Y),
    W = M ? await B(Y) : null,
    Q = {
      response: f,
      responseText: Y,
      request: g,
      error: he(se({}, W), { status: f.status, statusText: f.statusText }),
    };
  for (const F of h.onError)
    F &&
      (await F(
        he(se({}, Q), {
          response:
            (_ = p == null ? void 0 : p.hookOptions) != null && _.cloneResponse
              ? f.clone()
              : f,
        }),
      ));
  if (p != null && p.retry) {
    const F = gs(p.retry),
      ot = (s = p.retryAttempt) != null ? s : 0;
    if (await F.shouldAttemptRetry(ot, f)) {
      for (const ht of h.onRetry) ht && (await ht(y));
      const st = F.getDelay(ot);
      return (
        await new Promise((ht) => setTimeout(ht, st)),
        await Dr(i, he(se({}, p), { retryAttempt: ot + 1 }))
      );
    }
  }
  if (p != null && p.throw) throw new ps(f.status, f.statusText, M ? W : Y);
  return {
    data: null,
    error: he(se({}, W), { status: f.status, statusText: f.statusText }),
  };
};
function Cs(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const pi = "3.7.8",
  Ps = pi,
  tn = typeof Buffer == "function",
  di = typeof TextDecoder == "function" ? new TextDecoder() : void 0,
  mi = typeof TextEncoder == "function" ? new TextEncoder() : void 0,
  Is = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  xn = Array.prototype.slice.call(Is),
  Xn = ((i) => {
    let p = {};
    return i.forEach((m, u) => (p[m] = u)), p;
  })(xn),
  js =
    /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
  Ht = String.fromCharCode.bind(String),
  gi =
    typeof Uint8Array.from == "function"
      ? Uint8Array.from.bind(Uint8Array)
      : (i) => new Uint8Array(Array.prototype.slice.call(i, 0)),
  yi = (i) =>
    i.replace(/=/g, "").replace(/[+\/]/g, (p) => (p == "+" ? "-" : "_")),
  vi = (i) => i.replace(/[^A-Za-z0-9\+\/]/g, ""),
  bi = (i) => {
    let p,
      m,
      u,
      P,
      S = "";
    const H = i.length % 3;
    for (let O = 0; O < i.length; ) {
      if (
        (m = i.charCodeAt(O++)) > 255 ||
        (u = i.charCodeAt(O++)) > 255 ||
        (P = i.charCodeAt(O++)) > 255
      )
        throw new TypeError("invalid character found");
      (p = (m << 16) | (u << 8) | P),
        (S +=
          xn[(p >> 18) & 63] +
          xn[(p >> 12) & 63] +
          xn[(p >> 6) & 63] +
          xn[p & 63]);
    }
    return H ? S.slice(0, H - 3) + "===".substring(H) : S;
  },
  Nr =
    typeof btoa == "function"
      ? (i) => btoa(i)
      : tn
        ? (i) => Buffer.from(i, "binary").toString("base64")
        : bi,
  Mr = tn
    ? (i) => Buffer.from(i).toString("base64")
    : (i) => {
        let p = [];
        for (let m = 0, u = i.length; m < u; m += 4096)
          p.push(Ht.apply(null, i.subarray(m, m + 4096)));
        return Nr(p.join(""));
      },
  Gn = (i, p = !1) => (p ? yi(Mr(i)) : Mr(i)),
  Ds = (i) => {
    if (i.length < 2) {
      var p = i.charCodeAt(0);
      return p < 128
        ? i
        : p < 2048
          ? Ht(192 | (p >>> 6)) + Ht(128 | (p & 63))
          : Ht(224 | ((p >>> 12) & 15)) +
            Ht(128 | ((p >>> 6) & 63)) +
            Ht(128 | (p & 63));
    } else {
      var p =
        65536 + (i.charCodeAt(0) - 55296) * 1024 + (i.charCodeAt(1) - 56320);
      return (
        Ht(240 | ((p >>> 18) & 7)) +
        Ht(128 | ((p >>> 12) & 63)) +
        Ht(128 | ((p >>> 6) & 63)) +
        Ht(128 | (p & 63))
      );
    }
  },
  Ns = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
  _i = (i) => i.replace(Ns, Ds),
  wi = tn
    ? (i) => Buffer.from(i, "utf8").toString("base64")
    : mi
      ? (i) => Mr(mi.encode(i))
      : (i) => Nr(_i(i)),
  en = (i, p = !1) => (p ? yi(wi(i)) : wi(i)),
  xi = (i) => en(i, !0),
  Ms =
    /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
  Us = (i) => {
    switch (i.length) {
      case 4:
        var p =
            ((7 & i.charCodeAt(0)) << 18) |
            ((63 & i.charCodeAt(1)) << 12) |
            ((63 & i.charCodeAt(2)) << 6) |
            (63 & i.charCodeAt(3)),
          m = p - 65536;
        return Ht((m >>> 10) + 55296) + Ht((m & 1023) + 56320);
      case 3:
        return Ht(
          ((15 & i.charCodeAt(0)) << 12) |
            ((63 & i.charCodeAt(1)) << 6) |
            (63 & i.charCodeAt(2)),
        );
      default:
        return Ht(((31 & i.charCodeAt(0)) << 6) | (63 & i.charCodeAt(1)));
    }
  },
  Ai = (i) => i.replace(Ms, Us),
  Oi = (i) => {
    if (((i = i.replace(/\s+/g, "")), !js.test(i)))
      throw new TypeError("malformed base64.");
    i += "==".slice(2 - (i.length & 3));
    let p,
      m,
      u,
      P = [];
    for (let S = 0; S < i.length; )
      (p =
        (Xn[i.charAt(S++)] << 18) |
        (Xn[i.charAt(S++)] << 12) |
        ((m = Xn[i.charAt(S++)]) << 6) |
        (u = Xn[i.charAt(S++)])),
        m === 64
          ? P.push(Ht((p >> 16) & 255))
          : u === 64
            ? P.push(Ht((p >> 16) & 255, (p >> 8) & 255))
            : P.push(Ht((p >> 16) & 255, (p >> 8) & 255, p & 255));
    return P.join("");
  },
  Ur =
    typeof atob == "function"
      ? (i) => atob(vi(i))
      : tn
        ? (i) => Buffer.from(i, "base64").toString("binary")
        : Oi,
  ki = tn
    ? (i) => gi(Buffer.from(i, "base64"))
    : (i) =>
        gi(
          Ur(i)
            .split("")
            .map((p) => p.charCodeAt(0)),
        ),
  Si = (i) => ki(Bi(i)),
  Ks = tn
    ? (i) => Buffer.from(i, "base64").toString("utf8")
    : di
      ? (i) => di.decode(ki(i))
      : (i) => Ai(Ur(i)),
  Bi = (i) => vi(i.replace(/[-_]/g, (p) => (p == "-" ? "+" : "/"))),
  Kr = (i) => Ks(Bi(i)),
  Ls = (i) => {
    if (typeof i != "string") return !1;
    const p = i.replace(/\s+/g, "").replace(/={0,2}$/, "");
    return !/[^\s0-9a-zA-Z\+/]/.test(p) || !/[^\s0-9a-zA-Z\-_]/.test(p);
  },
  Ei = (i) => ({ value: i, enumerable: !1, writable: !0, configurable: !0 }),
  Ri = function () {
    const i = (p, m) => Object.defineProperty(String.prototype, p, Ei(m));
    i("fromBase64", function () {
      return Kr(this);
    }),
      i("toBase64", function (p) {
        return en(this, p);
      }),
      i("toBase64URI", function () {
        return en(this, !0);
      }),
      i("toBase64URL", function () {
        return en(this, !0);
      }),
      i("toUint8Array", function () {
        return Si(this);
      });
  },
  Ti = function () {
    const i = (p, m) => Object.defineProperty(Uint8Array.prototype, p, Ei(m));
    i("toBase64", function (p) {
      return Gn(this, p);
    }),
      i("toBase64URI", function () {
        return Gn(this, !0);
      }),
      i("toBase64URL", function () {
        return Gn(this, !0);
      });
  },
  Fs = () => {
    Ri(), Ti();
  },
  qs = {
    version: pi,
    VERSION: Ps,
    atob: Ur,
    atobPolyfill: Oi,
    btoa: Nr,
    btoaPolyfill: bi,
    fromBase64: Kr,
    toBase64: en,
    encode: en,
    encodeURI: xi,
    encodeURL: xi,
    utob: _i,
    btou: Ai,
    decode: Kr,
    isValid: Ls,
    fromUint8Array: Gn,
    toUint8Array: Si,
    extendString: Ri,
    extendUint8Array: Ti,
    extendBuiltins: Fs,
  };
var Lr = { exports: {} };
function Hs(i) {
  throw new Error(
    'Could not dynamically require "' +
      i +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var Fr = { exports: {} };
const zs = {},
  Ws = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: zs },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  $s = qa(Ws);
var Vs = Fr.exports,
  Ci;
function kt() {
  return (
    Ci ||
      ((Ci = 1),
      (function (i, p) {
        (function (m, u) {
          i.exports = u();
        })(Vs, function () {
          var m =
            m ||
            (function (u, P) {
              var S;
              if (
                (typeof window < "u" && window.crypto && (S = window.crypto),
                typeof self < "u" && self.crypto && (S = self.crypto),
                typeof globalThis < "u" &&
                  globalThis.crypto &&
                  (S = globalThis.crypto),
                !S &&
                  typeof window < "u" &&
                  window.msCrypto &&
                  (S = window.msCrypto),
                !S && typeof Vn < "u" && Vn.crypto && (S = Vn.crypto),
                !S && typeof Hs == "function")
              )
                try {
                  S = $s;
                } catch {}
              var H = function () {
                  if (S) {
                    if (typeof S.getRandomValues == "function")
                      try {
                        return S.getRandomValues(new Uint32Array(1))[0];
                      } catch {}
                    if (typeof S.randomBytes == "function")
                      try {
                        return S.randomBytes(4).readInt32LE();
                      } catch {}
                  }
                  throw new Error(
                    "Native crypto module could not be used to get secure random number.",
                  );
                },
                O =
                  Object.create ||
                  (function () {
                    function v() {}
                    return function (b) {
                      var g;
                      return (
                        (v.prototype = b),
                        (g = new v()),
                        (v.prototype = null),
                        g
                      );
                    };
                  })(),
                _ = {},
                s = (_.lib = {}),
                h = (s.Base = (function () {
                  return {
                    extend: function (v) {
                      var b = O(this);
                      return (
                        v && b.mixIn(v),
                        (!b.hasOwnProperty("init") || this.init === b.init) &&
                          (b.init = function () {
                            b.$super.init.apply(this, arguments);
                          }),
                        (b.init.prototype = b),
                        (b.$super = this),
                        b
                      );
                    },
                    create: function () {
                      var v = this.extend();
                      return v.init.apply(v, arguments), v;
                    },
                    init: function () {},
                    mixIn: function (v) {
                      for (var b in v) v.hasOwnProperty(b) && (this[b] = v[b]);
                      v.hasOwnProperty("toString") &&
                        (this.toString = v.toString);
                    },
                    clone: function () {
                      return this.init.prototype.extend(this);
                    },
                  };
                })()),
                w = (s.WordArray = h.extend({
                  init: function (v, b) {
                    (v = this.words = v || []),
                      b != P
                        ? (this.sigBytes = b)
                        : (this.sigBytes = v.length * 4);
                  },
                  toString: function (v) {
                    return (v || A).stringify(this);
                  },
                  concat: function (v) {
                    var b = this.words,
                      g = v.words,
                      U = this.sigBytes,
                      f = v.sigBytes;
                    if ((this.clamp(), U % 4))
                      for (var y = 0; y < f; y++) {
                        var B = (g[y >>> 2] >>> (24 - (y % 4) * 8)) & 255;
                        b[(U + y) >>> 2] |= B << (24 - ((U + y) % 4) * 8);
                      }
                    else
                      for (var Y = 0; Y < f; Y += 4)
                        b[(U + Y) >>> 2] = g[Y >>> 2];
                    return (this.sigBytes += f), this;
                  },
                  clamp: function () {
                    var v = this.words,
                      b = this.sigBytes;
                    (v[b >>> 2] &= 4294967295 << (32 - (b % 4) * 8)),
                      (v.length = u.ceil(b / 4));
                  },
                  clone: function () {
                    var v = h.clone.call(this);
                    return (v.words = this.words.slice(0)), v;
                  },
                  random: function (v) {
                    for (var b = [], g = 0; g < v; g += 4) b.push(H());
                    return new w.init(b, v);
                  },
                })),
                l = (_.enc = {}),
                A = (l.Hex = {
                  stringify: function (v) {
                    for (
                      var b = v.words, g = v.sigBytes, U = [], f = 0;
                      f < g;
                      f++
                    ) {
                      var y = (b[f >>> 2] >>> (24 - (f % 4) * 8)) & 255;
                      U.push((y >>> 4).toString(16)),
                        U.push((y & 15).toString(16));
                    }
                    return U.join("");
                  },
                  parse: function (v) {
                    for (var b = v.length, g = [], U = 0; U < b; U += 2)
                      g[U >>> 3] |=
                        parseInt(v.substr(U, 2), 16) << (24 - (U % 8) * 4);
                    return new w.init(g, b / 2);
                  },
                }),
                x = (l.Latin1 = {
                  stringify: function (v) {
                    for (
                      var b = v.words, g = v.sigBytes, U = [], f = 0;
                      f < g;
                      f++
                    ) {
                      var y = (b[f >>> 2] >>> (24 - (f % 4) * 8)) & 255;
                      U.push(String.fromCharCode(y));
                    }
                    return U.join("");
                  },
                  parse: function (v) {
                    for (var b = v.length, g = [], U = 0; U < b; U++)
                      g[U >>> 2] |=
                        (v.charCodeAt(U) & 255) << (24 - (U % 4) * 8);
                    return new w.init(g, b);
                  },
                }),
                E = (l.Utf8 = {
                  stringify: function (v) {
                    try {
                      return decodeURIComponent(escape(x.stringify(v)));
                    } catch {
                      throw new Error("Malformed UTF-8 data");
                    }
                  },
                  parse: function (v) {
                    return x.parse(unescape(encodeURIComponent(v)));
                  },
                }),
                k = (s.BufferedBlockAlgorithm = h.extend({
                  reset: function () {
                    (this._data = new w.init()), (this._nDataBytes = 0);
                  },
                  _append: function (v) {
                    typeof v == "string" && (v = E.parse(v)),
                      this._data.concat(v),
                      (this._nDataBytes += v.sigBytes);
                  },
                  _process: function (v) {
                    var b,
                      g = this._data,
                      U = g.words,
                      f = g.sigBytes,
                      y = this.blockSize,
                      B = y * 4,
                      Y = f / B;
                    v
                      ? (Y = u.ceil(Y))
                      : (Y = u.max((Y | 0) - this._minBufferSize, 0));
                    var M = Y * y,
                      W = u.min(M * 4, f);
                    if (M) {
                      for (var Q = 0; Q < M; Q += y) this._doProcessBlock(U, Q);
                      (b = U.splice(0, M)), (g.sigBytes -= W);
                    }
                    return new w.init(b, W);
                  },
                  clone: function () {
                    var v = h.clone.call(this);
                    return (v._data = this._data.clone()), v;
                  },
                  _minBufferSize: 0,
                }));
              s.Hasher = k.extend({
                cfg: h.extend(),
                init: function (v) {
                  (this.cfg = this.cfg.extend(v)), this.reset();
                },
                reset: function () {
                  k.reset.call(this), this._doReset();
                },
                update: function (v) {
                  return this._append(v), this._process(), this;
                },
                finalize: function (v) {
                  v && this._append(v);
                  var b = this._doFinalize();
                  return b;
                },
                blockSize: 16,
                _createHelper: function (v) {
                  return function (b, g) {
                    return new v.init(g).finalize(b);
                  };
                },
                _createHmacHelper: function (v) {
                  return function (b, g) {
                    return new N.HMAC.init(v, g).finalize(b);
                  };
                },
              });
              var N = (_.algo = {});
              return _;
            })(Math);
          return m;
        });
      })(Fr)),
    Fr.exports
  );
}
var qr = { exports: {} },
  Ys = qr.exports,
  Pi;
function Jn() {
  return (
    Pi ||
      ((Pi = 1),
      (function (i, p) {
        (function (m, u) {
          i.exports = u(kt());
        })(Ys, function (m) {
          return (
            (function (u) {
              var P = m,
                S = P.lib,
                H = S.Base,
                O = S.WordArray,
                _ = (P.x64 = {});
              (_.Word = H.extend({
                init: function (s, h) {
                  (this.high = s), (this.low = h);
                },
              })),
                (_.WordArray = H.extend({
                  init: function (s, h) {
                    (s = this.words = s || []),
                      h != u
                        ? (this.sigBytes = h)
                        : (this.sigBytes = s.length * 8);
                  },
                  toX32: function () {
                    for (
                      var s = this.words, h = s.length, w = [], l = 0;
                      l < h;
                      l++
                    ) {
                      var A = s[l];
                      w.push(A.high), w.push(A.low);
                    }
                    return O.create(w, this.sigBytes);
                  },
                  clone: function () {
                    for (
                      var s = H.clone.call(this),
                        h = (s.words = this.words.slice(0)),
                        w = h.length,
                        l = 0;
                      l < w;
                      l++
                    )
                      h[l] = h[l].clone();
                    return s;
                  },
                }));
            })(),
            m
          );
        });
      })(qr)),
    qr.exports
  );
}
var Hr = { exports: {} },
  Qs = Hr.exports,
  Ii;
function Zs() {
  return (
    Ii ||
      ((Ii = 1),
      (function (i, p) {
        (function (m, u) {
          i.exports = u(kt());
        })(Qs, function (m) {
          return (
            (function () {
              if (typeof ArrayBuffer == "function") {
                var u = m,
                  P = u.lib,
                  S = P.WordArray,
                  H = S.init,
                  O = (S.init = function (_) {
                    if (
                      (_ instanceof ArrayBuffer && (_ = new Uint8Array(_)),
                      (_ instanceof Int8Array ||
                        (typeof Uint8ClampedArray < "u" &&
                          _ instanceof Uint8ClampedArray) ||
                        _ instanceof Int16Array ||
                        _ instanceof Uint16Array ||
                        _ instanceof Int32Array ||
                        _ instanceof Uint32Array ||
                        _ instanceof Float32Array ||
                        _ instanceof Float64Array) &&
                        (_ = new Uint8Array(
                          _.buffer,
                          _.byteOffset,
                          _.byteLength,
                        )),
                      _ instanceof Uint8Array)
                    ) {
                      for (var s = _.byteLength, h = [], w = 0; w < s; w++)
                        h[w >>> 2] |= _[w] << (24 - (w % 4) * 8);
                      H.call(this, h, s);
                    } else H.apply(this, arguments);
                  });
                O.prototype = S;
              }
            })(),
            m.lib.WordArray
          );
        });
      })(Hr)),
    Hr.exports
  );
}
var zr = { exports: {} },
  Xs = zr.exports,
  ji;
function Gs() {
  return (
    ji ||
      ((ji = 1),
      (function (i, p) {
        (function (m, u) {
          i.exports = u(kt());
        })(Xs, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.WordArray,
                H = u.enc;
              (H.Utf16 = H.Utf16BE =
                {
                  stringify: function (_) {
                    for (
                      var s = _.words, h = _.sigBytes, w = [], l = 0;
                      l < h;
                      l += 2
                    ) {
                      var A = (s[l >>> 2] >>> (16 - (l % 4) * 8)) & 65535;
                      w.push(String.fromCharCode(A));
                    }
                    return w.join("");
                  },
                  parse: function (_) {
                    for (var s = _.length, h = [], w = 0; w < s; w++)
                      h[w >>> 1] |= _.charCodeAt(w) << (16 - (w % 2) * 16);
                    return S.create(h, s * 2);
                  },
                }),
                (H.Utf16LE = {
                  stringify: function (_) {
                    for (
                      var s = _.words, h = _.sigBytes, w = [], l = 0;
                      l < h;
                      l += 2
                    ) {
                      var A = O((s[l >>> 2] >>> (16 - (l % 4) * 8)) & 65535);
                      w.push(String.fromCharCode(A));
                    }
                    return w.join("");
                  },
                  parse: function (_) {
                    for (var s = _.length, h = [], w = 0; w < s; w++)
                      h[w >>> 1] |= O(_.charCodeAt(w) << (16 - (w % 2) * 16));
                    return S.create(h, s * 2);
                  },
                });
              function O(_) {
                return ((_ << 8) & 4278255360) | ((_ >>> 8) & 16711935);
              }
            })(),
            m.enc.Utf16
          );
        });
      })(zr)),
    zr.exports
  );
}
var Wr = { exports: {} },
  Js = Wr.exports,
  Di;
function Le() {
  return (
    Di ||
      ((Di = 1),
      (function (i, p) {
        (function (m, u) {
          i.exports = u(kt());
        })(Js, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.WordArray,
                H = u.enc;
              H.Base64 = {
                stringify: function (_) {
                  var s = _.words,
                    h = _.sigBytes,
                    w = this._map;
                  _.clamp();
                  for (var l = [], A = 0; A < h; A += 3)
                    for (
                      var x = (s[A >>> 2] >>> (24 - (A % 4) * 8)) & 255,
                        E =
                          (s[(A + 1) >>> 2] >>> (24 - ((A + 1) % 4) * 8)) & 255,
                        k =
                          (s[(A + 2) >>> 2] >>> (24 - ((A + 2) % 4) * 8)) & 255,
                        N = (x << 16) | (E << 8) | k,
                        v = 0;
                      v < 4 && A + v * 0.75 < h;
                      v++
                    )
                      l.push(w.charAt((N >>> (6 * (3 - v))) & 63));
                  var b = w.charAt(64);
                  if (b) for (; l.length % 4; ) l.push(b);
                  return l.join("");
                },
                parse: function (_) {
                  var s = _.length,
                    h = this._map,
                    w = this._reverseMap;
                  if (!w) {
                    w = this._reverseMap = [];
                    for (var l = 0; l < h.length; l++) w[h.charCodeAt(l)] = l;
                  }
                  var A = h.charAt(64);
                  if (A) {
                    var x = _.indexOf(A);
                    x !== -1 && (s = x);
                  }
                  return O(_, s, w);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              };
              function O(_, s, h) {
                for (var w = [], l = 0, A = 0; A < s; A++)
                  if (A % 4) {
                    var x = h[_.charCodeAt(A - 1)] << ((A % 4) * 2),
                      E = h[_.charCodeAt(A)] >>> (6 - (A % 4) * 2),
                      k = x | E;
                    (w[l >>> 2] |= k << (24 - (l % 4) * 8)), l++;
                  }
                return S.create(w, l);
              }
            })(),
            m.enc.Base64
          );
        });
      })(Wr)),
    Wr.exports
  );
}
var $r = { exports: {} },
  tu = $r.exports,
  Ni;
function eu() {
  return (
    Ni ||
      ((Ni = 1),
      (function (i, p) {
        (function (m, u) {
          i.exports = u(kt());
        })(tu, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.WordArray,
                H = u.enc;
              H.Base64url = {
                stringify: function (_, s) {
                  s === void 0 && (s = !0);
                  var h = _.words,
                    w = _.sigBytes,
                    l = s ? this._safe_map : this._map;
                  _.clamp();
                  for (var A = [], x = 0; x < w; x += 3)
                    for (
                      var E = (h[x >>> 2] >>> (24 - (x % 4) * 8)) & 255,
                        k =
                          (h[(x + 1) >>> 2] >>> (24 - ((x + 1) % 4) * 8)) & 255,
                        N =
                          (h[(x + 2) >>> 2] >>> (24 - ((x + 2) % 4) * 8)) & 255,
                        v = (E << 16) | (k << 8) | N,
                        b = 0;
                      b < 4 && x + b * 0.75 < w;
                      b++
                    )
                      A.push(l.charAt((v >>> (6 * (3 - b))) & 63));
                  var g = l.charAt(64);
                  if (g) for (; A.length % 4; ) A.push(g);
                  return A.join("");
                },
                parse: function (_, s) {
                  s === void 0 && (s = !0);
                  var h = _.length,
                    w = s ? this._safe_map : this._map,
                    l = this._reverseMap;
                  if (!l) {
                    l = this._reverseMap = [];
                    for (var A = 0; A < w.length; A++) l[w.charCodeAt(A)] = A;
                  }
                  var x = w.charAt(64);
                  if (x) {
                    var E = _.indexOf(x);
                    E !== -1 && (h = E);
                  }
                  return O(_, h, l);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _safe_map:
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
              };
              function O(_, s, h) {
                for (var w = [], l = 0, A = 0; A < s; A++)
                  if (A % 4) {
                    var x = h[_.charCodeAt(A - 1)] << ((A % 4) * 2),
                      E = h[_.charCodeAt(A)] >>> (6 - (A % 4) * 2),
                      k = x | E;
                    (w[l >>> 2] |= k << (24 - (l % 4) * 8)), l++;
                  }
                return S.create(w, l);
              }
            })(),
            m.enc.Base64url
          );
        });
      })($r)),
    $r.exports
  );
}
var Vr = { exports: {} },
  nu = Vr.exports,
  Mi;
function Fe() {
  return (
    Mi ||
      ((Mi = 1),
      (function (i, p) {
        (function (m, u) {
          i.exports = u(kt());
        })(nu, function (m) {
          return (
            (function (u) {
              var P = m,
                S = P.lib,
                H = S.WordArray,
                O = S.Hasher,
                _ = P.algo,
                s = [];
              (function () {
                for (var E = 0; E < 64; E++)
                  s[E] = (u.abs(u.sin(E + 1)) * 4294967296) | 0;
              })();
              var h = (_.MD5 = O.extend({
                _doReset: function () {
                  this._hash = new H.init([
                    1732584193, 4023233417, 2562383102, 271733878,
                  ]);
                },
                _doProcessBlock: function (E, k) {
                  for (var N = 0; N < 16; N++) {
                    var v = k + N,
                      b = E[v];
                    E[v] =
                      (((b << 8) | (b >>> 24)) & 16711935) |
                      (((b << 24) | (b >>> 8)) & 4278255360);
                  }
                  var g = this._hash.words,
                    U = E[k + 0],
                    f = E[k + 1],
                    y = E[k + 2],
                    B = E[k + 3],
                    Y = E[k + 4],
                    M = E[k + 5],
                    W = E[k + 6],
                    Q = E[k + 7],
                    F = E[k + 8],
                    ot = E[k + 9],
                    st = E[k + 10],
                    ht = E[k + 11],
                    _t = E[k + 12],
                    bt = E[k + 13],
                    Bt = E[k + 14],
                    wt = E[k + 15],
                    Z = g[0],
                    G = g[1],
                    nt = g[2],
                    X = g[3];
                  (Z = w(Z, G, nt, X, U, 7, s[0])),
                    (X = w(X, Z, G, nt, f, 12, s[1])),
                    (nt = w(nt, X, Z, G, y, 17, s[2])),
                    (G = w(G, nt, X, Z, B, 22, s[3])),
                    (Z = w(Z, G, nt, X, Y, 7, s[4])),
                    (X = w(X, Z, G, nt, M, 12, s[5])),
                    (nt = w(nt, X, Z, G, W, 17, s[6])),
                    (G = w(G, nt, X, Z, Q, 22, s[7])),
                    (Z = w(Z, G, nt, X, F, 7, s[8])),
                    (X = w(X, Z, G, nt, ot, 12, s[9])),
                    (nt = w(nt, X, Z, G, st, 17, s[10])),
                    (G = w(G, nt, X, Z, ht, 22, s[11])),
                    (Z = w(Z, G, nt, X, _t, 7, s[12])),
                    (X = w(X, Z, G, nt, bt, 12, s[13])),
                    (nt = w(nt, X, Z, G, Bt, 17, s[14])),
                    (G = w(G, nt, X, Z, wt, 22, s[15])),
                    (Z = l(Z, G, nt, X, f, 5, s[16])),
                    (X = l(X, Z, G, nt, W, 9, s[17])),
                    (nt = l(nt, X, Z, G, ht, 14, s[18])),
                    (G = l(G, nt, X, Z, U, 20, s[19])),
                    (Z = l(Z, G, nt, X, M, 5, s[20])),
                    (X = l(X, Z, G, nt, st, 9, s[21])),
                    (nt = l(nt, X, Z, G, wt, 14, s[22])),
                    (G = l(G, nt, X, Z, Y, 20, s[23])),
                    (Z = l(Z, G, nt, X, ot, 5, s[24])),
                    (X = l(X, Z, G, nt, Bt, 9, s[25])),
                    (nt = l(nt, X, Z, G, B, 14, s[26])),
                    (G = l(G, nt, X, Z, F, 20, s[27])),
                    (Z = l(Z, G, nt, X, bt, 5, s[28])),
                    (X = l(X, Z, G, nt, y, 9, s[29])),
                    (nt = l(nt, X, Z, G, Q, 14, s[30])),
                    (G = l(G, nt, X, Z, _t, 20, s[31])),
                    (Z = A(Z, G, nt, X, M, 4, s[32])),
                    (X = A(X, Z, G, nt, F, 11, s[33])),
                    (nt = A(nt, X, Z, G, ht, 16, s[34])),
                    (G = A(G, nt, X, Z, Bt, 23, s[35])),
                    (Z = A(Z, G, nt, X, f, 4, s[36])),
                    (X = A(X, Z, G, nt, Y, 11, s[37])),
                    (nt = A(nt, X, Z, G, Q, 16, s[38])),
                    (G = A(G, nt, X, Z, st, 23, s[39])),
                    (Z = A(Z, G, nt, X, bt, 4, s[40])),
                    (X = A(X, Z, G, nt, U, 11, s[41])),
                    (nt = A(nt, X, Z, G, B, 16, s[42])),
                    (G = A(G, nt, X, Z, W, 23, s[43])),
                    (Z = A(Z, G, nt, X, ot, 4, s[44])),
                    (X = A(X, Z, G, nt, _t, 11, s[45])),
                    (nt = A(nt, X, Z, G, wt, 16, s[46])),
                    (G = A(G, nt, X, Z, y, 23, s[47])),
                    (Z = x(Z, G, nt, X, U, 6, s[48])),
                    (X = x(X, Z, G, nt, Q, 10, s[49])),
                    (nt = x(nt, X, Z, G, Bt, 15, s[50])),
                    (G = x(G, nt, X, Z, M, 21, s[51])),
                    (Z = x(Z, G, nt, X, _t, 6, s[52])),
                    (X = x(X, Z, G, nt, B, 10, s[53])),
                    (nt = x(nt, X, Z, G, st, 15, s[54])),
                    (G = x(G, nt, X, Z, f, 21, s[55])),
                    (Z = x(Z, G, nt, X, F, 6, s[56])),
                    (X = x(X, Z, G, nt, wt, 10, s[57])),
                    (nt = x(nt, X, Z, G, W, 15, s[58])),
                    (G = x(G, nt, X, Z, bt, 21, s[59])),
                    (Z = x(Z, G, nt, X, Y, 6, s[60])),
                    (X = x(X, Z, G, nt, ht, 10, s[61])),
                    (nt = x(nt, X, Z, G, y, 15, s[62])),
                    (G = x(G, nt, X, Z, ot, 21, s[63])),
                    (g[0] = (g[0] + Z) | 0),
                    (g[1] = (g[1] + G) | 0),
                    (g[2] = (g[2] + nt) | 0),
                    (g[3] = (g[3] + X) | 0);
                },
                _doFinalize: function () {
                  var E = this._data,
                    k = E.words,
                    N = this._nDataBytes * 8,
                    v = E.sigBytes * 8;
                  k[v >>> 5] |= 128 << (24 - (v % 32));
                  var b = u.floor(N / 4294967296),
                    g = N;
                  (k[(((v + 64) >>> 9) << 4) + 15] =
                    (((b << 8) | (b >>> 24)) & 16711935) |
                    (((b << 24) | (b >>> 8)) & 4278255360)),
                    (k[(((v + 64) >>> 9) << 4) + 14] =
                      (((g << 8) | (g >>> 24)) & 16711935) |
                      (((g << 24) | (g >>> 8)) & 4278255360)),
                    (E.sigBytes = (k.length + 1) * 4),
                    this._process();
                  for (var U = this._hash, f = U.words, y = 0; y < 4; y++) {
                    var B = f[y];
                    f[y] =
                      (((B << 8) | (B >>> 24)) & 16711935) |
                      (((B << 24) | (B >>> 8)) & 4278255360);
                  }
                  return U;
                },
                clone: function () {
                  var E = O.clone.call(this);
                  return (E._hash = this._hash.clone()), E;
                },
              }));
              function w(E, k, N, v, b, g, U) {
                var f = E + ((k & N) | (~k & v)) + b + U;
                return ((f << g) | (f >>> (32 - g))) + k;
              }
              function l(E, k, N, v, b, g, U) {
                var f = E + ((k & v) | (N & ~v)) + b + U;
                return ((f << g) | (f >>> (32 - g))) + k;
              }
              function A(E, k, N, v, b, g, U) {
                var f = E + (k ^ N ^ v) + b + U;
                return ((f << g) | (f >>> (32 - g))) + k;
              }
              function x(E, k, N, v, b, g, U) {
                var f = E + (N ^ (k | ~v)) + b + U;
                return ((f << g) | (f >>> (32 - g))) + k;
              }
              (P.MD5 = O._createHelper(h)),
                (P.HmacMD5 = O._createHmacHelper(h));
            })(Math),
            m.MD5
          );
        });
      })(Vr)),
    Vr.exports
  );
}
var Yr = { exports: {} },
  ru = Yr.exports,
  Ui;
function Ki() {
  return (
    Ui ||
      ((Ui = 1),
      (function (i, p) {
        (function (m, u) {
          i.exports = u(kt());
        })(ru, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.WordArray,
                H = P.Hasher,
                O = u.algo,
                _ = [],
                s = (O.SHA1 = H.extend({
                  _doReset: function () {
                    this._hash = new S.init([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (h, w) {
                    for (
                      var l = this._hash.words,
                        A = l[0],
                        x = l[1],
                        E = l[2],
                        k = l[3],
                        N = l[4],
                        v = 0;
                      v < 80;
                      v++
                    ) {
                      if (v < 16) _[v] = h[w + v] | 0;
                      else {
                        var b = _[v - 3] ^ _[v - 8] ^ _[v - 14] ^ _[v - 16];
                        _[v] = (b << 1) | (b >>> 31);
                      }
                      var g = ((A << 5) | (A >>> 27)) + N + _[v];
                      v < 20
                        ? (g += ((x & E) | (~x & k)) + 1518500249)
                        : v < 40
                          ? (g += (x ^ E ^ k) + 1859775393)
                          : v < 60
                            ? (g += ((x & E) | (x & k) | (E & k)) - 1894007588)
                            : (g += (x ^ E ^ k) - 899497514),
                        (N = k),
                        (k = E),
                        (E = (x << 30) | (x >>> 2)),
                        (x = A),
                        (A = g);
                    }
                    (l[0] = (l[0] + A) | 0),
                      (l[1] = (l[1] + x) | 0),
                      (l[2] = (l[2] + E) | 0),
                      (l[3] = (l[3] + k) | 0),
                      (l[4] = (l[4] + N) | 0);
                  },
                  _doFinalize: function () {
                    var h = this._data,
                      w = h.words,
                      l = this._nDataBytes * 8,
                      A = h.sigBytes * 8;
                    return (
                      (w[A >>> 5] |= 128 << (24 - (A % 32))),
                      (w[(((A + 64) >>> 9) << 4) + 14] = Math.floor(
                        l / 4294967296,
                      )),
                      (w[(((A + 64) >>> 9) << 4) + 15] = l),
                      (h.sigBytes = w.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var h = H.clone.call(this);
                    return (h._hash = this._hash.clone()), h;
                  },
                }));
              (u.SHA1 = H._createHelper(s)),
                (u.HmacSHA1 = H._createHmacHelper(s));
            })(),
            m.SHA1
          );
        });
      })(Yr)),
    Yr.exports
  );
}
var Qr = { exports: {} },
  ou = Qr.exports,
  Li;
function Zr() {
  return (
    Li ||
      ((Li = 1),
      (function (i, p) {
        (function (m, u) {
          i.exports = u(kt());
        })(ou, function (m) {
          return (
            (function (u) {
              var P = m,
                S = P.lib,
                H = S.WordArray,
                O = S.Hasher,
                _ = P.algo,
                s = [],
                h = [];
              (function () {
                function A(N) {
                  for (var v = u.sqrt(N), b = 2; b <= v; b++)
                    if (!(N % b)) return !1;
                  return !0;
                }
                function x(N) {
                  return ((N - (N | 0)) * 4294967296) | 0;
                }
                for (var E = 2, k = 0; k < 64; )
                  A(E) &&
                    (k < 8 && (s[k] = x(u.pow(E, 1 / 2))),
                    (h[k] = x(u.pow(E, 1 / 3))),
                    k++),
                    E++;
              })();
              var w = [],
                l = (_.SHA256 = O.extend({
                  _doReset: function () {
                    this._hash = new H.init(s.slice(0));
                  },
                  _doProcessBlock: function (A, x) {
                    for (
                      var E = this._hash.words,
                        k = E[0],
                        N = E[1],
                        v = E[2],
                        b = E[3],
                        g = E[4],
                        U = E[5],
                        f = E[6],
                        y = E[7],
                        B = 0;
                      B < 64;
                      B++
                    ) {
                      if (B < 16) w[B] = A[x + B] | 0;
                      else {
                        var Y = w[B - 15],
                          M =
                            ((Y << 25) | (Y >>> 7)) ^
                            ((Y << 14) | (Y >>> 18)) ^
                            (Y >>> 3),
                          W = w[B - 2],
                          Q =
                            ((W << 15) | (W >>> 17)) ^
                            ((W << 13) | (W >>> 19)) ^
                            (W >>> 10);
                        w[B] = M + w[B - 7] + Q + w[B - 16];
                      }
                      var F = (g & U) ^ (~g & f),
                        ot = (k & N) ^ (k & v) ^ (N & v),
                        st =
                          ((k << 30) | (k >>> 2)) ^
                          ((k << 19) | (k >>> 13)) ^
                          ((k << 10) | (k >>> 22)),
                        ht =
                          ((g << 26) | (g >>> 6)) ^
                          ((g << 21) | (g >>> 11)) ^
                          ((g << 7) | (g >>> 25)),
                        _t = y + ht + F + h[B] + w[B],
                        bt = st + ot;
                      (y = f),
                        (f = U),
                        (U = g),
                        (g = (b + _t) | 0),
                        (b = v),
                        (v = N),
                        (N = k),
                        (k = (_t + bt) | 0);
                    }
                    (E[0] = (E[0] + k) | 0),
                      (E[1] = (E[1] + N) | 0),
                      (E[2] = (E[2] + v) | 0),
                      (E[3] = (E[3] + b) | 0),
                      (E[4] = (E[4] + g) | 0),
                      (E[5] = (E[5] + U) | 0),
                      (E[6] = (E[6] + f) | 0),
                      (E[7] = (E[7] + y) | 0);
                  },
                  _doFinalize: function () {
                    var A = this._data,
                      x = A.words,
                      E = this._nDataBytes * 8,
                      k = A.sigBytes * 8;
                    return (
                      (x[k >>> 5] |= 128 << (24 - (k % 32))),
                      (x[(((k + 64) >>> 9) << 4) + 14] = u.floor(
                        E / 4294967296,
                      )),
                      (x[(((k + 64) >>> 9) << 4) + 15] = E),
                      (A.sigBytes = x.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var A = O.clone.call(this);
                    return (A._hash = this._hash.clone()), A;
                  },
                }));
              (P.SHA256 = O._createHelper(l)),
                (P.HmacSHA256 = O._createHmacHelper(l));
            })(Math),
            m.SHA256
          );
        });
      })(Qr)),
    Qr.exports
  );
}
var Xr = { exports: {} },
  iu = Xr.exports,
  Fi;
function au() {
  return (
    Fi ||
      ((Fi = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Zr());
        })(iu, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.WordArray,
                H = u.algo,
                O = H.SHA256,
                _ = (H.SHA224 = O.extend({
                  _doReset: function () {
                    this._hash = new S.init([
                      3238371032, 914150663, 812702999, 4144912697, 4290775857,
                      1750603025, 1694076839, 3204075428,
                    ]);
                  },
                  _doFinalize: function () {
                    var s = O._doFinalize.call(this);
                    return (s.sigBytes -= 4), s;
                  },
                }));
              (u.SHA224 = O._createHelper(_)),
                (u.HmacSHA224 = O._createHmacHelper(_));
            })(),
            m.SHA224
          );
        });
      })(Xr)),
    Xr.exports
  );
}
var Gr = { exports: {} },
  su = Gr.exports,
  qi;
function Hi() {
  return (
    qi ||
      ((qi = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Jn());
        })(su, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.Hasher,
                H = u.x64,
                O = H.Word,
                _ = H.WordArray,
                s = u.algo;
              function h() {
                return O.create.apply(O, arguments);
              }
              var w = [
                  h(1116352408, 3609767458),
                  h(1899447441, 602891725),
                  h(3049323471, 3964484399),
                  h(3921009573, 2173295548),
                  h(961987163, 4081628472),
                  h(1508970993, 3053834265),
                  h(2453635748, 2937671579),
                  h(2870763221, 3664609560),
                  h(3624381080, 2734883394),
                  h(310598401, 1164996542),
                  h(607225278, 1323610764),
                  h(1426881987, 3590304994),
                  h(1925078388, 4068182383),
                  h(2162078206, 991336113),
                  h(2614888103, 633803317),
                  h(3248222580, 3479774868),
                  h(3835390401, 2666613458),
                  h(4022224774, 944711139),
                  h(264347078, 2341262773),
                  h(604807628, 2007800933),
                  h(770255983, 1495990901),
                  h(1249150122, 1856431235),
                  h(1555081692, 3175218132),
                  h(1996064986, 2198950837),
                  h(2554220882, 3999719339),
                  h(2821834349, 766784016),
                  h(2952996808, 2566594879),
                  h(3210313671, 3203337956),
                  h(3336571891, 1034457026),
                  h(3584528711, 2466948901),
                  h(113926993, 3758326383),
                  h(338241895, 168717936),
                  h(666307205, 1188179964),
                  h(773529912, 1546045734),
                  h(1294757372, 1522805485),
                  h(1396182291, 2643833823),
                  h(1695183700, 2343527390),
                  h(1986661051, 1014477480),
                  h(2177026350, 1206759142),
                  h(2456956037, 344077627),
                  h(2730485921, 1290863460),
                  h(2820302411, 3158454273),
                  h(3259730800, 3505952657),
                  h(3345764771, 106217008),
                  h(3516065817, 3606008344),
                  h(3600352804, 1432725776),
                  h(4094571909, 1467031594),
                  h(275423344, 851169720),
                  h(430227734, 3100823752),
                  h(506948616, 1363258195),
                  h(659060556, 3750685593),
                  h(883997877, 3785050280),
                  h(958139571, 3318307427),
                  h(1322822218, 3812723403),
                  h(1537002063, 2003034995),
                  h(1747873779, 3602036899),
                  h(1955562222, 1575990012),
                  h(2024104815, 1125592928),
                  h(2227730452, 2716904306),
                  h(2361852424, 442776044),
                  h(2428436474, 593698344),
                  h(2756734187, 3733110249),
                  h(3204031479, 2999351573),
                  h(3329325298, 3815920427),
                  h(3391569614, 3928383900),
                  h(3515267271, 566280711),
                  h(3940187606, 3454069534),
                  h(4118630271, 4000239992),
                  h(116418474, 1914138554),
                  h(174292421, 2731055270),
                  h(289380356, 3203993006),
                  h(460393269, 320620315),
                  h(685471733, 587496836),
                  h(852142971, 1086792851),
                  h(1017036298, 365543100),
                  h(1126000580, 2618297676),
                  h(1288033470, 3409855158),
                  h(1501505948, 4234509866),
                  h(1607167915, 987167468),
                  h(1816402316, 1246189591),
                ],
                l = [];
              (function () {
                for (var x = 0; x < 80; x++) l[x] = h();
              })();
              var A = (s.SHA512 = S.extend({
                _doReset: function () {
                  this._hash = new _.init([
                    new O.init(1779033703, 4089235720),
                    new O.init(3144134277, 2227873595),
                    new O.init(1013904242, 4271175723),
                    new O.init(2773480762, 1595750129),
                    new O.init(1359893119, 2917565137),
                    new O.init(2600822924, 725511199),
                    new O.init(528734635, 4215389547),
                    new O.init(1541459225, 327033209),
                  ]);
                },
                _doProcessBlock: function (x, E) {
                  for (
                    var k = this._hash.words,
                      N = k[0],
                      v = k[1],
                      b = k[2],
                      g = k[3],
                      U = k[4],
                      f = k[5],
                      y = k[6],
                      B = k[7],
                      Y = N.high,
                      M = N.low,
                      W = v.high,
                      Q = v.low,
                      F = b.high,
                      ot = b.low,
                      st = g.high,
                      ht = g.low,
                      _t = U.high,
                      bt = U.low,
                      Bt = f.high,
                      wt = f.low,
                      Z = y.high,
                      G = y.low,
                      nt = B.high,
                      X = B.low,
                      Tt = Y,
                      Rt = M,
                      jt = W,
                      yt = Q,
                      Be = F,
                      ft = ot,
                      qe = st,
                      St = ht,
                      qt = _t,
                      Vt = bt,
                      ne = Bt,
                      Ee = wt,
                      He = Z,
                      Re = G,
                      nn = nt,
                      pe = X,
                      It = 0;
                    It < 80;
                    It++
                  ) {
                    var Yt,
                      Zt,
                      Te = l[It];
                    if (It < 16)
                      (Zt = Te.high = x[E + It * 2] | 0),
                        (Yt = Te.low = x[E + It * 2 + 1] | 0);
                    else {
                      var ye = l[It - 15],
                        Mt = ye.high,
                        Xt = ye.low,
                        rn =
                          ((Mt >>> 1) | (Xt << 31)) ^
                          ((Mt >>> 8) | (Xt << 24)) ^
                          (Mt >>> 7),
                        ve =
                          ((Xt >>> 1) | (Mt << 31)) ^
                          ((Xt >>> 8) | (Mt << 24)) ^
                          ((Xt >>> 7) | (Mt << 25)),
                        ze = l[It - 2],
                        ie = ze.high,
                        Gt = ze.low,
                        We =
                          ((ie >>> 19) | (Gt << 13)) ^
                          ((ie << 3) | (Gt >>> 29)) ^
                          (ie >>> 6),
                        $e =
                          ((Gt >>> 19) | (ie << 13)) ^
                          ((Gt << 3) | (ie >>> 29)) ^
                          ((Gt >>> 6) | (ie << 26)),
                        re = l[It - 7],
                        pt = re.high,
                        Ce = re.low,
                        ue = l[It - 16],
                        Ve = ue.high,
                        ut = ue.low;
                      (Yt = ve + Ce),
                        (Zt = rn + pt + (Yt >>> 0 < ve >>> 0 ? 1 : 0)),
                        (Yt = Yt + $e),
                        (Zt = Zt + We + (Yt >>> 0 < $e >>> 0 ? 1 : 0)),
                        (Yt = Yt + ut),
                        (Zt = Zt + Ve + (Yt >>> 0 < ut >>> 0 ? 1 : 0)),
                        (Te.high = Zt),
                        (Te.low = Yt);
                    }
                    var on = (qt & ne) ^ (~qt & He),
                      an = (Vt & Ee) ^ (~Vt & Re),
                      sn = (Tt & jt) ^ (Tt & Be) ^ (jt & Be),
                      An = (Rt & yt) ^ (Rt & ft) ^ (yt & ft),
                      un =
                        ((Tt >>> 28) | (Rt << 4)) ^
                        ((Tt << 30) | (Rt >>> 2)) ^
                        ((Tt << 25) | (Rt >>> 7)),
                      On =
                        ((Rt >>> 28) | (Tt << 4)) ^
                        ((Rt << 30) | (Tt >>> 2)) ^
                        ((Rt << 25) | (Tt >>> 7)),
                      er =
                        ((qt >>> 14) | (Vt << 18)) ^
                        ((qt >>> 18) | (Vt << 14)) ^
                        ((qt << 23) | (Vt >>> 9)),
                      be =
                        ((Vt >>> 14) | (qt << 18)) ^
                        ((Vt >>> 18) | (qt << 14)) ^
                        ((Vt << 23) | (qt >>> 9)),
                      de = w[It],
                      cn = de.high,
                      Pe = de.low,
                      xt = pe + be,
                      Ct = nn + er + (xt >>> 0 < pe >>> 0 ? 1 : 0),
                      xt = xt + an,
                      Ct = Ct + on + (xt >>> 0 < an >>> 0 ? 1 : 0),
                      xt = xt + Pe,
                      Ct = Ct + cn + (xt >>> 0 < Pe >>> 0 ? 1 : 0),
                      xt = xt + Yt,
                      Ct = Ct + Zt + (xt >>> 0 < Yt >>> 0 ? 1 : 0),
                      kn = On + An,
                      Ye = un + sn + (kn >>> 0 < On >>> 0 ? 1 : 0);
                    (nn = He),
                      (pe = Re),
                      (He = ne),
                      (Re = Ee),
                      (ne = qt),
                      (Ee = Vt),
                      (Vt = (St + xt) | 0),
                      (qt = (qe + Ct + (Vt >>> 0 < St >>> 0 ? 1 : 0)) | 0),
                      (qe = Be),
                      (St = ft),
                      (Be = jt),
                      (ft = yt),
                      (jt = Tt),
                      (yt = Rt),
                      (Rt = (xt + kn) | 0),
                      (Tt = (Ct + Ye + (Rt >>> 0 < xt >>> 0 ? 1 : 0)) | 0);
                  }
                  (M = N.low = M + Rt),
                    (N.high = Y + Tt + (M >>> 0 < Rt >>> 0 ? 1 : 0)),
                    (Q = v.low = Q + yt),
                    (v.high = W + jt + (Q >>> 0 < yt >>> 0 ? 1 : 0)),
                    (ot = b.low = ot + ft),
                    (b.high = F + Be + (ot >>> 0 < ft >>> 0 ? 1 : 0)),
                    (ht = g.low = ht + St),
                    (g.high = st + qe + (ht >>> 0 < St >>> 0 ? 1 : 0)),
                    (bt = U.low = bt + Vt),
                    (U.high = _t + qt + (bt >>> 0 < Vt >>> 0 ? 1 : 0)),
                    (wt = f.low = wt + Ee),
                    (f.high = Bt + ne + (wt >>> 0 < Ee >>> 0 ? 1 : 0)),
                    (G = y.low = G + Re),
                    (y.high = Z + He + (G >>> 0 < Re >>> 0 ? 1 : 0)),
                    (X = B.low = X + pe),
                    (B.high = nt + nn + (X >>> 0 < pe >>> 0 ? 1 : 0));
                },
                _doFinalize: function () {
                  var x = this._data,
                    E = x.words,
                    k = this._nDataBytes * 8,
                    N = x.sigBytes * 8;
                  (E[N >>> 5] |= 128 << (24 - (N % 32))),
                    (E[(((N + 128) >>> 10) << 5) + 30] = Math.floor(
                      k / 4294967296,
                    )),
                    (E[(((N + 128) >>> 10) << 5) + 31] = k),
                    (x.sigBytes = E.length * 4),
                    this._process();
                  var v = this._hash.toX32();
                  return v;
                },
                clone: function () {
                  var x = S.clone.call(this);
                  return (x._hash = this._hash.clone()), x;
                },
                blockSize: 1024 / 32,
              }));
              (u.SHA512 = S._createHelper(A)),
                (u.HmacSHA512 = S._createHmacHelper(A));
            })(),
            m.SHA512
          );
        });
      })(Gr)),
    Gr.exports
  );
}
var Jr = { exports: {} },
  uu = Jr.exports,
  zi;
function cu() {
  return (
    zi ||
      ((zi = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Jn(), Hi());
        })(uu, function (m) {
          return (
            (function () {
              var u = m,
                P = u.x64,
                S = P.Word,
                H = P.WordArray,
                O = u.algo,
                _ = O.SHA512,
                s = (O.SHA384 = _.extend({
                  _doReset: function () {
                    this._hash = new H.init([
                      new S.init(3418070365, 3238371032),
                      new S.init(1654270250, 914150663),
                      new S.init(2438529370, 812702999),
                      new S.init(355462360, 4144912697),
                      new S.init(1731405415, 4290775857),
                      new S.init(2394180231, 1750603025),
                      new S.init(3675008525, 1694076839),
                      new S.init(1203062813, 3204075428),
                    ]);
                  },
                  _doFinalize: function () {
                    var h = _._doFinalize.call(this);
                    return (h.sigBytes -= 16), h;
                  },
                }));
              (u.SHA384 = _._createHelper(s)),
                (u.HmacSHA384 = _._createHmacHelper(s));
            })(),
            m.SHA384
          );
        });
      })(Jr)),
    Jr.exports
  );
}
var to = { exports: {} },
  lu = to.exports,
  Wi;
function fu() {
  return (
    Wi ||
      ((Wi = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Jn());
        })(lu, function (m) {
          return (
            (function (u) {
              var P = m,
                S = P.lib,
                H = S.WordArray,
                O = S.Hasher,
                _ = P.x64,
                s = _.Word,
                h = P.algo,
                w = [],
                l = [],
                A = [];
              (function () {
                for (var k = 1, N = 0, v = 0; v < 24; v++) {
                  w[k + 5 * N] = (((v + 1) * (v + 2)) / 2) % 64;
                  var b = N % 5,
                    g = (2 * k + 3 * N) % 5;
                  (k = b), (N = g);
                }
                for (var k = 0; k < 5; k++)
                  for (var N = 0; N < 5; N++)
                    l[k + 5 * N] = N + ((2 * k + 3 * N) % 5) * 5;
                for (var U = 1, f = 0; f < 24; f++) {
                  for (var y = 0, B = 0, Y = 0; Y < 7; Y++) {
                    if (U & 1) {
                      var M = (1 << Y) - 1;
                      M < 32 ? (B ^= 1 << M) : (y ^= 1 << (M - 32));
                    }
                    U & 128 ? (U = (U << 1) ^ 113) : (U <<= 1);
                  }
                  A[f] = s.create(y, B);
                }
              })();
              var x = [];
              (function () {
                for (var k = 0; k < 25; k++) x[k] = s.create();
              })();
              var E = (h.SHA3 = O.extend({
                cfg: O.cfg.extend({ outputLength: 512 }),
                _doReset: function () {
                  for (var k = (this._state = []), N = 0; N < 25; N++)
                    k[N] = new s.init();
                  this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                },
                _doProcessBlock: function (k, N) {
                  for (
                    var v = this._state, b = this.blockSize / 2, g = 0;
                    g < b;
                    g++
                  ) {
                    var U = k[N + 2 * g],
                      f = k[N + 2 * g + 1];
                    (U =
                      (((U << 8) | (U >>> 24)) & 16711935) |
                      (((U << 24) | (U >>> 8)) & 4278255360)),
                      (f =
                        (((f << 8) | (f >>> 24)) & 16711935) |
                        (((f << 24) | (f >>> 8)) & 4278255360));
                    var y = v[g];
                    (y.high ^= f), (y.low ^= U);
                  }
                  for (var B = 0; B < 24; B++) {
                    for (var Y = 0; Y < 5; Y++) {
                      for (var M = 0, W = 0, Q = 0; Q < 5; Q++) {
                        var y = v[Y + 5 * Q];
                        (M ^= y.high), (W ^= y.low);
                      }
                      var F = x[Y];
                      (F.high = M), (F.low = W);
                    }
                    for (var Y = 0; Y < 5; Y++)
                      for (
                        var ot = x[(Y + 4) % 5],
                          st = x[(Y + 1) % 5],
                          ht = st.high,
                          _t = st.low,
                          M = ot.high ^ ((ht << 1) | (_t >>> 31)),
                          W = ot.low ^ ((_t << 1) | (ht >>> 31)),
                          Q = 0;
                        Q < 5;
                        Q++
                      ) {
                        var y = v[Y + 5 * Q];
                        (y.high ^= M), (y.low ^= W);
                      }
                    for (var bt = 1; bt < 25; bt++) {
                      var M,
                        W,
                        y = v[bt],
                        Bt = y.high,
                        wt = y.low,
                        Z = w[bt];
                      Z < 32
                        ? ((M = (Bt << Z) | (wt >>> (32 - Z))),
                          (W = (wt << Z) | (Bt >>> (32 - Z))))
                        : ((M = (wt << (Z - 32)) | (Bt >>> (64 - Z))),
                          (W = (Bt << (Z - 32)) | (wt >>> (64 - Z))));
                      var G = x[l[bt]];
                      (G.high = M), (G.low = W);
                    }
                    var nt = x[0],
                      X = v[0];
                    (nt.high = X.high), (nt.low = X.low);
                    for (var Y = 0; Y < 5; Y++)
                      for (var Q = 0; Q < 5; Q++) {
                        var bt = Y + 5 * Q,
                          y = v[bt],
                          Tt = x[bt],
                          Rt = x[((Y + 1) % 5) + 5 * Q],
                          jt = x[((Y + 2) % 5) + 5 * Q];
                        (y.high = Tt.high ^ (~Rt.high & jt.high)),
                          (y.low = Tt.low ^ (~Rt.low & jt.low));
                      }
                    var y = v[0],
                      yt = A[B];
                    (y.high ^= yt.high), (y.low ^= yt.low);
                  }
                },
                _doFinalize: function () {
                  var k = this._data,
                    N = k.words;
                  this._nDataBytes * 8;
                  var v = k.sigBytes * 8,
                    b = this.blockSize * 32;
                  (N[v >>> 5] |= 1 << (24 - (v % 32))),
                    (N[((u.ceil((v + 1) / b) * b) >>> 5) - 1] |= 128),
                    (k.sigBytes = N.length * 4),
                    this._process();
                  for (
                    var g = this._state,
                      U = this.cfg.outputLength / 8,
                      f = U / 8,
                      y = [],
                      B = 0;
                    B < f;
                    B++
                  ) {
                    var Y = g[B],
                      M = Y.high,
                      W = Y.low;
                    (M =
                      (((M << 8) | (M >>> 24)) & 16711935) |
                      (((M << 24) | (M >>> 8)) & 4278255360)),
                      (W =
                        (((W << 8) | (W >>> 24)) & 16711935) |
                        (((W << 24) | (W >>> 8)) & 4278255360)),
                      y.push(W),
                      y.push(M);
                  }
                  return new H.init(y, U);
                },
                clone: function () {
                  for (
                    var k = O.clone.call(this),
                      N = (k._state = this._state.slice(0)),
                      v = 0;
                    v < 25;
                    v++
                  )
                    N[v] = N[v].clone();
                  return k;
                },
              }));
              (P.SHA3 = O._createHelper(E)),
                (P.HmacSHA3 = O._createHmacHelper(E));
            })(Math),
            m.SHA3
          );
        });
      })(to)),
    to.exports
  );
}
var eo = { exports: {} },
  hu = eo.exports,
  $i;
function pu() {
  return (
    $i ||
      (($i = 1),
      (function (i, p) {
        (function (m, u) {
          i.exports = u(kt());
        })(hu, function (m) {
          return (
            (function (u) {
              var P = m,
                S = P.lib,
                H = S.WordArray,
                O = S.Hasher,
                _ = P.algo,
                s = H.create([
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4,
                  13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4,
                  9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8,
                  12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10,
                  14, 1, 3, 8, 11, 6, 15, 13,
                ]),
                h = H.create([
                  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11,
                  3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7,
                  14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15,
                  0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6,
                  2, 13, 14, 0, 3, 9, 11,
                ]),
                w = H.create([
                  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6,
                  8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6,
                  7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15,
                  14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8,
                  13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                ]),
                l = H.create([
                  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13,
                  15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11,
                  8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14,
                  14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14,
                  6, 8, 13, 6, 5, 15, 13, 11, 11,
                ]),
                A = H.create([
                  0, 1518500249, 1859775393, 2400959708, 2840853838,
                ]),
                x = H.create([
                  1352829926, 1548603684, 1836072691, 2053994217, 0,
                ]),
                E = (_.RIPEMD160 = O.extend({
                  _doReset: function () {
                    this._hash = H.create([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (f, y) {
                    for (var B = 0; B < 16; B++) {
                      var Y = y + B,
                        M = f[Y];
                      f[Y] =
                        (((M << 8) | (M >>> 24)) & 16711935) |
                        (((M << 24) | (M >>> 8)) & 4278255360);
                    }
                    var W = this._hash.words,
                      Q = A.words,
                      F = x.words,
                      ot = s.words,
                      st = h.words,
                      ht = w.words,
                      _t = l.words,
                      bt,
                      Bt,
                      wt,
                      Z,
                      G,
                      nt,
                      X,
                      Tt,
                      Rt,
                      jt;
                    (nt = bt = W[0]),
                      (X = Bt = W[1]),
                      (Tt = wt = W[2]),
                      (Rt = Z = W[3]),
                      (jt = G = W[4]);
                    for (var yt, B = 0; B < 80; B += 1)
                      (yt = (bt + f[y + ot[B]]) | 0),
                        B < 16
                          ? (yt += k(Bt, wt, Z) + Q[0])
                          : B < 32
                            ? (yt += N(Bt, wt, Z) + Q[1])
                            : B < 48
                              ? (yt += v(Bt, wt, Z) + Q[2])
                              : B < 64
                                ? (yt += b(Bt, wt, Z) + Q[3])
                                : (yt += g(Bt, wt, Z) + Q[4]),
                        (yt = yt | 0),
                        (yt = U(yt, ht[B])),
                        (yt = (yt + G) | 0),
                        (bt = G),
                        (G = Z),
                        (Z = U(wt, 10)),
                        (wt = Bt),
                        (Bt = yt),
                        (yt = (nt + f[y + st[B]]) | 0),
                        B < 16
                          ? (yt += g(X, Tt, Rt) + F[0])
                          : B < 32
                            ? (yt += b(X, Tt, Rt) + F[1])
                            : B < 48
                              ? (yt += v(X, Tt, Rt) + F[2])
                              : B < 64
                                ? (yt += N(X, Tt, Rt) + F[3])
                                : (yt += k(X, Tt, Rt) + F[4]),
                        (yt = yt | 0),
                        (yt = U(yt, _t[B])),
                        (yt = (yt + jt) | 0),
                        (nt = jt),
                        (jt = Rt),
                        (Rt = U(Tt, 10)),
                        (Tt = X),
                        (X = yt);
                    (yt = (W[1] + wt + Rt) | 0),
                      (W[1] = (W[2] + Z + jt) | 0),
                      (W[2] = (W[3] + G + nt) | 0),
                      (W[3] = (W[4] + bt + X) | 0),
                      (W[4] = (W[0] + Bt + Tt) | 0),
                      (W[0] = yt);
                  },
                  _doFinalize: function () {
                    var f = this._data,
                      y = f.words,
                      B = this._nDataBytes * 8,
                      Y = f.sigBytes * 8;
                    (y[Y >>> 5] |= 128 << (24 - (Y % 32))),
                      (y[(((Y + 64) >>> 9) << 4) + 14] =
                        (((B << 8) | (B >>> 24)) & 16711935) |
                        (((B << 24) | (B >>> 8)) & 4278255360)),
                      (f.sigBytes = (y.length + 1) * 4),
                      this._process();
                    for (var M = this._hash, W = M.words, Q = 0; Q < 5; Q++) {
                      var F = W[Q];
                      W[Q] =
                        (((F << 8) | (F >>> 24)) & 16711935) |
                        (((F << 24) | (F >>> 8)) & 4278255360);
                    }
                    return M;
                  },
                  clone: function () {
                    var f = O.clone.call(this);
                    return (f._hash = this._hash.clone()), f;
                  },
                }));
              function k(f, y, B) {
                return f ^ y ^ B;
              }
              function N(f, y, B) {
                return (f & y) | (~f & B);
              }
              function v(f, y, B) {
                return (f | ~y) ^ B;
              }
              function b(f, y, B) {
                return (f & B) | (y & ~B);
              }
              function g(f, y, B) {
                return f ^ (y | ~B);
              }
              function U(f, y) {
                return (f << y) | (f >>> (32 - y));
              }
              (P.RIPEMD160 = O._createHelper(E)),
                (P.HmacRIPEMD160 = O._createHmacHelper(E));
            })(),
            m.RIPEMD160
          );
        });
      })(eo)),
    eo.exports
  );
}
var no = { exports: {} },
  du = no.exports,
  Vi;
function ro() {
  return (
    Vi ||
      ((Vi = 1),
      (function (i, p) {
        (function (m, u) {
          i.exports = u(kt());
        })(du, function (m) {
          (function () {
            var u = m,
              P = u.lib,
              S = P.Base,
              H = u.enc,
              O = H.Utf8,
              _ = u.algo;
            _.HMAC = S.extend({
              init: function (s, h) {
                (s = this._hasher = new s.init()),
                  typeof h == "string" && (h = O.parse(h));
                var w = s.blockSize,
                  l = w * 4;
                h.sigBytes > l && (h = s.finalize(h)), h.clamp();
                for (
                  var A = (this._oKey = h.clone()),
                    x = (this._iKey = h.clone()),
                    E = A.words,
                    k = x.words,
                    N = 0;
                  N < w;
                  N++
                )
                  (E[N] ^= 1549556828), (k[N] ^= 909522486);
                (A.sigBytes = x.sigBytes = l), this.reset();
              },
              reset: function () {
                var s = this._hasher;
                s.reset(), s.update(this._iKey);
              },
              update: function (s) {
                return this._hasher.update(s), this;
              },
              finalize: function (s) {
                var h = this._hasher,
                  w = h.finalize(s);
                h.reset();
                var l = h.finalize(this._oKey.clone().concat(w));
                return l;
              },
            });
          })();
        });
      })(no)),
    no.exports
  );
}
var oo = { exports: {} },
  mu = oo.exports,
  Yi;
function gu() {
  return (
    Yi ||
      ((Yi = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Zr(), ro());
        })(mu, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.Base,
                H = P.WordArray,
                O = u.algo,
                _ = O.SHA256,
                s = O.HMAC,
                h = (O.PBKDF2 = S.extend({
                  cfg: S.extend({
                    keySize: 128 / 32,
                    hasher: _,
                    iterations: 25e4,
                  }),
                  init: function (w) {
                    this.cfg = this.cfg.extend(w);
                  },
                  compute: function (w, l) {
                    for (
                      var A = this.cfg,
                        x = s.create(A.hasher, w),
                        E = H.create(),
                        k = H.create([1]),
                        N = E.words,
                        v = k.words,
                        b = A.keySize,
                        g = A.iterations;
                      N.length < b;

                    ) {
                      var U = x.update(l).finalize(k);
                      x.reset();
                      for (
                        var f = U.words, y = f.length, B = U, Y = 1;
                        Y < g;
                        Y++
                      ) {
                        (B = x.finalize(B)), x.reset();
                        for (var M = B.words, W = 0; W < y; W++) f[W] ^= M[W];
                      }
                      E.concat(U), v[0]++;
                    }
                    return (E.sigBytes = b * 4), E;
                  },
                }));
              u.PBKDF2 = function (w, l, A) {
                return h.create(A).compute(w, l);
              };
            })(),
            m.PBKDF2
          );
        });
      })(oo)),
    oo.exports
  );
}
var io = { exports: {} },
  yu = io.exports,
  Qi;
function Se() {
  return (
    Qi ||
      ((Qi = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Ki(), ro());
        })(yu, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.Base,
                H = P.WordArray,
                O = u.algo,
                _ = O.MD5,
                s = (O.EvpKDF = S.extend({
                  cfg: S.extend({
                    keySize: 128 / 32,
                    hasher: _,
                    iterations: 1,
                  }),
                  init: function (h) {
                    this.cfg = this.cfg.extend(h);
                  },
                  compute: function (h, w) {
                    for (
                      var l,
                        A = this.cfg,
                        x = A.hasher.create(),
                        E = H.create(),
                        k = E.words,
                        N = A.keySize,
                        v = A.iterations;
                      k.length < N;

                    ) {
                      l && x.update(l),
                        (l = x.update(h).finalize(w)),
                        x.reset();
                      for (var b = 1; b < v; b++)
                        (l = x.finalize(l)), x.reset();
                      E.concat(l);
                    }
                    return (E.sigBytes = N * 4), E;
                  },
                }));
              u.EvpKDF = function (h, w, l) {
                return s.create(l).compute(h, w);
              };
            })(),
            m.EvpKDF
          );
        });
      })(io)),
    io.exports
  );
}
var ao = { exports: {} },
  vu = ao.exports,
  Zi;
function Ft() {
  return (
    Zi ||
      ((Zi = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Se());
        })(vu, function (m) {
          m.lib.Cipher ||
            (function (u) {
              var P = m,
                S = P.lib,
                H = S.Base,
                O = S.WordArray,
                _ = S.BufferedBlockAlgorithm,
                s = P.enc;
              s.Utf8;
              var h = s.Base64,
                w = P.algo,
                l = w.EvpKDF,
                A = (S.Cipher = _.extend({
                  cfg: H.extend(),
                  createEncryptor: function (M, W) {
                    return this.create(this._ENC_XFORM_MODE, M, W);
                  },
                  createDecryptor: function (M, W) {
                    return this.create(this._DEC_XFORM_MODE, M, W);
                  },
                  init: function (M, W, Q) {
                    (this.cfg = this.cfg.extend(Q)),
                      (this._xformMode = M),
                      (this._key = W),
                      this.reset();
                  },
                  reset: function () {
                    _.reset.call(this), this._doReset();
                  },
                  process: function (M) {
                    return this._append(M), this._process();
                  },
                  finalize: function (M) {
                    M && this._append(M);
                    var W = this._doFinalize();
                    return W;
                  },
                  keySize: 128 / 32,
                  ivSize: 128 / 32,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: (function () {
                    function M(W) {
                      return typeof W == "string" ? Y : f;
                    }
                    return function (W) {
                      return {
                        encrypt: function (Q, F, ot) {
                          return M(F).encrypt(W, Q, F, ot);
                        },
                        decrypt: function (Q, F, ot) {
                          return M(F).decrypt(W, Q, F, ot);
                        },
                      };
                    };
                  })(),
                }));
              S.StreamCipher = A.extend({
                _doFinalize: function () {
                  var M = this._process(!0);
                  return M;
                },
                blockSize: 1,
              });
              var x = (P.mode = {}),
                E = (S.BlockCipherMode = H.extend({
                  createEncryptor: function (M, W) {
                    return this.Encryptor.create(M, W);
                  },
                  createDecryptor: function (M, W) {
                    return this.Decryptor.create(M, W);
                  },
                  init: function (M, W) {
                    (this._cipher = M), (this._iv = W);
                  },
                })),
                k = (x.CBC = (function () {
                  var M = E.extend();
                  (M.Encryptor = M.extend({
                    processBlock: function (Q, F) {
                      var ot = this._cipher,
                        st = ot.blockSize;
                      W.call(this, Q, F, st),
                        ot.encryptBlock(Q, F),
                        (this._prevBlock = Q.slice(F, F + st));
                    },
                  })),
                    (M.Decryptor = M.extend({
                      processBlock: function (Q, F) {
                        var ot = this._cipher,
                          st = ot.blockSize,
                          ht = Q.slice(F, F + st);
                        ot.decryptBlock(Q, F),
                          W.call(this, Q, F, st),
                          (this._prevBlock = ht);
                      },
                    }));
                  function W(Q, F, ot) {
                    var st,
                      ht = this._iv;
                    ht ? ((st = ht), (this._iv = u)) : (st = this._prevBlock);
                    for (var _t = 0; _t < ot; _t++) Q[F + _t] ^= st[_t];
                  }
                  return M;
                })()),
                N = (P.pad = {}),
                v = (N.Pkcs7 = {
                  pad: function (M, W) {
                    for (
                      var Q = W * 4,
                        F = Q - (M.sigBytes % Q),
                        ot = (F << 24) | (F << 16) | (F << 8) | F,
                        st = [],
                        ht = 0;
                      ht < F;
                      ht += 4
                    )
                      st.push(ot);
                    var _t = O.create(st, F);
                    M.concat(_t);
                  },
                  unpad: function (M) {
                    var W = M.words[(M.sigBytes - 1) >>> 2] & 255;
                    M.sigBytes -= W;
                  },
                });
              S.BlockCipher = A.extend({
                cfg: A.cfg.extend({ mode: k, padding: v }),
                reset: function () {
                  var M;
                  A.reset.call(this);
                  var W = this.cfg,
                    Q = W.iv,
                    F = W.mode;
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (M = F.createEncryptor)
                    : ((M = F.createDecryptor), (this._minBufferSize = 1)),
                    this._mode && this._mode.__creator == M
                      ? this._mode.init(this, Q && Q.words)
                      : ((this._mode = M.call(F, this, Q && Q.words)),
                        (this._mode.__creator = M));
                },
                _doProcessBlock: function (M, W) {
                  this._mode.processBlock(M, W);
                },
                _doFinalize: function () {
                  var M,
                    W = this.cfg.padding;
                  return (
                    this._xformMode == this._ENC_XFORM_MODE
                      ? (W.pad(this._data, this.blockSize),
                        (M = this._process(!0)))
                      : ((M = this._process(!0)), W.unpad(M)),
                    M
                  );
                },
                blockSize: 128 / 32,
              });
              var b = (S.CipherParams = H.extend({
                  init: function (M) {
                    this.mixIn(M);
                  },
                  toString: function (M) {
                    return (M || this.formatter).stringify(this);
                  },
                })),
                g = (P.format = {}),
                U = (g.OpenSSL = {
                  stringify: function (M) {
                    var W,
                      Q = M.ciphertext,
                      F = M.salt;
                    return (
                      F
                        ? (W = O.create([1398893684, 1701076831])
                            .concat(F)
                            .concat(Q))
                        : (W = Q),
                      W.toString(h)
                    );
                  },
                  parse: function (M) {
                    var W,
                      Q = h.parse(M),
                      F = Q.words;
                    return (
                      F[0] == 1398893684 &&
                        F[1] == 1701076831 &&
                        ((W = O.create(F.slice(2, 4))),
                        F.splice(0, 4),
                        (Q.sigBytes -= 16)),
                      b.create({ ciphertext: Q, salt: W })
                    );
                  },
                }),
                f = (S.SerializableCipher = H.extend({
                  cfg: H.extend({ format: U }),
                  encrypt: function (M, W, Q, F) {
                    F = this.cfg.extend(F);
                    var ot = M.createEncryptor(Q, F),
                      st = ot.finalize(W),
                      ht = ot.cfg;
                    return b.create({
                      ciphertext: st,
                      key: Q,
                      iv: ht.iv,
                      algorithm: M,
                      mode: ht.mode,
                      padding: ht.padding,
                      blockSize: M.blockSize,
                      formatter: F.format,
                    });
                  },
                  decrypt: function (M, W, Q, F) {
                    (F = this.cfg.extend(F)), (W = this._parse(W, F.format));
                    var ot = M.createDecryptor(Q, F).finalize(W.ciphertext);
                    return ot;
                  },
                  _parse: function (M, W) {
                    return typeof M == "string" ? W.parse(M, this) : M;
                  },
                })),
                y = (P.kdf = {}),
                B = (y.OpenSSL = {
                  execute: function (M, W, Q, F, ot) {
                    if ((F || (F = O.random(64 / 8)), ot))
                      var st = l
                        .create({ keySize: W + Q, hasher: ot })
                        .compute(M, F);
                    else var st = l.create({ keySize: W + Q }).compute(M, F);
                    var ht = O.create(st.words.slice(W), Q * 4);
                    return (
                      (st.sigBytes = W * 4),
                      b.create({ key: st, iv: ht, salt: F })
                    );
                  },
                }),
                Y = (S.PasswordBasedCipher = f.extend({
                  cfg: f.cfg.extend({ kdf: B }),
                  encrypt: function (M, W, Q, F) {
                    F = this.cfg.extend(F);
                    var ot = F.kdf.execute(
                      Q,
                      M.keySize,
                      M.ivSize,
                      F.salt,
                      F.hasher,
                    );
                    F.iv = ot.iv;
                    var st = f.encrypt.call(this, M, W, ot.key, F);
                    return st.mixIn(ot), st;
                  },
                  decrypt: function (M, W, Q, F) {
                    (F = this.cfg.extend(F)), (W = this._parse(W, F.format));
                    var ot = F.kdf.execute(
                      Q,
                      M.keySize,
                      M.ivSize,
                      W.salt,
                      F.hasher,
                    );
                    F.iv = ot.iv;
                    var st = f.decrypt.call(this, M, W, ot.key, F);
                    return st;
                  },
                }));
            })();
        });
      })(ao)),
    ao.exports
  );
}
var so = { exports: {} },
  bu = so.exports,
  Xi;
function _u() {
  return (
    Xi ||
      ((Xi = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Ft());
        })(bu, function (m) {
          return (
            (m.mode.CFB = (function () {
              var u = m.lib.BlockCipherMode.extend();
              (u.Encryptor = u.extend({
                processBlock: function (S, H) {
                  var O = this._cipher,
                    _ = O.blockSize;
                  P.call(this, S, H, _, O),
                    (this._prevBlock = S.slice(H, H + _));
                },
              })),
                (u.Decryptor = u.extend({
                  processBlock: function (S, H) {
                    var O = this._cipher,
                      _ = O.blockSize,
                      s = S.slice(H, H + _);
                    P.call(this, S, H, _, O), (this._prevBlock = s);
                  },
                }));
              function P(S, H, O, _) {
                var s,
                  h = this._iv;
                h
                  ? ((s = h.slice(0)), (this._iv = void 0))
                  : (s = this._prevBlock),
                  _.encryptBlock(s, 0);
                for (var w = 0; w < O; w++) S[H + w] ^= s[w];
              }
              return u;
            })()),
            m.mode.CFB
          );
        });
      })(so)),
    so.exports
  );
}
var uo = { exports: {} },
  wu = uo.exports,
  Gi;
function xu() {
  return (
    Gi ||
      ((Gi = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Ft());
        })(wu, function (m) {
          return (
            (m.mode.CTR = (function () {
              var u = m.lib.BlockCipherMode.extend(),
                P = (u.Encryptor = u.extend({
                  processBlock: function (S, H) {
                    var O = this._cipher,
                      _ = O.blockSize,
                      s = this._iv,
                      h = this._counter;
                    s &&
                      ((h = this._counter = s.slice(0)), (this._iv = void 0));
                    var w = h.slice(0);
                    O.encryptBlock(w, 0), (h[_ - 1] = (h[_ - 1] + 1) | 0);
                    for (var l = 0; l < _; l++) S[H + l] ^= w[l];
                  },
                }));
              return (u.Decryptor = P), u;
            })()),
            m.mode.CTR
          );
        });
      })(uo)),
    uo.exports
  );
}
var co = { exports: {} },
  Au = co.exports,
  Ji;
function Ou() {
  return (
    Ji ||
      ((Ji = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Ft());
        })(Au, function (m) {
          return (
            (m.mode.CTRGladman = (function () {
              var u = m.lib.BlockCipherMode.extend();
              function P(O) {
                if (((O >> 24) & 255) === 255) {
                  var _ = (O >> 16) & 255,
                    s = (O >> 8) & 255,
                    h = O & 255;
                  _ === 255
                    ? ((_ = 0),
                      s === 255 ? ((s = 0), h === 255 ? (h = 0) : ++h) : ++s)
                    : ++_,
                    (O = 0),
                    (O += _ << 16),
                    (O += s << 8),
                    (O += h);
                } else O += 1 << 24;
                return O;
              }
              function S(O) {
                return (O[0] = P(O[0])) === 0 && (O[1] = P(O[1])), O;
              }
              var H = (u.Encryptor = u.extend({
                processBlock: function (O, _) {
                  var s = this._cipher,
                    h = s.blockSize,
                    w = this._iv,
                    l = this._counter;
                  w && ((l = this._counter = w.slice(0)), (this._iv = void 0)),
                    S(l);
                  var A = l.slice(0);
                  s.encryptBlock(A, 0);
                  for (var x = 0; x < h; x++) O[_ + x] ^= A[x];
                },
              }));
              return (u.Decryptor = H), u;
            })()),
            m.mode.CTRGladman
          );
        });
      })(co)),
    co.exports
  );
}
var lo = { exports: {} },
  ku = lo.exports,
  ta;
function Su() {
  return (
    ta ||
      ((ta = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Ft());
        })(ku, function (m) {
          return (
            (m.mode.OFB = (function () {
              var u = m.lib.BlockCipherMode.extend(),
                P = (u.Encryptor = u.extend({
                  processBlock: function (S, H) {
                    var O = this._cipher,
                      _ = O.blockSize,
                      s = this._iv,
                      h = this._keystream;
                    s &&
                      ((h = this._keystream = s.slice(0)), (this._iv = void 0)),
                      O.encryptBlock(h, 0);
                    for (var w = 0; w < _; w++) S[H + w] ^= h[w];
                  },
                }));
              return (u.Decryptor = P), u;
            })()),
            m.mode.OFB
          );
        });
      })(lo)),
    lo.exports
  );
}
var fo = { exports: {} },
  Bu = fo.exports,
  ea;
function Eu() {
  return (
    ea ||
      ((ea = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Ft());
        })(Bu, function (m) {
          return (
            (m.mode.ECB = (function () {
              var u = m.lib.BlockCipherMode.extend();
              return (
                (u.Encryptor = u.extend({
                  processBlock: function (P, S) {
                    this._cipher.encryptBlock(P, S);
                  },
                })),
                (u.Decryptor = u.extend({
                  processBlock: function (P, S) {
                    this._cipher.decryptBlock(P, S);
                  },
                })),
                u
              );
            })()),
            m.mode.ECB
          );
        });
      })(fo)),
    fo.exports
  );
}
var ho = { exports: {} },
  Ru = ho.exports,
  na;
function Tu() {
  return (
    na ||
      ((na = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Ft());
        })(Ru, function (m) {
          return (
            (m.pad.AnsiX923 = {
              pad: function (u, P) {
                var S = u.sigBytes,
                  H = P * 4,
                  O = H - (S % H),
                  _ = S + O - 1;
                u.clamp(),
                  (u.words[_ >>> 2] |= O << (24 - (_ % 4) * 8)),
                  (u.sigBytes += O);
              },
              unpad: function (u) {
                var P = u.words[(u.sigBytes - 1) >>> 2] & 255;
                u.sigBytes -= P;
              },
            }),
            m.pad.Ansix923
          );
        });
      })(ho)),
    ho.exports
  );
}
var po = { exports: {} },
  Cu = po.exports,
  ra;
function Pu() {
  return (
    ra ||
      ((ra = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Ft());
        })(Cu, function (m) {
          return (
            (m.pad.Iso10126 = {
              pad: function (u, P) {
                var S = P * 4,
                  H = S - (u.sigBytes % S);
                u.concat(m.lib.WordArray.random(H - 1)).concat(
                  m.lib.WordArray.create([H << 24], 1),
                );
              },
              unpad: function (u) {
                var P = u.words[(u.sigBytes - 1) >>> 2] & 255;
                u.sigBytes -= P;
              },
            }),
            m.pad.Iso10126
          );
        });
      })(po)),
    po.exports
  );
}
var mo = { exports: {} },
  Iu = mo.exports,
  oa;
function ju() {
  return (
    oa ||
      ((oa = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Ft());
        })(Iu, function (m) {
          return (
            (m.pad.Iso97971 = {
              pad: function (u, P) {
                u.concat(m.lib.WordArray.create([2147483648], 1)),
                  m.pad.ZeroPadding.pad(u, P);
              },
              unpad: function (u) {
                m.pad.ZeroPadding.unpad(u), u.sigBytes--;
              },
            }),
            m.pad.Iso97971
          );
        });
      })(mo)),
    mo.exports
  );
}
var go = { exports: {} },
  Du = go.exports,
  ia;
function Nu() {
  return (
    ia ||
      ((ia = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Ft());
        })(Du, function (m) {
          return (
            (m.pad.ZeroPadding = {
              pad: function (u, P) {
                var S = P * 4;
                u.clamp(), (u.sigBytes += S - (u.sigBytes % S || S));
              },
              unpad: function (u) {
                for (
                  var P = u.words, S = u.sigBytes - 1, S = u.sigBytes - 1;
                  S >= 0;
                  S--
                )
                  if ((P[S >>> 2] >>> (24 - (S % 4) * 8)) & 255) {
                    u.sigBytes = S + 1;
                    break;
                  }
              },
            }),
            m.pad.ZeroPadding
          );
        });
      })(go)),
    go.exports
  );
}
var yo = { exports: {} },
  Mu = yo.exports,
  aa;
function Uu() {
  return (
    aa ||
      ((aa = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Ft());
        })(Mu, function (m) {
          return (
            (m.pad.NoPadding = { pad: function () {}, unpad: function () {} }),
            m.pad.NoPadding
          );
        });
      })(yo)),
    yo.exports
  );
}
var vo = { exports: {} },
  Ku = vo.exports,
  sa;
function Lu() {
  return (
    sa ||
      ((sa = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Ft());
        })(Ku, function (m) {
          return (
            (function (u) {
              var P = m,
                S = P.lib,
                H = S.CipherParams,
                O = P.enc,
                _ = O.Hex,
                s = P.format;
              s.Hex = {
                stringify: function (h) {
                  return h.ciphertext.toString(_);
                },
                parse: function (h) {
                  var w = _.parse(h);
                  return H.create({ ciphertext: w });
                },
              };
            })(),
            m.format.Hex
          );
        });
      })(vo)),
    vo.exports
  );
}
var bo = { exports: {} },
  Fu = bo.exports,
  ua;
function qu() {
  return (
    ua ||
      ((ua = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Le(), Fe(), Se(), Ft());
        })(Fu, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.BlockCipher,
                H = u.algo,
                O = [],
                _ = [],
                s = [],
                h = [],
                w = [],
                l = [],
                A = [],
                x = [],
                E = [],
                k = [];
              (function () {
                for (var b = [], g = 0; g < 256; g++)
                  g < 128 ? (b[g] = g << 1) : (b[g] = (g << 1) ^ 283);
                for (var U = 0, f = 0, g = 0; g < 256; g++) {
                  var y = f ^ (f << 1) ^ (f << 2) ^ (f << 3) ^ (f << 4);
                  (y = (y >>> 8) ^ (y & 255) ^ 99), (O[U] = y), (_[y] = U);
                  var B = b[U],
                    Y = b[B],
                    M = b[Y],
                    W = (b[y] * 257) ^ (y * 16843008);
                  (s[U] = (W << 24) | (W >>> 8)),
                    (h[U] = (W << 16) | (W >>> 16)),
                    (w[U] = (W << 8) | (W >>> 24)),
                    (l[U] = W);
                  var W =
                    (M * 16843009) ^ (Y * 65537) ^ (B * 257) ^ (U * 16843008);
                  (A[y] = (W << 24) | (W >>> 8)),
                    (x[y] = (W << 16) | (W >>> 16)),
                    (E[y] = (W << 8) | (W >>> 24)),
                    (k[y] = W),
                    U
                      ? ((U = B ^ b[b[b[M ^ B]]]), (f ^= b[b[f]]))
                      : (U = f = 1);
                }
              })();
              var N = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                v = (H.AES = S.extend({
                  _doReset: function () {
                    var b;
                    if (!(this._nRounds && this._keyPriorReset === this._key)) {
                      for (
                        var g = (this._keyPriorReset = this._key),
                          U = g.words,
                          f = g.sigBytes / 4,
                          y = (this._nRounds = f + 6),
                          B = (y + 1) * 4,
                          Y = (this._keySchedule = []),
                          M = 0;
                        M < B;
                        M++
                      )
                        M < f
                          ? (Y[M] = U[M])
                          : ((b = Y[M - 1]),
                            M % f
                              ? f > 6 &&
                                M % f == 4 &&
                                (b =
                                  (O[b >>> 24] << 24) |
                                  (O[(b >>> 16) & 255] << 16) |
                                  (O[(b >>> 8) & 255] << 8) |
                                  O[b & 255])
                              : ((b = (b << 8) | (b >>> 24)),
                                (b =
                                  (O[b >>> 24] << 24) |
                                  (O[(b >>> 16) & 255] << 16) |
                                  (O[(b >>> 8) & 255] << 8) |
                                  O[b & 255]),
                                (b ^= N[(M / f) | 0] << 24)),
                            (Y[M] = Y[M - f] ^ b));
                      for (
                        var W = (this._invKeySchedule = []), Q = 0;
                        Q < B;
                        Q++
                      ) {
                        var M = B - Q;
                        if (Q % 4) var b = Y[M];
                        else var b = Y[M - 4];
                        Q < 4 || M <= 4
                          ? (W[Q] = b)
                          : (W[Q] =
                              A[O[b >>> 24]] ^
                              x[O[(b >>> 16) & 255]] ^
                              E[O[(b >>> 8) & 255]] ^
                              k[O[b & 255]]);
                      }
                    }
                  },
                  encryptBlock: function (b, g) {
                    this._doCryptBlock(b, g, this._keySchedule, s, h, w, l, O);
                  },
                  decryptBlock: function (b, g) {
                    var U = b[g + 1];
                    (b[g + 1] = b[g + 3]),
                      (b[g + 3] = U),
                      this._doCryptBlock(
                        b,
                        g,
                        this._invKeySchedule,
                        A,
                        x,
                        E,
                        k,
                        _,
                      );
                    var U = b[g + 1];
                    (b[g + 1] = b[g + 3]), (b[g + 3] = U);
                  },
                  _doCryptBlock: function (b, g, U, f, y, B, Y, M) {
                    for (
                      var W = this._nRounds,
                        Q = b[g] ^ U[0],
                        F = b[g + 1] ^ U[1],
                        ot = b[g + 2] ^ U[2],
                        st = b[g + 3] ^ U[3],
                        ht = 4,
                        _t = 1;
                      _t < W;
                      _t++
                    ) {
                      var bt =
                          f[Q >>> 24] ^
                          y[(F >>> 16) & 255] ^
                          B[(ot >>> 8) & 255] ^
                          Y[st & 255] ^
                          U[ht++],
                        Bt =
                          f[F >>> 24] ^
                          y[(ot >>> 16) & 255] ^
                          B[(st >>> 8) & 255] ^
                          Y[Q & 255] ^
                          U[ht++],
                        wt =
                          f[ot >>> 24] ^
                          y[(st >>> 16) & 255] ^
                          B[(Q >>> 8) & 255] ^
                          Y[F & 255] ^
                          U[ht++],
                        Z =
                          f[st >>> 24] ^
                          y[(Q >>> 16) & 255] ^
                          B[(F >>> 8) & 255] ^
                          Y[ot & 255] ^
                          U[ht++];
                      (Q = bt), (F = Bt), (ot = wt), (st = Z);
                    }
                    var bt =
                        ((M[Q >>> 24] << 24) |
                          (M[(F >>> 16) & 255] << 16) |
                          (M[(ot >>> 8) & 255] << 8) |
                          M[st & 255]) ^
                        U[ht++],
                      Bt =
                        ((M[F >>> 24] << 24) |
                          (M[(ot >>> 16) & 255] << 16) |
                          (M[(st >>> 8) & 255] << 8) |
                          M[Q & 255]) ^
                        U[ht++],
                      wt =
                        ((M[ot >>> 24] << 24) |
                          (M[(st >>> 16) & 255] << 16) |
                          (M[(Q >>> 8) & 255] << 8) |
                          M[F & 255]) ^
                        U[ht++],
                      Z =
                        ((M[st >>> 24] << 24) |
                          (M[(Q >>> 16) & 255] << 16) |
                          (M[(F >>> 8) & 255] << 8) |
                          M[ot & 255]) ^
                        U[ht++];
                    (b[g] = bt),
                      (b[g + 1] = Bt),
                      (b[g + 2] = wt),
                      (b[g + 3] = Z);
                  },
                  keySize: 256 / 32,
                }));
              u.AES = S._createHelper(v);
            })(),
            m.AES
          );
        });
      })(bo)),
    bo.exports
  );
}
var _o = { exports: {} },
  Hu = _o.exports,
  ca;
function zu() {
  return (
    ca ||
      ((ca = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Le(), Fe(), Se(), Ft());
        })(Hu, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.WordArray,
                H = P.BlockCipher,
                O = u.algo,
                _ = [
                  57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2,
                  59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39,
                  31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37,
                  29, 21, 13, 5, 28, 20, 12, 4,
                ],
                s = [
                  14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26,
                  8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51,
                  45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
                ],
                h = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                w = [
                  {
                    0: 8421888,
                    268435456: 32768,
                    536870912: 8421378,
                    805306368: 2,
                    1073741824: 512,
                    1342177280: 8421890,
                    1610612736: 8389122,
                    1879048192: 8388608,
                    2147483648: 514,
                    2415919104: 8389120,
                    2684354560: 33280,
                    2952790016: 8421376,
                    3221225472: 32770,
                    3489660928: 8388610,
                    3758096384: 0,
                    4026531840: 33282,
                    134217728: 0,
                    402653184: 8421890,
                    671088640: 33282,
                    939524096: 32768,
                    1207959552: 8421888,
                    1476395008: 512,
                    1744830464: 8421378,
                    2013265920: 2,
                    2281701376: 8389120,
                    2550136832: 33280,
                    2818572288: 8421376,
                    3087007744: 8389122,
                    3355443200: 8388610,
                    3623878656: 32770,
                    3892314112: 514,
                    4160749568: 8388608,
                    1: 32768,
                    268435457: 2,
                    536870913: 8421888,
                    805306369: 8388608,
                    1073741825: 8421378,
                    1342177281: 33280,
                    1610612737: 512,
                    1879048193: 8389122,
                    2147483649: 8421890,
                    2415919105: 8421376,
                    2684354561: 8388610,
                    2952790017: 33282,
                    3221225473: 514,
                    3489660929: 8389120,
                    3758096385: 32770,
                    4026531841: 0,
                    134217729: 8421890,
                    402653185: 8421376,
                    671088641: 8388608,
                    939524097: 512,
                    1207959553: 32768,
                    1476395009: 8388610,
                    1744830465: 2,
                    2013265921: 33282,
                    2281701377: 32770,
                    2550136833: 8389122,
                    2818572289: 514,
                    3087007745: 8421888,
                    3355443201: 8389120,
                    3623878657: 0,
                    3892314113: 33280,
                    4160749569: 8421378,
                  },
                  {
                    0: 1074282512,
                    16777216: 16384,
                    33554432: 524288,
                    50331648: 1074266128,
                    67108864: 1073741840,
                    83886080: 1074282496,
                    100663296: 1073758208,
                    117440512: 16,
                    134217728: 540672,
                    150994944: 1073758224,
                    167772160: 1073741824,
                    184549376: 540688,
                    201326592: 524304,
                    218103808: 0,
                    234881024: 16400,
                    251658240: 1074266112,
                    8388608: 1073758208,
                    25165824: 540688,
                    41943040: 16,
                    58720256: 1073758224,
                    75497472: 1074282512,
                    92274688: 1073741824,
                    109051904: 524288,
                    125829120: 1074266128,
                    142606336: 524304,
                    159383552: 0,
                    176160768: 16384,
                    192937984: 1074266112,
                    209715200: 1073741840,
                    226492416: 540672,
                    243269632: 1074282496,
                    260046848: 16400,
                    268435456: 0,
                    285212672: 1074266128,
                    301989888: 1073758224,
                    318767104: 1074282496,
                    335544320: 1074266112,
                    352321536: 16,
                    369098752: 540688,
                    385875968: 16384,
                    402653184: 16400,
                    419430400: 524288,
                    436207616: 524304,
                    452984832: 1073741840,
                    469762048: 540672,
                    486539264: 1073758208,
                    503316480: 1073741824,
                    520093696: 1074282512,
                    276824064: 540688,
                    293601280: 524288,
                    310378496: 1074266112,
                    327155712: 16384,
                    343932928: 1073758208,
                    360710144: 1074282512,
                    377487360: 16,
                    394264576: 1073741824,
                    411041792: 1074282496,
                    427819008: 1073741840,
                    444596224: 1073758224,
                    461373440: 524304,
                    478150656: 0,
                    494927872: 16400,
                    511705088: 1074266128,
                    528482304: 540672,
                  },
                  {
                    0: 260,
                    1048576: 0,
                    2097152: 67109120,
                    3145728: 65796,
                    4194304: 65540,
                    5242880: 67108868,
                    6291456: 67174660,
                    7340032: 67174400,
                    8388608: 67108864,
                    9437184: 67174656,
                    10485760: 65792,
                    11534336: 67174404,
                    12582912: 67109124,
                    13631488: 65536,
                    14680064: 4,
                    15728640: 256,
                    524288: 67174656,
                    1572864: 67174404,
                    2621440: 0,
                    3670016: 67109120,
                    4718592: 67108868,
                    5767168: 65536,
                    6815744: 65540,
                    7864320: 260,
                    8912896: 4,
                    9961472: 256,
                    11010048: 67174400,
                    12058624: 65796,
                    13107200: 65792,
                    14155776: 67109124,
                    15204352: 67174660,
                    16252928: 67108864,
                    16777216: 67174656,
                    17825792: 65540,
                    18874368: 65536,
                    19922944: 67109120,
                    20971520: 256,
                    22020096: 67174660,
                    23068672: 67108868,
                    24117248: 0,
                    25165824: 67109124,
                    26214400: 67108864,
                    27262976: 4,
                    28311552: 65792,
                    29360128: 67174400,
                    30408704: 260,
                    31457280: 65796,
                    32505856: 67174404,
                    17301504: 67108864,
                    18350080: 260,
                    19398656: 67174656,
                    20447232: 0,
                    21495808: 65540,
                    22544384: 67109120,
                    23592960: 256,
                    24641536: 67174404,
                    25690112: 65536,
                    26738688: 67174660,
                    27787264: 65796,
                    28835840: 67108868,
                    29884416: 67109124,
                    30932992: 67174400,
                    31981568: 4,
                    33030144: 65792,
                  },
                  {
                    0: 2151682048,
                    65536: 2147487808,
                    131072: 4198464,
                    196608: 2151677952,
                    262144: 0,
                    327680: 4198400,
                    393216: 2147483712,
                    458752: 4194368,
                    524288: 2147483648,
                    589824: 4194304,
                    655360: 64,
                    720896: 2147487744,
                    786432: 2151678016,
                    851968: 4160,
                    917504: 4096,
                    983040: 2151682112,
                    32768: 2147487808,
                    98304: 64,
                    163840: 2151678016,
                    229376: 2147487744,
                    294912: 4198400,
                    360448: 2151682112,
                    425984: 0,
                    491520: 2151677952,
                    557056: 4096,
                    622592: 2151682048,
                    688128: 4194304,
                    753664: 4160,
                    819200: 2147483648,
                    884736: 4194368,
                    950272: 4198464,
                    1015808: 2147483712,
                    1048576: 4194368,
                    1114112: 4198400,
                    1179648: 2147483712,
                    1245184: 0,
                    1310720: 4160,
                    1376256: 2151678016,
                    1441792: 2151682048,
                    1507328: 2147487808,
                    1572864: 2151682112,
                    1638400: 2147483648,
                    1703936: 2151677952,
                    1769472: 4198464,
                    1835008: 2147487744,
                    1900544: 4194304,
                    1966080: 64,
                    2031616: 4096,
                    1081344: 2151677952,
                    1146880: 2151682112,
                    1212416: 0,
                    1277952: 4198400,
                    1343488: 4194368,
                    1409024: 2147483648,
                    1474560: 2147487808,
                    1540096: 64,
                    1605632: 2147483712,
                    1671168: 4096,
                    1736704: 2147487744,
                    1802240: 2151678016,
                    1867776: 4160,
                    1933312: 2151682048,
                    1998848: 4194304,
                    2064384: 4198464,
                  },
                  {
                    0: 128,
                    4096: 17039360,
                    8192: 262144,
                    12288: 536870912,
                    16384: 537133184,
                    20480: 16777344,
                    24576: 553648256,
                    28672: 262272,
                    32768: 16777216,
                    36864: 537133056,
                    40960: 536871040,
                    45056: 553910400,
                    49152: 553910272,
                    53248: 0,
                    57344: 17039488,
                    61440: 553648128,
                    2048: 17039488,
                    6144: 553648256,
                    10240: 128,
                    14336: 17039360,
                    18432: 262144,
                    22528: 537133184,
                    26624: 553910272,
                    30720: 536870912,
                    34816: 537133056,
                    38912: 0,
                    43008: 553910400,
                    47104: 16777344,
                    51200: 536871040,
                    55296: 553648128,
                    59392: 16777216,
                    63488: 262272,
                    65536: 262144,
                    69632: 128,
                    73728: 536870912,
                    77824: 553648256,
                    81920: 16777344,
                    86016: 553910272,
                    90112: 537133184,
                    94208: 16777216,
                    98304: 553910400,
                    102400: 553648128,
                    106496: 17039360,
                    110592: 537133056,
                    114688: 262272,
                    118784: 536871040,
                    122880: 0,
                    126976: 17039488,
                    67584: 553648256,
                    71680: 16777216,
                    75776: 17039360,
                    79872: 537133184,
                    83968: 536870912,
                    88064: 17039488,
                    92160: 128,
                    96256: 553910272,
                    100352: 262272,
                    104448: 553910400,
                    108544: 0,
                    112640: 553648128,
                    116736: 16777344,
                    120832: 262144,
                    124928: 537133056,
                    129024: 536871040,
                  },
                  {
                    0: 268435464,
                    256: 8192,
                    512: 270532608,
                    768: 270540808,
                    1024: 268443648,
                    1280: 2097152,
                    1536: 2097160,
                    1792: 268435456,
                    2048: 0,
                    2304: 268443656,
                    2560: 2105344,
                    2816: 8,
                    3072: 270532616,
                    3328: 2105352,
                    3584: 8200,
                    3840: 270540800,
                    128: 270532608,
                    384: 270540808,
                    640: 8,
                    896: 2097152,
                    1152: 2105352,
                    1408: 268435464,
                    1664: 268443648,
                    1920: 8200,
                    2176: 2097160,
                    2432: 8192,
                    2688: 268443656,
                    2944: 270532616,
                    3200: 0,
                    3456: 270540800,
                    3712: 2105344,
                    3968: 268435456,
                    4096: 268443648,
                    4352: 270532616,
                    4608: 270540808,
                    4864: 8200,
                    5120: 2097152,
                    5376: 268435456,
                    5632: 268435464,
                    5888: 2105344,
                    6144: 2105352,
                    6400: 0,
                    6656: 8,
                    6912: 270532608,
                    7168: 8192,
                    7424: 268443656,
                    7680: 270540800,
                    7936: 2097160,
                    4224: 8,
                    4480: 2105344,
                    4736: 2097152,
                    4992: 268435464,
                    5248: 268443648,
                    5504: 8200,
                    5760: 270540808,
                    6016: 270532608,
                    6272: 270540800,
                    6528: 270532616,
                    6784: 8192,
                    7040: 2105352,
                    7296: 2097160,
                    7552: 0,
                    7808: 268435456,
                    8064: 268443656,
                  },
                  {
                    0: 1048576,
                    16: 33555457,
                    32: 1024,
                    48: 1049601,
                    64: 34604033,
                    80: 0,
                    96: 1,
                    112: 34603009,
                    128: 33555456,
                    144: 1048577,
                    160: 33554433,
                    176: 34604032,
                    192: 34603008,
                    208: 1025,
                    224: 1049600,
                    240: 33554432,
                    8: 34603009,
                    24: 0,
                    40: 33555457,
                    56: 34604032,
                    72: 1048576,
                    88: 33554433,
                    104: 33554432,
                    120: 1025,
                    136: 1049601,
                    152: 33555456,
                    168: 34603008,
                    184: 1048577,
                    200: 1024,
                    216: 34604033,
                    232: 1,
                    248: 1049600,
                    256: 33554432,
                    272: 1048576,
                    288: 33555457,
                    304: 34603009,
                    320: 1048577,
                    336: 33555456,
                    352: 34604032,
                    368: 1049601,
                    384: 1025,
                    400: 34604033,
                    416: 1049600,
                    432: 1,
                    448: 0,
                    464: 34603008,
                    480: 33554433,
                    496: 1024,
                    264: 1049600,
                    280: 33555457,
                    296: 34603009,
                    312: 1,
                    328: 33554432,
                    344: 1048576,
                    360: 1025,
                    376: 34604032,
                    392: 33554433,
                    408: 34603008,
                    424: 0,
                    440: 34604033,
                    456: 1049601,
                    472: 1024,
                    488: 33555456,
                    504: 1048577,
                  },
                  {
                    0: 134219808,
                    1: 131072,
                    2: 134217728,
                    3: 32,
                    4: 131104,
                    5: 134350880,
                    6: 134350848,
                    7: 2048,
                    8: 134348800,
                    9: 134219776,
                    10: 133120,
                    11: 134348832,
                    12: 2080,
                    13: 0,
                    14: 134217760,
                    15: 133152,
                    2147483648: 2048,
                    2147483649: 134350880,
                    2147483650: 134219808,
                    2147483651: 134217728,
                    2147483652: 134348800,
                    2147483653: 133120,
                    2147483654: 133152,
                    2147483655: 32,
                    2147483656: 134217760,
                    2147483657: 2080,
                    2147483658: 131104,
                    2147483659: 134350848,
                    2147483660: 0,
                    2147483661: 134348832,
                    2147483662: 134219776,
                    2147483663: 131072,
                    16: 133152,
                    17: 134350848,
                    18: 32,
                    19: 2048,
                    20: 134219776,
                    21: 134217760,
                    22: 134348832,
                    23: 131072,
                    24: 0,
                    25: 131104,
                    26: 134348800,
                    27: 134219808,
                    28: 134350880,
                    29: 133120,
                    30: 2080,
                    31: 134217728,
                    2147483664: 131072,
                    2147483665: 2048,
                    2147483666: 134348832,
                    2147483667: 133152,
                    2147483668: 32,
                    2147483669: 134348800,
                    2147483670: 134217728,
                    2147483671: 134219808,
                    2147483672: 134350880,
                    2147483673: 134217760,
                    2147483674: 134219776,
                    2147483675: 0,
                    2147483676: 133120,
                    2147483677: 2080,
                    2147483678: 131104,
                    2147483679: 134350848,
                  },
                ],
                l = [
                  4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
                  2147483679,
                ],
                A = (O.DES = H.extend({
                  _doReset: function () {
                    for (
                      var N = this._key, v = N.words, b = [], g = 0;
                      g < 56;
                      g++
                    ) {
                      var U = _[g] - 1;
                      b[g] = (v[U >>> 5] >>> (31 - (U % 32))) & 1;
                    }
                    for (var f = (this._subKeys = []), y = 0; y < 16; y++) {
                      for (var B = (f[y] = []), Y = h[y], g = 0; g < 24; g++)
                        (B[(g / 6) | 0] |=
                          b[(s[g] - 1 + Y) % 28] << (31 - (g % 6))),
                          (B[4 + ((g / 6) | 0)] |=
                            b[28 + ((s[g + 24] - 1 + Y) % 28)] <<
                            (31 - (g % 6)));
                      B[0] = (B[0] << 1) | (B[0] >>> 31);
                      for (var g = 1; g < 7; g++)
                        B[g] = B[g] >>> ((g - 1) * 4 + 3);
                      B[7] = (B[7] << 5) | (B[7] >>> 27);
                    }
                    for (var M = (this._invSubKeys = []), g = 0; g < 16; g++)
                      M[g] = f[15 - g];
                  },
                  encryptBlock: function (N, v) {
                    this._doCryptBlock(N, v, this._subKeys);
                  },
                  decryptBlock: function (N, v) {
                    this._doCryptBlock(N, v, this._invSubKeys);
                  },
                  _doCryptBlock: function (N, v, b) {
                    (this._lBlock = N[v]),
                      (this._rBlock = N[v + 1]),
                      x.call(this, 4, 252645135),
                      x.call(this, 16, 65535),
                      E.call(this, 2, 858993459),
                      E.call(this, 8, 16711935),
                      x.call(this, 1, 1431655765);
                    for (var g = 0; g < 16; g++) {
                      for (
                        var U = b[g],
                          f = this._lBlock,
                          y = this._rBlock,
                          B = 0,
                          Y = 0;
                        Y < 8;
                        Y++
                      )
                        B |= w[Y][((y ^ U[Y]) & l[Y]) >>> 0];
                      (this._lBlock = y), (this._rBlock = f ^ B);
                    }
                    var M = this._lBlock;
                    (this._lBlock = this._rBlock),
                      (this._rBlock = M),
                      x.call(this, 1, 1431655765),
                      E.call(this, 8, 16711935),
                      E.call(this, 2, 858993459),
                      x.call(this, 16, 65535),
                      x.call(this, 4, 252645135),
                      (N[v] = this._lBlock),
                      (N[v + 1] = this._rBlock);
                  },
                  keySize: 64 / 32,
                  ivSize: 64 / 32,
                  blockSize: 64 / 32,
                }));
              function x(N, v) {
                var b = ((this._lBlock >>> N) ^ this._rBlock) & v;
                (this._rBlock ^= b), (this._lBlock ^= b << N);
              }
              function E(N, v) {
                var b = ((this._rBlock >>> N) ^ this._lBlock) & v;
                (this._lBlock ^= b), (this._rBlock ^= b << N);
              }
              u.DES = H._createHelper(A);
              var k = (O.TripleDES = H.extend({
                _doReset: function () {
                  var N = this._key,
                    v = N.words;
                  if (v.length !== 2 && v.length !== 4 && v.length < 6)
                    throw new Error(
                      "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.",
                    );
                  var b = v.slice(0, 2),
                    g = v.length < 4 ? v.slice(0, 2) : v.slice(2, 4),
                    U = v.length < 6 ? v.slice(0, 2) : v.slice(4, 6);
                  (this._des1 = A.createEncryptor(S.create(b))),
                    (this._des2 = A.createEncryptor(S.create(g))),
                    (this._des3 = A.createEncryptor(S.create(U)));
                },
                encryptBlock: function (N, v) {
                  this._des1.encryptBlock(N, v),
                    this._des2.decryptBlock(N, v),
                    this._des3.encryptBlock(N, v);
                },
                decryptBlock: function (N, v) {
                  this._des3.decryptBlock(N, v),
                    this._des2.encryptBlock(N, v),
                    this._des1.decryptBlock(N, v);
                },
                keySize: 192 / 32,
                ivSize: 64 / 32,
                blockSize: 64 / 32,
              }));
              u.TripleDES = H._createHelper(k);
            })(),
            m.TripleDES
          );
        });
      })(_o)),
    _o.exports
  );
}
var wo = { exports: {} },
  Wu = wo.exports,
  la;
function $u() {
  return (
    la ||
      ((la = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Le(), Fe(), Se(), Ft());
        })(Wu, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.StreamCipher,
                H = u.algo,
                O = (H.RC4 = S.extend({
                  _doReset: function () {
                    for (
                      var h = this._key,
                        w = h.words,
                        l = h.sigBytes,
                        A = (this._S = []),
                        x = 0;
                      x < 256;
                      x++
                    )
                      A[x] = x;
                    for (var x = 0, E = 0; x < 256; x++) {
                      var k = x % l,
                        N = (w[k >>> 2] >>> (24 - (k % 4) * 8)) & 255;
                      E = (E + A[x] + N) % 256;
                      var v = A[x];
                      (A[x] = A[E]), (A[E] = v);
                    }
                    this._i = this._j = 0;
                  },
                  _doProcessBlock: function (h, w) {
                    h[w] ^= _.call(this);
                  },
                  keySize: 256 / 32,
                  ivSize: 0,
                }));
              function _() {
                for (
                  var h = this._S, w = this._i, l = this._j, A = 0, x = 0;
                  x < 4;
                  x++
                ) {
                  (w = (w + 1) % 256), (l = (l + h[w]) % 256);
                  var E = h[w];
                  (h[w] = h[l]),
                    (h[l] = E),
                    (A |= h[(h[w] + h[l]) % 256] << (24 - x * 8));
                }
                return (this._i = w), (this._j = l), A;
              }
              u.RC4 = S._createHelper(O);
              var s = (H.RC4Drop = O.extend({
                cfg: O.cfg.extend({ drop: 192 }),
                _doReset: function () {
                  O._doReset.call(this);
                  for (var h = this.cfg.drop; h > 0; h--) _.call(this);
                },
              }));
              u.RC4Drop = S._createHelper(s);
            })(),
            m.RC4
          );
        });
      })(wo)),
    wo.exports
  );
}
var xo = { exports: {} },
  Vu = xo.exports,
  fa;
function Yu() {
  return (
    fa ||
      ((fa = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Le(), Fe(), Se(), Ft());
        })(Vu, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.StreamCipher,
                H = u.algo,
                O = [],
                _ = [],
                s = [],
                h = (H.Rabbit = S.extend({
                  _doReset: function () {
                    for (
                      var l = this._key.words, A = this.cfg.iv, x = 0;
                      x < 4;
                      x++
                    )
                      l[x] =
                        (((l[x] << 8) | (l[x] >>> 24)) & 16711935) |
                        (((l[x] << 24) | (l[x] >>> 8)) & 4278255360);
                    var E = (this._X = [
                        l[0],
                        (l[3] << 16) | (l[2] >>> 16),
                        l[1],
                        (l[0] << 16) | (l[3] >>> 16),
                        l[2],
                        (l[1] << 16) | (l[0] >>> 16),
                        l[3],
                        (l[2] << 16) | (l[1] >>> 16),
                      ]),
                      k = (this._C = [
                        (l[2] << 16) | (l[2] >>> 16),
                        (l[0] & 4294901760) | (l[1] & 65535),
                        (l[3] << 16) | (l[3] >>> 16),
                        (l[1] & 4294901760) | (l[2] & 65535),
                        (l[0] << 16) | (l[0] >>> 16),
                        (l[2] & 4294901760) | (l[3] & 65535),
                        (l[1] << 16) | (l[1] >>> 16),
                        (l[3] & 4294901760) | (l[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var x = 0; x < 4; x++) w.call(this);
                    for (var x = 0; x < 8; x++) k[x] ^= E[(x + 4) & 7];
                    if (A) {
                      var N = A.words,
                        v = N[0],
                        b = N[1],
                        g =
                          (((v << 8) | (v >>> 24)) & 16711935) |
                          (((v << 24) | (v >>> 8)) & 4278255360),
                        U =
                          (((b << 8) | (b >>> 24)) & 16711935) |
                          (((b << 24) | (b >>> 8)) & 4278255360),
                        f = (g >>> 16) | (U & 4294901760),
                        y = (U << 16) | (g & 65535);
                      (k[0] ^= g),
                        (k[1] ^= f),
                        (k[2] ^= U),
                        (k[3] ^= y),
                        (k[4] ^= g),
                        (k[5] ^= f),
                        (k[6] ^= U),
                        (k[7] ^= y);
                      for (var x = 0; x < 4; x++) w.call(this);
                    }
                  },
                  _doProcessBlock: function (l, A) {
                    var x = this._X;
                    w.call(this),
                      (O[0] = x[0] ^ (x[5] >>> 16) ^ (x[3] << 16)),
                      (O[1] = x[2] ^ (x[7] >>> 16) ^ (x[5] << 16)),
                      (O[2] = x[4] ^ (x[1] >>> 16) ^ (x[7] << 16)),
                      (O[3] = x[6] ^ (x[3] >>> 16) ^ (x[1] << 16));
                    for (var E = 0; E < 4; E++)
                      (O[E] =
                        (((O[E] << 8) | (O[E] >>> 24)) & 16711935) |
                        (((O[E] << 24) | (O[E] >>> 8)) & 4278255360)),
                        (l[A + E] ^= O[E]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function w() {
                for (var l = this._X, A = this._C, x = 0; x < 8; x++)
                  _[x] = A[x];
                (A[0] = (A[0] + 1295307597 + this._b) | 0),
                  (A[1] =
                    (A[1] + 3545052371 + (A[0] >>> 0 < _[0] >>> 0 ? 1 : 0)) |
                    0),
                  (A[2] =
                    (A[2] + 886263092 + (A[1] >>> 0 < _[1] >>> 0 ? 1 : 0)) | 0),
                  (A[3] =
                    (A[3] + 1295307597 + (A[2] >>> 0 < _[2] >>> 0 ? 1 : 0)) |
                    0),
                  (A[4] =
                    (A[4] + 3545052371 + (A[3] >>> 0 < _[3] >>> 0 ? 1 : 0)) |
                    0),
                  (A[5] =
                    (A[5] + 886263092 + (A[4] >>> 0 < _[4] >>> 0 ? 1 : 0)) | 0),
                  (A[6] =
                    (A[6] + 1295307597 + (A[5] >>> 0 < _[5] >>> 0 ? 1 : 0)) |
                    0),
                  (A[7] =
                    (A[7] + 3545052371 + (A[6] >>> 0 < _[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = A[7] >>> 0 < _[7] >>> 0 ? 1 : 0);
                for (var x = 0; x < 8; x++) {
                  var E = l[x] + A[x],
                    k = E & 65535,
                    N = E >>> 16,
                    v = ((((k * k) >>> 17) + k * N) >>> 15) + N * N,
                    b = (((E & 4294901760) * E) | 0) + (((E & 65535) * E) | 0);
                  s[x] = v ^ b;
                }
                (l[0] =
                  (s[0] +
                    ((s[7] << 16) | (s[7] >>> 16)) +
                    ((s[6] << 16) | (s[6] >>> 16))) |
                  0),
                  (l[1] = (s[1] + ((s[0] << 8) | (s[0] >>> 24)) + s[7]) | 0),
                  (l[2] =
                    (s[2] +
                      ((s[1] << 16) | (s[1] >>> 16)) +
                      ((s[0] << 16) | (s[0] >>> 16))) |
                    0),
                  (l[3] = (s[3] + ((s[2] << 8) | (s[2] >>> 24)) + s[1]) | 0),
                  (l[4] =
                    (s[4] +
                      ((s[3] << 16) | (s[3] >>> 16)) +
                      ((s[2] << 16) | (s[2] >>> 16))) |
                    0),
                  (l[5] = (s[5] + ((s[4] << 8) | (s[4] >>> 24)) + s[3]) | 0),
                  (l[6] =
                    (s[6] +
                      ((s[5] << 16) | (s[5] >>> 16)) +
                      ((s[4] << 16) | (s[4] >>> 16))) |
                    0),
                  (l[7] = (s[7] + ((s[6] << 8) | (s[6] >>> 24)) + s[5]) | 0);
              }
              u.Rabbit = S._createHelper(h);
            })(),
            m.Rabbit
          );
        });
      })(xo)),
    xo.exports
  );
}
var Ao = { exports: {} },
  Qu = Ao.exports,
  ha;
function Zu() {
  return (
    ha ||
      ((ha = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Le(), Fe(), Se(), Ft());
        })(Qu, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.StreamCipher,
                H = u.algo,
                O = [],
                _ = [],
                s = [],
                h = (H.RabbitLegacy = S.extend({
                  _doReset: function () {
                    var l = this._key.words,
                      A = this.cfg.iv,
                      x = (this._X = [
                        l[0],
                        (l[3] << 16) | (l[2] >>> 16),
                        l[1],
                        (l[0] << 16) | (l[3] >>> 16),
                        l[2],
                        (l[1] << 16) | (l[0] >>> 16),
                        l[3],
                        (l[2] << 16) | (l[1] >>> 16),
                      ]),
                      E = (this._C = [
                        (l[2] << 16) | (l[2] >>> 16),
                        (l[0] & 4294901760) | (l[1] & 65535),
                        (l[3] << 16) | (l[3] >>> 16),
                        (l[1] & 4294901760) | (l[2] & 65535),
                        (l[0] << 16) | (l[0] >>> 16),
                        (l[2] & 4294901760) | (l[3] & 65535),
                        (l[1] << 16) | (l[1] >>> 16),
                        (l[3] & 4294901760) | (l[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var k = 0; k < 4; k++) w.call(this);
                    for (var k = 0; k < 8; k++) E[k] ^= x[(k + 4) & 7];
                    if (A) {
                      var N = A.words,
                        v = N[0],
                        b = N[1],
                        g =
                          (((v << 8) | (v >>> 24)) & 16711935) |
                          (((v << 24) | (v >>> 8)) & 4278255360),
                        U =
                          (((b << 8) | (b >>> 24)) & 16711935) |
                          (((b << 24) | (b >>> 8)) & 4278255360),
                        f = (g >>> 16) | (U & 4294901760),
                        y = (U << 16) | (g & 65535);
                      (E[0] ^= g),
                        (E[1] ^= f),
                        (E[2] ^= U),
                        (E[3] ^= y),
                        (E[4] ^= g),
                        (E[5] ^= f),
                        (E[6] ^= U),
                        (E[7] ^= y);
                      for (var k = 0; k < 4; k++) w.call(this);
                    }
                  },
                  _doProcessBlock: function (l, A) {
                    var x = this._X;
                    w.call(this),
                      (O[0] = x[0] ^ (x[5] >>> 16) ^ (x[3] << 16)),
                      (O[1] = x[2] ^ (x[7] >>> 16) ^ (x[5] << 16)),
                      (O[2] = x[4] ^ (x[1] >>> 16) ^ (x[7] << 16)),
                      (O[3] = x[6] ^ (x[3] >>> 16) ^ (x[1] << 16));
                    for (var E = 0; E < 4; E++)
                      (O[E] =
                        (((O[E] << 8) | (O[E] >>> 24)) & 16711935) |
                        (((O[E] << 24) | (O[E] >>> 8)) & 4278255360)),
                        (l[A + E] ^= O[E]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function w() {
                for (var l = this._X, A = this._C, x = 0; x < 8; x++)
                  _[x] = A[x];
                (A[0] = (A[0] + 1295307597 + this._b) | 0),
                  (A[1] =
                    (A[1] + 3545052371 + (A[0] >>> 0 < _[0] >>> 0 ? 1 : 0)) |
                    0),
                  (A[2] =
                    (A[2] + 886263092 + (A[1] >>> 0 < _[1] >>> 0 ? 1 : 0)) | 0),
                  (A[3] =
                    (A[3] + 1295307597 + (A[2] >>> 0 < _[2] >>> 0 ? 1 : 0)) |
                    0),
                  (A[4] =
                    (A[4] + 3545052371 + (A[3] >>> 0 < _[3] >>> 0 ? 1 : 0)) |
                    0),
                  (A[5] =
                    (A[5] + 886263092 + (A[4] >>> 0 < _[4] >>> 0 ? 1 : 0)) | 0),
                  (A[6] =
                    (A[6] + 1295307597 + (A[5] >>> 0 < _[5] >>> 0 ? 1 : 0)) |
                    0),
                  (A[7] =
                    (A[7] + 3545052371 + (A[6] >>> 0 < _[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = A[7] >>> 0 < _[7] >>> 0 ? 1 : 0);
                for (var x = 0; x < 8; x++) {
                  var E = l[x] + A[x],
                    k = E & 65535,
                    N = E >>> 16,
                    v = ((((k * k) >>> 17) + k * N) >>> 15) + N * N,
                    b = (((E & 4294901760) * E) | 0) + (((E & 65535) * E) | 0);
                  s[x] = v ^ b;
                }
                (l[0] =
                  (s[0] +
                    ((s[7] << 16) | (s[7] >>> 16)) +
                    ((s[6] << 16) | (s[6] >>> 16))) |
                  0),
                  (l[1] = (s[1] + ((s[0] << 8) | (s[0] >>> 24)) + s[7]) | 0),
                  (l[2] =
                    (s[2] +
                      ((s[1] << 16) | (s[1] >>> 16)) +
                      ((s[0] << 16) | (s[0] >>> 16))) |
                    0),
                  (l[3] = (s[3] + ((s[2] << 8) | (s[2] >>> 24)) + s[1]) | 0),
                  (l[4] =
                    (s[4] +
                      ((s[3] << 16) | (s[3] >>> 16)) +
                      ((s[2] << 16) | (s[2] >>> 16))) |
                    0),
                  (l[5] = (s[5] + ((s[4] << 8) | (s[4] >>> 24)) + s[3]) | 0),
                  (l[6] =
                    (s[6] +
                      ((s[5] << 16) | (s[5] >>> 16)) +
                      ((s[4] << 16) | (s[4] >>> 16))) |
                    0),
                  (l[7] = (s[7] + ((s[6] << 8) | (s[6] >>> 24)) + s[5]) | 0);
              }
              u.RabbitLegacy = S._createHelper(h);
            })(),
            m.RabbitLegacy
          );
        });
      })(Ao)),
    Ao.exports
  );
}
var Oo = { exports: {} },
  Xu = Oo.exports,
  pa;
function Gu() {
  return (
    pa ||
      ((pa = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(kt(), Le(), Fe(), Se(), Ft());
        })(Xu, function (m) {
          return (
            (function () {
              var u = m,
                P = u.lib,
                S = P.BlockCipher,
                H = u.algo;
              const O = 16,
                _ = [
                  608135816, 2242054355, 320440878, 57701188, 2752067618,
                  698298832, 137296536, 3964562569, 1160258022, 953160567,
                  3193202383, 887688300, 3232508343, 3380367581, 1065670069,
                  3041331479, 2450970073, 2306472731,
                ],
                s = [
                  [
                    3509652390, 2564797868, 805139163, 3491422135, 3101798381,
                    1780907670, 3128725573, 4046225305, 614570311, 3012652279,
                    134345442, 2240740374, 1667834072, 1901547113, 2757295779,
                    4103290238, 227898511, 1921955416, 1904987480, 2182433518,
                    2069144605, 3260701109, 2620446009, 720527379, 3318853667,
                    677414384, 3393288472, 3101374703, 2390351024, 1614419982,
                    1822297739, 2954791486, 3608508353, 3174124327, 2024746970,
                    1432378464, 3864339955, 2857741204, 1464375394, 1676153920,
                    1439316330, 715854006, 3033291828, 289532110, 2706671279,
                    2087905683, 3018724369, 1668267050, 732546397, 1947742710,
                    3462151702, 2609353502, 2950085171, 1814351708, 2050118529,
                    680887927, 999245976, 1800124847, 3300911131, 1713906067,
                    1641548236, 4213287313, 1216130144, 1575780402, 4018429277,
                    3917837745, 3693486850, 3949271944, 596196993, 3549867205,
                    258830323, 2213823033, 772490370, 2760122372, 1774776394,
                    2652871518, 566650946, 4142492826, 1728879713, 2882767088,
                    1783734482, 3629395816, 2517608232, 2874225571, 1861159788,
                    326777828, 3124490320, 2130389656, 2716951837, 967770486,
                    1724537150, 2185432712, 2364442137, 1164943284, 2105845187,
                    998989502, 3765401048, 2244026483, 1075463327, 1455516326,
                    1322494562, 910128902, 469688178, 1117454909, 936433444,
                    3490320968, 3675253459, 1240580251, 122909385, 2157517691,
                    634681816, 4142456567, 3825094682, 3061402683, 2540495037,
                    79693498, 3249098678, 1084186820, 1583128258, 426386531,
                    1761308591, 1047286709, 322548459, 995290223, 1845252383,
                    2603652396, 3431023940, 2942221577, 3202600964, 3727903485,
                    1712269319, 422464435, 3234572375, 1170764815, 3523960633,
                    3117677531, 1434042557, 442511882, 3600875718, 1076654713,
                    1738483198, 4213154764, 2393238008, 3677496056, 1014306527,
                    4251020053, 793779912, 2902807211, 842905082, 4246964064,
                    1395751752, 1040244610, 2656851899, 3396308128, 445077038,
                    3742853595, 3577915638, 679411651, 2892444358, 2354009459,
                    1767581616, 3150600392, 3791627101, 3102740896, 284835224,
                    4246832056, 1258075500, 768725851, 2589189241, 3069724005,
                    3532540348, 1274779536, 3789419226, 2764799539, 1660621633,
                    3471099624, 4011903706, 913787905, 3497959166, 737222580,
                    2514213453, 2928710040, 3937242737, 1804850592, 3499020752,
                    2949064160, 2386320175, 2390070455, 2415321851, 4061277028,
                    2290661394, 2416832540, 1336762016, 1754252060, 3520065937,
                    3014181293, 791618072, 3188594551, 3933548030, 2332172193,
                    3852520463, 3043980520, 413987798, 3465142937, 3030929376,
                    4245938359, 2093235073, 3534596313, 375366246, 2157278981,
                    2479649556, 555357303, 3870105701, 2008414854, 3344188149,
                    4221384143, 3956125452, 2067696032, 3594591187, 2921233993,
                    2428461, 544322398, 577241275, 1471733935, 610547355,
                    4027169054, 1432588573, 1507829418, 2025931657, 3646575487,
                    545086370, 48609733, 2200306550, 1653985193, 298326376,
                    1316178497, 3007786442, 2064951626, 458293330, 2589141269,
                    3591329599, 3164325604, 727753846, 2179363840, 146436021,
                    1461446943, 4069977195, 705550613, 3059967265, 3887724982,
                    4281599278, 3313849956, 1404054877, 2845806497, 146425753,
                    1854211946,
                  ],
                  [
                    1266315497, 3048417604, 3681880366, 3289982499, 290971e4,
                    1235738493, 2632868024, 2414719590, 3970600049, 1771706367,
                    1449415276, 3266420449, 422970021, 1963543593, 2690192192,
                    3826793022, 1062508698, 1531092325, 1804592342, 2583117782,
                    2714934279, 4024971509, 1294809318, 4028980673, 1289560198,
                    2221992742, 1669523910, 35572830, 157838143, 1052438473,
                    1016535060, 1802137761, 1753167236, 1386275462, 3080475397,
                    2857371447, 1040679964, 2145300060, 2390574316, 1461121720,
                    2956646967, 4031777805, 4028374788, 33600511, 2920084762,
                    1018524850, 629373528, 3691585981, 3515945977, 2091462646,
                    2486323059, 586499841, 988145025, 935516892, 3367335476,
                    2599673255, 2839830854, 265290510, 3972581182, 2759138881,
                    3795373465, 1005194799, 847297441, 406762289, 1314163512,
                    1332590856, 1866599683, 4127851711, 750260880, 613907577,
                    1450815602, 3165620655, 3734664991, 3650291728, 3012275730,
                    3704569646, 1427272223, 778793252, 1343938022, 2676280711,
                    2052605720, 1946737175, 3164576444, 3914038668, 3967478842,
                    3682934266, 1661551462, 3294938066, 4011595847, 840292616,
                    3712170807, 616741398, 312560963, 711312465, 1351876610,
                    322626781, 1910503582, 271666773, 2175563734, 1594956187,
                    70604529, 3617834859, 1007753275, 1495573769, 4069517037,
                    2549218298, 2663038764, 504708206, 2263041392, 3941167025,
                    2249088522, 1514023603, 1998579484, 1312622330, 694541497,
                    2582060303, 2151582166, 1382467621, 776784248, 2618340202,
                    3323268794, 2497899128, 2784771155, 503983604, 4076293799,
                    907881277, 423175695, 432175456, 1378068232, 4145222326,
                    3954048622, 3938656102, 3820766613, 2793130115, 2977904593,
                    26017576, 3274890735, 3194772133, 1700274565, 1756076034,
                    4006520079, 3677328699, 720338349, 1533947780, 354530856,
                    688349552, 3973924725, 1637815568, 332179504, 3949051286,
                    53804574, 2852348879, 3044236432, 1282449977, 3583942155,
                    3416972820, 4006381244, 1617046695, 2628476075, 3002303598,
                    1686838959, 431878346, 2686675385, 1700445008, 1080580658,
                    1009431731, 832498133, 3223435511, 2605976345, 2271191193,
                    2516031870, 1648197032, 4164389018, 2548247927, 300782431,
                    375919233, 238389289, 3353747414, 2531188641, 2019080857,
                    1475708069, 455242339, 2609103871, 448939670, 3451063019,
                    1395535956, 2413381860, 1841049896, 1491858159, 885456874,
                    4264095073, 4001119347, 1565136089, 3898914787, 1108368660,
                    540939232, 1173283510, 2745871338, 3681308437, 4207628240,
                    3343053890, 4016749493, 1699691293, 1103962373, 3625875870,
                    2256883143, 3830138730, 1031889488, 3479347698, 1535977030,
                    4236805024, 3251091107, 2132092099, 1774941330, 1199868427,
                    1452454533, 157007616, 2904115357, 342012276, 595725824,
                    1480756522, 206960106, 497939518, 591360097, 863170706,
                    2375253569, 3596610801, 1814182875, 2094937945, 3421402208,
                    1082520231, 3463918190, 2785509508, 435703966, 3908032597,
                    1641649973, 2842273706, 3305899714, 1510255612, 2148256476,
                    2655287854, 3276092548, 4258621189, 236887753, 3681803219,
                    274041037, 1734335097, 3815195456, 3317970021, 1899903192,
                    1026095262, 4050517792, 356393447, 2410691914, 3873677099,
                    3682840055,
                  ],
                  [
                    3913112168, 2491498743, 4132185628, 2489919796, 1091903735,
                    1979897079, 3170134830, 3567386728, 3557303409, 857797738,
                    1136121015, 1342202287, 507115054, 2535736646, 337727348,
                    3213592640, 1301675037, 2528481711, 1895095763, 1721773893,
                    3216771564, 62756741, 2142006736, 835421444, 2531993523,
                    1442658625, 3659876326, 2882144922, 676362277, 1392781812,
                    170690266, 3921047035, 1759253602, 3611846912, 1745797284,
                    664899054, 1329594018, 3901205900, 3045908486, 2062866102,
                    2865634940, 3543621612, 3464012697, 1080764994, 553557557,
                    3656615353, 3996768171, 991055499, 499776247, 1265440854,
                    648242737, 3940784050, 980351604, 3713745714, 1749149687,
                    3396870395, 4211799374, 3640570775, 1161844396, 3125318951,
                    1431517754, 545492359, 4268468663, 3499529547, 1437099964,
                    2702547544, 3433638243, 2581715763, 2787789398, 1060185593,
                    1593081372, 2418618748, 4260947970, 69676912, 2159744348,
                    86519011, 2512459080, 3838209314, 1220612927, 3339683548,
                    133810670, 1090789135, 1078426020, 1569222167, 845107691,
                    3583754449, 4072456591, 1091646820, 628848692, 1613405280,
                    3757631651, 526609435, 236106946, 48312990, 2942717905,
                    3402727701, 1797494240, 859738849, 992217954, 4005476642,
                    2243076622, 3870952857, 3732016268, 765654824, 3490871365,
                    2511836413, 1685915746, 3888969200, 1414112111, 2273134842,
                    3281911079, 4080962846, 172450625, 2569994100, 980381355,
                    4109958455, 2819808352, 2716589560, 2568741196, 3681446669,
                    3329971472, 1835478071, 660984891, 3704678404, 4045999559,
                    3422617507, 3040415634, 1762651403, 1719377915, 3470491036,
                    2693910283, 3642056355, 3138596744, 1364962596, 2073328063,
                    1983633131, 926494387, 3423689081, 2150032023, 4096667949,
                    1749200295, 3328846651, 309677260, 2016342300, 1779581495,
                    3079819751, 111262694, 1274766160, 443224088, 298511866,
                    1025883608, 3806446537, 1145181785, 168956806, 3641502830,
                    3584813610, 1689216846, 3666258015, 3200248200, 1692713982,
                    2646376535, 4042768518, 1618508792, 1610833997, 3523052358,
                    4130873264, 2001055236, 3610705100, 2202168115, 4028541809,
                    2961195399, 1006657119, 2006996926, 3186142756, 1430667929,
                    3210227297, 1314452623, 4074634658, 4101304120, 2273951170,
                    1399257539, 3367210612, 3027628629, 1190975929, 2062231137,
                    2333990788, 2221543033, 2438960610, 1181637006, 548689776,
                    2362791313, 3372408396, 3104550113, 3145860560, 296247880,
                    1970579870, 3078560182, 3769228297, 1714227617, 3291629107,
                    3898220290, 166772364, 1251581989, 493813264, 448347421,
                    195405023, 2709975567, 677966185, 3703036547, 1463355134,
                    2715995803, 1338867538, 1343315457, 2802222074, 2684532164,
                    233230375, 2599980071, 2000651841, 3277868038, 1638401717,
                    4028070440, 3237316320, 6314154, 819756386, 300326615,
                    590932579, 1405279636, 3267499572, 3150704214, 2428286686,
                    3959192993, 3461946742, 1862657033, 1266418056, 963775037,
                    2089974820, 2263052895, 1917689273, 448879540, 3550394620,
                    3981727096, 150775221, 3627908307, 1303187396, 508620638,
                    2975983352, 2726630617, 1817252668, 1876281319, 1457606340,
                    908771278, 3720792119, 3617206836, 2455994898, 1729034894,
                    1080033504,
                  ],
                  [
                    976866871, 3556439503, 2881648439, 1522871579, 1555064734,
                    1336096578, 3548522304, 2579274686, 3574697629, 3205460757,
                    3593280638, 3338716283, 3079412587, 564236357, 2993598910,
                    1781952180, 1464380207, 3163844217, 3332601554, 1699332808,
                    1393555694, 1183702653, 3581086237, 1288719814, 691649499,
                    2847557200, 2895455976, 3193889540, 2717570544, 1781354906,
                    1676643554, 2592534050, 3230253752, 1126444790, 2770207658,
                    2633158820, 2210423226, 2615765581, 2414155088, 3127139286,
                    673620729, 2805611233, 1269405062, 4015350505, 3341807571,
                    4149409754, 1057255273, 2012875353, 2162469141, 2276492801,
                    2601117357, 993977747, 3918593370, 2654263191, 753973209,
                    36408145, 2530585658, 25011837, 3520020182, 2088578344,
                    530523599, 2918365339, 1524020338, 1518925132, 3760827505,
                    3759777254, 1202760957, 3985898139, 3906192525, 674977740,
                    4174734889, 2031300136, 2019492241, 3983892565, 4153806404,
                    3822280332, 352677332, 2297720250, 60907813, 90501309,
                    3286998549, 1016092578, 2535922412, 2839152426, 457141659,
                    509813237, 4120667899, 652014361, 1966332200, 2975202805,
                    55981186, 2327461051, 676427537, 3255491064, 2882294119,
                    3433927263, 1307055953, 942726286, 933058658, 2468411793,
                    3933900994, 4215176142, 1361170020, 2001714738, 2830558078,
                    3274259782, 1222529897, 1679025792, 2729314320, 3714953764,
                    1770335741, 151462246, 3013232138, 1682292957, 1483529935,
                    471910574, 1539241949, 458788160, 3436315007, 1807016891,
                    3718408830, 978976581, 1043663428, 3165965781, 1927990952,
                    4200891579, 2372276910, 3208408903, 3533431907, 1412390302,
                    2931980059, 4132332400, 1947078029, 3881505623, 4168226417,
                    2941484381, 1077988104, 1320477388, 886195818, 18198404,
                    3786409e3, 2509781533, 112762804, 3463356488, 1866414978,
                    891333506, 18488651, 661792760, 1628790961, 3885187036,
                    3141171499, 876946877, 2693282273, 1372485963, 791857591,
                    2686433993, 3759982718, 3167212022, 3472953795, 2716379847,
                    445679433, 3561995674, 3504004811, 3574258232, 54117162,
                    3331405415, 2381918588, 3769707343, 4154350007, 1140177722,
                    4074052095, 668550556, 3214352940, 367459370, 261225585,
                    2610173221, 4209349473, 3468074219, 3265815641, 314222801,
                    3066103646, 3808782860, 282218597, 3406013506, 3773591054,
                    379116347, 1285071038, 846784868, 2669647154, 3771962079,
                    3550491691, 2305946142, 453669953, 1268987020, 3317592352,
                    3279303384, 3744833421, 2610507566, 3859509063, 266596637,
                    3847019092, 517658769, 3462560207, 3443424879, 370717030,
                    4247526661, 2224018117, 4143653529, 4112773975, 2788324899,
                    2477274417, 1456262402, 2901442914, 1517677493, 1846949527,
                    2295493580, 3734397586, 2176403920, 1280348187, 1908823572,
                    3871786941, 846861322, 1172426758, 3287448474, 3383383037,
                    1655181056, 3139813346, 901632758, 1897031941, 2986607138,
                    3066810236, 3447102507, 1393639104, 373351379, 950779232,
                    625454576, 3124240540, 4148612726, 2007998917, 544563296,
                    2244738638, 2330496472, 2058025392, 1291430526, 424198748,
                    50039436, 29584100, 3605783033, 2429876329, 2791104160,
                    1057563949, 3255363231, 3075367218, 3463963227, 1469046755,
                    985887462,
                  ],
                ];
              var h = { pbox: [], sbox: [] };
              function w(k, N) {
                let v = (N >> 24) & 255,
                  b = (N >> 16) & 255,
                  g = (N >> 8) & 255,
                  U = N & 255,
                  f = k.sbox[0][v] + k.sbox[1][b];
                return (f = f ^ k.sbox[2][g]), (f = f + k.sbox[3][U]), f;
              }
              function l(k, N, v) {
                let b = N,
                  g = v,
                  U;
                for (let f = 0; f < O; ++f)
                  (b = b ^ k.pbox[f]),
                    (g = w(k, b) ^ g),
                    (U = b),
                    (b = g),
                    (g = U);
                return (
                  (U = b),
                  (b = g),
                  (g = U),
                  (g = g ^ k.pbox[O]),
                  (b = b ^ k.pbox[O + 1]),
                  { left: b, right: g }
                );
              }
              function A(k, N, v) {
                let b = N,
                  g = v,
                  U;
                for (let f = O + 1; f > 1; --f)
                  (b = b ^ k.pbox[f]),
                    (g = w(k, b) ^ g),
                    (U = b),
                    (b = g),
                    (g = U);
                return (
                  (U = b),
                  (b = g),
                  (g = U),
                  (g = g ^ k.pbox[1]),
                  (b = b ^ k.pbox[0]),
                  { left: b, right: g }
                );
              }
              function x(k, N, v) {
                for (let y = 0; y < 4; y++) {
                  k.sbox[y] = [];
                  for (let B = 0; B < 256; B++) k.sbox[y][B] = s[y][B];
                }
                let b = 0;
                for (let y = 0; y < O + 2; y++)
                  (k.pbox[y] = _[y] ^ N[b]), b++, b >= v && (b = 0);
                let g = 0,
                  U = 0,
                  f = 0;
                for (let y = 0; y < O + 2; y += 2)
                  (f = l(k, g, U)),
                    (g = f.left),
                    (U = f.right),
                    (k.pbox[y] = g),
                    (k.pbox[y + 1] = U);
                for (let y = 0; y < 4; y++)
                  for (let B = 0; B < 256; B += 2)
                    (f = l(k, g, U)),
                      (g = f.left),
                      (U = f.right),
                      (k.sbox[y][B] = g),
                      (k.sbox[y][B + 1] = U);
                return !0;
              }
              var E = (H.Blowfish = S.extend({
                _doReset: function () {
                  if (this._keyPriorReset !== this._key) {
                    var k = (this._keyPriorReset = this._key),
                      N = k.words,
                      v = k.sigBytes / 4;
                    x(h, N, v);
                  }
                },
                encryptBlock: function (k, N) {
                  var v = l(h, k[N], k[N + 1]);
                  (k[N] = v.left), (k[N + 1] = v.right);
                },
                decryptBlock: function (k, N) {
                  var v = A(h, k[N], k[N + 1]);
                  (k[N] = v.left), (k[N + 1] = v.right);
                },
                blockSize: 64 / 32,
                keySize: 128 / 32,
                ivSize: 64 / 32,
              }));
              u.Blowfish = S._createHelper(E);
            })(),
            m.Blowfish
          );
        });
      })(Oo)),
    Oo.exports
  );
}
var Ju = Lr.exports,
  da;
function tc() {
  return (
    da ||
      ((da = 1),
      (function (i, p) {
        (function (m, u, P) {
          i.exports = u(
            kt(),
            Jn(),
            Zs(),
            Gs(),
            Le(),
            eu(),
            Fe(),
            Ki(),
            Zr(),
            au(),
            Hi(),
            cu(),
            fu(),
            pu(),
            ro(),
            gu(),
            Se(),
            Ft(),
            _u(),
            xu(),
            Ou(),
            Su(),
            Eu(),
            Tu(),
            Pu(),
            ju(),
            Nu(),
            Uu(),
            Lu(),
            qu(),
            zu(),
            $u(),
            Yu(),
            Zu(),
            Gu(),
          );
        })(Ju, function (m) {
          return m;
        });
      })(Lr)),
    Lr.exports
  );
}
var ko = { exports: {} },
  ec = ko.exports,
  ma;
function nc() {
  return (
    ma ||
      ((ma = 1),
      (function (i, p) {
        ((m, u) => {
          i.exports = u();
        })(ec, function () {
          var m = function (t, e) {
              return (m =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array
                  ? function (n, r) {
                      n.__proto__ = r;
                    }
                  : function (n, r) {
                      for (var o in r)
                        Object.prototype.hasOwnProperty.call(r, o) &&
                          (n[o] = r[o]);
                    }))(t, e);
            },
            u = function () {
              return (u =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            };
          function P(t, e, n) {
            for (var r, o = 0, a = e.length; o < a; o++)
              (!r && o in e) ||
                ((r = r || Array.prototype.slice.call(e, 0, o))[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e));
          }
          var S =
              typeof globalThis < "u"
                ? globalThis
                : typeof self < "u"
                  ? self
                  : typeof window < "u"
                    ? window
                    : Vn,
            H = Object.keys,
            O = Array.isArray;
          function _(t, e) {
            return (
              typeof e == "object" &&
                H(e).forEach(function (n) {
                  t[n] = e[n];
                }),
              t
            );
          }
          typeof Promise > "u" || S.Promise || (S.Promise = Promise);
          var s = Object.getPrototypeOf,
            h = {}.hasOwnProperty;
          function w(t, e) {
            return h.call(t, e);
          }
          function l(t, e) {
            typeof e == "function" && (e = e(s(t))),
              (typeof Reflect > "u" ? H : Reflect.ownKeys)(e).forEach(
                function (n) {
                  x(t, n, e[n]);
                },
              );
          }
          var A = Object.defineProperty;
          function x(t, e, n, r) {
            A(
              t,
              e,
              _(
                n && w(n, "get") && typeof n.get == "function"
                  ? { get: n.get, set: n.set, configurable: !0 }
                  : { value: n, configurable: !0, writable: !0 },
                r,
              ),
            );
          }
          function E(t) {
            return {
              from: function (e) {
                return (
                  (t.prototype = Object.create(e.prototype)),
                  x(t.prototype, "constructor", t),
                  { extend: l.bind(null, t.prototype) }
                );
              },
            };
          }
          var k = Object.getOwnPropertyDescriptor,
            N = [].slice;
          function v(t, e, n) {
            return N.call(t, e, n);
          }
          function b(t, e) {
            return e(t);
          }
          function g(t) {
            if (!t) throw new Error("Assertion Failed");
          }
          function U(t) {
            S.setImmediate ? setImmediate(t) : setTimeout(t, 0);
          }
          function f(t, e) {
            if (typeof e == "string" && w(t, e)) return t[e];
            if (!e) return t;
            if (typeof e != "string") {
              for (var n = [], r = 0, o = e.length; r < o; ++r) {
                var a = f(t, e[r]);
                n.push(a);
              }
              return n;
            }
            var c,
              d = e.indexOf(".");
            return d === -1 || (c = t[e.substr(0, d)]) == null
              ? void 0
              : f(c, e.substr(d + 1));
          }
          function y(t, e, n) {
            if (
              t &&
              e !== void 0 &&
              !("isFrozen" in Object && Object.isFrozen(t))
            )
              if (typeof e != "string" && "length" in e) {
                g(typeof n != "string" && "length" in n);
                for (var r = 0, o = e.length; r < o; ++r) y(t, e[r], n[r]);
              } else {
                var a,
                  c,
                  d = e.indexOf(".");
                d !== -1
                  ? ((a = e.substr(0, d)),
                    (d = e.substr(d + 1)) === ""
                      ? n === void 0
                        ? O(t) && !isNaN(parseInt(a))
                          ? t.splice(a, 1)
                          : delete t[a]
                        : (t[a] = n)
                      : y((c = (c = t[a]) && w(t, a) ? c : (t[a] = {})), d, n))
                  : n === void 0
                    ? O(t) && !isNaN(parseInt(e))
                      ? t.splice(e, 1)
                      : delete t[e]
                    : (t[e] = n);
              }
          }
          function B(t) {
            var e,
              n = {};
            for (e in t) w(t, e) && (n[e] = t[e]);
            return n;
          }
          var Y = [].concat;
          function M(t) {
            return Y.apply([], t);
          }
          var G =
              "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey"
                .split(",")
                .concat(
                  M(
                    [8, 16, 32, 64].map(function (t) {
                      return ["Int", "Uint", "Float"].map(function (e) {
                        return e + t + "Array";
                      });
                    }),
                  ),
                )
                .filter(function (t) {
                  return S[t];
                }),
            W = new Set(
              G.map(function (t) {
                return S[t];
              }),
            ),
            Q = null;
          function F(t) {
            return (
              (Q = new WeakMap()),
              (t = (function e(n) {
                if (!n || typeof n != "object") return n;
                var r = Q.get(n);
                if (r) return r;
                if (O(n)) {
                  (r = []), Q.set(n, r);
                  for (var o = 0, a = n.length; o < a; ++o) r.push(e(n[o]));
                } else if (W.has(n.constructor)) r = n;
                else {
                  var c,
                    d = s(n);
                  for (c in ((r =
                    d === Object.prototype ? {} : Object.create(d)),
                  Q.set(n, r),
                  n))
                    w(n, c) && (r[c] = e(n[c]));
                }
                return r;
              })(t)),
              (Q = null),
              t
            );
          }
          var ot = {}.toString;
          function st(t) {
            return ot.call(t).slice(8, -1);
          }
          var ht = typeof Symbol < "u" ? Symbol.iterator : "@@iterator",
            _t =
              typeof ht == "symbol"
                ? function (t) {
                    var e;
                    return t != null && (e = t[ht]) && e.apply(t);
                  }
                : function () {
                    return null;
                  };
          function bt(t, e) {
            (e = t.indexOf(e)), 0 <= e && t.splice(e, 1);
          }
          var Bt = {};
          function wt(t) {
            var e, n, r, o;
            if (arguments.length === 1) {
              if (O(t)) return t.slice();
              if (this === Bt && typeof t == "string") return [t];
              if ((o = _t(t)))
                for (n = []; !(r = o.next()).done; ) n.push(r.value);
              else {
                if (t == null) return [t];
                if (typeof (e = t.length) != "number") return [t];
                for (n = new Array(e); e--; ) n[e] = t[e];
              }
            } else
              for (e = arguments.length, n = new Array(e); e--; )
                n[e] = arguments[e];
            return n;
          }
          var Z =
              typeof Symbol < "u"
                ? function (t) {
                    return t[Symbol.toStringTag] === "AsyncFunction";
                  }
                : function () {
                    return !1;
                  },
            G = [
              "Unknown",
              "Constraint",
              "Data",
              "TransactionInactive",
              "ReadOnly",
              "Version",
              "NotFound",
              "InvalidState",
              "InvalidAccess",
              "Abort",
              "Timeout",
              "QuotaExceeded",
              "Syntax",
              "DataClone",
            ],
            Mt = [
              "Modify",
              "Bulk",
              "OpenFailed",
              "VersionChange",
              "Schema",
              "Upgrade",
              "InvalidTable",
              "MissingAPI",
              "NoSuchDatabase",
              "InvalidArgument",
              "SubTransaction",
              "Unsupported",
              "Internal",
              "DatabaseClosed",
              "PrematureCommit",
              "ForeignAwait",
            ].concat(G),
            nt = {
              VersionChanged:
                "Database version changed by other database connection",
              DatabaseClosed: "Database has been closed",
              Abort: "Transaction aborted",
              TransactionInactive:
                "Transaction has already completed or failed",
              MissingAPI:
                "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb",
            };
          function X(t, e) {
            (this.name = t), (this.message = e);
          }
          function Tt(t, e) {
            return (
              t +
              ". Errors: " +
              Object.keys(e)
                .map(function (n) {
                  return e[n].toString();
                })
                .filter(function (n, r, o) {
                  return o.indexOf(n) === r;
                }).join(`
`)
            );
          }
          function Rt(t, e, n, r) {
            (this.failures = e),
              (this.failedKeys = r),
              (this.successCount = n),
              (this.message = Tt(t, e));
          }
          function jt(t, e) {
            (this.name = "BulkError"),
              (this.failures = Object.keys(e).map(function (n) {
                return e[n];
              })),
              (this.failuresByPos = e),
              (this.message = Tt(t, this.failures));
          }
          E(X)
            .from(Error)
            .extend({
              toString: function () {
                return this.name + ": " + this.message;
              },
            }),
            E(Rt).from(X),
            E(jt).from(X);
          var yt = Mt.reduce(function (t, e) {
              return (t[e] = e + "Error"), t;
            }, {}),
            Be = X,
            ft = Mt.reduce(function (t, e) {
              var n = e + "Error";
              function r(o, a) {
                (this.name = n),
                  o
                    ? typeof o == "string"
                      ? ((this.message = "".concat(o).concat(
                          a
                            ? `
 ` + a
                            : "",
                        )),
                        (this.inner = a || null))
                      : typeof o == "object" &&
                        ((this.message = ""
                          .concat(o.name, " ")
                          .concat(o.message)),
                        (this.inner = o))
                    : ((this.message = nt[e] || n), (this.inner = null));
              }
              return E(r).from(Be), (t[e] = r), t;
            }, {}),
            qe =
              ((ft.Syntax = SyntaxError),
              (ft.Type = TypeError),
              (ft.Range = RangeError),
              G.reduce(function (t, e) {
                return (t[e + "Error"] = ft[e]), t;
              }, {}));
          G = Mt.reduce(function (t, e) {
            return (
              ["Syntax", "Type", "Range"].indexOf(e) === -1 &&
                (t[e + "Error"] = ft[e]),
              t
            );
          }, {});
          function St() {}
          function qt(t) {
            return t;
          }
          function Vt(t, e) {
            return t == null || t === qt
              ? e
              : function (n) {
                  return e(t(n));
                };
          }
          function ne(t, e) {
            return function () {
              t.apply(this, arguments), e.apply(this, arguments);
            };
          }
          function Ee(t, e) {
            return t === St
              ? e
              : function () {
                  var n = t.apply(this, arguments),
                    r = (n !== void 0 && (arguments[0] = n), this.onsuccess),
                    o = this.onerror,
                    a =
                      ((this.onsuccess = null),
                      (this.onerror = null),
                      e.apply(this, arguments));
                  return (
                    r &&
                      (this.onsuccess = this.onsuccess
                        ? ne(r, this.onsuccess)
                        : r),
                    o &&
                      (this.onerror = this.onerror ? ne(o, this.onerror) : o),
                    a !== void 0 ? a : n
                  );
                };
          }
          function He(t, e) {
            return t === St
              ? e
              : function () {
                  t.apply(this, arguments);
                  var n = this.onsuccess,
                    r = this.onerror;
                  (this.onsuccess = this.onerror = null),
                    e.apply(this, arguments),
                    n &&
                      (this.onsuccess = this.onsuccess
                        ? ne(n, this.onsuccess)
                        : n),
                    r &&
                      (this.onerror = this.onerror ? ne(r, this.onerror) : r);
                };
          }
          function Re(t, e) {
            return t === St
              ? e
              : function (o) {
                  var r = t.apply(this, arguments),
                    o = (_(o, r), this.onsuccess),
                    a = this.onerror,
                    c =
                      ((this.onsuccess = null),
                      (this.onerror = null),
                      e.apply(this, arguments));
                  return (
                    o &&
                      (this.onsuccess = this.onsuccess
                        ? ne(o, this.onsuccess)
                        : o),
                    a &&
                      (this.onerror = this.onerror ? ne(a, this.onerror) : a),
                    r === void 0 ? (c === void 0 ? void 0 : c) : _(r, c)
                  );
                };
          }
          function nn(t, e) {
            return t === St
              ? e
              : function () {
                  return (
                    e.apply(this, arguments) !== !1 && t.apply(this, arguments)
                  );
                };
          }
          function pe(t, e) {
            return t === St
              ? e
              : function () {
                  var n = t.apply(this, arguments);
                  if (n && typeof n.then == "function") {
                    for (
                      var r = this, o = arguments.length, a = new Array(o);
                      o--;

                    )
                      a[o] = arguments[o];
                    return n.then(function () {
                      return e.apply(r, a);
                    });
                  }
                  return e.apply(this, arguments);
                };
          }
          (G.ModifyError = Rt), (G.DexieError = X), (G.BulkError = jt);
          var It =
            typeof location < "u" &&
            /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
          function Yt(t) {
            It = t;
          }
          var Zt = {},
            Te = 100,
            ye =
              typeof Promise > "u"
                ? []
                : ((Mt = Promise.resolve()),
                  typeof crypto < "u" && crypto.subtle
                    ? [
                        (ye = crypto.subtle.digest(
                          "SHA-512",
                          new Uint8Array([0]),
                        )),
                        s(ye),
                        Mt,
                      ]
                    : [Mt, s(Mt), Mt]),
            Mt = ye[0],
            Je = ye[1],
            Je = Je && Je.then,
            Xt = Mt && Mt.constructor,
            rn = !!ye[2],
            ve = function (t, e) {
              Ce.push([t, e]), ie && (queueMicrotask(er), (ie = !1));
            },
            ze = !0,
            ie = !0,
            Gt = [],
            We = [],
            $e = qt,
            re = {
              id: "global",
              global: !0,
              ref: 0,
              unhandleds: [],
              onunhandled: St,
              pgp: !1,
              env: {},
              finalize: St,
            },
            pt = re,
            Ce = [],
            ue = 0,
            Ve = [];
          function ut(t) {
            if (typeof this != "object")
              throw new TypeError("Promises must be constructed via new");
            (this._listeners = []), (this._lib = !1);
            var e = (this._PSD = pt);
            if (typeof t != "function") {
              if (t !== Zt) throw new TypeError("Not a function");
              (this._state = arguments[1]),
                (this._value = arguments[2]),
                this._state === !1 && sn(this, this._value);
            } else
              (this._state = null),
                (this._value = null),
                ++e.ref,
                (function n(r, o) {
                  try {
                    o(
                      function (a) {
                        if (r._state === null) {
                          if (a === r)
                            throw new TypeError(
                              "A promise cannot be resolved with itself.",
                            );
                          var c = r._lib && be();
                          a && typeof a.then == "function"
                            ? n(r, function (d, C) {
                                a instanceof ut ? a._then(d, C) : a.then(d, C);
                              })
                            : ((r._state = !0), (r._value = a), An(r)),
                            c && de();
                        }
                      },
                      sn.bind(null, r),
                    );
                  } catch (a) {
                    sn(r, a);
                  }
                })(this, t);
          }
          var on = {
            get: function () {
              var t = pt,
                e = Bn;
              function n(r, o) {
                var a = this,
                  c = !t.global && (t !== pt || e !== Bn),
                  d = c && !we(),
                  C = new ut(function (q, I) {
                    un(a, new an(Eo(r, t, c, d), Eo(o, t, c, d), q, I, t));
                  });
                return (
                  this._consoleTask && (C._consoleTask = this._consoleTask), C
                );
              }
              return (n.prototype = Zt), n;
            },
            set: function (t) {
              x(
                this,
                "then",
                t && t.prototype === Zt
                  ? on
                  : {
                      get: function () {
                        return t;
                      },
                      set: on.set,
                    },
              );
            },
          };
          function an(t, e, n, r, o) {
            (this.onFulfilled = typeof t == "function" ? t : null),
              (this.onRejected = typeof e == "function" ? e : null),
              (this.resolve = n),
              (this.reject = r),
              (this.psd = o);
          }
          function sn(t, e) {
            var n, r;
            We.push(e),
              t._state === null &&
                ((n = t._lib && be()),
                (e = $e(e)),
                (t._state = !1),
                (t._value = e),
                (r = t),
                Gt.some(function (o) {
                  return o._value === r._value;
                }) || Gt.push(r),
                An(t),
                n) &&
                de();
          }
          function An(t) {
            var e = t._listeners;
            t._listeners = [];
            for (var n = 0, r = e.length; n < r; ++n) un(t, e[n]);
            var o = t._PSD;
            --o.ref || o.finalize(),
              ue === 0 &&
                (++ue,
                ve(function () {
                  --ue == 0 && cn();
                }, []));
          }
          function un(t, e) {
            if (t._state === null) t._listeners.push(e);
            else {
              var n = t._state ? e.onFulfilled : e.onRejected;
              if (n === null)
                return (t._state ? e.resolve : e.reject)(t._value);
              ++e.psd.ref, ++ue, ve(On, [n, t, e]);
            }
          }
          function On(t, e, n) {
            try {
              var r,
                o = e._value;
              !e._state && We.length && (We = []),
                (r =
                  It && e._consoleTask
                    ? e._consoleTask.run(function () {
                        return t(o);
                      })
                    : t(o)),
                e._state ||
                  We.indexOf(o) !== -1 ||
                  ((a) => {
                    for (var c = Gt.length; c; )
                      if (Gt[--c]._value === a._value) return Gt.splice(c, 1);
                  })(e),
                n.resolve(r);
            } catch (a) {
              n.reject(a);
            } finally {
              --ue == 0 && cn(), --n.psd.ref || n.psd.finalize();
            }
          }
          function er() {
            Ie(re, function () {
              be() && de();
            });
          }
          function be() {
            var t = ze;
            return (ie = ze = !1), t;
          }
          function de() {
            var t, e, n;
            do
              for (; 0 < Ce.length; )
                for (t = Ce, Ce = [], n = t.length, e = 0; e < n; ++e) {
                  var r = t[e];
                  r[0].apply(null, r[1]);
                }
            while (0 < Ce.length);
            ie = ze = !0;
          }
          function cn() {
            for (
              var t = Gt,
                e =
                  ((Gt = []),
                  t.forEach(function (r) {
                    r._PSD.onunhandled.call(null, r._value, r);
                  }),
                  Ve.slice(0)),
                n = e.length;
              n;

            )
              e[--n]();
          }
          function Pe(t) {
            return new ut(Zt, !1, t);
          }
          function xt(t, e) {
            var n = pt;
            return function () {
              var r = be(),
                o = pt;
              try {
                return xe(n, !0), t.apply(this, arguments);
              } catch (a) {
                e && e(a);
              } finally {
                xe(o, !1), r && de();
              }
            };
          }
          l(ut.prototype, {
            then: on,
            _then: function (t, e) {
              un(this, new an(null, null, t, e, pt));
            },
            catch: function (t) {
              var e, n;
              return arguments.length === 1
                ? this.then(null, t)
                : ((e = t),
                  (n = arguments[1]),
                  typeof e == "function"
                    ? this.then(null, function (r) {
                        return (r instanceof e ? n : Pe)(r);
                      })
                    : this.then(null, function (r) {
                        return (r && r.name === e ? n : Pe)(r);
                      }));
            },
            finally: function (t) {
              return this.then(
                function (e) {
                  return ut.resolve(t()).then(function () {
                    return e;
                  });
                },
                function (e) {
                  return ut.resolve(t()).then(function () {
                    return Pe(e);
                  });
                },
              );
            },
            timeout: function (t, e) {
              var n = this;
              return t < 1 / 0
                ? new ut(function (r, o) {
                    var a = setTimeout(function () {
                      return o(new ft.Timeout(e));
                    }, t);
                    n.then(r, o).finally(clearTimeout.bind(null, a));
                  })
                : this;
            },
          }),
            typeof Symbol < "u" &&
              Symbol.toStringTag &&
              x(ut.prototype, Symbol.toStringTag, "Dexie.Promise"),
            (re.env = Bo()),
            l(ut, {
              all: function () {
                var t = wt.apply(null, arguments).map(En);
                return new ut(function (e, n) {
                  t.length === 0 && e([]);
                  var r = t.length;
                  t.forEach(function (o, a) {
                    return ut.resolve(o).then(function (c) {
                      (t[a] = c), --r || e(t);
                    }, n);
                  });
                });
              },
              resolve: function (t) {
                return t instanceof ut
                  ? t
                  : t && typeof t.then == "function"
                    ? new ut(function (e, n) {
                        t.then(e, n);
                      })
                    : new ut(Zt, !0, t);
              },
              reject: Pe,
              race: function () {
                var t = wt.apply(null, arguments).map(En);
                return new ut(function (e, n) {
                  t.map(function (r) {
                    return ut.resolve(r).then(e, n);
                  });
                });
              },
              PSD: {
                get: function () {
                  return pt;
                },
                set: function (t) {
                  return (pt = t);
                },
              },
              totalEchoes: {
                get: function () {
                  return Bn;
                },
              },
              newPSD: _e,
              usePSD: Ie,
              scheduler: {
                get: function () {
                  return ve;
                },
                set: function (t) {
                  ve = t;
                },
              },
              rejectionMapper: {
                get: function () {
                  return $e;
                },
                set: function (t) {
                  $e = t;
                },
              },
              follow: function (t, e) {
                return new ut(function (n, r) {
                  return _e(
                    function (o, a) {
                      var c = pt;
                      (c.unhandleds = []),
                        (c.onunhandled = a),
                        (c.finalize = ne(function () {
                          var d,
                            C = this;
                          (d = function () {
                            C.unhandleds.length === 0
                              ? o()
                              : a(C.unhandleds[0]);
                          }),
                            Ve.push(function q() {
                              d(), Ve.splice(Ve.indexOf(q), 1);
                            }),
                            ++ue,
                            ve(function () {
                              --ue == 0 && cn();
                            }, []);
                        }, c.finalize)),
                        t();
                    },
                    e,
                    n,
                    r,
                  );
                });
              },
            }),
            Xt &&
              (Xt.allSettled &&
                x(ut, "allSettled", function () {
                  var t = wt.apply(null, arguments).map(En);
                  return new ut(function (e) {
                    t.length === 0 && e([]);
                    var n = t.length,
                      r = new Array(n);
                    t.forEach(function (o, a) {
                      return ut
                        .resolve(o)
                        .then(
                          function (c) {
                            return (r[a] = { status: "fulfilled", value: c });
                          },
                          function (c) {
                            return (r[a] = { status: "rejected", reason: c });
                          },
                        )
                        .then(function () {
                          return --n || e(r);
                        });
                    });
                  });
                }),
              Xt.any &&
                typeof AggregateError < "u" &&
                x(ut, "any", function () {
                  var t = wt.apply(null, arguments).map(En);
                  return new ut(function (e, n) {
                    t.length === 0 && n(new AggregateError([]));
                    var r = t.length,
                      o = new Array(r);
                    t.forEach(function (a, c) {
                      return ut.resolve(a).then(
                        function (d) {
                          return e(d);
                        },
                        function (d) {
                          (o[c] = d), --r || n(new AggregateError(o));
                        },
                      );
                    });
                  });
                }),
              Xt.withResolvers) &&
              (ut.withResolvers = Xt.withResolvers);
          var Ct = { awaits: 0, echoes: 0, id: 0 },
            kn = 0,
            Ye = [],
            Sn = 0,
            Bn = 0,
            _a = 0;
          function _e(t, c, n, r) {
            var o = pt,
              a = Object.create(o),
              c =
                ((a.parent = o),
                (a.ref = 0),
                (a.global = !1),
                (a.id = ++_a),
                re.env,
                (a.env = rn
                  ? {
                      Promise: ut,
                      PromiseProp: {
                        value: ut,
                        configurable: !0,
                        writable: !0,
                      },
                      all: ut.all,
                      race: ut.race,
                      allSettled: ut.allSettled,
                      any: ut.any,
                      resolve: ut.resolve,
                      reject: ut.reject,
                    }
                  : {}),
                c && _(a, c),
                ++o.ref,
                (a.finalize = function () {
                  --this.parent.ref || this.parent.finalize();
                }),
                Ie(a, t, n, r));
            return a.ref === 0 && a.finalize(), c;
          }
          function Qe() {
            return (
              Ct.id || (Ct.id = ++kn), ++Ct.awaits, (Ct.echoes += Te), Ct.id
            );
          }
          function we() {
            return (
              !!Ct.awaits &&
              (--Ct.awaits == 0 && (Ct.id = 0),
              (Ct.echoes = Ct.awaits * Te),
              !0)
            );
          }
          function En(t) {
            return Ct.echoes && t && t.constructor === Xt
              ? (Qe(),
                t.then(
                  function (e) {
                    return we(), e;
                  },
                  function (e) {
                    return we(), Dt(e);
                  },
                ))
              : t;
          }
          function wa() {
            var t = Ye[Ye.length - 1];
            Ye.pop(), xe(t, !1);
          }
          function xe(t, e) {
            var n,
              r,
              o = pt;
            (e
              ? !Ct.echoes || (Sn++ && t === pt)
              : !Sn || (--Sn && t === pt)) ||
              queueMicrotask(
                e
                  ? function (a) {
                      ++Bn,
                        (Ct.echoes && --Ct.echoes != 0) ||
                          (Ct.echoes = Ct.awaits = Ct.id = 0),
                        Ye.push(pt),
                        xe(a, !0);
                    }.bind(null, t)
                  : wa,
              ),
              t !== pt &&
                ((pt = t), o === re && (re.env = Bo()), rn) &&
                ((n = re.env.Promise), (r = t.env), o.global || t.global) &&
                (Object.defineProperty(S, "Promise", r.PromiseProp),
                (n.all = r.all),
                (n.race = r.race),
                (n.resolve = r.resolve),
                (n.reject = r.reject),
                r.allSettled && (n.allSettled = r.allSettled),
                r.any) &&
                (n.any = r.any);
          }
          function Bo() {
            var t = S.Promise;
            return rn
              ? {
                  Promise: t,
                  PromiseProp: Object.getOwnPropertyDescriptor(S, "Promise"),
                  all: t.all,
                  race: t.race,
                  allSettled: t.allSettled,
                  any: t.any,
                  resolve: t.resolve,
                  reject: t.reject,
                }
              : {};
          }
          function Ie(t, e, n, r, o) {
            var a = pt;
            try {
              return xe(t, !0), e(n, r, o);
            } finally {
              xe(a, !1);
            }
          }
          function Eo(t, e, n, r) {
            return typeof t != "function"
              ? t
              : function () {
                  var o = pt;
                  n && Qe(), xe(e, !0);
                  try {
                    return t.apply(this, arguments);
                  } finally {
                    xe(o, !1), r && queueMicrotask(we);
                  }
                };
          }
          function nr(t) {
            Promise === Xt && Ct.echoes === 0
              ? Sn === 0
                ? t()
                : enqueueNativeMicroTask(t)
              : setTimeout(t, 0);
          }
          ("" + Je).indexOf("[native code]") === -1 && (Qe = we = St);
          var Dt = ut.reject,
            je = "\uFFFF",
            me =
              "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
            Ro = "String expected.",
            Rn = "__dbnames",
            rr = "readonly",
            or = "readwrite";
          function De(t, e) {
            return t
              ? e
                ? function () {
                    return t.apply(this, arguments) && e.apply(this, arguments);
                  }
                : t
              : e;
          }
          var To = {
            type: 3,
            lower: -1 / 0,
            lowerOpen: !1,
            upper: [[]],
            upperOpen: !1,
          };
          function Tn(t) {
            return typeof t != "string" || /\./.test(t)
              ? function (e) {
                  return e;
                }
              : function (e) {
                  return e[t] === void 0 && t in e && delete (e = F(e))[t], e;
                };
          }
          function Co() {
            throw ft.Type(
              "Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.",
            );
          }
          function Ot(t, e) {
            try {
              var n = Po(t),
                r = Po(e);
              if (n !== r)
                return n === "Array"
                  ? 1
                  : r === "Array"
                    ? -1
                    : n === "binary"
                      ? 1
                      : r === "binary"
                        ? -1
                        : n === "string"
                          ? 1
                          : r === "string"
                            ? -1
                            : n === "Date"
                              ? 1
                              : r !== "Date"
                                ? NaN
                                : -1;
              switch (n) {
                case "number":
                case "Date":
                case "string":
                  return e < t ? 1 : t < e ? -1 : 0;
                case "binary":
                  for (
                    var o = Io(t),
                      a = Io(e),
                      c = o.length,
                      d = a.length,
                      C = c < d ? c : d,
                      q = 0;
                    q < C;
                    ++q
                  )
                    if (o[q] !== a[q]) return o[q] < a[q] ? -1 : 1;
                  return c === d ? 0 : c < d ? -1 : 1;
                case "Array":
                  for (
                    var I = t,
                      R = e,
                      T = I.length,
                      L = R.length,
                      j = T < L ? T : L,
                      D = 0;
                    D < j;
                    ++D
                  ) {
                    var K = Ot(I[D], R[D]);
                    if (K !== 0) return K;
                  }
                  return T === L ? 0 : T < L ? -1 : 1;
              }
            } catch {}
            return NaN;
          }
          function Po(t) {
            var e = typeof t;
            return e == "object" &&
              (ArrayBuffer.isView(t) || (e = st(t)) === "ArrayBuffer")
              ? "binary"
              : e;
          }
          function Io(t) {
            return t instanceof Uint8Array
              ? t
              : ArrayBuffer.isView(t)
                ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
                : new Uint8Array(t);
          }
          function Cn(t, e, n) {
            var r = t.schema.yProps;
            return r
              ? (e &&
                  0 < n.numFailures &&
                  (e = e.filter(function (o, a) {
                    return !n.failures[a];
                  })),
                Promise.all(
                  r.map(function (o) {
                    return (
                      (o = o.updatesTable),
                      e
                        ? t.db.table(o).where("k").anyOf(e).delete()
                        : t.db.table(o).clear()
                    );
                  }),
                ).then(function () {
                  return n;
                }))
              : n;
          }
          jo.prototype.execute = function (t) {
            var e = this["@@propmod"];
            if (e.add !== void 0) {
              var n = e.add;
              if (O(n)) return P(P([], O(t) ? t : [], !0), n).sort();
              if (typeof n == "number") return (Number(t) || 0) + n;
              if (typeof n == "bigint")
                try {
                  return BigInt(t) + n;
                } catch {
                  return BigInt(0) + n;
                }
              throw new TypeError("Invalid term ".concat(n));
            }
            if (e.remove !== void 0) {
              var r = e.remove;
              if (O(r))
                return O(t)
                  ? t
                      .filter(function (o) {
                        return !r.includes(o);
                      })
                      .sort()
                  : [];
              if (typeof r == "number") return Number(t) - r;
              if (typeof r == "bigint")
                try {
                  return BigInt(t) - r;
                } catch {
                  return BigInt(0) - r;
                }
              throw new TypeError("Invalid subtrahend ".concat(r));
            }
            return (
              (n = (n = e.replacePrefix) == null ? void 0 : n[0]),
              n && typeof t == "string" && t.startsWith(n)
                ? e.replacePrefix[1] + t.substring(n.length)
                : t
            );
          };
          var ln = jo;
          function jo(t) {
            this["@@propmod"] = t;
          }
          function Do(t, e) {
            for (var n = H(e), r = n.length, o = !1, a = 0; a < r; ++a) {
              var c = n[a],
                d = e[c],
                C = f(t, c);
              d instanceof ln
                ? (y(t, c, d.execute(C)), (o = !0))
                : C !== d && (y(t, c, d), (o = !0));
            }
            return o;
          }
          (Pt.prototype._trans = function (t, e, n) {
            var r = this._tx || pt.trans,
              o = this.name,
              a =
                It &&
                typeof console < "u" &&
                console.createTask &&
                console.createTask(
                  "Dexie: "
                    .concat(t === "readonly" ? "read" : "write", " ")
                    .concat(this.name),
                );
            function c(q, I, R) {
              if (R.schema[o]) return e(R.idbtrans, R);
              throw new ft.NotFound("Table " + o + " not part of transaction");
            }
            var d = be();
            try {
              var C =
                r && r.db._novip === this.db._novip
                  ? r === pt.trans
                    ? r._promise(t, c, n)
                    : _e(
                        function () {
                          return r._promise(t, c, n);
                        },
                        { trans: r, transless: pt.transless || pt },
                      )
                  : (function q(I, R, T, L) {
                      if (
                        I.idbdb &&
                        (I._state.openComplete || pt.letThrough || I._vip)
                      ) {
                        var j = I._createTransaction(R, T, I._dbSchema);
                        try {
                          j.create(), (I._state.PR1398_maxLoop = 3);
                        } catch (D) {
                          return D.name === yt.InvalidState &&
                            I.isOpen() &&
                            0 < --I._state.PR1398_maxLoop
                            ? (console.warn("Dexie: Need to reopen db"),
                              I.close({ disableAutoOpen: !1 }),
                              I.open().then(function () {
                                return q(I, R, T, L);
                              }))
                            : Dt(D);
                        }
                        return j
                          ._promise(R, function (D, K) {
                            return _e(function () {
                              return (pt.trans = j), L(D, K, j);
                            });
                          })
                          .then(function (D) {
                            if (R === "readwrite")
                              try {
                                j.idbtrans.commit();
                              } catch {}
                            return R === "readonly"
                              ? D
                              : j._completion.then(function () {
                                  return D;
                                });
                          });
                      }
                      if (I._state.openComplete)
                        return Dt(new ft.DatabaseClosed(I._state.dbOpenError));
                      if (!I._state.isBeingOpened) {
                        if (!I._state.autoOpen)
                          return Dt(new ft.DatabaseClosed());
                        I.open().catch(St);
                      }
                      return I._state.dbReadyPromise.then(function () {
                        return q(I, R, T, L);
                      });
                    })(this.db, t, [this.name], c);
              return (
                a &&
                  ((C._consoleTask = a),
                  (C = C.catch(function (q) {
                    return console.trace(q), Dt(q);
                  }))),
                C
              );
            } finally {
              d && de();
            }
          }),
            (Pt.prototype.get = function (t, e) {
              var n = this;
              return t && t.constructor === Object
                ? this.where(t).first(e)
                : t == null
                  ? Dt(new ft.Type("Invalid argument to Table.get()"))
                  : this._trans("readonly", function (r) {
                      return n.core
                        .get({ trans: r, key: t })
                        .then(function (o) {
                          return n.hook.reading.fire(o);
                        });
                    }).then(e);
            }),
            (Pt.prototype.where = function (t) {
              if (typeof t == "string") return new this.db.WhereClause(this, t);
              if (O(t))
                return new this.db.WhereClause(
                  this,
                  "[".concat(t.join("+"), "]"),
                );
              var e = H(t);
              if (e.length === 1) return this.where(e[0]).equals(t[e[0]]);
              var n = this.schema.indexes
                .concat(this.schema.primKey)
                .filter(function (d) {
                  if (
                    d.compound &&
                    e.every(function (q) {
                      return 0 <= d.keyPath.indexOf(q);
                    })
                  ) {
                    for (var C = 0; C < e.length; ++C)
                      if (e.indexOf(d.keyPath[C]) === -1) return !1;
                    return !0;
                  }
                  return !1;
                })
                .sort(function (d, C) {
                  return d.keyPath.length - C.keyPath.length;
                })[0];
              if (n && this.db._maxKey !== je)
                return (
                  (c = n.keyPath.slice(0, e.length)),
                  this.where(c).equals(
                    c.map(function (d) {
                      return t[d];
                    }),
                  )
                );
              !n &&
                It &&
                console.warn(
                  "The query "
                    .concat(JSON.stringify(t), " on ")
                    .concat(this.name, " would benefit from a ") +
                    "compound index [".concat(e.join("+"), "]"),
                );
              var r = this.schema.idxByName;
              function o(d, C) {
                return Ot(d, C) === 0;
              }
              var c = e.reduce(
                  function (I, C) {
                    var q = I[0],
                      I = I[1],
                      R = r[C],
                      T = t[C];
                    return [
                      q || R,
                      q || !R
                        ? De(
                            I,
                            R && R.multi
                              ? function (L) {
                                  return (
                                    (L = f(L, C)),
                                    O(L) &&
                                      L.some(function (j) {
                                        return o(T, j);
                                      })
                                  );
                                }
                              : function (L) {
                                  return o(T, f(L, C));
                                },
                          )
                        : I,
                    ];
                  },
                  [null, null],
                ),
                a = c[0],
                c = c[1];
              return a
                ? this.where(a.name).equals(t[a.keyPath]).filter(c)
                : n
                  ? this.filter(c)
                  : this.where(e).equals("");
            }),
            (Pt.prototype.filter = function (t) {
              return this.toCollection().and(t);
            }),
            (Pt.prototype.count = function (t) {
              return this.toCollection().count(t);
            }),
            (Pt.prototype.offset = function (t) {
              return this.toCollection().offset(t);
            }),
            (Pt.prototype.limit = function (t) {
              return this.toCollection().limit(t);
            }),
            (Pt.prototype.each = function (t) {
              return this.toCollection().each(t);
            }),
            (Pt.prototype.toArray = function (t) {
              return this.toCollection().toArray(t);
            }),
            (Pt.prototype.toCollection = function () {
              return new this.db.Collection(new this.db.WhereClause(this));
            }),
            (Pt.prototype.orderBy = function (t) {
              return new this.db.Collection(
                new this.db.WhereClause(
                  this,
                  O(t) ? "[".concat(t.join("+"), "]") : t,
                ),
              );
            }),
            (Pt.prototype.reverse = function () {
              return this.toCollection().reverse();
            }),
            (Pt.prototype.mapToClass = function (t) {
              for (
                var e = this.db,
                  n = this.name,
                  r =
                    ((this.schema.mappedClass = t).prototype instanceof Co &&
                      (t = ((c) => {
                        var d = I,
                          C = c;
                        if (typeof C != "function" && C !== null)
                          throw new TypeError(
                            "Class extends value " +
                              String(C) +
                              " is not a constructor or null",
                          );
                        function q() {
                          this.constructor = d;
                        }
                        function I() {
                          return (
                            (c !== null && c.apply(this, arguments)) || this
                          );
                        }
                        return (
                          m(d, C),
                          (d.prototype =
                            C === null
                              ? Object.create(C)
                              : ((q.prototype = C.prototype), new q())),
                          Object.defineProperty(I.prototype, "db", {
                            get: function () {
                              return e;
                            },
                            enumerable: !1,
                            configurable: !0,
                          }),
                          (I.prototype.table = function () {
                            return n;
                          }),
                          I
                        );
                      })(t)),
                    new Set()),
                  o = t.prototype;
                o;
                o = s(o)
              )
                Object.getOwnPropertyNames(o).forEach(function (c) {
                  return r.add(c);
                });
              function a(c) {
                if (!c) return c;
                var d,
                  C = Object.create(t.prototype);
                for (d in c)
                  if (!r.has(d))
                    try {
                      C[d] = c[d];
                    } catch {}
                return C;
              }
              return (
                this.schema.readHook &&
                  this.hook.reading.unsubscribe(this.schema.readHook),
                (this.schema.readHook = a),
                this.hook("reading", a),
                t
              );
            }),
            (Pt.prototype.defineClass = function () {
              return this.mapToClass(function (t) {
                _(this, t);
              });
            }),
            (Pt.prototype.add = function (t, e) {
              var n = this,
                r = this.schema.primKey,
                o = r.auto,
                a = r.keyPath,
                c = t;
              return (
                a && o && (c = Tn(a)(t)),
                this._trans("readwrite", function (d) {
                  return n.core.mutate({
                    trans: d,
                    type: "add",
                    keys: e != null ? [e] : null,
                    values: [c],
                  });
                })
                  .then(function (d) {
                    return d.numFailures
                      ? ut.reject(d.failures[0])
                      : d.lastResult;
                  })
                  .then(function (d) {
                    if (a)
                      try {
                        y(t, a, d);
                      } catch {}
                    return d;
                  })
              );
            }),
            (Pt.prototype.upsert = function (t, e) {
              var n = this,
                r = this.schema.primKey.keyPath;
              return this._trans("readwrite", function (o) {
                return n.core.get({ trans: o, key: t }).then(function (a) {
                  var c = a ?? {};
                  return (
                    Do(c, e),
                    r && y(c, r, t),
                    n.core
                      .mutate({
                        trans: o,
                        type: "put",
                        values: [c],
                        keys: [t],
                        upsert: !0,
                        updates: { keys: [t], changeSpecs: [e] },
                      })
                      .then(function (d) {
                        return d.numFailures ? ut.reject(d.failures[0]) : !!a;
                      })
                  );
                });
              });
            }),
            (Pt.prototype.update = function (t, e) {
              return typeof t != "object" || O(t)
                ? this.where(":id").equals(t).modify(e)
                : (t = f(t, this.schema.primKey.keyPath)) === void 0
                  ? Dt(
                      new ft.InvalidArgument(
                        "Given object does not contain its primary key",
                      ),
                    )
                  : this.where(":id").equals(t).modify(e);
            }),
            (Pt.prototype.put = function (t, e) {
              var n = this,
                r = this.schema.primKey,
                o = r.auto,
                a = r.keyPath,
                c = t;
              return (
                a && o && (c = Tn(a)(t)),
                this._trans("readwrite", function (d) {
                  return n.core.mutate({
                    trans: d,
                    type: "put",
                    values: [c],
                    keys: e != null ? [e] : null,
                  });
                })
                  .then(function (d) {
                    return d.numFailures
                      ? ut.reject(d.failures[0])
                      : d.lastResult;
                  })
                  .then(function (d) {
                    if (a)
                      try {
                        y(t, a, d);
                      } catch {}
                    return d;
                  })
              );
            }),
            (Pt.prototype.delete = function (t) {
              var e = this;
              return this._trans("readwrite", function (n) {
                return e.core
                  .mutate({ trans: n, type: "delete", keys: [t] })
                  .then(function (r) {
                    return Cn(e, [t], r);
                  })
                  .then(function (r) {
                    return r.numFailures ? ut.reject(r.failures[0]) : void 0;
                  });
              });
            }),
            (Pt.prototype.clear = function () {
              var t = this;
              return this._trans("readwrite", function (e) {
                return t.core
                  .mutate({ trans: e, type: "deleteRange", range: To })
                  .then(function (n) {
                    return Cn(t, null, n);
                  });
              }).then(function (e) {
                return e.numFailures ? ut.reject(e.failures[0]) : void 0;
              });
            }),
            (Pt.prototype.bulkGet = function (t) {
              var e = this;
              return this._trans("readonly", function (n) {
                return e.core.getMany({ keys: t, trans: n }).then(function (r) {
                  return r.map(function (o) {
                    return e.hook.reading.fire(o);
                  });
                });
              });
            }),
            (Pt.prototype.bulkAdd = function (t, e, n) {
              var r = this,
                o = Array.isArray(e) ? e : void 0,
                a = (n = n || (o ? void 0 : e)) ? n.allKeys : void 0;
              return this._trans("readwrite", function (c) {
                var d = r.schema.primKey,
                  q = d.auto,
                  d = d.keyPath;
                if (d && o)
                  throw new ft.InvalidArgument(
                    "bulkAdd(): keys argument invalid on tables with inbound keys",
                  );
                if (o && o.length !== t.length)
                  throw new ft.InvalidArgument(
                    "Arguments objects and keys must have the same length",
                  );
                var C = t.length,
                  q = d && q ? t.map(Tn(d)) : t;
                return r.core
                  .mutate({
                    trans: c,
                    type: "add",
                    keys: o,
                    values: q,
                    wantResults: a,
                  })
                  .then(function (I) {
                    var R = I.numFailures,
                      T = I.failures;
                    if (R === 0) return a ? I.results : I.lastResult;
                    throw new jt(
                      ""
                        .concat(r.name, ".bulkAdd(): ")
                        .concat(R, " of ")
                        .concat(C, " operations failed"),
                      T,
                    );
                  });
              });
            }),
            (Pt.prototype.bulkPut = function (t, e, n) {
              var r = this,
                o = Array.isArray(e) ? e : void 0,
                a = (n = n || (o ? void 0 : e)) ? n.allKeys : void 0;
              return this._trans("readwrite", function (c) {
                var d = r.schema.primKey,
                  q = d.auto,
                  d = d.keyPath;
                if (d && o)
                  throw new ft.InvalidArgument(
                    "bulkPut(): keys argument invalid on tables with inbound keys",
                  );
                if (o && o.length !== t.length)
                  throw new ft.InvalidArgument(
                    "Arguments objects and keys must have the same length",
                  );
                var C = t.length,
                  q = d && q ? t.map(Tn(d)) : t;
                return r.core
                  .mutate({
                    trans: c,
                    type: "put",
                    keys: o,
                    values: q,
                    wantResults: a,
                  })
                  .then(function (I) {
                    var R = I.numFailures,
                      T = I.failures;
                    if (R === 0) return a ? I.results : I.lastResult;
                    throw new jt(
                      ""
                        .concat(r.name, ".bulkPut(): ")
                        .concat(R, " of ")
                        .concat(C, " operations failed"),
                      T,
                    );
                  });
              });
            }),
            (Pt.prototype.bulkUpdate = function (t) {
              var e = this,
                n = this.core,
                r = t.map(function (c) {
                  return c.key;
                }),
                o = t.map(function (c) {
                  return c.changes;
                }),
                a = [];
              return this._trans("readwrite", function (c) {
                return n
                  .getMany({ trans: c, keys: r, cache: "clone" })
                  .then(function (d) {
                    var C = [],
                      q = [],
                      I =
                        (t.forEach(function (R, T) {
                          var L = R.key,
                            j = R.changes,
                            D = d[T];
                          if (D) {
                            for (
                              var K = 0, $ = Object.keys(j);
                              K < $.length;
                              K++
                            ) {
                              var z = $[K],
                                V = j[z];
                              if (z === e.schema.primKey.keyPath) {
                                if (Ot(V, L) !== 0)
                                  throw new ft.Constraint(
                                    "Cannot update primary key in bulkUpdate()",
                                  );
                              } else y(D, z, V);
                            }
                            a.push(T), C.push(L), q.push(D);
                          }
                        }),
                        C.length);
                    return n
                      .mutate({
                        trans: c,
                        type: "put",
                        keys: C,
                        values: q,
                        updates: { keys: r, changeSpecs: o },
                      })
                      .then(function (R) {
                        var T = R.numFailures,
                          L = R.failures;
                        if (T === 0) return I;
                        for (var j = 0, D = Object.keys(L); j < D.length; j++) {
                          var K,
                            $ = D[j],
                            z = a[Number($)];
                          z != null && ((K = L[$]), delete L[$], (L[z] = K));
                        }
                        throw new jt(
                          ""
                            .concat(e.name, ".bulkUpdate(): ")
                            .concat(T, " of ")
                            .concat(I, " operations failed"),
                          L,
                        );
                      });
                  });
              });
            }),
            (Pt.prototype.bulkDelete = function (t) {
              var e = this,
                n = t.length;
              return this._trans("readwrite", function (r) {
                return e.core
                  .mutate({ trans: r, type: "delete", keys: t })
                  .then(function (o) {
                    return Cn(e, t, o);
                  });
              }).then(function (r) {
                var o = r.numFailures,
                  a = r.failures;
                if (o === 0) return r.lastResult;
                throw new jt(
                  ""
                    .concat(e.name, ".bulkDelete(): ")
                    .concat(o, " of ")
                    .concat(n, " operations failed"),
                  a,
                );
              });
            });
          var No = Pt;
          function Pt() {}
          function fn(t) {
            function e(c, d) {
              if (d) {
                for (var C = arguments.length, q = new Array(C - 1); --C; )
                  q[C - 1] = arguments[C];
                return n[c].subscribe.apply(null, q), t;
              }
              if (typeof c == "string") return n[c];
            }
            var n = {};
            e.addEventType = a;
            for (var r = 1, o = arguments.length; r < o; ++r) a(arguments[r]);
            return e;
            function a(c, d, C) {
              var q, I;
              if (typeof c != "object")
                return (
                  (d = d || nn),
                  (I = {
                    subscribers: [],
                    fire: (C = C || St),
                    subscribe: function (R) {
                      I.subscribers.indexOf(R) === -1 &&
                        (I.subscribers.push(R), (I.fire = d(I.fire, R)));
                    },
                    unsubscribe: function (R) {
                      (I.subscribers = I.subscribers.filter(function (T) {
                        return T !== R;
                      })),
                        (I.fire = I.subscribers.reduce(d, C));
                    },
                  }),
                  (n[c] = e[c] = I)
                );
              H((q = c)).forEach(function (R) {
                var T = q[R];
                if (O(T)) a(R, q[R][0], q[R][1]);
                else {
                  if (T !== "asap")
                    throw new ft.InvalidArgument("Invalid event config");
                  var L = a(R, qt, function () {
                    for (var j = arguments.length, D = new Array(j); j--; )
                      D[j] = arguments[j];
                    L.subscribers.forEach(function (K) {
                      U(function () {
                        K.apply(null, D);
                      });
                    });
                  });
                }
              });
            }
          }
          function hn(t, e) {
            return E(e).from({ prototype: t }), e;
          }
          function Ze(t, e) {
            return (
              !(t.filter || t.algorithm || t.or) &&
              (e ? t.justLimit : !t.replayFilter)
            );
          }
          function ir(t, e) {
            t.filter = De(t.filter, e);
          }
          function ar(t, e, n) {
            var r = t.replayFilter;
            (t.replayFilter = r
              ? function () {
                  return De(r(), e());
                }
              : e),
              (t.justLimit = n && !r);
          }
          function Pn(t, e) {
            if (t.isPrimKey) return e.primaryKey;
            var n = e.getIndexByKeyPath(t.index);
            if (n) return n;
            throw new ft.Schema(
              "KeyPath " +
                t.index +
                " on object store " +
                e.name +
                " is not indexed",
            );
          }
          function Mo(t, e, n) {
            var r = Pn(t, e.schema);
            return e.openCursor({
              trans: n,
              values: !t.keysOnly,
              reverse: t.dir === "prev",
              unique: !!t.unique,
              query: { index: r, range: t.range },
            });
          }
          function In(t, e, n, r) {
            var o,
              a,
              c = t.replayFilter ? De(t.filter, t.replayFilter()) : t.filter;
            return t.or
              ? ((o = {}),
                (a = function (d, C, q) {
                  var I, R;
                  (c &&
                    !c(
                      C,
                      q,
                      function (T) {
                        return C.stop(T);
                      },
                      function (T) {
                        return C.fail(T);
                      },
                    )) ||
                    ((R = "" + (I = C.primaryKey)) == "[object ArrayBuffer]" &&
                      (R = "" + new Uint8Array(I)),
                    w(o, R)) ||
                    ((o[R] = !0), e(d, C, q));
                }),
                Promise.all([
                  t.or._iterate(a, n),
                  Uo(Mo(t, r, n), t.algorithm, a, !t.keysOnly && t.valueMapper),
                ]))
              : Uo(
                  Mo(t, r, n),
                  De(t.algorithm, c),
                  e,
                  !t.keysOnly && t.valueMapper,
                );
          }
          function Uo(t, e, n, r) {
            var o = xt(
              r
                ? function (a, c, d) {
                    return n(r(a), c, d);
                  }
                : n,
            );
            return t.then(function (a) {
              if (a)
                return a.start(function () {
                  var c = function () {
                    return a.continue();
                  };
                  (e &&
                    !e(
                      a,
                      function (d) {
                        return (c = d);
                      },
                      function (d) {
                        a.stop(d), (c = St);
                      },
                      function (d) {
                        a.fail(d), (c = St);
                      },
                    )) ||
                    o(a.value, a, function (d) {
                      return (c = d);
                    }),
                    c();
                });
            });
          }
          (Et.prototype._read = function (t, e) {
            var n = this._ctx;
            return n.error
              ? n.table._trans(null, Dt.bind(null, n.error))
              : n.table._trans("readonly", t).then(e);
          }),
            (Et.prototype._write = function (t) {
              var e = this._ctx;
              return e.error
                ? e.table._trans(null, Dt.bind(null, e.error))
                : e.table._trans("readwrite", t, "locked");
            }),
            (Et.prototype._addAlgorithm = function (t) {
              var e = this._ctx;
              e.algorithm = De(e.algorithm, t);
            }),
            (Et.prototype._iterate = function (t, e) {
              return In(this._ctx, t, e, this._ctx.table.core);
            }),
            (Et.prototype.clone = function (t) {
              var e = Object.create(this.constructor.prototype),
                n = Object.create(this._ctx);
              return t && _(n, t), (e._ctx = n), e;
            }),
            (Et.prototype.raw = function () {
              return (this._ctx.valueMapper = null), this;
            }),
            (Et.prototype.each = function (t) {
              var e = this._ctx;
              return this._read(function (n) {
                return In(e, t, n, e.table.core);
              });
            }),
            (Et.prototype.count = function (t) {
              var e = this;
              return this._read(function (n) {
                var r,
                  o = e._ctx,
                  a = o.table.core;
                return Ze(o, !0)
                  ? a
                      .count({
                        trans: n,
                        query: { index: Pn(o, a.schema), range: o.range },
                      })
                      .then(function (c) {
                        return Math.min(c, o.limit);
                      })
                  : ((r = 0),
                    In(
                      o,
                      function () {
                        return ++r, !1;
                      },
                      n,
                      a,
                    ).then(function () {
                      return r;
                    }));
              }).then(t);
            }),
            (Et.prototype.sortBy = function (t, e) {
              var n = t.split(".").reverse(),
                r = n[0],
                o = n.length - 1;
              function a(C, q) {
                return q ? a(C[n[q]], q - 1) : C[r];
              }
              var c = this._ctx.dir === "next" ? 1 : -1;
              function d(C, q) {
                return Ot(a(C, o), a(q, o)) * c;
              }
              return this.toArray(function (C) {
                return C.sort(d);
              }).then(e);
            }),
            (Et.prototype.toArray = function (t) {
              var e = this;
              return this._read(function (n) {
                var r,
                  o,
                  a,
                  c = e._ctx;
                return Ze(c, !0) && 0 < c.limit
                  ? ((r = c.valueMapper),
                    (o = Pn(c, c.table.core.schema)),
                    c.table.core
                      .query({
                        trans: n,
                        limit: c.limit,
                        values: !0,
                        direction: c.dir === "prev" ? "prev" : void 0,
                        query: { index: o, range: c.range },
                      })
                      .then(function (d) {
                        return (d = d.result), r ? d.map(r) : d;
                      }))
                  : ((a = []),
                    In(
                      c,
                      function (d) {
                        return a.push(d);
                      },
                      n,
                      c.table.core,
                    ).then(function () {
                      return a;
                    }));
              }, t);
            }),
            (Et.prototype.offset = function (t) {
              var e = this._ctx;
              return (
                t <= 0 ||
                  ((e.offset += t),
                  Ze(e)
                    ? ar(e, function () {
                        var n = t;
                        return function (r, o) {
                          return (
                            n === 0 ||
                            (n === 1
                              ? --n
                              : o(function () {
                                  r.advance(n), (n = 0);
                                }),
                            !1)
                          );
                        };
                      })
                    : ar(e, function () {
                        var n = t;
                        return function () {
                          return --n < 0;
                        };
                      })),
                this
              );
            }),
            (Et.prototype.limit = function (t) {
              return (
                (this._ctx.limit = Math.min(this._ctx.limit, t)),
                ar(
                  this._ctx,
                  function () {
                    var e = t;
                    return function (n, r, o) {
                      return --e <= 0 && r(o), 0 <= e;
                    };
                  },
                  !0,
                ),
                this
              );
            }),
            (Et.prototype.until = function (t, e) {
              return (
                ir(this._ctx, function (n, r, o) {
                  return !t(n.value) || (r(o), e);
                }),
                this
              );
            }),
            (Et.prototype.first = function (t) {
              return this.limit(1)
                .toArray(function (e) {
                  return e[0];
                })
                .then(t);
            }),
            (Et.prototype.last = function (t) {
              return this.reverse().first(t);
            }),
            (Et.prototype.filter = function (t) {
              var e;
              return (
                ir(this._ctx, function (n) {
                  return t(n.value);
                }),
                ((e = this._ctx).isMatch = De(e.isMatch, t)),
                this
              );
            }),
            (Et.prototype.and = function (t) {
              return this.filter(t);
            }),
            (Et.prototype.or = function (t) {
              return new this.db.WhereClause(this._ctx.table, t, this);
            }),
            (Et.prototype.reverse = function () {
              return (
                (this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev"),
                this._ondirectionchange &&
                  this._ondirectionchange(this._ctx.dir),
                this
              );
            }),
            (Et.prototype.desc = function () {
              return this.reverse();
            }),
            (Et.prototype.eachKey = function (t) {
              var e = this._ctx;
              return (
                (e.keysOnly = !e.isMatch),
                this.each(function (n, r) {
                  t(r.key, r);
                })
              );
            }),
            (Et.prototype.eachUniqueKey = function (t) {
              return (this._ctx.unique = "unique"), this.eachKey(t);
            }),
            (Et.prototype.eachPrimaryKey = function (t) {
              var e = this._ctx;
              return (
                (e.keysOnly = !e.isMatch),
                this.each(function (n, r) {
                  t(r.primaryKey, r);
                })
              );
            }),
            (Et.prototype.keys = function (t) {
              var e = this._ctx,
                n = ((e.keysOnly = !e.isMatch), []);
              return this.each(function (r, o) {
                n.push(o.key);
              })
                .then(function () {
                  return n;
                })
                .then(t);
            }),
            (Et.prototype.primaryKeys = function (t) {
              var e = this._ctx;
              if (Ze(e, !0) && 0 < e.limit)
                return this._read(function (r) {
                  var o = Pn(e, e.table.core.schema);
                  return e.table.core.query({
                    trans: r,
                    values: !1,
                    limit: e.limit,
                    direction: e.dir === "prev" ? "prev" : void 0,
                    query: { index: o, range: e.range },
                  });
                })
                  .then(function (r) {
                    return r.result;
                  })
                  .then(t);
              e.keysOnly = !e.isMatch;
              var n = [];
              return this.each(function (r, o) {
                n.push(o.primaryKey);
              })
                .then(function () {
                  return n;
                })
                .then(t);
            }),
            (Et.prototype.uniqueKeys = function (t) {
              return (this._ctx.unique = "unique"), this.keys(t);
            }),
            (Et.prototype.firstKey = function (t) {
              return this.limit(1)
                .keys(function (e) {
                  return e[0];
                })
                .then(t);
            }),
            (Et.prototype.lastKey = function (t) {
              return this.reverse().firstKey(t);
            }),
            (Et.prototype.distinct = function () {
              var t,
                e = this._ctx,
                e = e.index && e.table.schema.idxByName[e.index];
              return (
                e &&
                  e.multi &&
                  ((t = {}),
                  ir(this._ctx, function (r) {
                    var r = r.primaryKey.toString(),
                      o = w(t, r);
                    return (t[r] = !0), !o;
                  })),
                this
              );
            }),
            (Et.prototype.modify = function (t) {
              var e = this,
                n = this._ctx;
              return this._write(function (r) {
                function o(D, K) {
                  var $ = K.failures;
                  T += D - K.numFailures;
                  for (var z = 0, V = H($); z < V.length; z++) {
                    var J = V[z];
                    R.push($[J]);
                  }
                }
                var a =
                    typeof t == "function"
                      ? t
                      : function (D) {
                          return Do(D, t);
                        },
                  c = n.table.core,
                  I = c.schema.primaryKey,
                  d = I.outbound,
                  C = I.extractKey,
                  q = 200,
                  I = e.db._options.modifyChunkSize,
                  R =
                    (I &&
                      (q =
                        typeof I == "object" ? I[c.name] || I["*"] || 200 : I),
                    []),
                  T = 0,
                  L = [],
                  j = t === Ko;
                return e
                  .clone()
                  .primaryKeys()
                  .then(function (D) {
                    function K(z) {
                      var V = Math.min(q, D.length - z),
                        J = D.slice(z, z + V);
                      return (
                        j
                          ? Promise.resolve([])
                          : c.getMany({ trans: r, keys: J, cache: "immutable" })
                      ).then(function (et) {
                        var it = [],
                          rt = [],
                          ct = d ? [] : null,
                          at = j ? J : [];
                        if (!j)
                          for (var lt = 0; lt < V; ++lt) {
                            var tt = et[lt],
                              dt = { value: F(tt), primKey: D[z + lt] };
                            a.call(dt, dt.value, dt) !== !1 &&
                              (dt.value == null
                                ? at.push(D[z + lt])
                                : d || Ot(C(tt), C(dt.value)) === 0
                                  ? (rt.push(dt.value), d && ct.push(D[z + lt]))
                                  : (at.push(D[z + lt]), it.push(dt.value)));
                          }
                        return Promise.resolve(
                          0 < it.length &&
                            c
                              .mutate({ trans: r, type: "add", values: it })
                              .then(function (mt) {
                                for (var vt in mt.failures)
                                  at.splice(parseInt(vt), 1);
                                o(it.length, mt);
                              }),
                        )
                          .then(function () {
                            return (
                              (0 < rt.length || ($ && typeof t == "object")) &&
                              c
                                .mutate({
                                  trans: r,
                                  type: "put",
                                  keys: ct,
                                  values: rt,
                                  criteria: $,
                                  changeSpec: typeof t != "function" && t,
                                  isAdditionalChunk: 0 < z,
                                })
                                .then(function (mt) {
                                  return o(rt.length, mt);
                                })
                            );
                          })
                          .then(function () {
                            return (
                              (0 < at.length || ($ && j)) &&
                              c
                                .mutate({
                                  trans: r,
                                  type: "delete",
                                  keys: at,
                                  criteria: $,
                                  isAdditionalChunk: 0 < z,
                                })
                                .then(function (mt) {
                                  return Cn(n.table, at, mt);
                                })
                                .then(function (mt) {
                                  return o(at.length, mt);
                                })
                            );
                          })
                          .then(function () {
                            return D.length > z + V && K(z + q);
                          });
                      });
                    }
                    var $ = Ze(n) &&
                      n.limit === 1 / 0 &&
                      (typeof t != "function" || j) && {
                        index: n.index,
                        range: n.range,
                      };
                    return K(0).then(function () {
                      if (0 < R.length)
                        throw new Rt(
                          "Error modifying one or more objects",
                          R,
                          T,
                          L,
                        );
                      return D.length;
                    });
                  });
              });
            }),
            (Et.prototype.delete = function () {
              var t = this._ctx,
                e = t.range;
              return !Ze(t) ||
                t.table.schema.yProps ||
                (!t.isPrimKey && e.type !== 3)
                ? this.modify(Ko)
                : this._write(function (n) {
                    var r = t.table.core.schema.primaryKey,
                      o = e;
                    return t.table.core
                      .count({ trans: n, query: { index: r, range: o } })
                      .then(function (a) {
                        return t.table.core
                          .mutate({ trans: n, type: "deleteRange", range: o })
                          .then(function (C) {
                            var d = C.failures,
                              C = C.numFailures;
                            if (C)
                              throw new Rt(
                                "Could not delete some values",
                                Object.keys(d).map(function (q) {
                                  return d[q];
                                }),
                                a - C,
                              );
                            return a - C;
                          });
                      });
                  });
            });
          var xa = Et;
          function Et() {}
          var Ko = function (t, e) {
            return (e.value = null);
          };
          function Aa(t, e) {
            return t < e ? -1 : t === e ? 0 : 1;
          }
          function Oa(t, e) {
            return e < t ? -1 : t === e ? 0 : 1;
          }
          function Jt(t, e, n) {
            return (
              (t = t instanceof Fo ? new t.Collection(t) : t),
              (t._ctx.error = new (n || TypeError)(e)),
              t
            );
          }
          function Xe(t) {
            return new t.Collection(t, function () {
              return Lo("");
            }).limit(0);
          }
          function jn(L, e, n, r) {
            var o,
              a,
              c,
              d,
              C,
              q,
              I,
              R = n.length;
            if (
              !n.every(function (D) {
                return typeof D == "string";
              })
            )
              return Jt(L, Ro);
            function T(D) {
              (o =
                D === "next"
                  ? function ($) {
                      return $.toUpperCase();
                    }
                  : function ($) {
                      return $.toLowerCase();
                    }),
                (a =
                  D === "next"
                    ? function ($) {
                        return $.toLowerCase();
                      }
                    : function ($) {
                        return $.toUpperCase();
                      }),
                (c = D === "next" ? Aa : Oa);
              var K = n
                .map(function ($) {
                  return { lower: a($), upper: o($) };
                })
                .sort(function ($, z) {
                  return c($.lower, z.lower);
                });
              (d = K.map(function ($) {
                return $.upper;
              })),
                (C = K.map(function ($) {
                  return $.lower;
                })),
                (I = (q = D) === "next" ? "" : r);
            }
            T("next");
            var L = new L.Collection(L, function () {
                return Ae(d[0], C[R - 1] + r);
              }),
              j =
                ((L._ondirectionchange = function (D) {
                  T(D);
                }),
                0);
            return (
              L._addAlgorithm(function (D, K, $) {
                var z = D.key;
                if (typeof z == "string") {
                  var V = a(z);
                  if (e(V, C, j)) return !0;
                  for (var J = null, et = j; et < R; ++et) {
                    var it = ((rt, ct, at, lt, tt, dt) => {
                      for (
                        var mt = Math.min(rt.length, lt.length),
                          vt = -1,
                          At = 0;
                        At < mt;
                        ++At
                      ) {
                        var te = ct[At];
                        if (te !== lt[At])
                          return tt(rt[At], at[At]) < 0
                            ? rt.substr(0, At) + at[At] + at.substr(At + 1)
                            : tt(rt[At], lt[At]) < 0
                              ? rt.substr(0, At) + lt[At] + at.substr(At + 1)
                              : 0 <= vt
                                ? rt.substr(0, vt) + ct[vt] + at.substr(vt + 1)
                                : null;
                        tt(rt[At], te) < 0 && (vt = At);
                      }
                      return mt < lt.length && dt === "next"
                        ? rt + at.substr(rt.length)
                        : mt < rt.length && dt === "prev"
                          ? rt.substr(0, at.length)
                          : vt < 0
                            ? null
                            : rt.substr(0, vt) + lt[vt] + at.substr(vt + 1);
                    })(z, V, d[et], C[et], c, q);
                    it === null && J === null
                      ? (j = et + 1)
                      : (J === null || 0 < c(J, it)) && (J = it);
                  }
                  K(
                    J !== null
                      ? function () {
                          D.continue(J + I);
                        }
                      : $,
                  );
                }
                return !1;
              }),
              L
            );
          }
          function Ae(t, e, n, r) {
            return { type: 2, lower: t, upper: e, lowerOpen: n, upperOpen: r };
          }
          function Lo(t) {
            return { type: 1, lower: t, upper: t };
          }
          Object.defineProperty(Kt.prototype, "Collection", {
            get: function () {
              return this._ctx.table.db.Collection;
            },
            enumerable: !1,
            configurable: !0,
          }),
            (Kt.prototype.between = function (t, e, n, r) {
              (n = n !== !1), (r = r === !0);
              try {
                return 0 < this._cmp(t, e) ||
                  (this._cmp(t, e) === 0 && (n || r) && (!n || !r))
                  ? Xe(this)
                  : new this.Collection(this, function () {
                      return Ae(t, e, !n, !r);
                    });
              } catch {
                return Jt(this, me);
              }
            }),
            (Kt.prototype.equals = function (t) {
              return t == null
                ? Jt(this, me)
                : new this.Collection(this, function () {
                    return Lo(t);
                  });
            }),
            (Kt.prototype.above = function (t) {
              return t == null
                ? Jt(this, me)
                : new this.Collection(this, function () {
                    return Ae(t, void 0, !0);
                  });
            }),
            (Kt.prototype.aboveOrEqual = function (t) {
              return t == null
                ? Jt(this, me)
                : new this.Collection(this, function () {
                    return Ae(t, void 0, !1);
                  });
            }),
            (Kt.prototype.below = function (t) {
              return t == null
                ? Jt(this, me)
                : new this.Collection(this, function () {
                    return Ae(void 0, t, !1, !0);
                  });
            }),
            (Kt.prototype.belowOrEqual = function (t) {
              return t == null
                ? Jt(this, me)
                : new this.Collection(this, function () {
                    return Ae(void 0, t);
                  });
            }),
            (Kt.prototype.startsWith = function (t) {
              return typeof t != "string"
                ? Jt(this, Ro)
                : this.between(t, t + je, !0, !0);
            }),
            (Kt.prototype.startsWithIgnoreCase = function (t) {
              return t === ""
                ? this.startsWith(t)
                : jn(
                    this,
                    function (e, n) {
                      return e.indexOf(n[0]) === 0;
                    },
                    [t],
                    je,
                  );
            }),
            (Kt.prototype.equalsIgnoreCase = function (t) {
              return jn(
                this,
                function (e, n) {
                  return e === n[0];
                },
                [t],
                "",
              );
            }),
            (Kt.prototype.anyOfIgnoreCase = function () {
              var t = wt.apply(Bt, arguments);
              return t.length === 0
                ? Xe(this)
                : jn(
                    this,
                    function (e, n) {
                      return n.indexOf(e) !== -1;
                    },
                    t,
                    "",
                  );
            }),
            (Kt.prototype.startsWithAnyOfIgnoreCase = function () {
              var t = wt.apply(Bt, arguments);
              return t.length === 0
                ? Xe(this)
                : jn(
                    this,
                    function (e, n) {
                      return n.some(function (r) {
                        return e.indexOf(r) === 0;
                      });
                    },
                    t,
                    je,
                  );
            }),
            (Kt.prototype.anyOf = function () {
              var t,
                e,
                n = this,
                r = wt.apply(Bt, arguments),
                o = this._cmp;
              try {
                r.sort(o);
              } catch {
                return Jt(this, me);
              }
              return r.length === 0
                ? Xe(this)
                : (((t = new this.Collection(this, function () {
                    return Ae(r[0], r[r.length - 1]);
                  }))._ondirectionchange = function (a) {
                    (o = a === "next" ? n._ascending : n._descending),
                      r.sort(o);
                  }),
                  (e = 0),
                  t._addAlgorithm(function (a, c, d) {
                    for (var C = a.key; 0 < o(C, r[e]); )
                      if (++e === r.length) return c(d), !1;
                    return (
                      o(C, r[e]) === 0 ||
                      (c(function () {
                        a.continue(r[e]);
                      }),
                      !1)
                    );
                  }),
                  t);
            }),
            (Kt.prototype.notEqual = function (t) {
              return this.inAnyRange(
                [
                  [-1 / 0, t],
                  [t, this.db._maxKey],
                ],
                { includeLowers: !1, includeUppers: !1 },
              );
            }),
            (Kt.prototype.noneOf = function () {
              var t = wt.apply(Bt, arguments);
              if (t.length === 0) return new this.Collection(this);
              try {
                t.sort(this._ascending);
              } catch {
                return Jt(this, me);
              }
              var e = t.reduce(function (n, r) {
                return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
              }, null);
              return (
                e.push([t[t.length - 1], this.db._maxKey]),
                this.inAnyRange(e, { includeLowers: !1, includeUppers: !1 })
              );
            }),
            (Kt.prototype.inAnyRange = function (t, $) {
              var n = this,
                r = this._cmp,
                o = this._ascending,
                a = this._descending,
                c = this._min,
                d = this._max;
              if (t.length === 0) return Xe(this);
              if (
                !t.every(function (z) {
                  return (
                    z[0] !== void 0 && z[1] !== void 0 && o(z[0], z[1]) <= 0
                  );
                })
              )
                return Jt(
                  this,
                  "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",
                  ft.InvalidArgument,
                );
              var C = !$ || $.includeLowers !== !1,
                q = $ && $.includeUppers === !0,
                I,
                R = o;
              function T(z, V) {
                return R(z[0], V[0]);
              }
              try {
                (I = t.reduce(function (z, V) {
                  for (var J = 0, et = z.length; J < et; ++J) {
                    var it = z[J];
                    if (r(V[0], it[1]) < 0 && 0 < r(V[1], it[0])) {
                      (it[0] = c(it[0], V[0])), (it[1] = d(it[1], V[1]));
                      break;
                    }
                  }
                  return J === et && z.push(V), z;
                }, [])).sort(T);
              } catch {
                return Jt(this, me);
              }
              var L = 0,
                j = q
                  ? function (z) {
                      return 0 < o(z, I[L][1]);
                    }
                  : function (z) {
                      return 0 <= o(z, I[L][1]);
                    },
                D = C
                  ? function (z) {
                      return 0 < a(z, I[L][0]);
                    }
                  : function (z) {
                      return 0 <= a(z, I[L][0]);
                    },
                K = j,
                $ = new this.Collection(this, function () {
                  return Ae(I[0][0], I[I.length - 1][1], !C, !q);
                });
              return (
                ($._ondirectionchange = function (z) {
                  (R = z === "next" ? ((K = j), o) : ((K = D), a)), I.sort(T);
                }),
                $._addAlgorithm(function (z, V, J) {
                  for (var et, it = z.key; K(it); )
                    if (++L === I.length) return V(J), !1;
                  return (
                    (!j((et = it)) && !D(et)) ||
                    (n._cmp(it, I[L][1]) === 0 ||
                      n._cmp(it, I[L][0]) === 0 ||
                      V(function () {
                        R === o ? z.continue(I[L][0]) : z.continue(I[L][1]);
                      }),
                    !1)
                  );
                }),
                $
              );
            }),
            (Kt.prototype.startsWithAnyOf = function () {
              var t = wt.apply(Bt, arguments);
              return t.every(function (e) {
                return typeof e == "string";
              })
                ? t.length === 0
                  ? Xe(this)
                  : this.inAnyRange(
                      t.map(function (e) {
                        return [e, e + je];
                      }),
                    )
                : Jt(this, "startsWithAnyOf() only works with strings");
            });
          var Fo = Kt;
          function Kt() {}
          function ae(t) {
            return xt(function (e) {
              return pn(e), t(e.target.error), !1;
            });
          }
          function pn(t) {
            t.stopPropagation && t.stopPropagation(),
              t.preventDefault && t.preventDefault();
          }
          var dn = "storagemutated",
            sr = "x-storagemutated-1",
            Oe = fn(null, dn),
            ka =
              ((ce.prototype._lock = function () {
                return (
                  g(!pt.global),
                  ++this._reculock,
                  this._reculock !== 1 || pt.global || (pt.lockOwnerFor = this),
                  this
                );
              }),
              (ce.prototype._unlock = function () {
                if ((g(!pt.global), --this._reculock == 0))
                  for (
                    pt.global || (pt.lockOwnerFor = null);
                    0 < this._blockedFuncs.length && !this._locked();

                  ) {
                    var t = this._blockedFuncs.shift();
                    try {
                      Ie(t[1], t[0]);
                    } catch {}
                  }
                return this;
              }),
              (ce.prototype._locked = function () {
                return this._reculock && pt.lockOwnerFor !== this;
              }),
              (ce.prototype.create = function (t) {
                var e = this;
                if (this.mode) {
                  var n = this.db.idbdb,
                    r = this.db._state.dbOpenError;
                  if ((g(!this.idbtrans), !t && !n))
                    switch (r && r.name) {
                      case "DatabaseClosedError":
                        throw new ft.DatabaseClosed(r);
                      case "MissingAPIError":
                        throw new ft.MissingAPI(r.message, r);
                      default:
                        throw new ft.OpenFailed(r);
                    }
                  if (!this.active) throw new ft.TransactionInactive();
                  g(this._completion._state === null),
                    ((t = this.idbtrans =
                      t ||
                      (this.db.core || n).transaction(
                        this.storeNames,
                        this.mode,
                        { durability: this.chromeTransactionDurability },
                      )).onerror = xt(function (o) {
                      pn(o), e._reject(t.error);
                    })),
                    (t.onabort = xt(function (o) {
                      pn(o),
                        e.active && e._reject(new ft.Abort(t.error)),
                        (e.active = !1),
                        e.on("abort").fire(o);
                    })),
                    (t.oncomplete = xt(function () {
                      (e.active = !1),
                        e._resolve(),
                        "mutatedParts" in t &&
                          Oe.storagemutated.fire(t.mutatedParts);
                    }));
                }
                return this;
              }),
              (ce.prototype._promise = function (t, e, n) {
                var r,
                  o = this;
                return t === "readwrite" && this.mode !== "readwrite"
                  ? Dt(new ft.ReadOnly("Transaction is readonly"))
                  : this.active
                    ? this._locked()
                      ? new ut(function (a, c) {
                          o._blockedFuncs.push([
                            function () {
                              o._promise(t, e, n).then(a, c);
                            },
                            pt,
                          ]);
                        })
                      : n
                        ? _e(function () {
                            var a = new ut(function (c, d) {
                              o._lock();
                              var C = e(c, d, o);
                              C && C.then && C.then(c, d);
                            });
                            return (
                              a.finally(function () {
                                return o._unlock();
                              }),
                              (a._lib = !0),
                              a
                            );
                          })
                        : (((r = new ut(function (a, c) {
                            var d = e(a, c, o);
                            d && d.then && d.then(a, c);
                          }))._lib = !0),
                          r)
                    : Dt(new ft.TransactionInactive());
              }),
              (ce.prototype._root = function () {
                return this.parent ? this.parent._root() : this;
              }),
              (ce.prototype.waitFor = function (t) {
                var e,
                  n = this._root(),
                  r = ut.resolve(t),
                  o =
                    (n._waitingFor
                      ? (n._waitingFor = n._waitingFor.then(function () {
                          return r;
                        }))
                      : ((n._waitingFor = r),
                        (n._waitingQueue = []),
                        (e = n.idbtrans.objectStore(n.storeNames[0])),
                        (function a() {
                          for (++n._spinCount; n._waitingQueue.length; )
                            n._waitingQueue.shift()();
                          n._waitingFor && (e.get(-1 / 0).onsuccess = a);
                        })()),
                    n._waitingFor);
                return new ut(function (a, c) {
                  r.then(
                    function (d) {
                      return n._waitingQueue.push(xt(a.bind(null, d)));
                    },
                    function (d) {
                      return n._waitingQueue.push(xt(c.bind(null, d)));
                    },
                  ).finally(function () {
                    n._waitingFor === o && (n._waitingFor = null);
                  });
                });
              }),
              (ce.prototype.abort = function () {
                this.active &&
                  ((this.active = !1),
                  this.idbtrans && this.idbtrans.abort(),
                  this._reject(new ft.Abort()));
              }),
              (ce.prototype.table = function (t) {
                var e = this._memoizedTables || (this._memoizedTables = {});
                if (w(e, t)) return e[t];
                var n = this.schema[t];
                if (n)
                  return (
                    ((n = new this.db.Table(t, n, this)).core =
                      this.db.core.table(t)),
                    (e[t] = n)
                  );
                throw new ft.NotFound(
                  "Table " + t + " not part of transaction",
                );
              }),
              ce);
          function ce() {}
          function ur(t, e, n, r, o, a, c, d) {
            return {
              name: t,
              keyPath: e,
              unique: n,
              multi: r,
              auto: o,
              compound: a,
              src:
                (n && !c ? "&" : "") + (r ? "*" : "") + (o ? "++" : "") + qo(e),
              type: d,
            };
          }
          function qo(t) {
            return typeof t == "string"
              ? t
              : t
                ? "[" + [].join.call(t, "+") + "]"
                : "";
          }
          function cr(t, e, n) {
            return {
              name: t,
              primKey: e,
              indexes: n,
              mappedClass: null,
              idxByName:
                ((r = function (o) {
                  return [o.name, o];
                }),
                n.reduce(function (o, a, c) {
                  return (a = r(a, c)), a && (o[a[0]] = a[1]), o;
                }, {})),
            };
            var r;
          }
          var mn = function (t) {
            try {
              return (
                t.only([[]]),
                (mn = function () {
                  return [[]];
                }),
                [[]]
              );
            } catch {
              return (
                (mn = function () {
                  return je;
                }),
                je
              );
            }
          };
          function lr(t) {
            return t == null
              ? function () {}
              : typeof t == "string"
                ? (e = t).split(".").length === 1
                  ? function (n) {
                      return n[e];
                    }
                  : function (n) {
                      return f(n, e);
                    }
                : function (n) {
                    return f(n, t);
                  };
            var e;
          }
          function Ho(t) {
            return [].slice.call(t);
          }
          var Sa = 0;
          function gn(t) {
            return t == null
              ? ":id"
              : typeof t == "string"
                ? t
                : "[".concat(t.join("+"), "]");
          }
          function Ba(t, e, c) {
            function r(K) {
              if (K.type === 3) return null;
              if (K.type === 4)
                throw new Error("Cannot convert never type to IDBKeyRange");
              var L = K.lower,
                j = K.upper,
                D = K.lowerOpen,
                K = K.upperOpen;
              return L === void 0
                ? j === void 0
                  ? null
                  : e.upperBound(j, !!K)
                : j === void 0
                  ? e.lowerBound(L, !!D)
                  : e.bound(L, j, !!D, !!K);
            }
            function o(T) {
              var L,
                j,
                D = T.name;
              return {
                name: D,
                schema: T,
                mutate: function (K) {
                  var $ = K.trans,
                    z = K.type,
                    V = K.keys,
                    J = K.values,
                    et = K.range;
                  return new Promise(function (it, rt) {
                    it = xt(it);
                    var ct = $.objectStore(D),
                      at = ct.keyPath == null,
                      lt = z === "put" || z === "add";
                    if (!lt && z !== "delete" && z !== "deleteRange")
                      throw new Error("Invalid operation type: " + z);
                    var tt,
                      dt = (V || J || { length: 1 }).length;
                    if (V && J && V.length !== J.length)
                      throw new Error(
                        "Given keys array must have same length as given values array.",
                      );
                    if (dt === 0)
                      return it({
                        numFailures: 0,
                        failures: {},
                        results: [],
                        lastResult: void 0,
                      });
                    function mt(Qt) {
                      ++te, pn(Qt);
                    }
                    var vt = [],
                      At = [],
                      te = 0;
                    if (z === "deleteRange") {
                      if (et.type === 4)
                        return it({
                          numFailures: te,
                          failures: At,
                          results: [],
                          lastResult: void 0,
                        });
                      et.type === 3
                        ? vt.push((tt = ct.clear()))
                        : vt.push((tt = ct.delete(r(et))));
                    } else {
                      var at = lt ? (at ? [J, V] : [J, null]) : [V, null],
                        gt = at[0],
                        Wt = at[1];
                      if (lt)
                        for (var $t = 0; $t < dt; ++$t)
                          vt.push(
                            (tt =
                              Wt && Wt[$t] !== void 0
                                ? ct[z](gt[$t], Wt[$t])
                                : ct[z](gt[$t])),
                          ),
                            (tt.onerror = mt);
                      else
                        for ($t = 0; $t < dt; ++$t)
                          vt.push((tt = ct[z](gt[$t]))), (tt.onerror = mt);
                    }
                    function $n(Qt) {
                      (Qt = Qt.target.result),
                        vt.forEach(function (Ke, Er) {
                          return Ke.error != null && (At[Er] = Ke.error);
                        }),
                        it({
                          numFailures: te,
                          failures: At,
                          results:
                            z === "delete"
                              ? V
                              : vt.map(function (Ke) {
                                  return Ke.result;
                                }),
                          lastResult: Qt,
                        });
                    }
                    (tt.onerror = function (Qt) {
                      mt(Qt), $n(Qt);
                    }),
                      (tt.onsuccess = $n);
                  });
                },
                getMany: function (K) {
                  var $ = K.trans,
                    z = K.keys;
                  return new Promise(function (V, J) {
                    V = xt(V);
                    for (
                      var et,
                        it = $.objectStore(D),
                        rt = z.length,
                        ct = new Array(rt),
                        at = 0,
                        lt = 0,
                        tt = function (vt) {
                          (vt = vt.target),
                            (ct[vt._pos] = vt.result),
                            ++lt === at && V(ct);
                        },
                        dt = ae(J),
                        mt = 0;
                      mt < rt;
                      ++mt
                    )
                      z[mt] != null &&
                        (((et = it.get(z[mt]))._pos = mt),
                        (et.onsuccess = tt),
                        (et.onerror = dt),
                        ++at);
                    at === 0 && V(ct);
                  });
                },
                get: function (K) {
                  var $ = K.trans,
                    z = K.key;
                  return new Promise(function (V, J) {
                    V = xt(V);
                    var et = $.objectStore(D).get(z);
                    (et.onsuccess = function (it) {
                      return V(it.target.result);
                    }),
                      (et.onerror = ae(J));
                  });
                },
                query:
                  ((L = C),
                  (j = q),
                  function (K) {
                    return new Promise(function ($, z) {
                      $ = xt($);
                      var V,
                        J,
                        et,
                        it,
                        dt = K.trans,
                        rt = K.values,
                        ct = K.limit,
                        tt = K.query,
                        at = (at = K.direction) != null ? at : "next",
                        lt = ct === 1 / 0 ? void 0 : ct,
                        mt = tt.index,
                        tt = tt.range,
                        dt = dt.objectStore(D),
                        dt = mt.isPrimaryKey ? dt : dt.index(mt.name),
                        mt = r(tt);
                      if (ct === 0) return $({ result: [] });
                      j
                        ? ((tt = { query: mt, count: lt, direction: at }),
                          ((V = rt
                            ? dt.getAll(tt)
                            : dt.getAllKeys(tt)).onsuccess = function (vt) {
                            return $({ result: vt.target.result });
                          }),
                          (V.onerror = ae(z)))
                        : L && at === "next"
                          ? (((V = rt
                              ? dt.getAll(mt, lt)
                              : dt.getAllKeys(mt, lt)).onsuccess = function (
                              vt,
                            ) {
                              return $({ result: vt.target.result });
                            }),
                            (V.onerror = ae(z)))
                          : ((J = 0),
                            (et =
                              !rt && "openKeyCursor" in dt
                                ? dt.openKeyCursor(mt, at)
                                : dt.openCursor(mt, at)),
                            (it = []),
                            (et.onsuccess = function () {
                              var vt = et.result;
                              return !vt ||
                                (it.push(rt ? vt.value : vt.primaryKey),
                                ++J === ct)
                                ? $({ result: it })
                                : void vt.continue();
                            }),
                            (et.onerror = ae(z)));
                    });
                  }),
                openCursor: function (K) {
                  var $ = K.trans,
                    z = K.values,
                    V = K.query,
                    J = K.reverse,
                    et = K.unique;
                  return new Promise(function (it, rt) {
                    it = xt(it);
                    var lt = V.index,
                      ct = V.range,
                      at = $.objectStore(D),
                      at = lt.isPrimaryKey ? at : at.index(lt.name),
                      lt = J
                        ? et
                          ? "prevunique"
                          : "prev"
                        : et
                          ? "nextunique"
                          : "next",
                      tt =
                        !z && "openKeyCursor" in at
                          ? at.openKeyCursor(r(ct), lt)
                          : at.openCursor(r(ct), lt);
                    (tt.onerror = ae(rt)),
                      (tt.onsuccess = xt(function (dt) {
                        var mt,
                          vt,
                          At,
                          te,
                          gt = tt.result;
                        gt
                          ? ((gt.___id = ++Sa),
                            (gt.done = !1),
                            (mt = gt.continue.bind(gt)),
                            (vt = (vt = gt.continuePrimaryKey) && vt.bind(gt)),
                            (At = gt.advance.bind(gt)),
                            (te = function () {
                              throw new Error("Cursor not stopped");
                            }),
                            (gt.trans = $),
                            (gt.stop =
                              gt.continue =
                              gt.continuePrimaryKey =
                              gt.advance =
                                function () {
                                  throw new Error("Cursor not started");
                                }),
                            (gt.fail = xt(rt)),
                            (gt.next = function () {
                              var Wt = this,
                                $t = 1;
                              return this.start(function () {
                                return $t-- ? Wt.continue() : Wt.stop();
                              }).then(function () {
                                return Wt;
                              });
                            }),
                            (gt.start = function (Wt) {
                              function $t() {
                                if (tt.result)
                                  try {
                                    Wt();
                                  } catch (Qt) {
                                    gt.fail(Qt);
                                  }
                                else
                                  (gt.done = !0),
                                    (gt.start = function () {
                                      throw new Error(
                                        "Cursor behind last entry",
                                      );
                                    }),
                                    gt.stop();
                              }
                              var $n = new Promise(function (Qt, Ke) {
                                (Qt = xt(Qt)),
                                  (tt.onerror = ae(Ke)),
                                  (gt.fail = Ke),
                                  (gt.stop = function (Er) {
                                    (gt.stop =
                                      gt.continue =
                                      gt.continuePrimaryKey =
                                      gt.advance =
                                        te),
                                      Qt(Er);
                                  });
                              });
                              return (
                                (tt.onsuccess = xt(function (Qt) {
                                  (tt.onsuccess = $t), $t();
                                })),
                                (gt.continue = mt),
                                (gt.continuePrimaryKey = vt),
                                (gt.advance = At),
                                $t(),
                                $n
                              );
                            }),
                            it(gt))
                          : it(null);
                      }, rt));
                  });
                },
                count: function (K) {
                  var $ = K.query,
                    z = K.trans,
                    V = $.index,
                    J = $.range;
                  return new Promise(function (et, it) {
                    var rt = z.objectStore(D),
                      rt = V.isPrimaryKey ? rt : rt.index(V.name),
                      ct = r(J),
                      ct = ct ? rt.count(ct) : rt.count();
                    (ct.onsuccess = xt(function (at) {
                      return et(at.target.result);
                    })),
                      (ct.onerror = ae(it));
                  });
                },
              };
            }
            (a = c),
              (d = Ho((c = t).objectStoreNames)),
              (I = 0 < d.length ? a.objectStore(d[0]) : {});
            var a,
              c = {
                schema: {
                  name: c.name,
                  tables: d
                    .map(function (T) {
                      return a.objectStore(T);
                    })
                    .map(function (T) {
                      var L = T.keyPath,
                        j = T.autoIncrement,
                        K = O(L),
                        D = {},
                        K = {
                          name: T.name,
                          primaryKey: {
                            name: null,
                            isPrimaryKey: !0,
                            outbound: L == null,
                            compound: K,
                            keyPath: L,
                            autoIncrement: j,
                            unique: !0,
                            extractKey: lr(L),
                          },
                          indexes: Ho(T.indexNames)
                            .map(function ($) {
                              return T.index($);
                            })
                            .map(function (J) {
                              var et = J.name,
                                z = J.unique,
                                V = J.multiEntry,
                                J = J.keyPath,
                                et = {
                                  name: et,
                                  compound: O(J),
                                  keyPath: J,
                                  unique: z,
                                  multiEntry: V,
                                  extractKey: lr(J),
                                };
                              return (D[gn(J)] = et);
                            }),
                          getIndexByKeyPath: function ($) {
                            return D[gn($)];
                          },
                        };
                      return (
                        (D[":id"] = K.primaryKey),
                        L != null && (D[gn(L)] = K.primaryKey),
                        K
                      );
                    }),
                },
                hasGetAll:
                  0 < d.length &&
                  "getAll" in I &&
                  !(
                    typeof navigator < "u" &&
                    /Safari/.test(navigator.userAgent) &&
                    !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                    [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] <
                      604
                  ),
                hasIdb3Features: "getAllRecords" in I,
              },
              d = c.schema,
              C = c.hasGetAll,
              q = c.hasIdb3Features,
              I = d.tables.map(o),
              R = {};
            return (
              I.forEach(function (T) {
                return (R[T.name] = T);
              }),
              {
                stack: "dbcore",
                transaction: t.transaction.bind(t),
                table: function (T) {
                  if (R[T]) return R[T];
                  throw new Error("Table '".concat(T, "' not found"));
                },
                MIN_KEY: -1 / 0,
                MAX_KEY: mn(e),
                schema: d,
              }
            );
          }
          function Ea(t, e, n, r) {
            return (
              (n = n.IDBKeyRange),
              (e = Ba(e, n, r)),
              {
                dbcore: t.dbcore.reduce(function (o, a) {
                  return (a = a.create), u(u({}, o), a(o));
                }, e),
              }
            );
          }
          function Dn(t, e) {
            var n = e.db,
              n = Ea(t._middlewares, n, t._deps, e);
            (t.core = n.dbcore),
              t.tables.forEach(function (r) {
                var o = r.name;
                t.core.schema.tables.some(function (a) {
                  return a.name === o;
                }) &&
                  ((r.core = t.core.table(o)), t[o] instanceof t.Table) &&
                  (t[o].core = r.core);
              });
          }
          function Nn(t, e, n, r) {
            n.forEach(function (o) {
              var a = r[o];
              e.forEach(function (c) {
                var d = (function C(q, I) {
                  return k(q, I) || ((q = s(q)) && C(q, I));
                })(c, o);
                (!d || ("value" in d && d.value === void 0)) &&
                  (c === t.Transaction.prototype || c instanceof t.Transaction
                    ? x(c, o, {
                        get: function () {
                          return this.table(o);
                        },
                        set: function (C) {
                          A(this, o, {
                            value: C,
                            writable: !0,
                            configurable: !0,
                            enumerable: !0,
                          });
                        },
                      })
                    : (c[o] = new t.Table(o, a)));
              });
            });
          }
          function fr(t, e) {
            e.forEach(function (n) {
              for (var r in n) n[r] instanceof t.Table && delete n[r];
            });
          }
          function Ra(t, e) {
            return t._cfg.version - e._cfg.version;
          }
          function Ta(t, e, n, r) {
            var o = t._dbSchema,
              a =
                (n.objectStoreNames.contains("$meta") &&
                  !o.$meta &&
                  ((o.$meta = cr("$meta", Wo("")[0], [])),
                  t._storeNames.push("$meta")),
                t._createTransaction("readwrite", t._storeNames, o)),
              c = (a.create(n), a._completion.catch(r), a._reject.bind(a)),
              d = pt.transless || pt;
            _e(function () {
              if (((pt.trans = a), (pt.transless = d), e !== 0))
                return (
                  Dn(t, n),
                  (q = e),
                  ((C = a).storeNames.includes("$meta")
                    ? C.table("$meta")
                        .get("version")
                        .then(function (I) {
                          return I ?? q;
                        })
                    : ut.resolve(q)
                  )
                    .then(function (K) {
                      var R = t,
                        T = K,
                        L = a,
                        j = n,
                        D = [],
                        K = R._versions,
                        $ = (R._dbSchema = Un(0, R.idbdb, j));
                      return (K = K.filter(function (z) {
                        return z._cfg.version >= T;
                      })).length === 0
                        ? ut.resolve()
                        : (K.forEach(function (z) {
                            D.push(function () {
                              var V,
                                J,
                                et,
                                it = $,
                                rt = z._cfg.dbschema,
                                ct =
                                  (Kn(R, it, j),
                                  Kn(R, rt, j),
                                  ($ = R._dbSchema = rt),
                                  hr(it, rt)),
                                at =
                                  (ct.add.forEach(function (lt) {
                                    pr(j, lt[0], lt[1].primKey, lt[1].indexes);
                                  }),
                                  ct.change.forEach(function (lt) {
                                    if (lt.recreate)
                                      throw new ft.Upgrade(
                                        "Not yet support for changing primary key",
                                      );
                                    var tt = j.objectStore(lt.name);
                                    lt.add.forEach(function (dt) {
                                      return Mn(tt, dt);
                                    }),
                                      lt.change.forEach(function (dt) {
                                        tt.deleteIndex(dt.name), Mn(tt, dt);
                                      }),
                                      lt.del.forEach(function (dt) {
                                        return tt.deleteIndex(dt);
                                      });
                                  }),
                                  z._cfg.contentUpgrade);
                              if (at && z._cfg.version > T)
                                return (
                                  Dn(R, j),
                                  (L._memoizedTables = {}),
                                  (V = B(rt)),
                                  ct.del.forEach(function (lt) {
                                    V[lt] = it[lt];
                                  }),
                                  fr(R, [R.Transaction.prototype]),
                                  Nn(R, [R.Transaction.prototype], H(V), V),
                                  (L.schema = V),
                                  (J = Z(at)) && Qe(),
                                  (rt = ut.follow(function () {
                                    var lt;
                                    (et = at(L)) &&
                                      J &&
                                      ((lt = we.bind(null, null)),
                                      et.then(lt, lt));
                                  })),
                                  et && typeof et.then == "function"
                                    ? ut.resolve(et)
                                    : rt.then(function () {
                                        return et;
                                      })
                                );
                            }),
                              D.push(function (V) {
                                var J,
                                  et,
                                  it = z._cfg.dbschema;
                                (J = it),
                                  (et = V),
                                  [].slice
                                    .call(et.db.objectStoreNames)
                                    .forEach(function (rt) {
                                      return (
                                        J[rt] == null &&
                                        et.db.deleteObjectStore(rt)
                                      );
                                    }),
                                  fr(R, [R.Transaction.prototype]),
                                  Nn(
                                    R,
                                    [R.Transaction.prototype],
                                    R._storeNames,
                                    R._dbSchema,
                                  ),
                                  (L.schema = R._dbSchema);
                              }),
                              D.push(function (V) {
                                R.idbdb.objectStoreNames.contains("$meta") &&
                                  (Math.ceil(R.idbdb.version / 10) ===
                                  z._cfg.version
                                    ? (R.idbdb.deleteObjectStore("$meta"),
                                      delete R._dbSchema.$meta,
                                      (R._storeNames = R._storeNames.filter(
                                        function (J) {
                                          return J !== "$meta";
                                        },
                                      )))
                                    : V.objectStore("$meta").put(
                                        z._cfg.version,
                                        "version",
                                      ));
                              });
                          }),
                          (function z() {
                            return D.length
                              ? ut.resolve(D.shift()(L.idbtrans)).then(z)
                              : ut.resolve();
                          })().then(function () {
                            zo($, j);
                          }));
                    })
                    .catch(c)
                );
              var C, q;
              H(o).forEach(function (I) {
                pr(n, I, o[I].primKey, o[I].indexes);
              }),
                Dn(t, n),
                ut
                  .follow(function () {
                    return t.on.populate.fire(a);
                  })
                  .catch(c);
            });
          }
          function Ca(t, e) {
            zo(t._dbSchema, e),
              e.db.version % 10 != 0 ||
                e.objectStoreNames.contains("$meta") ||
                e.db
                  .createObjectStore("$meta")
                  .add(Math.ceil(e.db.version / 10 - 1), "version");
            var n = Un(0, t.idbdb, e);
            Kn(t, t._dbSchema, e);
            for (var r = 0, o = hr(n, t._dbSchema).change; r < o.length; r++) {
              var a = ((c) => {
                if (c.change.length || c.recreate)
                  return (
                    console.warn(
                      "Unable to patch indexes of table ".concat(
                        c.name,
                        " because it has changes on the type of index or primary key.",
                      ),
                    ),
                    { value: void 0 }
                  );
                var d = e.objectStore(c.name);
                c.add.forEach(function (C) {
                  It &&
                    console.debug(
                      "Dexie upgrade patch: Creating missing index "
                        .concat(c.name, ".")
                        .concat(C.src),
                    ),
                    Mn(d, C);
                });
              })(o[r]);
              if (typeof a == "object") return a.value;
            }
          }
          function hr(t, e) {
            var n,
              r = { del: [], add: [], change: [] };
            for (n in t) e[n] || r.del.push(n);
            for (n in e) {
              var o = t[n],
                a = e[n];
              if (o) {
                var c = {
                  name: n,
                  def: a,
                  recreate: !1,
                  del: [],
                  add: [],
                  change: [],
                };
                if (
                  "" + (o.primKey.keyPath || "") !=
                    "" + (a.primKey.keyPath || "") ||
                  o.primKey.auto !== a.primKey.auto
                )
                  (c.recreate = !0), r.change.push(c);
                else {
                  var d = o.idxByName,
                    C = a.idxByName,
                    q = void 0;
                  for (q in d) C[q] || c.del.push(q);
                  for (q in C) {
                    var I = d[q],
                      R = C[q];
                    I ? I.src !== R.src && c.change.push(R) : c.add.push(R);
                  }
                  (0 < c.del.length ||
                    0 < c.add.length ||
                    0 < c.change.length) &&
                    r.change.push(c);
                }
              } else r.add.push([n, a]);
            }
            return r;
          }
          function pr(t, e, n, r) {
            var o = t.db.createObjectStore(
              e,
              n.keyPath
                ? { keyPath: n.keyPath, autoIncrement: n.auto }
                : { autoIncrement: n.auto },
            );
            r.forEach(function (a) {
              return Mn(o, a);
            });
          }
          function zo(t, e) {
            H(t).forEach(function (n) {
              e.db.objectStoreNames.contains(n) ||
                (It && console.debug("Dexie: Creating missing table", n),
                pr(e, n, t[n].primKey, t[n].indexes));
            });
          }
          function Mn(t, e) {
            t.createIndex(e.name, e.keyPath, {
              unique: e.unique,
              multiEntry: e.multi,
            });
          }
          function Un(t, e, n) {
            var r = {};
            return (
              v(e.objectStoreNames, 0).forEach(function (o) {
                for (
                  var a = n.objectStore(o),
                    c = ur(
                      qo((q = a.keyPath)),
                      q || "",
                      !0,
                      !1,
                      !!a.autoIncrement,
                      q && typeof q != "string",
                      !0,
                    ),
                    d = [],
                    C = 0;
                  C < a.indexNames.length;
                  ++C
                ) {
                  var I = a.index(a.indexNames[C]),
                    q = I.keyPath,
                    I = ur(
                      I.name,
                      q,
                      !!I.unique,
                      !!I.multiEntry,
                      !1,
                      q && typeof q != "string",
                      !1,
                    );
                  d.push(I);
                }
                r[o] = cr(o, c, d);
              }),
              r
            );
          }
          function Kn(t, e, n) {
            for (var r = n.db.objectStoreNames, o = 0; o < r.length; ++o) {
              var a = r[o],
                c = n.objectStore(a);
              t._hasGetAll = "getAll" in c;
              for (var d = 0; d < c.indexNames.length; ++d) {
                var C,
                  q = c.indexNames[d],
                  I = c.index(q).keyPath,
                  I = typeof I == "string" ? I : "[" + v(I).join("+") + "]";
                e[a] &&
                  (C = e[a].idxByName[I]) &&
                  ((C.name = q),
                  delete e[a].idxByName[I],
                  (e[a].idxByName[q] = C));
              }
            }
            typeof navigator < "u" &&
              /Safari/.test(navigator.userAgent) &&
              !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
              S.WorkerGlobalScope &&
              S instanceof S.WorkerGlobalScope &&
              [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
              (t._hasGetAll = !1);
          }
          function Wo(t) {
            return t.split(",").map(function (e, n) {
              var o = e.split(":"),
                r = (r = o[1]) == null ? void 0 : r.trim(),
                o = (e = o[0].trim()).replace(/([&*]|\+\+)/g, ""),
                a = /^\[/.test(o) ? o.match(/^\[(.*)\]$/)[1].split("+") : o;
              return ur(
                o,
                a || null,
                /\&/.test(e),
                /\*/.test(e),
                /\+\+/.test(e),
                O(a),
                n === 0,
                r,
              );
            });
          }
          (Ge.prototype._createTableSchema = cr),
            (Ge.prototype._parseIndexSyntax = Wo),
            (Ge.prototype._parseStoresSpec = function (t, e) {
              var n = this;
              H(t).forEach(function (r) {
                if (t[r] !== null) {
                  var o = n._parseIndexSyntax(t[r]),
                    a = o.shift();
                  if (!a)
                    throw new ft.Schema(
                      "Invalid schema for table " + r + ": " + t[r],
                    );
                  if (((a.unique = !0), a.multi))
                    throw new ft.Schema("Primary key cannot be multiEntry*");
                  o.forEach(function (c) {
                    if (c.auto)
                      throw new ft.Schema(
                        "Only primary key can be marked as autoIncrement (++)",
                      );
                    if (!c.keyPath)
                      throw new ft.Schema(
                        "Index must have a name and cannot be an empty string",
                      );
                  }),
                    (a = n._createTableSchema(r, a, o)),
                    (e[r] = a);
                }
              });
            }),
            (Ge.prototype.stores = function (n) {
              var e = this.db,
                n =
                  ((this._cfg.storesSource = this._cfg.storesSource
                    ? _(this._cfg.storesSource, n)
                    : n),
                  e._versions),
                r = {},
                o = {};
              return (
                n.forEach(function (a) {
                  _(r, a._cfg.storesSource),
                    (o = a._cfg.dbschema = {}),
                    a._parseStoresSpec(r, o);
                }),
                (e._dbSchema = o),
                fr(e, [e._allTables, e, e.Transaction.prototype]),
                Nn(
                  e,
                  [e._allTables, e, e.Transaction.prototype, this._cfg.tables],
                  H(o),
                  o,
                ),
                (e._storeNames = H(o)),
                this
              );
            }),
            (Ge.prototype.upgrade = function (t) {
              return (
                (this._cfg.contentUpgrade = pe(
                  this._cfg.contentUpgrade || St,
                  t,
                )),
                this
              );
            });
          var Pa = Ge;
          function Ge() {}
          var yn = (() => {
            var t, e, n;
            return typeof FinalizationRegistry < "u" && typeof WeakRef < "u"
              ? ((t = new Set()),
                (e = new FinalizationRegistry(function (r) {
                  t.delete(r);
                })),
                {
                  toArray: function () {
                    return Array.from(t)
                      .map(function (r) {
                        return r.deref();
                      })
                      .filter(function (r) {
                        return r !== void 0;
                      });
                  },
                  add: function (r) {
                    var o = new WeakRef(r._novip);
                    t.add(o),
                      e.register(r._novip, o, o),
                      t.size > r._options.maxConnections &&
                        ((o = t.values().next().value),
                        t.delete(o),
                        e.unregister(o));
                  },
                  remove: function (r) {
                    if (r)
                      for (var o = t.values(), a = o.next(); !a.done; ) {
                        var c = a.value;
                        if (c.deref() === r._novip)
                          return t.delete(c), void e.unregister(c);
                        a = o.next();
                      }
                  },
                })
              : ((n = []),
                {
                  toArray: function () {
                    return n;
                  },
                  add: function (r) {
                    n.push(r._novip);
                  },
                  remove: function (r) {
                    r && (r = n.indexOf(r._novip)) !== -1 && n.splice(r, 1);
                  },
                });
          })();
          function dr(t, e) {
            var n = t._dbNamesDB;
            return (
              n ||
                (n = t._dbNamesDB =
                  new ge(Rn, { addons: [], indexedDB: t, IDBKeyRange: e }))
                  .version(1)
                  .stores({ dbnames: "name" }),
              n.table("dbnames")
            );
          }
          function mr(t) {
            return t && typeof t.databases == "function";
          }
          function gr(t) {
            return _e(function () {
              return (pt.letThrough = !0), t();
            });
          }
          function yr(t) {
            return !("from" in t);
          }
          var zt = function (t, e) {
            var n;
            if (!this) return (n = new zt()), t && "d" in t && _(n, t), n;
            _(
              this,
              arguments.length
                ? { d: 1, from: t, to: 1 < arguments.length ? e : t }
                : { d: 0 },
            );
          };
          function vn(t, e, n) {
            var r = Ot(e, n);
            if (!isNaN(r)) {
              if (0 < r) throw RangeError();
              if (yr(t)) return _(t, { from: e, to: n, d: 1 });
              var r = t.l,
                o = t.r;
              if (Ot(n, t.from) < 0)
                return (
                  r
                    ? vn(r, e, n)
                    : (t.l = { from: e, to: n, d: 1, l: null, r: null }),
                  Vo(t)
                );
              if (0 < Ot(e, t.to))
                return (
                  o
                    ? vn(o, e, n)
                    : (t.r = { from: e, to: n, d: 1, l: null, r: null }),
                  Vo(t)
                );
              Ot(e, t.from) < 0 &&
                ((t.from = e), (t.l = null), (t.d = o ? o.d + 1 : 1)),
                0 < Ot(n, t.to) &&
                  ((t.to = n), (t.r = null), (t.d = t.l ? t.l.d + 1 : 1)),
                (e = !t.r),
                r && !t.l && bn(t, r),
                o && e && bn(t, o);
            }
          }
          function bn(t, e) {
            yr(e) ||
              (function n(r, o) {
                var a = o.from,
                  c = o.l,
                  d = o.r;
                vn(r, a, o.to), c && n(r, c), d && n(r, d);
              })(t, e);
          }
          function $o(t, e) {
            var n = Ln(e),
              r = n.next();
            if (!r.done)
              for (
                var o = r.value, a = Ln(t), c = a.next(o.from), d = c.value;
                !r.done && !c.done;

              ) {
                if (Ot(d.from, o.to) <= 0 && 0 <= Ot(d.to, o.from)) return !0;
                Ot(o.from, d.from) < 0
                  ? (o = (r = n.next(d.from)).value)
                  : (d = (c = a.next(o.from)).value);
              }
            return !1;
          }
          function Ln(t) {
            var e = yr(t) ? null : { s: 0, n: t };
            return {
              next: function (n) {
                for (var r = 0 < arguments.length; e; )
                  switch (e.s) {
                    case 0:
                      if (((e.s = 1), r))
                        for (; e.n.l && Ot(n, e.n.from) < 0; )
                          e = { up: e, n: e.n.l, s: 1 };
                      else for (; e.n.l; ) e = { up: e, n: e.n.l, s: 1 };
                    case 1:
                      if (((e.s = 2), !r || Ot(n, e.n.to) <= 0))
                        return { value: e.n, done: !1 };
                    case 2:
                      if (e.n.r) {
                        (e.s = 3), (e = { up: e, n: e.n.r, s: 0 });
                        continue;
                      }
                    case 3:
                      e = e.up;
                  }
                return { done: !0 };
              },
            };
          }
          function Vo(t) {
            var e,
              n,
              r,
              o =
                (((o = t.r) == null ? void 0 : o.d) || 0) -
                (((o = t.l) == null ? void 0 : o.d) || 0),
              o = 1 < o ? "r" : o < -1 ? "l" : "";
            o &&
              ((e = o == "r" ? "l" : "r"),
              (n = u({}, t)),
              (r = t[o]),
              (t.from = r.from),
              (t.to = r.to),
              (t[o] = r[o]),
              (n[o] = r[e]),
              ((t[e] = n).d = Yo(n))),
              (t.d = Yo(t));
          }
          function Yo(n) {
            var e = n.r,
              n = n.l;
            return (e ? (n ? Math.max(e.d, n.d) : e.d) : n ? n.d : 0) + 1;
          }
          function Fn(t, e) {
            return (
              H(e).forEach(function (n) {
                t[n]
                  ? bn(t[n], e[n])
                  : (t[n] = (function r(o) {
                      var a,
                        c,
                        d = {};
                      for (a in o)
                        w(o, a) &&
                          ((c = o[a]),
                          (d[a] =
                            !c || typeof c != "object" || W.has(c.constructor)
                              ? c
                              : r(c)));
                      return d;
                    })(e[n]));
              }),
              t
            );
          }
          function vr(t, e) {
            return (
              t.all ||
              e.all ||
              Object.keys(t).some(function (n) {
                return e[n] && $o(e[n], t[n]);
              })
            );
          }
          l(
            zt.prototype,
            (((Mt = {
              add: function (t) {
                return bn(this, t), this;
              },
              addKey: function (t) {
                return vn(this, t, t), this;
              },
              addKeys: function (t) {
                var e = this;
                return (
                  t.forEach(function (n) {
                    return vn(e, n, n);
                  }),
                  this
                );
              },
              hasKey: function (t) {
                var e = Ln(this).next(t).value;
                return e && Ot(e.from, t) <= 0 && 0 <= Ot(e.to, t);
              },
            })[ht] = function () {
              return Ln(this);
            }),
            Mt),
          );
          var Ne = {},
            br = {},
            _r = !1;
          function qn(t) {
            Fn(br, t),
              _r ||
                ((_r = !0),
                setTimeout(function () {
                  (_r = !1), wr(br, !(br = {}));
                }, 0));
          }
          function wr(t, e) {
            e === void 0 && (e = !1);
            var n = new Set();
            if (t.all)
              for (var r = 0, o = Object.values(Ne); r < o.length; r++)
                Qo((d = o[r]), t, n, e);
            else
              for (var a in t) {
                var c,
                  d,
                  a = /^idb\:\/\/(.*)\/(.*)\//.exec(a);
                a &&
                  ((c = a[1]),
                  (a = a[2]),
                  (d = Ne["idb://".concat(c, "/").concat(a)])) &&
                  Qo(d, t, n, e);
              }
            n.forEach(function (C) {
              return C();
            });
          }
          function Qo(t, e, n, r) {
            for (
              var o = [], a = 0, c = Object.entries(t.queries.query);
              a < c.length;
              a++
            ) {
              for (
                var d = c[a], C = d[0], q = [], I = 0, R = d[1];
                I < R.length;
                I++
              ) {
                var T = R[I];
                vr(e, T.obsSet)
                  ? T.subscribers.forEach(function (K) {
                      return n.add(K);
                    })
                  : r && q.push(T);
              }
              r && o.push([C, q]);
            }
            if (r)
              for (var L = 0, j = o; L < j.length; L++) {
                var D = j[L],
                  C = D[0],
                  q = D[1];
                t.queries.query[C] = q;
              }
          }
          function Ia(t) {
            var e = t._state,
              n = t._deps.indexedDB;
            if (e.isBeingOpened || t.idbdb)
              return e.dbReadyPromise.then(function () {
                return e.dbOpenError ? Dt(e.dbOpenError) : t;
              });
            (e.isBeingOpened = !0),
              (e.dbOpenError = null),
              (e.openComplete = !1);
            var r = e.openCanceller,
              o = Math.round(10 * t.verno),
              a = !1;
            function c() {
              if (e.openCanceller !== r)
                throw new ft.DatabaseClosed("db.open() was cancelled");
            }
            function d() {
              return new ut(function (T, L) {
                if ((c(), !n)) throw new ft.MissingAPI();
                var j = t.name,
                  D = e.autoSchema || !o ? n.open(j) : n.open(j, o);
                if (!D) throw new ft.MissingAPI();
                (D.onerror = ae(L)),
                  (D.onblocked = xt(t._fireOnBlocked)),
                  (D.onupgradeneeded = xt(function (K) {
                    var $;
                    (I = D.transaction),
                      e.autoSchema && !t._options.allowEmptyDB
                        ? ((D.onerror = pn),
                          I.abort(),
                          D.result.close(),
                          (($ = n.deleteDatabase(j)).onsuccess = $.onerror =
                            xt(function () {
                              L(
                                new ft.NoSuchDatabase(
                                  "Database ".concat(j, " doesnt exist"),
                                ),
                              );
                            })))
                        : ((I.onerror = ae(L)),
                          ($ =
                            K.oldVersion > Math.pow(2, 62) ? 0 : K.oldVersion),
                          (R = $ < 1),
                          (t.idbdb = D.result),
                          a && Ca(t, I),
                          Ta(t, $ / 10, I, L));
                  }, L)),
                  (D.onsuccess = xt(function () {
                    I = null;
                    var K,
                      $,
                      z,
                      V,
                      J,
                      et,
                      it = (t.idbdb = D.result),
                      rt = v(it.objectStoreNames);
                    if (0 < rt.length)
                      try {
                        var ct = it.transaction(
                          (J = rt).length === 1 ? J[0] : J,
                          "readonly",
                        );
                        if (e.autoSchema)
                          (et = it),
                            (V = ct),
                            ((z = t).verno = et.version / 10),
                            (V = z._dbSchema = Un(0, et, V)),
                            (z._storeNames = v(et.objectStoreNames, 0)),
                            Nn(z, [z._allTables], H(V), V);
                        else if (
                          (Kn(t, t._dbSchema, ct),
                          ($ = ct),
                          (($ = hr(Un(0, (K = t).idbdb, $), K._dbSchema)).add
                            .length ||
                            $.change.some(function (at) {
                              return at.add.length || at.change.length;
                            })) &&
                            !a)
                        )
                          return (
                            console.warn(
                              "Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.",
                            ),
                            it.close(),
                            (o = it.version + 1),
                            (a = !0),
                            T(d())
                          );
                        Dn(t, ct);
                      } catch {}
                    yn.add(t),
                      (it.onversionchange = xt(function (at) {
                        (e.vcFired = !0), t.on("versionchange").fire(at);
                      })),
                      (it.onclose = xt(function () {
                        t.close({ disableAutoOpen: !1 });
                      })),
                      R &&
                        ((rt = t._deps),
                        (J = j),
                        mr((et = rt.indexedDB)) ||
                          J === Rn ||
                          dr(et, rt.IDBKeyRange).put({ name: J }).catch(St)),
                      T();
                  }, L));
              }).catch(function (T) {
                switch (T == null ? void 0 : T.name) {
                  case "UnknownError":
                    if (0 < e.PR1398_maxLoop)
                      return (
                        e.PR1398_maxLoop--,
                        console.warn(
                          "Dexie: Workaround for Chrome UnknownError on open()",
                        ),
                        d()
                      );
                    break;
                  case "VersionError":
                    if (0 < o) return (o = 0), d();
                }
                return ut.reject(T);
              });
            }
            var C,
              q = e.dbReadyResolve,
              I = null,
              R = !1;
            return ut
              .race([
                r,
                (typeof navigator > "u"
                  ? ut.resolve()
                  : !navigator.userAgentData &&
                      /Safari\//.test(navigator.userAgent) &&
                      !/Chrom(e|ium)\//.test(navigator.userAgent) &&
                      indexedDB.databases
                    ? new Promise(function (T) {
                        function L() {
                          return indexedDB.databases().finally(T);
                        }
                        (C = setInterval(L, 100)), L();
                      }).finally(function () {
                        return clearInterval(C);
                      })
                    : Promise.resolve()
                ).then(d),
              ])
              .then(function () {
                return (
                  c(),
                  (e.onReadyBeingFired = []),
                  ut
                    .resolve(
                      gr(function () {
                        return t.on.ready.fire(t.vip);
                      }),
                    )
                    .then(function T() {
                      var L;
                      if (0 < e.onReadyBeingFired.length)
                        return (
                          (L = e.onReadyBeingFired.reduce(pe, St)),
                          (e.onReadyBeingFired = []),
                          ut
                            .resolve(
                              gr(function () {
                                return L(t.vip);
                              }),
                            )
                            .then(T)
                        );
                    })
                );
              })
              .finally(function () {
                e.openCanceller === r &&
                  ((e.onReadyBeingFired = null), (e.isBeingOpened = !1));
              })
              .catch(function (T) {
                e.dbOpenError = T;
                try {
                  I && I.abort();
                } catch {}
                return r === e.openCanceller && t._close(), Dt(T);
              })
              .finally(function () {
                (e.openComplete = !0), q();
              })
              .then(function () {
                var T;
                return (
                  R &&
                    ((T = {}),
                    t.tables.forEach(function (L) {
                      L.schema.indexes.forEach(function (j) {
                        j.name &&
                          (T[
                            "idb://"
                              .concat(t.name, "/")
                              .concat(L.name, "/")
                              .concat(j.name)
                          ] = new zt(-1 / 0, [[[]]]));
                      }),
                        (T["idb://".concat(t.name, "/").concat(L.name, "/")] =
                          T[
                            "idb://"
                              .concat(t.name, "/")
                              .concat(L.name, "/:dels")
                          ] =
                            new zt(-1 / 0, [[[]]]));
                    }),
                    Oe(dn).fire(T),
                    wr(T, !0)),
                  t
                );
              });
          }
          function xr(t) {
            function e(a) {
              return t.next(a);
            }
            var n = o(e),
              r = o(function (a) {
                return t.throw(a);
              });
            function o(a) {
              return function (d) {
                var d = a(d),
                  C = d.value;
                return d.done
                  ? C
                  : C && typeof C.then == "function"
                    ? C.then(n, r)
                    : O(C)
                      ? Promise.all(C).then(n, r)
                      : n(C);
              };
            }
            return o(e)();
          }
          function Hn(t, e, n) {
            for (var r = O(t) ? t.slice() : [t], o = 0; o < n; ++o) r.push(e);
            return r;
          }
          var ja = {
            stack: "dbcore",
            name: "VirtualIndexMiddleware",
            level: 1,
            create: function (t) {
              return u(u({}, t), {
                table: function (r) {
                  var n = t.table(r),
                    r = n.schema,
                    o = {},
                    a = [];
                  function c(T, L, j) {
                    var z = gn(T),
                      D = (o[z] = o[z] || []),
                      K = T == null ? 0 : typeof T == "string" ? 1 : T.length,
                      $ = 0 < L,
                      z = u(u({}, j), {
                        name: $
                          ? "".concat(z, "(virtual-from:").concat(j.name, ")")
                          : j.name,
                        lowLevelIndex: j,
                        isVirtual: $,
                        keyTail: L,
                        keyLength: K,
                        extractKey: lr(T),
                        unique: !$ && j.unique,
                      });
                    return (
                      D.push(z),
                      z.isPrimaryKey || a.push(z),
                      1 < K && c(K === 2 ? T[0] : T.slice(0, K - 1), L + 1, j),
                      D.sort(function (V, J) {
                        return V.keyTail - J.keyTail;
                      }),
                      z
                    );
                  }
                  var d = c(r.primaryKey.keyPath, 0, r.primaryKey);
                  o[":id"] = [d];
                  for (var C = 0, q = r.indexes; C < q.length; C++) {
                    var I = q[C];
                    c(I.keyPath, 0, I);
                  }
                  function R(T) {
                    var L,
                      j = T.query.index;
                    return j.isVirtual
                      ? u(u({}, T), {
                          query: {
                            index: j.lowLevelIndex,
                            range:
                              ((L = T.query.range),
                              (j = j.keyTail),
                              {
                                type: L.type === 1 ? 2 : L.type,
                                lower: Hn(
                                  L.lower,
                                  L.lowerOpen ? t.MAX_KEY : t.MIN_KEY,
                                  j,
                                ),
                                lowerOpen: !0,
                                upper: Hn(
                                  L.upper,
                                  L.upperOpen ? t.MIN_KEY : t.MAX_KEY,
                                  j,
                                ),
                                upperOpen: !0,
                              }),
                          },
                        })
                      : T;
                  }
                  return u(u({}, n), {
                    schema: u(u({}, r), {
                      primaryKey: d,
                      indexes: a,
                      getIndexByKeyPath: function (T) {
                        return (T = o[gn(T)]) && T[0];
                      },
                    }),
                    count: function (T) {
                      return n.count(R(T));
                    },
                    query: function (T) {
                      return n.query(R(T));
                    },
                    openCursor: function (T) {
                      var L = T.query.index,
                        j = L.keyTail,
                        D = L.keyLength;
                      return L.isVirtual
                        ? n.openCursor(R(T)).then(function ($) {
                            return $ && K($);
                          })
                        : n.openCursor(T);
                      function K($) {
                        return Object.create($, {
                          continue: {
                            value: function (z) {
                              z != null
                                ? $.continue(
                                    Hn(z, T.reverse ? t.MAX_KEY : t.MIN_KEY, j),
                                  )
                                : T.unique
                                  ? $.continue(
                                      $.key
                                        .slice(0, D)
                                        .concat(
                                          T.reverse ? t.MIN_KEY : t.MAX_KEY,
                                          j,
                                        ),
                                    )
                                  : $.continue();
                            },
                          },
                          continuePrimaryKey: {
                            value: function (z, V) {
                              $.continuePrimaryKey(Hn(z, t.MAX_KEY, j), V);
                            },
                          },
                          primaryKey: {
                            get: function () {
                              return $.primaryKey;
                            },
                          },
                          key: {
                            get: function () {
                              var z = $.key;
                              return D === 1 ? z[0] : z.slice(0, D);
                            },
                          },
                          value: {
                            get: function () {
                              return $.value;
                            },
                          },
                        });
                      }
                    },
                  });
                },
              });
            },
          };
          function Ar(t, e, n, r) {
            return (
              (n = n || {}),
              (r = r || ""),
              H(t).forEach(function (o) {
                var a, c, d;
                w(e, o)
                  ? ((a = t[o]),
                    (c = e[o]),
                    typeof a == "object" && typeof c == "object" && a && c
                      ? (d = st(a)) !== st(c)
                        ? (n[r + o] = e[o])
                        : d === "Object"
                          ? Ar(a, c, n, r + o + ".")
                          : a !== c && (n[r + o] = e[o])
                      : a !== c && (n[r + o] = e[o]))
                  : (n[r + o] = void 0);
              }),
              H(e).forEach(function (o) {
                w(t, o) || (n[r + o] = e[o]);
              }),
              n
            );
          }
          function Or(t, e) {
            return e.type === "delete"
              ? e.keys
              : e.keys || e.values.map(t.extractKey);
          }
          var Da = {
            stack: "dbcore",
            name: "HooksMiddleware",
            level: 2,
            create: function (t) {
              return u(u({}, t), {
                table: function (e) {
                  var n = t.table(e),
                    r = n.schema.primaryKey;
                  return u(u({}, n), {
                    mutate: function (o) {
                      var a = pt.trans,
                        c = a.table(e).hook,
                        d = c.deleting,
                        C = c.creating,
                        q = c.updating;
                      switch (o.type) {
                        case "add":
                          if (C.fire === St) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return I(o);
                            },
                            !0,
                          );
                        case "put":
                          if (C.fire === St && q.fire === St) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return I(o);
                            },
                            !0,
                          );
                        case "delete":
                          if (d.fire === St) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return I(o);
                            },
                            !0,
                          );
                        case "deleteRange":
                          if (d.fire === St) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return (function R(T, L, j) {
                                return n
                                  .query({
                                    trans: T,
                                    values: !1,
                                    query: { index: r, range: L },
                                    limit: j,
                                  })
                                  .then(function (D) {
                                    var K = D.result;
                                    return I({
                                      type: "delete",
                                      keys: K,
                                      trans: T,
                                    }).then(function ($) {
                                      return 0 < $.numFailures
                                        ? Promise.reject($.failures[0])
                                        : K.length < j
                                          ? {
                                              failures: [],
                                              numFailures: 0,
                                              lastResult: void 0,
                                            }
                                          : R(
                                              T,
                                              u(u({}, L), {
                                                lower: K[K.length - 1],
                                                lowerOpen: !0,
                                              }),
                                              j,
                                            );
                                    });
                                  });
                              })(o.trans, o.range, 1e4);
                            },
                            !0,
                          );
                      }
                      return n.mutate(o);
                      function I(R) {
                        var T,
                          L,
                          j,
                          D = pt.trans,
                          K = R.keys || Or(r, R);
                        if (K)
                          return (
                            (R =
                              R.type === "add" || R.type === "put"
                                ? u(u({}, R), { keys: K })
                                : u({}, R)).type !== "delete" &&
                              (R.values = P([], R.values)),
                            R.keys && (R.keys = P([], R.keys)),
                            (T = n),
                            (j = K),
                            ((L = R).type === "add"
                              ? Promise.resolve([])
                              : T.getMany({
                                  trans: L.trans,
                                  keys: j,
                                  cache: "immutable",
                                })
                            ).then(function ($) {
                              var z = K.map(function (V, J) {
                                var et,
                                  it,
                                  rt,
                                  ct = $[J],
                                  at = { onerror: null, onsuccess: null };
                                return (
                                  R.type === "delete"
                                    ? d.fire.call(at, V, ct, D)
                                    : R.type === "add" || ct === void 0
                                      ? ((et = C.fire.call(
                                          at,
                                          V,
                                          R.values[J],
                                          D,
                                        )),
                                        V == null &&
                                          et != null &&
                                          ((R.keys[J] = V = et),
                                          r.outbound ||
                                            y(R.values[J], r.keyPath, V)))
                                      : ((et = Ar(ct, R.values[J])),
                                        (it = q.fire.call(at, et, V, ct, D)) &&
                                          ((rt = R.values[J]),
                                          Object.keys(it).forEach(
                                            function (lt) {
                                              w(rt, lt)
                                                ? (rt[lt] = it[lt])
                                                : y(rt, lt, it[lt]);
                                            },
                                          ))),
                                  at
                                );
                              });
                              return n
                                .mutate(R)
                                .then(function (V) {
                                  for (
                                    var J = V.failures,
                                      et = V.results,
                                      it = V.numFailures,
                                      V = V.lastResult,
                                      rt = 0;
                                    rt < K.length;
                                    ++rt
                                  ) {
                                    var ct = (et || K)[rt],
                                      at = z[rt];
                                    ct == null
                                      ? at.onerror && at.onerror(J[rt])
                                      : at.onsuccess &&
                                        at.onsuccess(
                                          R.type === "put" && $[rt]
                                            ? R.values[rt]
                                            : ct,
                                        );
                                  }
                                  return {
                                    failures: J,
                                    results: et,
                                    numFailures: it,
                                    lastResult: V,
                                  };
                                })
                                .catch(function (V) {
                                  return (
                                    z.forEach(function (J) {
                                      return J.onerror && J.onerror(V);
                                    }),
                                    Promise.reject(V)
                                  );
                                });
                            })
                          );
                        throw new Error("Keys missing");
                      }
                    },
                  });
                },
              });
            },
          };
          function Zo(t, e, n) {
            try {
              if (!e || e.keys.length < t.length) return null;
              for (
                var r = [], o = 0, a = 0;
                o < e.keys.length && a < t.length;
                ++o
              )
                Ot(e.keys[o], t[a]) === 0 &&
                  (r.push(n ? F(e.values[o]) : e.values[o]), ++a);
              return r.length === t.length ? r : null;
            } catch {
              return null;
            }
          }
          var Na = {
            stack: "dbcore",
            level: -1,
            create: function (t) {
              return {
                table: function (e) {
                  var n = t.table(e);
                  return u(u({}, n), {
                    getMany: function (r) {
                      var o;
                      return r.cache
                        ? (o = Zo(r.keys, r.trans._cache, r.cache === "clone"))
                          ? ut.resolve(o)
                          : n.getMany(r).then(function (a) {
                              return (
                                (r.trans._cache = {
                                  keys: r.keys,
                                  values: r.cache === "clone" ? F(a) : a,
                                }),
                                a
                              );
                            })
                        : n.getMany(r);
                    },
                    mutate: function (r) {
                      return (
                        r.type !== "add" && (r.trans._cache = null), n.mutate(r)
                      );
                    },
                  });
                },
              };
            },
          };
          function Xo(t, e) {
            return (
              t.trans.mode === "readonly" &&
              !!t.subscr &&
              !t.trans.explicit &&
              t.trans.db._options.cache !== "disabled" &&
              !e.schema.primaryKey.outbound
            );
          }
          function Go(t, e) {
            switch (t) {
              case "query":
                return e.values && !e.unique;
              case "get":
              case "getMany":
              case "count":
              case "openCursor":
                return !1;
            }
          }
          var Ma = {
            stack: "dbcore",
            level: 0,
            name: "Observability",
            create: function (t) {
              var e = t.schema.name,
                n = new zt(t.MIN_KEY, t.MAX_KEY);
              return u(u({}, t), {
                transaction: function (r, o, a) {
                  if (pt.subscr && o !== "readonly")
                    throw new ft.ReadOnly(
                      "Readwrite transaction in liveQuery context. Querier source: ".concat(
                        pt.querier,
                      ),
                    );
                  return t.transaction(r, o, a);
                },
                table: function (r) {
                  function o(K) {
                    var D,
                      K = K.query;
                    return [
                      (D = K.index),
                      new zt(
                        (D = (K = K.range).lower) != null ? D : t.MIN_KEY,
                        (D = K.upper) != null ? D : t.MAX_KEY,
                      ),
                    ];
                  }
                  var a = t.table(r),
                    c = a.schema,
                    d = c.primaryKey,
                    C = c.indexes,
                    q = d.extractKey,
                    I = d.outbound,
                    R =
                      d.autoIncrement &&
                      C.filter(function (j) {
                        return j.compound && j.keyPath.includes(d.keyPath);
                      }),
                    T = u(u({}, a), {
                      mutate: function (j) {
                        function D(tt) {
                          return (
                            (tt = "idb://"
                              .concat(e, "/")
                              .concat(r, "/")
                              .concat(tt)),
                            J[tt] || (J[tt] = new zt())
                          );
                        }
                        var K,
                          $,
                          z,
                          V = j.trans,
                          J = j.mutatedParts || (j.mutatedParts = {}),
                          et = D(""),
                          it = D(":dels"),
                          rt = j.type,
                          at =
                            j.type === "deleteRange"
                              ? [j.range]
                              : j.type === "delete"
                                ? [j.keys]
                                : j.values.length < 50
                                  ? [
                                      Or(d, j).filter(function (tt) {
                                        return tt;
                                      }),
                                      j.values,
                                    ]
                                  : [],
                          ct = at[0],
                          at = at[1],
                          lt = j.trans._cache;
                        return (
                          O(ct)
                            ? (et.addKeys(ct),
                              (rt =
                                rt === "delete" || ct.length === at.length
                                  ? Zo(ct, lt)
                                  : null) || it.addKeys(ct),
                              (rt || at) &&
                                ((K = D),
                                ($ = rt),
                                (z = at),
                                c.indexes.forEach(function (tt) {
                                  var dt = K(tt.name || "");
                                  function mt(At) {
                                    return At != null
                                      ? tt.extractKey(At)
                                      : null;
                                  }
                                  function vt(At) {
                                    tt.multiEntry && O(At)
                                      ? At.forEach(function (te) {
                                          return dt.addKey(te);
                                        })
                                      : dt.addKey(At);
                                  }
                                  ($ || z).forEach(function (At, Wt) {
                                    var gt = $ && mt($[Wt]),
                                      Wt = z && mt(z[Wt]);
                                    Ot(gt, Wt) !== 0 &&
                                      (gt != null && vt(gt), Wt != null) &&
                                      vt(Wt);
                                  });
                                })))
                            : ct
                              ? ((at = {
                                  from:
                                    (lt = ct.lower) != null ? lt : t.MIN_KEY,
                                  to: (rt = ct.upper) != null ? rt : t.MAX_KEY,
                                }),
                                it.add(at),
                                et.add(at))
                              : (et.add(n),
                                it.add(n),
                                c.indexes.forEach(function (tt) {
                                  return D(tt.name).add(n);
                                })),
                          a.mutate(j).then(function (tt) {
                            return (
                              !ct ||
                                (j.type !== "add" && j.type !== "put") ||
                                (et.addKeys(tt.results),
                                R &&
                                  R.forEach(function (dt) {
                                    for (
                                      var mt = j.values.map(function (gt) {
                                          return dt.extractKey(gt);
                                        }),
                                        vt = dt.keyPath.findIndex(
                                          function (gt) {
                                            return gt === d.keyPath;
                                          },
                                        ),
                                        At = 0,
                                        te = tt.results.length;
                                      At < te;
                                      ++At
                                    )
                                      mt[At][vt] = tt.results[At];
                                    D(dt.name).addKeys(mt);
                                  })),
                              (V.mutatedParts = Fn(V.mutatedParts || {}, J)),
                              tt
                            );
                          })
                        );
                      },
                    }),
                    L = {
                      get: function (j) {
                        return [d, new zt(j.key)];
                      },
                      getMany: function (j) {
                        return [d, new zt().addKeys(j.keys)];
                      },
                      count: o,
                      query: o,
                      openCursor: o,
                    };
                  return (
                    H(L).forEach(function (j) {
                      T[j] = function (D) {
                        var K = pt.subscr,
                          $ = !!K,
                          z = Xo(pt, a) && Go(j, D) ? (D.obsSet = {}) : K;
                        if ($) {
                          var V,
                            K = function (at) {
                              return (
                                (at = "idb://"
                                  .concat(e, "/")
                                  .concat(r, "/")
                                  .concat(at)),
                                z[at] || (z[at] = new zt())
                              );
                            },
                            J = K(""),
                            et = K(":dels"),
                            $ = L[j](D),
                            it = $[0],
                            $ = $[1];
                          if (
                            ((j === "query" && it.isPrimaryKey && !D.values
                              ? et
                              : K(it.name || "")
                            ).add($),
                            !it.isPrimaryKey)
                          ) {
                            if (j !== "count")
                              return (
                                (V =
                                  j === "query" &&
                                  I &&
                                  D.values &&
                                  a.query(u(u({}, D), { values: !1 }))),
                                a[j].apply(this, arguments).then(function (at) {
                                  if (j === "query") {
                                    if (I && D.values)
                                      return V.then(function (mt) {
                                        return (
                                          (mt = mt.result), J.addKeys(mt), at
                                        );
                                      });
                                    var lt = D.values
                                      ? at.result.map(q)
                                      : at.result;
                                    (D.values ? J : et).addKeys(lt);
                                  } else {
                                    var tt, dt;
                                    if (j === "openCursor")
                                      return (
                                        (dt = D.values),
                                        (tt = at) &&
                                          Object.create(tt, {
                                            key: {
                                              get: function () {
                                                return (
                                                  et.addKey(tt.primaryKey),
                                                  tt.key
                                                );
                                              },
                                            },
                                            primaryKey: {
                                              get: function () {
                                                var mt = tt.primaryKey;
                                                return et.addKey(mt), mt;
                                              },
                                            },
                                            value: {
                                              get: function () {
                                                return (
                                                  dt && J.addKey(tt.primaryKey),
                                                  tt.value
                                                );
                                              },
                                            },
                                          })
                                      );
                                  }
                                  return at;
                                })
                              );
                            et.add(n);
                          }
                        }
                        return a[j].apply(this, arguments);
                      };
                    }),
                    T
                  );
                },
              });
            },
          };
          function Jo(t, e, n) {
            var r;
            return n.numFailures === 0
              ? e
              : e.type === "deleteRange" ||
                  ((r = e.keys
                    ? e.keys.length
                    : "values" in e && e.values
                      ? e.values.length
                      : 1),
                  n.numFailures === r)
                ? null
                : ((r = u({}, e)),
                  O(r.keys) &&
                    (r.keys = r.keys.filter(function (o, a) {
                      return !(a in n.failures);
                    })),
                  "values" in r &&
                    O(r.values) &&
                    (r.values = r.values.filter(function (o, a) {
                      return !(a in n.failures);
                    })),
                  r);
          }
          function kr(t, e) {
            return (
              (n = t),
              ((r = e).lower === void 0 ||
                (r.lowerOpen ? 0 < Ot(n, r.lower) : 0 <= Ot(n, r.lower))) &&
                ((n = t),
                (r = e).upper === void 0 ||
                  (r.upperOpen ? Ot(n, r.upper) < 0 : Ot(n, r.upper) <= 0))
            );
            var n, r;
          }
          function ti(t, e, n, r, o, a) {
            var c, d, C, q, I, R, T;
            return !n ||
              n.length === 0 ||
              ((c = e.query.index),
              (d = c.multiEntry),
              (C = e.query.range),
              (q = r.schema.primaryKey.extractKey),
              (I = c.extractKey),
              (R = (c.lowLevelIndex || c).extractKey),
              (r = n.reduce(function (L, j) {
                var D = L,
                  K = [];
                if (j.type === "add" || j.type === "put")
                  for (var $ = new zt(), z = j.values.length - 1; 0 <= z; --z) {
                    var V,
                      J = j.values[z],
                      et = q(J);
                    !$.hasKey(et) &&
                      ((V = I(J)),
                      d && O(V)
                        ? V.some(function (lt) {
                            return kr(lt, C);
                          })
                        : kr(V, C)) &&
                      ($.addKey(et), K.push(J));
                  }
                switch (j.type) {
                  case "add":
                    var it = new zt().addKeys(
                        e.values
                          ? L.map(function (tt) {
                              return q(tt);
                            })
                          : L,
                      ),
                      D = L.concat(
                        e.values
                          ? K.filter(function (tt) {
                              return (
                                (tt = q(tt)),
                                !it.hasKey(tt) && (it.addKey(tt), !0)
                              );
                            })
                          : K.map(function (tt) {
                              return q(tt);
                            }).filter(function (tt) {
                              return !it.hasKey(tt) && (it.addKey(tt), !0);
                            }),
                      );
                    break;
                  case "put":
                    var rt = new zt().addKeys(
                      j.values.map(function (tt) {
                        return q(tt);
                      }),
                    );
                    D = L.filter(function (tt) {
                      return !rt.hasKey(e.values ? q(tt) : tt);
                    }).concat(
                      e.values
                        ? K
                        : K.map(function (tt) {
                            return q(tt);
                          }),
                    );
                    break;
                  case "delete":
                    var ct = new zt().addKeys(j.keys);
                    D = L.filter(function (tt) {
                      return !ct.hasKey(e.values ? q(tt) : tt);
                    });
                    break;
                  case "deleteRange":
                    var at = j.range;
                    D = L.filter(function (tt) {
                      return !kr(q(tt), at);
                    });
                }
                return D;
              }, t)) === t)
              ? t
              : ((T = function (L, j) {
                  return Ot(R(L), R(j)) || Ot(q(L), q(j));
                }),
                r.sort(
                  e.direction === "prev" || e.direction === "prevunique"
                    ? function (L, j) {
                        return T(j, L);
                      }
                    : T,
                ),
                e.limit &&
                  e.limit < 1 / 0 &&
                  (r.length > e.limit
                    ? (r.length = e.limit)
                    : t.length === e.limit &&
                      r.length < e.limit &&
                      (o.dirty = !0)),
                a ? Object.freeze(r) : r);
          }
          function ei(t, e) {
            return (
              Ot(t.lower, e.lower) === 0 &&
              Ot(t.upper, e.upper) === 0 &&
              !!t.lowerOpen == !!e.lowerOpen &&
              !!t.upperOpen == !!e.upperOpen
            );
          }
          function Ua(t, e) {
            return (
              ((n, r, o, a) => {
                if (n === void 0) return r !== void 0 ? -1 : 0;
                if (r === void 0) return 1;
                if ((n = Ot(n, r)) === 0) {
                  if (o && a) return 0;
                  if (o) return 1;
                  if (a) return -1;
                }
                return n;
              })(t.lower, e.lower, t.lowerOpen, e.lowerOpen) <= 0 &&
              0 <=
                ((n, r, o, a) => {
                  if (n === void 0) return r !== void 0 ? 1 : 0;
                  if (r === void 0) return -1;
                  if ((n = Ot(n, r)) === 0) {
                    if (o && a) return 0;
                    if (o) return -1;
                    if (a) return 1;
                  }
                  return n;
                })(t.upper, e.upper, t.upperOpen, e.upperOpen)
            );
          }
          function Ka(t, e, n, r) {
            t.subscribers.add(n),
              r.addEventListener("abort", function () {
                var o, a;
                t.subscribers.delete(n),
                  t.subscribers.size === 0 &&
                    ((o = t),
                    (a = e),
                    setTimeout(function () {
                      o.subscribers.size === 0 && bt(a, o);
                    }, 3e3));
              });
          }
          var La = {
            stack: "dbcore",
            level: 0,
            name: "Cache",
            create: function (t) {
              var e = t.schema.name;
              return u(u({}, t), {
                transaction: function (n, r, o) {
                  var a,
                    c,
                    d = t.transaction(n, r, o);
                  return (
                    r === "readwrite" &&
                      ((o = (a = new AbortController()).signal),
                      d.addEventListener(
                        "abort",
                        (c = function (C) {
                          return function () {
                            if ((a.abort(), r === "readwrite")) {
                              for (
                                var q = new Set(), I = 0, R = n;
                                I < R.length;
                                I++
                              ) {
                                var T = R[I],
                                  L = Ne["idb://".concat(e, "/").concat(T)];
                                if (L) {
                                  var j = t.table(T),
                                    D = L.optimisticOps.filter(function (tt) {
                                      return tt.trans === d;
                                    });
                                  if (d._explicit && C && d.mutatedParts)
                                    for (
                                      var K = 0,
                                        $ = Object.values(L.queries.query);
                                      K < $.length;
                                      K++
                                    )
                                      for (
                                        var z = 0, V = (it = $[K]).slice();
                                        z < V.length;
                                        z++
                                      )
                                        vr(
                                          (rt = V[z]).obsSet,
                                          d.mutatedParts,
                                        ) &&
                                          (bt(it, rt),
                                          rt.subscribers.forEach(function (tt) {
                                            return q.add(tt);
                                          }));
                                  else if (0 < D.length) {
                                    L.optimisticOps = L.optimisticOps.filter(
                                      function (tt) {
                                        return tt.trans !== d;
                                      },
                                    );
                                    for (
                                      var J = 0,
                                        et = Object.values(L.queries.query);
                                      J < et.length;
                                      J++
                                    )
                                      for (
                                        var it,
                                          rt,
                                          ct,
                                          at = 0,
                                          lt = (it = et[J]).slice();
                                        at < lt.length;
                                        at++
                                      )
                                        (rt = lt[at]).res != null &&
                                          d.mutatedParts &&
                                          (C && !rt.dirty
                                            ? ((ct = Object.isFrozen(rt.res)),
                                              (ct = ti(
                                                rt.res,
                                                rt.req,
                                                D,
                                                j,
                                                rt,
                                                ct,
                                              )),
                                              rt.dirty
                                                ? (bt(it, rt),
                                                  rt.subscribers.forEach(
                                                    function (tt) {
                                                      return q.add(tt);
                                                    },
                                                  ))
                                                : ct !== rt.res &&
                                                  ((rt.res = ct),
                                                  (rt.promise = ut.resolve({
                                                    result: ct,
                                                  }))))
                                            : (rt.dirty && bt(it, rt),
                                              rt.subscribers.forEach(
                                                function (tt) {
                                                  return q.add(tt);
                                                },
                                              )));
                                  }
                                }
                              }
                              q.forEach(function (tt) {
                                return tt();
                              });
                            }
                          };
                        })(!1),
                        { signal: o },
                      ),
                      d.addEventListener("error", c(!1), { signal: o }),
                      d.addEventListener("complete", c(!0), { signal: o })),
                    d
                  );
                },
                table: function (n) {
                  var r = t.table(n),
                    o = r.schema.primaryKey;
                  return u(u({}, r), {
                    mutate: function (a) {
                      var c,
                        d = pt.trans;
                      return !o.outbound &&
                        d.db._options.cache !== "disabled" &&
                        !d.explicit &&
                        d.idbtrans.mode === "readwrite" &&
                        (c = Ne["idb://".concat(e, "/").concat(n)])
                        ? ((d = r.mutate(a)),
                          (a.type !== "add" && a.type !== "put") ||
                          !(
                            50 <= a.values.length ||
                            Or(o, a).some(function (C) {
                              return C == null;
                            })
                          )
                            ? (c.optimisticOps.push(a),
                              a.mutatedParts && qn(a.mutatedParts),
                              d.then(function (C) {
                                0 < C.numFailures &&
                                  (bt(c.optimisticOps, a),
                                  (C = Jo(0, a, C)) && c.optimisticOps.push(C),
                                  a.mutatedParts) &&
                                  qn(a.mutatedParts);
                              }),
                              d.catch(function () {
                                bt(c.optimisticOps, a),
                                  a.mutatedParts && qn(a.mutatedParts);
                              }))
                            : d.then(function (C) {
                                var q = Jo(
                                  0,
                                  u(u({}, a), {
                                    values: a.values.map(function (I, R) {
                                      var T;
                                      return C.failures[R]
                                        ? I
                                        : (y(
                                            (T =
                                              (T = o.keyPath) != null &&
                                              T.includes(".")
                                                ? F(I)
                                                : u({}, I)),
                                            o.keyPath,
                                            C.results[R],
                                          ),
                                          T);
                                    }),
                                  }),
                                  C,
                                );
                                c.optimisticOps.push(q),
                                  queueMicrotask(function () {
                                    return a.mutatedParts && qn(a.mutatedParts);
                                  });
                              }),
                          d)
                        : r.mutate(a);
                    },
                    query: function (a) {
                      var c, d, C, q, I, R, T;
                      return Xo(pt, r) && Go("query", a)
                        ? ((c =
                            ((C = pt.trans) == null
                              ? void 0
                              : C.db._options.cache) === "immutable"),
                          (d = (C = pt).requery),
                          (C = C.signal),
                          (R = ((L, j, D, K) => {
                            var $ = Ne["idb://".concat(L, "/").concat(j)];
                            if (!$) return [];
                            if (!(L = $.queries[D])) return [null, !1, $, null];
                            var z =
                              L[(K.query ? K.query.index.name : null) || ""];
                            if (!z) return [null, !1, $, null];
                            switch (D) {
                              case "query":
                                var V = (J = K.direction) != null ? J : "next",
                                  J = z.find(function (et) {
                                    var it;
                                    return (
                                      et.req.limit === K.limit &&
                                      et.req.values === K.values &&
                                      ((it = et.req.direction) != null
                                        ? it
                                        : "next") === V &&
                                      ei(et.req.query.range, K.query.range)
                                    );
                                  });
                                return J
                                  ? [J, !0, $, z]
                                  : [
                                      z.find(function (et) {
                                        var it;
                                        return (
                                          ("limit" in et.req
                                            ? et.req.limit
                                            : 1 / 0) >= K.limit &&
                                          ((it = et.req.direction) != null
                                            ? it
                                            : "next") === V &&
                                          (!K.values || et.req.values) &&
                                          Ua(et.req.query.range, K.query.range)
                                        );
                                      }),
                                      !1,
                                      $,
                                      z,
                                    ];
                              case "count":
                                return (
                                  (J = z.find(function (et) {
                                    return ei(
                                      et.req.query.range,
                                      K.query.range,
                                    );
                                  })),
                                  [J, !!J, $, z]
                                );
                            }
                          })(e, n, "query", a)),
                          (T = R[0]),
                          (q = R[2]),
                          (I = R[3]),
                          T && R[1]
                            ? (T.obsSet = a.obsSet)
                            : ((R = r
                                .query(a)
                                .then(function (L) {
                                  var j = L.result;
                                  if ((T && (T.res = j), c)) {
                                    for (var D = 0, K = j.length; D < K; ++D)
                                      Object.freeze(j[D]);
                                    Object.freeze(j);
                                  } else L.result = F(j);
                                  return L;
                                })
                                .catch(function (L) {
                                  return I && T && bt(I, T), Promise.reject(L);
                                })),
                              (T = {
                                obsSet: a.obsSet,
                                promise: R,
                                subscribers: new Set(),
                                type: "query",
                                req: a,
                                dirty: !1,
                              }),
                              I
                                ? I.push(T)
                                : ((I = [T]),
                                  ((q =
                                    q ||
                                    (Ne["idb://".concat(e, "/").concat(n)] = {
                                      queries: { query: {}, count: {} },
                                      objs: new Map(),
                                      optimisticOps: [],
                                      unsignaledParts: {},
                                    })).queries.query[
                                    a.query.index.name || ""
                                  ] = I))),
                          Ka(T, I, d, C),
                          T.promise.then(function (L) {
                            return {
                              result: ti(
                                L.result,
                                a,
                                q == null ? void 0 : q.optimisticOps,
                                r,
                                T,
                                c,
                              ),
                            };
                          }))
                        : r.query(a);
                    },
                  });
                },
              });
            },
          };
          function zn(t, e) {
            return new Proxy(t, {
              get: function (n, r, o) {
                return r === "db" ? e : Reflect.get(n, r, o);
              },
            });
          }
          (Nt.prototype.version = function (t) {
            if (isNaN(t) || t < 0.1)
              throw new ft.Type("Given version is not a positive number");
            if (
              ((t = Math.round(10 * t) / 10),
              this.idbdb || this._state.isBeingOpened)
            )
              throw new ft.Schema("Cannot add version when database is open");
            this.verno = Math.max(this.verno, t);
            var e = this._versions,
              n = e.filter(function (r) {
                return r._cfg.version === t;
              })[0];
            return (
              n ||
                ((n = new this.Version(t)),
                e.push(n),
                e.sort(Ra),
                n.stores({}),
                (this._state.autoSchema = !1)),
              n
            );
          }),
            (Nt.prototype._whenReady = function (t) {
              var e = this;
              return this.idbdb &&
                (this._state.openComplete || pt.letThrough || this._vip)
                ? t()
                : new ut(function (n, r) {
                    if (e._state.openComplete)
                      return r(new ft.DatabaseClosed(e._state.dbOpenError));
                    if (!e._state.isBeingOpened) {
                      if (!e._state.autoOpen)
                        return void r(new ft.DatabaseClosed());
                      e.open().catch(St);
                    }
                    e._state.dbReadyPromise.then(n, r);
                  }).then(t);
            }),
            (Nt.prototype.use = function (o) {
              var e = o.stack,
                n = o.create,
                r = o.level,
                o = o.name,
                a =
                  (o && this.unuse({ stack: e, name: o }),
                  this._middlewares[e] || (this._middlewares[e] = []));
              return (
                a.push({ stack: e, create: n, level: r ?? 10, name: o }),
                a.sort(function (c, d) {
                  return c.level - d.level;
                }),
                this
              );
            }),
            (Nt.prototype.unuse = function (t) {
              var e = t.stack,
                n = t.name,
                r = t.create;
              return (
                e &&
                  this._middlewares[e] &&
                  (this._middlewares[e] = this._middlewares[e].filter(
                    function (o) {
                      return r ? o.create !== r : !!n && o.name !== n;
                    },
                  )),
                this
              );
            }),
            (Nt.prototype.open = function () {
              var t = this;
              return Ie(re, function () {
                return Ia(t);
              });
            }),
            (Nt.prototype._close = function () {
              this.on.close.fire(new CustomEvent("close"));
              var t = this._state;
              if ((yn.remove(this), this.idbdb)) {
                try {
                  this.idbdb.close();
                } catch {}
                this.idbdb = null;
              }
              t.isBeingOpened ||
                ((t.dbReadyPromise = new ut(function (e) {
                  t.dbReadyResolve = e;
                })),
                (t.openCanceller = new ut(function (e, n) {
                  t.cancelOpen = n;
                })));
            }),
            (Nt.prototype.close = function (e) {
              var e = (e === void 0 ? { disableAutoOpen: !0 } : e)
                  .disableAutoOpen,
                n = this._state;
              e
                ? (n.isBeingOpened && n.cancelOpen(new ft.DatabaseClosed()),
                  this._close(),
                  (n.autoOpen = !1),
                  (n.dbOpenError = new ft.DatabaseClosed()))
                : (this._close(),
                  (n.autoOpen = this._options.autoOpen || n.isBeingOpened),
                  (n.openComplete = !1),
                  (n.dbOpenError = null));
            }),
            (Nt.prototype.delete = function (t) {
              var e = this,
                n =
                  (t === void 0 && (t = { disableAutoOpen: !0 }),
                  0 < arguments.length && typeof arguments[0] != "object"),
                r = this._state;
              return new ut(function (o, a) {
                function c() {
                  e.close(t);
                  var d = e._deps.indexedDB.deleteDatabase(e.name);
                  (d.onsuccess = xt(function () {
                    var C, q, I;
                    (C = e._deps),
                      (q = e.name),
                      mr((I = C.indexedDB)) ||
                        q === Rn ||
                        dr(I, C.IDBKeyRange).delete(q).catch(St),
                      o();
                  })),
                    (d.onerror = ae(a)),
                    (d.onblocked = e._fireOnBlocked);
                }
                if (n)
                  throw new ft.InvalidArgument(
                    "Invalid closeOptions argument to db.delete()",
                  );
                r.isBeingOpened ? r.dbReadyPromise.then(c) : c();
              });
            }),
            (Nt.prototype.backendDB = function () {
              return this.idbdb;
            }),
            (Nt.prototype.isOpen = function () {
              return this.idbdb !== null;
            }),
            (Nt.prototype.hasBeenClosed = function () {
              var t = this._state.dbOpenError;
              return t && t.name === "DatabaseClosed";
            }),
            (Nt.prototype.hasFailed = function () {
              return this._state.dbOpenError !== null;
            }),
            (Nt.prototype.dynamicallyOpened = function () {
              return this._state.autoSchema;
            }),
            Object.defineProperty(Nt.prototype, "tables", {
              get: function () {
                var t = this;
                return H(this._allTables).map(function (e) {
                  return t._allTables[e];
                });
              },
              enumerable: !1,
              configurable: !0,
            }),
            (Nt.prototype.transaction = function () {
              var t = function (e, n, r) {
                var o = arguments.length;
                if (o < 2) throw new ft.InvalidArgument("Too few arguments");
                for (var a = new Array(o - 1); --o; ) a[o - 1] = arguments[o];
                return (r = a.pop()), [e, M(a), r];
              }.apply(this, arguments);
              return this._transaction.apply(this, t);
            }),
            (Nt.prototype._transaction = function (t, e, n) {
              var r,
                o,
                a = this,
                c = pt.trans,
                d =
                  ((c && c.db === this && t.indexOf("!") === -1) || (c = null),
                  t.indexOf("?") !== -1);
              t = t.replace("!", "").replace("?", "");
              try {
                if (
                  ((o = e.map(function (q) {
                    if (
                      ((q = q instanceof a.Table ? q.name : q),
                      typeof q != "string")
                    )
                      throw new TypeError(
                        "Invalid table argument to Dexie.transaction(). Only Table or String are allowed",
                      );
                    return q;
                  })),
                  t == "r" || t === rr)
                )
                  r = rr;
                else {
                  if (t != "rw" && t != or)
                    throw new ft.InvalidArgument(
                      "Invalid transaction mode: " + t,
                    );
                  r = or;
                }
                if (c) {
                  if (c.mode === rr && r === or) {
                    if (!d)
                      throw new ft.SubTransaction(
                        "Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY",
                      );
                    c = null;
                  }
                  c &&
                    o.forEach(function (q) {
                      if (c && c.storeNames.indexOf(q) === -1) {
                        if (!d)
                          throw new ft.SubTransaction(
                            "Table " +
                              q +
                              " not included in parent transaction.",
                          );
                        c = null;
                      }
                    }),
                    d && c && !c.active && (c = null);
                }
              } catch (q) {
                return c
                  ? c._promise(null, function (I, R) {
                      R(q);
                    })
                  : Dt(q);
              }
              var C = function q(I, R, T, L, j) {
                return ut.resolve().then(function () {
                  var z = pt.transless || pt,
                    D = I._createTransaction(R, T, I._dbSchema, L),
                    z = ((D.explicit = !0), { trans: D, transless: z });
                  if (L) D.idbtrans = L.idbtrans;
                  else
                    try {
                      D.create(),
                        (D.idbtrans._explicit = !0),
                        (I._state.PR1398_maxLoop = 3);
                    } catch (V) {
                      return V.name === yt.InvalidState &&
                        I.isOpen() &&
                        0 < --I._state.PR1398_maxLoop
                        ? (console.warn("Dexie: Need to reopen db"),
                          I.close({ disableAutoOpen: !1 }),
                          I.open().then(function () {
                            return q(I, R, T, null, j);
                          }))
                        : Dt(V);
                    }
                  var K,
                    $ = Z(j),
                    z =
                      ($ && Qe(),
                      ut.follow(function () {
                        var V;
                        (K = j.call(D, D)) &&
                          ($
                            ? ((V = we.bind(null, null)), K.then(V, V))
                            : typeof K.next == "function" &&
                              typeof K.throw == "function" &&
                              (K = xr(K)));
                      }, z));
                  return (
                    K && typeof K.then == "function"
                      ? ut.resolve(K).then(function (V) {
                          return D.active
                            ? V
                            : Dt(
                                new ft.PrematureCommit(
                                  "Transaction committed too early. See http://bit.ly/2kdckMn",
                                ),
                              );
                        })
                      : z.then(function () {
                          return K;
                        })
                  )
                    .then(function (V) {
                      return (
                        L && D._resolve(),
                        D._completion.then(function () {
                          return V;
                        })
                      );
                    })
                    .catch(function (V) {
                      return D._reject(V), Dt(V);
                    });
                });
              }.bind(null, this, r, o, c, n);
              return c
                ? c._promise(r, C, "lock")
                : pt.trans
                  ? Ie(pt.transless, function () {
                      return a._whenReady(C);
                    })
                  : this._whenReady(C);
            }),
            (Nt.prototype.table = function (t) {
              if (w(this._allTables, t)) return this._allTables[t];
              throw new ft.InvalidTable("Table ".concat(t, " does not exist"));
            });
          var ge = Nt;
          function Nt(t, e) {
            var n,
              r,
              o,
              a,
              c,
              d = this,
              C = ((this._middlewares = {}), (this.verno = 0), Nt.dependencies),
              C =
                ((this._options = e =
                  u(
                    {
                      addons: Nt.addons,
                      autoOpen: !0,
                      indexedDB: C.indexedDB,
                      IDBKeyRange: C.IDBKeyRange,
                      cache: "cloned",
                      maxConnections: 1e3,
                    },
                    e,
                  )),
                (this._deps = {
                  indexedDB: e.indexedDB,
                  IDBKeyRange: e.IDBKeyRange,
                }),
                e.addons),
              q =
                ((this._dbSchema = {}),
                (this._versions = []),
                (this._storeNames = []),
                (this._allTables = {}),
                (this.idbdb = null),
                (this._novip = this),
                {
                  dbOpenError: null,
                  isBeingOpened: !1,
                  onReadyBeingFired: null,
                  openComplete: !1,
                  dbReadyResolve: St,
                  dbReadyPromise: null,
                  cancelOpen: St,
                  openCanceller: null,
                  autoSchema: !0,
                  PR1398_maxLoop: 3,
                  autoOpen: e.autoOpen,
                }),
              I =
                ((q.dbReadyPromise = new ut(function (R) {
                  q.dbReadyResolve = R;
                })),
                (q.openCanceller = new ut(function (R, T) {
                  q.cancelOpen = T;
                })),
                (this._state = q),
                (this.name = t),
                (this.on = fn(
                  this,
                  "populate",
                  "blocked",
                  "versionchange",
                  "close",
                  { ready: [pe, St] },
                )),
                (this.once = function (R, T) {
                  var L = function () {
                    for (var j = [], D = 0; D < arguments.length; D++)
                      j[D] = arguments[D];
                    d.on(R).unsubscribe(L), T.apply(d, j);
                  };
                  return d.on(R, L);
                }),
                (this.on.ready.subscribe = b(
                  this.on.ready.subscribe,
                  function (R) {
                    return function (T, L) {
                      Nt.vip(function () {
                        var j,
                          D = d._state;
                        D.openComplete
                          ? (D.dbOpenError || ut.resolve().then(T), L && R(T))
                          : D.onReadyBeingFired
                            ? (D.onReadyBeingFired.push(T), L && R(T))
                            : (R(T),
                              (j = d),
                              L ||
                                R(function K() {
                                  j.on.ready.unsubscribe(T),
                                    j.on.ready.unsubscribe(K);
                                }));
                      });
                    };
                  },
                )),
                (this.Collection =
                  ((n = this),
                  hn(xa.prototype, function (K, D) {
                    this.db = n;
                    var L = To,
                      j = null;
                    if (D)
                      try {
                        L = D();
                      } catch (z) {
                        j = z;
                      }
                    var D = K._ctx,
                      K = D.table,
                      $ = K.hook.reading.fire;
                    this._ctx = {
                      table: K,
                      index: D.index,
                      isPrimKey:
                        !D.index ||
                        (K.schema.primKey.keyPath &&
                          D.index === K.schema.primKey.name),
                      range: L,
                      keysOnly: !1,
                      dir: "next",
                      unique: "",
                      algorithm: null,
                      filter: null,
                      replayFilter: null,
                      justLimit: !0,
                      isMatch: null,
                      offset: 0,
                      limit: 1 / 0,
                      error: j,
                      or: D.or,
                      valueMapper: $ !== qt ? $ : null,
                    };
                  }))),
                (this.Table =
                  ((r = this),
                  hn(No.prototype, function (R, T, L) {
                    (this.db = r),
                      (this._tx = L),
                      (this.name = R),
                      (this.schema = T),
                      (this.hook = r._allTables[R]
                        ? r._allTables[R].hook
                        : fn(null, {
                            creating: [Ee, St],
                            reading: [Vt, qt],
                            updating: [Re, St],
                            deleting: [He, St],
                          }));
                  }))),
                (this.Transaction =
                  ((o = this),
                  hn(ka.prototype, function (R, T, L, j, D) {
                    var K = this;
                    R !== "readonly" &&
                      T.forEach(function ($) {
                        ($ = ($ = L[$]) == null ? void 0 : $.yProps),
                          $ &&
                            (T = T.concat(
                              $.map(function (z) {
                                return z.updatesTable;
                              }),
                            ));
                      }),
                      (this.db = o),
                      (this.mode = R),
                      (this.storeNames = T),
                      (this.schema = L),
                      (this.chromeTransactionDurability = j),
                      (this.idbtrans = null),
                      (this.on = fn(this, "complete", "error", "abort")),
                      (this.parent = D || null),
                      (this.active = !0),
                      (this._reculock = 0),
                      (this._blockedFuncs = []),
                      (this._resolve = null),
                      (this._reject = null),
                      (this._waitingFor = null),
                      (this._waitingQueue = null),
                      (this._spinCount = 0),
                      (this._completion = new ut(function ($, z) {
                        (K._resolve = $), (K._reject = z);
                      })),
                      this._completion.then(
                        function () {
                          (K.active = !1), K.on.complete.fire();
                        },
                        function ($) {
                          var z = K.active;
                          return (
                            (K.active = !1),
                            K.on.error.fire($),
                            K.parent
                              ? K.parent._reject($)
                              : z && K.idbtrans && K.idbtrans.abort(),
                            Dt($)
                          );
                        },
                      );
                  }))),
                (this.Version =
                  ((a = this),
                  hn(Pa.prototype, function (R) {
                    (this.db = a),
                      (this._cfg = {
                        version: R,
                        storesSource: null,
                        dbschema: {},
                        tables: {},
                        contentUpgrade: null,
                      });
                  }))),
                (this.WhereClause =
                  ((c = this),
                  hn(Fo.prototype, function (R, T, L) {
                    if (
                      ((this.db = c),
                      (this._ctx = {
                        table: R,
                        index: T === ":id" ? null : T,
                        or: L,
                      }),
                      (this._cmp = this._ascending = Ot),
                      (this._descending = function (j, D) {
                        return Ot(D, j);
                      }),
                      (this._max = function (j, D) {
                        return 0 < Ot(j, D) ? j : D;
                      }),
                      (this._min = function (j, D) {
                        return Ot(j, D) < 0 ? j : D;
                      }),
                      (this._IDBKeyRange = c._deps.IDBKeyRange),
                      !this._IDBKeyRange)
                    )
                      throw new ft.MissingAPI();
                  }))),
                this.on("versionchange", function (R) {
                  0 < R.newVersion
                    ? console.warn(
                        "Another connection wants to upgrade database '".concat(
                          d.name,
                          "'. Closing db now to resume the upgrade.",
                        ),
                      )
                    : console.warn(
                        "Another connection wants to delete database '".concat(
                          d.name,
                          "'. Closing db now to resume the delete request.",
                        ),
                      ),
                    d.close({ disableAutoOpen: !1 });
                }),
                this.on("blocked", function (R) {
                  !R.newVersion || R.newVersion < R.oldVersion
                    ? console.warn(
                        "Dexie.delete('".concat(d.name, "') was blocked"),
                      )
                    : console.warn(
                        "Upgrade '"
                          .concat(
                            d.name,
                            "' blocked by other connection holding version ",
                          )
                          .concat(R.oldVersion / 10),
                      );
                }),
                (this._maxKey = mn(e.IDBKeyRange)),
                (this._createTransaction = function (R, T, L, j) {
                  return new d.Transaction(
                    R,
                    T,
                    L,
                    d._options.chromeTransactionDurability,
                    j,
                  );
                }),
                (this._fireOnBlocked = function (R) {
                  d.on("blocked").fire(R),
                    yn
                      .toArray()
                      .filter(function (T) {
                        return (
                          T.name === d.name && T !== d && !T._state.vcFired
                        );
                      })
                      .map(function (T) {
                        return T.on("versionchange").fire(R);
                      });
                }),
                this.use(Na),
                this.use(La),
                this.use(Ma),
                this.use(ja),
                this.use(Da),
                new Proxy(this, {
                  get: function (R, T, L) {
                    var j;
                    return (
                      T === "_vip" ||
                      (T === "table"
                        ? function (D) {
                            return zn(d.table(D), I);
                          }
                        : (j = Reflect.get(R, T, L)) instanceof No
                          ? zn(j, I)
                          : T === "tables"
                            ? j.map(function (D) {
                                return zn(D, I);
                              })
                            : T === "_createTransaction"
                              ? function () {
                                  return zn(j.apply(this, arguments), I);
                                }
                              : j)
                    );
                  },
                }));
            (this.vip = I),
              C.forEach(function (R) {
                return R(d);
              });
          }
          var Wn,
            Je =
              typeof Symbol < "u" && "observable" in Symbol
                ? Symbol.observable
                : "@@observable",
            Fa =
              ((Sr.prototype.subscribe = function (t, e, n) {
                return this._subscribe(
                  t && typeof t != "function"
                    ? t
                    : { next: t, error: e, complete: n },
                );
              }),
              (Sr.prototype[Je] = function () {
                return this;
              }),
              Sr);
          function Sr(t) {
            this._subscribe = t;
          }
          try {
            Wn = {
              indexedDB:
                S.indexedDB ||
                S.mozIndexedDB ||
                S.webkitIndexedDB ||
                S.msIndexedDB,
              IDBKeyRange: S.IDBKeyRange || S.webkitIDBKeyRange,
            };
          } catch {
            Wn = { indexedDB: null, IDBKeyRange: null };
          }
          function ni(t) {
            var e,
              n = !1,
              r = new Fa(function (o) {
                var a = Z(t),
                  c,
                  d = !1,
                  C = {},
                  q = {},
                  I = {
                    get closed() {
                      return d;
                    },
                    unsubscribe: function () {
                      d ||
                        ((d = !0),
                        c && c.abort(),
                        R && Oe.storagemutated.unsubscribe(j));
                    },
                  },
                  R = (o.start && o.start(I), !1),
                  T = function () {
                    return nr(D);
                  };
                function L() {
                  return vr(q, C);
                }
                var j = function (K) {
                    Fn(C, K), L() && T();
                  },
                  D = function () {
                    var K, $, z;
                    !d &&
                      Wn.indexedDB &&
                      ((C = {}),
                      (K = {}),
                      c && c.abort(),
                      (c = new AbortController()),
                      (z = ((V) => {
                        var J = be();
                        try {
                          a && Qe();
                          var et = _e(t, V);
                          return (et = a ? et.finally(we) : et);
                        } finally {
                          J && de();
                        }
                      })(
                        ($ = {
                          subscr: K,
                          signal: c.signal,
                          requery: T,
                          querier: t,
                          trans: null,
                        }),
                      )),
                      R || (Oe(dn, j), (R = !0)),
                      Promise.resolve(z).then(
                        function (V) {
                          (n = !0),
                            (e = V),
                            d ||
                              $.signal.aborted ||
                              (L() || ((q = K), L())
                                ? T()
                                : ((C = {}),
                                  nr(function () {
                                    return !d && o.next && o.next(V);
                                  })));
                        },
                        function (V) {
                          (n = !1),
                            ["DatabaseClosedError", "AbortError"].includes(
                              V == null ? void 0 : V.name,
                            ) ||
                              d ||
                              nr(function () {
                                d || (o.error && o.error(V));
                              });
                        },
                      ));
                  };
                return setTimeout(T, 0), I;
              });
            return (
              (r.hasValue = function () {
                return n;
              }),
              (r.getValue = function () {
                return e;
              }),
              r
            );
          }
          var Me = ge;
          function Br(t) {
            var e = ke;
            try {
              (ke = !0), Oe.storagemutated.fire(t), wr(t, !0);
            } finally {
              ke = e;
            }
          }
          l(
            Me,
            u(u({}, G), {
              delete: function (t) {
                return new Me(t, { addons: [] }).delete();
              },
              exists: function (t) {
                return new Me(t, { addons: [] })
                  .open()
                  .then(function (e) {
                    return e.close(), !0;
                  })
                  .catch("NoSuchDatabaseError", function () {
                    return !1;
                  });
              },
              getDatabaseNames: function (t) {
                try {
                  return (
                    (e = Me.dependencies),
                    (n = e.indexedDB),
                    (e = e.IDBKeyRange),
                    (mr(n)
                      ? Promise.resolve(n.databases()).then(function (r) {
                          return r
                            .map(function (o) {
                              return o.name;
                            })
                            .filter(function (o) {
                              return o !== Rn;
                            });
                        })
                      : dr(n, e).toCollection().primaryKeys()
                    ).then(t)
                  );
                } catch {
                  return Dt(new ft.MissingAPI());
                }
                var e, n;
              },
              defineClass: function () {
                return function (t) {
                  _(this, t);
                };
              },
              ignoreTransaction: function (t) {
                return pt.trans ? Ie(pt.transless || re, t) : t();
              },
              vip: gr,
              async: function (t) {
                return function () {
                  try {
                    var e = xr(t.apply(this, arguments));
                    return e && typeof e.then == "function" ? e : ut.resolve(e);
                  } catch (n) {
                    return Dt(n);
                  }
                };
              },
              spawn: function (t, e, n) {
                try {
                  var r = xr(t.apply(n, e || []));
                  return r && typeof r.then == "function" ? r : ut.resolve(r);
                } catch (o) {
                  return Dt(o);
                }
              },
              currentTransaction: {
                get: function () {
                  return pt.trans || null;
                },
              },
              waitFor: function (t, e) {
                return (
                  (t = ut
                    .resolve(
                      typeof t == "function" ? Me.ignoreTransaction(t) : t,
                    )
                    .timeout(e || 6e4)),
                  pt.trans ? pt.trans.waitFor(t) : t
                );
              },
              Promise: ut,
              debug: {
                get: function () {
                  return It;
                },
                set: function (t) {
                  Yt(t);
                },
              },
              derive: E,
              extend: _,
              props: l,
              override: b,
              Events: fn,
              on: Oe,
              liveQuery: ni,
              extendObservabilitySet: Fn,
              getByKeyPath: f,
              setByKeyPath: y,
              delByKeyPath: function (t, e) {
                typeof e == "string"
                  ? y(t, e, void 0)
                  : "length" in e &&
                    [].map.call(e, function (n) {
                      y(t, n, void 0);
                    });
              },
              shallowClone: B,
              deepClone: F,
              getObjectDiff: Ar,
              cmp: Ot,
              asap: U,
              minKey: -1 / 0,
              addons: [],
              connections: { get: yn.toArray },
              errnames: yt,
              dependencies: Wn,
              cache: Ne,
              semVer: "4.4.2",
              version: "4.4.2"
                .split(".")
                .map(function (t) {
                  return parseInt(t);
                })
                .reduce(function (t, e, n) {
                  return t + e / Math.pow(10, 2 * n);
                }),
            }),
          ),
            (Me.maxKey = mn(Me.dependencies.IDBKeyRange)),
            typeof dispatchEvent < "u" &&
              typeof addEventListener < "u" &&
              (Oe(dn, function (t) {
                ke ||
                  ((t = new CustomEvent(sr, { detail: t })),
                  (ke = !0),
                  dispatchEvent(t),
                  (ke = !1));
              }),
              addEventListener(sr, function (t) {
                (t = t.detail), ke || Br(t);
              }));
          var Ue,
            ke = !1,
            ri = function () {};
          return (
            typeof BroadcastChannel < "u" &&
              ((ri = function () {
                (Ue = new BroadcastChannel(sr)).onmessage = function (t) {
                  return t.data && Br(t.data);
                };
              })(),
              typeof Ue.unref == "function" && Ue.unref(),
              Oe(dn, function (t) {
                ke || Ue.postMessage(t);
              })),
            typeof addEventListener < "u" &&
              (addEventListener("pagehide", function (t) {
                if (!ge.disableBfCache && t.persisted) {
                  It && console.debug("Dexie: handling persisted pagehide"),
                    Ue == null || Ue.close();
                  for (var e = 0, n = yn.toArray(); e < n.length; e++)
                    n[e].close({ disableAutoOpen: !1 });
                }
              }),
              addEventListener("pageshow", function (t) {
                !ge.disableBfCache &&
                  t.persisted &&
                  (It && console.debug("Dexie: handling persisted pageshow"),
                  ri(),
                  Br({ all: new zt(-1 / 0, [[]]) }));
              })),
            (ut.rejectionMapper = function (t, e) {
              return !t ||
                t instanceof X ||
                t instanceof TypeError ||
                t instanceof SyntaxError ||
                !t.name ||
                !qe[t.name]
                ? t
                : ((e = new qe[t.name](e || t.message, t)),
                  "stack" in t &&
                    x(e, "stack", {
                      get: function () {
                        return this.inner.stack;
                      },
                    }),
                  e);
            }),
            Yt(It),
            u(
              ge,
              Object.freeze({
                __proto__: null,
                DEFAULT_MAX_CONNECTIONS: 1e3,
                Dexie: ge,
                Entity: Co,
                PropModification: ln,
                RangeSet: zt,
                add: function (t) {
                  return new ln({ add: t });
                },
                cmp: Ot,
                default: ge,
                liveQuery: ni,
                mergeRanges: bn,
                rangesOverlap: $o,
                remove: function (t) {
                  return new ln({ remove: t });
                },
                replacePrefix: function (t, e) {
                  return new ln({ replacePrefix: [t, e] });
                },
              }),
              { default: ge },
            ),
            ge
          );
        });
      })(ko)),
    ko.exports
  );
}
var rc = nc();
const So = Ha(rc),
  ga = Symbol.for("Dexie"),
  tr = globalThis[ga] || (globalThis[ga] = So);
if (So.semVer !== tr.semVer)
  throw new Error(
    `Two different versions of Dexie loaded in the same app: ${So.semVer} and ${tr.semVer}`,
  );
const {
  liveQuery: ac,
  mergeRanges: sc,
  rangesOverlap: uc,
  RangeSet: cc,
  cmp: lc,
  Entity: fc,
  PropModification: hc,
  replacePrefix: pc,
  add: dc,
  remove: mc,
  DexieYProvider: gc,
} = tr;
var ya = { exports: {} },
  va;
function oc() {
  return (
    va ||
      ((va = 1),
      (function (i) {
        var p = (function () {
          var m = String.fromCharCode,
            u =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            P =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
            S = {};
          function H(_, s) {
            if (!S[_]) {
              S[_] = {};
              for (var h = 0; h < _.length; h++) S[_][_.charAt(h)] = h;
            }
            return S[_][s];
          }
          var O = {
            compressToBase64: function (_) {
              if (_ == null) return "";
              var s = O._compress(_, 6, function (h) {
                return u.charAt(h);
              });
              switch (s.length % 4) {
                default:
                case 0:
                  return s;
                case 1:
                  return s + "===";
                case 2:
                  return s + "==";
                case 3:
                  return s + "=";
              }
            },
            decompressFromBase64: function (_) {
              return _ == null
                ? ""
                : _ == ""
                  ? null
                  : O._decompress(_.length, 32, function (s) {
                      return H(u, _.charAt(s));
                    });
            },
            compressToUTF16: function (_) {
              return _ == null
                ? ""
                : O._compress(_, 15, function (s) {
                    return m(s + 32);
                  }) + " ";
            },
            decompressFromUTF16: function (_) {
              return _ == null
                ? ""
                : _ == ""
                  ? null
                  : O._decompress(_.length, 16384, function (s) {
                      return _.charCodeAt(s) - 32;
                    });
            },
            compressToUint8Array: function (_) {
              for (
                var s = O.compress(_),
                  h = new Uint8Array(s.length * 2),
                  w = 0,
                  l = s.length;
                w < l;
                w++
              ) {
                var A = s.charCodeAt(w);
                (h[w * 2] = A >>> 8), (h[w * 2 + 1] = A % 256);
              }
              return h;
            },
            decompressFromUint8Array: function (_) {
              if (_ == null) return O.decompress(_);
              for (
                var s = new Array(_.length / 2), h = 0, w = s.length;
                h < w;
                h++
              )
                s[h] = _[h * 2] * 256 + _[h * 2 + 1];
              var l = [];
              return (
                s.forEach(function (A) {
                  l.push(m(A));
                }),
                O.decompress(l.join(""))
              );
            },
            compressToEncodedURIComponent: function (_) {
              return _ == null
                ? ""
                : O._compress(_, 6, function (s) {
                    return P.charAt(s);
                  });
            },
            decompressFromEncodedURIComponent: function (_) {
              return _ == null
                ? ""
                : _ == ""
                  ? null
                  : ((_ = _.replace(/ /g, "+")),
                    O._decompress(_.length, 32, function (s) {
                      return H(P, _.charAt(s));
                    }));
            },
            compress: function (_) {
              return O._compress(_, 16, function (s) {
                return m(s);
              });
            },
            _compress: function (_, s, h) {
              if (_ == null) return "";
              var w,
                l,
                A = {},
                x = {},
                E = "",
                k = "",
                N = "",
                v = 2,
                b = 3,
                g = 2,
                U = [],
                f = 0,
                y = 0,
                B;
              for (B = 0; B < _.length; B += 1)
                if (
                  ((E = _.charAt(B)),
                  Object.prototype.hasOwnProperty.call(A, E) ||
                    ((A[E] = b++), (x[E] = !0)),
                  (k = N + E),
                  Object.prototype.hasOwnProperty.call(A, k))
                )
                  N = k;
                else {
                  if (Object.prototype.hasOwnProperty.call(x, N)) {
                    if (N.charCodeAt(0) < 256) {
                      for (w = 0; w < g; w++)
                        (f = f << 1),
                          y == s - 1 ? ((y = 0), U.push(h(f)), (f = 0)) : y++;
                      for (l = N.charCodeAt(0), w = 0; w < 8; w++)
                        (f = (f << 1) | (l & 1)),
                          y == s - 1 ? ((y = 0), U.push(h(f)), (f = 0)) : y++,
                          (l = l >> 1);
                    } else {
                      for (l = 1, w = 0; w < g; w++)
                        (f = (f << 1) | l),
                          y == s - 1 ? ((y = 0), U.push(h(f)), (f = 0)) : y++,
                          (l = 0);
                      for (l = N.charCodeAt(0), w = 0; w < 16; w++)
                        (f = (f << 1) | (l & 1)),
                          y == s - 1 ? ((y = 0), U.push(h(f)), (f = 0)) : y++,
                          (l = l >> 1);
                    }
                    v--, v == 0 && ((v = Math.pow(2, g)), g++), delete x[N];
                  } else
                    for (l = A[N], w = 0; w < g; w++)
                      (f = (f << 1) | (l & 1)),
                        y == s - 1 ? ((y = 0), U.push(h(f)), (f = 0)) : y++,
                        (l = l >> 1);
                  v--,
                    v == 0 && ((v = Math.pow(2, g)), g++),
                    (A[k] = b++),
                    (N = String(E));
                }
              if (N !== "") {
                if (Object.prototype.hasOwnProperty.call(x, N)) {
                  if (N.charCodeAt(0) < 256) {
                    for (w = 0; w < g; w++)
                      (f = f << 1),
                        y == s - 1 ? ((y = 0), U.push(h(f)), (f = 0)) : y++;
                    for (l = N.charCodeAt(0), w = 0; w < 8; w++)
                      (f = (f << 1) | (l & 1)),
                        y == s - 1 ? ((y = 0), U.push(h(f)), (f = 0)) : y++,
                        (l = l >> 1);
                  } else {
                    for (l = 1, w = 0; w < g; w++)
                      (f = (f << 1) | l),
                        y == s - 1 ? ((y = 0), U.push(h(f)), (f = 0)) : y++,
                        (l = 0);
                    for (l = N.charCodeAt(0), w = 0; w < 16; w++)
                      (f = (f << 1) | (l & 1)),
                        y == s - 1 ? ((y = 0), U.push(h(f)), (f = 0)) : y++,
                        (l = l >> 1);
                  }
                  v--, v == 0 && ((v = Math.pow(2, g)), g++), delete x[N];
                } else
                  for (l = A[N], w = 0; w < g; w++)
                    (f = (f << 1) | (l & 1)),
                      y == s - 1 ? ((y = 0), U.push(h(f)), (f = 0)) : y++,
                      (l = l >> 1);
                v--, v == 0 && ((v = Math.pow(2, g)), g++);
              }
              for (l = 2, w = 0; w < g; w++)
                (f = (f << 1) | (l & 1)),
                  y == s - 1 ? ((y = 0), U.push(h(f)), (f = 0)) : y++,
                  (l = l >> 1);
              for (;;)
                if (((f = f << 1), y == s - 1)) {
                  U.push(h(f));
                  break;
                } else y++;
              return U.join("");
            },
            decompress: function (_) {
              return _ == null
                ? ""
                : _ == ""
                  ? null
                  : O._decompress(_.length, 32768, function (s) {
                      return _.charCodeAt(s);
                    });
            },
            _decompress: function (_, s, h) {
              var w = [],
                l = 4,
                A = 4,
                x = 3,
                E = "",
                k = [],
                N,
                v,
                b,
                g,
                U,
                f,
                y,
                B = { val: h(0), position: s, index: 1 };
              for (N = 0; N < 3; N += 1) w[N] = N;
              for (b = 0, U = Math.pow(2, 2), f = 1; f != U; )
                (g = B.val & B.position),
                  (B.position >>= 1),
                  B.position == 0 && ((B.position = s), (B.val = h(B.index++))),
                  (b |= (g > 0 ? 1 : 0) * f),
                  (f <<= 1);
              switch (b) {
                case 0:
                  for (b = 0, U = Math.pow(2, 8), f = 1; f != U; )
                    (g = B.val & B.position),
                      (B.position >>= 1),
                      B.position == 0 &&
                        ((B.position = s), (B.val = h(B.index++))),
                      (b |= (g > 0 ? 1 : 0) * f),
                      (f <<= 1);
                  y = m(b);
                  break;
                case 1:
                  for (b = 0, U = Math.pow(2, 16), f = 1; f != U; )
                    (g = B.val & B.position),
                      (B.position >>= 1),
                      B.position == 0 &&
                        ((B.position = s), (B.val = h(B.index++))),
                      (b |= (g > 0 ? 1 : 0) * f),
                      (f <<= 1);
                  y = m(b);
                  break;
                case 2:
                  return "";
              }
              for (w[3] = y, v = y, k.push(y); ; ) {
                if (B.index > _) return "";
                for (b = 0, U = Math.pow(2, x), f = 1; f != U; )
                  (g = B.val & B.position),
                    (B.position >>= 1),
                    B.position == 0 &&
                      ((B.position = s), (B.val = h(B.index++))),
                    (b |= (g > 0 ? 1 : 0) * f),
                    (f <<= 1);
                switch ((y = b)) {
                  case 0:
                    for (b = 0, U = Math.pow(2, 8), f = 1; f != U; )
                      (g = B.val & B.position),
                        (B.position >>= 1),
                        B.position == 0 &&
                          ((B.position = s), (B.val = h(B.index++))),
                        (b |= (g > 0 ? 1 : 0) * f),
                        (f <<= 1);
                    (w[A++] = m(b)), (y = A - 1), l--;
                    break;
                  case 1:
                    for (b = 0, U = Math.pow(2, 16), f = 1; f != U; )
                      (g = B.val & B.position),
                        (B.position >>= 1),
                        B.position == 0 &&
                          ((B.position = s), (B.val = h(B.index++))),
                        (b |= (g > 0 ? 1 : 0) * f),
                        (f <<= 1);
                    (w[A++] = m(b)), (y = A - 1), l--;
                    break;
                  case 2:
                    return k.join("");
                }
                if ((l == 0 && ((l = Math.pow(2, x)), x++), w[y])) E = w[y];
                else if (y === A) E = v + v.charAt(0);
                else return null;
                k.push(E),
                  (w[A++] = v + E.charAt(0)),
                  l--,
                  (v = E),
                  l == 0 && ((l = Math.pow(2, x)), x++);
              }
            },
          };
          return O;
        })();
        i != null
          ? (i.exports = p)
          : typeof angular < "u" &&
            angular != null &&
            angular.module("LZString", []).factory("LZString", function () {
              return p;
            });
      })(ya)),
    ya.exports
  );
}
export {
  tr as D,
  oc as a,
  Wa as b,
  is as c,
  Rs as d,
  ss as e,
  Cs as f,
  qs as g,
  Va as n,
  tc as r,
};
