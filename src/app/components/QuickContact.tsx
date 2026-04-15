import { Mail, Linkedin } from 'lucide-react';

export function QuickContact() {
  return (
    <section className="py-10 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Need quick contact?</h3>
            <p className="text-gray-600 mt-1">Email us directly or connect on LinkedIn.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:info@gax-global.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email: info@gax-global.com</span>
            </a>
            <a
              href="https://linkedin.com/company/gax-global"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-blue-700 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn (United States)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
