"use client";

import { useState } from "react";
import { Menu, X, Printer, ExternalLink } from "lucide-react";
import { BearMark } from "./ursa-brand";
import { ThemeToggle } from "./theme-toggle";
import { ROUTES, RouteKey, useNavigate } from "@/lib/ursa-nav";
import { cn } from "@/lib/utils";

export function UrsaHeader({ currentRoute }: { currentRoute: string }) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const dossierKeys: RouteKey[] = ["brand", "market", "menu", "growth", "viral", "creative", "roadmap"];
  const toolKeys: RouteKey[] = [
    "calculator",
    "menu-studio",
    "competitors",
    "content-calendar",
    "experiments",
    "style-guide",
    "budget",
    "origin-atlas",
    "roi",
    "campaign-builder",
    "spirit-checker",
    "swot",
    "pilot",
    "scorecard",
  ];

  const isActive = (key: string) => currentRoute === key;

  const go = (key: string) => {
    navigate(key);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-ursa-dark-roast text-ursa-cream border-b-[3px] border-ursa-gold no-print">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 py-3">
          {/* Brand */}
          <button
            onClick={() => go("")}
            className="flex items-center gap-3 text-left hover:opacity-90 transition shrink-0"
            aria-label="Ursa Coffee — go to dashboard"
          >
            <span className="w-11 h-11 rounded-full bg-ursa-cream grid place-items-center shadow-[inset_0_0_0_1px_var(--color-ursa-gold)] text-ursa-dark-roast ursa-breathe">
              <BearMark size={30} />
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-xl font-semibold leading-none text-ursa-cream">
                Ursa Coffee Roasters
              </span>
              <span className="block font-label text-[0.62rem] tracking-[0.22em] uppercase text-ursa-gold-soft mt-1">
                Strategic Dossier · 2026
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 ml-auto" aria-label="Primary">
            <NavBtn active={isActive("")} onClick={() => go("")}>
              Dashboard
            </NavBtn>

            <div className="relative group">
              <button className="px-3 py-2 font-label text-[0.7rem] tracking-[0.14em] uppercase rounded text-ursa-cream hover:bg-white/10 transition flex items-center gap-1">
                Dossier
                <span className="text-[0.6rem] opacity-60">▾</span>
              </button>
              <div className="absolute right-0 top-full pt-1 hidden group-hover:block">
                <div className="bg-ursa-espresso border border-ursa-gold/40 rounded-lg shadow-xl py-2 w-64">
                  {dossierKeys.map((k) => (
                    <button
                      key={k}
                      onClick={() => go(k)}
                      className={cn(
                        "block w-full text-left px-4 py-2 font-label text-[0.72rem] tracking-[0.1em] uppercase hover:bg-white/10 transition",
                        isActive(k) ? "text-ursa-gold bg-white/5" : "text-ursa-cream/90"
                      )}
                    >
                      {ROUTES[k].label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="px-3 py-2 font-label text-[0.7rem] tracking-[0.14em] uppercase rounded text-ursa-cream hover:bg-white/10 transition flex items-center gap-1">
                Tools
                <span className="text-[0.6rem] opacity-60">▾</span>
              </button>
              <div className="absolute right-0 top-full pt-1 hidden group-hover:block">
                <div className="bg-ursa-espresso border border-ursa-gold/40 rounded-lg shadow-xl py-2 w-64 max-h-[70vh] overflow-y-auto ursa-scroll">
                  {toolKeys.map((k) => (
                    <button
                      key={k}
                      onClick={() => go(k)}
                      className={cn(
                        "block w-full text-left px-4 py-2 font-label text-[0.72rem] tracking-[0.1em] uppercase hover:bg-white/10 transition",
                        isActive(k) ? "text-ursa-gold bg-white/5" : "text-ursa-cream/90"
                      )}
                    >
                      {ROUTES[k].label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <NavBtn active={isActive("sources")} onClick={() => go("sources")}>
              Sources
            </NavBtn>

            <NavBtn active={isActive("landing")} onClick={() => go("landing")}>
              Ursa Mañana
            </NavBtn>

            <ThemeToggle className="ml-1" />

            <a
              href="/dossier/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 px-3 py-2 font-label text-[0.7rem] tracking-[0.14em] uppercase rounded border border-ursa-gold-soft/40 text-ursa-gold-soft hover:bg-ursa-gold hover:text-ursa-dark-roast transition flex items-center gap-1.5"
            >
              Static Dossier <ExternalLink size={12} />
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden ml-auto p-2 text-ursa-cream"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-ursa-gold/30 bg-ursa-espresso max-h-[80vh] overflow-y-auto ursa-scroll">
          <div className="px-4 py-4 space-y-4">
            <MobileSection title="Top">
              <MobileLink active={isActive("")} onClick={() => go("")}>
                Dashboard
              </MobileLink>
              <MobileLink active={isActive("sources")} onClick={() => go("sources")}>
                Sources & Evidence
              </MobileLink>
              <MobileLink active={isActive("landing")} onClick={() => go("landing")}>
                Ursa Mañana Landing
              </MobileLink>
            </MobileSection>
            <MobileSection title="Dossier Modules">
              {dossierKeys.map((k) => (
                <MobileLink key={k} active={isActive(k)} onClick={() => go(k)}>
                  {ROUTES[k].label}
                </MobileLink>
              ))}
            </MobileSection>
            <MobileSection title="Interactive Tools">
              {toolKeys.map((k) => (
                <MobileLink key={k} active={isActive(k)} onClick={() => go(k)}>
                  {ROUTES[k].label}
                </MobileLink>
              ))}
            </MobileSection>
            <a
              href="/dossier/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 font-label text-[0.72rem] tracking-[0.1em] uppercase rounded border border-ursa-gold-soft/40 text-ursa-gold-soft"
            >
              Open Static Dossier <ExternalLink size={14} />
            </a>
            <div className="flex items-center justify-between pt-3 border-t border-ursa-gold/20">
              <span className="font-label text-[0.66rem] tracking-[0.16em] uppercase text-ursa-gold-soft">Tema</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavBtn({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "px-3 py-2 font-label text-[0.7rem] tracking-[0.14em] uppercase rounded transition",
        active ? "bg-ursa-gold text-ursa-dark-roast" : "text-ursa-cream hover:bg-white/10"
      )}
    >
      {children}
    </button>
  );
}

function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-label text-[0.62rem] tracking-[0.18em] uppercase text-ursa-gold-soft mb-1.5 px-1">{title}</p>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  );
}

function MobileLink({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left px-3 py-2.5 font-label text-[0.74rem] tracking-[0.08em] uppercase rounded transition",
        active ? "bg-ursa-gold text-ursa-dark-roast" : "text-ursa-cream/90 hover:bg-white/10"
      )}
    >
      {children}
    </button>
  );
}

export function UrsaFooter({ onPrint }: { onPrint?: () => void }) {
  return (
    <footer className="bg-ursa-espresso text-ursa-cream mt-auto border-t-[3px] border-ursa-gold no-print">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-9 h-9 rounded-full bg-ursa-cream grid place-items-center text-ursa-dark-roast">
                <BearMark size={24} />
              </span>
              <h4 className="font-display text-lg text-ursa-cream m-0">Ursa Coffee Roasters — Strategic Dossier</h4>
            </div>
            <p className="text-[0.88rem] text-ursa-sage leading-relaxed">
              Research-grounded brand, product, graphic, and marketing plan prepared for the owners of Ursa Coffee
              Roasters, Alcanfores 183, Miraflores, Lima. Preserves the existing Art Nouveau / bear / roastery identity.
              No rebrand. Compiled 2026-08-01.
            </p>
          </div>
          <div>
            <h4 className="font-label text-[0.7rem] tracking-[0.16em] uppercase text-ursa-gold-soft mb-3">Dossier Modules</h4>
            <div className="text-[0.85rem] space-y-1.5">
              <FooterLink href="#/brand">01 · Brand Audit</FooterLink>
              <FooterLink href="#/market">02 · Market &amp; Customer Voice</FooterLink>
              <FooterLink href="#/menu">03 · Menu &amp; Product</FooterLink>
              <FooterLink href="#/growth">04 · Growth &amp; Retention</FooterLink>
            </div>
          </div>
          <div>
            <h4 className="font-label text-[0.7rem] tracking-[0.16em] uppercase text-ursa-gold-soft mb-3">More</h4>
            <div className="text-[0.85rem] space-y-1.5">
              <FooterLink href="#/viral">05 · Viral Content Lab</FooterLink>
              <FooterLink href="#/creative">06 · Creative Prototypes</FooterLink>
              <FooterLink href="#/roadmap">07 · Roadmap &amp; KPIs</FooterLink>
              <FooterLink href="#/calculator">08 · Subscription &amp; Calculator</FooterLink>
              <FooterLink href="#/sources">Sources &amp; Evidence</FooterLink>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[0.76rem] text-ursa-sage max-w-3xl">
            Compiled from public sources cited in Sources &amp; Evidence. No proprietary material reproduced. This
            dossier does not represent, alter, or counterfeit the official Ursa Coffee Roasters logo or trademark; the
            geometric bear glyph used in the header is an original concept mark for navigation only.
          </p>
          {onPrint && (
            <button
              onClick={onPrint}
              className="flex items-center gap-2 border border-ursa-gold-soft/40 text-ursa-gold-soft px-4 py-2 rounded-full font-label text-[0.7rem] tracking-[0.14em] uppercase hover:bg-ursa-gold hover:text-ursa-dark-roast transition shrink-0"
            >
              <Printer size={14} /> Print / PDF
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-ursa-cream/90 hover:text-ursa-gold-soft transition block">
      {children}
    </a>
  );
}
