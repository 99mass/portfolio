"use client"

import { motion } from "framer-motion"
import { useLang } from "@/components/lang-provider"

export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.794-4.382 9.797-9.782.002-2.617-1.011-5.08-2.854-6.927-1.844-1.847-4.298-2.863-6.918-2.865-5.409 0-9.802 4.383-9.806 9.786-.002 1.833.486 3.626 1.411 5.212l-.991 3.623 3.736-.979zM18.02 14.86c-.33-.165-1.953-.964-2.253-1.074-.3-.11-.518-.165-.736.165-.218.33-.844 1.074-1.036 1.293-.19.22-.382.247-.712.082-.33-.165-1.393-.513-2.653-1.636-.98-.874-1.642-1.954-1.834-2.284-.19-.33-.02-.508.145-.672.149-.147.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.412-.028-.577-.082-.165-.736-1.774-1.009-2.434-.265-.639-.533-.55-.736-.56-.192-.01-.412-.01-.63-.01-.218 0-.573.082-.872.412-.3.33-1.146 1.118-1.146 2.724 0 1.605 1.169 3.159 1.33 3.379.162.22 2.3 3.51 5.572 4.92.778.335 1.385.535 1.857.685.782.248 1.493.213 2.057.129.627-.094 1.953-.798 2.227-1.57.272-.77.272-1.43.19-1.57-.082-.14-.3-.22-.63-.385z" />
    </svg>
  )
}

export function WhatsAppFAB() {
  const { locale } = useLang()
  const phoneNumber = "221771169551"
  const defaultText =
    locale === "fr"
      ? "Bonjour Samba, je vous contacte depuis votre portfolio."
      : "Hello Samba, I am contacting you from your portfolio."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultText)}`

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 sm:bottom-8 sm:left-8">
      {/* WhatsApp Circular Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:bg-[#20BD5A] hover:shadow-xl hover:shadow-[#25D366]/45"
        aria-label={
          locale === "fr"
            ? "Contacter Samba Diop sur WhatsApp"
            : "Contact Samba Diop on WhatsApp"
        }
      >
        {/* Subtle pulsing ping effect */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping" />

        {/* Status dot */}
        <span className="absolute right-0 top-0 flex h-3.5 w-3.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald-400" />
        </span>

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="relative z-10 h-6 w-6 sm:h-7 sm:w-7 fill-current transition-transform duration-300 group-hover:rotate-12" />
      </motion.a>

      {/* Speech bubble label (Desktop visible, subtle on hover) */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.4 }}
        className="hidden md:flex flex-col rounded-xl border border-border/70 bg-card/90 px-3.5 py-1.5 shadow-md backdrop-blur-md transition-all hover:border-[#25D366]/50 hover:bg-card hover:shadow-lg"
      >
        <span className="text-[11px] font-semibold text-foreground">
          {locale === "fr" ? "Discuter sur WhatsApp" : "Chat on WhatsApp"}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">
          +221 77 116 95 51
        </span>
      </motion.a>
    </div>
  )
}
