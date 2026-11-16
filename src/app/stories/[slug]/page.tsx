import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { stories, getStory } from "@/data/stories";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Story Not Found" };
  return {
    title: `${story.title} | Delamere Ranch`,
    description: story.excerpt,
  };
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const paragraphs = story.content.split("\n\n");

  return (
    <>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="overlay-dark absolute inset-0" />
        <div className="relative z-10 section-padding w-full !pt-32">
          <div className="container-narrow">
            <Link
              href="/stories"
              className="mb-6 inline-flex items-center gap-2 text-sm text-brand-cream/60 hover:text-brand-gold transition-colors"
            >
              <ArrowLeft size={16} />
              All Stories
            </Link>
            <Badge variant="outline" className="mb-4">
              {story.category}
            </Badge>
            <h1 className="text-3xl text-brand-cream md:text-5xl">
              {story.title}
            </h1>
            <p className="mt-4 text-sm text-brand-cream/50">
              {story.author} &middot;{" "}
              {new Date(story.date).toLocaleDateString("en-KE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              &middot; {story.readTime} read
            </p>
          </div>
        </div>
      </section>

      <Section>
        <article className="container-narrow">
          <p className="text-xl text-foreground/80 leading-relaxed font-serif italic mb-8">
            {story.excerpt}
          </p>
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            {paragraphs.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </article>
      </Section>
    </>
  );
}
