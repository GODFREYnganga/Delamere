import { Section, SectionHeader } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ProductCard } from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedProducts } from "@/data/products";

export function ProductsPreview() {
  const featured = getFeaturedProducts();

  return (
    <Section dark id="products">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Marketplace"
          title="Premium Ranch Products"
          description="From farm-fresh dairy to pedigree livestock — every product carries the Delamere standard of excellence."
          light
          align="center"
        />
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featured.map((product, i) => (
          <AnimatedSection key={product.slug} delay={i * 0.1}>
            <ProductCard product={product} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-12 text-center">
        <Button href="/products" variant="gold" size="lg">
          View All Products
        </Button>
      </AnimatedSection>
    </Section>
  );
}
