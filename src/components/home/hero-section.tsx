"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import {
  CherryBlossomArt,
  FallingPetals,
  GradientOrb,
  SoftCloud,
} from "@/components/shared/decorations";
import { ChildWithCartArt } from "@/components/shared/line-art-illustrations";
import type { SiteSettings } from "@/types";

interface HeroSectionProps {
  settings: SiteSettings;
}

export function HeroSection({ settings }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative flex h-[clamp(380px,52vw,720px)] min-h-[380px] w-full items-center justify-center overflow-hidden">
      <Image
        src={settings.hero_image}
        alt="Trường Mầm Non Hoa Anh Đào"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/65" />

      <FallingPetals />
      <GradientOrb className="left-[5%] top-[15%]" color="#00A651" size={220} />
      <GradientOrb className="right-[8%] top-[25%]" color="#D61F8C" size={160} />
      <GradientOrb className="bottom-[20%] left-[30%]" color="#27B5E6" size={140} />
      <SoftCloud className="absolute left-6 top-28 hidden md:block" />
      <SoftCloud className="absolute right-10 top-40 hidden scale-75 md:block" />
      <CherryBlossomArt
        className="absolute right-4 top-24 hidden opacity-20 lg:block xl:right-10"
        size={130}
      />
      <CherryBlossomArt
        className="absolute bottom-28 left-4 hidden opacity-15 lg:block xl:left-10"
        size={90}
      />
      <ChildWithCartArt
        className="absolute bottom-16 right-4 hidden lg:block xl:right-12"
        size={220}
        opacity={0.9}
      />
      <ChildWithCartArt
        className="absolute bottom-20 left-2 hidden opacity-70 md:block lg:hidden"
        size={140}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 text-center sm:pt-20 lg:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-display-sm font-semibold leading-[1.15] tracking-tight text-white md:text-display-md lg:text-[3.5rem]"
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
          className="mx-auto mt-4 max-w-xl font-body text-body-md text-white/85 sm:mt-6 md:text-body-lg"
        >
          {t.home.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <Button asChild size="lg" variant="secondary" className="rounded-full px-6 sm:px-8">
            <Link href="/tuyen-sinh" className="gap-2">
              <Calendar className="h-4 w-4" />
              {t.common.registerNow}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="gap-2 rounded-full border border-white/30 bg-white/10 px-6 text-white backdrop-blur-md hover:bg-white/20 hover:text-white sm:px-8"
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
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 sm:bottom-8"
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
