import { images } from "./images";

export interface Course {
  slug: string;
  name: string;
  category: string;
  duration: string;
  format: string;
  price: string;
  description: string;
  longDescription: string;
  image: string;
  modules: string[];
  outcomes: string[];
  featured?: boolean;
}

export const courses: Course[] = [
  {
    slug: "modern-dairy-farming",
    name: "Modern Dairy Farming",
    category: "Dairy",
    duration: "8 weeks",
    format: "Online + 2-day workshop",
    price: "KES 25,000",
    description:
      "Master commercial dairy operations from herd management to milk processing.",
    longDescription:
      "This flagship course covers every aspect of modern dairy farming — breed selection, nutrition, milking systems, disease management, and profitability analysis. Developed from 50 years of Delamere's operational expertise.",
    image: images.dairyOperations,
    modules: [
      "Herd genetics & breeding",
      "Nutrition & feed formulation",
      "Milking systems & hygiene",
      "Disease prevention & biosecurity",
      "Financial planning & ROI",
    ],
    outcomes: [
      "Delamere Academy Certificate",
      "Farm assessment toolkit",
      "Mentorship session (1 hour)",
    ],
    featured: true,
  },
  {
    slug: "livestock-management",
    name: "Livestock Management",
    category: "Livestock",
    duration: "6 weeks",
    format: "Online",
    price: "KES 18,000",
    description:
      "Comprehensive training in cattle health, breeding, and pasture management.",
    longDescription:
      "Learn the science and practice of livestock management from Delamere's veterinary and breeding teams. Covers health protocols, breeding programmes, pasture rotation, and record-keeping for commercial operations.",
    image: images.boranCattle,
    modules: [
      "Animal health & welfare",
      "Breeding programme design",
      "Pasture management",
      "Record keeping & traceability",
      "Market access strategies",
    ],
    outcomes: [
      "Delamere Academy Certificate",
      "Health protocol templates",
      "Breeding calculator tool",
    ],
    featured: true,
  },
  {
    slug: "silage-production",
    name: "Silage Production Mastery",
    category: "Feeds",
    duration: "3 weeks",
    format: "Online + 1-day practical",
    price: "KES 12,000",
    description:
      "Learn professional silage production techniques for year-round feed security.",
    longDescription:
      "Silage is the backbone of profitable dairy farming. This course teaches harvest timing, chop length, bunker management, and quality testing — skills directly applied on Delamere's 12,000-acre operation.",
    image: images.silageHarvest,
    modules: [
      "Crop selection & timing",
      "Harvest & chop specifications",
      "Ensiling techniques",
      "Quality testing & analysis",
      "Feed-out management",
    ],
    outcomes: [
      "Delamere Academy Certificate",
      "Silage quality checklist",
      "Practical session at ranch",
    ],
    featured: false,
  },
  {
    slug: "sustainable-ranching",
    name: "Sustainable Ranching",
    category: "Sustainability",
    duration: "4 weeks",
    format: "Online",
    price: "KES 15,000",
    description:
      "ESG-aligned ranching practices for environmental stewardship and profitability.",
    longDescription:
      "Sustainability and profitability are not opposing forces. Learn rotational grazing, water conservation, renewable energy integration, and carbon-aware farming from Delamere's sustainability team.",
    image: images.forestAerial,
    modules: [
      "Rotational grazing systems",
      "Water & soil conservation",
      "Renewable energy on farms",
      "Carbon footprint reduction",
      "ESG reporting basics",
    ],
    outcomes: [
      "Delamere Academy Certificate",
      "Sustainability audit template",
      "Case study library access",
    ],
    featured: true,
  },
  {
    slug: "fodder-farming",
    name: "Fodder Farming",
    category: "Feeds",
    duration: "3 weeks",
    format: "Online",
    price: "KES 10,000",
    description:
      "Grow high-quality fodder crops to reduce feed costs and boost nutrition.",
    longDescription:
      "Reduce your feed bill by growing premium fodder on your own land. This practical course covers lucerne, Rhodes grass, and maize for silage — crop establishment, irrigation, and harvest management.",
    image: images.hayField,
    modules: [
      "Fodder crop selection",
      "Land preparation & planting",
      "Irrigation & fertilisation",
      "Harvest & storage",
      "Cost-benefit analysis",
    ],
    outcomes: [
      "Delamere Academy Certificate",
      "Crop planning spreadsheet",
      "Seed sourcing guide",
    ],
    featured: false,
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function getFeaturedCourses() {
  return courses.filter((c) => c.featured);
}
