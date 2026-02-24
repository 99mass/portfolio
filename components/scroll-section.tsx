"use client"

import { motion } from "framer-motion"

interface ScrollSectionProps {
  children: React.ReactNode
  id: string
  className?: string
}

export function ScrollSection({ children, id, className = "" }: ScrollSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-section relative flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  )
}

interface SectionLabelProps {
  label: string
  number: string
}

export function SectionLabel({ label, number }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="absolute left-8 top-8 flex items-center gap-3 md:left-12 md:top-12"
    >
      <span className="font-mono text-xs text-primary">{number}</span>
      <div className="h-px w-8 bg-primary/40" />
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </motion.div>
  )
}
