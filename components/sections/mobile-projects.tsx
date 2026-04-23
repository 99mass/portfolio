"use client"

import { motion } from "framer-motion"
import { Github, Play, Apple } from "lucide-react"
import Image from "next/image"
import { useLang } from "@/components/lang-provider"

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
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {t.mobileProjects.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
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

                {/* GitHub link */}
                {"github" in project && project.github && (
                  <a
                    href={project.github as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>{t.mobileProjects.viewCode}</span>
                  </a>
                )}

                {/* Play Store link */}
                {"playStore" in project && project.playStore && (
                  <a
                    href={project.playStore as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Play className="h-3.5 w-3.5" />
                    <span>Play Store</span>
                  </a>
                )}

                {/* App Store link */}
                {"appStore" in project && project.appStore && (
                  <a
                    href={project.appStore as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Apple className="h-3.5 w-3.5" />
                    <span>App Store</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
