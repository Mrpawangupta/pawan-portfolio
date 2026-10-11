# Pawan Kumar · DevOps Portfolio

Responsive, dependency-free single-page site built with semantic HTML, CSS, and JavaScript modules.

The hero profile uses the portrait supplied by Pawan as `pawan-kumar.jpg`; a subtle orbit animation surrounds the photo and respects reduced-motion preferences.

## Preview locally

From this directory, run `python -m http.server 4173` and visit http://localhost:4173. A static HTTP server is recommended because the page loads JavaScript modules and checks for the resume PDF.

## Resume PDF

The supplied workspace did not include the resume PDF. Place the original, unmodified file at the site root as `resume.pdf`. The navigation link checks for the file and shows a setup note while it is absent.

## Deploy and connect pawankumar.me

Push this folder to a Git repository and import it into Vercel or Netlify as a static site. No build command is required; use the repository root as the publish directory. Add `pawankumar.me` (and optionally `www.pawankumar.me`) in the hosting provider's domain settings, then configure the DNS records that provider displays at your registrar. Wait for DNS verification and HTTPS provisioning. The reference design URL could not be retrieved by the browsing tool during this build.
