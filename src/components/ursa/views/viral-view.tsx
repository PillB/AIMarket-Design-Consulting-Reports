"use client";

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
  CREATOR_BRIFS,
  UGC_MECHANISMS,
} from "@/lib/ursa-data";
import { useNavigate } from "@/lib/ursa-nav";
import { useI18n } from "@/hooks/use-i18n";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Sparkles,
  TrendingUp,
  XCircle,
  PlayCircle,
  Repeat,
  Users,
  ArrowRight,
  Film,
  LayoutGrid,
  CalendarDays,
  Megaphone,
  HandHeart,
  Clapperboard,
} from "lucide-react";

type ConceptFormat = string;

function formatTone(
  format: ConceptFormat
): "default" | "forest" | "gold" | "warn" | "stop" | "ok" {
  const f = format.toLowerCase();
  if (f.includes("carousel")) return "gold";
  if (f.includes("series") || f.includes("story")) return "warn";
  if (f.includes("ugc")) return "stop";
  if (f.includes("event")) return "ok";
  if (f.includes("reel")) return "forest";
  return "default";
}

/** Pick an icon that signals the content format visually. */
function FormatIcon({ format, className }: { format: string; className?: string }) {
  const f = format.toLowerCase();
  if (f.includes("carousel")) return <LayoutGrid size={14} className={className} />;
  if (f.includes("series")) return <Repeat size={14} className={className} />;
  if (f.includes("story")) return <Sparkles size={14} className={className} />;
  if (f.includes("ugc")) return <HandHeart size={14} className={className} />;
  if (f.includes("event")) return <Megaphone size={14} className={className} />;
  if (f.includes("reel")) return <Film size={14} className={className} />;
  return <Clapperboard size={14} className={className} />;
}

const WEEKS = 4;
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Pre-populated 4-week pilot calendar — Mon/Wed/Fri Reels, Tue/Thu Carousels,
// Sat Event/UGC, Sun rest. Daily Stories (Bear's Morning Ritual) run every day
// alongside the featured concept.
const SCHEDULE: { week: number; day: number; conceptId: string }[] = [
  // Week 1
  { week: 0, day: 0, conceptId: "C01" },
  { week: 0, day: 1, conceptId: "C10" },
  { week: 0, day: 2, conceptId: "C03" },
  { week: 0, day: 3, conceptId: "C04" },
  { week: 0, day: 4, conceptId: "C05" },
  { week: 0, day: 5, conceptId: "C15" },
  // Week 2
  { week: 1, day: 0, conceptId: "C09" },
  { week: 1, day: 1, conceptId: "C26" },
  { week: 1, day: 2, conceptId: "C06" },
  { week: 1, day: 3, conceptId: "C11" },
  { week: 1, day: 4, conceptId: "C13" },
  { week: 1, day: 5, conceptId: "C16" },
  // Week 3
  { week: 2, day: 0, conceptId: "C14" },
  { week: 2, day: 1, conceptId: "C21" },
  { week: 2, day: 2, conceptId: "C18" },
  { week: 2, day: 3, conceptId: "C12" },
  { week: 2, day: 4, conceptId: "C22" },
  { week: 2, day: 5, conceptId: "C07" },
  // Week 4
  { week: 3, day: 0, conceptId: "C19" },
  { week: 3, day: 1, conceptId: "C24" },
  { week: 3, day: 2, conceptId: "C25" },
  { week: 3, day: 3, conceptId: "C08" },
  { week: 3, day: 4, conceptId: "C20" },
  { week: 3, day: 5, conceptId: "C23" },
];

function conceptById(id: string) {
  return CONTENT_CONCEPTS.find((c) => c.id === id);
}

