// Builds dist/wiki-browser.html: every .md file in the repo, rendered and embedded in one page
// with a file tree and working cross-links. Usage: npm ci && node build.mjs [outfile]
import { marked } from 'marked';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const ROOT = path.resolve(HERE, '..', '..');
const OUT = process.argv[2] || path.join(HERE, 'dist', 'wiki-browser.html');
const sh = (cmd) => execSync(cmd, { cwd: ROOT }).toString().trim();
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

// every markdown file, tracked or not yet committed, that still exists
const all = sh('git ls-files --cached --others --exclude-standard "*.md"')
  .split('\n').filter((p) => p && fs.existsSync(path.join(ROOT, p))).sort();

// wiki order follows the Pages table in wiki/README.md; unindexed pages go last with a warning
const pagesSection = (read('wiki/README.md').split(/^## Pages\s*$/m)[1] || '').split(/^## /m)[0];
const indexed = [...pagesSection.matchAll(/\]\(([^)#\s]+\.md)\)/g)].map((m) => 'wiki/' + m[1]);
const wikiFiles = all.filter((p) => p.startsWith('wiki/') && p !== 'wiki/README.md');
for (const p of indexed) if (!wikiFiles.includes(p)) console.warn(`warning: wiki/README.md links to ${p}, which does not exist`);
const wiki = ['wiki/README.md', ...indexed.filter((p) => wikiFiles.includes(p)), ...wikiFiles.filter((p) => !indexed.includes(p))];
for (const p of wikiFiles) if (!indexed.includes(p)) console.warn(`warning: ${p} is not listed in the Pages table of wiki/README.md`);

const scratch = ['scratchpad/README.md', ...all.filter((p) => p.startsWith('scratchpad/') && p !== 'scratchpad/README.md')]
  .filter((p) => all.includes(p));
const repo = ['README.md', 'CLAUDE.md', ...all.filter((p) => !p.includes('/') && !['README.md', 'CLAUDE.md'].includes(p))]
  .filter((p) => all.includes(p));
const placed = new Set([...wiki, ...scratch, ...repo]);
const other = all.filter((p) => !placed.has(p) && !p.startsWith('tools/'));
const groups = [['Wiki', wiki], ['Scratchpad', scratch], ['Repo', repo], ...(other.length ? [['Other', other]] : [])];

const labelOverride = {
  'wiki/README.md': 'Wiki home',
  'scratchpad/README.md': 'Scratchpad index',
  'README.md': 'Project README',
  'CLAUDE.md': 'CLAUDE.md',
};

marked.use({ gfm: true });
const files = {};
for (const [, list] of groups) {
  for (const p of list) {
    const md = read(p);
    const title = (md.match(/^#\s+(.+)$/m) || [, p])[1];
    files[p] = { title, html: marked.parse(md) };
  }
}
const nav = groups.map(([group, list]) => ({
  group,
  items: list.map((p) => ({
    path: p,
    label: labelOverride[p] || files[p].title.replace(/\s+—\s+\d{4}-\d{2}-\d{2}$/, ''),
  })),
}));

const dirty = sh('git status --porcelain -- "*.md"') !== '';
const meta = {
  branch: sh('git branch --show-current'),
  commit: sh('git rev-parse --short HEAD') + (dirty ? ' + uncommitted edits' : ''),
  date: new Date().toISOString().slice(0, 10),
};

// escape "<" so the JSON can never close or confuse the host <script> element
const data = JSON.stringify({ files, nav, meta }).replace(/</g, '\\u003c');
const html = fs.readFileSync(path.join(HERE, 'template.html'), 'utf8').replace('__DATA__', () => data);
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
console.log(`wrote ${OUT} (${(html.length / 1024).toFixed(0)} KB, ${Object.keys(files).length} files)`);
