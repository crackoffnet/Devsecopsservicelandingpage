import { Users, Rocket, GitBranch, ShieldAlert } from 'lucide-react';

const audience = [
  {
    icon: Rocket,
    title: 'SaaS startups scaling quickly',
  },
  {
    icon: Users,
    title: 'small software companies with cloud complexity',
  },
  {
    icon: GitBranch,
    title: 'teams with fragile CI/CD or release workflows',
  },
  {
    icon: ShieldAlert,
    title: 'companies needing stronger security, automation, and reliability',
  },
];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Who We Help</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built for Lean, Growing Engineering Teams
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We work best with startups and small engineering teams that need stronger infrastructure foundations without building a full in-house platform team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {audience.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <p className="text-gray-800 font-medium leading-relaxed">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
