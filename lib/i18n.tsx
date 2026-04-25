import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations } from '@/locales/translations'

export type Locale = 'en' | 'ar'

type I18nContextValue = {
  locale: Locale
  dir: 'ltr' | 'rtl'
  setLocale: (locale: Locale) => void
  t: <T = string>(path: string) => T
}

const STORAGE_KEY = 'portfolio-locale'

const I18nContext = createContext<I18nContextValue | null>(null)

function getValueByPath<T>(obj: unknown, path: string): T | undefined {
  const value = path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part]
    }
    return undefined
  }, obj)

  return value as T | undefined
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const localeFromQuery = params.get('lang')
    if (localeFromQuery === 'ar') {
      setLocale('ar')
      return
    }
    if (localeFromQuery === 'en') {
      setLocale('en')
      return
    }

    const savedLocale = window.localStorage.getItem(STORAGE_KEY)
    if (savedLocale === 'en' || savedLocale === 'ar') {
      setLocale(savedLocale)
      return
    }
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
    document.documentElement.dir = dir
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
    document.documentElement.dir = dir

    const url = new URL(window.location.href)
    if (locale === 'ar') {
      url.searchParams.set('lang', 'ar')
    } else {
      url.searchParams.delete('lang')
    }
    const next = `${url.pathname}${url.search}${url.hash}`
    if (next !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.history.replaceState({}, '', next)
    }
  }, [dir, locale])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      dir,
      setLocale,
      t: <T,>(path: string): T => {
        const selected = getValueByPath<T>(translations[locale], path)
        if (selected !== undefined) return selected
        const fallback = getValueByPath<T>(translations.en, path)
        return fallback as T
      }
    }),
    [dir, locale]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
