import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = (rel) => readFileSync(path.join(root, rel), 'utf8');
const save = (rel, text) => writeFileSync(path.join(root, rel), text, 'utf8');

function scanBalanced(text, openIdx, open, close) {
  let depth = 0, quote = null;
  for (let i = openIdx; i < text.length; i++) {
    const ch = text[i];
    if (quote) {
      if (ch === '\\') { i++; continue; }
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { quote = ch; continue; }
    if (ch === open) depth++;
    else if (ch === close) { depth--; if (depth === 0) return i + 1; }
  }
  throw new Error('unbalanced: ' + open + close);
}
const parenEnd = (t, i) => scanBalanced(t, i, '(', ')');
const braceEnd = (t, i) => scanBalanced(t, i, '{', '}');

function removeFunction(rel, fn, label) {
  let t = load(rel);
  const m = 'function ' + fn + '(';
  const start = t.indexOf(m);
  if (start === -1) { console.log(`[SKIP] ${label}`); return; }
  if (t.indexOf(m, start + 1) !== -1) throw new Error(`${label}: multiple declarations`);
  const pEnd = parenEnd(t, start + m.length - 1);
  const bOpen = t.indexOf('{', pEnd);
  const bEnd = braceEnd(t, bOpen);
  let end = bEnd;
  if (t[end] === '\n') end++;
  save(rel, t.slice(0, start) + t.slice(end));
  console.log(`[OK] ${label}`);
}

function replaceCalls(rel, fn, expected, label) {
  let t = load(rel);
  const needle = 'e.jsx(' + fn + ', {';
  let count = 0;
  while (true) {
    const i = t.indexOf(needle);
    if (i === -1) break;
    const pEnd = parenEnd(t, i + 5);
    t = t.slice(0, i) + 'null' + t.slice(pEnd);
    count++;
  }
  if (count === 0) { console.log(`[SKIP] ${label}`); return; }
  if (count !== expected) throw new Error(`${label}: expected ${expected}, found ${count}`);
  save(rel, t);
  console.log(`[OK] ${label} (${count})`);
}

function removeExpr(rel, marker, backwalk, replacement, label) {
  let t = load(rel);
  const mi = t.indexOf(marker);
  if (mi === -1) { console.log(`[SKIP] ${label}`); return; }
  if (t.indexOf(marker, mi + 1) !== -1) throw new Error(`${label}: marker not unique`);
  const start = t.lastIndexOf(backwalk, mi);
  if (start === -1) throw new Error(`${label}: backwalk not found`);
  const pEnd = parenEnd(t, start + backwalk.indexOf('('));
  const removed = t.slice(start, pEnd);
  if (!removed.includes(marker)) throw new Error(`${label}: span mismatch`);
  save(rel, t.slice(0, start) + replacement + t.slice(pEnd));
  console.log(`[OK] ${label}`);
}

function removeLine(rel, line, label) {
  const t = load(rel);
  if (!t.includes(line)) { console.log(`[SKIP] ${label}`); return; }
  save(rel, t.split(line + '\n').join(''));
  console.log(`[OK] ${label}`);
}

// ============ options.js ============
replaceCalls('src/options/options.js', 'te', 8, 'options: te renders -> null');
replaceCalls('src/options/options.js', 'or', 1, 'options: or renders -> null');
replaceCalls('src/options/options.js', 'cr', 1, 'options: cr renders -> null');
replaceCalls('src/options/options.js', 'Mr', 1, 'options: Mr renders -> null');
replaceCalls('src/options/options.js', 'Ir', 1, 'options: Ir renders -> null');
replaceCalls('src/options/options.js', 'K', 14, 'options: Pro badge (K) renders -> null');
removeFunction('src/options/options.js', 'te', 'options: remove te (upgrade dialog)');
removeFunction('src/options/options.js', 'or', 'options: remove or (timemachine teaser)');
removeFunction('src/options/options.js', 'cr', 'options: remove cr (history teaser)');
removeFunction('src/options/options.js', 'Mr', 'options: remove Mr (upgrade card)');
removeFunction('src/options/options.js', 'Ir', 'options: remove Ir (sidebar user area)');
removeExpr(
  'src/options/options.js',
  '              t()\n                ? e.jsxs("div", {',
  'e.jsxs("div", {',
  '',
  'options: remove dashboard pro/free badge block',
);
removeExpr(
  'src/options/options.js',
  'children: s("about.support.proTitle"),',
  'e.jsxs("div", {\n                    className: "space-y-4",\n                    children: [\n                      e.jsx("h4", {',
  'null',
  'options: remove about-support pro card (2nd)',
);
removeLine('src/options/options.js', '  P as K,', 'options: drop import P as K (pro badge)');

// ============ popup.js ============
replaceCalls('src/popup/popup.js', 'Ve', 1, 'popup: Ve render -> null');
replaceCalls('src/popup/popup.js', 'je', 1, 'popup: Pro badge (je) render -> null');
removeFunction('src/popup/popup.js', 'Ve', 'popup: remove Ve (registration dialog)');
removeExpr(
  'src/popup/popup.js',
  'children: O',
  'e.jsx("div", {',
  'null',
  'popup: remove user-area (login/logout)',
);
removeLine('src/popup/popup.js', '  P as je,', 'popup: drop import P as je (pro badge)');

// ============ I18nProvider chunk ============
removeFunction('src/chunks/I18nProvider-bZ79bPbq.js', 'Hh', 'i18n chunk: remove Hh (Pro badge)');
removeLine('src/chunks/I18nProvider-bZ79bPbq.js', '  Hh as P,', 'i18n chunk: drop export Hh as P');

// ============ locale keys ============
function deletePath(obj, arr) {
  let c = obj;
  for (let i = 0; i < arr.length - 1; i++) {
    if (!c || typeof c !== 'object') return false;
    c = c[arr[i]];
  }
  if (!c || typeof c !== 'object') return false;
  if (!(arr[arr.length - 1] in c)) return false;
  delete c[arr[arr.length - 1]];
  return true;
}
const COMMON_DEL = [
  ['buttons', 'upgrade'], ['buttons', 'login'], ['buttons', 'logout'],
  ['labels', 'pro'], ['navUser'], ['upgradeDialog'], ['upgradeCard'], ['registrationDialog'],
];
const SETTINGS_DEL = [
  ['dashboard', 'proVersion'], ['dashboard', 'freeVersion'], ['dashboard', 'upgrade'],
  ['about', 'support', 'proTitle'], ['about', 'support', 'proDescription'], ['about', 'support', 'proButton'],
  ['history', 'teaser'], ['timemachine', 'teaser'],
];
const locBase = path.join(root, 'src', 'locales');
if (existsSync(locBase)) {
  for (const lang of readdirSync(locBase)) {
    for (const [file, dels] of [['common.json', COMMON_DEL], ['settings.json', SETTINGS_DEL]]) {
      const rel = 'src/locales/' + lang + '/' + file;
      const p = path.join(root, rel);
      if (!existsSync(p)) continue;
      const obj = JSON.parse(load(rel));
      for (const d of dels) deletePath(obj, d);
      save(rel, JSON.stringify(obj, null, 4) + '\n');
      console.log(`[OK] locale keys ${rel}`);
    }
  }
}

// ============ verification ============
const REMOVED = /upgradeDialog|upgradeCard|navUser|registrationDialog|common:buttons\.(login|logout)|labels\.pro|dashboard\.(proVersion|freeVersion|upgrade)|about\.support\.pro|history\.teaser|timemachine\.teaser|buttons\.upgrade|Pro badge/;
function walk(d) {
  return readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(d, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}
let hits = 0;
for (const f of walk(path.join(root, 'src'))) {
  if (!f.endsWith('.js')) continue;
  const rel = path.relative(root, f).replaceAll('\\', '/');
  if (rel.startsWith('original/')) continue;
  if (REMOVED.test(load(rel))) { hits++; console.log('HIT', rel); }
}
if (hits) throw new Error('removed keys still referenced in ' + hits + ' js file(s)');
console.log('OK: no removed Pro/login keys left in JS');

console.log('\nRemove-pro done.');