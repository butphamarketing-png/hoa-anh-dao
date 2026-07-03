"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { SITE_CONFIG } from "@/lib/constants";
import { MAIN_NAV, EXPLORE_NAV } from "@/lib/navigation";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { TopBar } from "./top-bar";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isExploreActive(pathname: string) {
  return EXPLORE_NAV.some((item) => isActive(pathname, item.href));
}

export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setExploreOpen(false);
  }, [pathname]);

  if (pathname?.startsWith("/admin")) return null;

  const navLinkClass = (href: string) => {
    const active = isActive(pathname, href);
    return cn(
      "nav-link px-3 py-4 outline-none focus-visible:ring-0",
      active
        ? isTransparent
          ? "text-white [box-shadow:inset_0_-2px_0_0_white]"
          : "nav-link-active"
        : isTransparent
          ? "text-white/85 hover:text-white"
          : "text-foreground/75 hover:text-primary-green"
    );
  };

  const exploreTriggerClass = cn(
    "nav-link flex items-center gap-1 px-3 py-4 outline-none focus-visible:ring-0",
    isExploreActive(pathname)
      ? isTransparent
        ? "text-white [box-shadow:inset_0_-2px_0_0_white]"
        : "nav-link-active"
      : isTransparent
        ? "text-white/85 hover:text-white"
        : "text-foreground/75 hover:text-primary-green"
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 transition-all duration-300">
      <div
        className={cn(
          "transition-colors duration-300",
          isTransparent ? "bg-transparent" : "bg-white shadow-soft"
        )}
      >
        <TopBar />

        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 lg:px-8",
            isScrolled ? "py-1.5" : "py-2",
            isTransparent && "border-b border-white/10 lg:border-none"
          )}
        >
          <Logo size={isScrolled ? "sm" : "md"} light={isTransparent} />

          <nav className="hidden items-center lg:flex">
            {MAIN_NAV.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
                {t.nav[item.labelKey]}
              </Link>
            ))}

            <DropdownMenu.Root>
              <DropdownMenu.Trigger className={exploreTriggerClass}>
                {t.nav.explore}
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="z-50 min-w-[220px] rounded-[24px] border border-border bg-white p-2 shadow-card"
                  sideOffset={8}
                >
                  {EXPLORE_NAV.map((item) => (
                    <DropdownMenu.Item key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "block cursor-pointer rounded-2xl px-4 py-2.5 font-body text-body-sm outline-none transition-colors",
                          isActive(pathname, item.href)
                            ? "bg-warm font-medium text-primary-green"
                            : "text-foreground/80 hover:bg-warm hover:text-primary-green"
                        )}
                      >
                        {t.nav[item.labelKey]}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className={cn(
                "flex items-center gap-2 font-heading text-body-sm font-semibold transition-colors",
                isTransparent ? "text-white hover:text-white/80" : "text-primary-green"
              )}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{SITE_CONFIG.phone}</span>
            </a>
            <Button
              asChild
              size="sm"
              variant={isTransparent ? "secondary" : "default"}
              className="rounded-full px-6"
            >
              <Link href="/tuyen-sinh">{t.common.registerNow}</Link>
            </Button>
          </div>

          <button
            className={cn(
              "rounded-2xl p-2 lg:hidden",
              isTransparent ? "text-white" : "text-foreground"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-white px-4 py-4 shadow-card lg:hidden">
          <nav className="flex flex-col gap-0.5">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 font-heading text-body-sm font-semibold transition-colors",
                  isActive(pathname, item.href)
                    ? "bg-warm text-primary-green"
                    : "text-foreground/80 hover:bg-warm"
                )}
                onClick={() => setIsOpen(false)}
              >
                {t.nav[item.labelKey]}
              </Link>
            ))}

            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 font-heading text-body-sm font-semibold text-foreground/80 hover:bg-warm"
            >
              {t.nav.explore}
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", exploreOpen && "rotate-180")}
              />
            </button>
            {exploreOpen && (
              <div className="ml-4 flex flex-col gap-1 border-l-2 border-warm pl-4">
                {EXPLORE_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-2xl px-4 py-2.5 font-body text-body-sm",
                      isActive(pathname, item.href)
                        ? "font-medium text-primary-green"
                        : "text-foreground/70"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav[item.labelKey]}
                  </Link>
                ))}
              </div>
            )}
          </nav>

          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 px-4 font-heading text-body-sm font-semibold text-primary-green"
            >
              <Phone className="h-4 w-4" />
              {t.common.hotline}: {SITE_CONFIG.phone}
            </a>
            <Button asChild className="w-full rounded-full">
              <Link href="/tuyen-sinh">{t.common.registerNow}</Link>
            </Button>
            <div className="px-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
