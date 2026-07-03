"use client";

import Image from "next/image";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { VisitScheduleForm } from "@/components/forms/visit-schedule-form";
import { useLanguage } from "@/contexts/language-context";

interface CtaSectionProps {
  image: string;
}

export function CtaSection({ image }: CtaSectionProps) {
  const { t } = useLanguage();

  return (
    <Section variant="muted" className="!py-8 lg:!py-10">
      <Container>
        <FadeUp>
          <div className="overflow-hidden rounded-[28px] bg-white shadow-card ring-1 ring-border">
            <div className="grid lg:grid-cols-2">
              <div className="relative hidden min-h-[320px] lg:block lg:min-h-[560px]">
                <Image
                  src={image}
                  alt="Trường Mầm Non Hoa Anh Đào"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-heading text-xl font-extrabold leading-snug lg:text-2xl">
                    {t.popup.imageCaption}
                  </p>
                  <p className="mt-2 font-body text-body-sm text-white/85">{t.popup.imageSubtitle}</p>
                </div>
              </div>

              <div className="flex flex-col bg-warm p-6 sm:p-8 lg:p-10">
                <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-[20px] lg:hidden">
                  <Image
                    src={image}
                    alt="Trường Mầm Non Hoa Anh Đào"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                <h2 className="font-heading text-[1.5rem] font-extrabold leading-snug text-primary-pink md:text-[1.75rem] lg:text-[2rem]">
                  {t.home.cta.titleLine1}
                  <br />
                  {t.home.cta.titleLine2}
                </h2>
                <p className="mt-3 font-body text-body-sm leading-relaxed text-foreground/70 md:text-body-md">
                  {t.home.cta.description}
                </p>
                <p className="mt-1 font-body text-xs text-foreground/45">{t.home.cta.privacy}</p>

                <div className="mt-6">
                  <VisitScheduleForm />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
