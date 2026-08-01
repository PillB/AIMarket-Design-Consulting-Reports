"use client";

import {
  createElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

/**
 * Lightweight i18n system for the Ursa Coffee Command Center.
 *
 * Scope: this ONLY translates the UI chrome — nav labels, header text, footer
 * copy, command palette strings, theme-toggle labels, and common action
 * buttons. The long-form strategic dossier CONTENT (the report prose inside
 * each view) stays in English. Customer-facing Spanish (landing page, script
 * captions) is untouched — it was authored correctly to begin with.
 *
 * Spanish translations are hand-crafted Peruvian Spanish (Lima register):
 * warm, natural, not machine-translated. "Dashboard" → "Panel" (not
 * "Tablero"), "SWOT" → "DAFO", "Roadmap" → "Hoja de ruta", etc.
 *
 * No external i18n library — just React Context + a translations object.
 * Language choice persists to localStorage under `ursa-lang` and is mirrored
 * to <html lang> so screen readers and search engines see the right locale.
 */

export type Language = "en" | "es";

const STORAGE_KEY = "ursa-lang";

/** Shape of the translation dictionary. Both `en` and `es` must match this. */
type TranslationShape = {
  /** Navigation chrome: route labels (keyed by ROUTES key), dropdown + section titles. */
  nav: {
    routes: Record<string, string>;
    dossier: string;
    tools: string;
    sources: string;
    ursaManana: string;
    staticDossier: string;
    top: string;
    dossierModules: string;
    interactiveTools: string;
  };
  /** Buttons and quick-action labels. */
  actions: {
    print: string;
    printPdf: string;
    printSavePdf: string;
    openDossier: string;
    openStaticDossier: string;
    quickJump: string;
    backToTop: string;
    close: string;
    openCommandPalette: string;
    search: string;
  };
  /** Status pills / evidence tags. */
  badges: {
    verified: string;
    partial: string;
    unverified: string;
    gap: string;
  };
  /** Misc shared UI strings: search placeholders, group labels, theme toggles, hints. */
  common: {
    dossierSubtitle: string;
    strategicDossier: string;
    navigate: string;
    select: string;
    noMatches: string;
    noMatchesHint: string;
    searchPlaceholder: string;
    searchCommands: string;
    ursaCommand: string;
    switchToLight: string;
    switchToDark: string;
    newTab: string;
    currentPage: string;
    themeLabel: string;
    goToDashboard: string;
    toggleMenu: string;
    groupNavigate: string;
    groupDossier: string;
    groupTools: string;
    groupAction: string;
  };
  /** Footer-specific copy (footer link labels differ slightly from route labels). */
  footer: {
    modulesTitle: string;
    moreTitle: string;
    blurb: string;
    compiled: string;
    link01: string;
    link02: string;
    link03: string;
    link04: string;
    link05: string;
    link06: string;
    link07: string;
    link08: string;
    sources: string;
    printPdf: string;
  };
};

const translations: Record<Language, TranslationShape> = {
  en: {
    nav: {
      routes: {
        home: "Dashboard",
        brand: "Brand Audit",
        market: "Market & Competitors",
        menu: "Menu & Product",
        growth: "Growth & Retention",
        viral: "Viral Content Lab",
        creative: "Creative Prototypes",
        roadmap: "Roadmap & KPIs",
        calculator: "Subscription Calculator",
        "menu-studio": "Menu Engineering Studio",
        competitors: "Competitor Intelligence",
        "content-calendar": "Content Calendar",
        experiments: "Experiment Tracker",
        "style-guide": "Brand Style Guide",
        budget: "Budget Allocator",
        "origin-atlas": "Coffee Origin Atlas",
        roi: "ROI Dashboard",
        "campaign-builder": "Campaign Builder",
        "spirit-checker": "Spirit Checker",
        swot: "SWOT Matrix",
        pilot: "Pilot Dashboard",
        scorecard: "Brand Scorecard",
        loyalty: "Loyalty Card",
        sources: "Sources & Evidence",
        landing: "Ursa Mañana Landing",
      },
      dossier: "Dossier",
      tools: "Tools",
      sources: "Sources",
      ursaManana: "Ursa Mañana",
      staticDossier: "Static Dossier",
      top: "Top",
      dossierModules: "Dossier Modules",
      interactiveTools: "Interactive Tools",
    },
    actions: {
      print: "Print",
      printPdf: "Print / PDF",
      printSavePdf: "Print / Save as PDF",
      openDossier: "Open static dossier",
      openStaticDossier: "Open static HTML dossiers",
      quickJump: "Quick jump",
      backToTop: "Back to top",
      close: "Close",
      openCommandPalette: "Open command palette (Cmd+K)",
      search: "Search",
    },
    badges: {
      verified: "Verified",
      partial: "Partial",
      unverified: "Unverified",
      gap: "Gap",
    },
    common: {
      dossierSubtitle: "Strategic Dossier · 2026",
      strategicDossier: "Ursa Coffee Roasters — Strategic Dossier",
      navigate: "navigate",
      select: "select",
      noMatches: "No matches",
      noMatchesHint: "Try \u201ccalculator\u201d, \u201cbrand\u201d, or \u201cprint\u201d.",
      searchPlaceholder: "Jump to a view, tool, or action\u2026",
      searchCommands: "Search commands",
      ursaCommand: "Ursa Command",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      newTab: "New tab",
      currentPage: "Current page",
      themeLabel: "Theme",
      goToDashboard: "Ursa Coffee \u2014 go to dashboard",
      toggleMenu: "Toggle menu",
      groupNavigate: "Navigate",
      groupDossier: "Dossier",
      groupTools: "Tools",
      groupAction: "Action",
    },
    footer: {
      modulesTitle: "Dossier Modules",
      moreTitle: "More",
      blurb:
        "Research-grounded brand, product, graphic, and marketing plan prepared for the owners of Ursa Coffee Roasters, Alcanfores 183, Miraflores, Lima. Preserves the existing Art Nouveau / bear / roastery identity. No rebrand. Compiled 2026-08-01.",
      compiled:
        "Compiled from public sources cited in Sources & Evidence. No proprietary material reproduced. This dossier does not represent, alter, or counterfeit the official Ursa Coffee Roasters logo or trademark; the geometric bear glyph used in the header is an original concept mark for navigation only.",
      link01: "01 \u00b7 Brand Audit",
      link02: "02 \u00b7 Market & Customer Voice",
      link03: "03 \u00b7 Menu & Product",
      link04: "04 \u00b7 Growth & Retention",
      link05: "05 \u00b7 Viral Content Lab",
      link06: "06 \u00b7 Creative Prototypes",
      link07: "07 \u00b7 Roadmap & KPIs",
      link08: "08 \u00b7 Subscription & Calculator",
      sources: "Sources & Evidence",
      printPdf: "Print / PDF",
    },
  },

  es: {
    nav: {
      routes: {
        home: "Panel",
        brand: "Auditor\u00eda de Marca",
        market: "Mercado y Competidores",
        menu: "Carta y Producto",
        growth: "Crecimiento y Retenci\u00f3n",
        viral: "Lab de Contenido Viral",
        creative: "Prototipos Creativos",
        roadmap: "Hoja de Ruta y KPIs",
        calculator: "Calculadora de Suscripci\u00f3n",
        "menu-studio": "Estudio de Ingenier\u00eda de Carta",
        competitors: "Inteligencia de Competidores",
        "content-calendar": "Calendario de Contenido",
        experiments: "Seguimiento de Experimentos",
        "style-guide": "Gu\u00eda de Estilo de Marca",
        budget: "Asignador de Presupuesto",
        "origin-atlas": "Atlas de Or\u00edgenes de Caf\u00e9",
        roi: "Panel de ROI",
        "campaign-builder": "Constructor de Campa\u00f1as",
        "spirit-checker": "Verificador de Esp\u00edritu",
        swot: "Matriz DAFO",
        pilot: "Panel del Piloto",
        scorecard: "Tarjeta de Calificaci\u00f3n de Marca",
        loyalty: "Tarjeta de Lealtad",
        sources: "Fuentes y Evidencia",
        landing: "Landing Ursa Ma\u00f1ana",
      },
      dossier: "Dossier",
      tools: "Herramientas",
      sources: "Fuentes",
      ursaManana: "Ursa Ma\u00f1ana",
      staticDossier: "Dossier est\u00e1tico",
      top: "Principal",
      dossierModules: "M\u00f3dulos del Dossier",
      interactiveTools: "Herramientas Interactivas",
    },
    actions: {
      print: "Imprimir",
      printPdf: "Imprimir / PDF",
      printSavePdf: "Imprimir / Guardar como PDF",
      openDossier: "Abrir dossier est\u00e1tico",
      openStaticDossier: "Abrir dossiers HTML est\u00e1ticos",
      quickJump: "Salto r\u00e1pido",
      backToTop: "Volver arriba",
      close: "Cerrar",
      openCommandPalette: "Abrir paleta de comandos (Cmd+K)",
      search: "Buscar",
    },
    badges: {
      verified: "Verificado",
      partial: "Parcial",
      unverified: "Sin verificar",
      gap: "Brecha",
    },
    common: {
      dossierSubtitle: "Dossier Estrat\u00e9gico \u00b7 2026",
      strategicDossier: "Ursa Coffee Roasters \u2014 Dossier Estrat\u00e9gico",
      navigate: "navegar",
      select: "seleccionar",
      noMatches: "Sin resultados",
      noMatchesHint: "Prueba con \u00abcalculadora\u00bb, \u00abmarca\u00bb o \u00abimprimir\u00bb.",
      searchPlaceholder: "Salta a una vista, herramienta o acci\u00f3n\u2026",
      searchCommands: "Buscar comandos",
      ursaCommand: "Comando Ursa",
      switchToLight: "Cambiar a modo claro",
      switchToDark: "Cambiar a modo oscuro",
      newTab: "Nueva pesta\u00f1a",
      currentPage: "P\u00e1gina actual",
      themeLabel: "Tema",
      goToDashboard: "Ursa Coffee \u2014 ir al panel",
      toggleMenu: "Abrir/cerrar men\u00fa",
      groupNavigate: "Navegaci\u00f3n",
      groupDossier: "Dossier",
      groupTools: "Herramientas",
      groupAction: "Acci\u00f3n",
    },
    footer: {
      modulesTitle: "M\u00f3dulos del Dossier",
      moreTitle: "M\u00e1s",
      blurb:
        "Plan de marca, producto, gr\u00e1fica y marketing fundamentado en investigaci\u00f3n, preparado para los due\u00f1os de Ursa Coffee Roasters, Alcanfores 183, Miraflores, Lima. Preserva la identidad Art Nouveau / oso / tostadero existente. No es un rebrand. Compilado el 2026-08-01.",
      compiled:
        "Compilado a partir de fuentes p\u00fablicas citadas en Fuentes y Evidencia. No se reproduce material propietario. Este dossier no representa, altera ni falsifica el logotipo o la marca oficial de Ursa Coffee Roasters; el glifo geom\u00e9trico de oso que aparece en el encabezado es una marca conceptual original con fines exclusivos de navegaci\u00f3n.",
      link01: "01 \u00b7 Auditor\u00eda de Marca",
      link02: "02 \u00b7 Mercado y Voz del Cliente",
      link03: "03 \u00b7 Carta y Producto",
      link04: "04 \u00b7 Crecimiento y Retenci\u00f3n",
      link05: "05 \u00b7 Lab de Contenido Viral",
      link06: "06 \u00b7 Prototipos Creativos",
      link07: "07 \u00b7 Hoja de Ruta y KPIs",
      link08: "08 \u00b7 Suscripci\u00f3n y Calculadora",
      sources: "Fuentes y Evidencia",
      printPdf: "Imprimir / PDF",
    },
  },
};

/** Walk the dictionary by dotted path; return the key itself if not found. */
function lookup(dict: TranslationShape, key: string): string {
  if (!key) return key;
  const parts = key.split(".");
  let cur: unknown = dict;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return key;
    }
  }
  return typeof cur === "string" ? cur : key;
}

