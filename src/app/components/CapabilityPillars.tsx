import { Activity, BrainCircuit, Cloud, GitBranch, Network, Shield } from 'lucide-react';

const pillars = [
  {
    icon: BrainCircuit,
    title: 'AI/LLM infrastructure reliability',
    href: '/ai-infrastructure-llmops',
    description:
      'Model gateways, API integrations, scaling patterns, latency, observability, and operational failure modes for production AI systems.',
  },
  {
    icon: Shield,
    title: 'Kubernetes and platform operations',
    href: '/kubernetes-hardening',
    description:
      'Cluster reliability, workload isolation, access control, deployment safety, platform governance, and operational guardrails.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD and GitOps delivery',
    href: '/cicd-automation',
    description:
      'Release pipelines, GitOps controls, rollback readiness, environment promotion, policy checks, and deployment consistency.',
  },
  {
    icon: Network,
    title: 'Cloud architecture and networking',
    href: '/cloud-security-consulting',
    description:
      'Cloud foundations, private connectivity, DNS, traffic flow, access patterns, service boundaries, and cross-cloud networking.',
  },
  {
    icon: Cloud,
    title: 'DevSecOps and compliance readiness',
    href: '/devsecops-services',
    description:
      'Least privilege, secrets handling, platform hardening, policy-as-code, audit preparation, and evidence-ready delivery controls.',
  },
  {
    icon: Activity,
    title: 'Cost and observability improvements',
    href: '/cicd-automation',
    description:
      'Logging, metrics, tracing, alert quality, scaling efficiency, wasted spend, capacity signals, and production visibility.',
  },
];

export function CapabilityPillars() {
  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Technical Focus Areas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Focus Areas
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Narrow, production-oriented infrastructure expertise for teams that need senior platform judgment and hands-on delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-xl border border-gray-200 p-5 bg-gray-50">
              <div className="w-10 h-10 mb-4 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <pillar.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                <a href={pillar.href} className="hover:text-blue-700 transition-colors">
                  {pillar.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
