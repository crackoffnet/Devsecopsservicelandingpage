const trustMetrics = [
  'Complex production systems',
  'Platform reliability',
  'Multi-cluster Kubernetes',
  'Microservice operations',
  'Security & compliance',
  'Multi-cloud delivery',
];

export function TrustStrip() {
  return (
    <section aria-label="GAX Global trust metrics" className="-mt-px bg-gradient-to-b from-slate-950 via-slate-900 to-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-3xl">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Built for production environments where small gaps become expensive.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {trustMetrics.map((metric) => (
            <div key={metric} className="rounded-xl border border-cyan-300/20 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-slate-950/10 backdrop-blur">
              {metric}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
