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
  throw new Error('unbalanced: ' + open + close);
}
const braceEnd = (t, i) => scanBalanced(t, i, '{', '}');

function replaceFullFunction(rel, fnStart, newText, sentinel, label) {
  let t = load(rel);
  if (t.includes(sentinel)) { console.log(`[SKIP] ${label}`); return; }
  const start = t.indexOf(fnStart);
  if (start === -1) throw new Error(`${label}: function start not found`);
  const bOpen = t.indexOf('{', start);
  const bEnd = braceEnd(t, bOpen);
  let end = bEnd;
  if (t[end] === '\n') end++;
  save(rel, t.slice(0, start) + newText + t.slice(end));
  console.log(`[OK] ${label}`);
}

const TR = `/* BookmarkSync time-machine: local storage version history (gist/github/gitee/gitlab/onedrive) */
async function tr(s, a) {
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
  if (s === "gitee") {
    const { token, owner, repo, filePath, branch } = a || {};
    if (!token || !owner || !repo)
      throw new Error("Gitee owner/repo/token is not configured in Storage settings");
    const p = filePath || "bookmarksync.json";
    const br = branch || "master";
    const r = await fetch(
      \`https://gitee.com/api/v5/repos/\${owner}/\${repo}/commits?access_token=\${encodeURIComponent(token)}&path=\${encodeURIComponent(p)}&sha=\${encodeURIComponent(br)}&per_page=50\`,
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
      \`\${base}/projects/\${encodeURIComponent(projectId)}/repository/commits?path=\${encodeURIComponent(p)}&ref_name=\${encodeURIComponent(br)}&per_page=50\`,
      { headers: { Authorization: \`Bearer \${token}\` } },
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
      \`https://graph.microsoft.com/v1.0/me/drive/root:/\${p}:/versions\`,
      { headers: { Authorization: \`Bearer \${accessToken}\` } },
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
      message: v.size ? \`\${v.size} bytes\` : "",
    }));
  }
  throw new Error("This storage type does not support version history");
}
`;

const AR = `/* BookmarkSync time-machine restore: local storage version content (gist/github/gitee/gitlab/onedrive) */
async function ar(s, a, t) {
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
  if (s === "gitee") {
    const { token, owner, repo, filePath } = a || {};
    if (!token || !owner || !repo)
      throw new Error("Gitee owner/repo/token is not configured");
    const p = filePath || "bookmarksync.json";
    const r = await fetch(
      \`https://gitee.com/api/v5/repos/\${owner}/\${repo}/contents/\${p}?access_token=\${encodeURIComponent(token)}&ref=\${encodeURIComponent(t)}\`,
      { headers: { Accept: "application/json" } },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch gitee version");
    const j = await r.json();
    if (typeof j.content == "string") {
      const bin = atob(j.content.replace(/\\n/g, ""));
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
      \`\${base}/projects/\${encodeURIComponent(projectId)}/repository/files/\${encodeURIComponent(p)}/raw?ref=\${encodeURIComponent(t)}\`,
      { headers: { Authorization: \`Bearer \${token}\` } },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch gitlab version");
    return await r.text();
  }
  if (s === "onedrive") {
    const { accessToken, filePath } = a || {};
    if (!accessToken) throw new Error("OneDrive access token is not configured");
    const p = filePath || "bookmarksync.json";
    const r = await fetch(
      \`https://graph.microsoft.com/v1.0/me/drive/root:/\${p}:/versions/\${encodeURIComponent(t)}/content\`,
      { headers: { Authorization: \`Bearer \${accessToken}\` } },
    );
    if (!r.ok) throw new Error((await r.text()) || "Failed to fetch onedrive version");
    return await r.text();
  }
  throw new Error("This storage type does not support version history");
}
`;

replaceFullFunction(
  'src/options/options.js',
  'async function tr(s, a) {',
  TR,
  'local storage version history (gist/github/gitee/gitlab/onedrive)',
  'timemachine: tr supports all storage types',
);
replaceFullFunction(
  'src/options/options.js',
  'async function ar(s, a, t) {',
  AR,
  'local storage version content (gist/github/gitee/gitlab/onedrive)',
  'timemachine: ar supports all storage types',
);

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
    if (count !== 1) throw new Error(`expiry: expected 1, found ${count}`);
    save('src/options/options.js', t.split(oldExpire).join(newExpire));
    console.log('[OK] timemachine: 30-day expiry removed');
  }
}

console.log('\nTime-machine all-storage patch done.');