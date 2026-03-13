import { Mail, Linkedin, MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
New Project Request from GAX-GLOBAL Website

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Project Description:
${formData.description}
    `.trim();

    // Send via mailto (opens user's email client)
    window.location.href = `mailto:info@gax-global.com?subject=Project Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    
    // Show success message
    alert('Opening your email client to send the request. Thank you for your interest!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Start Your Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tell Us About Your Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fill out this quick form to help us understand your project requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Request Form - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Request Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Row 2: Company & Project Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="CI/CD Pipeline">CI/CD Pipeline Setup</option>
                    <option value="Cloud Migration">Cloud Migration</option>
                    <option value="Security Hardening">Security Hardening</option>
                    <option value="Infrastructure Automation">Infrastructure Automation</option>
                    <option value="Cost Optimization">Cost Optimization</option>
                    <option value="Full DevSecOps">Full DevSecOps Implementation</option>
                    <option value="Other">Other / Consultation</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select budget...</option>
                    <option value="Under $10k">Under $10k</option>
                    <option value="$10k - $50k">$10k - $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k+">$100k+</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select timeline...</option>
                    <option value="Urgent (within 1 month)">Urgent (within 1 month)</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Briefly describe your project needs, current challenges, and what you're hoping to achieve..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg transform hover:scale-[1.02]"
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Submit Project Request</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                We'll review your request and get back to you within 24 hours
              </p>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">What Happens Next?</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-600">
                    We review your request within 24 hours
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-600">
                    Schedule a free consultation call
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-600">
                    Receive a tailored proposal & timeline
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-600">
                    Start transforming your infrastructure
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-lg">
              <h4 className="font-bold mb-4">Prefer to Reach Out Directly?</h4>
              <div className="space-y-4">
                <a
                  href="mailto:info@gax-global.com"
                  className="flex items-center gap-3 hover:bg-white/10 p-3 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium">Email Us</div>
                    <div className="text-xs text-blue-100">info@gax-global.com</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/company/gax-global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:bg-white/10 p-3 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium">Connect on LinkedIn</div>
                    <div className="text-xs text-blue-100">@gax-global</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium">Global Coverage</div>
                    <div className="text-xs text-blue-100">Serving clients worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
