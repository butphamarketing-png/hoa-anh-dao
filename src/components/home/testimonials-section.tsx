"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-section py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Đánh giá phụ huynh"
            subtitle="Những chia sẻ chân thực từ phụ huynh"
          />
        </FadeUp>

        <div className="relative mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-[20px] bg-white p-8 shadow-card md:p-12"
            >
              <Quote className="absolute left-6 top-6 h-10 w-10 text-primary-green/10 md:left-8 md:top-8 md:h-12 md:w-12" />
              <div className="relative flex flex-col items-center text-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-[20px] shadow-soft">
                  <Image
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="mt-6 font-body text-base leading-relaxed text-foreground/80 md:text-lg">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>
                <p className="mt-6 font-heading text-lg font-bold text-foreground">
                  {testimonials[current].name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary-green hover:text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-primary-green" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary-green hover:text-white"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
