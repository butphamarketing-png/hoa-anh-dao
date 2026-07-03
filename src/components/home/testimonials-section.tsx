"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { useLanguage } from "@/contexts/language-context";
import type { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const { t } = useLanguage();
  const items = testimonials.slice(0, 3);

  return (
    <Section variant="muted" className="!pt-4 lg:!pt-5">
      <Container>
        <FadeUp>
          <SectionHeading
            label={t.home.testimonials.label}
            title={t.home.testimonials.title}
            subtitle={t.home.testimonials.subtitle}
          />
        </FadeUp>

        <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-6 lg:gap-6">
          {items.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.1}>
              <article className="relative flex h-full flex-col rounded-[16px] bg-white p-2.5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:rounded-[28px] sm:p-6">
                <Quote className="hidden h-8 w-8 text-primary-green/15 sm:block" />

                <div className="flex flex-col items-center gap-2 sm:mt-4 sm:flex-row sm:items-center sm:gap-4">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[12px] sm:h-14 sm:w-14 sm:rounded-[20px]">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-heading text-[11px] font-bold text-foreground sm:text-base">{item.name}</p>
                    <div className="mt-0.5 flex justify-center gap-0.5 sm:mt-1 sm:justify-start">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-warning text-warning sm:h-4 sm:w-4" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-2 flex-1 text-center font-body text-[10px] leading-relaxed text-foreground/75 line-clamp-4 sm:mt-5 sm:text-left sm:text-body-sm md:text-body-md">
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
