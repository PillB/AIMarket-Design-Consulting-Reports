"use client";

import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import {
  BearMark,
  CupGlyph,
  ArtNouveauDivider,
  Pill,
  Callout,
  StatBlock,
  EvidenceTag,
  SectionBadge,
} from "../ursa-brand";
import { PALETTE, TYPOGRAPHY, URSA_FACTS } from "@/lib/ursa-data";
import { useNavigate } from "@/lib/ursa-nav";
import { useI18n } from "@/hooks/use-i18n";
import {
  Palette,
  Type,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Star,
  CircleSlash,
  ShieldCheck,
  Layers,
  FlaskConical,
  ArrowRight,
} from "lucide-react";

type VerifiedItem = {
  title: string;
  detail: string;
  status: "verified" | "partial" | "unverified" | "gap";
};

const VERIFIED_BRAND_ELEMENTS: VerifiedItem[] = [
  {
    title: "Art Nouveau lean",
    detail:
      "Ornamental dividers, gold hairlines, and a serif display face root the brand in early-1900s craft rather than the flat-minimal café default.",
    status: "verified",
  },
  {
    title: "Browns + greens palette",
    detail:
      "A roast-spectrum brown ladder (green-bean → espresso) paired with a forest-deep bear-habitat green and cream surfaces. No blue, no indigo.",
    status: "verified",
  },
  {
    title: "Bear motif",
    detail:
      "A geometric, Art Nouveau-leaning bear mark appears in the logo, signage, and product storytelling — an ownable animal character in a market that has none.",
    status: "verified",
  },
  {
    title: "In-house roastery",
    detail:
      "Ursa roasts its own beans. This is the operational backbone of the brand: it justifies origin stories, named preparations, and the subscription math.",
    status: "verified",
  },
  {
    title: "“Un gramo a la vez” tagline",
    detail:
      "“One gram at a time.” Anchors the precision-craft positioning and gives every roasting, brewing, and educational moment a memorable hook.",
    status: "verified",
  },
  {
    title: "Two-bar layout",
    detail:
      "Espresso bar + cold-brew bar, side by side. Physically signals the two halves of the menu and creates a natural stage for theatre.",
    status: "verified",
  },
  {
    title: "Named drinks",
    detail:
      "Ursagroni, Filtrado Lonya, Durazno Clarificado, Maracumango — portmanteaus and origin callouts that turn a menu into a story you can order.",
    status: "verified",
  },
  {
    title: "Consistent application across surfaces",
    detail:
      "Identity is strong on the storefront and product; it thins out across digital surfaces (no website, no templated social kit).",
    status: "partial",
  },
];

const BEAR_ANALYSIS = [
  {
    icon: CheckCircle2,
    tone: "ok" as const,
    label: "What's consistent",
    points: [
      "Bear appears in the primary logo mark and on signage.",
      "Bear carries the brand name (Ursa = bear) across every surface.",
      "Mascot context is warm and geometric, not cartoonish.",
    ],
  },
  {
    icon: AlertTriangle,
    tone: "warn" as const,
    label: "What's inconsistent",
    points: [
      "No single, codified bear illustration set — application varies by surface.",
      "Bear presence on Instagram is ad hoc, not templated.",
      "Bear rarely appears inside the menu or on packaging labels in a repeatable way.",
    ],
  },
  {
    icon: Star,
    tone: "gold" as const,
    label: "What's distinctive",
    points: [
      "No Lima competitor owns an animal character — this is white space.",
      "Bear + Art Nouveau + roastery is a three-part signature competitors cannot copy quickly.",
      "The bear can carry narrative (origin stories, seasonal skins) without diluting the mark.",
    ],
  },
  {
    icon: CircleSlash,
    tone: "stop" as const,
    label: "What's missing",
    points: [
      "No animated bear (looping mark, social sticker set).",
      "No bear in a consistent social-post template kit.",
      "No bear used as a recurring character across email and packaging.",
    ],
  },
];

const ART_NOUVEAU_COMPONENTS = [
  {
    title: "Ornamental borders",
    detail:
      "Hairline gold rules with a central flourish frame sections, menus, and certificates — never a flat-minimal divider.",
  },
  {
    title: "Serif display type",
    detail:
      "Cormorant Garamond carries the headlines; its high-contrast strokes echo early-1900s lithography.",
  },
  {
    title: "Gold accents",
    detail:
      "A single warm gold (#B8924A) is reserved for emphasis — eyebrows, hairlines, the bear's catchlights — never for body text.",
  },
  {
    title: "Botanical / wavy line motifs",
    detail:
      "Sinuous, symmetrical curves (the Art Nouveau hall-mark) appear in dividers and as background texture, paired with forest-deep green.",
  },
];

