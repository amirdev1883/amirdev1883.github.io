# Amir Arani — Personal Portfolio

A minimal, responsive portfolio built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Files

- `index.html` — semantic content and professional profile
- `style.css` — minimal, responsive visual design
- `script.js` — accessible mobile navigation and automatic footer year
- `assets/` — favicon and social sharing card
- `.nojekyll`, `robots.txt`, `sitemap.xml` — GitHub Pages and search engine files

## Preview on Ubuntu

Run in the project directory:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser. Stop with `Ctrl+C`.

## Publish to GitHub Pages

Copy **the contents** of this folder (not the enclosing folder itself) into your existing local `amir-arani-portfolio` Git repository. Then:

```bash
git add .
git commit -m "Redesign portfolio with a clean minimal layout"
git push origin main
```

If your Git remote uses HTTPS and asks for a username/password, configure GitHub SSH authentication and set the remote to:

```bash
git remote set-url origin git@github.com:amirdev1883/amirdev1883.github.io.git
```

The page URL is https://amirdev1883.github.io/ once GitHub Pages is enabled (Settings → Pages → Deploy from branch `main`, folder `/`).

## Editing content

Update descriptions and education status in `index.html`. The TMU entry is currently labeled **incoming** for Winter 2027; update it after enrollment. All links use plain anchors; there are no frameworks, packages, or build dependencies.
