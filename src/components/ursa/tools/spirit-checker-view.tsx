"use client";

import { useState, useMemo } from "react";
import { ViewHero, ViewSection, Card, DossierLinkBanner } from "../view-shell";
import { BearMark, Pill, Callout, ArtNouveauDivider, ProgressBar } from "../ursa-brand";
import { useNavigate } from "@/lib/ursa-nav";
import { cn } from "@/lib/utils";
import {
  Shield, Check, X, AlertTriangle, RotateCcw, PawPrint as BearLucide,
  Scale, Coffee, Sparkles, ArrowRight, Info,
} from "lucide-react";

/**
 * Spirit-Preservation Checker — an interactive tool that validates any
 * proposed tactic against Ursa's verified identity (bear, gram, green,
 * Art Nouveau, roastery). Returns a score and a verdict.
 *
 * The three spirit pillars:
 *  1. BEAR — the bear motif / mascot / character
 *  2. GRAM — "Un gramo a la vez" — the weighing ritual / patient craft
 *  3. GREEN — the browns-and-greens palette / Art Nouveau / roastery craft
 *
 * A tactic that erodes any pillar without offsetting gain fails the check.
 */

type Pillar = "bear" | "gram" | "green";

type Question = {
  id: string;
  pillar: Pillar;
  question: string;
  help: string;
  // "yes" = preserves/strengthens, "no" = erodes, "neutral" = n/a
  weight: number; // how much this question matters (1-3)
};

const QUESTIONS: Question[] = [
  {
    id: "q1",
    pillar: "bear",
    question: "Does the tactic use or feature the bear motif (mascot, paw, character)?",
    help: "The bear is Ursa's most ownable asset — no Lima competitor has an animal character.",
    weight: 3,
  },
  {
    id: "q2",
    pillar: "bear",
    question: "Could the tactic be mistaken for a generic café's tactic if you removed the bear?",
    help: "If yes, the tactic is not bear-anchored — it leans on commodity rather than identity.",
    weight: 2,
  },
  {
    id: "q3",
    pillar: "gram",
    question: "Does the tactic reinforce the 'one gram at a time' weighing ritual or patient craft?",
    help: "The gram is the craft ethos — visible weighing, deliberate preparation, no shortcuts.",
    weight: 3,
  },
  {
    id: "q4",
    pillar: "gram",
    question: "Does the tactic rush or commodify the coffee (e.g. 'fastest cup', 'no wait')?",
    help: "Speed-as-vendor erodes the gram pillar. Efficiency is fine; 'fastest' is not.",
    weight: 2,
  },
  {
    id: "q5",
    pillar: "green",
    question: "Does the tactic use the verified palette (browns, greens, cream, gold)?",
    help: "No blue, no indigo — the palette is a deliberate non-default choice.",
    weight: 2,
  },
  {
    id: "q6",
    pillar: "green",
    question: "Does the tactic respect the Art Nouveau / crafted visual language?",
    help: "Art Nouveau = ornamental borders, serif display type, botanical motifs, gold accents.",
    weight: 2,
  },
  {
    id: "q7",
    pillar: "green",
    question: "Does the tactic reference the in-house roastery or two-bar theatre?",
    help: "The roastery on the floor and the espresso+coldbrew bars are the craft proof.",
    weight: 3,
  },
  {
    id: "q8",
    pillar: "bear",
    question: "Would a regular recognize this as 'something Ursa would do'?",
    help: "The regular's recognition is the real brand test — not the owner's intent.",
    weight: 2,
  },
];

const PILLAR_META: Record<Pillar, { label: string; icon: typeof BearLucide; color: string; desc: string }> = {
  bear: { label: "Bear", icon: BearLucide, color: "var(--color-ursa-dark-roast)", desc: "The mascot, the paw, the character" },
  gram: { label: "Gram", icon: Scale, color: "var(--color-ursa-gold)", desc: "'Un gramo a la vez' — the weighing ritual" },
  green: { label: "Green", icon: Coffee, color: "var(--color-ursa-forest-deep)", desc: "Palette, Art Nouveau, roastery craft" },
};

