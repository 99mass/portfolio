"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
} from "lucide-react";
import { useLang } from "@/components/lang-provider";

export function ContactSection() {
  const { t } = useLang();
  const [formState, setFormState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setFormState("sent");
      setTimeout(() => {
        setFormState("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 4000);
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-y-auto px-6 py-24 md:px-12">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/3 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col gap-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            {t.contact.headline}
          </h2>
          <p className="max-w-md text-lg text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
            >
              {t.contact.nameLabel}
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder={t.contact.namePlaceholder}
              className="rounded-lg border border-border bg-card px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
            >
              {t.contact.emailLabel}
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder={t.contact.emailPlaceholder}
              className="rounded-lg border border-border bg-card px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
            >
              {t.contact.messageLabel}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder={t.contact.messagePlaceholder}
              className="resize-none rounded-lg border border-border bg-card px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={formState !== "idle"}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-mono text-sm font-medium text-primary-foreground transition-opacity disabled:opacity-70"
          >
            <AnimatePresence mode="wait">
              {formState === "idle" && (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  {t.contact.send}
                </motion.span>
              )}
              {formState === "sending" && (
                <motion.span
                  key="sending"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-4 w-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
                  />
                  {t.contact.sending}
                </motion.span>
              )}
              {formState === "sent" && (
                <motion.span
                  key="sent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  {t.contact.success}
                </motion.span>
              )}
              {formState === "error" && (
                <motion.span
                  key="error"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-2 text-red-400"
                >
                  <AlertCircle className="h-4 w-4" />
                  {t.contact.error}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>

        {/* Direct contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground/50">
            {t.contact.orReach}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:sambadiop161@gmail.com"
              className="group flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              <span>sambadiop161@gmail.com</span>
            </a>
            <a
              href="https://github.com/99mass"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
              <span>99mass</span>
            </a>
          </div>
          <a
            href="tel:+221771169551"
            className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            <span>+221 77 116 95 51</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
