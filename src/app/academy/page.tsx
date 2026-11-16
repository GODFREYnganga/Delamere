import { PageHero } from "@/components/shared/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CourseCard } from "@/components/shared/CourseCard";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { courses } from "@/data/courses";
import type { Metadata } from "next";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Farm Academy | Delamere Ranch",
  description:
    "Learn modern dairy farming, livestock management, and sustainable ranching from East Africa's leading agricultural authority.",
};

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Farm Academy"
        title="The Authority in East African Ranching"
        description="Video courses, downloadable resources, certifications, and mentorship — built from 50 years of Delamere expertise."
        image={images.educationClassroom}
      />

      <Section>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Courses"
            title="Learn From the Best"
            description="Whether you're starting your first dairy or scaling a commercial operation, our courses deliver actionable expertise."
            align="center"
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <AnimatedSection key={course.slug} delay={i * 0.05}>
              <CourseCard course={course} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-sand/30">
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Mentorship"
              title="Apply for Mentorship"
              description="Selected Academy graduates can apply for one-on-one mentorship with Delamere's operational team."
            />
            <div className="space-y-3 text-sm text-foreground/60">
              <p>• 1-hour sessions with ranch managers</p>
              <p>• Farm assessment and recommendations</p>
              <p>• Ongoing support community</p>
              <p>• Physical workshop booking available</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 shadow-sm">
              <InquiryForm type="academy" />
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
