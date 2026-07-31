"use client";

import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import {
  BearMark,
  ArtNouveauDivider,
  Pill,
  Callout,
  StatBlock,
  SectionBadge,
  EvidenceTag,
  ProgressBar,
} from "../ursa-brand";
import { ROADMAP, TWELVE_MONTH_ROADMAP, BUDGET_SCENARIOS } from "@/lib/ursa-data";
import { useNavigate } from "@/lib/ursa-nav";
import {
  ArrowRight,
  Calendar,
  Trophy,
  Target,
  Crosshair,
  History,
  Shield,
  Users,
  Banknote,
  Zap,
  Sparkles,
  Flag,
  Map as MapIcon,
  Beaker,
  Coffee,
  Megaphone,
  Truck,
  Package,
  Store,
  Briefcase,
  CircleDot,
} from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const PEN = (n: number) => `S/. ${n.toLocaleString("en-US")}`;

// ---- Phase metadata ----------------------------------------------------------
type PhaseMeta = {
  badge: string;
  icon: React.ReactNode;
  tone: "terracotta" | "gold" | "forest";
  accentBorder: string;
  accentBg: string;
  dot: string;
  intro: string;
};

const PHASE_META: PhaseMeta[] = [
  {
    badge: "Hours 0 → 72",
    icon: <Zap size={18} className="text-ursa-terracotta" />,
    tone: "terracotta",
    accentBorder: "border-ursa-terracotta/40",
    accentBg: "bg-ursa-terracotta/6",
    dot: "bg-ursa-terracotta",
    intro:
      "The first move is not a campaign — it is housekeeping. Claim every digital surface Ursa already owns, photograph what is real, and arm the bar with the smallest pieces of story-card furniture. Do these five things in the first three days, before anything else.",
  },
  {
    badge: "Day 1 → 30",
    icon: <Calendar size={18} className="text-ursa-gold" />,
    tone: "gold",
    accentBorder: "border-ursa-gold/50",
    accentBg: "bg-ursa-gold/6",
    dot: "bg-ursa-gold",
    intro:
      "Month one is owned channels and the lowest-cost experiments. The Gram of the Week series goes live; the first eight Reels ship; hotel concierge cards land at eight nearby properties. Review experiments 01–05 at day 21 — graduate, kill, or extend.",
  },
  {
    badge: "Day 31 → 60",
    icon: <Target size={18} className="text-ursa-forest-deep" />,
    tone: "forest",
    accentBorder: "border-ursa-forest-deep/40",
    accentBg: "bg-ursa-forest-deep/6",
    dot: "bg-ursa-forest-deep",
    intro:
      "Month two turns on paid social and the creator pilot. The first cupping night runs; Rappi is re-photographed and bundled; the Ursa Mañana subscription waitlist opens. Nothing here should ship if month one's experiments all failed — check the stop rules first.",
  },
  {
    badge: "Day 61 → 90",
    icon: <Trophy size={18} className="text-ursa-forest-deep" />,
    tone: "forest",
    accentBorder: "border-ursa-forest-deep/60",
    accentBg: "bg-ursa-forest-deep/8",
    dot: "bg-ursa-forest-deep",
    intro:
      "Month three launches the subscription pilot, capped at 50 subscribers, and publishes the first quarterly origin report. Every experiment is graduated or killed. If a Growth budget is approved, B2B office sampling begins. Decide on Level-2 brand rollout only after the 90-day read.",
  },
];

// ---- Owners & dependencies ---------------------------------------------------
type Owner = {
  workstream: string;
  icon: React.ReactNode;
  owner: string;
  dependency: string;
  metric: string;
  stop: string;
};