type Ctx = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

/** Read the saved language on the client. Server always returns "en". */
function getInitialLang(): Language {
  if (typeof window === "undefined") return "en";
  try {
    // Prefer the value stashed by the inline anti-FOUC script in layout.tsx
    const fromGlobal = (window as unknown as { __URSA_LANG__?: unknown }).__URSA_LANG__;
    if (fromGlobal === "en" || fromGlobal === "es") return fromGlobal;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") return saved;
  } catch {
    /* ignore */
  }
  return "en";
}

// --- External store for hydration-safe client-only language state ---
let currentLang: Language = "en";
const langSubscribers = new Set<() => void>();

// Initialize on first client access
if (typeof window !== "undefined") {
  currentLang = getInitialLang();
}

function subscribeLang(callback: () => void): () => void {
  langSubscribers.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      currentLang = getInitialLang();
      langSubscribers.forEach((cb) => cb());
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    langSubscribers.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

function getLangSnapshot(): Language {
  return currentLang;
}

function getLangServerSnapshot(): Language {
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Use useSyncExternalStore for hydration-safe client-only state.
  // Server snapshot is always "en"; client snapshot reads localStorage.
  const lang = useSyncExternalStore(
    subscribeLang,
    getLangSnapshot,
    getLangServerSnapshot
  );

  // Persist + mirror to <html lang>
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Language) => {
    currentLang = l;
    langSubscribers.forEach((cb) => cb());
  }, []);

  const t = useCallback((key: string) => lookup(translations[lang], key), [lang]);

  const value = useMemo<Ctx>(() => ({ lang, setLang, t }), [lang, setLang, t]);

  // Note: uses createElement (not JSX) so this file can stay as `.ts` per spec.
  return createElement(LanguageContext.Provider, { value }, children);
}

/**
 * Returns `{ t, lang, setLang }`. Falls back to English if called outside the
 * LanguageProvider (so components don't crash during edge cases).
 */
export function useTranslation(): Ctx {
  const ctx = useContext(LanguageContext);
  const t = useCallback((key: string) => lookup(translations.en, key), []);
  return (
    ctx ?? {
      lang: "en" as Language,
      setLang: () => {},
      t,
    }
  );
}

/** Convenience helper: look up a translated route label by ROUTES key. */
export function useRouteLabel() {
  const { t } = useTranslation();
  return useCallback((routeKey: string) => t(`nav.routes.${routeKey || "home"}`), [t]);
}
