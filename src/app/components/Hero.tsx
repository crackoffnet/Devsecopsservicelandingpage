import { ArrowRight, Cloud, GitBranch, LockKeyhole, Network, Server, Shield } from 'lucide-react';
import { INFRASTRUCTURE_REVIEW_CTA_PATH } from '../config/booking';
import { createBookReviewClickHandler } from '../lib/analytics';

const reviewAreas = [
  {
    icon: Server,
    title: 'AI/LLM Platforms',
    description: 'Model integrations, gateways, scaling, reliability, and operational risk.',
  },
  {
    icon: Network,
    title: 'Kubernetes & Platform Operations',
    description: 'Cluster reliability, workload orchestration, deployment safety, and operational maturity.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD & Delivery',
    description: 'Release pipelines, GitOps, rollback readiness, and deployment controls.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Networking',
    description: 'Infrastructure design, connectivity, DNS, access patterns, and traffic flow.',
  },
  {
    icon: LockKeyhole,
    title: 'Security & Compliance',
    description: 'Access control, secrets, platform hardening, and compliance readiness.',
  },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 pt-16 text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(14, 165, 233, 0.28), transparent 32%), linear-gradient(135deg, #020617 0%, #0f172a 48%, #0b3b66 100%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2">
            <Shield className="h-4 w-4 text-cyan-300" />
            <span className="text-sm text-cyan-100">AI infrastructure, DevSecOps, and platform reliability consulting</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            AI or SaaS infrastructure breaking under production load?
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-slate-200 sm:text-xl">
            GAX Global provides senior, hands-on infrastructure support for AI and SaaS teams that need production systems stabilized without the overhead of a large consulting firm.
          </p>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={INFRASTRUCTURE_REVIEW_CTA_PATH}
              aria-label="Book Free Infrastructure Review on the GAX Global site"
              data-cta="book-free-infrastructure-review"
              data-location="hero"
              onClick={createBookReviewClickHandler('hero')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-7 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300"
            >
              <span>Book Free Infrastructure Review</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/#problems"
              aria-label="See what infrastructure problems GAX Global fixes"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/15"
            >
              See What We Fix
            </a>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
            Focused boutique consulting for engineering leaders who need clear risk review, practical fixes, and implementation support across AI infrastructure, DevSecOps, and platform reliability.
          </p>
        </div>

        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <p className="text-2xl font-semibold">Production Infrastructure Review</p>
                <p className="mt-2 text-sm leading-relaxed text-cyan-100">
                  Key infrastructure areas we help teams assess, stabilize, and improve.
                </p>
              </div>
              <div className="rounded-lg bg-cyan-400/15 p-3 text-cyan-200">
                <Network className="h-6 w-6" />
              </div>
            </div>
            <div className="space-y-3">
              {reviewAreas.map((area) => (
                <div key={area.title} className="rounded-xl border border-white/10 bg-slate-950/55 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-200">
                      <area.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100">{area.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                'Risk identified',
                'Fixes prioritized',
                'Practical next steps',
              ].map((item) => (
                <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm font-semibold text-cyan-50">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
