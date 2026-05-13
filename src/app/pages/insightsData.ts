export type Insight = {
  slug: string;
  title: string;
  description: string;
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
};

export const insights: Insight[] = [
  {
    slug: 'ai-llm-infrastructure-production-load',
    title: 'Why AI/LLM infrastructure becomes unstable under production load',
    description:
      'Production AI systems fail differently than prototypes because model calls, gateways, retries, token usage, latency, and observability all become part of the reliability path.',
    sections: [
      {
        heading: 'Prototype patterns do not absorb customer pressure',
        body: 'Early AI features often work well in controlled demos because traffic is predictable and failure paths are acceptable. In production, the same architecture must handle concurrency, rate limits, timeouts, provider variability, cost controls, and degraded dependencies.',
      },
      {
        heading: 'Common failure points',
        body: 'The risks usually sit around integration and operations rather than the model alone.',
        bullets: [
          'No clear gateway pattern for model routing, retries, and fallback behavior',
          'Weak visibility into latency, error rates, token usage, and request cost',
          'Synchronous workflows that block user-facing paths when model calls slow down',
          'Limited load testing around real prompts, payload sizes, and provider limits',
        ],
      },
      {
        heading: 'What to improve first',
        body: 'Start with the AI request path: gateway behavior, timeout policy, rate-limit handling, observability, and fallback design. These fixes reduce production risk before larger platform investments are needed.',
      },
    ],
  },
  {
    slug: 'hidden-kubernetes-risks-growing-saas-teams-miss',
    title: 'Hidden Kubernetes risks growing SaaS teams miss',
    description:
      'Growing SaaS teams often inherit Kubernetes risk through access drift, weak workload boundaries, noisy deployments, and operational practices that lag behind scale.',
    sections: [
      {
        heading: 'Kubernetes risk compounds quietly',
        body: 'Clusters can keep serving traffic while access, configuration, and deployment practices drift. That makes risk easy to miss until a customer incident, audit, or scaling event forces a review.',
      },
      {
        heading: 'Risk areas to inspect',
        body: 'A practical Kubernetes assessment should focus on the controls that affect reliability and blast radius.',
        bullets: [
          'RBAC and service account permissions that are broader than workloads require',
          'Namespace and network boundaries that do not match production trust zones',
          'Deployment patterns with weak rollout checks or rollback confidence',
          'Missing resource limits, noisy alerts, and unclear ownership for platform operations',
        ],
      },
      {
        heading: 'What good looks like',
        body: 'The goal is not maximum complexity. It is a cluster operating model with understandable access, predictable releases, useful observability, and guardrails your team can maintain.',
      },
    ],
  },
  {
    slug: 'cicd-reliability-problems-slow-engineering-teams',
    title: 'CI/CD reliability problems that slow down engineering teams',
    description:
      'CI/CD problems become business problems when releases require manual recovery, unclear promotion, fragile secrets, slow feedback, or inconsistent rollback paths.',
    sections: [
      {
        heading: 'Delivery friction hides inside normal workflow',
        body: 'A pipeline can be automated and still unreliable. The warning signs are frequent reruns, unclear failure ownership, manual release approvals without strong signal, and environments that do not behave consistently.',
      },
      {
        heading: 'Signals worth reviewing',
        body: 'A DevOps audit should inspect the parts of delivery that affect engineering throughput and production safety.',
        bullets: [
          'Slow feedback loops that delay pull request confidence',
          'Environment drift between development, staging, and production',
          'Rollback plans that depend on tribal knowledge',
          'Security and policy checks that are inconsistent or easy to bypass',
        ],
      },
      {
        heading: 'Where to focus fixes',
        body: 'The best first improvements are usually release promotion, rollback readiness, secret handling, quality gates, and GitOps controls that make deployment state easier to reason about.',
      },
    ],
  },
  {
    slug: 'cloud-cost-spikes-weak-platform-architecture',
    title: 'Why cloud costs spike when platform architecture is weak',
    description:
      'Cloud cost spikes often come from weak platform architecture: duplicated traffic paths, missing limits, poor scaling signals, and observability gaps.',
    sections: [
      {
        heading: 'Cost issues are often architecture issues',
        body: 'Teams often notice cloud cost when the bill changes, but the cause may be buried in traffic flow, scaling policy, observability gaps, or duplicated infrastructure patterns.',
      },
      {
        heading: 'Common cost drivers',
        body: 'Cost optimization works best when it starts with how the platform behaves in production.',
        bullets: [
          'Autoscaling policies that react late or scale the wrong layer',
          'Duplicated data movement, logging, or cross-zone traffic',
          'No clear per-service cost attribution for growing workloads',
          'Overprovisioned Kubernetes workloads and unmanaged background jobs',
        ],
      },
      {
        heading: 'How to reduce waste without adding fragility',
        body: 'Cost work should preserve reliability. Start with visibility, traffic paths, scaling limits, and capacity signals before cutting resources that may be protecting production.',
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
