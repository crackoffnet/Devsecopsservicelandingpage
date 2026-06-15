const DEFAULT_PUBLIC_SITE_URL = 'https://www.gax-global.com';
const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1', '[::1]']);

function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.replace(/\/+$/, '') || '/';
}

export function normalizePublicSiteUrl(url: string) {
  const parsedUrl = new URL(url);
  parsedUrl.port = '';
  parsedUrl.pathname = normalizePathname(parsedUrl.pathname);
  parsedUrl.hash = '';
  parsedUrl.search = '';

  return `${parsedUrl.origin}${parsedUrl.pathname === '/' ? '' : parsedUrl.pathname}`;
}

const configuredPublicSiteUrl = import.meta.env.VITE_PUBLIC_SITE_URL || DEFAULT_PUBLIC_SITE_URL;

export const PUBLIC_SITE_URL = normalizePublicSiteUrl(configuredPublicSiteUrl);
export const PUBLIC_SITE_ORIGIN = new URL(PUBLIC_SITE_URL).origin;
export const PUBLIC_SITE_HOSTNAME = new URL(PUBLIC_SITE_URL).hostname;

type LocationLike = Pick<Location, 'hostname' | 'pathname' | 'port' | 'protocol' | 'search' | 'hash'>;

export function getPortlessCanonicalRedirectUrl(location: LocationLike) {
  if (LOCAL_HOSTNAMES.has(location.hostname)) {
    return null;
  }

  if (location.protocol !== 'https:') {
    return null;
  }

  if (location.hostname !== PUBLIC_SITE_HOSTNAME || location.port !== '8443') {
    return null;
  }

  const pathname = normalizePathname(location.pathname);
  return `${PUBLIC_SITE_ORIGIN}${pathname}${location.search}${location.hash}`;
}
