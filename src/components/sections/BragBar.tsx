import { useState } from 'react';
import { bragLogos, type BragLogo } from '../../data/bragLogos';
import '../../styles/brag-bar.css';

type Props = {
  logos?: BragLogo[];
  label?: string;
};

function LogoMark({ logo }: { logo: BragLogo }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="brag__mark" role="img" aria-label={logo.alt}>
        <span className="brag__placeholder" aria-hidden="true">
          {logo.name}
        </span>
      </span>
    );
  }

  return (
    <span className="brag__mark">
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

/**
 * Compact credibility strip under the hero.
 * Uses real logos when files exist; otherwise monochrome text placeholders.
 */
export function BragBar({
  logos = bragLogos,
  label = 'Trusted by founders, nonprofits, media organizations, and nationally recognized brands.',
}: Props) {
  return (
    <section className="brag" aria-label="Trusted by">
      <div className="brag__inner wrap-wide">
        <p className="brag__label">{label}</p>
        <ul className="brag__logos">
          {logos.map((logo) => (
            <li className="brag__item" key={logo.id}>
              <LogoMark logo={logo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
