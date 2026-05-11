import { AlertCircle, CloudLightning, GitBranch, LockKeyhole, Network, ServerCrash, ShieldAlert } from 'lucide-react';

const problems = [
  {
    icon: ServerCrash,
    title: 'AI/LLM Platform Instability',
    copy: 'Failures across LLM gateways, model integrations, routing, latency, rate limits, and production AI workloads.',
  },
  {
    icon: ShieldAlert,
    title: 'Kubernetes & Platform Risk',
    copy: 'RBAC gaps, weak isolation, fragile deployments, multi-cluster drift, and reliability issues across platform layers.',
  },
  {
    icon: CloudLightning,
    title: 'Cloud Cost Spikes',
    copy: 'Unexpected spend caused by inefficient architecture, duplicate traffic, missing limits, poor scaling, and weak observability.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD & Release Bottlenecks',
    copy: 'Slow releases, fragile pipelines, missing GitOps controls, poor rollback readiness, and weak deployment governance.',
  },
  {
    icon: LockKeyhole,
    title: 'Security & Compliance Gaps',
    copy: 'SOC 2, ISO 27001, least privilege, secrets management, policy-as-code, and DevSecOps controls.',
  },
  {
    icon: Network,
    title: 'Networking & Access Issues',
    copy: 'Private connectivity, DNS, VPN/IPSec, service mesh, mTLS, load balancing, and secure cross-cloud access.',
  },
];

export function ProblemsWeSolve() {
  return (
    <section id="problems" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-100 rounded-full mb-4">
            <AlertCircle className="h-4 w-4 text-cyan-700" />
            <span className="text-sm text-cyan-800">Problems We Fix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Problems We Fix
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            The risks that usually show up right before a launch, audit, traffic spike, or customer escalation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-colors hover:border-cyan-200 hover:bg-white"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <problem.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{problem.title}</h3>
              <p className="text-gray-600">{problem.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
