import { useState } from "react";
import Layout from "@/components/Layout";
import { coffeeBeans, beanVarieties, roastLevels } from "@/data/coffeeBeans";
import beansImg from "@/assets/beans-bg.jpg";

const CoffeeBeans = () => {
  const [selectedVariety, setSelectedVariety] = useState("All");
  const [selectedRoast, setSelectedRoast] = useState("All");

  const filtered = coffeeBeans.filter((bean) => {
    const matchVariety = selectedVariety === "All" || bean.variety === selectedVariety;
    const matchRoast = selectedRoast === "All" || bean.roastLevel === selectedRoast;
    return matchVariety && matchRoast;
  });

  const roastColor = (level: string) => {
    if (level === "Light") return "bg-warm-gold/20 text-warm-gold";
    if (level === "Medium") return "bg-coffee-medium/20 text-coffee-medium";
    return "bg-coffee-dark/20 text-coffee-dark";
  };

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-20 text-center overflow-hidden">
        <img src={beansImg} alt="Coffee beans" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Local Coffee Beans
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Discover the unique varieties grown in Iloilo's highlands and lowlands.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-card border-b border-border">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-4">
          <div className="flex gap-2 flex-wrap">
            <span className="text-sm font-medium text-foreground self-center mr-2">Variety:</span>
            {["All", ...beanVarieties].map((v) => (
              <button
                key={v}
                onClick={() => setSelectedVariety(v)}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  selectedVariety === v
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/20"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="text-sm font-medium text-foreground self-center mr-2">Roast:</span>
            {["All", ...roastLevels].map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRoast(r)}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  selectedRoast === r
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/20"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bean cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((bean) => (
              <div key={bean.id} className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl font-semibold text-card-foreground">{bean.name}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${roastColor(bean.roastLevel)}`}>
                    {bean.roastLevel} Roast
                  </span>
                </div>
                <p className="text-sm text-accent font-medium mb-1">{bean.variety}</p>
                <p className="text-xs text-muted-foreground mb-3">
                  {bean.origin} · {bean.altitude} · {bean.process} Process
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{bean.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {bean.flavorNotes.map((note) => (
                    <span key={note} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoffeeBeans;
