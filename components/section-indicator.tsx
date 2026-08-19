"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { useLang } from "@/components/lang-provider"

export function SectionIndicator() {
  const { t } = useLang()
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const sectionKeys: (keyof typeof t.sections)[] = [
    "hero",
    "about",
    "mobile",
    "web",
    "skills",
    "contact",
  ]

  const showIndicator = useCallback(() => {
    setIsVisible(true)
    if (hideTimeout.current) clearTimeout(hideTimeout.current)
    hideTimeout.current = setTimeout(() => setIsVisible(false), 2500)
  }, [])

  useEffect(() => {
    const container = document.querySelector(".scroll-container")
    if (!container) return

    const handleScroll = () => {
      showIndicator()
      const sections = container.querySelectorAll(".scroll-section")
      const scrollTop = container.scrollTop
      const viewportHeight = window.innerHeight

      sections.forEach((section, index) => {
        const el = section as HTMLElement
        const sectionTop = el.offsetTop
        if (scrollTop >= sectionTop - viewportHeight / 2) {
          setActiveSection(index)
        }
      })
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    const timeout = setTimeout(() => showIndicator(), 2000)

    return () => {
      container.removeEventListener("scroll", handleScroll)
      clearTimeout(timeout)
      if (hideTimeout.current) clearTimeout(hideTimeout.current)
    }
  }, [showIndicator])

  const scrollToSection = (index: number) => {
    const container = document.querySelector(".scroll-container")
    if (!container) return
    const sections = container.querySelectorAll(".scroll-section")
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed right-8 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-3"
    >
      {sectionKeys.map((key, index) => (
        <button
          key={key}
          onClick={() => scrollToSection(index)}
          className="group relative flex items-center"
          aria-label={`${t.sections[key]}`}
        >
          {/* Tooltip on hover */}
          <span className="absolute right-6 whitespace-nowrap rounded-md bg-card/90 px-2 py-1 font-mono text-xs text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
            {t.sections[key]}
          </span>
          {/* Dot/bar */}
          <motion.div
            className={`section-dot h-2 w-2 rounded-full transition-colors ${
              activeSection === index
                ? "bg-primary"
                : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
            }`}
            animate={{
              scaleY: activeSection === index ? 2.5 : 1,
              scaleX: activeSection === index ? 1 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </button>
      ))}
    </motion.div>
  )
}
