"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle({ inverted = false }: { inverted?: boolean }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
        inverted
          ? "border-white/25 text-ink-200 hover:border-white/60 hover:text-white"
          : "border-ink-200 text-ink-600 hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300 dark:hover:border-accent-soft dark:hover:text-accent-soft"
      }`}
    >
      {theme === "dark" ? <Sun size={15} strokeWidth={1.75} /> : <Moon size={15} strokeWidth={1.75} />}
    </button>
  );
}
