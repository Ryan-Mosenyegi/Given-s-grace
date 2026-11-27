# Given’s Grace website: path to launch

## Current status

- **Static site structure: in place.** The repository contains 12 HTML pages: Home, About, Contact, Diagnostics, and eight service pages.
- **Staging deployment: live.** Cloudflare Pages preview: https://givens-grace.pages.dev. The client's production custom domain has not yet been connected.
- **Basic functionality: user-reported checks completed.** The requester reports that the preview opens on desktop and phone and that navigation, scrolling, service pages, and the WhatsApp link work. This is not a formal browser-compatibility, accessibility, security, or performance audit.
- **Enquiry forms: deliberately disabled.** Contact and Diagnostics contain a prepared Web3Forms flow, but no access key/provider setup has been supplied and no submissions are sent or stored. Keep them disabled.
- **Third-party content: present.** The site embeds Google Maps and selected YouTube videos and loads Lucide icons from jsDelivr. Review privacy, reliability, and loading behavior before launch.

The goal is to keep the live site easy to run and limit who can change it. No website can be guaranteed impossible to compromise; account, domain, form, and third-party risks still need controls.

## Follow these phases in order

### 1. Confirm business details and account ownership

- **Business country and service area:** Botswana; Gaborone is the confirmed service area.
- **Transactions:** Enquiries only for launch; no online bookings or payments.
- **Delivery roles and account handoff:** The requester is a hired freelancer setting up the site. The current GitHub repository is on the freelancer’s account as the working/setup repository. The domain, hosting, and other business accounts are intended to be transferred or created under the client’s ownership at handoff. Keep client credentials and legal/operational approvals client-controlled.
- **Public business details currently shown:** “Given's Grace Electronics Fix,” givenbogosi@gmail.com, +267 72 429 682, Batlokwa Center, Tlokweng, Gaborone, Botswana, and opening hours Monday–Saturday 9:00 am–5:00 pm; Sunday closed. The hours were supplied by the requester from the business listing. Confirm these details with the business owner before production launch.
- **Still needs owner confirmation:** legal registered name and registration details, final public trading-name style for legal notices, repair terms, prices, diagnostic fees, and any operational policies.

### 2. Content, legal pages, and asset rights

- The 12 HTML pages have been reviewed for local page links and key project content. The local page targets checked were present. The requester has separately reported basic visual and navigation checks on desktop and phone.
- Gaborone is the confirmed service area, and the current listed services are intended to be presented.
- **Proposed repair terms need client approval:** provide a written estimate and expected timing before work; start only after customer approval; get approval for any scope or price change; disclose any diagnostic fee before assessment; and explain delays. The client must confirm the actual warranty terms and any applicable legal minimum with a Botswana-qualified professional before publication. Do not publish an unverified statutory warranty claim.
- Do not invent a diagnostic fee, uncollected-device deadline/fee, disposal policy, or data-handling procedure. The client must set those operational details before they are published.
- Footer links to Terms and Privacy remain hidden while real policy pages are unavailable. Prepare and approve real policy pages before adding the links.
- Have a local professional review legal wording for the business’s country and customer markets.
- Confirm rights for the Anokha font and all photos/illustrations. The font README says the available Anokha copy is personal-use only; obtain a commercial licence before installing it on the business site. Keep headings on the Arial fallback until then.
- Confirm the business has permission to publish workshop/device photos. Keep console brand names as plain text unless logo use is authorized.
- Decide how to handle Google Maps and YouTube embeds. Check privacy/cookie impact; consider clear links or click-to-load behavior where appropriate.
- Consider self-hosting the Lucide icon library to reduce reliance on a third-party script, if the project’s license and update process permit it.

### 3. Make enquiries arrive reliably (do not activate yet)

