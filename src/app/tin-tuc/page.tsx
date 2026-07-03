import Image from "next/image";
import Link from "next/link";
import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { getNews } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Tin tức",
  description: "Cập nhật tin tức, sự kiện mới nhất từ Trường Mầm Non Hoa Anh Đào.",
  path: "/tin-tuc",
});

export default async function NewsPage() {
  const posts = await getNews();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Tin tức", url: "/tin-tuc" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <LocalizedPageHero
        page="news"
        breadcrumb={[{ label: "Tin tức" }]}
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80"
      />

      <Section>
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <FadeUp key={post.id} delay={index * 0.05}>
                <Link href={`/tin-tuc/${post.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-primary-green px-3 py-1 font-body text-xs text-white">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <time className="font-body text-xs text-foreground/50">
                        {formatDate(post.published_at)}
                      </time>
                      <h2 className="mt-2 font-heading text-lg font-bold line-clamp-2 group-hover:text-primary-green">
                        {post.title}
                      </h2>
                      <p className="mt-2 flex-1 font-body text-sm text-foreground/70 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
