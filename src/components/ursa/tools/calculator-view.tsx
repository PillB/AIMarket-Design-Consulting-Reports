"use client";

import { useState, useMemo } from "react";
import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import { Pill, Callout, StatBlock, EvidenceTag, SectionBadge } from "../ursa-brand";
import { Calculator, Coffee, TrendingUp, AlertTriangle, Sparkles, RotateCcw, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const PEN = (n: number) => {
  if (!isFinite(n)) return "—";
  return `S/. ${n.toFixed(2)}`;
};

const PRESETS = {
  conservative: { subPrice: 20, costPerCup: 1.8, visitsWeek: 2.5, cupsVisit: 1, attachRate: 50, sideMargin: 4.5, cannibal: 40, avgSpendPre: 14 },
  default: { subPrice: 20, costPerCup: 1.5, visitsWeek: 3, cupsVisit: 1, attachRate: 60, sideMargin: 4.5, cannibal: 30, avgSpendPre: 14 },
  optimistic: { subPrice: 25, costPerCup: 1.2, visitsWeek: 3.5, cupsVisit: 1, attachRate: 70, sideMargin: 5, cannibal: 20, avgSpendPre: 16 },
};

type Inputs = typeof PRESETS.default;

export function CalculatorView() {
  const [inputs, setInputs] = useState<Inputs>(PRESETS.default);
  const [weeksMonth] = useState(4.33);

  const update = <K extends keyof Inputs>(key: K, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const calc = useMemo(() => {
    const { subPrice, costPerCup, visitsWeek, cupsVisit, attachRate, sideMargin, cannibal, avgSpendPre } = inputs;
    const visitsMonth = visitsWeek * weeksMonth;
    const cupsMonth = visitsMonth * cupsVisit;
    const coffeeCost = cupsMonth * costPerCup;
    const sideMarginTotal = visitsMonth * (attachRate / 100) * sideMargin;
    const netProfit = subPrice + sideMarginTotal - coffeeCost;

    const breakevenNoSides = costPerCup > 0 ? subPrice / costPerCup : Infinity;
    const freeCapacity = costPerCup > 0 ? (subPrice + sideMarginTotal) / costPerCup : Infinity;

    let cutoffAttach = NaN;
    if (sideMargin > 0 && visitsMonth > 0) {
      cutoffAttach = ((coffeeCost - subPrice) * 100) / (visitsMonth * sideMargin);
    }

    const cannibalProfit = netProfit + (cannibal / 100) * (subPrice - avgSpendPre);

    let recoverMonths: number;
    if (cannibalProfit < 0 && netProfit > 0) {
      recoverMonths = Math.abs(cannibalProfit) / netProfit;
    } else if (cannibalProfit >= 0) {
      recoverMonths = 0;
    } else {
      recoverMonths = Infinity;
    }

    return { visitsMonth, cupsMonth, coffeeCost, sideMarginTotal, netProfit, breakevenNoSides, freeCapacity, cutoffAttach, cannibalProfit, recoverMonths };
  }, [inputs, weeksMonth]);

  // Sensitivity table data
  const sensitivity = useMemo(() => {
    const attachRates = [0, 20, 40, 60, 80, 100];
    const visitOptions = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
    const rows = visitOptions.map((vw) => {
      const cells = attachRates.map((ar) => {
        const vm = vw * weeksMonth;
        const cc = vm * inputs.cupsVisit * inputs.costPerCup;
        const sm = vm * (ar / 100) * inputs.sideMargin;
        const np = inputs.subPrice + sm - cc;
        return { value: np, isCurrent: Math.abs(vw - inputs.visitsWeek) < 0.01 && Math.abs(ar - inputs.attachRate) < 1 };
      });
      return { visits: vw, cells, isCurrentRow: Math.abs(vw - inputs.visitsWeek) < 0.01 };
    });
    return { attachRates, rows };
  }, [inputs, weeksMonth]);

  // Scale projection: profit at N subscribers
  const scaleProjection = useMemo(() => {
    const subscriberCounts = [25, 50, 100, 200, 500];
    return subscriberCounts.map((n) => ({
      subscribers: n,
      monthlyProfit: calc.cannibalProfit * n,
      cupsPerMonth: calc.cupsMonth * n,
    }));
  }, [calc]);

  const cellClass = (v: number) =>
    v > 1 ? "bg-ursa-forest-deep/15 text-ursa-forest-deep font-semibold" : v < -1 ? "bg-ursa-terracotta/15 text-ursa-terracotta font-semibold" : "bg-muted text-muted-foreground";

  return (
    <>
      <ViewHero
        eyebrow="Module 08 · New product proposal · Interactive"
        title="Ursa Mañana — Subscription Economics & Cutoff Calculator"
        lede={
          <>
            A S/. 20/month unlimited-coffee subscription (Mon–Fri, 7–10am, in-store only, one cup per visit, no milk
            drinks) is profitable on marginal-cost math because Ursa roasts its own beans. Edit every input below and
            watch the profit, break-even, free-cup capacity, and sensitivity table update live. The real risk is
            cannibalization, not per-cup cost — model it explicitly.
          </>
        }
        meta={[
          { label: "Pilot", value: "EXP-11 · capped 50 subscribers" },
          { label: "Default", value: "S/. 20/mo · 7–10am" },
          { label: "Verified cost", value: "S/. 1.20–1.80/cup (own roastery)" },
        ]}
      />

      <ViewSection>
        <DossierLinkBanner moduleId="08-subscription-economics-and-calculator" />
      </ViewSection>

      {/* Presets */}
      <ViewSection>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-label text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground">Quick scenarios:</span>
          {(["conservative", "default", "optimistic"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setInputs(PRESETS[p])}
              className={cn(
                "px-4 py-2 rounded-full font-label text-[0.7rem] tracking-[0.12em] uppercase border transition",
                "hover:-translate-y-0.5"
              )}
              style={{
                borderColor: "var(--color-ursa-gold)",
                background: "var(--color-ursa-paper)",
                color: "var(--color-ursa-medium-roast)",
              }}
            >
              {p === "conservative" && "Conservative"}
              {p === "default" && "Default (recommended)"}
              {p === "optimistic" && "Optimistic"}
            </button>
          ))}
          <button
            onClick={() => setInputs(PRESETS.default)}
            className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-full font-label text-[0.7rem] tracking-[0.12em] uppercase text-muted-foreground hover:text-ursa-dark-roast transition"
          >
            <RotateCcw size={13} /> Reset
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 items-start">
          {/* INPUTS */}
          <Card>
            <h3 className="font-display text-xl font-semibold text-ursa-dark-roast mt-0 mb-1 flex items-center gap-2">
              <Calculator size={20} className="text-ursa-gold-text" /> Edit the inputs
            </h3>
            <p className="text-[0.85rem] text-muted-foreground mb-5">Drag sliders or type values. Everything recalculates instantly.</p>

            <div className="space-y-5">
              {/* Subscription price */}
              <NumberField label="Subscription price (monthly)" value={inputs.subPrice} onChange={(v) => update("subPrice", v)} min={5} max={60} step={1} prefix="S/. " hint="The price a subscriber pays per month." />
              {/* Cost per cup */}
              <NumberField label="Marginal cost per cup" value={inputs.costPerCup} onChange={(v) => update("costPerCup", v)} min={0.3} max={4} step={0.05} prefix="S/. " hint="Bean + water + energy + cup. Own-roastery benchmark: S/. 1.20–1.80." />

              <SliderField label="Visits per week" value={inputs.visitsWeek} onChange={(v) => update("visitsWeek", v)} min={0.5} max={5} step={0.5} display={`${inputs.visitsWeek.toFixed(1)} visits`} hint="How often a subscriber comes in during the 7–10am window." />
              <SliderField label="Cups per visit" value={inputs.cupsVisit} onChange={(v) => update("cupsVisit", v)} min={1} max={3} step={1} display={`${inputs.cupsVisit}`} hint="Capped at 1 in the pilot to prevent abuse." />

              <SliderField label="Side attach rate" value={inputs.attachRate} onChange={(v) => update("attachRate", v)} min={0} max={100} step={5} display={`${inputs.attachRate}%`} hint="% of visits where the subscriber also buys a cookie, pastry, or empanada. This is the lever that makes the model work." />
              <NumberField label="Side margin (per attach)" value={inputs.sideMargin} onChange={(v) => update("sideMargin", v)} min={1} max={12} step={0.25} prefix="S/. " hint="Profit margin on the accompanying food item, not revenue." />

              <SliderField label="Cannibalization rate" value={inputs.cannibal} onChange={(v) => update("cannibal", v)} min={0} max={100} step={5} display={`${inputs.cannibal}%`} hint="% of subscribers who would have paid full price anyway. The biggest risk." />
              <NumberField label="Avg. pre-subscription spend" value={inputs.avgSpendPre} onChange={(v) => update("avgSpendPre", v)} min={6} max={30} step={0.5} prefix="S/. " hint="What a cannibalized customer used to spend per visit, before subscribing." />
            </div>

            <Callout tone="warn" title="The side-pushing strategy is the whole game">
              <p className="m-0">
                Unlimited coffee only works if subscribers buy accompanying food at a healthy rate. The café should
                actively push sides — cookies, the financier de pera, the empanada, seasonal pastries — through pairing
                cards, bear-recommends prompts, and a visible morning pastry case. This calculator assumes you do that;
                if the attach rate stays below 40%, kill the pilot (see stop rule).
              </p>
            </Callout>
          </Card>

          {/* OUTPUTS */}
          <div className="space-y-5">
            {/* Headline profit */}
            <Card highlight className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
              <div className="flex items-center justify-between mb-1">
                <span className="font-label text-[0.7rem] tracking-[0.18em] uppercase text-ursa-gold-text">Net profit per subscriber / month</span>
                <EvidenceTag status="verified" />
              </div>
              <div className={cn("font-display text-5xl font-semibold leading-none mb-2", calc.netProfit >= 0 ? "text-ursa-forest-deep" : "text-ursa-terracotta")}>
                {PEN(calc.netProfit)}
              </div>
              <p className="text-[0.85rem] text-muted-foreground m-0">
                {calc.netProfit >= 0
                  ? "Profitable at these assumptions. Scroll down for the sensitivity table and cannibalization-adjusted view."
                  : "Not profitable at these assumptions. Raise the price, raise the attach rate, or lower the cost per cup."}
              </p>
            </Card>

            {/* Key metrics grid */}
            <Grid cols={2}>
              <MiniMetric icon={<Coffee size={16} />} label="Visits / month" value={calc.visitsMonth.toFixed(1)} tone="neutral" />
              <MiniMetric icon={<Coffee size={16} />} label="Cups / month" value={calc.cupsMonth.toFixed(0)} tone="neutral" />
              <MiniMetric icon={<TrendingUp size={16} />} label="Coffee cost / month" value={PEN(calc.coffeeCost)} tone="terracotta" />
              <MiniMetric icon={<Sparkles size={16} />} label="Side margin / month" value={PEN(calc.sideMarginTotal)} tone="forest" />
              <MiniMetric icon={<Info size={16} />} label="Break-even (no sides)" value={isFinite(calc.breakevenNoSides) ? `${calc.breakevenNoSides.toFixed(1)} cups` : "∞"} tone="neutral" />
              <MiniMetric icon={<Info size={16} />} label="Free-cup capacity" value={isFinite(calc.freeCapacity) ? `${calc.freeCapacity.toFixed(1)} cups` : "∞"} tone="forest" />
            </Grid>

            {/* Cutoff attach */}
            <Card>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-base font-semibold text-ursa-dark-roast m-0">Minimum attach rate to break even</h4>
                <Pill tone={isFinite(calc.cutoffAttach) && calc.cutoffAttach <= inputs.attachRate ? "ok" : "warn"}>
                  {isFinite(calc.cutoffAttach) ? `${calc.cutoffAttach.toFixed(0)}%` : "n/a"}
                </Pill>
              </div>
              <p className="text-[0.85rem] text-muted-foreground m-0">
                {isFinite(calc.cutoffAttach)
                  ? calc.cutoffAttach <= inputs.attachRate
                    ? `You are above the break-even attach rate by ${(inputs.attachRate - calc.cutoffAttach).toFixed(0)} points. Headroom is healthy.`
                    : `You are below break-even by ${(calc.cutoffAttach - inputs.attachRate).toFixed(0)} points. Push sides harder or raise the price.`
                  : "Cannot compute — set a side margin and visit frequency."}
              </p>
            </Card>

            {/* Cannibalization */}
            <Card className="bg-ursa-foam">
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
                <AlertTriangle size={16} className="text-ursa-gold-text" /> Cannibalization-adjusted profit
              </h4>
              <div className="flex items-baseline gap-3 mb-2">
                <span className={cn("font-display text-3xl font-semibold", calc.cannibalProfit >= 0 ? "text-ursa-forest-deep" : "text-ursa-terracotta")}>
                  {PEN(calc.cannibalProfit)}
                </span>
                <span className="text-[0.8rem] text-muted-foreground">per subscriber / month, blended</span>
              </div>
              <p className="text-[0.85rem] text-muted-foreground m-0">
                {calc.cannibalProfit >= 0
                  ? `Even accounting for ${inputs.cannibal}% of subscribers who would have paid full price, the blended profit is positive.`
                  : `At ${inputs.cannibal}% cannibalization, the blended profit is negative. Reduce cannibalization (target new customers, not existing regulars) or raise the price.`}
              </p>
              <div className="mt-3 pt-3 border-t border-ursa-line-soft flex items-center justify-between">
                <span className="font-label text-[0.7rem] tracking-[0.12em] uppercase text-muted-foreground">Recovery time</span>
                <span className="font-display text-base font-semibold text-ursa-dark-roast">
                  {isFinite(calc.recoverMonths) ? (calc.recoverMonths === 0 ? "Already positive" : `${calc.recoverMonths.toFixed(1)} months`) : "Never (kill the pilot)"}
                </span>
              </div>
            </Card>
          </div>
        </div>
      </ViewSection>

      {/* Tabs: sensitivity + scale + assumptions */}
      <ViewSection badge="Deeper analysis" title="Sensitivity, scale, and the honest assumptions">
        <Tabs defaultValue="sensitivity">
          <TabsList className="bg-muted overflow-x-auto ursa-scroll justify-start sm:justify-center flex-nowrap max-w-full">
            <TabsTrigger value="sensitivity">Sensitivity table</TabsTrigger>
            <TabsTrigger value="scale">Scale projection</TabsTrigger>
            <TabsTrigger value="assumptions">Honest assumptions</TabsTrigger>
            <TabsTrigger value="sides">Side-pushing playbook</TabsTrigger>
          </TabsList>

          <TabsContent value="sensitivity" className="mt-6">
            <Card>
              <p className="text-[0.9rem] text-muted-foreground mb-4">
                Net profit per subscriber/month across visit frequency (rows) and side attach rate (columns). The
                highlighted cell is your current scenario. Green is profitable; red is not.
              </p>
              <div className="overflow-x-auto ursa-scroll">
                <table className="w-full border-collapse text-[0.85rem]">
                  <thead>
                    <tr>
                      <th className="text-left p-2 font-label text-[0.7rem] tracking-[0.1em] uppercase text-muted-foreground border-b border-ursa-line">
                        Visits/wk ↓ / Attach →
                      </th>
                      {sensitivity.attachRates.map((ar) => (
                        <th key={ar} className="p-2 font-label text-[0.7rem] tracking-[0.1em] uppercase text-muted-foreground border-b border-ursa-line text-center">
                          {ar}%
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sensitivity.rows.map((row) => (
                      <tr key={row.visits} className={row.isCurrentRow ? "bg-ursa-gold/10" : ""}>
                        <td className="p-2 font-label text-[0.8rem] text-ursa-dark-roast border-b border-ursa-line-soft">
                          {row.visits.toFixed(1)}
                        </td>
                        {row.cells.map((c, i) => (
                          <td key={i} className={cn("p-2 text-center border-b border-ursa-line-soft", cellClass(c.value), c.isCurrent && "outline outline-2 outline-ursa-gold outline-offset-[-2px]")}>
                            {c.value.toFixed(1)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="scale" className="mt-6">
            <Card>
              <p className="text-[0.9rem] text-muted-foreground mb-4">
                Blended monthly profit (cannibalization-adjusted) as the subscriber base grows. The pilot is capped at 50
                to validate before scaling.
              </p>
              <div className="space-y-3">
                {scaleProjection.map((s) => {
                  const isPilot = s.subscribers === 50;
                  const pctOfMax = (s.monthlyProfit / (scaleProjection[scaleProjection.length - 1].monthlyProfit || 1)) * 100;
                  return (
                    <div key={s.subscribers} className="flex items-center gap-4">
                      <span className="font-label text-[0.8rem] tracking-[0.08em] uppercase text-muted-foreground w-28 shrink-0">
                        {s.subscribers} subs {isPilot && <span className="text-ursa-gold-text">· pilot</span>}
                      </span>
                      <div className="flex-1 h-8 bg-muted rounded relative overflow-hidden">
                        <div
                          className={cn("h-full rounded flex items-center justify-end pr-3 transition-all", s.monthlyProfit >= 0 ? "bg-gradient-to-r from-ursa-forest to-ursa-forest-deep" : "bg-gradient-to-r from-ursa-terracotta to-ursa-gold")}
                          style={{ width: `${Math.max(8, Math.abs(pctOfMax))}%` }}
                        >
                          <span className="text-ursa-cream font-display font-semibold text-sm">{PEN(s.monthlyProfit)}</span>
                        </div>
                      </div>
                      <span className="text-[0.75rem] text-muted-foreground w-24 text-right shrink-0">{s.cupsPerMonth.toFixed(0)} cups/mo</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="assumptions" className="mt-6">
            <Grid cols={2}>
              <Callout tone="forest" title="What we verified">
                <ul className="space-y-1.5 m-0 p-0 list-none text-[0.9rem]">
                  <li>• Own-roastery keeps marginal cost low (specialty benchmark US$0.75–1.20/cup; verified range S/. 1.20–1.80).</li>
                  <li>• The 7–10am window targets the morning-regular slot in Miraflores — the same persona the Ursa Mañana subscription is built for.</li>
                  <li>• Side items (cookies, financier, empanada) already exist in-house — no new SKU needed.</li>
                  <li>• Subscription models are consistent with willingness to pay for membership among Lima café customers (CoffeePass is the local precedent).</li>
                </ul>
              </Callout>
              <Callout tone="warn" title="What we assumed (and you should test)">
                <ul className="space-y-1.5 m-0 p-0 list-none text-[0.9rem]">
                  <li>• Side attach rate of 50–70% is achievable with active prompting. Unverified — test in pilot.</li>
                  <li>• Cannibalization of 20–40% is typical for subscription products. Could be higher if existing regulars over-adopt.</li>
                  <li>• One-cup-per-visit cap is intended to be enforceable without alienating subscribers — verify with the first 20 sign-ups.</li>
                  <li>• Marginal cost is assumed to stay at S/. 1.20–1.80 as volume rises, on the assumption that the roastery has spare capacity. Confirm against roast logs before scaling.</li>
                </ul>
              </Callout>
              <Callout tone="stop" title="Stop rule (EXP-11)">
                <p className="m-0 text-[0.9rem]">
                  Kill or revise the pilot if <strong>blended profit per subscriber is below zero after 60 days</strong>,
                  or if <strong>cannibalization exceeds 50%</strong>, or if <strong>side attach rate stays below 40%</strong>{" "}
                  despite active prompting after 30 days. Document the result either way.
                </p>
              </Callout>
              <Callout tone="gold" title="What we deliberately did not assume">
                <ul className="space-y-1.5 m-0 p-0 list-none text-[0.9rem]">
                  <li>• No invented exact ingredient costs — use the scenario ranges.</li>
                  <li>• No guaranteed subscriber count — the pilot is capped at 50 to learn cheaply.</li>
                  <li>• No virality assumption — the subscription is promoted through existing channels first.</li>
                </ul>
              </Callout>
            </Grid>
          </TabsContent>

          <TabsContent value="sides" className="mt-6">
            <Card>
              <h4 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-3">How to push sides without being pushy</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-label text-[0.72rem] tracking-[0.12em] uppercase text-ursa-gold-text mb-2">At the counter</h5>
                  <ul className="space-y-1.5 text-[0.9rem] m-0 p-0 list-none">
                    <li>• "Bear recommends" pairing card on the till — e.g. Ursagroni + financier de pera.</li>
                    <li>• Visible morning pastry case at eye level, lit warm.</li>
                    <li>• Barista trained to offer one specific pairing, not "would you like anything else?"</li>
                    <li>• A S/. 2 add-on price for subscribers (anchored against the S/. 8 retail price).</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-label text-[0.72rem] tracking-[0.12em] uppercase text-ursa-gold-text mb-2">On the app / Rappi / WhatsApp</h5>
                  <ul className="space-y-1.5 text-[0.9rem] m-0 p-0 list-none">
                    <li>• A pre-selected "morning bundle" that defaults to coffee + a side.</li>
                    <li>• A weekly rotating "bear's pick" that creates novelty.</li>
                    <li>• A stamp card: 10 sides bought = 1 free side (retention without discounting coffee).</li>
                  </ul>
                </div>
              </div>
              <Callout tone="forest" title="The principle">
                <p className="m-0 text-[0.9rem]">
                  Do not discount the coffee — discounting erodes the specialty perception that justifies the price. Discount or bundle the sides, which
                  have higher margin elasticity and reinforce the "morning ritual" story. The subscription makes the
                  coffee feel free; the sides are where the relationship and the margin actually live.
                </p>
              </Callout>
            </Card>
          </TabsContent>
        </Tabs>
      </ViewSection>

      <ViewSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatBlock value={PEN(calc.netProfit)} label="Net profit / subscriber / month (current inputs)" tone="forest" />
          <StatBlock value={`${calc.cutoffAttach.toFixed(0)}%`} label="Break-even side attach rate" tone="gold" />
          <StatBlock value={`${calc.freeCapacity.toFixed(0)}`} label="Free cups the margin can absorb" tone="forest" />
          <StatBlock value={isFinite(calc.recoverMonths) ? `${calc.recoverMonths.toFixed(1)} mo` : "kill"} label="Cannibalization recovery time" tone="terracotta" />
        </div>
        <p className="text-[0.78rem] text-muted-foreground mt-6 max-w-3xl">
          <strong>Disclaimer:</strong> This calculator is a decision-support tool, not a financial guarantee. Marginal
          cost per cup depends on roast yield, milk usage, and waste; verify against Ursa's actual roast logs before
          scaling. Virality and subscriber growth are not assumed — the pilot is designed to measure them.
        </p>
      </ViewSection>
    </>
  );
}

function NumberField({ label, value, onChange, min, max, step, prefix, hint }: { label: string; value: number; onChange: (v: number) => void; min: number; max: number; step: number; prefix?: string; hint?: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <Label className="font-label text-[0.74rem] tracking-[0.08em] uppercase text-ursa-dark-roast">{label}</Label>
        <div className="flex items-center gap-1">
          {prefix && <span className="text-[0.8rem] text-muted-foreground">{prefix}</span>}
          <Input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
            className="w-24 h-8 text-right font-display font-semibold text-ursa-dark-roast"
          />
        </div>
      </div>
      {hint && <p className="text-[0.78rem] text-muted-foreground m-0">{hint}</p>}
    </div>
  );
}

function SliderField({ label, value, onChange, min, max, step, display, hint }: { label: string; value: number; onChange: (v: number) => void; min: number; max: number; step: number; display: string; hint?: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <Label className="font-label text-[0.74rem] tracking-[0.08em] uppercase text-ursa-dark-roast">{label}</Label>
        <span className="font-display font-semibold text-ursa-dark-roast text-[0.95rem]">{display}</span>
      </div>
      <Slider value={[value]} min={min} max={max} step={step} onValueChange={(v) => onChange(v[0])} className="py-1" />
      {hint && <p className="text-[0.78rem] text-muted-foreground m-0 mt-1">{hint}</p>}
    </div>
  );
}

function MiniMetric({ icon, label, value, tone }: { icon: React.ReactNode; label: string; value: string; tone: "neutral" | "forest" | "terracotta" }) {
  const tones = { neutral: "text-ursa-dark-roast", forest: "text-ursa-forest-deep", terracotta: "text-ursa-terracotta" };
  return (
    <div className="bg-card border border-ursa-line-soft rounded-lg p-4">
      <div className="flex items-center gap-2 text-ursa-gold-text mb-1">{icon}<span className="font-label text-[0.66rem] tracking-[0.12em] uppercase text-muted-foreground">{label}</span></div>
      <p className={cn("font-display text-2xl font-semibold m-0", tones[tone])}>{value}</p>
    </div>
  );
}
