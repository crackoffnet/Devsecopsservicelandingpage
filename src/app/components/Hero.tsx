import { ArrowRight, Network, Shield } from 'lucide-react';
import { CAL_BOOKING_URL } from '../config/booking';
import { createBookReviewClickHandler } from '../lib/analytics';

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
            GAX Global helps startups stabilize AI/LLM platforms, Kubernetes, CI/CD, and cloud infrastructure before outages, security gaps, and cost spikes become expensive.
          </p>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Infrastructure Review on Cal.com"
              data-cta="book-infrastructure-review"
              data-location="hero"
              onClick={createBookReviewClickHandler('hero')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-7 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300"
            >
              <span>Book Infrastructure Review</span>
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
            Remote US-focused consulting for engineering teams that need stable platforms, clearer risk, and practical implementation support.
          </p>
        </div>

        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-100">Production infrastructure review</p>
                <p className="text-2xl font-semibold">Production infrastructure layers</p>
              </div>
              <div className="rounded-lg bg-cyan-400/15 p-3 text-cyan-200">
                <Network className="h-6 w-6" />
              </div>
            </div>
            <div className="space-y-4">
              {[
                'AI/LLM applications & services',
                'Gateways, APIs & access controls',
                'Kubernetes, workloads & orchestration',
                'CI/CD, GitOps & operational guardrails',
                'Cloud, networking & security foundation',
              ].map((label, index) => (
                <div key={label} className="relative rounded-xl border border-white/10 bg-slate-950/55 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-slate-100">{label}</span>
                    <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs text-cyan-100">
                      layer {index + 1}
                    </span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" style={{ width: `${86 - index * 9}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                'Risk surfaced',
                'Fixes prioritized',
                'Delivery supported',
              ].map((item) => (
                <div key={item} className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-4">
                  <p className="text-sm font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
