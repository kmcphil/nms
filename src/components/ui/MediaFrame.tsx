type Aspect = 'portrait' | 'landscape' | 'square' | 'wide' | 'tall';

type Props = {
  src?: string;
  alt?: string;
  aspect?: Aspect;
  className?: string;
};

export function MediaFrame({ src, alt = '', aspect = 'portrait', className = '' }: Props) {
  return (
    <figure className={`media media--${aspect} ${className}`.trim()}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      ) : (
        <div className="media__placeholder" role="img" aria-label={alt || 'Photography'} />
      )}
    </figure>
  );
}
