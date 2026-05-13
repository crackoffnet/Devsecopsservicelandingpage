import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { CAL_BOOKING_URL } from '../config/booking';
import { createBookReviewClickHandler } from '../lib/analytics';
import { applySeo, seoBase } from '../lib/seo';

const serviceAreas = [
  {
    title: 'AI/LLM Infrastructure Reliability',
    problems: 'Unstable model gateways, latency spikes, rate-limit failures, weak fallback paths, and limited visibility into AI request flow.',
    outcomes: 'More reliable AI production paths, clearer operational signals, and practical guardrails for model-backed products.',
  },
  {
    title: 'Kubernetes & Platform Operations',
    problems: 'Cluster drift, fragile workload isolation, RBAC gaps, noisy deployments, and platform practices that do not keep up with growth.',
    outcomes: 'Stronger cluster operations, safer deployments, cleaner access boundaries, and better platform reliability under customer load.',
  },
  {
    title: 'CI/CD, GitOps & Release Reliability',
    problems: 'Manual release steps, weak rollback readiness, unclear environment promotion, and pipelines that slow engineering teams down.',
    outcomes: 'Repeatable delivery, better release confidence, practical quality gates, and GitOps workflows teams can maintain.',
  },
  {
    title: 'DevSecOps & Compliance Readiness',
    problems: 'Security checks bolted on late, unclear audit evidence, secrets handling gaps, and inconsistent policy enforcement.',
    outcomes: 'Security controls embedded into delivery, stronger compliance readiness, and clearer evidence for SOC 2 or ISO 27001 preparation.',
  },
  {
    title: 'Cloud Architecture, Networking & Cost Optimization',
    problems: 'Cost spikes, duplicated traffic paths, unclear service boundaries, brittle DNS, weak private connectivity, and inefficient scaling.',
    outcomes: 'Cleaner architecture decisions, more predictable cost signals, improved network reliability, and less avoidable cloud waste.',
  },
  {
    title: 'Observability & Operational Maturity',
    problems: 'Logs, metrics, traces, and alerts that exist but do not explain incidents quickly enough when production pressure rises.',
    outcomes: 'Better production visibility, sharper alerting, faster diagnosis, and operating practices that help teams improve without ceremony.',
  },
];

export function ServicesPage() {
  useEffect(() => {
    applySeo({
      title: 'AI Infrastructure, DevSecOps & Platform Reliability Services | GAX Global',
      description:
        'Explore GAX Global services for AI/LLM infrastructure reliability, Kubernetes operations, CI/CD, DevSecOps, cloud architecture, observability, and platform reliability.',
      path: '/services',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${seoBase.siteUrl}/services` },
        ],
      },
    });
  }, []);

  return (
    <main className="bg-white pt-24">
      <section className="border-b border-gray-200 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              Services
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
              Senior infrastructure consulting for AI and SaaS production systems
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
              GAX Global helps engineering leaders reduce production risk across AI infrastructure, Kubernetes, CI/CD, DevSecOps, cloud architecture, observability, and platform operations.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="book-infrastructure-review"
                data-location="review"
                onClick={createBookReviewClickHandler('review')}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-7 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300"
              >
                Book Infrastructure Review
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/infrastructure-review"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/15"
              >
                View Review Offer
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {serviceAreas.map((area) => (
              <article key={area.title} className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">{area.title}</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Problems solved</h3>
                    <p>{area.problems}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">Outcomes</h3>
                    <p>{area.outcomes}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">How engagements stay practical</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {['Review the production reality', 'Prioritize the highest-risk fixes', 'Support implementation with senior technical judgment'].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
