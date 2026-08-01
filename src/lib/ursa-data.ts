// ============================================================
// URSA COFFEE — STRUCTURED DATA
// Verified from public sources. Snapshot 2026-08-01.
// See Sources & Evidence for full citations.
// ============================================================

export const URSA_FACTS = {
  name: "Ursa Coffee Roasters",
  address: "Alcanfores 183, Miraflores, Lima 15074",
  hours: "Mon–Sat 07:30–21:00 · Sun 08:30–20:00",
  tagline: "Un gramo a la vez.",
  bio: "Tostadores de café de especialidad",
  instagram: "@ursacoffeeperu",
  followers: "4,746",
  posts: "206",
  twoBars: "Espresso bar + Coldbrew bar",
  delivery: "Rappi active",
  membership: "CoffeePass Perú",
  snapshot: "2026-08-01",
};

export const PALETTE = [
  { name: "Green Bean", hex: "#6F5B3D", role: "Roast spectrum · lightest", provenance: "approximate" as const },
  { name: "Light Roast", hex: "#8B6240", role: "Warm mid-tone", provenance: "approximate" as const },
  { name: "Medium Roast", hex: "#6F4A2E", role: "Primary brown", provenance: "approximate" as const },
  { name: "Dark Roast", hex: "#3B2417", role: "Headers · deep brown", provenance: "approximate" as const },
  { name: "Espresso", hex: "#211208", role: "Footer · darkest", provenance: "approximate" as const },
  { name: "Forest Deep", hex: "#2D4A36", role: "Bear habitat · primary green", provenance: "approximate" as const },
  { name: "Forest", hex: "#3E6149", role: "Secondary green", provenance: "approximate" as const },
  { name: "Sage", hex: "#8FA68B", role: "Muted green", provenance: "approximate" as const },
  { name: "Leaf", hex: "#B7C9A8", role: "Soft accent", provenance: "approximate" as const },
  { name: "Cream", hex: "#F4EBD9", role: "Background · paper", provenance: "approximate" as const },
  { name: "Paper", hex: "#FAF5EC", role: "Card surface", provenance: "proposed" as const },
  { name: "Foam", hex: "#FFFCF6", role: "Lightest surface", provenance: "proposed" as const },
  { name: "Gold", hex: "#B8924A", role: "Art Nouveau accent", provenance: "approximate" as const },
  { name: "Gold Soft", hex: "#D9BC7E", role: "Light gold", provenance: "proposed" as const },
  { name: "Terracotta", hex: "#C16E4B", role: "Warm contrast", provenance: "proposed" as const },
  { name: "Ink", hex: "#1A140C", role: "Text · darkest", provenance: "proposed" as const },
];

export const TYPOGRAPHY = [
  { name: "Cormorant Garamond", role: "Display · headings, hero, menu items", className: "font-display", sample: "Un gramo a la vez" },
  { name: "Inter", role: "Body · readable prose, UI", className: "font-body", sample: "Specialty coffee, roasted in Miraflores" },
  { name: "Oswald", role: "Labels · eyebrows, nav, tags", className: "font-label", sample: "TOSTADORES DE CAFÉ" },
];

export const VERIFIED_BEVERAGES = [
  { name: "Ursagroni", desc: "Signature named drink — espresso-tonic-portmanteau concept", status: "verified" as const },
  { name: "Filtrado Lonya", desc: "Pour-over of Utcubamba, Amazonas origin", status: "verified" as const },
  { name: "Durazno Clarificado Coldbrew", desc: "Peach-clarified cold brew", status: "verified" as const },
  { name: "Maracumango Coldbrew", desc: "Passionfruit-mango cold brew", status: "verified" as const },
];

export const VERIFIED_FOOD = [
  { name: "Financier de pera", desc: "Pear financier pastry", status: "verified" as const },
  { name: "Empanada de carne con bechamel", desc: "Beef empanada with béchamel", status: "verified" as const },
  { name: "House-made cookies", desc: "In-house cookies", status: "verified" as const },
];

