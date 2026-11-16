import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Story } from "@/data/stories";

export function StoryCard({ story }: { story: Story }) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group flex flex-col overflow-hidden bg-white transition-all duration-500 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Badge className="w-fit">{story.category}</Badge>
        <h3 className="mt-3 text-xl text-brand-dark group-hover:text-brand-green transition-colors">
          {story.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60 line-clamp-2">
          {story.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-foreground/40">
          <span>
            {story.author} &middot; {story.readTime}
          </span>
          <ArrowRight
            size={16}
            className="text-brand-gold transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
