"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, Plus } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import type { GalleryImage } from "@/types";

interface FacilitiesSectionProps {
  images: GalleryImage[];
  videos?: unknown[];
}

export function FacilitiesSection({ images }: FacilitiesSectionProps) {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const displayImages = images.slice(0, 4);

  return (
    <Section className="!pt-4 lg:!pt-5">
      <Container>
        <FadeUp>
          <SectionHeading
            label={t.home.facilities.label}
            title={t.home.facilities.title}
            subtitle={t.home.facilities.subtitle}
          />
        </FadeUp>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-4 lg:gap-5">
          {displayImages.map((image, index) => (
            <FadeUp key={image.id} delay={index * 0.08}>
              <button
                type="button"
                className="group relative aspect-square w-full overflow-hidden rounded-[16px] shadow-soft sm:rounded-[20px]"
                onClick={() => setLightboxImage(image)}
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/25">
                  <Plus className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100 sm:h-8 sm:w-8" />
                </div>
              </button>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-6 text-center sm:mt-8">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/thu-vien">{t.home.facilities.viewAll}</Link>
          </Button>
        </FadeUp>
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
            aria-label={t.common.close}
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
