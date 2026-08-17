export const LOCALES = ['en', 'id'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Lang = 'en';

export const PAGES = ['index', 'security', 'open-source', 'projects', 'about'] as const;
export type PageKey = (typeof PAGES)[number];

const SLUGS: Record<PageKey, string> = {
  index: '',
  security: 'security',
  'open-source': 'open-source',
  projects: 'projects',
  about: 'about',
};

/** Build a path for a page in a given language. English lives at the root. */
export function pathFor(page: PageKey, lang: Lang): string {
  const slug = SLUGS[page];
  const prefix = lang === DEFAULT_LOCALE ? '' : `/${lang}`;
  if (!slug) return prefix || '/';
  return `${prefix}/${slug}`;
}

export const LANG_LABEL: Record<Lang, string> = { en: 'EN', id: 'ID' };
export const LANG_NAME: Record<Lang, string> = { en: 'English', id: 'Bahasa Indonesia' };
