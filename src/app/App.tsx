import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhoWeHelp } from './components/WhoWeHelp';
import { Services } from './components/Services';
import { ProblemsWeSolve } from './components/ProblemsWeSolve';
import { CapabilityPillars } from './components/CapabilityPillars';
import { WhyGaxGlobal } from './components/WhyGaxGlobal';
import { ProofOutputs } from './components/ProofOutputs';
import { FinalCta } from './components/FinalCta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { Toaster } from 'sonner';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isPrivacyPage = pathname === '/privacy-policy';
  const isTermsPage = pathname === '/terms-of-service';
  const isLegalPage = isPrivacyPage || isTermsPage;

  useEffect(() => {
    if (!isLegalPage) {
      document.title = 'GAX Global | DevSecOps, AI Infrastructure, CI/CD & Cloud Security';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          'GAX Global helps SaaS startups and small companies improve DevSecOps, AI infrastructure, CI/CD, cloud security, Kubernetes hardening, automation, and operational reliability.'
        );
      }
    }
  }, [isLegalPage]);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" richColors />
      <Header />
      {isPrivacyPage ? (
        <PrivacyPolicyPage />
      ) : isTermsPage ? (
        <TermsOfServicePage />
      ) : (
        <main>
          <Hero />
          <WhoWeHelp />
          <Services />
          <ProblemsWeSolve />
          <CapabilityPillars />
          <WhyGaxGlobal />
          <ProofOutputs />
          <FinalCta />
          <Contact />
        </main>
      )}
      <Footer />
      {!isLegalPage && <ChatAssistant />}
    </div>
  );
}
