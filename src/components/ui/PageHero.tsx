import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: string;
  lede?: string;
  media?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lede, media, children }: Props) {
  return (
    <section className={`page-hero${media ? ' page-hero--split' : ''}`}>
      <div className="page-hero__grid wrap-wide">
        <div className="page-hero__copy reveal">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          {lede ? <p className="lede" dangerouslySetInnerHTML={{ __html: lede }} /> : null}
          {children}
        </div>
        {media ? <div className="page-hero__media reveal">{media}</div> : null}
      </div>
    </section>
  );
}
