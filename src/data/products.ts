import { images } from "./images";

export interface Product {
  slug: string;
  name: string;
  category: string;
  price: string;
  priceNote?: string;
  description: string;
  longDescription: string;
  image: string;
  specs: string[];
  certifications?: string[];
  featured?: boolean;
}

export const productCategories = [
  "All",
  "Dairy",
  "Livestock",
  "Feeds",
  "Hay & Silage",
  "Seeds",
  "Supplies",
];

export const products: Product[] = [
  {
    slug: "premium-fresh-milk",
    name: "Premium Fresh Milk",
    category: "Dairy",
    price: "KES 180",
    priceNote: "per litre",
    description:
      "Farm-fresh, full-cream milk from our pedigree Holstein-Friesian herd.",
    longDescription:
      "Our premium fresh milk is produced daily from grass-fed Holstein-Friesian cattle grazing on the fertile plains of Naivasha. Cold-chain delivered within hours of milking, ensuring exceptional freshness, rich flavour, and superior nutritional value trusted by Kenya's finest hotels and families.",
    image: images.freshMilk,
    specs: [
      "3.5% minimum fat content",
      "Daily production: 25,000+ litres",
      "Cold-chain delivery available",
      "Shelf life: 5 days refrigerated",
    ],
    certifications: ["KEBS Certified", "HACCP Compliant"],
    featured: true,
  },
  {
    slug: "aged-farm-cheese",
    name: "Aged Farm Cheese",
    category: "Dairy",
    price: "KES 1,200",
    priceNote: "per kg",
    description:
      "Artisanal cheddar and gouda crafted in our on-site creamery.",
    longDescription:
      "Handcrafted in small batches at our Naivasha creamery, Delamere aged cheeses develop complex flavours over 6–12 months of careful maturation. Made from the same premium milk that defines our dairy reputation.",
    image: images.agedCheese,
    specs: [
      "Aged 6–12 months",
      "Available: Cheddar, Gouda, Farmhouse",
      "Minimum order: 500g",
    ],
    certifications: ["KEBS Certified"],
    featured: true,
  },
  {
    slug: "holstein-heifers",
    name: "Holstein-Friesian Heifers",
    category: "Livestock",
    price: "From KES 180,000",
    description:
      "Pedigree dairy heifers with documented bloodlines and health records.",
    longDescription:
      "Our Holstein-Friesian heifers represent decades of selective breeding for milk yield, temperament, and disease resistance. Each animal comes with complete pedigree documentation, veterinary health certification, and optional financing arrangements.",
    image: images.heroCattleGrazing,
    specs: [
      "Average daily yield: 28–35 litres",
      "Age: 18–24 months",
      "Full pedigree documentation",
      "Veterinary health certificate included",
    ],
    certifications: ["KVB Registered", "Pedigree Certified"],
    featured: true,
  },
  {
    slug: "boran-bulls",
    name: "Boran Stud Bulls",
    category: "Livestock",
    price: "From KES 250,000",
    description:
      "Premium Boran bulls bred for drought resilience and meat quality.",
    longDescription:
      "The Boran breed is East Africa's finest indigenous cattle. Our stud bulls are selected for genetic superiority, adaptability to Kenyan conditions, and exceptional meat quality — ideal for commercial breeding programmes.",
    image: images.boranCattle,
    specs: [
      "Proven breeding record",
      "Adapted to East African climate",
      "Weight: 600–900 kg",
      "Semen export available",
    ],
    certifications: ["KVB Registered"],
    featured: true,
  },
  {
    slug: "premium-hay-bales",
    name: "Premium Rhodes Hay",
    category: "Hay & Silage",
    price: "KES 450",
    priceNote: "per bale",
    description:
      "Sun-cured Rhodes grass hay, nutrient-tested and barn-stored.",
    longDescription:
      "Grown and harvested on Delamere's own pastures, our Rhodes hay is sun-cured to optimal moisture levels, nutrient-tested, and stored in climate-controlled barns. Trusted by dairy farms across the Rift Valley.",
    image: images.hayField,
    specs: [
      "Protein content: 8–12%",
      "Bale weight: ~25 kg",
      "Bulk orders: 500+ bales",
      "Delivery across Central Kenya",
    ],
    featured: false,
  },
  {
    slug: "maize-silage",
    name: "Maize Silage",
    category: "Hay & Silage",
    price: "KES 3,500",
    priceNote: "per tonne",
    description:
      "High-energy maize silage fermented to peak nutritional value.",
    longDescription:
      "Our maize silage is harvested at optimal maturity, precision-chopped, and ensiled using proven fermentation techniques. A high-energy feed essential for maximising milk production in commercial dairy operations.",
    image: images.silageHarvest,
    specs: [
      "Dry matter: 30–35%",
      "Energy: 10+ MJ/kg DM",
      "Fermented in airtight bunkers",
      "Available year-round",
    ],
    featured: false,
  },
  {
    slug: "dairy-concentrate-feed",
    name: "Dairy Concentrate Feed",
    category: "Feeds",
    price: "KES 2,800",
    priceNote: "per 70kg bag",
    description:
      "Scientifically formulated concentrate for high-yield dairy cows.",
    longDescription:
      "Developed by our in-house nutritionists, this concentrate feed is balanced for lactating dairy cattle with optimal protein, energy, and mineral ratios. Proven to increase milk yield by 15–20% when combined with quality forage.",
    image: images.animalFeed,
    specs: [
      "Crude protein: 18%",
      "Fortified with minerals & vitamins",
      "Feeding guide included",
      "Bulk pricing available",
    ],
    certifications: ["KEBS Certified"],
    featured: false,
  },
  {
    slug: "lucerne-seeds",
    name: "Certified Lucerne Seeds",
    category: "Seeds",
    price: "KES 1,500",
    priceNote: "per kg",
    description:
      "High-germination lucerne seed for premium pasture establishment.",
    longDescription:
      "Our certified lucerne seeds are selected for drought tolerance and high protein content, ideal for establishing productive pastures in the Rift Valley and beyond.",
    image: images.lucerneSeeds,
    specs: [
      "Germination rate: 95%+",
      "Protein-rich forage variety",
      "Planting guide included",
      "Minimum order: 5 kg",
    ],
    featured: false,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}