export function ViralView() {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <>
      <ViewHero
        eyebrow={t("content.view.viral.eyebrow")}
        title={<>{t("content.view.viral.title")}</>}
        lede={
          <>
            Twenty-six content concepts and ten production-ready scripts — every one anchored in a verified Ursa asset: the named drinks, the in-house roastery, the bear mark, and Alcanfores 183. Built to learn cheaply, not to chase virality.
          </>
        }
        meta={[
          { label: "Concepts", value: "26" },
          { label: "Scripts", value: "10" },
          { label: "Series", value: "3" },
          { label: "Pilot", value: "4 weeks" },
        ]}
      />

      {/* Disclaimer callout — prominent, immediately under hero */}
      <ViewSection className="border-b-0 pt-0 -mt-2">
        <Callout tone="stop" title="A disclaimer before we start">
          <strong>Virality is not guaranteed.</strong> This system is designed to{" "}
          <em>learn cheaply</em>: post small, measure honestly, amplify what works, and
          kill what doesn&apos;t. No agency retainers, no bought followers, no fabricated
          reactions — only the bear, the bar, and the data we earn.
        </Callout>
      </ViewSection>

      {/* Section 01 — 26 content concepts */}
      <ViewSection
        badge="Section 01"
        title="The 26 content concepts"
        meta="Browse · assign · reuse"
      >
        <p className="text-[0.95rem] text-muted-foreground max-w-[68ch] mb-6">
          Each concept is small, filmable in-house, and rooted in a real Ursa detail — a
          named drink, the weighing ritual, a Miraflores landmark, or the bear itself.
          None require paid actors; all can be shot on a phone in under an hour.
        </p>
        <Grid cols={3}>
          {CONTENT_CONCEPTS.map((c) => (
            <Card key={c.id} className="p-5 flex flex-col gap-3 group relative overflow-hidden">
              {/* Top accent bar colored by format tone */}
              <span
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background:
                    formatTone(c.format) === "forest" ? "var(--color-ursa-forest-deep)" :
                    formatTone(c.format) === "gold" ? "var(--color-ursa-gold)" :
                    formatTone(c.format) === "warn" ? "linear-gradient(90deg,var(--color-ursa-gold),var(--color-ursa-terracotta))" :
                    formatTone(c.format) === "stop" ? "var(--color-ursa-terracotta)" :
                    formatTone(c.format) === "ok" ? "var(--color-ursa-forest)" :
                    "var(--color-ursa-line)",
                }}
              />
              <div className="flex items-start justify-between gap-2">
                <span className="font-label text-[0.7rem] tracking-[0.18em] uppercase text-ursa-gold">
                  {c.id}
                </span>
                <Pill tone={formatTone(c.format)}>
                  <FormatIcon format={c.format} className="shrink-0" />
                  {c.format}
                </Pill>
              </div>
              <h3 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast leading-snug">
                {c.title}
              </h3>
              <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
                {c.hook}
              </p>
            </Card>
          ))}
        </Grid>
      </ViewSection>

      {/* Section 02 — 10 complete scripts */}
      <ViewSection
        badge="Section 02"
        title="Ten production-ready scripts"
        meta="Beats · Spanish caption · CTA"
      >
        <p className="text-[0.95rem] text-muted-foreground max-w-[68ch] mb-6">
          Each script is filmed in the café by the baristas themselves. The beats are the
          edit; the Spanish caption and CTA are customer-facing and posted verbatim (Peru
          Spanish). Hook first, brand last.
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
                    <span className="font-label text-[0.7rem] tracking-[0.18em] uppercase text-ursa-gold mt-1 shrink-0">
                      {s.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast leading-snug">
                        {s.title}
                      </div>
                      <div className="text-[0.82rem] text-muted-foreground mt-0.5">
                        {s.hook}
                      </div>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <Pill tone="default">{s.duration}</Pill>
                        {concept && (
                          <Pill tone={formatTone(concept.format)}>
                            {concept.format}
                          </Pill>
                        )}
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
                            className="flex gap-3 text-[0.92rem] leading-relaxed"
                          >
                            <span className="font-display font-semibold text-ursa-gold w-6 shrink-0 text-base">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-ursa-dark-roast">{b}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="bg-ursa-dark-roast text-ursa-cream rounded-lg p-4 border border-ursa-espresso">
                        <div className="font-label text-[0.66rem] tracking-[0.18em] uppercase text-ursa-gold-soft mb-2">
                          Caption · ES (Peru) · customer-facing
                        </div>
                        <p className="font-body text-[0.95rem] leading-relaxed m-0">
                          {s.caption}
                        </p>
                      </div>
                      <div className="bg-ursa-forest-deep text-ursa-cream rounded-lg p-4">
                        <div className="font-label text-[0.66rem] tracking-[0.18em] uppercase text-ursa-leaf mb-2">
                          CTA · ES (Peru) · customer-facing
                        </div>
                        <p className="font-body text-[0.95rem] leading-relaxed m-0">
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

      {/* Section 03 — 3 repeatable series */}
      <ViewSection
        badge="Section 03"
        title="Three repeatable series"
        meta="Rhythm beats one-offs"
      >
        <Grid cols={3}>
          {REPEATABLE_SERIES.map((s) => (
            <Card key={s.name} className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <Repeat size={20} className="text-ursa-forest-deep" />
                <Pill tone={s.cadence.toLowerCase().includes("daily") ? "forest" : "warn"}>
                  {s.cadence}
                </Pill>
              </div>
              <h3 className="font-display text-[1.15rem] font-semibold text-ursa-dark-roast m-0">
                {s.name}
              </h3>
              <p className="text-[0.88rem] text-muted-foreground leading-relaxed m-0">
                {s.concept}
              </p>
              <div className="border-t border-ursa-line-soft pt-3 mt-auto">
                <div className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-muted-foreground mb-0.5">
                  Episodes
                </div>
                <div className="text-[0.85rem] text-ursa-dark-roast">{s.episodes}</div>
              </div>
            </Card>
          ))}
        </Grid>
      </ViewSection>

      {/* Section 04 — 3 creator briefs */}
      <ViewSection
        badge="Section 04"
        title="Three creator briefs"
        meta="Briefs, not briefcases"
      >
        <p className="text-[0.95rem] text-muted-foreground max-w-[68ch] mb-6">
          Three creator archetypes, briefed with the same assets and the same rules: lead
          with the bear, the craft, or the subscription — never with a discount. The metric
          is the only thing that matters; follower count is a proxy, not the goal.
        </p>
        <Grid cols={3}>
          {CREATOR_BRIFS.map((b) => (
            <Card key={b.name} className="flex flex-col gap-3 p-6">
              <h3 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast leading-snug m-0">
                {b.name}
              </h3>
              <BriefRow label="Objective" value={b.objective} />
              <BriefRow label="Deliverable" value={b.deliverable} />
              <BriefRow label="Key message" value={b.keyMessage} />
              <BriefRow label="Assets provided" value={b.assetsProvided} />
              <div className="border-t border-ursa-gold/30 bg-ursa-gold/10 -mx-6 -mb-6 px-6 py-3 rounded-b-xl mt-auto">
                <div className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-ursa-medium-roast mb-0.5">
                  Metric
                </div>
                <div className="text-[0.88rem] text-ursa-dark-roast font-medium">
                  {b.metric}
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      </ViewSection>

      {/* Section 05 — 3 UGC mechanisms */}
      <ViewSection
        badge="Section 05"
        title="Three UGC mechanisms"
        meta="Consent first · always"
      >
        <Grid cols={3}>
          {UGC_MECHANISMS.map((u) => (
            <Card key={u.name} className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <Users size={20} className="text-ursa-terracotta" />
                <Pill tone="stop">UGC</Pill>
              </div>
              <h3 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast m-0">
                {u.name}
              </h3>
              <p className="text-[0.88rem] text-muted-foreground leading-relaxed m-0">
                {u.mechanism}
              </p>
              <div className="border-l-2 border-ursa-terracotta pl-3 bg-ursa-terracotta/5 py-2 rounded-r">
                <div className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-ursa-terracotta mb-1">
                  Consent
                </div>
                <p className="text-[0.82rem] text-ursa-dark-roast leading-snug m-0">
                  {u.consent}
                </p>
              </div>
            </Card>
          ))}
        </Grid>
      </ViewSection>

      <ArtNouveauDivider />

      {/* Section 06 — Four-week pilot calendar */}
      <ViewSection
        badge="Section 06"
        title="The four-week pilot calendar"
        meta="One concept per day · daily Stories"
      >
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-muted-foreground">
            Format key:
          </span>
          <Pill tone="forest">Reel</Pill>
          <Pill tone="gold">Carousel</Pill>
          <Pill tone="warn">Series</Pill>
          <Pill tone="stop">UGC</Pill>
          <Pill tone="ok">Event</Pill>
        </div>

        <div className="bg-card border border-ursa-line-soft rounded-xl p-4 md:p-6 overflow-x-auto ursa-scroll">
          <div className="grid grid-cols-7 gap-1.5 md:gap-2 min-w-[680px]">
            {DAYS.map((d) => (
              <div
                key={d}
                className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-ursa-medium-roast text-center pb-2 border-b-2 border-ursa-gold/30"
              >
                {d}
              </div>
            ))}
            {[...Array(WEEKS)].map((_, w) =>
              DAYS.map((_, d) => {
                const entry = SCHEDULE.find((s) => s.week === w && s.day === d);
                const concept = entry ? conceptById(entry.conceptId) : undefined;
                // Add a subtle week separator after Sunday (last day of each week row)
                const isWeekEnd = d === 6;
                if (concept) {
                  const tone = formatTone(concept.format);
                  const toneBg: Record<string, string> = {
                    forest: "bg-ursa-forest-deep/8 border-ursa-forest-deep/30",
                    gold: "bg-ursa-gold/15 border-ursa-gold/40",
                    warn: "bg-ursa-gold-soft/20 border-ursa-gold/40",
                    stop: "bg-ursa-terracotta/8 border-ursa-terracotta/30",
                    ok: "bg-ursa-forest/10 border-ursa-forest-deep/30",
                    default: "bg-muted border-ursa-line-soft",
                  };
                  return (
                    <div
                      key={`${w}-${d}`}
                      className={`rounded-lg p-2.5 border ${toneBg[tone]} min-h-[100px] flex flex-col gap-1 transition hover:shadow-md hover:-translate-y-0.5 ${isWeekEnd ? "mr-2 md:mr-3" : ""} group cursor-default`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
                          W{w + 1} · {DAYS[d]}
                        </span>
                        <span className="font-label text-[0.6rem] tracking-[0.1em] uppercase text-ursa-gold">
                          {concept.id}
                        </span>
                      </div>
                      <div className="text-[0.78rem] font-medium text-ursa-dark-roast leading-snug">
                        {concept.title}
                      </div>
                      <div className="mt-auto flex items-center gap-1">
                        <FormatIcon format={concept.format} className="text-muted-foreground" />
                        <span className="font-label text-[0.55rem] tracking-[0.08em] uppercase text-muted-foreground">
                          {concept.format.split(" ")[0]}
                        </span>
                      </div>
                    </div>
                  );
                }
                // Empty cell — rest day, Stories only
                return (
                  <div
                    key={`${w}-${d}`}
                    className={`rounded-lg p-2.5 border border-dashed border-ursa-line min-h-[100px] flex flex-col items-center justify-center gap-1 bg-ursa-cream/40 ${isWeekEnd ? "mr-2 md:mr-3" : ""}`}
                  >
                    <span className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
                      W{w + 1} · {DAYS[d]}
                    </span>
                    <span className="text-[0.7rem] text-muted-foreground italic text-center">
                      Rest day · Stories only
                    </span>
                  </div>
                );
              })
            )}
          </div>
          <div className="mt-4 pt-3 border-t border-ursa-line-soft flex items-center gap-2 text-[0.78rem] text-muted-foreground">
            <BearMark size={18} className="text-ursa-gold" />
            <span>
              <strong className="text-ursa-dark-roast">Every day:</strong> Bear&apos;s
              Morning Ritual runs in Stories (C17) alongside the featured concept. Two Reels
              per week is the maximum sustainable pace for one barista with a phone.
            </span>
          </div>
        </div>

        <Callout tone="gold" title="Why this cadence">
          Mon/Wed/Fri = Reels (the discovery engine). Tue/Thu = Carousels (saves and
          shares). Sat = Event or UGC (the human moment). Sundays = rest + Bear&apos;s
          Morning Ritual in Stories. The cadence is deliberately slower than what agencies
          recommend — we are buying data, not impressions.
        </Callout>
      </ViewSection>

      {/* Section 07 — Test & amplification method */}
      <ViewSection
        badge="Section 07"
        title="The test & amplification method"
        meta="48h · 2× · 3× · kill at 14d"
      >
        <p className="text-[0.95rem] text-muted-foreground max-w-[68ch] mb-6">
          Every post has a 48-hour window. We don&apos;t optimise for likes. We optimise for{" "}
          <strong>saves</strong>, <strong>shares</strong>, and{" "}
          <strong>profile visits</strong> — the only signals that predict a future
          customer.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <MethodStep
            n="01"
            title="Post & wait 48h"
            body="Post on the cadence above. Measure saves, shares, and profile visits in the first 48 hours. Establish a rolling baseline after the first 6 posts."
            tone="forest"
            icon={<PlayCircle size={18} />}
          />
          <MethodStep
            n="02"
            title="2× baseline → boost"
            body="If a post beats the baseline by 2×, boost it with S/. 50–150 paid. Stop spend when cost-per-save exceeds S/. 4."
            tone="gold"
            icon={<TrendingUp size={18} />}
          />
          <MethodStep
            n="03"
            title="3× baseline → commission"
            body="If a post beats the baseline by 3×, commission a follow-up within 7 days: same character, same format, a new angle. The bear just gave you a hit — make another."
            tone="warn"
            icon={<Sparkles size={18} />}
          />
          <MethodStep
            n="04"
            title="Below baseline at 14d → kill"
            body="Anything below baseline after 14 days is killed — no second guesses, no boosting. Replace with a new concept from the 26."
            tone="stop"
            icon={<XCircle size={18} />}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Card className="p-5">
            <StatBlock
              value="48h"
              label="Window to measure saves / shares / profile visits"
              tone="forest"
            />
          </Card>
          <Card className="p-5">
            <StatBlock
              value="S/. 50–150"
              label="Paid boost budget per 2× winner"
              tone="gold"
            />
          </Card>
          <Card className="p-5">
            <StatBlock
              value="14d"
              label="Kill threshold for sub-baseline posts"
              tone="terracotta"
            />
          </Card>
        </div>

        <Callout tone="forest" title="What we don't measure">
          Likes. Follower count. Reach. These are vanity metrics that don&apos;t predict a
          customer walking into Alcanfores 183. Saves, shares, profile visits, and
          directions clicks do.
        </Callout>
      </ViewSection>

      {/* Closing — Dossier link banner + cross-link to interactive planner */}
      <ViewSection className="border-b-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-4">
            <BearMark size={40} className="text-ursa-dark-roast shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-[1.4rem] font-semibold text-ursa-dark-roast mb-2 m-0">
                The full viral dossier
              </h3>
              <p className="text-[0.9rem] text-muted-foreground max-w-[58ch] m-0">
                Open the printable HTML for the complete Module 05 — concepts, scripts,
                series, briefs, UGC mechanisms, the pilot calendar, and the amplification
                method.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start md:items-end">
            <DossierLinkBanner moduleId="05-viral-content-laboratory" />
            <button
              onClick={() => navigate("content-calendar")}
              className="inline-flex items-center gap-2 text-[0.8rem] text-ursa-gold hover:text-ursa-dark-roast transition font-label tracking-[0.12em] uppercase"
            >
              Open the interactive Content Calendar tool
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </ViewSection>
    </>
  );
}

function BriefRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground mb-0.5">
        {label}
      </div>
      <div className="text-[0.85rem] text-ursa-dark-roast leading-snug">{value}</div>
    </div>
  );
}

function MethodStep({
  n,
  title,
  body,
  tone,
  icon,
}: {
  n: string;
  title: string;
  body: string;
  tone: "forest" | "gold" | "warn" | "stop";
  icon: React.ReactNode;
}) {
  const tones: Record<string, string> = {
    forest: "border-ursa-forest-deep/40 bg-ursa-forest-deep/5",
    gold: "border-ursa-gold/50 bg-ursa-gold/8",
    warn: "border-ursa-gold-soft bg-ursa-gold-soft/15",
    stop: "border-ursa-terracotta/40 bg-ursa-terracotta/8",
  };
  const iconTones: Record<string, string> = {
    forest: "text-ursa-forest-deep",
    gold: "text-ursa-gold",
    warn: "text-ursa-medium-roast",
    stop: "text-ursa-terracotta",
  };
  return (
    <div
      className={`rounded-lg border-2 p-5 flex flex-col gap-2 ${tones[tone]}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-[1.8rem] font-semibold leading-none text-ursa-dark-roast">
          {n}
        </span>
        <span className={iconTones[tone]}>{icon}</span>
      </div>
      <h3 className="font-display text-[1rem] font-semibold text-ursa-dark-roast m-0">
        {title}
      </h3>
      <p className="text-[0.82rem] text-ursa-dark-roast leading-relaxed m-0">{body}</p>
    </div>
  );
}
