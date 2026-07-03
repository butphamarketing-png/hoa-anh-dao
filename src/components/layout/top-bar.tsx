"use client";

import Link from "next/link";
import { Phone, Mail, Facebook } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { LanguageSwitcher } from "./language-switcher";

export function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="hidden bg-primary-green lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 lg:px-8">
        <div className="flex items-center gap-5 font-body text-body-sm text-white/90">
          <a
            href={SITE_CONFIG.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            aria-label="Facebook"
          >
            <Facebook className="h-3.5 w-3.5" />
            Facebook
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="hidden items-center gap-1.5 transition-opacity hover:opacity-80 xl:flex"
          >
            <Mail className="h-3.5 w-3.5" />
            {SITE_CONFIG.email}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 font-heading text-body-sm font-semibold tracking-wide text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            {t.common.hotline}: {SITE_CONFIG.phone}
          </a>
          <LanguageSwitcher className="border-white/20 bg-white/10 [&_button:not([aria-pressed=true])]:text-white/90 [&_button:not([aria-pressed=true])]:hover:bg-white/20 [&_button[aria-pressed=true]]:bg-white [&_button[aria-pressed=true]]:text-primary-green [&_button[aria-pressed=true]]:shadow-sm" />
        </div>
      </div>
    </div>
  );
}
