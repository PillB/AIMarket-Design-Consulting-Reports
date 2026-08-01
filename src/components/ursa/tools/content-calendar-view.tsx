"use client";

import { useState, useMemo } from "react";
import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import {
  BearMark,
  ArtNouveauDivider,
  Pill,
  Callout,
  StatBlock,
} from "../ursa-brand";
import {
  CONTENT_CONCEPTS,
  SCRIPTS,
  REPEATABLE_SERIES,
} from "@/lib/ursa-data";
import { useNavigate } from "@/lib/ursa-nav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Search,
  Copy,
  Check,
  Trash2,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Concept = (typeof CONTENT_CONCEPTS)[number];

const FILTERS = ["All", "Reel", "Carousel", "Series", "UGC", "Event"] as const;
type FilterKey = (typeof FILTERS)[number];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const WEEKS = 4;

function formatTone(
  format: string
): "default" | "forest" | "gold" | "warn" | "stop" | "ok" {
  const f = format.toLowerCase();
  if (f.includes("carousel")) return "gold";
  if (f.includes("series") || f.includes("story")) return "warn";
  if (f.includes("ugc")) return "stop";
  if (f.includes("event")) return "ok";
  if (f.includes("reel")) return "forest";
  return "default";
}

function matchesFilter(format: string, filter: FilterKey): boolean {
  if (filter === "All") return true;
  return format.toLowerCase().includes(filter.toLowerCase());
}

// Pre-populated planner schedule (Mon–Sat featured concept, Sun Stories)
const INITIAL_ASSIGNMENTS: Record<string, string[]> = (() => {
  const a: Record<string, string[]> = {};
  const sched: [number, number, string][] = [
    [0, 0, "C01"], [0, 1, "C10"], [0, 2, "C03"], [0, 3, "C04"], [0, 4, "C05"], [0, 5, "C15"],
    [1, 0, "C09"], [1, 1, "C26"], [1, 2, "C06"], [1, 3, "C11"], [1, 4, "C13"], [1, 5, "C16"],
    [2, 0, "C14"], [2, 1, "C21"], [2, 2, "C18"], [2, 3, "C12"], [2, 4, "C22"], [2, 5, "C07"],
    [3, 0, "C19"], [3, 1, "C24"], [3, 2, "C25"], [3, 3, "C08"], [3, 4, "C20"], [3, 5, "C23"],
  ];
  sched.forEach(([w, d, id]) => {
    a[`${w}-${d}`] = [id];
  });
  for (let w = 0; w < WEEKS; w++) {
    a[`${w}-6`] = ["C17"];
  }
  return a;
})();

function conceptById(id: string): Concept | undefined {
  return CONTENT_CONCEPTS.find((c) => c.id === id);
}

