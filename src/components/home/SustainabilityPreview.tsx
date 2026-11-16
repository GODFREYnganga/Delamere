import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { sustainabilityMetrics } from "@/data/sustainability";
import { Droplets, Heart, Leaf, Sun } from "lucide-react";
import { images } from "@/data/images";

const iconMap = {
  droplets: Droplets,
  heart: Heart,
  leaf: Leaf,
  sun: Sun,
};

export function SustainabilityPreview() {
  return (
    <Section dark id="sustainability">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Sustainability"
            title="Stewards of the Rift Valley"
            description="Our commitment to environmental stewardship is woven into every acre we manage — from water conservation to rotational grazing."
            light
          />
          <div className="grid grid-cols-2 gap-6">
            {sustainabilityMetrics.map((metric) => {
              const Icon = iconMap[metric.icon as keyof typeof iconMap];
              return (
                <div key={metric.label} className="border border-brand-cream/10 p-4">
                  <Icon size={20} className="text-brand-gold mb-2" />
                  <p className="font-serif text-2xl text-brand-gold">
                    {metric.metric}
                  </p>
                  <p className="text-sm font-medium text-brand-cream">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>
          <Button href="/sustainability" variant="gold" size="lg" className="mt-8">
            View Impact Report
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={images.forestAerial}
              alt="Sustainable grazing at Delamere"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
