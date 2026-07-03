"use client";

import Image from "next/image";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Container } from "@/components/shared/container";
import { VisitScheduleForm } from "@/components/forms/visit-schedule-form";
import { DotPattern } from "@/components/shared/decorations";
import { useLanguage } from "@/contexts/language-context";

interface CtaSectionProps {
  image: string;
}

export function CtaSection({ image }: CtaSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="dang-ky" className="relative scroll-mt-24 bg-warm py-5 lg:py-10">
      <DotPattern color="#D61F8C" opacity={0.04} />

      <Container className="max-w-5xl">
        <FadeUp>
          <div className="overflow-hidden rounded-[16px] bg-white shadow-card ring-1 ring-border sm:rounded-[24px]">
            <div className="flex flex-col sm:grid sm:grid-cols-2 sm:items-start">
              <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[4/5] sm:max-h-[480px]">
                <Image
                  src={image}
                  alt="Trường Mầm Non Hoa Anh Đào"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white sm:bottom-5 sm:left-5 sm:right-5">
                  <p className="font-heading text-sm font-extrabold leading-snug sm:text-base lg:text-lg">
                    {t.popup.imageCaption}
                  </p>
                  <p className="mt-1 hidden font-body text-body-sm text-white/85 sm:block">
                    {t.popup.imageSubtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-8">
                <h2 className="font-heading text-base font-extrabold leading-snug text-primary-pink sm:text-lg lg:text-xl">
                  {t.home.cta.titleLine1}
                  <br className="sm:hidden" />
                  <span className="sm:whitespace-nowrap"> {t.home.cta.titleLine2}</span>
                </h2>
                <p className="mt-2 font-body text-body-sm leading-relaxed text-foreground/70">
                  {t.home.cta.description}
                </p>

                <div className="mt-4">
                  <VisitScheduleForm compact minimal />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
