"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import type { GalleryImage } from "@/types";

interface GalleryGridProps {
  images: GalleryImage[];
  categories?: string[];
  showFilter?: boolean;
}

export function GalleryGrid({ images, categories = [], showFilter = true }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filtered =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const allCategories = categories.length > 0 ? categories : [...new Set(images.map((i) => i.category))];

  return (
    <>
      {showFilter && allCategories.length > 0 && (
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-5 py-2 font-body text-sm transition-colors ${
              activeCategory === "all"
                ? "bg-primary-green text-white"
                : "bg-white text-foreground/70 hover:bg-section"
            }`}
          >
            Tất cả
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 font-body text-sm transition-colors ${
                activeCategory === cat
                  ? "bg-primary-green text-white"
                  : "bg-white text-foreground/70 hover:bg-section"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((image, index) => (
          <FadeUp key={image.id} delay={index * 0.05}>
            <button
              className="group mb-4 block w-full overflow-hidden rounded-[20px] shadow-soft"
              onClick={() => setLightboxImage(image)}
            >
              <Image
                src={image.image}
                alt={image.title}
                width={600}
                height={index % 3 === 0 ? 500 : 400}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          </FadeUp>
        ))}
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
    </>
  );
}
