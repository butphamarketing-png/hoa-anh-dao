"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import type { NewsPost } from "@/types";

interface NewsSectionProps {
  posts: NewsPost[];
}

export function NewsSection({ posts }: NewsSectionProps) {
  const { t } = useLanguage();
  const displayPosts = posts.slice(0, 4);

  return (
    <Section variant="warm" className="!pt-5 !pb-4 lg:!pt-6 lg:!pb-5">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading title={t.home.news.title} subtitle={t.home.news.subtitle} />
          </div>
        </FadeUp>

        {displayPosts.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-5">
            {displayPosts.map((post, index) => (
              <FadeUp key={post.id} delay={index * 0.1}>
                <Link href={`/tin-tuc/${post.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-[16px] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:rounded-[28px]">
                    <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-3 sm:p-6">
                      <time className="hidden font-body text-body-sm text-foreground/50 sm:block">
                        {formatDate(post.published_at)}
                      </time>
                      <h3 className="mt-0 font-heading text-xs font-extrabold leading-snug text-foreground line-clamp-3 group-hover:text-primary-green sm:mt-2 sm:text-lg md:text-xl">
                        {post.title}
                      </h3>
                      <p className="mt-2 hidden flex-1 font-body text-body-sm leading-relaxed text-foreground/70 line-clamp-3 sm:block">
                        {post.excerpt}
                      </p>
                      <span className="mt-2 hidden items-center gap-1 font-heading text-body-sm font-bold text-primary-green sm:mt-4 sm:inline-flex">
                        {t.common.viewMore}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
        )}

        <FadeUp className="mt-6 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/tin-tuc">{t.common.viewAllNews}</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
