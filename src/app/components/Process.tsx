import { Search, FileText, Cog, Rocket, BarChart, HeadphonesIcon } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: 'Discovery and AI Readiness Assessment',
    description: 'We map your current DevSecOps maturity and identify the right AI opportunities without increasing risk.',
    details: ['Architecture and pipeline audit', 'Security and compliance baseline', 'AI use-case prioritization', 'Delivery KPI definition']
  },
  {
    icon: FileText,
    title: 'Roadmap and Secure Design',
    description: 'Define a phased implementation plan for cloud, security, automation, and AI capabilities.',
    details: ['Target-state architecture', 'Threat model and controls mapping', 'Platform and tooling decisions', 'Execution milestones']
  },
  {
    icon: Cog,
    title: 'Implementation and Integration',
    description: 'Build and integrate pipelines, infrastructure, observability, and AI services into your existing stack.',
    details: ['IaC and policy-as-code', 'CI/CD and MLOps setup', 'Identity and secret controls', 'Integration and quality testing']
  },
  {
    icon: Rocket,
    title: 'Deployment and Migration',
    description: 'Roll out changes safely using staged releases, validation gates, and rollback strategies.',
    details: ['Progressive release strategy', 'Controlled workload migration', 'Operational acceptance testing', 'Go-live enablement']
  },
  {
    icon: BarChart,
    title: 'Optimization and AIOps',
    description: 'Continuously improve reliability, security, and spend with observability-driven automation.',
    details: ['SLO and error budget tuning', 'AIOps remediation workflows', 'Cloud and AI cost optimization', 'Security posture improvement']
  },
  {
    icon: HeadphonesIcon,
    title: 'Managed Support and Evolution',
    description: 'Provide ongoing support while evolving your platform as products, traffic, and AI usage scale.',
    details: ['24/7 monitoring and response', 'Platform reliability governance', 'Continuous hardening updates', 'Quarterly strategy reviews']
  }
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Our Delivery Method</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Proven DevSecOps + AI Execution Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured model to deliver secure, scalable platforms from assessment through long-term operations
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 transform -translate-x-1/2"></div>

          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-blue-600">STEP {index + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
