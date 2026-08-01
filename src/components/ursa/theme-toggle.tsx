"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Dark / light theme toggle button for the header. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle, mounted } = useTheme();
  const { t } = useTranslation();
  const label = theme === "dark" ? t("common.switchToLight") : t("common.switchToDark");

  return (
    <button
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        "relative w-9 h-9 rounded-full flex items-center justify-center transition-colors border",
        "border-ursa-gold-soft/40 text-ursa-gold-text-soft hover:bg-ursa-gold hover:text-ursa-dark-roast",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ursa-gold/60",
        className
      )}
    >
      {/* Avoid hydration mismatch: render a placeholder until mounted */}
      {mounted ? (
        theme === "dark" ? (
          <Sun size={16} className="transition-transform hover:rotate-45 duration-300" />
        ) : (
          <Moon size={16} className="transition-transform hover:-rotate-12 duration-300" />
        )
      ) : (
        <Moon size={16} />
      )}
    </button>
  );
}
