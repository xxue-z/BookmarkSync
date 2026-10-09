import { readFileSync, writeFileSync, readdirSync, existsSync, renameSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = (rel) => readFileSync(path.join(root, rel), 'utf8');
const save = (rel, text) => writeFileSync(path.join(root, rel), text, 'utf8');

function replaceOnce(rel, oldText, newText, label) {
  const full = load(rel);
  if (full.includes(newText)) { console.log(`[SKIP] ${label}`); return; }
  let count = 0, pos = -1;
  for (let i = full.indexOf(oldText); i !== -1; i = full.indexOf(oldText, i + 1)) { count++; pos = i; }
  if (count !== 1) throw new Error(`${label}: expected 1 occurrence, found ${count}`);
  save(rel, full.slice(0, pos) + newText + full.slice(pos + oldText.length));
  console.log(`[OK] ${label}`);
}
function replaceAll(rel, oldText, newText, label) {
  const full = load(rel);
  if (full.includes(newText)) { console.log(`[SKIP] ${label}`); return; }
  if (!full.includes(oldText)) throw new Error(`${label}: pattern not found`);
  save(rel, full.split(oldText).join(newText));
  console.log(`[OK] ${label}`);
}

// --- 剩余标识符：数据文件名 / 存储名 / wasm / homepage_url ---
replaceAll('src/chunks/sentry--tCLaZao.js', 'bookmarkhub.json', 'bookmarksync.json', 'sentry: data filenames');
replaceOnce('src/chunks/sentry--tCLaZao.js', '"./bookmarkhub_core_bg.js"', '"./bookmarksync_core_bg.js"', 'sentry: wasm glue js ref');
replaceOnce('src/chunks/sentry--tCLaZao.js', '"/assets/bookmarkhub_core_bg-Cl4sWNse.wasm"', '"/assets/bookmarksync_core_bg-Cl4sWNse.wasm"', 'sentry: wasm asset ref');
replaceOnce('src/chunks/hash-Cx2ffm9Z.js', 'super("BookmarkHub_SyncRecords")', 'super("BookmarkSync_SyncRecords")', 'hash: sync records store name');

const locBase = path.join(root, 'src', 'locales');
if (existsSync(locBase)) {
  for (const lang of readdirSync(locBase)) {
    const rel = 'src/locales/' + lang + '/settings.json';
    const p = path.join(root, rel);
    if (existsSync(p)) {
      const t = load(rel);
      if (t.includes('bookmarkhub.json')) {
        save(rel, t.split('bookmarkhub.json').join('bookmarksync.json'));
        console.log(`[OK] locale filenames ${rel}`);
      }
    }
  }
}

const mRaw = load('src/manifest.json');
const mNew = mRaw.replace(/   "homepage_url": "[^"]*",\r?\n/, '');
if (mNew !== mRaw) { save('src/manifest.json', mNew); console.log('[OK] manifest: homepage_url removed'); }
else console.log('[SKIP] manifest: homepage_url already removed');

const wasmOld = path.join(root, 'src', 'assets', 'bookmarkhub_core_bg-Cl4sWNse.wasm');
const wasmNew = path.join(root, 'src', 'assets', 'bookmarksync_core_bg-Cl4sWNse.wasm');
if (existsSync(wasmOld)) { renameSync(wasmOld, wasmNew); console.log('[OK] wasm file renamed'); }
else console.log(existsSync(wasmNew) ? '[SKIP] wasm already renamed' : '[WARN] wasm file not found');

console.log('\nRename done.');