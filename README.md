# Pawan Kumar · DevOps Portfolio

Responsive, dependency-free single-page site built with semantic HTML, CSS, and JavaScript modules.

The hero profile uses the portrait supplied by Pawan as `pawan-kumar.jpg`; a subtle orbit animation surrounds the photo and respects reduced-motion preferences.

## Preview locally

From this directory, run `python -m http.server 4173` and visit http://localhost:4173. A static HTTP server is recommended because the page loads JavaScript modules and checks for the resume PDF.

## Resume PDF

The current resume is included at the site root as `Pawan-Kumar-Resume.pdf`. The portfolio download links use this filename directly, so the downloaded file keeps the requested name. To publish a newer resume, replace this PDF with the updated file in the repository root.

## Live site

The portfolio is published with GitHub Pages at [pawandevops.in](https://pawandevops.in). GitHub Pages deploys the site from the `main` branch root, so no build command is required. To publish future updates, commit and push the changed site files to `main`; GitHub Pages will deploy them automatically. The custom domain and HTTPS are configured in the repository's **Settings → Pages**.
