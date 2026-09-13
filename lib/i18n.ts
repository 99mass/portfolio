export type Locale = "fr" | "en"

export const translations = {
  fr: {
    // Hero
    hero: {
      title: "Ingénieur Logiciel",
      tagline: "Construction d'architectures modernes et d'applications haute performance.",
      taglineSuffix: "Full-Stack & Mobile.",
      scroll: "Défiler",
    },
    // Section labels
    sections: {
      hero: "Accueil",
      about: "À propos",
      web: "Web",
      mobile: "Mobile",
      skills: "Compétences",
      contact: "Contact",
    },
    // Section numbered labels
    sectionLabels: {
      about: "À propos",
      webProjects: "Projets Web",
      mobile: "Mobile",
      skills: "Compétences",
      contact: "Contact",
    },
    // About section
    about: {
      headline: "Qui suis-je ?",
      bio: "Je suis Samba Diop, ingénieur logiciel Full-Stack & Mobile basé à Dakar, Sénégal. Passionné par la création de produits numériques à fort impact, je conçois et développe des applications web et mobile de A à Z — de l'architecture technique jusqu'au déploiement en production.\n\nAvec une maîtrise de Flutter, Next.js, React, Go, Supabase et Firebase, j'interviens aussi bien côté frontend que backend. Je publie des applications sur l'App Store (Apple App Store Connect) et Google Play Store en autonomie complète.\n\nAu-delà du code, je suis polyvalent : montage vidéo, gestion d'outils digitaux, coordination d'équipe. Je travaille en freelance pour des clients au Sénégal, en Afrique de l'Ouest et à l'international. Toujours à la recherche de nouveaux défis pour construire des solutions qui font la différence.",
      location: "Dakar, Sénégal",
      stackTitle: "Stack technique",
      timelineTitle: "Parcours",
      experiencesTitle: "Expériences",
      formationsTitle: "Formations",
      experiences: [
        {
          year: "Juin 2026 - Présent",
          title: "Assistant Digital (Freelance)",
          place: "Le Guide IA",
          location: "New York, États-Unis (Remote)",
          description:
            "Polyvalence complète en tant qu'assistant digital : conception et développement Full-Stack de la plateforme Le Guide IA , montage vidéo pour les formations et contenus en ligne, gestion des outils digitaux et contribution à toutes les tâches techniques de la structure.",
        },
        {
          year: "Sept - Déc 2025",
          title: "Lead Mobile (Freelance)",
          place: "Sen Digital Factory",
          location: "Dakar, Sénégal (Remote)",
          description:
            "Responsable de l'architecture mobile. Intégration d'APIs REST. Développement des fonctionnalités. Déploiement sur les stores. Coordination de l'équipe mobile.",
        },
        {
          year: "2023 - 2026",
          title: "Développeur Full-Stack Web & Mobile",
          place: "Zone01 Dakar",
          location: "Dakar, Sénégal (Sur site)",
          description:
            "Développement d'applications web et mobile. Création et intégration d'APIs REST et GraphQL. Mise en place d'architecture microservices.",
        },
      ],
      formations: [
        {
          year: "2023 - 2025",
          title: "Master 1 & 2 en Ingénierie Logiciel",
          place: "Université Numérique Cheikh Hamidou KANE (UN-CHK)",
          location: "Dakar, Sénégal",
        },
        {
          year: "2024",
          title: "Certification Développement Logiciel JAVA",
          place: "Programme FORCE-N",
          location: "Dakar, Sénégal",
        },
        {
          year: "2023",
          title: "Certification Full-Stack",
          place: "Sonatel Academy",
          location: "Dakar, Sénégal",
        },
        {
          year: "2021 - 2023",
          title: "Licence 3 en Ingénierie Logiciel",
          place: "Université Numérique Cheikh Hamidou KANE (UN-CHK)",
          location: "Dakar, Sénégal",
        },
      ],
    },
    // Web projects
    webProjects: {
      headline: "Projets Web",
      subtitle: "Applications full-stack, outils open-source et plateformes SaaS.",
      viewCode: "Code source",
      viewLive: "Voir en ligne",
      stars: "stars",
      forks: "forks",
      projects: [
        {
          title: "GCOM Goodies",
          description: "Plateforme e-commerce B2B de goodies et objets publicitaires personnalisés. Catalogue interactif avec filtres et recherche, personnalisation sur mesure (couleurs, techniques de marquage, quantités, upload de logo), génération et demande de devis en temps réel avec back-office d'administration complet.",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
          live: "https://www.gcomagency.com/",
          image: "/images/project-gcom.png",
        },
        {
          title: "Le Guide IA",
          description: "Plateforme leader de formations, bootcamps et masterclasses en Intelligence Artificielle. Conception complète : catalogue de formations IA, bootcamps immersifs, espace membre, système de souscription et parcours client automatisé.",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare"],
          live: "https://www.leguideai.com",
          image: "/images/project-leguideia.jpg",
        },
        {
          title: "AfroTentacles",
          description: "Plateforme média et blog d'analyse géoéconomique et géopolitique africaine. Décryptage approfondi des dynamiques continentales, flux d'actualités en temps réel, analyses stratégiques, éditeur de contenu riche et gestion éditoriale moderne.",
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
          live: "https://www.afrotentacles.com",
          image: "/images/project-afrotentacles.jpg",
        },
        {
          title: "Gitea to GitHub",
          description: "Outil CLI de migration automatique de repositories Gitea vers GitHub. Preserve l'historique complet des commits, branches et tags. Projet le plus populaire avec 38 etoiles et 3 forks.",
          tech: ["JavaScript", "Node.js", "GitHub API", "Gitea API"],
          github: "https://github.com/99mass/gitea-to-github",
          image: "/images/project-gitea.jpg",
          stars: 38,
          forks: 3,
        },
        {
          title: "Social Network",
          description: "Reseau social complet avec profils utilisateurs, publications, likes/commentaires, systeme de followers, chat temps reel via WebSocket et notifications.",
          tech: ["Go", "JavaScript", "SQLite", "WebSocket"],
          github: "https://github.com/99mass/social-network",
          image: "/images/project-social-network.jpg",
        },
        {
          title: "Real-Time Forum",
          description: "Forum de discussion temps reel avec WebSocket. Creation de posts, commentaires, categories, messagerie privee instantanee et gestion des utilisateurs connectes.",
          tech: ["Go", "JavaScript", "SQLite", "WebSocket"],
          github: "https://github.com/99mass/real-time-forum",
          image: "/images/project-forum.jpg",
        },
        {
          title: "SICAP SA Redesign",
          description: "Redesign complet du site web de la SICAP SA, entreprise immobiliere senegalaise. Interface moderne, responsive, avec presentation des projets et services.",
          tech: ["TypeScript", "Next.js", "Tailwind", "Vercel"],
          github: "https://github.com/99mass/sicap-sa-website-redesign",
          live: "https://sicap-sa.vercel.app",
          image: "/images/project-sicap.jpg",
        },
        {
          title: "Clubz",
          description: "Plateforme de gestion de clubs et d'evenements. Interface moderne avec gestion des membres, calendrier d'evenements et tableau de bord administratif.",
          tech: ["TypeScript", "Next.js", "Tailwind", "Vercel"],
          github: "https://github.com/99mass/clubz",
          image: "/images/project-clubz.jpg",
        },
        {
          title: "Bomberman DOM",
          description: "Jeu Bomberman multijoueur dans le navigateur. Moteur de jeu custom avec gestion des collisions, power-ups, explosions en chaine et mode 2 joueurs.",
          tech: ["JavaScript", "HTML Canvas", "CSS", "Game Engine"],
          github: "https://github.com/99mass/bomberman-dom",
          image: "/images/project-bomberman.jpg",
        },
      ],
    },
    // Mobile projects 
    mobileProjects: {
      headline: "Projets Mobile",
      subtitle: "Applications natives et cross-platform avec Flutter/Dart.",
      viewCode: "Code source",
      projects: [
        {
          title: "SamaTicket",
          description: "Application de billetterie mobile pour l'achat de tickets d'evenements. Authentification OTP par SMS, parcours d'evenements, achat de billets avec paiement mobile money (Wave, Orange Money, Free Money), generation de codes QR et gestion des billets achetes. Deployee sur le Play Store et l'App Store.",
          tech: ["Flutter", "Dart", "REST API", "Wave API", "Orange Money API"],
          playStore: "https://play.google.com/store/apps/details?id=com.nexustechstacks.sama_ticket",
          appStore: "https://apps.apple.com/us/app/samaticket/id6770509339?l=fr-FR",
          image: "/images/project-samaticket.jpg",
        },
        {
          title: "MyGCOM",
          description: "Application mobile B2B officielle de GCOM Agency disponible sur l'App Store et Google Play. Consultation du catalogue d'objets publicitaires par catégories, recherche rapide, configuration de demandes de devis sur mesure, notifications push et gestion du compte client.",
          tech: ["Flutter", "Dart", "Riverpod", "Supabase", "Firebase", "GoRouter"],
          playStore: "https://play.google.com/store/apps/details?id=com.gcomagency.gcom",
          appStore: "https://apps.apple.com/us/app/mygcom/id6794462636?l=fr-FR",
          image: "/images/project-mygcom.png",
        },
        {
          title: "Teranga Play",
          description: "Rejoignez Teranga play et connectez-vous avec des milliers de passionnés de football. Gestion des réservations en temps réel, traitement automatisé des paiements, avis clients, promotions et analyses statistiques.",
          tech: ["Flutter", "Dart", "REST API", "Firebase"],
          playStore: "https://play.google.com/store/apps/details?id=com.yoonudigital.terangaplay&pcampaignid=web_share",
          image: "/images/project-terangaplay.png",
        },
        {
          title: "Scanne Ma",
          description: "Application de scanner QR rapide, intuitive et légère. Scan instantané de codes QR multi-format, reconnaissance automatique des URLs, respect de la vie privée et fonctionnement hors ligne.",
          tech: ["Flutter", "Dart", "Camera API", "QR Scanner"],
          playStore: "https://play.google.com/store/apps/details?id=com.yoonudigital.scanne_ma",
          image: "/images/project-scannema.png",
        },
        {
          title: "Fadjiou Pro",
          description: "Application mobile professionnelle deployee sur les stores durant mon experience en tant que Lead Mobile chez Sen Digital Factory. Gestion de services, reservations et notifications push.",
          tech: ["Flutter", "Dart", "REST API", "Firebase"],
          appStore: "https://apps.apple.com/us/app/fadjou-pro/id6754820442?l=fr-FR",
          image: "/images/project-mobile-fadjiou.jpg",
        },
        {
          title: "Chess",
          description: "Jeu d'echecs complet en Flutter. Toutes les regles implementees (roque, en passant, promotion), detection d'echec et mat, historique des coups et timer.",
          tech: ["Flutter", "Dart", "Game Logic"],
          github: "https://github.com/99mass/chess",
          image: "/images/project-mobile-chess.jpg",
        },
      ],
    },
    // Skills
    skills: {
      headline: "Compétences",
      subtitle: "Technologies et outils maîtrisés au fil des projets.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        tools: "Outils & DevOps",
        databases: "Bases de données",
      },
    },
    // Contact
    contact: {
      headline: "Contact",
      subtitle: "Un projet en tête ? Discutons-en.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "votre@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Décrivez votre projet ou votre idée...",
      send: "Envoyer",
      sending: "Envoi...",
      success: "Message envoyé avec succès !",
      error: "Une erreur est survenue. Veuillez réessayer.",
      orReach: "Ou contactez-moi directement",
    },
    // Placeholders (keep for unused)
    placeholders: {
      about: "Section à propos bientôt disponible...",
      webProjects: "Projets web bientôt disponibles...",
      mobileProjects: "Projets mobiles bientôt disponibles...",
      skills: "Compétences bientôt disponibles...",
      contact: "Section contact bientôt disponible...",
    },
    // Toggle labels
    themeToggle: {
      toLight: "Passer au mode clair",
      toDark: "Passer au mode sombre",
    },
    langToggle: {
      label: "Changer la langue",
    },
  },
  en: {
    // Hero
    hero: {
      title: "Software Engineer",
      tagline: "Building modern architectures and high-performance applications.",
      taglineSuffix: "Full-Stack & Mobile.",
      scroll: "Scroll",
    },
    // Section labels
    sections: {
      hero: "Home",
      about: "About",
      web: "Web",
      mobile: "Mobile",
      skills: "Skills",
      contact: "Contact",
    },
    // Section numbered labels
    sectionLabels: {
      about: "About",
      webProjects: "Web Projects",
      mobile: "Mobile",
      skills: "Skills",
      contact: "Contact",
    },
    // About section
    about: {
      headline: "Who am I?",
      bio: "I'm Samba Diop, a Full-Stack & Mobile Software Engineer based in Dakar, Senegal. Passionate about building high-impact digital products, I design and develop web and mobile applications end-to-end — from technical architecture to production deployment.\n\nProficient in Flutter, Next.js, React, Go, Supabase, and Firebase, I work across both frontend and backend. I independently publish apps on the App Store (Apple App Store Connect) and Google Play Store.\n\nBeyond coding, I'm versatile: video editing, digital tools management, and team coordination. I work as a freelancer for clients in Senegal, West Africa, and internationally. Always looking for new challenges to build solutions that make a real difference.",
      location: "Dakar, Senegal",
      stackTitle: "Tech Stack",
      timelineTitle: "Journey",
      experiencesTitle: "Experience",
      formationsTitle: "Education",
      experiences: [
        {
          year: "June 2026 - Present",
          title: "Digital Assistant (Freelance)",
          place: "Le Guide IA",
          location: "New York, USA (Remote)",
          description:
            "Full-scope digital assistant role: end-to-end Full-Stack development of the Le Guide IA platform , video editing for online courses and content, digital tools management, and contribution to all technical tasks across the organisation.",
        },
        {
          year: "Sept - Dec 2025",
          title: "Lead Mobile Developer (Freelance)",
          place: "Sen Digital Factory",
          location: "Dakar, Senegal (Remote)",
          description:
            "Mobile architecture ownership. REST API integration. Feature development. App store deployment. Mobile team coordination.",
        },
        {
          year: "2023 - 2026",
          title: "Full-Stack Web & Mobile Developer",
          place: "Zone01 Dakar",
          location: "Dakar, Senegal (On-site)",
          description:
            "Web and mobile application development. REST and GraphQL API creation and integration. Microservices architecture implementation.",
        },
      ],
      formations: [
        {
          year: "2023 - 2025",
          title: "Master's in Software Engineering",
          place: "Cheikh Hamidou KANE Digital University (UN-CHK)",
          location: "Dakar, Senegal",
        },
        {
          year: "2024",
          title: "JAVA Software Development Certification",
          place: "FORCE-N Program",
          location: "Dakar, Senegal",
        },
        {
          year: "2023",
          title: "Full-Stack Certification",
          place: "Sonatel Academy",
          location: "Dakar, Senegal",
        },
        {
          year: "2021 - 2023",
          title: "Bachelor's in Software Engineering",
          place: "Cheikh Hamidou KANE Digital University (UN-CHK)",
          location: "Dakar, Senegal",
        },
      ],
    },
    // Web projects
    webProjects: {
      headline: "Web Projects",
      subtitle: "Full-stack applications, open-source tools, and SaaS platforms.",
      viewCode: "Source code",
      viewLive: "View live",
      stars: "stars",
      forks: "forks",
      projects: [
        {
          title: "GCOM Goodies",
          description: "B2B e-commerce platform for custom promotional items and goodies. Interactive catalog with search and filters, bespoke customization (colors, branding techniques, MOQ, logo upload), real-time quotation requests, and full administrative back-office.",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
          live: "https://www.gcomagency.com/",
          image: "/images/project-gcom.png",
        },
        {
          title: "Le Guide IA",
          description: "Leading training, bootcamp, and masterclass platform for Artificial Intelligence. Complete platform design and development: AI training catalog, immersive bootcamps, student member portal, subscription system, and automated customer journey.",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare"],
          live: "https://www.leguideai.com",
          image: "/images/project-leguideia.jpg",
        },
        {
          title: "AfroTentacles",
          description: "Media platform and analytical blog focused on African geoeconomics and geopolitics. In-depth strategic analyses of continental dynamics, real-time news feed, rich content editor, and modern editorial management.",
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
          live: "https://www.afrotentacles.com",
          image: "/images/project-afrotentacles.jpg",
        },
        {
          title: "Gitea to GitHub",
          description: "CLI tool for automatic Gitea to GitHub repository migration. Preserves full commit history, branches, and tags. Most popular project with 38 stars and 3 forks.",
          tech: ["JavaScript", "Node.js", "GitHub API", "Gitea API"],
          github: "https://github.com/99mass/gitea-to-github",
          image: "/images/project-gitea.jpg",
          stars: 38,
          forks: 3,
        },
        {
          title: "Social Network",
          description: "Full-featured social network with user profiles, posts, likes/comments, follower system, real-time WebSocket chat and notifications.",
          tech: ["Go", "JavaScript", "SQLite", "WebSocket"],
          github: "https://github.com/99mass/social-network",
          image: "/images/project-social-network.jpg",
        },
        {
          title: "Real-Time Forum",
          description: "Real-time discussion forum with WebSocket. Post creation, comments, categories, instant private messaging and online user management.",
          tech: ["Go", "JavaScript", "SQLite", "WebSocket"],
          github: "https://github.com/99mass/real-time-forum",
          image: "/images/project-forum.jpg",
        },
        {
          title: "SICAP SA Redesign",
          description: "Complete website redesign for SICAP SA, a Senegalese real estate company. Modern responsive interface showcasing projects and services.",
          tech: ["TypeScript", "Next.js", "Tailwind", "Vercel"],
          github: "https://github.com/99mass/sicap-sa-website-redesign",
          live: "https://sicap-sa.vercel.app",
          image: "/images/project-sicap.jpg",
        },
        {
          title: "Clubz",
          description: "Club and event management platform. Modern interface with member management, event calendar, and admin dashboard.",
          tech: ["TypeScript", "Next.js", "Tailwind", "Vercel"],
          github: "https://github.com/99mass/clubz",
          live: "https://v0-clubz-mu.vercel.app",
          image: "/images/project-clubz.jpg",
        },
        {
          title: "Bomberman DOM",
          description: "Multiplayer Bomberman game in the browser. Custom game engine with collision detection, power-ups, chain explosions and 2-player mode.",
          tech: ["JavaScript", "HTML Canvas", "CSS", "Game Engine"],
          github: "https://github.com/99mass/bomberman-dom",
          image: "/images/project-bomberman.jpg",
        },
      ],
    },
    // Mobile projects
    mobileProjects: {
      headline: "Mobile Projects",
      subtitle: "Native and cross-platform applications with Flutter/Dart.",
      viewCode: "Source code",
      projects: [
        {
          title: "SamaTicket",
          description: "Mobile ticketing application for event ticket purchases. SMS OTP authentication, event browsing, ticket purchasing with mobile money payment (Wave, Orange Money, Free Money), QR code generation and ticket management. Deployed on Play Store and App Store.",
          tech: ["Flutter", "Dart", "REST API", "Wave API", "Orange Money API"],
          playStore: "https://play.google.com/store/apps/details?id=com.nexustechstacks.sama_ticket",
          appStore: "https://apps.apple.com/us/app/samaticket/id6770509339?l=fr-FR",
          image: "/images/project-samaticket.jpg",
        },
        {
          title: "MyGCOM",
          description: "Official B2B mobile application for GCOM Agency available on App Store and Google Play. Browse custom promotional items catalog by category, quick search, bespoke quotation request configuration, push notifications, and client account management.",
          tech: ["Flutter", "Dart", "Riverpod", "Supabase", "Firebase", "GoRouter"],
          playStore: "https://play.google.com/store/apps/details?id=com.gcomagency.gcom",
          appStore: "https://apps.apple.com/us/app/mygcom/id6794462636?l=fr-FR",
          image: "/images/project-mygcom.png",
        },
        {
          title: "Teranga Play",
          description: "Connect with thousands of football enthusiasts and venue managers. Real-time booking management, automated payments, customer reviews and ratings, promotional tools, and detailed analytics.",
          tech: ["Flutter", "Dart", "REST API", "Firebase"],
          playStore: "https://play.google.com/store/apps/details?id=com.yoonudigital.terangaplay&pcampaignid=web_share",
          image: "/images/project-terangaplay.png",
        },
        {
          title: "Scanne Ma",
          description: "Fast, intuitive, and lightweight QR Code scanner application. Instant multi-format QR scanning, automatic URL recognition, complete privacy respect, and offline support.",
          tech: ["Flutter", "Dart", "Camera API", "QR Scanner"],
          playStore: "https://play.google.com/store/apps/details?id=com.yoonudigital.scanne_ma",
          image: "/images/project-scannema.png",
        },
        {
          title: "Fadjiou Pro",
          description: "Professional mobile application deployed on app stores during my experience as Lead Mobile at Sen Digital Factory. Service management, bookings and push notifications.",
          tech: ["Flutter", "Dart", "REST API", "Firebase"],
          appStore: "https://apps.apple.com/us/app/fadjou-pro/id6754820442?l=fr-FR",
          image: "/images/project-mobile-fadjiou.jpg",
        },
        {
          title: "Chess",
          description: "Complete chess game in Flutter. All rules implemented (castling, en passant, promotion), checkmate detection, move history and timer.",
          tech: ["Flutter", "Dart", "Game Logic"],
          github: "https://github.com/99mass/chess",
          image: "/images/project-mobile-chess.jpg",
        },
      ],
    },
    // Skills
    skills: {
      headline: "Skills",
      subtitle: "Technologies and tools mastered through projects.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        tools: "Tools & DevOps",
        databases: "Databases",
      },
    },
    // Contact
    contact: {
      headline: "Contact",
      subtitle: "Have a project in mind? Let's talk about it.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Describe your project or idea...",
      send: "Send",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "An error occurred. Please try again.",
      orReach: "Or reach me directly",
    },
    // Placeholders
    placeholders: {
      about: "About section coming next...",
      webProjects: "Web projects coming next...",
      mobileProjects: "Mobile projects coming next...",
      skills: "Skills coming next...",
      contact: "Contact coming next...",
    },
    // Toggle labels
    themeToggle: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
    langToggle: {
      label: "Switch language",
    },
  },
} as const

export type Translations = (typeof translations)[Locale]
