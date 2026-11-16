import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { StoryCard } from "@/components/shared/StoryCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedStories } from "@/data/stories";

export function StoriesPreview() {
  const featured = getFeaturedStories().slice(0, 3);

  return (
    <Section id="stories">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Stories"
          title="From the Ranch"
          description="Editorial stories, farming insights, and behind-the-scenes glimpses of life at Delamere."
          align="center"
        />
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((story, i) => (
          <AnimatedSection key={story.slug} delay={i * 0.1}>
            <StoryCard story={story} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-12 text-center">
        <Button href="/stories" variant="ghost" size="lg">
          Read All Stories
        </Button>
      </AnimatedSection>
    </Section>
  );
}
