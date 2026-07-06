import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { INFRASTRUCTURE_REVIEW_CTA_PATH } from '../config/booking';
import { createBookReviewClickHandler } from '../lib/analytics';

const caseStudies = [
  {
    title: 'Stabilizing Multi-Region AI Infrastructure',
    copy: 'Reviewed a production AI platform under customer-facing load, isolated reliability risks in gateway and routing patterns, and supported targeted fixes.',
    metrics: ['More stable AI request flow', 'Fewer failure points in critical paths', 'Clearer production visibility'],
  },
  {
    title: 'Reducing Kubernetes Platform Risk',
    copy: 'Assessed Kubernetes access, deployment controls, and operational guardrails for a scaling SaaS environment preparing for higher reliability expectations.',
    metrics: ['Reduced platform exposure', 'Improved release confidence', 'Stronger operational guardrails'],
  },
  {
    title: 'Cloud Cost & Platform Optimization',
    copy: 'Identified inefficient scaling, duplicated traffic paths, and observability gaps that made cloud spend harder to control during growth.',
    metrics: ['Lower avoidable infrastructure waste', 'Better cost signals', 'Improved capacity visibility'],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            Case Studies
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Anonymized Production Outcomes</h2>
          <p className="text-lg leading-relaxed text-slate-200">
            Representative, anonymized engagements focused on infrastructure outcomes rather than headcount, credentials, or broad program claims.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-xl border border-white/10 bg-white/10 p-6 shadow-xl shadow-slate-950/20">
              <h3 className="mb-4 text-xl font-semibold text-white">{study.title}</h3>
              <p className="mb-6 text-slate-200">{study.copy}</p>
              <ul className="space-y-3">
                {study.metrics.map((metric) => (
                  <li key={metric} className="flex items-start gap-3 text-sm text-slate-100">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={INFRASTRUCTURE_REVIEW_CTA_PATH}
            aria-label="Book Free Infrastructure Review on the GAX Global site"
            data-cta="book-free-infrastructure-review"
            data-location="case-studies"
            onClick={createBookReviewClickHandler('case-studies')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-7 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300"
          >
            Book Free Infrastructure Review
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
