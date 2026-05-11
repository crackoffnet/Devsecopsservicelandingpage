const trustMetrics = [
  'Complex production infrastructure environments',
  'Production reliability and operational resilience focus',
  'Multi-cluster Kubernetes platform experience',
  'Large-scale microservice platform operations',
  'Security and compliance-focused platform delivery',
  'Multi-cloud infrastructure and platform operations',
];

export function TrustStrip() {
  return (
    <section aria-label="GAX Global trust metrics" className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {trustMetrics.map((metric) => (
            <div key={metric} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm font-semibold text-gray-800 shadow-sm">
              {metric}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
