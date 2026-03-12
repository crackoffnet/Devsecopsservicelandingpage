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
  ShieldCheck
} from 'lucide-react';

const services = [
  {
    icon: GitBranch,
    title: 'CI/CD Automation',
    description: 'Streamline your development pipeline with robust continuous integration and deployment workflows.',
    features: ['Jenkins, GitLab CI, GitHub Actions', 'Automated testing & validation', 'Zero-downtime deployments']
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Design, build, and manage scalable cloud infrastructure on AWS, Azure, GCP, and hybrid environments.',
    features: ['Multi-cloud architecture', 'Infrastructure as Code', 'High availability setup']
  },
  {
    icon: Shield,
    title: 'Security Hardening',
    description: 'Implement comprehensive security measures across your entire infrastructure and application stack.',
    features: ['Vulnerability scanning', 'Compliance automation', 'Zero-trust architecture']
  },
  {
    icon: Zap,
    title: 'DevOps Automation',
    description: 'Eliminate manual processes with intelligent automation across your development lifecycle.',
    features: ['Configuration management', 'Automated provisioning', 'Self-healing systems']
  },
  {
    icon: Database,
    title: 'Data & Storage',
    description: 'Optimize database performance, implement backup strategies, and ensure data resilience.',
    features: ['Database optimization', 'Disaster recovery', 'Data encryption']
  },
  {
    icon: RefreshCw,
    title: 'Cloud Migrations',
    description: 'Seamlessly migrate your workloads from on-premise to cloud or between cloud providers.',
    features: ['Migration strategy', 'Minimal downtime', 'Post-migration optimization']
  },
  {
    icon: TrendingDown,
    title: 'Cost Optimization',
    description: 'Reduce cloud spending while maintaining performance through intelligent resource management.',
    features: ['Resource right-sizing', 'Reserved instances', 'Cost monitoring dashboards']
  },
  {
    icon: Server,
    title: 'On-Premise & Hybrid',
    description: 'Bridge on-premise and cloud environments for a flexible, secure hybrid infrastructure.',
    features: ['Hybrid connectivity', 'On-prem automation', 'Unified monitoring']
  },
  {
    icon: Workflow,
    title: 'Container Orchestration',
    description: 'Deploy and manage containerized applications with Kubernetes, Docker, and modern orchestration.',
    features: ['Kubernetes deployment', 'Container security', 'Auto-scaling configuration']
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Governance',
    description: 'Ensure your infrastructure meets industry standards and regulatory requirements.',
    features: ['SOC2, ISO, HIPAA compliance', 'Audit automation', 'Policy enforcement']
  },
  {
    icon: Settings,
    title: 'Infrastructure Monitoring',
    description: 'Gain full visibility into your infrastructure with real-time monitoring and alerting.',
    features: ['Prometheus, Grafana, ELK', 'Custom dashboards', 'Intelligent alerting']
  },
  {
    icon: Lock,
    title: 'Identity & Access',
    description: 'Implement secure identity management and role-based access control across your systems.',
    features: ['SSO integration', 'RBAC implementation', 'Secret management']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            End-to-End DevSecOps Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From automation to security, cloud to on-premise—we cover every aspect of modern DevSecOps
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
