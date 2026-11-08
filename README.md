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

## Current content status

The site includes the workshop's contact details, map, service pages, and repair photos. The former Promotions section and unfinished About page copy have been removed. Footer links to Terms and Privacy are hidden until real policy pages are ready, so the site has no dead `#` policy links.

The business operates in Botswana and the owner plans to maintain the site. Launch is enquiry-only; the diagnostics form is not connected and does not send or save submissions. Confirm the customer service area, legal registered name, opening hours, public business-owned domain, and repair terms before launch. The domain is not yet known.

## Things to know

- Icons come from Lucide (the same icon names the Figma file uses) and load from the internet. Offline, the icons will not show.
- The diagnostics form clearly warns that it does not send or save entries. Visitors are directed to phone, WhatsApp, or email until a form provider is connected.
- Terms and Privacy pages still need to be prepared and linked before launch.
