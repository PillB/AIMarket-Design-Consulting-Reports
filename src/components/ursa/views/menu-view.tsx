"use client";

import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import {
  Pill,
  Callout,
  StatBlock,
  EvidenceTag,
  SectionBadge,
  BearMark,
  ArtNouveauDivider,
} from "../ursa-brand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Coffee,
  Snowflake,
  Droplet,
  Croissant,
  Sandwich,
  Gift,
  Sparkles,
  Clock,
  TrendingUp,
  FlaskConical,
  CircleSlash,
  CheckCircle2,
  ArrowRight,
  Target,
  Users,
  Search,
  ClipboardCheck,
} from "lucide-react";
import { useNavigate } from "@/lib/ursa-nav";
import { URSA_FACTS, VERIFIED_BEVERAGES, VERIFIED_FOOD } from "@/lib/ursa-data";

// ---------------------------------------------------------------
// Reconstructed current menu — modelled on the .ursa-menu prototype
// (double border, centered crest, dotted leaders, label-font prices).
// Verified items come from VERIFIED_BEVERAGES / VERIFIED_FOOD.
// Standard espresso-bar items are reconstructed from the Rappi
// snapshot (Source S3, 2026-08-01). Prices marked * are inferred
// from category positioning and should be confirmed at the bar.
// ---------------------------------------------------------------

type MenuItem = {
  name: string;
  price: string;
  note?: string;
  verified?: boolean;
  signature?: boolean;
};

type MenuSection = {
  id: string;
  label: string;
  items: MenuItem[];
};

const CURRENT_MENU_SECTIONS: MenuSection[] = [
  {
    id: "espresso",
    label: "Barra Espresso",
    items: [
      { name: "Espresso", price: "S/. 6" },
      { name: "Cortado", price: "S/. 8" },
      { name: "Americano", price: "S/. 8" },
      { name: "Flat White", price: "S/. 10" },
      { name: "Capuccino", price: "S/. 10" },
      { name: "Latte", price: "S/. 11" },
      { name: "Mocha", price: "S/. 12" },
      { name: "Black Label", price: "S/. 14", note: "Rotando · micro-lote de la semana" },
      {
        name: "Ursagroni",
        price: "S/. 18",
        note: "Espresso · bitter · cítrico · la bebida más fotografiada",
        verified: true,
        signature: true,
      },
    ],
  },
  {
    id: "coldbrew",
    label: "Barra Coldbrew",
    items: [
      { name: "Coldbrew", price: "S/. 10" },
      { name: "Coldbrew Tonic", price: "S/. 13" },
      {
        name: "Durazno Clarificado",
        price: "S/. 14",
        note: "Durazno · cold brew clarificado",
        verified: true,
        signature: true,
      },
      {
        name: "Maracumango",
        price: "S/. 14",
        note: "Maracuyá · mango · verano permanente",
        verified: true,
        signature: true,
      },
    ],
  },
  {
    id: "filtrados",
    label: "Filtrados",
    items: [
      { name: "Filtrado de la Casa", price: "S/. 8", note: "Rotando diario" },
      { name: "V60", price: "S/. 12" },
      { name: "Chemex (para dos)", price: "S/. 22" },
      {
        name: "Filtrado Lonya",
        price: "S/. 14 *",
        note: "Utcubamba, Amazonas · 1,750m · Bourbon lavado",
        verified: true,
        signature: true,
      },
    ],
  },
  {
    id: "pastries",
    label: "Pastelería",
    items: [
      { name: "House-made Cookie", price: "S/. 5 *", verified: true },
      { name: "Financier de Pera", price: "S/. 6 *", verified: true, signature: true },
    ],
  },
  {
    id: "savory",
    label: "Salado",
    items: [
      {
        name: "Empanada de Carne con Bechamel",
        price: "S/. 12 *",
        note: "Verificado en post de Instagram acompañando el Ursagroni",
        verified: true,
        signature: true,
      },
    ],
  },
];

// ---------------------------------------------------------------
// New product proposals — locally authored, evaluated against the
// 16-criteria framework. Each proposal shows the six most
// decision-critical criteria as visible rows; the remaining ten are
// summarised in chips.
// ---------------------------------------------------------------

type Proposal = {
  id: string;
  name: string;
  spanish?: string;
  category:
    | "Signature coffee"
    | "Cold coffee"
    | "Seasonal"
    | "Non-coffee"
    | "Pastries"
    | "Retail beans"
    | "Experiences";
  concept: string;
  whyThisProduct: string;
  customerNeed: string;
  evidence: string;
  brandFit: string;
  tasteConcept: string;
  prepTime: string;
  margin: string; // lean/moderate/growth PEN
  operationalTest: string;
  testMethod: string;
  stopRule: string;
  pricingLean: number;
  pricingModerate: number;
  pricingGrowth: number;
  pricingRationale: string;
};

