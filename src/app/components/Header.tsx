import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { getInfrastructureReviewCtaHref } from '../config/booking';
import { createBookReviewClickHandler } from '../lib/analytics';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/staffing-partners/', label: 'Staffing Partners' },
  { href: '/#why', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reviewCtaHref = getInfrastructureReviewCtaHref();
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMobileMenuOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              GAX Global
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={window.location.pathname.replace(/\/+$/, '') === link.href.replace(/\/+$/, '') ? 'page' : undefined}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={reviewCtaHref}
              data-cta="book-free-infrastructure-review"
              data-location="header"
              onClick={createBookReviewClickHandler('header')}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-700"
            >
              Book Free Infrastructure Review
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              ref={menuButton}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="xl:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href={reviewCtaHref}
              data-cta="book-free-infrastructure-review"
              data-location="header"
              onClick={createBookReviewClickHandler('header')}
              className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white"
            >
              Free Review
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
