"use client"

import { motion } from "framer-motion"
import { useLang } from "@/components/lang-provider"

type SkillItem = {
  label: string
  level: number // 0-100
}

type SkillCategory = {
  key: string
  color: string
  bgColor: string
  borderColor: string
  skills: SkillItem[]
}

const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    skills: [
      { label: "React / Next.js", level: 90 },
      { label: "Angular", level: 75 },
      { label: "TypeScript", level: 88 },
      { label: "Tailwind CSS", level: 92 },
      { label: "HTML / CSS", level: 95 },
    ],
  },
  {
    key: "backend",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    borderColor: "border-chart-2/20",
    skills: [
      { label: "Node.js", level: 85 },
      { label: "Spring Boot (Java)", level: 80 },
      { label: "Golang", level: 78 },
      { label: "REST API", level: 92 },
      { label: "GraphQL", level: 75 },
    ],
  },
  {
    key: "mobile",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    borderColor: "border-chart-3/20",
    skills: [
      { label: "Flutter / Dart", level: 88 },
      { label: "Architecture Mobile", level: 85 },
      { label: "Store Deployment", level: 82 },
    ],
  },
  {
    key: "databases",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    borderColor: "border-chart-4/20",
    skills: [
      { label: "PostgreSQL", level: 85 },
      { label: "MongoDB", level: 80 },
      { label: "MySQL", level: 82 },
    ],
  },
  {
    key: "tools",
    color: "text-muted-foreground",
    bgColor: "bg-muted-foreground/10",
    borderColor: "border-muted-foreground/20",
    skills: [
      { label: "Git / GitHub / Gitea", level: 92 },
      { label: "Docker", level: 78 },
      { label: "Figma", level: 70 },
      { label: "Jira", level: 75 },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 22 },
  },
}

export function SkillsSection() {
  const { t } = useLang()

  const getCategoryName = (key: string) => {
    return t.skills.categories[key as keyof typeof t.skills.categories] || key
  }

  return (
    <div className="relative flex h-full w-full flex-col overflow-y-auto px-6 py-24 md:px-12 lg:px-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/3 blur-[140px]"
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
            {t.skills.headline}
          </h2>
          <p className="max-w-lg text-lg text-muted-foreground">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.key}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group flex flex-col gap-5 rounded-xl border ${category.borderColor} bg-card p-6 transition-colors hover:border-opacity-50`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div className={`h-2 w-2 rounded-full ${category.bgColor.replace('/10', '')}`} />
                <h3 className={`font-heading text-base font-semibold ${category.color}`}>
                  {getCategoryName(category.key)}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.label} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-foreground/80">
                        {skill.label}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: skillIndex * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`h-full rounded-full ${category.bgColor.replace('/10', '/60')}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
