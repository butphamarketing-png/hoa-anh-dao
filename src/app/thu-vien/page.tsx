import Image from "next/image";
import Link from "next/link";
import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { getAlbums, getVideos } from "@/lib/data";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Thư viện ảnh",
  description: "Album ảnh và video hoạt động tại Trường Mầm Non Hoa Anh Đào.",
  path: "/thu-vien",
});

export default async function GalleryPage() {
  const [albums, videos] = await Promise.all([getAlbums(), getVideos()]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Thư viện ảnh", url: "/thu-vien" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <LocalizedPageHero
        page="gallery"
        breadcrumb={[{ label: "Thư viện ảnh" }]}
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80"
      />

      <Section>
        <Container>
          <h2 className="mb-10 font-heading text-3xl font-bold tracking-tight">Album</h2>
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
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <h2 className="mb-10 font-heading text-3xl font-bold tracking-tight">Video</h2>
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
        </Container>
      </Section>
    </>
  );
}
