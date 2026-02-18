export interface CoffeeShop {
  id: number;
  name: string;
  district: string;
  address: string;
  description: string;
  specialties: string[];
  hours: string;
  priceRange: string;
  rating: number;
}

export const coffeeShops: CoffeeShop[] = [
  {
    id: 1,
    name: "The Coffee Lab Iloilo",
    district: "Smallville",
    address: "Smallville Complex, Mandurriao, Iloilo City",
    description: "A specialty coffee shop known for its single-origin pour-overs and cozy industrial interior. A haven for coffee enthusiasts seeking quality brews.",
    specialties: ["Pour Over", "Cold Brew", "Single Origin"],
    hours: "7:00 AM - 10:00 PM",
    priceRange: "₱120 - ₱250",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Kape ni Juan",
    district: "Jaro",
    address: "Luna St, Jaro, Iloilo City",
    description: "Proudly serving locally sourced Ilonggo coffee beans. This cozy café celebrates Filipino coffee culture with traditional and modern brews.",
    specialties: ["Barako", "Kapeng Tablea", "Iced Kape"],
    hours: "6:00 AM - 9:00 PM",
    priceRange: "₱60 - ₱150",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Merge Café",
    district: "City Proper",
    address: "General Luna St, Iloilo City Proper",
    description: "A trendy café blending art, culture, and exceptional coffee in the heart of Iloilo's heritage district. Features rotating local art exhibits.",
    specialties: ["Espresso", "Matcha Latte", "Pastries"],
    hours: "8:00 AM - 11:00 PM",
    priceRange: "₱100 - ₱220",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Con-Grind Coffee",
    district: "Molo",
    address: "Avanceña St, Molo, Iloilo City",
    description: "Hidden gem in the Molo district offering fresh-roasted beans and homestyle pastries. Known for its warm, welcoming atmosphere.",
    specialties: ["French Press", "Cappuccino", "Banana Bread"],
    hours: "7:00 AM - 8:00 PM",
    priceRange: "₱80 - ₱180",
    rating: 4.4,
  },
  {
    id: 5,
    name: "Drip & Draft",
    district: "Mandurriao",
    address: "Benigno Aquino Ave, Mandurriao, Iloilo City",
    description: "Modern café combining craft coffee and craft beer. A favorite hangout for young professionals with its sleek minimalist design.",
    specialties: ["Flat White", "Nitro Cold Brew", "Affogato"],
    hours: "9:00 AM - 12:00 MN",
    priceRange: "₱130 - ₱280",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Ilonggo Brews",
    district: "La Paz",
    address: "Rizal St, La Paz, Iloilo City",
    description: "A community-driven café supporting local farmers and roasters. Every cup tells the story of Ilonggo coffee heritage.",
    specialties: ["Liberica", "Robusta Blend", "Tsokolate"],
    hours: "6:30 AM - 8:30 PM",
    priceRange: "₱50 - ₱130",
    rating: 4.3,
  },
];

export const districts = [...new Set(coffeeShops.map(s => s.district))];
