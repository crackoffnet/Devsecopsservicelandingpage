import {
  GitBranch,
  Cloud,
  Shield,
  Zap,
  Database,
  Lock,
  Settings,
  TrendingDown,
  Workflow,
  Server,
  RefreshCw,
  BrainCircuit
} from 'lucide-react';

const services = [
  {
    icon: GitBranch,
    title: 'Secure CI/CD Engineering',
    description: 'Build guarded delivery pipelines with policy checks, quality gates, and automated release controls.',
    features: ['GitHub Actions, GitLab CI, Jenkins', 'SAST/DAST/SCA in pipeline', 'Progressive and zero-downtime deploys']
  },
  {
    icon: BrainCircuit,
    title: 'AI Platform Engineering',
    description: 'Design production-grade AI platforms for model serving, vector search, and prompt orchestration.',
    features: ['LLM and RAG architecture', 'Model gateway and observability', 'Inference cost/performance tuning']
  },
  {
    icon: Shield,
    title: 'Cloud Security Hardening',
    description: 'Reduce risk with continuous cloud security controls across network, workload, and identity layers.',
    features: ['CSPM and vulnerability scanning', 'Policy-as-code guardrails', 'Zero-trust and least privilege']
  },
  {
    icon: Zap,
    title: 'AIOps Automation',
    description: 'Automate incident detection and remediation using telemetry, anomaly detection, and runbook execution.',
    features: ['Event correlation pipelines', 'Auto-remediation workflows', 'SLO-driven alert reduction']
  },
  {
    icon: Database,
    title: 'Data Platform Reliability',
    description: 'Strengthen data infrastructure used by applications and AI workloads with resilience-first practices.',
    features: ['Backup and disaster recovery', 'Encryption and key rotation', 'Performance and capacity planning']
  },
  {
    icon: RefreshCw,
    title: 'Cloud and Kubernetes Migration',
    description: 'Migrate workloads safely from legacy or on-prem systems to cloud-native environments.',
    features: ['Migration runway planning', 'Cutover with minimal downtime', 'Post-migration reliability tuning']
  },
  {
    icon: TrendingDown,
    title: 'FinOps and AI Cost Control',
    description: 'Control cloud and AI spend with visibility, right-sizing, and intelligent consumption policies.',
    features: ['Cloud resource rightsizing', 'GPU and inference spend tracking', 'Unit economics dashboards']
  },
  {
    icon: Server,
    title: 'Hybrid Infrastructure Operations',
    description: 'Operate secure hybrid environments across cloud, edge, and datacenter footprints.',
    features: ['Unified observability', 'Secure network connectivity', 'Operational runbook standardization']
  },
  {
    icon: Workflow,
    title: 'MLOps and Model CI/CD',
    description: 'Industrialize model delivery with reproducible training, testing, and deployment pipelines.',
    features: ['Model registry and lineage', 'Automated model validation', 'Controlled rollout and rollback']
  },
  {
    icon: Lock,
    title: 'LLM Security and Governance',
    description: 'Protect AI systems with controls for prompt injection, data leakage, and unsafe model behavior.',
    features: ['Prompt and output filtering', 'Secrets and PII protection', 'AI policy and compliance controls']
  },
  {
    icon: Settings,
    title: 'Observability and Reliability',
    description: 'Gain operational clarity across infrastructure, apps, and AI workloads in one monitoring plane.',
    features: ['Prometheus, Grafana, ELK/OpenSearch', 'Golden signal dashboards', 'SRE-oriented incident playbooks']
  },
  {
    icon: Cloud,
    title: 'Infrastructure as Code',
    description: 'Standardize environment provisioning with reusable, secure, and version-controlled IaC patterns.',
    features: ['Terraform and OpenTofu modules', 'Environment drift detection', 'Automated compliance baselines']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">DevSecOps + AI Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            End-to-End DevSecOps and AI Delivery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From secure pipelines to AI platform operations, we cover the full engineering lifecycle for modern teams
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
