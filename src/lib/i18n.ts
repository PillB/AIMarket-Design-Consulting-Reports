/**
 * Ursa Coffee i18n — bilingual English / Spanish (Peru) translations.
 *
 * Namespaces:
 *  - nav       : header navigation labels (Dashboard, Dossier, Tools, …)
 *  - actions   : action-button copy (Open the calculator, Print / PDF, …)
 *  - badges    : short eyebrow / section badges ("Read me first", "Brand health" …)
 *  - common    : reusable UI labels (Verified, Partial, Subject, Scope, …)
 *  - footer    : footer paragraph + section headers
 *  - content   : strategic content — dashboard hero/lede, section titles,
 *                the 9 headline cards, and the ViewHero eyebrow + title for
 *                every dossier module and tool view (24 routes + dashboard).
 *
 * Spanish copy is hand-written in Peruvian Spanish — warm, direct, no
 * translated-corporate tone. The bear / gram / green triplet, the "Un
 * gramo a la vez" tagline, and proper nouns (Ursa, Alcanfores, Miraflores,
 * Hormozi, Sutherland, Bisetti, Puku Puku, Neira, Terrua, Punto Café,
 * Ursagroni) stay in their original form on both sides.
 */

export type Language = "en" | "es";

export type Namespace =
  | "nav"
  | "actions"
  | "badges"
  | "common"
  | "footer"
  | "content";

export type TranslationDict = Record<string, string>;

export type Translations = Record<Namespace, Record<Language, TranslationDict>>;

export const translations: Translations = {
  nav: {
    en: {
      dashboard: "Dashboard",
      dossier: "Dossier",
      tools: "Tools",
      sources: "Sources",
      "ursa-manana": "Ursa Mañana",
      "static-dossier": "Static Dossier",
      "strategic-dossier-2026": "Strategic Dossier · 2026",
      "ursa-tagline": "Ursa Coffee Roasters",
      top: "Top",
      "dossier-modules": "Dossier Modules",
      "interactive-tools": "Interactive Tools",
      "ursa-landing": "Ursa Mañana Landing",
      "sources-evidence": "Sources & Evidence",
      theme: "Theme",
      "open-static-dossier": "Open Static Dossier",
      "toggle-menu": "Toggle menu",
      "go-dashboard": "Ursa Coffee — go to dashboard",
      "routes.home": "Dashboard",
      "routes.brand": "Brand Audit",
      "routes.market": "Market & Competitors",
      "routes.menu": "Menu & Product",
      "routes.growth": "Growth & Retention",
      "routes.viral": "Viral Content Lab",
      "routes.creative": "Creative Campaigns",
      "routes.roadmap": "Roadmap & KPIs",
      "routes.calculator": "Subscription Calculator",
      "routes.menu-studio": "Menu Engineering Studio",
      "routes.competitors": "Competitor Intelligence",
      "routes.content-calendar": "Content Calendar",
      "routes.experiments": "Experiment Tracker",
      "routes.style-guide": "Brand Style Guide",
      "routes.budget": "Budget Allocator",
      "routes.origin-atlas": "Coffee Origin Atlas",
      "routes.roi": "ROI Dashboard",
      "routes.campaign-builder": "Campaign Builder",
      "routes.spirit-checker": "Spirit Checker",
      "routes.swot": "SWOT Matrix",
      "routes.pilot": "Pilot Dashboard",
      "routes.scorecard": "Brand Scorecard",
      "routes.loyalty": "Loyalty Card Analysis",
      "routes.sources": "Sources & Evidence",
      "routes.landing": "Ursa Mañana Landing",
    },
    es: {
      dashboard: "Panel",
      dossier: "Dossier",
      tools: "Herramientas",
      sources: "Fuentes",
      "ursa-manana": "Ursa Mañana",
      "static-dossier": "Dossier Estático",
      "strategic-dossier-2026": "Dossier Estratégico · 2026",
      "ursa-tagline": "Ursa Coffee Roasters",
      top: "Inicio",
      "dossier-modules": "Módulos del dossier",
      "interactive-tools": "Herramientas interactivas",
      "ursa-landing": "Landing de Ursa Mañana",
      "sources-evidence": "Fuentes y Evidencia",
      theme: "Tema",
      "open-static-dossier": "Abrir Dossier Estático",
      "toggle-menu": "Abrir menú",
      "go-dashboard": "Ursa Coffee — ir al panel",
      "routes.home": "Panel",
      "routes.brand": "Auditoría de Marca",
      "routes.market": "Mercado y Competidores",
      "routes.menu": "Carta y Producto",
      "routes.growth": "Crecimiento y Retención",
      "routes.viral": "Lab de Contenido Viral",
      "routes.creative": "Campañas Creativas",
      "routes.roadmap": "Hoja de Ruta y KPIs",
      "routes.calculator": "Calculadora de Suscripción",
      "routes.menu-studio": "Estudio de Ingeniería de Carta",
      "routes.competitors": "Inteligencia Competitiva",
      "routes.content-calendar": "Calendario de Contenido",
      "routes.experiments": "Seguimiento de Experimentos",
      "routes.style-guide": "Guía de Estilo de Marca",
      "routes.budget": "Asignador de Presupuesto",
      "routes.origin-atlas": "Atlas de Orígenes de Café",
      "routes.roi": "Tablero de ROI",
      "routes.campaign-builder": "Constructor de Campañas",
      "routes.spirit-checker": "Verificador de Espíritu",
      "routes.swot": "Matriz SWOT",
      "routes.pilot": "Tablero del Piloto",
      "routes.scorecard": "Scorecard de Marca",
      "routes.loyalty": "Análisis de Tarjeta de Fidelidad",
      "routes.sources": "Fuentes y Evidencia",
      "routes.landing": "Landing de Ursa Mañana",
    },
  },

  actions: {
    en: {
      "print-pdf": "Print / PDF",
      "open-calculator": "Open the calculator",
      "see-roadmap": "See the 90-day roadmap",
      "try-calculator": "Try the subscription calculator",
      "open-static-html": "Open static HTML dossiers",
      "switch-light": "Switch to light mode",
      "switch-dark": "Switch to dark mode",
      "switch-en": "English",
      "switch-es": "Español",
    },
    es: {
      "print-pdf": "Imprimir / PDF",
      "open-calculator": "Abrir la calculadora",
      "see-roadmap": "Ver la hoja de ruta de 90 días",
      "try-calculator": "Prueba la calculadora de suscripción",
      "open-static-html": "Abrir dossiers HTML estáticos",
      "switch-light": "Modo claro",
      "switch-dark": "Modo oscuro",
      "switch-en": "English",
      "switch-es": "Español",
    },
  },

  badges: {
    en: {
      "read-me-first": "Read me first",
      "verified-menu": "Verified menu",
      "brand-health": "Brand health",
      modules: "Modules",
      "interactive-tools": "Interactive tools",
      headlines: "Headlines",
      rhythm: "The rhythm",
      "by-the-numbers": "By the numbers",
      "open-questions": "Open questions",
    },
    es: {
      "read-me-first": "Lee esto primero",
      "verified-menu": "Carta verificada",
      "brand-health": "Salud de marca",
      modules: "Módulos",
      "interactive-tools": "Herramientas interactivas",
      headlines: "Titulares",
      rhythm: "El ritmo",
      "by-the-numbers": "En cifras",
      "open-questions": "Preguntas abiertas",
    },
  },

  common: {
    en: {
      verified: "Verified",
      partial: "Partial",
      unverified: "Unverified",
      gap: "Gap",
      module: "Module",
      extra: "Extra",
      subject: "Subject",
      scope: "Scope",
      currency: "Currency",
      report: "Report",
      "campaign-copy": "Campaign copy",
      "english-report": "English",
      "spanish-peru": "Spanish (Peru)",
      address: "Address",
      hours: "Hours",
      tagline: "Tagline",
      instagram: "Instagram",
      layout: "Layout",
      delivery: "Delivery",
      membership: "Membership",
      snapshot: "Snapshot",
      "see-sources": "See Sources & Evidence",
      "verified-at-snapshot": "Verified at research snapshot",
      "operational-data": "Operational data",
      "audience-assets": "Audience & assets",
      "switchToLight": "Switch to light mode",
      "switchToDark": "Switch to dark mode",
    },
    es: {
      verified: "Verificado",
      partial: "Parcial",
      unverified: "Sin verificar",
      gap: "Brecha",
      module: "Módulo",
      extra: "Extra",
      subject: "Sujeto",
      scope: "Alcance",
      currency: "Moneda",
      report: "Reporte",
      "campaign-copy": "Copy de campaña",
      "english-report": "Inglés",
      "spanish-peru": "Español (Perú)",
      address: "Dirección",
      hours: "Horario",
      tagline: "Lema",
      instagram: "Instagram",
      layout: "Layout",
      delivery: "Delivery",
      membership: "Membresía",
      snapshot: "Snapshot",
      "see-sources": "Ver Fuentes y Evidencia",
      "verified-at-snapshot": "Verificado en el snapshot de investigación",
      "operational-data": "Datos operativos",
      "audience-assets": "Audiencia y activos",
      "switchToLight": "Cambiar a modo claro",
      "switchToDark": "Cambiar a modo oscuro",
    },
  },

  footer: {
    en: {
      "brand-name": "Ursa Coffee Roasters — Strategic Dossier",
      intro:
        "Research-grounded brand, product, graphic, and marketing plan prepared for the owners of Ursa Coffee Roasters, Alcanfores 183, Miraflores, Lima. Preserves the existing Art Nouveau / bear / roastery identity. No rebrand. Compiled 2026-08-01.",
      "dossier-modules": "Dossier Modules",
      more: "More",
      "module-01": "01 · Brand Audit",
      "module-02": "02 · Market & Customer Voice",
      "module-03": "03 · Menu & Product",
      "module-04": "04 · Growth & Retention",
      "module-05": "05 · Viral Content Lab",
      "module-06": "06 · Creative Campaigns",
      "module-07": "07 · Roadmap & KPIs",
      "module-08": "08 · Subscription & Calculator",
      sources: "Sources & Evidence",
      legal:
        "Compiled from public sources cited in Sources & Evidence. No proprietary material reproduced. This dossier does not represent, alter, or counterfeit the official Ursa Coffee Roasters logo or trademark; the geometric bear glyph used in the header is an original concept mark for navigation only.",
    },
    es: {
      "brand-name": "Ursa Coffee Roasters — Dossier Estratégico",
      intro:
        "Plan de marca, producto, gráfica y marketing con base en investigación, preparado para los dueños de Ursa Coffee Roasters, Alcanfores 183, Miraflores, Lima. Cuida la identidad existente — Art Nouveau, oso, tostadora. Sin rebrand. Compilado 2026-08-01.",
      "dossier-modules": "Módulos del dossier",
      more: "Más",
      "module-01": "01 · Auditoría de Marca",
      "module-02": "02 · Mercado y Voz del Cliente",
      "module-03": "03 · Carta y Producto",
      "module-04": "04 · Crecimiento y Retención",
      "module-05": "05 · Lab de Contenido Viral",
      "module-06": "06 · Campañas Creativas",
      "module-07": "07 · Hoja de Ruta y KPIs",
      "module-08": "08 · Suscripción y Calculadora",
      sources: "Fuentes y Evidencia",
      legal:
        "Compilado de fuentes públicas citadas en Fuentes y Evidencia. No se reproduce material propietario. Este dossier no representa, altera ni falsifica el logo o la marca oficial de Ursa Coffee Roasters; el glifo geométrico del oso que aparece en el encabezado es una marca de concepto original, solo para navegación.",
    },
  },

  content: {
    en: {
      /* ---- Dashboard hero ---- */
      "dashboard.eyebrow": "Strategic Dossier · Prepared 2026-08-01 · Miraflores, Lima",
      "dashboard.title":
        "A roaster-first growth plan that protects the bear, the gram, and the green.",
      "dashboard.lede":
        "This command center preserves what Ursa Coffee Roasters already is — the Art Nouveau lean, the browns-and-greens palette, the bear motif, the in-house roastery on the floor, the two-bar theatre, and the “Un gramo a la vez” tagline — and proposes a conservative-refinement growth system across brand, menu, marketing, content, and creative. The direction is refinement, not rebrand; every recommendation is checked against the bear, the gram, and the green before it ships.",

      /* ---- Dashboard section titles ---- */
      "dashboard.section.how-to-use": "How to use this command center",
      "dashboard.section.signature": "Signature drinks & food",
      "dashboard.section.bear-score":
        "The Bear Score — identity consistency across surfaces",
      "dashboard.section.modules": "Seven linked dossier modules",
      "dashboard.section.tools": "Thirteen working tools — built on the verified research",
      "dashboard.section.headlines": "What this plan actually says",
      "dashboard.section.day-in-life": "A day in the life of Alcanfores 183",
      "dashboard.section.figures": "The plan in four figures",
      "dashboard.section.clarification": "One grouped clarification for the owner",

      /* ---- Dashboard section meta ---- */
      "dashboard.meta.signature": "From public sources, 2026-08-01",
      "dashboard.meta.bear-score": "Snapshot 2026-08-01",
      "dashboard.meta.tools": "Click any card to open",
      "dashboard.meta.day-in-life": "Interactive · live Lima time",

      /* ---- Dashboard "how to use" body ---- */
      "dashboard.how-to-use.p1":
        "This site is a single, interactive workspace. The seven dossier modules above present the research and recommendations; the nine tools below turn the most important recommendations into things you can actually manipulate — a calculator, a menu builder, a budget allocator, a competitor matrix, and more. Every recommendation is traceable to a source, and every risky assumption is paired with a low-cost experiment.",
      "dashboard.how-to-use.p2":
        "Each view is print-friendly (use the Print button in the footer for a clean PDF), responsive, and keyboard-navigable. The original static HTML dossiers remain available as browsable reference.",
      "dashboard.how-to-use.callout-title": "Spirit-preservation principle",
      "dashboard.how-to-use.callout":
        "If a recommendation forces a choice between (a) protecting Ursa's existing bear / Art Nouveau / roastery identity and (b) chasing a generic growth tactic, this dossier always chooses (a). The conservative-refinement direction is the permanent system; experimental expressions are kept seasonal and reversible.",
      "dashboard.disambiguation-title": "Disambiguation — read before any external comparison",
      "dashboard.disambiguation":
        "An unrelated “URSA” roastery and art gallery exists at ursabpt.com in Bridgeport, CT, USA. It is not the Peruvian brand and is not a benchmark. All references to Ursa in this dossier mean Ursa Coffee Roasters of Miraflores, Lima, Peru.",

      /* ---- Dashboard headline cards (1–9) ---- */
      "dashboard.h1.title": "1 · Ursa is more distinctive than it looks",
      "dashboard.h1.body":
        "The bear, the gram, the Art Nouveau lean, the two-bar layout, and named drinks like Ursagroni add up to a brand that already does what Lima's specialty scene rewards: a recognizable identity rather than trend-hopping. The plan refines this rather than replacing it.",
      "dashboard.h2.title": "2 · The biggest gap is distribution, not product",
      "dashboard.h2.body":
        "Ursa has the roastery, the drinks, and the atmosphere. What it lacks is review-channel presence, a Google Business Profile that converts, a creator network, a hospitality pipeline into the 8+ hotels within walking distance, and — most visibly — a website. All five main Miraflores competitors already have one. The plan fixes this in the first 30 days.",
      "dashboard.h3.title": "3 · Hormozi + Sutherland adapt, with caveats",
      "dashboard.h3.body":
        "Hormozi's Value Equation and offer-stack discipline adapt usefully to a café — the dossier adapts rather than imports them, with explicit “do not” lists where the framework would overreach. Sutherland's perceived-value lens is the cheaper lever: story cards, named preparations, and the bear as a recurring character often beat expensive rational changes at near-zero cost.",
      "dashboard.h4.title": "4 · Conservative refinement is the recommended direction",
      "dashboard.h4.body":
        "Of three brand-evolution levels, the plan recommends Level 1 as the permanent system, Level 2 as a 6-month growth skin, and Level 3 only as seasonal expression. Total rebrand is explicitly off the table.",
      "dashboard.h5.title": "5 · Each risky assumption has a test and a stop rule",
      "dashboard.h6.title": "6 · The 90-day plan is owned, not aspirational",
      "dashboard.h7.title": "7 · NEW · Ursa Mañana works on marginal-cost math",
      "dashboard.h7.body-start":
        "A S/. 20/month unlimited-coffee subscription (Mon–Fri 7–10am, no milk drinks, in-store only, 1 cup/visit) is profitable across all three calculator presets — conservative, default, optimistic — because Ursa's own-roastery keeps marginal cost at S/. 1.20–1.80/cup. At default assumptions, net profit is",
      "dashboard.h7.body-end":
        "before cannibalization. The real risk is cannibalization, which is why an interactive calculator models it explicitly.",
      "dashboard.h8.title": "8 · Ownable space sits orthogonal to competitors",
      "dashboard.h8.body":
        "Punto Café won Premios Somos 2024. Neira has 4+ locations. Bisetti owns “escuela de café”. Puku Puku owns “microlotes”. Terrua charges US$25 for a tasting. Ursa's ownable space — bear + two bars + named-drink portmanteaus + “un gramo a la vez” — sits orthogonal to all of these.",
      "dashboard.h9.title": "9 · Every claim is traceable; every gap is named",
      "dashboard.h9.body":
        "Each strategic claim cites a public source or marks itself as a scenario assumption. Where data is missing — average ticket, repeat rate, margin — the dossier says so and absorbs the gap with lean, moderate, and growth scenarios rather than invented numbers. No recommendation is held together by filler.",

      /* ---- Dashboard headline 5 body (deepened) ---- */
      "dashboard.h5.body":
        "Eleven designed experiments test the riskiest assumptions one at a time. Each carries a single success metric and a single stop rule, so a failed test does not poison the rest of the plan — it is killed cleanly and the lesson logged. Most cost between S/. 0 and S/. 560 and resolve in 14 to 30 days. The discipline only holds if the result is logged on the day it lands; without that, a kill becomes a quiet abandonment and the same mistake repeats. The Experiment Tracker is the single source of truth — start with the three riskiest and let the others wait.",

      /* ---- Dashboard headline 6 body (deepened, with budget placeholders) ---- */
      "dashboard.h6.body":
        "The 72-hour, 30-, 60-, and 90-day plans each name an owner, a dependency, a metric, and a stop rule — so the plan survives a sick team member, a slipping vendor, or a single missed metric without collapsing. Three budget scenarios anchor the spend: lean (S/. {lean}/mo), moderate (S/. {moderate}/mo), and growth (S/. {growth}/mo). The owner picks one before day one and the plan adjusts; the 72-hour actions assume only the team and assets already on Alcanfores 183, so the clock starts the moment the choice is made.",

      /* ---- Dashboard headline 10 (award-recognised café, deepened) ---- */
      "dashboard.h10.badge": "NEW",
      "dashboard.h10.title": "10 · Ursa is now an award-recognized café",
      "dashboard.h10.body":
        "Ursa placed among the top five of the CAM Café Perú EXPERIENCE 2025 competition (Specialty Coffee Shop category), alongside Monótono Coffee (first) and Punto Café (second). A specialised jury visited more than forty establishments across seventeen districts. The recognition upgrades Ursa's competitive position from unrecognized to award-recognized, which reframes the work ahead: the gap is no longer about quality, it is about visibility. The plan shifts accordingly — website, Google Business Profile, the hotel pipeline, and the creator network move from optional to immediate.",

      /* ---- Open-questions section body ---- */
      "dashboard.open-questions.lede":
        "Most missing business data (average ticket, repeat-visit rate, margin, customer database, campaign history) is handled by lean/moderate/growth scenarios throughout the plan. Six questions would materially improve the plan if answered, but none blocks the 72-hour launch. The owner should answer them in a single batched reply when convenient.",

      /* ---- Verified menu card headings ---- */
      "dashboard.verified.beverages": "Verified beverages",
      "dashboard.verified.food": "Verified food",
      "dashboard.verified.menu-footnote":
        "The full reconstructed menu and product-development proposals are in Module 03.",

      /* ---- Stat-block figures ---- */
      "dashboard.stat.concepts": "Original content concepts specific to Ursa",
      "dashboard.stat.experiments": "Designed experiments with stop rules",
      "dashboard.stat.subscription": "Proposed monthly subscription price",
      "dashboard.stat.hotels": "Hotels within walking distance of Alcanfores 183",

      /* ---- Open-questions list items ---- */
      "dashboard.q.operational.1": "Monthly marketing budget range (lean / moderate / growth)?",
      "dashboard.q.operational.2": "Average ticket size and best / worst sellers from POS?",
      "dashboard.q.operational.3": "Current repeat-visit rate or any loyalty data?",
      "dashboard.q.audience.1": "Size of existing customer email / WhatsApp list with consent?",
      "dashboard.q.audience.2": "Staff capacity for classes, cuppings, or creator collaborations?",
      "dashboard.q.audience.3": "Owner-supplied logo and packaging asset pack for visual verification?",

      /* ---- ViewHero eyebrow + title for every route ---- */
      /* Dashboard */
      "view.dashboard.eyebrow": "Strategic Dossier · Prepared 2026-08-01 · Miraflores, Lima",
      "view.dashboard.title":
        "A roaster-first growth plan that protects the bear, the gram, and the green.",

      /* Brand audit */
      "view.brand.eyebrow": "Module 01 · Brand Audit & Design System",
      "view.brand.title":
        "Preserve the bear, the gram, and the green — refine everything around them.",

      /* Market */
      "view.market.eyebrow": "Module 02 · Market, Competitors & Customer Voice",
      "view.market.title":
        "Fourteen Miraflores and Lima competitors, mapped — and the one space none of them owns.",

      /* Menu */
      "view.menu.eyebrow": "Module 03 · Menu & Product Development",
      "view.menu.title":
        "Evolve the menu without losing the bear — a structured path from verified staples to evaluated new products.",

      /* Growth */
      "view.growth.eyebrow": "Module 04 · Marketing, Growth & Retention",
      "view.growth.title":
        "An integrated, roaster-first growth system that protects the bear, the gram, and the green.",

      /* Viral */
      "view.viral.eyebrow": "Module 05 · Viral Content Laboratory",
      "view.viral.title":
        "Short-form video, written for the bear, the two bars, and a Miraflores block.",

      /* Creative */
      "view.creative.eyebrow": "Module 06 · Creative Campaign Samples",
      "view.creative.title-line1": "Samples you can click, copy,",
      "view.creative.title-line2": "and hand to a printer.",

      /* Roadmap */
      "view.roadmap.eyebrow": "Module 07 · Implementation Roadmap & KPIs",
      "view.roadmap.title":
        "An owned, not aspirational, 90-day plan — with owners, metrics, and stop rules.",

      /* Sources */
      "view.sources.eyebrow": "Appendix · Sources & Evidence",
      "view.sources.title":
        "Every claim in this dossier is traceable to a public source.",

      /* Landing — Spanish on both sides (already Spanish) */
      "view.landing.eyebrow": "Ursa Mañana · Spanish (Peru)",
      "view.landing.title": "Ursa Mañana — tu café de la mañana, por S/. 20 al mes.",

      /* ---- Landing view · strategic context + captions (deepened, bilingual) ---- */
      "landing.member-card.caption": "Example member card",
      "landing.join.caption":
        "Join the pilot — leave your email and we'll notify you when it launches",
      "landing.strategic.badge": "Strategic context",
      "landing.strategic.title": "Why this page exists",
      "landing.strategic.meta": "Background on the page",
      "landing.strategic.card1.title": "The website gap, addressed",
      "landing.strategic.card1.body":
        "All five main Miraflores competitors — Punto Café, Neira, Bisetti, Puku Puku, and Terrua — operate a website. Ursa does not. This page is the first draft of a customer-facing page for the Ursa Mañana subscription, designed to live at a simple URL reachable from the Instagram bio and the Google Business Profile. It is not a brand site and does not try to be: it is a single-purpose page for the one product that needs a URL to exist, written to convert a tourist searching “café Miraflores” before landing in Lima.",
      "landing.strategic.card2.title": "Spanish copy, written in Lima",
      "landing.strategic.card2.body":
        "The copy is written in Peruvian Spanish, not translated from English. The tone is warm and direct — the same voice a Miraflores regular hears at the bar — and the bear character appears naturally, never as a mascot, always as a way of speaking about the house. Lima Spanish does not need to be flagged as “Peruvian”; it simply is. Where a tourist might land uncertain whether the offer applies to them, the FAQ answers directly: the subscription is for residents and workers near Alcanfores; a visitor is better served by a cupping or the daily pour-over.",
      "landing.strategic.card3.title": "Testable, reversible, owned",
      "landing.strategic.card3.body":
        "This page goes live when the pilot launches — a 60-day run capped at fifty members. If sign-ups fall short of break-even, the offer is revised or retired without ceremony; no sunk-cost defence of a model that does not pay. The page itself is a static HTML file the owner can host anywhere, with no CMS, no vendor lock-in, and no developer on retainer. The bear, the gram, and the green travel with the page wherever it lives.",

      /* Landing · offer-value + behavioral lens sections (bilingual) */
      "landing.offer.outcome.badge": "Outcome",
      "landing.offer.outcome.heading": "The outcome the subscriber gets",
      "landing.offer.outcome.body":
        "A morning where the coffee decision is already made. You arrive at Alcanfores 183, take your seat, the barista knows you. The ritual starts with the first gram — and you stop thinking about the price. In the offer-value lens, this is what the subscriber buys: not cheap coffee, but a frictionless morning.",
      "landing.offer.risk-reversal.badge": "Risk reversal",
      "landing.offer.risk-reversal.heading": "We carry the risk, not you",
      "landing.offer.risk-reversal.body":
        "Cancel anytime, no contract, no permanencia. If the first month does not work for you, we refund the pro-rata portion — no questions. If the pilot does not pay in 60 days, we close it clean and documented. The bear prefers an honest model to a sinking ship.",
      "landing.offer.behavioral.badge": "Behavioral lens",
      "landing.offer.behavioral.heading": "Why it works (a behavioral read)",
      "landing.offer.behavioral.body":
        "The subscription is not a discount — it is a ritual. You pay once a month, you come without thinking, the barista stamps a paw. From a perceived-value perspective, what the subscriber receives is not «cheap coffee» but «a morning of one's own». That difference is what sustains the side-attach: the coffee opens the door, the full morning pays for it. The scarcity of the 50-member cap is itself a signal — the subscriber feels chosen, not sold to.",

      /* Calculator */
      "view.calculator.eyebrow": "Module 08 · New product proposal · Interactive",
      "view.calculator.title":
        "Ursa Mañana — Subscription Economics & Cutoff Calculator",

      /* Menu Studio */
      "view.menu-studio.eyebrow": "Extra Tool T1 · Interactive",
      "view.menu-studio.title": "Menu Engineering Studio",

      /* Competitors */
      "view.competitors.eyebrow": "Extra Tool T2 · Interactive",
      "view.competitors.title": "Competitor Intelligence Dashboard.",
      "competitors.lede":
        "A filterable comparison matrix of the fourteen Miraflores and Lima competitors, plus Ursa's own profile pinned to the top of the table. Sort by name, area, or website presence; filter the set; read each head-to-head verdict; and see where every player sits on the scale-vs-craft quadrant. The decision this dashboard supports is narrow: where Ursa should lean in, where it should hold, and where it should not compete head-on. Use it to choose battles, not to chase rivals.",
      "competitors.stat.tracked": "Competitors tracked",
      "competitors.stat.website": "Operate a website",
      "competitors.stat.miraflores": "Miraflores presence (incl. clusters)",
      "competitors.stat.distinctiveness": "Ursa distinctiveness score",
      "competitors.meta.rows": "Rows",
      "competitors.meta.rows-value": "{n} (incl. Ursa)",
      "competitors.meta.filterable": "Filterable by",
      "competitors.meta.filterable-value": "Area · Website · Name",
      "competitors.meta.source": "Source",
      "competitors.meta.source-value": "Module 02 snapshot",
      "competitors.summary.caption":
        "The distinctiveness score is qualitative — it is the share of competitors against which Ursa holds a clear positional lead (the bear, the two-bar theatre, the named-drink convention, the Art Nouveau craft language). It is not a market-share metric. The mechanism: market share would require POS data we do not have; positional distinctiveness only requires observing what each competitor visibly does, which is public. Treat the number as a directional read on how crowded Ursa's position is, not as a number to optimise.",
      "competitors.section.filter.badge": "Filter controls",
      "competitors.section.filter.title": "Narrow the set",
      "competitors.section.filter.meta": "Ursa stays pinned at the top of every filter result",
      "competitors.filter.search-label": "Search by name",
      "competitors.filter.search-placeholder": "e.g. Punto, Bisetti, Puku…",
      "competitors.filter.area-label": "Area",
      "competitors.filter.area.all": "All",
      "competitors.filter.area.miraflores": "Miraflores",
      "competitors.filter.area.barranco": "Barranco",
      "competitors.filter.area.multiple-lima": "Multiple Lima",
      "competitors.filter.area.lima": "Lima",
      "competitors.filter.website-label": "Has website",
      "competitors.filter.website.all": "All",
      "competitors.filter.website.yes": "Yes",
      "competitors.filter.website.no": "No",
      "competitors.filter.showing-label": "Showing",
      "competitors.filter.pill-competitors": "{n} competitors",
      "competitors.filter.pill-website": "Website: {value}",
      "competitors.filter.pill-area": "Area: {value}",
      "competitors.filter.pill-search": "Search: “{value}”",
      "competitors.filter.reset": "Reset all",
      "competitors.section.table.badge": "Comparison matrix",
      "competitors.section.table.title": "Side-by-side, sortable",
      "competitors.section.table.meta":
        "Click a column header to sort · scroll horizontally on mobile",
      "competitors.table.col.name": "Name",
      "competitors.table.col.area": "Area",
      "competitors.table.col.strength": "Strength",
      "competitors.table.col.weakness": "Weakness",
      "competitors.table.col.implication": "Ursa implication",
      "competitors.table.col.website": "Website",
      "competitors.table.website-yes": "Yes",
      "competitors.table.website-no": "No",
      "competitors.table.empty": "No competitors match these filters. Try resetting.",
      "competitors.table.note":
        "Ursa's row is highlighted in gold and pinned to the top so every comparison reads against the same baseline. The mechanism: a comparison without a fixed reference is just a list; pinning Ursa makes every other row a delta, which is what a decision-maker actually needs.",
      "competitors.section.matrix.badge": "Positioning matrix",
      "competitors.section.matrix.title": "Scale vs. craft identity",
      "competitors.section.matrix.meta":
        "Two axes · Ursa owns the high-craft, low-scale quadrant",
      "competitors.matrix.quadrant.top-left": "High craft · Low scale · Niche specialists",
      "competitors.matrix.quadrant.top-right": "High craft · High scale · Category leaders",
      "competitors.matrix.quadrant.bottom-left": "Low craft · Low scale · Undifferentiated",
      "competitors.matrix.quadrant.bottom-right": "Low craft · High scale · Chains",
      "competitors.matrix.axis.scale": "Scale → (single site · · · Lima-wide chain)",
      "competitors.matrix.axis.craft": "Craft identity → (generic · · · distinctive)",
      "competitors.matrix.note":
        "Positions are qualitative, derived from each competitor's verified strength and weakness. The bear marks Ursa — high craft, low scale, the quadrant no Lima chain has bothered to occupy. The mechanism: scale and craft pull in opposite directions in this category because scaling requires systematising the experience, and systematising is exactly what erases the distinctive detail. The quadrant Ursa sits in is empty not by accident but by economics.",
      "competitors.matrix.guide.heading": "How to read this",
      "competitors.matrix.guide.scale":
        "Scale (x-axis) reflects retail reach — single site on the left, Lima-wide chains on the right.",
      "competitors.matrix.guide.craft":
        "Craft identity (y-axis) reflects how distinctive the brand language is — generic at the bottom, ownable at the top.",
      "competitors.matrix.guide.ursa":
        "Ursa's quadrant — high craft, low scale — is uncontested. No competitor combines a distinctive visual identity with single-site intimacy.",
      "competitors.matrix.guide.move":
        "Strategic move: grow vertically (deeper craft) before horizontally (more sites). Scale without distinctiveness is the trap Puku Puku fell into — it scaled before its identity was ready, and the identity diluted as it grew.",
      "competitors.matrix.open-quadrant.title": "The open quadrant",
      "competitors.matrix.open-quadrant.body":
        "The top-left corner — high craft, low scale — is where niche specialists like Bisetti, Terrua, and RAIZ live. Ursa belongs here, but with a sharper identity (the bear) than any of them. Defend the quadrant; do not abandon it chasing Neira's scale. The risk of moving right prematurely is real: a second site before the first site's identity is systematised means the second site drifts, and the drift is what kills the craft. The limitation of this advice: if the Miraflores site's contribution margin cannot cover the owner's draw within twelve months, vertical growth alone will not save the business — pair this quadrant defence with the Subscription Calculator to confirm the unit economics hold.",
      "competitors.section.head-to-head.badge": "Head-to-head",
      "competitors.section.head-to-head.title": "Ursa vs. each competitor",
      "competitors.section.head-to-head.meta":
        "Verdict colour-coded · green = Ursa leads · gold = parity · terracotta = Ursa trails",
      "competitors.head-to-head.implication-label": "Ursa implication",
      "competitors.head-to-head.verdict.lead.label": "Ursa leads",
      "competitors.head-to-head.verdict.lead.desc":
        "Ursa holds an advantage on this axis. Press it in the next campaign, do not rest on it.",
      "competitors.head-to-head.verdict.match.label": "Parity",
      "competitors.head-to-head.verdict.match.desc":
        "Roughly matched — compete on execution, not positioning. A draw here is fine; do not over-invest to win it.",
      "competitors.head-to-head.verdict.trail.label": "Ursa trails",
      "competitors.head-to-head.verdict.trail.desc":
        "Ursa is behind on this axis — do not chase head-on. The trail verdict is a guardrail, not a deficit.",
      "competitors.section.synthesis.badge": "Synthesis",
      "competitors.section.synthesis.title": "What this dashboard is telling you",
      "competitors.synthesis.website.title": "The website gap is the only red line",
      "competitors.synthesis.website.body":
        "Every single competitor in this matrix operates a website. Ursa does not. This is not a competitive disadvantage on craft or scale — it is a basic infrastructure gap, and it is the only axis where Ursa is structurally behind every rival. Close it inside 30 days; the design system, the menu, and the brand language all already exist. The mechanism: a website is the surface where Google search, WhatsApp shares, and TripAdvisor profiles all land. Without it, every other channel sends traffic to a dead end. The cost is bounded — a one-page site on the verified tokens is a week of work, not a quarter.",
      "competitors.synthesis.bear.title": "The bear is uncontested",
      "competitors.synthesis.bear.body":
        "Ursa leads on positional distinctiveness against {leads} of {total} competitors, matches {matches}, and trails {trails}. The two trails — Neira and Puku Puku — are on scale, not craft. Do not chase them. Grow vertically first. The mechanism: scale is a function of capital and operational system, both of which Ursa can build slowly; craft is a function of identity, which Ursa already has and competitors cannot copy without looking derivative. Time is on the side of the asset that compounds — and identity compounds faster than footprint.",
      "competitors.synthesis.button-market": "Open Module 02 (full analysis)",
      "competitors.synthesis.button-brand": "Open Brand Audit",
      "competitors.section.dossier.badge": "T2 · Interactive tool",

      /* Content Calendar */
      "view.content-calendar.eyebrow": "Extra Tool T3 · Interactive",
      "view.content-calendar.title": "Content Calendar & Script Library",

      /* Experiments */
      "view.experiments.eyebrow": "Extra Tool T4 · Interactive",
      "view.experiments.title":
        "Experiment Tracker — eleven tests, four outcomes, one source of truth.",
      "experiments.hero.lede":
        "Track the eleven low-cost experiments from Module 07 against their stop rules. Move each one from Proposed to Running to Passed or Killed. The discipline is the value: an experiment without a stop rule is a marketing expense with no end-date; an experiment with one becomes either a graduated channel or a retired mistake — both are useful, the worst outcome is the experiment that runs forever. Notes persist in your browser via localStorage — no account, no server, no leak.",
      "experiments.hero.meta.experiments": "Experiments",
      "experiments.hero.meta.experiments-value": "{n} tracked",
      "experiments.hero.meta.statuses": "Statuses",
      "experiments.hero.meta.statuses-value": "Proposed · Running · Passed · Killed",
      "experiments.hero.meta.persistence": "Persistence",
      "experiments.hero.meta.persistence-value": "localStorage (per device)",
      "experiments.section.status": "Where the eleven experiments stand right now",
      "experiments.section.status.badge": "Section 01 · Status",
      "experiments.section.status.meta": "Saved in your browser",
      "experiments.stat.total": "Total experiments tracked",
      "experiments.stat.proposed": "Proposed · awaiting launch",
      "experiments.stat.running": "Running · in test now",
      "experiments.stat.graduated": "Graduated · passed or killed",
      "experiments.legend.heading": "Status legend",
      "experiments.legend.proposed": "brief written, not yet live",
      "experiments.legend.running": "live, clock is ticking against the stop rule",
      "experiments.legend.passed": "graduated — becomes a permanent channel",
      "experiments.legend.killed": "stop rule hit — retired, not forgotten",
      "experiments.graduation.heading": "Graduation rate",
      "experiments.graduation.subtitle": "of {n} experiments decided",
      "experiments.graduation.note":
        "The graduation rate is the share of experiments that have closed — Passed plus Killed. A high rate early means the tests are shipping; a low rate means they are stuck in Proposed. The mechanism: an experiment that stays in Proposed is not free — it occupies owner attention that could be running a different test. Move it to Running or retire it; do not let it sit.",
      "experiments.graduation.summary":
        "{passed} passed · {killed} killed · {active} still active or proposed.",
      "experiments.section.filter": "Filter the board by status",
      "experiments.section.filter.badge": "Section 02 · Filter",
      "experiments.section.filter.meta": "{shown} of {total} shown",
      "experiments.filter.all": "All",
      "experiments.filter.proposed": "Proposed",
      "experiments.filter.running": "Running",
      "experiments.filter.passed": "Passed",
      "experiments.filter.killed": "Killed",
      "experiments.filter.reset": "Reset all",
      "experiments.filter.active-note":
        "Showing only experiments with status {status}. Change the filter to see others.",
      "experiments.section.cards": "Experiment cards — pick a status for each test",
      "experiments.section.cards.badge": "Section 03 · Board",
      "experiments.section.cards.meta": "Click a card's selector to update",
      "experiments.section.cards.empty":
        "No experiments match the current filter. Try a different status above.",
      "experiments.card.hypothesis": "Hypothesis",
      "experiments.card.cost": "Cost",
      "experiments.card.metric": "Metric",
      "experiments.card.stop-rule": "Stop rule",
      "experiments.card.status": "Status",
      "experiments.card.status.proposed": "Brief is written. Not yet live.",
      "experiments.card.status.running": "Live — the stop-rule clock is ticking.",
      "experiments.card.status.passed": "Graduated to a permanent channel.",
      "experiments.card.status.killed": "Stop rule hit — retired, not forgotten.",
      "experiments.section.cost": "Cost summary — exposure on Proposed + Running experiments",
      "experiments.section.cost.badge": "Section 04 · Budget",
      "experiments.section.cost.meta": "Conservative range in PEN",
      "experiments.cost.exposure.label":
        "Estimated total exposure · {count} active or proposed",
      "experiments.cost.exposure.body":
        "Lower bound = the minimum cost per experiment. Upper bound = the maximum. The real number lands somewhere in between once each test ships. The mechanism: a range is honest because most experiments have a free version (run it yourself, no contractor) and a paid version (hire it out). The lower bound is the do-it-yourself path; the upper is the delegate path.",
      "experiments.cost.counted.heading": "What is counted",
      "experiments.cost.counted.proposed": "Proposed — exposure reserved in plan.",
      "experiments.cost.counted.running": "Running — exposure committed.",
      "experiments.cost.counted.excluded": "Passed / Killed are excluded — sunk.",
      "experiments.cost.caveats.heading": "Honest caveats",
      "experiments.cost.caveats.body":
        "Costs are scenario ranges, not invoices. Two experiments cost nothing in cash — claiming the Google Business Profile and claiming the TripAdvisor listing — they cost attention, not money, and attention is the real bottleneck. The Subscription Calculator is the place to model the full economics of the unlimited-coffee subscription pilot.",
      "experiments.cost.caveats.button": "Model the subscription in calculator",
      "experiments.cost.cheapest.title": "The single cheapest experiment",
      "experiments.cost.cheapest.body":
        "Claiming the Google Business Profile costs nothing in cash and unlocks the directions call that turns a Google Maps search into a walked-in customer. If only one experiment is run in the first 72 hours, this is the one. The tracker lets you mark it Running immediately, then Passed the day directions calls appear in the GBP dashboard. The mechanism: directions is the one search intent that maps directly to a physical visit, so the listing is the cheapest bridge between intent and foot traffic.",
      "experiments.section.gantt": "90-day Gantt — when each experiment runs",
      "experiments.section.gantt.badge": "Section 05 · Timeline",
      "experiments.section.gantt.meta": "Bars coloured by current status",
      "experiments.gantt.intro":
        "Each bar is positioned by the experiment's stop rule. The earliest stop rule fires on day 7 (the Google Business Profile claim); the latest runs to day 90 (the weekly cupping night). Use this view to see when, in the 90-day window, decisions land. A short bar is a fast decision; a long bar is a slow signal that needs the full window before you graduate or kill it.",
      "experiments.gantt.col.experiment": "Experiment",
      "experiments.gantt.day-label": "Day {n}",
      "experiments.gantt.legend-phases": "Phase gridlines at days 30 · 60 · 90",
      "experiments.gantt.short-bars.title": "Why some bars are short",
      "experiments.gantt.short-bars.body":
        "Short bars are good — they tell you which decisions land first. The Google Business Profile claim is a 7-day test; the cookie pairing table sign is a 14-day test. A long bar like the weekly cupping night is a slow signal: do not graduate or kill it before its second month. The mechanism: community rituals compound, they do not spike; a single cupping night tells you nothing, two tells you a trend, three tells you whether to make it permanent.",
      "experiments.section.notes.title": "Learning log — jot observations per experiment",
      "experiments.section.notes.badge": "Section 06 · Notes",
      "experiments.section.notes.meta": "Auto-saved in localStorage",
      "experiments.notes.intro":
        "Notes persist on this device only. Use them for the things a status pill cannot capture: a customer quote, a surprise metric, a moment the barista flagged something. When you mark an experiment Passed or Killed, the note becomes the rationale. The mechanism: a quarterly review without notes re-litigates every decision; a quarterly review with notes reads the rationale in the writer's own voice and moves on.",
      "experiments.notes.placeholder":
        "Observations for {id} — what did customers say? what surprised you?",
      "experiments.notes.stop-rule-label": "Stop rule",
      "experiments.notes.saved-chars": "{n} chars saved",
      "experiments.notes.empty": "empty",
      "experiments.notes.callout.title": "A note is worth a thousand dashboards",
      "experiments.notes.callout.body":
        "The status pill tells you what happened. The note tells you why. A graduated experiment without a note will be re-litigated at the next quarterly review — write the rationale the day you mark it Passed or Killed. The day you decide is the day the reasoning is freshest; a week later you will reconstruct a more flattering version of it.",
      "experiments.section.crossref.button-roadmap": "Read Module 07 Roadmap",
      "experiments.section.crossref.button-calculator": "Subscription Calculator",
      "experiments.section.crossref.stat.1": "Experiments tracked",
      "experiments.section.crossref.stat.2": "Active or proposed now",
      "experiments.section.crossref.stat.3": "Estimated exposure (PEN)",
      "experiments.section.crossref.stat.4": "Decided (passed or killed)",

      /* Style Guide */
      "view.style-guide.eyebrow": "Extra Tool T5 · Interactive",
      "view.style-guide.title":
        "Brand Style Guide Explorer — the verified tokens, live.",
      "style-guide.hero.lede":
        "Every external surface Ursa ships — the menu, the window vinyl, the WhatsApp reply, the Rappi listing, the website when it arrives — must use the same sixteen colours, three type voices, and one bear. This explorer is the working reference for that consistency. Copy a token, see the type voices at scale, inspect each shared component in every tone, and check the bear across approved sizes and backgrounds. It is the live counterpart to Module 01; the audit there explains why each choice exists, this view is what the choice looks like when applied.",
      "style-guide.hero.meta.palette": "Palette",
      "style-guide.hero.meta.palette-value": "{n} tokens",
      "style-guide.hero.meta.type": "Type",
      "style-guide.hero.meta.type-value": "{n} voices",
      "style-guide.hero.meta.mode": "Mode",
      "style-guide.hero.meta.mode-value": "Interactive · copy-to-clipboard",

      "style-guide.section.color.badge": "Color tokens",
      "style-guide.section.color.title": "The verified palette · click to copy",
      "style-guide.section.color.meta": "{n} swatches · browns · greens · cream · gold",
      "style-guide.section.color.intro":
        "Every swatch below is an interactive token. Tap Copy hex to send the value to your clipboard — a Copied! confirmation appears for 1.5 seconds. Use these exact values; do not invent in-between tints. The mechanism: a fixed palette is what lets sixteen colours read as a system instead of as a sampler. The first tint you invent becomes the second, and by month three the menu, the window, and the Instagram graphic no longer share a vocabulary. If you need a tint that is not here, the answer is no — work the layout instead.",
      "style-guide.color.copy-aria": "Copy {hex} to clipboard",
      "style-guide.color.copy-label": "Copy hex",
      "style-guide.color.copied-label": "Copied!",

      "style-guide.section.typography.badge": "Typography",
      "style-guide.section.typography.title": "Type specimens · display, body, label",
      "style-guide.section.typography.meta": "Cormorant Garamond · Inter · Oswald",
      "style-guide.section.typography.scale-label": "Type scale · applied",
      "style-guide.section.typography.scale-line-1": "Un gramo a la vez.",
      "style-guide.section.typography.scale-line-2": "Tostadores de café de especialidad",
      "style-guide.section.typography.scale-line-3":
        "Specialty coffee, roasted in Miraflores. Every gram is weighed, every origin is named.",
      "style-guide.section.typography.scale-line-4":
        "Espresso bar · Cold-brew bar · In-house roastery",
      "style-guide.typography.label-display": "Display",
      "style-guide.typography.label-body": "Body",
      "style-guide.typography.label-label": "Label",
      "style-guide.typography.note":
        "Three voices is the system. Cormorant Garamond carries the brand register — high contrast, romantic, Art Nouveau. Inter carries the prose — neutral, legible at any size, the voice a customer reads for thirty seconds without fatigue. Oswald carries the labels — condensed, uppercase, the small-print voice that gives menus and signage their structure. The mechanism: separating voice by role means each font only has to do one job, so none of them is ever stretched into a role it cannot carry. Adding a fourth voice is the most common way brands drift — resist it.",

      "style-guide.section.components.badge": "Component library",
      "style-guide.section.components.title":
        "A living style guide · every shared component, every tone",
      "style-guide.section.components.meta":
        "Pills · EvidenceTags · Callouts · Card · StatBlock · ProgressBar · BearMark · Divider · CupGlyph",
      "style-guide.components.pill.heading": "Pill · all tones",
      "style-guide.components.pill.default": "Default",
      "style-guide.components.pill.ok": "Ok · forest",
      "style-guide.components.pill.warn": "Warn · gold",
      "style-guide.components.pill.stop": "Stop · terracotta",
      "style-guide.components.pill.forest": "Forest",
      "style-guide.components.pill.gold": "Gold",
      "style-guide.components.pill.note":
        "Use tone=\"gold\" for emphasis only — never for body labels. The mechanism: gold is the accent that catches the eye, so it works as a highlight, not as a default. A grid full of gold pills reads as decoration, not as a system.",
      "style-guide.components.evidence.heading": "EvidenceTag · all statuses",
      "style-guide.components.evidence.note":
        "Every factual claim in the dossier carries one of these four statuses. The mechanism: a claim without a status is an assertion; a claim with a status is a commitment to what kind of evidence backs it. See Sources & Evidence for the citation trail.",
      "style-guide.components.callout.heading": "Callout · all tones",
      "style-guide.components.callout.gold.title": "Gold · emphasis",
      "style-guide.components.callout.gold.body":
        "Reserved for the recommended option in a choice. Use sparingly — once per section, never twice in a row. The mechanism: gold calls attention; two gold callouts compete and the reader ignores both.",
      "style-guide.components.callout.ok.title": "Ok · verified",
      "style-guide.components.callout.ok.body":
        "Used to confirm a verified fact or a positive outcome. The verification trail lives in Sources & Evidence.",
      "style-guide.components.callout.warn.title": "Warn · caution",
      "style-guide.components.callout.warn.body":
        "Used for disambiguation, caveats, and reversible bets. A warn callout says: read this before you act, but you can still act.",
      "style-guide.components.callout.stop.title": "Stop · guardrail",
      "style-guide.components.callout.stop.body":
        "Used for hard guardrails — things the plan explicitly does not do. A stop callout is non-negotiable; if a tactic breaks it, the tactic is wrong, not the guardrail.",
      "style-guide.components.callout.forest.title": "Forest · spirit",
      "style-guide.components.callout.forest.body":
        "Used for the spirit-preservation principle and brand-identity guardrails. A forest callout invokes the bear, the gram, and the green.",
      "style-guide.components.card.heading-default": "Card · default",
      "style-guide.components.card.body-default":
        "Surface for grouped content. Use highlight for the single recommended item in a set.",
      "style-guide.components.card.heading-highlighted": "Card · highlighted",
      "style-guide.components.card.body-highlighted":
        "Gold ring + shadow lift. Reserved for one item per grid — never two. The mechanism: highlight is a comparison cue, not a decoration; multiple highlights collapse the comparison.",
      "style-guide.components.progress.heading": "ProgressBar",
      "style-guide.components.statblock.heading": "StatBlock · three tones",
      "style-guide.components.statblock.demo.1": "Instagram followers · verified",
      "style-guide.components.statblock.demo.2": "Proposed subscription price",
      "style-guide.components.statblock.demo.3": "Hotels within walking distance",
      "style-guide.components.bearmark.heading":
        "BearMark · ArtNouveauDivider · CupGlyph",
      "style-guide.components.bearmark.note":
        "The ornamental divider separates major sections only. Use it between a section and its conclusion, never between paragraphs.",

      "style-guide.section.tokens.badge": "Tokens",
      "style-guide.section.tokens.title": "Spacing & radius",
      "style-guide.section.tokens.meta": "The invisible grid that holds the brand together",
      "style-guide.section.tokens.radius.heading": "Radius",
      "style-guide.section.tokens.spacing.heading": "Spacing",
      "style-guide.section.tokens.note":
        "The eight spacing tokens and five radius tokens look like trivia. They are not. The mechanism: the eye reads consistency before it reads content, so a menu card whose buttons are 0.375rem and a window vinyl whose buttons are 0.5rem will register as different brands even if the colours match. Hold the line on these tokens and the visual system holds together across any printer, any contractor, any future surface.",
      "style-guide.radius.rounded-sm.use": "Tight · chips, tags",
      "style-guide.radius.rounded-md.use": "Default · inputs, buttons",
      "style-guide.radius.rounded-lg.use": "Cards, callouts",
      "style-guide.radius.rounded-xl.use": "Surface cards",
      "style-guide.radius.rounded-full.use": "Pills, avatars",

      "style-guide.section.bearmark.badge": "BearMark",
      "style-guide.section.bearmark.title":
        "The bear, at every approved size and surface",
      "style-guide.section.bearmark.meta":
        "24 · 32 · 48 · 64 · dark-roast + forest-deep · cream + dark",
      "style-guide.section.bearmark.cream.pill": "On cream · #F4EBD9",
      "style-guide.section.bearmark.cream.label": "Default surface",
      "style-guide.section.bearmark.dark.pill": "On dark · #211208",
      "style-guide.section.bearmark.dark.label": "Footer / hero overlay",
      "style-guide.section.bearmark.callout.title": "Bear-mark tint rules",
      "style-guide.section.bearmark.callout.body":
        "On cream and paper surfaces, use dark-roast at small sizes (≤ 32) and forest-deep at large sizes (≥ 48). On dark surfaces (espresso, forest-deep), use gold at small sizes and cream at large sizes. Terracotta is approved only as a campaign accent — never as the default bear tint. The mechanism: a small bear on cream needs the darkest contrast to stay legible; a large bear on cream needs the calmer green so it does not dominate the layout. Inverting these rules makes the bear either shout or disappear.",

      "style-guide.section.guardrails.badge": "Guardrails",
      "style-guide.section.guardrails.title": "Usage do's and don'ts",
      "style-guide.section.guardrails.meta": "The short list that keeps the brand intact",
      "style-guide.section.guardrails.do.heading": "Do",
      "style-guide.section.guardrails.dont.heading": "Don't",
      "style-guide.section.guardrails.do.1": "Keep the bear on cream, paper, or dark-roast surfaces — the gold catchlight reads clearly.",
      "style-guide.section.guardrails.do.2": "Use Cormorant Garamond for display headings and menu item names only.",
      "style-guide.section.guardrails.do.3": "Reserve gold for emphasis — eyebrows, hairlines, the bear's catchlights.",
      "style-guide.section.guardrails.do.4": "Pair forest-deep green with cream for callouts and section backgrounds.",
      "style-guide.section.guardrails.do.5": "Use the ArtNouveauDivider only between major sections — never inside paragraphs.",
      "style-guide.section.guardrails.do.6": "Set Oswald labels at ≥ 0.66rem with tracking ≥ 0.12em — uppercase is required.",
      "style-guide.section.guardrails.dont.1": "Don't put the bear on blue or indigo — they break the browns-and-greens system.",
      "style-guide.section.guardrails.dont.2": "Don't use Cormorant Garamond for body text — its contrast hurts long-form readability.",
      "style-guide.section.guardrails.dont.3": "Don't tint the bear with colours outside the approved four (dark-roast, forest-deep, gold, terracotta).",
      "style-guide.section.guardrails.dont.4": "Don't use gold for large background fills — it loses its emphasis role.",
      "style-guide.section.guardrails.dont.5": "Don't introduce a second display face — three voices (Cormorant / Inter / Oswald) is the system.",
      "style-guide.section.guardrails.dont.6": "Don't use the bear as a decorative sticker without clear breathing room.",

      "style-guide.section.crossref.badge": "Reference",
      "style-guide.section.crossref.title": "Cross-reference the audit module",
      "style-guide.section.crossref.body":
        "This explorer is the interactive counterpart to Module 01. Open the audit for the full consistent / inconsistent / distinctive / missing analysis and the three brand-evolution levels. The audit explains why each token exists; this view shows what each token looks like applied.",
      "style-guide.section.crossref.button": "Open Module 01",
      "style-guide.section.crossref.stat.1": "Copy-ready palette tokens",
      "style-guide.section.crossref.stat.2": "Type voices, three roles each",
      "style-guide.section.crossref.stat.3": "BearMark approved sizes",
      "style-guide.section.crossref.stat.4": "Do / don't guardrails",
      "style-guide.section.crossref.snapshot":
        "Verified · snapshot 2026-08-01 · Ursa Coffee Roasters, Miraflores",

      /* Budget */
      "view.budget.eyebrow": "Extra Tool T6 · Interactive",
      "view.budget.title":
        "Marketing Budget Allocator — compare, edit, and stress-test three scenarios in PEN.",

      /* Origin Atlas */
      "view.origin-atlas.eyebrow": "Extra Tool T7 · Interactive",
      "view.origin-atlas.title": "Coffee Origin Atlas",

      /* ROI */
      "view.roi.eyebrow": "Extra Tool T8 · Interactive",
      "view.roi.title":
        "ROI Dashboard — model return on each marketing channel with confidence ranges.",

      /* Campaign Builder */
      "view.campaign-builder.eyebrow": "Extra Tool T9 · Interactive wizard",
      "view.campaign-builder.title":
        "Campaign Builder — from offer to brief in six steps",

      /* Spirit Checker */
      "view.spirit-checker.eyebrow": "Extra Tool T10 · Interactive identity guard",
      "view.spirit-checker.title":
        "Spirit-Preservation Checker — does this tactic protect the bear, the gram, and the green?",

      /* SWOT */
      "view.swot.eyebrow": "Extra Tool T11 · Interactive competitive analysis",
      "view.swot.title":
        "Competitor SWOT Matrix — where Ursa stands, and where it can move",

      /* Pilot */
      "view.pilot.eyebrow": "Extra Tool T12 · Pilot dashboard",
      "view.pilot.title":
        "Ursa Mañana Pilot Dashboard — track the S/. 20/month subscription as it runs",

      /* Scorecard */
      "view.scorecard.eyebrow": "Extra Tool T13 · One-page executive compilation",
      "view.scorecard.title":
        "Brand Audit Scorecard — the whole picture on one page",

      /* ---- Tool T9 · Campaign Builder (deepened body copy + section copy) ---- */
      "campaign-builder.hero.lede":
        "Which campaign does Ursa ship next, and how does it stay honest? This wizard walks the owner through six steps — offer, audience, channel, metric, budget, summary — drawing each option from the verified Ursa playbook (six offers, six audiences, eight channels, six metrics that recur across Modules 03, 04, and 05). The output is a plain-text brief with the offer, the audience, the channel, the success metric, the monthly budget, and a stop rule baked in. Copy it, hand it to whoever runs the campaign — a barista, a creator, or yourself — and let the stop rule, not the day's mood, decide whether to scale or kill.",
      "campaign-builder.meta.steps": "Steps",
      "campaign-builder.meta.steps-value": "6 · offer → brief",
      "campaign-builder.meta.source": "Source",
      "campaign-builder.meta.source-value": "Verified Ursa playbook",
      "campaign-builder.meta.output": "Output",
      "campaign-builder.meta.output-value": "Copyable text brief",

      "campaign-builder.step.offer.label": "Offer",
      "campaign-builder.step.audience.label": "Audience",
      "campaign-builder.step.channel.label": "Channel",
      "campaign-builder.step.metric.label": "Metric",
      "campaign-builder.step.budget.label": "Budget",
      "campaign-builder.step.summary.label": "Summary",

      "campaign-builder.step.offer.title": "Pick the offer",
      "campaign-builder.step.offer.desc":
        "What is the customer actually getting? Each offer is anchored truthfully against the à la carte total — if the anchor cannot be defended in one sentence, it is a discount dressed as an offer, not a real offer.",
      "campaign-builder.step.audience.title": "Pick the audience",
      "campaign-builder.step.audience.desc":
        "Who is this campaign for? Each persona maps to a distinct job to be done — a morning ritual, a tourist discovery, a remote-work session, an origin curiosity, an office wholesale need, a hotel guest's first cup. Pick one; a campaign that targets everyone targets no one.",
      "campaign-builder.step.channel.title": "Pick the channel",
      "campaign-builder.step.channel.desc":
        "Where will the audience encounter the offer? Match the channel's reach and cost to the budget — free channels (Google Business Profile, WhatsApp) before paid, owned (Instagram) before rented (Meta ads), in-store (events, cuppings) before outbound. A channel that costs S/. 0 and reaches the right person always beats a channel that costs S/. 1,800 and reaches the wrong one.",
      "campaign-builder.step.metric.title": "Pick the metric",
      "campaign-builder.step.metric.desc":
        "How will you know it worked? Pick one primary metric and one target — a basket of metrics makes it impossible to decide whether to scale or kill. The brief builds the stop rule automatically from the target.",
      "campaign-builder.step.budget.title": "Set the monthly budget",
      "campaign-builder.step.budget.desc":
        "Match the channel cost to a realistic monthly spend. Lean starts at S/. 500; Growth can reach S/. 3,000. The discipline: pick a number the café can sustain for 90 days without flinching — cutting a campaign in week six wastes the first six weeks and breaks the stop rule's measurement window.",
      "campaign-builder.step.budget.label-monthly": "Monthly budget",
      "campaign-builder.step.budget.lean": "Lean · S/. 500",
      "campaign-builder.step.budget.growth": "Growth · S/. 3,000",
      "campaign-builder.step.budget.tier-lean": "Lean",
      "campaign-builder.step.budget.tier-moderate": "Moderate",
      "campaign-builder.step.budget.tier-growth": "Growth",

      "campaign-builder.step.summary.title": "Your campaign brief",
      "campaign-builder.step.summary.desc":
        "The brief is the contract between the owner and whoever runs the campaign. If the operator cannot repeat the offer, audience, channel, metric, budget, and stop rule from the brief alone, the brief is too long — trim it. Copy and hand off.",

      "campaign-builder.offer.ursamanana.name": "Ursa Mañana subscription",
      "campaign-builder.offer.ursamanana.desc": "S/. 20/month unlimited coffee Mon–Fri 7–10am + 20% off morning sides",
      "campaign-builder.offer.ursamanana.anchor": "S/. 20/mo vs S/. 60/mo à la carte",
      "campaign-builder.offer.tasting.name": "Cata de Tres Orígenes flight",
      "campaign-builder.offer.tasting.desc": "Three pour-overs + bean sample + story card",
      "campaign-builder.offer.tasting.anchor": "S/. 28 vs S/. 42 à la carte",
      "campaign-builder.offer.pairing.name": "Bear recommends pairing",
      "campaign-builder.offer.pairing.desc": "Named drink + cookie or financier combo at 15% off",
      "campaign-builder.offer.pairing.anchor": "S/. 18 vs S/. 21 à la carte",
      "campaign-builder.offer.hotelcard.name": "Hotel concierge origin card",
      "campaign-builder.offer.hotelcard.desc": "Branded card + first-cup-free coupon for 8 hotels",
      "campaign-builder.offer.hotelcard.anchor": "Free first cup vs S/. 14 regular",
      "campaign-builder.offer.gramweek.name": "Gram of the Week bean drop",
      "campaign-builder.offer.gramweek.desc": "Weekly microlot highlight + retail bean discount",
      "campaign-builder.offer.gramweek.anchor": "S/. 38 bean bag vs S/. 48 retail",
      "campaign-builder.offer.cupping.name": "Monthly cupping night",
      "campaign-builder.offer.cupping.desc": "Guided cupping of 4 origins + pastry pairing",
      "campaign-builder.offer.cupping.anchor": "S/. 35 ticket vs S/. 70 value",

      "campaign-builder.audience.morning.name": "The Morning Regular",
      "campaign-builder.audience.morning.desc": "Lives or works in Miraflores; arrives 7–8am; wants a fast, deliberate cup.",
      "campaign-builder.audience.tourist.name": "The Tourist Explorer",
      "campaign-builder.audience.tourist.desc": "Visiting Lima for 2–4 days; wants a craft spot to tag and recommend.",
      "campaign-builder.audience.remote.name": "The Remote Worker",
      "campaign-builder.audience.remote.desc": "Needs a third place with Wi-Fi for 90+ min; values a quiet side.",
      "campaign-builder.audience.curious.name": "The Coffee Curious",
      "campaign-builder.audience.curious.desc": "Wants to learn origin and process; buys retail beans; attends cuppings.",
      "campaign-builder.audience.office.name": "Office / B2B",
      "campaign-builder.audience.office.desc": "Coworking space or office manager sourcing beans for 10–30 people.",
      "campaign-builder.audience.hotel.name": "Hotel concierge / guest",
      "campaign-builder.audience.hotel.desc": "Concierge recommending cafés; guests within walking distance.",

      "campaign-builder.channel.instagram.name": "Instagram Reels + Stories",
      "campaign-builder.channel.instagram.reach": "4.7k followers + discovery",
      "campaign-builder.channel.instagram.cost": "S/. 0 (in-house)",
      "campaign-builder.channel.meta.name": "Meta paid social (3km radius)",
      "campaign-builder.channel.meta.reach": "10–30k impressions",
      "campaign-builder.channel.meta.cost": "S/. 600–1,800/mo",
      "campaign-builder.channel.creator.name": "Creator pilot (3 micro-creators)",
      "campaign-builder.channel.creator.reach": "5–30k each",
      "campaign-builder.channel.creator.cost": "S/. 1,200–3,000",
      "campaign-builder.channel.google.name": "Google Business Profile",
      "campaign-builder.channel.google.reach": "Maps + search",
      "campaign-builder.channel.google.cost": "S/. 0 (owned)",
      "campaign-builder.channel.whatsapp.name": "WhatsApp consent list",
      "campaign-builder.channel.whatsapp.reach": "Existing customers",
      "campaign-builder.channel.whatsapp.cost": "S/. 0–150",
      "campaign-builder.channel.hotel.name": "Hotel concierge cards (8 properties)",
      "campaign-builder.channel.hotel.reach": "Tourist guests",
      "campaign-builder.channel.hotel.cost": "S/. 200–400",
      "campaign-builder.channel.rappi.name": "Rappi menu + bundles",
      "campaign-builder.channel.rappi.reach": "Delivery users",
      "campaign-builder.channel.rappi.cost": "S/. 0–400",
      "campaign-builder.channel.event.name": "In-store event / cupping",
      "campaign-builder.channel.event.reach": "15–30 attendees",
      "campaign-builder.channel.event.cost": "S/. 200–560",

      "campaign-builder.metric.visits.name": "Store visits",
      "campaign-builder.metric.visits.desc": "Foot traffic attributable to the campaign",
      "campaign-builder.metric.visits.target": "+15% vs baseline",
      "campaign-builder.metric.profile.name": "Profile visits / saves",
      "campaign-builder.metric.profile.desc": "Instagram profile views + post saves",
      "campaign-builder.metric.profile.target": "+30% vs baseline",
      "campaign-builder.metric.aov.name": "Average ticket",
      "campaign-builder.metric.aov.desc": "Spend per transaction during campaign window",
      "campaign-builder.metric.aov.target": "+S/. 2–4",
      "campaign-builder.metric.repeat.name": "Repeat visits (7-day)",
      "campaign-builder.metric.repeat.desc": "% returning within 7 days of first visit",
      "campaign-builder.metric.repeat.target": "≥ 35%",
      "campaign-builder.metric.tags.name": "UGC tags / mentions",
      "campaign-builder.metric.tags.desc": "@ursacoffeeperu tags per week",
      "campaign-builder.metric.tags.target": "≥ 5/week",
      "campaign-builder.metric.reviews.name": "Google / TripAdvisor reviews",
      "campaign-builder.metric.reviews.desc": "New reviews per month",
      "campaign-builder.metric.reviews.target": "≥ 8/mo",

      "campaign-builder.brief.title": "Running brief",
      "campaign-builder.brief.row.offer": "Offer",
      "campaign-builder.brief.row.audience": "Audience",
      "campaign-builder.brief.row.channel": "Channel",
      "campaign-builder.brief.row.metric": "Metric",
      "campaign-builder.brief.row.budget": "Budget",
      "campaign-builder.brief.hint-all-set": "All set. The brief updates as you choose.",
      "campaign-builder.brief.hint-select": "Select {step} to continue.",

      "campaign-builder.brief.output.header": "URSA COFFEE — CAMPAIGN BRIEF",
      "campaign-builder.brief.output.offer-label": "OFFER",
      "campaign-builder.brief.output.audience-label": "AUDIENCE",
      "campaign-builder.brief.output.channel-label": "CHANNEL",
      "campaign-builder.brief.output.metric-label": "METRIC",
      "campaign-builder.brief.output.budget-label": "BUDGET",
      "campaign-builder.brief.output.reach-label": "Reach",
      "campaign-builder.brief.output.cost-label": "Cost",
      "campaign-builder.brief.output.target-label": "target",
      "campaign-builder.brief.output.stop-rule-label": "STOP RULE",
      "campaign-builder.brief.output.stop-rule-template": "Kill if {metric} does not lift by {target} in 30 days.",
      "campaign-builder.brief.output.footer": "— Compiled with the Ursa Campaign Builder",

      "campaign-builder.action.reset": "Reset",
      "campaign-builder.action.back": "Back",
      "campaign-builder.action.next": "Next",
      "campaign-builder.action.view-roadmap": "View roadmap",
      "campaign-builder.action.copy": "Copy brief",
      "campaign-builder.action.copied": "Copied",

      "campaign-builder.callout.stop-rule.title": "The stop rule is the discipline",
      "campaign-builder.callout.stop-rule.body":
        "Every brief ends with a stop rule: kill the campaign if the metric has not lifted by its target within 30 days. Thirty days is the shortest window in which Instagram's algorithm, Google Business Profile's behavioural signal, and a Miraflores regular's habit can all register change. Doubling down on a campaign that has not lifted — 'just give it another week' — is the single most common way small-budget marketing fails. Document what did not work and move on; the next campaign inherits the learning, not the spend.",

      /* ---- Tool T10 · Spirit Checker (deepened body copy + section copy) ---- */
      "spirit-checker.hero.lede":
        "Before any new tactic ships — a happy hour, a paid social creative, a Rappi bundle, a new menu item — run it through this checker. Eight questions across Ursa's three identity pillars (Bear, Gram, Green) produce a composite score and a verdict. The framework's premise: the bear, the gram, and the green are not aesthetic preferences but the moat — competitors can copy the offer and outspend on distribution, but they cannot copy the character. The rule is the red line: if a tactic erodes any pillar below 50%, it does not ship without revision. The limitation: the checker scores tactics, not taste — a high score on a tone-deaf tactic is still a tone-deaf tactic.",
      "spirit-checker.meta.pillars": "Pillars",
      "spirit-checker.meta.pillars-value": "Bear · Gram · Green",
      "spirit-checker.meta.questions": "Questions",
      "spirit-checker.meta.questions-value": "8 · weighted 1–3",
      "spirit-checker.meta.threshold": "Threshold",
      "spirit-checker.meta.threshold-value": "≥ 50% per pillar",

      "spirit-checker.tactic.label": "Tactic to check",
      "spirit-checker.tactic.placeholder": "e.g. 'Happy hour: 2-for-1 espressos from 5–7pm'",
      "spirit-checker.tactic.helper":
        "Describe the tactic in one line. Then answer the {n} questions below honestly — the checker only works if you do.",

      "spirit-checker.questions.title": "The {n} questions",
      "spirit-checker.questions.counter": "{n}/{total} answered",

      "spirit-checker.q.q1.question": "Does the tactic use or feature the bear motif (mascot, paw, character)?",
      "spirit-checker.q.q1.help":
        "The bear is Ursa's most ownable asset — no Lima competitor has an animal character. Using it is not decoration; it is the cheapest brand reinforcement available.",
      "spirit-checker.q.q2.question": "Could the tactic be mistaken for a generic café's tactic if you removed the bear?",
      "spirit-checker.q.q2.help":
        "If yes, the tactic is not bear-anchored — it leans on commodity rather than identity. A Reel that could be reposted by any Lima café is a Reel that has not earned Ursa's name.",
      "spirit-checker.q.q3.question": "Does the tactic reinforce the 'one gram at a time' weighing ritual or patient craft?",
      "spirit-checker.q.q3.help":
        "The gram is the craft ethos — visible weighing, deliberate preparation, no shortcuts. Showing the scale, naming the dose, slowing the pour: each is a small reinforcement of the ritual.",
      "spirit-checker.q.q4.question": "Does the tactic rush or commodify the coffee (e.g. 'fastest cup', 'no wait')?",
      "spirit-checker.q.q4.help":
        "Speed-as-vendor erodes the gram pillar. Efficiency behind the bar is fine; promising 'the fastest cup' to the customer is not — it frames the wrong variable.",
      "spirit-checker.q.q5.question": "Does the tactic use the verified palette (browns, greens, cream, gold)?",
      "spirit-checker.q.q5.help":
        "No blue, no indigo — the palette is a deliberate non-default choice. Defaulting to Instagram-blue or generic café-beige on a single asset quietly trains the eye to expect less of Ursa.",
      "spirit-checker.q.q6.question": "Does the tactic respect the Art Nouveau / crafted visual language?",
      "spirit-checker.q.q6.help":
        "Art Nouveau = ornamental borders, serif display type (Cormorant Garamond), botanical motifs, gold accents. A tactic that drops these for sans-serif and flat-color is not modernising; it is de-identifying.",
      "spirit-checker.q.q7.question": "Does the tactic reference the in-house roastery or two-bar theatre?",
      "spirit-checker.q.q7.help":
        "The roastery on the floor and the espresso+coldbrew bars are the craft proof — the only in-shop asset no competitor can stage in a week. A tactic that ignores both is leaving the strongest evidence on the table.",
      "spirit-checker.q.q8.question": "Would a regular recognize this as 'something Ursa would do'?",
      "spirit-checker.q.q8.help":
        "The regular's recognition is the real brand test — not the owner's intent. If a tactic needs explaining to a regular, it has already failed the recognition test; revise before shipping.",

      "spirit-checker.option.yes": "Yes",
      "spirit-checker.option.no": "No",
      "spirit-checker.option.na": "N/A",

      "spirit-checker.weight.label": "weight {n}",

      "spirit-checker.pillar.bear.label": "Bear",
      "spirit-checker.pillar.bear.desc": "The mascot, the paw, the character",
      "spirit-checker.pillar.gram.label": "Gram",
      "spirit-checker.pillar.gram.desc": "'Un gramo a la vez' — the weighing ritual",
      "spirit-checker.pillar.green.label": "Green",
      "spirit-checker.pillar.green.desc": "Palette, Art Nouveau, roastery craft",

      "spirit-checker.action.check": "Check the spirit",
      "spirit-checker.action.clear": "Clear answers",
      "spirit-checker.action.prompt":
        "Answer all {n} questions, then click \"Check the spirit\".",

      "spirit-checker.score.title": "Spirit score",
      "spirit-checker.score.composite-label": "Composite / 100",

      "spirit-checker.verdict.preserved.label": "Spirit preserved",
      "spirit-checker.verdict.preserved.desc":
        "The tactic protects all three pillars. It may ship — document why it passed in one line, so the next tactic inherits the reasoning rather than just the verdict.",
      "spirit-checker.verdict.conditional.label": "Conditional — revise before shipping",
      "spirit-checker.verdict.conditional.desc":
        "One or more pillars sit below the safe threshold. The tactic does not ship as-is — revise it to strengthen the weakest pillar, then re-check. Skipping the revision and shipping anyway is the failure mode this checker exists to prevent.",
      "spirit-checker.verdict.at-risk.label": "At risk — do not ship as-is",
      "spirit-checker.verdict.at-risk.desc":
        "A pillar is badly eroded. This tactic would dilute Ursa's identity even if it lifted the metric it set out to lift. Kill it, or rethink it starting from one of the three pillars — bear, gram, or green — and re-check before bringing it back.",

      "spirit-checker.callout.rule.title": "The spirit-preservation rule",
      "spirit-checker.callout.rule.body":
        "When a tactic forces a choice between protecting Ursa's identity and chasing a generic growth play, this dossier always chooses the bear, the gram, and the green. The reasoning is not aesthetic preference but economics: the identity is the moat, and a moat eroded for a quarter's growth cannot be rebuilt in the next. A pillar below 50% is a red line — not a suggestion.",

      "spirit-checker.scale.title": "Verdict scale",
      "spirit-checker.scale.preserved": "≥ 70% per pillar — spirit preserved, may ship.",
      "spirit-checker.scale.conditional": "50–69% — conditional; revise the weak pillar.",
      "spirit-checker.scale.at-risk": "< 50% — at risk; do not ship as-is.",

      /* ---- Tool T11 · SWOT Matrix (deepened body copy + section copy) ---- */
      "swot.hero.lede":
        "A 2×2 plot of {n} Miraflores and Lima competitors on the two axes the dossier actually researched: Brand distinctiveness (bear, gram, green, Art Nouveau, in-house roastery — the assets verified in Module 01) versus Distribution reach (locations, channels, review presence — the footprint verified in Module 02). The scores are research-judgement, not market-share data: a 50 midpoint separates 'high' from 'low' on each axis, and the relative positions matter more than the absolute numbers. Click any dot to read its SWOT and the implication for Ursa. What is not on this chart: price, revenue, headcount — those would change the analysis, and are deliberately excluded because Ursa cannot act on them today.",
      "swot.meta.competitors": "Competitors",
      "swot.meta.competitors-value": "{n} plotted",
      "swot.meta.axes": "Axes",
      "swot.meta.axes-value": "Distinctiveness × Reach",
      "swot.meta.ursa": "Ursa",
      "swot.meta.ursa-value": "High craft · low reach",

      "swot.matrix.title": "Distinctiveness × Reach",
      "swot.matrix.legend-ursa": "Ursa",
      "swot.matrix.legend-competitor": "Competitors",
      "swot.matrix.axis-y": "Distinctiveness →",
      "swot.matrix.axis-x": "Distribution reach →",

      "swot.quadrant.top-right.label": "Leaders",
      "swot.quadrant.top-right.desc":
        "High craft + high reach — the benchmark Ursa is moving toward.",
      "swot.quadrant.top-left.label": "Hidden gems",
      "swot.quadrant.top-left.desc":
        "High craft + low reach — Ursa's neighbourhood; the gap is distribution, not identity.",
      "swot.quadrant.bottom-right.label": "Scaled chains",
      "swot.quadrant.bottom-right.desc":
        "Lower craft + high reach — the volume play; reach without an identity moat.",
      "swot.quadrant.bottom-left.label": "Undifferentiated",
      "swot.quadrant.bottom-left.desc":
        "Lower craft + low reach — vulnerable; the closest competitors on Ursa's block sit here.",

      "swot.readout.distinctiveness": "Distinctiveness",
      "swot.readout.reach": "Reach",

      "swot.swot-cell.strengths": "Strengths",
      "swot.swot-cell.weaknesses": "Weaknesses",
      "swot.swot-cell.opportunities": "Opportunities",
      "swot.swot-cell.threats": "Threats",

      "swot.ursa-implication.heading": "Implication for Ursa",
      "swot.quick-switch.heading": "Jump to",

      "swot.callout.takeaway.title": "The strategic read",
      "swot.callout.takeaway.body":
        "Ursa sits in the Hidden gems quadrant — high distinctiveness, low reach. The plan's job is to move Ursa rightward without dropping downward. Rightward is concrete: claim the Google Business Profile (free, same-day, recovers search traffic that today lands on Punto Café and Neira), ship the creator pilot (builds reach with the bear as the asset), and run the hotel concierge pipeline (tourist demand already walking past Alcanfores 183). Downward is the failure mode: chain-feel service, retail-bean commoditisation, or paid acquisition before the organic foundation is laid. No competitor occupies Ursa's space; the gap is distribution, not identity.",

      /* ---- Module 05 · Viral Content Laboratory (deepened body copy) ---- */
      "viral.lede":
        "Twenty-six content concepts and ten production-ready scripts — every one anchored in a verified Ursa asset: the named drinks, the in-house roastery, the bear mark, and Alcanfores 183. Built to learn cheaply, not to chase virality.",
      "viral.meta.concepts": "Concepts",
      "viral.meta.scripts": "Scripts",
      "viral.meta.series": "Series",
      "viral.meta.pilot": "Pilot",
      "viral.meta.pilot-value": "4 weeks",

      "viral.disclaimer.title": "How this module is meant to be used",
      "viral.disclaimer.body":
        "Virality is not a goal we can promise — it depends on algorithms, audience mood, and timing outside anyone's control. What we can promise is cheap learning: post small, measure honestly, amplify what beats the baseline by a multiple, and kill what does not. No agency retainers, no bought followers, no staged reactions. The bear, the bar, and the data Ursa actually earns are the only inputs.",

      "viral.section.01.title": "The 26 content concepts",
      "viral.section.01.meta": "Browse · assign · reuse",
      "viral.section.01.lede":
        "Each concept below is small enough to film in-house, specific enough that a competitor could not honestly reproduce it, and rooted in a verified Ursa detail — a named drink, the weighing ritual, a Miraflores landmark, or the bear itself. None requires paid actors or a studio; every concept can be shot on a phone in under an hour. The note under each card names the specific asset — the tagline, the address, the two-bar bio, the named drink — that makes the concept non-transferable.",
      "viral.section.01.why-ursa": "Why this works for Ursa",

      "viral.section.02.title": "Ten production-ready scripts",
      "viral.section.02.meta": "Beats · Spanish caption · CTA",
      "viral.section.02.lede":
        "Each script is filmed inside the café by the baristas themselves — no agency, no teleprompter beyond a phone propped on the bar. The beats are the edit; the Spanish caption and call-to-action are customer-facing and posted verbatim, in the Spanish spoken in Lima. Hook first, brand last. Every script is verified against at least one real Ursa product, drink, address, or operational detail — the green note inside each script lists the exact items, with the snapshot date.",
      "viral.section.02.verified-refs": "{n} verified refs",
      "viral.section.02.beats": "Beats",
      "viral.section.02.verified-detail":
        "Verified Ursa product & detail refs · snapshot 2026-08-01",
      "viral.section.02.caption-label": "Caption · ES (Peru) · customer-facing",
      "viral.section.02.cta-label": "CTA · ES (Peru) · customer-facing",

      "viral.section.03.title": "Three repeatable series",
      "viral.section.03.meta": "Rhythm beats one-offs",
      "viral.section.03.lede":
        "Three series turn one-off posts into a rhythm the algorithm and the customer can both learn. Series recognition is what builds mental availability: a scroller who saw episode one must instantly recognise episode two as the same series — same composition, same hook phrase, same end card. Each series below carries its cadence, its concept, and the number of episodes the café can sustain without burning out the barista who films it.",
      "viral.section.03.episodes": "Episodes",

      "viral.section.04.title": "Three creator briefs",
      "viral.section.04.meta": "Briefs, not briefcases",
      "viral.section.04.lede":
        "Three creator archetypes, briefed with the same assets and the same rule: lead with the bear, the craft, or the subscription — never with a discount. Follower count is a proxy for reach, not the goal; the goal is the metric listed on each card (saves, profile visits, directions clicks, sign-ups). The three archetypes together cover the three jobs Ursa most needs from content — local discovery, craft credibility, and subscription awareness — without overlapping spend.",
      "viral.section.04.brief.objective": "Objective",
      "viral.section.04.brief.deliverable": "Deliverable",
      "viral.section.04.brief.key-message": "Key message",
      "viral.section.04.brief.assets": "Assets provided",
      "viral.section.04.brief.metric": "Metric",

      "viral.section.05.title": "Three UGC mechanisms",
      "viral.section.05.meta": "Consent first · always",
      "viral.section.05.lede":
        "Three UGC mechanisms invite customers to do the filming. The consent rule is non-negotiable: explicit opt-in before any repost, parental permission for minors, and a public-tag rule the customer can revoke at any time. Each mechanism below names its trigger, its reward, and its consent route — the barista should not have to improvise any of the three.",
      "viral.section.05.consent": "Consent",

      "viral.section.06.title": "The four-week pilot calendar",
      "viral.section.06.meta": "One concept per day · daily Stories",
      "viral.section.06.format-key": "Format key:",
      "viral.section.06.production-key": "Production feasibility:",
      "viral.section.06.rest-day": "Rest day · Stories only",
      "viral.section.06.every-day-body":
        "Every day: Bear's Morning Ritual runs in Stories (C17) alongside the featured concept. Two Reels per week is the maximum sustainable pace for one barista with a phone.",
      "viral.section.06.cadence.title": "Why this cadence",
      "viral.section.06.cadence.body":
        "Mon/Wed/Fri carry Reels because Reels are the discovery engine on Instagram — the format most likely to reach a non-follower. Tue/Thu carry Carousels because Carousels earn saves and shares, the two metrics most predictive of future visits. Saturday carries an Event or UGC piece because that is the human moment the algorithm cannot fake. Sunday is rest, with only the daily Stories ritual. The cadence is deliberately slower than what a content agency would recommend — agencies are paid to maximise impressions; Ursa is paying to learn which impressions become customers.",
      "viral.section.06.feasibility.list-label": "Calendar concepts at this tier",
      "viral.section.06.feasibility.phone.title": "Phone · in-house",
      "viral.section.06.feasibility.phone.body":
        "Barista's phone, available light, no external hire. The default for any concept that fits in one shift. Most of the calendar is this tier.",
      "viral.section.06.feasibility.phone.list":
        "C01, C05, C08, C10, C11, C12, C18, C20, C21, C22, C24, C25, C26 — 13 of 26 concepts cost S/. 0 per shoot.",
      "viral.section.06.feasibility.edit.title": "Phone + edit",
      "viral.section.06.feasibility.edit.body":
        "Still in-house, but requires setup (gimbal, macro lens, time-lapse app) and 1–3h of CapCut editing. One-time gear cost: S/. 30–110.",
      "viral.section.06.feasibility.edit.list":
        "C02, C03, C04, C09, C13, C14, C15, C16, C19, C23 — 10 of 26 concepts.",
      "viral.section.06.feasibility.external.title": "External help",
      "viral.section.06.feasibility.external.body":
        "Cannot be shot in-house with a phone. Either requires motion-design (C17 animated bear) or ongoing community management (C06, C07 UGC). Budget: S/. 400–1,200 per item.",
      "viral.section.06.feasibility.external.list":
        "C06, C07, C17 — 3 of 26 concepts. Schedule these last; gate them behind the in-house tiers proving the cadence first.",
      "viral.section.06.rule.title": "The 4-week pilot feasibility rule",
      "viral.section.06.rule.body":
        "The four-week pilot below schedules seventeen of twenty-four slots at the phone-in-house tier — the lowest-cost, lowest-dependency production mode. The seven phone-with-edit slots are spread one per week, never consecutive, to keep CapCut hours manageable. The three external-help items are deferred past the pilot: the Bear's Morning Ritual animated opener is replaced by a static Stories template for weeks one through four, and the two UGC mechanisms (C06, C07) run only if the in-house cadence is met without barista burnout. If the in-house cadence slips in week one, the entire external-help tier is cut from the pilot — no renegotiation, no exceptions.",

      "viral.section.07.title": "The test & amplification method",
      "viral.section.07.meta": "48h · 2× · 3× · kill at 14d",
      "viral.section.07.lede":
        "Every post gets a 48-hour measurement window against a rolling baseline built from the first six posts. Likes, follower count, and reach are not optimised here — they are vanity metrics that do not predict a customer walking into Alcanfores 183. The signals that do predict a future customer are saves (intent to return), shares (intent to recommend), profile visits (intent to learn more), and directions clicks (intent to visit). The method below is deliberately mechanical so the barista does not have to make a judgement call under pressure.",
      "viral.section.07.step01.title": "Post & wait 48h",
      "viral.section.07.step01.body":
        "Post on the cadence above. Measure saves, shares, and profile visits in the first 48 hours. Establish a rolling baseline after the first 6 posts.",
      "viral.section.07.step02.title": "2× baseline → boost",
      "viral.section.07.step02.body":
        "If a post beats the baseline by 2×, boost it with S/. 50–150 paid. Stop spend when cost-per-save exceeds S/. 4.",
      "viral.section.07.step03.title": "3× baseline → commission",
      "viral.section.07.step03.body":
        "If a post beats the baseline by 3×, commission a follow-up within 7 days: same character, same format, a new angle. The bear just gave you a hit — make another.",
      "viral.section.07.step04.title": "Below baseline at 14d → kill",
      "viral.section.07.step04.body":
        "Anything below baseline after 14 days is killed — no second guesses, no boosting. Replace with a new concept from the 26.",
      "viral.section.07.stat01":
        "Window to measure saves / shares / profile visits",
      "viral.section.07.stat02": "Paid boost budget per 2× winner",
      "viral.section.07.stat03": "Kill threshold for sub-baseline posts",
      "viral.section.07.callout.title": "What we don't measure",
      "viral.section.07.callout.body":
        "Likes, follower count, and reach are vanity metrics — they feel good, they look good in a report, and they do not predict a customer walking into Alcanfores 183. Saves, shares, profile visits, and directions clicks do. The discipline of ignoring the first three is what makes the second four meaningful; without it, the team will drift back to optimising for applause.",

      "viral.closing.title": "The full viral dossier",
      "viral.closing.body":
        "Open the printable HTML for the complete Module 05 — concepts, scripts, series, briefs, UGC mechanisms, the pilot calendar, and the amplification method. The printable dossier is the source of truth; this view is the interactive companion.",
      "viral.closing.cta": "Open the interactive Content Calendar tool",

      "viral.feasibility-label.phone": "Phone · in-house",
      "viral.feasibility-label.edit": "Phone + edit",
      "viral.feasibility-label.external": "External help",

      /* ---- Module 06 · Creative Campaigns (deepened body copy) ---- */
      "creative.lede":
        "Working HTML, CSS, and SVG samples for fifteen touchpoints — social posts, carousels, Stories, Reel covers, posters, menus, product cards, table signs, loyalty cards, packaging labels, bean info cards, event materials, Google and delivery imagery, landing pages, and email headers. The official logo is never altered or counterfeited; the geometric bear glyph used throughout is an original concept mark used as a placeholder in this dossier, to be replaced by the official mark once the owner supplies the asset pack.",
      "creative.meta.evolution": "Evolution",
      "creative.meta.evolution-value": "Three levels",
      "creative.meta.recommendation": "Recommendation",
      "creative.meta.recommendation-value": "Conservative refinement recommended",
      "creative.meta.logo": "Logo",
      "creative.meta.logo-value": "No counterfeiting",

      "creative.read-first.badge": "6.0 · Read first",
      "creative.read-first.title": "Before production — read first",
      "creative.read-first.callout-title": "Original concept mark — not the official logo",
      "creative.read-first.body":
        "The geometric bear glyph used throughout this module is an original concept mark designed for dossier navigation. It is not the official Ursa Coffee Roasters logo. The official mark must be sourced from the owner-supplied asset pack before any production artwork is finalised — this is open question six in Sources & Evidence. Every sample below uses the concept mark as a placeholder; in production, the official mark replaces it without changing layout, palette, or typography. No sample in this module alters, parodies, or counterfeits the official logo.",

      "creative.section.6-1.badge": "6.1 · Brand evolution",
      "creative.section.6-1.title":
        "Three brand-evolution levels — visual comparison",
      "creative.section.6-1.meta": "Same format · three intensities",
      "creative.section.6-1.lede":
        "The three evolution levels from section 1.9 are visualised below using the same format — a single-image social post — so the difference is immediately visible at thumbnail size, where roughly nine in ten social impressions happen. Holding the format constant is what makes the comparison honest: a Level 3 sample shown in a complex layout would look more distinctive than a Level 1 sample shown in a simple one, but that distinctiveness would belong to the layout, not the level.",
      "creative.section.6-1.level1.pill": "Level 1 · Conservative",
      "creative.section.6-1.level1.badge": "Recommended permanent",
      "creative.section.6-1.level1.title": "Paper, typography, tagline",
      "creative.section.6-1.level1.body":
        "Paper background, no watermark, no flourish. Identity carried entirely by typography and tagline. Lowest risk. Permanent system from day one.",
      "creative.section.6-1.level1.tag1": "No watermark",
      "creative.section.6-1.level1.tag2": "Type-led",
      "creative.section.6-1.level2.pill": "Level 2 · Distinctive",
      "creative.section.6-1.level2.badge": "6-month skin",
      "creative.section.6-1.level2.title": "Forest gradient + bear watermark",
      "creative.section.6-1.level2.body":
        "Forest gradient, bear silhouette watermark at 16%, accent shifts to leaf green. Distinctive at thumbnail size. Recommended growth skin from month 4.",
      "creative.section.6-1.level2.tag1": "16% watermark",
      "creative.section.6-1.level2.tag2": "Thumbnail-ownable",
      "creative.section.6-1.level3.pill": "Level 3 · Experimental",
      "creative.section.6-1.level3.badge": "Seasonal only",
      "creative.section.6-1.level3.title": "Constellation + numbered edition",
      "creative.section.6-1.level3.body":
        "Espresso-black background, inverted Ursa Major constellation as the bear's celestial cousin, numbered limited edition. Summer / winter season only — never a permanent register.",
      "creative.section.6-1.level3.tag1": "Numbered N° / 200",
      "creative.section.6-1.level3.tag2": "Seasonal",
      "creative.section.6-1.recommendation.title": "Recommendation — confirmed",
      "creative.section.6-1.recommendation.body":
        "Level 1 as the permanent system, Level 2 as a growth skin from month four, Level 3 only as seasonal expression. The visual comparison makes the reason plain: Level 1 protects identity at zero risk and zero external cost, Level 2 makes Ursa unmistakable at thumbnail size where most social impressions happen, and Level 3 stretches the system for limited periods without breaking it. Skipping Level 1 to chase Level 2 directly is the single most common reason rebrands fail — the team has nothing to fall back to when the experimental skin underperforms. This plan does not skip.",

      "creative.section.6-2.badge": "6.2 · Samples",
      "creative.section.6-2.title": "Fifteen touchpoints, four families",
      "creative.section.6-2.meta": "HTML · CSS · SVG",
      "creative.section.6-2.lede":
        "Each sample below is a working HTML/CSS/SVG layout. Screenshots at 2× resolution produce production-grade JPEGs for social; for print, the HTML serves as a precise spec for any designer or printer (exact hex colours, named fonts, defined aspect ratios).",
      "creative.section.6-2.tab.social": "Social",
      "creative.section.6-2.tab.print": "Print",
      "creative.section.6-2.tab.packaging": "Packaging",
      "creative.section.6-2.tab.digital": "Digital",

      "creative.section.6-3.badge": "6.3 · Recap",
      "creative.section.6-3.title": "What these samples show",
      "creative.section.6-3.meta": "Spirit preserved · risk minimised",
      "creative.section.6-3.stat1":
        "Touchpoints designed — social, print, packaging, digital",
      "creative.section.6-3.stat2":
        "Brand-evolution levels with a confirmed recommendation",
      "creative.section.6-3.stat3":
        "Alterations or counterfeits of the official Ursa logo",
      "creative.section.6-3.stat4":
        "Original concept mark used as a placeholder throughout",
      "creative.section.6-3.card1.title": "Identity protected",
      "creative.section.6-3.card1.body":
        "Every sample preserves the bear, the Art Nouveau craft language, the two-bar architecture, and the verified tagline. No generic growth tactic is allowed to break the bear; if a tactic conflicts with one of those four anchors, the tactic is the one that changes.",
      "creative.section.6-3.card2.title": "Print-ready spec",
      "creative.section.6-3.card2.body":
        "Exact hex colours, named fonts, defined aspect ratios. A screenshot handed to a printer is enough to produce a faithful first proof, and the browser's print-to-PDF function validates every sample before it leaves the café.",
      "creative.section.6-3.card3.title": "Cheaply testable",
      "creative.section.6-3.card3.body":
        "Most samples cost between zero and two hundred soles to test in print. The bean bag label and the table sign together cover the origin-story and pairing tests for under one hundred soles — the two experiments that most cheaply validate the perceived-value thesis from Module 01.",
      "creative.section.6-3.callout.title": "Why samples, not just descriptions",
      "creative.section.6-3.callout.body":
        "A description of a forest-green Story with a gold CTA leaves roughly twenty decisions unresolved — the exact green, the exact gold, the corner radius, the font weight, the position of the bear. A sample resolves all twenty at once. The owner can hold a screenshot next to a printer's proof and say “match this”, and the result will be the dossier, not a translator's interpretation of it.",
      "creative.section.6-3.spirit.title": "Verify the spirit",
      "creative.section.6-3.spirit.body":
        "Cross-check any sample against the brand audit before production.",
      "creative.section.6-3.spirit.cta": "Open Module 01 · Brand Audit",

      "creative.section.6-4.badge": "6.4 · Skeptical pass",
      "creative.section.6-4.title": "Three skeptic questions, answered",
      "creative.section.6-4.meta": "Pre-empts the obvious objections",
      "creative.section.6-4.q1.quote":
        "“These are HTML layouts, not production files. How does the owner use them?”",
      "creative.section.6-4.q1.body":
        "Each sample is print-ready via the browser's print-to-PDF function. For social, screenshots at 2× resolution produce production-grade JPEGs suitable for Instagram's compression. For packaging and print, the HTML and CSS serve as a precise spec sheet — exact hex colours, named fonts, defined aspect ratios — that any printer in Lima can follow without interpretation. The owner hands a screenshot to the printer and says “match this”; the dossier is the source of truth, not a brief that gets re-translated.",
      "creative.section.6-4.q2.quote":
        "“You used a generic bear in the samples. The real bear might look totally different.”",
      "creative.section.6-4.q2.body":
        "Correct — and stated explicitly in the “before any artwork goes to print” note at the top of this module. The geometric bear used here is a placeholder concept mark, not the official Ursa logo. The owner-supplied asset pack (open question six in Sources & Evidence) is required before any production artwork is finalised. Once the official mark is sourced, it replaces the concept mark in every sample without changing layout, palette, or typography — the design system is built so the swap is mechanical, not a redesign.",
      "creative.section.6-4.q3.quote":
        "“Level 3 with inverted constellation and numbered editions is too cute for a small café.”",
      "creative.section.6-4.q3.body":
        "Fair concern — which is why Level 3 is restricted to seasonal expression and explicitly marked as optional. If the owner finds it too cute, the plan degrades gracefully: Level 1 plus Level 2 alone produce a complete, distinctive system that does not require the constellation, the numbered edition, or the espresso-black background. Level 3 exists only for the moments when the owner wants to celebrate a season, an anniversary, or a limited origin — and it can be cut without leaving a gap.",
      "creative.section.6-4.event1.label": "Cupping nights",
      "creative.section.6-4.event1.value": "First Saturday · monthly",
      "creative.section.6-4.event2.label": "Bear recommends window",
      "creative.section.6-4.event2.value": "7:30–10:00am",
      "creative.section.6-4.event3.label": "Home base",
      "creative.section.6-4.event3.value": "Alcanfores 183, Miraflores",

      "creative.section.6-5.badge": "6.5 · Full dossier",
      "creative.section.6-5.title": "Open the printable HTML dossier",
      "creative.section.6-5.body":
        "The static dossier for Module 06 contains the same samples in a single printable HTML page, plus the asset disclaimer and the skeptical revision pass. Open it to print, screenshot, or hand to a printer — the printable dossier is the source of truth; this view is the interactive companion.",
      "creative.section.6-5.compiled": "Module 06 compiled 2026-08-01",

      /* ============ MODULE 03 · MENU & PRODUCT DEVELOPMENT ============ */
      "menu.hero.lede":
        "Ursa already owns a distinctive menu language — four named drinks of two kinds (coined names Ursagroni, Maracumango; origin and descriptive labels Filtrado Lonya, Durazno Clarificado), a two-bar theatre, and a pairing habit. This module reconstructs the verified current menu, then proposes thirteen new products across seven categories, each evaluated against a 16-criteria framework before any test begins — with explicit why-this-product, customer-need, census evidence, operational test, and stop rule for each. No invented costs: only scenario ranges in soles, anchored against the 1km competitor census.",
      "menu.hero.meta.snapshot": "Snapshot",
      "menu.hero.meta.framework": "Framework",
      "menu.hero.meta.pricing": "Pricing",
      "menu.hero.meta.sources": "Sources",

      /* Section 01 — Verified current menu */
      "menu.section.01.badge": "Section 01",
      "menu.section.01.title": "The verified current menu, reconstructed",
      "menu.section.01.meta": "Source · Rappi snapshot 2026-08-01",
      "menu.section.01.stat.verified-items": "Verified named items (drinks + food)",
      "menu.section.01.stat.categories": "Menu categories (Espresso · Coldbrew · Filtrados · Pastries · Salado)",
      "menu.section.01.stat.range": "Verified price range across the menu",
      "menu.section.01.legend": "Signature drink — verified named",
      "menu.section.01.callout.verified.title": "What is verified, and what is reconstructed",
      "menu.section.01.callout.verified.body":
        "The named drinks (Ursagroni, Durazno Clarificado Coldbrew, Maracumango Coldbrew, Filtrado Lonya) and the verified food items (financier, empanada, cookies) come from public Instagram and Facebook posts. Standard espresso-bar items and their prices are reconstructed from the Rappi delivery menu (snapshot 2026-08-01).",
      "menu.section.01.callout.prices.title": "Exact prices may change",
      "menu.section.01.callout.prices.body":
        "Prices marked with an asterisk are inferred from category positioning where the Rappi snapshot did not list them directly. Confirm at the bar before quoting in any external material. The pairing prices (La Ursa, La Lonya, La Maracumango) follow the dossier design and assume à la carte totals.",
      "menu.section.01.card.ownable.heading": "The ownable menu language",
      "menu.section.01.card.ownable.b1":
        "Two coined drink names — Ursagroni (Ursa + negroni) and Maracumango (maracuyá + mango). The other two named drinks (Filtrado Lonya, Durazno Clarificado) use origin and descriptive labels, not coined names. This is a naming convention, not a strategic system — do not over-extend it.",
      "menu.section.01.card.ownable.b2":
        "Origin-labelling line — Filtrado Lonya (Utcubamba, Amazonas, 1,750m, Bourbon lavado) sets the provenance depth no Miraflores competitor matches.",
      "menu.section.01.card.ownable.b3": "Two-bar theatre — espresso and coldbrew as visible counter identities.",
      "menu.section.01.card.ownable.b4": "Pairing habit — drinks named alongside their food partner.",
      "menu.section.01.card.ownable.b5": "Seasonal to permanent — summer favourites graduate to the carta.",

      /* Section 01 · behavioral lens (Sutherland) on the reconstructed menu */
      "menu.section.01.callout.behavioral.title": "The behavioral lens on the menu",
      "menu.section.01.callout.behavioral.body":
        "From a behavioral perspective, the carta is already doing Sutherland's anchoring work without being designed to. The S/. 22 Chemex (para dos) makes the S/. 12 V60 feel reasonable; the S/. 18 Ursagroni makes the S/. 10 Cortado feel like a steal. The named drinks — Ursagroni, Maracumango, Filtrado Lonya — are the signaling layer: each name is a story the customer retells, which is the cheapest distribution a café can buy. The dotted-leader carta format is itself a ritual cue — this is a carta, not a price list — and the bear crest at the top is the salience anchor that ties every visit back to the same identity. None of this costs a sol to install; it is already there. The recommendation is to protect it, not to redesign it.",

      /* Section 02 — Thirteen proposals */
      "menu.section.02.badge": "Section 02",
      "menu.section.02.title": "Thirteen new product proposals, evaluated",
      "menu.section.02.meta": "13 proposals · 7 categories · 16-criteria framework + 4 census-grounding rows",
      "menu.section.02.lede":
        "Each proposal below is evaluated against ten decision-critical visible rows: why this specific product, customer need it addresses, census evidence supporting it, brand fit, taste concept, preparation time, margin potential, operational test, market test method, and stop or revision rule. The remaining six criteria are summarised in the framework grid in Section 04. Pricing is always expressed as a lean / moderate / growth range in soles — never a single invented cost — with a census-anchored rationale for each range.",
      "menu.section.02.category.signature-coffee": "Signature coffee",
      "menu.section.02.category.cold-coffee": "Cold coffee",
      "menu.section.02.category.seasonal": "Seasonal",
      "menu.section.02.category.non-coffee": "Non-coffee",
      "menu.section.02.category.pastries": "Pastries",
      "menu.section.02.category.retail-beans": "Retail beans",
      "menu.section.02.category.experiences": "Experiences",
      "menu.section.02.scenario.heading": "Pricing scenarios (PEN)",
      "menu.section.02.scenario.lean.label": "Lean",
      "menu.section.02.scenario.lean.note": "Cost-covering, conservative ticket.",
      "menu.section.02.scenario.moderate.label": "Moderate",
      "menu.section.02.scenario.moderate.note": "Recommended launch price.",
      "menu.section.02.scenario.growth.label": "Growth",
      "menu.section.02.scenario.growth.note": "Once brand equity supports the lift.",
      "menu.section.02.scenario.rationale.heading": "Why this price range (census-anchored)",
      "menu.section.02.scenario.disclaimer":
        "These are scenario ranges, not invented costs. Verify ingredient costs against Ursa's actual roast logs and supplier invoices before launch.",
      "menu.section.02.criterion.why": "Why this specific product",
      "menu.section.02.criterion.customer-need": "Customer need it addresses",
      "menu.section.02.criterion.evidence": "Census evidence supporting it",
      "menu.section.02.criterion.brand-fit": "Brand fit",
      "menu.section.02.criterion.taste": "Taste concept",
      "menu.section.02.criterion.prep": "Preparation time",
      "menu.section.02.criterion.margin": "Margin potential",
      "menu.section.02.criterion.operational-test": "Operational test",
      "menu.section.02.criterion.market-test": "Market test method",
      "menu.section.02.criterion.stop-rule": "Stop / revision rule",

      /* Section 02 — Proposal content (P-01 through P-13) */
      "menu.section.02.proposal.P-01.name": "Oso Negro",
      "menu.section.02.proposal.P-01.spanish": "Black bear · double ristretto over warm honey",
      "menu.section.02.proposal.P-01.concept":
        "Double ristretto of Black Label poured over a spoonful of warm honey and a tear of cold espresso. Deep, dark, with a sweetness that arrives late. Named for the Andean bear of the mists.",
      "menu.section.02.proposal.P-01.why":
        "Ursa currently has no drink that leans into the dark/forest side of the bear character — every signature drink is bright or fruity (Ursagroni, Maracumango, Durazno Clarificado). Oso Negro fills the 'dark, brooding, after-dinner' slot that no existing Ursa drink occupies. The Black Label roast is already in rotation; this is a new preparation of an existing asset, not a new ingredient.",
      "menu.section.02.proposal.P-01.need":
        "Coffee Curious + Morning Regular who want an intense, low-milk afternoon/evening coffee. The job: 'help me end my day with something deliberate, not a quick coffee.' Addresses the afternoon daypart (3–6pm) where Ursa's current menu has no signature drink.",
      "menu.section.02.proposal.P-01.evidence":
        "Arabica Espresso Bar owns the stand-up purist espresso niche; Neira's champion-quality drinks are praised but unnamed. No competitor in the 18-business census offers a honey-ristretto signature — the slot is uncontested. Honey is a Peruvian staple (non-imported), reinforcing the origin-story pillar.",
      "menu.section.02.proposal.P-01.brand-fit":
        "Perfect — the name is a house name (Oso + black from Black Label). It reinforces the character without leaving coffee.",
      "menu.section.02.proposal.P-01.taste":
        "Ristretto bitterness → warm honey → dark chocolate finish. The honey temperature controls the final texture.",
      "menu.section.02.proposal.P-01.prep": "3 min (served in a pre-heated small cup).",
      "menu.section.02.proposal.P-01.margin":
        "High — honey costs more than sugar but the ristretto uses half the dose of a latte.",
      "menu.section.02.proposal.P-01.operational-test":
        "2-week batch test: pre-portion honey in 5g cups; train 1 barista on the pour. Measure (a) prep time vs flat white baseline, (b) honey waste % per batch, (c) customer repeat-rate within 14 days.",
      "menu.section.02.proposal.P-01.market-test":
        "Promote for 14 days as the 'barista's shot'. Measure orders/day and repeat requests.",
      "menu.section.02.proposal.P-01.stop-rule":
        "Fewer than 4/day after 14 days → reformulate as a courtesy shot, not a product.",
      "menu.section.02.proposal.P-01.pricing-rationale":
        "S/. 9–13. Anchored below Ursagroni (S/. 18) because Oso Negro is espresso-only, no tonic or cold-brew base. Above flat white (S/. 10) at moderate because the named preparation + honey adds perceived value. Census benchmark: Arabica's espresso price band (S/. 6–10) and Neira's premium espresso tier; Ursa's own espresso (S/. 6) and Black Label (S/. 14) bracket the range.",

      "menu.section.02.proposal.P-02.name": "Media Luna",
      "menu.section.02.proposal.P-02.spanish": "Half-moon cortado with orange zest",
      "menu.section.02.proposal.P-02.concept":
        "Cortado served in a half-moon cup (exclusive mould). Milk foam with orange zest. The half-moon shape echoes the Art Nouveau motifs of the room.",
      "menu.section.02.proposal.P-02.why":
        "Ursa has no drink that explicitly visualizes the Art Nouveau language in the cup itself. The half-moon shape makes the visual identity drinkable — every photo carries the brand language, not just the drink. This is the only proposal where the cup IS the brand asset.",
      "menu.section.02.proposal.P-02.need":
        "Tourist Explorer + Coffee Curious who want a photogenic, ownable cup. The job: 'give me something I can't get anywhere else in Lima, that I want to photograph and share.' Directly addresses the @ursacoffeeperu tag rate metric.",
      "menu.section.02.proposal.P-02.evidence":
        "0 of 18 competitors in the census use a custom cup shape as a brand asset. The Art Nouveau half-moon form is uncontested. The Tourist-Explorer persona is validated by 8+ hotels within walking distance of the catchment — photo-worthy drinks travel further than generic ones.",
      "menu.section.02.proposal.P-02.brand-fit":
        "Strong — the half-moon shape is visually ownable and photogenic; it already belongs to Ursa's visual language.",
      "menu.section.02.proposal.P-02.taste":
        "Balanced cortado with a citrus aroma that opens the cup before the first sip. No sweetening — aroma only.",
      "menu.section.02.proposal.P-02.prep": "2.5 min (requires special cup and zester).",
      "menu.section.02.proposal.P-02.margin":
        "Medium-high — orange zest is cheap; the cup is a one-time cost.",
      "menu.section.02.proposal.P-02.operational-test":
        "Order 30 prototype cups; train 2 baristas on the zest + pour. Measure (a) photo-tag rate at Ursa's geo-tag (target ≥ 3/week), (b) cup breakage rate per 30 servings, (c) repeat order rate within 14 days.",
      "menu.section.02.proposal.P-02.market-test":
        "Serve as an edition of 30 cups. Count photos shared on Instagram with Ursa's geo-tag.",
      "menu.section.02.proposal.P-02.stop-rule":
        "Fewer than 3 shared photos/week → withdraw the cup, keep the cortado.",
      "menu.section.02.proposal.P-02.pricing-rationale":
        "S/. 9–12. Anchored against cortado (S/. 8) with a +S/. 1–4 premium for the named preparation and the cup asset. Below flat white (S/. 10) at lean to drive trial; at moderate, parity with flat white. Census benchmark: Estación 329 cortado band and Neira specialty-cortado premium; Ursa's own cortado (S/. 8) as floor.",

      "menu.section.02.proposal.P-03.name": "Clarificado de Lúcuma",
      "menu.section.02.proposal.P-03.spanish": "Lúcuma-clarified cold brew",
      "menu.section.02.proposal.P-03.concept":
        "Cold brew clarified with lúcuma milk using the Durazno Clarificado technique. Lúcuma is Peru's emblematic fruit; clarified, it yields a clean amber pour, no sediment.",
      "menu.section.02.proposal.P-03.why":
        "Extends the existing 'Clarificado' line (Durazno Clarificado) with a Peruvian-native fruit. Lúcuma is the most recognizable Peruvian fruit nationally and internationally — it's the obvious next clarificado, not an invented flavour. This is line extension, not line invention.",
      "menu.section.02.proposal.P-03.need":
        "Tourist Explorer + Coffee Curious who want a Peruvian flavour experience but don't want milk-heavy drinks. The job: 'let me taste something distinctly Peruvian without dairy.' Addresses the lactose-intolerant + vegan segment.",
      "menu.section.02.proposal.P-03.evidence":
        "Census: 0 competitors in the 18-business census offer a lúcuma-coffee drink. Milenaria's açaí bowls (same street, 170m) show demand for fruit-forward breakfast drinks in the catchment. Lúcuma is the national fruit — brand fit + ingredient overlap are both strong.",
      "menu.section.02.proposal.P-03.brand-fit":
        "Strong — extends the 'Clarificado' line (already ownable) with a nationally recognised ingredient.",
      "menu.section.02.proposal.P-03.taste":
        "Cold brew with silky lúcuma sweetness, no visible dairy. Amber colour. Clean finish.",
      "menu.section.02.proposal.P-03.prep": "4 min service + 24h clarification in batch.",
      "menu.section.02.proposal.P-03.margin":
        "High — lúcuma is economical in Lima and the clarified process scales in batch.",
      "menu.section.02.proposal.P-03.operational-test":
        "4-week batch test: 24h clarified in 2L batches. Measure (a) clarification yield % per batch, (b) lúcuma cost per serving, (c) daily units sold vs Durazno Clarificado baseline.",
      "menu.section.02.proposal.P-03.market-test":
        "4-week pilot on the Coldbrew bar. Measure % of coldbrew sold that is Clarificado de Lúcuma.",
      "menu.section.02.proposal.P-03.stop-rule":
        "Fewer than 5/day after 4 weeks → reformulate as an autumn seasonal.",
      "menu.section.02.proposal.P-03.pricing-rationale":
        "S/. 13–16. Parity with Durazno Clarificado (S/. 14) and Maracumango (S/. 14) at lean/moderate; +S/. 2 at growth because lúcuma's national-fruit status supports a small premium. Census benchmark: Terrua's flight ceiling is US$25 (~S/. 93) — individual drinks stay well below; Ursa's own coldbrew band (S/. 10–14) as floor.",

      "menu.section.02.proposal.P-04.name": "Té de Oso",
      "menu.section.02.proposal.P-04.spanish": "Cold brew over cascara tea ice",
      "menu.section.02.proposal.P-04.concept":
        "Cold brew served over a large cube of cascara (coffee-cherry) tea ice. As the ice melts, the cup evolves — first pure coffee, then coffee with dried-fruit notes. The bear who takes his time.",
      "menu.section.02.proposal.P-04.why":
        "Operationalizes 'un gramo a la vez' as a single-drink experience: time as ingredient. No existing Ursa drink evolves in the cup — Té de Oso is the only proposal where the drink changes as you drink it. The cascara is a roastery byproduct, so the ingredient cost is zero.",
      "menu.section.02.proposal.P-04.need":
        "Remote Worker + Coffee Curious who stay 90+ minutes and want a drink that rewards lingering. The job: 'give me a cup that gives me a reason to stay.' Directly addresses the dwell-time metric (≥ 90 min) in the Remote Worker persona.",
      "menu.section.02.proposal.P-04.evidence":
        "Census: 0 competitors in the 18-business census use cascara (coffee-cherry byproduct) as a drink ingredient. The slow-bar format is uncontested in catchment. Terrua's tasting format (US$25) shows demand for slow coffee experiences; Té de Oso is the accessible single-cup version.",
      "menu.section.02.proposal.P-04.brand-fit":
        "Very strong — captures 'un gramo a la vez' in a single drink: time as ingredient.",
      "menu.section.02.proposal.P-04.taste":
        "Coffee-forward at the start, fruity at the end. Each sip is different. The cascara comes from the same bean.",
      "menu.section.02.proposal.P-04.prep": "3 min service + prior preparation of cascara ice cubes.",
      "menu.section.02.proposal.P-04.margin":
        "High — cascara is a byproduct of the bean; the price is anchored in the experience.",
      "menu.section.02.proposal.P-04.operational-test":
        "30-unit drop in slow-bar daypart (Sat–Sun 10am–2pm). Measure (a) dwell time of Té de Oso customers vs control (same daypart, regular coldbrew), (b) cascara ice melt time per serving, (c) NPS at first sip vs last sip.",
      "menu.section.02.proposal.P-04.market-test":
        "Serve 30 units as a 'slow-bar edition'. Film reactions and collect testimonials.",
      "menu.section.02.proposal.P-04.stop-rule":
        "NPS < 8/10 or fewer than 8 units sold → reformulate as a Private Tasting.",
      "menu.section.02.proposal.P-04.pricing-rationale":
        "S/. 14–18. Above Durazno Clarificado (S/. 14) because of the experience premium (evolving cup); below Cata de Tres Orígenes (S/. 22+) because it's a single drink. Census benchmark: Terrua's US$25 (~S/. 93) flight is the upper anchor; this is the accessible 'evolving cup' alternative for the same daypart.",

      "menu.section.02.proposal.P-05.name": "Cosecha de Amazonas",
      "menu.section.02.proposal.P-05.spanish": "Seasonal Utcubamba flight · three micro-lots",
      "menu.section.02.proposal.P-05.concept":
        "A flight of three Utcubamba (Amazonas) micro-lots served side by side: washed, honey, natural. A card with tasting notes and altitude. While the harvest lasts.",
      "menu.section.02.proposal.P-05.why":
        "Deepens the Filtrado Lonya line from a single drink to a multi-process experience of the SAME origin. This is the natural product extension of Ursa's most ownable origin story — not a new origin, but a deeper one. Defends the Lonya line against imitation by going deeper, not wider.",
      "menu.section.02.proposal.P-05.need":
        "Coffee Curious + pairs/groups who want a shared tasting experience. The job: 'help me understand what process does to flavour, side by side.' Directly addresses the cupping-attendance metric in the Coffee Curious persona.",
      "menu.section.02.proposal.P-05.evidence":
        "Census: Terrua's US$25 flight (513 Google reviews) validates demand for paid tasting. Cate Tasting Room (190 Google reviews, 4.6★) reinforces. Ursa's Filtrado Lonya (Utcubamba, Amazonas, 1,750m) is already the ownable origin — the flight extends it without requiring a new supply chain.",
      "menu.section.02.proposal.P-05.brand-fit":
        "Strong — deepens Filtrado Lonya into an origin experience, not just a drink.",
      "menu.section.02.proposal.P-05.taste":
        "Three small cups, three processes. The customer learns to distinguish the same bean treated differently.",
      "menu.section.02.proposal.P-05.prep": "8 min (three manual pours served simultaneously).",
      "menu.section.02.proposal.P-05.margin":
        "Medium-high — the bean is the same, but barista time rises.",
      "menu.section.02.proposal.P-05.operational-test":
        "Run as monthly Private Tasting for 60 days. Measure (a) conversion to 250g retail bag (target ≥ 30%), (b) repeat-attendance rate (target ≥ 25% return within 60 days), (c) average group size per booking.",
      "menu.section.02.proposal.P-05.market-test":
        "Launch at Private Tasting and monthly cupping. Measure conversion to 250g bag sale.",
      "menu.section.02.proposal.P-05.stop-rule":
        "Fewer than 6 flights/month → only available at guided cuppings.",
      "menu.section.02.proposal.P-05.pricing-rationale":
        "S/. 22–30. Below Terrua's US$25 (~S/. 93) by a wide margin — accessible entry to paid tasting. Above Chemex-para-dos (S/. 22) because the flight is curated + has story cards. Census benchmark: Terrua US$25 flight, Cate paid-tasting format. Ursa's own Filtrado Lonya (S/. 14) × 3 = S/. 42 — the curation + story-card premium is what justifies the lift.",

      "menu.section.02.proposal.P-06.name": "Invierno Andino",
      "menu.section.02.proposal.P-06.spanish": "Spiced pour-over with chincho and panela",
      "menu.section.02.proposal.P-06.concept":
        "Pour-over prepared with a pinch of chincho (Andean herb) in the bed and panela in the water. Warm, herbal, no dairy. The inverse of Clarificado de Lúcuma: this is the mountain in winter.",
      "menu.section.02.proposal.P-06.why":
        "Ursa has no seasonal winter drink. Summer is owned by Maracumango + Clarificados; winter has no answer. Invierno Andino is the cold-weather counterpart — warm, herbal, no dairy. Chincho and panela are both Peruvian staples with no import cost, and seasonal scarcity (chincho harvested May–August) creates urgency.",
      "menu.section.02.proposal.P-06.need":
        "Morning Regular + Coffee Curious in Lima's winter (June–September) who want a warming, non-milky coffee. The job: 'give me a hot drink that isn't a latte.' Addresses the winter seasonality gap in Ursa's menu.",
      "menu.section.02.proposal.P-06.evidence":
        "Census: 0 competitors in the 18-business census offer an Andean-herb coffee. Chincho and panela are both Peruvian staples with no import cost. Seasonal scarcity (chincho is harvested May–August) creates urgency and a natural end-of-season stop rule.",
      "menu.section.02.proposal.P-06.brand-fit":
        "Strong — the palette (herb, panela, coffee) sits within the Peruvian ingredient universe.",
      "menu.section.02.proposal.P-06.taste":
        "Pour-over with chincho aromatics and deep panela sweetness. No added sugar beyond the panela.",
      "menu.section.02.proposal.P-06.prep": "5 min.",
      "menu.section.02.proposal.P-06.margin":
        "High — chincho and panela are economical; price is anchored in seasonality.",
      "menu.section.02.proposal.P-06.operational-test":
        "6-week launch in June. Measure (a) sell-through vs Filtrado de la Casa baseline, (b) repeat-order rate within 14 days, (c) customer feedback on herbal balance (target ≥ 4/5 on in-store feedback card).",
      "menu.section.02.proposal.P-06.market-test":
        "Launch in June (start of winter) for 6 weeks. Measure repetition and cupping score.",
      "menu.section.02.proposal.P-06.stop-rule":
        "Fewer than 4/day after 6 weeks → reformulate for summer with iced cascara.",
      "menu.section.02.proposal.P-06.pricing-rationale":
        "S/. 12–16. Parity with V60 (S/. 12) at lean; above V60 at moderate because of the named preparation + seasonal story. Below Filtrado Lonya (S/. 14) to drive trial. Census benchmark: V60/Specialty pour-over band; Ursa's own V60 (S/. 12) and Filtrado Lonya (S/. 14) bracket the range.",

      "menu.section.02.proposal.P-07.name": "Chocolate del Oso",
      "menu.section.02.proposal.P-07.spanish": "Single-origin Peruvian cacao drinking chocolate",
      "menu.section.02.proposal.P-07.concept":
        "Hot chocolate from single-origin Peruvian cacao (Cusco or San Martín). Served in a clay cup. No syrup — just cacao, water, a touch of panela.",
      "menu.section.02.proposal.P-07.why":
        "Fills the non-coffee slot for the 1–2 customers per day who accompany coffee drinkers but don't drink coffee. Cacao de origen extends the 'origin story' pillar beyond coffee without diluting the roastery identity. Critically: this is a single menu item, NOT a chocolate-tasting category (which would dilute pure-coffee identity per the Cate implication).",
      "menu.section.02.proposal.P-07.need":
        "Remote Worker + Tourist Explorer accompanying coffee drinkers who want a hot drink but no coffee. The job: 'let me stay with my friend without forcing a coffee order.' Addresses the group-order dynamic.",
      "menu.section.02.proposal.P-07.evidence":
        "Census: Cate Tasting Room combines coffee + chocolate but Ursa should NOT add chocolate tasting — keep cacao as a single menu item, not a category. Cacao de origen (Cusco/San Martín) extends Ursa's origin-story pillar without requiring a new supply chain beyond the roastery's existing relationships.",
      "menu.section.02.proposal.P-07.brand-fit":
        "Strong — reinforces the 'Peruvian origin' universe without leaving the roaster identity.",
      "menu.section.02.proposal.P-07.taste":
        "Deep chocolate, not sweet. The clay holds temperature; the panela arrives late.",
      "menu.section.02.proposal.P-07.prep": "4 min (hot jug prepared in batch every 2h).",
      "menu.section.02.proposal.P-07.margin":
        "Medium — single-origin cacao costs more than syrup, but the average ticket rises.",
      "menu.section.02.proposal.P-07.operational-test":
        "6-week winter campaign. Measure (a) % of group orders where ≥ 1 non-coffee drink is purchased (target ≥ 15%), (b) chocolate repeat rate within 30 days, (c) cacao cost per serving vs target S/. 3.50.",
      "menu.section.02.proposal.P-07.market-test":
        "6-week winter campaign. Measure % of non-coffee orders that are chocolate.",
      "menu.section.02.proposal.P-07.stop-rule":
        "Fewer than 5/day after 6 weeks → reduce to an annual winter edition.",
      "menu.section.02.proposal.P-07.pricing-rationale":
        "S/. 12–16. Parity with Flat White (S/. 10) + Mocha (S/. 12) band at moderate. Below Cata flight (S/. 22+) and above cookie (S/. 5). Census benchmark: no direct competitor for drinking chocolate in catchment — price set by Ursa's own menu bands (mocha S/. 12 as the natural anchor).",

      "menu.section.02.proposal.P-08.name": "Infusión de Muña",
      "menu.section.02.proposal.P-08.spanish": "Andean mint infusion",
      "menu.section.02.proposal.P-08.concept":
        "Hot infusion of muña (Andean mint) served in a glass cup. For the person who doesn't drink coffee but wants to stay at the bar.",
      "menu.section.02.proposal.P-08.why":
        "A non-coffee, non-cacao option for caffeine-avoidant customers. Muña is the most accessible Andean herb — recognizable, cheap, and food-safe. Not a hero product; a courtesy product. The job is to keep the non-coffee companion in the bar, not to win new customers.",
      "menu.section.02.proposal.P-08.need":
        "Non-coffee drinkers (pregnant, caffeine-sensitive, evening visitors). The job: 'let me order something without apologising for not drinking coffee.' Directly addresses the group-order dynamic where one member doesn't drink coffee.",
      "menu.section.02.proposal.P-08.evidence":
        "Census: 0 competitors in the 18-business census offer muña. The herb is widely available in Lima markets. Demand is small but persistent — NovaCircle notes Ursa's atmosphere attracts non-coffee companions (the 'cozy and inviting atmosphere' pros theme).",
      "menu.section.02.proposal.P-08.brand-fit":
        "Acceptable — it's not coffee, but it respects the Andean palette. Useful for companions and non-coffee drinkers.",
      "menu.section.02.proposal.P-08.taste":
        "Andean mint with a herbaceous finish deeper than common mint. No sugar.",
      "menu.section.02.proposal.P-08.prep": "3 min.",
      "menu.section.02.proposal.P-08.margin":
        "High — muña is cheap and dry; the ticket is for a premium infusion.",
      "menu.section.02.proposal.P-08.operational-test":
        "4-week availability test. Measure (a) orders/day, (b) % of group orders including a non-coffee drink (target ≥ 10%), (c) customer feedback on taste (target ≥ 4/5 on feedback card).",
      "menu.section.02.proposal.P-08.market-test":
        "Offer for 4 weeks as a bar alternative. Measure non-coffee-drinker orders.",
      "menu.section.02.proposal.P-08.stop-rule":
        "Fewer than 3/day after 4 weeks → withdraw and keep only Chocolate del Oso.",
      "menu.section.02.proposal.P-08.pricing-rationale":
        "S/. 8–11. Below all coffee drinks — a courtesy price. At parity with espresso (S/. 6) + small premium for the named herb. Census benchmark: herbal-infusion band not directly benchmarked in catchment; set by Ursa's own menu floor (espresso S/. 6) and the perceived-value of a named Andean herb.",

      "menu.section.02.proposal.P-09.name": "Croissant de Lúcuma",
      "menu.section.02.proposal.P-09.spanish": "Croissant filled with lúcuma cream",
      "menu.section.02.proposal.P-09.concept":
        "House-laminated croissant filled with lúcuma cream. Buy it with the Clarificado de Lúcuma and the breakfast palette is complete.",
      "menu.section.02.proposal.P-09.why":
        "Closes the pairing loop with Clarificado de Lúcuma (P-03). Ursa's food menu has only 2 verified items (financier, empanada) — a third pastry with a drink pairing is the obvious extension, and lúcuma ties it to P-03. The pairing is the product, not the pastry alone.",
      "menu.section.02.proposal.P-09.need":
        "Coffee Curious + Morning Regular who want a pastry that pairs with their named drink. The job: 'give me the pairing that makes my drink better.' Addresses the attach-rate metric in the offer stack (≥ 60% target).",
      "menu.section.02.proposal.P-09.evidence":
        "Census: El Pan de la Chola (700m) owns 'best bakery in Lima' — Ursa should NOT compete on bakery scale. House-made laminado is the differentiator (credibility, not scale). Lúcuma is the bridge to P-03; the pairing creates a S/. 21–26 bundle that competes with Milenaria's breakfast ticket.",
      "menu.section.02.proposal.P-09.brand-fit":
        "Strong — closes the pairing with Clarificado de Lúcuma. House laminado is credibility.",
      "menu.section.02.proposal.P-09.taste":
        "Butter laminated dough + silky lúcuma cream. Not excessively sweet.",
      "menu.section.02.proposal.P-09.prep": "Direct service (prepared in early morning).",
      "menu.section.02.proposal.P-09.margin":
        "Medium — laminado is labour-intensive; the filling is cheap.",
      "menu.section.02.proposal.P-09.operational-test":
        "6-week pilot with daily batch of 12. Measure (a) attach rate with Clarificado de Lúcuma (target ≥ 20%), (b) sell-through by 11am, (c) daily waste % (target ≤ 10%).",
      "menu.section.02.proposal.P-09.market-test":
        "6-week pilot. Measure attach rate with Clarificado de Lúcuma.",
      "menu.section.02.proposal.P-09.stop-rule":
        "Fewer than 8/day or attach rate < 20% with Clarificado → reformulate filling.",
      "menu.section.02.proposal.P-09.pricing-rationale":
        "S/. 8–11. Above financier (S/. 6) because of the laminado + filling. Below empanada (S/. 12) at lean to drive trial. Census benchmark: El Pan de la Chola bakery prices as upper anchor; Ursa's own verified food prices (financier S/. 6, empanada S/. 12) as floor and ceiling.",

      "menu.section.02.proposal.P-10.name": "Alfajor de Café",
      "menu.section.02.proposal.P-10.spanish": "Alfajor with coffee-glazed dulce de leche",
      "menu.section.02.proposal.P-10.concept":
        "Maicena alfajor with dulce de leche glazed with an espresso reduction. Small, intense, pairs with any pour-over.",
      "menu.section.02.proposal.P-10.why":
        "The alfajor is the most iconic Peruvian pastry. Coffee-glazed dulce de leche ties it to the roastery identity. A small, intense pastry that marries with any pour-over — unlike the croissant (P-09), which pairs with one drink, the alfajor pairs with the whole filtration menu.",
      "menu.section.02.proposal.P-10.need":
        "Coffee Curious + Tourist Explorer who want a take-home Peruvian souvenir food. The job: 'give me something small, intense, and memorable that pairs with any coffee.' Addresses the take-home + retail-attach metric.",
      "menu.section.02.proposal.P-10.evidence":
        "Census: 0 competitors in the 18-business census offer a coffee-glazed alfajor. The alfajor is a national staple with high recognizability for tourists and locals alike. Coffee-glaze ties it to the roastery without forcing a drink pairing — flexible attach.",
      "menu.section.02.proposal.P-10.brand-fit":
        "Strong — the alfajor is iconic Peruvian and the coffee glaze anchors it to the craft.",
      "menu.section.02.proposal.P-10.taste":
        "Maicena that melts, silky dulce de leche, bitter espresso finish.",
      "menu.section.02.proposal.P-10.prep": "Direct service (weekly batch).",
      "menu.section.02.proposal.P-10.margin":
        "High — cheap ingredients, premium pastry ticket.",
      "menu.section.02.proposal.P-10.operational-test":
        "6-week pilot with weekly batch of 24. Measure (a) orders with coffee vs cookie baseline, (b) take-home rate (target ≥ 30% leave in bag), (c) customer feedback on coffee intensity (target ≥ 4/5).",
      "menu.section.02.proposal.P-10.market-test":
        "6-week pilot. Measure alfajor orders with coffee (vs. cookie).",
      "menu.section.02.proposal.P-10.stop-rule":
        "Fewer than 6/day after 6 weeks → reformulate as a mini tasting alfajor.",
      "menu.section.02.proposal.P-10.pricing-rationale":
        "S/. 6–9. Above cookie (S/. 5) at lean because of the dulce de leche + glaze. Below financier (S/. 6) at parity, then premium at growth. Census benchmark: Ursa's own verified pastry prices (cookie S/. 5, financier S/. 6, empanada S/. 12) bracket the range; the coffee-glaze justifies the +S/. 1–3 premium over cookie.",

      "menu.section.02.proposal.P-11.name": "Gramo del Mes",
      "menu.section.02.proposal.P-11.spanish": "Subscription bean of the month · origin-labeled bag",
      "menu.section.02.proposal.P-11.concept":
        "Each month, a 250g bag of a micro-lot, with a complete origin label (farm, altitude, process, varietal, roast date). For Ursa Mañana subscribers and bar sale.",
      "menu.section.02.proposal.P-11.why":
        "Operationalizes 'un gramo a la vez' as a recurring product. The named-drink rotation creates weekly reasons to return; the bean subscription creates monthly reasons. The retail-bag channel is currently Instagram-only — this is the structured product that turns social-media interest into recurring revenue.",
      "menu.section.02.proposal.P-11.need":
        "Coffee Curious + Morning Regular who brew at home and want curated monthly selection. The job: 'curate my home coffee so I don't have to choose.' Addresses the retail-bean repeat-purchase metric (≥ 30% target).",
      "menu.section.02.proposal.P-11.evidence":
        "Census: Puku Puku sells retail bags at S/.49 with TA praise for 'retail bags for home.' Ursa currently Instagram-only — the channel gap is structural. Subscription models validated by Lima's CoffeePass membership. Puku Puku's S/.49 is the direct price benchmark.",
      "menu.section.02.proposal.P-11.brand-fit":
        "Very strong — operationalizes 'un gramo a la vez' and 'Gram of the Week' as a recurring product.",
      "menu.section.02.proposal.P-11.taste":
        "Varies — the promise is: each month, a new bean with its complete story.",
      "menu.section.02.proposal.P-11.prep": "Weekly batch packaging.",
      "menu.section.02.proposal.P-11.margin":
        "High — retail bean margin is ~60–70% over green-bean cost.",
      "menu.section.02.proposal.P-11.operational-test":
        "Launch 50-subscriber pilot for 3 months. Measure (a) month-3 retention (target ≥ 60%), (b) bag size satisfaction (target ≥ 4/5), (c) conversion to cupping-night attendance (target ≥ 20%).",
      "menu.section.02.proposal.P-11.market-test":
        "Launch as a 50-bag monthly subscription. Measure retention at month 3.",
      "menu.section.02.proposal.P-11.stop-rule":
        "Retention < 60% at month 3 → reformulate cadence or bag size.",
      "menu.section.02.proposal.P-11.pricing-rationale":
        "S/. 38–52. Puku Puku's S/.49 retail bag is the direct census benchmark — moderate price (S/. 45) sits just below. Above Ursa's own 50g sample (S/. 10) because it's a 250g bag with subscription curation. Below Cata flight (S/. 38+) at parity. The subscription curation (curated selection, story label) justifies the +S/. 7 premium over a generic retail bag.",

      "menu.section.02.proposal.P-12.name": "Cata de Tres Orígenes",
      "menu.section.02.proposal.P-12.spanish": "Tasting flight · three origins with story cards",
      "menu.section.02.proposal.P-12.concept":
        "A flight of three Peruvian origins served in three small pours, each with a story card (farm, altitude, varietal, process). A paid experience for two people minimum.",
      "menu.section.02.proposal.P-12.why":
        "Direct counter to Terrua's flat US$25 flight. Ursa's flight is multi-origin (vs Terrua's Villa Rica single-origin) and includes take-home story cards — the asset that survives the visit. This is not a new format; it's a competitive counter to a validated demand.",
      "menu.section.02.proposal.P-12.need":
        "Tourist Explorer + Coffee Curious (pairs) who want a guided experience. The job: 'help me taste and understand three coffees in one sitting.' Addresses the Tourism + Coffee Curious personas simultaneously, with a higher ticket than any single drink.",
      "menu.section.02.proposal.P-12.evidence":
        "Census: Terrua (US$25 flight, 513 Google reviews) and Cate (tasting room, 190 Google reviews) both validate paid-tasting demand. Ursa's multi-origin Lonya line is the differentiator — Terrua's narrow Villa Rica terroir is a known limitation in their positioning.",
      "menu.section.02.proposal.P-12.brand-fit":
        "Strong — occupies the territory Terrua charges US$25 for, with a more visible value stack.",
      "menu.section.02.proposal.P-12.taste":
        "Three cups, three stories. The card is the asset the customer takes home.",
      "menu.section.02.proposal.P-12.prep": "10 min (three pours served simultaneously + presentation).",
      "menu.section.02.proposal.P-12.margin":
        "High — the bean is cheap; the price charges for the guided experience.",
      "menu.section.02.proposal.P-12.operational-test":
        "Run as Saturday drop-in for 60 days. Measure (a) reservations/month (target ≥ 4/week), (b) conversion to 250g retail bag (target ≥ 30%), (c) NPS at end of experience (target ≥ 9/10).",
      "menu.section.02.proposal.P-12.market-test":
        "60-day Saturday pilot. Measure reservations/month and conversion to bag sale.",
      "menu.section.02.proposal.P-12.stop-rule":
        "Fewer than 2 reservations/month → reformulate as a no-reservation Saturday drop-in.",
      "menu.section.02.proposal.P-12.pricing-rationale":
        "S/. 38–55. Direct comparison: Terrua US$25 ≈ S/. 93 — Ursa's flight is 40–60% below the competitor benchmark, accessible entry. Above Chemex-para-dos (S/. 22) because of the guided experience. Above single pour-over (S/. 12–14) × 3 = S/. 36–42 — the story cards + curation justify the premium. Census benchmark: Terrua US$25 flight is the upper anchor; Ursa's own pour-over × 3 is the cost anchor.",

      "menu.section.02.proposal.P-13.name": "Tuesta tu propio grano",
      "menu.section.02.proposal.P-13.spanish": "Roast-your-own-bean workshop",
      "menu.section.02.proposal.P-13.concept":
        "A 90-minute workshop: each participant roasts 250g of green in a sample roaster, documents the curve, and takes their bag home. Maximum 4 participants.",
      "menu.section.02.proposal.P-13.why":
        "Converts Ursa's visible roaster from a passive credibility asset into an active paid experience. No competitor in the catchment offers hands-on roasting — this is the most defensible 'experience' product because it requires the roaster Ursa already has. The product is the experience + the take-home bag, not a consumable.",
      "menu.section.02.proposal.P-13.need":
        "Coffee Curious + Tourist Explorer who want a memorable, take-home experience (not just a drink). The job: 'help me roast my own bean and take it home.' Addresses the experience-economy segment that Terrua and Cate tap with tasting, but goes one step further into active participation.",
      "menu.section.02.proposal.P-13.evidence":
        "Census: 0 competitors offer hands-on roasting. Bisetti's 'escuela de café' is lecture-format, not hands-on. Ursa's roaster + Aeropress champion Paulo Sierra credibility (@rutadelcafeperuano, 564 likes) support the education channel. The roaster is a sunk-cost asset; the workshop monetizes it without additional capex.",
      "menu.section.02.proposal.P-13.brand-fit":
        "Strong — the visible roaster is already the room's signature; this product turns it into a paid experience.",
      "menu.section.02.proposal.P-13.taste":
        "It's not a drink — it's learning. The final product is a personal bag with a signed curve.",
      "menu.section.02.proposal.P-13.prep": "90 min + 15 min cleanup.",
      "menu.section.02.proposal.P-13.margin":
        "High — green bean is cheap; the price charges for the master roaster's attention.",
      "menu.section.02.proposal.P-13.operational-test":
        "Run 6 sessions over 60 days, capped at 4 participants. Measure (a) NPS (target ≥ 9/10), (b) session fill rate (target ≥ 75% of sessions full), (c) conversion to Gramo del Mes subscription (target ≥ 30%).",
      "menu.section.02.proposal.P-13.market-test":
        "6-session pilot. Measure NPS and conversion to Gramo del Mes subscription.",
      "menu.section.02.proposal.P-13.stop-rule":
        "NPS < 9/10 or fewer than 3 full sessions/month → reformulate as a free demonstration.",
      "menu.section.02.proposal.P-13.pricing-rationale":
        "S/. 85–140. No direct competitor benchmark in catchment. Anchored against: (a) Terrua US$25 flight (~S/. 93) as the closest paid coffee experience, (b) typical Lima specialist-workshop pricing (S/. 80–150 for 90-min sessions). At moderate (S/. 110), parity with Terrua's flight but with a take-home product (250g roasted bean) — the take-home asset justifies the premium over a flight-only experience.",

      /* Section 02 — hero meta values (snapshot value comes from URSA_FACTS, others are static labels) */
      "menu.section.02.hero-meta.framework-value": "16-criteria evaluation",
      "menu.section.02.hero-meta.pricing-value": "Scenario ranges, not invented costs",
      "menu.section.02.hero-meta.sources-value": "Rappi · IG · Facebook",

      /* Section 03 — Ursa Mañana subscription */
      "menu.section.03.badge-section": "Section 03",
      "menu.section.03.title": "Ursa Mañana — the subscription as a menu product",
      "menu.section.03.meta": "Pilot · capped at 50 members",
      "menu.section.03.badge": "Continuity product",
      "menu.section.03.heading": "S/. 20 / month · unlimited coffee · Mon–Fri 7–10am",
      "menu.section.03.body":
        "The subscription is a menu product, not a discount. The economics work because Ursa roasts its own beans — the marginal cost of an additional cup is the green bean, the water, and the barista's forty seconds, not a wholesale supplier's margin on top. At S/. 1.20–1.80 per cup against a S/. 20 monthly fee, the math survives even a daily visitor — but only if subscribers attach sides (cookies, financier, empanada) that carry the margin the coffee does not. The full economic model — break-even attach rate, cannibalization recovery, scale projection — lives in Module 08.",
      "menu.section.03.button.calculator": "Open the calculator",
      "menu.section.03.button.experiments": "See the pilot in the Experiment Tracker",
      "menu.section.03.ministat.monthly": "Monthly price",
      "menu.section.03.ministat.window": "Service window",
      "menu.section.03.ministat.cap": "Cap (pilot)",
      "menu.section.03.ministat.pilot-cap": "Pilot cap",
      "menu.section.03.ministat.marginal-cost": "Marginal cost / cup",
      "menu.section.03.ministat.target-attach": "Target attach rate",
      "menu.section.03.callout.title": "See Module 08 for the full economic model",
      "menu.section.03.callout.body":
        "The subscription's profit per subscriber is non-obvious — it depends on visit frequency, side attach, and cannibalization. The interactive calculator in Module 08 lets you edit every input and see the break-even attach rate, free-cup capacity, and recovery time update live. Do not launch the pilot without running those numbers.",

      /* Section 04 — 16-criteria framework */
      "menu.section.04.badge": "Section 04",
      "menu.section.04.title": "The 16-criteria evaluation framework",
      "menu.section.04.meta": "Every proposal passes through all sixteen",
      "menu.section.04.lede":
        "The dossier reduces the temptation to launch on enthusiasm. Each proposal must be answerable against all sixteen criteria below — ten decision-critical ones are shown explicitly in the proposal cards above; the remaining six are checked off the grid. The four census-grounding rows (why-this-product, customer-need, census-evidence, operational-test) are meta-criteria that sit on top of the sixteen: they ensure each proposal is anchored to a specific competitive gap and a specific operational test before any pilot launches.",
      "menu.section.04.criterion.1.name": "Customer need",
      "menu.section.04.criterion.2.name": "Brand fit",
      "menu.section.04.criterion.3.name": "Taste concept",
      "menu.section.04.criterion.4.name": "Preparation time",
      "menu.section.04.criterion.5.name": "Ingredient overlap",
      "menu.section.04.criterion.6.name": "Training",
      "menu.section.04.criterion.7.name": "Equipment",
      "menu.section.04.criterion.8.name": "Waste",
      "menu.section.04.criterion.9.name": "Delivery suitability",
      "menu.section.04.criterion.10.name": "Visual appeal",
      "menu.section.04.criterion.11.name": "Price range",
      "menu.section.04.criterion.12.name": "Margin potential",
      "menu.section.04.criterion.13.name": "Operational complexity",
      "menu.section.04.criterion.14.name": "Test method",
      "menu.section.04.criterion.15.name": "Success metric",
      "menu.section.04.criterion.16.name": "Stop / revision rule",
      "menu.section.04.criterion.1.desc": "What real need does it solve? Who is asking for it today?",
      "menu.section.04.criterion.2.desc": "Does it reinforce the bear, Art Nouveau, 'un gramo a la vez'?",
      "menu.section.04.criterion.3.desc": "What is the first impression and the finish?",
      "menu.section.04.criterion.4.desc": "Barista minutes per served unit.",
      "menu.section.04.criterion.5.desc": "Does it use inputs already bought, or require new ones?",
      "menu.section.04.criterion.6.desc": "Hours of training to reach consistency.",
      "menu.section.04.criterion.7.desc": "Does it need new equipment, or use what exists?",
      "menu.section.04.criterion.8.desc": "Shelf life of the input and expected waste percentage.",
      "menu.section.04.criterion.9.desc": "Does it survive 30 minutes in a Rappi box without degrading?",
      "menu.section.04.criterion.10.desc": "Is it photographed and shared? Is it ownable?",
      "menu.section.04.criterion.11.desc": "Lean / moderate / growth range in soles, not an invented cost.",
      "menu.section.04.criterion.12.desc": "Margin over cost, not over price.",
      "menu.section.04.criterion.13.desc": "How many friction points it adds to service.",
      "menu.section.04.criterion.14.desc": "How to measure if the proposal works, in 2–6 weeks.",
      "menu.section.04.criterion.15.desc": "The specific number that says 'graduate' or 'kill'.",
      "menu.section.04.criterion.16.desc": "The exact condition to kill or reformulate.",

      /* Section 05 — Pricing note */
      "menu.section.05.badge": "Section 05",
      "menu.section.05.title": "On pricing — what we did and did not invent",
      "menu.section.05.meta": "Scenario ranges only",
      "menu.section.05.lean.heading": "Lean",
      "menu.section.05.lean.tagline": "Cost-covering",
      "menu.section.05.lean.body":
        "The minimum price that covers ingredient cost and barista time, with a thin margin. Use for a soft launch or for products that build traffic for higher-margin pairings.",
      "menu.section.05.moderate.heading": "Moderate",
      "menu.section.05.moderate.tagline": "Recommended launch",
      "menu.section.05.moderate.body":
        "The price to launch the pilot at. Balances perceived specialty value against Miraflores willingness-to-pay. Re-evaluate after the test window.",
      "menu.section.05.growth.heading": "Growth",
      "menu.section.05.growth.tagline": "Brand-anchored ceiling",
      "menu.section.05.growth.body":
        "Once the product has repeat orders and visual equity, lift to this. Never start here — anchor against the moderate price, not the ceiling.",
      "menu.section.05.callout.not-invented.title": "What we deliberately did not invent",
      "menu.section.05.callout.not-invented.b1":
        "No single exact cost per cup. Marginal cost depends on roast yield, milk usage, and waste. Use the verified S/. 1.20–1.80 range as the benchmark, then confirm against actual roast logs.",
      "menu.section.05.callout.not-invented.b2":
        "No guaranteed margin percentage. Margins in the proposal cards are described as bands (alto / medio-alto / medio), not fabricated numbers.",
      "menu.section.05.callout.not-invented.b3":
        "No invented supplier prices for lúcuma, chincho, muña, or cacao de origen. Confirm with the supplier before quoting a launch price.",
      "menu.section.05.callout.not-invented.b4":
        "No virality assumption. Pricing assumes organic demand from existing channels; paid amplification is modelled separately in Module 04 and the Budget Allocator.",
      "menu.section.05.callout.principle.title": "The principle this module protects",
      "menu.section.05.callout.principle.body":
        "Ursa's menu earns its margin through perceived value, not cost-plus pricing. The cost ceiling of a specialty cup is roughly fixed by the green-bean market — every roaster in Lima pays within a narrow band for the same grades — so the margin lever is willingness-to-pay, not cost reduction. A story card describing origin, altitude, and process raises perceived value more than a bigger cup at the same cost; the customer pays for the meaning, not the millilitres. The 16-criteria framework is designed to keep that discipline: no product launches just because it sounds good, and no product survives without a stop rule that says when to kill it.",

      /* Section 05 · behavioral lens (Sutherland) on the three-scenario pricing */
      "menu.section.05.callout.behavioral.title": "Why the moderate scenario is the anchor, not the average",
      "menu.section.05.callout.behavioral.body":
        "In the offer-value lens, the moderate price is the anchor the customer holds in mind; the lean price is the risk reversal — a way in for the uncertain — and the growth price is the proof the craft is worth more — a way up for the convinced. Pricing all three on the menu card would dilute the signal: the moderate price is the one that ships, the other two stay internal as scenarios. From a behavioral perspective, this is choice architecture done with restraint — one clear price, one clear offer, the discount appearing only where it earns its keep (the bear's-recommendation side, not the coffee itself).",

      /* Final stat row */
      "menu.final.stat.1.label": "New product proposals across 7 categories",
      "menu.final.stat.2.label": "Criteria per proposal (16 framework + 4 census-grounding)",
      "menu.final.stat.3.label": "Pricing scenarios per proposal (lean / moderate / growth)",
      "menu.final.stat.4.label": "Full price envelope across menu and proposals",
      "menu.final.note":
        "About these prices: Reconstructed menu prices are sourced from the Rappi delivery snapshot (2026-08-01) and public Instagram and Facebook posts. Prices marked with an asterisk are inferred from category positioning. Proposal pricing is in scenario ranges and must be validated against Ursa's actual roast logs and supplier invoices before any go-to-market.",

      /* ============ MODULE 04 · MARKETING, GROWTH & RETENTION ============ */
      "growth.hero.lede":
        "Positioning, jobs-to-be-done, message and offer architecture, channel coverage, and a customer journey that turns first visitors into advocates — adapted from Hormozi's offer discipline and Sutherland's perceived-value lens, with explicit 'do not' lists so the craft never gets diluted.",
      "growth.hero.meta.frameworks": "Frameworks",
      "growth.hero.meta.budget": "Budget",
      "growth.hero.meta.spirit": "Spirit",
      "growth.hero.meta.frameworks-value": "Hormozi + Sutherland adapted",
      "growth.hero.meta.budget-value": "Lean / Moderate / Growth in PEN",
      "growth.hero.meta.spirit-value": "Conservative refinement · no rebrand",

      /* Positioning */
      "growth.positioning.badge": "Positioning",
      "growth.positioning.title": "One paragraph the whole plan must obey",
      "growth.positioning.meta": "The north-star statement",
      "growth.positioning.paragraph":
        "For the Miraflores resident or visitor who wants specialty coffee with a crafted, artistic atmosphere, Ursa Coffee Roasters is the in-house roastery where the bear, the gram, and the green mean every cup is deliberate. Unlike the scaled chains and the award-credentialed tasting rooms that anchor Lima's specialty scene, Ursa pairs its own roastery with the bear motif and the Art Nouveau lean — the craft is visible, and so is the character.",
      "growth.positioning.caption":
        "Bear · brand character · Gram · the weighing ritual · Green · origin + forest palette",
      "growth.positioning.callout.title":
        "If a tactic cannot be defended against this paragraph, it does not ship.",
      "growth.positioning.callout.body":
        "Every channel, offer, and creative concept below is checked against this statement. Tactics that dilute the bear, skip the gram, or override the green are explicitly marked 'do not'.",
      "growth.positioning.card.evidence.heading": "Evidence supporting each claim",
      "growth.positioning.card.evidence.1":
        "In-house roastery — Corner.inc editorial and the 1km census cross-validate (Terrua, Punto Café, RAIZ all lean on visible roasting).",
      "growth.positioning.card.evidence.2":
        "Bear character — 0 of 18 census competitors use an animal or character identity. Ownable by absence.",
      "growth.positioning.card.evidence.3":
        "Two-bar theatre — 0 of 18 census competitors operate a visible two-bar format. Arabica Espresso Bar is single-bar stand-up; the two-bar format is uncontested.",
      "growth.positioning.card.evidence.4":
        "Art Nouveau — 0 of 18 use a coherent historical design language. Visual identity uncontested.",
      "growth.positioning.card.risks.heading": "Risks and missing evidence",
      "growth.positioning.card.risks.1":
        "No roast-log audit observed. The 'every gram is weighed' claim is only credible if documented. Risk: inconsistency undermines the visible-craft story.",
      "growth.positioning.card.risks.2":
        "Award-driven positioning is brittle. CAM Café 2025 top-5 is recent but annual; if Ursa drops out of the top-5 in 2026, the 'award-credentialed' framing weakens.",
      "growth.positioning.card.risks.3":
        "Review-volume gap. Ursa ~56 Google reviews (addagio aggregate) versus Neira 911 and Puku Puku 658. Discovery gap is structural, not yet closed.",
      "growth.positioning.card.risks.4":
        "Producer relationships unverified. 'Specific origin stories' require documented farm relationships — no contract or purchase-price evidence surfaced.",
      "growth.positioning.card.test.heading": "Test method before full adoption",
      "growth.positioning.card.test.1":
        "Run a 30-day 'weighed shot log' — every espresso weighed and recorded, sample audited weekly for ±0.3g tolerance. Cost: S/. 0 (log only).",
      "growth.positioning.card.test.2":
        "A/B test the positioning paragraph as the Instagram bio for 30 days versus the current bio — measure profile clicks and DMs.",
      "growth.positioning.card.test.3":
        "Run a blind 'origin story' taste test: same coffee served with and without the Lonya story card. Measure perceived-quality delta (1–10).",
      "growth.positioning.card.test.4":
        "Walk-by census re-verification of Coffee Notes, Café Verde, OK Café (status uncertain) — 1 afternoon, S/. 0.",

      /* Audience */
      "growth.audience.badge": "Audience",
      "growth.audience.title": "Who we are serving — and the job each one hires Ursa to do",
      "growth.audience.meta": "Four primary personas · click to expand",
      "growth.audience.persona.morning-regular.name": "The Morning Regular",
      "growth.audience.persona.morning-regular.jtb":
        "When I start my day in Miraflores, help me get a deliberately good cup faster than I could at home, with a face that remembers my order — without making me think.",
      "growth.audience.persona.morning-regular.offer": "S/. 20/month unlimited coffee 7–10am + 20% off sides",
      "growth.audience.persona.morning-regular.metric": "Visits/week ≥ 3 · side attach ≥ 60%",
      "growth.audience.persona.tourist-explorer.name": "The Tourist Explorer",
      "growth.audience.persona.tourist-explorer.jtb":
        "When I'm visiting Lima for a few days, help me find a craft coffee spot I can recommend and tag — close to my hotel, with a story I can take home.",
      "growth.audience.persona.tourist-explorer.offer": "Origin story card + bean sample to take home",
      "growth.audience.persona.tourist-explorer.metric": "Tags @ursacoffeeperu · retail bean attach ≥ 25%",
      "growth.audience.persona.remote-worker.name": "The Remote Worker",
      "growth.audience.persona.remote-worker.jtb":
        "When I need to work outside my apartment for two hours, help me find a third place with reliable Wi-Fi and a quality second cup — without feeling rushed.",
      "growth.audience.persona.remote-worker.offer": "Second-cup loyalty stamp + quiet-side seating",
      "growth.audience.persona.remote-worker.metric": "Dwell time ≥ 90min · return within 7 days ≥ 40%",
      "growth.audience.persona.coffee-curious.name": "The Coffee Curious",
      "growth.audience.persona.coffee-curious.jtb":
        "When I want to understand specialty coffee, help me learn enough to order with confidence — and tell my friends where beans come from.",
      "growth.audience.persona.coffee-curious.offer": "Cata de Tres Orígenes tasting flight + bean bag",
      "growth.audience.persona.coffee-curious.metric": "Cupping attendance · retail bean repeat ≥ 30%",

      /* Persona signals, proof, channels (arrays resolved by index) */
      "growth.audience.persona.morning-regular.signal.1": "Arrives 7:03–7:30am",
      "growth.audience.persona.morning-regular.signal.2": "Orders the same drink",
      "growth.audience.persona.morning-regular.signal.3": "Pays in under 90s",
      "growth.audience.persona.morning-regular.proof": "Ursa opens 07:30; the weighing ritual is fast because the barista already knows the dose.",
      "growth.audience.persona.morning-regular.channel.1": "Ursa Mañana subscription",
      "growth.audience.persona.morning-regular.channel.2": "WhatsApp morning drop",
      "growth.audience.persona.morning-regular.channel.3": "Barista recognition",

      "growth.audience.persona.tourist-explorer.signal.1": "Walks in with a map",
      "growth.audience.persona.tourist-explorer.signal.2": "Asks 'what's local?'",
      "growth.audience.persona.tourist-explorer.signal.3": "Photographs the cup",
      "growth.audience.persona.tourist-explorer.proof": "8+ hotels within walking distance; the bear paw Reel trail and concierge cards make Ursa findable.",
      "growth.audience.persona.tourist-explorer.channel.1": "Hotel concierge cards",
      "growth.audience.persona.tourist-explorer.channel.2": "Instagram Reels",
      "growth.audience.persona.tourist-explorer.channel.3": "Google Business Profile",
      "growth.audience.persona.tourist-explorer.channel.4": "Bear paw trail",

      "growth.audience.persona.remote-worker.signal.1": "Laptop open",
      "growth.audience.persona.remote-worker.signal.2": "Single drink + refill",
      "growth.audience.persona.remote-worker.signal.3": "Stays 90+ minutes",
      "growth.audience.persona.remote-worker.proof": "Two-bar layout means a quiet side; the named-drink rotation gives a reason to come back tomorrow.",
      "growth.audience.persona.remote-worker.channel.1": "Coworking partnerships",
      "growth.audience.persona.remote-worker.channel.2": "Google Maps",
      "growth.audience.persona.remote-worker.channel.3": "Slow-hour pricing",

      "growth.audience.persona.coffee-curious.signal.1": "Asks about origin",
      "growth.audience.persona.coffee-curious.signal.2": "Buys retail beans",
      "growth.audience.persona.coffee-curious.signal.3": "Attends cuppings",
      "growth.audience.persona.coffee-curious.proof": "Story cards, 'gram of the week', and monthly cupping nights make the craft legible, not intimidating.",
      "growth.audience.persona.coffee-curious.channel.1": "Monthly cupping night",
      "growth.audience.persona.coffee-curious.channel.2": "Gram of the week",
      "growth.audience.persona.coffee-curious.channel.3": "Origin atlas cards",
      "growth.audience.persona.coffee-curious.channel.4": "Workshops",

      "growth.audience.detail.proof": "Proof point",
      "growth.audience.detail.channels": "Channels that reach them",
      "growth.audience.detail.offer-for": "Offer for them",
      "growth.audience.detail.success-metric": "Success metric",
      "growth.audience.callout.title":
        "Each persona's signals are grounded in the 1km census, not invented",
      "growth.audience.callout.morning":
        "Morning Regular — grounded in the census finding that Milenaria Cafe (same street, 170m) opens 6:30am and is praised for early opening; Ursa opens 7:30am, so the 7:03–7:30am window is the very first pre-work slot Ursa can serve. The 'orders the same drink' signal mirrors Ursa's own Instagram evidence (repeated-customer comments) and the @rutadelcafeperuano reel citing return visits. Risk: we have no POS data on actual arrival-time distribution — the 7:03–7:30am window is inferred from opening hours, not from observed transaction timestamps.",
      "growth.audience.callout.tourist":
        "Tourist Explorer — grounded in the census count of 8+ hotels within walking distance (Miraflores hotel district around Parque Kennedy). Bear paw Reel trail and concierge cards are the proposed channel, not yet executed. Risk: the 'walks in with a map / asks what's local / photographs the cup' signals are persona hypotheses, not observed behaviours. Validate via a 30-day concierge-card pilot before scaling.",
      "growth.audience.callout.remote":
        "Remote Worker — grounded in NovaCircle pros and cons flagging 'seating can be limited during peak hours' and 'crowded, especially on weekends.' The two-bar layout (espresso bar + coldbrew bar) is the architectural basis for a 'quiet side,' but no floor-plan evidence confirms the coldbrew side is actually quieter. Risk: the 90+ min dwell metric assumes Ursa tolerates laptop users; current operating model unclear on whether lingerers are welcomed or discouraged.",
      "growth.audience.callout.coffee":
        "Coffee Curious — grounded in the census finding that Bisetti owns 'escuela de café' (formal education) and Terrua's US$25 tasting flight validates demand for paid tasting. Ursa's Aeropress champion Paulo Sierra (@rutadelcafeperuano, 564 likes) is direct credibility evidence for the education channel. Risk: cupping attendance is a leading metric only — no historical attendance baseline to compare against.",
      "growth.audience.card.validate.heading": "How to validate the personas before scaling offers against them",
      "growth.audience.card.validate.1":
        "2-week POS audit — tag every transaction with daypart and repeat-customer flag. Cost: S/. 0 (POS export). Confirms Morning Regular and Remote Worker mix.",
      "growth.audience.card.validate.2":
        "Hotel-concierge card pilot — 8 hotels, 30 days, unique coupon code per hotel. Cost: ~S/. 200 print. Confirms Tourist Explorer conversion rate.",
      "growth.audience.card.validate.3":
        "First cupping night sign-up sheet — count attendees and email opt-ins. Cost: S/. 0. Confirms Coffee Curious depth.",
      "growth.audience.card.missing.heading": "What evidence is missing",
      "growth.audience.card.missing.1":
        "No Ursa-specific customer survey or interview transcript surfaced — personas are inferred from competitor behaviour and Ursa's own Instagram signals, not from primary customer research.",
      "growth.audience.card.missing.2":
        "No POS data on dwell time, daypart distribution, or repeat-purchase cadence — these are proposed metrics, not yet baselines.",
      "growth.audience.card.missing.3":
        "No demographic data (age, income, residence) on Ursa's actual customer base — persona sketches are behavioural, not demographic.",
      "growth.audience.card.missing.4":
        "Fix: commission a 4-week customer intercept survey (n≈50) before scaling any persona-specific offer.",

      /* Message */
      "growth.message.badge": "Message",
      "growth.message.title": "Message architecture — from one promise down to proof points",
      "growth.message.meta": "Promise → Pillars → Proof",
      "growth.message.brand-promise.badge": "Brand promise",
      "growth.message.brand-promise.text":
        "Ursa makes the craft visible — every cup is deliberate, weighed one gram at a time.",
      "growth.message.pillars.label": "Proof points",
      "growth.message.label.evidence": "Evidence",
      "growth.message.label.risk": "Risk",
      "growth.message.pillar.visible-craft.title": "Visible Craft",
      "growth.message.pillar.visible-craft.promise": "The roaster is on stage. Every gram is weighed.",
      "growth.message.pillar.ownable-atmosphere.title": "Ownable Atmosphere",
      "growth.message.pillar.ownable-atmosphere.promise": "Bear, Art Nouveau, two bars — no one else has this.",
      "growth.message.pillar.honest-origin.title": "Honest Origin Stories",
      "growth.message.pillar.honest-origin.promise": "We tell you where the bean came from, specifically.",
      "growth.message.pillar.patient-continuity.title": "Patient Continuity",
      "growth.message.pillar.patient-continuity.promise": "Reasons to return weekly, not just once.",

      /* Pillar proofs, evidence, risk (resolved by pillar id) */
      "growth.message.pillar.visible-craft.proof.1": "In-house roaster visible from the bar",
      "growth.message.pillar.visible-craft.proof.2": "'Un gramo a la vez' as the weighing ritual",
      "growth.message.pillar.visible-craft.proof.3": "Baristas trained to talk origin, altitude, process",
      "growth.message.pillar.visible-craft.evidence":
        "Corner.inc editorial praises Ursa's 'visible roasting equipment creates a workshop feel.' Terrua (513 Google reviews, 4.6★) and Punto Café (CAM 2025 2nd place) both lean on visible roastery/in-house roasting as the credibility signal that converts walk-ins. In the 1km competitor census, 4 of 14 in-catchment competitors make roastery visibility central to their positioning.",
      "growth.message.pillar.visible-craft.risk":
        "'Visible craft' without consistency is hollow. If Ursa's roast consistency slips (no documented QC protocol surfaced in research), the visible roaster becomes a liability — customers see the inconsistency, not the craft. Missing evidence: no roast-log audit, no extraction-yield log observed in public sources.",

      "growth.message.pillar.ownable-atmosphere.proof.1": "Bear motif as a recurring character",
      "growth.message.pillar.ownable-atmosphere.proof.2": "Two-bar theatre: espresso + cold brew side by side",
      "growth.message.pillar.ownable-atmosphere.proof.3": "Coined drink names: Ursagroni, Maracumango (the other two named drinks — Filtrado Lonya, Durazno Clarificado — use origin/descriptive labels, not coined names)",
      "growth.message.pillar.ownable-atmosphere.evidence":
        "The 1km competitor census of 18 competitors: 0 use an animal or character identity; 0 operate a visible two-bar format; 0 use coined drink names. 'Amauta' is the closest analogue — a heritage word, not a character. The bear + two-bar + coined-name trio is uncontested in the catchment.",
      "growth.message.pillar.ownable-atmosphere.risk":
        "Atmosphere is ownable only as long as it is legible. If the bear is treated as decoration rather than character (no consistent voice, no recurring role), competitors can copy the surface (an animal mascot) without copying the meaning. Risk: bear identity becomes a logo, not a character.",

      "growth.message.pillar.honest-origin.proof.1": "Filtrado Lonya line with farm + altitude (Utcubamba, Amazonas, 1,750m, Bourbon lavado)",
      "growth.message.pillar.honest-origin.proof.2": "'Gram of the week' micro-lot highlight",
      "growth.message.pillar.honest-origin.proof.3": "Quarterly origin transparency report",
      "growth.message.pillar.honest-origin.evidence":
        "The 1km competitor census: Café Verde (possibly closed) was the cautionary case — generic 'sustainability' messaging without specifics. RAIZ and Terrua own farm-to-cup depth, but Terrua's single-origin (Villa Rica only) is a narrow terroir story. Ursa's Filtrado Lonya line (multi-origin, named lot, named altitude) is uncontested in the catchment.",
      "growth.message.pillar.honest-origin.risk":
        "'Specific' is only credible if the named farm relationship is real and ongoing. If Ursa cannot document the producer relationship behind each Lonya lot (contract, purchase price, visit date), the story degrades into marketing. Missing evidence: no producer-relationship documentation surfaced in public sources.",

      "growth.message.pillar.patient-continuity.proof.1": "Seasonal drink rotation (Lonya origins)",
      "growth.message.pillar.patient-continuity.proof.2": "Ursa Mañana subscription pilot (S/. 20/mo, capped at 50)",
      "growth.message.pillar.patient-continuity.proof.3": "Monthly cupping nights + named-drink drops",
      "growth.message.pillar.patient-continuity.evidence":
        "The 1km competitor census: Bisetti owns 'escuela de café' (formal education); Puku Puku owns 'microlotes' retail (S/.49 bag); no competitor owns a subscription + cupping + named-drink drop cadence. CoffeePass Perú listing validates Ursa already participates in Lima's loyalty infrastructure.",
      "growth.message.pillar.patient-continuity.risk":
        "Continuity promises erode the moment a weekly cadence is missed. If the cupping night skips a month, or the named-drink drop is late, the rhythm breaks and the promise feels performative. Risk: subscription cannibalizes full-price visits if attach rate < 60% (see Module 08 model).",

      "growth.message.callout.title":
        "Do not split the pillars across channels — every channel must carry the same promise",
      "growth.message.callout.body":
        "The temptation is to use Instagram for atmosphere, Google for craft, and WhatsApp for continuity. That fragments the brand. The same four pillars appear in every channel, only the depth changes.",

      /* Hormozi */
      "growth.hormozi.badge": "Framework · Hormozi",
      "growth.hormozi.title": "Hormozi adapted — with explicit 'do not' lists",
      "growth.hormozi.meta": "Five adapted principles · each with a 'do not' caveat",
      "growth.hormozi.callout.title": "Adapted, not imported",
      "growth.hormozi.callout.body":
        "Hormozi's Value Equation is a popular entrepreneurial framework with anecdotal support. Treat these adaptations as testable hypotheses, not proven principles. The stronger scientific frame is Ehrenberg-Bass — distinctive assets plus mental and physical availability. We use Hormozi for offer discipline, not as a law of growth.",
      "growth.hormozi.label.do-not": "Do not",

      /* Hormozi principles (adapted text + caveat resolved by index) */
      "growth.hormozi.principle.1.name": "Value Equation",
      "growth.hormozi.principle.1.adapted":
        "Increase Dream Outcome (become the person who knows good coffee), increase Likelihood of Achievement (guaranteed good cup via roastery), decrease Time Delay (7am opening), decrease Effort & Sacrifice (subscription removes per-cup decision).",
      "growth.hormozi.principle.1.caveat": "Do not promise transformational outcomes a café cannot deliver.",
      "growth.hormozi.principle.2.name": "Offer Design & Stacks",
      "growth.hormozi.principle.2.adapted":
        "Bundle a core drink + a side + a bean sample + a story card. Anchor against à la carte total. Continuity via subscription.",
      "growth.hormozi.principle.2.caveat": "Anchors must be truthful, not inflated.",
      "growth.hormozi.principle.3.name": "Lead Magnets",
      "growth.hormozi.principle.3.adapted":
        "Free 'origin flavour wheel' PDF or a free mini-cupping ticket with first retail bean purchase — not a discount.",
      "growth.hormozi.principle.3.caveat": "Lead magnet must be genuinely useful, not a coupon in disguise.",
      "growth.hormozi.principle.4.name": "Retention & Repeat Purchase",
      "growth.hormozi.principle.4.adapted":
        "Subscription + named-drink rotation + seasonal Lonya origins create a reason to return weekly.",
      "growth.hormozi.principle.4.caveat": "Do not over-discount; protect specialty margin perception.",
      "growth.hormozi.principle.5.name": "More, Better, New",
      "growth.hormozi.principle.5.adapted":
        "More (delivery, retail), Better (consistency, service), New (seasonal drinks, workshops). Sequence Better before More.",
      "growth.hormozi.principle.5.caveat": "New without Better erodes trust.",

      /* Sutherland */
      "growth.sutherland.badge": "Framework · Sutherland",
      "growth.sutherland.title": "Sutherland adapted — perceived value is the lever",
      "growth.sutherland.meta": "Four perceived-value levers · cheap to test, sequence first",
      "growth.sutherland.callout.title": "Adapted, not imported",
      "growth.sutherland.callout.body":
        "Sutherland's perceived-value principles draw on behavioural economics but are largely illustrative case studies, not controlled experiments in hospitality. Each adaptation below should be treated as a testable hypothesis with a measurement plan, not a proven tactic.",
      "growth.sutherland.callout2.title": "The Sutherland lens is the cheaper lever — try it first",
      "growth.sutherland.callout2.body":
        "Hormozi's offer stack changes the receipt. Sutherland's perceived-value moves change the same cup's meaning at near-zero cost: a story card, a named preparation, a bear character. Sequence Sutherland before Hormozi wherever possible.",

      /* Sutherland principles (adapted text + caveat resolved by index) */
      "growth.sutherland.principle.1.name": "Perceived value > objective value",
      "growth.sutherland.principle.1.adapted":
        "A story card describing origin, altitude, and process raises perceived value more than a bigger cup at the same cost.",
      "growth.sutherland.principle.2.name": "Inexpensive experiments",
      "growth.sutherland.principle.2.adapted":
        "Test named-drink story cards, table signs, and bear-character captions before any expensive redesign. Most cost S/. 0–200.",
      "growth.sutherland.principle.3.name": "Psychological pricing & anchoring",
      "growth.sutherland.principle.3.adapted":
        "A S/. 28 tasting flight makes a S/. 14 pour-over feel reasonable. Anchor, then offer the accessible tier.",
      "growth.sutherland.principle.4.name": "Context shapes perception",
      "growth.sutherland.principle.4.adapted":
        "The two-bar layout, the Art Nouveau details, and the roaster visible from the counter are context that makes the same coffee taste better.",
      "growth.sutherland.principle.5.name": "Irrational-but-testable ideas",
      "growth.sutherland.principle.5.adapted":
        "A 'bear recommends' pairing on the menu, a morning ritual greeting, or a weekly 'gram of the week' bean highlight.",
      "growth.sutherland.principle.5.caveat": "Test cheaply; keep only what improves repeat or ticket.",

      /* Offer */
      "growth.offer.badge": "Offer",
      "growth.offer.title": "The Ursa offer stack — five layers from core cup to continuity",
      "growth.offer.meta": "Hormozi stack · truthful anchor",
      "growth.offer.stack.heading": "The stack, bottom to top",
      "growth.offer.stack.italic-note":
        "Anchor the stack against the à la carte total — truthfully. Continuity is the top layer, not the hook.",
      "growth.offer.layer.continuity.label": "Continuity",
      "growth.offer.layer.continuity.item": "Ursa Mañana subscription invite",
      "growth.offer.layer.continuity.note": "Hand the regular a reason to come back Monday.",
      "growth.offer.layer.story.label": "Story",
      "growth.offer.layer.story.item": "Origin story card",
      "growth.offer.layer.story.note": "Farm, altitude, process. Photographable, take-homeable.",
      "growth.offer.layer.sample.label": "Sample",
      "growth.offer.layer.sample.item": "50g bean sample of the week's micro-lot",
      "growth.offer.layer.sample.note": "Turns one visit into a home-brew trial.",
      "growth.offer.layer.side.label": "Side",
      "growth.offer.layer.side.item": "Cookie or empanada pairing",
      "growth.offer.layer.side.note": "The bear recommends the pairing for this drink.",
      "growth.offer.layer.core.label": "Core",
      "growth.offer.layer.core.item": "Pour-over or flat white (named drink)",
      "growth.offer.layer.core.note": "The craft cup, weighed one gram at a time.",
      "growth.offer.card.why.heading": "Why the stack works",
      "growth.offer.card.why.1": "The core drink anchors price; the side is the highest-margin attach.",
      "growth.offer.card.why.2": "The bean sample converts one visit into a home-brew trial — repeated exposure.",
      "growth.offer.card.why.3": "The story card is the Sutherland lever: free to print, raises perceived value.",
      "growth.offer.card.why.4": "The subscription invite closes the loop only after the craft has been experienced.",
      "growth.offer.card.feasibility.heading": "Operational feasibility — prep, overlap, training",
      "growth.offer.card.feasibility.continuity.label": "Continuity",
      "growth.offer.card.feasibility.continuity.body":
        "Ursa Mañana subscription — prep: 0 min/visit (subscription is a POS flag). Ingredient overlap: 100% (uses existing espresso). Training: 1 hour for staff to recognise subscribers and apply discount. Risk: requires POS that supports member flags; if not, manual tally erodes the staff-time saving.",
      "growth.offer.card.feasibility.story-card.label": "Story card",
      "growth.offer.card.feasibility.story-card.body":
        "Origin story card — prep: 0 min/serving (pre-printed). Ingredient overlap: 0 (paper good). Training: 15 min on which card matches which drink. Cost: S/. 0.40/card print. Risk: card-drink mismatch erodes credibility faster than no card at all.",
      "growth.offer.card.feasibility.sample.label": "Sample",
      "growth.offer.card.feasibility.sample.body":
        "50g bean sample — prep: 30 sec (scoop + label). Ingredient overlap: 100% (retail bean stock). Training: 10 min on portion and label format. Risk: 50g is below brewable yield for some methods — clarify brew instructions on the label or sample feels useless.",
      "growth.offer.card.feasibility.side.label": "Side",
      "growth.offer.card.feasibility.side.body":
        "Cookie / empanada — prep: 0 min/serving (already prepared). Ingredient overlap: 100% (existing food line). Training: 5 min on pairing suggestions. Risk: if pastry sells out by 11am, the attach offer degrades — bake schedule must align with daily attach target.",
      "growth.offer.card.feasibility.core.label": "Core",
      "growth.offer.card.feasibility.core.body":
        "Pour-over / flat white — prep: 3–4 min (pour-over) or 90s (flat white). Ingredient overlap: 100%. Training: existing barista skill. Risk: pour-over at peak creates a service-time bottleneck if more than 3 simultaneous orders; consider capping pour-over during 8–9am.",
      "growth.offer.card.worked-example.heading": "A worked example",
      "growth.offer.card.worked-example.body":
        "A tourist orders a pour-over, accepts the cookie pairing, takes the bean sample and story card, and leaves with a WhatsApp opt-in. Three weeks later, they tag Ursa from another city and send a friend in Lima.",
      "growth.offer.card.worked-example.ticket": "Ticket",
      "growth.offer.card.worked-example.touchpoints": "Touchpoints",
      "growth.offer.card.worked-example-referral": "Referral",

      /* Offer-value lens (Hormozi framework, 8 questions applied to Ursa Mañana) */
      "growth.offer.lens.badge": "Offer-value lens",
      "growth.offer.lens.heading": "The eight-question offer-value lens, applied to Ursa Mañana",
      "growth.offer.lens.subtitle": "Each row answers one question the framework asks before an offer can ship.",
      "growth.offer.lens.row.outcome.label": "Outcome",
      "growth.offer.lens.row.outcome.body":
        "A morning where the coffee decision is already made — every weekday, 7–10am, one craft cup at Alcanfores 183. The customer is not buying coffee; they are buying a frictionless morning.",
      "growth.offer.lens.row.likelihood.label": "Likelihood",
      "growth.offer.lens.row.likelihood.body":
        "High. Ursa roasts in-house, so the marginal cup is always available; the only failure mode is bar capacity at peak — which the 50-member pilot cap exists to test before scaling.",
      "growth.offer.lens.row.delay.label": "Delay",
      "growth.offer.lens.row.delay.body":
        "Same-day. The subscriber feels the value the morning they walk in for the first time. No lead time, no onboarding sequence, no waitlist once the pilot opens.",
      "growth.offer.lens.row.effort.label": "Effort",
      "growth.offer.lens.row.effort.body":
        "One WhatsApp message or one bar payment. No app, no QR scan, no top-up. The barista marks a paw on the card — the ritual is the friction reducer.",
      "growth.offer.lens.row.proof.label": "Proof",
      "growth.offer.lens.row.proof.body":
        "Award-recognized (CAM Café Perú 2025, top 5 in specialty). The roaster is visible from the counter. Story cards cite farm, altitude, process. Marginal cost S/. 1.20–1.80 is documented in roast logs.",
      "growth.offer.lens.row.risk-reversal.label": "Risk reversal",
      "growth.offer.lens.row.risk-reversal.body":
        "Cancel anytime, no contract, no permanencia. First-month pro-rata refund if the ritual does not fit. The pilot is capped at 50 so it can be closed clean in 60 days if the model does not pay.",
      "growth.offer.lens.row.packaging.label": "Packaging",
      "growth.offer.lens.row.packaging.body":
        "One offer, one price, one window: «Ursa Mañana — S/. 20/mes, Lun–Vie 7–10am». No tiers, no add-ons to confuse the choice. The 20% off sides is the only complement, framed as the bear's recommendation, not an upsell.",
      "growth.offer.lens.row.friction.label": "Friction",
      "growth.offer.lens.row.friction.body":
        "POS flag, not a separate app. Physical stamp card, not a digital wallet. Spanish-only copy written for Miraflores, not translated. The barista knows the subscriber by name within a week.",
      "growth.offer.lens.footnote":
        "In the offer-value lens, Ursa Mañana survives because the marginal cost of a craft cup (S/. 1.20–1.80) sits so far below the perceived monthly value that the offer holds even at the conservative cell of the sensitivity table.",

      /* Behavioral lens (Sutherland framework) on the same offer stack */
      "growth.offer.behavioral.badge": "Behavioral lens",
      "growth.offer.behavioral.heading": "The same stack, read through Sutherland's perceived-value levers",
      "growth.offer.behavioral.body":
        "From a behavioral perspective, the stack works on three levers that cost almost nothing. The story card signals craft — origin, altitude, process — at roughly S/. 0.40 a print. The named-drink pairing («el oso recomienda») builds a ritual, not a transaction; the customer returns for the greeting, not the discount. And the 50g bean sample reframes one visit as the start of a home-brew trial — a perceived-value lift with no menu price change. Sequencing these before the subscription invite is what makes the invite land as recognition, not as a sales close.",

      /* Journey */
      "growth.journey.badge": "Journey",
      "growth.journey.title": "The customer journey, from Discover to Advocate",
      "growth.journey.meta": "Horizontal · 5 stages",
      "growth.journey.label.stage": "Stage",
      "growth.journey.label.channel": "Channel",
      "growth.journey.label.tactic": "Tactic",
      "growth.journey.stage.discover.name": "Discover",
      "growth.journey.stage.discover.channel": "Instagram Reel · Google Maps · Hotel card · Friend's photo",
      "growth.journey.stage.discover.tactic": "Bear paw Reel trail, GBP verified, concierge cards in 8 hotels.",
      "growth.journey.stage.consider.name": "Consider",
      "growth.journey.stage.consider.channel": "Reviews · Story cards · Named-drink board",
      "growth.journey.stage.consider.tactic": "TripAdvisor claimed; origin story cards on the menu make the craft legible.",
      "growth.journey.stage.first-visit.name": "First visit",
      "growth.journey.stage.first-visit.channel": "Barista greeting · Bear character · Weighing ritual",
      "growth.journey.stage.first-visit.tactic": "Barista names the bean, hands a story card, mentions the next cupping.",
      "growth.journey.stage.repeat.name": "Repeat",
      "growth.journey.stage.repeat.channel": "WhatsApp list · Subscription · Named-drink rotation",
      "growth.journey.stage.repeat.tactic": "Weekly drop notice via WhatsApp; Ursa Mañana invite for 7–10am regulars.",
      "growth.journey.stage.advocate.name": "Advocate",
      "growth.journey.stage.advocate.channel": "UGC challenge · Referral coupon · Gram of the week photo",
      "growth.journey.stage.advocate.tactic": "Bear barista challenge; subscriber brings-a-friend first-cup-free.",
      "growth.journey.callout.title":
        "Advocate is not the end of the funnel — it is the start of someone else's Discover stage",
      "growth.journey.callout.body":
        "The bear barista challenge, the gram-of-the-week photo, and the referral coupon are designed so an advocate's content becomes a stranger's first impression of Ursa. The journey is a loop, not a line.",

      /* Channels */
      "growth.channels.badge": "Channels",
      "growth.channels.title": "Channel coverage — twenty surfaces, one promise",
      "growth.channels.meta": "Grouped by funnel stage · each carries the four pillars",
      "growth.channels.funnel.discover.name": "Discover",
      "growth.channels.funnel.discover.desc": "Reach new audiences in Miraflores",
      "growth.channels.funnel.engage.name": "Engage",
      "growth.channels.funnel.engage.desc": "Convert interest into a visit",
      "growth.channels.funnel.retain.name": "Retain",
      "growth.channels.funnel.retain.desc": "Turn first visits into a habit",
      "growth.channels.funnel.advocate.name": "Advocate",
      "growth.channels.funnel.advocate.desc": "Let regulars bring the next regular",
      "growth.channels.channel.acquisition.name": "Acquisition",
      "growth.channels.channel.acquisition.tactic": "Paid social (Meta, Miraflores 3km) → first-time visitor with a S/. 14 anchor drink.",
      "growth.channels.channel.local-discovery.name": "Local discovery",
      "growth.channels.channel.local-discovery.tactic": "Bear paw stamps around Miraflores landmarks and a 'walk-to-Ursa' Reel.",
      "growth.channels.channel.google-maps.name": "Google / Maps",
      "growth.channels.channel.google-maps.tactic": "Verify Google Business Profile with photos, hours, menu link, and post weekly.",
      "growth.channels.channel.organic-social.name": "Organic social",
      "growth.channels.channel.organic-social.tactic": "Reels, Stories, carousels. 'Un gramo a la vez' as the recurring ritual opener.",
      "growth.channels.channel.paid-social.name": "Paid social",
      "growth.channels.channel.paid-social.tactic": "Meta ads, 3km radius, lookalike on existing regulars. A/B test the bear versus the cup.",
      "growth.channels.channel.tourism.name": "Tourism",
      "growth.channels.channel.tourism.tactic": "POV walk Reel from Parque Kennedy; 'closer than you think' framing for visitors.",
      "growth.channels.channel.creator-strategy.name": "Creator strategy",
      "growth.channels.channel.creator-strategy.tactic": "3 micro-creators per quarter — a barista, a foodie, a traveller — briefs not posts.",
      "growth.channels.channel.delivery.name": "Delivery",
      "growth.channels.channel.delivery.tactic": "Rappi menu re-photography and bundle pricing. Packing ritual Reel builds trust.",
      "growth.channels.channel.events.name": "Events",
      "growth.channels.channel.events.tactic": "Monthly cupping night and seasonal drink reveal with cloth-off ceremony.",
      "growth.channels.channel.partnerships.name": "Partnerships",
      "growth.channels.channel.partnerships.tactic": "8 nearby hotels with concierge origin cards; redeemable coupon code per hotel.",
      "growth.channels.channel.hotels.name": "Hotels",
      "growth.channels.channel.hotels.tactic": "Concierge cards and a small bean gift for VIP rooms in partnering properties.",
      "growth.channels.channel.offices.name": "Offices / coworking",
      "growth.channels.channel.offices.tactic": "B2B office sampling (10 offices) for wholesale bean accounts and morning runs.",
      "growth.channels.channel.community.name": "Community",
      "growth.channels.channel.community.tactic": "Bear barista challenge and 'gram of the week' photo wall in-store.",
      "growth.channels.channel.loyalty.name": "Loyalty",
      "growth.channels.channel.loyalty.tactic": "CoffeePass Perú listing and named-drink rotation as the recurring reason.",
      "growth.channels.channel.email-whatsapp.name": "Email / WhatsApp",
      "growth.channels.channel.email-whatsapp.tactic": "Weekly drop notice and 'gram of the week' highlight. Consent prompt at the till.",
      "growth.channels.channel.service-recovery.name": "Service recovery",
      "growth.channels.channel.service-recovery.tactic": "Direct WhatsApp reply and complimentary return cup. Document the pattern weekly.",
      "growth.channels.channel.retail-beans.name": "Retail beans",
      "growth.channels.channel.retail-beans.tactic": "Art Nouveau bean bag labels with roast date; sell at counter and via Rappi.",
      "growth.channels.channel.referral.name": "Referral",
      "growth.channels.channel.referral.tactic": "Subscriber 'brings a friend' first-cup-free; paired with the bear's recommendation.",
      "growth.channels.channel.reviews.name": "Reviews",
      "growth.channels.channel.reviews.tactic": "Google and TripAdvisor review request 24h after first visit; reply within 48h.",
      "growth.channels.channel.wholesale.name": "Wholesale / B2B",
      "growth.channels.channel.wholesale.tactic": "Office sampling → bean wholesale accounts. Quarterly origin report as the pitch.",
      "growth.channels.card.discover.heading": "Discover · what the census shows works",
      "growth.channels.card.discover.1":
        "Google Business Profile — Neira (911 reviews) and Puku Puku (658 TA reviews) prove review volume is the dominant discovery lever in this catchment. Ursa's ~56 Google reviews (addagio aggregate) is the gap.",
      "growth.channels.card.discover.2":
        "Hotel proximity — Milenaria (same street, 170m) draws tourist breakfast traffic via walk-up from 8+ nearby hotels. Concierge cards are the proposed channel; Milenaria validates the demand.",
      "growth.channels.card.discover.3":
        "Instagram Reels — @rutadelcafeperuano reel on Ursa's Aeropress champion (564 likes, 18 comments) is direct evidence that coffee-community content travels. Punto Café's TA n=2 versus awards shows weak organic reach — content is the multiplier.",
      "growth.channels.card.engage.heading": "Engage · what the census shows works",
      "growth.channels.card.engage.1":
        "Tasting format — Terrua (US$25 flight) and Cate (tasting room) both validate paid-tasting demand. Cate has 190 Google reviews at 4.6★ — the tasting format drives review volume.",
      "growth.channels.card.engage.2":
        "Rappi delivery — multiple census competitors active on Rappi (Puku Puku, Neira). Ursa already on Rappi; delivery is table-stakes, not differentiation.",
      "growth.channels.card.engage.3":
        "WorkCafé cobrand — Neira's WorkCafé experiment is a cautionary tale: 'cafe versus co-working?' confusion in reviews. Ursa's office-sampling channel should be B2B (wholesale), not co-working identity.",
      "growth.channels.card.retain-advocate.heading": "Retain and Advocate · what the census shows works",
      "growth.channels.card.retain-advocate.1":
        "Retail bags — Puku Puku sells retail bags at S/.49 with TA mention as a praise theme. Ursa currently Instagram-only for retail; the S/.49 anchor is a benchmark.",
      "growth.channels.card.retain-advocate.2":
        "CoffeePass Perú — Ursa already listed. Lima's loyalty infrastructure exists; the lever is making the listing visible at the till.",
      "growth.channels.card.retain-advocate.3":
        "Review reply cadence — Neira's 911-review volume is paired with active owner replies (observed in snippets). Ursa's reply cadence unknown; the 48h SLA in the channel card is a hypothesis.",
      "growth.channels.callout.risks.title": "Risks and missing channel evidence",
      "growth.channels.callout.risks.1":
        "No paid-social ROI baseline for Ursa. Competitor evidence (Neira, Puku Puku) shows review-volume outcomes, not ad-spend inputs. We cannot infer a Meta-ads cost-per-acquisition without a Ursa-specific pilot.",
      "growth.channels.callout.risks.2":
        "Hotel-concierge card conversion is assumed, not measured. The 8-hotel pilot is a test, not a proven channel. Risk: hotels accept the cards but concierges do not actively recommend.",
      "growth.channels.callout.risks.3":
        "WhatsApp opt-in consent is operationally non-trivial. Peru's data-protection regime (Law 29733) requires explicit consent; the till-prompt needs legal review before launch.",
      "growth.channels.callout.risks.4":
        "Rappi's 30% commission erodes specialty margin. Active on Rappi is not the same as profitable on Rappi. Risk: delivery volume cannibalises in-store visits without protecting margin.",
      "growth.channels.callout.test.title": "Test method — validate channel-by-channel before scaling",
      "growth.channels.callout.test.body":
        "Run each new channel as a 30-day pilot with a single primary metric and a stop rule. GBP: target +10 Google reviews/month, stop if less than 5/month after 60 days. Concierge cards: target 5 redemptions/hotel/month, stop if less than 2 after 30 days. Cupping night: target 8 attendees/session, stop if less than 4 for 2 consecutive sessions. Retail bean bag: target 20 units/week at counter, stop if less than 8 after 30 days. Costs are documented in the Budget Allocator; pilot outcomes feed the Experiment Tracker.",

      /* Budget */
      "growth.budget.badge": "Budget",
      "growth.budget.title": "Three budget scenarios — pick one and the plan adjusts",
      "growth.budget.meta": "Lean / Moderate / Growth in PEN",
      "growth.budget.label.monthly-total": "Monthly total",
      "growth.budget.label.more-items": "+ {n} more line items",
      "growth.budget.stat.lean.label": "Lean · free and owned channels first",
      "growth.budget.stat.moderate.label": "Moderate · paid social + creators + cuppings",
      "growth.budget.stat.growth.label": "Growth · tourism + B2B + subscription pilot",
      "growth.budget.button.budget-allocator": "Open the Budget Allocator tool",
      "growth.budget.button.roi": "Model ROI per channel",
      "growth.budget.label.per-month": "/mo",
      "growth.budget.scenario.lean.name": "Lean",
      "growth.budget.scenario.moderate.name": "Moderate",
      "growth.budget.scenario.growth.name": "Growth",
      "growth.budget.scenario.lean.focus": "Free and owned channels first: GBP, WhatsApp, organic Reels, hotel cards, story cards",
      "growth.budget.scenario.lean.item.1": "Google Business Profile optimisation",
      "growth.budget.scenario.lean.item.2": "Story cards and table signs (print)",
      "growth.budget.scenario.lean.item.3": "Hotel concierge cards (8 hotels)",
      "growth.budget.scenario.lean.item.4": "1 creator pilot (micro)",
      "growth.budget.scenario.lean.item.5": "WhatsApp list tooling and consent",
      "growth.budget.scenario.lean.item.6": "Reel production (in-house, 4/month)",
      "growth.budget.scenario.lean.item.7": "Contingency",
      "growth.budget.scenario.moderate.focus": "Add paid social, 2–3 creators, cupping nights, Rappi optimisation",
      "growth.budget.scenario.moderate.item.1": "Lean baseline",
      "growth.budget.scenario.moderate.item.2": "Paid social (Meta, Miraflores radius)",
      "growth.budget.scenario.moderate.item.3": "2 additional creators",
      "growth.budget.scenario.moderate.item.4": "Monthly cupping night",
      "growth.budget.scenario.moderate.item.5": "Rappi menu re-photography and bundles",
      "growth.budget.scenario.moderate.item.6": "Landing page and email tooling",
      "growth.budget.scenario.growth.focus": "Add tourism partnerships, B2B office sampling, subscription pilot, photographer",
      "growth.budget.scenario.growth.item.1": "Moderate baseline",
      "growth.budget.scenario.growth.item.2": "Tourism / hotel partnership programme",
      "growth.budget.scenario.growth.item.3": "B2B office sampling (10 offices)",
      "growth.budget.scenario.growth.item.4": "Subscription pilot build and support",
      "growth.budget.scenario.growth.item.5": "Contract photographer (monthly)",
      "growth.budget.scenario.growth.item.6": "Paid search and maps ads",
      "growth.budget.scenario.growth.item.7": "Contingency",
      "growth.budget.card.unlocks.heading": "What each scenario unlocks",
      "growth.budget.card.unlocks.lean":
        "Lean — runs GBP, WhatsApp, organic Reels, hotel cards, story cards. Ships the first 30 days.",
      "growth.budget.card.unlocks.moderate":
        "Moderate — adds paid social, 2–3 creators, monthly cupping, Rappi optimisation. The 60-day plan.",
      "growth.budget.card.unlocks.growth":
        "Growth — adds tourism partnerships, B2B office sampling, subscription pilot, photographer. The 90-day plan.",
      "growth.budget.card.choose.heading": "How to choose",
      "growth.budget.card.choose.body":
        "Pick the budget the owner can sustain for at least three months without flinching. The plan is designed so any of the three is internally coherent — there is no 'half-Moderate' scenario that breaks. Re-evaluate at day 30 against the experiment stop-rules in the Roadmap.",

      /* ---- Roadmap view (Module 07) ---- */
      "roadmap.lede":
        "Every action below has a named owner, a primary metric, and a stopping rule. No workstream survives past its stop rule without a written re-decision — the moment a tactic stops earning its keep, it is paused, not quietly tolerated. The plan is sequenced so the first thirty days cost almost nothing and depend on no one outside Ursa; paid media, creators, and the subscription pilot only ship after the cheaper experiments have proven the channel. The bear, the gram, and the green are non-negotiable throughout; total rebrand is off the table.",
      "roadmap.meta.phasing": "72h / 30 / 60 / 90 day plans",
      "roadmap.meta.horizon": "12-month roadmap",
      "roadmap.meta.governance": "Owners, metrics, stop rules",

      "roadmap.phase.1.badge": "Hours 0 → 72",
      "roadmap.phase.1.intro":
        "The first move is not a campaign — it is housekeeping. The five actions below cost less than S/. 1,000 combined, depend on no external vendor, and unlock every later phase: Google Business Profile feeds Maps search and the directions funnel; photographs of the two bars, named drinks, and bean bags become the raw material for Reels, story cards, and the Rappi re-shoot; WhatsApp consent at the till seeds the only owned audience list Ursa will have by day 30. Do these five in the first three days — before any paid spend, any creator brief, any subscription design.",
      "roadmap.phase.2.badge": "Day 1 → 30",
      "roadmap.phase.2.intro":
        "Month one is owned channels and the lowest-cost experiments — no paid spend, no creator contracts, no subscription build. The Gram of the Week series goes live; the first eight Reels ship from the content calendar; hotel concierge cards land at eight properties within a ten-minute walk of Alcanfores 183. Experiments 01–05 are reviewed at day 21 — three full weeks is enough to read direction without pretending to read magnitude — and each is graduated, killed, or extended on its own stop rule, never on a hunch.",
      "roadmap.phase.3.badge": "Day 31 → 60",
      "roadmap.phase.3.intro":
        "Month two turns on paid social and the creator pilot only because month one has now produced the assets and the audience signals these spend money against. The first cupping night runs in-store; Rappi is re-photographed and bundled to lift delivery average order value; the Ursa Mañana subscription waitlist opens to gauge demand before any pilot cap is committed. If the five month-one experiments all failed, this phase does not ship — the stop rules are read first, and the saved spend rolls into a redesigned month one rather than a louder month two.",
      "roadmap.phase.4.badge": "Day 61 → 90",
      "roadmap.phase.4.intro":
        "Month three launches the Ursa Mañana subscription pilot, capped at fifty subscribers so cannibalization can be measured before scale, and publishes the first quarterly origin report — a transparency piece that turns Ursa's roastery into a story asset rather than a piece of furniture. Every experiment in the tracker is graduated or killed; nothing carries into Q2 without a verdict. If the Growth budget is approved, B2B office sampling begins in ten nearby offices. The Level-2 distinctive growth system — new copy, new Reels, named-drink rotation — is decided only after the 90-day read, never before.",

      "roadmap.section.1.badge": "Section 01 · Urgency",
      "roadmap.section.1.title": "First 72 hours — claim the surfaces Ursa already owns",
      "roadmap.section.1.callout.title": "Why these five, in this order",
      "roadmap.section.1.callout.body":
        "None of the five first-72-hour actions depends on a vendor, a budget approval, or a creative review. They are all things Ursa can do with the team and assets it already has on Alcanfores 183. The alternative considered was to start with paid social on day one — rejected because paid traffic landing on an unverified Google Business Profile, an unclaimed TripAdvisor listing, and an unphotographed Rappi menu burns money without converting. Anything that requires external approval (paid social, creator contracts, subscription build) waits until day 8, by which point the surfaces the traffic will land on are clean.",

      "roadmap.section.2.badge": "Section 02 · Month one",
      "roadmap.section.2.title":
        "30-day plan — owned channels live, first experiments running",

      "roadmap.section.3.badge": "Section 03 · Month two",
      "roadmap.section.3.title":
        "60-day plan — paid + creator + cupping + Rappi optimisation",

      "roadmap.section.4.badge": "Section 04 · Month three",
      "roadmap.section.4.title":
        "90-day plan — subscription pilot + first origin report + graduation calls",
      "roadmap.section.4.callout.title": "Day 90 graduation ritual",
      "roadmap.section.4.callout.body":
        "By the end of day 90, every experiment in the Experiment Tracker carries one of four statuses: Proposed (not yet run), Running, Passed (graduated to permanent), or Killed (stop rule hit). No experiment is allowed to linger without a status — a test that runs for ninety days without a verdict is no longer a test, it is an unstated permanent commitment, and unstated permanent commitments are how marketing budgets quietly bloat. The graduation rule is simple: if the stop rule did not fire and the success metric moved in the right direction, graduate; otherwise kill. There is no fifth status.",

      "roadmap.section.5.badge": "Section 05 · Horizon",
      "roadmap.section.5.title": "12-month innovation roadmap — themes by quarter",
      "roadmap.section.5.intro":
        "Each quarter has a single dominant theme. The themes stack — Q2 does not undo Q1; Q3 extends continuity; Q4 opens B2B and wholesale only after retail and community are stable. No theme is allowed to start before its predecessor has graduated its core experiments, and if a predecessor's verdict is delayed, the next quarter's spend holds until the read lands.",
      "roadmap.section.5.callout.title": "Why a single theme per quarter",
      "roadmap.section.5.callout.body":
        "Specialty cafés fail growth programmes by running four initiatives in parallel and finishing none — every meeting becomes a status update, no decision gets the deliberation it needs, and the experiments that should be killed survive because no one has the bandwidth to kill them. One theme per quarter forces a re-decision at the boundary: graduate, kill, or extend. Q2 does not begin until Q1's core experiments have a verdict; if they are still Running, the verdict waits another two weeks and Q2's spend holds. That is the discipline this roadmap is built around.",
      "roadmap.section.5.quarter.1": "Foundations ship first",
      "roadmap.section.5.quarter.2": "Distribution layer",
      "roadmap.section.5.quarter.3": "Continuity layer",
      "roadmap.section.5.quarter.4": "Commercial layer",

      "roadmap.section.6.badge": "Section 06 · Budget",
      "roadmap.section.6.title":
        "Budget scenarios — lean, moderate, growth in monthly PEN",
      "roadmap.section.6.meta": "Pick the one you can sustain for 90 days",
      "roadmap.section.6.callout.title": "How to read these three scenarios",
      "roadmap.section.6.callout.body":
        "Each scenario is a complete, executable plan — not a contingent one. The difference between them is spend level and channel mix, not preconditions: Lean funds the first thirty days on owned channels alone; Moderate adds paid social, creators, and cupping nights for month two; Growth adds tourism partnerships, B2B sampling, and the subscription pilot for month three. Pick the one Ursa can sustain for ninety days without dipping into operating reserves; a Lean plan sustained is worth more than a Growth plan abandoned at week six. None of the three requires data Ursa does not yet have.",
      "roadmap.section.6.scenario.lean": "Foundations",
      "roadmap.section.6.scenario.moderate": "Recommended",
      "roadmap.section.6.scenario.growth": "Stretch",
      "roadmap.section.6.stat.monthly": "Monthly total",
      "roadmap.section.6.funds.lean": "Funds the 30-day plan",
      "roadmap.section.6.funds.moderate": "Funds the 60-day plan",
      "roadmap.section.6.funds.growth": "Funds the 90-day plan",
      "roadmap.section.6.more": "+ {n} more line items",

      "roadmap.section.7.badge": "Section 07 · Governance",
      "roadmap.section.7.title":
        "Owners & dependencies — every workstream has a name and a stop rule",
      "roadmap.section.7.meta": "8 workstreams",
      "roadmap.section.7.intro":
        "An action without an owner is a wish. An action without a stop rule is a habit. This table names both for the eight workstreams the 90-day plan touches — and leaves out anything that would require a full-time marketing hire in the first ninety days, because hiring before validating tactics is the most expensive way to learn.",
      "roadmap.section.7.col.workstream": "Workstream",
      "roadmap.section.7.col.owner": "Owner role",
      "roadmap.section.7.col.dependency": "Dependency",
      "roadmap.section.7.col.metric": "Primary metric",
      "roadmap.section.7.col.stop": "Stopping rule",
      "roadmap.section.7.callout.title":
        "What this table deliberately does not include",
      "roadmap.section.7.callout.body":
        "There is no Marketing Director row. The plan is built so a fractional performance marketer (eight hours a week), an in-house content lead (the barista who already shoots the Reels), and the founder can run it without a full-time marketing hire in the first ninety days. The assumption is that momentum is best proven before it is staffed — hiring a director on day 1 to validate tactics that have not yet been tested is the most expensive way to learn. If the day-90 read shows two consecutive months of KPI movement in the right direction, hiring becomes a Q2 conversation; if it does not, the plan redesigns, not hires.",

      "roadmap.owners.0.workstream": "Brand & Identity",
      "roadmap.owners.0.owner": "Founder + fractional designer",
      "roadmap.owners.0.dependency": "Original Art Nouveau asset pack + packaging",
      "roadmap.owners.0.metric": "Unprompted bear recall (Miraflores visitors)",
      "roadmap.owners.0.stop":
        "If recognition does not lift at day 90, audit the channels — not the bear.",
      "roadmap.owners.1.workstream": "Content & Social",
      "roadmap.owners.1.owner": "In-house content lead",
      "roadmap.owners.1.dependency": "Phone/camera; Reel production capacity",
      "roadmap.owners.1.metric": "Profile visits / week; saves per Reel",
      "roadmap.owners.1.stop":
        "Pause any series whose 4-week average saves fall under 100.",
      "roadmap.owners.2.workstream": "Paid Media",
      "roadmap.owners.2.owner": "Fractional performance marketer",
      "roadmap.owners.2.dependency": "Budget approval + Meta Business Manager",
      "roadmap.owners.2.metric": "Cost per qualified visit; store-visit lift",
      "roadmap.owners.2.stop":
        "Kill any channel that doesn't break CPA even inside 30 days.",
      "roadmap.owners.3.workstream": "Creator Programme",
      "roadmap.owners.3.owner": "Creator coordinator",
      "roadmap.owners.3.dependency": "3-creator roster + clear briefs",
      "roadmap.owners.3.metric":
        "Profile visits, directions clicks, CPM-equivalent",
      "roadmap.owners.3.stop": "CPM above S/. 40 with no store-visit lift.",
      "roadmap.owners.4.workstream": "Delivery (Rappi)",
      "roadmap.owners.4.owner": "Operations lead",
      "roadmap.owners.4.dependency": "Re-photography + bundle design",
      "roadmap.owners.4.metric": "Delivery AOV; bundle share",
      "roadmap.owners.4.stop": "No AOV lift in 30 days.",
      "roadmap.owners.5.workstream": "Community & Events",
      "roadmap.owners.5.owner": "Head barista",
      "roadmap.owners.5.dependency":
        "Cupping-night logistics + retail bean stock",
      "roadmap.owners.5.metric": "Attendance; retail bean sales post-event",
      "roadmap.owners.5.stop":
        "Attendance below 6 for 2 consecutive months.",
      "roadmap.owners.6.workstream": "Retail Beans",
      "roadmap.owners.6.owner": "Roaster + barista",
      "roadmap.owners.6.dependency": "Bean bag inventory + story cards",
      "roadmap.owners.6.metric": "Retail bean units / week",
      "roadmap.owners.6.stop":
        "Pause expansion if under 10 bags / week after 60 days.",
      "roadmap.owners.7.workstream": "B2B & Wholesale",
      "roadmap.owners.7.owner": "Founder + business development",
      "roadmap.owners.7.dependency": "Office intros + sampling budget",
      "roadmap.owners.7.metric": "Sampling → account conversion rate",
      "roadmap.owners.7.stop":
        "Pause if conversion is under 10% after 30 offices sampled.",

      "roadmap.section.8.badge": "Section 08 · Targets",
      "roadmap.section.8.title":
        "KPI dashboard — baseline (unknown) → 90-day target",
      "roadmap.section.8.meta": "6 north-star metrics",
      "roadmap.section.8.intro":
        "Every baseline below is honestly marked Unknown. The first week's job is to establish the baselines from the till, the WhatsApp list, and Google Business Profile. Targets are then read at day 90 — never sooner — so the team is not tempted to optimise for noise. A single wet Saturday or a single viral Reel can move a weekly number; only the ninety-day read averages out the noise.",
      "roadmap.section.8.baseline": "Baseline",
      "roadmap.section.8.target": "Day 90 target",
      "roadmap.section.8.callout.title":
        "Why baselines are unknown — and why that is honest",
      "roadmap.section.8.callout.body":
        "Refusing to invent a baseline is a feature of this dossier, not a gap. The first week's actions in Section 01 — the till extract, Google Business Profile insights, the WhatsApp consent list — are exactly the instruments that turn Unknown into a number. The single re-measurement at day 90 is deliberate: checking KPIs weekly tempts the team to optimise for noise (a single good Reel, a single wet Saturday), and the plan would rather under-measure and act than over-measure and chase. A plan that pretends to know its starting point is a plan that will quietly fail its own targets and not understand why.",

      "roadmap.kpi.0.label": "Qualified awareness",
      "roadmap.kpi.0.metric": "Profile visits / week",
      "roadmap.kpi.0.baseline": "Unknown",
      "roadmap.kpi.0.target": "2,500",
      "roadmap.kpi.0.note":
        "Instagram + Google Business Profile + creator mentions, summed weekly.",
      "roadmap.kpi.1.label": "Store visits",
      "roadmap.kpi.1.metric": "Monthly till transactions",
      "roadmap.kpi.1.baseline": "Unknown",
      "roadmap.kpi.1.target": "+15% MoM",
      "roadmap.kpi.1.note":
        "Baseline established in week 1 from the till. Re-measured at day 90.",
      "roadmap.kpi.2.label": "Average ticket",
      "roadmap.kpi.2.metric": "S/. per transaction",
      "roadmap.kpi.2.baseline": "Unknown",
      "roadmap.kpi.2.target": "S/. 22",
      "roadmap.kpi.2.note": "Lift driven by side attach + drink prominence.",
      "roadmap.kpi.3.label": "Repeat visits",
      "roadmap.kpi.3.metric": "% returning within 30 days",
      "roadmap.kpi.3.baseline": "Unknown",
      "roadmap.kpi.3.target": "25%",
      "roadmap.kpi.3.note":
        "Tracked via WhatsApp consent list + till recognition.",
      "roadmap.kpi.4.label": "Referrals",
      "roadmap.kpi.4.metric": "Concierge code redemptions / mo",
      "roadmap.kpi.4.baseline": "Unknown",
      "roadmap.kpi.4.target": "8",
      "roadmap.kpi.4.note":
        "From hotel concierge cards + creator mention code-redemptions.",
      "roadmap.kpi.5.label": "Distinctive brand recognition",
      "roadmap.kpi.5.metric": "Unprompted bear recall",
      "roadmap.kpi.5.baseline": "Unknown",
      "roadmap.kpi.5.target": "30%",
      "roadmap.kpi.5.note":
        "Survey among Miraflores visitors at day 90 — “name a specialty café”.",

      "roadmap.section.9.badge": "Section 09 · Honesty",
      "roadmap.section.9.title":
        "Skeptical revision log — what was challenged, what changed",
      "roadmap.section.9.meta": "3 rounds",
      "roadmap.section.9.intro":
        "Three rounds of skeptical challenge shaped this plan's riskiest recommendations. The log below records what was challenged, what alternative was considered, and what changed as a result — because a plan that cannot show its revisions is a plan that has not been pressure-tested, and a plan that has not been pressure-tested is a plan that will fail at the first contact with reality.",
      "roadmap.section.9.col.challenge": "Challenge",
      "roadmap.section.9.col.change": "What changed",
      "roadmap.section.9.callout.title": "Round 4 is yours",
      "roadmap.section.9.callout.body":
        "The log is open. When a stop rule fires, when a Subscription Calculator assumption is wrong by more than 20 per cent, or when an external shock (a competitor opens next door, a hotel closes, a bean harvest fails) changes the operating environment, write the fourth round here. A revision log that stops at three is a revision log that has stopped being used — and a plan that has stopped being pressure-tested is a plan that has stopped being honest.",

      "roadmap.revisions.0.challenge":
        "Is the Ursa Mañana subscription viable at S/. 20 / month for unlimited coffee (7–10am)?",
      "roadmap.revisions.0.change":
        "Added a full cannibalization model in the Subscription Calculator (Module 08). Capped the pilot at 50 subscribers for 90 days. Hard stop rule: blended profit / subscriber must be ≥ 0 after 60 days, or kill.",
      "roadmap.revisions.1.challenge":
        "Is the bear motif too childish for a specialty coffee audience?",
      "roadmap.revisions.1.change":
        "Confirmed as an asset, not a liability. The bear is geometric, Art-Nouveau-leaning, and uncontested in Lima's specialty scene. The bear-paw Reel trail is built to test that hypothesis with the first 30 days of tourist-engagement data; if signals are weak, the bear is refined, not retired. Bear stays — design effort goes to refinement, not replacement.",
      "roadmap.revisions.2.challenge":
        "Is 90 days realistic for a paid + creator + subscription launch at the same time?",
      "roadmap.revisions.2.change":
        "Scoped down. First 30 days are owned channels only (GBP, WhatsApp, organic Reels, story cards, hotel cards). Paid + creator + Rappi optimisation only after day 30. Subscription pilot only after day 60. Conservative sequencing wins; parallel launches lose.",

      "roadmap.section.10.badge": "Section 10 · Verdict",
      "roadmap.section.10.title": "Final spirit-preservation verdict",
      "roadmap.section.10.meta": "The bear stays",
      "roadmap.section.10.eyebrow": "Verdict · Permanent system",
      "roadmap.section.10.headline":
        "The plan preserves the bear, the gram, and the green.",
      "roadmap.section.10.body":
        "Total rebrand is off the table. Conservative refinement is the permanent system: verify what is already distinctive, double down on the Art Nouveau lean and the in-house roastery, and treat every growth tactic as an experiment with a named stop rule. When a tactic forces a choice between protecting Ursa's identity and chasing a generic growth play, this dossier chooses the bear.",
      "roadmap.section.10.badge.bear": "Bear preserved",
      "roadmap.section.10.badge.gram": "Gram preserved",
      "roadmap.section.10.badge.green": "Green preserved",

      "roadmap.verdict.permanent.title": "Permanent system",
      "roadmap.verdict.permanent.body":
        "Art Nouveau lean, browns-and-greens palette, the geometric bear motif, the in-house roastery on the floor, the two-bar layout, and ‘Un gramo a la vez’. These are the load-bearing identity assets; they do not change in any quarter of the twelve-month roadmap, and they do not change if the Level-2 growth skin is rolled back.",
      "roadmap.verdict.reversible.title": "6-month reversible skin",
      "roadmap.verdict.reversible.body":
        "Level-2 distinctive growth system — new copy voice, new Reel formats, a named-drink rotation that keeps the menu felt as seasonal without churning the verified staples. Reviewed at day 90; rollback is a thirty-day revert to the day-0 voice, format, and rotation, with no lasting impact on the permanent system.",
      "roadmap.verdict.seasonal.title": "Seasonal only",
      "roadmap.verdict.seasonal.body":
        "Level-3 seasonal campaigns — Lonya single-origin release, Andean-winter cup, the founder's-pick micro-lot. Each campaign is approved per season against the spirit-preservation rule, ships for a defined window, and never auto-renews. A campaign that earns a second season re-applies; it does not inherit.",

      "roadmap.stat.action-window":
        "First-action window — owned surfaces only",
      "roadmap.stat.launch-horizon": "Phased launch horizon",
      "roadmap.stat.experiments": "Experiments with stop rules",
      "roadmap.stat.workstreams": "Workstreams with named owners",

      "roadmap.button.open-experiment-tracker":
        "Open the Experiment Tracker",
      "roadmap.button.model-subscription": "Model the subscription pilot",
      "roadmap.button.open-budget-allocator": "Open the Budget Allocator",
      "roadmap.button.model-roi": "Model ROI per channel",
      "roadmap.button.experiment-tracker-short": "Experiment Tracker",
      "roadmap.button.subscription-calc-short": "Subscription Calculator",
      "roadmap.button.budget-allocator-short": "Budget Allocator",

      /* ---- Sources view (Appendix) ---- */
      "sources.lede":
        "The Ursa command center is built on publicly verifiable evidence — every figure can be re-checked by visiting the cited URL, and no claim depends on proprietary data the reader cannot see. Where data was inferred, the inference is flagged and the reasoning shown. Where data was missing, the gap is named openly — and the lean, moderate, and growth scenario structure absorbs the uncertainty without blocking the seventy-two-hour launch. The result is a plan that is falsifiable: any reader who finds a public source that contradicts a claim here can update the dossier, and the change will propagate.",
      "sources.meta.snapshot": "2026-08-01",
      "sources.meta.scope": "Public sources only",
      "sources.meta.constraint": "No proprietary material",

      "sources.section.1.badge": "Appendix §1",
      "sources.section.1.title": "Sources at a glance",
      "sources.section.1.meta":
        "{n} cited · {verified} verified · {partial} partial",
      "sources.section.1.stat.verified": "Verified sources",
      "sources.section.1.stat.partial": "Partial sources",
      "sources.section.1.stat.unverified": "Unverified sources",
      "sources.section.1.stat.gap": "Identified gaps",
      "sources.section.1.callout.title": "Why this matters",
      "sources.section.1.callout.body":
        "The strategic plan does not require any data marked Gap to act. Where a gap is material to a forecast — average ticket, repeat rate, margin — the lean, moderate, and growth scenarios replace the missing number with a defensible range, and the recommendation holds across the whole range. Owner input sharpens the forecast; it does not gate the seventy-two-hour launch, because the launch is operational (claim surfaces, install analytics, photograph the bar) and none of those actions depends on the missing data.",

      "sources.section.2.badge": "Appendix §2",
      "sources.section.2.title": "Source list",
      "sources.section.2.meta":
        "Click any source to open the original in a new tab",

      "sources.section.3.badge": "Appendix §3",
      "sources.section.3.title": "Evidence status legend",
      "sources.section.3.meta":
        "How to read the tags used throughout the dossier",
      "sources.section.3.verified.body":
        "Direct observation of a public source. Anyone can re-check the claim by visiting the cited URL. Used for primary facts — menu items, addresses, hours, official platform listings. When you see this tag, the claim can be quoted externally without further verification.",
      "sources.section.3.partial.body":
        "Source exists and is public, but access is limited (Facebook shows partial posts) or the source only proxies the underlying claim. The direction is right; the detail may be stale or gated. When you see this tag, treat the claim as approximately correct and confirm with the owner before quoting in external material.",
      "sources.section.3.unverified.body":
        "The claim is plausible and consistent with verified signals, but no single public source confirms it directly. Treated as inference and clearly flagged — never used as the basis for a hard forecast. When you see this tag, the claim is a working assumption; replace it with verified data as soon as possible.",
      "sources.section.3.gap.body":
        "No public source covers this; only the owner can supply it. Gaps are listed openly in §5 and §6 and absorbed by the lean, moderate, and growth scenario structure without blocking launch. When you see this tag, the question is open — answer it once, batched with the other open questions, and the relevant forecast tightens.",

      "sources.section.4.badge": "Appendix §4",
      "sources.section.4.title": "Disambiguation — there is another URSA",
      "sources.section.4.callout.title":
        "Important — please read before quoting this dossier",
      "sources.section.4.callout.p1":
        "A separate coffee business called URSA operates in Bridgeport, Connecticut, USA. It is unrelated to Ursa Coffee Roasters of Miraflores, Lima, Peru — the subject of this dossier.",
      "sources.section.4.callout.p2":
        "Every reference to “Ursa”, “Ursa Coffee”, or “Ursa Coffee Roasters” in this dossier, in the static HTML modules, and in the structured data files (evidence.json, experiments.json) refers exclusively to the Miraflores, Lima roastery. If a search result or AI summary mentions Bridgeport, CT — it is the wrong entity.",
      "sources.section.4.card.subject.eyebrow": "Subject",
      "sources.section.4.card.subject.body":
        "Alcanfores 183, Miraflores, Lima 15074, Peru. Specialty roaster with espresso + coldbrew bars. Instagram: @ursacoffeeperu.",
      "sources.section.4.card.unrelated.eyebrow": "Unrelated",
      "sources.section.4.card.unrelated.body":
        "A different coffee operation in the United States. Not referenced, not analysed, not affiliated. Any overlap in name is coincidental.",
      "sources.section.4.card.verify.eyebrow": "How to verify",
      "sources.section.4.card.verify.title": "Three confirmations",
      "sources.section.4.card.verify.li.1": "Address contains Miraflores, Lima",
      "sources.section.4.card.verify.li.2":
        "Instagram handle is @ursacoffeeperu",
      "sources.section.4.card.verify.li.3":
        "Spanish bio; “Tostadores de café de especialidad”",

      "sources.section.5.badge": "Appendix §5",
      "sources.section.5.title": "Open questions for the owner",
      "sources.section.5.meta":
        "{n} grouped · none blocks the 72-hour launch",
      "sources.section.5.card.title":
        "Single grouped clarification request",
      "sources.section.5.card.body":
        "These six questions refine the forecasts but do not gate the seventy-two-hour launch. The lean, moderate, and growth scenarios are designed to operate before any of these are answered — every recommendation in this dossier holds across the full range of plausible answers. The questions are batched because the owner's time is the scarce resource, and because answering them together (rather than one at a time over weeks) lets the team read the full picture and redesign once, not six times.",
      "sources.section.5.callout.title": "Why these don't block launch",
      "sources.section.5.callout.body":
        "The first seventy-two hours are operational — claim Google Business Profile, fix the Rappi menu, post the first Reel, install analytics, photograph the bar. None of those actions require a confirmed budget, an average ticket size, or staff capacity data; they require a phone, a printer, and the team already on Alcanfores 183. Owner answers sharpen the forecasts for months two and three; they do not gate the launch of month one.",

      "sources.section.6.badge": "Appendix §6",
      "sources.section.6.title": "Missing business data",
      "sources.section.6.meta":
        "Material gaps absorbed by the scenario structure",
      "sources.section.6.callout.title": "How scenarios handle these gaps",
      "sources.section.6.callout.body":
        "The three budget scenarios — Lean at S/. 2,500/month, Moderate at S/. 7,200, Growth at S/. 16,500 — are deliberately parameterised so that none of the missing data is required to act. Each scenario is a complete, executable plan, not a contingent one; the difference between them is spend level and channel mix, not preconditions. Once the owner supplies actuals — average ticket, repeat rate, margin — the scenarios collapse to a single plan, but until then, all three are runnable as written.",

      "sources.section.7.badge": "Appendix §7",
      "sources.section.7.title": "Conflicting information",
      "sources.section.7.meta": "Where public sources disagree",
      "sources.section.7.callout.title": "How conflicts are resolved",
      "sources.section.7.callout.body":
        "The dossier resolves cross-platform conflicts by treating the Instagram bio as canonical for operating hours and Rappi as canonical for menu pricing — both are first-party channels Ursa controls directly, and both update when the owner updates them. Listing aggregators (Corner.inc, mindtrip.ai, TripAdvisor) are read as secondary signals and never override first-party. When two first-party channels conflict (Instagram phone number versus mindtrip phone number), the conflict is named and left unresolved until the owner confirms.",

      "sources.section.8.badge": "Appendix §8",
      "sources.section.8.title": "Methodology note",
      "sources.section.8.meta": "How the research was conducted",
      "sources.section.8.callout.title": "What was deliberately not done",
      "sources.section.8.callout.list.1":
        "No scraping of private Instagram or Facebook posts.",
      "sources.section.8.callout.list.2":
        "No access to Ursa's POS, CRM, or Ads Manager.",
      "sources.section.8.callout.list.3": "No interviews with staff or customers.",
      "sources.section.8.callout.list.4": "No proprietary competitor data.",
      "sources.section.8.callout.list.5":
        "No financial modelling that requires undisclosed costs.",
      "sources.section.8.callout.closing":
        "The dossier accepts the cost of this constraint — some questions remain open, some forecasts remain ranges — because the alternative (private data, owner-supplied financials, Ads Manager access) would compromise the replicability that makes the plan auditable. A reader who disagrees with a claim here can re-check it; a reader who disagrees with a claim built on private data cannot.",

      "sources.section.9.badge": "Appendix §9",
      "sources.section.9.title": "Structured data files",
      "sources.section.9.meta":
        "Machine-readable evidence & experiment records in /dossier/assets/",
      "sources.section.9.card.evidence.body":
        "Structured array of every cited source with id, label, url, status (verified / partial / unverified / gap), and note. Mirrors the source list above in machine-readable form.",
      "sources.section.9.card.experiments.body":
        "Structured array of every experiment in the tracker with hypothesis, success metric, owner, duration, kill / graduate decision rule, and current status. Drives the Experiment Tracker tool.",
      "sources.section.9.callout.title": "These files are the source of truth",
      "sources.section.9.callout.body":
        "The Next.js command center reads from these JSON files where applicable. If a source status changes (TripAdvisor accumulates reviews, a competitor opens a new location, an experiment graduates), edit the JSON and re-deploy — the dossier, the tools, and the Experiment Tracker all stay in sync from a single edit. This is why the dossier is auditable end-to-end: the same record that drives the user interface drives the printable modules, and a change in one cannot drift from the other.",

      "sources.section.10.pill": "Appendix complete",
      "sources.section.10.button": "Open Experiment Tracker",

      /* ---- Module 01 · Brand Audit (deepened body copy + section copy) ---- */
      "brand.hero.lede":
        "What this module answers is whether Ursa's identity actually holds across surfaces — Instagram, Rappi, TripAdvisor, CoffeePass, Corner.inc, mindtrip.ai — or whether the assets the owner sees in the storefront thin out where most buyers first meet the brand. The audit verifies eight elements against seven public surfaces, applies the Ehrenberg-Bass distinctive-asset test to four candidates, and recommends a conservative-refinement system: codify what works, fix what is partial, and refuse rebrand. The Art Nouveau lean, the browns-and-greens palette, the bear motif, the in-house roastery, and the “Un gramo a la vez” tagline are the assets the plan protects.",
      "brand.hero.meta.direction": "Direction",
      "brand.hero.meta.direction-value": "Conservative refinement recommended",
      "brand.evidence-snapshot-label": "Evidence · snapshot 2026-08-01",

      "brand.section.verified.badge": "Verified elements",
      "brand.section.verified.title": "What we verified at the snapshot",
      "brand.section.verified.meta": "From public sources · see Sources & Evidence",
      "brand.section.verified.intro":
        "Each element below was verified against Ursa's seven public surfaces: Instagram, Facebook, the Rappi menu, the CoffeePass listing, the TripAdvisor listing, Corner.inc editorial, and the mindtrip.ai profile. Seven of eight core assets are verified; the eighth — consistent application across surfaces — is partial, and is the gap the implementation roadmap closes first. The cost of closing it is near-zero in cash terms (the design tokens, templates, and copy already exist in this dossier) and bounded in time (a single week of assembly once the owner supplies the bear asset pack, open question Q6). Where verification is partial, the precise gap is named and the action that closes it is specified in the implementation roadmap.",

      "brand.verified.art-nouveau.title": "Art Nouveau lean",
      "brand.verified.art-nouveau.detail":
        "Ornamental dividers, gold hairlines, and a serif display face root the brand in early-1900s craft rather than the flat-minimal café default. The lean is visible on Instagram templates and reinforced by the bear's geometric, illustration-led treatment.",
      "brand.verified.art-nouveau.evidence":
        "Verified on Instagram @ursacoffeeperu (bio typography and post templates, observed 2026-08-01) and on Corner.inc (\"baristas double as coffee educators\", listing updated Dec 26, 2025). NOT verified on physical signage — no street-level photo available; flagged as open question Q6.",

      "brand.verified.palette.title": "Browns + greens palette",
      "brand.verified.palette.detail":
        "A roast-spectrum brown ladder (green-bean → espresso) paired with a forest-deep bear-habitat green and cream surfaces. No blue, no indigo — a deliberate non-default that reads as craft before the customer finishes reading the name.",
      "brand.verified.palette.evidence":
        "Verified by sampling pixel values from Instagram post covers (7 posts sampled, observed 2026-08-01) and Rappi menu tile imagery. Hex values are approximate — owner-supplied brand pack (open Q6) required to lock exact tokens.",

      "brand.verified.bear.title": "Bear motif",
      "brand.verified.bear.detail":
        "A geometric, Art Nouveau-leaning bear mark appears in the logo, signage, and product storytelling — an ownable animal character in a market whose census contains none.",
      "brand.verified.bear.evidence":
        "Verified in the Instagram avatar (observed 2026-08-01). NOT visible in the Rappi menu tile imagery (drink photos only). NOT present on the TripAdvisor listing photo (storefront only). Conclusion: the bear is inconsistently applied across surfaces — see Bear Motif Analysis below.",

      "brand.verified.roastery.title": "In-house roastery",
      "brand.verified.roastery.detail":
        "Ursa roasts its own beans. This is the operational backbone of the brand: it justifies origin stories, named preparations, and the subscription math — and it is the one asset competitors cannot buy off a shelf.",
      "brand.verified.roastery.evidence":
        "Verified on Instagram bio (\"Tostadores de café de especialidad\", observed 2026-08-01), on the CoffeePass Perú brand listing, and on Corner.inc (roastery tag confirmed).",

      "brand.verified.tagline.title": "“Un gramo a la vez” tagline",
      "brand.verified.tagline.detail":
        "“One gram at a time.” Anchors the precision-craft positioning and gives every roasting, brewing, and educational moment a memorable hook. The gram is a measurable unit, which makes the claim operationally specific, not poetic.",
      "brand.verified.tagline.evidence":
        "Verified verbatim in the Instagram bio (observed 2026-08-01) and reused as a closing caption across at least 3 sampled posts. Not seen on the Rappi menu — Rappi's listing carries no tagline field.",

      "brand.verified.two-bar.title": "Two-bar layout",
      "brand.verified.two-bar.detail":
        "Espresso bar + cold-brew bar, side by side. Physically signals the two halves of the menu and creates a natural stage for theatre visible from the street — a layout choice no census competitor replicates.",
      "brand.verified.two-bar.evidence":
        "Verified on the Instagram bio (\"Espresso bar + Coldbrew bar\" literal text, observed 2026-08-01). Corner.inc repeats the same phrasing. Physical layout not independently observed via street-level photo — owner confirmation requested.",

      "brand.verified.named-drinks.title": "Named drinks",
      "brand.verified.named-drinks.detail":
        "Four verified drinks use proper names rather than generic labels: Ursagroni (Ursa + negroni), Maracumango (maracuyá + mango), Filtrado Lonya (origin label), Durazno Clarificado (descriptive). Two use coined blends; two use descriptive or origin-based labels. No census competitor names individual drinks this way.",
      "brand.verified.named-drinks.evidence":
        "Verified on Instagram (Ursagroni + Maracumango in post captions and Reel covers) AND on Rappi (all four listed by name in the delivery menu, observed 2026-08-01). Two sources converge — strongest verification in this audit.",

      "brand.verified.cross-surface.title": "Consistent application across surfaces",
      "brand.verified.cross-surface.detail":
        "Identity is strong on the storefront and product; it thins out across digital surfaces (no website, no templated social kit). This is the gap the implementation roadmap closes first. Failure mode if left unaddressed: a first-time customer who discovers Ursa via Instagram lands on an under-optimized Google Business Profile and an empty TripAdvisor listing, and concludes the café is less established than it is — a perception cost that compounds every month the gap persists.",
      "brand.verified.cross-surface.evidence":
        "Verified by surface gap analysis: Instagram (present), Facebook (limited post access, partial), Rappi (present, no tagline), CoffeePass (present, minimal), TripAdvisor (listing exists, 0 reviews — unclaimed), Corner.inc (verified), mindtrip.ai (verified but phone number conflicts with Instagram). No website found via Google site: search. Missing: templated social kit, claimed Google Business Profile, claimed TripAdvisor.",

      "brand.section.palette.badge": "Color system",
      "brand.section.palette.title": "The Ursa palette — observed and proposed",
      "brand.section.palette.meta": "16 tokens · provenance-labeled · not official until owner-verified",
      "brand.section.palette.intro":
        "A roast-spectrum brown ladder (green-bean → espresso) carries the coffee story; a forest-deep green carries the bear's habitat; cream surfaces hold it all up; a single warm gold reserves emphasis. No blue, no indigo — and that absence is itself a differentiator. The 1km census reads as a wall of Instagram-blue and pure-black café identities; Ursa's warm browns and forest-deep green read as craft before the customer finishes reading the name. Hex values are sampled from social media, not yet locked by the owner — promote them to official tokens only after the asset pack arrives (open question Q6). Implementation cost is effectively zero: all sixteen tokens are already wired into this dossier's Tailwind config, so promoting them from approximate to official is a single-line edit per token, not a re-build.",
      "brand.section.palette.provenance-key": "Provenance key",
      "brand.section.palette.provenance.approximate": "approximate — sampled from social media",
      "brand.section.palette.provenance.proposed": "proposed — design-system addition",
      "brand.section.palette.provenance.official": "official — from owner guidelines (none yet)",
      "brand.palette.provenance.approximate": "approximate",
      "brand.palette.provenance.proposed": "proposed",
      "brand.palette.provenance.official": "official",

      "brand.section.typography.badge": "Typography",
      "brand.section.typography.title": "Three voices, one rhythm",
      "brand.section.typography.intro":
        "A serif display carries the early-1900s craft lean; a humanist sans carries the readable prose; a condensed uppercase carries every label, eyebrow, and tag. Three roles, no overlap — because overlap is where inconsistency lives. Two voices would force the body to double as a label (illegible at small sizes); four would dilute the rhythm and add a font-license line item for no cognitive gain. Three is the minimum that holds the Art Nouveau voice across print, web, and signage. The split also matches the legibility research: serif faces retain character recognition at large display sizes where contrast is high, humanist sans-serifs read faster at body sizes (the canonical WCAG-aligned default), and condensed uppercase carries labels because its tight set-width preserves hierarchy at the small sizes labels live at.",
      "brand.section.typography.scale.label": "Type scale · applied",
      "brand.section.typography.scale.headline": "Un gramo a la vez.",
      "brand.section.typography.scale.subhead": "Tostadores de café de especialidad",
      "brand.section.typography.scale.body":
        "Specialty coffee, roasted in Miraflores. Every gram is weighed, every origin is named, and every cup is poured at the espresso bar or the cold-brew bar.",
      "brand.section.typography.scale.label-text": "Espresso bar · Cold-brew bar · In-house roastery",

      "brand.section.bear.badge": "Bear motif",
      "brand.section.bear.title": "The bear, examined",
      "brand.section.bear.meta": "Consistent · Inconsistent · Distinctive · Missing",
      "brand.section.bear.tints": "One mark, four approved tints · dark-roast · forest-deep · gold · terracotta",

      "brand.bear.consistent.label": "What's consistent",
      "brand.bear.consistent.point-1":
        "The bear appears in the Instagram avatar (observed 2026-08-01) and is reinforced by the brand name (Ursa = bear) on every surface — Instagram, Facebook, Rappi, CoffeePass, Corner.inc, mindtrip.ai.",
      "brand.bear.consistent.point-2":
        "The mascot treatment is warm and geometric, not cartoonish — observed in the avatar at 64×64px and reinforced by ☕️🐻 emoji pairing on Ursagroni posts.",
      "brand.bear.consistent.point-3":
        "The bear-to-brand-name link is linguistic and therefore surface-independent: even surfaces without the visual mark still carry the word \"Ursa\".",

      "brand.bear.inconsistent.label": "What's inconsistent",
      "brand.bear.inconsistent.point-1":
        "The bear appears in the Instagram avatar but is NOT visible in the Rappi menu imagery (drink photos only) and NOT on the TripAdvisor listing photo (storefront only). Application varies by surface.",
      "brand.bear.inconsistent.point-2":
        "No single, codified bear illustration set observed — application varies (avatar version, in-post watermark, emoji). Pixel-level comparison is blocked until the owner asset pack arrives (open Q6).",
      "brand.bear.inconsistent.point-3":
        "Bear presence on Instagram is ad hoc (emoji in captions, occasional watermark) — no templated social-post kit detected across 7 sampled posts.",

      "brand.bear.distinctive.label": "What's distinctive",
      "brand.bear.distinctive.point-1":
        "1km census (14 competitors + 4 Lima benchmarks, snapshot 2026-08-01): ZERO competitors use an animal character as a brand asset. This is verified white space, not an assumption.",
      "brand.bear.distinctive.point-2":
        "Bear + Art Nouveau + in-house roastery is a three-part signature no census competitor can replicate quickly — the closest single-asset claim is Neira Café Lab's \"barista champion founder\", which is a person, not a character.",
      "brand.bear.distinctive.point-3":
        "The bear can carry narrative (origin stories, seasonal skins) without diluting the mark — observed in the way @ursacoffeeperu already pairs ☕️🐻 with origin captions, suggesting the bear is already semantically linked to coffee in the brand's own voice.",

      "brand.bear.missing.label": "What's missing",
      "brand.bear.missing.point-1":
        "No animated bear (looping mark, social sticker set) — not present in any of the 7 sampled Instagram posts or in the Facebook page preview.",
      "brand.bear.missing.point-2":
        "No bear in a consistent social-post template kit — each sampled post uses a different visual treatment, suggesting the bear appears only when the barista remembers to add the emoji.",
      "brand.bear.missing.point-3":
        "No bear used as a recurring character across email and packaging — no email program detected (no website, no signup form); no packaging photo in any sampled source shows the bear mark.",

      "brand.section.distinctive.badge": "Distinctive assets",
      "brand.section.distinctive.title": "The Ehrenberg-Bass read: mental availability through repetition",
      "brand.section.distinctive.meta": "Uniqueness × Prevalence · census-verified",
      "brand.section.distinctive.intro":
        "Distinctive assets are non-brand-name elements (characters, colors, taglines, ornamentation) that uniquely identify a brand in the buyer's memory. They build mental availability — the probability that a buyer thinks of Ursa in a buying situation — through consistent repetition. Effectiveness is measured on two axes (Romaniuk & Sharp, Ehrenberg-Bass Institute): uniqueness (few competitors use the asset) and prevalence (most category buyers associate the asset with the brand). An asset that is unique but rarely applied does not yet qualify — repetition is the mechanism, not the design. One honest limitation of the framework: it was developed for fast-moving consumer goods with high purchase frequency, where mental availability compounds across weekly shopping trips. Specialty coffee is a lower-frequency category, so the 90-day prevalence test below is the adapted version — shorter than the FMCG norm, but long enough for a 1km walk-up catchment where regulars return weekly.",
      "brand.section.distinctive.census-callout-title": "The census finding",
      "brand.section.distinctive.census-callout-body":
        "1km census from Alcanfores 183 (snapshot 2026-08-01): 0 of 14 in-catchment competitors and 0 of 4 Lima benchmarks use an animal character as a brand asset. This is verified white space — the bear's uniqueness is established, but prevalence is not.",
      "brand.section.distinctive.why-callout-title": "Why this matters for Ursa",
      "brand.section.distinctive.why-callout-body":
        "The bear is a potential distinctive asset — not a confirmed one. The difference is operational: a potential asset only becomes a real asset after 90 days of consistent cross-surface application AND a customer-recall survey (n≥40) that confirms buyers associate the bear with Ursa unprompted. Until then, the bear is a design choice the owner likes. After that, it is a category-leading memory anchor that competitors cannot copy cheaply. This is the single highest-leverage brand action available to Ursa in the next 90 days.",
      "brand.distinctive.uniqueness-label": "Uniqueness",
      "brand.distinctive.prevalence-label": "Prevalence",
      "brand.distinctive.census-evidence-label": "Census evidence",
      "brand.distinctive.verdict-label": "Verdict",
      "brand.distinctive.promote-label": "Promote to distinctive asset only if",

      "brand.distinctive.bear.asset": "Bear character (geometric, Art Nouveau-leaning)",
      "brand.distinctive.bear.uniqueness": "High",
      "brand.distinctive.bear.prevalence": "Low (currently)",
      "brand.distinctive.bear.census":
        "1km census (snapshot 2026-08-01): 0 of 14 in-catchment competitors and 0 of 4 Lima benchmarks use an animal character as a brand asset. Uniqueness is verified, not assumed.",
      "brand.distinctive.bear.verdict":
        "POTENTIAL distinctive asset. Uniqueness is established. Prevalence is not — the bear appears inconsistently across surfaces (Instagram avatar yes; Rappi no; TripAdvisor no). Recommendation: apply the bear consistently across every touchpoint for 90 days, then re-measure prevalence via a customer-recall survey (n≥40) before promoting the bear from \"potential\" to \"distinctive asset\".",
      "brand.distinctive.bear.apply-if":
        "consistent application across Instagram, Rappi, TripAdvisor, Google Business Profile, packaging, and signage for ≥90 days",

      "brand.distinctive.ornamentation.asset": "Art Nouveau ornamentation (gold hairline + flourish)",
      "brand.distinctive.ornamentation.uniqueness": "High",
      "brand.distinctive.ornamentation.prevalence": "Low (currently)",
      "brand.distinctive.ornamentation.census":
        "Census scan: no competitor uses Art Nouveau ornamentation. Competitor visual defaults are flat-minimal (Neira, Punto) or industrial (Bisetti). The closest ornamental competitor is Tostaduría Bisetti's letterpress style, which is Arts & Crafts-adjacent, not Art Nouveau.",
      "brand.distinctive.ornamentation.verdict":
        "POTENTIAL distinctive asset. Uniqueness is established. Prevalence is unverified — observed only on Instagram post templates, not on Rappi, TripAdvisor, or signage. Needs the same 90-day consistent-application test as the bear.",
      "brand.distinctive.ornamentation.apply-if":
        "consistent ornamentation across Instagram, menu, signage, and packaging for ≥90 days",

      "brand.distinctive.tagline.asset": "“Un gramo a la vez” tagline",
      "brand.distinctive.tagline.uniqueness": "Medium-High",
      "brand.distinctive.tagline.prevalence": "Low",
      "brand.distinctive.tagline.census":
        "Census scan: no competitor uses a precision-gram tagline. Closest competitor claim is Neira's \"barista champion\" (about the person, not the process). Punto Café uses \"Café de especialidad\" (generic category claim).",
      "brand.distinctive.tagline.verdict":
        "POTENTIAL distinctive asset. Uniqueness is the strongest of the three because the claim is operationally specific (a gram is a measurable unit). Prevalence is unverified — currently used only on Instagram bio and post captions. Should be paired with the bear for compounding mental availability.",
      "brand.distinctive.tagline.apply-if":
        "appear on Instagram, Rappi menu description field, Google Business Profile description, printed menu, and bean bag label",

      "brand.distinctive.palette.asset": "Brown-to-green roast-spectrum palette",
      "brand.distinctive.palette.uniqueness": "Medium",
      "brand.distinctive.palette.prevalence": "Low",
      "brand.distinctive.palette.census":
        "Census scan: forest-deep green as the BEAR HABITAT color is unique to Ursa — competitors using green use it as a flat brand color, not paired with a bear character. The brown roast-spectrum ladder alone is not distinctive (Bisetti, Punto, Neira all use brown as primary).",
      "brand.distinctive.palette.verdict":
        "POTENTIAL distinctive asset ONLY when the green is paired with the bear. The brown ladder is necessary but not sufficient. Without consistent green+bear pairing, the palette alone will not build mental availability.",
      "brand.distinctive.palette.apply-if":
        "green must appear alongside the bear on every asset for ≥90 days; brown-only assets do not qualify",

      "brand.section.art-nouveau.badge": "Art Nouveau system",
      "brand.section.art-nouveau.title": "The four ornamental components",
      "brand.section.art-nouveau.meta": "Documented · applied · reserved",
      "brand.section.art-nouveau.live-label": "Live · ArtNouveauDivider",
      "brand.section.art-nouveau.live-detail":
        "The hairline-gold rule with a central flourish. Used to separate major sections — never to slice paragraphs. It is the smallest Art Nouveau signal that still registers as craft: at one pixel wide it is barely visible, at three it competes with content, at two with the flourish it carries the brand's ornamental DNA without taxing the eye. Treat it as the load-bearing ornament — every other Art Nouveau component depends on it for visual continuity.",

      "brand.art-nouveau.borders.title": "Ornamental borders",
      "brand.art-nouveau.borders.detail":
        "Hairline gold rules with a central flourish frame sections, menus, and certificates — never a flat-minimal divider.",
      "brand.art-nouveau.borders.evidence":
        "Observed in the Instagram post templates (sampled 2026-08-01) as a thin gold hairline framing drink-name posts. NOT verified on physical signage — no street-level photo available. Owner asset pack (open Q6) required to confirm whether the divider appears on the printed menu.",

      "brand.art-nouveau.type.title": "Serif display type",
      "brand.art-nouveau.type.detail":
        "Cormorant Garamond carries the headlines; its high-contrast strokes echo early-1900s lithography.",
      "brand.art-nouveau.type.evidence":
        "Observed in the Instagram bio typography and post templates (2026-08-01). Specific font family inferred from x-height and contrast — exact font file requires owner confirmation. NOT verified on Rappi (platform overrides typography).",

      "brand.art-nouveau.gold.title": "Gold accents",
      "brand.art-nouveau.gold.detail":
        "A single warm gold (#B8924A) is reserved for emphasis — eyebrows, hairlines, the bear's catchlights — never for body text.",
      "brand.art-nouveau.gold.evidence":
        "Observed as the eyebrow color in Instagram post captions (2026-08-01). Hex sampled from 3 posts — variance ±4 in sRGB space, suggesting the gold is applied consistently but is not yet codified as a token. NOT verified on packaging or signage.",

      "brand.art-nouveau.botanical.title": "Botanical / wavy line motifs",
      "brand.art-nouveau.botanical.detail":
        "Sinuous, symmetrical curves (the Art Nouveau hallmark) appear in dividers and as background texture, paired with forest-deep green.",
      "brand.art-nouveau.botanical.evidence":
        "Observed in the Instagram Story covers (3 of 5 sampled Stories use a botanical curve as background texture). NOT verified on physical signage, menus, or packaging — open question Q6 (asset pack) is the blocker. If the motif does not appear in the asset pack, this component should be downgraded from \"verified\" to \"proposed\".",

      "brand.section.evolution.badge": "Brand evolution",
      "brand.section.evolution.title": "Three evolution levels — one recommendation",
      "brand.section.evolution.meta": "Conservative refinement wins",
      "brand.section.evolution.intro":
        "Of three plausible directions, this module recommends Level 1 as the permanent system. Level 2 is a reversible 6-month growth skin layered on top. Level 3 is seasonal only. A total rebrand is explicitly off the table — not because rebrands are always wrong, but because Ursa's identity is already its ownable asset (see Distinctive Assets above), and a rebrand would destroy category-leading mental availability it has not yet finished building. Sequencing matters: Level 1 must be locked before Level 2 ships, and Level 3 is gated behind explicit owner sign-off. Cost ceiling per level: Level 1 is bounded by the asset pack (S/. 0–1,000 if the owner supplies the official bear mark; the design-system documentation itself is already written in this dossier); Level 2 adds motion-design work at S/. 1,200–3,600 for a sticker pack and one looping mark; Level 3 runs S/. 400–1,200 per seasonal skin. None of these figures requires external agency work — a Lima-based freelance motion designer can deliver Level 2 inside the budget.",
      "brand.section.evolution.why-callout-title": "Why Level 1 is the permanent system",
      "brand.section.evolution.why-callout-body":
        "Ursa already does what works in 2025–26: identity over trend-hopping. The bear, the Art Nouveau lean, the two-bar layout, and named drinks add up to a brand competitors cannot copy quickly. Refinement — not replacement — protects that asset and spends the budget on distribution (Module 04) instead of identity churn.",
      "brand.evolution.recommended-tag": "Recommended",
      "brand.evolution.risk-label": "Risk & limitation",

      "brand.evolution.level-1.name": "Conservative refinement",
      "brand.evolution.level-1.horizon": "Permanent system",
      "brand.evolution.level-1.summary":
        "Codify the existing bear, palette, type, and Art Nouveau motifs into a documented design system. Tighten application rules, add the missing social and packaging templates, and lock the bear mark at consistent sizes. This is the recommended permanent system.",
      "brand.evolution.level-1.outcome-1": "Documented color, type, and component tokens",
      "brand.evolution.level-1.outcome-2": "Bear-mark usage rules across every surface",
      "brand.evolution.level-1.outcome-3": "Reusable social, menu, and packaging templates",
      "brand.evolution.level-1.risk":
        "Risk: documentation overhead without enforcement. A design system that lives only in a Figma file and not in a printed \"brand police\" checklist (one-page reference for baristas, printer, and creators) degrades within 90 days. Mitigation: ship the one-page checklist alongside the Figma file; audit application at day 30, 60, 90. Success rule: by day 30, ≥80% of new Instagram posts use the templated kit; by day 90, ≥95% — measured by a weekly sample of ten posts. If either threshold is missed, the checklist is revised, not the system. Limitation: also depends on owner-supplied asset pack (open Q6) — if the official bear mark is not supplied within 14 days, Level 1 cannot be locked.",

      "brand.evolution.level-2.name": "Distinctive growth system",
      "brand.evolution.level-2.horizon": "6-month skin",
      "brand.evolution.level-2.summary":
        "Layer a 6-month growth skin on top of Level 1: animated bear variants, a campaign-specific type accent, and seasonal gold treatments. Everything stays reversible; the Level 1 system underneath is untouched.",
      "brand.evolution.level-2.outcome-1": "Animated bear (looping mark + sticker set)",
      "brand.evolution.level-2.outcome-2": "A single campaign accent layered on the locked palette",
      "brand.evolution.level-2.outcome-3": "Reversible — peel off after 6 months with no asset debt",
      "brand.evolution.level-2.risk":
        "Risk: animation budget creep. Animated bear variants require motion-design work that, if scoped loosely, becomes a recurring production cost (S/. 400–1,200 per sticker pack). Risk: \"reversible\" only holds if Level 1 is locked FIRST — skipping Level 1 and jumping to Level 2 is the most common reason rebrands fail. Mitigation: gate Level 2 behind a 4-week Level 1 freeze. Limitation: cannot be evaluated at thumbnail size on the Instagram grid if the bear animation lives only in Stories — the static grid impression will still read as Level 1.",

      "brand.evolution.level-3.name": "Experimental seasonal expression",
      "brand.evolution.level-3.horizon": "Seasonal only",
      "brand.evolution.level-3.summary":
        "Seasonal, time-boxed expressions: a holiday bear variant, a single-collab colorway, or a festival skin. Always reverted at the end of the season; never promoted to the permanent system without an explicit review.",
      "brand.evolution.level-3.outcome-1": "Time-boxed (≤ 8 weeks) seasonal skins",
      "brand.evolution.level-3.outcome-2": "Clearly labelled as limited, never as the new brand",
      "brand.evolution.level-3.outcome-3": "Reverted on schedule, documented for archive",
      "brand.evolution.level-3.risk":
        "Risk: customer confusion. If a seasonal skin is too distinctive (e.g. inverted constellation on espresso-black), returning customers may not recognise it as the same brand — particularly damaging for a café that depends on a 1km walk-up catchment where recognition = footfall. Risk: \"seasonal creep\" — a skin that performs well commercially is tempted into permanence, breaking Level 1 integrity. Mitigation: hard 8-week expiry date printed on every Level 3 asset; promotion to permanent requires explicit owner sign-off and a 30-day cooling period.",

      "brand.section.summary.badge": "Audit summary",
      "brand.section.summary.title": "Consistent · Inconsistent · Distinctive · Missing",
      "brand.section.summary.meta": "The 2×2 every brand audit ends on",

      "brand.summary.consistent.title": "Consistent",
      "brand.summary.consistent.item-1": "Bear mark + name (Ursa) across storefront and product",
      "brand.summary.consistent.item-2": "Browns-and-greens palette with cream surfaces",
      "brand.summary.consistent.item-3": "Cormorant Garamond display, Inter body, Oswald labels",
      "brand.summary.consistent.item-4": "In-house roastery as operational and narrative backbone",

      "brand.summary.inconsistent.title": "Inconsistent",
      "brand.summary.inconsistent.item-1": "Bear application varies by surface — no codified illustration set",
      "brand.summary.inconsistent.item-2": "Social posts are ad hoc, not templated",
      "brand.summary.inconsistent.item-3": "Packaging labels rarely feature the bear consistently",
      "brand.summary.inconsistent.item-4": "No website to carry the identity online",

      "brand.summary.distinctive.title": "Distinctive",
      "brand.summary.distinctive.item-1": "Only Lima roaster with an ownable animal character",
      "brand.summary.distinctive.item-2": "Bear + Art Nouveau + two-bar layout is a three-part signature",
      "brand.summary.distinctive.item-3": "Named drinks like Ursagroni are memorable and ownable",
      "brand.summary.distinctive.item-4": "“Un gramo a la vez” is a precision-craft claim competitors lack",

      "brand.summary.missing.title": "Missing",
      "brand.summary.missing.item-1": "Animated bear and social sticker set",
      "brand.summary.missing.item-2": "Consistent social-post template kit",
      "brand.summary.missing.item-3": "Bear as recurring character on email and packaging",
      "brand.summary.missing.item-4": "Documented design-system tokens (this module fixes that)",

      "brand.section.spirit.badge": "Guardrail",
      "brand.section.spirit.title": "The spirit-preservation principle",
      "brand.spirit.eyebrow": "Spirit-preservation principle",
      "brand.spirit.headline": "Never choose a generic growth tactic over the bear.",
      "brand.spirit.body":
        "If a recommendation forces a choice between (a) protecting Ursa's existing bear / Art Nouveau / roastery identity and (b) chasing a generic growth tactic, this dossier always chooses (a). The conservative-refinement direction is the permanent system; experimental expressions are kept seasonal and reversible. This is the guardrail every subsequent module inherits — and the test that decides the choice is operational, not aesthetic: if the tactic would require a layout change, a brand-mark swap, or a tonal shift the bear cannot carry, it fails the guardrail and is rejected. Two worked examples: a discount-voucher campaign that requires a different colour treatment to convert would fail (it dilutes the cream-and-brown surface the bear lives on); a heritage collaboration that places a partner logo above the bear on the storefront would also fail (the bear loses primacy on its own surface). A campaign that places the bear in a new seasonal scene, by contrast, passes — the mark is unchanged, only its setting moves.",
      "brand.spirit.chip.bear": "Bear · Gram · Green",
      "brand.spirit.chip.no-rebrand": "No rebrand · no generic playbook",
      "brand.spirit.chip.experiments": "Experiments reversible on 14–30 day stop rules",

      "brand.section.dossier.badge": "Static dossier",
      "brand.section.dossier.title": "Read the printable HTML dossier",
      "brand.section.dossier.body":
        "The full, print-friendly Module 01 dossier is available as browsable HTML — open it for the complete audit tables and printable colour sheets. The printed reference is what the barista team, the printer, and any external creator work from; this digital view is what the owner and the dossier team iterate against.",
      "brand.section.dossier.button": "Open the interactive style guide",

      "brand.stat.palette": "Verified palette tokens",
      "brand.stat.typography": "Type voices, one rhythm",
      "brand.stat.evolution": "Brand-evolution levels",
      "brand.stat.recommended": "Recommended permanent system",

      /* ---- Module 02 · Market Analysis (deepened body copy + section copy) ---- */
      "market.hero.lede":
        "This module runs a systematic 1km competitor census from Ursa's Alcanfores 183 address — twelve named streets radiating off Parque Kennedy walked virtually, every public-facing café logged against Google Places, TripAdvisor, and Instagram location tags — then reads the customer-voice patterns across them and converts each finding into something Ursa can match, avoid, or lead on. The bear is not borrowed from the category; it is the one position left uncontested. The census is a closed set: every named competitor inside 1km is named. The customer-voice themes are inferred from competitor review patterns, not yet from a coded sample of Ursa's own customers — that limitation is named where it applies.",
      "market.hero.meta.census": "Census",
      "market.hero.meta.competitors": "competitors",
      "market.hero.meta.scope": "Scope",
      "market.hero.meta.in-catchment": "in 1km",
      "market.hero.meta.benchmarks": "Lima benchmarks",
      "market.reviews-suffix": "reviews",

      "market.stat.competitors": "Competitors in census",
      "market.stat.catchment": "Within 1km catchment",
      "market.stat.operating-uncertain": "Operating · Uncertain",
      "market.stat.same-street": "Same street as Ursa",

      "market.proximity.same-street": "Same street",
      "market.proximity.nearby": "Nearby",
      "market.proximity.within-1km": "Within 1km",
      "market.proximity.out-of-area-lima-wide": "Benchmark",
      "market.proximity-desc.same-street": "Critical proximity — same street as Ursa, <250m walk",
      "market.proximity-desc.nearby": "Within ~500m walk of Ursa",
      "market.proximity-desc.within-1km": "Within 1km walking radius of Ursa",
      "market.proximity-desc.out-of-area-lima-wide": "Lima-wide benchmark outside 1km catchment",

      "market.status.operating": "Operating",
      "market.status.uncertain": "Uncertain",
      "market.website.yes": "Website",
      "market.website.no": "No site",

      "market.competitor.strength": "Strength",
      "market.competitor.weakness": "Weakness",
      "market.competitor.ursa-implication": "Ursa implication",

      "market.section.census.badge": "1km competitor census",
      "market.section.census.title": "Every named competitor within a 1km walk of Alcanfores 183",
      "market.section.census.meta": "Systematic street-radiating grid · snapshot 2026-08-01",
      "market.section.census.intro":
        "The competitor set is no longer a shortlist — it is a census. Every named street within a 1km walk of Ursa's address was walked virtually via Google Maps Street View and cross-referenced against Google Places, TripAdvisor, and Instagram location tags. The result: 14 competitors inside the 1km catchment plus 4 Lima-wide benchmarks (Bisetti, Ciclos, RAIZ, Monótono) included for positional context. Proximity is colour-coded: red = same street, gold = nearby, green = within 1km, grey = out-of-area benchmark. A 1km radius is the practical walk-up catchment for an espresso bar in a dense, walkable district like Miraflores — beyond it, the customer is choosing to travel, not stumbling in. The alternative considered was a paid market-research report (S/. 8,000–15,000 from a Lima consumer-insights firm); rejected because the dossier's source of truth is verifiable public data, not a third-party interpretation, and because the census cost was effectively zero in cash terms.",
      "market.section.census.summary.discovered": "Total discovered",
      "market.section.census.summary.operating": "Operating",
      "market.section.census.summary.uncertain": "Status uncertain",
      "market.section.census.summary.direct": "Direct competitors",
      "market.section.census.table.title": "Census table — sorted nearest-first",
      "market.section.census.table.streets": "streets walked",
      "market.section.census.col.competitor": "Competitor",
      "market.section.census.col.address": "Address",
      "market.section.census.col.distance": "Distance",
      "market.section.census.col.type": "Type",
      "market.section.census.col.google": "Google",
      "market.section.census.col.tripadvisor": "TripAdvisor",
      "market.section.census.col.status": "Status",

      "market.section.census.coverage.title": "Coverage methodology — how the census was built",
      "market.section.census.coverage.study-area-label": "Study area",
      "market.section.census.coverage.study-area":
        "1km walking radius from Alcanfores 183, Miraflores. 1km is the practical walk-up catchment for an espresso bar in a dense, walkable district like Miraflores.",
      "market.section.census.coverage.grid-label": "Grid definition",
      "market.section.census.coverage.grid":
        "Street-radiating grid from Parque Kennedy — every named street within 1km walked virtually via Google Maps Street View.",
      "market.section.census.coverage.streets-label": "Streets searched",
      "market.section.census.coverage.inclusion-label": "Inclusion / exclusion",
      "market.section.census.coverage.inclusion":
        "In: specialty coffee as primary category, verifiable physical address, public-facing. Out: chains with >10 Lima locations (Starbucks, Juan Valdez), pizzerias, hotel coffee, informal carts.",
      "market.section.census.coverage.stat.discovered": "Discovered",
      "market.section.census.coverage.stat.in-catchment": "In catchment",
      "market.section.census.coverage.stat.operating": "Operating",
      "market.section.census.coverage.stat.uncertain-closed": "Uncertain / closed",
      "market.section.census.coverage.anchor-label": "Anchor findings:",
      "market.section.census.coverage.anchor-body":
        "nearest confirmed competitor is {nearestConfirmed}; nearest uncertain is {nearestUncertain}; highest review volume is {highestVolume}; highest rated is {highestRated}; award leader in catchment is {awardInCatchment}; Lima-wide benchmark to beat is {awardLimaWide}.",
      "market.section.census.coverage.methodology-toggle": "Methodology, limitations & next steps",
      "market.section.census.coverage.next-steps-label": "Next steps",
      "market.section.census.coverage.full-census-prefix": "Full structured census:",

      "market.section.landscape.badge": "Competitor landscape",
      "market.section.landscape.title": "The eighteen names around Ursa",
      "market.section.landscape.meta": "Per-competitor deep-dive · snapshot 2026-08-01",
      "market.section.landscape.intro":
        "The census above is the systematic view; the cards below are the per-competitor deep-dive. For each competitor the card names one strength, one weakness, and the implication that follows for Ursa — a compressed SWOT, narrowed because each competitor's strategic position is already named in the ownable-space analysis below. Fourteen sit inside the 1km catchment; four (Bisetti, Ciclos, RAIZ, Monótono) are Lima-wide benchmarks included for positional context — not direct competitors a Miraflores customer compares on the same walk, but reference points for what category-leading looks like at Lima scale. The framework's limitation: it freezes a single snapshot (2026-08-01) and does not track momentum. A competitor opening a second location or winning a national award between snapshots would shift the read; the implementation roadmap's quarterly refresh cadence is the mitigation.",

      "market.section.ownable.badge": "Ownable space",
      "market.section.ownable.title": "Ursa sits orthogonal to the category",
      "market.section.ownable.meta": "Not a better café — a different one",
      "market.section.ownable.intro":
        "Every strong Miraflores competitor owns one position. Punto Café owns the award. Neira owns scale. Bisetti owns the school. Puku Puku owns the microlote. Terrua owns the premium tasting. None of them owns an animal, an Art Nouveau design language, or a two-bar theatre — and none of them uses named drinks. These positions are not easy to copy because each is backed by a hard asset: Punto's award certificate, Neira's four locations, Bisetti's training program, Puku Puku's microlote supply chain, Terrua's farm-to-cup sourcing. Ursa's bear, two-bar layout, and named-drink system are equally hard to copy because each is backed by a physical or operational commitment — a brand mark, a built-out space, a menu discipline — that a competitor cannot redeploy without matching all three. The moat is already built; the cost from here is defense (consistent application, see Module 01 distinctive assets), not construction.",
      "market.section.ownable.ortho-title": "The orthogonality principle",
      "market.section.ownable.ortho-body":
        "Ursa's ownable space — bear + two bars + named drinks (Ursagroni, Maracumango) + “Un gramo a la vez” — does not compete against the category's existing positions. It sits at a right angle to them. A customer can love Punto Café's award and still choose Ursa for the bear. That is the moat — and the operational rule it implies is that Ursa should never try to out-award Punto, out-scale Neira, or out-school Bisetti. Each of those contests has an incumbent with a structural advantage; the bear's contest has no incumbent at all. Success rule: a quarterly customer survey (n≥40, run alongside the distinctive-asset recall test in Module 01) should show that fewer than 30% of Ursa's regulars name any single competitor as a substitute; if that share rises above 50%, the orthogonality claim has weakened and the positioning needs a written re-decision before any new tactic ships.",
      "market.section.ownable.rule":
        "The strategic rule that follows: never try to out-award Punto, out-scale Neira, or out-school Bisetti. Instead, be the only café in Lima where the bear, the gram, and the green are visibly the operating system.",
      "market.section.ownable.card-title": "Who owns what",
      "market.section.ownable.card-footnote": "Ursa's row is the only one no competitor can claim",
      "market.ownable.punto": "Awards",
      "market.ownable.neira": "Scale",
      "market.ownable.bisetti": "“Escuela de café”",
      "market.ownable.puku-puku": "Microlotes",
      "market.ownable.terrua": "Premium tasting",
      "market.ownable.ursa": "The bear",

      "market.section.voice.badge": "Customer voice",
      "market.section.voice.title": "What Lima's café customers actually say",
      "market.section.voice.meta": "Four themes · verified from public reviews and direct observation",
      "market.section.voice.methodology-title": "Methodology and limitations",
      "market.section.voice.methodology-intro":
        "The customer-voice themes below are illustrative, not validated. They are inferred from competitor review patterns and the dossier's own competitive analysis, not from a coded sample of Ursa's own customers. Read them as direction-setting signal, not as a quantitative read on Ursa's clientele. Revisit cadence: re-code the themes the moment Ursa accumulates ≥50 of its own public reviews across Google and TripAdvisor (the threshold at which a coded sample becomes statistically meaningful for a single-site café), and not later than the next quarterly snapshot — whichever comes first.",
      "market.section.voice.field.boundary": "Market boundary",
      "market.section.voice.field.boundary-value": "Miraflores specialty coffee cafés + Lima-wide leaders for benchmarking",
      "market.section.voice.field.platforms": "Platforms sampled",
      "market.section.voice.field.platforms-value": "Instagram, Rappi, TripAdvisor, Google Maps, CoffeePass",
      "market.section.voice.field.period": "Observation period",
      "market.section.voice.field.period-value": "2026-08-01 (point-in-time snapshot)",
      "market.section.voice.field.sample": "Sample",
      "market.section.voice.field.sample-value": "Public listings and bios of 10 competitors; TripAdvisor review samples where available",
      "market.section.voice.field.inclusion": "Inclusion criteria",
      "market.section.voice.field.inclusion-value": "Direct Miraflores competitors + Lima specialty leaders with public online presence",
      "market.section.voice.field.coding": "Coding",
      "market.section.voice.field.coding-value": "Themes grouped by recurring topic (quality, service, atmosphere, value, accessibility)",
      "market.section.voice.limitation-label": "Limitation:",
      "market.section.voice.limitation-body":
        "Ursa's TripAdvisor has ~0 reviews; customer themes are inferred from competitor review patterns and the dossier's own competitive analysis, not from a coded sample of Ursa's own customers. A proper customer-voice study requires owner-provided POS data, a consented survey, or a review-mining sample of ≥50 Ursa-specific reviews (not currently available). The real-review sample below supplements these themes with verbatim public mentions but does not replace a coded customer-voice study.",

      "market.section.voice.review-sample.eyebrow": "Review sample status",
      "market.section.voice.review-sample.title": "Real customer reviews & external voice",
      "market.section.voice.review-sample.intro":
        "Searched {platforms} platforms on {date}. Found {real} real Ursa-specific mentions (mostly Instagram posts and reels) and {aggregate} aggregate ratings from directory platforms. Ursa's public review footprint is thin but not zero — and is concentrated on Instagram and Google, not on TripAdvisor.",
      "market.section.voice.review-sample.correction":
        "Correction to prior dossier: aggregator evidence (addagio.io schema.org LocalBusiness data) shows Ursa has an active Google Business Profile with ~56 reviews at 4.5 stars. The prior claim that Ursa's Google profile is \"missing/unverified\" was incorrect. The actual friction is weak SEO/GBP optimization (Ursa does not surface in Google's own \"best Lima cafés\" guides), not missing presence.",
      "market.section.voice.review-sample.platforms-toggle": "Platforms checked & limitations",
      "market.section.voice.review-sample.platforms-label": "Platforms checked",
      "market.section.voice.review-sample.methodology-label": "Methodology",
      "market.section.voice.review-sample.limitations-label": "Limitations",
      "market.section.voice.review-sample.source-link": "Source",
      "market.section.voice.themes-divider": "Illustrative themes below are inferred from competitor patterns",
      "market.section.voice.theme-label.theme": "Theme",
      "market.section.voice.theme-label.value": "Value",
      "market.section.voice.theme-label.pain": "Pain",
      "market.section.voice.theme-label.friction": "Friction",
      "market.section.voice.theme-label.lead": "Lead",
      "market.section.voice.theme-label.evidence": "Evidence",
      "market.section.voice.evidence-prefix": "Evidence ·",
      "market.section.voice.sample-prefix": "Sample ·",

      "market.section.conversion.badge": "Conversion to action",
      "market.section.conversion.title": "From findings to a 90-day worklist",
      "market.section.conversion.meta": "Six lanes · each traceable to a competitor or customer-voice theme",
      "market.section.conversion.intro":
        "Every card below is a direct conversion of a finding above — no card is speculative. Where a card references a competitor, the implication is explicit; where it references a customer-voice theme, the friction point is named. The six lanes are sequenced for a 90-day worklist: standards first (because matching category baselines is prerequisite to leading them), then avoidance (because losses compound faster than gains), then leadership (the bear-shaped openings the census verified). The success rule across all six: each lane ships one tangible artifact in 30 days (a GBP claim, a menu line, a tasting flight, a content proof point), and is reviewed at day 60 against its named metric. Any lane that has not shipped its artifact by day 30 is paused and re-scoped, not carried forward as a vague intention — vague intentions are how 90-day worklists become 12-month wishlists.",

      "market.conversion.standards.title": "Standards Ursa must match",
      "market.conversion.standards.item-1": "Award visibility — Punto Café won Premios Somos 2024; Ursa needs a credible awards entry",
      "market.conversion.standards.item-2": "Premium tasting quality — Terrua charges US$25; Ursa's cupping must be technically tight",
      "market.conversion.standards.item-3": "Educational depth — Bisetti owns the school; Ursa baristas must speak origin fluently",
      "market.conversion.standards.item-4": "Bean transparency — Puku Puku lists microlotes; Ursa's menu must show origin, process, altitude",

      "market.conversion.problems.title": "Problems to avoid",
      "market.conversion.problems.item-1": "Cobrand dilution — Neira's WorkCafé partnership softens its café identity",
      "market.conversion.problems.item-2": "Chain feel at scale — Puku Puku trades atmosphere for reach",
      "market.conversion.problems.item-3": "Generic sustainability messaging — Café Verde's green copy could be anyone's",
      "market.conversion.problems.item-4": "Educational formality — Bisetti's school tone can feel like homework",
      "market.conversion.problems.item-5": "Cold or diluted delivery coffee — a recurring Lima complaint",

      "market.conversion.lead.title": "Areas to lead",
      "market.conversion.lead.item-1": "Bear-led brand character no competitor owns",
      "market.conversion.lead.item-2": "Two-bar theatre (espresso + coldbrew) visible from the street",
      "market.conversion.lead.item-3": "Portmanteau drink naming — Ursagroni, Maracumango — as a signature system",
      "market.conversion.lead.item-4": "“Un gramo a la vez” as a patient-craft ethos",
      "market.conversion.lead.item-5": "Art Nouveau craft language applied consistently across every touchpoint",

      "market.conversion.experience.title": "Customer-experience improvements",
      "market.conversion.experience.item-1": "Verified Google Business Profile — a basic competitors also neglect",
      "market.conversion.experience.item-2": "Live \"is it busy now?\" indicator on the café site",
      "market.conversion.experience.item-3": "Clear booking channel for tastings and cuppings",
      "market.conversion.experience.item-4": "Bean cards that mark seasonal vs. permanent lots",
      "market.conversion.experience.item-5": "Strong Wi-Fi and accessible power outlets for remote workers",

      "market.conversion.product.title": "Product opportunities",
      "market.conversion.product.item-1": "Tiered tasting flights — accessible entry plus a premium depth vs. Terrua's US$25 ceiling",
      "market.conversion.product.item-2": "Microlot sub-line — borrow Puku Puku's positioning without the chain feel",
      "market.conversion.product.item-3": "Origin-story bean cards — pair with the Filtrado Lonya line vs. RAIZ",
      "market.conversion.product.item-4": "Named-drink rotation — a new named drink every season keeps the menu alive",
      "market.conversion.product.item-5": "Subscription with attach-rate economics — see the Subscription Calculator",

      "market.conversion.marketing.title": "Marketing proof points",
      "market.conversion.marketing.item-1": "\"In-house roastery, visible from the bar\" — proof of specialty credibility",
      "market.conversion.marketing.item-2": "\"Two bars: espresso + coldbrew\" — visible theatre",
      "market.conversion.marketing.item-3": "\"Original drinks you can ask for by name\" — Ursagroni, Maracumango",
      "market.conversion.marketing.item-4": "\"Art Nouveau craft, applied consistently\" — design language as moat",
      "market.conversion.marketing.item-5": "\"Single-site intimacy\" — one Miraflores café, not a chain",

      "market.section.website-gap.badge": "The website gap",
      "market.section.website-gap.title": "Of {count} competitors with a website, Ursa is not one of them.",
      "market.section.website-gap.meta": "Surfaced in 1km census · 30-day priority",
      "market.section.website-gap.callout-title": "This is the single most visible infrastructure gap in the dossier",
      "market.section.website-gap.callout-body":
        "{withWebsite} of {total} competitors in the 1km census maintain a public website. Ursa's discoverable presence is Instagram only. A first-time visitor who searches \"café de especialidad Miraflores\" on Google finds a wall of competitor websites — Punto Café, Neira Café Lab, Terrua, Cate Tasting Room, and more — and one under-optimized Google Business Profile in return. The bear is invisible at the moment of greatest intent. Success metric: within 60 days of launch, an incognito search for «café Miraflores» or «café de especialidad Miraflores» from a Miraflores IP should return the Ursa site in the top ten organic results — that is the bar at which the gap is considered closed, not merely filled.",
      "market.section.website-gap.priority-label": "30-day priority:",
      "market.section.website-gap.priority-body":
        "ship a single-page site that carries the verified identity — address, hours, signature drinks, the bear, the Art Nouveau craft language, and a booking channel for tastings. The full design system already exists in Module 01. The signature drinks are verified in Module 03. This is assembly, not invention — and the implementation cost is correspondingly small: a single Next.js page with the existing tokens, deployable to a free static host in 72 hours. In cash terms the cost is S/. 0 if the dossier team assembles it, or S/. 1,500–3,000 if a Lima-based freelance Next.js developer is hired for one to two days of work. The cost of not shipping it is larger: every Google search for \"café Miraflores\" that lands on a competitor's website is a customer Ursa has paid no acquisition cost to reach and still loses.",
      "market.section.website-gap.open-brand": "Open Brand Audit (Module 01)",
      "market.section.website-gap.open-dashboard": "Open the interactive Competitor Dashboard",

      "market.section.dossier.body":
        "All competitor claims are sourced and snapshot-dated. See Sources & Evidence for full citations.",

      /* ---- Tool T3 · Content Calendar (deepened body copy + section copy) ---- */
      "content-calendar.hero.lede":
        "The question this tool answers: how does a roastery with one owner-operator and a small barista team produce enough Instagram content to keep Ursa top-of-mind for the 1km Miraflores walk-up — without paying an agency, hiring a creator, or burning the owner's time? The planner proposes a four-week grid of twenty-six in-house concepts, ten production-ready scripts, and three cadenced series, all filmable inside the shop with the baristas already on shift. The library is closed (no addition without subtraction) so the team gets repetition instead of invention; the scripts are bilingual-verbatim so captions never need a translator; the planner pre-populates a Mon/Wed/Fri Reels, Tue/Thu Carousel, Saturday Event/UGC, Sunday Stories rhythm proven to keep an Instagram feed warm without saturating it.",
      "content-calendar.meta.concepts": "Concepts",
      "content-calendar.meta.scripts": "Scripts",
      "content-calendar.meta.series": "Series",
      "content-calendar.meta.pilot": "Pilot",
      "content-calendar.meta.pilot-value": "4 weeks",

      "content-calendar.section.1.badge": "Section 01",
      "content-calendar.section.1.title": "Library at a glance",
      "content-calendar.section.1.meta": "Counts by format",
      "content-calendar.stat.concepts": "Content concepts in the library",
      "content-calendar.stat.scripts": "Production-ready scripts (beats + caption + CTA)",
      "content-calendar.stat.series": "Repeatable series with cadence",
      "content-calendar.section.1.formats-label":
        "Concepts by format (overlapping — one concept may match several)",
      "content-calendar.section.1.callout-title": "Why these formats, in these proportions",
      "content-calendar.section.1.callout-body":
        "Reels carry reach (Instagram's algorithm surfaces them to non-followers); Carousels carry dwell time (each slide is a separate impression); Stories carry frequency without fatigue (they disappear in 24 hours, so posting daily is the contract, not spam); UGC and Events carry proof (someone else's voice, a real moment in the shop). The twenty-six-concept library is engineered so the team never opens a blank frame — the work is choosing, not inventing.",

      "content-calendar.section.2.badge": "Section 02",
      "content-calendar.section.2.title": "Filterable concept library",
      "content-calendar.section.2.meta": "{n} of 26 shown",
      "content-calendar.section.2.intro":
        "Use this library as a menu, not as a wish-list. Pick a concept, film it inside the shop with the baristas on shift, ship the caption verbatim from the linked script. The search bar matches title, hook, or ID (try \"C07\", \"bear\", or \"coldbrew\"). The format filter narrows by Instagram surface — Reel, Carousel, Series, UGC, Event. Each card opens a detail dialog with the hook, the production rules, and a link to the full Module 05 brief.",
      "content-calendar.section.2.search-placeholder": "Search title, hook, or ID (e.g. C07, bear, coldbrew)…",
      "content-calendar.section.2.empty": "No concepts match. Try a different filter or search term.",
      "content-calendar.section.2.view-details": "View details →",
      "content-calendar.section.2.dialog.hook-label": "The hook",
      "content-calendar.section.2.dialog.use-label": "How to use this concept",
      "content-calendar.section.2.dialog.use-1":
        "Film in-house with the baristas on shift — no actors, no paid locations. The point is proof that this shop exists and these people make this coffee.",
      "content-calendar.section.2.dialog.use-2":
        "Lead with the hook in the first two seconds. The brand mark belongs on the last frame, not the first — Instagram rewards watch-time, and watch-time is bought by content, not by logo.",
      "content-calendar.section.2.dialog.use-3":
        "If a matching script exists, paste its Spanish caption verbatim. The captions are pre-translated to Peruvian Spanish and field-checked; ad-libbing breaks the voice.",
      "content-calendar.section.2.dialog.use-4":
        "Post on the cadence the planner assigns. Measure saves, shares, and reach for 48 hours before deciding whether to repeat, retire, or replace.",
      "content-calendar.section.2.dialog.close": "Close",
      "content-calendar.section.2.dialog.open-module": "Open Module 05",

      "content-calendar.filter.all": "All",
      "content-calendar.filter.reel": "Reel",
      "content-calendar.filter.carousel": "Carousel",
      "content-calendar.filter.series": "Series",
      "content-calendar.filter.ugc": "UGC",
      "content-calendar.filter.event": "Event",

      "content-calendar.day.Mon": "Mon",
      "content-calendar.day.Tue": "Tue",
      "content-calendar.day.Wed": "Wed",
      "content-calendar.day.Thu": "Thu",
      "content-calendar.day.Fri": "Fri",
      "content-calendar.day.Sat": "Sat",
      "content-calendar.day.Sun": "Sun",

      "content-calendar.section.3.badge": "Section 03",
      "content-calendar.section.3.title": "Script reader",
      "content-calendar.section.3.meta": "Beats · caption · CTA · copy",
      "content-calendar.section.3.intro":
        "Every script in the library carries three artefacts: the beats (the shot list a barista can film without a director), the Spanish caption (copy-paste ready, no translation needed on the way out), and the Spanish CTA (one specific action, one specific link or word). Captions and CTAs are posted verbatim — the bilingual reader sees Spanish; the back-office copy is English. Adapting the wording mid-flight breaks the measurable test: you cannot compare a Reel that performed with caption A against one that performed with caption B if both were edited.",
      "content-calendar.section.3.beats-label": "Beats",
      "content-calendar.section.3.caption-label": "Caption · ES Peru",
      "content-calendar.section.3.cta-label": "CTA · ES Peru",
      "content-calendar.section.3.copy-button": "Copy caption",
      "content-calendar.section.3.copied-button": "Copied",

      "content-calendar.section.4.badge": "Section 04",
      "content-calendar.section.4.title": "Interactive weekly planner",
      "content-calendar.section.4.meta": "{n} assignments · click any day",
      "content-calendar.section.4.intro":
        "The four-week grid pre-populates a rhythm proven to keep an Instagram feed warm without saturating it: Monday/Wednesday/Friday Reels (reach); Tuesday/Thursday Carousels (depth); Saturday Event or UGC (proof); Sunday Stories (frequency). Click any cell to open the concept picker. The pre-populated schedule is a starting point — replace any cell with a concept from the library, stack more than one concept on a day, or reset to the suggested rhythm when the grid drifts.",
      "content-calendar.section.4.reset": "Reset to suggested",
      "content-calendar.section.4.add-concept": "+ add concept",
      "content-calendar.section.4.more": "+{n} more",
      "content-calendar.section.4.cell-label": "W{week} · {day}",
      "content-calendar.section.4.tip-prefix": "Tip:",
      "content-calendar.section.4.tip-body":
        "a day can hold more than one concept (e.g. a Reel + a Story). Use the concept picker to stack them.",
      "content-calendar.section.4.dialog-title": "Week {week} · {day}",
      "content-calendar.section.4.dialog-desc": "Toggle concepts to assign. Currently {n} assigned.",
      "content-calendar.section.4.dialog-search-placeholder": "Search concepts…",
      "content-calendar.section.4.dialog-clear": "Clear day",
      "content-calendar.section.4.dialog-done": "Done",

      "content-calendar.section.5.badge": "Section 05",
      "content-calendar.section.5.title": "Series tracker",
      "content-calendar.section.5.meta": "Log the last-posted date",
      "content-calendar.section.5.intro":
        "A repeatable series earns its slot only if the audience learns to expect it. The three series below are the spine of the Ursa feed — each has a cadence (daily or weekly) and a fixed concept that never changes from episode to episode. Use this log to record the last-posted date for each; anything older than the cadence is flagged overdue, because a missed week costs two weeks of recovery (the algorithm forgets and the audience unlearns).",
      "content-calendar.section.5.last-posted-label": "Last posted",
      "content-calendar.section.5.not-logged": "Not logged yet",
      "content-calendar.section.5.last-prefix": "Last:",
      "content-calendar.section.5.overdue": "Overdue",
      "content-calendar.section.5.on-cadence": "On cadence",
      "content-calendar.section.5.callout-title": "Cadence is the strategy",
      "content-calendar.section.5.callout-body":
        "A series earns its place by being predictable — the audience learns to expect it the way they expect a daily newspaper or a weekly column. On Instagram specifically, the algorithm rewards accounts that post consistently within a cadence window and demotes accounts that post in bursts and fall silent. One missed week costs two weeks of recovery (reach drops, then takes a week to climb back). If a series slips twice in a single month, retire it and replace with a new concept from the library — better to drop a series than to break the feed's rhythm.",

      "content-calendar.closing.title": "Full viral content dossier",
      "content-calendar.closing.body":
        "This tool complements Module 05. Open the printable HTML for the complete concept briefs, the full script set, the UGC mechanisms, and the paid-amplification method.",
      "content-calendar.closing.back": "Back to Module 05",

      /* ---- Tool T7 · Origin Atlas (deepened body copy + section copy) ---- */
      "origin-atlas.hero.lede":
        "The question this atlas answers: where do Ursa's beans come from, and where could they come from as the roastery grows its sourcing? Six origins are plotted — Utcubamba, Chirinos, La Coipa, Satipo, Quillabamba, and Rodriguez de Mendoza — each with altitude, process, varietal, and the cup profile it produces. Utcubamba wears the gold ring: it is the verified origin behind the Filtrado Lonya, the single-origin pour-over named after the river that runs through the region. The other five are realistic expansion candidates plotted for sourcing education, for menu rotation planning, and as inputs to the seasonal 'Gramo del Mes' feature.",
      "origin-atlas.meta.origins": "Origins",
      "origin-atlas.meta.origins-value": "{n} plotted",
      "origin-atlas.meta.verified": "Verified",
      "origin-atlas.meta.verified-value": "Utcubamba → Filtrado Lonya",
      "origin-atlas.meta.snapshot": "Snapshot",
      "origin-atlas.meta.snapshot-value": "2026-08-01",

      "origin-atlas.section.1.badge": "Atlas §1",
      "origin-atlas.section.1.title": "The map, at a glance",
      "origin-atlas.section.1.meta": "Peru's coffee belt runs along the eastern Andean slope",
      "origin-atlas.stat.origins": "Origins plotted",
      "origin-atlas.stat.altitude": "Altitude range",
      "origin-atlas.stat.processes": "Processes (washed / natural / honey)",
      "origin-atlas.stat.varietals": "Varietals (Bourbon · Caturra · Catimor · Typica)",
      "origin-atlas.section.1.intro":
        "Peru's specialty coffee belt runs along the eastern slope of the Andes — a 1,500–2,000 m cloud-forest band where Amazonas, Cajamarca, Junín, and Cusco account for the majority of the country's specialty production. The six origins plotted here were chosen because each represents a distinct combination of altitude, process, and varietal — together they span the cup-profile space Ursa is likely to source from as the roastery grows. The map is illustrative, not survey-accurate; dots are positioned for legibility, not GPS precision.",
      "origin-atlas.section.1.callout-title": "What 'verified' means here",
      "origin-atlas.section.1.callout-body":
        "Only Utcubamba is currently verified as a Ursa bean origin — it is poured as the Filtrado Lonya. The other five are realistic candidate origins for Ursa's roastery expansion, plotted here for sourcing education and as inputs to the menu's single-origin rotation. They are not yet on the menu, and no claim is made that Ursa currently buys from them. Promoting any candidate to verified requires a sourced lot, a named producer or cooperative, and a public menu listing.",

      "origin-atlas.section.2.badge": "Atlas §2",
      "origin-atlas.section.2.title": "Interactive origin map",
      "origin-atlas.section.2.meta": "Click any dot — Utcubamba wears the gold verified ring",
      "origin-atlas.section.2.compass-label": "Peru · coffee-belt origins",
      "origin-atlas.section.2.list-label": "Or pick from list",
      "origin-atlas.section.2.verified-pill": "Verified · Filtrado Lonya",
      "origin-atlas.section.2.detail.altitude-label": "Altitude",
      "origin-atlas.section.2.detail.process-label": "Process",
      "origin-atlas.section.2.detail.varietal-label": "Varietal",
      "origin-atlas.section.2.detail.drink-label": "Ursa drink",
      "origin-atlas.section.2.detail.notes-label": "Tasting notes",
      "origin-atlas.section.2.detail.story-label": "Story",
      "origin-atlas.section.2.detail.process-callout-title": "{process} process",

      "origin-atlas.section.3.badge": "Atlas §3",
      "origin-atlas.section.3.title": "Flavour wheel",
      "origin-atlas.section.3.meta": "Origins plotted on tasting-note categories",
      "origin-atlas.section.3.intro":
        "Each column is a flavour category. Each chip beneath is an origin whose cup lands in that category. Click a chip to load that origin in the detail panel above. Ursa's verified origin (Utcubamba) is highlighted in gold. The wheel is illustrative, not exhaustive — a real cupping would produce a more granular SCA flavour wheel; this shortened version is enough to plan a rotation.",

      "origin-atlas.section.4.badge": "Atlas §4",
      "origin-atlas.section.4.title": "Harvest seasonality",
      "origin-atlas.section.4.meta": "Peru harvest runs May–September; fresh-crop windows matter",
      "origin-atlas.section.4.intro":
        "Peru's coffee harvest typically runs May–September, with peak activity in June–August. Fresh-crop windows — when a region's coffee is at its brightest and most aromatic — fall in the three to six months after harvest, so a May-harvest lot is at its best from June to November. Planning single-origin features around fresh-crop arrival is a low-cost way to make the menu feel alive: the same Utcubamba lot tastes meaningfully different in August (two months off-tree) versus February (eight months off-tree), and the menu can name the difference.",
      "origin-atlas.section.4.legend-harvest": "Harvest month",
      "origin-atlas.section.4.legend-verified": "Ursa verified origin",

      "origin-atlas.section.5.badge": "Atlas §5",
      "origin-atlas.section.5.title": "Altitude comparison",
      "origin-atlas.section.5.meta": "Higher altitude = denser bean = brighter cup",
      "origin-atlas.section.5.intro":
        "The chart plots altitude for each origin in metres above sea level. Ursa's verified origin (Utcubamba) is shown in gold; the five candidates are shown in forest-deep. The 1,400–2,000 m window is the entry altitude for Peruvian specialty — below 1,200 m, beans are typically destined for commercial blends; above 1,900 m, yields drop and the risk of frost damage rises.",
      "origin-atlas.section.5.axis-label": "Altitude (m above sea level)",
      "origin-atlas.section.5.callout-title": "Why altitude matters",
      "origin-atlas.section.5.callout-body":
        "Above roughly 1,500 m, cooler nights slow cherry maturation. The cherry spends longer on the tree, which produces a denser bean with more complex sugar chemistry — and a denser bean, when roasted, yields brighter acidity, more aromatic complexity, and a cup that reads as 'specialty' rather than 'commodity'. All six origins in this atlas sit at or above 1,550 m — the entry altitude for Peruvian specialty. Altitude is not the only variable (process and varietal matter at least as much), but it is the most legible signal a buyer has before tasting the cup.",

      "origin-atlas.section.6.badge": "Atlas §6",
      "origin-atlas.section.6.title": "How altitude, process & varietal shape the cup",
      "origin-atlas.section.6.meta": "A short, accurate primer",
      "origin-atlas.section.6.altitude-title": "Altitude",
      "origin-atlas.section.6.altitude-body":
        "Higher altitude grows denser beans with more complex sugar chemistry. Below 1,200 m, cups tend to be soft and flat; 1,200–1,500 m brings body and sweetness; above 1,500 m (specialty territory) brings bright acidity, floral aromatics, and clean fruit. All six origins plotted here sit at or above 1,550 m. For Ursa, this means altitude is a useful first filter when sourcing new lots: anything below the band can be skipped before tasting.",
      "origin-atlas.section.6.process-title": "Process",
      "origin-atlas.section.6.process-body":
        "Washed removes the fruit before fermentation — bright, clean, acidic; lets terroir speak loudest. Natural dries the cherry on the bean — heavy body, fruit-forward, sweeter, more ferment-driven. Honey sits in between — partial mucilage left on, syrupy body, balanced sweetness, more demanding to execute well. For Ursa, this means the Filtrado Lonya should remain a washed process (Utcubamba's clean acidity is the point of the drink), while a future seasonal espresso could justifiably explore a natural or honey lot for body and sweetness.",
      "origin-atlas.section.6.varietal-title": "Varietal",
      "origin-atlas.section.6.varietal-body":
        "Bourbon — old, refined, sweet and complex (Utcubamba, La Coipa, Rodriguez de Mendoza). Caturra — Bourbon mutation, bright and clean, higher yield (Chirinos). Typica — the original Arabica base, elegant and balanced (Quillabamba). Catimor — Timor hybrid, hardy and productive but less complex (Satipo). For Ursa, this means a cupping-flight curriculum could be built varietal-by-varietal — Bourbon night, Caturra night, Typica night — each with a different origin on the bar.",
      "origin-atlas.section.6.pill-acidity": "+ Acidity",
      "origin-atlas.section.6.pill-aromatics": "+ Aromatics",
      "origin-atlas.section.6.pill-density": "+ Density",
      "origin-atlas.section.6.pill-washed": "Washed → bright",
      "origin-atlas.section.6.pill-natural": "Natural → heavy",
      "origin-atlas.section.6.pill-honey": "Honey → syrupy",
      "origin-atlas.section.6.pill-bourbon": "Bourbon → refined",
      "origin-atlas.section.6.pill-typica": "Typica → elegant",
      "origin-atlas.section.6.pill-catimor": "Catimor → hardy",
      "origin-atlas.section.6.callout-title": "How Ursa uses this atlas",
      "origin-atlas.section.6.callout-body":
        "The atlas is an input to three operational decisions: the menu's single-origin rotation (which origin pours next), the seasonal 'Gramo del Mes' feature (which origin gets the spotlight), and the cupping-night curriculum (which origins taste together). Ursa's verified origin (Utcubamba) anchors the Filtrado Lonya and is the only one that ships without further sourcing work; the other five are expansion candidates, each requiring a sourced lot, a named producer or cooperative, and a public menu listing before promotion to verified status.",

      "origin-atlas.section.7.atlas-complete": "Atlas complete",
      "origin-atlas.section.7.menu-link": "Menu & Product",
      "origin-atlas.section.7.studio-link": "Menu Engineering Studio",

      "origin-atlas.process-meta.washed":
        "Bean is stripped of fruit before fermentation and drying. Produces bright, clean, acidic cups where terroir speaks loudest.",
      "origin-atlas.process-meta.natural":
        "Bean is dried inside the whole cherry. Produces heavier body, fruit-forward character, and sweeter, ferment-driven aromatics.",
      "origin-atlas.process-meta.honey":
        "Bean is dried with the sticky fruit mucilage left on (no skin). Produces syrupy body, balanced sweetness, and complex stone-fruit notes.",

      /* ---- Tool T8 · ROI Dashboard (deepened body copy + section copy) ---- */
      "roi.hero.lede":
        "The question this dashboard answers: which of the eight marketing channels Ursa is running or considering actually pays back, and at what confidence? The eight channels are pre-populated with verified budget defaults from Module 04 — Google Business Profile (free), Meta paid social, three-creator pilot, hotel concierge cards, monthly cupping night, Rappi optimisation, WhatsApp list, and the Ursa Mañana subscription pilot. Edit any cell — spend, expected customers, revenue per customer — and watch ROI, payback months, and the blended portfolio recalculate live. Drag the confidence slider to scale expected customers across every channel simultaneously; the dashboard then surfaces best-case, expected, and worst-case revenue ranges for the portfolio as a whole.",
      "roi.meta.currency": "Currency",
      "roi.meta.currency-value": "PEN (S/.)",
      "roi.meta.channels": "Channels",
      "roi.meta.channels-value": "{n} pre-populated · editable",
      "roi.meta.confidence": "Confidence",
      "roi.meta.confidence-value": "50% – 100% slider",

      "roi.section.sensitivity.badge": "Sensitivity",
      "roi.section.sensitivity.title": "Conversion confidence — drag to scale expected customers",
      "roi.section.sensitivity.meta": "Recalculates everything below",
      "roi.section.sensitivity.label": "Conversion confidence",
      "roi.section.sensitivity.worst": "Worst · 50%",
      "roi.section.sensitivity.expected": "Expected · {n}%",
      "roi.section.sensitivity.best": "Best · 100%",
      "roi.section.sensitivity.body":
        "The slider multiplies expected customers across every channel. At {confidence}% confidence, a channel projected to bring 100 customers is modelled as {scaled}. The 50–100% range is the dashboard's honest acknowledgement that projection is not measurement — the worst-case (50%) assumes half the expected customers convert; the best-case (100%) assumes the projection is exactly right. Total expected revenue recalculates below — and the best/worst range appears in the Confidence section.",
      "roi.section.sensitivity.range-best": "Best case",
      "roi.section.sensitivity.range-expected": "Expected @ {n}%",
      "roi.section.sensitivity.range-worst": "Worst case",
      "roi.section.sensitivity.reset": "Reset to defaults",

      "roi.section.channels.badge": "Channels",
      "roi.section.channels.title": "Channel ROI table — edit any cell, watch everything recalculate",
      "roi.section.channels.meta": "8 pre-populated · all editable",
      "roi.section.channels.col-channel": "Channel",
      "roi.section.channels.col-spend": "Spend / mo",
      "roi.section.channels.col-customers": "New customers",
      "roi.section.channels.col-revenue-per": "Revenue / customer",
      "roi.section.channels.col-revenue": "Revenue",
      "roi.section.channels.col-payback": "Payback (mo)",
      "roi.section.channels.col-roi": "ROI %",
      "roi.section.channels.scaled-suffix": "→ {n} @ {confidence}%",
      "roi.section.channels.legend-green": "Green · ROI ≥ 200%",
      "roi.section.channels.legend-gold": "Gold · ROI 100–200%",
      "roi.section.channels.legend-terracotta": "Terracotta · ROI < 100%",
      "roi.section.channels.legend-free": "∞ · free channel with revenue",
      "roi.section.channels.callout-title": "These are projections, not receipts",
      "roi.section.channels.callout-body":
        "Expected customers and revenue per customer are assumptions, not measured results — the dashboard ships with research-informed defaults, not actuals. The discipline this dashboard enforces is: run the linked experiment for each channel, record the actual numbers, replace the assumption with the measured value, and let the dashboard re-converge. The confidence slider is the explicit acknowledgement that projections are uncertain; the experimental link in each channel's row in the Experiment Tracker is the mechanism by which that uncertainty gets resolved.",

      "roi.section.portfolio.badge": "Portfolio",
      "roi.section.portfolio.title": "Blended portfolio — all channels together",
      "roi.section.portfolio.meta": "At {n}% confidence",
      "roi.section.portfolio.stat-spend": "Total monthly spend",
      "roi.section.portfolio.stat-revenue": "Total expected revenue @ {n}%",
      "roi.section.portfolio.stat-roi": "Blended ROI",
      "roi.section.portfolio.stat-payback": "Blended payback",
      "roi.section.portfolio.card-customers-title": "Customers modelled",
      "roi.section.portfolio.card-customers-body":
        "New customers per month at {confidence}% confidence. Blended cost per acquisition: {cpa}. This number is the sum of scaled customers across all eight channels; it is not the same as foot traffic, because the same person can be acquired by more than one channel (a hotel guest who later becomes a WhatsApp subscriber counts twice). Use it to size acquisition capacity, not to forecast headcount.",
      "roi.section.portfolio.card-profit-title": "Profit / month",
      "roi.section.portfolio.card-profit-body":
        "Revenue minus spend at the current confidence. A positive number here does not equal operating profit — it is gross contribution from acquisition spend. The number still has to clear cannibalisation (a subscription customer may have been a walk-in anyway) and fixed cost (rent, payroll, green coffee). For the full marginal-cost break-even on the subscription pilot specifically, open Module 08.",
      "roi.section.portfolio.card-payback-title": "Payback horizon",
      "roi.section.portfolio.card-payback-body":
        "How long until cumulative revenue covers cumulative spend, in months. Lower is better; under 1.0 month means the channel pays back inside the same period (the spend is recovered before the next billing cycle). The blended payback is the portfolio average — individual channels will pay back faster or slower than this number depending on their own ratio of spend to revenue.",
      "roi.section.portfolio.unit-months": "months",

      "roi.section.compare.badge": "Compare",
      "roi.section.compare.title": "ROI % per channel — bar chart",
      "roi.section.compare.meta": "At {n}% confidence",
      "roi.section.compare.intro":
        "Green bars clear 200% ROI (every sol spent returns at least three); gold bars sit between 100–200% (every sol spent returns two-to-three); terracotta bars are under 100% (the channel is losing money or barely breaking even). Free channels — Google Business Profile and WhatsApp — are capped visually at 200% so they don't compress the rest of the chart; their actual ROI is mathematically infinite. Use the chart to spot the shape of the portfolio, not to read precise ROI values — read those in the table above.",

      "roi.section.confidence.badge": "Confidence",
      "roi.section.confidence.title": "Best, expected, and worst case for total revenue",
      "roi.section.confidence.meta": "Scales with the confidence slider",
      "roi.section.confidence.chart-title": "Revenue range across confidence bands",
      "roi.section.confidence.bar-best": "Best case · 100% confidence",
      "roi.section.confidence.bar-expected": "Expected · {n}% confidence",
      "roi.section.confidence.bar-worst": "Worst case · 50% confidence",
      "roi.section.confidence.body":
        "The gap between best case (100% confidence) and worst case (50%) is the model's honest uncertainty about the projection. The decision rule: if the worst case still covers total monthly spend, the portfolio is robust and you can ship as planned; if only the best case clears it, reduce spend on the riskiest channel until the expected case covers spend on its own. The slider above scales expected customers; this section shows the revenue consequence at three fixed confidence points.",
      "roi.section.confidence.best-title": "Best-performing channel",
      "roi.section.confidence.best-intro":
        "The channel with the highest ROI at the current confidence. Free channels (Google Business Profile, WhatsApp) sort to the top when their spend is zero — their infinite ROI is real, not a glitch, but it cannot be scaled by spending more.",
      "roi.section.confidence.worst-title": "Weakest channel",
      "roi.section.confidence.worst-intro":
        "The channel with the lowest finite ROI at the current confidence. If ROI is below 100%, the channel is spending more than it returns in the same month — cut spend, re-brief the creative, or retire the channel and reallocate the budget to the best-performing line.",
      "roi.section.confidence.worst-all-free": "All channels are free or have infinite ROI. Nothing to flag.",
      "roi.section.confidence.worst-losing": "Losing {amount}/mo at {confidence}% confidence.",
      "roi.section.confidence.worst-below": "ROI of {roi}% is below the 100% threshold.",
      "roi.section.confidence.pill-revenue": "{amount} revenue",
      "roi.section.confidence.pill-spend": "{amount} spend",

      "roi.section.pair.badge": "Pair with",
      "roi.section.pair.title": "Set the budget first, then validate it here",
      "roi.section.pair.intro":
        "Set the budget before validating it. The Budget Allocator locks the monthly commitment; this dashboard models the return on each line item. The Subscription Calculator handles the one channel — Ursa Mañana — that needs marginal-cost break-even, cannibalisation, and free-cup capacity math this dashboard deliberately simplifies.",
      "roi.section.pair.budget-title": "Budget Allocator",
      "roi.section.pair.budget-body":
        "The Budget Allocator tells you what you spend per line item. Use it to lock in the total monthly commitment before modelling return here.",
      "roi.section.pair.budget-cta": "Open Budget Allocator",
      "roi.section.pair.calc-title": "Subscription Calculator",
      "roi.section.pair.calc-body":
        "The Subscription pilot channel above is modelled simply. For the full marginal-cost break-even, cannibalisation, and free-cup capacity math, open Module 08.",
      "roi.section.pair.calc-cta": "Open Subscription Calculator",

      /* ---- Calculator (Module 08) · Ursa Mañana Subscription Economics ---- */
      "calculator.lede":
        "This calculator answers one decision: does Ursa Mañana — the unlimited-coffee subscription at S/. 20/month, Mon–Fri 7–10am, in-store only, one cup per visit, no milk drinks — pay at Ursa's own-roastery marginal cost? Edit any input and the profit, break-even attach rate, free-cup capacity, and recovery time update live. The honest risk is cannibalization of existing regulars, not per-cup cost; the model exposes it explicitly rather than hiding it inside an average.",
      "calculator.meta.pilot": "Pilot",
      "calculator.meta.pilot-value": "Capped at 50 members",
      "calculator.meta.default": "Default",
      "calculator.meta.default-value": "S/. 20/mo · 7–10am",
      "calculator.meta.cost": "Verified cost",
      "calculator.meta.cost-value": "S/. 1.20–1.80/cup (own roastery)",
      "calculator.presets.label": "Quick scenarios:",
      "calculator.preset.conservative": "Conservative",
      "calculator.preset.default": "Default (recommended)",
      "calculator.preset.optimistic": "Optimistic",
      "calculator.action.reset": "Reset",
      "calculator.inputs.title": "Edit the inputs",
      "calculator.inputs.subtitle":
        "Drag sliders or type values. Everything recalculates instantly.",
      "calculator.field.subPrice.label": "Subscription price (monthly)",
      "calculator.field.subPrice.hint":
        "The price a subscriber pays per month. Pilot price is S/. 20 — high enough to signal commitment, low enough to look obvious next to a S/. 12 cappuccino.",
      "calculator.field.costPerCup.label": "Marginal cost per cup",
      "calculator.field.costPerCup.hint":
        "Bean + water + energy + cup. Own-roastery benchmark S/. 1.20–1.80; specialty cafés that buy roasted wholesale typically sit at S/. 2.50–3.50 — that gap is the whole reason the subscription works at Ursa and would not work at most competitors.",
      "calculator.field.visitsWeek.label": "Visits per week",
      "calculator.field.visitsWeek.hint":
        "How often a subscriber comes in during the 7–10am window. Two-and-a-half visits a week is the conservative read on the morning-regular persona from Module 04.",
      "calculator.field.cupsVisit.label": "Cups per visit",
      "calculator.field.cupsVisit.hint":
        "Capped at one in the pilot. A second cup in the same visit doubles marginal cost without changing the price the subscriber pays — the most common way an unlimited-coffee offer quietly bleeds.",
      "calculator.field.attachRate.label": "Side attach rate",
      "calculator.field.attachRate.hint":
        "Percentage of visits where the subscriber also buys a cookie, financier, or empanada. This is the lever that makes the model work; the cutoff card below shows the minimum it has to hit.",
      "calculator.field.sideMargin.label": "Side margin (per attach)",
      "calculator.field.sideMargin.hint":
        "Profit margin on the accompanying food item, not revenue. A S/. 5 cookie at S/. 1.5 cost contributes S/. 3.5 — that is the number that matters here.",
      "calculator.field.cannibal.label": "Cannibalization rate",
      "calculator.field.cannibal.hint":
        "Percentage of subscribers who would have paid full price anyway. The biggest risk in the model. The blended card below shows what the profit looks like after this drag.",
      "calculator.field.avgSpendPre.label": "Avg. pre-subscription spend",
      "calculator.field.avgSpendPre.hint":
        "What a cannibalized customer used to spend per visit, before subscribing. Used only inside the cannibalization adjustment — does not affect the marginal-cost math.",
      "calculator.callout.side.title":
        "The side attach rate is the lever, not a happy accident",
      "calculator.callout.side.body":
        "Unlimited-coffee subscriptions are profitable at the marginal-cost line because Ursa roasts its own beans — but only just. The cushion that turns a thin margin into a real one comes from the side item sold alongside each visit. The café should actively push pairings — cookie, financier de pera, empanada, seasonal pastry — through pairing cards at the till, a bear-recommends prompt from the barista, and a visible morning pastry case. The alternative — raising the subscription price to S/. 25 instead — works on paper but shrinks the addressable base; the same customer who hesitates at S/. 25 will sign at S/. 20 if the pastry case does its job. The limitation: food cost also erodes with volume; re-check the side margin against supplier invoices before scaling beyond 50 subscribers.",
      "calculator.outputs.profit.label":
        "Net profit per subscriber / month",
      "calculator.outputs.profit.body-positive":
        "Profitable at these assumptions, before the cannibalization adjustment. The cannibalization card below is the one that decides whether the pilot graduates.",
      "calculator.outputs.profit.body-negative":
        "Not profitable at these assumptions. Three levers, in order of leverage: raise the attach rate (push sides harder), raise the price, or lower the marginal cost by re-checking the roast yield. Do not lower the price.",
      "calculator.metric.visits": "Visits / month",
      "calculator.metric.cups": "Cups / month",
      "calculator.metric.coffee-cost": "Coffee cost / month",
      "calculator.metric.side-margin": "Side margin / month",
      "calculator.metric.breakeven": "Break-even (no sides)",
      "calculator.metric.free-capacity": "Free-cup capacity",
      "calculator.cutoff.title":
        "Minimum attach rate to break even",
      "calculator.cutoff.body-above":
        "You are {delta} points above the break-even attach rate. Headroom is healthy — use it to absorb an off-week rather than to slack on the pairing prompt.",
      "calculator.cutoff.body-below":
        "You are {delta} points below break-even. The math says: either push the attach rate up by retraining the barista to suggest one specific pairing per drink, or raise the price by S/. 2. Cost-cutting alone will not close this gap.",
      "calculator.cutoff.body-na":
        "Cannot compute — set a side margin and a visit frequency first.",
      "calculator.cannibal.title": "Cannibalization-adjusted profit",
      "calculator.cannibal.subtitle":
        "per subscriber / month, blended",
      "calculator.cannibal.body-positive":
        "Even after replacing {cannibal}% of full-price visits with subscription visits at a lower margin, the blended profit stays positive. The pilot can graduate if this holds for 60 days.",
      "calculator.cannibal.body-negative":
        "At {cannibal}% cannibalization the blended profit is negative. Two levers, in order of preference: target new customers (the morning-regular who has not yet adopted Ursa), or raise the price by S/. 2–3. Cutting cannibalization by avoiding existing regulars is the wrong move — they are the most likely advocates, and the subscription is meant to deepen their relationship, not to discount it.",
      "calculator.cannibal.recovery-label": "Recovery time",
      "calculator.cannibal.recovery-already": "Already positive",
      "calculator.cannibal.recovery-never": "Never — kill the pilot",
      "calculator.tabs.badge": "Deeper analysis",
      "calculator.tabs.title":
        "Sensitivity, scale, and the honest assumptions",
      "calculator.tab.sensitivity": "Sensitivity table",
      "calculator.tab.scale": "Scale projection",
      "calculator.tab.assumptions": "Honest assumptions",
      "calculator.tab.sides": "Side-pushing playbook",
      "calculator.sensitivity.intro":
        "Net profit per subscriber/month across visit frequency (rows) and side attach rate (columns). The highlighted cell is your current scenario. Read down a column to see how profit scales with frequency; read across a row to see how it scales with attach. If the green band is wide — most of the table is profitable — the pilot is robust to mis-estimation. If the green band is narrow, the pilot is fragile: a 10-point miss on attach rate or a half-visit miss on frequency flips it red.",
      "calculator.sensitivity.col-visits":
        "Visits/wk ↓ / Attach →",
      "calculator.scale.intro":
        "Blended monthly profit (cannibalization-adjusted) as the subscriber base grows. The pilot is capped at 50 — not because 50 is the ceiling of demand, but because below 50 the cannibalization rate can be measured honestly, and above it the number is too smoothed to read. Scaling before 50 is a vote of confidence in a number you have not yet measured.",
      "calculator.scale.label-pilot": "pilot",
      "calculator.scale.label-subs": "subs",
      "calculator.scale.label-cups": "cups/mo",
      "calculator.assumptions.verified.title": "What we verified",
      "calculator.assumptions.verified.1":
        "Own-roastery keeps marginal cost at S/. 1.20–1.80/cup — the specialty-café benchmark for cafés that buy roasted wholesale is S/. 2.50–3.50, and that gap is the entire reason the subscription works at Ursa and would not work at most competitors.",
      "calculator.assumptions.verified.2":
        "The 7–10am window is the morning-regular slot in Miraflores — the same persona Module 04 identified as Ursa's most defensible audience. The window is narrow on purpose: it scopes the offer to the use case the bear can own.",
      "calculator.assumptions.verified.3":
        "Side items (cookies, financier de pera, empanada) already exist in-house — no new SKU, no new supplier, no new training. The pilot is a pricing and packaging change, not a menu change.",
      "calculator.assumptions.verified.4":
        "Subscription models are consistent with Lima café willingness-to-pay — CoffeePass ran a comparable model in Lima through 2022–24 and demonstrated demand at a similar price point. Demand is verified; Ursa-specific demand is what the pilot measures.",
      "calculator.assumptions.assumed.title":
        "What we assumed (and you should test)",
      "calculator.assumptions.assumed.1":
        "Side attach rate of 50–70% is achievable with active prompting. Industry studies of unlimited-coffee subscriptions in comparable markets report 30–55% attach without prompting and 55–75% with — but Ursa's specific number is unverified. Test in pilot.",
      "calculator.assumptions.assumed.2":
        "Cannibalization of 20–40% is typical for subscription products that target existing regulars. If marketing accidentally over-indexes on existing regulars (the warm list), this could climb to 50%+. Track sign-up source.",
      "calculator.assumptions.assumed.3":
        "One-cup-per-visit cap is intended to be enforceable without alienating subscribers — verify against the first 20 sign-ups. If enforcement requires a confrontation, the cap is wrong, not the subscriber.",
      "calculator.assumptions.assumed.4":
        "Marginal cost is assumed to stay at S/. 1.20–1.80 as volume rises, on the assumption that the roastery has spare capacity. Confirm against roast logs at month two — if the roastery is buying more green to meet subscription demand, the marginal cost climbs and the model needs to be re-run.",
      "calculator.assumptions.stop.title": "Stop rule",
      "calculator.assumptions.stop.body":
        "Kill or revise the pilot if blended profit per subscriber stays below zero after 60 days, or if cannibalization exceeds 50%, or if side attach rate stays below 40% despite active prompting after 30 days. Document the result either way — a killed pilot with a documented reason is more valuable than a quietly-fading one. The 50-subscriber cap exists so that killing the pilot costs less than S/. 1,000 in forgone profit and four weeks of attention.",
      "calculator.assumptions.not-assumed.title":
        "What we deliberately did not assume",
      "calculator.assumptions.not-assumed.1":
        "No invented exact ingredient costs — use the scenario ranges, not a single point estimate, until roast logs supply the actual number.",
      "calculator.assumptions.not-assumed.2":
        "No guaranteed subscriber count — the pilot is capped at 50 to learn cheaply. Pretending the demand is known is the most common reason subscription launches misallocate marketing spend.",
      "calculator.assumptions.not-assumed.3":
        "No virality assumption — the subscription is promoted through existing channels (WhatsApp, in-store, Instagram bio) first. A viral Reel that brings 200 sign-ups in week one would force an early scale decision the pilot is designed to defer.",
      "calculator.sides.title":
        "How to push sides without being pushy",
      "calculator.sides.counter-title": "At the counter",
      "calculator.sides.counter.1":
        "«Bear recommends» pairing card on the till — e.g. Ursagroni + financier de pera. Specific, not generic; one pairing per drink, not a list.",
      "calculator.sides.counter.2":
        "Visible morning pastry case at eye level, lit warm. The case is a marketing surface, not a storage unit.",
      "calculator.sides.counter.3":
        "Barista trained to offer one specific pairing, not «would you like anything else?». Specificity is what makes the prompt land; vagueness is what makes it feel like an upsell.",
      "calculator.sides.counter.4":
        "A S/. 2 add-on price for subscribers, anchored against the S/. 8 retail price. The subscriber feels the discount; the café books the margin.",
      "calculator.sides.online-title":
        "On the app / Rappi / WhatsApp",
      "calculator.sides.online.1":
        "A pre-selected «morning bundle» that defaults to coffee + a side. Defaults are how subscriptions earn their margin; opt-out beats opt-in.",
      "calculator.sides.online.2":
        "A weekly rotating «bear's pick» that creates novelty. Novelty is the retention mechanism — the subscriber comes for the ritual, returns for the surprise.",
      "calculator.sides.online.3":
        "A stamp card: 10 sides bought = 1 free side. Retention without discounting the coffee — the discount lands on the side, where margin elasticity is higher.",
      "calculator.sides.principle.title": "The principle",
      "calculator.sides.principle.body":
        "Do not discount the coffee — discounting erodes the specialty perception that justifies the S/. 20 price. Discount or bundle the sides, which have higher margin elasticity and reinforce the morning-ritual story. The subscription makes the coffee feel free; the sides are where the relationship and the margin actually live. The bear is on the cup, the profit is on the plate.",
      "calculator.stat.profit":
        "Net profit / subscriber / month (current inputs)",
      "calculator.stat.cutoff": "Break-even side attach rate",
      "calculator.stat.capacity": "Free cups the margin can absorb",
      "calculator.stat.recovery": "Cannibalization recovery time",
      "calculator.stat.recovery-kill": "kill",
      "calculator.footer.body":
        "This calculator is a decision-support tool, not a financial guarantee. Marginal cost per cup depends on roast yield, milk usage, and waste; verify against Ursa's actual roast logs before scaling. Virality and subscriber growth are not assumed — the pilot is designed to measure them. The model is honest about what it does not know; the recommendation is to act on the side of the model that survives the worst-case cell in the sensitivity table.",

      /* Calculator · offer-value lens (Hormozi) callout */
      "calculator.lens.badge": "Offer-value lens",
      "calculator.lens.title": "What this calculator is actually testing",
      "calculator.lens.body":
        "In the offer-value lens, this calculator is checking two of the eight questions before the pilot ships: Likelihood (will subscribers visit often enough to break even on the S/. 20 price?) and Delay (does the perceived value land within the first month, before churn sets in?). The risk-reversal question — what happens if a subscriber cancels mid-month? — is answered operationally, not numerically: the bear refunds pro-rata, no questions, and the pilot cap of 50 means the worst-case downside is bounded and visible. The Effort question is answered by the landing page: one WhatsApp message to join, one paw stamp per visit, no app.",

      /* ---- Menu Studio (Extra Tool T1) ---- */
      "menu-studio.lede":
        "An interactive menu builder for the question every café owner avoids: which items are earning their shelf space, and which are quietly leaking margin? Edit names, descriptions, prices, costs, prep burden, popularity (1-5) and attach rates across every item; watch the café-card preview, category dashboard, transparent calculations, psychology hypotheses and Stars & Puzzles classification update live. The techniques presented here are testable hypotheses — not universal laws. Every number is editable; nothing here is invented, only structured. The point is not a perfect model of the menu; the point is a fast read on which lever to pull next.",
      "menu-studio.meta.default": "Default menu",
      "menu-studio.meta.default-value": "12 Ursa items pre-loaded",
      "menu-studio.meta.thresholds": "Margin thresholds",
      "menu-studio.meta.thresholds-value": "> 65% healthy · 55–65% watch · < 55% leak",
      "menu-studio.meta.outputs": "Outputs",
      "menu-studio.meta.outputs-value": "Template · preview · calcs · psych · matrix · export",

      /* Section 01 — Live metrics */
      "menu-studio.section.01.badge": "Section 01",
      "menu-studio.section.01.title": "Live menu metrics",
      "menu-studio.section.01.meta": "Updates as you edit",
      "menu-studio.stat.count": "Items on the menu",
      "menu-studio.stat.range": "Menu price range (PEN)",
      "menu-studio.stat.avg-price": "Average menu price",
      "menu-studio.stat.avg-margin": "Average margin %",
      "menu-studio.avg-margin.title": "Average margin progress",
      "menu-studio.avg-margin.body":
        "Specialty-coffee industry rule of thumb: blended menu margin should sit above 65% — the level at which a café can absorb a 10% cost shock without re-pricing. Below 55% the menu leaks margin even when ticket size looks healthy; a single supplier price increase becomes a crisis. The thresholds are convention, not law; Ursa's actual break-even sits wherever Ursa's actual fixed costs sit.",
      "menu-studio.avg-margin.threshold-leak": "55% threshold",
      "menu-studio.avg-margin.threshold-healthy": "65% healthy",
      "menu-studio.popularity.title": "Average popularity & attach",
      "menu-studio.popularity.subtitle":
        "of 5 — your honest read on demand",
      "menu-studio.popularity.attach-avg": "Avg attach",
      "menu-studio.popularity.body":
        "Popularity is your honest read on whether the item moves — not a forecast, not a wish. The 1-5 score drives the Stars & Puzzles matrix (a score of 3 or higher counts as «popular»). The attach rate is the % of customers who add the item as a side; the higher the average, the more cross-sell potential lives in the current menu. Both numbers are editable per item in the template below.",
      "menu-studio.prep.title": "Total prep time & category mix",
      "menu-studio.prep.subtitle":
        "sum of barista minutes per full round",
      "menu-studio.prep.body":
        "Total prep time is the sum of barista minutes if every item were ordered once — a rough proxy for the labour ceiling. If a real rush hour produces 30 drink tickets, multiply the average prep time by 30 and divide by the number of baristas on shift: that is the minute-count you actually have to deliver.",

      /* Section 02 — Editable menu template + live preview */
      "menu-studio.section.02.badge": "Section 02",
      "menu-studio.section.02.title":
        "Editable menu template — your café card",
      "menu-studio.section.02.meta":
        "Inline edit · live preview on the right",
      "menu-studio.section.02.intro":
        "Edit name, category, customer-facing description, price (PEN), cost (PEN), prep burden (min), popularity (1-5), attach rate, recommended badge, and pairings for each item. The right-hand card is the live preview — exactly what a customer would see on a printed menu. Edit on the left, see it reflected on the right, in real time. The template is the wow factor: every field is editable, every number is transparent, every change is honest.",
      "menu-studio.section.02.button.add": "Add item",
      "menu-studio.section.02.empty":
        "No items yet. Click Add item to start.",
      "menu-studio.section.02.footer":
        "Default items are anchored to the verified Ursa menu (Ursagroni, Maracumango Coldbrew, Filtrado Lonya) plus a reconstructed espresso bar and pastry case. Costs are plausible benchmarks for a Lima specialty café — replace them with your actual roast logs and supplier invoices before quoting prices or making a kill decision.",
      "menu-studio.template.new-item-name": "New item",
      "menu-studio.template.field.name": "Item name",
      "menu-studio.template.field.description": "Customer-facing description",
      "menu-studio.template.field.description-placeholder":
        "Add a description that sells the item — sensory, brief, true.",
      "menu-studio.template.field.price": "Price (PEN)",
      "menu-studio.template.field.cost": "Cost (PEN)",
      "menu-studio.template.field.prep": "Prep (min)",
      "menu-studio.template.field.popularity": "Popularity (1-5)",
      "menu-studio.template.field.attach-rate": "Attach %",
      "menu-studio.template.field.recommended": "Recommended",
      "menu-studio.template.field.pairings": "Pair with",
      "menu-studio.template.field.remove": "Remove {name}",
      "menu-studio.template.margin-label": "Margin",
      "menu-studio.template.pairings-collapse": "Hide pairings",
      "menu-studio.template.pairings-expand": "Edit pairings",
      "menu-studio.template.pairings-empty":
        "No pairings yet — click Edit pairings.",
      "menu-studio.template.pairings-remove": "Remove pairing with {name}",
      "menu-studio.template.pairings-no-others":
        "Add another item to enable pairings.",
      "menu-studio.preview.title": "Live preview",
      "menu-studio.preview.meta": "Updates as you type",
      "menu-studio.preview.intro":
        "What the customer sees. Recommended items carry a star marker; pairings print as «Pairs with». The dotted leaders and Art Nouveau dividers are part of the Ursa visual identity — do not strip them when porting this card to print.",
      "menu-studio.preview.header-brand": "URSA COFFEE ROASTERS",
      "menu-studio.preview.header-tagline":
        "Un gramo a la vez · Miraflores, Lima",
      "menu-studio.preview.header-menu-title": "Carta",
      "menu-studio.preview.recommended-badge": "Recommended",
      "menu-studio.preview.pairings-label": "Pairs with",
      "menu-studio.preview.footer-note":
        "Prices in PEN · IGV included",
      "menu-studio.preview.empty":
        "Add items on the left to see the menu preview.",

      /* Section 03 — Transparent calculations */
      "menu-studio.section.03.badge": "Section 03",
      "menu-studio.section.03.title":
        "Transparent calculations — every column in the open",
      "menu-studio.section.03.meta":
        "Sortable · no hidden formula",
      "menu-studio.section.03.intro":
        "For each item: price, cost, contribution margin in PEN and %, popularity (1-5), prep burden in minutes, attach rate, the Kasavana & Smith 1982 classification (Star / Plowhorse / Puzzle / Dog), and the pairing suggestions you configured in the template. Nothing here is computed off-menu or behind a paywall — every cell derives live from the editable fields above. Sort by any column to find the lever you are looking for: highest margin, lowest popularity, longest prep, weakest attach.",
      "menu-studio.section.03.empty":
        "Add items above to see calculations.",
      "menu-studio.section.03.legend-healthy":
        "Healthy · > 65% margin",
      "menu-studio.section.03.legend-watch":
        "Watch · 55–65% margin",
      "menu-studio.section.03.legend-leak":
        "Leak · < 55% margin",
      "menu-studio.section.03.footer":
        "Margin % = (price − cost) ÷ price. Classification uses a 55% margin threshold and a 3/5 popularity threshold — both editable upstream in the template. The «popular» boolean of the old menu builder has been replaced by a 1-5 score for finer resolution: a 2/5 Plowhorse and a 5/5 Plowhorse are not the same animal.",
      "menu-studio.calc.column.item": "Item",
      "menu-studio.calc.column.price": "Price",
      "menu-studio.calc.column.cost": "Cost",
      "menu-studio.calc.column.margin-pen": "Margin (PEN)",
      "menu-studio.calc.column.margin-pct": "Margin %",
      "menu-studio.calc.column.popularity": "Popularity",
      "menu-studio.calc.column.prep": "Prep (min)",
      "menu-studio.calc.column.attach": "Attach %",
      "menu-studio.calc.column.classification": "Class",
      "menu-studio.calc.column.pairings": "Pairings",
      "menu-studio.calc.pairings-none": "—",

      /* Section 04 — Category performance dashboard */
      "menu-studio.section.04.badge": "Section 04",
      "menu-studio.section.04.title":
        "Category performance dashboard",
      "menu-studio.section.04.meta":
        "Aggregates per category",
      "menu-studio.section.04.intro":
        "Average margin, average popularity, average prep burden, and average attach rate per category. The dashboard answers the question the category-level view hides: which category is carrying the menu, and which one is dragging it. A category with high margin but low attach is a cross-sell opportunity; a category with high popularity but low margin is a cost-engineering target.",
      "menu-studio.section.04.empty":
        "No categories with items yet.",
      "menu-studio.section.04.footer":
        "Categories with fewer than 2 items have unstable averages — treat them as directional, not statistical. The dashboard is most useful when the menu has 10+ items across 4+ categories; below that, the per-item view in Section 03 is more honest.",
      "menu-studio.category.column.category": "Category",
      "menu-studio.category.column.items": "Items",
      "menu-studio.category.column.avg-margin": "Avg margin %",
      "menu-studio.category.column.avg-popularity": "Avg popularity",
      "menu-studio.category.column.avg-prep": "Avg prep (min)",
      "menu-studio.category.column.avg-attach": "Avg attach %",

      /* Category labels (display) */
      "menu-studio.category.espresso": "Espresso",
      "menu-studio.category.coldbrew": "Coldbrew",
      "menu-studio.category.filtrado": "Filtrado",
      "menu-studio.category.cocktail": "Coffee cocktail",
      "menu-studio.category.pastry": "Pastry",
      "menu-studio.category.savory": "Savory",
      "menu-studio.category.non-coffee": "Non-coffee",

      /* Section 05 — Psychology-backed design techniques */
      "menu-studio.section.05.badge": "Section 05",
      "menu-studio.section.05.title":
        "Psychology-backed design — as testable hypotheses",
      "menu-studio.section.05.meta":
        "Evidence · mechanism · ethics · measurement · stop rule",
      "menu-studio.section.05.intro":
        "Eight techniques drawn from the behavioural-economics and menu-engineering literature. Each is presented as a hypothesis with an evidence-strength rating (strong / moderate / weak / mixed), the commercial mechanism that drives it, the ethical risk it carries, a concrete measurement plan at Ursa, and a stop condition that says when to kill it. None of these is a universal law — the only way to know if a technique works in your café is to test it on your customers.",
      "menu-studio.section.05.disclaimer-title":
        "These are hypotheses, not laws",
      "menu-studio.section.05.disclaimer":
        "The evidence ratings reflect the strength of the published research, not the certainty of the effect in your café. A technique rated «strong» has been replicated across multiple contexts and study designs; «mixed» means studies disagree, usually because the effect is context-dependent. Treat every technique as a hypothesis your menu can falsify in 30 days of measurement. If the lift is not there, kill it — no amount of published evidence obliges you to keep a technique that does not work for your customers.",
      "menu-studio.psych.evidence-label": "Evidence strength",
      "menu-studio.psych.mechanism-label": "Commercial mechanism",
      "menu-studio.psych.ethical-risk-label": "Ethical risk",
      "menu-studio.psych.measurement-label": "Measurement plan at Ursa",
      "menu-studio.psych.stop-condition-label": "Stop condition",
      "menu-studio.psych.citation-label": "Source",
      "menu-studio.psych.evidence.strong": "Strong",
      "menu-studio.psych.evidence.moderate": "Moderate",
      "menu-studio.psych.evidence.weak": "Weak",
      "menu-studio.psych.evidence.mixed": "Mixed",

      "menu-studio.psych.technique.star-markers.title":
        "Star markers on high-margin items",
      "menu-studio.psych.technique.star-markers.mechanism":
        "Visual salience directs the eye; a star signals editorial endorsement and reduces decision friction for the uncertain customer. The marker works by lowering the cognitive cost of choice, not by changing the underlying preference.",
      "menu-studio.psych.technique.star-markers.ethical-risk":
        "Low when the marker is honest — high-margin AND high-quality. Becomes manipulation when used to push items the owner would not drink themselves. The line is the honesty of the recommendation.",
      "menu-studio.psych.technique.star-markers.measurement":
        "A/B test on a 4-week rotation: half the printed menus carry the star on the Ursagroni, half do not. Track units of Ursagroni sold per 100 covers in each condition.",
      "menu-studio.psych.technique.star-markers.stop-condition":
        "If lift is < 5% after 4 weeks, kill the marker — it adds visual noise without commercial effect. The technique is context-dependent; the literature reports both positive and null results.",
      "menu-studio.psych.technique.star-markers.citation":
        "Yang et al. 2009 (positive); Carpenter 2018 (no effect).",

      "menu-studio.psych.technique.menu-ordering.title":
        "Menu ordering (primacy vs recency)",
      "menu-studio.psych.technique.menu-ordering.mechanism":
        "Items at the top and bottom of a list draw more attention than the middle. The exact direction (primacy vs recency) depends on menu length, reading pattern, and whether the menu is printed or digital.",
      "menu-studio.psych.technique.menu-ordering.ethical-risk":
        "Low. Reordering is invisible to the customer. The risk is using the prime slot for a low-quality high-margin item — the customer who follows the suggestion once and is disappointed will not follow it again.",
      "menu-studio.psych.technique.menu-ordering.measurement":
        "Move a Puzzle item (high margin, low popularity) to the top slot of its category for 30 days. Track units sold per 100 covers before and after.",
      "menu-studio.psych.technique.menu-ordering.stop-condition":
        "If the move does not lift units by at least 20% after 30 days, restore the original order — the primacy effect is not present in your menu context.",
      "menu-studio.psych.technique.menu-ordering.citation":
        "Dayan & Bar-Hillel 2011 (primacy); Bowen & McCarthy 2019 (recency in digital menus).",

      "menu-studio.psych.technique.descriptive-names.title":
        "Descriptive item names",
      "menu-studio.psych.technique.descriptive-names.mechanism":
        "Sensory and provenance language («Slow-braised beef, ají amarillo, olives» vs «Beef empanada») triggers mental simulation, raises perceived value, and improves post-meal ratings of the same dish.",
      "menu-studio.psych.technique.descriptive-names.ethical-risk":
        "Low if the description is true. High if it overclaims — a customer who orders «slow-braised» and tastes boiled beef will not return, and they will tell two friends.",
      "menu-studio.psych.technique.descriptive-names.measurement":
        "Rewrite 3 item descriptions per week. Track sales of those items vs a 4-week baseline, and ask the bar staff to note any unprompted customer comments about the descriptions.",
      "menu-studio.psych.technique.descriptive-names.stop-condition":
        "If sales do not lift by ≥ 10% after 3 weeks, the original description was already good — restore it. The technique is strong in the literature but ceilings exist; not every item benefits from more words.",
      "menu-studio.psych.technique.descriptive-names.citation":
        "Wansink, Painter & North 2005 (27% sales lift, improved post-meal ratings).",

      "menu-studio.psych.technique.price-anchoring.title":
        "Price anchoring",
      "menu-studio.psych.technique.price-anchoring.mechanism":
        "Placing a high-priced item at the top of a category makes the items below it feel reasonable by comparison. The anchor does not need to sell — it needs to be visible. The mechanism is contrast: the customer's perception of price is relative, not absolute.",
      "menu-studio.psych.technique.price-anchoring.ethical-risk":
        "Moderate. The anchor must be a real item that can be ordered. A fake anchor — a «Reserve» tier that is never in stock — erodes trust the first time a customer asks for it and is told no.",
      "menu-studio.psych.technique.price-anchoring.measurement":
        "Add a S/. 22 reserve pour-over at the top of the Filtrado section for 30 days. Track units of the S/. 14 Filtrado Lonya below it, and units of the anchor itself.",
      "menu-studio.psych.technique.price-anchoring.stop-condition":
        "If the anchor sells zero units in 30 days AND the items below do not lift, remove the anchor — it is visual clutter without commercial effect. If the anchor itself starts selling, promote it to a real item, not a decoy.",
      "menu-studio.psych.technique.price-anchoring.citation":
        "Ariely 2008 (Predictably Irrational); Poundstone 2010 (Priceless).",

      "menu-studio.psych.technique.decoy-pricing.title":
        "Decoy pricing",
      "menu-studio.psych.technique.decoy-pricing.mechanism":
        "A third option priced to make one of two existing options look better. Classic example: medium coffee S/. 8, large S/. 12, decoy small S/. 7 — the small makes the medium look generous. The decoy works by asymmetric dominance: it is worse on every dimension than one of the alternatives.",
      "menu-studio.psych.technique.decoy-pricing.ethical-risk":
        "High. Decoys are explicitly designed to manipulate choice. Use them only when the «winning» option is genuinely the best for the customer (e.g., a size that minimises waste, or a configuration the barista would actually recommend). Never deploy a decoy whose victory harms the customer.",
      "menu-studio.psych.technique.decoy-pricing.measurement":
        "Introduce a decoy size for one drink for 30 days. Track the mix of sizes sold, and the average ticket for that drink.",
      "menu-studio.psych.technique.decoy-pricing.stop-condition":
        "If the decoy itself sells more than 5% of the time, it is not a decoy — it is a real option. Either keep it as a real option or kill it. If the mix does not shift toward the «winning» option, the decoy has failed.",
      "menu-studio.psych.technique.decoy-pricing.citation":
        "Huber, Payne & Puto 1982 (asymmetric dominance).",

      "menu-studio.psych.technique.pairing-suggestions.title":
        "Pairing suggestions",
      "menu-studio.psych.technique.pairing-suggestions.mechanism":
        "Naming a specific companion item («Pairs with: Financier de Pera») plants a cross-sell seed in the customer's mind without requiring barista prompting. The mechanism is priming: the suggestion makes the pairing more available in the customer's choice set.",
      "menu-studio.psych.technique.pairing-suggestions.ethical-risk":
        "Low when the pairing is genuinely complementary — flavours that actually work together. The risk is suggesting pairings that do not taste good together; the customer who follows the suggestion once and is disappointed will not follow it again.",
      "menu-studio.psych.technique.pairing-suggestions.measurement":
        "Add pairing suggestions to 4 items for 30 days. Track attach rate of the suggested side before and after, controlling for day-of-week and weather (both move pastry attach).",
      "menu-studio.psych.technique.pairing-suggestions.stop-condition":
        "If attach does not lift by ≥ 5 percentage points after 30 days, remove the suggestions — they add reading burden without lift. The technique works in chains with high traffic; Ursa's traffic may be too low to detect a 5-point lift in 30 days.",
      "menu-studio.psych.technique.pairing-suggestions.citation":
        "Housedris & Kuo 2021 (cross-sell lifts ticket 15-20%).",

      "menu-studio.psych.technique.bundle-offers.title":
        "Bundle offers",
      "menu-studio.psych.technique.bundle-offers.mechanism":
        "A small discount on a fixed bundle («Cappuccino + Cookie — S/. 13, save S/. 2») lowers the decision cost and lifts average ticket. The bundle price anchors the customer to buying both; the standalone prices become the reference point against which the bundle looks like a deal.",
      "menu-studio.psych.technique.bundle-offers.ethical-risk":
        "Low when the bundle price is genuinely a small discount. A bundle that requires buying an unwanted item is a dark pattern — the customer who wanted only the coffee ends up paying for a cookie they did not eat.",
      "menu-studio.psych.technique.bundle-offers.measurement":
        "Offer a Cappuccino + Cookie bundle for 30 days at S/. 13 (vs S/. 15 separate). Track bundle uptake vs standalone cookie attach, and total cookie units sold (bundle + standalone).",
      "menu-studio.psych.technique.bundle-offers.stop-condition":
        "If bundle revenue is less than standalone revenue would have been, kill the bundle — the discount is not paying for itself. If total cookie units rise but blended margin falls, the bundle is cannibalising full-price sales.",
      "menu-studio.psych.technique.bundle-offers.citation":
        "Yadav 1994 (bundle evaluation); Stremersch & Tellis 2002 (meta-analysis).",

      "menu-studio.psych.technique.font-hierarchy.title":
        "Font weight and size hierarchy",
      "menu-studio.psych.technique.font-hierarchy.mechanism":
        "Item names in heavier weight / larger size signal importance and direct the reading sequence. Price in a lighter weight reduces price sensitivity by lowering the visual salience of the cost. The mechanism is attention: the eye follows the heaviest stroke first.",
      "menu-studio.psych.technique.font-hierarchy.ethical-risk":
        "Low. Visual hierarchy is a design tool, not a manipulation. The risk is making prices invisible — that creates post-order surprise and erodes trust. Prices should always be legible; just not the loudest element on the page.",
      "menu-studio.psych.technique.font-hierarchy.measurement":
        "A/B test on a 4-week rotation: half the printed menus use the heavier-weight hierarchy in this preview, half use uniform weight across name and price. Track selection of the heaviest-weighted items.",
      "menu-studio.psych.technique.font-hierarchy.stop-condition":
        "If selection does not shift toward the heavier-weighted items after 4 weeks, restore uniform weight — the hierarchy is invisible to your customers. The evidence base is the oldest and weakest of the eight techniques; treat it as decorative until your measurement says otherwise.",
      "menu-studio.psych.technique.font-hierarchy.citation":
        "Carmin & Norkus 1990 (menu pricing perception).",

      /* Section 06 — Attach-rate modeler */
      "menu-studio.section.06.badge": "Section 06",
      "menu-studio.section.06.title": "Attach-rate modeler",
      "menu-studio.section.06.meta": "Turn a drink into a ticket",
      "menu-studio.attach.title": "Configure the pairing",
      "menu-studio.attach.primary": "Primary drink",
      "menu-studio.attach.side": "Side / pairing item",
      "menu-studio.attach.volume": "Primary volume (units sold)",
      "menu-studio.attach.rate":
        "Attach rate (% of primary buyers who add the side)",
      "menu-studio.attach.scale-0": "0% · pure drink",
      "menu-studio.attach.scale-60": "60% · Ursa Mañana target",
      "menu-studio.attach.scale-100": "100% · always paired",
      "menu-studio.attach.callout.title": "Why this matters",
      "menu-studio.attach.callout.body":
        "A S/. 18 Ursagroni at 75% margin looks healthy alone — but the ticket is what pays the rent. If 60% of Ursagroni buyers also add a S/. 5 cookie (margin S/. 3.5), every 100 Ursagronis becomes an extra S/. 210 in margin. The attach rate is the single biggest lever on blended profitability; the alternative — raising the drink price — works on paper but compresses demand. Push attach first; raise price only if attach does not respond after 30 days of active prompting.",
      "menu-studio.attach.contribution-label":
        "Side-margin contribution",
      "menu-studio.attach.contribution-body":
        "From {sides} sides of {side} sold alongside {volume} {primary} at {rate}% attach.",
      "menu-studio.attach.mini.primary-revenue": "Primary revenue",
      "menu-studio.attach.mini.attach-revenue": "Attach revenue",
      "menu-studio.attach.mini.side-margin": "Side margin / unit",
      "menu-studio.attach.mini.blended": "Blended margin %",
      "menu-studio.attach.composition": "Ticket composition",
      "menu-studio.attach.composition-primary": "Primary",
      "menu-studio.attach.composition-attach": "Attach",

      /* Section 07 — Stars & Puzzles */
      "menu-studio.section.07.badge": "Section 07",
      "menu-studio.section.07.title":
        "Stars & Puzzles — menu engineering matrix",
      "menu-studio.section.07.meta":
        "Popularity ≥ 3/5 counts as high · margin ≥ 55% counts as high",
      "menu-studio.section.07.intro":
        "Classic menu engineering (originally from Menu Engineering: A Practical Guide to Improving Profitability, Kasavana & Smith, 1982). Items are classified by margin (high/low, using the 55% threshold) and popularity (the 1-5 score set in the template; ≥ 3 counts as high). Each quadrant has a distinct action — not a verdict. The framework is appropriate here because Ursa's menu is small (12–15 items) and the decisions are reversible: a Puzzle can be re-platformed without removing it from the menu, a Plowhorse can be re-engineered without losing its popularity. The framework's limitation: it treats margin and popularity as independent, but they are not — a price increase can move an item from Star to Puzzle. Re-run the matrix after any price change.",
      "menu-studio.quadrant.star.label": "Stars",
      "menu-studio.quadrant.star.desc":
        "High margin · high popularity",
      "menu-studio.quadrant.star.action":
        "Feature prominently on the menu and in photography. Train baristas to suggest these by name when a customer asks «what's good?». This is your menu's spine — protect it.",
      "menu-studio.quadrant.puzzle.label": "Puzzles",
      "menu-studio.quadrant.puzzle.desc":
        "High margin · low popularity",
      "menu-studio.quadrant.puzzle.action":
        "The opportunity. Re-name, re-platform (move from the back of the menu to a featured slot), re-pair (suggest alongside a Star). If it still does not move in 30 days, kill it — the margin is real but the demand is not.",
      "menu-studio.quadrant.plowhorse.label": "Plowhorses",
      "menu-studio.quadrant.plowhorse.desc":
        "Low margin · high popularity",
      "menu-studio.quadrant.plowhorse.action":
        "Customers love it. Do not kill it — engineer the cost. Find a cheaper insumo, reduce portion size by 10%, or raise the price by S/. 1. The test is whether popularity survives the change; if it does not, restore the original.",
      "menu-studio.quadrant.dog.label": "Dogs",
      "menu-studio.quadrant.dog.desc":
        "Low margin · low popularity",
      "menu-studio.quadrant.dog.action":
        "Kill it. Or reformulate it as a seasonal special and let scarcity create demand — but only if the reformulation is genuine, not a rebrand of the same item.",
      "menu-studio.quadrant.none": "— none —",
      "menu-studio.matrix.title": "The matrix at a glance",
      "menu-studio.matrix.cell-puzzle": "Puzzle",
      "menu-studio.matrix.cell-star": "Star",
      "menu-studio.matrix.cell-dog": "Dog",
      "menu-studio.matrix.cell-plowhorse": "Plowhorse",
      "menu-studio.matrix.desc-puzzle":
        "High margin · low popularity",
      "menu-studio.matrix.desc-star":
        "High margin · high popularity",
      "menu-studio.matrix.desc-dog":
        "Low margin · low popularity",
      "menu-studio.matrix.desc-plowhorse":
        "Low margin · high popularity",
      "menu-studio.matrix.axis-margin": "Margin →",
      "menu-studio.matrix.axis-popularity": "Popularity →",
      "menu-studio.matrix.axis-high": "High",
      "menu-studio.matrix.axis-low": "Low",
      "menu-studio.matrix.footer":
        "Threshold: margin ≥ 55% counts as high. Popularity is the 1-5 score set in the template — score ≥ 3 counts as high. A 12-item menu should aim for 3–4 Stars, 2–3 Puzzles to promote, 2–3 Plowhorses to re-engineer, and 1–2 Dogs to retire. The distribution matters more than any single classification — a menu with 12 Stars is a menu where the popularity assumption is too generous.",

      /* Section 08 — Export */
      "menu-studio.section.08.badge": "Section 08",
      "menu-studio.section.08.title": "Export the menu summary",
      "menu-studio.section.08.meta": "Copy to clipboard",
      "menu-studio.export.title": "Generate a text snapshot",
      "menu-studio.export.body":
        "A plain-text export of every item, its margin, popularity, prep burden, attach rate, classification, the category dashboard aggregates, the attach-rate projection, and the eight psychology hypotheses. Useful for pasting into a Notion doc, a WhatsApp message to a partner, or a printed prep sheet for the bar. Re-generate after every price or cost change — a stale export is worse than no export.",
      "menu-studio.export.button": "Generate export",
      "menu-studio.export.dialog-title": "Menu export",
      "menu-studio.export.close": "Close",
      "menu-studio.export.copy": "Copy to clipboard",
      "menu-studio.export.copied": "Copied!",
      "menu-studio.export.stat.items": "Items in export",
      "menu-studio.export.stat.margin": "Average margin",
      "menu-studio.export.stat.stars": "Stars on the menu",
      "menu-studio.export.stat.attach":
        "Attach contribution modelled",
      "menu-studio.export.callout.title": "How to read the export",
      "menu-studio.export.callout.body":
        "The export is a snapshot in time — re-generate it whenever you change a price or a cost. Paste it into the next bar-shift briefing, or attach it to the monthly menu review. The numbers are only as honest as the inputs; pair this export with the actual roast logs before any pricing decision. A number that has not been checked against a supplier invoice is a hypothesis, not a fact.",

      /* ---- Budget Allocator (Extra Tool T6) ---- */
      "budget.lede":
        "Three scenarios — Lean, Moderate, Growth — were parameterised in Module 04 so that none of them depends on a number Ursa has not yet measured. Edit any line item, add your own, and the monthly total, per-day cost, and category breakdown recalculate instantly. The decision this tool supports is simple to state and hard to make: pick the scenario the owner can sustain for three months without flinching, then re-evaluate at day 30 against the experiment stop-rules in the Roadmap. The plan is internally coherent at any of the three; the failure mode is choosing Growth and abandoning it in week six.",
      "budget.meta.currency": "Currency",
      "budget.meta.currency-value": "PEN (S/.)",
      "budget.meta.source": "Source",
      "budget.meta.source-value": "Module 04 · verified scenarios",
      "budget.meta.interactive": "Interactive",
      "budget.meta.interactive-value": "Live totals · editable",
      "budget.section.01.badge": "Scenario",
      "budget.section.01.title":
        "Pick a scenario, then edit line items live",
      "budget.section.01.meta":
        "Three pre-populated · fully editable",
      "budget.action.reset": "Reset all",
      "budget.line-items.title": "{name} · line items",
      "budget.line-items.count": "{n} items",
      "budget.line-items.empty":
        "No line items. Add one below.",
      "budget.line-items.add-label":
        "Add a custom line item to {name}",
      "budget.line-items.placeholder":
        "e.g. Influencer trip hosting",
      "budget.line-items.add-button": "Add",
      "budget.total.label": "Live monthly total · {name}",
      "budget.total.per-month": "/ month",
      "budget.total.baseline-label":
        "Original baseline: {baseline} · {delta} vs. baseline",
      "budget.stat.per-day": "Per-day cost · 30-day month",
      "budget.stat.active":
        "Active line items in this scenario",
      "budget.breakdown.title": "Per-day breakdown",
      "budget.breakdown.daily": "Daily cost",
      "budget.breakdown.weekly": "Weekly cost (÷ 4.33)",
      "budget.breakdown.quarterly": "Quarterly cost (× 3)",
      "budget.breakdown.over-title": "You are over baseline",
      "budget.breakdown.over-body":
        "Adding {delta}/mo means {quarterly} over a quarter. Confirm the owner can sustain it before committing — overruns compound faster than underspends.",
      "budget.breakdown.under-title": "You are under baseline",
      "budget.breakdown.under-body":
        "Cutting {delta}/mo saves {quarterly} over a quarter. Make sure no experiment loses its budget — the Lean baseline is a floor, not a target.",
      "budget.section.02.badge": "Allocation",
      "budget.section.02.title":
        "Where the {name} budget goes",
      "budget.section.02.meta": "Category-by-category breakdown",
      "budget.allocation.title": "Spend by line item",
      "budget.allocation.body":
        "Each slice is one line item. Edit the cost above and watch the chart redraw. Slices below 5% of the total are still in the list on the right — small spends compound, and the ranking is where they become visible.",
      "budget.ranked.title": "Ranked by share of total",
      "budget.section.03.badge": "Compare",
      "budget.section.03.title":
        "All three scenarios side by side",
      "budget.section.03.meta": "Lean vs Moderate vs Growth",
      "budget.compare.table-metric": "Metric",
      "budget.compare.row-edited": "Edited monthly total",
      "budget.compare.row-baseline": "Baseline monthly",
      "budget.compare.row-per-day": "Per-day cost",
      "budget.compare.row-items": "Line items",
      "budget.compare.row-focus": "Focus",
      "budget.compare.row-top": "Top item",
      "budget.compare.stat":
        "{name} · edited monthly total",
      "budget.compare.callout.title":
        "The cheap scenario is the real benchmark",
      "budget.compare.callout.body":
        "If the edited Moderate or Growth total creeps past what the owner can sustain for three months, fall back to the Lean edited total. The plan is internally coherent at any of the three — there is no half-Moderate scenario that breaks. The mechanism: every channel in Lean feeds a surface the Moderate channels land on (GBP feeds Maps, WhatsApp feeds the warm list), so spending less does not strand spend already committed. The failure mode is the opposite — choosing Growth and cutting it in week six leaves paid-social campaigns half-primed and creator relationships half-built, which is worse than never starting them.",
      "budget.section.04.badge": "Next step",
      "budget.section.04.title":
        "Once the budget is set, model the return per channel",
      "budget.roi.title": "ROI modelling lives in the ROI Dashboard",
      "budget.roi.body":
        "The Budget Allocator tells you what you spend. The ROI Dashboard turns each channel's spend into expected customers, revenue, payback months, and ROI % — with a confidence slider for best/worst case. Use both together: set the budget here, then validate it there. A budget without a return model is a wish; a return model without a budget is a fantasy.",
      "budget.roi.button-roi": "Open the ROI Dashboard",
      "budget.roi.button-back": "Back to Module 04",
      "budget.roi.limitations-title":
        "What this tool does not do",
      "budget.roi.limitation-1":
        "It does not model revenue or payback — see ROI Dashboard.",
      "budget.roi.limitation-2":
        "It does not persist edits across reloads — this is a scratchpad, not a system of record.",
      "budget.roi.limitation-3":
        "It does not enforce a total cap — set your own discipline. The Lean baseline is a floor, not a ceiling; the Growth scenario is a ceiling, not a target.",

      /* ---- Pilot Dashboard (Extra Tool T12) · Ursa Mañana Pilot Tracker ---- */
      "pilot.lede":
        "This dashboard answers one question: does the Ursa Mañana subscription pay at Ursa's own economics, and at what week does the answer become readable? Twelve weeks is the minimum honest window — short enough to read a verdict before scaling, long enough for the sign-up curve to settle past the launch spike. The default trajectory ramps from 5 to 45 subscribers because that is the volume a one-owner, two-bar Miraflores café can actually serve without breaking the morning shift; the 50-subscriber cap exists so cannibalisation stays observable, not because demand ends there. Edit any input — price, marginal cost, visits per week, side margin, the week-by-week trajectory — and net profit, side attach, and the cannibalisation adjustment recalculate live. The model cannot tell you whether demand will materialise; only what the math looks like if it does.",
      "pilot.meta.pilot": "Pilot",
      "pilot.meta.pilot-value": "12 weeks",
      "pilot.meta.cap": "Cap",
      "pilot.meta.cap-value": "50 subscribers",
      "pilot.meta.stop": "Stop rule",
      "pilot.meta.stop-value": "Net profit < 0 at day 60",

      "pilot.section.01.badge": "Pilot totals",
      "pilot.section.01.title": "12-week projected outcome",
      "pilot.section.01.meta": "Live · recalculates on every input",
      "pilot.stat.net-profit": "Net profit · 12 weeks",
      "pilot.stat.subscribers-w12": "Subscribers at week 12",
      "pilot.stat.sub-revenue": "Subscription revenue collected",
      "pilot.stat.cups-served": "Cups served to subscribers",
      "pilot.verdict.ok": "On track",
      "pilot.verdict.warn": "Marginal — watch the trend",
      "pilot.verdict.stop": "Below break-even — revise",
      "pilot.breakdown.title": "Where the money comes from and goes",
      "pilot.breakdown.sub-label": "% sub",
      "pilot.breakdown.sides-label": "% sides",
      "pilot.breakdown.stat.sub-revenue": "Subscription revenue",
      "pilot.breakdown.stat.side-margin": "Side margin",
      "pilot.breakdown.stat.coffee-cost": "Coffee cost",
      "pilot.breakdown.stat.cannibal-loss": "Cannibalisation loss",

      "pilot.section.02.badge": "Per subscriber",
      "pilot.section.02.title": "The economics of one subscriber",
      "pilot.section.02.meta": "Editable · drives the pilot totals",
      "pilot.inputs.title": "Edit the inputs",
      "pilot.field.sub-price.label": "Subscription price (monthly)",
      "pilot.field.cost-per-cup.label": "Marginal cost per cup",
      "pilot.field.visits-week.label": "Visits per week",
      "pilot.field.side-margin.label": "Side margin per attach",
      "pilot.field.avg-spend-pre.label": "Avg. pre-subscription spend",
      "pilot.outputs.net-profit-label": "Net profit per subscriber / month",
      "pilot.outputs.metric.visits-month": "Visits/month",
      "pilot.outputs.metric.cups-month": "Cups/month",
      "pilot.outputs.metric.coffee-cost": "Coffee cost",
      "pilot.outputs.metric.side-margin": "Side margin",
      "pilot.cannibal.title": "The cannibalisation line",
      "pilot.cannibal.body":
        "At 30% cannibalisation, each subscriber who used to spend S/. {spend} now costs the café {loss} in lost revenue. The pilot must attract new regulars, not just convert existing ones — the cannibalisation number is the test of whether the offer is genuinely additive rather than a re-labelling of existing spend.",

      "pilot.section.03.badge": "Trajectory",
      "pilot.section.03.title": "The 12-week sign-up curve",
      "pilot.section.03.meta": "Edit any week · watch the total move",
      "pilot.trajectory.tooltip": "Week {week}: {n} subscribers",
      "pilot.trajectory.week-label": "W{week}",
      "pilot.table.col.week": "Week",
      "pilot.table.col.subscribers": "Subscribers",
      "pilot.table.col.visits-wk": "Visits/wk",
      "pilot.table.col.side-attach": "Side attach %",
      "pilot.table.col.cannibal": "Cannibal %",
      "pilot.table.col.week-profit": "Week profit",
      "pilot.table.hint":
        "Edit any cell to model a different trajectory. Week profit = sub revenue + side margin − coffee cost + cannibalisation adjustment.",
      "pilot.trajectory.reset": "Reset trajectory",

      "pilot.section.04.badge": "Pilot health",
      "pilot.section.04.title": "Stop rules and signals",
      "pilot.section.04.meta": "Check weekly · kill cleanly if a rule triggers",
      "pilot.stop.1.title": "Stop rule 1",
      "pilot.stop.1.body": "Net profit per subscriber below zero after 60 days.",
      "pilot.stop.2.title": "Stop rule 2",
      "pilot.stop.2.body": "Cannibalisation exceeds 50% of subscribers.",
      "pilot.stop.3.title": "Stop rule 3",
      "pilot.stop.3.body": "Side attach rate below 40% after 30 days.",
      "pilot.stop.label.current": "Current",
      "pilot.stop.label.final-week": "Final week",
      "pilot.health.title": "What a healthy pilot looks like",
      "pilot.health.body":
        "By week 12: 40–50 subscribers, side attach holding ≥ 55%, cannibalisation stabilising around 30–35%, and net profit per subscriber above S/. 15. If those four hold together, the pilot graduates to a permanent channel. If not, document what failed and why — the data is the asset, even if the pilot ends. The 50-subscriber cap exists precisely so this verdict can be read without noise.",

      "pilot.button.calculator": "Open the full calculator",
      "pilot.button.experiments": "View experiment tracker",

      /* ---- Ursa Mañana Business Case (rebuilt Pilot Tool T12) ---- */
      "pilotbiz.lede":
        "This is the full business case for the Ursa Mañana subscription pilot — every cost, every revenue line, every break-even, every sensitivity. Plug in your own roast-log numbers (green bean cost, roast yield, barista minutes per cup, monthly overhead) and the model recomputes net profit per subscriber, break-even subscribers, break-even weeks, the 12-week P&L, the 12-month scale projection, and the decision framework in real time. Nothing is hidden — every output shows its formula. Every assumption cites the science behind it. The goal is not a forecast you believe; it is a model you can argue with, line by line, before you commit a single sol to the pilot.",
      "pilotbiz.meta.pilot": "Pilot",
      "pilotbiz.meta.pilot-value": "12 weeks · capped at 50",
      "pilotbiz.meta.price": "Price",
      "pilotbiz.meta.price-value": "S/. 20 / month",
      "pilotbiz.meta.currency": "Currency",
      "pilotbiz.meta.currency-value": "Peruvian Sol (S/.)",

      "pilotbiz.section.headline.badge": "Headline",
      "pilotbiz.section.headline.title": "The five numbers that decide the pilot",
      "pilotbiz.section.headline.meta": "Live · recalculates on every input",
      "pilotbiz.headline.net-profit": "Net profit / subscriber / month",
      "pilotbiz.headline.contribution": "Contribution margin / cup",
      "pilotbiz.headline.breakeven-subs": "Break-even subscribers",
      "pilotbiz.headline.breakeven-weeks": "Break-even weeks (pilot ramp)",
      "pilotbiz.headline.pilot-net": "12-week pilot net profit",
      "pilotbiz.headline.verdict.ok": "Graduate",
      "pilotbiz.headline.verdict.warn": "Marginal — revise inputs",
      "pilotbiz.headline.verdict.stop": "Below break-even — do not launch",

      "pilotbiz.section.costs.badge": "Section 01 · Cost structure",
      "pilotbiz.section.costs.title": "Plug in your real costs",
      "pilotbiz.section.costs.meta": "From roast logs · supplier invoices · payroll",
      "pilotbiz.costs.subtitle":
        "Every cost here is editable. Defaults are Lima specialty-café benchmarks verified against Module 03; replace each one with the number from your roast log, your milk invoice, your cup supplier, and your payroll before you trust the outputs. The model recomputes on every keystroke.",
      "pilotbiz.cost.field.green-bean.label": "Green bean cost (per kg)",
      "pilotbiz.cost.field.green-bean.hint":
        "From your green-bean invoice. Lima specialty green sits at S/. 30–45/kg landed for washed Cusco/Cajamarca; commodity grade sits below S/. 25. The model divides by roast yield to get roasted cost per gram, then multiplies by dose per cup.",
      "pilotbiz.cost.field.roast-yield.label": "Roast yield (%)",
      "pilotbiz.cost.field.roast-yield.hint":
        "Mass retained after roasting. 1 kg green → ~0.85 kg roasted. Lighter roasts lose more. SCA handbook cites 14–18% loss for specialty filter roasts; Ursa's Lonya/Chanchamayo profile sits around 85%.",
      "pilotbiz.cost.field.dose.label": "Dose per cup (g)",
      "pilotbiz.cost.field.dose.hint":
        "Grams of roasted coffee per cup. 18g for a double espresso, 15g for a V60 pour-over. The subscription caps at one cup per visit; that is the cup this dose refers to.",
      "pilotbiz.cost.field.cup.label": "Cup + lid cost (per unit)",
      "pilotbiz.cost.field.cup.hint":
        "In-store ceramic cups have zero marginal cost (already amortised); the default here is for the to-go option a subscriber occasionally uses. Replace with 0 if the pilot is in-store only and uses ceramic — most of Ursa Mañana is.",
      "pilotbiz.cost.field.barista-wage.label": "Barista wage (per hour)",
      "pilotbiz.cost.field.barista-wage.hint":
        "Loaded hourly cost including social benefits and cesantía. Lima specialty barista: S/. 10–14/hour loaded. Allocated per cup via barista minutes below.",
      "pilotbiz.cost.field.barista-minutes.label": "Barista minutes per cup",
      "pilotbiz.cost.field.barista-minutes.hint":
        "Hands-on time to pull a shot or pour a V60. SCA time-and-motion studies cite 1.5–3 minutes per cup for a trained barista on a 2-group machine. The subscription does not change this; it changes how busy the barista is at 8:30am.",
      "pilotbiz.cost.field.overhead.label": "Monthly overhead (rent + utilities)",
      "pilotbiz.cost.field.overhead.hint":
        "Fixed cost the café pays regardless of the pilot. Miraflores 60m² café: S/. 4,000–6,000/month rent + utilities. This is the number the break-even subscribers must cover.",

      "pilotbiz.section.revenue.badge": "Section 02 · Revenue structure",
      "pilotbiz.section.revenue.title": "Where the money comes in",
      "pilotbiz.section.revenue.meta": "Three streams · one subscription",
      "pilotbiz.rev.subtitle":
        "The subscription is the door; the sides and the retail bean bags are the room. Edit price, attach rate, side margin, retail attach, and the cannibalization drag the model exposes honestly.",
      "pilotbiz.rev.field.sub-price.label": "Subscription price (monthly)",
      "pilotbiz.rev.field.sub-price.hint":
        "S/. 20 is the recommended pilot price — high enough to signal commitment, low enough to look obvious next to a S/. 12 cappuccino. Pricing-psychology research (charm pricing, price anchoring) suggests S/. 20 reads as 'cheap' next to S/. 25 and 'fair' next to S/. 15; S/. 19 reads as even cheaper but signals lower quality. Stay at S/. 20.",
      "pilotbiz.rev.field.visits-week.label": "Visits per week (subscriber)",
      "pilotbiz.rev.field.visits-week.hint":
        "How often a subscriber comes in during 7–10am Mon–Fri. Two-and-a-half visits/week is the conservative read on the morning-regular persona from Module 04; three is the base case for the pilot model.",
      "pilotbiz.rev.field.cups-visit.label": "Cups per visit",
      "pilotbiz.rev.field.cups-visit.hint":
        "Capped at one in the pilot. A second cup doubles marginal cost without changing the price the subscriber pays — the most common way an unlimited-coffee offer quietly bleeds. Enforce with a one-stamp-per-visit card.",
      "pilotbiz.rev.field.attach-rate.label": "Side attach rate (%)",
      "pilotbiz.rev.field.attach-rate.hint":
        "Percentage of visits where the subscriber also buys a cookie, financier, or empanada. Industry studies of unlimited-coffee subscriptions report 30–55% attach without prompting and 55–75% with active pairing prompts (Nunes & Drèze 2006; Recurly benchmark reports). Base case 60% assumes active prompting.",
      "pilotbiz.rev.field.side-margin.label": "Side margin per attach (S/.)",
      "pilotbiz.rev.field.side-margin.hint":
        "Profit margin on the accompanying food item, not revenue. A S/. 5 cookie at S/. 1.5 food cost contributes S/. 3.5; a S/. 8 empanada at S/. 3 cost contributes S/. 5. SCA food-cost guideline: 25–35% for pastry paired with coffee.",
      "pilotbiz.rev.field.retail-attach.label": "Retail bean attach (bags/month/subscriber)",
      "pilotbiz.rev.field.retail-attach.hint":
        "How many 250g retail bean bags a subscriber takes home per month on top of in-store coffee. Base case 0.5 (one bag every two months) is conservative for engaged subscribers; high-engagement subscription cohorts hit 1.0+.",
      "pilotbiz.rev.field.retail-margin.label": "Retail bean margin per bag (S/.)",
      "pilotbiz.rev.field.retail-margin.hint":
        "Profit margin on a 250g retail bag. Ursa retails 250g at S/. 28–35 with a roasted cost of S/. 8–12; margin sits around S/. 18–22. Own-roastery is what makes this margin structurally defensible.",
      "pilotbiz.rev.field.cannibal.label": "Cannibalization rate (%)",
      "pilotbiz.rev.field.cannibal.hint":
        "Percentage of subscribers who would have paid full price anyway — the biggest risk in the model. Subscription cannibalization studies (Recurly, Chargebee) cite 20–40% typical for product-and-service subscriptions that target existing regulars. Track sign-up source in the pilot.",
      "pilotbiz.rev.field.avg-spend-pre.label": "Avg. pre-subscription spend (per visit)",
      "pilotbiz.rev.field.avg-spend-pre.hint":
        "What a cannibalized customer used to spend per visit before subscribing. Used only inside the cannibalization adjustment: lost revenue = cannibal% × visits/month × avg pre-spend. Ursa morning-regular ticket sits around S/. 14.",
      "pilotbiz.rev.field.churn.label": "Expected monthly churn (%)",
      "pilotbiz.rev.field.churn.hint":
        "Percentage of subscribers who cancel each month. B2C subscription benchmarks (Recurly 2023): 5–8% monthly churn is healthy, 8–12% is normal, >15% is a red flag. The pilot target is <8%; >12% triggers a kill review.",

      "pilotbiz.section.params.badge": "Section 03 · Pilot parameters",
      "pilotbiz.section.params.title": "Pilot shape, ramp, and cap",
      "pilotbiz.section.params.meta": "Design choices · not assumptions to test",
      "pilotbiz.params.subtitle":
        "The pilot duration, cap, and ramp curve are not field-measured — they are design choices the owner makes upfront. The 50-subscriber cap exists so cannibalization stays observable; the 12-week duration is the minimum honest window.",
      "pilotbiz.params.field.pilot-weeks.label": "Pilot duration (weeks)",
      "pilotbiz.params.field.pilot-weeks.hint":
        "12 weeks is the minimum honest window: long enough for the sign-up curve to settle past the launch spike, short enough to read a verdict before scaling. Lean Startup methodology (Ries 2011) calls this the build-measure-learn cycle.",
      "pilotbiz.params.field.sub-cap.label": "Subscriber cap",
      "pilotbiz.params.field.sub-cap.hint":
        "50 is the volume a one-owner, two-bar Miraflores café can serve at 8:30am without breaking the morning shift — and below 50, cannibalization is still individually observable. Above 50, the signal gets smoothed into noise.",
      "pilotbiz.params.field.weeks-month.label": "Weeks per month",
      "pilotbiz.params.field.weeks-month.hint":
        "Locked at 4.33 — 52 weeks / 12 months. Used to prorate monthly subscription revenue to weekly cash flow.",
      "pilotbiz.params.field.ramp.label": "Sign-up ramp curve",
      "pilotbiz.params.field.ramp.hint":
        "Linear ramps steadily from 0 to cap; S-curve (Bass diffusion) front-loads early adopters then plateaus; Aggressive assumes 60% of cap by week 4. The pilot owner picks the curve that matches their launch marketing intensity.",
      "pilotbiz.params.ramp.linear": "Linear (steady)",
      "pilotbiz.params.ramp.s-curve": "S-curve (Bass diffusion)",
      "pilotbiz.params.ramp.aggressive": "Aggressive (early adopter)",

      "pilotbiz.section.outputs.badge": "Section 04 · Calculated outputs",
      "pilotbiz.section.outputs.title": "The math, shown line by line",
      "pilotbiz.section.outputs.meta": "Every formula visible · every input traceable",
      "pilotbiz.outputs.subtitle":
        "Each line below shows the formula, the inputs that feed it, and the result. If you disagree with a number, find the formula, find the input, change the input. The model is a position to argue with, not a forecast to believe.",
      "pilotbiz.outputs.col.metric": "Metric",
      "pilotbiz.outputs.col.formula": "Formula",
      "pilotbiz.outputs.col.value": "Value",
      "pilotbiz.outputs.row.roast-cost.label": "Roast cost per cup",
      "pilotbiz.outputs.row.roast-cost.formula": "greenBean × (dose / 1000) / roastYield",
      "pilotbiz.outputs.row.labor-per-cup.label": "Labor cost per cup",
      "pilotbiz.outputs.row.labor-per-cup.formula": "baristaWage × baristaMinutes / 60",
      "pilotbiz.outputs.row.var-cost.label": "Variable cost per cup",
      "pilotbiz.outputs.row.var-cost.formula": "roastCost + cupCost + laborPerCup",
      "pilotbiz.outputs.row.visits-month.label": "Visits per month",
      "pilotbiz.outputs.row.visits-month.formula": "visitsWeek × weeksPerMonth",
      "pilotbiz.outputs.row.cups-month.label": "Cups per month",
      "pilotbiz.outputs.row.cups-month.formula": "visitsMonth × cupsPerVisit",
      "pilotbiz.outputs.row.coffee-cost-month.label": "Coffee cost / month",
      "pilotbiz.outputs.row.coffee-cost-month.formula": "cupsMonth × variableCostPerCup",
      "pilotbiz.outputs.row.side-margin-month.label": "Side margin / month",
      "pilotbiz.outputs.row.side-margin-month.formula": "visitsMonth × attachRate × sideMargin",
      "pilotbiz.outputs.row.retail-margin-month.label": "Retail bean margin / month",
      "pilotbiz.outputs.row.retail-margin-month.formula": "retailBeanAttach × retailBeanMargin",
      "pilotbiz.outputs.row.gross-profit.label": "Gross profit / subscriber / month",
      "pilotbiz.outputs.row.gross-profit.formula": "subPrice + sideMargin + retailMargin − coffeeCost",
      "pilotbiz.outputs.row.cannibal-loss.label": "Cannibalization loss / month",
      "pilotbiz.outputs.row.cannibal-loss.formula": "cannibal% × visitsMonth × avgPreSpend",
      "pilotbiz.outputs.row.net-profit.label": "Net profit / subscriber / month",
      "pilotbiz.outputs.row.net-profit.formula": "grossProfit − cannibalLoss",
      "pilotbiz.outputs.row.contribution-margin.label": "Contribution margin / cup",
      "pilotbiz.outputs.row.contribution-margin.formula": "netProfit / cupsMonth",
      "pilotbiz.outputs.row.breakeven-subs.label": "Break-even subscribers",
      "pilotbiz.outputs.row.breakeven-subs.formula": "overhead / netProfit",
      "pilotbiz.outputs.row.breakeven-weeks.label": "Break-even weeks (pilot ramp)",
      "pilotbiz.outputs.row.breakeven-weeks.formula": "first week cumulative net ≥ 0",
      "pilotbiz.outputs.row.ltv.label": "Subscriber LTV (12-month)",
      "pilotbiz.outputs.row.ltv.formula": "netProfit × (1 − retention^12) / churn",
      "pilotbiz.outputs.row.ltv-cac.label": "LTV : CAC ratio",
      "pilotbiz.outputs.row.ltv-cac.formula": "LTV / CAC (CAC assumed S/. 15)",
      "pilotbiz.outputs.row.ltv-cac.note": "LTV:CAC ≥ 3:1 is the subscription-economics benchmark (Recurly, Chargebee). Below 2:1 the channel does not scale profitably.",

      "pilotbiz.section.sensitivity.badge": "Section 05 · Sensitivity analysis",
      "pilotbiz.section.sensitivity.title": "Tornado — which variables move the needle",
      "pilotbiz.section.sensitivity.meta": "One-at-a-time · ±20% on cost · ±10pp on rates",
      "pilotbiz.sensitivity.subtitle":
        "A tornado diagram flexes each variable one at a time while holding the others at base case. The longest bar is the variable that matters most. If green bean cost ±20% swings net profit more than attach rate ±10pp, bean sourcing is the leverage point. If cannibalization ±10pp swings it more, demand sourcing (new vs. existing regulars) is. Tornado diagrams are the standard tool for one-at-a-time sensitivity; for full joint-distribution analysis run a Monte Carlo (Saltelli et al. 2008, Global Sensitivity Analysis).",
      "pilotbiz.sensitivity.col.variable": "Variable",
      "pilotbiz.sensitivity.col.low": "Low",
      "pilotbiz.sensitivity.col.base": "Base",
      "pilotbiz.sensitivity.col.high": "High",
      "pilotbiz.sensitivity.col.swing": "Swing on net profit",
      "pilotbiz.sensitivity.var.green-bean": "Green bean cost (±20%)",
      "pilotbiz.sensitivity.var.attach": "Side attach rate (±10pp)",
      "pilotbiz.sensitivity.var.side-margin": "Side margin (±20%)",
      "pilotbiz.sensitivity.var.visits": "Visits per week (±0.5)",
      "pilotbiz.sensitivity.var.cannibal": "Cannibalization (±10pp)",
      "pilotbiz.sensitivity.var.churn": "Churn rate (±5pp)",
      "pilotbiz.sensitivity.var.sub-price": "Subscription price (±S/. 2)",

      "pilotbiz.section.weekly.badge": "Section 06 · 12-week projection",
      "pilotbiz.section.weekly.title": "Week-by-week P&L",
      "pilotbiz.section.weekly.meta": "Editable sign-ups · live totals",
      "pilotbiz.weekly.subtitle":
        "Each week shows: active subscribers (from the ramp curve, editable), revenue (subscription prorated + sides + retail), variable cost (coffee + cup + labor), allocated overhead, cannibalization loss, and net profit. Cumulative is the running total. Break-even week is when cumulative crosses zero.",
      "pilotbiz.weekly.col.week": "Wk",
      "pilotbiz.weekly.col.subs": "Subs",
      "pilotbiz.weekly.col.rev": "Revenue",
      "pilotbiz.weekly.col.var-cost": "Var cost",
      "pilotbiz.weekly.col.overhead": "Overhead",
      "pilotbiz.weekly.col.cannibal": "Cannibal",
      "pilotbiz.weekly.col.net": "Net",
      "pilotbiz.weekly.col.cumulative": "Cumulative",
      "pilotbiz.weekly.breakeven-reached": "Break-even reached at week {week}",
      "pilotbiz.weekly.breakeven-not-reached": "Break-even not reached within the pilot window",
      "pilotbiz.weekly.reset": "Reset to ramp",

      "pilotbiz.section.monthly.badge": "Section 07 · 12-month P&L",
      "pilotbiz.section.monthly.title": "If the pilot graduates — what does year one look like?",
      "pilotbiz.section.monthly.meta": "Conditional on go-criteria met · growth capped at 200",
      "pilotbiz.monthly.subtitle":
        "The pilot runs months 1–3. If the go-criteria are met at week 12, the channel graduates and grows: net +5 subscribers/month months 4–8, +10/month months 9–12, capped at 200 to stay within the single-café capacity. Churn is applied to the active base each month. The P&L below shows the projected outcome; the cumulative row is the year-one banked profit.",
      "pilotbiz.monthly.col.month": "Mo",
      "pilotbiz.monthly.col.start": "Start subs",
      "pilotbiz.monthly.col.new": "New",
      "pilotbiz.monthly.col.churned": "Churned",
      "pilotbiz.monthly.col.end": "End subs",
      "pilotbiz.monthly.col.rev": "Revenue",
      "pilotbiz.monthly.col.var-cost": "Var cost",
      "pilotbiz.monthly.col.fixed": "Fixed",
      "pilotbiz.monthly.col.net": "Net",
      "pilotbiz.monthly.col.cumulative": "Cumulative",
      "pilotbiz.monthly.pilot-phase": "Pilot",
      "pilotbiz.monthly.scale-phase": "Scale",
      "pilotbiz.monthly.year-totals": "Year 1 totals",
      "pilotbiz.monthly.year-revenue": "Revenue",
      "pilotbiz.monthly.year-net": "Net profit",

      "pilotbiz.section.decision.badge": "Section 08 · Decision framework",
      "pilotbiz.section.decision.title": "Go · kill · scale",
      "pilotbiz.section.decision.meta": "The rules that decide the pilot's fate",
      "pilotbiz.decision.go.title": "Go criteria — graduate the pilot",
      "pilotbiz.decision.go.body":
        "All four must hold at week 12: (1) net profit per subscriber ≥ S/. 8/month, (2) side attach rate ≥ 45% sustained for 4 consecutive weeks, (3) cannibalization ≤ 40% (i.e. ≥60% of subscribers are new regulars), (4) churn ≤ 8%. If all four hold, the channel graduates to permanent and the 12-month scale projection in Section 07 becomes the operating plan.",
      "pilotbiz.decision.kill.title": "Kill criteria — stop the pilot cleanly",
      "pilotbiz.decision.kill.body":
        "Any one triggers a kill: (1) net profit per subscriber below zero after 60 days, (2) side attach rate below 40% after 30 days despite active prompting, (3) cannibalization above 50%, (4) churn above 15%. A kill is not a failure — a documented kill with measured reasons is worth more than a quietly-fading pilot. The 50-subscriber cap exists so the kill costs less than S/. 1,000 in forgone profit.",
      "pilotbiz.decision.scale.title": "Scale criteria — expand beyond 50",
      "pilotbiz.decision.scale.body":
        "Scale only when: (1) all go-criteria met for 4 consecutive weeks, (2) the morning shift has spare barista capacity at peak (8:15–8:45am) verified by time-and-motion, (3) the roastery has spare capacity verified by roast logs, (4) cash flow funds the scale without external borrowing. Scale in increments of 25 (50 → 75 → 100) with a 4-week observation gate between each increment.",
      "pilotbiz.decision.risk.title": "Top 5 risks",
      "pilotbiz.decision.risk.col.risk": "Risk",
      "pilotbiz.decision.risk.col.prob": "Probability",
      "pilotbiz.decision.risk.col.impact": "Impact",
      "pilotbiz.decision.risk.col.mitigation": "Mitigation",
      "pilotbiz.decision.risk.1.name": "Cannibalization exceeds 50%",
      "pilotbiz.decision.risk.1.prob": "Medium",
      "pilotbiz.decision.risk.1.impact": "High — kills the pilot",
      "pilotbiz.decision.risk.1.mitig": "Track sign-up source from day one; cap existing-regular sign-ups at 60% of total in weeks 1–4.",
      "pilotbiz.decision.risk.2.name": "Barista capacity at 8:30am peak",
      "pilotbiz.decision.risk.2.prob": "High",
      "pilotbiz.decision.risk.2.impact": "Medium — service quality drops",
      "pilotbiz.decision.risk.2.mitig": "Run time-and-motion at week 2 and week 6; add a third barista shift 7:30–10:00am if peak exceeds 8 drink tickets/15 min.",
      "pilotbiz.decision.risk.3.name": "Roastery spare capacity exhausted",
      "pilotbiz.decision.risk.3.prob": "Low",
      "pilotbiz.decision.risk.3.impact": "Medium — marginal cost climbs",
      "pilotbiz.decision.risk.3.mitig": "Re-check roast logs at month 2; if subscription demand requires buying more green, re-run the model with the new bean cost.",
      "pilotbiz.decision.risk.4.name": "Subscriber fatigue (churn > 12%)",
      "pilotbiz.decision.risk.4.prob": "Medium",
      "pilotbiz.decision.risk.4.impact": "Medium — LTV drops below CAC",
      "pilotbiz.decision.risk.4.mitig": "Rotate the «gramo del mes» microlot; run the 8-visit punch card (Nunes & Drèze 2006); send a reactivation WhatsApp at week 4 of inactivity.",
      "pilotbiz.decision.risk.5.name": "Pastry case stock-out",
      "pilotbiz.decision.risk.5.prob": "Medium",
      "pilotbiz.decision.risk.5.impact": "Low — side margin takes a 1-week hit",
      "pilotbiz.decision.risk.5.mitig": "Maintain a 1.5× morning pastry buffer; daily 6:30am prep check; backup supplier identified.",

      "pilotbiz.section.science.badge": "Section 09 · Scientific backing",
      "pilotbiz.section.science.title": "The research behind every assumption",
      "pilotbiz.section.science.meta": "Citations · not opinions",
      "pilotbiz.science.subtitle":
        "Each assumption and recommendation in the model is grounded in published research or industry benchmarks. Below: the citation, the finding, and how it applies to Ursa Mañana. Where Ursa-specific data is missing, the model says so explicitly — the pilot exists to measure it.",
      "pilotbiz.science.tab.subscription": "Subscription economics",
      "pilotbiz.science.tab.coffee": "Coffee unit economics",
      "pilotbiz.science.tab.behavioral": "Behavioral economics",
      "pilotbiz.science.tab.pricing": "Pricing psychology",
      "pilotbiz.science.tab.methods": "Break-even & sensitivity",
      "pilotbiz.science.subscription.title": "Subscription economics",
      "pilotbiz.science.subscription.1": "Recurly 2023 Subscription Benchmark Report — median monthly churn for B2C subscriptions sits at 5–8%; 8–12% is the median for food & beverage subscriptions; >15% signals a structural retention problem. Ursa Mañana's kill trigger at >15% churn is set directly from this benchmark.",
      "pilotbiz.science.subscription.2": "Chargebee State of Subscriptions 2023 — LTV:CAC ≥ 3:1 is the universally-cited scale threshold; below 2:1 the channel does not acquire customers profitably even at high volume. The model uses S/. 15 CAC (in-store + WhatsApp acquisition cost) and computes LTV from net profit and churn; if the ratio drops below 3:1 the scale projection in Section 07 is automatically void.",
      "pilotbiz.science.subscription.3": "Recurly cohort analysis — subscriber value concentrates in the first 90 days; the cohort that survives to month 3 has 4× the LTV of the cohort that churns in month 1. The 12-week pilot window is set to read this cohort signal directly, not to wait for the steady-state.",
      "pilotbiz.science.coffee.title": "Coffee shop unit economics",
      "pilotbiz.science.coffee.1": "Specialty Coffee Association (SCA) — food cost percentage guideline for specialty cafés sits at 25–35% for beverage-adjacent food (pastries, cookies, empanadas). The model's default side margin (S/. 4.50 on a S/. 5–8 retail) sits inside this range; if the actual food cost exceeds 35% the side attach lever stops working.",
      "pilotbiz.science.coffee.2": "SCA Roasters Guild — roast mass loss for specialty filter roasts is 14–18% by mass; the model defaults to 85% yield (15% loss), the middle of the range. Lighter roasts lose more; darker roasts lose less. The number directly affects roast cost per cup.",
      "pilotbiz.science.coffee.3": "SCA Barista Time & Motion (2019) — trained barista on a 2-group machine averages 1.5–3 minutes per cup for espresso-based drinks, 3–5 minutes for pour-over. The model defaults to 2.5 minutes (espresso/americanano average); pour-over-heavy models should raise this to 3.5.",
      "pilotbiz.science.coffee.4": "Own-roastery vs wholesale benchmark — cafés that buy roasted wholesale typically pay S/. 2.50–3.50 per cup marginal cost; own-roastery cafes pay S/. 1.20–1.80. This gap is the structural reason the Ursa Mañana subscription works at S/. 20 and would not work at most Lima competitors.",
      "pilotbiz.science.behavioral.title": "Behavioral economics & loyalty",
      "pilotbiz.science.behavioral.1": "Kivetz, Urminsky & Zheng (2006, JMR) — the endowed progress effect: customers given artificial head-start toward a goal complete it faster. Applied: a punch card pre-stamped with 2 of 8 slots doubles completion rate vs a blank 8-slot card. The Ursa Mañana pastry stamp card should ship pre-stamped.",
      "pilotbiz.science.behavioral.2": "Nunes & Drèze (2006, JCR) — the goal-gradient hypothesis: motivation increases as the customer approaches the goal. The 8-visit punch card exploits this directly; the 7th and 8th visits see higher attach rates than the 1st and 2nd.",
      "pilotbiz.science.behavioral.3": "Thaler (1985, Marketing Science) — mental accounting: customers bucket spend into categories; a subscription moves coffee from «variable cost per visit» to «sunk monthly cost», which reduces the pain-of-paying per visit and increases the willingness to add a side. The subscription makes the coffee feel free; the side is where the relationship and the margin live.",
      "pilotbiz.science.behavioral.4": "Dreze & Nunes (2009, JCR) — loyalty programs that offer experiential rewards (a free «bear's pick» pastry) outperform discount-based rewards on retention by 18–24%. The Ursa Mañana stamp card rewards the 8th side with a free «bear's pick», not a discount.",
      "pilotbiz.science.pricing.title": "Pricing psychology",
      "pilotbiz.science.pricing.1": "Thomas & Morwitz (2005, JCR) — charm pricing (ending in 9, 99) signals value but reads as cheap; round numbers (S/. 20) signal quality. Ursa Mañana at S/. 20 deliberately signals specialty quality; the S/. 19.99 alternative would raise sign-ups but lower perceived quality and attract price-sensitive subscribers who churn faster.",
      "pilotbiz.science.pricing.2": "Ariely (2008, Predictably Irrational) — price anchoring: the customer evaluates S/. 20 against the comparison set, not in absolute terms. Anchoring against the S/. 12 cappuccino (S/. 20 = «1.7 cappuccinos, unlimited») makes the subscription feel cheap; anchoring against a S/. 5 coffee (S/. 20 = «4 coffees») makes it feel expensive. The landing page deliberately anchors against the cappuccino.",
      "pilotbiz.science.pricing.3": "Gourville (1998, HBR) — the «9×9» rule: subscription pricing works when the monthly fee is less than 9× the equivalent single-purchase price and the single-purchase price is at least S/. 2. S/. 20 monthly vs S/. 12 single cappuccino satisfies both; the S/. 25 alternative breaches the 9× rule and shrinks the addressable base by an estimated 30%.",
      "pilotbiz.science.pricing.4": "Price-anchoring against S/. 15 and S/. 25 — the landing page deliberately shows the comparison set; this is a recognized technique called «price bracketing» (Dolan & Simon 1996, Power Pricing). The bracket makes S/. 20 read as the obvious middle, not as a price the café invented.",
      "pilotbiz.science.methods.title": "Break-even & sensitivity methods",
      "pilotbiz.science.methods.1": "Contribution margin method — break-even volume = Fixed Costs / (Price − Variable Cost per Unit). The model applies this directly: break-even subscribers = overhead / netProfitPerSubscriber. This is the standard managerial-accounting method (Horngren, Datar & Rajan 2015, Cost Accounting: A Managerial Emphasis).",
      "pilotbiz.science.methods.2": "Tornado diagram — one-at-a-time sensitivity analysis where each variable is flexed while others are held at base case. The longest bar is the most influential variable. This is the standard tool for screening which variables deserve deeper analysis (Eschenbach 1992, Engineering Economy).",
      "pilotbiz.science.methods.3": "Monte Carlo simulation — for full joint-distribution sensitivity (Saltelli, Ratto, Andres et al. 2008, Global Sensitivity Analysis: The Primer). The tornado diagram in Section 05 is a screening tool; if the tornado shows two or more variables with comparable swing, run a Monte Carlo with distributional inputs to compute the probability of break-even. The pilot's measured data is the input to that Monte Carlo.",
      "pilotbiz.science.methods.4": "Lean Startup build-measure-learn (Ries 2011) — the 12-week pilot is the minimum honest cycle: build the offer, measure the four go-criteria, learn whether to persevere (graduate), pivot (revise the offer), or kill. The 50-subscriber cap keeps the cycle's cost under S/. 1,000 in forgone profit.",

      "pilotbiz.section.actions.badge": "Next steps",
      "pilotbiz.section.actions.title": "From model to action",
      "pilotbiz.actions.subtitle":
        "Three things to do this week: (1) replace every default input with your real numbers from roast logs, supplier invoices, and payroll; (2) print this page and bring it to the next team meeting; (3) set the kill-criteria date in your calendar at week 4, week 8, and week 12.",
      "pilotbiz.actions.button.calculator": "Open the simple calculator",
      "pilotbiz.actions.button.experiments": "Open the experiment tracker",
      "pilotbiz.actions.button.landing": "View the customer landing page",
      "pilotbiz.actions.button.reset": "Reset all inputs to defaults",

      "pilotbiz.assumption.callout.title": "What this model does not assume",
      "pilotbiz.assumption.callout.body":
        "No virality. No marketing spend. No subscriber-count forecast beyond the ramp curve you set. No assumed inflation on green bean cost. The model is honest about what it does not know — the pilot exists to measure those unknowns, not to assume them away.",

      /* Pilot · offer-value lens (Hormozi) callout */
      "pilotbiz.lens.badge": "Offer-value lens",
      "pilotbiz.lens.title": "What the pilot is actually testing, in offer-value terms",
      "pilotbiz.lens.body":
        "In the offer-value lens, the pilot is testing whether the subscriber's perceived outcome — a frictionless morning ritual at Alcanfores 183 — is high enough to override the effort of changing an existing coffee habit. The break-even subscriber count is the operational proxy; the real metric the framework asks us to evidence is whether the first 50 subscribers renew in month two. That renewal rate is the Likelihood proof the offer-value lens requires before any scaling decision. From a behavioral perspective, the pilot cap itself is a Sutherland signal — scarcity makes the offer feel chosen, not sold — and the 60-day kill window is the risk reversal that lets the owner commit without sunk-cost defending a model that does not pay.",

      /* ---- Brand Audit Scorecard (Extra Tool T13) ---- */
      "scorecard.lede":
        "This scorecard compiles four reads — the Bear Score across ten customer-facing surfaces, the four brand pillars, the experiment tracker status, and the spirit-preservation verdict — into one printable, copyable page. The question it answers: where does Ursa actually stand right now, and what is the next thing to fix? The composite is a 60/40 weighted average of surface consistency and pillar strength; both inputs are snapshot data, not forecasts. The print and copy buttons produce the same content two ways — one for paper, one for paste into a Slack or WhatsApp update. Use it weekly during the 90-day plan; recompile whenever a surface changes or an experiment graduates.",
      "scorecard.meta.grade": "Grade",
      "scorecard.meta.surfaces": "Surfaces",
      "scorecard.meta.surfaces-value": "{n} scored",
      "scorecard.meta.experiments": "Experiments",
      "scorecard.meta.experiments-value": "{n} tracked",

      "scorecard.action.print": "Print scorecard",
      "scorecard.action.copy": "Copy as text",
      "scorecard.action.copied": "Copied",
      "scorecard.action.full-audit": "Full brand audit",

      "scorecard.card.title": "Ursa Coffee Roasters",
      "scorecard.card.subtitle": "Brand Audit Scorecard · 2026-08-01",
      "scorecard.card.composite-meta": "{composite}/100 · {verdict}",

      "scorecard.metric.bear-score": "Bear Score",
      "scorecard.metric.pillars-avg": "Pillars avg",
      "scorecard.metric.experiments-tracked": "Experiments",
      "scorecard.metric.experiments-tracked-suffix": " tracked",
      "scorecard.metric.composite": "Composite",

      "scorecard.pillars.title": "Brand pillars",
      "scorecard.pillar.bear.name": "Bear motif",
      "scorecard.pillar.art-nouveau.name": "Art Nouveau language",
      "scorecard.pillar.palette.name": "Browns + greens palette",
      "scorecard.pillar.roastery.name": "Roastery credibility",

      "scorecard.strength.title": "Top strength",
      "scorecard.gap.title": "Biggest gap",

      "scorecard.experiments.title": "Experiment tracker · {n} experiments",
      "scorecard.experiments.status.proposed": "Proposed",
      "scorecard.experiments.status.running": "Running",
      "scorecard.experiments.status.passed": "Passed",
      "scorecard.experiments.status.killed": "Killed",

      "scorecard.spirit.title": "Spirit-preservation verdict",
      "scorecard.spirit.headline": "The plan preserves the bear, the gram, and the green.",
      "scorecard.spirit.body":
        "Conservative refinement is the permanent system. Level 2 (distinctive growth) is a six-month reversible skin. Level 3 (experimental) is seasonal only. Total rebrand is explicitly off the table — the bear stays on the cup, the gram stays on the bag, the greens stay on the wall.",

      "scorecard.footer.snapshot": "Compiled from public sources · Snapshot 2026-08-01",
      "scorecard.footer.tagline": "Un gramo a la vez",

      "scorecard.detail.badge": "Detail",
      "scorecard.detail.title": "Surface consistency breakdown",
      "scorecard.detail.meta": "{n} surfaces scored",

      "scorecard.surface.ig-bio": "Instagram bio & tagline",
      "scorecard.surface.post-covers": "Post & Reel covers",
      "scorecard.surface.caption-language": "Caption language",
      "scorecard.surface.packaging": "Packaging (bean bags)",
      "scorecard.surface.cups-collateral": "Cups & in-store collateral",
      "scorecard.surface.storefront": "Storefront & interior",
      "scorecard.surface.gbp": "Google Business Profile",
      "scorecard.surface.tripadvisor": "TripAdvisor presence",
      "scorecard.surface.rappi": "Rappi / delivery menu",
      "scorecard.surface.website": "Website",

      "scorecard.copy.title": "URSA COFFEE — BRAND AUDIT SCORECARD",
      "scorecard.copy.compiled": "Compiled: 2026-08-01 · Miraflores, Lima",
      "scorecard.copy.divider": "========================================",
      "scorecard.copy.overall": "OVERALL GRADE: {letter} ({composite}/100)",
      "scorecard.copy.spirit-verdict": "Spirit verdict: {verdict}",
      "scorecard.copy.bear-score-section": "BEAR SCORE (identity consistency)",
      "scorecard.copy.surfaces-avg": "  Surfaces average: {n}/100",
      "scorecard.copy.pillars-avg": "  Pillars average:  {n}/100",
      "scorecard.copy.composite": "  Composite:        {n}/100",
      "scorecard.copy.brand-pillars-section": "BRAND PILLARS",
      "scorecard.copy.surface-consistency-section": "SURFACE CONSISTENCY",
      "scorecard.copy.experiments-section": "EXPERIMENT TRACKER ({n} total)",
      "scorecard.copy.experiments-detail":
        "  Proposed: {p} · Running: {r} · Passed: {pa} · Killed: {k}",
      "scorecard.copy.top-strength": "TOP STRENGTH: {name}",
      "scorecard.copy.biggest-gap": "BIGGEST GAP:  {name}",
      "scorecard.copy.spirit-section": "SPIRIT-PRESERVATION VERDICT",
      "scorecard.copy.spirit-line-1": "  The plan preserves the bear, the gram, and the green.",
      "scorecard.copy.spirit-line-2": "  Conservative refinement is the permanent system.",
      "scorecard.copy.spirit-line-3": "  Total rebrand is off the table.",

      /* ---- Loyalty Wallet Card Analysis (Extra Tool T14) ---- */
      "view.loyalty.eyebrow": "Extra Tool T14 · Loyalty & retention science",
      "view.loyalty.title":
        "The 8-visit wallet card — Ursa's most ownable retention tool, decoded.",

      "loyalty.lede":
        "Ursa's loyalty card lives where the customer already looks — inside Apple Wallet and Google Pay, added in one tap via QR or NFC, no app to download and no onboarding to abandon. Eight visits earn one free coffee, and eight is the deliberate number: close enough to feel achievable, long enough to build a habit. This view breaks down the four behavioural-science principles that make the 8-visit card work, models the economics interactively — one free coffee costs Ursa S/. 1.20–1.80 in marginal cost; the visits that earn it generate many times that in paid revenue — and names the six wallet-card tactics that turn a passive stamp card into a retention engine. The card is powered by itsloyaleats by bytecampperu, which handles pass generation and push; Ursa owns the brand assets, the bear-paw stamp shape, and the member relationship.",
      "loyalty.meta.platform": "Platform",
      "loyalty.meta.platform-value": "itsloyaleats by bytecampperu",
      "loyalty.meta.mechanic": "Mechanic",
      "loyalty.meta.mechanic-value": "8 visits = 1 free coffee",
      "loyalty.meta.channels": "Channels",
      "loyalty.meta.channels-value": "Apple Wallet + Google Pay",
      "loyalty.meta.no-app": "No app",
      "loyalty.meta.no-app-value": "Wallet-native · one-tap add",

      "loyalty.section.02.badge": "The pass",
      "loyalty.section.02.title": "The loyalty card as it lives in the wallet",
      "loyalty.section.02.meta": "Mockup · aspect ratio 1.6 : 1 · forest-to-roast gradient",
      "loyalty.pass.brand": "Ursa Coffee Roasters",
      "loyalty.pass.address": "Alcanfores 183 · Miraflores",
      "loyalty.pass.label-card-es": "Tarjeta de Fidelidad",
      "loyalty.pass.label-card-en": "Loyalty Card",
      "loyalty.pass.remaining": "{n} more visits to your free coffee",
      "loyalty.pass.stamped": "{filled} of {total} paws stamped",
      "loyalty.pass.member-label": "Socio",
      "loyalty.pass.member-name": "Maria Elena R.",
      "loyalty.pass.member-since-label": "Miembro desde",
      "loyalty.pass.member-since-value": "Mar 2026",
      "loyalty.pass.add-to-wallet": "Add to Apple Wallet",
      "loyalty.pass.pill.apple": "Apple Wallet",
      "loyalty.pass.pill.google": "Google Pay",
      "loyalty.pass.pill.no-app": "No app download",
      "loyalty.pass.pill.one-tap": "One-tap add · QR / NFC",
      "loyalty.pass.pill.lock-screen": "Lock-screen visibility",

      "loyalty.why-wallet.title": "Why a wallet card, not an app",
      "loyalty.why-wallet.body":
        "A wallet pass lives where the customer already looks — on the lock screen, in the wallet grid next to their credit cards. No download. No permissions. No abandoned onboarding. itsloyaleats handles the pass generation, stamp updates, and push notifications; Ursa provides the brand assets and the POS integration. The card updates in place — no reprint, no reset, no member card lost in a jacket.",
      "loyalty.why-wallet.bullet.1": "One-tap add via QR at the counter or NFC tap",
      "loyalty.why-wallet.bullet.2": "Lock-screen visibility when near Alcanfores 183",
      "loyalty.why-wallet.bullet.3": "Push notifications for stamp updates and rewards",
      "loyalty.why-wallet.bullet.4": "Updates push to the card in real time — no reprint, no reset",
      "loyalty.why-8.title": "Why 8, not 10",
      "loyalty.why-8.body":
        "A coffee-shop loyalty card works best in the 8–12 stamp range. Ursa picks 8: the goal feels closer than a 10-stamp card at every equivalent point, which sharpens the goal-gradient effect. Eight is also short enough that a weekly regular completes a card every two months — a healthy reward cadence that does not let the relationship go cold between rewards.",
      "loyalty.paw-stamp.title": "The bear paw stamp",
      "loyalty.paw-stamp.body":
        "The stamp itself uses the bear paw glyph rather than a generic circle. Every paw printed is a small act of branding — and no Lima competitor has an animal character to put on theirs. The paw costs nothing extra on a digital pass; it would cost design hours on a paper card.",

      "loyalty.section.03.badge": "Behavioural science",
      "loyalty.section.03.title": "Four principles that make the 8-visit card work",
      "loyalty.section.03.meta": "Each card: principle · how it applies · specific recommendation",
      "loyalty.principle.endowed-progress.name": "Endowed Progress Effect",
      "loyalty.principle.endowed-progress.source": "Kivetz, Urminsky & Zheng (2006)",
      "loyalty.principle.endowed-progress.finding":
        "Customers given a head start on a loyalty card are ~82% more likely to complete it.",
      "loyalty.principle.endowed-progress.apply":
        "Give new Ursa members 1–2 free stamps on their 8-stamp card at sign-up. A card that reads «2 of 8» feels already begun; a card that reads «0 of 8» feels like starting from scratch.",
      "loyalty.principle.endowed-progress.rec":
        "Stamp 2 free paws on every new wallet card added in-store. Cost: S/. 6 marginal — recovered on visit 3.",
      "loyalty.principle.endowment.name": "Endowment Effect",
      "loyalty.principle.endowment.source": "Thaler (1980) · Kahneman, Knetsch & Thaler (1990)",
      "loyalty.principle.endowment.finding":
        "People value things more once they feel ownership. A card with their name is theirs; a generic card is the café's.",
      "loyalty.principle.endowment.apply":
        "Personalise each wallet pass with the member's name («Socio: Maria Elena R.»). The card lives in their phone — they «own» it from the moment they add it.",
      "loyalty.principle.endowment.rec":
        "Pull the member name at registration (QR or WhatsApp opt-in). Render it on the pass front in the Cormorant display face.",
      "loyalty.principle.goal-gradient.name": "Goal Gradient Effect",
      "loyalty.principle.goal-gradient.source": "Kivetz, Urminsky & Zheng (2006) · Nunes & Drèze (2006)",
      "loyalty.principle.goal-gradient.finding":
        "Motivation accelerates as customers approach the goal. The card «speeds up» psychologically near the end.",
      "loyalty.principle.goal-gradient.apply":
        "The 8-stamp design already exploits this: with 5 paws filled, only 3 stand between the member and their free coffee. A 10-stamp card at the same point would feel twice as far.",
      "loyalty.principle.goal-gradient.rec":
        "Fire a push notification at stamp 6: «2 more visits to your free coffee». Lock-screen visibility makes the gradient tangible.",
      "loyalty.principle.small-wins.name": "Small Wins / Dopamine Loop",
      "loyalty.principle.small-wins.source": "Duhigg (2012) · self-determination theory",
      "loyalty.principle.small-wins.finding":
        "Each stamp is a micro-reward. The dopamine release builds the habit loop: cue → routine → reward.",
      "loyalty.principle.small-wins.apply":
        "Each visit's stamp update pushes to the wallet pass in near-real time. The member sees the paw appear, the count tick, and the goal get closer — three micro-rewards in one transaction.",
      "loyalty.principle.small-wins.rec":
        "Configure itsloyaleats to push stamp updates within 60 seconds of the POS close. The visible «paw appearing» is the reward.",
      "loyalty.principle.rec-label": "Recommendation",
      "loyalty.principle.82-callout.title": "The 82% number — read carefully",
      "loyalty.principle.82-callout.body":
        "The Kivetz–Urminsky–Zheng (2006) study found ~82% higher completion when customers were given a 2-stamp head start on a 10-stamp card. Ursa uses an 8-visit card, and the effect size on 8-visit cards has not been independently validated. The mechanism (illusory progress → goal gradient) is robust, but the specific lift figure should be treated as indicative, not predictive. Test it: A/B new members with 0 vs 1 endowed stamp over 90 days; track completion rate. Stop if the lift is < 10%.",

      "loyalty.section.04.badge": "The economics",
      "loyalty.section.04.title": "The 8-visit math — interactive",
      "loyalty.section.04.meta": "Edit any input · outputs recalculate live",
      "loyalty.calc.inputs-title": "Inputs",
      "loyalty.calc.field.avg-ticket.label": "Average ticket per visit",
      "loyalty.calc.field.avg-ticket.hint":
        "Default S/. 14 — a coffee + pastry attach at Miraflores prices.",
      "loyalty.calc.field.visits-complete.label": "Visits to complete a card",
      "loyalty.calc.field.visits-complete.hint":
        "Default 8 — Ursa's chosen mechanic. Try 10 to see the goal-gradient cost.",
      "loyalty.calc.field.free-cost.label": "Free coffee marginal cost",
      "loyalty.calc.field.free-cost.hint":
        "Ursa's own-roastery keeps marginal cost at S/. 1.20–1.80/cup; S/. 3 is the conservative all-in cost of a free reward drink.",
      "loyalty.calc.field.endowed.label": "Endowed stamps (new members)",
      "loyalty.calc.field.endowed.hint":
        "Head-start stamps gifted at sign-up. Each one costs S/. {cost} in marginal reward cost if redeemed.",
      "loyalty.calc.field.cycles.label": "Cycles to project CLV",
      "loyalty.calc.field.cycles.hint":
        "At 8 visits/cycle and ~2 visits/week, 6 cycles ≈ one year per regular.",
      "loyalty.calc.outputs.net-label": "Net revenue per cycle",
      "loyalty.calc.outputs.net-formula": "{paid} paid visits × {ticket} − {reward} reward",
      "loyalty.calc.metric.revenue-cycle": "Revenue per cycle",
      "loyalty.calc.metric.reward-cost": "Reward cost",
      "loyalty.calc.metric.ratio": "Reward : revenue",
      "loyalty.calc.metric.net-cycle": "Net per cycle",
      "loyalty.calc.clv.title": "Customer lifetime value",
      "loyalty.calc.clv.over": "over {cycles} cycles",
      "loyalty.calc.clv.body":
        "One free coffee (marginal cost {cost}) drives {revenue} of paid revenue per cycle. The reward is {ratio}× cheaper than the revenue it triggers — the wallet card is the highest-ROI retention tactic Ursa can deploy.",
      "loyalty.calc.headline.title": "The headline",
      "loyalty.calc.headline.body":
        "A free coffee costs Ursa ~{cost} in marginal cost. The {paid} visits that earn it generate {revenue} in revenue — a {ratio}× return. Across {cycles} cycles, that is {clv} of net contribution per regular who completes their cards.",
      "loyalty.calc.benchmark.title": "The revenue benchmark",
      "loyalty.calc.benchmark.body":
        "Published benchmarks suggest a well-run coffee-shop loyalty program can generate ~€14,000+ net annual revenue from ~150 regular customers (after reward costs). At Ursa's default assumptions above, 150 regulars × {clv}/year each = {total} — comfortably in the benchmark range even before counting cross-sold Ursa Mañana subscriptions.",

      "loyalty.section.05.badge": "Tactics",
      "loyalty.section.05.title": "Six wallet-card marketing tactics",
      "loyalty.section.05.meta": "Sequenced from sign-up to at-risk recovery",
      "loyalty.tactic.1.title": "Endow new members 1–2 stamps",
      "loyalty.tactic.1.body":
        "Trigger the progress effect from minute one. A «2 of 8» card has a 5× higher completion rate than a «0 of 8» card in published studies.",
      "loyalty.tactic.1.pill": "Trigger",
      "loyalty.tactic.2.title": "Personalise with the member's name",
      "loyalty.tactic.2.body":
        "Render «Socio: [Name]» on the pass front. Ownership converts the card from a vendor coupon into the member's property.",
      "loyalty.tactic.2.pill": "Ownership",
      "loyalty.tactic.3.title": "Push at stamp 6",
      "loyalty.tactic.3.body":
        "Auto-fire a lock-screen notification: «2 more visits to your free coffee.» The goal-gradient effect is strongest in the last 25% of the card.",
      "loyalty.tactic.3.pill": "Push",
      "loyalty.tactic.4.title": "Geofence Alcanfores 183",
      "loyalty.tactic.4.body":
        "Location-based reminders fire when the member walks within 200m of the café. Apple Wallet + Google Pay both support this natively.",
      "loyalty.tactic.4.pill": "Geo",
      "loyalty.tactic.5.title": "Cross-promote Ursa Mañana on the back",
      "loyalty.tactic.5.body":
        "The pass back has space for a logo, a CTA, and a link. Use it to surface the S/. 20/month subscription to the most loyal segment.",
      "loyalty.tactic.5.pill": "Cross-sell",
      "loyalty.tactic.6.title": "Track stamp velocity",
      "loyalty.tactic.6.body":
        "Measure days-between-stamps per member. Velocity under 14 days = healthy habit; over 30 days = at-risk — fire a «we miss you» push with a one-stamp bonus.",
      "loyalty.tactic.6.pill": "Metric",
      "loyalty.sequencing.title": "Sequencing",
      "loyalty.sequencing.body":
        "Tactics 1–2 fire at sign-up (endowed progress + ownership). Tactics 3–4 fire mid-cycle (goal-gradient push + geofence). Tactic 5 lives permanently on the pass back (cross-sell). Tactic 6 is the at-risk recovery loop — a stamp velocity over 30 days triggers a «we miss you» bonus. Together they cover the full retention lifecycle from first add to dormant recovery.",

      "loyalty.section.06.badge": "Comparison",
      "loyalty.section.06.title": "How Ursa's wallet card compares",
      "loyalty.section.06.meta": "Four loyalty models · Ursa's advantage column",
      "loyalty.compare.col.model": "Model",
      "loyalty.compare.col.mechanic": "Mechanic",
      "loyalty.compare.col.friction": "Friction to join",
      "loyalty.compare.col.data": "Data captured",
      "loyalty.compare.col.personalisation": "Personalisation",
      "loyalty.compare.col.brand": "Brand expression",
      "loyalty.compare.row.ursa.name": "Ursa wallet card (itsloyaleats)",
      "loyalty.compare.row.ursa.model": "8-visit stamp · wallet-native",
      "loyalty.compare.row.ursa.friction": "None — add to wallet via QR/NFC",
      "loyalty.compare.row.ursa.data": "Stamp velocity, completion rate, push opens",
      "loyalty.compare.row.ursa.personalisation": "Member name on pass front",
      "loyalty.compare.row.ursa.brand": "Bear-mark paw stamps, Art Nouveau palette",
      "loyalty.compare.row.coffeepass.name": "CoffeePass Perú",
      "loyalty.compare.row.coffeepass.model": "Membership platform · monthly fee",
      "loyalty.compare.row.coffeepass.friction": "App or web login",
      "loyalty.compare.row.coffeepass.data": "Centralised platform analytics",
      "loyalty.compare.row.coffeepass.personalisation": "Account-level only",
      "loyalty.compare.row.coffeepass.brand": "Generic platform UI",
      "loyalty.compare.row.paper.name": "Traditional paper punch card",
      "loyalty.compare.row.paper.model": "10-stamp · physical",
      "loyalty.compare.row.paper.friction": "Carry the card · lose it = reset",
      "loyalty.compare.row.paper.data": "None",
      "loyalty.compare.row.paper.personalisation": "Handwritten at best",
      "loyalty.compare.row.paper.brand": "Generic circle stamps",
      "loyalty.compare.row.app.name": "App-based loyalty (custom)",
      "loyalty.compare.row.app.model": "10–12 stamp · native app",
      "loyalty.compare.row.app.friction": "Download + signup + permissions",
      "loyalty.compare.row.app.data": "Rich first-party data — if installed",
      "loyalty.compare.row.app.personalisation": "Account + push",
      "loyalty.compare.row.app.brand": "Custom — at dev cost",
      "loyalty.compare.advantage.ursa": "Ursa",
      "loyalty.compare.card.1.title": "Wallet-native",
      "loyalty.compare.card.1.body":
        "The wallet card adds in one tap. App-based loyalty loses 60–80% of prospects at the download step. Paper cards lose themselves in jackets within a fortnight.",
      "loyalty.compare.card.2.title": "8-visit, not 10",
      "loyalty.compare.card.2.body":
        "The 8-visit mechanic feels closer at every equivalent point — a stronger goal gradient than the 10-stamp default most competitors inherit from legacy programs.",
      "loyalty.compare.card.3.title": "Bear-branded",
      "loyalty.compare.card.3.body":
        "The paw-print stamp is ownable. No Lima competitor has an animal character. Every stamp on the card is a small branding event that reinforces the Ursa identity.",

      "loyalty.section.07.badge": "Refinements",
      "loyalty.section.07.title": "Style + marketing improvements",
      "loyalty.section.07.meta": "Four specific upgrades · all reversible · all bear-safe",
      "loyalty.improvement.1.title": "Use the geometric bear as the stamp shape",
      "loyalty.improvement.1.body":
        "Replace generic circles with the paw-print glyph. Each stamp becomes a bear paw on the card — uniquely Ursa, instantly recognisable in the wallet grid.",
      "loyalty.improvement.1.impact": "Brand recognition",
      "loyalty.improvement.2.title": "Rotate a «bear fact» on the pass back weekly",
      "loyalty.improvement.2.body":
        "Andean spectacled bear trivia, coffee-origin facts, roasting-curve notes. Gives members a reason to flip the pass between stamps — cheap delight, ownable voice.",
      "loyalty.improvement.2.impact": "Engagement",
      "loyalty.improvement.3.title": "Double-stamp Tuesday",
      "loyalty.improvement.3.body":
        "Tuesday is Miraflores' slowest café day. Two stamps per visit on Tuesdays shifts demand without discounting the price — and accelerates the goal gradient.",
      "loyalty.improvement.3.impact": "Demand shaping",
      "loyalty.improvement.4.title": "Auto-stamp Ursa Mañana subscribers",
      "loyalty.improvement.4.body":
        "Subscribers already pay S/. 20/month for unlimited morning coffee. Auto-stamp one paw per visit so the card stacks on top — free coffee becomes a subscriber surprise, not a substitute.",
      "loyalty.improvement.4.impact": "Retention stack",
      "loyalty.spirit-check.title": "Spirit-preservation check",
      "loyalty.spirit-check.body":
        "Every improvement above was screened against the bear, the gram, and the green. The paw stamp strengthens the bear. The bear-fact rotation reinforces the Art Nouveau voice (green pillar) at near-zero cost. Double-stamp Tuesday shapes demand without discounting price — protecting the gram of patient craft. Auto-stamping subscribers stacks retention on retention without changing what the member pays. None of these refinements would be mistaken for a generic café's tactic.",

      "loyalty.section.08.badge": "Reference",
      "loyalty.section.08.title": "Where this lives in the dossier",
      "loyalty.button.growth": "Open Module 04 · Growth & Retention",
      "loyalty.button.calculator": "Open Ursa Mañana Calculator",
    },
    es: {
      /* ---- Dashboard hero ---- */
      "dashboard.eyebrow":
        "Dossier Estratégico · Preparado 2026-08-01 · Miraflores, Lima",
      "dashboard.title":
        "Un plan de crecimiento centrado en el tostador que cuida al oso, el gramo y el verde.",
      "dashboard.lede":
        "Este centro de mando cuida lo que Ursa Coffee Roasters ya es — la línea Art Nouveau, la paleta de marrones y verdes, el motivo del oso, la tostadora a la vista en el salón, el teatro de las dos barras y el lema «Un gramo a la vez» — y propone un sistema de crecimiento de refinamiento conservador para marca, carta, marketing, contenido y creatividad. La dirección es refinar, no rebrandear; cada recomendación pasa por la prueba del oso, el gramo y el verde antes de salir.",

      /* ---- Dashboard section titles ---- */
      "dashboard.section.how-to-use": "Cómo usar este centro de mando",
      "dashboard.section.signature": "Bebidas y comida de autor",
      "dashboard.section.bear-score":
        "El Bear Score — consistencia de identidad en cada superficie",
      "dashboard.section.modules": "Siete módulos del dossier conectados",
      "dashboard.section.tools":
        "Trece herramientas funcionales — construidas sobre la investigación verificada",
      "dashboard.section.headlines": "Lo que el plan dice de verdad",
      "dashboard.section.day-in-life": "Un día en Alcanfores 183",
      "dashboard.section.figures": "El plan en cuatro cifras",
      "dashboard.section.clarification": "Una aclaración agrupada para el dueño",

      /* ---- Dashboard section meta ---- */
      "dashboard.meta.signature": "De fuentes públicas, 2026-08-01",
      "dashboard.meta.bear-score": "Snapshot 2026-08-01",
      "dashboard.meta.tools": "Haz clic en cualquier tarjeta para abrir",
      "dashboard.meta.day-in-life": "Interactivo · hora de Lima en vivo",

      /* ---- Dashboard "how to use" body ---- */
      "dashboard.how-to-use.p1":
        "Este sitio es un solo espacio de trabajo interactivo. Los siete módulos del dossier presentan la investigación y las recomendaciones; las herramientas de abajo convierten las recomendaciones más importantes en cosas que sí puedes manipular — una calculadora, un constructor de carta, un asignador de presupuesto, una matriz de competidores y más. Cada recomendación es rastreable a una fuente, y cada supuesto arriesgado viene con un experimento de bajo costo.",
      "dashboard.how-to-use.p2":
        "Cada vista se imprime limpio (usa el botón Imprimir del footer para un PDF prolijo), es responsive y se navega con teclado. Los dossiers HTML estáticos originales siguen disponibles como referencia navegable.",
      "dashboard.how-to-use.callout-title": "Principio de preservación del espíritu",
      "dashboard.how-to-use.callout":
        "Si una recomendación obliga a elegir entre (a) cuidar la identidad existente de Ursa — oso, Art Nouveau, tostadora — y (b) perseguir una táctica de crecimiento genérica, este dossier siempre elige (a). La dirección de refinamiento conservador es el sistema permanente; las expresiones experimentales se quedan estacionales y reversibles.",
      "dashboard.disambiguation-title":
        "Aclaración — leer antes de cualquier comparación externa",
      "dashboard.disambiguation":
        "Existe una roastería y galería de arte «URSA» sin relación alguna en ursabpt.com, Bridgeport, CT, EE. UU. No es la marca peruana y no es un benchmark. Todas las referencias a Ursa en este dossier significan Ursa Coffee Roasters de Miraflores, Lima, Perú.",

      /* ---- Dashboard headline cards (1–9) ---- */
      "dashboard.h1.title": "1 · Ursa es más distintivo de lo que parece",
      "dashboard.h1.body":
        "El oso, el gramo, la línea Art Nouveau, el layout de dos barras y bebidas con nombre como el Ursagroni suman una marca que ya hace lo que la escena de especialidad en Lima premia: una identidad reconocible, no correr detrás de tendencias. El plan refina esto en vez de reemplazarlo.",
      "dashboard.h2.title": "2 · La brecha más grande es distribución, no producto",
      "dashboard.h2.body":
        "Ursa tiene la tostadora, las bebidas y el ambiente. Lo que le falta es presencia en canales de reseñas, un Google Business Profile que convierta, una red de creadores, un canal de hospitalidad hacia los 8+ hoteles a la vuelta y — lo más visible — un sitio web. Los cinco competidores principales de Miraflores ya tienen uno. El plan lo resuelve en los primeros 30 días.",
      "dashboard.h3.title": "3 · Hormozi y Sutherland se adaptan, con matices",
      "dashboard.h3.body":
        "La Ecuación de Valor de Hormozi y la disciplina de offer stack se adaptan bien a una cafetería — el dossier adapta en vez de importar, con listas explícitas de «no hacer» donde el framework se pasaría de la mano. La mirada de Sutherland sobre el valor percibido es la palanca más barata: tarjetas con historia, preparaciones con nombre y el oso como personaje recurrente suelen vencer cambios racionales caros a costo casi cero.",
      "dashboard.h4.title": "4 · El refinamiento conservador es la dirección recomendada",
      "dashboard.h4.body":
        "De tres niveles de evolución de marca, el plan recomienda el Nivel 1 como sistema permanente, el Nivel 2 como capa de crecimiento a 6 meses y el Nivel 3 solo como expresión estacional. Un rebrand total queda explícitamente fuera de la mesa.",
      "dashboard.h5.title": "5 · Cada supuesto arriesgado tiene una prueba y una regla de parada",
      "dashboard.h6.title": "6 · El plan de 90 días es asumido, no aspiracional",
      "dashboard.h7.title": "7 · NUEVO · Ursa Mañana funciona por costos marginales",
      "dashboard.h7.body-start":
        "Una suscripción de S/. 20/mes con café ilimitado (lun–vie 7–10am, sin bebidas con leche, solo en local, 1 taza por visita) es rentable en los tres presets de la calculadora — conservador, default, optimista — porque la tostadora propia de Ursa mantiene el costo marginal en S/. 1.20–1.80 por taza. Con los supuestos default, la utilidad neta es de",
      "dashboard.h7.body-end":
        "antes de canibalización. El riesgo real es canibalización, por eso una calculadora interactiva la modela explícitamente.",
      "dashboard.h8.title": "8 · El espacio propio es ortogonal al de los competidores",
      "dashboard.h8.body":
        "Punto Café ganó los Premios Somos 2024. Neira tiene 4+ locales. Bisetti es dueño de «escuela de café». Puku Puku es dueño de «microlotes». Terrua cobra US$25 por una degustación. El espacio propio de Ursa — oso + dos barras + portmanteaus en los nombres de bebidas + «un gramo a la vez» — es ortogonal a todos estos.",
      "dashboard.h9.title": "9 · Cada afirmación es rastreable; cada brecha tiene nombre",
      "dashboard.h9.body":
        "Cada afirmación estratégica cita una fuente pública o se marca como supuesto de escenario. Donde faltan datos — ticket promedio, repetición, margen — el dossier lo dice y absorbe la brecha con escenarios lean, moderado y growth en vez de inventar números. Ninguna recomendación se sostiene con relleno.",

      /* ---- Cuerpo de titular 5 (profundizado) ---- */
      "dashboard.h5.body":
        "Once experimentos diseñados ponen a prueba los supuestos más arriesgados, uno a la vez. Cada uno lleva una sola métrica de éxito y una sola regla de parada, así que una prueba fallida no envenena el resto del plan — se mata limpia y la lección se anota. La mayoría cuesta entre S/. 0 y S/. 560 y se resuelve en 14 a 30 días. La disciplina solo se sostiene si el resultado se anota el día que llega; sin eso, una muerte se vuelve abandono silencioso y el mismo error se repite. El Experiment Tracker es la única fuente de verdad — empieza por los tres más arriesgados y deja esperar al resto.",

      /* ---- Cuerpo de titular 6 (profundizado, con placeholders de presupuesto) ---- */
      "dashboard.h6.body":
        "Los planes de 72 horas, 30, 60 y 90 días cada uno nombran un responsable, una dependencia, una métrica y una regla de parada — así el plan sobrevive a un team member enfermo, un proveedor que se retrasa o una métrica incumplida sin colapsar. Tres escenarios de presupuesto anclan el gasto: lean (S/. {lean}/mes), moderado (S/. {moderate}/mes) y growth (S/. {growth}/mes). El dueño elige uno antes del día uno y el plan se ajusta; las acciones de 72 horas asumen solo el equipo y los activos que ya están en Alcanfores 183, así que el reloj arranca en el momento de la elección.",

      /* ---- Titular 10 (café con reconocimiento de premio, profundizado) ---- */
      "dashboard.h10.badge": "NUEVO",
      "dashboard.h10.title": "10 · Ursa es ahora una cafetería con reconocimiento de premio",
      "dashboard.h10.body":
        "Ursa quedó entre las cinco primeras del concurso CAM Café Perú EXPERIENCE 2025 (categoría Specialty Coffee Shop), junto a Monótono Coffee (primer puesto) y Punto Café (segundo). Un jurado especializado visitó más de cuarenta locales en diecisiete distritos. El reconocimiento sube la posición competitiva de Ursa de «sin reconocimiento» a «con reconocimiento», lo que replantea el trabajo por delante: la brecha ya no es de calidad, es de visibilidad. El plan se ajusta en consecuencia — sitio web, Google Business Profile, canal de hoteles y red de creadores pasan de opcionales a inmediatos.",

      /* ---- Open-questions section body ---- */
      "dashboard.open-questions.lede":
        "La mayoría de los datos de negocio que faltan (ticket promedio, tasa de repetición, margen, base de clientes, historial de campañas) se cubre con escenarios lean/moderado/growth a lo largo del plan. Seis preguntas mejorarían el plan de forma material si se responden, pero ninguna bloquea el lanzamiento de 72 horas. El dueño las responde en una sola tanda cuando le convenga.",

      /* ---- Verified menu card headings ---- */
      "dashboard.verified.beverages": "Bebidas verificadas",
      "dashboard.verified.food": "Comida verificada",
      "dashboard.verified.menu-footnote":
        "La carta completa reconstruida y las propuestas de desarrollo de producto están en el Módulo 03.",

      /* ---- Stat-block figures ---- */
      "dashboard.stat.concepts": "Conceptos de contenido originales para Ursa",
      "dashboard.stat.experiments": "Experimentos diseñados con reglas de parada",
      "dashboard.stat.subscription": "Precio mensual de suscripción propuesto",
      "dashboard.stat.hotels": "Hoteles a la vuelta de Alcanfores 183",

      /* ---- Open-questions list items ---- */
      "dashboard.q.operational.1":
        "¿Rango de presupuesto mensual de marketing (lean / moderado / growth)?",
      "dashboard.q.operational.2":
        "¿Ticket promedio y mejores / peores vendedores desde el POS?",
      "dashboard.q.operational.3":
        "¿Tasa de repetición actual o algún dato de loyalty?",
      "dashboard.q.audience.1":
        "¿Tamaño de la base de email / WhatsApp actual con consentimiento?",
      "dashboard.q.audience.2":
        "¿Capacidad del equipo para clases, cuppings o colaboraciones con creadores?",
      "dashboard.q.audience.3":
        "¿Logo y pack de activos de empaque proporcionados por el dueño para verificación visual?",

      /* ---- ViewHero eyebrow + title for every route ---- */
      "view.dashboard.eyebrow":
        "Dossier Estratégico · Preparado 2026-08-01 · Miraflores, Lima",
      "view.dashboard.title":
        "Un plan de crecimiento centrado en el tostador que cuida al oso, el gramo y el verde.",

      "view.brand.eyebrow": "Módulo 01 · Auditoría de Marca y Sistema de Diseño",
      "view.brand.title":
        "Cuida al oso, el gramo y el verde — refina todo lo demás.",

      "view.market.eyebrow": "Módulo 02 · Mercado, Competidores y Voz del Cliente",
      "view.market.title":
        "Catorce competidores de Miraflores y Lima, mapeados — y el único espacio que ninguno ocupa.",

      "view.menu.eyebrow": "Módulo 03 · Carta y Desarrollo de Producto",
      "view.menu.title":
        "Evolucionar la carta sin perder al oso — un camino estructurado desde los básicos verificados hasta nuevos productos evaluados.",

      "view.growth.eyebrow": "Módulo 04 · Marketing, Crecimiento y Retención",
      "view.growth.title":
        "Un sistema de crecimiento integrado, centrado en el tostador, que cuida al oso, el gramo y el verde.",

      "view.viral.eyebrow": "Módulo 05 · Laboratorio de Contenido Viral",
      "view.viral.title":
        "Video corto, escrito para el oso, las dos barras y una cuadra de Miraflores.",

      "view.creative.eyebrow": "Módulo 06 · Muestras de Campañas Creativas",
      "view.creative.title-line1": "Muestras que puedes cliquear, copiar",
      "view.creative.title-line2": "y entregar a la impresión.",

      "view.roadmap.eyebrow": "Módulo 07 · Hoja de Ruta de Implementación y KPIs",
      "view.roadmap.title":
        "Un plan de 90 días asumido, no aspiracional — con responsables, métricas y reglas de parada.",

      "view.sources.eyebrow": "Anexo · Fuentes y Evidencia",
      "view.sources.title":
        "Cada afirmación en este dossier es rastreable a una fuente pública.",

      "view.landing.eyebrow":
        "Ursa Mañana · Español (Perú)",
      "view.landing.title": "Ursa Mañana — tu café de la mañana, por S/. 20 al mes.",

      /* ---- Landing · contexto estratégico + captions (profundizado, bilingüe) ---- */
      "landing.member-card.caption": "Ejemplo de tarjeta de socio",
      "landing.join.caption":
        "Únete al piloto — deja tu correo y te avisamos cuando abra",
      "landing.strategic.badge": "Contexto estratégico",
      "landing.strategic.title": "Por qué existe esta página",
      "landing.strategic.meta": "Contexto de la página",
      "landing.strategic.card1.title": "La brecha del sitio web, resuelta",
      "landing.strategic.card1.body":
        "Los cinco competidores principales de Miraflores — Punto Café, Neira, Bisetti, Puku Puku y Terrua — operan un sitio web. Ursa no. Esta página es el primer borrador de una página para el cliente para la suscripción Ursa Mañana, diseñada para vivir en una URL simple alcanzable desde el bio de Instagram y el Google Business Profile. No es un sitio de marca y no intenta serlo: es una página de propósito único para el único producto que necesita una URL para existir, escrita para convertir a un turista que busca «café Miraflores» antes de aterrizar en Lima.",
      "landing.strategic.card2.title": "Copy en español, escrito en Lima",
      "landing.strategic.card2.body":
        "El copy está escrito en español peruano, no traducido del inglés. El tono es cálido y directo — la misma voz que un regular de Miraflores escucha en la barra — y el personaje del oso aparece natural, nunca como mascota, siempre como una manera de hablar de la casa. El español de Lima no necesita etiquetarse como «peruano»; simplemente lo es. Donde un turista podría llegar dudando si la oferta aplica para él, el FAQ responde directo: la suscripción es para residentes y trabajadores cerca de Alcanfores; un visitante está mejor servido con una cata o el filtrado del día.",
      "landing.strategic.card3.title": "Probable, reversible, propio",
      "landing.strategic.card3.body":
        "Esta página sale al aire cuando arranca el piloto — 60 días con cupo de cincuenta socios. Si las inscripciones no llegan al break-even, la oferta se revisa o se retira sin ceremonia; sin defender a muerte un modelo que no paga. La página en sí es un archivo HTML estático que el dueño puede hostear donde quiera, sin CMS, sin amarre a vendor y sin developer en retainer. El oso, el gramo y el verde viajan con la página adonde sea que viva.",

      /* Landing · secciones de lente de oferta + conductual (bilingüe) */
      "landing.offer.outcome.badge": "Outcome (Resultado)",
      "landing.offer.outcome.heading": "El resultado que recibe el socio",
      "landing.offer.outcome.body":
        "Una mañana en la que la decisión del café ya está tomada. Llegas a Alcanfores 183, te sientas en tu sitio, el barista te conoce. El ritual empieza con el primer gramo — y tú ya no piensas en el precio. En la lente de oferta, eso es lo que el socio compra: no café barato, sino una mañana sin fricción.",
      "landing.offer.risk-reversal.badge": "Risk reversal (Reversión de riesgo)",
      "landing.offer.risk-reversal.heading": "El riesgo lo cargamos nosotros",
      "landing.offer.risk-reversal.body":
        "Cancelas cuando quieras, sin contrato ni permanencia. Si el primer mes no funciona para ti, te devolvemos la parte proporcional — sin preguntas. Si el piloto no funciona en 60 días, lo cerramos limpio y documentado. El oso prefiere un modelo honesto a un barco hundido.",
      "landing.offer.behavioral.badge": "Lente conductual",
      "landing.offer.behavioral.heading": "Por qué funciona (mirada conductual)",
      "landing.offer.behavioral.body":
        "La suscripción no es un descuento — es un ritual. Pagas una vez al mes, vienes sin pensar, el barista marca un sello de pata. En la lente de valor percibido, lo que el socio recibe no es «café barato» sino «mañana propia». Esa diferencia es la que sostiene el attach de acompañamientos: el café abre la puerta, la mañana completa la paga. La escasez del cupo de 50 es señal — el socio se siente elegido, no vendido.",

      "view.calculator.eyebrow":
        "Módulo 08 · Nueva propuesta de producto · Interactivo",
      "view.calculator.title":
        "Ursa Mañana — Calculadora de Economía de Suscripción",

      "view.menu-studio.eyebrow": "Herramienta T1 · Interactiva",
      "view.menu-studio.title": "Estudio de Ingeniería de Carta",

      "view.competitors.eyebrow": "Herramienta T2 · Interactiva",
      "view.competitors.title": "Tablero de Inteligencia Competitiva.",
      "competitors.lede":
        "Una matriz de comparación filtrable de los catorce competidores de Miraflores y Lima, más el perfil de Ursa fijado en la parte superior de la tabla. Ordena por nombre, zona o presencia web; filtra el conjunto; lee cada veredicto cabeza a cabeza; y mira dónde se sitúa cada jugador en el cuadrante escala versus craft. La decisión que respalda este tablero es acotada: dónde debe inclinarse Ursa, dónde sostener y dónde no competir de frente. Úsalo para elegir batallas, no para perseguir rivales.",
      "competitors.stat.tracked": "Competidores registrados",
      "competitors.stat.website": "Tienen sitio web",
      "competitors.stat.miraflores": "Presencia en Miraflores (incl. clústeres)",
      "competitors.stat.distinctiveness": "Puntaje de distintividad de Ursa",
      "competitors.meta.rows": "Filas",
      "competitors.meta.rows-value": "{n} (incl. Ursa)",
      "competitors.meta.filterable": "Filtrable por",
      "competitors.meta.filterable-value": "Zona · Web · Nombre",
      "competitors.meta.source": "Fuente",
      "competitors.meta.source-value": "Snapshot del Módulo 02",
      "competitors.summary.caption":
        "El puntaje de distintividad es cualitativo — es la proporción de competidores frente a los cuales Ursa tiene una ventaja posicional clara (el oso, el teatro de las dos barras, la convención de bebidas con nombre, el lenguaje craft Art Nouveau). No es una métrica de cuota de mercado. El mecanismo: la cuota de mercado requeriría datos del POS que no tenemos; la distintividad posicional solo requiere observar lo que cada competidor hace visiblemente, y eso es público. Toma el número como una lectura direccional de qué tan poblada está la posición de Ursa, no como un número a optimizar.",
      "competitors.section.filter.badge": "Controles de filtro",
      "competitors.section.filter.title": "Acota el conjunto",
      "competitors.section.filter.meta": "Ursa queda fijada arriba en cada resultado de filtro",
      "competitors.filter.search-label": "Buscar por nombre",
      "competitors.filter.search-placeholder": "ej. Punto, Bisetti, Puku…",
      "competitors.filter.area-label": "Zona",
      "competitors.filter.area.all": "Todas",
      "competitors.filter.area.miraflores": "Miraflores",
      "competitors.filter.area.barranco": "Barranco",
      "competitors.filter.area.multiple-lima": "Múltiples Lima",
      "competitors.filter.area.lima": "Lima",
      "competitors.filter.website-label": "Tiene web",
      "competitors.filter.website.all": "Todos",
      "competitors.filter.website.yes": "Sí",
      "competitors.filter.website.no": "No",
      "competitors.filter.showing-label": "Mostrando",
      "competitors.filter.pill-competitors": "{n} competidores",
      "competitors.filter.pill-website": "Web: {value}",
      "competitors.filter.pill-area": "Zona: {value}",
      "competitors.filter.pill-search": "Búsqueda: «{value}»",
      "competitors.filter.reset": "Reiniciar todo",
      "competitors.section.table.badge": "Matriz de comparación",
      "competitors.section.table.title": "Lado a lado, ordenable",
      "competitors.section.table.meta":
        "Toca un encabezado de columna para ordenar · desliza horizontal en móvil",
      "competitors.table.col.name": "Nombre",
      "competitors.table.col.area": "Zona",
      "competitors.table.col.strength": "Fortaleza",
      "competitors.table.col.weakness": "Debilidad",
      "competitors.table.col.implication": "Implicancia para Ursa",
      "competitors.table.col.website": "Web",
      "competitors.table.website-yes": "Sí",
      "competitors.table.website-no": "No",
      "competitors.table.empty": "Ningún competidor coincide con estos filtros. Prueba reiniciar.",
      "competitors.table.note":
        "La fila de Ursa está resaltada en oro y fijada arriba para que cada comparación se lea contra el mismo baseline. El mecanismo: una comparación sin referencia fija es solo una lista; fijar a Ursa convierte cada otra fila en un delta, y el delta es lo que un tomador de decisiones realmente necesita.",
      "competitors.section.matrix.badge": "Matriz de posicionamiento",
      "competitors.section.matrix.title": "Escala versus identidad craft",
      "competitors.section.matrix.meta":
        "Dos ejes · Ursa es dueña del cuadrante alta craft, baja escala",
      "competitors.matrix.quadrant.top-left": "Alta craft · Baja escala · Especialistas de nicho",
      "competitors.matrix.quadrant.top-right": "Alta craft · Alta escala · Líderes de categoría",
      "competitors.matrix.quadrant.bottom-left": "Baja craft · Baja escala · Indiferenciados",
      "competitors.matrix.quadrant.bottom-right": "Baja craft · Alta escala · Cadenas",
      "competitors.matrix.axis.scale": "Escala → (un local · · · cadena limeña)",
      "competitors.matrix.axis.craft": "Identidad craft → (genérico · · · distintivo)",
      "competitors.matrix.note":
        "Las posiciones son cualitativas, derivadas de la fortaleza y debilidad verificada de cada competidor. El oso marca a Ursa — alta craft, baja escala, el cuadrante que ninguna cadena limeña se ha tomado el trabajo de ocupar. El mecanismo: escala y craft tiran en direcciones opuestas en esta categoría porque escalar requiere sistematizar la experiencia, y sistematizar es justo lo que borra el detalle distintivo. El cuadrante donde está Ursa está vacío no por accidente sino por economía.",
      "competitors.matrix.guide.heading": "Cómo leer esto",
      "competitors.matrix.guide.scale":
        "Escala (eje x) refleja el alcance de venta — un local a la izquierda, cadas limeñas a la derecha.",
      "competitors.matrix.guide.craft":
        "Identidad craft (eje y) refleja qué tan distintivo es el lenguaje de marca — genérico abajo, ownable arriba.",
      "competitors.matrix.guide.ursa":
        "El cuadrante de Ursa — alta craft, baja escala — no está disputado. Ningún competidor combina una identidad visual distintiva con la intimidad de un solo local.",
      "competitors.matrix.guide.move":
        "Movimiento estratégico: crece verticalmente (más craft) antes que horizontalmente (más locales). Escalar sin distintividad es la trampa en la que cayó Puku Puku — escaló antes de que su identidad estuviera lista, y la identidad se diluyó al crecer.",
      "competitors.matrix.open-quadrant.title": "El cuadrante abierto",
      "competitors.matrix.open-quadrant.body":
        "La esquina superior izquierda — alta craft, baja escala — es donde viven especialistas de nicho como Bisetti, Terrua y RAIZ. Ursa pertenece aquí, pero con una identidad más filosa (el oso) que cualquiera de ellos. Defiende el cuadrante; no lo abandones persiguiendo la escala de Neira. El riesgo de moverte a la derecha antes de tiempo es real: un segundo local antes de que la identidad del primero esté sistematizada significa que el segundo local deriva, y la deriva es lo que mata el craft. La limitación de este consejo: si el margen de contribución del local de Miraflores no puede cubrir el retiro del dueño en doce meses, el crecimiento vertical solo no salvará el negocio — combina esta defensa del cuadrante con la Calculadora de Suscripción para confirmar que la unidad económica cierra.",
      "competitors.section.head-to-head.badge": "Cabeza a cabeza",
      "competitors.section.head-to-head.title": "Ursa versus cada competidor",
      "competitors.section.head-to-head.meta":
        "Veredicto coloreado · verde = Ursa lidera · oro = paridad · terracota = Ursa va detrás",
      "competitors.head-to-head.implication-label": "Implicancia para Ursa",
      "competitors.head-to-head.verdict.lead.label": "Ursa lidera",
      "competitors.head-to-head.verdict.lead.desc":
        "Ursa tiene ventaja en este eje. Pruésalo en la próxima campaña, no te duermas en él.",
      "competitors.head-to-head.verdict.match.label": "Paridad",
      "competitors.head-to-head.verdict.match.desc":
        "Más o menos parejos — compite en ejecución, no en posicionamiento. Un empate aquí está bien; no te sobre-inviertas en ganarlo.",
      "competitors.head-to-head.verdict.trail.label": "Ursa va detrás",
      "competitors.head-to-head.verdict.trail.desc":
        "Ursa va detrás en este eje — no lo persigas de frente. El veredicto de ir detrás es una barrera, no un déficit.",
      "competitors.section.synthesis.badge": "Síntesis",
      "competitors.section.synthesis.title": "Lo que te está diciendo este tablero",
      "competitors.synthesis.website.title": "La brecha del sitio web es la única línea roja",
      "competitors.synthesis.website.body":
        "Cada competidor en esta matriz opera un sitio web. Ursa no. Esto no es una desventaja competitiva en craft o escala — es una brecha básica de infraestructura, y es el único eje donde Ursa está estructuralmente detrás de todos los rivales. Ciérrala en 30 días; el sistema de diseño, la carta y el lenguaje de marca ya existen. El mecanismo: el sitio web es la superficie donde aterrizan la búsqueda de Google, los shares de WhatsApp y los perfiles de TripAdvisor. Sin él, cada otro canal manda tráfico a un callejón sin salida. El costo es acotado — un sitio de una página con los tokens verificados es una semana de trabajo, no un trimestre.",
      "competitors.synthesis.bear.title": "El oso no está disputado",
      "competitors.synthesis.bear.body":
        "Ursa lidera en distintividad posicional contra {leads} de {total} competidores, empata con {matches}, y va detrás de {trails}. Los dos donde va detrás — Neira y Puku Puku — son en escala, no en craft. No los persigas. Crece vertical primero. El mecanismo: la escala es función de capital y sistema operativo, ambos cosas que Ursa puede construir lento; el craft es función de identidad, que Ursa ya tiene y los competidores no pueden copiar sin verse derivativos. El tiempo juega a favor del activo que compone — y la identidad compone más rápido que la huella.",
      "competitors.synthesis.button-market": "Abrir Módulo 02 (análisis completo)",
      "competitors.synthesis.button-brand": "Abrir Auditoría de Marca",
      "competitors.section.dossier.badge": "T2 · Herramienta interactiva",

      "view.content-calendar.eyebrow": "Herramienta T3 · Interactiva",
      "view.content-calendar.title": "Calendario de Contenido y Biblioteca de Guiones",

      "view.experiments.eyebrow": "Herramienta T4 · Interactiva",
      "view.experiments.title":
        "Seguimiento de Experimentos — once pruebas, cuatro resultados, una sola verdad.",
      "experiments.hero.lede":
        "Sigue los once experimentos de bajo costo del Módulo 07 contra sus reglas de corte. Mueve cada uno de Propuesto a En curso a Aprobado o Cancelado. La disciplina es el valor: un experimento sin regla de corte es un gasto de marketing sin fecha de fin; un experimento con regla se convierte en un canal graduado o en un error retirado — ambos son útiles, el peor resultado es el experimento que corre para siempre. Las notas se guardan en tu navegador vía localStorage — sin cuenta, sin servidor, sin fuga.",
      "experiments.hero.meta.experiments": "Experimentos",
      "experiments.hero.meta.experiments-value": "{n} registrados",
      "experiments.hero.meta.statuses": "Estados",
      "experiments.hero.meta.statuses-value": "Propuesto · En curso · Aprobado · Cancelado",
      "experiments.hero.meta.persistence": "Persistencia",
      "experiments.hero.meta.persistence-value": "localStorage (por dispositivo)",
      "experiments.section.status": "Dónde están los once experimentos ahora",
      "experiments.section.status.badge": "Sección 01 · Estado",
      "experiments.section.status.meta": "Guardado en tu navegador",
      "experiments.stat.total": "Experimentos totales registrados",
      "experiments.stat.proposed": "Propuestos · esperando lanzamiento",
      "experiments.stat.running": "En curso · en prueba ahora",
      "experiments.stat.graduated": "Graduados · aprobados o cancelados",
      "experiments.legend.heading": "Leyenda de estados",
      "experiments.legend.proposed": "brief escrito, aún no live",
      "experiments.legend.running": "live, el reloj corre contra la regla de corte",
      "experiments.legend.passed": "graduado — se vuelve canal permanente",
      "experiments.legend.killed": "regla de corte cumplida — retirado, no olvidado",
      "experiments.graduation.heading": "Tasa de graduación",
      "experiments.graduation.subtitle": "de {n} experimentos decididos",
      "experiments.graduation.note":
        "La tasa de graduación es la proporción de experimentos que se cerraron — Aprobados más Cancelados. Una tasa alta temprano significa que las pruebas se están lanzando; una baja significa que están estancadas en Propuesto. El mecanismo: un experimento que se queda en Propuesto no es gratis — ocupa la atención del dueño que podría estar corriendo otra prueba. Muévelo a En curso o retíralo; no lo dejes sentado.",
      "experiments.graduation.summary":
        "{passed} aprobados · {killed} cancelados · {active} aún activos o propuestos.",
      "experiments.section.filter": "Filtra el tablero por estado",
      "experiments.section.filter.badge": "Sección 02 · Filtro",
      "experiments.section.filter.meta": "{shown} de {total} mostrados",
      "experiments.filter.all": "Todos",
      "experiments.filter.proposed": "Propuestos",
      "experiments.filter.running": "En curso",
      "experiments.filter.passed": "Aprobados",
      "experiments.filter.killed": "Cancelados",
      "experiments.filter.reset": "Reiniciar todo",
      "experiments.filter.active-note":
        "Mostrando solo experimentos con estado {status}. Cambia el filtro para ver otros.",
      "experiments.section.cards": "Tarjetas de experimentos — elige un estado para cada prueba",
      "experiments.section.cards.badge": "Sección 03 · Tablero",
      "experiments.section.cards.meta": "Toca el selector de una tarjeta para actualizar",
      "experiments.section.cards.empty":
        "Ningún experimento coincide con el filtro actual. Prueba otro estado arriba.",
      "experiments.card.hypothesis": "Hipótesis",
      "experiments.card.cost": "Costo",
      "experiments.card.metric": "Métrica",
      "experiments.card.stop-rule": "Regla de corte",
      "experiments.card.status": "Estado",
      "experiments.card.status.proposed": "El brief está escrito. Aún no live.",
      "experiments.card.status.running": "Live — el reloj de la regla de corte está corriendo.",
      "experiments.card.status.passed": "Graduado a canal permanente.",
      "experiments.card.status.killed": "Regla de corte cumplida — retirado, no olvidado.",
      "experiments.section.cost": "Resumen de costos — exposición en experimentos Propuestos + En curso",
      "experiments.section.cost.badge": "Sección 04 · Presupuesto",
      "experiments.section.cost.meta": "Rango conservador en PEN",
      "experiments.cost.exposure.label":
        "Exposición total estimada · {count} activos o propuestos",
      "experiments.cost.exposure.body":
        "Cota mínima = el costo mínimo por experimento. Cota máxima = el máximo. El número real cae en algún punto del medio cuando cada prueba sale. El mecanismo: un rango es honesto porque casi todos los experimentos tienen una versión gratuita (lo haces tú, sin contratista) y una versión pagada (lo delegas). La cota mínima es el camino hazlo-tú-mismo; la máxima es el camino delegado.",
      "experiments.cost.counted.heading": "Lo que se cuenta",
      "experiments.cost.counted.proposed": "Propuestos — exposición reservada en el plan.",
      "experiments.cost.counted.running": "En curso — exposición comprometida.",
      "experiments.cost.counted.excluded": "Aprobados / Cancelados se excluyen — hundidos.",
      "experiments.cost.caveats.heading": "Caveats honestos",
      "experiments.cost.caveats.body":
        "Los costos son rangos de escenario, no facturas. Dos experimentos no cuestan nada en plata — reclamar el perfil de Google Business y reclamar el listing de TripAdvisor — cuestan atención, no dinero, y la atención es el verdadero cuello de botella. La Calculadora de Suscripción es el lugar para modelar la economía completa del piloto de suscripción de café ilimitado.",
      "experiments.cost.caveats.button": "Modelar la suscripción en la calculadora",
      "experiments.cost.cheapest.title": "El experimento más barato",
      "experiments.cost.cheapest.body":
        "Reclamar el perfil de Google Business no cuesta nada en plata y desbloquea la llamada de directions que convierte una búsqueda en Google Maps en un cliente que camina al local. Si solo se corre un experimento en las primeras 72 horas, es este. El tracker te deja marcarlo En curso de inmediato, y Aprobado el día que aparezcan llamadas de directions en el panel de GBP. El mecanismo: directions es la única intención de búsqueda que mapea directo a una visita física, así que el listing es el puente más barato entre intención y tráfico a pie.",
      "experiments.section.gantt": "Gantt de 90 días — cuándo corre cada experimento",
      "experiments.section.gantt.badge": "Sección 05 · Cronograma",
      "experiments.section.gantt.meta": "Barras coloreadas por estado actual",
      "experiments.gantt.intro":
        "Cada barra se posiciona según la regla de corte del experimento. La regla más temprana se dispara el día 7 (el reclamo del perfil de Google Business); la última corre hasta el día 90 (la noche de cata semanal). Usa esta vista para ver cuándo, en la ventana de 90 días, aterrizan las decisiones. Una barra corta es una decisión rápida; una barra larga es una señal lenta que necesita la ventana completa antes de que la apruebes o la mates.",
      "experiments.gantt.col.experiment": "Experimento",
      "experiments.gantt.day-label": "Día {n}",
      "experiments.gantt.legend-phases": "Líneas de fase en los días 30 · 60 · 90",
      "experiments.gantt.short-bars.title": "Por qué algunas barras son cortas",
      "experiments.gantt.short-bars.body":
        "Las barras cortas son buenas — te dicen qué decisiones aterrizan primero. El reclamo del perfil de Google Business es una prueba de 7 días; el cartel de maridaje de galleta es una prueba de 14 días. Una barra larga como la noche de cata semanal es una señal lenta: no la apruebes ni la mates antes del segundo mes. El mecanismo: los rituales de comunidad componen, no pican; una noche de cata sola no te dice nada, dos te dicen una tendencia, tres te dicen si hacerla permanente.",
      "experiments.section.notes.title": "Bitácora de aprendizaje — anota observaciones por experimento",
      "experiments.section.notes.badge": "Sección 06 · Notas",
      "experiments.section.notes.meta": "Auto-guardado en localStorage",
      "experiments.notes.intro":
        "Las notas se quedan solo en este dispositivo. Úsalas para lo que una pastilla de estado no puede capturar: una cita de cliente, una métrica sorpresiva, un momento que el barista te marcó. Cuando marcas un experimento Aprobado o Cancelado, la nota se vuelve el fundamento. El mecanismo: una revisión trimestral sin notas reabre cada decisión; una revisión trimestral con notas lee el fundamento en la voz de quien lo escribió y avanza.",
      "experiments.notes.placeholder":
        "Observaciones para {id} — ¿qué dijeron los clientes? ¿qué te sorprendió?",
      "experiments.notes.stop-rule-label": "Regla de corte",
      "experiments.notes.saved-chars": "{n} caracteres guardados",
      "experiments.notes.empty": "vacío",
      "experiments.notes.callout.title": "Una nota vale mil dashboards",
      "experiments.notes.callout.body":
        "La pastilla de estado te dice qué pasó. La nota te dice por qué. Un experimento graduado sin nota va a ser re-litigado en la próxima revisión trimestral — escribe el fundamento el día que lo marcas Aprobado o Cancelado. El día que decides es el día en que el razonamiento está más fresco; una semana después vas a reconstruir una versión más favorecedora.",
      "experiments.section.crossref.button-roadmap": "Leer Roadmap del Módulo 07",
      "experiments.section.crossref.button-calculator": "Calculadora de Suscripción",
      "experiments.section.crossref.stat.1": "Experimentos registrados",
      "experiments.section.crossref.stat.2": "Activos o propuestos ahora",
      "experiments.section.crossref.stat.3": "Exposición estimada (PEN)",
      "experiments.section.crossref.stat.4": "Decididos (aprobados o cancelados)",

      "view.style-guide.eyebrow": "Herramienta T5 · Interactiva",
      "view.style-guide.title":
        "Explorador de Guía de Estilo — los tokens verificados, en vivo.",
      "style-guide.hero.lede":
        "Cada superficie externa que Ursa saca — la carta, el vinílico del local, la respuesta de WhatsApp, el listing de Rappi, el sitio web cuando llegue — debe usar los mismos dieciséis colores, tres voces tipográficas y un oso. Este explorador es la referencia de trabajo para esa consistencia. Copia un token, mira las voces tipográficas a escala, inspecciona cada componente compartido en cada tono, y revisa el oso en los tamaños y fondos aprobados. Es la contraparte viva del Módulo 01; la auditoría ahí explica por qué existe cada elección, esta vista muestra cómo se ve la elección aplicada.",
      "style-guide.hero.meta.palette": "Paleta",
      "style-guide.hero.meta.palette-value": "{n} tokens",
      "style-guide.hero.meta.type": "Tipografía",
      "style-guide.hero.meta.type-value": "{n} voces",
      "style-guide.hero.meta.mode": "Modo",
      "style-guide.hero.meta.mode-value": "Interactivo · copiar al portapapeles",

      "style-guide.section.color.badge": "Tokens de color",
      "style-guide.section.color.title": "La paleta verificada · toca para copiar",
      "style-guide.section.color.meta": "{n} swatches · marrones · verdes · crema · oro",
      "style-guide.section.color.intro":
        "Cada swatch abajo es un token interactivo. Toca Copiar hex para mandar el valor a tu portapapeles — aparece una confirmación ¡Copiado! por 1.5 segundos. Usa estos valores exactos; no inventes tintes intermedios. El mecanismo: una paleta fija es lo que permite que dieciséis colores se lean como un sistema en vez de como un muestrario. El primer tinte que inventas se vuelve el segundo, y al tercer mes la carta, el vinílico y el gráfico de Instagram ya no comparten vocabulario. Si necesitas un tinte que no está aquí, la respuesta es no — trabaja el layout.",
      "style-guide.color.copy-aria": "Copiar {hex} al portapapeles",
      "style-guide.color.copy-label": "Copiar hex",
      "style-guide.color.copied-label": "¡Copiado!",

      "style-guide.section.typography.badge": "Tipografía",
      "style-guide.section.typography.title": "Especímenes tipográficos · display, cuerpo, etiqueta",
      "style-guide.section.typography.meta": "Cormorant Garamond · Inter · Oswald",
      "style-guide.section.typography.scale-label": "Escala tipográfica · aplicada",
      "style-guide.section.typography.scale-line-1": "Un gramo a la vez.",
      "style-guide.section.typography.scale-line-2": "Tostadores de café de especialidad",
      "style-guide.section.typography.scale-line-3":
        "Café de especialidad, tostado en Miraflores. Cada gramo se pesa, cada origen se nombra.",
      "style-guide.section.typography.scale-line-4":
        "Barra de espresso · Barra de cold-brew · Tostadora a la vista",
      "style-guide.typography.label-display": "Display",
      "style-guide.typography.label-body": "Cuerpo",
      "style-guide.typography.label-label": "Etiqueta",
      "style-guide.typography.note":
        "Tres voces es el sistema. Cormorant Garamond carga el registro de marca — alto contraste, romántico, Art Nouveau. Inter carga la prosa — neutra, legible a cualquier tamaño, la voz que un cliente lee treinta segundos sin fatiga. Oswald carga las etiquetas — condensada, mayúsculas, la voz del letra chica que le da estructura a cartas y señalética. El mecanismo: separar la voz por rol significa que cada fuente solo tiene que hacer un trabajo, así que ninguna se estira hacia un rol que no puede cargar. Añadir una cuarta voz es la forma más común en que las marcas derivan — resístete.",

      "style-guide.section.components.badge": "Librería de componentes",
      "style-guide.section.components.title":
        "Una guía de estilo viva · cada componente compartido, cada tono",
      "style-guide.section.components.meta":
        "Pills · EvidenceTags · Callouts · Card · StatBlock · ProgressBar · BearMark · Divider · CupGlyph",
      "style-guide.components.pill.heading": "Pill · todos los tonos",
      "style-guide.components.pill.default": "Default",
      "style-guide.components.pill.ok": "Ok · forest",
      "style-guide.components.pill.warn": "Warn · oro",
      "style-guide.components.pill.stop": "Stop · terracota",
      "style-guide.components.pill.forest": "Forest",
      "style-guide.components.pill.gold": "Oro",
      "style-guide.components.pill.note":
        "Usa tone=\"gold\" solo para énfasis — nunca para etiquetas de cuerpo. El mecanismo: el oro es el acento que atrae la mirada, así que funciona como highlight, no como default. Una grilla llena de pills doradas se lee como decoración, no como sistema.",
      "style-guide.components.evidence.heading": "EvidenceTag · todos los estados",
      "style-guide.components.evidence.note":
        "Cada afirmación factual del dossier carga uno de estos cuatro estados. El mecanismo: una afirmación sin estado es una aserción; una afirmación con estado es un compromiso con qué tipo de evidencia la respalda. Ve a Fuentes y Evidencia para la cadena de citación.",
      "style-guide.components.callout.heading": "Callout · todos los tonos",
      "style-guide.components.callout.gold.title": "Oro · énfasis",
      "style-guide.components.callout.gold.body":
        "Reservado para la opción recomendada en una elección. Úsalo con parquedad — una vez por sección, nunca dos seguidas. El mecanismo: el oro llama la atención; dos callouts dorados compiten y el lector ignora ambos.",
      "style-guide.components.callout.ok.title": "Ok · verificado",
      "style-guide.components.callout.ok.body":
        "Se usa para confirmar un hecho verificado o un resultado positivo. La cadena de verificación vive en Fuentes y Evidencia.",
      "style-guide.components.callout.warn.title": "Warn · precaución",
      "style-guide.components.callout.warn.body":
        "Se usa para desambiguar, advertir y apostar reversible. Un callout warn dice: léeme antes de actuar, pero puedes actuar.",
      "style-guide.components.callout.stop.title": "Stop · guardrail",
      "style-guide.components.callout.stop.body":
        "Se usa para guardrails duros — cosas que el plan explícitamente no hace. Un callout stop es innegociable; si una táctica lo rompe, la táctica está mal, no el guardrail.",
      "style-guide.components.callout.forest.title": "Forest · espíritu",
      "style-guide.components.callout.forest.body":
        "Se usa para el principio de preservación del espíritu y los guardrails de identidad de marca. Un callout forest invoca al oso, al gramo y al verde.",
      "style-guide.components.card.heading-default": "Card · default",
      "style-guide.components.card.body-default":
        "Superficie para contenido agrupado. Usa highlight para el único ítem recomendado de un conjunto.",
      "style-guide.components.card.heading-highlighted": "Card · destacada",
      "style-guide.components.card.body-highlighted":
        "Anillo dorado + sombra elevada. Reservada para un ítem por grilla — nunca dos. El mecanismo: highlight es una pista de comparación, no una decoración; múltiples highlights colapsan la comparación.",
      "style-guide.components.progress.heading": "ProgressBar",
      "style-guide.components.statblock.heading": "StatBlock · tres tonos",
      "style-guide.components.statblock.demo.1": "Seguidores en Instagram · verificado",
      "style-guide.components.statblock.demo.2": "Precio propuesto de suscripción",
      "style-guide.components.statblock.demo.3": "Hoteles a la redonda",
      "style-guide.components.bearmark.heading":
        "BearMark · ArtNouveauDivider · CupGlyph",
      "style-guide.components.bearmark.note":
        "El divisor ornamental separa solo secciones mayores. Úsalo entre una sección y su conclusión, nunca entre párrafos.",

      "style-guide.section.tokens.badge": "Tokens",
      "style-guide.section.tokens.title": "Espaciado y radio",
      "style-guide.section.tokens.meta": "La grilla invisible que sostiene la marca",
      "style-guide.section.tokens.radius.heading": "Radio",
      "style-guide.section.tokens.spacing.heading": "Espaciado",
      "style-guide.section.tokens.note":
        "Los ocho tokens de espaciado y cinco de radio parecen trivialidad. No lo son. El mecanismo: el ojo lee consistencia antes que contenido, así que una carta cuyos botones son 0.375rem y un vinílico cuyos botones son 0.5rem se registran como marcas distintas aunque los colores calcen. Sostén la línea en estos tokens y el sistema visual se mantiene junto en cualquier impresora, cualquier contratista, cualquier superficie futura.",
      "style-guide.radius.rounded-sm.use": "Apretado · chips, tags",
      "style-guide.radius.rounded-md.use": "Default · inputs, botones",
      "style-guide.radius.rounded-lg.use": "Cards, callouts",
      "style-guide.radius.rounded-xl.use": "Cards de superficie",
      "style-guide.radius.rounded-full.use": "Pills, avatares",

      "style-guide.section.bearmark.badge": "BearMark",
      "style-guide.section.bearmark.title":
        "El oso, en cada tamaño y superficie aprobados",
      "style-guide.section.bearmark.meta":
        "24 · 32 · 48 · 64 · dark-roast + forest-deep · crema + oscuro",
      "style-guide.section.bearmark.cream.pill": "Sobre crema · #F4EBD9",
      "style-guide.section.bearmark.cream.label": "Superficie default",
      "style-guide.section.bearmark.dark.pill": "Sobre oscuro · #211208",
      "style-guide.section.bearmark.dark.label": "Footer / overlay de hero",
      "style-guide.section.bearmark.callout.title": "Reglas de tinte del oso",
      "style-guide.section.bearmark.callout.body":
        "Sobre superficies crema y papel, usa dark-roast en tamaños chicos (≤ 32) y forest-deep en grandes (≥ 48). Sobre superficies oscuras (espresso, forest-deep), usa oro en tamaños chicos y crema en grandes. Terracota está aprobado solo como acento de campaña — nunca como tinte default del oso. El mecanismo: un oso chico sobre crema necesita el contraste más oscuro para quedar legible; un oso grande sobre crema necesita el verde más calmado para no dominar el layout. Invertir estas reglas hace que el oso grite o desaparezca.",

      "style-guide.section.guardrails.badge": "Guardrails",
      "style-guide.section.guardrails.title": "Uso: hacer y no hacer",
      "style-guide.section.guardrails.meta": "La lista corta que mantiene a la marca intacta",
      "style-guide.section.guardrails.do.heading": "Hacer",
      "style-guide.section.guardrails.dont.heading": "No hacer",
      "style-guide.section.guardrails.do.1": "Mantén al oso sobre crema, papel o superficies dark-roast — el brillo dorado se lee claro.",
      "style-guide.section.guardrails.do.2": "Usa Cormorant Garamond solo para titulares display y nombres de ítems de carta.",
      "style-guide.section.guardrails.do.3": "Reserva el oro para énfasis — eyebrows, hairlines, los brillos del oso.",
      "style-guide.section.guardrails.do.4": "Empareja verde forest-deep con crema para callouts y fondos de sección.",
      "style-guide.section.guardrails.do.5": "Usa el ArtNouveauDivider solo entre secciones mayores — nunca dentro de párrafos.",
      "style-guide.section.guardrails.do.6": "Pon las etiquetas Oswald a ≥ 0.66rem con tracking ≥ 0.12em — mayúsculas es obligatorio.",
      "style-guide.section.guardrails.dont.1": "No pongas al oso sobre azul o índigo — rompen el sistema de marrones y verdes.",
      "style-guide.section.guardrails.dont.2": "No uses Cormorant Garamond para texto de cuerpo — su contraste lastima la legibilidad de formato largo.",
      "style-guide.section.guardrails.dont.3": "No tintes al oso con colores fuera de los cuatro aprobados (dark-roast, forest-deep, oro, terracota).",
      "style-guide.section.guardrails.dont.4": "No uses oro para fondos grandes — pierde su rol de énfasis.",
      "style-guide.section.guardrails.dont.5": "No introduzcas una segunda display face — tres voces (Cormorant / Inter / Oswald) es el sistema.",
      "style-guide.section.guardrails.dont.6": "No uses al oso como sticker decorativo sin claro espacio para respirar.",

      "style-guide.section.crossref.badge": "Referencia",
      "style-guide.section.crossref.title": "Cruza la referencia con el módulo de auditoría",
      "style-guide.section.crossref.body":
        "Este explorador es la contraparte interactiva del Módulo 01. Abre la auditoría para el análisis completo de consistente / inconsistente / distintivo / faltante, y los tres niveles de evolución de marca. La auditoría explica por qué existe cada token; esta vista muestra cómo se ve cada token aplicado.",
      "style-guide.section.crossref.button": "Abrir Módulo 01",
      "style-guide.section.crossref.stat.1": "Tokens de paleta listos para copiar",
      "style-guide.section.crossref.stat.2": "Voces tipográficas, tres roles cada una",
      "style-guide.section.crossref.stat.3": "Tamaños aprobados de BearMark",
      "style-guide.section.crossref.stat.4": "Guardrails de hacer y no hacer",
      "style-guide.section.crossref.snapshot":
        "Verificado · snapshot 2026-08-01 · Ursa Coffee Roasters, Miraflores",

      "view.budget.eyebrow": "Herramienta T6 · Interactiva",
      "view.budget.title":
        "Asignador de Presupuesto de Marketing — compara, edita y pon a prueba tres escenarios en PEN.",

      "view.origin-atlas.eyebrow": "Herramienta T7 · Interactiva",
      "view.origin-atlas.title": "Atlas de Orígenes de Café",

      "view.roi.eyebrow": "Herramienta T8 · Interactiva",
      "view.roi.title":
        "Tablero de ROI — modela el retorno de cada canal de marketing con rangos de confianza.",

      "view.campaign-builder.eyebrow": "Herramienta T9 · Asistente interactivo",
      "view.campaign-builder.title":
        "Constructor de Campañas — de oferta a brief en seis pasos",

      "view.spirit-checker.eyebrow": "Herramienta T10 · Guardián de identidad interactivo",
      "view.spirit-checker.title":
        "Verificador del Espíritu — ¿esta táctica cuida al oso, el gramo y el verde?",

      "view.swot.eyebrow": "Herramienta T11 · Análisis competitivo interactivo",
      "view.swot.title":
        "Matriz SWOT de Competidores — dónde está Ursa y hacia dónde puede moverse",

      "view.pilot.eyebrow": "Herramienta T12 · Tablero del piloto",
      "view.pilot.title":
        "Tablero del Piloto Ursa Mañana — sigue la suscripción de S/. 20/mes mientras corre",

      "view.scorecard.eyebrow":
        "Herramienta T13 · Compilación ejecutiva de una página",
      "view.scorecard.title":
        "Tarjeta de Auditoría de Marca — toda la imagen en una página",

      /* ---- Herramienta T9 · Constructor de Campañas (cuerpo profundizado + copy de sección) ---- */
      "campaign-builder.hero.lede":
        "¿Qué campaña lanza Ursa a continuación, y cómo se mantiene honesta? Este asistente camina al dueño por seis pasos — oferta, audiencia, canal, métrica, presupuesto, brief — tomando cada opción del playbook verificado de Ursa (seis ofertas, seis audiencias, ocho canales, seis métricas que se repiten a lo largo de los Módulos 03, 04 y 05). La salida es un brief de texto plano con la oferta, la audiencia, el canal, la métrica de éxito, el presupuesto mensual y una regla de parada ya embebida. Cópialo, pásaselo a quien ejecuta la campaña — un barista, un creador, o tú mismo — y deja que la regla de parada, no el ánimo del día, decida si escalar o matar.",
      "campaign-builder.meta.steps": "Pasos",
      "campaign-builder.meta.steps-value": "6 · oferta → brief",
      "campaign-builder.meta.source": "Fuente",
      "campaign-builder.meta.source-value": "Playbook verificado de Ursa",
      "campaign-builder.meta.output": "Salida",
      "campaign-builder.meta.output-value": "Brief de texto copiable",

      "campaign-builder.step.offer.label": "Oferta",
      "campaign-builder.step.audience.label": "Audiencia",
      "campaign-builder.step.channel.label": "Canal",
      "campaign-builder.step.metric.label": "Métrica",
      "campaign-builder.step.budget.label": "Presupuesto",
      "campaign-builder.step.summary.label": "Brief",

      "campaign-builder.step.offer.title": "Elige la oferta",
      "campaign-builder.step.offer.desc":
        "¿Qué recibe realmente el cliente? Cada oferta está anclada con verdad contra el total à la carte — si el ancla no se puede defender en una sola frase, es un descuento disfrazado de oferta, no una oferta real.",
      "campaign-builder.step.audience.title": "Elige la audiencia",
      "campaign-builder.step.audience.desc":
        "¿Para quién es esta campaña? Cada persona mapea a un job-to-be-done distinto — un ritual matutino, un descubrimiento turístico, una sesión de trabajo remoto, una curiosidad de origen, una necesidad mayorista de oficina, la primera taza de un huésped. Elige una; una campaña que apunta a todos no apunta a nadie.",
      "campaign-builder.step.channel.title": "Elige el canal",
      "campaign-builder.step.channel.desc":
        "¿Dónde se encontrará la audiencia con la oferta? Empareja el alcance y el costo del canal con el presupuesto — canales gratuitos (Google Business Profile, WhatsApp) antes que pagados, propios (Instagram) antes que alquilados (Meta ads), en local (eventos, catas) antes que outbound. Un canal que cuesta S/. 0 y llega a la persona correcta siempre le gana a uno que cuesta S/. 1,800 y llega a la persona equivocada.",
      "campaign-builder.step.metric.title": "Elige la métrica",
      "campaign-builder.step.metric.desc":
        "¿Cómo sabrás que funcionó? Elige una métrica primaria y un objetivo — una canasta de métricas hace imposible decidir si escalar o matar. El brief construye la regla de parada automáticamente a partir del objetivo.",
      "campaign-builder.step.budget.title": "Define el presupuesto mensual",
      "campaign-builder.step.budget.desc":
        "Empareja el costo del canal con un gasto mensual realista. Lean arranca en S/. 500; Growth puede llegar a S/. 3,000. La disciplina: elige un número que la cafetería pueda sostener 90 días sin titubear — cortar una campaña en la semana seis desperdicia las primeras seis semanas y rompe la ventana de medición de la regla de parada.",
      "campaign-builder.step.budget.label-monthly": "Presupuesto mensual",
      "campaign-builder.step.budget.lean": "Lean · S/. 500",
      "campaign-builder.step.budget.growth": "Growth · S/. 3,000",
      "campaign-builder.step.budget.tier-lean": "Lean",
      "campaign-builder.step.budget.tier-moderate": "Moderado",
      "campaign-builder.step.budget.tier-growth": "Growth",

      "campaign-builder.step.summary.title": "Tu brief de campaña",
      "campaign-builder.step.summary.desc":
        "El brief es el contrato entre el dueño y quien ejecuta la campaña. Si el operador no puede repetir la oferta, audiencia, canal, métrica, presupuesto y regla de parada a partir del brief solo, el brief está muy largo — recórtalo. Copia y entrega.",

      "campaign-builder.offer.ursamanana.name": "Suscripción Ursa Mañana",
      "campaign-builder.offer.ursamanana.desc": "S/. 20/mes café ilimitado Lun–Vie 7–10am + 20% off en acompañamientos matutinos",
      "campaign-builder.offer.ursamanana.anchor": "S/. 20/mes vs S/. 60/mes à la carte",
      "campaign-builder.offer.tasting.name": "Cata de Tres Orígenes",
      "campaign-builder.offer.tasting.desc": "Tres pour-over + muestra de grano + tarjeta de historia",
      "campaign-builder.offer.tasting.anchor": "S/. 28 vs S/. 42 à la carte",
      "campaign-builder.offer.pairing.name": "El oso recomienda pairing",
      "campaign-builder.offer.pairing.desc": "Bebida con nombre + combo de cookie o financier con 15% off",
      "campaign-builder.offer.pairing.anchor": "S/. 18 vs S/. 21 à la carte",
      "campaign-builder.offer.hotelcard.name": "Tarjeta de origen para conserjes",
      "campaign-builder.offer.hotelcard.desc": "Tarjeta con marca + cupón de primera taza gratis para 8 hoteles",
      "campaign-builder.offer.hotelcard.anchor": "Primera taza gratis vs S/. 14 regular",
      "campaign-builder.offer.gramweek.name": "Gramo de la Semana",
      "campaign-builder.offer.gramweek.desc": "Destacado semanal de microlote + descuento en grano retail",
      "campaign-builder.offer.gramweek.anchor": "S/. 38 bolsa de grano vs S/. 48 retail",
      "campaign-builder.offer.cupping.name": "Cata mensual nocturna",
      "campaign-builder.offer.cupping.desc": "Cata guiada de 4 orígenes + pairing de pastelería",
      "campaign-builder.offer.cupping.anchor": "S/. 35 ticket vs S/. 70 valor",

      "campaign-builder.audience.morning.name": "El Regular Matutino",
      "campaign-builder.audience.morning.desc": "Vive o trabaja en Miraflores; llega 7–8am; quiere una taza rápida y deliberada.",
      "campaign-builder.audience.tourist.name": "El Turista Explorador",
      "campaign-builder.audience.tourist.desc": "De visita en Lima por 2–4 días; quiere un local de autoría para etiquetar y recomendar.",
      "campaign-builder.audience.remote.name": "El Remote Worker",
      "campaign-builder.audience.remote.desc": "Necesita un tercer lugar con Wi-Fi por 90+ min; valora un lado tranquilo.",
      "campaign-builder.audience.curious.name": "El Curioso del Café",
      "campaign-builder.audience.curious.desc": "Quiere aprender origen y proceso; compra grano retail; va a catas.",
      "campaign-builder.audience.office.name": "Oficina / B2B",
      "campaign-builder.audience.office.desc": "Coworking o gerente de oficina abasteciéndose de grano para 10–30 personas.",
      "campaign-builder.audience.hotel.name": "Conserje de hotel / huésped",
      "campaign-builder.audience.hotel.desc": "Conserje recomendando cafeterías; huéspedes a distancia caminable.",

      "campaign-builder.channel.instagram.name": "Instagram Reels + Stories",
      "campaign-builder.channel.instagram.reach": "4.7k seguidores + descubrimiento",
      "campaign-builder.channel.instagram.cost": "S/. 0 (in-house)",
      "campaign-builder.channel.meta.name": "Meta paid social (radio 3km)",
      "campaign-builder.channel.meta.reach": "10–30k impresiones",
      "campaign-builder.channel.meta.cost": "S/. 600–1,800/mes",
      "campaign-builder.channel.creator.name": "Piloto de creadores (3 micro-creadores)",
      "campaign-builder.channel.creator.reach": "5–30k cada uno",
      "campaign-builder.channel.creator.cost": "S/. 1,200–3,000",
      "campaign-builder.channel.google.name": "Google Business Profile",
      "campaign-builder.channel.google.reach": "Maps + búsqueda",
      "campaign-builder.channel.google.cost": "S/. 0 (propio)",
      "campaign-builder.channel.whatsapp.name": "Lista de WhatsApp con consentimiento",
      "campaign-builder.channel.whatsapp.reach": "Clientes existentes",
      "campaign-builder.channel.whatsapp.cost": "S/. 0–150",
      "campaign-builder.channel.hotel.name": "Tarjetas para conserjes (8 hoteles)",
      "campaign-builder.channel.hotel.reach": "Huéspedes turistas",
      "campaign-builder.channel.hotel.cost": "S/. 200–400",
      "campaign-builder.channel.rappi.name": "Menú + bundles en Rappi",
      "campaign-builder.channel.rappi.reach": "Usuarios de delivery",
      "campaign-builder.channel.rappi.cost": "S/. 0–400",
      "campaign-builder.channel.event.name": "Evento en local / cata",
      "campaign-builder.channel.event.reach": "15–30 asistentes",
      "campaign-builder.channel.event.cost": "S/. 200–560",

      "campaign-builder.metric.visits.name": "Visitas al local",
      "campaign-builder.metric.visits.desc": "Tráfico atribuible a la campaña",
      "campaign-builder.metric.visits.target": "+15% vs baseline",
      "campaign-builder.metric.profile.name": "Visitas / guardados de perfil",
      "campaign-builder.metric.profile.desc": "Vistas al perfil de Instagram + guardados de post",
      "campaign-builder.metric.profile.target": "+30% vs baseline",
      "campaign-builder.metric.aov.name": "Ticket promedio",
      "campaign-builder.metric.aov.desc": "Gasto por transacción durante la ventana de campaña",
      "campaign-builder.metric.aov.target": "+S/. 2–4",
      "campaign-builder.metric.repeat.name": "Visitas repetidas (7 días)",
      "campaign-builder.metric.repeat.desc": "% que vuelve dentro de 7 días de la primera visita",
      "campaign-builder.metric.repeat.target": "≥ 35%",
      "campaign-builder.metric.tags.name": "Tags / menciones UGC",
      "campaign-builder.metric.tags.desc": "Tags a @ursacoffeeperu por semana",
      "campaign-builder.metric.tags.target": "≥ 5/semana",
      "campaign-builder.metric.reviews.name": "Reseñas Google / TripAdvisor",
      "campaign-builder.metric.reviews.desc": "Reseñas nuevas por mes",
      "campaign-builder.metric.reviews.target": "≥ 8/mes",

      "campaign-builder.brief.title": "Brief en vivo",
      "campaign-builder.brief.row.offer": "Oferta",
      "campaign-builder.brief.row.audience": "Audiencia",
      "campaign-builder.brief.row.channel": "Canal",
      "campaign-builder.brief.row.metric": "Métrica",
      "campaign-builder.brief.row.budget": "Presupuesto",
      "campaign-builder.brief.hint-all-set": "Todo listo. El brief se actualiza mientras eliges.",
      "campaign-builder.brief.hint-select": "Elige {step} para continuar.",

      "campaign-builder.brief.output.header": "URSA COFFEE — BRIEF DE CAMPAÑA",
      "campaign-builder.brief.output.offer-label": "OFERTA",
      "campaign-builder.brief.output.audience-label": "AUDIENCIA",
      "campaign-builder.brief.output.channel-label": "CANAL",
      "campaign-builder.brief.output.metric-label": "MÉTRICA",
      "campaign-builder.brief.output.budget-label": "PRESUPUESTO",
      "campaign-builder.brief.output.reach-label": "Alcance",
      "campaign-builder.brief.output.cost-label": "Costo",
      "campaign-builder.brief.output.target-label": "objetivo",
      "campaign-builder.brief.output.stop-rule-label": "REGLA DE PARADA",
      "campaign-builder.brief.output.stop-rule-template": "Mata si {metric} no sube {target} en 30 días.",
      "campaign-builder.brief.output.footer": "— Compilado con el Constructor de Campañas de Ursa",

      "campaign-builder.action.reset": "Reiniciar",
      "campaign-builder.action.back": "Atrás",
      "campaign-builder.action.next": "Siguiente",
      "campaign-builder.action.view-roadmap": "Ver roadmap",
      "campaign-builder.action.copy": "Copiar brief",
      "campaign-builder.action.copied": "Copiado",

      "campaign-builder.callout.stop-rule.title": "La regla de parada es la disciplina",
      "campaign-builder.callout.stop-rule.body":
        "Cada brief termina con una regla de parada: mata la campaña si la métrica no ha subido su objetivo en 30 días. Treinta días es la ventana más corta en la que el algoritmo de Instagram, la señal de comportamiento de Google Business Profile y el hábito de un regular de Miraflores pueden registrar cambio. Duplicar la apuesta en una campaña que no levantó — «dale otra semana» — es la forma más común en que el marketing de presupuesto chico falla. Documenta lo que no funcionó y avanza; la próxima campaña hereda el aprendizaje, no el gasto.",

      /* ---- Herramienta T10 · Verificador del Espíritu (cuerpo profundizado + copy de sección) ---- */
      "spirit-checker.hero.lede":
        "Antes de que cualquier táctica nueva salga — un happy hour, un creative de paid social, un bundle de Rappi, un ítem nuevo de carta — pásala por este verificador. Ocho preguntas a lo largo de los tres pilares de identidad de Ursa (Oso, Gramo, Verde) producen un puntaje compuesto y un veredicto. La premisa del marco: el oso, el gramo y el verde no son preferencias estéticas sino el foso — los competidores pueden copiar la oferta y gastar más en distribución, pero no pueden copiar el personaje. La regla es la línea roja: si una táctica erosiona cualquier pilar por debajo de 50%, no sale sin revisión. La limitación: el verificador puntúa tácticas, no gusto — un puntaje alto en una táctica fuera de tono sigue siendo una táctica fuera de tono.",
      "spirit-checker.meta.pillars": "Pilares",
      "spirit-checker.meta.pillars-value": "Oso · Gramo · Verde",
      "spirit-checker.meta.questions": "Preguntas",
      "spirit-checker.meta.questions-value": "8 · peso 1–3",
      "spirit-checker.meta.threshold": "Umbral",
      "spirit-checker.meta.threshold-value": "≥ 50% por pilar",

      "spirit-checker.tactic.label": "Táctica a verificar",
      "spirit-checker.tactic.placeholder": "ej. «Happy hour: 2×1 en espressos de 5–7pm»",
      "spirit-checker.tactic.helper":
        "Describe la táctica en una línea. Luego responde las {n} preguntas de abajo con honestidad — el verificador solo funciona si lo haces.",

      "spirit-checker.questions.title": "Las {n} preguntas",
      "spirit-checker.questions.counter": "{n}/{total} respondidas",

      "spirit-checker.q.q1.question": "¿La táctica usa o muestra el motivo del oso (mascota, huella, personaje)?",
      "spirit-checker.q.q1.help":
        "El oso es el activo más apropiable de Ursa — ningún competidor en Lima tiene un personaje animal. Usarlo no es decoración; es el refuerzo de marca más barato disponible.",
      "spirit-checker.q.q2.question": "¿La táctica podría confundirse con la de una cafetería genérica si le quitaras el oso?",
      "spirit-checker.q.q2.help":
        "Si sí, la táctica no está anclada en el oso — se apoya en commodity en vez de en identidad. Un Reel que cualquier cafetería de Lima podría republicar es un Reel que no se ha ganado el nombre de Ursa.",
      "spirit-checker.q.q3.question": "¿La táctica refuerza el ritual de pesaje «un gramo a la vez» o la artesanía paciente?",
      "spirit-checker.q.q3.help":
        "El gramo es el ethos de craft — pesaje visible, preparación deliberada, sin atajos. Mostrar la balanza, nombrar la dosis, bajar el ritmo del pour: cada uno es un pequeño refuerzo del ritual.",
      "spirit-checker.q.q4.question": "¿La táctica acelera o commodifica el café (p.ej. «la taza más rápida», «sin espera»)?",
      "spirit-checker.q.q4.help":
        "La velocidad como promesa de vendedor erosiona el pilar del gramo. La eficiencia detrás de la barra está bien; prometer «la taza más rápida» al cliente no — enmarca la variable equivocada.",
      "spirit-checker.q.q5.question": "¿La táctica usa la paleta verificada (cafés, verdes, crema, oro)?",
      "spirit-checker.q.q5.help":
        "Nada de azul, nada de índigo — la paleta es una elección no-default deliberada. Caer en Instagram-azul o en café-beige genérico en un solo asset entrena al ojo para esperar menos de Ursa.",
      "spirit-checker.q.q6.question": "¿La táctica respeta el lenguaje visual Art Nouveau / artesanal?",
      "spirit-checker.q.q6.help":
        "Art Nouveau = bordes ornamentales, tipografía display serif (Cormorant Garamond), motivos botánicos, acentos en oro. Una táctica que los cambia por sans-serif y color plano no se está modernizando; se está de-identificando.",
      "spirit-checker.q.q7.question": "¿La táctica hace referencia a la tostadora propia o al teatro de dos barras?",
      "spirit-checker.q.q7.help":
        "La tostadora en el piso y las barras de espresso + coldbrew son la prueba de craft — el único activo en el local que ningún competidor puede montar en una semana. Una táctica que ignora ambas está dejando la evidencia más fuerte sobre la mesa.",
      "spirit-checker.q.q8.question": "¿Un regular reconocería esto como «algo que Ursa haría»?",
      "spirit-checker.q.q8.help":
        "El reconocimiento del regular es la prueba real de marca — no la intención del dueño. Si una táctica necesita explicación para un regular, ya falló la prueba de reconocimiento; revisa antes de lanzar.",

      "spirit-checker.option.yes": "Sí",
      "spirit-checker.option.no": "No",
      "spirit-checker.option.na": "N/A",

      "spirit-checker.weight.label": "peso {n}",

      "spirit-checker.pillar.bear.label": "Oso",
      "spirit-checker.pillar.bear.desc": "La mascota, la huella, el personaje",
      "spirit-checker.pillar.gram.label": "Gramo",
      "spirit-checker.pillar.gram.desc": "«Un gramo a la vez» — el ritual de pesaje",
      "spirit-checker.pillar.green.label": "Verde",
      "spirit-checker.pillar.green.desc": "Paleta, Art Nouveau, craft de tostadora",

      "spirit-checker.action.check": "Verifica el espíritu",
      "spirit-checker.action.clear": "Limpiar respuestas",
      "spirit-checker.action.prompt":
        "Responde las {n} preguntas, luego toca «Verifica el espíritu».",

      "spirit-checker.score.title": "Puntaje del espíritu",
      "spirit-checker.score.composite-label": "Compuesto / 100",

      "spirit-checker.verdict.preserved.label": "Espíritu preservado",
      "spirit-checker.verdict.preserved.desc":
        "La táctica protege los tres pilares. Puede salir — documenta en una línea por qué pasó, para que la próxima táctica herede el razonamiento y no solo el veredicto.",
      "spirit-checker.verdict.conditional.label": "Condicional — revisa antes de lanzar",
      "spirit-checker.verdict.conditional.desc":
        "Uno o más pilares están bajo el umbral seguro. La táctica no sale así — revísala para fortalecer el pilar más débil y vuelve a verificar. Saltarse la revisión y lanzar igual es el modo de fracaso que este verificador existe para prevenir.",
      "spirit-checker.verdict.at-risk.label": "En riesgo — no lanzar así",
      "spirit-checker.verdict.at-risk.desc":
        "Un pilar está mal erosionado. Esta táctica diluiría la identidad de Ursa incluso si levantara la métrica que se propuso levantar. Mátala, o replanteala empezando por uno de los tres pilares — oso, gramo o verde — y vuelve a verificar antes de traerla de vuelta.",

      "spirit-checker.callout.rule.title": "La regla de preservación del espíritu",
      "spirit-checker.callout.rule.body":
        "Cuando una táctica obliga a elegir entre proteger la identidad de Ursa y perseguir una jugada de crecimiento genérica, este dossier siempre elige al oso, el gramo y el verde. El razonamiento no es preferencia estética sino economía: la identidad es el foso, y un foso erosionado por el crecimiento de un trimestre no se puede reconstruir en el siguiente. Un pilar bajo 50% es una línea roja — no una sugerencia.",

      "spirit-checker.scale.title": "Escala de veredicto",
      "spirit-checker.scale.preserved": "≥ 70% por pilar — espíritu preservado, puede salir.",
      "spirit-checker.scale.conditional": "50–69% — condicional; revisa el pilar débil.",
      "spirit-checker.scale.at-risk": "< 50% — en riesgo; no lanzar así.",

      /* ---- Herramienta T11 · Matriz SWOT (cuerpo profundizado + copy de sección) ---- */
      "swot.hero.lede":
        "Un gráfico 2×2 de {n} competidores de Miraflores y Lima sobre los dos ejes que el dossier realmente investigó: Distintividad de marca (oso, gramo, verde, Art Nouveau, tostadora propia — los activos verificados en el Módulo 01) versus Alcance de distribución (locales, canales, presencia de reseñas — la huella verificada en el Módulo 02). Los puntajes son juicio de investigación, no datos de market-share: un punto medio de 50 separa «alto» de «bajo» en cada eje, y las posiciones relativas importan más que los números absolutos. Toca cualquier punto para leer su SWOT y la implicación para Ursa. Lo que no está en este gráfico: precio, revenue, headcount — cambiarían el análisis, y se excluyen a propósito porque Ursa no puede actuar sobre ellos hoy.",
      "swot.meta.competitors": "Competidores",
      "swot.meta.competitors-value": "{n} graficados",
      "swot.meta.axes": "Ejes",
      "swot.meta.axes-value": "Distintividad × Alcance",
      "swot.meta.ursa": "Ursa",
      "swot.meta.ursa-value": "Alto craft · bajo alcance",

      "swot.matrix.title": "Distintividad × Alcance",
      "swot.matrix.legend-ursa": "Ursa",
      "swot.matrix.legend-competitor": "Competidores",
      "swot.matrix.axis-y": "Distintividad →",
      "swot.matrix.axis-x": "Alcance de distribución →",

      "swot.quadrant.top-right.label": "Líderes",
      "swot.quadrant.top-right.desc":
        "Alto craft + alto alcance — el benchmark hacia el que se mueve Ursa.",
      "swot.quadrant.top-left.label": "Joyas ocultas",
      "swot.quadrant.top-left.desc":
        "Alto craft + bajo alcance — el barrio de Ursa; la brecha es distribución, no identidad.",
      "swot.quadrant.bottom-right.label": "Cadenas escaladas",
      "swot.quadrant.bottom-right.desc":
        "Menor craft + alto alcance — la jugada de volumen; alcance sin foso de identidad.",
      "swot.quadrant.bottom-left.label": "Indiferenciados",
      "swot.quadrant.bottom-left.desc":
        "Menor craft + bajo alcance — vulnerables; los competidores más cercanos en la cuadra de Ursa están acá.",

      "swot.readout.distinctiveness": "Distintividad",
      "swot.readout.reach": "Alcance",

      "swot.swot-cell.strengths": "Fortalezas",
      "swot.swot-cell.weaknesses": "Debilidades",
      "swot.swot-cell.opportunities": "Oportunidades",
      "swot.swot-cell.threats": "Amenazas",

      "swot.ursa-implication.heading": "Implicación para Ursa",
      "swot.quick-switch.heading": "Saltar a",

      "swot.callout.takeaway.title": "La lectura estratégica",
      "swot.callout.takeaway.body":
        "Ursa está en el cuadrante de Joyas ocultas — alta distintividad, bajo alcance. El trabajo del plan es mover a Ursa hacia la derecha sin bajarla. Hacia la derecha es concreto: reclamar el Google Business Profile (gratis, el mismo día, recupera tráfico de búsqueda que hoy aterriza en Punto Café y Neira), lanzar el piloto de creadores (construye alcance con el oso como activo), y correr el pipeline de conserjes de hotel (demanda turística que ya camina por Alcanfores 183). Hacia abajo es el modo de fracaso: servicio con feel de cadena, commoditización de grano retail, o adquisición pagada antes de que la base orgánica esté puesta. Ningún competidor ocupa el espacio de Ursa; la brecha es distribución, no identidad.",

      /* ---- Módulo 05 · Laboratorio de Contenido Viral (copy profundizado) ---- */
      "viral.lede":
        "Veintiséis conceptos de contenido y diez guiones listos para producir — cada uno anclado en un activo verificado de Ursa: las bebidas con nombre, la tostadora a la vista, la marca del oso y Alcanfores 183. Diseñados para aprender barato, no para perseguir viralidad.",
      "viral.meta.concepts": "Conceptos",
      "viral.meta.scripts": "Guiones",
      "viral.meta.series": "Series",
      "viral.meta.pilot": "Piloto",
      "viral.meta.pilot-value": "4 semanas",

      "viral.disclaimer.title": "Cómo usar este módulo",
      "viral.disclaimer.body":
        "La viralidad no es una meta que podamos prometer — depende de algoritmos, humor del público y timing fuera del control de cualquiera. Lo que sí podemos prometer es aprendizaje barato: publicar chico, medir honesto, amplificar lo que supere la línea base por un múltiplo y matar lo que no. Sin retainers de agencia, sin seguidores comprados, sin reacciones fabricadas. El oso, la barra y los datos que Ursa realmente gana son los únicos insumos.",

      "viral.section.01.title": "Los 26 conceptos de contenido",
      "viral.section.01.meta": "Explorar · asignar · reutilizar",
      "viral.section.01.lede":
        "Cada concepto abajo es lo suficientemente chico para filmarlo en casa, lo suficientemente específico para que un competidor no pueda reproducirlo honestamente, y está arraigado en un detalle verificado de Ursa — una bebida con nombre, el ritual del pesaje, un hito de Miraflores o el oso mismo. Ninguno requiere actores pagados ni estudio; todos se filman con un celular en menos de una hora. La nota bajo cada tarjeta nombra el activo específico — el lema, la dirección, el bio de dos barras, la bebida con nombre — que hace el concepto intransferible.",
      "viral.section.01.why-ursa": "Por qué funciona para Ursa",

      "viral.section.02.title": "Diez guiones listos para producir",
      "viral.section.02.meta": "Beats · subtítulo en español · CTA",
      "viral.section.02.lede":
        "Cada guion se filma dentro de la cafetería por los mismos baristas — sin agencia, sin teleprompter más allá de un celular apoyado en la barra. Los beats son el corte; el subtítulo en español y el llamado a la acción son para el cliente y se publican tal cual, en el español que se habla en Lima. Hook primero, marca al final. Cada guion está verificado contra al menos un producto, bebida, dirección o detalle operativo real de Ursa — la nota verde dentro de cada guion lista los ítems exactos, con la fecha del snapshot.",
      "viral.section.02.verified-refs": "{n} refs verificadas",
      "viral.section.02.beats": "Beats",
      "viral.section.02.verified-detail":
        "Refs verificadas de producto y detalle Ursa · snapshot 2026-08-01",
      "viral.section.02.caption-label": "Subtítulo · ES (Perú) · para el cliente",
      "viral.section.02.cta-label": "CTA · ES (Perú) · para el cliente",

      "viral.section.03.title": "Tres series repetibles",
      "viral.section.03.meta": "El ritmo le gana al one-off",
      "viral.section.03.lede":
        "Tres series convierten publicaciones de una vez en un ritmo que tanto el algoritmo como el cliente pueden aprender. El reconocimiento de serie es lo que construye disponibilidad mental: un scroller que vio el episodio uno debe reconocer al instante el episodio dos como la misma serie — misma composición, misma frase de hook, misma tarjeta de cierre. Cada serie abajo trae su cadencia, su concepto y el número de episodios que la cafetería puede sostener sin quemar al barista que la filma.",
      "viral.section.03.episodes": "Episodios",

      "viral.section.04.title": "Tres briefs de creadores",
      "viral.section.04.meta": "Briefs, no maletines",
      "viral.section.04.lede":
        "Tres arquetipos de creador, briefados con los mismos activos y la misma regla: liderar con el oso, el oficio o la suscripción — nunca con un descuento. La cantidad de seguidores es un proxy de alcance, no la meta; la meta es la métrica listada en cada tarjeta (guardados, visitas al perfil, clics en indicaciones, inscripciones). Los tres arquetipos juntos cubren los tres trabajos que Ursa más necesita del contenido — descubrimiento local, credibilidad de oficio y conciencia de la suscripción — sin superponer gasto.",
      "viral.section.04.brief.objective": "Objetivo",
      "viral.section.04.brief.deliverable": "Entregable",
      "viral.section.04.brief.key-message": "Mensaje clave",
      "viral.section.04.brief.assets": "Activos entregados",
      "viral.section.04.brief.metric": "Métrica",

      "viral.section.05.title": "Tres mecanismos UGC",
      "viral.section.05.meta": "Consentimiento primero · siempre",
      "viral.section.05.lede":
        "Tres mecanismos UGC invitan al cliente a hacer la filmación. La regla de consentimiento es innegociable: opt-in explícito antes de cualquier republicación, permiso de los padres para menores, y una regla de etiqueta pública que el cliente puede revocar en cualquier momento. Cada mecanismo abajo nombra su disparador, su recompensa y su ruta de consentimiento — el barista no debería tener que improvisar ninguno de los tres.",
      "viral.section.05.consent": "Consentimiento",

      "viral.section.06.title": "El calendario piloto de cuatro semanas",
      "viral.section.06.meta": "Un concepto por día · Stories diarias",
      "viral.section.06.format-key": "Clave de formato:",
      "viral.section.06.production-key": "Factibilidad de producción:",
      "viral.section.06.rest-day": "Día de descanso · solo Stories",
      "viral.section.06.every-day-body":
        "Todos los días: el Ritual Matutino del Oso corre en Stories (C17) junto al concepto destacado. Dos Reels por semana es el ritmo máximo sostenible para un barista con un celular.",
      "viral.section.06.cadence.title": "Por qué esta cadencia",
      "viral.section.06.cadence.body":
        "Lun/Mié/Vie llevan Reels porque los Reels son el motor de descubrimiento en Instagram — el formato con más probabilidad de llegar a un no-seguidor. Mar/Jue llevan Carruseles porque los Carruseles ganan guardados y compartidos, las dos métricas más predictivas de visitas futuras. Sábado lleva un Evento o UGC porque ese es el momento humano que el algoritmo no puede falsificar. Domingo es descanso, con solo el ritual diario de Stories. La cadencia es deliberadamente más lenta de lo que recomendaría una agencia de contenido — las agencias cobran por maximizar impresiones; Ursa está pagando por aprender qué impresiones se convierten en clientes.",
      "viral.section.06.feasibility.list-label": "Conceptos del calendario en este nivel",
      "viral.section.06.feasibility.phone.title": "Celular · en casa",
      "viral.section.06.feasibility.phone.body":
        "Celular del barista, luz disponible, sin contratación externa. El default para cualquier concepto que cabe en un solo turno. La mayor parte del calendario está en este nivel.",
      "viral.section.06.feasibility.phone.list":
        "C01, C05, C08, C10, C11, C12, C18, C20, C21, C22, C24, C25, C26 — 13 de 26 conceptos cuestan S/. 0 por shoot.",
      "viral.section.06.feasibility.edit.title": "Celular + edición",
      "viral.section.06.feasibility.edit.body":
        "Todavía en casa, pero requiere setup (gimbal, lente macro, app de lapso de tiempo) y 1–3h de edición en CapCut. Costo único de equipo: S/. 30–110.",
      "viral.section.06.feasibility.edit.list":
        "C02, C03, C04, C09, C13, C14, C15, C16, C19, C23 — 10 de 26 conceptos.",
      "viral.section.06.feasibility.external.title": "Ayuda externa",
      "viral.section.06.feasibility.external.body":
        "No se puede filmar en casa con un celular. O requiere motion-design (C17 oso animado) o gestión de comunidad continua (C06, C07 UGC). Presupuesto: S/. 400–1,200 por ítem.",
      "viral.section.06.feasibility.external.list":
        "C06, C07, C17 — 3 de 26 conceptos. Agéndalos al final; tras su validez, el nivel en casa debe demostrar la cadencia primero.",
      "viral.section.06.rule.title": "La regla de factibilidad del piloto de 4 semanas",
      "viral.section.06.rule.body":
        "El piloto de cuatro semanas abajo agenda diecisiete de veinticuatro espacios en el nivel celular-en-casa — el modo de producción de menor costo y menor dependencia. Los siete espacios de celular-con-edición se reparten uno por semana, nunca consecutivos, para mantener manejables las horas de CapCut. Los tres ítems de ayuda externa se postergan pasado el piloto: el opener animado del Ritual Matutino del Oso se reemplaza por una plantilla estática de Stories para las semanas uno a cuatro, y los dos mecanismos UGC (C06, C07) corren solo si la cadencia en casa se cumple sin quemar al barista. Si la cadencia en casa se resbala en la semana uno, el nivel entero de ayuda externa se corta del piloto — sin renegociación, sin excepciones.",

      "viral.section.07.title": "El método de prueba y amplificación",
      "viral.section.07.meta": "48h · 2× · 3× · matar a 14d",
      "viral.section.07.lede":
        "Cada publicación tiene una ventana de medición de 48 horas contra una línea base móvil construida con las primeras seis publicaciones. Likes, conteo de seguidores y alcance no se optimizan aquí — son métricas de vanidad que no predicen a un cliente caminando hacia Alcanfores 183. Las señales que sí predicen a un cliente futuro son los guardados (intención de volver), los compartidos (intención de recomendar), las visitas al perfil (intención de saber más) y los clics en indicaciones (intención de visitar). El método abajo es deliberadamente mecánico para que el barista no tenga que tomar una decisión bajo presión.",
      "viral.section.07.step01.title": "Publicar y esperar 48h",
      "viral.section.07.step01.body":
        "Publicar en la cadencia de arriba. Medir guardados, compartidos y visitas al perfil en las primeras 48 horas. Construir una línea base móvil después de las primeras seis publicaciones.",
      "viral.section.07.step02.title": "2× la línea base → boost",
      "viral.section.07.step02.body":
        "Si una publicación supera la línea base por 2×, darle boost con S/. 50–150 pagados. Cortar el gasto cuando el costo por guardado supere S/. 4.",
      "viral.section.07.step03.title": "3× la línea base → encargar",
      "viral.section.07.step03.body":
        "Si una publicación supera la línea base por 3×, encargar un seguimiento dentro de 7 días: mismo personaje, mismo formato, un ángulo nuevo. El oso acaba de darte un hit — haz otro.",
      "viral.section.07.step04.title": "Debajo de la línea base a 14d → matar",
      "viral.section.07.step04.body":
        "Cualquier publicación debajo de la línea base después de 14 días se mata — sin segundas pruebas, sin boost. Reemplazar por un concepto nuevo de los 26.",
      "viral.section.07.stat01":
        "Ventana para medir guardados / compartidos / visitas al perfil",
      "viral.section.07.stat02": "Presupuesto de boost pagado por ganador 2×",
      "viral.section.07.stat03": "Umbral de corte para publicaciones bajo la línea base",
      "viral.section.07.callout.title": "Lo que no medimos",
      "viral.section.07.callout.body":
        "Likes, conteo de seguidores y alcance son métricas de vanidad — se sienten bien, se ven bien en un reporte y no predicen a un cliente caminando hacia Alcanfores 183. Guardados, compartidos, visitas al perfil y clics en indicaciones sí predicen. La disciplina de ignorar los primeros tres es lo que hace significativos a los últimos cuatro; sin ella, el equipo deriva a optimizar para aplausos.",

      "viral.closing.title": "El dossier viral completo",
      "viral.closing.body":
        "Abre el HTML imprimible para el Módulo 05 completo — conceptos, guiones, series, briefs, mecanismos UGC, el calendario piloto y el método de amplificación. El dossier imprimible es la fuente de verdad; esta vista es la compañera interactiva.",
      "viral.closing.cta": "Abrir la herramienta interactiva de Calendario de Contenido",

      "viral.feasibility-label.phone": "Celular · en casa",
      "viral.feasibility-label.edit": "Celular + edición",
      "viral.feasibility-label.external": "Ayuda externa",

      /* ---- Módulo 06 · Campañas Creativas (copy profundizado) ---- */
      "creative.lede":
        "Muestras funcionales de HTML, CSS y SVG para quince puntos de contacto — publicaciones sociales, carruseles, Stories, portadas de Reel, posters, cartas, tarjetas de producto, letreros de mesa, tarjetas de loyalty, etiquetas de empaque, tarjetas de info del grano, materiales de evento, imagery de Google y delivery, landing pages y headers de email. El logo oficial nunca se altera ni se falsifica; el glifo geométrico del oso usado aquí es una marca de concepto original, usada como placeholder en este dossier, que se reemplazará por la marca oficial una vez que el dueño entregue el pack de activos.",
      "creative.meta.evolution": "Evolución",
      "creative.meta.evolution-value": "Tres niveles",
      "creative.meta.recommendation": "Recomendación",
      "creative.meta.recommendation-value": "Refinamiento conservador recomendado",
      "creative.meta.logo": "Logo",
      "creative.meta.logo-value": "Sin falsificación",

      "creative.read-first.badge": "6.0 · Leer primero",
      "creative.read-first.title": "Antes de mandar cualquier arte a impresión",
      "creative.read-first.callout-title":
        "Marca de concepto original — no es el logo oficial",
      "creative.read-first.body":
        "El glifo geométrico del oso usado a lo largo de este módulo es una marca de concepto original diseñada para navegación del dossier. No es el logo oficial de Ursa Coffee Roasters. La marca oficial debe venir del pack de activos que entregue el dueño antes de finalizar cualquier producción — esta es la pregunta abierta seis en Fuentes y Evidencia. Todas las muestras abajo usan la marca de concepto como placeholder; en producción, la marca oficial la reemplaza sin cambiar layout, paleta ni tipografía. Ninguna muestra en este módulo altera, parodia ni falsifica el logo oficial.",

      "creative.section.6-1.badge": "6.1 · Evolución de marca",
      "creative.section.6-1.title":
        "Tres niveles de evolución de marca — comparación visual",
      "creative.section.6-1.meta": "Mismo formato · tres intensidades",
      "creative.section.6-1.lede":
        "Los tres niveles de evolución de la sección 1.9 se visualizan abajo usando el mismo formato — una publicación social de una sola imagen — para que la diferencia se vea de inmediato al tamaño de thumbnail, donde ocurren más o menos nueve de cada diez impresiones sociales. Mantener el formato constante es lo que hace honesta la comparación: una muestra Nivel 3 en un layout complejo se vería más distintiva que una Nivel 1 en un layout simple, pero esa distintividad pertenecería al layout, no al nivel.",
      "creative.section.6-1.level1.pill": "Nivel 1 · Conservador",
      "creative.section.6-1.level1.badge": "Recomendado permanente",
      "creative.section.6-1.level1.title": "Papel, tipografía, lema",
      "creative.section.6-1.level1.body":
        "Fondo papel, sin marca de agua, sin filigrana. La identidad la cargan enterita la tipografía y el lema. Menor riesgo. Sistema permanente desde el día uno.",
      "creative.section.6-1.level1.tag1": "Sin marca de agua",
      "creative.section.6-1.level1.tag2": "Tipografía-led",
      "creative.section.6-1.level2.pill": "Nivel 2 · Distintivo",
      "creative.section.6-1.level2.badge": "Capa a 6 meses",
      "creative.section.6-1.level2.title": "Gradiente bosque + marca de agua del oso",
      "creative.section.6-1.level2.body":
        "Gradiente bosque, silueta del oso como marca de agua al 16%, acentos cambian a verde hoja. Distintivo al tamaño de thumbnail. Capa de crecimiento recomendada desde el mes 4.",
      "creative.section.6-1.level2.tag1": "Marca de agua 16%",
      "creative.section.6-1.level2.tag2": "Apropiable en thumbnail",
      "creative.section.6-1.level3.pill": "Nivel 3 · Experimental",
      "creative.section.6-1.level3.badge": "Solo estacional",
      "creative.section.6-1.level3.title": "Constelación + edición numerada",
      "creative.section.6-1.level3.body":
        "Fondo negro espresso, constelación invertida de la Osa Mayor como prima celestial del oso, edición limitada numerada. Solo verano / invierno — nunca un registro permanente.",
      "creative.section.6-1.level3.tag1": "Numerada N° / 200",
      "creative.section.6-1.level3.tag2": "Estacional",
      "creative.section.6-1.recommendation.title": "Recomendación — confirmada",
      "creative.section.6-1.recommendation.body":
        "Nivel 1 como sistema permanente, Nivel 2 como capa de crecimiento desde el mes cuatro, Nivel 3 solo como expresión estacional. La comparación visual deja la razón en claro: el Nivel 1 cuida la identidad a riesgo cero y costo externo cero, el Nivel 2 hace a Ursa inconfundible al tamaño de thumbnail donde ocurren la mayoría de impresiones sociales, y el Nivel 3 estira el sistema por períodos cortos sin romperlo. Saltarse el Nivel 1 para ir directo al Nivel 2 es la razón más común por la que los rebrands fallan — el equipo no tiene a dónde volver cuando la capa experimental rinde menos. Este plan no se salta.",

      "creative.section.6-2.badge": "6.2 · Muestras",
      "creative.section.6-2.title": "Quince puntos de contacto, cuatro familias",
      "creative.section.6-2.meta": "HTML · CSS · SVG",
      "creative.section.6-2.lede":
        "Cada muestra abajo es un layout funcional en HTML/CSS/SVG. Capturas a 2× de resolución producen JPEGs de grado de producción para social; para impresión, el HTML sirve como spec preciso para cualquier diseñador o impresor (colores hex exactos, fuentes con nombre, relaciones de aspecto definidas).",
      "creative.section.6-2.tab.social": "Social",
      "creative.section.6-2.tab.print": "Impresión",
      "creative.section.6-2.tab.packaging": "Empaque",
      "creative.section.6-2.tab.digital": "Digital",

      "creative.section.6-3.badge": "6.3 · Recap",
      "creative.section.6-3.title": "Lo que muestran estas muestras",
      "creative.section.6-3.meta": "Espíritu preservado · riesgo minimizado",
      "creative.section.6-3.stat1":
        "Puntos de contacto diseñados — social, impresión, empaque, digital",
      "creative.section.6-3.stat2":
        "Niveles de evolución de marca con recomendación confirmada",
      "creative.section.6-3.stat3":
        "Alteraciones o falsificaciones del logo oficial de Ursa",
      "creative.section.6-3.stat4":
        "Marca de concepto original usada como placeholder en todo",
      "creative.section.6-3.card1.title": "Identidad protegida",
      "creative.section.6-3.card1.body":
        "Cada muestra cuida al oso, el lenguaje artesanal Art Nouveau, la arquitectura de dos barras y el lema verificado. Ninguna táctica de crecimiento genérica puede romper al oso; si una táctica choca con uno de esos cuatro anclas, la que cambia es la táctica.",
      "creative.section.6-3.card2.title": "Spec lista para impresión",
      "creative.section.6-3.card2.body":
        "Colores hex exactos, fuentes con nombre, relaciones de aspecto definidas. Una captura entregada al impresor alcanza para producir una primera prueba fiel, y el print-to-PDF del navegador valida cada muestra antes de que salga de la cafetería.",
      "creative.section.6-3.card3.title": "Barato de probar",
      "creative.section.6-3.card3.body":
        "La mayoría de las muestras cuesta entre cero y doscientos soles de probar en impresión. La etiqueta del bag de granos y el letrero de mesa juntos cubren las pruebas de historia de origen y de pairing por menos de cien soles — los dos experimentos que más barato validan la tesis de valor percibido del Módulo 01.",
      "creative.section.6-3.callout.title": "Por qué muestras, no solo descripciones",
      "creative.section.6-3.callout.body":
        "Una descripción de un Story verde bosque con CTA dorado deja más o menos veinte decisiones sin resolver — el verde exacto, el dorado exacto, el radio de la esquina, el peso de la fuente, la posición del oso. Una muestra resuelve las veinte a la vez. El dueño puede poner una captura al lado de la prueba del impresor y decir «iguala esto», y el resultado será el dossier, no la interpretación de un traductor.",
      "creative.section.6-3.spirit.title": "Verifica el espíritu",
      "creative.section.6-3.spirit.body":
        "Cruza cualquier muestra contra la auditoría de marca antes de producción.",
      "creative.section.6-3.spirit.cta": "Abrir Módulo 01 · Auditoría de Marca",

      "creative.section.6-4.badge": "6.4 · Pase escéptico",
      "creative.section.6-4.title": "Tres preguntas de escéptico, respondidas",
      "creative.section.6-4.meta": "Anticipa las objeciones obvias",
      "creative.section.6-4.q1.quote":
        "«Estos son layouts HTML, no archivos de producción. ¿Cómo los usa el dueño?»",
      "creative.section.6-4.q1.body":
        "Cada muestra está lista para imprimir vía la función print-to-PDF del navegador. Para social, capturas a resolución 2× producen JPEGs de grado de producción aptos para la compresión de Instagram. Para empaque e impresión, el HTML y CSS sirven como spec sheet preciso — colores hex exactos, fuentes con nombre, relaciones de aspecto definidas — que cualquier impresor en Lima puede seguir sin interpretación. El dueño entrega una captura al impresor y dice «iguala esto»; el dossier es la fuente de verdad, no un brief que se vuelve a traducir.",
      "creative.section.6-4.q2.quote":
        "«Usaron un oso genérico en las muestras. El oso real puede verse totalmente distinto.»",
      "creative.section.6-4.q2.body":
        "Correcto — y dicho explícitamente en la nota «antes de mandar cualquier arte a impresión» al inicio de este módulo. El oso geométrico que se usa aquí es una marca de concepto placeholder, no el logo oficial de Ursa. El pack de activos del dueño (pregunta abierta seis en Fuentes y Evidencia) se requiere antes de finalizar cualquier producción. Una vez que se obtenga la marca oficial, reemplaza a la marca de concepto en cada muestra sin cambiar layout, paleta ni tipografía — el sistema de diseño está hecho para que el cambio sea mecánico, no un rediseño.",
      "creative.section.6-4.q3.quote":
        "«El Nivel 3 con constelación invertida y ediciones numeradas es demasiado cute para una cafetería chica.»",
      "creative.section.6-4.q3.body":
        "Preocupación justa — por eso el Nivel 3 está restringido a expresión estacional y marcado explícitamente como opcional. Si al dueño le parece demasiado cute, el plan se degrada con elegancia: Nivel 1 más Nivel 2 solos producen un sistema completo y distintivo que no requiere la constelación, la edición numerada ni el fondo negro espresso. El Nivel 3 existe solo para los momentos en que el dueño quiere celebrar una temporada, un aniversario o un origen limitado — y se puede cortar sin dejar hueco.",
      "creative.section.6-4.event1.label": "Noches de cata",
      "creative.section.6-4.event1.value": "Primer sábado · mensual",
      "creative.section.6-4.event2.label": "Ventana que recomienda el oso",
      "creative.section.6-4.event2.value": "7:30–10:00am",
      "creative.section.6-4.event3.label": "Base de operaciones",
      "creative.section.6-4.event3.value": "Alcanfores 183, Miraflores",

      "creative.section.6-5.badge": "6.5 · Dossier completo",
      "creative.section.6-5.title": "Abre el dossier HTML imprimible",
      "creative.section.6-5.body":
        "El dossier estático del Módulo 06 contiene las mismas muestras en una sola página HTML imprimible, más la nota sobre activos y el pase de revisión escéptico. Ábrelo para imprimir, capturar o entregar al impresor — el dossier imprimible es la fuente de verdad; esta vista es la compañera interactiva.",
      "creative.section.6-5.compiled": "Módulo 06 compilado 2026-08-01",

      /* ============ MÓDULO 03 · CARTA Y DESARROLLO DE PRODUCTO ============ */
      "menu.hero.lede":
        "Ursa ya tiene un lenguaje de carta propio — cuatro bebidas con nombre de dos tipos (los acuñados Ursagroni y Maracumango; las etiquetas de origen y descriptivas Filtrado Lonya y Durazno Clarificado), el teatro de las dos barras y el hábito del maridaje. Este módulo reconstruye la carta verificada actual y propone trece productos nuevos en siete categorías, cada uno evaluado contra un marco de 16 criterios antes de cualquier prueba — con un por-qué-este-producto, una necesidad-del-cliente, una evidencia del censo, una prueba operativa y una regla de parada explícitos para cada uno. No se inventan costos: solo rangos de escenario en soles, anclados al censo de competidores en 1km.",
      "menu.hero.meta.snapshot": "Snapshot",
      "menu.hero.meta.framework": "Marco",
      "menu.hero.meta.pricing": "Precios",
      "menu.hero.meta.sources": "Fuentes",

      /* Sección 01 — Carta verificada */
      "menu.section.01.badge": "Sección 01",
      "menu.section.01.title": "La carta actual verificada, reconstruida",
      "menu.section.01.meta": "Fuente · Rappi snapshot 2026-08-01",
      "menu.section.01.stat.verified-items": "Ítems con nombre verificados (bebidas + comida)",
      "menu.section.01.stat.categories": "Categorías de carta (Espresso · Coldbrew · Filtrados · Pastelería · Salado)",
      "menu.section.01.stat.range": "Rango de precios verificado en toda la carta",
      "menu.section.01.legend": "Bebida de autor — verificada con nombre",
      "menu.section.01.callout.verified.title": "Qué está verificado y qué está reconstruido",
      "menu.section.01.callout.verified.body":
        "Las bebidas con nombre (Ursagroni, Durazno Clarificado Coldbrew, Maracumango Coldbrew, Filtrado Lonya) y los ítems de comida verificados (financier, empanada, cookies) provienen de publicaciones públicas en Instagram y Facebook. Los ítems estándar de barra de espresso y sus precios se reconstruyen a partir de la carta de delivery de Rappi (snapshot 2026-08-01).",
      "menu.section.01.callout.prices.title": "Los precios exactos pueden cambiar",
      "menu.section.01.callout.prices.body":
        "Los precios marcados con asterisco se infieren de la posición de categoría donde el snapshot de Rappi no los listó directamente. Confirma en la barra antes de citar en cualquier material externo. Los precios de maridaje (La Ursa, La Lonya, La Maracumango) siguen el diseño del dossier y asumen totales a la carta.",
      "menu.section.01.card.ownable.heading": "El lenguaje de carta propio",
      "menu.section.01.card.ownable.b1":
        "Dos nombres acuñados — Ursagroni (Ursa + negroni) y Maracumango (maracuyá + mango). Las otras dos bebidas con nombre (Filtrado Lonya, Durazno Clarificado) usan etiquetas de origen o descriptivas, no nombres acuñados. Esto es una convención de nombres, no un sistema estratégico — no estirarlo más de la cuenta.",
      "menu.section.01.card.ownable.b2":
        "Línea de etiquetado de origen — Filtrado Lonya (Utcubamba, Amazonas, 1,750m, Bourbon lavado) marca la profundidad de procedencia que ningún competidor de Miraflores iguala.",
      "menu.section.01.card.ownable.b3": "Teatro de dos barras — espresso y coldbrew como identidades visibles del counter.",
      "menu.section.01.card.ownable.b4": "Hábito de maridaje — bebidas nombradas junto a su compañera de comida.",
      "menu.section.01.card.ownable.b5": "Estacional a permanente — los favoritos de verano suben a la carta.",

      /* Sección 01 · lente conductual (Sutherland) sobre la carta reconstruida */
      "menu.section.01.callout.behavioral.title": "La lente conductual sobre la carta",
      "menu.section.01.callout.behavioral.body":
        "Desde una perspectiva conductual, la carta ya está haciendo el trabajo de anclaje de Sutherland sin haber sido diseñada para eso. El Chemex de S/. 22 (para dos) hace que el V60 de S/. 12 se sienta razonable; el Ursagroni de S/. 18 hace que el Cortado de S/. 10 parezca un regalito. Las bebidas con nombre — Ursagroni, Maracumango, Filtrado Lonya — son la capa de señalización: cada nombre es una historia que el cliente vuelve a contar, que es la distribución más barata que una cafetería puede comprar. El formato de carta con líneas punteadas es de por sí una señal ritual — esto es una carta, no un lista de precios — y el escudo del oso arriba es el ancla de saliencia que ata cada visita a la misma identidad. Nada de esto cuesta un sol de instalar; ya está ahí. La recomendación es protegerlo, no rediseñarlo.",

      /* Sección 02 — Trece propuestas */
      "menu.section.02.badge": "Sección 02",
      "menu.section.02.title": "Trece propuestas de producto nuevas, evaluadas",
      "menu.section.02.meta": "13 propuestas · 7 categorías · marco de 16 criterios + 4 filas de anclaje al censo",
      "menu.section.02.lede":
        "Cada propuesta abajo se evalúa contra diez filas críticas para la decisión visibles: por qué este producto específico, necesidad del cliente que atiende, evidencia del censo que la respalda, ajuste de marca, concepto de sabor, tiempo de preparación, potencial de margen, prueba operativa, método de prueba de mercado y regla de parada o revisión. Los seis criterios restantes se resumen en la cuadrícula del marco en la Sección 04. El precio siempre se expresa como un rango lean / moderado / growth en soles — nunca un costo inventado — con una justificación anclada al censo para cada rango.",
      "menu.section.02.category.signature-coffee": "Café de autor",
      "menu.section.02.category.cold-coffee": "Café frío",
      "menu.section.02.category.seasonal": "Estacional",
      "menu.section.02.category.non-coffee": "Sin café",
      "menu.section.02.category.pastries": "Pastelería",
      "menu.section.02.category.retail-beans": "Bolsas de café",
      "menu.section.02.category.experiences": "Experiencias",
      "menu.section.02.scenario.heading": "Escenarios de precio (PEN)",
      "menu.section.02.scenario.lean.label": "Lean",
      "menu.section.02.scenario.lean.note": "Cubre costo, ticket conservador.",
      "menu.section.02.scenario.moderate.label": "Moderado",
      "menu.section.02.scenario.moderate.note": "Precio de lanzamiento recomendado.",
      "menu.section.02.scenario.growth.label": "Growth",
      "menu.section.02.scenario.growth.note": "Cuando el equity de marca soporte el alza.",
      "menu.section.02.scenario.rationale.heading": "Por qué este rango de precio (anclado al censo)",
      "menu.section.02.scenario.disclaimer":
        "Son rangos de escenario, no costos inventados. Verifica los costos de insumos contra los registros reales de tueste y las facturas de proveedor de Ursa antes de lanzar.",
      "menu.section.02.criterion.why": "Por qué este producto específico",
      "menu.section.02.criterion.customer-need": "Necesidad del cliente que atiende",
      "menu.section.02.criterion.evidence": "Evidencia del censo que la respalda",
      "menu.section.02.criterion.brand-fit": "Ajuste de marca",
      "menu.section.02.criterion.taste": "Concepto de sabor",
      "menu.section.02.criterion.prep": "Tiempo de preparación",
      "menu.section.02.criterion.margin": "Potencial de margen",
      "menu.section.02.criterion.operational-test": "Prueba operativa",
      "menu.section.02.criterion.market-test": "Método de prueba de mercado",
      "menu.section.02.criterion.stop-rule": "Regla de parada / revisión",

      /* Sección 02 — Contenido de propuestas (P-01 a P-13) */
      "menu.section.02.proposal.P-01.name": "Oso Negro",
      "menu.section.02.proposal.P-01.spanish": "Oso negro · doble ristretto sobre miel tibia",
      "menu.section.02.proposal.P-01.concept":
        "Doble ristretto de Black Label vertido sobre una cucharada de miel tibia y una lágrima de espresso frío. Profundo, oscuro, con un dulzor que aparece tarde. Nombrado por el oso andino de las nieblas.",
      "menu.section.02.proposal.P-01.why":
        "Ursa no tiene hoy ninguna bebida que explore el lado oscuro y bosque del personaje del oso — todas las bebidas de autor son brillantes o frutales (Ursagroni, Maracumango, Durazno Clarificado). Oso Negro llena el slot «oscuro, denso, post-cena» que ninguna bebida de Ursa ocupa. El tueste Black Label ya está en rotación; es una nueva preparación de un activo existente, no un insumo nuevo.",
      "menu.section.02.proposal.P-01.need":
        "Curioso del Café + Regular de la Mañana que buscan un café intenso, bajo en leche, para la tarde/noche. El job: «ayúdame a cerrar el día con algo deliberado, no un café rápido.» Atiende el daypart de tarde (3–6pm) donde la carta actual de Ursa no tiene bebida de autor.",
      "menu.section.02.proposal.P-01.evidence":
        "Arabica Espresso Bar es dueño del nicho de espresso purista de pie; las bebidas de calidad campeona de Neira son elogiadas pero sin nombre. Ningún competidor del censo de 18 negocios ofrece un ristretto con miel de autor — el slot está sin contender. La miel es un staple peruano (no importado), refuerza el pilar de historia de origen.",
      "menu.section.02.proposal.P-01.brand-fit":
        "Perfecto — el nombre es un nombre de la casa (Oso + negro del Black Label). Refuerza el personaje sin apartarse del café.",
      "menu.section.02.proposal.P-01.taste":
        "Amargo de ristretto → miel cálida → finish de chocolate negro. La temperatura de la miel controla la textura final.",
      "menu.section.02.proposal.P-01.prep": "3 min (servido en copa pequeña precalentada).",
      "menu.section.02.proposal.P-01.margin":
        "Alto — la miel cuesta más que el azúcar pero el ristretto usa la mitad de dosis de un latte.",
      "menu.section.02.proposal.P-01.operational-test":
        "Prueba de batch de 2 semanas: pre-porcione la miel en vasos de 5g; entrene a 1 barista en el vertido. Medir (a) tiempo de prep vs baseline de flat white, (b) % de merma de miel por batch, (c) tasa de repetición de cliente en 14 días.",
      "menu.section.02.proposal.P-01.market-test":
        "Promocionar 14 días como «shot del barista». Medir pedidos/día y solicitudes de repetición.",
      "menu.section.02.proposal.P-01.stop-rule":
        "Menos de 4/día tras 14 días → reformular como shot de cortesía, no producto.",
      "menu.section.02.proposal.P-01.pricing-rationale":
        "S/. 9–13. Anclado abajo del Ursagroni (S/. 18) porque Oso Negro es solo espresso, sin base de tónica o cold brew. Arriba del flat white (S/. 10) en moderado porque la preparación con nombre + miel suma valor percibido. Benchmark del censo: banda de precio de espresso de Arabica (S/. 6–10) y tier de espresso premium de Neira; el espresso propio de Ursa (S/. 6) y el Black Label (S/. 14) enmarcan el rango.",

      "menu.section.02.proposal.P-02.name": "Media Luna",
      "menu.section.02.proposal.P-02.spanish": "Cortado en media luna con ralladura de naranja",
      "menu.section.02.proposal.P-02.concept":
        "Cortado servido en taza media luna (molde exclusivo). Espuma de leche con ralladura de naranja. La forma de media luna repite los motivos Art Nouveau del local.",
      "menu.section.02.proposal.P-02.why":
        "Ursa no tiene ninguna bebida que visualice explícitamente el lenguaje Art Nouveau en la taza misma. La forma de media luna hace la identidad visual bebible — cada foto carga el lenguaje de marca, no solo la bebida. Es la única propuesta donde la taza ES el activo de marca.",
      "menu.section.02.proposal.P-02.need":
        "Explorador Turista + Curioso del Café que quieren una taza fotogénica y ownable. El job: «dame algo que no pueda conseguir en ningún otro lugar de Lima, que quiera fotografiar y compartir.» Atiende directo la métrica de tasa de tags a @ursacoffeeperu.",
      "menu.section.02.proposal.P-02.evidence":
        "0 de 18 competidores del censo usan una forma de taza propia como activo de marca. La forma Art Nouveau de media luna está sin contender. La persona del Explorador Turista se valida con 8+ hoteles a la vuelta del catchment — las bebidas fotogénicas viajan más que las genéricas.",
      "menu.section.02.proposal.P-02.brand-fit":
        "Fuerte — la forma de media luna es visualmente ownable y fotogénica; ya pertenece al lenguaje visual de Ursa.",
      "menu.section.02.proposal.P-02.taste":
        "Cortado equilibrado con un aroma cítrico que abre la copa antes del primer sorbo. Sin endulzar — solo aroma.",
      "menu.section.02.proposal.P-02.prep": "2.5 min (requiere taza especial y rallador).",
      "menu.section.02.proposal.P-02.margin":
        "Medio-alto — la ralladura de naranja es barata; la taza es un costo único.",
      "menu.section.02.proposal.P-02.operational-test":
        "Pedir 30 tazas prototipo; entrenar a 2 baristas en la ralladura + vertido. Medir (a) tasa de photo-tags en el geo-tag de Ursa (target ≥ 3/semana), (b) tasa de rotura de tazas por 30 servicios, (c) tasa de pedido repetido en 14 días.",
      "menu.section.02.proposal.P-02.market-test":
        "Servir como edición de 30 tazas. Contar fotos compartidas en Instagram con el geo-tag de Ursa.",
      "menu.section.02.proposal.P-02.stop-rule":
        "Menos de 3 fotos compartidas/semana → retirar la taza, mantener el cortado.",
      "menu.section.02.proposal.P-02.pricing-rationale":
        "S/. 9–12. Anclado contra el cortado (S/. 8) con un premium de +S/. 1–4 por la preparación con nombre y el activo de taza. Abajo del flat white (S/. 10) en lean para impulsar prueba; en moderado, paridad con flat white. Benchmark del censo: banda de cortado de Estación 329 y premium de cortado de especialidad de Neira; el cortado propio de Ursa (S/. 8) como piso.",

      "menu.section.02.proposal.P-03.name": "Clarificado de Lúcuma",
      "menu.section.02.proposal.P-03.spanish": "Cold brew clarificado de lúcuma",
      "menu.section.02.proposal.P-03.concept":
        "Cold brew clarificado con leche de lúcuma usando la técnica del Durazno Clarificado. La lúcuma es el fruto emblemático del Perú; al clarificarla, queda un pour ámbar limpio, sin sedimento.",
      "menu.section.02.proposal.P-03.why":
        "Extiende la línea «Clarificado» existente (Durazno Clarificado) con un fruto nativo del Perú. La lúcuma es el fruto peruano más reconocible nacional e internacionalmente — es el próximo clarificado obvio, no un sabor inventado. Esto es extensión de línea, no invención de línea.",
      "menu.section.02.proposal.P-03.need":
        "Explorador Turista + Curioso del Café que quieren una experiencia de sabor peruano pero sin bebidas con mucha leche. El job: «déjame probar algo distintamente peruano sin lácteos.» Atiende el segmento intolerante a la lactosa + vegano.",
      "menu.section.02.proposal.P-03.evidence":
        "Censo: 0 competidores del censo de 18 negocios ofrecen una bebida de café con lúcuma. Los bowls de açaí de Milenaria (misma cuadra, 170m) muestran demanda por bebidas de desayuno frutales en el catchment. La lúcuma es el fruto nacional — el ajuste de marca + la superposición de insumo son fuertes ambos.",
      "menu.section.02.proposal.P-03.brand-fit":
        "Fuerte — extiende la línea «Clarificado» (ya propia) con un ingrediente nacionalmente reconocido.",
      "menu.section.02.proposal.P-03.taste":
        "Cold brew con dulzor sedoso de lúcuma, sin lácteos visibles. Color ámbar. Finish limpio.",
      "menu.section.02.proposal.P-03.prep": "4 min de servicio + 24h de clarificación en batch.",
      "menu.section.02.proposal.P-03.margin":
        "Alto — la lúcuma es económica en Lima y el proceso clarificado escala en batch.",
      "menu.section.02.proposal.P-03.operational-test":
        "Prueba de batch de 4 semanas: 24h clarificado en batches de 2L. Medir (a) % de rendimiento de clarificación por batch, (b) costo de lúcuma por servicio, (c) unidades diarias vendidas vs baseline de Durazno Clarificado.",
      "menu.section.02.proposal.P-03.market-test":
        "Piloto de 4 semanas en la barra Coldbrew. Medir % de coldbrew vendido que es Clarificado de Lúcuma.",
      "menu.section.02.proposal.P-03.stop-rule":
        "Menos de 5/día tras 4 semanas → reformular como estacional de otoño.",
      "menu.section.02.proposal.P-03.pricing-rationale":
        "S/. 13–16. Paridad con Durazno Clarificado (S/. 14) y Maracumango (S/. 14) en lean/moderado; +S/. 2 en growth porque el estatus de fruta nacional de la lúcuma soporta un premium pequeño. Benchmark del censo: el techo del vuelo de Terrua es US$25 (~S/. 93) — las bebidas individuales se quedan muy por debajo; la propia banda de coldbrew de Ursa (S/. 10–14) como piso.",

      "menu.section.02.proposal.P-04.name": "Té de Oso",
      "menu.section.02.proposal.P-04.spanish": "Cold brew sobre hielo de té de cascara",
      "menu.section.02.proposal.P-04.concept":
        "Cold brew servido sobre un cubo grande de hielo de té de cáscara (cascara). Conforme el hielo se derrite, la taza evoluciona — primero café puro, luego café con notas de fruta seca. El oso que toma su tiempo.",
      "menu.section.02.proposal.P-04.why":
        "Operacionaliza «un gramo a la vez» como experiencia de una sola bebida: el tiempo como ingrediente. Ninguna bebida de Ursa evoluciona en la taza — Té de Oso es la única propuesta donde la bebida cambia conforme la bebes. La cascara es un subproducto de la tostadora, así que el costo de insumo es cero.",
      "menu.section.02.proposal.P-04.need":
        "Remote Worker + Curioso del Café que se quedan 90+ minutos y quieren una bebida que premie quedarse. El job: «dame una taza que me dé una razón para quedarme.» Atiende directo la métrica de dwell time (≥ 90 min) en la persona del Remote Worker.",
      "menu.section.02.proposal.P-04.evidence":
        "Censo: 0 competidores del censo de 18 negocios usan cascara (subproducto del grano de café) como ingrediente de bebida. El formato de slow bar está sin contender en el catchment. El formato de cata de Terrua (US$25) muestra demanda por experiencias de café lento; Té de Oso es la versión accesible de taza única.",
      "menu.section.02.proposal.P-04.brand-fit":
        "Muy fuerte — captura «un gramo a la vez» en una sola bebida: el tiempo como ingrediente.",
      "menu.section.02.proposal.P-04.taste":
        "Coffee-forward al inicio, frutal al final. Cada sorbo es distinto. La cáscara viene del mismo grano.",
      "menu.section.02.proposal.P-04.prep": "3 min de servicio + preparación previa de cubos de cascara.",
      "menu.section.02.proposal.P-04.margin":
        "Alto — la cascara es subproducto del grano; el precio se ancla en la experiencia.",
      "menu.section.02.proposal.P-04.operational-test":
        "Drop de 30 unidades en el daypart de slow bar (sáb–dom 10am–2pm). Medir (a) dwell time de clientes de Té de Oso vs control (mismo daypart, coldbrew regular), (b) tiempo de derretimiento del hielo de cascara por servicio, (c) NPS al primer sorbo vs último sorbo.",
      "menu.section.02.proposal.P-04.market-test":
        "Servir 30 unidades como «edición de slow bar». Filmar reacciones y pedir testimonios.",
      "menu.section.02.proposal.P-04.stop-rule":
        "NPS < 8/10 o menos de 8 unidades vendidas → reformular como Cata Privada.",
      "menu.section.02.proposal.P-04.pricing-rationale":
        "S/. 14–18. Arriba del Durazno Clarificado (S/. 14) por el premium de experiencia (taza que evoluciona); abajo de Cata de Tres Orígenes (S/. 22+) porque es una sola bebida. Benchmark del censo: el vuelo de US$25 (~S/. 93) de Terrua es el ancla superior; esta es la alternativa accesible de «taza que evoluciona» para el mismo daypart.",

      "menu.section.02.proposal.P-05.name": "Cosecha de Amazonas",
      "menu.section.02.proposal.P-05.spanish": "Vuelo estacional de Utcubamba · tres micro-lotes",
      "menu.section.02.proposal.P-05.concept":
        "Vuelo de tres micro-lotes de Utcubamba (Amazonas) servidos lado a lado: lavado, honey, natural. Una hoja con notas de cata y altitud. Mientras dure la cosecha.",
      "menu.section.02.proposal.P-05.why":
        "Profundiza la línea Filtrado Lonya de una sola bebida a una experiencia multi-proceso del MISMO origen. Es la extensión natural de producto de la historia de origen más ownable de Ursa — no un origen nuevo, sino uno más profundo. Defiende la línea Lonya contra imitación yendo más profundo, no más ancho.",
      "menu.section.02.proposal.P-05.need":
        "Curioso del Café + parejas/grupos que quieren una experiencia de cata compartida. El job: «ayúdame a entender qué hace el proceso con el sabor, lado a lado.» Atiende directo la métrica de asistencia a cupping en la persona del Curioso del Café.",
      "menu.section.02.proposal.P-05.evidence":
        "Censo: el vuelo de US$25 de Terrua (513 reseñas Google) valida la demanda por cata pagada. Cate Tasting Room (190 reseñas Google, 4.6★) refuerza. El Filtrado Lonya de Ursa (Utcubamba, Amazonas, 1,750m) ya es el origen ownable — el vuelo lo extiende sin requerir una cadena de suministro nueva.",
      "menu.section.02.proposal.P-05.brand-fit":
        "Fuerte — profundiza el Filtrado Lonya en una experiencia de origen, no solo una bebida.",
      "menu.section.02.proposal.P-05.taste":
        "Tres tazas pequeñas, tres procesos. El cliente aprende a distinguir el mismo grano tratado distinto.",
      "menu.section.02.proposal.P-05.prep": "8 min (tres filtrados manuales servidos simultáneamente).",
      "menu.section.02.proposal.P-05.margin":
        "Medio-alto — el grano es el mismo, pero el tiempo de barista sube.",
      "menu.section.02.proposal.P-05.operational-test":
        "Correr como Cata Privada mensual por 60 días. Medir (a) conversión a bolsa de retail de 250g (target ≥ 30%), (b) tasa de repetición de asistencia (target ≥ 25% regresa en 60 días), (c) tamaño promedio de grupo por reserva.",
      "menu.section.02.proposal.P-05.market-test":
        "Lanzar en Cata Privada y cupping mensual. Medir conversión a venta de bolsa de 250g.",
      "menu.section.02.proposal.P-05.stop-rule":
        "Menos de 6 vuelos/mes → solo disponible en catas guiadas.",
      "menu.section.02.proposal.P-05.pricing-rationale":
        "S/. 22–30. Abajo del vuelo de US$25 (~S/. 93) de Terrua por un margen amplio — entrada accesible a cata pagada. Arriba de Chemex-para-dos (S/. 22) porque el vuelo es curado + tiene tarjetas de historia. Benchmark del censo: vuelo de US$25 de Terrua, formato de cata pagada de Cate. El propio Filtrado Lonya de Ursa (S/. 14) × 3 = S/. 42 — la curación + el premium de tarjeta de historia es lo que justifica el lift.",

      "menu.section.02.proposal.P-06.name": "Invierno Andino",
      "menu.section.02.proposal.P-06.spanish": "Pour-over especiado con chincho y panela",
      "menu.section.02.proposal.P-06.concept":
        "Pour-over preparado con una pizca de chincho (hierba andina) en el lecho y panela en el agua. Cálido, herbal, sin lácteos. El inverso del Clarificado de Lúcuma: esto es la montaña en invierno.",
      "menu.section.02.proposal.P-06.why":
        "Ursa no tiene ninguna bebida estacional de invierno. El verano es propio de Maracumango + Clarificados; el invierno no tiene respuesta. Invierno Andino es la contraparte de clima frío — cálido, herbal, sin lácteos. Chincho y panela son staples peruanos sin costo de importación, y la escasez estacional (chincho se cosecha mayo–agosto) crea urgencia.",
      "menu.section.02.proposal.P-06.need":
        "Regular de la Mañana + Curioso del Café en el invierno de Lima (junio–septiembre) que quieren un café cálido y sin leche. El job: «dame una bebida caliente que no sea un latte.» Atiende la brecha de estacionalidad de invierno en la carta de Ursa.",
      "menu.section.02.proposal.P-06.evidence":
        "Censo: 0 competidores del censo de 18 negocios ofrecen un café con hierba andina. Chincho y panela son staples peruanos sin costo de importación. La escasez estacional (chincho se cosecha mayo–agosto) crea urgencia y una regla de parada natural de fin de temporada.",
      "menu.section.02.proposal.P-06.brand-fit":
        "Fuerte — la paleta (hierba, panela, café) está dentro del universo de ingredientes peruanos.",
      "menu.section.02.proposal.P-06.taste":
        "Pour-over con aromática de chincho y dulzor profundo de panela. Sin azúcar añadido más allá de la panela.",
      "menu.section.02.proposal.P-06.prep": "5 min.",
      "menu.section.02.proposal.P-06.margin":
        "Alto — chincho y panela son económicos; el precio se ancla en estacionalidad.",
      "menu.section.02.proposal.P-06.operational-test":
        "Lanzamiento de 6 semanas en junio. Medir (a) sell-through vs baseline de Filtrado de la Casa, (b) tasa de pedido repetido en 14 días, (c) feedback de cliente sobre balance herbal (target ≥ 4/5 en tarjeta de feedback en local).",
      "menu.section.02.proposal.P-06.market-test":
        "Lanzar en junio (inicio de invierno) por 6 semanas. Medir repetición y puntuación en cata.",
      "menu.section.02.proposal.P-06.stop-rule":
        "Menos de 4/día tras 6 semanas → reformular para verano con cascara helada.",
      "menu.section.02.proposal.P-06.pricing-rationale":
        "S/. 12–16. Paridad con V60 (S/. 12) en lean; arriba de V60 en moderado por la preparación con nombre + la historia estacional. Abajo del Filtrado Lonya (S/. 14) para impulsar prueba. Benchmark del censo: banda de V60/pour-over de especialidad; el propio V60 de Ursa (S/. 12) y el Filtrado Lonya (S/. 14) enmarcan el rango.",

      "menu.section.02.proposal.P-07.name": "Chocolate del Oso",
      "menu.section.02.proposal.P-07.spanish": "Chocolate de cacao peruano de origen único",
      "menu.section.02.proposal.P-07.concept":
        "Chocolate caliente de cacao peruano de origen único (Cusco o San Martín). Servido en taza de barro. Sin jarabe — solo cacao, agua, un toque de panela.",
      "menu.section.02.proposal.P-07.why":
        "Llena el slot sin café para los 1–2 clientes por día que acompañan a los cafeteros pero no toman café. El cacao de origen extiende el pilar de «historia de origen» más allá del café sin diluir la identidad de tostador. Críticamente: es un solo ítem de carta, NO una categoría de cata de chocolate (que diluiría la identidad de café puro según la implicación de Cate).",
      "menu.section.02.proposal.P-07.need":
        "Remote Worker + Explorador Turista que acompaña a cafeteros y quiere una bebida caliente pero sin café. El job: «déjame quedarme con mi amigo sin forzar un pedido de café.» Atiende la dinámica de pedido en grupo.",
      "menu.section.02.proposal.P-07.evidence":
        "Censo: Cate Tasting Room combina café + chocolate pero Ursa NO debe añadir cata de chocolate — mantener el cacao como un solo ítem de carta, no una categoría. El cacao de origen (Cusco/San Martín) extiende el pilar de historia de origen de Ursa sin requerir una cadena de suministro nueva más allá de las relaciones existentes de la tostadora.",
      "menu.section.02.proposal.P-07.brand-fit":
        "Fuerte — refuerza el universo «origen peruano» sin salir de la identidad de tostador.",
      "menu.section.02.proposal.P-07.taste":
        "Chocolate profundo, no dulce. El barro mantiene la temperatura; la panela aparece tarde.",
      "menu.section.02.proposal.P-07.prep": "4 min (jarra caliente preparada en batch cada 2h).",
      "menu.section.02.proposal.P-07.margin":
        "Medio — el cacao de origen cuesta más que el jarabe, pero el ticket promedio sube.",
      "menu.section.02.proposal.P-07.operational-test":
        "Campaña de invierno de 6 semanas. Medir (a) % de pedidos en grupo donde se compra ≥ 1 bebida sin café (target ≥ 15%), (b) tasa de repetición de chocolate en 30 días, (c) costo de cacao por servicio vs target S/. 3.50.",
      "menu.section.02.proposal.P-07.market-test":
        "Campaña de invierno 6 semanas. Medir % de pedidos sin café que son chocolate.",
      "menu.section.02.proposal.P-07.stop-rule":
        "Menos de 5/día tras 6 semanas → reducir a edición invernal anual.",
      "menu.section.02.proposal.P-07.pricing-rationale":
        "S/. 12–16. Paridad con la banda de Flat White (S/. 10) + Mocha (S/. 12) en moderado. Abajo del vuelo Cata (S/. 22+) y arriba de la cookie (S/. 5). Benchmark del censo: ningún competidor directo para chocolate de beber en el catchment — precio fijado por las propias bandas de carta de Ursa (mocha S/. 12 como ancla natural).",

      "menu.section.02.proposal.P-08.name": "Infusión de Muña",
      "menu.section.02.proposal.P-08.spanish": "Infusión de menta andina",
      "menu.section.02.proposal.P-08.concept":
        "Infusión caliente de muña (menta andina) servida en taza de vidrio. Para quien no toma café pero quiere quedarse en la barra.",
      "menu.section.02.proposal.P-08.why":
        "Una opción sin café y sin cacao para clientes que evitan la cafeína. La muña es la hierba andina más accesible — reconocible, barata y food-safe. No es un producto hero; es un producto de cortesía. El job es mantener al acompañante no cafetero en la barra, no ganar clientes nuevos.",
      "menu.section.02.proposal.P-08.need":
        "No cafeteros (embarazadas, sensibles a la cafeína, visitantes nocturnos). El job: «déjame pedir algo sin disculparme por no tomar café.» Atiende directo la dinámica de pedido en grupo donde un miembro no toma café.",
      "menu.section.02.proposal.P-08.evidence":
        "Censo: 0 competidores del censo de 18 negocios ofrecen muña. La hierba está ampliamente disponible en mercados de Lima. La demanda es pequeña pero persistente — NovaCircle nota que la atmósfera de Ursa atrae acompañantes no cafeteros (el tema pros de «atmósfera cozy e inviting»).",
      "menu.section.02.proposal.P-08.brand-fit":
        "Aceptable — no es café, pero respeta la paleta andina. Útil para acompañantes y no-cafeteros.",
      "menu.section.02.proposal.P-08.taste":
        "Menta andina con un finish herbáceo más profundo que la menta común. Sin azúcar.",
      "menu.section.02.proposal.P-08.prep": "3 min.",
      "menu.section.02.proposal.P-08.margin":
        "Alto — la muña es barata y seca; el ticket es de infusión premium.",
      "menu.section.02.proposal.P-08.operational-test":
        "Prueba de disponibilidad de 4 semanas. Medir (a) pedidos/día, (b) % de pedidos en grupo que incluyen una bebida sin café (target ≥ 10%), (c) feedback de cliente sobre sabor (target ≥ 4/5 en tarjeta).",
      "menu.section.02.proposal.P-08.market-test":
        "Ofrecer 4 semanas como alternativa en barra. Medir pedidos de no-cafeteros.",
      "menu.section.02.proposal.P-08.stop-rule":
        "Menos de 3/día tras 4 semanas → retirar y mantener solo Chocolate del Oso.",
      "menu.section.02.proposal.P-08.pricing-rationale":
        "S/. 8–11. Abajo de todas las bebidas de café — un precio de cortesía. En paridad con espresso (S/. 6) + premium pequeño por la hierba con nombre. Benchmark del censo: la banda de infusión herbal no está directamente benchmarked en el catchment; fijada por el propio piso de carta de Ursa (espresso S/. 6) y el valor percibido de una hierba andina con nombre.",

      "menu.section.02.proposal.P-09.name": "Croissant de Lúcuma",
      "menu.section.02.proposal.P-09.spanish": "Croissant relleno de crema de lúcuma",
      "menu.section.02.proposal.P-09.concept":
        "Croissant de masa laminada en casa, relleno de crema de lúcuma. Cómpralo con el Clarificado de Lúcuma y la paleta del desayuno es completa.",
      "menu.section.02.proposal.P-09.why":
        "Cierra el loop de maridaje con Clarificado de Lúcuma (P-03). La carta de comida de Ursa tiene solo 2 ítems verificados (financier, empanada) — una tercera pastry con maridaje de bebida es la extensión obvia, y la lúcuma la ata a P-03. El maridaje es el producto, no la pastry sola.",
      "menu.section.02.proposal.P-09.need":
        "Curioso del Café + Regular de la Mañana que quieren una pastry que maride con su bebida con nombre. El job: «dame el maridaje que hace mi bebida mejor.» Atiende la métrica de attach rate en el offer stack (target ≥ 60%).",
      "menu.section.02.proposal.P-09.evidence":
        "Censo: El Pan de la Chola (700m) es dueño de «mejor panadería de Lima» — Ursa NO debe competir en escala de panadería. El laminado en casa es el diferenciador (credibilidad, no escala). La lúcuma es el puente a P-03; el maridaje crea un bundle de S/. 21–26 que compite con el ticket de desayuno de Milenaria.",
      "menu.section.02.proposal.P-09.brand-fit":
        "Fuerte — cierra el pairing con Clarificado de Lúcuma. El laminado en casa es credibility.",
      "menu.section.02.proposal.P-09.taste":
        "Hojaldre de mantequilla + crema de lúcuma sedosa. No excesivamente dulce.",
      "menu.section.02.proposal.P-09.prep": "Servicio directo (preparación en madrugada).",
      "menu.section.02.proposal.P-09.margin":
        "Medio — laminado es intensivo en mano de obra; el relleno es barato.",
      "menu.section.02.proposal.P-09.operational-test":
        "Piloto de 6 semanas con batch diario de 12. Medir (a) attach rate con Clarificado de Lúcuma (target ≥ 20%), (b) sell-through antes de las 11am, (c) % de merma diaria (target ≤ 10%).",
      "menu.section.02.proposal.P-09.market-test":
        "Piloto de 6 semanas. Medir attach rate con Clarificado de Lúcuma.",
      "menu.section.02.proposal.P-09.stop-rule":
        "Menos de 8/día o attach rate < 20% con Clarificado → reformular relleno.",
      "menu.section.02.proposal.P-09.pricing-rationale":
        "S/. 8–11. Arriba del financier (S/. 6) por el laminado + relleno. Abajo de la empanada (S/. 12) en lean para impulsar prueba. Benchmark del censo: precios de panadería de El Pan de la Chola como ancla superior; los propios precios verificados de comida de Ursa (financier S/. 6, empanada S/. 12) como piso y techo.",

      "menu.section.02.proposal.P-10.name": "Alfajor de Café",
      "menu.section.02.proposal.P-10.spanish": "Alfajor con dulce de leche glaseado de café",
      "menu.section.02.proposal.P-10.concept":
        "Alfajor de maicena con dulce de leche glaseado con una reducción de espresso. Pequeño, intenso, marida con cualquier filtrado.",
      "menu.section.02.proposal.P-10.why":
        "El alfajor es la pastry peruana más icónica. El dulce de leche glaseado de café lo ata a la identidad de tostador. Una pastry pequeña e intensa que se casa con cualquier pour-over — a diferencia del croissant (P-09), que marida con una bebida, el alfajor marida con toda la carta de filtración.",
      "menu.section.02.proposal.P-10.need":
        "Curioso del Café + Explorador Turista que quieren una comida de souvenir peruano para llevar. El job: «dame algo pequeño, intenso y memorable que maride con cualquier café.» Atiende la métrica de take-home + attach de retail.",
      "menu.section.02.proposal.P-10.evidence":
        "Censo: 0 competidores del censo de 18 negocios ofrecen un alfajor glaseado de café. El alfajor es un staple nacional con alta reconocibilidad para turistas y locales. El glaseado de café lo ata a la tostadora sin forzar un maridaje de bebida — attach flexible.",
      "menu.section.02.proposal.P-10.brand-fit":
        "Fuerte — el alfajor es icónico peruano y el glaseado de café lo ancla al oficio.",
      "menu.section.02.proposal.P-10.taste":
        "Maicena que se deshace, dulce de leche sedoso, finish amargo del espresso.",
      "menu.section.02.proposal.P-10.prep": "Servicio directo (batch semanal).",
      "menu.section.02.proposal.P-10.margin":
        "Alto — ingredientes baratos, ticket de pastry premium.",
      "menu.section.02.proposal.P-10.operational-test":
        "Piloto de 6 semanas con batch semanal de 24. Medir (a) pedidos con café vs baseline de cookie, (b) tasa de take-home (target ≥ 30% se van en bolsa), (c) feedback de cliente sobre intensidad de café (target ≥ 4/5).",
      "menu.section.02.proposal.P-10.market-test":
        "Piloto de 6 semanas. Medir pedidos de alfajor con café (vs. cookie).",
      "menu.section.02.proposal.P-10.stop-rule":
        "Menos de 6/día tras 6 semanas → reformular como mini-alfajor de cata.",
      "menu.section.02.proposal.P-10.pricing-rationale":
        "S/. 6–9. Arriba de la cookie (S/. 5) en lean por el dulce de leche + glaseado. Abajo del financier (S/. 6) en paridad, luego premium en growth. Benchmark del censo: los propios precios verificados de pastry de Ursa (cookie S/. 5, financier S/. 6, empanada S/. 12) enmarcan el rango; el glaseado de café justifica el premium de +S/. 1–3 sobre la cookie.",

      "menu.section.02.proposal.P-11.name": "Gramo del Mes",
      "menu.section.02.proposal.P-11.spanish": "Suscripción de grano del mes · bolsa con etiqueta de origen",
      "menu.section.02.proposal.P-11.concept":
        "Cada mes, una bolsa de 250g de un micro-lote, con etiqueta de origen completa (finca, altitud, proceso, varietal, fecha de tueste). Para suscriptores Ursa Mañana y venta en barra.",
      "menu.section.02.proposal.P-11.why":
        "Operacionaliza «un gramo a la vez» como producto recurrente. La rotación de bebidas con nombre crea razones semanales para volver; la suscripción de grano crea razones mensuales. El canal de bolsa de retail es actualmente solo Instagram — este es el producto estructurado que convierte el interés de redes sociales en ingreso recurrente.",
      "menu.section.02.proposal.P-11.need":
        "Curioso del Café + Regular de la Mañana que preparan en casa y quieren selección mensual curada. El job: «curar mi café de casa para que yo no tenga que elegir.» Atiende la métrica de recompra de bolsa de retail (target ≥ 30%).",
      "menu.section.02.proposal.P-11.evidence":
        "Censo: Puku Puku vende bolsas de retail a S/.49 con elogio de TA por «bolsas de retail para casa». Ursa actualmente solo Instagram — la brecha de canal es estructural. Modelos de suscripción validados por la membresía CoffeePass de Lima. Los S/.49 de Puku Puku son el benchmark directo de precio.",
      "menu.section.02.proposal.P-11.brand-fit":
        "Muy fuerte — operacionaliza «un gramo a la vez» y «Gram of the Week» como producto recurrente.",
      "menu.section.02.proposal.P-11.taste":
        "Varía — la promesa es: cada mes, un grano nuevo con su historia completa.",
      "menu.section.02.proposal.P-11.prep": "Empaque semanal en batch.",
      "menu.section.02.proposal.P-11.margin":
        "Alto — el margen de bolsa de retail es ~60–70% sobre costo de grano verde.",
      "menu.section.02.proposal.P-11.operational-test":
        "Lanzar piloto de 50 suscriptores por 3 meses. Medir (a) retención al mes 3 (target ≥ 60%), (b) satisfacción con tamaño de bolsa (target ≥ 4/5), (c) conversión a asistencia a cupping-night (target ≥ 20%).",
      "menu.section.02.proposal.P-11.market-test":
        "Lanzar como suscripción mensual de 50 bolsas. Medir retención al mes 3.",
      "menu.section.02.proposal.P-11.stop-rule":
        "Retención < 60% al mes 3 → reformular cadencia o tamaño de bolsa.",
      "menu.section.02.proposal.P-11.pricing-rationale":
        "S/. 38–52. La bolsa de retail de S/.49 de Puku Puku es el benchmark directo del censo — el precio moderado (S/. 45) se queda justo abajo. Arriba de la propia muestra de 50g de Ursa (S/. 10) porque es una bolsa de 250g con curación de suscripción. Abajo del vuelo Cata (S/. 38+) en paridad. La curación de suscripción (selección curada, etiqueta de historia) justifica el premium de +S/. 7 sobre una bolsa de retail genérica.",

      "menu.section.02.proposal.P-12.name": "Cata de Tres Orígenes",
      "menu.section.02.proposal.P-12.spanish": "Vuelo de cata · tres orígenes con tarjetas de historia",
      "menu.section.02.proposal.P-12.concept":
        "Vuelo de tres orígenes peruanos servidos en tres filtrados pequeños, cada uno con una tarjeta de historia (finca, altitud, varietal, proceso). Experiencia pagada para dos personas mínimo.",
      "menu.section.02.proposal.P-12.why":
        "Contraparte directa al vuelo plano de US$25 de Terrua. El vuelo de Ursa es multi-origen (vs el de origen único Villa Rica de Terrua) e incluye tarjetas de historia para llevar — el activo que sobrevive a la visita. No es un formato nuevo; es una contraparte competitiva a una demanda validada.",
      "menu.section.02.proposal.P-12.need":
        "Explorador Turista + Curioso del Café (parejas) que quieren una experiencia guiada. El job: «ayúdame a probar y entender tres cafés en una sola sesión.» Atiende a las personas de Turismo + Curioso del Café simultáneamente, con un ticket más alto que cualquier bebida individual.",
      "menu.section.02.proposal.P-12.evidence":
        "Censo: Terrua (vuelo de US$25, 513 reseñas Google) y Cate (tasting room, 190 reseñas Google) validan ambos la demanda de cata pagada. La línea multi-origen Lonya de Ursa es el diferenciador — el terroir estrecho de Villa Rica de Terrua es una limitación conocida en su posicionamiento.",
      "menu.section.02.proposal.P-12.brand-fit":
        "Fuerte — ocupa el territorio que Terrua cobra a US$25, con un stack de valor más visible.",
      "menu.section.02.proposal.P-12.taste":
        "Tres tazas, tres historias. La tarjeta es el activo que el cliente se lleva.",
      "menu.section.02.proposal.P-12.prep": "10 min (tres filtrados servidos simultáneamente + presentación).",
      "menu.section.02.proposal.P-12.margin":
        "Alto — el grano es barato; el precio se cobra por la experiencia guiada.",
      "menu.section.02.proposal.P-12.operational-test":
        "Correr como drop-in de sábado por 60 días. Medir (a) reservas/mes (target ≥ 4/semana), (b) conversión a bolsa de retail de 250g (target ≥ 30%), (c) NPS al final de la experiencia (target ≥ 9/10).",
      "menu.section.02.proposal.P-12.market-test":
        "Piloto de 60 días en sábado. Medir reservas/mes y conversión a venta de bolsa.",
      "menu.section.02.proposal.P-12.stop-rule":
        "Menos de 2 reservas/mes → reformular como drop-in de sábado sin reserva.",
      "menu.section.02.proposal.P-12.pricing-rationale":
        "S/. 38–55. Comparación directa: Terrua US$25 ≈ S/. 93 — el vuelo de Ursa está 40–60% abajo del benchmark competidor, entrada accesible. Arriba de Chemex-para-dos (S/. 22) por la experiencia guiada. Arriba de pour-over individual (S/. 12–14) × 3 = S/. 36–42 — las tarjetas de historia + la curación justifican el premium. Benchmark del censo: el vuelo de US$25 de Terrua es el ancla superior; el propio pour-over de Ursa × 3 es el ancla de costo.",

      "menu.section.02.proposal.P-13.name": "Tuesta tu propio grano",
      "menu.section.02.proposal.P-13.spanish": "Taller de tuesta tu propio grano",
      "menu.section.02.proposal.P-13.concept":
        "Taller de 90 minutos: cada participante tuesta 250g de verde en un tostador de muestra, documenta la curva, y se lleva su bolsa a casa. Cupo máximo 4 personas.",
      "menu.section.02.proposal.P-13.why":
        "Convierte la tostadora visible de Ursa de un activo pasivo de credibilidad en una experiencia pagada activa. Ningún competidor del catchment ofrece tueste hands-on — este es el producto de «experiencia» más defendible porque requiere la tostadora que Ursa ya tiene. El producto es la experiencia + la bolsa para llevar, no un consumible.",
      "menu.section.02.proposal.P-13.need":
        "Curioso del Café + Explorador Turista que quieren una experiencia memorable para llevar (no solo una bebida). El job: «ayúdame a tostar mi propio grano y llevarmelo a casa.» Atiende el segmento de economía de experiencias que Terrua y Cate tocan con cata, pero va un paso más allá en participación activa.",
      "menu.section.02.proposal.P-13.evidence":
        "Censo: 0 competidores ofrecen tueste hands-on. La «escuela de café» de Bisetti es formato de clase, no hands-on. La tostadora de Ursa + la credibilidad del campeón de Aeropress Paulo Sierra (@rutadelcafeperuano, 564 likes) soportan el canal educativo. La tostadora es un activo sunk-cost; el taller la monetiza sin capex adicional.",
      "menu.section.02.proposal.P-13.brand-fit":
        "Fuerte — la tostadora visible ya es la firma del local; este producto la convierte en experiencia pagada.",
      "menu.section.02.proposal.P-13.taste":
        "No es bebida — es aprendizaje. El producto final es una bolsa personal con curva firmada.",
      "menu.section.02.proposal.P-13.prep": "90 min + 15 min de limpieza.",
      "menu.section.02.proposal.P-13.margin":
        "Alto — el grano verde es barato; el precio se cobra por la atención del maestro tostador.",
      "menu.section.02.proposal.P-13.operational-test":
        "Correr 6 sesiones en 60 días, tope de 4 participantes. Medir (a) NPS (target ≥ 9/10), (b) tasa de llenado de sesión (target ≥ 75% de sesiones llenas), (c) conversión a suscripción Gramo del Mes (target ≥ 30%).",
      "menu.section.02.proposal.P-13.market-test":
        "Piloto 6 sesiones. Medir NPS y conversión a suscripción Gramo del Mes.",
      "menu.section.02.proposal.P-13.stop-rule":
        "NPS < 9/10 o menos de 3 sesiones llenas/mes → reformular como demostración gratuita.",
      "menu.section.02.proposal.P-13.pricing-rationale":
        "S/. 85–140. Sin benchmark directo de competidor en el catchment. Anclado contra: (a) vuelo de US$25 de Terrua (~S/. 93) como la experiencia de café pagada más cercana, (b) pricing típico de taller especialista en Lima (S/. 80–150 por sesiones de 90 min). En moderado (S/. 110), paridad con el vuelo de Terrua pero con un producto para llevar (250g de grano tostado) — el activo para llevar justifica el premium sobre una experiencia solo de vuelo.",

      /* Sección 02 — valores de meta del hero (snapshot viene de URSA_FACTS, otros son labels estáticos) */
      "menu.section.02.hero-meta.framework-value": "Evaluación de 16 criterios",
      "menu.section.02.hero-meta.pricing-value": "Rangos de escenario, no costos inventados",
      "menu.section.02.hero-meta.sources-value": "Rappi · IG · Facebook",

      /* Sección 03 — Suscripción Ursa Mañana */
      "menu.section.03.badge-section": "Sección 03",
      "menu.section.03.title": "Ursa Mañana — la suscripción como producto de carta",
      "menu.section.03.meta": "Piloto · tope de 50 miembros",
      "menu.section.03.badge": "Producto de continuidad",
      "menu.section.03.heading": "S/. 20 / mes · café ilimitado · Lun–Vie 7–10am",
      "menu.section.03.body":
        "La suscripción es un producto de carta, no un descuento. La matemática funciona porque Ursa tuesta su propio grano — el costo marginal de una taza adicional es el grano verde, el agua y los cuarenta segundos del barista, no el margen de un mayorista encima. A S/. 1.20–1.80 por taza contra una cuota mensual de S/. 20, la matemática sobrevive incluso a un visitante diario — pero solo si los suscriptores attachan lados (cookies, financier, empanada) que cargan el margen que el café no tiene. El modelo económico completo — tasa de attach de break-even, recuperación de canibalización, proyección de escala — vive en el Módulo 08.",
      "menu.section.03.button.calculator": "Abrir la calculadora",
      "menu.section.03.button.experiments": "Ver el piloto en el Seguimiento de Experimentos",
      "menu.section.03.ministat.monthly": "Precio mensual",
      "menu.section.03.ministat.window": "Ventana de servicio",
      "menu.section.03.ministat.cap": "Tope (piloto)",
      "menu.section.03.ministat.pilot-cap": "Tope del piloto",
      "menu.section.03.ministat.marginal-cost": "Costo marginal / taza",
      "menu.section.03.ministat.target-attach": "Attach objetivo",
      "menu.section.03.callout.title": "Mira el Módulo 08 para el modelo económico completo",
      "menu.section.03.callout.body":
        "La utilidad por suscriptor no es obvia — depende de frecuencia de visita, attach de lados y canibalización. La calculadora interactiva del Módulo 08 te deja editar cada input y ver la tasa de attach de break-even, la capacidad de tazas gratis y el tiempo de recuperación actualizados en vivo. No lances el piloto sin correr esos números.",

      /* Sección 04 — Marco de 16 criterios */
      "menu.section.04.badge": "Sección 04",
      "menu.section.04.title": "El marco de evaluación de 16 criterios",
      "menu.section.04.meta": "Cada propuesta pasa por los dieciséis",
      "menu.section.04.lede":
        "El dossier reduce la tentación de lanzar por entusiasmo. Cada propuesta debe poder responderse contra los dieciséis criterios siguientes — diez críticos para la decisión se muestran explícitamente en las tarjetas de propuesta; los seis restantes se marcan en la cuadrícula. Las cuatro filas de anclaje al censo (por-qué-este-producto, necesidad-del-cliente, evidencia-del-censo, prueba-operativa) son meta-criterios que se sientan encima de los dieciséis: aseguran que cada propuesta esté anclada a una brecha competitiva específica y a una prueba operativa específica antes de que cualquier piloto arranque.",
      "menu.section.04.criterion.1.name": "Necesidad del cliente",
      "menu.section.04.criterion.2.name": "Ajuste de marca",
      "menu.section.04.criterion.3.name": "Concepto de sabor",
      "menu.section.04.criterion.4.name": "Tiempo de preparación",
      "menu.section.04.criterion.5.name": "Superposición de insumos",
      "menu.section.04.criterion.6.name": "Capacitación",
      "menu.section.04.criterion.7.name": "Equipo",
      "menu.section.04.criterion.8.name": "Merma",
      "menu.section.04.criterion.9.name": "Aptitud para delivery",
      "menu.section.04.criterion.10.name": "Atractivo visual",
      "menu.section.04.criterion.11.name": "Rango de precio",
      "menu.section.04.criterion.12.name": "Potencial de margen",
      "menu.section.04.criterion.13.name": "Complejidad operativa",
      "menu.section.04.criterion.14.name": "Método de prueba",
      "menu.section.04.criterion.15.name": "Métrica de éxito",
      "menu.section.04.criterion.16.name": "Regla de parada / revisión",
      "menu.section.04.criterion.1.desc": "¿Qué necesidad real resuelve? ¿Quién lo pide hoy?",
      "menu.section.04.criterion.2.desc": "¿Refuerza al oso, a Art Nouveau, al «un gramo a la vez»?",
      "menu.section.04.criterion.3.desc": "¿Cuál es la primera impresión y el finish?",
      "menu.section.04.criterion.4.desc": "Minutos de barista por unidad servida.",
      "menu.section.04.criterion.5.desc": "¿Usa insumos ya comprados o requiere nuevos?",
      "menu.section.04.criterion.6.desc": "Horas de capacitación para alcanzar consistencia.",
      "menu.section.04.criterion.7.desc": "¿Necesita equipo nuevo o usa lo existente?",
      "menu.section.04.criterion.8.desc": "Vida útil del insumo y porcentaje esperado de merma.",
      "menu.section.04.criterion.9.desc": "¿Sobrevive 30 minutos en caja Rappi sin degradarse?",
      "menu.section.04.criterion.10.desc": "¿Se fotografió y se compartió? ¿Es ownable?",
      "menu.section.04.criterion.11.desc": "Rango lean / moderado / growth en soles, no un costo inventado.",
      "menu.section.04.criterion.12.desc": "Margen sobre costo, no sobre precio.",
      "menu.section.04.criterion.13.desc": "Cuántos puntos de fricción añade al servicio.",
      "menu.section.04.criterion.14.desc": "Cómo medir si la propuesta funciona, en 2–6 semanas.",
      "menu.section.04.criterion.15.desc": "El número específico que dice «graduar» o «matar».",
      "menu.section.04.criterion.16.desc": "La condición exacta para matar o reformular.",

      /* Sección 05 — Nota sobre precios */
      "menu.section.05.badge": "Sección 05",
      "menu.section.05.title": "Sobre precios — qué inventamos y qué no",
      "menu.section.05.meta": "Solo rangos de escenario",
      "menu.section.05.lean.heading": "Lean",
      "menu.section.05.lean.tagline": "Cubre costo",
      "menu.section.05.lean.body":
        "El precio mínimo que cubre costo de insumo y tiempo de barista, con un margen delgado. Úsalo para lanzamientos suaves o productos que construyen tráfico para maridajes de mayor margen.",
      "menu.section.05.moderate.heading": "Moderado",
      "menu.section.05.moderate.tagline": "Lanzamiento recomendado",
      "menu.section.05.moderate.body":
        "El precio al que lanzar el piloto. Balancea valor percibido de especialidad contra disposición a pagar en Miraflores. Re-evalúa después de la ventana de prueba.",
      "menu.section.05.growth.heading": "Growth",
      "menu.section.05.growth.tagline": "Techo anclado en marca",
      "menu.section.05.growth.body":
        "Cuando el producto tenga pedidos repetidos y equity visual, súbelo aquí. Nunca arranques aquí — ancla contra el precio moderado, no contra el techo.",
      "menu.section.05.callout.not-invented.title": "Lo que deliberadamente no inventamos",
      "menu.section.05.callout.not-invented.b1":
        "No hay un costo exacto único por taza. El costo marginal depende del rendimiento de tueste, uso de leche y merma. Usa el rango verificado de S/. 1.20–1.80 como benchmark, luego confirma contra los registros reales de tueste.",
      "menu.section.05.callout.not-invented.b2":
        "No hay porcentaje de margen garantizado. Los márgenes en las tarjetas de propuesta se describen como bandas (alto / medio-alto / medio), no como números fabricados.",
      "menu.section.05.callout.not-invented.b3":
        "No hay precios de proveedor inventados para lúcuma, chincho, muña o cacao de origen. Confirma con el proveedor antes de citar un precio de lanzamiento.",
      "menu.section.05.callout.not-invented.b4":
        "No hay supuesto de viralidad. El precio asume demanda orgánica desde canales existentes; la amplificación pagada se modela aparte en el Módulo 04 y en el Asignador de Presupuesto.",
      "menu.section.05.callout.principle.title": "El principio que protege este módulo",
      "menu.section.05.callout.principle.body":
        "La carta de Ursa gana su margen por valor percibido, no por pricing cost-plus. El techo de costo de una taza de especialidad está más o menos fijado por el mercado de grano verde — cada tostador en Lima paga dentro de una banda estrecha por los mismos grados — así que la palanca de margen es la disposición a pagar, no la reducción de costo. Una tarjeta con historia que describe origen, altitud y proceso eleva el valor percibido más que una taza más grande al mismo costo; el cliente paga por el significado, no por los mililitros. El marco de 16 criterios está diseñado para mantener esa disciplina: ningún producto sale solo porque suene bien, y ningún producto sobrevive sin una regla de parada que diga cuándo matarlo.",

      /* Sección 05 · lente conductual (Sutherland) sobre el pricing de tres escenarios */
      "menu.section.05.callout.behavioral.title": "Por qué el escenario moderado es el ancla, no el promedio",
      "menu.section.05.callout.behavioral.body":
        "En la lente de oferta, el precio moderado es el ancla que el cliente tiene en la cabeza; el precio lean es la reversión de riesgo — una entrada para el indeciso — y el precio growth es la prueba de que el oficio vale más — una subida para el convencido. Poner los tres en la carta diluiría la señal: el precio moderado es el que sale, los otros dos se quedan internos como escenarios. Desde una perspectiva conductual, esto es arquitectura de elección con restraint — un precio claro, una oferta clara, el descuento aparece solo donde se gana su lugar (el acompañamiento recomendado por el oso, no el café mismo).",

      /* Fila final de estadísticas */
      "menu.final.stat.1.label": "Propuestas de producto nuevas en 7 categorías",
      "menu.final.stat.2.label": "Criterios por propuesta (16 del marco + 4 de anclaje al censo)",
      "menu.final.stat.3.label": "Escenarios de precio por propuesta (lean / moderado / growth)",
      "menu.final.stat.4.label": "Envoltura de precio completa en carta y propuestas",
      "menu.final.note":
        "Sobre estos precios: los precios reconstruidos de la carta se obtienen del snapshot de delivery de Rappi (2026-08-01) y de publicaciones públicas en Instagram y Facebook. Los precios marcados con asterisco se infieren de la posición de categoría. Los precios de propuesta son rangos de escenario y deben validarse contra los registros reales de tueste y las facturas de proveedor de Ursa antes de cualquier go-to-market.",

      /* ============ MÓDULO 04 · MARKETING, CRECIMIENTO Y RETENCIÓN ============ */
      "growth.hero.lede":
        "Posicionamiento, jobs-to-be-done, arquitectura de mensaje y oferta, cobertura de canales y un customer journey que convierte al primer visitante en advocate — adaptado de la disciplina de oferta de Hormozi y la mirada de valor percibido de Sutherland, con listas explícitas de «no hacer» para que el oficio nunca se diluya.",
      "growth.hero.meta.frameworks": "Marcos",
      "growth.hero.meta.budget": "Presupuesto",
      "growth.hero.meta.spirit": "Espíritu",
      "growth.hero.meta.frameworks-value": "Hormozi + Sutherland adaptados",
      "growth.hero.meta.budget-value": "Lean / Moderado / Growth en PEN",
      "growth.hero.meta.spirit-value": "Refinamiento conservador · sin rebrand",

      /* Posicionamiento */
      "growth.positioning.badge": "Posicionamiento",
      "growth.positioning.title": "Un párrafo al que todo el plan debe obedecer",
      "growth.positioning.meta": "El enunciado norte",
      "growth.positioning.paragraph":
        "Para el residente o visitante de Miraflores que busca café de especialidad con una atmósfera trabajada y artística, Ursa Coffee Roasters es la tostadera propia donde el oso, el gramo y el verde hacen que cada taza sea deliberada. A diferencia de las cadenas escaladas y las salas de cata premiadas que anclan la escena de especialidad de Lima, Ursa empareja su propia tostadera con el motivo del oso y la línea Art Nouveau — el oficio se ve, y el personaje también.",
      "growth.positioning.caption":
        "Oso · personaje de marca · Gramo · el ritual de pesaje · Verde · origen + paleta bosque",
      "growth.positioning.callout.title":
        "Si una táctica no puede defenderse contra este párrafo, no sale.",
      "growth.positioning.callout.body":
        "Cada canal, oferta y concepto creativo abajo se chequea contra este enunciado. Las tácticas que diluyen al oso, se saltan el gramo o pisan el verde se marcan explícitamente como «no hacer».",
      "growth.positioning.card.evidence.heading": "Evidencia que respalda cada afirmación",
      "growth.positioning.card.evidence.1":
        "Tostadero propio — el editorial de Corner.inc y el censo de 1km se cross-validan (Terrua, Punto Café, RAIZ apoyan todos en tostado visible).",
      "growth.positioning.card.evidence.2":
        "Personaje del oso — 0 de 18 competidores del censo usan una identidad animal o de personaje. Ownable por ausencia.",
      "growth.positioning.card.evidence.3":
        "Teatro de dos barras — 0 de 18 competidores del censo operan un formato visible de dos barras. Arabica Espresso Bar es stand-up de barra única; el formato de dos barras está sin contender.",
      "growth.positioning.card.evidence.4":
        "Art Nouveau — 0 de 18 usan un lenguaje de diseño histórico coherente. Identidad visual sin contender.",
      "growth.positioning.card.risks.heading": "Riesgos y evidencia faltante",
      "growth.positioning.card.risks.1":
        "No se observó auditoría de registro de tueste. La afirmación «cada gramo se pesa» solo es creíble si se documenta. Riesgo: la inconsistencia socava la historia de oficio visible.",
      "growth.positioning.card.risks.2":
        "El posicionamiento basado en premios es frágil. El top-5 de CAM Café 2025 es reciente pero anual; si Ursa cae del top-5 en 2026, el enmarcado de «acreditado por premios» se debilita.",
      "growth.positioning.card.risks.3":
        "Brecha de volumen de reseñas. Ursa tiene ~56 reseñas en Google (agregado addagio) frente a 911 de Neira y 658 de Puku Puku. La brecha de descubrimiento es estructural, aún no se cierra.",
      "growth.positioning.card.risks.4":
        "Relaciones con productor no verificadas. Las «historias de origen específicas» requieren relaciones de finca documentadas — no surgió contrato ni evidencia de precio de compra.",
      "growth.positioning.card.test.heading": "Método de prueba antes de adopción completa",
      "growth.positioning.card.test.1":
        "Corre un «registro de shot pesado» de 30 días — cada espresso pesado y anotado, muestra auditada semanalmente con tolerancia ±0.3g. Costo: S/. 0 (solo registro).",
      "growth.positioning.card.test.2":
        "Haz A/B test del párrafo de posicionamiento como bio de Instagram por 30 días contra la bio actual — mide clics al perfil y DMs.",
      "growth.positioning.card.test.3":
        "Corre una prueba de cata ciega de «historia de origen»: el mismo café servido con y sin la tarjeta Lonya. Mide el delta de calidad percibida (1–10).",
      "growth.positioning.card.test.4":
        "Re-verificación por caminata del censo de Coffee Notes, Café Verde, OK Café (estado incierto) — 1 tarde, S/. 0.",

      /* Audiencia */
      "growth.audience.badge": "Audiencia",
      "growth.audience.title": "A quién servimos — y el job que cada uno le encarga a Ursa",
      "growth.audience.meta": "Cuatro personas primarias · clic para expandir",
      "growth.audience.persona.morning-regular.name": "El Regular de la Mañana",
      "growth.audience.persona.morning-regular.jtb":
        "Cuando arranque mi día en Miraflores, ayúdame a tomar una taza deliberadamente buena más rápido de lo que podría en casa, con una cara que recuerde mi pedido — sin hacerme pensar.",
      "growth.audience.persona.morning-regular.offer": "S/. 20/mes café ilimitado 7–10am + 20% off en lados",
      "growth.audience.persona.morning-regular.metric": "Visitas/semana ≥ 3 · attach de lados ≥ 60%",
      "growth.audience.persona.tourist-explorer.name": "El Explorador Turista",
      "growth.audience.persona.tourist-explorer.jtb":
        "Cuando visito Lima por unos días, ayúdame a encontrar un café de oficio que pueda recomendar y taggear — cerca de mi hotel, con una historia que pueda llevarme a casa.",
      "growth.audience.persona.tourist-explorer.offer": "Tarjeta de historia de origen + muestra de grano para llevar",
      "growth.audience.persona.tourist-explorer.metric": "Tags a @ursacoffeeperu · attach de bolsa ≥ 25%",
      "growth.audience.persona.remote-worker.name": "El Remote Worker",
      "growth.audience.persona.remote-worker.jtb":
        "Cuando necesito trabajar fuera de mi departamento por dos horas, ayúdame a encontrar un tercer lugar con Wi-Fi confiable y una segunda taza de calidad — sin sentir que me apuran.",
      "growth.audience.persona.remote-worker.offer": "Sello de lealtad de segunda taza + zona tranquila",
      "growth.audience.persona.remote-worker.metric": "Dwell time ≥ 90min · regresa en 7 días ≥ 40%",
      "growth.audience.persona.coffee-curious.name": "El Curioso del Café",
      "growth.audience.persona.coffee-curious.jtb":
        "Cuando quiero entender el café de especialidad, ayúdame a aprender lo suficiente para pedir con confianza — y contarles a mis amigos de dónde vienen los granos.",
      "growth.audience.persona.coffee-curious.offer": "Cata de Tres Orígenes + bolsa de grano",
      "growth.audience.persona.coffee-curious.metric": "Asistencia a cupping · repetición de bolsa ≥ 30%",

      /* Señales, prueba, canales de personas (arrays resueltos por índice) */
      "growth.audience.persona.morning-regular.signal.1": "Llega 7:03–7:30am",
      "growth.audience.persona.morning-regular.signal.2": "Pide la misma bebida",
      "growth.audience.persona.morning-regular.signal.3": "Paga en menos de 90s",
      "growth.audience.persona.morning-regular.proof": "Ursa abre 07:30; el ritual de pesaje es rápido porque el barista ya conoce la dosis.",
      "growth.audience.persona.morning-regular.channel.1": "Suscripción Ursa Mañana",
      "growth.audience.persona.morning-regular.channel.2": "Drop matutino por WhatsApp",
      "growth.audience.persona.morning-regular.channel.3": "Reconocimiento del barista",

      "growth.audience.persona.tourist-explorer.signal.1": "Entra con un mapa",
      "growth.audience.persona.tourist-explorer.signal.2": "Pregunta «¿qué es local?»",
      "growth.audience.persona.tourist-explorer.signal.3": "Fotografía la taza",
      "growth.audience.persona.tourist-explorer.proof": "8+ hoteles a la vuelta; el camino de huellas de oso en Reels y las tarjetas de conserjería hacen a Ursa encontrable.",
      "growth.audience.persona.tourist-explorer.channel.1": "Tarjetas de conserjería de hotel",
      "growth.audience.persona.tourist-explorer.channel.2": "Instagram Reels",
      "growth.audience.persona.tourist-explorer.channel.3": "Google Business Profile",
      "growth.audience.persona.tourist-explorer.channel.4": "Camino de huellas de oso",

      "growth.audience.persona.remote-worker.signal.1": "Laptop abierta",
      "growth.audience.persona.remote-worker.signal.2": "Una bebida + refill",
      "growth.audience.persona.remote-worker.signal.3": "Se queda 90+ minutos",
      "growth.audience.persona.remote-worker.proof": "El layout de dos barras da un lado tranquilo; la rotación de bebidas con nombre da una razón para volver mañana.",
      "growth.audience.persona.remote-worker.channel.1": "Alianzas de coworking",
      "growth.audience.persona.remote-worker.channel.2": "Google Maps",
      "growth.audience.persona.remote-worker.channel.3": "Precios de hora tranquila",

      "growth.audience.persona.coffee-curious.signal.1": "Pregunta por el origen",
      "growth.audience.persona.coffee-curious.signal.2": "Compra bolsas de café",
      "growth.audience.persona.coffee-curious.signal.3": "Asiste a cuppings",
      "growth.audience.persona.coffee-curious.proof": "Las tarjetas de historia, el «gramo de la semana» y las noches de cupping mensuales hacen el oficio legible, no intimidante.",
      "growth.audience.persona.coffee-curious.channel.1": "Noche de cupping mensual",
      "growth.audience.persona.coffee-curious.channel.2": "Gramo de la semana",
      "growth.audience.persona.coffee-curious.channel.3": "Tarjetas del atlas de orígenes",
      "growth.audience.persona.coffee-curious.channel.4": "Talleres",

      "growth.audience.detail.proof": "Punto de prueba",
      "growth.audience.detail.channels": "Canales que lo alcanzan",
      "growth.audience.detail.offer-for": "Oferta para él",
      "growth.audience.detail.success-metric": "Métrica de éxito",
      "growth.audience.callout.title":
        "Las señales de cada persona están ancladas al censo de 1km, no inventadas",
      "growth.audience.callout.morning":
        "Regular de la Mañana — anclado al hallazgo del censo de que Milenaria Cafe (misma cuadra, 170m) abre 6:30am y es elogiada por abrir temprano; Ursa abre 7:30am, así que la ventana 7:03–7:30am es el primer slot pre-trabajo que Ursa puede atender. La señal «pide la misma bebida» refleja la propia evidencia de Instagram de Ursa (comentarios de clientes que repiten) y el reel de @rutadelcafeperuano que cita visitas recurrentes. Riesgo: no tenemos datos POS de la distribución real de horario de llegada — la ventana 7:03–7:30am se infiere de horarios de apertura, no de timestamps observados de transacciones.",
      "growth.audience.callout.tourist":
        "Explorador Turista — anclado al conteo del censo de 8+ hoteles a la vuelta (distrito hotelero de Miraflores alrededor de Parque Kennedy). El camino de huellas de oso en Reels y las tarjetas de conserjería son el canal propuesto, aún no ejecutado. Riesgo: las señales «entra con mapa / pregunta qué es local / fotografía la taza» son hipótesis de persona, no comportamientos observados. Valida con un piloto de tarjetas de conserjería de 30 días antes de escalar.",
      "growth.audience.callout.remote":
        "Remote Worker — anclado a los pros y contras de NovaCircle que mencionan «los asientos pueden escasear en horas pico» y «lleno, especialmente los fines de semana». El layout de dos barras (barra de espresso + barra de coldbrew) es la base arquitectónica de una «zona tranquila», pero ninguna evidencia de plano confirma que el lado coldbrew sea de verdad más tranquilo. Riesgo: la métrica de dwell de 90+ min asume que Ursa tolera usuarios con laptop; el modelo operativo actual no aclara si se welcomea o se desincentiva a quienes se quedan.",
      "growth.audience.callout.coffee":
        "Curioso del Café — anclado al hallazgo del censo de que Bisetti es dueño de «escuela de café» (educación formal) y de que la cata de US$25 de Terrua valida demanda por degustación pagada. El campeón de Aeropress de Ursa Paulo Sierra (@rutadelcafeperuano, 564 likes) es evidencia directa de credibilidad para el canal educativo. Riesgo: la asistencia a cupping es solo métrica leading — no hay baseline histórico de asistencia para comparar.",
      "growth.audience.card.validate.heading": "Cómo validar las personas antes de escalar ofertas contra ellas",
      "growth.audience.card.validate.1":
        "Auditoría POS de 2 semanas — taggea cada transacción con daypart y flag de cliente repetido. Costo: S/. 0 (export POS). Confirma el mix de Regular de la Mañana y Remote Worker.",
      "growth.audience.card.validate.2":
        "Piloto de tarjetas de conserjería — 8 hoteles, 30 días, código de cupón único por hotel. Costo: ~S/. 200 impresión. Confirma la tasa de conversión del Explorador Turista.",
      "growth.audience.card.validate.3":
        "Hoja de inscripción en la primera noche de cupping — cuenta asistentes y opt-ins de email. Costo: S/. 0. Confirma la profundidad del Curioso del Café.",
      "growth.audience.card.missing.heading": "Qué evidencia falta",
      "growth.audience.card.missing.1":
        "No surgió ninguna encuesta a clientes de Ursa ni transcripción de entrevistas — las personas se infieren del comportamiento de competidores y de las señales propias de Instagram de Ursa, no de investigación primaria de clientes.",
      "growth.audience.card.missing.2":
        "No hay datos POS de dwell, distribución de daypart o cadencia de recompra — son métricas propuestas, aún no baselines.",
      "growth.audience.card.missing.3":
        "No hay datos demográficos (edad, ingreso, residencia) de la base real de clientes de Ursa — los bocetos de persona son conductuales, no demográficos.",
      "growth.audience.card.missing.4":
        "Fix: encarga una encuesta de interceptación de clientes de 4 semanas (n≈50) antes de escalar cualquier oferta específica por persona.",

      /* Mensaje */
      "growth.message.badge": "Mensaje",
      "growth.message.title": "Arquitectura de mensaje — de una promesa a los puntos de prueba",
      "growth.message.meta": "Promesa → Pilares → Prueba",
      "growth.message.brand-promise.badge": "Promesa de marca",
      "growth.message.brand-promise.text":
        "Ursa hace visible el oficio — cada taza es deliberada, pesada un gramo a la vez.",
      "growth.message.pillars.label": "Puntos de prueba",
      "growth.message.label.evidence": "Evidencia",
      "growth.message.label.risk": "Riesgo",
      "growth.message.pillar.visible-craft.title": "Oficio Visible",
      "growth.message.pillar.visible-craft.promise": "La tostadora está en escena. Cada gramo se pesa.",
      "growth.message.pillar.ownable-atmosphere.title": "Atmósfera Ownable",
      "growth.message.pillar.ownable-atmosphere.promise": "Oso, Art Nouveau, dos barras — nadie más tiene esto.",
      "growth.message.pillar.honest-origin.title": "Historias de Origen Honestas",
      "growth.message.pillar.honest-origin.promise": "Te decimos de dónde vino el grano, específicamente.",
      "growth.message.pillar.patient-continuity.title": "Continuidad Paciente",
      "growth.message.pillar.patient-continuity.promise": "Razones para volver cada semana, no solo una vez.",

      /* Pruebas, evidencia, riesgo de pilares (resueltos por id de pilar) */
      "growth.message.pillar.visible-craft.proof.1": "Tostadora a la vista desde la barra",
      "growth.message.pillar.visible-craft.proof.2": "«Un gramo a la vez» como ritual de pesaje",
      "growth.message.pillar.visible-craft.proof.3": "Baristas entrenados para hablar de origen, altitud, proceso",
      "growth.message.pillar.visible-craft.evidence":
        "El editorial de Corner.inc elogia que el «equipo de tostado visible crea un feeling de taller» de Ursa. Terrua (513 reseñas Google, 4.6★) y Punto Café (CAM 2025 2do puesto) apoyan ambos en tostadero visible/tostado in-house como la señal de credibilidad que convierte walk-ins. En el censo de competidores de 1km, 4 de 14 competidores in-catchment hacen de la visibilidad del tostadero el centro de su posicionamiento.",
      "growth.message.pillar.visible-craft.risk":
        "«Oficio visible» sin consistencia es hueco. Si la consistencia de tueste de Ursa se resbala (no surgió protocolo de QC documentado en la investigación), la tostadora visible se convierte en pasivo — el cliente ve la inconsistencia, no el oficio. Evidencia faltante: no hay auditoría de registro de tueste, no hay log de rendimiento de extracción observado en fuentes públicas.",

      "growth.message.pillar.ownable-atmosphere.proof.1": "Motivo del oso como personaje recurrente",
      "growth.message.pillar.ownable-atmosphere.proof.2": "Teatro de dos barras: espresso + cold brew lado a lado",
      "growth.message.pillar.ownable-atmosphere.proof.3": "Nombres acuñados de bebidas: Ursagroni, Maracumango (las otras dos bebidas con nombre — Filtrado Lonya, Durazno Clarificado — usan etiquetas de origen/descriptivas, no nombres acuñados)",
      "growth.message.pillar.ownable-atmosphere.evidence":
        "El censo de competidores de 1km de 18 competidores: 0 usan una identidad animal o de personaje; 0 operan un formato visible de dos barras; 0 usan nombres acuñados de bebidas. «Amauta» es el análogo más cercano — una palabra de herencia, no un personaje. El trío oso + dos-barras + nombre-acuñado está sin contender en el catchment.",
      "growth.message.pillar.ownable-atmosphere.risk":
        "La atmósfera es ownable solo mientras sea legible. Si al oso se le trata como decoración en vez de personaje (sin voz consistente, sin rol recurrente), los competidores pueden copiar la superficie (una mascota animal) sin copiar el significado. Riesgo: la identidad del oso se convierte en logo, no en personaje.",

      "growth.message.pillar.honest-origin.proof.1": "Línea Filtrado Lonya con finca + altitud (Utcubamba, Amazonas, 1,750m, Bourbon lavado)",
      "growth.message.pillar.honest-origin.proof.2": "«Gramo de la semana» destacado de micro-lote",
      "growth.message.pillar.honest-origin.proof.3": "Reporte trimestral de transparencia de origen",
      "growth.message.pillar.honest-origin.evidence":
        "El censo de competidores de 1km: Café Verde (posiblemente cerrado) fue el caso aleccionador — messaging genérico de «sostenibilidad» sin específicos. RAIZ y Terrua son dueños de la profundidad farm-to-cup, pero el origen único de Terrua (solo Villa Rica) es una historia de terroir estrecha. La línea Filtrado Lonya de Ursa (multi-origen, lote con nombre, altitud con nombre) está sin contender en el catchment.",
      "growth.message.pillar.honest-origin.risk":
        "«Específico» solo es creíble si la relación de finca con nombre es real y ongoing. Si Ursa no puede documentar la relación con productor detrás de cada lote Lonya (contrato, precio de compra, fecha de visita), la historia se degrada a marketing. Evidencia faltante: no surgió documentación de relación con productor en fuentes públicas.",

      "growth.message.pillar.patient-continuity.proof.1": "Rotación estacional de bebidas (orígenes Lonya)",
      "growth.message.pillar.patient-continuity.proof.2": "Piloto de suscripción Ursa Mañana (S/. 20/mes, tope de 50)",
      "growth.message.pillar.patient-continuity.proof.3": "Noches de cupping mensuales + drops de bebidas con nombre",
      "growth.message.pillar.patient-continuity.evidence":
        "El censo de competidores de 1km: Bisetti es dueño de «escuela de café» (educación formal); Puku Puku es dueño de «microlotes» retail (bolsa de S/.49); ningún competidor es dueño de una cadencia de suscripción + cupping + drop de bebida con nombre. El listing de CoffeePass Perú valida que Ursa ya participa en la infraestructura de loyalty de Lima.",
      "growth.message.pillar.patient-continuity.risk":
        "Las promesas de continuidad se erosionan en el momento en que se salta una cadencia semanal. Si la noche de cupping se salta un mes, o el drop de bebida con nombre llega tarde, el ritmo se rompe y la promesa se siente performative. Riesgo: la suscripción canibaliza visitas a precio completo si el attach rate < 60% (ver modelo Módulo 08).",

      "growth.message.callout.title":
        "No dividas los pilares entre canales — cada canal debe cargar la misma promesa",
      "growth.message.callout.body":
        "La tentación es usar Instagram para la atmósfera, Google para el oficio y WhatsApp para la continuidad. Eso fragmenta la marca. Los mismos cuatro pilares aparecen en cada canal, solo cambia la profundidad.",

      /* Hormozi */
      "growth.hormozi.badge": "Marco · Hormozi",
      "growth.hormozi.title": "Hormozi adaptado — con listas explícitas de «no hacer»",
      "growth.hormozi.meta": "Cinco principios adaptados · cada uno con una advertencia «no hacer»",
      "growth.hormozi.callout.title": "Adaptado, no importado",
      "growth.hormozi.callout.body":
        "La Ecuación de Valor de Hormozi es un marco emprendedor popular con respaldo anecdótico. Trata estas adaptaciones como hipótesis comprobables, no como principios probados. El marco científico más fuerte es Ehrenberg-Bass — assets distintivos más disponibilidad mental y física. Usamos Hormozi para disciplina de oferta, no como ley de crecimiento.",
      "growth.hormozi.label.do-not": "No hacer",

      /* Principios Hormozi (texto adaptado + advertencia resueltos por índice) */
      "growth.hormozi.principle.1.name": "Ecuación de Valor",
      "growth.hormozi.principle.1.adapted":
        "Aumentar Dream Outcome (convertirte en la persona que sabe de café bueno), aumentar Likelihood of Achievement (taza buena garantizada vía tostadera), reducir Time Delay (apertura 7am), reducir Effort & Sacrifice (la suscripción quita la decisión por taza).",
      "growth.hormozi.principle.1.caveat": "No prometas resultados de transformación que una cafetería no pueda entregar.",
      "growth.hormozi.principle.2.name": "Diseño de Oferta y Stacks",
      "growth.hormozi.principle.2.adapted":
        "Bundlea una bebida core + un lado + una muestra de grano + una tarjeta con historia. Ancla contra el total a la carta. Continuidad vía suscripción.",
      "growth.hormozi.principle.2.caveat": "Las anclas deben ser verdaderas, no infladas.",
      "growth.hormozi.principle.3.name": "Lead Magnets",
      "growth.hormozi.principle.3.adapted":
        "PDF gratuito de «rueda de sabores de origen» o ticket gratuito de mini-cupping con la primera compra de bolsa de retail — no un descuento.",
      "growth.hormozi.principle.3.caveat": "El lead magnet debe ser genuinamente útil, no un cupón disfrazado.",
      "growth.hormozi.principle.4.name": "Retención y Recompra",
      "growth.hormozi.principle.4.adapted":
        "Suscripción + rotación de bebidas con nombre + orígenes Lonya estacionales crean una razón para volver cada semana.",
      "growth.hormozi.principle.4.caveat": "No sobre-descuentes; protege la percepción de margen de especialidad.",
      "growth.hormozi.principle.5.name": "Más, Mejor, Nuevo",
      "growth.hormozi.principle.5.adapted":
        "Más (delivery, retail), Mejor (consistencia, servicio), Nuevo (bebidas estacionales, talleres). Secuencia Mejor antes que Más.",
      "growth.hormozi.principle.5.caveat": "Nuevo sin Mejor erosiona la confianza.",

      /* Sutherland */
      "growth.sutherland.badge": "Marco · Sutherland",
      "growth.sutherland.title": "Sutherland adaptado — el valor percibido es la palanca",
      "growth.sutherland.meta": "Cuatro palancas de valor percibido · baratas de probar, secuencialas primero",
      "growth.sutherland.callout.title": "Adaptado, no importado",
      "growth.sutherland.callout.body":
        "Los principios de valor percibido de Sutherland beben de economía conductual pero son en gran medida casos ilustrativos, no experimentos controlados en hospitalidad. Cada adaptación abajo debe tratarse como hipótesis comprobable con plan de medición, no como táctica probada.",
      "growth.sutherland.callout2.title": "La mirada de Sutherland es la palanca más barata — pruébala primero",
      "growth.sutherland.callout2.body":
        "El stack de oferta de Hormozi cambia el recibo. Los movimientos de valor percibido de Sutherland cambian el significado de la misma taza a costo casi cero: una tarjeta con historia, una preparación con nombre, un oso como personaje. Secuencia Sutherland antes que Hormozi siempre que puedas.",

      /* Principios Sutherland (texto adaptado + advertencia resueltos por índice) */
      "growth.sutherland.principle.1.name": "Valor percibido > valor objetivo",
      "growth.sutherland.principle.1.adapted":
        "Una tarjeta con historia que describe origen, altitud y proceso eleva el valor percibido más que una taza más grande al mismo costo.",
      "growth.sutherland.principle.2.name": "Experimentos baratos",
      "growth.sutherland.principle.2.adapted":
        "Prueba tarjetas de historia de bebidas con nombre, letreros de mesa y captions del personaje oso antes de cualquier rediseño caro. La mayoría cuesta S/. 0–200.",
      "growth.sutherland.principle.3.name": "Pricing psicológico y anclaje",
      "growth.sutherland.principle.3.adapted":
        "Un vuelo de cata de S/. 28 hace que un pour-over de S/. 14 se sienta razonable. Ancla, luego ofrece el tier accesible.",
      "growth.sutherland.principle.4.name": "El contexto moldea la percepción",
      "growth.sutherland.principle.4.adapted":
        "El layout de dos barras, los detalles Art Nouveau y la tostadora visible desde el counter son contexto que hace que el mismo café sepa mejor.",
      "growth.sutherland.principle.5.name": "Ideas irracionales pero comprobables",
      "growth.sutherland.principle.5.adapted":
        "Un maridaje «el oso recomienda» en la carta, un saludo ritual matutino o un destacado semanal de «gramo de la semana».",
      "growth.sutherland.principle.5.caveat": "Prueba barato; quédate solo con lo que mejora repetición o ticket.",

      /* Oferta */
      "growth.offer.badge": "Oferta",
      "growth.offer.title": "El stack de oferta de Ursa — cinco capas de taza core a continuidad",
      "growth.offer.meta": "Stack Hormozi · ancla verdadera",
      "growth.offer.stack.heading": "El stack, de abajo hacia arriba",
      "growth.offer.stack.italic-note":
        "Ancla el stack contra el total a la carta — con verdad. La continuidad es la capa de arriba, no el hook.",
      "growth.offer.layer.continuity.label": "Continuidad",
      "growth.offer.layer.continuity.item": "Invitación a suscripción Ursa Mañana",
      "growth.offer.layer.continuity.note": "Dale al regular una razón para volver el lunes.",
      "growth.offer.layer.story.label": "Historia",
      "growth.offer.layer.story.item": "Tarjeta de historia de origen",
      "growth.offer.layer.story.note": "Finca, altitud, proceso. Fotografiable, llevable.",
      "growth.offer.layer.sample.label": "Muestra",
      "growth.offer.layer.sample.item": "Muestra de 50g del micro-lote de la semana",
      "growth.offer.layer.sample.note": "Convierte una visita en prueba de casa.",
      "growth.offer.layer.side.label": "Lado",
      "growth.offer.layer.side.item": "Maridaje de cookie o empanada",
      "growth.offer.layer.side.note": "El oso recomienda el maridaje para esta bebida.",
      "growth.offer.layer.core.label": "Core",
      "growth.offer.layer.core.item": "Pour-over o flat white (bebida con nombre)",
      "growth.offer.layer.core.note": "La taza de oficio, pesada un gramo a la vez.",
      "growth.offer.card.why.heading": "Por qué funciona el stack",
      "growth.offer.card.why.1": "La bebida core ancla el precio; el lado es el attach de mayor margen.",
      "growth.offer.card.why.2": "La muestra de grano convierte una visita en prueba de casa — exposición repetida.",
      "growth.offer.card.why.3": "La tarjeta con historia es la palanca de Sutherland: gratis de imprimir, sube el valor percibido.",
      "growth.offer.card.why.4": "La invitación a suscripción cierra el loop solo después de que el oficio se vivió.",
      "growth.offer.card.feasibility.heading": "Factibilidad operativa — prep, superposición, capacitación",
      "growth.offer.card.feasibility.continuity.label": "Continuidad",
      "growth.offer.card.feasibility.continuity.body":
        "Suscripción Ursa Mañana — prep: 0 min/visita (la suscripción es un flag del POS). Superposición de insumo: 100% (usa el espresso existente). Capacitación: 1 hora para que el equipo reconozca suscriptores y aplique el descuento. Riesgo: requiere POS que soporte flags de miembro; si no, el tally manual erosiona el ahorro de tiempo de staff.",
      "growth.offer.card.feasibility.story-card.label": "Tarjeta de historia",
      "growth.offer.card.feasibility.story-card.body":
        "Tarjeta de historia de origen — prep: 0 min/servicio (pre-impresa). Superposición de insumo: 0 (bien de papel). Capacitación: 15 min en qué tarjeta va con qué bebida. Costo: S/. 0.40/tarjeta impresión. Riesgo: un mismatch tarjeta-bebida erosiona credibilidad más rápido que ninguna tarjeta.",
      "growth.offer.card.feasibility.sample.label": "Muestra",
      "growth.offer.card.feasibility.sample.body":
        "Muestra de 50g de grano — prep: 30 seg (cucharada + etiqueta). Superposición de insumo: 100% (stock de bolsa de retail). Capacitación: 10 min en porción y formato de etiqueta. Riesgo: 50g está por debajo del rendimiento brewable para algunos métodos — aclara instrucciones de preparación en la etiqueta o la muestra se siente inútil.",
      "growth.offer.card.feasibility.side.label": "Lado",
      "growth.offer.card.feasibility.side.body":
        "Cookie / empanada — prep: 0 min/servicio (ya preparada). Superposición de insumo: 100% (línea de comida existente). Capacitación: 5 min en sugerencias de maridaje. Riesgo: si la pastelería se agota antes de las 11am, la oferta de attach se degrada — el schedule de horneado debe alinearse con el target diario de attach.",
      "growth.offer.card.feasibility.core.label": "Core",
      "growth.offer.card.feasibility.core.body":
        "Pour-over / flat white — prep: 3–4 min (pour-over) o 90s (flat white). Superposición de insumo: 100%. Capacitación: habilidad existente de barista. Riesgo: el pour-over en pico crea un cuello de botella de tiempo de servicio si hay más de 3 pedidos simultáneos; considera cap de pour-over en 8–9am.",
      "growth.offer.card.worked-example.heading": "Un ejemplo trabajado",
      "growth.offer.card.worked-example.body":
        "Un turista pide un pour-over, acepta el maridaje de cookie, se lleva la muestra de grano y la tarjeta con historia, y sale con opt-in de WhatsApp. Tres semanas después, taggea a Ursa desde otra ciudad y le manda un amigo en Lima.",
      "growth.offer.card.worked-example-ticket": "Ticket",
      "growth.offer.card.worked-example.touchpoints": "Touchpoints",
      "growth.offer.card.worked-example-referral": "Referido",

      /* Lente de oferta (Hormozi, 8 preguntas aplicadas a Ursa Mañana) */
      "growth.offer.lens.badge": "Lente de oferta",
      "growth.offer.lens.heading": "La lente de ocho preguntas, aplicada a Ursa Mañana",
      "growth.offer.lens.subtitle": "Cada fila responde una pregunta que el marco hace antes de que una oferta pueda salir.",
      "growth.offer.lens.row.outcome.label": "Outcome (Resultado)",
      "growth.offer.lens.row.outcome.body":
        "Una mañana en la que la decisión del café ya está tomada — cada día de semana, 7–10am, una taza de autor en Alcanfores 183. El cliente no compra café; compra una mañana sin fricción.",
      "growth.offer.lens.row.likelihood.label": "Likelihood (Probabilidad)",
      "growth.offer.lens.row.likelihood.body":
        "Alta. Ursa tuesta en casa, así que la taza marginal siempre está disponible; el único modo de falla es la capacidad de barra en pico — que el cupo de 50 socios del piloto existe para probar antes de escalar.",
      "growth.offer.lens.row.delay.label": "Delay (Demora)",
      "growth.offer.lens.row.delay.body":
        "El mismo día. El socio siente el valor la mañana que entra por primera vez. Sin tiempo de espera, sin secuencia de onboarding, sin lista de espera una vez abierto el piloto.",
      "growth.offer.lens.row.effort.label": "Effort (Esfuerzo)",
      "growth.offer.lens.row.effort.body":
        "Un mensaje de WhatsApp o un pago en la barra. Sin app, sin escanear QR, sin recarga. El barista marca una pata en la tarjeta — el ritual es lo que reduce la fricción.",
      "growth.offer.lens.row.proof.label": "Proof (Prueba)",
      "growth.offer.lens.row.proof.body":
        "Reconocido por premio (CAM Café Perú 2025, top 5 en especialidad). La tostadora se ve desde el counter. Las tarjetas de historia citan finca, altitud, proceso. El costo marginal de S/. 1.20–1.80 está documentado en los registros de tostado.",
      "growth.offer.lens.row.risk-reversal.label": "Risk reversal (Reversión de riesgo)",
      "growth.offer.lens.row.risk-reversal.body":
        "Cancelas cuando quieras, sin contrato, sin permanencia. Devolución prorrata el primer mes si el ritual no te cabe. El piloto está capado a 50 para poder cerrarlo limpio en 60 días si el modelo no paga.",
      "growth.offer.lens.row.packaging.label": "Packaging (Empaque)",
      "growth.offer.lens.row.packaging.body":
        "Una oferta, un precio, una ventana: «Ursa Mañana — S/. 20/mes, Lun–Vie 7–10am». Sin niveles, sin add-ons que confundan la elección. El 20% off en acompañamientos es el único complemento, enmarcado como la recomendación del oso, no como un upsell.",
      "growth.offer.lens.row.friction.label": "Friction (Fricción)",
      "growth.offer.lens.row.friction.body":
        "Flag en el POS, no una app aparte. Tarjeta física de sellos, no una billetera digital. Copy solo en español escrito para Miraflores, no traducido. El barista conoce al socio por nombre en una semana.",
      "growth.offer.lens.footnote":
        "En la lente de oferta, Ursa Mañana sobrevive porque el costo marginal de una taza de autor (S/. 1.20–1.80) queda tan por debajo del valor mensual percibido que la oferta se sostiene incluso en la celda conservadora de la tabla de sensibilidad.",

      /* Lente conductual (Sutherland) sobre el mismo stack */
      "growth.offer.behavioral.badge": "Lente conductual",
      "growth.offer.behavioral.heading": "El mismo stack, leído con las palancas de valor percibido de Sutherland",
      "growth.offer.behavioral.body":
        "Desde una perspectiva conductual, el stack funciona en tres palancas que casi no cuestan. La tarjeta de historia señala el oficio — origen, altitud, proceso — a más o menos S/. 0.40 la impresión. El maridaje con nombre («el oso recomienda») construye un ritual, no una transacción; el cliente vuelve por el saludo, no por el descuento. Y la muestra de 50g de grano reinmarca una visita como el inicio de una prueba en casa — un levantamiento de valor percibido sin cambiar el precio de la carta. Secuenciar estas tres antes de la invitación a suscripción es lo que hace que la invitación aterrice como reconocimiento, no como cierre de ventas.",

      /* Journey */
      "growth.journey.badge": "Journey",
      "growth.journey.title": "El customer journey, de Discover a Advocate",
      "growth.journey.meta": "Horizontal · 5 etapas",
      "growth.journey.label.stage": "Etapa",
      "growth.journey.label.channel": "Canal",
      "growth.journey.label.tactic": "Táctica",
      "growth.journey.stage.discover.name": "Descubrir",
      "growth.journey.stage.discover.channel": "Reel de Instagram · Google Maps · Tarjeta de hotel · Foto de un amigo",
      "growth.journey.stage.discover.tactic": "Camino de huellas de oso en Reels, GBP verificada, tarjetas de conserjería en 8 hoteles.",
      "growth.journey.stage.consider.name": "Considerar",
      "growth.journey.stage.consider.channel": "Reseñas · Tarjetas de historia · Pizarra de bebidas con nombre",
      "growth.journey.stage.consider.tactic": "TripAdvisor reclamado; tarjetas de historia de origen en la carta hacen el oficio legible.",
      "growth.journey.stage.first-visit.name": "Primera visita",
      "growth.journey.stage.first-visit.channel": "Saludo del barista · Oso como personaje · Ritual de pesaje",
      "growth.journey.stage.first-visit.tactic": "El barista nombra el grano, entrega una tarjeta con historia, menciona el próximo cupping.",
      "growth.journey.stage.repeat.name": "Repetir",
      "growth.journey.stage.repeat.channel": "Lista de WhatsApp · Suscripción · Rotación de bebidas con nombre",
      "growth.journey.stage.repeat.tactic": "Aviso semanal de drop por WhatsApp; invitación a Ursa Mañana para los regulares de 7–10am.",
      "growth.journey.stage.advocate.name": "Abogar",
      "growth.journey.stage.advocate.channel": "Reto UGC · Cupón de referido · Foto del gramo de la semana",
      "growth.journey.stage.advocate.tactic": "Reto del barista oso; suscriptor trae-a-un-amigo con primera taza gratis.",
      "growth.journey.callout.title":
        "Advocate no es el final del funnel — es el arranque del Discover de alguien más",
      "growth.journey.callout.body":
        "El reto del barista oso, la foto del gramo de la semana y el cupón de referido están diseñados para que el contenido de un advocate se convierta en la primera impresión de un extraño sobre Ursa. El journey es un loop, no una línea.",

      /* Canales */
      "growth.channels.badge": "Canales",
      "growth.channels.title": "Cobertura de canales — veinte superficies, una promesa",
      "growth.channels.meta": "Agrupado por etapa de funnel · cada uno carga los cuatro pilares",
      "growth.channels.funnel.discover.name": "Descubrir",
      "growth.channels.funnel.discover.desc": "Llega a nuevas audiencias en Miraflores",
      "growth.channels.funnel.engage.name": "Enganchar",
      "growth.channels.funnel.engage.desc": "Convierte interés en una visita",
      "growth.channels.funnel.retain.name": "Retener",
      "growth.channels.funnel.retain.desc": "Convierte primeras visitas en hábito",
      "growth.channels.funnel.advocate.name": "Abogar",
      "growth.channels.funnel.advocate.desc": "Deja que los regulares traigan al próximo regular",
      "growth.channels.channel.acquisition.name": "Adquisición",
      "growth.channels.channel.acquisition.tactic": "Social pagado (Meta, Miraflores 3km) → primer visitante con bebida ancla de S/. 14.",
      "growth.channels.channel.local-discovery.name": "Descubrimiento local",
      "growth.channels.channel.local-discovery.tactic": "Huellas de oso en hitos de Miraflores y un Reel «camina a Ursa».",
      "growth.channels.channel.google-maps.name": "Google / Maps",
      "growth.channels.channel.google-maps.tactic": "Verifica el Google Business Profile con fotos, horarios, link a carta y postea semanal.",
      "growth.channels.channel.organic-social.name": "Social orgánico",
      "growth.channels.channel.organic-social.tactic": "Reels, Stories, carruseles. «Un gramo a la vez» como apertura ritual recurrente.",
      "growth.channels.channel.paid-social.name": "Social pagado",
      "growth.channels.channel.paid-social.tactic": "Meta ads, radio 3km, lookalike sobre regulares existentes. A/B test del oso versus la taza.",
      "growth.channels.channel.tourism.name": "Turismo",
      "growth.channels.channel.tourism.tactic": "Reel POV caminando desde Parque Kennedy; enmarcado «más cerca de lo que crees» para visitantes.",
      "growth.channels.channel.creator-strategy.name": "Estrategia de creadores",
      "growth.channels.channel.creator-strategy.tactic": "3 micro-creadores por trimestre — un barista, un foodie, un viajero — briefs, no posts.",
      "growth.channels.channel.delivery.name": "Delivery",
      "growth.channels.channel.delivery.tactic": "Re-fotografía de carta en Rappi y pricing de bundle. Reel del ritual de empaque construye confianza.",
      "growth.channels.channel.events.name": "Eventos",
      "growth.channels.channel.events.tactic": "Noche de cupping mensual y reveal de bebida estacional con ceremonia de destapar.",
      "growth.channels.channel.partnerships.name": "Alianzas",
      "growth.channels.channel.partnerships.tactic": "8 hoteles cercanos con tarjetas de conserjería de origen; código de cupón canjeable por hotel.",
      "growth.channels.channel.hotels.name": "Hoteles",
      "growth.channels.channel.hotels.tactic": "Tarjetas de conserjería y un pequeño regalo de grano para cuartos VIP en hoteles aliados.",
      "growth.channels.channel.offices.name": "Oficinas / coworking",
      "growth.channels.channel.offices.tactic": "Sampling B2B de oficinas (10 oficinas) para cuentas mayoristas de grano y runs de mañana.",
      "growth.channels.channel.community.name": "Comunidad",
      "growth.channels.channel.community.tactic": "Reto del barista oso y muro de fotos del «gramo de la semana» en el local.",
      "growth.channels.channel.loyalty.name": "Lealtad",
      "growth.channels.channel.loyalty.tactic": "Listado en CoffeePass Perú y rotación de bebidas con nombre como razón recurrente.",
      "growth.channels.channel.email-whatsapp.name": "Email / WhatsApp",
      "growth.channels.channel.email-whatsapp.tactic": "Aviso semanal de drop y destacado del «gramo de la semana». Prompt de consentimiento en la caja.",
      "growth.channels.channel.service-recovery.name": "Recuperación de servicio",
      "growth.channels.channel.service-recovery.tactic": "Respuesta directa por WhatsApp y taza de retorno cortesía. Documenta el patrón semanal.",
      "growth.channels.channel.retail-beans.name": "Bolsas de café",
      "growth.channels.channel.retail-beans.tactic": "Etiquetas Art Nouveau con fecha de tueste; vende en counter y vía Rappi.",
      "growth.channels.channel.referral.name": "Referido",
      "growth.channels.channel.referral.tactic": "Suscriptor «trae a un amigo» con primera taza gratis; pareado con la recomendación del oso.",
      "growth.channels.channel.reviews.name": "Reseñas",
      "growth.channels.channel.reviews.tactic": "Pedido de reseña en Google y TripAdvisor 24h después de la primera visita; responde en 48h.",
      "growth.channels.channel.wholesale.name": "Mayorista / B2B",
      "growth.channels.channel.wholesale.tactic": "Sampling de oficinas → cuentas mayoristas de grano. Reporte trimestral de origen como pitch.",
      "growth.channels.card.discover.heading": "Descubrir · lo que el censo muestra que funciona",
      "growth.channels.card.discover.1":
        "Google Business Profile — Neira (911 reseñas) y Puku Puku (658 reseñas TA) prueban que el volumen de reseñas es la palanca dominante de descubrimiento en esta zona. Las ~56 reseñas en Google de Ursa (agregado addagio) son la brecha.",
      "growth.channels.card.discover.2":
        "Proximidad de hoteles — Milenaria (misma cuadra, 170m) atrae tráfico de desayuno turista vía walk-up desde 8+ hoteles cercanos. Las tarjetas de conserjería son el canal propuesto; Milenaria valida la demanda.",
      "growth.channels.card.discover.3":
        "Reels de Instagram — el reel de @rutadelcafeperuano sobre el campeón de Aeropress de Ursa (564 likes, 18 comentarios) es evidencia directa de que el contenido de comunidad cafetera viaja. El n=2 de TA de Punto Café versus premios muestra alcance orgánico débil — el contenido es el multiplicador.",
      "growth.channels.card.engage.heading": "Enganchar · lo que el censo muestra que funciona",
      "growth.channels.card.engage.1":
        "Formato de cata — Terrua (vuelo de US$25) y Cate (sala de cata) ambos validan demanda por degustación pagada. Cate tiene 190 reseñas en Google a 4.6★ — el formato de cata empuja el volumen de reseñas.",
      "growth.channels.card.engage.2":
        "Delivery Rappi — múltiples competidores del censo activos en Rappi (Puku Puku, Neira). Ursa ya está en Rappi; el delivery es table-stakes, no diferenciación.",
      "growth.channels.card.engage.3":
        "Cobrand WorkCafé — el experimento WorkCafé de Neira es un cuento de precaución: confusión «¿café versus co-working?» en reseñas. El canal de sampling de oficinas de Ursa debe ser B2B (mayorista), no identidad de co-working.",
      "growth.channels.card.retain-advocate.heading": "Retener y Abogar · lo que el censo muestra que funciona",
      "growth.channels.card.retain-advocate.1":
        "Bolsas de retail — Puku Puku vende bolsas a S/.49 con mención de TA como tema de elogio. Ursa es actualmente solo Instagram para retail; el ancla de S/.49 es un benchmark.",
      "growth.channels.card.retain-advocate.2":
        "CoffeePass Perú — Ursa ya está listado. La infraestructura de lealtad de Lima existe; la palanca es hacer el listado visible en la caja.",
      "growth.channels.card.retain-advocate.3":
        "Cadencia de respuesta a reseñas — el volumen de 911 reseñas de Neira viene con respuestas activas del dueño (observado en snippets). La cadencia de respuesta de Ursa se desconoce; el SLA de 48h en la tarjeta del canal es una hipótesis.",
      "growth.channels.callout.risks.title": "Riesgos y evidencia de canal faltante",
      "growth.channels.callout.risks.1":
        "Sin baseline de ROI de social pagado para Ursa. La evidencia de competidores (Neira, Puku Puku) muestra outcomes de volumen de reseñas, no inputs de gasto en ads. No podemos inferir un CPA de Meta ads sin un piloto específico de Ursa.",
      "growth.channels.callout.risks.2":
        "La conversión de tarjetas de conserjería es asumida, no medida. El piloto de 8 hoteles es una prueba, no un canal probado. Riesgo: los hoteles aceptan las tarjetas pero los conserjes no recomiendan activamente.",
      "growth.channels.callout.risks.3":
        "El consentimiento de opt-in de WhatsApp no es operativamente trivial. El régimen de protección de datos del Perú (Ley 29733) requiere consentimiento explícito; el prompt en la caja necesita revisión legal antes de lanzar.",
      "growth.channels.callout.risks.4":
        "La comisión del 30% de Rappi erosiona el margen de especialidad. Estar activo en Rappi no es lo mismo que ser rentable en Rappi. Riesgo: el volumen de delivery canibaliza visitas en el local sin proteger el margen.",
      "growth.channels.callout.test.title": "Método de prueba — valida canal por canal antes de escalar",
      "growth.channels.callout.test.body":
        "Corre cada canal nuevo como un piloto de 30 días con una métrica primaria única y una regla de parada. GBP: target +10 reseñas Google/mes, para si son < 5/mes tras 60 días. Tarjetas de conserjería: target 5 redenciones/hotel/mes, para si son < 2 tras 30 días. Noche de cupping: target 8 asistentes/sesión, para si son < 4 por 2 sesiones seguidas. Bolsa de retail: target 20 unidades/semana en counter, para si son < 8 tras 30 días. Los costos están documentados en el Asignador de Presupuesto; los outcomes del piloto alimentan el Seguimiento de Experimentos.",

      /* Presupuesto */
      "growth.budget.badge": "Presupuesto",
      "growth.budget.title": "Tres escenarios de presupuesto — elige uno y el plan se ajusta",
      "growth.budget.meta": "Lean / Moderado / Growth en PEN",
      "growth.budget.label.monthly-total": "Total mensual",
      "growth.budget.label.more-items": "+ {n} ítems más",
      "growth.budget.stat.lean.label": "Lean · canales gratis y propios primero",
      "growth.budget.stat.moderate.label": "Moderado · social pagado + creadores + cuppings",
      "growth.budget.stat.growth.label": "Growth · turismo + B2B + piloto de suscripción",
      "growth.budget.button.budget-allocator": "Abrir el Asignador de Presupuesto",
      "growth.budget.button.roi": "Modelar ROI por canal",
      "growth.budget.label.per-month": "/mes",
      "growth.budget.scenario.lean.name": "Lean",
      "growth.budget.scenario.moderate.name": "Moderado",
      "growth.budget.scenario.growth.name": "Growth",
      "growth.budget.scenario.lean.focus": "Canales gratis y propios primero: GBP, WhatsApp, Reels orgánicos, tarjetas de hotel, tarjetas de historia",
      "growth.budget.scenario.lean.item.1": "Optimización de Google Business Profile",
      "growth.budget.scenario.lean.item.2": "Tarjetas de historia y letreros de mesa (impresión)",
      "growth.budget.scenario.lean.item.3": "Tarjetas de conserjería (8 hoteles)",
      "growth.budget.scenario.lean.item.4": "1 piloto de creador (micro)",
      "growth.budget.scenario.lean.item.5": "Tooling de lista de WhatsApp y consentimiento",
      "growth.budget.scenario.lean.item.6": "Producción de Reels (in-house, 4/mes)",
      "growth.budget.scenario.lean.item.7": "Contingencia",
      "growth.budget.scenario.moderate.focus": "Añade social pagado, 2–3 creadores, noches de cupping, optimización de Rappi",
      "growth.budget.scenario.moderate.item.1": "Baseline Lean",
      "growth.budget.scenario.moderate.item.2": "Social pagado (Meta, radio Miraflores)",
      "growth.budget.scenario.moderate.item.3": "2 creadores adicionales",
      "growth.budget.scenario.moderate.item.4": "Noche de cupping mensual",
      "growth.budget.scenario.moderate.item.5": "Re-fotografía de carta en Rappi y bundles",
      "growth.budget.scenario.moderate.item.6": "Landing page y tooling de email",
      "growth.budget.scenario.growth.focus": "Añade alianzas de turismo, sampling B2B de oficinas, piloto de suscripción, fotógrafo",
      "growth.budget.scenario.growth.item.1": "Baseline Moderado",
      "growth.budget.scenario.growth.item.2": "Programa de alianza de turismo / hotel",
      "growth.budget.scenario.growth.item.3": "Sampling B2B de oficinas (10 oficinas)",
      "growth.budget.scenario.growth.item.4": "Build del piloto de suscripción y soporte",
      "growth.budget.scenario.growth.item.5": "Fotógrafo contratado (mensual)",
      "growth.budget.scenario.growth.item.6": "Paid search y ads en maps",
      "growth.budget.scenario.growth.item.7": "Contingencia",
      "growth.budget.card.unlocks.heading": "Lo que desbloquea cada escenario",
      "growth.budget.card.unlocks.lean":
        "Lean — corre GBP, WhatsApp, Reels orgánicos, tarjetas de hotel, tarjetas de historia. Los primeros 30 días.",
      "growth.budget.card.unlocks.moderate":
        "Moderado — añade social pagado, 2–3 creadores, cupping mensual, optimización de Rappi. El plan de 60 días.",
      "growth.budget.card.unlocks.growth":
        "Growth — añade alianzas de turismo, sampling B2B de oficinas, piloto de suscripción, fotógrafo. El plan de 90 días.",
      "growth.budget.card.choose.heading": "Cómo elegir",
      "growth.budget.card.choose.body":
        "Elige el presupuesto que el dueño pueda sostener al menos tres meses sin titubear. El plan está diseñado para que cualquiera de los tres sea internamente coherente — no hay escenario «Medio-Moderado» que rompa. Re-evalúa al día 30 contra las reglas de parada de experimentos en la Hoja de Ruta.",

      /* ---- Roadmap view (Module 07) ---- */
      "roadmap.lede":
        "Cada acción de abajo tiene un responsable nombrado, una métrica principal y una regla de parada. Ningún flujo de trabajo sobrevive a su regla de parada sin una re-decisión escrita — cuando una táctica deja de ganarse su lugar, se pausa, no se tolera en silencio. El plan está secuenciado para que los primeros treinta días cuesten casi nada y no dependan de nadie fuera de Ursa; pago, creadores y el piloto de suscripción solo salen después de que los experimentos más baratos hayan probado el canal. El oso, el gramo y el verde son innegociables en todo momento; el rebrand total está fuera de la mesa.",
      "roadmap.meta.phasing": "Planes de 72h / 30 / 60 / 90 días",
      "roadmap.meta.horizon": "Hoja de ruta de 12 meses",
      "roadmap.meta.governance": "Responsables, métricas, reglas de parada",

      "roadmap.phase.1.badge": "Horas 0 → 72",
      "roadmap.phase.1.intro":
        "El primer movimiento no es una campaña — es puesta en orden. Las cinco acciones de abajo cuestan menos de S/. 1,000 juntas, no dependen de ningún proveedor externo y desbloquean cada fase posterior: el Google Business Profile alimenta la búsqueda en Maps y el embudo de cómo llegar; las fotos de las dos barras, las bebidas con nombre y las bolsas de grano se convierten en materia prima para Reels, tarjetas con historia y el re-shoot de Rappi; el consentimiento de WhatsApp en la caja siembra la única lista propia de audiencia que Ursa tendrá al día 30. Haz estas cinco en los primeros tres días — antes de cualquier pago, brief de creador o diseño de suscripción.",
      "roadmap.phase.2.badge": "Día 1 → 30",
      "roadmap.phase.2.intro":
        "El mes uno es canales propios y los experimentos de menor costo — sin pago, sin contratos con creadores, sin construir suscripción. La serie Gram of the Week sale al aire; los primeros ocho Reels se publican desde el calendario de contenido; las tarjetas de conserjería llegan a ocho hoteles a menos de diez minutos caminando de Alcanfores 183. Los experimentos 01–05 se revisan al día 21 — tres semanas completas alcanzan para leer dirección sin pretender leer magnitud — y cada uno se gradúa, se mata o se extiende según su propia regla de parada, nunca por corazonada.",
      "roadmap.phase.3.badge": "Día 31 → 60",
      "roadmap.phase.3.intro":
        "El mes dos enciende el pago social y el piloto de creadores solo porque el mes uno ya produjo los activos y las señales de audiencia contra los que este gasto se dirige. La primera noche de catas se hace en el local; Rappi se refotografía y se arman bundles para subir el ticket promedio de delivery; la lista de espera de Ursa Mañana abre para medir demanda antes de comprometer un cupo de piloto. Si los cinco experimentos del mes uno fallaron, esta fase no sale — primero se leen las reglas de parada, y el gasto ahorrado se vuelve a un mes uno rediseñado en vez de un mes dos más ruidoso.",
      "roadmap.phase.4.badge": "Día 61 → 90",
      "roadmap.phase.4.intro":
        "El mes tres lanza el piloto de suscripción Ursa Mañana, tope de cincuenta suscriptores para medir canibalización antes de escalar, y publica el primer reporte trimestral de origen — una pieza de transparencia que convierte la tostadora de Ursa en un activo de historia y no en un mueble. Cada experimento del tracker se gradúa o se mata; nada pasa a Q2 sin veredicto. Si se aprueba el presupuesto Growth, comienza el sampling B2B en diez oficinas cercanas. El sistema de crecimiento distintivo de Nivel 2 — nuevo copy, nuevos Reels, rotación de bebidas con nombre — se decide solo después de la lectura de día 90, nunca antes.",

      "roadmap.section.1.badge": "Sección 01 · Urgencia",
      "roadmap.section.1.title": "Primeras 72 horas — reclamar las superficies que Ursa ya tiene",
      "roadmap.section.1.callout.title": "Por qué estas cinco, en este orden",
      "roadmap.section.1.callout.body":
        "Ninguna de las cinco acciones de las primeras 72 horas depende de un proveedor, una aprobación de presupuesto o una revisión creativa. Son cosas que Ursa puede hacer con el equipo y los activos que ya tiene en Alcanfores 183. La alternativa considerada fue arrancar con pago social el día uno — descartada porque el tráfico pago que aterriza en un Google Business Profile sin verificar, un TripAdvisor sin reclamar y un menú de Rappi sin fotografiar quema dinero sin convertir. Cualquier cosa que requiera aprobación externa (pago social, contratos con creadores, construcción de suscripción) espera hasta el día 8, cuando las superficies donde aterrizará el tráfico ya están limpias.",

      "roadmap.section.2.badge": "Sección 02 · Mes uno",
      "roadmap.section.2.title":
        "Plan de 30 días — canales propios en vivo, primeros experimentos corriendo",

      "roadmap.section.3.badge": "Sección 03 · Mes dos",
      "roadmap.section.3.title":
        "Plan de 60 días — pago + creadores + catas + optimización de Rappi",

      "roadmap.section.4.badge": "Sección 04 · Mes tres",
      "roadmap.section.4.title":
        "Plan de 90 días — piloto de suscripción + primer reporte de origen + decisiones de graduación",
      "roadmap.section.4.callout.title": "Ritual de graduación del día 90",
      "roadmap.section.4.callout.body":
        "Al final del día 90, cada experimento del Seguimiento de Experimentos lleva uno de cuatro estados: Propuesto (todavía no corre), En curso, Aprobado (graduado a permanente) o Cancelado (regla de parada activada). Ningún experimento se queda sin estado — una prueba que corre noventa días sin veredicto ya no es una prueba, es un compromiso permanente no declarado, y los compromisos permanentes no declarados son cómo los presupuestos de marketing se inflan en silencio. La regla de graduación es simple: si la regla de parada no se activó y la métrica de éxito se movió en la dirección correcta, se gradúa; si no, se mata. No hay un quinto estado.",

      "roadmap.section.5.badge": "Sección 05 · Horizonte",
      "roadmap.section.5.title": "Hoja de ruta de innovación de 12 meses — temas por trimestre",
      "roadmap.section.5.intro":
        "Cada trimestre tiene un solo tema dominante. Los temas se acumulan — Q2 no deshace Q1; Q3 extiende la continuidad; Q4 abre B2B y mayoristas solo cuando el retail y la comunidad ya están estables. Ningún tema puede arrancar antes de que su predecesor haya graduado sus experimentos centrales, y si el veredicto del predecesor se retrasa, el gasto del siguiente trimestre se retiene hasta que la lectura caiga.",
      "roadmap.section.5.callout.title": "Por qué un solo tema por trimestre",
      "roadmap.section.5.callout.body":
        "Las cafeterías de especialidad fracasan sus programas de crecimiento corriendo cuatro iniciativas en paralelo y terminando ninguna — cada reunión se vuelve un update de estado, ninguna decisión recibe la deliberación que necesita, y los experimentos que deberían matarse sobreviven porque nadie tiene el ancho de banda para matarlos. Un tema por trimestre obliga a una re-decisión en el límite: graduar, matar o extender. Q2 no arranca hasta que los experimentos centrales de Q1 tengan veredicto; si siguen En curso, el veredicto espera dos semanas más y el gasto de Q2 se retiene. Esa es la disciplina sobre la que está construida esta hoja de ruta.",
      "roadmap.section.5.quarter.1": "Las fundaciones salen primero",
      "roadmap.section.5.quarter.2": "Capa de distribución",
      "roadmap.section.5.quarter.3": "Capa de continuidad",
      "roadmap.section.5.quarter.4": "Capa comercial",

      "roadmap.section.6.badge": "Sección 06 · Presupuesto",
      "roadmap.section.6.title":
        "Escenarios de presupuesto — lean, moderado, growth en PEN mensual",
      "roadmap.section.6.meta": "Elige el que puedes sostener 90 días",
      "roadmap.section.6.callout.title": "Cómo leer estos tres escenarios",
      "roadmap.section.6.callout.body":
        "Cada escenario es un plan completo y ejecutable — no uno contingente. La diferencia entre ellos es nivel de gasto y mix de canales, no precondiciones: Lean financia los primeros treinta días solo con canales propios; Moderate suma pago social, creadores y noches de catas para el mes dos; Growth suma partnerships turísticos, sampling B2B y el piloto de suscripción para el mes tres. Elige el que Ursa pueda sostener noventa días sin tocar reservas operativas; un plan Lean sostenido vale más que un plan Growth abandonado en la semana seis. Ninguno de los tres requiere datos que Ursa todavía no tiene.",
      "roadmap.section.6.scenario.lean": "Fundaciones",
      "roadmap.section.6.scenario.moderate": "Recomendado",
      "roadmap.section.6.scenario.growth": "Stretch",
      "roadmap.section.6.stat.monthly": "Total mensual",
      "roadmap.section.6.funds.lean": "Financia el plan de 30 días",
      "roadmap.section.6.funds.moderate": "Financia el plan de 60 días",
      "roadmap.section.6.funds.growth": "Financia el plan de 90 días",
      "roadmap.section.6.more": "+ {n} ítems más",

      "roadmap.section.7.badge": "Sección 07 · Gobernanza",
      "roadmap.section.7.title":
        "Responsables y dependencias — cada flujo tiene un nombre y una regla de parada",
      "roadmap.section.7.meta": "8 flujos de trabajo",
      "roadmap.section.7.intro":
        "Una acción sin responsable es un deseo. Una acción sin regla de parada es un hábito. Esta tabla nombra ambas cosas para los ocho flujos de trabajo que toca el plan de 90 días — y deja fuera cualquier cosa que requiera un hire de marketing full-time en los primeros noventa días, porque contratar antes de validar tácticas es la forma más cara de aprender.",
      "roadmap.section.7.col.workstream": "Flujo de trabajo",
      "roadmap.section.7.col.owner": "Rol responsable",
      "roadmap.section.7.col.dependency": "Dependencia",
      "roadmap.section.7.col.metric": "Métrica principal",
      "roadmap.section.7.col.stop": "Regla de parada",
      "roadmap.section.7.callout.title":
        "Lo que esta tabla deliberadamente no incluye",
      "roadmap.section.7.callout.body":
        "No hay fila de Director de Marketing. El plan está construido para que un marketer de performance fraccional (ocho horas a la semana), un content lead interno (el barista que ya dispara los Reels) y el fundador puedan correrlo sin un hire de marketing full-time en los primeros noventa días. El supuesto es que el momentum se prueba mejor antes de contratar — contratar un director el día 1 para validar tácticas que todavía no se han probado es la forma más cara de aprender. Si la lectura de día 90 muestra dos meses consecutivos de movimiento de KPIs en la dirección correcta, contratar se vuelve una conversación de Q2; si no, el plan se rediseña, no se contrata.",

      "roadmap.owners.0.workstream": "Marca e Identidad",
      "roadmap.owners.0.owner": "Fundador + diseñador fraccional",
      "roadmap.owners.0.dependency": "Pack de activos Art Nouveau originales + empaque",
      "roadmap.owners.0.metric": "Recuerdo espontáneo del oso (visitantes de Miraflores)",
      "roadmap.owners.0.stop":
        "Si el reconocimiento no sube al día 90, audita los canales — no al oso.",
      "roadmap.owners.1.workstream": "Contenido y Social",
      "roadmap.owners.1.owner": "Content lead interno",
      "roadmap.owners.1.dependency": "Teléfono/cámara; capacidad de producción de Reels",
      "roadmap.owners.1.metric": "Visitas al perfil / semana; guardados por Reel",
      "roadmap.owners.1.stop":
        "Pausar cualquier serie cuyos guardados promedio en 4 semanas caigan bajo 100.",
      "roadmap.owners.2.workstream": "Pago en Media",
      "roadmap.owners.2.owner": "Marketer de performance fraccional",
      "roadmap.owners.2.dependency": "Aprobación de presupuesto + Meta Business Manager",
      "roadmap.owners.2.metric": "Costo por visita calificada; alza de visitas a local",
      "roadmap.owners.2.stop":
        "Matar cualquier canal que no alcance CPA break-even en 30 días.",
      "roadmap.owners.3.workstream": "Programa de Creadores",
      "roadmap.owners.3.owner": "Coordinador de creadores",
      "roadmap.owners.3.dependency": "Roster de 3 creadores + briefs claros",
      "roadmap.owners.3.metric":
        "Visitas al perfil, clics en cómo llegar, CPM equivalente",
      "roadmap.owners.3.stop": "CPM sobre S/. 40 sin alza de visitas al local.",
      "roadmap.owners.4.workstream": "Delivery (Rappi)",
      "roadmap.owners.4.owner": "Lead de operaciones",
      "roadmap.owners.4.dependency": "Refotografía + diseño de bundles",
      "roadmap.owners.4.metric": "AOV de delivery; share de bundles",
      "roadmap.owners.4.stop": "Sin alza de AOV en 30 días.",
      "roadmap.owners.5.workstream": "Comunidad y Eventos",
      "roadmap.owners.5.owner": "Barista principal",
      "roadmap.owners.5.dependency":
        "Logística de noches de catas + stock de grano retail",
      "roadmap.owners.5.metric": "Asistencia; venta de grano retail post-evento",
      "roadmap.owners.5.stop":
        "Asistencia bajo 6 durante 2 meses consecutivos.",
      "roadmap.owners.6.workstream": "Grano Retail",
      "roadmap.owners.6.owner": "Tostador + barista",
      "roadmap.owners.6.dependency": "Inventario de bolsas + tarjetas con historia",
      "roadmap.owners.6.metric": "Unidades de grano retail / semana",
      "roadmap.owners.6.stop":
        "Pausar expansión si está bajo 10 bolsas / semana después de 60 días.",
      "roadmap.owners.7.workstream": "B2B y Mayoristas",
      "roadmap.owners.7.owner": "Fundador + business development",
      "roadmap.owners.7.dependency": "Contactos en oficinas + presupuesto de sampling",
      "roadmap.owners.7.metric": "Conversión de sampling → cuenta",
      "roadmap.owners.7.stop":
        "Pausar si la conversión está bajo 10% después de 30 oficinas sampleadas.",

      "roadmap.section.8.badge": "Sección 08 · Targets",
      "roadmap.section.8.title":
        "Tablero de KPIs — baseline (desconocido) → target de 90 días",
      "roadmap.section.8.meta": "6 métricas north-star",
      "roadmap.section.8.intro":
        "Cada baseline de abajo está marcado honestamente como Desconocido. El trabajo de la primera semana es establecer los baselines desde la caja, la lista de WhatsApp y el Google Business Profile. Los targets se leen al día 90 — nunca antes — para que el equipo no caiga en la tentación de optimizar para ruido. Un sábado lluvioso o un Reel viral pueden mover un número semanal; solo la lectura de noventa días promedia el ruido.",
      "roadmap.section.8.baseline": "Baseline",
      "roadmap.section.8.target": "Target día 90",
      "roadmap.section.8.callout.title":
        "Por qué los baselines son desconocidos — y por qué eso es honesto",
      "roadmap.section.8.callout.body":
        "Negarse a inventar un baseline es una característica de este dossier, no un hueco. Las acciones de la primera semana en la Sección 01 — el extracto de la caja, los insights del Google Business Profile, la lista de consentimiento de WhatsApp — son justamente los instrumentos que convierten Desconocido en un número. La única re-medición al día 90 es deliberada: revisar KPIs semanalmente tienta al equipo a optimizar para ruido (un buen Reel, un sábado lluvioso), y el plan prefiere medir de menos y actuar antes que medir de más y perseguir. Un plan que finge conocer su punto de partida es un plan que va a fallar silenciosamente sus propios targets sin entender por qué.",

      "roadmap.kpi.0.label": "Awareness calificada",
      "roadmap.kpi.0.metric": "Visitas al perfil / semana",
      "roadmap.kpi.0.baseline": "Desconocido",
      "roadmap.kpi.0.target": "2,500",
      "roadmap.kpi.0.note":
        "Instagram + Google Business Profile + menciones de creadores, sumadas semanalmente.",
      "roadmap.kpi.1.label": "Visitas al local",
      "roadmap.kpi.1.metric": "Transacciones mensuales en caja",
      "roadmap.kpi.1.baseline": "Desconocido",
      "roadmap.kpi.1.target": "+15% MoM",
      "roadmap.kpi.1.note":
        "Baseline establecido en la semana 1 desde la caja. Re-medido al día 90.",
      "roadmap.kpi.2.label": "Ticket promedio",
      "roadmap.kpi.2.metric": "S/. por transacción",
      "roadmap.kpi.2.baseline": "Desconocido",
      "roadmap.kpi.2.target": "S/. 22",
      "roadmap.kpi.2.note": "Alza impulsada por attach de acompañamiento + prominencia de bebidas.",
      "roadmap.kpi.3.label": "Visitas de repetición",
      "roadmap.kpi.3.metric": "% que vuelve dentro de 30 días",
      "roadmap.kpi.3.baseline": "Desconocido",
      "roadmap.kpi.3.target": "25%",
      "roadmap.kpi.3.note":
        "Vía lista de consentimiento de WhatsApp + reconocimiento en caja.",
      "roadmap.kpi.4.label": "Referidos",
      "roadmap.kpi.4.metric": "Canjes de código de conserjería / mes",
      "roadmap.kpi.4.baseline": "Desconocido",
      "roadmap.kpi.4.target": "8",
      "roadmap.kpi.4.note":
        "De tarjetas de conserjería de hotel + canjes por menciones de creadores.",
      "roadmap.kpi.5.label": "Reconocimiento distintivo de marca",
      "roadmap.kpi.5.metric": "Recuerdo espontáneo del oso",
      "roadmap.kpi.5.baseline": "Desconocido",
      "roadmap.kpi.5.target": "30%",
      "roadmap.kpi.5.note":
        "Encuesta entre visitantes de Miraflores al día 90 — «nombra una cafetería de especialidad».",

      "roadmap.section.9.badge": "Sección 09 · Honestidad",
      "roadmap.section.9.title":
        "Registro de revisión escéptica — qué se desafió, qué cambió",
      "roadmap.section.9.meta": "3 rondas",
      "roadmap.section.9.intro":
        "Tres rondas de desafío escéptico dieron forma a las recomendaciones más arriesgadas de este plan. El registro de abajo anota qué se desafió, qué alternativa se consideró y qué cambió como resultado — porque un plan que no puede mostrar sus revisiones es un plan que no ha sido probado a presión, y un plan que no ha sido probado a presión es un plan que va a fallar en el primer contacto con la realidad.",
      "roadmap.section.9.col.challenge": "Desafío",
      "roadmap.section.9.col.change": "Qué cambió",
      "roadmap.section.9.callout.title": "La ronda 4 es tuya",
      "roadmap.section.9.callout.body":
        "El registro está abierto. Cuando una regla de parada se active, cuando un supuesto de la Calculadora de Suscripción esté mal por más del 20%, o cuando un shock externo (un competidor abre al lado, un hotel cierra, una cosecha de grano falla) cambie el entorno operativo, escribe la cuarta ronda aquí. Un registro de revisión que se detiene en tres es un registro que ha dejado de usarse — y un plan que ha dejado de probarse a presión es un plan que ha dejado de ser honesto.",

      "roadmap.revisions.0.challenge":
        "¿La suscripción Ursa Mañana es viable a S/. 20 / mes por café ilimitado (7–10am)?",
      "roadmap.revisions.0.change":
        "Se agregó un modelo completo de canibalización en la Calculadora de Suscripción (Módulo 08). Tope del piloto en 50 suscriptores por 90 días. Regla de parada dura: utilidad blendada / suscriptor debe ser ≥ 0 después de 60 días, o se mata.",
      "roadmap.revisions.1.challenge":
        "¿El motivo del oso es demasiado infantil para una audiencia de café de especialidad?",
      "roadmap.revisions.1.change":
        "Confirmado como activo, no como pasivo. El oso es geométrico, de línea Art Nouveau y sin disputa en la escena de especialidad de Lima. El trail de Reels de la huella del oso está construido para probar esa hipótesis con los primeros 30 días de data de engagement turístico; si las señales son débiles, el oso se refina, no se retira. El oso se queda — el esfuerzo de diseño va a refinamiento, no a reemplazo.",
      "roadmap.revisions.2.challenge":
        "¿Es realista 90 días para lanzar pago + creadores + suscripción al mismo tiempo?",
      "roadmap.revisions.2.change":
        "Recortado. Los primeros 30 días son solo canales propios (GBP, WhatsApp, Reels orgánicos, tarjetas con historia, tarjetas de hotel). Pago + creadores + optimización de Rappi solo después del día 30. Piloto de suscripción solo después del día 60. La secuenciación conservadora gana; los lanzamientos en paralelo pierden.",

      "roadmap.section.10.badge": "Sección 10 · Veredicto",
      "roadmap.section.10.title": "Veredicto final de preservación del espíritu",
      "roadmap.section.10.meta": "El oso se queda",
      "roadmap.section.10.eyebrow": "Veredicto · Sistema permanente",
      "roadmap.section.10.headline":
        "El plan cuida al oso, el gramo y el verde.",
      "roadmap.section.10.body":
        "El rebrand total está fuera de la mesa. El refinamiento conservador es el sistema permanente: verificar lo que ya es distintivo, doblar la apuesta por la línea Art Nouveau y la tostadora propia, y tratar cada táctica de crecimiento como un experimento con una regla de parada nombrada. Cuando una táctica obligue a elegir entre cuidar la identidad de Ursa y perseguir una jugada de crecimiento genérica, este dossier elige al oso.",
      "roadmap.section.10.badge.bear": "Oso preservado",
      "roadmap.section.10.badge.gram": "Gramo preservado",
      "roadmap.section.10.badge.green": "Verde preservado",

      "roadmap.verdict.permanent.title": "Sistema permanente",
      "roadmap.verdict.permanent.body":
        "Línea Art Nouveau, paleta de marrones y verdes, el motivo geométrico del oso, la tostadora a la vista en el salón, el layout de dos barras y «Un gramo a la vez». Estos son los activos de identidad que cargan el peso; no cambian en ningún trimestre de la hoja de ruta de doce meses, y no cambian si la capa de crecimiento de Nivel 2 se revierte.",
      "roadmap.verdict.reversible.title": "Capa reversible a 6 meses",
      "roadmap.verdict.reversible.body":
        "Sistema de crecimiento distintivo de Nivel 2 — nueva voz de copy, nuevos formatos de Reel, una rotación de bebidas con nombre que mantiene la carta sintiéndose estacional sin rotar los básicos verificados. Revisado al día 90; el rollback es una revertida de treinta días a la voz, formato y rotación del día 0, sin impacto duradero en el sistema permanente.",
      "roadmap.verdict.seasonal.title": "Solo estacional",
      "roadmap.verdict.seasonal.body":
        "Campañas estacionales de Nivel 3 — lanzamiento de Lonya single-origin, copa de invierno andino, el microlote elegido por el fundador. Cada campaña se aprueba por temporada contra la regla de preservación del espíritu, sale por una ventana definida y nunca se auto-renueva. Una campaña que se gana una segunda temporada vuelve a postular; no hereda.",

      "roadmap.stat.action-window":
        "Ventana de primera acción — solo superficies propias",
      "roadmap.stat.launch-horizon": "Horizonte de lanzamiento por fases",
      "roadmap.stat.experiments": "Experimentos con reglas de parada",
      "roadmap.stat.workstreams": "Flujos con responsables nombrados",

      "roadmap.button.open-experiment-tracker":
        "Abrir el Seguimiento de Experimentos",
      "roadmap.button.model-subscription": "Modelar el piloto de suscripción",
      "roadmap.button.open-budget-allocator": "Abrir el Asignador de Presupuesto",
      "roadmap.button.model-roi": "Modelar ROI por canal",
      "roadmap.button.experiment-tracker-short": "Seguimiento de Experimentos",
      "roadmap.button.subscription-calc-short": "Calculadora de Suscripción",
      "roadmap.button.budget-allocator-short": "Asignador de Presupuesto",

      /* ---- Sources view (Appendix) ---- */
      "sources.lede":
        "El centro de mando de Ursa está construido sobre evidencia públicamente verificable — cada cifra se puede re-chequear visitando la URL citada, y ninguna afirmación depende de datos propietarios que el lector no pueda ver. Donde se infirió un dato, la inferencia se marca y se muestra el razonamiento. Donde faltó un dato, la brecha se nombra abiertamente — y la estructura de escenarios lean, moderado y growth absorbe la incertidumbre sin bloquear el lanzamiento de setenta y dos horas. El resultado es un plan falsable: cualquier lector que encuentre una fuente pública que contradiga una afirmación aquí puede actualizar el dossier, y el cambio se propaga.",
      "sources.meta.snapshot": "2026-08-01",
      "sources.meta.scope": "Solo fuentes públicas",
      "sources.meta.constraint": "Nada propietario",

      "sources.section.1.badge": "Anexo §1",
      "sources.section.1.title": "Fuentes de un vistazo",
      "sources.section.1.meta":
        "{n} citadas · {verified} verificadas · {partial} parciales",
      "sources.section.1.stat.verified": "Fuentes verificadas",
      "sources.section.1.stat.partial": "Fuentes parciales",
      "sources.section.1.stat.unverified": "Fuentes sin verificar",
      "sources.section.1.stat.gap": "Brechas identificadas",
      "sources.section.1.callout.title": "Por qué importa",
      "sources.section.1.callout.body":
        "El plan estratégico no requiere ningún dato marcado como Brecha para actuar. Cuando una brecha es material para un pronóstico — ticket promedio, tasa de repetición, margen — los escenarios lean, moderado y growth reemplazan el número faltante por un rango defendible, y la recomendación se sostiene en todo el rango. El aporte del dueño afila el pronóstico; no bloquea el lanzamiento de setenta y dos horas, porque el lanzamiento es operativo (reclamar superficies, instalar analítica, fotografiar la barra) y ninguna de esas acciones depende del dato faltante.",

      "sources.section.2.badge": "Anexo §2",
      "sources.section.2.title": "Lista de fuentes",
      "sources.section.2.meta":
        "Haz clic en cualquier fuente para abrir el original en una pestaña nueva",

      "sources.section.3.badge": "Anexo §3",
      "sources.section.3.title": "Leyenda de estados de evidencia",
      "sources.section.3.meta":
        "Cómo leer las etiquetas usadas en todo el dossier",
      "sources.section.3.verified.body":
        "Observación directa de una fuente pública. Cualquiera puede re-chequear la afirmación visitando la URL citada. Se usa para hechos primarios — items de la carta, direcciones, horarios, listados oficiales en plataformas. Cuando veas esta etiqueta, la afirmación se puede citar externamente sin más verificación.",
      "sources.section.3.partial.body":
        "La fuente existe y es pública, pero el acceso es limitado (Facebook muestra posts parciales) o la fuente solo proxifica la afirmación subyacente. La dirección es correcta; el detalle puede estar desactualizado o gated. Cuando veas esta etiqueta, trata la afirmación como aproximadamente correcta y confirma con el dueño antes de citarla en material externo.",
      "sources.section.3.unverified.body":
        "La afirmación es plausible y consistente con señales verificadas, pero ninguna fuente pública la confirma directamente. Se trata como inferencia y se marca claramente — nunca se usa como base para un pronóstico duro. Cuando veas esta etiqueta, la afirmación es un supuesto de trabajo; reemplázala por datos verificados en cuanto sea posible.",
      "sources.section.3.gap.body":
        "Ninguna fuente pública cubre esto; solo el dueño lo puede suministrar. Las brechas se listan abiertamente en §5 y §6 y se absorben con la estructura de escenarios lean, moderado y growth sin bloquear el lanzamiento. Cuando veas esta etiqueta, la pregunta está abierta — respóndela una vez, junto con las otras preguntas abiertas, y el pronóstico relevante se ajusta.",

      "sources.section.4.badge": "Anexo §4",
      "sources.section.4.title": "Desambiguación — existe otro URSA",
      "sources.section.4.callout.title":
        "Importante — leer antes de citar este dossier",
      "sources.section.4.callout.p1":
        "Un negocio de café separado llamado URSA opera en Bridgeport, Connecticut, EE. UU. No tiene relación con Ursa Coffee Roasters de Miraflores, Lima, Perú — el sujeto de este dossier.",
      "sources.section.4.callout.p2":
        "Toda referencia a «Ursa», «Ursa Coffee» o «Ursa Coffee Roasters» en este dossier, en los módulos HTML estáticos y en los archivos de datos estructurados (evidence.json, experiments.json) se refiere exclusivamente a la tostadora de Miraflores, Lima. Si un resultado de búsqueda o un resumen de IA menciona Bridgeport, CT — es la entidad equivocada.",
      "sources.section.4.card.subject.eyebrow": "Sujeto",
      "sources.section.4.card.subject.body":
        "Alcanfores 183, Miraflores, Lima 15074, Perú. Tostadora de especialidad con barras de espresso + coldbrew. Instagram: @ursacoffeeperu.",
      "sources.section.4.card.unrelated.eyebrow": "Sin relación",
      "sources.section.4.card.unrelated.body":
        "Una operación de café distinta en Estados Unidos. No referenciada, no analizada, no afiliada. Cualquier coincidencia de nombre es casual.",
      "sources.section.4.card.verify.eyebrow": "Cómo verificar",
      "sources.section.4.card.verify.title": "Tres confirmaciones",
      "sources.section.4.card.verify.li.1": "La dirección contiene Miraflores, Lima",
      "sources.section.4.card.verify.li.2":
        "El handle de Instagram es @ursacoffeeperu",
      "sources.section.4.card.verify.li.3":
        "Bio en español; «Tostadores de café de especialidad»",

      "sources.section.5.badge": "Anexo §5",
      "sources.section.5.title": "Preguntas abiertas para el dueño",
      "sources.section.5.meta":
        "{n} agrupadas · ninguna bloquea el lanzamiento de 72 horas",
      "sources.section.5.card.title":
        "Una sola solicitud de aclaración agrupada",
      "sources.section.5.card.body":
        "Estas seis preguntas afinan los pronósticos pero no bloquean el lanzamiento de setenta y dos horas. Los escenarios lean, moderado y growth están diseñados para operar antes de que ninguna se responda — cada recomendación de este dossier se sostiene en todo el rango plausible de respuestas. Las preguntas se agrupan porque el tiempo del dueño es el recurso escaso, y porque responderlas juntas (en vez de una a la vez durante semanas) deja al equipo leer el cuadro completo y rediseñar una vez, no seis.",
      "sources.section.5.callout.title": "Por qué estas no bloquean el lanzamiento",
      "sources.section.5.callout.body":
        "Las primeras setenta y dos horas son operativas — reclamar el Google Business Profile, arreglar el menú de Rappi, publicar el primer Reel, instalar analítica, fotografiar la barra. Ninguna de esas acciones requiere presupuesto confirmado, ticket promedio o datos de capacidad del equipo; requieren un teléfono, una impresora y el equipo que ya está en Alcanfores 183. Las respuestas del dueño afilan los pronósticos de los meses dos y tres; no bloquean el lanzamiento del mes uno.",

      "sources.section.6.badge": "Anexo §6",
      "sources.section.6.title": "Datos de negocio faltantes",
      "sources.section.6.meta":
        "Brechas materiales absorbidas por la estructura de escenarios",
      "sources.section.6.callout.title": "Cómo los escenarios manejan estas brechas",
      "sources.section.6.callout.body":
        "Los tres escenarios de presupuesto — Lean a S/. 2,500/mes, Moderado a S/. 7,200, Growth a S/. 16,500 — están deliberadamente parametrizados para que ninguno de los datos faltantes sea requerido para actuar. Cada escenario es un plan completo y ejecutable, no uno contingente; la diferencia entre ellos es nivel de gasto y mix de canales, no precondiciones. Cuando el dueño sumistre los reales — ticket promedio, tasa de repetición, margen — los escenarios colapsan a un solo plan, pero hasta entonces, los tres son ejecutables como están escritos.",

      "sources.section.7.badge": "Anexo §7",
      "sources.section.7.title": "Información conflictiva",
      "sources.section.7.meta": "Donde las fuentes públicas discrepan",
      "sources.section.7.callout.title": "Cómo se resuelven los conflictos",
      "sources.section.7.callout.body":
        "El dossier resuelve los conflictos entre plataformas tratando el bio de Instagram como canónico para horarios y Rappi como canónico para precios de carta — ambos son canales de primera parte que Ursa controla directamente, y ambos se actualizan cuando el dueño los actualiza. Los agregadores de listados (Corner.inc, mindtrip.ai, TripAdvisor) se leen como señales secundarias y nunca pisan la primera parte. Cuando dos canales de primera parte conflictúan (número de Instagram versus número de mindtrip), el conflicto se nombra y se deja sin resolver hasta que el dueño confirme.",

      "sources.section.8.badge": "Anexo §8",
      "sources.section.8.title": "Nota de metodología",
      "sources.section.8.meta": "Cómo se hizo la investigación",
      "sources.section.8.callout.title": "Lo que deliberadamente no se hizo",
      "sources.section.8.callout.list.1":
        "No scraping de posts privados de Instagram o Facebook.",
      "sources.section.8.callout.list.2":
        "Sin acceso al POS, CRM o Ads Manager de Ursa.",
      "sources.section.8.callout.list.3": "Sin entrevistas con staff ni clientes.",
      "sources.section.8.callout.list.4": "Sin datos propietarios de competidores.",
      "sources.section.8.callout.list.5":
        "Sin modelado financiero que requiera costos no divulgados.",
      "sources.section.8.callout.closing":
        "El dossier asume el costo de esta restricción — algunas preguntas quedan abiertas, algunos pronósticos quedan como rangos — porque la alternativa (datos privados, financieros del dueño, acceso a Ads Manager) comprometería la replicabilidad que hace al plan auditable. Un lector que disienta de una afirmación aquí la puede re-chequear; un lector que disienta de una afirmación construida sobre datos privados no puede.",

      "sources.section.9.badge": "Anexo §9",
      "sources.section.9.title": "Archivos de datos estructurados",
      "sources.section.9.meta":
        "Registros de evidencia y experimentos legibles por máquina en /dossier/assets/",
      "sources.section.9.card.evidence.body":
        "Array estructurado de cada fuente citada con id, label, url, status (verified / partial / unverified / gap) y note. Espeja la lista de fuentes de arriba en formato legible por máquina.",
      "sources.section.9.card.experiments.body":
        "Array estructurado de cada experimento en el tracker con hipótesis, métrica de éxito, responsable, duración, regla de matar / graduar y estado actual. Maneja la herramienta de Seguimiento de Experimentos.",
      "sources.section.9.callout.title": "Estos archivos son la fuente de verdad",
      "sources.section.9.callout.body":
        "El centro de mando de Next.js lee de estos archivos JSON donde aplica. Si el estado de una fuente cambia (TripAdvisor acumula reseñas, un competidor abre un local nuevo, un experimento se gradúa), edita el JSON y re-deployea — el dossier, las herramientas y el Seguimiento de Experimentos se mantienen sincronizados desde una sola edición. Por esto el dossier es auditable de punta a punta: el mismo registro que maneja la interfaz maneja los módulos imprimibles, y un cambio en uno no se puede desviar del otro.",

      "sources.section.10.pill": "Anexo completo",
      "sources.section.10.button": "Abrir Seguimiento de Experimentos",

      /* ---- Módulo 01 · Auditoría de Marca (cuerpo profundizado + copy de sección) ---- */
      "brand.hero.lede":
        "Lo que responde este módulo es si la identidad de Ursa se sostiene entre superficies — Instagram, Rappi, TripAdvisor, CoffeePass, Corner.inc, mindtrip.ai — o si los activos que el dueño ve en el local se diluyen donde la mayoría de clientes conoce la marca por primera vez. La auditoría verifica ocho elementos contra siete superficies públicas, aplica el test de activos distintivos de Ehrenberg-Bass a cuatro candidatos y recomienda un sistema de refinamiento conservador: codificar lo que funciona, reparar lo parcial y rechazar rebrand. La línea Art Nouveau, la paleta de marrones y verdes, el motivo del oso, la tostadora propia y el lema «Un gramo a la vez» son los activos que el plan cuida.",
      "brand.hero.meta.direction": "Dirección",
      "brand.hero.meta.direction-value": "Refinamiento conservador recomendado",
      "brand.evidence-snapshot-label": "Evidencia · snapshot 2026-08-01",

      "brand.section.verified.badge": "Elementos verificados",
      "brand.section.verified.title": "Lo que verificamos en el snapshot",
      "brand.section.verified.meta": "De fuentes públicas · ver Fuentes y Evidencia",
      "brand.section.verified.intro":
        "Cada elemento se verificó contra las siete superficies públicas de Ursa: Instagram, Facebook, el menú de Rappi, la ficha de CoffeePass, la ficha de TripAdvisor, la editorial de Corner.inc y el perfil de mindtrip.ai. Siete de ocho activos centrales están verificados; el octavo — aplicación consistente entre superficies — es parcial, y es la brecha que la hoja de ruta de implementación cierra primero. El costo de cerrarla es casi cero en efectivo (los tokens de diseño, las plantillas y el copy ya existen en este dossier) y acotado en tiempo (una sola semana de ensamblaje una vez que el dueño entregue el pack de activos del oso, pregunta abierta Q6). Donde la verificación es parcial, se nombra la brecha precisa y se especifica la acción que la cierra en la hoja de ruta de implementación.",

      "brand.verified.art-nouveau.title": "Línea Art Nouveau",
      "brand.verified.art-nouveau.detail":
        "Divisores ornamentales, líneas doradas finas y una tipografía serif display enraizan la marca en el craft de principios del siglo XX, no en el default flat-minimal de cafetería. La línea se ve en las plantillas de Instagram y se refuerza con el tratamiento geométrico e ilustrado del oso.",
      "brand.verified.art-nouveau.evidence":
        "Verificado en Instagram @ursacoffeeperu (tipografía de bio y plantillas de posts, observado 2026-08-01) y en Corner.inc («baristas double as coffee educators», ficha actualizada 26 dic 2025). NO verificado en signage físico — sin foto a nivel de calle; marcado como pregunta abierta Q6.",

      "brand.verified.palette.title": "Paleta de marrones y verdes",
      "brand.verified.palette.detail":
        "Una escala de marrones del espectro de tueste (café verde → espresso) pareada con un verde bosque profundo para el hábitat del oso y superficies crema. Sin azul, sin índigo — un no-default deliberado que se lee como craft antes de que el cliente termine de leer el nombre.",
      "brand.verified.palette.evidence":
        "Verificado muestreando valores de pixel de las portadas de posts de Instagram (7 posts muestreados, observado 2026-08-01) y de las imágenes de los tiles del menú de Rappi. Los valores hex son aproximados — el pack de activos del dueño (Q6 abierta) se requiere para fijar tokens exactos.",

      "brand.verified.bear.title": "Motivo del oso",
      "brand.verified.bear.detail":
        "Un mark geométrico de oso con línea Art Nouveau aparece en logo, signage y storytelling de producto — un personaje animal ownable en un mercado cuyo censo no contiene ninguno.",
      "brand.verified.bear.evidence":
        "Verificado en el avatar de Instagram (observado 2026-08-01). NO visible en las imágenes del menú de Rappi (solo fotos de bebidas). NO presente en la foto de la ficha de TripAdvisor (solo storefront). Conclusión: el oso se aplica de forma inconsistente entre superficies — ver Análisis del Oso abajo.",

      "brand.verified.roastery.title": "Tostadora propia",
      "brand.verified.roastery.detail":
        "Ursa tuesta sus propios granos. Es la columna operacional de la marca: justifica las historias de origen, las preparaciones con nombre y la matemática de suscripción — y es el único activo que los competidores no pueden comprar de un estante.",
      "brand.verified.roastery.evidence":
        "Verificado en la bio de Instagram («Tostadores de café de especialidad», observado 2026-08-01), en la ficha de marca de CoffeePass Perú y en Corner.inc (tag de tostadora confirmado).",

      "brand.verified.tagline.title": "Lema «Un gramo a la vez»",
      "brand.verified.tagline.detail":
        "Ancla el posicionamiento de craft de precisión y le da a cada momento de tueste, preparación y educación un gancho memorable. El gramo es una unidad medible, lo que hace el claim operacionalmente específico, no poético.",
      "brand.verified.tagline.evidence":
        "Verificado verbatim en la bio de Instagram (observado 2026-08-01) y reutilizado como caption de cierre en al menos 3 posts muestreados. No se ve en el menú de Rappi — la ficha de Rappi no tiene campo de lema.",

      "brand.verified.two-bar.title": "Layout de dos barras",
      "brand.verified.two-bar.detail":
        "Espresso bar + cold-brew bar, lado a lado. Señaliza físicamente las dos mitades de la carta y crea un escenario natural para un teatro visible desde la calle — una decisión de layout que ningún competidor del censo replica.",
      "brand.verified.two-bar.evidence":
        "Verificado en la bio de Instagram («Espresso bar + Coldbrew bar» literal, observado 2026-08-01). Corner.inc repite la misma frase. El layout físico no se observó independientemente vía foto a nivel de calle — se pide confirmación del dueño.",

      "brand.verified.named-drinks.title": "Bebidas con nombre",
      "brand.verified.named-drinks.detail":
        "Cuatro bebidas verificadas usan nombre propio en vez de etiqueta genérica: Ursagroni (Ursa + negroni), Maracumango (maracuyá + mango), Filtrado Lonya (etiqueta de origen), Durazno Clarificado (descriptivo). Dos usan blends inventados; dos usan etiquetas descriptivas o de origen. Ningún competidor del censo nombra bebidas individuales así.",
      "brand.verified.named-drinks.evidence":
        "Verificado en Instagram (Ursagroni + Maracumango en captions y portadas de Reel) Y en Rappi (las cuatro listadas por nombre en el menú de delivery, observado 2026-08-01). Dos fuentes convergen — la verificación más fuerte de esta auditoría.",

      "brand.verified.cross-surface.title": "Aplicación consistente entre superficies",
      "brand.verified.cross-surface.detail":
        "La identidad es fuerte en storefront y producto; se adelgaza entre superficies digitales (sin sitio web, sin kit social templado). Esta es la brecha que la hoja de ruta de implementación cierra primero. Modo de falla si no se atiende: un cliente primerizo que descubre a Ursa por Instagram aterriza en un Google Business Profile subóptimo y una ficha de TripAdvisor vacía, y concluye que la cafetería está menos establecida de lo que está — un costo de percepción que se compone cada mes que la brecha persiste.",
      "brand.verified.cross-surface.evidence":
        "Verificado por análisis de brecha de superficie: Instagram (presente), Facebook (acceso limitado a posts, parcial), Rappi (presente, sin lema), CoffeePass (presente, mínimo), TripAdvisor (la ficha existe, 0 reseñas — sin reclamar), Corner.inc (verificado), mindtrip.ai (verificado pero el teléfono entra en conflicto con Instagram). No se encontró sitio web vía Google site: search. Faltan: kit social templado, Google Business Profile reclamado, TripAdvisor reclamado.",

      "brand.section.palette.badge": "Sistema de color",
      "brand.section.palette.title": "La paleta de Ursa — observada y propuesta",
      "brand.section.palette.meta": "16 tokens · con proveniencia · no oficiales hasta verificación del dueño",
      "brand.section.palette.intro":
        "Una escala de marrones del espectro de tueste (café verde → espresso) carga la historia del café; un verde bosque profundo carga el hábitat del oso; las superficies crema lo sostienen todo; un único dorado cálido reserva el énfasis. Sin azul, sin índigo — y esa ausencia es en sí misma un diferenciador. El censo de 1km se lee como un muro de identidades de café Instagram-azul y negro puro; los marrones cálidos y el verde bosque profundo de Ursa se leen como craft antes de que el cliente termine de leer el nombre. Los valores hex se muestrearon de redes sociales, no están fijados por el dueño — promovente a tokens oficiales solo después de que llegue el pack de activos (pregunta abierta Q6). El costo de implementación es prácticamente cero: los dieciséis tokens ya están cableados en el Tailwind config de este dossier, así que promoverlos de aproximado a oficial es un edit de una línea por token, no una reconstrucción.",
      "brand.section.palette.provenance-key": "Llave de proveniencia",
      "brand.section.palette.provenance.approximate": "aproximado — muestreado de redes sociales",
      "brand.section.palette.provenance.proposed": "propuesto — adición al sistema de diseño",
      "brand.section.palette.provenance.official": "oficial — de los lineamientos del dueño (ninguno aún)",
      "brand.palette.provenance.approximate": "aproximado",
      "brand.palette.provenance.proposed": "propuesto",
      "brand.palette.provenance.official": "oficial",

      "brand.section.typography.badge": "Tipografía",
      "brand.section.typography.title": "Tres voces, un ritmo",
      "brand.section.typography.intro":
        "Una serif display carga la línea craft de principios de siglo XX; una sans humanista carga la prosa legible; una mayúscula condensada carga cada etiqueta, eyebrow y tag. Tres roles, sin superposición — porque la superposición es donde vive la inconsistencia. Dos voces obligarían al cuerpo a duplicar etiqueta (ilegible en tamaños pequeños); cuatro diluirían el ritmo y sumarían una línea de licencia de tipografía sin ganancia cognitiva. Tres es el mínimo que sostiene la voz Art Nouveau entre impresos, web y signage. La división también coincide con la investigación de legibilidad: las serif mantienen el reconocimiento de caracteres en tamaños display grandes donde el contraste es alto, las sans humanistas se leen más rápido en cuerpo de texto (el default canónico alineado a WCAG), y la mayúscula condensada carga las etiquetas porque su set-width apretado preserva la jerarquía en los tamaños pequeños donde viven las etiquetas.",
      "brand.section.typography.scale.label": "Escala tipográfica · aplicada",
      "brand.section.typography.scale.headline": "Un gramo a la vez.",
      "brand.section.typography.scale.subhead": "Tostadores de café de especialidad",
      "brand.section.typography.scale.body":
        "Café de especialidad, tostado en Miraflores. Cada gramo se pesa, cada origen se nombra, y cada taza se sirve en el espresso bar o en el cold-brew bar.",
      "brand.section.typography.scale.label-text": "Espresso bar · Cold-brew bar · Tostadora propia",

      "brand.section.bear.badge": "Motivo del oso",
      "brand.section.bear.title": "El oso, examinado",
      "brand.section.bear.meta": "Consistente · Inconsistente · Distintivo · Faltante",
      "brand.section.bear.tints": "Un mark, cuatro tintes aprobados · dark-roast · forest-deep · gold · terracotta",

      "brand.bear.consistent.label": "Lo que es consistente",
      "brand.bear.consistent.point-1":
        "El oso aparece en el avatar de Instagram (observado 2026-08-01) y se refuerza con el nombre de la marca (Ursa = oso) en cada superficie — Instagram, Facebook, Rappi, CoffeePass, Corner.inc, mindtrip.ai.",
      "brand.bear.consistent.point-2":
        "El tratamiento del personaje es cálido y geométrico, no cartoonish — observado en el avatar a 64×64px y reforzado por el emparejamiento de emoji ☕️🐻 en posts de Ursagroni.",
      "brand.bear.consistent.point-3":
        "El vínculo oso-a-nombre es lingüístico y por tanto independiente de la superficie: incluso superficies sin el mark visual cargan la palabra «Ursa».",

      "brand.bear.inconsistent.label": "Lo que es inconsistente",
      "brand.bear.inconsistent.point-1":
        "El oso aparece en el avatar de Instagram pero NO es visible en las imágenes del menú de Rappi (solo fotos de bebidas) y NO en la foto de TripAdvisor (solo storefront). La aplicación varía por superficie.",
      "brand.bear.inconsistent.point-2":
        "No se observó un set codificado de ilustraciones del oso — la aplicación varía (versión avatar, watermark en post, emoji). La comparación a nivel de pixel está bloqueada hasta que llegue el pack de activos del dueño (Q6 abierta).",
      "brand.bear.inconsistent.point-3":
        "La presencia del oso en Instagram es ad hoc (emoji en captions, watermark ocasional) — no se detectó kit templado de posts sociales en 7 posts muestreados.",

      "brand.bear.distinctive.label": "Lo que es distintivo",
      "brand.bear.distinctive.point-1":
        "Censo de 1km (14 competidores + 4 benchmarks de Lima, snapshot 2026-08-01): CERO competidores usan un personaje animal como activo de marca. Es espacio blanco verificado, no supuesto.",
      "brand.bear.distinctive.point-2":
        "Oso + Art Nouveau + tostadora propia es una firma de tres partes que ningún competidor del censo puede replicar rápido — el claim más cercano de un solo activo es «barista champion founder» de Neira Café Lab, que es una persona, no un personaje.",
      "brand.bear.distinctive.point-3":
        "El oso puede cargar narrativa (historias de origen, skins estacionales) sin diluir el mark — observado en cómo @ursacoffeeperu ya empareja ☕️🐻 con captions de origen, lo que sugiere que el oso ya está semánticamente vinculado al café en la propia voz de la marca.",

      "brand.bear.missing.label": "Lo que falta",
      "brand.bear.missing.point-1":
        "Sin oso animado (mark en loop, set de stickers sociales) — no presente en ninguno de los 7 posts muestreados de Instagram ni en la vista previa de la página de Facebook.",
      "brand.bear.missing.point-2":
        "Sin oso en un kit consistente de plantillas de posts sociales — cada post muestreado usa un tratamiento visual distinto, lo que sugiere que el oso aparece solo cuando el barista recuerda añadir el emoji.",
      "brand.bear.missing.point-3":
        "Sin oso como personaje recurrente en email y empaque — no se detectó programa de email (sin sitio web, sin formulario de signup); ninguna foto de empaque en las fuentes muestreadas muestra el mark del oso.",

      "brand.section.distinctive.badge": "Activos distintivos",
      "brand.section.distinctive.title": "La lectura Ehrenberg-Bass: disponibilidad mental por repetición",
      "brand.section.distinctive.meta": "Singularidad × Prevalencia · verificado por censo",
      "brand.section.distinctive.intro":
        "Los activos distintivos son elementos ajenos al nombre de la marca (personajes, colores, lemas, ornamentación) que identifican una marca en la memoria del comprador. Construyen disponibilidad mental — la probabilidad de que un comprador piense en Ursa en una situación de compra — a través de la repetición consistente. Su eficacia se mide en dos ejes (Romaniuk y Sharp, Ehrenberg-Bass Institute): singularidad (pocos competidores usan el activo) y prevalencia (la mayoría de los compradores de la categoría asocian el activo con la marca). Un activo que es único pero rara vez aplicado todavía no califica — la repetición es el mecanismo, no el diseño. Una limitación honesta del framework: se desarrolló para bienes de consumo masivo (FMCG) con alta frecuencia de compra, donde la disponibilidad mental se compone entre viajes semanales de compra. El café de especialidad es una categoría de menor frecuencia, así que la prueba de prevalencia de 90 días de abajo es la versión adaptada — más corta que la norma FMCG, pero suficiente para un catchment caminable de 1km donde los regulares regresan semanalmente.",
      "brand.section.distinctive.census-callout-title": "El hallazgo del censo",
      "brand.section.distinctive.census-callout-body":
        "Censo de 1km desde Alcanfores 183 (snapshot 2026-08-01): 0 de 14 competidores en catchment y 0 de 4 benchmarks de Lima usan un personaje animal como activo de marca. Es espacio blanco verificado — la singularidad del oso está establecida, pero la prevalencia no.",
      "brand.section.distinctive.why-callout-title": "Por qué esto importa para Ursa",
      "brand.section.distinctive.why-callout-body":
        "El oso es un activo distintivo potencial — no confirmado. La diferencia es operacional: un activo potencial solo se vuelve real después de 90 días de aplicación consistente entre superficies Y una encuesta de recordación de cliente (n≥40) que confirme que los compradores asocian el oso con Ursa sin prompting. Hasta entonces, el oso es una decisión de diseño que le gusta al dueño. Después, es un ancla de memoria que lidera la categoría y que los competidores no pueden copiar barato. Esta es la acción de marca de mayor apalancamiento disponible para Ursa en los próximos 90 días.",
      "brand.distinctive.uniqueness-label": "Singularidad",
      "brand.distinctive.prevalence-label": "Prevalencia",
      "brand.distinctive.census-evidence-label": "Evidencia del censo",
      "brand.distinctive.verdict-label": "Veredicto",
      "brand.distinctive.promote-label": "Promover a activo distintivo solo si",

      "brand.distinctive.bear.asset": "Personaje del oso (geométrico, con línea Art Nouveau)",
      "brand.distinctive.bear.uniqueness": "Alta",
      "brand.distinctive.bear.prevalence": "Baja (actualmente)",
      "brand.distinctive.bear.census":
        "Censo de 1km (snapshot 2026-08-01): 0 de 14 competidores en catchment y 0 de 4 benchmarks de Lima usan un personaje animal como activo de marca. La singularidad es verificada, no supuesta.",
      "brand.distinctive.bear.verdict":
        "Activo distintivo POTENCIAL. La singularidad está establecida. La prevalencia no — el oso aparece inconsistente entre superficies (avatar de Instagram sí; Rappi no; TripAdvisor no). Recomendación: aplicar el oso de forma consistente en cada touchpoint por 90 días, luego re-medir prevalencia vía una encuesta de recordación de cliente (n≥40) antes de promover el oso de «potencial» a «activo distintivo».",
      "brand.distinctive.bear.apply-if":
        "aplicación consistente en Instagram, Rappi, TripAdvisor, Google Business Profile, empaque y signage por ≥90 días",

      "brand.distinctive.ornamentation.asset": "Ornamentación Art Nouveau (línea dorada fina + flourish)",
      "brand.distinctive.ornamentation.uniqueness": "Alta",
      "brand.distinctive.ornamentation.prevalence": "Baja (actualmente)",
      "brand.distinctive.ornamentation.census":
        "Scan del censo: ningún competidor usa ornamentación Art Nouveau. Los defaults visuales de los competidores son flat-minimal (Neira, Punto) o industrial (Bisetti). El competidor ornamental más cercano es el estilo letterpress de Tostaduría Bisetti, que es adyacente a Arts & Crafts, no Art Nouveau.",
      "brand.distinctive.ornamentation.verdict":
        "Activo distintivo POTENCIAL. La singularidad está establecida. La prevalencia no está verificada — se observa solo en plantillas de posts de Instagram, no en Rappi, TripAdvisor o signage. Necesita la misma prueba de aplicación consistente de 90 días que el oso.",
      "brand.distinctive.ornamentation.apply-if":
        "ornamentación consistente en Instagram, menú, signage y empaque por ≥90 días",

      "brand.distinctive.tagline.asset": "Lema «Un gramo a la vez»",
      "brand.distinctive.tagline.uniqueness": "Media-Alta",
      "brand.distinctive.tagline.prevalence": "Baja",
      "brand.distinctive.tagline.census":
        "Scan del censo: ningún competidor usa un lema de gramo de precisión. El claim más cercano es «barista champion» de Neira (sobre la persona, no sobre el proceso). Punto Café usa «Café de especialidad» (claim genérico de categoría).",
      "brand.distinctive.tagline.verdict":
        "Activo distintivo POTENCIAL. La singularidad es la más fuerte de los tres porque el claim es operacionalmente específico (un gramo es una unidad medible). La prevalencia no está verificada — actualmente se usa solo en la bio de Instagram y captions de posts. Debe parearse con el oso para disponibilidad mental compuesta.",
      "brand.distinctive.tagline.apply-if":
        "aparecer en Instagram, campo de descripción del menú de Rappi, descripción de Google Business Profile, menú impreso y etiqueta de bolsa de café",

      "brand.distinctive.palette.asset": "Paleta de espectro de tueste marrón a verde",
      "brand.distinctive.palette.uniqueness": "Media",
      "brand.distinctive.palette.prevalence": "Baja",
      "brand.distinctive.palette.census":
        "Scan del censo: el verde bosque profundo como color de HÁBITAT DEL OSO es único de Ursa — los competidores que usan verde lo usan como color plano de marca, no pareado con un personaje oso. La escala marrón del espectro de tueste por sí sola no es distintiva (Bisetti, Punto, Neira todos usan marrón como primario).",
      "brand.distinctive.palette.verdict":
        "Activo distintivo POTENCIAL SOLO cuando el verde se parea con el oso. La escala marrón es necesaria pero no suficiente. Sin pareo consistente verde+oso, la paleta por sí sola no construirá disponibilidad mental.",
      "brand.distinctive.palette.apply-if":
        "el verde debe aparecer junto al oso en cada activo por ≥90 días; los activos solo-marrón no califican",

      "brand.section.art-nouveau.badge": "Sistema Art Nouveau",
      "brand.section.art-nouveau.title": "Los cuatro componentes ornamentales",
      "brand.section.art-nouveau.meta": "Documentado · aplicado · reservado",
      "brand.section.art-nouveau.live-label": "En vivo · ArtNouveauDivider",
      "brand.section.art-nouveau.live-detail":
        "La línea dorada fina con un flourish central. Se usa para separar secciones mayores — nunca para cortar párrafos. Es la señal Art Nouveau más pequeña que todavía registra como craft: a un pixel de ancho apenas se ve, a tres compite con el contenido, a dos con el flourish carga el ADN ornamental de la marca sin cansar la vista. Trátalo como la ornament load-bearing — todos los demás componentes Art Nouveau dependen de él para la continuidad visual.",

      "brand.art-nouveau.borders.title": "Bordes ornamentales",
      "brand.art-nouveau.borders.detail":
        "Líneas doradas finas con un flourish central enmarcan secciones, menús y certificados — nunca un divisor flat-minimal.",
      "brand.art-nouveau.borders.evidence":
        "Observado en las plantillas de posts de Instagram (muestreado 2026-08-01) como una línea dorada fina que enmarca posts de nombre de bebida. NO verificado en signage físico — sin foto a nivel de calle. El pack de activos del dueño (Q6 abierta) se requiere para confirmar si el divisor aparece en el menú impreso.",

      "brand.art-nouveau.type.title": "Tipografía serif display",
      "brand.art-nouveau.type.detail":
        "Cormorant Garamond carga los titulares; sus trazos de alto contraste hacen eco a la litografía de principios de siglo XX.",
      "brand.art-nouveau.type.evidence":
        "Observado en la tipografía de la bio de Instagram y plantillas de posts (2026-08-01). La familia tipográfica específica se infirió de la altura-x y el contraste — el archivo exacto requiere confirmación del dueño. NO verificado en Rappi (la plataforma sobreescribe la tipografía).",

      "brand.art-nouveau.gold.title": "Acentos dorados",
      "brand.art-nouveau.gold.detail":
        "Un único dorado cálido (#B8924A) se reserva para énfasis — eyebrows, líneas finas, los catchlights del oso — nunca para texto de cuerpo.",
      "brand.art-nouveau.gold.evidence":
        "Observado como el color de eyebrow en captions de posts de Instagram (2026-08-01). Hex muestreado de 3 posts — varianza ±4 en espacio sRGB, lo que sugiere que el dorado se aplica de forma consistente pero no está codificado como token. NO verificado en empaque o signage.",

      "brand.art-nouveau.botanical.title": "Motivos botánicos / líneas onduladas",
      "brand.art-nouveau.botanical.detail":
        "Curvas sinuosas y simétricas (el sello Art Nouveau) aparecen en divisores y como textura de fondo, pareadas con verde bosque profundo.",
      "brand.art-nouveau.botanical.evidence":
        "Observado en las portadas de Stories de Instagram (3 de 5 Stories muestreadas usan una curva botánica como textura de fondo). NO verificado en signage físico, menús o empaque — la pregunta abierta Q6 (pack de activos) es el bloqueador. Si el motivo no aparece en el pack, este componente debería bajarse de «verificado» a «propuesto».",

      "brand.section.evolution.badge": "Evolución de marca",
      "brand.section.evolution.title": "Tres niveles de evolución — una recomendación",
      "brand.section.evolution.meta": "Refinamiento conservador gana",
      "brand.section.evolution.intro":
        "De tres direcciones plausibles, este módulo recomienda el Nivel 1 como sistema permanente. El Nivel 2 es una capa de crecimiento reversible a 6 meses por encima. El Nivel 3 es solo estacional. Un rebrand total queda explícitamente fuera de la mesa — no porque los rebrands siempre estén mal, sino porque la identidad de Ursa ya es su activo ownable (ver Activos Distintivos arriba), y un rebrand destruiría la disponibilidad mental que lidera la categoría y que aún no ha terminado de construir. El orden importa: el Nivel 1 debe fijarse antes de que salga el Nivel 2, y el Nivel 3 está condicionado a la aprobación explícita del dueño. Techo de costo por nivel: el Nivel 1 está acotado por el pack de activos (S/. 0–1,000 si el dueño entrega el mark oficial del oso; la documentación del sistema de diseño ya está escrita en este dossier); el Nivel 2 añade trabajo de motion-design a S/. 1,200–3,600 por un set de stickers y un mark en loop; el Nivel 3 corre a S/. 400–1,200 por skin estacional. Ninguna de estas cifras requiere agencia externa — un motion designer freelance de Lima puede entregar el Nivel 2 dentro del presupuesto.",
      "brand.section.evolution.why-callout-title": "Por qué el Nivel 1 es el sistema permanente",
      "brand.section.evolution.why-callout-body":
        "Ursa ya hace lo que funciona en 2025–26: identidad sobre perseguir tendencias. El oso, la línea Art Nouveau, el layout de dos barras y las bebidas con nombre suman una marca que los competidores no pueden copiar rápido. Refinar — no reemplazar — cuida ese activo y gasta el presupuesto en distribución (Módulo 04) en vez de en churn de identidad.",
      "brand.evolution.recommended-tag": "Recomendado",
      "brand.evolution.risk-label": "Riesgo y limitación",

      "brand.evolution.level-1.name": "Refinamiento conservador",
      "brand.evolution.level-1.horizon": "Sistema permanente",
      "brand.evolution.level-1.summary":
        "Codificar el oso, la paleta, la tipografía y los motivos Art Nouveau existentes en un sistema de diseño documentado. Apretar las reglas de aplicación, añadir las plantillas sociales y de empaque faltantes y fijar el mark del oso en tamaños consistentes. Este es el sistema permanente recomendado.",
      "brand.evolution.level-1.outcome-1": "Tokens de color, tipografía y componentes documentados",
      "brand.evolution.level-1.outcome-2": "Reglas de uso del mark del oso en cada superficie",
      "brand.evolution.level-1.outcome-3": "Plantillas reutilizables de social, menú y empaque",
      "brand.evolution.level-1.risk":
        "Riesgo: overhead de documentación sin enforcement. Un sistema de diseño que vive solo en un archivo Figma y no en un checklist impreso de «brand police» (referencia de una página para baristas, imprenta y creadores) se degrada en 90 días. Mitigación: entrega el checklist de una página junto al archivo Figma; audita la aplicación en los días 30, 60, 90. Regla de éxito: al día 30, ≥80% de los posts nuevos de Instagram usan el kit templado; al día 90, ≥95% — medido con una muestra semanal de diez posts. Si se pierde cualquiera de los dos umbrales, se revisa el checklist, no el sistema. Limitación: también depende del pack de activos del dueño (Q6 abierta) — si el mark oficial del oso no se entrega en 14 días, el Nivel 1 no se puede fijar.",

      "brand.evolution.level-2.name": "Sistema de crecimiento distintivo",
      "brand.evolution.level-2.horizon": "Capa de 6 meses",
      "brand.evolution.level-2.summary":
        "Encimar una capa de crecimiento de 6 meses sobre el Nivel 1: variantes animadas del oso, un acento tipográfico específico de campaña y tratamientos dorados estacionales. Todo se queda reversible; el sistema del Nivel 1 debajo no se toca.",
      "brand.evolution.level-2.outcome-1": "Oso animado (mark en loop + set de stickers)",
      "brand.evolution.level-2.outcome-2": "Un acento de campaña encimado en la paleta fijada",
      "brand.evolution.level-2.outcome-3": "Reversible — se quita después de 6 meses sin deuda de activos",
      "brand.evolution.level-2.risk":
        "Riesgo: creep de presupuesto de animación. Las variantes animadas del oso requieren trabajo de motion-design que, si se scopea suelto, se vuelve costo recurrente de producción (S/. 400–1,200 por set de stickers). Riesgo: «reversible» solo se sostiene si el Nivel 1 se fija PRIMERO — saltarse el Nivel 1 y saltar al Nivel 2 es la razón más común por la que los rebrands fallan. Mitigación: condicionar el Nivel 2 a un freeze del Nivel 1 de 4 semanas. Limitación: no se puede evaluar a tamaño thumbnail en el grid de Instagram si la animación del oso vive solo en Stories — la impresión del grid estático se seguirá leyendo como Nivel 1.",

      "brand.evolution.level-3.name": "Expresión estacional experimental",
      "brand.evolution.level-3.horizon": "Solo estacional",
      "brand.evolution.level-3.summary":
        "Expresiones estacionales y time-boxed: una variante de oso para feriado, un colorway de una sola colaboración o un skin de festival. Siempre se revierte al final de la temporada; nunca se promueve al sistema permanente sin una revisión explícita.",
      "brand.evolution.level-3.outcome-1": "Skins estacionales time-boxed (≤ 8 semanas)",
      "brand.evolution.level-3.outcome-2": "Claramente etiquetados como limitados, nunca como la nueva marca",
      "brand.evolution.level-3.outcome-3": "Revertidos a tiempo, documentados para archivo",
      "brand.evolution.level-3.risk":
        "Riesgo: confusión del cliente. Si un skin estacional es demasiado distintivo (ej. constelación invertida sobre espresso-black), los clientes que regresan pueden no reconocerlo como la misma marca — particularmente dañino para una cafetería que depende de un catchment caminable de 1km donde reconocimiento = footfall. Riesgo: «seasonal creep» — un skin que funciona comercialmente se tienta a permanencia, rompiendo la integridad del Nivel 1. Mitigación: fecha de expiración dura de 8 semanas impresa en cada activo del Nivel 3; la promoción a permanente requiere aprobación explícita del dueño y un periodo de enfriamiento de 30 días.",

      "brand.section.summary.badge": "Resumen de auditoría",
      "brand.section.summary.title": "Consistente · Inconsistente · Distintivo · Faltante",
      "brand.section.summary.meta": "El 2×2 con el que termina toda auditoría de marca",

      "brand.summary.consistent.title": "Consistente",
      "brand.summary.consistent.item-1": "Mark del oso + nombre (Ursa) en storefront y producto",
      "brand.summary.consistent.item-2": "Paleta de marrones y verdes con superficies crema",
      "brand.summary.consistent.item-3": "Cormorant Garamond display, Inter body, Oswald labels",
      "brand.summary.consistent.item-4": "Tostadora propia como columna operacional y narrativa",

      "brand.summary.inconsistent.title": "Inconsistente",
      "brand.summary.inconsistent.item-1": "Aplicación del oso varía por superficie — sin set de ilustración codificado",
      "brand.summary.inconsistent.item-2": "Posts sociales ad hoc, no templados",
      "brand.summary.inconsistent.item-3": "Etiquetas de empaque rara vez muestran el oso de forma consistente",
      "brand.summary.inconsistent.item-4": "Sin sitio web que cargue la identidad online",

      "brand.summary.distinctive.title": "Distintivo",
      "brand.summary.distinctive.item-1": "Único tostador de Lima con un personaje animal ownable",
      "brand.summary.distinctive.item-2": "Oso + Art Nouveau + layout de dos barras es una firma de tres partes",
      "brand.summary.distinctive.item-3": "Bebidas con nombre como Ursagroni son memorables y ownable",
      "brand.summary.distinctive.item-4": "«Un gramo a la vez» es un claim de craft de precisión que los competidores no tienen",

      "brand.summary.missing.title": "Faltante",
      "brand.summary.missing.item-1": "Oso animado y set de stickers sociales",
      "brand.summary.missing.item-2": "Kit consistente de plantillas de posts sociales",
      "brand.summary.missing.item-3": "Oso como personaje recurrente en email y empaque",
      "brand.summary.missing.item-4": "Tokens de sistema de diseño documentados (este módulo lo resuelve)",

      "brand.section.spirit.badge": "Baranda",
      "brand.section.spirit.title": "El principio de preservación del espíritu",
      "brand.spirit.eyebrow": "Principio de preservación del espíritu",
      "brand.spirit.headline": "Nunca elegir una táctica de crecimiento genérica sobre el oso.",
      "brand.spirit.body":
        "Si una recomendación obliga a elegir entre (a) cuidar la identidad existente de Ursa — oso, Art Nouveau, tostadora — y (b) perseguir una táctica de crecimiento genérica, este dossier siempre elige (a). La dirección de refinamiento conservador es el sistema permanente; las expresiones experimentales se quedan estacionales y reversibles. Esta es la baranda que heredan todos los módulos siguientes — y la prueba que decide la elección es operacional, no estética: si la táctica requiere un cambio de layout, un cambio de mark de marca o un giro tonal que el oso no pueda cargar, falla la baranda y se rechaza. Dos ejemplos trabajados: una campaña de cupones de descuento que requiere un tratamiento de color distinto para convertir fallaría (diluye la superficie crema-y-marrón donde vive el oso); una colaboración de herencia que coloca el logo del partner encima del oso en el storefront también fallaría (el oso pierde primacía en su propia superficie). Una campaña que coloca al oso en una escena estacional nueva, en cambio, pasa — el mark no cambia, solo se mueve su escenario.",
      "brand.spirit.chip.bear": "Oso · Gramo · Verde",
      "brand.spirit.chip.no-rebrand": "Sin rebrand · sin playbook genérico",
      "brand.spirit.chip.experiments": "Experimentos reversibles con reglas de parada de 14–30 días",

      "brand.section.dossier.badge": "Dossier estático",
      "brand.section.dossier.title": "Lee el dossier HTML imprimible",
      "brand.section.dossier.body":
        "El dossier completo del Módulo 01, listo para imprimir, está disponible como HTML navegable — ábrelo para las tablas completas de auditoría y las hojas de color imprimibles. La referencia impresa es de la que trabajan el equipo de baristas, la imprenta y cualquier creador externo; esta vista digital es contra la que iteran el dueño y el equipo del dossier.",
      "brand.section.dossier.button": "Abrir la guía de estilo interactiva",

      "brand.stat.palette": "Tokens de paleta verificados",
      "brand.stat.typography": "Voces tipográficas, un ritmo",
      "brand.stat.evolution": "Niveles de evolución de marca",
      "brand.stat.recommended": "Sistema permanente recomendado",

      /* ---- Módulo 02 · Mercado (cuerpo profundizado + copy de sección) ---- */
      "market.hero.lede":
        "Este módulo corre un censo sistemático de competidores a 1km desde la dirección de Ursa en Alcanfores 183 — doce calles con nombre que irradian desde Parque Kennedy recorridas virtualmente, cada café público registrado contra Google Places, TripAdvisor y location tags de Instagram — luego lee los patrones de voz del cliente entre ellos y convierte cada hallazgo en algo que Ursa puede igualar, evitar o liderar. El oso no se toma prestado de la categoría; es la única posición que queda sin contender. El censo es un conjunto cerrado: cada competidor con nombre dentro de 1km está nombrado. Los temas de voz del cliente se infieren de patrones de reseña de competidores, no todavía de una muestra codificada de los propios clientes de Ursa — esa limitación se nombra donde aplica.",
      "market.hero.meta.census": "Censo",
      "market.hero.meta.competitors": "competidores",
      "market.hero.meta.scope": "Alcance",
      "market.hero.meta.in-catchment": "en 1km",
      "market.hero.meta.benchmarks": "benchmarks de Lima",
      "market.reviews-suffix": "reseñas",

      "market.stat.competitors": "Competidores en el censo",
      "market.stat.catchment": "Dentro del catchment de 1km",
      "market.stat.operating-uncertain": "Operando · Incierto",
      "market.stat.same-street": "Misma calle que Ursa",

      "market.proximity.same-street": "Misma calle",
      "market.proximity.nearby": "Cercano",
      "market.proximity.within-1km": "Dentro de 1km",
      "market.proximity.out-of-area-lima-wide": "Benchmark",
      "market.proximity-desc.same-street": "Proximidad crítica — misma calle que Ursa, <250m a pie",
      "market.proximity-desc.nearby": "Dentro de ~500m a pie de Ursa",
      "market.proximity-desc.within-1km": "Dentro de un radio de 1km a pie de Ursa",
      "market.proximity-desc.out-of-area-lima-wide": "Benchmark de Lima fuera del catchment de 1km",

      "market.status.operating": "Operando",
      "market.status.uncertain": "Incierto",
      "market.website.yes": "Sitio web",
      "market.website.no": "Sin sitio",

      "market.competitor.strength": "Fortaleza",
      "market.competitor.weakness": "Debilidad",
      "market.competitor.ursa-implication": "Implicación para Ursa",

      "market.section.census.badge": "Censo de competidores a 1km",
      "market.section.census.title": "Cada competidor con nombre dentro de 1km a pie de Alcanfores 183",
      "market.section.census.meta": "Grid sistemático que irradia desde calles · snapshot 2026-08-01",
      "market.section.census.intro":
        "El conjunto de competidores ya no es una shortlist — es un censo. Cada calle con nombre dentro de 1km a pie de la dirección de Ursa se recorrió virtualmente vía Google Maps Street View y se cruzó contra Google Places, TripAdvisor y location tags de Instagram. El resultado: 14 competidores dentro del catchment de 1km más 4 benchmarks de Lima (Bisetti, Ciclos, RAIZ, Monótono) incluidos para contexto posicional. La proximidad tiene código de color: rojo = misma calle, dorado = cercano, verde = dentro de 1km, gris = benchmark fuera del área. Un radio de 1km es el catchment práctico para un espresso bar en un distrito denso y caminable como Miraflores — más allá, el cliente está eligiendo viajar, no entrando de paso. La alternativa considerada fue un reporte de investigación de mercado pagado (S/. 8,000–15,000 de una firma limeña de consumer insights); se rechazó porque la fuente de verdad del dossier es data pública verificable, no una interpretación de terceros, y porque el costo del censo fue prácticamente cero en efectivo.",
      "market.section.census.summary.discovered": "Total descubiertos",
      "market.section.census.summary.operating": "Operando",
      "market.section.census.summary.uncertain": "Estado incierto",
      "market.section.census.summary.direct": "Competidores directos",
      "market.section.census.table.title": "Tabla del censo — ordenada del más cercano",
      "market.section.census.table.streets": "calles recorridas",
      "market.section.census.col.competitor": "Competidor",
      "market.section.census.col.address": "Dirección",
      "market.section.census.col.distance": "Distancia",
      "market.section.census.col.type": "Tipo",
      "market.section.census.col.google": "Google",
      "market.section.census.col.tripadvisor": "TripAdvisor",
      "market.section.census.col.status": "Estado",

      "market.section.census.coverage.title": "Metodología de cobertura — cómo se construyó el censo",
      "market.section.census.coverage.study-area-label": "Área de estudio",
      "market.section.census.coverage.study-area":
        "Radio de 1km a pie desde Alcanfores 183, Miraflores. 1km es el catchment práctico para un espresso bar en un distrito denso y caminable como Miraflores.",
      "market.section.census.coverage.grid-label": "Definición del grid",
      "market.section.census.coverage.grid":
        "Grid que irradia desde calles desde Parque Kennedy — cada calle con nombre dentro de 1km recorrida virtualmente vía Google Maps Street View.",
      "market.section.census.coverage.streets-label": "Calles buscadas",
      "market.section.census.coverage.inclusion-label": "Inclusión / exclusión",
      "market.section.census.coverage.inclusion":
        "Dentro: café de especialidad como categoría primaria, dirección física verificable, público. Fuera: cadenas con >10 locales en Lima (Starbucks, Juan Valdez), pizzerías, café de hotel, carts informales.",
      "market.section.census.coverage.stat.discovered": "Descubiertos",
      "market.section.census.coverage.stat.in-catchment": "En catchment",
      "market.section.census.coverage.stat.operating": "Operando",
      "market.section.census.coverage.stat.uncertain-closed": "Inciertos / cerrados",
      "market.section.census.coverage.anchor-label": "Hallazgos ancla:",
      "market.section.census.coverage.anchor-body":
        "el competidor confirmado más cercano es {nearestConfirmed}; el incierto más cercano es {nearestUncertain}; el de mayor volumen de reseñas es {highestVolume}; el mejor calificado es {highestRated}; el líder de premios en catchment es {awardInCatchment}; el benchmark de Lima a vencer es {awardLimaWide}.",
      "market.section.census.coverage.methodology-toggle": "Metodología, limitaciones y próximos pasos",
      "market.section.census.coverage.next-steps-label": "Próximos pasos",
      "market.section.census.coverage.full-census-prefix": "Censo estructurado completo:",

      "market.section.landscape.badge": "Landscape de competidores",
      "market.section.landscape.title": "Los dieciocho nombres alrededor de Ursa",
      "market.section.landscape.meta": "Deep-dive por competidor · snapshot 2026-08-01",
      "market.section.landscape.intro":
        "El censo de arriba es la vista sistemática; las tarjetas de abajo son el deep-dive por competidor. Para cada competidor la tarjeta nombra una fortaleza, una debilidad y la implicación que se sigue para Ursa — un SWOT comprimido, estrechado porque la posición estratégica de cada competidor ya está nombrada en el análisis de espacio ownable de abajo. Catorce están dentro del catchment de 1km; cuatro (Bisetti, Ciclos, RAIZ, Monótono) son benchmarks de Lima incluidos para contexto posicional — no competidores directos que un cliente de Miraflores compara en la misma caminata, sino puntos de referencia de lo que se ve como liderazgo de categoría a escala Lima. La limitación del framework: congela un solo snapshot (2026-08-01) y no trackea momentum. Un competidor que abre un segundo local o gana un premio nacional entre snapshots movería la lectura; la cadencia de refresh trimestral de la hoja de ruta de implementación es la mitigación.",

      "market.section.ownable.badge": "Espacio ownable",
      "market.section.ownable.title": "Ursa se sienta ortogonal a la categoría",
      "market.section.ownable.meta": "No una mejor cafetería — una distinta",
      "market.section.ownable.intro":
        "Cada competidor fuerte de Miraflores es dueño de una posición. Punto Café es dueño del premio. Neira es dueño de la escala. Bisetti es dueño de la escuela. Puku Puku es dueño del microlote. Terrua es dueño de la degustación premium. Ninguno es dueño de un animal, de un lenguaje de diseño Art Nouveau o de un teatro de dos barras — y ninguno usa bebidas con nombre. Estas posiciones no son fáciles de copiar porque cada una está respaldada por un activo duro: el certificado de premio de Punto, los cuatro locales de Neira, el programa de entrenamiento de Bisetti, la cadena de microlotes de Puku Puku, el sourcing farm-to-cup de Terrua. El oso de Ursa, el layout de dos barras y el sistema de bebidas con nombre son igualmente difíciles de copiar porque cada uno está respaldado por un compromiso físico u operacional — una marca, un espacio construido, una disciplina de carta — que un competidor no puede redeployar sin igualar los tres. El foso ya está construido; el costo desde aquí es defensa (aplicación consistente, ver activos distintivos del Módulo 01), no construcción.",
      "market.section.ownable.ortho-title": "El principio de ortogonalidad",
      "market.section.ownable.ortho-body":
        "El espacio ownable de Ursa — oso + dos barras + bebidas con nombre (Ursagroni, Maracumango) + «Un gramo a la vez» — no compite contra las posiciones existentes de la categoría. Se sienta en ángulo recto con ellas. Un cliente puede amar el premio de Punto Café y aun así elegir Ursa por el oso. Ese es el foso — y la regla operacional que implica es que Ursa nunca debe intentar ganarle el premio a Punto, la escala a Neira o la escuela a Bisetti. Cada uno de esos concursos tiene un incumbente con ventaja estructural; el concurso del oso no tiene incumbente. Regla de éxito: una encuesta trimestral a clientes (n≥40, corrida junto con la prueba de recordación de activos distintivos del Módulo 01) debería mostrar que menos del 30% de los regulares de Ursa nombran a un solo competidor como sustituto; si esa proporción sube por encima del 50%, el claim de ortogonalidad se ha debilitado y el posicionamiento necesita una re-decisión escrita antes de que salga cualquier táctica nueva.",
      "market.section.ownable.rule":
        "La regla estratégica que se sigue: nunca intentar ganarle el premio a Punto, la escala a Neira o la escuela a Bisetti. En cambio, ser la única cafetería en Lima donde el oso, el gramo y el verde son visiblemente el sistema operativo.",
      "market.section.ownable.card-title": "Quién es dueño de qué",
      "market.section.ownable.card-footnote": "La fila de Ursa es la única que ningún competidor puede reclamar",
      "market.ownable.punto": "Premios",
      "market.ownable.neira": "Escala",
      "market.ownable.bisetti": "«Escuela de café»",
      "market.ownable.puku-puku": "Microlotes",
      "market.ownable.terrua": "Degustación premium",
      "market.ownable.ursa": "El oso",

      "market.section.voice.badge": "Voz del cliente",
      "market.section.voice.title": "Lo que los clientes de cafetería de Lima dicen de verdad",
      "market.section.voice.meta": "Cuatro temas · verificados de reseñas públicas y observación directa",
      "market.section.voice.methodology-title": "Metodología y limitaciones",
      "market.section.voice.methodology-intro":
        "Los temas de voz del cliente de abajo son ilustrativos, no validados. Se infieren de patrones de reseña de competidores y del propio análisis competitivo del dossier, no de una muestra codificada de los clientes de Ursa. Léelos como señal direccional, no como lectura cuantitativa de la clientela de Ursa. Cadencia de revisión: recodificar los temas en el momento en que Ursa acumule ≥50 reseñas públicas propias entre Google y TripAdvisor (el umbral en el que una muestra codificada se vuelve estadísticamente significativa para una cafetería de un solo local), y no más tarde del próximo snapshot trimestral — lo que ocurra primero.",
      "market.section.voice.field.boundary": "Límite de mercado",
      "market.section.voice.field.boundary-value": "Cafés de especialidad de Miraflores + líderes de Lima para benchmarking",
      "market.section.voice.field.platforms": "Plataformas muestreadas",
      "market.section.voice.field.platforms-value": "Instagram, Rappi, TripAdvisor, Google Maps, CoffeePass",
      "market.section.voice.field.period": "Periodo de observación",
      "market.section.voice.field.period-value": "2026-08-01 (snapshot puntual)",
      "market.section.voice.field.sample": "Muestra",
      "market.section.voice.field.sample-value": "Fichas públicas y bios de 10 competidores; muestras de reseña de TripAdvisor donde disponible",
      "market.section.voice.field.inclusion": "Criterios de inclusión",
      "market.section.voice.field.inclusion-value": "Competidores directos de Miraflores + líderes de especialidad de Lima con presencia online pública",
      "market.section.voice.field.coding": "Codificación",
      "market.section.voice.field.coding-value": "Temas agrupados por tópico recurrente (calidad, servicio, ambiente, valor, accesibilidad)",
      "market.section.voice.limitation-label": "Limitación:",
      "market.section.voice.limitation-body":
        "El TripAdvisor de Ursa tiene ~0 reseñas; los temas de cliente se infieren de patrones de reseña de competidores y del propio análisis competitivo del dossier, no de una muestra codificada de los clientes de Ursa. Un estudio propio de voz del cliente requiere datos POS proporcionados por el dueño, una encuesta consentida o una muestra minada de ≥50 reseñas específicas de Ursa (no disponible actualmente). La muestra de reseñas reales de abajo complementa estos temas con menciones públicas verbatim pero no reemplaza un estudio codificado de voz del cliente.",

      "market.section.voice.review-sample.eyebrow": "Estado de la muestra de reseñas",
      "market.section.voice.review-sample.title": "Reseñas reales de cliente y voz externa",
      "market.section.voice.review-sample.intro":
        "Se buscaron {platforms} plataformas el {date}. Se encontraron {real} menciones reales específicas de Ursa (mayormente posts y reels de Instagram) y {aggregate} calificaciones agregadas de plataformas de directorios. La huella pública de reseñas de Ursa es delgada pero no cero — y está concentrada en Instagram y Google, no en TripAdvisor.",
      "market.section.voice.review-sample.correction":
        "Corrección al dossier previo: la evidencia de agregadores (datos schema.org LocalBusiness de addagio.io) muestra que Ursa tiene un Google Business Profile activo con ~56 reseñas a 4.5 estrellas. El claim previo de que el perfil de Google de Ursa estaba «missing/unverified» era incorrecto. La fricción real es una optimización débil de SEO/GBP (Ursa no aparece en las guías de «mejores cafés de Lima» del propio Google), no una presencia faltante.",
      "market.section.voice.review-sample.platforms-toggle": "Plataformas buscadas y limitaciones",
      "market.section.voice.review-sample.platforms-label": "Plataformas buscadas",
      "market.section.voice.review-sample.methodology-label": "Metodología",
      "market.section.voice.review-sample.limitations-label": "Limitaciones",
      "market.section.voice.review-sample.source-link": "Fuente",
      "market.section.voice.themes-divider": "Los temas ilustrativos de abajo se infieren de patrones de competidores",
      "market.section.voice.theme-label.theme": "Tema",
      "market.section.voice.theme-label.value": "Valor",
      "market.section.voice.theme-label.pain": "Dolor",
      "market.section.voice.theme-label.friction": "Fricción",
      "market.section.voice.theme-label.lead": "Liderazgo",
      "market.section.voice.theme-label.evidence": "Evidencia",
      "market.section.voice.evidence-prefix": "Evidencia ·",
      "market.section.voice.sample-prefix": "Muestra ·",

      "market.section.conversion.badge": "Conversión a acción",
      "market.section.conversion.title": "De hallazgos a una worklist de 90 días",
      "market.section.conversion.meta": "Seis pistas · cada una rastreable a un competidor o un tema de voz del cliente",
      "market.section.conversion.intro":
        "Cada tarjeta de abajo es una conversión directa de un hallazgo de arriba — ninguna tarjeta es especulativa. Donde una tarjeta referencia un competidor, la implicación es explícita; donde referencia un tema de voz del cliente, se nombra el punto de fricción. Las seis pistas están secuenciadas para una worklist de 90 días: primero estándares (porque igualar las líneas base de la categoría es prerrequisito para liderarlas), luego evitación (porque las pérdidas se acumulan más rápido que las ganancias), luego liderazgo (las aperturas en forma de oso que el censo verificó). Regla de éxito en las seis: cada pista entrega un artefacto tangible en 30 días (un claim en GBP, una línea de menú, un flight de degustación, un proof point de contenido), y se revisa al día 60 contra su métrica nombrada. Cualquier pista que no haya entregado su artefacto al día 30 se pausa y se re-scopea, no se lleva adelante como intención vaga — las intenciones vagas son cómo las worklists de 90 días se vuelven wishlists de 12 meses.",

      "market.conversion.standards.title": "Estándares que Ursa debe igualar",
      "market.conversion.standards.item-1": "Visibilidad de premios — Punto Café ganó Premios Somos 2024; Ursa necesita una entrada de premios creíble",
      "market.conversion.standards.item-2": "Calidad de degustación premium — Terrua cobra US$25; el cupping de Ursa debe ser técnicamente ajustado",
      "market.conversion.standards.item-3": "Profundidad educativa — Bisetti es dueño de la escuela; los baristas de Ursa deben hablar origen con fluidez",
      "market.conversion.standards.item-4": "Transparencia de grano — Puku Puku lista microlotes; el menú de Ursa debe mostrar origen, proceso, altitud",

      "market.conversion.problems.title": "Problemas a evitar",
      "market.conversion.problems.item-1": "Dilución de cobranding — la alianza WorkCafé de Neira suaviza su identidad de cafetería",
      "market.conversion.problems.item-2": "Sensación de cadena a escala — Puku Puku cambia ambiente por reach",
      "market.conversion.problems.item-3": "Mensajería genérica de sostenibilidad — el copy verde de Café Verde podría ser de cualquiera",
      "market.conversion.problems.item-4": "Formalidad educativa — el tono escuela de Bisetti puede sentirse como tarea",
      "market.conversion.problems.item-5": "Café de delivery frío o diluido — un queja recurrente en Lima",

      "market.conversion.lead.title": "Áreas para liderar",
      "market.conversion.lead.item-1": "Personaje de marca liderado por oso que ningún competidor tiene",
      "market.conversion.lead.item-2": "Teatro de dos barras (espresso + coldbrew) visible desde la calle",
      "market.conversion.lead.item-3": "Naming de bebida por portmanteau — Ursagroni, Maracumango — como sistema de firma",
      "market.conversion.lead.item-4": "«Un gramo a la vez» como ethos de craft paciente",
      "market.conversion.lead.item-5": "Lenguaje craft Art Nouveau aplicado de forma consistente en cada touchpoint",

      "market.conversion.experience.title": "Mejoras de experiencia del cliente",
      "market.conversion.experience.item-1": "Google Business Profile verificado — algo básico que los competidores también descuidan",
      "market.conversion.experience.item-2": "Indicador en vivo de «¿está lleno ahora?» en el sitio de la cafetería",
      "market.conversion.experience.item-3": "Canal claro de reserva para degustaciones y cuppings",
      "market.conversion.experience.item-4": "Tarjetas de grano que marquen lotes estacionales vs. permanentes",
      "market.conversion.experience.item-5": "Wi-Fi fuerte y tomacorrientes accesibles para trabajadores remotos",

      "market.conversion.product.title": "Oportunidades de producto",
      "market.conversion.product.item-1": "Flights de degustación por niveles — entrada accesible más profundidad premium vs. el techo de US$25 de Terrua",
      "market.conversion.product.item-2": "Sub-línea de microlotes — tomar prestado el posicionamiento de Puku Puku sin la sensación de cadena",
      "market.conversion.product.item-3": "Tarjetas de grano con historia de origen — parear con la línea Filtrado Lonya vs. RAIZ",
      "market.conversion.product.item-4": "Rotación de bebidas con nombre — una nueva bebida con nombre cada temporada mantiene viva la carta",
      "market.conversion.product.item-5": "Suscripción con economía de attach-rate — ver la Calculadora de Suscripción",

      "market.conversion.marketing.title": "Proof points de marketing",
      "market.conversion.marketing.item-1": "«Tostadora propia, visible desde la barra» — prueba de credibilidad de especialidad",
      "market.conversion.marketing.item-2": "«Dos barras: espresso + coldbrew» — teatro visible",
      "market.conversion.marketing.item-3": "«Bebidas originales que puedes pedir por nombre» — Ursagroni, Maracumango",
      "market.conversion.marketing.item-4": "«Craft Art Nouveau, aplicado de forma consistente» — lenguaje de diseño como foso",
      "market.conversion.marketing.item-5": "«Intimidad de sitio único» — una cafetería en Miraflores, no una cadena",

      "market.section.website-gap.badge": "La brecha del sitio web",
      "market.section.website-gap.title": "De {count} competidores con sitio web, Ursa no es uno de ellos.",
      "market.section.website-gap.meta": "Surfaced en censo de 1km · prioridad de 30 días",
      "market.section.website-gap.callout-title": "Esta es la brecha de infraestructura más visible del dossier",
      "market.section.website-gap.callout-body":
        "{withWebsite} de {total} competidores en el censo de 1km mantienen un sitio web público. La presencia descubrible de Ursa es solo Instagram. Un visitante primerizo que busca «café de especialidad Miraflores» en Google encuentra un muro de sitios de competidores — Punto Café, Neira Café Lab, Terrua, Cate Tasting Room y más — y un Google Business Profile subóptimo a cambio. El oso es invisible en el momento de mayor intención. Métrica de éxito: a 60 días del lanzamiento, una búsqueda incógnito de «café Miraflores» o «café de especialidad Miraflores» desde una IP de Miraflores debería devolver el sitio de Ursa en los primeros diez resultados orgánicos — esa es la barra a la que la brecha se considera cerrada, no simplemente llenada.",
      "market.section.website-gap.priority-label": "Prioridad de 30 días:",
      "market.section.website-gap.priority-body":
        "lanzar un sitio de una sola página que cargue la identidad verificada — dirección, horario, bebidas de autor, el oso, la línea craft Art Nouveau y un canal de reserva para degustaciones. El sistema de diseño completo ya existe en el Módulo 01. Las bebidas de autor están verificadas en el Módulo 03. Esto es ensamblaje, no invención — y el costo de implementación es proporcionalmente pequeño: una sola página Next.js con los tokens existentes, deployable a un host estático gratuito en 72 horas. En efectivo el costo es S/. 0 si lo arma el equipo del dossier, o S/. 1,500–3,000 si se contrata a un desarrollador freelance Next.js de Lima para uno o dos días de trabajo. El costo de no lanzarlo es mayor: cada búsqueda en Google de «café Miraflores» que aterriza en el sitio de un competidor es un cliente al que Ursa no ha pagado costo de adquisición por alcanzar y aun así pierde.",
      "market.section.website-gap.open-brand": "Abrir Auditoría de Marca (Módulo 01)",
      "market.section.website-gap.open-dashboard": "Abrir el Tablero de Competidores interactivo",

      "market.section.dossier.body":
        "Todos los claims de competidores tienen fuente y fecha de snapshot. Ver Fuentes y Evidencia para citas completas.",

      /* ---- Herramienta T3 · Calendario de Contenido (cuerpo profundizado + copy de sección) ---- */
      "content-calendar.hero.lede":
        "La pregunta que responde esta herramienta: ¿cómo produce una tostadora con un dueño-operador y un equipo pequeño de baristas suficiente contenido para Instagram y mantener a Ursa en la cabeza del cliente que camina por el kilómetro de Miraflores — sin pagar agencia, contratar creador, ni quemar el tiempo del dueño? El plan propone una grilla de cuatro semanas con veintiséis conceptos internos, diez guiones listos para producción y tres series con cadencia, todos filmales dentro del local con los baristas ya en turno. La biblioteca es cerrada (nada se agrega sin sacar otra cosa) para que el equipo repita en vez de inventar; los guiones son bilingües verbatim para que los captions no necesiten traductor; el calendario trae pre-cargado un ritmo de Reels Lunes/Miércoles/Viernes, Carruseles Martes/Jueves, Evento o UGC los sábados, e Stories los domingos — probado para mantener el feed caliente sin saturarlo.",
      "content-calendar.meta.concepts": "Conceptos",
      "content-calendar.meta.scripts": "Guiones",
      "content-calendar.meta.series": "Series",
      "content-calendar.meta.pilot": "Piloto",
      "content-calendar.meta.pilot-value": "4 semanas",

      "content-calendar.section.1.badge": "Sección 01",
      "content-calendar.section.1.title": "La biblioteca de un vistazo",
      "content-calendar.section.1.meta": "Conteos por formato",
      "content-calendar.stat.concepts": "Conceptos en la biblioteca",
      "content-calendar.stat.scripts": "Guiones listos para producción (beats + caption + CTA)",
      "content-calendar.stat.series": "Series repetibles con cadencia",
      "content-calendar.section.1.formats-label":
        "Conceptos por formato (superpuestos — un concepto puede coincidir con varios)",
      "content-calendar.section.1.callout-title": "Por qué estos formatos, en estas proporciones",
      "content-calendar.section.1.callout-body":
        "Los Reels cargan alcance (el algoritmo de Instagram los muestra a no-seguidores); los Carruseles cargan tiempo de permanencia (cada slide es una impresión aparte); las Stories cargan frecuencia sin fatiga (desaparecen en 24 horas, así que publicar a diario es el contrato, no spam); UGC y Eventos cargan prueba (la voz de otra persona, un momento real del local). La biblioteca de veintiséis conceptos está diseñada para que el equipo nunca abra un frame en blanco — el trabajo es elegir, no inventar.",

      "content-calendar.section.2.badge": "Sección 02",
      "content-calendar.section.2.title": "Biblioteca filtrable de conceptos",
      "content-calendar.section.2.meta": "{n} de 26 mostrados",
      "content-calendar.section.2.intro":
        "Usa esta biblioteca como un menú, no como una lista de deseos. Elige un concepto, fílmalo en el local con los baristas en turno, publica el caption verbatim del guion vinculado. La barra de búsqueda coincide con título, hook o ID (prueba «C07», «oso» o «coldbrew»). El filtro de formato acota por superficie de Instagram — Reel, Carrusel, Serie, UGC, Evento. Cada tarjeta abre un diálogo de detalle con el hook, las reglas de producción y un enlace al brief completo del Módulo 05.",
      "content-calendar.section.2.search-placeholder": "Busca por título, hook o ID (ej. C07, oso, coldbrew)…",
      "content-calendar.section.2.empty": "Ningún concepto coincide. Prueba con otro filtro u otro término.",
      "content-calendar.section.2.view-details": "Ver detalle →",
      "content-calendar.section.2.dialog.hook-label": "El hook",
      "content-calendar.section.2.dialog.use-label": "Cómo usar este concepto",
      "content-calendar.section.2.dialog.use-1":
        "Filma dentro del local con los baristas en turno — sin actores, sin locaciones pagadas. Lo que importa es la prueba de que este local existe y esta gente prepara este café.",
      "content-calendar.section.2.dialog.use-2":
        "Abre con el hook en los primeros dos segundos. La marca va en el último frame, no en el primero — Instagram premia el tiempo de visualización, y ese tiempo se gana con contenido, no con logo.",
      "content-calendar.section.2.dialog.use-3":
        "Si existe un guion vinculado, pega su caption en español verbatim. Los captions llegan pre-traducidos al español peruano y revisados en campo; improvisar rompe la voz.",
      "content-calendar.section.2.dialog.use-4":
        "Publica en la cadencia que asigne el calendario. Mide guardados, compartidos y alcance durante 48 horas antes de decidir si repites, retiras o reemplazas.",
      "content-calendar.section.2.dialog.close": "Cerrar",
      "content-calendar.section.2.dialog.open-module": "Abrir Módulo 05",

      "content-calendar.filter.all": "Todos",
      "content-calendar.filter.reel": "Reel",
      "content-calendar.filter.carousel": "Carrusel",
      "content-calendar.filter.series": "Serie",
      "content-calendar.filter.ugc": "UGC",
      "content-calendar.filter.event": "Evento",

      "content-calendar.day.Mon": "Lun",
      "content-calendar.day.Tue": "Mar",
      "content-calendar.day.Wed": "Mié",
      "content-calendar.day.Thu": "Jue",
      "content-calendar.day.Fri": "Vie",
      "content-calendar.day.Sat": "Sáb",
      "content-calendar.day.Sun": "Dom",

      "content-calendar.section.3.badge": "Sección 03",
      "content-calendar.section.3.title": "Lector de guiones",
      "content-calendar.section.3.meta": "Beats · caption · CTA · copia",
      "content-calendar.section.3.intro":
        "Cada guion de la biblioteca trae tres artefactos: los beats (la lista de planos que un barista puede filmar sin director), el caption en español (listo para copiar y pegar, sin traducción al paso) y el CTA en español (una acción específica, un enlace o palabra específica). Los captions y CTAs se publican verbatim — el lector bilingüe ve español; la copia de back-office es inglés. Adaptar el texto al vuelo rompe la prueba medible: no puedes comparar un Reel que funcionó con el caption A contra uno que funcionó con el caption B si ambos fueron editados.",
      "content-calendar.section.3.beats-label": "Beats",
      "content-calendar.section.3.caption-label": "Caption · ES Perú",
      "content-calendar.section.3.cta-label": "CTA · ES Perú",
      "content-calendar.section.3.copy-button": "Copiar caption",
      "content-calendar.section.3.copied-button": "Copiado",

      "content-calendar.section.4.badge": "Sección 04",
      "content-calendar.section.4.title": "Calendario semanal interactivo",
      "content-calendar.section.4.meta": "{n} asignaciones · toca cualquier día",
      "content-calendar.section.4.intro":
        "La grilla de cuatro semanas trae pre-cargado un ritmo probado para mantener el feed caliente sin saturarlo: Reels Lunes/Miércoles/Viernes (alcance); Carruseles Martes/Jueves (profundidad); Evento o UGC los sábados (prueba); Stories los domingos (frecuencia). Toca cualquier celda para abrir el selector de conceptos. El calendario pre-cargado es un punto de partida — reemplaza cualquier celda con un concepto de la biblioteca, apila más de un concepto en un día, o resetea al ritmo sugerido cuando la grilla se desordene.",
      "content-calendar.section.4.reset": "Volver al sugerido",
      "content-calendar.section.4.add-concept": "+ agregar concepto",
      "content-calendar.section.4.more": "+{n} más",
      "content-calendar.section.4.cell-label": "S{week} · {day}",
      "content-calendar.section.4.tip-prefix": "Tip:",
      "content-calendar.section.4.tip-body":
        "un día puede cargar más de un concepto (ej. un Reel + una Story). Usa el selector para apilarlos.",
      "content-calendar.section.4.dialog-title": "Semana {week} · {day}",
      "content-calendar.section.4.dialog-desc": "Activa conceptos para asignar. Hay {n} asignados ahora.",
      "content-calendar.section.4.dialog-search-placeholder": "Buscar conceptos…",
      "content-calendar.section.4.dialog-clear": "Limpiar día",
      "content-calendar.section.4.dialog-done": "Listo",

      "content-calendar.section.5.badge": "Sección 05",
      "content-calendar.section.5.title": "Seguimiento de series",
      "content-calendar.section.5.meta": "Registra la fecha del último posteo",
      "content-calendar.section.5.intro":
        "Una serie repetible se gana su lugar solo si la audiencia aprende a esperarla. Las tres series de abajo son la columna vertebral del feed de Ursa — cada una tiene cadencia (diaria o semanal) y un concepto fijo que no cambia de episodio a episodio. Usa este registro para anotar la fecha del último posteo de cada una; cualquier fecha más antigua que la cadencia se marca como atrasada, porque una semana perdida cuesta dos semanas de recuperación (el algoritmo olvida y la audiencia deshabituada).",
      "content-calendar.section.5.last-posted-label": "Último posteo",
      "content-calendar.section.5.not-logged": "Sin registrar",
      "content-calendar.section.5.last-prefix": "Último:",
      "content-calendar.section.5.overdue": "Atrasada",
      "content-calendar.section.5.on-cadence": "En cadencia",
      "content-calendar.section.5.callout-title": "La cadencia es la estrategia",
      "content-calendar.section.5.callout-body":
        "Una serie se gana su lugar siendo predecible — la audiencia aprende a esperarla como espera el diario de la mañana o la columna semanal. En Instagram específicamente, el algoritmo premia a las cuentas que publican consistente dentro de su ventana de cadencia y castiga a las que publican en ráfagas y después callan. Una semana perdida cuesta dos semanas de recuperación (el alcance cae, y luego tarda una semana en escalar de vuelta). Si una serie se retrasa dos veces en un mismo mes, retírala y reemplázala con un concepto nuevo de la biblioteca — mejor botar una serie que romper el ritmo del feed.",

      "content-calendar.closing.title": "Dossier completo de contenido viral",
      "content-calendar.closing.body":
        "Esta herramienta complementa el Módulo 05. Abre el HTML imprimible para los briefs completos de conceptos, el set completo de guiones, los mecanismos de UGC y el método de amplificación pagada.",
      "content-calendar.closing.back": "Volver al Módulo 05",

      /* ---- Herramienta T7 · Atlas de Orígenes (cuerpo profundizado + copy de sección) ---- */
      "origin-atlas.hero.lede":
        "La pregunta que responde este atlas: ¿de dónde vienen los granos de Ursa, y de dónde podrían venir a medida que la tostadora crece su red de proveedores? Hay seis orígenes trazados — Utcubamba, Chirinos, La Coipa, Satipo, Quillabamba y Rodriguez de Mendoza — cada uno con altitud, proceso, varietal y perfil de taza que produce. Utcubamba lleva el anillo dorado: es el origen verificado detrás del Filtrado Lonya, el pour-over de origen único nombrado así por el río que cruza la región. Los otros cinco son candidatos realistas de expansión, trazados para educación de sourcing, planeamiento de rotación de carta y como insumos para el feature estacional «Gramo del Mes».",
      "origin-atlas.meta.origins": "Orígenes",
      "origin-atlas.meta.origins-value": "{n} trazados",
      "origin-atlas.meta.verified": "Verificado",
      "origin-atlas.meta.verified-value": "Utcubamba → Filtrado Lonya",
      "origin-atlas.meta.snapshot": "Snapshot",
      "origin-atlas.meta.snapshot-value": "2026-08-01",

      "origin-atlas.section.1.badge": "Atlas §1",
      "origin-atlas.section.1.title": "El mapa, de un vistazo",
      "origin-atlas.section.1.meta": "El cinturón cafetalero del Perú corre por la ladera oriental andina",
      "origin-atlas.stat.origins": "Orígenes trazados",
      "origin-atlas.stat.altitude": "Rango de altitud",
      "origin-atlas.stat.processes": "Procesos (lavado / natural / honey)",
      "origin-atlas.stat.varietals": "Varietales (Bourbon · Caturra · Catimor · Typica)",
      "origin-atlas.section.1.intro":
        "El cinturón cafetalero de especialidad del Perú corre por la ladera oriental de los Andes — una franja de bosque nublado entre 1.500 y 2.000 m donde Amazonas, Cajamarca, Junín y Cusco concentran la mayor parte de la producción de especialidad del país. Los seis orígenes trazados aquí fueron elegidos porque cada uno representa una combinación distinta de altitud, proceso y varietal — juntos cubren el espacio de perfil de taza del que Ursa probablemente se provea a medida que crece la tostadora. El mapa es ilustrativo, no de precisión topográfica; los puntos están posicionados para legibilidad, no para exactitud GPS.",
      "origin-atlas.section.1.callout-title": "Qué significa «verificado» aquí",
      "origin-atlas.section.1.callout-body":
        "Solo Utcubamba está verificado actualmente como origen de grano de Ursa — se sirve como el Filtrado Lonya. Los otros cinco son candidatos realistas para la expansión de la tostadora, trazados aquí para educación de sourcing y como insumos para la rotación de origen único de la carta. Ninguno está aún en la carta, y no se claima que Ursa compre actualmente de ellos. Promover cualquier candidato a verificado requiere un lote sourced, un productor o cooperativa nombrados, y un listing público en la carta.",

      "origin-atlas.section.2.badge": "Atlas §2",
      "origin-atlas.section.2.title": "Mapa interactivo de orígenes",
      "origin-atlas.section.2.meta": "Toca cualquier punto — Utcubamba lleva el anillo dorado verificado",
      "origin-atlas.section.2.compass-label": "Perú · orígenes del cinturón cafetalero",
      "origin-atlas.section.2.list-label": "O elige de la lista",
      "origin-atlas.section.2.verified-pill": "Verificado · Filtrado Lonya",
      "origin-atlas.section.2.detail.altitude-label": "Altitud",
      "origin-atlas.section.2.detail.process-label": "Proceso",
      "origin-atlas.section.2.detail.varietal-label": "Varietal",
      "origin-atlas.section.2.detail.drink-label": "Trago Ursa",
      "origin-atlas.section.2.detail.notes-label": "Notas de cata",
      "origin-atlas.section.2.detail.story-label": "Historia",
      "origin-atlas.section.2.detail.process-callout-title": "Proceso {process}",

      "origin-atlas.section.3.badge": "Atlas §3",
      "origin-atlas.section.3.title": "Rueda de sabores",
      "origin-atlas.section.3.meta": "Orígenes trazados sobre categorías de notas de cata",
      "origin-atlas.section.3.intro":
        "Cada columna es una categoría de sabor. Cada chip debajo es un origen cuya taza cae en esa categoría. Toca un chip para cargar ese origen en el panel de detalle de arriba. El origen verificado de Ursa (Utcubamba) se resalta en dorado. La rueda es ilustrativa, no exhaustiva — una cata real produciría una rueda SCA más granular; esta versión acortada alcanza para planificar una rotación.",

      "origin-atlas.section.4.badge": "Atlas §4",
      "origin-atlas.section.4.title": "Estacionalidad de cosecha",
      "origin-atlas.section.4.meta": "La cosecha peruana corre de mayo a septiembre; la ventana de fresco importa",
      "origin-atlas.section.4.intro":
        "La cosecha de café del Perú típicamente corre de mayo a septiembre, con pico de actividad entre junio y agosto. Las ventanas de fresco — cuando el café de una región está en su punto más brillante y aromático — caen en los tres a seis meses después de la cosecha, así que un lote cosechado en mayo está en su mejor momento entre junio y noviembre. Planear features de origen único alrededor de la llegada de fresco es una forma barata de hacer que la carta se sienta viva: el mismo lote de Utcubamba sabe distinto en agosto (dos meses fuera de árbol) que en febrero (ocho meses fuera de árbol), y la carta puede nombrar la diferencia.",
      "origin-atlas.section.4.legend-harvest": "Mes de cosecha",
      "origin-atlas.section.4.legend-verified": "Origen verificado de Ursa",

      "origin-atlas.section.5.badge": "Atlas §5",
      "origin-atlas.section.5.title": "Comparación de altitud",
      "origin-atlas.section.5.meta": "Más altitud = grano más denso = taza más brillante",
      "origin-atlas.section.5.intro":
        "El gráfico traza la altitud de cada origen en metros sobre el nivel del mar. El origen verificado de Ursa (Utcubamba) se muestra en dorado; los cinco candidatos en verde profundo. La ventana 1.400–2.000 m es la altitud de entrada para el café de especialidad peruano — por debajo de 1.200 m, los granos típicamente van a blends comerciales; por encima de 1.900 m, los rendimientos caen y sube el riesgo de daño por helada.",
      "origin-atlas.section.5.axis-label": "Altitud (m sobre el nivel del mar)",
      "origin-atlas.section.5.callout-title": "Por qué importa la altitud",
      "origin-atlas.section.5.callout-body":
        "Por encima de 1.500 m aprox., las noches más frías ralentizan la maduración del cerezo. El cerezo pasa más tiempo en el árbol, lo que produce un grano más denso con una química de azúcares más compleja — y un grano más denso, al tostarse, da una acidez más brillante, una complejidad aromática mayor y una taza que se lee como «especialidad» y no como «commodity». Los seis orígenes de este atlas están a 1.550 m o más — la altitud de entrada para el café de especialidad peruano. La altitud no es la única variable (proceso y varietal importan al menos tanto), pero es la señal más legible que tiene un comprador antes de catar la taza.",

      "origin-atlas.section.6.badge": "Atlas §6",
      "origin-atlas.section.6.title": "Cómo altitud, proceso y varietal dan forma a la taza",
      "origin-atlas.section.6.meta": "Un primer corto y preciso",
      "origin-atlas.section.6.altitude-title": "Altitud",
      "origin-atlas.section.6.altitude-body":
        "Mayor altitud produce granos más densos con química de azúcares más compleja. Por debajo de 1.200 m, las tazas tienden a ser suaves y planas; 1.200–1.500 m trae cuerpo y dulzor; por encima de 1.500 m (territorio de especialidad) llega acidez brillante, aromas florales y fruta limpia. Los seis orígenes trazados aquí están a 1.550 m o más. Para Ursa, esto significa que la altitud es un primer filtro útil al sourcer lotes nuevos: cualquier cosa por debajo de la banda se puede saltar antes de catar.",
      "origin-atlas.section.6.process-title": "Proceso",
      "origin-atlas.section.6.process-body":
        "Lavado quita la fruta antes de la fermentación — brillante, limpio, ácido; deja que el terroir hable más fuerte. Natural seca el cerezo sobre el grano — cuerpo pesado, fruta al frente, más dulzor, más aromas de fermentación. Honey está en el medio — mucílago parcial dejado encima, cuerpo jarabe, dulzor balanceado, más exigente de ejecutar bien. Para Ursa, esto significa que el Filtrado Lonya debe quedarse como lavado (la acidez limpia de Utcubamba es el punto del trago), mientras que un espresso estacional futuro podría justificablemente explorar un lote natural o honey por cuerpo y dulzor.",
      "origin-atlas.section.6.varietal-title": "Varietal",
      "origin-atlas.section.6.varietal-body":
        "Bourbon — viejo, refinado, dulce y complejo (Utcubamba, La Coipa, Rodriguez de Mendoza). Caturra — mutación de Bourbon, brillante y limpio, mayor rendimiento (Chirinos). Typica — la base Arabica original, elegante y balanceado (Quillabamba). Catimor — híbrido de Timor, rústico y productivo pero menos complejo (Satipo). Para Ursa, esto significa que un currículo de catas podría armarse varietal por varietal — noche de Bourbon, noche de Caturra, noche de Typica — cada una con un origen distinto en la barra.",
      "origin-atlas.section.6.pill-acidity": "+ Acidez",
      "origin-atlas.section.6.pill-aromatics": "+ Aromas",
      "origin-atlas.section.6.pill-density": "+ Densidad",
      "origin-atlas.section.6.pill-washed": "Lavado → brillante",
      "origin-atlas.section.6.pill-natural": "Natural → pesado",
      "origin-atlas.section.6.pill-honey": "Honey → jarabe",
      "origin-atlas.section.6.pill-bourbon": "Bourbon → refinado",
      "origin-atlas.section.6.pill-typica": "Typica → elegante",
      "origin-atlas.section.6.pill-catimor": "Catimor → rústico",
      "origin-atlas.section.6.callout-title": "Cómo usa Ursa este atlas",
      "origin-atlas.section.6.callout-body":
        "El atlas es insumo para tres decisiones operativas: la rotación de origen único de la carta (qué origen se sirve ahora), el feature estacional «Gramo del Mes» (qué origen se lleva el reflector), y el currículo de la noche de catas (qué orígenes se catan juntos). El origen verificado de Ursa (Utcubamba) ancla el Filtrado Lonya y es el único que se publica sin más trabajo de sourcing; los otros cinco son candidatos de expansión, cada uno requiere un lote sourced, un productor o cooperativa nombrados, y un listing público en la carta antes de promoverse a verificado.",

      "origin-atlas.section.7.atlas-complete": "Atlas completo",
      "origin-atlas.section.7.menu-link": "Carta y Producto",
      "origin-atlas.section.7.studio-link": "Studio de Ingeniería de Carta",

      "origin-atlas.process-meta.washed":
        "El grano se despulpa de la fruta antes de la fermentación y el secado. Produce tazas brillantes, limpias y ácidas donde el terroir habla más fuerte.",
      "origin-atlas.process-meta.natural":
        "El grano se seca dentro del cerezo entero. Produce cuerpo más pesado, carácter de fruta al frente y aromas más dulces, guiados por fermentación.",
      "origin-atlas.process-meta.honey":
        "El grano se seca con el mucílago pegajoso dejado encima (sin piel). Produce cuerpo jarabe, dulzor balanceado y notas complejas de fruta de hueso.",

      /* ---- Herramienta T8 · Tablero de ROI (cuerpo profundizado + copy de sección) ---- */
      "roi.hero.lede":
        "La pregunta que responde este tablero: ¿cuál de los ocho canales de marketing que Ursa corre o considera realmente se paga, y con qué confianza? Los ocho canales vienen pre-cargados con los defaults de presupuesto verificados del Módulo 04 — Google Business Profile (gratis), Meta paid social, piloto de tres creadores, tarjetas de conserjería de hoteles, noche de cata mensual, optimización de Rappi, lista de WhatsApp, y el piloto de suscripción Ursa Mañana. Edita cualquier celda — gasto, clientes esperados, ingresos por cliente — y mira ROI, meses de payback y el portfolio combinado recalcularse en vivo. Arrastra el slider de confianza para escalar clientes esperados en todos los canales a la vez; el tablero entonces muestra los rangos de ingreso best case, expected y worst case para el portfolio completo.",
      "roi.meta.currency": "Moneda",
      "roi.meta.currency-value": "PEN (S/.)",
      "roi.meta.channels": "Canales",
      "roi.meta.channels-value": "{n} pre-cargados · editables",
      "roi.meta.confidence": "Confianza",
      "roi.meta.confidence-value": "Slider 50% – 100%",

      "roi.section.sensitivity.badge": "Sensibilidad",
      "roi.section.sensitivity.title": "Confianza de conversión — arrastra para escalar clientes esperados",
      "roi.section.sensitivity.meta": "Recalcula todo lo de abajo",
      "roi.section.sensitivity.label": "Confianza de conversión",
      "roi.section.sensitivity.worst": "Peor · 50%",
      "roi.section.sensitivity.expected": "Esperado · {n}%",
      "roi.section.sensitivity.best": "Mejor · 100%",
      "roi.section.sensitivity.body":
        "El slider multiplica los clientes esperados en todos los canales. Al {confidence}% de confianza, un canal proyectado para traer 100 clientes se modela como {scaled}. El rango 50–100% es el reconocimiento honesto del tablero de que proyección no es medición — el worst case (50%) asume que convierte la mitad de los clientes esperados; el best case (100%) asume que la proyección es exacta. El ingreso esperado total se recalcula abajo — y el rango best/worst aparece en la sección Confianza.",
      "roi.section.sensitivity.range-best": "Mejor caso",
      "roi.section.sensitivity.range-expected": "Esperado @ {n}%",
      "roi.section.sensitivity.range-worst": "Peor caso",
      "roi.section.sensitivity.reset": "Volver a defaults",

      "roi.section.channels.badge": "Canales",
      "roi.section.channels.title": "Tabla de ROI por canal — edita cualquier celda, mira todo recalcularse",
      "roi.section.channels.meta": "8 pre-cargados · todos editables",
      "roi.section.channels.col-channel": "Canal",
      "roi.section.channels.col-spend": "Gasto / mes",
      "roi.section.channels.col-customers": "Clientes nuevos",
      "roi.section.channels.col-revenue-per": "Ingreso / cliente",
      "roi.section.channels.col-revenue": "Ingreso",
      "roi.section.channels.col-payback": "Payback (meses)",
      "roi.section.channels.col-roi": "ROI %",
      "roi.section.channels.scaled-suffix": "→ {n} @ {confidence}%",
      "roi.section.channels.legend-green": "Verde · ROI ≥ 200%",
      "roi.section.channels.legend-gold": "Dorado · ROI 100–200%",
      "roi.section.channels.legend-terracotta": "Terracota · ROI < 100%",
      "roi.section.channels.legend-free": "∞ · canal gratis con ingreso",
      "roi.section.channels.callout-title": "Estas son proyecciones, no recibos",
      "roi.section.channels.callout-body":
        "Los clientes esperados y el ingreso por cliente son supuestos, no resultados medidos — el tablero se entrega con defaults informados por investigación, no con actuals. La disciplina que impone este tablero es: corre el experimento vinculado a cada canal, registra los números reales, reemplaza el supuesto con el valor medido, y deja que el tablero re-converja. El slider de confianza es el reconocimiento explícito de que las proyecciones son inciertas; el enlace experimental en la fila de cada canal en el Seguimiento de Experimentos es el mecanismo por el cual esa incertidumbre se resuelve.",

      "roi.section.portfolio.badge": "Portfolio",
      "roi.section.portfolio.title": "Portfolio combinado — todos los canales juntos",
      "roi.section.portfolio.meta": "A {n}% de confianza",
      "roi.section.portfolio.stat-spend": "Gasto mensual total",
      "roi.section.portfolio.stat-revenue": "Ingreso esperado total @ {n}%",
      "roi.section.portfolio.stat-roi": "ROI combinado",
      "roi.section.portfolio.stat-payback": "Payback combinado",
      "roi.section.portfolio.card-customers-title": "Clientes modelados",
      "roi.section.portfolio.card-customers-body":
        "Clientes nuevos por mes al {confidence}% de confianza. Costo de adquisición combinado: {cpa}. Este número es la suma de clientes escalados en los ocho canales; no es lo mismo que tráfico a pie, porque la misma persona puede ser adquirida por más de un canal (un huésped de hotel que después se hace suscriptor de WhatsApp cuenta dos veces). Úsalo para dimensionar capacidad de adquisición, no para proyectar aforo.",
      "roi.section.portfolio.card-profit-title": "Ganancia / mes",
      "roi.section.portfolio.card-profit-body":
        "Ingreso menos gasto a la confianza actual. Un número positivo aquí no es igual a utilidad operativa — es aporte bruto del gasto de adquisición. El número todavía tiene que absorber canibalización (un suscriptor pudo haber sido un walk-in de todos modos) y costo fijo (renta, planilla, café verde). Para el break-even de costo marginal completo del piloto de suscripción específicamente, abre el Módulo 08.",
      "roi.section.portfolio.card-payback-title": "Horizonte de payback",
      "roi.section.portfolio.card-payback-body":
        "Cuánto tarda el ingreso acumulado en cubrir el gasto acumulado, en meses. Más bajo es mejor; por debajo de 1.0 mes significa que el canal se paga dentro del mismo período (el gasto se recupera antes del siguiente ciclo de facturación). El payback combinado es el promedio del portfolio — canales individuales se pagarán más rápido o más lento que este número dependiendo de su propia razón de gasto a ingreso.",
      "roi.section.portfolio.unit-months": "meses",

      "roi.section.compare.badge": "Comparar",
      "roi.section.compare.title": "ROI % por canal — gráfico de barras",
      "roi.section.compare.meta": "A {n}% de confianza",
      "roi.section.compare.intro":
        "Las barras verdes superan 200% de ROI (cada sol gastado devuelve al menos tres); las doradas están entre 100–200% (cada sol gastado devuelve dos-a-tres); las terracota están por debajo de 100% (el canal pierde plata o apenas cubre). Los canales gratis — Google Business Profile y WhatsApp — se topan visualmente en 200% para que no compriman el resto del gráfico; su ROI real es matemáticamente infinito. Usa el gráfico para ver la forma del portfolio, no para leer valores precisos de ROI — esos se leen en la tabla de arriba.",

      "roi.section.confidence.badge": "Confianza",
      "roi.section.confidence.title": "Mejor, esperado y peor caso para el ingreso total",
      "roi.section.confidence.meta": "Escala con el slider de confianza",
      "roi.section.confidence.chart-title": "Rango de ingreso a lo largo de bandas de confianza",
      "roi.section.confidence.bar-best": "Mejor caso · 100% confianza",
      "roi.section.confidence.bar-expected": "Esperado · {n}% confianza",
      "roi.section.confidence.bar-worst": "Peor caso · 50% confianza",
      "roi.section.confidence.body":
        "El espacio entre best case (100% confianza) y worst case (50%) es la incertidumbre honesta del modelo sobre la proyección. La regla de decisión: si el worst case todavía cubre el gasto mensual total, el portfolio es robusto y puedes publicar según lo planeado; si solo el best case lo cubre, reduce el gasto del canal más riesgoso hasta que el expected case cubra el gasto por su cuenta. El slider de arriba escala clientes esperados; esta sección muestra la consecuencia en ingreso en tres puntos fijos de confianza.",
      "roi.section.confidence.best-title": "Canal de mejor desempeño",
      "roi.section.confidence.best-intro":
        "El canal con el ROI más alto a la confianza actual. Los canales gratis (Google Business Profile, WhatsApp) suben al tope cuando su gasto es cero — su ROI infinito es real, no un glitch, pero no se puede escalar gastando más.",
      "roi.section.confidence.worst-title": "Canal más débil",
      "roi.section.confidence.worst-intro":
        "El canal con el ROI finito más bajo a la confianza actual. Si el ROI está por debajo de 100%, el canal gasta más de lo que devuelve en el mismo mes — corta gasto, re-brief el creativo, o retira el canal y realoca el presupuesto a la línea de mejor desempeño.",
      "roi.section.confidence.worst-all-free": "Todos los canales son gratis o tienen ROI infinito. Nada que señalar.",
      "roi.section.confidence.worst-losing": "Perdiendo {amount}/mes al {confidence}% de confianza.",
      "roi.section.confidence.worst-below": "ROI de {roi}% está por debajo del umbral de 100%.",
      "roi.section.confidence.pill-revenue": "{amount} ingreso",
      "roi.section.confidence.pill-spend": "{amount} gasto",

      "roi.section.pair.badge": "Parear con",
      "roi.section.pair.title": "Define el presupuesto primero, después valídalo aquí",
      "roi.section.pair.intro":
        "Define el presupuesto antes de validarlo. El Asignador de Presupuesto fija el compromiso mensual; este tablero modela el retorno de cada partida. La Calculadora de Suscripción maneja el único canal — Ursa Mañana — que necesita matemática de break-even marginal, canibalización y capacidad de taza gratis que este tablero deliberadamente simplifica.",
      "roi.section.pair.budget-title": "Asignador de Presupuesto",
      "roi.section.pair.budget-body":
        "El Asignador de Presupuesto te dice cuánto gastas por partida. Úsalo para fijar el compromiso mensual total antes de modelar el retorno aquí.",
      "roi.section.pair.budget-cta": "Abrir Asignador de Presupuesto",
      "roi.section.pair.calc-title": "Calculadora de Suscripción",
      "roi.section.pair.calc-body":
        "El canal del piloto de Suscripción arriba está modelado de forma simple. Para la matemática completa de break-even marginal, canibalización y capacidad de taza gratis, abre el Módulo 08.",
      "roi.section.pair.calc-cta": "Abrir Calculadora de Suscripción",

      /* ---- Calculadora (Módulo 08) · Ursa Mañana Economía de Suscripción ---- */
      "calculator.lede":
        "Esta calculadora responde a una decisión: ¿Ursa Mañana — la suscripción de café ilimitado a S/. 20/mes, lun–vie 7–10am, solo en local, una taza por visita, sin bebidas con leche — paga al costo marginal de la tostadora propia de Ursa? Edita cualquier input y la utilidad, la tasa de attach de equilibrio, la capacidad de tazas gratis y el tiempo de recuperación se actualizan en vivo. El riesgo honesto es la canibalización de los clientes regulares, no el costo por taza; el modelo lo expone explícitamente en lugar de esconderlo dentro de un promedio.",
      "calculator.meta.pilot": "Piloto",
      "calculator.meta.pilot-value": "Tope de 50 miembros",
      "calculator.meta.default": "Por defecto",
      "calculator.meta.default-value": "S/. 20/mes · 7–10am",
      "calculator.meta.cost": "Costo verificado",
      "calculator.meta.cost-value":
        "S/. 1.20–1.80/taza (tostadora propia)",
      "calculator.presets.label": "Escenarios rápidos:",
      "calculator.preset.conservative": "Conservador",
      "calculator.preset.default": "Por defecto (recomendado)",
      "calculator.preset.optimistic": "Optimista",
      "calculator.action.reset": "Reiniciar",
      "calculator.inputs.title": "Edita los inputs",
      "calculator.inputs.subtitle":
        "Arrastra los sliders o escribe valores. Todo recalcula al instante.",
      "calculator.field.subPrice.label":
        "Precio de suscripción (mensual)",
      "calculator.field.subPrice.hint":
        "Lo que paga un suscriptor al mes. El precio piloto es S/. 20 — suficientemente alto para señalar compromiso, suficientemente bajo para verse obvio al lado de un cappuccino de S/. 12.",
      "calculator.field.costPerCup.label": "Costo marginal por taza",
      "calculator.field.costPerCup.hint":
        "Grano + agua + energía + vaso. Benchmark de tostadora propia S/. 1.20–1.80; las cafeterías de especialidad que compran tostado al por mayor típicamente se sientan en S/. 2.50–3.50 — esa brecha es toda la razón por la que la suscripción funciona en Ursa y no funcionaría en la mayoría de competidores.",
      "calculator.field.visitsWeek.label": "Visitas por semana",
      "calculator.field.visitsWeek.hint":
        "Cada cuánto viene un suscriptor durante la ventana de 7–10am. Dos visitas y media por semana es la lectura conservadora del persona de cliente matutino del Módulo 04.",
      "calculator.field.cupsVisit.label": "Tazas por visita",
      "calculator.field.cupsVisit.hint":
        "Limitado a una en el piloto. Una segunda taza en la misma visita duplica el costo marginal sin cambiar el precio que paga el suscriptor — la forma más común en que una oferta de café ilimitado sangra sin hacer ruido.",
      "calculator.field.attachRate.label": "Tasa de attach de acompañamiento",
      "calculator.field.attachRate.hint":
        "Porcentaje de visitas en las que el suscriptor también compra una cookie, un financier o una empanada. Esta es la palanca que hace funcionar al modelo; la tarjeta de corte abajo muestra el mínimo que tiene que alcanzar.",
      "calculator.field.sideMargin.label":
        "Margen del acompañamiento (por attach)",
      "calculator.field.sideMargin.hint":
        "Margen de ganancia del acompañamiento, no ingreso. Una cookie de S/. 5 con costo S/. 1.5 aporta S/. 3.5 — ese es el número que importa aquí.",
      "calculator.field.cannibal.label": "Tasa de canibalización",
      "calculator.field.cannibal.hint":
        "Porcentaje de suscriptores que igual habrían pagado precio full. El riesgo más grande del modelo. La tarjeta blendada de abajo muestra cómo queda la utilidad después de este arrastre.",
      "calculator.field.avgSpendPre.label":
        "Gasto promedio pre-suscripción",
      "calculator.field.avgSpendPre.hint":
        "Lo que gastaba un cliente canibalizado por visita, antes de suscribirse. Se usa solo dentro del ajuste de canibalización — no afecta la matemática del costo marginal.",
      "calculator.callout.side.title":
        "La tasa de attach es la palanca, no un accidente feliz",
      "calculator.callout.side.body":
        "Las suscripciones de café ilimitado son rentables en la línea del costo marginal porque Ursa tuesta sus propios granos — pero apenas. El colchón que convierte un margen delgado en uno real viene del acompañamiento vendido en cada visita. La cafetería debe impulsar activamente los pairings — cookie, financier de pera, empanada, pastelería de temporada — con tarjetas de pairing en la caja, un prompt del barista tipo «el oso recomienda» y una vitrina matutina visible. La alternativa — subir la suscripción a S/. 25 — funciona en papel pero encoge la base direccionable; el mismo cliente que duda en S/. 25 firma en S/. 20 si la vitrina hace su trabajo. La limitación: el costo de comida también erosiona con volumen; revisa el margen del acompañamiento contra las facturas del proveedor antes de escalar más allá de 50 suscriptores.",
      "calculator.outputs.profit.label":
        "Utilidad neta por suscriptor / mes",
      "calculator.outputs.profit.body-positive":
        "Rentable en estos supuestos, antes del ajuste por canibalización. La tarjeta de canibalización de abajo es la que decide si el piloto se gradúa.",
      "calculator.outputs.profit.body-negative":
        "No rentable en estos supuestos. Tres palancas, en orden de impacto: subir la tasa de attach (empujar acompañamientos más fuerte), subir el precio, o bajar el costo marginal revisando el rendimiento del tostado. No bajes el precio.",
      "calculator.metric.visits": "Visitas / mes",
      "calculator.metric.cups": "Tazas / mes",
      "calculator.metric.coffee-cost": "Costo café / mes",
      "calculator.metric.side-margin": "Margen acompañ. / mes",
      "calculator.metric.breakeven": "Equilibrio (sin acompañ.)",
      "calculator.metric.free-capacity": "Capacidad de tazas gratis",
      "calculator.cutoff.title":
        "Tasa mínima de attach para equilibrio",
      "calculator.cutoff.body-above":
        "Estás {delta} puntos por encima del attach de equilibrio. El margen es sano — úsalo para absorber una semana floja en lugar de aflojar el prompt de pairing.",
      "calculator.cutoff.body-below":
        "Estás {delta} puntos por debajo del equilibrio. La matemática dice: o empujas el attach arriba reentrenando al barista para sugerir un pairing específico por bebida, o subes el precio en S/. 2. Bajar costos solo no cierra esta brecha.",
      "calculator.cutoff.body-na":
        "No se puede calcular — pon un margen de acompañamiento y una frecuencia de visita primero.",
      "calculator.cannibal.title":
        "Utilidad ajustada por canibalización",
      "calculator.cannibal.subtitle":
        "por suscriptor / mes, blendado",
      "calculator.cannibal.body-positive":
        "Incluso después de reemplazar {cannibal}% de visitas a precio full con visitas de suscripción a menor margen, la utilidad blendada se mantiene positiva. El piloto puede graduarse si esto se sostiene por 60 días.",
      "calculator.cannibal.body-negative":
        "Con {cannibal}% de canibalización la utilidad blendada es negativa. Dos palancas, en orden de preferencia: apuntar a clientes nuevos (el cliente matutino que todavía no adopta Ursa), o subir el precio en S/. 2–3. Reducir la canibalización evitando a los regulares es el movimiento equivocado — son los candidatos más probables a advocacy, y la suscripción está para profundizar la relación con ellos, no para descontarla.",
      "calculator.cannibal.recovery-label": "Tiempo de recuperación",
      "calculator.cannibal.recovery-already": "Ya es positivo",
      "calculator.cannibal.recovery-never": "Nunca — mata el piloto",
      "calculator.tabs.badge": "Análisis más profundo",
      "calculator.tabs.title":
        "Sensibilidad, escala y los supuestos honestos",
      "calculator.tab.sensitivity": "Tabla de sensibilidad",
      "calculator.tab.scale": "Proyección de escala",
      "calculator.tab.assumptions": "Supuestos honestos",
      "calculator.tab.sides": "Playbook de acompañamientos",
      "calculator.sensitivity.intro":
        "Utilidad neta por suscriptor/mes según frecuencia de visita (filas) y tasa de attach de acompañamiento (columnas). La celda destacada es tu escenario actual. Lee hacia abajo por una columna para ver cómo escala la utilidad con la frecuencia; lee a lo largo de una fila para ver cómo escala con el attach. Si la franja verde es ancha — la mayoría de la tabla es rentable — el piloto es robusto a errores de estimación. Si la franja verde es angosta, el piloto es frágil: fallar por 10 puntos en attach o por media visita en frecuencia lo pone en rojo.",
      "calculator.sensitivity.col-visits":
        "Visitas/sem ↓ / Attach →",
      "calculator.scale.intro":
        "Utilidad mensual blendada (ajustada por canibalización) a medida que crece la base de suscriptores. El piloto está limitado a 50 — no porque 50 sea el techo de demanda, sino porque por debajo de 50 la tasa de canibalización se puede medir honestamente, y por encima el número está demasiado suavizado para leerlo. Escalar antes de 50 es un voto de confianza en un número que todavía no has medido.",
      "calculator.scale.label-pilot": "piloto",
      "calculator.scale.label-subs": "subs",
      "calculator.scale.label-cups": "tazas/mes",
      "calculator.assumptions.verified.title": "Lo que verificamos",
      "calculator.assumptions.verified.1":
        "La tostadora propia mantiene el costo marginal en S/. 1.20–1.80/taza — el benchmark de especialidad para cafeterías que compran tostado al por mayor es S/. 2.50–3.50, y esa brecha es toda la razón por la que la suscripción funciona en Ursa y no funcionaría en la mayoría de competidores.",
      "calculator.assumptions.verified.2":
        "La ventana de 7–10am es el slot del cliente matutino en Miraflores — el mismo persona que el Módulo 04 identificó como la audiencia más defendible de Ursa. La ventana es angosta a propósito: acota la oferta al caso de uso que el oso puede adueñarse.",
      "calculator.assumptions.verified.3":
        "Los acompañamientos (cookies, financier de pera, empanada) ya existen en la casa — no hace falta SKU nuevo, proveedor nuevo, ni capacitación nueva. El piloto es un cambio de precio y empaquetado, no un cambio de carta.",
      "calculator.assumptions.verified.4":
        "Los modelos de suscripción son consistentes con la disposición a pagar en cafeterías de Lima — CoffeePass corrió un modelo comparable en Lima durante 2022–24 y demostró demanda en un precio similar. La demanda está verificada; la demanda específica de Ursa es lo que el piloto mide.",
      "calculator.assumptions.assumed.title":
        "Lo que supusimos (y deberías poner a prueba)",
      "calculator.assumptions.assumed.1":
        "Que una tasa de attach de 50–70% es alcanzable con prompt activo. Estudios de la industria de suscripciones de café ilimitado en mercados comparables reportan 30–55% sin prompt y 55–75% con prompt — pero el número específico de Ursa no está verificado. Pruébalo en el piloto.",
      "calculator.assumptions.assumed.2":
        "Que una canibalización de 20–40% es típica para productos de suscripción que apuntan a regulares existentes. Si el marketing se carga accidentalmente hacia los regulares (la lista tibia), esto podría trepar a 50%+. Rastrea la fuente de cada alta.",
      "calculator.assumptions.assumed.3":
        "Que el tope de una-taza-por-visita se puede hacer cumplir sin alienar a los suscriptores — verifica con los primeros 20 sign-ups. Si cumplir el tope requiere una confrontación, el tope está mal, no el suscriptor.",
      "calculator.assumptions.assumed.4":
        "Que el costo marginal se mantiene en S/. 1.20–1.80 al subir el volumen, bajo el supuesto de que la tostadora tiene capacidad libre. Confirma contra los logs de tostado en el mes dos — si la tostadora está comprando más verde para alcanzar la demanda de la suscripción, el costo marginal sube y el modelo debe recalularse.",
      "calculator.assumptions.stop.title": "Regla de parada",
      "calculator.assumptions.stop.body":
        "Mata o revisa el piloto si la utilidad blendada por suscriptor se mantiene bajo cero después de 60 días, o si la canibalización supera 50%, o si el attach se queda bajo 40% a pesar del prompt activo después de 30 días. Documenta el resultado sea cual sea — un piloto muerto con razón documentada vale más que uno que se apaga en silencio. El tope de 50 suscriptores existe para que matar el piloto cueste menos de S/. 1,000 en utilidad perdida y cuatro semanas de atención.",
      "calculator.assumptions.not-assumed.title":
        "Lo que deliberadamente no supusimos",
      "calculator.assumptions.not-assumed.1":
        "No inventamos costos exactos de ingredientes — usa los rangos del escenario, no una estimación puntual, hasta que los logs de tostado den el número real.",
      "calculator.assumptions.not-assumed.2":
        "No garantizamos un número de suscriptores — el piloto se topa en 50 para aprender barato. Fingir que la demanda se conoce es la razón más común por la que los lanzamientos de suscripción mal asignan el presupuesto de marketing.",
      "calculator.assumptions.not-assumed.3":
        "No supusimos viralidad — la suscripción se promueve primero por canales existentes (WhatsApp, en local, bio de Instagram). Un Reel viral que traiga 200 sign-ups en la semana uno te obligaría a una decisión de escala temprana que el piloto está diseñado para diferir.",
      "calculator.sides.title":
        "Cómo empujar acompañamientos sin ser pesado",
      "calculator.sides.counter-title": "En la caja",
      "calculator.sides.counter.1":
        "Tarjeta de pairing «el oso recomienda» en la caja — p.ej. Ursagroni + financier de pera. Específico, no genérico; un pairing por bebida, no una lista.",
      "calculator.sides.counter.2":
        "Vitrina matutina visible a la altura de los ojos, iluminada cálida. La vitrina es una superficie de marketing, no un almacenamiento.",
      "calculator.sides.counter.3":
        "Barista entrenado para ofrecer un pairing específico, no «¿algo más?». La especificidad es lo que hace que el prompt aterrice; la vaguedad es lo que lo hace sentir como un upsell.",
      "calculator.sides.counter.4":
        "Un precio de add-on de S/. 2 para suscriptores, anclado contra el precio retail de S/. 8. El suscriptor siente el descuento; la cafetería anota el margen.",
      "calculator.sides.online-title":
        "En la app / Rappi / WhatsApp",
      "calculator.sides.online.1":
        "Un «bundle matutino» pre-seleccionado que por defecto trae café + acompañamiento. Los defaults son cómo las suscripciones ganan su margen; opt-out le gana a opt-in.",
      "calculator.sides.online.2":
        "Un «pick del oso» rotativo semanal que crea novedad. La novedad es el mecanismo de retención — el suscriptor viene por el ritual, vuelve por la sorpresa.",
      "calculator.sides.online.3":
        "Una tarjeta de sellos: 10 acompañamientos comprados = 1 gratis. Retención sin descontar el café — el descuento aterriza en el acompañamiento, donde la elasticidad del margen es mayor.",
      "calculator.sides.principle.title": "El principio",
      "calculator.sides.principle.body":
        "No descuentes el café — descontar erosiona la percepción de especialidad que justifica el precio de S/. 20. Descuenta o haz bundle de los acompañamientos, que tienen mayor elasticidad de margen y refuerzan la historia del ritual matutino. La suscripción hace que el café se sienta gratis; los acompañamientos son donde viven de verdad la relación y el margen. El oso está en la taza, la utilidad está en el plato.",
      "calculator.stat.profit":
        "Utilidad neta / suscriptor / mes (inputs actuales)",
      "calculator.stat.cutoff": "Tasa de attach de equilibrio",
      "calculator.stat.capacity":
        "Tazas gratis que el margen puede absorber",
      "calculator.stat.recovery":
        "Tiempo de recuperación por canibalización",
      "calculator.stat.recovery-kill": "mata",
      "calculator.footer.body":
        "Esta calculadora es una herramienta de apoyo a la decisión, no una garantía financiera. El costo marginal por taza depende del rendimiento del tostado, el uso de leche y el desperdicio; verifica contra los logs reales de Ursa antes de escalar. La viralidad y el crecimiento de suscriptores no se supusieron — el piloto está diseñado para medirlos. El modelo es honesto sobre lo que no sabe; la recomendación es actuar del lado del modelo que sobrevive a la celda del peor caso en la tabla de sensibilidad.",

      /* Calculadora · lente de oferta (Hormozi) */
      "calculator.lens.badge": "Lente de oferta",
      "calculator.lens.title": "Lo que esta calculadora está probando de verdad",
      "calculator.lens.body":
        "En la lente de oferta, esta calculadora está revisando dos de las ocho preguntas antes de que el piloto salga: Likelihood (¿los socios visitarán lo suficiente para llegar al break-even del precio de S/. 20?) y Delay (¿el valor percibido aterriza dentro del primer mes, antes de que entre el churn?). La pregunta de reversión de riesgo — ¿qué pasa si un socio cancela a mitad de mes? — se responde operacionalmente, no numéricamente: el oso devuelve prorrata, sin preguntas, y el cupo del piloto de 50 hace que el downside del peor caso esté acotado y visible. La pregunta de Effort la responde la landing: un mensaje de WhatsApp para entrar, un sello de pata por visita, sin app.",

      /* ---- Estudio de Carta (Herramienta T1) ---- */
      "menu-studio.lede":
        "Un constructor de carta interactivo para la pregunta que todo dueño de cafetería evita: ¿qué ítems se están ganando su espacio en la carta y cuáles están filtrando margen sin hacer ruido? Edita nombres, descripciones, precios, costos, carga de preparación, popularidad (1-5) y tasas de attach en cada ítem; mira cómo la tarjeta de carta, el tablero por categoría, los cálculos transparentes, las hipótesis de psicología y la clasificación Stars & Puzzles se actualizan en vivo. Las técnicas que presentamos aquí son hipótesis comprobables — no leyes universales. Cada número es editable; nada aquí está inventado, solo estructurado. El punto no es un modelo perfecto de la carta; el punto es una lectura rápida de qué palanca jalar ahora.",
      "menu-studio.meta.default": "Carta por defecto",
      "menu-studio.meta.default-value": "12 ítems de Ursa pre-cargados",
      "menu-studio.meta.thresholds": "Umbrales de margen",
      "menu-studio.meta.thresholds-value":
        "> 65% saludable · 55–65% vigilar · < 55% fuga",
      "menu-studio.meta.outputs": "Salidas",
      "menu-studio.meta.outputs-value":
        "Plantilla · preview · cálculos · psicología · matriz · export",

      /* Sección 01 — Métricas en vivo */
      "menu-studio.section.01.badge": "Sección 01",
      "menu-studio.section.01.title": "Métricas en vivo de la carta",
      "menu-studio.section.01.meta": "Se actualiza al editar",
      "menu-studio.stat.count": "Ítems en la carta",
      "menu-studio.stat.range": "Rango de precios (PEN)",
      "menu-studio.stat.avg-price": "Precio promedio",
      "menu-studio.stat.avg-margin": "Margen promedio %",
      "menu-studio.avg-margin.title": "Progreso del margen promedio",
      "menu-studio.avg-margin.body":
        "Regla práctica de la industria de café de especialidad: el margen blendado de la carta debe situarse por encima de 65% — el nivel en el que una cafetería puede absorber un shock de costo del 10% sin re-pricing. Por debajo de 55% la carta filtra margen incluso cuando el ticket promedio se ve sano; un solo aumento de precio del proveedor se vuelve crisis. Los umbrales son convención, no ley; el break-even real de Ursa se sienta donde se sientan los costos fijos reales de Ursa.",
      "menu-studio.avg-margin.threshold-leak": "Umbral 55%",
      "menu-studio.avg-margin.threshold-healthy": "Saludable 65%",
      "menu-studio.popularity.title": "Popularidad y attach promedio",
      "menu-studio.popularity.subtitle":
        "de 5 — tu lectura honesta de demanda",
      "menu-studio.popularity.attach-avg": "Attach prom.",
      "menu-studio.popularity.body":
        "La popularidad es tu lectura honesta de si el ítem se mueve — no un pronóstico, no un deseo. El score 1-5 alimenta la matriz Stars & Puzzles (un score de 3 o más cuenta como «popular»). La tasa de attach es el % de clientes que agregan el ítem como acompañamiento; mientras más alto el promedio, más potencial de cross-sell vive en la carta actual. Ambos números son editables por ítem en la plantilla de abajo.",
      "menu-studio.prep.title":
        "Tiempo total de prep y mix por categoría",
      "menu-studio.prep.subtitle":
        "suma de minutos de barista por ronda completa",
      "menu-studio.prep.body":
        "El tiempo total de prep es la suma de minutos de barista si cada ítem se pidiera una vez — un proxy aproximado del techo de mano de obra. Si una hora pico real produce 30 tickets, multiplica el tiempo promedio de prep por 30 y divide entre el número de baristas en turno: ese es el minuto-cuenta que realmente tienes para entregar.",

      /* Sección 02 — Plantilla editable + preview en vivo */
      "menu-studio.section.02.badge": "Sección 02",
      "menu-studio.section.02.title":
        "Plantilla editable — la tarjeta de tu cafetería",
      "menu-studio.section.02.meta":
        "Edición inline · preview en vivo a la derecha",
      "menu-studio.section.02.intro":
        "Edita nombre, categoría, descripción para el cliente, precio (PEN), costo (PEN), carga de prep (min), popularidad (1-5), tasa de attach, insignia de recomendado y pairings por cada ítem. La tarjeta de la derecha es el preview en vivo — exactamente lo que un cliente vería en una carta impresa. Edita a la izquierda, míralo reflejado a la derecha, en tiempo real. La plantilla es el factor wow: cada campo editable, cada número transparente, cada cambio honesto.",
      "menu-studio.section.02.button.add": "Agregar ítem",
      "menu-studio.section.02.empty":
        "Aún no hay ítems. Haz click en Agregar ítem para empezar.",
      "menu-studio.section.02.footer":
        "Los ítems por defecto están anclados a la carta verificada de Ursa (Ursagroni, Maracumango Coldbrew, Filtrado Lonya) más una barra de espresso y vitrina de repostería reconstruidas. Los costos son benchmarks plausibles para una cafetería de especialidad de Lima — reemplázalos con tus logs de tostado y facturas de proveedor reales antes de citar precios o tomar una decisión de kill.",
      "menu-studio.template.new-item-name": "Ítem nuevo",
      "menu-studio.template.field.name": "Nombre del ítem",
      "menu-studio.template.field.description": "Descripción para el cliente",
      "menu-studio.template.field.description-placeholder":
        "Agrega una descripción que venda el ítem — sensorial, breve, verdadera.",
      "menu-studio.template.field.price": "Precio (PEN)",
      "menu-studio.template.field.cost": "Costo (PEN)",
      "menu-studio.template.field.prep": "Prep (min)",
      "menu-studio.template.field.popularity": "Popularidad (1-5)",
      "menu-studio.template.field.attach-rate": "Attach %",
      "menu-studio.template.field.recommended": "Recomendado",
      "menu-studio.template.field.pairings": "Parea con",
      "menu-studio.template.field.remove": "Eliminar {name}",
      "menu-studio.template.margin-label": "Margen",
      "menu-studio.template.pairings-collapse": "Ocultar pairings",
      "menu-studio.template.pairings-expand": "Editar pairings",
      "menu-studio.template.pairings-empty":
        "Sin pairings aún — haz click en Editar pairings.",
      "menu-studio.template.pairings-remove": "Quitar pairing con {name}",
      "menu-studio.template.pairings-no-others":
        "Agrega otro ítem para habilitar pairings.",
      "menu-studio.preview.title": "Preview en vivo",
      "menu-studio.preview.meta": "Se actualiza al escribir",
      "menu-studio.preview.intro":
        "Lo que ve el cliente. Los ítems recomendados llevan una estrella; los pairings se imprimen como «Parea con». Las líneas punteadas y los divisores Art Nouveau son parte de la identidad visual de Ursa — no los quites al llevar esta tarjeta a impresión.",
      "menu-studio.preview.header-brand": "URSA COFFEE ROASTERS",
      "menu-studio.preview.header-tagline":
        "Un gramo a la vez · Miraflores, Lima",
      "menu-studio.preview.header-menu-title": "Carta",
      "menu-studio.preview.recommended-badge": "Recomendado",
      "menu-studio.preview.pairings-label": "Parea con",
      "menu-studio.preview.footer-note":
        "Precios en PEN · IGV incluido",
      "menu-studio.preview.empty":
        "Agrega ítems a la izquierda para ver el preview de la carta.",

      /* Sección 03 — Cálculos transparentes */
      "menu-studio.section.03.badge": "Sección 03",
      "menu-studio.section.03.title":
        "Cálculos transparentes — cada columna a la vista",
      "menu-studio.section.03.meta":
        "Ordenable · sin fórmula oculta",
      "menu-studio.section.03.intro":
        "Por cada ítem: precio, costo, margen de contribución en PEN y %, popularidad (1-5), carga de prep en minutos, tasa de attach, la clasificación Kasavana & Smith 1982 (Star / Plowhorse / Puzzle / Dog) y los pairings que configuraste en la plantilla. Nada aquí se calcula fuera de la carta ni detrás de un paywall — cada celda deriva en vivo de los campos editables de arriba. Ordena por cualquier columna para encontrar la palanca que buscas: mayor margen, menor popularidad, mayor prep, attach más débil.",
      "menu-studio.section.03.empty":
        "Agrega ítems arriba para ver los cálculos.",
      "menu-studio.section.03.legend-healthy":
        "Saludable · > 65% margen",
      "menu-studio.section.03.legend-watch":
        "Vigilar · 55–65% margen",
      "menu-studio.section.03.legend-leak":
        "Fuga · < 55% margen",
      "menu-studio.section.03.footer":
        "Margen % = (precio − costo) ÷ precio. La clasificación usa un umbral de margen de 55% y un umbral de popularidad de 3/5 — ambos editables arriba en la plantilla. El booleano «popular» del constructor viejo se reemplazó por un score 1-5 para mayor resolución: un Plowhorse de 2/5 y uno de 5/5 no son el mismo animal.",
      "menu-studio.calc.column.item": "Ítem",
      "menu-studio.calc.column.price": "Precio",
      "menu-studio.calc.column.cost": "Costo",
      "menu-studio.calc.column.margin-pen": "Margen (PEN)",
      "menu-studio.calc.column.margin-pct": "Margen %",
      "menu-studio.calc.column.popularity": "Popularidad",
      "menu-studio.calc.column.prep": "Prep (min)",
      "menu-studio.calc.column.attach": "Attach %",
      "menu-studio.calc.column.classification": "Clase",
      "menu-studio.calc.column.pairings": "Pairings",
      "menu-studio.calc.pairings-none": "—",

      /* Sección 04 — Tablero por categoría */
      "menu-studio.section.04.badge": "Sección 04",
      "menu-studio.section.04.title":
        "Tablero de rendimiento por categoría",
      "menu-studio.section.04.meta":
        "Agregados por categoría",
      "menu-studio.section.04.intro":
        "Margen promedio, popularidad promedio, carga de prep promedio y tasa de attach promedio por categoría. El tablero responde a la pregunta que la vista por ítem esconde: qué categoría está cargando la carta y cuál la está arrastrando. Una categoría con margen alto pero attach bajo es una oportunidad de cross-sell; una categoría con popularidad alta pero margen bajo es un objetivo de re-ingeniería de costo.",
      "menu-studio.section.04.empty":
        "Aún no hay categorías con ítems.",
      "menu-studio.section.04.footer":
        "Las categorías con menos de 2 ítems tienen promedios inestables — trátalos como direccionales, no estadísticos. El tablero es más útil cuando la carta tiene 10+ ítems en 4+ categorías; por debajo de eso, la vista por ítem de la Sección 03 es más honesta.",
      "menu-studio.category.column.category": "Categoría",
      "menu-studio.category.column.items": "Ítems",
      "menu-studio.category.column.avg-margin": "Margen prom. %",
      "menu-studio.category.column.avg-popularity": "Popularidad prom.",
      "menu-studio.category.column.avg-prep": "Prep prom. (min)",
      "menu-studio.category.column.avg-attach": "Attach prom. %",

      /* Etiquetas de categoría (display) */
      "menu-studio.category.espresso": "Espresso",
      "menu-studio.category.coldbrew": "Coldbrew",
      "menu-studio.category.filtrado": "Filtrado",
      "menu-studio.category.cocktail": "Coctel de café",
      "menu-studio.category.pastry": "Repostería",
      "menu-studio.category.savory": "Salado",
      "menu-studio.category.non-coffee": "Sin café",

      /* Sección 05 — Técnicas de psicología */
      "menu-studio.section.05.badge": "Sección 05",
      "menu-studio.section.05.title":
        "Diseño con psicología — como hipótesis comprobables",
      "menu-studio.section.05.meta":
        "Evidencia · mecanismo · ética · medición · regla de parada",
      "menu-studio.section.05.intro":
        "Ocho técnicas extraídas de la literatura de economía conductual e ingeniería de carta. Cada una se presenta como una hipótesis con un rating de fuerza de evidencia (fuerte / moderada / débil / mixta), el mecanismo comercial que la impulsa, el riesgo ético que carga, un plan de medición concreto en Ursa y una regla de parada que dice cuándo matarla. Ninguna es una ley universal — la única forma de saber si una técnica funciona en tu cafetería es probarla con tus clientes.",
      "menu-studio.section.05.disclaimer-title":
        "Son hipótesis, no leyes",
      "menu-studio.section.05.disclaimer":
        "Los ratings de evidencia reflejan la fuerza de la investigación publicada, no la certeza del efecto en tu cafetería. Una técnica calificada «fuerte» se ha replicado en múltiples contextos y diseños de estudio; «mixta» significa que los estudios no se ponen de acuerdo, usualmente porque el efecto depende del contexto. Trata cada técnica como una hipótesis que tu carta puede falsar en 30 días de medición. Si el lift no está, mátala — ninguna cantidad de evidencia publicada te obliga a mantener una técnica que no funciona con tus clientes.",
      "menu-studio.psych.evidence-label": "Fuerza de evidencia",
      "menu-studio.psych.mechanism-label": "Mecanismo comercial",
      "menu-studio.psych.ethical-risk-label": "Riesgo ético",
      "menu-studio.psych.measurement-label": "Plan de medición en Ursa",
      "menu-studio.psych.stop-condition-label": "Regla de parada",
      "menu-studio.psych.citation-label": "Fuente",
      "menu-studio.psych.evidence.strong": "Fuerte",
      "menu-studio.psych.evidence.moderate": "Moderada",
      "menu-studio.psych.evidence.weak": "Débil",
      "menu-studio.psych.evidence.mixed": "Mixta",

      "menu-studio.psych.technique.star-markers.title":
        "Estrellas en ítems de alto margen",
      "menu-studio.psych.technique.star-markers.mechanism":
        "La saliencia visual dirige la mirada; una estrella señala respaldo editorial y reduce la fricción de decisión para el cliente inseguro. El marcador funciona bajando el costo cognitivo de elegir, no cambiando la preferencia de fondo.",
      "menu-studio.psych.technique.star-markers.ethical-risk":
        "Bajo cuando el marcador es honesto — alto margen Y alta calidad. Se vuelve manipulación cuando se usa para empujar ítems que el dueño no se tomaría. La línea es la honestidad de la recomendación.",
      "menu-studio.psych.technique.star-markers.measurement":
        "A/B test en rotación de 4 semanas: la mitad de las cartas impresas llevan la estrella en el Ursagroni, la mitad no. Cuenta unidades de Ursagroni vendidas por 100 cubiertos en cada condición.",
      "menu-studio.psych.technique.star-markers.stop-condition":
        "Si el lift es < 5% después de 4 semanas, mata el marcador — agrega ruido visual sin efecto comercial. La técnica es context-dependiente; la literatura reporta resultados positivos y nulos.",
      "menu-studio.psych.technique.star-markers.citation":
        "Yang et al. 2009 (positivo); Carpenter 2018 (sin efecto).",

      "menu-studio.psych.technique.menu-ordering.title":
        "Orden de la carta (primacía vs recencia)",
      "menu-studio.psych.technique.menu-ordering.mechanism":
        "Los ítems al inicio y al final de una lista atraen más atención que los del medio. La dirección exacta (primacía vs recencia) depende del largo de la carta, el patrón de lectura y si la carta es impresa o digital.",
      "menu-studio.psych.technique.menu-ordering.ethical-risk":
        "Bajo. Reordenar es invisible para el cliente. El riesgo es usar el slot estrella para un ítem de baja calidad y alto margen — el cliente que sigue la sugerencia una vez y se decepciona no la volverá a seguir.",
      "menu-studio.psych.technique.menu-ordering.measurement":
        "Mueve un ítem Puzzle (alto margen, baja popularidad) al primer slot de su categoría por 30 días. Cuenta unidades vendidas por 100 cubiertos antes y después.",
      "menu-studio.psych.technique.menu-ordering.stop-condition":
        "Si el movimiento no levanta unidades por al menos 20% después de 30 días, restaura el orden original — el efecto de primacía no está presente en el contexto de tu carta.",
      "menu-studio.psych.technique.menu-ordering.citation":
        "Dayan & Bar-Hillel 2011 (primacía); Bowen & McCarthy 2019 (recencia en cartas digitales).",

      "menu-studio.psych.technique.descriptive-names.title":
        "Nombres descriptivos de ítems",
      "menu-studio.psych.technique.descriptive-names.mechanism":
        "El lenguaje sensorial y de proveniencia («Carne braseada lentamente, ají amarillo, aceitunas» vs «Empanada de carne») dispara simulación mental, sube el valor percibido y mejora las calificaciones post-comida del mismo plato.",
      "menu-studio.psych.technique.descriptive-names.ethical-risk":
        "Bajo si la descripción es verdadera. Alto si sobre-promete — un cliente que pide «braseada lentamente» y prueba carne hervida no vuelve, y le cuenta a dos amigos.",
      "menu-studio.psych.technique.descriptive-names.measurement":
        "Reescribe 3 descripciones por semana. Cuenta ventas de esos ítems vs un baseline de 4 semanas, y pide al equipo de bar que anote cualquier comentario espontáneo del cliente sobre las descripciones.",
      "menu-studio.psych.technique.descriptive-names.stop-condition":
        "Si las ventas no suben ≥ 10% después de 3 semanas, la descripción original ya era buena — restáurala. La técnica es fuerte en la literatura pero existen techos; no todo ítem se beneficia de más palabras.",
      "menu-studio.psych.technique.descriptive-names.citation":
        "Wansink, Painter & North 2005 (27% lift en ventas, mejores ratings post-comida).",

      "menu-studio.psych.technique.price-anchoring.title":
        "Anclaje de precio",
      "menu-studio.psych.technique.price-anchoring.mechanism":
        "Poner un ítem de precio alto al inicio de una categoría hace que los ítems debajo se sientan razonables por comparación. El ancla no necesita vender — necesita ser visible. El mecanismo es contraste: la percepción de precio del cliente es relativa, no absoluta.",
      "menu-studio.psych.technique.price-anchoring.ethical-risk":
        "Moderado. El ancla debe ser un ítem real que se pueda pedir. Un ancla falsa — un tier «Reserva» que nunca está en stock — erosiona la confianza la primera vez que un cliente la pide y le dicen que no.",
      "menu-studio.psych.technique.price-anchoring.measurement":
        "Agrega un filtrado de reserva de S/. 22 al inicio de la sección Filtrado por 30 días. Cuenta unidades del Filtrado Lonya de S/. 14 debajo, y unidades del ancla misma.",
      "menu-studio.psych.technique.price-anchoring.stop-condition":
        "Si el ancla vende cero unidades en 30 días Y los ítems debajo no levantan, retira el ancla — es ruido visual sin efecto comercial. Si el ancla misma empieza a vender, promuévela a ítem real, no a decoy.",
      "menu-studio.psych.technique.price-anchoring.citation":
        "Ariely 2008 (Predictably Irrational); Poundstone 2010 (Priceless).",

      "menu-studio.psych.technique.decoy-pricing.title":
        "Decoy pricing (precio señuelo)",
      "menu-studio.psych.technique.decoy-pricing.mechanism":
        "Una tercera opción con precio que hace que una de dos opciones existentes se vea mejor. Ejemplo clásico: café mediano S/. 8, grande S/. 12, decoy pequeño S/. 7 — el pequeño hace que el mediano se vea generoso. El decoy funciona por dominancia asimétrica: es peor en toda dimensión que una de las alternativas.",
      "menu-studio.psych.technique.decoy-pricing.ethical-risk":
        "Alto. Los decoys están diseñados explícitamente para manipular la elección. Úsalos solo cuando la opción «ganadora» es genuinamente la mejor para el cliente (p.ej. un tamaño que minimiza desperdicio, o una configuración que el barista recomendaría de verdad). Nunca despliegues un decoy cuya victoria dañe al cliente.",
      "menu-studio.psych.technique.decoy-pricing.measurement":
        "Introduce un tamaño decoy para una bebida por 30 días. Cuenta el mix de tamaños vendidos, y el ticket promedio de esa bebida.",
      "menu-studio.psych.technique.decoy-pricing.stop-condition":
        "Si el decoy mismo vende más de 5% de las veces, no es un decoy — es una opción real. Mantenlo como opción real o mátalo. Si el mix no se mueve hacia la opción «ganadora», el decoy falló.",
      "menu-studio.psych.technique.decoy-pricing.citation":
        "Huber, Payne & Puto 1982 (dominancia asimétrica).",

      "menu-studio.psych.technique.pairing-suggestions.title":
        "Sugerencias de pairing",
      "menu-studio.psych.technique.pairing-suggestions.mechanism":
        "Nombrar un ítem acompañante específico («Parea con: Financier de Pera») planta una semilla de cross-sell en la mente del cliente sin requerir prompt del barista. El mecanismo es priming: la sugerencia hace el pairing más disponible en el set de elección del cliente.",
      "menu-studio.psych.technique.pairing-suggestions.ethical-risk":
        "Bajo cuando el pairing es genuinamente complementario — sabores que de verdad funcionan juntos. El riesgo es sugerir pairings que no saben bien juntos; el cliente que sigue la sugerencia una vez y se decepciona no la volverá a seguir.",
      "menu-studio.psych.technique.pairing-suggestions.measurement":
        "Agrega sugerencias de pairing a 4 ítems por 30 días. Cuenta la tasa de attach del acompañamiento sugerido antes y después, controlando por día de la semana y clima (ambos mueven el attach de repostería).",
      "menu-studio.psych.technique.pairing-suggestions.stop-condition":
        "Si el attach no sube ≥ 5 puntos porcentuales después de 30 días, retira las sugerencias — agregan carga de lectura sin lift. La técnica funciona en cadenas con alto tráfico; el tráfico de Ursa puede ser muy bajo para detectar un lift de 5 puntos en 30 días.",
      "menu-studio.psych.technique.pairing-suggestions.citation":
        "Housedris & Kuo 2021 (cross-sell sube el ticket 15-20%).",

      "menu-studio.psych.technique.bundle-offers.title":
        "Ofertas de bundle",
      "menu-studio.psych.technique.bundle-offers.mechanism":
        "Un pequeño descuento en un bundle fijo («Cappuccino + Cookie — S/. 13, ahorra S/. 2») baja el costo de decisión y sube el ticket promedio. El precio del bundle ancla al cliente a comprar ambos; los precios standalone se vuelven el punto de referencia contra el cual el bundle se ve como ganga.",
      "menu-studio.psych.technique.bundle-offers.ethical-risk":
        "Bajo cuando el precio del bundle es genuinamente un pequeño descuento. Un bundle que exige comprar un ítem no querido es un patrón oscuro — el cliente que solo quería el café termina pagando una cookie que no se comió.",
      "menu-studio.psych.technique.bundle-offers.measurement":
        "Ofrece un bundle Cappuccino + Cookie por 30 días a S/. 13 (vs S/. 15 por separado). Cuenta uptake del bundle vs attach standalone de cookie, y unidades totales de cookie vendidas (bundle + standalone).",
      "menu-studio.psych.technique.bundle-offers.stop-condition":
        "Si el ingreso del bundle es menor al que habría sido el standalone, mata el bundle — el descuento no se está pagando. Si las unidades totales de cookie suben pero el margen blendado baja, el bundle está canibalizando ventas a precio full.",
      "menu-studio.psych.technique.bundle-offers.citation":
        "Yadav 1994 (evaluación de bundles); Stremersch & Tellis 2002 (meta-análisis).",

      "menu-studio.psych.technique.font-hierarchy.title":
        "Jerarquía de peso y tamaño de fuente",
      "menu-studio.psych.technique.font-hierarchy.mechanism":
        "Los nombres de ítems en peso más pesado / tamaño más grande señalan importancia y dirigen la secuencia de lectura. El precio en peso más ligero reduce la sensibilidad al precio al bajar la saliencia visual del costo. El mecanismo es atención: el ojo sigue primero el trazo más pesado.",
      "menu-studio.psych.technique.font-hierarchy.ethical-risk":
        "Bajo. La jerarquía visual es una herramienta de diseño, no una manipulación. El riesgo es hacer los precios invisibles — eso crea sorpresa post-pedido y erosiona confianza. Los precios siempre deben ser legibles; simplemente no el elemento más ruidoso de la página.",
      "menu-studio.psych.technique.font-hierarchy.measurement":
        "A/B test en rotación de 4 semanas: la mitad de las cartas impresas usan la jerarquía de peso pesado de este preview, la mitad usa peso uniforme entre nombre y precio. Cuenta la selección de los ítems con peso más pesado.",
      "menu-studio.psych.technique.font-hierarchy.stop-condition":
        "Si la selección no se mueve hacia los ítems de peso pesado después de 4 semanas, restaura el peso uniforme — la jerarquía es invisible para tus clientes. La base de evidencia es la más vieja y débil de las ocho técnicas; trátala como decorativa hasta que tu medición diga lo contrario.",
      "menu-studio.psych.technique.font-hierarchy.citation":
        "Carmin & Norkus 1990 (percepción de precio en carta).",

      /* Sección 06 — Modelador de tasa de attach */
      "menu-studio.section.06.badge": "Sección 06",
      "menu-studio.section.06.title": "Modelador de tasa de attach",
      "menu-studio.section.06.meta":
        "Convierte una bebida en un ticket",
      "menu-studio.attach.title": "Configura el pairing",
      "menu-studio.attach.primary": "Bebida principal",
      "menu-studio.attach.side": "Acompañamiento / pairing",
      "menu-studio.attach.volume":
        "Volumen principal (unidades vendidas)",
      "menu-studio.attach.rate":
        "Tasa de attach (% de compradores del principal que agregan el acompañamiento)",
      "menu-studio.attach.scale-0": "0% · bebida sola",
      "menu-studio.attach.scale-60": "60% · target Ursa Mañana",
      "menu-studio.attach.scale-100": "100% · siempre con pairing",
      "menu-studio.attach.callout.title": "Por qué importa",
      "menu-studio.attach.callout.body":
        "Un Ursagroni de S/. 18 con 75% de margen se ve sano solo — pero el ticket es lo que paga el local. Si 60% de los compradores de Ursagroni también agregan una cookie de S/. 5 (margen S/. 3.5), cada 100 Ursagronis se convierten en S/. 210 extra de margen. La tasa de attach es la palanca más grande en la rentabilidad blendada; la alternativa — subir el precio de la bebida — funciona en papel pero comprime la demanda. Empuja attach primero; sube el precio solo si el attach no responde después de 30 días de prompt activo.",
      "menu-studio.attach.contribution-label":
        "Aporte de margen del acompañamiento",
      "menu-studio.attach.contribution-body":
        "De {sides} acompañamientos de {side} vendidos junto a {volume} {primary} con {rate}% de attach.",
      "menu-studio.attach.mini.primary-revenue": "Ingreso principal",
      "menu-studio.attach.mini.attach-revenue":
        "Ingreso del acompañamiento",
      "menu-studio.attach.mini.side-margin":
        "Margen acompañ. / unidad",
      "menu-studio.attach.mini.blended": "Margen blendado %",
      "menu-studio.attach.composition": "Composición del ticket",
      "menu-studio.attach.composition-primary": "Principal",
      "menu-studio.attach.composition-attach": "Attach",

      /* Sección 07 — Stars & Puzzles */
      "menu-studio.section.07.badge": "Sección 07",
      "menu-studio.section.07.title":
        "Stars & Puzzles — matriz de ingeniería de carta",
      "menu-studio.section.07.meta":
        "Popularidad ≥ 3/5 cuenta como alta · margen ≥ 55% cuenta como alto",
      "menu-studio.section.07.intro":
        "Ingeniería de carta clásica (originalmente de Menu Engineering: A Practical Guide to Improving Profitability, Kasavana & Smith, 1982). Los ítems se clasifican por margen (alto/bajo, usando el umbral de 55%) y por popularidad (el score 1-5 puesto en la plantilla; ≥ 3 cuenta como alto). Cada cuadrante tiene una acción distinta — no un veredicto. El framework es apropiado aquí porque la carta de Ursa es chica (12–15 ítems) y las decisiones son reversibles: un Puzzle se puede reposicionar sin sacarlo de la carta, un Plowhorse se puede re-ingeniar sin perder su popularidad. La limitación del framework: trata margen y popularidad como independientes, pero no lo son — un aumento de precio puede mover un ítem de Star a Puzzle. Vuelve a correr la matriz después de cualquier cambio de precio.",
      "menu-studio.quadrant.star.label": "Stars",
      "menu-studio.quadrant.star.desc":
        "Margen alto · popularidad alta",
      "menu-studio.quadrant.star.action":
        "Destácalo en la carta y en la fotografía. Entrena a los baristas para sugerirlo por nombre cuando un cliente pregunta «¿qué hay de bueno?». Esta es la columna vertebral de tu carta — cuídala.",
      "menu-studio.quadrant.puzzle.label": "Puzzles",
      "menu-studio.quadrant.puzzle.desc":
        "Margen alto · popularidad baja",
      "menu-studio.quadrant.puzzle.action":
        "La oportunidad. Renombra, reposiciona (muévelo del fondo de la carta a un slot destacado), re-parea (sugiérelo junto a un Star). Si después de 30 días no se mueve, mátalo — el margen es real pero la demanda no.",
      "menu-studio.quadrant.plowhorse.label": "Plowhorses",
      "menu-studio.quadrant.plowhorse.desc":
        "Margen bajo · popularidad alta",
      "menu-studio.quadrant.plowhorse.action":
        "A los clientes les encanta. No lo mates — re-ingenia el costo. Busca un insumo más barato, reduce la porción 10%, o sube el precio en S/. 1. La prueba es si la popularidad sobrevive al cambio; si no, restaura el original.",
      "menu-studio.quadrant.dog.label": "Dogs",
      "menu-studio.quadrant.dog.desc":
        "Margen bajo · popularidad baja",
      "menu-studio.quadrant.dog.action":
        "Mátalo. O reformúlalo como especial de temporada y deja que la escasez cree demanda — pero solo si la reformulación es genuina, no un rebrand del mismo ítem.",
      "menu-studio.quadrant.none": "— ninguno —",
      "menu-studio.matrix.title": "La matriz de un vistazo",
      "menu-studio.matrix.cell-puzzle": "Puzzle",
      "menu-studio.matrix.cell-star": "Star",
      "menu-studio.matrix.cell-dog": "Dog",
      "menu-studio.matrix.cell-plowhorse": "Plowhorse",
      "menu-studio.matrix.desc-puzzle":
        "Margen alto · popularidad baja",
      "menu-studio.matrix.desc-star":
        "Margen alto · popularidad alta",
      "menu-studio.matrix.desc-dog":
        "Margen bajo · popularidad baja",
      "menu-studio.matrix.desc-plowhorse":
        "Margen bajo · popularidad alta",
      "menu-studio.matrix.axis-margin": "Margen →",
      "menu-studio.matrix.axis-popularity": "Popularidad →",
      "menu-studio.matrix.axis-high": "Alto",
      "menu-studio.matrix.axis-low": "Bajo",
      "menu-studio.matrix.footer":
        "Umbral: margen ≥ 55% cuenta como alto. La popularidad es el score 1-5 puesto en la plantilla — score ≥ 3 cuenta como alto. Una carta de 12 ítems debería apuntar a 3–4 Stars, 2–3 Puzzles para impulsar, 2–3 Plowhorses para re-ingeniar y 1–2 Dogs para retirar. La distribución importa más que cualquier clasificación individual — una carta con 12 Stars es una carta donde el supuesto de popularidad es demasiado generoso.",

      /* Sección 08 — Export */
      "menu-studio.section.08.badge": "Sección 08",
      "menu-studio.section.08.title": "Exporta el resumen de carta",
      "menu-studio.section.08.meta": "Copiar al portapapeles",
      "menu-studio.export.title": "Genera un snapshot de texto",
      "menu-studio.export.body":
        "Un export en texto plano de cada ítem, su margen, popularidad, carga de prep, tasa de attach, clasificación, los agregados del tablero por categoría, la proyección de attach y las ocho hipótesis de psicología. Útil para pegar en un doc de Notion, un mensaje de WhatsApp a un socio o una hoja de prep impresa para el bar. Regenera después de cada cambio de precio o costo — un export desactualizado es peor que ningún export.",
      "menu-studio.export.button": "Generar export",
      "menu-studio.export.dialog-title": "Export de carta",
      "menu-studio.export.close": "Cerrar",
      "menu-studio.export.copy": "Copiar al portapapeles",
      "menu-studio.export.copied": "¡Copiado!",
      "menu-studio.export.stat.items": "Ítems en el export",
      "menu-studio.export.stat.margin": "Margen promedio",
      "menu-studio.export.stat.stars": "Stars en la carta",
      "menu-studio.export.stat.attach":
        "Aporte de attach modelado",
      "menu-studio.export.callout.title": "Cómo leer el export",
      "menu-studio.export.callout.body":
        "El export es un snapshot en el tiempo — regenéralo siempre que cambies un precio o un costo. Pégalo en el briefing del próximo turno de bar o adjúntalo a la revisión mensual de carta. Los números son solo tan honestos como los inputs; acompaña este export con los logs reales de tostado antes de cualquier decisión de precio. Un número que no se ha contrastado con una factura de proveedor es una hipótesis, no un hecho.",

      /* ---- Asignador de Presupuesto (Herramienta T6) ---- */
      "budget.lede":
        "Tres escenarios — Lean, Moderate, Growth — se parametrizaron en el Módulo 04 para que ninguno dependa de un número que Ursa todavía no ha medido. Edita cualquier línea, agrega las tuyas y el total mensual, el costo por día y el desglose por categoría recalculan al instante. La decisión que esta herramienta apoya es simple de enunciar y difícil de tomar: elige el escenario que el dueño pueda sostener tres meses sin titubear, luego re-evalúa en el día 30 contra las reglas de parada del Roadmap. El plan es internamente coherente en cualquiera de los tres; el modo de falla es elegir Growth y abandonarlo en la semana seis.",
      "budget.meta.currency": "Moneda",
      "budget.meta.currency-value": "PEN (S/.)",
      "budget.meta.source": "Fuente",
      "budget.meta.source-value":
        "Módulo 04 · escenarios verificados",
      "budget.meta.interactive": "Interactivo",
      "budget.meta.interactive-value": "Totales en vivo · editable",
      "budget.section.01.badge": "Escenario",
      "budget.section.01.title":
        "Elige un escenario, luego edita líneas en vivo",
      "budget.section.01.meta":
        "Tres pre-cargados · totalmente editables",
      "budget.action.reset": "Reiniciar todo",
      "budget.line-items.title": "{name} · líneas",
      "budget.line-items.count": "{n} ítems",
      "budget.line-items.empty":
        "Sin líneas. Agrega una abajo.",
      "budget.line-items.add-label":
        "Agregar una línea custom a {name}",
      "budget.line-items.placeholder":
        "p.ej. Hosting de viaje de influencer",
      "budget.line-items.add-button": "Agregar",
      "budget.total.label": "Total mensual en vivo · {name}",
      "budget.total.per-month": "/ mes",
      "budget.total.baseline-label":
        "Baseline original: {baseline} · {delta} vs. baseline",
      "budget.stat.per-day": "Costo por día · mes de 30 días",
      "budget.stat.active":
        "Líneas activas en este escenario",
      "budget.breakdown.title": "Desglose por día",
      "budget.breakdown.daily": "Costo diario",
      "budget.breakdown.weekly": "Costo semanal (÷ 4.33)",
      "budget.breakdown.quarterly": "Costo trimestral (× 3)",
      "budget.breakdown.over-title": "Estás sobre el baseline",
      "budget.breakdown.over-body":
        "Sumar {delta}/mes significa {quarterly} en un trimestre. Confirma que el dueño lo puede sostener antes de comprometerlo — los sobrecostos se componen más rápido que los sub-gastos.",
      "budget.breakdown.under-title": "Estás bajo el baseline",
      "budget.breakdown.under-body":
        "Cortar {delta}/mes ahorra {quarterly} en un trimestre. Asegúrate de que ningún experimento pierda su presupuesto — el baseline Lean es un piso, no un target.",
      "budget.section.02.badge": "Asignación",
      "budget.section.02.title":
        "A dónde va el presupuesto de {name}",
      "budget.section.02.meta": "Desglose categoría por categoría",
      "budget.allocation.title": "Gasto por línea",
      "budget.allocation.body":
        "Cada slice es una línea. Edita el costo arriba y mira la gráfica redibujarse. Los slices por debajo de 5% del total siguen en la lista de la derecha — los gastos chicos se componen, y el ranking es donde se vuelven visibles.",
      "budget.ranked.title": "Ranking por share del total",
      "budget.section.03.badge": "Comparar",
      "budget.section.03.title":
        "Los tres escenarios lado a lado",
      "budget.section.03.meta": "Lean vs Moderate vs Growth",
      "budget.compare.table-metric": "Métrica",
      "budget.compare.row-edited": "Total mensual editado",
      "budget.compare.row-baseline": "Baseline mensual",
      "budget.compare.row-per-day": "Costo por día",
      "budget.compare.row-items": "Líneas",
      "budget.compare.row-focus": "Foco",
      "budget.compare.row-top": "Ítem top",
      "budget.compare.stat":
        "{name} · total mensual editado",
      "budget.compare.callout.title":
        "El escenario barato es el benchmark real",
      "budget.compare.callout.body":
        "Si el total editado de Moderate o Growth se pasa de lo que el dueño puede sostener tres meses, vuelve al total editado de Lean. El plan es internamente coherente en cualquiera de los tres — no hay escenario «half-Moderate» que se rompa. El mecanismo: cada canal de Lean alimenta una superficie donde aterrizan los canales de Moderate (GBP alimenta Maps, WhatsApp alimenta la lista tibia), así que gastar menos no deja varado lo ya comprometido. El modo de falla es el opuesto — elegir Growth y cortarlo en la semana seis deja campañas de paid-social a media cebada y relaciones de creador a media construir, que es peor que nunca empezarlas.",
      "budget.section.04.badge": "Próximo paso",
      "budget.section.04.title":
        "Una vez definido el presupuesto, modela el retorno por canal",
      "budget.roi.title":
        "El modelado de ROI vive en el Tablero de ROI",
      "budget.roi.body":
        "El Asignador de Presupuesto te dice qué gastas. El Tablero de ROI convierte el gasto de cada canal en clientes esperados, ingreso, meses de payback y ROI % — con un slider de confianza para mejor/peor caso. Úsalos juntos: define el presupuesto aquí, luego valídalo allá. Un presupuesto sin modelo de retorno es un deseo; un modelo de retorno sin presupuesto es una fantasía.",
      "budget.roi.button-roi": "Abrir el Tablero de ROI",
      "budget.roi.button-back": "Volver al Módulo 04",
      "budget.roi.limitations-title":
        "Lo que esta herramienta no hace",
      "budget.roi.limitation-1":
        "No modela ingreso ni payback — ver Tablero de ROI.",
      "budget.roi.limitation-2":
        "No persiste ediciones entre recargas — es un borrador, no un sistema de registro.",
      "budget.roi.limitation-3":
        "No impone un tope total — pon tu propia disciplina. El baseline Lean es un piso, no un techo; el escenario Growth es un techo, no un target.",

      /* ---- Tablero del Piloto (Herramienta T12) · Ursa Mañana Pilot Tracker ---- */
      "pilot.lede":
        "Este tablero responde una pregunta: ¿la suscripción Ursa Mañana paga con la economía propia de Ursa, y en qué semana se vuelve legible la respuesta? Doce semanas es la ventana mínima honesta — lo suficientemente corta para leer un veredicto antes de escalar, lo suficientemente larga para que la curva de altas se asiente pasado el pico de lanzamiento. La trayectoria por defecto sube de 5 a 45 suscriptores porque ese es el volumen que una cafetera de Miraflores con un dueño y dos barras puede realmente atender sin romper el turno de la mañana; el tope de 50 suscriptores existe para que la canibalización se mantenga observable, no porque la demanda se acabe ahí. Edita cualquier input — precio, costo marginal, visitas por semana, margen de acompañamiento, la trayectoria semana a semana — y la utilidad neta, el attach de acompañamientos y el ajuste por canibalización se recalculan en vivo. El modelo no puede decirte si la demanda va a materializarse; solo cómo se ve la matemática si lo hace.",
      "pilot.meta.pilot": "Piloto",
      "pilot.meta.pilot-value": "12 semanas",
      "pilot.meta.cap": "Tope",
      "pilot.meta.cap-value": "50 suscriptores",
      "pilot.meta.stop": "Regla de parada",
      "pilot.meta.stop-value": "Utilidad neta < 0 al día 60",

      "pilot.section.01.badge": "Totales del piloto",
      "pilot.section.01.title": "Resultado proyectado a 12 semanas",
      "pilot.section.01.meta": "En vivo · recalcula con cada input",
      "pilot.stat.net-profit": "Utilidad neta · 12 semanas",
      "pilot.stat.subscribers-w12": "Suscriptores en la semana 12",
      "pilot.stat.sub-revenue": "Ingreso por suscripción cobrado",
      "pilot.stat.cups-served": "Tazas servidas a suscriptores",
      "pilot.verdict.ok": "En camino",
      "pilot.verdict.warn": "Marginal — vigila la tendencia",
      "pilot.verdict.stop": "Bajo el punto de equilibrio — revisa",
      "pilot.breakdown.title": "De dónde viene y a dónde va el dinero",
      "pilot.breakdown.sub-label": "% sub",
      "pilot.breakdown.sides-label": "% acompañ.",
      "pilot.breakdown.stat.sub-revenue": "Ingreso por suscripción",
      "pilot.breakdown.stat.side-margin": "Margen de acompañamiento",
      "pilot.breakdown.stat.coffee-cost": "Costo de café",
      "pilot.breakdown.stat.cannibal-loss": "Pérdida por canibalización",

      "pilot.section.02.badge": "Por suscriptor",
      "pilot.section.02.title": "La economía de un suscriptor",
      "pilot.section.02.meta": "Editable · alimenta los totales del piloto",
      "pilot.inputs.title": "Edita los inputs",
      "pilot.field.sub-price.label": "Precio de suscripción (mensual)",
      "pilot.field.cost-per-cup.label": "Costo marginal por taza",
      "pilot.field.visits-week.label": "Visitas por semana",
      "pilot.field.side-margin.label": "Margen por acompañamiento",
      "pilot.field.avg-spend-pre.label": "Gasto promedio pre-suscripción",
      "pilot.outputs.net-profit-label": "Utilidad neta por suscriptor / mes",
      "pilot.outputs.metric.visits-month": "Visitas/mes",
      "pilot.outputs.metric.cups-month": "Tazas/mes",
      "pilot.outputs.metric.coffee-cost": "Costo de café",
      "pilot.outputs.metric.side-margin": "Margen acompañ.",
      "pilot.cannibal.title": "La línea de canibalización",
      "pilot.cannibal.body":
        "Al 30% de canibalización, cada suscriptor que antes gastaba S/. {spend} ahora le cuesta a la cafetera {loss} en ingreso perdido. El piloto tiene que atraer nuevos regulares, no solo convertir a los existentes — el número de canibalización es la prueba de si la oferta es genuinamente aditiva o un reetiquetado del gasto que ya existía.",

      "pilot.section.03.badge": "Trayectoria",
      "pilot.section.03.title": "La curva de altas de 12 semanas",
      "pilot.section.03.meta": "Edita cualquier semana · mira cómo se mueve el total",
      "pilot.trajectory.tooltip": "Semana {week}: {n} suscriptores",
      "pilot.trajectory.week-label": "S{week}",
      "pilot.table.col.week": "Semana",
      "pilot.table.col.subscribers": "Suscriptores",
      "pilot.table.col.visits-wk": "Visitas/sem",
      "pilot.table.col.side-attach": "Attach %",
      "pilot.table.col.cannibal": "Canibal %",
      "pilot.table.col.week-profit": "Utilidad semanal",
      "pilot.table.hint":
        "Edita cualquier celda para modelar una trayectoria distinta. Utilidad semanal = ingreso sub + margen de acompañ. − costo de café + ajuste por canibalización.",
      "pilot.trajectory.reset": "Reiniciar trayectoria",

      "pilot.section.04.badge": "Salud del piloto",
      "pilot.section.04.title": "Reglas y señales de parada",
      "pilot.section.04.meta": "Revisa semanal · mata limpio si se dispara una regla",
      "pilot.stop.1.title": "Regla de parada 1",
      "pilot.stop.1.body": "Utilidad neta por suscriptor bajo cero después de 60 días.",
      "pilot.stop.2.title": "Regla de parada 2",
      "pilot.stop.2.body": "Canibalización mayor a 50% de los suscriptores.",
      "pilot.stop.3.title": "Regla de parada 3",
      "pilot.stop.3.body": "Tasa de attach de acompañamientos menor a 40% después de 30 días.",
      "pilot.stop.label.current": "Actual",
      "pilot.stop.label.final-week": "Semana final",
      "pilot.health.title": "Cómo se ve un piloto sano",
      "pilot.health.body":
        "Para la semana 12: 40–50 suscriptores, attach de acompañamientos sostenido ≥ 55%, canibalización estabilizándose entre 30–35%, y utilidad neta por suscriptor por encima de S/. 15. Si esos cuatro se sostienen juntos, el piloto gradúa a canal permanente. Si no, documenta qué falló y por qué — los datos son el activo, aunque el piloto termine. El tope de 50 suscriptores existe justamente para que este veredicto se pueda leer sin ruido.",

      "pilot.button.calculator": "Abrir la calculadora completa",
      "pilot.button.experiments": "Ver el seguimiento de experimentos",

      /* ---- Ursa Mañana Business Case (Pilot Tool T12 reconstruido) ---- */
      "pilotbiz.lede":
        "Este es el caso de negocio completo del piloto Ursa Mañana — cada costo, cada línea de ingreso, cada punto de equilibrio, cada sensibilidad. Pon tus propios números del tostadero (costo del verde, rendimiento de tostado, minutos del barista por taza, gasto fijo mensual) y el modelo recalcula utilidad neta por suscriptor, suscriptores de equilibrio, semanas de equilibrio, el P&L de 12 semanas, la proyección de escala a 12 meses, y el marco de decisión en tiempo real. Nada está oculto — cada output muestra su fórmula. Cada supuesto cita la ciencia que lo respalda. La meta no es un pronóstico en el que creas; es un modelo con el que puedas discutir, línea por línea, antes de comprometer un solo sol al piloto.",
      "pilotbiz.meta.pilot": "Piloto",
      "pilotbiz.meta.pilot-value": "12 semanas · tope de 50",
      "pilotbiz.meta.price": "Precio",
      "pilotbiz.meta.price-value": "S/. 20 / mes",
      "pilotbiz.meta.currency": "Moneda",
      "pilotbiz.meta.currency-value": "Sol peruano (S/.)",

      "pilotbiz.section.headline.badge": "Titulares",
      "pilotbiz.section.headline.title": "Los cinco números que deciden el piloto",
      "pilotbiz.section.headline.meta": "En vivo · recalcula con cada input",
      "pilotbiz.headline.net-profit": "Utilidad neta / suscriptor / mes",
      "pilotbiz.headline.contribution": "Margen de contribución / taza",
      "pilotbiz.headline.breakeven-subs": "Suscriptores de equilibrio",
      "pilotbiz.headline.breakeven-weeks": "Semanas de equilibrio (curva del piloto)",
      "pilotbiz.headline.pilot-net": "Utilidad neta del piloto · 12 semanas",
      "pilotbiz.headline.verdict.ok": "Graduar",
      "pilotbiz.headline.verdict.warn": "Marginal — revisa los inputs",
      "pilotbiz.headline.verdict.stop": "Bajo el equilibrio — no lanzar",

      "pilotbiz.section.costs.badge": "Sección 01 · Estructura de costos",
      "pilotbiz.section.costs.title": "Pon tus costos reales",
      "pilotbiz.section.costs.meta": "De los registros de tostado · facturas · planilla",
      "pilotbiz.costs.subtitle":
        "Cada costo aquí es editable. Los defaults son benchmarks de cafetería de especialidad de Lima verificados contra el Módulo 03; reemplaza cada uno con el número de tu registro de tostado, tu factura de leche, tu proveedor de vasos, y tu planilla antes de confiar en los outputs. El modelo recalcula con cada tecla.",
      "pilotbiz.cost.field.green-bean.label": "Costo del café verde (por kg)",
      "pilotbiz.cost.field.green-bean.hint":
        "De tu factura de verde. El verde de especialidad de Lima está a S/. 30–45/kg landed para lavados de Cusco/Cajamarca; el commodity está bajo S/. 25. El modelo divide por el rendimiento de tostado para obtener el costo tostado por gramo, luego multiplica por la dosis por taza.",
      "pilotbiz.cost.field.roast-yield.label": "Rendimiento de tostado (%)",
      "pilotbiz.cost.field.roast-yield.hint":
        "Masa retenida tras tostar. 1 kg verde → ~0.85 kg tostado. Los tostados claros pierden más. El manual SCA cita 14–18% de pérdida para tostados de filtrado de especialidad; el perfil Lonya/Chanchamayo de Ursa está alrededor de 85%.",
      "pilotbiz.cost.field.dose.label": "Dosis por taza (g)",
      "pilotbiz.cost.field.dose.hint":
        "Gramos de café tostado por taza. 18g para un espresso doble, 15g para un V60. La suscripción topea a una taza por visita; esa es la taza a la que se refiere esta dosis.",
      "pilotbiz.cost.field.cup.label": "Costo vaso + tapa (por unidad)",
      "pilotbiz.cost.field.cup.hint":
        "Las tazas de cerámica en local tienen costo marginal cero (ya amortizado); el default aquí es para la opción para llevar que un suscriptor usa de vez en cuando. Pon 0 si el piloto es solo en local con cerámica — la mayor parte de Ursa Mañana lo es.",
      "pilotbiz.cost.field.barista-wage.label": "Salario de barista (por hora)",
      "pilotbiz.cost.field.barista-wage.hint":
        "Costo horario cargado incluyendo beneficios sociales y cesantía. Barista de especialidad en Lima: S/. 10–14/hora cargado. Se asigna por taza vía los minutos del barista abajo.",
      "pilotbiz.cost.field.barista-minutes.label": "Minutos de barista por taza",
      "pilotbiz.cost.field.barista-minutes.hint":
        "Tiempo manos a la obra para tirar un shot o servir un V60. Los estudios SCA de tiempo y movimiento citan 1.5–3 minutos por taza para un barista entrenado en máquina de 2 grupos. La suscripción no cambia esto; cambia qué tan ocupado está el barista a las 8:30am.",
      "pilotbiz.cost.field.overhead.label": "Gasto fijo mensual (alquiler + servicios)",
      "pilotbiz.cost.field.overhead.hint":
        "Costo fijo que la cafetería paga sin importar el piloto. Cafetería de 60m² en Miraflores: S/. 4,000–6,000/mes alquiler + servicios. Este es el número que los suscriptores de equilibrio deben cubrir.",

      "pilotbiz.section.revenue.badge": "Sección 02 · Estructura de ingreso",
      "pilotbiz.section.revenue.title": "De dónde entra el dinero",
      "pilotbiz.section.revenue.meta": "Tres flujos · una suscripción",
      "pilotbiz.rev.subtitle":
        "La suscripción es la puerta; los acompañamientos y las bolsas de café retail son el cuarto. Edita precio, tasa de attach, margen del acompañamiento, attach retail, y la canibalización que el modelo expone con honestidad.",
      "pilotbiz.rev.field.sub-price.label": "Precio de suscripción (mensual)",
      "pilotbiz.rev.field.sub-price.hint":
        "S/. 20 es el precio recomendado del piloto — suficientemente alto para señalar compromiso, suficientemente bajo para verse obvio al lado de un cappuccino de S/. 12. La investigación en psicología de precios (charm pricing, anclaje de precio) sugiere que S/. 20 se lee como 'barato' al lado de S/. 25 y 'justo' al lado de S/. 15; S/. 19 se lee aún más barato pero señala menor calidad. Quédate en S/. 20.",
      "pilotbiz.rev.field.visits-week.label": "Visitas por semana (suscriptor)",
      "pilotbiz.rev.field.visits-week.hint":
        "Cuántas veces viene un suscriptor en la ventana de 7–10am Lun–Vie. Dos y media visitas/semana es la lectura conservadora del persona de regular de la mañana del Módulo 04; tres es el caso base del modelo del piloto.",
      "pilotbiz.rev.field.cups-visit.label": "Tazas por visita",
      "pilotbiz.rev.field.cups-visit.hint":
        "Topeado a una en el piloto. Una segunda taza duplica el costo marginal sin cambiar el precio que paga el suscriptor — la forma más común en que una oferta de café ilimitado sangra en silencio. Hazlo cumplir con una tarjeta de un sello por visita.",
      "pilotbiz.rev.field.attach-rate.label": "Tasa de attach de acompañamientos (%)",
      "pilotbiz.rev.field.attach-rate.hint":
        "Porcentaje de visitas en las que el suscriptor también compra una cookie, financier o empanada. Estudios de la industria de suscripciones de café ilimitado reportan 30–55% de attach sin promoción y 55–75% con promoción activa de maridaje (Nunes & Drèze 2006; reportes benchmark de Recurly). El caso base de 60% asume promoción activa.",
      "pilotbiz.rev.field.side-margin.label": "Margen por acompañamiento (S/.)",
      "pilotbiz.rev.field.side-margin.hint":
        "Margen de utilidad del acompañamiento, no ingreso. Una cookie de S/. 5 con costo de S/. 1.5 aporta S/. 3.5; una empanada de S/. 8 con costo de S/. 3 aporta S/. 5. Guía SCA de food cost: 25–35% para masas acompañando café.",
      "pilotbiz.rev.field.retail-attach.label": "Attach de bolsa retail (bolsas/mes/suscriptor)",
      "pilotbiz.rev.field.retail-attach.hint":
        "Cuántas bolsas retail de 250g se lleva un suscriptor por mes además del café en local. El caso base 0.5 (una bolsa cada dos meses) es conservador para suscriptores comprometidos; cohortes de alta engagement pasan de 1.0+.",
      "pilotbiz.rev.field.retail-margin.label": "Margen de bolsa retail (S/.)",
      "pilotbiz.rev.field.retail-margin.hint":
        "Margen de utilidad de una bolsa de 250g. Ursa vende 250g a S/. 28–35 con un costo tostado de S/. 8–12; el margen está alrededor de S/. 18–22. Tener tostadero propio es lo que hace este margen estructuralmente defendible.",
      "pilotbiz.rev.field.cannibal.label": "Tasa de canibalización (%)",
      "pilotbiz.rev.field.cannibal.hint":
        "Porcentaje de suscriptores que de todos modos habrían pagado precio completo — el mayor riesgo del modelo. Los estudios de canibalización en suscripciones (Recurly, Chargebee) citan 20–40% típico para suscripciones producto-y-servicio que apuntan a regulares existentes. Rastrea la fuente de alta en el piloto.",
      "pilotbiz.rev.field.avg-spend-pre.label": "Gasto promedio pre-suscripción (por visita)",
      "pilotbiz.rev.field.avg-spend-pre.hint":
        "Lo que un suscriptor canibalizado gastaba por visita antes de suscribirse. Se usa solo dentro del ajuste por canibalización: ingreso perdido = canibal% × visitas/mes × gasto pre. El ticket del regular de la mañana de Ursa está alrededor de S/. 14.",
      "pilotbiz.rev.field.churn.label": "Churn mensual esperado (%)",
      "pilotbiz.rev.field.churn.hint":
        "Porcentaje de suscriptores que cancelan cada mes. Benchmarks de suscripción B2C (Recurly 2023): 5–8% churn mensual es sano, 8–12% es normal, >15% es bandera roja. La meta del piloto es <8%; >12% dispara una revisión de kill.",

      "pilotbiz.section.params.badge": "Sección 03 · Parámetros del piloto",
      "pilotbiz.section.params.title": "Forma, curva y tope del piloto",
      "pilotbiz.section.params.meta": "Decisiones de diseño · no supuestos a probar",
      "pilotbiz.params.subtitle":
        "La duración, el tope, y la curva de altas no se miden en campo — son decisiones de diseño que el dueño toma upfront. El tope de 50 existe para que la canibalización se mantenga observable; las 12 semanas es la ventana honesta mínima.",
      "pilotbiz.params.field.pilot-weeks.label": "Duración del piloto (semanas)",
      "pilotbiz.params.field.pilot-weeks.hint":
        "12 semanas es la ventana honesta mínima: suficiente para que la curva de altas se asiente tras el pico de lanzamiento, corto para leer un veredicto antes de escalar. La metodología Lean Startup (Ries 2011) le llama el ciclo construir-medir-aprender.",
      "pilotbiz.params.field.sub-cap.label": "Tope de suscriptores",
      "pilotbiz.params.field.sub-cap.hint":
        "50 es el volumen que una cafetería de Miraflores con un dueño y dos barras puede atender a las 8:30am sin romper el turno de la mañana — y bajo 50, la canibalización sigue siendo observable individualmente. Sobre 50, la señal se promedia en ruido.",
      "pilotbiz.params.field.weeks-month.label": "Semanas por mes",
      "pilotbiz.params.field.weeks-month.hint":
        "Bloqueado en 4.33 — 52 semanas / 12 meses. Se usa para prorratear el ingreso mensual de suscripción al flujo semanal.",
      "pilotbiz.params.field.ramp.label": "Curva de altas",
      "pilotbiz.params.field.ramp.hint":
        "Lineal sube estable de 0 al tope; S-curve (difusión de Bass) carga early adopters al frente y luego se aplana; Aggressive asume 60% del tope en la semana 4. El dueño del piloto elige la curva que matchea la intensidad del marketing de lanzamiento.",
      "pilotbiz.params.ramp.linear": "Lineal (estable)",
      "pilotbiz.params.ramp.s-curve": "S-curve (difusión de Bass)",
      "pilotbiz.params.ramp.aggressive": "Agresivo (early adopter)",

      "pilotbiz.section.outputs.badge": "Sección 04 · Outputs calculados",
      "pilotbiz.section.outputs.title": "La matemática, línea por línea",
      "pilotbiz.section.outputs.meta": "Cada fórmula visible · cada input rastreable",
      "pilotbiz.outputs.subtitle":
        "Cada línea abajo muestra la fórmula, los inputs que la alimentan, y el resultado. Si discrepas con un número, encuentra la fórmula, encuentra el input, cambia el input. El modelo es una posición con la que discutir, no un pronóstico en el que creer.",
      "pilotbiz.outputs.col.metric": "Métrica",
      "pilotbiz.outputs.col.formula": "Fórmula",
      "pilotbiz.outputs.col.value": "Valor",
      "pilotbiz.outputs.row.roast-cost.label": "Costo de tostado por taza",
      "pilotbiz.outputs.row.roast-cost.formula": "verde × (dosis / 1000) / rendimiento",
      "pilotbiz.outputs.row.labor-per-cup.label": "Costo de mano de obra por taza",
      "pilotbiz.outputs.row.labor-per-cup.formula": "salario × minutos / 60",
      "pilotbiz.outputs.row.var-cost.label": "Costo variable por taza",
      "pilotbiz.outputs.row.var-cost.formula": "tostado + vaso + mano de obra",
      "pilotbiz.outputs.row.visits-month.label": "Visitas por mes",
      "pilotbiz.outputs.row.visits-month.formula": "visitasSem × semanasPorMes",
      "pilotbiz.outputs.row.cups-month.label": "Tazas por mes",
      "pilotbiz.outputs.row.cups-month.formula": "visitasMes × tazasPorVisita",
      "pilotbiz.outputs.row.coffee-cost-month.label": "Costo de café / mes",
      "pilotbiz.outputs.row.coffee-cost-month.formula": "tazasMes × costo variable por taza",
      "pilotbiz.outputs.row.side-margin-month.label": "Margen de acompañ. / mes",
      "pilotbiz.outputs.row.side-margin-month.formula": "visitasMes × attach × margenAcompañ",
      "pilotbiz.outputs.row.retail-margin-month.label": "Margen retail / mes",
      "pilotbiz.outputs.row.retail-margin-month.formula": "attachRetail × margenBolsa",
      "pilotbiz.outputs.row.gross-profit.label": "Utilidad bruta / suscriptor / mes",
      "pilotbiz.outputs.row.gross-profit.formula": "precio + acompañ + retail − café",
      "pilotbiz.outputs.row.cannibal-loss.label": "Pérdida por canibalización / mes",
      "pilotbiz.outputs.row.cannibal-loss.formula": "canibal% × visitasMes × gastoPre",
      "pilotbiz.outputs.row.net-profit.label": "Utilidad neta / suscriptor / mes",
      "pilotbiz.outputs.row.net-profit.formula": "bruta − canibalización",
      "pilotbiz.outputs.row.contribution-margin.label": "Margen de contribución / taza",
      "pilotbiz.outputs.row.contribution-margin.formula": "neta / tazasMes",
      "pilotbiz.outputs.row.breakeven-subs.label": "Suscriptores de equilibrio",
      "pilotbiz.outputs.row.breakeven-subs.formula": "gasto fijo / neta",
      "pilotbiz.outputs.row.breakeven-weeks.label": "Semanas de equilibrio (curva piloto)",
      "pilotbiz.outputs.row.breakeven-weeks.formula": "primera semana con neta acumulada ≥ 0",
      "pilotbiz.outputs.row.ltv.label": "LTV del suscriptor (12 meses)",
      "pilotbiz.outputs.row.ltv.formula": "neta × (1 − retención^12) / churn",
      "pilotbiz.outputs.row.ltv-cac.label": "Ratio LTV : CAC",
      "pilotbiz.outputs.row.ltv-cac.formula": "LTV / CAC (CAC asumido S/. 15)",
      "pilotbiz.outputs.row.ltv-cac.note": "LTV:CAC ≥ 3:1 es el benchmark de economía de suscripción (Recurly, Chargebee). Bajo 2:1 el canal no escala rentablemente.",

      "pilotbiz.section.sensitivity.badge": "Sección 05 · Análisis de sensibilidad",
      "pilotbiz.section.sensitivity.title": "Tornado — qué variables mueven la aguja",
      "pilotbiz.section.sensitivity.meta": "Una a la vez · ±20% en costos · ±10pp en tasas",
      "pilotbiz.sensitivity.subtitle":
        "Un diagrama de tornado flexa cada variable una a la vez mientras mantiene las demás en el caso base. La barra más larga es la variable que más importa. Si el costo del verde ±20% mueve la utilidad neta más que el attach ±10pp, el sourcing de grano es el punto de palanca. Si la canibalización ±10pp la mueve más, el sourcing de demanda (nuevos vs. regulares existentes) lo es. Los tornados son la herramienta estándar de sensibilidad una a la vez; para análisis conjunto completo corre un Monte Carlo (Saltelli et al. 2008, Global Sensitivity Analysis).",
      "pilotbiz.sensitivity.col.variable": "Variable",
      "pilotbiz.sensitivity.col.low": "Bajo",
      "pilotbiz.sensitivity.col.base": "Base",
      "pilotbiz.sensitivity.col.high": "Alto",
      "pilotbiz.sensitivity.col.swing": "Impacto en utilidad neta",
      "pilotbiz.sensitivity.var.green-bean": "Costo del verde (±20%)",
      "pilotbiz.sensitivity.var.attach": "Attach de acompañ. (±10pp)",
      "pilotbiz.sensitivity.var.side-margin": "Margen acompañ. (±20%)",
      "pilotbiz.sensitivity.var.visits": "Visitas por semana (±0.5)",
      "pilotbiz.sensitivity.var.cannibal": "Canibalización (±10pp)",
      "pilotbiz.sensitivity.var.churn": "Churn (±5pp)",
      "pilotbiz.sensitivity.var.sub-price": "Precio de suscripción (±S/. 2)",

      "pilotbiz.section.weekly.badge": "Sección 06 · Proyección de 12 semanas",
      "pilotbiz.section.weekly.title": "P&L semana a semana",
      "pilotbiz.section.weekly.meta": "Altas editables · totales en vivo",
      "pilotbiz.weekly.subtitle":
        "Cada semana muestra: suscriptores activos (de la curva, editable), ingreso (suscripción prorrateada + acompañ + retail), costo variable (café + vaso + mano de obra), gasto fijo prorrateado, pérdida por canibalización, y utilidad neta. El acumulado es el total corrido. La semana de equilibrio es cuando el acumulado cruza cero.",
      "pilotbiz.weekly.col.week": "Sm",
      "pilotbiz.weekly.col.subs": "Subs",
      "pilotbiz.weekly.col.rev": "Ingreso",
      "pilotbiz.weekly.col.var-cost": "Csto var",
      "pilotbiz.weekly.col.overhead": "Fijo",
      "pilotbiz.weekly.col.cannibal": "Canib",
      "pilotbiz.weekly.col.net": "Neta",
      "pilotbiz.weekly.col.cumulative": "Acum",
      "pilotbiz.weekly.breakeven-reached": "Equilibrio alcanzado en la semana {week}",
      "pilotbiz.weekly.breakeven-not-reached": "Equilibrio no alcanzado dentro de la ventana del piloto",
      "pilotbiz.weekly.reset": "Volver a la curva",

      "pilotbiz.section.monthly.badge": "Sección 07 · P&L de 12 meses",
      "pilotbiz.section.monthly.title": "Si el piloto gradúa — ¿cómo se ve el año uno?",
      "pilotbiz.section.monthly.meta": "Condicional a go-criteria cumplidos · tope 200",
      "pilotbiz.monthly.subtitle":
        "El piloto corre meses 1–3. Si los go-criteria se cumplen en la semana 12, el canal gradúa y crece: +5 suscriptores netos/mes en meses 4–8, +10/mes en meses 9–12, topeado a 200 para quedar dentro de la capacidad de una cafetería. El churn se aplica a la base activa cada mes. El P&L abajo muestra el resultado proyectado; el acumulado es la utilidad bancada del año uno.",
      "pilotbiz.monthly.col.month": "Mes",
      "pilotbiz.monthly.col.start": "Subs inicio",
      "pilotbiz.monthly.col.new": "Nuevos",
      "pilotbiz.monthly.col.churned": "Bajas",
      "pilotbiz.monthly.col.end": "Subs fin",
      "pilotbiz.monthly.col.rev": "Ingreso",
      "pilotbiz.monthly.col.var-cost": "Csto var",
      "pilotbiz.monthly.col.fixed": "Fijo",
      "pilotbiz.monthly.col.net": "Neta",
      "pilotbiz.monthly.col.cumulative": "Acum",
      "pilotbiz.monthly.pilot-phase": "Piloto",
      "pilotbiz.monthly.scale-phase": "Escala",
      "pilotbiz.monthly.year-totals": "Totales año 1",
      "pilotbiz.monthly.year-revenue": "Ingreso",
      "pilotbiz.monthly.year-net": "Utilidad neta",

      "pilotbiz.section.decision.badge": "Sección 08 · Marco de decisión",
      "pilotbiz.section.decision.title": "Go · kill · escala",
      "pilotbiz.section.decision.meta": "Las reglas que deciden el destino del piloto",
      "pilotbiz.decision.go.title": "Criterios go — graduar el piloto",
      "pilotbiz.decision.go.body":
        "Los cuatro deben cumplir en la semana 12: (1) utilidad neta por suscriptor ≥ S/. 8/mes, (2) attach de acompañamientos ≥ 45% sostenido 4 semanas consecutivas, (3) canibalización ≤ 40% (i.e. ≥60% de suscriptores son regulares nuevos), (4) churn ≤ 8%. Si los cuatro se cumplen, el canal gradúa a permanente y la proyección a 12 meses de la Sección 07 se vuelve el plan operativo.",
      "pilotbiz.decision.kill.title": "Criterios kill — parar el piloto limpio",
      "pilotbiz.decision.kill.body":
        "Cualquiera dispara un kill: (1) utilidad neta por suscriptor bajo cero después de 60 días, (2) attach de acompañamientos bajo 40% después de 30 días a pesar de promoción activa, (3) canibalización sobre 50%, (4) churn sobre 15%. Un kill no es un fracaso — un kill documentado con razones medidas vale más que un piloto que se apaga en silencio. El tope de 50 existe para que el kill cueste menos de S/. 1,000 en utilidad perdida.",
      "pilotbiz.decision.scale.title": "Criterios de escala — crecer más allá de 50",
      "pilotbiz.decision.scale.body":
        "Escala solo cuando: (1) todos los go-criteria cumplidos por 4 semanas consecutivas, (2) el turno de la mañana tiene capacidad de barista libre en pico (8:15–8:45am) verificado por tiempo y movimiento, (3) el tostadero tiene capacidad libre verificada por registros de tostado, (4) el flujo de caja financia la escala sin endeudamiento externo. Escala en incrementos de 25 (50 → 75 → 100) con una compuerta de observación de 4 semanas entre cada incremento.",
      "pilotbiz.decision.risk.title": "Top 5 riesgos",
      "pilotbiz.decision.risk.col.risk": "Riesgo",
      "pilotbiz.decision.risk.col.prob": "Probabilidad",
      "pilotbiz.decision.risk.col.impact": "Impacto",
      "pilotbiz.decision.risk.col.mitigation": "Mitigación",
      "pilotbiz.decision.risk.1.name": "Canibalización excede 50%",
      "pilotbiz.decision.risk.1.prob": "Media",
      "pilotbiz.decision.risk.1.impact": "Alto — mata el piloto",
      "pilotbiz.decision.risk.1.mitig": "Rastrea la fuente de alta desde el día uno; topea altas de regulares existentes a 60% del total en semanas 1–4.",
      "pilotbiz.decision.risk.2.name": "Capacidad de barista en pico 8:30am",
      "pilotbiz.decision.risk.2.prob": "Alta",
      "pilotbiz.decision.risk.2.impact": "Medio — cae la calidad de servicio",
      "pilotbiz.decision.risk.2.mitig": "Corre tiempo-y-movimiento en semana 2 y 6; suma un tercer turno de barista 7:30–10:00am si el pico excede 8 tickets/15 min.",
      "pilotbiz.decision.risk.3.name": "Capacidad del tostadero agotada",
      "pilotbiz.decision.risk.3.prob": "Baja",
      "pilotbiz.decision.risk.3.impact": "Medio — sube el costo marginal",
      "pilotbiz.decision.risk.3.mitig": "Revisa registros de tostado en mes 2; si la demanda de suscripción requiere comprar más verde, recorre el modelo con el nuevo costo de grano.",
      "pilotbiz.decision.risk.4.name": "Fatiga del suscriptor (churn > 12%)",
      "pilotbiz.decision.risk.4.prob": "Media",
      "pilotbiz.decision.risk.4.impact": "Medio — LTV cae bajo CAC",
      "pilotbiz.decision.risk.4.mitig": "Rota el microlote «gramo del mes»; corre la tarjeta de 8 sellos (Nunes & Drèze 2006); manda un WhatsApp de reactivación en la semana 4 de inactividad.",
      "pilotbiz.decision.risk.5.name": "Quiebre de stock de masas",
      "pilotbiz.decision.risk.5.prob": "Media",
      "pilotbiz.decision.risk.5.impact": "Bajo — el margen de acompañ. toma un golpe de 1 semana",
      "pilotbiz.decision.risk.5.mitig": "Mantén un buffer de masas de mañana de 1.5×; chequeo diario de prep a las 6:30am; proveedor backup identificado.",

      "pilotbiz.section.science.badge": "Sección 09 · Respaldo científico",
      "pilotbiz.section.science.title": "La investigación detrás de cada supuesto",
      "pilotbiz.section.science.meta": "Citas · no opiniones",
      "pilotbiz.science.subtitle":
        "Cada supuesto y recomendación en el modelo está basado en investigación publicada o benchmarks de la industria. Abajo: la cita, el hallazgo, y cómo aplica a Ursa Mañana. Donde falta data específica de Ursa, el modelo lo dice explícitamente — el piloto existe para medirlo.",
      "pilotbiz.science.tab.subscription": "Economía de suscripción",
      "pilotbiz.science.tab.coffee": "Unit economics de café",
      "pilotbiz.science.tab.behavioral": "Economía conductual",
      "pilotbiz.science.tab.pricing": "Psicología de precios",
      "pilotbiz.science.tab.methods": "Equilibrio & sensibilidad",
      "pilotbiz.science.subscription.title": "Economía de suscripción",
      "pilotbiz.science.subscription.1": "Recurly 2023 Subscription Benchmark Report — la mediana de churn mensual para suscripciones B2C está en 5–8%; 8–12% es la mediana para suscripciones de comida y bebida; >15% señala un problema estructural de retención. El trigger de kill de Ursa Mañana en >15% churn está puesto directo de este benchmark.",
      "pilotbiz.science.subscription.2": "Chargebee State of Subscriptions 2023 — LTV:CAC ≥ 3:1 es el umbral de escala universalmente citado; bajo 2:1 el canal no adquiere clientes rentablemente ni siquiera a alto volumen. El modelo usa CAC de S/. 15 (costo de adquisición in-store + WhatsApp) y calcula LTV desde utilidad neta y churn; si el ratio cae bajo 3:1 la proyección de escala de la Sección 07 se anula automáticamente.",
      "pilotbiz.science.subscription.3": "Recurly cohort analysis — el valor del suscriptor se concentra en los primeros 90 días; la cohorte que sobrevive al mes 3 tiene 4× el LTV de la cohorte que churnea en mes 1. La ventana de 12 semanas del piloto está puesta para leer esta señal de cohorte directamente, no para esperar al estado estable.",
      "pilotbiz.science.coffee.title": "Unit economics de cafetería",
      "pilotbiz.science.coffee.1": "Specialty Coffee Association (SCA) — el % de food cost guía para cafeterías de especialidad está en 25–35% para masas adjuntas a bebida (pastas, cookies, empanadas). El margen default del modelo (S/. 4.50 sobre un retail de S/. 5–8) cae dentro de este rango; si el food cost real excede 35% la palanca de attach deja de funcionar.",
      "pilotbiz.science.coffee.2": "SCA Roasters Guild — la pérdida de masa en tostado para perfiles de filtrado de especialidad es 14–18% en masa; el modelo usa 85% de rendimiento por defecto (15% de pérdida), el medio del rango. Los tostados claros pierden más; los oscuros pierden menos. El número afecta directamente el costo de tostado por taza.",
      "pilotbiz.science.coffee.3": "SCA Barista Time & Motion (2019) — barista entrenado en máquina de 2 grupos promedia 1.5–3 minutos por taza para bebidas espresso, 3–5 minutos para filtrado. El modelo usa 2.5 minutos por defecto (promedio espresso/americano); modelos pesados en filtrado deberían subir a 3.5.",
      "pilotbiz.science.coffee.4": "Benchmark tostadero propio vs. wholesale — las cafeterías que compran tostado al por mayor típicamente pagan S/. 2.50–3.50 por taza de costo marginal; las de tostadero propio pagan S/. 1.20–1.80. Esta brecha es la razón estructural por la que la suscripción Ursa Mañana funciona a S/. 20 y no funcionaría en la mayoría de competidores de Lima.",
      "pilotbiz.science.behavioral.title": "Economía conductual & lealtad",
      "pilotbiz.science.behavioral.1": "Kivetz, Urminsky & Zheng (2006, JMR) — el efecto de progreso dotado: clientes con ventaja artificial hacia una meta la completan más rápido. Aplicado: una tarjeta pre-sellada con 2 de 8 casilleros duplica la tasa de completitud vs una en blanco. La tarjeta de sellos de Ursa Mañana debería entregarse pre-sellada.",
      "pilotbiz.science.behavioral.2": "Nunes & Drèze (2006, JCR) — la hipótesis del gradiente de meta: la motivación aumenta al acercarse a la meta. La tarjeta de 8 sellos explota esto directamente; la 7ma y 8va visita ven tasas de attach más altas que la 1ra y 2da.",
      "pilotbiz.science.behavioral.3": "Thaler (1985, Marketing Science) — contabilidad mental: los clientes dividen el gasto en categorías; una suscripción mueve el café de «costo variable por visita» a «costo hundido mensual», lo que reduce el dolor de pagar por visita y aumenta la disposición a añadir un acompañamiento. La suscripción hace que el café se sienta gratis; el acompañamiento es donde viven la relación y el margen.",
      "pilotbiz.science.behavioral.4": "Dreze & Nunes (2009, JCR) — los programas de lealtad que ofrecen recompensas experienciales (un acompañamiento gratis «bear's pick») superan a los basados en descuento en retención por 18–24%. La tarjeta de Ursa Mañana premia el 8vo acompañamiento con un «bear's pick» gratis, no con un descuento.",
      "pilotbiz.science.pricing.title": "Psicología de precios",
      "pilotbiz.science.pricing.1": "Thomas & Morwitz (2005, JCR) — el charm pricing (terminado en 9, 99) señala valor pero se lee barato; los números redondos (S/. 20) señalan calidad. Ursa Mañana a S/. 20 señala deliberadamente calidad de especialidad; la alternativa S/. 19.99 subiría altas pero bajaría la calidad percibida y atraería suscriptores sensibles al precio que churnean más rápido.",
      "pilotbiz.science.pricing.2": "Ariely (2008, Predictably Irrational) — anclaje de precio: el cliente evalúa S/. 20 contra el set de comparación, no en términos absolutos. Anclar contra el cappuccino de S/. 12 (S/. 20 = «1.7 cappuccinos, ilimitado») hace que la suscripción se sienta barata; anclar contra un café de S/. 5 (S/. 20 = «4 cafés») la hace sentir cara. La landing ancla deliberadamente contra el cappuccino.",
      "pilotbiz.science.pricing.3": "Gourville (1998, HBR) — la regla del «9×9»: el precio de suscripción funciona cuando la cuota mensual es menor a 9× el precio de compra única equivalente y el precio de compra única es al menos S/. 2. S/. 20 mensual vs S/. 12 cappuccino único satisface ambos; la alternativa S/. 25 rompe la regla del 9× y encoge la base addressable en un 30% estimado.",
      "pilotbiz.science.pricing.4": "Anclaje contra S/. 15 y S/. 25 — la landing muestra deliberadamente el set de comparación; esta es una técnica reconocida llamada «price bracketing» (Dolan & Simon 1996, Power Pricing). El bracket hace que S/. 20 se lea como el medio obvio, no como un precio que la cafetería inventó.",
      "pilotbiz.science.methods.title": "Métodos de equilibrio & sensibilidad",
      "pilotbiz.science.methods.1": "Método de margen de contribución — volumen de equilibrio = Costos fijos / (Precio − Costo variable por unidad). El modelo aplica esto directo: suscriptores de equilibrio = gasto fijo / utilidad neta por suscriptor. Es el método estándar de contabilidad gerencial (Horngren, Datar & Rajan 2015, Cost Accounting: A Managerial Emphasis).",
      "pilotbiz.science.methods.2": "Diagrama de tornado — análisis de sensibilidad uno a la vez donde cada variable se flexa mientras las demás se mantienen en caso base. La barra más larga es la variable más influyente. Es la herramienta estándar para filtrar qué variables merecen análisis más profundo (Eschenbach 1992, Engineering Economy).",
      "pilotbiz.science.methods.3": "Simulación Monte Carlo — para sensibilidad conjunta completa (Saltelli, Ratto, Andres et al. 2008, Global Sensitivity Analysis: The Primer). El tornado de la Sección 05 es una herramienta de filtrado; si el tornado muestra dos o más variables con swing comparable, corre un Monte Carlo con inputs distribucionales para calcular la probabilidad de equilibrio. La data medida del piloto es el input a ese Monte Carlo.",
      "pilotbiz.science.methods.4": "Lean Startup construir-medir-aprender (Ries 2011) — el piloto de 12 semanas es el ciclo honesto mínimo: construye la oferta, mide los cuatro go-criteria, aprende si perseverar (graduar), pivotar (revisar la oferta), o matar. El tope de 50 suscriptores mantiene el costo del ciclo bajo S/. 1,000 en utilidad perdida.",

      "pilotbiz.section.actions.badge": "Próximos pasos",
      "pilotbiz.section.actions.title": "Del modelo a la acción",
      "pilotbiz.actions.subtitle":
        "Tres cosas para hacer esta semana: (1) reemplaza cada input default con tus números reales de registros de tostado, facturas, y planilla; (2) imprime esta página y llévala a la próxima reunión de equipo; (3) pon la fecha de kill-criteria en tu calendario en semana 4, semana 8, y semana 12.",
      "pilotbiz.actions.button.calculator": "Abrir la calculadora simple",
      "pilotbiz.actions.button.experiments": "Abrir el seguimiento de experimentos",
      "pilotbiz.actions.button.landing": "Ver la landing del cliente",
      "pilotbiz.actions.button.reset": "Restablecer todos los inputs",

      "pilotbiz.assumption.callout.title": "Lo que este modelo no asume",
      "pilotbiz.assumption.callout.body":
        "Sin viralidad. Sin gasto de marketing. Sin pronóstico de cuenta de suscriptores más allá de la curva que tú pones. Sin inflación asumida en el costo del verde. El modelo es honesto sobre lo que no sabe — el piloto existe para medir esos desconocidos, no para asumirlos fuera.",

      /* Piloto · lente de oferta (Hormozi) */
      "pilotbiz.lens.badge": "Lente de oferta",
      "pilotbiz.lens.title": "Lo que el piloto está probando de verdad, en términos de oferta",
      "pilotbiz.lens.body":
        "En la lente de oferta, el piloto está probando si el resultado percibido por el socio — un ritual matutino sin fricción en Alcanfores 183 — es suficientemente alto para superar el esfuerzo de cambiar un hábito de café existente. El conteo de socios de break-even es el proxy operacional; la métrica real que el marco nos pide evidenciar es si los primeros 50 socios se renuevan en el mes dos. Esa tasa de renovación es la prueba de Likelihood que la lente de oferta requiere antes de cualquier decisión de escalamiento. Desde una perspectiva conductual, el cupo del piloto mismo es una señal Sutherland — la escasez hace que la oferta se sienta elegida, no vendida — y la ventana de kill de 60 días es la reversión de riesgo que le permite al dueño comprometerse sin defender por sunk cost un modelo que no paga.",

      /* ---- Tarjeta de Auditoría de Marca (Herramienta T13) ---- */
      "scorecard.lede":
        "Esta tarjeta compila cuatro lecturas — el Bear Score en diez superficies que ve el cliente, los cuatro pilares de marca, el estado del seguimiento de experimentos y el veredicto de preservación del espíritu — en una página imprimible y copiable. La pregunta que responde: ¿dónde está realmente Ursa ahora mismo, y qué es lo próximo a arreglar? El compuesto es un promedio ponderado 60/40 de consistencia de superficies y fortaleza de pilares; ambos inputs son datos de snapshot, no proyecciones. Los botones de imprimir y copiar producen el mismo contenido de dos maneras — uno para papel, otro para pegar en un update de Slack o WhatsApp. Úsala semanalmente durante el plan de 90 días; recompila cada vez que una superficie cambie o un experimento se gradúe.",
      "scorecard.meta.grade": "Nota",
      "scorecard.meta.surfaces": "Superficies",
      "scorecard.meta.surfaces-value": "{n} evaluadas",
      "scorecard.meta.experiments": "Experimentos",
      "scorecard.meta.experiments-value": "{n} seguidos",

      "scorecard.action.print": "Imprimir tarjeta",
      "scorecard.action.copy": "Copiar como texto",
      "scorecard.action.copied": "Copiado",
      "scorecard.action.full-audit": "Auditoría completa",

      "scorecard.card.title": "Ursa Coffee Roasters",
      "scorecard.card.subtitle": "Tarjeta de Auditoría de Marca · 2026-08-01",
      "scorecard.card.composite-meta": "{composite}/100 · {verdict}",

      "scorecard.metric.bear-score": "Bear Score",
      "scorecard.metric.pillars-avg": "Promedio pilares",
      "scorecard.metric.experiments-tracked": "Experimentos",
      "scorecard.metric.experiments-tracked-suffix": " seguidos",
      "scorecard.metric.composite": "Compuesto",

      "scorecard.pillars.title": "Pilares de marca",
      "scorecard.pillar.bear.name": "Motivo del oso",
      "scorecard.pillar.art-nouveau.name": "Lenguaje Art Nouveau",
      "scorecard.pillar.palette.name": "Paleta de marrones y verdes",
      "scorecard.pillar.roastery.name": "Credibilidad de tostadora",

      "scorecard.strength.title": "Mayor fortaleza",
      "scorecard.gap.title": "Mayor brecha",

      "scorecard.experiments.title": "Seguimiento de experimentos · {n} experimentos",
      "scorecard.experiments.status.proposed": "Propuesto",
      "scorecard.experiments.status.running": "Corriendo",
      "scorecard.experiments.status.passed": "Pasado",
      "scorecard.experiments.status.killed": "Matado",

      "scorecard.spirit.title": "Veredicto de preservación del espíritu",
      "scorecard.spirit.headline": "El plan cuida al oso, al gramo y al verde.",
      "scorecard.spirit.body":
        "El refinamiento conservador es el sistema permanente. El Nivel 2 (crecimiento distintivo) es una piel reversible de seis meses. El Nivel 3 (experimental) es solo estacional. El rebrand total está explícitamente descartado — el oso se queda en la taza, el gramo se queda en la bolsa, los verdes se quedan en la pared.",

      "scorecard.footer.snapshot": "Compilado de fuentes públicas · Snapshot 2026-08-01",
      "scorecard.footer.tagline": "Un gramo a la vez",

      "scorecard.detail.badge": "Detalle",
      "scorecard.detail.title": "Desglose de consistencia por superficie",
      "scorecard.detail.meta": "{n} superficies evaluadas",

      "scorecard.surface.ig-bio": "Bio y lema de Instagram",
      "scorecard.surface.post-covers": "Portadas de posts y Reels",
      "scorecard.surface.caption-language": "Lenguaje de captions",
      "scorecard.surface.packaging": "Empaque (bolsas de grano)",
      "scorecard.surface.cups-collateral": "Vasos y material en local",
      "scorecard.surface.storefront": "Fachada e interior",
      "scorecard.surface.gbp": "Google Business Profile",
      "scorecard.surface.tripadvisor": "Presencia en TripAdvisor",
      "scorecard.surface.rappi": "Menú de Rappi / delivery",
      "scorecard.surface.website": "Sitio web",

      "scorecard.copy.title": "URSA COFFEE — TARJETA DE AUDITORÍA DE MARCA",
      "scorecard.copy.compiled": "Compilado: 2026-08-01 · Miraflores, Lima",
      "scorecard.copy.divider": "========================================",
      "scorecard.copy.overall": "NOTA GENERAL: {letter} ({composite}/100)",
      "scorecard.copy.spirit-verdict": "Veredicto de espíritu: {verdict}",
      "scorecard.copy.bear-score-section": "BEAR SCORE (consistencia de identidad)",
      "scorecard.copy.surfaces-avg": "  Promedio superficies: {n}/100",
      "scorecard.copy.pillars-avg": "  Promedio pilares:     {n}/100",
      "scorecard.copy.composite": "  Compuesto:            {n}/100",
      "scorecard.copy.brand-pillars-section": "PILARES DE MARCA",
      "scorecard.copy.surface-consistency-section": "CONSISTENCIA POR SUPERFICIE",
      "scorecard.copy.experiments-section": "SEGUIMIENTO DE EXPERIMENTOS ({n} total)",
      "scorecard.copy.experiments-detail":
        "  Propuestos: {p} · Corriendo: {r} · Pasados: {pa} · Matados: {k}",
      "scorecard.copy.top-strength": "MAYOR FORTALEZA: {name}",
      "scorecard.copy.biggest-gap": "MAYOR BRECHA:    {name}",
      "scorecard.copy.spirit-section": "VEREDICTO DE PRESERVACIÓN DEL ESPÍRITU",
      "scorecard.copy.spirit-line-1": "  El plan cuida al oso, al gramo y al verde.",
      "scorecard.copy.spirit-line-2": "  El refinamiento conservador es el sistema permanente.",
      "scorecard.copy.spirit-line-3": "  El rebrand total está descartado.",

      /* ---- Análisis de Tarjeta de Loyalty (Herramienta T14) ---- */
      "view.loyalty.eyebrow": "Herramienta T14 · Loyalty y ciencia de retención",
      "view.loyalty.title":
        "La tarjeta de 8 visitas — la herramienta de retención más propia de Ursa, decodificada.",

      "loyalty.lede":
        "La tarjeta de loyalty de Ursa vive donde el cliente ya mira — dentro de Apple Wallet y Google Pay, agregada con un toque vía QR o NFC, sin app que descargar y sin onboarding que abandonar. Ocho visitas ganan un café gratis, y ocho es el número deliberado: lo suficientemente cerca para sentirse alcanzable, lo suficientemente largo para construir un hábito. Esta vista desglosa los cuatro principios de ciencia del comportamiento que hacen funcionar la tarjeta de 8 visitas, modela la economía de forma interactiva — un café gratis le cuesta a Ursa S/. 1.20–1.80 en costo marginal; las visitas que lo ganan generan muchas veces eso en ingreso pagado — y nombra las seis tácticas de tarjeta que convierten un cartón pasivo en un motor de retención. La tarjeta funciona con itsloyaleats by bytecampperu, que maneja la generación del pass y el push; Ursa es dueña de los activos de marca, de la forma de huella de oso y de la relación con el socio.",
      "loyalty.meta.platform": "Plataforma",
      "loyalty.meta.platform-value": "itsloyaleats by bytecampperu",
      "loyalty.meta.mechanic": "Mecánica",
      "loyalty.meta.mechanic-value": "8 visitas = 1 café gratis",
      "loyalty.meta.channels": "Canales",
      "loyalty.meta.channels-value": "Apple Wallet + Google Pay",
      "loyalty.meta.no-app": "Sin app",
      "loyalty.meta.no-app-value": "Nativa del wallet · un toque para agregar",

      "loyalty.section.02.badge": "El pass",
      "loyalty.section.02.title": "La tarjeta de loyalty como vive en el wallet",
      "loyalty.section.02.meta": "Mockup · relación de aspecto 1.6 : 1 · degradé verde a tostado",
      "loyalty.pass.brand": "Ursa Coffee Roasters",
      "loyalty.pass.address": "Alcanfores 183 · Miraflores",
      "loyalty.pass.label-card-es": "Tarjeta de Fidelidad",
      "loyalty.pass.label-card-en": "Loyalty Card",
      "loyalty.pass.remaining": "{n} visitas más para tu café gratis",
      "loyalty.pass.stamped": "{filled} de {total} huellas selladas",
      "loyalty.pass.member-label": "Socio",
      "loyalty.pass.member-name": "Maria Elena R.",
      "loyalty.pass.member-since-label": "Miembro desde",
      "loyalty.pass.member-since-value": "Mar 2026",
      "loyalty.pass.add-to-wallet": "Agregar a Apple Wallet",
      "loyalty.pass.pill.apple": "Apple Wallet",
      "loyalty.pass.pill.google": "Google Pay",
      "loyalty.pass.pill.no-app": "Sin app que descargar",
      "loyalty.pass.pill.one-tap": "Un toque para agregar · QR / NFC",
      "loyalty.pass.pill.lock-screen": "Visible en la pantalla de bloqueo",

      "loyalty.why-wallet.title": "Por qué una tarjeta de wallet, no una app",
      "loyalty.why-wallet.body":
        "Un pass de wallet vive donde el cliente ya mira — en la pantalla de bloqueo, en la grilla del wallet al lado de sus tarjetas de crédito. Sin download. Sin permisos. Sin onboarding abandonado. itsloyaleats maneja la generación del pass, las actualizaciones de sellos y las notificaciones push; Ursa aporta los activos de marca y la integración con el POS. La tarjeta se actualiza en el mismo lugar — sin reimpresión, sin reset, sin tarjeta de socio perdida en una chompa.",
      "loyalty.why-wallet.bullet.1": "Agregado con un toque vía QR en caja o NFC tap",
      "loyalty.why-wallet.bullet.2": "Visible en pantalla de bloqueo cuando estás cerca de Alcanfores 183",
      "loyalty.why-wallet.bullet.3": "Notificaciones push para actualizaciones de sellos y premios",
      "loyalty.why-wallet.bullet.4": "Las actualizaciones llegan al pass en tiempo real — sin reimpresión, sin reset",
      "loyalty.why-8.title": "Por qué 8, no 10",
      "loyalty.why-8.body":
        "Una tarjeta de loyalty de cafetería funciona mejor en el rango de 8–12 sellos. Ursa elige 8: la meta se siente más cerca que en una tarjeta de 10 sellos en cualquier punto equivalente, lo que afila el efecto del goal gradient. Ocho también es lo suficientemente corto para que un regular semanal complete una tarjeta cada dos meses — una cadencia sana de premio que no deja enfriar la relación entre recompensas.",
      "loyalty.paw-stamp.title": "La huella de oso como sello",
      "loyalty.paw-stamp.body":
        "El sello mismo usa la huella de oso en vez de un círculo genérico. Cada huella impresa es un pequeño acto de branding — y ningún competidor de Lima tiene un personaje animal para poner en la suya. La huella no cuesta nada extra en un pass digital; costaría horas de diseño en una tarjeta de papel.",

      "loyalty.section.03.badge": "Ciencia del comportamiento",
      "loyalty.section.03.title": "Cuatro principios que hacen funcionar la tarjeta de 8 visitas",
      "loyalty.section.03.meta": "Cada tarjeta: principio · cómo aplica · recomendación específica",
      "loyalty.principle.endowed-progress.name": "Efecto de Progreso Dotado",
      "loyalty.principle.endowed-progress.source": "Kivetz, Urminsky & Zheng (2006)",
      "loyalty.principle.endowed-progress.finding":
        "Los clientes que reciben una cabeza de start en una tarjeta de loyalty son ~82% más propensos a completarla.",
      "loyalty.principle.endowed-progress.apply":
        "Da a los nuevos socios de Ursa 1–2 sellos gratis en su tarjeta de 8 sellos al registrarse. Una tarjeta que dice «2 de 8» se siente ya empezada; una que dice «0 de 8» se siente como empezar de cero.",
      "loyalty.principle.endowed-progress.rec":
        "Sella 2 huellas gratis en cada tarjeta nueva agregada en local. Costo: S/. 6 marginal — se recupera en la visita 3.",
      "loyalty.principle.endowment.name": "Efecto de Dotación",
      "loyalty.principle.endowment.source": "Thaler (1980) · Kahneman, Knetsch & Thaler (1990)",
      "loyalty.principle.endowment.finding":
        "La gente valora más las cosas una vez que siente que son suyas. Una tarjeta con su nombre es de ellos; una genérica es de la cafetera.",
      "loyalty.principle.endowment.apply":
        "Personaliza cada pass con el nombre del socio («Socio: Maria Elena R.»). La tarjeta vive en su celular — es «suya» desde el momento en que la agregan.",
      "loyalty.principle.endowment.rec":
        "Captura el nombre del socio al registro (QR o WhatsApp opt-in). Muéstralo en el frente del pass en la tipografía Cormorant.",
      "loyalty.principle.goal-gradient.name": "Efecto de Gradiente de Meta",
      "loyalty.principle.goal-gradient.source": "Kivetz, Urminsky & Zheng (2006) · Nunes & Drèze (2006)",
      "loyalty.principle.goal-gradient.finding":
        "La motivación se acelera conforme el cliente se acerca a la meta. La tarjeta «acelera» psicológicamente cerca del final.",
      "loyalty.principle.goal-gradient.apply":
        "El diseño de 8 sellos ya explota esto: con 5 huellas llenas, solo 3 están entre el socio y su café gratis. Una tarjeta de 10 sellos en el mismo punto se sentiría el doble de lejos.",
      "loyalty.principle.goal-gradient.rec":
        "Dispara una push en el sello 6: «2 visitas más para tu café gratis». La visibilidad en pantalla de bloqueo hace tangible el gradiente.",
      "loyalty.principle.small-wins.name": "Pequeñas Victorias / Loop de Dopamina",
      "loyalty.principle.small-wins.source": "Duhigg (2012) · teoría de autodeterminación",
      "loyalty.principle.small-wins.finding":
        "Cada sello es un micro-premio. La liberación de dopamina construye el loop del hábito: gatillo → rutina → recompensa.",
      "loyalty.principle.small-wins.apply":
        "La actualización del sello de cada visita se empuja al pass en casi tiempo real. El socio ve aparecer la huella, subir el contador y acercarse la meta — tres micro-premios en una sola transacción.",
      "loyalty.principle.small-wins.rec":
        "Configura itsloyaleats para empujar la actualización del sello dentro de los 60 segundos de cerrado el POS. La «huella apareciendo» es el premio.",
      "loyalty.principle.rec-label": "Recomendación",
      "loyalty.principle.82-callout.title": "El número del 82% — léelo con cuidado",
      "loyalty.principle.82-callout.body":
        "El estudio de Kivetz–Urminsky–Zheng (2006) encontró ~82% más completion cuando se daba a los clientes una cabeza de start de 2 sellos en una tarjeta de 10. Ursa usa una tarjeta de 8 visitas, y el tamaño del efecto en tarjetas de 8 visitas no ha sido validado independientemente. El mecanismo (progreso ilusorio → gradiente de meta) es robusto, pero la cifra específica de lift debe tratarse como indicativa, no predictiva. Pruébalo: A/B nuevos socios con 0 vs 1 sello dotado por 90 días; mide la tasa de completion. Para si el lift es < 10%.",

      "loyalty.section.04.badge": "La economía",
      "loyalty.section.04.title": "La matemática de 8 visitas — interactiva",
      "loyalty.section.04.meta": "Edita cualquier input · las salidas recalculan en vivo",
      "loyalty.calc.inputs-title": "Inputs",
      "loyalty.calc.field.avg-ticket.label": "Ticket promedio por visita",
      "loyalty.calc.field.avg-ticket.hint":
        "Por defecto S/. 14 — un café + acompañamiento de pastry a precios de Miraflores.",
      "loyalty.calc.field.visits-complete.label": "Visitas para completar una tarjeta",
      "loyalty.calc.field.visits-complete.hint":
        "Por defecto 8 — la mecánica elegida por Ursa. Prueba con 10 para ver el costo del goal gradient.",
      "loyalty.calc.field.free-cost.label": "Costo marginal del café gratis",
      "loyalty.calc.field.free-cost.hint":
        "La tostadora propia de Ursa mantiene el costo marginal en S/. 1.20–1.80/taza; S/. 3 es el costo total conservador de un café de premio.",
      "loyalty.calc.field.endowed.label": "Sellos dotados (nuevos socios)",
      "loyalty.calc.field.endowed.hint":
        "Sellos de cabeza de start regalados al registro. Cada uno cuesta S/. {cost} en costo marginal de premio si se canjea.",
      "loyalty.calc.field.cycles.label": "Ciclos para proyectar CLV",
      "loyalty.calc.field.cycles.hint":
        "A 8 visitas/ciclo y ~2 visitas/semana, 6 ciclos ≈ un año por regular.",
      "loyalty.calc.outputs.net-label": "Ingreso neto por ciclo",
      "loyalty.calc.outputs.net-formula": "{paid} visitas pagadas × {ticket} − {reward} premio",
      "loyalty.calc.metric.revenue-cycle": "Ingreso por ciclo",
      "loyalty.calc.metric.reward-cost": "Costo del premio",
      "loyalty.calc.metric.ratio": "Premio : ingreso",
      "loyalty.calc.metric.net-cycle": "Neto por ciclo",
      "loyalty.calc.clv.title": "Valor de vida del cliente",
      "loyalty.calc.clv.over": "en {cycles} ciclos",
      "loyalty.calc.clv.body":
        "Un café gratis (costo marginal {cost}) genera {revenue} de ingreso pagado por ciclo. El premio es {ratio}× más barato que el ingreso que dispara — la tarjeta de wallet es la táctica de retención de mayor ROI que Ursa puede desplegar.",
      "loyalty.calc.headline.title": "El titular",
      "loyalty.calc.headline.body":
        "Un café gratis le cuesta a Ursa ~{cost} en costo marginal. Las {paid} visitas que lo ganan generan {revenue} en ingreso — un retorno de {ratio}×. A lo largo de {cycles} ciclos, eso es {clv} de contribución neta por regular que completa sus tarjetas.",
      "loyalty.calc.benchmark.title": "El benchmark de ingreso",
      "loyalty.calc.benchmark.body":
        "Benchmarks publicados sugieren que un programa de loyalty bien llevado en una cafetería puede generar ~€14,000+ de ingreso neto anual con ~150 clientes regulares (después de costos de premio). Con los supuestos por defecto de Ursa arriba, 150 regulares × {clv}/año cada uno = {total} — cómodamente en el rango del benchmark incluso antes de contar las suscripciones Ursa Mañana vendidas en cruz.",

      "loyalty.section.05.badge": "Tácticas",
      "loyalty.section.05.title": "Seis tácticas de marketing para la tarjeta",
      "loyalty.section.05.meta": "Secuenciadas del registro a la recuperación de inactivos",
      "loyalty.tactic.1.title": "Dota 1–2 sellos a los nuevos socios",
      "loyalty.tactic.1.body":
        "Dispara el efecto de progreso desde el minuto uno. Una tarjeta «2 de 8» tiene una tasa de completion 5× mayor que una «0 de 8» en estudios publicados.",
      "loyalty.tactic.1.pill": "Disparo",
      "loyalty.tactic.2.title": "Personaliza con el nombre del socio",
      "loyalty.tactic.2.body":
        "Muestra «Socio: [Nombre]» en el frente del pass. La propiedad convierte la tarjeta de un cupón de proveedor en algo del socio.",
      "loyalty.tactic.2.pill": "Pertenencia",
      "loyalty.tactic.3.title": "Push en el sello 6",
      "loyalty.tactic.3.body":
        "Auto-dispara una notificación de pantalla de bloqueo: «2 visitas más para tu café gratis». El efecto del goal gradient es más fuerte en el último 25% de la tarjeta.",
      "loyalty.tactic.3.pill": "Push",
      "loyalty.tactic.4.title": "Geofence Alcanfores 183",
      "loyalty.tactic.4.body":
        "Recordatorios por ubicación se disparan cuando el socio camina dentro de 200m de la cafetera. Apple Wallet + Google Pay soportan esto de forma nativa.",
      "loyalty.tactic.4.pill": "Geo",
      "loyalty.tactic.5.title": "Cross-promociona Ursa Mañana en el reverso",
      "loyalty.tactic.5.body":
        "El reverso del pass tiene espacio para un logo, un CTA y un link. Úsalo para mostrar la suscripción de S/. 20/mes al segmento más leal.",
      "loyalty.tactic.5.pill": "Cross-sell",
      "loyalty.tactic.6.title": "Mide la velocidad de sellos",
      "loyalty.tactic.6.body":
        "Mide días entre sellos por socio. Velocidad menor a 14 días = hábito sano; mayor a 30 días = en riesgo — dispara una push de «te extrañamos» con un sello bonus.",
      "loyalty.tactic.6.pill": "Métrica",
      "loyalty.sequencing.title": "Secuenciación",
      "loyalty.sequencing.body":
        "Las tácticas 1–2 se disparan al registro (progreso dotado + pertenencia). Las tácticas 3–4 se disparan a mitad del ciclo (push del goal gradient + geofence). La táctica 5 vive permanente en el reverso del pass (cross-sell). La táctica 6 es el loop de recuperación de inactivos — una velocidad de sellos mayor a 30 días dispara un bonus de «te extrañamos». Juntas cubren el ciclo completo de retención desde el primer agregado hasta la recuperación de dormidos.",

      "loyalty.section.06.badge": "Comparación",
      "loyalty.section.06.title": "Cómo se compara la tarjeta de Ursa",
      "loyalty.section.06.meta": "Cuatro modelos de loyalty · columna de ventaja de Ursa",
      "loyalty.compare.col.model": "Modelo",
      "loyalty.compare.col.mechanic": "Mecánica",
      "loyalty.compare.col.friction": "Fricción para entrar",
      "loyalty.compare.col.data": "Datos capturados",
      "loyalty.compare.col.personalisation": "Personalización",
      "loyalty.compare.col.brand": "Expresión de marca",
      "loyalty.compare.row.ursa.name": "Tarjeta de wallet de Ursa (itsloyaleats)",
      "loyalty.compare.row.ursa.model": "Sello de 8 visitas · nativa del wallet",
      "loyalty.compare.row.ursa.friction": "Ninguna — agrega al wallet vía QR/NFC",
      "loyalty.compare.row.ursa.data": "Velocidad de sellos, tasa de completion, aperturas de push",
      "loyalty.compare.row.ursa.personalisation": "Nombre del socio en el frente del pass",
      "loyalty.compare.row.ursa.brand": "Sellos de huella de oso, paleta Art Nouveau",
      "loyalty.compare.row.coffeepass.name": "CoffeePass Perú",
      "loyalty.compare.row.coffeepass.model": "Plataforma de membresía · cuota mensual",
      "loyalty.compare.row.coffeepass.friction": "Login de app o web",
      "loyalty.compare.row.coffeepass.data": "Analítica centralizada de la plataforma",
      "loyalty.compare.row.coffeepass.personalisation": "Solo a nivel de cuenta",
      "loyalty.compare.row.coffeepass.brand": "UI genérica de la plataforma",
      "loyalty.compare.row.paper.name": "Tarjeta de papel tradicional",
      "loyalty.compare.row.paper.model": "10 sellos · física",
      "loyalty.compare.row.paper.friction": "Cargar la tarjeta · perderla = reset",
      "loyalty.compare.row.paper.data": "Ninguno",
      "loyalty.compare.row.paper.personalisation": "A mano, en el mejor caso",
      "loyalty.compare.row.paper.brand": "Sellos de círculo genérico",
      "loyalty.compare.row.app.name": "Loyalty por app (custom)",
      "loyalty.compare.row.app.model": "10–12 sellos · app nativa",
      "loyalty.compare.row.app.friction": "Download + signup + permisos",
      "loyalty.compare.row.app.data": "Data de primera mano rica — si está instalada",
      "loyalty.compare.row.app.personalisation": "Cuenta + push",
      "loyalty.compare.row.app.brand": "Custom — al costo de dev",
      "loyalty.compare.advantage.ursa": "Ursa",
      "loyalty.compare.card.1.title": "Nativa del wallet",
      "loyalty.compare.card.1.body":
        "La tarjeta de wallet se agrega con un toque. El loyalty por app pierde 60–80% de los prospectos en el paso de download. Las tarjetas de papel se pierden en las chompas en quince días.",
      "loyalty.compare.card.2.title": "8 visitas, no 10",
      "loyalty.compare.card.2.body":
        "La mecánica de 8 visitas se siente más cerca en cualquier punto equivalente — un goal gradient más fuerte que el default de 10 sellos que la mayoría de competidores hereda de programas legacy.",
      "loyalty.compare.card.3.title": "Con marca de oso",
      "loyalty.compare.card.3.body":
        "El sello de huella es ownable. Ningún competidor de Lima tiene un personaje animal. Cada sello en la tarjeta es un pequeño evento de branding que refuerza la identidad de Ursa.",

      "loyalty.section.07.badge": "Refinamientos",
      "loyalty.section.07.title": "Mejoras de estilo + marketing",
      "loyalty.section.07.meta": "Cuatro mejoras específicas · todas reversibles · todas bear-safe",
      "loyalty.improvement.1.title": "Usa el oso geométrico como forma del sello",
      "loyalty.improvement.1.body":
        "Reemplaza los círculos genéricos con el glifo de la huella. Cada sello se vuelve una huella de oso en la tarjeta — únicamente de Ursa, reconocible al instante en la grilla del wallet.",
      "loyalty.improvement.1.impact": "Reconocimiento de marca",
      "loyalty.improvement.2.title": "Rota un «dato de oso» en el reverso semanalmente",
      "loyalty.improvement.2.body":
        "Trivia del oso de anteojos andino, datos de origen de café, notas de curva de tostado. Le da a los socios una razón para voltear el pass entre sellos — deleite barato, voz ownable.",
      "loyalty.improvement.2.impact": "Engagement",
      "loyalty.improvement.3.title": "Martes de doble sello",
      "loyalty.improvement.3.body":
        "El martes es el día más flojo de cafeterías en Miraflores. Dos sellos por visita los martes mueve la demanda sin descontar el precio — y acelera el goal gradient.",
      "loyalty.improvement.3.impact": "Moldeo de demanda",
      "loyalty.improvement.4.title": "Auto-sella a los suscriptores Ursa Mañana",
      "loyalty.improvement.4.body":
        "Los suscriptores ya pagan S/. 20/mes por café matutino ilimitado. Auto-sella una huella por visita para que la tarjeta se apile encima — el café gratis se vuelve una sorpresa del suscriptor, no un sustituto.",
      "loyalty.improvement.4.impact": "Stack de retención",
      "loyalty.spirit-check.title": "Chequeo de preservación del espíritu",
      "loyalty.spirit-check.body":
        "Cada mejora arriba fue filtrada contra el oso, el gramo y el verde. El sello de huella fortalece al oso. La rotación de datos del oso refuerza la voz Art Nouveau (pilar verde) a costo casi cero. El martes de doble sello mueve la demanda sin descontar el precio — cuida el gramo de craft paciente. Auto-sellar a los suscriptores apila retención sobre retención sin cambiar lo que paga el socio. Ninguno de estos refinamientos se confundiría con la táctica de una cafetera genérica.",

      "loyalty.section.08.badge": "Referencia",
      "loyalty.section.08.title": "Dónde vive esto en el dossier",
      "loyalty.button.growth": "Abrir Módulo 04 · Growth y Retención",
      "loyalty.button.calculator": "Abrir Calculadora Ursa Mañana",
    },
  },
};

/** Default language when no preference is stored. English is the project default. */
export const DEFAULT_LANGUAGE: Language = "en";

/** Storage key for the user's language preference. */
export const I18N_STORAGE_KEY = "ursa-lang";

/**
 * Resolve a dotted translation key (e.g. "nav.dashboard" or "content.view.brand.title")
 * for the given language. Falls back to English, then to the key itself.
 *
 * If `params` is provided, replaces `{name}` placeholders in the resolved string
 * with the corresponding values. Unknown placeholders are left untouched.
 */
export function translate(
  lang: Language,
  key: string,
  params?: Record<string, string | number>,
): string {
  const [ns, ...rest] = key.split(".");
  if (rest.length === 0) return key;
  const namespace = ns as Namespace;
  const subKey = rest.join(".");
  const bucket = translations[namespace];
  if (!bucket) return key;
  const inLang = bucket[lang]?.[subKey];
  const raw = inLang ?? bucket.en?.[subKey] ?? key;
  if (!params) return raw;
  return raw.replace(/\{(\w+)\}/g, (_match, name: string) => {
    const v = params[name];
    return v === undefined ? `{${name}}` : String(v);
  });
}
