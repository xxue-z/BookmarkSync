import { generateKeyPairSync, createHash } from 'node:crypto';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = path.join(root, 'src', 'manifest.json');
const keysDir = path.join(root, '.keys');
const privPath = path.join(keysDir, 'extension-private-key.pem');

const alpha = 'abcdefghijklmnop';
function extId(publicKeyBase64) {
  const der = Buffer.from(publicKeyBase64, 'base64');
  const h = createHash('sha256').update(der).digest();
  let id = '';
  for (let i = 0; i < 16; i++) id += alpha[(h[i] >> 4) & 15] + alpha[h[i] & 15];
  return id;
}

const manifestRaw = readFileSync(manifestPath, 'utf8');
const oldKey = JSON.parse(manifestRaw).key;
if (!oldKey) throw new Error('manifest key not found');
console.log('旧 ID:', extId(oldKey));

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});
const newKey = publicKey.replace(/-----[^-]+-----/g, '').replace(/\s+/g, '');
const newId = extId(newKey);
console.log('新 ID:', newId);

mkdirSync(keysDir, { recursive: true });
if (existsSync(privPath)) writeFileSync(privPath + '.prev', readFileSync(privPath), 'utf8');
writeFileSync(privPath, privateKey, { encoding: 'utf8', mode: 0o600 });

const updated = manifestRaw.replace(/("key"\s*:\s*")[^"]*(")/, `$1${newKey}$2`);
if (updated === manifestRaw) throw new Error('manifest key replacement failed');
writeFileSync(manifestPath, updated, 'utf8');

console.log('manifest key 已更新');
console.log('私钥:', privPath, '(已加入 .gitignore)');