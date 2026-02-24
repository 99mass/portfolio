"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Image from "next/image"
import { useLang } from "@/components/lang-provider"

export function HeroSection() {
  const { t } = useLang()

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-6 md:px-12">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] glow-pulse"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-primary/3 blur-[100px] glow-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Profile photo with glow border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Animated glow ring */}
          <motion.div
            className="absolute -inset-1 rounded-full bg-primary/30 blur-md"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-primary/40 md:h-40 md:w-40">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-HhOxSPoDPIATx7vtQnuonANLut30wQ.png"
              alt="Samba Diop"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        {/* Name - cinematic reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-center font-heading text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          Samba Diop
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center gap-3"
        >
          <div className="h-px w-8 bg-primary/60" />
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary md:text-base">
            {t.hero.title}
          </p>
          <div className="h-px w-8 bg-primary/60" />
        </motion.div>

        {/* Impactful phrase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="max-w-lg text-balance text-center text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {t.hero.tagline}
          <br />
          <span className="text-foreground/80">{t.hero.taglineSuffix}</span>
        </motion.p>

        {/* GitHub button */}
        <motion.a
          href="https://github.com/99mass"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-mono text-sm text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary"
        >
          <Github className="h-4 w-4 transition-transform group-hover:rotate-12" />
          <span>github.com/99mass</span>
        </motion.a>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute -bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            {t.hero.scroll}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-6 w-px bg-primary/30"
          />
        </motion.div>
      </div>
    </div>
  )
}
