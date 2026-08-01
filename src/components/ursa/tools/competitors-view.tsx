"use client";

import { useState, useMemo } from "react";
import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import {
  BearMark,
  ArtNouveauDivider,
  Pill,
  Callout,
  StatBlock,
  SectionBadge,
} from "../ursa-brand";
import { COMPETITORS } from "@/lib/ursa-data";
import { useNavigate } from "@/lib/ursa-nav";
import {
  Search,
  Globe,
  MapPin,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Trophy,
  Scale,
  Target,
  Compass,
  Filter,
  Layers,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type Competitor = (typeof COMPETITORS)[number];

/** Ursa's own profile for side-by-side comparison. */
const URSA_PROFILE: Competitor & { isUrsa?: boolean } = {
  id: "URSA",
  name: "Ursa Coffee Roasters",
  area: "Miraflores (single site)",
  address: "Alcanfores 183, Miraflores, Lima 15074",
  street: "Alcanfores",
  distanceMeters: 0,
  distanceBand: "same-street",
  type: "Independent specialty (single-site roaster)",
  subtype: "Specialty roastery + two-bar theatre",
  googleRating: 4.5,
  googleReviewCount: 56,
  tripAdvisorRating: null,
  tripAdvisorReviewCount: 0,
  status: "operating",
  positioning:
    "Single-site specialty roaster on Alcanfores. Bear-led brand, Art Nouveau craft language, two-bar theatre (espresso + coldbrew), named drinks (Ursagroni, Maracumango) (Ursagroni, Maracumango), 'Un gramo a la vez' ethos. CAM Café 2025 top-5.",
  strength: "Bear + Art Nouveau craft; in-house roastery; two bars; named drinks (Ursagroni, Maracumango); Aeropress champion (Paulo Sierra); CAM Café 2025 top-5",
  weakness: "No website yet; single-site; smaller retail reach than chains; TripAdvisor footprint near-zero",
  ursaImplication: "Baseline — protect the bear, close the website gap, scale craft without diluting identity.",
  hasWebsite: false,
  isUrsa: true,
  reviewThemes: {
    praise: [
      "best espresso in Lima (@flying__espresso, Instagram)",
      "Aeropress champion — Paulo Sierra (@rutadelcafeperuano)",
      "CAM Café 2025 top-5",
      "cozy and craft-led (Corner.inc editorial)",
      "high-quality, specialty; friendly staff (NovaCircle)",
    ],
    complaints: [
      "limited seating at peak (NovaCircle)",
      "prices slightly higher than average (NovaCircle)",
      "TripAdvisor footprint ~0 reviews",
    ],
    sampleSizeNote:
      "Ursa-specific reviews: 8 real mentions found across Instagram + editorial. Google aggregate 4.5/5 (56 reviews via addagio.io). Sample small but non-zero — see CUSTOMER_REVIEWS in ursa-data.ts.",
  },
};

/** Combined list with Ursa prepended for the table & matrix. */
const ALL_ROWS = [URSA_PROFILE, ...COMPETITORS];

/** Filter options. */
const AREA_OPTIONS = ["All", "Miraflores", "Barranco", "Multiple Lima", "Lima"] as const;
type AreaFilter = (typeof AREA_OPTIONS)[number];

const SITE_OPTIONS = ["All", "Yes", "No"] as const;
type SiteFilter = (typeof SITE_OPTIONS)[number];

/** Sort keys. */
type SortKey = "name" | "area" | "site" | null;
type SortDir = "asc" | "desc";

/** Head-to-head verdict per competitor (qualitative assessment from the implication text). */
const VERDICT: Record<string, "lead" | "match" | "trail"> = {
  // Same-street & in-catchment direct competitors
  "Milenaria Cafe": "match", // breakfast-led, not specialty — orthogonal, not leading
  "Coffee Notes": "lead", // uncertain status, near-zero online presence — Ursa's GBP wins
  "Estación 329": "match", // cozy+kind+quality; Ursa differentiates via roastery, parity on craft
  "Neira Café Lab": "trail", // scale + champion founder + 911 reviews — Ursa trails on reach
  "Arabica Espresso Bar": "lead", // stand-up speed niche Ursa does not want — Ursa leads on lingering craft
  "Punto Café": "lead", // direct head-to-head on awards; Ursa differentiates via bear + two-bar
  "Terrua": "match", // premium tasting parity; Ursa counters with tiered model
  "Cate Tasting Room": "lead", // chocolate crossover dilutes pure-coffee; Ursa leads on focus
  "Café Verde": "lead", // possibly closed; generic sustainability messaging; Ursa leads on specificity
  "El Pan de la Chola": "lead", // bakery-primary; not a coffee competitor — Ursa leads on coffee focus
  "Puku Puku": "trail", // multi-location scale + retail reach; Ursa trails on scale
  "True Artisan Cafe": "lead", // generic 'artisan' word; Ursa leads on ownable identity
  "OK Café": "lead", // no online presence; Ursa leads on discoverability
  "Amauta Coffee": "lead", // 4.1★ lowest rating; Ursa leads on execution
  // Lima-wide benchmark competitors (out of 1km catchment)
  "Bisetti": "match", // school-positioning parity; Ursa makes education warmer
  "Ciclos": "lead", // bike niche; Ursa leads on broad-coffee focus
  "RAIZ": "match", // farm-to-cup parity; Ursa counters with retail theatre
  "Monótono Coffee": "trail", // 1st place CAM 2025; Ursa trails on award recognition
};

/** Matrix positions (scale 0–100, craft 0–100). Scale = retail reach; Craft = distinctiveness of identity. */
const MATRIX_POSITIONS: Record<string, { scale: number; craft: number }> = {
  "Ursa Coffee Roasters": { scale: 12, craft: 95 },
  // Same-street & in-catchment direct competitors
  "Milenaria Cafe": { scale: 20, craft: 40 },
  "Coffee Notes": { scale: 8, craft: 35 },
  "Estación 329": { scale: 25, craft: 65 },
  "Neira Café Lab": { scale: 82, craft: 48 },
  "Arabica Espresso Bar": { scale: 18, craft: 45 },
  "Punto Café": { scale: 38, craft: 55 },
  "Terrua": { scale: 30, craft: 85 },
  "Cate Tasting Room": { scale: 28, craft: 60 },
  "Café Verde": { scale: 22, craft: 38 },
  "El Pan de la Chola": { scale: 45, craft: 50 },
  "Puku Puku": { scale: 75, craft: 50 },
  "True Artisan Cafe": { scale: 22, craft: 52 },
  "OK Café": { scale: 10, craft: 40 },
  "Amauta Coffee": { scale: 15, craft: 42 },
  // Lima-wide benchmark competitors
  "Bisetti": { scale: 28, craft: 80 },
  "Ciclos": { scale: 18, craft: 48 },
  "RAIZ": { scale: 22, craft: 70 },
  "Monótono Coffee": { scale: 35, craft: 88 },
};

/** Verdict label & styling. */
const VERDICT_META = {
  lead: {
    label: "Ursa leads",
    pill: "ok" as const,
    text: "text-ursa-forest-deep",
    bg: "bg-ursa-dark-roast/8",
    border: "border-ursa-forest-deep/25",
    dot: "bg-ursa-forest-deep",
    desc: "Ursa holds an advantage on this axis.",
  },
  match: {
    label: "Parity",
    pill: "warn" as const,
    text: "text-ursa-medium-roast",
    bg: "bg-ursa-gold/12",
    border: "border-ursa-gold/40",
    dot: "bg-ursa-gold",
    desc: "Roughly matched — compete on execution, not positioning.",
  },
  trail: {
    label: "Ursa trails",
    pill: "stop" as const,
    text: "text-ursa-terracotta-text",
    bg: "bg-ursa-terracotta/10",
    border: "border-ursa-terracotta/30",
    dot: "bg-ursa-terracotta",
    desc: "Ursa is behind on this axis — do not chase head-on.",
  },
};

/** Sort indicator icon (defined outside render to satisfy static-component rule). */
function SortIcon({
  k,
  sortKey,
  sortDir,
}: {
  k: Exclude<SortKey, null>;
  sortKey: SortKey;
  sortDir: SortDir;
}) {
  if (sortKey !== k) return <ArrowUpDown size={12} className="opacity-40" />;
  return sortDir === "asc" ? <ArrowUp size={12} /> : <ArrowDown size={12} />;
}

export function CompetitorsView() {
  const navigate = useNavigate();

  const [areaFilter, setAreaFilter] = useState<AreaFilter>("All");
  const [siteFilter, setSiteFilter] = useState<SiteFilter>("All");
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  /** Area normalization for the filter. */
  const matchesArea = (area: string, filter: AreaFilter): boolean => {
    if (filter === "All") return true;
    if (filter === "Miraflores") return area.toLowerCase().includes("miraflores");
    if (filter === "Barranco") return area === "Barranco";
    if (filter === "Multiple Lima") return area === "Multiple Lima";
    if (filter === "Lima") return area === "Lima";
    return true;
  };

  /** Filtered + sorted rows (Ursa always shown at the top regardless of filters). */
  const filtered = useMemo(() => {
    const searchLower = search.trim().toLowerCase();
    const competitorsOnly = COMPETITORS.filter((c) => {
      if (!matchesArea(c.area, areaFilter)) return false;
      if (siteFilter === "Yes" && !c.hasWebsite) return false;
      if (siteFilter === "No" && c.hasWebsite) return false;
      if (searchLower && !c.name.toLowerCase().includes(searchLower)) return false;
      return true;
    });

    // Always include Ursa at top, unless search explicitly filters her out.
    const ursaIncluded =
      !searchLower || URSA_PROFILE.name.toLowerCase().includes(searchLower);
    const rows = ursaIncluded ? [URSA_PROFILE, ...competitorsOnly] : competitorsOnly;

    if (!sortKey) return rows;
    const sorted = [...rows].sort((a, b) => {
      let av: string | number;
      let bv: string | number;
      if (sortKey === "name") {
        av = a.name.toLowerCase();
        bv = b.name.toLowerCase();
      } else if (sortKey === "area") {
        av = a.area.toLowerCase();
        bv = b.area.toLowerCase();
      } else {
        av = a.hasWebsite ? 1 : 0;
        bv = b.hasWebsite ? 1 : 0;
      }
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    // Keep Ursa pinned to the top after sort.
    const ursaIdx = sorted.findIndex((r) => r === URSA_PROFILE);
    if (ursaIdx > 0) {
      const [ursa] = sorted.splice(ursaIdx, 1);
      sorted.unshift(ursa);
    }
    return sorted;
  }, [areaFilter, siteFilter, search, sortKey, sortDir]);

  const visibleCompetitors = filtered.filter((r) => r !== URSA_PROFILE);

  const toggleSort = (key: Exclude<SortKey, null>) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  // Summary stats
  const totalCompetitors = COMPETITORS.length;
  const withWebsite = COMPETITORS.filter((c) => c.hasWebsite).length;
  const inMiraflores = COMPETITORS.filter((c) =>
    c.area.toLowerCase().includes("miraflores")
  ).length;
  const leadsCount = Object.values(VERDICT).filter((v) => v === "lead").length;
  const distinctivenessScore = Math.round((leadsCount / totalCompetitors) * 100);

  return (
    <>
      <ViewHero
        eyebrow="Extra Tool T2 · Interactive"
        title={
          <>
            Competitor Intelligence Dashboard.
          </>
        }
        lede={
          <>
            A filterable comparison matrix of the ten Miraflores and Lima competitors, plus Ursa's own profile pinned
            to the top of the table. Sort by name, area, or website presence; filter the set; read each head-to-head
            verdict; and see where every player sits on the scale-vs-craft quadrant.
          </>
        }
        meta={[
          { label: "Rows", value: `${COMPETITORS.length + 1} (incl. Ursa)` },
          { label: "Filterable by", value: "Area · Website · Name" },
          { label: "Source", value: "Module 02 snapshot" },
        ]}
      />

      {/* Summary stats */}
      <ViewSection className="py-8">
        <Grid cols={4}>
          <StatBlock value={`${totalCompetitors}`} label="Competitors tracked" tone="forest" />
          <StatBlock value={`${withWebsite}`} label="Operate a website" tone="gold" />
          <StatBlock value={`${inMiraflores}`} label="Miraflores presence (incl. clusters)" tone="terracotta" />
          <StatBlock value={`${distinctivenessScore}%`} label="Ursa distinctiveness score" tone="forest" />
        </Grid>
        <p className="text-[0.85rem] text-muted-foreground mt-5 mb-0 max-w-[80ch]">
          The distinctiveness score is qualitative — it is the share of competitors against which Ursa holds a clear
          positional lead (the bear, the two-bar theatre, the named-drink convention, the Art Nouveau craft
          language). It is not a market-share metric.
        </p>
      </ViewSection>

      {/* Filter controls */}
      <ViewSection
        badge="Filter controls"
        title="Narrow the set"
        meta="Ursa stays pinned at the top of every filter result"
      >
        <Card className="bg-ursa-foam">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="font-label text-[0.68rem] tracking-[0.14em] uppercase text-muted-foreground mb-2 flex items-center gap-1.5">
                <Search size={12} /> Search by name
              </label>
              <Input
                placeholder="e.g. Punto, Bisetti, Puku…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-ursa-paper"
              />
            </div>
            <div>
              <label className="font-label text-[0.68rem] tracking-[0.14em] uppercase text-muted-foreground mb-2 flex items-center gap-1.5">
                <MapPin size={12} /> Area
              </label>
              <Select value={areaFilter} onValueChange={(v) => setAreaFilter(v as AreaFilter)}>
                <SelectTrigger className="w-full bg-ursa-paper">
                  <SelectValue placeholder="Area" />
                </SelectTrigger>
                <SelectContent>
                  {AREA_OPTIONS.map((a) => (
                    <SelectItem key={a} value={a}>{a}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="font-label text-[0.68rem] tracking-[0.14em] uppercase text-muted-foreground mb-2 flex items-center gap-1.5">
                <Globe size={12} /> Has website
              </label>
              <Select value={siteFilter} onValueChange={(v) => setSiteFilter(v as SiteFilter)}>
                <SelectTrigger className="w-full bg-ursa-paper">
                  <SelectValue placeholder="Website" />
                </SelectTrigger>
                <SelectContent>
                  {SITE_OPTIONS.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-ursa-line-soft">
            <Filter size={13} className="text-ursa-gold-text" />
            <span className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-muted-foreground">
              Showing
            </span>
            <Pill tone="forest">{visibleCompetitors.length} competitors</Pill>
            <Pill tone={siteFilter === "All" ? "default" : siteFilter === "Yes" ? "ok" : "stop"}>
              Website: {siteFilter}
            </Pill>
            <Pill tone={areaFilter === "All" ? "default" : "gold"}>Area: {areaFilter}</Pill>
            {search && <Pill tone="default">Search: “{search}”</Pill>}
            <button
              onClick={() => {
                setAreaFilter("All");
                setSiteFilter("All");
                setSearch("");
                setSortKey("name");
                setSortDir("asc");
              }}
              className="ml-auto font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-terracotta-text hover:text-ursa-dark-roast transition"
            >
              Reset all
            </button>
          </div>
        </Card>
      </ViewSection>

      {/* Comparison table */}
      <ViewSection
        badge="Comparison matrix"
        title="Side-by-side, sortable"
        meta="Click a column header to sort · scroll horizontally on mobile"
      >
        <Card className="p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-ursa-paper border-ursa-line-soft hover:bg-ursa-paper">
                  <TableHead className="pl-4">
                    <button
                      onClick={() => toggleSort("name")}
                      className="inline-flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-dark-roast hover:text-ursa-gold-text transition"
                    >
                      Name <SortIcon k="name" sortKey={sortKey} sortDir={sortDir} />
                    </button>
                  </TableHead>
                  <TableHead>
                    <button
                      onClick={() => toggleSort("area")}
                      className="inline-flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-dark-roast hover:text-ursa-gold-text transition"
                    >
                      Area <SortIcon k="area" sortKey={sortKey} sortDir={sortDir} />
                    </button>
                  </TableHead>
                  <TableHead className="min-w-[16rem]">Strength</TableHead>
                  <TableHead className="min-w-[14rem]">Weakness</TableHead>
                  <TableHead className="min-w-[18rem]">Ursa implication</TableHead>
                  <TableHead>
                    <button
                      onClick={() => toggleSort("site")}
                      className="inline-flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-dark-roast hover:text-ursa-gold-text transition"
                    >
                      Website <SortIcon k="site" sortKey={sortKey} sortDir={sortDir} />
                    </button>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((c) => {
                  const isUrsa = c === URSA_PROFILE;
                  return (
                    <TableRow
                      key={c.name}
                      className={cn(
                        "border-ursa-line-soft",
                        isUrsa
                          ? "bg-ursa-gold/12 border-ursa-gold/40"
                          : "hover:bg-ursa-paper/60"
                      )}
                    >
                      <TableCell className="pl-4">
                        <div className="flex items-center gap-2">
                          {isUrsa ? (
                            <BearMark size={18} className="text-ursa-dark-roast shrink-0" />
                          ) : (
                            <span className="w-[18px] h-[18px] rounded-full bg-ursa-line-soft shrink-0 flex items-center justify-center">
                              <Coffee size={10} className="text-ursa-medium-roast" />
                            </span>
                          )}
                          <span className={cn("font-medium", isUrsa ? "text-ursa-dark-roast" : "text-ursa-dark-roast")}>
                            {c.name}
                          </span>
                          {isUrsa && (
                            <Pill tone="gold" className="ml-1">
                              <BearMark size={9} className="text-ursa-dark-roast" /> Ursa
                            </Pill>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-[0.85rem] text-muted-foreground whitespace-nowrap">{c.area}</span>
                      </TableCell>
                      <TableCell className="max-w-[20rem]">
                        <span className="text-[0.85rem] text-foreground/85">{c.strength}</span>
                      </TableCell>
                      <TableCell className="max-w-[18rem]">
                        <span className="text-[0.85rem] text-foreground/85">{c.weakness}</span>
                      </TableCell>
                      <TableCell className="max-w-[22rem]">
                        <span className={cn("text-[0.85rem]", isUrsa ? "text-ursa-dark-roast font-medium" : "text-ursa-forest-deep font-medium")}>
                          {c.ursaImplication}
                        </span>
                      </TableCell>
                      <TableCell>
                        {c.hasWebsite ? (
                          <Pill tone="ok"><Globe size={11} /> Yes</Pill>
                        ) : (
                          <Pill tone="stop"><Globe size={11} /> No</Pill>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                      No competitors match these filters. Try resetting.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Card>
        <p className="text-[0.82rem] text-muted-foreground mt-3 mb-0">
          Ursa's row is highlighted in gold and pinned to the top so every comparison reads against the same baseline.
        </p>
      </ViewSection>

      {/* Ursa positioning matrix */}
      <ViewSection
        badge="Positioning matrix"
        title="Scale vs. craft identity"
        meta="Two axes · Ursa owns the high-craft, low-scale quadrant"
      >
        <Grid cols={3}>
          <div className="md:col-span-2">
            <Card className="p-4 md:p-6 bg-ursa-foam">
              <div
                className="relative w-full bg-ursa-paper rounded-lg border border-ursa-line-soft"
                style={{ aspectRatio: "1 / 1", maxHeight: "560px" }}
              >
                {/* Quadrant background tint */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(143,166,139,0.18) 0%, rgba(143,166,139,0.05) 35%, transparent 50%), linear-gradient(315deg, rgba(184,146,74,0.14) 0%, rgba(184,146,74,0.04) 35%, transparent 50%)",
                  }}
                />
                {/* Crosshair axes */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ursa-line" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-ursa-line" />

                {/* Quadrant labels */}
                <div className="absolute top-2 left-2 font-label text-[0.6rem] tracking-[0.14em] uppercase text-ursa-forest-deep/70 max-w-[8rem] leading-tight">
                  High craft · Low scale<br />Niche specialists
                </div>
                <div className="absolute top-2 right-2 font-label text-[0.6rem] tracking-[0.14em] uppercase text-ursa-gold-text/80 text-right max-w-[9rem] leading-tight">
                  High craft · High scale<br />Category leaders
                </div>
                <div className="absolute bottom-2 left-2 font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground max-w-[9rem] leading-tight">
                  Low craft · Low scale<br />Undifferentiated
                </div>
                <div className="absolute bottom-2 right-2 font-label text-[0.6rem] tracking-[0.14em] uppercase text-ursa-terracotta-text/80 text-right max-w-[9rem] leading-tight">
                  Low craft · High scale<br />Chains
                </div>

                {/* Axis titles */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-label text-[0.66rem] tracking-[0.18em] uppercase text-ursa-dark-roast whitespace-nowrap">
                  Scale → (single site · · · Lima-wide chain)
                </div>
                <div
                  className="font-label text-[0.66rem] tracking-[0.18em] uppercase text-ursa-dark-roast"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "-1.5rem",
                    transform: "rotate(-90deg) translateX(50%)",
                    transformOrigin: "left center",
                    whiteSpace: "nowrap",
                  }}
                >
                  Craft identity → (generic · · · distinctive)
                </div>

                {/* Dots */}
                {ALL_ROWS.map((c) => {
                  const pos = MATRIX_POSITIONS[c.name];
                  if (!pos) return null;
                  const isUrsa = c === URSA_PROFILE;
                  // Invert scale so 0 = left, 100 = right; craft: 0 = bottom, 100 = top
                  const left = `${pos.scale}%`;
                  const top = `${100 - pos.craft}%`;
                  const shortName = c.name.length > 20 ? c.name.split(" ")[0] + "…" : c.name;
                  return (
                    <div
                      key={c.name}
                      className="absolute"
                      style={{ left, top, transform: "translate(-50%, -50%)" }}
                    >
                      <div className="flex flex-col items-center gap-1">
                        {isUrsa && (
                          <BearMark size={22} className="text-ursa-dark-roast" />
                        )}
                        <span
                          className={cn(
                            "rounded-full border-2 flex items-center justify-center",
                            isUrsa
                              ? "w-4 h-4 bg-ursa-gold border-ursa-dark-roast shadow-[0_0_0_4px_rgba(184,146,74,0.3)]"
                              : "w-3 h-3 bg-ursa-forest-deep border-ursa-cream"
                          )}
                        />
                        <span
                          className={cn(
                            "font-label text-[0.62rem] tracking-[0.04em] uppercase px-1.5 py-0.5 rounded whitespace-nowrap",
                            isUrsa
                              ? "bg-ursa-dark-roast text-ursa-cream font-semibold"
                              : "bg-ursa-paper/90 text-ursa-dark-roast border border-ursa-line-soft"
                          )}
                        >
                          {shortName}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-[0.8rem] text-muted-foreground mt-8 mb-0">
                Positions are qualitative, derived from each competitor's verified strength and weakness. The bear
                marks Ursa — high craft, low scale, the quadrant no Lima chain has bothered to occupy.
              </p>
            </Card>
          </div>
          <div className="space-y-4">
            <Card className="bg-ursa-foam">
              <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
                <Target size={16} className="text-ursa-gold-text" /> How to read this
              </h3>
              <ul className="space-y-2.5 m-0 p-0 list-none text-[0.88rem]">
                <li className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ursa-forest-deep shrink-0" />
                  <span><strong>Scale (x-axis)</strong> reflects retail reach — single site on the left, Lima-wide chains on the right.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ursa-forest-deep shrink-0" />
                  <span><strong>Craft identity (y-axis)</strong> reflects how distinctive the brand language is — generic at the bottom, ownable at the top.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ursa-gold shrink-0" />
                  <span><strong>Ursa's quadrant</strong> — high craft, low scale — is uncontested. No competitor combines a distinctive visual identity with single-site intimacy.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ursa-terracotta shrink-0" />
                  <span><strong>Strategic move:</strong> grow vertically (deeper craft) before horizontally (more sites). Scale without distinctiveness is the trap Puku Puku fell into.</span>
                </li>
              </ul>
            </Card>
            <Callout tone="forest" title="The open quadrant">
              The top-left corner — high craft, low scale — is where niche specialists like Bisetti, Terrua, and RAIZ
              live. Ursa belongs here, but with a sharper identity (the bear) than any of them. Defend the quadrant;
              do not abandon it chasing Neira's scale.
            </Callout>
          </div>
        </Grid>
      </ViewSection>

      {/* Head-to-head cards */}
      <ViewSection
        badge="Head-to-head"
        title="Ursa vs. each competitor"
        meta="Verdict colour-coded · green = Ursa leads · gold = parity · terracotta = Ursa trails"
      >
        <Grid cols={3}>
          {COMPETITORS.map((c) => {
            const verdict = VERDICT[c.name] ?? "match";
            const meta = VERDICT_META[verdict];
            return (
              <Card key={c.name} className="flex flex-col gap-3 h-full">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-1">{c.name}</h3>
                    <div className="flex items-center gap-1.5 text-[0.74rem] text-muted-foreground">
                      <MapPin size={11} className="text-ursa-gold-text" />
                      <span className="font-label tracking-[0.06em] uppercase">{c.area}</span>
                    </div>
                  </div>
                  <Pill tone={meta.pill}>
                    {verdict === "lead" ? <Trophy size={11} /> : verdict === "match" ? <Scale size={11} /> : <Layers size={11} />}
                    {meta.label}
                  </Pill>
                </div>
                <div className={cn("rounded-md px-3 py-2.5 border", meta.bg, meta.border)}>
                  <div className={cn("font-label text-[0.62rem] tracking-[0.16em] uppercase mb-1", meta.text)}>
                    Ursa implication
                  </div>
                  <p className="m-0 text-[0.88rem] text-ursa-dark-roast font-medium leading-snug">{c.ursaImplication}</p>
                </div>
                <div className="text-[0.82rem] text-muted-foreground leading-snug">{meta.desc}</div>
              </Card>
            );
          })}
        </Grid>
      </ViewSection>

      {/* Synthesis */}
      <ViewSection
        badge="Synthesis"
        title="What this dashboard is telling you"
      >
        <Grid cols={2}>
          <Callout tone="stop" title="The website gap is the only red line">
            <p className="mb-0">
              Every single competitor in this matrix operates a website. Ursa does not. This is not a competitive
              disadvantage on craft or scale — it is a basic infrastructure gap. Close it inside 30 days; the design
              system, the menu, and the brand language all already exist.
            </p>
          </Callout>
          <Callout tone="forest" title="The bear is uncontested">
            <p className="mb-0">
              Ursa leads on positional distinctiveness against {leadsCount} of {totalCompetitors} competitors, matches{" "}
              {Object.values(VERDICT).filter((v) => v === "match").length}, and trails{" "}
              {Object.values(VERDICT).filter((v) => v === "trail").length}. The two trails — Neira and Puku Puku — are
              on <em>scale</em>, not craft. Do not chase them. Grow vertically first.
            </p>
          </Callout>
        </Grid>
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <button
            onClick={() => navigate("market")}
            className="inline-flex items-center gap-2 bg-ursa-dark-roast text-ursa-cream font-label text-[0.74rem] tracking-[0.14em] uppercase px-4 py-2.5 rounded-md hover:bg-ursa-espresso transition"
          >
            <Compass size={14} /> Open Module 02 (full analysis)
          </button>
          <button
            onClick={() => navigate("brand")}
            className="inline-flex items-center gap-2 border border-ursa-gold text-ursa-gold-text font-label text-[0.74rem] tracking-[0.14em] uppercase px-4 py-2.5 rounded-md hover:bg-ursa-gold hover:text-ursa-dark-roast transition"
          >
            <BearMark size={14} className="text-current" /> Open Brand Audit
          </button>
        </div>
      </ViewSection>

      {/* Dossier link */}
      <ViewSection className="py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionBadge tone="forest">T2 · Interactive tool</SectionBadge>
          <DossierLinkBanner moduleId="02-market-competitors-and-customer-voice" />
        </div>
      </ViewSection>
    </>
  );
}

/** Local coffee cup icon (avoids importing one we don't have). */
function Coffee({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 9 H16 V14 C16 17.3 13.3 20 10 20 C6.7 20 4 17.3 4 14 Z" fill="currentColor" opacity="0.85" />
      <path d="M16 10 H18 C19.7 10 21 11.3 21 13 C21 14.7 19.7 16 18 16 H16" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </svg>
  );
}
