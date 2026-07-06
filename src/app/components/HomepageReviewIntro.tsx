import { InfrastructureReviewCta } from './InfrastructureReviewCta';

export function HomepageReviewIntro() {
  return (
    <InfrastructureReviewCta
      title="Free 20-Minute DevOps Infrastructure Review"
      body="Get a practical review of your CI/CD, Kubernetes, Terraform, cloud security, and deployment reliability risks. Built for SaaS and AI teams that need senior DevOps guidance without large-agency complexity."
      location="homepage"
      dataLocation="homepage"
      sectionClassName="border-b border-gray-200 bg-white py-16"
      containerClassName="mx-auto max-w-5xl rounded-2xl border border-cyan-100 bg-cyan-50 px-6 py-10 text-center shadow-sm sm:px-10"
    />
  );
}
