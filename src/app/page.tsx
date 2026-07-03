import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { StatsSection } from "@/components/home/stats-section";
import { FeaturesSection } from "@/components/home/features-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { FacilitiesSection } from "@/components/home/facilities-section";
import { TeachersSection } from "@/components/home/teachers-section";
import { NewsSection } from "@/components/home/news-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";
import {
  getSiteSettings,
  getCounters,
  getFeatures,
  getPrograms,
  getGalleryImages,
  getTeachers,
  getNews,
  getTestimonials,
} from "@/lib/data";

export default async function HomePage() {
  const [settings, counters, features, programs, galleryImages, teachers, news, testimonials] =
    await Promise.all([
      getSiteSettings(),
      getCounters(),
      getFeatures(),
      getPrograms(),
      getGalleryImages(),
      getTeachers(),
      getNews(6),
      getTestimonials(),
    ]);

  return (
    <>
      <HeroSection settings={settings} />
      <AboutSection settings={settings} />
      <StatsSection counters={counters} />
      <FeaturesSection features={features} />
      <ProgramsSection programs={programs} />
      <FacilitiesSection images={galleryImages} />
      <TeachersSection teachers={teachers} />
      <NewsSection posts={news} />
      <TestimonialsSection testimonials={testimonials} />
      <CtaSection image={settings.hero_image} />
    </>
  );
}
