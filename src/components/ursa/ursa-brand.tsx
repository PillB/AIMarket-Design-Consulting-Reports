"use client";

import { cn } from "@/lib/utils";

/**
 * Geometric bear glyph — low-poly / faceted, built entirely from triangles,
 * polygons, and angular convex shapes. Art Nouveau-adjacent: deliberate,
 * crafted, no rounded forms. NOT a copy of the official logo.
 *
 * Construction (viewBox 0 0 40 40):
 *  - Two triangular ears (apex up) with smaller cream inner-ear facets
 *  - An octagonal faceted face (sharp cheekbone + jaw vertices)
 *  - Two cut-gem diamond eyes (cream cut-outs)
 *  - An angular rhombus muzzle (cream) set into the lower face
 *  - A triangular nose (espresso) and a chevron mouth (espresso)
 *
 * The bear silhouette fills with `currentColor`; negative-space cut-outs use
 * the cream token so the mark reads correctly on both dark headers (where the
 * cut-outs match the cream container) and light surfaces.
 */
export function BearMark({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      role="img"
      aria-label="Ursa bear mark"
      className={className}
    >
      {/* Ears — triangular, apex pointing up; base overlaps the head top */}
      <polygon points="8,3 4,12 13,12" fill="currentColor" />
      <polygon points="32,3 36,12 27,12" fill="currentColor" />
      {/* Inner ear facets — smaller cream triangles inset into each ear */}
      <polygon points="8,6 6,11 11,11" fill="var(--color-ursa-cream, #F4EBD9)" />
      <polygon points="32,6 34,11 29,11" fill="var(--color-ursa-cream, #F4EBD9)" />

      {/* Faceted hexagonal face — sharp cheekbone angles and tapered chin */}
      <polygon
        points="11,11 29,11 34,17 32,26 26,33 20,34 14,33 8,26 6,17"
        fill="currentColor"
      />

      {/* Eyes — cut-gem diamonds (cream cut-outs), symmetric about x=20 */}
      <polygon points="15,17 16.5,18.5 15,20 13.5,18.5" fill="var(--color-ursa-cream, #F4EBD9)" />
      <polygon points="25,17 26.5,18.5 25,20 23.5,18.5" fill="var(--color-ursa-cream, #F4EBD9)" />

      {/* Muzzle — angular rhombus (cream), vertically elongated */}
      <polygon points="20,21 26,27 20,33 14,27" fill="var(--color-ursa-cream, #F4EBD9)" />

      {/* Nose — downward triangle (espresso), seated at the top of the muzzle */}
      <polygon points="20,25 17.4,22.3 22.6,22.3" fill="var(--color-ursa-espresso, #211208)" />

      {/* Mouth — angular chevron (espresso), inside the muzzle */}
      <path
        d="M16.5,28 L20,30.5 L23.5,28"
        stroke="var(--color-ursa-espresso, #211208)"
        strokeWidth="0.95"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
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
      {/* Cup body — faceted trapezoid with subtle cheek facets (no curves) */}
      <polygon points="6,11 22,11 21,17 20,25 12,26 8,25 7,17" fill="currentColor" />
      {/* Handle — angular polygon outline */}
      <polyline
        points="22,12 25,12 27,14 27,18 25,20 22,20"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Steam — angular zigzag lines (no curves) */}
      <path
        d="M11 3 L11 5 L9.5 7 L9.5 9"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ animation: "ursa-steam 2.5s ease-out infinite" }}
      />
      <path
        d="M15 2 L15 4 L13.5 6 L13.5 8"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ animation: "ursa-steam 2.5s ease-out 0.6s infinite" }}
      />
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
  const map = {
    verified: { label: "Verified", cls: "bg-ursa-forest-deep/10 text-ursa-forest-deep border-ursa-forest-deep/30" },
    partial: { label: "Partial", cls: "bg-ursa-gold/20 text-ursa-medium-roast border-ursa-gold" },
    unverified: { label: "Unverified", cls: "bg-ursa-terracotta/15 text-ursa-medium-roast border-ursa-terracotta/40" },
    gap: { label: "Gap", cls: "bg-muted text-muted-foreground border-border" },
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
    default: "bg-muted text-ursa-medium-roast border-ursa-line-soft",
    ok: "bg-ursa-forest-deep/10 text-ursa-forest-deep border-ursa-forest-deep/30",
    warn: "bg-ursa-gold/15 text-ursa-medium-roast border-ursa-gold",
    stop: "bg-ursa-terracotta/10 text-ursa-medium-roast border-ursa-terracotta/30",
    forest: "bg-ursa-forest-deep/8 text-ursa-forest-deep border-ursa-forest-deep/25",
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
      {title && <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-1.5">{title}</h4>}
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
    gold: "from-ursa-gold to-ursa-forest-deep",
    forest: "from-ursa-forest to-ursa-forest-deep",
    terracotta: "from-ursa-terracotta to-ursa-gold",
  };
  return (
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div className={cn("h-full bg-gradient-to-r rounded-full transition-all duration-500", tones[tone])} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}
