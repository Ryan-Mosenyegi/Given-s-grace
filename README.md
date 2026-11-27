# Given Grace: static website

Open `index.html` in a browser. There is no build step. Every page links to the others with plain relative links.

## Files

- `index.html`: Home
- `console-repairs.html`, `tv-repairs.html`, `software-updates.html`, `general-repairs.html`, `controller-repairs.html`, `phone-repairs.html`, `overheating.html`, `device-cleaning.html`: the eight service pages
- `about.html`, `diagnostics.html`, `contact.html`
- `PRODUCT.md`: product context, confirmed details, and open decisions
- `PROJECT_ROADMAP.md`: remaining work and launch checklist
- `assets/styles.css`: all styling; colours, fonts and spacing are the variables at the top of the file
- `assets/site.js`: icons, the hamburger menu, media states, and the gated Web3Forms submission flow
- `assets/fonts/`: font notes and any licensed local font files

## Fonts

- Body text, buttons, small headings and navigation use Arial.
- Large headings (h1 and h2) are designed to use Anokha Regular. The font file is not bundled. The font notes in `assets/fonts/README.txt` say the available copy is for personal use only; a commercial licence is needed before using it on a business website. Until a properly licensed font file is installed, headings fall back to Arial.
- Anokha has no curly apostrophe, so headings use a straight one.

## Responsive behaviour

- Under 1100px: card grids drop to two columns and the Services dropdown centres under its link.
- Under 900px: the navigation becomes a hamburger menu. Services opens as an accordion inside it. Escape, a tap outside, or choosing a link closes it.
- Under 640px: everything is a single column.

## Current project status

- The repository contains 12 HTML pages: Home, About, Contact, Diagnostics, and eight service pages.
- The business service area is Gaborone, Botswana.
- Published opening hours are Monday–Saturday, 9:00 am–5:00 pm; Sunday closed.
- The staging preview is deployed at https://givens-grace.pages.dev through Cloudflare Pages. The client production domain has not yet been connected.
- The requester is a freelancer using a repository on the freelancer's GitHub account for setup. The domain, hosting, and other business accounts are intended to be client-owned at handoff.
- The requester reported that the staging site opened on desktop and phone and that basic navigation, scrolling, service-page, and WhatsApp checks worked. These are user-reported checks, not a formal browser matrix, accessibility audit, or performance test.
- The Contact and Diagnostics forms contain a prepared Web3Forms flow but remain disabled. Do not enable them until the business owner sets up and controls the provider account, configures the destination inbox and spam protection, and approves the privacy/data-handling arrangements.
- Footer links to Terms and Privacy remain hidden until real policy pages are ready. Legal and operational wording needs client approval.

## Things to know

- Icons come from Lucide and load from jsDelivr. Offline, the icons will not show.
- Google Maps and selected YouTube videos are embedded third-party content; review privacy and loading behavior before launch.
- The diagnostics page is an enquiry form, not an automated diagnostic service. The form does not currently send or save submissions.
- Keep the explicit disabled-form notice in place until form delivery and the privacy notice are ready.
