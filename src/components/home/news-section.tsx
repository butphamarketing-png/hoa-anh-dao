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

  return (
    <Section variant="warm" wave>
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading title={t.home.news.title} subtitle={t.home.news.subtitle} />
          </div>
        </FadeUp>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {posts.slice(0, 3).map((post, index) => (
            <FadeUp key={post.id} delay={index * 0.1}>
              <Link href={`/tin-tuc/${post.slug}`} className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <time className="font-body text-body-sm text-foreground/50">
                      {formatDate(post.published_at)}
                    </time>
                    <h3 className="mt-2 font-heading text-lg font-extrabold leading-snug text-foreground line-clamp-2 group-hover:text-primary-green md:text-xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 font-body text-body-sm leading-relaxed text-foreground/70 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 font-heading text-body-sm font-bold text-primary-green">
                      {t.common.viewMore}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-8 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/tin-tuc">{t.common.viewAllNews}</Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
