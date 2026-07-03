"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  light?: boolean;
  className?: string;
}

const sizeMap = {
  sm: 44,
  md: 52,
  lg: 60,
};

export function Logo({ size = "md", showText = true, light = false, className }: LogoProps) {
  const px = sizeMap[size];
  const { t } = useLanguage();

  return (
    <Link href="/" className={cn("flex shrink-0 items-center gap-3", className)}>
      <Image
        src="/logo.png"
        alt="Trường Mầm Non Hoa Anh Đào"
        width={px}
        height={px}
        className="h-auto w-auto object-contain"
        style={{ width: px, height: px }}
        priority
      />
      {showText && (
        <div className="hidden sm:block">
          <p
            className={cn(
              "font-display text-[0.9375rem] font-semibold uppercase leading-tight tracking-wide lg:text-base",
              light ? "text-white" : "text-primary-green"
            )}
          >
            {t.site.tagline}
          </p>
          <p
            className={cn(
              "font-body text-xs tracking-wide",
              light ? "text-white/70" : "text-foreground/55"
            )}
          >
            {t.site.preschool}
          </p>
        </div>
      )}
    </Link>
  );
}
