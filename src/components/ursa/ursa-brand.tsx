"use client";

import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/use-i18n";

/**
 * Geometric bear glyph — OUTLINE ONLY (no fill), built from pentagons
 * and hexagons. Art Nouveau–adjacent. NOT a copy of the official logo.
 *
 * The bear is rendered as stroked outlines with no fill color, so it
 * works on any background without contrast issues. The stroke color
 * is passed via `currentColor` (inherits from the parent's text color).
 *
 * Construction (viewBox 0 0 40 40):
 *  - Two pentagonal ears (5-sided) with smaller pentagonal inner-ear outlines
 *  - An octagonal faceted face (8-sided outline)
 *  - Two hexagonal eyes (6-sided outlines)
 *  - A hexagonal muzzle (6-sided outline)
 *  - A pentagonal nose (5-sided) and a pentagonal mouth (5-sided)
 */
export function BearMark({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  const SW = 1.8; // stroke width
  const stroke = "currentColor";

  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      role="img"
      aria-label="Ursa bear mark"
      className={className}
      fill="none"
    >
      {/* Ears — pentagonal (7-pointed for wider shape), outline only */}
      <polygon points="8,2 12,3 13,9 11,12 4,12 3,9 5,3" fill="none" stroke={stroke} strokeWidth={SW} strokeLinejoin="round" />
      <polygon points="32,2 35,3 37,9 36,12 29,12 27,9 28,3" fill="none" stroke={stroke} strokeWidth={SW} strokeLinejoin="round" />
      {/* Inner ear outlines — smaller pentagons */}
      <polygon points="8,5 10,6 10,10 8,11 6,10 6,6" fill="none" stroke={stroke} strokeWidth={SW * 0.6} strokeLinejoin="round" />
      <polygon points="32,5 34,6 34,10 32,11 30,10 30,6" fill="none" stroke={stroke} strokeWidth={SW * 0.6} strokeLinejoin="round" />

      {/* Faceted face — octagonal outline */}
      <polygon
        points="11,11 29,11 34,16 33,24 28,31 20,34 12,31 7,24 6,16"
        fill="none" stroke={stroke} strokeWidth={SW} strokeLinejoin="round"
      />

      {/* Eyes — hexagonal outlines */}
      <polygon points="14,16 17,17 17.5,19 16,20.5 13.5,20 13,18" fill="none" stroke={stroke} strokeWidth={SW * 0.7} strokeLinejoin="round" />
      <polygon points="26,16 27,18 26.5,20 24,20.5 22.5,19 23,17" fill="none" stroke={stroke} strokeWidth={SW * 0.7} strokeLinejoin="round" />

      {/* Muzzle — hexagonal outline */}
      <polygon points="20,20 26,25 25,31 20,33 15,31 14,25" fill="none" stroke={stroke} strokeWidth={SW * 0.8} strokeLinejoin="round" />

      {/* Nose — pentagonal outline */}
      <polygon points="20,22 22.5,24 21,26 19,26 17.5,24" fill="none" stroke={stroke} strokeWidth={SW * 0.7} strokeLinejoin="round" />

      {/* Mouth — pentagonal outline */}
      <polygon points="20,27 22.5,28.5 21.5,30.5 18.5,30.5 17.5,28.5" fill="none" stroke={stroke} strokeWidth={SW * 0.7} strokeLinejoin="round" />
    </svg>
  );
}

/** Art Nouveau ornamental divider with a central flourish. */
export function ArtNouveauDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 text-ursa-gold-text my-8", className)} aria-hidden="true">
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-ursa-line to-transparent" />
      <svg width="48" height="16" viewBox="0 0 48 16" fill="none">
        <path d="M24 2 C20 6, 20 10, 24 14 C28 10, 28 6, 24 2 Z" fill="currentColor" opacity="0.7" />
        <path d="M4 8 Q12 4 20 8" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M28 8 Q36 12 44 8" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <circle cx="24" cy="8" r="1.6" fill="currentColor" />
      </svg>
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-ursa-line to-transparent" />
    </div>
  );
}

/** Coffee cup with steam — decorative accent, faceted to match the geometric bear. */
export function CupGlyph({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <polygon points="6,11 22,11 21,17 20,25 12,26 8,25 7,17" fill="currentColor" />
      <polyline points="22,12 25,12 27,14 27,18 25,20 22,20" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M11 3 L11 5 L9.5 7 L9.5 9" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" strokeLinecap="round" style={{ animation: "ursa-steam 2.5s ease-out infinite" }} />
      <path d="M15 2 L15 4 L13.5 6 L13.5 8" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" strokeLinecap="round" style={{ animation: "ursa-steam 2.5s ease-out 0.6s infinite" }} />
    </svg>
  );
}

