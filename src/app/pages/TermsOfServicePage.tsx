import { useEffect } from 'react';

export function TermsOfServicePage() {
  useEffect(() => {
    document.title = 'Terms of Service | GAX Global';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Read the GAX Global Terms of Service governing use of the website and related communications and services.'
      );
    }
  }, []);

  return (
    <main className="pt-24 pb-16 bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Terms of Service</h1>
          <p className="text-gray-600">Last updated: April 15, 2026</p>
        </header>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p>
            These Terms of Service ("Terms") govern your use of the GAX Global website and any related communications or services provided by GAX Global ("we," "our," or "us").
          </p>
          <p>By accessing or using this website, you agree to these Terms.</p>

          <section aria-labelledby="terms-1">
            <h2 id="terms-1" className="text-2xl font-semibold text-gray-900 mb-3">1. Use of Website</h2>
            <p>You may use this website only for lawful purposes and in accordance with these Terms.</p>
            <p className="mt-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Use the website in any way that violates applicable law or regulation</li>
              <li>Attempt to gain unauthorized access to systems, servers, or data</li>
              <li>Interfere with the website's operation or security</li>
              <li>Copy, scrape, reproduce, or exploit website content for unauthorized commercial purposes</li>
              <li>Submit false, misleading, or harmful information through contact forms or communications</li>
            </ul>
          </section>

          <section aria-labelledby="terms-2">
            <h2 id="terms-2" className="text-2xl font-semibold text-gray-900 mb-3">2. Services</h2>
            <p>
              Information on this website is provided for general informational and business development purposes only.
            </p>
            <p className="mt-3">
              Any consulting, implementation, advisory, technical, or managed services provided by GAX Global are subject to separate written agreements, proposals, statements of work, or service terms where applicable.
            </p>
            <p className="mt-3">
              Nothing on this website creates a client relationship unless expressly agreed in writing.
            </p>
          </section>

          <section aria-labelledby="terms-3">
            <h2 id="terms-3" className="text-2xl font-semibold text-gray-900 mb-3">3. No Warranty</h2>
            <p>The website and its content are provided on an "as is" and "as available" basis.</p>
            <p className="mt-3">
              We make no warranties, express or implied, including without limitation any warranties of merchantability, fitness for a particular purpose, non-infringement, availability, accuracy, or uninterrupted operation.
            </p>
          </section>

          <section aria-labelledby="terms-4">
            <h2 id="terms-4" className="text-2xl font-semibold text-gray-900 mb-3">4. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, GAX Global shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages arising out of or related to your use of the website.
            </p>
            <p className="mt-3">
              To the fullest extent permitted by law, our total liability arising out of or related to the website shall not exceed the amount, if any, you paid to use the website.
            </p>
          </section>

          <section aria-labelledby="terms-5">
            <h2 id="terms-5" className="text-2xl font-semibold text-gray-900 mb-3">5. Intellectual Property</h2>
            <p>
              All website content, including text, branding, logos, graphics, layout, and original materials, is owned by or licensed to GAX Global unless otherwise stated.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, modify, publish, or create derivative works from the website content without prior written permission.
            </p>
          </section>

          <section aria-labelledby="terms-6">
            <h2 id="terms-6" className="text-2xl font-semibold text-gray-900 mb-3">6. Third-Party Services and Links</h2>
            <p>
              This website may include links to third-party websites, tools, scheduling systems, or social platforms. We do not control and are not responsible for third-party content, services, or practices.
            </p>
          </section>

          <section aria-labelledby="terms-7">
            <h2 id="terms-7" className="text-2xl font-semibold text-gray-900 mb-3">7. Confidentiality of Website Submissions</h2>
            <p>
              Unless covered by a separate written confidentiality or non-disclosure agreement, information submitted through the website or by general email should not be considered confidential.
            </p>
            <p className="mt-3">
              Do not submit sensitive credentials, secrets, regulated personal data, or other highly confidential information through public website forms.
            </p>
          </section>

          <section aria-labelledby="terms-8">
            <h2 id="terms-8" className="text-2xl font-semibold text-gray-900 mb-3">8. Acceptable Communications</h2>
            <p>
              If you contact us, you agree that the information you provide is accurate and that your inquiry does not contain unlawful, malicious, infringing, or harmful material.
            </p>
          </section>

          <section aria-labelledby="terms-9">
            <h2 id="terms-9" className="text-2xl font-semibold text-gray-900 mb-3">9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless GAX Global from and against claims, liabilities, damages, losses, and expenses arising from your misuse of the website or violation of these Terms.
            </p>
          </section>

          <section aria-labelledby="terms-10">
            <h2 id="terms-10" className="text-2xl font-semibold text-gray-900 mb-3">10. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Updated Terms will be posted on this page with the revised effective date.
            </p>
          </section>

          <section aria-labelledby="terms-11">
            <h2 id="terms-11" className="text-2xl font-semibold text-gray-900 mb-3">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the applicable laws of the jurisdiction in which GAX Global operates, without regard to conflict of law principles.
            </p>
          </section>

          <section aria-labelledby="terms-12">
            <h2 id="terms-12" className="text-2xl font-semibold text-gray-900 mb-3">12. Contact</h2>
            <p>If you have questions about these Terms, contact:</p>
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
