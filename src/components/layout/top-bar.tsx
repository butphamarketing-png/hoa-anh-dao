"use client";

import Link from "next/link";
import { Phone, Mail, Facebook } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { LanguageSwitcher } from "./language-switcher";

export function TopBar() {
  return (
    <div className="hidden border-b border-border/60 bg-section lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        <div className="flex items-center gap-5 font-body text-xs text-foreground/70">
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 transition-colors hover:text-primary-green"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE_CONFIG.phone}
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-primary-green xl:flex"
          >
            <Mail className="h-3.5 w-3.5" />
            {SITE_CONFIG.email}
          </a>
          <a
            href={SITE_CONFIG.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-primary-green"
            aria-label="Facebook"
          >
            <Facebook className="h-3.5 w-3.5" />
            Facebook
          </a>
        </div>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
