"use client";

import { ViewHero, ViewSection, Card, Grid, Reveal } from "../view-shell";
import { BearMark, CupGlyph, ArtNouveauDivider, Pill, StatBlock, Callout, EvidenceTag, SectionBadge } from "../ursa-brand";
import { BearScoreWidget } from "../bear-score-widget";
import { DayInTheLifeWidget } from "../day-in-life-widget";
import { URSA_FACTS, VERIFIED_BEVERAGES, VERIFIED_FOOD, EXPERIMENTS, BUDGET_SCENARIOS } from "@/lib/ursa-data";
import { ROUTES, useNavigate } from "@/lib/ursa-nav";
import { useI18n } from "@/hooks/use-i18n";
import { ArrowRight, MapPin, Clock, Coffee, Star, Sparkles, Calculator, ExternalLink, Flame, Compass, Utensils, Swords, Calendar, FlaskConical, SwatchBook, Wallet, Globe, TrendingUp, Wand2, Shield, Grid2x2, Activity, Award } from "lucide-react";

export function DashboardView() {
  const navigate = useNavigate();
  const { t } = useI18n();

  const dossierModules = [
    { key: "brand", num: "01", title: "Brand Audit & Design System", desc: "Verifies what is consistent, inconsistent, distinctive, and missing in Ursa's current brand. Codifies a conservative-refinement design system." },
    { key: "market", num: "02", title: "Market, Competitors & Customer Voice", desc: "Direct Miraflores competitors and Lima leaders. Converts competitor patterns into standards to match, problems to avoid, and areas to lead." },
    { key: "menu", num: "03", title: "Menu & Product Development", desc: "Reconstructs Ursa's current menu, then proposes new products across coffee, cold, seasonal, pastry, retail, experiences, and subscriptions." },
    { key: "growth", num: "04", title: "Marketing, Growth & Retention Plan", desc: "Integrated plan: positioning, JTBD, message and offer architecture, acquisition, creators, delivery, loyalty, reviews. Adapts Hormozi and Sutherland." },
    { key: "viral", num: "05", title: "Viral Content Laboratory", desc: "26 original content concepts, 10 complete scripts, 3 repeatable series, 3 creator briefs, 3 UGC mechanisms, and a four-week pilot calendar." },
    { key: "creative", num: "06", title: "Creative Campaigns", desc: "HTML/CSS/SVG samples for social posts, carousels, Stories, menus, packaging labels, bean cards, event materials, landing pages, and email." },
    { key: "roadmap", num: "07", title: "Implementation Roadmap & KPIs", desc: "First-72-hours, 30/60/90-day plans, and a 12-month innovation roadmap. Each workstream has owners, dependencies, metrics, and stopping rules." },
  ];

  const tools = [
    { key: "calculator", num: "08", title: "Subscription Economics Calculator", desc: "Interactive: edit every input and see live profit, break-even, free-cup capacity, sensitivity table, and cannibalization model. The Ursa Mañana S/. 20/month idea.", featured: true, icon: Calculator },
    { key: "menu-studio", num: "T1", title: "Menu Engineering Studio", desc: "Build a menu category by category with live margin analysis, ingredient overlap, and attach-rate modelling.", icon: Utensils },
    { key: "competitors", num: "T2", title: "Competitor Intelligence Dashboard", desc: "Filterable comparison matrix of 13 Miraflores and Lima competitors with strengths, weaknesses, and Ursa implications.", icon: Swords },
    { key: "content-calendar", num: "T3", title: "Content Calendar & Scripts", desc: "Browse 26 concepts, read 10 full scripts, and lay out a four-week pilot calendar with a drag-friendly planner.", icon: Calendar },
    { key: "experiments", num: "T4", title: "Experiment Tracker", desc: "Track every experiment with status, cost, metric, and stop rule. Update status as you run each test.", icon: FlaskConical },
    { key: "style-guide", num: "T5", title: "Brand Style Guide Explorer", desc: "Inspect the verified Ursa palette, typography, and components with copy-to-clipboard tokens.", icon: SwatchBook },
    { key: "budget", num: "T6", title: "Budget Allocator", desc: "Compare lean, moderate, and growth scenarios in PEN. Adjust line items and see the live monthly total.", icon: Wallet },
    { key: "origin-atlas", num: "T7", title: "Coffee Origin Atlas", desc: "Interactive map of Ursa's verified bean origins with altitude, process, and tasting notes.", icon: Globe },
    { key: "roi", num: "T8", title: "ROI Dashboard", desc: "Model return on each marketing channel with payback period and confidence ranges.", icon: TrendingUp },
    { key: "campaign-builder", num: "T9", title: "Campaign Builder", desc: "A 6-step wizard: offer → audience → channel → metric → budget → summary. Outputs a copyable plain-text brief with a stop rule.", icon: Wand2 },
    { key: "spirit-checker", num: "T10", title: "Spirit-Preservation Checker", desc: "Validate any new tactic against the bear, the gram, and the green. 8 questions, 3 pillars, one verdict.", icon: Shield },
    { key: "swot", num: "T11", title: "Competitor SWOT Matrix", desc: "Interactive 2×2 plot of 13 competitors on distinctiveness × reach. Click any dot for its SWOT and the Ursa implication.", icon: Grid2x2 },
    { key: "pilot", num: "T12", title: "Ursa Mañana Pilot Dashboard", desc: "12-week subscription pilot dashboard: sign-ups, side-attach, cannibalization, and net profit. Adjust the inputs to model different scenarios.", icon: Activity },
    { key: "scorecard", num: "T13", title: "Brand Audit Scorecard", desc: "One-page executive compilation: Bear Score, brand pillars, experiment status, and the spirit-preservation verdict. Print or copy as text.", icon: Award, featured: false },
  ];

  return (
    <>
      <ViewHero
        eyebrow={t("content.dashboard.eyebrow")}
        title={<>{t("content.dashboard.title")}</>}
        lede={<>{t("content.dashboard.lede")}</>}
        meta={[
          { label: t("common.subject"), value: "Alcanfores 183, Miraflores" },
          { label: t("common.scope"), value: "90-day launch + 12-month roadmap" },
          { label: t("common.currency"), value: "PEN (S/.)" },
          { label: t("common.report"), value: t("common.english-report") },
          { label: t("common.campaign-copy"), value: t("common.spanish-peru") },
        ]}
      />

      {/* Quick facts + spirit preservation */}
      <ViewSection>
        <Grid cols={2}>
          <div>
            <SectionBadge>{t("badges.read-me-first")}</SectionBadge>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ursa-dark-roast mt-3 mb-3">
              {t("content.dashboard.section.how-to-use")}
            </h2>
            <p className="text-[0.97rem] leading-relaxed text-foreground/85 mb-3">
              {t("content.dashboard.how-to-use.p1")}
            </p>
            <p className="text-[0.97rem] leading-relaxed text-muted-foreground">
              {t("content.dashboard.how-to-use.p2")}
            </p>
            <Callout tone="forest" title={t("content.dashboard.how-to-use.callout-title")}>
              {t("content.dashboard.how-to-use.callout")}
            </Callout>
          </div>
          <div className="space-y-4">
            <Card className="bg-ursa-foam">
              <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
                <BearMark size={22} className="text-ursa-dark-roast" /> {t("common.verified-at-snapshot")}
              </h3>
              <ul className="space-y-1.5 text-[0.9rem] m-0 p-0 list-none">
                <FactRow label={t("common.address")} value={URSA_FACTS.address} />
                <FactRow label={t("common.hours")} value={URSA_FACTS.hours} />
                <FactRow label={t("common.tagline")} value={`"${URSA_FACTS.tagline}"`} />
                <FactRow label={t("common.instagram")} value={`${URSA_FACTS.instagram} · ${URSA_FACTS.followers} followers · ${URSA_FACTS.posts} posts`} />
                <FactRow label={t("common.layout")} value={URSA_FACTS.twoBars} />
                <FactRow label={t("common.delivery")} value={URSA_FACTS.delivery} />
                <FactRow label={t("common.membership")} value={URSA_FACTS.membership} />
              </ul>
              <p className="font-label text-[0.72rem] tracking-[0.06em] text-muted-foreground mt-3 mb-0">
                {t("common.snapshot")} {URSA_FACTS.snapshot} · <button onClick={() => navigate("sources")} className="text-ursa-forest-deep underline hover:text-ursa-dark-roast">{t("common.see-sources")}</button>
              </p>
            </Card>
            <Callout tone="warn" title={t("content.dashboard.disambiguation-title")}>
              {t("content.dashboard.disambiguation")}
            </Callout>
          </div>
        </Grid>
      </ViewSection>

      {/* Verified signature drinks */}
      <ViewSection badge={t("badges.verified-menu")} title={t("content.dashboard.section.signature")} meta={t("content.dashboard.meta.signature")}>
        <Grid cols={2}>
          <Card>
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <Coffee size={18} className="text-ursa-gold" /> {t("content.dashboard.verified.beverages")}
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
              <Flame size={18} className="text-ursa-terracotta" /> {t("content.dashboard.verified.food")}
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
              {t("content.dashboard.verified.menu-footnote")}
            </p>
          </Card>
        </Grid>
      </ViewSection>

      {/* Bear Score — brand-health widget */}
      <ViewSection badge={t("badges.brand-health")} title={t("content.dashboard.section.bear-score")} meta={t("content.dashboard.meta.bear-score")}>
        <BearScoreWidget />
      </ViewSection>

      {/* Dossier modules */}
      <ViewSection badge={t("badges.modules")} title={t("content.dashboard.section.modules")}>
        <Grid cols={4}>
          {dossierModules.map((m) => (
            <Card key={m.key} className="cursor-pointer group transition-all duration-200 hover:-translate-y-1 hover:border-ursa-gold/50 hover:shadow-md">
              <button onClick={() => navigate(m.key)} className="text-left w-full h-full flex flex-col">
                <Pill tone="forest">{t("common.module")} {m.num}</Pill>
                <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-2 mb-1.5 flex items-center gap-1.5">
                  {m.title}
                  <ArrowRight size={15} className="text-ursa-gold-text opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-[0.85rem] text-muted-foreground m-0">{m.desc}</p>
              </button>
            </Card>
          ))}
        </Grid>
      </ViewSection>

      {/* Tools — the extra innovative pages */}
      <ViewSection badge={t("badges.interactive-tools")} title={t("content.dashboard.section.tools")} meta={t("content.dashboard.meta.tools")}>
        <Grid cols={4}>
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.key} highlight={tool.featured} className="cursor-pointer group transition-all duration-200 hover:-translate-y-1 hover:border-ursa-gold/50 hover:shadow-md">
                <button onClick={() => navigate(tool.key)} className="text-left w-full h-full flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className={`w-10 h-10 rounded-lg grid place-items-center shrink-0 transition group-hover:scale-110 ${tool.featured ? "bg-ursa-gold/20 text-ursa-gold" : "bg-ursa-forest-deep/10 text-ursa-forest-deep"}`}>
                      <Icon size={20} />
                    </span>
                    <Pill tone={tool.featured ? "gold" : "forest"}>{tool.featured ? `${t("common.module")} 08` : `${t("common.extra")} · ${tool.num}`}</Pill>
                  </div>
                  <h3 className="font-display text-[0.98rem] font-semibold text-ursa-dark-roast mt-0 mb-1.5 flex items-center gap-1.5 leading-tight">
                    {tool.title}
                    <ArrowRight size={14} className="text-ursa-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                  </h3>
                  <p className="text-[0.8rem] text-muted-foreground m-0 leading-relaxed">{tool.desc}</p>
                </button>
              </Card>
            );
          })}
        </Grid>
      </ViewSection>

      {/* Headlines */}
      <ViewSection badge={t("badges.headlines")} title={t("content.dashboard.section.headlines")}>
        <Grid cols={3}>
          <Reveal delay={0}><Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.dashboard.h1.title")}</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">{t("content.dashboard.h1.body")}</p>
          </Card></Reveal>
          <Reveal delay={80}><Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.dashboard.h2.title")}</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">{t("content.dashboard.h2.body")}</p>
          </Card></Reveal>
          <Reveal delay={160}><Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.dashboard.h3.title")}</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">{t("content.dashboard.h3.body")}</p>
          </Card></Reveal>
          <Reveal delay={0}><Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.dashboard.h4.title")}</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">{t("content.dashboard.h4.body")}</p>
          </Card></Reveal>
          <Reveal delay={80}><Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.dashboard.h5.title")}</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">{EXPERIMENTS.length} experiments cover the riskiest assumptions. Most cost S/. 0–560 to run. Each has a success metric and a stop rule. If something does not work in 14–30 days, it is killed cleanly and documented, not doubled-down on.</p>
          </Card></Reveal>
          <Reveal delay={160}><Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.dashboard.h6.title")}</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">72-hour / 30 / 60 / 90-day plans each name an owner, a dependency, a metric, and a stopping rule. Budget scenarios: lean (S/. {BUDGET_SCENARIOS[0].monthlyPEN.toLocaleString()}/mo), moderate (S/. {BUDGET_SCENARIOS[1].monthlyPEN.toLocaleString()}/mo), growth (S/. {BUDGET_SCENARIOS[2].monthlyPEN.toLocaleString()}/mo). The owner picks one and the plan adjusts.</p>
          </Card></Reveal>
          <Reveal delay={0}><Card highlight>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-1.5">
              <Calculator size={16} className="text-ursa-gold" /> {t("content.dashboard.h7.title")}
            </h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">{t("content.dashboard.h7.body-start")} <strong>S/. 35.60/subscriber/month</strong> {t("content.dashboard.h7.body-end")}</p>
            <button onClick={() => navigate("calculator")} className="mt-3 inline-flex items-center gap-1.5 font-label text-[0.72rem] tracking-[0.12em] uppercase text-ursa-gold hover:text-ursa-dark-roast transition">
              {t("actions.open-calculator")} <ArrowRight size={14} />
            </button>
          </Card></Reveal>
          <Reveal delay={80}><Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.dashboard.h8.title")}</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">{t("content.dashboard.h8.body")}</p>
          </Card></Reveal>
          <Reveal delay={160}><Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.dashboard.h9.title")}</h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">{t("content.dashboard.h9.body")}</p>
          </Card></Reveal>
          <Reveal delay={0}><Card highlight>
            <div className="flex items-center gap-2 mb-2">
              <Pill tone="gold">NEW</Pill>
            </div>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-center gap-1.5">
              <ArrowRight size={16} className="text-ursa-gold-text" /> 10 · Ursa is now an award-recognized café
            </h3>
            <p className="text-[0.9rem] text-muted-foreground m-0">Ursa placed in the top 5 of the CAM Café Perú EXPERIENCE 2025 competition (Specialty Coffee Shop category), alongside Monótono Coffee (1st) and Punto Café (2nd). A specialized jury visited 40+ establishments across 17 districts. This upgrades Ursa&rsquo;s competitive position from &ldquo;unrecognized&rdquo; to &ldquo;award-recognized&rdquo; — the distribution gap (Module 02) is no longer about quality, it&rsquo;s about visibility.</p>
          </Card></Reveal>
        </Grid>
      </ViewSection>

      {/* Day in the Life — new interactive feature */}
      <ViewSection badge={t("badges.rhythm")} title={t("content.dashboard.section.day-in-life")} meta={t("content.dashboard.meta.day-in-life")}>
        <DayInTheLifeWidget />
      </ViewSection>

      {/* Quick stats */}
      <ViewSection badge={t("badges.by-the-numbers")} title={t("content.dashboard.section.figures")}>
        <Card className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-ursa-line-soft">
            <div className="px-2 md:px-4 first:pl-0">
              <StatBlock value="26" label={t("content.dashboard.stat.concepts")} tone="forest" />
            </div>
            <div className="px-2 md:px-4">
              <StatBlock value="11" label={t("content.dashboard.stat.experiments")} tone="gold" />
            </div>
            <div className="px-2 md:px-4">
              <StatBlock value="S/.20" label={t("content.dashboard.stat.subscription")} tone="terracotta" />
            </div>
            <div className="px-2 md:px-4 last:pr-0">
              <StatBlock value="8+" label={t("content.dashboard.stat.hotels")} tone="forest" />
            </div>
          </div>
        </Card>
        <ArtNouveauDivider />
      </ViewSection>

      {/* Open questions */}
      <ViewSection badge={t("badges.open-questions")} title={t("content.dashboard.section.clarification")}>
        <p className="text-[1.05rem] text-muted-foreground max-w-[62ch] mb-6">
          {t("content.dashboard.open-questions.lede")}
        </p>
        <Grid cols={2}>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <Compass size={16} className="text-ursa-forest-deep" /> {t("common.operational-data")}
            </h3>
            <ul className="space-y-1.5 text-[0.9rem] m-0 p-0 list-none">
              <li>{t("content.dashboard.q.operational.1")}</li>
              <li>{t("content.dashboard.q.operational.2")}</li>
              <li>{t("content.dashboard.q.operational.3")}</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <Star size={16} className="text-ursa-gold" /> {t("common.audience-assets")}
            </h3>
            <ul className="space-y-1.5 text-[0.9rem] m-0 p-0 list-none">
              <li>{t("content.dashboard.q.audience.1")}</li>
              <li>{t("content.dashboard.q.audience.2")}</li>
              <li>{t("content.dashboard.q.audience.3")}</li>
            </ul>
          </Card>
        </Grid>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/dossier/index.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ursa-gold-soft/40 text-ursa-forest-deep hover:bg-ursa-gold hover:text-ursa-dark-roast transition font-label text-[0.74rem] tracking-[0.1em] uppercase">
            <ExternalLink size={14} /> {t("actions.open-static-html")}
          </a>
          <button onClick={() => navigate("roadmap")} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-forest-deep text-ursa-cream hover:bg-ursa-dark-roast transition font-label text-[0.74rem] tracking-[0.1em] uppercase">
            <MapPin size={14} /> {t("actions.see-roadmap")}
          </button>
          <button onClick={() => navigate("calculator")} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ursa-gold text-ursa-dark-roast hover:bg-ursa-gold-soft transition font-label text-[0.74rem] tracking-[0.1em] uppercase">
            <Calculator size={14} /> {t("actions.try-calculator")}
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
