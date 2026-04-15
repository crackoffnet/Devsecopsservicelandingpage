type SeoConfig = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  imagePath?: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const SITE_URL = 'https://gax-global.com';
const DEFAULT_IMAGE_PATH = '/og-image.svg';

function upsertMetaByName(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function upsertMetaByProperty(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function upsertCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function upsertStructuredData(data: SeoConfig['structuredData']) {
  const existing = document.getElementById('seo-json-ld');
  if (existing) existing.remove();
  if (!data) return;

  const script = document.createElement('script');
  script.id = 'seo-json-ld';
  script.type = 'application/ld+json';
  script.text = JSON.stringify(Array.isArray(data) ? data : [data]);
  document.head.appendChild(script);
}

export function applySeo(config: SeoConfig) {
  const path = config.path === '/' ? '/' : config.path.replace(/\/+$/, '');
  const pageUrl = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${config.imagePath || DEFAULT_IMAGE_PATH}`;

  document.title = config.title;
  upsertMetaByName('description', config.description);
  upsertMetaByName('robots', config.robots || 'index,follow');

  upsertMetaByProperty('og:type', config.type || 'website');
  upsertMetaByProperty('og:title', config.title);
  upsertMetaByProperty('og:description', config.description);
  upsertMetaByProperty('og:url', pageUrl);
  upsertMetaByProperty('og:image', imageUrl);
  upsertMetaByProperty('og:site_name', 'GAX Global');

  upsertMetaByName('twitter:card', 'summary_large_image');
  upsertMetaByName('twitter:title', config.title);
  upsertMetaByName('twitter:description', config.description);
  upsertMetaByName('twitter:image', imageUrl);

  upsertCanonical(pageUrl);
  upsertStructuredData(config.structuredData);
}

export const seoBase = {
  siteUrl: SITE_URL,
  imagePath: DEFAULT_IMAGE_PATH,
};
