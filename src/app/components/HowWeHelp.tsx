const steps = [
  {
    title: 'Review production risk',
    copy: 'We examine AI/LLM infrastructure, Kubernetes, CI/CD, cloud architecture, security controls, and operational weak points under real production pressure.',
  },
  {
    title: 'Prioritize practical fixes',
    copy: 'We separate urgent production risks from nice-to-have improvements so teams know what to fix first, why it matters, and what tradeoffs are involved.',
  },
  {
    title: 'Support implementation',
    copy: 'We work hands-on with your team to improve reliability, delivery, security readiness, observability, cost control, and platform operations.',
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
            A focused path from unclear platform risk to senior technical action, without layers of account management or generic transformation programs.
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