export const COMPETITORS = [
  {
    name: "Punto Café",
    area: "Miraflores",
    strength: "Premios Somos 2024 winner; strong local recognition",
    weakness: "Limited roastery identity; less Art Nouveau craft",
    ursaImplication: "Match award visibility; lead on roastery + bear craft",
    hasWebsite: true,
  },
  {
    name: "Neira Café Lab",
    area: "Miraflores + 3 more",
    strength: "4+ locations incl. WorkCafé cobrand; scale",
    weakness: "Cobrand dilutes pure-café identity",
    ursaImplication: "Lead on single-site intimacy; avoid cobrand dilution",
    hasWebsite: true,
  },
  {
    name: "Bisetti",
    area: "Barranco",
    strength: "Owns 'escuela de café' (coffee school) positioning",
    weakness: "Educational focus can feel formal",
    ursaImplication: "Compete on education but make it warmer/experiential",
    hasWebsite: true,
  },
  {
    name: "Puku Puku",
    area: "Multiple Lima",
    strength: "Owns 'microlotes' (microlot) positioning; retail reach",
    weakness: "Chain feel at scale",
    ursaImplication: "Lead on crafted atmosphere; microlots as a sub-line",
    hasWebsite: true,
  },
  {
    name: "Terrua",
    area: "Miraflores",
    strength: "US$25 paid tasting — premium experience pricing",
    weakness: "High price ceiling limits frequency",
    ursaImplication: "Tiered tastings; accessible entry + premium depth",
    hasWebsite: true,
  },
  {
    name: "True Artisan",
    area: "Miraflores",
    strength: "Artisan positioning",
    weakness: "Less differentiated visual identity",
    ursaImplication: "Bear + Art Nouveau is more ownable",
    hasWebsite: true,
  },
  {
    name: "Café Verde",
    area: "Miraflores",
    strength: "Sustainability narrative",
    weakness: "Green messaging can feel generic",
    ursaImplication: "Make sustainability specific (origin stories)",
    hasWebsite: true,
  },
  {
    name: "Puku Puku / Urqu / Origen / Cate / Arabica",
    area: "Miraflores cluster",
    strength: "Density creates a coffee destination",
    weakness: "Crowded; hard to stand out",
    ursaImplication: "Two-bar + named-drink identity as differentiator",
    hasWebsite: true,
  },
  {
    name: "Ciclos",
    area: "Lima",
    strength: "Bike + coffee community niche",
    weakness: "Niche limits audience",
    ursaImplication: "Cross-pollinate with cycling/tourism partners",
    hasWebsite: true,
  },
  {
    name: "RAIZ",
    area: "Lima",
    strength: "Farm-to-cup story",
    weakness: "Less retail presence",
    ursaImplication: "Origin stories via Filtrado Lonya line",
    hasWebsite: true,
  },
];

export const CUSTOMER_VOICE = [
  {
    theme: "What customers value strongly",
    points: [
      "In-house roasting visible from the bar — proof of specialty credibility",
      "Named, original drinks (not just 'cappuccino') — gives a story to share",
      "Warm, crafted atmosphere that feels like a third place, not a chain",
      "Knowledgeable baristas who can talk origin and process",
    ],
  },
  {
    theme: "What competitors do poorly",
    points: [
      "Inconsistent espresso quality between baristas and shifts",
      "Slow service during peak with no clear queue or wait communication",
      "Menus that list drinks without origin, process, or flavour notes",
      "Weak Wi-Fi and limited power outlets for remote workers",
      "Delivery coffee arriving cold or diluted",
    ],
  },
  {
    theme: "What is made difficult or frustrating",
    points: [
      "Finding the café on Google Maps (missing/unverified Business Profile)",
      "Understanding which beans are seasonal vs. permanent",
      "Booking a tasting or cupping — often no clear channel",
      "Knowing whether the café is busy before arriving",
    ],
  },
  {
    theme: "Where Ursa can lead",
    points: [
      "Bear-led brand character no competitor owns",
      "Two-bar (espresso + coldbrew) as a visible theatre",
      "Portmanteau drink naming (Ursagroni, Maracumango) as a signature system",
      "'Un gramo a la vez' as a patient-craft ethos",
      "Art Nouveau craft language applied consistently",
    ],
  },
];

export const HORMOZI_PRINCIPLES = [
  {
    principle: "Value Equation",
    adapted:
      "Increase Dream Outcome (become the person who knows good coffee), increase Likelihood of Achievement (guaranteed good cup via roastery), decrease Time Delay (7am opening), decrease Effort & Sacrifice (subscription removes per-cup decision).",
    apply: true,
    caveat: "Do not promise transformational outcomes a café cannot deliver.",
  },
  {
    principle: "Offer Design & Stacks",
    adapted:
      "Bundle a core drink + a side + a bean sample + a story card. Anchor against à la carte total. Continuity via subscription.",
    apply: true,
    caveat: "Anchors must be truthful, not inflated.",
  },
  {
    principle: "Lead Magnets",
    adapted:
      "Free 'origin flavour wheel' PDF or a free mini-cupping ticket with first retail bean purchase — not a discount.",
    apply: true,
    caveat: "Lead magnet must be genuinely useful, not a coupon in disguise.",
  },
  {
    principle: "Retention & Repeat Purchase",
    adapted:
      "Subscription + named-drink rotation + seasonal Lonya origins create a reason to return weekly.",
    apply: true,
    caveat: "Do not over-discount; protect specialty margin perception.",
  },
  {
    principle: "More, Better, New",
    adapted:
      "More (delivery, retail), Better (consistency, service), New (seasonal drinks, workshops). Sequence Better before More.",
    apply: true,
    caveat: "New without Better erodes trust.",
  },
];

