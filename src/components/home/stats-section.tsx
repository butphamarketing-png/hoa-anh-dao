import { AnimatedCounter } from "@/components/shared/animated-counter";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import type { CounterStat } from "@/types";

interface StatsSectionProps {
  counters: CounterStat[];
}

export function StatsSection({ counters }: StatsSectionProps) {
  return (
    <Section variant="muted">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">Hoa Anh Đào trong con số</h2>
            <p className="section-subtitle mx-auto">
              Những con số phản ánh hành trình nuôi dưỡng và phát triển trẻ nhỏ
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {counters.map((counter, index) => (
            <FadeUp key={counter.id} delay={index * 0.08}>
              <AnimatedCounter
                value={counter.value}
                suffix={counter.suffix}
                label={counter.label}
              />
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
