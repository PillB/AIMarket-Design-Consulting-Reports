"use client";

import { useState, useMemo } from "react";
import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import {
  BearMark,
  ArtNouveauDivider,
  Pill,
  Callout,
  StatBlock,
} from "../ursa-brand";
import { useNavigate } from "@/lib/ursa-nav";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
} from "recharts";
import {
  MapPin,
  Mountain,
  Droplet,
  Coffee,
  Sparkles,
  ArrowRight,
  Compass,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Process = "Washed" | "Natural" | "Honey";

type Origin = {
  id: string;
  name: string;
  department: string;
  altitude: number;
  process: Process;
  varietal: string;
  notes: string[];
  story: string;
  drink: string;
  harvestPeak: string;
  /** Map x/y coordinates inside the 320×480 SVG viewBox. */
  x: number;
  y: number;
  /** True if Ursa has publicly verified sourcing from this origin. */
  verified?: boolean;
};

const ORIGINS: Origin[] = [
  {
    id: "utcubamba",
    name: "Utcubamba",
    department: "Amazonas",
    altitude: 1750,
    process: "Washed",
    varietal: "Bourbon",
    notes: ["Stone fruit", "Floral", "Bright"],
    story:
      "Utcubamba sits in the cloud-forest ceja de selva of Amazonas — the transitional zone where Andean slopes meet the western Amazon basin. Consistent mist, sharp diurnal temperature shifts, and old Bourbon stock produce a cup that reads floral and stone-fruit forward, with the clean, bright acidity that filter-loyal customers keep coming back for. Ursa pours this as the Filtrado Lonya — a single-origin pour-over named after the river that runs through the region.",
    drink: "Filtrado Lonya",
    harvestPeak: "Jun–Aug",
    x: 87,
    y: 164,
    verified: true,
  },
  {
    id: "chirinos",
    name: "Chirinos",
    department: "Cajamarca",
    altitude: 1650,
    process: "Washed",
    varietal: "Caturra",
    notes: ["Caramel", "Citrus", "Clean"],
    story:
      "Chirinos is one of the southern Cajamarca micro-regions that has built a quiet reputation for clean, well-structured washed coffees. Caturra at 1650 m tends to deliver caramel sweetness and a clean citrus finish — approachable and crowd-pleasing. A natural candidate for Ursa's house espresso blend, or as a base for a breakfast-forward milk drink.",
    drink: "—",
    harvestPeak: "May–Jul",
    x: 68,
    y: 131,
  },
  {
    id: "la-coipa",
    name: "La Coipa",
    department: "Cajamarca",
    altitude: 1800,
    process: "Natural",
    varietal: "Bourbon",
    notes: ["Berry", "Chocolate", "Heavy body"],
    story:
      "La Coipa, also in Cajamarca, sits at the higher end of the department's coffee belt. Natural-processed Bourbon at this altitude pushes the cup toward ripe berry and chocolate with a heavy, syrupy body — perfect for a cold-brew base or a seasonal single-origin espresso. A natural complement to Ursa's coldbrew bar.",
    drink: "—",
    harvestPeak: "Jun–Aug",
    x: 59,
    y: 135,
  },
  {
    id: "satipo",
    name: "Satipo",
    department: "Junín",
    altitude: 1550,
    process: "Washed",
    varietal: "Catimor",
    notes: ["Nutty", "Smooth", "Mild"],
    story:
      "Satipo is the central-Junín coffee engine — broad, reliable, and the workhorse of many Peruvian espresso blends. Catimor at 1550 m produces a smooth, nutty, mild cup that holds up beautifully under milk. A sensible base layer for a house espresso and a forgiving origin for first-time filter drinkers.",
    drink: "—",
    harvestPeak: "May–Jul",
    x: 176,
    y: 292,
  },
  {
    id: "quillabamba",
    name: "Quillabamba",
    department: "Cusco",
    altitude: 1700,
    process: "Washed",
    varietal: "Typica",
    notes: ["Sweet", "Apple", "Balanced"],
    story:
      "Quillabamba in the Cusco cloud-forest belt is classic Typica territory — old-stock varietals at altitude yielding sweet, apple-tinged, beautifully balanced cups. Typica's refinement at 1700 m makes this a natural choice for a featured pour-over rotation or an educational cupping flight.",
    drink: "—",
    harvestPeak: "Jun–Aug",
    x: 215,
    y: 332,
  },
  {
    id: "rodriguez-de-mendoza",
    name: "Rodriguez de Mendoza",
    department: "Amazonas",
    altitude: 1900,
    process: "Honey",
    varietal: "Bourbon",
    notes: ["Honey", "Peach", "Syrupy"],
    story:
      "Rodriguez de Mendoza is one of the highest and most distinctive Amazonas micro-regions. Honey-processed Bourbon at 1900 m produces an intensely syrupy cup with honey and peach notes — a luxury-tier single origin that would suit a limited 'Gramo del Mes' feature or a cupping-night finale.",
    drink: "—",
    harvestPeak: "Jul–Sep",
    x: 100,
    y: 166,
  },
];

/** Tasting-note category map for the flavour wheel. */
const FLAVOUR_CATEGORIES: { name: string; notes: string[] }[] = [
  { name: "Fruit", notes: ["Stone fruit", "Citrus", "Berry", "Apple", "Peach"] },
  { name: "Floral", notes: ["Floral"] },
  { name: "Sweet", notes: ["Caramel", "Honey", "Sweet"] },
  { name: "Nutty", notes: ["Nutty"] },
  { name: "Chocolate", notes: ["Chocolate"] },
  { name: "Body / Balance", notes: ["Heavy body", "Syrupy", "Balanced", "Smooth", "Clean", "Mild", "Bright"] },
];

const PROCESS_META: Record<Process, { color: string; desc: string }> = {
  Washed: {
    color: "#3E6149",
    desc: "Bean is stripped of fruit before fermentation and drying. Produces bright, clean, acidic cups where terroir speaks loudest.",
  },
  Natural: {
    color: "#C16E4B",
    desc: "Bean is dried inside the whole cherry. Produces heavier body, fruit-forward character, and sweeter, ferment-driven aromatics.",
  },
  Honey: {
    color: "#B8924A",
    desc: "Bean is dried with the sticky fruit mucilage left on (no skin). Produces syrupy body, balanced sweetness, and complex stone-fruit notes.",
  },
};

const ALTITUDE_DATA = ORIGINS.map((o) => ({
  name: o.name,
  altitude: o.altitude,
  verified: o.verified,
}));

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** 1-indexed active harvest months per origin. */
const HARVEST_WINDOWS: Record<string, number[]> = {
  utcubamba: [6, 7, 8],
  chirinos: [5, 6, 7],
  "la-coipa": [6, 7, 8],
  satipo: [5, 6, 7],
  quillabamba: [6, 7, 8],
  "rodriguez-de-mendoza": [7, 8, 9],
};

export function OriginAtlasView() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string>("utcubamba");

  const selected = useMemo(
    () => ORIGINS.find((o) => o.id === selectedId) ?? ORIGINS[0],
    [selectedId]
  );

  const wheelData = useMemo(
    () =>
      FLAVOUR_CATEGORIES.map((cat) => ({
        ...cat,
        origins: ORIGINS.filter((o) => o.notes.some((n) => cat.notes.includes(n))),
      })),
    []
  );

  return (
    <>
      <ViewHero
        eyebrow="Extra Tool T7 · Interactive"
        title={<>Coffee Origin Atlas</>}
        lede={
          <>
            A clickable map of the Peruvian coffee regions Ursa buys from — or could buy from. Tap any dot to walk through altitude, process, varietal, and the cup it produces. Utcubamba (gold-ringed) is the verified Filtrado Lonya origin.
          </>
        }
        meta={[
          { label: "Origins", value: `${ORIGINS.length} plotted` },
          { label: "Verified", value: "Utcubamba → Filtrado Lonya" },
          { label: "Snapshot", value: "2026-08-01" },
        ]}
        tone="forest"
      />

      {/* §1 — Stats + intro */}
      <ViewSection
        badge="Atlas §1"
        title="The map, at a glance"
        meta="Peru's coffee belt runs along the eastern Andean slope"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatBlock value={String(ORIGINS.length)} label="Origins plotted" tone="forest" />
          <StatBlock value="1,550–1,900 m" label="Altitude range" tone="gold" />
          <StatBlock value="3" label="Processes (washed / natural / honey)" tone="forest" />
          <StatBlock value="4" label="Varietals (Bourbon · Caturra · Catimor · Typica)" tone="gold" />
        </div>
        <Callout tone="forest" title="What 'verified' means here">
          Only <b>Utcubamba</b> is currently verified as a Ursa bean origin — it is poured as the <b>Filtrado Lonya</b>. The other five are realistic candidate origins for Ursa's roastery expansion, plotted here for sourcing education and as inputs to the menu's single-origin rotation. They are not yet on the menu.
        </Callout>
      </ViewSection>

      {/* §2 — Interactive map + detail panel */}
      <ViewSection
        badge="Atlas §2"
        title="Interactive origin map"
        meta="Click any dot — Utcubamba wears the gold verified ring"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6">
          {/* Map card */}
          <Card className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Compass size={16} className="text-ursa-forest-deep" />
                <span className="font-label text-[0.72rem] tracking-[0.16em] uppercase text-ursa-forest-deep">
                  Peru · coffee-belt origins
                </span>
              </div>
              <Pill tone="gold">
                <MapPin size={11} /> {selected.name}
              </Pill>
            </div>
            <div className="relative w-full aspect-[2/3] max-w-[440px] mx-auto bg-ursa-cream/40 rounded-lg border border-ursa-line-soft p-2">
              <svg
                viewBox="0 0 320 480"
                className="w-full h-full"
                role="img"
                aria-label="Map of Peru with clickable coffee-origin dots"
              >
                {/* Stylized Peru outline */}
                <path
                  d="M 35 22 L 75 20 L 160 40 L 260 80 L 295 160 L 230 240 L 295 290 L 310 380 L 280 450 L 240 468 L 195 460 L 155 415 L 110 360 L 85 290 L 70 220 L 55 150 L 45 80 Z"
                  fill="#F4EBD9"
                  stroke="#8FA68B"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                {/* Country reference labels */}
                <text x="32" y="14" fontSize="7" fill="#8FA68B" fontFamily="Oswald, sans-serif" letterSpacing="1">
                  ECUADOR
                </text>
                <text x="225" y="64" fontSize="7" fill="#8FA68B" fontFamily="Oswald, sans-serif" letterSpacing="1">
                  COLOMBIA
                </text>
                <text x="282" y="252" fontSize="7" fill="#8FA68B" fontFamily="Oswald, sans-serif" letterSpacing="1">
                  BRAZIL
                </text>
                <text x="262" y="468" fontSize="7" fill="#8FA68B" fontFamily="Oswald, sans-serif" letterSpacing="1">
                  BOLIVIA
                </text>
                <text x="195" y="478" fontSize="6" fill="#8FA68B" fontFamily="Oswald, sans-serif" letterSpacing="1">
                  CHILE
                </text>
                <text x="2" y="240" fontSize="6" fill="#B7C9A8" fontFamily="Oswald, sans-serif" letterSpacing="1">
                  PACIFIC
                </text>
                <text x="2" y="250" fontSize="6" fill="#B7C9A8" fontFamily="Oswald, sans-serif" letterSpacing="1">
                  OCEAN
                </text>

                {/* City reference markers */}
                <circle cx="111" cy="312" r="1.6" fill="#8FA68B" />
                <text x="116" y="314" fontSize="6.5" fill="#6F4A2E" fontFamily="Inter, sans-serif">
                  Lima
                </text>
                <circle cx="234" cy="350" r="1.4" fill="#8FA68B" />
                <text x="239" y="352" fontSize="6.5" fill="#6F4A2E" fontFamily="Inter, sans-serif">
                  Cusco
                </text>

                {/* Origin dots */}
                {ORIGINS.map((o) => {
                  const isSelected = o.id === selectedId;
                  const radius = isSelected ? 9 : 6;
                  return (
                    <g
                      key={o.id}
                      onClick={() => setSelectedId(o.id)}
                      className="cursor-pointer"
                      role="button"
                      aria-label={`${o.name}, ${o.department}`}
                    >
                      {o.verified && (
                        <circle
                          cx={o.x}
                          cy={o.y}
                          r="14"
                          fill="none"
                          stroke="#B8924A"
                          strokeWidth="1.4"
                          opacity="0.7"
                        />
                      )}
                      {isSelected && (
                        <circle
                          cx={o.x}
                          cy={o.y}
                          r="12"
                          fill="none"
                          stroke="#2D4A36"
                          strokeWidth="1.4"
                          strokeDasharray="2 2"
                        />
                      )}
                      <circle
                        cx={o.x}
                        cy={o.y}
                        r={radius}
                        fill={o.verified ? "#B8924A" : isSelected ? "#2D4A36" : "#3E6149"}
                        stroke="#F4EBD9"
                        strokeWidth="1.4"
                        style={{ transition: "all 0.2s ease" }}
                      />
                      <text
                        x={o.x + radius + 3}
                        y={o.y + 3}
                        fontSize="7"
                        fill="#3B2417"
                        fontFamily="Inter, sans-serif"
                        fontWeight={isSelected ? 700 : 500}
                        pointerEvents="none"
                      >
                        {o.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Origin selector fallback (accessibility / mobile-friendly list) */}
            <div className="mt-3">
              <div className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                Or pick from list
              </div>
              <div className="flex flex-wrap gap-2">
                {ORIGINS.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => setSelectedId(o.id)}
                    className={cn(
                      "font-label text-[0.7rem] tracking-[0.08em] uppercase px-2.5 py-1.5 rounded-md border transition",
                      o.id === selectedId
                        ? "bg-ursa-forest-deep text-ursa-cream border-ursa-forest-deep"
                        : "bg-ursa-paper text-ursa-dark-roast border-ursa-line-soft hover:border-ursa-gold"
                    )}
                  >
                    {o.verified && <span className="text-ursa-gold mr-1">●</span>}
                    {o.name}
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* Detail panel */}
          <Card highlight className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-ursa-gold">
                    {selected.department}
                  </span>
                  {selected.verified && (
                    <Pill tone="gold">Verified · Filtrado Lonya</Pill>
                  )}
                </div>
                <h3 className="font-display text-2xl font-semibold text-ursa-dark-roast m-0 leading-tight">
                  {selected.name}
                </h3>
              </div>
              <BearMark size={36} className="text-ursa-forest-deep shrink-0" />
            </div>

            <ArtNouveauDivider className="my-1" />

            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-3 text-[0.86rem]">
              <div className="bg-ursa-forest-deep/8 border border-ursa-forest-deep/20 rounded-md px-3 py-2">
                <div className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-ursa-forest-deep flex items-center gap-1">
                  <Mountain size={10} /> Altitude
                </div>
                <div className="font-display text-lg font-semibold text-ursa-dark-roast">{selected.altitude} m</div>
              </div>
              <div className="bg-ursa-gold/10 border border-ursa-gold/30 rounded-md px-3 py-2">
                <div className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-ursa-medium-roast flex items-center gap-1">
                  <Droplet size={10} /> Process
                </div>
                <div className="font-display text-lg font-semibold text-ursa-dark-roast">{selected.process}</div>
              </div>
              <div className="bg-ursa-terracotta/10 border border-ursa-terracotta/30 rounded-md px-3 py-2">
                <div className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-ursa-terracotta flex items-center gap-1">
                  <Sparkles size={10} /> Varietal
                </div>
                <div className="font-display text-lg font-semibold text-ursa-dark-roast">{selected.varietal}</div>
              </div>
              <div className="bg-ursa-forest-deep/8 border border-ursa-forest-deep/20 rounded-md px-3 py-2">
                <div className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-ursa-forest-deep flex items-center gap-1">
                  <Coffee size={10} /> Ursa drink
                </div>
                <div className="font-display text-lg font-semibold text-ursa-dark-roast">{selected.drink}</div>
              </div>
            </div>

            {/* Tasting notes */}
            <div>
              <div className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                Tasting notes
              </div>
              <div className="flex flex-wrap gap-2">
                {selected.notes.map((n) => (
                  <span
                    key={n}
                    className="font-label text-[0.72rem] tracking-[0.06em] uppercase px-2.5 py-1 rounded-full bg-ursa-gold/15 text-ursa-medium-roast border border-ursa-gold/40"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            {/* Story */}
            <div>
              <div className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-muted-foreground mb-1.5">
                Story
              </div>
              <p className="m-0 text-[0.9rem] text-foreground/85 leading-relaxed">{selected.story}</p>
            </div>

            <div className="mt-auto pt-1">
              <Callout tone="forest" title={`${selected.process} process`}>
                {PROCESS_META[selected.process].desc}
              </Callout>
            </div>
          </Card>
        </div>
      </ViewSection>

      {/* §3 — Flavour wheel */}
      <ViewSection
        badge="Atlas §3"
        title="Flavour wheel"
        meta="Origins plotted on tasting-note categories"
      >
        <Card className="flex flex-col gap-4">
          <p className="text-[0.92rem] text-foreground/85 m-0">
            Each column is a flavour category. Each chip beneath is an origin whose cup lands in that category. Click a chip to load that origin in the detail panel. Ursa's verified origin (Utcubamba) is highlighted in gold.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {wheelData.map((cat) => (
              <div
                key={cat.name}
                className="flex flex-col gap-2 bg-ursa-cream/40 border border-ursa-line-soft rounded-lg p-3"
              >
                <div className="font-display text-base font-semibold text-ursa-forest-deep text-center">
                  {cat.name}
                </div>
                <div className="h-px bg-ursa-line" />
                <div className="flex flex-col gap-1.5 items-center min-h-[80px] justify-center">
                  {cat.origins.length === 0 ? (
                    <span className="font-label text-[0.62rem] tracking-[0.1em] uppercase text-muted-foreground">—</span>
                  ) : (
                    cat.origins.map((o) => (
                      <button
                        key={o.id}
                        onClick={() => setSelectedId(o.id)}
                        className={cn(
                          "font-label text-[0.62rem] tracking-[0.06em] uppercase px-2 py-1 rounded-full border transition",
                          o.verified
                            ? "bg-ursa-gold text-ursa-dark-roast border-ursa-gold hover:brightness-105"
                            : o.id === selectedId
                            ? "bg-ursa-forest-deep text-ursa-cream border-ursa-forest-deep"
                            : "bg-ursa-forest-deep/10 text-ursa-forest-deep border-ursa-forest-deep/30 hover:border-ursa-gold"
                        )}
                      >
                        {o.name}
                      </button>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </ViewSection>

      {/* §4 — Seasonality */}
      <ViewSection
        badge="Atlas §4"
        title="Harvest seasonality"
        meta="Peru harvest runs May–September; fresh-crop windows matter"
      >
        <Card className="flex flex-col gap-4">
          <p className="text-[0.92rem] text-foreground/85 m-0">
            Peru's coffee harvest typically runs May–September, with peak activity in June–August. Fresh-crop windows — when a region's coffee is at its brightest and most aromatic — fall in the 3–6 months after harvest. Planning single-origin features around fresh-crop arrival is a low-cost way to make the menu feel alive.
          </p>

          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-[140px_repeat(12,1fr)] gap-1 mb-1">
                <div />
                {MONTHS.map((m) => (
                  <div
                    key={m}
                    className="font-label text-[0.6rem] tracking-[0.1em] uppercase text-muted-foreground text-center"
                  >
                    {m}
                  </div>
                ))}
              </div>
              {ORIGINS.map((o) => {
                const active = HARVEST_WINDOWS[o.id] ?? [];
                return (
                  <div
                    key={o.id}
                    className="grid grid-cols-[140px_repeat(12,1fr)] gap-1 mb-1 items-center"
                  >
                    <button
                      onClick={() => setSelectedId(o.id)}
                      className={cn(
                        "font-label text-[0.66rem] tracking-[0.06em] uppercase text-left pr-2 truncate transition hover:text-ursa-gold",
                        o.id === selectedId
                          ? "text-ursa-forest-deep font-semibold"
                          : "text-ursa-dark-roast"
                      )}
                    >
                      {o.verified && <span className="text-ursa-gold mr-1">●</span>}
                      {o.name}
                    </button>
                    {MONTHS.map((_, i) => {
                      const month = i + 1;
                      const isActive = active.includes(month);
                      return (
                        <div
                          key={month}
                          className={cn(
                            "h-5 rounded-sm border",
                            isActive
                              ? o.verified
                                ? "bg-ursa-gold border-ursa-gold"
                                : "bg-ursa-forest-deep border-ursa-forest-deep"
                              : "bg-ursa-cream/40 border-ursa-line-soft"
                          )}
                          title={isActive ? `${o.name} harvest (month ${month})` : ""}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-label text-[0.66rem] tracking-[0.12em] uppercase text-muted-foreground flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 bg-ursa-forest-deep rounded-sm" /> Harvest month
            </span>
            <span className="font-label text-[0.66rem] tracking-[0.12em] uppercase text-muted-foreground flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 bg-ursa-gold rounded-sm" /> Ursa verified origin
            </span>
          </div>
        </Card>
      </ViewSection>

      {/* §5 — Altitude comparison */}
      <ViewSection
        badge="Atlas §5"
        title="Altitude comparison"
        meta="Higher altitude = denser bean = brighter cup"
      >
        <Card className="flex flex-col gap-3">
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ALTITUDE_DATA}
                layout="vertical"
                margin={{ top: 10, right: 40, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E2D4B0" />
                <XAxis
                  type="number"
                  domain={[1400, 2000]}
                  tick={{ fill: "#6F4A2E", fontSize: 11 }}
                  stroke="#C9B68C"
                  label={{
                    value: "Altitude (m above sea level)",
                    position: "insideBottom",
                    offset: -2,
                    fill: "#6F4A2E",
                    fontSize: 11,
                  }}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: "#3B2417", fontSize: 11 }}
                  stroke="#C9B68C"
                  width={120}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FAF5EC",
                    border: "1px solid #C9B68C",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(value) => `${value} m`}
                />
                <Bar dataKey="altitude" radius={[0, 6, 6, 0]}>
                  {ALTITUDE_DATA.map((entry, i) => (
                    <Cell key={i} fill={entry.verified ? "#B8924A" : "#3E6149"} />
                  ))}
                  <LabelList
                    dataKey="altitude"
                    position="right"
                    style={{ fill: "#3B2417", fontSize: 11, fontWeight: 600 }}
                    formatter={(v: number) => `${v}m`}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <Callout tone="gold" title="Why altitude matters">
            Above ~1500 m, cooler nights slow cherry maturation, producing denser beans with more complex sugars. The result is brighter acidity, more aromatic complexity, and a cup that reads as &lsquo;specialty&rsquo; rather than &lsquo;commodity&rsquo;. All six origins in this atlas sit at or above 1550 m — the entry altitude for Peruvian specialty.
          </Callout>
        </Card>
      </ViewSection>

      {/* §6 — Educational note */}
      <ViewSection
        badge="Atlas §6"
        title="How altitude, process & varietal shape the cup"
        meta="A short, accurate primer"
      >
        <Grid cols={3}>
          <Card className="flex flex-col gap-2 h-full">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-ursa-forest-deep/10 text-ursa-forest-deep border border-ursa-forest-deep/25">
                <Mountain size={18} />
              </span>
              <h4 className="font-display text-lg font-semibold text-ursa-dark-roast m-0">Altitude</h4>
            </div>
            <p className="m-0 text-[0.88rem] text-foreground/85 leading-relaxed">
              Higher altitude grows denser beans with more complex sugar chemistry. Below 1200 m you get soft, flat cups; 1200–1500 m brings body and sweetness; above 1500 m (specialty territory) you get bright acidity, floral aromatics, and clean fruit. All six origins plotted here sit at or above 1550 m.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Pill tone="forest">+ Acidity</Pill>
              <Pill tone="forest">+ Aromatics</Pill>
              <Pill tone="forest">+ Density</Pill>
            </div>
          </Card>
          <Card className="flex flex-col gap-2 h-full">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-ursa-gold/15 text-ursa-medium-roast border border-ursa-gold/40">
                <Droplet size={18} />
              </span>
              <h4 className="font-display text-lg font-semibold text-ursa-dark-roast m-0">Process</h4>
            </div>
            <p className="m-0 text-[0.88rem] text-foreground/85 leading-relaxed">
              <b>Washed</b> removes the fruit before fermentation — bright, clean, acidic; lets terroir speak. <b>Natural</b> dries the cherry on the bean — heavy body, fruit-forward, sweeter, more ferment-driven. <b>Honey</b> sits in between — partial mucilage left on, syrupy body, balanced sweetness, more demanding to execute well.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Pill tone="forest">Washed → bright</Pill>
              <Pill tone="stop">Natural → heavy</Pill>
              <Pill tone="gold">Honey → syrupy</Pill>
            </div>
          </Card>
          <Card className="flex flex-col gap-2 h-full">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-ursa-terracotta/10 text-ursa-terracotta border border-ursa-terracotta/30">
                <Sparkles size={18} />
              </span>
              <h4 className="font-display text-lg font-semibold text-ursa-dark-roast m-0">Varietal</h4>
            </div>
            <p className="m-0 text-[0.88rem] text-foreground/85 leading-relaxed">
              <b>Bourbon</b> — old, refined, sweet and complex (Utcubamba, La Coipa, Rodriguez de Mendoza). <b>Caturra</b> — Bourbon mutation, bright and clean, higher yield (Chirinos). <b>Typica</b> — the original Arabica base, elegant and balanced (Quillabamba). <b>Catimor</b> — Timor hybrid, hardy and productive but less complex (Satipo).
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Pill tone="gold">Bourbon → refined</Pill>
              <Pill tone="forest">Typica → elegant</Pill>
              <Pill tone="default">Catimor → hardy</Pill>
            </div>
          </Card>
        </Grid>
        <Callout tone="forest" title="How Ursa uses this atlas">
          The atlas is an input to the menu's single-origin rotation, the seasonal &lsquo;Gramo del Mes&rsquo; feature, and the cupping-night curriculum. Ursa's verified origin (Utcubamba) anchors the Filtrado Lonya; the other five are realistic expansion candidates as the roastery grows its sourcing relationships.
        </Callout>
      </ViewSection>

      {/* §7 — Dossier link + onward nav */}
      <ViewSection>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <DossierLinkBanner moduleId="03-menu-and-product-development" />
          <div className="flex items-center gap-3 flex-wrap">
            <Pill tone="forest">
              <Compass size={11} /> Atlas complete
            </Pill>
            <button
              onClick={() => navigate("menu")}
              className="font-label text-[0.72rem] tracking-[0.14em] uppercase text-ursa-forest-deep hover:text-ursa-gold transition inline-flex items-center gap-1.5"
            >
              Menu & Product <ArrowRight size={12} />
            </button>
            <button
              onClick={() => navigate("menu-studio")}
              className="font-label text-[0.72rem] tracking-[0.14em] uppercase text-ursa-forest-deep hover:text-ursa-gold transition inline-flex items-center gap-1.5"
            >
              Menu Engineering Studio <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </ViewSection>
    </>
  );
}