export const SUTHERLAND_PRINCIPLES = [
  {
    principle: "Perceived value > objective value",
    adapted:
      "A story card describing origin, altitude, and process raises perceived value more than a bigger cup at the same cost.",
    apply: true,
  },
  {
    principle: "Inexpensive experiments",
    adapted:
      "Test named-drink story cards, table signs, and bear-character captions before any expensive redesign. Most cost S/. 0–200.",
    apply: true,
  },
  {
    principle: "Psychological pricing & anchoring",
    adapted:
      "A S/. 28 tasting flight makes a S/. 14 pour-over feel reasonable. Anchor, then offer the accessible tier.",
    apply: true,
  },
  {
    principle: "Context shapes perception",
    adapted:
      "The two-bar layout, the Art Nouveau details, and the roaster visible from the counter are context that makes the same coffee taste better.",
    apply: true,
  },
  {
    principle: "Irrational-but-testable ideas",
    adapted:
      "A 'bear recommends' pairing on the menu, a morning ritual greeting, or a weekly 'gram of the week' bean highlight.",
    apply: true,
    caveat: "Test cheaply; keep only what improves repeat or ticket.",
  },
];

export const CONTENT_CONCEPTS = [
  { id: "C01", title: "'Un gramo a la vez' — the weighing ritual", format: "Reel", hook: "Watch a barista weigh 18.0g while explaining why a single gram changes the shot." },
  { id: "C02", title: "Bear tracks around Miraflores", format: "Reel series", hook: "A bear paw stamp appears at landmarks near Alcanfores — a local-discovery treasure trail." },
  { id: "C03", title: "Two-bar theatre: espresso vs coldbrew side by side", format: "Reel", hook: "Split screen: a hot shot pulled while a cold brew clarifies — same bean, two temperatures." },
  { id: "C04", title: "Origin minute: Utcubamba, Amazonas", format: "Carousel", hook: "Where does the Filtrado Lonya come from? A 60-second trip to the farm via photos and altitude." },
  { id: "C05", title: "Name that drink: Ursagroni etymology", format: "Reel", hook: "Why is it called Ursagroni? The barista who named it tells the story in 30 seconds." },
  { id: "C06", title: "Maracumango taste-along", format: "Reel + UGC", hook: "Customers react to their first sip of passionfruit-mango cold brew. Hook the colour change." },
  { id: "C07", title: "Bear barista challenge", format: "UGC mechanism", hook: "Customers film their best latte-art attempt; the bear picks a weekly winner." },
  { id: "C08", title: "The 7am club", format: "Series", hook: "Why do the same five people show up at 7:03 every morning? Mini-profiles of the morning regulars." },
  { id: "C09", title: "Roast curve time-lapse", format: "Reel", hook: "A 12-minute roast compressed to 40 seconds, with the temperature curve overlay." },
  { id: "C10", title: "How to order if you don't know coffee", format: "Carousel", hook: "A non-judgmental guide for the person who just wants 'something good'." },
  { id: "C11", title: "Cookie-to-coffee pairing card", format: "Table sign + Reel", hook: "Which cookie goes with which drink? A small pairing matrix customers photograph." },
  { id: "C12", title: "The gram of the week", format: "Series", hook: "Each week, highlight one micro-lot with its story, altitude, and tasting notes." },
  { id: "C13", title: "Miraflores walk-to-Ursa directions", format: "Reel", hook: "Filmed POV walk from Parque Kennedy to Alcanfores 183 — 'it's closer than you think.'" },
  { id: "C14", title: "Behind the coldbrew clarification", format: "Reel", hook: "The science of clarified milk / clarified juice — why it looks different and tastes cleaner." },
  { id: "C15", title: "Customer cupping night", format: "Event + Reel", hook: "Footage from a monthly cupping where customers learn to slurp and score." },
  { id: "C16", title: "Hotel concierge card unboxing", format: "Reel", hook: "Delivering branded origin cards to 8 nearby hotels — a B2B moment made visible." },
  { id: "C17", title: "The bear's morning ritual", format: "Series", hook: "A recurring animated/illustrated bear opens the café each morning — a branded opener." },
  { id: "C18", title: "Espresso machine deep-clean", format: "Reel", hook: "The 9pm close-down ritual — backflush, brush, polish. Trust through transparency." },
  { id: "C19", title: "Seasonal drink launch: the reveal", format: "Reel", hook: "A new seasonal drink is revealed by lifting a cloth off the menu board. Build anticipation." },
  { id: "C20", title: "Barista one-question interview", format: "Series", hook: "Each barista answers one question: 'What did you learn about coffee this week?'" },
  { id: "C21", title: "The maths of a subscription", format: "Carousel + Calculator", hook: "How S/. 20/month unlimited coffee actually works — a transparent breakdown." },
  { id: "C22", title: "Delivery packing ritual", format: "Reel", hook: "How a delivery order is packed so it arrives hot — the insulation, the tape, the note." },
  { id: "C23", title: "Bean bag label close-up", format: "Reel", hook: "Macro shots of the Art Nouveau label, the roast date stamp, the seal." },
  { id: "C24", title: "Customer review reply of the week", format: "Story series", hook: "A real (consented) review read aloud, with the owner's honest reply." },
  { id: "C25", title: "The 10-second pour-over", format: "Reel", hook: "A sped-up pour-over with bloom, pulse pours, and the final drawdown — mesmerising." },
  { id: "C26", title: "Why we charge what we charge", format: "Carousel", hook: "A transparent cost breakdown of one cup — bean, milk, labour, rent, roastery." },
];

