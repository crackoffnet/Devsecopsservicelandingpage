import { useEffect } from 'react';
import { applySeo, seoBase } from '../lib/seo';
import { SupportChecklistPage } from './SupportChecklistPage';

export function CicdSecurityChecklistPage() {
  useEffect(() => {
    applySeo({
      title: 'CI/CD Security Checklist | GAX Global',
      description:
        'CI/CD security checklist for engineering teams improving release automation, secrets management, and secure software delivery controls.',
      path: '/cicd-security-checklist',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'CI/CD Security Checklist',
            item: `${seoBase.siteUrl}/cicd-security-checklist`,
          },
        ],
      },
    });
  }, []);

  return (
    <SupportChecklistPage
      title="CI/CD Security Checklist"
      intro="Use this checklist to reduce release risk and improve secure software delivery across build, test, and deployment workflows."
      whoFor={[
        'Teams with pipeline failures, inconsistent releases, or manual overrides',
        'Startups scaling CI/CD across multiple services and environments',
        'Engineering teams strengthening security automation in delivery workflows',
      ]}
      sections={[
        {
          title: 'Pipeline governance',
          items: [
            'Enforce branch protections, review requirements, and signed commits where practical.',
            'Standardize CI/CD templates to reduce one-off pipeline drift.',
            'Require explicit approvals for high-risk production changes.',
            'Audit who can edit pipeline definitions and deployment controls.',
          ],
        },
        {
          title: 'Build and artifact security',
          items: [
            'Run dependency and container image scanning in CI.',
            'Use immutable artifacts with clear provenance and retention rules.',
            'Restrict artifact promotion to approved workflows only.',
            'Track failed security checks and prevent silent bypasses.',
          ],
        },
        {
          title: 'Deployments and rollback',
          items: [
            'Standardize deployment strategies and environment promotion rules.',
            'Confirm rollback procedures are rehearsed and documented.',
            'Alert on failed deploys, rollback events, and post-deploy errors.',
            'Measure deployment lead time and failure rate for ongoing improvement.',
          ],
        },
      ]}
      relatedServices={[
        { href: '/cicd-automation', label: 'CI/CD automation' },
        { href: '/devsecops-services', label: 'DevSecOps services' },
        { href: '/terraform-iac', label: 'Terraform and IaC' },
      ]}
    />
  );
}
