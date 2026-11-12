import { useEffect } from 'react';
import { InquiryForm } from '../components/InquiryForm';
import { applySeo } from '../lib/seo';

export function ContactPage() {
  useEffect(() => {
    applySeo({ title: 'Contact GAX Global | Infrastructure & C2C Consulting', description: 'Discuss a cloud infrastructure, DevSecOps, Kubernetes, platform engineering, or C2C consulting requirement with GAX Global.', path: '/contact/' });
  }, []);
  return (
    <main className="bg-white pt-16">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-semibold text-blue-700">GAX Global / Contact</p><h1 className="mb-5 text-4xl font-bold text-gray-900 sm:text-5xl">Discuss your infrastructure requirement</h1><p className="text-lg leading-relaxed text-gray-600">Share the production problem, project scope, or contract requirement. GAX Global supports direct consulting engagements and works with staffing and consulting partners.</p></header>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div><h2 className="mb-4 text-2xl font-semibold text-gray-900">Start a conversation</h2><a href="mailto:info@gax-global.com" className="break-words text-lg font-semibold text-blue-700 underline">info@gax-global.com</a><p className="mt-6 text-gray-700">Recruiters and consulting companies can explore <a href="/staffing-partners/" className="text-blue-700 underline">C2C and subcontracting partnerships</a> or send their requirement here.</p><p className="mt-4 text-gray-700">For a focused technical assessment, <a href="/infrastructure-review/#book-review" className="text-blue-700 underline">book an infrastructure review</a>.</p></div>
          <InquiryForm audience="direct" />
        </div>
      </section>
    </main>
  );
}
