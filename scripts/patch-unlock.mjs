import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = (rel) => readFileSync(path.join(root, rel), 'utf8');
const save = (rel, text) => writeFileSync(path.join(root, rel), text, 'utf8');

function replaceOnce(rel, oldText, newText, label) {
  const full = load(rel);
  const alreadyApplied = newText.length > 0 ? full.includes(newText) : !full.includes(oldText);
  if (alreadyApplied) {
    console.log(`[SKIP] ${label} (already applied)`);
    return;
  }
  let count = 0;
  let pos = -1;
  for (let i = full.indexOf(oldText); i !== -1; i = full.indexOf(oldText, i + 1)) {
    count++;
    pos = i;
  }
  if (count !== 1) throw new Error(`${label}: expected 1 occurrence, found ${count}`);
  save(rel, full.slice(0, pos) + newText + full.slice(pos + oldText.length));
  console.log(`[OK] ${label}`);
}

replaceOnce(
  'src/chunks/sentry--tCLaZao.js',
  ['  async register(e, n) {', '    await this.ensureInitialized();'].join('\n'),
  ['  async register(e, n) {', '    (this.__handlers || (this.__handlers = new Map())).set(e, n);', '    await this.ensureInitialized();'].join('\n'),
  'register: handler map',
);

replaceOnce(
  'src/chunks/sentry--tCLaZao.js',
  ['  async trigger(e) {', '    await this.ensureInitialized();', '    const n = await this.getValidToken();', '    try {', '      return this.engine.trigger(e, n);'].join('\n'),
  ['  async trigger(e) {', '    const r = (this.__handlers || new Map()).get(e);', '    if (r) return r();', '    await this.ensureInitialized();', '    try {', '      return void 0;'].join('\n'),
  'trigger: local dispatch',
);

replaceOnce(
  'src/chunks/sentry--tCLaZao.js',
  [
    '    await this.ensureInitialized();',
    '    const s = n || (await this.getValidToken());',
    '    try {',
    '      return this.engine.has_permission(s, e);',
    '    } catch (o) {',
    '      return (',
    '        console.error(`Failed to check permission for feature \'${e}\':`, o), !1',
    '      );',
    '    }',
  ].join('\n'),
  '    return !0;',
  'hasPermission: always true',
);

replaceOnce(
  'src/chunks/sentry--tCLaZao.js',
  [
    'async function is() {',
    '  try {',
    '    const t = await Be.getValidToken();',
    '    if (t) {',
    '      const e = await Be.validateLicense(t);',
    '      if (e)',
    '        return {',
    '          type: typeof e.pro == "boolean" && e.pro ? "pro" : "free",',
    '          expiresAt: e.exp * 1e3,',
    '          userId: e.uid,',
    '          features: e.feat,',
    '        };',
    '    }',
    '  } catch (t) {',
    '    console.warn(',
    '      "[auth-utils] Token validation failed, falling back to legacy storage",',
    '      t,',
    '    );',
    '  }',
    '  return { type: "free" };',
    '}',
  ].join('\n'),
  [
    'async function is() {',
    '  return {',
    '    type: "pro",',
    '    expiresAt: Date.now() + 31536e9,',
    '    userId: "local-user",',
    '    features: [],',
    '  };',
    '}',
  ].join('\n'),
  'is: always pro session',
);

replaceOnce(
  'src/chunks/I18nProvider-bZ79bPbq.js',
  ['  const ce = L.useCallback(() => k.type === "pro", [k]),', '    W = L.useCallback((fe) => zh(fe, k), [k]),'].join('\n'),
  ['  const ce = L.useCallback(() => !0, [k]),', '    W = L.useCallback(() => !0, [k]),'].join('\n'),
  'LicenseContext: isPro/hasPermission always true',
);

replaceOnce(
  'src/popup/popup.js',
  ['                    : n', '                      ? e.jsxs(T, {'].join('\n'),
  ['                    : !0', '                      ? e.jsxs(T, {'].join('\n'),
  'popup: always logged-in branch',
);

replaceOnce(
  'src/popup/popup.js',
  'onClick: () => f(`${M.APP_URL}/dashboard`),',
  'onClick: () => {},',
  'popup: dashboard no-op',
);

replaceOnce(
  'src/popup/popup.js',
  'onClick: Y,',
  'onClick: () => {},',
  'popup: logout no-op',
);

replaceOnce(
  'src/manifest.json',
  '   "optional_permissions": [ "identity" ],\r\n',
  '',
  'manifest: drop identity permission',
);

console.log('\nAll unlocks applied.');