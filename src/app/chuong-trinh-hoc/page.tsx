import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { WavyDivider } from "@/components/shared/wavy-divider";
import { ProgramsShowcase } from "@/components/programs/programs-showcase";
import { CtaSection } from "@/components/home/cta-section";
import { getPrograms, getSiteSettings } from "@/lib/data";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Chương trình học",
  description: "Khám phá các chương trình giáo dục theo độ tuổi tại Trường Mầm Non Hoa Anh Đào.",
  path: "/chuong-trinh-hoc",
});

export default async function ProgramsPage() {
  const [programs, settings] = await Promise.all([getPrograms(), getSiteSettings()]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Chương trình học", url: "/chuong-trinh-hoc" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <LocalizedPageHero
        page="programs"
        breadcrumb={[{ label: "Chương trình học" }]}
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80"
      />

      <Section variant="warm" className="relative !py-10 lg:!py-14">
        <Container>
          <ProgramsShowcase programs={programs} showHeading={false} carousel />
        </Container>
        <WavyDivider fill="#FFF9E5" flip className="absolute bottom-0 left-0 w-full" />
      </Section>

      <CtaSection image={settings.hero_image} />
    </>
  );
}
