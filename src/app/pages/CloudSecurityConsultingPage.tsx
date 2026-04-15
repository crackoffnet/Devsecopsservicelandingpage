import { useEffect } from 'react';
import { applySeo, seoBase } from '../lib/seo';
import { ServiceLandingPage } from './ServiceLandingPage';

export function CloudSecurityConsultingPage() {
  useEffect(() => {
    applySeo({
      title: 'Cloud Security Consulting | GAX Global',
      description:
        'Cloud security consulting for SaaS teams to improve infrastructure hardening, IAM controls, policy enforcement, and cloud compliance automation support.',
      path: '/cloud-security-consulting',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Cloud Security Consulting', item: `${seoBase.siteUrl}/cloud-security-consulting` },
        ],
      },
    });
  }, []);

  return (
    <ServiceLandingPage
      title="Cloud Security Consulting for Infrastructure Hardening and Risk Reduction"
      intro="We help teams strengthen cloud security consulting foundations with IAM controls, policy enforcement, and practical infrastructure hardening recommendations."
      whoFor={[
        'SaaS teams with growing cloud complexity and security overhead',
        'Engineering teams needing better IAM and access control practices',
        'Organizations improving security automation and readiness processes',
        'Teams seeking cloud compliance automation support in delivery workflows',
      ]}
      problemsSolved={[
        'Misconfiguration risk across cloud infrastructure',
        'Weak IAM boundaries and unclear access ownership',
        'Gaps in policy enforcement and visibility',
        'Slow incident response caused by limited operational security telemetry',
      ]}
      included={[
        'Cloud IAM and access control review',
        'Infrastructure hardening and policy enforcement guidance',
        'Security automation support recommendations',
        'Operational visibility and risk-priority action plan',
      ]}
      outcome="A stronger cloud security baseline with prioritized improvements that reduce risk and support secure scaling across cloud and multicloud environments."
      relatedLinks={[
        { href: '/devsecops-services', label: 'DevSecOps services' },
        { href: '/kubernetes-hardening', label: 'Kubernetes hardening' },
        { href: '/terraform-iac', label: 'Terraform and IaC' },
        { href: '/ai-infrastructure-llmops', label: 'AI infrastructure and LLMOps' },
      ]}
    />
  );
}
