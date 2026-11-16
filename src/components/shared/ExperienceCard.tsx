import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Experience } from "@/data/experiences";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Link
      href={`/visits#${experience.slug}`}
      className="group relative flex min-h-[400px] flex-col justify-end overflow-hidden"
    >
      <Image
        src={experience.image}
        alt={experience.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="overlay-dark absolute inset-0" />
      <div className="relative z-10 p-6 md:p-8">
        <Badge variant="outline" className="mb-3">
          {experience.category}
        </Badge>
        <h3 className="text-2xl text-brand-cream">{experience.name}</h3>
        <p className="mt-2 text-sm text-brand-cream/70 line-clamp-2">
          {experience.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-brand-cream/60">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {experience.duration}
            </span>
            <span className="font-medium text-brand-gold">
              {experience.price}
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
