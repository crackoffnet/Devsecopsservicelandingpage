import { ArrowRight, Shield, Cloud, Lock, BrainCircuit } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
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
            <span className="text-sm text-blue-200">DevSecOps + AI Engineering Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Secure, Automate, and Scale DevSecOps and AI Platforms
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            End-to-end services for DevSecOps, AI platform engineering, and cloud security. We implement
            CI/CD, IaC, AIOps, LLM governance, and reliability controls so your teams can ship faster
            with confidence.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Cloud className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white">Cloud & Hybrid</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white">Security First</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <ArrowRight className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white">Full Automation</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <BrainCircuit className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white">AI-Ready Operations</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all border border-white/30"
            >
              Explore Our Services
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-gray-400">Infrastructure as Code</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-sm text-gray-400">Security Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">50%+</div>
            <div className="text-sm text-gray-400">Faster AI Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">99.9%</div>
            <div className="text-sm text-gray-400">Platform Reliability</div>
          </div>
        </div>
      </div>
    </section>
  );
}
