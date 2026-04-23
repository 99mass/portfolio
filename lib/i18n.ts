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
      bio: "Ingénieur logiciel Full-Stack & Mobile, expert en architectures modernes et développement d'applications performantes. Expérience en leadership technique, conception d'APIs et déploiement mobile. Passionné par l'innovation et l'optimisation des systèmes à fort impact.",
      location: "Dakar, Sénégal",
      stackTitle: "Stack technique",
      timelineTitle: "Parcours",
      experiencesTitle: "Expériences",
      formationsTitle: "Formations",
      experiences: [
        {
          year: "Sept - Déc 2025",
          title: "Lead Mobile",
          place: "Sen Digital Factory",
          location: "Dakar, Sénégal",
          description:
            "Responsable de l'architecture mobile. Intégration d'APIs REST. Développement des fonctionnalités. Déploiement sur les stores. Coordination de l'équipe mobile.",
        },
        {
          year: "2023 - 2026",
          title: "Développeur Full-Stack Web & Mobile",
          place: "Zone01 Dakar",
          location: "Dakar, Sénégal",
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
          description: "Application de billetterie mobile pour l'achat de tickets d'evenements. Authentification OTP par SMS, parcours d'evenements, achat de billets avec paiement mobile money (Wave, Orange Money, Free Money), generation de codes QR et gestion des billets achetes. Deployee sur le Play Store.",
          tech: ["Flutter", "Dart", "REST API", "Wave API", "Orange Money API"],
          playStore: "https://play.google.com/store/apps/details?id=com.nexustechstacks.sama_ticket",
          image: "/images/project-samaticket.jpg",
        },
                {
          title: "Fadjiou Pro",
          description: "Application mobile professionnelle deployee sur les stores durant mon experience en tant que Lead Mobile chez Sen Digital Factory. Gestion de services, reservations et notifications push.",
          tech: ["Flutter", "Dart", "REST API", "Firebase"],
          appStore: "https://apps.apple.com/us/app/fadjou-pro/id6754820442?l=fr-FR",
          image: "/images/project-mobile-fadjiou.jpg",
        },
        {
          title: "Movie List",
          description: "Application Flutter de decouverte de films. Parcourir les films populaires, recherche avancee, fiches detaillees avec notes, bandes-annonces et recommandations.",
          tech: ["Flutter", "Dart", "TMDB API", "Provider"],
          github: "https://github.com/99mass/movie-list",
          image: "/images/project-mobile-movielist.jpg",
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
      bio: "Full-Stack & Mobile Software Engineer, expert in modern architectures and high-performance application development. Experienced in technical leadership, API design, and mobile deployment. Passionate about innovation and optimizing high-impact systems.",
      location: "Dakar, Senegal",
      stackTitle: "Tech Stack",
      timelineTitle: "Journey",
      experiencesTitle: "Experience",
      formationsTitle: "Education",
      experiences: [
        {
          year: "Sept - Dec 2025",
          title: "Lead Mobile Developer",
          place: "Sen Digital Factory",
          location: "Dakar, Senegal",
          description:
            "Mobile architecture ownership. REST API integration. Feature development. App store deployment. Mobile team coordination.",
        },
        {
          year: "2023 - 2026",
          title: "Full-Stack Web & Mobile Developer",
          place: "Zone01 Dakar",
          location: "Dakar, Senegal",
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
          description: "Mobile ticketing application for event ticket purchases. SMS OTP authentication, event browsing, ticket purchasing with mobile money payment (Wave, Orange Money, Free Money), QR code generation and ticket management. Deployed on the Play Store.",
          tech: ["Flutter", "Dart", "REST API", "Wave API", "Orange Money API"],
          playStore: "https://play.google.com/store/apps/details?id=com.nexustechstacks.sama_ticket",
          image: "/images/project-samaticket.jpg",
        },
                {
          title: "Fadjiou Pro",
          description: "Professional mobile application deployed on app stores during my experience as Lead Mobile at Sen Digital Factory. Service management, bookings and push notifications.",
          tech: ["Flutter", "Dart", "REST API", "Firebase"],
          appStore: "https://apps.apple.com/us/app/fadjou-pro/id6754820442?l=fr-FR",
          image: "/images/project-mobile-fadjiou.jpg",
        },
        {
          title: "Movie List",
          description: "Flutter movie discovery app. Browse popular movies, advanced search, detailed sheets with ratings, trailers and recommendations.",
          tech: ["Flutter", "Dart", "TMDB API", "Provider"],
          github: "https://github.com/99mass/movie-list",
          image: "/images/project-mobile-movielist.jpg",
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
