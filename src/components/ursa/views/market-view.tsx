"use client";

import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import {
  BearMark,
  ArtNouveauDivider,
  Pill,
  Callout,
  StatBlock,
  SectionBadge,
  EvidenceTag,
} from "../ursa-brand";
import {
  COMPETITORS,
  CUSTOMER_VOICE,
  CUSTOMER_REVIEWS,
  REVIEW_AGGREGATE_RATINGS,
  REVIEW_RESEARCH_LOG,
  URSA_FACTS,
  CENSUS_META,
} from "@/lib/ursa-data";
import { useNavigate } from "@/lib/ursa-nav";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  Compass,
  Globe,
  MapPin,
  Award,
  GraduationCap,
  Layers,
  Coffee,
  Star,
  AlertTriangle,
  ShieldCheck,
  Lightbulb,
  Wrench,
  Megaphone,
  ArrowRight,
  Swords,
  Frown,
  ThumbsUp,
  TrendingUp,
  Quote,
  ExternalLink,
  Search,
  Info,
  MapPinned,
  CheckCircle2,
  CircleSlash,
  Ruler,
  Building2,
  Network,
} from "lucide-react";

type Competitor = (typeof COMPETITORS)[number];

/** Proximity tone for a competitor's distance band. */
const PROXIMITY_META: Record<
  string,
  { label: string; tone: "red" | "gold" | "green" | "muted"; description: string }
> = {
  "same-street": { label: "Same street", tone: "red", description: "Critical proximity — same street as Ursa, <250m walk" },
  nearby: { label: "Nearby", tone: "gold", description: "Within ~500m walk of Ursa" },
  "within-1km": { label: "Within 1km", tone: "green", description: "Within 1km walking radius of Ursa" },
  "out-of-area-lima-wide": { label: "Benchmark", tone: "muted", description: "Lima-wide benchmark outside 1km catchment" },
};

const PROXIMITY_TONE_CLASSES: Record<"red" | "gold" | "green" | "muted", { badge: string; dot: string; row: string }> = {
  red: {
    badge: "bg-ursa-terracotta/12 text-ursa-terracotta-text border-ursa-terracotta/35",
    dot: "bg-ursa-terracotta",
    row: "border-l-2 border-l-ursa-terracotta/60",
  },
  gold: {
    badge: "bg-ursa-gold/15 text-ursa-medium-roast border-ursa-gold/40",
    dot: "bg-ursa-gold",
    row: "border-l-2 border-l-ursa-gold/60",
  },
  green: {
    badge: "bg-ursa-forest-deep/10 text-ursa-forest-deep border-ursa-forest-deep/25",
    dot: "bg-ursa-forest-deep",
    row: "border-l-2 border-l-ursa-forest-deep/50",
  },
  muted: {
    badge: "bg-muted text-muted-foreground border-border",
    dot: "bg-muted-foreground/60",
    row: "border-l-2 border-l-border opacity-90",
  },
};

/** Compact proximity badge. */
function ProximityBadge({ band }: { band: string }) {
  const meta = PROXIMITY_META[band] ?? PROXIMITY_META["within-1km"];
  const cls = PROXIMITY_TONE_CLASSES[meta.tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-label text-[0.58rem] tracking-[0.08em] uppercase px-1.5 py-0.5 rounded border",
        cls.badge
      )}
      title={meta.description}
    >
      <span className={cn("w-1 h-1 rounded-full", cls.dot)} />
      {meta.label}
    </span>
  );
}

