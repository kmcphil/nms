type Props = {
  src: string;
  alt: string;
  quote: string;
  attribution?: string;
};

/**
 * Full-width magazine feature spread.
 * Preserves full-frame photography (no object-fit crop).
 * Quote sits in the image’s natural negative space.
 */
export function EditorialSpread({ src, alt, quote, attribution }: Props) {
  return (
    <section className="editorial-spread" aria-label="Editorial feature">
      <figure className="editorial-spread__figure">
        <img
          className="editorial-spread__image"
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
        <figcaption className="editorial-spread__caption">
          <blockquote className="editorial-spread__quote">
            <p>“{quote}”</p>
            {attribution ? <cite>{attribution}</cite> : null}
          </blockquote>
        </figcaption>
      </figure>
    </section>
  );
}