const PROPOSALS: Proposal[] = [
  {
    id: "P-01",
    name: "Oso Negro",
    spanish: "Black bear · double ristretto over warm honey",
    category: "Signature coffee",
    concept:
      "Doble ristretto de Black Label vertido sobre una cucharada de miel tibia y una lágrima de espresso frío. Profundo, oscuro, con un dulzor que aparece tarde. Nombrado por el oso andino de las nieblas.",
    whyThisProduct:
      "Ursa currently has no drink that leans into the dark/forest side of the bear character — every signature drink is bright or fruity (Ursagroni, Maracumango, Durazno Clarificado). Oso Negro fills the 'dark, brooding, after-dinner' slot that no existing Ursa drink occupies. The Black Label roast is already in rotation; this is a new preparation of an existing asset, not a new ingredient.",
    customerNeed:
      "Coffee Curious + Morning Regular who want an intense, low-milk afternoon/evening coffee. The job: 'help me end my day with something deliberate, not a quick coffee.' Addresses the afternoon daypart (3–6pm) where Ursa's current menu has no signature drink.",
    evidence:
      "CENSUS-1: Arabica Espresso Bar owns the stand-up purist espresso niche; Neira's champion-quality drinks are praised but unnamed. No competitor in the 18-business census offers a honey-ristretto signature — the slot is uncontested. Honey is a Peruvian staple (non-imported), reinforcing the origin-story pillar.",
    brandFit:
      "Perfecto — el nombre es un nombre de la casa (Oso + negro del Black Label). Refuerza el personaje sin apartarse del café.",
    tasteConcept:
      "Amargo de ristretto → miel cálida → finish de chocolate negro. La temperatura de la miel controla la textura final.",
    prepTime: "3 min (servido en copa pequeña precalentada).",
    margin: "Alto — la miel cuesta más que el azúcar pero el ristretto usa la mitad de dosis de un latte.",
    operationalTest:
      "2-week batch test: pre-portion honey in 5g cups; train 1 barista on the pour. Measure (a) prep time vs flat white baseline, (b) honey waste % per batch, (c) customer repeat-rate within 14 days.",
    testMethod:
      "Promocionar 14 días como 'shot del barista'. Medir pedidos/día y solicitudes de repetición.",
    stopRule: "Menos de 4/día tras 14 días → reformular como shot de cortesía, no producto.",
    pricingRationale:
      "S/. 9–13. Anchored below Ursagroni (S/. 18) because Oso Negro is espresso-only, no tonic or cold-brew base. Above flat white (S/. 10) at moderate because the named preparation + honey adds perceived value. Census benchmark: Arabica's espresso price band (S/. 6–10) and Neira's premium espresso tier; Ursa's own espresso (S/. 6) and Black Label (S/. 14) bracket the range.",
    pricingLean: 9,
    pricingModerate: 11,
    pricingGrowth: 13,
  },
  {
    id: "P-02",
    name: "Media Luna",
    spanish: "Half-moon cortado with orange zest",
    category: "Signature coffee",
    concept:
      "Cortado servido en taza media luna (molde exclusivo). Espuma de leche con ralladura de naranja. La forma de media luna repite los motivos Art Nouveau del local.",
    whyThisProduct:
      "Ursa has no drink that explicitly visualizes the Art Nouveau language in the cup itself. The half-moon shape makes the visual identity drinkable — every photo carries the brand language, not just the drink. This is the only proposal where the cup IS the brand asset.",
    customerNeed:
      "Tourist Explorer + Coffee Curious who want a photogenic, ownable cup. The job: 'give me something I can't get anywhere else in Lima, that I want to photograph and share.' Directly addresses the @ursacoffeeperu tag rate metric.",
    evidence:
      "CENSUS-1: 0 of 18 competitors use a custom cup shape as a brand asset. The Art Nouveau half-moon form is uncontested. Tourist-Explorer persona validated by 8+ hotels within walking distance (CENSUS-1) — photo-worthy drinks travel further than generic ones.",
    brandFit:
      "Fuerte — la forma de media luna es visualmente ownable y fotogénica; ya pertenece al lenguaje visual de Ursa.",
    tasteConcept:
      "Cortado equilibrado con un aroma cítrico que abre la copa antes del primer sorbo. Sin endulzar — solo aroma.",
    prepTime: "2.5 min (requiere taza especial y rallador).",
    margin: "Medio-alto — la ralladura de naranja es barata; la taza es costoso único.",
    operationalTest:
      "Order 30 prototype cups; train 2 baristas on the zest + pour. Measure (a) photo-tag rate at Ursa's geo-tag (target ≥ 3/week), (b) cup breakage rate per 30 servings, (c) repeat order rate within 14 days.",
    testMethod:
      "Servir como edición de 30 tazas. Contar fotografías compartidas en Instagram con la geo-tag de Ursa.",
    stopRule: "Menos de 3 fotos compartidas / semana → retirar la taza, mantener el cortado.",
    pricingRationale:
      "S/. 9–12. Anchored against cortado (S/. 8) with a +S/. 1–4 premium for the named preparation and the cup asset. Below flat white (S/. 10) at lean to drive trial; at moderate, parity with flat white. Census benchmark: Estación 329 cortado band and Neira specialty-cortado premium; Ursa's own cortado (S/. 8) as floor.",
    pricingLean: 9,
    pricingModerate: 11,
    pricingGrowth: 12,
  },
  {
    id: "P-03",
    name: "Clarificado de Lúcuma",
    spanish: "Lúcuma-clarified cold brew",
    category: "Cold coffee",
    concept:
      "Cold brew clarificado con leche de lúcuma usando la técnica de Durazno Clarificado. La lúcuma es el fruto emblemático del Perú; al clarificarla, queda un pour ámbar limpio, sin sedimento.",
    whyThisProduct:
      "Extends the existing 'Clarificado' line (Durazno Clarificado) with a Peruvian-native fruit. Lúcuma is the most recognizable Peruvian fruit nationally and internationally — it's the obvious next clarificado, not an invented flavour. This is line extension, not line invention.",
    customerNeed:
      "Tourist Explorer + Coffee Curious who want a Peruvian flavour experience but don't want milk-heavy drinks. The job: 'let me taste something distinctly Peruvian without dairy.' Addresses the lactose-intolerant + vegan segment.",
    evidence:
      "CENSUS-1: 0 competitors in the 18-business census offer a lúcuma-coffee drink. Milenaria's açaí bowls (same street, 170m) show demand for fruit-forward breakfast drinks in the catchment. Lúcuma is the national fruit — brand fit + ingredient overlap are both strong.",
    brandFit:
      "Fuerte — extiende la línea 'Clarificado' (ya propia) con un ingrediente nacionalmente reconocido.",
    tasteConcept:
      "Cold brew con dulzor sedoso de lúcuma, sin lácteos visibles. Color ámbar. Finish limpio.",
    prepTime: "4 min de servicio + 24h de clarificación en batch.",
    margin: "Alto — la lúcuma es económica en Lima y el proceso clarificado escala en batch.",
    operationalTest:
      "4-week batch test: 24h clarified in 2L batches. Measure (a) clarification yield % per batch, (b) lúcuma cost per serving, (c) daily units sold vs Durazno Clarificado baseline.",
    testMethod:
      "Pilot de 4 semanas en barra Coldbrew. Medir % de coldbrew vendido que es Clarificado de Lúcuma.",
    stopRule: "Menos de 5/día tras 4 semanas → reformular como estacional de otoño.",
    pricingRationale:
      "S/. 13–16. Parity with Durazno Clarificado (S/. 14) and Maracumango (S/. 14) at lean/moderate; +S/. 2 at growth because lúcuma's national-fruit status supports a small premium. Census benchmark: Terrua's flight ceiling is US$25 (~S/. 93) — individual drinks stay well below; Ursa's own coldbrew band (S/. 10–14) as floor.",
    pricingLean: 13,
    pricingModerate: 15,
    pricingGrowth: 16,
  },
  {
    id: "P-04",
    name: "Té de Oso",
    spanish: "Cold brew over cascara tea ice",
    category: "Cold coffee",
    concept:
      "Cold brew servido sobre un cubo grande de hielo de té de cáscara (cascara). Conforme el hielo se derrite, la taza evoluciona — primero café puro, luego café con notas de fruta seca. El oso que toma su tiempo.",
    whyThisProduct:
      "Operationalizes 'un gramo a la vez' as a single-drink experience: time as ingredient. No existing Ursa drink evolves in the cup — Té de Oso is the only proposal where the drink changes as you drink it. The cascara is a roastery byproduct, so the ingredient cost is zero.",
    customerNeed:
      "Remote Worker + Coffee Curious who stay 90+ minutes and want a drink that rewards lingering. The job: 'give me a cup that gives me a reason to stay.' Directly addresses the dwell-time metric (≥ 90 min) in the Remote Worker persona.",
    evidence:
      "CENSUS-1: 0 competitors in the 18-business census use cascara (coffee-cherry byproduct) as a drink ingredient. The slow-bar format is uncontested in catchment. Terrua's tasting format (US$25) shows demand for slow coffee experiences; Té de Oso is the accessible single-cup version.",
    brandFit:
      "Muy fuerte — captura 'un gramo a la vez' en una sola bebida: el tiempo como ingrediente.",
    tasteConcept:
      "Coffee-forward al inicio, frutal al final. Cada sorbo es distinto. La cáscara viene del mismo grano.",
    prepTime: "3 min de servicio + preparación previa de cubos de cascara.",
    margin: "Alto — cascara es subproducto del grano; el precio se ancla en la experiencia.",
    operationalTest:
      "30-unit drop in slow-bar daypart (Sat–Sun 10am–2pm). Measure (a) dwell time of Té de Oso customers vs control (same daypart, regular coldbrew), (b) cascara ice melt time per serving, (c) NPS at first sip vs last sip.",
    testMethod:
      "Servir 30 unidades como 'edición de slow bar'. Filmar reacciones y pedir testimonios.",
    stopRule: "NPS < 8/10 o menos de 8 unidades vendidas → reformular como Cata Privada.",
    pricingRationale:
      "S/. 14–18. Above Durazno Clarificado (S/. 14) because of the experience premium (evolving cup); below Cata de Tres Orígenes (S/. 22+) because it's a single drink. Census benchmark: Terrua's US$25 (~S/. 93) flight is the upper anchor; this is the accessible 'evolving cup' alternative for the same daypart.",
    pricingLean: 14,
    pricingModerate: 16,
    pricingGrowth: 18,
  },
  {
    id: "P-05",
    name: "Cosecha de Amazonas",
    spanish: "Seasonal Utcubamba flight · three micro-lots",
    category: "Seasonal",
    concept:
      "Vuelo de tres micro-lotes de Utcubamba (Amazonas) servidos lado a lado: lavado, honey, natural. Una hoja con notas de cata y altitud. Mientras dure la cosecha.",
    whyThisProduct:
      "Deepens the Filtrado Lonya line from a single drink to a multi-process experience of the SAME origin. This is the natural product extension of Ursa's most ownable origin story — not a new origin, but a deeper one. Defends the Lonya line against imitation by going deeper, not wider.",
    customerNeed:
      "Coffee Curious + pairs/groups who want a shared tasting experience. The job: 'help me understand what process does to flavour, side by side.' Directly addresses the cupping-attendance metric in the Coffee Curious persona.",
    evidence:
      "CENSUS-1: Terrua's US$25 flight (513 Google reviews) validates demand for paid tasting. Cate Tasting Room (190 Google reviews, 4.6★) reinforces. Ursa's Filtrado Lonya (Utcubamba, Amazonas, 1,750m) is already the ownable origin — the flight extends it without requiring a new supply chain.",
    brandFit:
      "Fuerte — profundiza el Filtrado Lonya en una experiencia de origen, no solo una bebida.",
    tasteConcept:
      "Tres tazas pequeñas, tres procesos. El cliente aprende a distinguir el mismo grano tratado distinto.",
    prepTime: "8 min (tres filtrados manuales servidos simultáneamente).",
    margin: "Medio-alto — el grano es el mismo, pero el tiempo de barista sube.",
    operationalTest:
      "Run as monthly Cata Privada for 60 days. Measure (a) conversion to 250g retail bag (target ≥ 30%), (b) repeat-attendance rate (target ≥ 25% return within 60 days), (c) average group size per booking.",
    testMethod:
      "Lanzar en Cata Privada y cupping mensual. Medir conversión a venta de bolsa de 250g.",
    stopRule: "Menos de 6 vuelos/mes → solo disponible en catas guiadas.",
    pricingRationale:
      "S/. 22–30. Below Terrua's US$25 (~S/. 93) by a wide margin — accessible entry to paid tasting. Above Chemex-para-dos (S/. 22) because the flight is curated + has story cards. Census benchmark: Terrua US$25 flight, Cate paid-tasting format. Ursa's own Filtrado Lonya (S/. 14) × 3 = S/. 42 — the curation + story-card premium is what justifies the lift.",
    pricingLean: 22,
    pricingModerate: 26,
    pricingGrowth: 30,
  },
  {
    id: "P-06",
    name: "Invierno Andino",
    spanish: "Spiced pour-over with chincho and panela",
    category: "Seasonal",
    concept:
      "Pour-over preparado con una pizca de chincho (hierba andina) en el lecho y panela en el agua. Cálido, herbal, sin lácteos. Inverso al Clarificado de Lúcuma: esto es la montaña en invierno.",
    whyThisProduct:
      "Ursa has no seasonal winter drink. Summer is owned by Maracumango + Clarificados; winter has no answer. Invierno Andino is the cold-weather counterpart — warm, herbal, no dairy. Chincho and panela are both Peruvian staples with no import cost, and seasonal scarcity (chincho harvested May–August) creates urgency.",
    customerNeed:
      "Morning Regular + Coffee Curious in Lima's winter (June–September) who want a warming, non-milky coffee. The job: 'give me a hot drink that isn't a latte.' Addresses the winter seasonality gap in Ursa's menu.",
    evidence:
      "CENSUS-1: 0 competitors in the 18-business census offer an Andean-herb coffee. Chincho and panela are both Peruvian staples with no import cost. Seasonal scarcity (chincho is harvested May–August) creates urgency and a natural end-of-season stop rule.",
    brandFit:
      "Fuerte — la paleta (hierba, panela, café) está dentro del universo de ingredientes peruanos.",
    tasteConcept:
      "Pour-over con aromática de chincho y dulzor profundo de panela. Sin azúcar añadido más allá de la panela.",
    prepTime: "5 min.",
    margin: "Alto — chincho y panela son económicos; precio se ancla en estacionalidad.",
    operationalTest:
      "6-week launch in June. Measure (a) sell-through vs Filtrado de la Casa baseline, (b) repeat-order rate within 14 days, (c) customer feedback on herbal balance (target ≥ 4/5 on in-store feedback card).",
    testMethod:
      "Lanzar en junio (inicio de invierno) por 6 semanas. Medir repetición y puntuación en cata.",
    stopRule: "Menos de 4/día tras 6 semanas → reformular para verano con cascara helada.",
    pricingRationale:
      "S/. 12–16. Parity with V60 (S/. 12) at lean; above V60 at moderate because of the named preparation + seasonal story. Below Filtrado Lonya (S/. 14) to drive trial. Census benchmark: V60/Specialty pour-over band; Ursa's own V60 (S/. 12) and Filtrado Lonya (S/. 14) bracket the range.",
    pricingLean: 12,
    pricingModerate: 14,
    pricingGrowth: 16,
  },
  {
    id: "P-07",
    name: "Chocolate del Oso",
    spanish: "Single-origin Peruvian cacao drinking chocolate",
    category: "Non-coffee",
    concept:
      "Chocolate caliente de cacao peruano de origen único (Cusco o San Martín). Servido en taza de barro. Sin jarabe — solo cacao, agua, un toque de panela.",
    whyThisProduct:
      "Fills the non-coffee slot for the 1–2 customers per day who accompany coffee drinkers but don't drink coffee. Cacao de origen extends the 'origin story' pillar beyond coffee without diluting the roastery identity. Critically: this is a single menu item, NOT a chocolate-tasting category (which would dilute pure-coffee identity per CENSUS-1 Cate implication).",
    customerNeed:
      "Remote Worker + Tourist Explorer accompanying coffee drinkers who want a hot drink but no coffee. The job: 'let me stay with my friend without forcing a coffee order.' Addresses the group-order dynamic.",
    evidence:
      "CENSUS-1: Cate Tasting Room combines coffee + chocolate but Ursa should NOT add chocolate tasting — keep cacao as a single menu item, not a category. Cacao de origen (Cusco/San Martín) extends Ursa's origin-story pillar without requiring a new supply chain beyond the roastery's existing relationships.",
    brandFit:
      "Fuerte — refuerza el universo 'origen peruano' sin salir de la identidad de tostador.",
    tasteConcept:
      "Chocolate profundo, no dulce. El barro mantiene la temperatura; la panela aparece tarde.",
    prepTime: "4 min (jarra caliente preparada en batch cada 2h).",
    margin: "Medio — cacao de origen cuesta más que jarabe, pero el ticket promedio sube.",
    operationalTest:
      "6-week winter campaign. Measure (a) % of group orders where ≥ 1 non-coffee drink is purchased (target ≥ 15%), (b) chocolate repeat rate within 30 days, (c) cacao cost per serving vs target S/. 3.50.",
    testMethod:
      "Campaña de invierno 6 semanas. Medir % de pedidos sin café que son chocolate.",
    stopRule: "Menos de 5/día tras 6 semanas → reducir a edición invernal anual.",
    pricingRationale:
      "S/. 12–16. Parity with Flat White (S/. 10) + Mocha (S/. 12) band at moderate. Below Cata flight (S/. 22+) and above cookie (S/. 5). Census benchmark: no direct competitor for drinking chocolate in catchment — price set by Ursa's own menu bands (mocha S/. 12 as the natural anchor).",
    pricingLean: 12,
    pricingModerate: 14,
    pricingGrowth: 16,
  },
  {
    id: "P-08",
    name: "Infusión de Muña",
    spanish: "Andean mint infusion",
    category: "Non-coffee",
    concept:
      "Infusión caliente de muña (menta andina) servida en taza de vidrio. Para quien no toma café pero quiere quedarse en la barra.",
    whyThisProduct:
      "A non-coffee, non-cacao option for caffeine-avoidant customers. Muña is the most accessible Andean herb — recognizable, cheap, and food-safe. Not a hero product; a courtesy product. The job is to keep the non-coffee companion in the bar, not to win new customers.",
    customerNeed:
      "Non-coffee drinkers (pregnant, caffeine-sensitive, evening visitors). The job: 'let me order something without apologising for not drinking coffee.' Directly addresses the group-order dynamic where one member doesn't drink coffee.",
    evidence:
      "CENSUS-1: 0 competitors in the 18-business census offer muña. The herb is widely available in Lima markets. Demand is small but persistent — NovaCircle notes Ursa's atmosphere attracts non-coffee companions (the 'cozy and inviting atmosphere' pros theme).",
    brandFit:
      "Aceptable — no es café, pero respeta la paleta andina. Útil para acompañantes y no-cafeteros.",
    tasteConcept:
      "Menta andina con un finish herbáceo más profundo que la menta común. Sin azúcar.",
    prepTime: "3 min.",
    margin: "Alto — muña es barata y seca; el ticket es de infusión premium.",
    operationalTest:
      "4-week availability test. Measure (a) orders/day, (b) % of group orders including a non-coffee drink (target ≥ 10%), (c) customer feedback on taste (target ≥ 4/5 on feedback card).",
    testMethod:
      "Ofrecer 4 semanas como alternativa en barra. Medir pedidos de no-cafeteros.",
    stopRule: "Menos de 3/día tras 4 semanas → retirar y mantener solo Chocolate del Oso.",
    pricingRationale:
      "S/. 8–11. Below all coffee drinks — a courtesy price. At parity with espresso (S/. 6) + small premium for the named herb. Census benchmark: herbal-infusion band not directly benchmarked in catchment; set by Ursa's own menu floor (espresso S/. 6) and the perceived-value of a named Andean herb.",
    pricingLean: 8,
    pricingModerate: 9,
    pricingGrowth: 11,
  },
  {
    id: "P-09",
    name: "Croissant de Lúcuma",
    spanish: "Croissant filled with lúcuma cream",
    category: "Pastries",
    concept:
      "Croissant de masa laminada en casa, relleno de crema de lúcuma. Cómpralo con el Clarificado de Lúcuma y la paleta del desayuno es completa.",
    whyThisProduct:
      "Closes the pairing loop with Clarificado de Lúcuma (P-03). Ursa's food menu has only 2 verified items (financier, empanada) — a third pastry with a drink pairing is the obvious extension, and lúcuma ties it to P-03. The pairing is the product, not the pastry alone.",
    customerNeed:
      "Coffee Curious + Morning Regular who want a pastry that pairs with their named drink. The job: 'give me the pairing that makes my drink better.' Addresses the attach-rate metric in the offer stack (≥ 60% target).",
    evidence:
      "CENSUS-1: El Pan de la Chola (700m) owns 'best bakery in Lima' — Ursa should NOT compete on bakery scale. House-made laminado is the differentiator (credibility, not scale). Lúcuma is the bridge to P-03; the pairing creates a S/. 21–26 bundle that competes with Milenaria's breakfast ticket.",
    brandFit:
      "Fuerte — cierra el pairing con el Clarificado de Lúcuma. El laminado en casa es credibility.",
    tasteConcept:
      "Hojaldre mantequilla + crema de lúcuma sedosa. No excesivamente dulce.",
    prepTime: "Servicio directo (preparación en madrugada).",
    margin: "Medio — laminado es intensivo en mano de obra; el relleno es barato.",
    operationalTest:
      "6-week pilot with daily batch of 12. Measure (a) attach rate with Clarificado de Lúcuma (target ≥ 20%), (b) sell-through by 11am, (c) daily waste % (target ≤ 10%).",
    testMethod:
      "Pilot de 6 semanas. Medir attach rate con Clarificado de Lúcuma.",
    stopRule: "Menos de 8/día o attach rate < 20% con Clarificado → reformular relleno.",
    pricingRationale:
      "S/. 8–11. Above financier (S/. 6) because of the laminado + filling. Below empanada (S/. 12) at lean to drive trial. Census benchmark: El Pan de la Chola bakery prices as upper anchor; Ursa's own verified food prices (financier S/. 6, empanada S/. 12) as floor and ceiling.",
    pricingLean: 8,
    pricingModerate: 10,
    pricingGrowth: 11,
  },
  {
    id: "P-10",
    name: "Alfajor de Café",
    spanish: "Alfajor with coffee-glazed dulce de leche",
    category: "Pastries",
    concept:
      "Alfajor de maicena con dulce de leche glaseado con una reducción de espresso. Pequeño, intenso, marida con cualquier filtrado.",
    whyThisProduct:
      "The alfajor is the most iconic Peruvian pastry. Coffee-glazed dulce de leche ties it to the roastery identity. A small, intense pastry that marries with any pour-over — unlike the croissant (P-09), which pairs with one drink, the alfajor pairs with the whole filtration menu.",
    customerNeed:
      "Coffee Curious + Tourist Explorer who want a take-home Peruvian souvenir food. The job: 'give me something small, intense, and memorable that pairs with any coffee.' Addresses the take-home + retail-attach metric.",
    evidence:
      "CENSUS-1: 0 competitors in the 18-business census offer a coffee-glazed alfajor. The alfajor is a national staple with high recognizability for tourists and locals alike. Coffee-glaze ties it to the roastery without forcing a drink pairing — flexible attach.",
    brandFit:
      "Fuerte — el alfajor es icónico peruano y el glaseado de café lo ancla al oficio.",
    tasteConcept:
      "Maicena que se deshace, dulce de leche sedoso, finish amargo del espresso.",
    prepTime: "Servicio directo (batch semanal).",
    margin: "Alto — ingredientes baratos, ticket de pastry premium.",
    operationalTest:
      "6-week pilot with weekly batch of 24. Measure (a) orders with coffee vs cookie baseline, (b) take-home rate (target ≥ 30% leave in bag), (c) customer feedback on coffee intensity (target ≥ 4/5).",
    testMethod:
      "Pilot de 6 semanas. Medir pedidos de alfajor con café (vs. cookie).",
    stopRule: "Menos de 6/día tras 6 semanas → reformular como mini-alfajor de cata.",
    pricingRationale:
      "S/. 6–9. Above cookie (S/. 5) at lean because of the dulce de leche + glaze. Below financier (S/. 6) at parity, then premium at growth. Census benchmark: Ursa's own verified pastry prices (cookie S/. 5, financier S/. 6, empanada S/. 12) bracket the range; the coffee-glaze justifies the +S/. 1–3 premium over cookie.",
    pricingLean: 6,
    pricingModerate: 8,
    pricingGrowth: 9,
  },
  {
    id: "P-11",
    name: "Gramo del Mes",
    spanish: "Subscription bean of the month · origin-labeled bag",
    category: "Retail beans",
    concept:
      "Cada mes, una bolsa de 250g de un micro-lote, con etiqueta de origen completa (finca, altitud, proceso, varietal, fecha de tueste). Para suscriptores Ursa Mañana y venta en barra.",
    whyThisProduct:
      "Operationalizes 'un gramo a la vez' as a recurring product. The named-drink rotation creates weekly reasons to return; the bean subscription creates monthly reasons. The retail-bag channel is currently Instagram-only (per URSA_FACTS) — this is the structured product that turns social-media interest into recurring revenue.",
    customerNeed:
      "Coffee Curious + Morning Regular who brew at home and want curated monthly selection. The job: 'curate my home coffee so I don't have to choose.' Addresses the retail-bean repeat-purchase metric (≥ 30% target).",
    evidence:
      "CENSUS-1: Puku Puku sells retail bags at S/.49 with TA praise for 'retail bags for home.' Ursa currently Instagram-only — the channel gap is structural. Subscription models validated by Lima's CoffeePass membership (URSA_FACTS.membership). Puku Puku's S/.49 is the direct price benchmark.",
    brandFit:
      "Muy fuerte — operacionaliza 'un gramo a la vez' y 'Gram of the Week' como producto recurrente.",
    tasteConcept:
      "Varía — la promesa es: cada mes, un grano nuevo con su historia completa.",
    prepTime: "Empaque semanal en batch.",
    margin: "Alto — retail bean margin es ~60–70% sobre costo de grano verde.",
    operationalTest:
      "Launch 50-subscriber pilot for 3 months. Measure (a) month-3 retention (target ≥ 60%), (b) bag size satisfaction (target ≥ 4/5), (c) conversion to cupping-night attendance (target ≥ 20%).",
    testMethod:
      "Lanzar como suscripción mensual de 50 bolsas. Medir retención al mes 3.",
    stopRule: "Retención < 60% al mes 3 → reformular cadencia o tamaño de bolsa.",
    pricingRationale:
      "S/. 38–52. Puku Puku's S/.49 retail bag is the direct census benchmark — moderate price (S/. 45) sits just below. Above Ursa's own 50g sample (S/. 10) because it's a 250g bag with subscription curation. Below Cata flight (S/. 38+) at parity. The subscription curation (curated selection, story label) justifies the +S/. 7 premium over a generic retail bag.",
    pricingLean: 38,
    pricingModerate: 45,
    pricingGrowth: 52,
  },
  {
    id: "P-12",
    name: "Cata de Tres Orígenes",
    spanish: "Tasting flight · three origins with story cards",
    category: "Experiences",
    concept:
      "Vuelo de tres orígenes peruanos servidos en tres filtrados pequeños, cada uno con una tarjeta de historia (finca, altitud, varietal, proceso). Experiencia pagada para dos personas mínimo.",
    whyThisProduct:
      "Direct counter to Terrua's flat US$25 flight. Ursa's flight is multi-origin (vs Terrua's Villa Rica single-origin) and includes take-home story cards — the asset that survives the visit. This is not a new format; it's a competitive counter to a validated demand.",
    customerNeed:
      "Tourist Explorer + Coffee Curious (pairs) who want a guided experience. The job: 'help me taste and understand three coffees in one sitting.' Addresses the Tourism + Coffee Curious personas simultaneously, with a higher ticket than any single drink.",
    evidence:
      "CENSUS-1: Terrua (US$25 flight, 513 Google reviews) and Cate (tasting room, 190 Google reviews) both validate paid-tasting demand. Ursa's multi-origin Lonya line is the differentiator — Terrua's narrow Villa Rica terroir is a known limitation in their positioning.",
    brandFit:
      "Fuerte — ocupa el territorio que Terrua cobra a US$25, con un stack de valor más visible.",
    tasteConcept:
      "Tres tazas, tres historias. La tarjeta es el activo que el cliente se lleva.",
    prepTime: "10 min (tres filtrados servidos simultáneamente + presentación).",
    margin: "Alto — el grano es barato; el precio se cobra por la experiencia guiada.",
    operationalTest:
      "Run as Saturday drop-in for 60 days. Measure (a) reservations/month (target ≥ 4/week), (b) conversion to 250g retail bag (target ≥ 30%), (c) NPS at end of experience (target ≥ 9/10).",
    testMethod:
      "Pilot 60 días en sábado. Medir reservas/mes y conversión a venta de bolsa.",
    stopRule: "Menos de 2 reservas/mes → reformular como drop-in sábado sin reserva.",
    pricingRationale:
      "S/. 38–55. Direct comparison: Terrua US$25 ≈ S/. 93 — Ursa's flight is 40–60% below the competitor benchmark, accessible entry. Above Chemex-para-dos (S/. 22) because of the guided experience. Above single pour-over (S/. 12–14) × 3 = S/. 36–42 — the story cards + curation justify the premium. Census benchmark: Terrua US$25 flight is the upper anchor; Ursa's own pour-over × 3 is the cost anchor.",
    pricingLean: 38,
    pricingModerate: 45,
    pricingGrowth: 55,
  },
  {
    id: "P-13",
    name: "Tuesta tu propio grano",
    spanish: "Roast-your-own-bean workshop",
    category: "Experiences",
    concept:
      "Taller de 90 minutos: cada participante tuesta 250g de verde en un tostador de muestra, documenta la curva, y se lleva su bolsa a casa. Cupo máximo 4 personas.",
    whyThisProduct:
      "Converts Ursa's visible roaster from a passive credibility asset into an active paid experience. No competitor in the catchment offers hands-on roasting — this is the most defensible 'experience' product because it requires the roaster Ursa already has. The product is the experience + the take-home bag, not a consumable.",
    customerNeed:
      "Coffee Curious + Tourist Explorer who want a memorable, take-home experience (not just a drink). The job: 'help me roast my own bean and take it home.' Addresses the experience-economy segment that Terrua and Cate tap with tasting, but goes one step further into active participation.",
    evidence:
      "CENSUS-1: 0 competitors offer hands-on roasting. Bisetti's 'escuela de café' is lecture-format, not hands-on. Ursa's roaster + Aeropress champion Paulo Sierra credibility (@rutadelcafeperuano, 564 likes) support the education channel. The roaster is a sunk-cost asset; the workshop monetizes it without additional capex.",
    brandFit:
      "Fuerte — la tostadora visible ya es la firma del local; este producto la convierte en experiencia pagada.",
    tasteConcept:
      "No es bebida — es aprendizaje. El producto final es una bolsa personal con curva firmada.",
    prepTime: "90 min + 15 min de limpieza.",
    margin: "Alto — el grano verde es barato; el precio se cobra por la atención del maestro tostador.",
    operationalTest:
      "Run 6 sessions over 60 days, capped at 4 participants. Measure (a) NPS (target ≥ 9/10), (b) session fill rate (target ≥ 75% of sessions full), (c) conversion to Gramo del Mes subscription (target ≥ 30%).",
    testMethod:
      "Pilot 6 sesiones. Medir NPS y conversión a suscripción Gramo del Mes.",
    stopRule: "NPS < 9/10 o menos de 3 sesiones llenas/mes → reformular como demostración gratuita.",
    pricingRationale:
      "S/. 85–140. No direct competitor benchmark in catchment. Anchored against: (a) Terrua US$25 flight (~S/. 93) as the closest paid coffee experience, (b) typical Lima specialist-workshop pricing (S/. 80–150 for 90-min sessions). At moderate (S/. 110), parity with Terrua's flight but with a take-home product (250g roasted bean) — the take-home asset justifies the premium over a flight-only experience.",
    pricingLean: 85,
    pricingModerate: 110,
    pricingGrowth: 140,
  },
];

