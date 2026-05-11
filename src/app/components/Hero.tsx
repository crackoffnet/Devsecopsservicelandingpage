import { ArrowRight, CheckCircle2, Network, Shield } from 'lucide-react';
import { CAL_BOOKING_URL, trackBookAppointmentConversion } from '../config/booking';

const trustBullets = [
  '15+ years production infrastructure experience',
  'Multi-cloud: AWS, Azure, GCP, Oracle',
  'Kubernetes platforms with 200+ services',
  'Azure OpenAI, APIM, private networking',
  'SOC 2 / ISO 27001 experience',
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
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2">
            <Shield className="h-4 w-4 text-cyan-300" />
            <span className="text-sm text-cyan-100">Senior AI infrastructure, DevSecOps, and platform consulting</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            AI or SaaS infrastructure breaking under real production load?
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-slate-200 sm:text-xl">
            GAX Global helps startups stabilize Azure/OpenAI, Kubernetes, APIM, and cloud platforms before outages, cost spikes, and security gaps become expensive.
          </p>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Infrastructure Review on Cal.com"
              data-cta="book-infrastructure-review"
              onClick={trackBookAppointmentConversion}
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

          <ul className="grid max-w-2xl grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {trustBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-100">Production risk map</p>
                <p className="text-2xl font-semibold">AI gateway to platform</p>
              </div>
              <div className="rounded-lg bg-cyan-400/15 p-3 text-cyan-200">
                <Network className="h-6 w-6" />
              </div>
            </div>
            <div className="space-y-4">
              {['OpenAI / Azure OpenAI', 'APIM + private endpoints', 'Kubernetes services', 'CI/CD + GitOps controls'].map((label, index) => (
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
              {['routing', 'cost', 'security'].map((label) => (
                <div key={label} className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-4">
                  <p className="text-xs uppercase tracking-wide text-cyan-100">{label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">reviewed</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
