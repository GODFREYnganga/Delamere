import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { Package, Truck, FileText, Users } from "lucide-react";
import type { Metadata } from "next";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Wholesale & Distribution | Delamere Ranch",
  description:
    "Enterprise procurement portal for supermarkets, hotels, distributors, and restaurants. Bulk ordering, account pricing, and dedicated account managers.",
};

const features = [
  {
    icon: Package,
    title: "Bulk Ordering",
    description:
      "Volume pricing on dairy, livestock, feeds, and agricultural supplies with flexible delivery schedules.",
  },
  {
    icon: Truck,
    title: "Distribution Network",
    description:
      "Cold-chain delivery across Central Kenya with expansion to Nairobi, Nakuru, and coastal regions.",
  },
  {
    icon: FileText,
    title: "Invoice & Procurement",
    description:
      "Account-based pricing, recurring orders, invoice requests, and streamlined procurement workflows.",
  },
  {
    icon: Users,
    title: "Account Managers",
    description:
      "Dedicated relationship managers for enterprise clients with priority support and custom arrangements.",
  },
];

const clientTypes = [
  "Supermarkets & Retail Chains",
  "Hotels & Resorts",
  "Restaurants & Catering",
  "Food Distributors",
  "Export Partners",
  "Institutional Buyers",
];

export default function WholesalePage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale"
        title="Enterprise Procurement Portal"
        description="Partner with Delamere for premium agricultural products at scale. Trusted by Kenya's leading hospitality and retail brands."
        image={images.silageHarvest}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="border border-brand-green/10 p-6 h-full">
                <feature.icon size={24} className="text-brand-gold mb-4" />
                <h3 className="text-lg text-brand-dark">{feature.title}</h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-sand/30">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.freshMilk}
                alt="Delamere dairy operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <SectionHeader
              eyebrow="Who We Serve"
              title="Built for Enterprise Buyers"
            />
            <ul className="space-y-3">
              {clientTypes.map((type) => (
                <li
                  key={type}
                  className="flex items-center gap-3 border-b border-brand-green/5 pb-3 text-foreground/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  {type}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Register"
              title="Apply for Wholesale Account"
              description="Complete the form below and our enterprise team will contact you within 24 hours to discuss pricing, delivery, and account setup."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-white border border-brand-green/10 p-8 shadow-sm">
              <InquiryForm type="wholesale" />
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
