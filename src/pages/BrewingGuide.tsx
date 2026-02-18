import Layout from "@/components/Layout";
import { brewingGuides } from "@/data/brewingGuides";
import { Clock, ChefHat } from "lucide-react";

const difficultyColor = (d: string) => {
  if (d === "Beginner") return "bg-green-100 text-green-800";
  if (d === "Intermediate") return "bg-warm-gold/20 text-warm-gold";
  return "bg-red-100 text-red-800";
};

const BrewingGuide = () => {
  return (
    <Layout>
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Brewing & Preparation Guide
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Master different brewing methods and make café-quality coffee at home.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 space-y-8">
          {brewingGuides.map((guide) => (
            <div key={guide.id} className="bg-card rounded-lg border border-border p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="font-display text-2xl font-bold text-card-foreground">{guide.method}</h2>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${difficultyColor(guide.difficulty)}`}>
                  {guide.difficulty}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Clock className="h-3.5 w-3.5" /> {guide.brewTime}
                </span>
              </div>
              <p className="text-sm text-accent font-medium mb-1">Best for: {guide.bestFor}</p>

              <div className="mt-4 mb-4">
                <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-1">
                  <ChefHat className="h-4 w-4" /> Equipment
                </h4>
                <div className="flex flex-wrap gap-2">
                  {guide.equipment.map((e) => (
                    <span key={e} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">{e}</span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-sm text-foreground mb-2">Steps</h4>
                <ol className="list-decimal list-inside space-y-2">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-foreground mb-2">💡 Tips</h4>
                <ul className="list-disc list-inside space-y-1">
                  {guide.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BrewingGuide;
