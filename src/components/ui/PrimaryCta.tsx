import { Link } from 'react-router-dom';
import { primaryCta } from '../../data/site';

type Props = {
  label?: string;
  href?: string;
  variant?: 'primary' | 'ghost' | 'ghost-light';
  className?: string;
};

export function PrimaryCta({
  label = primaryCta.label,
  href = primaryCta.href,
  variant = 'primary',
  className = '',
}: Props) {
  const variantClass =
    variant === 'ghost' ? 'btn--ghost' : variant === 'ghost-light' ? 'btn--ghost-light' : 'btn--primary';

  return (
    <Link className={`btn ${variantClass} ${className}`.trim()} to={href}>
      {label}
    </Link>
  );
}
