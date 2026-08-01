/** Italic Playfair pull quote with optional Courier attribution. */
export interface ProofQuoteProps {
  children?: React.ReactNode;
  /** e.g. "Client name · Title, Company" */
  attribution?: string;
  tone?: 'ink' | 'light';
}
export function ProofQuote(props: ProofQuoteProps): JSX.Element;
