import { useEffect } from 'react';
import { applySeo, seoBase } from '../lib/seo';
import { SupportChecklistPage } from './SupportChecklistPage';

export function KubernetesHardeningChecklistPage() {
  useEffect(() => {
    applySeo({
      title: 'Kubernetes Hardening Checklist | GAX Global',
      description:
        'Kubernetes hardening checklist for teams improving cluster security, workload controls, and production platform reliability.',
      path: '/kubernetes-hardening-checklist',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Kubernetes Hardening Checklist',
            item: `${seoBase.siteUrl}/kubernetes-hardening-checklist`,
          },
        ],
      },
    });
  }, []);

  return (
    <SupportChecklistPage
      title="Kubernetes Hardening Checklist"
      intro="Use this checklist to identify cluster and workload risks, improve policy enforcement, and raise production readiness."
      whoFor={[
        'Teams operating Kubernetes in AWS, Azure, GCP, or hybrid cloud',
        'Organizations with growing cluster complexity and inconsistent controls',
        'Engineering teams improving platform security and operational reliability',
      ]}
      sections={[
        {
          title: 'Access and identity',
          items: [
            'Review RBAC roles and remove over-privileged access.',
            'Validate service account usage and token exposure controls.',
            'Restrict administrative access paths and document break-glass procedures.',
            'Align cluster access policies with cloud IAM boundaries.',
          ],
        },
        {
          title: 'Workload and policy controls',
          items: [
            'Apply workload security context standards across namespaces.',
            'Use admission and policy enforcement to block risky configurations.',
            'Review network segmentation for critical services.',
            'Audit image sources and runtime security assumptions.',
          ],
        },
        {
          title: 'Operations and resilience',
          items: [
            'Confirm observability coverage for nodes, workloads, and control plane signals.',
            'Document backup, restore, and cluster recovery procedures.',
            'Test patching and upgrade processes with rollback safety checks.',
            'Track recurring incidents and convert findings into guardrails.',
          ],
        },
      ]}
      relatedServices={[
        { href: '/kubernetes-hardening', label: 'Kubernetes hardening' },
        { href: '/cloud-security-consulting', label: 'cloud security consulting' },
        { href: '/devsecops-services', label: 'DevSecOps services' },
      ]}
    />
  );
}