const PROPOSAL_CATEGORY_META: Record<
  Proposal["category"],
  { icon: React.ReactNode; tone: "gold" | "forest" | "terracotta" }
> = {
  "Signature coffee": { icon: <Coffee size={14} />, tone: "gold" },
  "Cold coffee": { icon: <Snowflake size={14} />, tone: "forest" },
  Seasonal: { icon: <Sparkles size={14} />, tone: "gold" },
  "Non-coffee": { icon: <Droplet size={14} />, tone: "forest" },
  Pastries: { icon: <Croissant size={14} />, tone: "terracotta" },
  "Retail beans": { icon: <Gift size={14} />, tone: "gold" },
  Experiences: { icon: <FlaskConical size={14} />, tone: "forest" },
};

// ---------------------------------------------------------------
// 16-criteria evaluation framework
// ---------------------------------------------------------------

const EVALUATION_CRITERIA = [
  { n: 1, name: "Customer need", desc: "¿Qué necesidad real resuelve? ¿Quién lo pide hoy?" },
  { n: 2, name: "Brand fit", desc: "¿Refuerza al oso, a Art Nouveau, a 'un gramo a la vez'?" },
  { n: 3, name: "Taste concept", desc: "¿Cuál es la primera impresión y el finish?" },
  { n: 4, name: "Preparation time", desc: "Minutos de barista por unidad servida." },
  { n: 5, name: "Ingredient overlap", desc: "¿Usa insumos ya comprados o requiere nuevos?" },
  { n: 6, name: "Training", desc: "Horas de capacitación para alcanzar consistencia." },
  { n: 7, name: "Equipment", desc: "¿Necesita equipo nuevo o usa lo existente?" },
  { n: 8, name: "Waste", desc: "Vida útil del insumo y % esperado de merma." },
  { n: 9, name: "Delivery suitability", desc: "¿Sobrevive 30 min en caja Rappi sin degradarse?" },
  { n: 10, name: "Visual appeal", desc: "¿Es fotografiado y compartido? ¿Es ownable?" },
  { n: 11, name: "Price range", desc: "Rango lean / moderate / growth en PEN, no un costo inventado." },
  { n: 12, name: "Margin potential", desc: "Margen sobre costo, no sobre precio." },
  { n: 13, name: "Operational complexity", desc: "Cuántos puntos de fricción añade al servicio." },
  { n: 14, name: "Test method", desc: "Cómo se mide si la propuesta funciona, en 2–6 semanas." },
  { n: 15, name: "Success metric", desc: "El número específico que dice 'graduar' o 'matar'." },
  { n: 16, name: "Stop / revision rule", desc: "La condición exacta para matar o reformular." },
];

