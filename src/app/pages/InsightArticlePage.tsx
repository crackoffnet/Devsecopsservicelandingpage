import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { CAL_BOOKING_URL } from '../config/booking';
import { createBookReviewClickHandler } from '../lib/analytics';
import { applySeo, seoBase } from '../lib/seo';
import { getInsight } from './insightsData';

type InsightArticlePageProps = {
  slug: string;
};

export function InsightArticlePage({ slug }: InsightArticlePageProps) {
  const insight = getInsight(slug);

  useEffect(() => {
    if (!insight) return;
    applySeo({
      title: `${insight.title} | GAX Global`,
      description: insight.description,
      path: `/insights/${slug}`,
      type: 'article',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: insight.title,
        description: insight.description,
        author: { '@type': 'Organization', name: 'GAX Global' },
        publisher: { '@type': 'Organization', name: 'GAX Global', logo: { '@type': 'ImageObject', url: `${seoBase.siteUrl}/favicon.svg` } },
        mainEntityOfPage: `${seoBase.siteUrl}/insights/${slug}`,
      },
    });
  }, [insight, slug]);

  if (!insight) {
    return (
      <main className="bg-white pt-24">
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Insight not found</h1>
          <p className="mb-6 text-gray-600">The requested insight is not available.</p>
          <a href="/insights" className="font-semibold text-blue-700 hover:text-blue-800">Back to insights</a>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white pt-24">
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <a href="/insights" className="mb-8 inline-block font-semibold text-blue-700 hover:text-blue-800">
          Back to insights
        </a>
        <header className="mb-10">
          <p className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">Infrastructure Insight</p>
          <h1 className="mb-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">{insight.title}</h1>
          <p className="text-lg leading-relaxed text-gray-600">{insight.description}</p>
        </header>

        <div className="space-y-10">
          {insight.sections.map((section) => (
            <section key={section.heading} aria-labelledby={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
              <h2 id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="mb-3 text-2xl font-semibold text-gray-900">
                {section.heading}
              </h2>
              <p className="leading-relaxed text-gray-700">{section.body}</p>
              {section.bullets ? (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <aside className="mt-12 rounded-xl border border-cyan-200 bg-cyan-50 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">Need a production risk review?</h2>
          <p className="mb-5 text-gray-700">
            GAX Global helps AI and SaaS teams review infrastructure risk, prioritize practical fixes, and support implementation.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="book-infrastructure-review"
              data-location="review"
              onClick={createBookReviewClickHandler('review')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Book Infrastructure Review
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/services" className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-5 py-3 font-semibold text-blue-700 transition-colors hover:bg-white">
              View services
            </a>
          </div>
        </aside>
      </article>
    </main>
  );
}
