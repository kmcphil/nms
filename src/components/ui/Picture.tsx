type Props = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'auto' | 'sync';
};

/** Serves WebP when src ends in .webp; falls back to matching .jpg/.jpeg. */
export function Picture({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
}: Props) {
  const fallback = src.replace(/\.webp$/i, '.jpg');
  const isWebp = /\.webp$/i.test(src);

  if (!isWebp) {
    return (
      <img
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
      />
    );
  }

  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      <img
        className={className}
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
      />
    </picture>
  );
}
