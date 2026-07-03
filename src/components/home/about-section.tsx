import Image from "next/image";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import type { SiteSettings } from "@/types";

interface AboutSectionProps {
  settings: SiteSettings;
}

export function AboutSection({ settings }: AboutSectionProps) {
  return (
    <Section className="!py-16 lg:!py-24">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="section-title">
              Trường Mầm Non Hoa Anh Đào xin chào!
            </h2>
            <p className="section-subtitle mx-auto mt-6">
              {settings.about_content}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[24px] shadow-card">
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
