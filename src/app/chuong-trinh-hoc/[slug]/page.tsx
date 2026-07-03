import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { GalleryGrid } from "@/components/shared/gallery-grid";
import { CtaSection } from "@/components/home/cta-section";
import { getProgramBySlug, getPrograms, getSiteSettings } from "@/lib/data";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const programs = await getPrograms();
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);
  if (!program) return {};

  return generatePageMetadata({
    title: program.meta_title || program.title,
    description: program.meta_description || program.description,
    image: program.image,
    path: `/chuong-trinh-hoc/${slug}`,
  });
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const [program, settings] = await Promise.all([
    getProgramBySlug(slug),
    getSiteSettings(),
  ]);

  if (!program) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Chương trình học", url: "/chuong-trinh-hoc" },
    { name: program.title, url: `/chuong-trinh-hoc/${slug}` },
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
              { label: "Chương trình học", href: "/chuong-trinh-hoc" },
              { label: program.title },
            ]}
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-card">
              <Image src={program.image} alt={program.title} fill className="object-cover" priority />
            </div>
            <div>
              <span className="rounded-full bg-primary-pink px-4 py-1.5 font-body text-sm text-white">
                {program.age_group}
              </span>
              <h1 className="mt-4 font-heading text-4xl font-bold">{program.title}</h1>
              <p className="mt-4 font-body text-lg text-foreground/70">{program.description}</p>
              <div
                className="prose mt-8 font-body text-foreground/70"
                dangerouslySetInnerHTML={{ __html: program.content }}
              />
            </div>
          </div>
        </div>
      </section>

      {program.gallery.length > 0 && (
        <section className="bg-section py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-10 font-heading text-3xl font-bold">Hình ảnh</h2>
            <GalleryGrid
              images={program.gallery.map((img, i) => ({
                id: String(i),
                title: program.title,
                image: img,
                category: "Chương trình",
                album_id: null,
                order_index: i,
              }))}
              showFilter={false}
            />
          </div>
        </section>
      )}

      <CtaSection image={settings.hero_image} />
    </>
  );
}
