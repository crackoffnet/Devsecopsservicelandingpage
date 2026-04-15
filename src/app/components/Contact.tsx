import { Mail, Loader2 } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { CAL_BOOKING_URL } from '../config/booking';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
      const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS Public Key

      // Check if EmailJS is configured
      if (serviceID !== 'YOUR_SERVICE_ID' && templateID !== 'YOUR_TEMPLATE_ID' && publicKey !== 'YOUR_PUBLIC_KEY') {
        // EmailJS is configured - send email in background
        await emailjs.send(
          serviceID,
          templateID,
          {
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company || 'Not specified',
            project_type: formData.projectType,
            budget: formData.budget || 'Not specified',
            timeline: formData.timeline || 'Not specified',
            message: formData.description,
            to_email: 'info@gax-global.com'
          },
          publicKey
        );

        // Success message
        toast.success('Request sent successfully! We will contact you within 24 hours.', {
          duration: 5000,
        });
      } else {
        // EmailJS not configured - use email client as fallback
        const subject = encodeURIComponent(`New Project Request from ${formData.name}`);
        const body = encodeURIComponent(`
New Project Request from GAX Global Website

FROM:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}

PROJECT DETAILS:
Type: ${formData.projectType}
Budget: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

DESCRIPTION:
${formData.description}

---
Please reply to: ${formData.email}
        `.trim());

        window.open(`mailto:info@gax-global.com?subject=${subject}&body=${body}`, '_blank');
        toast.success('Opening email client with your request...', {
          duration: 5000,
        });
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
      });

    } catch (error) {
      console.error('Email send error:', error);
      toast.error('Failed to send request. Please try again or email us directly at info@gax-global.com', {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
            Tell Us About Your DevSecOps or AI Infrastructure Goals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your current cloud, CI/CD, security, Kubernetes, or AI platform challenges and we will map practical next steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Request Form - Takes 2 columns */}
          <div id="project-request-form" className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Select a service...</option>
                    <option value="Health Check">DevSecOps & Infrastructure Health Check</option>
                    <option value="CI/CD Sprint">Secure CI/CD & Automation Sprint</option>
                    <option value="Hardening Sprint">Cloud & Kubernetes Hardening Sprint</option>
                    <option value="AI Enablement">AI Infrastructure & LLMOps Enablement</option>
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Describe your cloud setup, CI/CD pain points, security concerns, AI workload needs, and timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="font-semibold">Sending...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">Submit Project Request</span>
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                We review each request and reply with next steps within 24 hours
              </p>
            </form>
          </div>

          {/* Contact Options Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">Choose how to start</h4>
              <p className="text-sm text-gray-600 mb-4">
                Choose one of two options: book a consultation now, or submit a project request with more detail.
              </p>
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a 30-minute consultation on Cal.com"
                data-cta="book-30min-consultation-contact"
                className="block w-full text-center px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
              >
                Book a 30-minute consultation
              </a>
              <a
                href="#project-request-form"
                aria-label="Submit a project request using the project request form"
                data-cta="submit-project-request-contact"
                className="block w-full text-center px-4 py-3 mt-3 rounded-lg border border-blue-300 text-blue-700 hover:bg-blue-50 transition-colors font-medium"
              >
                Submit a project request
              </a>
              <p className="text-xs text-gray-500 mt-4">
                For longer inquiries, use the Project Request Form and include your architecture, CI/CD, security, or AI platform goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
