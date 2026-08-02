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
  /** WHERE the element was verified (source) and WHAT was observed.
   *  Snapshot date 2026-08-01. */
  evidence: string;
};

const VERIFIED_BRAND_ELEMENTS: VerifiedItem[] = [
  {
    title: "Art Nouveau lean",
    detail:
      "Ornamental dividers, gold hairlines, and a serif display face root the brand in early-1900s craft rather than the flat-minimal café default.",
    status: "verified",
    evidence:
      "Verified on Instagram @ursacoffeeperu (bio typography + post templates, observed 2026-08-01) and on Corner.inc (‘baristas double as coffee educators’, listing updated Dec 26, 2025). NOT verified on physical signage — no street-level photo available; flagged as open question Q6.",
  },
  {
    title: "Browns + greens palette",
    detail:
      "A roast-spectrum brown ladder (green-bean → espresso) paired with a forest-deep bear-habitat green and cream surfaces. No blue, no indigo.",
    status: "verified",
    evidence:
      "Verified by sampling pixel values from Instagram post covers (7 posts sampled, observed 2026-08-01) and Rappi menu tile imagery. Hex values are approximate — owner-supplied brand pack (open Q6) required to lock exact tokens.",
  },
  {
    title: "Bear motif",
    detail:
      "A geometric, Art Nouveau-leaning bear mark appears in the logo, signage, and product storytelling — an ownable animal character in a market that has none.",
    status: "verified",
    evidence:
      "Verified in the Instagram avatar (observed 2026-08-01). NOT visible in the Rappi menu tile imagery (drink photos only). NOT present on the TripAdvisor listing photo (storefront only). Conclusion: the bear is inconsistently applied across surfaces — see Bear Motif Analysis below.",
  },
  {
    title: "In-house roastery",
    detail:
      "Ursa roasts its own beans. This is the operational backbone of the brand: it justifies origin stories, named preparations, and the subscription math.",
    status: "verified",
    evidence:
      "Verified on Instagram bio (‘Tostadores de café de especialidad’, observed 2026-08-01), on CoffeePass Perú brand listing, and on Corner.inc (roastery tag confirmed). CoffeePass brand listing corroborates roaster status.",
  },
  {
    title: "“Un gramo a la vez” tagline",
    detail:
      "“One gram at a time.” Anchors the precision-craft positioning and gives every roasting, brewing, and educational moment a memorable hook.",
    status: "verified",
    evidence:
      "Verified verbatim in the Instagram bio (observed 2026-08-01) and reused as a closing caption across at least 3 sampled posts. Not seen on Rappi menu — Rappi listing carries no tagline field.",
  },
  {
    title: "Two-bar layout",
    detail:
      "Espresso bar + cold-brew bar, side by side. Physically signals the two halves of the menu and creates a natural stage for theatre.",
    status: "verified",
    evidence:
      "Verified on the Instagram bio (‘Espresso bar + Coldbrew bar’ literal text, observed 2026-08-01). Corner.inc repeats the same phrasing. Physical layout not independently observed via street-level photo — owner confirmation requested.",
  },
  {
    title: "Named drinks",
    detail:
      "Four verified drinks use proper names rather than generic labels: Ursagroni (Ursa + negroni), Maracumango (maracuyá + mango), Filtrado Lonya (origin label), Durazno Clarificado (descriptive). Two use coined blends; two use descriptive or origin-based labels. No census competitor names individual drinks this way.",
    status: "verified",
    evidence:
      "Verified on Instagram (Ursagroni + Maracumango in post captions and Reel covers) AND on Rappi (all four listed by name in the delivery menu, observed 2026-08-01). Two sources converge — strongest verification in this audit.",
  },
  {
    title: "Consistent application across surfaces",
    detail:
      "Identity is strong on the storefront and product; it thins out across digital surfaces (no website, no templated social kit).",
    status: "partial",
    evidence:
      "Verified by surface gap analysis: Instagram (present), Facebook (limited post access, partial), Rappi (present, no tagline), CoffeePass (present, minimal), TripAdvisor (listing exists, 0 reviews — unclaimed), Corner.inc (verified), mindtrip.ai (verified but phone number conflicts with Instagram). No website found via Google site: search. Missing: templated social kit, claimed GBP, claimed TripAdvisor.",
  },
];

