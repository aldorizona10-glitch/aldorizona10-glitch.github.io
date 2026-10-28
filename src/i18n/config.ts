export const LOCALES = ['en', 'id'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Lang = 'en';

/** Home path for a language. English lives at the root. */
export function homeFor(lang: Lang): string {
  return lang === DEFAULT_LOCALE ? '/' : `/${lang}/`;
}

/** Sections on the single page, in reading order. */
export const SECTIONS = ['work', 'open-source', 'security', 'about'] as const;
export type SectionId = (typeof SECTIONS)[number];

export const LANG_LABEL: Record<Lang, string> = { en: 'EN', id: 'ID' };
export const LANG_NAME: Record<Lang, string> = { en: 'English', id: 'Bahasa Indonesia' };
