"use client";

import { Languages } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";

/**
 * Language toggle button for the header. Cycles between English (en)
 * and Spanish (es). Persists the choice in localStorage and updates
 * the <html lang="…"> attribute via the hook.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, toggle, t } = useI18n();

  const next = lang === "es" ? "EN" : "ES";
  const ariaLabel = lang === "es" ? t("actions.switch-en") : t("actions.switch-es");

  return (
    <button
      onClick={toggle}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={cn(
        "relative w-9 h-9 rounded-full flex items-center justify-center transition-colors border font-label text-[0.66rem] tracking-[0.08em] font-semibold",
        "border-ursa-gold-soft/40 text-ursa-gold-soft hover:bg-ursa-gold hover:text-ursa-dark-roast",
        className
      )}
    >
      <span className="flex items-center gap-1">
        <Languages size={14} className="hidden sm:block" />
        {next}
      </span>
    </button>
  );
}
