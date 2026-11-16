import { images } from "./images";

export interface MapZone {
  id: string;
  name: string;
  type: string;
  description: string;
  position: { x: number; y: number };
  image: string;
}

export const ranchZones: MapZone[] = [
  {
    id: "dairy-operations",
    name: "Dairy Operations",
    type: "Production",
    description:
      "State-of-the-art milking parlour processing 25,000+ litres daily from our Holstein-Friesian herd.",
    position: { x: 35, y: 40 },
    image: images.dairyOperations,
  },
  {
    id: "grazing-plains",
    name: "Open Grazing Plains",
    type: "Grazing",
    description:
      "8,500 acres of rotational grazing land where Boran and Holstein cattle roam freely.",
    position: { x: 60, y: 55 },
    image: images.heroCattleGrazing,
  },
  {
    id: "visitor-center",
    name: "Visitor Center",
    type: "Tourism",
    description:
      "Welcome centre with exhibition hall, gift shop, and tour departure point.",
    position: { x: 25, y: 65 },
    image: images.farmHeritage,
  },
  {
    id: "accommodation",
    name: "Lakeside Lodge",
    type: "Accommodation",
    description:
      "Premium ranch accommodation with lake views, farm-to-table dining, and stargazing decks.",
    position: { x: 15, y: 45 },
    image: images.landscapeSunrise,
  },
  {
    id: "training-facility",
    name: "Farm Academy",
    type: "Education",
    description:
      "Classrooms, demonstration plots, and workshop spaces for Delamere Academy programmes.",
    position: { x: 50, y: 30 },
    image: images.educationClassroom,
  },
  {
    id: "event-grounds",
    name: "Event Grounds",
    type: "Events",
    description:
      "Outdoor amphitheatre and conference facilities for corporate retreats and celebrations.",
    position: { x: 70, y: 35 },
    image: images.corporateRetreat,
  },
  {
    id: "feed-production",
    name: "Feed Production",
    type: "Production",
    description:
      "Silage bunkers, hay barns, and feed mill producing nutrition for our entire herd.",
    position: { x: 45, y: 60 },
    image: images.silageHarvest,
  },
  {
    id: "breeding-center",
    name: "Breeding Center",
    type: "Livestock",
    description:
      "Stud facilities for Holstein-Friesian and Boran breeding programmes with veterinary lab.",
    position: { x: 75, y: 50 },
    image: images.boranCattle,
  },
];
