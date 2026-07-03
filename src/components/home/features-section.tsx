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

const featureLinks = [
  "/giao-vien",
  "/chuong-trinh-hoc",
  "/co-so-vat-chat",
  "/co-so-vat-chat",
];

const fallbackImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  "2": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  "3": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
  "4": "https://images.unsplash.com/photo-1560421683-6857ea356b30?w=800&q=80",
};

interface FeaturesSectionProps {
  features: Feature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  const { t } = useLanguage();
  const items = features.slice(0, 4);

  return (
    <Section variant="warm">
      <PlayfulBlob className="right-4 top-8 h-20 w-20" color="#D61F8C" />
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading title={t.home.features.title} subtitle={t.home.features.subtitle} />
          </div>
        </FadeUp>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {items.map((feature, index) => {
            const copy = t.home.features.items[feature.id] ?? {
              title: feature.title,
              description: feature.description,
            };
            const imageSrc = feature.image ?? fallbackImages[feature.id] ?? fallbackImages["1"];

            return (
              <FadeUp key={feature.id} delay={index * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={copy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-extrabold text-foreground">
                      {copy.title}
                    </h3>
                    <p className="mt-3 flex-1 font-body text-body-sm leading-relaxed text-foreground/70 md:text-body-md">
                      {copy.description}
                    </p>
                    <Link
                      href={featureLinks[index] ?? "/gioi-thieu"}
                      className="mt-5 inline-flex items-center gap-1 font-heading text-body-sm font-bold text-primary-green transition-colors hover:text-primary-pink"
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
