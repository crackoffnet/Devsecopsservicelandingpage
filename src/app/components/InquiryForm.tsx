import { Loader2, Mail, Send } from 'lucide-react';
import { useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { trackEvent } from '../lib/analytics';
import { createInquiry, engagementTypes, inquiryEmailHref, inquiryTemplateParams, validateInquiry, workArrangements, type InquiryData, type InquiryErrors } from '../lib/inquiry';

export function InquiryForm({ audience = 'partner' }: { audience?: 'partner' | 'direct' }) {
  const prefix = useId();
  const [data, setData] = useState(() => createInquiry(audience === 'direct' ? 'Direct Consulting' : ''));
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error' | 'email'>('idle');
  const [notice, setNotice] = useState('');
  const startedAt = useRef(Date.now());
  const sending = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const update = (field: keyof InquiryData, value: string) => {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== 'sending') { setStatus('idle'); setNotice(''); }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current) return;
    const nextErrors = validateInquiry(data);
    setErrors(nextErrors);
    const invalid = Object.keys(nextErrors)[0];
    if (invalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${invalid}"]`)?.focus();
      setStatus('error');
      setNotice('Please check the highlighted fields.');
      return;
    }
    if (data.website || Date.now() - startedAt.current < 3000) {
      setStatus('error'); setNotice('Unable to submit yet. Please wait a moment and try again.'); return;
    }
    if (!serviceID || !templateID || !publicKey) {
      setStatus('email');
      setNotice('Online delivery is currently unavailable. Your inquiry has not been sent. Open a draft email below, review it, and send it from your email app.');
      return;
    }
    sending.current = true;
    setStatus('sending'); setNotice('Sending your inquiry...');
    try {
      await emailjs.send(serviceID, templateID, inquiryTemplateParams(data), {
        publicKey, blockHeadless: true, limitRate: { id: 'gax-inquiry', throttle: 60000 },
      });
      setStatus('sent'); setNotice('Your inquiry was sent. GAX Global will review the requirement and reply by email.');
      trackEvent('partner_inquiry_sent', { location: audience === 'partner' ? 'staffing-partners' : 'contact', engagement_type: data.engagementType });
      setData(createInquiry(audience === 'direct' ? 'Direct Consulting' : ''));
      startedAt.current = Date.now();
    } catch (error) {
      setStatus('error');
      const rateLimited = typeof error === 'object' && error !== null && 'status' in error && error.status === 429;
      setNotice(rateLimited ? 'Please wait one minute before submitting again, or use the draft email link below. Your details are still here.' : 'Your inquiry could not be sent. Please try again shortly or use the draft email link below. Your details are still here.');
    } finally { sending.current = false; }
  };

  const fieldProps = (field: keyof InquiryData) => ({
    id: `${prefix}-${field}`, name: field, value: data[field],
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => update(field, event.target.value),
    'aria-invalid': Boolean(errors[field]), 'aria-describedby': errors[field] ? `${prefix}-${field}-error` : undefined,
    required: true,
    className: 'w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-gray-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/25 aria-invalid:border-red-600',
  });
  const label = (field: keyof InquiryData, title: string) => <label htmlFor={`${prefix}-${field}`} className="mb-2 block text-sm font-semibold text-gray-800">{title} <span aria-hidden="true">*</span></label>;
  const error = (field: keyof InquiryData) => errors[field] ? <p id={`${prefix}-${field}-error`} className="mt-2 text-sm text-red-700">{errors[field]}</p> : null;

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="space-y-6" aria-label={audience === 'partner' ? 'Staffing partner inquiry' : 'Consulting inquiry'} data-clarity-mask="true">
      <p className="text-sm text-gray-600">All fields are required. Share the business requirement; please omit credentials and confidential client information.</p>
      <fieldset disabled={status === 'sending'} className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 disabled:opacity-70">
        <legend className="sr-only">Inquiry details</legend>
        <div>{label('name', 'Full name')}<input {...fieldProps('name')} autoComplete="name" maxLength={100} />{error('name')}</div>
        <div>{label('email', 'Business email')}<input {...fieldProps('email')} type="email" autoComplete="email" maxLength={254} />{error('email')}</div>
        <div>{label('company', 'Company')}<input {...fieldProps('company')} autoComplete="organization" maxLength={160} />{error('company')}</div>
        <div>{label('engagementType', 'Engagement type')}<select {...fieldProps('engagementType')}><option value="">Select engagement</option>{engagementTypes.map((value) => <option key={value}>{value}</option>)}</select>{error('engagementType')}</div>
        <div className="sm:col-span-2">{label('specialization', 'Technical specialization needed')}<input {...fieldProps('specialization')} maxLength={300} placeholder="e.g. Kubernetes operations, Terraform, CI/CD reliability" />{error('specialization')}</div>
        <div>{label('workArrangement', 'Work arrangement')}<select {...fieldProps('workArrangement')}><option value="">Select arrangement</option>{workArrangements.map((value) => <option key={value}>{value}</option>)}</select>{error('workArrangement')}</div>
        <div>{label('duration', 'Expected contract duration')}<input {...fieldProps('duration')} maxLength={100} placeholder="e.g. 6 months, fixed scope, or to be confirmed" />{error('duration')}</div>
        <div className="sm:col-span-2">{label('description', 'Project or requirement description')}<textarea {...fieldProps('description')} rows={6} minLength={30} maxLength={4000} />{error('description')}</div>
        <div hidden aria-hidden="true"><label htmlFor={`${prefix}-website`}>Website</label><input id={`${prefix}-website`} name="website" value={data.website} onChange={(event) => update('website', event.target.value)} tabIndex={-1} autoComplete="off" /></div>
      </fieldset>
      <p className="text-sm text-gray-600">Remote U.S. engagements are the focus. Hybrid or onsite requests are assessed individually. Inquiry details are handled under our <a href="/privacy-policy/" className="text-blue-700 underline">Privacy Policy</a>.</p>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'sending' || status === 'sent'} data-cta="submit-partner-inquiry" data-location={audience === 'partner' ? 'staffing-partners' : 'contact'} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60">
          {status === 'sending' ? <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" /> : <Send aria-hidden="true" className="h-5 w-5" />}
          {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Inquiry sent' : 'Send inquiry'}
        </button>
        {(status === 'email' || status === 'error') && !Object.values(errors).some(Boolean) && <a href={inquiryEmailHref(data)} data-cta="email-inquiry-fallback" className="inline-flex items-center gap-2 font-semibold text-blue-700 underline"><Mail aria-hidden="true" className="h-5 w-5" />Open draft email</a>}
      </div>
      <p role="status" aria-live="polite" aria-atomic="true" className={`min-h-6 text-sm ${status === 'error' ? 'text-red-700' : status === 'sent' ? 'text-emerald-800' : 'text-gray-700'}`}>{notice}</p>
    </form>
  );
}
