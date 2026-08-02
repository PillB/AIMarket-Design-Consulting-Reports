import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Safe number formatting utilities.
 *
 * These prevent the production crash where `undefined.toFixed()` throws
 * "Cannot read properties of undefined (reading 'toFixed')". All numeric
 * display in the app should use these instead of calling `.toFixed()` directly.
 */

/** Format a number with fixed decimals. Returns fallback for null/undefined/NaN. */
export function fmtNum(n: number | null | undefined, decimals = 0, fallback = "—"): string {
  if (n == null || typeof n !== "number" || !isFinite(n) || isNaN(n)) return fallback;
  return n.toFixed(decimals);
}

/** Format as Peruvian Soles currency: S/. 12.50 */
export function fmtPEN(n: number | null | undefined, fallback = "S/. —"): string {
  if (n == null || typeof n !== "number" || !isFinite(n) || isNaN(n)) return fallback;
  const sign = n < 0 ? "-" : "";
  return `${sign}S/. ${Math.abs(n).toFixed(2)}`;
}

/** Format as percentage: 42.5% */
export function fmtPct(n: number | null | undefined, decimals = 1, fallback = "—"): string {
  if (n == null || typeof n !== "number" || !isFinite(n) || isNaN(n)) return fallback;
  return `${n.toFixed(decimals)}%`;
}