export const SCRIPTS = [
  {
    id: "S01",
    concept: "C01",
    title: "'Un gramo a la vez' — the weighing ritual",
    hook: "A single gram is the difference between a good shot and a great one.",
    duration: "25–30s",
    beats: [
      "OPEN: macro shot of a silver pour-over scale reading 0.00g.",
      "Barista hand places a portafilter on the scale. Close-up of grounds being distributed.",
      "Scale ticks: 17.8… 18.0g. Barista pauses. 'Un gramo a la vez.'",
      "Cut to the extraction — honey-blonde espresso pouring into a warm cup.",
      "Barista tastes, nods. End card: 'Ursa Coffee Roasters · Alcanfores 183.'",
    ],
    caption: "Un solo gramo cambia todo. Un gramo a la vez. ☕️🐻 #UrsaCoffee #SpecialtyCoffee #Miraflores",
    cta: "Ven a probar la diferencia. Lun–Sáb desde 7:30am.",
  },
  {
    id: "S02",
    concept: "C02",
    title: "Bear tracks around Miraflores",
    hook: "A bear is loose in Miraflores. Follow the tracks.",
    duration: "20–25s",
    beats: [
      "OPEN: a stamped bear paw appears on the sidewalk near Parque Kennedy.",
      "Quick cuts of paws at Malecón, at a hotel entrance, at a bookstore.",
      "Final paw leads to the door of Alcanfores 183.",
      "Bear mark fills the frame. 'Te estábamos esperando.'",
    ],
    caption: "El oso te espera en Alcanfores 183. 🐾🐻 Sigue las huellas por Miraflores.",
    cta: "¿Encontraste una huella? Cuéntanos en stories.",
  },
  {
    id: "S03",
    concept: "C03",
    title: "Two-bar theatre: hot vs cold",
    hook: "Same bean. Two temperatures. Two completely different cups.",
    duration: "30–35s",
    beats: [
      "SPLIT SCREEN. Left: espresso machine, 92°C. Right: cold brew tower, room temp.",
      "Left: shot pulls in 28s. Right: drip, drip, drip over hours (time-lapse).",
      "Both cups placed side by side. Barista: 'Mismo grano, dos mundos.'",
      "Tasting reaction. End card with both drink names.",
    ],
    caption: "Mismo grano, dos mundos. ¿Cuál es el tuyo? ☕️🧊 #UrsaCoffee #TwoBars",
    cta: "Pruébalo en persona. Espresso bar + Coldbrew bar.",
  },
  {
    id: "S04",
    concept: "C04",
    title: "Origin minute: Utcubamba, Amazonas",
    hook: "This cup started 1,400km from here, at 1,750m.",
    duration: "60s",
    beats: [
      "OPEN: map zoom from Miraflores to Utcubamba, Amazonas.",
      "Farm photos: cherries ripening on the branch, a hand sorting.",
      "Altitude card: 1,750m. Process: washed. Varietal: Bourbon.",
      "Cut to Ursa: the roast, the grind, the pour.",
      "Barista: 'Esto es el Filtrado Lonya. Pruébalo y siente la montaña.'",
    ],
    caption: "Del norte del Perú a tu taza. Filtrado Lonya · Utcubamba, Amazonas. 🏔️",
    cta: "Pídelo en filtrado. Solo mientras dure el lote.",
  },
  {
    id: "S05",
    concept: "C05",
    title: "Name that drink: Ursagroni",
    hook: "Why did we call it Ursagroni? The barista who named it explains.",
    duration: "30s",
    beats: [
      "OPEN: the Ursagroni on the bar — espresso, tonic, garnish.",
      "Barista (to camera): 'Everyone asks where the name comes from.'",
      "'Ursa — the bear. Negroni — the cocktail structure. Espresso + tonic + bitter.'",
      "Pour and stir. 'It's our most photographed drink. Now you know why.'",
    ],
    caption: "Ursa + groni. El café que se parece a un cóctel. 🐻🍹 #Ursagroni",
    cta: "Pídelo sin alcohol pero con carácter.",
  },
  {
    id: "S06",
    concept: "C06",
    title: "Maracumango taste-along",
    hook: "First sip of passionfruit-mango cold brew. Watch their faces.",
    duration: "20s",
    beats: [
      "OPEN: three customers blindfolded (or just eyes on the cup).",
      "The colour is vivid orange-yellow. They sip.",
      "Reactions: eyes widen, smiles. '¿Esto es café?'",
      "Reveal card: Maracumango Coldbrew. Passionfruit + mango + cold brew.",
    ],
    caption: "Sí, es café. Maracumango Coldbrew. 🥭💛 #Maracumango #Coldbrew",
    cta: "¿Te atreves? Solo en la coldbrew bar.",
  },
  {
    id: "S07",
    concept: "C09",
    title: "Roast curve time-lapse",
    hook: "12 minutes. One roast. Watch the bean change colour.",
    duration: "45s",
    beats: [
      "OPEN: green beans pour into the drum. Temperature: 0°C rising.",
      "Time-lapse: yellowing at 5 min, first crack at 9 min, development to 12 min.",
      "Temperature curve overlay: a clean S-curve.",
      "Barista: 'El desarrollo ocurre entre el primer y segundo crack. Ahí decidimos parar.'",
      "Beans cool on the tray. End card: roast date stamp.",
    ],
    caption: "12 minutos que cambian todo. Curva de tueste de hoy. 🔥☕️",
    cta: "Pregunta por el lote de la semana.",
  },
  {
    id: "S08",
    concept: "C13",
    title: "Walk to Ursa from Parque Kennedy",
    hook: "You're probably closer to great coffee than you think.",
    duration: "25s",
    beats: [
      "POV walking shot from Parque Kennedy. Timer in corner: 0:00.",
      "Quick steps down the street, past landmarks. 4:30. 6:00.",
      "Arrive at Alcanfores 183 at 7:12. Door opens.",
      "A hot cup is placed on the bar. 'Bienvenido.'",
    ],
    caption: "7 minutos desde Parque Kennedy. Más cerca de lo que creías. 🚶🐻",
    cta: "Alcanfores 183, Miraflores.",
  },
  {
    id: "S09",
    concept: "C18",
    title: "The 9pm close-down ritual",
    hook: "This is what 9pm looks like when you actually care.",
    duration: "30s",
    beats: [
      "OPEN: lights dimming. The last customer leaves.",
      "Barista backflushes the machine. Brushes the group head. Polishes the steam wand.",
      "Wipes down the bar in slow, deliberate strokes.",
      "Counts the till. Writes the closing note.",
      "Turns off the roaster. Locks the door. Bear mark on the window catches the streetlight.",
    ],
    caption: "El cierre es parte del oficio. Hasta mañana. 🌙🐻",
    cta: "Abrimos otra vez a las 7:30.",
  },
  {
    id: "S10",
    concept: "C21",
    title: "The maths of a subscription",
    hook: "S/. 20/month for unlimited coffee. Here's the honest maths.",
    duration: "40s",
    beats: [
      "OPEN: a receipt and a calculator on the bar.",
      "'S/. 20 al mes. Café ilimitado de 7 a 10am.'",
      "Card: marginal cost per cup for a roaster = S/. 1.20–1.80.",
      "'Si vienes 3 veces por semana y compras un acompañamiento la mitad de las veces...'",
      "Calculator shows: net profit per subscriber. 'Funciona porque tú ganas y nosotros ganamos.'",
      "End: 'Ursa Mañana. Próximamente. Pilot limitado.'",
    ],
    caption: "Matemática honesta del café ilimitado. S/.20/mes. 🧮☕️ #UrsaMañana",
    cta: "Anota tu interés en la barra. Cupo piloto limitado.",
  },
];

