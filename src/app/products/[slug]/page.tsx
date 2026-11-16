import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, MessageCircle } from "lucide-react";
import { products, getProduct } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { productInquiry } from "@/lib/whatsapp";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Delamere Ranch`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <section className="bg-brand-dark pt-24">
        <div className="container-wide section-padding !pt-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center py-8">
              <Badge className="w-fit mb-4">{product.category}</Badge>
              <h1 className="text-4xl text-brand-cream md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-brand-cream/70 leading-relaxed">
                {product.longDescription}
              </p>
              <div className="mt-6">
                <span className="font-serif text-3xl text-brand-gold">
                  {product.price}
                </span>
                {product.priceNote && (
                  <span className="ml-2 text-brand-cream/50">
                    {product.priceNote}
                  </span>
                )}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href={productInquiry(product.name)}
                  variant="gold"
                  size="lg"
                  external
                >
                  <MessageCircle size={18} />
                  Inquire via WhatsApp
                </Button>
                <Button href="#reserve" variant="outline" size="lg">
                  Reserve / Purchase
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-brand-dark mb-6">Specifications</h2>
            <ul className="space-y-3">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-3 text-foreground/70">
                  <Check size={18} className="text-brand-gold mt-0.5 shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>
            {product.certifications && (
              <div className="mt-8">
                <h3 className="text-lg text-brand-dark mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert) => (
                    <Badge key={cert} variant="gold">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div id="reserve">
            <InquiryForm
              type="financing"
              title="Reserve or Request Delivery"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
