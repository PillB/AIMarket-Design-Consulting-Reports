"use client";

import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import {
  ArtNouveauDivider,
  Pill,
  Callout,
  StatBlock,
  EvidenceTag,
} from "../ursa-brand";
import { SOURCES, OPEN_QUESTIONS } from "@/lib/ursa-data";
import { useNavigate } from "@/lib/ursa-nav";
import {
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  FileJson,
  FlaskConical,
  Ban,
  CircleSlash,
  BookOpen,
  MapPin,
  ArrowRight,
} from "lucide-react";

/** Missing business data, with notes on how scenarios absorb each gap. */
const MISSING_DATA: { item: string; note: string }[] = [
  { item: "Monthly marketing budget", note: "Owner confirmation requested; Lean / Moderate / Growth scenarios parameterised so no budget is required to act." },
  { item: "Average ticket size", note: "POS extract would refine conversion forecasts; lean/moderate/growth scenarios use defensible ranges instead." },
  { item: "Best / worst sellers from POS", note: "Affects menu-engineering and attach-rate model; both tools tolerate default inputs until POS data arrives." },
  { item: "Ingredient / cup cost", note: "Only category-level inferences are used. No invented supplier prices appear anywhere in the dossier." },
  { item: "Gross margin %", note: "Replaced by lean/moderate/growth scenario ranges. No fixed margin is asserted." },
  { item: "Peak-hour capacity", note: "Affects service-recovery playbook; default capacity assumptions are stated and overridable." },
  { item: "Staff capacity for classes / cuppings / creator collabs", note: "Open question to the owner; experimental phases assume minimum capacity and scale up if confirmed." },
  { item: "Repeat-visit rate or loyalty data", note: "No CRM extract available; retention scenarios model from industry benchmarks, flagged as unverified." },
  { item: "Customer database (email / WhatsApp list size with consent)", note: "Owner confirmation requested; growth scenarios assume cold start (zero list) as the worst case." },
  { item: "Campaign history (paid social, past spend, past CPA)", note: "No Ads Manager access; ROI dashboard uses defensible benchmarks rather than actuals." },
];

/** Conflicting information found across public sources. */
const CONFLICTS: { topic: string; detail: string }[] = [
  {
    topic: "Operating hours across platforms",
    detail: "Hours may differ slightly between the Instagram bio, the Rappi listing, and the CoffeePass page. The dossier treats the Instagram bio hours (Mon–Sat 07:30–21:00 · Sun 08:30–20:00) as canonical and recommends the owner confirm before any campaign launch.",
  },
  {
    topic: "Instagram follower count over time",
    detail: "Follower counts fluctuate daily. The 4,746 figure is a 2026-08-01 snapshot and should be treated as approximately current rather than exact. Re-check before quoting in any external material.",
  },
  {
    topic: "TripAdvisor listing exists but has ~0 reviews",
    detail: "A TripAdvisor listing for Ursa Coffee Roasters exists at snapshot but carries approximately zero reviews. The listing is either new, unmonitored, or inaccurate — owner confirmation recommended before citing publicly.",
  },
  {
    topic: "Cross-platform menu & pricing",
    detail: "Pricing may differ between the in-store chalkboard, Rappi, and CoffeePass. The dossier treats Rappi prices as the public default and marks any reconstructed prices with an asterisk in the menu module.",
  },
];

