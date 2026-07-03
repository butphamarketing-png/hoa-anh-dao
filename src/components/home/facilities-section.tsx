"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import type { GalleryImage } from "@/types";

interface FacilitiesSectionProps {
  images: GalleryImage[];
}

export function FacilitiesSection({ images }: FacilitiesSectionProps) {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Cơ sở vật chất"
            subtitle="Không gian học tập hiện đại, an toàn và thân thiện"
          />
        </FadeUp>

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.slice(0, 6).map((image, index) => (
            <FadeUp key={image.id} delay={index * 0.1}>
              <button
                className="mb-4 block w-full overflow-hidden rounded-[20px] shadow-soft transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => setLightboxImage(image)}
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  width={600}
                  height={index % 2 === 0 ? 400 : 500}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
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
    </section>
  );
}
