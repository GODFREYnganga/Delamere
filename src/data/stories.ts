import { images } from "./images";

export interface Story {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const stories: Story[] = [
  {
    slug: "fifty-years-of-excellence",
    title: "Fifty Years of Ranching Excellence",
    category: "Heritage",
    excerpt:
      "From a single homestead to East Africa's most prestigious ranch — the Delamere story spans generations of dedication to the land.",
    content:
      "In the shadow of the Rift Valley escarpment, where Lake Naivasha mirrors the morning sky, Delamere Ranch began as a vision of agricultural excellence. Over five decades, that vision has grown into 12,000 acres of meticulously managed ranchland, home to thousands of pedigree cattle and a dairy operation that sets the standard for East Africa.\n\nWhat began with a handful of cattle and an unwavering belief in Kenyan agriculture has evolved into a multi-faceted enterprise — dairy, livestock breeding, tourism, education, and sustainable land management — all united by a single principle: respect for the land and the animals that sustain us.",
    image: images.heroCattleGrazing,
    author: "Delamere Editorial",
    date: "2025-11-15",
    readTime: "6 min",
    featured: true,
  },
  {
    slug: "science-of-silage",
    title: "The Science Behind Our Silage",
    category: "Farming Tips",
    excerpt:
      "How Delamere produces silage that powers 25,000 litres of milk daily — and how you can apply these techniques on your farm.",
    content:
      "Silage production is both an art and a science. At Delamere, our nutrition team harvests maize at precisely 32–35% dry matter, chops to 15–20mm theoretical length, and packs into airtight bunkers within four hours of cutting.\n\nThe result? A high-energy feed with consistent nutritional value year-round, reducing our dependence on purchased concentrates by 30% and ensuring our cows receive optimal nutrition even during dry seasons.",
    image: images.silageHarvest,
    author: "Dr. James Mwangi",
    date: "2025-10-28",
    readTime: "4 min",
    featured: true,
  },
  {
    slug: "boran-breed-spotlight",
    title: "Why the Boran Remains East Africa's Finest",
    category: "Livestock",
    excerpt:
      "A deep dive into the Boran breed's unique genetics, drought resilience, and why Delamere has invested decades in its preservation.",
    content:
      "The Boran cattle breed is indigenous to East Africa, evolved over centuries to thrive in harsh semi-arid conditions. At Delamere, we've maintained a stud herd of over 800 Boran cattle, selecting for genetic traits that combine drought resilience with superior meat quality.\n\nOur breeding programme has produced bulls exported to ranches across Kenya, Tanzania, and Uganda — a testament to the breed's enduring value in modern agriculture.",
    image: images.boranCattle,
    author: "Sarah Wanjiku",
    date: "2025-09-12",
    readTime: "5 min",
    featured: false,
  },
  {
    slug: "water-stewardship-naivasha",
    title: "Water Stewardship on the Rift Valley",
    category: "Sustainability",
    excerpt:
      "How Delamere conserves 40% more water than industry average through innovative irrigation and recycling systems.",
    content:
      "Water is the lifeblood of Naivasha's agricultural community. At Delamere, we've invested in precision irrigation, rainwater harvesting, and greywater recycling systems that reduce our freshwater consumption by 40% compared to conventional ranching operations.\n\nOur commitment extends beyond our fence lines — we actively participate in the Lake Naivasha Basin Management Plan, working with neighbouring farms to protect this precious ecosystem.",
    image: images.waterConservation,
    author: "Delamere Sustainability Team",
    date: "2025-08-20",
    readTime: "7 min",
    featured: true,
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}

export function getFeaturedStories() {
  return stories.filter((s) => s.featured);
}
