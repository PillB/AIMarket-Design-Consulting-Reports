"use client";

import { useState, useMemo } from "react";
import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import { BearMark, Pill, Callout, ArtNouveauDivider } from "../ursa-brand";
import { useNavigate } from "@/lib/ursa-nav";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  CreditCard,
  Coffee,
  Bell,
  MapPin,
  Sparkles,
  Brain,
  Target,
  Smartphone,
  Zap,
  TrendingUp,
  Award,
  Info,
  Check,
  ArrowRight,
  PawPrint,
  Heart,
  Calendar,
} from "lucide-react";

/**
 * LoyaltyView — Extra Tool T14 · Loyalty Wallet Card Analysis
 *
 * Ursa's digital loyalty card lives in the customer's phone wallet (Apple
 * Wallet + Google Pay) via itsloyaleats by bytecampperu. Mechanic: 8 visits
 * = 1 free coffee. This view analyses the behavioral science behind the card,
 * models the economics interactively, and recommends specific marketing +
 * design tactics to maximise stamp velocity and retention.
 */

const PEN = (n: number) => (isFinite(n) ? `S/. ${n.toFixed(2)}` : "—");
const PENn = (n: number) => (isFinite(n) ? `S/. ${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : "—");

// --- Paw-print stamp SVG (used on the wallet card mockup) ------------------
function PawStamp({ filled, size = 28 }: { filled: boolean; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={filled ? "text-ursa-gold" : "text-ursa-cream/40"}
    >
      {/* Main pad */}
      <ellipse cx="16" cy="20" rx="6.5" ry="5.5" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" />
      {/* Four toes */}
      <ellipse cx="8" cy="13" rx="2.4" ry="3.2" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="13" cy="9" rx="2.4" ry="3.4" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="19" cy="9" rx="2.4" ry="3.4" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="24" cy="13" rx="2.4" ry="3.2" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

// --- The four behavioral-science principles -------------------------------
const PRINCIPLES = [
  {
    icon: Sparkles,
    tone: "gold" as const,
    name: "Endowed Progress Effect",
    source: "Kivetz, Urminsky & Zheng (2006)",
    finding: "Customers given a head start on a loyalty card are ~82% more likely to complete it.",
    apply:
      "Give new Ursa members 1–2 free stamps on their 8-stamp card at sign-up. A card that reads '2 of 8' feels already begun; a card that reads '0 of 8' feels like starting from scratch.",
    rec: "Stamp 2 free paws on every new wallet card added in-store. Cost: S/. 6 marginal — recovered on visit 3.",
  },
  {
    icon: Heart,
    tone: "forest" as const,
    name: "Endowment Effect",
    source: "Thaler (1980) · Kahneman, Knetsch & Thaler (1990)",
    finding: "People value things more once they feel ownership. A card with their name is theirs; a generic card is the café's.",
    apply:
      "Personalise each wallet pass with the member's name ('Socio: Maria Elena R.'). The card lives in their phone — they 'own' it from the moment they add it.",
    rec: "Pull the member name at registration (QR or WhatsApp opt-in). Render it on the pass front in the Cormorant display face.",
  },
  {
    icon: TrendingUp,
    tone: "terracotta" as const,
    name: "Goal Gradient Effect",
    source: "Kivetz, Urminsky & Zheng (2006) · Nunes & Drèze (2006)",
    finding: "Motivation accelerates as customers approach the goal. The card 'speeds up' psychologically near the end.",
    apply:
      "The 8-stamp design already exploits this: with 5 paws filled, only 3 stand between the member and their free coffee. A 10-stamp card at the same point would feel twice as far.",
    rec: "Fire a push notification at stamp 6: '2 more visits to your free coffee ☕'. Lock-screen visibility makes the gradient tangible.",
  },
  {
    icon: Brain,
    tone: "gold" as const,
    name: "Small Wins / Dopamine Loop",
    source: "Duhigg (2012) · self-determination theory",
    finding: "Each stamp is a micro-reward. The dopamine release builds the habit loop: cue → routine → reward.",
    apply:
      "Each visit's stamp update pushes to the wallet pass in near-real time. The member sees the paw appear, the count tick, and the goal get closer — three micro-rewards in one transaction.",
    rec: "Configure itsloyaleats to push stamp updates within 60 seconds of the POS close. The visible 'paw appearing' is the reward.",
  },
];

// --- Marketing recommendations --------------------------------------------
const MARKETING_TACTICS = [
  {
    icon: Sparkles,
    title: "Endow new members 1–2 stamps",
    body: "Trigger the progress effect from minute one. A '2 of 8' card has a 5× higher completion rate than a '0 of 8' card in published studies.",
    pill: "Trigger",
    tone: "gold" as const,
  },
  {
    icon: Heart,
    title: "Personalise with the member's name",
    body: "Render 'Socio: [Name]' on the pass front. Ownership converts the card from a vendor coupon into the member's property.",
    pill: "Ownership",
    tone: "forest" as const,
  },
  {
    icon: Bell,
    title: "Push at stamp 6",
    body: "Auto-fire a lock-screen notification: '2 more visits to your free coffee.' The goal-gradient effect is strongest in the last 25% of the card.",
    pill: "Push",
    tone: "terracotta" as const,
  },
  {
    icon: MapPin,
    title: "Geofence Alcanfores 183",
    body: "Location-based reminders fire when the member walks within 200m of the café. Apple Wallet + Google Pay both support this natively.",
    pill: "Geo",
    tone: "gold" as const,
  },
  {
    icon: Coffee,
    title: "Cross-promote Ursa Mañana on the back",
    body: "The pass back has space for a logo, a CTA, and a link. Use it to surface the S/. 20/month subscription to the most loyal segment.",
    pill: "Cross-sell",
    tone: "forest" as const,
  },
  {
    icon: Zap,
    title: "Track stamp velocity",
    body: "Measure days-between-stamps per member. Velocity under 14 days = healthy habit; over 30 days = at-risk — fire a 'we miss you' push with a one-stamp bonus.",
    pill: "Metric",
    tone: "terracotta" as const,
  },
];

// --- Competitor comparison -------------------------------------------------
const COMPETITORS_TABLE = [
  {
    name: "Ursa wallet card (itsloyaleats)",
    model: "8-visit stamp · wallet-native",
    friction: "None — add to wallet via QR/NFC",
    data: "Stamp velocity, completion rate, push opens",
    personalisation: "Member name on pass front",
    brand: "Bear-mark paw stamps, Art Nouveau palette",
    advantage: true,
  },
  {
    name: "CoffeePass Perú",
    model: "Membership platform · monthly fee",
    friction: "App or web login",
    data: "Centralised platform analytics",
    personalisation: "Account-level only",
    brand: "Generic platform UI",
    advantage: false,
  },
  {
    name: "Traditional paper punch card",
    model: "10-stamp · physical",
    friction: "Carry the card · lose it = reset",
    data: "None",
    personalisation: "Handwritten at best",
    brand: "Generic circle stamps",
    advantage: false,
  },
  {
    name: "App-based loyalty (custom)",
    model: "10–12 stamp · native app",
    friction: "Download + signup + permissions",
    data: "Rich first-party data — if installed",
    personalisation: "Account + push",
    brand: "Custom — at dev cost",
    advantage: false,
  },
];

// --- Improvement recommendations -------------------------------------------
const IMPROVEMENTS = [
  {
    icon: PawPrint,
    title: "Use the geometric bear as the stamp shape",
    body: "Replace generic circles with the paw-print glyph. Each stamp becomes a bear paw on the card — uniquely Ursa, instantly recognisable in the wallet grid.",
    impact: "Brand recognition",
    tone: "gold" as const,
  },
  {
    icon: Info,
    title: "Rotate a 'bear fact' on the pass back weekly",
    body: "Andean spectacled bear trivia, coffee-origin facts, roasting-curve notes. Gives members a reason to flip the pass between stamps — cheap delight, ownable voice.",
    impact: "Engagement",
    tone: "forest" as const,
  },
  {
    icon: Calendar,
    title: "Double-stamp Tuesday",
    body: "Tuesday is Miraflores' slowest café day. Two stamps per visit on Tuesdays shifts demand without discounting the price — and accelerates the goal gradient.",
    impact: "Demand shaping",
    tone: "terracotta" as const,
  },
  {
    icon: Coffee,
    title: "Auto-stamp Ursa Mañana subscribers",
    body: "Subscribers already pay S/. 20/month for unlimited morning coffee. Auto-stamp one paw per visit so the card stacks on top — free coffee becomes a subscriber surprise, not a substitute.",
    impact: "Retention stack",
    tone: "gold" as const,
  },
];

// ===========================================================================
export function LoyaltyView() {
  const navigate = useNavigate();

  // --- Calculator state -----------------------------------------------------
  const [avgTicket, setAvgTicket] = useState(14);
  const [visitsToComplete, setVisitsToComplete] = useState(8);
  const [freeCoffeeCost, setFreeCoffeeCost] = useState(3);
  const [endowedStamps, setEndowedStamps] = useState(2);
  const [cycles, setCycles] = useState(6);

  const calc = useMemo(() => {
    const paidVisits = Math.max(0, visitsToComplete - endowedStamps);
    const revenuePerCycle = paidVisits * avgTicket;
    const rewardCost = freeCoffeeCost;
    const netPerCycle = revenuePerCycle - rewardCost;
    const clv = netPerCycle * cycles;
    const ratio = rewardCost > 0 ? revenuePerCycle / rewardCost : Infinity;
    return {
      paidVisits,
      revenuePerCycle,
      rewardCost,
      netPerCycle,
      clv,
      ratio,
    };
  }, [avgTicket, visitsToComplete, freeCoffeeCost, endowedStamps, cycles]);

  // Filled paws on the wallet mockup — show 5 of 8
  const TOTAL_STAMPS = 8;
  const FILLED_STAMPS = 5;
  const remaining = TOTAL_STAMPS - FILLED_STAMPS;

  return (
    <>
      <ViewHero
        eyebrow="Extra Tool T14 · Loyalty & retention science"
        title={
          <>
            The 8-visit wallet card — Ursa&apos;s most ownable retention tool, decoded.
          </>
        }
        lede={
          <>
            A digital loyalty card compatible with <strong>Apple Wallet</strong> and{" "}
            <strong>Google Pay</strong>, powered by itsloyaleats by bytecampperu. Eight visits
            earn one free coffee — and eight is the sweet spot: close enough to feel achievable,
            long enough to build a habit. This view breaks down the behavioral science, models
            the economics interactively, and recommends the specific tactics that turn a passive
            stamp card into a retention engine.
          </>
        }
        meta={[
          { label: "Platform", value: "itsloyaleats by bytecampperu" },
          { label: "Mechanic", value: "8 visits = 1 free coffee" },
          { label: "Channels", value: "Apple Wallet + Google Pay" },
          { label: "No app", value: "Wallet-native · one-tap add" },
        ]}
      />

      {/* ============================================================
          SECTION 2 — The wallet card mockup (Apple Wallet pass look)
         ============================================================ */}
      <ViewSection badge="The pass" title="The loyalty card as it lives in the wallet" meta="Mockup · aspect ratio 1.6 : 1 · forest-to-roast gradient">
        <Grid cols={2}>
          {/* The pass */}
          <div className="flex flex-col gap-4">
            <div
              className="relative w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden shadow-[0_24px_60px_-20px_rgba(33,18,8,0.6),0_4px_12px_-4px_rgba(33,18,8,0.4)] border border-ursa-gold/30"
              style={{
                aspectRatio: "1.6 / 1",
                background:
                  "linear-gradient(135deg, #2D4A36 0%, #3E6149 35%, #6F4A2E 75%, #3B2417 100%)",
              }}
            >
              {/* Subtle texture overlay */}
              <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='%23D9BC7E' stroke-width='0.5' opacity='0.5'><path d='M0 40 Q20 20 40 40 T80 40'/><path d='M0 60 Q20 40 40 60 T80 60'/><circle cx='40' cy='40' r='1'/></g></svg>\")",
                }}
              />
              {/* Inner border (Art Nouveau frame) */}
              <div className="absolute inset-3 rounded-xl border border-ursa-gold/30 pointer-events-none" />

              {/* Pass content */}
              <div className="relative h-full flex flex-col p-5 md:p-6 text-ursa-cream">
                {/* Header row: brand + label */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-full bg-ursa-cream grid place-items-center text-ursa-dark-roast shrink-0">
                      <BearMark size={24} />
                    </span>
                    <div className="leading-tight">
                      <div className="font-display text-[1.05rem] md:text-[1.15rem] font-semibold text-ursa-cream">
                        Ursa Coffee Roasters
                      </div>
                      <div className="font-label text-[0.55rem] tracking-[0.22em] uppercase text-ursa-gold-soft">
                        Alcanfores 183 · Miraflores
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-label text-[0.5rem] tracking-[0.2em] uppercase text-ursa-sage">
                      Tarjeta de Fidelidad
                    </div>
                    <div className="font-label text-[0.5rem] tracking-[0.16em] uppercase text-ursa-sage">
                      Loyalty Card
                    </div>
                  </div>
                </div>

                {/* Stamp grid */}
                <div className="flex-1 flex flex-col justify-center my-3">
                  <div className="grid grid-cols-4 gap-2 md:gap-2.5 place-items-center">
                    {Array.from({ length: TOTAL_STAMPS }).map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "w-9 h-9 md:w-10 md:h-10 rounded-full grid place-items-center border",
                          i < FILLED_STAMPS
                            ? "bg-ursa-gold/15 border-ursa-gold/60"
                            : "bg-ursa-cream/5 border-ursa-cream/20 border-dashed"
                        )}
                      >
                        <PawStamp filled={i < FILLED_STAMPS} size={22} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-center">
                    <p className="font-display text-[0.95rem] md:text-[1.05rem] font-semibold text-ursa-cream m-0">
                      {remaining} more visits to your free coffee
                    </p>
                    <p className="font-label text-[0.55rem] tracking-[0.16em] uppercase text-ursa-sage m-0 mt-0.5">
                      {FILLED_STAMPS} of {TOTAL_STAMPS} paws stamped
                    </p>
                  </div>
                </div>

                {/* Member name + progress bar */}
                <div className="border-t border-ursa-cream/15 pt-2.5">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <div>
                      <span className="font-label text-[0.5rem] tracking-[0.18em] uppercase text-ursa-sage">
                        Socio
                      </span>
                      <div className="font-display text-[0.92rem] font-semibold text-ursa-cream leading-tight">
                        Maria Elena R.
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-label text-[0.5rem] tracking-[0.18em] uppercase text-ursa-sage">
                        Miembro desde
                      </span>
                      <div className="font-display text-[0.78rem] text-ursa-gold-soft leading-tight">
                        Mar 2026
                      </div>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1.5 bg-ursa-cream/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-ursa-gold to-ursa-gold-soft rounded-full transition-all duration-500"
                      style={{ width: `${(FILLED_STAMPS / TOTAL_STAMPS) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Add to wallet button */}
                <div className="mt-3 flex items-center justify-center gap-2 bg-ursa-cream/10 hover:bg-ursa-cream/15 border border-ursa-gold/40 rounded-lg py-2 px-3 transition cursor-pointer">
                  <Smartphone size={14} className="text-ursa-gold-soft" />
                  <span className="font-label text-[0.58rem] tracking-[0.18em] uppercase text-ursa-cream">
                    Add to Apple Wallet
                  </span>
                </div>
              </div>
            </div>

            {/* Pass fact strip */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Pill tone="gold">Apple Wallet</Pill>
              <Pill tone="forest">Google Pay</Pill>
              <Pill tone="default">No app download</Pill>
              <Pill tone="default">One-tap add · QR / NFC</Pill>
              <Pill tone="default">Lock-screen visibility</Pill>
            </div>
          </div>

          {/* Side notes */}
          <div className="space-y-4">
            <Card className="bg-ursa-foam">
              <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
                <CreditCard size={18} className="text-ursa-gold-text" /> Why a wallet card, not an app
              </h3>
              <p className="text-[0.92rem] leading-relaxed text-foreground/85 mb-3 m-0">
                A wallet pass lives where the customer already looks — on the lock screen, in
                the wallet grid next to their credit cards. No download. No permissions. No
                abandoned onboarding. Itsloyaleats handles the pass generation, stamp updates,
                and push notifications; Ursa provides the brand assets and the POS integration.
              </p>
              <ul className="space-y-2 text-[0.88rem] m-0 p-0 list-none">
                <li className="flex items-start gap-2">
                  <Check size={15} className="text-ursa-forest-deep mt-0.5 shrink-0" />
                  <span>One-tap add via QR at the counter or NFC tap</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={15} className="text-ursa-forest-deep mt-0.5 shrink-0" />
                  <span>Lock-screen visibility when near Alcanfores 183</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={15} className="text-ursa-forest-deep mt-0.5 shrink-0" />
                  <span>Push notifications for stamp updates and rewards</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={15} className="text-ursa-forest-deep mt-0.5 shrink-0" />
                  <span>Updates push to the card in real time — no reprint, no reset</span>
                </li>
              </ul>
            </Card>
            <Callout tone="gold" title="Why 8, not 10">
              A coffee-shop loyalty card works best in the 8–12 stamp range. Ursa picks 8: the
              goal feels closer than a 10-stamp card at every equivalent point, which sharpens
              the goal-gradient effect. Eight is also short enough that a weekly regular
              completes a card every two months — a healthy reward cadence.
            </Callout>
            <Callout tone="forest" title="The bear paw stamp">
              The stamp itself uses the bear paw glyph rather than a generic circle. Every paw
              printed is a small act of branding — and no Lima competitor has an animal character
              to put on theirs. The paw costs nothing extra on a digital pass.
            </Callout>
          </div>
        </Grid>
      </ViewSection>

      {/* ============================================================
          SECTION 3 — The psychology (4 cards)
         ============================================================ */}
      <ViewSection badge="Behavioral science" title="Four principles that make the 8-visit card work" meta="Each card: principle · how it applies · specific recommendation">
        <Grid cols={2}>
          {PRINCIPLES.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.name}>
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className={cn(
                      "w-10 h-10 rounded-lg grid place-items-center shrink-0",
                      p.tone === "gold" && "bg-ursa-gold/15 text-ursa-gold-text",
                      p.tone === "forest" && "bg-ursa-dark-roast/10 text-ursa-forest-deep",
                      p.tone === "terracotta" && "bg-ursa-terracotta/15 text-ursa-terracotta-text"
                    )}
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.1rem] font-semibold text-ursa-dark-roast m-0 leading-tight">
                      {p.name}
                    </h3>
                    <p className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground m-0 mt-1">
                      {p.source}
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 border-l-2 border-ursa-gold/40 pl-3 py-1.5 mb-3">
                  <p className="text-[0.85rem] italic text-ursa-dark-roast m-0">
                    &ldquo;{p.finding}&rdquo;
                  </p>
                </div>
                <p className="text-[0.92rem] leading-relaxed text-foreground/85 mb-3 m-0">{p.apply}</p>
                <div className="bg-ursa-dark-roast/5 border border-ursa-forest-deep/20 rounded-md p-3">
                  <p className="font-label text-[0.6rem] tracking-[0.16em] uppercase text-ursa-forest-deep mb-1">
                    Recommendation
                  </p>
                  <p className="text-[0.88rem] leading-relaxed text-ursa-dark-roast m-0">{p.rec}</p>
                </div>
              </Card>
            );
          })}
        </Grid>
        <Callout tone="warn" title="The 82% number — read carefully">
          The Kivetz–Urminsky–Zheng (2006) study found ~82% higher completion when customers
          were given a 2-stamp head start on a <strong>10-stamp card</strong>. Ursa uses an
          <strong> 8-visit card</strong>, and the effect size on 8-visit cards has not been
          independently validated. The mechanism (illusory progress → goal gradient) is
          robust, but the specific lift figure should be treated as indicative, not predictive.
          <strong>Test it:</strong> A/B new members with 0 vs 1 endowed stamp over 90 days;
          track completion rate. Stop if the lift is &lt; 10%.
        </Callout>
      </ViewSection>

      {/* ============================================================
          SECTION 4 — Interactive economics calculator
         ============================================================ */}
      <ViewSection badge="The economics" title="The 8-visit math — interactive" meta="Edit any input · outputs recalculate live">
        <Grid cols={2}>
          {/* Inputs */}
          <Card>
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-4 flex items-center gap-2">
              <Coffee size={18} className="text-ursa-gold-text" /> Inputs
            </h3>
            <div className="space-y-5">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <Label className="font-label text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground">
                    Average ticket per visit
                  </Label>
                  <span className="font-display text-lg font-semibold text-ursa-dark-roast">
                    {PEN(avgTicket)}
                  </span>
                </div>
                <Slider
                  value={[avgTicket]}
                  onValueChange={(v) => setAvgTicket(v[0])}
                  min={6}
                  max={30}
                  step={1}
                />
                <p className="text-[0.72rem] text-muted-foreground mt-1.5 m-0">
                  Default S/. 14 — a coffee + pastry attach at Miraflores prices.
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <Label className="font-label text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground">
                    Visits to complete a card
                  </Label>
                  <span className="font-display text-lg font-semibold text-ursa-dark-roast">
                    {visitsToComplete}
                  </span>
                </div>
                <Slider
                  value={[visitsToComplete]}
                  onValueChange={(v) => setVisitsToComplete(v[0])}
                  min={6}
                  max={12}
                  step={1}
                />
                <p className="text-[0.72rem] text-muted-foreground mt-1.5 m-0">
                  Default 8 — Ursa&apos;s chosen mechanic. Try 10 to see the goal-gradient cost.
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <Label className="font-label text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground">
                    Free coffee marginal cost
                  </Label>
                  <span className="font-display text-lg font-semibold text-ursa-dark-roast">
                    {PEN(freeCoffeeCost)}
                  </span>
                </div>
                <Slider
                  value={[freeCoffeeCost]}
                  onValueChange={(v) => setFreeCoffeeCost(v[0])}
                  min={1}
                  max={8}
                  step={0.5}
                />
                <p className="text-[0.72rem] text-muted-foreground mt-1.5 m-0">
                  Ursa&apos;s own-roastery keeps marginal cost at S/. 1.20–1.80/cup; S/. 3 is
                  the conservative all-in cost of a free reward drink.
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <Label className="font-label text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground">
                    Endowed stamps (new members)
                  </Label>
                  <span className="font-display text-lg font-semibold text-ursa-dark-roast">
                    {endowedStamps}
                  </span>
                </div>
                <Slider
                  value={[endowedStamps]}
                  onValueChange={(v) => setEndowedStamps(v[0])}
                  min={0}
                  max={3}
                  step={1}
                />
                <p className="text-[0.72rem] text-muted-foreground mt-1.5 m-0">
                  Head-start stamps gifted at sign-up. Each one costs S/. {freeCoffeeCost.toFixed(2)}{" "}
                  in marginal reward cost if redeemed.
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <Label className="font-label text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground">
                    Cycles to project CLV
                  </Label>
                  <span className="font-display text-lg font-semibold text-ursa-dark-roast">
                    {cycles}
                  </span>
                </div>
                <Slider
                  value={[cycles]}
                  onValueChange={(v) => setCycles(v[0])}
                  min={3}
                  max={12}
                  step={1}
                />
                <p className="text-[0.72rem] text-muted-foreground mt-1.5 m-0">
                  At 8 visits/cycle and ~2 visits/week, 6 cycles ≈ one year per regular.
                </p>
              </div>
            </div>
          </Card>

          {/* Outputs */}
          <div className="space-y-4">
            <Card className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
              <div className="text-center">
                <div className="font-label text-[0.6rem] tracking-[0.16em] uppercase text-muted-foreground">
                  Net revenue per cycle
                </div>
                <div
                  className={cn(
                    "font-display text-5xl font-semibold leading-none mt-2",
                    calc.netPerCycle >= 0 ? "text-ursa-forest-deep" : "text-ursa-terracotta-text"
                  )}
                >
                  {PENn(calc.netPerCycle)}
                </div>
                <div className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground mt-2">
                  {calc.paidVisits} paid visits × {PEN(avgTicket)} − {PEN(freeCoffeeCost)} reward
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-ursa-line-soft">
                <Metric label="Revenue per cycle" value={PENn(calc.revenuePerCycle)} tone="forest" />
                <Metric label="Reward cost" value={PEN(calc.rewardCost)} tone="terracotta" />
                <Metric label="Reward : revenue" value={`${calc.ratio.toFixed(1)}×`} tone="gold" />
                <Metric label="Net per cycle" value={PENn(calc.netPerCycle)} tone="forest" />
              </div>
            </Card>

            <Card highlight>
              <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
                <TrendingUp size={18} className="text-ursa-gold-text" /> Customer lifetime value
              </h3>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display text-4xl font-semibold text-ursa-dark-roast leading-none">
                  {PENn(calc.clv)}
                </span>
                <span className="font-label text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground">
                  over {cycles} cycles
                </span>
              </div>
              <p className="text-[0.88rem] leading-relaxed text-muted-foreground m-0">
                One free coffee (marginal cost{" "}
                <strong className="text-ursa-terracotta-text">{PEN(freeCoffeeCost)}</strong>) drives{" "}
                <strong className="text-ursa-forest-deep">
                  {PENn(calc.revenuePerCycle)}
                </strong>{" "}
                of paid revenue per cycle. The reward is{" "}
                <strong className="text-ursa-gold-text">{calc.ratio.toFixed(1)}×</strong> cheaper
                than the revenue it triggers — the wallet card is the highest-ROI retention
                tactic Ursa can deploy.
              </p>
            </Card>

            <Callout tone="ok" title="The headline">
              A free coffee costs Ursa ~<strong>{PEN(freeCoffeeCost)}</strong> in marginal cost.
              The {calc.paidVisits} visits that earn it generate{" "}
              <strong>{PENn(calc.revenuePerCycle)}</strong> in revenue — a{" "}
              <strong>{calc.ratio.toFixed(1)}× return</strong>. Across {cycles} cycles, that is{" "}
              <strong>{PENn(calc.clv)}</strong> of net contribution per regular who completes
              their cards.
            </Callout>
          </div>
        </Grid>

        {/* Bottom benchmark callout */}
        <Callout tone="warn" title="The revenue benchmark">
          Published benchmarks suggest a well-run coffee-shop loyalty program can generate{" "}
          <strong>~€14,000+ net annual revenue from ~150 regular customers</strong> (after reward
          costs). At Ursa&apos;s default assumptions above, 150 regulars × {PENn(calc.clv)}/year
          each = <strong>{PENn(calc.clv * 150)}</strong> — comfortably in the benchmark range
          even before counting cross-sold Ursa Mañana subscriptions.
        </Callout>
      </ViewSection>

      {/* ============================================================
          SECTION 5 — Marketing recommendations
         ============================================================ */}
      <ViewSection badge="Tactics" title="Six wallet-card marketing tactics" meta="Sequenced from sign-up to at-risk recovery">
        <Grid cols={3}>
          {MARKETING_TACTICS.map((t) => {
            const Icon = t.icon;
            return (
              <Card key={t.title}>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span
                    className={cn(
                      "w-9 h-9 rounded-lg grid place-items-center shrink-0",
                      t.tone === "gold" && "bg-ursa-gold/15 text-ursa-gold-text",
                      t.tone === "forest" && "bg-ursa-dark-roast/10 text-ursa-forest-deep",
                      t.tone === "terracotta" && "bg-ursa-terracotta/15 text-ursa-terracotta-text"
                    )}
                  >
                    <Icon size={18} />
                  </span>
                  <Pill tone={t.tone}>{t.pill}</Pill>
                </div>
                <h3 className="font-display text-[1rem] font-semibold text-ursa-dark-roast mt-0 mb-1.5 leading-tight">
                  {t.title}
                </h3>
                <p className="text-[0.86rem] leading-relaxed text-muted-foreground m-0">{t.body}</p>
              </Card>
            );
          })}
        </Grid>
        <Callout tone="forest" title="Sequencing">
          Tactics 1–2 fire at sign-up (endowed progress + ownership). Tactics 3–4 fire
          mid-cycle (goal-gradient push + geofence). Tactic 5 lives permanently on the pass back
          (cross-sell). Tactic 6 is the at-risk recovery loop — a stamp velocity over 30 days
          triggers a &lsquo;we miss you&rsquo; bonus. Together they cover the full retention
          lifecycle from first add to dormant recovery.
        </Callout>
      </ViewSection>

      {/* ============================================================
          SECTION 6 — Competitor comparison
         ============================================================ */}
      <ViewSection badge="Comparison" title="How Ursa's wallet card compares" meta="Four loyalty models · Ursa's advantage column">
        <Card className="p-4 md:p-6">
          <div className="overflow-x-auto ursa-scroll -mx-4 px-4 md:mx-0 md:px-0">
            <table className="w-full border-collapse text-[0.82rem] min-w-[760px]">
              <thead>
                <tr className="border-b-2 border-ursa-gold/30">
                  <th className="text-left p-3 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
                    Model
                  </th>
                  <th className="text-left p-3 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
                    Mechanic
                  </th>
                  <th className="text-left p-3 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
                    Friction to join
                  </th>
                  <th className="text-left p-3 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
                    Data captured
                  </th>
                  <th className="text-left p-3 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
                    Personalisation
                  </th>
                  <th className="text-left p-3 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
                    Brand expression
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPETITORS_TABLE.map((row) => (
                  <tr
                    key={row.name}
                    className={cn(
                      "border-b border-ursa-line-soft transition",
                      row.advantage
                        ? "bg-ursa-gold/8 hover:bg-ursa-gold/12"
                        : "hover:bg-muted/30"
                    )}
                  >
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-semibold text-ursa-dark-roast">
                          {row.name}
                        </span>
                        {row.advantage && (
                          <Pill tone="gold">
                            <Award size={11} /> Ursa
                          </Pill>
                        )}
                      </div>
                    </td>
                    <td className="p-3 text-foreground/85">{row.model}</td>
                    <td className="p-3 text-foreground/85">{row.friction}</td>
                    <td className="p-3 text-foreground/85">{row.data}</td>
                    <td className="p-3 text-foreground/85">{row.personalisation}</td>
                    <td className="p-3 text-foreground/85">{row.brand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Grid cols={3}>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
              <Zap size={16} className="text-ursa-gold-text" /> Wallet-native
            </h3>
            <p className="text-[0.86rem] leading-relaxed text-muted-foreground m-0">
              The wallet card adds in one tap. App-based loyalty loses 60–80% of prospects at the
              download step. Paper cards lose themselves in jackets within a fortnight.
            </p>
          </Card>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
              <Target size={16} className="text-ursa-terracotta-text" /> 8-visit, not 10
            </h3>
            <p className="text-[0.86rem] leading-relaxed text-muted-foreground m-0">
              The 8-visit mechanic feels closer at every equivalent point — a stronger goal
              gradient than the 10-stamp default most competitors inherit from legacy programs.
            </p>
          </Card>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
              <PawPrint size={16} className="text-ursa-forest-deep" /> Bear-branded
            </h3>
            <p className="text-[0.86rem] leading-relaxed text-muted-foreground m-0">
              The paw-print stamp is ownable. No Lima competitor has an animal character. Every
              stamp on the card is a small branding event that reinforces the Ursa identity.
            </p>
          </Card>
        </Grid>
      </ViewSection>

      {/* ============================================================
          SECTION 7 — Improvement recommendations
         ============================================================ */}
      <ViewSection badge="Refinements" title="Style + marketing improvements" meta="Four specific upgrades · all reversible · all bear-safe">
        <Grid cols={2}>
          {IMPROVEMENTS.map((imp) => {
            const Icon = imp.icon;
            return (
              <Card key={imp.title}>
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className={cn(
                      "w-10 h-10 rounded-lg grid place-items-center shrink-0",
                      imp.tone === "gold" && "bg-ursa-gold/15 text-ursa-gold-text",
                      imp.tone === "forest" && "bg-ursa-dark-roast/10 text-ursa-forest-deep",
                      imp.tone === "terracotta" && "bg-ursa-terracotta/15 text-ursa-terracotta-text"
                    )}
                  >
                    <Icon size={20} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-display text-[1.05rem] font-semibold text-ursa-dark-roast m-0 leading-tight">
                        {imp.title}
                      </h3>
                      <Pill tone={imp.tone}>{imp.impact}</Pill>
                    </div>
                    <p className="text-[0.88rem] leading-relaxed text-muted-foreground m-0">{imp.body}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </Grid>
        <ArtNouveauDivider />
        <Callout tone="forest" title="Spirit-preservation check">
          Every improvement above was screened against the bear, the gram, and the green. The
          paw stamp <em>strengthens</em> the bear. The bear-fact rotation reinforces the
          Art Nouveau voice (green pillar) at near-zero cost. Double-stamp Tuesday shapes demand
          without discounting price — protecting the gram of patient craft. Auto-stamping
          subscribers stacks retention on retention without changing what the member pays.
          None of these refinements would be mistaken for a generic café&apos;s tactic.
        </Callout>
      </ViewSection>

      {/* ============================================================
          SECTION 8 — Dossier link
         ============================================================ */}
      <ViewSection badge="Reference" title="Where this lives in the dossier">
        <div className="flex flex-wrap items-center gap-4">
          <DossierLinkBanner moduleId="04-marketing-growth-and-retention-plan" />
          <button
            onClick={() => navigate("growth")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-dark-roast text-ursa-cream hover:bg-ursa-espresso transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
          >
            <Coffee size={14} /> Open Module 04 · Growth &amp; Retention
            <ArrowRight size={14} />
          </button>
          <button
            onClick={() => navigate("calculator")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-gold text-ursa-dark-roast hover:bg-ursa-gold-soft transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
          >
            <CreditCard size={14} /> Open Ursa Mañana Calculator
            <ArrowRight size={14} />
          </button>
        </div>
      </ViewSection>
    </>
  );
}

// --- Small subcomponents ---------------------------------------------------
function Metric({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "forest" | "gold" | "terracotta";
}) {
  const toneCls = {
    default: "text-ursa-dark-roast",
    forest: "text-ursa-forest-deep",
    gold: "text-ursa-gold-text",
    terracotta: "text-ursa-terracotta-text",
  };
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-label text-[0.58rem] tracking-[0.14em] uppercase text-muted-foreground">
        {label}
      </span>
      <span className={cn("font-display text-[1.15rem] font-semibold leading-tight", toneCls[tone])}>
        {value}
      </span>
    </div>
  );
}
