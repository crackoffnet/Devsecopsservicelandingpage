import { CAL_BOOKING_URL } from '../config/booking';

type ChecklistSection = {
  title: string;
  items: string[];
};

type SupportChecklistPageProps = {
  title: string;
  intro: string;
  whoFor: string[];
  sections: ChecklistSection[];
  relatedServices: Array<{ href: string; label: string }>;
};

export function SupportChecklistPage({
  title,
  intro,
  whoFor,
  sections,
  relatedServices,
}: SupportChecklistPageProps) {
  return (
    <main className="pt-24 pb-16 bg-white">
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600">{intro}</p>
        </header>

        <section className="mb-10" aria-labelledby="who-for">
          <h2 id="who-for" className="text-2xl font-semibold text-gray-900 mb-3">Who this checklist is for</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {whoFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10" aria-labelledby="checklist">
          <h2 id="checklist" className="text-2xl font-semibold text-gray-900 mb-4">Checklist</h2>
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10" aria-labelledby="next-step">
          <h2 id="next-step" className="text-2xl font-semibold text-gray-900 mb-3">Next step</h2>
          <p className="text-gray-700 mb-5">
            If you want help applying this checklist to your environment, we can review your current state and map a practical implementation plan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a 30-minute consultation on Cal.com"
              data-cta="book-consultation-checklist-page"
              className="text-center px-6 py-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
            >
              Book a 30-minute consultation
            </a>
            <a
              href="/#project-request-form"
              aria-label="Submit a project request"
              data-cta="submit-project-request-checklist-page"
              className="text-center px-6 py-4 rounded-lg border border-blue-300 text-blue-700 hover:bg-blue-50 transition-colors font-medium"
            >
              Submit a project request
            </a>
          </div>
        </section>

        <section aria-labelledby="related-services">
          <h2 id="related-services" className="text-2xl font-semibold text-gray-900 mb-3">Related services</h2>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
