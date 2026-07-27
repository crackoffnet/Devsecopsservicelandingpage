import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defaultImagePath, routeSeoData } from './route-seo-data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const canonicalOrigin = 'https://gax-global.com';
const calBookingSuccessStorageKey = 'gax_cal_booking_success';
const defaultGoogleAdsBookAppointmentLabel = 'sqoFCOW96aQcEMb3j79D';
const googleAdsConversionId =
  process.env.GOOGLE_ADS_CONVERSION_ID ||
  process.env.VITE_GOOGLE_ADS_CONVERSION_ID ||
  'AW-18117557190';
const googleAdsBookAppointmentLabel =
  process.env.GOOGLE_ADS_BOOK_APPOINTMENT_LABEL ||
  process.env.VITE_GOOGLE_ADS_BOOK_APPOINTMENT_LABEL ||
  defaultGoogleAdsBookAppointmentLabel;
const googleAdsBookAppointmentSendTo = googleAdsBookAppointmentLabel
  ? `${googleAdsConversionId}/${googleAdsBookAppointmentLabel}`
  : '';

const staticFiles = [
  {
    source: path.join(projectRoot, 'public', '_redirects', 'main.tsx'),
    destination: path.join(distDir, '_redirects'),
  },
  {
    source: path.join(projectRoot, 'public', '_headers', 'main.tsx'),
    destination: path.join(distDir, '_headers'),
  },
];

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function normalizeRoutePath(routePath) {
  return routePath === '/' ? '/' : `${routePath.replace(/\/+$/, '')}/`;
}

function buildCanonicalUrl(routePath) {
  return routePath === '/' ? `${canonicalOrigin}/` : `${canonicalOrigin}${routePath}`;
}

function upsertMetaTag(html, matcher, tag) {
  if (matcher.test(html)) {
    return html.replace(matcher, tag);
  }

  return html.replace('</head>', `    ${tag}\n  </head>`);
}

function upsertBodyScript(html, scriptId, scriptContent) {
  const scriptTag = `    <script id="${scriptId}">\n${scriptContent}\n    </script>`;
  const matcher = new RegExp(`<script id="${scriptId}">[\\s\\S]*?<\\/script>`);
  if (matcher.test(html)) {
    return html.replace(matcher, scriptTag.trimStart());
  }

  return html.replace('</body>', `${scriptTag}\n  </body>`);
}

function upsertBodyFragment(html, marker, fragment) {
  if (html.includes(marker)) {
    return html;
  }

  return html.replace('</body>', `${fragment}\n  </body>`);
}

function applyRouteSeo(template, route) {
  const normalizedPath = normalizeRoutePath(route.path);
  const canonicalUrl = buildCanonicalUrl(normalizedPath);
  const imageUrl = `${canonicalOrigin}${defaultImagePath}`;
  const robots = route.robots || 'index,follow';
  const ogTitle = route.ogTitle || route.title;
  const ogDescription = route.ogDescription || route.description;
  const ogType = route.type || 'website';

  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
  html = upsertMetaTag(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
  );
  html = upsertMetaTag(
    html,
    /<meta name="robots" content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
  );
  html = upsertMetaTag(
    html,
    /<meta property="og:type" content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${escapeHtml(ogType)}" />`,
  );
  html = upsertMetaTag(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(ogTitle)}" />`,
  );
  html = upsertMetaTag(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(ogDescription)}" />`,
  );
  html = upsertMetaTag(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
  );
  html = upsertMetaTag(
    html,
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
  );
  html = upsertMetaTag(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(ogTitle)}" />`,
  );
  html = upsertMetaTag(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(ogDescription)}" />`,
  );
  html = upsertMetaTag(
    html,
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
  );

  if (/<link rel="canonical" href="[^"]*"\s*\/?>/.test(html)) {
    html = html.replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    );
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />\n  </head>`);
  }

  const clickTrackingScript = [
    '      window.__gaxHtmlCtaClickTrackingActive = true;',
    '      window.__gaxLeadClickEventName = "book_free_infrastructure_review_click";',
    '      document.addEventListener("click", function (event) {',
    '        var target = event.target instanceof Element ? event.target.closest(\'[data-cta="book-free-infrastructure-review"]\') : null;',
    '        if (!target || typeof window.gtag !== "function") return;',
    '        window.gtag("event", "book_free_infrastructure_review_click", {',
    '          event_category: "lead",',
    '          event_label: "Book Free Infrastructure Review",',
    '          location: target.getAttribute("data-location") || "unknown"',
    '        });',
    '      }, { passive: true });',
  ].join('\n');
  html = upsertBodyScript(html, 'gax-cta-click-tracking', clickTrackingScript);

  if (normalizedPath === '/infrastructure-review/') {
    const bookingSectionTemplate = [
      '    <template id="gax-book-review-template">',
      '      <section id="book-review" data-cal-success-event="bookingSuccessfulV2">',
      '        <iframe src="https://cal.com/gaxglobal/infrastructure-review?embed=true" title="Cal.com Infrastructure Review Booking" loading="lazy"></iframe>',
      '        <a href="https://cal.com/gaxglobal/infrastructure-review" target="_blank" rel="noopener noreferrer">Having trouble with the calendar? Open the booking page in a new tab.</a>',
      '      </section>',
      '    </template>',
    ].join('\n');
    html = upsertBodyFragment(html, 'gax-book-review-template', bookingSectionTemplate);
  }

  if (normalizedPath === '/booking-success/' && googleAdsBookAppointmentSendTo) {
    const bookingConversionScript = [
      `      if (window.sessionStorage.getItem("${calBookingSuccessStorageKey}") === "true" && !window.__gaxBookAppointmentConversionFired && typeof window.gtag === "function") {`,
      '        window.__gaxBookAppointmentConversionFired = true;',
      '        window.gtag("event", "conversion", {',
      `          send_to: "${escapeHtml(googleAdsBookAppointmentSendTo)}",`,
      '          value: 1.0,',
      '          currency: "USD"',
      '        });',
      `        window.sessionStorage.removeItem("${calBookingSuccessStorageKey}");`,
      '      }',
    ].join('\n');
    html = upsertBodyScript(html, 'gax-booking-success-conversion', bookingConversionScript);
  }

  return html;
}

await mkdir(distDir, { recursive: true });

for (const { source, destination } of staticFiles) {
  await rm(destination, { recursive: true, force: true });
  await mkdir(path.dirname(destination), { recursive: true });

  const content = await readFile(source, 'utf8');
  await writeFile(destination, content, 'utf8');
}

const baseHtmlPath = path.join(distDir, 'index.html');
const baseHtml = await readFile(baseHtmlPath, 'utf8');

for (const route of routeSeoData) {
  const html = applyRouteSeo(baseHtml, route);
  const normalizedPath = normalizeRoutePath(route.path);
  const destination =
    normalizedPath === '/'
      ? baseHtmlPath
      : path.join(distDir, normalizedPath.slice(1), 'index.html');

  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html, 'utf8');
}

const sitemapUrls = routeSeoData
  .filter((route) => route.robots !== 'noindex, nofollow')
  .map((route) => `  <url>\n    <loc>${buildCanonicalUrl(normalizeRoutePath(route.path))}</loc>\n  </url>`)
  .join('\n');
await writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
  'utf8',
);
