import { Linkedin, Mail, Shield, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              GAX-GLOBAL
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              DevSecOps and AI engineering services that help teams build secure systems,
              ship faster, and operate resilient platforms at scale.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Secure by design, automation-first, AI-ready</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
                    const element = document.getElementById('process');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('outcomes');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Outcomes
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

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/company/gax-global"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:info@gax-global.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@gax-global.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>LinkedIn Location: United States</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} GAX-GLOBAL. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
