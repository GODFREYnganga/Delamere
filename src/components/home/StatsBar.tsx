"use client";

import { siteConfig } from "@/data/site";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function StatsBar() {
  return (
    <section className="bg-brand-green py-12">
      <div className="container-wide px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {siteConfig.stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-serif text-3xl text-brand-gold md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm uppercase tracking-wider text-brand-cream/60">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
