import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { INFRASTRUCTURE_REVIEW_CTA_PATH } from '../config/booking';
import { createBookReviewClickHandler } from '../lib/analytics';

const reviewItems = [
  'AI/LLM platform and gateway review',
  'Kubernetes and platform reliability review',
  'Cloud cost and scaling risk review',
  'Security, access, and compliance review',
  'CI/CD and release process review',
  'Clear next-step recommendations',
];

export function ProductionAiInfrastructureReview() {
  return (
    <section id="review" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            Production Infrastructure Review
          </div>
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">Production Infrastructure Review</h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-200">
            In 30-45 minutes, we review your AI/LLM, Kubernetes, cloud, security, and delivery setup to identify the highest-risk issues and show what to fix first.
          </p>
          <a
            href={INFRASTRUCTURE_REVIEW_CTA_PATH}
            aria-label="Book Free Infrastructure Review on the GAX Global site"
            data-cta="book-free-infrastructure-review"
            data-location="review"
            onClick={createBookReviewClickHandler('review')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-7 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300"
          >
            Book Free Infrastructure Review
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-6 sm:p-8">
          <ul className="space-y-4">
            {reviewItems.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900/70 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300" />
                <span className="text-slate-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
