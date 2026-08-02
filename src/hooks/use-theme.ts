"use client";

import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "ursa-theme";

/**
 * Read the saved theme from localStorage only. The user explicitly chose
 * light mode as the project default, so we never fall back to the OS
 * prefers-color-scheme media query — if no preference is stored, we ship
 * light. A returning user who flipped to dark keeps their choice.
 */
function readClientTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === "dark" || saved === "light") return saved;
    return "light";
  } catch {
    return "light";
  }
}

/**
 * Theme hook with localStorage persistence. Light is the project default;
 * dark is opt-in only. Applies/removes the `.dark` class on <html> and
 * respects the user's saved choice across sessions. The inline script in
 * layout.tsx applies the class before hydration to prevent a flash.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readClientTheme);

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
