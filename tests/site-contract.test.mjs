import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), 'utf8');

test('public routes, sitemap, and redirects use trailing slashes', async () => {
  const [sitemap, redirects] = await Promise.all([
    read('public/sitemap.xml'),
    read('public/_redirects/main.tsx'),
  ]);

  for (const path of [
    '/',
    '/services/',
    '/staffing-partners/',
    '/capability-statement/',
    '/contact/',
    '/devsecops-services/',
    '/infrastructure-review/',
    '/insights/',
    '/ai-infrastructure-llmops/',
    '/cicd-automation/',
    '/kubernetes-hardening/',
    '/terraform-iac/',
    '/cloud-security-consulting/',
    '/devsecops-assessment-checklist/',
    '/ai-infrastructure-readiness-checklist/',
    '/cicd-security-checklist/',
    '/kubernetes-hardening-checklist/',
    '/privacy-policy/',
    '/terms-of-service/',
  ]) {
    assert.match(sitemap, new RegExp(`https://gax-global\\.com${path}`));
  }

  assert.doesNotMatch(sitemap, /booking-success/);
  const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.ok(sitemapLocations.every((url) => url.startsWith('https://gax-global.com/')));
  assert.match(redirects, /\/infrastructure-review \/infrastructure-review\/ 308!/);
  assert.match(redirects, /\/services \/services\/ 308!/);
});

test('booking implementation is guarded and only reacts to Cal.com success', async () => {
  const [page, analytics, buildScript, booking] = await Promise.all([
    read('src/app/pages/InfrastructureReviewPage.tsx'),
    read('src/app/lib/analytics.ts'),
    read('scripts/sync-cloudflare-static-files.mjs'),
    read('src/app/config/booking.ts'),
  ]);

  assert.match(page, /id="book-review"/);
  assert.match(page, /src=\{`\$\{CAL_BOOKING_URL\}\?embed=true`\}/);
  assert.match(booking, /https:\/\/cal\.com\/gaxglobal\/infrastructure-review/);
  assert.match(page, /bookingSuccessfulV2/);
  assert.match(page, /sessionStorage\.setItem\(CAL_BOOKING_SUCCESS_STORAGE_KEY, 'true'\)/);
  assert.match(page, /window\.location\.assign\('\/booking-success\/'\)/);
  assert.match(analytics, /sessionStorage\.getItem\(CAL_BOOKING_SUCCESS_STORAGE_KEY\) !== 'true'/);
  assert.match(analytics, /__gaxBookAppointmentConversionFired/);
  assert.match(analytics, /sessionStorage\.removeItem\(CAL_BOOKING_SUCCESS_STORAGE_KEY\)/);
  assert.doesNotMatch(buildScript, /id="gax-cal-embed"/);
});

test('booking-success is noindex and Google Ads configuration remains centralized', async () => {
  const [successPage, booking, index] = await Promise.all([
    read('src/app/pages/BookingSuccessPage.tsx'),
    read('src/app/config/booking.ts'),
    read('index.html'),
  ]);

  assert.match(successPage, /robots: 'noindex, nofollow'/);
  assert.match(booking, /AW-18117557190/);
  assert.match(booking, /sqoFCOW96aQcEMb3j79D/);
  assert.equal((index.match(/googletagmanager\.com\/gtag\/js/g) || []).length, 1);
});
