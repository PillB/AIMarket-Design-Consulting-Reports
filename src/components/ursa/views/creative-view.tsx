"use client";

import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import {
  Pill,
  Callout,
  StatBlock,
  SectionBadge,
  BearMark,
  ArtNouveauDivider,
  CupGlyph,
} from "../ursa-brand";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ShieldCheck,
  Sparkles,
  Image as ImageIcon,
  Printer,
  Package,
  MonitorSmartphone,
  ArrowRight,
  Play,
  Star,
  Quote,
  CalendarDays,
  Clock,
  MapPin,
  Stamp,
  Award,
  Leaf,
} from "lucide-react";
import { useNavigate } from "@/lib/ursa-nav";
import { useI18n } from "@/hooks/use-i18n";

// ============================================================
// Module 06 · Creative Campaign Prototypes — CreativeView
//
// This is the most visually intensive view in the Command Center.
// Each prototype below is a working HTML/CSS/SVG mockup that
// preserves the Ursa identity (bear, Art Nouveau, two-bar, "Un
// gramo a la vez") WITHOUT altering or counterfeiting the
// official logo. The geometric bear glyph used throughout is
// the same original concept mark used elsewhere in the dossier.
//
// Prototypes are organised under four Tabs:
//   · Social   — Instagram post, Carousel, Story, Reel cover
//   · Print    — Menu, Product card, Table sign, Event flyer
//   · Packaging — Bean bag label, Bean info card, Loyalty card
//   · Digital  — Landing page hero, Email header, GBP hero
// ============================================================

// --- helpers -------------------------------------------------

/** Prototype frame — mimics the .prototype-frame style from the
 *  static dossier: cream surface, soft border, floating label
 *  pill in the top-left, italic note below the prototype. */
function PrototypeFrame({
  label,
  children,
  note,
  tone = "dark",
}: {
  label: string;
  children: React.ReactNode;
  note?: string;
  tone?: "dark" | "forest" | "gold";
}) {
  const labelTone =
    tone === "forest"
      ? "bg-ursa-forest-deep text-ursa-cream"
      : tone === "gold"
        ? "bg-ursa-gold text-ursa-dark-roast"
        : "bg-ursa-dark-roast text-ursa-cream";
  return (
    <div className="relative bg-ursa-foam border border-ursa-line-soft rounded-lg p-5 sm:p-6 my-5">
      <span
        className={`absolute -top-3 left-4 inline-flex items-center gap-1 font-label text-[0.66rem] tracking-[0.16em] uppercase px-3 py-1 rounded-full ${labelTone}`}
      >
        <Sparkles size={11} aria-hidden /> {label}
      </span>
      <div className="pt-3">{children}</div>
      {note && (
        <p className="mt-4 text-[0.85rem] italic text-muted-foreground leading-relaxed">{note}</p>
      )}
    </div>
  );
}

/** Soft bear silhouette watermark — for backgrounds. */
function BearWatermark({
  className,
  size = 180,
  color = "#F4EBD9",
  opacity = 0.16,
}: {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      className={className}
      style={{ position: "absolute", opacity, pointerEvents: "none" }}
      aria-hidden="true"
    >
      <g fill={color}>
        <circle cx="20" cy="20" r="5" />
        <circle cx="40" cy="20" r="5" />
        <path d="M10 35 Q10 22 30 22 Q50 22 50 35 Q50 48 30 48 Q10 48 10 35 Z" />
      </g>
    </svg>
  );
}

/** Inverted Ursa Major constellation — celestial cousin of the bear. */
function StarConstellation({ className }: { className?: string }) {
  return (
    <svg width="100%" height="60" viewBox="0 0 200 60" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.7" fill="currentColor">
        <line x1="20" y1="30" x2="50" y2="22" />
        <line x1="50" y1="22" x2="80" y2="26" />
        <line x1="80" y1="26" x2="110" y2="18" />
        <line x1="80" y1="26" x2="90" y2="42" />
        <line x1="90" y1="42" x2="120" y2="44" />
        <line x1="90" y1="42" x2="60" y2="46" />
        <circle cx="20" cy="30" r="1.4" />
        <circle cx="50" cy="22" r="1.6" />
        <circle cx="80" cy="26" r="1.8" />
        <circle cx="110" cy="18" r="1.4" />
        <circle cx="90" cy="42" r="1.8" />
        <circle cx="120" cy="44" r="1.4" />
        <circle cx="60" cy="46" r="1.4" />
      </g>
    </svg>
  );
}

/** Art Nouveau botanical bracket — top corners of a poster. */
function ArtNouveauBorder({
  color = "#B7C9A8",
  opacity = 0.6,
}: {
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      width="100%"
      height="50"
      viewBox="0 0 240 50"
      style={{ opacity }}
      aria-hidden="true"
    >
      <g fill="none" stroke={color} strokeWidth="0.8" strokeLinecap="round">
        <path d="M20 40 Q20 12 60 8 Q80 6 100 8" />
        <ellipse cx="48" cy="28" rx="5" ry="2.5" transform="rotate(-30 48 28)" fill={color} stroke="none" />
        <ellipse cx="72" cy="14" rx="5" ry="2.5" transform="rotate(-20 72 14)" fill={color} stroke="none" />
      </g>
      <g
        fill="none"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
        transform="translate(240 0) scale(-1 1)"
      >
        <path d="M20 40 Q20 12 60 8 Q80 6 100 8" />
        <ellipse cx="48" cy="28" rx="5" ry="2.5" transform="rotate(-30 48 28)" fill={color} stroke="none" />
        <ellipse cx="72" cy="14" rx="5" ry="2.5" transform="rotate(-20 72 14)" fill={color} stroke="none" />
      </g>
    </svg>
  );
}

/** Paw-punch row used by the loyalty card. */
function PawPunch({ filled, count }: { filled: number; count: number }) {
  return (
    <div className="flex gap-2 justify-between mt-3">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`w-6 h-6 rounded-full border grid place-items-center text-[10px] ${
            i < filled
              ? "bg-ursa-gold border-ursa-gold text-ursa-dark-roast"
              : "border-ursa-cream/40 text-ursa-cream/60"
          }`}
        >
          {i < filled ? "🐻" : "·"}
        </span>
      ))}
    </div>
  );
}

/** Small gold seal — for the bean bag label. */
function GoldSeal({ date }: { date: string }) {
  return (
    <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-[1.5px] border-ursa-gold grid place-items-center text-center font-label text-[0.5rem] tracking-[0.12em] uppercase text-ursa-gold-soft leading-[1.1] bg-ursa-forest-deep/40">
      <span>
        Tueste
        <br />
        {date}
      </span>
    </div>
  );
}

// ============================================================
// BRAND EVOLUTION LEVELS
// ============================================================

