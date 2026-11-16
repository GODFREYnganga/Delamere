"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ProductCard } from "@/components/shared/ProductCard";
import { products, productCategories } from "@/data/products";
import { cn } from "@/lib/utils";
import { images } from "@/data/images";

export default function ProductsPage() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <>
      <PageHero
        eyebrow="Marketplace"
        title="Premium Ranch Products"
        description="Farm-fresh dairy, pedigree livestock, feeds, and agricultural supplies — delivered with the Delamere standard."
        image={images.freshMilk}
      />

      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {productCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-sm px-4 py-2 text-sm font-medium transition-all",
                category === cat
                  ? "bg-brand-green text-brand-cream"
                  : "bg-brand-green/5 text-brand-green hover:bg-brand-green/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product, i) => (
            <AnimatedSection key={product.slug} delay={i * 0.05}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </Section>
    </>
  );
}
