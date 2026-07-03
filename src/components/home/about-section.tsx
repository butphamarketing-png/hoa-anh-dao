"use client";

import Image from "next/image";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { OrganicBlob } from "@/components/shared/decorations";
import { useLanguage } from "@/contexts/language-context";
import type { SiteSettings } from "@/types";

interface AboutSectionProps {
  settings: SiteSettings;
}

export function AboutSection({ settings }: AboutSectionProps) {
  const { t } = useLanguage();

  return (
    <Section className="!py-8 lg:!py-10" scallop decor>
      <OrganicBlob className="absolute -left-6 top-16" color="#00A651" />
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="section-title">{t.home.about.welcome}</h2>
            <p className="section-subtitle mx-auto mt-3">{t.home.about.content}</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="relative mx-auto mt-8 max-w-5xl overflow-hidden rounded-[28px] shadow-card ring-4 ring-warm-alt">
            <div className="relative aspect-[21/9]">
              <Image
                src={settings.about_image}
                alt={settings.about_title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
