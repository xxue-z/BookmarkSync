import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SIZES = [16, 32, 48, 64, 128, 256];

function findBrowser() {
  const base = path.join(process.env.LOCALAPPDATA, 'ms-playwright');
  const cands = [];
  for (const d of readdirSync(base)) {
    if (!d.startsWith('chromium_headless_shell')) continue;
    for (const sub of ['chrome-headless-shell-win64', 'chrome-win', 'chrome-win2', '']) {
      const p = sub ? path.join(base, d, sub) : path.join(base, d);
      for (const exe of ['chrome-headless-shell.exe', 'headless_shell.exe', 'chrome.exe']) {
        const f = path.join(p, exe);
        if (existsSync(f)) cands.push(f);
      }
    }
  }
  if (!cands.length) throw new Error('headless shell not found');
  return cands.sort().pop();
}

async function render(browser, svgText, size) {
  const sized = svgText
    .replace(/width="256"/, 'width="' + size + '"')
    .replace(/height="256"/, 'height="' + size + '"');
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  await page.setContent(
    '<body style="margin:0;padding:0;background:transparent">' + sized + '</body>',
  );
  const buf = await page.screenshot({ omitBackground: true });
  await page.close();
  return buf;
}

const browser = await chromium.launch({ executablePath: findBrowser(), args: ['--no-sandbox'] });
for (const variant of ['dark', 'light']) {
  const full = readFileSync(path.join(root, 'src', 'icons', 'bookmarksync-' + variant + '.svg'), 'utf8');
  const compact = readFileSync(path.join(root, 'src', 'icons', 'bookmarksync-' + variant + '-compact.svg'), 'utf8');
  for (const size of SIZES) {
    const svgText = size <= 32 ? compact : full;
    const out = path.join(root, 'src', 'icons', variant, size + '.png');
    const buf = await render(browser, svgText, size);
    writeFileSync(out, buf);
    console.log('[OK] ' + variant + '/' + size + '.png (' + buf.length + ' bytes)');
  }
}
await browser.close();
console.log('icons rendered.');