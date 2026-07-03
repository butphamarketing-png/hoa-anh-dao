"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { useLanguage } from "@/contexts/language-context";
import type { CounterStat } from "@/types";

interface StatsSectionProps {
  counters: CounterStat[];
}

export function StatsSection({ counters }: StatsSectionProps) {
  const { t } = useLanguage();

  return (
    <Section variant="warm">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">{t.home.stats.title}</h2>
            <p className="section-subtitle mx-auto">{t.home.stats.subtitle}</p>
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {counters.map((counter, index) => (
            <FadeUp key={counter.id} delay={index * 0.08}>
              <AnimatedCounter
                value={counter.value}
                suffix={counter.suffix}
                label={t.home.stats.labels[counter.id] ?? counter.label}
              />
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
