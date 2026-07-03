"use client";

import Image from "next/image";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Container } from "@/components/shared/container";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import type { Translations } from "@/i18n";

type PageKey = keyof Translations["pages"];

interface LocalizedPageHeroProps {
  page: PageKey;
  breadcrumb: { label: string; href?: string }[];
  image?: string;
}

export function LocalizedPageHero({ page, breadcrumb, image }: LocalizedPageHeroProps) {
  const { t } = useLanguage();
  const content = t.pages[page];

  const localizedBreadcrumb = breadcrumb.map((item, index) =>
    index === breadcrumb.length - 1 ? { ...item, label: content.title } : item
  );

  return (
    <section className={cn("relative overflow-hidden bg-section", image && "min-h-[300px]")}>
      {image && (
        <>
          <Image src={image} alt="" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </>
      )}

      <Container className={cn("relative py-14 lg:py-20", image && "text-white")}>
        <Breadcrumb items={localizedBreadcrumb} light={!!image} />
        <h1
          className={cn(
            "mt-5 font-heading text-display-sm font-bold tracking-tight md:text-display-md",
            image ? "text-white" : "text-foreground"
          )}
        >
          {content.title}
        </h1>
        <p
          className={cn(
            "section-subtitle mt-4 max-w-2xl",
            image ? "text-white/85" : ""
          )}
        >
          {content.description}
        </p>
        {!image && <div className="mt-6 h-[3px] w-12 rounded-full bg-primary-pink" />}
      </Container>
    </section>
  );
}
