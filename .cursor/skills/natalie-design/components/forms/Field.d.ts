/** One labelled form control — underline only, uppercase label, red required marker. */
export interface FieldProps {
  label?: string;
  name?: string;
  /** 'textarea' renders a textarea; passing options renders a select */
  type?: 'text' | 'email' | 'tel' | 'textarea';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  rows?: number;
  /** Span both columns of the form grid */
  full?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}
export function Field(props: FieldProps): JSX.Element;
