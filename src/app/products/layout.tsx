import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Marketplace | Delamere Ranch",
  description:
    "Shop premium dairy products, pedigree livestock, hay, silage, feeds, and agricultural supplies from Delamere Ranch, Naivasha.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
