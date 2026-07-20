export const CAL_BOOKING_URL = 'https://cal.com/gaxglobal/infrastructure-review';
export const INFRASTRUCTURE_REVIEW_PAGE_PATH = '/infrastructure-review';
export const INFRASTRUCTURE_REVIEW_PAGE_URL = '/infrastructure-review/';
export const INFRASTRUCTURE_REVIEW_CTA_PATH = '/infrastructure-review/#book-review';
export const INFRASTRUCTURE_REVIEW_LOCAL_CTA_PATH = '#book-review';

export function getInfrastructureReviewCtaHref() {
  if (typeof window === 'undefined') {
    return INFRASTRUCTURE_REVIEW_CTA_PATH;
  }

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  return pathname === INFRASTRUCTURE_REVIEW_PAGE_PATH
    ? INFRASTRUCTURE_REVIEW_LOCAL_CTA_PATH
    : INFRASTRUCTURE_REVIEW_CTA_PATH;
}

const DEFAULT_GOOGLE_ADS_CONVERSION_ID = 'AW-18117557190';
const DEFAULT_GOOGLE_ADS_BOOK_APPOINTMENT_LABEL = 'sqoFCOW96aQcEMb3j79D';

export const GOOGLE_ADS_CONVERSION_ID =
  import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID || DEFAULT_GOOGLE_ADS_CONVERSION_ID;

export const GOOGLE_ADS_BOOK_APPOINTMENT_LABEL =
  import.meta.env.VITE_GOOGLE_ADS_BOOK_APPOINTMENT_LABEL || DEFAULT_GOOGLE_ADS_BOOK_APPOINTMENT_LABEL;

export const GOOGLE_ADS_BOOK_APPOINTMENT_SEND_TO = GOOGLE_ADS_BOOK_APPOINTMENT_LABEL
  ? `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_BOOK_APPOINTMENT_LABEL}`
  : '';
