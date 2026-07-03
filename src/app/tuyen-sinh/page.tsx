import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { RegistrationForm } from "@/components/forms/registration-form";
import { getEnrollmentInfo } from "@/lib/data";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Tuyển sinh",
  description: "Đăng ký tuyển sinh tại Trường Mầm Non Hoa Anh Đào. Tìm hiểu điều kiện, quy trình và học phí.",
  path: "/tuyen-sinh",
});

export default async function EnrollmentPage() {
  const enrollment = await getEnrollmentInfo();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Tuyển sinh", url: "/tuyen-sinh" },
  ]);

  const sections = [
    { title: "Điều kiện tuyển sinh", content: enrollment.conditions },
    { title: "Quy trình đăng ký", content: enrollment.process },
    { title: "Học phí", content: enrollment.tuition },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        title="Tuyển sinh"
        description="Đăng ký ngay để con bạn trải nghiệm môi trường học tập tuyệt vời"
        breadcrumb={[{ label: "Tuyển sinh" }]}
        image="https://images.unsplash.com/photo-1560421683-6857ea356b30?w=1920&q=80"
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <FadeUp key={section.title} delay={index * 0.08}>
                  <div className="rounded-[20px] bg-white p-8 shadow-soft">
                    <h2 className="font-heading text-2xl font-bold tracking-tight">{section.title}</h2>
                    <div className="mt-4 h-1 w-12 rounded-full bg-primary-pink" />
                    <p className="mt-4 whitespace-pre-line font-body leading-relaxed text-foreground/70">
                      {section.content}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.2}>
              <div className="sticky top-32 rounded-[20px] bg-white p-8 shadow-card">
                <h2 className="font-heading text-2xl font-bold">Đăng ký tư vấn</h2>
                <p className="mt-2 font-body text-foreground/70">
                  Điền thông tin bên dưới, chúng tôi sẽ liên hệ sớm nhất.
                </p>
                <div className="mt-6">
                  <RegistrationForm />
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </Section>
    </>
  );
}
