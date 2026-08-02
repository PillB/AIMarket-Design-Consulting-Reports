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

      /* Section 02 — Thirteen proposals */
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

      /* Section 03 — Ursa Mañana subscription */
      "menu.section.03.title": "Ursa Mañana — the subscription as a menu product",
      "menu.section.03.meta": "Pilot · capped at 50 members",
      "menu.section.03.badge": "Continuity product",
      "menu.section.03.heading": "S/. 20 / month · unlimited coffee · Mon–Fri 7–10am",
      "menu.section.03.body":
        "The subscription is a menu product, not a discount. It works on marginal-cost math because Ursa roasts its own beans — but only if subscribers attach sides (cookies, financier, empanada). The full economic model — break-even attach rate, cannibalization recovery, scale projection — lives in Module 08.",
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
        "Ursa's menu earns its margin through perceived value, not cost-plus pricing. A story card describing origin, altitude, and process raises perceived value more than a bigger cup at the same cost. The 16-criteria framework is designed to keep that discipline: no product launches just because it sounds good.",

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
        "Each element below was verified against Ursa's seven public surfaces: Instagram, Facebook, the Rappi menu, the CoffeePass listing, the TripAdvisor listing, Corner.inc editorial, and the mindtrip.ai profile. Six of eight core assets are verified; the seventh (cross-surface application) is partial, and the eighth is the open question the asset pack will close. Where verification is partial, the precise gap is named and the action that closes it is specified in the implementation roadmap.",

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
        "Identity is strong on the storefront and product; it thins out across digital surfaces (no website, no templated social kit). This is the gap the implementation roadmap closes first.",
      "brand.verified.cross-surface.evidence":
        "Verified by surface gap analysis: Instagram (present), Facebook (limited post access, partial), Rappi (present, no tagline), CoffeePass (present, minimal), TripAdvisor (listing exists, 0 reviews — unclaimed), Corner.inc (verified), mindtrip.ai (verified but phone number conflicts with Instagram). No website found via Google site: search. Missing: templated social kit, claimed Google Business Profile, claimed TripAdvisor.",

      "brand.section.palette.badge": "Color system",
      "brand.section.palette.title": "The Ursa palette — observed and proposed",
      "brand.section.palette.meta": "16 tokens · provenance-labeled · not official until owner-verified",
      "brand.section.palette.intro":
        "A roast-spectrum brown ladder (green-bean → espresso) carries the coffee story; a forest-deep green carries the bear's habitat; cream surfaces hold it all up; a single warm gold reserves emphasis. No blue, no indigo — and that absence is itself a differentiator. The 1km census reads as a wall of Instagram-blue and pure-black café identities; Ursa's warm browns and forest-deep green read as craft before the customer finishes reading the name. Hex values are sampled from social media, not yet locked by the owner — promote them to official tokens only after the asset pack arrives (open question Q6).",
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
        "A serif display carries the early-1900s craft lean; a humanist sans carries the readable prose; a condensed uppercase carries every label, eyebrow, and tag. Three roles, no overlap — because overlap is where inconsistency lives. Two voices would force the body to double as a label (illegible at small sizes); four would dilute the rhythm and add a font-license line item for no cognitive gain. Three is the minimum that holds the Art Nouveau voice across print, web, and signage.",
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
        "Distinctive assets are non-brand-name elements (characters, colors, taglines, ornamentation) that uniquely identify a brand in the buyer's memory. They build mental availability — the probability that a buyer thinks of Ursa in a buying situation — through consistent repetition. Effectiveness is measured on two axes (Romaniuk & Sharp, Ehrenberg-Bass Institute): uniqueness (few competitors use the asset) and prevalence (most category buyers associate the asset with the brand). An asset that is unique but rarely applied does not yet qualify — repetition is the mechanism, not the design.",
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
        "The hairline-gold rule with a central flourish. Used to separate major sections — never to slice paragraphs.",

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
        "Of three plausible directions, this module recommends Level 1 as the permanent system. Level 2 is a reversible 6-month growth skin layered on top. Level 3 is seasonal only. A total rebrand is explicitly off the table — not because rebrands are always wrong, but because Ursa's identity is already its ownable asset (see Distinctive Assets above), and a rebrand would destroy category-leading mental availability it has not yet finished building. Sequencing matters: Level 1 must be locked before Level 2 ships, and Level 3 is gated behind explicit owner sign-off.",
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
        "Risk: documentation overhead without enforcement. A design system that lives only in a Figma file and not in a printed \"brand police\" checklist (one-page reference for baristas, printer, and creators) degrades within 90 days. Mitigation: ship the one-page checklist alongside the Figma file; audit application at day 30, 60, 90. Limitation: also depends on owner-supplied asset pack (open Q6) — if the official bear mark is not supplied within 14 days, Level 1 cannot be locked.",

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
        "If a recommendation forces a choice between (a) protecting Ursa's existing bear / Art Nouveau / roastery identity and (b) chasing a generic growth tactic, this dossier always chooses (a). The conservative-refinement direction is the permanent system; experimental expressions are kept seasonal and reversible. This is the guardrail every subsequent module inherits — and the test that decides the choice is operational, not aesthetic: if the tactic would require a layout change, a brand-mark swap, or a tonal shift the bear cannot carry, it fails the guardrail and is rejected.",
      "brand.spirit.chip.bear": "Bear · Gram · Green",
      "brand.spirit.chip.no-rebrand": "No rebrand · no generic playbook",
      "brand.spirit.chip.experiments": "Experiments reversible on 14–30 day stop rules",

      "brand.section.dossier.badge": "Static dossier",
      "brand.section.dossier.title": "Read the printable HTML dossier",
      "brand.section.dossier.body":
        "The full, print-friendly Module 01 dossier is available as browsable HTML — open it for the complete audit tables and printable colour sheets.",
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
        "The competitor set is no longer a shortlist — it is a census. Every named street within a 1km walk of Ursa's address was walked virtually via Google Maps Street View and cross-referenced against Google Places, TripAdvisor, and Instagram location tags. The result: 14 competitors inside the 1km catchment plus 4 Lima-wide benchmarks (Bisetti, Ciclos, RAIZ, Monótono) included for positional context. Proximity is colour-coded: red = same street, gold = nearby, green = within 1km, grey = out-of-area benchmark. A 1km radius is the practical walk-up catchment for an espresso bar in a dense, walkable district like Miraflores — beyond it, the customer is choosing to travel, not stumbling in.",
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
        "The census above is the systematic view; the cards below are the per-competitor deep-dive. For each competitor the card names one strength, one weakness, and the implication that follows for Ursa. Fourteen sit inside the 1km catchment; four (Bisetti, Ciclos, RAIZ, Monótono) are Lima-wide benchmarks included for positional context — not direct competitors a Miraflores customer compares on the same walk, but reference points for what category-leading looks like at Lima scale.",

      "market.section.ownable.badge": "Ownable space",
      "market.section.ownable.title": "Ursa sits orthogonal to the category",
      "market.section.ownable.meta": "Not a better café — a different one",
      "market.section.ownable.intro":
        "Every strong Miraflores competitor owns one position. Punto Café owns the award. Neira owns scale. Bisetti owns the school. Puku Puku owns the microlote. Terrua owns the premium tasting. None of them owns an animal, an Art Nouveau design language, or a two-bar theatre — and none of them uses named drinks. These positions are not easy to copy because each is backed by a hard asset: Punto's award certificate, Neira's four locations, Bisetti's training program, Puku Puku's microlote supply chain, Terrua's farm-to-cup sourcing. Ursa's bear, two-bar layout, and named-drink system are equally hard to copy because each is backed by a physical or operational commitment — a brand mark, a built-out space, a menu discipline — that a competitor cannot redeploy without matching all three.",
      "market.section.ownable.ortho-title": "The orthogonality principle",
      "market.section.ownable.ortho-body":
        "Ursa's ownable space — bear + two bars + named drinks (Ursagroni, Maracumango) + “Un gramo a la vez” — does not compete against the category's existing positions. It sits at a right angle to them. A customer can love Punto Café's award and still choose Ursa for the bear. That is the moat — and the operational rule it implies is that Ursa should never try to out-award Punto, out-scale Neira, or out-school Bisetti. Each of those contests has an incumbent with a structural advantage; the bear's contest has no incumbent at all.",
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
        "The customer-voice themes below are illustrative, not validated. They are inferred from competitor review patterns and the dossier's own competitive analysis, not from a coded sample of Ursa's own customers. Read them as direction-setting signal, not as a quantitative read on Ursa's clientele.",
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
        "Every card below is a direct conversion of a finding above — no card is speculative. Where a card references a competitor, the implication is explicit; where it references a customer-voice theme, the friction point is named. The six lanes are sequenced for a 90-day worklist: standards first (because matching category baselines is prerequisite to leading them), then avoidance (because losses compound faster than gains), then leadership (the bear-shaped openings the census verified).",

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
        "{withWebsite} of {total} competitors in the 1km census maintain a public website. Ursa's discoverable presence is Instagram only. A first-time visitor who searches \"café de especialidad Miraflores\" on Google finds a wall of competitor websites — Punto Café, Neira Café Lab, Terrua, Cate Tasting Room, and more — and one under-optimized Google Business Profile in return. The bear is invisible at the moment of greatest intent.",
      "market.section.website-gap.priority-label": "30-day priority:",
      "market.section.website-gap.priority-body":
        "ship a single-page site that carries the verified identity — address, hours, signature drinks, the bear, the Art Nouveau craft language, and a booking channel for tastings. The full design system already exists in Module 01. The signature drinks are verified in Module 03. This is assembly, not invention — and the implementation cost is correspondingly small: a single Next.js page with the existing tokens, deployable to a free static host in 72 hours. The cost of not shipping it is larger: every Google search for \"café Miraflores\" that lands on a competitor's website is a customer Ursa has paid no acquisition cost to reach and still loses.",
      "market.section.website-gap.open-brand": "Open Brand Audit (Module 01)",
      "market.section.website-gap.open-dashboard": "Open the interactive Competitor Dashboard",

      "market.section.dossier.body":
        "All competitor claims are sourced and snapshot-dated. See Sources & Evidence for full citations.",
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

      /* Sección 02 — Trece propuestas */
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

      /* Sección 03 — Suscripción Ursa Mañana */
      "menu.section.03.title": "Ursa Mañana — la suscripción como producto de carta",
      "menu.section.03.meta": "Piloto · tope de 50 miembros",
      "menu.section.03.badge": "Producto de continuidad",
      "menu.section.03.heading": "S/. 20 / mes · café ilimitado · Lun–Vie 7–10am",
      "menu.section.03.body":
        "La suscripción es un producto de carta, no un descuento. Funciona con matemática de costo marginal porque Ursa tuesta su propio grano — pero solo si los suscriptores attachan lados (cookies, financier, empanada). El modelo económico completo — tasa de attach de break-even, recuperación de canibalización, proyección de escala — vive en el Módulo 08.",
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
        "La carta de Ursa gana su margen por valor percibido, no por pricing cost-plus. Una tarjeta con historia que describe origen, altitud y proceso eleva el valor percibido más que una taza más grande al mismo costo. El marco de 16 criterios está diseñado para mantener esa disciplina: ningún producto sale solo porque suene bien.",

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
        "Cada elemento se verificó contra las siete superficies públicas de Ursa: Instagram, Facebook, el menú de Rappi, la ficha de CoffeePass, la ficha de TripAdvisor, la editorial de Corner.inc y el perfil de mindtrip.ai. Seis de ocho activos centrales están verificados; el séptimo (aplicación entre superficies) es parcial, y el octavo es la pregunta abierta que cerrará el pack de activos. Donde la verificación es parcial, se nombra la brecha precisa y se especifica la acción que la cierra en la hoja de ruta de implementación.",

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
        "La identidad es fuerte en storefront y producto; se adelgaza entre superficies digitales (sin sitio web, sin kit social templado). Esta es la brecha que la hoja de ruta de implementación cierra primero.",
      "brand.verified.cross-surface.evidence":
        "Verificado por análisis de brecha de superficie: Instagram (presente), Facebook (acceso limitado a posts, parcial), Rappi (presente, sin lema), CoffeePass (presente, mínimo), TripAdvisor (la ficha existe, 0 reseñas — sin reclamar), Corner.inc (verificado), mindtrip.ai (verificado pero el teléfono entra en conflicto con Instagram). No se encontró sitio web vía Google site: search. Faltan: kit social templado, Google Business Profile reclamado, TripAdvisor reclamado.",

      "brand.section.palette.badge": "Sistema de color",
      "brand.section.palette.title": "La paleta de Ursa — observada y propuesta",
      "brand.section.palette.meta": "16 tokens · con proveniencia · no oficiales hasta verificación del dueño",
      "brand.section.palette.intro":
        "Una escala de marrones del espectro de tueste (café verde → espresso) carga la historia del café; un verde bosque profundo carga el hábitat del oso; las superficies crema lo sostienen todo; un único dorado cálido reserva el énfasis. Sin azul, sin índigo — y esa ausencia es en sí misma un diferenciador. El censo de 1km se lee como un muro de identidades de café Instagram-azul y negro puro; los marrones cálidos y el verde bosque profundo de Ursa se leen como craft antes de que el cliente termine de leer el nombre. Los valores hex se muestrearon de redes sociales, no están fijados por el dueño — promovente a tokens oficiales solo después de que llegue el pack de activos (pregunta abierta Q6).",
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
        "Una serif display carga la línea craft de principios de siglo XX; una sans humanista carga la prosa legible; una mayúscula condensada carga cada etiqueta, eyebrow y tag. Tres roles, sin superposición — porque la superposición es donde vive la inconsistencia. Dos voces obligarían al cuerpo a duplicar etiqueta (ilegible en tamaños pequeños); cuatro diluirían el ritmo y sumarían una línea de licencia de tipografía sin ganancia cognitiva. Tres es el mínimo que sostiene la voz Art Nouveau entre impresos, web y signage.",
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
        "Los activos distintivos son elementos ajenos al nombre de la marca (personajes, colores, lemas, ornamentación) que identifican una marca en la memoria del comprador. Construyen disponibilidad mental — la probabilidad de que un comprador piense en Ursa en una situación de compra — a través de la repetición consistente. Su eficacia se mide en dos ejes (Romaniuk y Sharp, Ehrenberg-Bass Institute): singularidad (pocos competidores usan el activo) y prevalencia (la mayoría de los compradores de la categoría asocian el activo con la marca). Un activo que es único pero rara vez aplicado todavía no califica — la repetición es el mecanismo, no el diseño.",
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
        "La línea dorada fina con un flourish central. Se usa para separar secciones mayores — nunca para cortar párrafos.",

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
        "De tres direcciones plausibles, este módulo recomienda el Nivel 1 como sistema permanente. El Nivel 2 es una capa de crecimiento reversible a 6 meses por encima. El Nivel 3 es solo estacional. Un rebrand total queda explícitamente fuera de la mesa — no porque los rebrands siempre estén mal, sino porque la identidad de Ursa ya es su activo ownable (ver Activos Distintivos arriba), y un rebrand destruiría la disponibilidad mental que lidera la categoría y que aún no ha terminado de construir. El orden importa: el Nivel 1 debe fijarse antes de que salga el Nivel 2, y el Nivel 3 está condicionado a la aprobación explícita del dueño.",
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
        "Riesgo: overhead de documentación sin enforcement. Un sistema de diseño que vive solo en un archivo Figma y no en un checklist impreso de «brand police» (referencia de una página para baristas, imprenta y creadores) se degrada en 90 días. Mitigación: entrega el checklist de una página junto al archivo Figma; audita la aplicación en los días 30, 60, 90. Limitación: también depende del pack de activos del dueño (Q6 abierta) — si el mark oficial del oso no se entrega en 14 días, el Nivel 1 no se puede fijar.",

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
        "Si una recomendación obliga a elegir entre (a) cuidar la identidad existente de Ursa — oso, Art Nouveau, tostadora — y (b) perseguir una táctica de crecimiento genérica, este dossier siempre elige (a). La dirección de refinamiento conservador es el sistema permanente; las expresiones experimentales se quedan estacionales y reversibles. Esta es la baranda que heredan todos los módulos siguientes — y la prueba que decide la elección es operacional, no estética: si la táctica requiere un cambio de layout, un cambio de mark de marca o un giro tonal que el oso no pueda cargar, falla la baranda y se rechaza.",
      "brand.spirit.chip.bear": "Oso · Gramo · Verde",
      "brand.spirit.chip.no-rebrand": "Sin rebrand · sin playbook genérico",
      "brand.spirit.chip.experiments": "Experimentos reversibles con reglas de parada de 14–30 días",

      "brand.section.dossier.badge": "Dossier estático",
      "brand.section.dossier.title": "Lee el dossier HTML imprimible",
      "brand.section.dossier.body":
        "El dossier completo del Módulo 01, listo para imprimir, está disponible como HTML navegable — ábrelo para las tablas completas de auditoría y las hojas de color imprimibles.",
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
        "El conjunto de competidores ya no es una shortlist — es un censo. Cada calle con nombre dentro de 1km a pie de la dirección de Ursa se recorrió virtualmente vía Google Maps Street View y se cruzó contra Google Places, TripAdvisor y location tags de Instagram. El resultado: 14 competidores dentro del catchment de 1km más 4 benchmarks de Lima (Bisetti, Ciclos, RAIZ, Monótono) incluidos para contexto posicional. La proximidad tiene código de color: rojo = misma calle, dorado = cercano, verde = dentro de 1km, gris = benchmark fuera del área. Un radio de 1km es el catchment práctico para un espresso bar en un distrito denso y caminable como Miraflores — más allá, el cliente está eligiendo viajar, no entrando de paso.",
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
        "El censo de arriba es la vista sistemática; las tarjetas de abajo son el deep-dive por competidor. Para cada competidor la tarjeta nombra una fortaleza, una debilidad y la implicación que se sigue para Ursa. Catorce están dentro del catchment de 1km; cuatro (Bisetti, Ciclos, RAIZ, Monótono) son benchmarks de Lima incluidos para contexto posicional — no competidores directos que un cliente de Miraflores compara en la misma caminata, sino puntos de referencia de lo que se ve como liderazgo de categoría a escala Lima.",

      "market.section.ownable.badge": "Espacio ownable",
      "market.section.ownable.title": "Ursa se sienta ortogonal a la categoría",
      "market.section.ownable.meta": "No una mejor cafetería — una distinta",
      "market.section.ownable.intro":
        "Cada competidor fuerte de Miraflores es dueño de una posición. Punto Café es dueño del premio. Neira es dueño de la escala. Bisetti es dueño de la escuela. Puku Puku es dueño del microlote. Terrua es dueño de la degustación premium. Ninguno es dueño de un animal, de un lenguaje de diseño Art Nouveau o de un teatro de dos barras — y ninguno usa bebidas con nombre. Estas posiciones no son fáciles de copiar porque cada una está respaldada por un activo duro: el certificado de premio de Punto, los cuatro locales de Neira, el programa de entrenamiento de Bisetti, la cadena de microlotes de Puku Puku, el sourcing farm-to-cup de Terrua. El oso de Ursa, el layout de dos barras y el sistema de bebidas con nombre son igualmente difíciles de copiar porque cada uno está respaldado por un compromiso físico u operacional — una marca, un espacio construido, una disciplina de carta — que un competidor no puede redeployar sin igualar los tres.",
      "market.section.ownable.ortho-title": "El principio de ortogonalidad",
      "market.section.ownable.ortho-body":
        "El espacio ownable de Ursa — oso + dos barras + bebidas con nombre (Ursagroni, Maracumango) + «Un gramo a la vez» — no compite contra las posiciones existentes de la categoría. Se sienta en ángulo recto con ellas. Un cliente puede amar el premio de Punto Café y aun así elegir Ursa por el oso. Ese es el foso — y la regla operacional que implica es que Ursa nunca debe intentar ganarle el premio a Punto, la escala a Neira o la escuela a Bisetti. Cada uno de esos concursos tiene un incumbente con ventaja estructural; el concurso del oso no tiene incumbente.",
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
        "Los temas de voz del cliente de abajo son ilustrativos, no validados. Se infieren de patrones de reseña de competidores y del propio análisis competitivo del dossier, no de una muestra codificada de los clientes de Ursa. Léelos como señal direccional, no como lectura cuantitativa de la clientela de Ursa.",
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
        "Cada tarjeta de abajo es una conversión directa de un hallazgo de arriba — ninguna tarjeta es especulativa. Donde una tarjeta referencia un competidor, la implicación es explícita; donde referencia un tema de voz del cliente, se nombra el punto de fricción. Las seis pistas están secuenciadas para una worklist de 90 días: primero estándares (porque igualar las líneas base de la categoría es prerrequisito para liderarlas), luego evitación (porque las pérdidas se acumulan más rápido que las ganancias), luego liderazgo (las aperturas en forma de oso que el censo verificó).",

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
        "{withWebsite} de {total} competidores en el censo de 1km mantienen un sitio web público. La presencia descubrible de Ursa es solo Instagram. Un visitante primerizo que busca «café de especialidad Miraflores» en Google encuentra un muro de sitios de competidores — Punto Café, Neira Café Lab, Terrua, Cate Tasting Room y más — y un Google Business Profile subóptimo a cambio. El oso es invisible en el momento de mayor intención.",
      "market.section.website-gap.priority-label": "Prioridad de 30 días:",
      "market.section.website-gap.priority-body":
        "lanzar un sitio de una sola página que cargue la identidad verificada — dirección, horario, bebidas de autor, el oso, la línea craft Art Nouveau y un canal de reserva para degustaciones. El sistema de diseño completo ya existe en el Módulo 01. Las bebidas de autor están verificadas en el Módulo 03. Esto es ensamblaje, no invención — y el costo de implementación es proporcionalmente pequeño: una sola página Next.js con los tokens existentes, deployable a un host estático gratuito en 72 horas. El costo de no lanzarlo es mayor: cada búsqueda en Google de «café Miraflores» que aterriza en el sitio de un competidor es un cliente al que Ursa no ha pagado costo de adquisición por alcanzar y aun así pierde.",
      "market.section.website-gap.open-brand": "Abrir Auditoría de Marca (Módulo 01)",
      "market.section.website-gap.open-dashboard": "Abrir el Tablero de Competidores interactivo",

      "market.section.dossier.body":
        "Todos los claims de competidores tienen fuente y fecha de snapshot. Ver Fuentes y Evidencia para citas completas.",
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
