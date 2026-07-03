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
    <section className="relative bg-warm py-8 lg:py-12">
      <DotPattern color="#D61F8C" opacity={0.04} />

      <Container>
        <FadeUp>
          <div className="overflow-hidden rounded-[24px] bg-white shadow-card ring-1 ring-border">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative hidden min-h-[420px] lg:block lg:min-h-[520px]">
                <Image
                  src={image}
                  alt="Trường Mầm Non Hoa Anh Đào"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-heading text-xl font-extrabold leading-snug lg:text-2xl">
                    {t.popup.imageCaption}
                  </p>
                  <p className="mt-2 font-body text-body-sm text-white/85">
                    {t.popup.imageSubtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-8">
                <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-[16px] lg:hidden">
                  <Image
                    src={image}
                    alt="Trường Mầm Non Hoa Anh Đào"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                <h2 className="font-heading text-[1.4rem] font-extrabold leading-snug text-primary-pink md:text-[1.65rem]">
                  {t.home.cta.titleLine1}
                  <br />
                  {t.home.cta.titleLine2}
                </h2>
                <p className="mt-3 font-body text-body-sm leading-relaxed text-foreground/70">
                  {t.home.cta.description}
                </p>
                <p className="mt-1 font-body text-xs text-foreground/45">{t.home.cta.privacy}</p>

                <div className="mt-5">
                  <VisitScheduleForm />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
