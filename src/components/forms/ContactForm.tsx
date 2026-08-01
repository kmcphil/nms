import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';

const engagements = [
  'Not sure yet',
  'Growth Clarity Diagnostic',
  'Strategic Compass Sprint',
  'Focused Growth Retainer',
  'Strategic Repositioning Engagement',
];

const revenueBands = ['Prefer not to say', 'Under $5M', '$5M–$15M', '$15M–$50M', '$50M+'];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const endpoint =
    import.meta.env.VITE_CONTACT_ENDPOINT ||
    import.meta.env.PUBLIC_CONTACT_ENDPOINT ||
    '/api/contact';

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('pending');
    trackEvent('form_submit', { form: 'start_the_conversation' });

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      trackEvent('form_success', { form: 'start_the_conversation' });
      form.reset();
    } catch {
      setStatus('error');
      trackEvent('form_error', { form: 'start_the_conversation' });
    }
  }

  return (
    <form className="form" method="POST" action={endpoint} onSubmit={onSubmit}>
      <input
        type="text"
        name="company_website"
        className="hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <div className="form__grid">
        <label className="field">
          <span>
            Name <abbr title="required">*</abbr>
          </span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="field">
          <span>
            Email <abbr title="required">*</abbr>
          </span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label className="field">
          <span>
            Business name <abbr title="required">*</abbr>
          </span>
          <input type="text" name="business" required autoComplete="organization" />
        </label>
        <label className="field">
          <span>
            Role <abbr title="required">*</abbr>
          </span>
          <input type="text" name="role" required autoComplete="organization-title" />
        </label>
        <label className="field field--full">
          <span>Website or social links</span>
          <input type="text" name="links" autoComplete="url" placeholder="https://" />
        </label>
        <label className="field">
          <span>
            Engagement of interest <abbr title="required">*</abbr>
          </span>
          <select name="engagement" required defaultValue={engagements[0]}>
            {engagements.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>
            Annual revenue <abbr title="required">*</abbr>
          </span>
          <select name="revenue" required defaultValue={revenueBands[0]}>
            {revenueBands.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="field field--full">
          <span>
            Strategic problem <abbr title="required">*</abbr>
          </span>
          <textarea name="problem" rows={4} required placeholder="What is unclear right now?" />
        </label>
        <label className="field field--full">
          <span>What has already been tried</span>
          <textarea name="tried" rows={3} />
        </label>
        <label className="field field--full">
          <span>
            Desired outcome over the next 6–12 months <abbr title="required">*</abbr>
          </span>
          <textarea name="outcome" rows={3} required />
        </label>
        <label className="field">
          <span>Decision-makers involved</span>
          <input type="text" name="decisionMakers" />
        </label>
        <label className="field">
          <span>Desired timeline</span>
          <input type="text" name="timeline" />
        </label>
        <label className="field field--full">
          <span>Additional context</span>
          <textarea name="context" rows={3} />
        </label>
      </div>

      <p className="form__note">
        I review every inquiry. Qualified leads receive a link for a 30-minute fit call. If we
        proceed, you’ll receive written scope, timeline, responsibilities, boundaries, and payment
        terms. Scheduling links are not sent automatically.
      </p>

      <p className="form__privacy">
        By submitting, you agree to be contacted about this inquiry. See the{' '}
        <Link to="/privacy">Privacy Policy</Link>.
      </p>

      <button className="btn btn--primary" type="submit" disabled={status === 'pending'}>
        {status === 'pending' ? 'Sending…' : 'Submit inquiry'}
      </button>

      <div aria-live="polite" aria-atomic="true">
        {status === 'success' ? (
          <p className="form__status" data-state="success">
            Thank you. Your inquiry is in. I will review it and follow up if there is a fit for a
            30-minute conversation.
          </p>
        ) : null}
        {status === 'error' ? (
          <p className="form__status" data-state="error" role="alert">
            Something went wrong sending the form. Please email directly or try again in a moment.
          </p>
        ) : null}
      </div>
    </form>
  );
}
