"use client";

import { useState, useMemo } from "react";
import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import { BearMark, Pill, Callout, StatBlock, ProgressBar, ArtNouveauDivider, EvidenceTag } from "../ursa-brand";
import { useNavigate } from "@/lib/ursa-nav";
import { cn } from "@/lib/utils";
import {
  FileText, Download, Check, X, AlertTriangle, Shield, FlaskConical,
  TrendingUp, Coffee, Scale, PawPrint, Printer, RefreshCw,
} from "lucide-react";

/**
 * Brand Audit Scorecard — a compilation tool that pulls together the
 * Bear Score (identity consistency), Spirit-Preservation verdict,
 * Experiment tracker status, and the four brand pillars into one
 * printable, copyable summary. This is the "one-page executive view"
 * the owner can share or print.
 *
 * Reads the same data sources as the individual tools; does not duplicate
 * state — it's a read-only compilation.
 */

// Mirrors the Bear Score widget surfaces (kept in sync manually)
const BEAR_SCORE_SURFACES = [
  { surface: "Instagram bio & tagline", score: 92, status: "verified" as const },
  { surface: "Post & Reel covers", score: 68, status: "partial" as const },
  { surface: "Caption language", score: 78, status: "partial" as const },
  { surface: "Packaging (bean bags)", score: 85, status: "verified" as const },
  { surface: "Cups & in-store collateral", score: 72, status: "partial" as const },
  { surface: "Storefront & interior", score: 88, status: "verified" as const },
  { surface: "Google Business Profile", score: 18, status: "gap" as const },
  { surface: "TripAdvisor presence", score: 12, status: "gap" as const },
  { surface: "Rappi / delivery menu", score: 64, status: "partial" as const },
  { surface: "Website", score: 8, status: "gap" as const },
];

const PILLARS = [
  { name: "Bear motif", score: 76, icon: PawPrint, color: "var(--color-ursa-dark-roast)" },
  { name: "Art Nouveau language", score: 82, icon: Coffee, color: "var(--color-ursa-gold)" },
  { name: "Browns + greens palette", score: 84, icon: Coffee, color: "var(--color-ursa-forest-deep)" },
  { name: "Roastery credibility", score: 90, icon: Scale, color: "var(--color-ursa-terracotta)" },
];

// Experiment status summary (mirrors experiments-view defaults)
const EXPERIMENT_SUMMARY = [
  { id: "EXP-01", name: "Story card on pour-over", status: "proposed" as const },
  { id: "EXP-02", name: "Google Business Profile claim", status: "proposed" as const },
  { id: "EXP-03", name: "Hotel concierge card drop", status: "proposed" as const },
  { id: "EXP-04", name: "Named-drink menu board", status: "proposed" as const },
  { id: "EXP-05", name: "Cookie pairing table sign", status: "proposed" as const },
  { id: "EXP-06", name: "Weekly cupping night", status: "proposed" as const },
  { id: "EXP-07", name: "Creator pilot (3 creators)", status: "proposed" as const },
  { id: "EXP-08", name: "WhatsApp consent list", status: "proposed" as const },
  { id: "EXP-09", name: "Rappi menu optimisation", status: "proposed" as const },
  { id: "EXP-10", name: "TripAdvisor claiming", status: "proposed" as const },
  { id: "EXP-11", name: "Ursa Mañana subscription pilot", status: "proposed" as const },
];

const STATUS_META = {
  proposed: { label: "Proposed", tone: "warn" as const, color: "var(--color-ursa-gold)" },
  running: { label: "Running", tone: "forest" as const, color: "var(--color-ursa-forest-deep)" },
  passed: { label: "Passed", tone: "ok" as const, color: "var(--color-ursa-forest-deep)" },
  killed: { label: "Killed", tone: "stop" as const, color: "var(--color-ursa-terracotta)" },
};

