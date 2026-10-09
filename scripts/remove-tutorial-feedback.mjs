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

function replaceSpan(rel, oldText, newText, label) {
  const t = load(rel);
  if (t.includes(newText) && newText.length > 10) { console.log(`[SKIP] ${label}`); return; }
  if (t.includes(oldText)) { save(rel, t.split(oldText).join(newText)); console.log(`[OK] ${label}`); return; }
  console.log(`[SKIP] ${label}`);
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

// 1. background: 首次安装不再打开 getting-started 页面
replaceSpan(
  'src/background.js',
  [
    '    if ((await A(), s.reason === "install")) {',
    '      await Y(), await q();',
    '      const t = `${Q.APP_URL}/getting-started`;',
    '      o.tabs.create({ url: t });',
    '    } else s.reason === "update" && (await Y(), await q());',
  ].join('\n'),
  [
    '    if ((await A(), s.reason === "install")) {',
    '      await Y(), await q();',
    '    } else s.reason === "update" && (await Y(), await q());',
  ].join('\n'),
  'background: first-install tab open removed',
);

// 2. options: 侧栏移除 tutorial/feedback 两个外链项
replaceSpan(
  'src/options/options.js',
  [
    '      navSecondary: [',
    '        {',
    '          title: i("common:sidebar.tutorial"),',
    '          url: W.APP_URL + "/docs",',
    '          icon: ya,',
    '        },',
    '        {',
    '          title: i("common:sidebar.feedback"),',
    '          url: W.APP_GITHUB_URL + "/issues",',
    '          icon: Na,',
    '        },',
    '      ],',
  ].join('\n'),
  '      navSecondary: [],',
  'options: sidebar tutorial/feedback links removed',
);

// 3. options: About 反馈卡片移除
removeExpr(
  'src/options/options.js',
  'children: s("about.support.feedbackTitle"),',
  'e.jsxs("div", {\n                    className: "space-y-4",\n                    children: [\n                      e.jsx("h4", {',
  'null',
  'options: about feedback card removed',
);

// 4. popup: 菜单移除 helpDocs(教程) 与 feedback(反馈)
removeExpr(
  'src/popup/popup.js',
  'children: s("popup:menu.helpDocs"),',
  'e.jsxs(c, {',
  'null',
  'popup: helpDocs menu item removed',
);
removeExpr(
  'src/popup/popup.js',
  'children: s("popup:menu.feedback"),',
  'e.jsxs(c, {',
  'null',
  'popup: feedback menu item removed',
);

// 5. locale key 清理
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
const COMMON_DEL = [['sidebar', 'tutorial'], ['sidebar', 'feedback']];
const SETTINGS_DEL = [
  ['about', 'support', 'feedbackTitle'],
  ['about', 'support', 'feedbackDescription'],
  ['about', 'support', 'feedbackButton'],
];
const POPUP_DEL = [['menu', 'helpDocs'], ['menu', 'feedback']];
const locBase = path.join(root, 'src', 'locales');
if (existsSync(locBase)) {
  for (const lang of readdirSync(locBase)) {
    for (const [file, dels] of [
      ['common.json', COMMON_DEL],
      ['settings.json', SETTINGS_DEL],
      ['popup.json', POPUP_DEL],
    ]) {
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

// 6. verification
const REMOVED = /tutorial|feedback|helpDocs|getting-started/i;
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
if (hits) throw new Error('tutorial/feedback still referenced in ' + hits + ' js file(s)');
console.log('OK: no tutorial/feedback references left in JS');

console.log('\nRemove tutorial/feedback done.');