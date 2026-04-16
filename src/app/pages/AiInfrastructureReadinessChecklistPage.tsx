import { useEffect } from 'react';
import { applySeo, seoBase } from '../lib/seo';
import { SupportChecklistPage } from './SupportChecklistPage';

export function AiInfrastructureReadinessChecklistPage() {
  useEffect(() => {
    applySeo({
      title: 'AI Infrastructure Readiness Checklist | GAX Global',
      description:
        'AI infrastructure and LLMOps readiness checklist for teams shipping model-backed products with secure deployment and observability requirements.',
      path: '/ai-infrastructure-readiness-checklist',
      imagePath: seoBase.imagePath,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${seoBase.siteUrl}/` },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'AI Infrastructure Readiness Checklist',
            item: `${seoBase.siteUrl}/ai-infrastructure-readiness-checklist`,
          },
        ],
      },
    });
  }, []);

  return (
    <SupportChecklistPage
      title="AI Infrastructure Readiness Checklist"
      intro="Use this checklist to assess whether your platform is ready for reliable AI services, LLMOps workflows, and model/API integration in production."
      whoFor={[
        'Product teams launching AI-enabled SaaS capabilities',
        'Platform teams supporting internal AI services and model APIs',
        'Engineering leaders planning secure AI infrastructure and operations',
      ]}
      sections={[
        {
          title: 'Architecture and integration',
          items: [
            'Define where model inference runs and how requests are routed.',
            'Document model/API gateway integration patterns and fallback behavior.',
            'Set clear boundaries between application logic and model orchestration.',
            'Plan for cost controls and scaling thresholds under higher load.',
          ],
        },
        {
          title: 'Security and governance',
          items: [
            'Review access controls for model endpoints, tokens, and prompts.',
            'Define data-handling rules for sensitive and regulated information.',
            'Set environment separation standards for development and production AI workloads.',
            'Establish change control for prompts, models, and inference settings.',
          ],
        },
        {
          title: 'Reliability and observability',
          items: [
            'Track latency, error rates, token usage, and cost signals by workload.',
            'Monitor quality and drift signals where business outcomes depend on model output.',
            'Test failure paths for model timeouts, provider issues, and degraded responses.',
            'Create incident response playbooks for AI-specific service failures.',
          ],
        },
      ]}
      relatedServices={[
        { href: '/ai-infrastructure-llmops', label: 'AI infrastructure and LLMOps' },
        { href: '/cloud-security-consulting', label: 'cloud security consulting' },
        { href: '/cicd-automation', label: 'CI/CD automation' },
      ]}
    />
  );
}
