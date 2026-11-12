import assert from 'node:assert/strict';
import test from 'node:test';
import { createInquiry, validateInquiry, inquiryTemplateParams, inquiryEmailHref } from '../src/app/lib/inquiry.ts';

const valid = () => ({ ...createInquiry('C2C'), name: 'Taylor Morgan', email: 'taylor@example.com', company: 'Example Consulting', specialization: 'Kubernetes and Terraform', workArrangement: 'Remote', duration: '6 months', description: 'Need help improving cluster operations and delivery reliability.' });

test('inquiry validation requires the business details and rejects empty values', () => {
  assert.equal(Object.keys(validateInquiry(createInquiry())).length, 8);
  assert.equal(Object.keys(validateInquiry({ ...valid(), name: '  ', company: ' ' })).length, 2);
  assert.deepEqual(validateInquiry(valid()), {});
});

test('inquiry rejects malformed emails, unsupported options and oversized content', () => {
  const errors = validateInquiry({ ...valid(), email: 'a@', engagementType: 'not-an-option', workArrangement: 'unknown', description: 'a'.repeat(4001) });
  assert.deepEqual(Object.keys(errors).sort(), ['description', 'email', 'engagementType', 'workArrangement']);
});

test('all requirement details reach the existing EmailJS template message', () => {
  const params = inquiryTemplateParams(valid());
  assert.equal(params.from_email, 'taylor@example.com');
  assert.equal(params.to_email, 'info@gax-global.com');
  for (const text of ['C2C', 'Kubernetes and Terraform', 'Remote', '6 months', valid().description]) assert.ok(params.message.includes(text));
});

test('email fallback encodes the requirement as data without losing special characters', () => {
  const data = { ...valid(), description: 'Infrastructure & delivery review? Include DNS #1 and CI/CD controls.' };
  const url = new URL(inquiryEmailHref(data));
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, 'info@gax-global.com');
  assert.ok(url.searchParams.get('body').includes(data.description));
});
