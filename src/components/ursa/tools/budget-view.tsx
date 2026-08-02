"use client";

import { useState, useMemo } from "react";
import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import { Pill, Callout, StatBlock, EvidenceTag } from "../ursa-brand";
import { BUDGET_SCENARIOS } from "@/lib/ursa-data";
import { useNavigate } from "@/lib/ursa-nav";
import { useI18n } from "@/hooks/use-i18n";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Wallet,
  Plus,
  Trash2,
  RotateCcw,
  TrendingUp,
  Calendar,
  ArrowRight,
  PiggyBank,
  AlertTriangle,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as ReTooltip,
  Legend,
} from "recharts";
import { cn } from "@/lib/utils";

type LineItem = { item: string; cost: number; custom?: boolean };
type Scenario = {
  name: string;
  monthlyPEN: number;
  focus: string;
  items: LineItem[];
};

const PEN = (n: number) => `S/. ${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

const DAYS_PER_MONTH = 30;

const SCENARIO_TONES = ["forest", "gold", "terracotta"] as const;
const SCENARIO_ACCENT_HEX = ["#2D4A36", "#B8924A", "#C16E4B"];
// Text-compliant variants for inline text colors (gold/terracotta fills fail AA on light bg).
const SCENARIO_ACCENT_TEXT_HEX = ["#2D4A36", "#706228", "#984A2E"];
const CHART_COLORS = [
  "#B8924A", // gold
  "#2D4A36", // forest deep
  "#C16E4B", // terracotta
  "#8FA68B", // sage
  "#8B6240", // light roast
  "#3E6149", // forest
  "#D9BC7E", // gold soft
  "#6F5B3D", // green bean
  "#6F4A2E", // medium roast
  "#B7C9A8", // leaf
];

// Deep clone defaults so edits are isolated from the imported data.
const cloneScenarios = (): Scenario[] =>
  BUDGET_SCENARIOS.map((s) => ({
    name: s.name,
    monthlyPEN: s.monthlyPEN,
    focus: s.focus,
    items: s.items.map((it) => ({ item: it.item, cost: it.cost })),
  }));

export function BudgetView() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [scenarios, setScenarios] = useState<Scenario[]>(cloneScenarios);
  const [activeIdx, setActiveIdx] = useState<number>(1); // Moderate by default
  const [newItemName, setNewItemName] = useState("");
  const [newItemCost, setNewItemCost] = useState("100");

  const active = scenarios[activeIdx];

  const editedTotal = useMemo(
    () => active.items.reduce((sum, it) => sum + (Number.isFinite(it.cost) ? it.cost : 0), 0),
    [active.items]
  );
  const originalTotal = active.monthlyPEN;
  const perDay = editedTotal / DAYS_PER_MONTH;
  const delta = editedTotal - originalTotal;

  const updateCost = (idx: number, cost: number) => {
    setScenarios((prev) =>
      prev.map((s, si) => {
        if (si !== activeIdx) return s;
        return {
          ...s,
          items: s.items.map((it, ii) => (ii === idx ? { ...it, cost } : it)),
        };
      })
    );
  };

  const updateName = (idx: number, item: string) => {
    setScenarios((prev) =>
      prev.map((s, si) => {
        if (si !== activeIdx) return s;
        return {
          ...s,
          items: s.items.map((it, ii) => (ii === idx ? { ...it, item } : it)),
        };
      })
    );
  };

  const removeItem = (idx: number) => {
    setScenarios((prev) =>
      prev.map((s, si) => {
        if (si !== activeIdx) return s;
        return { ...s, items: s.items.filter((_, ii) => ii !== idx) };
      })
    );
  };

  const addCustomItem = () => {
    const name = newItemName.trim() || "Custom line item";
    const cost = parseFloat(newItemCost) || 0;
    setScenarios((prev) =>
      prev.map((s, si) => {
        if (si !== activeIdx) return s;
        return { ...s, items: [...s.items, { item: name, cost, custom: true }] };
      })
    );
    setNewItemName("");
    setNewItemCost("100");
  };

  const resetAll = () => {
    setScenarios(cloneScenarios());
  };

  const chartData = active.items
    .map((it) => ({ name: it.item, value: Math.max(0, it.cost || 0) }))
    .filter((d) => d.value > 0);

  return (
    <>
      <ViewHero
        eyebrow={t("content.view.budget.eyebrow")}
        title={<>{t("content.view.budget.title")}</>}
        lede={
          <>
            Start from the verified Lean, Moderate, and Growth scenarios. Edit any line item, add
            your own, and watch the monthly total, per-day cost, and category breakdown recalculate
            instantly. Pick the scenario the owner can sustain for three months without flinching.
          </>
        }
        meta={[
          { label: "Currency", value: "PEN (S/.)" },
          { label: "Source", value: "Module 04 · verified scenarios" },
          { label: "Interactive", value: "Live totals · editable" },
        ]}
      />

      <ViewSection>
        <DossierLinkBanner moduleId="04-marketing-growth-and-retention-plan" />
      </ViewSection>

      {/* Scenario selector + live total */}
      <ViewSection badge="Scenario" title="Pick a scenario, then edit line items live" meta="Three pre-populated · fully editable">
        {/* Scenario tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {scenarios.map((s, i) => {
            const isActive = i === activeIdx;
            const total = s.items.reduce((sum, it) => sum + (Number.isFinite(it.cost) ? it.cost : 0), 0);
            return (
              <button
                key={s.name}
                onClick={() => setActiveIdx(i)}
                className={cn(
                  "px-4 py-2.5 rounded-lg border font-label text-[0.74rem] tracking-[0.12em] uppercase transition",
                  isActive
                    ? `${i === 0 ? "text-ursa-cream" : "text-ursa-espresso"} shadow-[0_8px_24px_-12px_rgba(59,36,23,0.4)]`
                    : "bg-ursa-paper text-ursa-medium-roast border-ursa-line-soft hover:-translate-y-0.5"
                )}
                style={isActive ? { background: SCENARIO_ACCENT_HEX[i], borderColor: SCENARIO_ACCENT_HEX[i] } : {}}
              >
                {s.name} · {PEN(total)}/mo
              </button>
            );
          })}
          <button
            onClick={resetAll}
            className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-full font-label text-[0.7rem] tracking-[0.12em] uppercase text-muted-foreground hover:text-ursa-dark-roast transition"
          >
            <RotateCcw size={13} /> Reset all
          </button>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-start [grid-template-columns:minmax(0,1fr)]">
          {/* Editable line items */}
          <Card>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-0 flex items-center gap-2">
                <Wallet size={18} className="text-ursa-gold-text" /> {active.name} · line items
              </h3>
              <Pill tone={SCENARIO_TONES[activeIdx]}>{active.items.length} items</Pill>
            </div>
            <p className="text-[0.85rem] text-muted-foreground mb-4 m-0">{active.focus}</p>

            <div className="space-y-2">
              {active.items.map((it, i) => (
                <div
                  key={`${active.name}-${i}`}
                  className="grid grid-cols-[1fr_120px_36px] items-center gap-3 rounded-lg border border-ursa-line-soft bg-ursa-foam px-3 py-2"
                >
                  <div className="min-w-0">
                    <Input
                      value={it.item}
                      onChange={(e) => updateName(i, e.target.value)}
                      className="h-8 text-[0.88rem] border-transparent bg-transparent focus-visible:border-ursa-gold"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-label text-[0.66rem] tracking-[0.08em] text-muted-foreground">S/.</span>
                    <Input
                      type="number"
                      value={it.cost}
                      min={0}
                      onChange={(e) => updateCost(i, parseFloat(e.target.value) || 0)}
                      className="h-8 text-[0.88rem] text-right font-label"
                    />
                  </div>
                  <button
                    onClick={() => removeItem(i)}
                    aria-label={`Remove ${it.item}`}
                    className="w-8 h-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-ursa-terracotta-text hover:bg-ursa-terracotta/10 transition"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              {active.items.length === 0 && (
                <p className="text-[0.85rem] text-muted-foreground italic m-0">
                  No line items. Add one below.
                </p>
              )}
            </div>

            {/* Add custom line item */}
            <div className="mt-4 pt-4 border-t border-ursa-line-soft">
              <Label className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-muted-foreground mb-2 block">
                Add a custom line item to <span className="text-ursa-dark-roast">{active.name}</span>
              </Label>
              <div className="grid grid-cols-[1fr_120px_auto] gap-2 items-center">
                <Input
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="e.g. Influencer trip hosting"
                  className="h-9"
                />
                <div className="flex items-center gap-1">
                  <span className="font-label text-[0.66rem] tracking-[0.08em] text-muted-foreground">S/.</span>
                  <Input
                    type="number"
                    value={newItemCost}
                    onChange={(e) => setNewItemCost(e.target.value)}
                    className="h-9 text-right"
                  />
                </div>
                <Button
                  onClick={addCustomItem}
                  className="bg-ursa-dark-roast hover:bg-ursa-espresso text-ursa-cream h-9 px-3"
                >
                  <Plus size={14} className="mr-1" /> Add
                </Button>
              </div>
            </div>
          </Card>

          {/* Live total + per-day */}
          <div className="space-y-5">
            <Card highlight className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
              <div className="flex items-center justify-between mb-1">
                <span className="font-label text-[0.7rem] tracking-[0.18em] uppercase text-ursa-gold-text">
                  Live monthly total · {active.name}
                </span>
                <EvidenceTag status="verified" />
              </div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-display text-5xl font-semibold leading-none text-ursa-dark-roast">
                  {PEN(editedTotal)}
                </span>
                <span className="font-label text-[0.72rem] tracking-[0.1em] uppercase text-muted-foreground">/ month</span>
              </div>
              <p className="text-[0.85rem] text-muted-foreground m-0">
                Original baseline: <strong className="text-ursa-dark-roast">{PEN(originalTotal)}</strong>
                {" · "}
                <span className={delta > 0 ? "text-ursa-terracotta-text" : delta < 0 ? "text-ursa-forest-deep" : "text-muted-foreground"}>
                  {delta > 0 ? "+" : ""}
                  {PEN(delta)}
                </span>
                {" "}vs. baseline
              </p>
            </Card>

            <Grid cols={2}>
              <StatBlock
                value={PEN(perDay)}
                label="Per-day cost · 30-day month"
                tone="forest"
              />
              <StatBlock
                value={`${active.items.length}`}
                label="Active line items in this scenario"
                tone="gold"
              />
            </Grid>

            <Card className="bg-ursa-foam">
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
                <Calendar size={16} className="text-ursa-gold-text" /> Per-day breakdown
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between text-[0.85rem]">
                  <span className="text-muted-foreground">Daily cost</span>
                  <span className="font-display font-semibold text-ursa-dark-roast">{PEN(perDay)}</span>
                </div>
                <div className="flex justify-between text-[0.85rem]">
                  <span className="text-muted-foreground">Weekly cost (÷ 4.33)</span>
                  <span className="font-display font-semibold text-ursa-dark-roast">{PEN(editedTotal / 4.33)}</span>
                </div>
                <div className="flex justify-between text-[0.85rem]">
                  <span className="text-muted-foreground">Quarterly cost (× 3)</span>
                  <span className="font-display font-semibold text-ursa-dark-roast">{PEN(editedTotal * 3)}</span>
                </div>
              </div>
              {Math.abs(delta) > 0 && (
                <Callout tone={delta > 0 ? "stop" : "ok"} title={delta > 0 ? "You are over baseline" : "You are under baseline"}>
                  <p className="m-0 text-[0.85rem]">
                    {delta > 0
                      ? `Adding ${PEN(delta)}/mo means ${PEN(delta * 3)} over a quarter. Confirm the owner can sustain it before committing.`
                      : `Cutting ${PEN(Math.abs(delta))}/mo saves ${PEN(Math.abs(delta) * 3)} over a quarter. Make sure no experiment loses its budget.`}
                  </p>
                </Callout>
              )}
            </Card>
          </div>
        </div>
      </ViewSection>

      {/* Allocation chart */}
      <ViewSection badge="Allocation" title={`Where the ${active.name} budget goes`} meta="Category-by-category breakdown">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 items-start [grid-template-columns:minmax(0,1fr)]">
          <Card>
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-1 flex items-center gap-2">
              <PiggyBank size={18} className="text-ursa-gold-text" /> Spend by line item
            </h3>
            <p className="text-[0.85rem] text-muted-foreground mb-4 m-0">
              Each slice is one line item. Edit the cost above and watch the chart redraw.
            </p>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={110}
                    paddingAngle={2}
                    stroke="var(--color-ursa-foam)"
                    strokeWidth={2}
                  >
                    {chartData.map((_, i) => (
                      <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                  <ReTooltip
                    formatter={(value: number, name: string) => [PEN(value), name]}
                    contentStyle={{
                      background: "var(--color-ursa-foam)",
                      border: "1px solid var(--color-ursa-line)",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      color: "var(--color-ursa-dark-roast)",
                    }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: "0.78rem" }}
                    iconType="circle"
                    formatter={(value: string) => (
                      <span style={{ color: "var(--color-ursa-medium-roast)" }}>{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="bg-ursa-foam">
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-3">
              Ranked by share of total
            </h3>
            <div className="space-y-2 max-h-[320px] overflow-y-auto ursa-scroll pr-1">
              {[...active.items]
                .map((it) => ({ ...it, share: editedTotal > 0 ? (it.cost / editedTotal) * 100 : 0 }))
                .sort((a, b) => b.cost - a.cost)
                .map((it, i) => (
                  <div key={`${it.item}-${i}`} className="rounded-md border border-ursa-line-soft bg-card px-3 py-2">
                    <div className="flex justify-between items-baseline gap-2 mb-1">
                      <span className="text-[0.82rem] font-medium text-ursa-dark-roast truncate flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ background: CHART_COLORS[i % CHART_COLORS.length] }}
                        />
                        {it.item}
                      </span>
                      <span className="font-label text-[0.72rem] text-ursa-medium-roast whitespace-nowrap">
                        {PEN(it.cost)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.max(0, Math.min(100, it.share))}%`,
                            background: CHART_COLORS[i % CHART_COLORS.length],
                          }}
                        />
                      </div>
                      <span className="font-label text-[0.66rem] text-muted-foreground w-10 text-right">
                        {it.share.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </Card>
        </div>
      </ViewSection>

      {/* Comparison view */}
      <ViewSection badge="Compare" title="All three scenarios side by side" meta="Lean vs Moderate vs Growth">
        <Card className="p-0 overflow-hidden">
          <div className="overflow-x-auto ursa-scroll -mx-1 px-1">
            <table className="w-full border-collapse text-[0.88rem] min-w-[420px]">
              <thead>
                <tr className="bg-ursa-cream">
                  <th className="text-left p-3 font-label text-[0.66rem] tracking-[0.12em] uppercase text-muted-foreground border-b border-ursa-line">
                    Metric
                  </th>
                  {scenarios.map((s, i) => (
                    <th
                      key={s.name}
                      className="text-left p-3 font-label text-[0.72rem] tracking-[0.1em] uppercase border-b border-ursa-line"
                      style={{ color: SCENARIO_ACCENT_TEXT_HEX[i] }}
                    >
                      {s.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <TableRow label="Edited monthly total" tone="strong" render={(s) => PEN(s.items.reduce((sum, it) => sum + (Number.isFinite(it.cost) ? it.cost : 0), 0))} scenarios={scenarios} />
                <TableRow label="Baseline monthly" render={(s) => PEN(s.monthlyPEN)} scenarios={scenarios} />
                <TableRow label="Per-day cost" render={(s) => PEN(s.items.reduce((sum, it) => sum + (Number.isFinite(it.cost) ? it.cost : 0), 0) / DAYS_PER_MONTH)} scenarios={scenarios} />
                <TableRow label="Line items" render={(s) => `${s.items.length}`} scenarios={scenarios} />
                <TableRow label="Focus" tone="wrap" render={(s) => s.focus} scenarios={scenarios} />
                <TableRow
                  label="Top item"
                  render={(s) => {
                    const top = [...s.items].sort((a, b) => b.cost - a.cost)[0];
                    return top ? `${top.item} · ${PEN(top.cost)}` : "—";
                  }}
                  scenarios={scenarios}
                />
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid sm:grid-cols-3 gap-6 mt-6">
          {scenarios.map((s, i) => {
            const total = s.items.reduce((sum, it) => sum + (Number.isFinite(it.cost) ? it.cost : 0), 0);
            return (
              <StatBlock
                key={s.name}
                value={PEN(total)}
                label={`${s.name} · edited monthly total`}
                tone={SCENARIO_TONES[i]}
              />
            );
          })}
        </div>

        <Callout tone="warn" title="The cheap scenario is the real benchmark">
          <p className="m-0">
            If the edited Moderate or Growth total creeps past what the owner can sustain for three
            months, fall back to the Lean edited total. The plan is internally coherent at any of
            the three — there is no half-Moderate scenario that breaks.
          </p>
        </Callout>
      </ViewSection>

      {/* ROI hint */}
      <ViewSection badge="Next step" title="Once the budget is set, model the return per channel">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
          <Card className="bg-gradient-to-br from-ursa-foam to-ursa-cream">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-ursa-gold/15 border border-ursa-gold flex items-center justify-center shrink-0">
                <TrendingUp size={18} className="text-ursa-gold-text" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-1.5">
                  ROI modelling lives in the ROI Dashboard
                </h3>
                <p className="text-[0.9rem] text-muted-foreground m-0 mb-3">
                  The Budget Allocator tells you what you spend. The ROI Dashboard turns each
                  channel's spend into expected customers, revenue, payback months, and ROI % — with
                  a confidence slider for best/worst case. Use both together: set the budget here,
                  then validate it there.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate("roi")}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-dark-roast text-ursa-cream hover:bg-ursa-espresso transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
                  >
                    <TrendingUp size={14} /> Open the ROI Dashboard <ArrowRight size={14} />
                  </button>
                  <button
                    onClick={() => navigate("growth")}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ursa-gold/40 text-ursa-gold-text hover:bg-ursa-gold hover:text-ursa-dark-roast transition font-label text-[0.74rem] tracking-[0.1em] uppercase"
                  >
                    Back to Module 04
                  </button>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <AlertTriangle size={16} className="text-ursa-terracotta-text" /> What this tool does not do
            </h4>
            <ul className="space-y-1.5 m-0 p-0 list-none text-[0.85rem] text-muted-foreground">
              <li className="flex gap-2"><span className="text-ursa-terracotta-text mt-1">›</span> It does not model revenue or payback — see ROI Dashboard.</li>
              <li className="flex gap-2"><span className="text-ursa-terracotta-text mt-1">›</span> It does not persist edits across reloads — this is a scratchpad.</li>
              <li className="flex gap-2"><span className="text-ursa-terracotta-text mt-1">›</span> It does not enforce a total cap — set your own discipline.</li>
            </ul>
          </Card>
        </div>
      </ViewSection>

      <ViewSection>
        <DossierLinkBanner moduleId="04-marketing-growth-and-retention-plan" />
      </ViewSection>
    </>
  );
}

function TableRow({
  label,
  render,
  scenarios,
  tone = "default",
}: {
  label: string;
  render: (s: Scenario) => string;
  scenarios: Scenario[];
  tone?: "default" | "strong" | "wrap";
}) {
  return (
    <tr className="hover:bg-muted/40 transition-colors">
      <td
        className={cn(
          "p-3 align-top font-label text-[0.66rem] tracking-[0.1em] uppercase text-muted-foreground border-b border-ursa-line-soft",
          tone === "wrap" ? "whitespace-normal" : "whitespace-nowrap"
        )}
      >
        {label}
      </td>
      {scenarios.map((s, i) => (
        <td
          key={s.name}
          className={cn(
            "p-3 align-top border-b border-ursa-line-soft",
            tone === "strong"
              ? "font-display font-semibold text-ursa-dark-roast"
              : tone === "wrap"
                ? "text-[0.82rem] text-foreground/85"
                : "text-ursa-medium-roast"
          )}
          style={tone === "strong" ? { color: SCENARIO_ACCENT_TEXT_HEX[i] } : {}}
        >
          {render(s)}
        </td>
      ))}
    </tr>
  );
}
