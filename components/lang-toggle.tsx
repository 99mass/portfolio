"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLang } from "@/components/lang-provider"

export function LangToggle() {
  const { locale, toggleLocale, t } = useLang()

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.7, duration: 0.4, ease: "easeOut" }}
      onClick={toggleLocale}
      className="fixed bottom-8 right-24 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur-md transition-colors hover:bg-secondary"
      aria-label={t.langToggle.label}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={locale}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="font-mono text-sm font-bold uppercase text-primary"
        >
          {locale === "fr" ? "EN" : "FR"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}
