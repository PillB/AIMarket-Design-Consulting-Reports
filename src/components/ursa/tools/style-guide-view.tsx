"use client";

import { useState } from "react";
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
  ProgressBar,
} from "../ursa-brand";
import { PALETTE, TYPOGRAPHY } from "@/lib/ursa-data";
import { useNavigate } from "@/lib/ursa-nav";
import {
  Copy,
  Check,
  Palette,
  Type,
  Component,
  Ruler,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  SwatchBook,
} from "lucide-react";

const RADIUS_TOKENS = [
  { token: "rounded-sm", value: "0.125rem", use: "Tight · chips, tags" },
  { token: "rounded-md", value: "0.375rem", use: "Default · inputs, buttons" },
  { token: "rounded-lg", value: "0.5rem", use: "Cards, callouts" },
  { token: "rounded-xl", value: "0.75rem", use: "Surface cards" },
  { token: "rounded-full", value: "9999px", use: "Pills, avatars" },
];

const SPACING_TOKENS = [
  { token: "gap-2", value: "0.5rem", px: 8 },
  { token: "gap-3", value: "0.75rem", px: 12 },
  { token: "gap-4", value: "1rem", px: 16 },
  { token: "gap-6", value: "1.5rem", px: 24 },
  { token: "gap-8", value: "2rem", px: 32 },
  { token: "gap-12", value: "3rem", px: 48 },
];

const DOS_DONTS = [
  {
    kind: "do" as const,
    text: "Keep the bear on cream, paper, or dark-roast surfaces — the gold catchlight reads clearly.",
  },
  {
    kind: "do" as const,
    text: "Use Cormorant Garamond for display headings and menu item names only.",
  },
  {
    kind: "do" as const,
    text: "Reserve gold (#B8924A) for emphasis — eyebrows, hairlines, the bear's catchlights.",
  },
  {
    kind: "do" as const,
    text: "Pair forest-deep green with cream for callouts and section backgrounds.",
  },
  {
    kind: "do" as const,
    text: "Use the ArtNouveauDivider only between major sections — never inside paragraphs.",
  },
  {
    kind: "do" as const,
    text: "Set Oswald labels at ≥ 0.66rem with tracking ≥ 0.12em — uppercase is required.",
  },
  {
    kind: "dont" as const,
    text: "Don't put the bear on blue or indigo — they break the browns-and-greens system.",
  },
  {
    kind: "dont" as const,
    text: "Don't use Cormorant Garamond for body text — its contrast hurts long-form readability.",
  },
  {
    kind: "dont" as const,
    text: "Don't tint the bear with colours outside the approved four (dark-roast, forest-deep, gold, terracotta).",
  },
  {
    kind: "dont" as const,
    text: "Don't use gold for large background fills — it loses its emphasis role.",
  },
  {
    kind: "dont" as const,
    text: "Don't introduce a second display face — three voices (Cormorant / Inter / Oswald) is the system.",
  },
  {
    kind: "dont" as const,
    text: "Don't use the bear as a decorative sticker without clear breathing room.",
  },
];

function CopyButton({ hex }: { hex: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard may be unavailable (e.g. insecure context). Fail quietly —
      // the swatch still shows the hex for manual copy.
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={`Copy ${hex} to clipboard`}
      className="inline-flex items-center gap-1.5 font-label text-[0.6rem] tracking-[0.1em] uppercase px-2 py-1 rounded-md border border-ursa-line-soft bg-ursa-foam text-ursa-dark-roast hover:bg-ursa-gold hover:text-ursa-dark-roast hover:border-ursa-gold transition"
    >
      {copied ? (
        <>
          <Check size={11} /> Copied!
        </>
      ) : (
        <>
          <Copy size={11} /> Copy hex
        </>
      )}
    </button>
  );
}