export function SectionBadge({ children, tone = "gold" }: { children: React.ReactNode; tone?: "gold" | "forest" | "terracotta" }) {
  const tones = {
    gold: "border-ursa-gold text-ursa-gold-text bg-ursa-paper",
    forest: "border-ursa-forest-deep text-ursa-forest-deep bg-ursa-paper",
    terracotta: "border-ursa-terracotta text-ursa-terracotta-text bg-ursa-paper",
  };
  return (
    <span className={cn("inline-flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border", tones[tone])}>
      {children}
    </span>
  );
}

export function EvidenceTag({ status }: { status: "verified" | "partial" | "unverified" | "gap" }) {
  const { t } = useI18n();
  const map = {
    verified: { label: t("common.verified"), cls: "bg-ursa-forest-deep/10 text-ursa-forest-deep border-ursa-forest-deep/30" },
    partial: { label: t("common.partial"), cls: "bg-ursa-gold/20 text-ursa-medium-roast border-ursa-gold" },
    unverified: { label: t("common.unverified"), cls: "bg-ursa-terracotta/15 text-ursa-terracotta border-ursa-terracotta/40" },
    gap: { label: t("common.gap"), cls: "bg-muted text-muted-foreground border-border" },
  };
  const m = map[status];
  return (
    <span className={cn("inline-block font-label text-[0.6rem] tracking-[0.14em] uppercase px-1.5 py-0.5 rounded border", m.cls)}>
      {m.label}
    </span>
  );
}

export function Pill({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "ok" | "warn" | "stop" | "forest" | "gold";
  className?: string;
}) {
  const tones = {
    default: "bg-muted text-ursa-forest-deep border-ursa-line-soft",
    ok: "bg-ursa-dark-roast/10 text-ursa-forest-deep border-ursa-forest-deep/30",
    warn: "bg-ursa-gold/15 text-ursa-forest-deep border-ursa-gold",
    stop: "bg-ursa-terracotta/10 text-ursa-terracotta-text border-ursa-terracotta/30",
    forest: "bg-ursa-dark-roast/8 text-ursa-forest-deep border-ursa-forest-deep/25",
    gold: "bg-ursa-gold text-ursa-dark-roast border-ursa-gold",
  };
  return (
    <span className={cn("inline-flex items-center gap-1.5 font-label text-[0.66rem] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border", tones[tone], className)}>
      {children}
    </span>
  );
}

/** Callout block with colored left border. */
export function Callout({
  children,
  tone = "gold",
  title,
}: {
  children: React.ReactNode;
  tone?: "gold" | "ok" | "warn" | "stop" | "forest";
  title?: string;
}) {
  const tones = {
    gold: "border-ursa-gold",
    ok: "border-ursa-forest-deep",
    warn: "border-ursa-gold",
    stop: "border-ursa-terracotta",
    forest: "border-ursa-forest-deep",
  };
  return (
    <div className={cn("border-l-4 bg-muted/60 px-5 py-4 rounded-r-lg my-5 overflow-hidden break-words", tones[tone])}>
      {title && <h4 className="font-display text-base font-semibold text-ursa-forest-deep mt-0 mb-1.5">{title}</h4>}
      <div className="text-[0.95rem] leading-relaxed break-words overflow-wrap-anywhere">{children}</div>
    </div>
  );
}

/** Stat block — big number + label. */
export function StatBlock({ value, label, tone = "forest" }: { value: string; label: string; tone?: "forest" | "gold" | "terracotta" }) {
  const tones = {
    forest: "text-ursa-forest-deep",
    gold: "text-ursa-gold-text",
    terracotta: "text-ursa-terracotta-text",
  };
  return (
    <div className="flex flex-col gap-1">
      <span className={cn("font-display text-3xl md:text-4xl font-semibold leading-none", tones[tone])}>{value}</span>
      <span className="font-label text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground max-w-[32ch]">{label}</span>
    </div>
  );
}

/** Progress bar. */
export function ProgressBar({ value, tone = "gold" }: { value: number; tone?: "gold" | "forest" | "terracotta" }) {
  const tones = {
    gold: "from-ursa-gold to-ursa-dark-roast",
    forest: "from-ursa-medium-roast to-ursa-dark-roast",
    terracotta: "from-ursa-terracotta to-ursa-gold",
  };
  return (
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div className={cn("h-full bg-gradient-to-r rounded-full transition-all duration-500", tones[tone])} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}
