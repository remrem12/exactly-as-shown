export interface CoffeeBean {
  id: number;
  name: string;
  variety: string;
  origin: string;
  altitude: string;
  process: string;
  flavorNotes: string[];
  description: string;
  roastLevel: "Light" | "Medium" | "Dark";
}

export const coffeeBeans: CoffeeBean[] = [
  {
    id: 1,
    name: "Panay Robusta",
    variety: "Robusta",
    origin: "Leon, Iloilo",
    altitude: "200-400 masl",
    process: "Natural / Dry",
    flavorNotes: ["Chocolate", "Nutty", "Bold"],
    description: "A full-bodied Robusta grown in the highlands of Leon. Known for its strong, earthy flavor that's perfect for traditional Filipino coffee preparations.",
    roastLevel: "Dark",
  },
  {
    id: 2,
    name: "Iloilo Liberica",
    variety: "Liberica (Barako)",
    origin: "Cabatuan, Iloilo",
    altitude: "100-300 masl",
    process: "Washed",
    flavorNotes: ["Fruity", "Smoky", "Floral"],
    description: "A rare Liberica variety from Cabatuan. Its distinctive bold and fruity profile makes it a unique representation of Western Visayan coffee culture.",
    roastLevel: "Medium",
  },
  {
    id: 3,
    name: "Visayan Arabica",
    variety: "Arabica",
    origin: "Igbaras, Iloilo",
    altitude: "600-900 masl",
    process: "Honey",
    flavorNotes: ["Citrus", "Caramel", "Sweet"],
    description: "Grown in the mountainous terrain of Igbaras, this Arabica offers a bright, sweet cup with delicate citrus notes and a caramel finish.",
    roastLevel: "Light",
  },
  {
    id: 4,
    name: "Tigbauan Heritage Blend",
    variety: "Robusta-Liberica Blend",
    origin: "Tigbauan, Iloilo",
    altitude: "150-350 masl",
    process: "Natural",
    flavorNotes: ["Dark Chocolate", "Spice", "Tobacco"],
    description: "A traditional blend combining the body of Robusta with the complexity of Liberica. A taste of Ilonggo coffee heritage in every cup.",
    roastLevel: "Dark",
  },
  {
    id: 5,
    name: "Maasin Mountain Arabica",
    variety: "Arabica",
    origin: "Maasin, Iloilo",
    altitude: "700-1000 masl",
    process: "Washed",
    flavorNotes: ["Berry", "Honey", "Jasmine"],
    description: "Premium single-origin Arabica from the mountains of Maasin. A complex cup with bright berry acidity and a lingering jasmine finish.",
    roastLevel: "Light",
  },
];

export const beanVarieties = [...new Set(coffeeBeans.map(b => b.variety))];
export const roastLevels: ("Light" | "Medium" | "Dark")[] = ["Light", "Medium", "Dark"];