export function StyleGuideView() {
  const navigate = useNavigate();

  return (
    <>
      {/* 1. Hero */}
      <ViewHero
        eyebrow="Extra Tool T5 · Interactive"
        title={
          <>
            Brand Style Guide Explorer — the verified tokens, live.
          </>
        }
        lede={
          <>
            An interactive reference for Ursa's verified design system. Copy any colour token, see every
            type voice at scale, inspect each shared component in every tone, and check the bear mark across
            approved sizes and backgrounds. The living counterpart to Module 01.
          </>
        }
        meta={[
          { label: "Palette", value: `${PALETTE.length} tokens` },
          { label: "Type", value: `${TYPOGRAPHY.length} voices` },
          { label: "Mode", value: "Interactive · copy-to-clipboard" },
        ]}
      />

      {/* 2. Color tokens — interactive swatches */}
      <ViewSection
        badge="Color tokens"
        title="The verified palette · click to copy"
        meta={`${PALETTE.length} swatches · browns · greens · cream · gold`}
      >
        <p className="text-[1rem] leading-relaxed text-muted-foreground max-w-[68ch] mb-6">
          Every swatch below is an interactive token. Tap <em>Copy hex</em> to send the value to your
          clipboard — a <strong>Copied!</strong> confirmation appears for 1.5 seconds. Use these exact
          values; do not invent in-between tints.
        </p>
        <Grid cols={4}>
          {PALETTE.map((c) => (
            <Card key={c.name} className="overflow-hidden p-0">
              <div
                className="relative h-28 w-full"
                style={{ backgroundColor: c.hex }}
                aria-hidden="true"
              >
                <div className="absolute bottom-2 right-2">
                  <CopyButton hex={c.hex} />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-display text-[1rem] font-semibold text-ursa-dark-roast m-0 leading-tight">
                    {c.name}
                  </h4>
                  <span className="font-label text-[0.62rem] tracking-[0.1em] uppercase text-muted-foreground">
                    {c.hex}
                  </span>
                </div>
                <p className="text-[0.78rem] text-muted-foreground m-0 leading-snug">{c.role}</p>
              </div>
            </Card>
          ))}
        </Grid>
      </ViewSection>

      {/* 3. Typography specimens */}
      <ViewSection
        badge="Typography"
        title="Type specimens · display, body, label"
        meta="Cormorant Garamond · Inter · Oswald"
      >
        <Grid cols={3}>
          {TYPOGRAPHY.map((f) => (
            <Card key={f.name} className="flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <Pill tone="forest">{f.role.split(" · ")[0]}</Pill>
                <Type size={16} className="text-ursa-gold-text" />
              </div>
              <h4 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast mt-0 mb-3">
                {f.name}
              </h4>
              <div className="space-y-3">
                <div>
                  <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground block mb-1">
                    Display
                  </span>
                  <p className={`${f.className} text-[1.6rem] font-semibold text-ursa-dark-roast m-0 leading-tight`}>
                    {f.sample}
                  </p>
                </div>
                <div>
                  <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground block mb-1">
                    Body
                  </span>
                  <p className={`${f.className} text-[0.95rem] text-ursa-dark-roast/85 m-0 leading-relaxed`}>
                    {f.sample}
                  </p>
                </div>
                <div>
                  <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground block mb-1">
                    Label
                  </span>
                  <p className={`${f.className} text-[0.7rem] tracking-[0.16em] uppercase text-ursa-forest-deep m-0`}>
                    {f.sample}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </Grid>

        <ArtNouveauDivider />

        {/* Type scale demonstration */}
        <div className="bg-ursa-foam border border-ursa-line-soft rounded-xl p-6">
          <h4 className="font-label text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground mb-4">
            Type scale · applied
          </h4>
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground w-16 shrink-0">
                3.2rem
              </span>
              <p className="font-display text-[2rem] md:text-[2.4rem] font-semibold text-ursa-dark-roast m-0 leading-tight">
                Un gramo a la vez.
              </p>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground w-16 shrink-0">
                1.6rem
              </span>
              <p className="font-display text-[1.4rem] md:text-[1.6rem] font-medium text-ursa-medium-roast m-0 leading-tight">
                Tostadores de café de especialidad
              </p>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground w-16 shrink-0">
                1.05rem
              </span>
              <p className="font-body text-[1.05rem] text-ursa-dark-roast/85 m-0 leading-relaxed max-w-[60ch]">
                Specialty coffee, roasted in Miraflores. Every gram is weighed, every origin is named.
              </p>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground w-16 shrink-0">
                0.72rem
              </span>
              <p className="font-label text-[0.72rem] tracking-[0.18em] uppercase text-ursa-forest-deep m-0">
                Espresso bar · Cold-brew bar · In-house roastery
              </p>
            </div>
          </div>
        </div>
      </ViewSection>

      {/* 4. Component library preview */}
      <ViewSection
        badge="Component library"
        title="A living style guide · every shared component, every tone"
        meta="Pills · EvidenceTags · Callouts · Card · StatBlock · ProgressBar · BearMark · Divider · CupGlyph"
      >
        <div className="space-y-6">
          {/* Pills — all tones */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <Component size={16} className="text-ursa-gold-text" />
              <h4 className="font-display text-[1.1rem] font-semibold text-ursa-dark-roast m-0">Pill · all tones</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <Pill tone="default">Default</Pill>
              <Pill tone="ok">Ok · forest</Pill>
              <Pill tone="warn">Warn · gold</Pill>
              <Pill tone="stop">Stop · terracotta</Pill>
              <Pill tone="forest">Forest</Pill>
              <Pill tone="gold">Gold</Pill>
            </div>
            <p className="text-[0.8rem] text-muted-foreground mt-3 m-0">
              Use <code className="text-ursa-forest-deep">tone="gold"</code> for emphasis only — never for
              body labels.
            </p>
          </Card>

          {/* EvidenceTags — all statuses */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <Component size={16} className="text-ursa-gold-text" />
              <h4 className="font-display text-[1.1rem] font-semibold text-ursa-dark-roast m-0">EvidenceTag · all statuses</h4>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <EvidenceTag status="verified" />
              <EvidenceTag status="partial" />
              <EvidenceTag status="unverified" />
              <EvidenceTag status="gap" />
            </div>
            <p className="text-[0.8rem] text-muted-foreground mt-3 m-0">
              Every factual claim in the dossier carries one of these four statuses. See Sources &amp;
              Evidence for the citation trail.
            </p>
          </Card>

          {/* Callouts — all tones */}
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <Component size={16} className="text-ursa-gold-text" />
              <h4 className="font-display text-[1.1rem] font-semibold text-ursa-dark-roast m-0">Callout · all tones</h4>
            </div>
            <Callout tone="gold" title="Gold · emphasis">
              Used for strategic emphasis and recommendations — the recommended option in a choice.
            </Callout>
            <Callout tone="ok" title="Ok · verified">
              Used to confirm a verified fact or a positive outcome.
            </Callout>
            <Callout tone="warn" title="Warn · caution">
              Used for disambiguation, caveats, and reversible bets.
            </Callout>
            <Callout tone="stop" title="Stop · guardrail">
              Used for hard guardrails — things the plan explicitly does not do.
            </Callout>
            <Callout tone="forest" title="Forest · spirit">
              Used for the spirit-preservation principle and brand-identity guardrails.
            </Callout>
          </Card>

          {/* Card + StatBlock + ProgressBar */}
          <Grid cols={3}>
            <Card>
              <h4 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast mt-0 mb-2">Card · default</h4>
              <p className="text-[0.85rem] text-muted-foreground m-0">
                Surface for grouped content. Use <code className="text-ursa-forest-deep">highlight</code> for
                recommended items.
              </p>
            </Card>
            <Card highlight>
              <h4 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast mt-0 mb-2">Card · highlighted</h4>
              <p className="text-[0.85rem] text-muted-foreground m-0">
                Gold ring + shadow lift. Reserved for the single recommended option in a set.
              </p>
            </Card>
            <Card>
              <h4 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast mt-0 mb-3">ProgressBar</h4>
              <div className="space-y-2.5">
                <ProgressBar value={88} tone="gold" />
                <ProgressBar value={62} tone="forest" />
                <ProgressBar value={34} tone="terracotta" />
              </div>
            </Card>
          </Grid>

          {/* StatBlock row */}
          <Card>
            <h4 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast mt-0 mb-4">StatBlock · three tones</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StatBlock value="4,746" label="Instagram followers · verified" tone="forest" />
              <StatBlock value="S/. 20" label="Proposed subscription price" tone="gold" />
              <StatBlock value="8+" label="Hotels within walking distance" tone="terracotta" />
            </div>
          </Card>

          {/* BearMark + Divider + CupGlyph */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Component size={16} className="text-ursa-gold-text" />
              <h4 className="font-display text-[1.1rem] font-semibold text-ursa-dark-roast m-0">BearMark · ArtNouveauDivider · CupGlyph</h4>
            </div>
            <div className="flex flex-wrap items-center gap-6 mb-2">
              <div className="flex flex-col items-center gap-1">
                <BearMark size={24} className="text-ursa-dark-roast" />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">24</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <BearMark size={32} className="text-ursa-dark-roast" />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">32</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <BearMark size={48} className="text-ursa-dark-roast" />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">48</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <BearMark size={64} className="text-ursa-dark-roast" />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">64</span>
              </div>
              <div className="h-12 w-px bg-ursa-line-soft" />
              <CupGlyph size={32} className="text-ursa-forest-deep" />
              <CupGlyph size={40} className="text-ursa-gold-text" />
              <CupGlyph size={48} className="text-ursa-terracotta-text" />
            </div>
            <ArtNouveauDivider />
            <p className="text-[0.8rem] text-muted-foreground m-0 text-center">
              The ornamental divider separates major sections only.
            </p>
          </Card>
        </div>
      </ViewSection>

      {/* 5. Spacing & radius */}
      <ViewSection
        badge="Tokens"
        title="Spacing & radius"
        meta="The invisible grid that holds the brand together"
      >
        <Grid cols={2}>
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Ruler size={16} className="text-ursa-gold-text" />
              <h4 className="font-display text-[1.1rem] font-semibold text-ursa-dark-roast m-0">Radius</h4>
            </div>
            <ul className="space-y-3 m-0 p-0 list-none">
              {RADIUS_TOKENS.map((r) => (
                <li key={r.token} className="flex items-center gap-3">
                  <span
                    className={`${r.token} bg-ursa-dark-roast h-10 w-10 shrink-0 inline-block`}
                    aria-hidden="true"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <code className="text-ursa-forest-deep text-[0.82rem]">{r.token}</code>
                      <span className="font-label text-[0.6rem] tracking-[0.1em] uppercase text-muted-foreground">
                        {r.value}
                      </span>
                    </div>
                    <p className="text-[0.78rem] text-muted-foreground m-0">{r.use}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Ruler size={16} className="text-ursa-gold-text" />
              <h4 className="font-display text-[1.1rem] font-semibold text-ursa-dark-roast m-0">Spacing</h4>
            </div>
            <ul className="space-y-3 m-0 p-0 list-none">
              {SPACING_TOKENS.map((s) => (
                <li key={s.token} className="flex items-center gap-3">
                  <span
                    className="h-3 bg-ursa-gold rounded-full shrink-0"
                    style={{ width: `${Math.min(120, s.px * 2)}px` }}
                    aria-hidden="true"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <code className="text-ursa-forest-deep text-[0.82rem]">{s.token}</code>
                      <span className="font-label text-[0.6rem] tracking-[0.1em] uppercase text-muted-foreground">
                        {s.value}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </Grid>
      </ViewSection>

      {/* 6. Bear mark variants */}
      <ViewSection
        badge="BearMark"
        title="The bear, at every approved size and surface"
        meta="24 · 32 · 48 · 64 · dark-roast + forest-deep · cream + dark"
      >
        <Grid cols={2}>
          {/* On cream */}
          <Card className="bg-ursa-cream">
            <div className="flex items-center justify-between mb-4">
              <Pill tone="forest">On cream · #F4EBD9</Pill>
              <span className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
                Default surface
              </span>
            </div>
            <div className="flex flex-wrap items-end gap-6">
              <div className="flex flex-col items-center gap-1.5">
                <BearMark size={24} className="text-ursa-dark-roast" />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">24 · dark-roast</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <BearMark size={32} className="text-ursa-dark-roast" />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">32 · dark-roast</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <BearMark size={48} className="text-ursa-forest-deep" />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">48 · forest-deep</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <BearMark size={64} className="text-ursa-forest-deep" />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">64 · forest-deep</span>
              </div>
            </div>
          </Card>

          {/* On dark */}
          <Card className="bg-ursa-espresso border-ursa-espresso">
            <div className="flex items-center justify-between mb-4">
              <Pill tone="gold">On dark · #211208</Pill>
              <span className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-ursa-cream/70">
                Footer / hero overlay
              </span>
            </div>
            <div className="flex flex-wrap items-end gap-6">
              <div className="flex flex-col items-center gap-1.5">
                <BearMark size={24} className="text-ursa-gold-text" />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-ursa-cream/70">24 · gold</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <BearMark size={32} className="text-ursa-gold-text" />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-ursa-cream/70">32 · gold</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <BearMark size={48} className="text-ursa-cream" />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-ursa-cream/70">48 · cream</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <BearMark size={64} className="text-ursa-cream" />
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-ursa-cream/70">64 · cream</span>
              </div>
            </div>
          </Card>
        </Grid>

        <Callout tone="forest" title="Bear-mark tint rules">
          On cream and paper surfaces, use <strong>dark-roast</strong> at small sizes (≤ 32) and{" "}
          <strong>forest-deep</strong> at large sizes (≥ 48). On dark surfaces (espresso, forest-deep), use{" "}
          <strong>gold</strong> at small sizes and <strong>cream</strong> at large sizes. Terracotta is
          approved only as a campaign accent — never as the default bear tint.
        </Callout>
      </ViewSection>

      {/* 7. Usage do's and don'ts */}
      <ViewSection
        badge="Guardrails"
        title="Usage do's and don'ts"
        meta="The short list that keeps the brand intact"
      >
        <Grid cols={2}>
          <Card className="border-ursa-forest-deep/30">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 size={18} className="text-ursa-forest-deep" />
              <h4 className="font-display text-[1.15rem] font-semibold text-ursa-dark-roast m-0">Do</h4>
            </div>
            <ul className="space-y-2.5 m-0 p-0 list-none">
              {DOS_DONTS.filter((d) => d.kind === "do").map((d, i) => (
                <li key={i} className="text-[0.88rem] text-ursa-dark-roast/85 leading-relaxed flex gap-2">
                  <CheckCircle2 size={14} className="text-ursa-forest-deep mt-0.5 shrink-0" />
                  <span>{d.text}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="border-ursa-terracotta/30">
            <div className="flex items-center gap-2 mb-4">
              <XCircle size={18} className="text-ursa-terracotta-text" />
              <h4 className="font-display text-[1.15rem] font-semibold text-ursa-dark-roast m-0">Don't</h4>
            </div>
            <ul className="space-y-2.5 m-0 p-0 list-none">
              {DOS_DONTS.filter((d) => d.kind === "dont").map((d, i) => (
                <li key={i} className="text-[0.88rem] text-ursa-dark-roast/85 leading-relaxed flex gap-2">
                  <XCircle size={14} className="text-ursa-terracotta-text mt-0.5 shrink-0" />
                  <span>{d.text}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Grid>
      </ViewSection>

      {/* Footer / onward nav */}
      <ViewSection>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <SectionBadge>Reference</SectionBadge>
            <h3 className="font-display text-xl font-semibold text-ursa-dark-roast mt-3 mb-1">
              Cross-reference the audit module
            </h3>
            <p className="text-[0.9rem] text-muted-foreground m-0 max-w-[58ch]">
              This explorer is the interactive counterpart to Module 01. Open the audit for the full
              consistent / inconsistent / distinctive / missing analysis and the three brand-evolution
              levels.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <DossierLinkBanner moduleId="01-brand-audit-and-design-system" />
            <button
              onClick={() => navigate("brand")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-dark-roast text-ursa-cream hover:bg-ursa-espresso transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
            >
              <SwatchBook size={14} /> Open Module 01 <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <ArtNouveauDivider />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatBlock value={PALETTE.length.toString()} label="Copy-ready palette tokens" tone="forest" />
          <StatBlock value={TYPOGRAPHY.length.toString()} label="Type voices, three roles each" tone="gold" />
          <StatBlock value="4" label="BearMark approved sizes" tone="terracotta" />
          <StatBlock value="12" label="Do / don't guardrails" tone="forest" />
        </div>

        <div className="mt-6 flex items-center gap-3 text-muted-foreground">
          <Palette size={14} className="text-ursa-gold-text" />
          <Sparkles size={14} className="text-ursa-gold-text" />
          <span className="font-label text-[0.7rem] tracking-[0.14em] uppercase">
            Verified · snapshot 2026-08-01 · Ursa Coffee Roasters, Miraflores
          </span>
        </div>
      </ViewSection>
    </>
  );
}