/** Methodology steps. */
const METHODOLOGY: { title: string; detail: string }[] = [
  {
    title: "Public sources only",
    detail: "No proprietary data, no owner-supplied financials, no Ads Manager access. Every figure is reconstructable from a public URL in the source list above.",
  },
  {
    title: "Instagram post & reel cover sampling",
    detail: "Posts and reel cover images were sampled to identify signature drinks, brand voice, and visual patterns. Full video transcripts were not transcribed — only the cover frames and visible captions.",
  },
  {
    title: "Rappi menu extraction",
    detail: "Rappi's public delivery listing was used to reconstruct menu items, prices, and category structure. In-store-only items may not appear on Rappi and are flagged accordingly.",
  },
  {
    title: "CoffeePass cross-reference",
    detail: "CoffeePass Perú's public listing confirmed Ursa's membership-tier placement and the platform category it sits in.",
  },
  {
    title: "TripAdvisor check",
    detail: "TripAdvisor listing was checked for review sentiment and volume — approximately zero reviews at snapshot. Recorded as a partial source.",
  },
  {
    title: "Competitor website survey",
    detail: "Competitor websites were surveyed for positioning, design language, and channel coverage, to ground the orthogonality analysis in the Market module.",
  },
  {
    title: "Framework references",
    detail: "Acquisition.com (Hormozi offer / lead frameworks) and FS.blog (Rory Sutherland behavioural marketing interview) were used as primary framework sources. Both are publicly accessible.",
  },
  {
    title: "Industry context",
    detail: "Premios Somos 2024 and Fresh Cup café-trend coverage were referenced for competitor award context and macro industry direction respectively.",
  },
];

