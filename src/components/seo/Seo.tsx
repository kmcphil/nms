import { useEffect } from 'react';
import { site } from '../../data/site';

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function Seo({
  title,
  description = site.tagline,
  path = '/',
  ogImage = '/brand/og-default.png',
  noindex = false,
  schema,
}: SeoProps) {
  const schemaKey = schema ? JSON.stringify(schema) : '';

  useEffect(() => {
    const fullTitle = title === site.name ? title : `${title} · ${site.name}`;
    const url = new URL(path, site.url).href;
    const imageUrl = new URL(ogImage, site.url).href;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', site.name);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:locale', site.locale);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);

    if (noindex) {
      upsertMeta('name', 'robots', 'noindex, nofollow');
    } else {
      document.head.querySelector('meta[name="robots"]')?.remove();
    }

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    if (schema) {
      upsertJsonLd('seo-jsonld', schema);
    } else {
      document.getElementById('seo-jsonld')?.remove();
    }
  }, [title, description, path, ogImage, noindex, schema, schemaKey]);

  return null;
}
