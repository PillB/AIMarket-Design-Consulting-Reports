"use client";

import { useState, useMemo } from "react";
import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import { BearMark, Pill, Callout, StatBlock, ProgressBar, ArtNouveauDivider } from "../ursa-brand";
import { useNavigate } from "@/lib/ursa-nav";
import { cn } from "@/lib/utils";
import {
  Users, Coffee, Cookie, TrendingUp, TrendingDown, AlertTriangle,
  Plus, Minus, RotateCcw, Calendar, Target, DollarSign, Info,
} from "lucide-react";

/**
 * Ursa Mañana Pilot Dashboard — an interactive tracker for the S/. 20/month
 * subscription pilot (EXP-11). Simulates sign-ups, side-attach, cannibalization,
 * and net profit over a 90-day pilot. All inputs editable; metrics recalculate live.
 *
 * This is a planning simulator, not a live data source. Real pilot data would
 * replace the inputs when available.
 */

type WeekData = { signups: number; activeVisits: number; sideAttach: number; cannibal: number };

const PEN = (n: number) => `S/. ${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
const PENd = (n: number) => `S/. ${n.toFixed(2)}`;

const DEFAULTS = {
  subPrice: 20,
  costPerCup: 1.5,
  visitsPerWeek: 3,
  cupsPerVisit: 1,
  sideMargin: 4.5,
  weeksPerMonth: 4.33,
  avgPreSpend: 14,
};

// Default weekly pilot trajectory (sign-ups ramp over 12 weeks)
const DEFAULT_WEEKS: WeekData[] = [
  { signups: 5, activeVisits: 3, sideAttach: 50, cannibal: 25 },
  { signups: 9, activeVisits: 3, sideAttach: 55, cannibal: 28 },
  { signups: 14, activeVisits: 3, sideAttach: 58, cannibal: 30 },
  { signups: 18, activeVisits: 3, sideAttach: 60, cannibal: 30 },
  { signups: 22, activeVisits: 3, sideAttach: 62, cannibal: 32 },
  { signups: 26, activeVisits: 3, sideAttach: 60, cannibal: 32 },
  { signups: 29, activeVisits: 3, sideAttach: 58, cannibal: 33 },
  { signups: 32, activeVisits: 3, sideAttach: 60, cannibal: 33 },
  { signups: 35, activeVisits: 3, sideAttach: 62, cannibal: 34 },
  { signups: 38, activeVisits: 3, sideAttach: 60, cannibal: 34 },
  { signups: 42, activeVisits: 3, sideAttach: 58, cannibal: 35 },
  { signups: 45, activeVisits: 3, sideAttach: 60, cannibal: 35 },
];

export function PilotView() {
  const navigate = useNavigate();
  const [params, setParams] = useState(DEFAULTS);
  const [weeks, setWeeks] = useState<WeekData[]>(DEFAULT_WEEKS);

  const updateParam = (k: keyof typeof DEFAULTS, v: number) => setParams((p) => ({ ...p, [k]: v }));
  const updateWeek = (i: number, k: keyof WeekData, v: number) =>
    setWeeks((ws) => ws.map((w, idx) => (idx === i ? { ...w, [k]: v } : w)));

  // Per-subscriber economics (per month)
  const perSub = useMemo(() => {
    const visitsMonth = params.visitsPerWeek * params.weeksPerMonth;
    const cupsMonth = visitsMonth * params.cupsPerVisit;
    const coffeeCost = cupsMonth * params.costPerCup;
    const sideMarginTotal = visitsMonth * (50 / 100) * params.sideMargin; // using 50% as the base attach
    const grossProfit = params.subPrice + sideMarginTotal - coffeeCost;
    const cannibalAdjust = (30 / 100) * (params.subPrice - params.avgPreSpend); // 30% cannibal baseline
    const netProfit = grossProfit + cannibalAdjust;
    return { visitsMonth, cupsMonth, coffeeCost, sideMarginTotal, grossProfit, cannibalAdjust, netProfit };
  }, [params]);

  // Pilot totals (cumulative across 12 weeks)
  const pilotTotals = useMemo(() => {
    let totalRevenue = 0;
    let totalCoffeeCost = 0;
    let totalSideMargin = 0;
    let totalCannibalLoss = 0;
    let totalCups = 0;
    let totalSides = 0;
    let peakSubs = 0;
    weeks.forEach((w) => {
      const monthFraction = 1 / params.weeksPerMonth;
      const subRevenue = w.signups * params.subPrice * monthFraction;
      const visits = w.signups * w.activeVisits;
      const cups = visits * params.cupsPerVisit;
      const coffeeCost = cups * params.costPerCup;
      const sides = visits * (w.sideAttach / 100);
      const sideMarginTotal = sides * params.sideMargin;
      const cannibalLoss = w.signups * (w.cannibal / 100) * (params.subPrice - params.avgPreSpend) * monthFraction;
      totalRevenue += subRevenue;
      totalCoffeeCost += coffeeCost;
      totalSideMargin += sideMarginTotal;
      totalCannibalLoss += cannibalLoss;
      totalCups += cups;
      totalSides += sides;
      if (w.signups > peakSubs) peakSubs = w.signups;
    });
    const netProfit = totalRevenue + totalSideMargin - totalCoffeeCost + totalCannibalLoss;
    return { totalRevenue, totalCoffeeCost, totalSideMargin, totalCannibalLoss, totalCups, totalSides, peakSubs, netProfit };
  }, [weeks, params]);

  const finalWeek = weeks[weeks.length - 1];
  const verdict =
    pilotTotals.netProfit > 500 ? { label: "On track", tone: "ok" as const, color: "var(--color-ursa-forest-deep)" } :
    pilotTotals.netProfit > 0 ? { label: "Marginal — watch the trend", tone: "warn" as const, color: "var(--color-ursa-gold)" } :
    { label: "Below break-even — revise", tone: "stop" as const, color: "var(--color-ursa-terracotta)" };

  return (
    <>
      <ViewHero
        eyebrow="Extra Tool T12 · Interactive pilot simulator"
        title="Ursa Mañana Pilot Dashboard — track the S/. 20/month subscription as it runs"
        lede={
          <>
            A 12-week simulator for the Ursa Mañana subscription pilot (EXP-11). Edit the per-subscriber
            economics and the weekly sign-up trajectory; watch net profit, side-attach, and cannibalization
            recalculate live. When the real pilot runs, replace these inputs with actual data.
          </>
        }
        meta={[
          { label: "Pilot", value: "EXP-11 · 12 weeks" },
          { label: "Cap", value: "50 subscribers" },
          { label: "Stop rule", value: "Net profit < 0 at day 60" },
        ]}
        tone="gold"
      />

      <ViewSection>
        <DossierLinkBanner moduleId="08-subscription-economics-and-calculator" />
      </ViewSection>

      {/* Headline pilot metrics */}
      <ViewSection badge="Pilot totals" title="12-week projected outcome" meta="Live · recalculates on every input">
        <Grid cols={4}>
          <Card highlight className="text-center">
            <div className="font-display text-4xl font-semibold leading-none" style={{ color: verdict.color }}>
              {PEN(pilotTotals.netProfit)}
            </div>
            <div className="font-label text-[0.6rem] tracking-[0.16em] uppercase text-muted-foreground mt-2">Net profit · 12 weeks</div>
            <Pill tone={verdict.tone} className="mt-2">{verdict.label}</Pill>
          </Card>
          <StatBlock value={`${finalWeek.signups}`} label="Subscribers at week 12" tone="forest" />
          <StatBlock value={PEN(pilotTotals.totalRevenue)} label="Subscription revenue collected" tone="gold" />
          <StatBlock value={`${pilotTotals.totalCups.toLocaleString()}`} label="Cups served to subscribers" tone="terracotta" />
        </Grid>

        {/* Revenue breakdown bar */}
        <Card className="mt-5">
          <h4 className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-gold-text m-0 mb-3">Where the money comes from and goes</h4>
          <div className="flex h-8 rounded-lg overflow-hidden border border-ursa-line-soft">
            <div className="h-full flex items-center justify-center text-ursa-cream font-label text-[0.62rem]" style={{ width: `${(pilotTotals.totalRevenue / (pilotTotals.totalRevenue + pilotTotals.totalSideMargin)) * 100}%`, background: "var(--color-ursa-gold)" }}>
              {((pilotTotals.totalRevenue / (pilotTotals.totalRevenue + pilotTotals.totalSideMargin)) * 100).toFixed(0)}% sub
            </div>
            <div className="h-full flex items-center justify-center text-ursa-cream font-label text-[0.62rem]" style={{ width: `${(pilotTotals.totalSideMargin / (pilotTotals.totalRevenue + pilotTotals.totalSideMargin)) * 100}%`, background: "var(--color-ursa-forest-deep)" }}>
              {((pilotTotals.totalSideMargin / (pilotTotals.totalRevenue + pilotTotals.totalSideMargin)) * 100).toFixed(0)}% sides
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-[0.8rem]">
            <div>
              <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground block">Subscription revenue</span>
              <span className="font-display font-semibold text-ursa-gold-text">{PEN(pilotTotals.totalRevenue)}</span>
            </div>
            <div>
              <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground block">Side margin</span>
              <span className="font-display font-semibold text-ursa-forest-deep">{PEN(pilotTotals.totalSideMargin)}</span>
            </div>
            <div>
              <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground block">Coffee cost</span>
              <span className="font-display font-semibold text-ursa-terracotta-text">-{PEN(pilotTotals.totalCoffeeCost)}</span>
            </div>
            <div>
              <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground block">Cannibalization loss</span>
              <span className="font-display font-semibold text-ursa-terracotta-text">{PENd(pilotTotals.totalCannibalLoss)}</span>
            </div>
          </div>
        </Card>
      </ViewSection>

      <ArtNouveauDivider />

      {/* Per-subscriber economics */}
      <ViewSection badge="Per subscriber" title="The economics of one subscriber" meta="Editable · drives the pilot totals">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-start [grid-template-columns:minmax(0,1fr)]">
          {/* Inputs */}
          <Card>
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-4 flex items-center gap-2">
              <DollarSign size={18} className="text-ursa-gold-text" /> Edit the inputs
            </h3>
            <div className="space-y-4">
              <ParamInput label="Subscription price (monthly)" value={params.subPrice} onChange={(v) => updateParam("subPrice", v)} min={5} max={40} step={1} prefix="S/. " />
              <ParamInput label="Marginal cost per cup" value={params.costPerCup} onChange={(v) => updateParam("costPerCup", v)} min={0.5} max={4} step={0.05} prefix="S/. " />
              <ParamInput label="Visits per week" value={params.visitsPerWeek} onChange={(v) => updateParam("visitsPerWeek", v)} min={1} max={7} step={0.5} />
              <ParamInput label="Side margin per attach" value={params.sideMargin} onChange={(v) => updateParam("sideMargin", v)} min={1} max={10} step={0.25} prefix="S/. " />
              <ParamInput label="Avg. pre-subscription spend" value={params.avgPreSpend} onChange={(v) => updateParam("avgPreSpend", v)} min={6} max={30} step={0.5} prefix="S/. " />
            </div>
          </Card>

          {/* Per-sub outputs */}
          <div className="space-y-4">
            <Card className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
              <div className="text-center">
                <div className="font-label text-[0.6rem] tracking-[0.16em] uppercase text-muted-foreground">Net profit per subscriber / month</div>
                <div className={cn("font-display text-5xl font-semibold leading-none mt-2", perSub.netProfit >= 0 ? "text-ursa-forest-deep" : "text-ursa-terracotta-text")}>
                  {PENd(perSub.netProfit)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-ursa-line-soft">
                <Metric label="Visits/month" value={perSub.visitsMonth.toFixed(1)} />
                <Metric label="Cups/month" value={perSub.cupsMonth.toFixed(0)} />
                <Metric label="Coffee cost" value={PENd(perSub.coffeeCost)} tone="terracotta" />
                <Metric label="Side margin" value={PENd(perSub.sideMarginTotal)} tone="forest" />
              </div>
            </Card>
            <Callout tone="warn" title="The cannibalization line">
              <p className="m-0 text-[0.86rem]">
                At 30% cannibalization, each subscriber who used to spend S/. {params.avgPreSpend} now costs the
                café <strong>{PENd(perSub.cannibalAdjust)}</strong> in lost revenue. The pilot must attract new
                regulars, not just convert existing ones.
              </p>
            </Callout>
          </div>
        </div>
      </ViewSection>

      {/* Weekly trajectory */}
      <ViewSection badge="Trajectory" title="The 12-week sign-up curve" meta="Edit any week · watch the total move">
        <Card className="p-4 md:p-6">
          {/* Trajectory chart */}
          <div className="flex items-end gap-1.5 md:gap-2 h-40 mb-4">
            {weeks.map((w, i) => {
              const maxSubs = 50;
              const heightPct = (w.signups / maxSubs) * 100;
              const isPeak = w.signups === Math.max(...weeks.map((x) => x.signups));
              return (
                <div key={i} className="flex-1 flex flex-col items-center justify-end group relative">
                  <span className="font-display text-[0.62rem] font-semibold text-ursa-dark-roast mb-1 opacity-0 group-hover:opacity-100 transition">{w.signups}</span>
                  <div
                    className={cn("w-full rounded-t-md transition-all duration-500 hover:brightness-110", isPeak ? "bg-gradient-to-t from-ursa-gold to-ursa-gold-soft" : "bg-gradient-to-t from-ursa-forest-deep to-ursa-forest")}
                    style={{ height: `${Math.max(4, heightPct)}%` }}
                    title={`Week ${i + 1}: ${w.signups} subscribers`}
                  />
                  <span className="font-label text-[0.52rem] tracking-[0.08em] uppercase text-muted-foreground mt-1">W{i + 1}</span>
                </div>
              );
            })}
          </div>

          {/* Week-by-week editable table */}
          <div className="overflow-x-auto ursa-scroll -mx-4 px-4 md:mx-0 md:px-0">
            <table className="w-full border-collapse text-[0.82rem] min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-ursa-gold/30">
                  <th className="text-left p-2 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">Week</th>
                  <th className="text-right p-2 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">Subscribers</th>
                  <th className="text-right p-2 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">Visits/wk</th>
                  <th className="text-right p-2 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">Side attach %</th>
                  <th className="text-right p-2 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">Cannibal %</th>
                  <th className="text-right p-2 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">Week profit</th>
                </tr>
              </thead>
              <tbody>
                {weeks.map((w, i) => {
                  const monthFraction = 1 / params.weeksPerMonth;
                  const weekRevenue = w.signups * params.subPrice * monthFraction;
                  const weekVisits = w.signups * w.activeVisits;
                  const weekCoffeeCost = weekVisits * params.cupsPerVisit * params.costPerCup;
                  const weekSideMargin = weekVisits * (w.sideAttach / 100) * params.sideMargin;
                  const weekCannibal = w.signups * (w.cannibal / 100) * (params.subPrice - params.avgPreSpend) * monthFraction;
                  const weekProfit = weekRevenue + weekSideMargin - weekCoffeeCost + weekCannibal;
                  return (
                    <tr key={i} className="border-b border-ursa-line-soft hover:bg-muted/30 transition">
                      <td className="p-2 font-display font-semibold text-ursa-dark-roast">W{i + 1}</td>
                      <td className="p-2 text-right">
                        <InlineNum value={w.signups} onChange={(v) => updateWeek(i, "signups", v)} />
                      </td>
                      <td className="p-2 text-right">
                        <InlineNum value={w.activeVisits} onChange={(v) => updateWeek(i, "activeVisits", v)} step={0.5} />
                      </td>
                      <td className="p-2 text-right">
                        <InlineNum value={w.sideAttach} onChange={(v) => updateWeek(i, "sideAttach", v)} min={0} max={100} step={5} suffix="%" />
                      </td>
                      <td className="p-2 text-right">
                        <InlineNum value={w.cannibal} onChange={(v) => updateWeek(i, "cannibal", v)} min={0} max={100} step={5} suffix="%" />
                      </td>
                      <td className={cn("p-2 text-right font-display font-semibold", weekProfit >= 0 ? "text-ursa-forest-deep" : "text-ursa-terracotta-text")}>
                        {PENd(weekProfit)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[0.76rem] text-muted-foreground m-0">
              <Info size={11} className="inline mr-1 text-ursa-gold-text/60" />
              Edit any cell to model a different trajectory. Week profit = sub revenue + side margin − coffee cost + cannibalization adjustment.
            </p>
            <button
              onClick={() => setWeeks(DEFAULT_WEEKS)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label text-[0.64rem] tracking-[0.1em] uppercase text-muted-foreground hover:text-ursa-terracotta-text transition"
            >
              <RotateCcw size={12} /> Reset trajectory
            </button>
          </div>
        </Card>
      </ViewSection>

      {/* Stop rule + pilot health */}
      <ViewSection badge="Pilot health" title="Stop rules and signals" meta="Check weekly · kill cleanly if a rule triggers">
        <Grid cols={3}>
          <Card className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-ursa-terracotta-text" />
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast m-0">Stop rule 1</h4>
            </div>
            <p className="text-[0.84rem] text-muted-foreground m-0 leading-relaxed">Net profit per subscriber below zero after 60 days.</p>
            <div className="mt-auto pt-3">
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">Current</span>
                <span className={cn("font-display font-semibold", perSub.netProfit >= 0 ? "text-ursa-forest-deep" : "text-ursa-terracotta-text")}>{PENd(perSub.netProfit)}</span>
              </div>
              <ProgressBar value={Math.min(100, Math.max(0, (perSub.netProfit / 20) * 100))} tone={perSub.netProfit >= 0 ? "forest" : "terracotta"} />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-ursa-gold-text" />
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast m-0">Stop rule 2</h4>
            </div>
            <p className="text-[0.84rem] text-muted-foreground m-0 leading-relaxed">Cannibalization exceeds 50% of subscribers.</p>
            <div className="mt-auto pt-3">
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">Final week</span>
                <span className={cn("font-display font-semibold", finalWeek.cannibal <= 50 ? "text-ursa-forest-deep" : "text-ursa-terracotta-text")}>{finalWeek.cannibal}%</span>
              </div>
              <ProgressBar value={finalWeek.cannibal} tone={finalWeek.cannibal <= 50 ? "forest" : "terracotta"} />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-ursa-gold-text" />
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast m-0">Stop rule 3</h4>
            </div>
            <p className="text-[0.84rem] text-muted-foreground m-0 leading-relaxed">Side attach rate below 40% after 30 days.</p>
            <div className="mt-auto pt-3">
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">Final week</span>
                <span className={cn("font-display font-semibold", finalWeek.sideAttach >= 40 ? "text-ursa-forest-deep" : "text-ursa-terracotta-text")}>{finalWeek.sideAttach}%</span>
              </div>
              <ProgressBar value={finalWeek.sideAttach} tone={finalWeek.sideAttach >= 40 ? "forest" : "terracotta"} />
            </div>
          </Card>
        </Grid>

        <Callout tone="forest" title="What a healthy pilot looks like">
          <p className="m-0 text-[0.9rem]">
            By week 12: 40–50 subscribers, side attach holding ≥ 55%, cannibalization stabilizing around 30–35%,
            and net profit per subscriber above S/. 15. If those hold, the pilot graduates to a permanent channel.
            If not, document what failed and why — the data is the asset, even if the pilot ends.
          </p>
        </Callout>
      </ViewSection>

      <ViewSection>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => navigate("calculator")} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ursa-gold text-ursa-dark-roast font-label text-[0.74rem] tracking-[0.12em] uppercase hover:bg-ursa-gold-soft transition shadow-lg">
            <Coffee size={14} /> Open the full calculator
          </button>
          <button onClick={() => navigate("experiments")} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ursa-forest-deep/40 text-ursa-forest-deep font-label text-[0.74rem] tracking-[0.12em] uppercase hover:bg-ursa-forest-deep hover:text-ursa-cream transition">
            <Target size={14} /> View experiment tracker
          </button>
        </div>
      </ViewSection>
    </>
  );
}

function ParamInput({ label, value, onChange, min, max, step, prefix }: { label: string; value: number; onChange: (v: number) => void; min: number; max: number; step: number; prefix?: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="font-label text-[0.68rem] tracking-[0.1em] uppercase text-ursa-dark-roast">{label}</label>
        <div className="flex items-center gap-1">
          {prefix && <span className="text-[0.78rem] text-muted-foreground">{prefix}</span>}
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
            className="w-20 h-8 text-right rounded-md border border-ursa-line bg-ursa-foam px-2 font-display font-semibold text-ursa-dark-roast focus:outline-none focus:border-ursa-gold focus:ring-1 focus:ring-ursa-gold/30"
          />
        </div>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-muted rounded-full appearance-none cursor-pointer accent-ursa-gold"
      />
    </div>
  );
}

function InlineNum({ value, onChange, min = 0, max = 999, step = 1, suffix }: { value: number; onChange: (v: number) => void; min?: number; max?: number; step?: number; suffix?: string }) {
  return (
    <div className="inline-flex items-center gap-0.5">
      <button onClick={() => onChange(Math.max(min, value - step))} className="w-5 h-5 rounded grid place-items-center text-muted-foreground hover:text-ursa-terracotta-text hover:bg-muted transition" aria-label="Decrease">
        <Minus size={10} />
      </button>
      <span className="font-display font-semibold text-ursa-dark-roast w-8 text-center tabular-nums">{value}{suffix}</span>
      <button onClick={() => onChange(Math.min(max, value + step))} className="w-5 h-5 rounded grid place-items-center text-muted-foreground hover:text-ursa-forest-deep hover:bg-muted transition" aria-label="Increase">
        <Plus size={10} />
      </button>
    </div>
  );
}

function Metric({ label, value, tone = "default" }: { label: string; value: string; tone?: "default" | "forest" | "terracotta" }) {
  const tones = { default: "text-ursa-dark-roast", forest: "text-ursa-forest-deep", terracotta: "text-ursa-terracotta-text" };
  return (
    <div>
      <span className="font-label text-[0.56rem] tracking-[0.12em] uppercase text-muted-foreground block">{label}</span>
      <span className={cn("font-display text-lg font-semibold", tones[tone])}>{value}</span>
    </div>
  );
}
