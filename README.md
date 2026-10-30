# Amir Arani — Portfolio (Start Bootstrap Personal)

This project is an adaptation of the **Start Bootstrap – Personal** website theme.

- Original theme: https://github.com/StartBootstrap/startbootstrap-personal
- Live preview: https://startbootstrap.github.io/startbootstrap-personal/
- License: MIT (see `LICENSE`)
- Language: English

## What was customized

- Four original-theme page types: Home, Resume, Projects and Contact.
- Amir Arani's professional portrait and custom photo favicon.
- GitHub projects, education, experience, credentials, contact info, and LinkedIn.
- Local branding and responsive photo crop in `css/brand.css`.
- Removed SB Forms placeholder form: no paid form/API token needed. Contact uses `mailto:`.

## CSS dependency

The original **unmodified** theme CSS is linked directly from the creator's GitHub Pages demo:

`https://startbootstrap.github.io/startbootstrap-personal/css/styles.css`

This avoids copying or recreating upstream theme styling, as requested. Your small customization layer is at `css/brand.css`. **The site therefore needs an internet connection to load the upstream theme CSS**, Bootstrap icons and Google Fonts. To make it fully self-hosted, you can download the original `dist/css/styles.css` from the linked upstream repository into `css/styles.css` and replace the external link in each HTML file.

## Local preview

Run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Replace your existing GitHub Pages portfolio (without deleting .git)

Download and unzip this archive to `~/Downloads/amir-arani-startbootstrap`, then:

```bash
cd ~/Downloads
mkdir -p amir-arani-startbootstrap
unzip -o amir-arani-startbootstrap.zip -d amir-arani-startbootstrap
cp -a ~/Downloads/amir-arani-startbootstrap/. ~/Downloads/amir-arani-portfolio/
cd ~/Downloads/amir-arani-portfolio
git status
git add -A
git commit -m "Switch portfolio to Start Bootstrap Personal theme"
git push origin main
```

If your shell has SSH login errors, GitHub must have your public SSH key authorized, and origin should use the SSH remote, not HTTPS.

## Notes

- No invented downloadable resume file is included. Add an actual PDF once you have one.
- TMU is listed as planned/incoming, not graduated.
- Some technologies are described as learning interests, not professional certifications.
