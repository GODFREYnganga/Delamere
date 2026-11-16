import Image from "next/image";
import { Badge } from "@/components/ui/Badge";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
}

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="overlay-dark absolute inset-0" />
      </div>
      <div className="relative z-10 section-padding w-full !pt-32">
        <div className="container-wide">
          {eyebrow && (
            <Badge variant="outline" className="mb-4">
              {eyebrow}
            </Badge>
          )}
          <h1 className="max-w-3xl text-4xl text-brand-cream md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg text-brand-cream/70">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
