import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CourseCard } from "@/components/shared/CourseCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedCourses } from "@/data/courses";

export function AcademyPreview() {
  const featured = getFeaturedCourses();

  return (
    <Section className="bg-brand-sand/30" id="academy">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Farm Academy"
          title="The Authority in East African Ranching"
          description="Learn from five decades of operational expertise. Courses designed for farmers, ranchers, and agricultural professionals."
          align="center"
        />
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((course, i) => (
          <AnimatedSection key={course.slug} delay={i * 0.1}>
            <CourseCard course={course} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-12 text-center">
        <Button href="/academy" variant="primary" size="lg">
          View All Courses
        </Button>
      </AnimatedSection>
    </Section>
  );
}
