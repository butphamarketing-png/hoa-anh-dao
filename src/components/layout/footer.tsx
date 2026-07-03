"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { NAV_ITEMS } from "@/lib/navigation";
import { useLanguage } from "@/contexts/language-context";
import { Logo } from "@/components/shared/logo";
import { WavyDivider } from "@/components/shared/wavy-divider";

export function Footer() {
  const pathname = usePathname();
  const { t } = useLanguage();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="relative bg-foreground text-white">
      <WavyDivider fill="#2D2D2D" flip className="-mt-px" />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              <Logo size="lg" showText={false} />
            </div>
            <p className="font-body text-body-sm leading-relaxed text-white/70">
              {t.site.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-bold">{t.footer.contact}</h3>
            <ul className="space-y-3 font-body text-body-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-green" />
                {SITE_CONFIG.address.full}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-green" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-green" />
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
                    className="font-body text-body-sm text-white/70 transition-colors hover:text-primary-green"
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary-green"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="font-body text-body-sm text-white/50">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. {t.common.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
