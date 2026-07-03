import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import type { Program } from "@/types";

interface ProgramsSectionProps {
  programs: Program[];
}

export function ProgramsSection({ programs }: ProgramsSectionProps) {
  return (
    <section className="bg-section py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Chương trình học"
            subtitle="Chương trình giáo dục được thiết kế phù hợp với từng độ tuổi"
          />
        </FadeUp>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <FadeUp key={program.id} delay={index * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-primary-pink px-4 py-1.5 font-body text-xs font-medium text-white">
                    {program.age_group}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {program.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-foreground/70 line-clamp-2">
                    {program.description}
                  </p>
                  <Button asChild variant="ghost" className="mt-4 px-0 text-primary-green hover:bg-transparent">
                    <Link href={`/chuong-trinh-hoc/${program.slug}`}>
                      Xem chi tiết
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/chuong-trinh-hoc">Xem tất cả chương trình</Link>
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
