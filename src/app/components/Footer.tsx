import { Linkedin, Mail, Shield, Globe2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              GAX Global
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Specialist DevSecOps, AI infrastructure, and cloud consultancy for SaaS startups and small software companies.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Secure cloud delivery, practical automation, reliable operations</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('who-we-help');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Who We Help
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('capabilities');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@gax-global.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@gax-global.com</span>
              </a>
              <a
                href="https://linkedin.com/company/gax-global"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <Globe2 className="w-5 h-5" />
                <span>Remote-first consulting</span>
              </div>
              <div className="text-gray-400 text-sm">Serving SaaS startups and engineering teams</div>
              <div className="text-gray-400 text-sm">Available for cloud, DevSecOps, platform, and AI infrastructure engagements</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">{'\u00A9'} {currentYear} GAX Global. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
