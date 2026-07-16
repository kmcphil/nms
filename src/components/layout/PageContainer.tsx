import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** Wider measure for photo-forward or multi-column pages later */
  wide?: boolean;
};

/**
 * Standard page shell inside `<main>`.
 * Pages own sections; this owns horizontal rhythm only.
 */
export function PageContainer({ children, wide = false }: Props) {
  return (
    <div className={`page${wide ? ' page--wide' : ''}`}>
      <div className={wide ? 'wrap-wide' : 'wrap'}>{children}</div>
    </div>
  );
}
