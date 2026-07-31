"use client";

import { ViewHero, ViewSection, Card, Grid } from "../view-shell";
import { BearMark, CupGlyph, ArtNouveauDivider, Pill, StatBlock, Callout, EvidenceTag, SectionBadge } from "../ursa-brand";
import { URSA_FACTS, VERIFIED_BEVERAGES, VERIFIED_FOOD, EXPERIMENTS, BUDGET_SCENARIOS } from "@/lib/ursa-data";
import { ROUTES, useNavigate } from "@/lib/ursa-nav";
import { ArrowRight, MapPin, Clock, Coffee, Star, Sparkles, Calculator, ExternalLink, Flame, Compass } from "lucide-react";

export function DashboardView() {
  const navigate = useNavigate();

  const dossierModules = [
    { key: "brand", num: "01", title: "Brand Audit & Design System", desc: "Verifies what is consistent, inconsistent, distinctive, and missing in Ursa's current brand. Codifies a conservative-refinement design system." },
    { key: "market", num: "02", title: "Market, Competitors & Customer Voice", desc: "Direct Miraflores competitors and Lima leaders. Converts competitor patterns into standards to match, problems to avoid, and areas to lead." },
    { key: "menu", num: "03", title: "Menu & Product Development", desc: "Reconstructs Ursa's current menu, then proposes new products across coffee, cold, seasonal, pastry, retail, experiences, and subscriptions." },
    { key: "growth", num: "04", title: "Marketing, Growth & Retention Plan", desc: "Integrated plan: positioning, JTBD, message and offer architecture, acquisition, creators, delivery, loyalty, reviews. Adapts Hormozi and Sutherland." },
    { key: "viral", num: "05", title: "Viral Content Laboratory", desc: "26 original content concepts, 10 complete scripts, 3 repeatable series, 3 creator briefs, 3 UGC mechanisms, and a four-week pilot calendar." },
    { key: "creative", num: "06", title: "Creative Campaign Prototypes", desc: "HTML/CSS/SVG prototypes for social posts, carousels, Stories, menus, packaging labels, bean cards, event materials, landing pages, and email." },
    { key: "roadmap", num: "07", title: "Implementation Roadmap & KPIs", desc: "First-72-hours, 30/60/90-day plans, and a 12-month innovation roadmap. Each workstream has owners, dependencies, metrics, and stopping rules." },
  ];

  const tools = [
    { key: "calculator", num: "08", title: "Subscription Economics Calculator", desc: "Interactive: edit every input and see live profit, break-even, free-cup capacity, sensitivity table, and cannibalization model. The Ursa Mañana S/. 20/month idea.", featured: true },
    { key: "menu-studio", num: "T1", title: "Menu Engineering Studio", desc: "Build a menu category by category with live margin analysis, ingredient overlap, and attach-rate modelling." },
    { key: "competitors", num: "T2", title: "Competitor Intelligence Dashboard", desc: "Filterable comparison matrix of 10 Miraflores and Lima competitors with strengths, weaknesses, and Ursa implications." },
    { key: "content-calendar", num: "T3", title: "Content Calendar & Scripts", desc: "Browse 26 concepts, read 10 full scripts, and lay out a four-week pilot calendar with a drag-friendly planner." },
    { key: "experiments", num: "T4", title: "Experiment Tracker", desc: "Track EXP-01 through EXP-11 with status, cost, metric, and stop rule. Update status as you run each test." },
    { key: "style-guide", num: "T5", title: "Brand Style Guide Explorer", desc: "Inspect the verified Ursa palette, typography, and components with copy-to-clipboard tokens." },
    { key: "budget", num: "T6", title: "Budget Allocator", desc: "Compare lean, moderate, and growth scenarios in PEN. Adjust line items and see the live monthly total." },
    { key: "origin-atlas", num: "T7", title: "Coffee Origin Atlas", desc: "Interactive map of Ursa's verified bean origins with altitude, process, and tasting notes." },
    { key: "roi", num: "T8", title: "ROI Dashboard", desc: "Model return on each marketing channel with payback period and confidence ranges." },
  ];

  return (
    <>
      <ViewHero
        eyebrow="Strategic Dossier · Prepared 2026-08-01 · Miraflores, Lima"
        title={
          <>
            A roaster-first growth plan that protects the bear, the gram, and the green.
          </>
        }
        lede={
          <>
            This command center preserves what Ursa Coffee Roasters already is — the Art Nouveau lean, the
            browns-and-greens palette, the bear motif, the in-house roastery on the floor, the two-bar theatre, and
            the <em>"Un gramo a la vez"</em> tagline — and proposes a conservative-refinement growth system across
            brand, menu, marketing, content, and creative. The direction is refinement, not rebrand; every
            recommendation is checked against the bear, the gram, and the green before it ships.
          </>
        }
        meta={[
          { label: "Subject", value: "Alcanfores 183, Miraflores" },
          { label: "Scope", value: "90-day launch + 12-month roadmap" },
          { label: "Currency", value: "PEN (S/.)" },
          { label: "Report", value: "English" },
          { label: "Campaign copy", value: "Spanish (Peru)" },
        ]}
      />

      {/* Quick facts + spirit preservation */}
      <ViewSection>
        <Grid cols={2}>
          <div>
            <SectionBadge>Read me first</SectionBadge>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ursa-dark-roast mt-3 mb-3">
              How to use this command center
            </h2>
            <p className="text-[0.97rem] leading-relaxed text-foreground/85 mb-3">
              This site is a single, interactive workspace. The seven dossier modules above present the research and
              recommendations; the nine tools below turn the most important recommendations into things you can actually
              manipulate — a calculator, a menu builder, a budget allocator, a competitor matrix, and more. Every
              recommendation is traceable to a source, and every risky assumption is paired with a low-cost experiment.
            </p>
            <p className="text-[0.97rem] leading-relaxed text-muted-foreground">
              Each view is print-friendly (use the Print button in the footer for a clean PDF), responsive, and
              keyboard-navigable. The original static HTML dossiers remain available as browsable reference.
            </p>
            <Callout tone="forest" title="Spirit-preservation principle">
              If a recommendation forces a choice between (a) protecting Ursa's existing bear / Art Nouveau / roastery
              identity and (b) chasing a generic growth tactic, this dossier always chooses (a). The
              conservative-refinement direction is the permanent system; experimental expressions are kept seasonal and
              reversible.
            </Callout>
          </div>
          <div className="space-y-4">
            <Card className="bg-ursa-foam">
              <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
                <BearMark size={22} className="text-ursa-dark-roast" /> Verified at research snapshot
              </h3>
              <ul className="space-y-1.5 text-[0.9rem] m-0 p-0 list-none">
                <FactRow label="Address" value={URSA_FACTS.address} />
                <FactRow label="Hours" value={URSA_FACTS.hours} />
                <FactRow label="Tagline" value={`"${URSA_FACTS.tagline}"`} />
                <FactRow label="Instagram" value={`${URSA_FACTS.instagram} · ${URSA_FACTS.followers} followers · ${URSA_FACTS.posts} posts`} />
                <FactRow label="Layout" value={URSA_FACTS.twoBars} />
                <FactRow label="Delivery" value={URSA_FACTS.delivery} />
                <FactRow label="Membership" value={URSA_FACTS.membership} />
              </ul>
              <p className="font-label text-[0.72rem] tracking-[0.06em] text-muted-foreground mt-3 mb-0">
                Snapshot {URSA_FACTS.snapshot} · <button onClick={() => navigate("sources")} className="text-ursa-forest-deep underline hover:text-ursa-dark-roast">See Sources &amp; Evidence</button>
              </p>
            </Card>
            <Callout tone="warn" title="Disambiguation — read before any external comparison">
              An unrelated <strong>"URSA"</strong> roastery and art gallery exists at ursabpt.com in Bridgeport, CT,
              USA. It is <em>not</em> the Peruvian brand and is <em>not</em> a benchmark. All references to Ursa in this
              dossier mean Ursa Coffee Roasters of Miraflores, Lima, Peru.
            </Callout>
          </div>
        </Grid>
      </ViewSection>

      {/* Verified signature drinks */}
      <ViewSection badge="Verified menu" title="Signature drinks & food" meta="From public sources, 2026-08-01">
        <Grid cols={2}>
          <Card>
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <Coffee size={18} className="text-ursa-gold" /> Verified beverages
            </h3>
            <ul className="space-y-2 m-0 p-0 list-none">
              {VERIFIED_BEVERAGES.map((b) => (
                <li key={b.name} className="flex items-start gap-2">
                  <EvidenceTag status={b.status} />
                  <div>
                    <p className="font-display font-semibold text-ursa-dark-roast m-0 leading-tight">{b.name}</p>
                    <p className="text-[0.85rem] text-muted-foreground m-0">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <Flame size={18} className="text-ursa-terracotta" /> Verified food
            </h3>
            <ul className="space-y-2 m-0 p-0 list-none">
              {VERIFIED_FOOD.map((b) => (
                <li key={b.name} className="flex items-start gap-2">
                  <EvidenceTag status={b.status} />
                  <div>
                    <p className="font-display font-semibold text-ursa-dark-roast m-0 leading-tight">{b.name}</p>
                    <p className="text-[0.85rem] text-muted-foreground m-0">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-[0.82rem] text-muted-foreground mt-3 mb-0 italic">
              The full reconstructed menu and product-development proposals are in Module 03.
            </p>
          </Card>
        </Grid>
      </ViewSection>

      {/* Dossier modules */}
      <ViewSection badge="Modules" title="Seven linked dossier modules">
        <Grid cols={3}>
          {dossierModules.map((m) => (
            <Card key={m.key} href={`#/dossier`} className="cursor-pointer" >
              <button onClick={() => navigate(m.key)} className="text-left w-full">
                <Pill tone="forest">Module {m.num}</Pill>
                <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-2 mb-1.5">{m.title}</h3>
                <p className="text-[0.85rem] text-muted-foreground m-0">{m.desc}</p>
              </button>
            </Card>
          ))}
        </Grid>
      </ViewSection>

      {/* Tools — the extra innovative pages */}
      <ViewSection badge="Interactive tools" title="Nine working tools — including eight extra innovative pages" meta="Built on the verified research">
        <Grid cols={3}>
          {tools.map((t) => (
            <Card key={t.key} highlight={t.featured} className="cursor-pointer">
              <button onClick={() => navigate(t.key)} className="text-left w-full h-full flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Pill tone={t.featured ? "gold" : "forest"}>{t.featured ? "Module 08 · Core" : `Extra · ${t.num}`}</Pill>
                  {t.featured && <Sparkles size={14} className="text-ursa-gold" />}
                </div>
                <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-1 mb-1.5 flex items-center gap-1.5">
                  {t.title} <ArrowRight size={16} className="text-ursa-gold" />
                </h3>
                <p className="text-[0.85rem] text-muted-foreground m-0">{t.desc}</p>
              </button>
            </Card>
          ))}
        </Grid>
      </ViewSection>

      {/* Headlines */}
      <ViewSection badge="Headlines" title="What this plan actually says">
        <Grid cols={3}>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">1 · Ursa is more distinctive than it looks</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">The bear, the gram, the Art Nouveau lean, the two-bar layout, and named drinks like <em>Ursagroni</em> add up to a brand that already does what Lima's specialty scene rewards: a recognizable identity rather than trend-hopping. The plan refines this rather than replacing it.</p>
          </Card>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">2 · The biggest gap is distribution, not product</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">Ursa has the roastery, the drinks, and the atmosphere. What it lacks is review-channel presence, a Google Business Profile that converts, a creator network, a hospitality pipeline into the 8+ hotels within walking distance, and — most visibly — a website. All five main Miraflores competitors already have one. The plan fixes this in the first 30 days.</p>
          </Card>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">3 · Hormozi + Sutherland adapt, with caveats</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">Hormozi's Value Equation and offer-stack discipline adapt usefully to a café — the dossier adapts rather than imports them, with explicit "do not" lists where the framework would overreach. Sutherland's perceived-value lens is the cheaper lever: story cards, named preparations, and the bear as a recurring character often beat expensive rational changes at near-zero cost.</p>
          </Card>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">4 · Conservative refinement is the recommended direction</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">Of three brand-evolution levels, the plan recommends Level 1 as the permanent system, Level 2 as a 6-month growth skin, and Level 3 only as seasonal expression. Total rebrand is explicitly off the table.</p>
          </Card>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">5 · Each risky assumption has a test and a stop rule</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">{EXPERIMENTS.length} experiments cover the riskiest assumptions. Most cost S/. 0–560 to run. Each has a success metric and a stop rule. If something does not work in 14–30 days, it is killed cleanly and documented, not doubled-down on.</p>
          </Card>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">6 · The 90-day plan is owned, not aspirational</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">72-hour / 30 / 60 / 90-day plans each name an owner, a dependency, a metric, and a stopping rule. Budget scenarios: lean (S/. {BUDGET_SCENARIOS[0].monthlyPEN.toLocaleString()}/mo), moderate (S/. {BUDGET_SCENARIOS[1].monthlyPEN.toLocaleString()}/mo), growth (S/. {BUDGET_SCENARIOS[2].monthlyPEN.toLocaleString()}/mo). The owner picks one and the plan adjusts.</p>
          </Card>
          <Card highlight>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-1.5">
              <Calculator size={16} className="text-ursa-gold" /> 7 · NEW · Ursa Mañana works on marginal-cost math
            </h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">A S/. 20/month unlimited-coffee subscription (Mon–Fri 7–10am, no milk drinks, in-store only, 1 cup/visit) is profitable across all three calculator presets — conservative, default, optimistic — because Ursa's own-roastery keeps marginal cost at S/. 1.20–1.80/cup. At default assumptions, net profit is <strong>S/. 35.60/subscriber/month</strong> before cannibalization. The real risk is cannibalization, which is why an interactive calculator models it explicitly.</p>
            <button onClick={() => navigate("calculator")} className="mt-3 inline-flex items-center gap-1.5 font-label text-[0.72rem] tracking-[0.12em] uppercase text-ursa-gold hover:text-ursa-dark-roast transition">
              Open the calculator <ArrowRight size={14} />
            </button>
          </Card>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">8 · Ownable space sits orthogonal to competitors</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">Punto Café won Premios Somos 2024. Neira has 4+ locations. Bisetti owns "escuela de café". Puku Puku owns "microlotes". Terrua charges US$25 for a tasting. Ursa's ownable space — bear + two bars + named-drink portmanteaus + "un gramo a la vez" — sits orthogonal to all of these.</p>
          </Card>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">9 · Every claim is traceable; every gap is named</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">Each strategic claim cites a public source or marks itself as a scenario assumption. Where data is missing — average ticket, repeat rate, margin — the dossier says so and absorbs the gap with lean, moderate, and growth scenarios rather than invented numbers. No recommendation is held together by filler.</p>
          </Card>
        </Grid>
      </ViewSection>

      {/* Quick stats */}
      <ViewSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatBlock value="26" label="Original content concepts specific to Ursa" tone="forest" />
          <StatBlock value="11" label="Designed experiments with stop rules" tone="gold" />
          <StatBlock value="S/.20" label="Proposed monthly subscription price" tone="terracotta" />
          <StatBlock value="8+" label="Hotels within walking distance of Alcanfores 183" tone="forest" />
        </div>
        <ArtNouveauDivider />
      </ViewSection>

      {/* Open questions */}
      <ViewSection badge="Open questions" title="One grouped clarification for the owner">
        <p className="text-[1.05rem] text-muted-foreground max-w-[62ch] mb-6">
          Most missing business data (average ticket, repeat-visit rate, margin, customer database, campaign history)
          is handled by lean/moderate/growth scenarios throughout the plan. Six questions would materially improve the
          plan if answered, but none blocks the 72-hour launch. The owner should answer them in a single batched reply
          when convenient.
        </p>
        <Grid cols={2}>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <Compass size={16} className="text-ursa-forest-deep" /> Operational data
            </h3>
            <ul className="space-y-1.5 text-[0.9rem] m-0 p-0 list-none">
              <li>Monthly marketing budget range (lean / moderate / growth)?</li>
              <li>Average ticket size and best / worst sellers from POS?</li>
              <li>Current repeat-visit rate or any loyalty data?</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <Star size={16} className="text-ursa-gold" /> Audience &amp; assets
            </h3>
            <ul className="space-y-1.5 text-[0.9rem] m-0 p-0 list-none">
              <li>Size of existing customer email / WhatsApp list with consent?</li>
              <li>Staff capacity for classes, cuppings, or creator collaborations?</li>
              <li>Owner-supplied logo and packaging asset pack for visual verification?</li>
            </ul>
          </Card>
        </Grid>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/dossier/index.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ursa-gold-soft/40 text-ursa-forest-deep hover:bg-ursa-gold hover:text-ursa-dark-roast transition font-label text-[0.74rem] tracking-[0.1em] uppercase">
            <ExternalLink size={14} /> Open static HTML dossiers
          </a>
          <button onClick={() => navigate("roadmap")} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-forest-deep text-ursa-cream hover:bg-ursa-dark-roast transition font-label text-[0.74rem] tracking-[0.1em] uppercase">
            <MapPin size={14} /> See the 90-day roadmap
          </button>
          <button onClick={() => navigate("calculator")} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-gold text-ursa-dark-roast hover:bg-ursa-gold-soft transition font-label text-[0.74rem] tracking-[0.1em] uppercase">
            <Calculator size={14} /> Try the subscription calculator
          </button>
        </div>
      </ViewSection>
    </>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
      <span className="font-label text-[0.66rem] tracking-[0.12em] uppercase text-muted-foreground shrink-0 sm:w-24">{label}</span>
      <span className="text-ursa-dark-roast font-medium">{value}</span>
    </li>
  );
}
