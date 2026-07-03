"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProgramFlowerCard } from "@/components/shared/program-flower-card";
import { PlayfulBlob } from "@/components/shared/wavy-divider";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import type { Program } from "@/types";

interface ProgramsShowcaseProps {
  programs: Program[];
  showHeading?: boolean;
  showViewAll?: boolean;
  carousel?: boolean;
}

function programLabel(
  program: Program,
  items: Record<string, { tagline: string }> | undefined
): string {
  const tagline = items?.[program.id]?.tagline ?? program.title;
  return `${tagline} (${program.age_group})`;
}

export function ProgramsShowcase({
  programs,
  showHeading = true,
  showViewAll = false,
  carousel = false,
}: ProgramsShowcaseProps) {
  const { t } = useLanguage();
  const slides: Program[][] = carousel
    ? [programs.slice(0, 3), programs.slice(3)]
    : [programs];

  const [activeSlide, setActiveSlide] = useState(0);
  const current = slides[activeSlide] ?? [];

  const goSlide = (dir: -1 | 1) => {
    setActiveSlide((prev) => (prev + dir + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 8c2 6 8 8 8 14s-6 8-8 14-8-8-14-8 6-8 8-14 8-8 14-8z' fill='%2300A651'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <PlayfulBlob className="left-2 top-6 h-16 w-16 opacity-15" color="#D61F8C" />
      <PlayfulBlob className="bottom-8 right-4 h-20 w-20 opacity-15" color="#00A651" />

      {showHeading && (
        <FadeUp>
          <div className="relative mx-auto max-w-3xl text-center">
            <SectionHeading title={t.home.programs.title} subtitle={t.home.programs.subtitle} />
          </div>
        </FadeUp>
      )}

      {carousel && slides.length > 1 && (
        <div className="relative mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goSlide(-1)}
            className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft transition hover:bg-primary-green hover:text-white lg:-left-4"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            className={`grid w-full max-w-4xl gap-8 px-12 ${
              current.length === 2 ? "grid-cols-2 justify-items-center" : "grid-cols-1 sm:grid-cols-3"
            }`}
          >
            {current.map((program, index) => (
              <FadeUp key={program.id} delay={index * 0.08}>
                <ProgramFlowerCard
                  href={`/chuong-trinh-hoc/${program.slug}`}
                  image={program.image}
                  label={programLabel(program, t.home.programs.items)}
                />
              </FadeUp>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goSlide(1)}
            className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft transition hover:bg-primary-green hover:text-white lg:-right-4"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {!carousel && (
        <div className="-mx-4 mt-6 flex gap-8 overflow-x-auto px-4 pb-2 scrollbar-hide snap-x snap-mandatory lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {programs.map((program, index) => (
            <FadeUp
              key={program.id}
              delay={index * 0.06}
              className="shrink-0 snap-center lg:shrink"
            >
              <ProgramFlowerCard
                href={`/chuong-trinh-hoc/${program.slug}`}
                image={program.image}
                label={programLabel(program, t.home.programs.items)}
              />
            </FadeUp>
          ))}
        </div>
      )}

      {carousel && slides.length > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveSlide(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === activeSlide ? "w-6 bg-primary-green" : "w-2.5 bg-primary-green/30"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {showViewAll && (
        <FadeUp className="relative mt-8 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/chuong-trinh-hoc">{t.common.viewAllPrograms}</Link>
          </Button>
        </FadeUp>
      )}
    </div>
  );
}
