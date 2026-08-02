"use client";

import { useState, useMemo } from "react";
import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import { BearMark, Pill, Callout, StatBlock, ProgressBar, ArtNouveauDivider } from "../ursa-brand";
import { useNavigate } from "@/lib/ursa-nav";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";
import {
  Users, Coffee, Cookie, TrendingUp, TrendingDown, AlertTriangle,
  Plus, Minus, RotateCcw, Calendar, Target, DollarSign, Info,
} from "lucide-react";

/**
 * Ursa Mañana Pilot Dashboard — an interactive tracker for the S/. 20/month
 * subscription pilot. Models sign-ups, side-attach, cannibalization,
 * and net profit over a 90-day pilot. All inputs editable; metrics recalculate live.
 *
 * Adjust the inputs to model different scenarios.
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
  const { t } = useI18n();
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
    pilotTotals.netProfit > 500 ? { label: t("content.pilot.verdict.ok"), tone: "ok" as const, color: "var(--color-ursa-forest-deep)" } :
    pilotTotals.netProfit > 0 ? { label: t("content.pilot.verdict.warn"), tone: "warn" as const, color: "var(--color-ursa-gold)" } :
    { label: t("content.pilot.verdict.stop"), tone: "stop" as const, color: "var(--color-ursa-terracotta)" };

  return (
    <>
      <ViewHero
        eyebrow={t("content.view.pilot.eyebrow")}
        title={t("content.view.pilot.title")}
        lede={<>{t("content.pilot.lede")}</>}
        meta={[
          { label: t("content.pilot.meta.pilot"), value: t("content.pilot.meta.pilot-value") },
          { label: t("content.pilot.meta.cap"), value: t("content.pilot.meta.cap-value") },
          { label: t("content.pilot.meta.stop"), value: t("content.pilot.meta.stop-value") },
        ]}
        tone="gold"
      />

      <ViewSection>
        <DossierLinkBanner moduleId="08-subscription-economics-and-calculator" />
      </ViewSection>

      {/* Headline pilot metrics */}
      <ViewSection badge={t("content.pilot.section.01.badge")} title={t("content.pilot.section.01.title")} meta={t("content.pilot.section.01.meta")}>
        <Grid cols={4}>
          <Card highlight className="text-center">
            <div className="font-display text-4xl font-semibold leading-none" style={{ color: verdict.color }}>
              {PEN(pilotTotals.netProfit)}
            </div>
            <div className="font-label text-[0.6rem] tracking-[0.16em] uppercase text-muted-foreground mt-2">{t("content.pilot.stat.net-profit")}</div>
            <Pill tone={verdict.tone} className="mt-2">{verdict.label}</Pill>
          </Card>
          <StatBlock value={`${finalWeek.signups}`} label={t("content.pilot.stat.subscribers-w12")} tone="forest" />
          <StatBlock value={PEN(pilotTotals.totalRevenue)} label={t("content.pilot.stat.sub-revenue")} tone="gold" />
          <StatBlock value={`${pilotTotals.totalCups.toLocaleString()}`} label={t("content.pilot.stat.cups-served")} tone="terracotta" />
        </Grid>

        {/* Revenue breakdown bar */}
        <Card className="mt-5">
          <h4 className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-gold-text m-0 mb-3">{t("content.pilot.breakdown.title")}</h4>
          <div className="flex h-8 rounded-lg overflow-hidden border border-ursa-line-soft">
            <div className="h-full flex items-center justify-center text-ursa-espresso font-label text-[0.62rem]" style={{ width: `${(pilotTotals.totalRevenue / (pilotTotals.totalRevenue + pilotTotals.totalSideMargin)) * 100}%`, background: "var(--color-ursa-gold)" }}>
              {((pilotTotals.totalRevenue / (pilotTotals.totalRevenue + pilotTotals.totalSideMargin)) * 100).toFixed(0)}{t("content.pilot.breakdown.sub-label")}
            </div>
            <div className="h-full flex items-center justify-center text-ursa-cream font-label text-[0.62rem]" style={{ width: `${(pilotTotals.totalSideMargin / (pilotTotals.totalRevenue + pilotTotals.totalSideMargin)) * 100}%`, background: "var(--color-ursa-forest-deep)" }}>
              {((pilotTotals.totalSideMargin / (pilotTotals.totalRevenue + pilotTotals.totalSideMargin)) * 100).toFixed(0)}{t("content.pilot.breakdown.sides-label")}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-[0.8rem]">
            <div>
              <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground block">{t("content.pilot.breakdown.stat.sub-revenue")}</span>
              <span className="font-display font-semibold text-ursa-gold-text">{PEN(pilotTotals.totalRevenue)}</span>
            </div>
            <div>
              <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground block">{t("content.pilot.breakdown.stat.side-margin")}</span>
              <span className="font-display font-semibold text-ursa-forest-deep">{PEN(pilotTotals.totalSideMargin)}</span>
            </div>
            <div>
              <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground block">{t("content.pilot.breakdown.stat.coffee-cost")}</span>
              <span className="font-display font-semibold text-ursa-terracotta-text">-{PEN(pilotTotals.totalCoffeeCost)}</span>
            </div>
            <div>
              <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground block">{t("content.pilot.breakdown.stat.cannibal-loss")}</span>
              <span className="font-display font-semibold text-ursa-terracotta-text">{PENd(pilotTotals.totalCannibalLoss)}</span>
            </div>
          </div>
        </Card>
      </ViewSection>

      <ArtNouveauDivider />

      {/* Per-subscriber economics */}
      <ViewSection badge={t("content.pilot.section.02.badge")} title={t("content.pilot.section.02.title")} meta={t("content.pilot.section.02.meta")}>
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-start [grid-template-columns:minmax(0,1fr)]">
          {/* Inputs */}
          <Card>
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-4 flex items-center gap-2">
              <DollarSign size={18} className="text-ursa-gold-text" /> {t("content.pilot.inputs.title")}
            </h3>
            <div className="space-y-4">
              <ParamInput label={t("content.pilot.field.sub-price.label")} value={params.subPrice} onChange={(v) => updateParam("subPrice", v)} min={5} max={40} step={1} prefix="S/. " />
              <ParamInput label={t("content.pilot.field.cost-per-cup.label")} value={params.costPerCup} onChange={(v) => updateParam("costPerCup", v)} min={0.5} max={4} step={0.05} prefix="S/. " />
              <ParamInput label={t("content.pilot.field.visits-week.label")} value={params.visitsPerWeek} onChange={(v) => updateParam("visitsPerWeek", v)} min={1} max={7} step={0.5} />
              <ParamInput label={t("content.pilot.field.side-margin.label")} value={params.sideMargin} onChange={(v) => updateParam("sideMargin", v)} min={1} max={10} step={0.25} prefix="S/. " />
              <ParamInput label={t("content.pilot.field.avg-spend-pre.label")} value={params.avgPreSpend} onChange={(v) => updateParam("avgPreSpend", v)} min={6} max={30} step={0.5} prefix="S/. " />
            </div>
          </Card>

          {/* Per-sub outputs */}
          <div className="space-y-4">
            <Card className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
              <div className="text-center">
                <div className="font-label text-[0.6rem] tracking-[0.16em] uppercase text-muted-foreground">{t("content.pilot.outputs.net-profit-label")}</div>
                <div className={cn("font-display text-5xl font-semibold leading-none mt-2", perSub.netProfit >= 0 ? "text-ursa-forest-deep" : "text-ursa-terracotta-text")}>
                  {PENd(perSub.netProfit)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-ursa-line-soft">
                <Metric label={t("content.pilot.outputs.metric.visits-month")} value={perSub.visitsMonth.toFixed(1)} />
                <Metric label={t("content.pilot.outputs.metric.cups-month")} value={perSub.cupsMonth.toFixed(0)} />
                <Metric label={t("content.pilot.outputs.metric.coffee-cost")} value={PENd(perSub.coffeeCost)} tone="terracotta" />
                <Metric label={t("content.pilot.outputs.metric.side-margin")} value={PENd(perSub.sideMarginTotal)} tone="forest" />
              </div>
            </Card>
            <Callout tone="warn" title={t("content.pilot.cannibal.title")}>
              <p className="m-0 text-[0.86rem]">
                {t("content.pilot.cannibal.body", { spend: params.avgPreSpend.toFixed(2), loss: PENd(perSub.cannibalAdjust) })}
              </p>
            </Callout>
          </div>
        </div>
      </ViewSection>

      {/* Weekly trajectory */}
      <ViewSection badge={t("content.pilot.section.03.badge")} title={t("content.pilot.section.03.title")} meta={t("content.pilot.section.03.meta")}>
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
                    title={t("content.pilot.trajectory.tooltip", { week: i + 1, n: w.signups })}
                  />
                  <span className="font-label text-[0.52rem] tracking-[0.08em] uppercase text-muted-foreground mt-1">{t("content.pilot.trajectory.week-label", { week: i + 1 })}</span>
                </div>
              );
            })}
          </div>

          {/* Week-by-week editable table */}
          <div className="overflow-x-auto ursa-scroll -mx-4 px-4 md:mx-0 md:px-0">
            <table className="w-full border-collapse text-[0.82rem] min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-ursa-gold/30">
                  <th className="text-left p-2 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">{t("content.pilot.table.col.week")}</th>
                  <th className="text-right p-2 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">{t("content.pilot.table.col.subscribers")}</th>
                  <th className="text-right p-2 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">{t("content.pilot.table.col.visits-wk")}</th>
                  <th className="text-right p-2 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">{t("content.pilot.table.col.side-attach")}</th>
                  <th className="text-right p-2 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">{t("content.pilot.table.col.cannibal")}</th>
                  <th className="text-right p-2 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">{t("content.pilot.table.col.week-profit")}</th>
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
                      <td className="p-2 font-display font-semibold text-ursa-dark-roast">{t("content.pilot.trajectory.week-label", { week: i + 1 })}</td>
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
              {t("content.pilot.table.hint")}
            </p>
            <button
              onClick={() => setWeeks(DEFAULT_WEEKS)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label text-[0.64rem] tracking-[0.1em] uppercase text-muted-foreground hover:text-ursa-terracotta-text transition"
            >
              <RotateCcw size={12} /> {t("content.pilot.trajectory.reset")}
            </button>
          </div>
        </Card>
      </ViewSection>

      {/* Stop rule + pilot health */}
      <ViewSection badge={t("content.pilot.section.04.badge")} title={t("content.pilot.section.04.title")} meta={t("content.pilot.section.04.meta")}>
        <Grid cols={3}>
          <Card className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-ursa-terracotta-text" />
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast m-0">{t("content.pilot.stop.1.title")}</h4>
            </div>
            <p className="text-[0.84rem] text-muted-foreground m-0 leading-relaxed">{t("content.pilot.stop.1.body")}</p>
            <div className="mt-auto pt-3">
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">{t("content.pilot.stop.label.current")}</span>
                <span className={cn("font-display font-semibold", perSub.netProfit >= 0 ? "text-ursa-forest-deep" : "text-ursa-terracotta-text")}>{PENd(perSub.netProfit)}</span>
              </div>
              <ProgressBar value={Math.min(100, Math.max(0, (perSub.netProfit / 20) * 100))} tone={perSub.netProfit >= 0 ? "forest" : "terracotta"} />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-ursa-gold-text" />
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast m-0">{t("content.pilot.stop.2.title")}</h4>
            </div>
            <p className="text-[0.84rem] text-muted-foreground m-0 leading-relaxed">{t("content.pilot.stop.2.body")}</p>
            <div className="mt-auto pt-3">
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">{t("content.pilot.stop.label.final-week")}</span>
                <span className={cn("font-display font-semibold", finalWeek.cannibal <= 50 ? "text-ursa-forest-deep" : "text-ursa-terracotta-text")}>{finalWeek.cannibal}%</span>
              </div>
              <ProgressBar value={finalWeek.cannibal} tone={finalWeek.cannibal <= 50 ? "forest" : "terracotta"} />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-ursa-gold-text" />
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast m-0">{t("content.pilot.stop.3.title")}</h4>
            </div>
            <p className="text-[0.84rem] text-muted-foreground m-0 leading-relaxed">{t("content.pilot.stop.3.body")}</p>
            <div className="mt-auto pt-3">
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-label text-[0.58rem] tracking-[0.12em] uppercase text-muted-foreground">{t("content.pilot.stop.label.final-week")}</span>
                <span className={cn("font-display font-semibold", finalWeek.sideAttach >= 40 ? "text-ursa-forest-deep" : "text-ursa-terracotta-text")}>{finalWeek.sideAttach}%</span>
              </div>
              <ProgressBar value={finalWeek.sideAttach} tone={finalWeek.sideAttach >= 40 ? "forest" : "terracotta"} />
            </div>
          </Card>
        </Grid>

        <Callout tone="forest" title={t("content.pilot.health.title")}>
          <p className="m-0 text-[0.9rem]">
            {t("content.pilot.health.body")}
          </p>
        </Callout>
      </ViewSection>

      <ViewSection>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => navigate("calculator")} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ursa-gold text-ursa-dark-roast font-label text-[0.74rem] tracking-[0.12em] uppercase hover:bg-ursa-gold-soft transition shadow-lg">
            <Coffee size={14} /> {t("content.pilot.button.calculator")}
          </button>
          <button onClick={() => navigate("experiments")} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ursa-forest-deep/40 text-ursa-forest-deep font-label text-[0.74rem] tracking-[0.12em] uppercase hover:bg-ursa-dark-roast hover:text-ursa-cream transition">
            <Target size={14} /> {t("content.pilot.button.experiments")}
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
