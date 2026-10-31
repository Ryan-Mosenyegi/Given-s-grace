# Given Grace: static website

Open `index.html` in a browser. There is no build step. Every page links to the others with plain relative links.

## Files

- `index.html`: Home
- `console-repairs.html`, `tv-repairs.html`, `software-updates.html`, `general-repairs.html`, `controller-repairs.html`, `phone-repairs.html`, `overheating.html`, `device-cleaning.html`: the eight service pages, all on one layout
- `about.html`, `diagnostics.html`
- `assets/styles.css`: all styling; colours and fonts are the variables at the top of the file
- `assets/site.js`: icons and the enquiry form check

## What came straight from the Figma design, and what did not

Taken from the design: the page structure, the navigation with the Services hover dropdown, the Console repairs page text, the eight service names and descriptions, the footer text and the shared layout.

Written by me because I could not read the Figma file when I built this (the Figma tool limit was reached): the copy for the seven other service pages (same text as the "service page copy" file), and the Home, About us and Diagnostics pages. Their section structure follows what I read earlier; their wording is a draft using phrases from the rest of the site. Colours, spacing and the footer background are my reading of the design, not exact values.

Marked placeholders you still need to fill: phone / WhatsApp number, email address, workshop address, promotion details, vision statement, and every "Photo placeholder" box.

## Things to know

- Icons come from Lucide (the same icon names the Figma file uses) and fonts from Google Fonts. Both load from the internet. Offline, the icons will not show and the text falls back to system fonts.
- The diagnostics form checks its fields but does not send anything. Connect it to a form service or a backend in `assets/site.js`.
- Under 960px wide the Services dropdown is hidden; the Services link goes to the services grid on the Home page.
- Terms, Privacy and the social links point to `#`.