const OWNERS: Owner[] = [
  {
    workstream: "Brand & Identity",
    icon: <Shield size={16} className="text-ursa-gold" />,
    owner: "Founder + fractional designer",
    dependency: "Original Art Nouveau asset pack + packaging",
    metric: "Unprompted bear recall (Miraflores visitors)",
    stop: "If recognition does not lift at day 90, audit the channels — not the bear.",
  },
  {
    workstream: "Content & Social",
    icon: <Megaphone size={16} className="text-ursa-gold" />,
    owner: "In-house content lead",
    dependency: "Phone/camera; Reel production capacity",
    metric: "Profile visits / week; saves per Reel",
    stop: "Pause any series whose 4-week average saves fall under 100.",
  },
  {
    workstream: "Paid Media",
    icon: <Crosshair size={16} className="text-ursa-gold" />,
    owner: "Fractional performance marketer",
    dependency: "Budget approval + Meta Business Manager",
    metric: "Cost per qualified visit; store-visit lift",
    stop: "Kill any channel that doesn't break CPA even inside 30 days.",
  },
  {
    workstream: "Creator Programme",
    icon: <Sparkles size={16} className="text-ursa-gold" />,
    owner: "Creator coordinator",
    dependency: "3-creator roster + clear briefs",
    metric: "Profile visits, directions clicks, CPM-equivalent",
    stop: "CPM above S/. 40 with no store-visit lift.",
  },
  {
    workstream: "Delivery (Rappi)",
    icon: <Truck size={16} className="text-ursa-gold" />,
    owner: "Operations lead",
    dependency: "Re-photography + bundle design",
    metric: "Delivery AOV; bundle share",
    stop: "No AOV lift in 30 days.",
  },
  {
    workstream: "Community & Events",
    icon: <Users size={16} className="text-ursa-gold" />,
    owner: "Head barista",
    dependency: "Cupping-night logistics + retail bean stock",
    metric: "Attendance; retail bean sales post-event",
    stop: "Attendance below 6 for 2 consecutive months.",
  },
  {
    workstream: "Retail Beans",
    icon: <Package size={16} className="text-ursa-gold" />,
    owner: "Roaster + barista",
    dependency: "Bean bag inventory + story cards",
    metric: "Retail bean units / week",
    stop: "Pause expansion if under 10 bags / week after 60 days.",
  },
  {
    workstream: "B2B & Wholesale",
    icon: <Briefcase size={16} className="text-ursa-gold" />,
    owner: "Founder + business development",
    dependency: "Office intros + sampling budget",
    metric: "Sampling → account conversion rate",
    stop: "Pause if conversion is under 10% after 30 offices sampled.",
  },
];

// ---- KPI dashboard -----------------------------------------------------------
type Kpi = {
  label: string;
  metric: string;
  baseline: string;
  target: string;
  note: string;
  tone: "forest" | "gold" | "terracotta";
};

const KPIS: Kpi[] = [
  {
    label: "Qualified awareness",
    metric: "Profile visits / week",
    baseline: "Unknown",
    target: "2,500",
    note: "Instagram + Google Business Profile + creator mentions, summed weekly.",
    tone: "forest",
  },
  {
    label: "Store visits",
    metric: "Monthly till transactions",
    baseline: "Unknown",
    target: "+15% MoM",
    note: "Baseline established in week 1 from the till. Re-measured at day 90.",
    tone: "gold",
  },
  {
    label: "Average ticket",
    metric: "S/. per transaction",
    baseline: "Unknown",
    target: "S/. 22",
    note: "Lift driven by side attach + named-drink prominence (EXP-04, EXP-05).",
    tone: "terracotta",
  },
  {
    label: "Repeat visits",
    metric: "% returning within 30 days",
    baseline: "Unknown",
    target: "25%",
    note: "Tracked via WhatsApp consent list + till recognition.",
    tone: "forest",
  },
  {
    label: "Referrals",
    metric: "Concierge code redemptions / mo",
    baseline: "Unknown",
    target: "8",
    note: "From hotel concierge cards + creator mention code-redemptions.",
    tone: "gold",
  },
  {
    label: "Distinctive brand recognition",
    metric: "Unprompted bear recall",
    baseline: "Unknown",
    target: "30%",
    note: "Survey among Miraflores visitors at day 90 — \"name a specialty café\".",
    tone: "terracotta",
  },
];

// ---- Skeptical revision log --------------------------------------------------
type Revision = {
  round: string;
  challenge: string;
  change: string;
  tone: "gold" | "forest" | "terracotta";
};

