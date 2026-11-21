/**
 * Import a note exported by the inscriptum Obsidian plugin ("Export as
 * website") into this blog's static content.
 *
 * Usage:
 *   node ./scripts/import-note.mjs <export-folder> [--site https://inscriptum.js.org]
 *
 * <export-folder> is the `<slug>/` folder the plugin wrote into the vault
 * (contains index.html, note.css and images/). Several folders can be
 * passed at once.
 *
 * What it does:
 *   1. src/public/note/<slug>.html      — the page, with asset links
 *      rewritten to site paths (`note.css` → `/css/note-export.css`,
 *      `images/…` → `/images/<slug>/…`, og/twitter image made absolute)
 *      and the site footer appended;
 *   2. src/public/images/<slug>/        — the note's images;
 *   3. src/public/css/note-export.css   — the plugin's self-contained
 *      stylesheet (deployed note.css + embedded fonts + export additions);
 *   4. src/public/note/list.json        — entry upserted by `name` (keeps
 *      id/created_at/author/draft_id on re-import, bumps updated_at).
 *
 * Review the changes and commit — deploy is the usual `npm run deploy`.
 */
import { randomUUID } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BLOG_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NOTE_DIR = path.join(BLOG_ROOT, 'src/public/note');
const IMAGES_DIR = path.join(BLOG_ROOT, 'src/public/images');
const CSS_DIR = path.join(BLOG_ROOT, 'src/public/css');
const LIST_PATH = path.join(NOTE_DIR, 'list.json');

const DEFAULT_SITE = 'https://inscriptum.js.org';

/**
 * Site footer appended to every imported page — a static port of the
 * blog's `inscriptum-footer` web component (src/components/footer/).
 * The generic plugin export stays blog-agnostic; the footer is the blog's
 * concern, injected here. Styles are inlined: navbar base styles come with
 * /css/note-export.css, the footer-specific ones live below.
 */
const FOOTER_HTML = `<style>
  inscriptum-footer { display: block; }
  .footer__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    width: 100%;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .copyright {
    line-height: 6.5rem;
    color: var(--color-contrast-medium);
    font-size: 1.4rem;
  }
  .footer__container .navbar-link svg {
    width: 24px;
    height: 24px;
    margin: 0 6px;
    flex-shrink: 0;
  }
</style>
<inscriptum-footer>
  <nav class="navbar">
    <div class="footer__container">
      <ul class="navbar-list">
        <li class="navbar-item">
          <a class="navbar-link" href="/notes" style="display: flex; align-content: center; align-items: center;">
            ../../
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 13l-2 -2"></path><path d="M12 12l2 -2"></path><path d="M12 21v-13"></path><path d="M9.824 15.995a3 3 0 0 1 -2.743 -3.69a2.998 2.998 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a2.997 2.997 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z"></path></svg>
          </a>
        </li>
      </ul>
      <ul class="navbar-list">
        <li class="navbar-item">
          <a class="navbar-link" href="https://github.com/sumbad" style="display: flex; align-content: center; align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
            GitHub
          </a>
        </li>
        <li class="navbar-item"><span class="copyright">© Copyright 2026 Denis Sumbaev</span></li>
      </ul>
    </div>
  </nav>
</inscriptum-footer>`;

/** Appends the site footer before `</body>` (idempotent). */
function appendFooter(page) {
  if (page.includes('<inscriptum-footer>')) return page;
  return page.replace('</body>', `${FOOTER_HTML}\n</body>`);
}

const args = process.argv.slice(2);
const folders = args.filter((a) => !a.startsWith('--'));
const siteArg = args.find((a) => a.startsWith('--site='));
const site = (siteArg ? siteArg.slice(7) : DEFAULT_SITE).replace(/\/+$/, '');

if (folders.length === 0) {
  console.log(
    'Error: export folder is undefined. Usage: `node ./scripts/import-note.mjs <export-folder> [--site=https://inscriptum.js.org]`',
  );
  process.exit(1);
}

let list = existsSync(LIST_PATH)
  ? JSON.parse(readFileSync(LIST_PATH, 'utf8'))
  : [];

for (const folder of folders.map((f) => path.resolve(f))) {
  if (!existsSync(path.join(folder, 'index.html'))) {
    console.error(`Error: no index.html in "${folder}" — is it a plugin export folder?`);
    process.exit(1);
  }

  const slug = path.basename(folder);
  const html = readFileSync(path.join(folder, 'index.html'), 'utf8');

  // ── Page rewrites: relative export paths → site paths ──
  let page = appendFooter(
    html
      // stylesheet: the blog keeps its own copy under a dedicated name
      .replace('href="note.css"', 'href="/css/note-export.css"')
      // images: shared per-note folder
      .replaceAll('src="images/', `src="/images/${slug}/`)
      // og/twitter image must be absolute for social scrapers
      .replaceAll('content="images/', `content="${site}/images/${slug}/`),
  );

  // ── Preview metadata from the page's own meta ──
  const title = (page.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? slug;
  const description =
    (page.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? '';
  const image =
    (page.match(/<meta property="og:image" content="([^"]*)"/) ?? [])[1] ?? null;

  // ── Files ──
  mkdirSync(NOTE_DIR, { recursive: true });
  writeFileSync(path.join(NOTE_DIR, `${slug}.html`), page);
  console.log(`written  src/public/note/${slug}.html`);

  if (existsSync(path.join(folder, 'images'))) {
    mkdirSync(path.join(IMAGES_DIR, slug), { recursive: true });
    cpSync(path.join(folder, 'images'), path.join(IMAGES_DIR, slug), { recursive: true });
    console.log(`written  src/public/images/${slug}/`);
  }

  if (existsSync(path.join(folder, 'note.css'))) {
    mkdirSync(CSS_DIR, { recursive: true });
    cpSync(path.join(folder, 'note.css'), path.join(CSS_DIR, 'note-export.css'));
    console.log('written  src/public/css/note-export.css');
  }

  // ── list.json upsert ──
  const now = new Date().toISOString();
  const existing = list.find((it) => it.name === slug);
  // title/description stay HTML-escaped, as the existing entries are
  // (the old publish pipeline stored the attribute-escaped strings).
  const preview = { image, title, description };

  if (existing != null) {
    existing.preview = preview;
    existing.updated_at = now;
    console.log(`updated  list.json entry "${slug}" (created_at kept: ${existing.created_at})`);
  } else {
    const latest = list[0];
    list.unshift({
      id: randomUUID(),
      name: slug,
      preview,
      draft_id: null,
      static_link: `/note/${slug}`,
      updated_at: now,
      created_at: now,
      author: latest?.author ?? { id: null, name: null, email: null },
    });
    console.log(`added    list.json entry "${slug}"`);
  }
}

writeFileSync(LIST_PATH, `${JSON.stringify(list, null, 2)}\n`);
console.log('written  src/public/note/list.json');
console.log('\nDone. Review the changes and commit; deploy as usual (npm run deploy).');
