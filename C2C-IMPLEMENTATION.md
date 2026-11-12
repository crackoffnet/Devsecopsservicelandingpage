# C2C / B2B Website Update

Implemented November 12, 2026. No push, deployment, publishing, DNS change, or environment-file edit was performed.

## Existing Site Audit

- React 18 and TypeScript, built with Vite 6 and Tailwind 4. Routing uses `window.location.pathname`; internal navigation uses ordinary anchors.
- Existing pages cover services, infrastructure reviews, insights, technical service pages, checklists, legal pages, and booking confirmation.
- The build runs `scripts/sync-cloudflare-static-files.mjs` after Vite. It generates route HTML with metadata and canonical URLs, the sitemap, Cloudflare redirects, and security headers. Content itself is rendered by React in the browser.
- Brand styling uses white and gray content sections, dark infrastructure sections, and blue/cyan actions. Existing components and styles were reused.
- GA4, Google Ads conversions, Microsoft Clarity, CTA attributes, and the Cal.com booking-success guard remain intact. No LinkedIn Insight Tag was found; the LinkedIn company link remains.
- An existing EmailJS contact component was not exposed through a route. Its email-template field names are reused by the new shared inquiry form.
- The original primary navigation did not expose C2C inquiries or a contact page. The mobile menu lacked an accessible name, expanded state, and Escape handling.
- Existing light-background uses of the infrastructure-review CTA had pale body text. These now pass an explicit darker text class.
- No lint configuration or standard type-check command existed. Three existing Node site-contract tests were available. Node/npm were absent from PATH, but a bundled Node runtime and Corepack were available. Dependencies and temporary verification tools were installed inside this repository only.

## Delivered Pages and Behavior

- `/`: updated cloud infrastructure / DevSecOps / platform engineering headline; engineering-services, partner, and contact actions; existing tracked free-review CTA; a recruiter/consulting-partner section.
- `/staffing-partners/`: C2C positioning, five technical capability groups, four engagement models, factual differentiators, inquiry form, and capability-statement link.
- `/contact/`: a direct-client inquiry route using the same validation and delivery integration, with Direct Consulting selected initially.
- `/capability-statement/`: a print-friendly statement with overview, technical specializations, engagement models, verified email, and website. Print / Save PDF uses the browser's print dialog. Print CSS hides site navigation and fits one Letter page.
- `/services/`: contextual C2C partnership link while retaining the infrastructure-review conversion flow.
- Header navigation now includes Home, Services, Staffing Partners, About (the homepage section), and Contact. Footer links retain insights and reviews and add a recruiter/consulting-partner section.
- New routes have unique runtime and generated-HTML titles/descriptions, canonicals, Open Graph metadata, sitemap entries, and slash redirects. `llms.txt` includes the new business pages.

## Inquiry Delivery and Configuration

The form collects full name, business email, company, engagement type, specialization, work arrangement, duration, and requirement details. It validates required fields, lengths, email syntax, and accepted option values. Invalid submissions focus the first field and show associated errors. Loading, success, provider failure, and unconfigured states are announced accessibly. Details remain after failures.

Delivery reuses `@emailjs/browser` and the existing `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` variables. No private credentials were added. The recipient is `info@gax-global.com`.

Configure the existing EmailJS template before enabling online delivery:

1. Keep the recipient fixed to `info@gax-global.com` in the provider dashboard. Set Reply-To to `{{from_email}}` or `{{reply_to}}`.
2. Include `{{message}}` in the email body. It contains every requirement field, including work arrangement and contract duration, so existing templates can receive the full inquiry without adding individual template fields.
3. Existing aliases (`from_name`, `from_email`, `company`, `project_type`, `cloud_stack`, `timeline`, `budget`, `to_email`) are retained. New explicit variables are `engagement_type`, `specialization`, `work_arrangement`, and `contract_duration`.
4. Apply the provider's allowed-origin restrictions for the production domain. Verify template handling of untrusted text and delivery using an owner-approved test after configuration.

Spam controls include a honeypot, a minimum completion time, duplicate-submit protection, SDK headless-browser blocking, and a 60-second SDK throttle. The inquiry form is masked for Clarity, and analytics events omit entered contact details.

This is a static site with no application server or existing CAPTCHA widget. Validation and the local spam checks run in the browser and can be bypassed by direct requests; EmailJS handles actual delivery and provider-side restrictions. No application-owned server validation or CAPTCHA verification is claimed. Stronger provider-verified CAPTCHA would need a corresponding form widget and account configuration.

If EmailJS is missing or fails, the form says the inquiry has not been sent and offers an encoded draft-email link. Opening a draft is never reported as a successful submission. The entered details are retained. No real inquiry was sent during development; delivery responses were intercepted in browser tests.

