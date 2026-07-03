"use client";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { WavyDivider } from "@/components/shared/wavy-divider";
import { ProgramsShowcase } from "@/components/programs/programs-showcase";
import type { Program } from "@/types";

interface ProgramsSectionProps {
  programs: Program[];
}

export function ProgramsSection({ programs }: ProgramsSectionProps) {
  return (
    <Section variant="warm" className="!pb-6 lg:!pb-8">
      <Container>
        <ProgramsShowcase programs={programs} showViewAll />
      </Container>
      <WavyDivider fill="#FFF9E5" flip className="absolute bottom-0 left-0 w-full" />
    </Section>
  );
}
