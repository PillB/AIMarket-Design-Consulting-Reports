"use client";

import { useState, useMemo, useRef } from "react";
import { ViewHero, ViewSection, Card, Grid, DossierLinkBanner } from "../view-shell";
import {
  Pill,
  Callout,
  StatBlock,
  SectionBadge,
  ProgressBar,
  BearMark,
  ArtNouveauDivider,
} from "../ursa-brand";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/use-i18n";
import {
  Utensils,
  Plus,
  Trash2,
  ArrowUpDown,
  Star,
  Puzzle,
  Truck,
  Dog,
  Copy,
  Check,
  Coffee,
  TrendingUp,
  Clock,
  Percent,
  Wallet,
  Sparkles,
} from "lucide-react";

// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

type Category =
  | "Espresso"
  | "Coldbrew"
  | "Filtrado"
  | "Coffee cocktail"
  | "Pastry"
  | "Savory"
  | "Non-coffee";

type MenuItem = {
  id: string;
  name: string;
  category: Category;
  price: number; // PEN
  cost: number; // PEN
  prepTime: number; // minutes
  popular: boolean; // popularity assumption for Stars & Puzzles
};

const CATEGORIES: Category[] = [
  "Espresso",
  "Coldbrew",
  "Filtrado",
  "Coffee cocktail",
  "Pastry",
  "Savory",
  "Non-coffee",
];

// ---------------------------------------------------------------
// Initial menu — 12 plausible items anchored to Ursa's verified
// drinks (Ursagroni, Maracumango, Filtrado Lonya) plus the
// reconstructed espresso bar and food.
// ---------------------------------------------------------------

const INITIAL_ITEMS: MenuItem[] = [
  { id: "i-ursagroni", name: "Ursagroni", category: "Coffee cocktail", price: 18, cost: 4.5, prepTime: 3, popular: true },
  { id: "i-maracumango", name: "Maracumango Coldbrew", category: "Coldbrew", price: 14, cost: 3.8, prepTime: 4, popular: true },
  { id: "i-durazno", name: "Durazno Clarificado", category: "Coldbrew", price: 14, cost: 3.5, prepTime: 4, popular: false },
  { id: "i-lonya", name: "Filtrado Lonya", category: "Filtrado", price: 14, cost: 2.8, prepTime: 5, popular: false },
  { id: "i-v60", name: "V60 del día", category: "Filtrado", price: 12, cost: 2.5, prepTime: 5, popular: false },
  { id: "i-espresso", name: "Espresso", category: "Espresso", price: 6, cost: 1.2, prepTime: 1, popular: true },
  { id: "i-cappuccino", name: "Cappuccino", category: "Espresso", price: 10, cost: 2.0, prepTime: 2, popular: true },
  { id: "i-flatwhite", name: "Flat White", category: "Espresso", price: 10, cost: 2.1, prepTime: 2, popular: true },
  { id: "i-cortado", name: "Cortado", category: "Espresso", price: 8, cost: 1.6, prepTime: 2, popular: false },
  { id: "i-cookie", name: "House-made Cookie", category: "Pastry", price: 5, cost: 1.5, prepTime: 0, popular: true },
  { id: "i-financier", name: "Financier de Pera", category: "Pastry", price: 6, cost: 2.0, prepTime: 0, popular: false },
  { id: "i-empanada", name: "Empanada de Carne", category: "Savory", price: 12, cost: 5.0, prepTime: 4, popular: false },
];

const PEN = (n: number) => {
  if (!isFinite(n)) return "—";
  return `S/. ${n.toFixed(2)}`;
};

let idCounter = 100;
const nextId = () => `i-${++idCounter}`;

// Margin thresholds (per task spec)
const MARGIN_HIGH = 65; // > 65% green
const MARGIN_MID = 55; // 55–65% gold

function marginPct(item: MenuItem) {
  if (item.price <= 0) return 0;
  return ((item.price - item.cost) / item.price) * 100;
}

function marginPEN(item: MenuItem) {
  return item.price - item.cost;
}

function marginTone(pct: number): "forest" | "gold" | "terracotta" {
  if (pct > MARGIN_HIGH) return "forest";
  if (pct >= MARGIN_MID) return "gold";
  return "terracotta";
}

function marginColorClass(pct: number) {
  const t = marginTone(pct);
  if (t === "forest") return "bg-ursa-forest-deep";
  if (t === "gold") return "bg-ursa-gold";
  return "bg-ursa-terracotta";
}

function marginTextClass(pct: number) {
  const t = marginTone(pct);
  if (t === "forest") return "text-ursa-forest-deep";
  if (t === "gold") return "text-ursa-medium-roast";
  return "text-ursa-terracotta-text";
}

// Stars & Puzzles classification
type Quadrant = "star" | "puzzle" | "plowhorse" | "dog";
function classify(item: MenuItem): Quadrant {
  const pct = marginPct(item);
  const highMargin = pct >= MARGIN_MID;
  if (item.popular && highMargin) return "star";
  if (!item.popular && highMargin) return "puzzle";
  if (item.popular && !highMargin) return "plowhorse";
  return "dog";
}

const QUADRANT_META: Record<
  Quadrant,
  { icon: React.ReactNode; tone: "gold" | "forest" | "terracotta" }
> = {
  star: { icon: <Star size={14} />, tone: "forest" },
  puzzle: { icon: <Puzzle size={14} />, tone: "gold" },
  plowhorse: { icon: <Truck size={14} />, tone: "gold" },
  dog: { icon: <Dog size={14} />, tone: "terracotta" },
};

// ---------------------------------------------------------------
// Main component
// ---------------------------------------------------------------

