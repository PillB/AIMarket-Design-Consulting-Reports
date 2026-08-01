"use client";

import { useTranslation, type Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Compact EN | ES segmented toggle for the header.
 *
 * Two pills inside a single rounded container; the active language fills with
 * gold (ursa-gold) so the choice is obvious at a glance. Mirrors the dark,
 * gold-edged styling of the ThemeToggle so the two read as a pair.
 *
 * Keyboard accessible (each pill is a real <button> with aria-pressed), and
 * announced as a group via role="group" + aria-label.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useTranslation();
  const langs: Language[] = ["en", "es"];

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className={cn(
        "inline-flex items-center rounded-full border border-ursa-gold-soft/40",
        "h-9 p-0.5 bg-ursa-espresso/40 shrink-0",
        className
      )}
    >
      {langs.map((l) => {
        const active = lang === l;
        const ariaLabel = l === "en" ? "Switch to English" : "Cambiar a espa\u00f1ol";
        const title = l === "en" ? "English" : "Espa\u00f1ol";
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            aria-label={ariaLabel}
            title={title}
            className={cn(
              "h-8 px-2.5 rounded-full font-label text-[0.66rem] tracking-[0.16em] uppercase",
              "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ursa-gold/60",
              active
                ? "bg-ursa-gold text-ursa-dark-roast shadow-sm"
                : "text-ursa-gold-text-soft hover:bg-white/5 hover:text-ursa-cream"
            )}
          >
            {l === "en" ? "EN" : "ES"}
          </button>
        );
      })}
    </div>
  );
}
