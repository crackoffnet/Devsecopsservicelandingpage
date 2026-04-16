import { useEffect } from 'react';
import { applySeo, seoBase } from '../lib/seo';
import { ServiceLandingPage } from './ServiceLandingPage';

export function KubernetesHardeningPage() {
  useEffect(() => {
    applySeo({
      title: 'Kubernetes Hardening Services | GAX Global',
      description:
        'Kubernetes hardening services for SaaS teams to reduce cluster risk, strengthen platform security, and improve production readiness.',
      path: '/kubernetes-hardening',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Kubernetes Hardening', item: `${seoBase.siteUrl}/kubernetes-hardening` },
        ],
      },
    });
  }, []);

  return (
    <ServiceLandingPage
      title="Kubernetes Hardening Services for Production Platform Security"
      intro="We help teams reduce Kubernetes risk and improve production platform security with practical hardening, access controls, and operational guardrails."
      whoFor={[
        'Teams running critical workloads on Kubernetes in AWS, Azure, or GCP',
        'Organizations with cluster sprawl and inconsistent security practices',
        'Engineering teams needing stronger platform guardrails and reliability',
        'Teams preparing for higher security expectations as they scale',
      ]}
      problemsSolved={[
        'Unclear cluster access controls and excessive permissions',
        'Weak workload-level hardening and policy enforcement',
        'Configuration drift across environments',
        'Operational risk during incidents, upgrades, and scaling events',
      ]}
      included={[
        'Kubernetes access and IAM alignment review',
        'Workload and cluster hardening recommendations',
        'Policy and configuration baseline review',
        'Operational readiness guidance for safer platform operations',
      ]}
      outcome="A more secure and resilient Kubernetes platform with practical improvements that lower risk and improve production readiness."
      relatedLinks={[
        { href: '/cloud-security-consulting', label: 'cloud security consulting' },
        { href: '/devsecops-services', label: 'DevSecOps services' },
        { href: '/terraform-iac', label: 'Terraform and IaC' },
        { href: '/cicd-automation', label: 'CI/CD automation' },
        { href: '/kubernetes-hardening-checklist', label: 'Kubernetes hardening checklist' },
      ]}
    />
  );
}