export function MenuStudioView() {
  const { t } = useI18n();
  const [items, setItems] = useState<MenuItem[]>(INITIAL_ITEMS);
  const [sortKey, setSortKey] = useState<"marginPct" | "marginPEN" | "price" | "prepTime" | "name">("marginPct");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [primaryId, setPrimaryId] = useState<string>("i-ursagroni");
  const [sideId, setSideId] = useState<string>("i-cookie");
  const [primaryVolume, setPrimaryVolume] = useState<number>(100);
  const [attachRate, setAttachRate] = useState<number>(60);
  const [exportOpen, setExportOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Mutations
  const updateItem = (id: string, patch: Partial<MenuItem>) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch } : it)));
  };
  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
    if (primaryId === id && items.length > 1) {
      const fallback = items.find((it) => it.id !== id);
      if (fallback) setPrimaryId(fallback.id);
    }
    if (sideId === id && items.length > 1) {
      const fallback = items.find((it) => it.id !== id);
      if (fallback) setSideId(fallback.id);
    }
  };
  const addItem = () => {
    const newItem: MenuItem = {
      id: nextId(),
      name: "Nuevo item",
      category: "Espresso",
      price: 10,
      cost: 3,
      prepTime: 2,
      popular: false,
    };
    setItems((prev) => [...prev, newItem]);
  };

  // Live metrics
  const metrics = useMemo(() => {
    if (items.length === 0) {
      return {
        count: 0,
        minPrice: 0,
        maxPrice: 0,
        avgPrice: 0,
        avgMarginPct: 0,
        totalPrepTime: 0,
        categoryCounts: {} as Record<string, number>,
      };
    }
    const prices = items.map((i) => i.price).filter((p) => p > 0);
    const margins = items.map((i) => marginPct(i));
    const prepSum = items.reduce((acc, i) => acc + i.prepTime, 0);
    const categoryCounts: Record<string, number> = {};
    for (const c of CATEGORIES) categoryCounts[c] = 0;
    for (const it of items) categoryCounts[it.category] = (categoryCounts[it.category] || 0) + 1;
    return {
      count: items.length,
      minPrice: prices.length ? Math.min(...prices) : 0,
      maxPrice: prices.length ? Math.max(...prices) : 0,
      avgPrice: prices.length ? prices.reduce((a, b) => a + b, 0) / prices.length : 0,
      avgMarginPct: margins.reduce((a, b) => a + b, 0) / margins.length,
      totalPrepTime: prepSum,
      categoryCounts,
    };
  }, [items]);

  // Sorted rows for margin analysis
  const sortedItems = useMemo(() => {
    const copy = [...items];
    copy.sort((a, b) => {
      let av: number | string;
      let bv: number | string;
      switch (sortKey) {
        case "marginPct":
          av = marginPct(a);
          bv = marginPct(b);
          break;
        case "marginPEN":
          av = marginPEN(a);
          bv = marginPEN(b);
          break;
        case "price":
          av = a.price;
          bv = b.price;
          break;
        case "prepTime":
          av = a.prepTime;
          bv = b.prepTime;
          break;
        case "name":
          av = a.name.toLowerCase();
          bv = b.name.toLowerCase();
          break;
      }
      if (typeof av === "string" && typeof bv === "string") {
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      return sortDir === "asc" ? (av as number) - (bv as number) : (bv as number) - (av as number);
    });
    return copy;
  }, [items, sortKey, sortDir]);

  const toggleSort = (key: typeof sortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  // Attach-rate modeler
  const primary = items.find((i) => i.id === primaryId);
  const side = items.find((i) => i.id === sideId);
  const sidesSold = primary && side ? Math.round((primaryVolume * attachRate) / 100) : 0;
  const sideMarginPEN = side ? marginPEN(side) : 0;
  const attachMarginTotal = sidesSold * sideMarginPEN;
  const primaryRevenue = primary ? primary.price * primaryVolume : 0;
  const attachRevenue = side ? side.price * sidesSold : 0;
  const blendedMarginPct =
    primaryRevenue + attachRevenue > 0
      ? ((attachMarginTotal + (primary ? marginPEN(primary) * primaryVolume : 0)) /
          (primaryRevenue + attachRevenue)) *
        100
      : 0;

  // Stars & Puzzles
  const quadrants = useMemo(() => {
    const q: Record<Quadrant, MenuItem[]> = { star: [], puzzle: [], plowhorse: [], dog: [] };
    for (const it of items) q[classify(it)].push(it);
    return q;
  }, [items]);

  // Export text — computed on demand (rendered inside the dialog only)
  const exportText = (() => {
    const lines: string[] = [];
    lines.push("URSA COFFEE · MENU ENGINEERING STUDIO — EXPORT");
    lines.push("Snapshot: " + new Date().toISOString());
    lines.push("");
    lines.push("LIVE METRICS");
    lines.push(`- Items: ${metrics.count}`);
    lines.push(`- Price range: ${PEN(metrics.minPrice)} – ${PEN(metrics.maxPrice)}`);
    lines.push(`- Average price: ${PEN(metrics.avgPrice)}`);
    lines.push(`- Average margin: ${metrics.avgMarginPct.toFixed(1)}%`);
    lines.push(`- Total prep time: ${metrics.totalPrepTime} min`);
    lines.push("");
    lines.push("CATEGORY BREAKDOWN");
    for (const c of CATEGORIES) {
      const n = metrics.categoryCounts[c] || 0;
      if (n > 0) lines.push(`- ${c}: ${n}`);
    }
    lines.push("");
    lines.push("MARGIN ANALYSIS (sorted by " + sortKey + " " + sortDir + ")");
    lines.push("name | category | price | cost | margin PEN | margin % | quadrant");
    for (const it of sortedItems) {
      const pct = marginPct(it);
      lines.push(
        `${it.name} | ${it.category} | ${PEN(it.price)} | ${PEN(it.cost)} | ${PEN(marginPEN(it))} | ${pct.toFixed(1)}% | ${classify(it)}`
      );
    }
    lines.push("");
    lines.push("STARS & PUZZLES");
    (["star", "puzzle", "plowhorse", "dog"] as Quadrant[]).forEach((q) => {
      lines.push(`- ${q.toUpperCase()} (${quadrants[q].length}): ${quadrants[q].map((i) => i.name).join(", ") || "—"}`);
    });
    lines.push("");
    lines.push("ATTACH-RATE MODEL");
    if (primary && side) {
      lines.push(`- Primary: ${primary.name} × ${primaryVolume} = ${PEN(primaryRevenue)}`);
      lines.push(`- Side: ${side.name} @ ${attachRate}% attach = ${sidesSold} units = ${PEN(attachRevenue)}`);
      lines.push(`- Side margin contribution: ${PEN(attachMarginTotal)}`);
      lines.push(`- Blended margin %: ${blendedMarginPct.toFixed(1)}%`);
    }
    lines.push("");
    lines.push("— end of export —");
    return lines.join("\n");
  })();

  const copyExport = async () => {
    try {
      await navigator.clipboard.writeText(exportText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback: select the textarea inside dialog
    }
  };

  return (
    <>
      <ViewHero
        eyebrow={t("content.view.menu-studio.eyebrow")}
        title={t("content.view.menu-studio.title")}
        lede={<>{t("content.menu-studio.lede")}</>}
        meta={[
          { label: t("content.menu-studio.meta.default"), value: t("content.menu-studio.meta.default-value") },
          { label: t("content.menu-studio.meta.thresholds"), value: t("content.menu-studio.meta.thresholds-value") },
          { label: t("content.menu-studio.meta.outputs"), value: t("content.menu-studio.meta.outputs-value") },
        ]}
        tone="forest"
      />

      <ViewSection>
        <DossierLinkBanner moduleId="03-menu-and-product-development" />
      </ViewSection>

      {/* ---------- Live metrics strip ---------- */}
      <ViewSection
        badge={t("content.menu-studio.section.01.badge")}
        title={t("content.menu-studio.section.01.title")}
        meta={t("content.menu-studio.section.01.meta")}
      >
        <Grid cols={4}>
          <StatBlock
            value={`${metrics.count}`}
            label={t("content.menu-studio.stat.count")}
            tone="forest"
          />
          <StatBlock
            value={metrics.count > 0 ? `${PEN(metrics.minPrice)}–${PEN(metrics.maxPrice)}` : "—"}
            label={t("content.menu-studio.stat.range")}
            tone="gold"
          />
          <StatBlock
            value={metrics.count > 0 ? PEN(metrics.avgPrice) : "—"}
            label={t("content.menu-studio.stat.avg-price")}
            tone="forest"
          />
          <StatBlock
            value={`${metrics.avgMarginPct.toFixed(1)}%`}
            label={t("content.menu-studio.stat.avg-margin")}
            tone={marginTone(metrics.avgMarginPct) === "forest" ? "forest" : marginTone(metrics.avgMarginPct) === "gold" ? "gold" : "terracotta"}
          />
        </Grid>

        <div className="mt-6 grid lg:grid-cols-[1fr_1fr] gap-6">
          {/* Avg margin progress */}
          <Card>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast m-0 flex items-center gap-2">
                <Percent size={16} className="text-ursa-gold-text" /> {t("content.menu-studio.avg-margin.title")}
              </h4>
              <Pill tone={marginTone(metrics.avgMarginPct)}>
                {metrics.avgMarginPct.toFixed(1)}%
              </Pill>
            </div>
            <ProgressBar value={metrics.avgMarginPct} tone={marginTone(metrics.avgMarginPct)} />
            <div className="flex justify-between mt-2 font-label text-[0.66rem] tracking-[0.12em] uppercase text-muted-foreground">
              <span>0%</span>
              <span className="text-ursa-terracotta-text">{t("content.menu-studio.avg-margin.threshold-leak")}</span>
              <span className="text-ursa-gold-text">{t("content.menu-studio.avg-margin.threshold-healthy")}</span>
              <span>100%</span>
            </div>
            <p className="text-[0.85rem] text-muted-foreground mt-3 m-0">
              {t("content.menu-studio.avg-margin.body")}
            </p>
          </Card>

          {/* Total prep time + category breakdown */}
          <Card>
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <Clock size={16} className="text-ursa-gold-text" /> {t("content.menu-studio.prep.title")}
            </h4>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-display text-3xl font-semibold text-ursa-dark-roast">
                {metrics.totalPrepTime}
              </span>
              <span className="text-[0.8rem] text-muted-foreground">{t("content.menu-studio.prep.subtitle")}</span>
            </div>
            <div className="space-y-1.5 max-h-48 overflow-y-auto ursa-scroll pr-1">
              {CATEGORIES.map((c) => {
                const n = metrics.categoryCounts[c] || 0;
                const pct = metrics.count > 0 ? (n / metrics.count) * 100 : 0;
                return (
                  <div key={c} className="flex items-center gap-3">
                    <span className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-muted-foreground w-32 shrink-0">
                      {c}
                    </span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-ursa-forest to-ursa-forest-deep rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="font-display text-sm font-semibold text-ursa-dark-roast w-6 text-right shrink-0">
                      {n}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-[0.78rem] text-muted-foreground mt-3 m-0">
              {t("content.menu-studio.prep.body")}
            </p>
          </Card>
        </div>
      </ViewSection>

      {/* ---------- Menu builder ---------- */}
      <ViewSection
        badge={t("content.menu-studio.section.02.badge")}
        title={t("content.menu-studio.section.02.title")}
        meta={t("content.menu-studio.section.02.meta")}
      >
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <p className="text-[0.92rem] text-muted-foreground max-w-[62ch] m-0">
            {t("content.menu-studio.section.02.intro")}
          </p>
          <Button
            onClick={addItem}
            className="bg-ursa-gold text-ursa-dark-roast border border-ursa-gold hover:bg-ursa-gold-soft hover:text-ursa-dark-roast"
          >
            <Plus size={15} /> {t("content.menu-studio.section.02.button.add")}
          </Button>
        </div>

        <Card className="p-0 overflow-hidden">
          <div className="overflow-x-auto ursa-scroll">
            <Table>
              <TableHeader>
                <TableRow className="bg-ursa-cream hover:bg-ursa-cream">
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast min-w-[180px]">{t("content.menu-studio.table.name")}</TableHead>
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast min-w-[150px]">{t("content.menu-studio.table.category")}</TableHead>
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast text-right">{t("content.menu-studio.table.price")}</TableHead>
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast text-right">{t("content.menu-studio.table.cost")}</TableHead>
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast text-right">{t("content.menu-studio.table.prep")}</TableHead>
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast text-center">{t("content.menu-studio.table.popular")}</TableHead>
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast text-center w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((it) => (
                  <TableRow key={it.id} className="hover:bg-ursa-cream/40">
                    <TableCell>
                      <Input
                        value={it.name}
                        onChange={(e) => updateItem(it.id, { name: e.target.value })}
                        className="h-8 border-ursa-line-soft font-display text-ursa-dark-roast"
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        value={it.category}
                        onValueChange={(v) => updateItem(it.id, { category: v as Category })}
                      >
                        <SelectTrigger className="h-8 w-full border-ursa-line-soft text-[0.82rem]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map((c) => (
                            <SelectItem key={c} value={c} className="text-[0.82rem]">
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-right">
                      <Input
                        type="number"
                        value={it.price}
                        min={0}
                        step={0.5}
                        onChange={(e) => updateItem(it.id, { price: parseFloat(e.target.value) || 0 })}
                        className="h-8 w-20 ml-auto text-right border-ursa-line-soft font-display font-semibold text-ursa-dark-roast"
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <Input
                        type="number"
                        value={it.cost}
                        min={0}
                        step={0.25}
                        onChange={(e) => updateItem(it.id, { cost: parseFloat(e.target.value) || 0 })}
                        className="h-8 w-20 ml-auto text-right border-ursa-line-soft font-display font-semibold text-ursa-medium-roast"
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <Input
                        type="number"
                        value={it.prepTime}
                        min={0}
                        step={1}
                        onChange={(e) => updateItem(it.id, { prepTime: parseInt(e.target.value || "0", 10) || 0 })}
                        className="h-8 w-16 ml-auto text-right border-ursa-line-soft font-display font-semibold text-ursa-dark-roast"
                      />
                    </TableCell>
                    <TableCell className="text-center">
                      <Switch
                        checked={it.popular}
                        onCheckedChange={(v) => updateItem(it.id, { popular: v })}
                      />
                    </TableCell>
                    <TableCell className="text-center">
                      <button
                        onClick={() => removeItem(it.id)}
                        aria-label={`Remove ${it.name}`}
                        className="p-1.5 rounded-md text-muted-foreground hover:text-ursa-terracotta-text hover:bg-ursa-terracotta/10 transition"
                      >
                        <Trash2 size={14} />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
                {items.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground text-[0.9rem]">
                      {t("content.menu-studio.section.02.empty")}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Card>
        <p className="text-[0.78rem] text-muted-foreground mt-3 m-0">
          {t("content.menu-studio.section.02.footer")}
        </p>
      </ViewSection>

      {/* ---------- Margin analysis ---------- */}
      <ViewSection
        badge={t("content.menu-studio.section.03.badge")}
        title={t("content.menu-studio.section.03.title")}
        meta={t("content.menu-studio.section.03.meta")}
      >
        <Card className="p-0 overflow-hidden">
          <div className="overflow-x-auto ursa-scroll">
            <Table>
              <TableHeader>
                <TableRow className="bg-ursa-cream hover:bg-ursa-cream">
                  <SortableHead label={t("content.menu-studio.table.name")} sortKey="name" current={sortKey} dir={sortDir} onSort={toggleSort} align="left" />
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast">{t("content.menu-studio.table.category")}</TableHead>
                  <SortableHead label={t("content.menu-studio.table.price")} sortKey="price" current={sortKey} dir={sortDir} onSort={toggleSort} align="right" />
                  <SortableHead label={t("content.menu-studio.table.cost")} sortKey="price" current={sortKey} dir={sortDir} onSort={toggleSort} align="right" disabled />
                  <SortableHead label="Margin (PEN)" sortKey="marginPEN" current={sortKey} dir={sortDir} onSort={toggleSort} align="right" />
                  <SortableHead label="Margin %" sortKey="marginPct" current={sortKey} dir={sortDir} onSort={toggleSort} align="right" />
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast min-w-[160px]">Visual</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedItems.map((it) => {
                  const pct = marginPct(it);
                  const pen = marginPEN(it);
                  return (
                    <TableRow key={it.id} className="hover:bg-ursa-cream/40">
                      <TableCell className="font-display font-semibold text-ursa-dark-roast">
                        {it.name}
                      </TableCell>
                      <TableCell>
                        <span className="font-label text-[0.62rem] tracking-[0.12em] uppercase text-muted-foreground">
                          {it.category}
                        </span>
                      </TableCell>
                      <TableCell className="text-right font-display font-semibold text-ursa-dark-roast">
                        {PEN(it.price)}
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground">
                        {PEN(it.cost)}
                      </TableCell>
                      <TableCell className="text-right font-display font-semibold text-ursa-medium-roast">
                        {PEN(pen)}
                      </TableCell>
                      <TableCell className={cn("text-right font-display font-bold text-[1.05rem]", marginTextClass(pct))}>
                        {pct.toFixed(1)}%
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className={cn("h-full rounded-full transition-all duration-500", marginColorClass(pct))}
                              style={{ width: `${Math.min(100, pct)}%` }}
                            />
                          </div>
                          <span className="font-label text-[0.6rem] tracking-[0.1em] uppercase w-12 text-right" style={{ color: pct > MARGIN_HIGH ? "var(--color-ursa-forest-deep)" : pct >= MARGIN_MID ? "var(--color-ursa-medium-roast)" : "var(--color-ursa-terracotta)" }}>
                            {pct > MARGIN_HIGH ? t("content.menu-studio.margin.healthy") : pct >= MARGIN_MID ? t("content.menu-studio.margin.watch") : t("content.menu-studio.margin.leak")}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {sortedItems.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      {t("content.menu-studio.section.03.empty")}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Card>
        <div className="mt-4 grid sm:grid-cols-3 gap-3">
          <LegendChip tone="forest" label={t("content.menu-studio.section.03.legend-healthy")} />
          <LegendChip tone="gold" label={t("content.menu-studio.section.03.legend-watch")} />
          <LegendChip tone="terracotta" label={t("content.menu-studio.section.03.legend-leak")} />
        </div>
      </ViewSection>

      {/* ---------- Attach-rate modeler ---------- */}
      <ViewSection
        badge={t("content.menu-studio.section.04.badge")}
        title={t("content.menu-studio.section.04.title")}
        meta={t("content.menu-studio.section.04.meta")}
      >
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 items-start">
          {/* Controls */}
          <Card>
            <h4 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-4 flex items-center gap-2">
              <Wallet size={18} className="text-ursa-gold-text" /> {t("content.menu-studio.attach.title")}
            </h4>

            <div className="space-y-5">
              <div>
                <Label className="font-label text-[0.72rem] tracking-[0.1em] uppercase text-ursa-dark-roast">
                  {t("content.menu-studio.attach.primary")}
                </Label>
                <Select value={primaryId} onValueChange={setPrimaryId}>
                  <SelectTrigger className="w-full mt-1.5 border-ursa-line-soft">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {items.map((it) => (
                      <SelectItem key={it.id} value={it.id}>
                        {it.name} · {PEN(it.price)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="font-label text-[0.72rem] tracking-[0.1em] uppercase text-ursa-dark-roast">
                  {t("content.menu-studio.attach.side")}
                </Label>
                <Select value={sideId} onValueChange={setSideId}>
                  <SelectTrigger className="w-full mt-1.5 border-ursa-line-soft">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {items.map((it) => (
                      <SelectItem key={it.id} value={it.id}>
                        {it.name} · {PEN(it.price)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label className="font-label text-[0.72rem] tracking-[0.1em] uppercase text-ursa-dark-roast">
                    {t("content.menu-studio.attach.volume")}
                  </Label>
                  <span className="font-display font-semibold text-ursa-dark-roast">{primaryVolume}</span>
                </div>
                <Slider
                  value={[primaryVolume]}
                  min={10}
                  max={500}
                  step={10}
                  onValueChange={(v) => setPrimaryVolume(v[0])}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label className="font-label text-[0.72rem] tracking-[0.1em] uppercase text-ursa-dark-roast">
                    {t("content.menu-studio.attach.rate")}
                  </Label>
                  <span className="font-display font-semibold text-ursa-dark-roast">{attachRate}%</span>
                </div>
                <Slider
                  value={[attachRate]}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={(v) => setAttachRate(v[0])}
                />
                <div className="flex justify-between mt-2 font-label text-[0.62rem] tracking-[0.1em] uppercase text-muted-foreground">
                  <span>{t("content.menu-studio.attach.scale-0")}</span>
                  <span>{t("content.menu-studio.attach.scale-60")}</span>
                  <span>{t("content.menu-studio.attach.scale-100")}</span>
                </div>
              </div>
            </div>

            <Callout tone="gold" title={t("content.menu-studio.attach.callout.title")}>
              <p className="m-0 text-[0.88rem]">
                {t("content.menu-studio.attach.callout.body")}
              </p>
            </Callout>
          </Card>

          {/* Live projection */}
          <div className="space-y-4">
            <Card highlight className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
              <div className="flex items-center justify-between mb-1">
                <span className="font-label text-[0.7rem] tracking-[0.18em] uppercase text-ursa-gold-text">
                  {t("content.menu-studio.attach.contribution-label")}
                </span>
                <SectionBadge tone="gold">live</SectionBadge>
              </div>
              <div className="font-display text-5xl font-semibold text-ursa-forest-deep leading-none mb-2">
                {PEN(attachMarginTotal)}
              </div>
              <p className="text-[0.88rem] text-muted-foreground m-0">
                {t("content.menu-studio.attach.contribution-body", {
                  sides: sidesSold,
                  side: side?.name ?? "—",
                  volume: primaryVolume,
                  primary: primary?.name ?? "—",
                  rate: attachRate,
                })}
              </p>
            </Card>

            <Grid cols={2}>
              <MiniStat
                value={PEN(primaryRevenue)}
                label={t("content.menu-studio.attach.mini.primary-revenue")}
                icon={<Coffee size={14} />}
              />
              <MiniStat
                value={PEN(attachRevenue)}
                label={t("content.menu-studio.attach.mini.attach-revenue")}
                icon={<Plus size={14} />}
              />
              <MiniStat
                value={PEN(sideMarginPEN)}
                label={t("content.menu-studio.attach.mini.side-margin")}
                icon={<TrendingUp size={14} />}
              />
              <MiniStat
                value={`${blendedMarginPct.toFixed(1)}%`}
                label={t("content.menu-studio.attach.mini.blended")}
                icon={<Percent size={14} />}
                tone={marginTone(blendedMarginPct)}
              />
            </Grid>

            {/* Visual attach bar */}
            <Card>
              <h5 className="font-label text-[0.7rem] tracking-[0.14em] uppercase text-ursa-medium-roast m-0 mb-3">
                {t("content.menu-studio.attach.composition")}
              </h5>
              <div className="flex h-10 rounded-md overflow-hidden border border-ursa-line-soft">
                <div
                  className="bg-gradient-to-r from-ursa-forest to-ursa-forest-deep flex items-center justify-center text-ursa-cream font-label text-[0.66rem] tracking-[0.1em] uppercase transition-all"
                  style={{ width: `${primaryRevenue + attachRevenue > 0 ? (primaryRevenue / (primaryRevenue + attachRevenue)) * 100 : 0}%` }}
                >
                  {primaryRevenue + attachRevenue > 0 ? `${Math.round((primaryRevenue / (primaryRevenue + attachRevenue)) * 100)}%` : ""}
                </div>
                <div
                  className="bg-gradient-to-r from-ursa-gold to-ursa-gold-soft flex items-center justify-center text-ursa-dark-roast font-label text-[0.66rem] tracking-[0.1em] uppercase transition-all"
                  style={{ width: `${primaryRevenue + attachRevenue > 0 ? (attachRevenue / (primaryRevenue + attachRevenue)) * 100 : 0}%` }}
                >
                  {primaryRevenue + attachRevenue > 0 ? `${Math.round((attachRevenue / (primaryRevenue + attachRevenue)) * 100)}%` : ""}
                </div>
              </div>
              <div className="flex justify-between mt-2 font-label text-[0.66rem] tracking-[0.1em] uppercase">
                <span className="text-ursa-forest-deep">{t("content.menu-studio.attach.composition-primary")} · {PEN(primaryRevenue)}</span>
                <span className="text-ursa-medium-roast">{t("content.menu-studio.attach.composition-attach")} · {PEN(attachRevenue)}</span>
              </div>
            </Card>
          </div>
        </div>
      </ViewSection>

      {/* ---------- Stars & Puzzles ---------- */}
      <ViewSection
        badge={t("content.menu-studio.section.05.badge")}
        title={t("content.menu-studio.section.05.title")}
        meta={t("content.menu-studio.section.05.meta")}
      >
        <p className="text-[0.92rem] text-muted-foreground max-w-[68ch] mb-6">
          {t("content.menu-studio.section.05.intro")}
        </p>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-4">
          <QuadrantCard
            quadrant="star"
            items={quadrants.star}
            tone="forest"
            t={t}
          />
          <QuadrantCard
            quadrant="puzzle"
            items={quadrants.puzzle}
            tone="gold"
            t={t}
          />
          <QuadrantCard
            quadrant="plowhorse"
            items={quadrants.plowhorse}
            tone="gold"
            t={t}
          />
          <QuadrantCard
            quadrant="dog"
            items={quadrants.dog}
            tone="terracotta"
            t={t}
          />
        </div>

        {/* 2x2 visual matrix */}
        <Card className="mt-6 bg-ursa-foam">
          <h4 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-4 flex items-center gap-2">
            <Sparkles size={16} className="text-ursa-gold-text" /> {t("content.menu-studio.matrix.title")}
          </h4>
          <div className="relative grid grid-cols-2 grid-rows-2 gap-3 min-h-[280px]">
            {/* axes labels */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ursa-line" aria-hidden="true" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-ursa-line" aria-hidden="true" />

            {/* Top-left: high margin, low popularity = Puzzle */}
            <MatrixCell
              tone="gold"
              label={t("content.menu-studio.matrix.cell-puzzle")}
              desc={t("content.menu-studio.matrix.desc-puzzle")}
              count={quadrants.puzzle.length}
              items={quadrants.puzzle}
              position="top-left"
            />
            {/* Top-right: high margin, high popularity = Star */}
            <MatrixCell
              tone="forest"
              label={t("content.menu-studio.matrix.cell-star")}
              desc={t("content.menu-studio.matrix.desc-star")}
              count={quadrants.star.length}
              items={quadrants.star}
              position="top-right"
            />
            {/* Bottom-left: low margin, low popularity = Dog */}
            <MatrixCell
              tone="terracotta"
              label={t("content.menu-studio.matrix.cell-dog")}
              desc={t("content.menu-studio.matrix.desc-dog")}
              count={quadrants.dog.length}
              items={quadrants.dog}
              position="bottom-left"
            />
            {/* Bottom-right: low margin, high popularity = Plowhorse */}
            <MatrixCell
              tone="gold"
              label={t("content.menu-studio.matrix.cell-plowhorse")}
              desc={t("content.menu-studio.matrix.desc-plowhorse")}
              count={quadrants.plowhorse.length}
              items={quadrants.plowhorse}
              position="bottom-right"
            />

            {/* axis labels */}
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 font-label text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground whitespace-nowrap origin-center">
              {t("content.menu-studio.matrix.axis-margin")}
            </span>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-label text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground whitespace-nowrap">
              {t("content.menu-studio.matrix.axis-popularity")}
            </span>
            <span className="absolute -left-6 top-0 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
              {t("content.menu-studio.matrix.axis-high")}
            </span>
            <span className="absolute -left-6 bottom-0 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
              {t("content.menu-studio.matrix.axis-low")}
            </span>
            <span className="absolute -top-5 left-0 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
              {t("content.menu-studio.matrix.axis-low")}
            </span>
            <span className="absolute -top-5 right-0 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
              {t("content.menu-studio.matrix.axis-high")}
            </span>
          </div>
          <p className="text-[0.78rem] text-muted-foreground mt-8 m-0">
            {t("content.menu-studio.matrix.footer")}
          </p>
        </Card>
      </ViewSection>

      {/* ---------- Export ---------- */}
      <ViewSection
        badge={t("content.menu-studio.section.06.badge")}
        title={t("content.menu-studio.section.06.title")}
        meta={t("content.menu-studio.section.06.meta")}
      >
        <Card className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
          <div className="flex flex-col md:flex-row md:items-center gap-5 justify-between">
            <div className="flex-1">
              <h4 className="font-display text-xl font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
                <BearMark size={28} className="text-ursa-dark-roast" /> {t("content.menu-studio.export.title")}
              </h4>
              <p className="text-[0.9rem] text-muted-foreground m-0 max-w-[58ch]">
                {t("content.menu-studio.export.body")}
              </p>
            </div>
            <Dialog open={exportOpen} onOpenChange={setExportOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-ursa-gold text-ursa-dark-roast border border-ursa-gold hover:bg-ursa-gold-soft hover:text-ursa-dark-roast"
                  size="lg"
                >
                  <Copy size={16} /> {t("content.menu-studio.export.button")}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl text-ursa-dark-roast flex items-center gap-2">
                    <BearMark size={24} className="text-ursa-dark-roast" /> {t("content.menu-studio.export.dialog-title")}
                  </DialogTitle>
                </DialogHeader>
                <ArtNouveauDivider className="my-2" />
                <Textarea
                  readOnly
                  value={exportText}
                  className="font-mono text-[0.78rem] min-h-[360px] bg-ursa-cream border-ursa-line-soft text-ursa-dark-roast"
                />
                <div className="flex justify-end gap-2 mt-2">
                  <Button
                    variant="outline"
                    onClick={() => setExportOpen(false)}
                    className="border-ursa-line text-muted-foreground"
                  >
                    {t("content.menu-studio.export.close")}
                  </Button>
                  <Button
                    onClick={copyExport}
                    className="bg-ursa-dark-roast text-ursa-cream border border-ursa-forest-deep hover:bg-ursa-medium-roast hover:text-ursa-cream"
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                    {copied ? t("content.menu-studio.export.copied") : t("content.menu-studio.export.copy")}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        <div className="grid sm:grid-cols-4 gap-3 mt-4">
          <StatBlock value={`${metrics.count}`} label={t("content.menu-studio.export.stat.items")} tone="forest" />
          <StatBlock value={`${metrics.avgMarginPct.toFixed(1)}%`} label={t("content.menu-studio.export.stat.margin")} tone={marginTone(metrics.avgMarginPct) === "forest" ? "forest" : "gold"} />
          <StatBlock value={`${quadrants.star.length}`} label={t("content.menu-studio.export.stat.stars")} tone="forest" />
          <StatBlock value={PEN(attachMarginTotal)} label={t("content.menu-studio.export.stat.attach")} tone="gold" />
        </div>

        <Callout tone="forest" title={t("content.menu-studio.export.callout.title")}>
          <p className="m-0 text-[0.9rem]">
            {t("content.menu-studio.export.callout.body")}
          </p>
        </Callout>
      </ViewSection>
    </>
  );
}

// ---------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------

function SortableHead({
  label,
  sortKey,
  current,
  dir,
  onSort,
  align = "left",
  disabled = false,
}: {
  label: string;
  sortKey: "marginPct" | "marginPEN" | "price" | "prepTime" | "name";
  current: string;
  dir: "asc" | "desc";
  onSort: (k: "marginPct" | "marginPEN" | "price" | "prepTime" | "name") => void;
  align?: "left" | "right";
  disabled?: boolean;
}) {
  const isActive = current === sortKey && !disabled;
  return (
    <TableHead className={align === "right" ? "text-right" : "text-left"}>
      <button
        onClick={() => !disabled && onSort(sortKey)}
        disabled={disabled}
        className={cn(
          "inline-flex items-center gap-1 font-label text-[0.7rem] tracking-[0.1em] uppercase transition",
          disabled ? "text-muted-foreground/60 cursor-not-allowed" : "text-ursa-medium-roast hover:text-ursa-dark-roast",
          align === "right" && "flex-row-reverse",
          isActive && "text-ursa-dark-roast"
        )}
      >
        {label}
        <ArrowUpDown size={11} className={cn(isActive ? "opacity-100" : "opacity-40")} />
        {isActive && <span className="text-[0.6rem]">{dir === "asc" ? "▲" : "▼"}</span>}
      </button>
    </TableHead>
  );
}

function LegendChip({ tone, label }: { tone: "forest" | "gold" | "terracotta"; label: string }) {
  const colors = {
    forest: "bg-ursa-forest-deep",
    gold: "bg-ursa-gold",
    terracotta: "bg-ursa-terracotta",
  };
  return (
    <div className="flex items-center gap-2 bg-card border border-ursa-line-soft rounded-md px-3 py-2">
      <span className={cn("w-3 h-3 rounded-sm", colors[tone])} />
      <span className="font-label text-[0.66rem] tracking-[0.1em] uppercase text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function MiniStat({
  value,
  label,
  icon,
  tone = "neutral",
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
  tone?: "neutral" | "forest" | "gold" | "terracotta";
}) {
  const colors = {
    neutral: "text-ursa-dark-roast",
    forest: "text-ursa-forest-deep",
    gold: "text-ursa-medium-roast",
    terracotta: "text-ursa-terracotta-text",
  };
  return (
    <div className="bg-card border border-ursa-line-soft rounded-lg p-4">
      <div className="flex items-center gap-2 text-ursa-gold-text mb-1">
        {icon}
        <span className="font-label text-[0.62rem] tracking-[0.12em] uppercase text-muted-foreground">
          {label}
        </span>
      </div>
      <p className={cn("font-display text-2xl font-semibold m-0", colors[tone])}>{value}</p>
    </div>
  );
}

function QuadrantCard({
  quadrant,
  items,
  tone,
  t,
}: {
  quadrant: Quadrant;
  items: MenuItem[];
  tone: "forest" | "gold" | "terracotta";
  t: (key: string, params?: Record<string, string | number>) => string;
}) {
  const meta = QUADRANT_META[quadrant];
  const toneClasses = {
    forest: "border-ursa-forest-deep/40 bg-ursa-dark-roast/5",
    gold: "border-ursa-gold/50 bg-ursa-gold/8",
    terracotta: "border-ursa-terracotta/40 bg-ursa-terracotta/5",
  };
  const badgeTone = {
    forest: "bg-ursa-dark-roast text-ursa-cream border-ursa-forest-deep",
    gold: "bg-ursa-gold text-ursa-dark-roast border-ursa-gold",
    terracotta: "bg-ursa-terracotta text-ursa-cream border-ursa-terracotta",
  };
  const title = t(`content.menu-studio.quadrant.${quadrant}.label`);
  const desc = t(`content.menu-studio.quadrant.${quadrant}.desc`);
  const action = t(`content.menu-studio.quadrant.${quadrant}.action`);
  return (
    <div className={cn("border rounded-lg p-5", toneClasses[tone])}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={cn("w-7 h-7 rounded-full flex items-center justify-center border", badgeTone[tone])}>
            {meta.icon}
          </span>
          <h4 className="font-display text-xl font-semibold text-ursa-dark-roast m-0">{title}</h4>
        </div>
        <span className="font-display text-2xl font-semibold text-ursa-medium-roast">
          {items.length}
        </span>
      </div>
      <p className="font-label text-[0.66rem] tracking-[0.12em] uppercase text-muted-foreground m-0 mb-2">
        {desc}
      </p>
      <p className="text-[0.85rem] text-ursa-dark-roast m-0 mb-3 leading-relaxed">{action}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.length === 0 && (
          <span className="text-[0.78rem] text-muted-foreground italic">{t("content.menu-studio.quadrant.none")}</span>
        )}
        {items.map((it) => (
          <span
            key={it.id}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-ursa-paper border border-ursa-line-soft text-[0.75rem] font-display text-ursa-dark-roast"
          >
            {it.name}
            <span className="font-label text-[0.6rem] tracking-[0.05em] uppercase text-muted-foreground">
              {marginPct(it).toFixed(0)}%
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function MatrixCell({
  tone,
  label,
  desc,
  count,
  items,
  position,
}: {
  tone: "forest" | "gold" | "terracotta";
  label: string;
  desc: string;
  count: number;
  items: MenuItem[];
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const toneBg = {
    forest: "bg-ursa-dark-roast/10 border-ursa-forest-deep/30",
    gold: "bg-ursa-gold/15 border-ursa-gold/40",
    terracotta: "bg-ursa-terracotta/10 border-ursa-terracotta/30",
  };
  const toneText = {
    forest: "text-ursa-forest-deep",
    gold: "text-ursa-medium-roast",
    terracotta: "text-ursa-terracotta-text",
  };
  const align = {
    "top-left": "items-start text-left",
    "top-right": "items-end text-right",
    "bottom-left": "items-start text-left",
    "bottom-right": "items-end text-right",
  };
  return (
    <div className={cn("flex flex-col justify-center p-4 border rounded-md", toneBg[tone], align[position])}>
      <div className={cn("flex items-center gap-2 mb-1", align[position])}>
        <span className={cn("font-display text-2xl font-semibold", toneText[tone])}>{count}</span>
        <span className={cn("font-label text-[0.66rem] tracking-[0.14em] uppercase", toneText[tone])}>
          {label}
        </span>
      </div>
      <span className="font-label text-[0.58rem] tracking-[0.1em] uppercase text-muted-foreground mb-2">
        {desc}
      </span>
      <div className={cn("flex flex-wrap gap-1 max-w-[200px]", position.includes("right") && "justify-end")}>
        {items.slice(0, 4).map((it) => (
          <span
            key={it.id}
            className="inline-block px-1.5 py-0.5 rounded bg-ursa-foam border border-ursa-line-soft text-[0.66rem] font-display text-ursa-dark-roast"
          >
            {it.name}
          </span>
        ))}
        {items.length > 4 && (
          <span className="text-[0.66rem] text-muted-foreground self-center">
            +{items.length - 4}
          </span>
        )}
      </div>
    </div>
  );
}
