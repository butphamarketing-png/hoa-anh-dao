"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { NAV_ITEMS } from "@/lib/navigation";
import { useLanguage } from "@/contexts/language-context";
import {
  CherryBlossomArt,
  DotPattern,
  LeafArt,
} from "@/components/shared/decorations";

export function Footer() {
  const pathname = usePathname();
  const { t } = useLanguage();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="relative overflow-hidden bg-primary-green pb-[4.75rem] text-white lg:pb-0">
      <DotPattern color="#FFFFFF" opacity={0.04} />
      <CherryBlossomArt
        className="absolute left-4 top-12 hidden opacity-[0.12] md:block"
        size={110}
      />
      <CherryBlossomArt
        className="absolute bottom-20 right-6 hidden rotate-12 opacity-10 md:block"
        size={90}
      />
      <LeafArt className="absolute bottom-32 left-8 hidden opacity-10 lg:block" size={75} />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <h3 className="font-display text-2xl font-semibold leading-tight tracking-wide">
              {t.site.tagline}
            </h3>
            <p className="mt-1 font-display text-lg font-medium text-white/90">
              {t.site.preschool}
            </p>
            <p className="mt-4 font-body text-body-sm leading-relaxed text-white/70">
              {t.site.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">{t.footer.contact}</h3>
            <ul className="space-y-3 font-body text-body-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/90" />
                {SITE_CONFIG.address.full}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-white/90" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-white/90" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">{t.footer.menu}</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-body-sm text-white/80 transition-colors hover:text-white"
                  >
                    {t.nav[item.labelKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">{t.footer.map}</h3>
            <div className="overflow-hidden rounded-[24px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d106.6658!3d10.7402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ0JzI0LjciTiAxMDbCsDM5JzU2LjkiRQ!5e0!3m2!1svi!2s!4v1"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.footer.mapTitle}
              />
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="font-body text-body-sm text-white/50">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. {t.common.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