export function MenuView() {
  const navigate = useNavigate();

  return (
    <>
      <ViewHero
        eyebrow="Module 03 · Menu & Product Development"
        title={
          <>
            Evolve the menu without losing the bear — a structured path from
            verified staples to evaluated new products.
          </>
        }
        lede={
          <>
            Ursa already owns a distinctive menu language — four named drinks of two kinds (coined names <em>Ursagroni</em>, <em>Maracumango</em>; origin / descriptive labels <em>Filtrado Lonya</em>, <em>Durazno Clarificado</em>), a two-bar theatre, and a pairing habit. This module reconstructs the verified current menu, then proposes thirteen new products across seven categories, each evaluated against a 16-criteria framework before any test begins — with explicit why-this-product, customer-need, census evidence, operational test, and stop rule for each. No invented costs — only scenario ranges in PEN, anchored against the 1km competitor census.
          </>
        }
        meta={[
          { label: "Snapshot", value: URSA_FACTS.snapshot },
          { label: "Framework", value: "16-criteria evaluation" },
          { label: "Pricing", value: "Scenario ranges, not invented costs" },
          { label: "Sources", value: "Rappi · IG · Facebook" },
        ]}
      />

      <ViewSection>
        <DossierLinkBanner moduleId="03-menu-and-product-development" />
      </ViewSection>

      {/* ---------- Reconstructed current menu ---------- */}
      <ViewSection
        badge="Section 01"
        title="The verified current menu, reconstructed"
        meta="Source · Rappi snapshot 2026-08-01"
      >
        <Grid cols={3}>
          <StatBlock
            value={`${VERIFIED_BEVERAGES.length + VERIFIED_FOOD.length}`}
            label="Verified named items (drinks + food)"
            tone="forest"
          />
          <StatBlock
            value="5"
            label="Menu categories (Espresso · Coldbrew · Filtrados · Pastries · Salado)"
            tone="gold"
          />
          <StatBlock
            value="S/. 5–22"
            label="Verified price range across the menu"
            tone="terracotta"
          />
        </Grid>

        <div className="mt-8 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          {/* Menu prototype card */}
          <MenuCard>
            <div className="ursa-menu__crest">
              <BearMark size={56} className="text-ursa-dark-roast mx-auto" />
              <h3
                className="font-display text-[1.8rem] font-semibold text-ursa-dark-roast mt-2 mb-1"
                style={{ letterSpacing: "0.04em" }}
              >
                Carta Ursa
              </h3>
              <small className="font-label text-[0.66rem] tracking-[0.32em] uppercase text-ursa-gold-text block">
                Alcanfores 183 · Miraflores
              </small>
            </div>
            <ArtNouveauDivider className="my-4" />
            {/* Signature legend */}
            <div className="flex items-center justify-center gap-2 mb-4 text-[0.72rem] text-muted-foreground">
              <span className="inline-block w-2 h-2 rounded-full bg-ursa-gold" aria-hidden="true" />
              <span className="font-label tracking-[0.08em] uppercase">Signature drink — verified named</span>
            </div>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-0">
              {CURRENT_MENU_SECTIONS.map((section) => (
                <div key={section.id} className="ursa-menu__section">
                  <h4 className="font-display italic text-ursa-medium-roast text-center border-t border-b border-ursa-line py-2 my-3 text-[1.1rem]">
                    {section.label}
                  </h4>
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline gap-2 mb-3 text-[0.95rem] group"
                    >
                      <b
                        className="font-display font-semibold text-ursa-dark-roast text-[1.05rem] flex items-center gap-1.5"
                      >
                        {item.signature && (
                          <span
                            className="inline-block w-2 h-2 rounded-full bg-ursa-gold shrink-0"
                            aria-label="Signature drink"
                          />
                        )}
                        {item.name}
                      </b>
                      <span
                        className="flex-1 border-b border-dotted border-ursa-line translate-y-[-3px]"
                        aria-hidden="true"
                      />
                      <span className="font-label text-ursa-medium-roast tracking-[0.04em] text-[0.9rem] font-medium">
                        {item.price}
                      </span>
                      {item.note && (
                        <span className="basis-full italic text-muted-foreground text-[0.8rem] mt-[-4px] mb-1 pl-4 border-l-2 border-ursa-gold/30">
                          {item.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-dashed border-ursa-line">
              <div className="grid sm:grid-cols-3 gap-3 text-center">
                <div>
                  <span className="font-display italic text-ursa-medium-roast text-[1rem]">La Ursa</span>
                  <br />
                  <small className="text-muted-foreground text-[0.78rem]">
                    Ursagroni + empanada · S/. 28
                  </small>
                </div>
                <div>
                  <span className="font-display italic text-ursa-medium-roast text-[1rem]">La Lonya</span>
                  <br />
                  <small className="text-muted-foreground text-[0.78rem]">
                    Filtrado + financier · S/. 20
                  </small>
                </div>
                <div>
                  <span className="font-display italic text-ursa-medium-roast text-[1rem]">La Maracumango</span>
                  <br />
                  <small className="text-muted-foreground text-[0.78rem]">
                    Coldbrew + cookie · S/. 19
                  </small>
                </div>
              </div>
            </div>
          </MenuCard>

          {/* Menu notes */}
          <div className="space-y-4">
            <Callout tone="forest" title="What is verified, and what is reconstructed">
              <p className="m-0">
                The named drinks (<em>Ursagroni</em>, <em>Durazno Clarificado Coldbrew</em>,{" "}
                <em>Maracumango Coldbrew</em>, <em>Filtrado Lonya</em>) and the verified food items
                (financier, empanada, cookies) come from public Instagram and Facebook posts
                (Sources S1, S2). Standard espresso-bar items and their prices are reconstructed
                from the Rappi delivery menu (Source S3, snapshot {URSA_FACTS.snapshot}).
              </p>
            </Callout>
            <Callout tone="warn" title="Exact prices may change">
              <p className="m-0">
                Prices marked <span className="font-label text-ursa-medium-roast">*</span> are
                inferred from category positioning where the Rappi snapshot did not list them
                directly. Confirm at the bar before quoting in any external material. The
                pairing prices (La Ursa, La Lonya, La Maracumango) follow the dossier prototype
                and assume à la carte totals.
              </p>
            </Callout>
            <Card className="bg-ursa-foam">
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
                <Coffee size={16} className="text-ursa-gold-text" />
                The ownable menu language
              </h4>
              <ul className="space-y-1.5 text-[0.88rem] m-0 p-0 list-none text-muted-foreground">
                <li>• <b className="text-ursa-dark-roast">Two coined drink names</b> — Ursagroni (Ursa+negroni) and Maracumango (maracuyá+mango). The other two named drinks (<em>Filtrado Lonya</em>, <em>Durazno Clarificado</em>) use origin / descriptive labels, not coined names. This is a naming convention, not a strategic system — do not over-extend it.</li>
                <li>• <b className="text-ursa-dark-roast">Origin-labelling line</b> — Filtrado Lonya (Utcubamba, Amazonas, 1,750m, Bourbon lavado) sets the provenance depth no Miraflores competitor matches.</li>
                <li>• <b className="text-ursa-dark-roast">Two-bar theatre</b> — espresso + coldbrew as visible counter identities.</li>
                <li>• <b className="text-ursa-dark-roast">Pairing habit</b> — drinks named alongside their food partner.</li>
                <li>• <b className="text-ursa-dark-roast">Seasonal → permanent</b> — summer favourites graduate to the carta.</li>
              </ul>
            </Card>
          </div>
        </div>
      </ViewSection>

      {/* ---------- Product development proposals ---------- */}
      <ViewSection
        badge="Section 02"
        title="Thirteen new product proposals, evaluated"
        meta="13 proposals · 7 categories · 16-criteria framework + 4 census-grounding rows"
      >
        <p className="text-[0.95rem] text-muted-foreground max-w-[68ch] mb-6">
          Each proposal below is evaluated against ten decision-critical visible rows: <strong className="text-ursa-dark-roast">why this specific product</strong>, <strong className="text-ursa-dark-roast">customer need it addresses</strong>, <strong className="text-ursa-dark-roast">census evidence supporting it</strong>, brand fit, taste concept, preparation time, margin potential, <strong className="text-ursa-dark-roast">operational test</strong>, market test method, and stop / revision rule. The remaining six criteria are summarised in the framework grid in Section 04. Pricing is always expressed as a <strong className="text-ursa-dark-roast">lean / moderate / growth</strong>{" "}
          range in PEN — never a single invented cost — with a census-anchored rationale for each range.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {(["Signature coffee", "Cold coffee", "Seasonal", "Non-coffee", "Pastries", "Retail beans", "Experiences"] as const).map((c) => {
            const meta = PROPOSAL_CATEGORY_META[c];
            return (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border bg-ursa-paper"
                style={{
                  borderColor:
                    meta.tone === "gold"
                      ? "var(--color-ursa-gold)"
                      : meta.tone === "forest"
                      ? "var(--color-ursa-forest-deep)"
                      : "var(--color-ursa-terracotta)",
                  color:
                    meta.tone === "gold"
                      ? "var(--color-ursa-medium-roast)"
                      : meta.tone === "forest"
                      ? "var(--color-ursa-forest-deep)"
                      : "var(--color-ursa-terracotta-text)",
                }}
              >
                {meta.icon}
                {c}
              </span>
            );
          })}
        </div>

        <Accordion type="multiple" className="space-y-3">
          {PROPOSALS.map((p) => {
            const meta = PROPOSAL_CATEGORY_META[p.category];
            return (
              <AccordionItem
                key={p.id}
                value={p.id}
                className="border border-ursa-line-soft rounded-lg bg-card px-5 shadow-[0_1px_0_rgba(59,36,23,0.04)]"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4 flex-1 text-left">
                    <span
                      className="font-label text-[0.66rem] tracking-[0.12em] uppercase px-2 py-0.5 rounded border shrink-0"
                      style={{
                        borderColor:
                          meta.tone === "gold"
                            ? "var(--color-ursa-gold)"
                            : meta.tone === "forest"
                            ? "var(--color-ursa-forest-deep)"
                            : "var(--color-ursa-terracotta)",
                        color:
                          meta.tone === "gold"
                            ? "var(--color-ursa-medium-roast)"
                            : meta.tone === "forest"
                            ? "var(--color-ursa-forest-deep)"
                            : "var(--color-ursa-terracotta-text)",
                      }}
                    >
                      {p.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-[1.25rem] font-semibold text-ursa-dark-roast m-0">
                        {p.name}
                      </h3>
                      {p.spanish && (
                        <p className="italic text-muted-foreground text-[0.85rem] m-0">
                          {p.spanish}
                        </p>
                      )}
                    </div>
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <span className="inline-flex items-center gap-1.5 font-label text-[0.64rem] tracking-[0.12em] uppercase text-muted-foreground">
                        {meta.icon}
                        {p.category}
                      </span>
                      <span className="font-label text-[0.7rem] tracking-[0.06em] text-ursa-medium-roast bg-ursa-cream border border-ursa-line-soft px-2 py-1 rounded">
                        S/. {p.pricingLean}–{p.pricingGrowth}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
                    <div>
                      <p className="text-[0.95rem] leading-relaxed text-ursa-dark-roast m-0 mb-4">
                        {p.concept}
                      </p>
                      <div className="space-y-3">
                        <CriterionRow icon={<Target size={14} />} label="Why this specific product" value={p.whyThisProduct} />
                        <CriterionRow icon={<Users size={14} />} label="Customer need it addresses" value={p.customerNeed} />
                        <CriterionRow icon={<Search size={14} />} label="Census evidence supporting it" value={p.evidence} />
                        <CriterionRow icon={<Sparkles size={14} />} label="Brand fit" value={p.brandFit} />
                        <CriterionRow icon={<Coffee size={14} />} label="Taste concept" value={p.tasteConcept} />
                        <CriterionRow icon={<Clock size={14} />} label="Preparation time" value={p.prepTime} />
                        <CriterionRow icon={<TrendingUp size={14} />} label="Margin potential" value={p.margin} />
                        <CriterionRow icon={<ClipboardCheck size={14} />} label="Operational test" value={p.operationalTest} />
                        <CriterionRow icon={<FlaskConical size={14} />} label="Market test method" value={p.testMethod} />
                        <CriterionRow icon={<CircleSlash size={14} />} label="Stop / revision rule" value={p.stopRule} tone="terracotta" />
                      </div>
                    </div>
                    <div className="bg-ursa-cream rounded-lg p-4 border border-ursa-line-soft">
                      <h5 className="font-label text-[0.7rem] tracking-[0.16em] uppercase text-ursa-gold-text m-0 mb-3">
                        Pricing scenarios (PEN)
                      </h5>
                      <div className="space-y-2.5">
                        <ScenarioRow label="Lean" value={p.pricingLean} note="Cost-covering, conservative ticket." />
                        <ScenarioRow label="Moderate" value={p.pricingModerate} note="Recommended launch price." highlight />
                        <ScenarioRow label="Growth" value={p.pricingGrowth} note="Once brand equity supports the lift." />
                      </div>
                      <div className="mt-3 pt-3 border-t border-ursa-line-soft">
                        <h6 className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-ursa-forest-deep m-0 mb-1.5 flex items-center gap-1.5">
                          <Search size={11} /> Why this price range (census-anchored)
                        </h6>
                        <p className="text-[0.78rem] text-muted-foreground leading-relaxed m-0">
                          {p.pricingRationale}
                        </p>
                      </div>
                      <p className="text-[0.75rem] text-muted-foreground mt-3 m-0 leading-relaxed">
                        These are scenario ranges, not invented costs. Verify ingredient costs
                        against Ursa's actual roast logs and supplier invoices before launch.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </ViewSection>

      {/* ---------- Ursa Mañana subscription callout ---------- */}
      <ViewSection
        badge="Section 03"
        title="Ursa Mañana — the subscription as a menu product"
        meta="EXP-11 · capped 50 subscribers"
      >
        <Card highlight className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <SectionBadge tone="gold">Continuity product</SectionBadge>
                <EvidenceTag status="verified" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-ursa-dark-roast mt-0 mb-3">
                S/. 20 / month · unlimited coffee · Mon–Fri 7–10am
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-muted-foreground m-0 mb-4">
                The subscription is a menu product, not a discount. It works on marginal-cost
                math because Ursa roasts its own beans — but only if subscribers attach sides
                (cookies, financier, empanada). The full economic model — break-even attach
                rate, cannibalization recovery, scale projection — lives in Module 08.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("calculator")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-label text-[0.72rem] tracking-[0.12em] uppercase bg-ursa-gold text-ursa-dark-roast border border-ursa-gold hover:-translate-y-0.5 transition"
                >
                  Open the calculator
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => navigate("experiments")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-label text-[0.72rem] tracking-[0.12em] uppercase bg-transparent text-ursa-medium-roast border border-ursa-line hover:-translate-y-0.5 transition"
                >
                  See EXP-11 in the Experiment Tracker
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <MiniStat value="S/. 20" label="Monthly price" />
              <MiniStat value="7–10am" label="Service window" />
              <MiniStat value="1 cup / visit" label="Cap (pilot)" />
              <MiniStat value="50" label="Pilot cap" />
              <MiniStat value="S/. 1.20–1.80" label="Marginal cost / cup" />
              <MiniStat value="≥ 60%" label="Target attach rate" />
            </div>
          </div>
        </Card>
        <Callout tone="gold" title="See Module 08 for the full economic model">
          <p className="m-0">
            The subscription's profit per subscriber is non-obvious — it depends on visit
            frequency, side attach, and cannibalization. The interactive calculator in Module 08
            lets you edit every input and see the break-even attach rate, free-cup capacity, and
            recovery time update live. Do not launch the pilot without running those numbers.
          </p>
        </Callout>
      </ViewSection>

      {/* ---------- 16-criteria evaluation framework ---------- */}
      <ViewSection
        badge="Section 04"
        title="The 16-criteria evaluation framework"
        meta="Every proposal passes through all sixteen"
      >
        <p className="text-[0.95rem] text-muted-foreground max-w-[68ch] mb-6">
          The dossier reduces the temptation to launch on enthusiasm. Each proposal must be
          answerable against all sixteen criteria below — ten decision-critical ones are shown
          explicitly in the proposal cards above; the remaining six are checked off the grid. The
          four census-grounding rows (why-this-product, customer-need, census-evidence,
          operational-test) are meta-criteria that sit on top of the 16: they ensure each
          proposal is anchored to a specific competitive gap and a specific operational test
          before any pilot launches.
        </p>
        <Grid cols={4}>
          {EVALUATION_CRITERIA.map((c) => (
            <div
              key={c.n}
              className="bg-card border border-ursa-line-soft rounded-lg p-4 transition hover:border-ursa-gold hover:shadow-[0_4px_16px_-8px_rgba(184,146,74,0.4)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-display text-[1.4rem] font-semibold text-ursa-gold-text leading-none w-7">
                  {String(c.n).padStart(2, "0")}
                </span>
                <CheckCircle2 size={14} className="text-ursa-forest-deep" />
              </div>
              <h4 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast m-0 mb-1">
                {c.name}
              </h4>
              <p className="text-[0.82rem] text-muted-foreground m-0 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </Grid>
      </ViewSection>

      {/* ---------- Pricing scenario note ---------- */}
      <ViewSection
        badge="Section 05"
        title="On pricing — what we did and did not invent"
        meta="Scenario ranges only"
      >
        <Grid cols={3}>
          <Card>
            <h4 className="font-label text-[0.72rem] tracking-[0.16em] uppercase text-ursa-gold-text m-0 mb-2">
              Lean
            </h4>
            <p className="font-display text-2xl font-semibold text-ursa-dark-roast m-0 mb-2">
              Cost-covering
            </p>
            <p className="text-[0.85rem] text-muted-foreground m-0">
              The minimum price that covers ingredient cost and barista time, with a thin
              margin. Use for a soft launch or for products that build traffic for higher-margin
              pairings.
            </p>
          </Card>
          <Card highlight>
            <h4 className="font-label text-[0.72rem] tracking-[0.16em] uppercase text-ursa-gold-text m-0 mb-2">
              Moderate
            </h4>
            <p className="font-display text-2xl font-semibold text-ursa-dark-roast m-0 mb-2">
              Recommended launch
            </p>
            <p className="text-[0.85rem] text-muted-foreground m-0">
              The price to launch the pilot at. Balances perceived specialty value against
              Miraflores willingness-to-pay. Re-evaluate after the test window.
            </p>
          </Card>
          <Card>
            <h4 className="font-label text-[0.72rem] tracking-[0.16em] uppercase text-ursa-gold-text m-0 mb-2">
              Growth
            </h4>
            <p className="font-display text-2xl font-semibold text-ursa-dark-roast m-0 mb-2">
              Brand-anchored ceiling
            </p>
            <p className="text-[0.85rem] text-muted-foreground m-0">
              Once the product has repeat orders and visual equity, lift to this. Never start
              here — anchor against the moderate price, not the ceiling.
            </p>
          </Card>
        </Grid>

        <Callout tone="stop" title="What we deliberately did not invent">
          <ul className="space-y-1.5 m-0 p-0 list-none text-[0.9rem]">
            <li>• <strong>No single exact cost per cup.</strong> Marginal cost depends on roast yield, milk usage, and waste. Use the verified S/. 1.20–1.80 range as the benchmark, then confirm against actual roast logs.</li>
            <li>• <strong>No guaranteed margin %.</strong> Margins in the proposal cards are described as bands (alto / medio-alto / medio), not fabricated numbers.</li>
            <li>• <strong>No invented supplier prices</strong> for lúcuma, chincho, muña, or cacao de origen. Confirm with the supplier before quoting a launch price.</li>
            <li>• <strong>No virality assumption.</strong> Pricing assumes organic demand from existing channels; paid amplification is modelled separately in Module 04 and the Budget Allocator.</li>
          </ul>
        </Callout>

        <Callout tone="forest" title="The principle this module protects">
          <p className="m-0">
            Ursa's menu earns its margin through <strong>perceived value</strong>, not cost-plus
            pricing. A story card describing origin, altitude, and process raises perceived value
            more than a bigger cup at the same cost (Sutherland). The 16-criteria framework is
            designed to keep that discipline: no product launches just because it sounds good.
          </p>
        </Callout>
      </ViewSection>

      <ViewSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatBlock value={`${PROPOSALS.length}`} label="New product proposals across 7 categories" tone="forest" />
          <StatBlock value="16 + 4" label="Criteria per proposal (16 framework + 4 census-grounding)" tone="gold" />
          <StatBlock value="3" label="Pricing scenarios per proposal (lean / moderate / growth)" tone="terracotta" />
          <StatBlock value="S/. 5–140" label="Full price envelope across menu + proposals" tone="forest" />
        </div>
        <p className="text-[0.78rem] text-muted-foreground mt-6 max-w-3xl">
          <strong>Disclaimer:</strong> Reconstructed menu prices are sourced from the Rappi
          snapshot (Source S3, {URSA_FACTS.snapshot}) and public Instagram/Facebook posts (Sources
          S1, S2). Prices marked <span className="font-label">*</span> are inferred from category
          positioning. Proposal pricing is in scenario ranges and must be validated against
          Ursa's actual roast logs and supplier invoices before any go-to-market.
        </p>
      </ViewSection>
    </>
  );
}

// ---------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------

function MenuCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-ursa-paper border-2 border-double border-ursa-gold p-6 md:p-8 rounded-sm relative"
      style={{ boxShadow: "0 1px 0 rgba(59,36,23,0.06), 0 12px 32px -16px rgba(59,36,23,0.18)" }}
    >
      {children}
    </div>
  );
}

function CriterionRow({
  icon,
  label,
  value,
  tone = "gold",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone?: "gold" | "terracotta";
}) {
  return (
    <div className="flex gap-3 items-start">
      <span
        className="mt-0.5 shrink-0 w-7 h-7 rounded-full flex items-center justify-center border"
        style={{
          borderColor:
            tone === "terracotta"
              ? "var(--color-ursa-terracotta)"
              : "var(--color-ursa-gold)",
          color:
            tone === "terracotta"
              ? "var(--color-ursa-terracotta-text)"
              : "var(--color-ursa-medium-roast)",
          background: "var(--color-ursa-paper)",
        }}
      >
        {icon}
      </span>
      <div className="flex-1">
        <div className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-muted-foreground">
          {label}
        </div>
        <p className="text-[0.88rem] leading-relaxed text-ursa-dark-roast m-0">{value}</p>
      </div>
    </div>
  );
}

function ScenarioRow({
  label,
  value,
  note,
  highlight = false,
}: {
  label: string;
  value: number;
  note: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 p-2.5 rounded-md ${
        highlight ? "bg-ursa-gold/15 border border-ursa-gold" : "bg-ursa-foam border border-ursa-line-soft"
      }`}
    >
      <span className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-muted-foreground w-20 shrink-0">
        {label}
      </span>
      <span className="font-display text-[1.1rem] font-semibold text-ursa-dark-roast w-14 shrink-0">
        S/. {value}
      </span>
      <span className="text-[0.78rem] text-muted-foreground flex-1">{note}</span>
    </div>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-ursa-foam border border-ursa-line-soft rounded-lg p-3 text-center">
      <div className="font-display text-[1.2rem] font-semibold text-ursa-forest-deep leading-none mb-1">
        {value}
      </div>
      <div className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
