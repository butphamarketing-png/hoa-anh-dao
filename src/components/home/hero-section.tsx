"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import type { SiteSettings } from "@/types";

interface HeroSectionProps {
  settings: SiteSettings;
}

export function HeroSection({ settings }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <Image
        src={settings.hero_image}
        alt="Trường Mầm Non Hoa Anh Đào"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/65" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24 text-center lg:pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-display-sm font-extrabold leading-[1.15] tracking-tight text-white md:text-display-md lg:text-[3.5rem]"
        >
          {t.home.hero.title}
          <br />
          <span className="text-2xl text-primary-pink md:text-[2.25rem] lg:text-display-sm">
            {t.home.hero.subtitle}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl font-body text-body-md text-white/85 md:text-body-lg"
        >
          {t.home.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
            <Link href="/tuyen-sinh" className="gap-2">
              <Calendar className="h-4 w-4" />
              {t.common.registerNow}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
          >
            <Link href="/chuong-trinh-hoc">
              {t.common.learnProgram}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="font-body text-xs text-white/60">{t.common.discover}</span>
          <ChevronDown className="h-6 w-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
