import { Printer, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { technicalCapabilities } from '../lib/partnerContent';
import { applySeo } from '../lib/seo';

export function CapabilityStatementPage() {
  useEffect(() => {
    applySeo({ title: 'GAX Global Capability Statement | Cloud, DevSecOps & Platform Engineering', description: 'GAX Global capability statement covering technical specializations, C2C and project engagement models, and business contact information.', path: '/capability-statement/' });
  }, []);
  return (
    <main className="bg-gray-50 px-4 pb-16 pt-24 capability-page">
      <div className="no-print mx-auto mb-6 flex max-w-4xl flex-wrap items-center justify-between gap-4"><a href="/staffing-partners/" className="inline-flex items-center gap-2 font-semibold text-blue-700"><ArrowLeft aria-hidden="true" className="h-4 w-4" />Staffing partners</a><button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"><Printer aria-hidden="true" className="h-5 w-5" />Print / Save PDF</button></div>
      <article className="capability-statement mx-auto max-w-4xl border border-gray-200 bg-white p-6 sm:p-10">
        <header className="mb-7 border-b-2 border-blue-600 pb-6"><p className="mb-2 text-sm font-semibold text-blue-700">GAX Global</p><h1 className="mb-3 text-3xl font-bold text-gray-900">Capability Statement</h1><p className="text-lg font-medium text-gray-800">Cloud Infrastructure, DevSecOps & Platform Engineering</p></header>
        <section className="mb-7"><h2 className="mb-2 text-xl font-semibold text-gray-900">Company overview</h2><p className="text-gray-700">GAX Global is a focused technical consultancy serving SaaS and AI teams and their staffing and consulting partners. We help build, secure, automate, and operate production infrastructure across AWS, Azure, GCP, and Kubernetes, with direct technical communication and hands-on implementation support.</p></section>
        <section className="mb-7"><h2 className="mb-4 text-xl font-semibold text-gray-900">Technical specializations</h2><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{technicalCapabilities.map((area) => <div key={area.title}><h3 className="mb-1 font-semibold text-gray-900">{area.title}</h3><p className="text-sm leading-relaxed text-gray-700">{area.items.join('; ')}.</p></div>)}<div><h3 className="mb-1 font-semibold text-gray-900">AI infrastructure reliability</h3><p className="text-sm leading-relaxed text-gray-700">Model integrations, gateways, request routing, production observability, and operational risk review.</p></div></div></section>
        <section className="mb-7"><h2 className="mb-2 text-xl font-semibold text-gray-900">Engagement models</h2><p className="text-gray-700">Corp-to-Corp (C2C) engineering contracts; long-term technical consulting; subcontracting and staffing partnerships; fixed-scope infrastructure projects.</p><p className="mt-2 text-sm text-gray-600">Remote U.S. engagements. Scope, availability, contract terms, and onboarding requirements are agreed before work begins.</p></section>
        <section className="border-t border-gray-200 pt-5"><h2 className="mb-2 text-xl font-semibold text-gray-900">Contact</h2><div className="flex flex-wrap gap-x-8 gap-y-2 text-sm"><a href="mailto:info@gax-global.com" className="text-blue-700 underline">info@gax-global.com</a><a href="https://gax-global.com/" className="text-blue-700 underline">https://gax-global.com/</a><a href="https://gax-global.com/staffing-partners/" className="text-blue-700 underline">gax-global.com/staffing-partners/</a></div></section>
      </article>
    </main>
  );
}
