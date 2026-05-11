import { CheckCircle2 } from 'lucide-react';

const whyItems = [
  'Experience supporting complex production infrastructure environments',
  'Production reliability and operational resilience focus',
  'Kubernetes platform operations across complex environments',
  'Large-scale microservice platform operations',
  'Security and compliance-focused platform delivery',
  'Multi-cloud infrastructure and platform operations',
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
              GAX Global supports engineering teams operating production infrastructure where reliability, security, and operational stability directly affect the business.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We work with companies running AI/LLM systems, Kubernetes platforms, cloud infrastructure, and CI/CD pipelines under real customer and scaling pressure.
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
