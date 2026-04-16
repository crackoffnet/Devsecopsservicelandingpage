import { useEffect } from 'react';
import { applySeo, seoBase } from '../lib/seo';
import { SupportChecklistPage } from './SupportChecklistPage';

export function DevsecopsAssessmentChecklistPage() {
  useEffect(() => {
    applySeo({
      title: 'DevSecOps Assessment Checklist | GAX Global',
      description:
        'Practical DevSecOps assessment checklist for SaaS teams covering CI/CD, secrets, automation, security controls, and release reliability.',
      path: '/devsecops-assessment-checklist',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'DevSecOps Assessment Checklist',
            item: `${seoBase.siteUrl}/devsecops-assessment-checklist`,
          },
        ],
      },
    });
  }, []);

  return (
    <SupportChecklistPage
      title="DevSecOps Assessment Checklist"
      intro="Use this checklist to evaluate delivery risk, security controls, and automation maturity before planning DevSecOps consulting work."
      whoFor={[
        'SaaS startups with limited platform engineering bandwidth',
        'Teams that ship frequently but still rely on manual release controls',
        'Engineering leaders planning DevSecOps improvements for cloud-native products',
      ]}
      sections={[
        {
          title: 'CI/CD and release workflow',
          items: [
            'Document the full deployment path from commit to production.',
            'Identify manual approvals, ad hoc scripts, and release bottlenecks.',
            'Verify rollback procedures are tested and easy to run under pressure.',
            'Confirm release quality gates are consistent across environments.',
          ],
        },
        {
          title: 'Security controls and secrets',
          items: [
            'Review secrets management across pipelines and runtime environments.',
            'Check for least-privilege access on CI/CD and deployment credentials.',
            'Validate branch protection, artifact integrity, and dependency controls.',
            'Map security checks to each stage of software delivery.',
          ],
        },
        {
          title: 'Infrastructure and operations',
          items: [
            'Assess environment consistency across development, staging, and production.',
            'Review observability coverage for deployment and runtime incidents.',
            'Identify high-risk infrastructure drift and policy enforcement gaps.',
            'Prioritize top operational risks with owners and target timelines.',
          ],
        },
      ]}
      relatedServices={[
        { href: '/devsecops-services', label: 'DevSecOps services' },
        { href: '/cicd-automation', label: 'CI/CD automation' },
        { href: '/cloud-security-consulting', label: 'cloud security consulting' },
      ]}
    />
  );
}
