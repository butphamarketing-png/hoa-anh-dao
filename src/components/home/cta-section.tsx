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
    <section className="relative bg-warm py-6 lg:py-10">
      <DotPattern color="#D61F8C" opacity={0.04} />

      <Container className="max-w-5xl">
        <FadeUp>
          <div className="overflow-hidden rounded-[20px] bg-white shadow-card ring-1 ring-border sm:rounded-[24px]">
            <div className="grid grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] sm:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
              <div className="relative min-h-[220px] sm:min-h-[300px] lg:min-h-[380px]">
                <Image
                  src={image}
                  alt="Trường Mầm Non Hoa Anh Đào"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 42vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white sm:bottom-5 sm:left-5 sm:right-5">
                  <p className="font-heading text-xs font-extrabold leading-snug sm:text-base lg:text-lg">
                    {t.popup.imageCaption}
                  </p>
                  <p className="mt-1 hidden font-body text-[10px] text-white/85 sm:block sm:text-body-sm">
                    {t.popup.imageSubtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-3 sm:p-5 lg:p-6">
                <h2 className="font-heading text-sm font-extrabold leading-snug text-primary-pink sm:text-lg lg:text-xl">
                  {t.home.cta.titleLine1}{" "}
                  <span className="whitespace-nowrap">{t.home.cta.titleLine2}</span>
                </h2>
                <p className="mt-1.5 font-body text-[11px] leading-relaxed text-foreground/70 sm:mt-2 sm:text-body-sm">
                  {t.home.cta.description}
                </p>
                <p className="mt-0.5 hidden font-body text-[10px] text-foreground/45 sm:block sm:text-xs">
                  {t.home.cta.privacy}
                </p>

                <div className="mt-3 sm:mt-4">
                  <VisitScheduleForm compact />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
