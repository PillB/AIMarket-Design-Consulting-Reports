"use client";

import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/use-i18n";

/** Original geometric bear glyph — Art Nouveau-leaning, NOT a copy of the official logo. */
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
      <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="13.5" cy="13" r="3.2" fill="currentColor" />
      <circle cx="26.5" cy="13" r="3.2" fill="currentColor" />
      <circle cx="13.5" cy="13" r="1.3" fill="var(--color-ursa-cream, #F4EBD9)" />
      <circle cx="26.5" cy="13" r="1.3" fill="var(--color-ursa-cream, #F4EBD9)" />
      <circle cx="20" cy="22" r="9.5" fill="currentColor" />
      <ellipse cx="20" cy="25" rx="4" ry="3.2" fill="var(--color-ursa-cream, #F4EBD9)" />
      <circle cx="16.5" cy="20.5" r="1.1" fill="var(--color-ursa-cream, #F4EBD9)" />
      <circle cx="23.5" cy="20.5" r="1.1" fill="var(--color-ursa-cream, #F4EBD9)" />
      <ellipse cx="20" cy="24" rx="1.1" ry="0.9" fill="var(--color-ursa-espresso, #211208)" />
      <path
        d="M17.5 26.5 Q20 28.5 22.5 26.5"
        stroke="var(--color-ursa-espresso, #211208)"
        strokeWidth="0.9"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Art Nouveau ornamental divider with a central flourish. */
export function ArtNouveauDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 text-ursa-gold my-8", className)} aria-hidden="true">
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

/** Coffee cup with steam — decorative accent. */
export function CupGlyph({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M6 12 H22 V18 C22 22.4 18.4 26 14 26 C9.6 26 6 22.4 6 18 Z" fill="currentColor" />
      <path d="M22 13 H25 C27.2 13 29 14.8 29 17 C29 19.2 27.2 21 25 21 H22" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M11 4 C11 6 9.5 6 9.5 8" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" style={{ animation: "ursa-steam 2.5s ease-out infinite" }} />
      <path d="M15 3 C15 5 13.5 5 13.5 7" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" style={{ animation: "ursa-steam 2.5s ease-out 0.6s infinite" }} />
    </svg>
  );
}

export function SectionBadge({ children, tone = "gold" }: { children: React.ReactNode; tone?: "gold" | "forest" | "terracotta" }) {
  const tones = {
    gold: "border-ursa-gold text-ursa-gold bg-ursa-paper",
    forest: "border-ursa-forest-deep text-ursa-forest-deep bg-ursa-paper",
    terracotta: "border-ursa-terracotta text-ursa-terracotta bg-ursa-paper",
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
    default: "bg-muted text-ursa-medium-roast border-ursa-line-soft",
    ok: "bg-ursa-forest-deep/10 text-ursa-forest-deep border-ursa-forest-deep/30",
    warn: "bg-ursa-gold/15 text-ursa-medium-roast border-ursa-gold",
    stop: "bg-ursa-terracotta/10 text-ursa-terracotta border-ursa-terracotta/30",
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
    <div className={cn("border-l-4 bg-muted/60 px-5 py-4 rounded-r-lg my-5", tones[tone])}>
      {title && <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-1.5">{title}</h4>}
      <div className="text-[0.95rem] leading-relaxed">{children}</div>
    </div>
  );
}

/** Stat block — big number + label. */
export function StatBlock({ value, label, tone = "forest" }: { value: string; label: string; tone?: "forest" | "gold" | "terracotta" }) {
  const tones = {
    forest: "text-ursa-forest-deep",
    gold: "text-ursa-gold",
    terracotta: "text-ursa-terracotta",
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
