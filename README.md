# Amir Arani — Personal Portfolio

A minimal, responsive portfolio built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Files

- `index.html` — semantic content and professional profile
- `style.css` — minimal, responsive visual design
- `script.js` — accessible mobile navigation and automatic footer year
- `assets/amir-portrait.webp` and `.jpg` — optimized hero portrait
- `assets/favicon.ico`, `favicon.png`, `apple-touch-icon.png` — photo-based site icons
- `assets/og-card.png` — social sharing preview including portrait
- `.nojekyll`, `robots.txt`, `sitemap.xml` — GitHub Pages and search engine files

## Preview on Ubuntu

Run in the project directory:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser. Stop with `Ctrl+C`.

## Publish to GitHub Pages

On Ubuntu, download `amir-arani-portfolio-with-photo.zip` to `~/Downloads/` and run:

```bash
cd ~/Downloads
unzip -o amir-arani-portfolio-with-photo.zip -d .
cd ~/Downloads/amir-arani-portfolio
```

The archive already contains an `amir-arani-portfolio` folder. The `unzip -o` command replaces the existing website files inside that folder while preserving the `.git` folder and any unrelated local files. Then run:

```bash
git add .
git commit -m "Add professional portrait to hero and favicon"
git push origin main
```

If your Git remote uses HTTPS and asks for a username/password, configure GitHub SSH authentication and set the remote to:

```bash
git remote set-url origin git@github.com:amirdev1883/amirdev1883.github.io.git
```

The page URL is https://amirdev1883.github.io/ once GitHub Pages is enabled (Settings → Pages → Deploy from branch `main`, folder `/`).

## Editing content

Update descriptions and education status in `index.html`. The TMU entry is currently labeled **incoming** for Winter 2027; update it after enrollment. All links use plain anchors; there are no frameworks, packages, or build dependencies.

If the favicon does not refresh, hard-reload the browser with Ctrl+Shift+R or open the site in a private window.
