export const locales = ["en", "mm"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "EN",
  mm: "MM",
}

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  mm: "🇲🇲",
}
