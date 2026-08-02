"use client";

import { useState } from "react";
import { ViewHero, ViewSection, Card, DossierLinkBanner } from "../view-shell";
import { BearMark, Pill, Callout } from "../ursa-brand";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";
import { Swords, Eye, TrendingUp, AlertTriangle, Info } from "lucide-react";

/**
 * Competitor SWOT Matrix — an interactive 2x2 visualization that plots
 * Ursa and its Miraflores/Lima competitors on two axes the dossier
 * actually researched: Brand Distinctiveness (bear/gram/green) vs
 * Distribution Reach (scale + channels). Each quadrant has a label and
 * an implication. Clicking a competitor shows its SWOT detail.
 *
 * The COMPETITORS array below is research-source data verified in
 * Module 02 — strength / weakness / opportunity / threat / ursaImplication
 * prose stays inline as in the Competitor Intelligence Dashboard (T2)
 * and the Origin Atlas (T7). UI chrome is translated.
 */

type Competitor = {
  name: string;
  area: string;
  // 0-100 scores from the dossier research
  distinctiveness: number; // bear/gram/green identity strength
  reach: number; // distribution + scale + channel coverage
  strength: string;
  weakness: string;
  opportunity: string;
  threat: string;
  ursaImplication: string;
  isUrsa?: boolean;
};

