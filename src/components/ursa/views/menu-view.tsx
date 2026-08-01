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
  brandFit: string;
  tasteConcept: string;
  prepTime: string;
  margin: string; // lean/moderate/growth PEN
  testMethod: string;
  stopRule: string;
  pricingLean: number;
  pricingModerate: number;
  pricingGrowth: number;
};

const PROPOSALS: Proposal[] = [
  {
    id: "P-01",
    name: "Oso Negro",
    spanish: "Black bear · double ristretto over warm honey",
    category: "Signature coffee",
    concept:
      "Doble ristretto de Black Label vertido sobre una cucharada de miel tibia y una lágrima de espresso frío. Profundo, oscuro, con un dulzor que aparece tarde. Nombrado por el oso andino de las nieblas.",
    brandFit:
      "Perfecto — el nombre es portmanteau de la casa (Oso + negro del Black Label). Refuerza el personaje sin apartarse del café.",
    tasteConcept:
      "Amargo de ristretto → miel cálida → finish de chocolate negro. La temperatura de la miel controla la textura final.",
    prepTime: "3 min (servido en copa pequeña precalentada).",
    margin: "Alto — la miel cuesta más que el azúcar pero el ristretto usa la mitad de dosis de un latte.",
    testMethod:
      "Promocionar 14 días como 'shot del barista'. Medir pedidos/día y solicitudes de repetición.",
    stopRule: "Menos de 4/día tras 14 días → reformular como shot de cortesía, no producto.",
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
    brandFit:
      "Fuerte — la forma de media luna es visualmente ownable y fotogénica; ya pertenece al lenguaje visual de Ursa.",
    tasteConcept:
      "Cortado equilibrado con un aroma cítrico que abre la copa antes del primer sorbo. Sin endulzar — solo aroma.",
    prepTime: "2.5 min (requiere taza especial y rallador).",
    margin: "Medio-alto — la ralladura de naranja es barata; la taza es costoso único.",
    testMethod:
      "Servir como edición de 30 tazas. Contar fotografías compartidas en Instagram con la geo-tag de Ursa.",
    stopRule: "Menos de 3 fotos compartidas / semana → retirar la taza, mantener el cortado.",
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
    brandFit:
      "Fuerte — extiende la línea 'Clarificado' (ya propia) con un ingrediente nacionalmente reconocido.",
    tasteConcept:
      "Cold brew con dulzor sedoso de lúcuma, sin lácteos visibles. Color ámbar. Finish limpio.",
    prepTime: "4 min de servicio + 24h de clarificación en batch.",
    margin: "Alto — la lúcuma es económica en Lima y el proceso clarificado escala en batch.",
    testMethod:
      "Pilot de 4 semanas en barra Coldbrew. Medir % de coldbrew vendido que es Clarificado de Lúcuma.",
    stopRule: "Menos de 5/día tras 4 semanas → reformular como estacional de otoño.",
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
    brandFit:
      "Muy fuerte — captura 'un gramo a la vez' en una sola bebida: el tiempo como ingrediente.",
    tasteConcept:
      "Coffee-forward al inicio, frutal al final. Cada sorbo es distinto. La cáscara viene del mismo grano.",
    prepTime: "3 min de servicio + preparación previa de cubos de cascara.",
    margin: "Alto — cascara es subproducto del grano; el precio se ancla en la experiencia.",
    testMethod:
      "Servir 30 unidades como 'edición de slow bar'. Filmar reacciones y pedir testimonios.",
    stopRule: "NPS < 8/10 o menos de 8 unidades vendidas → reformular como Cata Privada.",
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
    brandFit:
      "Fuerte — profundiza el Filtrado Lonya en una experiencia de origen, no solo una bebida.",
    tasteConcept:
      "Tres tazas pequeñas, tres procesos. El cliente aprende a distinguir el mismo grano tratado distinto.",
    prepTime: "8 min (tres filtrados manuales servidos simultáneamente).",
    margin: "Medio-alto — el grano es el mismo, pero el tiempo de barista sube.",
    testMethod:
      "Lanzar en Cata Privada y cupping mensual. Medir conversión a venta de bolsa de 250g.",
    stopRule: "Menos de 6 vuelos/mes → solo disponible en catas guiadas.",
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
    brandFit:
      "Fuerte — la paleta (hierba, panela, café) está dentro del universo de ingredientes peruanos.",
    tasteConcept:
      "Pour-over con aromática de chincho y dulzor profundo de panela. Sin azúcar añadido más allá de la panela.",
    prepTime: "5 min.",
    margin: "Alto — chincho y panela son económicos; precio se ancla en estacionalidad.",
    testMethod:
      "Lanzar en junio (inicio de invierno) por 6 semanas. Medir repetición y puntuación en cata.",
    stopRule: "Menos de 4/día tras 6 semanas → reformular para verano con cascara helada.",
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
    brandFit:
      "Fuerte — refuerza el universo 'origen peruano' sin salir de la identidad de tostador.",
    tasteConcept:
      "Chocolate profundo, no dulce. El barro mantiene la temperatura; la panela aparece tarde.",
    prepTime: "4 min (jarra caliente preparada en batch cada 2h).",
    margin: "Medio — cacao de origen cuesta más que jarabe, pero el ticket promedio sube.",
    testMethod:
      "Campaña de invierno 6 semanas. Medir % de pedidos sin café que son chocolate.",
    stopRule: "Menos de 5/día tras 6 semanas → reducir a edición invernal anual.",
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
    brandFit:
      "Aceptable — no es café, pero respeta la paleta andina. Útil para acompañantes y no-cafeteros.",
    tasteConcept:
      "Menta andina con un finish herbáceo más profundo que la menta común. Sin azúcar.",
    prepTime: "3 min.",
    margin: "Alto — muña es barata y seca; el ticket es de infusión premium.",
    testMethod:
      "Ofrecer 4 semanas como alternativa en barra. Medir pedidos de no-cafeteros.",
    stopRule: "Menos de 3/día tras 4 semanas → retirar y mantener solo Chocolate del Oso.",
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
    brandFit:
      "Fuerte — cierra el pairing con el Clarificado de Lúcuma. El laminado en casa es credibility.",
    tasteConcept:
      "Hojaldre mantequilla + crema de lúcuma sedosa. No excesivamente dulce.",
    prepTime: "Servicio directo (preparación en madrugada).",
    margin: "Medio — laminado es intensivo en mano de obra; el relleno es barato.",
    testMethod:
      "Pilot de 6 semanas. Medir attach rate con Clarificado de Lúcuma.",
    stopRule: "Menos de 8/día o attach rate < 20% con Clarificado → reformular relleno.",
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
    brandFit:
      "Fuerte — el alfajor es icónico peruano y el glaseado de café lo ancla al oficio.",
    tasteConcept:
      "Maicena que se deshace, dulce de leche sedoso, finish amargo del espresso.",
    prepTime: "Servicio directo (batch semanal).",
    margin: "Alto — ingredientes baratos, ticket de pastry premium.",
    testMethod:
      "Pilot de 6 semanas. Medir pedidos de alfajor con café (vs. cookie).",
    stopRule: "Menos de 6/día tras 6 semanas → reformular como mini-alfajor de cata.",
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
    brandFit:
      "Muy fuerte — operacionaliza 'un gramo a la vez' y 'Gram of the Week' como producto recurrente.",
    tasteConcept:
      "Varía — la promesa es: cada mes, un grano nuevo con su historia completa.",
    prepTime: "Empaque semanal en batch.",
    margin: "Alto — retail bean margin es ~60–70% sobre costo de grano verde.",
    testMethod:
      "Lanzar como suscripción mensual de 50 bolsas. Medir retención al mes 3.",
    stopRule: "Retención < 60% al mes 3 → reformular cadencia o tamaño de bolsa.",
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
    brandFit:
      "Fuerte — ocupa el territorio que Terrua cobra a US$25, con un stack de valor más visible.",
    tasteConcept:
      "Tres tazas, tres historias. La tarjeta es el activo que el cliente se lleva.",
    prepTime: "10 min (tres filtrados servidos simultáneamente + presentación).",
    margin: "Alto — el grano es barato; el precio se cobra por la experiencia guiada.",
    testMethod:
      "Pilot 60 días en sábado. Medir reservas/mes y conversión a venta de bolsa.",
    stopRule: "Menos de 2 reservas/mes → reformular como drop-in sábado sin reserva.",
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
    brandFit:
      "Fuerte — la tostadora visible ya es la firma del local; este producto la convierte en experiencia pagada.",
    tasteConcept:
      "No es bebida — es aprendizaje. El producto final es una bolsa personal con curva firmada.",
    prepTime: "90 min + 15 min de limpieza.",
    margin: "Alto — el grano verde es barato; el precio se cobra por la atención del maestro tostador.",
    testMethod:
      "Pilot 6 sesiones. Medir NPS y conversión a suscripción Gramo del Mes.",
    stopRule: "NPS < 9/10 o menos de 3 sesiones llenas/mes → reformular como demostración gratuita.",
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
            Ursa already owns a distinctive menu language — portmanteau names
            (<em>Ursagroni</em>, <em>Maracumango</em>, <em>Durazno Clarificado</em>),
            a two-bar theatre, and a pairing habit. This module reconstructs the
            verified current menu, then proposes thirteen new products across
            seven categories, each evaluated against a 16-criteria framework
            before any test begins. No invented costs — only scenario ranges in
            PEN.
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
                <li>• <b className="text-ursa-dark-roast">Portmanteau names</b> — Ursagroni, Maracumango, Durazno Clarificado.</li>
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
        meta="13 proposals · 7 categories · 16-criteria framework"
      >
        <p className="text-[0.95rem] text-muted-foreground max-w-[68ch] mb-6">
          Each proposal below is evaluated against six decision-critical criteria (brand fit,
          taste concept, preparation time, margin potential, test method, stop rule). The
          remaining ten criteria are summarised in the framework grid in Section 04. Pricing is
          always expressed as a <strong className="text-ursa-dark-roast">lean / moderate / growth</strong>{" "}
          range in PEN — never a single invented cost.
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
                      : "var(--color-ursa-terracotta)",
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
                            : "var(--color-ursa-terracotta)",
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
                        <CriterionRow icon={<Sparkles size={14} />} label="Brand fit" value={p.brandFit} />
                        <CriterionRow icon={<Coffee size={14} />} label="Taste concept" value={p.tasteConcept} />
                        <CriterionRow icon={<Clock size={14} />} label="Preparation time" value={p.prepTime} />
                        <CriterionRow icon={<TrendingUp size={14} />} label="Margin potential" value={p.margin} />
                        <CriterionRow icon={<FlaskConical size={14} />} label="Test method" value={p.testMethod} />
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
          answerable against all sixteen criteria below — six decision-critical ones are shown
          explicitly in the proposal cards above; the remaining ten are checked off the grid.
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
          <StatBlock value="16" label="Criteria evaluated per proposal" tone="gold" />
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
              ? "var(--color-ursa-terracotta)"
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
