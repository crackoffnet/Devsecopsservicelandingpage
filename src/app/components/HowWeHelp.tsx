const steps = [
  {
    title: 'Review',
    copy: 'We assess infrastructure reliability, security, delivery pipelines, and operational risk.',
  },
  {
    title: 'Identify',
    copy: 'We identify the highest-risk issues affecting scalability, stability, cost, or security.',
  },
  {
    title: 'Improve',
    copy: 'We provide practical next-step recommendations and implementation support.',
  },
];

export function HowWeHelp() {
  return (
    <section id="how-we-help" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
            How We Help
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">How We Help</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            A practical path from vague infrastructure concern to prioritized action.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-cyan-300">
                {index + 1}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
