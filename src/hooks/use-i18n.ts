"use client";

import { useState, useEffect, useCallback } from "react";
import {
  DEFAULT_LANGUAGE,
  I18N_STORAGE_KEY,
  translate,
  type Language,
} from "@/lib/i18n";

/**
 * Read the saved language from localStorage. Defaults to English when no
 * preference is stored — the strategic dossier ships in English first;
 * Spanish (Peru) is opt-in for the customer-facing copy.
 */
function readClientLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  try {
    const saved = localStorage.getItem(I18N_STORAGE_KEY) as Language | null;
    if (saved === "en" || saved === "es") return saved;
    return DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

/**
 * Language hook with localStorage persistence. Returns:
 *  - `lang`      : the active language ("en" | "es")
 *  - `setLang`   : setter that also persists
 *  - `toggle`    : flips between en and es
 *  - `t(key)`    : resolves a dotted key (e.g. "nav.dashboard" or
 *                  "content.view.brand.title") for the active language,
 *                    with English as fallback.
 *
 * Also broadcasts the change via a custom event so other mounted
 * instances of the hook stay in sync (e.g. header + dashboard).
 */
export function useI18n() {
  const [lang, setLangState] = useState<Language>(readClientLanguage);

  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key === I18N_STORAGE_KEY && (e.newValue === "en" || e.newValue === "es")) {
        setLangState(e.newValue);
      }
    }
    function onCustom() {
      setLangState(readClientLanguage());
    }
    window.addEventListener("storage", onStorage);
    window.addEventListener("ursa-i18n-change", onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("ursa-i18n-change", onCustom);
    };
  }, []);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem(I18N_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("ursa-i18n-change"));
    }
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "es" ? "en" : "es");
  }, [lang, setLang]);

  const t = useCallback(
    (key: string) => translate(lang, key),
    [lang],
  );

  return { lang, setLang, toggle, t };
}
