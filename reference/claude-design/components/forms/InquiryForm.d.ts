/**
 * Qualifying inquiry form — the site's single conversion surface.
 */
export interface InquiryFormProps {
  onSubmit?: (e: React.FormEvent) => void;
  status?: 'idle' | 'pending' | 'success' | 'error';
}
export function InquiryForm(props: InquiryFormProps): JSX.Element;
