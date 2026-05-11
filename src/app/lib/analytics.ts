import { CAL_BOOKING_URL, GOOGLE_ADS_BOOK_APPOINTMENT_CONVERSION_ID } from '../config/booking';

type GtagCommand = 'event' | 'js' | 'config';
export type CtaLocation = 'hero' | 'middle' | 'bottom' | 'case-study' | 'navbar';

declare global {
  interface Window {
    gtag?: (command: GtagCommand, target: string | Date, params?: Record<string, unknown>) => void;
    clarity?: {
      (command: string, ...args: unknown[]): void;
      q?: unknown[];
    };
    __gaxClarityInitialized?: boolean;
    __gaxScrollDepthThresholds?: Set<number>;
    __gaxEngagementListenersInitialized?: boolean;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', name, params);
}

export function trackBookReviewClick(location: CtaLocation) {
  trackEvent('book_review_click', { location });
  trackEvent('conversion', {
    send_to: GOOGLE_ADS_BOOK_APPOINTMENT_CONVERSION_ID,
  });
}

export function createBookReviewClickHandler(location: CtaLocation) {
  return () => trackBookReviewClick(location);
}

export function initMicrosoftClarity() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (window.__gaxClarityInitialized) return;

  const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID;
  if (!clarityProjectId) {
    // TODO: Add VITE_CLARITY_PROJECT_ID after creating the Microsoft Clarity project.
    return;
  }

  window.__gaxClarityInitialized = true;
  window.clarity =
    window.clarity ||
    function clarityQueue(command: string, ...args: unknown[]) {
      (window.clarity!.q = window.clarity!.q || []).push([command, ...args]);
    };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${clarityProjectId}`;
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode?.insertBefore(script, firstScript);
}

export function initScrollDepthTracking() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return () => {};

  const thresholds = window.__gaxScrollDepthThresholds || new Set<number>();
  window.__gaxScrollDepthThresholds = thresholds;

  const handleScroll = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = scrollableHeight <= 0 ? 100 : Math.round((window.scrollY / scrollableHeight) * 100);

    [25, 50, 75, 100].forEach((percent) => {
      if (scrolled >= percent && !thresholds.has(percent)) {
        thresholds.add(percent);
        trackEvent('scroll_depth', { percent });
      }
    });
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
  };
}

function getAnchorFromClick(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  return target.closest('a[href]') as HTMLAnchorElement | null;
}

export function initEngagementTracking() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return () => {};
  if (window.__gaxEngagementListenersInitialized) return () => {};

  window.__gaxEngagementListenersInitialized = true;

  const handleClick = (event: MouseEvent) => {
    const anchor = getAnchorFromClick(event.target);
    if (!anchor) return;

    const href = anchor.href;
    if (!href) return;

    if (href.startsWith(CAL_BOOKING_URL)) {
      trackEvent('booking_link_open', { url: href });
      return;
    }

    if (href.startsWith('mailto:')) {
      trackEvent('email_click', { email: href.replace('mailto:', '') });
      return;
    }

    const url = new URL(href);
    const isExternal = url.hostname !== window.location.hostname;
    if (!isExternal) return;

    if (url.hostname.includes('linkedin.com')) {
      trackEvent('social_link_click', {
        platform: 'linkedin',
        url: href,
      });
      return;
    }

    trackEvent('outbound_link_click', {
      domain: url.hostname,
      url: href,
    });
  };

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
    window.__gaxEngagementListenersInitialized = false;
  };
}
