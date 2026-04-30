import { CAL_BOOKING_URL, trackBookAppointmentConversion } from '../config/booking';

export function FinalCta() {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a stronger DevSecOps or AI platform foundation?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Whether you need a cloud review, pipeline improvements, Kubernetes hardening, infrastructure standardization, or AI platform guidance, GAX Global can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a 30-minute consultation on Cal.com"
              data-cta="book-consultation-final-cta"
              onClick={trackBookAppointmentConversion}
              className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-medium"
            >
              Book a 30-minute consultation
            </a>
            <a
              href="/#project-request-form"
              aria-label="Submit a project request"
              data-cta="submit-project-request-final-cta"
              className="px-8 py-4 rounded-lg border border-white/30 hover:bg-white/10 transition-colors font-medium"
            >
              Submit a project request
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
