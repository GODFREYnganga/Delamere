import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { InteractiveMap } from "@/components/ranch-map/InteractiveMap";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Interactive Ranch Map | Delamere Ranch",
  description:
    "Explore Delamere Ranch's 12,000 acres — dairy operations, grazing zones, visitor center, accommodation, and training facilities.",
};

export default function RanchMapPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore"
        title="Interactive Ranch Map"
        description="Navigate 12,000 acres of premium ranchland — from dairy parlours to lakeside lodges."
        image={images.forestAerial}
      />

      <Section>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Navigate"
            title="Discover Every Corner of Delamere"
            description="Click on map markers or select zones from the list to explore our operations, facilities, and experiences."
            align="center"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <InteractiveMap />
        </AnimatedSection>
      </Section>

      <Section className="bg-brand-sand/30">
        <AnimatedSection className="text-center">
          <SectionHeader
            eyebrow="Visit in Person"
            title="Experience the Ranch Firsthand"
            description="Our guided tours take you through every zone on the map. Book your visit today."
            align="center"
          />
          <Button href="/visits" variant="primary" size="lg">
            Book a Ranch Tour
          </Button>
        </AnimatedSection>
      </Section>
    </>
  );
}