const REVISIONS: Revision[] = [
  {
    round: "Round 1",
    challenge: "Is the Ursa Mañana subscription viable at S/. 20 / month for unlimited coffee (7–10am)?",
    change:
      "Added a full cannibalization model in the Subscription Calculator (Module 08). Capped the pilot at 50 subscribers for 90 days. Hard stop rule: blended profit / subscriber must be ≥ 0 after 60 days, or kill.",
    tone: "gold",
  },
  {
    round: "Round 2",
    challenge: "Is the bear motif too childish for a specialty coffee audience?",
    change:
      "Confirmed as an asset, not a liability. The bear is geometric, Art-Nouveau-leaning, and uncontested in Lima's specialty scene. The bear-paw Reel trail is built to test that hypothesis with the first 30 days of tourist-engagement data; if signals are weak, the bear is refined, not retired. Bear stays — design effort goes to refinement, not replacement.",
    tone: "forest",
  },
  {
    round: "Round 3",
    challenge: "Is 90 days realistic for a paid + creator + subscription launch at the same time?",
    change:
      "Scoped down. First 30 days are owned channels only (GBP, WhatsApp, organic Reels, story cards, hotel cards). Paid + creator + Rappi optimisation only after day 30. Subscription pilot only after day 60. Conservative sequencing wins; parallel launches lose.",
    tone: "terracotta",
  },
];

// ---- 12-month roadmap accent map ---------------------------------------------
const QUARTER_ACCENT: { tone: "forest" | "gold" | "terracotta"; dot: string }[] = [
  { tone: "forest", dot: "bg-ursa-forest-deep" },
  { tone: "gold", dot: "bg-ursa-gold" },
  { tone: "terracotta", dot: "bg-ursa-terracotta" },
  { tone: "forest", dot: "bg-ursa-forest-deep" },
];

// ---- Budget scenario tones ---------------------------------------------------
const BUDGET_TONES: { tone: "forest" | "gold" | "terracotta"; ring: string }[] = [
  { tone: "forest", ring: "border-ursa-forest-deep/40" },
  { tone: "gold", ring: "border-ursa-gold/50" },
  { tone: "terracotta", ring: "border-ursa-terracotta/40" },
];

