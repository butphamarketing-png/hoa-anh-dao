"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import type { Program } from "@/types";

interface ProgramsSectionProps {
  programs: Program[];
}

export function ProgramsSection({ programs }: ProgramsSectionProps) {
  const { t } = useLanguage();
  const displayPrograms = programs.slice(0, 3);

  return (
    <Section className="!pb-4 lg:!pb-5">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading title={t.home.programs.title} subtitle={t.home.programs.subtitle} />
          </div>
        </FadeUp>

        <div className="-mx-4 mt-6 flex gap-5 overflow-x-auto px-4 pb-2 scrollbar-hide snap-x snap-mandatory lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {displayPrograms.map((program, index) => (
            <FadeUp key={program.id} delay={index * 0.08} className="shrink-0 snap-start lg:shrink">
              <article className="group flex h-full w-[280px] flex-col overflow-hidden rounded-[28px] bg-white shadow-soft ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:ring-warm-alt lg:w-auto">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 280px, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-body text-body-sm font-medium text-white/90">
                      {program.age_group}
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-extrabold text-white">
                      {program.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex-1 font-body text-body-sm leading-relaxed text-foreground/70 line-clamp-3">
                    {program.description}
                  </p>
                  <Link
                    href={`/chuong-trinh-hoc/${program.slug}`}
                    className="mt-4 inline-flex items-center gap-1 font-heading text-body-sm font-bold text-primary-green transition-colors hover:text-primary-pink"
                  >
                    {t.common.viewMore}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-6 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/chuong-trinh-hoc">{t.common.viewAllPrograms}</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
