import { ClipboardCheck, Workflow, ShieldCheck, BrainCircuit } from 'lucide-react';
import { CAL_BOOKING_URL } from '../config/booking';

const services = [
  {
    icon: ClipboardCheck,
    slug: '/devsecops-services',
    title: 'DevSecOps & Infrastructure Health Check',
    description: 'A focused review of your cloud setup, CI/CD pipelines, Kubernetes posture, infrastructure as code practices, security gaps, and operational risks.',
    features: [
      'cloud and infrastructure review',
      'CI/CD and release workflow review',
      'security and hardening review',
      'Kubernetes and platform risk review',
      'prioritized findings and action plan',
    ],
    outcome:
      'A practical assessment with prioritized findings, key risks, and recommended next steps.',
  },
  {
    icon: Workflow,
    slug: '/cicd-automation',
    title: 'Secure CI/CD & Automation Sprint',
    description: 'Build or fix secure delivery pipelines, secrets handling, deployment controls, and automation workflows that reduce release risk.',
    features: [
      'pipeline setup or remediation',
      'secrets and environment handling',
      'release workflow hardening',
      'deployment automation',
      'rollback and delivery safeguards',
    ],
    outcome:
      'A more secure, stable, and repeatable delivery workflow with clear implementation guidance or completed improvements.',
  },
  {
    icon: ShieldCheck,
    slug: '/kubernetes-hardening',
    title: 'Cloud & Kubernetes Hardening Sprint',
    description: 'Strengthen infrastructure, access controls, Kubernetes security, and production readiness for teams running real workloads.',
    features: [
      'IAM and access review',
      'Kubernetes hardening',
      'policy and configuration review',
      'workload and platform security improvements',
      'production readiness recommendations',
    ],
    outcome:
      'A hardened environment with practical recommendations and/or implemented improvements for lower operational risk.',
  },
  {
    icon: BrainCircuit,
    slug: '/ai-infrastructure-llmops',
    title: 'AI Infrastructure & LLMOps Enablement',
    description: 'Help teams build secure, scalable foundations for AI products and internal AI workloads.',
    features: [
      'AI platform architecture support',
      'model/API gateway integration patterns',
      'secure AI deployment workflows',
      'observability and operational readiness for AI services',
      'governance and environment design for AI systems',
    ],
    outcome:
      'A clearer, safer, and more scalable foundation for AI workloads and AI-enabled product delivery.',
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Core Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Focused DevSecOps Engagements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical services built for SaaS startups and small engineering teams that need stronger cloud and AI platform foundations
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <a href={service.slug} className="hover:text-blue-700 transition-colors">
                  {service.title}
                </a>
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-800 font-medium">
                Outcome: <span className="font-normal text-gray-700">{service.outcome}</span>
              </p>
              <a href={service.slug} className="inline-block mt-4 text-sm font-semibold text-blue-700 hover:text-blue-800">
                Learn more
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Operational checklists</h3>
          <p className="text-gray-600 text-sm mb-4">
            Use these practical checklists to assess readiness before starting a consulting engagement.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/devsecops-assessment-checklist" className="text-sm text-blue-700 hover:text-blue-800">
              DevSecOps assessment checklist
            </a>
            <a href="/ai-infrastructure-readiness-checklist" className="text-sm text-blue-700 hover:text-blue-800">
              AI infrastructure readiness checklist
            </a>
            <a href="/cicd-security-checklist" className="text-sm text-blue-700 hover:text-blue-800">
              CI/CD security checklist
            </a>
            <a href="/kubernetes-hardening-checklist" className="text-sm text-blue-700 hover:text-blue-800">
              Kubernetes hardening checklist
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Need help deciding the right starting point?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a 30-minute consultation on Cal.com"
              data-cta="book-consultation-services-mid"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
            >
              Book a 30-minute consultation
            </a>
            <a
              href="/#project-request-form"
              aria-label="Submit a project request"
              data-cta="submit-project-request-services-mid"
              className="px-6 py-3 rounded-lg border border-blue-300 text-blue-700 hover:bg-blue-50 transition-colors font-medium"
            >
              Submit a project request
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
