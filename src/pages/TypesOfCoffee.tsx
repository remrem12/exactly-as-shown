import { useState } from "react";
import Layout from "@/components/Layout";
import { coffeeTypes, coffeeCategories } from "@/data/coffeeTypes";
import { Globe } from "lucide-react";

const TypesOfCoffee = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = coffeeTypes.filter(
    (t) => selectedCategory === "All" || t.category === selectedCategory
  );

  return (
    <Layout>
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Types of Coffee
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            From classics to Filipino favorites — explore the world of coffee.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-card border-b border-border">
        <div className="container mx-auto px-4 flex gap-2 flex-wrap">
          {["All", ...coffeeCategories].map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === c
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((type) => (
              <div key={type.id} className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl font-semibold text-card-foreground">{type.name}</h3>
                  <span className="bg-accent/15 text-accent text-xs px-3 py-1 rounded-full font-medium">
                    {type.category}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-xs mb-3">
                  <Globe className="h-3 w-3" /> Origin: {type.origin}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-2">Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.ingredients.map((ing) => (
                      <span key={ing} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TypesOfCoffee;
