"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

/** Dark / light theme toggle button for the header. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle, mounted } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
      className={cn(
        "relative w-9 h-9 rounded-full flex items-center justify-center transition-colors border",
        "border-ursa-gold-soft/40 text-ursa-gold-soft hover:bg-ursa-gold hover:text-ursa-dark-roast",
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
