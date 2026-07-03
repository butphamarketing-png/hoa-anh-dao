"use client";

import Link from "next/link";
import {
  HeartHandshake,
  GraduationCap,
  Shield,
  Camera,
  Apple,
  Palette,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { PlayfulBlob } from "@/components/shared/wavy-divider";
import { useLanguage } from "@/contexts/language-context";
import type { Feature } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  GraduationCap,
  Shield,
  Camera,
  Apple,
  Palette,
};

const featureLinks = [
  "/giao-vien",
  "/chuong-trinh-hoc",
  "/co-so-vat-chat",
  "/co-so-vat-chat",
];

const featureGradients = [
  "from-primary-green/90 to-primary-green",
  "from-primary-pink/90 to-primary-pink",
  "from-accent-blue/90 to-accent-blue",
  "from-primary-green/80 to-accent-blue/90",
];

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
            const Icon = iconMap[feature.icon] || HeartHandshake;
            const copy = t.home.features.items[feature.id] ?? {
              title: feature.title,
              description: feature.description,
            };

            return (
              <FadeUp key={feature.id} delay={index * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div
                    className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${featureGradients[index % featureGradients.length]}`}
                  >
                    <Icon className="h-16 w-16 text-white/90 transition-transform duration-300 group-hover:scale-110" />
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
