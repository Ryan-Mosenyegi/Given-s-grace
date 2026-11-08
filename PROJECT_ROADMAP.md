# Given’s Grace website: path to launch

## Current status

- **Visual design: complete.** The repair pages, responsive layout, media, map, hover states, and business branding are in place.
- **The site is static.** It does not need a server, database, CMS, or admin login to display pages.
- **Enquiry form: not live yet.** It currently validates fields in the browser but does not send submissions.
- **Third-party media and scripts are present.** The site embeds Google Maps and YouTube videos and loads Lucide icons from a CDN. Review their privacy, reliability, and loading behavior before launch.

The goal is to keep the live site easy to run and limit who can change it. No website can be guaranteed impossible to compromise; account, domain, form, and third-party risks still need controls.

## Follow these phases in order

### 1. Settle the decisions that affect setup

Before choosing providers, decide:

- **Business country:** Botswana. The customer service area still needs confirming.
- **Transactions:** Enquiries only for launch; no online bookings or payments.
- **Site updates:** The owner will update the site after launch.
- **Public business details:** A public directory lists “GIVEN's Electronics FIX” at Batlokwa Center, Tlokweng, Gaborone, and gives 72 429 682. The site currently uses “Given's Grace Electronics Fix,” `givenbogosi@gmail.com`, and the owner-provided social links. Confirm the legal registered name and preferred public trading name before publishing legal pages. Public search did not reliably confirm business hours, registration details, or a business-owned domain. Choose a domain and confirm the business email/domain ownership before hosting setup.

These answers determine the hosting, privacy wording, form settings, and legal pages.

### 2. Finish the public content and remove temporary material

- **Audit completed:** reviewed all 11 HTML pages for placeholder copy, dead `#` links, and missing local page/asset targets. Removed dead footer policy links, corrected stale project notes, and added a clear notice that the enquiry form does not send or save entries. No missing local page targets were found.
- **Still needs owner confirmation:** current contact details and service area; which repairs/devices are accepted; any service, turnaround, or pricing claims; and terms for quotes, warranties, uncollected devices, and data loss.
- Footer links to terms and privacy have been removed while they point nowhere; add real policy pages and link them before launch.
- Confirm contact details, service descriptions, any prices or diagnostic fees, and repair terms such as quotes, warranty, uncollected devices, and data-loss handling.
- Write a privacy notice and terms that match how the business actually operates. Have a local professional review legal wording for the business’s country and customer markets.
- Confirm rights for the Anokha font and all photos/illustrations. Keep console brand names as plain text unless logo use is authorized.
- Decide how to handle the existing Google Maps and YouTube embeds. Check their privacy/cookie impact for the places the site serves; provide clear links or click-to-load behavior where appropriate.
- Self-host the Lucide icon library to reduce reliance on a third-party script, if the project’s license and update process permit it.

### 3. Make enquiries arrive reliably

- **Provider chosen by the owner:** Web3Forms Free, pending account setup and privacy review. It supports static HTML forms, advertises 250 submissions/month, and provides hCaptcha integration on the free tier.
- **Retention clarification:** An older FAQ says submissions are not stored, but the current Privacy Policy and DPA say they can be retained for up to three years. The current pricing page says per-form retention can be set as short as seven days; use that minimum before activation. Dashboard history is 30 days on Free, which is separate from the underlying retention period.
- Web3Forms says it operates from India and uses infrastructure in multiple regions; its privacy terms also name spam prevention subprocessors that may receive submitter IP/email. Customer details will additionally be sent to the destination inbox, where the owner controls retention. Review the DPA and Botswana cross-border requirements before going live.
- Free tier domain restriction is not included; enable hCaptcha and a honeypot, and collect only the fields needed. The public access key is an email-delivery identifier, not a secret; spam controls are still needed.
- No provider is connected yet. The owner must create and control the account/access key, verify the destination inbox, set seven-day retention, and enable hCaptcha. Keep the form's warning in place until the account and privacy wording are ready.
- **Code preparation completed:** Web3Forms AJAX submission, sending/success/error states, and hCaptcha loading are wired behind a disabled-by-default switch. The form controls stay disabled and no data is sent until the access key is present and `data-web3forms-ready` is explicitly enabled after the privacy notice is approved.
- Configure the form to send submissions to the business email and show a clear success or failure message.
- Enable spam protection and rate limits. Collect only necessary details, set a retention period, and review the provider’s data-processing terms.
- Once the form provider and privacy notice are ready, add a privacy link beside the consent control.
- Test successful delivery, invalid submissions, spam handling, and the reply address before launch.

### 4. Secure ownership and change access

- Use business-owned accounts for the domain registrar, hosting, source repository, and business email.
- Turn on two-factor authentication everywhere, use a password manager, and store recovery codes offline in two safe places.
- Keep a named backup person who can recover essential accounts.
- Keep the repository private if that fits the business’s needs, protect `main`, and require approval before production deployment. Give helpers the least access they need.

### 5. Choose hosting and set up deployment

- Choose a managed static host/CDN that provides HTTPS, custom security headers, deployment previews, and simple rollback.
- Connect the business domain, choose one canonical address (`www` or non-`www`), and redirect the other to it.
- Deploy production from the protected `main` branch, with an approval step and a saved version for rollback.
- Configure security headers at the host, including a Content Security Policy that permits only the site’s required assets and embeds. Add HSTS only after HTTPS and redirects have been verified.

### 6. Complete privacy, accessibility, and security checks

- Check applicable privacy, consumer, business disclosure, cookie, and advertising requirements for the business’s jurisdiction with a local professional.
- Aim for WCAG 2.2 AA: test keyboard access, visible focus, contrast, headings, labels, zoom, reduced motion, alt text, and screen-reader behavior. Add an accessibility statement.
- Set and verify the appropriate security headers, including `nosniff`, referrer and permissions policies, and a framing restriction.
- Set up domain email authentication (SPF, DKIM, DMARC), remove unused DNS records, and consider CAA records.
- Enable uptime and deployment/DNS-change alerts. Keep the source repository, an offline copy, and regular form-submission exports where appropriate.

### 7. Pass the launch gate

Do not announce the site until these checks pass:

- Test on real phones and desktop browsers. Confirm content stacks instead of overlapping or overflowing, including the contact details and map.
- Complete a keyboard-only walkthrough, an automated accessibility scan, and a screen-reader spot check.
- Submit real test enquiries and verify email delivery and spam controls.
- Check every contact/location link, map, video, image, internal link, and mobile menu.
- Run an HTML/link check, test the custom 404 page, confirm page titles and descriptions, and review performance.
- Scan the deployed security headers after each significant hosting change.
- Add a sitemap and local-business structured data if they are accurate, then maintain the business’s local search listing.

### 8. Keep it running with a small routine

The managed host handles file delivery, traffic spikes, and usually certificate renewal. A person still needs to:

- Read and answer the enquiry inbox and keep contact details, hours, and service information current.
- Renew the domain and keep its payment method current.
- Quarterly, check security headers and test restoring from backup.
- Yearly, review the domain, legal pages, and accessibility; renew any required licenses.
- Maintain a one-page runbook covering editing, deployment, rollback, account ownership, recovery codes, and incident contacts. Include who to contact and what to do if customer data may have been exposed.

## Next action

The owner should confirm the customer service area, registered business name, opening hours, registration details to disclose, repair terms, and business-owned domain. For Phase 3, create the Web3Forms account using the business-controlled inbox, review and accept its current DPA, set seven-day retention, enable hCaptcha, and provide the access key. Only then connect and test the form.
