import { useEffect } from 'react';
import { applySeo, seoBase } from '../lib/seo';
import { ServiceLandingPage } from './ServiceLandingPage';

export function CicdAutomationPage() {
  useEffect(() => {
    applySeo({
      title: 'CI/CD Automation Services | GAX Global',
      description:
        'CI/CD automation services to improve secure software delivery, release automation, secrets management, and deployment reliability for SaaS teams.',
      path: '/cicd-automation',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'CI/CD Automation', item: `${seoBase.siteUrl}/cicd-automation` },
        ],
      },
    });
  }, []);

  return (
    <ServiceLandingPage
      title="CI/CD Automation Services for Secure, Repeatable Software Delivery"
      intro="GAX Global helps teams reduce release friction and improve confidence with CI/CD automation services built for secure software delivery and operational reliability."
      whoFor={[
        'Teams with fragile pipelines and manual release steps',
        'Startups scaling deployments across multiple environments',
        'Engineering teams with inconsistent secrets and environment handling',
        'Teams needing stronger rollback, release automation, and delivery controls',
      ]}
      problemsSolved={[
        'Pipeline failures and slow release cycles',
        'Weak deployment safeguards and inconsistent promotion workflows',
        'Security gaps in CI/CD and secrets management practices',
        'Low release confidence during production changes',
      ]}
      included={[
        'Pipeline remediation and workflow restructuring',
        'Secrets management and environment control improvements',
        'Release automation, approval gates, and rollback safeguards',
        'Implementation guidance for stable, secure delivery pipelines',
      ]}
      outcome="A cleaner, more secure CI/CD workflow with practical improvements that reduce delivery risk and improve release consistency."
      relatedLinks={[
        { href: '/devsecops-services', label: 'DevSecOps services' },
        { href: '/terraform-iac', label: 'Terraform and IaC' },
        { href: '/kubernetes-hardening', label: 'Kubernetes hardening' },
        { href: '/cloud-security-consulting', label: 'cloud security consulting' },
      ]}
    />
  );
}
