"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Image from "next/image"
import { useLang } from "@/components/lang-provider"

function PlayStoreIcon({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.42V3.234c0-.54.22-1.04.61-1.42z"
        fill="#00D3FF"
      />
      <path
        d="M17.188 8.604L4.854 1.482a2.02 2.02 0 0 0-1.245-.332l10.183 10.183 3.396-2.73z"
        fill="#00E676"
      />
      <path
        d="M13.792 12l-10.183 10.183c.376.04.776-.07 1.245-.332l12.334-7.122L13.792 12z"
        fill="#FF3A44"
      />
      <path
        d="M20.916 10.75l-3.728-2.146L13.792 12l3.396 3.396 3.728-2.146a1.442 1.442 0 0 0 0-2.5z"
        fill="#FFC800"
      />
    </svg>
  )
}

function AppStoreIcon({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5.5" fill="#007AFF" />
      <g stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6.5" y1="14.8" x2="17.5" y2="14.8" />
        <line x1="12" y1="5.2" x2="6.2" y2="17.8" />
        <line x1="12" y1="5.2" x2="17.8" y2="17.8" />
      </g>
    </svg>
  )
}

export function MobileProjectsSection() {
  const { t } = useLang()

  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-y-auto px-6 py-24 md:px-12 lg:px-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-chart-2/3 blur-[140px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3"
        >
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            {t.mobileProjects.headline}
          </h2>
          <p className="max-w-lg text-lg text-muted-foreground">
            {t.mobileProjects.subtitle}
          </p>
        </motion.div>

        {/* Phone mockup grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {t.mobileProjects.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col items-center gap-6"
            >
              {/* Phone frame */}
              <div className="relative mx-auto w-[200px] md:w-[210px]">
                {/* Phone bezel */}
                <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-foreground/10 bg-foreground/5 shadow-2xl shadow-primary/5 transition-shadow duration-500 group-hover:shadow-primary/15">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-0 z-20 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-foreground/10" />

                  {/* Screen */}
                  <div className="relative aspect-[9/19.5] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 z-20 h-1 w-16 -translate-x-1/2 rounded-full bg-foreground/20" />
                </div>
              </div>

              {/* Project info */}
              <div className="flex flex-col items-center gap-3 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-chart-2/30 bg-chart-2/5 px-2.5 py-1 font-mono text-[11px] text-chart-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links with official store logos */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
                  {"github" in project && project.github && (
                    <a
                      href={project.github as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-105"
                    >
                      <Github className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                      <span>{t.mobileProjects.viewCode}</span>
                    </a>
                  )}

                  {"playStore" in project && project.playStore && (
                    <a
                      href={project.playStore as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-105"
                    >
                      <PlayStoreIcon className="h-4 w-4 shrink-0 transition-transform group-hover/btn:scale-110" />
                      <span>Play Store</span>
                    </a>
                  )}

                  {"appStore" in project && project.appStore && (
                    <a
                      href={project.appStore as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-all duration-200 hover:border-[#007AFF]/50 hover:bg-[#007AFF]/10 hover:text-[#007AFF] hover:scale-105"
                    >
                      <AppStoreIcon className="h-4 w-4 shrink-0 transition-transform group-hover/btn:scale-110" />
                      <span>App Store</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
