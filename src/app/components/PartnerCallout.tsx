import { ArrowRight } from 'lucide-react';

export function PartnerCallout() {
  return (
    <section className="border-y border-gray-200 bg-white py-16" aria-labelledby="partner-callout-title">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:px-8">
        <div><p className="mb-3 text-sm font-semibold text-blue-700">For recruiters & consulting partners</p><h2 id="partner-callout-title" className="mb-4 text-3xl font-bold text-gray-900">A technical partner for your next infrastructure engagement</h2><p className="max-w-3xl text-lg leading-relaxed text-gray-600">Bring a defined DevOps, DevSecOps, Kubernetes, cloud, or platform engineering requirement. GAX Global works with staffing agencies and consulting companies through C2C contracts and subcontracting partnerships.</p></div>
        <div className="flex flex-col items-start gap-4 lg:items-end"><a href="/staffing-partners/" data-cta="partner-with-gax" data-location="homepage" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">Partner With GAX Global <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" /></a><a href="/capability-statement/" className="font-semibold text-blue-700 underline underline-offset-4">View capability statement</a></div>
      </div>
    </section>
  );
}
