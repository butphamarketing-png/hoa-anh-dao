import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { GalleryGrid } from "@/components/shared/gallery-grid";
import { getAlbumBySlug, getAlbumImages, getAlbums } from "@/lib/data";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const albums = await getAlbums();
  return albums.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const album = await getAlbumBySlug(slug);
  if (!album) return {};

  return generatePageMetadata({
    title: album.title,
    description: album.description,
    image: album.cover_image,
    path: `/thu-vien/${slug}`,
  });
}

export default async function AlbumDetailPage({ params }: Props) {
  const { slug } = await params;
  const album = await getAlbumBySlug(slug);
  if (!album) notFound();

  const images = await getAlbumImages(album.id);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Thư viện ảnh", url: "/thu-vien" },
    { name: album.title, url: `/thu-vien/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-section py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Thư viện ảnh", href: "/thu-vien" },
              { label: album.title },
            ]}
          />
          <h1 className="mt-4 font-heading text-4xl font-bold">{album.title}</h1>
          <p className="mt-4 font-body text-foreground/70">{album.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <GalleryGrid images={images} showFilter={false} />
        </div>
      </section>
    </>
  );
}
