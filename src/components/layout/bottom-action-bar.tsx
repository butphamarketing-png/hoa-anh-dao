"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 5.82 2 10.5c0 2.74 1.47 5.18 3.78 6.72L5 22l4.36-2.4c.84.12 1.7.18 2.64.18 5.52 0 10-3.82 10-8.5S17.52 2 12 2zm0 14.5c-.76 0-1.5-.08-2.2-.23l-.47-.1-2.18 1.2.58-2.12-.3-.47A4.48 4.48 0 0 1 7.5 10.5C7.5 8.01 9.46 6 12 6s4.5 2.01 4.5 4.5-1.96 4.5-4.5 4.5z"
      />
    </svg>
  );
}

function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.02 2 10.75c0 2.66 1.32 5.03 3.38 6.58L4.5 21.5l4.62-2.4c1.2.33 2.47.52 3.88.52 5.52 0 10-4.02 10-8.75S17.52 2 12 2zm1.03 11.03-2.55-2.72-4.98 2.72 5.48-5.82 2.62 2.72 4.9-2.72-5.47 5.82z"
      />
    </svg>
  );
}

interface BarItemProps {
  href?: string;
  onClick?: () => void;
  label: string;
  icon: React.ReactNode;
  className?: string;
}

function BarItem({ href, onClick, label, icon, className }: BarItemProps) {
  const base =
    "flex min-w-0 flex-1 flex-col items-center justify-end gap-0.5 px-0.5 pb-1.5 pt-2 text-[10px] font-medium leading-tight text-foreground/70";

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(base, "transition-colors active:text-primary-green", className)}
        aria-label={label}
      >
        {icon}
        <span className="truncate">{label}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(base, "transition-colors active:text-primary-green", className)}
      aria-label={label}
    >
      {icon}
      <span className="truncate">{label}</span>
    </button>
  );
}

export function BottomActionBar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const bookVisitHref = pathname === "/" ? "#dang-ky" : "/#dang-ky";

  if (pathname?.startsWith("/admin")) return null;

  const phoneHref = `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/80 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md lg:hidden"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg items-end justify-between px-1 pb-[max(0.375rem,env(safe-area-inset-bottom))] pt-1">
        <BarItem
          href={SITE_CONFIG.mapsUrl}
          label={t.common.findDirections}
          icon={<MapPin className="h-5 w-5 text-primary-green" strokeWidth={2.2} />}
        />

        <BarItem
          href={SITE_CONFIG.social.zalo}
          label={t.common.chatZalo}
          icon={<ZaloIcon className="h-5 w-5 text-[#0068FF]" />}
        />

        <Link
          href={bookVisitHref}
          className="-mt-5 flex min-w-[4.5rem] flex-col items-center gap-0.5"
          aria-label={t.common.bookVisit}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-green text-white shadow-lg ring-4 ring-white">
            <CalendarDays className="h-6 w-6" />
          </span>
          <span className="text-[10px] font-semibold leading-tight text-primary-green">
            {t.common.bookVisit}
          </span>
        </Link>

        <BarItem
          href={SITE_CONFIG.social.messenger}
          label={t.common.messenger}
          icon={<MessengerIcon className="h-5 w-5 text-[#0084FF]" />}
        />

        <BarItem
          href={phoneHref}
          label={t.common.callNow}
          icon={<Phone className="h-5 w-5 text-primary-green" strokeWidth={2.2} />}
        />
      </div>
    </nav>
  );
}
