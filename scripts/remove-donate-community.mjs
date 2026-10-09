import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = (rel) => readFileSync(path.join(root, rel), 'utf8');
const save = (rel, text) => writeFileSync(path.join(root, rel), text, 'utf8');

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

// popup: 移除 捐赠 + 分隔线 + 社区 三项
const oldBlock = [
  '                        e.jsxs(c, {',
  '                          onClick: () => o("/supportus"),',
  '                          children: [',
  '                            e.jsx(He, { className: "mr-2 h-4 w-4" }),',
  '                            e.jsx("span", {',
  '                              className: "text-xs",',
  '                              children: s("popup:menu.donate"),',
  '                            }),',
  '                          ],',
  '                        }),',
  '                        e.jsx(g, {}),',
  '                        e.jsxs(c, {',
  '                          onClick: () => o("/community"),',
  '                          children: [',
  '                            e.jsx(Ke, { className: "mr-2 h-4 w-4" }),',
  '                            e.jsx("span", {',
  '                              className: "text-xs",',
  '                              children: s("popup:menu.community"),',
  '                            }),',
  '                          ],',
  '                        }),',
].join('\n');
{
  const t = load('src/popup/popup.js');
  if (!t.includes(oldBlock)) {
    console.log('[SKIP] popup: donate/community already removed');
  } else {
    const count = t.split(oldBlock).length - 1;
    if (count !== 1) throw new Error('donate block: expected 1 occurrence, found ' + count);
    save('src/popup/popup.js', t.split(oldBlock).join('null,'));
    console.log('[OK] popup: donate + separator + community removed');
  }
}

// locale keys
const POPUP_DEL = [['menu', 'donate'], ['menu', 'community']];
const locBase = path.join(root, 'src', 'locales');
if (existsSync(locBase)) {
  for (const lang of readdirSync(locBase)) {
    const rel = 'src/locales/' + lang + '/popup.json';
    const p = path.join(root, rel);
    if (!existsSync(p)) continue;
    const obj = JSON.parse(load(rel));
    let changed = false;
    for (const d of POPUP_DEL) changed = deletePath(obj, d) || changed;
    if (changed) {
      save(rel, JSON.stringify(obj, null, 4) + '\n');
      console.log(`[OK] locale keys ${rel}`);
    }
  }
}

// verification
const REMOVED = /popup:menu\.(donate|community)|\/supportus|\/community/i;
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
if (hits) throw new Error('donate/community still referenced in ' + hits + ' js file(s)');
console.log('OK: no donate/community references left in JS');

console.log('\nRemove donate/community done.');