import { useEffect } from 'react';
import { applySeo, seoBase } from '../lib/seo';

export function PrivacyPolicyPage() {
  useEffect(() => {
    applySeo({
      title: 'Privacy Policy | GAX Global',
      description:
        'Privacy Policy for GAX Global covering how information is collected, used, disclosed, and protected through this website and related communications.',
      path: '/privacy-policy',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${seoBase.siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Privacy Policy',
            item: `${seoBase.siteUrl}/privacy-policy`,
          },
        ],
      },
    });
  }, []);

  return (
    <main className="pt-24 pb-16 bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-700 mb-3">
            This policy explains how GAX Global handles information collected through this website and related communications.
          </p>
          <p className="text-gray-600">Last updated: April 15, 2026</p>
        </header>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p>
            GAX Global ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, contact us, or use our services.
          </p>

          <section aria-labelledby="privacy-1">
            <h2 id="privacy-1" className="text-2xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Information you provide directly</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Phone number, if you choose to provide it</li>
              <li>Project details, technical requirements, or other information you submit through contact forms, email, or consultation requests</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Information collected automatically</h3>
            <p>When you visit our website, we may automatically collect limited technical data such as:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Referring pages</li>
              <li>Pages visited</li>
              <li>Date and time of access</li>
              <li>Basic usage and analytics data</li>
            </ul>
          </section>

          <section aria-labelledby="privacy-2">
            <h2 id="privacy-2" className="text-2xl font-semibold text-gray-900 mb-3">2. How We Use Information</h2>
            <p>We may use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Respond to inquiries and consultation requests</li>
              <li>Communicate with you about services, projects, or support</li>
              <li>Provide, operate, and improve our website and services</li>
              <li>Analyze website performance and usage</li>
              <li>Maintain security and prevent abuse or unauthorized access</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section aria-labelledby="privacy-3">
            <h2 id="privacy-3" className="text-2xl font-semibold text-gray-900 mb-3">3. Cookies and Analytics</h2>
            <p>
              Our website may use cookies or similar technologies for basic functionality, analytics, performance measurement, and security.
            </p>
            <p className="mt-3">
              You may be able to control cookies through your browser settings. Disabling cookies may affect some website functionality.
            </p>
          </section>

          <section aria-labelledby="privacy-4">
            <h2 id="privacy-4" className="text-2xl font-semibold text-gray-900 mb-3">4. How We Share Information</h2>
            <p>We do not sell your personal information.</p>
            <p className="mt-3">We may share information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>With service providers who help operate the website, communications, analytics, scheduling, or hosting</li>
              <li>When required by law, regulation, legal process, or governmental request</li>
              <li>To protect our rights, security, systems, users, or business operations</li>
              <li>In connection with a business transfer, merger, acquisition, or asset sale</li>
            </ul>
          </section>

          <section aria-labelledby="privacy-5">
            <h2 id="privacy-5" className="text-2xl font-semibold text-gray-900 mb-3">5. Data Security</h2>
            <p>
              We take reasonable administrative, technical, and organizational measures to help protect information against unauthorized access, loss, misuse, or disclosure.
            </p>
            <p className="mt-3">
              However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section aria-labelledby="privacy-6">
            <h2 id="privacy-6" className="text-2xl font-semibold text-gray-900 mb-3">6. Data Retention</h2>
            <p>
              We retain information only for as long as reasonably necessary for business, legal, operational, or security purposes.
            </p>
          </section>

          <section aria-labelledby="privacy-7">
            <h2 id="privacy-7" className="text-2xl font-semibold text-gray-900 mb-3">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or platforms, such as LinkedIn or scheduling tools. We are not responsible for the privacy practices or content of third-party sites.
            </p>
          </section>

          <section aria-labelledby="privacy-8">
            <h2 id="privacy-8" className="text-2xl font-semibold text-gray-900 mb-3">8. Your Choices</h2>
            <p>You may contact us to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Request access to personal information you have submitted</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of information, where applicable</li>
              <li>Opt out of non-essential communications</li>
            </ul>
            <p className="mt-3">
              We may retain certain information where required for legal, security, or legitimate business reasons.
            </p>
          </section>

          <section aria-labelledby="privacy-9">
            <h2 id="privacy-9" className="text-2xl font-semibold text-gray-900 mb-3">9. International Visitors</h2>
            <p>
              If you access our website from outside the country where our services are operated, your information may be processed in jurisdictions with different data protection laws.
            </p>
          </section>

          <section aria-labelledby="privacy-10">
            <h2 id="privacy-10" className="text-2xl font-semibold text-gray-900 mb-3">10. Children's Privacy</h2>
            <p>
              Our website and services are intended for business and professional use and are not directed to children under 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section aria-labelledby="privacy-11">
            <h2 id="privacy-11" className="text-2xl font-semibold text-gray-900 mb-3">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date.
            </p>
          </section>

          <section aria-labelledby="privacy-12">
            <h2 id="privacy-12" className="text-2xl font-semibold text-gray-900 mb-3">12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, you can contact us at:</p>
            <p className="mt-3">
              <strong>GAX Global</strong>
              <br />
              Email: <strong>info@gax-global.com</strong>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
