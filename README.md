# Pawan Kumar · DevOps Portfolio

Responsive, dependency-free single-page site built with semantic HTML, CSS, and JavaScript modules.

The hero profile uses the portrait supplied by Pawan as `pawan-kumar.jpg`; a subtle orbit animation surrounds the photo and respects reduced-motion preferences.

## Preview locally

From this directory, run `python -m http.server 4173` and visit http://localhost:4173. A static HTTP server is recommended because the page loads JavaScript modules and checks for the resume PDF.

## Resume PDF

The supplied workspace did not include the resume PDF. Place the original, unmodified file at the site root as `resume.pdf`. The navigation link checks for the file and shows a setup note while it is absent.

## Live site

The portfolio is published with GitHub Pages at [pawandevops.in](https://pawandevops.in). GitHub Pages deploys the site from the `main` branch root, so no build command is required. To publish future updates, commit and push the changed site files to `main`; GitHub Pages will deploy them automatically. The custom domain and HTTPS are configured in the repository's **Settings → Pages**.