const EVOLUTION_LEVELS = [
  {
    level: "Level 1",
    name: "Conservative refinement",
    horizon: "Permanent system",
    recommended: true,
    summary:
      "Codify the existing bear, palette, type, and Art Nouveau motifs into a documented design system. Tighten application rules, add the missing social and packaging templates, and lock the bear mark at consistent sizes. This is the recommended permanent system.",
    outcomes: [
      "Documented color, type, and component tokens",
      "Bear-mark usage rules across every surface",
      "Reusable social, menu, and packaging templates",
    ],
  },
  {
    level: "Level 2",
    name: "Distinctive growth system",
    horizon: "6-month skin",
    recommended: false,
    summary:
      "Layer a 6-month growth skin on top of Level 1: animated bear variants, a campaign-specific type accent, and seasonal gold treatments. Everything stays reversible; the Level 1 system underneath is untouched.",
    outcomes: [
      "Animated bear (looping mark + sticker set)",
      "A single campaign accent layered on the locked palette",
      "Reversible — peel off after 6 months with no asset debt",
    ],
  },
  {
    level: "Level 3",
    name: "Experimental seasonal expression",
    horizon: "Seasonal only",
    recommended: false,
    summary:
      "Seasonal, time-boxed expressions: a holiday bear variant, a single-collab colorway, or a festival skin. Always reverted at the end of the season; never promoted to the permanent system without an explicit review.",
    outcomes: [
      "Time-boxed (≤ 8 weeks) seasonal skins",
      "Clearly labelled as limited, never as the new brand",
      "Reverted on schedule, documented for archive",
    ],
  },
];

const CONSISTENT_INCONSISTENT = [
  {
    tone: "ok" as const,
    icon: CheckCircle2,
    title: "Consistent",
    items: [
      "Bear mark + name (Ursa) across storefront and product",
      "Browns-and-greens palette with cream surfaces",
      "Cormorant Garamond display, Inter body, Oswald labels",
      "In-house roastery as operational and narrative backbone",
      "“Un gramo a la vez” tagline",
    ],
  },
  {
    tone: "warn" as const,
    icon: AlertTriangle,
    title: "Inconsistent",
    items: [
      "Bear application varies by surface — no codified illustration set",
      "Social posts are ad hoc, not templated",
      "Packaging labels rarely feature the bear consistently",
      "No website to carry the identity online",
    ],
  },
  {
    tone: "gold" as const,
    icon: Star,
    title: "Distinctive",
    items: [
      "Only Lima roaster with an ownable animal character",
      "Bear + Art Nouveau + two-bar layout is a three-part signature",
      "Named-drink portmanteaus (Ursagroni) memorably ownable",
      "“Un gramo a la vez” is a precision-craft claim competitors lack",
    ],
  },
  {
    tone: "stop" as const,
    icon: CircleSlash,
    title: "Missing",
    items: [
      "Animated bear and social sticker set",
      "Consistent social-post template kit",
      "Bear as recurring character on email and packaging",
      "Documented design-system tokens (this module fixes that)",
    ],
  },
];

