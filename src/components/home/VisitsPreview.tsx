import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ExperienceCard } from "@/components/shared/ExperienceCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedExperiences } from "@/data/experiences";

export function VisitsPreview() {
  const featured = getFeaturedExperiences().slice(0, 3);

  return (
    <Section id="visits">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Farm Visits"
          title="Immersive Ranch Experiences"
          description="From guided tours to weekend retreats — discover Delamere through experiences crafted for every visitor."
          align="center"
        />
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((exp, i) => (
          <AnimatedSection key={exp.slug} delay={i * 0.1}>
            <ExperienceCard experience={exp} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-12 text-center">
        <Button href="/visits" variant="primary" size="lg">
          Explore All Experiences
        </Button>
      </AnimatedSection>
    </Section>
  );
}
