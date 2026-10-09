import {
  u as S,
  D as G,
  a as W,
  b as J,
  c as V,
  d as X,
  e as ee,
  B as m,
  f as se,
  g as ae,
  h as te,
  i as ne,
  C as re,
  j as ie,
  L as le,
  k as ce,
  l as T,
  m as D,
  A as oe,
  n as de,
  o as me,
  p as L,
  q as xe,
  r as g,
  s as c,
  t as ue,
  v as he,
  w as pe,
  S as ge,
  x as fe,
  R as Ne,
  y as be,
  I as ye,
} from "../chunks/I18nProvider-bZ79bPbq.js";
import {
  j as e,
  L as we,
  C as _,
  H as ve,
  S as ke,
  U as Ce,
  r as u,
  b as Se,
  d as Te,
  e as De,
  f as Le,
  h as _e,
  I as E,
  F as Ee,
  D as Me,
  R as h,
  i as Re,
  k as ze,
  l as Ie,
  m as Pe,
  n as Ue,
  o as Ae,
  E as Be,
  p as Oe,
  M as Fe,
  q as He,
  s as Ke,
  G as qe,
  t as Qe,
  u as Ye,
  v as Ze,
} from "../chunks/vendor-ui-Piys8gOI.js";
import {
  n as o,
  g as $e,
  o as f,
  b as x,
  a as Ge,
  c as We,
  A as M,
  i as Je,
} from "../chunks/sentry--tCLaZao.js";
import "../chunks/vendor-utils-bU8bXqsc.js";
import "../chunks/vendor-sentry-B3P1rFJ6.js";
(function () {
  try {
    var s =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    s.SENTRY_RELEASE = { id: "bookmarksync-extension@dev" };
    var i = new s.Error().stack;
    i &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[i] = "4bc729b4-e823-4ddd-8db0-87017ded3609"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-4bc729b4-e823-4ddd-8db0-87017ded3609"));
  } catch {}
})();
function N({ icon: s, title: i, description: a }) {
  return e.jsxs("div", {
    className: "flex items-start gap-3 p-2 rounded-lg bg-muted/50",
    children: [
      e.jsx("div", {
        className:
          "h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary",
        children: s,
      }),
      e.jsxs("div", {
        children: [
          e.jsx("p", { className: "font-medium text-sm", children: i }),
          e.jsx("p", {
            className: "text-xs text-muted-foreground",
            children: a,
          }),
        ],
      }),
    ],
  });
}
function Xe() {
  var w, v;
  const { t: s } = S(["popup", "common", "settings", "sync"]),
    { settings: i, updateSettings: a, loading: R } = se(),
    { syncState: b, loading: z } = ae(),
    [I, P] = u.useState(0),
    [U, p] = u.useState(!1),
    { session: A, hasPermission: B, isLoading: O } = te(),
    n = (w = A.data) == null ? void 0 : w.user,
    F = $e(),
    { versionInfo: d } = ne();
  u.useEffect(() => {
    (async () => {
      const t = await x.bookmarks.getTree();
      let k = 0;
      const C = ($) => {
        for (const j of $) j.url && k++, j.children && C(j.children);
      };
      C(t), P(k);
    })();
  }, []),
    u.useEffect(() => {
      (async () => {
        try {
          await x.runtime.sendMessage({ type: "CHECK_STUCK_SYNC" });
        } catch (t) {
          console.warn("Check stuck sync failed:", t);
        }
      })();
    }, []);
  const H = async () => {
      try {
        await x.runtime.sendMessage({ type: "SYNC_BOOKMARKS" });
      } catch (t) {
        console.error("Sync request failed:", t);
      }
    },
    K = (t) => {
      if (t && !B("auto_sync")) {
        p(!0);
        return;
      }
      a({ enableAutoSync: t }, !0);
    },
    q = async () => {
      try {
        await x.runtime.sendMessage({ type: "FORCE_PUSH" });
      } catch (t) {
        console.error("Force push failed:", t);
      }
    },
    Q = async () => {
      try {
        await x.runtime.sendMessage({ type: "FORCE_PULL" });
      } catch (t) {
        console.error("Force pull failed:", t);
      }
    },
    Y = async () => {
      try {
        await Ge.signOut();
      } catch (t) {
        console.error("Sign out failed:", t);
      }
    },
    y = () => {
      We();
    };
  if (R || z)
    return e.jsx("div", {
      className:
        "w-[350px] h-[400px] flex items-center justify-center bg-background",
      children: e.jsx("div", {
        className:
          "animate-spin rounded-full h-8 w-8 border-b-2 border-primary",
      }),
    });
  const r = b.syncStatus || {},
    l = r.lastStatus === "syncing",
    Z = r.lastSyncTime
      ? new Date(r.lastSyncTime).toLocaleString()
      : s("common:status.never");
  return e.jsxs("div", {
    className: "w-[330px] bg-muted/50 transition-colors duration-300",
    children: [
      e.jsxs(re, {
        className: "border-none bg-transparent shadow-none",
        children: [
          e.jsx(ie, {
            className: "px-4 py-2 bg-card border-b border-border/50",
            children: e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-1",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-5 h-5 rounded-xs flex items-center justify-center",
                      children: e.jsx(le, { className: "w-4 h-4" }),
                    }),
                    e.jsx(ce, {
                      className: "text-md",
                      children: "BookmarkSync",
                    }),
                  ],
                }),
                null,
              ],
            }),
          }),
          b.pendingSyncConfirmation &&
            e.jsxs("div", {
              onClick: y,
              className:
                "mx-4 mt-2 p-2 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/50 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors group",
              children: [
                e.jsx(_e, {
                  className: "w-4 h-4 text-orange-600 shrink-0 animate-pulse",
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[11px] font-bold text-orange-700 dark:text-orange-400",
                      children: s("popup:safetyWarning.title"),
                    }),
                    e.jsx("p", {
                      className:
                        "text-[10px] text-orange-600/80 dark:text-orange-400/70 truncate",
                      children: s("popup:safetyWarning.description"),
                    }),
                  ],
                }),
                e.jsx(E, {
                  className:
                    "w-3.5 h-3.5 text-orange-400 group-hover:text-orange-600 transition-colors",
                }),
              ],
            }),
          e.jsx(ue, {
            className: "p-3",
            children: e.jsxs("div", {
              className: "flex flex-col gap-3",
              children: [
                e.jsxs("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-2 bg-card p-3 rounded-xl shadow-xs hover:shadow-md transition-shadow",
                      children: [
                        e.jsx("div", {
                          className:
                            "flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0",
                          children: e.jsx(Ee, { size: 20 }),
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col min-w-0",
                          children: [
                            e.jsx("p", {
                              className: "text-md leading-none truncate",
                              children: I,
                            }),
                            e.jsx("p", {
                              className:
                                "text-[10px] text-muted-foreground mt-1.5 truncate",
                              children: s("popup:stats.localBookmarks"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-2 bg-card p-3 rounded-xl shadow-xs hover:shadow-md transition-shadow",
                      children: [
                        e.jsx("div", {
                          className:
                            "flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0",
                          children: e.jsx(Me, { size: 20 }),
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col min-w-0",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-md leading-none truncate capitalize",
                              children: i.storageType,
                            }),
                            e.jsx("p", {
                              className:
                                "text-[10px] text-muted-foreground mt-1.5 truncate",
                              children: s("popup:stats.storageType"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "rounded-xl shadow-xs bg-card space-y-3 hover:shadow-md transition-shadow text-xs",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mx-3 mt-3",
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground",
                          children: s("popup:stats.lastStatus"),
                        }),
                        e.jsxs(he, {
                          variant: l
                            ? "default"
                            : r.lastStatus === "success"
                              ? "success"
                              : r.lastStatus === "failure"
                                ? "destructive"
                                : "secondary",
                          className: "px-2 py-0 h-6",
                          children: [
                            l
                              ? e.jsx(h, {
                                  className: "w-3 h-3 mr-1 animate-spin",
                                })
                              : r.lastStatus === "success"
                                ? e.jsx(Re, { className: "w-3 h-3 mr-1" })
                                : r.lastStatus === "failure"
                                  ? e.jsx(ze, { className: "w-3 h-3 mr-1" })
                                  : e.jsx(_, { className: "w-3 h-3 mr-1" }),
                            l
                              ? s("common:status.syncing")
                              : r.lastStatus === "success"
                                ? s("common:status.success")
                                : r.lastStatus === "failure"
                                  ? s("common:status.failure")
                                  : s("common:status.ready"),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center justify-between text-muted-foreground mx-3",
                      children: [
                        e.jsx("span", { children: s("popup:stats.lastSync") }),
                        e.jsx("span", { children: Z }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "flex items-center text-muted-foreground border-t border-border/50 min-h-[40px] rounded-b-xl overflow-hidden relative ",
                      children: l
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("div", {
                                className: "absolute inset-0 bg-primary/5",
                              }),
                              e.jsxs("svg", {
                                className:
                                  "absolute bottom-0 left-0 w-full h-[35px] pointer-events-none",
                                viewBox: "0 0 100 20",
                                preserveAspectRatio: "none",
                                children: [
                                  e.jsx("path", {
                                    d: "M-100,20 L-100,5 Q-75,0 -50,5 T0,5 T50,5 T100,5 T150,5 T200,5 L200,20 Z",
                                    fill: "currentColor",
                                    className: "text-primary/9",
                                    children: e.jsx("animateTransform", {
                                      attributeName: "transform",
                                      type: "translate",
                                      from: "-100 0",
                                      to: "0 0",
                                      dur: "3.5s",
                                      repeatCount: "indefinite",
                                    }),
                                  }),
                                  e.jsx("path", {
                                    d: "M-100,20 L-100,9 Q-75,3 -50,9 T0,9 T50,9 T100,9 T150,9 T200,9 L200,20 Z",
                                    fill: "currentColor",
                                    className: "text-primary/11",
                                    children: e.jsx("animateTransform", {
                                      attributeName: "transform",
                                      type: "translate",
                                      from: "0 0",
                                      to: "-100 0",
                                      dur: "2.8s",
                                      repeatCount: "indefinite",
                                    }),
                                  }),
                                  e.jsx("path", {
                                    d: "M-100,20 L-100,13 Q-75,9 -50,13 T0,13 T50,13 T100,13 T150,13 T200,13 L200,20 Z",
                                    fill: "currentColor",
                                    className: "text-primary/12",
                                    children: e.jsx("animateTransform", {
                                      attributeName: "transform",
                                      type: "translate",
                                      from: "-100 0",
                                      to: "0 0",
                                      dur: "2s",
                                      repeatCount: "indefinite",
                                    }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "relative z-10 flex items-center justify-center w-full gap-2 text-primary hidden",
                                children: [
                                  e.jsx(h, {
                                    className: "w-3.5 h-3.5 animate-spin",
                                  }),
                                  e.jsx("span", {
                                    className: "text-xs font-medium",
                                    children: s("common:status.syncing"),
                                  }),
                                ],
                              }),
                            ],
                          })
                        : r.lastMessage &&
                          e.jsxs("div", {
                            className: "flex items-center gap-2 mx-3",
                            children: [
                              e.jsx(E, { className: "w-3.5 h-3.5 shrink-0" }),
                              e.jsx("span", { children: r.lastMessage }),
                            ],
                          }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "p-3 rounded-xl shadow-xs bg-card space-y-3 min-h-[60px]  hover:shadow-md transition-shadow",
                  children: e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx(pe, {
                                className: "text-xs",
                                htmlFor: "auto-sync",
                                children: s("popup:autoSync.title"),
                              }),
                              null,
                            ],
                          }),
                          e.jsx("div", {
                            className: "text-xs text-muted-foreground",
                            children: s("popup:autoSync.description"),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "flex items-center gap-2",
                        children: e.jsx(ge, {
                          id: "auto-sync",
                          checked: i.enableAutoSync,
                          onCheckedChange: K,
                        }),
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: [
                    e.jsxs(m, {
                      variant: "outline",
                      size: "sm",
                      className: "gap-2 active:scale-[0.98]",
                      onClick: q,
                      disabled: l,
                      children: [
                        e.jsx(Ie, { className: "w-3.5 h-3.5" }),
                        s("settings:dashboard.forcePush"),
                      ],
                    }),
                    e.jsxs(m, {
                      variant: "outline",
                      size: "sm",
                      className: "gap-2 active:scale-[0.98]",
                      onClick: Q,
                      disabled: l,
                      children: [
                        e.jsx(Pe, { className: "w-3.5 h-3.5" }),
                        s("settings:dashboard.forcePull"),
                      ],
                    }),
                  ],
                }),
                e.jsxs(m, {
                  variant: "default",
                  size: "sm",
                  onClick: H,
                  disabled: l,
                  className:
                    "w-full shadow-md transition-all hover:shadow-lg active:scale-[0.98] flex gap-2",
                  children: [
                    l
                      ? e.jsx(h, { className: "w-5 h-5 animate-spin" })
                      : e.jsx(h, { className: "w-5 h-5" }),
                    s(l ? "common:buttons.syncing" : "common:buttons.sync"),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(fe, {
            className: "p-0",
            children: e.jsxs("div", {
              className:
                "h-10 bg-card border-t border-border/50 px-4 flex items-center justify-between w-full",
              children: [
                e.jsxs("button", {
                  onClick: y,
                  className:
                    "flex items-center gap-1 text-xs p-1.5 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-all active:scale-90",
                  title: s("common:buttons.settings"),
                  children: [
                    e.jsx(Ue, { size: 16 }),
                    s("common:buttons.settings"),
                  ],
                }),
                e.jsx("div", {
                  className: "flex flex-col items-center",
                  children: e.jsxs("span", {
                    className:
                      "text-[10px] font-medium text-muted-foreground/60 tracking-wider flex items-center gap-1",
                    children: [
                      "V",
                      F,
                      (d == null ? void 0 : d.hasUpdate) &&
                        e.jsx("a", {
                          href: d.changelogUrl,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "text-red-500 hover:text-red-600 animate-pulse",
                          title: `New version available: ${d.version}`,
                          children: e.jsx(Ae, { className: "w-3 h-3" }),
                        }),
                    ],
                  }),
                }),
                e.jsxs(T, {
                  children: [
                    e.jsx(D, {
                      asChild: !0,
                      children: e.jsxs("button", {
                        className:
                          "flex items-center gap-1 text-xs p-1.5 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-all active:scale-90",
                        title: s("common:buttons.more"),
                        children: [
                          e.jsx(Be, { size: 16 }),
                          s("common:buttons.more"),
                        ],
                      }),
                    }),
                    e.jsxs(L, {
                      align: "end",
                      side: "top",
                      className: "w-48 mb-1",
                      children: [
                        null,
                        null,
null,
                        e.jsxs(c, {
                          onClick: () => o("/"),
                          children: [
                            e.jsx(qe, { className: "mr-2 h-4 w-4" }),
                            e.jsx("span", {
                              className: "text-xs",
                              children: s("popup:menu.website"),
                            }),
                          ],
                        }),
                        e.jsxs(c, {
                          onClick: () => f("mailto:support@memoload.com"),
                          children: [
                            e.jsx(Qe, { className: "mr-2 h-4 w-4" }),
                            e.jsx("span", {
                              className: "text-xs",
                              children: s("popup:menu.support"),
                            }),
                          ],
                        }),
                        e.jsxs(c, {
                          onClick: () => o("/terms"),
                          children: [
                            e.jsx(Ye, { className: "mr-2 h-4 w-4" }),
                            e.jsx("span", {
                              className: "text-xs",
                              children: s("popup:menu.terms"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      null,
    ],
  });
}
Je(),
  Ne.createRoot(document.getElementById("root")).render(
    e.jsx(Ze.StrictMode, {
      children: e.jsx(be, { children: e.jsx(ye, { children: e.jsx(Xe, {}) }) }),
    }),
  );
