import { useEffect } from 'react';
import { applySeo, seoBase } from '../lib/seo';
import { ServiceLandingPage } from './ServiceLandingPage';

export function TerraformIacPage() {
  useEffect(() => {
    applySeo({
      title: 'Terraform & IaC Consulting | GAX Global',
      description:
        'Terraform consulting and infrastructure as code services to standardize environments, reduce drift, and improve cloud maintainability.',
      path: '/terraform-iac',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Terraform and IaC', item: `${seoBase.siteUrl}/terraform-iac` },
        ],
      },
    });
  }, []);

  return (
    <ServiceLandingPage
      title="Terraform Consulting and Infrastructure as Code Standardization"
      intro="GAX Global helps engineering teams standardize infrastructure as code consulting practices using Terraform, reusable module patterns, and clean environment design."
      whoFor={[
        'Teams with Terraform sprawl and inconsistent module quality',
        'Startups with environment drift between development, staging, and production',
        'Engineering teams needing more maintainable cloud infrastructure code',
        'Teams adopting IaC for reliability, auditability, and repeatability',
      ]}
      problemsSolved={[
        'Inconsistent Terraform structure and hard-to-maintain codebases',
        'Infrastructure drift and manual cloud changes',
        'Weak standards for module reuse and environment consistency',
        'Low confidence in provisioning and change management workflows',
      ]}
      included={[
        'Terraform codebase review and standardization plan',
        'Reusable module and environment pattern design',
        'IaC workflow improvements and governance recommendations',
        'Maintainability and operational handoff guidance',
      ]}
      outcome="A cleaner Terraform foundation with practical standards that reduce drift, improve consistency, and support long-term infrastructure reliability."
      relatedLinks={[
        { href: '/cloud-security-consulting', label: 'cloud security consulting' },
        { href: '/cicd-automation', label: 'CI/CD automation' },
        { href: '/devsecops-services', label: 'DevSecOps services' },
        { href: '/kubernetes-hardening', label: 'Kubernetes hardening' },
      ]}
    />
  );
}
