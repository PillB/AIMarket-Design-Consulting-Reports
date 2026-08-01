"use client";

import { useState } from "react";
import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import {
  BearMark,
  ArtNouveauDivider,
  CupGlyph,
  Pill,
  Callout,
  StatBlock,
  SectionBadge,
  EvidenceTag,
} from "../ursa-brand";
import { HORMOZI_PRINCIPLES, SUTHERLAND_PRINCIPLES, BUDGET_SCENARIOS } from "@/lib/ursa-data";
import { useNavigate } from "@/lib/ursa-nav";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowDown,
  ChevronDown,
  Compass,
  Coffee,
  Users,
  Map as MapIcon,
  MapPin,
  Star,
  Mail,
  Truck,
  Building2,
  Calendar,
  Hotel,
  Briefcase,
  Heart,
  Gift,
  MessageSquare,
  RefreshCw,
  Package,
  Store,
  Sparkles,
  Layers,
  Footprints,
  Camera,
  Repeat,
  Megaphone,
  Handshake,
} from "lucide-react";

type Persona = {
  name: string;
  icon: React.ReactNode;
  jtb: string;
  signals: string[];
  proof: string;
  channels: string[];
  offer: string;
  metric: string;
  tone: "gold" | "terracotta" | "forest";
};

const PERSONAS: Persona[] = [
  {
    name: "The Morning Regular",
    icon: <Coffee size={18} className="text-ursa-gold-text" />,
    jtb:
      "When I start my day in Miraflores, help me get a deliberately good cup faster than I could at home, with a face that remembers my order — without making me think.",
    signals: ["Arrives 7:03–7:30am", "Orders the same drink", "Pays in under 90s"],
    proof: "Ursa opens 07:30; the weighing ritual is fast because the barista already knows the dose.",
    channels: ["Ursa Mañana subscription", "WhatsApp morning drop", "Barista recognition"],
    offer: "S/. 20/month unlimited coffee 7–10am + 20% off sides",
    metric: "Visits/week ≥ 3 · side attach ≥ 60%",
    tone: "gold",
  },
  {
    name: "The Tourist Explorer",
    icon: <Compass size={18} className="text-ursa-terracotta" />,
    jtb:
      "When I'm visiting Lima for a few days, help me find a craft coffee spot I can recommend and tag — close to my hotel, with a story I can take home.",
    signals: ["Walks in with a map", "Asks 'what's local?'", "Photographs the cup"],
    proof: "8+ hotels within walking distance; the bear paw Reel trail and concierge cards make Ursa findable.",
    channels: ["Hotel concierge cards", "Instagram Reels", "Google Business Profile", "Bear paw trail"],
    offer: "Origin story card + bean sample to take home",
    metric: "Tags @ursacoffeeperu · retail bean attach ≥ 25%",
    tone: "terracotta",
  },
  {
    name: "The Remote Worker",
    icon: <Users size={18} className="text-ursa-forest-deep" />,
    jtb:
      "When I need to work outside my apartment for two hours, help me find a third place with reliable Wi-Fi and a quality second cup — without feeling rushed.",
    signals: ["Laptop open", "Single drink + refill", "Stays 90+ minutes"],
    proof: "Two-bar layout means a quiet side; the named-drink rotation gives a reason to come back tomorrow.",
    channels: ["Coworking partnerships", "Google Maps", "Slow-hour pricing"],
    offer: "Second-cup loyalty stamp + quiet-side seating",
    metric: "Dwell time ≥ 90min · return within 7 days ≥ 40%",
    tone: "forest",
  },
  {
    name: "The Coffee Curious",
    icon: <Sparkles size={18} className="text-ursa-gold-text" />,
    jtb:
      "When I want to understand specialty coffee, help me learn enough to order with confidence — and tell my friends where beans come from.",
    signals: ["Asks about origin", "Buys retail beans", "Attends cuppings"],
    proof: "Story cards, 'gram of the week', and monthly cupping nights make the craft legible, not intimidating.",
    channels: ["Monthly cupping night", "Gram of the week", "Origin atlas cards", "Workshops"],
    offer: "Cata de Tres Orígenes tasting flight + bean bag",
    metric: "Cupping attendance · retail bean repeat ≥ 30%",
    tone: "gold",
  },
];

type Pillar = {
  title: string;
  promise: string;
  proofs: string[];
  tone: "gold" | "forest" | "terracotta";
};

