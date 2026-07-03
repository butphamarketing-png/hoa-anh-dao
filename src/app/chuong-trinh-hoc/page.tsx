import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FadeUp } from "@/components/shared/motion-wrapper";
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

      <PageHero
        title="Chương trình học"
        description="Chương trình giáo dục được thiết kế phù hợp với từng giai đoạn phát triển của trẻ"
        breadcrumb={[{ label: "Chương trình học" }]}
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80"
      />

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <FadeUp key={program.id} delay={index * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-primary-pink px-4 py-1.5 font-body text-xs text-white">
                      {program.age_group}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-heading text-xl font-bold">{program.title}</h2>
                    <p className="mt-2 flex-1 font-body text-sm text-foreground/70">
                      {program.description}
                    </p>
                    <Link
                      href={`/chuong-trinh-hoc/${program.slug}`}
                      className="mt-4 inline-flex items-center font-body text-sm font-medium text-primary-green"
                    >
                      Xem chi tiết <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection settings={settings} />
    </>
  );
}
