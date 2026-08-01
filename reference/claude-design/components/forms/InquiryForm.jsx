import React from 'react';
import { Field } from './Field.jsx';
import { Button } from '../core/Button.jsx';

const engagements = ['Not sure yet', 'Growth Clarity Diagnostic', 'Strategic Compass Sprint', 'Focused Growth Retainer', 'Strategic Repositioning Engagement'];
const revenue = ['Prefer not to say', 'Under $5M', '$5M–$15M', '$15M–$50M', '$50M+'];

/** The qualifying inquiry form behind Start the Conversation. */
export function InquiryForm({ onSubmit, status = 'idle' }) {
  return (
    <form style={{ display: 'grid', gap: '2rem' }} onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(e); }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Business name" name="business" required />
        <Field label="Role" name="role" required />
        <Field label="Website or social links" name="links" placeholder="https://" full />
        <Field label="Engagement of interest" name="engagement" options={engagements} required />
        <Field label="Annual revenue" name="revenue" options={revenue} required />
        <Field label="Strategic problem" name="problem" type="textarea" required full placeholder="What is unclear right now?" />
        <Field label="Desired outcome over the next 6–12 months" name="outcome" type="textarea" rows={3} required full />
      </div>
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--body-xs)', lineHeight: 1.6, color: 'var(--body)' }}>
        I review every inquiry. Qualified leads receive a link for a 30-minute fit call. If we proceed, you’ll receive written scope, timeline, responsibilities, boundaries, and payment terms. Scheduling links are not sent automatically.
      </p>
      <div><Button onClick={() => {}} disabled={status === 'pending'}>{status === 'pending' ? 'Sending…' : 'Submit inquiry'}</Button></div>
      {status === 'success' ? <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontSize: 'var(--ui-sm)', color: 'var(--ink)' }}>Thank you. Your inquiry is in.</p> : null}
    </form>
  );
}