export const REPEATABLE_SERIES = [
  {
    name: "The 7am Club",
    cadence: "Weekly",
    concept: "Mini-profile of a morning regular — why they come, what they order, what they do. Humanises the café and rewards loyalty with recognition.",
    episodes: "Ongoing; one regular per week.",
  },
  {
    name: "Gram of the Week",
    cadence: "Weekly",
    concept: "Highlight one micro-lot bean with its origin story, altitude, process, and tasting notes. Drives retail bean sales and origin literacy.",
    episodes: "One per week, aligned to the current retail bean.",
  },
  {
    name: "Bear's Morning Ritual",
    cadence: "Daily (Stories)",
    concept: "A short illustrated/animated bear opens the café each morning — turns on the roaster, weighs the first shot, greets the first customer. A branded daily opener.",
    episodes: "Daily Stories; reusable animated template.",
  },
];

export const CREATOR_BRIFS = [
  {
    name: "Lima food & travel micro-creator (5–30k)",
    objective: "Local discovery — 'closer than you think' walk-to-Ursa content",
    deliverable: "1 Reel + 1 Story set; Miraflores POV walk + café visit",
    keyMessage: "7 minutes from Parque Kennedy; in-house roastery; two bars",
    assetsProvided: "Brand colour guide, bear mark, origin card template",
    metric: "Saves + profile visits + 'directions' clicks",
  },
  {
    name: "Specialty-coffee educator (10–100k)",
    objective: "Credibility — origin and process education",
    deliverable: "1 carousel on Utcubamba origin + 1 Reel on the roast curve",
    keyMessage: "Roastery-led; named drinks; 'un gramo a la vez'",
    assetsProvided: "Origin photos, roast log sample, cupping notes",
    metric: "Saves + shares + DMs asking about retail beans",
  },
  {
    name: "Lifestyle / morning-routine creator (5–50k)",
    objective: "Subscription pilot awareness — Ursa Mañana",
    deliverable: "1 Reel framed as a 'morning routine' featuring the 7–10am window",
    keyMessage: "S/. 20/month unlimited coffee; the café as a morning ritual",
    assetsProvided: "Subscription one-pager, calculator screenshot",
    metric: "Pilot sign-ups + waitlist additions",
  },
];

