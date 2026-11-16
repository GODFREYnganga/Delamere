import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { VisitsPreview } from "@/components/home/VisitsPreview";
import { AcademyPreview } from "@/components/home/AcademyPreview";
import { SustainabilityPreview } from "@/components/home/SustainabilityPreview";
import { StoriesPreview } from "@/components/home/StoriesPreview";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutPreview />
      <ProductsPreview />
      <VisitsPreview />
      <AcademyPreview />
      <SustainabilityPreview />
      <StoriesPreview />
      <CTASection />
    </>
  );
}
