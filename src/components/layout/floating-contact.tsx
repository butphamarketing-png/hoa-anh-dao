"use client";

import { usePathname } from "next/navigation";
import { CalendarDays, MapPin } from "lucide-react";
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

interface FloatingButtonProps {
  href?: string;
  onClick?: () => void;
  label: string;
  className: string;
  children: React.ReactNode;
}

function FloatingButton({ href, onClick, label, className, children }: FloatingButtonProps) {
  const baseClass =
    "flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={cn(baseClass, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cn(baseClass, className)}
    >
      {children}
    </button>
  );
}

export function FloatingContact() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const bookVisitHref = pathname === "/" ? "#dang-ky" : "/#dang-ky";

  if (pathname?.startsWith("/admin")) return null;

  return (
    <div className="fixed bottom-6 right-4 z-40 hidden flex-col gap-3 lg:flex lg:right-6">
      <FloatingButton
        href={SITE_CONFIG.social.zalo}
        label="Zalo"
        className="bg-[#0068FF]"
      >
        <ZaloIcon className="h-6 w-6" />
      </FloatingButton>

      <FloatingButton
        href={SITE_CONFIG.social.messenger}
        label="Messenger"
        className="bg-[#0084FF]"
      >
        <MessengerIcon className="h-6 w-6" />
      </FloatingButton>

      <FloatingButton
        href={SITE_CONFIG.mapsUrl}
        label={t.common.maps}
        className="bg-primary-green"
      >
        <MapPin className="h-5 w-5" />
      </FloatingButton>

      <FloatingButton
        href={bookVisitHref}
        label={t.common.bookVisit}
        className="bg-primary-pink"
      >
        <CalendarDays className="h-5 w-5" />
      </FloatingButton>
    </div>
  );
}
