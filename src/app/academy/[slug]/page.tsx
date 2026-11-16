import Image from "next/image";
import { notFound } from "next/navigation";
import { BookOpen, Check } from "lucide-react";
import { courses, getCourse } from "@/data/courses";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { InquiryForm } from "@/components/shared/InquiryForm";
import type { Metadata } from "next";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.name} | Delamere Academy`,
    description: course.description,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <section className="bg-brand-dark pt-24">
        <div className="container-wide section-padding !pt-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={course.image}
                alt={course.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center py-8">
              <Badge className="w-fit mb-4">{course.category}</Badge>
              <h1 className="text-4xl text-brand-cream md:text-5xl">
                {course.name}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-brand-cream/50">
                <span className="flex items-center gap-1">
                  <BookOpen size={14} />
                  {course.format}
                </span>
                <span>{course.duration}</span>
              </div>
              <p className="mt-4 text-lg text-brand-cream/70 leading-relaxed">
                {course.longDescription}
              </p>
              <div className="mt-6">
                <span className="font-serif text-3xl text-brand-gold">
                  {course.price}
                </span>
              </div>
              <Button href="#enroll" variant="gold" size="lg" className="mt-8 w-fit">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-brand-dark mb-6">Course Modules</h2>
            <ol className="space-y-3">
              {course.modules.map((mod, i) => (
                <li key={mod} className="flex items-start gap-3 text-foreground/70">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-xs text-brand-cream">
                    {i + 1}
                  </span>
                  {mod}
                </li>
              ))}
            </ol>
            <h3 className="text-lg text-brand-dark mt-8 mb-4">What You Receive</h3>
            <ul className="space-y-2">
              {course.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2 text-foreground/70">
                  <Check size={16} className="text-brand-gold mt-0.5" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
          <div id="enroll">
            <InquiryForm type="academy" title="Enroll in This Course" />
          </div>
        </div>
      </Section>
    </>
  );
}
