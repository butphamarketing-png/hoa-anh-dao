"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import type { Album, Video } from "@/types";

type GalleryTab = "images" | "video";

interface GalleryTabsProps {
  albums: Album[];
  videos: Video[];
}

export function GalleryTabs({ albums, videos }: GalleryTabsProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<GalleryTab>("images");

  const tabs: { id: GalleryTab; label: string }[] = [
    { id: "video", label: t.pages.gallery.tabVideo },
    { id: "images", label: t.pages.gallery.tabImages },
  ];

  return (
    <>
      <nav
        className="mb-10 flex justify-center gap-10 border-b border-border/60"
        aria-label="Gallery tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative pb-3 font-heading text-sm font-bold uppercase tracking-wider transition-colors md:text-base",
              activeTab === tab.id
                ? "text-primary-green"
                : "text-foreground/45 hover:text-foreground/70"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary-green" />
            )}
          </button>
        ))}
      </nav>

      {activeTab === "images" && (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((album, index) => (
            <FadeUp key={album.id} delay={index * 0.08}>
              <Link
                href={`/thu-vien/${album.slug}`}
                className="group block overflow-hidden rounded-[20px] bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={album.cover_image}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold">{album.title}</h3>
                  <p className="mt-2 font-body text-sm text-foreground/70">{album.description}</p>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      )}

      {activeTab === "video" && (
        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((video, index) => (
            <FadeUp key={video.id} delay={index * 0.08}>
              <div className="overflow-hidden rounded-[20px] bg-white shadow-soft">
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtube_id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold">{video.title}</h3>
                  <p className="mt-2 font-body text-sm text-foreground/70">{video.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      )}
    </>
  );
}