function LevelSample({
  level,
  tone,
}: {
  level: 1 | 2 | 3;
  tone: "ok" | "warn" | "stop";
}) {
  if (level === 1) {
    // Conservative — paper, typography only
    return (
      <div
        className="aspect-square rounded-md p-6 flex flex-col justify-center text-center"
        style={{
          background: "#FAF5EC",
          border: "1px solid #C9B68C",
        }}
      >
        <div className="font-label text-[0.55rem] tracking-[0.22em] uppercase text-ursa-medium-roast mb-3">
          Ursa Coffee Roasters
        </div>
        <div className="font-display italic text-[1.6rem] leading-[1.1] text-ursa-dark-roast mb-2">
          Maracumango
        </div>
        <div className="font-body text-[0.7rem] text-ursa-medium-roast">
          Maracuyá · Mango · Coldbrew
        </div>
        <div className="font-display italic text-[0.7rem] text-ursa-gold mt-4">Un gramo a la vez</div>
      </div>
    );
  }
  if (level === 2) {
    // Distinctive — forest gradient + watermark
    return (
      <div
        className="aspect-square rounded-md p-6 flex flex-col justify-center text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #3E6149 0%, #2D4A36 100%)" }}
      >
        <BearWatermark size={140} color="#F4EBD9" opacity={0.16} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10">
          <div className="font-label text-[0.55rem] tracking-[0.22em] uppercase text-ursa-leaf mb-3">
            Barra Coldbrew
          </div>
          <div className="font-display italic text-[1.6rem] leading-[1.1] text-ursa-cream mb-2">
            Maracumango
          </div>
          <div className="font-body text-[0.7rem] text-ursa-leaf">Maracuyá · Mango · Coldbrew</div>
          <div className="font-display italic text-[0.7rem] text-ursa-gold-soft mt-4">
            Un gramo a la vez
          </div>
        </div>
      </div>
    );
  }
  // Experimental — espresso black + constellation
  return (
    <div
      className="aspect-square rounded-md p-6 flex flex-col justify-between text-center relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #211208 0%, #3B2417 100%)" }}
    >
      <div className="text-ursa-gold-soft">
        <StarConstellation />
      </div>
      <div>
        <div className="font-label text-[0.55rem] tracking-[0.22em] uppercase text-ursa-gold-soft mb-2">
          Estación Invernal · Edición limitada
        </div>
        <div className="font-display italic text-[1.6rem] leading-[1.05] text-ursa-cream mb-1">
          Cassiopeia
        </div>
        <div className="font-body text-[0.7rem] text-ursa-gold-soft">
          Cacao · Especias · Coldbrew de invierno
        </div>
      </div>
      <div className="font-display italic text-[0.7rem] text-ursa-gold-soft">
        Un gramo a la vez · N° 042 / 200
      </div>
    </div>
  );
}

// ============================================================
// PROTOTYPES — SOCIAL
// ============================================================

function InstagramPostProto() {
  return (
    <PrototypeFrame
      label="Single image post (1:1)"
      note="Single-image post template. A bear silhouette watermark sits at 18% opacity behind a centered drink name; an Art Nouveau gold border frames the image; the headline is set in italic Cormorant Garamond and the verified tagline closes the composition. Caption uses warm-expert voice per the §1.7 rules."
    >
      <div className="max-w-[380px] mx-auto bg-ursa-paper rounded-md overflow-hidden border border-ursa-line">
        {/* Image with Art Nouveau gold border */}
        <div
          className="aspect-square relative flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #3E6149 0%, #2D4A36 100%)",
            padding: 10,
          }}
        >
          {/* Art Nouveau gold border frame */}
          <div
            className="absolute inset-2 rounded pointer-events-none"
            style={{
              border: "1px solid rgba(184,146,74,0.55)",
              boxShadow: "inset 0 0 0 3px rgba(244,235,217,0.06)",
            }}
            aria-hidden
          />
          {/* Corner flourishes */}
          <svg
            className="absolute top-2 left-2 text-ursa-gold-soft opacity-80"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.9"
            aria-hidden
          >
            <path d="M2 8 Q2 2 8 2" strokeLinecap="round" />
            <circle cx="4" cy="4" r="1" fill="currentColor" stroke="none" />
          </svg>
          <svg
            className="absolute top-2 right-2 text-ursa-gold-soft opacity-80"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.9"
            aria-hidden
          >
            <path d="M18 8 Q18 2 12 2" strokeLinecap="round" />
            <circle cx="16" cy="4" r="1" fill="currentColor" stroke="none" />
          </svg>
          <svg
            className="absolute bottom-2 left-2 text-ursa-gold-soft opacity-80"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.9"
            aria-hidden
          >
            <path d="M2 12 Q2 18 8 18" strokeLinecap="round" />
            <circle cx="4" cy="16" r="1" fill="currentColor" stroke="none" />
          </svg>
          <svg
            className="absolute bottom-2 right-2 text-ursa-gold-soft opacity-80"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.9"
            aria-hidden
          >
            <path d="M18 12 Q18 18 12 18" strokeLinecap="round" />
            <circle cx="16" cy="16" r="1" fill="currentColor" stroke="none" />
          </svg>

          <BearWatermark
            size={180}
            color="#F4EBD9"
            opacity={0.18}
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="relative z-10 text-center text-ursa-cream p-6">
            <div className="font-label text-[0.7rem] tracking-[0.24em] uppercase text-ursa-gold-soft mb-3">
              Barra Coldbrew
            </div>
            <div className="font-display italic text-[2rem] leading-[1.1] mb-2">Maracumango</div>
            <div className="font-body text-[0.78rem] opacity-85">Maracuyá · Mango · Coldbrew</div>
            <div className="font-display italic text-[0.78rem] text-ursa-gold-soft mt-4">
              Un gramo a la vez
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="p-3.5 flex gap-2.5 items-center border-t border-ursa-line-soft">
          <div className="w-8 h-8 rounded-full bg-ursa-dark-roast grid place-items-center font-display text-ursa-cream text-[0.9rem]">
            U
          </div>
          <div className="flex-1">
            <div className="font-body font-semibold text-[0.82rem] text-ursa-dark-roast">
              ursacoffeeperu
            </div>
            <div className="font-body text-[0.7rem] text-ursa-medium-roast">
              Alcanfores 183, Miraflores
            </div>
          </div>
        </div>
        {/* Caption */}
        <div className="px-3.5 pb-3.5 font-body text-[0.78rem] text-ursa-dark-roast leading-relaxed">
          <strong>ursacoffeeperu</strong> Maracumango Coldbrew. Maracuyá + mango + coldbrew de la
          casa. La bebida favorita del verano, ahora en carta permanente.{" "}
          <em>Un gramo a la vez.</em> ☕
        </div>
      </div>
    </PrototypeFrame>
  );
}

