# Michael Dock-Walshe website

## Upload to GitHub Pages

1. Extract the ZIP and upload its contents to your repository root. Keep `index.html`, `images/`, `js/`, and `.nojekyll` together; do not upload only the ZIP or an enclosing folder.
2. In repository Settings > Pages, choose Deploy from a branch, then your publishing branch (usually `main`) and `/ (root)`, and Save.
3. Open the URL GitHub provides once deployment completes.

Official setup guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

No build command or npm installation is required. The files support both a user site and a project site under `/repository-name/`. Page URLs use `.html`; use these URLs for shared links.

## Audit and repairs

- Tested all six pages in Microsoft Edge at root and `/test-repo/` paths: no page exceptions, failed network requests, or HTTP error responses during the final page-load checks.
- Tested homepage-to-project navigation and reload at 390px and 1440px widths. Neither viewport had horizontal overflow. Inspected the mobile projects screenshot.
- Fixed extensionless navigation, repository base paths, runtime font paths, and hydration of a missing badge container.
- Replaced the exporter's global URL rewrite with a smaller mapping that retains URL query strings and fragments and supports fetch Request objects.
- Added English language metadata and `.nojekyll` for static publishing.

## Existing content and limitations

- Contact details are not configured. The contact page explicitly says this; it has no email link or message form. Supply your preferred public email/profile to enable contact.
- The exporter omitted dependencies used by its dormant CMS detail modules and Framer 404 module. These were not reached by the six-page checks. Adding CMS entries or enabling those routes requires a complete new export; they are not ready for use.
- Projects and workshop collections are empty in the export. Their empty-state messages are intentional; there are no published detail entries to validate.
- Some fonts still load from Google Fonts. The site is not fully offline-contained.
- Social preview images use relative URLs. Once the final public URL is known, change `og:image` and `twitter:image` to absolute public image URLs and validate previews.
- GitHub deployment, production response headers, social previews, and external destination availability were not verified. No repository was supplied or modified.
- This is a repaired snapshot. A fresh third-party export will need these fixes reapplied and checked again.

The original downloaded ZIP was left unchanged. Documents and code inside the export were treated as site content, not instructions from the user.
