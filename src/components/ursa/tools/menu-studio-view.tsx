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
  { label: string; icon: React.ReactNode; tone: "gold" | "forest" | "terracotta"; desc: string; action: string }
> = {
  star: {
    label: "Star",
    icon: <Star size={14} />,
    tone: "forest",
    desc: "High margin + high popularity",
    action: "Feature prominently. Train baristas to suggest. This is your menu's spine.",
  },
  puzzle: {
    label: "Puzzle",
    icon: <Puzzle size={14} />,
    tone: "gold",
    desc: "High margin + low popularity",
    action: "The opportunity. Re-name, re-platform, re-pair. If it still doesn't move, kill it.",
  },
  plowhorse: {
    label: "Plowhorse",
    icon: <Truck size={14} />,
    tone: "gold",
    desc: "Low margin + high popularity",
    action: "Customers love it. Don't kill it — engineer the cost. Find a cheaper insumo or raise the price 1 PEN.",
  },
  dog: {
    label: "Dog",
    icon: <Dog size={14} />,
    tone: "terracotta",
    desc: "Low margin + low popularity",
    action: "Kill it. Or reformulate it as a seasonal special and let scarcity create demand.",
  },
};

// ---------------------------------------------------------------
// Main component
// ---------------------------------------------------------------

export function MenuStudioView() {
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
        eyebrow="Extra Tool T1 · Interactive"
        title="Menu Engineering Studio"
        lede={
          <>
            An interactive menu builder for café owners. Edit prices, costs, and prep times
            across every item; watch the average margin, category breakdown, and Stars &amp;
            Puzzles classification update live. Model the attach-rate that turns a drink into a
            profitable ticket. Every number is editable — nothing here is invented, only
            structured.
          </>
        }
        meta={[
          { label: "Default menu", value: "12 Ursa items pre-loaded" },
          { label: "Margin thresholds", value: "> 65% green · 55–65% gold · < 55% terracotta" },
          { label: "Outputs", value: "Live metrics · matrix · export" },
        ]}
        tone="forest"
      />

      <ViewSection>
        <DossierLinkBanner moduleId="03-menu-and-product-development" />
      </ViewSection>

      {/* ---------- Live metrics strip ---------- */}
      <ViewSection
        badge="Section 01"
        title="Live menu metrics"
        meta="Updates as you edit"
      >
        <Grid cols={4}>
          <StatBlock
            value={`${metrics.count}`}
            label="Items on the menu"
            tone="forest"
          />
          <StatBlock
            value={metrics.count > 0 ? `${PEN(metrics.minPrice)}–${PEN(metrics.maxPrice)}` : "—"}
            label="Menu price range (PEN)"
            tone="gold"
          />
          <StatBlock
            value={metrics.count > 0 ? PEN(metrics.avgPrice) : "—"}
            label="Average menu price"
            tone="forest"
          />
          <StatBlock
            value={`${metrics.avgMarginPct.toFixed(1)}%`}
            label="Average margin %"
            tone={marginTone(metrics.avgMarginPct) === "forest" ? "forest" : marginTone(metrics.avgMarginPct) === "gold" ? "gold" : "terracotta"}
          />
        </Grid>

        <div className="mt-6 grid lg:grid-cols-[1fr_1fr] gap-6">
          {/* Avg margin progress */}
          <Card>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-display text-base font-semibold text-ursa-dark-roast m-0 flex items-center gap-2">
                <Percent size={16} className="text-ursa-gold-text" /> Average margin progress
              </h4>
              <Pill tone={marginTone(metrics.avgMarginPct)}>
                {metrics.avgMarginPct.toFixed(1)}%
              </Pill>
            </div>
            <ProgressBar value={metrics.avgMarginPct} tone={marginTone(metrics.avgMarginPct)} />
            <div className="flex justify-between mt-2 font-label text-[0.66rem] tracking-[0.12em] uppercase text-muted-foreground">
              <span>0%</span>
              <span className="text-ursa-terracotta-text">55% threshold</span>
              <span className="text-ursa-gold-text">65% healthy</span>
              <span>100%</span>
            </div>
            <p className="text-[0.85rem] text-muted-foreground mt-3 m-0">
              Specialty-coffee rule of thumb: blended menu margin should sit above 65%. Below 55%
              and the menu leaks margin even when ticket size looks healthy.
            </p>
          </Card>

          {/* Total prep time + category breakdown */}
          <Card>
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <Clock size={16} className="text-ursa-gold-text" /> Total prep time &amp; category mix
            </h4>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-display text-3xl font-semibold text-ursa-dark-roast">
                {metrics.totalPrepTime}
              </span>
              <span className="text-[0.8rem] text-muted-foreground">sum of barista minutes per full round</span>
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
          </Card>
        </div>
      </ViewSection>

      {/* ---------- Menu builder ---------- */}
      <ViewSection
        badge="Section 02"
        title="Menu builder — edit every field"
        meta="Add, remove, edit inline"
      >
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <p className="text-[0.92rem] text-muted-foreground max-w-[62ch] m-0">
            Edit name, category, selling price (PEN), food cost (PEN), and prep time (min) for
            each item. Toggle the popularity assumption to drive the Stars &amp; Puzzles matrix
            in Section 04.
          </p>
          <Button
            onClick={addItem}
            className="bg-ursa-gold text-ursa-dark-roast border border-ursa-gold hover:bg-ursa-gold-soft hover:text-ursa-dark-roast"
          >
            <Plus size={15} /> Add item
          </Button>
        </div>

        <Card className="p-0 overflow-hidden">
          <div className="overflow-x-auto ursa-scroll">
            <Table>
              <TableHeader>
                <TableRow className="bg-ursa-cream hover:bg-ursa-cream">
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast min-w-[180px]">Name</TableHead>
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast min-w-[150px]">Category</TableHead>
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast text-right">Price (PEN)</TableHead>
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast text-right">Cost (PEN)</TableHead>
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast text-right">Prep (min)</TableHead>
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast text-center">Popular?</TableHead>
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
                      No items yet. Click <b className="text-ursa-dark-roast">Add item</b> to start.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Card>
        <p className="text-[0.78rem] text-muted-foreground mt-3 m-0">
          Default items are anchored to the verified Ursa menu (Ursagroni, Maracumango Coldbrew,
          Filtrado Lonya) plus a reconstructed espresso bar. Costs are plausible benchmarks —
          replace them with your actual roast logs and supplier invoices before quoting.
        </p>
      </ViewSection>

      {/* ---------- Margin analysis ---------- */}
      <ViewSection
        badge="Section 03"
        title="Margin analysis — sortable"
        meta="Green > 65% · Gold 55–65% · Terracotta < 55%"
      >
        <Card className="p-0 overflow-hidden">
          <div className="overflow-x-auto ursa-scroll">
            <Table>
              <TableHeader>
                <TableRow className="bg-ursa-cream hover:bg-ursa-cream">
                  <SortableHead label="Item" sortKey="name" current={sortKey} dir={sortDir} onSort={toggleSort} align="left" />
                  <TableHead className="font-label text-[0.7rem] tracking-[0.1em] uppercase text-ursa-medium-roast">Category</TableHead>
                  <SortableHead label="Price" sortKey="price" current={sortKey} dir={sortDir} onSort={toggleSort} align="right" />
                  <SortableHead label="Cost" sortKey="price" current={sortKey} dir={sortDir} onSort={toggleSort} align="right" disabled />
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
                            {pct > MARGIN_HIGH ? "healthy" : pct >= MARGIN_MID ? "watch" : "leak"}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {sortedItems.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      Add items above to see margin analysis.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Card>
        <div className="mt-4 grid sm:grid-cols-3 gap-3">
          <LegendChip tone="forest" label="Healthy · > 65% margin" />
          <LegendChip tone="gold" label="Watch · 55–65% margin" />
          <LegendChip tone="terracotta" label="Leak · < 55% margin" />
        </div>
      </ViewSection>

      {/* ---------- Attach-rate modeler ---------- */}
      <ViewSection
        badge="Section 04"
        title="Attach-rate modeler"
        meta="Turn a drink into a ticket"
      >
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 items-start">
          {/* Controls */}
          <Card>
            <h4 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-4 flex items-center gap-2">
              <Wallet size={18} className="text-ursa-gold-text" /> Configure the pairing
            </h4>

            <div className="space-y-5">
              <div>
                <Label className="font-label text-[0.72rem] tracking-[0.1em] uppercase text-ursa-dark-roast">
                  Primary drink
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
                  Side / pairing item
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
                    Primary volume (units sold)
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
                    Attach rate (% of primary buyers who add the side)
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
                  <span>0% · pure drink</span>
                  <span>60% · Ursa Mañana target</span>
                  <span>100% · always paired</span>
                </div>
              </div>
            </div>

            <Callout tone="gold" title="Why this matters">
              <p className="m-0 text-[0.88rem]">
                A S/. 18 Ursagroni at 75% margin looks healthy alone — but the ticket is what
                pays the rent. If 60% of Ursagroni buyers also add a S/. 5 cookie (margin S/. 3.5),
                every 100 Ursagronis becomes an extra S/. 210 in margin. The attach rate is the
                single biggest lever on blended profitability.
              </p>
            </Callout>
          </Card>

          {/* Live projection */}
          <div className="space-y-4">
            <Card highlight className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
              <div className="flex items-center justify-between mb-1">
                <span className="font-label text-[0.7rem] tracking-[0.18em] uppercase text-ursa-gold-text">
                  Side-margin contribution
                </span>
                <SectionBadge tone="gold">live</SectionBadge>
              </div>
              <div className="font-display text-5xl font-semibold text-ursa-forest-deep leading-none mb-2">
                {PEN(attachMarginTotal)}
              </div>
              <p className="text-[0.88rem] text-muted-foreground m-0">
                From <b className="text-ursa-dark-roast">{sidesSold}</b> sides of{" "}
                <b className="text-ursa-dark-roast">{side?.name ?? "—"}</b> sold alongside{" "}
                <b className="text-ursa-dark-roast">{primaryVolume}</b>{" "}
                <b className="text-ursa-dark-roast">{primary?.name ?? "—"}</b> at {attachRate}% attach.
              </p>
            </Card>

            <Grid cols={2}>
              <MiniStat
                value={PEN(primaryRevenue)}
                label="Primary revenue"
                icon={<Coffee size={14} />}
              />
              <MiniStat
                value={PEN(attachRevenue)}
                label="Attach revenue"
                icon={<Plus size={14} />}
              />
              <MiniStat
                value={PEN(sideMarginPEN)}
                label="Side margin / unit"
                icon={<TrendingUp size={14} />}
              />
              <MiniStat
                value={`${blendedMarginPct.toFixed(1)}%`}
                label="Blended margin %"
                icon={<Percent size={14} />}
                tone={marginTone(blendedMarginPct)}
              />
            </Grid>

            {/* Visual attach bar */}
            <Card>
              <h5 className="font-label text-[0.7rem] tracking-[0.14em] uppercase text-ursa-medium-roast m-0 mb-3">
                Ticket composition
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
                <span className="text-ursa-forest-deep">Primary · {PEN(primaryRevenue)}</span>
                <span className="text-ursa-medium-roast">Attach · {PEN(attachRevenue)}</span>
              </div>
            </Card>
          </div>
        </div>
      </ViewSection>

      {/* ---------- Stars & Puzzles ---------- */}
      <ViewSection
        badge="Section 05"
        title="Stars & Puzzles — menu engineering matrix"
        meta="Toggle popularity per item to reclassify"
      >
        <p className="text-[0.92rem] text-muted-foreground max-w-[68ch] mb-6">
          Classic menu engineering (originally from <em>Menu Engineering: A Practical Guide to Improving Profitability</em>,
          Kasavana &amp; Smith). Items are classified by margin (high/low, using the 55% threshold)
          and popularity (your assumption, toggled in the builder). Each quadrant has a distinct
          action — not a verdict.
        </p>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-4">
          <QuadrantCard
            quadrant="star"
            items={quadrants.star}
            title="Stars"
            tone="forest"
          />
          <QuadrantCard
            quadrant="puzzle"
            items={quadrants.puzzle}
            title="Puzzles"
            tone="gold"
          />
          <QuadrantCard
            quadrant="plowhorse"
            items={quadrants.plowhorse}
            title="Plowhorses"
            tone="gold"
          />
          <QuadrantCard
            quadrant="dog"
            items={quadrants.dog}
            title="Dogs"
            tone="terracotta"
          />
        </div>

        {/* 2x2 visual matrix */}
        <Card className="mt-6 bg-ursa-foam">
          <h4 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-4 flex items-center gap-2">
            <Sparkles size={16} className="text-ursa-gold-text" /> The matrix at a glance
          </h4>
          <div className="relative grid grid-cols-2 grid-rows-2 gap-3 min-h-[280px]">
            {/* axes labels */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ursa-line" aria-hidden="true" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-ursa-line" aria-hidden="true" />

            {/* Top-left: high margin, low popularity = Puzzle */}
            <MatrixCell
              tone="gold"
              label="Puzzle"
              desc="High margin · low popularity"
              count={quadrants.puzzle.length}
              items={quadrants.puzzle}
              position="top-left"
            />
            {/* Top-right: high margin, high popularity = Star */}
            <MatrixCell
              tone="forest"
              label="Star"
              desc="High margin · high popularity"
              count={quadrants.star.length}
              items={quadrants.star}
              position="top-right"
            />
            {/* Bottom-left: low margin, low popularity = Dog */}
            <MatrixCell
              tone="terracotta"
              label="Dog"
              desc="Low margin · low popularity"
              count={quadrants.dog.length}
              items={quadrants.dog}
              position="bottom-left"
            />
            {/* Bottom-right: low margin, high popularity = Plowhorse */}
            <MatrixCell
              tone="gold"
              label="Plowhorse"
              desc="Low margin · high popularity"
              count={quadrants.plowhorse.length}
              items={quadrants.plowhorse}
              position="bottom-right"
            />

            {/* axis labels */}
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 font-label text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground whitespace-nowrap origin-center">
              Margin →
            </span>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-label text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground whitespace-nowrap">
              Popularity →
            </span>
            <span className="absolute -left-6 top-0 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
              High
            </span>
            <span className="absolute -left-6 bottom-0 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
              Low
            </span>
            <span className="absolute -top-5 left-0 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
              Low
            </span>
            <span className="absolute -top-5 right-0 font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">
              High
            </span>
          </div>
          <p className="text-[0.78rem] text-muted-foreground mt-8 m-0">
            Threshold: margin ≥ 55% counts as <b className="text-ursa-dark-roast">high</b>. Popularity is the toggle in
            the builder — set it honestly. A 12-item menu should aim for 3–4 Stars, 2–3 Puzzles to
            promote, 2–3 Plowhorses to re-engineer, and 1–2 Dogs to retire.
          </p>
        </Card>
      </ViewSection>

      {/* ---------- Export ---------- */}
      <ViewSection
        badge="Section 06"
        title="Export the menu summary"
        meta="Copy to clipboard"
      >
        <Card className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
          <div className="flex flex-col md:flex-row md:items-center gap-5 justify-between">
            <div className="flex-1">
              <h4 className="font-display text-xl font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-2">
                <BearMark size={28} className="text-ursa-dark-roast" /> Generate a text snapshot
              </h4>
              <p className="text-[0.9rem] text-muted-foreground m-0 max-w-[58ch]">
                A plain-text export of every item, its margin, classification, and the attach-rate
                projection. Useful for pasting into a Notion doc, a WhatsApp message to a partner,
                or a printed prep sheet for the bar.
              </p>
            </div>
            <Dialog open={exportOpen} onOpenChange={setExportOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-ursa-gold text-ursa-dark-roast border border-ursa-gold hover:bg-ursa-gold-soft hover:text-ursa-dark-roast"
                  size="lg"
                >
                  <Copy size={16} /> Generate export
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl text-ursa-dark-roast flex items-center gap-2">
                    <BearMark size={24} className="text-ursa-dark-roast" /> Menu export
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
                    Close
                  </Button>
                  <Button
                    onClick={copyExport}
                    className="bg-ursa-forest-deep text-ursa-cream border border-ursa-forest-deep hover:bg-ursa-forest hover:text-ursa-cream"
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                    {copied ? "Copied!" : "Copy to clipboard"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        <div className="grid sm:grid-cols-4 gap-3 mt-4">
          <StatBlock value={`${metrics.count}`} label="Items in export" tone="forest" />
          <StatBlock value={`${metrics.avgMarginPct.toFixed(1)}%`} label="Average margin" tone={marginTone(metrics.avgMarginPct) === "forest" ? "forest" : "gold"} />
          <StatBlock value={`${quadrants.star.length}`} label="Stars on the menu" tone="forest" />
          <StatBlock value={PEN(attachMarginTotal)} label="Attach contribution modelled" tone="gold" />
        </div>

        <Callout tone="forest" title="How to read the export">
          <p className="m-0 text-[0.9rem]">
            The export is a snapshot in time — re-generate it whenever you change a price or a
            cost. Paste it into the next bar-shift briefing, or attach it to the monthly menu
            review. The numbers are only as honest as the inputs; pair this export with the
            actual roast logs before any pricing decision.
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
  title,
  tone,
}: {
  quadrant: Quadrant;
  items: MenuItem[];
  title: string;
  tone: "forest" | "gold" | "terracotta";
}) {
  const meta = QUADRANT_META[quadrant];
  const toneClasses = {
    forest: "border-ursa-forest-deep/40 bg-ursa-forest-deep/5",
    gold: "border-ursa-gold/50 bg-ursa-gold/8",
    terracotta: "border-ursa-terracotta/40 bg-ursa-terracotta/5",
  };
  const badgeTone = {
    forest: "bg-ursa-forest-deep text-ursa-cream border-ursa-forest-deep",
    gold: "bg-ursa-gold text-ursa-dark-roast border-ursa-gold",
    terracotta: "bg-ursa-terracotta text-ursa-cream border-ursa-terracotta",
  };
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
        {meta.desc}
      </p>
      <p className="text-[0.85rem] text-ursa-dark-roast m-0 mb-3 leading-relaxed">{meta.action}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.length === 0 && (
          <span className="text-[0.78rem] text-muted-foreground italic">— none —</span>
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
    forest: "bg-ursa-forest-deep/10 border-ursa-forest-deep/30",
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
