import { CAL_BOOKING_URL } from '../config/booking';
import { createBookReviewClickHandler } from '../lib/analytics';

export function FinalCta() {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Not sure where your infrastructure risk is?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Book a quick review. We'll help identify the issues most likely to cause outages, cost spikes, or security problems.
          </p>
          <a
            href={CAL_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book Infrastructure Review on Cal.com"
            data-cta="book-infrastructure-review"
            data-location="bottom"
            onClick={createBookReviewClickHandler('bottom')}
            className="inline-flex px-8 py-4 rounded-lg bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors font-semibold"
          >
            Book Infrastructure Review
          </a>
        </div>
      </div>
    </section>
  );
}
