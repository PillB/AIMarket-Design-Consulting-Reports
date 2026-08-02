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
import { COMPETITORS, CUSTOMER_VOICE, URSA_FACTS } from "@/lib/ursa-data";
import { useNavigate } from "@/lib/ursa-nav";
import { useI18n } from "@/hooks/use-i18n";
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
} from "lucide-react";

/** One competitor card. */
function CompetitorCard({ c }: { c: (typeof COMPETITORS)[number] }) {
  return (
    <Card className="flex flex-col gap-3 h-full">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-ursa-dark-roast mt-0 mb-1">{c.name}</h3>
          <div className="flex items-center gap-1.5 text-[0.78rem] text-muted-foreground">
            <MapPin size={13} className="text-ursa-gold" />
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
          <div className="flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-terracotta mb-0.5">
            <Frown size={11} /> Weakness
          </div>
          <p className="m-0 text-foreground/85">{c.weakness}</p>
        </div>
        <div className="bg-ursa-forest-deep/5 border border-ursa-forest-deep/15 rounded-md px-3 py-2">
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
    gold: { text: "text-ursa-gold", bg: "bg-ursa-gold/10", border: "border-ursa-gold/40" },
    forest: { text: "text-ursa-forest-deep", bg: "bg-ursa-forest-deep/8", border: "border-ursa-forest-deep/25" },
    terracotta: { text: "text-ursa-terracotta", bg: "bg-ursa-terracotta/10", border: "border-ursa-terracotta/30" },
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
  const { t } = useI18n();

  const mirafloresCount = COMPETITORS.filter((c) => c.area.includes("Miraflores")).length;
  const withWebsite = COMPETITORS.filter((c) => c.hasWebsite).length;

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
        "Named-drink rotation — a new portmanteau every season keeps the menu alive",
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
        eyebrow={t("content.view.market.eyebrow")}
        title={<>{t("content.view.market.title")}</>}
        lede={
          <>
            This module reconstructs the direct competitive set around Ursa's Alcanfores 183 address, reads the
            customer-voice patterns that surface across them, and converts each finding into something Ursa can match,
            avoid, or lead on. The bear is not borrowed from the category; it is the one position left uncontested.
          </>
        }
        meta={[
          { label: "Competitors", value: `${COMPETITORS.length} analysed` },
          { label: "Scope", value: "Miraflores + Lima" },
          { label: "Snapshot", value: URSA_FACTS.snapshot },
        ]}
      />

      {/* At-a-glance stats */}
      <ViewSection className="py-8">
        <Grid cols={4}>
          <StatBlock value={`${COMPETITORS.length}`} label="Competitors analysed" tone="forest" />
          <StatBlock value={`${mirafloresCount}`} label="Miraflores-based (incl. clusters)" tone="gold" />
          <StatBlock value={`${withWebsite}/${COMPETITORS.length}`} label="Competitors with a website" tone="terracotta" />
          <StatBlock value="1" label="Ownable position — the bear" tone="forest" />
        </Grid>
      </ViewSection>

      {/* Competitor landscape */}
      <ViewSection
        badge="Competitor landscape"
        title="The ten names around Ursa"
        meta="Snapshot 2026-08-01 · verified from public sources"
      >
        <p className="text-[0.97rem] leading-relaxed text-foreground/85 max-w-[68ch] mb-6">
          Five are within Miraflores, three are Lima-wide, and two are clusters or niches that shape the broader
          category. Each card records what they do well, where they slip, and the implication that follows for Ursa.
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
              animal, an Art Nouveau design language, or a two-bar theatre — and none of them speaks in portmanteaus.
            </p>
            <Callout tone="forest" title="The orthogonality principle">
              Ursa's ownable space — <strong>bear + two bars + named-drink portmanteaus + “Un gramo a la vez”</strong> —
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
              <Swords size={18} className="text-ursa-gold" /> Who owns what
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
                    <span className={`flex items-center justify-center w-7 h-7 rounded-full ${s.ursa ? "bg-ursa-gold text-ursa-dark-roast" : "bg-ursa-forest-deep/10 text-ursa-forest-deep"}`}>
                      {s.icon}
                    </span>
                    <span className="font-medium text-ursa-dark-roast text-[0.95rem]">{s.name}</span>
                  </div>
                  <span className={`font-label text-[0.72rem] tracking-[0.1em] uppercase ${s.ursa ? "text-ursa-gold font-semibold" : "text-muted-foreground"}`}>
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
        <Grid cols={2}>
          {CUSTOMER_VOICE.map((theme, i) => {
            const tones = [
              { icon: <ThumbsUp size={15} />, tone: "forest" as const, label: "Value" },
              { icon: <Frown size={15} />, tone: "terracotta" as const, label: "Pain" },
              { icon: <AlertTriangle size={15} />, tone: "gold" as const, label: "Friction" },
              { icon: <TrendingUp size={15} />, tone: "forest" as const, label: "Lead" },
            ][i % 4];
            return (
              <Card key={theme.theme} className="flex flex-col gap-3 h-full">
                <div className="flex items-center gap-2.5">
                  <span className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                    tones.tone === "forest"
                      ? "bg-ursa-forest-deep/10 text-ursa-forest-deep"
                      : tones.tone === "terracotta"
                      ? "bg-ursa-terracotta/10 text-ursa-terracotta"
                      : "bg-ursa-gold/15 text-ursa-medium-roast"
                  }`}>
                    {tones.icon}
                  </span>
                  <div>
                    <div className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground">
                      Theme {String(i + 1).padStart(2, "0")} · {tones.label}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-0">{theme.theme}</h3>
                  </div>
                </div>
                <ul className="space-y-2 m-0 p-0 list-none text-[0.9rem]">
                  {theme.points.map((p) => (
                    <li key={p} className="flex gap-2.5 leading-snug">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ursa-gold shrink-0" />
                      <span className="text-foreground/85">{p}</span>
                    </li>
                  ))}
                </ul>
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
        title="All five main Miraflores competitors have a website. Ursa does not."
        meta="Surfaced in deep-dive research · 30-day priority"
      >
        <Callout tone="stop" title="This is the single most visible infrastructure gap in the dossier">
          <p className="mb-3">
            Punto Café, Neira Café Lab, Terrua, True Artisan, and Café Verde all maintain a public website. Ursa's
            discoverable presence is Instagram only. A first-time visitor who searches “café de especialidad
            Miraflores” on Google finds five competitors and one unverified Business Profile in return. The bear is
            invisible at the moment of greatest intent.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 my-4">
            {["Punto Café", "Neira Café Lab", "Terrua", "True Artisan", "Café Verde"].map((n) => (
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
            className="inline-flex items-center gap-2 bg-ursa-forest-deep text-ursa-cream font-label text-[0.74rem] tracking-[0.14em] uppercase px-4 py-2.5 rounded-md hover:bg-ursa-dark-roast transition"
          >
            <ArrowRight size={14} /> Open Brand Audit (Module 01)
          </button>
          <button
            onClick={() => navigate("competitors")}
            className="inline-flex items-center gap-2 border border-ursa-gold text-ursa-gold font-label text-[0.74rem] tracking-[0.14em] uppercase px-4 py-2.5 rounded-md hover:bg-ursa-gold hover:text-ursa-dark-roast transition"
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
