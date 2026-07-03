import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Teacher } from "@/types";

interface TeachersSectionProps {
  teachers: Teacher[];
}

export function TeachersSection({ teachers }: TeachersSectionProps) {
  return (
    <section className="bg-section py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Đội ngũ giáo viên"
            subtitle="Những người thầy, người cô tận tâm đồng hành cùng bé"
          />
        </FadeUp>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <FadeUp key={teacher.id} delay={index * 0.1}>
              <Link
                href={`/giao-vien/${teacher.slug}`}
                className="group block text-center"
              >
                <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-[20px] shadow-soft">
                  <Image
                    src={teacher.avatar}
                    alt={teacher.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="280px"
                  />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {teacher.name}
                </h3>
                <p className="mt-1 font-body text-sm text-primary-pink">{teacher.position}</p>
                <p className="mt-2 font-body text-sm text-foreground/60 line-clamp-2">
                  {teacher.bio}
                </p>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
