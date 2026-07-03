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
    <Section variant="muted">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-card">
                <Image
                  src={settings.about_image}
                  alt={settings.about_title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[20px] bg-primary-green/10" />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {settings.about_title}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-primary-pink" />
            <p className="mt-6 font-body text-base leading-relaxed text-foreground/70 md:text-lg">
              {settings.about_content}
            </p>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
