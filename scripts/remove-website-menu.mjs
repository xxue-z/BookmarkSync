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
  throw new Error('unbalanced');
}
const parenEnd = (t, i) => scanBalanced(t, i, '(', ')');

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

// 1. popup: 整个「更多」菜单（按钮+下拉）移除
{
  const rel = 'src/popup/popup.js';
  let t = load(rel);
  const marker = 'title: s("common:buttons.more"),';
  const mi = t.indexOf(marker);
  if (mi === -1) {
    console.log('[SKIP] popup: More menu already removed');
  } else {
    if (t.indexOf(marker, mi + 1) !== -1) throw new Error('more marker not unique');
    const start = t.lastIndexOf('e.jsxs(T, {', mi);
    if (start === -1) throw new Error('more menu start not found');
    const pEnd = parenEnd(t, start + 'e.jsxs(T, {'.indexOf('('));
    save(rel, t.slice(0, start) + 'null' + t.slice(pEnd));
    console.log('[OK] popup: More menu (website/support/terms) removed');
  }
}

// 2. options About 页脚外链行（条款/隐私/官网）移除，保留版权行
removeExpr(
  'src/options/options.js',
  'children: s("about.footer.terms"),',
  '          e.jsxs("div", {\n            className: "flex items-center gap-6",',
  'null',
  'options: about footer links (terms/privacy/website) removed',
);

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
const POPUP_DEL = [['menu', 'website'], ['menu', 'support'], ['menu', 'terms']];
const COMMON_DEL = [['buttons', 'more']];
const SETTINGS_DEL = [
  ['about', 'footer', 'terms'],
  ['about', 'footer', 'privacy'],
  ['about', 'footer', 'website'],
];
const locBase = path.join(root, 'src', 'locales');
if (existsSync(locBase)) {
  for (const lang of readdirSync(locBase)) {
    for (const [file, dels] of [
      ['popup.json', POPUP_DEL],
      ['common.json', COMMON_DEL],
      ['settings.json', SETTINGS_DEL],
    ]) {
      const rel = 'src/locales/' + lang + '/' + file;
      const p = path.join(root, rel);
      if (!existsSync(p)) continue;
      const obj = JSON.parse(load(rel));
      let changed = false;
      for (const d of dels) changed = deletePath(obj, d) || changed;
      if (changed) {
        save(rel, JSON.stringify(obj, null, 4) + '\n');
        console.log(`[OK] locale keys ${rel}`);
      }
    }
  }
}

const REMOVED = /popup:menu\.(website|support|terms)|common:buttons\.more|mailto:support@memoload\.com|about\.footer\.(terms|privacy|website)|Z\("\/terms"\)|Z\("\/privacy"\)/i;
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
if (hits) throw new Error('website-menu refs still in ' + hits + ' js file(s)');
console.log('OK: no website-menu references left in JS');

console.log('\nRemove website menu done.');