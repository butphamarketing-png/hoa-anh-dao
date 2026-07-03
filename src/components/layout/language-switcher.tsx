"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (config: Record<string, unknown>, id: string): void;
        };
      };
    };
  }
}

type Lang = "vi" | "en";

function getCurrentLang(): Lang {
  if (typeof document === "undefined") return "vi";
  return document.cookie.includes("googtrans=/vi/en") ? "en" : "vi";
}

function switchLanguage(lang: Lang) {
  const hostname = window.location.hostname;

  if (lang === "en") {
    document.cookie = "googtrans=/vi/en;path=/;";
    if (hostname !== "localhost") {
      document.cookie = `googtrans=/vi/en;path=/;domain=.${hostname}`;
    }
  } else {
    document.cookie = "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = `googtrans=;path=/;domain=${hostname};expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    document.cookie = `googtrans=;path=/;domain=.${hostname};expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  }

  const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (select) {
    select.value = lang === "en" ? "en" : "";
    select.dispatchEvent(new Event("change"));
    return;
  }

  window.location.reload();
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const [lang, setLang] = useState<Lang>("vi");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLang(getCurrentLang());

    if (document.getElementById("google-translate-script")) {
      setReady(true);
      return;
    }

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "vi",
          includedLanguages: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      setReady(true);
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }, []);

  const handleSwitch = (target: Lang) => {
    if (target === lang) return;
    setLang(target);
    switchLanguage(target);
  };

  return (
    <>
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      <div
        className={cn(
          "inline-flex items-center gap-1 rounded-full border border-border bg-white p-1 font-button text-xs font-semibold",
          className
        )}
        role="group"
        aria-label="Chọn ngôn ngữ"
      >
        <button
          type="button"
          onClick={() => handleSwitch("vi")}
          disabled={!ready}
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
          onClick={() => handleSwitch("en")}
          disabled={!ready}
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
    </>
  );
}
