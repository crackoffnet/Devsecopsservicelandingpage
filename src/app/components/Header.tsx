import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { CAL_BOOKING_URL } from '../config/booking';
import { createBookReviewClickHandler } from '../lib/analytics';

const navLinks = [
  { href: '/#how-we-help', label: 'How We Help' },
  { href: '/#problems', label: 'Problems' },
  { href: '/#review', label: 'Review' },
  { href: '/#case-studies', label: 'Case Studies' },
  { href: '/#why', label: 'Why GAX' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              GAX Global
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="book-infrastructure-review"
              data-location="navbar"
              onClick={createBookReviewClickHandler('navbar')}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-700"
            >
              Book Infrastructure Review
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
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
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="book-infrastructure-review"
              data-location="navbar"
              onClick={createBookReviewClickHandler('navbar')}
              className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white"
            >
              Book Infrastructure Review
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
