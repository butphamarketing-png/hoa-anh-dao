"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { translations, type Lang, type Translations } from "@/i18n";
import {
  clearLegacyTranslateCookies,
  readLangCookieClient,
  writeLangCookie,
} from "@/lib/lang-cookie";

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
  const router = useRouter();
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    clearLegacyTranslateCookies();

    const resolved = readLangCookieClient();
    if (resolved !== lang) {
      setLangState(resolved);
      document.documentElement.lang = resolved === "en" ? "en" : "vi";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = useCallback(
    (next: Lang) => {
      clearLegacyTranslateCookies();
      writeLangCookie(next);
      document.documentElement.lang = next === "en" ? "en" : "vi";
      setLangState(next);
      router.refresh();
    },
    [router]
  );

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
