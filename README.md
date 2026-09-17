# inscriptum

Static blog: [inscriptum.js.org](https://inscriptum.js.org). Articles are
self-contained `.html` pages in `src/public/note/` plus the `list.json`
index — the site deploy (`npm run deploy`) copies them as-is.

## Publishing an article written in the inscriptum Obsidian plugin

Articles are written in the
[inscriptum plugin](https://github.com/inscriptum/obsidian-plugin) (a local-first
rich text editor inside Obsidian) and exported with its
**"Export current note as website"** command. The command writes a
self-contained folder into the vault:

```
<export folder>/<slug>/
  index.html     — the article (meta tags, article/section markup)
  note.css       — the stylesheet with the fonts embedded
  images/…       — the note's images, referenced relatively
```

Import one or several of those folders into the blog with:

```bash
node ./scripts/import-note.mjs <path/to/export/<slug>> [more-folders…] [--site=https://inscriptum.js.org]
```

The script (no dependencies, plain Node):

1. writes `src/public/note/<slug>.html`, rewriting the page's asset links to
   site paths (`/css/note-export.css`, `/images/<slug>/…`) and making the
   `og:image` / `twitter:image` absolute (social scrapers require it);
2. copies the images to `src/public/images/<slug>/`;
3. refreshes `src/public/css/note-export.css` — the pages' shared
   stylesheet, imported by each exported page;
4. upserts the `src/public/note/list.json` entry by `name`: a new article
   goes to the top, a re-import keeps its `id` / `created_at` / `author`
   and bumps `updated_at`.

Then review the changes, commit and deploy as usual (`npm run deploy`).

The `--site` flag sets the site origin used for the absolute preview-image
URLs; it defaults to `https://inscriptum.js.org`.

### Notes

- Editing an already-published article = export it again from the plugin
  and re-run the import with the same folder; `list.json` metadata survives.
- The slug (folder name) comes from the note title in the plugin
  (transliteration + `[^a-zA-Z0-9-_]` → `-`), so the same note always maps
  to the same article. Renaming the folder renames the article — the old
  files must be removed by hand.
- Removing an article: delete `src/public/note/<slug>.html`,
  `src/public/images/<slug>/` and the `list.json` entry.
