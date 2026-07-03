"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import {
  translations,
  LANG_COOKIE,
  type Lang,
  type Translations,
} from "@/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    document.cookie = `${LANG_COOKIE}=${next};path=/;max-age=31536000;SameSite=Lax`;
    document.documentElement.lang = next === "en" ? "en" : "vi";
    setLangState(next);
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

export function getLangFromCookie(cookieValue?: string): Lang {
  return cookieValue === "en" ? "en" : "vi";
}
