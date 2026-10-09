import { readFileSync, writeFileSync } from 'node:fs';
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
const braceEnd = (t, i) => scanBalanced(t, i, '{', '}');

function replaceFunction(rel, startMarker, newText, label) {
  let t = load(rel);
  const start = t.indexOf(startMarker);
  if (start === -1) { console.log(`[SKIP] ${label}`); return; }
  if (t.includes(newText.slice(0, 70))) { console.log(`[SKIP] ${label} (already applied)`); return; }
  const bOpen = t.indexOf('{', start);
  const bEnd = braceEnd(t, bOpen);
  let end = bEnd;
  if (t[end] === '\n') end++;
  save(rel, t.slice(0, start) + newText + t.slice(end));
  console.log(`[OK] ${label}`);
}

const TR = `async function tr(s, a) {
  if (s === "gist") {
    const { token, gistId } = a || {};
    if (!token || !gistId)
      throw new Error("Gist token/ID is not configured in Storage settings");
    const r = await fetch(
      \`https://api.github.com/gists/\${gistId}/commits\`,
      {
        headers: {
          Authorization: \`Bearer \${token}\`,
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
          ? \`+\${c.change_status.additions || 0} -\${c.change_status.deletions || 0}\`
          : "",
      }));
  }
  if (s === "github") {
    const { token, owner, repo, filePath } = a || {};
    if (!token || !owner || !repo)
      throw new Error("GitHub owner/repo/token is not configured in Storage settings");
    const p = filePath || "bookmarksync.json";
    const r = await fetch(
      \`https://api.github.com/repos/\${owner}/\${repo}/commits?path=\${encodeURIComponent(p)}&per_page=50\`,
      {
        headers: {
          Authorization: \`Bearer \${token}\`,
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
  throw new Error("This storage type does not support version history");
}
`;

const AR = `async function ar(s, a, t) {
  if (s === "gist") {
    const { token, gistId, fileName } = a || {};
    if (!token || !gistId) throw new Error("Gist token/ID is not configured");
    const r = await fetch(
      \`https://api.github.com/gists/\${gistId}/\${t}\`,
      {
        headers: {
          Authorization: \`Bearer \${token}\`,
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
      \`https://api.github.com/repos/\${owner}/\${repo}/contents/\${encodeURIComponent(p)}?ref=\${t}\`,
      { headers: { Authorization: \`Bearer \${token}\`, Accept: "application/vnd.github.raw" } },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch repository version");
    return await r.text();
  }
  throw new Error("This storage type does not support version history");
}
`;

replaceFunction('src/options/options.js', 'async function tr(s, a) {', TR, 'timemachine: tr -> gist history');
replaceFunction('src/options/options.js', 'async function ar(s, a, t) {', AR, 'timemachine: ar -> gist restore');

const RR = `async function rr() {
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
`;

const IR = `async function ir(s) {
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
`;

replaceFunction('src/options/options.js', 'async function rr() {', RR, 'settings: rr -> local backup load');
replaceFunction('src/options/options.js', 'async function ir(s) {', IR, 'settings: ir -> local backup save');

const oldExpire = [
  '                      const R = new Date(p.timestamp),',
  '                        U =',
  '                          (new Date().getTime() - R.getTime()) /',
  '                            (1e3 * 60 * 60 * 24) >',
  '                          30;',
].join('\n');
const newExpire = [
  '                      const R = new Date(p.timestamp),',
  '                        U = !1;',
].join('\n');
{
  const t = load('src/options/options.js');
  if (t.includes('U = !1;')) {
    console.log('[SKIP] timemachine: expiry removed');
  } else {
    const count = t.split(oldExpire).length - 1;
    if (count !== 1) throw new Error(`expiry: expected 1 occurrence, found ${count}`);
    save('src/options/options.js', t.split(oldExpire).join(newExpire));
    console.log('[OK] timemachine: 30-day expiry removed');
  }
}

console.log('\nTime-machine batch patch done.');