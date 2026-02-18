export interface BrewingGuide {
  id: number;
  method: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  brewTime: string;
  equipment: string[];
  steps: string[];
  tips: string[];
  bestFor: string;
}

export const brewingGuides: BrewingGuide[] = [
  {
    id: 1,
    method: "Pour Over (V60)",
    difficulty: "Intermediate",
    brewTime: "3-4 minutes",
    equipment: ["V60 dripper", "Paper filter", "Gooseneck kettle", "Scale", "Timer"],
    steps: [
      "Boil water to 92-96°C. Grind 15g of coffee medium-fine.",
      "Place filter in V60 and rinse with hot water. Discard rinse water.",
      "Add coffee grounds and create a small well in the center.",
      "Pour 30ml water to bloom for 30 seconds.",
      "Slowly pour remaining water in concentric circles to reach 250ml total.",
      "Let it drip through completely. Total brew time: 3-4 minutes.",
    ],
    tips: ["Use freshly roasted beans", "Consistent pour speed is key", "Water quality matters"],
    bestFor: "Highlighting single-origin flavor profiles",
  },
  {
    id: 2,
    method: "French Press",
    difficulty: "Beginner",
    brewTime: "4 minutes",
    equipment: ["French press", "Kettle", "Coarse grinder"],
    steps: [
      "Boil water and let cool to ~93°C. Coarsely grind 30g of coffee.",
      "Add grounds to French press.",
      "Pour 500ml hot water over grounds.",
      "Stir gently and place the lid on (don't press yet).",
      "Steep for 4 minutes.",
      "Press plunger down slowly and serve immediately.",
    ],
    tips: ["Don't let it steep too long", "Use a coarse grind to avoid sludge", "Preheat the press"],
    bestFor: "Full-bodied, rich coffee experience",
  },
  {
    id: 3,
    method: "Cold Brew",
    difficulty: "Beginner",
    brewTime: "12-24 hours",
    equipment: ["Mason jar or pitcher", "Filter/cheesecloth", "Coarse grinder"],
    steps: [
      "Coarsely grind 100g of coffee beans.",
      "Combine grounds with 700ml cold filtered water in jar.",
      "Stir gently to ensure all grounds are saturated.",
      "Cover and refrigerate for 12-24 hours.",
      "Strain through a fine filter or cheesecloth.",
      "Dilute concentrate with water or milk to taste. Serve over ice.",
    ],
    tips: ["Longer steep = stronger flavor", "Makes a concentrate, dilute to preference", "Keeps for up to 2 weeks refrigerated"],
    bestFor: "Smooth, low-acidity iced coffee",
  },
  {
    id: 4,
    method: "Moka Pot",
    difficulty: "Intermediate",
    brewTime: "5-7 minutes",
    equipment: ["Moka pot", "Stove", "Fine-medium grinder"],
    steps: [
      "Fill the bottom chamber with hot water up to the valve.",
      "Fill the filter basket with fine-medium ground coffee. Level but don't tamp.",
      "Assemble the Moka pot and place on medium heat.",
      "Coffee will begin to flow into the upper chamber.",
      "When you hear a hissing sound, remove from heat.",
      "Serve immediately. Can be enjoyed as-is or with hot water/milk.",
    ],
    tips: ["Start with hot water to avoid burning", "Don't tamp the grounds", "Remove from heat early for best flavor"],
    bestFor: "Espresso-style coffee without an espresso machine",
  },
];