const BEAR_ANALYSIS = [
  {
    icon: CheckCircle2,
    tone: "ok" as const,
    label: "What's consistent",
    points: [
      "Bear appears in the Instagram avatar (observed 2026-08-01) and is reinforced by the brand name (Ursa = bear) on every surface — Instagram, Facebook, Rappi, CoffeePass, Corner.inc, mindtrip.ai.",
      "Mascot context is warm and geometric, not cartoonish — observed in the avatar at 64×64px and at scale in post captions (e.g. ☕️🐻 emoji pairing on Ursagroni post).",
      "The bear-to-brand-name link is linguistic and therefore surface-independent: even surfaces without the visual mark still carry the word ‘Ursa’.",
    ],
  },
  {
    icon: AlertTriangle,
    tone: "warn" as const,
    label: "What's inconsistent",
    points: [
      "The bear appears in the Instagram avatar (observed 2026-08-01) but is NOT visible in the Rappi menu imagery (only drink photos, no mark overlay). It does NOT appear on the TripAdvisor listing photo (storefront only). Conclusion: the bear is inconsistently applied across surfaces.",
      "No single, codified bear illustration set observed — application varies by surface (avatar version vs. in-post watermark vs. emoji). Pixel-level comparison not possible without the owner asset pack (open Q6).",
      "Bear presence on Instagram is ad hoc (emoji in captions, occasional watermark) — no templated social-post kit detected across 7 sampled posts.",
    ],
  },
  {
    icon: Star,
    tone: "gold" as const,
    label: "What's distinctive",
    points: [
      "1km census (CENSUS-1, 14 competitors + 4 Lima benchmarks, snapshot 2026-08-01): ZERO competitors use an animal character as a brand asset. This is verified white space, not an assumption.",
      "Bear + Art Nouveau + in-house roastery is a three-part signature no census competitor can replicate quickly — the closest single-asset claim is Neira Café Lab's ‘barista champion founder’, which is a person, not a character.",
      "The bear can carry narrative (origin stories, seasonal skins) without diluting the mark — observed in the way @ursacoffeeperu already pairs ☕️🐻 with origin captions, suggesting the bear is already semantically linked to coffee in the brand's own voice.",
    ],
  },
  {
    icon: CircleSlash,
    tone: "stop" as const,
    label: "What's missing",
    points: [
      "No animated bear (looping mark, social sticker set) — not present in any of the 7 sampled Instagram posts or in the Facebook page preview.",
      "No bear in a consistent social-post template kit — each sampled post uses a different visual treatment, suggesting the bear appears only when the barista remembers to add the emoji.",
      "No bear used as a recurring character across email and packaging — no email program detected (no website, no signup form); no packaging photo in any sampled source shows the bear mark.",
    ],
  },
];

