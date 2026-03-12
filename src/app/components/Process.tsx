import { Search, FileText, Cog, Rocket, BarChart, HeadphonesIcon } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: 'Discovery & Assessment',
    description: 'We analyze your current infrastructure, identify pain points, and understand your business objectives.',
    details: ['Infrastructure audit', 'Security assessment', 'Gap analysis', 'Requirements gathering']
  },
  {
    icon: FileText,
    title: 'Strategy & Planning',
    description: 'Create a comprehensive roadmap tailored to your needs with clear milestones and deliverables.',
    details: ['Architecture design', 'Technology selection', 'Migration planning', 'Risk assessment']
  },
  {
    icon: Cog,
    title: 'Implementation',
    description: 'Execute the plan with precision, implementing automation, security, and infrastructure improvements.',
    details: ['Infrastructure setup', 'Automation deployment', 'Security hardening', 'Integration testing']
  },
  {
    icon: Rocket,
    title: 'Deployment & Migration',
    description: 'Seamlessly deploy and migrate workloads with minimal disruption to your operations.',
    details: ['Staged rollout', 'Data migration', 'Validation testing', 'Go-live support']
  },
  {
    icon: BarChart,
    title: 'Optimization',
    description: 'Continuously monitor, analyze, and optimize for performance, security, and cost efficiency.',
    details: ['Performance tuning', 'Cost optimization', 'Security updates', 'Capacity planning']
  },
  {
    icon: HeadphonesIcon,
    title: 'Support & Evolution',
    description: 'Provide ongoing support and evolve your infrastructure as your business grows.',
    details: ['24/7 monitoring', 'Incident response', 'Feature updates', 'Strategic consulting']
  }
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Proven Delivery Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach that ensures successful outcomes from discovery to ongoing support
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
