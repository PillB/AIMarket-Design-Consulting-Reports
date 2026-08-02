"use client";

import { NavContext } from "@/lib/ursa-nav";
/* i18n uses useSyncExternalStore — no provider needed */
import { useHashRoute, parseRoute } from "@/hooks/use-hash-route";
import { UrsaHeader, UrsaFooter } from "@/components/ursa/ursa-header";
import { DashboardView } from "@/components/ursa/views/dashboard-view";
import { BrandAuditView } from "@/components/ursa/views/brand-audit-view";
import { MarketView } from "@/components/ursa/views/market-view";
import { MenuView } from "@/components/ursa/views/menu-view";
import { GrowthView } from "@/components/ursa/views/growth-view";
import { ViralView } from "@/components/ursa/views/viral-view";
import { CreativeView } from "@/components/ursa/views/creative-view";
import { RoadmapView } from "@/components/ursa/views/roadmap-view";
import { SourcesView } from "@/components/ursa/views/sources-view";
import { LandingView } from "@/components/ursa/views/landing-view";
import { CalculatorView } from "@/components/ursa/tools/calculator-view";
import { MenuStudioView } from "@/components/ursa/tools/menu-studio-view";
import { CompetitorsView } from "@/components/ursa/tools/competitors-view";
import { ContentCalendarView } from "@/components/ursa/tools/content-calendar-view";
import { ExperimentsView } from "@/components/ursa/tools/experiments-view";
import { StyleGuideView } from "@/components/ursa/tools/style-guide-view";
import { BudgetView } from "@/components/ursa/tools/budget-view";
import { OriginAtlasView } from "@/components/ursa/tools/origin-atlas-view";
import { RoiView } from "@/components/ursa/tools/roi-view";
import { CampaignBuilderView } from "@/components/ursa/tools/campaign-builder-view";
import { SpiritCheckerView } from "@/components/ursa/tools/spirit-checker-view";
import { SwotView } from "@/components/ursa/tools/swot-view";
import { PilotView } from "@/components/ursa/tools/pilot-view";
import { ScorecardView } from "@/components/ursa/tools/scorecard-view";
import { CommandPalette } from "@/components/ursa/command-palette";
import { ScrollProgress } from "@/components/ursa/scroll-progress";
import { useEffect } from "react";

export default function Home() {
  const [route, navigate] = useHashRoute();
  const [base] = parseRoute(route);

  // Update document title based on route
  useEffect(() => {
    const titles: Record<string, string> = {
      "": "Ursa Coffee — Strategic Command Center",
      brand: "01 · Brand Audit & Design System — Ursa Coffee",
      market: "02 · Market, Competitors & Customer Voice — Ursa Coffee",
      menu: "03 · Menu & Product Development — Ursa Coffee",
      growth: "04 · Marketing, Growth & Retention — Ursa Coffee",
      viral: "05 · Viral Content Laboratory — Ursa Coffee",
      creative: "06 · Creative Campaign Prototypes — Ursa Coffee",
      roadmap: "07 · Implementation Roadmap & KPIs — Ursa Coffee",
      calculator: "08 · Subscription Economics Calculator — Ursa Coffee",
      "menu-studio": "Menu Engineering Studio — Ursa Coffee",
      competitors: "Competitor Intelligence — Ursa Coffee",
      "content-calendar": "Content Calendar & Scripts — Ursa Coffee",
      experiments: "Experiment Tracker — Ursa Coffee",
      "style-guide": "Brand Style Guide — Ursa Coffee",
      budget: "Budget Allocator — Ursa Coffee",
      "origin-atlas": "Coffee Origin Atlas — Ursa Coffee",
      roi: "ROI Dashboard — Ursa Coffee",
      "campaign-builder": "Campaign Builder — Ursa Coffee",
      "spirit-checker": "Spirit-Preservation Checker — Ursa Coffee",
      swot: "Competitor SWOT Matrix — Ursa Coffee",
      pilot: "Ursa Mañana Pilot Dashboard — Ursa Coffee",
      scorecard: "Brand Audit Scorecard — Ursa Coffee",
      sources: "Sources & Evidence — Ursa Coffee",
      landing: "Ursa Mañana — Landing Page Prototype — Ursa Coffee",
    };
    document.title = titles[base] || "Ursa Coffee — Strategic Command Center";
  }, [base]);

  const renderView = () => {
    switch (base) {
      case "":
        return <DashboardView />;
      case "brand":
        return <BrandAuditView />;
      case "market":
        return <MarketView />;
      case "menu":
        return <MenuView />;
      case "growth":
        return <GrowthView />;
      case "viral":
        return <ViralView />;
      case "creative":
        return <CreativeView />;
      case "roadmap":
        return <RoadmapView />;
      case "calculator":
        return <CalculatorView />;
      case "menu-studio":
        return <MenuStudioView />;
      case "competitors":
        return <CompetitorsView />;
      case "content-calendar":
        return <ContentCalendarView />;
      case "experiments":
        return <ExperimentsView />;
      case "style-guide":
        return <StyleGuideView />;
      case "budget":
        return <BudgetView />;
      case "origin-atlas":
        return <OriginAtlasView />;
      case "roi":
        return <RoiView />;
      case "campaign-builder":
        return <CampaignBuilderView />;
      case "spirit-checker":
        return <SpiritCheckerView />;
      case "swot":
        return <SwotView />;
      case "pilot":
        return <PilotView />;
      case "scorecard":
        return <ScorecardView />;
      case "sources":
        return <SourcesView />;
      case "landing":
        return <LandingView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <NavContext.Provider value={navigate}>
        <div className="min-h-screen flex flex-col bg-background">
          <UrsaHeader currentRoute={base} />
          <main className="flex-1 ursa-fade-up" key={base}>
            {renderView()}
          </main>
          <UrsaFooter onPrint={() => window.print()} />
          <ScrollProgress />
          <CommandPalette />
        </div>

    </NavContext.Provider>
  );
}