export function SourcesView() {
  const navigate = useNavigate();

  const verifiedCount = SOURCES.filter((s) => s.status === "verified").length;
  const partialCount = SOURCES.filter((s) => s.status === "partial").length;
  const unverifiedCount = SOURCES.filter((s) => s.status === "unverified").length;
  const gapCount = SOURCES.filter((s) => s.status === "gap").length;

  return (
    <>
      <ViewHero
        eyebrow="Appendix · Sources & Evidence"
        title={<>Every claim in this dossier is traceable to a public source.</>}
        lede={
          <>
            The Ursa command center is built on publicly verifiable evidence. Where data was inferred, the inference is flagged. Where data was missing, the gap is named openly — and the lean/moderate/growth scenario structure absorbs it without blocking the launch.
          </>
        }
        meta={[
          { label: "Snapshot", value: "2026-08-01" },
          { label: "Scope", value: "Public sources only" },
          { label: "Constraint", value: "No proprietary material" },
        ]}
        tone="forest"
      />

      {/* §1 — At-a-glance source stats */}
      <ViewSection
        badge="Appendix §1"
        title="Sources at a glance"
        meta={`${SOURCES.length} cited · ${verifiedCount} verified · ${partialCount} partial`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatBlock value={String(verifiedCount)} label="Verified sources" tone="forest" />
          <StatBlock value={String(partialCount)} label="Partial sources" tone="gold" />
          <StatBlock value={String(unverifiedCount)} label="Unverified sources" tone="terracotta" />
          <StatBlock value={String(gapCount)} label="Identified gaps" tone="forest" />
        </div>
        <Callout tone="forest" title="Why this matters">
          The strategic plan does not require any data marked <b>Gap</b>. Where a gap is material to a forecast, the lean/moderate/growth scenario structure absorbs the uncertainty — owner input refines but does not block the 72-hour launch.
        </Callout>
      </ViewSection>

      {/* §2 — Source list */}
      <ViewSection
        badge="Appendix §2"
        title="Source list"
        meta="Click any source to open the original in a new tab"
      >
        <Grid cols={2}>
          {SOURCES.map((s) => (
            <Card key={s.id} className="flex flex-col gap-3 h-full">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-baseline gap-2 min-w-0">
                  <span className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-gold-text shrink-0">{s.id}</span>
                  <h3 className="font-display text-lg font-semibold text-ursa-dark-roast m-0 leading-snug">{s.label}</h3>
                </div>
                <EvidenceTag status={s.status} />
              </div>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-1.5 text-[0.82rem] text-ursa-forest-deep hover:text-ursa-gold-text transition break-all"
              >
                <ExternalLink size={12} className="mt-0.5 shrink-0" />
                <span className="break-all">{s.url}</span>
              </a>
              <p className="m-0 text-[0.88rem] text-foreground/80 leading-relaxed">{s.note}</p>
            </Card>
          ))}
        </Grid>
        <ArtNouveauDivider />
      </ViewSection>

      {/* §3 — Evidence status legend */}
      <ViewSection badge="Appendix §3" title="Evidence status legend" meta="How to read the tags used throughout the dossier">
        <Grid cols={2}>
          <Card className="flex flex-col gap-3 h-full">
            <div className="flex items-center gap-2">
              <EvidenceTag status="verified" />
              <span className="font-display text-base font-semibold text-ursa-dark-roast">Verified</span>
            </div>
            <p className="m-0 text-[0.88rem] text-foreground/80">
              Direct observation of a public source. Anyone can re-check the claim by visiting the cited URL. Used for primary facts — menu items, addresses, hours, official platform listings.
            </p>
          </Card>
          <Card className="flex flex-col gap-3 h-full">
            <div className="flex items-center gap-2">
              <EvidenceTag status="partial" />
              <span className="font-display text-base font-semibold text-ursa-dark-roast">Partial</span>
            </div>
            <p className="m-0 text-[0.88rem] text-foreground/80">
              Source exists and is public, but access is limited (e.g. Facebook shows partial posts) or only proxies the underlying claim. The direction is right; the detail may be stale or gated.
            </p>
          </Card>
          <Card className="flex flex-col gap-3 h-full">
            <div className="flex items-center gap-2">
              <EvidenceTag status="unverified" />
              <span className="font-display text-base font-semibold text-ursa-dark-roast">Unverified</span>
            </div>
            <p className="m-0 text-[0.88rem] text-foreground/80">
              Claim is plausible and consistent with verified signals, but no single public source confirms it directly. Treated as inference and clearly flagged — never used as the basis for a hard forecast.
            </p>
          </Card>
          <Card className="flex flex-col gap-3 h-full">
            <div className="flex items-center gap-2">
              <EvidenceTag status="gap" />
              <span className="font-display text-base font-semibold text-ursa-dark-roast">Gap</span>
            </div>
            <p className="m-0 text-[0.88rem] text-foreground/80">
              No public source covers this; only the owner can supply it. Gaps are listed openly in §5–§6 and absorbed by the lean/moderate/growth scenario structure without blocking launch.
            </p>
          </Card>
        </Grid>
      </ViewSection>

      {/* §4 — Disambiguation warning */}
      <ViewSection badge="Appendix §4" title="Disambiguation — there is another URSA">
        <Callout tone="stop" title="Important — please read before quoting this dossier">
          <p className="m-0 mb-2">
            A separate coffee business called <b>URSA</b> operates in <b>Bridgeport, Connecticut, USA</b>. It is unrelated to <b>Ursa Coffee Roasters</b> of <b>Miraflores, Lima, Peru</b> — the subject of this dossier.
          </p>
          <p className="m-0">
            Every reference to <b>&ldquo;Ursa&rdquo;</b>, <b>&ldquo;Ursa Coffee&rdquo;</b>, or <b>&ldquo;Ursa Coffee Roasters&rdquo;</b> in this dossier, in the static HTML modules, and in the structured data files (<code>evidence.json</code>, <code>experiments.json</code>) refers exclusively to the Miraflores, Lima roastery. If a search result or AI summary mentions Bridgeport, CT — it is the wrong entity.
          </p>
        </Callout>
        <Grid cols={3}>
          <Card highlight className="h-full">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={16} className="text-ursa-forest-deep" />
              <span className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-forest-deep">Subject</span>
            </div>
            <h4 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-1">Ursa Coffee Roasters</h4>
            <p className="m-0 text-[0.86rem] text-foreground/80 leading-relaxed">
              Alcanfores 183, Miraflores, Lima 15074, Peru. Specialty roaster with espresso + coldbrew bars. Instagram: <b>@ursacoffeeperu</b>.
            </p>
          </Card>
          <Card className="h-full border-dashed">
            <div className="flex items-center gap-2 mb-2">
              <Ban size={16} className="text-ursa-terracotta-text" />
              <span className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-terracotta-text">Unrelated</span>
            </div>
            <h4 className="font-display text-lg font-semibold text-muted-foreground mt-0 mb-1">URSA (Bridgeport, CT)</h4>
            <p className="m-0 text-[0.86rem] text-muted-foreground leading-relaxed">
              A different coffee operation in the United States. Not referenced, not analysed, not affiliated. Any overlap in name is coincidental.
            </p>
          </Card>
          <Card className="h-full">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={16} className="text-ursa-gold-text" />
              <span className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-gold-text">How to verify</span>
            </div>
            <h4 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-1">Three confirmations</h4>
            <ul className="m-0 p-0 list-none space-y-1 text-[0.86rem] text-foreground/85">
              <li className="flex gap-2"><span className="text-ursa-gold-text">·</span><span>Address contains <b>Miraflores, Lima</b></span></li>
              <li className="flex gap-2"><span className="text-ursa-gold-text">·</span><span>Instagram handle is <b>@ursacoffeeperu</b></span></li>
              <li className="flex gap-2"><span className="text-ursa-gold-text">·</span><span>Spanish bio; <b>&ldquo;Tostadores de café de especialidad&rdquo;</b></span></li>
            </ul>
          </Card>
        </Grid>
      </ViewSection>

      {/* §5 — Open questions for the owner */}
      <ViewSection
        badge="Appendix §5"
        title="Open questions for the owner"
        meta={`${OPEN_QUESTIONS.length} grouped · none blocks the 72-hour launch`}
      >
        <Card highlight>
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle size={18} className="text-ursa-gold-text" />
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast m-0">Single grouped clarification request</h3>
          </div>
          <p className="text-[0.92rem] text-foreground/85 mb-4 mt-0">
            These questions refine the forecasts but do not gate the 72-hour launch. The lean/moderate/growth scenarios are designed to operate before any of these are answered.
          </p>
          <ol className="space-y-2.5 m-0 p-0 list-none">
            {OPEN_QUESTIONS.map((q, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="flex items-center justify-center w-7 h-7 shrink-0 rounded-full bg-ursa-dark-roast text-ursa-cream font-label text-[0.72rem] tracking-[0.06em]">
                  {i + 1}
                </span>
                <span className="text-[0.92rem] text-foreground/90 leading-relaxed pt-1">{q}</span>
              </li>
            ))}
          </ol>
          <Callout tone="gold" title="Why these don't block launch">
            The first 72 hours are operational — claim Google Business Profile, fix the Rappi menu, post the first reel, install analytics. None of those require confirmed budget, ticket size, or staff capacity. Owner answers sharpen later phases only.
          </Callout>
        </Card>
      </ViewSection>

      {/* §6 — Missing business data */}
      <ViewSection
        badge="Appendix §6"
        title="Missing business data"
        meta="Material gaps absorbed by the scenario structure"
      >
        <Grid cols={2}>
          {MISSING_DATA.map((m) => (
            <Card key={m.item} className="flex flex-col gap-2 h-full">
              <div className="flex items-start gap-2">
                <CircleSlash size={15} className="text-ursa-terracotta-text mt-1 shrink-0" />
                <h4 className="font-display text-base font-semibold text-ursa-dark-roast m-0">{m.item}</h4>
              </div>
              <p className="m-0 text-[0.86rem] text-foreground/75 leading-relaxed pl-7">{m.note}</p>
            </Card>
          ))}
        </Grid>
        <Callout tone="forest" title="How scenarios handle these gaps">
          The three budget scenarios (Lean / Moderate / Growth) are deliberately parameterised so that none of the missing data is required to act. Once the owner supplies actuals, the scenarios collapse to a single plan — but until then, all three are executable.
        </Callout>
      </ViewSection>

      {/* §7 — Conflicting information */}
      <ViewSection badge="Appendix §7" title="Conflicting information" meta="Where public sources disagree">
        <div className="space-y-4">
          {CONFLICTS.map((c) => (
            <Card key={c.topic} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} className="text-ursa-gold-text shrink-0" />
                <h4 className="font-display text-base font-semibold text-ursa-dark-roast m-0">{c.topic}</h4>
              </div>
              <p className="m-0 text-[0.9rem] text-foreground/85 leading-relaxed pl-7">{c.detail}</p>
            </Card>
          ))}
        </div>
      </ViewSection>

      {/* §8 — Methodology */}
      <ViewSection badge="Appendix §8" title="Methodology note" meta="How the research was conducted">
        <Grid cols={2}>
          {METHODOLOGY.map((m, i) => (
            <Card key={m.title} className="flex flex-col gap-2 h-full">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 shrink-0 rounded-full bg-ursa-dark-roast/10 text-ursa-forest-deep font-label text-[0.66rem] tracking-[0.06em] border border-ursa-forest-deep/25">
                  {i + 1}
                </span>
                <h4 className="font-display text-base font-semibold text-ursa-dark-roast m-0">{m.title}</h4>
              </div>
              <p className="m-0 text-[0.86rem] text-foreground/80 leading-relaxed pl-8">{m.detail}</p>
            </Card>
          ))}
        </Grid>
        <Callout tone="gold" title="What was deliberately not done">
          <ul className="m-0 p-0 list-none space-y-1">
            <li className="flex gap-2"><span className="text-ursa-terracotta-text">·</span><span>No scraping of private Instagram or Facebook posts.</span></li>
            <li className="flex gap-2"><span className="text-ursa-terracotta-text">·</span><span>No access to Ursa's POS, CRM, or Ads Manager.</span></li>
            <li className="flex gap-2"><span className="text-ursa-terracotta-text">·</span><span>No interviews with staff or customers.</span></li>
            <li className="flex gap-2"><span className="text-ursa-terracotta-text">·</span><span>No proprietary competitor data.</span></li>
            <li className="flex gap-2"><span className="text-ursa-terracotta-text">·</span><span>No financial modelling that requires undisclosed costs.</span></li>
          </ul>
        </Callout>
      </ViewSection>

      {/* §9 — Structured data files */}
      <ViewSection
        badge="Appendix §9"
        title="Structured data files"
        meta="Machine-readable evidence & experiment records in /dossier/assets/"
      >
        <Grid cols={2}>
          <Card className="flex flex-col gap-3 h-full">
            <div className="flex items-center gap-2">
              <FileJson size={18} className="text-ursa-gold-text" />
              <h4 className="font-display text-lg font-semibold text-ursa-dark-roast m-0">evidence.json</h4>
            </div>
            <p className="m-0 text-[0.88rem] text-foreground/80 leading-relaxed">
              Structured array of every cited source with id, label, url, status (<code>verified</code> / <code>partial</code> / <code>unverified</code> / <code>gap</code>), and note. Mirrors the source list above in machine-readable form.
            </p>
            <a
              href="/AIMarket-Design-Consulting-Reports/dossier/assets/evidence.json"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-forest-deep hover:text-ursa-gold-text transition inline-flex items-center gap-1.5 mt-auto"
            >
              <ExternalLink size={11} /> /dossier/assets/evidence.json
            </a>
          </Card>
          <Card className="flex flex-col gap-3 h-full">
            <div className="flex items-center gap-2">
              <FlaskConical size={18} className="text-ursa-gold-text" />
              <h4 className="font-display text-lg font-semibold text-ursa-dark-roast m-0">experiments.json</h4>
            </div>
            <p className="m-0 text-[0.88rem] text-foreground/80 leading-relaxed">
              Structured array of every experiment in the tracker with hypothesis, success metric, owner, duration, kill / graduate decision rule, and current status. Drives the Experiment Tracker tool.
            </p>
            <a
              href="/AIMarket-Design-Consulting-Reports/dossier/assets/experiments.json"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-forest-deep hover:text-ursa-gold-text transition inline-flex items-center gap-1.5 mt-auto"
            >
              <ExternalLink size={11} /> /dossier/assets/experiments.json
            </a>
          </Card>
        </Grid>
        <Callout tone="forest" title="These files are the source of truth">
          The Next.js command center reads from these JSON files where applicable. If a source status changes or an experiment graduates, edit the JSON and re-deploy — the dossier and the tool stay in sync automatically.
        </Callout>
      </ViewSection>

      {/* §10 — Dossier link banner + cross-link */}
      <ViewSection>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <DossierLinkBanner moduleId="sources-and-evidence" />
          <div className="flex items-center gap-3 flex-wrap">
            <Pill tone="forest"><BookOpen size={11} /> Appendix complete</Pill>
            <button
              onClick={() => navigate("experiments")}
              className="font-label text-[0.72rem] tracking-[0.14em] uppercase text-ursa-forest-deep hover:text-ursa-gold-text transition inline-flex items-center gap-1.5"
            >
              Open Experiment Tracker <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </ViewSection>
    </>
  );
}