const MESSAGE_PILLARS: Pillar[] = [
  {
    title: "Visible Craft",
    promise: "The roaster is on stage. Every gram is weighed.",
    proofs: [
      "In-house roaster visible from the bar",
      "'Un gramo a la vez' as the weighing ritual",
      "Baristas trained to talk origin, altitude, process",
    ],
    tone: "gold",
  },
  {
    title: "Ownable Atmosphere",
    promise: "Bear, Art Nouveau, two bars — no one else has this.",
    proofs: [
      "Bear motif as a recurring character",
      "Two-bar theatre: espresso + cold brew side by side",
      "Portmanteau naming: Ursagroni, Maracumango",
    ],
    tone: "forest",
  },
  {
    title: "Honest Origin Stories",
    promise: "We tell you where the bean came from, specifically.",
    proofs: [
      "Filtrado Lonya line with farm + altitude",
      "'Gram of the week' micro-lot highlight",
      "Quarterly origin transparency report",
    ],
    tone: "forest",
  },
  {
    title: "Patient Continuity",
    promise: "Reasons to return weekly, not just once.",
    proofs: [
      "Seasonal drink rotation (Lonya origins)",
      "Ursa Mañana subscription pilot (S/. 20/mo)",
      "Monthly cupping nights + named-drink drops",
    ],
    tone: "gold",
  },
];

const OFFER_STACK = [
  {
    layer: "Continuity",
    item: "Ursa Mañana subscription invite",
    value: "S/. 20/mo (optional)",
    note: "Hand the regular a reason to come back Monday.",
    tone: "forest" as const,
  },
  {
    layer: "Story",
    item: "Origin story card",
    value: "Included",
    note: "Farm, altitude, process. Photographable, take-homeable.",
    tone: "gold" as const,
  },
  {
    layer: "Sample",
    item: "50g bean sample of the week's micro-lot",
    value: "S/. 10",
    note: "Turns one visit into a home-brew trial.",
    tone: "gold" as const,
  },
  {
    layer: "Side",
    item: "Cookie or empanada pairing",
    value: "S/. 6–9",
    note: "The bear recommends the pairing for this drink.",
    tone: "terracotta" as const,
  },
  {
    layer: "Core",
    item: "Pour-over or flat white (named drink)",
    value: "S/. 12–18",
    note: "The craft cup, weighed one gram at a time.",
    tone: "gold" as const,
  },
];

const JOURNEY = [
  {
    stage: "Discover",
    icon: <Compass size={16} />,
    channel: "Instagram Reel · Google Maps · Hotel card · Friend's photo",
    tactic: "Bear paw Reel trail, GBP verified, concierge cards in 8 hotels.",
  },
  {
    stage: "Consider",
    icon: <Star size={16} />,
    channel: "Reviews · Story cards · Named-drink board",
    tactic: "TripAdvisor claimed; origin story cards on the menu make the craft legible.",
  },
  {
    stage: "First visit",
    icon: <Coffee size={16} />,
    channel: "Barista greeting · Bear character · Weighing ritual",
    tactic: "Barista names the bean, hands a story card, mentions the next cupping.",
  },
  {
    stage: "Repeat",
    icon: <Repeat size={16} />,
    channel: "WhatsApp list · Subscription · Named-drink rotation",
    tactic: "Weekly drop notice via WhatsApp; Ursa Mañana invite for 7–10am regulars.",
  },
  {
    stage: "Advocate",
    icon: <Megaphone size={16} />,
    channel: "UGC challenge · Referral coupon · Gram of the week photo",
    tactic: "Bear barista challenge; subscriber brings-a-friend first-cup-free.",
  },
];

