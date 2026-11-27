# Product

<!-- impeccable:product-schema 1 -->

## Platform

Web — static HTML, CSS, and JavaScript. The site is deployed as a Cloudflare Pages staging preview at https://givens-grace.pages.dev. The client's production custom domain has not yet been connected.

## Users

Anyone with a broken electronic device. The visitor knows something is wrong with a device they own and wants it fixed. They may not know the cause or the technical terms.

## Product Purpose

Given's Grace Electronics Fix is an electronics repair workshop in Tlokweng, Botswana. The website helps visitors find the right service, describe the problem, and get in touch. Success is a visitor who understands what is likely wrong, trusts the workshop, and sends a repair enquiry or contacts the workshop directly.

## Positioning

Owner-originated positioning notes (do not turn these into specific promises without confirmed details):

- The workshop explains the fault and the proposed work before any repair goes ahead.
- Fast turnaround.
- Clear pricing up front.
- Specialist in consoles and controllers.

Treat turnaround and pricing as positioning notes, not specific service guarantees. Do not publish exact prices or turnaround times unless the business confirms them.

## Operating Context

- Country: Botswana.
- Confirmed service area: Gaborone.
- Public trading name used on the site: Given's Grace Electronics Fix. A public directory also lists “GIVEN's Electronics FIX”; the legal registered name and preferred legal trading-name style still need owner confirmation before legal notices are published.
- Address shown on the site: Batlokwa Center, Tlokweng, Gaborone, Botswana.
- Contact shown on the site: +267 72 429 682 and givenbogosi@gmail.com.
- Published opening hours: Monday–Saturday, 9:00 am–5:00 pm; Sunday closed. These hours were supplied by the requester from the business listing and added to the Contact page.
- Launch model: enquiries only; no online booking or payment.
- Current setup: the freelancer is preparing the site in a GitHub repository on the freelancer's account. The Cloudflare Pages staging preview is https://givens-grace.pages.dev. The client is expected to own the production domain and business accounts at handoff.
- Production custom domain: not yet supplied or connected.
- Legal registration details and final repair terms remain unconfirmed.

## Capabilities and Constraints

The site contains 12 HTML pages: the homepage, About, Contact, Diagnostics, and eight service pages. The service pages are console repairs, TV repairs, software updates, general repairs, controller repairs, phone repairs, overheating, and device cleaning.

Repair options depend on the device model and the fault found during assessment.

The Contact and Diagnostics pages contain forms with a prepared Web3Forms submission flow in `assets/site.js`. Both forms are deliberately disabled by default: their access-key configuration is not complete, the form controls are disabled, and submissions are not currently sent or stored. The diagnostics form is not connected to a diagnostic service or backend; it is an enquiry form only. Do not describe it as an automated diagnostic tool.

The forms must remain disabled until the business owner controls the Web3Forms account and destination inbox, configures the provider and spam protection, and approves the privacy notice and data-handling arrangements. The forms should then be tested end-to-end before launch.

Undecided, not to be invented: exact prices and pricing model, specific turnaround promises, diagnostic fees, uncollected-device deadline or fee, disposal process, data-handling procedures, final repair terms, legal registered name and registration details, and which devices and brands are actually accepted.

## Brand Commitments

- Website brand: Given's Grace Electronics Fix. Confirm the legal registered name and final trading-name style before publishing legal notices.
- Phrases from the Figma design: "Good devices deserve a second chance." and "Thoughtful electronics repairs, with people at the heart of every fix."
- Tone in the Figma copy: plain explanation of the fault and the options, "without the technical overwhelm".

## Evidence on Hand

- The Figma file "given-grace": https://www.figma.com/design/46fTwVCX4Kyk8QEvIcwA2E/given-grace
- The static site in this repository contains 12 HTML pages: one homepage, About, Contact, Diagnostics, and eight service pages.
- The site contains workshop and device photos; confirm that the business has permission to publish each image. No customer testimonials, customer names, awards, or years in business have been supplied.
- The Contact page includes the business phone, email, address, opening hours, and map link. The service area is Gaborone, as confirmed by the requester.
- The deployed staging preview is https://givens-grace.pages.dev. The requester reported that the preview opened on their phone and that the initial mobile navigation, service-page, scrolling, and WhatsApp checks worked. This is a user-reported check, not a formal cross-device or accessibility test.

## Product Principles

1. Understand the fault first, then explain the proposed work before the repair goes ahead.
2. Speak plainly. Visitors should not need technical knowledge to describe a problem or follow the answer.
3. Promise only what the workshop has confirmed: prices and turnaround times appear only once the owner supplies them.
4. Make the next step obvious: describe the problem, or bring the device in.
5. Lead with consoles and controllers where it is true, without excluding anyone with a broken electronic.
