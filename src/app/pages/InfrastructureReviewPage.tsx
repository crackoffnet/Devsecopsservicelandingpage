import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { InfrastructureReviewCta } from '../components/InfrastructureReviewCta';
import { CAL_BOOKING_URL } from '../config/booking';
import { createBookReviewClickHandler } from '../lib/analytics';
import { applySeo, seoBase } from '../lib/seo';

const reviewedAreas = [
  'Review CI/CD pipeline risks, release bottlenecks, GitOps gaps, and deployment failure patterns',
  'Identify Kubernetes and cloud security gaps around RBAC, workload isolation, secrets, and platform guardrails',
  'Check Terraform/IaC workflows, environment drift, change control, and deployment reliability risks',
  'Discuss SOC 2 infrastructure readiness, audit evidence gaps, and practical control improvements',
  'Map AI infrastructure, observability, and platform reliability issues affecting production stability',
];

const deliverables = [
  'A clear summary of the highest-risk infrastructure issues found during the review',
  'Practical next steps prioritized by urgency, business impact, and implementation effort',
  'Concrete guidance on where to focus first across CI/CD, Kubernetes, cloud security, Terraform/IaC, and reliability',
  'A recommendation on whether you need a deeper implementation engagement or just a few targeted fixes',
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
              Free Infrastructure Review
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
              Book a free 20-minute infrastructure review for your AI or SaaS stack
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
              Get senior guidance on CI/CD, Kubernetes, Terraform, cloud security, AI infrastructure, and deployment reliability without the overhead of a large consulting engagement.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="book-free-infrastructure-review"
                data-location="infrastructure-review-hero"
                onClick={createBookReviewClickHandler('infrastructure-review')}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-7 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300"
              >
                Book Free Infrastructure Review
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@gax-global.com?subject=Request%20Infrastructure%20Review"
                data-cta="request-infrastructure-review"
                data-location="infrastructure-review-hero"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/15"
              >
                Request Infrastructure Review
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Best for SaaS and AI teams dealing with reliability pressure, audit readiness, deployment risk, or scaling complexity.
            </p>
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
            <h2 className="mb-5 text-3xl font-bold text-gray-900">What the free review covers</h2>
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
              <h3 className="mb-2 text-xl font-semibold text-gray-900">How the free review works</h3>
              <p className="text-gray-700">
                The session is a focused conversation around your production risks, recent incidents, delivery workflow, infrastructure shape, and near-term business pressure. The goal is clarity: what matters first, what can wait, and where practical fixes will create the most leverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              'Review CI/CD pipeline risks and deployment reliability',
              'Identify Kubernetes, Terraform/IaC, and cloud security gaps',
              'Leave with practical next steps for SOC 2 readiness and platform stability',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="font-medium text-gray-800">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InfrastructureReviewCta
        href={CAL_BOOKING_URL}
        title="Not sure where your infrastructure risks are?"
        body="Book a free 20-minute review and get practical next steps for CI/CD, Kubernetes, cloud security, Terraform/IaC, and platform reliability."
        buttonText="Schedule Free Review"
        location="infrastructure-review"
        dataLocation="infrastructure-review-footer"
        sectionClassName="border-t border-gray-200 bg-white py-16"
      />
    </main>
  );
}
