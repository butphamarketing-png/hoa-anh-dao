import Image from "next/image";
import Link from "next/link";
import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { getTeachers } from "@/lib/data";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Đội ngũ giáo viên",
  description: "Gặp gỡ đội ngũ giáo viên tận tâm tại Trường Mầm Non Hoa Anh Đào.",
  path: "/giao-vien",
});

export default async function TeachersPage() {
  const teachers = await getTeachers();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Đội ngũ giáo viên", url: "/giao-vien" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <LocalizedPageHero
        page="teachers"
        breadcrumb={[{ label: "Đội ngũ giáo viên" }]}
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80"
      />

      <Section>
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher, index) => (
              <FadeUp key={teacher.id} delay={index * 0.08}>
                <Link
                  href={`/giao-vien/${teacher.slug}`}
                  className="group block overflow-hidden rounded-[20px] bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={teacher.avatar}
                      alt={teacher.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h2 className="font-heading text-xl font-bold">{teacher.name}</h2>
                    <p className="mt-1 font-body text-sm text-primary-pink">{teacher.position}</p>
                    <p className="mt-3 font-body text-sm text-foreground/70 line-clamp-3">
                      {teacher.bio}
                    </p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
