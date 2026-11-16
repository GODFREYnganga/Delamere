import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { siteConfig } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact Delamere Ranch",
  description:
    "Get in touch with Delamere Ranch for product inquiries, farm visits, wholesale partnerships, and academy enrollment.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Whether you're planning a visit, placing an order, or exploring a partnership — we'd love to hear from you."
        image={images.landscapeSunrise}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Reach Us"
              title="We're Here to Help"
            />
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-gold mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-brand-dark">Location</p>
                  <p className="text-foreground/60">{siteConfig.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-brand-gold mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-brand-dark">Phone</p>
                  <p className="text-foreground/60">{siteConfig.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-brand-gold mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-brand-dark">Email</p>
                  <p className="text-foreground/60">{siteConfig.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle size={20} className="text-brand-gold mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-brand-dark">WhatsApp</p>
                  <p className="text-foreground/60 mb-3">
                    Fastest way to reach our team
                  </p>
                  <Button
                    href={whatsappUrl("Hello Delamere Ranch, I'd like to get in touch.")}
                    variant="primary"
                    size="sm"
                    external
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-10 border border-brand-green/10 p-6">
              <h3 className="text-lg text-brand-dark mb-2">Languages</h3>
              <p className="text-sm text-foreground/60">
                We support inquiries in English and Swahili (Kiswahili).
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white border border-brand-green/10 p-8 shadow-sm">
              <InquiryForm type="contact" title="Send Us a Message" />
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
