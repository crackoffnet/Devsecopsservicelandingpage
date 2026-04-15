import { Cloud, GitBranch, Settings, Shield, Activity, BrainCircuit } from 'lucide-react';

const pillars = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    href: '/cloud-security-consulting',
    description:
      'Design, improve, and stabilize cloud foundations across AWS, Azure, GCP, hybrid, and multicloud environments.',
  },
  {
    icon: GitBranch,
    title: 'DevSecOps & CI/CD',
    href: '/devsecops-services',
    description:
      'Build secure delivery workflows with stronger automation, controls, and release confidence.',
  },
  {
    icon: Settings,
    title: 'Infrastructure as Code & Automation',
    href: '/terraform-iac',
    description:
      'Standardize infrastructure with Terraform, reusable patterns, and consistent environments.',
  },
  {
    icon: Shield,
    title: 'Kubernetes & Platform Security',
    href: '/kubernetes-hardening',
    description:
      'Reduce cluster risk and improve platform resilience with practical hardening and operational guardrails.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Infrastructure & LLMOps',
    href: '/ai-infrastructure-llmops',
    description:
      'Build secure, scalable foundations for AI applications, model delivery, API integration, observability, and governance.',
  },
  {
    icon: Activity,
    title: 'Reliability & Operational Readiness',
    href: '/cicd-automation',
    description:
      'Improve monitoring, alerting, logging, and production stability for real-world engineering teams.',
  },
];

export function CapabilityPillars() {
  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Capability Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Core Delivery Capabilities
          </h2>
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
