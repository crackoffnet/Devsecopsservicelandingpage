import { CheckCircle2 } from 'lucide-react';

const whyItems = [
  'Senior hands-on infrastructure support without large-firm overhead',
  'Focused AI infrastructure, DevSecOps, and platform reliability expertise',
  'Practical production risk review before outages, audits, or scaling events',
  'Implementation support from the same senior technical partner who reviews the risk',
  'Clear prioritization instead of generic roadmaps or layered delivery models',
  'Boutique engagement model for teams that need depth, speed, and accountability',
];

export function WhyGaxGlobal() {
  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
              Why GAX Global
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Why GAX Global</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Senior hands-on infrastructure support without the overhead of a large consulting firm.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              GAX Global is built for teams that need direct technical help with AI/LLM infrastructure, Kubernetes, CI/CD, cloud architecture, DevSecOps, and platform reliability, not a broad bench of generalized consultants.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whyItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
