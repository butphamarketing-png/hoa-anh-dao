import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { GalleryTabs } from "@/components/gallery/gallery-tabs";
import { IMG } from "@/lib/school-images";
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
        image={IMG.fruitFestival}
      />

      <Section>
        <Container>
          <GalleryTabs albums={albums} videos={videos} />
        </Container>
      </Section>
    </>
  );
}
