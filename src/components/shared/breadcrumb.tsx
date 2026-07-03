"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
  light?: boolean;
}

export function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const { t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-1 font-body text-sm",
          light ? "text-white/70" : "text-foreground/60"
        )}
      >
        <li>
          <Link
            href="/"
            className={cn(
              "transition-colors",
              light ? "hover:text-white" : "hover:text-primary-green"
            )}
          >
            {t.nav.home}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4 opacity-60" />
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors",
                  light ? "hover:text-white" : "hover:text-primary-green"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span className={light ? "text-white" : "text-foreground"}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