- The Contact and Diagnostics forms have a prepared Web3Forms AJAX flow with sending/success/error states and hCaptcha loading, gated behind a disabled-by-default configuration.
- **Current decision: defer form setup.** The forms must remain disabled and the on-page notice must remain visible until the business owner is ready to set up the provider account and approve the privacy/data-handling arrangements.
- Before activation, the business owner/client should control the Web3Forms account and destination inbox, review the provider's current privacy policy and DPA, confirm retention and cross-border data handling, configure hCaptcha and a honeypot, and provide the access key to the freelancer for integration.
- Do not assume a particular retention period, provider plan, or legal compliance status without checking the current provider terms and the business owner's settings.
- Before launch, test successful delivery, invalid submissions, spam handling, reply address, and the privacy notice/consent flow end-to-end.
- Until then, direct visitors to the published phone, WhatsApp, and email contact methods. The forms do not currently send or save submissions.

### 4. Secure ownership and change access

- **During setup:** secure the freelancer’s GitHub account with two-factor authentication, protect `main`, and keep an offline copy of the repository.
- **At handoff:** create or transfer the repository to a client-controlled GitHub account; put domain registration, hosting, and business email under client control; transfer required admin access and recovery material securely.
- Turn on two-factor authentication for all owner-controlled accounts, use a password manager, and store recovery codes offline in two safe places.
- Keep a named client-side backup person who can recover essential accounts.
- Require approval before production deployment and give helpers the least access they need.

### 5. Production domain and deployment

- The current Cloudflare Pages deployment is a staging preview at https://givens-grace.pages.dev. It is not yet the client's production custom domain.
- At handoff, connect the client-owned repository and Cloudflare/hosting account, then connect the business domain under client control.
- Choose one canonical address (`www` or non-`www`) and redirect the other to it.
- Deploy production from the protected `main` branch, with an approval step and a saved version for rollback.
- Configure security headers at the host, including a Content Security Policy that permits only the site’s required assets and embeds. Add HSTS only after HTTPS and redirects have been verified.

### 6. Accessibility, security, privacy, and performance checks

- Check applicable privacy, consumer, business disclosure, cookie, and advertising requirements for the business’s jurisdiction with a local professional.
- Aim for WCAG 2.2 AA: test keyboard access, visible focus, contrast, headings, labels, zoom, reduced motion, alt text, and screen-reader behavior. Add an accessibility statement if appropriate.
- Set and verify appropriate security headers, including `nosniff`, referrer and permissions policies, and a framing restriction.
- Set up domain email authentication (SPF, DKIM, DMARC), remove unused DNS records, and consider CAA records after the domain is connected.
- Run Lighthouse/PageSpeed or equivalent checks after the production domain is connected. No formal performance or Core Web Vitals results have been recorded yet.
- Enable uptime and deployment/DNS-change alerts. Keep the source repository, an offline copy, and regular form-submission exports where appropriate once forms are live.

### 7. Pass the launch gate

Do not announce the production site until these checks pass:

- Test on real phones and desktop browsers. Confirm content stacks instead of overlapping or overflowing, including contact details and the map.
- Complete a keyboard-only walkthrough, an automated accessibility scan, and a screen-reader spot check.
- Only if forms are activated: submit real test enquiries and verify email delivery, spam controls, retention, and privacy notices.
- Check every contact/location link, map, video, image, internal link, and mobile menu.
- Run an HTML/link check, test the custom 404 page, confirm page titles and descriptions, and review performance.
- Scan deployed security headers after each significant hosting change.
- Add a sitemap and local-business structured data if accurate, then maintain the business’s local search listing.
- Confirm client ownership of the production domain, hosting, repository, and business email/accounts at handoff.

### 8. Keep it running with a small routine

The managed host handles file delivery, traffic spikes, and usually certificate renewal. A person still needs to:

- Read and answer the enquiry inbox and keep contact details, hours, and service information current.
- Renew the domain and keep its payment method current.
- Quarterly, check security headers and test restoring from backup.
- Yearly, review the domain, legal pages, accessibility, and any required licenses.
- Maintain a one-page runbook covering editing, deployment, rollback, account ownership, recovery codes, and incident contacts. Include who to contact and what to do if customer data may have been exposed.

## Next action

Keep the forms disabled for now, as requested. The next launch-critical steps are to have the business owner approve the public business details and repair terms, prepare locally reviewed privacy/terms pages, confirm rights to the font and images, and plan the client-owned production domain and account handoff. When the client is ready, configure and test the enquiry forms before enabling them.
