import { CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { applySeo, seoBase } from '../lib/seo';

export function BookingSuccessPage() {
  useEffect(() => {
    applySeo({
      title: 'Infrastructure Review Booked | GAX Global',
      description:
        'Your GAX Global infrastructure review booking was received. Prepare to discuss AI infrastructure, Kubernetes, CI/CD, cloud, security, and platform reliability risks.',
      path: '/booking-success',
      imagePath: seoBase.imagePath,
      robots: 'noindex, nofollow',
    });
  }, []);

  return (
    <main className="bg-white pt-24">
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Infrastructure review booked</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
          Thanks for scheduling with GAX Global. Bring the production risks, recent incidents, scaling concerns, audit pressure, or delivery bottlenecks you want to review first.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="/services" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
            Review services
          </a>
          <a href="/insights" className="rounded-lg border border-blue-300 px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50">
            Read insights
          </a>
        </div>
      </section>
    </main>
  );
}
