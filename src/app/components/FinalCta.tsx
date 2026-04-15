export function FinalCta() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="final-cta" className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a stronger DevSecOps or AI platform foundation?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Whether you need a cloud review, pipeline improvements, Kubernetes hardening, infrastructure standardization, or AI platform guidance, GAX Global can help you move faster with less risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-medium"
            >
              Book a consultation
            </button>
            <a
              href="mailto:info@gax-global.com"
              className="px-8 py-4 rounded-lg border border-white/30 hover:bg-white/10 transition-colors font-medium"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
