"use client";

import { useState } from "react";
import { ViewHero, ViewSection, Card, DossierLinkBanner } from "../view-shell";
import { BearMark, Pill, Callout, ArtNouveauDivider } from "../ursa-brand";
import { useNavigate } from "@/lib/ursa-nav";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";
import {
  ArrowRight, ArrowLeft, Check, RotateCcw, Target, Users, Megaphone,
  TrendingUp, Wallet, FileText, Sparkles, Coffee, Compass, Heart, Star,
} from "lucide-react";

/**
 * Campaign Builder — an interactive wizard that walks the owner through
 * assembling a campaign: offer → audience → channel → metric → budget → summary.
 * State is local; the summary can be copied to clipboard.
 */

type Offer = { id: string; name: string; desc: string; anchor: string };
type Audience = { id: string; name: string; desc: string };
type Channel = { id: string; name: string; reach: string; cost: string };
type Metric = { id: string; name: string; desc: string; target: string };

const OFFERS: Offer[] = [
  { id: "ursamanana", name: "Ursa Mañana subscription", desc: "S/. 20/month unlimited coffee 7–10am + 20% off sides", anchor: "S/. 20/mo vs S/. 60/mo à la carte" },
  { id: "tasting", name: "Cata de Tres Orígenes flight", desc: "Three pour-overs + bean sample + story card", anchor: "S/. 28 vs S/. 42 à la carte" },
  { id: " pairing", name: "Bear recommends pairing", desc: "Named drink + cookie/financier combo at 15% off", anchor: "S/. 18 vs S/. 21 à la carte" },
  { id: "hotelcard", name: "Hotel concierge origin card", desc: "Branded card + first-cup-free coupon for 8 hotels", anchor: "Free first cup vs S/. 14 regular" },
  { id: "gramweek", name: "Gram of the Week bean drop", desc: "Weekly microlot highlight + retail bean discount", anchor: "S/. 38 bean bag vs S/. 48 retail" },
  { id: "cupping", name: "Monthly cupping night", desc: "Guided cupping of 4 origins + pastry pairing", anchor: "S/. 35 ticket vs S/. 70 value" },
];

const AUDIENCES: Audience[] = [
  { id: "morning", name: "The Morning Regular", desc: "Lives/works in Miraflores; arrives 7–8am; wants a fast, deliberate cup." },
  { id: "tourist", name: "The Tourist Explorer", desc: "Visiting Lima for 2–4 days; wants a craft spot to tag and recommend." },
  { id: "remote", name: "The Remote Worker", desc: "Needs a third place with Wi-Fi for 90+ min; values a quiet side." },
  { id: "curious", name: "The Coffee Curious", desc: "Wants to learn origin/process; buys retail beans; attends cuppings." },
  { id: "office", name: "Office / B2B", desc: "Coworking space or office manager sourcing beans for 10–30 people." },
  { id: "hotel", name: "Hotel concierge / guest", desc: "Concierge recommending cafés; guests within walking distance." },
];

const CHANNELS: Channel[] = [
  { id: "instagram", name: "Instagram Reels + Stories", reach: "4.7k followers + discovery", cost: "S/. 0 (in-house)" },
  { id: "meta", name: "Meta paid social (3km radius)", reach: "10–30k impressions", cost: "S/. 600–1,800/mo" },
  { id: "creator", name: "Creator pilot (3 micro-creators)", reach: "5–30k each", cost: "S/. 1,200–3,000" },
  { id: "google", name: "Google Business Profile", reach: "Maps + search", cost: "S/. 0 (owned)" },
  { id: "whatsapp", name: "WhatsApp consent list", reach: "Existing customers", cost: "S/. 0–150" },
  { id: "hotel", name: "Hotel concierge cards (8 properties)", reach: "Tourist guests", cost: "S/. 200–400" },
  { id: "rappi", name: "Rappi menu + bundles", reach: "Delivery users", cost: "S/. 0–400" },
  { id: "event", name: "In-store event / cupping", reach: "15–30 attendees", cost: "S/. 200–560" },
];