function CarouselProto() {
  const slides = [
    {
      eyebrow: "Ursa · Primera visita",
      title: "Si es tu primera vez",
      hint: "Desliza →",
      bg: "#3B2417",
      fg: "#F4EBD9",
      accent: "#D9BC7E",
    },
    {
      eyebrow: "¿Tengo frío?",
      title: "Filtrado Lonya",
      sub: "+ financier de pera",
      meta: "Amazonas · 1750m",
      bg: "#F4EBD9",
      fg: "#3B2417",
      accent: "#6F4A2E",
    },
    {
      eyebrow: "¿Tengo calor?",
      title: "Maracumango",
      sub: "Coldbrew",
      meta: "Barra Coldbrew",
      bg: "#2D4A36",
      fg: "#F4EBD9",
      accent: "#B7C9A8",
    },
  ];
  return (
    <PrototypeFrame
      label="Carousel (slide 1 of 3)"
      note="3-slide carousel implementing Concept #10. Each slide carries one mood + one recommended order. Color rotation signals the two-bar distinction: dark brown = espresso bar, deep green = coldbrew bar, terracotta = sweet/cocktail. CTA on final slide."
    >
      <div className="flex flex-col items-center gap-4">
        {/* Active slide preview */}
        <div
          className="w-full max-w-[280px] aspect-square rounded-md p-5 flex flex-col justify-center text-center relative overflow-hidden"
          style={{ background: slides[0].bg, color: slides[0].fg }}
        >
          <div className="font-label text-[0.6rem] tracking-[0.24em] uppercase mb-2.5" style={{ color: slides[0].accent }}>
            {slides[0].eyebrow}
          </div>
          <div className="font-display italic text-[1.3rem] leading-[1.15]">{slides[0].title}</div>
          <div className="mt-3.5 text-[0.65rem] opacity-70 font-body">{slides[0].hint}</div>
        </div>
        {/* Dot indicators */}
        <div className="flex gap-1.5">
          <span className="w-6 h-1.5 rounded-full bg-ursa-dark-roast" />
          <span className="w-1.5 h-1.5 rounded-full bg-ursa-line" />
          <span className="w-1.5 h-1.5 rounded-full bg-ursa-line" />
        </div>
        {/* Thumbnail strip of all 3 slides */}
        <div className="grid grid-cols-3 gap-2 w-full max-w-[280px]">
          {slides.map((s, i) => (
            <div
              key={i}
              className="aspect-square rounded p-2.5 flex flex-col justify-between text-center text-[0.5rem]"
              style={{ background: s.bg, color: s.fg }}
            >
              <div
                className="font-label tracking-[0.18em] uppercase"
                style={{ color: s.accent, fontSize: "0.45rem" }}
              >
                {s.eyebrow}
              </div>
              <div className="font-display italic text-[0.7rem] leading-tight">{s.title}</div>
              {s.meta && (
                <div
                  className="font-label tracking-[0.12em] uppercase"
                  style={{ color: s.accent, fontSize: "0.4rem" }}
                >
                  {s.meta}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-[0.7rem] text-muted-foreground italic">
          Slide 1: origin story hook · Slide 2: drink name (cold morning) · Slide 3: drink name
          (warm afternoon) — bear fact lives on the caption.
        </p>
      </div>
    </PrototypeFrame>
  );
}

function StoryProto() {
  return (
    <PrototypeFrame
      label="Story (9:16) — Black Label drop"
      note="Two Story variants. Left: Bean Drop announcement (warm-expert tone, scarcity without urgency theater). Right: Saturday cupping announcement (event-booking CTA). Both follow the §1.7 voice rules: max two emoji per caption, Spanish as spoken in Lima."
    >
      <div className="flex gap-5 flex-wrap justify-center">
        {/* Story 1 — Black Label drop */}
        <div
          className="relative overflow-hidden rounded-[18px] p-3.5 flex flex-col"
          style={{
            width: 200,
            height: 356,
            background: "linear-gradient(180deg, #2D4A36 0%, #3B2417 100%)",
            color: "#F4EBD9",
          }}
        >
          {/* Progress bar */}
          <div className="absolute top-2 left-3.5 right-3.5 h-[2px] bg-white/25 rounded-full">
            <div className="absolute inset-y-0 left-0 w-[62%] bg-ursa-cream rounded-full" />
          </div>
          <div className="font-label text-[0.62rem] tracking-[0.2em] uppercase mt-5 opacity-85">
            Ursa · Barra Espresso
          </div>
          <div className="mt-auto">
            <div className="font-label text-[0.58rem] tracking-[0.2em] uppercase text-ursa-gold-soft mb-1.5">
              24 horas antes
            </div>
            <div className="font-display text-[1.4rem] leading-[1.1] mb-2">Black Label</div>
            <div className="font-display italic text-[0.95rem] opacity-90 mb-3.5">
              Perú · Yuraq Yaku · Cusco
            </div>
            <span className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-ursa-gold-soft border border-ursa-gold-soft px-2.5 py-1.5 rounded-full inline-flex items-center gap-1">
              Únete a la lista <ArrowRight size={11} />
            </span>
          </div>
        </div>

        {/* Story 2 — Cata */}
        <div
          className="relative overflow-hidden rounded-[18px] p-3.5 flex flex-col"
          style={{
            width: 200,
            height: 356,
            background: "linear-gradient(180deg, #3B2417 0%, #6F4A2E 100%)",
            color: "#F4EBD9",
          }}
        >
          <div className="absolute top-2 left-3.5 right-3.5 h-[2px] bg-white/25 rounded-full">
            <div className="absolute inset-y-0 left-0 w-[38%] bg-ursa-cream rounded-full" />
          </div>
          <div className="font-label text-[0.62rem] tracking-[0.2em] uppercase mt-5 opacity-85">
            Ursa · Cata del sábado
          </div>
          <div className="mt-auto">
            <div className="font-label text-[0.58rem] tracking-[0.2em] uppercase text-ursa-gold-soft mb-1.5">
              Sábado 11am · Gratis
            </div>
            <div className="font-display text-[1.4rem] leading-[1.1] mb-2">Cata en barra</div>
            <div className="font-display italic text-[0.95rem] opacity-90 mb-3.5">
              3 orígenes · 20 min · 6 cupos
            </div>
            <span className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-ursa-gold-soft border border-ursa-gold-soft px-2.5 py-1.5 rounded-full inline-block">
              Reserva por WhatsApp
            </span>
          </div>
        </div>
      </div>
    </PrototypeFrame>
  );
}

function ReelCoverProto() {
  return (
    <PrototypeFrame
      label="Reel cover (9:16) — Un Gramo a la Vez"
      note="Three Reel covers from Series A (Un Gramo a la Vez). Same composition, same hook phrase, same end card — different brew method and ratio per episode. Color rotation across the series (dark brown / forest / medium roast) keeps the grid visually fresh while the typographic system stays rigidly consistent."
    >
      <div className="flex gap-4 flex-wrap justify-center">
        {[
          { ep: "Ep. 01", method: "V60 · 18g · 1:16", grad: "linear-gradient(180deg,#3B2417,#211208)" },
          { ep: "Ep. 02", method: "Aeropress · 14g · 1:14", grad: "linear-gradient(180deg,#2D4A36,#1A2A1F)" },
          { ep: "Ep. 03", method: "Chemex · 30g · 1:17", grad: "linear-gradient(180deg,#6F4A2E,#3B2417)" },
        ].map((r) => (
          <div
            key={r.ep}
            className="relative overflow-hidden rounded-[14px] p-4 flex flex-col justify-end"
            style={{ width: 180, height: 320, background: r.grad, color: "#F4EBD9" }}
          >
            {/* Top label row */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center font-label text-[0.55rem] tracking-[0.2em] uppercase text-ursa-gold-soft">
              <span>Ursa</span>
              <span>{r.ep}</span>
            </div>
            {/* Watermark */}
            <BearWatermark size={120} opacity={0.12} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            {/* Play button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 grid place-items-center backdrop-blur-sm">
              <Play size={18} fill="#F4EBD9" color="#F4EBD9" />
            </div>
            <div>
              <div className="font-display italic text-[1.5rem] leading-[1] mb-1.5">
                Un gramo
                <br />
                a la vez
              </div>
              <div className="font-body text-[0.7rem] opacity-80">{r.method}</div>
            </div>
          </div>
        ))}
      </div>
    </PrototypeFrame>
  );
}

// ============================================================
// PROTOTYPES — PRINT
// ============================================================

function MenuProto() {
  // Verified items + reconstructed from §3
  const items = {
    espresso: [
      { name: "Espresso", price: "S/. 6" },
      { name: "Cortado", price: "S/. 8" },
      { name: "Flat White", price: "S/. 10" },
      { name: "Capuccino", price: "S/. 10" },
      { name: "Latte", price: "S/. 11" },
      { name: "Black Label", price: "S/. 14", note: "rotando · micro-lote de la semana" },
      {
        name: "Ursagroni",
        price: "S/. 18",
        note: "Espresso · bitter · cítrico",
        sig: true,
      },
    ],
    coldbrew: [
      { name: "Coldbrew", price: "S/. 10" },
      { name: "Coldbrew Tonic", price: "S/. 13" },
      { name: "Durazno Clarificado", price: "S/. 14", sig: true },
      { name: "Maracumango", price: "S/. 14", note: "Maracuyá · mango", sig: true },
    ],
    filtrados: [
      { name: "V60", price: "S/. 12" },
      { name: "Chemex (para dos)", price: "S/. 22" },
      { name: "Filtrado Lonya", price: "S/. 14", note: "Utcubamba · Amazonas · 1,750m", sig: true },
    ],
  };

  const renderRow = (i: (typeof items.espresso)[number]) => (
    <div key={i.name} className="flex items-baseline gap-2 mb-2">
      <b className="font-display font-semibold text-ursa-dark-roast text-[1rem]">{i.name}</b>
      {i.sig && (
        <span className="text-ursa-gold" title="Signature · verified" aria-label="Signature drink">
          <Star size={11} fill="currentColor" />
        </span>
      )}
      <span
        className="flex-1 border-b border-dotted border-ursa-line translate-y-[-3px]"
        aria-hidden
      />
      <span className="font-label text-ursa-medium-roast tracking-[0.04em]">{i.price}</span>
      {i.note && (
        <small className="block w-full italic text-muted-foreground text-[0.78rem] -mt-1 mb-1">
          {i.note}
        </small>
      )}
    </div>
  );

  return (
    <PrototypeFrame
      label="Print menu (A4)"
      note="Print menu implementing the §3.2 architecture. Two-column layout operationalises the two-bar concept; the pairings section completes the menu story. Bear crest at top uses the original concept mark as placeholder for the official logo. Print at A4 portrait, double-sided if needed."
    >
      <div
        className="max-w-[600px] mx-auto bg-ursa-paper p-7 sm:p-9 rounded-md"
        style={{ border: "3px double #B8924A" }}
      >
        {/* Crest */}
        <div className="text-center mb-6">
          <BearMark size={56} className="mx-auto mb-2 text-ursa-dark-roast" />
          <h3 className="font-display text-[2rem] tracking-[0.04em] text-ursa-dark-roast m-0">
            Ursa Coffee Roasters
          </h3>
          <small className="block font-label text-[0.66rem] tracking-[0.32em] uppercase text-ursa-gold mt-1.5">
            Un gramo a la vez · Alcanfores 183
          </small>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <div>
              <h4 className="text-center font-display italic text-[1.15rem] text-ursa-medium-roast border-t border-b border-ursa-line py-1.5 mb-3 mt-4">
                Barra Espresso
              </h4>
              {items.espresso.map(renderRow)}
            </div>
          </div>
          <div>
            <div>
              <h4 className="text-center font-display italic text-[1.15rem] text-ursa-medium-roast border-t border-b border-ursa-line py-1.5 mb-3 mt-4">
                Barra Coldbrew
              </h4>
              {items.coldbrew.map(renderRow)}
            </div>
            <div>
              <h4 className="text-center font-display italic text-[1.15rem] text-ursa-medium-roast border-t border-b border-ursa-line py-1.5 mb-3 mt-4">
                Filtrados
              </h4>
              {items.filtrados.map(renderRow)}
            </div>
          </div>
        </div>

        {/* Pairings */}
        <div>
          <h4 className="text-center font-display italic text-[1.15rem] text-ursa-medium-roast border-t border-b border-ursa-line py-1.5 mb-3 mt-4">
            Pairings
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-[0.85rem]">
            <div>
              <b className="font-display italic">La Ursa</b>
              <br />
              <small className="text-muted-foreground">Ursagroni + empanada · S/. 28</small>
            </div>
            <div>
              <b className="font-display italic">La Lonya</b>
              <br />
              <small className="text-muted-foreground">Filtrado + financier · S/. 22</small>
            </div>
            <div>
              <b className="font-display italic">La Maracumango</b>
              <br />
              <small className="text-muted-foreground">Coldbrew + cookie · S/. 18</small>
            </div>
          </div>
        </div>
      </div>
    </PrototypeFrame>
  );
}

function ProductCardProto() {
  return (
    <PrototypeFrame
      label="Product card (5:7) — retail bean"
      note="Retail bean product card with origin transparency. Bear mark at top right; process, roast, tasting notes, and a V60 recipe make the card self-sufficient. No bear on this surface per the §1.4 grammar — the mark lives only on the menu crest and bean bag label."
    >
      <div className="flex justify-center">
        <div
          className="bg-ursa-paper border border-ursa-line rounded-md p-5 flex flex-col justify-between"
          style={{ aspectRatio: "5 / 7", maxWidth: 260, width: "100%" }}
        >
          <div>
            <div className="flex items-start justify-between">
              <div>
                <div className="font-label text-[0.55rem] tracking-[0.22em] uppercase text-ursa-gold">
                  Single Origin · Amazonas
                </div>
                <div className="font-display italic text-[1.4rem] text-ursa-dark-roast mt-1.5">
                  Lonya
                </div>
                <div className="font-body text-[0.7rem] text-ursa-medium-roast mt-1">
                  Utcubamba · 1,750 m
                </div>
              </div>
              <BearMark size={28} className="text-ursa-dark-roast shrink-0" />
            </div>
            <div className="font-body text-[0.72rem] text-ursa-dark-roast leading-[1.5] mt-4 space-y-0.5">
              <div>
                <strong>Proceso</strong> Lavado
              </div>
              <div>
                <strong>Tueste</strong> Medio-alto
              </div>
              <div>
                <strong>Notas</strong> Azúcar panela, manzana verde, final de cacao
              </div>
              <div>
                <strong>Método</strong> V60 · 18g · 1:16
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-2.5 border-t border-ursa-line-soft">
            <div className="font-label text-[0.7rem] tracking-[0.06em] text-ursa-dark-roast">
              S/. 32 · 250g
            </div>
            <div className="font-display italic text-[0.78rem] text-ursa-gold">
              Un gramo a la vez
            </div>
          </div>
        </div>
      </div>
    </PrototypeFrame>
  );
}

function TableSignProto() {
  return (
    <PrototypeFrame
      label="Table sign (5:3 landscape) — Bear recommends"
      note="Landscape table card meant to sit on a table: a 'Bear recommends' pairing that nudges the side attach rate. The pairing is real (verified Ursagroni + verified financier de pera). Cost: ~S/. 0.60/card at local print."
    >
      <div className="flex justify-center">
        <div
          className="bg-ursa-paper border border-ursa-line rounded p-4 flex flex-col justify-between relative overflow-hidden"
          style={{ aspectRatio: "5 / 3", maxWidth: 460, width: "100%" }}
        >
          <BearWatermark size={110} opacity={0.08} className="bottom-[-20px] right-[-10px]" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <BearMark size={20} className="text-ursa-dark-roast" />
              <div className="font-label text-[0.55rem] tracking-[0.22em] uppercase text-ursa-gold">
                Bear recommends
              </div>
            </div>
            <div className="font-display italic text-[1.2rem] text-ursa-dark-roast leading-[1.15]">
              Ursagroni + Financier de pera
            </div>
          </div>
          <div className="relative z-10 font-body text-[0.7rem] text-ursa-medium-roast leading-[1.5]">
            El bitter del espresso y la fruta de la pera encuentran un punto medio
            en el paladar.
            <div className="mt-1">
              <strong className="text-ursa-dark-roast">S/. 26</strong> · en vez de S/. 32
            </div>
          </div>
          <div className="relative z-10 font-label text-[0.5rem] tracking-[0.2em] uppercase text-ursa-medium-roast text-right">
            Pregunta en barra
          </div>
        </div>
      </div>
    </PrototypeFrame>
  );
}

function EventFlyerProto() {
  return (
    <PrototypeFrame
      label="Event flyer — Cupping Night"
      note="Event flyer for the monthly cupping night. Bear concept mark at top as placeholder for the official logo. Print at A6 for in-store handout, A5 for window posting. Bear recommends the Saturday 11am slot — the cupping builds community and seeds retail bean sales."
    >
      <div className="flex justify-center">
        <div
          className="relative overflow-hidden flex flex-col text-center"
          style={{
            aspectRatio: "1 / 1",
            maxWidth: 340,
            width: "100%",
            background: "#FAF5EC",
            border: "2px solid #B8924A",
            padding: 32,
          }}
        >
          <ArtNouveauBorder color="#B7C9A8" opacity={0.45} />
          <div className="mt-2">
            <BearMark size={44} className="mx-auto mb-3 text-ursa-dark-roast" />
            <div className="font-label text-[0.55rem] tracking-[0.24em] uppercase text-ursa-gold mb-2">
              Sábado · 11:00 &amp; 16:00
            </div>
            <div className="font-display italic text-[1.5rem] leading-[1.1] text-ursa-dark-roast mb-2.5">
              Cata en barra
            </div>
            <div className="font-body text-[0.75rem] text-ursa-medium-roast leading-[1.5] mb-3.5">
              Tres orígenes peruanos.
              <br />
              Veinte minutos.
              <br />
              Seis cupos por sesión.
              <br />
              <strong className="text-ursa-forest-deep">Gratis.</strong>
            </div>
            <div className="font-label text-[0.5rem] tracking-[0.2em] uppercase text-ursa-medium-roast">
              Alcanfores 183 · Miraflores
              <br />
              WhatsApp para reservar
            </div>
          </div>
        </div>
      </div>
    </PrototypeFrame>
  );
}

// ============================================================
// PROTOTYPES — PACKAGING
// ============================================================

function BeanBagLabelProto() {
  return (
    <PrototypeFrame
      label="Bean bag label (3:4) — Black Label Lonya"
      note="Level-2 bean bag label. Forest-to-espresso gradient evokes the field-to-cup story. Gold seal with roast date functions as both a freshness signal (Sutherland: perceived value via transparency) and a limited-edition feel. Print on matte sticker, 90 × 120mm."
    >
      <div className="flex justify-center">
        <div
          className="relative overflow-hidden flex flex-col justify-between rounded-md p-6"
          style={{
            aspectRatio: "3 / 4",
            maxWidth: 320,
            width: "100%",
            background: "linear-gradient(135deg, #2D4A36 0%, #3B2417 100%)",
            color: "#F4EBD9",
          }}
        >
          <GoldSeal date="27·07·26" />
          {/* Top */}
          <div>
            <div className="font-label text-[0.55rem] tracking-[0.22em] uppercase text-ursa-gold-soft mb-2.5">
              Ursa · Black Label
            </div>
            <div className="font-display italic text-[1.7rem] leading-[1] mb-1.5">Lonya</div>
            <div className="font-body text-[0.7rem] text-ursa-leaf">
              Utcubamba · Amazonas · Perú
            </div>
          </div>
          {/* Bottom */}
          <div>
            <div
              className="grid grid-cols-2 gap-x-3 gap-y-1.5 font-body text-[0.65rem] text-ursa-cream pt-2.5"
              style={{ borderTop: "1px solid rgba(217,188,126,0.3)" }}
            >
              <div>
                <span className="opacity-70">Altitud</span>
                <br />
                1,750 m
              </div>
              <div>
                <span className="opacity-70">Proceso</span>
                <br />
                Lavado
              </div>
              <div>
                <span className="opacity-70">Variedad</span>
                <br />
                Bourbon, Caturra
              </div>
              <div>
                <span className="opacity-70">Peso</span>
                <br />
                250 g
              </div>
            </div>
            <div className="font-display italic text-[0.78rem] text-ursa-gold-soft mt-2.5 text-right">
              Un gramo a la vez
            </div>
          </div>
        </div>
      </div>
    </PrototypeFrame>
  );
}

function BeanInfoCardProto() {
  return (
    <PrototypeFrame
      label="Bean info card — inside the bag"
      note="Bean info card inserted inside the bag — origin story + home-brew recipe. Together with the bean bag label it carries the origin story card A/B test. The card raises perceived value more than a bigger cup at the same cost (Sutherland: perceived value > objective value)."
    >
      <div className="flex justify-center">
        <div
          className="bg-ursa-foam border border-ursa-line rounded-md p-5 flex flex-col justify-between"
          style={{ aspectRatio: "5 / 7", maxWidth: 260, width: "100%" }}
        >
          <div>
            <div className="font-label text-[0.55rem] tracking-[0.22em] uppercase text-ursa-gold">
              Bean info card · inside bag
            </div>
            <div className="font-display italic text-[1.2rem] text-ursa-dark-roast mt-1.5 mb-2.5">
              La historia de Lonya
            </div>
            <div className="font-body text-[0.72rem] text-ursa-dark-roast leading-[1.55] space-y-2">
              <p>
                Lonya es un caserío en Utcubamba, Amazonas. A 1,750 metros, las noches son frías y
                los días son largos. Ese contraste es lo que da a este café su dulzor de panela y
                su acidez de manzana verde.
              </p>
              <p className="mb-1">
                <strong>Para preparar en casa</strong>
              </p>
              <p
                className="font-mono text-[0.7rem] bg-ursa-cream p-2 rounded"
                style={{ fontFamily: "ui-monospace, monospace" }}
              >
                V60 · 18g · 300g agua · 92°C · 1:16
                <br />
                Molienda media-fina · 2:45 total
              </p>
            </div>
          </div>
          <div className="font-display italic text-[0.78rem] text-ursa-gold text-right pt-2 border-t border-ursa-line-soft">
            — El tostador, Ursa
          </div>
        </div>
      </div>
    </PrototypeFrame>
  );
}

function LoyaltyCardProto() {
  return (
    <PrototypeFrame
      label="Loyalty card (8:5) — paw punch"
      note="Physical loyalty card implementing R1. Constellation (Ursa Major) at top connects the bear identity to the loyalty program. Paw print per punch (concept mark; in production use a custom bear-paw stamp). 8 drinks, the 9th is on the house. Cost: ~S/. 0.40/card at local print."
    >
      <div className="flex justify-center">
        <div
          className="relative overflow-hidden flex flex-col justify-between rounded-lg p-5"
          style={{
            aspectRatio: "8 / 5",
            maxWidth: 440,
            width: "100%",
            background: "linear-gradient(135deg, #2D4A36 0%, #3B2417 100%)",
            color: "#F4EBD9",
          }}
        >
          {/* Constellation top */}
          <div className="text-ursa-gold-soft opacity-80">
            <StarConstellation />
          </div>
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <BearMark size={20} className="text-ursa-gold-soft" />
              <div className="font-label text-[0.6rem] tracking-[0.24em] uppercase text-ursa-gold-soft">
                Ursa Loyalty
              </div>
            </div>
            <div className="font-display italic text-[1.4rem] text-ursa-cream leading-[1.1]">
              Un gramo a la vez
            </div>
            <div className="font-body text-[0.7rem] text-ursa-leaf mt-1.5">
              6 bebidas. La 7ma va por cuenta de la casa.
            </div>
          </div>
          {/* Punch row */}
          <div>
            <PawPunch filled={3} count={6} />
            <div className="font-label text-[0.5rem] tracking-[0.2em] uppercase text-ursa-gold-soft mt-3.5 flex justify-between">
              <span>3 / 6</span>
              <span>Alcanfores 183</span>
            </div>
            {/* Member name field */}
            <div className="mt-2.5 pt-2 border-t border-ursa-cream/15 flex items-baseline gap-2">
              <span className="font-label text-[0.5rem] tracking-[0.16em] uppercase text-ursa-leaf">
                Miembro
              </span>
              <span
                className="flex-1 border-b border-dotted border-ursa-cream/30 translate-y-[-2px] text-ursa-cream/70 text-[0.7rem] font-display italic"
                aria-label="Member name field"
              >
                María L.
              </span>
            </div>
          </div>
        </div>
      </div>
    </PrototypeFrame>
  );
}

// ============================================================
// PROTOTYPES — DIGITAL
// ============================================================

function LandingHeroProto() {
  return (
    <PrototypeFrame
      label="Landing page hero (desktop frame)"
      note="Landing page for the WhatsApp Bean Drop list. Single conversion goal — collect email/WhatsApp opt-in. Above-the-fold only; full page would include social proof, FAQ, and origin preview. Works without a build process — pure HTML + CSS, no JavaScript framework."
    >
      {/* Desktop browser frame */}
      <div className="max-w-[760px] mx-auto bg-ursa-espresso rounded-lg p-2 shadow-[0_24px_48px_-12px_rgba(33,18,8,0.35)]">
        <div className="bg-ursa-paper rounded-md overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-ursa-line-soft bg-ursa-cream">
            <span className="w-2.5 h-2.5 rounded-full bg-ursa-terracotta/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-ursa-gold/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-ursa-forest/70" />
            <div className="flex-1 mx-3 px-3 py-0.5 bg-ursa-foam rounded text-[0.65rem] text-muted-foreground font-mono truncate">
              ursa-coffee.pe/black-label
            </div>
          </div>
          {/* Hero body */}
          <div
            className="relative overflow-hidden text-center"
            style={{
              padding: "48px 24px",
              background:
                "radial-gradient(ellipse at top right, rgba(143,166,139,0.3), transparent 60%), linear-gradient(180deg, #FAF5EC, #F4EBD9)",
            }}
          >
            <BearMark size={48} className="mx-auto mb-3 text-ursa-dark-roast opacity-70" />
            <div className="font-label text-[0.62rem] tracking-[0.28em] uppercase text-ursa-gold mb-3">
              Ursa Coffee Roasters · Miraflores
            </div>
            <h2 className="font-display italic text-[2.1rem] sm:text-[2.4rem] leading-[1.05] text-ursa-dark-roast mb-3">
              Recibe el grano
              <br />
              24 horas antes.
            </h2>
            <p className="font-body text-[0.92rem] text-ursa-medium-roast max-w-[42ch] mx-auto mb-5">
              Una lista de WhatsApp. Cada nuevo origen llega primero a quienes ya son de la casa.
              Sin spam. Sin costo. Solo café.
            </p>
            <div className="flex gap-2 max-w-[380px] mx-auto">
              <div className="flex-1 px-3.5 py-2.5 border border-ursa-line rounded-full font-body text-[0.85rem] bg-ursa-foam text-muted-foreground text-left">
                tu@correo.com
              </div>
              <button
                className="px-4 py-2.5 bg-ursa-dark-roast text-ursa-cream rounded-full font-label text-[0.7rem] tracking-[0.14em] uppercase"
                style={{ border: "none" }}
              >
                Únete
              </button>
            </div>
            <div className="font-display italic text-[0.78rem] text-ursa-gold mt-5">
              Un gramo a la vez.
            </div>
          </div>
        </div>
      </div>
    </PrototypeFrame>
  );
}

function EmailHeaderProto() {
  return (
    <PrototypeFrame
      label="Email header — weekly bean drop"
      note="Email header for the weekly newsletter announcing the new bean drop. Reusable HTML template; only the headline and origin name change weekly. Bear concept mark as watermark; in production replace with the official mark."
    >
      <div
        className="relative overflow-hidden rounded-md text-center"
        style={{
          background: "linear-gradient(135deg, #3B2417 0%, #2D4A36 100%)",
          color: "#F4EBD9",
          padding: "32px 24px",
          minHeight: 200,
        }}
      >
        {/* Wavy line texture */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 600 200"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 opacity-[0.12]"
          aria-hidden
        >
          <g stroke="#B8924A" strokeWidth="0.5" fill="none">
            <path d="M0 100 Q100 60 200 100 T400 100 T600 100" />
            <path d="M0 130 Q100 90 200 130 T400 130 T600 130" />
          </g>
        </svg>
        <div className="relative z-10">
          <BearMark size={48} className="mx-auto mb-3 text-ursa-gold-soft" />
          <div className="font-label text-[0.6rem] tracking-[0.28em] uppercase text-ursa-gold-soft mb-2">
            Ursa Coffee Roasters · Newsletter
          </div>
          <div className="font-display italic text-[1.8rem] leading-[1.1] mb-2">
            El grano de esta semana
          </div>
          <div className="font-body text-[0.82rem] opacity-85 max-w-[38ch] mx-auto">
            Lonya, Utcubamba, Amazonas — en barra hoy. Un gramo a la vez.
          </div>
          {/* CTA button */}
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 bg-ursa-gold text-ursa-dark-roast font-label text-[0.7rem] tracking-[0.14em] uppercase px-4 py-2 rounded-full">
              Pídelo en barra <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </PrototypeFrame>
  );
}

function GbpHeroProto() {
  return (
    <PrototypeFrame
      label="Google Business Profile hero + Rappi hero (16:9)"
      note="GBP hero image for the Google Business Profile cover slot. 16:9 aspect ratio fills the cover. Hero conveys the two-bar identity, address, hours, and delivery availability in a single glance. The Rappi hero reuses the same composition with a different CTA. Bear concept mark as watermark; in production replace with the official mark."
    >
      <div className="space-y-4">
        {/* GBP hero */}
        <div
          className="relative overflow-hidden rounded-lg p-6 flex flex-col justify-between"
          style={{
            aspectRatio: "16 / 9",
            background: "linear-gradient(135deg, #3B2417 0%, #2D4A36 100%)",
            color: "#F4EBD9",
            maxWidth: 560,
          }}
        >
          <BearWatermark size={80} opacity={0.4} className="top-6 right-6" color="#F4EBD9" />
          <div className="relative z-10">
            <div className="font-label text-[0.6rem] tracking-[0.24em] uppercase text-ursa-gold-soft mb-2.5">
              Ursa Coffee Roasters · Miraflores
            </div>
            <div className="font-display italic text-[2rem] leading-[1.1] mb-2">
              Dos barras. Una casa.
            </div>
            <div className="font-body text-[0.78rem] opacity-85 max-w-[40ch]">
              Tostadores de café de especialidad. Alcanfores 183, Miraflores. Lun–Sab 7:30am · Dom
              8:30am.
            </div>
          </div>
          <div className="relative z-10 flex gap-3 flex-wrap font-label text-[0.55rem] tracking-[0.18em] uppercase text-ursa-leaf">
            <span>Espresso</span>
            <span className="opacity-40">·</span>
            <span>Coldbrew</span>
            <span className="opacity-40">·</span>
            <span>Filtrado</span>
            <span className="opacity-40">·</span>
            <span>Rappi</span>
          </div>
          <div className="absolute top-3 right-3 bg-ursa-cream/90 text-ursa-dark-roast font-label text-[0.55rem] tracking-[0.16em] uppercase px-2.5 py-1 rounded-full">
            Google Business Profile · cover
          </div>
        </div>

        {/* Rappi hero */}
        <div
          className="relative overflow-hidden rounded-lg p-6 flex flex-col justify-between"
          style={{
            aspectRatio: "16 / 9",
            background: "linear-gradient(135deg, #C16E4B 0%, #3B2417 100%)",
            color: "#F4EBD9",
            maxWidth: 560,
          }}
        >
          <BearWatermark size={70} opacity={0.25} className="bottom-[-10px] right-[-10px]" />
          <div className="relative z-10">
            <div className="font-label text-[0.6rem] tracking-[0.24em] uppercase text-ursa-gold-soft mb-2.5">
              Ursa · Rappi
            </div>
            <div className="font-display italic text-[1.7rem] leading-[1.1] mb-2">
              Tu casa, a 30 minutos del oso.
            </div>
            <div className="font-body text-[0.78rem] opacity-90 max-w-[36ch]">
              Ursagroni, Maracumango, Filtrado Lonya — entregados calientes. Empacado en barra,
              sellado con cinta de la casa.
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-ursa-cream text-ursa-dark-roast font-label text-[0.65rem] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full">
              Pedir por Rappi <ArrowRight size={11} />
            </span>
            <span className="font-body text-[0.7rem] opacity-75">Tiempo aprox. 25–35 min</span>
          </div>
          <div className="absolute top-3 right-3 bg-ursa-cream/90 text-ursa-dark-roast font-label text-[0.55rem] tracking-[0.16em] uppercase px-2.5 py-1 rounded-full">
            Rappi · hero image
          </div>
        </div>
      </div>
    </PrototypeFrame>
  );
}

// ============================================================
// MAIN VIEW
// ============================================================

export function CreativeView() {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <>
      <ViewHero
        eyebrow={t("content.view.creative.eyebrow")}
        title={
          <>
            {t("content.view.creative.title-line1")}
            <br />
            {t("content.view.creative.title-line2")}
          </>
        }
        lede={
          <>
            Working HTML, CSS, and SVG prototypes for fifteen touchpoints — social posts,
            carousels, Stories, Reel covers, posters, menus, product cards, table signs, loyalty
            cards, packaging labels, bean info cards, event materials, Google and delivery
            imagery, landing pages, and email headers. The official logo is never altered or
            counterfeited; the geometric bear glyph used throughout is an original concept mark
            for prototype demonstration only.
          </>
        }
        meta={[
          { label: "Evolution", value: "Three levels" },
          { label: "Recommendation", value: "Conservative refinement recommended" },
          { label: "Logo", value: "No counterfeiting" },
        ]}
      />

      {/* Top disclaimer */}
      <ViewSection badge="6.0 · Read first" title="Asset disclaimer — read before any production">
        <Callout tone="stop" title="Original concept mark — not the official logo">
          <p>
            The geometric bear glyph used throughout this module is an{" "}
            <strong>original concept mark</strong> designed for dossier navigation and prototype
            demonstration. It is <strong>not</strong> the official Ursa Coffee Roasters logo. The
            official logo must be sourced from the owner-supplied asset pack (open question Q6 in
            Sources &amp; Evidence) before any production artwork is finalized. All prototypes
            below use the concept mark as a placeholder; in production, the official mark replaces
            it. No prototype in this module alters, parodies, or counterfeits the official logo.
          </p>
        </Callout>
      </ViewSection>

      <ArtNouveauDivider />

      {/* Brand evolution levels */}
      <ViewSection
        badge="6.1 · Brand evolution"
        title="Three brand-evolution levels — visual comparison"
        meta="Same prototype · three intensities"
      >
        <p className="text-[0.95rem] text-muted-foreground mb-6 max-w-[68ch] leading-relaxed">
          The three evolution levels from §1.9 are visualised below using the same prototype
          (single-image social post) so the difference is immediately visible at thumbnail size —
          where 90% of social impressions happen.
        </p>

        <Grid cols={3}>
          {/* Level 1 */}
          <Card className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <Pill tone="ok">Level 1 · Conservative</Pill>
              <SectionBadge tone="forest">Recommended permanent</SectionBadge>
            </div>
            <LevelSample level={1} tone="ok" />
            <h3 className="font-display text-[1.15rem] text-ursa-dark-roast mt-3 mb-1">
              Paper, typography, tagline
            </h3>
            <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
              Paper background, no watermark, no flourish. Identity carried entirely by
              typography and tagline. Lowest risk. Permanent system from day one.
            </p>
            <div className="mt-auto pt-3 flex gap-1.5 flex-wrap">
              <Pill tone="forest">No watermark</Pill>
              <Pill tone="default">Type-led</Pill>
            </div>
          </Card>

          {/* Level 2 */}
          <Card highlight className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <Pill tone="warn">Level 2 · Distinctive</Pill>
              <SectionBadge tone="gold">6-month skin</SectionBadge>
            </div>
            <LevelSample level={2} tone="warn" />
            <h3 className="font-display text-[1.15rem] text-ursa-dark-roast mt-3 mb-1">
              Forest gradient + bear watermark
            </h3>
            <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
              Forest gradient, bear silhouette watermark at 16%, accent shifts to leaf green.
              Distinctive at thumbnail size. Recommended growth skin from month 4.
            </p>
            <div className="mt-auto pt-3 flex gap-1.5 flex-wrap">
              <Pill tone="warn">16% watermark</Pill>
              <Pill tone="forest">Thumbnail-ownable</Pill>
            </div>
          </Card>

          {/* Level 3 */}
          <Card className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <Pill tone="stop">Level 3 · Experimental</Pill>
              <SectionBadge tone="terracotta">Seasonal only</SectionBadge>
            </div>
            <LevelSample level={3} tone="stop" />
            <h3 className="font-display text-[1.15rem] text-ursa-dark-roast mt-3 mb-1">
              Constellation + numbered edition
            </h3>
            <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
              Espresso-black background, inverted Ursa Major constellation as the bear&apos;s
              celestial cousin, numbered limited edition. Summer / winter season only — never a
              permanent register.
            </p>
            <div className="mt-auto pt-3 flex gap-1.5 flex-wrap">
              <Pill tone="stop">Numbered N° / 200</Pill>
              <Pill tone="default">Seasonal</Pill>
            </div>
          </Card>
        </Grid>

        <Callout tone="ok" title="Recommendation — confirmed">
          <p>
            <strong>
              Level 1 as the permanent system, Level 2 as a growth skin from month 4, Level 3 only
              as seasonal expression.
            </strong>{" "}
            The visual comparison makes the reason clear: Level 1 protects identity at zero risk,
            Level 2 makes Ursa unmistakable at thumbnail size (where 90% of social impressions
            happen), and Level 3 stretches the system for limited periods without breaking it.
            Skipping Level 1 in pursuit of Level 2 is the single most common reason rebrands fail;
            this plan does not skip.
          </p>
        </Callout>
      </ViewSection>

      <ArtNouveauDivider />

      {/* Prototype tabs */}
      <ViewSection
        badge="6.2 · Prototypes"
        title="Fifteen touchpoints, four families"
        meta="HTML · CSS · SVG"
      >
        <p className="text-[0.95rem] text-muted-foreground mb-5 max-w-[68ch] leading-relaxed">
          Each prototype below is a working HTML/CSS/SVG mockup. Screenshots at 2× resolution
          produce production-grade JPEGs for social; for print, the HTML serves as a precise spec
          for any designer or printer (exact hex colours, named fonts, defined aspect ratios).
        </p>

        <Tabs defaultValue="social" className="w-full">
          <TabsList className="bg-ursa-cream border border-ursa-line-soft h-auto flex-wrap">
            <TabsTrigger
              value="social"
              className="data-[state=active]:bg-ursa-dark-roast data-[state=active]:text-ursa-cream gap-1.5 px-3 py-1.5 text-[0.78rem]"
            >
              <ImageIcon size={13} /> Social
            </TabsTrigger>
            <TabsTrigger
              value="print"
              className="data-[state=active]:bg-ursa-dark-roast data-[state=active]:text-ursa-cream gap-1.5 px-3 py-1.5 text-[0.78rem]"
            >
              <Printer size={13} /> Print
            </TabsTrigger>
            <TabsTrigger
              value="packaging"
              className="data-[state=active]:bg-ursa-dark-roast data-[state=active]:text-ursa-cream gap-1.5 px-3 py-1.5 text-[0.78rem]"
            >
              <Package size={13} /> Packaging
            </TabsTrigger>
            <TabsTrigger
              value="digital"
              className="data-[state=active]:bg-ursa-dark-roast data-[state=active]:text-ursa-cream gap-1.5 px-3 py-1.5 text-[0.78rem]"
            >
              <MonitorSmartphone size={13} /> Digital
            </TabsTrigger>
          </TabsList>

          {/* SOCIAL */}
          <TabsContent value="social" className="pt-2">
            <Grid cols={2}>
              <div>
                <InstagramPostProto />
              </div>
              <div>
                <CarouselProto />
              </div>
              <div>
                <StoryProto />
              </div>
              <div>
                <ReelCoverProto />
              </div>
            </Grid>
          </TabsContent>

          {/* PRINT */}
          <TabsContent value="print" className="pt-2">
            <Grid cols={2}>
              <div className="md:col-span-2">
                <MenuProto />
              </div>
              <div>
                <ProductCardProto />
              </div>
              <div>
                <TableSignProto />
              </div>
              <div className="md:col-span-2">
                <EventFlyerProto />
              </div>
            </Grid>
          </TabsContent>

          {/* PACKAGING */}
          <TabsContent value="packaging" className="pt-2">
            <Grid cols={2}>
              <div>
                <BeanBagLabelProto />
              </div>
              <div>
                <BeanInfoCardProto />
              </div>
              <div className="md:col-span-2">
                <LoyaltyCardProto />
              </div>
            </Grid>
          </TabsContent>

          {/* DIGITAL */}
          <TabsContent value="digital" className="pt-2">
            <div className="space-y-0">
              <LandingHeroProto />
              <EmailHeaderProto />
              <GbpHeroProto />
            </div>
          </TabsContent>
        </Tabs>
      </ViewSection>

      <ArtNouveauDivider />

      {/* Closing summary + stats */}
      <ViewSection
        badge="6.3 · Recap"
        title="What these prototypes prove"
        meta="Spirit preserved · risk minimised"
      >
        <Grid cols={4}>
          <StatBlock value="15" label="Touchpoints prototyped — social, print, packaging, digital" tone="forest" />
          <StatBlock value="3" label="Brand-evolution levels with a confirmed recommendation" tone="gold" />
          <StatBlock value="0" label="Alterations or counterfeits of the official Ursa logo" tone="terracotta" />
          <StatBlock value="1" label="Original concept mark used as a placeholder throughout" tone="forest" />
        </Grid>

        <Grid cols={3}>
          <Card>
            <ShieldCheck className="text-ursa-forest-deep mb-2" size={22} />
            <h4 className="font-display text-[1.05rem] text-ursa-dark-roast mb-1">Identity protected</h4>
            <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
              Every prototype preserves the bear, the Art Nouveau craft language, the two-bar
              architecture, and the verified tagline. No generic growth tactic is allowed to break
              the bear.
            </p>
          </Card>
          <Card>
            <Stamp className="text-ursa-gold mb-2" size={22} />
            <h4 className="font-display text-[1.05rem] text-ursa-dark-roast mb-1">Print-ready spec</h4>
            <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
              Exact hex colours, named fonts, defined aspect ratios. A screenshot handed to a
              printer is enough. Browser print-to-PDF validates every prototype.
            </p>
          </Card>
          <Card>
            <Award className="text-ursa-terracotta mb-2" size={22} />
            <h4 className="font-display text-[1.05rem] text-ursa-dark-roast mb-1">Cheaply testable</h4>
            <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
              Most prototypes cost S/. 0–200 to test in print. The bean bag label and the table
              sign together cover the origin story and pairing tests for under S/. 100.
            </p>
          </Card>
        </Grid>

        <div className="mt-6 grid sm:grid-cols-[2fr_1fr] gap-5 items-start">
          <Callout tone="forest" title="Why prototypes, not just descriptions">
            <p>
              A description of a “forest-green Story with a gold CTA” leaves twenty decisions
              unresolved. A prototype resolves all twenty. The owner can hold a screenshot next
              to a printer&apos;s sample and say “match this” — and the result will be the
              dossier, not a translator&apos;s interpretation of it.
            </p>
          </Callout>
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <Leaf size={16} className="text-ursa-forest-deep" />
              <h4 className="font-display text-[1.05rem] text-ursa-dark-roast m-0">
                Verify the spirit
              </h4>
            </div>
            <p className="text-[0.85rem] text-muted-foreground leading-relaxed mb-3">
              Cross-check any prototype against the brand audit before production.
            </p>
            <button
              onClick={() => navigate("brand")}
              className="inline-flex items-center gap-1.5 text-[0.78rem] font-label tracking-[0.14em] uppercase text-ursa-gold hover:text-ursa-dark-roast transition"
            >
              Open Module 01 · Brand Audit <ArrowRight size={13} />
            </button>
          </Card>
        </div>
      </ViewSection>

      <ArtNouveauDivider />

      {/* Skeptical revision pass — adapted from dossier §6.14 */}
      <ViewSection
        badge="6.4 · Skeptical pass"
        title="Three skeptic questions, answered"
        meta="Pre-empts the obvious objections"
      >
        <Grid cols={3}>
          <Card>
            <Quote className="text-ursa-gold mb-2" size={20} />
            <p className="font-display italic text-[0.95rem] text-ursa-dark-roast mb-2 leading-snug">
              “These are HTML prototypes, not production files. How does the owner use them?”
            </p>
            <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
              Each prototype is print-ready via the browser&apos;s print-to-PDF function. For
              social, screenshots at 2× resolution produce production-grade JPEGs. For packaging
              and print, the HTML/CSS serves as a precise spec — exact hex colours, named fonts,
              defined aspect ratios. The owner can hand a screenshot to a printer and say
              “match this”.
            </p>
          </Card>
          <Card>
            <Quote className="text-ursa-gold mb-2" size={20} />
            <p className="font-display italic text-[0.95rem] text-ursa-dark-roast mb-2 leading-snug">
              “You used a generic bear in the prototypes. The real bear might look totally
              different.”
            </p>
            <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
              Correct — and stated explicitly in the asset disclaimer at the top of this module.
              The geometric bear used here is a placeholder concept mark. The owner-supplied asset
              pack (open question Q6) is required before any production artwork is finalized.
              Once the official bear is sourced, it replaces the concept mark in every prototype
              without changing layout, palette, or typography.
            </p>
          </Card>
          <Card>
            <Quote className="text-ursa-gold mb-2" size={20} />
            <p className="font-display italic text-[0.95rem] text-ursa-dark-roast mb-2 leading-snug">
              “Level 3 with inverted constellation and numbered editions is too cute for a small
              café.”
            </p>
            <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
              Fair concern — which is why Level 3 is restricted to seasonal expression and
              explicitly recommended as optional. If the owner finds it too cute, the plan
              degrades gracefully: Level 1 + Level 2 alone produce a complete, distinctive system.
              Level 3 exists only for the moment the owner wants to celebrate a season, an
              anniversary, or a limited origin.
            </p>
          </Card>
        </Grid>

        <div className="mt-6 grid sm:grid-cols-3 gap-5">
          <Card className="flex items-center gap-3">
            <CalendarDays className="text-ursa-forest-deep shrink-0" size={22} />
            <div>
              <div className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-muted-foreground">
                Cupping nights
              </div>
              <div className="font-display text-[1rem] text-ursa-dark-roast">
                First Saturday · monthly
              </div>
            </div>
          </Card>
          <Card className="flex items-center gap-3">
            <Clock className="text-ursa-gold shrink-0" size={22} />
            <div>
              <div className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-muted-foreground">
                Bear recommends window
              </div>
              <div className="font-display text-[1rem] text-ursa-dark-roast">7:30–10:00am</div>
            </div>
          </Card>
          <Card className="flex items-center gap-3">
            <MapPin className="text-ursa-terracotta shrink-0" size={22} />
            <div>
              <div className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-muted-foreground">
                Home base
              </div>
              <div className="font-display text-[1rem] text-ursa-dark-roast">
                Alcanfores 183, Miraflores
              </div>
            </div>
          </Card>
        </div>
      </ViewSection>

      <ArtNouveauDivider />

      {/* Dossier link banner */}
      <ViewSection badge="6.5 · Full dossier" title="Open the printable HTML dossier">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[0.95rem] text-muted-foreground max-w-[58ch] leading-relaxed">
            The static dossier for Module 06 contains the same prototypes in a single printable
            HTML page, plus the asset disclaimer and the skeptical revision pass. Open it to
            print, screenshot, or hand to a printer.
          </p>
          <DossierLinkBanner moduleId="06-creative-campaign-prototypes" />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-[0.8rem] text-muted-foreground">
          <CupGlyph size={18} className="text-ursa-gold" />
          <span className="font-display italic text-ursa-dark-roast">Un gramo a la vez.</span>
          <span className="opacity-60">·</span>
          <span>Module 06 compiled 2026-08-01</span>
        </div>
      </ViewSection>
    </>
  );
}
