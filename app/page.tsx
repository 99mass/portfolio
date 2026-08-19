"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { LangToggle } from "@/components/lang-toggle"
import { SectionIndicator } from "@/components/section-indicator"
import { ScrollSection, SectionLabel } from "@/components/scroll-section"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { WebProjectsSection } from "@/components/sections/web-projects"
import { MobileProjectsSection } from "@/components/sections/mobile-projects"
import { SkillsSection } from "@/components/sections/skills"
import { ContactSection } from "@/components/sections/contact"
import { useLang } from "@/components/lang-provider"

export default function Home() {
  const { t } = useLang()

  return (
    <main className="scroll-container">
      <ThemeToggle />
      <LangToggle />
      <SectionIndicator />

      {/* 1 - Hero */}
      <ScrollSection id="hero">
        <HeroSection />
      </ScrollSection>

      {/* 2 - About */}
      <ScrollSection id="about" className="bg-card">
        <SectionLabel label={t.sectionLabels.about} number="02" />
        <AboutSection />
      </ScrollSection>

      {/* 3 - Mobile Projects */}
      <ScrollSection id="mobile-projects">
        <SectionLabel label={t.sectionLabels.mobile} number="03" />
        <MobileProjectsSection />
      </ScrollSection>

      {/* 4 - Web Projects */}
      <ScrollSection id="web-projects" className="bg-card">
        <SectionLabel label={t.sectionLabels.webProjects} number="04" />
        <WebProjectsSection />
      </ScrollSection>

      {/* 5 - Skills */}
      <ScrollSection id="skills">
        <SectionLabel label={t.sectionLabels.skills} number="05" />
        <SkillsSection />
      </ScrollSection>

      {/* 6 - Contact */}
      <ScrollSection id="contact" className="bg-card">
        <SectionLabel label={t.sectionLabels.contact} number="06" />
        <ContactSection />
      </ScrollSection>
    </main>
  )
}
