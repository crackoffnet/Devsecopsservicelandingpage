import { ArrowRight, Shield } from 'lucide-react';
import { CAL_BOOKING_URL, trackBookAppointmentConversion } from '../config/booking';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1569660424259-87e64a80f6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVycyUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc3MzM3NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Data Center Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-blue-900/90 to-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-200">DevSecOps and AI Infrastructure Consultancy for SaaS Teams</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Secure cloud, DevSecOps, and AI infrastructure for growing SaaS teams
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We help startups and small companies improve CI/CD, cloud security, infrastructure as code, Kubernetes hardening, platform reliability, and AI infrastructure across cloud, hybrid, and multicloud environments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a 30-minute consultation on Cal.com"
              data-cta="book-consultation-hero"
              onClick={trackBookAppointmentConversion}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <span>Book a 30-minute consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/#project-request-form"
              aria-label="Submit a project request"
              data-cta="submit-project-request-hero"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all border border-white/30"
            >
              Submit a project request
            </a>
          </div>

          <p className="text-sm text-blue-100/90 max-w-2xl">
            Hands-on DevSecOps, cloud architecture, automation, platform security, and AI infrastructure for teams that need practical results.
          </p>
        </div>
      </div>
    </section>
  );
}
