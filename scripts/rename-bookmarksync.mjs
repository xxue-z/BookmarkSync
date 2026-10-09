import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
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

function replaceLocale(rel) {
  const text = load(rel);
  if (!text.includes('BookmarkHub')) { console.log(`[skip] ${rel} (no match)`); return; }
  save(rel, text.split('BookmarkHub').join('BookmarkSync'));
  console.log(`[OK] locale ${rel}`);
}

const localePatterns = [
  ['src/_locales/', 'messages.json'],
  ['src/locales/', 'popup.json'],
  ['src/locales/', 'settings.json'],
  ['src/locales/', 'sync.json'],
];
for (const [dir, file] of localePatterns) {
  const base = path.join(root, dir);
  if (!existsSync(base)) continue;
  for (const lang of readdirSync(base)) {
    const rel = dir + lang + '/' + file;
    if (existsSync(path.join(root, rel))) replaceLocale(rel);
  }
}

const SENTRY_ID = '"bookmarkhub-extension@dev"';
const SENTRY_ID_NEW = '"bookmarksync-extension@dev"';

replaceOnce('src/background.js', SENTRY_ID, SENTRY_ID_NEW, 'background: sentry id');
replaceOnce('src/popup/popup.js', SENTRY_ID, SENTRY_ID_NEW, 'popup: sentry id');
replaceOnce('src/popup/popup.js', 'children: "BookmarkHub",', 'children: "BookmarkSync",', 'popup: logo text');
replaceOnce('src/options/options.js', SENTRY_ID, SENTRY_ID_NEW, 'options: sentry id');
replaceOnce('src/options/options.js', 'description=BookmarkHub&scopes=repo,gist,user', 'description=BookmarkSync&scopes=repo,gist,user', 'options: github token url');
replaceOnce('src/options/options.js', 'description=BookmarkHub-Gist&scopes=gist', 'description=BookmarkSync-Gist&scopes=gist', 'options: github gist token url');
replaceOnce('src/options/options.js', 'name=BookmarkHub&scopes=api', 'name=BookmarkSync&scopes=api', 'options: gitlab token url');
replaceOnce('src/options/options.js', 'bookmarkhub-backup-${H}.json', 'bookmarksync-backup-${H}.json', 'options: backup filename');
replaceAll('src/options/options.js', 'children: "BookmarkHub",', 'children: "BookmarkSync",', 'options: headings (x2)');

replaceOnce('src/chunks/sentry--tCLaZao.js', SENTRY_ID, SENTRY_ID_NEW, 'sentry chunk: sentry id');
replaceOnce('src/chunks/sentry--tCLaZao.js', 'nn = "BookmarkHub",', 'nn = "BookmarkSync",', 'sentry chunk: APP_NAME');
replaceOnce('src/chunks/sentry--tCLaZao.js', '[BookmarkHub] Failed to init system IDs:', '[BookmarkSync] Failed to init system IDs:', 'sentry chunk: log prefix');
replaceOnce('src/chunks/sentry--tCLaZao.js', 'tag: e || "BookmarkHub"', 'tag: e || "BookmarkSync"', 'sentry chunk: consola tag');
replaceOnce('src/chunks/sentry--tCLaZao.js', 'new et("BookmarkHub")', 'new et("BookmarkSync")', 'sentry chunk: consola instance');
replaceOnce('src/chunks/sentry--tCLaZao.js', '"bookmarkhub-extension@1.0.3"', '"bookmarksync-extension@1.0.3"', 'sentry chunk: release');
replaceOnce('src/chunks/hash-Cx2ffm9Z.js', SENTRY_ID, SENTRY_ID_NEW, 'hash chunk: sentry id');
replaceOnce('src/chunks/hash-Cx2ffm9Z.js', '"BookmarkHub bookmark sync data"', '"BookmarkSync bookmark sync data"', 'hash chunk: gist description');
replaceOnce('src/chunks/I18nProvider-bZ79bPbq.js', SENTRY_ID, SENTRY_ID_NEW, 'i18n chunk: sentry id');
replaceOnce('src/chunks/vendor-sentry-B3P1rFJ6.js', SENTRY_ID, SENTRY_ID_NEW, 'vendor-sentry: sentry id');
replaceOnce('src/chunks/vendor-ui-Piys8gOI.js', SENTRY_ID, SENTRY_ID_NEW, 'vendor-ui: sentry id');
replaceOnce('src/chunks/vendor-utils-bU8bXqsc.js', SENTRY_ID, SENTRY_ID_NEW, 'vendor-utils: sentry id');

replaceOnce('src/src/popup/index.html', '<title>BookmarkHub - Popup</title>', '<title>BookmarkSync - Popup</title>', 'popup html title');
replaceOnce('src/src/options/index.html', '<title>Settings - BookmarkHub</title>', '<title>Settings - BookmarkSync</title>', 'options html title');

console.log('\nRename done.');