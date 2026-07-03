"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { PlayfulBlob } from "@/components/shared/wavy-divider";
import { useLanguage } from "@/contexts/language-context";
import type { Feature } from "@/types";

import { IMG } from "@/lib/school-images";

const featureLinks = [
  "/giao-vien",
  "/chuong-trinh-hoc",
  "/co-so-vat-chat",
  "/co-so-vat-chat",
];

const fallbackImages: Record<string, string> = {
  "1": IMG.teachersFruitArt,
  "2": IMG.summerAdventures,
  "3": IMG.safeClassroom,
  "4": IMG.fruitFestival,
};

interface FeaturesSectionProps {
  features: Feature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  const { t } = useLanguage();
  const items = features.slice(0, 4);

  return (
    <Section variant="warm" className="!pb-5 lg:!pb-6" decor>
      <PlayfulBlob className="right-4 top-8 h-20 w-20" color="#D61F8C" />
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading title={t.home.features.title} subtitle={t.home.features.subtitle} />
          </div>
        </FadeUp>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:gap-6">
          {items.map((feature, index) => {
            const copy = t.home.features.items[feature.id] ?? {
              title: feature.title,
              description: feature.description,
            };
            const imageSrc = feature.image ?? fallbackImages[feature.id] ?? fallbackImages["1"];

            return (
              <FadeUp key={feature.id} delay={index * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:rounded-[28px]">
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                    <Image
                      src={imageSrc}
                      alt={copy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-3 sm:p-6">
                    <h3 className="font-heading text-sm font-extrabold text-foreground sm:text-xl">
                      {copy.title}
                    </h3>
                    <p className="mt-1.5 flex-1 font-body text-[11px] leading-relaxed text-foreground/70 line-clamp-3 sm:mt-3 sm:text-body-sm md:text-body-md">
                      {copy.description}
                    </p>
                    <Link
                      href={featureLinks[index] ?? "/gioi-thieu"}
                      className="mt-2 inline-flex items-center gap-1 font-heading text-[11px] font-bold text-primary-green transition-colors hover:text-primary-pink sm:mt-5 sm:text-body-sm"
                    >
                      {t.common.viewMore}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
