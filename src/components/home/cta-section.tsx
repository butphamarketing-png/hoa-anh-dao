import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import type { SiteSettings } from "@/types";

interface CtaSectionProps {
  settings: SiteSettings;
}

export function CtaSection({ settings }: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green via-primary-green to-accent-blue" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10 max-w-4xl text-center">
        <FadeUp>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {settings.cta_title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-white/90">
            {settings.cta_description}
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-10 gap-2">
            <Link href="/tuyen-sinh">
              Đăng ký ngay
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
