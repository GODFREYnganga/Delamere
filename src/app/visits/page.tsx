import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { BookingForm } from "@/components/shared/BookingForm";
import { experiences } from "@/data/experiences";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Clock, Check } from "lucide-react";
import { visitInquiry } from "@/lib/whatsapp";
import type { Metadata } from "next";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Farm Visits & Tourism | Delamere Ranch",
  description:
    "Book immersive ranch experiences — guided tours, farm-to-table weekends, photography safaris, and corporate retreats at Delamere Ranch, Naivasha.",
};

export default function VisitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Farm Visits"
        title="Immersive Ranch Experiences"
        description="From sunrise cattle drives to gourmet farm-to-table dinners — discover Delamere through curated experiences."
        image={images.landscapeSunrise}
      />

      <Section>
        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.slug}>
              <div
                id={exp.slug}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <Badge className="mb-3">{exp.category}</Badge>
                  <h2 className="text-3xl text-brand-dark">{exp.name}</h2>
                  <div className="mt-2 flex items-center gap-4 text-sm text-foreground/50">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {exp.duration}
                    </span>
                    <span className="font-medium text-brand-gold">
                      {exp.price}
                      {exp.priceNote && ` ${exp.priceNote}`}
                    </span>
                  </div>
                  <p className="mt-4 text-foreground/70 leading-relaxed">
                    {exp.longDescription}
                  </p>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wider text-brand-green mb-2">
                        Highlights
                      </h4>
                      <ul className="space-y-1">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-foreground/60">
                            <Check size={14} className="text-brand-gold mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wider text-brand-green mb-2">
                        Includes
                      </h4>
                      <ul className="space-y-1">
                        {exp.includes.map((inc) => (
                          <li key={inc} className="flex items-start gap-2 text-sm text-foreground/60">
                            <Check size={14} className="text-brand-gold mt-0.5" />
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Button
                      href={visitInquiry(exp.name)}
                      variant="primary"
                      size="md"
                      external
                    >
                      Book via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-sand/30" id="book">
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Book Online"
              title="Reserve Your Experience"
              description="Select your date, choose your experience, and confirm with M-Pesa or card payment."
            />
            <div className="space-y-4 text-sm text-foreground/60">
              <p>✓ Availability calendar</p>
              <p>✓ Automated confirmation emails</p>
              <p>✓ QR ticketing</p>
              <p>✓ M-Pesa & Stripe payment</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 shadow-sm">
              <BookingForm experienceName="Signature Ranch Tour" />
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
