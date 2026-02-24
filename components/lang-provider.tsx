"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { translations, type Locale, type Translations } from "@/lib/i18n"

interface LangContextType {
  locale: Locale
  t: Translations
  toggleLocale: () => void
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr")

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "fr" ? "en" : "fr"))
  }, [])

  const t = translations[locale]

  return (
    <LangContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error("useLang must be used within a LangProvider")
  }
  return context
}
