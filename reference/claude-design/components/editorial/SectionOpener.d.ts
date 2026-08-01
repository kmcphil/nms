/**
 * Section masthead — running number, title, dateline, 2px rule. Sections read 01, 02, 03… like a running order.
 */
export interface SectionOpenerProps {
  /** Two-digit running number, red */
  number?: string;
  title?: string;
  /** Courier dateline, right-aligned */
  dateline?: string;
  tone?: 'ink' | 'light';
}
export function SectionOpener(props: SectionOpenerProps): JSX.Element;
