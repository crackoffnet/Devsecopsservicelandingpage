import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { HowWeHelp } from './components/HowWeHelp';
import { WhoWeHelp } from './components/WhoWeHelp';
import { ProblemsWeSolve } from './components/ProblemsWeSolve';
import { ProductionAiInfrastructureReview } from './components/ProductionAiInfrastructureReview';
import { CaseStudies } from './components/CaseStudies';
import { WhyGaxGlobal } from './components/WhyGaxGlobal';
import { FinalCta } from './components/FinalCta';
import { MobileStickyCta } from './components/MobileStickyCta';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { DevsecopsServicesPage } from './pages/DevsecopsServicesPage';
import { AiInfrastructureLlmopsPage } from './pages/AiInfrastructureLlmopsPage';
import { CicdAutomationPage } from './pages/CicdAutomationPage';
import { KubernetesHardeningPage } from './pages/KubernetesHardeningPage';
import { TerraformIacPage } from './pages/TerraformIacPage';
import { CloudSecurityConsultingPage } from './pages/CloudSecurityConsultingPage';
import { DevsecopsAssessmentChecklistPage } from './pages/DevsecopsAssessmentChecklistPage';
import { AiInfrastructureReadinessChecklistPage } from './pages/AiInfrastructureReadinessChecklistPage';
import { CicdSecurityChecklistPage } from './pages/CicdSecurityChecklistPage';
import { KubernetesHardeningChecklistPage } from './pages/KubernetesHardeningChecklistPage';
import { applySeo, seoBase } from './lib/seo';
import { initEngagementTracking, initMicrosoftClarity, initScrollDepthTracking } from './lib/analytics';

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isPrivacyPage = pathname === '/privacy-policy';
  const isTermsPage = pathname === '/terms-of-service';
  const isDevsecopsServicesPage = pathname === '/devsecops-services';
  const isAiInfrastructurePage = pathname === '/ai-infrastructure-llmops';
  const isCicdAutomationPage = pathname === '/cicd-automation';
  const isKubernetesHardeningPage = pathname === '/kubernetes-hardening';
  const isTerraformIacPage = pathname === '/terraform-iac';
  const isCloudSecurityConsultingPage = pathname === '/cloud-security-consulting';
  const isDevsecopsChecklistPage = pathname === '/devsecops-assessment-checklist';
  const isAiChecklistPage = pathname === '/ai-infrastructure-readiness-checklist';
  const isCicdChecklistPage = pathname === '/cicd-security-checklist';
  const isKubernetesChecklistPage = pathname === '/kubernetes-hardening-checklist';
  const isLegalPage = isPrivacyPage || isTermsPage;
  const isServicePage =
    isDevsecopsServicesPage ||
    isAiInfrastructurePage ||
    isCicdAutomationPage ||
    isKubernetesHardeningPage ||
    isTerraformIacPage ||
    isCloudSecurityConsultingPage;
  const isSupportPage =
    isDevsecopsChecklistPage ||
    isAiChecklistPage ||
    isCicdChecklistPage ||
    isKubernetesChecklistPage;

  useEffect(() => {
    if (!isLegalPage && !isServicePage && !isSupportPage) {
      applySeo({
        title: 'GAX Global | AI Infrastructure, DevSecOps & Platform Reliability',
        description:
          'GAX Global helps SaaS and AI teams stabilize AI/LLM platforms, Kubernetes, CI/CD, cloud infrastructure, and production systems before outages and cost spikes become expensive.',
        ogTitle: 'GAX Global | AI Infrastructure & Platform Reliability Consulting',
        ogDescription:
          'DevSecOps, Kubernetes, AI/LLM infrastructure, CI/CD, cloud security, compliance, and production reliability consulting for SaaS and AI teams.',
        path: '/',
        imagePath: seoBase.imagePath,
        structuredData: [
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'GAX Global',
            url: seoBase.siteUrl,
            logo: `${seoBase.siteUrl}/favicon.svg`,
            sameAs: ['https://linkedin.com/company/gax-global'],
            email: 'info@gax-global.com',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'GAX Global',
            url: seoBase.siteUrl,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'GAX Global',
            url: seoBase.siteUrl,
            email: 'info@gax-global.com',
            serviceType: [
              'DevSecOps consulting',
              'AI infrastructure consulting',
              'LLM platform consulting',
              'Azure OpenAI consulting',
              'APIM consulting',
              'CI/CD automation services',
              'Cloud security consulting',
              'Kubernetes hardening',
              'Infrastructure as code consulting',
            ],
          },
        ],
      });
    }
  }, [isLegalPage, isServicePage, isSupportPage]);

  useEffect(() => {
    initMicrosoftClarity();
    const cleanupScrollDepth = initScrollDepthTracking();
    const cleanupEngagement = initEngagementTracking();

    return () => {
      cleanupScrollDepth();
      cleanupEngagement();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" richColors />
      <Header />
      {isPrivacyPage ? (
        <PrivacyPolicyPage />
      ) : isTermsPage ? (
        <TermsOfServicePage />
      ) : isDevsecopsServicesPage ? (
        <DevsecopsServicesPage />
      ) : isAiInfrastructurePage ? (
        <AiInfrastructureLlmopsPage />
      ) : isCicdAutomationPage ? (
        <CicdAutomationPage />
      ) : isKubernetesHardeningPage ? (
        <KubernetesHardeningPage />
      ) : isTerraformIacPage ? (
        <TerraformIacPage />
      ) : isCloudSecurityConsultingPage ? (
        <CloudSecurityConsultingPage />
      ) : isDevsecopsChecklistPage ? (
        <DevsecopsAssessmentChecklistPage />
      ) : isAiChecklistPage ? (
        <AiInfrastructureReadinessChecklistPage />
      ) : isCicdChecklistPage ? (
        <CicdSecurityChecklistPage />
      ) : isKubernetesChecklistPage ? (
        <KubernetesHardeningChecklistPage />
      ) : (
        <main>
          <Hero />
          <TrustStrip />
          <HowWeHelp />
          <ProblemsWeSolve />
          <ProductionAiInfrastructureReview />
          <CaseStudies />
          <WhyGaxGlobal />
          <WhoWeHelp />
          <FinalCta />
          <MobileStickyCta />
        </main>
      )}
      <Footer />
    </div>
  );
}
