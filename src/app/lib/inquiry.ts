export const engagementTypes = ['C2C', 'Subcontracting', 'Direct Consulting', 'Other'] as const;
export const workArrangements = ['Remote', 'Hybrid', 'Onsite'] as const;

export type InquiryData = {
  name: string;
  email: string;
  company: string;
  engagementType: string;
  specialization: string;
  workArrangement: string;
  duration: string;
  description: string;
  website: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryData, string>>;

export function createInquiry(engagementType = ''): InquiryData {
  return { name: '', email: '', company: '', engagementType, specialization: '', workArrangement: '', duration: '', description: '', website: '' };
}

export function validateInquiry(data: InquiryData): InquiryErrors {
  const errors: InquiryErrors = {};
  const textFields = [
    ['name', 'Enter your full name.', 2, 100],
    ['company', 'Enter your company name.', 2, 160],
    ['specialization', 'Describe the technical specialization needed.', 3, 300],
    ['duration', 'Enter the expected duration or say it is to be confirmed.', 2, 100],
    ['description', 'Describe the requirement in at least 30 characters.', 30, 4000],
  ] as const;
  for (const [field, message, min, max] of textFields) {
    const value = data[field].trim();
    if (value.length < min || value.length > max) errors[field] = value.length > max ? `Use ${max} characters or fewer.` : message;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()) || data.email.length > 254) {
    errors.email = 'Enter a valid business email address.';
  }
  if (!engagementTypes.some((value) => value === data.engagementType)) errors.engagementType = 'Select an engagement type.';
  if (!workArrangements.some((value) => value === data.workArrangement)) errors.workArrangement = 'Select a work arrangement.';
  return errors;
}

export function inquiryMessage(data: InquiryData) {
  return [
    `Name: ${data.name.trim()}`, `Business email: ${data.email.trim()}`, `Company: ${data.company.trim()}`,
    `Engagement: ${data.engagementType}`, `Specialization: ${data.specialization.trim()}`,
    `Work arrangement: ${data.workArrangement}`, `Expected duration: ${data.duration.trim()}`,
    '', 'Requirement:', data.description.trim(),
  ].join('\n');
}

export function inquiryEmailHref(data: InquiryData) {
  return `mailto:info@gax-global.com?subject=${encodeURIComponent(`GAX Global inquiry - ${data.engagementType}`)}&body=${encodeURIComponent(inquiryMessage(data))}`;
}

export function inquiryTemplateParams(data: InquiryData) {
  return {
    from_name: data.name.trim(), from_email: data.email.trim(), reply_to: data.email.trim(),
    company: data.company.trim(), project_type: data.engagementType,
    cloud_stack: data.specialization.trim(), budget: 'To be discussed', timeline: data.duration.trim(),
    engagement_type: data.engagementType, specialization: data.specialization.trim(),
    work_arrangement: data.workArrangement, contract_duration: data.duration.trim(),
    message: inquiryMessage(data), to_email: 'info@gax-global.com',
  };
}
