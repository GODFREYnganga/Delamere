import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";

export function AboutPreview() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimatedSection>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.farmHeritage}
              alt="Delamere Ranch heritage"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-48 w-48 border-2 border-brand-gold md:block" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SectionHeader
            eyebrow="Our Heritage"
            title="Five Decades of Ranching Excellence"
            description="From a single homestead on the shores of Lake Naivasha to East Africa's most prestigious ranch — Delamere represents the pinnacle of Kenyan agricultural heritage."
          />
          <p className="text-foreground/70 leading-relaxed">
            Our 12,000-acre ranch is home to over 3,500 pedigree cattle, a
            dairy operation producing 25,000 litres daily, and a commitment to
            sustainable land stewardship that spans generations.
          </p>
          <Button href="/about" variant="primary" size="lg" className="mt-8">
            Discover Our Story
          </Button>
        </AnimatedSection>
      </div>
    </Section>
  );
}
