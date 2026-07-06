import {
  CAL_BOOKING_URL,
  GOOGLE_ADS_BOOK_APPOINTMENT_SEND_TO,
  GOOGLE_ADS_CONVERSION_ID,
  INFRASTRUCTURE_REVIEW_CTA_PATH,
} from '../config/booking';

type GtagCommand = 'event' | 'js' | 'config';
export type CtaLocation =
  | 'hero'
  | 'header'
  | 'homepage'
  | 'review'
  | 'service-page'
  | 'services'
  | 'insights'
  | 'infrastructure-review'
  | 'case-studies'
  | 'footer'
  | 'mobile-sticky';
type OutboundLabel = 'linkedin' | 'email' | 'calcom' | 'other';
const CAL_BOOKING_SUCCESS_STORAGE_KEY = 'gax_cal_booking_success';

function debugLog(message: string, data?: Record<string, unknown>) {
  if (!import.meta.env.DEV) return;
  if (data) {
    console.info(`[analytics] ${message}`, data);
    return;
  }
  console.info(`[analytics] ${message}`);
}

declare global {
  interface Window {
    gtag?: (command: GtagCommand, target: string | Date, params?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
    clarity?: {
      (command: string, ...args: unknown[]): void;
      q?: unknown[];
    };
    __gaxGaInitialized?: boolean;
    __gaxGoogleAdsConfigured?: boolean;
    __gaxClarityInitialized?: boolean;
    __gaxScrollDepthThresholds?: Set<number>;
    __gaxEngagementListenersInitialized?: boolean;
    __gaxBookAppointmentConversionFired?: boolean;
    __gaxHtmlCtaClickTrackingActive?: boolean;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  if (!window.gtag) return;

  const eventParams = {
    ...(params || {}),
    ...(import.meta.env.DEV ? { debug_mode: true } : {}),
  };

  window.gtag('event', name, eventParams);
  debugLog('GA4 event fired', { name, ...eventParams });
}

export function trackCTA(location: CtaLocation) {
  if (typeof window !== 'undefined' && window.__gaxHtmlCtaClickTrackingActive) {
    return;
  }

  trackEvent('book_free_infrastructure_review_click', {
    event_category: 'lead',
    event_label: 'Book Free Infrastructure Review',
    location,
  });
}

export function createBookReviewClickHandler(location: CtaLocation) {
  return () => trackCTA(location);
}

export function trackScrollDepth(percent: 25 | 50 | 75 | 100) {
  trackEvent('scroll_depth', { percent });
}

export function trackOutboundLink(label: OutboundLabel, url: string) {
  trackEvent('outbound_link_click', { label, url });
}

export function initGoogleAnalytics() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId && !GOOGLE_ADS_CONVERSION_ID) {
    debugLog('Google tag skipped: missing VITE_GA_MEASUREMENT_ID and GOOGLE_ADS_CONVERSION_ID');
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtagQueue(...args: [GtagCommand, string | Date, Record<string, unknown>?]) {
      window.dataLayer!.push(args);
    };

  const existingGoogleTag = document.querySelector('script[src*="https://www.googletagmanager.com/gtag/js"]');
  if (!existingGoogleTag) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId || GOOGLE_ADS_CONVERSION_ID}`;
    document.head.appendChild(script);
  }

  if (GOOGLE_ADS_CONVERSION_ID && !window.__gaxGoogleAdsConfigured) {
    window.__gaxGoogleAdsConfigured = true;
    window.gtag('config', GOOGLE_ADS_CONVERSION_ID);
    debugLog('google ads configured', { conversionId: GOOGLE_ADS_CONVERSION_ID });
  }

  if (measurementId && !window.__gaxGaInitialized) {
    window.__gaxGaInitialized = true;
    if (import.meta.env.DEV) {
      window.gtag('config', measurementId, {
        debug_mode: true,
      });
    } else {
      window.gtag('config', measurementId);
    }
    debugLog('analytics initialized', { measurementId });
  }
}

export function trackBookAppointmentConversion() {
  if (typeof window === 'undefined') return;
  if (!window.gtag) return;
  if (!GOOGLE_ADS_BOOK_APPOINTMENT_SEND_TO) return;
  if (window.__gaxBookAppointmentConversionFired) return;
  if (window.sessionStorage.getItem(CAL_BOOKING_SUCCESS_STORAGE_KEY) !== 'true') return;

  window.__gaxBookAppointmentConversionFired = true;
  trackEvent('conversion', {
    send_to: GOOGLE_ADS_BOOK_APPOINTMENT_SEND_TO,
    value: 1.0,
    currency: 'USD',
  });
  window.sessionStorage.removeItem(CAL_BOOKING_SUCCESS_STORAGE_KEY);
}

export function initMicrosoftClarity() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (window.__gaxClarityInitialized) return;

  const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID;
  if (!clarityProjectId) {
    // TODO: Add VITE_CLARITY_PROJECT_ID after creating the Microsoft Clarity project.
    debugLog('Clarity skipped: missing VITE_CLARITY_PROJECT_ID');
    return;
  }

  window.__gaxClarityInitialized = true;
  window.clarity =
    window.clarity ||
    function clarityQueue(command: string, ...args: unknown[]) {
      (window.clarity!.q = window.clarity!.q || []).push([command, ...args]);
    };

  if (document.querySelector(`script[src="https://www.clarity.ms/tag/${clarityProjectId}"]`)) {
    debugLog('clarity initialized', { clarityProjectId });
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${clarityProjectId}`;
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode?.insertBefore(script, firstScript);
  debugLog('clarity initialized', { clarityProjectId });
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
        trackScrollDepth(percent as 25 | 50 | 75 | 100);
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
      trackEvent('calcom_open', { source: 'embedded-infrastructure-review' });
      trackOutboundLink('calcom', href);
      return;
    }

    if (href.includes(INFRASTRUCTURE_REVIEW_CTA_PATH) || href.endsWith('/infrastructure-review')) {
      return;
    }

    if (href.startsWith('mailto:')) {
      trackOutboundLink('email', href);
      return;
    }

    const url = new URL(href);
    const isExternal = url.hostname !== window.location.hostname;
    if (!isExternal) return;

    if (url.hostname.includes('linkedin.com')) {
      trackOutboundLink('linkedin', href);
      return;
    }

    trackOutboundLink('other', href);
  };

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
    window.__gaxEngagementListenersInitialized = false;
  };
}
