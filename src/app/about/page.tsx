import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { heritageTimeline, testimonials } from "@/data/about";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "About Delamere Ranch | Heritage & Excellence",
  description:
    "Discover five decades of ranching heritage at Delamere Ranch, Naivasha — East Africa's most prestigious agricultural enterprise.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Legacy Written in the Land"
        description="From a single homestead to 12,000 acres of world-class ranching — the Delamere story is Kenya's agricultural heritage."
        image={images.farmHeritage}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Who We Are"
              title="East Africa's Premier Ranch"
              description="Delamere Ranch represents the convergence of heritage, innovation, and sustainable agriculture on the shores of Lake Naivasha."
            />
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                For over fifty years, Delamere has set the standard for Kenyan
                ranching. Our operations span premium dairy production, pedigree
                livestock breeding, agricultural education, and immersive tourism
                — all united by an unwavering commitment to the land and the
                communities we serve.
              </p>
              <p>
                Today, Delamere is more than a ranch. It is a living testament
                to what Kenyan agriculture can achieve — a destination that
                investors admire, tourists trust, buyers purchase from, farmers
                learn from, and distributors partner with.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.heroCattleGrazing}
                alt="Cattle grazing at Delamere"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section className="bg-brand-sand/30">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Heritage Timeline"
            title="Five Decades of Excellence"
            align="center"
          />
        </AnimatedSection>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-brand-gold/30 md:left-1/2" />
          {heritageTimeline.map((event, i) => (
            <AnimatedSection key={event.year} delay={i * 0.1}>
              <div
                className={`relative mb-12 flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-gold md:left-1/2" />
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <span className="text-sm font-medium text-brand-gold">
                    {event.year}
                  </span>
                  <h3 className="mt-1 text-xl text-brand-dark">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/60">
                    {event.description}
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
            eyebrow="Testimonials"
            title="Trusted Across East Africa"
            align="center"
            light
          />
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.author} delay={i * 0.1}>
              <blockquote className="border border-brand-cream/10 p-8">
                <p className="text-brand-cream/80 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="font-medium text-brand-cream">{t.author}</p>
                  <p className="text-sm text-brand-cream/50">{t.role}</p>
                </footer>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section>
        <AnimatedSection className="text-center">
          <SectionHeader
            eyebrow="Visit Us"
            title="Experience Delamere in Person"
            description="Nothing compares to standing on our plains at sunrise. Plan your visit today."
            align="center"
          />
          <Button href="/visits" variant="primary" size="lg">
            Book a Ranch Visit
          </Button>
        </AnimatedSection>
      </Section>
    </>
  );
}
