import { useEffect, useState } from 'react';
import { getInfrastructureReviewCtaHref } from '../config/booking';
import { createBookReviewClickHandler } from '../lib/analytics';

export function MobileStickyCta() {
  const [visible, setVisible] = useState(true);
  const reviewCtaHref = getInfrastructureReviewCtaHref();

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < previousScrollY || currentScrollY < 120);
      previousScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/95 px-4 py-3 shadow-2xl transition-transform duration-200 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href={reviewCtaHref}
        aria-label="Book Free Infrastructure Review on the GAX Global site"
        data-cta="book-free-infrastructure-review"
        data-location="mobile-sticky"
        onClick={createBookReviewClickHandler('mobile-sticky')}
        className="mx-auto flex max-w-sm items-center justify-center rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950"
      >
        Free Review
      </a>
    </div>
  );
}
