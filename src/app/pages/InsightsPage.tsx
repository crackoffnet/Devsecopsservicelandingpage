import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { InfrastructureReviewCta } from '../components/InfrastructureReviewCta';
import { applySeo, seoBase } from '../lib/seo';
import { insights } from './insightsData';

export function InsightsPage() {
  useEffect(() => {
    applySeo({
      title: 'Infrastructure Reliability Insights for AI and SaaS Teams | GAX Global',
      description:
        'Practical insights on AI infrastructure reliability, Kubernetes risk, CI/CD reliability, cloud cost spikes, DevSecOps, and platform operations.',
      path: '/insights/',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Insights', item: `${seoBase.siteUrl}/insights/` },
        ],
      },
    });
  }, []);

  return (
    <main className="bg-white pt-24">
      <section className="border-b border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
            Insights
          </p>
          <h1 className="mb-5 max-w-4xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Practical infrastructure guidance for AI and SaaS teams
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
            Production-focused writing on AI infrastructure, Kubernetes, CI/CD, cloud cost, DevSecOps, and platform reliability for engineering leaders making real tradeoffs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {insights.map((insight) => (
            <article key={insight.slug} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-cyan-200">
              <h2 className="mb-3 text-2xl font-semibold text-gray-900">
                <a href={`/insights/${insight.slug}/`} className="hover:text-blue-700">
                  {insight.title}
                </a>
              </h2>
              <p className="mb-5 text-gray-600">{insight.description}</p>
              <a href={`/insights/${insight.slug}/`} className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800">
                Read insight
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>
      <InfrastructureReviewCta
        location="insights"
        dataLocation="insights-footer"
        sectionClassName="border-t border-gray-200 bg-gray-50 py-16"
      />
    </main>
  );
}
