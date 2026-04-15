import { CAL_BOOKING_URL } from '../config/booking';

type ServiceLandingPageProps = {
  title: string;
  intro: string;
  whoFor: string[];
  problemsSolved: string[];
  included: string[];
  outcome: string;
  relatedLinks: Array<{ href: string; label: string }>;
};

export function ServiceLandingPage({
  title,
  intro,
  whoFor,
  problemsSolved,
  included,
  outcome,
  relatedLinks,
}: ServiceLandingPageProps) {
  return (
    <main className="pt-24 pb-16 bg-white">
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600">{intro}</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <a
            href={CAL_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a 30-minute consultation on Cal.com"
            data-cta="book-consultation-service-page"
            className="text-center px-6 py-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
          >
            Book a 30-minute consultation
          </a>
          <a
            href="/#project-request-form"
            aria-label="Submit a project request"
            data-cta="submit-project-request-service-page"
            className="text-center px-6 py-4 rounded-lg border border-blue-300 text-blue-700 hover:bg-blue-50 transition-colors font-medium"
          >
            Submit a project request
          </a>
        </section>

        <section className="mb-10" aria-labelledby="who-for">
          <h2 id="who-for" className="text-2xl font-semibold text-gray-900 mb-3">Who this is for</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {whoFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10" aria-labelledby="problems-solved">
          <h2 id="problems-solved" className="text-2xl font-semibold text-gray-900 mb-3">Problems solved</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {problemsSolved.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10" aria-labelledby="included">
          <h2 id="included" className="text-2xl font-semibold text-gray-900 mb-3">What is included</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10" aria-labelledby="outcome">
          <h2 id="outcome" className="text-2xl font-semibold text-gray-900 mb-3">Outcome and deliverable</h2>
          <p className="text-gray-700">{outcome}</p>
        </section>

        <section aria-labelledby="related-services">
          <h2 id="related-services" className="text-2xl font-semibold text-gray-900 mb-3">Related services</h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href="/" className="inline-block mt-4 text-blue-700 font-medium hover:text-blue-800">
            Back to homepage
          </a>
        </section>
      </article>
    </main>
  );
}
