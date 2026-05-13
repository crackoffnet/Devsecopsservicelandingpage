import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { CAL_BOOKING_URL } from '../config/booking';
import { createBookReviewClickHandler } from '../lib/analytics';
import { applySeo, seoBase } from '../lib/seo';

const reviewedAreas = [
  'AI infrastructure assessment for model gateways, LLM integrations, routing, latency, rate limits, and production observability',
  'Kubernetes assessment covering cluster operations, workload isolation, RBAC, deployment safety, and platform guardrails',
  'DevOps audit of CI/CD pipelines, GitOps controls, release promotion, rollback readiness, and delivery bottlenecks',
  'Platform reliability review for incident risk, scaling pressure, monitoring quality, alerting, and operational maturity',
  'Cloud architecture review for networking, access paths, traffic flow, cost signals, and scaling efficiency',
  'DevSecOps and compliance readiness review for secrets, least privilege, policy enforcement, and audit evidence gaps',
];

const deliverables = [
  'A clear summary of the highest-risk infrastructure issues found during the review',
  'Prioritized fixes organized by impact, urgency, and implementation effort',
  'Practical next steps your engineering team can act on without a large program kickoff',
  'Optional follow-up implementation support for the areas that need senior hands-on help',
];

export function InfrastructureReviewPage() {
  useEffect(() => {
    applySeo({
      title: 'Production Infrastructure Review for AI and SaaS Teams | GAX Global',
      description:
        'Book a 30-45 minute production infrastructure review covering AI infrastructure assessment, Kubernetes assessment, DevOps audit, cloud risk, and platform reliability.',
      path: '/infrastructure-review',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Infrastructure Review', item: `${seoBase.siteUrl}/infrastructure-review` },
        ],
      },
    });
  }, []);

  return (
    <main className="bg-white pt-24">
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              Production Infrastructure Review
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
              Find the infrastructure risks most likely to hurt production
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
              A focused 30-45 minute review for teams that need senior guidance across AI infrastructure, Kubernetes, DevOps delivery, cloud architecture, security readiness, and platform reliability.
            </p>
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="book-infrastructure-review"
              data-location="review"
              onClick={createBookReviewClickHandler('review')}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-7 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300"
            >
              Book Infrastructure Review
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
            <h2 className="mb-4 text-2xl font-semibold">Who it is for</h2>
            <ul className="space-y-3 text-slate-100">
              {[
                'AI startups moving from prototype to production',
                'SaaS teams seeing reliability, release, or cloud cost pressure',
                'Engineering leaders who need senior platform judgment quickly',
                'Teams preparing for audits, customer security reviews, or reliability improvements',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-gray-900">What is reviewed</h2>
            <ul className="space-y-4">
              {reviewedAreas.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-5 text-3xl font-bold text-gray-900">What you receive</h2>
            <ul className="space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-cyan-200 bg-cyan-50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">How the 30-45 minute review works</h3>
              <p className="text-gray-700">
                The session is a structured technical conversation around your current production risks, recent incidents, delivery workflow, infrastructure shape, and near-term business pressure. The goal is clarity: what matters, what can wait, and where senior implementation support would create leverage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
