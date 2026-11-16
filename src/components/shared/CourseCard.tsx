import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/academy/${course.slug}`}
      className="group flex flex-col overflow-hidden border border-brand-green/10 bg-white transition-all duration-500 hover:border-brand-gold/30 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={course.image}
          alt={course.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <Badge>{course.category}</Badge>
          <span className="flex items-center gap-1 text-xs text-foreground/40">
            <BookOpen size={12} />
            {course.format}
          </span>
        </div>
        <h3 className="mt-3 text-xl text-brand-dark">{course.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
          {course.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-brand-green/5 pt-4">
          <div>
            <span className="text-lg font-medium text-brand-green">
              {course.price}
            </span>
            <span className="ml-2 text-xs text-foreground/40">
              {course.duration}
            </span>
          </div>
          <ArrowRight
            size={18}
            className="text-brand-gold transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