const CHANNELS = [
  { name: "Acquisition", stage: "Discover", icon: <Megaphone size={14} />, tactic: "Paid social (Meta, Miraflores 3km) → first-time visitor with a S/. 14 anchor drink." },
  { name: "Local discovery", stage: "Discover", icon: <Footprints size={14} />, tactic: "Bear paw stamps around Miraflores landmarks + 'walk-to-Ursa' Reel." },
  { name: "Google / Maps", stage: "Discover", icon: <MapPin size={14} />, tactic: "Verify Google Business Profile with photos, hours, menu link, and post weekly." },
  { name: "Organic social", stage: "Discover", icon: <Camera size={14} />, tactic: "Reels, Stories, carousels. 'Un gramo a la vez' as the recurring ritual opener." },
  { name: "Paid social", stage: "Discover", icon: <Megaphone size={14} />, tactic: "Meta ads, 3km radius, lookalike on existing regulars. A/B test the bear vs the cup." },
  { name: "Tourism", stage: "Discover", icon: <Compass size={14} />, tactic: "POV walk Reel from Parque Kennedy; 'closer than you think' framing for visitors." },
  { name: "Creator strategy", stage: "Engage", icon: <Star size={14} />, tactic: "3 micro-creators per quarter — a barista, a foodie, a traveller — briefs not posts." },
  { name: "Delivery", stage: "Engage", icon: <Truck size={14} />, tactic: "Rappi menu re-photography + bundle pricing. Packing ritual Reel builds trust." },
  { name: "Events", stage: "Engage", icon: <Calendar size={14} />, tactic: "Monthly cupping night (EXP-06) + seasonal drink reveal with cloth-off ceremony." },
  { name: "Partnerships", stage: "Engage", icon: <Handshake size={14} />, tactic: "8 nearby hotels with concierge origin cards; redeemable coupon code per hotel." },
  { name: "Hotels", stage: "Engage", icon: <Hotel size={14} />, tactic: "Concierge cards + a small bean gift for VIP rooms in partnering properties." },
  { name: "Offices / coworking", stage: "Engage", icon: <Briefcase size={14} />, tactic: "B2B office sampling (10 offices) for wholesale bean accounts + morning runs." },
  { name: "Community", stage: "Retain", icon: <Heart size={14} />, tactic: "Bear barista challenge + 'gram of the week' photo wall in-store." },
  { name: "Loyalty", stage: "Retain", icon: <Star size={14} />, tactic: "CoffeePass Perú listing + named-drink rotation as the recurring reason." },
  { name: "Email / WhatsApp", stage: "Retain", icon: <Mail size={14} />, tactic: "Weekly drop notice + 'gram of the week' highlight. Consent prompt at the till." },
  { name: "Service recovery", stage: "Retain", icon: <RefreshCw size={14} />, tactic: "Direct WhatsApp reply + complimentary return cup. Document the pattern weekly." },
  { name: "Retail beans", stage: "Retain", icon: <Package size={14} />, tactic: "Art Nouveau bean bag labels with roast date; sell at counter and via Rappi." },
  { name: "Referral", stage: "Advocate", icon: <Gift size={14} />, tactic: "Subscriber 'brings a friend' first-cup-free; paired with the bear's recommendation." },
  { name: "Reviews", stage: "Advocate", icon: <MessageSquare size={14} />, tactic: "Google + TripAdvisor review request 24h after first visit; reply within 48h." },
  { name: "Wholesale / B2B", stage: "Advocate", icon: <Store size={14} />, tactic: "Office sampling → bean wholesale accounts. Quarterly origin report as the pitch." },
];

const FUNNEL_STAGES = [
  { name: "Discover", tone: "var(--color-ursa-gold)", desc: "Reach new audiences in Miraflores" },
  { name: "Engage", tone: "var(--color-ursa-forest)", desc: "Convert interest into a visit" },
  { name: "Retain", tone: "var(--color-ursa-forest-deep)", desc: "Turn first visits into a habit" },
  { name: "Advocate", tone: "var(--color-ursa-terracotta)", desc: "Let regulars bring the next regular" },
] as const;

