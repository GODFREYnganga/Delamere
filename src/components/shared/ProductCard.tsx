import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <Badge>{product.category}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-brand-dark">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-medium text-brand-green">
              {product.price}
            </span>
            {product.priceNote && (
              <span className="ml-1 text-xs text-foreground/40">
                {product.priceNote}
              </span>
            )}
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
