import { FileText } from 'lucide-react';

const outputs = [
  'architecture review notes',
  'infrastructure risk findings',
  'CI/CD improvement plan',
  'cloud hardening recommendations',
  'AI platform readiness guidance',
  'implementation handoff documentation',
];

export function ProofOutputs() {
  return (
    <section id="proof" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Engagement Outputs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What engagements can include
          </h2>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outputs.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
