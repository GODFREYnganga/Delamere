import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import {
  sustainabilityMetrics,
  sustainabilityPillars,
  impactReports,
} from "@/data/sustainability";
import { Droplets, Heart, Leaf, Sun, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Sustainability & Impact | Delamere Ranch",
  description:
    "Investor-grade ESG reporting — water conservation, animal welfare, rotational grazing, and renewable energy at Delamere Ranch.",
};

const iconMap = {
  droplets: Droplets,
  heart: Heart,
  leaf: Leaf,
  sun: Sun,
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Stewards of the Rift Valley"
        description="Environmental stewardship woven into every acre — from water conservation to carbon-aware farming."
        image={images.waterConservation}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sustainabilityMetrics.map((metric, i) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap];
            return (
              <AnimatedSection key={metric.label} delay={i * 0.1}>
                <div className="border border-brand-green/10 p-6 text-center h-full">
                  <Icon size={28} className="text-brand-gold mx-auto mb-3" />
                  <p className="font-serif text-3xl text-brand-green">
                    {metric.metric}
                  </p>
                  <p className="mt-1 font-medium text-brand-dark">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm text-foreground/50">
                    {metric.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      <Section className="bg-brand-sand/30">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Our Pillars"
            title="Four Foundations of Stewardship"
            align="center"
          />
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-2">
          {sustainabilityPillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.1}>
              <div className="group overflow-hidden bg-white shadow-sm">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-brand-dark">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section dark>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Reports"
            title="Impact Reports & Documentation"
            description="Transparent reporting for investors, partners, and the communities we serve."
            align="center"
            light
          />
        </AnimatedSection>
        <div className="mx-auto max-w-2xl space-y-4">
          {impactReports.map((report, i) => (
            <AnimatedSection key={report.title} delay={i * 0.1}>
              <div className="flex items-start gap-4 border border-brand-cream/10 p-6">
                <FileText size={24} className="text-brand-gold shrink-0" />
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-brand-gold">
                      {report.year}
                    </span>
                    <h3 className="text-lg text-brand-cream">{report.title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-brand-cream/60">
                    {report.summary}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="mt-12 text-center">
          <Button href="/contact" variant="gold" size="lg">
            Request Full Report
          </Button>
        </AnimatedSection>
      </Section>
    </>
  );
}
