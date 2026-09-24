# Thirupathi V: portfolio

Plain HTML, CSS and JavaScript. No build step, no dependencies. Works on GitHub Pages as is.

## Deploy on GitHub Pages

1. Create a repo (`<username>.github.io` for a root URL, or any name for `<username>.github.io/<repo>`).
2. Upload the contents of this folder to the repo root (keep `index.html` at the top level).
3. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`.
4. Wait a minute, then open the URL shown on that page.

To preview locally, open `index.html` in a browser (or run `python3 -m http.server`).

## Update content

Everything lives in **`data/site-data.js`**. Edit, commit, push.

| To change | Edit in `site-data.js` |
|---|---|
| Intro text | `intro`, `focus` |
| Numbers at the top | `achievements` |
| Jobs | `experience` (newest first) |
| Projects | `projects` (copy an existing block) |
| Skills | `skills` |
| What you're learning | `learning` |
| Resume, notes, diagrams, docs, certs | `resume`, `documents` |
| Email / LinkedIn / GitHub | `contact.links` |

Adding a document: put the file in `assets/docs/`, then add `{ title, note, url: "assets/docs/your-file.pdf" }` to the right group. An empty `url` shows "Coming soon".

## Before publishing

Replace the placeholders marked in `data/site-data.js`: company names, dates, contact links, resume PDF, and the skills marked "confirm". The name and tab title also appear in `index.html` (`<title>`, `<h1>`, meta tags).

## Look and feel

Colors and fonts are CSS variables at the top of `assets/css/style.css`. Dark mode follows the visitor's system setting.
