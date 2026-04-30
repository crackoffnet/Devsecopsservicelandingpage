export const CAL_BOOKING_URL = 'https://cal.com/gaxglobal/infrastructure-review';
export const GOOGLE_ADS_BOOK_APPOINTMENT_CONVERSION_ID = 'AW-18117557190/sqoFCOW96aQcEMb3j79D';

type GtagCommand = 'event' | 'js' | 'config';

declare global {
  interface Window {
    gtag?: (command: GtagCommand, target: string | Date, params?: Record<string, unknown>) => void;
  }
}

export function trackBookAppointmentConversion() {
  window.gtag?.('event', 'conversion', {
    send_to: GOOGLE_ADS_BOOK_APPOINTMENT_CONVERSION_ID,
  });
}
