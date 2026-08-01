/**
 * GA4 helpers. Loads gtag only when VITE_GA_MEASUREMENT_ID is set.
 * Events stay no-ops in local/dev without an ID.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

let loaded = false;

export function initAnalytics() {
  if (!MEASUREMENT_ID || loaded || typeof document === 'undefined') return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, { anonymize_ip: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export type AnalyticsEvent =
  | 'cta_click'
  | 'form_submit'
  | 'form_success'
  | 'form_error'
  | 'nav_click'
  | 'service_view'
  | 'case_study_click';

export function trackEvent(name: AnalyticsEvent, params?: Record<string, string | number | boolean>) {
  if (!MEASUREMENT_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
