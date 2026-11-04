# Given Grace: static website

Open `index.html` in a browser. There is no build step. Every page links to the others with plain relative links.

## Files

- `index.html`: Home
- `console-repairs.html`, `tv-repairs.html`, `software-updates.html`, `general-repairs.html`, `controller-repairs.html`, `phone-repairs.html`, `overheating.html`, `device-cleaning.html`: the eight service pages, all on one layout
- `about.html`, `diagnostics.html`
- `PRODUCT.md`: product context (who the site is for, what is confirmed, what is still undecided)
- `assets/styles.css`: all styling; colours, fonts and spacing are the variables at the top of the file
- `assets/site.js`: icons, the hamburger menu and the enquiry form check
- `assets/fonts/`: put the Anokha font file here (see the README.txt in that folder)

## Fonts

- Body text, buttons, small headings and the navigation use Arial.
- Large headings (h1 and h2) use Anokha Regular. It is not bundled: it is not a Google Font and its licence is "free for personal use", so a business site needs a commercial licence from the designer (Adopik). Until the file is in `assets/fonts/`, headings fall back to Arial.
- Anokha has no curly apostrophe, so headings use a straight one.

## Responsive behaviour

- Under 1100px: card grids drop to two columns and the Services dropdown centres under its link.
- Under 900px: the navigation becomes a hamburger menu. Services opens as an accordion inside it. Escape, a tap outside, or choosing a link closes it.
- Under 640px: everything is a single column.

## What came straight from the Figma design, and what did not

Taken from the design: the page structure, the navigation with the Services hover dropdown, the Console repairs page text, the eight service names and descriptions, the footer text and the shared layout.

Written by me because I could not read the Figma file when I built this (the Figma tool limit was reached): the copy for the seven other service pages, and the Home, About us and Diagnostics pages. Their section structure follows what I read earlier; their wording is a draft using phrases from the rest of the site. Colours, spacing and the footer background are my reading of the design, not exact values. The navigation bar is light grey (#ececec) at your request.

Marked placeholders you still need to fill: phone / WhatsApp number, email address, workshop address, promotion details, vision statement, and every "Photo placeholder" box.

## Things to know

- Icons come from Lucide (the same icon names the Figma file uses) and load from the internet. Offline, the icons will not show.
- The diagnostics form checks its fields but does not send anything. Connect it to a form service or a backend in `assets/site.js`.
- Terms, Privacy and the social links point to `#`.