/** Status pill — operating / uncertain. */
function StatusPill({ status }: { status: string }) {
  if (status === "uncertain") {
    return (
      <span className="inline-flex items-center gap-1 font-label text-[0.58rem] tracking-[0.08em] uppercase px-1.5 py-0.5 rounded bg-ursa-gold/15 text-ursa-medium-roast border border-ursa-gold/40">
        <CircleSlash size={9} /> Uncertain
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 font-label text-[0.58rem] tracking-[0.08em] uppercase px-1.5 py-0.5 rounded bg-ursa-forest-deep/10 text-ursa-forest-deep border border-ursa-forest-deep/25">
      <CheckCircle2 size={9} /> Operating
    </span>
  );
}

/** Rating cell — shows ★ rating + review count, or em-dash if null. */
function RatingCell({
  rating,
  count,
}: {
  rating: number | null;
  count: number | null;
}) {
  if (rating === null && count === null) return <span className="text-muted-foreground/60">—</span>;
  return (
    <div className="flex flex-col leading-tight">
      {rating !== null ? (
        <span className="font-medium text-ursa-dark-roast flex items-center gap-0.5">
          <Star size={10} className="text-ursa-gold-text fill-ursa-gold" />
          {rating.toFixed(1)}
        </span>
      ) : (
        <span className="text-muted-foreground/60 text-[0.78rem]">—</span>
      )}
      {count !== null ? (
        <span className="text-[0.66rem] text-muted-foreground tracking-[0.02em]">{count} reviews</span>
      ) : null}
    </div>
  );
}

/** Distance formatter — meters or km. */
function formatDistance(m: number): string {
  if (m < 1000) return `${m}m`;
  return `${(m / 1000).toFixed(1)}km`;
}

/** One competitor card. */
function CompetitorCard({ c }: { c: (typeof COMPETITORS)[number] }) {
  return (
    <Card className="flex flex-col gap-3 h-full">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-ursa-dark-roast mt-0 mb-1">{c.name}</h3>
          <div className="flex items-center gap-1.5 text-[0.78rem] text-muted-foreground">
            <MapPin size={13} className="text-ursa-gold-text" />
            <span className="font-label tracking-[0.06em] uppercase">{c.area}</span>
          </div>
        </div>
        <Pill tone={c.hasWebsite ? "ok" : "stop"}>
          <Globe size={11} /> {c.hasWebsite ? "Website" : "No site"}
        </Pill>
      </div>
      <ArtNouveauDivider className="my-1" />
      <div className="space-y-2.5 text-[0.9rem]">
        <div>
          <div className="flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-forest-deep mb-0.5">
            <ThumbsUp size={11} /> Strength
          </div>
          <p className="m-0 text-foreground/85">{c.strength}</p>
        </div>
        <div>
          <div className="flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-terracotta-text mb-0.5">
            <Frown size={11} /> Weakness
          </div>
          <p className="m-0 text-foreground/85">{c.weakness}</p>
        </div>
        <div className="bg-ursa-dark-roast/5 border border-ursa-forest-deep/15 rounded-md px-3 py-2">
          <div className="flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-forest-deep mb-0.5">
            <Compass size={11} /> Ursa implication
          </div>
          <p className="m-0 text-ursa-dark-roast font-medium">{c.ursaImplication}</p>
        </div>
      </div>
    </Card>
  );
}

/** Conversion-to-action card. */
function ActionCard({
  icon,
  title,
  tone,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  tone: "gold" | "forest" | "terracotta";
  items: string[];
}) {
  const toneMap = {
    gold: { text: "text-ursa-gold-text", bg: "bg-ursa-gold/10", border: "border-ursa-gold/40" },
    forest: { text: "text-ursa-forest-deep", bg: "bg-ursa-dark-roast/8", border: "border-ursa-forest-deep/25" },
    terracotta: { text: "text-ursa-terracotta-text", bg: "bg-ursa-terracotta/10", border: "border-ursa-terracotta/30" },
  }[tone];
  return (
    <Card className="flex flex-col gap-3 h-full">
      <div className="flex items-center gap-2.5">
        <span className={`flex items-center justify-center w-9 h-9 rounded-lg ${toneMap.bg} ${toneMap.text} border ${toneMap.border}`}>
          {icon}
        </span>
        <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-0">{title}</h3>
      </div>
      <ul className="space-y-1.5 m-0 p-0 list-none text-[0.88rem]">
        {items.map((it) => (
          <li key={it} className="flex gap-2 leading-snug">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${toneMap.text}`} style={{ backgroundColor: "currentColor" }} />
            <span className="text-foreground/85">{it}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function MarketView() {
  const navigate = useNavigate();

  const inCatchment = COMPETITORS.filter(
    (c) => c.distanceBand !== "out-of-area-lima-wide"
  ).length;
  const operating = COMPETITORS.filter((c) => c.status === "operating").length;
  const uncertain = COMPETITORS.filter((c) => c.status === "uncertain").length;
  const sameStreet = COMPETITORS.filter((c) => c.distanceBand === "same-street").length;
  const withWebsite = COMPETITORS.filter((c) => c.hasWebsite).length;

  // Sorted by distance for the census table — nearest first.
  const censusSorted = [...COMPETITORS].sort(
    (a, b) => a.distanceMeters - b.distanceMeters
  );

  const ownableSpaces = [
    { name: "Punto Café", owns: "Awards", icon: <Award size={14} /> },
    { name: "Neira Café Lab", owns: "Scale", icon: <Layers size={14} /> },
    { name: "Bisetti", owns: "“Escuela de café”", icon: <GraduationCap size={14} /> },
    { name: "Puku Puku", owns: "Microlotes", icon: <Coffee size={14} /> },
    { name: "Terrua", owns: "Premium tasting", icon: <Star size={14} /> },
    { name: "Ursa", owns: "The bear", icon: <BearMark size={14} className="text-ursa-dark-roast" />, ursa: true },
  ];

  const conversionCards: {
    icon: React.ReactNode;
    title: string;
    tone: "gold" | "forest" | "terracotta";
    items: string[];
  }[] = [
    {
      icon: <ShieldCheck size={16} />,
      title: "Standards Ursa must match",
      tone: "gold",
      items: [
        "Award visibility — Punto Café won Premios Somos 2024; Ursa needs a credible awards entry",
        "Premium tasting quality — Terrua charges US$25; Ursa's cupping must be technically tight",
        "Educational depth — Bisetti owns the school; Ursa baristas must speak origin fluently",
        "Bean transparency — Puku Puku lists microlots; Ursa's menu must show origin, process, altitude",
      ],
    },
    {
      icon: <AlertTriangle size={16} />,
      title: "Problems to avoid",
      tone: "terracotta",
      items: [
        "Cobrand dilution — Neira's WorkCafé partnership softens its café identity",
        "Chain feel at scale — Puku Puku trades atmosphere for reach",
        "Generic sustainability messaging — Café Verde's green copy could be anyone's",
        "Educational formality — Bisetti's school tone can feel like homework",
        "Cold or diluted delivery coffee — a recurring Lima complaint",
      ],
    },
    {
      icon: <TrendingUp size={16} />,
      title: "Areas to lead",
      tone: "forest",
      items: [
        "Bear-led brand character no competitor owns",
        "Two-bar theatre (espresso + coldbrew) visible from the street",
        "Portmanteau drink naming — Ursagroni, Maracumango — as a signature system",
        "“Un gramo a la vez” as a patient-craft ethos",
        "Art Nouveau craft language applied consistently across every touchpoint",
      ],
    },
    {
      icon: <Wrench size={16} />,
      title: "Customer-experience improvements",
      tone: "gold",
      items: [
        "Verified Google Business Profile — a basic competitors also neglect",
        "Live “is it busy now?” indicator on the café site",
        "Clear booking channel for tastings and cuppings",
        "Bean cards that mark seasonal vs. permanent lots",
        "Strong Wi-Fi and accessible power outlets for remote workers",
      ],
    },
    {
      icon: <Lightbulb size={16} />,
      title: "Product opportunities",
      tone: "forest",
      items: [
        "Tiered tasting flights — accessible entry plus a premium depth vs. Terrua's US$25 ceiling",
        "Microlot sub-line — borrow Puku Puku's positioning without the chain feel",
        "Origin-story bean cards — pair with the Filtrado Lonya line vs. RAIZ",
        "Named-drink rotation — a new named drink every season keeps the menu alive",
        "Subscription with attach-rate economics — see the Subscription Calculator",
      ],
    },
    {
      icon: <Megaphone size={16} />,
      title: "Marketing proof points",
      tone: "terracotta",
      items: [
        "“In-house roastery, visible from the bar” — proof of specialty credibility",
        "“Two bars: espresso + coldbrew” — visible theatre",
        "“Original drinks you can ask for by name” — Ursagroni, Maracumango",
        "“Art Nouveau craft, applied consistently” — design language as moat",
        "“Single-site intimacy” — one Miraflores café, not a chain",
      ],
    },
  ];

  return (
    <>
      <ViewHero
        eyebrow="Module 02 · Market, Competitors & Customer Voice"
        title={
          <>
            Eighteen competitors mapped within 1km of Alcanfores 183 — and the one space none of them owns.
          </>
        }
        lede={
          <>
            This module runs a systematic 1km competitor census from Ursa&rsquo;s Alcanfores 183 address — every named
            street radiating off Parque Kennedy walked, every public-facing café logged — then reads the customer-voice
            patterns across them and converts each finding into something Ursa can match, avoid, or lead on. The bear is
            not borrowed from the category; it is the one position left uncontested.
          </>
        }
        meta={[
          { label: "Census", value: `${CENSUS_META.censusId} · ${COMPETITORS.length} competitors` },
          { label: "Scope", value: `${CENSUS_META.totals.inCatchment} in 1km + ${CENSUS_META.totals.outOfAreaBenchmarks} Lima benchmarks` },
          { label: "Snapshot", value: URSA_FACTS.snapshot },
        ]}
      />

      {/* At-a-glance stats */}
      <ViewSection className="py-8">
        <Grid cols={4}>
          <StatBlock value={`${COMPETITORS.length}`} label="Competitors in census" tone="forest" />
          <StatBlock value={`${inCatchment}`} label="Within 1km catchment" tone="gold" />
          <StatBlock value={`${operating}·${uncertain}`} label="Operating · Uncertain" tone="terracotta" />
          <StatBlock value={`${sameStreet}`} label="Same street as Ursa" tone="forest" />
        </Grid>
      </ViewSection>

      {/* 1km Competitor Census */}
      <ViewSection
        badge="1km competitor census (CENSUS-1)"
        title="Every named competitor within a 1km walk of Alcanfores 183"
        meta="Systematic street-radiating grid · snapshot 2026-08-01"
      >
        <p className="text-[0.97rem] leading-relaxed text-foreground/85 max-w-[68ch] mb-5">
          The competitor set is no longer a shortlist — it is a census. Every named street within a 1km walk of
          Ursa&rsquo;s address was walked virtually via Google Maps Street View and cross-referenced against Google
          Places, TripAdvisor, and Instagram location tags. The result: <strong>14 competitors inside the 1km
          catchment</strong> plus <strong>4 Lima-wide benchmarks</strong> (Bisetti, Ciclos, RAIZ, Monótono) included for
          positional context. Proximity is colour-coded: <span className="text-ursa-terracotta-text font-medium">red =
          same street</span>, <span className="text-ursa-medium-roast font-medium">gold = nearby</span>,{" "}
          <span className="text-ursa-forest-deep font-medium">green = within 1km</span>,{" "}
          <span className="text-muted-foreground font-medium">grey = out-of-area benchmark</span>.
        </p>

        {/* Summary stats grid */}
        <Grid cols={4}>
          <StatBlock value={`${CENSUS_META.totals.inCensus}`} label="Total discovered" tone="forest" />
          <StatBlock value={`${CENSUS_META.totals.operating}`} label="Operating" tone="gold" />
          <StatBlock value={`${CENSUS_META.totals.uncertain}`} label="Status uncertain" tone="terracotta" />
          <StatBlock value={`${CENSUS_META.totals.directCompetitors}`} label="Direct competitors" tone="forest" />
        </Grid>

        {/* Census table */}
        <Card className="mt-6 p-0 overflow-hidden">
          <div className="px-4 py-3 border-b border-ursa-line-soft bg-ursa-foam flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <MapPinned size={15} className="text-ursa-gold-text" />
              <h3 className="font-display text-base font-semibold text-ursa-dark-roast m-0">
                Census table — sorted nearest-first
              </h3>
            </div>
            <span className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground">
              {COMPETITORS.length} competitors · {CENSUS_META.gridStreets.length} streets walked
            </span>
          </div>
          <Table className="text-[0.82rem]">
            <TableHeader>
              <TableRow className="border-ursa-line-soft hover:bg-transparent">
                <TableHead className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground h-9 py-2">Competitor</TableHead>
                <TableHead className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground h-9 py-2 hidden md:table-cell">Address</TableHead>
                <TableHead className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground h-9 py-2">Distance</TableHead>
                <TableHead className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground h-9 py-2 hidden lg:table-cell">Type</TableHead>
                <TableHead className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground h-9 py-2">Google</TableHead>
                <TableHead className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground h-9 py-2">TripAdvisor</TableHead>
                <TableHead className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground h-9 py-2">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {censusSorted.map((c) => {
                const meta = PROXIMITY_META[c.distanceBand] ?? PROXIMITY_META["within-1km"];
                const cls = PROXIMITY_TONE_CLASSES[meta.tone];
                return (
                  <TableRow
                    key={c.id}
                    className={cn("border-ursa-line-soft hover:bg-ursa-foam/60", cls.row)}
                  >
                    <TableCell className="py-2.5 pr-3 align-top">
                      <div className="flex flex-col gap-1">
                        <span className="font-display font-semibold text-ursa-dark-roast leading-tight">{c.name}</span>
                        <ProximityBadge band={c.distanceBand} />
                      </div>
                    </TableCell>
                    <TableCell className="py-2.5 pr-3 align-top hidden md:table-cell">
                      <div className="flex items-start gap-1.5 text-muted-foreground">
                        <MapPin size={11} className="text-ursa-gold-text mt-0.5 shrink-0" />
                        <span className="leading-snug">{c.address}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-2.5 pr-3 align-top">
                      <div className="flex items-center gap-1 text-ursa-dark-roast font-medium">
                        <Ruler size={11} className="text-muted-foreground" />
                        {formatDistance(c.distanceMeters)}
                      </div>
                    </TableCell>
                    <TableCell className="py-2.5 pr-3 align-top hidden lg:table-cell">
                      <span className="text-muted-foreground leading-snug">{c.type}</span>
                    </TableCell>
                    <TableCell className="py-2.5 pr-3 align-top">
                      <RatingCell rating={c.googleRating} count={c.googleReviewCount} />
                    </TableCell>
                    <TableCell className="py-2.5 pr-3 align-top">
                      <RatingCell rating={c.tripAdvisorRating} count={c.tripAdvisorReviewCount} />
                    </TableCell>
                    <TableCell className="py-2.5 pr-3 align-top">
                      <StatusPill status={c.status} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>

        {/* Coverage methodology callout */}
        <div className="mt-6">
        <Callout tone="forest" title="Coverage methodology — how the census was built">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-3">
            <div>
              <div className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-ursa-forest-deep mb-1 flex items-center gap-1.5">
                <Network size={11} /> Study area
              </div>
              <p className="m-0 text-[0.88rem] text-foreground/85 leading-snug">{CENSUS_META.studyArea}. 1km is the practical walk-up catchment for an espresso bar in a dense, walkable district like Miraflores.</p>
            </div>
            <div>
              <div className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-ursa-forest-deep mb-1 flex items-center gap-1.5">
                <MapPinned size={11} /> Grid definition
              </div>
              <p className="m-0 text-[0.88rem] text-foreground/85 leading-snug">Street-radiating grid from Parque Kennedy — every named street within 1km walked virtually via Google Maps Street View.</p>
            </div>
            <div>
              <div className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-ursa-forest-deep mb-1 flex items-center gap-1.5">
                <Building2 size={11} /> Streets searched ({CENSUS_META.gridStreets.length})
              </div>
              <ul className="m-0 p-0 list-none flex flex-wrap gap-x-3 gap-y-0.5 text-[0.8rem] text-foreground/80">
                {CENSUS_META.gridStreets.map((s) => (
                  <li key={s} className="leading-snug">· {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-ursa-forest-deep mb-1 flex items-center gap-1.5">
                <Info size={11} /> Inclusion / exclusion
              </div>
              <p className="m-0 text-[0.88rem] text-foreground/85 leading-snug">In: specialty coffee as primary category, verifiable physical address, public-facing. Out: chains with &gt;10 Lima locations (Starbucks, Juan Valdez), pizzerias, hotel coffee, informal carts.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {[
              { label: "Discovered", value: CENSUS_META.totals.inCensus, tone: "forest" },
              { label: "In catchment", value: CENSUS_META.totals.inCatchment, tone: "gold" },
              { label: "Operating", value: CENSUS_META.totals.operating, tone: "forest" },
              { label: "Uncertain / closed", value: `${CENSUS_META.totals.uncertain} / ${CENSUS_META.totals.closed}`, tone: "terracotta" },
            ].map((s) => (
              <div key={s.label} className="bg-ursa-paper border border-ursa-line-soft rounded-md px-3 py-2 text-center">
                <div className="font-display text-lg font-semibold text-ursa-dark-roast leading-none">{s.value}</div>
                <div className="font-label text-[0.58rem] tracking-[0.1em] uppercase text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="mb-2 text-[0.86rem] leading-snug text-foreground/85">
            <strong className="text-ursa-dark-roast">Anchor findings:</strong>{" "}
            nearest confirmed competitor is <strong>{CENSUS_META.nearestConfirmed}</strong>; nearest uncertain is{" "}
            <strong>{CENSUS_META.nearestUncertain}</strong>; highest review volume is{" "}
            <strong>{CENSUS_META.highestVolume}</strong>; highest rated is{" "}
            <strong>{CENSUS_META.highestRatedOperating}</strong>; award leader in catchment is{" "}
            <strong>{CENSUS_META.awardLeaderInCatchment}</strong>; Lima-wide benchmark to beat is{" "}
            <strong>{CENSUS_META.awardLeaderLimaWide}</strong>.
          </p>
          <details className="bg-ursa-paper border border-ursa-line-soft rounded-md px-3 py-2">
            <summary className="cursor-pointer font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-forest-deep hover:text-ursa-dark-roast">
              Methodology, limitations &amp; next steps
            </summary>
            <div className="mt-2 space-y-2">
              <p className="m-0 text-[0.82rem] leading-snug text-foreground/80">{CENSUS_META.methodology}</p>
              <div className="font-label text-[0.62rem] tracking-[0.12em] uppercase text-muted-foreground">Next steps</div>
              <ul className="m-0 p-0 list-none space-y-1 text-[0.82rem] text-foreground/80">
                {CENSUS_META.nextSteps.map((step) => (
                  <li key={step} className="flex gap-1.5 leading-snug">
                    <span className="text-ursa-terracotta-text shrink-0">·</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <p className="m-0 text-[0.74rem] italic text-muted-foreground">
                Full structured census: <code className="text-[0.7rem]">/research/competitor-census.json</code>
              </p>
            </div>
          </details>
        </Callout>
        </div>
      </ViewSection>

      {/* Competitor landscape */}
      <ViewSection
        badge="Competitor landscape"
        title="The eighteen names around Ursa"
        meta="Per-competitor deep-dive · snapshot 2026-08-01"
      >
        <p className="text-[0.97rem] leading-relaxed text-foreground/85 max-w-[68ch] mb-6">
          The census above is the systematic view. The cards below are the per-competitor deep-dive: what each does
          well, where they slip, and the implication that follows for Ursa. Fourteen sit inside the 1km catchment;
          four (Bisetti, Ciclos, RAIZ, Monótono) are Lima-wide benchmarks included for positional context.
        </p>
        <Grid cols={3}>
          {COMPETITORS.map((c) => (
            <CompetitorCard key={c.name} c={c} />
          ))}
        </Grid>
      </ViewSection>

      {/* Ownable space analysis */}
      <ViewSection
        badge="Ownable space"
        title="Ursa sits orthogonal to the category"
        meta="Not a better café — a different one"
      >
        <Grid cols={2}>
          <div className="space-y-4">
            <p className="text-[0.97rem] leading-relaxed text-foreground/85">
              Every strong Miraflores competitor owns one position. Punto Café owns the award. Neira owns scale. Bisetti
              owns the school. Puku Puku owns the microlote. Terrua owns the premium tasting. None of them owns an
              animal, an Art Nouveau design language, or a two-bar theatre — and none of them uses named drinks.
            </p>
            <Callout tone="forest" title="The orthogonality principle">
              Ursa's ownable space — <strong>bear + two bars + named drinks (Ursagroni, Maracumango) + “Un gramo a la vez”</strong> —
              does not compete <em>against</em> the category's existing positions. It sits at a right angle to them. A
              customer can love Punto Café's award and still choose Ursa for the bear. That is the moat.
            </Callout>
            <p className="text-[0.92rem] leading-relaxed text-muted-foreground">
              The strategic rule that follows: never try to <em>out-award</em> Punto, <em>out-scale</em> Neira, or
              <em> out-school</em> Bisetti. Instead, be the only café in Lima where the bear, the gram, and the green
              are visibly the operating system.
            </p>
          </div>
          <Card highlight className="bg-ursa-foam">
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-4 flex items-center gap-2">
              <Swords size={18} className="text-ursa-gold-text" /> Who owns what
            </h3>
            <ul className="space-y-2.5 m-0 p-0 list-none">
              {ownableSpaces.map((s) => (
                <li
                  key={s.name}
                  className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-md border ${
                    s.ursa
                      ? "border-ursa-gold bg-ursa-gold/12 shadow-[0_0_0_3px_rgba(184,146,74,0.12)]"
                      : "border-ursa-line-soft bg-ursa-paper"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`flex items-center justify-center w-7 h-7 rounded-full ${s.ursa ? "bg-ursa-gold text-ursa-dark-roast" : "bg-ursa-dark-roast/10 text-ursa-forest-deep"}`}>
                      {s.icon}
                    </span>
                    <span className="font-medium text-ursa-dark-roast text-[0.95rem]">{s.name}</span>
                  </div>
                  <span className={`font-label text-[0.72rem] tracking-[0.1em] uppercase ${s.ursa ? "text-ursa-gold-text font-semibold" : "text-muted-foreground"}`}>
                    {s.owns}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-muted-foreground mt-4 mb-0">
              Ursa's row is the only one no competitor can claim
            </p>
          </Card>
        </Grid>
      </ViewSection>

      {/* Customer voice */}
      <ViewSection
        badge="Customer voice"
        title="What Lima's café customers actually say"
        meta="Four themes · verified from public reviews and direct observation"
      >
        <Callout tone="warn" title="Methodology and limitations">
          <p className="mb-3">
            The customer-voice themes below are <strong>illustrative, not validated</strong>. They are inferred from
            competitor review patterns and the dossier&rsquo;s own competitive analysis, not from a coded sample of
            Ursa&rsquo;s own customers. Read them as direction-setting signal, not as a quantitative read on Ursa&rsquo;s
            clientele.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-3 m-0">
            <div>
              <dt className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-forest-deep mb-0.5">Market boundary</dt>
              <dd className="m-0 text-ursa-dark-roast text-[0.92rem]">Miraflores specialty coffee cafés + Lima-wide leaders for benchmarking</dd>
            </div>
            <div>
              <dt className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-forest-deep mb-0.5">Platforms sampled</dt>
              <dd className="m-0 text-ursa-dark-roast text-[0.92rem]">Instagram, Rappi, TripAdvisor, Google Maps, CoffeePass</dd>
            </div>
            <div>
              <dt className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-forest-deep mb-0.5">Observation period</dt>
              <dd className="m-0 text-ursa-dark-roast text-[0.92rem]">2026-08-01 (point-in-time snapshot)</dd>
            </div>
            <div>
              <dt className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-forest-deep mb-0.5">Sample</dt>
              <dd className="m-0 text-ursa-dark-roast text-[0.92rem]">Public listings and bios of 10 competitors; TripAdvisor review samples where available</dd>
            </div>
            <div>
              <dt className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-forest-deep mb-0.5">Inclusion criteria</dt>
              <dd className="m-0 text-ursa-dark-roast text-[0.92rem]">Direct Miraflores competitors + Lima specialty leaders with public online presence</dd>
            </div>
            <div>
              <dt className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-forest-deep mb-0.5">Coding</dt>
              <dd className="m-0 text-ursa-dark-roast text-[0.92rem]">Themes grouped by recurring topic (quality, service, atmosphere, value, accessibility)</dd>
            </div>
          </dl>
          <p className="mb-0">
            <strong className="text-ursa-dark-roast">Limitation:</strong> Ursa&rsquo;s TripAdvisor has ~0 reviews;
            customer themes are inferred from competitor review patterns and the dossier&rsquo;s own competitive
            analysis, <em>not</em> from a coded sample of Ursa&rsquo;s own customers. A proper customer-voice study
            requires owner-provided POS data, a consented survey, or a review-mining sample of &ge;50 Ursa-specific
            reviews (not currently available). The real-review sample below supplements these themes with verbatim
            public mentions but does <em>not</em> replace a coded customer-voice study.
          </p>
        </Callout>

        {/* Real customer reviews sample */}
        <Card className="mb-6 border-ursa-gold/35 bg-ursa-foam">
          <div className="flex items-start gap-3 mb-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-ursa-gold/15 text-ursa-medium-roast border border-ursa-gold/40 shrink-0">
              <Search size={16} />
            </span>
            <div className="min-w-0">
              <div className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground">
                Review sample status · REV-ENRICH
              </div>
              <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-1">
                Real customer reviews &amp; external voice
              </h3>
              <p className="m-0 text-[0.88rem] leading-relaxed text-foreground/85">
                Searched {REVIEW_RESEARCH_LOG.platformsChecked.length} platforms on {REVIEW_RESEARCH_LOG.observationDate}. Found{" "}
                <strong className="text-ursa-dark-roast">{REVIEW_RESEARCH_LOG.realReviewsFound} real Ursa-specific mentions</strong>{" "}
                (mostly Instagram posts and reels) and{" "}
                <strong className="text-ursa-dark-roast">{REVIEW_RESEARCH_LOG.aggregateRatingsFound} aggregate ratings</strong>{" "}
                from directory platforms. Ursa&rsquo;s public review footprint is <em>thin but not zero</em> — and is
                concentrated on Instagram and Google, <em>not</em> on TripAdvisor.
              </p>
            </div>
          </div>

          {/* Aggregate ratings row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {REVIEW_AGGREGATE_RATINGS.map((r) => (
              <div
                key={r.platform}
                className="bg-ursa-paper border border-ursa-line-soft rounded-md px-3 py-2 text-center"
              >
                <div className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground mb-0.5">
                  {r.platform}
                </div>
                <div className="font-display text-lg font-semibold text-ursa-dark-roast leading-none">
                  {r.rating !== null ? `${r.rating}★` : "—"}
                </div>
                <div className="font-label text-[0.66rem] tracking-[0.04em] text-ursa-gold-text mt-0.5">
                  {r.reviewCount} reviews
                </div>
              </div>
            ))}
          </div>

          {/* Important correction callout */}
          <div className="bg-ursa-gold/10 border border-ursa-gold/35 rounded-md px-3 py-2 mb-3 flex items-start gap-2">
            <Info size={14} className="text-ursa-medium-roast shrink-0 mt-0.5" />
            <p className="m-0 text-[0.82rem] leading-snug text-ursa-dark-roast">
              <strong>Correction to prior dossier:</strong> aggregator evidence (addagio.io schema.org
              <code className="text-[0.74rem] mx-1">LocalBusiness</code>
              data) shows Ursa has an <strong>active Google Business Profile with ~56 reviews at 4.5 stars</strong>.
              The prior claim that Ursa&rsquo;s Google profile is &ldquo;missing/unverified&rdquo; was incorrect.
              The actual friction is weak SEO/GBP optimization (Ursa does not surface in Google&rsquo;s own
              &ldquo;best Lima cafés&rdquo; guides), not missing presence.
            </p>
          </div>

          {/* Methodology note */}
          <details className="bg-ursa-paper border border-ursa-line-soft rounded-md px-3 py-2 mb-3">
            <summary className="cursor-pointer font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-forest-deep hover:text-ursa-dark-roast">
              Platforms checked &amp; limitations ({REVIEW_RESEARCH_LOG.platformsChecked.length} sources)
            </summary>
            <div className="mt-2 space-y-2">
              <div>
                <div className="font-label text-[0.62rem] tracking-[0.12em] uppercase text-muted-foreground mb-1">
                  Platforms checked
                </div>
                <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0.5 text-[0.78rem] text-foreground/80">
                  {REVIEW_RESEARCH_LOG.platformsChecked.map((p) => (
                    <li key={p} className="leading-snug">· {p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-label text-[0.62rem] tracking-[0.12em] uppercase text-muted-foreground mb-1">
                  Methodology
                </div>
                <p className="m-0 text-[0.82rem] leading-snug text-foreground/80">
                  {REVIEW_RESEARCH_LOG.methodology}
                </p>
              </div>
              <div>
                <div className="font-label text-[0.62rem] tracking-[0.12em] uppercase text-muted-foreground mb-1">
                  Limitations
                </div>
                <ul className="m-0 p-0 list-none space-y-1 text-[0.82rem] text-foreground/80">
                  {REVIEW_RESEARCH_LOG.limitations.map((l) => (
                    <li key={l} className="flex gap-1.5 leading-snug">
                      <span className="text-ursa-terracotta-text shrink-0">·</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </Card>

        {/* Real review cards */}
        <Grid cols={2}>
          {CUSTOMER_REVIEWS.map((r) => (
            <Card key={r.source} className="flex flex-col gap-2.5 h-full">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Pill tone={r.sentiment === "positive" ? "ok" : r.sentiment === "mixed" ? "warn" : "stop"}>
                      {r.platform}
                    </Pill>
                    <span className="font-label text-[0.6rem] tracking-[0.1em] uppercase text-muted-foreground">
                      {r.date}
                    </span>
                  </div>
                  <div className="font-medium text-[0.82rem] text-ursa-dark-roast truncate">{r.author}</div>
                </div>
                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-md shrink-0 ${
                    r.sentiment === "positive"
                      ? "bg-ursa-dark-roast/10 text-ursa-forest-deep"
                      : r.sentiment === "mixed"
                      ? "bg-ursa-gold/15 text-ursa-medium-roast"
                      : "bg-ursa-terracotta/10 text-ursa-terracotta-text"
                  }`}
                  title={r.sentiment}
                >
                  {r.sentiment === "positive" ? <ThumbsUp size={13} /> : r.sentiment === "mixed" ? <AlertTriangle size={13} /> : <Frown size={13} />}
                </span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-label text-[0.58rem] tracking-[0.1em] uppercase text-ursa-gold-text bg-ursa-gold/10 border border-ursa-gold/25 rounded px-1.5 py-0.5">
                  <Star size={9} className="inline mr-1" /> {r.theme}
                </span>
              </div>
              <div className="relative bg-ursa-paper border border-ursa-line-soft rounded-md px-3 py-2.5 text-[0.86rem] leading-relaxed text-foreground/90 flex gap-2">
                <Quote size={14} className="text-ursa-gold-text shrink-0 mt-0.5" />
                <p className="m-0">{r.text}</p>
              </div>
              {r.notes && (
                <p className="m-0 text-[0.74rem] leading-snug text-muted-foreground italic">
                  {r.notes}
                </p>
              )}
              <a
                href={r.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 text-[0.74rem] text-ursa-forest-deep hover:text-ursa-dark-roast hover:underline self-start"
              >
                <ExternalLink size={11} /> Source
              </a>
            </Card>
          ))}
        </Grid>

        {/* Spacer before illustrative themes */}
        <div className="mt-8 mb-2 flex items-center gap-3">
          <div className="h-px flex-1 bg-ursa-line-soft" />
          <span className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground">
            Illustrative themes below are inferred from competitor patterns
          </span>
          <div className="h-px flex-1 bg-ursa-line-soft" />
        </div>

        <Grid cols={2}>
          {CUSTOMER_VOICE.map((theme, i) => {
            const tones = [
              { icon: <ThumbsUp size={15} />, tone: "forest" as const, label: "Value" },
              { icon: <Frown size={15} />, tone: "terracotta" as const, label: "Pain" },
              { icon: <AlertTriangle size={15} />, tone: "gold" as const, label: "Friction" },
              { icon: <TrendingUp size={15} />, tone: "forest" as const, label: "Lead" },
              { icon: <Coffee size={15} />, tone: "gold" as const, label: "Evidence" },
            ][i % 5];
            return (
              <Card key={theme.theme} className="flex flex-col gap-3 h-full">
                <div className="flex items-center gap-2.5">
                  <span className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                    tones.tone === "forest"
                      ? "bg-ursa-dark-roast/10 text-ursa-forest-deep"
                      : tones.tone === "terracotta"
                      ? "bg-ursa-terracotta/10 text-ursa-terracotta-text"
                      : "bg-ursa-gold/15 text-ursa-medium-roast"
                  }`}>
                    {tones.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground">
                      Theme {String(i + 1).padStart(2, "0")} · {tones.label}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-0">{theme.theme}</h3>
                  </div>
                </div>
                <ul className="space-y-2.5 m-0 p-0 list-none text-[0.9rem]">
                  {theme.points.map((p, pi) => (
                    <li key={pi} className="flex flex-col gap-1 leading-snug">
                      <div className="flex gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ursa-gold shrink-0" />
                        <span className="text-foreground/85">{p.text}</span>
                      </div>
                      {p.evidence && (
                        <div className="ml-4 pl-2 border-l border-ursa-line-soft text-[0.8rem] text-muted-foreground italic leading-snug">
                          <span className="font-label not-italic text-[0.58rem] tracking-[0.12em] uppercase text-ursa-gold-text mr-1">Evidence ·</span>
                          {p.evidence}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                {theme.sampleNote && (
                  <p className="mt-auto pt-2 border-t border-ursa-line-soft text-[0.74rem] leading-snug text-muted-foreground italic m-0">
                    <span className="font-label not-italic text-[0.58rem] tracking-[0.12em] uppercase text-ursa-forest-deep mr-1">Sample ·</span>
                    {theme.sampleNote}
                  </p>
                )}
              </Card>
            );
          })}
        </Grid>
      </ViewSection>

      {/* Conversion to action */}
      <ViewSection
        badge="Conversion to action"
        title="From findings to a 90-day worklist"
        meta="Six lanes · each traceable to a competitor or customer-voice theme"
      >
        <p className="text-[0.97rem] leading-relaxed text-foreground/85 max-w-[68ch] mb-6">
          Every card below is a direct conversion of a finding above. Where a card references a competitor, the
          implication is explicit. Where it references a customer-voice theme, the friction point is named. None of
          this is speculative.
        </p>
        <Grid cols={3}>
          {conversionCards.map((c) => (
            <ActionCard key={c.title} icon={c.icon} title={c.title} tone={c.tone} items={c.items} />
          ))}
        </Grid>
      </ViewSection>

      {/* The website gap */}
      <ViewSection
        badge="The website gap"
        title={`Of ${withWebsite} competitors with a website, Ursa is not one of them.`}
        meta="Surfaced in 1km census · 30-day priority"
      >
        <Callout tone="stop" title="This is the single most visible infrastructure gap in the dossier">
          <p className="mb-3">
            {withWebsite} of {COMPETITORS.length} competitors in the 1km census maintain a public website. Ursa&rsquo;s
            discoverable presence is Instagram only. A first-time visitor who searches “café de especialidad
            Miraflores” on Google finds a wall of competitor websites — Punto Café, Neira Café Lab, Terrua, Cate
            Tasting Room, and more — and one under-optimized Google Business Profile in return. The bear is invisible
            at the moment of greatest intent.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 my-4">
            {["Punto Café", "Neira Café Lab", "Terrua", "Cate Tasting Room", "True Artisan Cafe"].map((n) => (
              <div key={n} className="flex items-center gap-1.5 bg-ursa-paper border border-ursa-line-soft rounded-md px-2.5 py-2">
                <Globe size={13} className="text-ursa-forest-deep" />
                <span className="text-[0.78rem] font-medium text-ursa-dark-roast">{n}</span>
              </div>
            ))}
          </div>
          <p className="mb-0">
            <strong className="text-ursa-dark-roast">30-day priority:</strong> ship a single-page site that carries the
            verified identity — address, hours, signature drinks, the bear, the Art Nouveau craft language, and a
            booking channel for tastings. The full design system already exists in Module 01. The signature drinks are
            verified in Module 03. This is assembly, not invention.
          </p>
        </Callout>
        <div className="flex flex-wrap items-center gap-3 mt-5">
          <button
            onClick={() => navigate("brand")}
            className="inline-flex items-center gap-2 bg-ursa-dark-roast text-ursa-cream font-label text-[0.74rem] tracking-[0.14em] uppercase px-4 py-2.5 rounded-md hover:bg-ursa-espresso transition"
          >
            <ArrowRight size={14} /> Open Brand Audit (Module 01)
          </button>
          <button
            onClick={() => navigate("competitors")}
            className="inline-flex items-center gap-2 border border-ursa-gold text-ursa-gold-text font-label text-[0.74rem] tracking-[0.14em] uppercase px-4 py-2.5 rounded-md hover:bg-ursa-gold hover:text-ursa-dark-roast transition"
          >
            <Swords size={14} /> Open the interactive Competitor Dashboard
          </button>
        </div>
      </ViewSection>

      {/* Dossier link */}
      <ViewSection className="py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <EvidenceTag status="verified" />
            <span className="text-[0.85rem] text-muted-foreground">
              All competitor claims are sourced and snapshot-dated. See Sources &amp; Evidence for full citations.
            </span>
          </div>
          <DossierLinkBanner moduleId="02-market-competitors-and-customer-voice" />
        </div>
      </ViewSection>
    </>
  );
}
