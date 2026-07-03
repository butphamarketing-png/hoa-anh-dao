"use client";

import Image from "next/image";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { VisitScheduleForm } from "@/components/forms/visit-schedule-form";
import { useLanguage } from "@/contexts/language-context";

interface CtaSectionProps {
  image: string;
}

export function CtaSection({ image }: CtaSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="dang-ky" className="relative scroll-mt-24">
      <FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-stretch">
          <div className="relative aspect-[16/10] min-h-[240px] w-full sm:aspect-auto sm:min-h-[480px] lg:min-h-[560px]">
            <Image
              src={image}
              alt="Trường Mầm Non Hoa Anh Đào"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white sm:bottom-8 sm:left-10 sm:right-10 lg:left-14">
              <p className="font-heading text-base font-extrabold leading-snug sm:text-xl lg:text-2xl">
                {t.popup.imageCaption}
              </p>
              <p className="mt-2 max-w-md font-body text-sm text-white/90 sm:text-base">
                {t.popup.imageSubtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-warm px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14 xl:px-20">
            <h2 className="font-heading text-xl font-extrabold leading-snug text-primary-pink sm:text-2xl lg:text-[1.75rem]">
              {t.home.cta.titleLine1}
              <br />
              {t.home.cta.titleLine2}
            </h2>
            <p className="mt-3 max-w-xl font-body text-body-sm leading-relaxed text-foreground/70 sm:text-body-md">
              {t.home.cta.description}
            </p>
            <p className="mt-1 font-body text-xs text-foreground/45">{t.home.cta.privacy}</p>

            <div className="mt-6 max-w-xl">
              <VisitScheduleForm />
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
