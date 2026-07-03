import {
  HeartHandshake,
  GraduationCap,
  Shield,
  Camera,
  Apple,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Feature } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  GraduationCap,
  Shield,
  Camera,
  Apple,
  Palette,
};

interface FeaturesSectionProps {
  features: Feature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Tại sao chọn Hoa Anh Đào"
            subtitle="Những giá trị cốt lõi giúp chúng tôi trở thành ngôi nhà thứ hai của bé yêu"
          />
        </FadeUp>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || HeartHandshake;
            return (
              <FadeUp key={feature.id} delay={index * 0.1}>
                <div className="group h-full rounded-[20px] border border-border bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[20px] bg-primary-green/10 transition-colors group-hover:bg-primary-green">
                    <Icon className="h-7 w-7 text-primary-green transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-foreground/70">
                    {feature.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
