import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className, id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        dark ? "bg-brand-dark text-brand-cream" : "bg-background text-foreground",
        className
      )}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-medium uppercase tracking-[0.2em]",
            light ? "text-brand-gold" : "text-brand-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl leading-tight",
          light ? "text-brand-cream" : "text-brand-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-brand-cream/70" : "text-foreground/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