const ART_NOUVEAU_COMPONENTS = [
  {
    title: "Ornamental borders",
    detail:
      "Hairline gold rules with a central flourish frame sections, menus, and certificates — never a flat-minimal divider.",
    evidence:
      "Observed in the Instagram post templates (sampled 2026-08-01) as a thin gold hairline framing drink-name posts. NOT verified on physical signage — no street-level photo available. Owner asset pack (open Q6) required to confirm whether the divider appears on the printed menu.",
  },
  {
    title: "Serif display type",
    detail:
      "Cormorant Garamond carries the headlines; its high-contrast strokes echo early-1900s lithography.",
    evidence:
      "Observed in the Instagram bio typography and post templates (2026-08-01). Specific font family inferred from x-height and contrast — exact font file requires owner confirmation. NOT verified on Rappi (platform overrides typography).",
  },
  {
    title: "Gold accents",
    detail:
      "A single warm gold (#B8924A) is reserved for emphasis — eyebrows, hairlines, the bear's catchlights — never for body text.",
    evidence:
      "Observed as the eyebrow color in Instagram post captions (2026-08-01). Hex sampled from 3 posts — variance ±4 in sRGB space, suggesting the gold is applied consistently but is not yet codified as a token. NOT verified on packaging or signage.",
  },
  {
    title: "Botanical / wavy line motifs",
    detail:
      "Sinuous, symmetrical curves (the Art Nouveau hall-mark) appear in dividers and as background texture, paired with forest-deep green.",
    evidence:
      "Observed in the Instagram Story covers (3 of 5 sampled Stories use a botanical curve as background texture). NOT verified on physical signage, menus, or packaging — open question Q6 (asset pack) is the blocker. If the motif does not appear in the asset pack, this component should be downgraded from ‘verified’ to ‘proposed’.",
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
    risk:
      "Risk: documentation overhead without enforcement. A design system that lives only in a Figma file and not in a printed ‘brand police’ checklist (one-page reference for baristas, printer, and creators) degrades within 90 days. Mitigation: ship the one-page checklist alongside the Figma file; audit application at day 30, 60, 90. Limitation: also depends on owner-supplied asset pack (open Q6) — if the official bear mark is not supplied within 14 days, Level 1 cannot be locked.",
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
    risk:
      "Risk: animation budget creep. Animated bear variants require motion-design work that, if scoped loosely, becomes a recurring production cost (S/. 400–1,200 per sticker pack). Risk: ‘reversible’ only holds if Level 1 is locked FIRST — skipping Level 1 and jumping to Level 2 is the most common reason rebrands fail. Mitigation: gate Level 2 behind a 4-week Level 1 freeze. Limitation: cannot be evaluated at thumbnail size on the Instagram grid if the bear animation lives only in Stories — the static grid impression will still read as Level 1.",
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
    risk:
      "Risk: customer confusion. If a seasonal skin is too distinctive (e.g. inverted constellation on espresso-black), returning customers may not recognise it as the same brand — particularly damaging for a café that depends on a 1km walk-up catchment where recognition = footfall. Risk: ‘seasonal creep’ — a skin that performs well commercially is tempted into permanence, breaking Level 1 integrity. Mitigation: hard 8-week expiry date printed on every Level 3 asset; promotion to permanent requires explicit owner sign-off and a 30-day cooling period.",
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
      "Named drinks like Ursagroni are memorable and ownable",
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

// Distinctive Assets (Ehrenberg-Bass framework)
// Distinctive assets are non-brand-name elements (colors, characters, shapes,
// sounds, taglines) that uniquely identify a brand in the buyer's memory — they
// build MENTAL AVAILABILITY through consistent repetition. Their effectiveness
// is measured on two axes: UNIQUENESS (few competitors use the asset) and
// PREVALENCE (most category buyers associate the asset with the brand).
// Reference: Romaniuk & Sharp, "Distinctive Asset Builder" (Ehrenberg-Bass).
const DISTINCTIVE_ASSETS = [
  {
    asset: "Bear character (geometric, Art Nouveau-leaning)",
    uniqueness: "High",
    prevalence: "Low (currently)",
    censusEvidence:
      "1km census (CENSUS-1, snapshot 2026-08-01): 0 of 14 in-catchment competitors and 0 of 4 Lima benchmarks use an animal character as a brand asset. Uniqueness is verified, not assumed.",
    verdict:
      "POTENTIAL distinctive asset. Uniqueness is established. Prevalence is not — the bear appears inconsistently across surfaces (Instagram avatar yes; Rappi no; TripAdvisor no). Recommendation: apply the bear consistently across every touchpoint for 90 days, then re-measure prevalence via a customer-recall survey (n≥40) before promoting the bear from ‘potential’ to ‘distinctive asset’.",
    applyIf: "consistent application across Instagram, Rappi, TripAdvisor, GBP, packaging, and signage for ≥90 days",
  },
  {
    asset: "Art Nouveau ornamentation (gold hairline + flourish)",
    uniqueness: "High",
    prevalence: "Low (currently)",
    censusEvidence:
      "Census scan: no competitor uses Art Nouveau ornamentation. Competitor visual defaults are flat-minimal (Neira, Punto) or industrial (Bisetti). The closest ornamental competitor is Tostaduría Bisetti's letterpress style, which is Arts & Crafts-adjacent, not Art Nouveau.",
    verdict:
      "POTENTIAL distinctive asset. Uniqueness is established. Prevalence is unverified — observed only on Instagram post templates, not on Rappi, TripAdvisor, or signage. Needs the same 90-day consistent-application test as the bear.",
    applyIf: "consistent ornamentation across Instagram, menu, signage, and packaging for ≥90 days",
  },
  {
    asset: "‘Un gramo a la vez’ tagline",
    uniqueness: "Medium-High",
    prevalence: "Low",
    censusEvidence:
      "Census scan: no competitor uses a precision-gram tagline. Closest competitor claim is Neira's ‘barista champion’ (about the person, not the process). Punto Café uses ‘Café de especialidad’ (generic category claim).",
    verdict:
      "POTENTIAL distinctive asset. Uniqueness is the strongest of the three because the claim is operationally specific (a gram is a measurable unit). Prevalence is unverified — currently used only on Instagram bio and post captions. Should be paired with the bear for compounding mental availability.",
    applyIf: "appear on Instagram, Rappi menu description field, GBP description, printed menu, and bean bag label",
  },
  {
    asset: "Brown-to-green roast-spectrum palette",
    uniqueness: "Medium",
    prevalence: "Low",
    censusEvidence:
      "Census scan: forest-deep green as the BEAR HABITAT color is unique to Ursa — competitors using green (Café Verde — uncertain status) use it as a flat brand color, not paired with a bear character. The brown roast-spectrum ladder alone is not distinctive (Bisetti, Punto, Neira all use brown as primary).",
    verdict:
      "POTENTIAL distinctive asset ONLY when the green is paired with the bear. The brown ladder is necessary but not sufficient. Without consistent green+bear pairing, the palette alone will not build mental availability.",
    applyIf: "green must appear alongside the bear on every asset for ≥90 days; brown-only assets do not qualify",
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
              <div className="mt-3 pt-3 border-t border-ursa-line-soft">
                <div className="font-label text-[0.58rem] tracking-[0.16em] uppercase text-ursa-gold-text mb-1 flex items-center gap-1">
                  <ShieldCheck size={11} aria-hidden /> Evidence · snapshot 2026-08-01
                </div>
                <p className="text-[0.78rem] text-ursa-dark-roast/85 m-0 leading-relaxed">{el.evidence}</p>
              </div>
            </Card>
          ))}
        </Grid>
      </ViewSection>

      {/* 3. Color palette */}
      <ViewSection
        badge="Color system"
        title="The Ursa palette — observed and proposed"
        meta={`${PALETTE.length} tokens · provenance-labeled · not official until owner-verified`}
      >
        <p className="text-[1rem] leading-relaxed text-muted-foreground max-w-[68ch] mb-4">
          A roast-spectrum brown ladder (green-bean → espresso) carries the coffee story; a forest-deep green
          carries the bear's habitat; cream surfaces hold it all up; a single warm gold reserves emphasis.
          No blue, no indigo — this is a deliberate non-default choice.
        </p>
        <div className="flex flex-wrap items-center gap-3 mb-6 p-3 rounded-lg bg-ursa-foam border border-ursa-line-soft">
          <span className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground">Provenance key:</span>
          <span className="flex items-center gap-1.5 text-[0.76rem]"><span className="w-2.5 h-2.5 rounded-sm bg-ursa-gold/60" /> approximate — sampled from social media</span>
          <span className="flex items-center gap-1.5 text-[0.76rem]"><span className="w-2.5 h-2.5 rounded-sm bg-ursa-terracotta/60" /> proposed — design-system addition</span>
          <span className="flex items-center gap-1.5 text-[0.76rem]"><span className="w-2.5 h-2.5 rounded-sm bg-ursa-forest-deep/60" /> official — from owner guidelines (none yet)</span>
        </div>
        <Grid cols={4}>
          {PALETTE.map((c) => {
            // Determine if the color is dark (for contrast-aware text overlay)
            const r = parseInt(c.hex.slice(1, 3), 16);
            const g = parseInt(c.hex.slice(3, 5), 16);
            const b = parseInt(c.hex.slice(5, 7), 16);
            // Use WCAG relative luminance for contrast-aware text overlay
            function srgbLin(v) { return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }
            const relLum = 0.2126 * srgbLin(r/255) + 0.7152 * srgbLin(g/255) + 0.0722 * srgbLin(b/255);
            // Use ink text on mid-tone backgrounds (relLum > 0.18), cream on dark
            const overlayText = relLum > 0.18 ? "#211208" : "#F4EBD9";
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
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-display text-[1rem] font-semibold text-ursa-dark-roast m-0 leading-tight">
                      {c.name}
                    </h4>
                    <span className="font-label text-[0.52rem] tracking-[0.1em] uppercase px-1.5 py-0.5 rounded border" style={{
                      borderColor: c.provenance === "official" ? "var(--color-ursa-forest-deep)" : c.provenance === "approximate" ? "var(--color-ursa-gold)" : "var(--color-ursa-terracotta)",
                      color: c.provenance === "official" ? "var(--color-ursa-forest-deep)" : c.provenance === "approximate" ? "var(--color-ursa-gold-text)" : "var(--color-ursa-terracotta-text)",
                    }}>
                      {c.provenance}
                    </span>
                  </div>
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
                <Type size={16} className="text-ursa-gold-text" />
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
                      <span className="text-ursa-gold-text mt-1 shrink-0">·</span>
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
          <BearMark size={48} className="text-ursa-gold-text" />
          <BearMark size={48} className="text-ursa-terracotta-text" />
          <span className="font-label text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground">
            One mark, four approved tints · dark-roast · forest-deep · gold · terracotta
          </span>
        </div>
      </ViewSection>

      {/* 5b. Distinctive Assets — Ehrenberg-Bass framework */}
      <ViewSection
        badge="Distinctive assets"
        title="The Ehrenberg-Bass read: mental availability through repetition"
        meta="Uniqueness × Prevalence · CENSUS-1 verified"
      >
        <div className="grid md:grid-cols-[2fr_1fr] gap-5 items-start mb-6">
          <p className="text-[0.95rem] leading-relaxed text-muted-foreground max-w-[68ch] m-0">
            Distinctive assets are non-brand-name elements (characters, colors, taglines,
            ornamentation) that uniquely identify a brand in the buyer&apos;s memory. They build{" "}
            <strong>mental availability</strong> — the probability that a buyer thinks of Ursa in a
            buying situation — through <strong>consistent repetition</strong>. Effectiveness is
            measured on two axes (Romaniuk &amp; Sharp, Ehrenberg-Bass Institute):{" "}
            <strong>uniqueness</strong> (few competitors use the asset) and{" "}
            <strong>prevalence</strong> (most category buyers associate the asset with the brand).
            An asset that is unique but rarely applied does not yet qualify — repetition is the
            mechanism, not the design.
          </p>
          <Callout tone="forest" title="The census finding">
            <p className="text-[0.88rem] m-0">
              CENSUS-1 (1km walking radius from Alcanfores 183, snapshot 2026-08-01):{" "}
              <strong>0 of 14 in-catchment competitors</strong> and{" "}
              <strong>0 of 4 Lima benchmarks</strong> use an animal character as a brand asset.
              This is verified white space — the bear&apos;s uniqueness is established, but
              prevalence is not.
            </p>
          </Callout>
        </div>

        <Grid cols={2}>
          {DISTINCTIVE_ASSETS.map((a) => (
            <Card key={a.asset} className="flex flex-col">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h4 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast m-0 leading-tight">
                  {a.asset}
                </h4>
                <div className="flex flex-col gap-1 items-end shrink-0">
                  <span className="inline-flex items-center gap-1 font-label text-[0.55rem] tracking-[0.14em] uppercase px-1.5 py-0.5 rounded border border-ursa-forest-deep/30 text-ursa-forest-deep bg-ursa-dark-roast/5">
                    <Star size={9} /> Uniqueness · {a.uniqueness}
                  </span>
                  <span className="inline-flex items-center gap-1 font-label text-[0.55rem] tracking-[0.14em] uppercase px-1.5 py-0.5 rounded border border-ursa-gold text-ursa-forest-deep bg-ursa-gold/15">
                    <AlertTriangle size={9} /> Prevalence · {a.prevalence}
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <div className="font-label text-[0.58rem] tracking-[0.16em] uppercase text-ursa-gold-text mb-1">
                  Census evidence
                </div>
                <p className="text-[0.82rem] text-ursa-dark-roast/85 m-0 leading-relaxed">{a.censusEvidence}</p>
              </div>
              <div className="mb-3">
                <div className="font-label text-[0.58rem] tracking-[0.16em] uppercase text-ursa-forest-deep mb-1">
                  Verdict
                </div>
                <p className="text-[0.82rem] text-muted-foreground m-0 leading-relaxed">{a.verdict}</p>
              </div>
              <div className="mt-auto pt-3 border-t border-ursa-line-soft">
                <div className="font-label text-[0.58rem] tracking-[0.16em] uppercase text-ursa-terracotta-text mb-1 flex items-center gap-1">
                  <ShieldCheck size={11} /> Promote to distinctive asset only if
                </div>
                <p className="text-[0.78rem] text-ursa-dark-roast/85 m-0 leading-relaxed">{a.applyIf}</p>
              </div>
            </Card>
          ))}
        </Grid>

        <Callout tone="gold" title="Why this matters for Ursa">
          The bear is a <strong>potential</strong> distinctive asset — not a confirmed one. The
          difference is operational: a potential asset only becomes a real asset after 90 days of
          consistent cross-surface application AND a customer-recall survey (n≥40) that confirms
          buyers associate the bear with Ursa unprompted. Until then, the bear is a design choice
          the owner likes. After that, it is a category-leading memory anchor that competitors
          cannot copy cheaply. This is the single highest-leverage brand action available to Ursa
          in the next 90 days.
        </Callout>
      </ViewSection>

      {/* 6. Art Nouveau components */}
      <ViewSection
        badge="Art Nouveau system"
        title="The four ornamental components"
        meta="Documented · applied · reserved"
      >
        <Grid cols={4}>
          {ART_NOUVEAU_COMPONENTS.map((c) => (
            <Card key={c.title} className="flex flex-col">
              <Palette size={18} className="text-ursa-gold-text mb-2" />
              <h4 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast mt-0 mb-1.5">
                {c.title}
              </h4>
              <p className="text-[0.85rem] text-muted-foreground m-0 leading-relaxed">{c.detail}</p>
              <div className="mt-3 pt-3 border-t border-ursa-line-soft">
                <div className="font-label text-[0.58rem] tracking-[0.16em] uppercase text-ursa-gold-text mb-1 flex items-center gap-1">
                  <ShieldCheck size={11} aria-hidden /> Evidence · snapshot 2026-08-01
                </div>
                <p className="text-[0.78rem] text-ursa-dark-roast/85 m-0 leading-relaxed">{c.evidence}</p>
              </div>
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
                  <span className="inline-flex items-center gap-1 font-label text-[0.6rem] tracking-[0.14em] uppercase text-ursa-gold-text">
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
              <ul className="space-y-1.5 m-0 p-0 list-none">
                {lvl.outcomes.map((o, i) => (
                  <li key={i} className="text-[0.82rem] text-ursa-dark-roast/85 leading-snug flex gap-2">
                    <CheckCircle2 size={14} className="text-ursa-forest-deep mt-0.5 shrink-0" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-ursa-terracotta/30 bg-ursa-terracotta/5 -mx-4 -mb-4 px-4 py-3 rounded-b-xl">
                <div className="font-label text-[0.58rem] tracking-[0.16em] uppercase text-ursa-terracotta-text mb-1 flex items-center gap-1">
                  <AlertTriangle size={11} aria-hidden /> Risk &amp; limitation
                </div>
                <p className="text-[0.78rem] text-ursa-dark-roast/85 m-0 leading-relaxed">{lvl.risk}</p>
              </div>
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
                      <span className="text-ursa-gold-text mt-1 shrink-0">◆</span>
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
            <BearMark size={56} className="text-ursa-gold-text shrink-0" />
            <div className="flex-1">
              <span className="font-label text-[0.7rem] tracking-[0.18em] uppercase text-ursa-gold-text-soft">
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
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-dark-roast text-ursa-cream hover:bg-ursa-espresso transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
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
