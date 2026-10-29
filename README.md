# Amir Arani — Personal Portfolio

A responsive, dependency-free personal portfolio built with HTML, CSS, and vanilla JavaScript and designed for GitHub Pages.

## Features

- Responsive layout for desktop, tablet, and mobile
- Dark/light mode (system preference + saved choice)
- Projects with working category filters
- Accessible navigation, keyboard support, reduced-motion support
- Education, experience, technical skills, and contact information
- SEO metadata, social preview artwork, custom favicon
- No framework, build process, npm packages, tracking, or cookies

## Preview locally

Open `index.html` in your browser, or serve the folder locally:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish on GitHub Pages

1. Sign in to your `amirdev1883` GitHub account.
2. Create a **public** repository named **`amirdev1883.github.io`**. (The repository must match your username.)
3. Upload the *contents* of this folder to the repository root. Do **not** nest them under an additional `amir-arani-portfolio` directory.
4. Commit the files to the `main` branch.
5. Go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, select **`main`** and **`/(root)`**, and save.
6. Your website will be available at **https://amirdev1883.github.io/** once GitHub Pages finishes deploying.

To push with Git instead of uploading through the web UI:

```sh
git init
git branch -M main
git add .
git commit -m "Launch personal portfolio"
git remote add origin https://github.com/amirdev1883/amirdev1883.github.io.git
git push -u origin main
```

**Note:** If you created the GitHub repository with a README already in it, either upload the files through GitHub's web UI or clone the repository locally before copying the website files; don't force-push over existing history.

## Personalize before sharing widely

- Check your role descriptions, dates, education status, and contact details in `index.html`.
- Add your actual LinkedIn URL if you want it to appear publicly (not included, because it wasn't confirmed).
- If you want a resume download link, add a PDF to `assets/resume.pdf`, then add a link to that file in `index.html` (no broken download button is included by default).
- Replace the generic illustration and favicon if desired.
- Update GitHub links as your projects evolve. The demo app is hosted on a free tier and may sleep or become unavailable.

## Project links

- Django task manager: https://github.com/amirdev1883/Django-Internship-Assignment-
- Inventory management: https://github.com/amirdev1883/b2b-inventory-management
- Django social media: https://github.com/amirdev1883/djangosocialmedia
- LPIC-1 practice materials: https://github.com/amirdev1883/LPIC1-Mock-Test

## Files

- `index.html`: website content and SEO
- `style.css`: layout, themes, visual design, mobile responsiveness
- `script.js`: theme switcher, mobile menu, project filters, scroll indicator, copy email
- `assets/`: favicon and social preview image

This website is independent of the inspiration site and does not reuse its copy or code.
# amirdev1883.github.io
