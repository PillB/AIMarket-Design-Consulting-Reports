"use client";

import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "ursa-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === "dark" || saved === "light") return saved;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemDark ? "dark" : "light";
  } catch {
    return "light";
  }
}

/**
 * Theme hook with localStorage persistence and system-preference fallback.
 * Applies/removes the `.dark` class on <html> and respects the user's
 * saved choice across sessions. The inline script in layout.tsx applies
 * the class before hydration to prevent a flash.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle, mounted: true };
}