export function ContentCalendarView() {
  const navigate = useNavigate();

  // Filter state for concept library
  const [filter, setFilter] = useState<FilterKey>("All");
  const [query, setQuery] = useState("");
  const [dialogConcept, setDialogConcept] = useState<Concept | null>(null);

  // Copy caption state (per-script)
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Planner state
  const [assignments, setAssignments] = useState<Record<string, string[]>>(
    INITIAL_ASSIGNMENTS
  );
  const [plannerDay, setPlannerDay] = useState<string | null>(null);
  const [plannerFilter, setPlannerFilter] = useState<FilterKey>("All");
  const [plannerQuery, setPlannerQuery] = useState("");

  // Series tracker state
  const [seriesLog, setSeriesLog] = useState<Record<string, string>>({});

  // Filtered concept library
  const filteredConcepts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CONTENT_CONCEPTS.filter((c) => {
      if (!matchesFilter(c.format, filter)) return false;
      if (q && !`${c.title} ${c.hook} ${c.id}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [filter, query]);

  // Format counts (overlapping — a concept may match several formats)
  const formatCounts = useMemo(
    () =>
      FILTERS.map((f) => ({
        filter: f,
        count:
          f === "All"
            ? CONTENT_CONCEPTS.length
            : CONTENT_CONCEPTS.filter((c) => matchesFilter(c.format, f)).length,
      })),
    []
  );

  // Planner day parsing
  const plannerParts = plannerDay ? plannerDay.split("-").map(Number) : [0, 0];
  const plannerWeekNum = plannerParts[0] ?? 0;
  const plannerDayNum = plannerParts[1] ?? 0;
  const dayAssignments = plannerDay ? assignments[plannerDay] ?? [] : [];

  const plannerFiltered = useMemo(() => {
    const q = plannerQuery.trim().toLowerCase();
    return CONTENT_CONCEPTS.filter((c) => {
      if (!matchesFilter(c.format, plannerFilter)) return false;
      if (q && !`${c.title} ${c.hook} ${c.id}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [plannerFilter, plannerQuery]);

  const toggleConcept = (id: string) => {
    if (!plannerDay) return;
    setAssignments((prev) => {
      const cur = prev[plannerDay] ?? [];
      const next = cur.includes(id)
        ? cur.filter((x) => x !== id)
        : [...cur, id];
      return { ...prev, [plannerDay]: next };
    });
  };

  const clearDay = () => {
    if (!plannerDay) return;
    setAssignments((prev) => ({ ...prev, [plannerDay]: [] }));
  };

  const resetPlanner = () => setAssignments(INITIAL_ASSIGNMENTS);

  const totalAssigned = useMemo(
    () => Object.values(assignments).reduce((sum, arr) => sum + arr.length, 0),
    [assignments]
  );

  // Copy caption — silent fail on insecure context
  const copyCaption = async (scriptId: string, caption: string) => {
    try {
      await navigator.clipboard.writeText(caption);
      setCopiedId(scriptId);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      /* no-op */
    }
  };

  return (
    <>
      <ViewHero
        eyebrow="Extra Tool T3 · Interactive"
        title={<>Content Calendar &amp; Script Library</>}
        lede={
          <>
            A working planner for the Ursa content lab. Browse all 26 concepts, read every
            script with its Spanish caption + CTA, assign concepts to a 4-week grid, and
            track when each repeatable series was last posted.
          </>
        }
        meta={[
          { label: "Concepts", value: "26" },
          { label: "Scripts", value: "10" },
          { label: "Series", value: "3" },
          { label: "Pilot", value: "4 weeks" },
        ]}
      />

      {/* Section 01 — Stats */}
      <ViewSection
        badge="Section 01"
        title="Library at a glance"
        meta="Counts by format"
      >
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <Card className="p-5">
            <StatBlock
              value="26"
              label="Content concepts in the library"
              tone="forest"
            />
          </Card>
          <Card className="p-5">
            <StatBlock
              value="10"
              label="Production-ready scripts (beats + caption + CTA)"
              tone="gold"
            />
          </Card>
          <Card className="p-5">
            <StatBlock
              value="3"
              label="Repeatable series with cadence"
              tone="terracotta"
            />
          </Card>
        </div>
        <div className="bg-card border border-ursa-line-soft rounded-xl p-5">
          <div className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-muted-foreground mb-3">
            Concepts by format (overlapping — one concept may match several)
          </div>
          <div className="space-y-2.5">
            {formatCounts.map((f) => {
              const pct = (f.count / CONTENT_CONCEPTS.length) * 100;
              const tone =
                f.filter === "All" ? "forest" : formatTone(f.filter);
              const barColor: Record<string, string> = {
                forest: "bg-ursa-forest-deep",
                gold: "bg-ursa-gold",
                warn: "bg-ursa-gold-soft",
                stop: "bg-ursa-terracotta",
                ok: "bg-ursa-forest",
                default: "bg-muted-foreground/40",
              };
              return (
                <div key={f.filter} className="flex items-center gap-3">
                  <div className="w-20 font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-medium-roast">
                    {f.filter}
                  </div>
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-500",
                        barColor[tone]
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="w-10 text-right font-display text-[0.95rem] font-semibold text-ursa-dark-roast">
                    {f.count}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ViewSection>

      {/* Section 02 — Filterable concept library */}
      <ViewSection
        badge="Section 02"
        title="Filterable concept library"
        meta={`${filteredConcepts.length} of 26 shown`}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
          <div className="relative flex-1 max-w-md">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Search title, hook, or ID (e.g. C07, bear, coldbrew)…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "font-label text-[0.66rem] tracking-[0.14em] uppercase px-3 py-1.5 rounded-full border transition",
                    active
                      ? "bg-ursa-dark-roast text-ursa-cream border-ursa-dark-roast"
                      : "bg-card text-ursa-medium-roast border-ursa-line hover:border-ursa-gold hover:text-ursa-gold-text"
                  )}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {filteredConcepts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground border border-dashed border-ursa-line rounded-xl">
            No concepts match. Try a different filter or search term.
          </div>
        ) : (
          <Grid cols={3}>
            {filteredConcepts.map((c) => (
              <button
                key={c.id}
                onClick={() => setDialogConcept(c)}
                className="text-left bg-card border border-ursa-line-soft rounded-xl p-5 hover:border-ursa-gold hover:shadow-[0_8px_24px_-12px_rgba(59,36,23,0.28)] transition group flex flex-col gap-3 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-label text-[0.7rem] tracking-[0.18em] uppercase text-ursa-gold-text">
                    {c.id}
                  </span>
                  <Pill tone={formatTone(c.format)}>{c.format}</Pill>
                </div>
                <h3 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast leading-snug m-0">
                  {c.title}
                </h3>
                <p className="text-[0.85rem] text-muted-foreground leading-relaxed m-0 line-clamp-3">
                  {c.hook}
                </p>
                <span className="mt-auto text-[0.7rem] font-label tracking-[0.14em] uppercase text-ursa-gold-text opacity-0 group-hover:opacity-100 transition">
                  View details →
                </span>
              </button>
            ))}
          </Grid>
        )}

        <Dialog
          open={!!dialogConcept}
          onOpenChange={(o) => !o && setDialogConcept(null)}
        >
          <DialogContent className="sm:max-w-[560px]">
            {dialogConcept && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-label text-[0.7rem] tracking-[0.18em] uppercase text-ursa-gold-text">
                      {dialogConcept.id}
                    </span>
                    <Pill tone={formatTone(dialogConcept.format)}>
                      {dialogConcept.format}
                    </Pill>
                  </div>
                  <DialogTitle className="font-display text-[1.4rem] text-ursa-dark-roast">
                    {dialogConcept.title}
                  </DialogTitle>
                </DialogHeader>
                <div>
                  <div className="font-label text-[0.66rem] tracking-[0.18em] uppercase text-ursa-forest-deep mb-2">
                    The hook
                  </div>
                  <p className="text-[0.95rem] text-ursa-dark-roast leading-relaxed m-0">
                    {dialogConcept.hook}
                  </p>
                </div>
                <div className="bg-ursa-cream/60 rounded-lg p-4 border border-ursa-line-soft">
                  <div className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-muted-foreground mb-2">
                    How to use this concept
                  </div>
                  <ul className="text-[0.85rem] text-ursa-dark-roast space-y-1.5 list-disc pl-4 m-0">
                    <li>Film in-house with the baristas; no actors, no paid locations.</li>
                    <li>Lead with the hook in the first 2 seconds; brand the last frame only.</li>
                    <li>If a matching script exists, use it verbatim (caption + CTA in Peru Spanish).</li>
                    <li>Post on the cadence in the planner; measure for 48 hours before deciding.</li>
                  </ul>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setDialogConcept(null)}>
                    Close
                  </Button>
                  <Button
                    onClick={() => {
                      setDialogConcept(null);
                      navigate("viral");
                    }}
                  >
                    Open Module 05
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </ViewSection>

      {/* Section 03 — Script reader */}
      <ViewSection
        badge="Section 03"
        title="Script reader"
        meta="Beats · caption · CTA · copy"
      >
        <p className="text-[0.95rem] text-muted-foreground max-w-[68ch] mb-5">
          Every script with its beats (the edit), the Spanish caption (copy-paste ready),
          and the Spanish CTA. Captions and CTAs are posted verbatim — no translation, no
          adaptation.
        </p>
        <Accordion
          type="single"
          collapsible
          className="bg-card border border-ursa-line-soft rounded-xl px-5"
        >
          {SCRIPTS.map((s) => {
            const concept = conceptById(s.concept);
            return (
              <AccordionItem key={s.id} value={s.id} className="border-0">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-4 flex-1 text-left">
                    <span className="font-label text-[0.7rem] tracking-[0.18em] uppercase text-ursa-gold-text mt-1 shrink-0">
                      {s.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-[1.1rem] font-semibold text-ursa-dark-roast leading-snug">
                        {s.title}
                      </div>
                      <div className="text-[0.88rem] text-muted-foreground mt-1">
                        {s.hook}
                      </div>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <Pill tone="default">{s.duration}</Pill>
                        {concept && (
                          <Pill tone={formatTone(concept.format)}>
                            {concept.format}
                          </Pill>
                        )}
                        <Pill tone="forest">Linked: {s.concept}</Pill>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-6 pt-2">
                    <div>
                      <div className="font-label text-[0.66rem] tracking-[0.18em] uppercase text-ursa-forest-deep mb-3">
                        Beats
                      </div>
                      <ol className="list-none space-y-2.5 m-0 p-0">
                        {s.beats.map((b, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-[0.95rem] leading-relaxed"
                          >
                            <span className="font-display font-semibold text-ursa-gold-text w-6 shrink-0 text-base">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-ursa-dark-roast">{b}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="bg-ursa-dark-roast text-ursa-cream rounded-lg p-4 border border-ursa-espresso">
                        <div className="flex items-center justify-between mb-2 gap-2">
                          <div className="font-label text-[0.66rem] tracking-[0.18em] uppercase text-ursa-gold-text-soft">
                            Caption · ES Peru
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 text-ursa-gold-text-soft hover:text-ursa-cream hover:bg-ursa-espresso/40"
                            onClick={() => copyCaption(s.id, s.caption)}
                          >
                            {copiedId === s.id ? (
                              <>
                                <Check size={14} className="mr-1" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy size={14} className="mr-1" />
                                Copy caption
                              </>
                            )}
                          </Button>
                        </div>
                        <p className="font-body text-[1rem] leading-relaxed m-0">
                          {s.caption}
                        </p>
                      </div>
                      <div className="bg-ursa-dark-roast text-ursa-cream rounded-lg p-4">
                        <div className="font-label text-[0.66rem] tracking-[0.18em] uppercase text-ursa-leaf mb-2">
                          CTA · ES Peru
                        </div>
                        <p className="font-body text-[1rem] leading-relaxed m-0">
                          {s.cta}
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </ViewSection>

      <ArtNouveauDivider />

      {/* Section 04 — Interactive weekly planner */}
      <ViewSection
        badge="Section 04"
        title="Interactive weekly planner"
        meta={`${totalAssigned} assignments · click any day`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <p className="text-[0.9rem] text-muted-foreground max-w-[64ch] m-0">
            Click any cell to open a concept picker. Pre-populated with a suggested 4-week
            schedule — Mon/Wed/Fri Reels, Tue/Thu Carousels, Sat Event/UGC, Sun Stories.
          </p>
          <Button variant="outline" size="sm" onClick={resetPlanner}>
            <ClipboardList size={14} className="mr-2" />
            Reset to suggested
          </Button>
        </div>

        <div className="bg-card border border-ursa-line-soft rounded-xl p-4 md:p-6 overflow-x-auto">
          <div className="grid grid-cols-7 gap-2 min-w-[680px]">
            {DAYS.map((d) => (
              <div
                key={d}
                className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-ursa-medium-roast text-center pb-2 border-b border-ursa-line-soft"
              >
                {d}
              </div>
            ))}
            {[...Array(WEEKS)].map((_, w) =>
              DAYS.map((_, d) => {
                const key = `${w}-${d}`;
                const ids = assignments[key] ?? [];
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setPlannerDay(key);
                      setPlannerFilter("All");
                      setPlannerQuery("");
                    }}
                    className="text-left rounded-lg p-2.5 border min-h-[110px] flex flex-col gap-1.5 hover:border-ursa-gold hover:shadow-[0_4px_12px_-4px_rgba(59,36,23,0.2)] transition bg-ursa-cream/30 cursor-pointer"
                    style={{
                      borderColor:
                        ids.length > 0
                          ? "var(--color-ursa-line)"
                          : "var(--color-ursa-line-soft)",
                      borderStyle: ids.length > 0 ? "solid" : "dashed",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
                        W{w + 1} · {DAYS[d]}
                      </span>
                      {ids.length > 0 && (
                        <span className="font-label text-[0.55rem] tracking-[0.1em] uppercase text-ursa-gold-text">
                          {ids.length}
                        </span>
                      )}
                    </div>
                    {ids.length === 0 ? (
                      <span className="text-[0.7rem] text-muted-foreground italic mt-auto">
                        + add concept
                      </span>
                    ) : (
                      <div className="flex flex-col gap-1 mt-auto">
                        {ids.slice(0, 3).map((id) => {
                          const c = conceptById(id);
                          if (!c) return null;
                          return (
                            <div
                              key={id}
                              className="text-[0.72rem] leading-tight line-clamp-2"
                            >
                              <span className="font-label text-[0.55rem] text-ursa-gold-text mr-1">
                                {c.id}
                              </span>
                              <span className="text-ursa-dark-roast">{c.title}</span>
                            </div>
                          );
                        })}
                        {ids.length > 3 && (
                          <span className="text-[0.65rem] text-muted-foreground">
                            +{ids.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </button>
                );
              })
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-ursa-line-soft text-[0.78rem] text-muted-foreground">
            <strong className="text-ursa-dark-roast">Tip:</strong> a day can hold more than
            one concept (e.g. a Reel + a Story). Use the concept picker to stack them.
          </div>
        </div>

        {/* Planner day dialog */}
        <Dialog
          open={!!plannerDay}
          onOpenChange={(o) => !o && setPlannerDay(null)}
        >
          <DialogContent className="sm:max-w-[640px] max-h-[88vh] overflow-hidden flex flex-col">
            {plannerDay && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-display text-[1.3rem] text-ursa-dark-roast">
                    Week {plannerWeekNum + 1} · {DAYS[plannerDayNum]}
                  </DialogTitle>
                  <DialogDescription>
                    Toggle concepts to assign. Currently {dayAssignments.length}{" "}
                    assigned.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col sm:flex-row gap-2 mb-3">
                  <div className="relative flex-1">
                    <Search
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      placeholder="Search concepts…"
                      value={plannerQuery}
                      onChange={(e) => setPlannerQuery(e.target.value)}
                      className="pl-9 h-8"
                    />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {FILTERS.map((f) => (
                      <button
                        key={f}
                        onClick={() => setPlannerFilter(f)}
                        className={cn(
                          "font-label text-[0.6rem] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border transition",
                          plannerFilter === f
                            ? "bg-ursa-dark-roast text-ursa-cream border-ursa-dark-roast"
                            : "bg-card text-ursa-medium-roast border-ursa-line hover:border-ursa-gold"
                        )}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="overflow-y-auto flex-1 -mx-1 px-1 space-y-1.5 max-h-[50vh]">
                  {plannerFiltered.map((c) => {
                    const checked = dayAssignments.includes(c.id);
                    return (
                      <button
                        key={c.id}
                        onClick={() => toggleConcept(c.id)}
                        className={cn(
                          "w-full text-left flex items-start gap-3 rounded-lg p-3 border transition cursor-pointer",
                          checked
                            ? "border-ursa-gold bg-ursa-gold/10"
                            : "border-ursa-line-soft hover:border-ursa-gold/60"
                        )}
                      >
                        <div
                          className={cn(
                            "mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0",
                            checked
                              ? "bg-ursa-gold border-ursa-gold"
                              : "border-ursa-line"
                          )}
                        >
                          {checked && (
                            <Check size={12} className="text-ursa-dark-roast" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                            <span className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-ursa-gold-text">
                              {c.id}
                            </span>
                            <Pill
                              tone={formatTone(c.format)}
                              className="text-[0.55rem] px-1.5 py-0.5"
                            >
                              {c.format}
                            </Pill>
                          </div>
                          <div className="text-[0.9rem] font-medium text-ursa-dark-roast leading-snug">
                            {c.title}
                          </div>
                          <div className="text-[0.78rem] text-muted-foreground leading-snug line-clamp-2">
                            {c.hook}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <DialogFooter>
                  <Button variant="ghost" onClick={clearDay}>
                    <Trash2 size={14} className="mr-2" />
                    Clear day
                  </Button>
                  <Button onClick={() => setPlannerDay(null)}>Done</Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </ViewSection>

      {/* Section 05 — Series tracker */}
      <ViewSection
        badge="Section 05"
        title="Series tracker"
        meta="Log the last-posted date"
      >
        <p className="text-[0.9rem] text-muted-foreground max-w-[64ch] mb-5">
          The three repeatable series live or die on cadence. Use this log to record the
          last time each was posted — anything older than its cadence is flagged overdue.
        </p>
        <Grid cols={3}>
          {REPEATABLE_SERIES.map((s) => {
            const lastPosted = seriesLog[s.name] ?? "";
            const overdue = (() => {
              if (!lastPosted) return true;
              const cadenceDays = s.cadence
                .toLowerCase()
                .includes("daily")
                ? 1
                : 7;
              const d = new Date(lastPosted);
              const diff = Math.floor(
                (Date.now() - d.getTime()) / (1000 * 60 * 60 * 24)
              );
              return diff > cadenceDays;
            })();
            return (
              <Card key={s.name} className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <Pill
                    tone={s.cadence.toLowerCase().includes("daily") ? "forest" : "warn"}
                  >
                    {s.cadence}
                  </Pill>
                  <Pill tone={overdue ? "stop" : "ok"}>
                    {overdue ? "Overdue" : "On cadence"}
                  </Pill>
                </div>
                <h3 className="font-display text-[1.1rem] font-semibold text-ursa-dark-roast m-0">
                  {s.name}
                </h3>
                <p className="text-[0.85rem] text-muted-foreground leading-relaxed m-0">
                  {s.concept}
                </p>
                <div className="border-t border-ursa-line-soft pt-3 mt-auto">
                  <div className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground mb-1.5">
                    Last posted
                  </div>
                  <Input
                    type="date"
                    value={lastPosted}
                    onChange={(e) =>
                      setSeriesLog((prev) => ({
                        ...prev,
                        [s.name]: e.target.value,
                      }))
                    }
                    className="h-9 text-[0.85rem]"
                  />
                  <div className="text-[0.7rem] text-muted-foreground mt-1.5">
                    {lastPosted
                      ? `Last: ${new Date(lastPosted).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}`
                      : "Not logged yet"}
                  </div>
                </div>
              </Card>
            );
          })}
        </Grid>

        <Callout tone="gold" title="Cadence is the strategy">
          A series earns its place by being predictable — the audience learns to expect it.
          One missed week costs two weeks of recovery. If a series slips twice in a month,
          retire it and replace with a new concept from the library.
        </Callout>
      </ViewSection>

      {/* Closing */}
      <ViewSection className="border-b-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-4">
            <BearMark size={40} className="text-ursa-dark-roast shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-[1.4rem] font-semibold text-ursa-dark-roast mb-2 m-0">
                Full viral content dossier
              </h3>
              <p className="text-[0.9rem] text-muted-foreground max-w-[58ch] m-0">
                This tool complements Module 05. Open the printable HTML for the complete
                concepts, scripts, briefs, UGC mechanisms, and amplification method.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start md:items-end">
            <DossierLinkBanner moduleId="05-viral-content-laboratory" />
            <button
              onClick={() => navigate("viral")}
              className="inline-flex items-center gap-2 text-[0.8rem] text-ursa-gold-text hover:text-ursa-dark-roast transition font-label tracking-[0.12em] uppercase"
            >
              Back to Module 05
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </ViewSection>
    </>
  );
}
