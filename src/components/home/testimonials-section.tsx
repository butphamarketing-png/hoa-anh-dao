"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import type { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const items = testimonials.slice(0, 3);

  return (
    <Section variant="muted">
      <Container>
        <FadeUp>
          <SectionHeading
            title="Đánh giá phụ huynh"
            subtitle="Những chia sẻ chân thực từ phụ huynh"
          />
        </FadeUp>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.1}>
              <article className="relative flex h-full flex-col rounded-[20px] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <Quote className="h-8 w-8 text-primary-green/15" />

                <div className="mt-4 flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[16px]">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-base font-bold text-foreground">
                      {item.name}
                    </p>
                    <div className="mt-1 flex gap-0.5">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-5 flex-1 font-body text-sm leading-relaxed text-foreground/75">
                  &ldquo;{item.content}&rdquo;
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
