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
        "Thirteen Miraflores and Lima competitors, mapped — and the one space none of them owns.",

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
      "competitors.lede": "A filterable comparison matrix of the thirteen Miraflores and Lima competitors, plus Ursa's own profile pinned to the top of the table. Sort by name, area, or website presence; filter the set; read each head-to-head verdict; and see where every player sits on the scale-vs-craft quadrant.",
      "competitors.stat.tracked": "Competitors tracked",
      "competitors.stat.website": "Operate a website",
      "competitors.stat.miraflores": "Miraflores presence (incl. clusters)",
      "competitors.stat.distinctiveness": "Ursa distinctiveness score",
      "competitors.meta.rows": "Rows",
      "competitors.meta.filterable": "Filterable by",
      "competitors.meta.source": "Source",

      /* Content Calendar */
      "view.content-calendar.eyebrow": "Extra Tool T3 · Interactive",
      "view.content-calendar.title": "Content Calendar & Script Library",

      /* Experiments */
      "view.experiments.eyebrow": "Extra Tool T4 · Interactive",
      "view.experiments.title":
        "Experiment Tracker — eleven tests, four outcomes, one source of truth.",
      "experiments.section.status": "Where the eleven experiments stand right now",
      "experiments.stat.total": "Total experiments tracked",
      "experiments.stat.proposed": "Proposed · awaiting launch",
      "experiments.stat.running": "Running · in test now",
      "experiments.stat.graduated": "Graduated · passed or killed",
      "experiments.section.filter": "Filter the board by status",
      "experiments.section.cards": "Experiment cards — pick a status for each test",
      "experiments.section.cost": "Cost summary — exposure on Proposed + Running experiments",
      "experiments.section.gantt": "90-day Gantt — when each experiment runs",

      /* Style Guide */
      "view.style-guide.eyebrow": "Extra Tool T5 · Interactive",
      "view.style-guide.title":
        "Brand Style Guide Explorer — the verified tokens, live.",

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
        "Trece competidores de Miraflores y Lima, mapeados — y el único espacio que ninguno ocupa.",

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

      "view.calculator.eyebrow":
        "Módulo 08 · Nueva propuesta de producto · Interactivo",
      "view.calculator.title":
        "Ursa Mañana — Calculadora de Economía de Suscripción",

      "view.menu-studio.eyebrow": "Herramienta T1 · Interactiva",
      "view.menu-studio.title": "Estudio de Ingeniería de Carta",

      "view.competitors.eyebrow": "Herramienta T2 · Interactiva",
      "view.competitors.title": "Tablero de Inteligencia Competitiva.",
      "competitors.lede": "Una matriz de comparación filtrable de los trece competidores de Miraflores y Lima, más el perfil de Ursa fijado en la parte superior de la tabla. Ordena por nombre, zona o presencia web; filtra el conjunto; lee cada veredicto cabeza a cabeza; y mira dónde se sitúa cada jugador en el cuadrante escala versus craft.",
      "competitors.stat.tracked": "Competidores registrados",
      "competitors.stat.website": "Tienen sitio web",
      "competitors.stat.miraflores": "Presencia en Miraflores (incl. clústeres)",
      "competitors.stat.distinctiveness": "Puntaje de distintividad de Ursa",
      "competitors.meta.rows": "Filas",
      "competitors.meta.filterable": "Filtrable por",
      "competitors.meta.source": "Fuente",

      "view.content-calendar.eyebrow": "Herramienta T3 · Interactiva",
      "view.content-calendar.title": "Calendario de Contenido y Biblioteca de Guiones",

      "view.experiments.eyebrow": "Herramienta T4 · Interactiva",
      "view.experiments.title":
        "Seguimiento de Experimentos — once pruebas, cuatro resultados, una sola verdad.",
      "experiments.section.status": "Dónde están los once experimentos ahora",
      "experiments.stat.total": "Experimentos totales registrados",
      "experiments.stat.proposed": "Propuestos · esperando lanzamiento",
      "experiments.stat.running": "En curso · en prueba ahora",
      "experiments.stat.graduated": "Graduados · aprobados o cancelados",
      "experiments.section.filter": "Filtra el tablero por estado",
      "experiments.section.cards": "Tarjetas de experimentos — elige un estado para cada prueba",
      "experiments.section.cost": "Resumen de costos — exposición en experimentos Propuestos + En curso",
      "experiments.section.gantt": "Gantt de 90 días — cuándo corre cada experimento",

      "view.style-guide.eyebrow": "Herramienta T5 · Interactiva",
      "view.style-guide.title":
        "Explorador de Guía de Estilo — los tokens verificados, en vivo.",

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
 */
export function translate(
  lang: Language,
  key: string,
): string {
  const [ns, ...rest] = key.split(".");
  if (rest.length === 0) return key;
  const namespace = ns as Namespace;
  const subKey = rest.join(".");
  const bucket = translations[namespace];
  if (!bucket) return key;
  const inLang = bucket[lang]?.[subKey];
  if (inLang) return inLang;
  const inEn = bucket.en?.[subKey];
  if (inEn) return inEn;
  return key;
}
