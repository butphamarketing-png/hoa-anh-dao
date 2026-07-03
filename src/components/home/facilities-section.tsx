"use client";

import Image from "next/image";
import { useState } from "react";
import { X, Plus } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { useLanguage } from "@/contexts/language-context";
import type { GalleryImage } from "@/types";

interface FacilitiesSectionProps {
  images: GalleryImage[];
}

export function FacilitiesSection({ images }: FacilitiesSectionProps) {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const display = images.slice(0, 5);
  const [featured, ...grid] = display;

  return (
    <Section>
      <Container>
        <FadeUp>
          <SectionHeading
            label={t.home.facilities.label}
            title={t.home.facilities.title}
            subtitle={t.home.facilities.subtitle}
          />
        </FadeUp>

        {featured && (
          <div className="mt-8 grid gap-3 lg:grid-cols-2 lg:gap-4">
            <FadeUp>
              <button
                type="button"
                className="group relative block h-full min-h-[280px] w-full overflow-hidden rounded-[20px] shadow-soft lg:min-h-[520px]"
                onClick={() => setLightboxImage(featured)}
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 font-body text-body-sm font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  {featured.title}
                </span>
              </button>
            </FadeUp>

            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {grid.map((image, index) => (
                <FadeUp key={image.id} delay={index * 0.08}>
                  <button
                    type="button"
                    className="group relative aspect-square w-full overflow-hidden rounded-[20px] shadow-soft"
                    onClick={() => setLightboxImage(image)}
                  >
                    <Image
                      src={image.image}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/25">
                      <Plus className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </button>
                </FadeUp>
              ))}
            </div>
          </div>
        )}
      </Container>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white"
            onClick={() => setLightboxImage(null)}
            aria-label="Đóng"
          >
            <X className="h-6 w-6" />
          </button>
          <Image
            src={lightboxImage.image}
            alt={lightboxImage.title}
            width={1200}
            height={800}
            className="max-h-[90vh] max-w-full rounded-[20px] object-contain"
          />
        </div>
      )}
    </Section>
  );
}
