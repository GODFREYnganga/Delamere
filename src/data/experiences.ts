import { images } from "./images";

export interface Experience {
  slug: string;
  name: string;
  category: string;
  duration: string;
  price: string;
  priceNote?: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
  includes: string[];
  featured?: boolean;
}

export const experiences: Experience[] = [
  {
    slug: "signature-ranch-tour",
    name: "Signature Ranch Tour",
    category: "Tours",
    duration: "3 hours",
    price: "KES 3,500",
    priceNote: "per person",
    description:
      "A guided journey through Delamere's dairy operations, grazing lands, and heritage sites.",
    longDescription:
      "Experience the full scale of Delamere Ranch on our signature guided tour. From the milking parlour to the open savanna where our Boran cattle graze, this immersive journey reveals the craftsmanship behind Kenya's most prestigious ranch.",
    image: images.heroCattleGrazing,
    highlights: [
      "Dairy operations walkthrough",
      "Pedigree cattle viewing",
      "Scenic Naivasha landscapes",
      "Heritage storytelling",
    ],
    includes: ["Expert guide", "Refreshments", "Photo opportunities"],
    featured: true,
  },
  {
    slug: "farm-to-table-weekend",
    name: "Farm-to-Table Weekend",
    category: "Experiences",
    duration: "2 days",
    price: "KES 18,000",
    priceNote: "per person",
    description:
      "An immersive weekend of ranch life, gourmet dining, and lakeside relaxation.",
    longDescription:
      "Spend a weekend immersed in ranch life. Harvest fresh produce, learn cheese-making, enjoy a chef-prepared farm-to-table dinner under the stars, and wake to sunrise over Lake Naivasha.",
    image: images.farmHeritage,
    highlights: [
      "Hands-on farm activities",
      "Gourmet farm-to-table dinner",
      "Lakeside accommodation",
      "Sunrise cattle drive",
    ],
    includes: [
      "1 night accommodation",
      "All meals",
      "Activities & guide",
      "Transport within ranch",
    ],
    featured: true,
  },
  {
    slug: "school-educational-tour",
    name: "School Educational Tour",
    category: "Education",
    duration: "4 hours",
    price: "KES 1,500",
    priceNote: "per student",
    description:
      "Curriculum-aligned tours teaching sustainable agriculture and animal husbandry.",
    longDescription:
      "Designed for schools and youth groups, our educational tours bring agriculture to life. Students learn about dairy science, sustainable grazing, and the economics of modern ranching through interactive stations.",
    image: images.educationClassroom,
    highlights: [
      "Interactive learning stations",
      "Curriculum-aligned content",
      "Animal interaction (supervised)",
      "Take-home activity pack",
    ],
    includes: ["Educational guide", "Learning materials", "Light snack"],
    featured: false,
  },
  {
    slug: "photography-safari",
    name: "Photography Safari",
    category: "Tours",
    duration: "5 hours",
    price: "KES 5,000",
    priceNote: "per person",
    description:
      "Golden-hour access to Delamere's most photogenic landscapes and wildlife.",
    longDescription:
      "Designed for photographers and content creators, this exclusive tour provides golden-hour access to Delamere's most stunning vistas — from misty morning pastures to dramatic sunset silhouettes over the Rift Valley.",
    image: images.landscapeSunrise,
    highlights: [
      "Golden hour scheduling",
      "Exclusive access areas",
      "Wildlife & landscape shots",
      "Small group (max 6)",
    ],
    includes: ["Photography guide", "Transport", "Refreshments"],
    featured: true,
  },
  {
    slug: "horse-riding-trail",
    name: "Horse Riding Trail",
    category: "Adventure",
    duration: "2 hours",
    price: "KES 4,500",
    priceNote: "per person",
    description:
      "Scenic horseback trails through open grasslands and acacia woodlands.",
    longDescription:
      "Explore Delamere's vast landscapes on horseback. Our well-trained horses and experienced guides lead you through open grasslands, acacia woodlands, and along scenic ridges with panoramic views of Lake Naivasha.",
    image: images.horseRiding,
    highlights: [
      "Trained ranch horses",
      "All skill levels welcome",
      "Scenic trail routes",
      "Safety equipment provided",
    ],
    includes: ["Horse & tack", "Guide", "Safety briefing"],
    featured: false,
  },
  {
    slug: "corporate-retreat",
    name: "Corporate Retreat",
    category: "Corporate",
    duration: "Full day",
    price: "From KES 8,000",
    priceNote: "per person",
    description:
      "Team-building and strategy retreats in an inspiring ranch setting.",
    longDescription:
      "Host your next corporate retreat at Delamere. Our facilities accommodate teams of 10–100 with conference spaces, team-building activities, farm experiences, and gourmet catering in a setting that inspires fresh thinking.",
    image: images.corporateRetreat,
    highlights: [
      "Conference facilities",
      "Team-building activities",
      "Farm experience modules",
      "Custom catering menus",
    ],
    includes: [
      "Venue & AV equipment",
      "Facilitator",
      "Lunch & refreshments",
      "Ranch tour",
    ],
    featured: true,
  },
];

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug);
}

export function getFeaturedExperiences() {
  return experiences.filter((e) => e.featured);
}
