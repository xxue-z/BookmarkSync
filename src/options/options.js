import {
  z as j,
  h as Y,
  u as D,
  D as qe,
  a as Ye,
  B as N,
  b as bt,
  c as jt,
  d as yt,
  e as Nt,
  C as T,
  j as _,
  k as L,
  E as z,
  t as P,
  w as y,
  x as X,
  S as re,
  i as vt,
  L as Xe,
  v as Pe,
  f as ue,
  g as Qe,
  l as wt,
  m as Ct,
  A as Ze,
  n as es,
  o as ss,
  p as kt,
  q as St,
  r as ts,
  F as Tt,
  s as ze,
  R as Pt,
  y as Rt,
  I as _t,
} from "../chunks/I18nProvider-bZ79bPbq.js";
import {
  r as c,
  j as e,
  w as Ue,
  T as as,
  x as Lt,
  y as rs,
  z as is,
  A as Dt,
  B as ns,
  P as Bt,
  J as os,
  V as zt,
  K as ls,
  N as cs,
  O as Ut,
  Q as ds,
  W as At,
  X as gs,
  Y as Ft,
  Z as Et,
  _ as It,
  R as ge,
  n as ms,
  S as pe,
  H as fe,
  $ as hs,
  a0 as be,
  a1 as je,
  a2 as Mt,
  a3 as Ot,
  a4 as ye,
  a5 as Ne,
  D as ve,
  a6 as xs,
  a7 as Kt,
  a8 as Gt,
  a9 as $t,
  h as us,
  aa as ps,
  ab as Ae,
  ac as Ht,
  q as fs,
  ad as Vt,
  ae as Wt,
  af as Jt,
  d as bs,
  ag as qt,
  i as Re,
  k as Fe,
  C as ie,
  l as js,
  m as ys,
  ah as Ns,
  ai as Yt,
  aj as Xt,
  ak as Qt,
  al as vs,
  am as Ee,
  an as Zt,
  ao as ea,
  ap as me,
  aq as sa,
  ar as _e,
  b as ws,
  as as Ie,
  at as Cs,
  au as ks,
  av as Ss,
  aw as Ts,
  ax as Ps,
  ay as we,
  az as Rs,
  aA as Me,
  aB as ta,
  aC as aa,
  I as _s,
  aD as ra,
  aE as ia,
  aF as na,
  aG as Ls,
  aH as oa,
  aI as Ds,
  aJ as la,
  aK as ca,
  aL as Bs,
  aM as zs,
  aN as da,
  aO as ga,
  aP as Us,
  aQ as ma,
  aR as ha,
  aS as xa,
  aT as ua,
  aU as he,
  aV as pa,
  aW as fa,
  aX as ba,
  aY as As,
  e as ja,
  aZ as ya,
  M as Na,
  v as va,
} from "../chunks/vendor-ui-Piys8gOI.js";
import {
  n as Z,
  r as A,
  b as F,
  A as W,
  e as Oe,
  D as Ke,
  g as Ge,
  f as wa,
  a as Ce,
  s as J,
  d as Le,
  h as Ca,
  j as ka,
  k as Sa,
  t as Fs,
  i as Ta,
} from "../chunks/sentry--tCLaZao.js";
import {
  G as $e,
  a as Pa,
  b as Es,
  g as Is,
  S as xe,
  L as Ms,
  c as Ra,
  d as Os,
  e as _a,
} from "../chunks/hash-Cx2ffm9Z.js";
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
    var a = new s.Error().stack;
    a &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[a] = "8e2e769a-d4b5-483d-bd11-9449da54d1f8"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-8e2e769a-d4b5-483d-bd11-9449da54d1f8"));
  } catch {}
})();
const La = Ue(
    "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
    {
      variants: {
        variant: {
          default: "bg-background text-foreground",
          destructive:
            "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  G = c.forwardRef(({ className: s, variant: a, ...t }, i) =>
    e.jsx("div", {
      ref: i,
      role: "alert",
      className: `${La({ variant: a })} ${s || ""}`,
      ...t,
    }),
  );
G.displayName = "Alert";
const De = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("h5", {
    ref: t,
    className: `mb-1 font-medium leading-none tracking-tight ${s || ""}`,
    ...a,
  }),
);
De.displayName = "AlertTitle";
const $ = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", {
    ref: t,
    className: `text-sm [&_p]:leading-relaxed ${s || ""}`,
    ...a,
  }),
);
$.displayName = "AlertDescription";
const ne = Ft,
  oe = Et,
  ee = c.forwardRef(({ className: s, children: a, ...t }, i) =>
    e.jsxs(as, {
      ref: i,
      className: j(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        s,
      ),
      ...t,
      children: [
        a,
        e.jsx(Lt, {
          asChild: !0,
          children: e.jsx(rs, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    }),
  );
ee.displayName = as.displayName;
const Ks = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(is, {
    ref: t,
    className: j("flex cursor-default items-center justify-center py-1", s),
    ...a,
    children: e.jsx(Dt, { className: "h-4 w-4" }),
  }),
);
Ks.displayName = is.displayName;
const Gs = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(ns, {
    ref: t,
    className: j("flex cursor-default items-center justify-center py-1", s),
    ...a,
    children: e.jsx(rs, { className: "h-4 w-4" }),
  }),
);
Gs.displayName = ns.displayName;
const se = c.forwardRef(
  ({ className: s, children: a, position: t = "popper", ...i }, n) =>
    e.jsx(Bt, {
      children: e.jsxs(os, {
        ref: n,
        className: j(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          t === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          s,
        ),
        position: t,
        ...i,
        children: [
          e.jsx(Ks, {}),
          e.jsx(zt, {
            className: j(
              "p-1",
              t === "popper" &&
                "h-[var(--radix-select-content-available-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: a,
          }),
          e.jsx(Gs, {}),
        ],
      }),
    }),
);
se.displayName = os.displayName;
const Da = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(ls, {
    ref: t,
    className: j("py-1.5 pl-8 pr-2 text-sm font-semibold", s),
    ...a,
  }),
);
Da.displayName = ls.displayName;
const v = c.forwardRef(({ className: s, children: a, ...t }, i) =>
  e.jsxs(cs, {
    ref: i,
    className: j(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      s,
    ),
    ...t,
    children: [
      e.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: e.jsx(Ut, { children: e.jsx(ds, { className: "h-4 w-4" }) }),
      }),
      e.jsx(At, { children: a }),
    ],
  }),
);
v.displayName = cs.displayName;
const Ba = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(gs, { ref: t, className: j("-mx-1 my-1 h-px bg-muted", s), ...a }),
);
Ba.displayName = gs.displayName;
const B = c.forwardRef(({ className: s, type: a, ...t }, i) =>
  e.jsx("input", {
    type: a,
    className: j(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      s,
    ),
    ref: i,
    ...t,
  }),
);
B.displayName = "Input";
const q = c.forwardRef(({ className: s, ...a }, t) => {
  const [i, n] = c.useState(!1);
  return e.jsxs("div", {
    className: "relative",
    children: [
      e.jsx(B, {
        type: i ? "text" : "password",
        className: j("pr-10", s),
        ref: t,
        ...a,
      }),
      e.jsxs("button", {
        type: "button",
        onClick: () => n(!i),
        className:
          "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
        children: [
          i
            ? e.jsx(Mt, { className: "h-4 w-4", "aria-hidden": "true" })
            : e.jsx(Ot, { className: "h-4 w-4", "aria-hidden": "true" }),
          e.jsx("span", {
            className: "sr-only",
            children: i ? "Hide password" : "Show password",
          }),
        ],
      }),
    ],
  });
});
q.displayName = "PasswordInput";
function ke({
  value: s,
  onChange: a,
  placeholder: t = "\u8BF7\u9009\u62E9\u6216\u8F93\u5165",
  options: i = [],
  loading: n = !1,
  onOpenChange: r,
  className: l,
}) {
  const [m, o] = c.useState(!1),
    [u, x] = c.useState(s),
    g = (h) => {
      o(!1), x(h), a(h);
    },
    k = (h) => {
      x(h), a(h);
    },
    f = (h) => {
      h && !s && o(!1), r == null || r(h);
    };
  return m
    ? e.jsxs("div", {
        className: "relative",
        children: [
          e.jsx(B, {
            value: u,
            onChange: (h) => k(h.target.value),
            placeholder: t,
            onBlur: () => {
              i.includes(u) && o(!1);
            },
            className: l,
            autoFocus: !0,
          }),
          n &&
            e.jsx(ye, {
              className:
                "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground",
            }),
        ],
      })
    : e.jsxs(ne, {
        value: s,
        onValueChange: g,
        onOpenChange: f,
        children: [
          e.jsx(ee, { className: l, children: e.jsx(oe, { placeholder: t }) }),
          e.jsx(se, {
            children: n
              ? e.jsx("div", {
                  className: "flex items-center justify-center py-2",
                  children: e.jsx(ye, {
                    className: "h-4 w-4 animate-spin text-muted-foreground",
                  }),
                })
              : i.length > 0
                ? e.jsxs(e.Fragment, {
                    children: [
                      i.map((h) => e.jsx(v, { value: h, children: h }, h)),
                      e.jsx(v, {
                        value: "__custom__",
                        onSelect: () => {
                          o(!0);
                        },
                        children: "\u81EA\u5B9A\u4E49\u8F93\u5165...",
                      }),
                    ],
                  })
                : e.jsx("div", {
                    className: "py-2 px-2 text-sm text-muted-foreground",
                    children:
                      "\u6682\u65E0\u9009\u9879\uFF0C\u8BF7\u8F93\u5165",
                  }),
          }),
        ],
      });
}
function za({
  settings: s,
  updateSettings: a,
  testing: t,
  testResult: i,
  handleTestConnection: n,
}) {
  var R, U, I, Q, V, H, M;
  const { t: r } = D(["settings", "common"]),
    [l, m] = c.useState([]),
    [o, u] = c.useState([]),
    [x, g] = c.useState([]),
    [k, f] = c.useState(!1),
    [h, d] = c.useState(!1),
    [w, C] = c.useState(!1),
    S = c.useCallback(
      async (E) => {
        if (!E) {
          m([]);
          return;
        }
        f(!0);
        try {
          const O = await new $e(s.storageConfigs.github).getUserInfo();
          m([O.login]);
        } catch (O) {
          console.error("Failed to load user info:", O), m([]);
        } finally {
          f(!1);
        }
      },
      [s.storageConfigs.github],
    ),
    b = c.useCallback(
      async (E) => {
        if (!E || !s.storageConfigs.github.token) {
          u([]);
          return;
        }
        d(!0);
        try {
          const O = await new $e(s.storageConfigs.github).getUserRepositories();
          u(O.map((ae) => ae.name));
        } catch (O) {
          console.error("Failed to load repositories:", O), u([]);
        } finally {
          d(!1);
        }
      },
      [s.storageConfigs.github],
    ),
    p = c.useCallback(
      async (E, O) => {
        if (!E || !O || !s.storageConfigs.github.token) {
          g([]);
          return;
        }
        C(!0);
        try {
          const ae = await new $e(
            s.storageConfigs.github,
          ).getRepositoryBranches(E, O);
          g(ae.map((ft) => ft.name));
        } catch (ae) {
          console.error("Failed to load branches:", ae), g([]);
        } finally {
          C(!1);
        }
      },
      [s.storageConfigs.github],
    );
  return (
    c.useEffect(() => {
      S(s.storageConfigs.github.token);
    }, [s.storageConfigs.github.token, S]),
    c.useEffect(() => {
      s.storageConfigs.github.owner && b(s.storageConfigs.github.owner);
    }, [s.storageConfigs.github.owner, b]),
    c.useEffect(() => {
      s.storageConfigs.github.owner &&
        s.storageConfigs.github.repo &&
        p(s.storageConfigs.github.owner, s.storageConfigs.github.repo);
    }, [s.storageConfigs.github.owner, s.storageConfigs.github.repo, p]),
    e.jsxs(T, {
      className: "animate-in fade-in slide-in-from-top-2",
      children: [
        e.jsxs(_, {
          children: [
            e.jsx(L, {
              className: "text-lg",
              children: r("settings:storage.github.title"),
            }),
            e.jsx(z, { children: r("settings:storage.github.description") }),
          ],
        }),
        e.jsxs(P, {
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsx(y, {
                  htmlFor: "githubToken",
                  children: r("settings:storage.github.tokenLabel"),
                }),
                e.jsxs("div", {
                  className: "flex items-end gap-2",
                  children: [
                    e.jsx("div", {
                      className: "flex-1",
                      children: e.jsx(q, {
                        id: "githubToken",
                        placeholder: r(
                          "settings:storage.github.tokenPlaceholder",
                        ),
                        value:
                          (R = s.storageConfigs.github) == null
                            ? void 0
                            : R.token,
                        onChange: (E) =>
                          a({
                            storageConfigs: {
                              ...s.storageConfigs,
                              github: {
                                ...s.storageConfigs.github,
                                token: E.target.value,
                              },
                            },
                          }),
                      }),
                    }),
                    e.jsxs(N, {
                      variant: "outline",
                      onClick: () =>
                        window.open(
                          "https://github.com/settings/tokens/new?description=BookmarkSync&scopes=repo,gist,user",
                          "_blank",
                        ),
                      title: "\u4E00\u952E\u521B\u5EFA GitHub Token",
                      children: [
                        e.jsx(Ne, { className: "h-4 w-4 mr-2" }),
                        r("settings:storage.github.createToken"),
                      ],
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground mt-2",
                  children: r("settings:storage.github.tokenNote"),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(y, {
                      htmlFor: "githubOwner",
                      children: r("settings:storage.github.ownerLabel"),
                    }),
                    e.jsx(ke, {
                      value:
                        (U = s.storageConfigs.github) == null
                          ? void 0
                          : U.owner,
                      onChange: (E) =>
                        a({
                          storageConfigs: {
                            ...s.storageConfigs,
                            github: { ...s.storageConfigs.github, owner: E },
                          },
                        }),
                      placeholder: r(
                        "settings:storage.github.ownerPlaceholder",
                      ),
                      options: l,
                      loading: k,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(y, {
                      htmlFor: "githubRepo",
                      children: r("settings:storage.github.repoLabel"),
                    }),
                    e.jsx(ke, {
                      value:
                        (I = s.storageConfigs.github) == null ? void 0 : I.repo,
                      onChange: (E) =>
                        a({
                          storageConfigs: {
                            ...s.storageConfigs,
                            github: { ...s.storageConfigs.github, repo: E },
                          },
                        }),
                      placeholder: r("settings:storage.github.repoPlaceholder"),
                      options: o,
                      loading: h,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(y, {
                      htmlFor: "githubBranch",
                      children: r("settings:storage.github.branchLabel"),
                    }),
                    e.jsx(ke, {
                      value:
                        ((Q = s.storageConfigs.github) == null
                          ? void 0
                          : Q.branch) || "",
                      onChange: (E) =>
                        a({
                          storageConfigs: {
                            ...s.storageConfigs,
                            github: { ...s.storageConfigs.github, branch: E },
                          },
                        }),
                      placeholder: r(
                        "settings:storage.github.branchPlaceholder",
                      ),
                      options: x,
                      loading: w,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(y, {
                      htmlFor: "githubPath",
                      children: r("settings:storage.github.pathLabel"),
                    }),
                    e.jsx(B, {
                      id: "githubPath",
                      placeholder: r("settings:storage.github.pathPlaceholder"),
                      value:
                        (V = s.storageConfigs.github) == null
                          ? void 0
                          : V.filePath,
                      onChange: (E) =>
                        a({
                          storageConfigs: {
                            ...s.storageConfigs,
                            github: {
                              ...s.storageConfigs.github,
                              filePath: E.target.value,
                            },
                          },
                        }),
                    }),
                  ],
                }),
              ],
            }),
            ((H = s.storageConfigs.github) == null ? void 0 : H.owner) &&
              ((M = s.storageConfigs.github) == null ? void 0 : M.repo) &&
              e.jsxs("div", {
                className:
                  "flex items-center gap-2 text-sm text-muted-foreground",
                children: [
                  e.jsx("span", {
                    children: r("settings:storage.github.repoAddr"),
                  }),
                  e.jsxs("a", {
                    href: `https://github.com/${s.storageConfigs.github.owner}/${s.storageConfigs.github.repo}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "flex items-center gap-1 text-primary hover:underline",
                    children: [
                      "github.com/",
                      s.storageConfigs.github.owner,
                      "/",
                      s.storageConfigs.github.repo,
                      e.jsx(je, { className: "h-3 w-3" }),
                    ],
                  }),
                ],
              }),
            i &&
              e.jsx(G, {
                className: i.success
                  ? "bg-green-50/10 border-green-500/20"
                  : "bg-red-50/10 border-red-500/20",
                children: e.jsx($, {
                  className: i.success
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400",
                  children: i.message,
                }),
              }),
          ],
        }),
        e.jsx(X, {
          className: "flex justify-between border-t border-border pt-6",
          children: e.jsx(N, {
            variant: "outline",
            onClick: n,
            disabled: t,
            children: r(
              t
                ? "settings:storage.testingButton"
                : "settings:storage.testButton",
            ),
          }),
        }),
      ],
    })
  );
}
function Ua({
  settings: s,
  updateSettings: a,
  testing: t,
  testResult: i,
  handleTestConnection: n,
}) {
  var l, m, o, u, x, g, k;
  const { t: r } = D(["settings", "common"]);
  return e.jsxs(T, {
    className: "animate-in fade-in slide-in-from-top-2",
    children: [
      e.jsxs(_, {
        children: [
          e.jsx(L, {
            className: "text-lg",
            children: r("settings:storage.gitee.title"),
          }),
          e.jsx(z, { children: r("settings:storage.gitee.description") }),
        ],
      }),
      e.jsxs(P, {
        className: "space-y-4",
        children: [
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "giteeToken",
                children: r("settings:storage.gitee.tokenLabel"),
              }),
              e.jsxs("div", {
                className: "flex items-end gap-2",
                children: [
                  e.jsx("div", {
                    className: "flex-1",
                    children: e.jsx(q, {
                      id: "giteeToken",
                      placeholder: r("settings:storage.gitee.tokenPlaceholder"),
                      value:
                        (l = s.storageConfigs.gitee) == null ? void 0 : l.token,
                      onChange: (f) =>
                        a({
                          storageConfigs: {
                            ...s.storageConfigs,
                            gitee: {
                              ...s.storageConfigs.gitee,
                              token: f.target.value,
                            },
                          },
                        }),
                    }),
                  }),
                  e.jsxs(N, {
                    variant: "outline",
                    onClick: () =>
                      window.open(
                        "https://gitee.com/profile/personal_access_tokens/new",
                        "_blank",
                      ),
                    title: "\u4E00\u952E\u521B\u5EFA Gitee Token",
                    children: [
                      e.jsx(Ne, { className: "h-4 w-4 mr-2" }),
                      r("settings:storage.gitee.createToken"),
                    ],
                  }),
                ],
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground mt-2",
                children: r("settings:storage.gitee.tokenNote"),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "giteeOwner",
                    children: r("settings:storage.gitee.ownerLabel"),
                  }),
                  e.jsx(B, {
                    id: "giteeOwner",
                    placeholder: r("settings:storage.gitee.ownerPlaceholder"),
                    value:
                      (m = s.storageConfigs.gitee) == null ? void 0 : m.owner,
                    onChange: (f) =>
                      a({
                        storageConfigs: {
                          ...s.storageConfigs,
                          gitee: {
                            ...s.storageConfigs.gitee,
                            owner: f.target.value,
                          },
                        },
                      }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "giteeRepo",
                    children: r("settings:storage.gitee.repoLabel"),
                  }),
                  e.jsx(B, {
                    id: "giteeRepo",
                    placeholder: r("settings:storage.gitee.repoPlaceholder"),
                    value:
                      (o = s.storageConfigs.gitee) == null ? void 0 : o.repo,
                    onChange: (f) =>
                      a({
                        storageConfigs: {
                          ...s.storageConfigs,
                          gitee: {
                            ...s.storageConfigs.gitee,
                            repo: f.target.value,
                          },
                        },
                      }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "giteeBranch",
                    children: r("settings:storage.gitee.branchLabel"),
                  }),
                  e.jsx(B, {
                    id: "giteeBranch",
                    placeholder: r("settings:storage.gitee.branchPlaceholder"),
                    value:
                      ((u = s.storageConfigs.gitee) == null
                        ? void 0
                        : u.branch) || "",
                    onChange: (f) =>
                      a({
                        storageConfigs: {
                          ...s.storageConfigs,
                          gitee: {
                            ...s.storageConfigs.gitee,
                            branch: f.target.value,
                          },
                        },
                      }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "giteePath",
                    children: r("settings:storage.gitee.pathLabel"),
                  }),
                  e.jsx(B, {
                    id: "giteePath",
                    placeholder: r("settings:storage.gitee.pathPlaceholder"),
                    value:
                      (x = s.storageConfigs.gitee) == null
                        ? void 0
                        : x.filePath,
                    onChange: (f) =>
                      a({
                        storageConfigs: {
                          ...s.storageConfigs,
                          gitee: {
                            ...s.storageConfigs.gitee,
                            filePath: f.target.value,
                          },
                        },
                      }),
                  }),
                ],
              }),
            ],
          }),
          ((g = s.storageConfigs.gitee) == null ? void 0 : g.owner) &&
            ((k = s.storageConfigs.gitee) == null ? void 0 : k.repo) &&
            e.jsxs("div", {
              className:
                "flex items-center gap-2 text-sm text-muted-foreground",
              children: [
                e.jsx("span", {
                  children: r("settings:storage.gitee.repoAddr"),
                }),
                e.jsxs("a", {
                  href: `https://gitee.com/${s.storageConfigs.gitee.owner}/${s.storageConfigs.gitee.repo}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex items-center gap-1 text-primary hover:underline",
                  children: [
                    "gitee.com/",
                    s.storageConfigs.gitee.owner,
                    "/",
                    s.storageConfigs.gitee.repo,
                    e.jsx(je, { className: "h-3 w-3" }),
                  ],
                }),
              ],
            }),
          i &&
            e.jsx(G, {
              className: i.success
                ? "bg-green-50/10 border-green-500/20"
                : "bg-red-50/10 border-red-500/20",
              children: e.jsx($, {
                className: i.success
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400",
                children: i.message,
              }),
            }),
        ],
      }),
      e.jsx(X, {
        className: "flex justify-between border-t border-border pt-6",
        children: e.jsx(N, {
          variant: "outline",
          onClick: n,
          disabled: t,
          children: r(
            t
              ? "settings:storage.testingButton"
              : "settings:storage.testButton",
          ),
        }),
      }),
    ],
  });
}
function Aa({
  settings: s,
  updateSettings: a,
  testing: t,
  testResult: i,
  handleTestConnection: n,
}) {
  var g, k, f, h;
  const { t: r } = D(["settings", "common"]),
    [l, m] = c.useState(!1),
    [o, u] = c.useState(null),
    x = async () => {
      m(!0), u(null);
      try {
        const d = s.storageConfigs.gist;
        if (!(d != null && d.token))
          throw new Error(r("settings:storage.gist.tokenMissing"));
        if (!(d != null && d.fileName))
          throw new Error(r("settings:storage.gist.filenameMissing"));
        const w = await new Pa(d).createGist();
        await a({
          storageConfigs: { ...s.storageConfigs, gist: { ...d, gistId: w } },
        }),
          u({
            success: !0,
            message: r("settings:storage.gist.createSuccess", { id: w }),
          });
      } catch (d) {
        u({
          success: !1,
          message:
            d instanceof Error
              ? d.message
              : r("settings:storage.gist.createError"),
        });
      } finally {
        m(!1);
      }
    };
  return e.jsxs(T, {
    className: "animate-in fade-in slide-in-from-top-2",
    children: [
      e.jsxs(_, {
        children: [
          e.jsx(L, {
            className: "text-lg",
            children: r("settings:storage.gist.title"),
          }),
          e.jsx(z, { children: r("settings:storage.gist.description") }),
        ],
      }),
      e.jsxs(P, {
        className: "space-y-4",
        children: [
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "gistToken",
                children: r("settings:storage.gist.tokenLabel"),
              }),
              e.jsxs("div", {
                className: "flex items-end gap-2",
                children: [
                  e.jsx("div", {
                    className: "flex-1",
                    children: e.jsx(q, {
                      id: "gistToken",
                      placeholder: r("settings:storage.gist.tokenPlaceholder"),
                      value:
                        (g = s.storageConfigs.gist) == null ? void 0 : g.token,
                      onChange: (d) =>
                        a({
                          storageConfigs: {
                            ...s.storageConfigs,
                            gist: {
                              ...s.storageConfigs.gist,
                              token: d.target.value,
                            },
                          },
                        }),
                    }),
                  }),
                  e.jsxs(N, {
                    variant: "outline",
                    onClick: () =>
                      window.open(
                        "https://github.com/settings/tokens/new?description=BookmarkSync-Gist&scopes=gist",
                        "_blank",
                      ),
                    title: "\u521B\u5EFA Gist Token",
                    children: [
                      e.jsx(Ne, { className: "h-4 w-4 mr-2" }),
                      r("settings:storage.gist.createToken"),
                    ],
                  }),
                ],
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground mt-2",
                children: r("settings:storage.gist.tokenNote"),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "gistId",
                children: r("settings:storage.gist.gistIdLabel"),
              }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsx(B, {
                    id: "gistId",
                    placeholder: r("settings:storage.gist.gistIdPlaceholder"),
                    value:
                      (k = s.storageConfigs.gist) == null ? void 0 : k.gistId,
                    onChange: (d) =>
                      a({
                        storageConfigs: {
                          ...s.storageConfigs,
                          gist: {
                            ...s.storageConfigs.gist,
                            gistId: d.target.value,
                          },
                        },
                      }),
                    className: "flex-1",
                  }),
                  e.jsxs(N, {
                    onClick: x,
                    disabled: l,
                    variant: "outline",
                    className: "whitespace-nowrap",
                    children: [
                      e.jsx(Ne, { className: "h-4 w-4 mr-1" }),
                      r(
                        l
                          ? "settings:storage.gist.creatingGist"
                          : "settings:storage.gist.createGist",
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "gistFileName",
                children: r("settings:storage.gist.filenameLabel"),
              }),
              e.jsx(B, {
                id: "gistFileName",
                placeholder: r("settings:storage.gist.filenamePlaceholder"),
                value:
                  (f = s.storageConfigs.gist) == null ? void 0 : f.fileName,
                onChange: (d) =>
                  a({
                    storageConfigs: {
                      ...s.storageConfigs,
                      gist: {
                        ...s.storageConfigs.gist,
                        fileName: d.target.value,
                      },
                    },
                  }),
              }),
            ],
          }),
          ((h = s.storageConfigs.gist) == null ? void 0 : h.gistId) &&
            e.jsxs("div", {
              className:
                "flex items-center gap-2 text-sm text-muted-foreground",
              children: [
                e.jsx("span", {
                  children: r("settings:storage.gist.gistAddr"),
                }),
                e.jsxs("a", {
                  href: `https://gist.github.com/${s.storageConfigs.gist.gistId}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex items-center gap-1 text-primary hover:underline",
                  children: [
                    "gist.github.com/",
                    s.storageConfigs.gist.gistId,
                    e.jsx(je, { className: "h-3 w-3" }),
                  ],
                }),
              ],
            }),
          o &&
            e.jsx(G, {
              className: o.success
                ? "bg-green-50/10 border-green-500/20"
                : "bg-red-50/10 border-red-500/20",
              children: e.jsx($, {
                className: o.success
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400",
                children: o.message,
              }),
            }),
          i &&
            e.jsx(G, {
              className: i.success
                ? "bg-green-50/10 border-green-500/20"
                : "bg-red-50/10 border-red-500/20",
              children: e.jsx($, {
                className: i.success
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400",
                children: i.message,
              }),
            }),
        ],
      }),
      e.jsx(X, {
        className: "flex justify-between border-t border-border pt-6",
        children: e.jsx(N, {
          variant: "outline",
          onClick: n,
          disabled: t,
          children: r(
            t
              ? "settings:storage.testingButton"
              : "settings:storage.testButton",
          ),
        }),
      }),
    ],
  });
}
function Fa({
  settings: s,
  updateSettings: a,
  testing: t,
  testResult: i,
  handleTestConnection: n,
}) {
  var l, m, o, u, x;
  const { t: r } = D(["settings", "common"]);
  return e.jsxs(T, {
    className: "animate-in fade-in slide-in-from-top-2",
    children: [
      e.jsxs(_, {
        children: [
          e.jsx(L, {
            className: "text-lg",
            children: r("settings:storage.webdav.title"),
          }),
          e.jsx(z, { children: r("settings:storage.webdav.description") }),
        ],
      }),
      e.jsxs(P, {
        className: "space-y-4",
        children: [
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "webdavUrl",
                children: r("settings:storage.webdav.urlLabel"),
              }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsx(B, {
                    id: "webdavUrl",
                    placeholder: r("settings:storage.webdav.urlPlaceholder"),
                    value:
                      (l = s.storageConfigs.webdav) == null ? void 0 : l.url,
                    onChange: (g) =>
                      a({
                        storageConfigs: {
                          ...s.storageConfigs,
                          webdav: {
                            ...s.storageConfigs.webdav,
                            url: g.target.value,
                          },
                        },
                      }),
                  }),
                  e.jsxs(N, {
                    variant: "outline",
                    onClick: () => {
                      var g;
                      return A(
                        ((g = s.storageConfigs.webdav) == null
                          ? void 0
                          : g.url) || "",
                      );
                    },
                    disabled: !((m = s.storageConfigs.webdav) != null && m.url),
                    type: "button",
                    children: [
                      e.jsx(pe, { className: "h-4 w-4 mr-2" }),
                      r("settings:storage.authorizeHost"),
                    ],
                  }),
                ],
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: r("settings:storage.webdav.urlNote"),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "webdavUser",
                    children: r("settings:storage.webdav.usernameLabel"),
                  }),
                  e.jsx(B, {
                    id: "webdavUser",
                    placeholder: r(
                      "settings:storage.webdav.usernamePlaceholder",
                    ),
                    value:
                      (o = s.storageConfigs.webdav) == null
                        ? void 0
                        : o.username,
                    onChange: (g) =>
                      a({
                        storageConfigs: {
                          ...s.storageConfigs,
                          webdav: {
                            ...s.storageConfigs.webdav,
                            username: g.target.value,
                          },
                        },
                      }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "webdavPass",
                    children: r("settings:storage.webdav.passwordLabel"),
                  }),
                  e.jsx(q, {
                    id: "webdavPass",
                    value:
                      (u = s.storageConfigs.webdav) == null
                        ? void 0
                        : u.password,
                    onChange: (g) =>
                      a({
                        storageConfigs: {
                          ...s.storageConfigs,
                          webdav: {
                            ...s.storageConfigs.webdav,
                            password: g.target.value,
                          },
                        },
                      }),
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: r("settings:storage.webdav.passwordNote"),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "webdavPath",
                children: r("settings:storage.webdav.pathLabel"),
              }),
              e.jsx(B, {
                id: "webdavPath",
                placeholder: r("settings:storage.webdav.pathPlaceholder"),
                value:
                  (x = s.storageConfigs.webdav) == null ? void 0 : x.filePath,
                onChange: (g) =>
                  a({
                    storageConfigs: {
                      ...s.storageConfigs,
                      webdav: {
                        ...s.storageConfigs.webdav,
                        filePath: g.target.value,
                      },
                    },
                  }),
              }),
            ],
          }),
          i &&
            e.jsx(G, {
              className: i.success
                ? "bg-green-50/10 border-green-500/20"
                : "bg-red-50/10 border-red-500/20",
              children: e.jsx($, {
                className: i.success
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400",
                children: i.message,
              }),
            }),
        ],
      }),
      e.jsx(X, {
        className: "flex justify-between border-t border-border pt-6",
        children: e.jsx(N, {
          variant: "outline",
          onClick: n,
          disabled: t,
          children: r(
            t
              ? "settings:storage.testingButton"
              : "settings:storage.testButton",
          ),
        }),
      }),
    ],
  });
}
const $s = W.DROPBOX_CLIENT_ID;
async function Ea() {
  const s = new TextEncoder(),
    a = new Uint8Array(32);
  crypto.getRandomValues(a);
  const t = btoa(String.fromCharCode(...a))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, ""),
    i = await crypto.subtle.digest("SHA-256", s.encode(t)),
    n = Array.from(new Uint8Array(i)),
    r = btoa(String.fromCharCode(...n))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");
  return { codeVerifier: t, codeChallenge: r };
}
async function Ia() {
  try {
    const s = F.identity.getRedirectURL(),
      { codeVerifier: a, codeChallenge: t } = await Ea(),
      i = new URL("https://www.dropbox.com/oauth2/authorize");
    i.searchParams.set("client_id", $s),
      i.searchParams.set("response_type", "code"),
      i.searchParams.set("redirect_uri", s),
      i.searchParams.set("code_challenge", t),
      i.searchParams.set("code_challenge_method", "S256");
    const n = await F.identity.launchWebAuthFlow({
      url: i.toString(),
      interactive: !0,
    });
    if (!n) throw new Error("Authorization failed: No response URL");
    const r = new URL(n),
      l = r.searchParams.get("code");
    if (!l) {
      const o = r.searchParams.get("error"),
        u = r.searchParams.get("error_description");
      throw new Error(`Authorization failed: ${o} - ${u}`);
    }
    const m = await fetch("https://api.dropboxapi.com/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: $s,
        grant_type: "authorization_code",
        code: l,
        redirect_uri: s,
        code_verifier: a,
      }),
    });
    if (!m.ok) {
      const o = await m.json();
      throw new Error(
        `Token exchange failed: ${o.error_description || o.error}`,
      );
    }
    return (await m.json()).access_token;
  } catch (s) {
    throw (console.error("[DropboxAuth] Authorization error:", s), s);
  }
}
function Ma({
  settings: s,
  updateSettings: a,
  testing: t,
  testResult: i,
  handleTestConnection: n,
}) {
  var u, x;
  const { t: r } = D(["settings", "common"]),
    [l, m] = c.useState(!1),
    o = async () => {
      if (await Oe())
        try {
          m(!0);
          const g = await Ia();
          await a(
            {
              storageConfigs: {
                ...s.storageConfigs,
                dropbox: { ...s.storageConfigs.dropbox, accessToken: g },
              },
            },
            !0,
          ),
            setTimeout(() => {
              n();
            }, 500);
        } catch (g) {
          console.error("Dropbox auth failed:", g);
        } finally {
          m(!1);
        }
    };
  return e.jsxs(T, {
    className: "animate-in fade-in slide-in-from-top-2",
    children: [
      e.jsxs(_, {
        children: [
          e.jsx(L, {
            className: "text-lg",
            children: r("settings:storage.dropbox.title"),
          }),
          e.jsx(z, { children: r("settings:storage.dropbox.description") }),
        ],
      }),
      e.jsxs(P, {
        className: "space-y-4",
        children: [
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "dbToken",
                children: r("settings:storage.dropbox.tokenLabel"),
              }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsx(q, {
                    id: "dbToken",
                    placeholder: r("settings:storage.dropbox.tokenPlaceholder"),
                    value:
                      (u = s.storageConfigs.dropbox) == null
                        ? void 0
                        : u.accessToken,
                    onChange: (g) =>
                      a({
                        storageConfigs: {
                          ...s.storageConfigs,
                          dropbox: {
                            ...s.storageConfigs.dropbox,
                            accessToken: g.target.value,
                          },
                        },
                      }),
                  }),
                  e.jsx(N, {
                    variant: "outline",
                    className: "whitespace-nowrap",
                    onClick: o,
                    disabled: l,
                    children: r(
                      l
                        ? "common:loading"
                        : "settings:storage.dropbox.authorize",
                    ),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "dbPath",
                children: r("settings:storage.dropbox.pathLabel"),
              }),
              e.jsx(B, {
                id: "dbPath",
                placeholder: r("settings:storage.dropbox.pathPlaceholder"),
                value:
                  (x = s.storageConfigs.dropbox) == null ? void 0 : x.filePath,
                onChange: (g) =>
                  a({
                    storageConfigs: {
                      ...s.storageConfigs,
                      dropbox: {
                        ...s.storageConfigs.dropbox,
                        filePath: g.target.value,
                      },
                    },
                  }),
              }),
            ],
          }),
          i &&
            e.jsx(G, {
              className: i.success
                ? "bg-green-50/10 border-green-500/20"
                : "bg-red-50/10 border-red-500/20",
              children: e.jsx($, {
                className: i.success
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400",
                children: i.message,
              }),
            }),
        ],
      }),
      e.jsx(X, {
        className: "flex justify-between border-t border-border pt-6",
        children: e.jsx(N, {
          variant: "outline",
          onClick: n,
          disabled: t,
          children: r(
            t
              ? "settings:storage.testingButton"
              : "settings:storage.testButton",
          ),
        }),
      }),
    ],
  });
}
const Hs = W.ONEDRIVE_CLIENT_ID,
  Oa = ["Files.ReadWrite", "User.Read", "offline_access"];
async function Ka() {
  const s = new TextEncoder(),
    a = new Uint8Array(32);
  crypto.getRandomValues(a);
  const t = btoa(String.fromCharCode(...a))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, ""),
    i = await crypto.subtle.digest("SHA-256", s.encode(t)),
    n = Array.from(new Uint8Array(i)),
    r = btoa(String.fromCharCode(...n))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");
  return { codeVerifier: t, codeChallenge: r };
}
async function Ga() {
  try {
    const s = F.identity.getRedirectURL(),
      { codeVerifier: a, codeChallenge: t } = await Ka(),
      i = new URL(
        "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      );
    i.searchParams.set("client_id", Hs),
      i.searchParams.set("response_type", "code"),
      i.searchParams.set("redirect_uri", s),
      i.searchParams.set("scope", Oa.join(" ")),
      i.searchParams.set("code_challenge", t),
      i.searchParams.set("code_challenge_method", "S256");
    const n = await F.identity.launchWebAuthFlow({
      url: i.toString(),
      interactive: !0,
    });
    if (!n) throw new Error("Authorization failed: No response URL");
    const r = new URL(n),
      l = r.searchParams.get("code");
    if (!l) {
      const o = r.searchParams.get("error"),
        u = r.searchParams.get("error_description");
      throw new Error(`Authorization failed: ${o} - ${u}`);
    }
    const m = await fetch(
      "https://login.microsoftonline.com/common/oauth2/v2.0/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: Hs,
          grant_type: "authorization_code",
          code: l,
          redirect_uri: s,
          code_verifier: a,
        }),
      },
    );
    if (!m.ok) {
      const o = await m.json();
      throw new Error(
        `Token exchange failed: ${o.error_description || o.error}`,
      );
    }
    return (await m.json()).access_token;
  } catch (s) {
    throw (console.error("[OneDriveAuth] Authorization error:", s), s);
  }
}
function $a({
  settings: s,
  updateSettings: a,
  testing: t,
  testResult: i,
  handleTestConnection: n,
}) {
  var u, x;
  const { t: r } = D(["settings", "common"]),
    [l, m] = c.useState(!1),
    o = async () => {
      if (await Oe())
        try {
          m(!0);
          const g = await Ga();
          await a(
            {
              storageConfigs: {
                ...s.storageConfigs,
                onedrive: { ...s.storageConfigs.onedrive, accessToken: g },
              },
            },
            !0,
          ),
            setTimeout(() => {
              n();
            }, 500);
        } catch (g) {
          console.error("OneDrive auth failed:", g);
        } finally {
          m(!1);
        }
    };
  return e.jsxs(T, {
    className: "animate-in fade-in slide-in-from-top-2",
    children: [
      e.jsxs(_, {
        children: [
          e.jsx(L, {
            className: "text-lg",
            children: r("settings:storage.onedrive.title"),
          }),
          e.jsx(z, { children: r("settings:storage.onedrive.description") }),
        ],
      }),
      e.jsxs(P, {
        className: "space-y-4",
        children: [
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "odToken",
                children: r("settings:storage.onedrive.tokenLabel"),
              }),
              e.jsxs("div", {
                className: "flex gap-2 justify-between",
                children: [
                  e.jsx("div", {
                    className: "flex-1",
                    children: e.jsx(q, {
                      id: "odToken",
                      placeholder: r(
                        "settings:storage.onedrive.tokenPlaceholder",
                      ),
                      value:
                        (u = s.storageConfigs.onedrive) == null
                          ? void 0
                          : u.accessToken,
                      onChange: (g) =>
                        a({
                          storageConfigs: {
                            ...s.storageConfigs,
                            onedrive: {
                              ...s.storageConfigs.onedrive,
                              accessToken: g.target.value,
                            },
                          },
                        }),
                    }),
                  }),
                  e.jsx(N, {
                    variant: "outline",
                    className: "whitespace-nowrap",
                    onClick: o,
                    disabled: l,
                    children: r(
                      l
                        ? "common:loading"
                        : "settings:storage.onedrive.authorize",
                    ),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "odPath",
                children: r("settings:storage.onedrive.pathLabel"),
              }),
              e.jsx(B, {
                id: "odPath",
                placeholder: r("settings:storage.onedrive.pathPlaceholder"),
                value:
                  (x = s.storageConfigs.onedrive) == null ? void 0 : x.filePath,
                onChange: (g) =>
                  a({
                    storageConfigs: {
                      ...s.storageConfigs,
                      onedrive: {
                        ...s.storageConfigs.onedrive,
                        filePath: g.target.value,
                      },
                    },
                  }),
              }),
            ],
          }),
          i &&
            e.jsx(G, {
              className: i.success
                ? "bg-green-50/10 border-green-500/20"
                : "bg-red-50/10 border-red-500/20",
              children: e.jsx($, {
                className: i.success
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400",
                children: i.message,
              }),
            }),
        ],
      }),
      e.jsx(X, {
        className: "flex justify-between border-t border-border pt-6",
        children: e.jsx(N, {
          variant: "outline",
          onClick: n,
          disabled: t,
          children: r(
            t
              ? "settings:storage.testingButton"
              : "settings:storage.testButton",
          ),
        }),
      }),
    ],
  });
}
function Ha({
  settings: s,
  updateSettings: a,
  testing: t,
  testResult: i,
  handleTestConnection: n,
}) {
  const { t: r } = D(["settings", "common"]),
    l = s.storageConfigs.s3 || Ke.storageConfigs.s3,
    m = (o) => {
      a({ storageConfigs: { ...s.storageConfigs, s3: { ...l, ...o } } });
    };
  return e.jsxs(T, {
    className: "animate-in fade-in slide-in-from-top-2",
    children: [
      e.jsxs(_, {
        children: [
          e.jsx(L, {
            className: "text-lg",
            children: r("settings:storage.s3.title"),
          }),
          e.jsx(z, { children: r("settings:storage.s3.description") }),
        ],
      }),
      e.jsxs(P, {
        className: "space-y-4",
        children: [
          e.jsxs("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "s3AccessKeyId",
                    children: r("settings:storage.s3.accessKeyIdLabel"),
                  }),
                  e.jsx(B, {
                    id: "s3AccessKeyId",
                    placeholder: r(
                      "settings:storage.s3.accessKeyIdPlaceholder",
                    ),
                    value: l.accessKeyId,
                    onChange: (o) => m({ accessKeyId: o.target.value }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "s3SecretAccessKey",
                    children: r("settings:storage.s3.secretAccessKeyLabel"),
                  }),
                  e.jsx(q, {
                    id: "s3SecretAccessKey",
                    placeholder: r(
                      "settings:storage.s3.secretAccessKeyPlaceholder",
                    ),
                    value: l.secretAccessKey,
                    onChange: (o) => m({ secretAccessKey: o.target.value }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "s3Bucket",
                    children: r("settings:storage.s3.bucketLabel"),
                  }),
                  e.jsx(B, {
                    id: "s3Bucket",
                    placeholder: r("settings:storage.s3.bucketPlaceholder"),
                    value: l.bucket,
                    onChange: (o) => m({ bucket: o.target.value }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "s3Region",
                    children: r("settings:storage.s3.regionLabel"),
                  }),
                  e.jsx(B, {
                    id: "s3Region",
                    placeholder: r("settings:storage.s3.regionPlaceholder"),
                    value: l.region,
                    onChange: (o) => m({ region: o.target.value }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "s3Endpoint",
                children: r("settings:storage.s3.endpointLabel"),
              }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsx(B, {
                    id: "s3Endpoint",
                    placeholder: r("settings:storage.s3.endpointPlaceholder"),
                    value: l.endpoint,
                    onChange: (o) => m({ endpoint: o.target.value }),
                  }),
                  e.jsxs(N, {
                    variant: "outline",
                    onClick: () => A(l.endpoint || ""),
                    disabled: !l.endpoint,
                    type: "button",
                    children: [
                      e.jsx(pe, { className: "h-4 w-4 mr-2" }),
                      r("settings:storage.authorizeHost"),
                    ],
                  }),
                ],
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: r("settings:storage.s3.endpointNote"),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "s3Path",
                children: r("settings:storage.s3.pathLabel"),
              }),
              e.jsx(B, {
                id: "s3Path",
                placeholder: r("settings:storage.s3.pathPlaceholder"),
                value: l.filePath,
                onChange: (o) => m({ filePath: o.target.value }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex items-center justify-between space-x-2 py-2",
            children: [
              e.jsxs("div", {
                className: "space-y-0.5",
                children: [
                  e.jsx(y, {
                    htmlFor: "forcePathStyle",
                    children: r("settings:storage.s3.forcePathStyleLabel"),
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: r("settings:storage.s3.forcePathStyleDesc"),
                  }),
                ],
              }),
              e.jsx(re, {
                id: "forcePathStyle",
                checked: l.forcePathStyle,
                onCheckedChange: (o) => m({ forcePathStyle: o }),
              }),
            ],
          }),
          i &&
            e.jsx(G, {
              className: i.success
                ? "bg-green-50/10 border-green-500/20"
                : "bg-red-50/10 border-red-500/20",
              children: e.jsx($, {
                className: i.success
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400",
                children: i.message,
              }),
            }),
        ],
      }),
      e.jsx(X, {
        className: "flex justify-between border-t border-border pt-6",
        children: e.jsx(N, {
          variant: "outline",
          onClick: n,
          disabled: t,
          children: r(
            t
              ? "settings:storage.testingButton"
              : "settings:storage.testButton",
          ),
        }),
      }),
    ],
  });
}
const Va = W.GOOGLE_CLIENT_ID,
  Wa = [
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/drive.metadata.readonly",
    "openid",
    "email",
  ];
async function Ja() {
  var s;
  try {
    const a = F.identity.getRedirectURL(),
      t =
        ((s = F.runtime.getManifest().oauth2) == null ? void 0 : s.client_id) ||
        Va,
      i = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    i.searchParams.set("client_id", t),
      i.searchParams.set("response_type", "token"),
      i.searchParams.set("redirect_uri", a),
      i.searchParams.set("scope", Wa.join(" ")),
      i.searchParams.set("prompt", "select_account");
    const n = await F.identity.launchWebAuthFlow({
      url: i.toString(),
      interactive: !0,
    });
    if (!n) throw new Error("Authorization failed: No response URL");
    const r = new URL(n).hash.substring(1),
      l = new URLSearchParams(r).get("access_token");
    if (!l) throw new Error("Failed to get access token from response");
    return l;
  } catch (a) {
    throw (console.error("[GoogleAuth] Authorization error:", a), a);
  }
}
function qa({
  settings: s,
  updateSettings: a,
  testing: t,
  testResult: i,
  handleTestConnection: n,
}) {
  var u, x;
  const { t: r } = D(["settings", "common"]),
    [l, m] = c.useState(!1),
    o = async () => {
      if (await Oe())
        try {
          m(!0);
          const g = await Ja();
          await a(
            {
              storageConfigs: {
                ...s.storageConfigs,
                googledrive: {
                  ...s.storageConfigs.googledrive,
                  accessToken: g,
                },
              },
            },
            !0,
          ),
            setTimeout(() => {
              n();
            }, 500);
        } catch (g) {
          console.error("Google Drive auth failed:", g);
        } finally {
          m(!1);
        }
    };
  return e.jsxs(T, {
    className: "animate-in fade-in slide-in-from-top-2",
    children: [
      e.jsxs(_, {
        children: [
          e.jsx(L, {
            className: "text-lg",
            children: r("settings:storage.googledrive.title"),
          }),
          e.jsx(z, { children: r("settings:storage.googledrive.description") }),
        ],
      }),
      e.jsxs(P, {
        className: "space-y-4",
        children: [
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "gdToken",
                children: r("settings:storage.googledrive.tokenLabel"),
              }),
              e.jsxs("div", {
                className: "flex gap-2 justify-between",
                children: [
                  e.jsx("div", {
                    className: "flex-1",
                    children: e.jsx(q, {
                      id: "gdToken",
                      placeholder: r(
                        "settings:storage.googledrive.tokenPlaceholder",
                      ),
                      value:
                        (u = s.storageConfigs.googledrive) == null
                          ? void 0
                          : u.accessToken,
                      onChange: (g) =>
                        a({
                          storageConfigs: {
                            ...s.storageConfigs,
                            googledrive: {
                              ...s.storageConfigs.googledrive,
                              accessToken: g.target.value,
                            },
                          },
                        }),
                    }),
                  }),
                  e.jsx(N, {
                    variant: "outline",
                    className: "whitespace-nowrap",
                    onClick: o,
                    disabled: l,
                    children: r(
                      l
                        ? "common:loading"
                        : "settings:storage.googledrive.authorize",
                    ),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(y, {
                htmlFor: "gdFileName",
                children: r("settings:storage.googledrive.filenameLabel"),
              }),
              e.jsx(B, {
                id: "gdFileName",
                placeholder: r(
                  "settings:storage.googledrive.filenamePlaceholder",
                ),
                value:
                  (x = s.storageConfigs.googledrive) == null
                    ? void 0
                    : x.fileName,
                onChange: (g) =>
                  a({
                    storageConfigs: {
                      ...s.storageConfigs,
                      googledrive: {
                        ...s.storageConfigs.googledrive,
                        fileName: g.target.value,
                      },
                    },
                  }),
              }),
            ],
          }),
          i &&
            e.jsx(G, {
              className: i.success
                ? "bg-green-50/10 border-green-500/20"
                : "bg-red-50/10 border-red-500/20",
              children: e.jsx($, {
                className: i.success
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400",
                children: i.message,
              }),
            }),
        ],
      }),
      e.jsx(X, {
        className: "flex justify-between border-t border-border pt-6",
        children: e.jsx(N, {
          variant: "outline",
          onClick: n,
          disabled: t,
          children: r(
            t
              ? "settings:storage.testingButton"
              : "settings:storage.testButton",
          ),
        }),
      }),
    ],
  });
}
function Ya({
  settings: s,
  updateSettings: a,
  testing: t,
  testResult: i,
  handleTestConnection: n,
}) {
  const { t: r } = D(["settings", "common"]),
    [l, m] = c.useState([]),
    [o, u] = c.useState([]),
    [x, g] = c.useState(!1),
    [k, f] = c.useState(!1),
    h = s.storageConfigs.gitlab || Ke.storageConfigs.gitlab,
    d = c.useCallback(async () => {
      if (!h.token) {
        m([]);
        return;
      }
      g(!0);
      try {
        const C = await new Es(h).getUserProjects();
        m(C);
      } catch (C) {
        console.error("Failed to load GitLab projects:", C), m([]);
      } finally {
        g(!1);
      }
    }, [h]),
    w = c.useCallback(async () => {
      if (!h.token || !h.projectId) {
        u([]);
        return;
      }
      f(!0);
      try {
        const C = await new Es(h).getProjectBranches();
        u(C.map((S) => S.name));
      } catch (C) {
        console.error("Failed to load GitLab branches:", C), u([]);
      } finally {
        f(!1);
      }
    }, [h]);
  return (
    c.useEffect(() => {
      d();
    }, [h.token, h.baseUrl, d]),
    c.useEffect(() => {
      h.projectId && w();
    }, [h.projectId, w]),
    e.jsxs(T, {
      className: "animate-in fade-in slide-in-from-top-2",
      children: [
        e.jsxs(_, {
          children: [
            e.jsx(L, {
              className: "text-lg",
              children: r("settings:storage.gitlab.title"),
            }),
            e.jsx(z, { children: r("settings:storage.gitlab.description") }),
          ],
        }),
        e.jsxs(P, {
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsx(y, {
                  htmlFor: "gitlabBaseUrl",
                  children: r("settings:storage.gitlab.baseUrlLabel"),
                }),
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsx(B, {
                      id: "gitlabBaseUrl",
                      placeholder: "https://gitlab.com",
                      value: h.baseUrl,
                      onChange: (C) =>
                        a({
                          storageConfigs: {
                            ...s.storageConfigs,
                            gitlab: { ...h, baseUrl: C.target.value },
                          },
                        }),
                    }),
                    e.jsxs(N, {
                      variant: "outline",
                      onClick: () => A(h.baseUrl || ""),
                      disabled: !h.baseUrl,
                      type: "button",
                      children: [
                        e.jsx(pe, { className: "h-4 w-4 mr-2" }),
                        r("settings:storage.authorizeHost"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsx(y, {
                  htmlFor: "gitlabToken",
                  children: r("settings:storage.gitlab.tokenLabel"),
                }),
                e.jsxs("div", {
                  className: "flex items-end gap-2",
                  children: [
                    e.jsx("div", {
                      className: "flex-1",
                      children: e.jsx(q, {
                        id: "gitlabToken",
                        placeholder: r(
                          "settings:storage.gitlab.tokenPlaceholder",
                        ),
                        value: h.token,
                        onChange: (C) =>
                          a({
                            storageConfigs: {
                              ...s.storageConfigs,
                              gitlab: { ...h, token: C.target.value },
                            },
                          }),
                      }),
                    }),
                    e.jsxs(N, {
                      variant: "outline",
                      onClick: () =>
                        window.open(
                          `${h.baseUrl || "https://gitlab.com"}/-/profile/personal_access_tokens?name=BookmarkSync&scopes=api`,
                          "_blank",
                        ),
                      title: "Create GitLab Token",
                      children: [
                        e.jsx(Ne, { className: "h-4 w-4 mr-2" }),
                        r("settings:storage.gitlab.createToken"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(y, {
                      htmlFor: "gitlabProject",
                      children: r("settings:storage.gitlab.projectLabel"),
                    }),
                    e.jsx(ke, {
                      value: h.projectId,
                      onChange: (C) =>
                        a({
                          storageConfigs: {
                            ...s.storageConfigs,
                            gitlab: { ...h, projectId: C },
                          },
                        }),
                      placeholder: r(
                        "settings:storage.gitlab.projectPlaceholder",
                      ),
                      options: l.map((C) => C.path_with_namespace),
                      loading: x,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(y, {
                      htmlFor: "gitlabBranch",
                      children: r("settings:storage.gitlab.branchLabel"),
                    }),
                    e.jsx(ke, {
                      value: h.branch || "",
                      onChange: (C) =>
                        a({
                          storageConfigs: {
                            ...s.storageConfigs,
                            gitlab: { ...h, branch: C },
                          },
                        }),
                      placeholder: r(
                        "settings:storage.gitlab.branchPlaceholder",
                      ),
                      options: o,
                      loading: k,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsx(y, {
                  htmlFor: "gitlabPath",
                  children: r("settings:storage.gitlab.pathLabel"),
                }),
                e.jsx(B, {
                  id: "gitlabPath",
                  placeholder: r("settings:storage.gitlab.pathPlaceholder"),
                  value: h.filePath,
                  onChange: (C) =>
                    a({
                      storageConfigs: {
                        ...s.storageConfigs,
                        gitlab: { ...h, filePath: C.target.value },
                      },
                    }),
                }),
              ],
            }),
            h.projectId &&
              e.jsxs("div", {
                className:
                  "flex items-center gap-2 text-sm text-muted-foreground",
                children: [
                  e.jsx("span", {
                    children: r("settings:storage.gitlab.repoAddr"),
                  }),
                  e.jsxs("a", {
                    href: `${h.baseUrl || "https://gitlab.com"}/${h.projectId}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "flex items-center gap-1 text-primary hover:underline",
                    children: [
                      h.baseUrl || "gitlab.com",
                      "/",
                      h.projectId,
                      e.jsx(je, { className: "h-3 w-3" }),
                    ],
                  }),
                ],
              }),
            i &&
              e.jsx(G, {
                className: i.success
                  ? "bg-green-50/10 border-green-500/20"
                  : "bg-red-50/10 border-red-500/20",
                children: e.jsx($, {
                  className: i.success
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400",
                  children: i.message,
                }),
              }),
          ],
        }),
        e.jsx(X, {
          className: "flex justify-between border-t border-border pt-6",
          children: e.jsx(N, {
            variant: "outline",
            onClick: n,
            disabled: t,
            children: r(
              t
                ? "settings:storage.testingButton"
                : "settings:storage.testButton",
            ),
          }),
        }),
      ],
    })
  );
}
function Xa({ settings: s, updateSettings: a }) {
  const { t } = D(["settings", "common"]),
    { hasPermission: i } = Y(),
    [n, r] = c.useState(!1),
    [l, m] = c.useState(null),
    [o, u] = c.useState(!1),
    x = async (k) => {
      var h, d, w, C;
      const f = k;
      if (!i(`storage_${f}`)) {
        u(!0);
        return;
      }
      f === "webdav" && (h = s.storageConfigs.webdav) != null && h.url
        ? await A(s.storageConfigs.webdav.url)
        : f === "s3" && (d = s.storageConfigs.s3) != null && d.endpoint
          ? await A(s.storageConfigs.s3.endpoint)
          : f === "gitlab" && (w = s.storageConfigs.gitlab) != null && w.baseUrl
            ? await A(s.storageConfigs.gitlab.baseUrl)
            : f === "gitlab" &&
                (C = s.storageConfigs.gitlab) != null &&
                C.baseUrl
              ? await A(s.storageConfigs.gitlab.baseUrl)
              : f === "googledrive"
                ? await A("https://www.googleapis.com")
                : f === "onedrive"
                  ? await A("https://graph.microsoft.com")
                  : f === "github"
                    ? await A("https://api.github.com")
                    : f === "gist"
                      ? await A("https://api.github.com")
                      : f === "gitee" && (await A("https://gitee.com")),
        a({ storageType: f }, !0),
        m(null);
    },
    g = async () => {
      var k, f, h, d;
      r(!0), m(null);
      try {
        s.storageType === "webdav" &&
        (k = s.storageConfigs.webdav) != null &&
        k.url
          ? await A(s.storageConfigs.webdav.url)
          : s.storageType === "s3" &&
              (f = s.storageConfigs.s3) != null &&
              f.endpoint
            ? await A(s.storageConfigs.s3.endpoint)
            : s.storageType === "gitlab" &&
                (h = s.storageConfigs.gitlab) != null &&
                h.baseUrl
              ? await A(s.storageConfigs.gitlab.baseUrl)
              : s.storageType === "gitlab" &&
                  (d = s.storageConfigs.gitlab) != null &&
                  d.baseUrl
                ? await A(s.storageConfigs.gitlab.baseUrl)
                : s.storageType === "googledrive"
                  ? await A("https://www.googleapis.com")
                  : s.storageType === "onedrive"
                    ? await A("https://graph.microsoft.com")
                    : s.storageType === "github"
                      ? await A("https://api.github.com")
                      : s.storageType === "gist"
                        ? await A("https://api.github.com")
                        : s.storageType === "gitee" &&
                          (await A("https://gitee.com")),
          await Is(s).testConnection(),
          m({
            success: !0,
            message: t("settings:storage.testSuccess", {
              type:
                s.storageType.charAt(0).toUpperCase() + s.storageType.slice(1),
            }),
          });
      } catch (w) {
        m({
          success: !1,
          message:
            w instanceof Error ? w.message : t("settings:storage.testError"),
        });
      } finally {
        r(!1);
      }
    };
  return e.jsxs("div", {
    className: "space-y-6 animate-in fade-in duration-500",
    children: [
      e.jsxs("header", {
        children: [
          e.jsxs("h2", {
            className:
              "text-2xl font-bold tracking-tight flex items-center gap-2",
            children: [
              e.jsx(ve, { className: "w-6 h-6 text-primary" }),
              t("settings:storage.title"),
            ],
          }),
          e.jsx("p", {
            className: "text-muted-foreground text-sm mt-1",
            children: t("settings:storage.subtitle"),
          }),
        ],
      }),
      e.jsxs(T, {
        children: [
          e.jsxs(_, {
            children: [
              e.jsx(L, {
                className: "text-lg",
                children: t("settings:storage.selectTitle"),
              }),
              e.jsx(z, { children: t("settings:storage.selectDesc") }),
            ],
          }),
          e.jsx(P, {
            className: "space-y-4",
            children: e.jsxs("div", {
              className: "flex flex-col space-y-2",
              children: [
                e.jsx(y, {
                  htmlFor: "storageType",
                  children: t("settings:storage.typeLabel"),
                }),
                e.jsxs(ne, {
                  value: s.storageType,
                  onValueChange: x,
                  children: [
                    e.jsx(ee, {
                      id: "storageType",
                      children: e.jsx(oe, {
                        placeholder: t("settings:storage.typePlaceholder"),
                      }),
                    }),
                    e.jsxs(se, {
                      children: [
                        e.jsx(v, {
                          value: "github",
                          children: e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("span", {
                                children: t(
                                  "settings:storage.github.menuLabel",
                                ),
                              }),
                              !i("storage_github") && null,
                            ],
                          }),
                        }),
                        e.jsx(v, {
                          value: "gist",
                          children: e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("span", {
                                children: t("settings:storage.gist.menuLabel"),
                              }),
                              !i("storage_gist") && null,
                            ],
                          }),
                        }),
                        e.jsx(v, {
                          value: "gitee",
                          children: e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("span", {
                                children: t("settings:storage.gitee.menuLabel"),
                              }),
                              !i("storage_gitee") && null,
                            ],
                          }),
                        }),
                        e.jsx(v, {
                          value: "gitlab",
                          children: e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("span", {
                                children: t(
                                  "settings:storage.gitlab.menuLabel",
                                ),
                              }),
                              !i("storage_gitlab") && null,
                            ],
                          }),
                        }),
                        e.jsx(v, {
                          value: "googledrive",
                          children: e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("span", {
                                children: t(
                                  "settings:storage.googledrive.menuLabel",
                                ),
                              }),
                              !i("storage_googledrive") &&
                                null,
                            ],
                          }),
                        }),
                        e.jsx(v, {
                          value: "onedrive",
                          children: e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("span", {
                                children: t(
                                  "settings:storage.onedrive.menuLabel",
                                ),
                              }),
                              !i("storage_onedrive") &&
                                null,
                            ],
                          }),
                        }),
                        e.jsx(v, {
                          value: "s3",
                          children: e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("span", {
                                children: t("settings:storage.s3.menuLabel"),
                              }),
                              !i("storage_s3") && null,
                            ],
                          }),
                        }),
                        e.jsx(v, {
                          value: "webdav",
                          children: e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("span", {
                                children: t(
                                  "settings:storage.webdav.menuLabel",
                                ),
                              }),
                              !i("storage_webdav") && null,
                            ],
                          }),
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
      s.storageType === "github" &&
        e.jsx(za, {
          settings: s,
          updateSettings: a,
          testing: n,
          testResult: l,
          handleTestConnection: g,
        }),
      s.storageType === "webdav" &&
        e.jsx(Fa, {
          settings: s,
          updateSettings: a,
          testing: n,
          testResult: l,
          handleTestConnection: g,
        }),
      s.storageType === "gist" &&
        e.jsx(Aa, {
          settings: s,
          updateSettings: a,
          testing: n,
          testResult: l,
          handleTestConnection: g,
        }),
      s.storageType === "gitee" &&
        e.jsx(Ua, {
          settings: s,
          updateSettings: a,
          testing: n,
          testResult: l,
          handleTestConnection: g,
        }),
      s.storageType === "gitlab" &&
        e.jsx(Ya, {
          settings: s,
          updateSettings: a,
          testing: n,
          testResult: l,
          handleTestConnection: g,
        }),
      s.storageType === "googledrive" &&
        e.jsx(qa, {
          settings: s,
          updateSettings: a,
          testing: n,
          testResult: l,
          handleTestConnection: g,
        }),
      s.storageType === "dropbox" &&
        e.jsx(Ma, {
          settings: s,
          updateSettings: a,
          testing: n,
          testResult: l,
          handleTestConnection: g,
        }),
      s.storageType === "onedrive" &&
        e.jsx($a, {
          settings: s,
          updateSettings: a,
          testing: n,
          testResult: l,
          handleTestConnection: g,
        }),
      s.storageType === "s3" &&
        e.jsx(Ha, {
          settings: s,
          updateSettings: a,
          testing: n,
          testResult: l,
          handleTestConnection: g,
        }),
      null,
    ],
  });
}
const Vs = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsxs(xs, {
    ref: t,
    className: j("relative flex w-full touch-none select-none items-center", s),
    ...a,
    children: [
      e.jsx(Kt, {
        className:
          "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
        children: e.jsx(Gt, { className: "absolute h-full bg-primary" }),
      }),
      e.jsx($t, {
        className:
          "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      }),
    ],
  }),
);
Vs.displayName = xs.displayName;
function Qa({ settings: s, onUpdateSetting: a }) {
  const { t } = D(["settings", "common"]),
    { hasPermission: i } = Y(),
    [n, r] = c.useState(!1),
    l = async (o) => {
      if (o && !i("auto_sync")) {
        r(!0);
        return;
      }
      await a({ enableAutoSync: o }, !0);
    },
    m = () =>
      i("auto_sync")
        ? [
            {
              value: 5,
              label: t("settings:general.syncStrategy.syncIntervalOptions.5"),
            },
            {
              value: 10,
              label: t("settings:general.syncStrategy.syncIntervalOptions.10"),
            },
            {
              value: 15,
              label: t("settings:general.syncStrategy.syncIntervalOptions.15"),
            },
            {
              value: 30,
              label: t("settings:general.syncStrategy.syncIntervalOptions.30"),
            },
            {
              value: 60,
              label: t("settings:general.syncStrategy.syncIntervalOptions.60"),
            },
          ]
        : [];
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("header", {
        children: [
          e.jsxs("h2", {
            className:
              "text-2xl font-bold tracking-tight flex items-center gap-2",
            children: [
              e.jsx(ms, { className: "w-6 h-6 text-primary" }),
              t("settings:general.title"),
            ],
          }),
          e.jsx("p", {
            className: "text-muted-foreground text-sm mt-1",
            children: t("settings:general.subtitle"),
          }),
        ],
      }),
      e.jsxs(T, {
        children: [
          e.jsxs(_, {
            children: [
              e.jsx(L, {
                className: "text-lg",
                children: t("settings:general.appearance.title"),
              }),
              e.jsx(z, { children: t("settings:general.appearance.subtitle") }),
            ],
          }),
          e.jsxs(P, {
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className: "flex flex-col space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "language",
                    children: t("settings:general.appearance.languageLabel"),
                  }),
                  e.jsxs(ne, {
                    value: s.language,
                    onValueChange: (o) => a({ language: o }, !0),
                    children: [
                      e.jsx(ee, { id: "language", children: e.jsx(oe, {}) }),
                      e.jsxs(se, {
                        children: [
                          e.jsx(v, {
                            value: "zh-CN",
                            children: t("common:languages.zh"),
                          }),
                          e.jsx(v, {
                            value: "en",
                            children: t("common:languages.en"),
                          }),
                          e.jsx(v, {
                            value: "es",
                            children: t("common:languages.es"),
                          }),
                          e.jsx(v, {
                            value: "fr",
                            children: t("common:languages.fr"),
                          }),
                          e.jsx(v, {
                            value: "de",
                            children: t("common:languages.de"),
                          }),
                          e.jsx(v, {
                            value: "ja",
                            children: t("common:languages.ja"),
                          }),
                          e.jsx(v, {
                            value: "pt",
                            children: t("common:languages.pt"),
                          }),
                          e.jsx(v, {
                            value: "ru",
                            children: t("common:languages.ru"),
                          }),
                          e.jsx(v, {
                            value: "ar",
                            children: t("common:languages.ar"),
                          }),
                          e.jsx(v, {
                            value: "it",
                            children: t("common:languages.it"),
                          }),
                          e.jsx(v, {
                            value: "ko",
                            children: t("common:languages.ko"),
                          }),
                          e.jsx(v, {
                            value: "zh-TW",
                            children: t("common:languages.zh-TW"),
                          }),
                          e.jsx(v, {
                            value: "id",
                            children: t("common:languages.id"),
                          }),
                          e.jsx(v, {
                            value: "tr",
                            children: t("common:languages.tr"),
                          }),
                          e.jsx(v, {
                            value: "vi",
                            children: t("common:languages.vi"),
                          }),
                          e.jsx(v, {
                            value: "th",
                            children: t("common:languages.th"),
                          }),
                          e.jsx(v, {
                            value: "pl",
                            children: t("common:languages.pl"),
                          }),
                          e.jsx(v, {
                            value: "nl",
                            children: t("common:languages.nl"),
                          }),
                          e.jsx(v, {
                            value: "hi",
                            children: t("common:languages.hi"),
                          }),
                          e.jsx(v, {
                            value: "fa",
                            children: t("common:languages.fa"),
                          }),
                          e.jsx(v, {
                            value: "sv",
                            children: t("common:languages.sv"),
                          }),
                          e.jsx(v, {
                            value: "uk",
                            children: t("common:languages.uk"),
                          }),
                          e.jsx(v, {
                            value: "fil",
                            children: t("common:languages.fil"),
                          }),
                          e.jsx(v, {
                            value: "cs",
                            children: t("common:languages.cs"),
                          }),
                          e.jsx(v, {
                            value: "ro",
                            children: t("common:languages.ro"),
                          }),
                          e.jsx(v, {
                            value: "hu",
                            children: t("common:languages.hu"),
                          }),
                          e.jsx(v, {
                            value: "bn",
                            children: t("common:languages.bn"),
                          }),
                          e.jsx(v, {
                            value: "ur",
                            children: t("common:languages.ur"),
                          }),
                          e.jsx(v, {
                            value: "el",
                            children: t("common:languages.el"),
                          }),
                          e.jsx(v, {
                            value: "he",
                            children: t("common:languages.he"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-col space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "theme",
                    children: t("settings:general.appearance.themeLabel"),
                  }),
                  e.jsxs(ne, {
                    value: s.theme,
                    onValueChange: (o) => a({ theme: o }, !0),
                    children: [
                      e.jsx(ee, { id: "theme", children: e.jsx(oe, {}) }),
                      e.jsxs(se, {
                        children: [
                          e.jsx(v, {
                            value: "system",
                            children: t("common:themes.system"),
                          }),
                          e.jsx(v, {
                            value: "light",
                            children: t("common:themes.light"),
                          }),
                          e.jsx(v, {
                            value: "dark",
                            children: t("common:themes.dark"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    className: "space-y-0.5",
                    children: [
                      e.jsx(y, {
                        children: t(
                          "settings:general.appearance.notificationsLabel",
                        ),
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: t(
                          "settings:general.appearance.notificationsDesc",
                        ),
                      }),
                    ],
                  }),
                  e.jsx(re, {
                    checked: s.enableNotifications,
                    onCheckedChange: (o) => a({ enableNotifications: o }, !0),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    className: "space-y-0.5",
                    children: [
                      e.jsx(y, {
                        children: t(
                          "settings:general.appearance.telemetryLabel",
                        ),
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: t(
                          "settings:general.appearance.telemetryDesc",
                        ),
                      }),
                    ],
                  }),
                  e.jsx(re, {
                    checked: s.enableTelemetry !== !1,
                    onCheckedChange: (o) => a({ enableTelemetry: o }, !0),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs(T, {
        children: [
          e.jsxs(_, {
            children: [
              e.jsx(L, {
                className: "text-lg",
                children: t("settings:general.syncStrategy.title"),
              }),
              e.jsx(z, {
                children: t("settings:general.syncStrategy.subtitle"),
              }),
            ],
          }),
          e.jsxs(P, {
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className: "flex flex-col space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "deviceName",
                    children: t(
                      "settings:general.syncStrategy.deviceNameLabel",
                    ),
                  }),
                  e.jsx(B, {
                    id: "deviceName",
                    type: "text",
                    placeholder: t(
                      "settings:general.syncStrategy.deviceNamePlaceholder",
                    ),
                    value: s.deviceName,
                    onChange: (o) => a({ deviceName: o.target.value }),
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: t("settings:general.syncStrategy.deviceNameDesc"),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    className: "space-y-0.5",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(y, {
                            children: t(
                              "settings:general.syncStrategy.autoSyncLabel",
                            ),
                          }),
                          null,
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: t(
                          "settings:general.syncStrategy.autoSyncDesc",
                        ),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex items-center gap-2",
                    children: e.jsx(re, {
                      checked: s.enableAutoSync,
                      onCheckedChange: l,
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-col space-y-4",
                children: [
                  e.jsx("div", {
                    className: "flex items-center justify-between",
                    children: e.jsx("div", {
                      className: "flex items-center gap-2",
                      children: e.jsx(y, {
                        htmlFor: "syncInterval",
                        children: t(
                          "settings:general.syncStrategy.syncIntervalLabel",
                        ),
                      }),
                    }),
                  }),
                  e.jsxs(ne, {
                    value: s.syncInterval.toString(),
                    onValueChange: (o) => a({ syncInterval: parseInt(o) }, !0),
                    disabled: !s.enableAutoSync,
                    children: [
                      e.jsx(ee, {
                        id: "syncInterval",
                        children: e.jsx(oe, {}),
                      }),
                      e.jsx(se, {
                        children: m().map((o) =>
                          e.jsx(
                            v,
                            { value: o.value.toString(), children: o.label },
                            o.value,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: t(
                      "settings:general.syncStrategy.syncIntervalDesc",
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    className: "space-y-0.5",
                    children: [
                      e.jsx(y, {
                        children: t(
                          "settings:general.syncStrategy.formatJsonLabel",
                        ),
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: t(
                          "settings:general.syncStrategy.formatJsonDesc",
                        ),
                      }),
                    ],
                  }),
                  e.jsx(re, {
                    checked: s.formatJson,
                    onCheckedChange: (o) => a({ formatJson: o }, !0),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-col space-y-2",
                children: [
                  e.jsx(y, {
                    htmlFor: "conflictStrategy",
                    children: t(
                      "settings:general.syncStrategy.conflictStrategyLabel",
                    ),
                  }),
                  e.jsxs(ne, {
                    value: s.conflictStrategy,
                    onValueChange: (o) => a({ conflictStrategy: o }, !0),
                    children: [
                      e.jsx(ee, {
                        id: "conflictStrategy",
                        children: e.jsx(oe, {}),
                      }),
                      e.jsxs(se, {
                        children: [
                          e.jsx(v, {
                            value: "merge",
                            children: t(
                              "settings:general.syncStrategy.conflictMerge",
                            ),
                          }),
                          e.jsx(v, {
                            value: "local",
                            children: t(
                              "settings:general.syncStrategy.conflictLocal",
                            ),
                          }),
                          e.jsx(v, {
                            value: "remote",
                            children: t(
                              "settings:general.syncStrategy.conflictRemote",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: t(
                      "settings:general.syncStrategy.conflictStrategyDesc",
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "pt-4 space-y-4",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-0.5",
                        children: [
                          e.jsx(y, {
                            children: t(
                              "settings:general.encryption.enableLabel",
                            ),
                          }),
                          e.jsxs("p", {
                            className: "text-xs text-muted-foreground",
                            children: [
                              e.jsx("br", {}),
                              t("settings:general.encryption.description"),
                              e.jsx("br", {}),
                              t("settings:general.encryption.warning1"),
                              e.jsx("b", {
                                className: "text-red-500",
                                children: t(
                                  "settings:general.encryption.warning2",
                                ),
                              }),
                              e.jsx("br", {}),
                              t("settings:general.encryption.warning3"),
                            ],
                          }),
                        ],
                      }),
                      e.jsx(re, {
                        checked: s.enableEncryption,
                        onCheckedChange: (o) => a({ enableEncryption: o }, !0),
                      }),
                    ],
                  }),
                  s.enableEncryption &&
                    e.jsxs("div", {
                      className: "animate-in fade-in slide-in-from-top-1",
                      children: [
                        e.jsx(y, {
                          htmlFor: "encryptionKey",
                          children: t(
                            "settings:general.encryption.passwordLabel",
                          ),
                        }),
                        e.jsx(q, {
                          id: "encryptionKey",
                          value: s.encryptionKey || "",
                          onChange: (o) => a({ encryptionKey: o.target.value }),
                          placeholder: t(
                            "settings:general.encryption.passwordPlaceholder",
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              e.jsxs("div", {
                className: "pt-4 space-y-4 border-t border-border/50",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-0.5",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx(us, {
                                className: "w-4 h-4 text-orange-500",
                              }),
                              e.jsx(y, {
                                children: t(
                                  "settings:general.safety.enableLabel",
                                ),
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: t("settings:general.safety.description"),
                          }),
                        ],
                      }),
                      e.jsx(re, {
                        checked: s.enableSafeMode !== !1,
                        onCheckedChange: (o) => a({ enableSafeMode: o }, !0),
                      }),
                    ],
                  }),
                  s.enableSafeMode !== !1 &&
                    e.jsxs("div", {
                      className:
                        "space-y-4 animate-in fade-in slide-in-from-top-1",
                      children: [
                        e.jsx("div", {
                          className: "flex items-center justify-between",
                          children: e.jsx(y, {
                            className: "text-xs",
                            children: t(
                              "settings:general.safety.thresholdLabel",
                              { threshold: s.safeModeThreshold },
                            ),
                          }),
                        }),
                        e.jsx(Vs, {
                          value: [s.safeModeThreshold || 20],
                          min: 5,
                          max: 100,
                          step: 5,
                          onValueChange: (o) => a({ safeModeThreshold: o[0] }),
                        }),
                        e.jsx("p", {
                          className: "text-[10px] text-muted-foreground italic",
                          children: t("settings:general.safety.thresholdNote"),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs(T, {
        children: [
          e.jsxs(_, {
            children: [
              e.jsx(L, {
                className: "text-lg",
                children: t("settings:general.syncRecord.title"),
              }),
              e.jsx(z, { children: t("settings:general.syncRecord.subtitle") }),
            ],
          }),
          e.jsx(P, {
            className: "space-y-4",
            children: e.jsxs("div", {
              className: "flex flex-col space-y-2",
              children: [
                e.jsx(y, {
                  htmlFor: "maxSnapshotsToKeep",
                  children: t("settings:general.syncRecord.maxSnapshotsLabel"),
                }),
                e.jsxs(ne, {
                  value: s.maxSnapshotsToKeep.toString(),
                  onValueChange: (o) =>
                    a({ maxSnapshotsToKeep: parseInt(o) }, !0),
                  children: [
                    e.jsx(ee, {
                      id: "maxSnapshotsToKeep",
                      children: e.jsx(oe, {}),
                    }),
                    e.jsx(se, {
                      children: [5, 10, 15, 20, 30, 50].map((o) =>
                        e.jsx(v, { value: o.toString(), children: o }, o),
                      ),
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: t("settings:general.syncRecord.maxSnapshotsDesc"),
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
const Be = c.forwardRef(
  (
    { className: s, orientation: a = "horizontal", decorative: t = !0, ...i },
    n,
  ) =>
    e.jsx(ps, {
      ref: n,
      decorative: t,
      orientation: a,
      className: j(
        "shrink-0 bg-border",
        a === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        s,
      ),
      ...i,
    }),
);
Be.displayName = ps.displayName;
function Za() {
  const { t: s } = D(["settings"]),
    a = Ge(),
    { versionInfo: t } = vt(),
    i = [
      {
        icon: e.jsx(ve, { className: "w-5 h-5 text-blue-500" }),
        title: s("about.features.multiSync.title"),
        description: s("about.features.multiSync.description"),
      },
      {
        icon: e.jsx(hs, { className: "w-5 h-5 text-green-500" }),
        title: s("about.features.privacy.title"),
        description: s("about.features.privacy.description"),
      },
      {
        icon: e.jsx(Ae, { className: "w-5 h-5 text-yellow-500" }),
        title: s("about.features.smartMerge.title"),
        description: s("about.features.smartMerge.description"),
      },
      {
        icon: e.jsx(Ht, { className: "w-5 h-5 text-purple-500" }),
        title: s("about.features.easyToUse.title"),
        description: s("about.features.easyToUse.description"),
      },
    ];
  return e.jsxs("div", {
    className: "max-w-3xl mx-auto space-y-6 pb-8",
    children: [
      e.jsxs("div", {
        className: "text-center py-6 space-y-2",
        children: [
          e.jsx("div", {
            className:
              "inline-flex items-center justify-center  aspect-square size-8 items-center justify-center rounded-sm bg-sidebar-primary text-sidebar-primary-foreground",
            children: e.jsx(Xe, { className: "size-6" }),
          }),
          e.jsx("h1", {
            className: "text-3xl font-bold tracking-tight",
            children: s("about.title"),
          }),
          e.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
              e.jsxs(Pe, {
                variant: "secondary",
                className: "font-mono",
                children: ["v", a],
              }),
              e.jsx(Pe, {
                variant: "outline",
                className: "text-green-600 border-green-200 bg-green-50",
                children: "Beta",
              }),
              (t == null ? void 0 : t.hasUpdate) &&
                e.jsx("a", {
                  href: t.changelogUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "no-underline",
                  children: e.jsxs(Pe, {
                    variant: "destructive",
                    className: "hover:bg-red-600 animate-pulse cursor-pointer",
                    children: ["New: v", t.version],
                  }),
                }),
            ],
          }),
          e.jsx("p", {
            className: "text-muted-foreground text-lg max-w-md mx-auto pt-2",
            children: s("about.description"),
          }),
        ],
      }),
      e.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        children: i.map((n, r) =>
          e.jsx(
            T,
            {
              className: "shadow-sm",
              children: e.jsx(P, {
                className: "pt-6",
                children: e.jsxs("div", {
                  className: "flex items-start gap-4",
                  children: [
                    e.jsx("div", {
                      className: "p-2 bg-white rounded-lg shadow-sm",
                      children: n.icon,
                    }),
                    e.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        e.jsx("h4", {
                          className: "font-semibold",
                          children: n.title,
                        }),
                        e.jsx("p", {
                          className:
                            "text-sm text-muted-foreground leading-relaxed",
                          children: n.description,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            },
            r,
          ),
        ),
      }),
      e.jsxs(T, {
        className: "overflow-hidden border-primary/20 shadow-md relative",
        children: [
          e.jsx("div", {
            className:
              "absolute top-0 right-0 p-4 opacity-5 pointer-events-none",
            children: e.jsx(fs, {
              className: "w-24 h-24 text-primary fill-primary",
            }),
          }),
          e.jsxs(_, {
            children: [
              e.jsxs(L, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(fs, { className: "w-5 h-5 text-red-500 fill-red-500" }),
                  s("about.support.title"),
                ],
              }),
              e.jsx(z, { children: s("about.support.description") }),
            ],
          }),
          e.jsxs(P, {
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                children: [
                  null,
                  null,
                ],
              }),
              e.jsx(Be, {}),
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("h4", {
                    className: "text-sm font-medium flex items-center gap-2",
                    children: [
                      e.jsx(Jt, { className: "w-4 h-4 text-amber-600" }),
                      s("about.support.thanksTitle"),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground leading-relaxed",
                    children: s("about.support.thanksDescription"),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex flex-col items-center gap-4 pt-4 text-center",
        children: [
null,
          e.jsx("p", {
            className: "text-xs text-muted-foreground",
            children: s("about.footer.copyright", {
              year: new Date().getFullYear(),
            }),
          }),
        ],
      }),
    ],
  });
}
function er() {
  const [s, a] = c.useState([]),
    [t, i] = c.useState(!0),
    { t: n } = D(["common"]);
  c.useEffect(() => {
    (async () => {
      try {
        const o = await xe.getStats(300);
        a(o);
      } catch (o) {
        console.error("Failed to load activity stats:", o);
      } finally {
        i(!1);
      }
    })();
  }, []);
  const r = c.useMemo(() => {
      if (t || s.length === 0) return [];
      const o = [];
      let u = new Array(7).fill(null);
      const x = new Date(),
        g = new Date(x);
      g.setHours(0, 0, 0, 0);
      const k = new Date(g);
      k.setDate(k.getDate() - 300);
      const f = new Map(s.map((d) => [d.date, d]));
      let h = new Date(k);
      for (; h <= g; ) {
        const d = wa(h),
          w = h.getDay(),
          C = f.get(d) || { date: d, syncs: 0 };
        (u[w] = C),
          (w === 6 || h.getTime() === g.getTime()) &&
            (o.push([...u]), (u = new Array(7).fill(null))),
          h.setDate(h.getDate() + 1);
      }
      return o;
    }, [s, t]),
    l = (o) => (o === 0 ? 0 : o <= 2 ? 1 : o <= 5 ? 2 : o <= 10 ? 3 : 4),
    m = [
      "bg-muted/50 dark:bg-muted/20",
      "bg-green-500/20",
      "bg-green-500/40",
      "bg-green-500/70",
      "bg-green-500",
    ];
  return t
    ? e.jsx(T, {
        className: "w-full h-48 animate-pulse bg-muted/20",
        children: e.jsx(P, {
          className: "flex items-center justify-center h-full",
          children: e.jsx("span", {
            className: "text-muted-foreground text-sm",
            children: n("common:activityGraph.loading"),
          }),
        }),
      })
    : e.jsxs(T, {
        className: "w-full overflow-hidden",
        children: [
          e.jsxs(_, {
            className: "pb-2",
            children: [
              e.jsxs(L, {
                className:
                  "text-base font-semibold flex items-center justify-between",
                children: [
                  n("common:activityGraph.title"),
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 text-[10px] font-normal text-muted-foreground",
                    children: [
                      e.jsx("span", {
                        children: n("common:activityGraph.less"),
                      }),
                      e.jsx("div", {
                        className: "flex gap-1",
                        children: m.map((o, u) =>
                          e.jsx(
                            "div",
                            { className: j("w-2.5 h-2.5 rounded-sm", o) },
                            u,
                          ),
                        ),
                      }),
                      e.jsx("span", {
                        children: n("common:activityGraph.more"),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(z, {
                className: "text-xs",
                children: n("common:activityGraph.subtitle"),
              }),
            ],
          }),
          e.jsx(P, {
            className: "pt-0 overflow-x-auto pb-4 custom-scrollbar",
            children: e.jsxs("div", {
              className: "flex gap-1.5 min-w-max py-2",
              children: [
                e.jsxs("div", {
                  className:
                    "flex flex-col gap-1.5 mt-6 mr-2 text-[10px] text-muted-foreground text-center",
                  children: [
                    e.jsx("span", {
                      className: "h-3",
                      children: n("common:activityGraph.mon"),
                    }),
                    e.jsx("span", { className: "h-3" }),
                    e.jsx("span", {
                      className: "h-3",
                      children: n("common:activityGraph.wed"),
                    }),
                    e.jsx("span", { className: "h-3" }),
                    e.jsx("span", {
                      className: "h-3",
                      children: n("common:activityGraph.fri"),
                    }),
                    e.jsx("span", { className: "h-3" }),
                    e.jsx("span", { className: "h-3" }),
                  ],
                }),
                r.map((o, u) =>
                  e.jsxs(
                    "div",
                    {
                      className: "flex flex-col gap-1.5",
                      children: [
                        e.jsx("div", {
                          className: "h-3 text-[10px] text-muted-foreground",
                          children:
                            o[0] &&
                            new Date(o[0].date).getDate() <= 7 &&
                            new Date(o[0].date).toLocaleDateString(void 0, {
                              month: "short",
                            }),
                        }),
                        o.map((x, g) =>
                          e.jsx(
                            "div",
                            {
                              className: j(
                                "w-3 h-3 rounded-sm transition-colors duration-300",
                                x ? m[l(x.syncs)] : "bg-transparent",
                              ),
                              title: x
                                ? n("common:activityGraph.syncCount", {
                                    date: x.date,
                                    count: x.syncs,
                                  })
                                : "",
                            },
                            g,
                          ),
                        ),
                      ],
                    },
                    u,
                  ),
                ),
              ],
            }),
          }),
        ],
      });
}
function sr() {
  const { settings: s } = ue(),
    { syncState: a } = Qe(),
    { isPro: t, hasPermission: i } = Y(),
    { t: n } = D(["settings", "common", "sync"]),
    [r, l] = c.useState(0),
    [m, o] = c.useState(!1),
    [u, x] = c.useState(!1);
  c.useEffect(() => {
    (async () => {
      const S = await F.bookmarks.getTree();
      let b = 0;
      const p = (R) => {
        for (const U of R) U.url && b++, U.children && p(U.children);
      };
      p(S), l(b);
    })();
  }, []),
    c.useEffect(() => {
      (async () => {
        try {
          await F.runtime.sendMessage({ type: "CHECK_STUCK_SYNC" });
        } catch (S) {
          console.warn("Check stuck sync failed:", S);
        }
      })();
    }, []);
  const g = async () => {
      o(!0);
      try {
        await F.runtime.sendMessage({ type: "SYNC_BOOKMARKS" });
      } catch (S) {
        console.error("Sync request failed:", S);
      } finally {
        o(!1);
      }
    },
    k = async () => {
      if (confirm(n("settings:dashboard.confirmForcePush"))) {
        o(!0);
        try {
          await F.runtime.sendMessage({ type: "FORCE_PUSH" });
        } catch (S) {
          console.error("Force push failed:", S);
        } finally {
          o(!1);
        }
      }
    },
    f = async () => {
      if (confirm(n("settings:dashboard.confirmForcePull"))) {
        o(!0);
        try {
          await F.runtime.sendMessage({ type: "FORCE_PULL" });
        } catch (S) {
          console.error("Force pull failed:", S);
        } finally {
          o(!1);
        }
      }
    },
    h = () => {
      x(!0);
    },
    d = a.syncStatus || {},
    w = d.lastStatus === "syncing" || m,
    C = d.lastSyncTime
      ? new Date(d.lastSyncTime).toLocaleString()
      : n("settings:dashboard.statusNever");
  return e.jsxs("div", {
    className: "space-y-6 animate-in fade-in duration-500",
    children: [
      e.jsxs("header", {
        className: "flex items-start justify-between",
        children: [
          e.jsxs("div", {
            children: [
              e.jsxs("h2", {
                className:
                  "text-2xl font-bold tracking-tight flex items-center gap-2",
                children: [
                  e.jsx(bs, { className: "w-6 h-6 text-primary" }),
                  n("settings:dashboard.title"),
                ],
              }),
              e.jsx("p", {
                className: "text-muted-foreground text-sm mt-1",
                children: n("settings:dashboard.subtitle"),
              }),
            ],
          }),
          ,
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
        children: [
          e.jsxs(T, {
            children: [
              e.jsxs(_, {
                className:
                  "flex flex-row items-center justify-between pb-2 space-y-0",
                children: [
                  e.jsx(L, {
                    className: "text-sm font-medium text-muted-foreground",
                    children: n("settings:dashboard.bookmarkCount"),
                  }),
                  e.jsx(qt, { className: "w-4 h-4 text-primary" }),
                ],
              }),
              e.jsxs(P, {
                children: [
                  e.jsx("div", {
                    className: "text-2xl font-bold",
                    children: r,
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: n("settings:dashboard.bookmarkCountDesc"),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(T, {
            children: [
              e.jsxs(_, {
                className:
                  "flex flex-row items-center justify-between pb-2 space-y-0",
                children: [
                  e.jsx(L, {
                    className: "text-sm font-medium text-muted-foreground",
                    children: n("settings:dashboard.storageType"),
                  }),
                  e.jsx(ve, { className: "w-4 h-4 text-primary" }),
                ],
              }),
              e.jsxs(P, {
                children: [
                  e.jsx("div", {
                    className: "text-2xl font-bold capitalize",
                    children: s.storageType.replace("_", " "),
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: n("settings:dashboard.storageTypeDesc"),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(T, {
            children: [
              e.jsxs(_, {
                className:
                  "flex flex-row items-center justify-between pb-2 space-y-0",
                children: [
                  e.jsx(L, {
                    className: "text-sm font-medium text-muted-foreground",
                    children: n("settings:dashboard.syncMode"),
                  }),
                  e.jsx(Ae, { className: "w-4 h-4 text-primary" }),
                ],
              }),
              e.jsxs(P, {
                children: [
                  e.jsx("div", {
                    className: "text-2xl font-bold",
                    children: s.enableAutoSync
                      ? n("settings:dashboard.syncModeAuto")
                      : n("settings:dashboard.syncModeManual"),
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: s.enableAutoSync
                      ? n("settings:dashboard.syncIntervalUnit", {
                          count: s.syncInterval,
                        })
                      : n("settings:dashboard.pendingTrigger"),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(T, {
            children: [
              e.jsxs(_, {
                className:
                  "flex flex-row items-center justify-between pb-2 space-y-0",
                children: [
                  e.jsx(L, {
                    className: "text-sm font-medium text-muted-foreground",
                    children: n("settings:dashboard.lastStatus"),
                  }),
                  w
                    ? e.jsx(ge, {
                        className: "w-4 h-4 text-primary animate-spin",
                      })
                    : d.lastStatus === "success"
                      ? e.jsx(Re, { className: "w-4 h-4 text-green-500" })
                      : d.lastStatus === "failure"
                        ? e.jsx(Fe, { className: "w-4 h-4 text-destructive" })
                        : e.jsx(ie, {
                            className: "w-4 h-4 text-muted-foreground",
                          }),
                ],
              }),
              e.jsxs(P, {
                children: [
                  e.jsx(Pe, {
                    variant: w
                      ? "default"
                      : d.lastStatus === "success"
                        ? "success"
                        : d.lastStatus === "failure"
                          ? "destructive"
                          : "secondary",
                    children: w
                      ? n("settings:dashboard.statusSyncing")
                      : d.lastStatus === "success"
                        ? n("sync:messages.syncSuccess")
                        : d.lastStatus === "failure"
                          ? n("sync:messages.syncFailed")
                          : n("settings:dashboard.statusNever"),
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1 truncate",
                    title: C,
                    children: C,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx(er, {}),
      e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
        children: [
          e.jsxs(T, {
            className: "bg-primary/5 border-primary/20",
            children: [
              e.jsxs(_, {
                children: [
                  e.jsx(L, {
                    className: "text-lg",
                    children: n("settings:dashboard.smartSyncTitle"),
                  }),
                  e.jsx(z, { children: n("settings:dashboard.smartSyncDesc") }),
                ],
              }),
              e.jsx(P, {
                children: e.jsxs(N, {
                  variant: "outline",
                  size: "lg",
                  className:
                    "w-full h-12 flex gap-2 font-bold shadow-lg transition-all active:scale-95",
                  onClick: g,
                  disabled: w,
                  children: [
                    w
                      ? e.jsx(ge, { className: "w-5 h-5 animate-spin" })
                      : e.jsx(ge, { className: "w-5 h-5" }),
                    n(
                      w
                        ? "settings:dashboard.syncingButton"
                        : "settings:dashboard.startSyncNow",
                    ),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs(T, {
            className: "bg-amber-500/5 border-amber-500/20",
            children: [
              e.jsxs(_, {
                children: [
                  e.jsx(L, {
                    className: "text-lg text-amber-600 dark:text-amber-400",
                    children: n("settings:dashboard.forceSyncTitle"),
                  }),
                  e.jsx(z, { children: n("settings:dashboard.forceSyncDesc") }),
                ],
              }),
              e.jsxs(P, {
                className: "flex flex-col sm:flex-row gap-4",
                children: [
                  e.jsxs(N, {
                    variant: "outline",
                    className:
                      "flex-1 h-12 gap-2 border-amber-500/30 hover:bg-amber-500/10 text-amber-600 dark:text-amber-400",
                    onClick: i("force_sync") ? k : h,
                    disabled: w || !i("force_sync"),
                    children: [
                      e.jsx(js, { className: "w-4 h-4" }),
                      n("settings:dashboard.forcePush"),
                    ],
                  }),
                  e.jsxs(N, {
                    variant: "outline",
                    className:
                      "flex-1 h-12 gap-2 border-amber-500/30 hover:bg-amber-500/10 text-amber-600 dark:text-amber-400",
                    onClick: i("force_sync") ? f : h,
                    disabled: w || !i("force_sync"),
                    children: [
                      e.jsx(ys, { className: "w-4 h-4" }),
                      n("settings:dashboard.forcePull"),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      d.lastMessage &&
        e.jsx(G, {
          className:
            d.lastStatus === "success"
              ? "bg-green-50/10 border-green-500/20"
              : "bg-red-50/10 border-red-500/20",
          children: e.jsx($, {
            className:
              d.lastStatus === "success"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400",
            children: d.lastMessage,
          }),
        }),
      null,
    ],
  });
}
/* BookmarkSync time-machine: local storage version history (gist/github/gitee/gitlab/onedrive) */
async function tr(s, a) {
  if (s === "gist") {
    const { token, gistId } = a || {};
    if (!token || !gistId)
      throw new Error("Gist token/ID is not configured in Storage settings");
    const r = await fetch(
      `https://api.github.com/gists/${gistId}/commits`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch gist history");
    const commits = await r.json();
    return (Array.isArray(commits) ? commits : [])
      .filter((c) => c && c.version)
      .map((c) => ({
        id: c.version,
        timestamp: c.committed_at ? new Date(c.committed_at).getTime() : Date.now(),
        authorName:
          (c.user && c.user.login) ||
          (c.committer && c.committer.login) ||
          "unknown",
        message: c.change_status
          ? `+${c.change_status.additions || 0} -${c.change_status.deletions || 0}`
          : "",
      }));
  }
  if (s === "github") {
    const { token, owner, repo, filePath } = a || {};
    if (!token || !owner || !repo)
      throw new Error("GitHub owner/repo/token is not configured in Storage settings");
    const p = filePath || "bookmarksync.json";
    const r = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?path=${encodeURIComponent(p)}&per_page=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch repository history");
    const commits = await r.json();
    return (Array.isArray(commits) ? commits : [])
      .map((c) => ({
        id: c.sha,
        timestamp:
          c.commit && c.commit.committer && c.commit.committer.date
            ? new Date(c.commit.committer.date).getTime()
            : Date.now(),
        authorName:
          (c.commit && c.commit.author && c.commit.author.name) ||
          (c.author && c.author.login) ||
          "unknown",
        message: (c.commit && c.commit.message) || "",
      }));
  }
  if (s === "gitee") {
    const { token, owner, repo, filePath, branch } = a || {};
    if (!token || !owner || !repo)
      throw new Error("Gitee owner/repo/token is not configured in Storage settings");
    const p = filePath || "bookmarksync.json";
    const br = branch || "master";
    const r = await fetch(
      `https://gitee.com/api/v5/repos/${owner}/${repo}/commits?access_token=${encodeURIComponent(token)}&path=${encodeURIComponent(p)}&sha=${encodeURIComponent(br)}&per_page=50`,
      { headers: { Accept: "application/json" } },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch gitee history");
    const commits = await r.json();
    return (Array.isArray(commits) ? commits : [])
      .map((c) => ({
        id: c.sha,
        timestamp:
          c.commit && c.commit.author && c.commit.author.date
            ? new Date(c.commit.author.date).getTime()
            : Date.now(),
        authorName:
          (c.commit && c.commit.author && c.commit.author.name) || "unknown",
        message: (c.commit && c.commit.message) || "",
      }));
  }
  if (s === "gitlab") {
    const { token, projectId, filePath, baseUrl, branch } = a || {};
    if (!token || !projectId)
      throw new Error("GitLab project/token is not configured in Storage settings");
    const base = (baseUrl || "https://gitlab.com").replace(/\/$/, "") + "/api/v4";
    const p = filePath || "bookmarksync.json";
    const br = branch || "main";
    const r = await fetch(
      `${base}/projects/${encodeURIComponent(projectId)}/repository/commits?path=${encodeURIComponent(p)}&ref_name=${encodeURIComponent(br)}&per_page=50`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch gitlab history");
    const commits = await r.json();
    return (Array.isArray(commits) ? commits : [])
      .map((c) => ({
        id: c.id,
        timestamp: c.committed_date
          ? new Date(c.committed_date).getTime()
          : Date.now(),
        authorName: c.author_name || "unknown",
        message: c.title || c.message || "",
      }));
  }
  if (s === "onedrive") {
    const { accessToken, filePath } = a || {};
    if (!accessToken)
      throw new Error("OneDrive access token is not configured in Storage settings");
    const p = filePath || "bookmarksync.json";
    const r = await fetch(
      `https://graph.microsoft.com/v1.0/me/drive/root:/${p}:/versions`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch onedrive versions");
    const j = await r.json();
    const versions = (j && j.value) || [];
    return versions.map((v) => ({
      id: v.id,
      timestamp: v.lastModifiedDateTime
        ? new Date(v.lastModifiedDateTime).getTime()
        : Date.now(),
      authorName:
        (v.lastModifiedBy &&
          v.lastModifiedBy.user &&
          v.lastModifiedBy.user.displayName) ||
        "unknown",
      message: v.size ? `${v.size} bytes` : "",
    }));
  }
  throw new Error("This storage type does not support version history");
}
/* BookmarkSync time-machine restore: local storage version content (gist/github/gitee/gitlab/onedrive) */
async function ar(s, a, t) {
  if (s === "gist") {
    const { token, gistId, fileName } = a || {};
    if (!token || !gistId) throw new Error("Gist token/ID is not configured");
    const r = await fetch(
      `https://api.github.com/gists/${gistId}/${t}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch gist version");
    const g = await r.json();
    const files = (g && g.files) || {};
    const name = fileName || "bookmarksync.json";
    let entry = files[name];
    if (!entry)
      entry =
        Object.values(files).find((f) => f && typeof f.content == "string") ||
        Object.values(files)[0];
    if (!entry) throw new Error("Gist version has no file content");
    if (typeof entry.content == "string") return entry.content;
    if (entry.raw_url) {
      const raw = await fetch(entry.raw_url);
      if (!raw.ok) throw new Error("Failed to download gist version content");
      return await raw.text();
    }
    throw new Error("Gist version has no file content");
  }
  if (s === "github") {
    const { token, owner, repo, filePath } = a || {};
    if (!token || !owner || !repo)
      throw new Error("GitHub owner/repo/token is not configured");
    const p = filePath || "bookmarksync.json";
    const r = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(p)}?ref=${t}`,
      { headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github.raw" } },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch repository version");
    return await r.text();
  }
  if (s === "gitee") {
    const { token, owner, repo, filePath } = a || {};
    if (!token || !owner || !repo)
      throw new Error("Gitee owner/repo/token is not configured");
    const p = filePath || "bookmarksync.json";
    const r = await fetch(
      `https://gitee.com/api/v5/repos/${owner}/${repo}/contents/${p}?access_token=${encodeURIComponent(token)}&ref=${encodeURIComponent(t)}`,
      { headers: { Accept: "application/json" } },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch gitee version");
    const j = await r.json();
    if (typeof j.content == "string") {
      const bin = atob(j.content.replace(/\n/g, ""));
      const bytes = Uint8Array.from(bin, (ch) => ch.charCodeAt(0));
      return new TextDecoder("utf-8").decode(bytes);
    }
    if (j.download_url) {
      const raw = await fetch(j.download_url);
      if (!raw.ok) throw new Error("Failed to download gitee version content");
      return await raw.text();
    }
    throw new Error("Gitee version has no file content");
  }
  if (s === "gitlab") {
    const { token, projectId, filePath, baseUrl } = a || {};
    if (!token || !projectId)
      throw new Error("GitLab project/token is not configured");
    const base = (baseUrl || "https://gitlab.com").replace(/\/$/, "") + "/api/v4";
    const p = filePath || "bookmarksync.json";
    const r = await fetch(
      `${base}/projects/${encodeURIComponent(projectId)}/repository/files/${encodeURIComponent(p)}/raw?ref=${encodeURIComponent(t)}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch gitlab version");
    return await r.text();
  }
  if (s === "onedrive") {
    const { accessToken, filePath } = a || {};
    if (!accessToken) throw new Error("OneDrive access token is not configured");
    const p = filePath || "bookmarksync.json";
    const r = await fetch(
      `https://graph.microsoft.com/v1.0/me/drive/root:/${p}:/versions/${encodeURIComponent(t)}/content`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch onedrive version");
    return await r.text();
  }
  throw new Error("This storage type does not support version history");
}
async function rr() {
  try {
    const n = (await F.storage.local.get("settingsBackupCloud"))
      .settingsBackupCloud;
    if (n && n.content) {
      const r = Ms.decompressFromBase64(n.content);
      if (r) return JSON.parse(r);
    }
  } catch (i) {
    console.error("Error fetching local settings backup:", i);
  }
  return null;
}
async function ir(s) {
  try {
    const n = JSON.stringify(s),
      r = Ms.compressToBase64(n);
    await F.storage.local.set({
      settingsBackupCloud: {
        content: r,
        version: Ge(),
        timestamp: Date.now(),
      },
    });
    return !0;
  } catch (n) {
    console.error("Error saving local settings backup:", n);
    return !1;
  }
}
function nr() {
  const { t: s } = D(["settings", "common"]),
    { settings: a, updateSettings: t } = ue(),
    { hasPermission: i } = Y(),
    [n, r] = c.useState(!1),
    [l, m] = c.useState(null),
    [o, u] = c.useState(!1),
    x = (b, p = "success") => {
      m({ type: p, text: b }), setTimeout(() => m(null), 3e3);
    },
    g = () => {
      u(!0);
    },
    k = async () => {
      try {
        const b = await F.bookmarks.getTree(),
          p = (await F.storage.local.get("syncState")).syncState || {},
          { nodes: R } = Ca(b, p.idMapping || {}),
          U = ka(R),
          I = {
            version: Ge(),
            uniqueId: p.uniqueId || Sa(),
            clientInfo: {
              lastSyncedBy: a.deviceName || "Local export",
              syncedAt: Date.now(),
            },
            sha: await Ra(JSON.stringify(U)),
            nodes: U,
          },
          Q = new Blob([JSON.stringify(I, null, 2)], {
            type: "application/json",
          }),
          V = URL.createObjectURL(Q),
          H = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19),
          M = document.createElement("a");
        (M.href = V),
          (M.download = `bookmarksync-backup-${H}.json`),
          M.click(),
          URL.revokeObjectURL(V),
          x(s("tools.bookmarkBackup.exportSuccess"));
      } catch (b) {
        x(s("tools.bookmarkBackup.exportError", { error: String(b) }), "error");
      }
    },
    f = () => {
      const b = document.createElement("input");
      (b.type = "file"),
        (b.accept = ".json"),
        (b.onchange = async (p) => {
          var I;
          const R = (I = p.target.files) == null ? void 0 : I[0];
          if (!R || !confirm(s("tools.bookmarkBackup.importWarning"))) return;
          r(!0);
          const U = new FileReader();
          (U.onload = async (Q) => {
            var V;
            try {
              const H = (V = Q.target) == null ? void 0 : V.result,
                M = JSON.parse(H);
              if (!(M != null && M.nodes) || !Array.isArray(M.nodes))
                throw new Error(s("tools.bookmarkBackup.invalidFormat"));
              const E = Fs(M.nodes),
                O = (await F.storage.local.get("syncState")).syncState || {},
                ae = await Os(E, O.idMapping || {}, !0);
              await F.storage.local.set({
                syncState: {
                  ...O,
                  uniqueId: M.uniqueId || O.uniqueId,
                  idMapping: ae,
                  lastSyncedNodes: E,
                  syncStatus: {
                    ...O.syncStatus,
                    lastSyncTime: Date.now(),
                    lastStatus: "success",
                    lastMessage: s("tools.bookmarkBackup.importSuccess"),
                  },
                },
              }),
                x(s("tools.bookmarkBackup.importSuccess"));
            } catch (H) {
              console.error("Import failed:", H),
                x(
                  s("tools.bookmarkBackup.importError", {
                    error: H instanceof Error ? H.message : String(H),
                  }),
                  "error",
                );
            } finally {
              r(!1);
            }
          }),
            U.readAsText(R);
        }),
        b.click();
    },
    h = async () => {
      if (confirm(s("tools.dangerous.clearLocalWarning"))) {
        r(!0);
        try {
          await _a(), x(s("tools.dangerous.clearLocalSuccess"));
        } catch (b) {
          x(
            s("tools.dangerous.clearLocalError", { error: String(b) }),
            "error",
          );
        } finally {
          r(!1);
        }
      }
    },
    d = async () => {
      if (confirm(s("tools.dangerous.resetSettingsWarning"))) {
        r(!0);
        try {
          (await t(Ke, !0))
            ? x(s("tools.dangerous.resetSettingsSuccess"))
            : x(s("tools.dangerous.resetSettingsError"), "error");
        } catch (b) {
          console.error("Reset settings error:", b),
            x(s("messages.operationFailed", { ns: "common" }), "error");
        } finally {
          r(!1);
        }
      }
    },
    w = async () => {
      if (!i("delete_remote")) {
        g();
        return;
      }
      await J.register("delete_remote", async () => {
        if (!i("delete_remote")) {
          g();
          return;
        }
        if (confirm(s("tools.dangerous.deleteRemoteWarning"))) {
          r(!0);
          try {
            let b = Is(a);
            b && "deleteFile" in b && typeof b.deleteFile == "function"
              ? (await b.deleteFile(),
                x(s("tools.dangerous.deleteRemoteSuccess")))
              : x(s("tools.dangerous.deleteRemoteNotSupported"), "error");
          } catch (b) {
            x(
              s("tools.dangerous.deleteRemoteError", { error: String(b) }),
              "error",
            );
          } finally {
            r(!1);
          }
        }
      });
      try {
        await J.trigger("delete_remote");
      } catch (b) {
        console.error("Delete remote trigger failed:", b), g();
      }
    },
    C = async () => {
      if (!i("sync_config")) {
        g();
        return;
      }
      await J.register("sync_config", async () => {
        if (confirm(s("tools.settingsBackupCloud.uploadWarning")))
          try {
            r(!0), await ir(a), x(s("tools.settingsBackupCloud.uploadSuccess"));
          } catch (b) {
            x(
              s("tools.settingsBackupCloud.uploadError", { error: String(b) }),
              "error",
            );
          } finally {
            r(!1);
          }
      });
      try {
        await J.trigger("sync_config");
      } catch (b) {
        console.error("Safe trigger failed:", b), g();
      }
    },
    S = async () => {
      if (!i("sync_config")) {
        g();
        return;
      }
      await J.register("sync_config", async () => {
        if (confirm(s("tools.settingsBackupCloud.downloadWarning")))
          try {
            r(!0);
            const b = await rr();
            b
              ? (await F.storage.local.set({
                  appSettings: {
                    ...b,
                    deviceId: a.deviceId,
                    deviceName: a.deviceName,
                  },
                }),
                x(s("tools.settingsBackupCloud.downloadSuccess")),
                setTimeout(() => window.location.reload(), 1500))
              : x(s("tools.settingsBackupCloud.downloadNoData"), "error");
          } catch (b) {
            x(
              s("tools.settingsBackupCloud.downloadError", {
                error: String(b),
              }),
              "error",
            );
          } finally {
            r(!1);
          }
      });
      try {
        await J.trigger("sync_config");
      } catch (b) {
        console.error("Safe trigger failed:", b), g();
      }
    };
  return e.jsxs("div", {
    className: "space-y-6 animate-in fade-in duration-500",
    children: [
      e.jsxs("header", {
        children: [
          e.jsxs("h2", {
            className:
              "text-2xl font-bold tracking-tight flex items-center gap-2",
            children: [
              e.jsx(Ns, { className: "w-6 h-6 text-primary" }),
              s("tools.title"),
            ],
          }),
          e.jsx("p", {
            className: "text-muted-foreground text-sm mt-1",
            children: s("tools.subtitle"),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 gap-6",
        children: [
          e.jsxs(T, {
            children: [
              e.jsxs(_, {
                children: [
                  e.jsxs(L, {
                    className: "flex items-center gap-2 text-lg",
                    children: [
                      e.jsx(Yt, { className: "w-5 h-5 text-blue-500" }),
                      s("tools.bookmarkBackup.title"),
                    ],
                  }),
                  e.jsx(z, { children: s("tools.bookmarkBackup.description") }),
                ],
              }),
              e.jsx(P, {
                className: "space-y-4",
                children: e.jsxs("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    e.jsxs(N, {
                      variant: "outline",
                      className: "justify-start gap-2 h-11",
                      onClick: k,
                      children: [
                        e.jsx(Xt, { className: "w-4 h-4" }),
                        s("tools.bookmarkBackup.exportButton"),
                      ],
                    }),
                    e.jsxs(N, {
                      variant: "outline",
                      className: "justify-start gap-2 h-11",
                      onClick: f,
                      children: [
                        e.jsx(Qt, { className: "w-4 h-4" }),
                        s("tools.bookmarkBackup.importButton"),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs(T, {
            children: [
              e.jsxs(_, {
                children: [
                  e.jsxs(L, {
                    className: "flex items-center gap-2 text-lg",
                    children: [
                      e.jsx(vs, { className: "w-5 h-5 text-purple-500" }),
                      s("tools.settingsBackupCloud.title"),
                    ],
                  }),
                  e.jsx(z, {
                    children: s("tools.settingsBackupCloud.description"),
                  }),
                ],
              }),
              e.jsx(P, {
                className: "space-y-4",
                children: e.jsxs("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    e.jsxs(N, {
                      variant: "outline",
                      className: "justify-start gap-2 h-11",
                      onClick: C,
                      disabled: n,
                      children: [
                        e.jsx(js, { className: "w-4 h-4 text-blue-500" }),
                        s("tools.settingsBackupCloud.uploadButton"),
                        null,
                      ],
                    }),
                    e.jsxs(N, {
                      variant: "outline",
                      className: "justify-start gap-2 h-11",
                      onClick: S,
                      disabled: n,
                      children: [
                        e.jsx(ys, { className: "w-4 h-4 text-green-500" }),
                        s("tools.settingsBackupCloud.downloadButton"),
                        null,
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs(T, {
            className: "border-destructive/20 bg-destructive/5",
            children: [
              e.jsxs(_, {
                children: [
                  e.jsxs(L, {
                    className:
                      "flex items-center gap-2 text-destructive text-lg",
                    children: [
                      e.jsx(Ee, { className: "w-5 h-5" }),
                      s("tools.dangerous.title"),
                    ],
                  }),
                  e.jsx(z, { children: s("tools.dangerous.description") }),
                ],
              }),
              e.jsx(P, {
                className: "space-y-4",
                children: e.jsxs("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    e.jsxs(N, {
                      variant: "outline",
                      className: "justify-start gap-2 h-11",
                      onClick: h,
                      disabled: n,
                      children: [
                        e.jsx(Zt, { className: "w-4 h-4" }),
                        s("tools.dangerous.clearLocalButton"),
                      ],
                    }),
                    e.jsxs(N, {
                      variant: "outline",
                      className: "justify-start gap-2 h-11",
                      onClick: w,
                      disabled: n,
                      children: [
                        e.jsx(ea, { className: "w-4 h-4" }),
                        s("tools.dangerous.deleteRemoteButton"),
                        null,
                      ],
                    }),
                    e.jsx("div", {
                      className: "border-t my-2 border-destructive/20",
                    }),
                    e.jsxs(N, {
                      variant: "outline",
                      className: "justify-start gap-2 h-11",
                      onClick: d,
                      disabled: n,
                      children: [
                        e.jsx(me, { className: "w-4 h-4" }),
                        s("tools.dangerous.resetSettingsButton"),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      l &&
        e.jsx("div", {
          className: `fixed bottom-10 right-10 p-4 rounded-lg shadow-2xl border transition-all animate-in fade-in slide-in-from-bottom-4 ${l.type === "success" ? "bg-green-500/10 border-green-500/20 text-green-600" : "bg-destructive/10 border-destructive/20 text-destructive"}`,
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              l.type === "success"
                ? e.jsx(Re, { className: "w-5 h-5" })
                : e.jsx(sa, { className: "w-5 h-5" }),
              e.jsx("span", { className: "font-medium", children: l.text }),
            ],
          }),
        }),
      null,
    ],
  });
}
function lr() {
  const { settings: s, loading: a } = ue(),
    { hasPermission: t } = Y(),
    [i, n] = c.useState([]),
    [r, l] = c.useState(!1),
    [m, o] = c.useState(null),
    [u, x] = c.useState(null),
    [g, k] = c.useState(!1),
    [f, h] = c.useState(null),
    { t: d } = D(["settings", "common", "sync"]),
    w =
      s.storageType === "github" ||
      s.storageType === "gist" ||
      s.storageType === "onedrive" ||
      s.storageType === "gitee" ||
      s.storageType === "gitlab",
    C = t("time_machine"),
    S = c.useCallback(async () => {
      if (!(!w || !C || a)) {
        l(!0), o(null);
        try {
          const p = s.storageConfigs[s.storageType],
            R = await tr(s.storageType, p);
          n(R);
        } catch (p) {
          o(
            p instanceof Error
              ? p.message
              : d("settings:timemachine.errorFetchFailed"),
          );
        } finally {
          l(!1);
        }
      }
    }, [w, C, s]);
  c.useEffect(() => {
    S();
  }, [S]);
  const b = async (p) => {
    await J.register("time_machine", async () => {
      if (
        confirm(
          d("settings:timemachine.confirmRestore", {
            date: new Date(p.timestamp).toLocaleString(),
          }),
        )
      ) {
        x(p.id), o(null);
        try {
          const R = s.storageConfigs[s.storageType],
            U = await ar(s.storageType, R, p.id),
            I = JSON.parse(U);
          if (typeof I.nodes == "string") {
            if (!s.enableEncryption || !s.encryptionKey)
              throw new Error(d("sync:errors.encryptionRequired"));
            try {
              const M = await J.decryptUserNodes(I.nodes, s.encryptionKey);
              I.nodes = JSON.parse(M);
            } catch {
              throw new Error(d("sync:errors.decryptionFailed"));
            }
          }
          if (!(I != null && I.nodes) || !Array.isArray(I.nodes))
            throw new Error(d("settings:timemachine.errorInvalidData"));
          const Q = Fs(I.nodes),
            V = (await F.storage.local.get("syncState")).syncState || {},
            H = await Os(Q, V.idMapping || {}, !0);
          await F.storage.local.set({
            syncState: {
              ...V,
              idMapping: H,
              syncStatus: {
                ...(V.syncStatus || {}),
                lastSyncTime: Date.now(),
                lastStatus: "success",
                lastMessage: d("settings:timemachine.restoreStatus", {
                  id: p.id.slice(0, 7),
                }),
              },
            },
          }),
            h(
              d("settings:timemachine.restoreSuccess", {
                date: new Date(p.timestamp).toLocaleString(),
              }),
            ),
            setTimeout(() => h(null), 5e3);
        } catch (R) {
          o(
            R instanceof Error
              ? R.message
              : d("settings:timemachine.errorRestoreFailed"),
          );
        } finally {
          x(null);
        }
      }
    });
    try {
      await J.trigger("time_machine");
    } catch (R) {
      console.error("Safe trigger failed:", R), k(!0);
    }
  };
  return C
    ? w
      ? e.jsxs("div", {
          className: "space-y-6 animate-in fade-in duration-500",
          children: [
            e.jsxs("header", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs("h2", {
                      className:
                        "text-2xl font-bold tracking-tight flex items-center gap-2",
                      children: [
                        e.jsx(fe, { className: "w-6 h-6 text-primary" }),
                        d("settings:timemachine.title"),
                        e.jsx("span", {
                          className:
                            "ml-auto text-[10px] font-bold uppercase tracking-wider text-indigo-500 flex items-center gap-1",
                          children: null,
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground text-sm mt-1",
                      children: d("settings:timemachine.versionSource", {
                        type: s.storageType,
                      }),
                    }),
                  ],
                }),
                e.jsxs(N, {
                  variant: "outline",
                  size: "sm",
                  onClick: S,
                  disabled: r,
                  children: [
                    r
                      ? e.jsx(ye, { className: "w-4 h-4 animate-spin mr-2" })
                      : e.jsx(me, { className: "w-4 h-4 mr-2" }),
                    d("settings:timemachine.refresh"),
                  ],
                }),
              ],
            }),
            m &&
              e.jsxs("div", {
                className:
                  "p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-center gap-3 animate-in fade-in",
                children: [e.jsx(Fe, { className: "w-4 h-4 shrink-0" }), m],
              }),
            f &&
              e.jsxs("div", {
                className:
                  "p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm flex items-center gap-3 animate-in slide-in-from-top-2",
                children: [e.jsx(Re, { className: "w-4 h-4 shrink-0" }), f],
              }),
            e.jsx(T, {
              children: e.jsx(P, {
                className: "p-0",
                children: e.jsxs("div", {
                  className: "divide-y divide-border",
                  children: [
                    r &&
                      i.length === 0 &&
                      e.jsxs("div", {
                        className:
                          "flex flex-col items-center py-20 animate-pulse",
                        children: [
                          e.jsx(ye, {
                            className:
                              "w-10 h-10 text-muted-foreground animate-spin mb-4",
                          }),
                          e.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: d("settings:timemachine.loading"),
                          }),
                        ],
                      }),
                    !r &&
                      i.length === 0 &&
                      e.jsxs("div", {
                        className:
                          "flex flex-col items-center py-20 text-center",
                        children: [
                          e.jsx(ie, {
                            className:
                              "w-12 h-12 text-muted-foreground/30 mb-4",
                          }),
                          e.jsx("p", {
                            className: "text-muted-foreground",
                            children: d("settings:timemachine.noHistory"),
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground mt-1",
                            children: d("settings:timemachine.noHistoryDesc"),
                          }),
                        ],
                      }),
                    i.map((p) => {
                      const R = new Date(p.timestamp),
                        U = !1;
                      return e.jsxs(
                        "div",
                        {
                          className:
                            "p-4 hover:bg-muted/30 transition-colors flex items-center justify-between group",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-start gap-4",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0",
                                  children: e.jsx(ie, {
                                    className: "w-5 h-5 text-primary",
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-semibold text-sm",
                                          children: R.toLocaleString(),
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] font-mono bg-muted px-1.5 py-0.5 rounded text-muted-foreground",
                                          children: p.id.slice(0, 7),
                                        }),
                                      ],
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-sm text-foreground/80 line-clamp-1",
                                      children: p.message,
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-3 text-xs text-muted-foreground",
                                      children: [
                                        e.jsxs("span", {
                                          className: "flex items-center gap-1",
                                          children: [
                                            e.jsx(ws, { className: "w-3 h-3" }),
                                            p.authorName,
                                          ],
                                        }),
                                        U &&
                                          e.jsx("span", {
                                            className:
                                              "text-destructive font-medium",
                                            children: d(
                                              "settings:timemachine.expiredLabel",
                                              { count: 30 },
                                            ),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs(N, {
                              size: "sm",
                              variant: "ghost",
                              className: j(
                                "transition-opacity",
                                U
                                  ? "opacity-50"
                                  : "opacity-0 group-hover:opacity-100",
                              ),
                              onClick: () => !U && b(p),
                              disabled: !!u || U,
                              children: [
                                u === p.id
                                  ? e.jsx(ye, {
                                      className: "w-4 h-4 animate-spin mr-1",
                                    })
                                  : e.jsx(me, { className: "w-4 h-4 mr-1" }),
                                d(
                                  U
                                    ? "settings:timemachine.expiredButton"
                                    : "settings:timemachine.restoreButton",
                                ),
                              ],
                            }),
                          ],
                        },
                        p.id,
                      );
                    }),
                  ],
                }),
              }),
            }),
          ],
        })
      : e.jsxs(T, {
          children: [
            e.jsxs(_, {
              children: [
                e.jsxs(L, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(fe, { className: "w-6 h-6 text-primary" }),
                    d("settings:timemachine.title"),
                    e.jsx("span", {
                      className:
                        "ml-auto text-[10px] font-bold uppercase tracking-wider text-indigo-500 flex items-center gap-1",
                      children: null,
                    }),
                  ],
                }),
                e.jsx(z, { children: d("settings:timemachine.subtitle") }),
              ],
            }),
            e.jsxs(P, {
              className:
                "flex flex-col items-center py-12 text-center space-y-4",
              children: [
                e.jsx("div", {
                  className: "p-4 bg-muted rounded-full",
                  children: e.jsx(Fe, {
                    className: "w-10 h-10 text-muted-foreground",
                  }),
                }),
                e.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    e.jsx("h3", {
                      className: "font-semibold",
                      children: d("settings:timemachine.unsupportedTitle", {
                        storageType: s.storageType,
                      }),
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground max-w-sm",
                      children: d("settings:timemachine.unsupportedDesc", {
                        storageType: s.storageType,
                        supportedStorageType: "GitHub,Gist,Gitee,Gitlab",
                      }),
                    }),
                  ],
                }),
                e.jsx(N, {
                  variant: "outline",
                  onClick: () => (window.location.hash = "#storage"),
                  children: d("settings:timemachine.unsupportedButton"),
                }),
              ],
            }),
          ],
        })
    : e.jsxs("div", {
        className: "space-y-6",
        children: [
          null,
          null,
        ],
      });
}
function dr() {
  const { hasPermission: s, isPro: a } = Y(),
    { t } = D(["settings", "common", "sync"]),
    [i, n] = c.useState([]),
    [r, l] = c.useState([]),
    [m, o] = c.useState(0),
    [u, x] = c.useState(!0),
    [g, k] = c.useState(null),
    [f, h] = c.useState(!1),
    d = s("sync_history"),
    w = async () => {
      confirm(t("settings:history.confirmClear")) && (await xe.clearAll(), S());
    },
    C = async (p) => {
      if (
        confirm(
          t("settings:history.confirmRestore", {
            defaultValue:
              "Are you sure you want to restore bookmarks from this snapshot? This will overwrite all current bookmarks.",
          }),
        )
      ) {
        k(p);
        try {
          await xe.restoreFromRecord(p),
            alert(
              t("settings:history.restoreSuccess", {
                defaultValue: "Restore successful!",
              }),
            );
        } catch (R) {
          console.error("Restore failed:", R),
            alert(
              t("settings:history.restoreFailed", {
                defaultValue: "Restore failed: ",
              }) + (R instanceof Error ? R.message : String(R)),
            );
        } finally {
          k(null);
        }
      }
    },
    S = c.useCallback(async () => {
      if (!d) {
        x(!1);
        return;
      }
      x(!0);
      try {
        const p = d ? 100 : 10,
          R = await xe.getRecords(p),
          U = await xe.getStats(7),
          I = await xe.getTotalStorageSize();
        n(R), l(U), o(I);
      } catch (p) {
        console.error("Failed to load history data:", p);
      } finally {
        x(!1);
      }
    }, [d, a]);
  c.useEffect(() => {
    S();
  }, [S]);
  const b = c.useMemo(
    () =>
      i.reduce(
        (p, R) => (
          R.status === "success" &&
            R.stats &&
            ((p.added += R.stats.added),
            (p.updated += R.stats.updated),
            (p.deleted += R.stats.deleted)),
          p
        ),
        { added: 0, updated: 0, deleted: 0 },
      ),
    [i],
  );
  return d
    ? e.jsxs("div", {
        className: "space-y-6 animate-in fade-in duration-500",
        children: [
          e.jsxs("header", {
            className: "flex items-center justify-between",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsxs("h2", {
                    className:
                      "text-2xl font-bold tracking-tight flex items-center gap-2",
                    children: [
                      e.jsx(Ie, { className: "w-6 h-6 text-primary" }),
                      t("settings:history.title"),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex items-center gap-2 mt-1",
                    children: e.jsx("p", {
                      className: "text-muted-foreground text-sm",
                      children: t("settings:history.subtitle"),
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md border",
                    children: [
                      e.jsx(ve, { className: "w-3.5 h-3.5" }),
                      e.jsxs("span", {
                        children: [
                          t("settings:history.storageUsed", {
                            defaultValue: "storageUsed",
                          }),
                          ": ",
                          (m / 1024 / 1024).toFixed(2),
                          " MB",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsxs(N, {
                        variant: "outline",
                        size: "sm",
                        onClick: S,
                        disabled: u,
                        children: [
                          e.jsx(Me, {
                            className: j("w-4 h-4 mr-2", u && "animate-spin"),
                          }),
                          t("settings:history.refresh"),
                        ],
                      }),
                      e.jsxs(N, {
                        variant: "outline",
                        size: "sm",
                        onClick: w,
                        className: "text-destructive hover:text-destructive",
                        children: [
                          e.jsx(Ee, { className: "w-4 h-4 mr-2" }),
                          t("settings:history.clearAll"),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid gap-4 md:grid-cols-3",
            children: [
              e.jsxs(T, {
                children: [
                  e.jsxs(_, {
                    className:
                      "flex flex-row items-center justify-between space-y-0 pb-2",
                    children: [
                      e.jsx(L, {
                        className: "text-sm font-medium text-green-600",
                        children: t("settings:history.statsAdded"),
                      }),
                      e.jsx(Re, { className: "h-4 w-4 text-green-600" }),
                    ],
                  }),
                  e.jsxs(P, {
                    children: [
                      e.jsxs("div", {
                        className: "text-2xl font-bold",
                        children: ["+", b.added],
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: t("settings:history.statsAddedDesc"),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(T, {
                children: [
                  e.jsxs(_, {
                    className:
                      "flex flex-row items-center justify-between space-y-0 pb-2",
                    children: [
                      e.jsx(L, {
                        className: "text-sm font-medium text-blue-600",
                        children: t("settings:history.statsUpdated"),
                      }),
                      e.jsx(Me, { className: "h-4 w-4 text-blue-600" }),
                    ],
                  }),
                  e.jsxs(P, {
                    children: [
                      e.jsx("div", {
                        className: "text-2xl font-bold",
                        children: b.updated,
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: t("settings:history.statsUpdatedDesc"),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(T, {
                children: [
                  e.jsxs(_, {
                    className:
                      "flex flex-row items-center justify-between space-y-0 pb-2",
                    children: [
                      e.jsx(L, {
                        className: "text-sm font-medium text-destructive",
                        children: t("settings:history.statsDeleted"),
                      }),
                      e.jsx(Ee, { className: "h-4 w-4 text-destructive" }),
                    ],
                  }),
                  e.jsxs(P, {
                    children: [
                      e.jsxs("div", {
                        className: "text-2xl font-bold",
                        children: ["-", b.deleted],
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: t("settings:history.statsDeletedDesc"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(T, {
            children: [
              e.jsxs(_, {
                children: [
                  e.jsx(L, {
                    className: "text-base",
                    children: t("settings:history.chartTitle"),
                  }),
                  e.jsx(z, { children: t("settings:history.chartSubtitle") }),
                ],
              }),
              e.jsx(P, {
                className: "h-[300px]",
                children: e.jsx(Cs, {
                  width: "100%",
                  height: "100%",
                  children: e.jsxs(ks, {
                    data: r,
                    children: [
                      e.jsx(Ss, {
                        strokeDasharray: "3 3",
                        vertical: !1,
                        opacity: 0.3,
                      }),
                      e.jsx(Ts, {
                        dataKey: "date",
                        fontSize: 12,
                        tickLine: !1,
                        axisLine: !1,
                      }),
                      e.jsx(Ps, { fontSize: 12, tickLine: !1, axisLine: !1 }),
                      e.jsx(ta, {
                        contentStyle: {
                          borderRadius: "8px",
                          border: "none",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        },
                        cursor: { fill: "currentColor", opacity: 0.1 },
                      }),
                      e.jsx(aa, { iconType: "circle" }),
                      e.jsx(we, {
                        dataKey: "syncs",
                        name: t("settings:history.chartSyncs"),
                        fill: "var(--primary)",
                        radius: [4, 4, 0, 0],
                      }),
                      e.jsx(we, {
                        dataKey: "added",
                        name: t("settings:history.chartAdded"),
                        fill: "#22c55e",
                        radius: [4, 4, 0, 0],
                      }),
                      e.jsx(we, {
                        dataKey: "deleted",
                        name: t("settings:history.chartDeleted"),
                        fill: "#ef4444",
                        radius: [4, 4, 0, 0],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          e.jsxs(T, {
            children: [
              e.jsx(_, {
                children: e.jsx(L, {
                  className: "text-base",
                  children: t("settings:history.logTitle"),
                }),
              }),
              e.jsx(P, {
                className: "p-0",
                children: e.jsx("div", {
                  className: "overflow-x-auto",
                  children: e.jsxs("table", {
                    className: "w-full text-sm",
                    children: [
                      e.jsx("thead", {
                        className: "bg-muted/50 border-y",
                        children: e.jsxs("tr", {
                          children: [
                            e.jsx("th", {
                              className: "px-4 py-3 text-left font-medium",
                              children: t("settings:history.colTime"),
                            }),
                            e.jsx("th", {
                              className: "px-4 py-3 text-left font-medium",
                              children: t("settings:history.colDevice"),
                            }),
                            e.jsx("th", {
                              className: "px-4 py-3 text-left font-medium",
                              children: t("settings:history.colResult"),
                            }),
                            e.jsx("th", {
                              className: "px-4 py-3 text-right font-medium",
                              children: t("settings:history.colStats"),
                            }),
                            e.jsx("th", {
                              className: "px-4 py-3 text-right font-medium",
                              children: t("settings:history.colAction", {
                                defaultValue: "Action",
                              }),
                            }),
                          ],
                        }),
                      }),
                      e.jsxs("tbody", {
                        className: "divide-y",
                        children: [
                          i.map((p) =>
                            e.jsxs(
                              "tr",
                              {
                                className:
                                  "hover:bg-muted/30 transition-colors",
                                children: [
                                  e.jsx("td", {
                                    className: "px-4 py-4 whitespace-nowrap",
                                    children: e.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx(ie, {
                                          className:
                                            "w-4 h-4 text-muted-foreground",
                                        }),
                                        e.jsx("span", {
                                          children: new Date(
                                            p.timestamp,
                                          ).toLocaleString(),
                                        }),
                                      ],
                                    }),
                                  }),
                                  e.jsx("td", {
                                    className: "px-4 py-4",
                                    children: e.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-1.5 font-medium",
                                          children: [
                                            e.jsx(Rs, {
                                              className: "w-3.5 h-3.5",
                                            }),
                                            p.deviceName,
                                          ],
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-xs text-muted-foreground uppercase",
                                          children: p.type,
                                        }),
                                      ],
                                    }),
                                  }),
                                  e.jsx("td", {
                                    className: "px-4 py-4",
                                    children:
                                      p.status === "success"
                                        ? e.jsx("span", {
                                            className:
                                              "inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs font-medium border border-green-100",
                                            children: t(
                                              "settings:history.statusSuccess",
                                            ),
                                          })
                                        : e.jsxs("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                              e.jsx("span", {
                                                className:
                                                  "inline-flex items-center gap-1 text-destructive bg-red-50 px-2 py-0.5 rounded-full text-xs font-medium border border-red-100 w-fit",
                                                children: t(
                                                  "settings:history.statusFailure",
                                                ),
                                              }),
                                              e.jsx("span", {
                                                className:
                                                  "text-[10px] text-muted-foreground truncate max-w-[200px]",
                                                title: p.message,
                                                children: p.message,
                                              }),
                                            ],
                                          }),
                                  }),
                                  e.jsx("td", {
                                    className: "px-4 py-4 text-right",
                                    children:
                                      p.status === "success" && p.stats
                                        ? e.jsxs("div", {
                                            className:
                                              "flex items-center justify-end gap-3 font-mono text-xs",
                                            children: [
                                              e.jsxs("span", {
                                                className: "text-green-600",
                                                title: t(
                                                  "settings:history.chartAdded",
                                                ),
                                                children: ["+", p.stats.added],
                                              }),
                                              e.jsxs("span", {
                                                className: "text-blue-600",
                                                title: t(
                                                  "settings:history.chartUpdated",
                                                ),
                                                children: [
                                                  "~",
                                                  p.stats.updated,
                                                ],
                                              }),
                                              e.jsxs("span", {
                                                className: "text-destructive",
                                                title: t(
                                                  "settings:history.chartDeleted",
                                                ),
                                                children: [
                                                  "-",
                                                  p.stats.deleted,
                                                ],
                                              }),
                                            ],
                                          })
                                        : e.jsx("span", {
                                            className: "text-muted-foreground",
                                            children: "-",
                                          }),
                                  }),
                                  e.jsx("td", {
                                    className: "px-4 py-4 text-right",
                                    children:
                                      p.hasSnapshot &&
                                      e.jsxs(N, {
                                        variant: "ghost",
                                        size: "sm",
                                        className:
                                          "h-8 text-primary hover:text-primary hover:bg-primary/10",
                                        onClick: () => p.id && C(p.id),
                                        disabled: g !== null,
                                        children: [
                                          e.jsx(me, {
                                            className: j(
                                              "w-3.5 h-3.5 mr-1.5",
                                              g === p.id && "animate-spin",
                                            ),
                                          }),
                                          t("settings:history.btnRestore", {
                                            defaultValue: "Restore",
                                          }),
                                        ],
                                      }),
                                  }),
                                ],
                              },
                              p.id,
                            ),
                          ),
                          i.length === 0 &&
                            e.jsx("tr", {
                              children: e.jsxs("td", {
                                colSpan: 5,
                                className:
                                  "py-20 text-center text-muted-foreground",
                                children: [
                                  e.jsx(_s, {
                                    className:
                                      "w-10 h-10 mx-auto mb-3 opacity-20",
                                  }),
                                  t("settings:history.noHistory"),
                                ],
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          null,
        ],
      })
    : e.jsxs("div", {
        className: "space-y-6",
        children: [
          null,
          null,
        ],
      });
}
const gr = ra,
  mr = ia,
  hr = na,
  He = 768;
function xr() {
  const [s, a] = c.useState(void 0);
  return (
    c.useEffect(() => {
      const t = window.matchMedia(`(max-width: ${He - 1}px)`),
        i = () => {
          a(window.innerWidth < He);
        };
      return (
        t.addEventListener("change", i),
        a(window.innerWidth < He),
        () => t.removeEventListener("change", i)
      );
    }, []),
    !!s
  );
}
const ur = da,
  pr = oa,
  Ws = c.forwardRef(({ className: s, ...a }, t) =>
    e.jsx(Ls, {
      className: j(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        s,
      ),
      ...a,
      ref: t,
    }),
  );
Ws.displayName = Ls.displayName;
const fr = Ue(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    },
  ),
  Js = c.forwardRef(
    ({ side: s = "right", className: a, children: t, ...i }, n) =>
      e.jsxs(pr, {
        children: [
          e.jsx(Ws, {}),
          e.jsxs(Ds, {
            ref: n,
            className: j(fr({ side: s }), a),
            ...i,
            children: [
              e.jsxs(la, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  e.jsx(ca, { className: "h-4 w-4" }),
                  e.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
              t,
            ],
          }),
        ],
      }),
  );
Js.displayName = Ds.displayName;
const qs = ({ className: s, ...a }) =>
  e.jsx("div", {
    className: j("flex flex-col space-y-2 text-center sm:text-left", s),
    ...a,
  });
qs.displayName = "SheetHeader";
const Ys = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Bs, {
    ref: t,
    className: j("text-lg font-semibold text-foreground", s),
    ...a,
  }),
);
Ys.displayName = Bs.displayName;
const Xs = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(zs, { ref: t, className: j("text-sm text-muted-foreground", s), ...a }),
);
Xs.displayName = zs.displayName;
function Qs({ className: s, ...a }) {
  return e.jsx("div", {
    className: j("animate-pulse rounded-md bg-primary/10", s),
    ...a,
  });
}
const br = ma,
  jr = ha,
  yr = xa,
  Zs = c.forwardRef(({ className: s, sideOffset: a = 4, ...t }, i) =>
    e.jsx(ga, {
      children: e.jsx(Us, {
        ref: i,
        sideOffset: a,
        className: j(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
          s,
        ),
        ...t,
      }),
    }),
  );
Zs.displayName = Us.displayName;
const Nr = "sidebar_state",
  vr = 3600 * 24 * 7,
  wr = "16rem",
  Cr = "18rem",
  kr = "3rem",
  Sr = "b",
  et = c.createContext(null);
function Se() {
  const s = c.useContext(et);
  if (!s) throw new Error("useSidebar must be used within a SidebarProvider.");
  return s;
}
const st = c.forwardRef(
  (
    {
      defaultOpen: s = !0,
      open: a,
      onOpenChange: t,
      className: i,
      style: n,
      children: r,
      ...l
    },
    m,
  ) => {
    const o = xr(),
      [u, x] = c.useState(!1),
      [g, k] = c.useState(s),
      f = a ?? g,
      h = c.useCallback(
        (S) => {
          const b = typeof S == "function" ? S(f) : S;
          t ? t(b) : k(b),
            (document.cookie = `${Nr}=${b}; path=/; max-age=${vr}`);
        },
        [t, f],
      ),
      d = c.useCallback(() => (o ? x((S) => !S) : h((S) => !S)), [o, h, x]);
    c.useEffect(() => {
      const S = (b) => {
        b.key === Sr && (b.metaKey || b.ctrlKey) && (b.preventDefault(), d());
      };
      return (
        window.addEventListener("keydown", S),
        () => window.removeEventListener("keydown", S)
      );
    }, [d]);
    const w = f ? "expanded" : "collapsed",
      C = c.useMemo(
        () => ({
          state: w,
          open: f,
          setOpen: h,
          isMobile: o,
          openMobile: u,
          setOpenMobile: x,
          toggleSidebar: d,
        }),
        [w, f, h, o, u, x, d],
      );
    return e.jsx(et.Provider, {
      value: C,
      children: e.jsx(br, {
        delayDuration: 0,
        children: e.jsx("div", {
          style: { "--sidebar-width": wr, "--sidebar-width-icon": kr, ...n },
          className: j(
            "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
            i,
          ),
          ref: m,
          ...l,
          children: r,
        }),
      }),
    });
  },
);
st.displayName = "SidebarProvider";
const tt = c.forwardRef(
  (
    {
      side: s = "left",
      variant: a = "sidebar",
      collapsible: t = "offcanvas",
      className: i,
      children: n,
      ...r
    },
    l,
  ) => {
    const { isMobile: m, state: o, openMobile: u, setOpenMobile: x } = Se();
    return t === "none"
      ? e.jsx("div", {
          className: j(
            "flex h-full w-[var(--sidebar-width)] flex-col bg-sidebar text-sidebar-foreground",
            i,
          ),
          ref: l,
          ...r,
          children: n,
        })
      : m
        ? e.jsx(ur, {
            open: u,
            onOpenChange: x,
            ...r,
            children: e.jsxs(Js, {
              "data-sidebar": "sidebar",
              "data-mobile": "true",
              className:
                "w-[var(--sidebar-width)] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
              style: { "--sidebar-width": Cr },
              side: s,
              children: [
                e.jsxs(qs, {
                  className: "sr-only",
                  children: [
                    e.jsx(Ys, { children: "Sidebar" }),
                    e.jsx(Xs, { children: "Displays the mobile sidebar." }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex h-full w-full flex-col",
                  children: n,
                }),
              ],
            }),
          })
        : e.jsxs("div", {
            ref: l,
            className: "group peer hidden text-sidebar-foreground md:block",
            "data-state": o,
            "data-collapsible": o === "collapsed" ? t : "",
            "data-variant": a,
            "data-side": s,
            children: [
              e.jsx("div", {
                className: j(
                  "relative w-[var(--sidebar-width)] bg-transparent transition-[width] duration-200 ease-linear",
                  "group-data-[collapsible=offcanvas]:w-0",
                  "group-data-[side=right]:rotate-180",
                  a === "floating" || a === "inset"
                    ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
                    : "group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)]",
                ),
              }),
              e.jsx("div", {
                className: j(
                  "fixed inset-y-0 z-10 hidden h-svh w-[var(--sidebar-width)] transition-[left,right,width] duration-200 ease-linear md:flex",
                  s === "left"
                    ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                    : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                  a === "floating" || a === "inset"
                    ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
                    : "group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                  i,
                ),
                ...r,
                children: e.jsx("div", {
                  "data-sidebar": "sidebar",
                  className:
                    "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children: n,
                }),
              }),
            ],
          });
  },
);
tt.displayName = "Sidebar";
const at = c.forwardRef(({ className: s, onClick: a, ...t }, i) => {
  const { toggleSidebar: n } = Se();
  return e.jsxs(N, {
    ref: i,
    "data-sidebar": "trigger",
    variant: "ghost",
    size: "icon",
    className: j("h-7 w-7", s),
    onClick: (r) => {
      a == null || a(r), n();
    },
    ...t,
    children: [
      e.jsx(ua, {}),
      e.jsx("span", { className: "sr-only", children: "Toggle Sidebar" }),
    ],
  });
});
at.displayName = "SidebarTrigger";
const Tr = c.forwardRef(({ className: s, ...a }, t) => {
  const { toggleSidebar: i } = Se();
  return e.jsx("button", {
    ref: t,
    "data-sidebar": "rail",
    "aria-label": "Toggle Sidebar",
    tabIndex: -1,
    onClick: i,
    title: "Toggle Sidebar",
    className: j(
      "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
      "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
      "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
      "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
      "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
      "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
      s,
    ),
    ...a,
  });
});
Tr.displayName = "SidebarRail";
const rt = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("main", {
    ref: t,
    className: j(
      "relative flex w-full flex-1 flex-col bg-background",
      "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      s,
    ),
    ...a,
  }),
);
rt.displayName = "SidebarInset";
const Pr = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(B, {
    ref: t,
    "data-sidebar": "input",
    className: j(
      "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
      s,
    ),
    ...a,
  }),
);
Pr.displayName = "SidebarInput";
const it = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", {
    ref: t,
    "data-sidebar": "header",
    className: j("flex flex-col gap-2 p-2", s),
    ...a,
  }),
);
it.displayName = "SidebarHeader";
const nt = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", {
    ref: t,
    "data-sidebar": "footer",
    className: j("flex flex-col gap-2 p-2", s),
    ...a,
  }),
);
nt.displayName = "SidebarFooter";
const Rr = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(Be, {
    ref: t,
    "data-sidebar": "separator",
    className: j("mx-2 w-auto bg-sidebar-border", s),
    ...a,
  }),
);
Rr.displayName = "SidebarSeparator";
const ot = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", {
    ref: t,
    "data-sidebar": "content",
    className: j(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      s,
    ),
    ...a,
  }),
);
ot.displayName = "SidebarContent";
const Te = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", {
    ref: t,
    "data-sidebar": "group",
    className: j("relative flex w-full min-w-0 flex-col p-2", s),
    ...a,
  }),
);
Te.displayName = "SidebarGroup";
const Ve = c.forwardRef(({ className: s, asChild: a = !1, ...t }, i) => {
  const n = a ? he : "div";
  return e.jsx(n, {
    ref: i,
    "data-sidebar": "group-label",
    className: j(
      "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
      s,
    ),
    ...t,
  });
});
Ve.displayName = "SidebarGroupLabel";
const _r = c.forwardRef(({ className: s, asChild: a = !1, ...t }, i) => {
  const n = a ? he : "button";
  return e.jsx(n, {
    ref: i,
    "data-sidebar": "group-action",
    className: j(
      "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "after:absolute after:-inset-2 after:md:hidden",
      "group-data-[collapsible=icon]:hidden",
      s,
    ),
    ...t,
  });
});
_r.displayName = "SidebarGroupAction";
const We = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", {
    ref: t,
    "data-sidebar": "group-content",
    className: j("w-full text-sm", s),
    ...a,
  }),
);
We.displayName = "SidebarGroupContent";
const le = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("ul", {
    ref: t,
    "data-sidebar": "menu",
    className: j("flex w-full min-w-0 flex-col gap-1", s),
    ...a,
  }),
);
le.displayName = "SidebarMenu";
const ce = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("li", {
    ref: t,
    "data-sidebar": "menu-item",
    className: j("group/menu-item relative", s),
    ...a,
  }),
);
ce.displayName = "SidebarMenuItem";
const Lr = Ue(
    "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          outline:
            "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
        },
        size: {
          default: "h-8 text-sm",
          sm: "h-7 text-xs",
          lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  de = c.forwardRef(
    (
      {
        asChild: s = !1,
        isActive: a = !1,
        variant: t = "default",
        size: i = "default",
        tooltip: n,
        className: r,
        ...l
      },
      m,
    ) => {
      const o = s ? he : "button",
        { isMobile: u, state: x } = Se(),
        g = e.jsx(o, {
          ref: m,
          "data-sidebar": "menu-button",
          "data-size": i,
          "data-active": a,
          className: j(Lr({ variant: t, size: i }), r),
          ...l,
        });
      return n
        ? (typeof n == "string" && (n = { children: n }),
          e.jsxs(jr, {
            children: [
              e.jsx(yr, { asChild: !0, children: g }),
              e.jsx(Zs, {
                side: "right",
                align: "center",
                hidden: x !== "collapsed" || u,
                ...n,
              }),
            ],
          }))
        : g;
    },
  );
de.displayName = "SidebarMenuButton";
const Dr = c.forwardRef(
  ({ className: s, asChild: a = !1, showOnHover: t = !1, ...i }, n) => {
    const r = a ? he : "button";
    return e.jsx(r, {
      ref: n,
      "data-sidebar": "menu-action",
      className: j(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        t &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        s,
      ),
      ...i,
    });
  },
);
Dr.displayName = "SidebarMenuAction";
const Br = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("div", {
    ref: t,
    "data-sidebar": "menu-badge",
    className: j(
      "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      s,
    ),
    ...a,
  }),
);
Br.displayName = "SidebarMenuBadge";
const zr = c.forwardRef(({ className: s, showIcon: a = !1, ...t }, i) => {
  const n = c.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return e.jsxs("div", {
    ref: i,
    "data-sidebar": "menu-skeleton",
    className: j("flex h-8 items-center gap-2 rounded-md px-2", s),
    ...t,
    children: [
      a &&
        e.jsx(Qs, {
          className: "size-4 rounded-md",
          "data-sidebar": "menu-skeleton-icon",
        }),
      e.jsx(Qs, {
        className: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: { "--skeleton-width": n },
      }),
    ],
  });
});
zr.displayName = "SidebarMenuSkeleton";
const lt = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("ul", {
    ref: t,
    "data-sidebar": "menu-sub",
    className: j(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      s,
    ),
    ...a,
  }),
);
lt.displayName = "SidebarMenuSub";
const ct = c.forwardRef(({ ...s }, a) => e.jsx("li", { ref: a, ...s }));
ct.displayName = "SidebarMenuSubItem";
const dt = c.forwardRef(
  ({ asChild: s = !1, size: a = "md", isActive: t, className: i, ...n }, r) => {
    const l = s ? he : "a";
    return e.jsx(l, {
      ref: r,
      "data-sidebar": "menu-sub-button",
      "data-size": a,
      "data-active": t,
      className: j(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        a === "sm" && "text-xs",
        a === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        i,
      ),
      ...n,
    });
  },
);
dt.displayName = "SidebarMenuSubButton";
function Ur({ items: s, activeTab: a, onTabChange: t }) {
  return e.jsxs(Te, {
    children: [
      e.jsx(Ve, { children: "MenuBar" }),
      e.jsx(le, {
        children: s.map((i) => {
          var n;
          return e.jsx(
            gr,
            {
              asChild: !0,
              defaultOpen: !0,
              className: "group/collapsible",
              children: e.jsxs(ce, {
                children: [
                  e.jsx(mr, {
                    asChild: !0,
                    children: e.jsxs(de, {
                      tooltip: i.title,
                      isActive: a === i.id,
                      onClick: () => !i.items && t(i.id),
                      children: [
                        i.icon && e.jsx(i.icon, {}),
                        e.jsx("span", { children: i.title }),
                        i.items &&
                          e.jsx(_e, {
                            className:
                              "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90",
                          }),
                      ],
                    }),
                  }),
                  i.items &&
                    e.jsx(hr, {
                      children: e.jsx(lt, {
                        children:
                          (n = i.items) == null
                            ? void 0
                            : n.map((r) =>
                                e.jsx(
                                  ct,
                                  {
                                    children: e.jsx(dt, {
                                      asChild: !0,
                                      isActive: a === r.id,
                                      onClick: () => t(r.id),
                                      children: e.jsx("a", {
                                        href: r.url,
                                        onClick: (l) => l.preventDefault(),
                                        children: e.jsx("span", {
                                          children: r.title,
                                        }),
                                      }),
                                    }),
                                  },
                                  r.title,
                                ),
                              ),
                      }),
                    }),
                ],
              }),
            },
            i.title,
          );
        }),
      }),
    ],
  });
}
function Ar({ items: s, ...a }) {
  return e.jsx(Te, {
    ...a,
    children: e.jsx(We, {
      children: e.jsx(le, {
        children: s.map((t) =>
          e.jsx(
            ce,
            {
              children: e.jsx(de, {
                asChild: !0,
                size: "sm",
                children: e.jsxs("a", {
                  href: t.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [
                    e.jsx(t.icon, {}),
                    e.jsx("span", { children: t.title }),
                  ],
                }),
              }),
            },
            t.title,
          ),
        ),
      }),
    }),
  });
}
const gt = "bh_activities_cache",
  Fr = 1440 * 60 * 1e3;
function Er(s) {
  const { t: a } = D(["common"]),
    [t, i] = c.useState([]),
    [n, r] = c.useState(!0);
  return (
    c.useEffect(() => {
      (async () => {
        try {
          const l = localStorage.getItem(gt);
          if (l)
            try {
              const { data: u, timestamp: x } = JSON.parse(l);
              if (Date.now() - x < Fr) {
                i(u), r(!1);
                return;
              }
            } catch {}
          const m = await fetch(W.ACTIVITY_JSON_URL);
          if (!m.ok) throw new Error("Failed to fetch activities");
          const o = await m.json();
          localStorage.setItem(
            gt,
            JSON.stringify({ data: o, timestamp: Date.now() }),
          ),
            i(o);
        } finally {
          r(!1);
        }
      })();
    }, []),
    n || t.length === 0
      ? null
      : e.jsxs(Te, {
          ...s,
          children: [
            e.jsxs(Ve, {
              className:
                "text-xs font-semibold text-sidebar-foreground/70 gap-2",
              children: [
                e.jsx(pa, { className: "w-4 h-4 text-500" }),
                " ",
                a("common:sidebar.activities") || "Notices",
              ],
            }),
            e.jsx(We, {
              children: e.jsx(le, {
                children: t.map((l) =>
                  e.jsx(
                    ce,
                    {
                      children: e.jsx(de, {
                        asChild: !0,
                        size: "sm",
                        children: e.jsx("a", {
                          href: l.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "flex items-center gap-2",
                          children: e.jsx("span", {
                            className: "truncate",
                            children: l.title,
                          }),
                        }),
                      }),
                    },
                    l.id || l.title,
                  ),
                ),
              }),
            }),
          ],
        })
  );
}
function Or({ activeTab: s, onTabChange: a, ...t }) {
  const { t: i } = D(["common", "settings"]),
    [n, r] = c.useState(!1),
    l = {
      navMain: [
        {
          title: i("common:sidebar.dashboard"),
          url: "#",
          id: "dashboard",
          icon: bs,
          isActive: s === "dashboard",
        },
        {
          title: i("common:sidebar.settings"),
          url: "#",
          id: "settings",
          icon: vs,
          isActive: s === "settings",
          items: [
            { title: i("common:sidebar.general"), url: "#", id: "general" },
            { title: i("common:sidebar.storage"), url: "#", id: "storage" },
          ],
        },
        {
          title: i("common:sidebar.data"),
          url: "#",
          id: "data",
          icon: ve,
          isActive: s === "data",
          items: [
            { title: i("common:sidebar.timeMachine"), url: "#", id: "history" },
            { title: i("common:sidebar.syncHistory"), url: "#", id: "logs" },
          ],
        },
        {
          title: i("common:sidebar.tools"),
          url: "#",
          id: "tools",
          icon: Ns,
          isActive: s === "tools",
        },
        {
          title: i("common:sidebar.about"),
          url: "#",
          id: "about",
          icon: _s,
          isActive: s === "about",
        },
      ],
      navSecondary: [],
    };
  return e.jsxs(tt, {
    variant: "inset",
    ...t,
    children: [
      e.jsx(it, {
        children: e.jsx(le, {
          children: e.jsx(ce, {
            children: e.jsx(de, {
              size: "lg",
              asChild: !0,
              children: e.jsxs("a", {
                href: "#",
                onClick: (m) => m.preventDefault(),
                children: [
                  e.jsx("div", {
                    className:
                      "flex aspect-square size-8 items-center justify-center rounded-sm bg-sidebar-primary text-sidebar-primary-foreground",
                    children: e.jsx(Xe, { className: "size-6" }),
                  }),
                  e.jsxs("div", {
                    className: "grid flex-1 text-left text-sm leading-tight",
                    children: [
                      e.jsx("span", {
                        className: "truncate font-semibold",
                        children: "BookmarkSync",
                      }),
                      e.jsx("span", {
                        className: "truncate text-xs",
                        children: "Professional",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
      e.jsxs(ot, {
        children: [
          e.jsx(Ur, { items: l.navMain, activeTab: s, onTabChange: a }),
          e.jsx(Er, {}),
          e.jsx(Te, {
            className: "mt-auto",
            children: null,
          }),
          e.jsx(Ar, { items: l.navSecondary }),
        ],
      }),
      e.jsx(nt, { children: null }),
      null,
    ],
  });
}
const mt = c.forwardRef(({ ...s }, a) =>
  e.jsx("nav", { ref: a, "aria-label": "breadcrumb", ...s }),
);
mt.displayName = "Breadcrumb";
const ht = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("ol", {
    ref: t,
    className: j(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      s,
    ),
    ...a,
  }),
);
ht.displayName = "BreadcrumbList";
const Je = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("li", {
    ref: t,
    className: j("inline-flex items-center gap-1.5", s),
    ...a,
  }),
);
Je.displayName = "BreadcrumbItem";
const xt = c.forwardRef(({ asChild: s, className: a, ...t }, i) => {
  const n = s ? he : "a";
  return e.jsx(n, {
    ref: i,
    className: j("transition-colors hover:text-foreground", a),
    ...t,
  });
});
xt.displayName = "BreadcrumbLink";
const ut = c.forwardRef(({ className: s, ...a }, t) =>
  e.jsx("span", {
    ref: t,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: j("font-normal text-foreground", s),
    ...a,
  }),
);
ut.displayName = "BreadcrumbPage";
const pt = ({ children: s, className: a, ...t }) =>
  e.jsx("li", {
    role: "presentation",
    "aria-hidden": "true",
    className: j("[&>svg]:w-3.5 [&>svg]:h-3.5", a),
    ...t,
    children: s ?? e.jsx(_e, {}),
  });
pt.displayName = "BreadcrumbSeparator";
function Kr() {
  const { settings: s, updateSettings: a, loading: t } = ue(),
    { syncState: i, loading: n } = Qe(),
    { t: r } = D(["common", "settings"]),
    [l, m] = c.useState(() => {
      const d = window.location.hash.replace("#", "");
      return [
        "dashboard",
        "general",
        "storage",
        "history",
        "tools",
        "about",
        "logs",
      ].includes(d)
        ? d
        : "dashboard";
    }),
    [o, u] = c.useState({ message: "", error: "" }),
    x = (d) =>
      ({
        dashboard: r("common:tabs.dashboard"),
        general: r("common:tabs.general"),
        storage: r("common:tabs.storage"),
        history: r("common:tabs.history"),
        logs: r("common:tabs.logs"),
        tools: r("common:tabs.tools"),
        about: r("common:tabs.about"),
      })[d];
  c.useEffect(() => {
    const d = () => {
      const w = window.location.hash.replace("#", "");
      w &&
        w !== l &&
        [
          "dashboard",
          "general",
          "storage",
          "history",
          "tools",
          "about",
          "logs",
        ].includes(w) &&
        m(w);
    };
    return (
      window.addEventListener("hashchange", d),
      () => window.removeEventListener("hashchange", d)
    );
  }, [l]);
  const g = (d) => {
      const w = d;
      m(w), (window.location.hash = w);
    },
    k = c.useRef(null),
    f = async () => {
      try {
        await F.runtime.sendMessage({ type: "SYNC_BOOKMARKS" }),
          u({ message: r("common:messages.startingSync"), error: "" });
      } catch (d) {
        console.error("Trigger manual sync failed:", d),
          u({ message: "", error: r("common:messages.triggerSyncFailed") });
      }
    },
    h = async (d, w = !1) => {
      (await a(d, w))
        ? (k.current && clearTimeout(k.current),
          u({ message: r("common:messages.settingsSaved"), error: "" }),
          (k.current = window.setTimeout(() => {
            u((C) =>
              C.message === r("common:messages.settingsSaved")
                ? { message: "", error: "" }
                : C,
            ),
              (k.current = null);
          }, 2e3)))
        : u({ message: "", error: "\u5B9E\u65F6\u4FDD\u5B58\u5931\u8D25" });
    };
  return t || n
    ? e.jsx("div", {
        className:
          "flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900",
        children: e.jsx("div", {
          className:
            "animate-spin rounded-full h-12 w-12 border-b-2 border-primary",
        }),
      })
    : e.jsxs(st, {
        children: [
          e.jsx(Or, { activeTab: l, onTabChange: g }),
          e.jsxs(rt, {
            children: [
              e.jsx("header", {
                className:
                  "flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b",
                children: e.jsxs("div", {
                  className: "flex items-center gap-2 px-4",
                  children: [
                    e.jsx(at, { className: "-ml-1" }),
                    e.jsx(Be, {
                      orientation: "vertical",
                      className: "mr-2 h-4",
                    }),
                    e.jsx(mt, {
                      children: e.jsxs(ht, {
                        children: [
                          e.jsx(Je, {
                            className: "hidden md:block",
                            children: e.jsx(xt, {
                              href: "#",
                              onClick: (d) => {
                                d.preventDefault(), g("dashboard");
                              },
                              children: "BookmarkSync",
                            }),
                          }),
                          e.jsx(pt, { className: "hidden md:block" }),
                          e.jsx(Je, {
                            children: e.jsx(ut, { children: x(l) }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "flex flex-1 flex-col gap-4 p-4 pt-0",
                children: e.jsxs("div", {
                  className: "max-w-5xl mx-auto w-full py-8 space-y-4",
                  children: [
                    i.pendingSyncConfirmation &&
                      e.jsxs(G, {
                        variant: "destructive",
                        className:
                          "border-orange-500 bg-orange-500/10 text-orange-700 dark:text-orange-400 border-l-4 animate-in fade-in slide-in-from-top-4",
                        children: [
                          e.jsx(us, { className: "h-4 w-4 text-orange-500" }),
                          e.jsx(De, {
                            className: "font-bold",
                            children: r(
                              "common:messages.safetyWarningTriggered",
                            ),
                          }),
                          e.jsxs($, {
                            className:
                              "mt-2 text-sm flex flex-col md:flex-row md:items-center justify-between gap-4",
                            children: [
                              e.jsx("span", {
                                children: r(
                                  "common:messages.safetyWarningDesc",
                                ),
                              }),
                              e.jsxs("button", {
                                onClick: f,
                                className:
                                  "flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-all active:scale-95 shrink-0",
                                children: [
                                  e.jsx(ge, { className: "w-4 h-4" }),
                                  r("common:messages.confirmAndSync"),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    e.jsxs("div", {
                      className:
                        "animate-in fade-in slide-in-from-bottom-4 duration-300",
                      children: [
                        l === "dashboard" && e.jsx(sr, {}),
                        l === "general" &&
                          e.jsx(Qa, { settings: s, onUpdateSetting: h }),
                        l === "storage" &&
                          e.jsx(Xa, { settings: s, updateSettings: a }),
                        l === "history" && e.jsx(lr, {}),
                        l === "logs" && e.jsx(dr, {}),
                        l === "tools" && e.jsx(nr, {}),
                        l === "about" && e.jsx(Za, {}),
                      ],
                    }),
                    (o.message || o.error) &&
                      e.jsxs("div", {
                        className:
                          "fixed bottom-10 right-10 w-80 animate-in fade-in slide-in-from-right-4 z-50",
                        children: [
                          o.message &&
                            e.jsx(G, {
                              className:
                                "bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400 shadow-xl border-l-4 border-l-green-500",
                              children: e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx("svg", {
                                    className: "w-5 h-5 mt-0.5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: e.jsx("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M5 13l4 4L19 7",
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx(De, {
                                        className: "font-bold",
                                        children: r(
                                          "common:messages.statusHint",
                                        ),
                                      }),
                                      e.jsx($, { children: o.message }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          o.error &&
                            e.jsxs(G, {
                              variant: "destructive",
                              className: "shadow-xl",
                              children: [
                                e.jsx(De, {
                                  children: r("common:messages.error"),
                                }),
                                e.jsx($, { children: o.error }),
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
}
Ta(),
  Pt.createRoot(document.getElementById("root")).render(
    e.jsx(va.StrictMode, {
      children: e.jsx(Rt, { children: e.jsx(_t, { children: e.jsx(Kr, {}) }) }),
    }),
  );