export const UGC_MECHANISMS = [
  {
    name: "Bear Barista Challenge",
    mechanism: "Customers film their best latte-art attempt at the bar. The bear picks a weekly winner who gets a free drink + a featured Story.",
    consent: "Explicit consent to repost; handle minors with parental permission.",
  },
  {
    name: "Huella de Oso (Bear Paw) photo hunt",
    mechanism: "Customers who spot a stamped bear paw around Miraflores post it tagging @ursacoffeeperu. Each find enters a monthly bean-bag draw.",
    consent: "Public tag = consent to repost; DM for featured highlight.",
  },
  {
    name: "Tu primer Maracumango",
    mechanism: "Customers film their first Maracumango Coldbrew reaction. The most genuine reaction each month wins a tasting flight for two.",
    consent: "Consent prompt on the cup sleeve; opt-in to repost.",
  },
];

export const EXPERIMENTS = [
  { id: "EXP-01", name: "Story card on pour-over", hypothesis: "Adding an origin story card raises perceived value and willingness to pay.", cost: "S/. 0–80", metric: "% customers who ask about origin; pour-over attach", stopRule: "No lift in 14 days", status: "proposed" as const },
  { id: "EXP-02", name: "Google Business Profile claim", hypothesis: "A verified GBP with photos + menu increases 'directions' calls.", cost: "S/. 0", metric: "Directions calls per week", stopRule: "If GBP cannot be verified within 7 days, escalate", status: "proposed" as const },
  { id: "EXP-03", name: "Hotel concierge card drop", hypothesis: "Distributing origin cards to 8 nearby hotels drives tourist visits.", cost: "S/. 200–400", metric: "Coupon code redemptions from hotel cards", stopRule: "0 redemptions in 30 days", status: "proposed" as const },
  { id: "EXP-04", name: "Named-drink menu board", hypothesis: "Featuring Ursagroni + Maracumango prominently raises their share of orders.", cost: "S/. 0–150", metric: "% of orders that are named drinks", stopRule: "No shift in 21 days", status: "proposed" as const },
  { id: "EXP-05", name: "Cookie pairing table sign", hypothesis: "A pairing card raises side attach rate.", cost: "S/. 0–60", metric: "Side attach rate", stopRule: "No lift in 14 days", status: "proposed" as const },
  { id: "EXP-06", name: "Weekly cupping night", hypothesis: "A monthly cupping builds community and retail bean sales.", cost: "S/. 200–560", metric: "Attendance; retail bean sales post-event", stopRule: "Attendance <6 for 2 consecutive months", status: "proposed" as const },
  { id: "EXP-07", name: "Creator pilot (3 creators)", hypothesis: "3 targeted creator posts drive profile visits and saves.", cost: "S/. 1,200–3,000", metric: "Profile visits, saves, directions clicks", stopRule: "CPM-equivalent > S/. 40 with no store-visit lift", status: "proposed" as const },
  { id: "EXP-08", name: "WhatsApp consent list", hypothesis: "A consented WhatsApp list drives repeat visits with low cost.", cost: "S/. 0–150", metric: "List growth; redemption rate of WhatsApp offers", stopRule: "Unsubscribe rate > 5% per send", status: "proposed" as const },
  { id: "EXP-09", name: "Rappi menu optimisation", hypothesis: "Re-photographing delivery items + adding bundles raises delivery AOV.", cost: "S/. 0–400", metric: "Delivery AOV; bundle share", stopRule: "No AOV lift in 30 days", stop: false, status: "proposed" as const },
  { id: "EXP-10", name: "TripAdvisor claiming", hypothesis: "Claiming the TripAdvisor listing (currently 0 reviews) unlocks review-channel growth.", cost: "S/. 0", metric: "Reviews per month; average rating", stopRule: "If claim fails, move to Google-first", status: "proposed" as const },
  { id: "EXP-11", name: "Ursa Mañana subscription pilot", hypothesis: "S/. 20/month unlimited coffee (7–10am) is net-profitable at ≥60% side attach.", cost: "S/. 0–300 (pilot setup)", metric: "Subscribers; side attach; net profit/subscriber; cannibalization %", stopRule: "Blended profit/subscriber < 0 after 60 days", status: "proposed" as const },
];

