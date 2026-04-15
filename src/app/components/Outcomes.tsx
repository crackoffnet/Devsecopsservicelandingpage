import { TrendingDown, Clock, Shield, Zap, CheckCircle2, Target } from 'lucide-react';

const outcomes = [
  {
    icon: TrendingDown,
    metric: '35%',
    title: 'Cloud + AI Cost Reduction',
    description: 'Lower infrastructure and model inference costs through FinOps controls and workload optimization'
  },
  {
    icon: Clock,
    metric: '70%',
    title: 'Faster Release Cycles',
    description: 'Accelerated application and model delivery through secure CI/CD and MLOps automation'
  },
  {
    icon: Shield,
    metric: '99.9%',
    title: 'Security and Compliance Coverage',
    description: 'Continuous compliance and policy enforcement across cloud, platform, and AI services'
  },
  {
    icon: Zap,
    metric: '10x',
    title: 'Operational Productivity',
    description: 'Higher team efficiency using AIOps workflows, standardized pipelines, and automated remediation'
  },
  {
    icon: CheckCircle2,
    metric: '90%',
    title: 'Incident Noise Reduction',
    description: 'Fewer repetitive alerts and production issues through observability, correlation, and tuning'
  },
  {
    icon: Target,
    metric: '99.95%',
    title: 'Platform Reliability',
    description: 'Resilient architecture and SRE practices that protect uptime for critical services and APIs'
  }
];

const benefits = [
  'Secure SDLC and AI lifecycle governance from day one',
  'Faster feature and model rollout with lower operational risk',
  'Clear observability across applications, infrastructure, and AI services',
  'Reduced mean time to detect and remediate production issues',
  'Better cloud and GPU utilization with cost guardrails',
  'Compliance-ready controls and auditable engineering workflows',
  'Reliable hybrid architecture for high-growth workloads',
  'Scalable platform foundations aligned to business outcomes'
];

export function Outcomes() {
  return (
    <section id="outcomes" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-4">
            <span className="text-sm text-blue-200">Results That Matter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Measurable DevSecOps and AI Outcomes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Clients improve delivery speed, security posture, and reliability with our integrated engineering model
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all hover:bg-white/10"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <outcome.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">{outcome.metric}</div>
              <h3 className="text-xl font-bold mb-2">{outcome.title}</h3>
              <p className="text-gray-300">{outcome.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
          <h3 className="text-2xl font-bold mb-8 text-center">Additional Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1772971919689-c216435a5899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXdvcmt8ZW58MXx8fHwxNzczMTcxOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team collaboration"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