export function SpiritCheckerView() {
  const navigate = useNavigate();
  const [tactic, setTactic] = useState("");
  const [answers, setAnswers] = useState<Record<string, "yes" | "no" | "neutral" | undefined>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    const pillarScores: Record<Pillar, { earned: number; max: number }> = {
      bear: { earned: 0, max: 0 },
      gram: { earned: 0, max: 0 },
      green: { earned: 0, max: 0 },
    };
    QUESTIONS.forEach((q) => {
      pillarScores[q.pillar].max += q.weight * 10;
      const ans = answers[q.id];
      // For "erodes" questions (q2, q4), "no" is good and "yes" is bad
      const isErodeQuestion = q.id === "q2" || q.id === "q4";
      if (ans === "neutral") {
        pillarScores[q.pillar].earned += q.weight * 5; // half credit
      } else if (isErodeQuestion) {
        if (ans === "no") pillarScores[q.pillar].earned += q.weight * 10; // good: it doesn't erode
        else if (ans === "yes") pillarScores[q.pillar].earned += 0; // bad: it erodes
      } else {
        if (ans === "yes") pillarScores[q.pillar].earned += q.weight * 10; // good: it preserves
        else if (ans === "no") pillarScores[q.pillar].earned += 0; // bad: it doesn't
      }
    });
    const pct = (p: { earned: number; max: number }) => (p.max > 0 ? Math.round((p.earned / p.max) * 100) : 0);
    const bear = pct(pillarScores.bear);
    const gram = pct(pillarScores.gram);
    const green = pct(pillarScores.green);
    const composite = Math.round((bear + gram + green) / 3);
    // Spirit preserved if no pillar falls below 50%
    const lowestPillar = Math.min(bear, gram, green);
    const verdict =
      lowestPillar >= 70 ? "preserved" :
      lowestPillar >= 50 ? "conditional" :
      "at-risk";
    return { bear, gram, green, composite, verdict, lowestPillar };
  }, [answers]);

  const answeredCount = Object.values(answers).filter((v) => v !== undefined).length;
  const allAnswered = answeredCount === QUESTIONS.length;

  const verdictMeta = {
    preserved: {
      label: "Spirit preserved",
      tone: "ok" as const,
      color: "var(--color-ursa-forest-deep)",
      desc: "The tactic protects all three pillars. It may ship — document why it passed.",
    },
    conditional: {
      label: "Conditional — revise before shipping",
      tone: "warn" as const,
      color: "var(--color-ursa-gold)",
      desc: "One or more pillars are below the safe threshold. Revise the tactic to strengthen the weak pillar, then re-check.",
    },
    "at-risk": {
      label: "At risk — do not ship as-is",
      tone: "stop" as const,
      color: "var(--color-ursa-terracotta)",
      desc: "A pillar is badly eroded. This tactic would dilute Ursa's identity. Kill it or rethink it from the bear, the gram, or the green.",
    },
  };

  return (
    <>
      <ViewHero
        eyebrow="Extra Tool T10 · Interactive identity guard"
        title="Spirit-Preservation Checker — does this tactic protect the bear, the gram, and the green?"
        lede={
          <>
            Before any new tactic ships, run it through this checker. Eight questions across three
            identity pillars (Bear, Gram, Green) produce a composite score and a verdict. The rule is
            simple: if a tactic erodes any pillar below 50%, it does not ship without revision.
          </>
        }
        meta={[
          { label: "Pillars", value: "Bear · Gram · Green" },
          { label: "Questions", value: `${QUESTIONS.length}` },
          { label: "Threshold", value: "≥ 50% per pillar" },
        ]}
        tone="forest"
      />

      <ViewSection>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 items-start [grid-template-columns:minmax(0,1fr)]">
          {/* Left: tactic input + questions */}
          <div className="space-y-5">
            {/* Tactic input */}
            <Card>
              <label className="font-label text-[0.72rem] tracking-[0.14em] uppercase text-ursa-gold-text block mb-2">
                Tactic to check
              </label>
              <input
                type="text"
                value={tactic}
                onChange={(e) => setTactic(e.target.value)}
                placeholder="e.g. 'Happy hour: 2-for-1 espressos from 5–7pm'"
                aria-label="Tactic to check"
                className="w-full h-11 px-4 rounded-lg border border-ursa-line bg-ursa-foam text-ursa-dark-roast placeholder:text-muted-foreground/60 focus:outline-none focus:border-ursa-gold focus:ring-2 focus:ring-ursa-gold/20 transition font-body"
              />
              <p className="text-[0.78rem] text-muted-foreground mt-2 m-0">
                Describe the tactic in one line. Then answer the {QUESTIONS.length} questions below honestly — the checker only works if you do.
              </p>
            </Card>

            {/* Questions */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-semibold text-ursa-dark-roast m-0 flex items-center gap-2">
                  <Shield size={18} className="text-ursa-gold-text" /> The {QUESTIONS.length} questions
                </h3>
                <span className="font-label text-[0.66rem] tracking-[0.12em] uppercase text-muted-foreground">
                  {answeredCount}/{QUESTIONS.length} answered
                </span>
              </div>
              <ProgressBar value={(answeredCount / QUESTIONS.length) * 100} tone="gold" />

              <div className="mt-5 space-y-4">
                {QUESTIONS.map((q, i) => {
                  const ans = answers[q.id];
                  const meta = PILLAR_META[q.pillar];
                  const Icon = meta.icon;
                  const isErode = q.id === "q2" || q.id === "q4";
                  return (
                    <div key={q.id} className="rounded-lg border border-ursa-line-soft bg-ursa-foam/50 p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-7 h-7 rounded-full grid place-items-center shrink-0 border" style={{ background: `${meta.color}15`, borderColor: `${meta.color}40`, color: meta.color }}>
                          <Icon size={14} />
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-label text-[0.56rem] tracking-[0.14em] uppercase" style={{ color: meta.color }}>{meta.label}</span>
                            <span className="font-label text-[0.56rem] tracking-[0.1em] uppercase text-muted-foreground">· weight {q.weight}</span>
                          </div>
                          <p className="font-display text-[0.95rem] font-semibold text-ursa-dark-roast m-0 leading-snug">
                            {i + 1}. {q.question}
                          </p>
                          <p className="text-[0.76rem] text-muted-foreground m-0 mt-1 leading-relaxed flex items-start gap-1">
                            <Info size={11} className="mt-0.5 shrink-0 text-ursa-gold-text/60" /> {q.help}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 pl-10">
                        {(["yes", "no", "neutral"] as const).map((opt) => {
                          const isActive = ans === opt;
                          // For erode questions, "no" is the good answer (green), "yes" is bad (red)
                          const tone = isErode
                            ? (opt === "no" ? "ok" : opt === "yes" ? "stop" : "warn")
                            : (opt === "yes" ? "ok" : opt === "no" ? "stop" : "warn");
                          const toneCls = {
                            ok: isActive ? "bg-ursa-forest-deep text-ursa-cream border-ursa-forest-deep" : "text-ursa-forest-deep border-ursa-forest-deep/30 hover:bg-ursa-forest-deep/10",
                            stop: isActive ? "bg-ursa-terracotta text-ursa-cream border-ursa-terracotta" : "text-ursa-terracotta border-ursa-terracotta/30 hover:bg-ursa-terracotta/10",
                            warn: isActive ? "bg-ursa-gold text-ursa-dark-roast border-ursa-gold" : "text-ursa-gold-text border-ursa-gold/30 hover:bg-ursa-gold/10",
                          }[tone];
                          return (
                            <button
                              key={opt}
                              onClick={() => setAnswers((a) => ({ ...a, [q.id]: isActive ? undefined : opt }))}
                              aria-pressed={isActive}
                              className={cn(
                                "px-3 py-1.5 rounded-full font-label text-[0.62rem] tracking-[0.1em] uppercase border transition",
                                toneCls
                              )}
                            >
                              {opt === "yes" ? "Yes" : opt === "no" ? "No" : "N/A"}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={() => setSubmitted(true)}
                  disabled={!allAnswered}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-label text-[0.74rem] tracking-[0.12em] uppercase bg-ursa-gold text-ursa-dark-roast hover:bg-ursa-gold-soft transition shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Shield size={14} /> Check the spirit
                </button>
                <button
                  onClick={() => { setAnswers({}); setSubmitted(false); }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full font-label text-[0.72rem] tracking-[0.1em] uppercase text-muted-foreground hover:text-ursa-terracotta transition"
                >
                  <RotateCcw size={13} /> Clear answers
                </button>
              </div>
            </Card>
          </div>

          {/* Right: live score panel */}
          <div className="lg:sticky lg:top-24 space-y-4">
            <Card highlight className={cn(submitted && score.verdict === "at-risk" && "border-ursa-terracotta")}>
              <div className="flex items-center gap-2 mb-4">
                <BearMark size={22} className="text-ursa-dark-roast ursa-breathe" />
                <h3 className="font-display text-lg font-semibold text-ursa-dark-roast m-0">Spirit score</h3>
              </div>

              {/* Composite */}
              <div className="text-center mb-5">
                <div className="font-display text-5xl font-semibold leading-none" style={{ color: submitted ? verdictMeta[score.verdict].color : "var(--color-ursa-line)" }}>
                  {submitted ? score.composite : "—"}
                </div>
                <div className="font-label text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground mt-2">Composite / 100</div>
              </div>

              {submitted ? (
                <div className="mb-4">
                  <Pill tone={verdictMeta[score.verdict].tone} className="mb-2">{verdictMeta[score.verdict].label}</Pill>
                  <p className="text-[0.84rem] text-muted-foreground m-0 leading-relaxed">{verdictMeta[score.verdict].desc}</p>
                </div>
              ) : (
                <p className="text-[0.84rem] text-muted-foreground m-0 mb-4 italic">
                  Answer all {QUESTIONS.length} questions, then click "Check the spirit".
                </p>
              )}

              {/* Pillar breakdown */}
              <div className="space-y-3 pt-4 border-t border-ursa-line-soft">
                {(Object.keys(PILLAR_META) as Pillar[]).map((p) => {
                  const meta = PILLAR_META[p];
                  const Icon = meta.icon;
                  const val = score[p as "bear" | "gram" | "green"];
                  const pillarTone = val >= 70 ? "var(--color-ursa-forest-deep)" : val >= 50 ? "var(--color-ursa-gold)" : "var(--color-ursa-terracotta)";
                  return (
                    <div key={p}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="flex items-center gap-1.5 font-label text-[0.64rem] tracking-[0.12em] uppercase text-muted-foreground">
                          <Icon size={12} style={{ color: meta.color }} /> {meta.label}
                        </span>
                        <span className="font-display text-[0.9rem] font-semibold tabular-nums" style={{ color: submitted ? pillarTone : "var(--color-ursa-line)" }}>
                          {submitted ? val : "—"}
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: submitted ? `${val}%` : "0%", background: pillarTone }}
                        />
                      </div>
                      <p className="text-[0.7rem] text-muted-foreground m-0 mt-1">{meta.desc}</p>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* The rule */}
            <Callout tone="forest" title="The spirit-preservation rule">
              <p className="m-0 text-[0.86rem]">
                If a tactic forces a choice between protecting Ursa&apos;s identity and chasing a generic
                growth play, this dossier always chooses the bear, the gram, and the green. A pillar
                below 50% is a red line — not a suggestion.
              </p>
            </Callout>

            {/* Example verdicts */}
            <Card className="bg-ursa-foam">
              <h4 className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-gold-text m-0 mb-3">Verdict scale</h4>
              <ul className="space-y-2 m-0 p-0 list-none text-[0.82rem]">
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-ursa-forest-deep mt-0.5 shrink-0" />
                  <span><strong className="text-ursa-dark-roast">≥ 70% per pillar</strong> — spirit preserved, may ship.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle size={14} className="text-ursa-gold-text mt-0.5 shrink-0" />
                  <span><strong className="text-ursa-dark-roast">50–69%</strong> — conditional; revise the weak pillar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X size={14} className="text-ursa-terracotta mt-0.5 shrink-0" />
                  <span><strong className="text-ursa-dark-roast">&lt; 50%</strong> — at risk; do not ship as-is.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </ViewSection>

      <ViewSection>
        <DossierLinkBanner moduleId="01-brand-audit-and-design-system" />
      </ViewSection>
    </>
  );
}
