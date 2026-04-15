import { useEffect } from 'react';
import { applySeo, seoBase } from '../lib/seo';
import { ServiceLandingPage } from './ServiceLandingPage';

export function DevsecopsServicesPage() {
  useEffect(() => {
    applySeo({
      title: 'DevSecOps Services for SaaS Teams | GAX Global',
      description:
        'DevSecOps consulting for SaaS startups and small teams. Improve security, CI/CD automation, infrastructure maturity, and release confidence.',
      path: '/devsecops-services',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'DevSecOps Services', item: `${seoBase.siteUrl}/devsecops-services` },
        ],
      },
    });
  }, []);

  return (
    <ServiceLandingPage
      title="DevSecOps Services for SaaS Startups and Growing Engineering Teams"
      intro="GAX Global provides practical DevSecOps services to help teams improve secure software delivery, platform reliability, and infrastructure operations without building a full internal platform organization."
      whoFor={[
        'SaaS teams shipping quickly with limited DevSecOps capacity',
        'Engineering teams with fragile CI/CD and manual release checks',
        'Teams needing stronger security automation and clearer controls',
        'Startups preparing for SOC 2 readiness support or HIPAA support',
      ]}
      problemsSolved={[
        'Inconsistent delivery workflows and release bottlenecks',
        'Security controls that are reactive instead of built into delivery',
        'Infrastructure drift across AWS, Azure, GCP, or hybrid cloud environments',
        'Gaps between development speed and production reliability',
      ]}
      included={[
        'Current-state DevSecOps and delivery maturity assessment',
        'CI/CD, secrets management, and GitOps workflow recommendations',
        'Infrastructure hardening priorities and policy enforcement guidance',
        'Implementation plan for security automation and release quality gates',
      ]}
      outcome="A prioritized DevSecOps plan with practical delivery improvements, implementation guidance, and clear next steps for secure, repeatable releases."
      relatedLinks={[
        { href: '/cicd-automation', label: 'CI/CD automation' },
        { href: '/kubernetes-hardening', label: 'Kubernetes hardening' },
        { href: '/cloud-security-consulting', label: 'cloud security consulting' },
        { href: '/terraform-iac', label: 'Terraform and IaC' },
      ]}
    />
  );
}
