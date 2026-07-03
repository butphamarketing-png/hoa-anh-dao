import { FadeUp } from "@/components/shared/motion-wrapper";
import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { getAboutPage, getTeachers } from "@/lib/data";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { IMG } from "@/lib/school-images";
import Image from "next/image";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Giới thiệu",
  description: "Tìm hiểu về lịch sử, sứ mệnh, tầm nhìn và đội ngũ Trường Mầm Non Hoa Anh Đào.",
  path: "/gioi-thieu",
});

export default async function AboutPage() {
  const [about, teachers] = await Promise.all([getAboutPage(), getTeachers()]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Giới thiệu", url: "/gioi-thieu" },
  ]);

  const sections = [
    { title: "Lịch sử", content: about.history },
    { title: "Sứ mệnh", content: about.mission },
    { title: "Tầm nhìn", content: about.vision },
    { title: "Giá trị cốt lõi", content: about.values },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <LocalizedPageHero
        page="about"
        breadcrumb={[{ label: "Giới thiệu" }]}
        image={IMG.yearbookClass}
      />

      <Section>
        <Container>
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <FadeUp key={section.title} delay={index * 0.08}>
                <div className="rounded-[20px] bg-white p-8 shadow-soft md:p-12">
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 h-1 w-12 rounded-full bg-primary-pink" />
                  <p className="mt-6 font-body text-base leading-relaxed text-foreground/70 md:text-lg">
                    {section.content}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeUp>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Đội ngũ
            </h2>
            <p className="mt-4 max-w-3xl font-body text-foreground/70">{about.team_intro}</p>
          </FadeUp>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher, index) => (
              <FadeUp key={teacher.id} delay={index * 0.08}>
                <Link href={`/giao-vien/${teacher.slug}`} className="group block text-center">
                  <div className="relative mx-auto aspect-square max-w-[240px] overflow-hidden rounded-[20px] shadow-soft">
                    <Image
                      src={teacher.avatar}
                      alt={teacher.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="font-body text-sm text-white">Xem hồ sơ</span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold">{teacher.name}</h3>
                  <p className="font-body text-sm text-primary-pink">{teacher.position}</p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