export function BrandAuditView() {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <>
      {/* 1. Hero */}
      <ViewHero
        eyebrow={t("content.view.brand.eyebrow")}
        title={<>{t("content.view.brand.title")}</>}
        lede={
          <>
            This module verifies what is already consistent, distinctive, inconsistent, and missing in Ursa's
            brand — then codifies a conservative-refinement design system. No rebrand. The Art Nouveau lean,
            the browns-and-greens palette, the bear motif, the in-house roastery, and the{" "}
            <em>“Un gramo a la vez”</em> tagline are the assets the plan protects.
          </>
        }
        meta={[
          { label: "Snapshot", value: URSA_FACTS.snapshot },
          { label: "Subject", value: URSA_FACTS.address },
          { label: "Direction", value: "Conservative refinement recommended" },
        ]}
      />

      {/* 2. What we verified */}
      <ViewSection
        badge="Verified elements"
        title="What we verified at the snapshot"
        meta="From public sources · see Sources & Evidence"
      >
        <p className="text-[1rem] leading-relaxed text-muted-foreground max-w-[68ch] mb-6">
          Each element below was checked against Ursa's public-facing surfaces (storefront, Instagram, menu,
          product). Most core identity assets are verified; only the cross-surface application is partial —
          and that is the precise gap this module closes.
        </p>
        <Grid cols={4}>
          {VERIFIED_BRAND_ELEMENTS.map((el) => (
            <Card key={el.title} className="flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <BearMark size={22} className="text-ursa-dark-roast" />
                <EvidenceTag status={el.status} />
              </div>
              <h3 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast mt-0 mb-1.5 leading-tight">
                {el.title}
              </h3>
              <p className="text-[0.85rem] text-muted-foreground m-0 leading-relaxed">{el.detail}</p>
            </Card>
          ))}
        </Grid>
      </ViewSection>

      {/* 3. Color palette */}
      <ViewSection
        badge="Color system"
        title="The verified Ursa palette"
        meta={`${PALETTE.length} tokens · roast-spectrum browns + forest greens + cream + gold`}
      >
        <p className="text-[1rem] leading-relaxed text-muted-foreground max-w-[68ch] mb-6">
          A roast-spectrum brown ladder (green-bean → espresso) carries the coffee story; a forest-deep green
          carries the bear's habitat; cream surfaces hold it all up; a single warm gold reserves emphasis.
          No blue, no indigo — this is a deliberate non-default choice.
        </p>
        <Grid cols={4}>
          {PALETTE.map((c) => {
            // Determine if the color is dark (for contrast-aware text overlay)
            const r = parseInt(c.hex.slice(1, 3), 16);
            const g = parseInt(c.hex.slice(3, 5), 16);
            const b = parseInt(c.hex.slice(5, 7), 16);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            const isDark = luminance < 0.55;
            const overlayText = isDark ? "#F4EBD9" : "#211208";
            return (
              <Card key={c.name} className="overflow-hidden p-0 group cursor-default">
                <div
                  className="h-24 w-full relative flex items-end p-3 transition group-hover:h-28"
                  style={{ backgroundColor: c.hex }}
                >
                  <span
                    className="font-label text-[0.66rem] tracking-[0.12em] uppercase font-medium"
                    style={{ color: overlayText }}
                  >
                    {c.hex}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-display text-[1rem] font-semibold text-ursa-dark-roast m-0 leading-tight mb-1">
                    {c.name}
                  </h4>
                  <p className="text-[0.78rem] text-muted-foreground m-0 leading-snug">{c.role}</p>
                </div>
              </Card>
            );
          })}
        </Grid>
      </ViewSection>

      {/* 4. Typography */}
      <ViewSection
        badge="Typography"
        title="Three voices, one rhythm"
        meta="Cormorant Garamond · Inter · Oswald"
      >
        <p className="text-[1rem] leading-relaxed text-muted-foreground max-w-[68ch] mb-6">
          A serif display carries the early-1900s craft lean; a humanist sans carries the readable prose; a
          condensed uppercase carries every label, eyebrow, and tag. Three roles, no overlap.
        </p>
        <Grid cols={3}>
          {TYPOGRAPHY.map((f) => (
            <Card key={f.name} className="flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <Pill tone="forest">{f.role.split(" · ")[0]}</Pill>
                <Type size={16} className="text-ursa-gold" />
              </div>
              <p
                className={`${f.className} text-ursa-dark-roast mt-0 mb-3 leading-tight`}
                style={{ fontSize: "1.5rem", fontWeight: 600 }}
              >
                {f.sample}
              </p>
              <h4 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast mt-0 mb-1">
                {f.name}
              </h4>
              <p className="text-[0.82rem] text-muted-foreground m-0">{f.role}</p>
            </Card>
          ))}
        </Grid>

        <ArtNouveauDivider />

        {/* Type scale demonstration */}
        <div className="bg-ursa-foam border border-ursa-line-soft rounded-xl p-6">
          <h4 className="font-label text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground mb-4">
            Type scale · applied
          </h4>
          <p className="font-display text-[2.4rem] font-semibold text-ursa-dark-roast mt-0 mb-2 leading-tight">
            Un gramo a la vez.
          </p>
          <p className="font-display text-[1.6rem] font-medium text-ursa-medium-roast mt-0 mb-2 leading-tight">
            Tostadores de café de especialidad
          </p>
          <p className="font-body text-[1.05rem] text-ursa-dark-roast/85 mt-0 mb-3 leading-relaxed max-w-[60ch]">
            Specialty coffee, roasted in Miraflores. Every gram is weighed, every origin is named, and every
            cup is poured at the espresso bar or the cold-brew bar.
          </p>
          <p className="font-label text-[0.72rem] tracking-[0.18em] uppercase text-ursa-forest-deep mt-0 mb-0">
            Espresso bar · Cold-brew bar · In-house roastery
          </p>
        </div>
      </ViewSection>

      {/* 5. Bear motif analysis */}
      <ViewSection
        badge="Bear motif"
        title="The bear, examined"
        meta="Consistent · Inconsistent · Distinctive · Missing"
      >
        <Grid cols={4}>
          {BEAR_ANALYSIS.map((b) => {
            const Icon = b.icon;
            return (
              <Card key={b.label} className="flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={18} className="text-ursa-dark-roast" />
                  <Pill tone={b.tone}>{b.label}</Pill>
                </div>
                <ul className="space-y-2 m-0 p-0 list-none">
                  {b.points.map((p, i) => (
                    <li key={i} className="text-[0.85rem] text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-ursa-gold mt-1 shrink-0">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </Grid>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <BearMark size={48} className="text-ursa-dark-roast" />
          <BearMark size={48} className="text-ursa-forest-deep" />
          <BearMark size={48} className="text-ursa-gold" />
          <BearMark size={48} className="text-ursa-terracotta" />
          <span className="font-label text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground">
            One mark, four approved tints · dark-roast · forest-deep · gold · terracotta
          </span>
        </div>
      </ViewSection>

      {/* 6. Art Nouveau components */}
      <ViewSection
        badge="Art Nouveau system"
        title="The four ornamental components"
        meta="Documented · applied · reserved"
      >
        <Grid cols={4}>
          {ART_NOUVEAU_COMPONENTS.map((c) => (
            <Card key={c.title}>
              <Palette size={18} className="text-ursa-gold mb-2" />
              <h4 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast mt-0 mb-1.5">
                {c.title}
              </h4>
              <p className="text-[0.85rem] text-muted-foreground m-0 leading-relaxed">{c.detail}</p>
            </Card>
          ))}
        </Grid>

        <div className="mt-2 bg-ursa-cream border border-ursa-line-soft rounded-xl p-6">
          <h4 className="font-label text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground mb-1">
            Live · ArtNouveauDivider
          </h4>
          <p className="text-[0.85rem] text-muted-foreground mb-2">
            The hairline-gold rule with a central flourish. Used to separate major sections — never to slice
            paragraphs.
          </p>
          <ArtNouveauDivider />
          <div className="flex items-center gap-4 mt-2">
            <CupGlyph size={28} className="text-ursa-dark-roast" />
            <span className="font-display text-lg text-ursa-dark-roast italic">
              “Un gramo a la vez.”
            </span>
            <CupGlyph size={28} className="text-ursa-forest-deep" />
          </div>
        </div>
      </ViewSection>

      {/* 7. Three brand-evolution levels */}
      <ViewSection
        badge="Brand evolution"
        title="Three evolution levels — one recommendation"
        meta="Conservative refinement wins"
      >
        <p className="text-[1rem] leading-relaxed text-muted-foreground max-w-[68ch] mb-6">
          Of three plausible directions, this module recommends <strong>Level 1</strong> as the permanent
          system. Level 2 is a reversible 6-month growth skin layered on top. Level 3 is seasonal only. A
          total rebrand is explicitly off the table.
        </p>
        <Grid cols={3}>
          {EVOLUTION_LEVELS.map((lvl) => (
            <Card key={lvl.level} highlight={lvl.recommended} className="flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <Pill tone={lvl.recommended ? "gold" : "forest"}>{lvl.level}</Pill>
                {lvl.recommended && (
                  <span className="inline-flex items-center gap-1 font-label text-[0.6rem] tracking-[0.14em] uppercase text-ursa-gold">
                    <ShieldCheck size={12} /> Recommended
                  </span>
                )}
              </div>
              <h3 className="font-display text-[1.25rem] font-semibold text-ursa-dark-roast mt-0 mb-1 leading-tight">
                {lvl.name}
              </h3>
              <p className="font-label text-[0.66rem] tracking-[0.12em] uppercase text-muted-foreground mb-3">
                {lvl.horizon}
              </p>
              <p className="text-[0.88rem] text-muted-foreground m-0 leading-relaxed mb-4">{lvl.summary}</p>
              <ul className="space-y-1.5 m-0 p-0 list-none mt-auto">
                {lvl.outcomes.map((o, i) => (
                  <li key={i} className="text-[0.82rem] text-ursa-dark-roast/85 leading-snug flex gap-2">
                    <CheckCircle2 size={14} className="text-ursa-forest-deep mt-0.5 shrink-0" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </Grid>
        <Callout tone="gold" title="Why Level 1 is the permanent system">
          Ursa already does what works in 2025–26: identity over trend-hopping. The bear, the Art Nouveau
          lean, the two-bar layout, and named drinks add up to a brand competitors cannot copy quickly.
          Refinement — not replacement — protects that asset and spends the budget on distribution (Module 04)
          instead of identity churn.
        </Callout>
      </ViewSection>

      {/* 8. Consistent / Inconsistent / Distinctive / Missing summary */}
      <ViewSection
        badge="Audit summary"
        title="Consistent · Inconsistent · Distinctive · Missing"
        meta="The 2×2 every brand audit ends on"
      >
        <Grid cols={2}>
          {CONSISTENT_INCONSISTENT.map((block) => {
            const Icon = block.icon;
            return (
              <Card key={block.title}>
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={18} className="text-ursa-dark-roast" />
                  <Pill tone={block.tone}>{block.title}</Pill>
                </div>
                <ul className="space-y-2 m-0 p-0 list-none">
                  {block.items.map((it, i) => (
                    <li key={i} className="text-[0.88rem] text-ursa-dark-roast/85 leading-relaxed flex gap-2">
                      <span className="text-ursa-gold mt-1 shrink-0">◆</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </Grid>
      </ViewSection>

      {/* 9. Spirit-preservation callout */}
      <ViewSection badge="Guardrail" title="The spirit-preservation principle">
        <div
          className="relative overflow-hidden rounded-xl border border-ursa-forest-deep/30 p-6 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(45,74,54,0.96) 0%, rgba(33,18,8,0.97) 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23B8924A' stroke-width='0.5' opacity='0.4'><path d='M0 60 Q30 30 60 60 T120 60'/><path d='M0 90 Q30 60 60 90 T120 90'/></g></svg>\")",
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col md:flex-row md:items-start gap-6">
            <BearMark size={56} className="text-ursa-gold shrink-0" />
            <div className="flex-1">
              <span className="font-label text-[0.7rem] tracking-[0.18em] uppercase text-ursa-gold-soft">
                Spirit-preservation principle
              </span>
              <h3 className="font-display text-2xl md:text-[1.8rem] font-semibold text-ursa-cream mt-2 mb-3 leading-tight">
                Never choose a generic growth tactic over the bear.
              </h3>
              <p className="text-[0.97rem] text-ursa-cream/85 leading-relaxed max-w-[68ch] mb-4">
                If a recommendation forces a choice between (a) protecting Ursa's existing bear / Art Nouveau
                / roastery identity and (b) chasing a generic growth tactic, this dossier always chooses (a).
                The conservative-refinement direction is the permanent system; experimental expressions are
                kept seasonal and reversible. This is the guardrail every subsequent module inherits.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.12em] uppercase text-ursa-cream/80 border border-ursa-gold/40 rounded-full px-2.5 py-1">
                  <Layers size={12} /> Bear · Gram · Green
                </span>
                <span className="inline-flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.12em] uppercase text-ursa-cream/80 border border-ursa-gold/40 rounded-full px-2.5 py-1">
                  <ShieldCheck size={12} /> No rebrand · no generic playbook
                </span>
                <span className="inline-flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.12em] uppercase text-ursa-cream/80 border border-ursa-gold/40 rounded-full px-2.5 py-1">
                  <FlaskConical size={12} /> Experiments reversible on 14–30 day stop rules
                </span>
              </div>
            </div>
          </div>
        </div>
      </ViewSection>

      {/* 10. Dossier link + onward nav */}
      <ViewSection>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <SectionBadge>Static dossier</SectionBadge>
            <h3 className="font-display text-xl font-semibold text-ursa-dark-roast mt-3 mb-1">
              Read the printable HTML dossier
            </h3>
            <p className="text-[0.9rem] text-muted-foreground m-0 max-w-[58ch]">
              The full, print-friendly Module 01 dossier is available as browsable HTML — open it for the
              complete audit tables and printable colour sheets.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <DossierLinkBanner moduleId="01-brand-audit-and-design-system" />
            <button
              onClick={() => navigate("style-guide")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-forest-deep text-ursa-cream hover:bg-ursa-dark-roast transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
            >
              <Sparkles size={14} /> Open the interactive style guide <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <ArtNouveauDivider />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatBlock value={PALETTE.length.toString()} label="Verified palette tokens" tone="forest" />
          <StatBlock value={TYPOGRAPHY.length.toString()} label="Type voices, one rhythm" tone="gold" />
          <StatBlock value="3" label="Brand-evolution levels" tone="terracotta" />
          <StatBlock value="Level 1" label="Recommended permanent system" tone="forest" />
        </div>
      </ViewSection>
    </>
  );
}
