"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import Image from "next/image"
import { useLang } from "@/components/lang-provider"

export function WebProjectsSection() {
  const { t } = useLang()

  return (
    <div className="relative flex h-full w-full flex-col overflow-y-auto px-6 py-24 md:px-12 lg:px-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]"
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
            {t.webProjects.headline}
          </h2>
          <p className="max-w-lg text-lg text-muted-foreground">
            {t.webProjects.subtitle}
          </p>
        </motion.div>

        {/* Project cards - grid for 6 projects */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {t.webProjects.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/30"
            >
              {/* Image */}
              <div className="relative h-44 w-full shrink-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between gap-3 p-5">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    {"stars" in project && (project as { stars?: number }).stars && (
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 rounded-full bg-chart-4/10 px-2 py-0.5 font-mono text-[10px] text-chart-4">
                          <Star className="h-2.5 w-2.5" />
                          {(project as { stars?: number }).stars}
                        </span>
                        {"forks" in project && (project as { forks?: number }).forks && (
                          <span className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                            <GitFork className="h-2.5 w-2.5" />
                            {(project as { forks?: number }).forks}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>{t.webProjects.viewCode}</span>
                    </a>
                  )}
                  {"live" in project && (project as { live?: string }).live && (
                    <a
                      href={(project as { live?: string }).live as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[11px] text-primary transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>{t.webProjects.viewLive}</span>
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
