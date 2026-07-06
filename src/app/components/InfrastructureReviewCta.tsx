import { ArrowRight } from 'lucide-react';
import { getInfrastructureReviewCtaHref, INFRASTRUCTURE_REVIEW_CTA_PATH } from '../config/booking';
import { createBookReviewClickHandler, type CtaLocation } from '../lib/analytics';

type InfrastructureReviewCtaProps = {
  title?: string;
  body?: string;
  buttonText?: string;
  href?: string;
  location: CtaLocation;
  dataLocation: string;
  sectionClassName?: string;
  containerClassName?: string;
};

const defaultTitle = 'Not sure where your infrastructure risks are?';
const defaultBody =
  'Book a free 30-minute review and get practical next steps for CI/CD, Kubernetes, cloud security, Terraform/IaC, and platform reliability.';
const defaultButtonText = 'Book Free Infrastructure Review';

export function InfrastructureReviewCta({
  title = defaultTitle,
  body = defaultBody,
  buttonText = defaultButtonText,
  href = INFRASTRUCTURE_REVIEW_CTA_PATH,
  location,
  dataLocation,
  sectionClassName = 'bg-gradient-to-r from-gray-900 to-blue-900 py-20 text-white',
  containerClassName = 'mx-auto max-w-4xl text-center',
}: InfrastructureReviewCtaProps) {
  const resolvedHref = href === INFRASTRUCTURE_REVIEW_CTA_PATH ? getInfrastructureReviewCtaHref() : href;
  const isExternal = resolvedHref.startsWith('http');

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={containerClassName}>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mb-8 text-lg text-blue-100">{body}</p>
          <a
            href={resolvedHref}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            data-cta="book-free-infrastructure-review"
            data-location={dataLocation}
            onClick={createBookReviewClickHandler(location)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            <span>{buttonText}</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
