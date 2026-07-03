import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import type { NewsPost } from "@/types";

interface NewsSectionProps {
  posts: NewsPost[];
}

export function NewsSection({ posts }: NewsSectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeUp>
          <SectionHeading title="Tin tức" subtitle="Cập nhật mới nhất từ Hoa Anh Đào" />
        </FadeUp>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <FadeUp key={post.id} delay={index * 0.1}>
              <Link href={`/tin-tuc/${post.slug}`} className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-primary-green px-3 py-1 font-body text-xs font-medium text-white">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <time className="font-body text-xs text-foreground/50">
                      {formatDate(post.published_at)}
                    </time>
                    <h3 className="mt-2 font-heading text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary-green">
                      {post.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-foreground/70 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/tin-tuc">Xem tất cả tin tức</Link>
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
