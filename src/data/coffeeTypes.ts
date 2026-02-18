export interface CoffeeType {
  id: number;
  name: string;
  category: "Hot" | "Cold" | "Specialty";
  description: string;
  ingredients: string[];
  origin: string;
}

export const coffeeTypes: CoffeeType[] = [
  {
    id: 1,
    name: "Espresso",
    category: "Hot",
    description: "A concentrated shot of coffee brewed by forcing hot water through finely-ground beans. The foundation of many coffee drinks.",
    ingredients: ["Finely ground coffee", "Hot water (90-96°C)"],
    origin: "Italy",
  },
  {
    id: 2,
    name: "Cappuccino",
    category: "Hot",
    description: "Equal parts espresso, steamed milk, and milk foam. Named after the Capuchin friars, referring to the color of their habits.",
    ingredients: ["Espresso", "Steamed milk", "Milk foam"],
    origin: "Italy",
  },
  {
    id: 3,
    name: "Café Latte",
    category: "Hot",
    description: "Espresso with a generous amount of steamed milk and a thin layer of foam. Smooth, creamy, and perfect for latte art.",
    ingredients: ["Espresso", "Steamed milk", "Light foam"],
    origin: "Italy / America",
  },
  {
    id: 4,
    name: "Americano",
    category: "Hot",
    description: "Espresso diluted with hot water, creating a coffee similar in strength to drip coffee but with a different flavor profile.",
    ingredients: ["Espresso", "Hot water"],
    origin: "America / Italy",
  },
  {
    id: 5,
    name: "Cold Brew",
    category: "Cold",
    description: "Coffee brewed with cold water over 12-24 hours. Results in a smooth, naturally sweet concentrate with low acidity.",
    ingredients: ["Coarsely ground coffee", "Cold water", "Time"],
    origin: "Japan / Netherlands",
  },
  {
    id: 6,
    name: "Iced Latte",
    category: "Cold",
    description: "Espresso poured over ice with cold milk. Refreshing and versatile — perfect for warm Iloilo afternoons.",
    ingredients: ["Espresso", "Cold milk", "Ice"],
    origin: "Modern",
  },
  {
    id: 7,
    name: "Affogato",
    category: "Specialty",
    description: "A scoop of vanilla gelato or ice cream 'drowned' in a shot of hot espresso. A perfect dessert-coffee hybrid.",
    ingredients: ["Espresso", "Vanilla gelato"],
    origin: "Italy",
  },
  {
    id: 8,
    name: "Kapeng Barako",
    category: "Specialty",
    description: "A bold Filipino coffee made from Liberica beans. Known for its strong aroma and distinctive taste — a staple in Philippine coffee culture.",
    ingredients: ["Liberica beans", "Hot water", "Sugar (optional)"],
    origin: "Philippines",
  },
  {
    id: 9,
    name: "Tsokolate",
    category: "Specialty",
    description: "Traditional Filipino hot chocolate made from tablea (cacao tablets). Often paired with coffee for a mocha-like experience.",
    ingredients: ["Tablea (cacao tablets)", "Hot water or milk", "Sugar"],
    origin: "Philippines",
  },
];

export const coffeeCategories: ("Hot" | "Cold" | "Specialty")[] = ["Hot", "Cold", "Specialty"];
