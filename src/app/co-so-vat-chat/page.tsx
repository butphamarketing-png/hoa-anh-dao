import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { GalleryGrid } from "@/components/shared/gallery-grid";
import { getGalleryImages, getGalleryCategories } from "@/lib/data";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Cơ sở vật chất",
  description: "Khám phá không gian học tập hiện đại tại Trường Mầm Non Hoa Anh Đào.",
  path: "/co-so-vat-chat",
});

export default async function FacilitiesPage() {
  const [images, categories] = await Promise.all([
    getGalleryImages(),
    getGalleryCategories(),
  ]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Cơ sở vật chất", url: "/co-so-vat-chat" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <LocalizedPageHero
        page="facilities"
        breadcrumb={[{ label: "Cơ sở vật chất" }]}
        image="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1920&q=80"
      />

      <Section>
        <Container>
          <FadeUp>
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {[
                { title: "Phòng học", desc: "Rộng rãi, thoáng mát, trang bị đầy đủ" },
                { title: "Sân chơi", desc: "An toàn, đa dạng trò chơi ngoài trời" },
                { title: "Camera", desc: "Giám sát 24/7 cho sự an tâm của phụ huynh" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] bg-section p-6 text-center shadow-soft"
                >
                  <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 font-body text-sm text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
          <GalleryGrid images={images} categories={categories} />
        </Container>
      </Section>
    </>
  );
}
