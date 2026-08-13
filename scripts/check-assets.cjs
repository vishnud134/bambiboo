const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src');

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, files);
    else if (/\.(ts|tsx|js|jsx)$/.test(e.name)) files.push(full);
  }
  return files;
}

function findImports() {
  const files = walk(path.join(root, 'src'));
  const imports = new Set();
  const importRegex = /from\s+["']@\/assets\/([^"']+)["']/g;
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = importRegex.exec(content))) {
      imports.add(m[1]);
    }
  }
  return Array.from(imports);
}

function checkAsset(rel) {
  const candidates = [];
  const absSrc = path.join(root, 'src', 'assets', rel);
  const absPublic = path.join(root, 'public', 'assets', rel);
  if (fs.existsSync(absSrc)) return { found: true, path: absSrc };
  if (fs.existsSync(absPublic)) return { found: true, path: absPublic };
  // try common extensions
  const base = rel.replace(/\.(webp|png|jpg|jpeg)$/, '')
  const exts = ['.webp', '.png', '.jpg', '.jpeg'];
  for (const e of exts) {
    const p1 = path.join(root, 'src', 'assets', base + e);
    const p2 = path.join(root, 'public', 'assets', base + e);
    if (fs.existsSync(p1)) return { found: true, path: p1 };
    if (fs.existsSync(p2)) return { found: true, path: p2 };
  }
  return { found: false, tried: [absSrc, absPublic] };
}

function main(){
  const imports = findImports();
  const report = [];
  for (const imp of imports) {
    const res = checkAsset(imp);
    report.push({ import: imp, ...res });
  }
  const missing = report.filter(r => !r.found);
  console.log('Checked', report.length, 'asset imports.');
  if (missing.length===0) {
    console.log('All referenced assets found.');
    process.exit(0);
  }
  console.log('Missing assets (', missing.length, '):');
  for (const m of missing) {
    console.log('-', m.import);
    console.log('  Tried:', m.tried && m.tried.join(', '));
  }
  process.exit(2);
}

main();