const COMPETITORS: Competitor[] = [
  {
    name: "Ursa",
    area: "Miraflores",
    distinctiveness: 88,
    reach: 32,
    strength: "Bear motif + two-bar theatre + named drinks (Ursagroni, Maracumango) + in-house roastery + 'un gramo a la vez'",
    weakness: "No website, unclaimed Google Business Profile, ~0 TripAdvisor reviews, no creator network yet",
    opportunity: "Own the bear-led craft niche in Miraflores before competitors copy the character angle",
    threat: "Distribution gap lets competitors capture search and review traffic that should be Ursa's",
    ursaImplication: "This is Ursa — the high-craft, low-reach quadrant. The plan's job is to lift reach without dropping distinctiveness.",
    isUrsa: true,
  },
  {
    name: "Punto Café",
    area: "Miraflores",
    distinctiveness: 48,
    reach: 62,
    strength: "Premios Somos 2024 winner; strong local recognition; visible storefront",
    weakness: "Limited roastery identity; less Art Nouveau craft; generic specialty positioning",
    opportunity: "Award fatigue — customers may seek a more distinctive craft story",
    threat: "Award credibility draws tourists and regulars who might prefer Ursa's craft",
    ursaImplication: "Match award visibility via Google/TripAdvisor reviews; lead on roastery + bear craft.",
  },
  {
    name: "Neira Café Lab",
    area: "Miraflores + 3",
    distinctiveness: 52,
    reach: 78,
    strength: "4+ locations incl. WorkCafé cobrand; scale and B2B reach",
    weakness: "Cobrand dilutes pure-café identity; feels corporate at scale",
    opportunity: "Scale-weary customers may prefer a single-site craft experience",
    threat: "B2B and office accounts Neira could win are also Ursa's wholesale opportunity",
    ursaImplication: "Lead on single-site intimacy; avoid cobrand dilution. Compete on craft, not footprint.",
  },
  {
    name: "Bisetti",
    area: "Barranco",
    distinctiveness: 72,
    reach: 55,
    strength: "Owns 'escuela de café' (coffee school) positioning; educational credibility",
    weakness: "Educational focus can feel formal; Barranco not Miraflores",
    opportunity: "Ursa can offer warmer, more experiential education (cupping nights vs school)",
    threat: "Bisetti's school graduates may staff competitors, raising the local bar",
    ursaImplication: "Compete on education but make it warmer — cupping nights, not classrooms.",
  },
  {
    name: "Puku Puku",
    area: "Multiple Lima",
    distinctiveness: 58,
    reach: 82,
    strength: "Owns 'microlotes' positioning; strong retail reach across Lima",
    weakness: "Chain feel at scale; less crafted atmosphere per site",
    opportunity: "Microlot customers may graduate to a more crafted single-site experience",
    threat: "Retail footprint means Puku Puku beans are everywhere Ursa's customers shop",
    ursaImplication: "Lead on crafted atmosphere; offer microlots as a sub-line, not the headline.",
  },
  {
    name: "Terrua",
    area: "Miraflores",
    distinctiveness: 64,
    reach: 45,
    strength: "US$25 paid tasting — premium experience pricing; strong margins",
    weakness: "High price ceiling limits frequency and accessibility",
    opportunity: "Tiered tastings — accessible entry + premium depth — undercut Terrua's all-or-nothing",
    threat: "Terrua's premium positioning may attract Ursa's aspirational customers",
    ursaImplication: "Tiered tastings; accessible entry (S/. 15) + premium depth (S/. 35).",
  },
  {
    name: "Ciclos",
    area: "Lima",
    distinctiveness: 60,
    reach: 38,
    strength: "Bike + coffee community niche; loyal subculture",
    weakness: "Niche limits audience; low general awareness",
    opportunity: "Cross-pollinate with cycling/tourism partners Ursa could also reach",
    threat: "Ciclos's community is loyal and may not switch",
    ursaImplication: "Partner with cycling/tourism for mutual discovery, not direct competition.",
  },
  {
    name: "RAIZ",
    area: "Lima",
    distinctiveness: 66,
    reach: 35,
    strength: "Farm-to-cup story; origin credibility",
    weakness: "Less retail presence; story can feel abstract without the cup",
    opportunity: "Origin stories via Ursa's Filtrado Lonya line — tangible, not abstract",
    threat: "RAIZ's farm relationships could be a wholesale bean source Ursa also needs",
    ursaImplication: "Make origin tangible — Ursa's Filtrado Lonya is a cup you can taste, not just a story.",
  },
  {
    name: "Café Verde",
    area: "Miraflores",
    distinctiveness: 50,
    reach: 50,
    strength: "Sustainability narrative; eco-conscious customer base",
    weakness: "Green messaging can feel generic without specific origin proof",
    opportunity: "Ursa's origin stories are more specific than generic sustainability claims",
    threat: "Eco-conscious customers may default to Café Verde if Ursa's sustainability isn't visible",
    ursaImplication: "Make sustainability specific — origin, altitude, farmer name — not a generic green claim.",
  },
  {
    name: "True Artisan",
    area: "Miraflores",
    distinctiveness: 44,
    reach: 42,
    strength: "Artisan positioning; local recognition",
    weakness: "Less differentiated visual identity; 'artisan' is crowded",
    opportunity: "Bear + Art Nouveau is more ownable than 'artisan' alone",
    threat: "Minimal — True Artisan doesn't own a distinct space Ursa needs",
    ursaImplication: "Don't compete on 'artisan' — compete on the bear. Ursa's identity is ownable; 'artisan' is not.",
  },
  {
    name: "Milimetrica Coffee Co",
    area: "Miraflores · Alcanfores 215",
    distinctiveness: 42,
    reach: 35,
    strength: "Closest direct competitor — same street (Alcanfores 215, 32 doors from Ursa). Confirmed roastery + coffee shop. Minimalist specialty positioning. Website + Instagram + TripAdvisor. 7:30am–8pm.",
    weakness: "Minimalist aesthetic lacks warmth and storytelling; no named drinks, no Art Nouveau, no two-bar theatre. Clean but not ownable. Sweets-only food per TripAdvisor.",
    opportunity: "Milimetrica roasts but doesn't tell a story. Ursa's bear identity, named drinks (Ursagroni, Maracumango), and two-bar theatre own the emotional space Milimetrica can't.",
    threat: "As a roastery on the same street, Milimetrica directly competes for the 'fresh-roasted coffee' claim. Walk-by traffic may enter Milimetrica first (32 doors closer to the corner).",
    ursaImplication: "Milimetrica is the most dangerous block competitor — they roast. Win on character (bear, Art Nouveau, named drinks, warmth), not on roasting capability. The differentiation is identity, not equipment.",
  },
  {
    name: "Milenaria Café",
    area: "Miraflores · Alcanfores 348",
    distinctiveness: 48,
    reach: 40,
    strength: "Same-street competitor at Alcanfores 348. Full brunch + specialty coffee + artisanal desserts. Plant-based, vegan, avocado toast. Instagram @milenariacafe. Open daily. Strong brunch traffic.",
    weakness: "Brunch breadth dilutes coffee-craft focus. No in-house roastery visible. Brunch occasion differs from Ursa's morning ritual.",
    opportunity: "Milenaria owns brunch on Alcanfores; Ursa should NOT compete on brunch. Own morning coffee ritual (7:30–10am) + afternoon craft moment. Milenaria brunchers who want better coffee walk 165m to Ursa.",
    threat: "Milenaria captures the late-morning/brunch crowd that might otherwise extend their Ursa visit into a meal. Their all-day food offering is a convenience Ursa doesn't match.",
    ursaImplication: "Don't compete with Milenaria on brunch. Own the 7:30–10am coffee ritual and the afternoon craft moment. Position as the coffee destination, not the food destination.",
  },
  {
    name: "Dulce Ciudad",
    area: "Miraflores · 50m",
    distinctiveness: 32,
    reach: 22,
    strength: "Very close proximity; catches passing foot traffic on the same street",
    weakness: "Generic café positioning; no roastery or origin narrative",
    opportunity: "Ursa's roastery visibility and named-drink storytelling differentiate within the same block",
    threat: "Absorbs casual coffee seekers who don't know Ursa is 50 metres further",
    ursaImplication: "Lead on roastery visibility and named drinks so the block's foot traffic chooses Ursa over the generic option.",
  },
  {
    name: "Caficulto",
    area: "Miraflores · 83m",
    distinctiveness: 42,
    reach: 30,
    strength: "Coffee-focused naming; close enough to share the coffee-destination block",
    weakness: "Limited brand identity beyond the name; small scale",
    opportunity: "Ursa's two-bar experience and craft atmosphere outclass a naming-only positioning",
    threat: "Contributes to block saturation — customers may settle for the nearest option",
    ursaImplication: "Compete on craft atmosphere and the two-bar experience rather than naming alone.",
  },
];

