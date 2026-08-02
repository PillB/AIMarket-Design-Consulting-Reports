"use client";

import { useState, useMemo, useCallback, useSyncExternalStore } from "react";
import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import {
  BearMark,
  ArtNouveauDivider,
  Pill,
  Callout,
  StatBlock,
  SectionBadge,
} from "../ursa-brand";
import { EXPERIMENTS } from "@/lib/ursa-data";
import { useNavigate } from "@/lib/ursa-nav";
import { useI18n } from "@/hooks/use-i18n";
import {
  Beaker,
  FlaskConical,
  Play,
  Check,
  X,
  Banknote,
  Filter,
  RotateCcw,
  NotebookPen,
  ArrowRight,
  CircleDot,
  Target,
  Crosshair,
  AlertTriangle,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Status = "proposed" | "running" | "passed" | "killed";

type StatusMeta = {
  label: string;
  pillTone: "gold" | "forest" | "ok" | "stop";
  text: string;
  bg: string;
  border: string;
  bar: string;
  dot: string;
  icon: React.ReactNode;
};

const STATUS_META: Record<Status, StatusMeta> = {
  proposed: {
    label: "Proposed",
    pillTone: "gold",
    text: "text-ursa-gold",
    bg: "bg-ursa-gold/8",
    border: "border-ursa-gold/40",
    bar: "bg-ursa-gold",
    dot: "bg-ursa-gold",
    icon: <CircleDot size={12} />,
  },
  running: {
    label: "Running",
    pillTone: "forest",
    text: "text-ursa-forest-deep",
    bg: "bg-ursa-forest-deep/8",
    border: "border-ursa-forest-deep/30",
    bar: "bg-ursa-forest-deep",
    dot: "bg-ursa-forest-deep",
    icon: <Play size={12} />,
  },
  passed: {
    label: "Passed",
    pillTone: "ok",
    text: "text-ursa-forest-deep",
    bg: "bg-ursa-forest-deep/12",
    border: "border-ursa-forest-deep/45",
    bar: "bg-ursa-forest-deep",
    dot: "bg-ursa-forest-deep",
    icon: <Check size={12} />,
  },
  killed: {
    label: "Killed",
    pillTone: "stop",
    text: "text-ursa-terracotta",
    bg: "bg-ursa-terracotta/8",
    border: "border-ursa-terracotta/35",
    bar: "bg-ursa-terracotta",
    dot: "bg-ursa-terracotta",
    icon: <X size={12} />,
  },
};

const STATUS_ORDER: Status[] = ["proposed", "running", "passed", "killed"];

const STORAGE_KEY_STATUS = "ursa-experiments-status-v1";
const STORAGE_KEY_NOTES = "ursa-experiments-notes-v1";

/** Experiment timeline (Gantt-like) ranges derived from stop rules + roadmap phasing. */
const TIMELINE: Record<string, { start: number; end: number; phase: string }> = {
  "EXP-01": { start: 1, end: 14, phase: "Lean · 30-day" },
  "EXP-02": { start: 1, end: 7, phase: "Lean · 72h" },
  "EXP-03": { start: 7, end: 37, phase: "Lean · 30-day" },
  "EXP-04": { start: 1, end: 22, phase: "Lean · 30-day" },
  "EXP-05": { start: 1, end: 14, phase: "Lean · 30-day" },
  "EXP-06": { start: 30, end: 90, phase: "Moderate · 60-day" },
  "EXP-07": { start: 30, end: 60, phase: "Moderate · 60-day" },
  "EXP-08": { start: 1, end: 60, phase: "Lean → Moderate" },
  "EXP-09": { start: 30, end: 60, phase: "Moderate · 60-day" },
  "EXP-10": { start: 1, end: 30, phase: "Lean · 30-day" },
  "EXP-11": { start: 60, end: 90, phase: "Growth · 90-day" },
};

const FILTER_OPTIONS: { value: "all" | Status; label: string }[] = [
  { value: "all", label: "All" },
  { value: "proposed", label: "Proposed" },
  { value: "running", label: "Running" },
  { value: "passed", label: "Passed" },
  { value: "killed", label: "Killed" },
];

/** Parse a cost range string like "S/. 1,200–3,000" into {min, max} numbers. */
function parseCost(cost: string): { min: number; max: number } {
  const cleaned = cost.replace(/S\/\.\s*/g, "").replace(/,/g, "");
  const match = cleaned.match(/(\d+)\s*[–-]\s*(\d+)/);
  if (match) {
    return { min: parseInt(match[1], 10), max: parseInt(match[2], 10) };
  }
  const single = cleaned.match(/(\d+)/);
  if (single) {
    const n = parseInt(single[1], 10);
    return { min: n, max: n };
  }
  return { min: 0, max: 0 };
}

const PEN = (n: number) => `S/. ${n.toLocaleString("en-US")}`;

/** Custom event dispatched whenever this tab writes to localStorage.
 *  The native `storage` event only fires in *other* tabs, so we dispatch a
 *  sibling event to make `useSyncExternalStore` re-read in the same tab. */
const URSA_LS_EVENT = "ursa-local-storage-change";

function subscribeLocalStorage(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(URSA_LS_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(URSA_LS_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/** Hook to load + persist a JSON value to localStorage.
 *  Uses `useSyncExternalStore` so SSR renders with `initial` and the client
 *  re-hydrates from localStorage without an extra setState-in-effect render. */
function usePersistentState<T>(
  key: string,
  initial: T
): [T, (next: T | ((prev: T) => T)) => void, boolean] {
  const getSnapshot = useCallback((): string => {
    if (typeof window === "undefined") return "";
    try {
      return localStorage.getItem(key) ?? "";
    } catch {
      return "";
    }
  }, [key]);

  const raw = useSyncExternalStore(
    subscribeLocalStorage,
    getSnapshot,
    () => ""
  );

  const value = useMemo<T>(() => {
    if (!raw) return initial;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return initial;
    }
  }, [raw, initial]);

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      try {
        const currentRaw = localStorage.getItem(key);
        const current: T = currentRaw
          ? (JSON.parse(currentRaw) as T)
          : initial;
        const resolved =
          typeof next === "function"
            ? (next as (p: T) => T)(current)
            : next;
        localStorage.setItem(key, JSON.stringify(resolved));
        // Notify same-tab subscribers.
        window.dispatchEvent(new Event(URSA_LS_EVENT));
      } catch {
        // Storage may be unavailable (private mode, quota). Silently fail.
      }
    },
    [key, initial]
  );

  return [value, setValue, !!raw];
}

export function ExperimentsView() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [statuses, setStatuses] = usePersistentState<Record<string, Status>>(
    STORAGE_KEY_STATUS,
    {}
  );
  const [notes, setNotes] = usePersistentState<Record<string, string>>(
    STORAGE_KEY_NOTES,
    {}
  );
  const [filter, setFilter] = useState<"all" | Status>("all");

  const getStatus = (id: string): Status => statuses[id] ?? "proposed";

  const counts = useMemo(() => {
    const c: Record<Status, number> = { proposed: 0, running: 0, passed: 0, killed: 0 };
    EXPERIMENTS.forEach((e) => {
      c[getStatus(e.id)]++;
    });
    return c;
  }, [statuses]);

  const filteredExperiments = useMemo(() => {
    if (filter === "all") return EXPERIMENTS;
    return EXPERIMENTS.filter((e) => getStatus(e.id) === filter);
  }, [filter, statuses]);

  const costSummary = useMemo(() => {
    let minTotal = 0;
    let maxTotal = 0;
    let count = 0;
    EXPERIMENTS.forEach((e) => {
      const status = getStatus(e.id);
      if (status === "proposed" || status === "running") {
        const { min, max } = parseCost(e.cost);
        minTotal += min;
        maxTotal += max;
        count++;
      }
    });
    return { minTotal, maxTotal, count };
  }, [statuses]);

  const activeCount = counts.proposed + counts.running;
  const graduatedPct = EXPERIMENTS.length
    ? Math.round(((counts.passed + counts.killed) / EXPERIMENTS.length) * 100)
    : 0;

  const updateStatus = (id: string, status: Status) => {
    setStatuses((prev) => ({ ...prev, [id]: status }));
  };

  const updateNote = (id: string, text: string) => {
    setNotes((prev) => ({ ...prev, [id]: text }));
  };

  const resetAll = () => {
    setStatuses({});
    setNotes({});
  };

  return (
    <>
      <ViewHero
        eyebrow={t("content.view.experiments.eyebrow")}
        tone="forest"
        title={<>{t("content.view.experiments.title")}</>}
        lede={
          <>
            Track the eleven low-cost experiments from Module 07 against their stop rules. Move
            each one from <strong>Proposed</strong> → <strong>Running</strong> →{" "}
            <strong>Passed</strong> or <strong>Killed</strong>. Notes persist in your browser via
            localStorage — no account, no server, no leak.
          </>
        }
        meta={[
          { label: "Experiments", value: `${EXPERIMENTS.length} tracked` },
          { label: "Statuses", value: "Proposed · Running · Passed · Killed" },
          { label: "Persistence", value: "localStorage (per device)" },
        ]}
      />

      {/* Section 1 — Summary stats ============================================== */}
      <ViewSection
        badge="Section 01 · Status"
        title={<>{t("content.experiments.section.status")}</>}
        meta="Saved in your browser"
      >
        <Grid cols={4}>
          <StatBlock
            value={String(EXPERIMENTS.length)}
            label={t("content.experiments.stat.total")}
            tone="forest"
          />
          <StatBlock
            value={String(counts.proposed)}
            label={t("content.experiments.stat.proposed")}
            tone="gold"
          />
          <StatBlock
            value={String(counts.running)}
            label={t("content.experiments.stat.running")}
            tone="forest"
          />
          <StatBlock
            value={String(counts.passed + counts.killed)}
            label={t("content.experiments.stat.graduated")}
            tone="terracotta"
          />
        </Grid>

        <div className="mt-6 grid sm:grid-cols-2 gap-5">
          <Card className="bg-ursa-foam">
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
              <FlaskConical size={16} className="text-ursa-gold" /> Status legend
            </h4>
            <ul className="m-0 p-0 list-none space-y-1.5">
              {STATUS_ORDER.map((s) => {
                const m = STATUS_META[s];
                return (
                  <li key={s} className="flex items-center gap-2.5">
                    <span className={cn("h-3 w-3 rounded-full", m.dot)} aria-hidden="true" />
                    <span className="font-label text-[0.7rem] tracking-[0.14em] uppercase text-ursa-dark-roast">
                      {m.label}
                    </span>
                    <span className="text-[0.82rem] text-muted-foreground">
                      {s === "proposed" && "brief written, not yet live"}
                      {s === "running" && "live, clock is ticking against the stop rule"}
                      {s === "passed" && "graduated — becomes a permanent channel"}
                      {s === "killed" && "stop rule hit — retired, not forgotten"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Card>
          <Card>
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
              <Trophy size={16} className="text-ursa-gold" /> Graduation rate
            </h4>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-display text-3xl font-semibold text-ursa-forest-deep">
                {graduatedPct}%
              </span>
              <span className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground">
                of {EXPERIMENTS.length} experiments decided
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-gradient-to-r from-ursa-forest to-ursa-forest-deep rounded-full transition-all duration-500"
                style={{ width: `${graduatedPct}%` }}
              />
            </div>
            <p className="text-[0.82rem] text-muted-foreground m-0">
              <strong className="text-ursa-forest-deep">{counts.passed}</strong> passed ·{" "}
              <strong className="text-ursa-terracotta">{counts.killed}</strong> killed ·{" "}
              <strong>{activeCount}</strong> still active or proposed.
            </p>
          </Card>
        </div>
      </ViewSection>

      {/* Section 2 — Filter ==================================================== */}
      <ViewSection
        badge="Section 02 · Filter"
        title={<>{t("content.experiments.section.filter")}</>}
        meta={`${filteredExperiments.length} of ${EXPERIMENTS.length} shown`}
      >
        <div className="flex flex-wrap items-center gap-2">
          {FILTER_OPTIONS.map((opt) => {
            const isActive = filter === opt.value;
            const count =
              opt.value === "all"
                ? EXPERIMENTS.length
                : counts[opt.value];
            return (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full border font-label text-[0.72rem] tracking-[0.12em] uppercase transition",
                  isActive
                    ? "bg-ursa-forest-deep text-ursa-cream border-ursa-forest-deep"
                    : "bg-card text-ursa-dark-roast border-ursa-line-soft hover:border-ursa-gold/60 hover:text-ursa-gold"
                )}
              >
                <Filter size={12} />
                {opt.label}
                <span
                  className={cn(
                    "inline-flex items-center justify-center min-w-[1.4rem] h-5 px-1.5 rounded-full font-body text-[0.66rem]",
                    isActive ? "bg-ursa-gold text-ursa-dark-roast" : "bg-muted text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}

          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={resetAll}
              className="font-label text-[0.7rem] tracking-[0.12em] uppercase border-ursa-terracotta/40 text-ursa-terracotta hover:bg-ursa-terracotta hover:text-ursa-cream"
            >
              <RotateCcw size={12} className="mr-1.5" /> Reset all
            </Button>
          </div>
        </div>

        {filter !== "all" && (
          <p className="text-[0.84rem] text-muted-foreground mt-3">
            Showing only experiments with status{" "}
            <strong className={STATUS_META[filter].text}>{STATUS_META[filter].label}</strong>.
            Change the filter to see others.
          </p>
        )}
      </ViewSection>

      {/* Section 3 — Experiment cards ========================================== */}
      <ViewSection
        badge="Section 03 · Board"
        title={<>{t("content.experiments.section.cards")}</>}
        meta="Click a card's selector to update"
      >
        {filteredExperiments.length === 0 ? (
          <Card className="bg-ursa-foam text-center">
            <p className="text-[0.95rem] text-muted-foreground m-0">
              No experiments match the current filter. Try a different status above.
            </p>
          </Card>
        ) : (
          <Grid cols={2}>
            {filteredExperiments.map((e) => (
              <ExperimentCard
                key={e.id}
                experiment={e}
                status={getStatus(e.id)}
                onStatusChange={(s) => updateStatus(e.id, s)}
              />
            ))}
          </Grid>
        )}
      </ViewSection>

      {/* Section 4 — Cost summary ============================================== */}
      <ViewSection
        badge="Section 04 · Budget"
        title={<>{t("content.experiments.section.cost")}</>}
        meta="Conservative range in PEN"
      >
        <Grid cols={3}>
          <Card highlight className="bg-ursa-foam">
            <StatBlock
              value={`${PEN(costSummary.minTotal)} – ${PEN(costSummary.maxTotal)}`}
              label={`Estimated total exposure · ${costSummary.count} active or proposed`}
              tone="gold"
            />
            <p className="text-[0.82rem] text-muted-foreground mt-3 m-0">
              Lower bound = the minimum cost per experiment. Upper bound = the maximum. The real
              number lands somewhere in between once each test ships.
            </p>
          </Card>
          <Card>
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
              <Banknote size={16} className="text-ursa-gold" /> What is counted
            </h4>
            <ul className="m-0 p-0 list-none space-y-1.5 text-[0.84rem] text-muted-foreground">
              <li><strong className="text-ursa-gold">Proposed</strong> — exposure reserved in plan.</li>
              <li><strong className="text-ursa-forest-deep">Running</strong> — exposure committed.</li>
              <li className="text-muted-foreground/70 italic">
                <strong>Passed / Killed</strong> are excluded — sunk.
              </li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
              <AlertTriangle size={16} className="text-ursa-terracotta" /> Honest caveats
            </h4>
            <p className="text-[0.84rem] text-muted-foreground m-0">
              Costs are scenario ranges, not invoices. Two experiments cost{" "}
              <strong>S/. 0</strong> (EXP-02 GBP claim, EXP-10 TripAdvisor claiming) — they cost
              attention, not money. The Subscription Calculator (Module 08) is the place to model
              EXP-11&apos;s full economics.
            </p>
            <button
              onClick={() => navigate("calculator")}
              className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ursa-gold/60 text-ursa-gold hover:bg-ursa-gold hover:text-ursa-dark-roast transition font-label text-[0.7rem] tracking-[0.1em] uppercase"
            >
              <ArrowRight size={12} /> Model EXP-11 in calculator
            </button>
          </Card>
        </Grid>

        <Callout tone="forest" title="The single cheapest experiment">
          <strong>EXP-02 — Google Business Profile claim</strong> costs nothing and unlocks
          &ldquo;directions&rdquo; calls. If only one experiment is run in the first 72 hours, this
          is the one. The tracker lets you mark it <em>Running</em> immediately, then{" "}
          <em>Passed</em> the day &ldquo;directions&rdquo; calls appear.
        </Callout>
      </ViewSection>

      {/* Section 5 — Timeline (Gantt-like) ===================================== */}
      <ViewSection
        badge="Section 05 · Timeline"
        title={<>{t("content.experiments.section.gantt")}</>}
        meta="Bars coloured by current status"
      >
        <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-[68ch] mb-6">
          Each bar is positioned by the experiment&apos;s stop rule. The earliest stop rule fires
          on day 7 (EXP-02 GBP); the latest runs to day 90 (EXP-06 cupping nights). Use this view
          to see when, in the 90-day window, decisions land.
        </p>

        <div className="rounded-xl border border-ursa-line-soft bg-card p-4 md:p-5 overflow-x-auto">
          {/* Day axis */}
          <div className="grid items-center mb-2" style={{ gridTemplateColumns: "minmax(180px, 220px) 1fr" }}>
            <div className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground pr-3">
              Experiment
            </div>
            <div className="relative h-5">
              {[0, 15, 30, 45, 60, 75, 90].map((d) => (
                <span
                  key={d}
                  className="absolute top-0 font-label text-[0.6rem] tracking-[0.1em] uppercase text-muted-foreground"
                  style={{ left: `${(d / 90) * 100}%`, transform: d === 0 ? "none" : "translateX(-50%)" }}
                >
                  Day {d}
                </span>
              ))}
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-2">
            {EXPERIMENTS.map((e) => {
              const tl = TIMELINE[e.id];
              const status = getStatus(e.id);
              const m = STATUS_META[status];
              const leftPct = (tl.start / 90) * 100;
              const widthPct = ((tl.end - tl.start) / 90) * 100;
              return (
                <div
                  key={e.id}
                  className="grid items-center group hover:bg-muted/30 rounded-lg -mx-1 px-1 py-0.5 transition-colors"
                  style={{ gridTemplateColumns: "minmax(180px, 220px) 1fr" }}
                >
                  <div className="pr-3 flex items-baseline gap-2 min-w-0">
                    <span className="font-label text-[0.64rem] tracking-[0.12em] uppercase text-ursa-gold shrink-0 font-semibold">
                      {e.id}
                    </span>
                    <span className="text-[0.84rem] text-ursa-dark-roast truncate font-medium" title={e.name}>
                      {e.name}
                    </span>
                  </div>
                  <div className="relative h-8 bg-muted/40 rounded-md border border-ursa-line-soft/50">
                    {/* Phase gridlines */}
                    {[30, 60, 90].map((d) => (
                      <div
                        key={d}
                        className="absolute top-0 bottom-0 border-l border-dashed border-ursa-line/60"
                        style={{ left: `${(d / 90) * 100}%` }}
                      />
                    ))}
                    {/* Bar */}
                    <div
                      className={cn(
                        "absolute top-1 bottom-1 rounded shadow-sm flex items-center px-2.5 transition-all group-hover:brightness-110",
                        m.bar,
                        status === "killed" && "opacity-50"
                      )}
                      style={{
                        left: `${leftPct}%`,
                        width: `max(${widthPct}%, 36px)`,
                      }}
                      title={`${e.id} · ${m.label} · day ${tl.start}–${tl.end}`}
                    >
                      <span className="font-label text-[0.62rem] tracking-[0.08em] uppercase text-ursa-cream truncate font-semibold">
                        d{tl.start}–{tl.end}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-5 pt-4 border-t border-ursa-line-soft flex flex-wrap items-center gap-x-5 gap-y-2">
            {STATUS_ORDER.map((s) => (
              <span key={s} className="inline-flex items-center gap-2">
                <span className={cn("h-2.5 w-4 rounded-sm", STATUS_META[s].bar)} />
                <span className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground">
                  {STATUS_META[s].label}
                </span>
              </span>
            ))}
            <span className="ml-auto font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground">
              Phase gridlines at days 30 · 60 · 90
            </span>
          </div>
        </div>

        <Callout tone="warn" title="Why some bars are short">
          EXP-02 (GBP claim) is a 7-day test. EXP-05 (cookie pairing table sign) is a 14-day test.
          Short bars are good — they tell you which decisions land first. A long bar like EXP-06
          (cupping nights) is a slow signal: do not graduate or kill it before its second month.
        </Callout>
      </ViewSection>

      {/* Section 6 — Learning log ============================================== */}
      <ViewSection
        badge="Section 06 · Notes"
        title={<>Learning log — jot observations per experiment</>}
        meta="Auto-saved in localStorage"
      >
        <p className="text-[0.95rem] text-muted-foreground leading-relaxed max-w-[68ch] mb-6">
          Notes persist on this device only. Use them for the things a status pill cannot capture:
          a customer quote, a surprise metric, a moment the barista flagged something. When you
          mark an experiment <strong>Passed</strong> or <strong>Killed</strong>, the note becomes
          the rationale.
        </p>

        <Grid cols={2}>
          {EXPERIMENTS.map((e) => {
            const status = getStatus(e.id);
            const m = STATUS_META[status];
            return (
              <Card key={e.id} className={cn("flex flex-col gap-2", m.border)}>
                <div className="flex items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span className="font-label text-[0.62rem] tracking-[0.12em] uppercase text-ursa-gold shrink-0">
                      {e.id}
                    </span>
                    <span className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast truncate">
                      {e.name}
                    </span>
                  </div>
                  <Pill tone={m.pillTone}>
                    <span className="inline-flex items-center gap-1">{m.icon}{m.label}</span>
                  </Pill>
                </div>
                <Textarea
                  value={notes[e.id] ?? ""}
                  onChange={(ev) => updateNote(e.id, ev.target.value)}
                  placeholder={`Observations for ${e.id} — what did customers say? what surprised you?`}
                  className="min-h-[80px] resize-y font-body text-[0.85rem] bg-ursa-foam/50 border-ursa-line-soft focus-visible:ring-ursa-gold"
                />
                <div className="flex items-center justify-between text-[0.72rem] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <NotebookPen size={11} />
                    {notes[e.id] && notes[e.id].trim().length > 0
                      ? `${notes[e.id].trim().length} chars saved`
                      : "empty"}
                  </span>
                  <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase">
                    Stop rule · {e.stopRule}
                  </span>
                </div>
              </Card>
            );
          })}
        </Grid>

        <Callout tone="ok" title="A note is worth a thousand dashboards">
          The status pill tells you <em>what</em> happened. The note tells you <em>why</em>. A
          graduate experiment without a note will be re-litigated at the next quarterly review —
          write the rationale the day you mark it Passed or Killed.
        </Callout>
      </ViewSection>

      {/* Section 7 — Cross-links + dossier ===================================== */}
      <ViewSection>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <DossierLinkBanner moduleId="07-implementation-roadmap-and-kpis" />
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("roadmap")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-forest-deep text-ursa-cream hover:bg-ursa-forest transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
            >
              <ArrowRight size={14} /> Read Module 07 Roadmap
            </button>
            <button
              onClick={() => navigate("calculator")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ursa-gold/60 text-ursa-gold hover:bg-ursa-gold hover:text-ursa-dark-roast transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
            >
              <Banknote size={14} /> Subscription Calculator
            </button>
          </div>
        </div>

        <ArtNouveauDivider />

        <Grid cols={4}>
          <StatBlock value={String(EXPERIMENTS.length)} label="Experiments tracked" tone="forest" />
          <StatBlock value={String(activeCount)} label="Active or proposed now" tone="gold" />
          <StatBlock
            value={`${PEN(costSummary.minTotal)}–${PEN(costSummary.maxTotal)}`}
            label="Estimated exposure (PEN)"
            tone="terracotta"
          />
          <StatBlock value={`${graduatedPct}%`} label="Decided (passed or killed)" tone="forest" />
        </Grid>
      </ViewSection>
    </>
  );
}

// ---- Experiment card ---------------------------------------------------------
function ExperimentCard({
  experiment,
  status,
  onStatusChange,
}: {
  experiment: {
    id: string;
    name: string;
    hypothesis: string;
    cost: string;
    metric: string;
    stopRule: string;
  };
  status: Status;
  onStatusChange: (next: Status) => void;
}) {
  const m = STATUS_META[status];
  return (
    <Card className={cn("flex flex-col gap-3", m.border)}>
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-ursa-gold">
              {experiment.id}
            </span>
            <Pill tone={m.pillTone}>
              <span className="inline-flex items-center gap-1">{m.icon}{m.label}</span>
            </Pill>
          </div>
          <h4 className="font-display text-[1.15rem] font-semibold text-ursa-dark-roast m-0 leading-snug">
            {experiment.name}
          </h4>
        </div>
      </div>

      {/* Hypothesis */}
      <div className="rounded-lg bg-ursa-foam/60 border border-ursa-line-soft px-3.5 py-3">
        <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground block mb-1">
          Hypothesis
        </span>
        <p className="text-[0.9rem] text-ursa-dark-roast leading-relaxed m-0">
          {experiment.hypothesis}
        </p>
      </div>

      {/* Meta grid */}
      <div className="grid grid-cols-1 gap-2.5">
        <div className="flex items-baseline gap-2.5">
          <span className="inline-flex items-center gap-1.5 font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground shrink-0 w-20">
            <Banknote size={11} /> Cost
          </span>
          <Pill tone="gold">{experiment.cost}</Pill>
        </div>
        <div className="flex items-baseline gap-2.5">
          <span className="inline-flex items-center gap-1.5 font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground shrink-0 w-20">
            <Target size={11} /> Metric
          </span>
          <span className="text-[0.86rem] text-ursa-forest-deep leading-snug">
            {experiment.metric}
          </span>
        </div>
        <div className="flex items-baseline gap-2.5">
          <span className="inline-flex items-center gap-1.5 font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground shrink-0 w-20">
            <Crosshair size={11} /> Stop rule
          </span>
          <span className="text-[0.84rem] text-ursa-terracotta italic leading-snug">
            {experiment.stopRule}
          </span>
        </div>
      </div>

      {/* Status selector */}
      <div className="mt-auto pt-3 border-t border-ursa-line-soft">
        <label className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground block mb-1.5">
          Status
        </label>
        <div className="grid grid-cols-4 gap-1.5">
          {STATUS_ORDER.map((s) => {
            const sm = STATUS_META[s];
            const isActive = status === s;
            return (
              <button
                key={s}
                onClick={() => onStatusChange(s)}
                aria-pressed={isActive}
                title={`Mark as ${sm.label}`}
                className={cn(
                  "inline-flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-md border font-label text-[0.6rem] tracking-[0.1em] uppercase transition",
                  isActive
                    ? cn(sm.bg, sm.border, sm.text, "shadow-sm")
                    : "bg-card border-ursa-line-soft text-muted-foreground hover:border-ursa-gold/50 hover:text-ursa-dark-roast"
                )}
              >
                {sm.icon}
                {sm.label}
              </button>
            );
          })}
        </div>
        <p className="text-[0.72rem] text-muted-foreground mt-2 mb-0">
          {status === "proposed" && "Brief is written. Not yet live."}
          {status === "running" && "Live — the stop-rule clock is ticking."}
          {status === "passed" && "Graduated to a permanent channel."}
          {status === "killed" && "Stop rule hit — retired, not forgotten."}
        </p>
      </div>
    </Card>
  );
}
