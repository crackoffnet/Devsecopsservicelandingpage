import { CheckCircle2 } from 'lucide-react';

const whyItems = [
  'practical, hands-on engineering approach',
  'security and automation designed together',
  'clear communication and documentation',
  'built for lean teams and fast-moving companies',
];

export function WhyGaxGlobal() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About GAX Global</h2>
          <p className="text-gray-600 mb-6">
            GAX Global works with SaaS startups and small engineering teams to improve infrastructure security, delivery automation, platform reliability, and AI readiness through practical hands-on engineering.
          </p>
          <p className="text-gray-600 mb-6">
            We focus on specialist DevSecOps and AI infrastructure consulting for cloud-native teams that need clear execution, not generic advisory.
          </p>
          <div className="space-y-3">
            {whyItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
