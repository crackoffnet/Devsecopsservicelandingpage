import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { InquiryForm } from '../components/InquiryForm';
import { applySeo, seoBase } from '../lib/seo';
import { engagementModels, partnerDifferentiators, technicalCapabilities } from '../lib/partnerContent';

export function StaffingPartnersPage() {
  useEffect(() => {
    applySeo({
      title: 'C2C DevOps & DevSecOps Consulting | GAX Global',
      description: 'Partner with GAX Global for C2C DevOps, DevSecOps, Kubernetes, cloud infrastructure, platform engineering, and SRE consulting for remote U.S. engagements.',
      path: '/staffing-partners/',
      structuredData: {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Staffing Partners', item: `${seoBase.siteUrl}/staffing-partners/` },
        ],
      },
    });
  }, []);

  return (
    <main className="bg-white pt-16">
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold text-cyan-300">GAX Global / Staffing & Consulting Partners</p>
          <h1 className="mb-6 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl">DevOps, DevSecOps & Platform Engineering - C2C Consulting</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-200">GAX Global works with staffing agencies, consulting partners, and businesses seeking experienced cloud infrastructure and platform engineering services. We support remote U.S. engagements, long-term contracts, subcontracting partnerships, and project-based consulting.</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href="#partner-inquiry" data-cta="partner-inquiry" data-location="staffing-partners" className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">Discuss a requirement <ArrowRight aria-hidden="true" className="h-5 w-5" /></a>
            <a href="/capability-statement/" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 underline underline-offset-4"><FileText aria-hidden="true" className="h-5 w-5" />View capability statement</a>
          </div>
          <p className="mt-6 text-sm text-slate-300">Engagement scope, availability, commercial terms, and onboarding requirements are confirmed together.</p>
        </div>
      </section>
      <section className="py-16 sm:py-20" aria-labelledby="technical-capabilities">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="technical-capabilities" className="mb-4 text-3xl font-bold text-gray-900">Technical capabilities</h2>
          <p className="mb-10 max-w-3xl text-lg text-gray-600">Production engineering across the infrastructure lifecycle, from secure delivery and cloud foundations to Kubernetes operations and reliability.</p>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technicalCapabilities.map((area) => <article key={area.title} className="rounded-lg border border-gray-200 bg-gray-50 p-6"><h3 className="mb-4 text-xl font-semibold text-gray-900">{area.title}</h3><ul className="list-disc space-y-2 pl-5 text-gray-700">{area.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
          </div>
          <a href="/services/" className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 underline underline-offset-4">Explore engineering services <ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
        </div>
      </section>
      <section className="border-y border-gray-200 bg-gray-50 py-16" aria-labelledby="engagement-models">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="engagement-models" className="mb-10 text-3xl font-bold text-gray-900">Engagement models</h2>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">{engagementModels.map((model) => <div key={model.title}><h3 className="mb-3 text-xl font-semibold text-gray-900">{model.title}</h3><p className="leading-relaxed text-gray-700">{model.copy}</p></div>)}</div>
        </div>
      </section>
      <section className="py-16" aria-labelledby="partner-why">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="partner-why" className="mb-8 text-3xl font-bold text-gray-900">Why work with GAX Global?</h2>
          <ul className="grid gap-5 md:grid-cols-2">{partnerDifferentiators.map((item) => <li key={item} className="flex items-start gap-3 text-gray-700"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" /><span>{item}</span></li>)}</ul>
        </div>
      </section>
      <section id="partner-inquiry" className="border-t border-gray-200 bg-gray-50 py-16" aria-labelledby="partner-inquiry-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div><h2 id="partner-inquiry-heading" className="mb-4 text-3xl font-bold text-gray-900">Staffing partner inquiry</h2><p className="mb-5 leading-relaxed text-gray-700">Tell us about the client requirement, technical scope, and contract expectations. We will review the fit and discuss next steps directly.</p><a href="mailto:info@gax-global.com" className="break-words font-semibold text-blue-700 underline">info@gax-global.com</a><p className="mt-5 text-sm text-gray-600">For a direct infrastructure project, use this form or <a href="/contact/" className="text-blue-700 underline">contact GAX Global</a>.</p></div>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
