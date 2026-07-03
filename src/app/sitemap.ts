import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getPrograms, getTeachers, getNews, getAlbums } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    "",
    "/gioi-thieu",
    "/chuong-trinh-hoc",
    "/giao-vien",
    "/co-so-vat-chat",
    "/thu-vien",
    "/tin-tuc",
    "/tuyen-sinh",
    "/lien-he",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const [programs, teachers, news, albums] = await Promise.all([
    getPrograms(),
    getTeachers(),
    getNews(),
    getAlbums(),
  ]);

  const dynamicPages = [
    ...programs.map((p) => ({
      url: `${baseUrl}/chuong-trinh-hoc/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...teachers.map((t) => ({
      url: `${baseUrl}/giao-vien/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...news.map((n) => ({
      url: `${baseUrl}/tin-tuc/${n.slug}`,
      lastModified: new Date(n.published_at),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...albums.map((a) => ({
      url: `${baseUrl}/thu-vien/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticPages, ...dynamicPages];
}
