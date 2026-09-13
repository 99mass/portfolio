import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { LangProvider } from "@/components/lang-provider";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading-sg",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-gm",
});

const BASE_URL = "https://portfolio-samba-diop.vercel.app";

export const metadata: Metadata = {
  verification: {
    google: "LgEKB4_I6PfMu7W6t8K05Yi9KkY9zy-9Lw35wYtcLgg",
  },
  metadataBase: new URL(BASE_URL),

  title: {
    default:
      "Samba Diop — Développeur Full-Stack & Mobile | Ingénieur Logiciel Sénégal & Afrique de l'Ouest",
    template: "%s | Samba Diop — Développeur Sénégal",
  },

  description:
    "Samba Diop (99mass) — Ingénieur logiciel Full-Stack & Mobile basé à Dakar, Sénégal. Expert Next.js, Flutter, React, Go, Supabase, Node.js. Freelance disponible pour projets web et mobile en Afrique de l'Ouest et à l'international. Full-Stack & Mobile Software Engineer based in Dakar, Senegal. Available for freelance web & mobile projects.",

  keywords: [
    // Nom propre
    "Samba Diop",
    "Samba Diop développeur",
    "Samba Diop ingénieur",
    "Samba Diop programmeur",
    "Samba Diop Dakar",
    "Samba Diop Sénégal",
    "Samba Diop 99mass",
    "99mass",
    "99mass developer",
    // Géographique FR
    "développeur sénégal",
    "développeur dakar",
    "développeur afrique de l'ouest",
    "ingénieur logiciel sénégal",
    "développeur full stack sénégal",
    "développeur flutter sénégal",
    "développeur react sénégal",
    "développeur mobile sénégal",
    "développeur web dakar",
    "freelance développeur sénégal",
    "développeur full stack dakar",
    "meilleur développeur sénégal",
    // Géographique EN
    "software engineer senegal",
    "developer senegal",
    "web developer dakar",
    "mobile developer senegal",
    "full stack developer senegal",
    "flutter developer senegal",
    "freelance developer senegal",
    "software engineer west africa",
    "developer west africa",
    "best developer senegal",
    // Technologies
    "Next.js developer",
    "Flutter developer",
    "React developer",
    "Go developer",
    "Supabase developer",
    "Node.js developer",
    "TypeScript developer",
    // Portfolio
    "portfolio développeur sénégal",
    "portfolio ingénieur logiciel",
  ],

  authors: [{ name: "Samba Diop", url: BASE_URL }],
  creator: "Samba Diop",
  publisher: "Samba Diop",

  alternates: {
    canonical: BASE_URL,
    languages: {
      "fr-SN": BASE_URL,
      "en-US": `${BASE_URL}/en`,
    },
  },

  openGraph: {
    type: "profile",
    url: BASE_URL,
    siteName: "Samba Diop — Portfolio",
    title:
      "Samba Diop — Développeur Full-Stack & Mobile | Dakar, Sénégal",
    description:
      "Ingénieur logiciel Full-Stack & Mobile basé à Dakar, Sénégal. Expert Next.js, Flutter, React, Go, Supabase. Freelance disponible pour projets internationaux.",
    locale: "fr_SN",
    alternateLocale: "en_US",
    images: [
      {
        url: "/images/og-samba-diop.jpg",
        width: 1200,
        height: 630,
        alt: "Samba Diop — Développeur Full-Stack & Mobile à Dakar, Sénégal",
      },
    ],
    firstName: "Samba",
    lastName: "Diop",
    username: "99mass",
    gender: "male",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Samba Diop — Développeur Full-Stack & Mobile | Dakar, Sénégal",
    description:
      "Ingénieur logiciel Full-Stack & Mobile à Dakar, Sénégal. Next.js · Flutter · React · Go · Supabase. Freelance disponible.",
    images: ["/images/og-samba-diop.jpg"],
    creator: "@99mass",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f1a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samba Diop",
  alternateName: ["99mass", "Samba Diop développeur", "Samba Diop ingénieur"],
  url: BASE_URL,
  image: `${BASE_URL}/images/og-samba-diop.jpg`,
  jobTitle: "Ingénieur Logiciel Full-Stack & Mobile",
  description:
    "Ingénieur logiciel Full-Stack & Mobile basé à Dakar, Sénégal. Spécialisé en Next.js, Flutter, React, Go et Supabase. Disponible pour missions freelance en Afrique de l'Ouest et à l'international.",
  email: "sambadiop161@gmail.com",
  telephone: "+221771169551",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dakar",
    addressCountry: "SN",
    addressRegion: "Dakar",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "Flutter",
    "Go",
    "Supabase",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Développement web",
    "Développement mobile",
    "Full-Stack development",
    "Software Engineering",
  ],
  sameAs: [
    "https://github.com/99mass",
    BASE_URL,
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Université Numérique Cheikh Hamidou Kane",
    alternateName: "UN-CHK",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
};

const jsonLdProfessionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Samba Diop — Développement Web & Mobile",
  description:
    "Services de développement web et mobile full-stack à Dakar, Sénégal. Applications Next.js, Flutter, React, Go, Supabase pour clients en Afrique de l'Ouest et à l'international.",
  url: BASE_URL,
  telephone: "+221771169551",
  email: "sambadiop161@gmail.com",
  areaServed: [
    { "@type": "Country", name: "Sénégal" },
    { "@type": "Country", name: "France" },
    "Afrique de l'Ouest",
    "International",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dakar",
    addressCountry: "SN",
  },
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: "Samba Diop",
  },
  serviceType: [
    "Développement web full-stack",
    "Développement application mobile",
    "Ingénierie logicielle",
    "Freelance développeur",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Samba Diop — Portfolio Développeur Sénégal",
  url: BASE_URL,
  description:
    "Portfolio de Samba Diop, ingénieur logiciel Full-Stack & Mobile basé à Dakar, Sénégal. Projets web et mobile, expériences, compétences.",
  inLanguage: ["fr-SN", "en-US"],
  author: {
    "@type": "Person",
    name: "Samba Diop",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <Script
          id="ld-service"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdProfessionalService),
          }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
