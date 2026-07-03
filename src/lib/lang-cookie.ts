import { LANG_COOKIE, type Lang } from "@/i18n";

export function getLangFromCookieValue(value?: string | null): Lang {
  const normalized = value?.trim().toLowerCase();
  return normalized === "en" ? "en" : "vi";
}

export function readLangCookieClient(): Lang {
  if (typeof document === "undefined") return "vi";

  const match = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${LANG_COOKIE}=`));

  if (!match) {
    const stored = localStorage.getItem(LANG_COOKIE);
    return getLangFromCookieValue(stored);
  }

  const value = match.split("=")[1];
  return getLangFromCookieValue(decodeURIComponent(value ?? ""));
}

export function writeLangCookie(lang: Lang) {
  if (typeof document === "undefined") return;

  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${LANG_COOKIE}=${lang};path=/;max-age=${maxAge};SameSite=Lax`;
  localStorage.setItem(LANG_COOKIE, lang);
}

export function clearLegacyTranslateCookies() {
  if (typeof document === "undefined") return;

  const hostname = window.location.hostname;
  const expires = "Thu, 01 Jan 1970 00:00:00 GMT";

  const clear = (name: string, domain?: string) => {
    document.cookie = `${name}=;path=/;expires=${expires}`;
    if (domain) {
      document.cookie = `${name}=;path=/;domain=${domain};expires=${expires}`;
    }
  };

  clear("googtrans");
  clear("googtrans", hostname);
  clear("googtrans", `.${hostname}`);

  document.querySelectorAll(".goog-te-banner-frame, .skiptranslate, #google_translate_element").forEach((el) => {
    el.remove();
  });

  document.body.style.top = "0";
  document.body.style.marginTop = "0";
  document.documentElement.style.marginTop = "0";
  document.documentElement.classList.remove("translated-ltr", "translated-rtl");
  document.body.classList.remove("translated-ltr", "translated-rtl");
}
