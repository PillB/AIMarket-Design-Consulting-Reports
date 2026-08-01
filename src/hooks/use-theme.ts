"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "ursa-theme";

/**
 * Theme hook with localStorage persistence and system-preference fallback.
 *
 * Hydration safety: uses useSyncExternalStore to read the client-only
 * theme value. The server snapshot is always "light"; the client
 * snapshot reads from localStorage / system preference. This prevents
 * SSR/CSR mismatch without calling setState in an effect.
 *
 * The inline anti-FOUC script in layout.tsx applies the `.dark` class
 * to <html> before hydration, so there is no visual flash even though
 * the React state starts as "light".
 */

// --- External store for client-only theme reading ---
let currentTheme: Theme = "light";
const subscribers = new Set<() => void>();

function subscribe(callback: () => void): () => void {
  subscribers.add(callback);
  // Also listen for cross-tab storage changes
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      currentTheme = readClientTheme();
      subscribers.forEach((cb) => cb());
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    subscribers.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): Theme {
  return currentTheme;
}

function getServerSnapshot(): Theme {
  return "light";
}

function readClientTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === "dark" || saved === "light") return saved;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemDark ? "dark" : "light";
  } catch {
    return "light";
  }
}

// Initialize on first client access
if (typeof window !== "undefined") {
  currentTheme = readClientTheme();
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Apply theme to <html> and persist when it changes
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
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    subscribers.forEach((cb) => cb());
  }, []);

  // mounted: true on client (useSyncExternalStore already handles the
  // server/client difference; ThemeToggle uses a stable placeholder
  // when the snapshot is the server default "light")
  return { theme, toggle, mounted: true };
}
