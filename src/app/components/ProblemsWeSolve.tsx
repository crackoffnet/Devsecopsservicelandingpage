import { AlertCircle } from 'lucide-react';

const problems = [
  'pipelines are fragile or too manual',
  'infrastructure is inconsistent across environments',
  'security controls are weak or unclear',
  'Kubernetes feels risky to manage',
  'releases are stressful and error-prone',
  'cloud operations lack visibility and standards',
  'teams are scaling without platform maturity',
  'observability and alerting are not where they should be',
];

export function ProblemsWeSolve() {
  return (
    <section id="problems" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-4">
            <span className="text-sm text-red-700">Problems We Solve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Common DevSecOps Pain in Growing Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((problem) => (
            <div
              key={problem}
              className="bg-white border border-gray-200 rounded-lg px-5 py-4 flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