const METRICS: Metric[] = [
  { id: "visits", name: "Store visits", desc: "Foot traffic attributable to the campaign", target: "+15% vs baseline" },
  { id: "profile", name: "Profile visits / saves", desc: "Instagram profile views + post saves", target: "+30% vs baseline" },
  { id: "aov", name: "Average ticket", desc: "Spend per transaction during campaign window", target: "+S/. 2–4" },
  { id: "repeat", name: "Repeat visits (7-day)", desc: "% returning within 7 days of first visit", target: "≥ 35%" },
  { id: "tags", name: "UGC tags / mentions", desc: "@ursacoffeeperu tags per week", target: "≥ 5/week" },
  { id: "reviews", name: "Google/TripAdvisor reviews", desc: "New reviews per month", target: "≥ 8/mo" },
];

const STEPS = [
  { id: "offer", label: "Offer", icon: Target },
  { id: "audience", label: "Audience", icon: Users },
  { id: "channel", label: "Channel", icon: Megaphone },
  { id: "metric", label: "Metric", icon: TrendingUp },
  { id: "budget", label: "Budget", icon: Wallet },
  { id: "summary", label: "Summary", icon: FileText },
];

export function CampaignBuilderView() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [step, setStep] = useState(0);
  const [offer, setOffer] = useState<string | null>(null);
  const [audience, setAudience] = useState<string | null>(null);
  const [channel, setChannel] = useState<string | null>(null);
  const [metric, setMetric] = useState<string | null>(null);
  const [budget, setBudget] = useState(800);
  const [copied, setCopied] = useState(false);

  const canAdvance = () => {
    if (step === 0) return offer !== null;
    if (step === 1) return audience !== null;
    if (step === 2) return channel !== null;
    if (step === 3) return metric !== null;
    return true;
  };

  const reset = () => {
    setStep(0);
    setOffer(null);
    setAudience(null);
    setChannel(null);
    setMetric(null);
    setBudget(800);
  };

  const selectedOffer = OFFERS.find((o) => o.id === offer);
  const selectedAudience = AUDIENCES.find((a) => a.id === audience);
  const selectedChannel = CHANNELS.find((c) => c.id === channel);
  const selectedMetric = METRICS.find((m) => m.id === metric);

  const summaryText = () => {
    const lines = [
      "URSA COFFEE — CAMPAIGN BRIEF",
      "============================",
      "",
      `OFFER:     ${selectedOffer?.name ?? "—"} (${selectedOffer?.anchor ?? ""})`,
      `           ${selectedOffer?.desc ?? ""}`,
      "",
      `AUDIENCE:  ${selectedAudience?.name ?? "—"}`,
      `           ${selectedAudience?.desc ?? ""}`,
      "",
      `CHANNEL:   ${selectedChannel?.name ?? "—"}`,
      `           Reach: ${selectedChannel?.reach ?? "—"} · Cost: ${selectedChannel?.cost ?? "—"}`,
      "",
      `METRIC:    ${selectedMetric?.name ?? "—"} (target: ${selectedMetric?.target ?? "—"})`,
      `           ${selectedMetric?.desc ?? ""}`,
      "",
      `BUDGET:    S/. ${budget}/month`,
      "",
      `STOP RULE: Kill if ${selectedMetric?.name?.toLowerCase() ?? "metric"} does not lift by ${selectedMetric?.target ?? "target"} in 30 days.`,
      "",
      "— Compiled with the Ursa Campaign Builder",
    ];
    return lines.join("\n");
  };

  const copySummary = () => {
    navigator.clipboard.writeText(summaryText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <>
      <ViewHero
        eyebrow={t("content.view.campaign-builder.eyebrow")}
        title={t("content.view.campaign-builder.title")}
        lede={
          <>
            A step-by-step wizard that assembles a campaign brief by connecting an offer to an audience, a channel,
            a success metric, and a budget. Each choice is drawn from the verified Ursa playbook. The output is a
            plain-text brief you can copy and hand to a barista, a creator, or yourself.
          </>
        }
        meta={[
          { label: "Steps", value: "6" },
          { label: "Source", value: "Verified Ursa data" },
          { label: "Output", value: "Copyable text brief" },
        ]}
        tone="gold"
      />

      <ViewSection>
        {/* Step progress bar */}
        <div className="flex items-center gap-1 mb-8 overflow-x-auto ursa-scroll pb-2">
          {STEPS.map((s, i) => {
            const isDone = i < step;
            const isActive = i === step;
            return (
              <div key={s.id} className="flex items-center shrink-0">
                <button
                  onClick={() => i <= step && setStep(i)}
                  disabled={i > step}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-full font-label text-[0.66rem] tracking-[0.12em] uppercase transition border",
                    isActive && "bg-ursa-dark-roast text-ursa-cream border-ursa-dark-roast",
                    isDone && "bg-ursa-forest-deep/15 text-ursa-forest-deep border-ursa-forest-deep/40 hover:bg-ursa-forest-deep/25",
                    !isActive && !isDone && "bg-card text-muted-foreground border-ursa-line-soft"
                  )}
                >
                  <span className={cn("w-5 h-5 rounded-full grid place-items-center text-[0.6rem] font-semibold", isActive ? "bg-ursa-gold text-ursa-dark-roast" : isDone ? "bg-ursa-forest-deep text-ursa-cream" : "bg-muted")}>
                    {isDone ? <Check size={11} /> : i + 1}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
                {i < STEPS.length - 1 && <span className="text-muted-foreground/40 mx-0.5">→</span>}
              </div>
            );
          })}
          <button onClick={reset} className="ml-auto shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-full font-label text-[0.66rem] tracking-[0.12em] uppercase text-muted-foreground hover:text-ursa-terracotta transition">
            <RotateCcw size={12} /> Reset
          </button>
        </div>

        {/* Step content */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start [grid-template-columns:minmax(0,1fr)]">
          {/* Main step area */}
          <Card className="min-h-[400px]">
            {step === 0 && (
              <StepShell title="Pick the offer" desc="What is the customer actually getting? Anchor truthfully against the à la carte total." icon={<Target size={20} className="text-ursa-gold" />}>
                <div className="grid sm:grid-cols-2 gap-3">
                  {OFFERS.map((o) => (
                    <OptionCard key={o.id} selected={offer === o.id} onClick={() => setOffer(o.id)} title={o.name} desc={o.desc} badge={o.anchor} />
                  ))}
                </div>
              </StepShell>
            )}
            {step === 1 && (
              <StepShell title="Pick the audience" desc="Who is this campaign for? Each persona has a distinct job to be done." icon={<Users size={20} className="text-ursa-gold" />}>
                <div className="grid sm:grid-cols-2 gap-3">
                  {AUDIENCES.map((a) => (
                    <OptionCard key={a.id} selected={audience === a.id} onClick={() => setAudience(a.id)} title={a.name} desc={a.desc} />
                  ))}
                </div>
              </StepShell>
            )}
            {step === 2 && (
              <StepShell title="Pick the channel" desc="Where will the audience encounter the offer? Match reach and cost to the budget." icon={<Megaphone size={20} className="text-ursa-gold" />}>
                <div className="grid sm:grid-cols-2 gap-3">
                  {CHANNELS.map((c) => (
                    <OptionCard key={c.id} selected={channel === c.id} onClick={() => setChannel(c.id)} title={c.name} desc={`${c.reach} · ${c.cost}`} />
                  ))}
                </div>
              </StepShell>
            )}
            {step === 3 && (
              <StepShell title="Pick the metric" desc="How will you know it worked? One primary metric, one target, one stop rule." icon={<TrendingUp size={20} className="text-ursa-gold" />}>
                <div className="grid sm:grid-cols-2 gap-3">
                  {METRICS.map((m) => (
                    <OptionCard key={m.id} selected={metric === m.id} onClick={() => setMetric(m.id)} title={m.name} desc={m.desc} badge={m.target} />
                  ))}
                </div>
              </StepShell>
            )}
            {step === 4 && (
              <StepShell title="Set the monthly budget" desc="Match the channel cost to a realistic monthly spend. Lean starts at S/. 500; growth can reach S/. 3,000." icon={<Wallet size={20} className="text-ursa-gold" />}>
                <div className="max-w-md">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="font-label text-[0.72rem] tracking-[0.12em] uppercase text-muted-foreground">Monthly budget</span>
                    <span className="font-display text-4xl font-semibold text-ursa-dark-roast">S/. {budget}</span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={3000}
                    step={100}
                    value={budget}
                    onChange={(e) => setBudget(parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-ursa-gold"
                  />
                  <div className="flex justify-between font-label text-[0.6rem] tracking-[0.1em] uppercase text-muted-foreground mt-2">
                    <span>Lean · S/. 500</span>
                    <span>Growth · S/. 3,000</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <BudgetTier label="Lean" amount={500} current={budget} onClick={setBudget} />
                    <BudgetTier label="Moderate" amount={1200} current={budget} onClick={setBudget} />
                    <BudgetTier label="Growth" amount={2500} current={budget} onClick={setBudget} />
                  </div>
                </div>
              </StepShell>
            )}
            {step === 5 && (
              <StepShell title="Your campaign brief" desc="Copy this plain-text brief and hand it to whoever runs the campaign." icon={<FileText size={20} className="text-ursa-gold" />}>
                <div className="relative">
                  <pre className="bg-ursa-espresso text-ursa-cream rounded-xl p-5 text-[0.82rem] leading-relaxed font-mono whitespace-pre-wrap overflow-x-auto ursa-scroll border border-ursa-gold/30">
{summaryText()}
                  </pre>
                  <button
                    onClick={copySummary}
                    className={cn(
                      "absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label text-[0.66rem] tracking-[0.1em] uppercase transition",
                      copied ? "bg-ursa-forest-deep text-ursa-cream" : "bg-ursa-gold text-ursa-dark-roast hover:bg-ursa-gold-soft"
                    )}
                  >
                    {copied ? <><Check size={12} /> Copied</> : "Copy brief"}
                  </button>
                </div>
                <Callout tone="forest" title="Stop rule built in">
                  <p className="m-0 text-[0.88rem]">
                    Every brief includes a stop rule: kill the campaign if the metric does not hit its target in 30 days.
                    No doubling down on what isn&apos;t working — document and move on.
                  </p>
                </Callout>
              </StepShell>
            )}
          </Card>

          {/* Sidebar — running summary */}
          <Card className="bg-ursa-foam lg:sticky lg:top-24">
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <BearMark size={18} className="text-ursa-dark-roast" /> Running brief
            </h3>
            <div className="space-y-3 text-[0.85rem]">
              <BriefRow label="Offer" value={selectedOffer?.name} tone="gold" />
              <BriefRow label="Audience" value={selectedAudience?.name} tone="terracotta" />
              <BriefRow label="Channel" value={selectedChannel?.name} tone="forest" />
              <BriefRow label="Metric" value={selectedMetric?.name} tone="gold" />
              <BriefRow label="Budget" value={budget ? `S/. ${budget}/mo` : null} tone="forest" />
            </div>
            <ArtNouveauDivider className="my-4" />
            <p className="text-[0.76rem] text-muted-foreground m-0">
              {canAdvance() || step === 5
                ? "All set. The brief updates as you choose."
                : `Select ${STEPS[step].label.toLowerCase()} to continue.`}
            </p>
          </Card>
        </div>

        {/* Nav buttons */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-label text-[0.74rem] tracking-[0.12em] uppercase border border-ursa-line-soft text-muted-foreground hover:text-ursa-dark-roast hover:border-ursa-gold/60 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={14} /> Back
          </button>
          {step < STEPS.length - 1 ? (
            <button
              onClick={() => canAdvance() && setStep((s) => s + 1)}
              disabled={!canAdvance()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-label text-[0.74rem] tracking-[0.12em] uppercase bg-ursa-gold text-ursa-dark-roast hover:bg-ursa-gold-soft transition disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
            >
              Next <ArrowRight size={14} />
            </button>
          ) : (
            <button
              onClick={() => navigate("roadmap")}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-label text-[0.74rem] tracking-[0.12em] uppercase bg-ursa-forest-deep text-ursa-cream hover:bg-ursa-dark-roast transition shadow-lg"
            >
              View roadmap <ArrowRight size={14} />
            </button>
          )}
        </div>
      </ViewSection>

      <ViewSection>
        <DossierLinkBanner moduleId="04-marketing-growth-and-retention-plan" />
      </ViewSection>
    </>
  );
}

function StepShell({ title, desc, icon, children }: { title: string; desc: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="ursa-fade-up" key={title}>
      <div className="flex items-start gap-3 mb-5">
        <span className="w-11 h-11 rounded-full bg-ursa-gold/15 border border-ursa-gold/40 grid place-items-center shrink-0">{icon}</span>
        <div>
          <h2 className="font-display text-xl font-semibold text-ursa-dark-roast m-0 leading-tight">{title}</h2>
          <p className="text-[0.88rem] text-muted-foreground m-0 mt-1">{desc}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function OptionCard({ selected, onClick, title, desc, badge }: { selected: boolean; onClick: () => void; title: string; desc: string; badge?: string }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "text-left rounded-xl border p-4 transition ursa-card-hover",
        selected ? "border-ursa-gold bg-ursa-gold/10 shadow-[0_0_0_3px_rgba(184,146,74,0.15)]" : "border-ursa-line-soft bg-card hover:border-ursa-gold/60"
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-1">
        <h4 className="font-display text-[0.98rem] font-semibold text-ursa-dark-roast m-0 leading-tight">{title}</h4>
        {selected && <Check size={16} className="text-ursa-gold shrink-0" />}
      </div>
      <p className="text-[0.82rem] text-muted-foreground m-0 leading-relaxed">{desc}</p>
      {badge && (
        <span className="inline-block mt-2 font-label text-[0.6rem] tracking-[0.1em] uppercase px-2 py-0.5 rounded-full bg-ursa-forest-deep/10 text-ursa-forest-deep border border-ursa-forest-deep/20">
          {badge}
        </span>
      )}
    </button>
  );
}

function BudgetTier({ label, amount, current, onClick }: { label: string; amount: number; current: number; onClick: (n: number) => void }) {
  const isActive = current === amount;
  return (
    <button
      onClick={() => onClick(amount)}
      className={cn(
        "rounded-lg border p-2.5 text-center transition",
        isActive ? "border-ursa-gold bg-ursa-gold/10" : "border-ursa-line-soft bg-card hover:border-ursa-gold/40"
      )}
    >
      <div className="font-label text-[0.58rem] tracking-[0.1em] uppercase text-muted-foreground">{label}</div>
      <div className="font-display text-[0.92rem] font-semibold text-ursa-dark-roast mt-0.5">S/. {amount}</div>
    </button>
  );
}

function BriefRow({ label, value, tone }: { label: string; value: string | null | undefined; tone: "gold" | "terracotta" | "forest" }) {
  const tones = { gold: "text-ursa-gold", terracotta: "text-ursa-terracotta", forest: "text-ursa-forest-deep" };
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground shrink-0">{label}</span>
      <span className={cn("font-display text-[0.88rem] font-semibold text-right", !value && "text-muted-foreground/50 italic font-body", value && tones[tone])}>
        {value || "—"}
      </span>
    </div>
  );
}
