import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { getTeacherBySlug, getTeachers } from "@/lib/data";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const teachers = await getTeachers();
  return teachers.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const teacher = await getTeacherBySlug(slug);
  if (!teacher) return {};

  return generatePageMetadata({
    title: teacher.name,
    description: teacher.bio,
    image: teacher.avatar,
    path: `/giao-vien/${slug}`,
  });
}

export default async function TeacherDetailPage({ params }: Props) {
  const { slug } = await params;
  const teacher = await getTeacherBySlug(slug);
  if (!teacher) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Đội ngũ giáo viên", url: "/giao-vien" },
    { name: teacher.name, url: `/giao-vien/${slug}` },
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
              { label: "Đội ngũ giáo viên", href: "/giao-vien" },
              { label: teacher.name },
            ]}
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-[20px] shadow-card">
              <Image src={teacher.avatar} alt={teacher.name} fill className="object-cover" priority />
            </div>
            <h1 className="mt-8 font-heading text-4xl font-bold">{teacher.name}</h1>
            <p className="mt-2 font-body text-lg text-primary-pink">{teacher.position}</p>
            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-foreground/70">
              {teacher.bio}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
