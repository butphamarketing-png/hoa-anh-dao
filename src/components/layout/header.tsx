"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { SITE_CONFIG } from "@/lib/constants";
import { MAIN_NAV, EXPLORE_NAV } from "@/lib/navigation";
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

  const linkClass = (href: string) =>
    cn(
      "rounded-xl px-3 py-2 font-body text-sm transition-colors",
      isTransparent
        ? isActive(pathname, href)
          ? "text-white"
          : "text-white/80 hover:text-white"
        : isActive(pathname, href)
          ? "font-medium text-primary-green"
          : "text-foreground/80 hover:bg-section hover:text-primary-green"
    );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={cn(
          "transition-colors duration-300",
          isTransparent ? "bg-transparent" : "bg-white shadow-soft"
        )}
      >
        <div className={cn(isTransparent && "hidden lg:block")}>
          <TopBar />
        </div>

        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 lg:px-8",
            isScrolled ? "py-2" : "py-3",
            isTransparent && "border-b border-white/10"
          )}
        >
          <Logo size={isScrolled ? "sm" : "md"} light={isTransparent} />

          <nav className="hidden items-center gap-0.5 lg:flex">
            {MAIN_NAV.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}

            <DropdownMenu.Root>
              <DropdownMenu.Trigger
                className={cn(
                  "flex items-center gap-1 rounded-xl px-3 py-2 font-body text-sm outline-none transition-colors",
                  isTransparent
                    ? isExploreActive(pathname)
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                    : isExploreActive(pathname)
                      ? "font-medium text-primary-green"
                      : "text-foreground/80 hover:bg-section hover:text-primary-green"
                )}
              >
                Khám phá
                <ChevronDown className="h-4 w-4" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="z-50 min-w-[200px] rounded-[20px] border border-border bg-white p-2 shadow-card"
                  sideOffset={8}
                >
                  {EXPLORE_NAV.map((item) => (
                    <DropdownMenu.Item key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "block cursor-pointer rounded-xl px-4 py-2.5 font-body text-sm outline-none transition-colors",
                          isActive(pathname, item.href)
                            ? "bg-section font-medium text-primary-green"
                            : "text-foreground/80 hover:bg-section hover:text-primary-green"
                        )}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className={cn(
                "flex items-center gap-2 font-body text-sm font-medium transition-colors",
                isTransparent ? "text-white hover:text-white/80" : "text-primary-green"
              )}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{SITE_CONFIG.phone}</span>
            </a>
            <Button asChild size="sm" variant={isTransparent ? "secondary" : "default"}>
              <Link href="/tuyen-sinh">Đăng ký tư vấn</Link>
            </Button>
          </div>

          <button
            className={cn(
              "rounded-xl p-2 lg:hidden",
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
          <nav className="flex flex-col gap-1">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 font-body transition-colors",
                  isActive(pathname, item.href)
                    ? "bg-section font-medium text-primary-green"
                    : "text-foreground/80 hover:bg-section"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className="flex items-center justify-between rounded-xl px-4 py-3 font-body text-foreground/80 hover:bg-section"
            >
              Khám phá
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", exploreOpen && "rotate-180")}
              />
            </button>
            {exploreOpen && (
              <div className="ml-4 flex flex-col gap-1 border-l-2 border-section pl-4">
                {EXPLORE_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-2.5 font-body text-sm",
                      isActive(pathname, item.href)
                        ? "font-medium text-primary-green"
                        : "text-foreground/70"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </nav>

          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 px-4 font-body text-primary-green"
            >
              <Phone className="h-4 w-4" />
              {SITE_CONFIG.phone}
            </a>
            <Button asChild className="w-full">
              <Link href="/tuyen-sinh">Đăng ký tư vấn</Link>
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