const QUADRANT_KEYS = {
  topRight: { labelKey: "content.swot.quadrant.top-right.label", descKey: "content.swot.quadrant.top-right.desc", color: "var(--color-ursa-forest-deep)", textColor: "var(--color-ursa-forest-deep)" },
  topLeft: { labelKey: "content.swot.quadrant.top-left.label", descKey: "content.swot.quadrant.top-left.desc", color: "var(--color-ursa-gold)", textColor: "var(--color-ursa-gold-text)" },
  bottomRight: { labelKey: "content.swot.quadrant.bottom-right.label", descKey: "content.swot.quadrant.bottom-right.desc", color: "var(--color-ursa-terracotta)", textColor: "var(--color-ursa-terracotta-text)" },
  bottomLeft: { labelKey: "content.swot.quadrant.bottom-left.label", descKey: "content.swot.quadrant.bottom-left.desc", color: "var(--color-ursa-sage)", textColor: "var(--color-ursa-sage-text)" },
};

export function SwotView() {
  const { t } = useI18n();
  const [selected, setSelected] = useState<string>("Ursa");

  const selectedComp = COMPETITORS.find((c) => c.name === selected) || COMPETITORS[0];

  // Map scores to % positions (invert reach so high reach = right)
  const pos = (c: Competitor) => ({
    left: `${c.reach}%`,
    top: `${100 - c.distinctiveness}%`,
  });

  return (
    <>
      <ViewHero
        eyebrow={t("content.view.swot.eyebrow")}
        title={t("content.view.swot.title")}
        lede={<>{t("content.swot.hero.lede", { n: COMPETITORS.length })}</>}
        meta={[
          { label: t("content.swot.meta.competitors"), value: t("content.swot.meta.competitors-value", { n: COMPETITORS.length }) },
          { label: t("content.swot.meta.axes"), value: t("content.swot.meta.axes-value") },
          { label: t("content.swot.meta.ursa"), value: t("content.swot.meta.ursa-value") },
        ]}
        tone="forest"
      />

      <ViewSection>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 items-start [grid-template-columns:minmax(0,1fr)]">
          {/* The matrix */}
          <Card className="p-4 md:p-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <h3 className="font-display text-lg font-semibold text-ursa-dark-roast m-0 flex items-center gap-2">
                <Swords size={18} className="text-ursa-gold-text" /> {t("content.swot.matrix.title")}
              </h3>
              <div className="flex items-center gap-3 text-[0.7rem] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-ursa-gold ring-2 ring-ursa-gold/30" /> {t("content.swot.matrix.legend-ursa")}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-ursa-forest-deep" /> {t("content.swot.matrix.legend-competitor")}
                </span>
              </div>
            </div>

            {/* The plot area */}
            <div className="relative aspect-square md:aspect-[4/3] w-full">
              {/* Axis labels */}
              <span className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 font-label text-[0.6rem] tracking-[0.16em] uppercase text-muted-foreground whitespace-nowrap origin-center" style={{ left: "-28px" }}>
                {t("content.swot.matrix.axis-y")}
              </span>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-label text-[0.6rem] tracking-[0.16em] uppercase text-muted-foreground whitespace-nowrap">
                {t("content.swot.matrix.axis-x")}
              </span>

              {/* Quadrant background tints */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 rounded-lg overflow-hidden border border-ursa-line-soft">
                <div className="bg-ursa-gold/5 border-r border-b border-ursa-line-soft/50 relative">
                  <span className="absolute top-2 left-2 font-label text-[0.58rem] tracking-[0.14em] uppercase" style={{ color: QUADRANT_KEYS.topLeft.textColor }}>{t(QUADRANT_KEYS.topLeft.labelKey)}</span>
                </div>
                <div className="bg-ursa-dark-roast/5 border-b border-ursa-line-soft/50 relative">
                  <span className="absolute top-2 right-2 font-label text-[0.58rem] tracking-[0.14em] uppercase text-right" style={{ color: QUADRANT_KEYS.topRight.textColor }}>{t(QUADRANT_KEYS.topRight.labelKey)}</span>
                </div>
                <div className="bg-muted border-r border-ursa-line-soft/50 relative">
                  <span className="absolute bottom-2 left-2 font-label text-[0.58rem] tracking-[0.14em] uppercase" style={{ color: QUADRANT_KEYS.bottomLeft.textColor }}>{t(QUADRANT_KEYS.bottomLeft.labelKey)}</span>
                </div>
                <div className="bg-ursa-terracotta/5 relative">
                  <span className="absolute bottom-2 right-2 font-label text-[0.58rem] tracking-[0.14em] uppercase text-right" style={{ color: QUADRANT_KEYS.bottomRight.textColor }}>{t(QUADRANT_KEYS.bottomRight.labelKey)}</span>
                </div>
              </div>

              {/* Crosshair lines */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ursa-line/40" aria-hidden="true" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-ursa-line/40" aria-hidden="true" />

              {/* Competitor dots */}
              {COMPETITORS.map((c) => {
                const p = pos(c);
                const isSelected = c.name === selected;
                const isUrsa = c.isUrsa;
                return (
                  <button
                    key={c.name}
                    onClick={() => setSelected(c.name)}
                    aria-label={`${c.name} — ${t("content.swot.readout.distinctiveness")} ${c.distinctiveness}, ${t("content.swot.readout.reach")} ${c.reach}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-200 group"
                    style={{ left: p.left, top: p.top, zIndex: isSelected ? 20 : 10 }}
                  >
                    <span
                      className={cn(
                        "block rounded-full border-2 transition-all",
                        isUrsa ? "w-5 h-5" : "w-3.5 h-3.5",
                        isSelected && "scale-125"
                      )}
                      style={{
                        background: isUrsa ? "var(--color-ursa-gold)" : "var(--color-ursa-forest-deep)",
                        borderColor: isSelected ? "var(--color-ursa-dark-roast)" : isUrsa ? "var(--color-ursa-gold-soft)" : "var(--color-ursa-cream)",
                        boxShadow: isSelected ? "0 0 0 4px rgba(184,146,74,0.25)" : isUrsa ? "0 0 0 3px rgba(184,146,74,0.2)" : "none",
                      }}
                    />
                    {/* Label */}
                    <span
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2 mt-1 font-label text-[0.58rem] tracking-[0.06em] uppercase whitespace-nowrap transition-opacity",
                        isUrsa || isSelected ? "opacity-100 text-ursa-dark-roast font-semibold" : "opacity-0 group-hover:opacity-100 text-muted-foreground"
                      )}
                      style={{ top: "100%" }}
                    >
                      {c.name}
                    </span>
                    {isUrsa && (
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2">
                        <BearMark size={18} className="text-ursa-dark-roast" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quadrant descriptions */}
            <div className="grid grid-cols-2 gap-2 mt-8 pt-4 border-t border-ursa-line-soft">
              {(Object.keys(QUADRANT_KEYS) as (keyof typeof QUADRANT_KEYS)[]).map((qk) => (
                <div key={qk} className="flex items-start gap-2">
                  <span className="w-2.5 h-2.5 rounded-sm mt-1 shrink-0" style={{ background: QUADRANT_KEYS[qk].color }} />
                  <div>
                    <span className="font-label text-[0.62rem] tracking-[0.1em] uppercase text-ursa-dark-roast font-semibold">{t(QUADRANT_KEYS[qk].labelKey)}</span>
                    <p className="text-[0.72rem] text-muted-foreground m-0 leading-snug">{t(QUADRANT_KEYS[qk].descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* SWOT detail panel */}
          <div className="space-y-4 lg:sticky lg:top-24">
            <Card highlight={selectedComp.isUrsa} className={cn(selectedComp.isUrsa && "border-ursa-gold")}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {selectedComp.isUrsa && <BearMark size={22} className="text-ursa-dark-roast" />}
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ursa-dark-roast m-0 leading-tight">{selectedComp.name}</h3>
                    <span className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground">{selectedComp.area}</span>
                  </div>
                </div>
                {selectedComp.isUrsa && <Pill tone="gold">{t("content.swot.matrix.legend-ursa")}</Pill>}
              </div>

              {/* Position readout */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="rounded-lg bg-ursa-foam border border-ursa-line-soft p-2.5 text-center">
                  <div className="font-display text-xl font-semibold text-ursa-gold-text leading-none">{selectedComp.distinctiveness}</div>
                  <div className="font-label text-[0.54rem] tracking-[0.12em] uppercase text-muted-foreground mt-1">{t("content.swot.readout.distinctiveness")}</div>
                </div>
                <div className="rounded-lg bg-ursa-foam border border-ursa-line-soft p-2.5 text-center">
                  <div className="font-display text-xl font-semibold text-ursa-forest-deep leading-none">{selectedComp.reach}</div>
                  <div className="font-label text-[0.54rem] tracking-[0.12em] uppercase text-muted-foreground mt-1">{t("content.swot.readout.reach")}</div>
                </div>
              </div>

              {/* SWOT grid */}
              <div className="grid grid-cols-2 gap-2">
                <SwotCell label={t("content.swot.swot-cell.strengths")} icon={<TrendingUp size={12} />} tone="forest" text={selectedComp.strength} />
                <SwotCell label={t("content.swot.swot-cell.weaknesses")} icon={<AlertTriangle size={12} />} tone="terracotta" text={selectedComp.weakness} />
                <SwotCell label={t("content.swot.swot-cell.opportunities")} icon={<Eye size={12} />} tone="gold" text={selectedComp.opportunity} />
                <SwotCell label={t("content.swot.swot-cell.threats")} icon={<Swords size={12} />} tone="stop" text={selectedComp.threat} />
              </div>
            </Card>

            {/* Ursa implication */}
            <Card className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
              <h4 className="font-label text-[0.66rem] tracking-[0.14em] uppercase text-ursa-gold-text m-0 mb-2 flex items-center gap-1.5">
                <Info size={13} /> {t("content.swot.ursa-implication.heading")}
              </h4>
              <p className="text-[0.88rem] text-ursa-dark-roast m-0 leading-relaxed font-medium">{selectedComp.ursaImplication}</p>
            </Card>

            {/* Quick switch */}
            <Card className="bg-ursa-foam">
              <h4 className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground m-0 mb-2">{t("content.swot.quick-switch.heading")}</h4>
              <div className="flex flex-wrap gap-1.5">
                {COMPETITORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelected(c.name)}
                    className={cn(
                      "px-2.5 py-1 rounded-full font-label text-[0.6rem] tracking-[0.08em] uppercase border transition",
                      c.name === selected
                        ? "bg-ursa-dark-roast text-ursa-cream border-ursa-dark-roast"
                        : "bg-card text-muted-foreground border-ursa-line-soft hover:border-ursa-gold/60 hover:text-ursa-dark-roast"
                    )}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Strategic takeaway */}
        <Callout tone="forest" title={t("content.swot.callout.takeaway.title")}>
          <p className="m-0 text-[0.92rem]">
            {t("content.swot.callout.takeaway.body")}
          </p>
        </Callout>
      </ViewSection>

      <ViewSection>
        <DossierLinkBanner moduleId="02-market-competitors-and-customer-voice" />
      </ViewSection>
    </>
  );
}

function SwotCell({ label, icon, tone, text }: { label: string; icon: React.ReactNode; tone: "forest" | "terracotta" | "gold" | "stop"; text: string }) {
  const tones = {
    forest: "border-ursa-forest-deep/25 bg-ursa-dark-roast/5 text-ursa-forest-deep",
    terracotta: "border-ursa-terracotta/25 bg-ursa-terracotta/5 text-ursa-terracotta-text",
    gold: "border-ursa-gold/30 bg-ursa-gold/5 text-ursa-gold-text",
    stop: "border-ursa-terracotta/30 bg-ursa-terracotta/8 text-ursa-terracotta-text",
  };
  return (
    <div className={cn("rounded-lg border p-2.5", tones[tone])}>
      <div className="flex items-center gap-1 mb-1">
        {icon}
        <span className="font-label text-[0.56rem] tracking-[0.12em] uppercase">{label}</span>
      </div>
      <p className="text-[0.76rem] text-ursa-dark-roast m-0 leading-snug">{text}</p>
    </div>
  );
}
