import { useEffect } from 'react';
import { applySeo, seoBase } from '../lib/seo';
import { ServiceLandingPage } from './ServiceLandingPage';

export function AiInfrastructureLlmopsPage() {
  useEffect(() => {
    applySeo({
      title: 'AI Infrastructure & LLMOps Consulting | GAX Global',
      description:
        'AI infrastructure consulting and LLMOps support for SaaS teams building secure, scalable, observable AI platforms and model-backed products.',
      path: '/ai-infrastructure-llmops',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'AI Infrastructure and LLMOps', item: `${seoBase.siteUrl}/ai-infrastructure-llmops` },
        ],
      },
    });
  }, []);

  return (
    <ServiceLandingPage
      title="AI Infrastructure and LLMOps Consulting for Product and Platform Teams"
      intro="We help teams build AI platform engineering foundations for model-backed applications, internal AI services, and secure AI deployment workflows across cloud and multicloud environments."
      whoFor={[
        'Teams building AI-enabled SaaS products with real production workloads',
        'Engineering leaders needing safer AI release workflows and operations',
        'Teams integrating external model APIs and internal model services',
        'Organizations needing governance, observability, and operational guardrails',
      ]}
      problemsSolved={[
        'AI features shipped without reliable platform standards',
        'Unclear model/API gateway integration and runtime boundaries',
        'Limited observability for AI workloads and inference reliability',
        'Weak environment design for secure AI deployment workflows',
      ]}
      included={[
        'AI infrastructure architecture and environment design support',
        'Model/API gateway integration patterns and deployment workflows',
        'Observability setup guidance for AI services and model-backed APIs',
        'Governance controls and operational readiness recommendations',
      ]}
      outcome="A safer and more scalable AI infrastructure baseline with clear implementation direction for LLMOps, deployment, and long-term platform maintainability."
      relatedLinks={[
        { href: '/devsecops-services', label: 'DevSecOps services' },
        { href: '/cicd-automation', label: 'CI/CD automation' },
        { href: '/cloud-security-consulting', label: 'cloud security consulting' },
        { href: '/kubernetes-hardening', label: 'Kubernetes hardening' },
        { href: '/ai-infrastructure-readiness-checklist', label: 'AI infrastructure readiness checklist' },
      ]}
    />
  );
}