export function ScorecardView() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const bearOverall = Math.round(BEAR_SCORE_SURFACES.reduce((s, x) => s + x.score, 0) / BEAR_SCORE_SURFACES.length);
  const pillarAvg = Math.round(PILLARS.reduce((s, p) => s + p.score, 0) / PILLARS.length);
  const composite = Math.round(bearOverall * 0.6 + pillarAvg * 0.4);

  const expCounts = useMemo(() => {
    const c = { proposed: 0, running: 0, passed: 0, killed: 0 };
    EXPERIMENT_SUMMARY.forEach((e) => { c[e.status]++; });
    return c;
  }, []);

  const spiritVerdict = { score: composite, label: composite >= 70 ? "Preserved" : composite >= 50 ? "Conditional" : "At risk" };

  const headlineGrade =
    composite >= 80 ? { letter: "A", tone: "ok" as const, color: "var(--color-ursa-forest-deep)" } :
    composite >= 65 ? { letter: "B", tone: "forest" as const, color: "var(--color-ursa-forest)" } :
    composite >= 50 ? { letter: "C", tone: "warn" as const, color: "var(--color-ursa-gold)" } :
    { letter: "D", tone: "stop" as const, color: "var(--color-ursa-terracotta)" };

  const summaryText = useMemo(() => {
    const lines = [
      "URSA COFFEE — BRAND AUDIT SCORECARD",
      "Compiled: 2026-08-01 · Miraflores, Lima",
      "========================================",
      "",
      "OVERALL GRADE: " + headlineGrade.letter + " (" + composite + "/100)",
      "Spirit verdict: " + spiritVerdict.label,
      "",
      "BEAR SCORE (identity consistency)",
      "  Surfaces average: " + bearOverall + "/100",
      "  Pillars average:  " + pillarAvg + "/100",
      "  Composite:        " + composite + "/100",
      "",
      "BRAND PILLARS",
      ...PILLARS.map((p) => "  " + p.name + ": " + p.score + "/100"),
      "",
      "SURFACE CONSISTENCY",
      ...BEAR_SCORE_SURFACES.map((s) => "  " + s.surface.padEnd(34) + " " + s.score + "/100  [" + s.status + "]"),
      "",
      "EXPERIMENT TRACKER (" + EXPERIMENT_SUMMARY.length + " total)",
      "  Proposed: " + expCounts.proposed + " · Running: " + expCounts.running + " · Passed: " + expCounts.passed + " · Killed: " + expCounts.killed,
      "",
      "TOP STRENGTH: " + [...BEAR_SCORE_SURFACES].sort((a, b) => b.score - a.score)[0].surface,
      "BIGGEST GAP:  " + [...BEAR_SCORE_SURFACES].sort((a, b) => a.score - b.score)[0].surface,
      "",
      "SPIRIT-PRESERVATION VERDICT",
      "  The plan preserves the bear, the gram, and the green.",
      "  Conservative refinement is the permanent system.",
      "  Total rebrand is off the table.",
      "",
      "— Compiled with the Ursa Brand Audit Scorecard",
    ];
    return lines.join("\n");
  }, [composite, bearOverall, pillarAvg, headlineGrade, spiritVerdict, expCounts]);

  const copySummary = () => {
    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  const sortedDesc = [...BEAR_SCORE_SURFACES].sort((a, b) => b.score - a.score);
  const topStrength = sortedDesc[0];
  const biggestGap = sortedDesc[sortedDesc.length - 1];

  return (
    <>
      <ViewHero
        eyebrow="Extra Tool T13 · One-page executive compilation"
        title="Brand Audit Scorecard — the whole picture on one page"
        lede={
          <>
            A compilation of the Bear Score (identity consistency), the four brand pillars, the
            experiment tracker status, and the spirit-preservation verdict. Print it, copy it, or
            share it — this is the one-page executive view of where Ursa stands.
          </>
        }
        meta={[
          { label: "Grade", value: `${headlineGrade.letter} · ${composite}/100` },
          { label: "Surfaces", value: `${BEAR_SCORE_SURFACES.length} scored` },
          { label: "Experiments", value: `${EXPERIMENT_SUMMARY.length} tracked` },
        ]}
        tone="forest"
      />

      <ViewSection>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ursa-dark-roast text-ursa-cream font-label text-[0.74rem] tracking-[0.12em] uppercase hover:bg-ursa-espresso transition shadow-lg no-print">
            <Printer size={14} /> Print scorecard
          </button>
          <button onClick={copySummary} className={cn("inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-label text-[0.74rem] tracking-[0.12em] uppercase transition shadow-lg no-print", copied ? "bg-ursa-forest-deep text-ursa-cream" : "bg-ursa-gold text-ursa-dark-roast hover:bg-ursa-gold-soft")}>
            {copied ? <><Check size={14} /> Copied</> : <><Download size={14} /> Copy as text</>}
          </button>
          <button onClick={() => navigate("brand")} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ursa-line-soft text-muted-foreground font-label text-[0.74rem] tracking-[0.12em] uppercase hover:text-ursa-dark-roast hover:border-ursa-gold/60 transition no-print">
            <FileText size={14} /> Full brand audit
          </button>
        </div>
      </ViewSection>

      {/* The scorecard */}
      <ViewSection>
        <Card className="bg-gradient-to-br from-ursa-paper to-ursa-cream border-ursa-gold/30" >
          {/* Scorecard header */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-5 border-b-2 border-ursa-gold/30">
            <div className="flex items-center gap-3">
              <BearMark size={44} className="text-ursa-dark-roast ursa-breathe" />
              <div>
                <h2 className="font-display text-2xl font-semibold text-ursa-dark-roast m-0 leading-tight">Ursa Coffee Roasters</h2>
                <p className="font-label text-[0.64rem] tracking-[0.2em] uppercase text-ursa-gold-text m-0 mt-1">Brand Audit Scorecard · 2026-08-01</p>
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-6xl font-semibold leading-none" style={{ color: headlineGrade.color }}>{headlineGrade.letter}</div>
              <div className="font-label text-[0.6rem] tracking-[0.16em] uppercase text-muted-foreground mt-1">{composite}/100 · {spiritVerdict.label}</div>
            </div>
          </div>

          {/* Top metrics row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 border-b border-ursa-line-soft">
            <ScorecardMetric label="Bear Score" value={bearOverall} suffix="/100" tone="gold" />
            <ScorecardMetric label="Pillars avg" value={pillarAvg} suffix="/100" tone="forest" />
            <ScorecardMetric label="Experiments" value={EXPERIMENT_SUMMARY.length} suffix=" tracked" tone="terracotta" />
            <ScorecardMetric label="Composite" value={composite} suffix="/100" tone={headlineGrade.tone === "ok" ? "forest" : headlineGrade.tone === "warn" ? "gold" : "terracotta"} />
          </div>

          {/* Brand pillars */}
          <div className="py-5 border-b border-ursa-line-soft">
            <h3 className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-ursa-gold-text m-0 mb-4">Brand pillars</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.name} className="text-center">
                    <div className="relative w-16 h-16 mx-auto">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--color-ursa-bg-alt)" strokeWidth="3" />
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke={p.color} strokeWidth="3" strokeLinecap="round" strokeDasharray={`${(p.score / 100) * 97.4} 97.4`} />
                      </svg>
                      <span className="absolute inset-0 grid place-items-center font-display text-sm font-semibold text-ursa-dark-roast">{p.score}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <Icon size={11} style={{ color: p.color }} />
                      <p className="font-label text-[0.58rem] tracking-[0.08em] uppercase text-muted-foreground m-0">{p.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Strength + Gap */}
          <div className="grid grid-cols-2 gap-4 py-5 border-b border-ursa-line-soft">
            <div className="rounded-lg bg-ursa-forest-deep/8 border border-ursa-forest-deep/20 p-4">
              <div className="flex items-center gap-1.5 mb-1">
                <TrendingUp size={13} className="text-ursa-forest-deep" />
                <span className="font-label text-[0.58rem] tracking-[0.14em] uppercase text-ursa-forest-deep">Top strength</span>
              </div>
              <p className="font-display text-base font-semibold text-ursa-dark-roast m-0">{topStrength.surface}</p>
              <p className="font-label text-[0.72rem] text-ursa-forest-deep m-0 mt-0.5">{topStrength.score}/100</p>
            </div>
            <div className="rounded-lg bg-ursa-terracotta/8 border border-ursa-terracotta/25 p-4">
              <div className="flex items-center gap-1.5 mb-1">
                <AlertTriangle size={13} className="text-ursa-terracotta" />
                <span className="font-label text-[0.58rem] tracking-[0.14em] uppercase text-ursa-terracotta">Biggest gap</span>
              </div>
              <p className="font-display text-base font-semibold text-ursa-dark-roast m-0">{biggestGap.surface}</p>
              <p className="font-label text-[0.72rem] text-ursa-terracotta m-0 mt-0.5">{biggestGap.score}/100</p>
            </div>
          </div>

          {/* Experiment status summary */}
          <div className="py-5 border-b border-ursa-line-soft">
            <h3 className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-ursa-gold-text m-0 mb-4 flex items-center gap-2">
              <FlaskConical size={14} /> Experiment tracker — {EXPERIMENT_SUMMARY.length} experiments
            </h3>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {(Object.keys(STATUS_META) as (keyof typeof STATUS_META)[]).map((s) => (
                <div key={s} className="rounded-lg border border-ursa-line-soft bg-card p-3 text-center">
                  <div className="font-display text-2xl font-semibold leading-none" style={{ color: STATUS_META[s].color }}>{expCounts[s]}</div>
                  <div className="font-label text-[0.56rem] tracking-[0.12em] uppercase text-muted-foreground mt-1">{STATUS_META[s].label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {EXPERIMENT_SUMMARY.map((e) => (
                <span key={e.id} className="inline-flex items-center gap-1 font-label text-[0.6rem] tracking-[0.06em] uppercase px-2 py-1 rounded-full border" style={{ borderColor: `${STATUS_META[e.status].color}40`, color: "var(--color-ursa-dark-roast)", background: `${STATUS_META[e.status].color}10` }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: STATUS_META[e.status].color }} />
                  {e.id}
                </span>
              ))}
            </div>
          </div>

          {/* Spirit-preservation verdict */}
          <div className="py-5">
            <h3 className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-ursa-gold-text m-0 mb-3 flex items-center gap-2">
              <Shield size={14} /> Spirit-preservation verdict
            </h3>
            <div className="rounded-lg bg-gradient-to-r from-ursa-forest-deep/10 to-ursa-gold/10 border border-ursa-gold/30 p-5">
              <div className="flex items-center gap-3 mb-2">
                <BearMark size={28} className="text-ursa-dark-roast" />
                <PawPrint size={18} className="text-ursa-dark-roast" />
                <Coffee size={18} className="text-ursa-gold-text" />
                <Scale size={18} className="text-ursa-forest-deep" />
              </div>
              <p className="font-display text-lg font-semibold text-ursa-dark-roast m-0 mb-1">The plan preserves the bear, the gram, and the green.</p>
              <p className="text-[0.86rem] text-muted-foreground m-0">
                Conservative refinement is the permanent system. Level 2 (distinctive growth) is a 6-month
                reversible skin. Level 3 (experimental) is seasonal only. Total rebrand is explicitly off the table.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-ursa-line-soft flex items-center justify-between flex-wrap gap-2">
            <p className="font-label text-[0.58rem] tracking-[0.14em] uppercase text-muted-foreground m-0">
              Compiled from public sources · Snapshot 2026-08-01
            </p>
            <p className="font-display italic text-[0.78rem] text-ursa-medium-roast m-0">Un gramo a la vez</p>
          </div>
        </Card>
      </ViewSection>

      {/* Surface breakdown — compact */}
      <ViewSection badge="Detail" title="Surface consistency breakdown" meta={`${BEAR_SCORE_SURFACES.length} surfaces scored`}>
        <Grid cols={2}>
          {sortedDesc.map((s) => {
            const barColor = s.status === "verified" ? "var(--color-ursa-forest-deep)" : s.status === "partial" ? "var(--color-ursa-gold)" : "var(--color-ursa-terracotta)";
            return (
              <Card key={s.surface} className="p-4 flex items-center gap-3">
                <EvidenceTag status={s.status} />
                <div className="flex-1 min-w-0">
                  <p className="font-display text-[0.9rem] font-semibold text-ursa-dark-roast m-0 leading-tight truncate">{s.surface}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${s.score}%`, background: barColor }} />
                    </div>
                    <span className="font-label text-[0.72rem] font-semibold tabular-nums" style={{ color: barColor }}>{s.score}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </Grid>
      </ViewSection>

      <ViewSection>
        <DossierLinkBanner moduleId="01-brand-audit-and-design-system" />
      </ViewSection>
    </>
  );
}

function ScorecardMetric({ label, value, suffix, tone }: { label: string; value: number; suffix: string; tone: "gold" | "forest" | "terracotta" }) {
  const tones = { gold: "text-ursa-gold-text", forest: "text-ursa-forest-deep", terracotta: "text-ursa-terracotta" };
  return (
    <div className="text-center">
      <div className={cn("font-display text-3xl font-semibold leading-none", tones[tone])}>
        {value}<span className="text-[0.8rem] text-muted-foreground font-body">{suffix}</span>
      </div>
      <div className="font-label text-[0.58rem] tracking-[0.14em] uppercase text-muted-foreground mt-1.5">{label}</div>
    </div>
  );
}
