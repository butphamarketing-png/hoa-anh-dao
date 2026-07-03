"use client";

import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-white p-1 font-button text-xs font-semibold",
        className
      )}
      role="group"
      aria-label={t.common.selectLanguage}
    >
      <button
        type="button"
        onClick={() => setLang("vi")}
        className={cn(
          "rounded-full px-3 py-1.5 transition-all duration-200",
          lang === "vi"
            ? "bg-primary-green text-white shadow-sm"
            : "text-foreground/50 hover:text-foreground"
        )}
        aria-pressed={lang === "vi"}
      >
        VN
      </button>
      <span className="text-foreground/20" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "rounded-full px-3 py-1.5 transition-all duration-200",
          lang === "en"
            ? "bg-primary-green text-white shadow-sm"
            : "text-foreground/50 hover:text-foreground"
        )}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
