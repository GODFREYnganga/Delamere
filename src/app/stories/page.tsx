import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { StoryCard } from "@/components/shared/StoryCard";
import { stories } from "@/data/stories";
import type { Metadata } from "next";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Stories & Content Hub | Delamere Ranch",
  description:
    "Editorial ranch stories, farming tips, livestock updates, and behind-the-scenes glimpses of life at Delamere Ranch, Naivasha.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="From the Ranch"
        description="Editorial stories, farming insights, and behind-the-scenes glimpses of life at Delamere."
        image={images.heroCattleGrazing}
      />

      <Section>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Latest"
            title="Ranch Stories & Insights"
            align="center"
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, i) => (
            <AnimatedSection key={story.slug} delay={i * 0.05}>
              <StoryCard story={story} />
            </AnimatedSection>
          ))}
        </div>
      </Section>
    </>
  );
}
