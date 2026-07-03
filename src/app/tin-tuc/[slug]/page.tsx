import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { getNews, getNewsBySlug } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { generatePageMetadata, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getNews();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getNewsBySlug(slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    image: post.image,
    path: `/tin-tuc/${slug}`,
  });
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getNewsBySlug(slug);
  if (!post) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Tin tức", url: "/tin-tuc" },
    { name: post.title, url: `/tin-tuc/${slug}` },
  ]);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    publishedAt: post.published_at,
    slug: post.slug,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="bg-section py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Tin tức", href: "/tin-tuc" },
              { label: post.title },
            ]}
          />
        </div>
      </section>

      <article className="py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <span className="rounded-full bg-primary-green px-4 py-1.5 font-body text-xs text-white">
            {post.category}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <time className="mt-4 block font-body text-sm text-foreground/50">
            {formatDate(post.published_at)}
          </time>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[20px] shadow-card">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>

          <div
            className="prose mt-10 max-w-none font-body text-foreground/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}
