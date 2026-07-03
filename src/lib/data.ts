import { createClient } from "@/lib/supabase/server";
import {
  defaultAboutPage,
  defaultAlbums,
  defaultBanners,
  defaultCounters,
  defaultEnrollmentInfo,
  defaultFeatures,
  defaultGalleryImages,
  defaultNews,
  defaultPrograms,
  defaultSiteSettings,
  defaultTeachers,
  defaultTestimonials,
  defaultVideos,
} from "@/data/defaults";
import type {
  AboutPage,
  Album,
  Banner,
  CounterStat,
  EnrollmentInfo,
  Feature,
  GalleryImage,
  NewsPost,
  Program,
  SiteSettings,
  Teacher,
  Testimonial,
  Video,
} from "@/types";

async function queryTable<T>(table: string, orderBy = "order_index"): Promise<T[] | null> {
  const supabase = await createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .order(orderBy, { ascending: true });

  if (error) return null;
  return data as T[];
}

async function querySingle<T>(table: string): Promise<T | null> {
  const supabase = await createClient();
  if (!supabase) return null;

  const { data, error } = await supabase.from(table).select("*").limit(1).single();
  if (error) return null;
  return data as T;
}

async function queryBySlug<T>(table: string, slug: string): Promise<T | null> {
  const supabase = await createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) return null;
  return data as T;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await querySingle<SiteSettings>("site_settings");
  return data ?? defaultSiteSettings;
}

export async function getCounters(): Promise<CounterStat[]> {
  const data = await queryTable<CounterStat>("counter_stats");
  return data ?? defaultCounters;
}

export async function getFeatures(): Promise<Feature[]> {
  const data = await queryTable<Feature>("features");
  return data ?? defaultFeatures;
}

export async function getPrograms(): Promise<Program[]> {
  const data = await queryTable<Program>("programs");
  return (data ?? defaultPrograms).filter((p) => p.is_published);
}

export async function getProgramBySlug(slug: string): Promise<Program | null> {
  const data = await queryBySlug<Program>("programs", slug);
  if (data) return data;
  return defaultPrograms.find((p) => p.slug === slug) ?? null;
}

export async function getTeachers(): Promise<Teacher[]> {
  const data = await queryTable<Teacher>("teachers");
  return (data ?? defaultTeachers).filter((t) => t.is_published);
}

export async function getTeacherBySlug(slug: string): Promise<Teacher | null> {
  const data = await queryBySlug<Teacher>("teachers", slug);
  if (data) return data;
  return defaultTeachers.find((t) => t.slug === slug) ?? null;
}

export async function getGalleryImages(category?: string): Promise<GalleryImage[]> {
  const data = await queryTable<GalleryImage>("gallery_images");
  const images = data ?? defaultGalleryImages;
  if (category && category !== "all") {
    return images.filter((img) => img.category === category);
  }
  return images;
}

export async function getAlbums(): Promise<Album[]> {
  const data = await queryTable<Album>("albums");
  return data ?? defaultAlbums;
}

export async function getAlbumBySlug(slug: string): Promise<Album | null> {
  const data = await queryBySlug<Album>("albums", slug);
  if (data) return data;
  return defaultAlbums.find((a) => a.slug === slug) ?? null;
}

export async function getAlbumImages(albumId: string): Promise<GalleryImage[]> {
  const images = await getGalleryImages();
  return images.filter((img) => img.album_id === albumId);
}

export async function getVideos(): Promise<Video[]> {
  const data = await queryTable<Video>("videos");
  return data ?? defaultVideos;
}

export async function getNews(limit?: number): Promise<NewsPost[]> {
  const data = await queryTable<NewsPost>("news_posts");
  const posts = (data ?? defaultNews)
    .filter((n) => n.is_published)
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
  return limit ? posts.slice(0, limit) : posts;
}

export async function getNewsBySlug(slug: string): Promise<NewsPost | null> {
  const data = await queryBySlug<NewsPost>("news_posts", slug);
  if (data) return data;
  return defaultNews.find((n) => n.slug === slug) ?? null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await queryTable<Testimonial>("testimonials");
  return data ?? defaultTestimonials;
}

export async function getAboutPage(): Promise<AboutPage> {
  const data = await querySingle<AboutPage>("about_page");
  return data ?? defaultAboutPage;
}

export async function getEnrollmentInfo(): Promise<EnrollmentInfo> {
  const data = await querySingle<EnrollmentInfo>("enrollment_info");
  return data ?? defaultEnrollmentInfo;
}

export async function getBanners(): Promise<Banner[]> {
  const data = await queryTable<Banner>("banners");
  return (data ?? defaultBanners).filter((b) => b.is_active);
}

export async function getGalleryCategories(): Promise<string[]> {
  const images = await getGalleryImages();
  return [...new Set(images.map((img) => img.category))];
}
