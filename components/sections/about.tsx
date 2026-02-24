"use client"

import { motion } from "framer-motion"
import { MapPin, Briefcase, GraduationCap } from "lucide-react"
import { useLang } from "@/components/lang-provider"

const techStack = [
  { label: "Java", category: "lang" },
  { label: "JavaScript", category: "lang" },
  { label: "TypeScript", category: "lang" },
  { label: "Golang", category: "lang" },
  { label: "Dart", category: "lang" },
  { label: "Rust", category: "lang" },
  { label: "PHP", category: "lang" },
  { label: "SQL", category: "lang" },
  { label: "React", category: "framework" },
  { label: "Next.js", category: "framework" },
  { label: "Angular", category: "framework" },
  { label: "Node.js", category: "framework" },
  { label: "Spring Boot", category: "framework" },
  { label: "Flutter", category: "mobile" },
  { label: "Tailwind", category: "framework" },
  { label: "PostgreSQL", category: "db" },
  { label: "MongoDB", category: "db" },
  { label: "MySQL", category: "db" },
  { label: "Git", category: "tool" },
  { label: "Docker", category: "tool" },
  { label: "Figma", category: "tool" },
]

const categoryColors: Record<string, string> = {
  lang: "border-primary/40 text-primary bg-primary/5 hover:bg-primary/10 hover:border-primary/60",
  framework:
    "border-chart-2/40 text-chart-2 bg-chart-2/5 hover:bg-chart-2/10 hover:border-chart-2/60",
  mobile:
    "border-chart-3/40 text-chart-3 bg-chart-3/5 hover:bg-chart-3/10 hover:border-chart-3/60",
  db: "border-chart-4/40 text-chart-4 bg-chart-4/5 hover:bg-chart-4/10 hover:border-chart-4/60",
  tool: "border-muted-foreground/30 text-muted-foreground bg-muted-foreground/5 hover:bg-muted-foreground/10 hover:border-muted-foreground/50",
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
}

export function AboutSection() {
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
          className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/3 blur-[140px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:gap-20">
        {/* Left column - Bio + Stack */}
        <div className="flex flex-1 flex-col gap-12">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              {t.about.headline}
            </h2>
          </motion.div>

          {/* Bio text - progressive reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.about.bio}
            </p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <MapPin className="h-4 w-4" />
              <span className="font-mono">{t.about.location}</span>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <div className="flex flex-col gap-4">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm uppercase tracking-widest text-muted-foreground"
            >
              {t.about.stackTitle}
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {techStack.map((tech) => (
                <motion.span
                  key={tech.label}
                  variants={badgeVariants}
                  className={`cursor-default rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${categoryColors[tech.category]}`}
                >
                  {tech.label}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right column - Parcours split into Experiences & Formations */}
        <div className="flex flex-1 flex-col gap-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm uppercase tracking-widest text-muted-foreground"
          >
            {t.about.timelineTitle}
          </motion.h3>

          {/* Experiences block */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Briefcase className="h-4 w-4" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground">
                {t.about.experiencesTitle}
              </h4>
            </motion.div>

            <div className="relative flex flex-col gap-0 pl-2">
              {/* Vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute left-[11px] top-2 h-[calc(100%-16px)] w-px origin-top bg-primary/30"
              />

              {t.about.experiences.map((item, index) => (
                <motion.div
                  key={`exp-${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="relative flex gap-4 pb-6 pl-8"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-primary bg-primary/20">
                    <Briefcase className="h-2.5 w-2.5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-primary">
                      {item.year}
                    </span>
                    <h5 className="font-heading text-base font-semibold text-foreground">
                      {item.title}
                    </h5>
                    <p className="font-mono text-xs text-muted-foreground">
                      {item.place} - {item.location}
                    </p>
                    {item.description && (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground/80">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Formations block */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3">
                <GraduationCap className="h-4 w-4" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground">
                {t.about.formationsTitle}
              </h4>
            </motion.div>

            <div className="relative flex flex-col gap-0 pl-2">
              {/* Vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                className="absolute left-[11px] top-2 h-[calc(100%-16px)] w-px origin-top bg-chart-3/30"
              />

              {t.about.formations.map((item, index) => (
                <motion.div
                  key={`form-${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="relative flex gap-4 pb-6 pl-8"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-chart-3/40 bg-card">
                    <GraduationCap className="h-2.5 w-2.5 text-chart-3" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-chart-3">
                      {item.year}
                    </span>
                    <h5 className="font-heading text-base font-semibold text-foreground">
                      {item.title}
                    </h5>
                    <p className="font-mono text-xs text-muted-foreground">
                      {item.place} - {item.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
