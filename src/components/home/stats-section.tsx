import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import type { CounterStat } from "@/types";

interface StatsSectionProps {
  counters: CounterStat[];
}

export function StatsSection({ counters }: StatsSectionProps) {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {counters.map((counter) => (
            <AnimatedCounter
              key={counter.id}
              value={counter.value}
              suffix={counter.suffix}
              label={counter.label}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