// ---- Component ---------------------------------------------------------------
export function RoadmapView() {
  const navigate = useNavigate();

  return (
    <>
      <ViewHero
        eyebrow="Module 07 · Implementation Roadmap & KPIs"
        tone="forest"
        title={
          <>
            An owned, not aspirational, 90-day plan — with owners, metrics, and stop rules.
          </>
        }
        lede={
          <>
            Every action below has a named owner, a primary metric, and a stopping rule. No
            workstream survives past its stop rule without a re-decision. The plan preserves the
            bear, the gram, and the green; total rebrand is off the table.
          </>
        }
        meta={[
          { label: "Phasing", value: "72h / 30 / 60 / 90 day plans" },
          { label: "Horizon", value: "12-month roadmap" },
          { label: "Governance", value: "Owners, metrics, stop rules" },
        ]}
      />

      {/* Section 1 — First 72 hours ============================================ */}
      <ViewSection
        badge="Section 01 · Urgency"
        title={<>First 72 hours — claim the surfaces Ursa already owns</>}
        meta={ROADMAP[0].phase}
      >
        <PhasePhase phase={ROADMAP[0]} meta={PHASE_META[0]} index={0} />

        <Callout tone="stop" title="Why these five, in this order">
          None of the five first-72-hour actions depends on a vendor, a budget approval, or a
          creative review. They are all things Ursa can do with the team and assets it already has.
          Anything that requires external approval (paid social, creator contracts, subscription
          build) waits until day 8.
        </Callout>
      </ViewSection>

      {/* Section 2 — 30-day plan =============================================== */}
      <ViewSection
        badge="Section 02 · Month one"
        title={<>30-day plan — owned channels live, first experiments running</>}
        meta={ROADMAP[1].phase}
      >
        <PhasePhase phase={ROADMAP[1]} meta={PHASE_META[1]} index={1} />
      </ViewSection>

      {/* Section 3 — 60-day plan =============================================== */}
      <ViewSection
        badge="Section 03 · Month two"
        title={<>60-day plan — paid + creator + cupping + Rappi optimisation</>}
        meta={ROADMAP[2].phase}
      >
        <PhasePhase phase={ROADMAP[2]} meta={PHASE_META[2]} index={2} />
      </ViewSection>

      {/* Section 4 — 90-day plan =============================================== */}
      <ViewSection
        badge="Section 04 · Month three"
        title={<>90-day plan — subscription pilot + first origin report + graduation calls</>}
        meta={ROADMAP[3].phase}
      >
        <PhasePhase phase={ROADMAP[3]} meta={PHASE_META[3]} index={3} />

        <Callout tone="ok" title="Day 90 graduation ritual">
          By the end of day 90, every experiment in the Experiment Tracker (T4) carries one of
          four statuses: <strong>Proposed</strong> (not yet run), <strong>Running</strong>,
          <strong> Passed</strong> (graduated to permanent), or <strong>Killed</strong> (stop rule
          hit). No experiment is allowed to linger without a status — that is how the plan stays
          owned, not aspirational.
        </Callout>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => navigate("experiments")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-forest-deep text-ursa-cream hover:bg-ursa-forest transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
          >
            <Beaker size={14} /> Open the Experiment Tracker
          </button>
          <button
            onClick={() => navigate("calculator")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ursa-gold/60 text-ursa-gold hover:bg-ursa-gold hover:text-ursa-dark-roast transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
          >
            <ArrowRight size={14} /> Model the subscription pilot
          </button>
        </div>
      </ViewSection>

      <ArtNouveauDivider />

      {/* Section 5 — 12-month innovation roadmap =============================== */}
      <ViewSection
        badge="Section 05 · Horizon"
        title={<>12-month innovation roadmap — themes by quarter</>}
        meta="Q1 → Q4"
      >
        <p className="text-[0.97rem] text-muted-foreground leading-relaxed max-w-[68ch] mb-6">
          Each quarter has a single dominant theme. The themes stack — Q2 does not undo Q1; Q3
          extends continuity; Q4 opens B2B and wholesale only after retail and community are
          stable. No theme is allowed to start before its predecessor has graduated its core
          experiments.
        </p>

        <Grid cols={4}>
          {TWELVE_MONTH_ROADMAP.map((q, i) => {
            const accent = QUARTER_ACCENT[i];
            return (
              <Card key={q.quarter} highlight={i === 0} className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-semibold text-ursa-dark-roast">
                    {q.quarter}
                  </span>
                  <span className={cn("h-2.5 w-2.5 rounded-full", accent.dot)} aria-hidden="true" />
                </div>
                <div>
                  <SectionBadge tone={accent.tone}>Theme</SectionBadge>
                  <h4 className="font-display text-lg font-semibold text-ursa-dark-roast mt-2 mb-1">
                    {q.theme}
                  </h4>
                  <p className="text-[0.86rem] text-muted-foreground leading-relaxed m-0">
                    {q.focus}
                  </p>
                </div>
                <div className="mt-auto pt-3 border-t border-ursa-line-soft">
                  <span className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground">
                    {i === 0 && "Foundations ship first"}
                    {i === 1 && "Distribution layer"}
                    {i === 2 && "Continuity layer"}
                    {i === 3 && "Commercial layer"}
                  </span>
                </div>
              </Card>
            );
          })}
        </Grid>

        <Callout tone="forest" title="Why a single theme per quarter">
          Specialty cafés fail growth programmes by running four initiatives in parallel and
          finishing none. One theme per quarter forces a re-decision at the boundary: graduate,
          kill, or extend. That is the discipline this roadmap is built around.
        </Callout>
      </ViewSection>

      {/* Section 6 — Budget scenarios summary ================================== */}
      <ViewSection
        badge="Section 06 · Budget"
        title={<>Budget scenarios — lean, moderate, growth in monthly PEN</>}
        meta="Pick the one you can sustain for 90 days"
      >
        <Grid cols={3}>
          {BUDGET_SCENARIOS.map((s, i) => {
            const tone = BUDGET_TONES[i];
            return (
              <Card
                key={s.name}
                highlight={i === 1}
                className={cn("flex flex-col gap-4", tone.ring)}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="font-display text-xl font-semibold text-ursa-dark-roast m-0">
                    {s.name}
                  </h4>
                  <Pill tone={tone.tone === "forest" ? "forest" : tone.tone === "gold" ? "gold" : "stop"}>
                    {i === 0 ? "Foundations" : i === 1 ? "Recommended" : "Stretch"}
                  </Pill>
                </div>

                <div>
                  <StatBlock
                    value={PEN(s.monthlyPEN)}
                    label="Monthly total"
                    tone={tone.tone}
                  />
                </div>

                <ProgressBar
                  value={Math.round((s.monthlyPEN / BUDGET_SCENARIOS[2].monthlyPEN) * 100)}
                  tone={tone.tone === "forest" ? "forest" : tone.tone === "gold" ? "gold" : "terracotta"}
                />

                <p className="text-[0.86rem] text-muted-foreground leading-relaxed m-0">
                  {s.focus}
                </p>

                <ul className="space-y-1 m-0 p-0 list-none text-[0.82rem] text-foreground/85">
                  {s.items.slice(0, 4).map((it) => (
                    <li key={it.item} className="flex items-baseline gap-2">
                      <CircleDot size={11} className="text-ursa-gold shrink-0 translate-y-0.5" />
                      <span className="flex-1">{it.item}</span>
                      <span className="font-label text-[0.66rem] tracking-wider text-muted-foreground uppercase">
                        {PEN(it.cost)}
                      </span>
                    </li>
                  ))}
                  {s.items.length > 4 && (
                    <li className="text-[0.78rem] text-muted-foreground italic pl-5">
                      + {s.items.length - 4} more line items
                    </li>
                  )}
                </ul>

                <div className="mt-auto pt-2">
                  <span className="font-label text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground">
                    {i === 0 && "Funds the 30-day plan"}
                    {i === 1 && "Funds the 60-day plan"}
                    {i === 2 && "Funds the 90-day plan"}
                  </span>
                </div>
              </Card>
            );
          })}
        </Grid>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => navigate("budget")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-gold text-ursa-dark-roast hover:bg-ursa-gold-soft transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
          >
            <Banknote size={14} /> Open the Budget Allocator
          </button>
          <button
            onClick={() => navigate("roi")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ursa-forest-deep/40 text-ursa-forest-deep hover:bg-ursa-forest-deep hover:text-ursa-cream transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
          >
            <Crosshair size={14} /> Model ROI per channel
          </button>
        </div>
      </ViewSection>

      {/* Section 7 — Owners & dependencies ===================================== */}
      <ViewSection
        badge="Section 07 · Governance"
        title={<>Owners & dependencies — every workstream has a name and a stop rule</>}
        meta="8 workstreams"
      >
        <p className="text-[0.97rem] text-muted-foreground leading-relaxed max-w-[68ch] mb-6">
          An action without an owner is a wish. An action without a stop rule is a habit. This
          table names both for the eight workstreams the 90-day plan touches.
        </p>

        <div className="overflow-x-auto rounded-xl border border-ursa-line-soft bg-card">
          <Table>
            <TableHeader>
              <TableRow className="bg-ursa-cream/60 hover:bg-ursa-cream/60">
                <TableHead className="font-label text-[0.64rem] tracking-[0.14em] uppercase text-ursa-medium-roast">Workstream</TableHead>
                <TableHead className="font-label text-[0.64rem] tracking-[0.14em] uppercase text-ursa-medium-roast">Owner role</TableHead>
                <TableHead className="font-label text-[0.64rem] tracking-[0.14em] uppercase text-ursa-medium-roast">Dependency</TableHead>
                <TableHead className="font-label text-[0.64rem] tracking-[0.14em] uppercase text-ursa-medium-roast">Primary metric</TableHead>
                <TableHead className="font-label text-[0.64rem] tracking-[0.14em] uppercase text-ursa-medium-roast">Stopping rule</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {OWNERS.map((o) => (
                <TableRow key={o.workstream} className="align-top">
                  <TableCell className="font-medium text-ursa-dark-roast">
                    <span className="inline-flex items-center gap-2">
                      <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ursa-gold/12 border border-ursa-gold/30">
                        {o.icon}
                      </span>
                      <span className="font-display text-[0.95rem]">{o.workstream}</span>
                    </span>
                  </TableCell>
                  <TableCell className="text-[0.86rem] text-foreground/85">{o.owner}</TableCell>
                  <TableCell className="text-[0.86rem] text-muted-foreground">{o.dependency}</TableCell>
                  <TableCell className="text-[0.86rem] text-ursa-forest-deep">{o.metric}</TableCell>
                  <TableCell className="text-[0.84rem] text-ursa-terracotta italic">{o.stop}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Callout tone="warn" title="What this table deliberately does not include">
          There is no <em> Marketing Director</em> row. The plan is built so a fractional
          performance marketer, an in-house content lead, and the founder can run it without a
          full-time marketing hire in the first 90 days. If the day-90 read shows momentum, hiring
          becomes a Q2 conversation — not a day-1 precondition.
        </Callout>
      </ViewSection>

      {/* Section 8 — KPI dashboard ============================================== */}
      <ViewSection
        badge="Section 08 · Targets"
        title={<>KPI dashboard — baseline (unknown) → 90-day target</>}
        meta="6 north-star metrics"
      >
        <p className="text-[0.97rem] text-muted-foreground leading-relaxed max-w-[68ch] mb-6">
          Every baseline below is honestly marked <em>Unknown</em>. The first week's job is to
          establish the baselines from the till, the WhatsApp list, and Google Business Profile.
          Targets are then read at day 90 — never sooner, so the team is not tempted to optimise
          for noise.
        </p>

        <Grid cols={3}>
          {KPIS.map((k) => (
            <Card key={k.label} className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast m-0 leading-snug">
                  {k.label}
                </h4>
                <EvidenceTag status="unverified" />
              </div>
              <p className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground m-0">
                {k.metric}
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-ursa-line-soft">
                <div>
                  <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground block mb-1">
                    Baseline
                  </span>
                  <span className="font-display text-[1.3rem] font-semibold text-muted-foreground">
                    {k.baseline}
                  </span>
                </div>
                <div>
                  <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground block mb-1">
                    Day 90 target
                  </span>
                  <span
                    className={cn(
                      "font-display text-[1.3rem] font-semibold",
                      k.tone === "forest" && "text-ursa-forest-deep",
                      k.tone === "gold" && "text-ursa-gold",
                      k.tone === "terracotta" && "text-ursa-terracotta"
                    )}
                  >
                    {k.target}
                  </span>
                </div>
              </div>
              <p className="text-[0.8rem] text-muted-foreground leading-relaxed m-0 pt-2">
                {k.note}
              </p>
            </Card>
          ))}
        </Grid>

        <Callout tone="forest" title="Why baselines are unknown — and why that is honest">
          Refusing to invent a baseline is a feature of this dossier, not a gap. The first week's
          actions in Section 01 (till, GBP, WhatsApp) are exactly the instruments that turn
          <em> Unknown</em> into a number. A plan that pretends to know its starting point is a
          plan that will quietly fail its own targets.
        </Callout>
      </ViewSection>

      {/* Section 9 — Skeptical revision log ==================================== */}
      <ViewSection
        badge="Section 09 · Honesty"
        title={<>Skeptical revision log — what was challenged, what changed</>}
        meta="3 rounds"
      >
        <p className="text-[0.97rem] text-muted-foreground leading-relaxed max-w-[68ch] mb-6">
          Three rounds of skeptical challenge shaped this plan's riskiest recommendations. The log below
          records what was challenged and what changed as a result — because a plan that cannot
          show its revisions is a plan that has not been pressure-tested.
        </p>

        <Grid cols={3}>
          {REVISIONS.map((r, i) => (
            <Card key={r.round} className="flex flex-col gap-3">
              <div className="flex items-baseline justify-between gap-2">
                <span
                  className={cn(
                    "inline-flex items-center gap-2 font-label text-[0.66rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border",
                    r.tone === "gold" && "border-ursa-gold/50 text-ursa-gold bg-ursa-gold/8",
                    r.tone === "forest" && "border-ursa-forest-deep/40 text-ursa-forest-deep bg-ursa-forest-deep/8",
                    r.tone === "terracotta" && "border-ursa-terracotta/40 text-ursa-terracotta bg-ursa-terracotta/8"
                  )}
                >
                  <History size={12} /> {r.round}
                </span>
                <span className="font-display text-3xl font-semibold text-ursa-line">
                  0{i + 1}
                </span>
              </div>
              <div>
                <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground">
                  Challenge
                </span>
                <p className="text-[0.92rem] font-medium text-ursa-dark-roast leading-relaxed mt-1 mb-0">
                  {r.challenge}
                </p>
              </div>
              <div className="mt-auto pt-3 border-t border-ursa-line-soft">
                <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-ursa-forest-deep">
                  What changed
                </span>
                <p className="text-[0.86rem] text-muted-foreground leading-relaxed mt-1 mb-0">
                  {r.change}
                </p>
              </div>
            </Card>
          ))}
        </Grid>

        <Callout tone="warn" title="Round 4 is yours">
          The log is open. When a stop rule fires, or when an assumption in the Subscription
          Calculator turns out wrong, write the fourth round here. A revision log that stops at
          three is a revision log that has stopped being used.
        </Callout>
      </ViewSection>

      {/* Section 10 — Final spirit-preservation verdict ======================== */}
      <ViewSection
        badge="Section 10 · Verdict"
        title={<>Final spirit-preservation verdict</>}
        meta="The bear stays"
      >
        <div
          className="relative overflow-hidden rounded-2xl border border-ursa-forest-deep/30 p-8 md:p-10"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(184,146,74,0.18), transparent 60%), radial-gradient(ellipse at bottom left, rgba(143,166,139,0.22), transparent 60%), linear-gradient(180deg, var(--color-ursa-forest-deep) 0%, #243d2b 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23D9BC7E' stroke-width='0.6' opacity='0.5'><path d='M0 60 Q30 30 60 60 T120 60'/><path d='M0 90 Q30 60 60 90 T120 90'/><circle cx='60' cy='60' r='2'/></g></svg>\")",
            }}
          />
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
            <BearMark size={64} className="text-ursa-gold shrink-0" />
            <div className="flex-1">
              <span className="font-label text-[0.7rem] tracking-[0.22em] uppercase text-ursa-gold-soft">
                Verdict · Permanent system
              </span>
              <h3 className="font-display text-2xl md:text-[1.8rem] font-semibold text-ursa-cream leading-tight mt-2 mb-3">
                The plan preserves the bear, the gram, and the green.
              </h3>
              <p className="text-[0.97rem] text-ursa-leaf leading-relaxed max-w-[64ch] m-0">
                Total rebrand is off the table. Conservative refinement is the permanent system:
                verify what is already distinctive, double down on the Art Nouveau lean and the
                in-house roastery, and treat every growth tactic as an experiment with a named
                stop rule. When a tactic forces a choice between protecting Ursa's identity and
                chasing a generic growth play, this dossier chooses the bear.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="inline-flex items-center gap-1.5 font-label text-[0.64rem] tracking-[0.16em] uppercase px-2.5 py-1 rounded-full bg-ursa-gold/20 text-ursa-gold-soft border border-ursa-gold/50">
                  <Shield size={12} /> Bear preserved
                </span>
                <span className="inline-flex items-center gap-1.5 font-label text-[0.64rem] tracking-[0.16em] uppercase px-2.5 py-1 rounded-full bg-ursa-forest/30 text-ursa-leaf border border-ursa-leaf/40">
                  <Coffee size={12} /> Gram preserved
                </span>
                <span className="inline-flex items-center gap-1.5 font-label text-[0.64rem] tracking-[0.16em] uppercase px-2.5 py-1 rounded-full bg-ursa-forest/30 text-ursa-leaf border border-ursa-leaf/40">
                  <Sparkles size={12} /> Green preserved
                </span>
              </div>
            </div>
          </div>
        </div>

        <Grid cols={3}>
          <Card className="bg-ursa-foam">
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-1.5 flex items-center gap-2">
              <Flag size={16} className="text-ursa-gold" /> Permanent system
            </h4>
            <p className="text-[0.86rem] text-muted-foreground leading-relaxed m-0">
              Art Nouveau lean, browns-and-greens palette, bear motif, in-house roastery, "Un gramo a la vez".
              Never replaced.
            </p>
          </Card>
          <Card className="bg-ursa-foam">
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-1.5 flex items-center gap-2">
              <Calendar size={16} className="text-ursa-gold" /> 6-month reversible skin
            </h4>
            <p className="text-[0.86rem] text-muted-foreground leading-relaxed m-0">
              Level-2 distinctive growth system — new copy, new Reels, named-drink rotation.
              Review at day 90; rollback in 30 days if it weakens recognition.
            </p>
          </Card>
          <Card className="bg-ursa-foam">
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-1.5 flex items-center gap-2">
              <Sparkles size={16} className="text-ursa-gold" /> Seasonal only
            </h4>
            <p className="text-[0.86rem] text-muted-foreground leading-relaxed m-0">
              Level-3 seasonal campaigns (Lonya release, Andean winter cup). Approved per season,
              never auto-renewed.
            </p>
          </Card>
        </Grid>
      </ViewSection>

      {/* Section 11 — Dossier link ============================================== */}
      <ViewSection>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <DossierLinkBanner moduleId="07-implementation-roadmap-and-kpis" />
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("experiments")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-forest-deep text-ursa-cream hover:bg-ursa-forest transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
            >
              <Beaker size={14} /> Experiment Tracker
            </button>
            <button
              onClick={() => navigate("calculator")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ursa-gold/60 text-ursa-gold hover:bg-ursa-gold hover:text-ursa-dark-roast transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
            >
              <ArrowRight size={14} /> Subscription Calculator
            </button>
            <button
              onClick={() => navigate("budget")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ursa-forest-deep/40 text-ursa-forest-deep hover:bg-ursa-forest-deep hover:text-ursa-cream transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
            >
              <Banknote size={14} /> Budget Allocator
            </button>
          </div>
        </div>

        <ArtNouveauDivider />

        <Grid cols={4}>
          <StatBlock value="72h" label="First-action window — owned surfaces only" tone="terracotta" />
          <StatBlock value="90d" label="Phased launch horizon" tone="gold" />
          <StatBlock value="11" label="Experiments with stop rules" tone="forest" />
          <StatBlock value="8" label="Workstreams with named owners" tone="forest" />
        </Grid>
      </ViewSection>
    </>
  );
}

// ---- Phase sub-component -----------------------------------------------------
function PhasePhase({
  phase,
  meta,
  index,
}: {
  phase: { phase: string; items: string[] };
  meta: PhaseMeta;
  index: number;
}) {
  return (
    <div className={cn("rounded-xl border p-5 md:p-6", meta.accentBorder, meta.accentBg)}>
      <div className="flex flex-wrap items-baseline gap-3 mb-3">
        <span className="inline-flex items-center gap-2 font-label text-[0.7rem] tracking-[0.18em] uppercase text-ursa-dark-roast">
          <span
            className={cn(
              "inline-flex h-7 w-7 items-center justify-center rounded-full border",
              meta.accentBorder,
              "bg-ursa-paper"
            )}
          >
            {meta.icon}
          </span>
          Phase {index + 1} · {meta.badge}
        </span>
        <Pill tone={meta.tone === "forest" ? "forest" : meta.tone === "gold" ? "gold" : "stop"}>
          {phase.phase}
        </Pill>
        <span className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground">
          {phase.items.length} commitments
        </span>
      </div>

      <p className="text-[0.95rem] text-foreground/90 leading-relaxed max-w-[72ch] mb-5">
        {meta.intro}
      </p>

      <ol className="grid gap-3 sm:grid-cols-2 m-0 p-0 list-none">
        {phase.items.map((item, i) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-lg border border-ursa-line-soft bg-card p-3.5"
          >
            <span
              className={cn(
                "shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full font-display text-[0.9rem] font-semibold text-ursa-cream",
                meta.dot
              )}
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <span className="text-[0.9rem] text-foreground/90 leading-relaxed">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
