# Trainer J Fitness site audit

Audit date: July 16, 2026
Live site reviewed: [trainerjfitness.com](https://trainerjfitness.com/)
Scope: content, conversion, responsive UX, accessibility, performance, SEO, privacy, security posture, and implementation quality.

## Executive assessment

The live site has a credible trainer, useful client proof, and a direct booking path. Its implementation makes that trust harder to feel. The page is a single 603 KB HTML document with five JPEGs embedded as base64, no real mobile navigation, incomplete search metadata, several contrast failures, and an inquiry form without a privacy notice. The condensed display font is forceful but difficult to read. Much of the copy also sounds like a template instead of Jacob.

The local Astro rebuild addresses the highest-value issues without adding a heavy client framework. It keeps the verified services, credentials, client stories, booking link, Instagram link, and contact path, while improving hierarchy, legibility, mobile navigation, semantics, asset delivery, privacy disclosure, and brand consistency.

No production deployment has been made.

## Confirmed live-site facts

- One HTML response is 603,423 bytes.
- Five JPEGs are embedded directly in that HTML. Decoded image weight is 428,533 bytes.
- The only external page dependency is Google Fonts CSS and font files. There is no application JavaScript bundle, analytics script, ad script, or cookie banner.
- Mobile layouts below 900 pixels hide all navigation links and provide no replacement menu.
- `/robots.txt`, `/sitemap.xml`, and `/favicon.ico` return 404.
- The page has no meta description, canonical URL, Open Graph metadata, structured data, main landmark, skip link, visible keyboard focus treatment, or reduced-motion handling.
- Contact fields do not have explicit `for` and `id` relationships. The service select does not have an accessible name.
- Calendly and Instagram destinations resolve. The current Calendly location is 16782 Hale Avenue, Suite A, Irvine, California 92606.
- TLS is valid and supports TLS 1.2 and 1.3. HSTS is present. Other common defensive response headers were absent during the audit.
- No public Chrome User Experience Report field data was found, so real-user Core Web Vitals cannot be claimed.

## Measured baseline

Lighthouse mobile, local audit against the live page:

| Category | Score |
| --- | ---: |
| Performance | 81 |
| Accessibility | 84 |
| Best Practices | 96 |
| SEO | 82 |

Mobile First Contentful Paint and Largest Contentful Paint were both about 3.7 seconds. Total Blocking Time was 0 milliseconds and Cumulative Layout Shift was 0.014. Google Fonts delayed rendering by about 781 milliseconds in that run. A separate desktop run scored 99 for performance with FCP and LCP around 0.82 seconds. These are lab results, not real-user data. See [how Lighthouse scoring works](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) and [the Web Vitals definitions](https://web.dev/articles/vitals).

Final local Astro build, Lighthouse mobile simulation:

| Category | Score |
| --- | ---: |
| Performance | 98 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

The final local run measured FCP at 1.4 seconds, LCP at 2.4 seconds, Total Blocking Time at 0 milliseconds, and CLS at 0.004. The cutout hero was delivered as a 25 KB responsive WebP candidate. These are local lab results and must be repeated on the release host.

## Priority findings

### P0: release and claim verification

The site uses medical-adjacent client stories and before-and-after images. Before publishing the rebuild, confirm written permission for every photo, quote, name, age, credential, profession, and health-related detail. Confirm that all edited excerpts preserve the speaker's meaning. Keep the results disclaimer. Do not describe exercise coaching as treatment, rehabilitation, or a guaranteed outcome.

### P1: mobile navigation failure

On the live page, the navigation disappears below 900 pixels and there is no menu control. This blocks service discovery and forces mobile visitors to scroll the entire page. The rebuild includes a keyboard-accessible menu with 48-pixel touch targets and clear destinations.

### P1: readability and hierarchy

The live condensed display face creates visual impact at the expense of comprehension. Tiny uppercase labels, wide letter spacing, and dense centered copy compound the problem. The rebuild uses Archivo for heavy, readable headings and Manrope for body and interface text. Decorative eyebrow labels were removed. Section spacing, line length, and centered headings were normalized.

### P1: unclear conversion sequence

The live page asks visitors to process several claims before it clearly helps them choose a service. The rebuild uses this order:

1. State the emotional problem and practical promise.
2. Show one credible client result.
3. Explain the three coaching formats.
4. Show more proof and Jacob's approach.
5. Explain the process and answer common objections.
6. Offer Calendly and a short contact form.

The primary call to action remains a free 30-minute consultation. No fake urgency, invented scarcity, or unverified pricing was added.

### P1: accessibility

The live audit found missing landmarks, form-label associations, focus styles, mobile navigation, and reduced-motion support. It also found low-contrast combinations, including white on `#4a90c4` at about 3.45:1, service numerals near 1.22:1, footer links near 1.75:1, and small note text near 2.63:1. The rebuild uses semantic landmarks, a skip link, explicit labels, visible focus, native disclosure controls for FAQs, higher-contrast colors, reduced-motion handling, and meaningful image alternatives.

Before release, run keyboard-only navigation, VoiceOver on Safari, NVDA or JAWS if available, 200-percent zoom, and an automated accessibility scan against the built pages.

### P1: privacy and sensitive inquiry risk

The form collects contact details and may invite health context. The live page had no privacy notice. The rebuild adds a plain-language privacy page, a consent link beneath the form, a warning not to submit medical records or insurance information, and a honeypot field. The owner still needs to confirm the actual hosting provider, retention period, authorized recipients, deletion process, and any California-specific notice obligations before treating the notice as final legal text.

### P2: performance and asset delivery

Base64 image embedding prevents independent caching and makes the initial HTML unnecessarily large. External Google Fonts add a render-blocking request. The rebuild stores images as real files, lets Astro generate responsive WebP variants, lazy-loads below-the-fold imagery, and self-hosts the two variable fonts. After the real hero photo is supplied, export the desktop and mobile crops separately and verify LCP on a production-like host.

### P2: search and sharing

The live site lacks basic crawl and share assets. The rebuild includes a title and description, canonical URL, Open Graph and X metadata, a 1200 by 630 social image, ProfessionalService JSON-LD, sitemap generation, `robots.txt`, favicons, Apple touch icon, and a web app manifest. Business name, service area, exact address, credentials, and social profile should be rechecked immediately before release.

### P2: security headers

The site is static and no exploitable P0 issue was observed. Still, the live response lacked several common browser defenses. The local Netlify header file adds content-type protection, a strict referrer policy, clickjacking protection, a restrictive permissions policy, HSTS, and a content security policy suited to the current static page. Recheck the final response headers after deployment because hosting configuration can override or ignore repository files.

### P2: measurement

No analytics were added. That avoids inventing a vendor, account, consent model, or tracking requirement. If Jacob wants measurement later, define only the decisions that matter first: consultation clicks, successful inquiry submissions, and qualified bookings. Add one privacy-reviewed implementation, not multiple loaders.

## Local rebuild coverage

| Concern | Local response |
| --- | --- |
| Framework | Astro static output with minimal client JavaScript |
| Fonts | Self-hosted Archivo and Manrope variable fonts |
| Brand | Supplied mark cleaned to transparency and used for header, favicons, Apple icon, manifest icons, and social preview |
| Hero | Higher-resolution supplied cutout on a responsive layered background, with a future coaching-photo path documented |
| Navigation | Desktop links and an accessible mobile menu |
| Copy | No eyebrow labels, star rows, em dashes, fake urgency, or generic slogan stacking |
| Proof | Verified source stories kept with an outcomes disclaimer |
| Forms | Labeled fields, autocomplete, honeypot, privacy link, and thank-you route |
| SEO | Canonical, metadata, JSON-LD, sitemap, and robots file |
| Error handling | Custom 404 and form-success pages |

## Release gates

1. Jacob approves all public copy and confirms current credentials, experience, email, social account, service formats, location, and response-time statement.
2. Every identifiable client and photographer has a signed release covering the exact images and quote details used.
3. The real horizontal and vertical hero photos are supplied and cropped according to `HERO_PHOTO_BRIEF.md`.
4. The final privacy language is checked against the actual host, form processing, retention, and deletion practices.
5. `npm run build` passes, then the built site is checked at 390, 768, 1024, and 1440 pixels.
6. Keyboard, screen reader, 200-percent zoom, contrast, form submission, Calendly, email, Instagram, robots, sitemap, favicon, and 404 paths are smoke-tested on the release host.
7. Lighthouse and response-header checks are repeated on the deployed URL. Production is not considered complete until those checks pass.