export const BUDGET_SCENARIOS = [
  {
    name: "Lean",
    monthlyPEN: 2500,
    focus: "Free + owned channels first: GBP, WhatsApp, organic Reels, hotel cards, story cards",
    items: [
      { item: "Google Business Profile optimisation", cost: 0 },
      { item: "Story cards + table signs (print)", cost: 300 },
      { item: "Hotel concierge cards (8 hotels)", cost: 300 },
      { item: "1 creator pilot (micro)", cost: 800 },
      { item: "WhatsApp list tooling + consent", cost: 150 },
      { item: "Reel production (in-house, 4/month)", cost: 600 },
      { item: "Contingency", cost: 350 },
    ],
  },
  {
    name: "Moderate",
    monthlyPEN: 7200,
    focus: "Add paid social, 2–3 creators, cupping nights, Rappi optimisation",
    items: [
      { item: "Lean baseline", cost: 2500 },
      { item: "Paid social (Meta, Miraflores radius)", cost: 1800 },
      { item: "2 additional creators", cost: 1600 },
      { item: "Monthly cupping night", cost: 560 },
      { item: "Rappi menu re-photography + bundles", cost: 400 },
      { item: "Landing page + email tooling", cost: 340 },
    ],
  },
  {
    name: "Growth",
    monthlyPEN: 16500,
    focus: "Add tourism partnerships, B2B office sampling, subscription pilot, photographer",
    items: [
      { item: "Moderate baseline", cost: 7200 },
      { item: "Tourism / hotel partnership programme", cost: 2400 },
      { item: "B2B office sampling (10 offices)", cost: 1800 },
      { item: "Subscription pilot build + support", cost: 1200 },
      { item: "Contract photographer (monthly)", cost: 1500 },
      { item: "Paid search + maps ads", cost: 1400 },
      { item: "Contingency", cost: 1000 },
    ],
  },
];

export const ROADMAP = [
  {
    phase: "First 72 hours",
    items: [
      "Claim / verify Google Business Profile with photos, hours, menu link",
      "Photograph the two bars, named drinks, and bean bags in good light",
      "Print story cards + cookie-pairing table signs (EXP-01, EXP-05)",
      "Add a WhatsApp business number and consent prompt at the till",
      "Pin a 'directions' Reel concept and brief the first creator",
    ],
  },
  {
    phase: "30 days",
    items: [
      "Launch the Gram of the Week series and Bear's Morning Ritual Stories",
      "Run EXP-01 through EXP-05; review at day 21",
      "Distribute hotel concierge cards to 8 nearby properties (EXP-03)",
      "Publish the first 8 Reels from the content calendar",
      "Claim TripAdvisor listing (EXP-10); request reviews from regulars",
    ],
  },
  {
    phase: "60 days",
    items: [
      "Launch the first paid social campaign (Miraflores radius, 3km)",
      "Run the first monthly cupping night (EXP-06)",
      "Begin creator pilot with 3 creators (EXP-07)",
      "Optimise Rappi menu: re-photography + bundles (EXP-09)",
      "Open the Ursa Mañana subscription waitlist (EXP-11 prep)",
    ],
  },
  {
    phase: "90 days",
    items: [
      "Launch Ursa Mañana subscription pilot (capped at 50 subscribers)",
      "Evaluate all experiments; kill or graduate each",
      "Publish the first quarterly origin report (transparency piece)",
      "Begin B2B office sampling if Growth budget approved",
      "Decide on Level-2 (distinctive growth system) brand rollout",
    ],
  },
];

export const TWELVE_MONTH_ROADMAP = [
  { quarter: "Q1", theme: "Foundations & discovery", focus: "GBP, organic content, experiments 01–05, first cupping" },
  { quarter: "Q2", theme: "Distribution & creators", focus: "Paid social, creator network, Rappi optimisation, hotel pipeline" },
  { quarter: "Q3", theme: "Continuity & community", focus: "Subscription pilot, membership tier, second cupping cohort" },
  { quarter: "Q4", theme: "B2B & wholesale", focus: "Office sampling, wholesale bean accounts, seasonal Lonya release" },
];