## Validation

- Production build: passed (`npm run build` through the available Corepack/npm runtime).
- Existing site contracts plus new inquiry unit tests: 7 passed.
- Strict TypeScript check of the application entry graph and Vite config: passed using temporary TypeScript 5.8 tooling and React/Vite types under `.tools/`.
- Browser checks: 24 routes render one H1 and the expected canonical URL; rendered internal routes and same-page anchors resolve.
- Responsive checks: homepage, services, partner, contact, and capability pages at 320, 390, 768, 1024, and 1440 pixels; no horizontal overflow.
- Inquiry checks: required fields, first-error focus, draft-email fallback, honeypot rejection, provider failure with retained input, and mocked success with reset after confirmation.
- Accessibility: automated WCAG A/AA scans plus mobile navigation Escape/focus checks. These are basic automated checks, not a full accessibility certification.
- Capability statement: PDF output verified as one Letter page; print layout and desktop/mobile screenshots inspected.
- No configured lint command exists. The initial temporary type-check setup had missing type references, and one new test had the wrong expected field count; both were corrected. A Vite watcher error caused by a locked browser cache was resolved by excluding `.tools/` and `test-results/` from development watches.
- Existing dependency installation reports a Recharts 2 deprecation. That unused dependency was not upgraded as part of this task.

## Local Review

With Node 22.18+ (or Node 24) and npm on PATH:

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 5173
npm run test:site-contract
npm run test:inquiry
npm run build
```

Open `http://127.0.0.1:5173/`, `/staffing-partners/`, `/contact/`, and `/capability-statement/`. The capability page's print action can save a PDF. The build creates `dist/staffing-partners/index.html`, `dist/contact/index.html`, `dist/capability-statement/index.html`, and public discovery files. Temporary browser screenshots, a sample PDF, and verification results are in `.tools/artifacts/` and are ignored by Git.

## Deployment Instructions (Not Executed)

Use the existing Cloudflare Pages project and deployment process. Retain the current environment variables, build command `npm run build`, and output directory `dist`. The post-build script remains responsible for `_headers`, `_redirects`, route metadata, and the generated sitemap. Review the diff and configure EmailJS before a separately authorized release. A push may trigger the existing automatic deployment, so no push was made.

After an authorized release, verify the new page URLs, slash redirects, canonical/OG metadata, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, the real email recipient/template, and the existing booking conversion flow. No DNS change is needed for these source changes.

## Internal Business TODOs (Not Published on the Site)

- Confirm contracting legal entity, vendor-onboarding details, W-9 process, insurance, and any certifications before making related claims. None are advertised here.
- Confirm engagement availability, duration preferences, pricing, and any hybrid/onsite constraints directly with each prospective partner.
- Verify named tools before expanding the capability list. GitLab CI, Jenkins, Azure DevOps, named managed Kubernetes distributions, Helm, Argo CD, Prometheus, and Grafana were not added as verified expertise because the existing repository did not substantiate them.
- Configure the existing EmailJS integration and verify delivery. Consider a verified CAPTCHA integration if abuse warrants it.

## File Inventory

Created:

- `.gitignore`
- `C2C-IMPLEMENTATION.md`
- `src/app/components/InquiryForm.tsx`
- `src/app/components/PartnerCallout.tsx`
- `src/app/lib/inquiry.ts`
- `src/app/lib/partnerContent.ts`
- `src/app/pages/StaffingPartnersPage.tsx`
- `src/app/pages/ContactPage.tsx`
- `src/app/pages/CapabilityStatementPage.tsx`
- `tests/inquiry.test.mjs`

Modified:

- `index.html`
- `package.json` (inquiry test command only; no application dependencies added)
- `scripts/route-seo-data.mjs`
- `public/_redirects/main.tsx`
- `public/redirects.txt`
- `public/sitemap.xml`
- `public/llms.txt`
- `src/app/App.tsx`
- `src/app/components/Header.tsx`
- `src/app/components/Footer.tsx`
- `src/app/components/Hero.tsx`
- `src/app/components/WhyGaxGlobal.tsx`
- `src/app/components/InfrastructureReviewCta.tsx`
- `src/app/components/HomepageReviewIntro.tsx`
- `src/app/pages/ServicesPage.tsx`
- `src/styles/index.css`
- `tests/site-contract.test.mjs`
- `vite.config.ts`

`robots.txt` already allowed public crawling and referenced the correct sitemap. No change was needed. Dependencies, caches, temporary checker configuration, browser scripts, and test artifacts remain under ignored repository paths.
