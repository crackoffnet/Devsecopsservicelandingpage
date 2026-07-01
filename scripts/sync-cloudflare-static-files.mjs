import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defaultImagePath, routeSeoData } from './route-seo-data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const canonicalOrigin = 'https://gax-global.com';

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
  return routePath === '/' ? '/' : routePath.replace(/\/+$/, '');
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
