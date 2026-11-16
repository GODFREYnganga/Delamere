import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-sm",
        variant === "default" && "bg-brand-green/10 text-brand-green",
        variant === "gold" && "bg-brand-gold/15 text-brand-earth",
        variant === "outline" && "border border-brand-cream/30 text-brand-cream",
        className
      )}
    >
      {children}
    </span>
  );
}
