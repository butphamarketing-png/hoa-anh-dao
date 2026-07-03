"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <Section className="relative overflow-hidden !py-12 lg:!py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green via-primary-green to-accent-blue" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10 max-w-3xl text-center">
        <FadeUp>
          <h2 className="font-heading text-[1.75rem] font-extrabold leading-[1.3] tracking-tight text-white md:text-[2.25rem] lg:text-[2.5rem]">
            {t.home.cta.titleLine1}
            <br />
            {t.home.cta.titleLine2}
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-body-md leading-relaxed text-white/90 md:text-body-lg">
            {t.home.cta.description}
          </p>
          <p className="mt-3 font-body text-body-sm text-white/70">{t.home.cta.privacy}</p>
          <Button asChild size="lg" variant="secondary" className="mt-10 gap-2 rounded-full px-10">
            <Link href="/tuyen-sinh">
              {t.common.registerNow}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeUp>
      </Container>
    </Section>
  );
}