export const SOURCES = [
  // First-party observations (Ursa's own channels) — observed, not independently verified
  { id: "S1", label: "Instagram @ursacoffeeperu", url: "https://www.instagram.com/ursacoffeeperu/", status: "partial" as const, note: "Bio, posts, reels covers sampled 2026-08-01. First-party observation — confirms what Ursa says about itself." },
  { id: "S2", label: "Facebook /UrsaCoffeePeru", url: "https://www.facebook.com/UrsaCoffeePeru/", status: "partial" as const, note: "Public page; limited post access. First-party." },
  { id: "S3", label: "Rappi — Ursa Coffee Roasters", url: "https://www.rappi.com.pe/restaurantes/77182-ursa-coffee-roasters", status: "partial" as const, note: "Delivery menu and pricing. First-party platform listing." },
  { id: "S4", label: "CoffeePass Perú — Ursa", url: "https://coffeepass.pe/marcas/ursa-coffee-roasters/", status: "partial" as const, note: "Membership platform listing. First-party." },
  { id: "S5", label: "TripAdvisor — Ursa Coffee Roasters", url: "https://www.tripadvisor.com.pe/Restaurant_Review-g294316-d32878304-Reviews-Ursa_Coffee_Roasters-Lima_Lima_Region.html", status: "partial" as const, note: "Listing exists; ~0 reviews at snapshot (2026-08-01). Re-checked 2026-08-01: still 'No reviews for this property yet'." },
  { id: "S6", label: "Corner.inc — Ursa Coffee Roasters", url: "https://www.corner.inc/place/pqGK5KMpViS2", status: "verified" as const, note: "Independent listing aggregator. Updated Dec 26, 2025. Confirms roastery, address, hours, 'baristas double as coffee educators'." },
  { id: "S7", label: "mindtrip.ai — Ursa listing", url: "https://mindtrip.ai/restaurant/lima-central-peru/ursa-coffee-roasters/re-5CeuedW6", status: "partial" as const, note: "Independent listing. Confirms address. Phone +51 938 636 645 (conflicts with Instagram +51 973 619 428 — unresolved)." },
  // Framework references — suggestive, not empirically validated for cafés
  { id: "S8", label: "Acquisition.com — Offers training", url: "https://www.acquisition.com/training/offers", status: "partial" as const, note: "Hormozi framework reference. Framework, not café-specific empirical evidence." },
  { id: "S9", label: "Acquisition.com — Leads start here", url: "https://www.acquisition.com/training/leads/start-here", status: "partial" as const, note: "Lead generation reference. Framework." },
  { id: "S10", label: "Rory Sutherland — FS Knowledge Project", url: "https://fs.blog/knowledge-project-podcast/rory-sutherland-2/", status: "partial" as const, note: "Behavioral marketing reference. Influential, not café-specific." },
  // Industry context
  { id: "S11", label: "Fresh Cup — 2025 café trends", url: "https://www.freshcup.com/", status: "partial" as const, note: "Industry trend reference. Context, not Ursa-specific." },
  { id: "S12", label: "Premios Somos 2024 — Punto Café", url: "n/a", status: "verified" as const, note: "Competitor award (Punto Café won 'Best Specialty Café in Peru' 2024). Verifiable fact about a competitor." },
  { id: "S13", label: "CAM Café Perú — EXPERIENCE 2025 Competition", url: "https://camcafeperu.com.pe/EN/article.php?id=237", status: "verified" as const, note: "NEW (2026-08-01): Ursa Coffee is in the TOP 5 of the Specialty Coffee Shop category. 1st: Monótono Coffee, 2nd: Punto Café. Jury visited 40+ shops across 17 districts. Published Dec 10, 2025." },
  { id: "S14", label: "World's 100 Best Coffee Shops — Puku Puku nomination", url: "n/a", status: "verified" as const, note: "Puku Puku nominated. Verifiable competitor fact." },
  // Competitor observations
  { id: "S15", label: "Punto Café (competitor)", url: "n/a", status: "partial" as const, note: "Miraflores direct competitor. Observed via public listings." },
  { id: "S16", label: "Neira Café Lab (competitor)", url: "n/a", status: "partial" as const, note: "Miraflores + 3 locations. Founder: barista champion Harrysson Neira." },
  { id: "S17", label: "Tostaduría Bisetti (competitor)", url: "n/a", status: "partial" as const, note: "Barranco pioneer. 'Escuela de café' positioning." },
  { id: "S18", label: "Puku Puku (competitor)", url: "n/a", status: "partial" as const, note: "Multiple Lima locations. 'Microlotes' positioning." },
  { id: "S19", label: "Terrua Café (competitor)", url: "n/a", status: "partial" as const, note: "Miraflores. US$25 paid tasting — premium experience pricing." },
  { id: "S20", label: "Monótono Coffee (competitor)", url: "n/a", status: "partial" as const, note: "NEW: Barranco. 1st place CAM Café 2025. Previously not in dossier." },
  // Benchmarks
  { id: "S21", label: "Specialty coffee marginal cost benchmark", url: "n/a", status: "partial" as const, note: "US$0.75–1.20/cup industry benchmark. Not Ursa-specific; used for calculator defaults." },
  { id: "S22", label: "Lima subscription market gap", url: "n/a", status: "partial" as const, note: "No Lima specialty café currently offers unlimited-cup subscription. Market observation, not verified exhaustively." },
  // Owner statement — unverified
  { id: "S23", label: "Owner brief — brand direction", url: "n/a", status: "unverified" as const, note: "Owner-described: Art Nouveau, browns/greens, bear motif, specialty roasting. Starting lead, not independently verified." },
];

export const OPEN_QUESTIONS = [
  "Monthly marketing budget range (lean / moderate / growth)?",
  "Average ticket size and best / worst sellers from POS?",
  "Current repeat-visit rate or any loyalty data?",
  "Size of existing customer email / WhatsApp list with consent?",
  "Staff capacity for classes, cuppings, or creator collaborations?",
  "Owner-supplied logo and packaging asset pack for visual verification of the Art Nouveau / bear motif / palette?",
];