export function GrowthView() {
  const navigate = useNavigate();
  const [expandedPersona, setExpandedPersona] = useState<number | null>(0);

  return (
    <>
      <ViewHero
        eyebrow="Module 04 · Marketing, Growth & Retention"
        title={
          <>
            An integrated, roaster-first growth system that protects the bear, the gram, and the green.
          </>
        }
        lede={
          <>
            Positioning, jobs-to-be-done, message and offer architecture, channel coverage, and a
            customer journey that turns first visitors into advocates — adapted from Hormozi's offer
            discipline and Sutherland's perceived-value lens, with explicit "do not" lists so the
            craft never gets diluted.
          </>
        }
        meta={[
          { label: "Frameworks", value: "Hormozi + Sutherland adapted" },
          { label: "Budget", value: "Lean / Moderate / Growth in PEN" },
          { label: "Spirit", value: "Conservative refinement · no rebrand" },
        ]}
      />

      <ViewSection>
        <DossierLinkBanner moduleId="04-marketing-growth-and-retention-plan" />
      </ViewSection>

      {/* Positioning statement */}
      <ViewSection badge="Positioning" title="One paragraph the whole plan must obey" meta="The north-star statement">
        <Card highlight className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
          <div className="flex items-start gap-4">
            <BearMark size={40} className="text-ursa-dark-roast shrink-0" />
            <div>
              <p className="font-display text-[1.15rem] md:text-[1.35rem] leading-[1.55] text-ursa-dark-roast m-0">
                For the Miraflores resident or visitor who wants specialty coffee with a crafted,
                artistic atmosphere, <strong>Ursa Coffee Roasters</strong> is the in-house roastery
                where the <em>bear, the gram, and the green</em> mean every cup is deliberate.
                Unlike the scaled chains and the award-credentialed tasting rooms that anchor Lima's
                specialty scene, Ursa pairs its own roastery with the bear motif and the Art Nouveau
                lean — the craft is visible, and so is the character.
              </p>
              <p className="font-label text-[0.72rem] tracking-[0.16em] uppercase text-muted-foreground mt-4 mb-0">
                Bear · brand character &nbsp;·&nbsp; Gram · the weighing ritual &nbsp;·&nbsp; Green · origin + forest palette
              </p>
            </div>
          </div>
        </Card>
        <Callout tone="forest" title="If a tactic cannot be defended against this paragraph, it does not ship.">
          Every channel, offer, and creative concept below is checked against this statement.
          Tactics that dilute the bear, skip the gram, or override the green are explicitly marked{" "}
          <em>do not</em>.
        </Callout>
      </ViewSection>

      {/* Personas & JTBD — interactive expandable cards */}
      <ViewSection badge="Audience" title="Who we are serving — and the job each one hires Ursa to do" meta="Four primary personas · click to expand">
        <Grid cols={2}>
          {PERSONAS.map((p, idx) => {
            const expanded = expandedPersona === idx;
            const accent = p.tone === "gold" ? "var(--color-ursa-gold)" : p.tone === "terracotta" ? "var(--color-ursa-terracotta)" : "var(--color-ursa-forest-deep)";
            return (
              <Card
                key={p.name}
                className="flex flex-col gap-3 cursor-pointer border-t-2 overflow-hidden"
                >
                <span className="block h-1 -mx-6 -mt-6 mb-1" style={{ background: accent }} />
                <button
                  onClick={() => setExpandedPersona(expanded ? null : idx)}
                  aria-expanded={expanded}
                  className="text-left flex gap-4 items-start"
                >
                  <div className="shrink-0">
                    <div className="w-11 h-11 rounded-full grid place-items-center border" style={{ background: `${accent}15`, borderColor: `${accent}40` }}>
                      {p.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-1">{p.name}</h3>
                      <ChevronDown size={18} className={cn("text-muted-foreground transition-transform shrink-0", expanded && "rotate-180")} />
                    </div>
                    <p className="text-[0.9rem] italic text-ursa-medium-roast leading-relaxed mb-2 m-0">
                      &ldquo;{p.jtb}&rdquo;
                    </p>
                  </div>
                </button>
                {/* Always-visible signals */}
                <div className="flex flex-wrap gap-1.5 pl-[60px]">
                  {p.signals.map((s) => (
                    <span key={s} className="font-label text-[0.6rem] tracking-[0.1em] uppercase px-2 py-0.5 rounded-full border text-muted-foreground bg-ursa-foam" style={{ borderColor: `${accent}30` }}>
                      {s}
                    </span>
                  ))}
                </div>
                {/* Expandable detail */}
                {expanded && (
                  <div className="pl-[60px] space-y-3 ursa-fade-up border-t border-ursa-line-soft pt-3 mt-1">
                    <div>
                      <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase block mb-1" style={{ color: accent }}>Proof point</span>
                      <p className="text-[0.84rem] text-muted-foreground m-0">{p.proof}</p>
                    </div>
                    <div>
                      <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase block mb-1" style={{ color: accent }}>Channels that reach them</span>
                      <div className="flex flex-wrap gap-1.5">
                        {p.channels.map((ch) => (
                          <span key={ch} className="font-label text-[0.62rem] tracking-[0.06em] px-2 py-0.5 rounded border" style={{ borderColor: `${accent}30`, color: "var(--color-ursa-dark-roast)", background: `${accent}08` }}>
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="rounded-lg p-2.5 border" style={{ borderColor: `${accent}25`, background: `${accent}06` }}>
                        <span className="font-label text-[0.56rem] tracking-[0.14em] uppercase block mb-0.5" style={{ color: accent }}>Offer for them</span>
                        <p className="text-[0.8rem] text-ursa-dark-roast m-0 leading-snug">{p.offer}</p>
                      </div>
                      <div className="rounded-lg p-2.5 border border-ursa-line-soft bg-ursa-foam">
                        <span className="font-label text-[0.56rem] tracking-[0.14em] uppercase block mb-0.5 text-muted-foreground">Success metric</span>
                        <p className="text-[0.8rem] text-ursa-dark-roast m-0 leading-snug font-medium">{p.metric}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </Grid>
      </ViewSection>

      {/* Message architecture tree */}
      <ViewSection badge="Message" title="Message architecture — from one promise down to proof points" meta="Promise → Pillars → Proof">
        <Card className="bg-ursa-foam">
          {/* Root: brand promise */}
          <div className="flex flex-col items-center text-center mb-2">
            <SectionBadge tone="gold">Brand promise</SectionBadge>
            <p className="font-display text-xl md:text-2xl font-semibold text-ursa-dark-roast mt-2 mb-0 max-w-[42ch]">
              Ursa makes the craft visible — every cup is deliberate, weighed one gram at a time.
            </p>
          </div>

          <div className="flex items-center justify-center my-3 text-ursa-gold-text">
            <span className="h-px w-12 bg-ursa-line" />
            <ArrowDown size={14} className="mx-1" />
            <span className="h-px w-12 bg-ursa-line" />
          </div>

          {/* Pillars grid */}
          <Grid cols={2}>
            {MESSAGE_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-lg border border-ursa-line-soft bg-card p-5 shadow-[0_1px_0_rgba(59,36,23,0.06),0_8px_24px_-16px_rgba(59,36,23,0.18)]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Pill tone={pillar.tone}>{pillar.title}</Pill>
                </div>
                <p className="font-display text-[1.05rem] text-ursa-dark-roast font-medium leading-snug mb-3">
                  {pillar.promise}
                </p>
                <div className="flex items-center gap-1 text-ursa-gold-text mb-2">
                  <ArrowDown size={12} />
                  <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase">Proof points</span>
                </div>
                <ul className="space-y-1.5 m-0 p-0 list-none">
                  {pillar.proofs.map((proof) => (
                    <li key={proof} className="flex items-start gap-2 text-[0.85rem] text-foreground/85">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ursa-forest shrink-0" />
                      <span>{proof}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Grid>
        </Card>
        <Callout tone="warn" title="Do not split the pillars across channels — every channel must carry the same promise">
          The temptation is to use Instagram for atmosphere, Google for craft, and WhatsApp for
          continuity. That fragments the brand. The same four pillars appear in every channel,
          only the depth changes.
        </Callout>
      </ViewSection>

      {/* Hormozi adaptation */}
      <ViewSection badge="Framework · Hormozi" title="Hormozi adapted — with explicit 'do not' lists" meta="Suggestive framework · not café-specific empirical evidence">
        <Callout tone="warn" title="Framework grade: suggestive, not proven">
          <p className="m-0 text-[0.88rem]">
            Hormozi&apos;s Value Equation is a popular entrepreneurial framework with anecdotal support but no peer-reviewed
            empirical validation in café/hospitality contexts. A 2026 academic paper classifies it among &quot;bro frameworks.&quot;
            Treat these adaptations as testable hypotheses, not proven principles. The stronger scientific frame is
            Ehrenberg-Bass (How Brands Grow) — distinctive assets + mental/physical availability.
          </p>
        </Callout>
        <Grid cols={2}>
          {HORMOZI_PRINCIPLES.map((h) => (
            <Card key={h.principle} className="flex flex-col">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0">{h.principle}</h3>
                <EvidenceTag status="partial" />
              </div>
              <p className="text-[0.9rem] leading-relaxed text-foreground/85 mb-3">{h.adapted}</p>
              <div className="mt-auto border-t border-ursa-line-soft pt-3">
                <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-ursa-terracotta flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-ursa-terracotta" /> Do not
                </span>
                <p className="text-[0.82rem] text-muted-foreground mt-1 m-0">{h.caveat}</p>
              </div>
            </Card>
          ))}
        </Grid>
      </ViewSection>

      {/* Sutherland adaptation */}
      <ViewSection badge="Framework · Sutherland" title="Sutherland adapted — perceived value is the lever" meta="Moderate evidence · largely anecdotal case studies · test each lever">
        <Callout tone="gold" title="Framework grade: moderate, testable">
          <p className="m-0 text-[0.88rem]">
            Sutherland&apos;s perceived-value principles draw on behavioral economics (Kahneman, Thaler) but are largely
            illustrative case studies, not controlled experiments in hospitality. Each adaptation below should be
            treated as a testable hypothesis with a measurement plan, not a proven tactic.
          </p>
        </Callout>
        <Grid cols={3}>
          {SUTHERLAND_PRINCIPLES.map((s) => (
            <Card key={s.principle}>
              <div className="flex items-baseline justify-between gap-2 mb-1.5">
                <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 leading-snug">
                  {s.principle}
                </h3>
                <EvidenceTag status="partial" />
              </div>
              <p className="text-[0.85rem] leading-relaxed text-foreground/85 m-0">{s.adapted}</p>
              {s.caveat && (
                <p className="mt-3 pt-3 border-t border-ursa-line-soft font-label text-[0.62rem] tracking-[0.12em] uppercase text-ursa-gold-text m-0">
                  {s.caveat}
                </p>
              )}
            </Card>
          ))}
        </Grid>
        <Callout tone="gold" title="The Sutherland lens is the cheaper lever — try it first">
          Hormozi's offer stack changes the receipt. Sutherland's perceived-value moves change the
          same cup's meaning at near-zero cost: a story card, a named preparation, a bear
          character. Sequence Sutherland before Hormozi wherever possible.
        </Callout>
      </ViewSection>

      {/* Offer architecture stack */}
      <ViewSection badge="Offer" title="The Ursa offer stack — five layers from core cup to continuity" meta="Hormozi stack · truthful anchor">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 items-start">
          <Card className="bg-ursa-foam">
            <div className="flex items-center gap-2 mb-4">
              <Layers size={18} className="text-ursa-gold-text" />
              <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0">The stack, bottom to top</h3>
            </div>
            <div className="relative pl-6">
              {/* Vertical connecting line */}
              <span className="absolute left-[10px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-ursa-gold via-ursa-gold/50 to-ursa-forest-deep/30 rounded-full" aria-hidden="true" />
              <div className="space-y-2">
                {[...OFFER_STACK].reverse().map((layer, i) => {
                  const accent = layer.tone === "forest" ? "var(--color-ursa-forest-deep)" : layer.tone === "terracotta" ? "var(--color-ursa-terracotta)" : "var(--color-ursa-gold)";
                  return (
                    <div
                      key={layer.layer}
                      className="relative rounded-lg border bg-card p-4 shadow-[0_1px_0_rgba(59,36,23,0.06),0_8px_24px_-16px_rgba(59,36,23,0.18)] transition hover:shadow-md hover:-translate-y-0.5"
                      style={{
                        marginLeft: `${i * 10}px`,
                        borderColor: accent,
                        borderWidth: "1px",
                      }}
                    >
                      {/* Node dot on the connecting line */}
                      <span
                        className="absolute -left-[19px] top-5 w-3 h-3 rounded-full border-2 border-card shadow-sm"
                        style={{ background: accent }}
                        aria-hidden="true"
                      />
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="font-label text-[0.6rem] tracking-[0.16em] uppercase text-muted-foreground">
                            {layer.layer}
                          </span>
                          <p className="font-display text-[1rem] font-semibold text-ursa-dark-roast mt-0.5 mb-1 m-0">{layer.item}</p>
                          <p className="text-[0.82rem] text-muted-foreground m-0">{layer.note}</p>
                        </div>
                        <span
                          className="font-display text-sm font-semibold whitespace-nowrap"
                          style={{ color: accent }}
                        >
                          {layer.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-[0.78rem] text-muted-foreground mt-4 mb-0 italic">
              Anchor the stack against the à la carte total — truthfully. Continuity is the
              top layer, not the hook.
            </p>
          </Card>

          <div className="space-y-4">
            <Card>
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
                <CupGlyph size={18} className="text-ursa-gold-text" /> Why the stack works
              </h4>
              <ul className="space-y-2 m-0 p-0 list-none text-[0.88rem] text-foreground/85">
                <li className="flex gap-2"><span className="text-ursa-gold-text mt-1">›</span> The core drink anchors price; the side is the highest-margin attach.</li>
                <li className="flex gap-2"><span className="text-ursa-gold-text mt-1">›</span> The bean sample converts one visit into a home-brew trial — repeated exposure.</li>
                <li className="flex gap-2"><span className="text-ursa-gold-text mt-1">›</span> The story card is the Sutherland lever: free to print, raises perceived value.</li>
                <li className="flex gap-2"><span className="text-ursa-gold-text mt-1">›</span> The subscription invite closes the loop only after the craft has been experienced.</li>
              </ul>
            </Card>
            <Card className="bg-ursa-cream">
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">A worked example</h4>
              <p className="text-[0.88rem] text-muted-foreground m-0 mb-3">
                A tourist orders a pour-over, accepts the cookie pairing, takes the bean sample and
                story card, and leaves with a WhatsApp opt-in. Three weeks later, they tag Ursa
                from another city and send a friend in Lima.
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="font-display text-lg font-semibold text-ursa-dark-roast m-0">S/. 27</p>
                  <p className="font-label text-[0.58rem] tracking-[0.1em] uppercase text-muted-foreground m-0">Ticket</p>
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-ursa-forest-deep m-0">3</p>
                  <p className="font-label text-[0.58rem] tracking-[0.1em] uppercase text-muted-foreground m-0">Touchpoints</p>
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-ursa-gold-text m-0">1</p>
                  <p className="font-label text-[0.58rem] tracking-[0.1em] uppercase text-muted-foreground m-0">Referral</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </ViewSection>

      {/* Customer journey timeline */}
      <ViewSection badge="Journey" title="The customer journey, from Discover to Advocate" meta="Horizontal · 5 stages">
        <div className="overflow-x-auto ursa-scroll pb-2">
          <div className="flex items-stretch gap-0 min-w-[760px]">
            {JOURNEY.map((j, i) => (
              <div key={j.stage} className="flex items-stretch flex-1">
                <div className="flex-1 rounded-lg border border-ursa-line-soft bg-card p-4 shadow-[0_1px_0_rgba(59,36,23,0.06),0_8px_24px_-16px_rgba(59,36,23,0.18)] flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-ursa-cream border border-ursa-gold/40 flex items-center justify-center text-ursa-gold-text">
                      {j.icon}
                    </span>
                    <span className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground">
                      Stage {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">{j.stage}</h3>
                  <p className="font-label text-[0.62rem] tracking-[0.1em] uppercase text-ursa-gold-text mb-1 m-0">Channel</p>
                  <p className="text-[0.82rem] text-foreground/85 mb-3 m-0">{j.channel}</p>
                  <p className="font-label text-[0.62rem] tracking-[0.1em] uppercase text-ursa-forest-deep mb-1 m-0 mt-auto">Tactic</p>
                  <p className="text-[0.82rem] text-muted-foreground m-0">{j.tactic}</p>
                </div>
                {i < JOURNEY.length - 1 && (
                  <div className="flex items-center justify-center w-8 text-ursa-gold-text">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <Callout tone="forest" title="Advocate is not the end of the funnel — it is the start of someone else's Discover stage">
          The bear barista challenge, the gram-of-the-week photo, and the referral coupon are
          designed so an advocate's content becomes a stranger's first impression of Ursa. The
          journey is a loop, not a line.
        </Callout>
      </ViewSection>

      {/* Channel coverage grid — grouped by funnel stage */}
      <ViewSection badge="Channels" title="Channel coverage — twenty surfaces, one promise" meta="Grouped by funnel stage · each carries the four pillars">
        {/* Funnel stage legend */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {FUNNEL_STAGES.map((stage, i) => {
            const count = CHANNELS.filter((c) => c.stage === stage.name).length;
            return (
              <div key={stage.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm" style={{ background: stage.tone }} />
                <span className="font-label text-[0.66rem] tracking-[0.12em] uppercase text-ursa-dark-roast">{stage.name}</span>
                <span className="font-label text-[0.6rem] text-muted-foreground">({count})</span>
                {i < FUNNEL_STAGES.length - 1 && <span className="text-muted-foreground/40 mx-1">→</span>}
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          {FUNNEL_STAGES.map((stage) => {
            const stageChannels = CHANNELS.filter((c) => c.stage === stage.name);
            return (
              <div key={stage.name}>
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="font-display text-lg font-semibold m-0" style={{ color: stage.tone }}>{stage.name}</h3>
                  <span className="font-label text-[0.62rem] tracking-[0.12em] uppercase text-muted-foreground">{stage.desc}</span>
                </div>
                <Grid cols={4}>
                  {stageChannels.map((c) => (
                    <Card key={c.name} className="p-4 border-t-2" >
                      <span className="block h-0.5 -mx-4 -mt-4 mb-3" style={{ background: stage.tone }} />
                      <div className="flex items-center gap-2 mb-2" style={{ color: stage.tone }}>
                        {c.icon}
                        <h4 className="font-display text-[0.95rem] font-semibold text-ursa-dark-roast m-0">{c.name}</h4>
                      </div>
                      <p className="text-[0.8rem] leading-snug text-muted-foreground m-0">{c.tactic}</p>
                    </Card>
                  ))}
                </Grid>
              </div>
            );
          })}
        </div>
      </ViewSection>

      {/* Budget scenarios teaser */}
      <ViewSection badge="Budget" title="Three budget scenarios — pick one and the plan adjusts" meta="Lean / Moderate / Growth in PEN">
        <Grid cols={3}>
          {BUDGET_SCENARIOS.map((s, i) => (
            <Card
              key={s.name}
              highlight={i === 1}
              className="flex flex-col"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-display text-xl font-semibold text-ursa-dark-roast mt-0">{s.name}</h3>
                <Pill tone={i === 0 ? "forest" : i === 1 ? "gold" : "default"}>S/. {s.monthlyPEN.toLocaleString()}/mo</Pill>
              </div>
              <p className="text-[0.85rem] text-muted-foreground mb-4 m-0">{s.focus}</p>
              <ul className="space-y-1.5 m-0 p-0 list-none text-[0.82rem] mb-4">
                {s.items.slice(0, 4).map((it) => (
                  <li key={it.item} className="flex justify-between gap-2">
                    <span className="text-foreground/80">{it.item}</span>
                    <span className="font-label text-[0.7rem] text-ursa-medium-roast whitespace-nowrap">S/. {it.cost.toLocaleString()}</span>
                  </li>
                ))}
                {s.items.length > 4 && (
                  <li className="font-label text-[0.62rem] tracking-[0.1em] uppercase text-muted-foreground">
                    + {s.items.length - 4} more line items
                  </li>
                )}
              </ul>
              {/* Prominent total + visual bar */}
              <div className="mt-auto pt-3 border-t border-ursa-line-soft">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground">Monthly total</span>
                  <span className="font-display text-2xl font-semibold text-ursa-dark-roast leading-none">
                    S/. {s.monthlyPEN.toLocaleString()}
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center justify-end pr-2 transition-all duration-700"
                    style={{
                      width: `${(s.monthlyPEN / BUDGET_SCENARIOS[2].monthlyPEN) * 100}%`,
                      background:
                        i === 0
                          ? "linear-gradient(90deg, var(--color-ursa-forest), var(--color-ursa-forest-deep))"
                          : i === 1
                          ? "linear-gradient(90deg, var(--color-ursa-gold-soft), var(--color-ursa-gold))"
                          : "linear-gradient(90deg, var(--color-ursa-terracotta), var(--color-ursa-gold))",
                    }}
                  >
                    <span className="font-label text-[0.56rem] tracking-[0.08em] uppercase text-ursa-cream">
                      {Math.round((s.monthlyPEN / BUDGET_SCENARIOS[2].monthlyPEN) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </Grid>

        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          <StatBlock
            value={`S/. ${BUDGET_SCENARIOS[0].monthlyPEN.toLocaleString()}`}
            label="Lean · free + owned channels first"
            tone="forest"
          />
          <StatBlock
            value={`S/. ${BUDGET_SCENARIOS[1].monthlyPEN.toLocaleString()}`}
            label="Moderate · paid social + creators + cuppings"
            tone="gold"
          />
          <StatBlock
            value={`S/. ${BUDGET_SCENARIOS[2].monthlyPEN.toLocaleString()}`}
            label="Growth · tourism + B2B + subscription pilot"
            tone="terracotta"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => navigate("budget")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-gold text-ursa-dark-roast hover:bg-ursa-gold-soft transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
          >
            <MapIcon size={14} /> Open the Budget Allocator tool
          </button>
          <button
            onClick={() => navigate("roi")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ursa-forest-deep/40 text-ursa-forest-deep hover:bg-ursa-forest-deep hover:text-ursa-cream transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
          >
            <ArrowRight size={14} /> Model ROI per channel
          </button>
        </div>

        <ArtNouveauDivider />

        <div className="grid sm:grid-cols-2 gap-6">
          <Card className="bg-ursa-foam">
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
              <Coffee size={16} className="text-ursa-gold-text" /> What each scenario unlocks
            </h4>
            <ul className="space-y-1.5 text-[0.88rem] m-0 p-0 list-none text-foreground/85">
              <li><strong className="text-ursa-forest-deep">Lean</strong> — runs GBP, WhatsApp, organic Reels, hotel cards, story cards. Ships the first 30 days.</li>
              <li><strong className="text-ursa-gold-text">Moderate</strong> — adds paid social, 2–3 creators, monthly cupping, Rappi optimisation. The 60-day plan.</li>
              <li><strong className="text-ursa-terracotta">Growth</strong> — adds tourism partnerships, B2B office sampling, subscription pilot, photographer. The 90-day plan.</li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
              <Star size={16} className="text-ursa-gold-text" /> How to choose
            </h4>
            <p className="text-[0.88rem] text-muted-foreground m-0">
              Pick the budget the owner can sustain for at least three months without flinching. The
              plan is designed so any of the three is internally coherent — there is no
              "half-Moderate" scenario that breaks. Re-evaluate at day 30 against the experiment
              stop-rules in the Roadmap.
            </p>
          </Card>
        </div>
      </ViewSection>

      <ViewSection>
        <DossierLinkBanner moduleId="04-marketing-growth-and-retention-plan" />
      </ViewSection>
    </>
  );
}
